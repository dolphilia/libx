"""Deterministic LZ4 fixed-source converter. Writes only to an empty staging directory.

This creates English source material, never Japanese translations or review verdicts.
The caller validates all staged outputs before replacing the isolated English tree.
"""
import argparse, pathlib, json, hashlib, re, html, posixpath, shutil

ap = argparse.ArgumentParser()
ap.add_argument('--root', required=True)
ap.add_argument('--stage', required=True)
args = ap.parse_args()
root, stage = pathlib.Path(args.root).resolve(), pathlib.Path(args.stage).resolve()
assert stage.is_dir() and not list(stage.iterdir()), 'stage must exist and be empty'
src = root/'docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed'
notes = root/'docs/notes/document-import/lz4/v1-10-0'
mapping = json.loads((notes/'CONTENT_MAP.json').read_text())
boundary = json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/BOUNDARY.json').read_text())
rights = json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-784/RIGHTS_AND_FULFILLMENT.json').read_text())
licenses = {x['source']['path'].split('/lz4-fixed/')[1]:x for x in rights['files']}
pages = {x['sourcePath']:x for x in mapping['pages']}
assert len(pages) == 27 and set(pages) == {x['path'] for x in boundary['files'] if x['classification']=='adopt'}
sha = lambda b: hashlib.sha256(b).hexdigest()
for x in boundary['files']:
    assert sha((src/x['path']).read_bytes()) == x['sha256'], x['path']
commit = mapping['commit']
rewrites, rows = [], []
fixed_date = '2026-10-05'
known_notes = {
    'README.md': 'The benchmark table describes the historical LZ4 v1.9.0 measurements stated in the original; it is not a new measurement for v1.10.0.',
    'build/meson/README.md': 'The original still names contrib/meson. This fixed release stores these files in build/meson; NEWS records the move. The original commands have been retained rather than silently corrected.',
    'build/README.md': 'The original names Visual Studio 2022 and also displays VS2010 output paths. Both statements are preserved; those platform commands have not been executed by Libx.',
    'lib/dll/example/README.md': 'The original advertises HC levels 3–16 and -18. The fixed lz4hc.h declares LZ4HC_CLEVEL_MAX as 12. The original example description is retained; it is not a claim that the old levels work with v1.10.0.',
    'examples/dictionaryRandomAccess.md': 'The original compression prose calls the final integer the number of blocks, whereas the diagram and decompression instructions use the number of offsets (N+1). The prose itself already specifies N+1 offsets. The fixed dictionaryRandomAccess.c writes offsetsEnd - offsets and reads numOffsets. All original representations are retained. An earlier Libx note incorrectly said that the prose described N offsets; that note was corrected on 2026-10-05.',
    'doc/lz4_manual.html': 'This generated manual does not include the obsolete LZ4_create, LZ4_resetStreamState, LZ4_sizeofStreamState, and LZ4_slideInputBuffer declarations. The complete fixed lz4.h is included as a separate page. The original destSize prose says dstCapacity while the declaration uses targetDstSize; both are retained.',
    'doc/lz4frame_manual.html': 'This generated manual omits LZ4F_getVersion, LZ4F_getErrorCode, LZ4F_createCompressionContext_advanced, LZ4F_createDecompressionContext_advanced, and LZ4F_createCDict_advanced. The complete fixed lz4frame.h is included as a separate page. The original prose also uses LZ4_flush and LZ4_createCDict/LZ4_CDict where declarations use LZ4F names; these original spellings are retained. Literal <stdlib.h> is displayed as text rather than interpreted as an HTML tag.',
    'lib/lz4frame.h': 'The original header introduction cites frame specification v1.6.1, while the fixed specification page identifies v1.6.4. These are separate original version statements, not a Libx version correction.'
}

def rewrite_links(text, source):
    def replace(m):
        url = m[1]
        if re.match(r'^[a-z]+:|^/|^#', url, re.I): return m[0]
        clean, sep, fragment = url.partition('#')
        target = posixpath.normpath(str(pathlib.PurePosixPath(source).parent/clean))
        if target in pages: dest = pages[target]['route'] + (sep+fragment if sep else '')
        elif (src/target).is_file(): dest = 'https://github.com/lz4/lz4/blob/'+commit+'/'+target+(sep+fragment if sep else '')
        else: raise ValueError('unresolved relative Markdown destination: '+source+' '+url)
        rewrites.append({'source':source,'old':url,'new':dest})
        return ']('+dest+')'
    text = re.sub(r'\]\(([^\s)]+)\)', replace, text)
    def definition(m):
        rewritten = re.sub(r'\]\(([^\s)]+)\)', replace, ']('+m[2]+')')
        return m[1]+rewritten[2:-1]
    return re.sub(r'(?m)^([ \t]{0,3}\[[^\]]+\]:[ \t]*)([^\s]+)', definition, text)

