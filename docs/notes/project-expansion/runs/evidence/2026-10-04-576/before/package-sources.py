"""Provide editable gperf document sources, with reproducible archive metadata.

Libx document conversion/packaging additions are offered under GPL-3.0-or-later.
Original notices and separate manual permissions remain applicable.
"""
from pathlib import Path
import gzip, hashlib, io, json, sys, tarfile

root = Path(__file__).resolve().parents[3]
note = root / 'docs/notes/document-import/gperf/3.3'
app = root / 'apps/gperf'
sha = lambda data: hashlib.sha256(data).hexdigest()
source = json.loads((note / 'SOURCE_MANIFEST.json').read_text())
translation = json.loads((note / 'translations/TRANSLATION_MANIFEST-571.json').read_text())
files = {}

def add(relative, expected=None):
    p = root / relative
    assert p.is_file() and not p.is_symlink(), relative
    data = p.read_bytes()
    if expected is not None:
        assert sha(data) == expected, relative
    assert relative not in files, relative
    files[relative] = data

for item in source['files'] + [source['archive']]:
    add(item['path'], item['sha256'])
for item in translation['files']:
    add(str((note / 'translations' / item['path']).relative_to(root)), item['sha256'])
for name in ['SOURCE_MANIFEST.json', 'CONTENT_MAP.json', 'RIGHTS_FULFILLMENT.json']:
    add(str((note / name).relative_to(root)))
add(str((note / 'translations/TRANSLATION_MANIFEST-571.json').relative_to(root)))
for name in ['import.mjs', 'render-man.cjs', 'check-rendered.mjs', 'package-sources.py']:
    add('scripts/document-import/gperf/' + name)
for helper in ['scripts/importers/batch-import-output.js', 'scripts/importers/safe-import-output.js', 'scripts/atomic-paths.js']:
    add(helper)
for relative in ['package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml']:
    add(relative)
for subtree in ['src', 'meta']:
    folder = app / subtree
    if folder.exists():
        for p in sorted(folder.rglob('*')):
            if p.is_file():
                add(str(p.relative_to(root)))
for name in ['package.json', 'astro.config.mjs', 'tsconfig.json']:
    if (app / name).exists():
        add(str((app / name).relative_to(root)))
for p in sorted((app / 'public').rglob('*')):
    if p.is_file() and not p.name.startswith('libx-gperf-3.3-document-sources'):
        add(str(p.relative_to(root)))

