# Deterministic placement of Codex-reviewed reuse choices; no review verdict.
from pathlib import Path
import json,html,hashlib,re
p=Path(__file__).parent;prep=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-815/API_PREPARATION.json').read_text());c=Path(prep['canonical']['path']);text=c.read_text();assert hashlib.sha256(c.read_bytes()).hexdigest()==prep['canonical']['sha256'];start=text.index('\n---\n')+5
values=json.loads((p/'PROSE_JA.json').read_text());labels=json.loads((p/'LABELS_JA.json').read_text());assert len(values)==35
for x in reversed(prep['slots']):
 assert hashlib.sha256(text[x['canonicalStart']:x['canonicalEnd']].encode()).hexdigest()==x['rawSha256']
 text=text[:x['canonicalStart']]+html.escape(values[str(x['index'])])+text[x['canonicalEnd']:]
head=text[:start];body=text[start:]
for en,ja in labels.items():
 body=re.sub(r'(<h[12]>)'+re.escape(en)+r'(</h[12]>)',lambda m:m[1]+ja+m[2],body)
 body=re.sub(r'(<a href="#Chapter\d+">)'+re.escape(en)+r'(</a>)',lambda m:m[1]+ja+m[2],body)
assert len(re.findall(r'<a href="#Chapter\d+">',body))==10
(p/'draft/API-body.md').write_text(body)
prior=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-814/translation/02-lz4-command.md').read_text().split('\n---\n',1)[0]
header=prior[:prior.index('  - kind: editorial')].replace('コマンドラインマニュアル','ブロックAPIマニュアル').replace('lz4-1-10-0-programs-lz4-1-md','lz4-1-10-0-doc-lz4-manual-html').replace('programs/lz4.1.md','doc/lz4_manual.html').replace('dab60aab6e9890a5d547e4f501fc334cb067c17054ff186dfd94eba468231f3f',prep['source']['sha256'])
editorial='<p>生成APIマニュアルの説明本文・見出し・目次を日本語に翻訳し、宣言・宣言内コメント・ASCII図を原文のまま保持しました。同文の固定ヘッダーコメントの日本語訳を、生成時に省かれた関数名や節名を除いて再利用しています。</p><p>この生成マニュアルには旧LZ4_create、LZ4_resetStreamState、LZ4_sizeofStreamState、LZ4_slideInputBufferの宣言が含まれません。固定lz4.h全文は別ページに収録しています。destSizeの原説明はdstCapacity、宣言はtargetDstSizeと記されており、どちらも保持しています。同一バッファー圧縮の原説明にあるサイズ >= (maxCompressedSize)と、後続のLZ4_COMPRESS_INPLACE_BUFFER_SIZE()への説明も原文のまま保持しています。今回ソフトウェアの実行や性能測定は行っていません。</p>'
(p/'API-editorial.html').write_text(editorial+'\n');header+='  - kind: editorial\n    html: '+json.dumps(editorial,ensure_ascii=False)+'\n---\n';(p/'draft/01-block-api.md').write_text(header+'\n'+body)
print('35説明/12見出し/10目次label組立。全内容review/機械/取込/buildはpending。')
