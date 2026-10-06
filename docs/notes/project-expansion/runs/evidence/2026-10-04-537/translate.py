from pathlib import Path
import re,json,hashlib
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4';s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/33-xxhash_8h_source.md').read_text();assert hashlib.sha256(s.encode()).hexdigest()=='7a39248ba0c74ff9c8198cfa6269ff07796ebc1f61ee3cfa5c5c16516d0b10e5';body,foot=s.split('## Source and notices')
m={'Definition':'定義','The return value from 128-bit hashes.':'128ビットハッシュの戻り値。','Exit code for the streaming API.':'ストリーミングAPIの終了コード。','Generate the same secret as the _withSeed() variants.':'_withSeed()版と同じシークレットを生成します。','Derive a high-entropy secret from any user-defined content, named customSeed.':'customSeedという名前の任意のユーザー定義コンテンツから、高エントロピーのシークレットを導出します。','Check equality of two XXH128_hash_t values.':'2つのXXH128_hash_tの値が等しいかを調べます。','Compares two XXH128_hash_t.':'2つのXXH128_hash_tの値を比較します。','Calculates the 128-bit hash of data using XXH3.':'データの128ビットハッシュをXXH3で計算します。','Allows a function to be compiled with SSE2 intrinsics.':'関数をSSE2組み込み関数でコンパイルできるようにします。','Like XXH_TARGET_SSE2, but for AVX512.':'XXH_TARGET_SSE2と同様ですが、AVX512向けです。','Like XXH_TARGET_SSE2, but for AVX2.':'XXH_TARGET_SSE2と同様ですが、AVX2向けです。','Marks a global symbol.':'グローバルシンボルを指定します。','Obtains the xxHash version.':'xxHashのバージョンを取得します。','Version number, encoded as two digits each.':'各要素を2桁で符号化したバージョン番号。',"Selects the minimum alignment for XXH3's accumulators.":'XXH3のアキュムレーターの最小アライメントを選択します。','Whether the target is little endian.':'対象がリトルエンディアンかどうかを示します。','Controls the NEON to scalar ratio for XXH3.':'XXH3でのNEONとスカラーの比率を制御します。','Whether to use a jump for XXH32_finalize.':'XXH32_finalizeでジャンプを使うかどうかを制御します。','If defined to non-zero, adds a special path for aligned inputs (XXH32() and XXH64() only).':'0以外に定義すると、アライメントされた入力用の特別な処理経路を追加します（XXH32()とXXH64()のみ）。','Maximum size of "short" key in bytes.':'「短い」キーの最大サイズ（バイト単位）。',"Default Secret's size.":'既定のシークレットのサイズ。','Initializes a stack-allocated XXH3_state_s.':'スタックに割り当てたXXH3_state_sを初期化します。'}
for bits in ['32','64']:
 m[f'An unsigned {bits}-bit integer.']=f'符号なし{bits}ビット整数。'
 m[f'Calculates the {bits}-bit hash of input using xxHash{bits}.']=f'xxHash{bits}を使って入力の{bits}ビットハッシュを計算します。'
 m[f'Returns the calculated hash value from an XXH{bits}_state_t.']=f'XXH{bits}_state_tから計算したハッシュ値を返します。'
 m[f'Canonical (big endian) representation of XXH{bits}_hash_t.']=f'XXH{bits}_hash_tの正規（ビッグエンディアン）表現。'
for fam in ['32','64','3']:
 m[f'The opaque state struct for the XXH{fam} streaming API.']=f'XXH{fam}ストリーミングAPI用の不透明な状態構造体。'
 for verb in ['Allocates','Allocate']:m[f'{verb} an XXH{fam}_state_t.']=f'XXH{fam}_state_tを割り当てます。'
 m[f'Frees an XXH{fam}_state_t.']=f'XXH{fam}_state_tを解放します。'
 m[f'Copies one XXH{fam}_state_t to another.']=f'XXH{fam}_state_tの状態を別の状態にコピーします。'
 m[f'Resets an XXH{fam}_state_t to begin a new hash.']=f'新しいハッシュを開始するためにXXH{fam}_state_tをリセットします。'
 m[f'Consumes a block of input to an XXH{fam}_state_t.']=f'入力ブロックをXXH{fam}_state_tに取り込みます。'
