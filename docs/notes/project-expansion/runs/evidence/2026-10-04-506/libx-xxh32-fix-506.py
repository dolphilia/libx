from pathlib import Path
import re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/12-api-xxh32-family.details-unreviewed.md');s=p.read_text()
def td(m):
 inner=m[1];parts=re.split(r'(<[^>]*>)',inner);ix=[i for i in range(0,len(parts),2)if parts[i].strip()];first=parts[ix[0]].strip() if ix else ''
 if first=='A pointer to an':
  for i in ix:parts[i]=parts[i].replace('A pointer to an','').replace('allocated with','へのポインター。割り当てには')
  parts[ix[-1]]=parts[ix[-1]].replace('.','を使います。')
 elif first=='The' and 'pointer to be stored to.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','');parts[ix[-1]]=parts[ix[-1]].replace('pointer to be stored to.','の保存先ポインター。')
 elif first=='The' and 'to be converted.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','変換する');parts[ix[-1]]=parts[ix[-1]].replace('to be converted.','。')
 elif first=='The' and 'to convert.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','変換する');parts[ix[-1]]=parts[ix[-1]].replace('to convert.','。')
 return '<td>'+''.join(parts)+'</td>'
s=re.sub(r'<td>([\s\S]*?)</td>',td,s)
s=s.replace('正規表現の例','正規形式の例')
s=s.replace('<span class="tt">0</span>, <code class="param">input</code> の場合、次の値でもかまいません： <span class="tt">NULL</span>。C++では、','<span class="tt">0</span>なら、<code class="param">input</code>は<span class="tt">NULL</span>でもかまいません。C++では、')
# Nullable input is an exception; state pointers and canonical buffers remain non-null.
def nulls(m):
 inner=m[1]
 if 'は次の値であってはなりません：' in inner:
  inner=inner.replace('は次の値であってはなりません：','は')
  if 'であってはならず、領域が重なっていてもいけません。' not in inner:
   inner=inner.replace('<span class="tt">NULL</span>.','<span class="tt">NULL</span>であってはなりません。')
 return '<dd>'+inner+'</dd>'
s=re.sub(r'<dd>([\s\S]*?)</dd>',nulls,s)
assert 'の場合、次の値でもかまいません' not in s
p.write_text(s)
# Restore closing tags accidentally changed when a dd contained a parameter table.
e=Path('/private/tmp/libx-xxhash-import-20261003/apps/xxhash/src/content/docs/v0-8-4/en/02-api/12-group___x_x_h32__family.md').read_text();j=p.read_text();a=re.findall(r'<[^>]*>',e);b=re.findall(r'<[^>]*>',j);assert len(a)==len(b);fix={i:a[i] for i in range(len(a))if a[i]=='</td>' and b[i]=='</dd>'};assert len(fix) in (0,8);it=iter(enumerate(b));j=re.sub(r'<[^>]*>',lambda m:(lambda pair:fix.get(pair[0],pair[1]))(next(it)),j);p.write_text(j)
