#!/usr/bin/env bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GROUPS_DIR="$SCRIPT_DIR/groups"
TASKS_DIR="$SCRIPT_DIR/tasks"
OUTPUT_DIR="$SCRIPT_DIR/output"
DOCKER_IMAGE="opencode-experiment:latest"
MODEL="commandcode/deepseek/deepseek-v4-pro"

group="$1"
RUN_COUNT=2
tasks="task1 task2"

mkdir -p "$OUTPUT_DIR"

for task in $tasks; do
  task_short="${task#task}"
  for run_num in $(seq 1 $RUN_COUNT); do
    run_dir="$OUTPUT_DIR/${group}-t${task_short}-r${run_num}"

    if [ -f "$run_dir/package.json" ] && [ -f "$run_dir/session.log" ]; then
      echo "SKIP (done): ${group}-t${task_short}-r${run_num}"
      continue
    fi

    echo "=== ${group} t${task_short} r${run_num} [$(date '+%H:%M:%S')] ==="

    rm -rf "$run_dir"
    cp -a "$GROUPS_DIR/$group" "$run_dir"

    if [ "$group" = "reference" ] && [ "$task" = "task2" ]; then
      TASK_PROMPT=$(cat "$TASKS_DIR/task2-reference.md")
    else
      TASK_PROMPT=$(cat "$TASKS_DIR/$task.md")
    fi
    TMPLOG=$(mktemp)
    docker run --rm \
      -v "$run_dir:/project" \
      -v "$SCRIPT_DIR/opencode.json:/root/.config/opencode/opencode.json:ro" \
      -w /project \
      "$DOCKER_IMAGE" \
      run -m "$MODEL" \
      "$TASK_PROMPT" > "$TMPLOG" 2>&1 && rc=0 || rc=$?
    cat "$TMPLOG" >> "$run_dir/session.log"
    rm "$TMPLOG"

    if [ $rc -ne 0 ]; then
      echo "  WARN: exit code $rc"
    fi

    if [ -f "$run_dir/package.json" ] && [ ! -d "$run_dir/node_modules" ]; then
      docker run --rm -v "$run_dir:/project" -w /project "$DOCKER_IMAGE" npm install >> "$run_dir/session.log" 2>&1 || true
    fi

    echo "  DONE [$(date '+%H:%M:%S')]"
  done
done

echo "GROUP $group COMPLETE"
