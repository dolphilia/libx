from pathlib import Path
import json,hashlib,sys
from bs4 import BeautifulSoup,NavigableString
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/libuv/1.53.0';e=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-762';e.mkdir();f=p/'translation/ja/reference/udp.md';old=f.read_bytes();h,b=old.decode().split('---\n',2)[1:];s=BeautifulSoup(b.replace('&#10;','\n'),'html.parser');ns=[n for n in s.select_one('article').descendants if isinstance(n,NavigableString) and str(n).strip() and not n.find_parent(['code','pre']) and str(n)!='¶'];assert len(ns)==891
expected=json.loads((r/'docs/notes/project-expansion/runs/evidence/2026-10-05-761/TRANSLATION_UDP.json').read_text())['nodePairs'];assert [str(n) for n in ns]==[x['ja'] for x in expected]
t={63:': 受信したバイト数です。読み取るデータがなくなると0になります。0は空のデータグラムの受信を示す場合もあります（この場合、',65:'はNULLではありません）。伝送エラーを検出すると0未満になります。次の関数、',67:'を使っている場合、それ以上のチャンクは受信せず、バッファを安全に解放できます。',81:'次の関数、',83:'を使う場合、各チャンクには',293:'UDPハンドルをリモートアドレスとポートに関連付けます。このハンドルから送るすべてのメッセージは、その宛先へ自動的に送信されます。切断するには次の組み合わせを指定します: ',296:'（addrにNULLを指定します）。すでに接続済みのハンドルで',340:' – UDPハンドルです。次の関数、',342:'で初期化し、バインドしておく必要があります。',375:' – UDPハンドルです。次の関数、',377:'で初期化し、バインドしておく必要があります。',633:'UDPソケットでデータを送信します。ソケットを事前に次の関数、',634:'でバインドしていなければ、0.0.0.0（すべてのインターフェイスを表すIPv4アドレス）とランダムなポート番号へバインドします。',794:'データの受信を準備します。ソケットを事前に次の関数、',795:'でバインドしていなければ、0.0.0.0（すべてのインターフェイスを表すIPv4アドレス）とランダムなポート番号へバインドします。',809:'次の関数、',811:'を使う場合、1回に受信するメッセージ数の上限は、',821:'のサポートを追加しました。このハンドルの'}
for start in [485,511,539,565,591]:
 t[start]=' – UDPハンドルです。次の関数、';t[start+1]='で';t[start+3]='を指定して初期化するか、次の関数、';t[start+4]='でアドレスへ明示的にバインドするか、次の関数、';t[start+6]='で暗黙にバインドしておく必要があります。'
changes=[];parents=set()
for i,v in t.items():
 assert not ns[i].find_parent('dt',class_='sig');par=ns[i].find_parent(['p','li']);parents.add(id(par));changes.append({'index':i,'before':str(ns[i]),'after':v});ns[i].replace_with(v)
sys.path.insert(0,str(p));from html_preservation import serialize_article
f.write_text('---\n'+h+'---\n\n'+serialize_article(s.select_one('article'),b)+'\n');Path('/private/tmp/libx-libuv-formal-689/apps/libuv/src/content/docs/v1-53-0/ja/reference/udp.md').write_bytes(f.read_bytes())
sha=lambda v:hashlib.sha256(v).hexdigest();(e/'CORRECTIONS.json').write_text(json.dumps({'page':'reference/udp','beforeSha256':sha(old),'afterSha256':sha(f.read_bytes()),'changedParagraphsOrListItems':len(parents),'changes':changes,'reason':'Full content review clarified function-link argument order, init/bind prerequisites, disconnect NULL condition and repeated initialization text; removed stray Japanese closing parenthesis. Source/API/code/links/footer unchanged.'},ensure_ascii=False,indent=2)+'\n');(e/'correct-udp.py').write_bytes(Path(__file__).read_bytes())
bse=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-761'
for n in ['check-api.py','check-rendered.py','check-headings.py']:(e/n).write_text((bse/n).read_text().replace('2026-10-05-761','2026-10-05-762'))
print('corrected paragraphs/list items',len(parents))
