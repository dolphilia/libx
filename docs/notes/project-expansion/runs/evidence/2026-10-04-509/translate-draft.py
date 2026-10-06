from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();a=s.index('Typedef Documentation');b=s.index('<a id="ga95592969a08becc37428dd547c36b8fd"',a);part=s[a:b]
m={
'Typedef Documentation':'型定義の説明','Function Documentation':'関数の説明',
'The opaque state struct for the XXH3 streaming API.':'XXH3ストリーミングAPIの不透明な状態構造体。','See also':'関連項目','for details.':'に詳細があります。',
'Calculates 64-bit unseeded variant of XXH3 hash of':'XXH3のシードなし64ビット版で、次の入力のハッシュを計算します：',
'Calculates 64-bit seeded variant of XXH3 hash of':'XXH3のシード付き64ビット版で、次の入力のハッシュを計算します：',
'Parameters':'引数','The block of data to be hashed, at least':'ハッシュを計算するデータブロック。サイズは少なくとも',
'bytes in size.':'バイト必要です。','The length of':'次のデータの長さ：',', in bytes.':'（バイト単位）。',
'Precondition':'前提条件','The memory between':'次の範囲のメモリ：','and':'から',
'must be valid, readable, contiguous memory. However, if':'。この範囲は有効で、読み取り可能な連続したメモリでなければなりません。ただし、',
'is':'が','may be':'の値は、次でも構いません：','. In C++, this also must be':'。C++では、これはさらに次の要件を満たす必要があります：',
'Returns':'戻り値','The calculated 64-bit XXH3 hash value.':'計算された64ビットのXXH3ハッシュ値。','Note':'注記',
'This is equivalent to':'この関数は、次の関数を呼び出して：','with a seed of':'シードとして',
', however it may have slightly better performance due to constant propagation of the defaults.':'を使用する場合と同等です。ただし、既定値の定数伝播によって、この関数の方がわずかに性能が高い場合があります。',
': other seeding variants':'：ほかのシード設定の版','for an example.':'に使用例があります。',
'The 64-bit seed to alter the hash result predictably.':'ハッシュ結果を予測可能な形で変化させる64ビットのシード。',
'seed == 0 produces the same results as':'seed == 0では、次の関数と同じ結果を生成します：',
'This variant generates a custom secret on the fly based on default secret altered using the':'この版は、次の値で既定のシークレットを変更し、それに基づくカスタムシークレットをその場で生成します：',
'value.':'。','While this operation is decently fast, note that it\'s not completely free.':'この操作は十分に高速ですが、コストがまったくないわけではない点に注意してください。',
'Calculates 64-bit variant of XXH3 with a custom "secret".':'カスタム「シークレット」を使用して、XXH3の64ビット版を計算します。','The secret data.':'シークレットのデータ。',
'It\'s possible to provide any blob of bytes as a "secret" to generate the hash. This makes it more difficult for an external actor to prepare an intentional collision. The main condition is that':'任意のバイト列を「シークレット」として渡してハッシュを生成できます。これにより、外部の者が意図的な衝突を用意することが難しくなります。主な条件として、',
'must':'必ず','be large enough (&gt;=':'十分な大きさでなければなりません（&gt;=',
'). However, the quality of the secret impacts the dispersion of the hash algorithm. Therefore, the secret':'）。ただし、シークレットの品質はハッシュアルゴリズムの分散に影響します。そのため、シークレットは',
'look like a bunch of random bytes. Avoid "trivial" or structured data such as repeated sequences or a text document. Whenever in doubt about the "randomness" of the blob of bytes, consider employing':'ランダムなバイトの集まりのように見える必要があります。繰り返しの列やテキスト文書など、「単純な」データや構造化されたデータは避けてください。バイト列の「ランダムさ」に疑問がある場合は、代わりに次の関数の利用を検討してください：',
'instead (see below). It will generate a proper high entropy secret derived from the blob of bytes. Another advantage of using':'（後述）。これは、バイト列から適切な高エントロピーのシークレットを生成します。また、次の関数を使用する利点は：',
'is that it guarantees that all bits within the initial blob of bytes will impact every bit of the output. This is not necessarily the case when using the blob of bytes directly because, when hashing':'元のバイト列のすべてのビットが、出力のすべてのビットに影響することを保証する点です。バイト列を直接使用する場合は、必ずしもそうなるとは限りません。',
'small':'小さい','inputs, only a portion of the secret is employed.':'入力のハッシュを計算するときは、シークレットの一部分しか使用されないためです。',
'.':'。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
# The zero-length exception is a compound clause; keep the same inline-code order and tags.
part=''.join(parts)
part=part.replace('<code class="param">secretSize</code> <em>必ず</em>', '<code class="param">secretSize</code>は <em>必ず</em>')
part=part.replace('が <span class="tt">0</span>, <code class="param">','が <span class="tt">0</span> の場合、<code class="param">')
out=note/'drafts/ja/14-api-xxh3-family.oneshot-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'mappingKeys':len(m),'wholePageCompleted':False})
