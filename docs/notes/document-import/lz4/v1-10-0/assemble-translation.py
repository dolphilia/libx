"""Attach fixed source metadata to one Codex-written Japanese body.

No language model, translation API, source summarization, or review verdict is used.
"""
import argparse, pathlib, json, re, html
ap=argparse.ArgumentParser()
for name in ['root','source','body','title','output']: ap.add_argument('--'+name,required=True)
ap.add_argument('--editorial')
args=ap.parse_args(); root=pathlib.Path(args.root)
notes=root/'docs/notes/document-import/lz4/v1-10-0'
mapping=json.loads((notes/'CONTENT_MAP.json').read_text())
p=next(x for x in mapping['pages'] if x['sourcePath']==args.source)
rights=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/RIGHTS_AND_FULFILLMENT.json').read_text())
license=next(x for x in rights['files'] if x['source']['path'].endswith('/lz4-fixed/'+args.source))
sid='lz4-1-10-0-'+re.sub(r'[^a-z0-9]+','-',args.source.lower()).strip('-')
url='https://github.com/lz4/lz4/blob/'+mapping['commit']+'/'+args.source
note='<p>LZ4 1.10.0 の固定英語原文から作成した非公式日本語訳です。翻訳・整形日: 2026-10-05。原典コミット: <code>'+mapping['commit']+'</code>。原文 SHA-256: <code>'+p['sourceSha256']+'</code>。<a href="'+url+'">固定原典</a>、<a href="/docs/lz4/source/v1-10-0/originals/'+args.source+'.txt">変更していない原文と原通知</a>、<a href="/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz">固定上流ソース全体</a>、<a href="/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt">上流のライセンス適用範囲</a>。原著の著作権・許諾条件・無保証通知を保持しています。</p>'
if license['fallbackAnnotation']:
    note+='<p>文書専用ライセンスの表記が確認できないため、Libxの運用方針に基づき、ソフトウェア本体の '+html.escape(license['license'])+' をこの文書にも適用しています。新たに許諾を取得したという意味ではありません。</p>'
note+='<p>本文は日本語に翻訳しました。コード・URL・API名と原通知を保持し、必要な英語見出しアンカーは実在する定本IDに合わせて明示します。</p>'
fm='---\ntitle: '+json.dumps(args.title,ensure_ascii=False)+'\n'
if sid!='lz4-1-10-0-readme-md':fm+='licenseSource: '+json.dumps(sid)+'\n'
fm+='documentContext:\n  - kind: source\n    html: '+json.dumps(note,ensure_ascii=False)+'\n'
if args.editorial:fm+='  - kind: editorial\n    html: '+json.dumps(pathlib.Path(args.editorial).read_text().strip(),ensure_ascii=False)+'\n'
fm+='---\n\n'
out=pathlib.Path(args.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(fm+pathlib.Path(args.body).read_text())
