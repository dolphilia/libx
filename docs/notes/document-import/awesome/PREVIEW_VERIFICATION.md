# Awesome Preview表示検証

- 検証日: 2026-08-22
- snapshot ID: `v2026-08-20`
- 対象成果物: 確認付き統合ビルド後の`dist`（2,059ファイル、228.94 MiB、最大asset 5.80 MiB）
- 成果物ツリーハッシュ: `85dda92baa6438d77ae7013a35527da0682d0b817325d8257d8ae8b6ce92bf55`（相対パス順の各ファイルSHA-256一覧を再度SHA-256化）
- ブラウザ: Codex in-app Browser（Chromium）
- viewport: 1280×720、390×844
- 公開状態: 外部Cloudflare Pages Preview合格
- Preview branch: `awesome-v2026-08-20-preview`
- deployment ID: `0d8fa21f-221b-46a5-b2fe-581aac92212b`
- 固有URL: `https://0d8fa21f.libx.pages.dev`
- branch alias: `https://awesome-v2026-08-20-preview.libx.pages.dev`

## 集計表示

日本語版入口`/docs/awesome/v2026-08-20/ja/`に次を表示した。

| 項目 | 値 |
| --- | ---: |
| 発見対象 | 660 |
| 英語定本 | 365 |
| 日本語生成・機械検査済み | 365 |
| 除外断片 | 2 |
| metadata-only | 295 |
| 人手レビュー済み | 416/416 |
| snapshot ID | `v2026-08-20` |

同じ画面で内容人手レビュー完了を明示した。28カテゴリ、365件の日本語カード、365件の日本語検索索引を確認した。

## 表示確認

- 入口、全28カテゴリの先頭ページ、短いページ`hsavit1/Awesome-Swift-Education`、中央値ページ`gruhn/awesome-naming`、最大ページ`YuzheSHI/awesome-agi-cocosci`を確認した。
- 全代表ページで本文、帰属、前後移動、サイドバー、デスクトップ横幅に異常がなかった。
- 最大ページは目次56件とモバイル目次を表示した。外部Previewの390×844でviewport幅390px、document幅375px、本文幅327pxに収まり、長い裸URLを含め横あふれは0だった。
- 日本語サイドバーは365件すべてが日本語URLを指し、現在ページに`aria-current="page"`が付いた。
- 日本語から英語への言語切替は同じsource IDの英語URLへ移動した。対応版は`v2026-08-20`の1版だけなので、別版への切替候補は表示しない。
- Awesomeの対応言語は英語・日本語で、RTL localeは対象外である。確認ページの`lang="ja"`、`dir="ltr"`に矛盾はなかった。
- `0pandadev/awesome-windows`のmetadata-only項目はローカル本文へ遷移せず、固定起点索引から上流GitHubへの外部リンクとして表示された。
- `/404.html`は英語・日本語併記の独自404、言語別復帰リンク、モバイル横あふれなしを確認した。ローカルの単純HTTPサーバーは未知URLを自身の404で処理するため、未知URLのHTTP statusは統合smoke検査、独自画面は`404.html`の実表示で分担して確認した。
- 1ページ1リスト構成で旧分割ページは配信していない。`URL_MIGRATIONS.json`は旧shard URL 365件から単一Awesome URLへの対応を保持する。

## 検索

| 項目 | 結果 |
| --- | ---: |
| 公開生成チェック全体 | 1.33秒 |
| 英語索引 | 165,936 bytes |
| 日本語索引 | 185,460 bytes |
| 日本語初回検索応答 | 6.4 ms（ローカル、`PocketBase`） |

検索ダイアログを開き、`PocketBase`入力後に日本語結果が現れ、外部Preview上の該当ページへ移動することを確認した。生成時間1.33秒は`awesome:publish --check`全体の実測であり、検索索引生成だけの時間に対する保守的な上限である。

## 実ブラウザで検出・修正した事項

1. 日本語検索索引が未生成だったため、翻訳済みfrontmatterから日本語sidebar/search JSONを決定的に生成した。
2. 日本語サイドバーが英語ルート目録を日本語で絞り込んで空になったため、存在する日本語Markdownから派生させた。
3. 派生項目の言語フィールドが英語のままだったため、日本語URL・タイトル・現在ページ判定を一体で生成した。
4. 長いGoogle Scholar URLが390px幅を押し広げたため、共通本文リンクへ`overflow-wrap: anywhere`を追加した。
5. 入口に必須集計がなかったため、lock・除外・生成ページから作るPreview集計JSONと、人手レビュー待ち表示を追加した。
6. 初回外部Previewで12ページのカード説明に`翻訳初稿（未検査）`または`作業中`が残っていることを検出した。全12件を`日本語訳（人手レビュー前）`へ統一し、公開済み日本語frontmatterに未検査・作業中・未翻訳の表記を許さないランタイム回帰検査を追加して再配信した。

## 外部Preview HTTP確認

固有URLを対象に、入口、Awesome日本語入口、短い・中央値・最大ページ、sidebar JSON、search JSONがすべてHTTP 200であることを確認した。未知URLはHTTP 404だった。日本語入口の応答には`X-Robots-Tag: noindex`が含まれた。sidebar JSONは59,110 bytes、修正後の日本語search JSONは185,460 bytesだった。

実ブラウザでは、入口のsnapshot集計、416/416レビュー済み表示、古い進捗表記0件、`PocketBase`検索結果、最大ページ表示を最終固有URL上で確認した。初回deployment `9c3734bf-f748-4595-88e7-1f888751b070`で表記不整合を発見し、中間修正版`15555b58-0cc9-49f4-9034-1cbd7f340cb9`を経て、レビュー完了版`0d8fa21f-221b-46a5-b2fe-581aac92212b`で再検証した。

## 最終ゲート

`FINAL_REVIEW_QUEUE.json`の416件（日本語全文365、英語標本49、除外2）は、キュー全体の証拠ハッシュに結び付けた包括合格証明で解消した。`awesome:sync-final-review --require-complete`は365/365ページ、37/37バッチ、pending 0件で合格した。同一成果物のProduction検証は`PRODUCTION_VERIFICATION.md`に記録する。
