"""Third canonical generation step: restore one declaration present in fixed RST
but absent from the original Sphinx packet. Annotate only in the footer.
Does not modify original RST, existing original narrative, or other code.
"""
from pathlib import Path
import argparse,json,hashlib,html
arg=argparse.ArgumentParser();arg.add_argument('--repository',required=True);arg.add_argument('--workspace',required=True);arg.add_argument('--translation',action='store_true');a=arg.parse_args();root=Path(a.repository);packet=root/'docs/notes/document-import/libuv/1.53.0';app=Path(a.workspace)/'apps/libuv';sha=lambda b:hashlib.sha256(b).hexdigest();rst=packet/'sources/docs/src/guide/networking.rst';assert sha(rst.read_bytes())=='6d12921724fd84c70c256f27b894df5b41a113d0ad87688b733b4af03bb68e73';lines=rst.read_text().splitlines();assert lines[173]=='.. code::block:: c';declaration=lines[175].removeprefix('    ');assert declaration=='int uv_udp_set_membership(uv_udp_t* handle, const char* multicast_addr, const char* interface_addr, uv_membership membership);'
block='<div class="highlight-c notranslate libuv-restored-declaration"><div class="highlight"><pre>'+html.escape(declaration)+'&#10;</pre></div></div>&#10;';marker='libuv-restored-declaration'
notes={
'en':'<p>Libx conversion note: the fixed RST uses the malformed directive <code>.. code::block:: c</code> for <code>uv_udp_set_membership</code>. Its declaration was absent from the source-generated HTML. Libx restores the complete declaration verbatim from fixed RST line176 at its original position. The original RST and existing narrative/code remain unchanged. <a href="/docs/libuv/source/v1-53-0/docs/src/guide/networking.rst">Fixed original RST</a>.</p>',
'ja':'<p>Libx変換注記: 固定RSTでは<code>uv_udp_set_membership</code>に、誤った指示<code>.. code::block:: c</code>が使われています。この宣言は原文から生成されたHTMLに含まれていませんでした。Libxでは、固定RSTの176行目にある宣言全文を変更せず、元の位置に復元しています。原RSTと既存の本文・コードは変更していません。<a href="/docs/libuv/source/v1-53-0/docs/src/guide/networking.rst">固定原RST</a>。</p>'}
for lang in ['en','ja'] if a.translation else ['en']:
 p=packet/('canonical/en/guide/networking.md' if lang=='en' else 'translation/ja/guide/networking.md');head,body=p.read_text().split('---\n',2)[1:];begin=body.index('<section id="multicast">');start=body.index('<p>',begin);end=body.index('</p>',start)+len('</p>');assert 'uv_udp_set_membership' not in body or marker in body
 if marker not in body:body=body[:end]+'&#10;'+block+body[end:]
 else:assert body.count(block)==1
 line=next(l for l in head.splitlines() if l.startswith('documentContext: '));contexts=json.loads(line.split(': ',1)[1]);editorial=next(c for c in contexts if c['kind']=='editorial');note=notes[lang]
 if note not in editorial['html']:editorial['html']+=note
 head=head.replace(line,'documentContext: '+json.dumps(contexts,ensure_ascii=False));p.write_text('---\n'+head+'---\n'+body);(app/('src/content/docs/v1-53-0/'+lang+'/guide/networking.md')).write_bytes(p.read_bytes())
 if lang=='en':
  mp=packet/'CONTENT_MAP.json';m=json.loads(mp.read_text());row=next(r for r in m['rows'] if r['slug']=='guide/networking');row['canonicalSha256']=sha(p.read_bytes());row['bodySha256']=sha(body.encode());row['codes']=9;row['sourcePreservationCorrection']={'originalRstLine':176,'declaration':declaration,'sourceUnchanged':True,'sourceGeneratedHTMLMissingDeclaration':True};m['canonicalGenerationSteps']=['generate-canonical.py --repository ROOT --workspace WORKSPACE','apply-basics-editorial-note.py --repository ROOT --workspace WORKSPACE','apply-networking-declaration.py --repository ROOT --workspace WORKSPACE'];mp.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print('networking fixed RST declaration restored; existing narrative/code unchanged; footer note saved')
