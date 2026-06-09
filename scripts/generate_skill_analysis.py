#!/usr/bin/env python3
"""
Generate Skill Invocation Analysis section for summary-report.md.

Reads skill_invocations.csv + blind_scores.csv from an experiment's evaluation/ dir
and outputs a Markdown section ready to embed in summary-report.md.

Usage: python3 scripts/generate_skill_analysis.py <experiment_dir>
"""
import sys
import os
import csv
from collections import defaultdict


def load_csv(path: str) -> list:
    with open(path, 'r', newline='') as f:
        return list(csv.DictReader(f))


def avg(vals):
    vals = [v for v in vals if v is not None]
    return sum(vals) / len(vals) if vals else 0.0


def analyze(experiment_dir: str):
    eval_dir = os.path.join(experiment_dir, 'evaluation')
    skill_path = os.path.join(eval_dir, 'skill_invocations.csv')
    scores_path = os.path.join(eval_dir, 'blind_scores.csv')

    if not os.path.isfile(skill_path) or not os.path.isfile(scores_path):
        print("ERROR: skill_invocations.csv or blind_scores.csv not found", file=sys.stderr)
        sys.exit(1)

    skills = {r['Run']: r for r in load_csv(skill_path)}
    scores = load_csv(scores_path)

    dims = ['visual_appeal', 'layout_clarity', 'color_contrast', 'spacing_hierarchy',
            'responsive_quality', 'typography', 'overall_professionalism']

    print("## Skill Invocation Analysis\n")

    # 1. Overall invocation rate
    total = len(scores)
    invoked = sum(1 for s in scores if skills.get(s['name'], {}).get('Skill_Invoked') == 'true')
    print(f"### Overview\n")
    print(f"| Metric | Value |")
    print(f"|---|---|")
    print(f"| Total runs | {total} |")
    print(f"| Skill invoked | {invoked} ({invoked * 100 // total}%) |")
    print(f"| Skill NOT invoked | {total - invoked} ({(total - invoked) * 100 // total}%) |")
    print()

    # 2. Per-group invocation table
    groups = defaultdict(lambda: {'total': 0, 'invoked': 0, 'skills': set()})
    for s in scores:
        g = s['group']
        groups[g]['total'] += 1
        sk = skills.get(s['name'], {})
        if sk.get('Skill_Invoked') == 'true':
            groups[g]['invoked'] += 1
            for name in sk.get('Skill_Names', '').split(';'):
                if name:
                    groups[g]['skills'].add(name)

    print("### Skill Invocation by Group\n")
    print("| Group | Invoked / Total | Rate | Skills Used |")
    print("|---|---|---|---|")
    for g in sorted(groups):
        d = groups[g]
        rate = f"{d['invoked'] * 100 // d['total']}%" if d['total'] > 0 else "N/A"
        names = ', '.join(sorted(d['skills'])) if d['skills'] else 'N/A'
        print(f"| {g} | {d['invoked']}/{d['total']} | {rate} | {names} |")
    print()

    # 3. Score comparison: invoked vs not-invoked
    invoked_scores = {d: [] for d in dims}
    not_invoked_scores = {d: [] for d in dims}
    for s in scores:
        sk = skills.get(s['name'], {})
        target = invoked_scores if sk.get('Skill_Invoked') == 'true' else not_invoked_scores
        for d in dims:
            try:
                target[d].append(int(s[d]))
            except (ValueError, KeyError):
                pass

    print("### Score Comparison: Skill Invoked vs Not Invoked\n")
    print("| Dimension | Invoked (avg) | Not Invoked (avg) | Delta |")
    print("|---|---|---|---|")
    for d in dims:
        ia = avg(invoked_scores[d])
        na = avg(not_invoked_scores[d])
        delta = ia - na
        sign = '+' if delta >= 0 else ''
        print(f"| {d.replace('_', ' ').title()} | {ia:.2f} | {na:.2f} | {sign}{delta:.2f} |")
    print()

    # 4. Per-task invocation rate
    tasks = defaultdict(lambda: {'total': 0, 'invoked': 0})
    for s in scores:
        t = s['task']
        tasks[t]['total'] += 1
        sk = skills.get(s['name'], {})
        if sk.get('Skill_Invoked') == 'true':
            tasks[t]['invoked'] += 1

    print("### Skill Invocation by Task\n")
    print("| Task | Invoked / Total | Rate |")
    print("|---|---|---|")
    for t in sorted(tasks):
        d = tasks[t]
        rate = f"{d['invoked'] * 100 // d['total']}%" if d['total'] > 0 else "N/A"
        print(f"| {t} | {d['invoked']}/{d['total']} | {rate} |")
    print()

    # 5. Group x Task detailed matrix
    print("### Invocation Matrix (Group x Task)\n")
    gt = defaultdict(lambda: defaultdict(lambda: {'total': 0, 'invoked': 0}))
    for s in scores:
        g, t = s['group'], s['task']
        gt[g][t]['total'] += 1
        sk = skills.get(s['name'], {})
        if sk.get('Skill_Invoked') == 'true':
            gt[g][t]['invoked'] += 1

    all_tasks = sorted(set(s['task'] for s in scores))
    all_groups = sorted(gt.keys())

    header = "| Group | " + " | ".join(all_tasks) + " |"
    sep = "|---|" + "|".join(["---"] * len(all_tasks)) + "|"
    print(header)
    print(sep)
    for g in all_groups:
        cells = []
        for t in all_tasks:
            d = gt[g][t]
            if d['total'] > 0:
                cells.append(f"{d['invoked']}/{d['total']}")
            else:
                cells.append("N/A")
        print(f"| {g} | " + " | ".join(cells) + " |")
    print()

    # 6. Key observations
    baseline_invoke = groups.get('baseline', {}).get('invoked', 0)
    print("### Key Observations\n")

    # Which groups never invoke
    never_invoke = [g for g, d in groups.items() if d['invoked'] == 0 and g != 'baseline']
    if never_invoke:
        print(f"- Groups that never invoked skills despite having them available: **{', '.join(never_invoke)}**")
        print("  - This means their results are de facto baseline-equivalent regression runs.")

    # Task skew
    t1_rate = tasks.get('t1', {}).get('invoked', 0) / max(tasks.get('t1', {}).get('total', 1), 1)
    t2_rate = tasks.get('t2', {}).get('invoked', 0) / max(tasks.get('t2', {}).get('total', 1), 1)
    if abs(t1_rate - t2_rate) > 0.2:
        higher = 'Task 2' if t2_rate > t1_rate else 'Task 1'
        print(f"- **{higher}** triggers skill invocation significantly more often")
        print(f"  (t1: {t1_rate:.0%}, t2: {t2_rate:.0%})")

    # Score correlation
    ia_overall = avg(invoked_scores['overall_professionalism'])
    na_overall = avg(not_invoked_scores['overall_professionalism'])
    if ia_overall > na_overall:
        print(f"- Skill-invoked runs score **higher** overall (+{ia_overall - na_overall:.2f} on professionalism)")
    elif ia_overall < na_overall:
        print(f"- Skill-invoked runs score **lower** overall ({ia_overall - na_overall:.2f} on professionalism)")
        print("  - Caveat: skill invocation may correlate with harder tasks or certain groups")

    print()
    print("> Run `scripts/merge_skill_metrics.py <experiment_dir>` to regenerate this data.")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <experiment_dir>", file=sys.stderr)
        sys.exit(1)
    analyze(sys.argv[1])
