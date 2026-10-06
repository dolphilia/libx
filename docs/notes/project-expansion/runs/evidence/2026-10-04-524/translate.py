from pathlib import Path
import json,re
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');note=root/'docs/notes/document-import/xxhash/v0-8-4';s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/18-group__dispatch.md').read_text();body,foot=s.split('## Source and notices')
m={'&#10;Macros':'&#10;マクロ','Detailed Description':'詳細説明','Macro Definition Documentation':'マクロ定義の説明','Enables/dispatching the scalar code path.':'スカラーコードパスへのディスパッチを有効にします。','Enables/disables dispatching for AVX2.':'AVX2へのディスパッチを有効または無効にします。','Enables/disables dispatching for AVX512.':'AVX512へのディスパッチを有効または無効にします。','Allows a function to be compiled with SSE2 intrinsics.':'SSE2組み込み関数を使用して関数をコンパイルできるようにします。','Like':'次のマクロと同様ですが：',', but for AVX2.':'AVX2向けです。',', but for AVX512.':'AVX512向けです。',
'If this is defined to 0, SSE2 support is assumed. This reduces code size when the scalar path is not needed.':'これを0と定義した場合、SSE2対応が前提となります。スカラーパスが不要なときに、コードサイズを削減できます。','This is automatically defined to 0 when...':'次の条件では、自動的に0と定義されます：','SSE2 support is enabled in the compiler':'コンパイラーでSSE2対応が有効になっている','Targeting x86_64':'x86_64をターゲットにしている','Targeting Android x86':'Android x86をターゲットにしている','Targeting macOS':'macOSをターゲットにしている','This is automatically detected if it is not defined.':'定義されていない場合は、自動的に検出されます。',
'GCC 4.7 and later are known to support AVX2, but &gt;4.9 is required for to get the AVX2 intrinsics and typedefs without -mavx -mavx2.':'GCC 4.7以降がAVX2に対応することは知られていますが、-mavx -mavx2を指定せずにAVX2の組み込み関数と型定義を利用するには、4.9より新しい版が必要です。','Visual Studio 2013 Update 2 and later are known to support AVX2.':'Visual Studio 2013 Update 2以降がAVX2に対応することは知られています。','The GCC/Clang internal header':'GCC/Clangの内部ヘッダーである',
'is detected. While this is not allowed to be included directly, it still appears in the builtin include path and is detectable with':'が検出されます。これを直接インクルードすることは認められていませんが、組み込みのインクルードパスには存在するため、次の機能で検出できます：','See also':'関連項目','Automatically detected if one of the following conditions is met:':'次の条件のいずれかを満たす場合、自動的に検出されます：','GCC 4.9 and later are known to support AVX512.':'GCC 4.9以降がAVX512に対応することは知られています。','Visual Studio 2017 and later are known to support AVX2.':'Visual Studio 2017以降がAVX2に対応することは知られています。',
'Uses':'GCCでは、次の属性を使用して：','on GCC to allow SSE2 to be used even with':'次のオプションを指定した場合でもSSE2を使用できるようにします：','.':'。'}
parts=re.split(r'(<[^>]*>)',body);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
body=''.join(parts).replace('title: "x86 Dispatcher "','title: "x86ディスパッチャー"')
notes='''## 固定した原文への補足

XXH_DISPATCH_AVX512のVisual Studio 2017に関する説明は、原文どおり「AVX2」と訳しています。固定したxxh_x86dispatch.cの125–140行では、このコメントに続く条件が、`_MSC_VER >= 1910`をXXH_DISPATCH_AVX512を1と定義する条件の一つとして使用しています。コメントの記述と、AVX512へのディスパッチを有効にする固定コードの条件を区別してください。この確認は静的なコード照合であり、各コンパイラーでの実行試験ではありません。

マクロ値中の`disable attribute target`というコメントは「target属性を無効にする」という意味です。コメントを含む定義値は原文どおり保持しています。

'''
start=body.index('<div');body=body[:start]+notes+body[start:]
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];footer=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1];out=note/'drafts/ja/18-api-dispatch.reviewed-content.md';assert not out.exists();out.write_text((body+'## 出典と通知'+footer).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-dispatch-labels-524.json').write_text(json.dumps({'labels':{},'titles':{}}));print(out)
