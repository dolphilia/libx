from pathlib import Path
import json,re,hashlib
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';w=Path('/private/tmp/libx-xxhash-import-20261003');mp=json.loads((note/'CONTENT_MAP.json').read_text());it=next(x for x in mp['items']if x['slug']=='02-api/14-group___x_x_h3__family');en=w/it['canonical'];s=en.read_text();body,foot=s.split('## Source and notices');a=body.index('Detailed Description');b=body.index('Typedef Documentation',a);part=body[a:b]
m={
'Detailed Description':'詳細説明','Macro Definition Documentation':'マクロ定義の説明','See also':'関連項目',
'XXH3 is a more recent hash algorithm featuring:':'XXH3は、次の特徴を持つ、より新しいハッシュアルゴリズムです。',
'Improved speed for both small and large inputs':'小さい入力と大きい入力の両方で速度を改善',
'True 64-bit and 128-bit outputs':'実際の64ビットおよび128ビットの出力',
'SIMD acceleration':'SIMDによる高速化','Improved 32-bit viability':'32ビット環境での実用性を改善',
'Speed analysis methodology is explained here:':'速度分析の手法は次のページで説明されています。',
'Compared to XXH64, expect XXH3 to run approximately ~2x faster on large inputs and &gt;3x faster on small ones, exact differences vary depending on platform.':'XXH64と比較すると、XXH3は大きい入力では約2倍、小さい入力では3倍を超える速度が期待されます。実際の差はプラットフォームによって異なります。',
"XXH3's speed benefits greatly from SIMD and 64-bit arithmetic, but does not require it. Most 32-bit and 64-bit targets that can run XXH32 smoothly can run XXH3 at competitive speeds, even without vector support. Further details are explained in the implementation.":'XXH3の速度はSIMDと64ビット演算から大きな恩恵を受けますが、これらは必須ではありません。XXH32を円滑に実行できる32ビット・64ビットターゲットの大半では、ベクトル対応がなくてもXXH3を競争力のある速度で実行できます。詳しくは実装の説明を参照してください。',
'XXH3 has a fast scalar implementation, but it also includes accelerated SIMD implementations for many common platforms:':'XXH3には高速なスカラー実装があり、多くの一般的なプラットフォーム向けの高速なSIMD実装も含まれています。',
's390x ZVector This can be controlled via the':'s390x ZVector。これは次のマクロで制御できます：',
'macro, but it automatically selects the best version according to predefined macros. For the x86 family, an automatic runtime dispatcher is included separately in':'。ただし、事前定義されたマクロに基づいて最適な版を自動で選びます。x86ファミリー向けには、自動的な実行時ディスパッチャーが次のファイルに別途含まれています：',
'XXH3 implementation is portable: it has a generic C90 formulation that can be compiled on any platform, all implementations generate exactly the same hash value on all platforms. Starting from v0.8.0, it\'s also labelled "stable", meaning that any future version will also generate the same hash value.':'XXH3の実装には移植性があります。任意のプラットフォームでコンパイルできる汎用のC90実装があり、すべての実装が、すべてのプラットフォームでまったく同じハッシュ値を生成します。v0.8.0からは「安定」とも位置づけられています。これは、将来のどの版も同じハッシュ値を生成することを意味します。',
'XXH3 offers 2 variants, _64bits and _128bits.':'XXH3には、_64bitsと_128bitsという2つの版があります。',
"When only 64 bits are needed, prefer invoking the _64bits variant, as it reduces the amount of mixing, resulting in faster speed on small inputs. It's also generally simpler to manipulate a scalar return type than a struct.":'64ビットだけが必要な場合は、_64bits版の呼び出しを優先してください。混合の量が減り、小さい入力で高速になるためです。また、一般に、構造体よりもスカラーの戻り値型の方が扱いが簡単です。',
'The API supports one-shot hashing, streaming mode, and custom secrets.':'APIは、一括ハッシュ処理、ストリーミングモード、カスタムシークレットに対応しています。',
'SSE2 for Pentium 4, Opteron, all x86_64.':'Pentium 4、Opteron、すべてのx86_64向けのSSE2。',
'AVX2 for Haswell and Bulldozer':'HaswellとBulldozer向けのAVX2',
'AVX512 for Skylake and Icelake':'SkylakeとIcelake向けのAVX512',
'NEON for most ARMv7-A, all AArch64, and WASM SIMD128':'大半のARMv7-A、すべてのAArch64、およびWASM SIMD128向けのNEON',
'VSX and ZVector for POWER8/z13 (64-bit)':'POWER8/z13（64ビット）向けのVSXとZVector',
'SVE for some ARMv8-A and ARMv9-A':'一部のARMv8-AとARMv9-A向けのSVE',
'LSX (128-bit SIMD) for LoongArch64':'LoongArch64向けのLSX（128ビットSIMD）',
'LASX (256-bit SIMD) for LoongArch64':'LoongArch64向けのLASX（256ビットSIMD）',
'RVV (RISC-V Vector) for RISC-V':'RISC-V向けのRVV（RISC-V Vector）',
'The bare minimum size for a custom secret.':'カスタムシークレットの絶対的な最小サイズ。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(used)==set(m),(set(m)-set(used))
body=body[:a]+''.join(parts)+body[b:];body=body.replace('title: "XXH3 family Public API"','title: "XXH3ファミリーの公開API"')
expected=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];assert foot==expected
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1];out=note/'drafts/ja/14-api-xxh3-family.overview-unreviewed.md';assert not out.exists();out.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'));print({'draft':str(out),'translatedNodes':len(used),'wholePageCompleted':False})
