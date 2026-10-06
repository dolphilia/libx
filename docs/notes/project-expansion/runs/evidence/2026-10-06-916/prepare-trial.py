from pathlib import Path
from bs4 import BeautifulSoup
import copy, json, re, shutil, hashlib
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-findutils/v4-11-0';T=Path('/private/tmp/libx-gnu-findutils-trial-916');A=T/'apps/gnu-findutils-trial';W=Path('/private/tmp/libx-gnu-diffutils-formal-909');E=Path(__file__).parent
s=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser')
shutil.rmtree(A/'src/content/docs')
rows=[]
for id,filename in [('Overview','01-overview'),('Starting-points','02-starting-points'),('Base-Name-Patterns','03-base-name-patterns')]:
    z=copy.deepcopy(s.select_one('#'+id))
    for p in z.select('.copiable-link'): p.decompose()
    if id=='Base-Name-Patterns':
        foot=s.select_one('#FOOT1');assert foot
        # Keep the complete footnote paragraph including anchor/back reference.
        heading=foot.parent; z.append(copy.deepcopy(heading))
        for sibling in heading.next_siblings:
            if getattr(sibling,'name',None)=='h5': break
            z.append(copy.deepcopy(sibling))
    for a in z.select('a[href]'):
        href=a['href']
        if href.startswith('#') and not z.select_one('[id="'+href[1:]+'"]'):
            a['href']='/docs/gnu-findutils-trial/source/v4-11-0/manual.html'+href
    z['class']=['gnu-findutils-original-content']
    title=z.find(re.compile('^h[1-6]$')).get_text(' ',strip=True)
    for pre in z.select('pre'):
        for t in list(pre.find_all(string=True)):
            if '\n' in str(t) or '\t' in str(t):
                # Encode through raw emitted HTML later, retaining nested VAR elements.
                pass
    raw=str(z)
    raw=re.sub(r'(<pre\b[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;').replace('\t','&#9;')+m[3],raw)
    p=A/'src/content/docs/v4-11-0/en/01-guide'/(filename+'.md');p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text('---\ntitle: '+json.dumps(title)+'\n---\n\n'+raw+'\n')
    rows.append({'id':id,'file':str(p),'sourceTextSHA':hashlib.sha256(z.get_text().encode()).hexdigest(),'pre':len(z.select('pre'))})
# One independent Japanese trial draft, whole source Overview prose only. No formal meaning review claim.
j=copy.deepcopy(s.select_one('#Overview'))
for a in j.select('.copiable-link'):a.decompose()
j.find('h3').string='1.2 概要'
translations=[
'指定した条件に一致するファイルの一覧を作成し、そのファイルに対してコマンドを実行するための主なプログラムは、<code>find</code>、<code>locate</code>、<code>xargs</code>です。システム管理者は、追加のコマンド<code>updatedb</code>を使って、<code>locate</code>用のデータベースを作成します。',
'<code>find</code>はディレクトリ階層からファイルを検索し、見つかったファイルの情報を表示します。実行形式は次のとおりです。',
'<code>find</code>の典型的な使い方を示します。この例は、<samp>/usr/src</samp>を根とするディレクトリツリー内で、名前が<samp>.c</samp>で終わり、サイズが101 KiB以上のファイルすべての名前を表示します。',
'シェルによる展開を防ぐため、ワイルドカードは引用符で囲む必要があります。',
'<code>locate</code>は専用のファイル名データベースから、パターンに一致するファイル名を検索します。システム管理者が<code>updatedb</code>を実行してデータベースを作成します。<code>locate</code>の実行形式は次のとおりです。',
'この例は、既定のファイル名データベース内で、名前が<samp>Makefile</samp>または<samp>makefile</samp>で終わるファイルすべての名前を表示します。データベースに格納されるファイル名は、システム管理者がどのように<code>updatedb</code>を実行したかによって決まります。',
'<code>xargs</code>は「EX-args」と発音し、その名前は「引数を結合する」という意味です。<code>xargs</code>は標準入力から読み取った引数を集め、コマンド行を組み立てて実行します。多くの場合、これらの引数は<code>find</code>が生成したファイル名の一覧です。<code>xargs</code>の実行形式は次のとおりです。',
'次のコマンドは、<samp>file-list</samp>に列挙されたファイルを検索し、<samp>typedef</samp>という語を含む行をすべて表示します。']
assert len(j.find_all('p',recursive=False))==len(translations)
for p,text in zip(j.find_all('p',recursive=False),translations):
    p.clear()
    for c in list(BeautifulSoup(text,'html.parser').contents):p.append(c)
