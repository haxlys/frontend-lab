#!/usr/bin/env python3
"""
Merge skill invocation metrics into the existing evaluation metrics.csv.

- Creates backup: metrics.bak.csv
- Produces standalone: skill_invocations.csv
- Merges columns: Skill_Invoked, Skill_Names, Skill_Calls, First_Skill_At_Line
  into the original metrics.csv

Usage: python3 scripts/merge_skill_metrics.py <experiment_dir>
"""
import sys
import os
import csv
import shutil
import subprocess

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
EXTRACTOR = os.path.join(SCRIPT_DIR, 'extract_skill_metrics.py')


def load_skill_csv(output_dir: str) -> dict:
    result = subprocess.run(
        [sys.executable, EXTRACTOR, output_dir],
        capture_output=True, text=True, check=True
    )
    reader = csv.DictReader(result.stdout.strip().split('\n'))
    return {row['Run']: row for row in reader}


def merge(experiment_dir: str):
    eval_dir = os.path.join(experiment_dir, 'evaluation')
    output_dir = os.path.join(experiment_dir, 'output')
    metrics_path = os.path.join(eval_dir, 'metrics.csv')
    skill_path = os.path.join(eval_dir, 'skill_invocations.csv')

    if not os.path.isfile(metrics_path):
        print(f"ERROR: metrics.csv not found at {metrics_path}", file=sys.stderr)
        sys.exit(1)

    skill_data = load_skill_csv(output_dir)

    # Backup original metrics.csv
    backup_path = os.path.join(eval_dir, 'metrics.bak.csv')
    shutil.copy2(metrics_path, backup_path)
    print(f"Backup: {backup_path}")

    # Save standalone skill invocations CSV
    with open(skill_path, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Run', 'Skill_Invoked', 'Skill_Names', 'Skill_Calls',
                          'First_Skill_At_Line', 'Total_Tool_Calls', 'Total_Lines'])
        for run_name in sorted(skill_data):
            row = skill_data[run_name]
            writer.writerow([run_name, row['Skill_Invoked'], row['Skill_Names'],
                              row['Skill_Calls'], row['First_Skill_At_Line'],
                              row['Total_Tool_Calls'], row['Total_Lines']])
    print(f"Skill CSV: {skill_path}")

    # Read existing metrics
    with open(metrics_path, 'r', newline='') as f:
        original = list(csv.reader(f))

    header = original[0]
    data_rows = original[1:]

    new_columns = ['Skill_Invoked', 'Skill_Names', 'Skill_Calls', 'First_Skill_At_Line']
    new_header = header + new_columns

    new_data = []
    for row in data_rows:
        run_name = row[0]
        sk = skill_data.get(run_name, {})
        new_row = row + [
            sk.get('Skill_Invoked', 'false'),
            sk.get('Skill_Names', ''),
            sk.get('Skill_Calls', '0'),
            sk.get('First_Skill_At_Line', 'N/A'),
        ]
        new_data.append(new_row)

    with open(metrics_path, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(new_header)
        writer.writerows(new_data)

    print(f"Merged: {metrics_path}")

    # Print summary
    invoked = sum(1 for r in new_data if r[3] == "true")
    total = len(new_data)
    print(f"Skill invocation rate: {invoked}/{total} ({invoked * 100 // total}%)")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <experiment_dir>", file=sys.stderr)
        sys.exit(1)
    merge(sys.argv[1])
