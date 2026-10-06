from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();t=s.index('XXH3_64bits_reset_withSecret()</h2>');a=s.rfind('<a id=',0,t);t=s.index('XXH3_128bits()</h2>',a);b=s.rfind('<a id=',a,t);part=s[a:b]
m={
'Resets an':'次の状態をリセットします：','with secret data to begin a new hash.':'。シークレットデータを使用して、新しいハッシュの計算を開始します。','Parameters':'引数','The state struct to reset.':'リセットする状態構造体。','The secret data.':'シークレットのデータ。','The length of':'次のデータの長さ：',', in bytes.':'（バイト単位）。','Precondition':'前提条件','must not be':'は','Returns':'戻り値','on success.':'（成功した場合）。','on failure.':'（失敗した場合）。','Note':'注記',
'is referenced, it':'は参照されるため、','must outlive':'次の期間を超えて有効でなければなりません：','the hash streaming session.':'ハッシュのストリーミングセッション。',
'Similar to one-shot API,':'一括APIと同様に、','must be &gt;=':'は次の値以上でなければなりません（&gt;=）：',
", and the quality of produced hash values depends on secret's entropy (secret's content should look like a bunch of random bytes). When in doubt about the randomness of a candidate":'。また、生成されるハッシュ値の品質は、シークレットのエントロピーに依存します（シークレットの内容は、ランダムなバイトの集まりのように見える必要があります）。候補となる次のシークレットのランダムさに疑問がある場合は：',
', consider employing':'代わりに、次の関数の利用を検討してください：','instead (see below).':'（後述）。','See also':'関連項目',
'Consumes a block of':'次の入力のブロックを取り込み：','to an':'次の状態に反映します：','The state struct to update.':'更新する状態構造体。','The block of data to be hashed, at least':'ハッシュを計算するデータブロック。サイズは少なくとも','bytes in size.':'バイト必要です。',
'&#10;The memory between':'&#10;次の範囲のメモリ：','and':'から','must be valid, readable, contiguous memory. However, if':'。この範囲は有効で、読み取り可能な連続したメモリでなければなりません。ただし、','is':'が','may be':'の値は、次でも構いません：','. In C++, this also must be':'。C++では、これはさらに次の要件を満たす必要があります：',
'Call this to incrementally consume blocks of data.':'データブロックを逐次取り込むには、この関数を呼び出してください。',
'Returns the calculated XXH3 64-bit hash value from an':'次の状態から計算したXXH3の64ビットハッシュ値を返します：','The state struct to calculate the hash from.':'ハッシュの計算元となる状態構造体。','The calculated XXH3 64-bit hash value from that state.':'その状態から計算されたXXH3の64ビットハッシュ値。','Calling':'次の関数を呼び出しても：','will not affect':'次の状態には影響しません：',', so you can update, digest, and update again.':'。そのため、更新、ダイジェストの取得、再度の更新という操作ができます。','.':'。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
part=''.join(parts).replace('<code class="param">statePtr</code> は <span class="tt">NULL</span>。','<code class="param">statePtr</code> は <span class="tt">NULL</span> であってはなりません。').replace('が <span class="tt">0</span>, <code class="param">','が <span class="tt">0</span> の場合、<code class="param">')
out=note/'drafts/ja/14-api-xxh3-family.stream64-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':3,'wholePageCompleted':False})
