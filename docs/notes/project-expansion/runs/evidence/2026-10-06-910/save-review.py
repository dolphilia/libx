from pathlib import Path
import json,hashlib,datetime,shutil
N=Path('/private/tmp/libx-gnu-diffutils-formal-909/docs/notes/document-import/gnu-diffutils/v3-12');E=Path(__file__).resolve().parent;rel=Path('docs/notes/document-import/gnu-diffutils/v3-12');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();ref=lambda p:{'path':str(rel/p.relative_to(N)),'sha256':h(p),'coverage':[[1,len(p.read_text().splitlines())]]};m=json.loads((N/'CONTENT_MAP.json').read_text());review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==10;old=[r for r in review['pages'] if r['status']=='passed'];at=datetime.datetime.now(datetime.timezone.utc).isoformat()
for r in old:
 for k in ['source','canonical','translation','savedReviewedJADraft']:assert h(N/Path(r[k]['path']).relative_to(rel))==r[k]['sha256']
findings=[
'互いに排他的な出力書式optionと2入力例で各書式を説明する導入を保持。',
'lao/tzuの全入力、大小Named/named・空行・2spaceindent・最後3行、3hunkの対応位置説明を保持。入力の詩は比較用literalで翻訳置換しない。',
'周辺文脈の定義/contextとunified/関数節オプション、小さい独自変更や数行ずれへのpatch文脈検索と行番号調整・固定原著参照を保持。',
'context周辺行/原著の標準書式説明、--context[=lines]/-C/-c、既定3とpatch最少2という原文条件を保持。',
'-c全出力/両file全内容参照・最大3文脈行と先頭2hunkの重なりによる連結、全+/-/!記号とスペース/TAB/全行を保持。',
'-C1全出力と最大1文脈行、単行11/区間10,13、すべての全記号/空白を保持。',
'2行ヘッダー/全VAR、日付fraction/timezoneとLC_TIME C/POSIX従来形式/原RFC参照、--label、start/end/単行/空hunk直前、context2space/!+−のfile対応とallinsert/from省略/alldelete/to省略条件を全文保持。原timestamp/RFC説明の技術監査へ広げない。',
'unifiedの重複文脈省略、--unified[=lines]/-U/-u/既定3、1990年代初頭の歴史説明とpatch最少3という原文条件を保持。',
'-u全出力/固定2入力参照、2行ヘッダー/@@区間/一列+−/contextspace/空+行・末尾3行の全リテラルを保持。',
'2行ヘッダー/dateとfraction省略/label/@@VAR/count/先頭1spaceと+−説明を全文保持。隣接するstart単行/empty直後とend単行/empty直前の両原段落を保持し、英日footer注記で原著表記差と固定原典を示す。原文を修正・例実行・技術監査しない。']
new=[]
for i,r in enumerate(m['items'][10:20]):
 ja=N/'drafts/ja'/r['id'];can=N/'canonical/ja'/r['id'];can.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ja,can);u=N/'translations'/(r['slug']+'-units.json');new.append({'id':r['id'],'status':'passed','method':'ai-content-review','model':'gpt-6.1-sol (POLICY preferred;runtime not independently exposed)','reviewedAt':at,'separateReviewPass':True,'allUnitsReviewed':len(json.loads(u.read_text())['units']),'literalPreReviewed':r['pre'],'source':ref(N/'source-fragments/en'/r['id'].replace('.md','.html')),'canonical':ref(N/r['canonical']),'translation':ref(can),'originalRaw':{'path':str(rel/'source/original/doc/diffutils.texi'),'sha256':h(N/'source/original/doc/diffutils.texi')},'savedReviewedJADraft':ref(ja),'findings':[findings[i]],'wholeFileCoverageBasis':'Separate complete ORIGINAL/currentEN/savedJA body pass11–16 and17–20, no truncated output. All44 prose units/9 full literal pre and VAR read. English/Japanese footer note20 and exact source link read separately. No source technical audit/example execution.'});r.update(translation='saved',meaningReview='passed',translationCanonical='canonical/ja/'+r['id'],translationSHA256=h(can))
assert sum(r['allUnitsReviewed'] for r in new)==44 and sum(r['literalPreReviewed'] for r in new)==9
review.update(completedPages=20,unreviewedPages=23,at=at,reviewMethod='90910 reviews61unit retained unchanged;910 new10 reviews44unit, no new wording repair, bilingualoriginalnote20 reviewed separately.',pages=old+new+[{'id':r['id'],'status':'pending','reason':'Japanese translation and whole meaning review not yet performed'} for r in m['items'][20:]])
(N/'REVIEW_MANIFEST.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n');m.update(meaningReview='20passed/23pending',Japanese='20saved/23pending');(N/'CONTENT_MAP.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(N/'REVIEW_MANIFEST.json',E/'REVIEW_FROZEN.json');shutil.copyfile(N/'CANONICAL_BINDING.json',E/'CANONICAL_BINDING_BATCH2.json');note=json.loads((N/'ORIGINAL_NOTE.json').read_text());note.update(status='passed-bilingual-footer-note',reviewedAt=at,review='Both adjacent original paragraphs and independentJA preserved; newEnglish/Japanese note and fixed original link read against them. No original wording corrected.');(N/'ORIGINAL_NOTE.json').write_text(json.dumps(note,ensure_ascii=False,indent=2)+'\n');(E/'ORIGINAL_NOTE_REVIEW.json').write_text(json.dumps(note,ensure_ascii=False,indent=2)+'\n');print('910 whole reviews10/44unit/9pre;first10 exactreuse;review20/pending23')
