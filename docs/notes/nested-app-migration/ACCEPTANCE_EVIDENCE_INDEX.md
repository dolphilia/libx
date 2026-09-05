# 入れ子アプリの受け入れ条件と検証根拠

2026-09-05、コミット `c9bb3ffe7c4172d3294fbac4ac482b64879b656b` 時点の中間監査。計画第8節の条件に対する証拠の所在と範囲を整理する。これは計画全体の完了宣言ではない。テストが成功していても、fixtureの検証を外部Cloudflareの動作証明へ読み替えない。

[最新CI記録](./worker-ci-success.json)でunit 27件・runtime 207件、通常品質CIの統合ビルド・smoke・容量検査の成功を確認した。以下のruntimeテストはこのCIの対象。JSONの過去のテスト件数や未完了表示は、その記録を採取した時点の状態として保持する。

| 計画第8節のケース | 根拠 | 確認できる範囲・残る境界 |
| --- | --- | --- |
| 単独appだけの既存リポジトリ | `tests/runtime/app-registry.test.js`、`selective-output.test.js`、最新品質CI | 単独appのpackage名・公開base、選択統合で他サイト保持、既存appビルド・smoke。全ての将来の単独appへの保証ではない |
| 単独＋グループ混在 | `app-registry.test.js`、最新品質CI | 同じregistryで6アプリのfixtureを検出し、group/project選択を解決。実リポジトリの統合ビルドも成功 |
| 二つのグループに同名子 | `app-registry.test.js` | `awesome/web`と`other/web`が別ディレクトリへ解決する。これだけで全UI・設定キャッシュの分離を証明したとは扱わない |
| 不正entry・order・深い入れ子 | `app-registry.test.js` | 個別fixtureで不存在・重複・再入れ子を例外にする |
| 不完全な子・親子兼用・パストラバーサル | `app-registry.test.js`、`group-output.test.js` | 検出・ID解決・公開パスの拒否を検証 |
| 一子appの本文更新 | `group-pages.test.js`、`group-output.test.js`、[出力保持記録](./individual-output-preservation.json) | 本文だけの変更は兄弟の入力ハッシュを変えず、個別CLI実測では対象外appの内容・更新時刻を保持。外部Workerの一子更新は未検証 |
| タイトル・カテゴリ移動・改名・削除 | `group-pages.test.js`、`group-output.test.js` | タイトルによる兄弟キャッシュ無効化、安定IDによる改名・移動先解決、不要資産除去を確認。全操作の組合せを一つのテストで網羅したものではない |
| 共通UI変更 | `group-output.test.js`、最新品質CI | 共有入力・生成物ハッシュの検査と、共有変更を含む全体ビルド。将来の依存追加時にも入力ハッシュ対象の確認が必要 |
| 英日・旧新版の欠落差 | `group-pages.test.js` | 存在する文書IDの対応先、欠落言語の一覧、shared版宣言の不一致、independentの子固有言語を確認 |
| URL・アセット・予約パスの重複 | `group-output.test.js`、`selective-output.test.js` | 正規化したURL所有・予約ルートの衝突を拒否し、既存目録を保持 |
| グループ検索 | `group-output.test.js`、[移行照合](./after-move-validation.json) | fixtureの二子索引統合、実2,074文書の検索メタデータ・所属の移行前後照合。新しい検索順位方式の導入は対象外 |
| キャッシュ欠損・不完全目録 | `group-output.test.js`、[CI再利用比較](./remote-ci-artifact-comparison.json) | 入力・出力改変を拒否または再生成し、索引・ナビ欠落を停止。復元した成果物の比較は記録に明示したrun間に限る |
| ステージ・統合失敗 | `selective-output.test.js`、`group-output.test.js` | ステージ準備失敗でdistを保持、グループ衝突・欠損で既存目録を保持 |
| JS無効・オフライン・RTL・モバイル | [ブラウザー記録](./preview-validation.json)、`service-worker.test.js` | ローカル実ブラウザーで幅390、RTL、CSPによるscript無効、本文・局所ナビ・静的一覧・世代一致/不一致を確認。最新Worker配信先でのブラウザー再確認は未実施 |
| 新旧公開物の切替・復旧 | [復旧記録](./rollback-validation.json)、[復旧ブラウザー記録](./rollback-browser-validation.json)、`group-release-catalog.test.js`、`group-release-publisher.test.js` | ローカル旧成果物全ハッシュ復元とSW更新、試験用driverの旧本文復帰・新旧資産保持。Cloudflare上での独立Worker復旧は未実施 |

## 外部検証の入口

[Pages配信](./pages-preview-deployment.json)と[HTTP全件照合](./pages-preview-http.json)はコミット `5a17379` の統合成果物に対する証拠。後続のWorker実装を含む `c9bb3ff` の外部配信証拠ではない。

`c9bb3ff` は[Worker梱包](./worker-ci-prepared-package.json)まで照合済み。公開baseは `/docs/awesome`、公開2,150ファイル、所有単位8個＋入口1個。[初回配信候補](./WORKER_PREVIEW_PUBLICATION_CANDIDATE.md)は承認済み。[初回配信CIの2回目](./worker-preview-second-attempt.json)が入口状態読取のHTTP 403で停止し、Worker作成は未実行。利用者の設定後の[3回目](./worker-preview-third-attempt.json)はAPI読取を通過し、Wranglerの必要Node版との不整合を確認した。配信jobをNode 24へ修正して検証を継続する。

計画第7節の未完了2項目は維持する。初回HTTP確認に加え、一子更新、部分失敗時の到達性、競合制御、キャッシュ、新旧資産保持と復旧を実際の配信先で確認してから、計画全体の各契約・操作・成果物について最終監査する。


## 初回Worker外部検証の追記

コミット6031543の[実配信記録](./worker-preview-deployment.json)で初回9 Workerの作成・8単位と入口の全2,150ファイルのハッシュ照合・入口有効化を確認した。[追加HTTP検証](./worker-preview-http.json)27件も成功。これにより計画第7節の初回独立配信・経路・資産取得の項目は完了した。上記の初回未実施・認証待ちの記述は当時の状態であり、現在残るのは外部での更新・同時公開・部分失敗・キャッシュ・資産保持・復旧の検証である。

## 統合Pages本番公開の追記

コミット472bc7fの[配信記録](./pages-production-deployment.json)でrun 33966491244の品質job・本番job成功、unit 27件・runtime 211件、現行本番commitを確認した。[全件照合](./pages-production-validation.json)では全2,526ファイルの原文を本番ドメインまたは固定URLでハッシュ照合し、本番ドメイン側のCloudflare変換も限定した手順で確認。説明不能な差分は0件。[ブラウザー記録](./pages-production-browser.json)は公開後の既存タブ・検索・本文・言語切替・幅390の確認を対象とする。

標準の統合Pages本番切替は完了。[復旧先と手順](./PAGES_PRODUCTION_RUNBOOK.md)を保存したが、本番の実ロールバックは実行していない。独立Workerの残りの外部検証と計画全体の最終監査が完了したという意味ではない。
