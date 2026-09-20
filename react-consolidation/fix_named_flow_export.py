#!/usr/bin/env python3
"""Narrow repair of the installed legacy InteractiveFlow compatibility export.

No package changes, reinstallation, network calls, agent work, or publishing.
"""
import argparse
import re
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path

PATTERN = re.compile(r'export \{default, useGovernedFlow\} from ([\'\"])([^\'\"\n]+)\1;\n?\Z')
FIXED = re.compile(r'export \{default, default as InteractiveFlow, useGovernedFlow\} from ([\'\"])([^\'\"\n]+)\1;\n?\Z')

def fix(workspace: Path, apply: bool = False):
    root = workspace.resolve()
    component = root / 'artifacts/snapspace/src/components/InteractiveFlow.tsx'
    assert component.is_file(), f'Expected installed compatibility component not found: {component}'
    before = component.read_text()
    if FIXED.fullmatch(before):
        return 'ALREADY FIXED: no changes required'
    match = PATTERN.fullmatch(before)
    assert match, 'STOP: unexpected component content; do not overwrite source'
    target = (component.parent / match.group(2)).with_suffix('.tsx')
    assert target.is_file(), f'STOP: prepared flow target missing: {target}'
    replacement = f'export {{default, default as InteractiveFlow, useGovernedFlow}} from {match.group(1)}{match.group(2)}{match.group(1)};\n'
    if not apply:
        return 'PASS: shim can be repaired with one named export; no file changed'
    backup = root/'.snapspace-backups'/('flow-named-export-'+datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ'))
    backup.mkdir(parents=True, exist_ok=False)
    shutil.copy2(component, backup/'InteractiveFlow.tsx')
    component.write_text(replacement)
    assert component.read_text()==replacement
    return f'PASS: fixed one export; backup at {backup}'

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('workspace')
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    try:
        print(fix(Path(args.workspace), args.apply))
    except (AssertionError, OSError) as exc:
        print(exc, file=sys.stderr)
        sys.exit(2)