for source, p in pages.items():
    raw = (src/source).read_bytes()
    assert sha(raw) == p['sourceSha256']
    text = raw.decode('utf-8')
    segments, anchors = [], []
    if source.endswith('.html'):
        body = re.sub(r'</(?:body|html)>','',text[text.index('<body>')+6:])
        body = re.sub(r'<(?!/?(?:h[1-6]|a|pre|b|p|ol|li|hr|br)(?=[\s/>]))','&lt;',body,flags=re.I)
        body = body.replace('`','&#96;')
        body = re.sub(r'(</h[1-6]>)',r'\1\n',body)
        def named_anchor(m):
            name = m[1]; anchors.append(name)
            return '<a name="'+name+'" id="'+name+'">'
        body = re.sub(r'<a name="([^"<>]+)">', named_anchor, body)
        transforms = ['remove outer HTML/head/style/body wrappers','escape literal angle text outside fixed generator grammar','protect literal backticks','separate block headings','retain named anchors and additionally set identical id']
    elif source.endswith('.h'):
        cursor, chunks = 0, []
        for m in re.finditer(r'(?m)^[ \t]*/\*.*?\*/[ \t]*(?:\n|$)',text,re.S):
            if m.start()>cursor:
                s=text[cursor:m.start()]; chunks.append('<pre><code>'+html.escape(s)+'</code></pre>')
                segments.append({'kind':'code','start':cursor,'end':m.start(),'sha256':sha(s.encode())})
            s=text[m.start():m.end()]; chunks.append('<pre class="lz4-source-comment">'+html.escape(s)+'</pre>')
            segments.append({'kind':'translatable-original-comment','start':m.start(),'end':m.end(),'sha256':sha(s.encode())}); cursor=m.end()
        if cursor<len(text):
            s=text[cursor:]; chunks.append('<pre><code>'+html.escape(s)+'</code></pre>')
            segments.append({'kind':'code','start':cursor,'end':len(text),'sha256':sha(s.encode())})
        assert ''.join(text[x['start']:x['end']] for x in segments)==text
        body='\n\n'.join(chunks)
        transforms=['complete standalone C block comments exposed as prose pre','all other declarations/code including inline comments retained','literal HTML escaped; exact ordered source spans']
    elif source=='NEWS':
        body='<pre>'+html.escape(text)+'</pre>'; transforms=['plain text retained in pre']
    else:
        body=rewrite_links(text.removeprefix('\ufeff'),source); transforms=['original Markdown unchanged except mapped local destinations']
        if text.startswith('\ufeff'): transforms.append('remove leading UTF-8 BOM before insertion below frontmatter; original download bytes unchanged')
    sid='lz4-1-10-0-'+re.sub(r'[^a-z0-9]+','-',source.lower()).strip('-')
    original_url='https://github.com/lz4/lz4/blob/'+commit+'/'+source
    original_download='/docs/lz4/source/v1-10-0/originals/'+source+'.txt'
    source_note='<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: '+fixed_date+'. Original commit: <code>'+commit+'</code>; SHA-256: <code>'+p['sourceSha256']+'</code>. <a href="'+original_url+'">Fixed upstream source</a>; <a href="'+original_download+'">Unmodified original and its notices</a>; <a href="/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz">Complete fixed upstream archive</a>; <a href="/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p>'
    if licenses[source]['fallbackAnnotation']:
        source_note+='<p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: '+html.escape(licenses[source]['license'])+'. This is an operational decision, not a newly obtained permission.</p>'
    source_note+='<p>Presentation changes: '+html.escape('; '.join(transforms))+'. No technical prose has been silently corrected or summarized.</p>'
    contexts=[{'kind':'source','html':source_note}]
    if source in known_notes: contexts.append({'kind':'editorial','html':'<p>'+html.escape(known_notes[source])+'</p>'})
    fm='---\ntitle: '+json.dumps('LZ4: '+source)+'\n'
    if sid!='lz4-1-10-0-readme-md': fm+='licenseSource: '+json.dumps(sid)+'\n'
    fm+='documentContext:\n'
    for c in contexts: fm+='  - kind: '+c['kind']+'\n    html: '+json.dumps(c['html'],ensure_ascii=False)+'\n'
    fm+='---\n\n'
    rel=pathlib.PurePosixPath(p['canonicalPath']).relative_to('apps/lz4/src/content/docs/v1-10-0/en')
    dest=stage/'en'/rel; dest.parent.mkdir(parents=True,exist_ok=True); dest.write_text(fm+body)
    download=stage/'source'/'originals'/(source+'.txt'); download.parent.mkdir(parents=True,exist_ok=True); download.write_bytes(raw)
    rows.append({'path':source,'sourceSha256':sha(raw),'canonicalPath':p['canonicalPath'],'canonicalSha256':sha(dest.read_bytes()),'route':p['route'],'transforms':transforms,'segments':segments,'explicitOriginalAnchors':anchors,'licenseSource':sid,'originalDownload':original_download,'editorialNotePresent':source in known_notes})
# The entire immutable source archive and license texts are supplied without executing upstream code.
archive=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-780/LZ4_FIXED.tar.gz'
shutil.copyfile(archive,stage/'source'/'LZ4_FIXED.tar.gz')
ld=stage/'source'/'licenses'; ld.mkdir()
for name,orig in [('UPSTREAM_LICENSE.txt','LICENSE'),('BSD-2-Clause.txt','lib/LICENSE'),('GPL-2.0-or-later.txt','programs/COPYING'),('djgpp-BSD-2-Clause.txt','contrib/djgpp/LICENSE')]: (ld/name).write_bytes((src/orig).read_bytes())
(ld/'Frame-Notices.txt').write_text('\n'.join((src/'doc/lz4_Frame_format.md').read_text().splitlines()[4:15])+'\n')
(stage/'CANONICAL_MAP.json').write_text(json.dumps({'schemaVersion':1,'version':'v1-10-0','date':fixed_date,'inputCommit':commit,'pages':rows,'linkRewrites':rewrites,'translation':'pending','contentReview':'pending','sourceKit':'pending: this archive is upstream source only, not the complete corresponding Libx documentation source kit'},ensure_ascii=False,indent=2)+'\n')
print('generated 27 English pages and fixed originals/notices; no translation or content review')
