from pathlib import Path
import hashlib,json,re
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];en=Path('/private/tmp/libx-xxhash-import-20261003')/p['canonical']['path'];assert hashlib.sha256(en.read_bytes()).hexdigest()==p['canonical']['sha256'];segment=en.read_text().split('\nXXH3 Algorithm Description (for medium inputs)\n')[1].split('\nXXH3 Algorithm Description (for large inputs)\n')[0];blocks=re.findall(r'^```[^\n]*\n[\s\S]*?^```',segment,re.M);assert len(blocks)==6
text='''
<span id="xxh3-algorithm-description-for-medium-inputs"></span>

XXH3アルゴリズムの説明（中程度の入力）
-------------------------------------

このアルゴリズムは、中程度の入力（17–240バイト）に使います。内部のハッシュ状態は、1つ（XXH3-64）または2つ（XXH3-128）の「アキュムレーター」に保存し、それぞれが符号なし64ビット値を保持します。

### 手順1：内部アキュムレーターを初期化する

アキュムレーターは入力の長さに基づいて初期化します。

__CODE_0__

### 手順2：入力を処理する

この手順は、17–128バイトの入力と129–240バイトの入力という2つの場合にさらに分かれます。

#### 混合演算

この手順の構成要素として、16バイトのデータ区間、16バイトのシークレット区間、シードを混合して64ビット値にする演算を使います。この演算は、データとシークレットの区間をリトルエンディアンの64ビット値として扱います。

__CODE_1__

XXH3-128では、混合演算を常に2つずつの組で呼び出します。2つの16バイトのデータ区間を32バイトのシークレット区間と混合し、それに応じてアキュムレーターを更新します。

__CODE_2__

入力を複数の16バイトのチャンクに分けて混合し、結果をアキュムレーターに加えます。

#### 17–128バイトの入力

入力の先頭から*N*個、末尾から*N*個の16バイトのチャンクを読み取ります。*N*は、これらの2*N*個のチャンクで入力全体を覆う最小の数です。チャンクを対にして混合し、その結果をアキュムレーターに累積します。

__CODE_3__

#### 129–240バイトの入力

入力を16バイト（XXH3-64）または32バイト（XXH3-128）のチャンクに分けます。まず先頭128バイトをチャンクごとに混合し、その後、中間のアバランシェ演算を行います。続いて、残りの完全なチャンクを処理し、最後に末尾の16バイトまたは32バイトを1つのチャンクとして処理します。

__CODE_4__

### 手順3：終了処理

最終結果をアキュムレーターから取り出します。

__CODE_5__
'''
for i,b in enumerate(blocks):text=text.replace('__CODE_'+str(i)+'__',b)
out=note/'drafts/ja/08-doc-xxhash_spec.through-medium.md';assert not out.exists();out.write_text(old.read_text()+text)
print({'addedCodeBlocks':6,'throughSourceLines':len(en.read_text().split('\nXXH3 Algorithm Description (for large inputs)\n')[0].splitlines()),'draft':str(out)})
