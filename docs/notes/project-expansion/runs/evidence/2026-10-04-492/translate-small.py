from pathlib import Path
import hashlib,json,re
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];en=Path('/private/tmp/libx-xxhash-import-20261003')/p['canonical']['path'];assert hashlib.sha256(en.read_bytes()).hexdigest()==p['canonical']['sha256'];segment=en.read_text().split('\nXXH3 Algorithm Description (for small inputs)\n')[1].split('\nXXH3 Algorithm Description (for medium inputs)\n')[0];blocks=re.findall(r'^```[^\n]*\n[\s\S]*?^```',segment,re.M);assert len(blocks)==7
text='''
<span id="xxh3-algorithm-description-for-small-inputs"></span>

XXH3アルゴリズムの説明（小さい入力）
-------------------------------------

小さい入力（0–16バイト）のアルゴリズムは、空の入力、1–3バイト、4–8バイト、9–16バイトという4つの場合にさらに分かれます。

アルゴリズムはバイトスワップ演算を使います。この演算は、32ビット値または64ビット値のバイト順を反転します。32ビット版と64ビット版を、それぞれ`bswap32`と`bswap64`と表します。

### 空の入力

空の入力のハッシュは、シードとシークレットの一部から計算します。

__CODE_0__

### 1–3バイトの入力

アルゴリズムは、入力のバイトとその長さを組み合わせた1つの32ビット値から始めます。

__CODE_1__

次に、この値とシークレットの先頭8バイト（XXH3-64）または16バイト（XXH3-128）から、最終的な出力を計算します。ここでは、シークレットを通常の64ビット値ではなく、32ビット値として読み取ります。

__CODE_2__

XXH3-64の結果は、XXH3-128の結果の下位半分になることに注意してください。

### 4–8バイトの入力

アルゴリズムは、入力の先頭4バイトと末尾4バイトをリトルエンディアンの32ビット値として読み取り、変更したシードを用意することから始めます。

__CODE_3__

これらの値もシークレットの一部と組み合わせ、最終的な値を生成します。

__CODE_4__

### 9–16バイトの入力

アルゴリズムは、入力の先頭8バイトと末尾8バイトをリトルエンディアンの64ビット値として読み取ることから始めます。

__CODE_5__

ここでも、これらの値をシークレットの一部と組み合わせ、最終的な値を生成します。

__CODE_6__
'''
for i,b in enumerate(blocks):text=text.replace('__CODE_'+str(i)+'__',b)
out=note/'drafts/ja/08-doc-xxhash_spec.through-small.md';assert not out.exists();out.write_text(old.read_text()+text)
print({'addedCodeBlocks':7,'throughSourceLines':len(en.read_text().split('\nXXH3 Algorithm Description (for medium inputs)\n')[0].splitlines()),'draft':str(out)})
