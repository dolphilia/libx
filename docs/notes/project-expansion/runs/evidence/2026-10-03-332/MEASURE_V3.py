import json,re,hashlib,pathlib,collections
root=pathlib.Path('/Users/dolphilia/github/libx')
base=root/'docs/notes/project-expansion/runs/evidence'
src=base/'2026-10-03-327/source/zlib-1.3.2'
out=base/'2026-10-03-332/v3';out.mkdir(exist_ok=False)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def save(n,d):(out/n).write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
names=['zlib.h','zconf.h','README','FAQ','LICENSE','zlib.3']
inputs=[{'path':str((src/n).relative_to(root)),'sha256':sha(src/n)} for n in names]
decl=json.loads((base/'2026-10-03-331/v3/API_DECLARATION_INVENTORY.json').read_text())['inventories'][0]
s=(src/'zlib.h').read_text();blocks=json.loads((base/'2026-10-03-328/v3/zlib.h.blocks.json').read_text())
hacks=next(b for b in blocks if b['kind']=='comment' and 'various hacks' in b['display'])
undoc=next(b for b in blocks if b['kind']=='comment' and 'undocumented functions' in b['display'])
protos=[]
for b in blocks:
 if b['kind']=='comment':
  for m in re.finditer(r'ZEXTERN\b[^;]*?\bZEXPORT(?:VA)?\s+(\w+)\s*\([^;]*;',b['display']):
   protos.append({'symbol':m[1],'block':b['index'],'sourceLines':[b['lineStart'],b['lineEnd']],'prototype':m[0]})
protoNames={p['symbol'] for p in protos}
records=[]
for name in decl['uniqueSymbols']:
 ds=[d for d in decl['declarations'] if d['symbol']==name]
 first=min(d['line'] for d in ds)
 if first>=undoc['lineStart']:category='upstream-undocumented'
 elif first<hacks['lineStart']:category='main-interface-export'
 elif name in protoNames:category='main-interface-comment-prototype-export'
 elif name.endswith('64'):category='large-file-offset-compatibility-export'
 else:category='initialization-or-macro-support-export'
 records.append({'symbol':name,'category':category,'declarations':ds,'commentPrototype':[p for p in protos if p['symbol']==name]})
assert len(records)==96 and sum(len(r['declarations']) for r in records)==107
macros=[p for p in protos if p['symbol'] not in decl['uniqueSymbols']]
assert {m['symbol'] for m in macros}=={'deflateInit','inflateInit','deflateInit2','inflateInit2','inflateBackInit'}
# Directive occurrence inventory keeps conditional branches, aliases and every
# original replacement string. This is not a count of public API constants.
directive={}
for n in ['zlib.h','zconf.h']:
 text=(src/n).read_text();rs=[]
 lines=text.splitlines();i=0
 while i<len(lines):
  m=re.match(r'^[ \t]*#[ \t]*define[ \t]+(\w+)\b',lines[i])
  if not m:i+=1;continue
  start=i;parts=[lines[i]]
  while parts[-1].endswith('\\'):
   i+=1;assert i<len(lines);parts.append(lines[i])
  rs.append({'name':m[1],'line':start+1,'definition':'\n'.join(parts)})
  i+=1
 directive[n]={'occurrences':len(rs),'uniqueNames':len({r['name'] for r in rs}),'records':rs}
types=['alloc_func','free_func','z_stream','z_streamp','gz_header','gz_headerp','in_func','out_func','gzFile']
typeRecords=[]
for name in types:
 rs=[]
 for b in blocks:
  if b['kind']=='code' and (re.search(r'typedef[^;]*\(\*'+re.escape(name)+r'\)',b['original']) or re.search(r'typedef[^;]*\b'+re.escape(name)+r'\s*;',b['original']) or re.search(r'\}\s*'+re.escape(name)+r'\s*;',b['original'])):
   rs.append({'block':b['index'],'sourceLines':[b['lineStart'],b['lineEnd']]})
 assert rs;typeRecords.append({'name':name,'evidence':rs})
