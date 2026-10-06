from pathlib import Path
import re,json,hashlib,ast
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();t=s.index('XXH3_128bits_reset()</h2>');a=s.rfind('<a id=',0,t);t=s.index('XXH128_isEqual()</h2>',a);b=s.rfind('<a id=',a,t);part=s[a:b]
m={}
for f in ['libx-xxh3-state-510.py','libx-xxh3-stream-511.py']:
 tree=ast.parse(Path('/private/tmp/'+f).read_text());m.update(ast.literal_eval(next(n.value for n in tree.body if isinstance(n,ast.Assign)and any(isinstance(x,ast.Name)and x.id=='m'for x in n.targets))))
add={'Call it before':'この関数は、次の関数より前に呼び出してください：',
 'the hash streaming session. Similar to one-shot API,':'ハッシュのストリーミングセッション。一括APIと同様に、',
 'The memory between':'次の範囲のメモリ：',
 'Returns the calculated XXH3 128-bit hash value from an':'次の状態から計算したXXH3の128ビットハッシュ値を返します：',
 'The calculated XXH3 128-bit hash value from that state.':'その状態から計算されたXXH3の128ビットハッシュ値。'}
m.update(add);parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(add)<=set(used),set(add)-set(used)
part=''.join(parts).replace('<code class="param">statePtr</code> は <span class="tt">NULL</span>。','<code class="param">statePtr</code> は <span class="tt">NULL</span> であってはなりません。').replace('が <span class="tt">0</span>, <code class="param">','が <span class="tt">0</span> の場合、<code class="param">')
out=note/'drafts/ja/14-api-xxh3-family.stream128-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':5,'wholePageCompleted':False})
