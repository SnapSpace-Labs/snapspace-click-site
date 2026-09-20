#!/usr/bin/env python3
"""Read-only sanity check for the protected original GitHub baseline and exact design references."""
import hashlib
import json
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parent.parent
manifest = json.loads((root / 'recovery/baseline-inventory.json').read_text())
for page in manifest['eight_pages']:
    file = root / page['file']
    if not file.is_file():
        raise SystemExit(f"MISSING: {page['file']}")
    actual = hashlib.sha256(file.read_bytes()).hexdigest()
    if actual != page['sha256']:
        raise SystemExit(f"CHANGED ORIGINAL: {page['file']}")
    print(f"ORIGINAL PASS: {page['page']}")
references = {
    'approved-eight-page-board.png': '01e494d1291a54f9ff5c968296e82ee468f38f681d6c631f1d8862d65e97d18f',
    'motion-system-board-reference.jpg': '152c90f3bcab2a2ee34602af5bbf52e492d9f5cffaab7ace62adc5643ca25ba2',
}
for name, expected in references.items():
    actual = hashlib.sha256((root / 'recovery' / name).read_bytes()).hexdigest()
    if actual != expected:
        raise SystemExit(f'CHANGED APPROVED REFERENCE: {name}')
    print(f'REFERENCE PASS: {name}')