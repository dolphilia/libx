#!/usr/bin/env python3
"""Read-only footer overlay verification and unchanged saved whole-review gates."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile


def sha(value):
    return hashlib.sha256(value).hexdigest()


def check(packet, app, expected_manifest_sha):
    raw = (app / 'meta/document-context-v4.json').read_bytes()
    if sha(raw) != expected_manifest_sha:
        raise ValueError('Display overlay manifest SHA mismatch')
    manifest = json.loads(raw)
    if manifest['schemaVersion'] != 1 or manifest['kind'] != 'jq-document-context-display-overlay':
        raise ValueError('Unknown display overlay')
    if sha((packet / 'CONTENT_REVIEW.json').read_bytes()) != manifest['reviewManifestSHA256']:
        raise ValueError('Saved review changed')
    review = json.loads((packet / 'CONTENT_REVIEW.json').read_text())
    expected = {f'src/content/docs/v1-8-2/{lang}/{page["id"]}': page[role]
                for page in review['pages'] for lang, role in [('en', 'canonical'), ('ja', 'translation')]}
    records = manifest['records']
    if len(records) != 36 or {row['path'] for row in records} != set(expected):
        raise ValueError('Display overlay page scope mismatch')
    with tempfile.TemporaryDirectory(prefix='libx-jq-review-reconstruction-') as directory:
        restored_app = Path(directory) / 'app'
        shutil.copytree(app, restored_app, ignore=shutil.ignore_patterns('node_modules', 'dist', '.astro'))
        changed = 0
        for row in records:
            relative = row['path']
            current = (app / relative).read_text()
            if sha(current.encode()) != row['after']:
                raise ValueError('Current document differs: ' + relative)
            match = re.match(r'^---\n[\s\S]*?\n---\n', current)
            if not match:
                raise ValueError('Missing Frontmatter: ' + relative)
            body = current[match.end():]
            if sha(body.encode()) != row['bodyAfter']:
                raise ValueError('Current body differs: ' + relative)
            if row['context'] is None:
                original = current
                if row['removed'] or row['side'] is not None:
                    raise ValueError('Invalid unchanged document')
            else:
                changed += 1
                context_line = 'documentContext: ' + json.dumps(row['context'], ensure_ascii=False, separators=(',', ':')) + '\n'
                expected_frontmatter = row['frontmatterBefore'][:-4] + context_line + '---\n'
                if current[:match.end()] != expected_frontmatter:
                    raise ValueError('Metadata or footer note differs: ' + relative)
                encoded_context = json.dumps(row['context'], ensure_ascii=False, separators=(',', ':')).encode()
                if sha(encoded_context) != row['contextSha256']:
                    raise ValueError('Footer context hash mismatch')
                if row['side'] == 'suffix':
                    original_body = body + row['removed']
                elif row['side'] == 'prefix':
                    original_body = row['removed'] + body
                else:
                    raise ValueError('Invalid note location')
                if sha(original_body.encode()) != row['bodyBefore']:
                    raise ValueError('Original technical body cannot be reconstructed')
                original = row['frontmatterBefore'] + original_body
            record = expected[relative]
            saved = (packet / record['path']).read_bytes()
            if sha(original.encode()) != record['sha256'] or original.encode() != saved or row['before'] != record['sha256']:
                raise ValueError('Reconstruction differs from reviewed document: ' + relative)
            (restored_app / relative).write_text(original)
        if changed != manifest['changedPages'] or changed != 34:
            raise ValueError('Unexpected moved-note scope')
        result = subprocess.run([sys.executable, str(Path(__file__).with_name('check-content-v3.py')),
                                 '--packet', str(packet), '--app', str(restored_app)], capture_output=True, text=True)
        if result.returncode:
            raise ValueError('Saved review gates failed: ' + result.stdout + result.stderr)
        proof = json.loads(result.stdout)
    proof.update(status='passed-display-overlay-and-saved-whole-review-binding',
                 displayChangedPages=changed, appFiles=36, presentationManifestSHA256=sha(raw),
                 semanticReviewPerformedByThisChecker=False, releaseReady=False,
                 buildDisplayIntegration='separate-evidence-required')
    return proof


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--packet', type=Path, required=True)
    parser.add_argument('--app', type=Path, required=True)
    parser.add_argument('--presentation-sha256', required=True)
    args = parser.parse_args()
    try:
        print(json.dumps(check(args.packet.resolve(), args.app.resolve(), args.presentation_sha256), ensure_ascii=False, indent=2))
    except (OSError, ValueError, KeyError, TypeError) as error:
        print(json.dumps({'status': 'failed', 'errors': [str(error)], 'releaseReady': False}, ensure_ascii=False))
        sys.exit(1)
