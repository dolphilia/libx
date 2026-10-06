from pathlib import Path
import json,hashlib,datetime,shutil
b=Path('docs/notes/project-expansion');n=Path('docs/notes/document-import/lz4/v1-10-0');e=b/'runs/evidence/2026-10-05-825';e.mkdir();m=json.loads((n/'REVIEW_MANIFEST.json').read_text());inventory=json.loads((b/'runs/evidence/2026-10-05-824/INTERNAL_LINK_INVENTORY.json').read_text());work=Path('/private/tmp/libx-lz4-formal-786');sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest();ref=lambda p:{'path':str(p),'sha256':sha(p)}
assert json.loads((b/'OPERATIONS.json').read_text())['revision']==901;assert m['completedPages']==27;assert not Path('apps/lz4').exists()
for p in inventory['pages']:assert sha(p['rendered']['path'])==p['rendered']['sha256']
for p in m['pages']:assert sha(work/'apps/lz4/src/content/docs/v1-10-0/ja'/p['id'])==p['translation']['sha256']
lock=json.loads((n/'CANONICAL_LOCK.json').read_text())
for p in lock['pages']:assert sha(Path(lock['workspace'])/p['canonicalPath'])==p['canonicalSha256']
for src,name in [(b/'OPERATIONS.json','OPERATIONS'),(n/'PROGRESS.json','PROGRESS'),(n/'REVIEW_MANIFEST.json','REVIEW_MANIFEST')]:shutil.copyfile(src,e/f'BASELINE_{name}.json')
notes={'01-overview/01-about.md':('日本語の形式仕様ページは未完成のため、現在の参照先は同じ固定版の英語定本です。','形式仕様への内部参照は、同じ固定版のレビュー済み日本語ページへ対応付けています。'), '05-examples/01-examples.md':('参照先4ページの日本語訳は作業中のため、現時点では英語定本へリンクしています。全ページ確定時に日本語参照を整合させます。','参照先4ページは、同じ固定版のレビュー済み日本語訳へ対応付けています。'), '06-library/01-library.md':('仕様参照は英語定本を保持し、最終整合時に日本語参照を確認します。','仕様への内部参照は、同じ固定版のレビュー済み日本語ページへ対応付けています。')}
rows=[]
for id in sorted(set(x['page']for x in inventory['unlocalized'])):
 old=next(p for p in m['pages']if p['id']==id);src=work/'apps/lz4/src/content/docs/v1-10-0/ja'/id;t=src.read_text();out=t;changes=[]
 mappings={x['href']:x['proposedHref']for x in inventory['unlocalized']if x['page']==id}
 for before,after in mappings.items():
  assert after not in t;count=out.count(before);assert count>=1;out=out.replace(before,after);changes.append({'kind':'internal-language-href','old':before,'new':after,'rawCount':count,'targetPage':after.split('/ja/')[1].rstrip('/')+'.md'})
 if id in notes:
  before,after=notes[id];assert out.count(before)==1;out=out.replace(before,after);changes.append({'kind':'editorial-status','old':before,'new':after,'rawCount':1})
 restored=out
 for c in reversed(changes):assert restored.count(c['new'])==c['rawCount'];restored=restored.replace(c['new'],c['old'])
 assert restored==t
 for kind in ['before','translation']:
  p=e/kind/id;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(t if kind=='before'else out)
 rendered=next(x for x in inventory['pages']if x['lang']=='ja'and x['id']==id)['rendered']['path'];target=e/'before-rendered'/id.replace('.md','.html');target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(rendered,target)
 prior=json.loads(Path(old['evidence']['path']).read_text());assert sha(old['evidence']['path'])==old['evidence']['sha256'];assert prior['translation']['sha256']==sha(src)
 r={**prior,'reviewedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'translation':{**prior['translation'],**ref(e/'translation'/id)},'priorFullReview':old['evidence'],'priorReviewedTranslation':old['translation'],'limitedMaintenanceReview':{'status':'passed','method':'ai-content-review','scope':'listed language hrefs and editorial completion status only; old full technical review retained by exact inverse restoration','model':'Codex configured gpt-6.1-sol; runtime not independently exposed','changes':changes,'findings':'各labelのBlock/Frame形式・各sample名・CLI圧縮フレーム・libraryのblock/frame相互運用参照を文脈確認。同じ固定版の同じsourceに対応する既存review済み日本語ページへ変更。全target source/canonical/translation SHAを紐付ける。旧version/APIリンク・技術本文・法的通知・コード/表/図/見出しは不変。新注記は内部参照とページreviewの完了だけで、案件全gatesや公開の完了を主張しない。'},'restorationProof':str(e/'LOCALIZATION_BINDINGS.json')}
 targets=[]
 for c in changes:
  if c['kind']=='internal-language-href':
   p=next(p for p in m['pages']if p['id']==c['targetPage']);assert p['status']=='passed';targets.append({'page':p['id'],'source':p['source'],'canonical':p['canonical'],'translation':p['translation'],'contentReview':p['evidence']})
 r['limitedMaintenanceReview']['targets']=targets;rp=e/'reviews'/id.replace('.md','.json');rp.parent.mkdir(parents=True,exist_ok=True);rp.write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n');rows.append({'id':id,'before':ref(e/'before'/id),'after':ref(e/'translation'/id),'beforeRendered':ref(target),'priorFullReview':old['evidence'],'changes':changes,'review':ref(rp),'inverseRestorationExact':True})
o={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'limited-content-review-passed-machine-pending','pages':rows,'rawHrefChanges':sum(c['rawCount']for p in rows for c in p['changes']if c['kind']=='internal-language-href'),'renderedHrefChanges':len(inventory['unlocalized']),'editorialChanges':len(notes),'fullContentReview':'prior full reviews retained with exact old-byte restoration; limited semantic review performed separately from machine checks','finalProjectGates':'pending'};(e/'LOCALIZATION_BINDINGS.json').write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n');print('5 pages, 11 raw hrefs / 13 rendered hrefs, 3 stale notes staged; original bytes fully recoverable')
