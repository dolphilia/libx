# Deterministic placement only; no content-review verdict.
from pathlib import Path
import json,html,hashlib,re
p=Path(__file__).parent;prep=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-818/API_PREPARATION.json').read_text());c=Path(prep['canonical']['path']);text=c.read_text();assert hashlib.sha256(c.read_bytes()).hexdigest()==prep['canonical']['sha256'];start=text.index('\n---\n')+5
values=json.loads((p/'PROSE_JA.json').read_text());labels=json.loads((p/'LABELS_JA.json').read_text());assert len(values)==25
for x in reversed(prep['slots']):
 assert hashlib.sha256(text[x['canonicalStart']:x['canonicalEnd']].encode()).hexdigest()==x['rawSha256']
 encoded=html.escape(values[str(x['index'])]).replace('\n','&#10;').replace('`','&#96;').replace('*','&#42;').replace('_','&#95;')
 text=text[:x['canonicalStart']]+encoded+text[x['canonicalEnd']:]
body=text[start:]
for en,ja in labels.items():
 body=re.sub(r'(<h[12]>)'+re.escape(en)+r'(</h[12]>)',lambda m:m[1]+ja+m[2],body)
 body=re.sub(r'(<a href="#Chapter\d+">)'+re.escape(en)+r'(</a>)',lambda m:m[1]+ja+m[2],body)
assert len(re.findall(r'<a href="#Chapter\d+">',body))==14
(p/'draft/API-body.md').write_text(body)
prior=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-817/translation/01-block-api.md').read_text().split('\n---\n',1)[0];header=prior[:prior.index('  - kind: editorial')].replace('ブロックAPIマニュアル','フレームAPIマニュアル').replace('lz4-1-10-0-doc-lz4-manual-html','lz4-1-10-0-doc-lz4frame-manual-html').replace('doc/lz4_manual.html','doc/lz4frame_manual.html').replace('d3ba8f6d993890c7c6c077354944c67aa85b319a3a74a361ab5d5590fea37772',prep['source']['sha256'])
editorial='<p>生成APIマニュアルの説明・見出し・目次を日本語に翻訳し、全宣言・宣言内コメントを原文のまま保持しました。同文の固定ヘッダーコメントの日本語訳を、生成時に省かれた関数/節名と版ラベルを除いて再利用しています。説明の改行・記号はHTML文字参照で保持しています。</p><p>原説明にはLZ4F_compressUpdateの説明内のLZ4F_compress、LZ4F_flush/Endの説明内のLZ4_flush、LZ4F_createCDict宣言に対するLZ4_createCDictとLZ4_CDict、LZ4F_CustomMem宣言に対するLZ4F_customMemがあり、無断で修正していません。LZ4F_compressFrame_usingCDictの容量条件にある@dstBufferも、宣言のdstCapacityへ置換していません。元lz4frame.h全文は別ページに収録し、生成マニュアルの範囲外説明も保持しています。今回ソフトウェアの実行や性能測定は行っていません。</p>'
(p/'API-editorial.html').write_text(editorial+'\n');header+='  - kind: editorial\n    html: '+json.dumps(editorial,ensure_ascii=False)+'\n---\n';(p/'draft/02-frame-api.md').write_text(header+'\n'+body)
print('25説明/16見出し/14目次を組立。新ページ全文review/機械/取込/buildはpending。')
