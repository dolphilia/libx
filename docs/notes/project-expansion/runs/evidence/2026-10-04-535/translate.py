from pathlib import Path
import re,json,ast
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4'
s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/32-xxhash_8h.md').read_text();body,foot=s.split('## Source and notices');start=body.index('<div');body=body[start:]
m={}
for fn in ['libx-public-526.py','libx-tuning-527.py','libx-xxh3-oneshot-509.py','libx-xxh3-state-510.py','libx-xxh3-stream-511.py','libx-xxh3-compare-515.py']:
 t=ast.parse(Path('/private/tmp/'+fn).read_text());node=next(x.value for x in t.body if isinstance(x,ast.Assign)and any(isinstance(z,ast.Name)and z.id=='m'for z in x.targets));m.update(ast.literal_eval(node))
m.update({
'Go to the source code of this file.':'このファイルのソースコードへ移動します。','&#10;Data Structures':'&#10;データ構造','&#10;Variables':'&#10;変数','Canonical (big endian) representation of':'正規（ビッグエンディアン）表現の対象：','The return value from 128-bit hashes.':'128ビットハッシュの戻り値。','More...':'詳細…',"Default Secret's size.":'既定のシークレットのサイズ。','Initializes a stack-allocated':'スタックに割り当てた次の構造体を初期化します：','Maximum size of "short" key in bytes.':'「短い」キーの最大サイズ（バイト単位）。','Possible values for':'指定可能な値を持つマクロ：','Whether to use a jump for':'ジャンプを使うかどうかを制御する対象：','Like':'次の設定と同様ですが：',', but for AVX512.':'AVX512向けです。',', but for AVX2.':'AVX2向けです。','Allows a function to be compiled with SSE2 intrinsics.':'関数をSSE2組み込み関数でコンパイルできるようにします。','The opaque state struct for the XXH32 streaming API.':'XXH32ストリーミングAPI用の不透明な状態構造体。','The opaque state struct for the XXH64 streaming API.':'XXH64ストリーミングAPI用の不透明な状態構造体。','The opaque state struct for the XXH3 streaming API.':'XXH3ストリーミングAPI用の不透明な状態構造体。','Calculates the 32-bit hash of':'次の入力の32ビットハッシュを：','using xxHash32.':'xxHash32で計算します。','Calculates the 64-bit hash of':'次の入力の64ビットハッシュを：','using xxHash64.':'xxHash64で計算します。','Allocates an':'次の状態構造体を割り当てます：','Allocate an':'次の状態構造体を割り当てます：','Returns the calculated hash value from an':'次の状態から計算したハッシュ値を返します：','Calculates 64-bit unseeded variant of XXH3 hash of':'次の入力のXXH3ハッシュをシードなし64ビット版で計算します：','Calculates 64-bit seeded variant of XXH3 hash of':'次の入力のXXH3ハッシュをシード付き64ビット版で計算します：','Calculates 128-bit unseeded variant of XXH3 of':'次のデータのXXH3ハッシュをシードなし128ビット版で計算します：','Calculates 128-bit seeded variant of XXH3 hash of':'次のデータのXXH3ハッシュをシード付き128ビット版で計算します：','Calculates 64/128-bit seeded variant of XXH3 hash of':'次のデータのXXH3ハッシュをシード付き64/128ビット版で計算します：','Calculates the 128-bit hash of':'次のデータの128ビットハッシュを：','using XXH3.':'XXH3で計算します。','Derive a high-entropy secret from any user-defined content, named customSeed.':'customSeedという名前の任意のユーザー定義コンテンツから、高エントロピーのシークレットを導出します。','Generate the same secret as the _withSeed() variants.':'_withSeed()版と同じシークレットを生成します。','xxHash prototypes and implementation':'xxHashの関数プロトタイプと実装。','This is the size of internal XXH3_kSecret and is needed by':'これは内部のXXH3_kSecretのサイズで、次の関数が必要とします：','Not to be confused with':'混同しないでください：','When the':'次の構造体を','structure is merely emplaced on stack, it should be initialized with':'単にスタックに置く場合、最初のresetでXXH3_NNbits_reset_withSeed()を使うなら、次の方法で初期化してください：',"or a memset() in case its first reset uses XXH3_NNbits_reset_withSeed(). This init can be omitted if the first reset uses default or _withSecret mode. This operation isn't necessary when the state is created with":'またはmemset()です。最初のresetがデフォルトまたは_withSecretモードなら、この初期化は省略できます。また、状態を次の関数で作成する場合も不要です：',". Note that this doesn't prepare the state for a streaming operation, it's still necessary to use XXH3_NNbits_reset*() afterwards.":'。ただし、これだけで状態がストリーミング処理の準備を終えるわけではありません。その後にXXH3_NNbits_reset*()を使う必要があります。','Value:':'値：','.':'。'
})
parts=re.split(r'(<[^>]*>)',body);used=set()
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
body=''.join(parts).replace('<span class="tt">inline</span>.','<span class="tt">inline</span>として指定します。').replace('<span class="tt">static</span>.','<span class="tt">static</span>として指定します。')
# Translate every descriptive tooltip, retaining identifiers verbatim.
titles={
'Calculates the 32-bit hash of input using xxHash32.':'xxHash32を使って入力の32ビットハッシュを計算します。','Calculates the 64-bit hash of input using xxHash64.':'xxHash64を使って入力の64ビットハッシュを計算します。','The return value from 128-bit hashes.':'128ビットハッシュの戻り値。','Generate the same secret as the _withSeed() variants.':'_withSeed()版と同じシークレットを生成します。','Initializes a stack-allocated XXH3_state_s.':'スタックに割り当てたXXH3_state_sを初期化します。','Allocate an XXH3_state_t.':'XXH3_state_tを割り当てます。'}
for a,b in titles.items():assert 'title="'+a+'"'in body;body=body.replace('title="'+a+'"','title="'+b+'"')
prefix='''---
title: "xxhash.hファイルの参照"
licenseSource: "xxhash-api"
---

## 固定した原文に関する編集注記

以下は生成された原文本文を保持しています。これらの注記は、固定した0.8.4のヘッダー、実装、および対象範囲の仕様を比較して見つかった不一致を示す編集上の追加です。上流の修正ではありません。

- **secret-seed-240-boundary**：XXH3_64bits_withSecretandSeedとXXH3_128bits_withSecretandSeedの固定実装は、240バイト以下の長さではシードと既定のシークレットを、240バイトを超える場合は渡されたシークレットを使います。原文の説明は異なる境界を使っています。この観察は実装と仕様の静的比較に基づき、ここでは数値ハッシュ試験を行っていません。
- **128-secret-seed-return**：XXH3_128bits_withSecretandSeedは宣言と実装によればXXH128_hash_tを返します。原文の戻り値説明はXXH_OK/XXH_ERRORを列挙しています。このエラーコードはreset操作のもので、ハッシュ結果ではありません。
- **128-seed-zero-family**：XXH3_128bits_withSeedのシードゼロの注記はXXH3_64bits()を指しています。直前のXXH3_128bitsの文書は、ゼロシードのXXH3_128bits_withSeedとの等価性を説明しています。固定実装も128ビットファミリー内で処理します。ここでは数値による等価性を試験していません。
- **argc-example**：XXH3_generateSecretの例は、引数個数の条件でargv != 3を使います。変数名と型が引数個数の確認と整合しません。原文の例を保持し、コンパイル結果を主張しません。
- **hashfast-seed-example**：HashFastコンストラクターはsという引数を受け取りますが、XXH3_generateSecret_fromSeedにはクラス内で宣言されていないseedを渡しています。原文の例を保持し、修正例のコンパイル結果や性能を保証しません。
- **stale-state-field-reference**：一部の状態コメントはXXH32_state_s::mem32と::memsizeを参照しています。固定したXXH32状態のフィールドはbufferとbufferedSizeです。古い参照名は保持し、有効なフィールドリンクとして扱いません。

[固定した上流ヘッダー](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h)

'''
comments={'YOUR NAME HERE':'ここに自分の名前を指定','do nothing':'何もしない','disable':'無効化','disabled':'無効','nothing':'何もない','minimum XXH3_SECRET_SIZE_MIN':'最小値はXXH3_SECRET_SIZE_MIN','nb of secret bytes consumed at each accumulation':'各蓄積処理で消費するシークレットのバイト数','disable attribute target':'target属性を無効にする','not aligned on 8, last secret is different from acc & scrambler':'8にアライメントしていない。最後のシークレットはアキュムレーターおよびスクランブラー用と異なる'}
body+='\n### マクロ値のコメントの日本語訳\n\nコードとコメントは原文を保持しています。コメントの意味は次のとおりです。\n\n'+''.join(f'- `{a}`：{b}。\n'for a,b in comments.items())+'\n'
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
p=n/'drafts/ja/32-api-header.complete-unreviewed.md';assert not p.exists();p.write_text((prefix+body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-header-labels-535.json').write_text(json.dumps({'labels':{'Go to the source code of this file.':'このファイルのソースコードへ移動します。','More...':'詳細…'},'titles':titles}));print('translated distinct nodes',len(used))
