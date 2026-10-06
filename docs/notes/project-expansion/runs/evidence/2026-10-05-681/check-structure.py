from pathlib import Path
from bs4 import BeautifulSoup
from docutils import nodes
from sphinx import addnodes
from sphinx.application import Sphinx
import io
import pickle,json,re,collections,hashlib
root=Path('/private/tmp/libx-libuv-normalized-679');orig=Path('/private/tmp/libx-libuv-screening-676/source/docs/src');prepared=Path('/private/tmp/libx-libuv-body-prepared-680');out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-681');app=Sphinx(str(root/'source/docs/src'),str(root/'source/docs/src'),str(root/'generated/html'),str(root/'doctrees'),'html',status=io.StringIO(),warning=io.StringIO(),freshenv=False,tags=['Graphical']);rows=[];totals=collections.Counter();sigre=re.compile(r'^\s*\.\. c:(?:type|function|member|macro|enum)::\s*(.*)',re.M);nw=lambda s:re.sub(r'\s+','',s.replace('¶',''));compact=lambda s:' '.join(s.split())
def graphical(n):
 while n is not None:
  if isinstance(n,addnodes.only) and n.get('expr')=='Textual':return False
  n=n.parent
 return True
for p in sorted(orig.rglob('*.rst')):
 rel=p.relative_to(orig).with_suffix('');d=pickle.loads((root/'doctrees'/rel.with_suffix('.doctree')).read_bytes());body=BeautifulSoup((prepared/rel.with_suffix('.html')).read_text(),'html.parser').find('article',role='main')
 rawOriginal=sigre.findall(p.read_text());rawGenerated=[x.rawsource for x in d.findall(addnodes.desc_signature) if graphical(x)];assert collections.Counter(rawOriginal)==collections.Counter(rawGenerated),(str(rel),len(rawOriginal),len(rawGenerated))
 signatures=[x.astext() for x in d.findall(addnodes.desc_signature) if graphical(x)];rendered=[x.get_text() for x in body.select('dt.sig')];signatureMatch=collections.Counter(map(nw,signatures))==collections.Counter(map(nw,rendered))
 for c in body.select('span.linenos'):c.decompose()
 code=[x.astext() for x in d.findall(nodes.literal_block) if graphical(x)];renderedCode=[x.get_text() for x in body.select('div.highlight pre')];expectedCounter=collections.Counter(x if x.endswith('\n') else x+'\n' for x in code);actualCounter=collections.Counter(renderedCode);codeMissing=list((expectedCounter-actualCounter).elements());extra=list((actualCounter-expectedCounter).elements())
 resolved=app.env.get_and_resolve_doctree(rel.as_posix(),app.builder)
 originalFootnoteRefs=len(list(resolved.findall(nodes.footnote_reference)));renderedFootnoteRefs=len(body.select('a.footnote-reference'));assert originalFootnoteRefs==renderedFootnoteRefs
 for r in list(resolved.findall(nodes.footnote_reference)):
  r['ids']=[];r.replace_self(nodes.Text(''))
 for r in body.select('a.footnote-reference'):r.decompose()
 paras=[x.astext() for x in resolved.findall(nodes.paragraph) if graphical(x)];renderText=compact(body.get_text());paragraphMissing=[{'text':x,'source':str(rel)+'.rst'} for x in paras if compact(x) not in renderText]
 tables=sum(graphical(x) for x in d.findall(nodes.table));renderTables=len(body.select('table.docutils'));images=[x['uri'] for x in d.findall(nodes.image) if graphical(x)];renderImages=[x['src'] for x in body.select('img')]
 row={'page':rel.as_posix()+'.html','originalDeclarations':len(rawOriginal),'originalDeclarationRawsourceExact':True,'renderedDeclarationTokensMatch':signatureMatch,'literalBlocks':len(code),'missingCode':codeMissing,'extraCode':extra,'footnoteReferences':originalFootnoteRefs,'paragraphs':len(paras),'paragraphMissing':paragraphMissing,'tables':tables,'renderedTables':renderTables,'images':images,'renderedImages':renderImages};rows.append(row);totals.update({'declarations':len(rawOriginal),'literalBlocks':len(code),'footnoteReferences':originalFootnoteRefs,'paragraphs':len(paras),'paragraphMissing':len(paragraphMissing),'missingCode':len(codeMissing),'extraCode':len(extra),'tables':tables,'images':len(images),'signatureMismatchPages':not signatureMatch})
(out/'STRUCTURE_PRESERVATION.json').write_text(json.dumps({'status':'structural-comparison','method':'Fixed original C directive rawsource equals normalized-stage doctree rawsource. Doctree signature tokens vs rendered signature ignore formatting whitespace/permalink only. Code bytes include indentation/trailing blanks, only absent final LF supplied and generated linenos removed. Paragraph checks use official resolved references (C-function parenthesis/doc-title labels) and normalize whitespace; footnote markers are counted separately and excluded from paragraph comparison because HTML brackets differ. This does not prove semantics. Textual alternates kept separately.','totals':dict(totals),'rows':rows,'limitations':['The parsed doctree is evidence of the official generator interpretation, not an independent proof that every original RST construct parsed correctly.','Original malformed directives and references still require source-level review.','Not full semantic review/translation or Astro native test.']},ensure_ascii=False,indent=2)+'\n');print(dict(totals));print('issues',[{'page':x['page'],'signature':x['renderedDeclarationTokensMatch'],'missingCode':len(x['missingCode']),'extraCode':len(x['extraCode']),'missingParagraphs':x['paragraphMissing'][:2]} for x in rows if not x['renderedDeclarationTokensMatch'] or x['missingCode'] or x['extraCode'] or x['paragraphMissing']][:10])