for bits in ['32','64','128']:
 m[f'Converts an XXH{bits}_hash_t to a big endian XXH{bits}_canonical_t.']=f'XXH{bits}_hash_tをビッグエンディアンのXXH{bits}_canonical_tへ変換します。'
 m[f'Converts an XXH{bits}_canonical_t to a native XXH{bits}_hash_t.']=f'XXH{bits}_canonical_tをネイティブ形式のXXH{bits}_hash_tへ変換します。'
for bits in ['64','128']:
 m[f'Returns the calculated XXH3 {bits}-bit hash value from an XXH3_state_t.']=f'XXH3_state_tから、計算済みのXXH3の{bits}ビットハッシュ値を返します。'
 m[f'Calculates {bits}-bit variant of XXH3 with a custom "secret".']=f'カスタム「シークレット」でXXH3の{bits}ビット版を計算します。'
 word='input'if bits=='64'else'data'
 for kind,j in [('unseeded','なし'),('seeded','付き')]:m[f'Calculates {bits}-bit {kind} variant of XXH3 hash of {word}.']=f'{word}のXXH3ハッシュをシード{j}{bits}ビット版で計算します。'
m['Calculates 128-bit unseeded variant of XXH3 of data.']='dataのXXH3ハッシュをシードなし128ビット版で計算します。';m['Calculates 64/128-bit seeded variant of XXH3 hash of data.']='dataのXXH3ハッシュをシード付き64/128ビット版で計算します。'
m['Resets an XXH3_state_t with secret data to begin a new hash.']='シークレットデータを使って新しいハッシュを開始するため、XXH3_state_tをリセットします。';m['Resets an XXH3_state_t with 64-bit seed to begin a new hash.']='64ビットのシードを使って新しいハッシュを開始するため、XXH3_state_tをリセットします。'
a=body.index('<div class="ttc"');code=body[:a];ui=body[a:];docs=re.findall('<div class="ttdoc">([\\s\\S]*?)</div>',ui)
for d in docs:
 assert d in m or d=='',d
ui=re.sub('<div class="ttdoc">([\\s\\S]*?)</div>',lambda x:'<div class="ttdoc">'+m.get(x[1],x[1])+'</div>',ui).replace('<b>Definition</b>','<b>定義</b>');code=code.replace('Go to the documentation of this file.','このファイルの文書へ移動します。')
body=code+ui;body=body.replace('title: "xxhash.h"','title: "xxhash.h（原コード）"')
body=body.replace('---\n\n<div','---\n\n原コード参照：コードとコード内コメントは原文を保持しています。参照説明と案内は日本語です。\n\n<div',1)
enfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];many='[api-header](/docs/xxhash/v0-8-4/en/03-notices/api-header/) · [dispatch-c](/docs/xxhash/v0-8-4/en/03-notices/dispatch-c/) · [dispatch-h](/docs/xxhash/v0-8-4/en/03-notices/dispatch-h/)';assert foot==enfoot.replace(many,many.split(' · ')[0]);jf=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1];jf=jf.replace(many.replace('/en/','/ja/'),many.split(' · ')[0].replace('/en/','/ja/'))
p=n/'drafts/ja/33-api-source.reviewed-content.md';assert not p.exists();p.write_text((body+'## 出典と通知'+jf).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-source-labels-537.json').write_text(json.dumps({'labels':{'Go to the documentation of this file.':'このファイルの文書へ移動します。'},'titles':{}}));print('ttdoc count',len(docs))
