"""Reproduce the static Libx edition from fixed HTML and reviewed editable inputs.

The archived upstream Markdown remains separately available. The HTML intermediate
already expands includes with mdBook 0.5.4; this script does not execute demos or
rebuild the original website. Python 3.10+; no third-party runtime required.
"""
import argparse
import hashlib
import html
import json
from pathlib import Path
import posixpath
import re


def generate(notes, output):
    fixed = notes / 'regeneration'
    manifest = json.loads((fixed / 'PAGES.json').read_text())
    archive = notes / 'source/mdbook-original.tar.gz'
    assert hashlib.sha256(archive.read_bytes()).hexdigest() == manifest['archiveSha256']
    mapping = {p['htmlPath']: p['name'][:-3] for p in manifest['pages']}
    count = 0
    for page in manifest['pages']:
        raw = (fixed / 'html' / page['htmlPath']).read_bytes()
        assert hashlib.sha256(raw).hexdigest() == page['htmlSha256']
        body = raw.decode()

        def link(match):
            key, url = match.group(1), html.unescape(match.group(2))
            if not url or url.startswith(('#', '/')) or re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', url):
                return match.group(0)
            pathname, separator, anchor = url.partition('#')
            resolved = posixpath.normpath(posixpath.join(posixpath.dirname(page['htmlPath']), pathname))
            target = '/docs/mdbook/v0-5-4/en/01-guide/' + mapping[resolved] + '/' if resolved in mapping else '/docs/mdbook/source-assets/' + resolved
            if separator:
                target += '#' + anchor
            return key + '="' + html.escape(target, quote=True) + '"'

        # Rewrite only actual links, never HTML examples within pre/code blocks.
        chunks, last = [], 0
        for match in re.finditer(r'<pre\b[^>]*>[\s\S]*?</pre>', body):
            chunks.append(re.sub(r'(href|src)="([^"]*)"', link, body[last:match.start()]))
            chunks.append(match.group(0).replace('\n', '&#10;'))
            last = match.end()
        chunks.append(re.sub(r'(href|src)="([^"]*)"', link, body[last:]))
        body = ''.join(chunks).replace('class="boring"', 'data-mdbook-hidden-line="true"')
        body = re.sub(r'(<code\b[^>]*>)([\s\S]*?)(</code>)', lambda m: m[1] + m[2].replace('[', '&#91;').replace(']', '&#93;') + m[3], body)
        body = '\n\n' + body + '\n'
        if page['name'] == '01-index.md':
            body += '\n' + (fixed / 'supplement/original-contents.html.txt').read_text()
        for language in ('en', 'ja'):
            front = (fixed / 'frontmatter' / language / (page['name'] + '.txt')).read_text()
            content = body if language == 'en' else (notes / 'drafts/ja/01-guide' / page['name']).read_text()
            target = output / language / '01-guide' / page['name']
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text('---\n' + front + '---\n' + content)
            count += 1
    return count


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--notes', type=Path, default=Path('docs/notes/document-import/mdbook/v0-5-4'))
    parser.add_argument('--output', type=Path, required=True, help='An output directory distinct from the editable input tree')
    args = parser.parse_args()
    print('Generated', generate(args.notes.resolve(), args.output.resolve()), 'static documents')
