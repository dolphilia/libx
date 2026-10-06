from pathlib import Path
import re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/16-api-xxh64-family.complete-unreviewed.md');s=p.read_text();k="The 64-bit seed to alter the hash's output predictably.";assert s.count(k)==1;s=s.replace(k,'ハッシュの出力を予測可能な形で変化させる64ビットのシード。')
changes=[(r'次の範囲のメモリ： (<code class="param">input</code>) と (<code class="param">input</code> \+ <code class="param">length</code>) 。この範囲は',r'\1から\2までの範囲のメモリは'),(r'(<code class="param">input</code>) の値は、次でも構いません： <span class="tt">NULL</span>。',r'\1は <span class="tt">NULL</span> でも構いません。'),(r'次の型の値を変換します： (<a\b[^>]*>XXH64_hash_t</a>) 。変換先はビッグエンディアンの次の型です： (<a\b[^>]*>XXH64_canonical_t</a>)。',r'\1を、ビッグエンディアンの\2に変換します。'),(r'次の型の値を変換します： (<a\b[^>]*>XXH64_canonical_t</a>) 。変換先はネイティブ形式の次の型です： (<a\b[^>]*>XXH64_hash_t</a>)。',r'\1を、ネイティブ形式の\2に変換します。')]
for pat,repl in changes:
 s,n=re.subn(pat,repl,s);assert n,pat
out=p.with_name('16-api-xxh64-family.reviewed-content.md');assert not out.exists();out.write_text(s)
print('修正済みseed説明：ハッシュの出力を予測可能な形で変化させる64ビットのシード。')
for pat in ['前提条件','変換します。']:
 for line in s.split('&#10;'):
  if pat in line and('inputから'in re.sub('<[^>]*>','',line)or'ビッグエンディアン'in line or'ネイティブ形式'in line):print(re.sub('<[^>]*>','',line))
