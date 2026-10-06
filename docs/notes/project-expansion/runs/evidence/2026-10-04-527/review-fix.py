from pathlib import Path
import re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/21-api-tuning.reviewed-content.md');s=p.read_text()
s,n=re.subn(r'指定可能な値： (<a[^>]*>XXH_VECTOR</a>)\.',r'\1に指定できる値。',s);assert n==2
s,n=re.subn(r'ジャンプを使用するかどうかの対象： (<span class="tt">XXH32_finalize</span>)\.',r'\1でジャンプを使用するかどうかを決めます。',s);assert n==2
old='この方法が安全になる条件は、 <em>次のとおりです：</em> コンパイラーがこれをサポートしていることです。また、 <em>一般に</em> 同等以上の速度が得られます。比較対象： <span class="tt">memcpy</span>.'
new='この方法は、<em>コンパイラーが対応している場合</em>に安全です。また、<em>一般に</em> <span class="tt">memcpy</span>と同等以上の速度が得られます。'
assert s.count(old)==1;s=s.replace(old,new)
s,n=re.subn(r'(XXH_VECTOR</a>)\.\s*</p>',r'\1。</p>',s);assert n==2
p.write_text(s)
