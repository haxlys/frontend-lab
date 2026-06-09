#!/usr/bin/env python3
"""
Skill Invocation Extractor
Parses session.log files and extracts:
  - skill_invoked: whether the agent called any skill
  - skill_names: comma-separated names of skills invoked
  - skill_calls: total number of skill invocations
  - first_skill_at_line: line number where the first skill was invoked
  - total_tool_calls: total number of tool calls (lines starting with →)
  - total_lines: total lines in the log
"""

import sys
import os
import re
import csv

ANSI_RE = re.compile(r'\x1b\[[0-9;]*m')
SKILL_RE = re.compile(r'^→ Skill "([^"]+)"')
TOOL_RE = re.compile(r'^→ ')


def parse_session_log(log_path: str) -> dict:
    with open(log_path, 'r', encoding='utf-8', errors='replace') as f:
        raw = f.read()

    lines = [ANSI_RE.sub('', line) for line in raw.split('\n')]

    skill_names = []
    first_skill_at_line = None
    total_tool_calls = 0

    for i, line in enumerate(lines, start=1):
        if TOOL_RE.match(line):
            total_tool_calls += 1
            m = SKILL_RE.match(line)
            if m:
                skill_names.append(m.group(1))
                if first_skill_at_line is None:
                    first_skill_at_line = i

    return {
        'skill_invoked': len(skill_names) > 0,
        'skill_names': ';'.join(skill_names) if skill_names else '',
        'skill_calls': len(skill_names),
        'first_skill_at_line': str(first_skill_at_line) if first_skill_at_line is not None else 'N/A',
        'total_tool_calls': total_tool_calls,
        'total_lines': len(lines),
    }


def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <output_dir>", file=sys.stderr)
        print("  Parses all */session.log files under <output_dir>", file=sys.stderr)
        print("  Outputs CSV to stdout", file=sys.stderr)
        sys.exit(1)

    output_dir = sys.argv[1]

    writer = csv.writer(sys.stdout)
    writer.writerow(['Run', 'Skill_Invoked', 'Skill_Names', 'Skill_Calls',
                      'First_Skill_At_Line', 'Total_Tool_Calls', 'Total_Lines'])

    log_dir = os.path.join(output_dir)
    if not os.path.isdir(log_dir):
        print(f"ERROR: directory not found: {log_dir}", file=sys.stderr)
        sys.exit(1)

    for entry in sorted(os.listdir(log_dir)):
        run_dir = os.path.join(log_dir, entry)
        if not os.path.isdir(run_dir):
            continue
        log_file = os.path.join(run_dir, 'session.log')
        if not os.path.isfile(log_file):
            continue
        metrics = parse_session_log(log_file)
        writer.writerow([
            entry,
            'true' if metrics['skill_invoked'] else 'false',
            metrics['skill_names'],
            metrics['skill_calls'],
            metrics['first_skill_at_line'],
            metrics['total_tool_calls'],
            metrics['total_lines'],
        ])


if __name__ == '__main__':
    main()
