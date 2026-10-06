from pathlib import Path
import hashlib,json
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];en=Path('/private/tmp/libx-xxhash-import-20261003')/p['canonical']['path'];assert hashlib.sha256(en.read_bytes()).hexdigest()==p['canonical']['sha256'];assert p['nextBoundary']=='Performance considerations'
text='''
<span id="performance-considerations"></span>

性能に関する考慮事項
----------------------------------

xxHashアルゴリズムは、単純かつコンパクトに実装できます。任意の長さのメッセージに対して、システムに依存しない「フィンガープリント」またはダイジェストを生成します。

このアルゴリズムでは、入力をストリーミングして複数の手順で処理できます。その場合、データを完全なストライプとしてアルゴリズムに渡すため、内部バッファーが必要です。

64ビットシステムでは、64ビット版の`XXH64`の方が一般に計算が速いため、必要な結果が32ビットだけであっても推奨されます。

一方、32ビットシステムでは関係が逆になります。`XXH64`は64ビット演算を使うため性能が低下し、`XXH32`の方が速くなります。

最後に、ベクトル演算を使える場合は、`XXH3`の方が速いと考えられます。

<span id="reference-implementation"></span>

参照実装
----------------------------------------

Cで書かれた参照ライブラリーはhttps://www.xxhash.comで入手できます。
このウェブページには、さまざまな言語で書かれた複数の実装へのリンクもあります。
また、[GitHubプロジェクトページ](https://github.com/Cyan4973/xxHash)へのリンクがあり、その[Issue一覧](https://github.com/Cyan4973/xxHash/issues)を使って、この話題に関する公開の議論を続けられます。

バージョンの変更
--------------------
v0.2.0：Adrien WuによるXXH3仕様を追加。  
v0.1.1：定数を選ぶ理由についての注記を追加。  
v0.1.0：初版。

## 出典と通知

非公式の日本語訳です。原文は、通知を保持することを条件として、翻訳および編集物への収録を明示的に許可しています。

固定したソフトウェアのバージョン：**0.8.4**。ソースコミット：`c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0`。文書の仕様バージョンは前掲の0.2.0です。書式、内部リンク、および明示した編集注記はLibxによる変更です。

[原文の通知全文](/docs/xxhash/v0-8-4/en/03-notices/spec-notice/)

[固定した原典](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/doc/xxhash_spec.md) · [原文のダウンロード](/docs/xxhash/source/v0-8-4/doc/xxhash_spec.md.txt)

### Libx編集注記：シードとシークレットのAPI表記

概要の「同時に指定することはできません」と`*_withSecretAndSeed`という表記は、仕様原文に従っています。固定した0.8.4の実装では、API名は`XXH3_64bits_withSecretandSeed`および`XXH3_128bits_withSecretandSeed`です。どちらもシークレットとシードを引数として受け取りますが、入力が240バイト以下ならシードと既定のシークレットを使い、それを超える入力では指定されたシークレットを使います。したがって、原文の記述を、両方の引数を渡せないという意味に解釈しないでください。

根拠：[固定したヘッダーの64ビット実装](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h#L6489-L6495)、[128ビット実装](https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxhash.h#L7319-L7325)。

### Libx編集注記：ストライプ処理のオフセット

大きい入力の手順2-1にある「その後の各ラウンド」は原文の表現です。同じ箇所の疑似コードでは、ブロック内の各ストライプについて`n`を増やし、シークレットのオフセットに`n*8`を使っています。
'''
out=note/'drafts/ja/08-doc-xxhash_spec.complete-unreviewed.md';assert not out.exists();out.write_text(old.read_text()+text)
print({'draft':str(out),'sourceLines':len(en.read_text().splitlines()),'wholePageReviewed':False})
