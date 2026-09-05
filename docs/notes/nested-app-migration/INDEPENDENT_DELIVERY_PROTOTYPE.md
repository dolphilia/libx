# 入れ子グループの独立配信試作

2026-09-05。フェーズ7の実装準備。統合Pages配信の代替として採用確定したものではなく、外部公開はまだ行っていない。

## 所有目録から配信単位を生成する

`scripts/experimental/group-release-catalog.js` は既存のグループ出力所有目録と共通app registryから、各子と共有データの配信単位を生成する。カテゴリ名を振り分け条件にしない。同じカテゴリの文書を異なる子が所有していても、公開URLの所有者を分離できる。

各単位の識別子は、所有者、公開base、並べ替えたファイルのパス・ハッシュ・サイズ・型から決める。全体のリリース識別子と各単位の識別子を分け、一子の本文変更だけでは他の子の配信先が変わらない。配信先名は生成物であり、group設定へ所属や宛先を重複記載しない。

生成前に未知所有者、不完全な子、重複URL、不正パス、入口・404の欠損を拒否する。配信元の検証では、追加・削除・内容変更・symlinkも拒否する。小規模fixtureの4テストとlintは成功した。その後、`package-group-workers.js`で設定・資産・入口Workerの生成を追加し、生成設定・URL・HEAD・404・転送先障害を含む計5テストが成功した。既存ディレクトリへの上書きやsymlinkを含む親への梱包を拒否する。

[実データの検証結果](./independent-release-catalog.json)では、既存の統合済みAwesome出力2,150ファイル、173,274,929 bytesを全件照合し、7子と共有データの計8単位へ一意に分類した。共有データは17ファイル、2,714,520 bytes。子単独distの計測値には統合時に除く共有データなどが含まれるため、この数値とは直接比較しない。転送量やCloudflare公開時間の実測でもない。

## 次の実装・検証条件

1. 生成した単位ごとにStatic Assets用設定を作り、元の公開パスを保った資産を配置する。公開入口のWorkerは、同じ目録から生成するservice bindingsで所有者へ転送する。本文、末尾スラッシュ、index別名、HEAD、クエリ、404、CSS/JS、共有ナビを実ランタイムで検証する。
2. 配信単位を内容別の名前で固定し、変更した単位だけを先に配置・検査してから、固定目録を持つ入口Workerを切り替える。通常のservice binding先を上書きするだけでは、古い入口も新しい本文を参照してしまい、リリース固定にはならない。
3. 部分失敗では入口を切り替えず、旧目録と旧配信単位を残す。ロールバックは入口を旧目録へ戻す。古いHTMLが参照する資産の保持と、旧目録からの到達性を別々に検証する。
4. 同時公開はグループ単位で直列化し、切替直前に基点リリースが現在値と一致することを検査する。順番待ちだけでは、古い入力の公開が後から最新を上書きすることを防げない。この制御は未実装。
5. 内容別Worker名を使うと保持世代に応じてWorker数が増える。契約上限と実際の更新頻度を確認し、使用中の目録・復旧用世代から参照される単位を削除しないGCを設計する。現段階で保持世代数や本番運用方式を固定しない。
6. 統合Pagesの公開処理だけの時間・転送・失敗を計測し、運用とリクエスト処理が増える独立配信を採用する価値があるか判断する。容量削減だけを根拠にフェーズ7を完了にしない。

## 確認した公式資料

