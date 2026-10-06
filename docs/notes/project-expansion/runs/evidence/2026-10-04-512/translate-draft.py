from pathlib import Path
import re,json,hashlib,ast
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();t=s.index('XXH3_128bits()</h2>');a=s.rfind('<a id=',0,t);t=s.index('XXH3_128bits_reset()</h2>',a);b=s.rfind('<a id=',a,t);part=s[a:b]
tree=ast.parse(Path('/private/tmp/libx-xxh3-oneshot-509.py').read_text());m=ast.literal_eval(next(n.value for n in tree.body if isinstance(n,ast.Assign) and any(isinstance(x,ast.Name)and x.id=='m'for x in n.targets)))
add={
'Calculates 128-bit unseeded variant of XXH3 of':'XXH3のシードなし128ビット版で、次の入力のハッシュを計算します：',
'Calculates 128-bit seeded variant of XXH3 hash of':'XXH3のシード付き128ビット版で、次の入力のハッシュを計算します：',
'Calculates 128-bit variant of XXH3 with a custom "secret".':'カスタム「シークレット」を使用して、XXH3の128ビット版を計算します。',
'The calculated 128-bit variant of XXH3 value.':'計算されたXXH3の128ビット版のハッシュ値。',
'The 128-bit variant of XXH3 has more strength, but it has a bit of overhead for shorter inputs.':'XXH3の128ビット版は強度が高い一方で、短い入力には多少のオーバーヘッドがあります。'}
m.update(add);parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(add)<=set(used),set(add)-set(used)
part=''.join(parts).replace('<code class="param">secretSize</code> <em>必ず</em>', '<code class="param">secretSize</code>は <em>必ず</em>')
out=note/'drafts/ja/14-api-xxh3-family.oneshot128-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':3,'wholePageCompleted':False})