j['class']=['gnu-findutils-original-content'];raw=str(j);raw=re.sub(r'(<pre\b[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;').replace('\t','&#9;')+m[3],raw)
p=A/'src/content/docs/v4-11-0/ja/01-guide/01-overview.md';p.parent.mkdir(parents=True);p.write_text('---\ntitle: "概要"\n---\n\n'+raw+'\n')
c=json.loads((W/'apps/gnu-diffutils/src/config/project.config.jsonc').read_text());c['paths']['projectSlug']='gnu-findutils-trial'
for lang,title in [('en','GNU findutils Source Trial'),('ja','GNU findutils 原文試験')]:
    c['translations'][lang]={'displayName':title,'displayDescription':'Unpublished candidate trial / 未公開の候補試験','categories':{'guide':'Source format trial' if lang=='en' else'原文形式試験','reference':'Original notices' if lang=='en' else'原著通知'}}
c['versioning']['versions']=[{'id':'v4-11-0','name':'4.11.0','date':'2026-10-06T00:00:00Z','isLatest':True}]
c['licensing']['defaultSource']='findutils-trial';c['licensing']['sources']=[{'id':'findutils-trial','name':'GNU Findutils Finding files4.11.0 — unpublished format trial','author':'David MacKenzie and James Youngman / Free Software Foundation','license':'GFDL1.3-or-later','licenseUrl':'/docs/gnu-findutils-trial/source/v4-11-0/manual.html#GNU-Free-Documentation-License','sourceUrl':'https://www.gnu.org/software/findutils/manual/','provenanceNotes':[{'en':'Unpublished Libx candidate trial. OriginalCopyright1994–2026FSF, GFDL1.3-or-later/noInvariant/noCoverTexts;originaltitle GNU Findutils/Finding files, authors DavidMacKenzie andJamesYoungman. Body examples are static and are not executed. JapaneseOverview is an unreviewed trial draft;formal adoption andwholemeaning review pending.','ja':'未公開のLibx候補試験です。原著FSF1994〜2026、GFDL1.3以降、不変節・表紙文言なし。原題GNU Findutils／Finding files、著作者David MacKenzie／James Youngman。例は静的に表示し実行しません。日本語概要は試験草稿で、正式採用と全文レビューは未実施です。'}], 'attributionLinks':[{'url':'/docs/gnu-findutils-trial/source/v4-11-0/manual.html','label':{'en':'Fixed whole original','ja':'固定原文全文'}}]}]
(A/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
d=A/'public/source/v4-11-0';d.mkdir(parents=True);shutil.copy2(N/'source/derived-manual.html',d/'manual.html')
with (A/'src/styles/global.css').open('a')as f:f.write('\n.gnu-findutils-original-content pre { white-space:pre; overflow-x:auto; max-width:100%; tab-size:4; }\n.gnu-findutils-original-content pre var { font-family:inherit; font-style:italic; }\n.gnu-findutils-original-content dd { min-width:0; }\n')
(E/'TRIAL_INPUTS.json').write_text(json.dumps({'status':'saved-unpublished-trial','workspace':str(T),'EnglishSourcePages':rows,'JapaneseOverview':'unreviewed trial draft, formaltranslation0/wholemeaningreviews0','rootAndGNUdiffutilsReleaseUnchanged':True},indent=2)+'\n')
print('trial fixedEN3 +unreviewedJAOverview saved')
