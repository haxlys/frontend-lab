#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GROUPS_DIR="$SCRIPT_DIR/groups"
TASKS_DIR="$SCRIPT_DIR/tasks"
OUTPUT_DIR="$SCRIPT_DIR/output"
DOCKER_IMAGE="opencode-experiment:latest"
MODEL="commandcode/deepseek/deepseek-v4-pro"
RUN_COUNT=2

groups="baseline taste uiux design-doc combined"
tasks="task1 task2"

mkdir -p "$OUTPUT_DIR"

run_one() {
  local group="$1"
  local task="$2"
  local run_num="$3"

  local task_short="${task#task}"
  local run_dir="$OUTPUT_DIR/${group}-t${task_short}-r${run_num}"

  if [ -f "$run_dir/package.json" ] && [ -f "$run_dir/session.log" ]; then
    echo "SKIP (already done): ${group}-t${task_short}-r${run_num}"
    return 0
  fi

  echo "========================================"
  echo "RUN: ${group} — t${task_short} — r${run_num}  [$(date '+%H:%M:%S')]"
  echo "========================================"

  rm -rf "$run_dir"
  cp -a "$GROUPS_DIR/$group" "$run_dir"

  local task_file="$TASKS_DIR/$task.md"
  local TASK_PROMPT
  TASK_PROMPT=$(cat "$task_file")

  local rc=0
  docker run --rm \
    -v "$run_dir:/project" \
    -v "$SCRIPT_DIR/opencode.json:/root/.config/opencode/opencode.json:ro" \
    -w /project \
    "$DOCKER_IMAGE" \
    run -m "$MODEL" \
    "$TASK_PROMPT" 2>&1 | tee "$run_dir/session.log" || rc=$?

  if [ $rc -ne 0 ]; then
    echo "  WARN: opencode exited with code $rc"
  fi

  if [ -f "$run_dir/package.json" ] && [ ! -d "$run_dir/node_modules" ]; then
    echo "  Installing dependencies..."
    docker run --rm \
      -v "$run_dir:/project" \
      -w /project \
      "$DOCKER_IMAGE" \
      npm install 2>&1 | tee -a "$run_dir/session.log" || true
  fi

  echo "  DONE: ${group}-t${task_short}-r${run_num}  [$(date '+%H:%M:%S')]"
  echo ""
}

echo "Experiment started at $(date)"
echo "Model: $MODEL"
echo "Groups: $groups"
echo "Tasks: $tasks"
echo ""

for group in $groups; do
  for task in $tasks; do
    for run_num in $(seq 1 $RUN_COUNT); do
      run_one "$group" "$task" "$run_num"
    done
  done
done

echo "========================================"
echo "All experiments completed at $(date)"
echo "Results in: $OUTPUT_DIR"
echo "========================================"

echo ""
echo "Summary:"
for dir in "$OUTPUT_DIR"/*/; do
  name="$(basename "$dir")"
  if [ -f "$dir/package.json" ] && [ -f "$dir/session.log" ]; then
    lines=$(wc -l < "$dir/session.log")
    echo "  ✅ $name ($lines log lines)"
  else
    echo "  ❌ $name (incomplete)"
  fi
done 2>/dev/null
