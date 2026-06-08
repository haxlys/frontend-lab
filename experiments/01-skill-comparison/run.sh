#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Experiment 01: Skill Comparison — Docker-based Run Script
# Usage:
#   bash run.sh                    # Run all groups × all tasks × 2 runs
#   bash run.sh <group>            # Run specific group only
#   bash run.sh <group> <task>     # Run specific group + task only
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GROUPS_DIR="$SCRIPT_DIR/groups"
TASKS_DIR="$SCRIPT_DIR/tasks"
OUTPUT_DIR="$SCRIPT_DIR/output"
DOCKER_IMAGE="opencode-experiment:latest"  # built from Dockerfile (node:22-alpine + opencode + git)
MODEL="commandcode/deepseek/deepseek-v4-pro"

RUN_COUNT=2

groups="baseline taste uiux design-doc combined"
tasks="task1 task2"

usage() {
  echo "Usage: $0 [group] [task]"
  echo "  group: $groups"
  echo "  task:  $tasks"
  echo "  (omit both to run all)"
  exit 1
}

run_experiment() {
  local group="$1"
  local task="$2"
  local run_num="$3"

  local task_short="${task#task}"
  local run_dir="$OUTPUT_DIR/${group}-t${task_short}-r${run_num}"

  echo "========================================"
  echo "${group} — ${task} (run ${run_num})"
  echo "Output: $run_dir"
  echo "========================================"

  rm -rf "$run_dir"
  cp -a "$GROUPS_DIR/$group" "$run_dir"

  local task_file="$TASKS_DIR/$task.md"
  if [ ! -f "$task_file" ]; then
    echo "ERROR: Task file not found: $task_file"
    return 1
  fi

  TASK_PROMPT=$(cat "$task_file")

  docker run --rm \
    -v "$run_dir:/project" \
    -v "$SCRIPT_DIR/opencode.json:/root/.config/opencode/opencode.json:ro" \
    -w /project \
    "$DOCKER_IMAGE" \
    run -m "$MODEL" \
    "$TASK_PROMPT" 2>&1 | tee "$run_dir/session.log"

  # Run npm install so generated project can be previewed
  if [ -f "$run_dir/package.json" ] && [ ! -d "$run_dir/node_modules" ]; then
    echo "Running npm install..."
    docker run --rm \
      -v "$run_dir:/project" \
      -w /project \
      "$DOCKER_IMAGE" \
      npm install 2>&1 | tee -a "$run_dir/session.log"
  fi

  echo ""
}

screenshot_output() {
  local run_dir="$1"
  local label="${2:-screenshot}"

  if [ ! -f "$run_dir/package.json" ]; then
    echo "  SKIP: no package.json"
    return
  fi

  # Install deps on host (fixes linux arm64 vs darwin arch)
  (cd "$run_dir" && npm install --silent 2>/dev/null)

  local ss_dir="$SCRIPT_DIR/screenshots"
  mkdir -p "$ss_dir"

  # Start Vite in background (fully detached, subshell to avoid CWD change)
  (cd "$run_dir" && nohup npx vite --port 5173 --host > /dev/null 2>&1 &)
  sleep 4

  # Check Vite is up
  if ! curl -s -o /dev/null http://127.0.0.1:5173; then
    echo "  WARN: Vite did not start"
    pkill -f "vite.*--port 5173" 2>/dev/null || true
    return
  fi

  # Kill any stale agent-browser daemon
  pkill -f "agent-browser" 2>/dev/null || true
  sleep 1

  # Apple Silicon: headless mode stuck at about:blank — use --headed
  agent-browser open "http://127.0.0.1:5173" --headed 2>&1 || true
  sleep 3

  for viewport in "1440,900:desktop" "768,1024:tablet" "375,667:mobile"; do
    local size="${viewport%%:*}"
    local name="${viewport##*:}"
    local ss_file="$ss_dir/${label}-${name}.png"
    echo "  Screenshot: $name ($size)"
    # shellcheck disable=SC2046
    agent-browser set viewport $(echo "$size" | tr ',' ' ') > /dev/null 2>&1 || true
    sleep 1
    agent-browser screenshot "$ss_file" > /dev/null 2>&1 || true
  done

  # Cleanup: close session and kill daemon
  agent-browser close --all 2>&1 || true
  pkill -f "agent-browser" 2>/dev/null || true

  pkill -f "vite.*--port 5173" 2>/dev/null || true
}

# Optional: run screenshots for all completed outputs
screenshots_all() {
  for dir in "$OUTPUT_DIR"/*/; do
    local group_run="$(basename "$dir")"
    echo "Screenshots: $group_run"
    screenshot_output "$dir" "$group_run"
  done
  echo "All screenshots done → $SCRIPT_DIR/screenshots/"
}

main() {
  if [ "${1:-}" = "--screenshots" ]; then
    screenshots_all
    return
  fi

  local filter_group="${1:-}"
  local filter_task="${2:-}"

  for group in $groups; do
    [ -n "$filter_group" ] && [ "$group" != "$filter_group" ] && continue
    for task in $tasks; do
      [ -n "$filter_task" ] && [ "$task" != "$filter_task" ] && continue
      for run_num in $(seq 1 $RUN_COUNT); do
        run_experiment "$group" "$task" "$run_num"
      done
    done
  done

  echo "========================================"
  echo "All experiments completed!"
  echo "Results in: $OUTPUT_DIR"
  echo "========================================"
}

main "$@"
