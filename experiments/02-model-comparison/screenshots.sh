#!/usr/bin/env bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR/output"
SS_DIR="$SCRIPT_DIR/screenshots"
mkdir -p "$SS_DIR"

screenshot_one() {
  local run_dir="$1"
  local label="$2"

  if [ ! -f "$run_dir/package.json" ]; then
    echo "  SKIP: no package.json"
    return 1
  fi

  kill_port() {
    lsof -ti:5173 | xargs kill -9 2>/dev/null || true
  }
  kill_port

  # Use a temp workspace so two parallel runs don't collide
  # We use distinct ports: offset by index
  local port=$((5173 + (RANDOM % 100)))
  kill_port_alt() {
    lsof -ti:$port | xargs kill -9 2>/dev/null || true
  }

  # Start vite
  (cd "$run_dir" && nohup npx vite --port $port --host > /tmp/vite-$port.log 2>&1 &)
  sleep 4

  if ! curl -s -o /dev/null "http://127.0.0.1:$port"; then
    echo "  WARN: Vite not started on $port"
    lsof -ti:$port | xargs kill -9 2>/dev/null || true
    return 1
  fi

  pkill -f "agent-browser" 2>/dev/null || true
  sleep 1

  agent-browser open "http://127.0.0.1:$port" --headed 2>/dev/null || true
  sleep 4

  for viewport in "1440 900 desktop" "768 1024 tablet" "375 667 mobile"; do
    read -r vw vh vname <<< "$viewport"
    agent-browser set viewport "$vw" "$vh" 2>/dev/null || true
    sleep 1
    agent-browser screenshot "$SS_DIR/${label}-${vname}.png" 2>/dev/null || true
    echo "  ✅ ${label}-${vname}.png"
  done

  agent-browser close --all 2>/dev/null || true
  pkill -f "agent-browser" 2>/dev/null || true
  lsof -ti:$port | xargs kill -9 2>/dev/null || true
  return 0
}

echo "Starting screenshots at $(date)"
echo ""

for dir in "$OUTPUT_DIR"/*/; do
  label="$(basename "$dir")"
  echo "=== $label ==="
  screenshot_one "$dir" "$label" || echo "  FAILED"
done

echo ""
echo "All screenshots done at $(date)"
echo "Output: $SS_DIR/"
ls "$SS_DIR/"*.png 2>/dev/null | wc -l | xargs echo "Total screenshots:"