- [Static Assetsのbinding](https://developers.cloudflare.com/workers/static-assets/binding/): Workerから資産bindingを呼び出す仕組み。
- [HTTP service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/http/): Worker間のHTTP転送。
- [Workers best practices](https://developers.cloudflare.com/workers/best-practices/workers-best-practices/): ストリーム処理やbindingを使う構成の確認。

ローカルWranglerは4.60.0。最初のversion確認では既定ログ先への書き込みがsandboxに拒否されたため、以後のローカル試作では`WRANGLER_LOG_PATH`をworkspace内に指定する。権限エラーはCloudflareでの動作結果ではない。

## Worker実ランタイムでの検証

[検証結果](./independent-workers-preview.json)では、Wrangler 4.129.0、互換日付2026-09-05で、7子・共有データ・入口の9プロセスを独立起動した。全2,150ファイルを入口経由で取得し、所有目録のSHA-256と全件一致した。本文・CSS/JS・共有ナビ・検索を含む。加えて各単位のHEAD、末尾スラッシュなしとindex.html別名の308、クエリ保持を計24ケース検証し、未知URLの404本文一致、POSTの405を確認した。全プロセスは検証後に停止した。

service bindingには名前付き`AssetDelivery`を指定し、その`WorkerEntrypoint`から`this.env.ASSETS.fetch(request)`を呼ぶ。既定入口へのbindingでは上流500が発生し、名前付き入口と独立プロセスの組合せで取得が成功した。複数configを一つのdevコマンドへ渡した場合は、Wrangler 4.60.0と4.129.0の双方で上流500を観測した。これをCloudflare本番側の制約とは断定しない。

公式CLIによる入口binding・runtime型生成も成功した。最初の入口Worker dry-runは533.27 KiB、gzip 35.89 KiBで成功したが、これは名前付き入口へ修正する前の値であり、最終配信バンドルの計測値には使わない。依存lockは変更せず、最新Wranglerは一時実行した。

上記schema 1検証時の`revision`は所有ファイルの目録を識別する。Workerコード・互換設定まで含むリリース固定はまだ実装していないため、本番で同じservice名への上書きを防げる状態とは扱わない。次にこの識別範囲を拡張し、公開済み単位の再利用、切替・復旧・並行更新・旧アセット保持を検証する。外部公開の所要時間・料金・実際のCloudflare上での動作は未検証。

## schema 2のリリース固定と梱包照合

現在の目録はschema 2。資産Workerの実コード、互換日付・flags・資産設定、Wrangler版、梱包処理のハッシュを各配信単位の識別子へ含めた。入口のコード・設定は全体リリースへ含める。資産Workerや梱包処理を変更すると全単位が更新され、入口だけを変更すると各子の配信先は維持される。一子の本文だけを変更した場合も他単位を維持する。コードと設定は生成前に一度読み取り、その同じスナップショットを梱包へ使用する。

梱包時にコード・設定・目録・資産の全ファイルを封印し、梱包処理が返した外部ハッシュと照合する。ディレクトリ内の目録だけから期待ハッシュを読み直す使い方はしない。内容変更・欠損・余剰・目録改変を拒否する。7テストとlintが成功し、[実データ梱包の照合](./independent-worker-package-integrity.json)では2,171ファイル、174,594,075 bytesを確認した。この数は封印用目録自身を除き、Workerコード・設定を含む。dry-run後も梱包照合が成功した。

ここで固定したものはソース・設定・資産の梱包であり、Cloudflareに配置済みのWorkerの同一性を検証したものではない。公開時の上書き防止、実際のバンドル・配置先照合、基点リリースの比較と切替、旧資産保持は引き続き実装・検証する。以前の全2,150ファイルHTTP照合はschema 1の記録として保存し、schema 2のリモート配信実績へ読み替えない。


## 旧アセットの保持（ローカル検証）

梱包時に前世代のディレクトリと外部SHA-256を指定し、検証済み目録の旧 `assets/` URLを新入口へ引き継ぐ処理を追加した。保持先は過去の内容固定serviceで、新パッケージへ旧単位を複製しない。保持経路も全体リリース識別子に含めるが、現在の各子の識別子には影響しない。本文や共有ナビの削除は保持対象にせず、削除本文を復活させない。

3世代のfixtureで全世代のJS取得と削除本文の404を確認した。同一アセットURLの内容差し替え、異なるグループ、改変された前世代梱包、重複経路を拒否する。計9テストが成功した。これは生成した経路とハンドラーのローカル試験であり、Cloudflare上の旧serviceの存続・配置順・同時切替を保証する証拠ではない。保持世代は自動削除せず、到達性を確認するGCと公開時の参照先確認を引き続き実装する。

## 版の固定と公開制御の確認事項

2026-09-05に[version overridesの公式資料](https://developers.cloudflare.com/workers/versions-and-deployments/version-overrides/)を再確認した。版指定は現在のdeploymentに含まれる版に限られ、対象外なら通常の割合配信になる。1つのdeploymentで扱える版は2つ。このため、版指定ヘッダーだけを複数世代の厳密な固定や旧資産保持の根拠にしない。試作では内容別serviceの保持を継続する。

同資料では受信Requestをそのままservice bindingへ渡すと版指定ヘッダーも引き継がれる。生成済み目録で配信先を選ぶ入口では、呼出元の `Cloudflare-Workers-Version-Overrides` と `Cloudflare-Workers-Version-Key` を転送前に削除する。通常の条件付き取得ヘッダーは維持する。HEADの400・404・503本文が空であることも加え、関連10テストが成功した。

公開制御の次の実装では、グループ単位の直列実行、切替前の基点deployment照合、変更単位の先行配置と検査、入口の最後の切替、未知結果からの状態再取得を接続する。ローカルの目録検査だけでCloudflare上の原子的な切替を保証したとは扱わない。

## 公開順序と復旧の実行制御

`publish-group-release.js`に公開順序を実装した。外部配置を行うdriverはまだ接続していない。制御テストではdriverを試験用実装に置き換え、呼出順と障害時の分岐を検証する。CloudflareのAPIが原子的な比較付き切替を提供しているとの主張ではない。

1. 外部SHA-256で梱包全体を照合し、グループごとの状態ディレクトリに排他lockを取る。初回は明示的なnull、通常は利用者が確認した基点deployment IDを必須とする。現在値が違えば配置を始めない。
2. 内容固定serviceが未配置の子だけを配置する。配置済みの子もrevisionと実体を検査する。保持アセットの旧serviceも取得できることを確認する。
3. 梱包を再照合し、入口候補の版を準備・検査する。この段階では現在の入口は変更しない。
4. 切替直前に基点のdeployment ID・version ID・revisionを再照合し、入口を最後に切り替える。公開後の状態が候補と一致した場合にだけ成功記録を確定する。
5. 入口切替前の失敗は旧入口を保持する。再試行では配置済みの内容固定serviceを検査して再利用する。切替開始後に応答が失われた場合は`pending.json`を残し、次の公開を拒否する。`reconcileGroupRelease`が配置先で候補の稼働を確認できた場合にだけ解消する。旧値が見えただけでは「切替されなかった」と決めて再送しない。

排他は同じ状態ディレクトリを利用するプロセス間で有効で、別Nodeプロセスからの競合も拒否できた。別ホストのCIには共通のグループ単位の直列化が必要。管理画面を含む別経路から同じ入口を書き換える運用は、このローカルlockでは制御できない。異常終了後のlockや、旧状態のまま残る未確定記録を時間経過だけで消す処理は設けていない。

### driverが実装する境界

| 操作 | 必須の意味 |
| --- | --- |
| `readActive(groupId)` | 未配置ならnull、配置済みならdeployment ID・version ID・64桁revisionを返す。読取失敗をnullへ変換しない |
| `readUnit(service)` | 配置済みrevisionと照合に必要な識別子を返す。不存在以外の読取失敗は失敗として扱う |
| `uploadUnit(unit, directory)` | 内容固定serviceを新規配置する。異なる既存内容を上書きしない |
| `verifyUnit` / `verifyRetainedAsset` | 実際の配置先と期待するコード・設定・資産の照合を行い、不一致なら例外にする |
| `prepareRouter` / `verifyRouter` | 現在の入口を変更せず、候補versionを作成し、生成経路と全参照先を検査する |
| `promoteRouter(groupId, candidate, base)` | 直列化された公開経路で候補を切り替える。曖昧な応答を成功へ変換したり盲目的に再送したりしない |

### 復旧梱包

`package-group-rollback.js`は、外部ハッシュで検証した復旧対象と現在の梱包から、新しい復旧用梱包を作る。対象世代の本文・ナビ・Workerコード・設定を戻し、現在世代までに参照されたアセットを保持する。単純に旧入口versionへ戻すだけでは、開いたままの新HTMLが参照するJSを失うため、保持対象を含む新しい目録として固定する。梱包処理自身の識別子には実行中の実装のハッシュを使う。

復旧対象以降に増えた本文は404となり、対象世代の本文と新旧JSの両方を取得できることをfixtureで確認した。復旧梱包も通常と同じ公開制御を通し、現在の基点を確認してから入口を切り替える。保存済みの旧単位が存在すれば再配置しない。古い基点を指定した復旧は拒否する。

関連18テストとlintが成功した。ここまでで公開順・削除・復旧方針とローカル制御を定義したが、実際のCloudflare driver、CI直列化、独立配信プレビューでの切替・障害・復旧検証は残る。既存Pages公開workflowには試作を接続していない。

## Cloudflare接続の読取・CLI境界

`cloudflare-group-state.js`を追加した。Cloudflare APIの最新deploymentと版を読み、単一版100%・版ID・libxのrevision注記・コードetagを確認する。互換日付、flags、資産binding、serviceと名前付きentrypointの一致も照合する。認証、制限、サーバー、通信の失敗は未配置へ変換しない。不存在扱いはWorker取得のHTTP 404・10007に限定する。API tokenはAPI originだけに渡し、redirectを許可しない。

etagはAPIのコード識別情報であり、これだけでローカル梱包のSHA-256と一致したと扱わない。実driverには、検証済み梱包からアップロードした版ID・etagを記録し、再利用時にその記録と配置先を照合する処理が必要。

`wrangler-group-versions.js`はWrangler 4.129.0の`versions upload`と`versions deploy <版ID>@100 --yes`を引数配列で起動する。認証をCLI引数に含めず、環境変数で渡す。`WRANGLER_OUTPUT_FILE_PATH`のJSONLについて操作型・schema版・Worker名・版ID/deployment IDを照合し、人間向けの成功文言から結果を推測しない。CLI失敗を自動再送せず、操作記録を封印済み梱包の外に保存する。

読取5件・CLI境界3件の計8テストが成功した。HTTP応答とCLI実行は試験用実装であり、外部Workerへのアップロード実績ではない。実driverへの結合、アップロード記録の保持、公開本文のHTTP照合、プレビュー用設定とCI接続は継続する。

2026-09-05に確認した根拠:

- [Get Version Detail](https://developers.cloudflare.com/api/resources/workers/subresources/scripts/subresources/versions/methods/get/): 版のresources、コードetag、互換設定。
- [Wrangler Workers commands](https://developers.cloudflare.com/workers/wrangler/commands/workers/): 版アップロードと版の公開を分ける操作。
- [Worker Preview URLs](https://developers.cloudflare.com/workers/versions-and-deployments/preview-urls/): 新しい版を公開入口の切替前に確認するURLと`preview_urls`設定。
- 実際に取得済みのWrangler 4.129.0 CLI実装と`--help`: `version-upload`・`version-deploy`のJSONL出力、版一覧の順序、Worker不存在コードを確認した。`version_traffic`のJSON表現には依存せず、公開割合はAPIで再照合する。

## driverの結合と利用CLI

`cloudflare-group-driver.js`で公開制御とAPI読取・Wrangler操作・HTTP照合を結合した。検証済み梱包からアップロードした版ID、revision、コードetag、設定ハッシュ、account ID、プレビューURLを配置記録として保存する。既存Workerに対応する記録がない場合は、上書きも再利用もしない。稼働版がなくても未記録のアップロード版が残っていれば停止する。

子と保持アセットの実体を版固有URLから取得し、全ファイルのサイズとSHA-256を照合する。入口候補は生成目録の全URLとrelease応答ヘッダーを検査する。HTTP処理はAPI認証を付けず、並列数を制限し、期待サイズを超えた本文を止める。版の識別子を確認したプレビューoriginだけを使い、別originへの経路やredirectを拒否する。

Wranglerは操作用コピーで起動する。元の封印済み梱包はアップロードの前後にも照合し、CLIによる一時出力や設定生成の混入を防ぐ。配置記録・未確定記録を含む状態ディレクトリは、次回CIへ引き継ぐ必要がある。操作用コピーやログと、引き継ぐ配置記録は今後のCIで分離する。

利用入口は`node scripts/experimental/group-workers.js --help`。梱包生成、復旧梱包、梱包検証、配置状態確認、公開、未確定結果の照合を提供する。`package --preview`は版固有URLを有効化し、入口のworkers.devを検証先として使う。外部操作を始める前に、公開対象の梱包ハッシュ・Worker名・基点を確認する。`publish`は基点IDの省略や不正値を接続前に拒否する。

結合テストではAPI応答とCLIプロセスを試験用実装に置き換え、それ以外の公開制御、状態読取、CLI結果解析、配置記録、生成router、HTTPハッシュ照合を実行した。初回3単位＋入口、更新1単位＋入口、復旧入口のみの計7アップロード、復旧後の旧本文と新JSの取得、配置記録欠落・本文改変の拒否、切替応答喪失後の照合が成功した。関連30テストとlintが成功。これはCloudflareの実挙動を確認した証拠ではない。

[CLI実データ梱包](./independent-workers-cli-package.json)ではAwesome8単位・2171梱包ファイル・174594684 bytesを生成した。Wrangler 4.129.0の入口dry-runは513.91 KiB、gzip 30.91 KiB。初回の相対outdirが梱包内へ解決されたため照合が追加2ファイルを拒否し、その2ファイルだけを除去して原封印へ照合後、絶対outdirで再実行した。最終dry-run後の全梱包照合も成功した。既存のschema 1 HTTP検証やschema 2初期梱包の証拠は書き換えていない。

残る作業はCI直列化・状態artifactの引継ぎ・公開ゲートの接続、独立Workerの外部プレビュー、実配置での更新・失敗・復旧・キャッシュ確認。Pagesプレビューへの承認を独立Workerへの配信承認とは扱わない。
