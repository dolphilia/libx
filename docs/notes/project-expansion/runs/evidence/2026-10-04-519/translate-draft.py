from pathlib import Path
import re,json,hashlib,ast
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();m={}
for f,var in [('509','m'),('510','m'),('511','m'),('515','m'),('517','m')]:
 fn={'509':'oneshot','510':'state','511':'stream','515':'compare','517':'secret'}[f];tree=ast.parse(Path(f'/private/tmp/libx-xxh3-{fn}-{f}.py').read_text());m.update(ast.literal_eval(next(n.value for n in tree.body if isinstance(n,ast.Assign)and any(isinstance(x,ast.Name)and x.id==var for x in n.targets))))
for f,fn in [('512','oneshot128'),('514','stream128'),('516','combined')]:
 tree=ast.parse(Path(f'/private/tmp/libx-xxh3-{fn}-{f}.py').read_text());m.update(ast.literal_eval(next(n.value for n in tree.body if isinstance(n,ast.Assign)and any(isinstance(x,ast.Name)and x.id=='add'for x in n.targets))))
m.update({'&#10;Data Structures':'&#10;データ構造','&#10;Macros':'&#10;マクロ','&#10;Typedefs':'&#10;型定義','&#10;Functions':'&#10;関数','The return value from 128-bit hashes.':'128ビットハッシュの戻り値。'})
a=s.index('<div');b=s.index('詳細説明',a);part=s[a:b];parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
for k in ['&#10;Data Structures','&#10;Macros','&#10;Typedefs','&#10;Functions']:assert k in used
s=s[:a]+''.join(parts)+s[b:]
labels={'More...':'詳細…','Streaming Example':'ストリーミングの例','Single Shot Example':'一括処理の例','Canonical Representation Example':'正規形式の例'}
for k,v in labels.items():s=s.replace('>'+k+'</a>','>'+v+'</a>')
titles={
'Allocate an XXH3_state_t.':'XXH3_state_tを割り当てます。',
'Frees an XXH3_state_t.':'XXH3_state_tを解放します。',
'Calculates 128-bit seeded variant of XXH3 hash of data.':'dataのXXH3ハッシュをシード付き128ビット版で計算します。',
'Calculates 128-bit unseeded variant of XXH3 of data.':'dataのXXH3ハッシュをシードなし128ビット版で計算します。',
'Calculates 128-bit variant of XXH3 with a custom &quot;secret&quot;.':'カスタム「シークレット」を使用して、XXH3の128ビット版を計算します。',
'Calculates 64-bit seeded variant of XXH3 hash of input.':'inputのXXH3ハッシュをシード付き64ビット版で計算します。',
'Calculates 64-bit unseeded variant of XXH3 hash of input.':'inputのXXH3ハッシュをシードなし64ビット版で計算します。',
'Calculates 64-bit variant of XXH3 with a custom &quot;secret&quot;.':'カスタム「シークレット」を使用して、XXH3の64ビット版を計算します。',
'Calculates 64/128-bit seeded variant of XXH3 hash of data.':'dataのXXH3ハッシュをシード付き64/128ビット版で計算します。',
'Derive a high-entropy secret from any user-defined content, named customSeed.':m['Derive a high-entropy secret from any user-defined content, named customSeed.'],
'Generate the same secret as the _withSeed() variants.':m['Generate the same secret as the _withSeed() variants.'],
'Resets an XXH3_state_t with secret data to begin a new hash.':'XXH3_state_tをリセットし、シークレットデータを使用して新しいハッシュの計算を開始します。',
'Returns the calculated XXH3 128-bit hash value from an XXH3_state_t.':'XXH3_state_tから計算したXXH3の128ビットハッシュ値を返します。',
'Returns the calculated XXH3 64-bit hash value from an XXH3_state_t.':'XXH3_state_tから計算したXXH3の64ビットハッシュ値を返します。',
'The return value from 128-bit hashes.':'128ビットハッシュの戻り値。'}
for k,v in titles.items():
 assert 'title="'+k+'"'in s,k
 s=s.replace('title="'+k+'"','title="'+v+'"')
# Generated pop-up prose is outside div.line code payloads; preserve every code line.
for k,v in {**titles,'Calculates 64-bit variant of XXH3 with a custom "secret".':'カスタム「シークレット」を使用して、XXH3の64ビット版を計算します。','Definition':'定義','An unsigned 64-bit integer.':'符号なし64ビット整数。',"Default Secret's size.":'既定のシークレットのサイズ。'}.items():
 s=s.replace('<div class="ttdoc">'+k+'</div>','<div class="ttdoc">'+v+'</div>')
