#!/usr/bin/env python3
"""Read-only structure checks plus binding of saved AI review to current EN/JA.

Does not conduct semantic review or grant publication permission.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def leaves(value, key=''):
    if isinstance(value, str):
        yield key, value
    elif isinstance(value, dict):
        for name, child in value.items():
            yield from leaves(child, f'{key}/{name}' if key else name)
    elif isinstance(value, list):
        for index, child in enumerate(value):
            yield from leaves(child, f'{key}/{index}')


def check(packet, app):
    previous = subprocess.run(
        [sys.executable, str(Path(__file__).with_name('check-content-v2.py')),
         '--packet', str(packet), '--app', str(app)], capture_output=True, text=True)
    if previous.returncode:
        raise ValueError('Structure check failed: ' + previous.stdout + previous.stderr)
    result = json.loads(previous.stdout)
    manifest_path = packet / 'CONTENT_REVIEW.json'
    review = json.loads(manifest_path.read_text())
    pages = review['pages']
    ids = {page['id'] for page in pages}
    if len(ids) != 18 or len(pages) != 18 or ids != set(review['scope']):
        raise ValueError('Review scope mismatch')
    all_fields = {}
    for page in pages:
        if (page['status'] != 'passed' or page['method'] != 'ai-content-review'
                or not page['separateReviewPass'] or not page['model']
                or not page['reviewedAt'] or not page['findings']):
            raise ValueError('Incomplete saved review: ' + page['id'])
        records = {}
        for role in ['source', 'canonical', 'translation', 'rawTranslation']:
            if role not in page:
                if role == 'rawTranslation' and page['id'].startswith('02-license/'):
                    continue
                raise ValueError('Missing record: ' + role)
            record = page[role]
            file = (packet / record['path']).resolve()
            if not file.is_relative_to(packet):
                raise ValueError('Record outside packet')
            if digest(file) != record['sha256']:
                raise ValueError('Stale review record: ' + record['path'])
            records[role] = file
            if role != 'rawTranslation':
                lines = len(file.read_text().removesuffix('\n').split('\n'))
                if record['coverage'] != [[1, lines]]:
                    raise ValueError('Incomplete review coverage: ' + record['path'])
        for role, lang in [('canonical', 'en'), ('translation', 'ja')]:
            actual = app / 'src/content/docs/v1-8-2' / lang / page['id']
            if actual.read_bytes() != records[role].read_bytes():
                raise ValueError('App body differs from reviewed file: ' + str(actual))
        if 'rawTranslation' in records:
            source = dict(leaves(json.loads(records['source'].read_text())))
            translation = dict(leaves(json.loads(records['rawTranslation'].read_text())))
            coverage = page['fieldCoverage']
            name = page['id'].split('/')[-1]
            number = int(name[:2])
            prefix = f'sections/{number - 1}/' if 1 <= number <= 14 else ''
            expected = {prefix + key for key in source}
            if len(coverage) != len(expected) or {x['sourceKey'] for x in coverage} != expected:
                raise ValueError('Field review scope mismatch: ' + name)
            for row in coverage:
                global_key = row['sourceKey']
                key = global_key[len(prefix):]
                if global_key in all_fields or not row['read']:
                    raise ValueError('Duplicate or unread field: ' + global_key)
                for value, hash_name in [(source[key], 'sourceSha256'),
                                         (translation[key], 'translatedSha256')]:
                    if hashlib.sha256(value.encode()).hexdigest() != row[hash_name]:
                        raise ValueError('Stale field review: ' + global_key)
                all_fields[global_key] = True
    if len(all_fields) != 1135 or review['completedPages'] != 18 or review['unreviewedPages'] != 0:
        raise ValueError('Incomplete whole-project review')
    for lang in ['en', 'ja']:
        directory = app / 'src/content/docs/v1-8-2' / lang
        if {str(file.relative_to(directory)) for file in directory.rglob('*.md')} != ids:
            raise ValueError('App page set differs from review: ' + lang)
    result.update(status='passed-content-structure-and-saved-review-binding',
                  fullJapaneseContentReview='recorded-complete-current-hashes',
                  reviewManifestSHA256=digest(manifest_path), reviewedPages=18,
                  reviewedSourceLeaves=1135, semanticReviewPerformedByThisChecker=False,
                  buildDisplayIntegration='separate-evidence-required', releaseReady=False)
    return result


parser = argparse.ArgumentParser()
parser.add_argument('--packet', type=Path, required=True)
parser.add_argument('--app', type=Path, required=True)
args = parser.parse_args()
try:
    result = check(args.packet.resolve(), args.app.resolve())
    print(json.dumps(result, ensure_ascii=False, indent=2))
except (OSError, ValueError, KeyError, TypeError) as error:
    print(json.dumps({'status': 'failed', 'errors': [str(error)], 'releaseReady': False},
                     ensure_ascii=False))
    sys.exit(1)