documents = [p for p in files if '/src/content/docs/v3-3/' in p and p.endswith('.md')]
assert len(documents) == 4
readme = '''# GNU gperf 3.3 document editing sources / 文書の編集用ソース

This package provides the preferred editable English canonical and Japanese Markdown,
the fixed upstream archive and documentation inputs, translation HTML fragments,
conversion scripts, and the Libx app configuration and custom copy UI source.
Paths below this directory retain their Libx repository layout.

固定GNU gperf 3.3原配布アーカイブ、全英日Markdown 4ファイル、原入力、訳文HTML断片、
生成器、アプリ設定とコピー操作のソースを、編集可能な形で収録しています。
利用ガイドの版表示は第3.2版（2024年10月28日）、CLIは3.3（2025年4月）です。
ソフトウェアの版と文書の版を混同していません。

Upstream: https://ftp.gnu.org/pub/gnu/gperf/gperf-3.3.tar.gz
SHA-256: fd87e0aba7e43ae054837afd6cd4db03a3f2693deb3619085e6ed9d8d9604ad8
The detached signature is not cryptographically verified; the fixed hash is an integrity record.
署名の暗号学的検証は未実施です。固定ハッシュは整合性の記録です。

## Notices / 通知

The complete derived user guide uses the original manual permission notice, reproduced
in each guide. The entire original English GPL chapter remains unchanged. This guide
permission takes precedence over the software-license fallback.
The complete CLI work, including unofficial Japanese translation, formatting, and separate
editorial notes, is provided under GPL-3.0-or-later using the annotated software-license
fallback. The original man-page notice and complete COPYING are preserved.
Libx gperf conversion, checking, packaging, and custom copy-UI additions are provided
under GPL-3.0-or-later. Existing shared Libx code retains its existing conditions;
this notice does not relicense it or the other upstream components.

利用ガイドの派生物全体には、各本文に保持した原マニュアルと同一の許諾通知を適用します。
原英語のGPL章は変更していません。ガイド固有の許諾を本体GPLで置き換えていません。
CLIの日本語訳・整形・別掲の編集注記を含む全体には、文書専用の別許諾が未確認のため、
注釈付きでソフトウェア本体のGPL-3.0-or-laterを適用しています。
原manの著作権・許諾・無保証通知とCOPYING全文を保存しています。
Libxのgperf用変換・検査・梱包・コピーUIの追加部分をGPL-3.0-or-laterで提供します。
既存の共有Libxコードと他の原配布成分の条件はそれぞれ保持し、一括で再許諾していません。

Libx modification date (Japan Standard Time): 2026-10-04.
Changes: unofficial Japanese translation, format and internal-link conversion, original
notice preservation, three separately marked editorial notes, and functional code-copy controls.
Libx変更日（日本標準時）: 2026-10-04。変更は非公式日本語訳、書式・内部リンク、
原通知の保持、別掲した3編集注記、通常コード例へのコピー操作です。

## Regeneration / 再生成

The editable Markdown can be reused directly, subject to the applicable notices.
For the full site environment, use Libx https://github.com/dolphilia/libx at baseline
077b6923e2fbede0b6c1e43656ae7d7316ffcbb4, then overlay this package's files.
Shared UI/packages and general-purpose external dependencies are supplied by that
repository and the registries; this is a document-editing source package, not a complete
self-contained site distribution. Requires Node >=20, pnpm10.10.0 and Python3.

pnpm install --frozen-lockfile
node scripts/document-import/gperf/import.mjs --check
pnpm --filter apps-gperf build
node scripts/document-import/gperf/check-rendered.mjs
python3 scripts/document-import/gperf/package-sources.py --check

Markdownは各通知に従い直接編集できます。サイト環境での再生成には、上記Libx固定commitへ
このパッケージを重ね、既存の共有パッケージと一般的な依存関係を使用します。
この配布物は文書の編集用ソースであり、サイト全体を単独実行する配布物ではありません。
FILE_MANIFEST.json records each member SHA-256; it is not a content-review certificate.
FILE_MANIFEST.jsonは各収録ファイルの整合性一覧であり、内容レビュー合格証明ではありません。
'''
files['README.md'] = readme.encode()
manifest = {'softwareVersion': '3.3', 'manualEdition': '3.2', 'documents': 4,
            'files': [{'path': p, 'sha256': sha(data)} for p, data in sorted(files.items())]}
files['FILE_MANIFEST.json'] = (json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode()
raw = io.BytesIO()
with tarfile.open(fileobj=raw, mode='w', format=tarfile.PAX_FORMAT) as archive:
    for name, data in sorted(files.items()):
        member = tarfile.TarInfo('libx-gperf-3.3-document-sources/' + name)
        member.size = len(data)
        member.mtime = 0
        member.mode = 0o644
        member.uid = member.gid = 0
        member.uname = member.gname = ''
        archive.addfile(member, io.BytesIO(data))
compressed = io.BytesIO()
with gzip.GzipFile(fileobj=compressed, mode='wb', filename='', mtime=0) as stream:
    stream.write(raw.getvalue())
data = compressed.getvalue()
destination = app / 'public/source/v3-3/libx-gperf-3.3-document-sources.tar.gz'
digest_file = Path(str(destination) + '.sha256')
digest_text = sha(data) + '  ' + destination.name + '\n'
if '--check' in sys.argv:
    assert destination.read_bytes() == data, 'Archive stale or missing'
    assert digest_file.read_text() == digest_text, 'Digest stale or missing'
else:
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(data)
    digest_file.write_text(digest_text)
print(json.dumps({'mode': 'check' if '--check' in sys.argv else 'generate', 'files': len(files),
                  'documents': 4, 'bytes': len(data), 'sha256': sha(data)}, indent=2))
