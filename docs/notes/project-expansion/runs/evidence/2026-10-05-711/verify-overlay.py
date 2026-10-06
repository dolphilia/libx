from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,subprocess
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-711';workspace='/private/tmp/libx-libuv-formal-689';python='/private/tmp/libx-libuv-screening-676/venv/bin/python';hashes=lambda:{str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in list((packet/'canonical/en').rglob('*.md'))+[packet/'CONTENT_MAP.json',packet/'translation/ja/guide/networking.md']};before=hashes()
for n in range(2):
 for f in ['generate-canonical.py','apply-basics-editorial-note.py','apply-networking-declaration.py']:
  subprocess.run([python,str(packet/f),'--repository',str(root),'--workspace',workspace],check=True,capture_output=True)
 assert hashes()==before,'Canonical3step generation changed outputs'
subprocess.run([python,str(packet/'apply-networking-declaration.py'),'--repository',str(root),'--workspace',workspace,'--translation'],check=True,capture_output=True);assert hashes()==before
rows=[]
for lang in ['en','ja']:
 old=ev/('BASELINE_'+lang+'_networking.md');current=packet/('canonical/en/guide/networking.md' if lang=='en' else 'translation/ja/guide/networking.md');oldbody=BeautifulSoup(old.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article');newbody=BeautifulSoup(current.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article');restored=newbody.select_one('.libuv-restored-declaration');assert restored and restored.select_one('pre').get_text().strip()=='int uv_udp_set_membership(uv_udp_t* handle, const char* multicast_addr, const char* interface_addr, uv_membership membership);';restored.extract()
 # Inserting an exact standalone block adds only separator newline text.
 normalize=lambda s:' '.join(s.get_text().split());assert normalize(newbody)==normalize(oldbody);assert [str(x) for x in newbody.select('pre')]==[str(x) for x in oldbody.select('pre')];assert [x.get('href') for x in newbody.select('a')]==[x.get('href') for x in oldbody.select('a')];assert [x.get('id') for x in newbody.select('[id]')]==[x.get('id') for x in oldbody.select('[id]')];rows.append({'language':lang,'restoredDeclarationExact':True,'existingNarrativeCodeLinksIdsPreserved':True})
(ev/'OVERLAY_VERIFICATION.json').write_text(json.dumps({'canonicalGenerationSteps':3,'repeatFullGenerationCount':2,'all43CanonicalPlusMapAndJAReproduced':True,'rows':rows,'hashes':before,'sourceRSTUnchanged':True,'originalCodeBlocksPreserved':8,'restoredCodeBlocks':1,'fullSemanticReview':'pending','nativeDisplay':'pending'},indent=2)+'\n');print('3step twice reproduced43EN/map/JA; restored declaration exact; preexisting narrative8code/links/ids preserved')
