from pathlib import Path
import json,hashlib,datetime,shutil,ast
N=Path('/private/tmp/libx-gnu-grep-formal-903/docs/notes/document-import/gnu-grep/v3-12');E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-06-903');rel=Path('docs/notes/document-import/gnu-grep/v3-12');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();ref=lambda p:{'path':str(rel/p.relative_to(N)),'sha256':h(p),'coverage':[[1,len(p.read_text().splitlines())]]};m=json.loads((N/'CONTENT_MAP.json').read_text());at=datetime.datetime.now(datetime.timezone.utc).isoformat();rows=[]
findings=[
'1つ以上のパターン、一致行の既定出力とオプションによる出力、メモリー以外の行長制限なし、末尾改行補完・改行パターン区切りの説明を全文保持。',
'option/fileゼロ個以上とpatterns省略-e/-f、改行区切り・shell引用を保持。書式のVAR表示・コードは静的リテラルとして保持。',
'POSIX短名/GNU長名と互換オプション、照合エンジンの種類への参照を保持。',
'--helpの使用法・バグ報告先・終了と--versionの標準出力/報告時版番号を保持。',
'-e/-fの複数指定・組合せとstdin/空ファイル、casefold未規定/Sſ/ßSSẞの条件、-y旧同義/-iと--no-ignore-case相互上書き、-v/-w/-xの選択条件を全文確認。lettersを英字限定しない字母へ1unit修正し、隣接単語境界/-x/\u005c<\u005c>例を限定再確認。',
'count反転、GREP_COLORS/WHEN/TERM既定、-L/-lの区別、num0/-1・選択行/stdin再開/pipe非通常fileと後続文脈/-c/-v、-o/NUL/-qエラー時0/Solaris注意/-sを保持。コード中説明comment1行も訳し、残る実コード・改行は不変。',
'prefix順file/line/byte、0/1始まり、-o一致部分offset、-H/-h既定差・--label stdin例・-T tab/spaces・-Z NUL/任意file名処理を保持。',
'文脈行の定義・重複しない/-o警告、-A/-B/-C前後、groupseparator、一致:と文脈-、隣接行group/--区切り/merge条件の全箇条書きを保持。',
'type判定・binary/text/without-match・NUL/不正encoding/標準エラーメッセージ、q$/dotの可能性とheuristic依存、原著端末警告/-a/LC_ALL、devices/stdin/recursive・directory動作・globのsuffix/base境界とexclude/include最後一致・-r/-R symlink差を全文保持。',
'--オプション終端と-PAT/-file例、line/fullbuffer、-U text/binaryI/O/CRLF/Control-Z/byteoffsetとheuristicの独立・POSIX無効果、-z NUL/sort-zを保持。'
]
for i,row in enumerate(m['items'][:10]):
 ja=N/'drafts/ja'/row['id'];can=N/'canonical/ja'/row['id'];can.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ja,can);u=N/'translations'/(row['slug']+'-units.json');units=json.loads(u.read_text());rows.append({'id':row['id'],'status':'passed','method':'ai-content-review','model':'gpt-6.1-sol (POLICY preferred;runtime not independently exposed)','reviewedAt':at,'separateReviewPass':True,'allUnitsReviewed':len(units['units']),'literalPreReviewed':row['pre'],'source':ref(N/'source-fragments/en'/row['id'].replace('.md','.html')),'canonical':ref(N/row['canonical']),'translation':ref(can),'originalRaw':{'path':str(rel/'source/original/doc/grep.texi'),'sha256':h(N/'source/original/doc/grep.texi')},'savedReviewedJADraft':ref(ja),'findings':[findings[i]],'wholeFileCoverageBasis':'Separate complete saved original/currentEN/JA body pass including headings,definitions,bullets,allcode/VAR andone comment description. Initialcombinedoutput truncated6–8/original9; missing ranges separately read fully beforeapproval. Source technicalaudit/examples execution notperformed. OriginalEnglishGFDL terms/notice from902 reused;no Japanese license translation claim.'});row.update(translation='saved',meaningReview='passed',translationCanonical='canonical/ja/'+row['id'],translationSHA256=h(can))
review={'schemaVersion':1,'scope':[r['id'] for r in m['items']],'completedPages':10,'unreviewedPages':14,'at':at,'reviewMethod':'903 firstten:one separate complete meaning pass eachpage;one letters→字母 delta repair only. Remainingfourteen guides unreviewed.','pages':rows+[{'id':r['id'],'status':'pending','reason':'Japanese translation andwholemeaningreview notyetperformed'} for r in m['items'][10:]],'originalLicenseTermsReuse':'902/RIGHTS.json exactGFDL terms exceptoriginalFSFyearline,current1999–2002/2005/2008–2025docnotice preserved. English-only reference excludedfrom24guide translation scope.'};(N/'REVIEW_MANIFEST.json').write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n');m['meaningReview']='10passed/14pending';m['Japanese']='10saved/14pending';(N/'CONTENT_MAP.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(N/'CANONICAL_BINDING.json',E/'CANONICAL_BINDING_BATCH1.json');shutil.copyfile(N/'REVIEW_MANIFEST.json',E/'REVIEW_FROZEN.json')
initial={}
for p in [Path('/private/tmp/libx-gnu-grep-batch1-drafts.py'),Path('/private/tmp/libx-gnu-grep-batch1-drafts-rest.py')]:
 node=next(n for n in ast.parse(p.read_text()).body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='pages' for t in n.targets));initial.update(ast.literal_eval(node.value))
deltas=[]
for slug,v in initial.items():
 now=json.loads((N/'translations'/(slug+'-ja.json')).read_text());assert len(now)==len(v)
 for i,(a,b) in enumerate(zip(v,now)):
  if a!=b:deltas.append({'slug':slug,'unit':i,'before':a,'after':b})
assert len(deltas)==1 and deltas[0]['slug']=='05-matching-control' and deltas[0]['unit']==7;(E/'BATCH1_DRAFT_DELTA_BINDING.json').write_text(json.dumps({'status':'passed','at':at,'pages':10,'totalTranslationUnits':sum(len(v) for v in initial.values()),'changedUnits':deltas,'otherNineTranslationInputsExact':True},ensure_ascii=False,indent=2)+'\n');print('903 ten wholemeaningreviews saved;oneunit delta/94units;remaining14')
