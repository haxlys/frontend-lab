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

    # Check lazyweb token
    local LAZYWEB_TOKEN=""
    if [ -f ~/.lazyweb/lazyweb_mcp_token ]; then
      LAZYWEB_TOKEN=$(head -1 ~/.lazyweb/lazyweb_mcp_token)
    elif [ -n "${LAZYWEB_MCP_TOKEN:-}" ]; then
      LAZYWEB_TOKEN="$LAZYWEB_MCP_TOKEN"
    else
      echo "  ERROR: No lazyweb token found at ~/.lazyweb/lazyweb_mcp_token"
      echo "  Run: curl -fsSL https://www.lazyweb.com/install.sh | bash"
      exit 1
    fi

    rm -rf "$run_dir"
    cp -a "$GROUPS_DIR/$group" "$run_dir"

    # Remove the group-level opencode.json from the target dir (it's mounted separately)
    rm -f "$run_dir/opencode.json"

    # Generate runtime opencode.json with actual token
    local RUNTIME_JSON=$(mktemp)
    awk -v tok="$LAZYWEB_TOKEN" '{gsub(/___LAZYWEB_TOKEN___/, tok); print}' "$GROUPS_DIR/$group/opencode.json" > "$RUNTIME_JSON"

    TASK_PROMPT=$(cat "$TASKS_DIR/$task.md")
    TMPLOG=$(mktemp)
    docker run --rm \
      -v "$run_dir:/project" \
      -v "$RUNTIME_JSON:/root/.config/opencode/opencode.json:ro" \
      -w /project \
      "$DOCKER_IMAGE" \
      run -m "$MODEL" \
      "$TASK_PROMPT" > "$TMPLOG" 2>&1 && rc=0 || rc=$?
    cat "$TMPLOG" >> "$run_dir/session.log"
    rm "$TMPLOG" "$RUNTIME_JSON"

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
