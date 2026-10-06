from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();t=s.index('XXH3_generateSecret()</h2>');a=s.rfind('<a id=',0,t);b=s.index('## 出典と通知',a);part=s[a:b];fragments=[]
def protect(m):
 fragments.append(m[0]);return f'FRAGMENT_PROTECTED_{len(fragments)-1}'
part=re.sub(r'<div class="fragment">[\s\S]*?<!-- fragment -->',protect,part);assert len(fragments)==2
m={
'Derive a high-entropy secret from any user-defined content, named customSeed.':'customSeedという任意のユーザー定義コンテンツから、高エントロピーのシークレットを導出します。','Parameters':'引数','A writable buffer for derived high-entropy secret data.':'導出した高エントロピーのシークレットデータを格納する、書き込み可能なバッファー。','Size of secretBuffer, in bytes. Must be &gt;= XXH3_SECRET_SIZE_MIN.':'secretBufferのサイズ（バイト単位）。XXH3_SECRET_SIZE_MIN以上でなければなりません。','A user-defined content.':'ユーザー定義のコンテンツ。','Size of customSeed, in bytes.':'customSeedのサイズ（バイト単位）。','Returns':'戻り値','on success.':'（成功した場合）。','on failure.':'（失敗した場合）。',
'The generated secret can be used in combination with':'生成したシークレットは、次の関数と組み合わせて使用できます：','functions. The':'。次の版は：',
'variants are useful to provide a higher level of protection than 64-bit seed, as it becomes much more difficult for an external actor to guess how to impact the calculation logic.':'64ビットのシードより高い水準の保護を提供するのに役立ちます。外部の者が、計算ロジックに影響を与える方法を推測することが、はるかに難しくなるためです。',
'The function accepts as input a custom seed of any length and any content, and derives from it a high-entropy secret of length':'この関数は、任意の長さ・任意の内容のカスタムシードを入力として受け取り、そこから、次の長さの高エントロピーのシークレットを導出します：',
'into an already allocated buffer':'。格納先は、割り当て済みの次のバッファーです：',
'The generated secret can then be used with any':'生成したシークレットは、次の任意の版で使用できます：','variant. The functions':'。次の関数が：',
'and':'および','are part of this list. They all accept a':'この一覧に含まれます。いずれも、次の引数を受け取ります：',
'parameter which must be large enough for implementation reasons (&gt;=':'。この引数は、実装上の理由から十分に大きく（&gt;=',
'feature very high entropy (consist of random-looking bytes). These conditions can be a high bar to meet, so':'非常に高いエントロピーを持つ必要があります（ランダムに見えるバイトで構成されること）。これらの条件を満たすのは難しい場合があるため、次の関数を：',
'can be employed to ensure proper quality.':'適切な品質を確保するために使用できます。',
'can be anything. It can have any size, even small ones, and its content can be anything, even "poor entropy" sources such as a bunch of zeroes. The resulting':'には何でも使用できます。サイズは任意で、小さくても構いません。内容も任意で、ゼロの集まりのような「低エントロピー」の入力源でも構いません。それでも、生成された次のシークレットは：',
'will nonetheless provide all required qualities.':'必要とされる品質をすべて備えます。','Precondition':'前提条件','must be &gt;=':'は次の値以上でなければなりません（&gt;=）：','When':'次の条件の場合：',
'&gt; 0, supplying NULL as customSeed is undefined behavior.':'&gt; 0。このとき、customSeedとしてNULLを渡すと未定義動作になります。','Example code:':'コード例：',
'Generate the same secret as the _withSeed() variants.':'_withSeed()版と同じシークレットを生成します。','A writable buffer of':'次のサイズの書き込み可能なバッファー：','bytes':'バイト','The 64-bit seed to alter the hash result predictably.':'ハッシュ結果を予測可能な形で変化させる64ビットのシード。','variants.':'の版。','Example C++':'C++の次の型の：','hash class:':'ハッシュクラスの例：','.':'。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
part=''.join(parts)
for i,x in enumerate(fragments):part=part.replace(f'FRAGMENT_PROTECTED_{i}',x)
out=note/'drafts/ja/14-api-xxh3-family.secret-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':2,'codeFragmentsPreserved':len(fragments),'wholePageCompleted':False})
