from pathlib import Path
import shutil,json,re,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sds-formal-859');N=W/'docs/notes/document-import/sds/v2-0-0';A=W/'apps/sds';E=Path(__file__).parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
assert not (E/'START.json').exists();write(E/'START.json',{'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseCommit':'45d598a887d89a6d41405b30fbdbaa1514d13161','basePublication':'RapidJSON857 c1a68521 verified','scope':'SDS only final provision/metadata/reconstruction/integrated validation. Root user differences excluded.','reused':'860 reviewed8/161prose/code56;859 English12/static code and provenance. No new full meaning review.'})
shutil.copytree(R/'docs/notes/document-import/sds/v2-0-0',N,dirs_exist_ok=True)
c=json.loads((N/'regeneration/CONTEXT.json').read_text());before=json.loads(json.dumps(c));assert 'will be translated' in c[0]['html'];c[0]['html']=c[0]['html'].replace('README guide8 units will be translated; API comments and headers remain original English.','The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope.')
c[0]['html']+='<p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href="/docs/sds/notices/sds.c-notice.txt">sds.c原通知</a>、<a href="/docs/sds/notices/sds.h.txt">sds.h原通知</a>、<a href="/docs/sds/notices/sdsalloc.h.txt">sdsalloc.h原通知</a>を参照してください。</p>'
c.append({'kind':'source','html':'<p><a href="/docs/sds/source/v2-0-0/source.zip">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>'});write(N/'regeneration/CONTEXT.json',c)
delta=[]
for lang in ['en','ja']:
 for p in sorted((N/'canonical'/lang).rglob('*.md')):
  raw=p.read_text();front,body=raw.split('---\n',2)[1:];old=sha(p);front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(c,ensure_ascii=False),front,flags=re.M);out='---\n'+front+'---\n'+body;p.write_text(out);id=str(p.relative_to(N/'canonical'/lang));dest=A/'src/content/docs/v2-0-0'/lang/id;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(out);preferred=A/'public/source/v2-0-0/edited'/lang/id;preferred.parent.mkdir(parents=True,exist_ok=True);preferred.write_text(out);delta.append({'language':lang,'id':id,'beforeSha256':old,'afterSha256':sha(p),'bodySHA256':hashlib.sha256(body.encode()).hexdigest(),'bodyUnchanged':out.split('---\n',2)[2]==body})
assert len(delta)==20 and all(p['bodyUnchanged'] for p in delta);write(N/'FOOTER_DELTA.json',{'status':'passed-body-unchanged','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':'Confirmed guide8 EN/JA scope, English references4 review exclusion, individual notices/sourceoffer links. Seven old source annotation groups unchanged.','contextBefore':before,'contextAfter':c,'rows':delta});write(E/'FOOTER_DELTA.json',json.loads((N/'FOOTER_DELTA.json').read_text()))
for name in ['CONTENT_MAP.json','REFERENCE_MAP.json']:
 m=json.loads((N/name).read_text())
 for p in m['pages']:
  for role,lang in [('canonical','en'),('translation','ja')]:
   if role=='translation' and name=='REFERENCE_MAP.json':continue
   q=N/'canonical'/lang/p['id'];p[role]={'path':str(q.relative_to(W)),'sha256':sha(q)}
 write(N/name,m)
r=json.loads((N/'REVIEW_MANIFEST.json').read_text())
for p in r['pages']:
 for role,lang in [('canonical','en'),('translation','ja')]:
  q=N/'canonical'/lang/p['id'];body=q.read_text().split('---\n',2)[2];assert hashlib.sha256(body.encode()).hexdigest()==p['sourceBodySHA256' if lang=='en' else 'translationBodySHA256'];p[role]['sha256']=sha(q)
 p['metadataDelta']={'path':str((N/'FOOTER_DELTA.json').relative_to(W)),'sha256':sha(N/'FOOTER_DELTA.json')}
write(N/'REVIEW_MANIFEST.json',r)
sm=json.loads((N/'SOURCE_MANIFEST.json').read_text());sm['replay']['context']['sha256']=sha(N/'regeneration/CONTEXT.json');write(N/'SOURCE_MANIFEST.json',sm)
ja=[]
for p in sorted((N/'canonical/ja').rglob('*.md')):
 id=str(p.relative_to(N/'canonical/ja'));q=N/'regeneration/japanese'/id;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);ja.append({'id':id,'sha256':sha(q)})
write(N/'regeneration/JAPANESE.json',ja)
print('SDS finalfooter20; body unchanged;8 separate reviews reused;20 editable sources')