s=s.replace('<b>Definition</b>','<b>定義</b>')
start=s.index('## Editorial notes on fixed upstream text');end=s.index('<div',start)
notes='''## 固定した上流原文に対する編集注記

以下の生成本文は原文の構造を保持しています。これらの注記は、固定した0.8.4のヘッダー、実装、収録範囲の仕様を比較して見つかった相違を示す、Libxによる補足です。上流原文を訂正したものではありません。

- **secret-seed-240-boundary**：XXH3_64bits_withSecretandSeedとXXH3_128bits_withSecretandSeedの固定実装は、入力が240バイト以下ならシードと既定のシークレットを使用し、240バイトを超えるなら渡されたシークレットを使用します。原文の説明は異なる境界を使っています。この観察は実装と仕様の静的比較に基づき、この境界に関する数値ハッシュ試験は行っていません。
- **128-secret-seed-return**：XXH3_128bits_withSecretandSeedは、宣言と実装によればXXH128_hash_tを返します。原文の戻り値説明にはXXH_OK/XXH_ERRORとあります。これらはreset操作のエラーコードであり、この関数のハッシュ結果ではありません。
- **128-seed-zero-family**：XXH3_128bits_withSeedのシード0に関する注記はXXH3_64bits()を参照しています。一方、その前にあるXXH3_128bitsの説明は、シード0でXXH3_128bits_withSeedと同等であるとしています。固定実装も128ビットファミリー内で処理します。英語版の編集注記を作成した時点では、数値による同等性は試験していませんでした。今回の日本語訳では、ローカルC99ビルドで3種類の入力パターンと22種類の長さについて、両方の64ビットフィールドが一致することを66ケースで確認しました。全プラットフォーム・任意長の実行試験ではありません。
- **argc-example**：XXH3_generateSecretの例は、引数個数の条件にargv != 3を使用しています。変数名と型が引数個数の検査と整合していません。個数を調べるならargcを使用します。原文の例は保持しています。今回のローカルC99構文検査ではポインターと整数の比較警告が出ました。argc != 3に変更した別の修正候補は構文検査を通過しています。
- **hashfast-seed-example**：HashFastのコンストラクター引数はsですが、そのクラスで宣言されていないseedを使ってXXH3_generateSecret_fromSeedを呼び出しています。原文の例は保持しています。今回のローカルC++11構文検査は未宣言seedのエラーになり、引数sを使う別の修正候補は構文検査を通過しました。例の実行、速度、HashSlow/HashFastの同等性は検証していません。
- **stale-state-field-reference**：一部の状態コメントはXXH32_state_s::mem32と::memsizeを参照しています。固定したXXH32の状態フィールドはbufferとbufferedSizeです。これらの古い参照名は、有効なフィールドリンクとは扱わず、原文どおり保持しています。
- **parameter-name-aliases**：XXH3_64bits_withSecretの前提条件にあるlengthは、引数一覧のlen（入力のバイト長）を指します。XXH3_128bitsとXXH3_128bits_withSeedのdata説明にあるlengthも、各関数のlenを指します。XXH3_128bits_withSecretandSeedの説明中のdata/lenは、公開宣言のinput/lengthに対応します。本文の表記は原文どおりです。

コード例中のコメントの意味：`expose unstable API`は「不安定なAPIを公開する」、`Hashes argv[2] using the entropy from argv[1].`は「argv[1]のエントロピーを使ってargv[2]のハッシュを計算する」、`Slow, seeds each time`は「遅い版：毎回シードを設定する」、`Fast, caches the seeded secret for future uses.`は「速い版：シードから生成したシークレットを後の利用に備えてキャッシュする」です。速度の表現は原文のコメントであり、今回の測定結果ではありません。

[固定した上流ヘッダー](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h)

'''
s=s[:start]+notes+s[end:]
out=note/'drafts/ja/14-api-xxh3-family.complete-unreviewed.md';assert not out.exists();out.write_text(s)
Path('/private/tmp/libx-xxh3-labels-519.json').write_text(json.dumps({'labels':labels,'titles':titles},ensure_ascii=False,indent=2))
print({'draft':str(out),'briefTranslatedNodes':len(used),'tooltipMappings':len(titles),'wholePageReviewed':False})
