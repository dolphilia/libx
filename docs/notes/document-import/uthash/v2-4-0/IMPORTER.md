# uthash 2.4.0 固定入力変換

`SOURCE_LOCK.json`と`CONTENT_MAP.json`の固定ハッシュ、および全9入力を検査してから、AsciiDoc 10.2.1・Pandoc 3.8.3で全8ページを生成する。実行ファイルは明示する。上流Makefileの公開用stage処理は実行しない。

```bash
node scripts/importers/import-uthash-2.4.0.mjs --asciidoc=/absolute/path/asciidoc --pandoc=/absolute/path/pandoc
node scripts/importers/import-uthash-2.4.0.mjs --check --asciidoc=/absolute/path/asciidoc --pandoc=/absolute/path/pandoc
node scripts/importers/check-uthash-canonical.mjs --report=/absolute/new/path/report.json
```

出力はこのディレクトリの`generated/`だけを一括置換する。`--check`は出力を置換しない。失敗した変換・確定時例外では既存出力を保全する。出力先や入力のシンボリックリンクを拒否する。翻訳やアプリ本文へは書き込まない。

- `generated/canonical/`: 英語定本草稿8ページ。生成のみで全文内容レビュー済みとはしない。
- `generated/source-fragments/`: AsciiDoc本文`#content`7件の照合用HTML。
- `generated/assets/rss.png`: 原画像の同一バイトコピー。
- `generated/GENERATION.json`: 固定入力とツール版、未レビュー状態。

表は元HTMLを保持し、見出しは原IDのコメントマーカーを付ける。サイト設定へ`remark-uthash-source-heading-ids.js`を追加すると原IDをネイティブ見出し・目次に適用できる。検索索引の原ID対応はアプリ作成段階で別途実装・検査する。通常の共有索引生成がこのマーカーを解釈するとはみなさない。

元タイトル・著者・版はfrontmatterに保存する。アプリ側で出典・注釈付きライセンス・非公式翻訳表示とともに可視化する。ライセンスページは原文全文の空行を含め、HTMLエスケープした`pre`として保持する。Markdownのフェンスではレンダラーが末尾空行を削除したため、元文照合で修正した。

歴史的`userguide.pdf`は元所在地の404を既に記録済み。所在地を保持し、説明注記を原本文の外へ表示する。原文の段落・コード・表を要約したり追加説明へ置き換えない。

機械検査は本文の空白を正規化した一致、コードの完全一致、表セル・種別・span、見出し・原ID・ネイティブ目次、明示したリンク/画像の対応、元通知・メタデータを確認する。全文の意味・読みやすさのレビュー、検索・サイトビルド・表示・翻訳・公開は別工程として未完了を管理する。
