from pathlib import Path
import json,hashlib,datetime,shutil
N=Path('/private/tmp/libx-gnu-diffutils-formal-909/docs/notes/document-import/gnu-diffutils/v3-12');E=Path(__file__).resolve().parent;rel=Path('docs/notes/document-import/gnu-diffutils/v3-12');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();ref=lambda p:{'path':str(rel/p.relative_to(N)),'sha256':h(p),'coverage':[[1,len(p.read_text().splitlines())]]};m=json.loads((N/'CONTENT_MAP.json').read_text());review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==20;old=[r for r in review['pages'] if r['status']=='passed'];at=datetime.datetime.now(datetime.timezone.utc).isoformat()
for r in old:
 for k in ['source','canonical','translation','savedReviewedJADraft']:assert h(N/Path(r[k]['path']).relative_to(rel))==r[k]['sha256']
findings=[
'変更された関数/文書の章付録と、差分前の最も近い節見出し行・正規表現による選別を全文保持。',
'C類似言語以外の-F/--show-function-line、grep形式regexp・全3正規表現dtと対応言語、context/unified選択必須・他書式無効、最も近い未変更行/@@・asterisk末尾/非一致無変更/先頭40文字/複数regexp最後から/-p併用を保持。',
'-pのcontext既定行数、別位置-Cで行数/-Uで書式も上書き、unified指定時-Fとそれ以外-c -Fの全literal条件を保持。',
'--labelによる最初/2番目のfile名と日付置換、2回超エラー、pr/-l/--paginateヘッダー非影響、コマンド内改行と*** original/--- modified全preを保持。',
'空白/|/</>/(/)/backslash/slash全8markerと第一第二file/ignored/complete/incompleteの方向を全対応で保持。通常iff条件を1文だけ明確化し混在2行の場合のcomplete例外と左右markerを再照合。幅/切詰/可変幅font/tab/nonprinting制限とsdiff原著参照を保持。',
'-y/--side-by-side、既定印字130列、--width/-Wとcolumns、左右等幅/小gutter/右tabstop/長行切詰、left-columnの共通左だけとsuppress-common-lines全抑制を保持。',
'-y -W72コマンド/既存2入力参照、2列全出力・</|/>位置・TAB/space/空挿入行・Named/named大小・末尾3挿入行・原著切詰を保持。原比較入力の英文を訳文に置換しない。',
'normalの周辺文脈なし/0行context/unified代替、原著のpatch配布でcontext/unified優位、古いdiff/POSIXとの互換既定と--normal明示を保持。']
new=[]
for i,r in enumerate(m['items'][20:28]):
 ja=N/'drafts/ja'/r['id'];can=N/'canonical/ja'/r['id'];can.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ja,can);u=N/'translations'/(r['slug']+'-units.json');new.append({'id':r['id'],'status':'passed','method':'ai-content-review','model':'gpt-6.1-sol (POLICY preferred;runtime not independently exposed)','reviewedAt':at,'separateReviewPass':True,'allUnitsReviewed':len(json.loads(u.read_text())['units']),'literalPreReviewed':r['pre'],'source':ref(N/'source-fragments/en'/r['id'].replace('.md','.html')),'canonical':ref(N/r['canonical']),'translation':ref(can),'originalRaw':{'path':str(rel/'source/original/doc/diffutils.texi'),'sha256':h(N/'source/original/doc/diffutils.texi')},'savedReviewedJADraft':ref(ja),'findings':[findings[i]],'wholeFileCoverageBasis':'Separate complete ORIGINAL/currentEN/savedJA full body pass21–24 and25–28, no truncated output. All36 prose units/2 full literal pre plus literal dt/VAR read. One iff wording repair reread only changed paragraph and dependent marker entries. No source technical audit/example execution.'});r.update(translation='saved',meaningReview='passed',translationCanonical='canonical/ja/'+r['id'],translationSHA256=h(can))
assert sum(r['allUnitsReviewed'] for r in new)==36 and sum(r['literalPreReviewed'] for r in new)==2
review.update(completedPages=28,unreviewedPages=15,at=at,reviewMethod='909/91020 reviews105unit retained unchanged;911 new8 reviews36unit/2pre, one iff wording repair scoped reread.',pages=old+new+[{'id':r['id'],'status':'pending','reason':'Japanese translation and whole meaning review not yet performed'} for r in m['items'][28:]])
(N/'REVIEW_MANIFEST.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n');m.update(meaningReview='28passed/15pending',Japanese='28saved/15pending');(N/'CONTENT_MAP.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(N/'REVIEW_MANIFEST.json',E/'REVIEW_FROZEN.json');shutil.copyfile(N/'CANONICAL_BINDING.json',E/'CANONICAL_BINDING_BATCH3.json')
p=N/'translations/SAVED_DRAFTS.json';s=json.loads(p.read_text());approved={r['id']:r for r in review['pages'] if r['status']=='passed'}
for r in s['pages']:
 assert r['draftSHA256']==approved[r['id']]['translation']['sha256'];r['review']='passed'
s.update(completedReviews=28,pendingReviews=0);p.write_text(json.dumps(s,ensure_ascii=False,indent=2)+'\n')
print('911 whole reviews8/36unit/2pre;first20 exactreuse;review28/pending15')
