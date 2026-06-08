#!/usr/bin/env bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GROUPS_DIR="$SCRIPT_DIR/groups"
TASKS_DIR="$SCRIPT_DIR/tasks"
OUTPUT_DIR="$SCRIPT_DIR/output"
DOCKER_IMAGE="opencode-experiment:latest"
MODEL="commandcode/deepseek/deepseek-v4-pro"

declare -a FAILED=(
  "baseline" "task1" "1"
  "baseline" "task2" "1"
  "baseline" "task2" "2"
  "design-doc" "task2" "1"
  "design-doc" "task2" "2"
  "taste" "task2" "1"
  "taste" "task2" "2"
  "uiux" "task1" "1"
  "uiux" "task2" "1"
)

len=${#FAILED[@]}
for ((i=0; i<len; i+=3)); do
  group="${FAILED[i]}"
  task="${FAILED[i+1]}"
  run_num="${FAILED[i+2]}"
  task_short="${task#task}"
  run_dir="$OUTPUT_DIR/${group}-t${task_short}-r${run_num}"

  echo "=== $group t$task_short r$run_num [$(date '+%H:%M:%S')] ==="

  rm -rf "$run_dir"
  cp -a "$GROUPS_DIR/$group" "$run_dir"

  TASK_PROMPT=$(cat "$TASKS_DIR/$task.md")
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

  # If code ended up in subdirectory, flatten
  if [ ! -f "$run_dir/package.json" ]; then
    for sub in "$run_dir"/*/; do
      [ ! -d "$sub" ] && continue
      subname=$(basename "$sub")
      if [ -f "$sub/package.json" ]; then
        echo "  Flattening from $subname/"
        for item in "$sub"* "$sub".[!.]* "$sub"..?*; do
          [ -e "$item" ] && mv -f "$item" "$run_dir/" 2>/dev/null
        done
        rmdir "$sub" 2>/dev/null || true
        break
      fi
    done
  fi

  if [ -f "$run_dir/package.json" ]; then
    echo "  $group t$task_short r$run_num ✅"
  else
    echo "  $group t$task_short r$run_num ❌ (no package.json)"
  fi
  echo ""
done

echo "ALL RETRIES COMPLETE at $(date)"
