from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();changes=[]
def fix(pat,repl):
 global s
 s,n=re.subn(pat,repl,s);assert n,pat;changes.append({'pattern':pat,'count':n})
a=r'(<a\b[^>]*>XXH3_state_t</a>)';c=r'(<code class="param">(?:input|data)</code>)'
fix(r'次の型の状態を： '+a+r' 別の状態にコピーします。',r'\1の状態を別の状態にコピーします。')
fix(r'次の状態をリセット(?:し|します)： '+a+r' 新しいハッシュの計算を開始します。',r'新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の状態をリセット(?:し|します)： '+a+r' 64ビットのシードを使用して新しいハッシュの計算を開始します。',r'64ビットのシードを使用して新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の状態をリセットします： '+a+r' 。シークレットデータを使用して、新しいハッシュの計算を開始します。',r'シークレットデータを使用して新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の状態構造体を割り当てます： '+a+r'。',r'\1を割り当てます。')
fix(r'次の状態構造体を解放します： '+a+r'。',r'\1を解放します。')
fix(r'次の入力のブロックを取り込み： '+c+r' 次の状態に反映します： '+a+r'。',r'\1のブロックを取り込み、\2に反映します。')
fix(r'XXH3の(シードなし|シード付き)(64|128)ビット版で、次の入力のハッシュを計算します： '+c+r'。',r'\3のXXH3ハッシュを\1\2ビット版で計算します。')
fix(r'次の状態から計算したXXH3の(64|128)ビットハッシュ値を返します： '+a+r'。',r'\2から計算したXXH3の\1ビットハッシュ値を返します。')
fix(r'次の型の2つの値が等しいかを調べます： (<a\b[^>]*>XXH128_hash_t</a>) 。',r'\1型の2つの値が等しいかを調べます。')
fix(r'次の型の2つの値を比較します： (<a\b[^>]*>XXH128_hash_t</a>)。',r'\1型の2つの値を比較します。')
fix(r'次の型の値を変換します： (<a\b[^>]*>XXH128_hash_t</a>) 。変換先はビッグエンディアンの次の型です： (<a\b[^>]*>XXH128_canonical_t</a>)。',r'\1を、ビッグエンディアンの\2に変換します。')
fix(r'次の型の値を変換します： (<a\b[^>]*>XXH128_canonical_t</a>) 。変換先はネイティブ形式の次の型です： (<a\b[^>]*>XXH128_hash_t</a>)。',r'\1を、ネイティブ形式の\2に変換します。')
fix(r'次の入力の128ビットハッシュを： '+c+r' XXH3を使用して計算します。',r'\1の128ビットハッシュをXXH3で計算します。')
fix(r'次の範囲のメモリ： ('+c+r' から '+c+r' \+ <code class="param">(?:length|len)</code>) 。この範囲は',r'\1の範囲のメモリは')
fix(r'(<code class="param">(?:input|data)</code>) の値は、次でも構いません： <span class="tt">NULL</span>。',r'\1は <span class="tt">NULL</span> でも構いません。')
fix(r'候補となる次のシークレットのランダムさに疑問がある場合は： <span class="tt">secret</span>代わりに、次の関数の利用を検討してください：',r'候補となる <span class="tt">secret</span> のランダムさに疑問がある場合は、代わりに次の関数の利用を検討してください：')
fix(r'XXH3_SECRET_SIZE_MIN</a>\) <em>および</em>',r'XXH3_SECRET_SIZE_MIN</a>） <em>かつ</em>')
fix(r'C\+\+の次の型の： <span class="tt">std::string</span> ハッシュクラスの例：',r'C++の <span class="tt">std::string</span> 用ハッシュクラスの例：')
out=note/'drafts/ja/14-api-xxh3-family.reviewed-content.md';assert not out.exists();out.write_text(s);Path('/private/tmp/xxh3-fixes-520.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2));print({'draft':str(out),'patterns':len(changes),'changedOccurrences':sum(x['count']for x in changes)})
