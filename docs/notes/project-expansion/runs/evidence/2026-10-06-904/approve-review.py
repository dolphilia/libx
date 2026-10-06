from pathlib import Path
import json,hashlib,datetime,shutil,ast
N=Path('/private/tmp/libx-gnu-grep-formal-903/docs/notes/document-import/gnu-grep/v3-12');E=Path(__file__).resolve().parent;rel=Path('docs/notes/document-import/gnu-grep/v3-12');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();write=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');ref=lambda p:{'path':str(rel/p.relative_to(N)),'sha256':h(p),'coverage':[[1,len(p.read_text().splitlines())]]};m=json.loads((N/'CONTENT_MAP.json').read_text());review=json.loads((N/'REVIEW_MANIFEST.json').read_text());oldfirst=review['pages'][:10];at=datetime.datetime.now(datetime.timezone.utc).isoformat();rows=[]
findings=[
'ロケールのLC_ALL/LC_foo/LANG順とLANGUAGE特例、C/NLS条件、GREP_COLOR移行、SGR値全範囲、-v/rvのselected/context反転とms/mc条件、neのEL/bce例外、localeカテゴリー・POSIXLY_CORRECT・TERM・GREP_OPTIONS廃止とscript全文を保持。不可視commentは表示文に含めない。',
'通常0/1/2、quiet/silentで選択行がある場合のerrorでも0、他実装error>2を保持。',
'入力/stdin/recursive既定、BRE/ERE/fixed/PCREとPOSIX、Perl/pcre2grep/grep/git grepのUTF-8条件、Unicode/ASCIIのd/digit/POSIX-digit差、PCRE2>=10.43条件、Unicode版差、行単位/(?s)/-zと全fileメモリー注意を保持。Perl/PCRE2の環境の新旧を明確化する1unit修正だけ限定再確認。入れ子preの3行出力と全改行を保持。',
'文字列集合・算術式類比、3構文・GNU同機能と他実装差、ERE説明とBRE後述、PCREmanual/利用可能条件を保持。',
'特殊文字列、dot任意1字とencoding未規定、全7反復演算子の下限上限/GNU拡張、空regex/連結/選択・優先順位/括弧/孤立右括弧・不正regex参照を保持。',
'角括弧式/否定とencoding未規定、C/ASCII範囲と他locale未規定の全可能性、LC_ALL=C、全12class/ASCII条件・全文字一覧、二重括弧必要/診断exit2、全9特殊要素と位置条件を保持。Alphabeticを英字へ限定しない字母表記。',
'特殊文字escape、全10backslash表現と空文字列/単語境界・補集合、rat例と未規定なescapeの全条件・将来変更可能性を保持。'
]
for i,row in enumerate(m['items'][10:17]):
 ja=N/'drafts/ja'/row['id'];can=N/'canonical/ja'/row['id'];can.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ja,can);units=json.loads((N/'translations'/(row['slug']+'-units.json')).read_text());rows.append({'id':row['id'],'status':'passed','method':'ai-content-review','model':'gpt-6.1-sol (POLICY preferred;runtime not independently exposed)','reviewedAt':at,'separateReviewPass':True,'allUnitsReviewed':len(units['units']),'literalPreReviewed':row['pre'],'source':ref(N/'source-fragments/en'/row['id'].replace('.md','.html')),'canonical':ref(N/row['canonical']),'translation':ref(can),'originalRaw':{'path':str(rel/'source/original/doc/grep.texi'),'sha256':h(N/'source/original/doc/grep.texi')},'savedReviewedJADraft':ref(ja),'findings':[findings[i]],'wholeFileCoverageBasis':'904 separate complete original and saved Japanese body reading including all definitions/lists/code/VAR; unchanged English-original exact binding903 reused. Page11 read again without inherited GFDL frontmatter to ensure no truncated body. One page13 paragraph repaired and checked with dependent conditions. Source technical audit/example execution not performed; English GFDL902 reused.'});row.update(translation='saved',meaningReview='passed',translationCanonical='canonical/ja/'+row['id'],translationSHA256=h(can))
review.update(completedPages=17,unreviewedPages=7,at=at,reviewMethod='903 firstten preserved exactly;904 seven complete separate meaning reviews,one paragraph repair only;remainingseven unreviewed.',pages=oldfirst+rows+review['pages'][17:]);assert review['pages'][:10]==oldfirst;write(N/'REVIEW_MANIFEST.json',review);write(E/'REVIEW_FROZEN.json',review);m['meaningReview']='17passed/7pending';m['Japanese']='17saved/7pending';write(N/'CONTENT_MAP.json',m)
initial={}
for name in ['a','b']:
 p=Path('/private/tmp/libx-gnu-grep-batch2-drafts-'+name+'.py');tree=ast.parse(p.read_text());node=next(n for n in tree.body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='pages' for t in n.targets));initial.update(ast.literal_eval(node.value))
delta=[]
for slug,v in initial.items():
 now=json.loads((N/'translations'/(slug+'-ja.json')).read_text());assert len(v)==len(now)
 for i,(a,b) in enumerate(zip(v,now)):
  if a!=b:delta.append({'slug':slug,'unit':i,'before':a,'after':b})
assert len(delta)==1 and delta[0]['slug']=='13-grep-programs' and delta[0]['unit']==11;write(E/'BATCH2_DRAFT_DELTA_BINDING.json',{'status':'passed','pages':7,'totalUnits':sum(map(len,initial.values())),'changedUnits':delta,'otherSixInputArraysExact':True,'firstTenReviewRecordsUnchanged':True});print('17passed/7pending; batch2 99units,1unit repair;firstten records retained')
