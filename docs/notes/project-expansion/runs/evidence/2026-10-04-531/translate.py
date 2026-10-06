from pathlib import Path
import re,json
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4'
s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/27-struct_x_x_h3__state__s.md').read_text();body,foot=s.split('## Source and notices')
body=body.replace('XXH3_state_s Struct Reference','XXH3_state_s構造体').replace('## Editorial notes on fixed upstream text','## 固定した原文に関する編集注記').replace('The original generated body below is retained. These notes identify discrepancies found by comparing the fixed 0.8.4 header, its implementation, and the scoped specification. They are editorial additions, not upstream corrections.','以下は生成された原文本文を保持しています。これらの注記は、固定した0.8.4のヘッダー、実装、および対象範囲の仕様を比較して見つかった不一致を示す編集上の追加です。上流の修正ではありません。').replace('Some state comments refer to XXH32_state_s::mem32 and ::memsize. The fixed XXH32 state fields are buffer and bufferedSize. These old reference names are preserved rather than treated as valid field links.','一部の状態コメントはXXH32_state_s::mem32と::memsizeを参照しています。固定したXXH32の状態フィールドはbufferとbufferedSizeです。これらの古い参照名は保持し、有効なフィールドリンクとして扱いません。').replace('[Fixed upstream header]','[固定した上流ヘッダー]')
m={'&#10;Data Fields':'&#10;データフィールド','Field Documentation':'フィールドの説明','The 8 accumulators. See':'8つのアキュムレーター。参照：','and':'と','Used to store a custom secret generated from a seed.':'seedから生成したカスタムsecretを格納するために使います。','The internal buffer.':'内部バッファー。','See also':'関連項目','The amount of memory in':'メモリー量の対象：','Reserved field. Needed for padding on 64-bit.':'予約フィールド。64ビットでのパディングに必要です。','Number or stripes processed.':'処理済みのストライプ数。','Total length hashed. 64-bit even on 32-bit targets.':'ハッシュ化した全体の長さ。32ビットの対象でも64ビットです。','Number of stripes per block.':'ブロックあたりのストライプ数。','Size of':'サイズの対象：','or':'または','Seed for _withSeed variants. Must be zero otherwise,':'_withSeed版のseed。それ以外ではゼロでなければなりません。','Reserved field.':'予約フィールド。','Reference to an external secret for the _withSecret variants, NULL for other variants.':'_withSecret版の外部secretへの参照。それ以外の版ではNULLです。','The documentation for this struct was generated from the following file:':'この構造体の文書は、次のファイルから生成しました：'}
parts=re.split(r'(<[^>]*>)',body);used=set()
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
assert set(m)==used
body=''.join(parts)
titles={'Initializes a stack-allocated XXH3_state_s.':'スタックに割り当てたXXH3_state_sを初期化します。'}
for a,b in titles.items():assert 'title="'+a+'"'in body;body=body.replace('title="'+a+'"','title="'+b+'"')
body+='\n### 固定コードとの追加照合\n\n- `useSeed`：原文は予約フィールドと説明していますが、固定コードは短い入力のdigestでseed版とsecret版を選ぶためにこの値を読み取ります。内部resetでは`seed != 0`で設定し、`XXH3_64bits_reset_withSecretandSeed`ではseedがゼロでも1を設定します。\n- `secretLimit`：原文はsecretのサイズと説明していますが、固定コードの内部resetでは`secretSize - XXH_STRIPE_LEN`を設定します。`XXH_STRIPE_LEN`は64です。digest処理は必要な箇所でこの値に`XXH_STRIPE_LEN`を加えてsecretのサイズを得ます。\n\nこれらは固定ソースの静的照合による補足です。原文のフィールド説明を保持しています。\n\n'
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
p=n/'drafts/ja/27-api-3-state.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'))
Path('/private/tmp/libx-struct3-labels-531.json').write_text(json.dumps({'labels':{},'titles':titles}))
