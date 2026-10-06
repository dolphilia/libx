from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-768';src=packet/'translation/ja/reference/misc.md';raw=src.read_text();head,body=raw.split('---\n',2)[1:];s=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');nodes=[n for n in s.select_one('article').descendants if isinstance(n,NavigableString) and str(n).strip() and not n.find_parent(['code','pre']) and str(n)!='¶'];assert len(nodes)==1540
M={152:'次の印、',154:'を付けたメンバーは、Windowsではサポートしていません。Unix系プラットフォームでサポートするフィールドについては、',187:'次の関数、',189:'と同等の機能を得るには、この関数を使い、次の値かどうかを調べます: ',236:'次の関数、',237:'は、1回だけ呼び出してください。',239:'イベントループやI/O要求がまだ動作中のときは、',240:'を呼び出さないでください。',242:'次の関数、',243:'を呼び出した後は、libuvの関数を呼び出さないでください。',998:'プロセスがまだ利用できる空きメモリーの量をバイト単位で取得します。次の関数、',999:'とは異なり、OSが課す制限を考慮します。制限がない場合や不明な場合は、次の関数と同じ量を返します: ',1002:'現在、この関数が',1003:'の報告値と異なる値を返すのは、cgroupsがある場合にそれを参照するLinuxだけです。',1069:'次の関数、',1070:'と同じですが、アクティブなハンドルだけを出力します。',1315:'。',1317:'のタイムゾーン引数は、廃止されたものと見なすため、サポートしていません。'}
paragraphs={}
for i,t in M.items():
 n=nodes[i];assert not n.find_parent('dt',class_='sig');p=n.find_parent('p');assert p;paragraphs.setdefault(id(p),(p,p.get_text()));n.replace_with(t)
corrections=[{'before':old,'after':p.get_text(),'reason':'Place particles after the original linked function/type name; preserve all conditions.'} for p,old in paragraphs.values()];assert len(corrections)==9
sys.path.insert(0,str(packet));from html_preservation import serialize_article
src.write_text('---\n'+head+'---\n\n'+serialize_article(s.select_one('article'),body)+'\n');Path('/private/tmp/libx-libuv-formal-689/apps/libuv/src/content/docs/v1-53-0/ja/reference/misc.md').write_bytes(src.read_bytes());(ev/'CORRECTIONS.json').write_text(json.dumps(corrections,ensure_ascii=False,indent=2)+'\n');print(len(corrections),'paragraphs corrected')