counts=collections.Counter(r['category'] for r in records)
save('API_CLASSIFICATION.json',{'status':'classified-by-upstream-placement','sourceFiles':inputs[:2],'basis':{'hacksLine':hacks['lineStart'],'undocumentedLine':undoc['lineStart']},'exportOccurrences':107,'uniqueExports':96,'categories':dict(counts),'records':records,'documentedInitializationMacros':macros,'mainHeaderTypedefNames':typeRecords,'directives':directive,'limits':['main-interface labels denote upstream placement/associated prototype, not independent per-function semantic-review completion.','zconf conditional typedefs/portability macros preserved in full companion source; directive occurrences are lexical inventory, not public semantic API counts.','Do not invent descriptions for upstream undocumented/support exports. Retain original declarations and notices.']})
measures=[]
for n in names:
 text=(src/n).read_text()
 if n in ['zlib.h','zconf.h']:
  bs=json.loads((base/('2026-10-03-328/v3/'+n+'.blocks.json')).read_text())
  display=''.join(b['display'] for b in bs if b['kind']=='comment')
  method='top-level comment display; embedded prototypes/examples remain included; inline code comments not counted separately'
 else:display=text;method='whole source whitespace tokens including man syntax'
 measures.append({'file':n,'sha256':sha(src/n),'lines':len(text.splitlines()),'wholeTokens':len(text.split()),'translationSizingTokens':len(display.split()),'method':method})
total=sum(m['wholeTokens'] for m in measures);sizing=sum(m['translationSizingTokens'] for m in measures)
assert total<30000
save('WORKLOAD_ESTIMATE.json',{'status':'estimated-not-executed','scope':'all six fixed root source files; no necessary chapters omitted','inputs':inputs,'measures':measures,'wholeTokensUpperBound':total,'translationSizingTokens':sizing,'notNaturalLanguageWordCount':'Whitespace tokens are a sizing proxy. Header code is retained verbatim; embedded code/prototypes inflate comment proxy and inline comments can add translation work. Whole-input upper bound stays under 30000 even including code.','structure':{'sourceBlocks':319,'faqQuestions':44,'bitflagTables':7,'bitflagRows':22,'exportOccurrences':107,'uniqueExports':96,'documentedInitializationMacros':5,'mainHeaderTypedefNames':9,'generatedInternalLinkOccurrences':448,'preservedExternalLinkOccurrences':22,'figures':0,'sourcePages':6,'finalPageSplit':'Preserve all source units; split API by eight upstream sections for review and navigation, not scope reduction.'},'initialHours':{'canonicalImporterAndProvenance':[4,8],'translationAndOriginalAlignment':[8,16],'separateFullContentReview':[6,12],'machineAndDisplayIntegration':[3,6],'total':[21,42]},'estimateBasis':'Range is planning estimate, not measured completion time. 319 immutable blocks provide review units; 18273 translation-sizing tokens, long API normative/return-code text, 44 FAQ, conditional declarations, manual syntax and known upstream typos require two separate reading passes. Existing lossless converter and real Astro checks reduce acquisition/rendering uncertainty; translation and independent review remain entirely unperformed.','updateHours':{'unchangedFixedVersion':[0.5,1],'smallUpstreamPatch':[3,8],'majorOrLargeTextChange':'remeasure full diff before committing an estimate'},'maintenanceProcedure':['Fetch fixed new official release independently, hash archive and six scope files; classify full archive anew for rights/boundary changes.','Diff exact source blocks, lexical declarations, macros, source notices and manual version. Unchanged translations retain valid hashes, changed blocks invalidate translation/review.','Regenerate canonical content with retained importer and link maps, translate/review every changed unit separately, rerun full machine checks and scoped display/regression.'],'extensionReason':'Proceed beyond initial 30-minute screening because fixed rights/boundary/source exist and each conversion iteration resolves concrete text preservation/display issues. Current detailed candidate count is one; do not add parallel candidates or repeatedly recheck published projects.','unresolved':['Exact final pagination and formal template importer remain to be implemented before canonical-ready.','Japanese additional-value/practicality/quality/maintenance/reuse scores and separate selection review remain pending.','Conversion gate still unknown until pending fragment/man/file reference concerns are addressed.']})
print(json.dumps({'exports':dict(counts),'commentPrototypes':len(protos),'initializationMacros':len(macros),'wholeTokens':total,'translationSizingTokens':sizing,'initialHours':[21,42]},ensure_ascii=False))
