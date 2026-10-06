from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,datetime
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-693';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
translations={
'version':{
'Version-checking macros and functions':'バージョン確認用のマクロと関数',
'Starting with version 1.0.0 libuv follows the ':'バージョン1.0.0以降、libuvは',
'semantic versioning':'セマンティックバージョニング',
'\nscheme. This means that new APIs can be introduced throughout the lifetime of\na major release. In this section you’ll find all macros and functions that\nwill allow you to write or compile code conditionally, in order to work with\nmultiple libuv versions.':'の方式に従っています。つまり、あるメジャーリリースの存続期間を通じて、新しいAPIが導入されることがあります。この節では、複数のlibuvバージョンに対応するために、条件付きでコードを記述したりコンパイルしたりするためのマクロと関数をすべて紹介します。',
'Macros':'マクロ','Functions':'関数',
'libuv version’s major number.':'libuvバージョンのメジャー番号。',
'libuv version’s minor number.':'libuvバージョンのマイナー番号。',
'libuv version’s patch number.':'libuvバージョンのパッチ番号。',
'Set to 1 to indicate a release version of libuv, 0 for a development\nsnapshot.':'libuvのリリース版を示す場合は1、開発スナップショットの場合は0に設定されます。',
'libuv version suffix. Certain development releases such as Release Candidates\nmight have a suffix such as “rc”.':'libuvのバージョン接尾辞。リリース候補版など、一部の開発リリースには「rc」のような接尾辞が付くことがあります。',
'Returns the libuv version packed into a single integer. 8 bits are used for\neach component, with the patch number stored in the 8 least significant\nbits. E.g. for libuv 1.2.3 this would be 0x010203.':'libuvのバージョンを1つの整数にまとめた値を返します。各構成要素には8ビットを使い、パッチ番号を下位8ビットに格納します。たとえば、libuv 1.2.3では0x010203になります。',
'New in version 1.7.0.':'バージョン1.7.0で追加。',
'Returns ':'戻り値は', '.':'です。',
'Returns the libuv version number as a string. For non-release versions the\nversion suffix is included.':'libuvのバージョン番号を文字列として返します。リリース版以外では、バージョン接尾辞も含まれます。'},
'async':{
' — Async handle':' — Asyncハンドル',
'Async handles allow the user to “wakeup” the event loop and get a callback\ncalled from another thread.':'Asyncハンドルを使うと、別のスレッドからイベントループを「起こし」、コールバックを呼び出させることができます。',
'Note':'注記','Warning':'警告','See also':'関連項目','Returns':'戻り値',':':':',
' and the ':'と',
' invocation are\nsequentially consistent (seq_cst) operations for a given async handle: all\nmemory accesses (reads and writes) made before ':'の呼び出しは、特定のAsyncハンドルについて逐次一貫性（seq_cst）を持つ操作です。',
' are\nvisible to that callback.':'より前に行われたすべてのメモリアクセス（読み取りと書き込み）は、そのコールバックから可視になります。',
'libuv will coalesce calls to ':'libuvは',
', that is, not every\ncall to it will yield an execution of the callback. For example: if\n':'の呼び出しをまとめます。つまり、呼び出すたびに必ずコールバックが実行されるわけではありません。たとえば、コールバックが呼び出される前に',
' is called 5 times in a row before the callback is\ncalled, the callback will only be called once. If ':'を続けて5回呼び出しても、コールバックは1回しか呼び出されません。コールバックが呼び出された後で',
'\nis called again after the callback was called, it will be called again.\nHowever, since it is sequentially consistent, the values read or written in\nthat callback will always be the same (or newer) as those read or written\nby the other thread.':'を再び呼び出すと、コールバックも再び呼び出されます。ただし、逐次一貫性があるため、そのコールバックで読み書きする値は、もう一方のスレッドが読み書きした値と常に同じか、それより新しい値になります。',
'Changed in version 1.53.0: ':'バージョン1.53.0で変更: ',
' and ':'と',
' are sequentially\nconsistent. Prior to this version, any case where libuv might coalesce\ncalls probably requires a full ':'は逐次一貫性を持ちます。これより前のバージョンでは、libuvが呼び出しをまとめる可能性のある場合、正しい動作のために、その前に完全な',
'seq_cst':'seq_cst',
' fence before it for correctness.':'フェンスが必要になると考えられます。',
'Data types':'データ型','Public members':'公開メンバー','API':'API',
'Async handle type.':'Asyncハンドルの型。',
'Type definition for callback passed to ':'', '.':'に渡すコールバックの型定義です。',
'N/A':'該当なし','The ':'',
' members also apply.':'のメンバーも適用されます。',
'Initialize the handle. A NULL callback is allowed.':'ハンドルを初期化します。コールバックにNULLを指定してもかまいません。',
'0 on success, or an error code < 0 on failure.':'成功した場合は0、失敗した場合は0未満のエラーコード。',
'Unlike other handle initialization  functions, it immediately starts the handle.':'他のハンドル初期化関数とは異なり、この関数はハンドルを直ちに開始します。',
'Wake up the event loop and call the async handle’s callback.':'イベントループを起こし、Asyncハンドルのコールバックを呼び出します。',
'It’s safe to call this function from any thread. The callback will be called on the\nloop thread.':'この関数はどのスレッドから呼び出しても安全です。コールバックはイベントループのスレッドで呼び出されます。',
' is ':'は',
'async-signal-safe':'非同期シグナル安全',
'.\nIt’s safe to call this function from a signal handler.':'です。シグナルハンドラーからこの関数を呼び出しても安全です。',
'This is a full memory fence with respect to other calls and callbacks\nusing this same async handle, and so it will order all operations\naround this call and the corresponding callback on the sending thread\nand receiving thread.':'この関数は、同じAsyncハンドルを使う他の呼び出しやコールバックに対して、完全なメモリフェンスとして働きます。そのため、送信側スレッドと受信側スレッドにおいて、この呼び出しと対応するコールバックの前後にあるすべての操作の順序を定めます。',
' API functions also apply.':'のAPI関数も適用されます。'}
}
for slug,mapping in translations.items():
 src=packet/('canonical/en/reference/'+slug+'.md');head,body=src.read_text().split('---\n',2)[1:];soup=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');original=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');nodePairs=[]
 for n in list(soup.select_one('article').descendants):
  if not isinstance(n,NavigableString) or not str(n).strip() or (n.find_parent(['code','pre']) or n.find_parent('dt',class_='sig')):continue
  t=str(n)
  if t=='¶':continue
  assert t in mapping,(slug,t)
  n.replace_with(mapping[t]);nodePairs.append({'en':t,'ja':mapping[t]})
 for a in soup.select('.headerlink'):
  if a.get('title')=='Permalink to this heading':a['title']='この見出しへの固定リンク'
  elif a.get('title')=='Permalink to this definition':a['title']='この定義への固定リンク'
 # Source metadata stays in footer, preserving all original notices and editable RST.
 jaApi=(packet/'translation/ja/reference/api.md').read_text().split('---\n',2)[1];ctxline=next(l for l in jaApi.splitlines() if l.startswith('documentContext: '));ctxline=ctxline.replace('/api.rst','/'+slug+'.rst');line=next(l for l in head.splitlines() if l.startswith('documentContext: '));head=head.replace(line,ctxline)
 title='バージョン確認用のマクロと関数' if slug=='version' else 'uv_async_t — Asyncハンドル';head='\n'.join(('title: '+json.dumps(title,ensure_ascii=False)) if l.startswith('title: ') else l for l in head.splitlines())+'\n'
 rendered=str(soup).replace('*','&#42;').replace('_','&#95;').replace('`','&#96;').replace('\\','&#92;').replace('\n','&#10;');dest=packet/('translation/ja/reference/'+slug+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text('---\n'+head+'---\n\n'+rendered+'\n');target=app/('src/content/docs/v1-53-0/ja/reference/'+slug+'.md');target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(dest.read_bytes())
 # Verify alignment before processing next page: exact API signatures/code/links/ids and every narrative node mapped.
 assert [str(x) for x in original.select('dt.sig')]==[str(x).replace('この定義への固定リンク','Permalink to this definition') for x in soup.select('dt.sig')]
 assert [str(x) for x in original.select('pre')]==[str(x) for x in soup.select('pre')]
 assert [x.get('href') for x in original.select('a')]==[x.get('href') for x in soup.select('a')]
 assert [x['id'] for x in original.select('[id]')]==[x['id'] for x in soup.select('[id]')]
 refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/('sources/docs/src/'+slug+'.rst'),src,dest]]
 (ev/('TRANSLATION_'+slug.upper()+'.json')).write_text(json.dumps({'page':'reference/'+slug,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':refs,'fullPageDraft':True,'scope':'entire title/body/headings/all descriptions/version notes/admonitions/labels/footer','nodePairs':nodePairs,'alignment':{'allNarrativeNodesMapped':True,'apiDeclarationsExact':len(soup.select('dt.sig')),'preBlocksExact':len(soup.select('pre')),'idsAndLinksExact':True},'separateContentReview':'pending','projectTranslationComplete':False,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False}},ensure_ascii=False,indent=2)+'\n')
 print(slug,len(nodePairs),'narrative nodes; full-page draft/alignment saved; separate review pending')
