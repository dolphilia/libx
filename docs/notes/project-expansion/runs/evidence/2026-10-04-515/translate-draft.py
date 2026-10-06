from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();t=s.index('XXH128_isEqual()</h2>');a=s.rfind('<a id=',0,t);t=s.index('XXH3_64bits_reset_withSecretandSeed()</h2>',a);b=s.rfind('<a id=',a,t);part=s[a:b]
m={
'Check equality of two':'次の型の2つの値が等しいかを調べます：','values.':'。','Parameters':'引数','The 128-bit hash value.':'128ビットのハッシュ値。','Another 128-bit hash value.':'もう一方の128ビットのハッシュ値。','Returns':'戻り値','if':'（','and':'と','are equal.':'が等しい場合）。','if they are not.':'（等しくない場合）。',
'Compares two':'次の型の2つの値を比較します：','This comparator is compatible with stdlib\'s':'この比較関数は、標準ライブラリの次の関数と互換性があります：','Left-hand side value':'左辺の値','Right-hand side value':'右辺の値','&gt;0 if':'&gt;0（次の条件を満たす場合）：','&#10;=0 if':'&#10;=0（次の条件を満たす場合）：','&#10;&lt;0 if':'&#10;&lt;0（次の条件を満たす場合）：',
'Converts an':'次の型の値を変換します：','to a big endian':'。変換先はビッグエンディアンの次の型です：','to a native':'。変換先はネイティブ形式の次の型です：','The':'次の型：','pointer to be stored to.':'。保存先のポインター。','to be converted.':'。変換元のハッシュ。','to convert.':'。変換元の正規形式の値。','Precondition':'前提条件','must not be':'は','See also':'関連項目','The converted hash.':'変換されたハッシュ。','.':'。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
part=''.join(parts)
for x in ['dst','src']:part=part.replace(f'<code class="param">{x}</code> は <span class="tt">NULL</span>。', f'<code class="param">{x}</code> は <span class="tt">NULL</span> であってはなりません。')
out=note/'drafts/ja/14-api-xxh3-family.compare-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':4,'wholePageCompleted':False})
