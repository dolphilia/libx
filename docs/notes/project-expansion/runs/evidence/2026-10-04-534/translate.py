from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4';s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/31-xxh__x86dispatch_8c.md').read_text();body,foot=s.split('## Source and notices')
m={'&#10;Macros':'&#10;マクロ','Detailed Description':'詳細説明','Enables/dispatching the scalar code path.':'スカラーの処理経路を有効にしてディスパッチします。','Enables/disables dispatching for AVX2.':'AVX2用のディスパッチを有効または無効にします。','Enables/disables dispatching for AVX512.':'AVX512用のディスパッチを有効または無効にします。','Automatic dispatcher code for the':'自動ディスパッチャーの対象：','XXH3 family':'XXH3ファミリー','on x86-based targets.':'（x86ベースの対象向け）。','Optional add-on.':'任意で追加する機能です。','Compile this file with the default flags for your target.':'このファイルは、対象のデフォルトのフラグでコンパイルしてください。','Note that compiling with flags like':'コンパイル時のフラグが、',', or':'、または','will make the resulting binary incompatible with cpus not supporting the requested instruction set.':'などの場合、指定した命令セットに対応しないCPUとは、生成されたバイナリーの互換性がなくなることに注意してください。'}
parts=re.split(r'(<[^>]*>)',body);used=set()
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
assert used==set(m);body=''.join(parts).replace('xxh_x86dispatch.c File Reference','xxh_x86dispatch.cファイルの参照').replace('title="XXH3 family"','title="XXH3ファミリー"')
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
p=n/'drafts/ja/31-api-dispatch-file.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-dispatch-file-labels-534.json').write_text(json.dumps({'labels':{'XXH3 family':'XXH3ファミリー'},'titles':{'XXH3 family':'XXH3ファミリー'}}))
