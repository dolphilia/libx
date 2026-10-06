from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-747';p=root/'docs/notes/document-import/libuv/1.53.0/canonical/en/reference/fs_poll.md';s=BeautifulSoup(p.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser');nodes=[n for n in s.select_one('article').descendants if isinstance(n,NavigableString) and str(n).strip() and not n.find_parent(['code','pre']) and str(n)!='¶'];en=list(map(str,nodes));assert len(en)==131
mapping={0:' — FS Pollハンドル',1:'FS Pollハンドルは、指定したパスの変更を監視できます。',2:'とは異なり、FS Pollハンドルは',4:'でファイルの変更を検出するため、FS Eventハンドルが動作しないファイルシステムでも使えます。',5:'データ型',8:'FS Pollハンドルの型です。',33:'次の関数へ渡すコールバックです: ',34:'。ハンドルを開始した後、監視対象のパスに変更があるたびに呼び出します。',35:'コールバックは、',37:'で呼び出される場合があります。これは、',39:'が存在しない、またはアクセスできない場合です。監視は',40:'停止しません',41:'が、ファイルの作成やエラーの原因が変わるなど、何か変化が起きるまではコールバックを再度呼び出しません。',42:'次の条件、',44:'の場合、コールバックは変更前と変更後の',45:'構造体へのポインターを受け取ります。これらはコールバックの実行中だけ有効です。',46:'公開メンバー',47:'該当なし',48:'関連項目',49:'次の型の',50:'メンバーも適用されます。',63:'ハンドルを初期化します。',83:'次のパス、',85:'のファイルに変更があるかを、',87:'ミリ秒ごとに検査します。',88:'注記',89:'移植性を最大限に確保するには、数秒単位の間隔を使ってください。1秒未満の間隔では、多くのファイルシステムですべての変更を検出できません。',97:'ハンドルを停止します。以後、コールバックを呼び出しません。',113:'ハンドルが監視しているパスを取得します。バッファはユーザーが事前に確保する必要があります。成功時は0、失敗時は0未満のエラーコードを返します。成功時は、',115:'にパスが入り、',117:'にその長さが入ります。バッファが十分な大きさでない場合は、',119:'を返し、',121:'を必要なサイズに設定します。',122:'バージョン1.3.0での変更: ',123:'返す長さに終端ヌルバイトを含めなくなり、バッファもヌル終端しなくなりました。',124:'バージョン1.9.0での変更: ',125:'次のエラー、',127:'の場合、返す長さに終端ヌルバイトを含めるようになりました。また、成功時にはバッファをヌル終端します。',128:'関連項目',129:'次の型の',130:'API関数も適用されます。'}
# The error is invoked when inaccessible/nonexistent; retain this as a condition, not mere possibility.
mapping[37]='で呼び出されます。これは、'
ja=[mapping.get(i,n) for i,n in enumerate(en)]
for i,(n,t) in enumerate(zip(nodes,ja)):
 if n.find_parent('dt',class_='sig'):assert str(n)==t,(i,str(n),t)
(ev/'source-nodes.json').write_text(json.dumps(en,ensure_ascii=False,indent=2)+'\n');(ev/'ja-nodes.txt').write_text('\n'.join(ja)+'\n');print('131 nodes',len(mapping),'translated narrative fragments; API unchanged')
