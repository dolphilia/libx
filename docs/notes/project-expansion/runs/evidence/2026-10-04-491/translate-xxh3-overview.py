from pathlib import Path
import hashlib,json,re
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];en=Path('/private/tmp/libx-xxhash-import-20261003')/p['canonical']['path'];assert hashlib.sha256(en.read_bytes()).hexdigest()==p['canonical']['sha256'];segment=en.read_text().split('\nXXH3 Algorithm Overview\n')[1].split('\nXXH3 Algorithm Description (for small inputs)\n')[0];blocks=re.findall(r'^```[^\n]*\n[\s\S]*?^```',segment,re.M);assert len(blocks)==4
text='''
<span id="xxh3-algorithm-overview"></span>

XXH3アルゴリズムの概要
-------------------------------------

XXH3には、XXH3-64とXXH3-128（またはXXH128）という2つの版があります。それぞれ64ビットと128ビットの出力を生成します。

XXH3は、小さい入力（0–16バイト）、中程度の入力（17–240バイト）、大きい入力（241バイト以上）で異なるアルゴリズムを使います。小さい入力と中程度の入力のアルゴリズムは、性能を重視して最適化されています。3つのアルゴリズムを以下の節で説明します。

多くの演算では64ビットの素数定数が必要です。そのほとんどはXXH32とXXH64で使う定数と同じもので、すべてを以下に定義します。

__CODE_0__

`XXH3_64bits()`関数は、符号なし64ビット値を生成します。
`XXH3_128bits()`関数は、`XXH128_hash_t`構造体を生成します。構造体の`low64`と`high64`には、結果の下位64ビットと上位64ビットの半分ずつの値がそれぞれ含まれます。

結果をバイナリーや16進数の形式で保存・表示する必要があるシステムでは、通常の10進数形式と同じ値を再現するように正規形式を定義します。そのため、**ビッグエンディアン**形式（最上位バイトを先頭に置く）に従います。

### シードとシークレット

XXH3は、ハッシュ処理で使う2つの設定可能な定数、シードとシークレットを導入することで、シード付きのハッシュ処理を提供します。シードは符号なし64ビット値で、シークレットは少なくとも136バイトのバイト配列です。デフォルトのシードは0で、デフォルトのシークレットは次の192バイトの値です。

__CODE_1__

シードとシークレットは、ハッシュ関数の`*_withSecret`版と`*_withSeed`版を使って任意に指定できます。

シードとシークレットを同時に指定することはできません（`*_withSecretAndSeed`は、240バイト以下の短い入力と中程度の入力では実際には`*_withSeed`、大きい入力では`*_withSecret`です）。一方を指定すると、他方はデフォルト値を使います。
ただし、1つ例外があります。入力が大きく（> 240バイト）、シードが指定されている場合は、シード値とデフォルトのシークレットから、次の手順でシークレットを導出します。

__CODE_2__

導出処理では、シークレットを24個の64ビット値として扱います。XXH3のアルゴリズムでも同様に、配列の連続した区間を1つ以上の32ビット値または64ビット値として扱い、シークレットを読み取ります。**シークレットの値は常にリトルエンディアン形式で読み取ります。**

### 最終的な混合の手順（アバランシェ）

入力のすべてのビットが、出力ダイジェストのどのビットにも影響する可能性を持つようにするため（アバランシェ効果）、XXH3アルゴリズムの最後の手順では通常、64ビット値のビットを混合する2つの固定演算のいずれかを使います。以下のXXH3の説明では、これらの演算を`avalanche()`と`avalanche_XXH64()`と表します。

__CODE_3__
'''
for i,b in enumerate(blocks):text=text.replace('__CODE_'+str(i)+'__',b)
out=note/'drafts/ja/08-doc-xxhash_spec.through-xxh3-overview.md';assert not out.exists();out.write_text(old.read_text()+text)
print({'addedCodeBlocks':4,'throughSourceLines':len(en.read_text().split('\nXXH3 Algorithm Description (for small inputs)\n')[0].splitlines()),'draft':str(out)})
