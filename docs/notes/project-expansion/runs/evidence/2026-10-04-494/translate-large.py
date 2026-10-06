from pathlib import Path
import hashlib,json,re
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];en=Path('/private/tmp/libx-xxhash-import-20261003')/p['canonical']['path'];assert hashlib.sha256(en.read_bytes()).hexdigest()==p['canonical']['sha256'];segment=en.read_text().split('\nXXH3 Algorithm Description (for large inputs)\n')[1].split('\nPerformance considerations\n')[0];blocks=re.findall(r'^```[^\n]*\n[\s\S]*?^```',segment,re.M);assert len(blocks)==9
text='''
<span id="xxh3-algorithm-description-for-large-inputs"></span>

XXH3アルゴリズムの説明（大きい入力）
-------------------------------------

このアルゴリズムは、240バイトを超える入力に使います。内部のハッシュ状態は8つの「アキュムレーター」に保存し、それぞれが符号なし64ビット値を保持します。

### 手順1：内部アキュムレーターを初期化する

アキュムレーターは固定の定数で初期化します。

__CODE_0__

### 手順2：ブロックを処理する

入力を完全なブロック単位で読み取り、処理します。ブロックの大きさはシークレットの長さによって決まります。具体的には、1つのブロックは複数の64バイトのストライプで構成されます。1ブロック当たりのストライプ数は`floor((secretLength-64)/8)`です。既定の192バイトのシークレットでは、1ブロックに16本のストライプがあり、ブロックの大きさは1024バイトになります。

__CODE_1__

完全なブロックを処理する過程を*ラウンド*と呼びます。ラウンドは次の2つの小手順で構成されます。

#### 手順2-1：ブロック内のストライプを処理する

ストライプを、各8バイトの8つのレーンに均等に分けます。累積の手順では、1本のストライプとシークレットの連続する64バイトの区間を使ってアキュムレーターを更新します。各レーンは、対応する64ビット値をリトルエンディアンで読み取ります。

累積の手順では、次の処理を適用します。

__CODE_2__

ブロック内のすべてのストライプに対して累積の手順を繰り返します。それぞれ異なるシークレットの区間を使い、最初のストライプでは先頭64バイトを使い、その後の各ラウンドでは8バイトずつオフセットを進めます。

__CODE_3__

#### 手順2-2：アキュムレーターをスクランブルする

ブロック内のすべてのストライプで累積の手順を終えた後、シークレットの末尾64バイトを使ってアキュムレーターをスクランブルします。

__CODE_4__

したがって、1つのラウンドは`round_accumulate`の後に`round_scramble`を実行する処理です。

__CODE_5__

入力の残りが`blockSize`バイト以下になるまで、手順2を繰り返して入力を読み取ります。最後のブロックが完全なブロックであっても、次の手順に残すことに注意してください。

### 手順3：最後のブロックと末尾64バイトを処理する

最後のブロック内のストライプに対して、最後のストライプ（完全かどうかは問いません）を除き、累積の手順を実行します。その後、末尾64バイトを1本のストライプとして扱い、最後の累積の手順を実行します。末尾64バイトは、最後から2番目のブロックと重なる場合があることに注意してください。

__CODE_6__

### 手順4：終了処理

終了処理では、初期シード値とシークレットの64バイトの区間を使うマージ処理によって、アキュムレーターから1つの64ビット値を取り出します。

__CODE_7__

XXH3-128では、結果の上下半分に対してマージ処理を2回実行します。それぞれ異なるシークレットの区間と、入力の総長から導いた異なる初期値を使います。
XXH3-64の結果は、XXH3-128の結果の下位半分に一致します。

__CODE_8__
'''
for i,b in enumerate(blocks):text=text.replace('__CODE_'+str(i)+'__',b)
out=note/'drafts/ja/08-doc-xxhash_spec.through-large.md';assert not out.exists();out.write_text(old.read_text()+text)
print({'addedCodeBlocks':9,'throughSourceLines':len(en.read_text().split('\nPerformance considerations\n')[0].splitlines()),'draft':str(out)})
