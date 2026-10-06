from pathlib import Path
import re,json
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/32-api-header.complete-unreviewed.md');s=p.read_text();counts=[]
def fix(a,b):
 global s
 s,k=re.subn(a,b,s);assert k,a;counts.append({'pattern':a,'occurrences':k})
s=s.replace('Calculates 128-bit variant of XXH3 with a custom "secret".','カスタム「シークレット」を使用して、XXH3の128ビット版を計算します。').replace('Returns the calculated XXH3 128-bit hash value from an','次の状態から計算したXXH3の128ビットハッシュ値を返します：')
for token in ['inline','static']:fix('<span class="tt">'+token+'</span>。','<span class="tt">'+token+'</span>として指定します。')
a=r'(<a\b[^>]*>XXH(?:32|64|3)_state_t</a>)';c=r'(<code class="param">(?:input|data)</code>)'
fix(r'次の状態構造体を割り当てます： '+a+r'。',r'\1を割り当てます。')
fix(r'次の状態構造体を解放します： '+a+r'。',r'\1を解放します。')
fix(r'次の型の状態を： '+a+r' 別の状態にコピーします。',r'\1の状態を別の状態にコピーします。')
fix(r'次の状態をリセットします： '+a+r' 新しいハッシュの計算を開始します。',r'新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の状態をリセットします： '+a+r' 64ビットのシードを使用して新しいハッシュの計算を開始します。',r'64ビットのシードを使って新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の状態をリセットします： '+a+r'\s*。シークレットデータを使用して、新しいハッシュの計算を開始します。',r'シークレットデータを使って新しいハッシュの計算を開始するため、\1をリセットします。')
fix(r'次の入力のブロックを取り込み： '+c+r' 次の状態に反映します： '+a+r'。',r'\1のブロックを取り込み、\2に反映します。')
fix(r'次の状態から計算した(XXH3の(?:64|128)ビット)?ハッシュ値を返します： '+a+r'。',r'\2から計算した\1ハッシュ値を返します。')
fix(r'次の入力の(32|64)ビットハッシュを： '+c+r' (xxHash32|xxHash64)で計算します。',r'\2の\1ビットハッシュを\3で計算します。')
fix(r'次の(?:入力|データ)のXXH3ハッシュを(シード(?:なし|付き)(?:64/128|64|128)ビット版)で計算します： '+c+r'。',r'\2のXXH3ハッシュを\1で計算します。')
fix(r'次のデータの128ビットハッシュを： '+c+r' XXH3で計算します。',r'\1の128ビットハッシュをXXH3で計算します。')
q=r'(<a\b[^>]*>XXH(?:32|64|128)_(?:hash|canonical)_t</a>)'
fix(r'次の型の値を変換します： '+q+r' 。変換先は(ビッグエンディアン|ネイティブ形式)の次の型です： '+q+r'\s*。',r'\1を\2の\3へ変換します。')
fix(r'次の型の2つの値が等しいかを調べます： '+q+r'\s*。',r'2つの\1の値が等しいかを調べます。')
fix(r'次の型の2つの値を比較します： '+q+r'\s*。',r'2つの\1の値を比較します。')
fix(r'正規（ビッグエンディアン）表現の対象： '+q+r'\s*。',r'\1の正規（ビッグエンディアン）表現。')
fix(r'スタックに割り当てた次の構造体を初期化します： (<span class="tt"><a[^>]*>XXH3_state_s</a></span>)。',r'スタックに割り当てた\1を初期化します。')
fix(r'次の構造体を (<a[^>]*>XXH3_state_t</a>) 単にスタックに置く場合',r'\1を単にスタックに置く場合')
fix(r'指定可能な値を持つマクロ： (<a[^>]*>XXH_VECTOR</a>)。',r'\1に指定できる値。')
fix(r'ジャンプを使うかどうかを制御する対象： (<span class="tt">XXH32_finalize</span>)。',r'\1でジャンプを使うかどうかを制御します。')
fix(r'次の設定と同様ですが： (<a[^>]*>XXH_TARGET_SSE2</a>)\s*(AVX512|AVX2)向けです。',r'\1と同様ですが、\2向けです。')
# Preserve the initial draft; write a reviewed version only after the fixes are inspected.
o=p.with_name('32-api-header.reviewed-content.md');assert not o.exists();o.write_text(s);Path('/private/tmp/libx-header-review-fixes-535.json').write_text(json.dumps(counts,ensure_ascii=False,indent=2));print('fixed',sum(x['occurrences']for x in counts))
