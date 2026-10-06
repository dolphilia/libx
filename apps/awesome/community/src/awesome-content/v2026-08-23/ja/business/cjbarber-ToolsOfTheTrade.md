---
title: "Awesome Hacker News Tools of the Trade"
description: "Hacker News、AngelList、Quora由来の開発・事業ツールを、料金、機能、ホスティング形態で比較する一覧。"
licenseSource: "github-cjbarber-ToolsOfTheTrade-readme-md"
---

# Awesome Hacker News Tools of the Trade

[Hacker News](https://news.ycombinator.com)、AngelList、Quoraで紹介された開発・事業ツールをまとめています。ホスト型とセルフホスト型のサービスを含み、ソフトウェア開発、運用、マーケティング、決済、事業管理のツールを表で比較できます。

この一覧は[Joshua Schachterによる2010年の議論](https://news.ycombinator.com/item?id=1769910)と[Sharjeel Qureshiによる2013年の議論](https://news.ycombinator.com/item?id=5235137)から発展し、2015年以降に向けて拡張されました。2010年の質問はCVS、メール、メーリングリストなどのホスト型の代替を対象とし、EC2やHerokuなどの本番用サービスを除外していましたが、拡張後の一覧には本番用プラットフォームとセルフホスト型のツールも含まれます。

料金、サービス名、機能、提供元の主張は、収録した原版の記載に基づきます。ホスティング形態のタグでは、`Hosted`がホスト型サービス、`Self-hosted`がセルフホスト型ソフトウェアを表します。

## 本人確認<a id="identity-verification"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Cognito](https://cognitohq.com) | [@getcognito](https://twitter.com/getcognito) | - | 電話番号から始める本人確認。 |
| [Onfido](https://onfido.com) | [@Onfido](https://twitter.com/Onfido) | $2/本人確認 | 個人の本人確認、書類確認、顔認識。 |

## ブラウザー・メールのテスト<a id="browseremail-testing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [BrowserStack](https://www.browserstack.com) | [@browserstack](https://twitter.com/browserstack) | $29/月 - $199/月 | Web上で実際のブラウザーを使うテスト。 |
| [Litmus](http://litmus.com) | [@litmusapp](https://twitter.com/litmusapp) | $79/月 - $159/月 | 30種類以上の実際のメールクライアントと端末で、メールキャンペーンを数分でプレビュー。 |
| [Sauce Labs](https://saucelabs.com) | [@saucelabs](https://twitter.com/saucelabs) | $19/月 - $298/月 | 数百種類の実際のブラウザーとプラットフォームで、Webアプリとモバイルアプリをテスト。 |
| [EmailOnAcid](https://www.emailonacid.com) | [@emailonacid](https://twitter.com/EmailonAcid) | $44/月 - $260/月 | メールクライアントごとのメール表示を確認。 |
| [Rainforest QA](https://www.rainforestqa.com) | [@rainforestqa](https://twitter.com/rainforestqa) | $500/月 - $2000/月 | 統合テスト。 |
| [DebugMail](https://debugmail.io) | - | 無料 | 開発者向けの使いやすいモックメール（SMTP）サーバー。 |
| [Mailosaur](https://mailosaur.com) | [@mailosaur](https://twitter.com/mailosaur) | $19/月 - $199/月 | 業務向けの仮想SMTPサーバーによるメール、SMS、スパムのテスト。 |
| [Mailtrap](https://mailtrap.io) | [@Mailtrap](https://twitter.com/Mailtrap) | 無料 - $299.99/月 | 開発・ステージング環境向けのモックSMTPサーバー。テスト用のREST APIを提供。 |
| [testmail.app](https://testmail.app) | [@testmailapp](https://twitter.com/testmailapp) | 無料 - $29/月 | 無制限のメールボックスとGraphQL APIによる、メールのエンドツーエンドテストの自動化。 |
| [Polypane](https://polypane.rocks) | [@polypane](https://twitter.com/polypane) | 無料試用 - $12+/月 | Webサイトやアプリの作成・テストを目的に、一から設計されたブラウザー。 |

## バグ・課題管理<a id="bugissue-tracking"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [BitBucket Issues](https://bitbucket.org) | [@bitbucket](https://twitter.com/bitbucket) | $10/月〜$200/月、非公開コードリポジトリ数は無制限 | GitとMercurialのリポジトリをクラウドでホスト、管理、共有。開発者5人までのチームに、非公開リポジトリを個数無制限で無料提供。 |
| [BugHerd](https://bugherd.com) | [@bugherd](https://twitter.com/bugherd) | $29/月 - $180/月 | 顧客のフィードバックを対応可能なタスクに変換。タスクボードでプロジェクトの進捗とメンバーの作業を確認し、ドラッグ＆ドロップでタスクの割り当てと予定設定が可能。 |
| [GitHub Issues](https://github.com) | [@GitHub](https://twitter.com/GitHub) | $7/月 - $50/月 | あらゆる規模のリポジトリ向けの、共同作業ツールを備えたコードホスティング。公開プロジェクト向けツールはコミュニティに開放され、非公開プロジェクト向けツールは保護される。原版では、1,320万件以上のリポジトリを持つ最大のコードホストと説明されている。 |
| [GitLab Issues](https://about.gitlab.com) | [@gitlab](https://twitter.com/gitlab) | 無料 | オープンソースのコード共同作業ソフトウェア。原版では、世界で10万以上の組織が利用していると説明されている。GitLab.comまたはセルフホスト環境で非公開リポジトリを個数無制限で利用可能。Enterprise Editionは広範なLDAP対応を含む。 |
| [Huboard](https://huboard.com) | [@huboard](https://twitter.com/huboard) | $7/月 - $24/月 | GitHubの課題を使った、GitHubリポジトリのプロジェクト管理。 |
| [JIRA](https://www.atlassian.com/software/jira) | [@JIRA](https://twitter.com/JIRA) | ホスト型は$10/月、セルフホスト型は$10/年 | 製品の計画・開発向けの課題管理。課題の登録・整理、作業の割り当て、チームの活動追跡をデスクトップやモバイルのインターフェースから行える。原版では、数千のチームが利用していると説明されている。 |
| [Lighthouse](https://lighthouseapp.com/) | [@lighthouseapp](https://twitter.com/lighthouseapp) | $25/月 - $100/月 | 大企業や小規模な自己資金のチーム向けのチケット管理とプロジェクト共同作業。5人のチームから50人のスタジオまでを対象とする。 |
| [Pinitto.me](https://pinitto.me) | [@Pinittome](https://twitter.com/pinittome) | - | 仮想コルクボード上の付箋を提供するオープンソースソフトウェア。 |
| [Sifter](https://sifterapp.com) | [@sifterapp](https://twitter.com/sifterapp) | $29/月 - $149/月 | 設定作業を減らすように設計されたワークフローによるバグ管理。開発チームはバグ管理プロセスに関する記事も随時公開。 |
| [Usersnap](https://usersnap.com) | [@usersnap](https://twitter.com/usersnap) | $19/月-$99/月 | Webプロジェクト向けの視覚的なバグ報告。問題の再現と修正に役立つよう、各報告に視覚的なフィードバックとブラウザー情報を添付。 |
| [Instabug](https://instabug.com) | [@instabug](https://twitter.com/instabug) | $49/月-$349/月 | モバイルアプリのバグ報告とアプリ内フィードバック。ベータテスターや利用者からの報告には、詳細なフィードバック、スクリーンショット、端末情報、ネットワークログ、再現手順などが含まれ、デバッグや製品バックログの優先順位付けに活用できる。収録されたAndroid SDKの説明には、GitHub、Jira、Slack、Zendeskなどの外部ツールとの連携も記載されている。 |

## 計画・プロジェクト管理<a id="planning--project-management"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Aha!](https://www.aha.io) | [@aha_io](https://twitter.com/aha_io) | $69/月。スタートアップ向けプランは要問い合わせ | 製品戦略と視覚的なロードマップの作成。 |
| [Sprintly](https://sprint.ly) | [@sprintly](https://twitter.com/sprintly) | $49/月- $399/月 | ソフトウェア開発者の進捗をリアルタイムで優先順位付け、タグ付け、管理、見積もり、計測。 |
| [Podio](https://podio.com) | [@Podio](https://twitter.com/Podio) | 無料 | チームの共同作業と、Podio開発チームからのニュースや見解。原版では、チームの活動開始を2009年としている。 |
| [Flow](https://www.getflow.com) | [@flowapp](https://twitter.com/flowapp) | $19/月 - $249/月 | WebとiPhone向けの共同タスク管理。メールの受信箱でプロジェクトを管理する方法の代替となる。 |
| [Basecamp](https://basecamp.com) | [@basecamp](https://twitter.com/basecamp) | $20/月 - $150/月 | 店舗設計の整理、什器の開発、職人の管理などのプロジェクト管理。原版では、公式アカウントが月曜から金曜の午前9時〜午後6時（CT）に顧客を支援し、主に口コミで世界第1位のプロジェクト管理ツールになったと説明されている。 |
| [Apollo](https://www.apollohq.com) | [@applicomhq](https://twitter.com/applicomhq) | $23/月 - $148/月 | プロジェクト、連絡先、個人の活動や多忙な予定を追跡する、統合型のプロジェクト・連絡先管理。 |
| [Pivotal Tracker](https://www.pivotaltracker.com) | [@pivotaltracker](https://twitter.com/pivotaltracker) | $7/月 - $175/月 | プロジェクトを事業目標に結び付いた小さなストーリーに分割。各ストーリーの相対的な複雑さをポイントで見積もり、バックログ内の優先順位を設定。 |
| [Asana](https://asana.com) | [@asana](https://twitter.com/asana) | $50/月 - $800/月 | メールを使わずにチームの作業を調整。プロジェクトの優先順位付け、注文の追跡、増え続けるやることリストの管理に対応。 |
| [WeekPlan](https://weekplan.net) | [@weekplan](https://twitter.com/weekplan) | $7/月 - $19/月 | 『The 7 Habits of Highly Effective People』に着想を得た時間管理。週ごとの目標と表示、4象限のマトリクス、ポモドーロタイマー、共有ワークスペースなどを提供。 |
| [Trello](https://trello.com) | [@trello](https://twitter.com/trello) | $5/月 | 日々の作業、サイドプロジェクト、長期計画の共同整理。 |
| [Blossom](https://www.blossom.co) | [@blossom](https://twitter.com/blossom) | $19/月 - $149/月 | 誰が何をなぜ行っているかを示し、開発プロセスを一か所にまとめるアジャイルなプロジェクト管理。カンバンの原則に基づき、反復的なリリース周期とチーム・組織のワークフローの継続的改善を重視。 |
| [Redmine](https://www.redmine.org) | - | - | Ruby on Railsで構築された柔軟なプロジェクト管理Webアプリ。複数のプラットフォームとデータベースに対応。 |
| [JIRA Agile](https://www.atlassian.com/software/jira/agile) | [@jira](https://twitter.com/JIRA) | $10/月 - $30/月 | JIRA、Confluence、Bitbucketなどの開発元による、計画、共同作業、コーディング、サポートのためのチーム向けソフトウェア。 |
| [Tom's Planner](https://www.tomsplanner.com) | [@tomsplanner](https://twitter.com/tomsplanner) | $9/月 - $19/月 | ドラッグ＆ドロップで作成、共同編集、共有できるWebベースのガントチャートソフトウェア。 |
| [Breeze](https://www.breeze.pm) | [@BreezeTeam](https://twitter.com/BreezeTeam) | $29/月 - $129/月 | 作業内容、担当者、ワークフロー上の位置、所要時間を追跡。 |
| [Cushion](https://cushionapp.com/) | [@cushionapp](https://twitter.com/cushionapp) | $8/月 - $48/月 | フリーランス向けの計画と年間の業務量管理。仕事を引き受けすぎることや休暇を計画し忘れることへの対策として、フリーランスのチームが作成。 |
| [Clickup](https://clickup.com) | [@clickup_app](https://twitter.com/clickup_app) | $0 - $5/月 | 直感的なインターフェースでプロジェクトを整理する生産性ソフトウェア。原版では評価第1位と説明されている。 |
| [Ora](https://ora.pm) | [@oratask](https://twitter.com/oratask) | $0 - $8/月 | 製品や事業全体でプロジェクト、タスク、時間、コミット、状況報告を追跡する、プロジェクト管理とチームの共同作業。 |
| [Slate](https://heyslate.com/) | [@_heyslate](https://twitter.com/_heyslate) | $15/月 | フリーランスのデザイナーと開発者向けの計画管理。予定、プロジェクト、財務を一か所にまとめる。 |

## 時間追跡<a id="time-tracking"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Toggl](https://toggl.com) | [@toggl](https://twitter.com/toggl) | 無料 - $20/ユーザー/月 | 速さと使いやすさを重視した時間追跡。 |
| [Clockify](https://clockify.me) | [@clockify](https://twitter.com/clockify) | 無料 - $9/ユーザー/月 | 個人やチーム向けのワンクリックの時間追跡。原版では、100%無料の唯一の時間追跡ソフトウェアで、Togglのように動作し、機能数と利用者数が無制限だと説明されている。 |
| [Hubstaff](https://hubstaff.com) | [@hubstaff](https://twitter.com/Hubstaff) | 無料 - $20/ユーザー/月 | リモートチームの管理向けの時間追跡。登録、デスクトップアプリのダウンロード、開始ボタンの操作で追跡を開始。 |
| [Tickspot](https://www.tickspot.com/) | [@tickspot](https://twitter.com/tickspot) | 無料 - $149/月 | チームのプロジェクト採算管理向けの時間追跡。iOS、Android、Apple Watch、デスクトップで利用可能。 |
| [Kimai](https://www.kimai.org/) | [@kimai_org](https://twitter.com/kimai_org) | セルフホスト | 無料でオープンソースの時間追跡。年、月、日、顧客、プロジェクト、活動などの区分で、必要なときに集計を表示。 |
| [Timetrap](https://github.com/samg/timetrap) | - | 無料 | シンプルでオープンソースのコマンドライン時間追跡。 |
| [OfficeClip](https://www.officeclip.com/web/timesheet) | @OfficeClip | 無料 - $12/ユーザー/月 | 小規模事業向けの時間追跡。利用者数と利用期間が無制限の無料利用が可能。ホスト型とセルフホスト型を提供。 |

## アプリ開発者向けツール<a id="app-developer-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [App Annie](https://www.appannie.com) | [@appannie](https://twitter.com/appannie/) | 無料 | アプリストアの分析、アプリの順位、マーケット情報のためのアプリストアデータ。 |
| [App Figures](https://appfigures.com) | [@appfigures](https://twitter.com/appfigures) | $9/月 | 開発者とパブリッシャー向けのアプリ追跡。 |

## ローカライズと国際化<a id="localization--internationalization"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Localize.js](https://localizejs.com) | - | $25/月 - $150/月 | 数行のコードによるWebサイトの翻訳。 |
| [Gengo](https://gengo.com) | [@GengoIt](https://twitter.com/gengoit) | $0.06 - $0.17/語 | 人による翻訳のAPI。 |

## 事業・アクセス分析<a id="business--traffic-analytics"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Amplitude](https://amplitude.com) | [@Amplitude_HQ](https://twitter.com/Amplitude_HQ) | $299/月 | 意思決定者向けのモバイル分析。 |
| [Paddle](https://paddle.com/) | [@PaddleHQ](https://twitter.com/PaddleHQ) | $0 - $2500/月 | ページビューではなく利用者の行動を計測する、モバイル・Webアプリ向けの独自分析。商品レビュー、モバイルゲームのステージのプレイ、購入などの行動に対応する独自イベントとデータを扱える。 |
| [Chartbeat](https://chartbeat.com) | [@chartbeat](https://twitter.com/chartbeat) | $9.95/月 - $49.95/月 | Webサイトのアクセスと閲覧者の行動をリアルタイムで把握。訪問者やコンテンツへの関わり方を示し、閲覧者の獲得や出来事への対応に役立つ。 |
| [Chartio](https://chartio.com) | [@chartio](https://twitter.com/chartio) | - | ドラッグ＆ドロップのインターフェースでデータを探索・可視化。インタラクティブなグラフやダッシュボードの作成、表から可視化へのワンクリックの切り替え、データの絞り込み、多くのグラフで設定不要のドリルダウンに対応。 |
| [Clicky](https://clicky.com) | [@clicky](https://twitter.com/clicky) | $9.99/月 - $19.99/月 | 訪問者ごとの行動を把握するリアルタイムのWeb分析。ユーザー名やメールアドレスなどの独自データを付加し、訪問者を個別に分析して全履歴を表示。 |
| [Fathom Analytics](https://usefathom.com/) | [@usefathom](https://twitter.com/usefathom) | $0-79/月 | 利用者の個人データを追跡・保存しないWebサイト統計。 |
| [Gauges](https://get.gaug.es) | [@gauges](https://twitter.com/gauges) | $6-$48/月 | 訪問者数、流入元、移動先を示すリアルタイムのWeb分析。 |
| [GoatCounter](https://www.goatcounter.com) | [@arp242_martin](https://twitter.com/arp242_martin) | 個人利用またはセルフホストは無料 | 個人データを追跡しないシンプルなWeb統計。[オープンソース](https://github.com/zgoat/goatcounter)。 |
| [GoSquared](https://www.gosquared.com) | [@gosquared](https://twitter.com/GoSquared) | £21.60 - £396/月 | 使いやすさを重視したリアルタイムのWeb分析。 |
| [Google Analytics](https://marketingplatform.google.com/about/analytics/) | [@GMktgPlatform](https://twitter.com/GMktgPlatform) | - | 広告のROIを測定し、Flash、動画、ソーシャルネットワークのサイトやアプリを追跡。 |
| [Heap Analytics](https://heapanalytics.com) | [@heap](https://twitter.com/heap) | 0 - $599+ | コード不要で、WebとiOSのデータを即座に過去にさかのぼって分析。 |
| [Improvely](https://www.improvely.com) | [@improvelycom](https://twitter.com/improvelycom) | $29 - $899/月 | マーケティングキャンペーンのコンバージョン追跡とクリック詐欺の監視。 |
| [KISSmetrics](https://www.kissmetricshq.com/) | [@kissmetrics](https://twitter.com/kissmetrics/) | $150/月 - $500/月 | ブラウザーや端末をまたいだ活動を個人に結び付け、利用者の行動を把握。6か月後に再訪した利用者も追跡。 |
| [Keen IO](https://keen.io) | [@keen_io](https://twitter.com/keen_io) | $0 - $2000+/月 | データ収集と独自分析の構築のためのAPI。 |
| [Localytics](https://www.localytics.com) | [@localytics](https://twitter.com/localytics/) | 月間アクティブユーザー（MAU）1万人まで無料、超過時は$200/月〜$2700/月 | モバイル・Webアプリの分析と統合マーケティング。有効な施策の把握、顧客への働きかけ、新規顧客の獲得を一つのプラットフォームで行える。 |
| [Matomo](https://matomo.org) | [@matomo_org](https://twitter.com/matomo_org) | - | 個人のブログ運営者、小規模事業者、大企業向けの分析。事業や読者の状況を理解し、成長につなげる。 |
| [Mixpanel](https://mixpanel.com) | [@mixpanel/](https://twitter.com/mixpanel) | $150/月 - $2000/月 | ページビュー数に頼らず、アプリ内の顧客の行動を計測してエンゲージメントを評価。 |
| [Segment](https://segment.com) | [@segment](https://twitter.com/segment) | $29/月 - $349/月 | 一度の連携で外部ツールへデータを送る、単一のデータパイプライン。 |
| [Snowplow](https://snowplowanalytics.com) | [@SnowPlowData](https://twitter.com/SnowPlowData) | - | Webサイトのデータをシンプルにも高度にも分析できる、柔軟で拡張性のあるWeb分析。 |
| [Inspectlet](https://inspectlet.com) | - | $0/月 - $499/月 | マウスの動き、スクロール、クリック、キー入力を含む、訪問者のWebサイト利用セッションを動画として記録。 |
| [Plausible](https://plausible.io) | - | £6/月 - £150/月 / 無料 | プライバシーを重視したオープンソースの分析。ホスト型SaaSまたはセルフホスト型で利用可能。 |

## コンバージョン最適化・A/Bテスト<a id="conversion-optimization--ab-testing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Optimizely](https://www.optimizely.com) | [@optimizely](https://twitter.com/optimizely) | $17/月 - $359/月 | エンゲージメント、クリック、コンバージョン、登録など、利用者が定義する計測可能な行動を独自の目標として追跡するA/Bテスト。 |
| [Visual Website Optimizer](https://vwo.com) | [@VWO](https://twitter.com/VWO) | $49/月 - $129/月 | Webサイトやランディングページの複数版をA/Bテストし、売上やコンバージョンの成果を比較。マーケティング担当者がIT部門のリソースなしで使える設計。 |
| [EyeQuant](https://www.eyequant.com) | [@eyequant](https://twitter.com/eyequant) | $199/月 - $999/月 | 公開中のWebサイトやモックアップをコード不要で数秒以内に分析。訪問直後の数秒で利用者が何を見て、何を見落とすかを把握し、コンバージョンの改善に役立てる。 |
| [Optimize by Google](https://optimize.google.com) | - | 無料 | Webページの複数のパターンをテストし、指定した目標に対する成果を比較。 |

## ユーザー管理<a id="user-management"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Okta](https://developer.okta.com/) | [@OktaDev](https://twitter.com/OktaDev) | 無料 | Web・モバイルアプリに認証、認可、ユーザー管理を数分で追加。 |
| [Auth0](https://auth0.com) | [@auth0](https://twitter.com/auth0) | - | アプリの認証と認可を提供するID・アクセス管理。 |
| [Connect2id](https://c2id.net) | [@Connect2id](https://twitter.com/connect2id) | €299/月 - €999/月 | ホスト型Connect2idサーバー。柔軟で安全性が高く、認定されたOpenID Connect/OAuth 2.0のIDプロバイダーと説明されている。 |
| [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) | [@Cerbos](https://twitter.com/cerbosdev) | 月間アクティブなプリンシパル100件まで無料 | アクセスポリシーの作成、テスト、デプロイのための認可管理。きめ細かな認可とアクセス制御を提供。 |


## ユーザーテスト<a id="user-testing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [HotJar](https://www.hotjar.com) | [@hotjar](https://twitter.com/hotjar) | 無料〜$29/月（個人利用） | サイト訪問者の行動を動画として記録し、ヒートマップを収集。 |
| [Wisdom](https://getWisdom.io) | [@wisdomCRM](https://twitter.com/WisdomCRM) | 無料 - $2000+/月 | セッションの再現を重視した、訪問者のセッションのライブ記録。各訪問者の全タブにわたる仮想デスクトップ画面を再構築し、体験を再現。 |
| [LiveSession](https://livesession.io) | [@LiveSessionHQ](https://twitter.com/LiveSessionHQ) | $44+/月 | セッション再現による分析。 |

## 人事<a id="hr"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Workday](https://www.workday.com) | [@workday](https://twitter.com/workday) | - | 共同作業、外出先での利用、リアルタイムの作業を想定した業務アプリ。 |
| [Lever](https://www.lever.co) | [@lever](https://twitter.com/lever) | - | 企業全体の面接担当者、管理者、採用担当者が、候補者の発掘、審査、採用に参加するWebベースの採用支援。 |
| [Zenefits](https://www.zenefits.com) | [@zenefits](https://twitter.com/zenefits) | $8以上/月/従業員 | 給与計算、福利厚生、時間追跡、法令遵守を統合したオンライン人事プラットフォーム。原版では、その分野で第1位と説明されている。 |
| [TestDome](https://www.testdome.com/) | [@TestDome](https://twitter.com/TestDome) | $8/候補者〜$20/候補者 | 面接前に候補者へ実際のコードの記述を求める、自動化されたプログラミング技能テスト。 |
| [HackerRank](https://www.hackerrank.com/) | [@hackerrank](https://twitter.com/hackerrank) | 有料 | エンジニアの採用を一貫して支援する技術者採用サービス。 |
| [PeopleDoc](https://www.people-doc.com/) | [@PeopleDoc_Inc](https://twitter.com/PeopleDoc_Inc) | - | 複雑な人事業務と法令遵守を簡素化する人事サービスの提供。時間や場所を問わず従業員に対応。 |
| [BambooHR](https://www.bamboohr.com/) | [@bamboohr](https://twitter.com/bamboohr) | 有料 | 人事ソフトウェア。 |
| [HiringPlan](https://hiringplan.io) | [@ltse](https://twitter.com/ltse) | 無料 | 市場データを内蔵した、スタートアップの人員計画。創業者による報酬制度の設計、公平な給与支払い、現金と株式の余力の維持を支援。 |
| [TLDROptions](https://tldroptions.io) | [@ltse](https://twitter.com/ltse) | 無料 | 従業員がストックオプションの潜在的な価値を理解するための支援。 |

## 給与計算<a id="payroll"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [WagePoint](https://wagepoint.com) | [@wagepoint](https://twitter.com/wagepoint) | $20＋$2/月/従業員 | 従業員の給与計算。 |

## 継続的インテグレーション・コード品質<a id="continuous-integrationcode-quality"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Travis](https://travis-ci.com) | [@travisci](https://twitter.com/travisci) | 無料 - $489/月 | オープンソース・非公開プロジェクト向けのホスト型継続的インテグレーション：[travis-ci.com](https://travis-ci.com/)。システムの稼働状況の更新：[@traviscistatus](https://twitter.com/traviscistatus)。 |
| [AppVeyor](https://www.appveyor.com) | [@appveyor](https://twitter.com/appveyor) | - | .NETアプリのビルド、テスト、デプロイを自動化。 |
| [Codeship](https://codeship.com) | [@codeship](https://twitter.com/codeship) | 月100ビルドまで無料、無制限プランは$49から | コードのテストとデプロイを行う、サービスとしての継続的デリバリー。 |
| [Circle](https://circleci.com) | [@circleci](https://twitter.com/circleci) | $19/月 - $269/月 | Webアプリ向けの継続的インテグレーションとデプロイ。 |
| [Nevercode](https://nevercode.io) | [@nevercodehq](https://twitter.com/nevercodehq) | - | - |
| [Hound](https://houndci.com) | [@houndci](https://twitter.com/houndci) | 無料, $49/月 - $249/月 | 自動コードレビュー。 |
| [CodeClimate](https://codeclimate.com) | [@codeclimate](https://twitter.com/codeclimate) | $0/月 - $399/月 | RubyとJavaScript向けの、ホスト型ソフトウェアメトリクスと自動コードレビュー。リアルタイムの静的解析で技術的負債を管理。 |
| [Codacy](https://www.codacy.com) | [@codacy](https://twitter.com/codacy) | $0 - $150/月 | ユニットテストを補完する継続的な静的解析による自動コードレビュー。CodeClimateに類似。 |
| [Codecov](https://codecov.io) | [@codecov](https://twitter.com/codecov) | $0 - $5/月 | ホスト型のコードカバレッジ報告。 |
| [Semaphore](https://semaphoreci.com) | [@semaphoreci](https://twitter.com/semaphoreci) | $14/月 - $899/月 | GitHub上の非公開・オープンソースプロジェクト向けのCIワークフロー。新たな依存関係、フック、SSHキーの管理、ソースコードの変更は不要。 |
| [Solano CI](https://www.solanolabs.com) | [@SolanoLabs](https://twitter.com/solanolabs) | $15/月 - $100/月 | 特許取得済みの自動並列化を備えた継続的インテグレーションとデプロイ。ビルドサーバーを管理せずに数分でCIを設定し、テストを安全かつ自動的に並列実行して既存のワークフローと統合。拡張性のある実行環境は、CIへプッシュする前にも使用可能。原版では、デプロイが10〜80倍速くなると主張されている。クレジットカード不要の14日間の無料試用を提供。旧称はtddium。 |
| [Jenkins](https://jenkins.io) | [@jenkinsci](https://twitter.com/jenkinsci) | 無料 | ソフトウェア開発向けのサーバー型継続的インテグレーション。AccuRev、CVS、Subversion、Git、Mercurial、Perforce、Clearcase、RTCなどのSCMツールに対応。Apache AntとApache Mavenのプロジェクト、任意のシェルスクリプト、Windowsのバッチコマンドを実行。MIT Licenseの自由ソフトウェア。 |
| [Bamboo](https://www.atlassian.com/software/bamboo) | [@atlassian](https://twitter.com/atlassian) | $10/月 - $1000/月 | ビルドとテストを、課題、コミット、テスト結果、デプロイに結び付ける。プロジェクト管理者、開発者、テスター、システム管理者が開発状況を共有できる。 |
| [Buildkite (Buildbox)](https://buildkite.com) | [@buildkite](https://twitter.com/buildkite) | $15/開発者/月 | 自前のインフラを使う半ホスト型の継続的インテグレーションとデプロイ。任意の言語のテストやデプロイスクリプトを実行でき、必要な数の並列エージェントとビルドを利用可能。 |
| [Crucible](https://www.atlassian.com/software/crucible) | [@atlassian](https://twitter.com/atlassian) | $10/月 - $8000/月 | 柔軟なワークフローによるコードレビュー、変更の議論、知識の共有、不具合の発見。Git、Subversion、CVS、Perforceなどに対応。 |
| [Coveralls](https://coveralls.io) | [@coverallsapp](https://twitter.com/coverallsapp) | $0/月 - $50/月 | CIサーバーと連携し、テストカバレッジの履歴と統計を提供。あらゆる言語に対応し、オープンソースでは無料。 |
| [Testributor](http://about.testributor.com) | [@testributor](https://twitter.com/testributor) | 無料 | オープンソースの継続的インテグレーション。ホスト型の版は、オープンソースと非公開プロジェクトのどちらでも無料で利用可能。 |
| [Wercker](https://www.oracle.com/corporate/acquisitions/wercker/) | [@wercker](https://twitter.com/wercker) | $0/月 - $350/月 | Kubernetesとマイクロサービスのデプロイ向けの、Dockerを基盤とするCI/CD自動化。 |
| [Monkey Test It](https://monkeytest.it) | [@monkeytestit](https://twitter.com/monkeytestit) | $0/月 - $199/月 | リンク切れ、画像の欠落、JavaScriptエラーなどのWebサイトの不具合を自動確認。Slack、多くのCIシステム、Webhookと連携し、組み込みのスケジュール機能を提供。 |
| [Concourse](https://concourse-ci.org) | [@concourseci](https://twitter.com/concourseci) | 無料 | リソース、タスク、ジョブを中心に構成された、CI/CDに適したオープンソースの自動化。 |
| [PullRequest](https://www.pullrequest.com) | [@pullrequestinc](https://twitter.com/pullrequestinc) | $33以上/10分 | 審査を経た専門のレビュアーによる、静的解析を活用したコードレビューサービス。 |
| [GitLab](https://about.gitlab.com/product/continuous-integration/) | [@GitLab](https://twitter.com/gitlab) | $0 [Community Edition](https://about.gitlab.com/pricing/) / Premiumは有料 | CI/CD連携を備えたオープンソースのバージョン管理。 |


## ダッシュボード<a id="dashboards"></a><a id="dashb"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Geckoboard](https://www.geckoboard.com) | [@geckoboard](https://twitter.com/geckoboard) | $17/月 - $899/月 | 重要な事業データをリアルタイムのダッシュボードに集約し、活動の監視や出来事への対応に活用。 |
| [Telemetry](https://www.telemetrytv.com) | [@telemetrytv](https://twitter.com/telemetrytv) | $9/月 - $749/月 | 大型テレビ、デスクトップ、モバイル端末、組み込みシステム向けの可視化を備えたリアルタイムのダッシュボード。現代的な言語と互換性のあるREST APIを使用。 |
| [Dashing](http://dashing.io) | - | - | Sinatraを基盤とするダッシュボード構築フレームワーク。 |
| [Klipfolio](https://www.klipfolio.com) | [@klipfolio](https://twitter.com/klipfolio) | $5/ユーザー/月 - $20/ユーザー/月 | データサービスに接続し、重要な指標をダッシュボードに集約。データを可視化に対応付け、ダッシュボードをチームで共有。 |
| [Grafana](https://grafana.com) | [@grafana](https://twitter.com/grafana) | $0 - $90/月 (+9/ユーザー/月) | 保存場所を問わずメトリクスの照会、可視化、アラート設定が可能。ダッシュボードを作成・探索し、チームで共有。 |
| [Redash](https://redash.io) | [@getredash](https://twitter.com/getredash) | セルフホスト、または$49/月〜450/月 | Redshift、Google BigQuery、PostgreSQL、MySQL、Graphite、Presto、Google Spreadsheets、Cloudera Impala、Hive、独自スクリプトなど、複数のデータベースやデータソースにクエリを実行。 |
| [Cyfe](https://www.cyfe.com) | [@cyfe](https://twitter.com/Cyfe) | $0 - $29/月 | Google Analytics、Salesforce、AdSense、MailChimp、Amazon、Facebook、WordPress、Twitterなどのサービスのデータを一か所で監視・分析する、リアルタイムの顧客向けダッシュボード。 |
| [Two Minute Reports](http://twominutereports.com/) | - | 無料 - $9/月 | マーケティング代理店のレポートを自動化し、請求対象の作業時間を節約。Google SheetsとLooker Studioで動作し、Facebook Ads、Google Ads、Instagram、LinkedIn Ads、HubSpot、Google Analytics 4、Shopify、Amazon Seller/Adsなどのデータを使用。 |

## エラー・例外処理<a id="errorexception-handling"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [CabinJS](https://cabinjs.com) | [@niftylettuce](https://twitter.com/niftylettuce) | 無料・オープンソース | Sentry、Timber、Bugsnagなどを置き換えられるJavaScriptのログサービス。安全性、プライバシー、事業コストの削減を重視。原版では、Nodeの全バージョンとIE 10以降に対応すると説明されている。 |
| [CatchJS](https://catchjs.com) | - | $49 - $499 | WebアプリのJavaScriptエラー報告。スクリーンショットとクリック履歴でバグの再現を支援。 |
| [Crashlytics](https://try.crashlytics.com) | [@crashlytics](https://twitter.com/crashlytics) | 無料 | iOSとAndroidのクラッシュ報告とグループ化。基本的な分析とレポートを提供。 |
| [Sentry](https://sentry.io/) | [@getsentry](https://twitter.com/getsentry) | オープンソース、および$24/月〜$199/月 | 利用者がアプリのエラーに遭遇すると即座にチームへ通知し、問題が報告される前に利用者へ連絡できるようにする。 |
| [HoneyBadger](https://www.honeybadger.io) | [@honeybadgerapp](https://twitter.com/honeybadgerapp) | $39/月 - $249/月 | Ruby向けの例外、稼働状況、性能の監視。エラー、停止、性能の問題をリアルタイムで通知し、修正のためのツールを提供。原版では、厳しいレート制限やサーバー単位の料金がないと説明されている。 |
| [BugSnag](https://www.bugsnag.com) | [@bugsnag](https://twitter.com/bugsnag) | $29/月 - $249/月 | Rails、PHP、Node.js、Javaなどの主要プラットフォームのWebアプリ向けの、自動フルスタックエラー監視。 |
| [Raygun](https://raygun.com) | [@raygunio](https://twitter.com/raygunio) | $14/月 - $199/月 | ソフトウェアのエラーを自動送信して即座に分析。関連するエラーをグループ化し、個別の発生事例だけでなく根本原因の調査を支援。 |
| [Airbrake](https://airbrake.io) | [@airbrake](https://twitter.com/airbrake) | $49 - $249/月 | ログファイルを検索せずに、3分でアプリの例外を取得・追跡。原版では、18のプログラミング言語に対応し、5万のアプリが利用していると説明されている。 |
| [Rollbar](https://rollbar.com) | [@rollbar](https://twitter.com/rollbar) | $12/月 - $1249/月 | HTTPとJSONでデータを受け取る、プラットフォームに依存しないエラー監視。公式ライブラリはRuby、Python、PHP、Node.js、JavaScript、Android、iOS、Flashに対応し、独自クライアントはAPIを使用可能。 |
| [Errorception](https://errorception.com) | [@errorception](https://twitter.com/errorception) | $5/月 - $59/月 | ページにscriptタグを追加し、利用者のブラウザーのJavaScriptエラーをリアルタイムで追跡。 |
| [Errbit](https://errbit.com) | - | OSS | Airbrake APIに対応したオープンソースのエラー収集。 |
| [OverOps](https://www.overops.com) | [@overopshq](https://twitter.com/overopshq) | - | JavaとScalaの本番コード向けのツール。原版では「God Mode」と表現されている。 |

## アプリ配布<a id="application-distribution"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [HockeyApp](https://www.hockeyapp.net) | [@VSAppCenter](https://twitter.com/VSAppCenter) | 無料〜$129/月（アプリ数と所有者数により変動） | iOS、Android、Windows Phone、Mac OSのアプリ配布。分析、利用者のフィードバック、クラッシュ報告を提供。 |
| [Setapp](https://setapp.com) | [@setapp](https://twitter.com/setapp) | $9.99/月 | 一つのサブスクリプションで利用できるmacOSアプリのコレクション。 |

## ログ監視<a id="log-monitoring"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Fluentd](https://www.fluentd.org) | [@fluentd](https://twitter.com/fluentd) | - | データストリームを処理するオープンソースのデータ収集。150種類以上のプラグインを通じて、ログ管理、ビッグデータ分析などの用途でデータを保存。 |
| [Flume](https://github.com/apache/flume) | - | - | - |
| [Graylog](https://www.graylog.org) | [@graylog2](https://twitter.com/graylog2) | - | ログ検索、グラフ作成、レポート送信、アラート受信のためのオープンソースのデータ分析。データセンターの既存JVM上で動作。 |
| [LogDNA](https://logdna.com) | [@logdna](https://twitter.com/LogDNA) | 無料 - $3/gb | プラットフォームやデータ量を問わない、リアルタイムのログ集約、監視、分析。 |
| [LogEntries](https://logentries.com) | [@logentries](https://twitter.com/logentries) | $16/月 - $245/月 | クラウドベースのログ管理と分析。 |
| [Logit.io](https://logit.io) | [@logit_io](https://twitter.com/logit_io) | $74/月から | ホスト型のELK、Open Distro、Grafanaを基盤とするログ・メトリクス管理。 |
| [Loggly](https://www.loggly.com) | [@loggly](https://twitter.com/loggly) | $49/月 - $349/月 | クラウドと接続するアプリを構築・管理する組織の、運用上の問題調査を支援。 |
| [Logstash](https://www.elastic.co/products/logstash) | [@logstash](https://twitter.com/logstash) | - | あらゆるデータソースからログやイベントを収集し、解析、タイムスタンプ付与、保存、索引付けを行い、後で利用可能にする。ログの検索・調査用のWebインターフェースを備える。 |
| [Papertrail](https://papertrailapp.com) | [@papertrailapp](https://twitter.com/papertrailapp) | $7/月 - $230/月 | 柔軟なシステムのグループ化、チーム全体のアクセス、長期保存、グラフ・分析のエクスポート、監視用Webhookを備えたログ管理。原版では、45秒で設定できると説明されている。 |
| [Stackify](https://stackify.com) | [@Stackify](https://twitter.com/Stackify) | $15/月 | 開発、運用、サポートのチーム向けに、アプリの健全性に関する情報を提供。 |
| [statsd](https://github.com/etsy/statsd/) | - | - | - |
| [Sumo Logic](https://www.sumologic.com) | [@SumoLogic](https://twitter.com/SumoLogic) | - | 管理者が有効にすると、顧客アカウントで新しいデータを検索可能になる。Data Volumeアプリは、カテゴリ、コレクター、データソース名、ホストごとのデータ使用量を把握するための、設定済みのダッシュボードと検索を提供。 |

## アプリの性能<a id="application-performance"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [AppNeta](https://www.appneta.com) | [@AppNeta](https://twitter.com/AppNeta) | 無料〜$119/月 | コード、ネットワーク、エンドユーザーを対象とする、Webアプリのフルスタック監視。複数言語を使うアプリやサービス指向アーキテクチャに特に適し、トランザクション、エラー、ブラウザーやホストのメトリクスなどを追跡。 |
| [New Relic](https://newrelic.com) | [@NewRelic](https://twitter.com/NewRelic) | $149/月 | ソフトウェアメトリクスによる、リアルタイムのアプリ監視と事業状況の把握。利用者のクリック履歴、モバイルでの活動、エンドユーザーの体験、トランザクションなどを扱う。原版では、数十億のメトリクスを処理すると説明されている。 |
| [AppSignal](https://appsignal.com) | [@AppSignal](https://twitter.com/AppSignal) | $49/月 - $259/月 | 平均値や90パーセンタイルの計測値など、サイト性能の詳細な統計を提供するRailsアプリの監視。 |
| [Instrumental](https://instrumentalapp.com) | [@instrumental](https://twitter.com/instrumental) | $150/月 - $750/月 | リアルタイムのアプリメトリクス監視。原版では、毎秒50万以上のメトリクスを処理すると説明されている。 |
| [Atatus](https://www.atatus.com) | [@atatusapp](https://twitter.com/atatusapp) | $12/月 - $159/月 | JavaScriptのエラー追跡と稼働監視。2行のコードを追加して、アプリのエラーをリアルタイムで通知。 |

## 負荷テスト<a id="load-testing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Bees with Machine Guns!](https://github.com/newsapps/beeswithmachineguns) | - | - | - |
| [Flood.io](https://flood.io) | [@flood_io](https://twitter.com/flood_io) | 無料〜$399/月 | JMeterとGatlingの負荷テストの自動設定と、結果の要約・グラフ表示。原版では、毎分10万件以上のリクエストまで拡張できると説明されている。 |
| [Neustar Website Load Testing](https://www.security.neustar/digital-performance/web-performance-management) | [@Neustar](https://twitter.com/Neustar) | $80/月 | 帯域幅の制限、しきい値を超えるエラー率、サーバーの「PU」制限などの性能問題を調査（原文の「PU」の意味は不明）。 |
| [Loader.io](https://loader.io) | [@loaderio](https://twitter.com/loaderio) | 無料〜100.00$/月 | 数千の同時接続によるWebアプリ・APIの負荷テスト。無料で利用できるサービスも提供。 |
| [Locust.io](https://locust.io) | [@locustio](https://twitter.com/locustio) | オープンソース | Pythonで実装されたセルフホスト型の負荷テスト。テストもPythonで記述。 |
| [k6.io](https://k6.io) | [@k6_io](https://twitter.com/k6_io) | 無料・オープンソース | 開発者向けの、バックエンド基盤のオープンソース負荷テスト。GoとJavaScriptで構築され、開発ワークフローへの統合を想定。 |
| [loadimpact.com](https://loadimpact.com/) | [@loadimpact](https://twitter.com/loadimpact) | $99.00+ | オープンソースのk6.ioを基盤とする、DevOpsチーム向けのSaaS性能テスト。 |

## サーバー監視<a id="server-monitoring"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Server Density](https://www.serverdensity.com) | [@serverdensity](https://twitter.com/serverdensity) | - | ホスト型のWebサイト・サーバー監視。インスタンスの作成、アップグレード、削除をリアルタイムで同期。Web、モバイル、API、または提供元との直接のやり取りで利用可能。 |
| [Datadog](https://www.datadoghq.com) | [@datadoghq](https://twitter.com/datadoghq) | $0/月〜$15/ホスト/月 | 大規模にアプリを運用するIT、運用、開発チーム向けの監視。アプリ、ツール、サービスのデータから状況を把握。 |
| [Circonus](https://www.circonus.com) | [@circonus](https://twitter.com/circonus) | $15/ホスト/月〜$25/ホスト/月 | 監視、アラート、イベント報告、分析を統合し、アプリやシステムのデータをリアルタイムで可視化。 |
| [TrueSight Pulse](https://www.bmc.com/it-solutions/truesight) | [@truesightpulse](https://twitter.com/truesightpulse) | - | クラウド・サーバー基盤の状況をリアルタイムで把握。 |
| [Librato](https://www.librato.com) | [@Librato](https://twitter.com/Librato) | $0.05/メトリクス/月〜$0.30/メトリクス/月 | ソフトウェアスタックの各層で、事業に関わるメトリクスを監視・把握。 |
| [Scout](https://scoutapp.com/) | [@ScoutAPM](https://twitter.com/ScoutAPM) | - | - |
| [Prometheus](https://prometheus.io) | [@PrometheusIO](https://twitter.com/PrometheusIO) | - |  |
| [Site24x7](https://www.site24x7.com) | [@site24x7](https://twitter.com/Site24x7) | スターターは$9/月、エンタープライズは$225 |  |
| [Uptime Robot](https://uptimerobot.com) | [@uptimerobot](https://twitter.com/uptimerobot) | - | 無料の基本的なHTTP/HTTPSによるWebサイト監視。 |
| [BinaryCanary](https://www.binarycanary.com) | - | - | - |

## 顧客サポート・ヘルプデスク<a id="customer-supporthelp-desks"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Salesforce Desk](https://www.salesforce.com/solutions/small-business-solutions/help-desk-software/?mc=desk) | [@salesforce](https://twitter.com/salesforce) | $3/月 - $50/月 | 急成長する企業向けのヘルプデスクソフトウェア。企業全体で顧客の問題に対応するインターフェースと機能を提供。Salesforceが支え、他のSalesforceサービスとの連携やセキュリティ機能を備える。原版では、SquareやInstagram、小規模事業者など数千の企業が利用していると説明され、無料試用も提供されている。 |
| [HelpScout](https://www.helpscout.com/) | [@helpscout](https://twitter.com/helpscout) | $15/月 | 指定した条件に基づき、一つ以上の処理を自動実行する、規模に応じて拡張できる顧客サポート。 |
| [ZenDesk](https://www.zendesk.com) | [@zendesk](https://twitter.com/zendesk) | $1/月 - $195/月 | 企業と顧客のコミュニケーションのために、顧客との会話を一か所に集約。 |
| [Groove](https://www.groovehq.com) | [@groove](https://twitter.com/groove) | $15/月 | 顧客ごとのサポートのためのヘルプデスクソフトウェア。顧客にはメッセージが通常のメールとして届く。 |
| [Intercom](https://www.intercom.com) | [@intercom](https://twitter.com/intercom) | $49/月 - $449/月 | 製品を使っている利用者をリアルタイムで把握し、行動に基づいて選んだ利用者へ個別のメッセージを、一つのプラットフォームから送信。 |
| [Tender](https://tenderapp.com/) | [@tenderapp](https://twitter.com/tenderapp) | $9/月 - $99/月 | 共通の問題やフィードバックは公開フォーラムで扱い、請求や注文などのカテゴリは非公開に保つ顧客サポート。利用者はカテゴリや新しい議論を購読し、他の顧客を支援できる。 |
| [Enchant](https://www.enchant.com) | [@enchant](https://twitter.com/enchant) | $9/月 | 顧客がチケット番号やログインを必要とせず、通常のメールを受け取れるチーム向けヘルプデスクソフトウェア。 |
| [Freshdesk](https://freshdesk.com) | [@freshdesk](https://twitter.com/freshdesk) | $16/月 - $70/月 | サポート上の問題を追跡・管理する顧客サポートソフトウェア。 |
| [UserDeck](https://userdeck.com) | [@user_deck](https://twitter.com/user_deck) | $0 - $25/月 | 既存のWebサイトに埋め込む顧客サポートソフトウェア。 |
| [Sirportly](https://sirportly.com) | [@sirportly](https://twitter.com/sirportly) | £0 - £15/月 | 数分でヘルプデスクを設定し、他のソフトウェアと連携。自動ルールとマクロで顧客サポートの拡張を支援。 |
| [Olark](https://www.olark.com/) | [@olark](https://twitter.com/olark) | - | - |
| [SnapEngage](https://snapengage.com/) | [@snapengage](https://twitter.com/snapengage) | 連携ごとの個別料金、または$81/月から | 高度にカスタマイズできるライブチャット連携。 |
| [Reamaze](https://www.reamaze.com) | [@reamaze](https://twitter.com/reamaze) | $15/月 | アプリに統合する軽量なヘルプデスク機能。メール、ソーシャルチャネル、ブランド表示を扱い、外部のワークフローツールと連携。 |
| [Jitbit Helpdesk](https://www.jitbit.com/helpdesk/) | [@jitbithelpdesk](https://twitter.com/jitbithelpdesk) | $29/月 - $199/月 | ホスト型とオンプレミス型で利用できるヘルプデスクソフトウェア。 |
| [Drift](https://www.drift.com) | [@drift](https://twitter.com/drift) | 有料、$49/月から | 営業を重視したライブチャットとアプリ内メッセージ。チャットボットによる自動化を提供。 |
| [Zammad](https://zammad.com/) | [@zammadhq](https://twitter.com/zammadhq) | $0/月 - $24/月 | 電話、Facebook、Twitter、チャット、メールなどのチャネルのコミュニケーションを管理する、オープンソースのヘルプデスク・顧客サポートソフトウェア。GNU Affero General Public License（AGPL）で配布。 |
| [Support Hero](https://www.supporthero.io) | [@supportheroapp](https://twitter.com/supportheroapp) | $49/月 - $199/月 | 顧客向けのセルフサービスのナレッジベース・チュートリアル管理と分析。顧客の理解を深め、継続利用やエンゲージメントを改善し、顧客との関係にかかる費用の削減を支援。 |
| [Atlasmic](https://atlasmic.com) | [@atlasmichq](https://twitter.com/atlasmichq) | 無料 - €20/月 | ライブチャット、ビジネスメッセージ、営業、インバウンドマーケティング、分析。`Hosted` |

## トランザクションメール<a id="transactional-email"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Postmark](https://postmarkapp.com) | [@postmarkapp](https://twitter.com/postmarkapp) | $1.50 | Webアプリのトランザクションメールの配信と解析。原版では、最小限の設定で保守不要と説明され、長年の受信箱への配信経験も記載されている。 |
| [MailGun](https://www.mailgun.com) | [@Mail_Gun](https://twitter.com/Mail_Gun) | $20.00 | SMTP連携とRESTful APIを備えた開発者向けメールサービス。10通から1,000万通まで規模を拡張。 |
| [Amazon Simple Email Service](https://aws.amazon.com/ses/) | [@AWSSupport](https://twitter.com/AWSSupport) | 毎月送信する最初の62,000通は$0 | 事業者と開発者向けの、規模に応じて拡張できるメールの送受信。 |
| [SendGrid](https://sendgrid.com) | [@SendGrid](https://twitter.com/SendGrid) | $9.95/月 - $399.95 | 送信量に応じたプランを提供するメール配信。原版では、あらゆる規模の事業者向けに月間数十億通を配信すると説明されている。 |
| [CritSend](https://www.critsend.com) | [@critsend](https://twitter.com/critsend) | $50/月 - $3000/月 | 自動的な規模拡張に対応する、トランザクションメール・一括メール向けのSMTPリレー。原版では、5分での設定と高速な配信が説明されている。 |
| [Postage](https://postageapp.com) | [@postagebird](https://twitter.com/postagebird) | $9/月 - $399/月 | Webアプリのメールを数分で設計、送信、分析。 |
| [Sendwithus](https://www.dyspatch.io/sendwithus/) | [@sendwithus](https://twitter.com/send_with_us) | 月1,000通の無料Hackerプラン | トランザクションメールのA/Bテストとドリップキャンペーン。 |
| [SparkPost](https://sparkpost.com) | [@SparkPost](https://twitter.com/SparkPost) | 無料 - $474/月 | アプリやWebサイト向けのメール配信。数百通から数十億通まで対応。 |

## その他のAPI<a id="other-apis"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Exchange Rate API](https://www.exchangerate-api.com) | - | 無料 | 2010年から維持されている通貨の為替レートAPI。登録不要でリクエスト数の制限もない無料枠を提供。 |
| [Filestack](https://www.filestack.com) | [@FileStack](https://twitter.com/FileStack) | $0/月 - $49/月 | ファイルのアップロード。インターネット上の各所にあるファイルの接続、保存、処理を行う。 |
| [Open Exchange Rates](https://openexchangerates.org) | - | $12/月 - $97/月 | JSONによるリアルタイムの為替レート・通貨換算API。HTTPSとJSONPに対応し、例、ガイド、ドキュメントを提供。 |
| [FormAPI](https://formapi.io) | [@form_api](https://twitter.com/form_api) | $49/月 - $249/月 | プログラムからPDF文書への記入と署名を行い、契約書や請求書などの文書を大量に生成。 |
| [Abstract APIs](https://www.abstractapi.com) | [@abstractapi](https://twitter.com/abstractapi) | 無料 - $249/月 | メールアドレスの検証、VAT計算、IP位置情報など、一般的な処理のためのAPI。 |

## サイト内検索<a id="site-search"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Elasticsearch](https://www.elastic.co/products/elasticsearch) | [@elastic](https://twitter.com/elastic) | - | 構造化・非構造化データの検索と分析。オープンソースのElasticsearch、Logstash、KibanaをELKスタックとして組み合わせ、リアルタイムで状況を把握できる。各製品の開発を担うエンジニアが構築・支援。 |
| [Swiftype](https://swiftype.com) | [@Swiftype](https://twitter.com/swiftype) | 無料〜$250/月、Enterpriseプランあり | WebクローラーまたはAPI連携による、ホスト型のWebサイト検索。主要なフレームワークや言語向けのAPIクライアントと、主要な外部プラットフォーム向けのプラグインを提供。 |
| [Algolia](https://www.algolia.com) | [@Algolia](https://twitter.com/Algolia) | $49/月 - $449/月 | REST APIによる、完全ホスト型のリアルタイム検索。主要なフレームワーク、プラットフォーム、言語向けのクライアントを提供。 |
| [Apache Solr](https://lucene.apache.org/solr/) | - | - | Apache Luceneを基盤とし、Luceneとともにリリースされるオープンソースの検索。 |
| [Amazon Cloudsearch](https://aws.amazon.com/cloudsearch/) | - | - | サービスとしての検索。 |

## メールマーケティング<a id="email-marketing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [QuickChart](https://quickchart.io/) |  | オープンソース・セルフホスト型。ホスト型の無料枠あり、有料は$40/月から | メールにチャートやグラフの画像を追加。Chart.jsとGoogle Image Chartsの形式に対応。 |
| [MailCharts](https://www.mailcharts.com) | [@mailcharts](https://twitter.com/mailcharts) | $30/月 | 競合のメールマーケティングを追跡し、戦略の検討、データに基づく意思決定、デザインやコンテンツの着想に活用。原版では、1,000社以上を対象にすると説明されている。 |
| [Customer.io](https://customer.io) | [@CustomerIO](https://twitter.com/CustomerIO) | $50/月 - $1250/月 | アプリ内で利用者が行った、または行わなかった操作に基づいてメールを送信。サイトのデータを使い、顧客セグメントごとにニュースレターを配信。 |
| [Vero](https://www.getvero.com) | [@getvero](https://twitter.com/getvero) | $99/月 | 顧客の行動に基づいてメールを送信。年齢、所在地、性別などの収集した属性や、ログイン、機能の利用、購入手続きなどの行動から顧客セグメントを作成。 |
| [Mailchimp](https://mailchimp.com) | [@Mailchimp](https://twitter.com/Mailchimp) | - | - |
| [Campaign Monitor](https://www.campaignmonitor.com) | [@CampaignMonitor](https://twitter.com/CampaignMonitor) | $9/月 - $699/月 | 原文の説明は意味が不明瞭：「CAMPUnbounce Feature Tour」。 |
| [Sendy](https://sendy.co) | [@getsendy](https://twitter.com/getSendy) | 一回払い$59。自前でホストするか、各種提供元のホスト型Sendyを利用 | - |
| [Image-Charts](https://www.image-charts.com/) | [@imagecharts](https://twitter.com/imagecharts) | 無料〜$49/月、セルフホスト型プランあり | サーバー側で描画せずに、アニメーション付きのチャートを画像としてメールに追加。一つのURLが一つのチャートを表し、Google Image Chartsと互換性がある。 |
| [Drip](https://www.drip.com) | [@getdrip](https://twitter.com/getdrip) | 有料プランは$49/月から | ワークフロー、ドリップキャンペーン、コンバージョン追跡などのマーケティング自動化。 |
| [MailerLite](https://www.mailerlite.com) | [@mailerlite](https://twitter.com/mailerlite) | 無料 - $140/月 | 原文では多くの機能を備えた無料プランと説明されているが、具体的な機能は示されていない。 |
| [MarketHero](https://markethero.io/) | - | $99+/月 | 自動返信とメールマーケティングのツール。 |
| [EmailOctopus](https://emailoctopus.com) | [@emailoctopus](https://twitter.com/emailoctopus) | 購読者2,500人まで無料、有料プランは$19/月から | Amazon SESを使った低価格のメールマーケティング。 |
| [ButtonDown](https://buttondown.email/) | [@buttondownemail](https://twitter.com/buttondownemail) | 購読者1,000人まで無料、それ以降は有料 | Markdownを使うニュースレターツール。 |

## メールアドレス収集・ランディングページアプリ<a id="email-collectionlanding-page-apps"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Launchrock](https://www.launchrock.com) | [@launchrock](https://twitter.com/launchrock) | $49/月 - $199/月 | アップロードしたロゴや画像、ブランドのカラーパレットの色を使う、公開機能を備えたランディングページ作成ツール。原版では、HTMLでページを書くより速く作成できると説明されている。 |
| [Unbounce](https://unbounce.com) | [@unbounce](https://twitter.com/unbounce) | $49/月 - $199/月 | 技術チームに依存せずに、マーケティングキャンペーンや販売促進のためのランディングページを作成。原版では、効率、コンバージョン、マーケティング予算の活用を改善すると主張されている。 |
| [LeadPages](https://www.leadpages.net/) | [@Leadpages](https://twitter.com/Leadpages) | $25/月 - $199/月 | 見込み客の獲得とオプトインのツールを備えたランディングページ作成ツール。見込み客の獲得と収益増加を目的とする。 |
| [Instapage](https://instapage.com/) | [@Instapage](https://twitter.com/Instapage) | $29/月 - $127/月 | 広告予算の活用改善を目的とする、構築、統合、共同作業、最適化のためのランディングページソリューション。 |
| [KickoffLabs](https://kickofflabs.com) | [@kickofflabs](https://twitter.com/kickofflabs) | $29/月 - $99/月 | 対象に合わせたランディングページ、登録フォーム、ニュースレター、顧客紹介の報酬制度を使うキャンペーン。 |
| [Prefinery](https://www.prefinery.com) | [@prefinery](https://twitter.com/prefinery) | $19/月- $399/月 | 製品公開に向けたベータ版の招待・管理サービス。ランディングページ以外も扱う。 |

## CRM・営業ツール<a id="crmsales-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Kloudless](https://kloudless.com) | [@kloudless](https://twitter.com/kloudless) | 無料 - $500/月 | 一つのRESTful APIとコードベースでCRMサービスと連携。Salesforce、SugarCRM、Microsoft Dynamics、Zoho、Oracle Sales Cloud、HubSpot、Pipelinerなどに対応し、連携の保守はKloudlessが担当。 |
| [Salesforce](https://www.salesforce.com) | [@salesforce](https://twitter.com/salesforce) | - | 原版では、Salesforce1 Platform上のExactTarget Marketing Cloudによる、メール、モバイル、ソーシャルメディア、Web、その他のIPアドレスで接続可能な製品を横断する1対1のキャンペーンが説明されている。消費者を顧客に転換することを目的とする。 |
| [SalesforceIQ](https://www.salesforce.com/solutions/essentials/?mc=sfiq) | [@salesforceiq](https://twitter.com/salesforceiq) | £17-85/ユーザー/月 | Relationship Intelligenceを使って事業上の関係を構築。 |
| [SugarCRM](https://www.sugarcrm.com) | [@sugarcrm](https://twitter.com/sugarcrm) | $35/月 - $150/月 | 営業、マーケティング、顧客サポートの自動化や独自CRMアプリの作成に使う、オープンで柔軟なCRMプラットフォーム。顧客と接する個々の担当者や顧客との関係を重視。 |
| [Insight.ly](https://www.insightly.com) | [@insightly](https://twitter.com/insightly) | $7/月 | 小規模事業向けのCRM。連絡先、組織、パートナー、販売業者、仕入れ先を管理し、背景情報、メール履歴、イベント、プロジェクト、商談を扱う。 |
| [Close.io](https://close.io) | [@closeio](https://twitter.com/closeio) | $59/月 - $299/月 | 営業コミュニケーションのプラットフォーム。見込み客との送受信メールを自動記録。Close.io内でメールを送受信するか、IMAPとSMTPの設定でGmailなどのクライアントから送るメールを追跡。 |
| [Streak](https://www.streak.com) | [@streak](https://twitter.com/streak) | - | Gmail内でメールサポートや商談を管理。顧客のメールを一つの表示にまとめ、顧客をパイプライン上で進め、新着メールの際も文脈を保持。 |
| [Base](https://getbase.com) | [@ZendeskSell](https://twitter.com/ZendeskSell) | $15/月 - $125/月 | 複数の流入元の見込み客を整理し、営業担当者に割り当ててフォローと適格性の確認を行う、営業・CRMソフトウェア。条件を満たす見込み客を、連絡先情報を引き継いだ顧客の連絡先カードへ変換。必要に応じてフォロー用のタスクや商談も同時に作成。 |
| [Pipedrive](https://www.pipedrive.com) | [@pipedrive](https://twitter.com/pipedrive) | $9/月 | 作業の整理、見込み客の成約、事務作業の時間削減のための営業パイプラインソフトウェア。 |
| [Contactually](https://www.contactually.com) | [@Contactually](https://twitter.com/contactually) | $17.99/月 - $99.99/月 | 適切な相手に適切なタイミングでフォローすることを支援。紹介や再取引を通じて、関係構築から得られる成果の向上を目的とする。 |

## ソーシャルメディアマーケティング<a id="social-media-marketing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Buffer](https://buffer.com) | [@buffer](https://twitter.com/buffer) | $15/月 - $99/月 | Twitter、Facebookなどのソーシャルメディアへ投稿・共有。 |
| [HootSuite](https://hootsuite.com) | [@HootSuite](https://twitter.com/HootSuite) | $8.99/月 | 一つのダッシュボードでツイートやFacebook投稿を予約し、会話を監視。ソーシャルメディアのROIを示すために、そのまま発表に使える分析レポートを作成・カスタマイズ。 |
| [Exacttarget Marketing Cloud/Buddy Media](https://www.salesforce.com/products/marketing-cloud/overview/) | [@marketingcloud](https://twitter.com/marketingcloud) | - | Facebook、Twitter、YouTube、Webサイトを横断するソーシャルコンテンツとキャンペーンを統合し、ファン、フォロワー、支持者の増加を目指す。インタラクティブなソーシャルアプリを公開し、ランディングページやマイクロサイトを作成してWebサイトにソーシャル機能を追加。エンゲージメントの傾向、人口統計、コンバージョン、事業指標を分析。 |
| [Sprout Social](https://sproutsocial.com) | [@sproutsocial](https://twitter.com/sproutsocial) | $99/月 - $249/月 | Facebook、Twitter、Google+、LinkedInへメッセージを作成して同時投稿。リンクの短縮、写真の添付、Facebookでの対象者の指定、投稿のカスタマイズに対応。 |
| [F5Bot](https://f5bot.com) | - | 無料 | 無料のソーシャルメディアのキーワード監視。Hacker NewsやRedditでスタートアップ、製品、競合に言及されるとメールを送信。 |
| [Syften](https://syften.com) | [@syften_com](https://twitter.com/syften_com) | $15/月 - $49/月 | 技術系スタートアップ向けのソーシャルメディア監視。 |

## 命名<a id="naming"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Trademarkia](https://www.trademarkia.com) | [@trademarkia](https://twitter.com/trademarkia) | - | 商標検索エンジン。原版では世界最大級と説明されている。また、LegalForceが擁する、有資格の特許弁護士や代理人のネットワークが、あらゆる規模の企業のために数百件の特許出願を行ったと記載されている。 |
| [NameRobot](https://www.namerobot.com) | [@namerobotEN](https://twitter.com/namerobotEN) | 0$ - 300$/月 | プロジェクトの名前の候補を探し、作成、確認。 |
| [DomainTools Whois Lookup](https://whois.domaintools.com/) | [@DomainTools](https://twitter.com/DomainTools) | 無料 - $99/月 | 通常のWhois情報に加え、ドメイン名やIPアドレスの背後にある個人・組織を特定。 |
| [Startup Name Check](https://startupnamecheck.com/) | - | 無料 | 数十種類のドメイン名やソーシャルメディアで名前を確認。 |
| [Word Safety](https://naming-tools.com/word-safety) | - | 無料 | 名前が他の言語や別の表記で持つ副次的な意味を確認。 |

## スペースのレンタル<a id="space-rental"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [42Floors](https://42floors.com) | [@42floors](https://twitter.com/42floors) | - | 市場全体から集めた物件情報で、オフィスや商業スペースの賃貸物件を検索。貸主が42Floors.comや他の場所にまだ掲載していない未公開物件も含む。 |
| [Liquidspace](https://liquidspace.com) | [@LiquidSpace](https://twitter.com/LiquidSpace) | - | 事前の計画や直前の予約で、仕事場を検索・確保。会議室、個室オフィス、コワーキングスペースを日単位・時間単位で借りられる。 |
| [PivotDesk](https://www.pivotdesk.com) | [@PivotDesk](https://twitter.com/PivotDesk) | - | スペースを必要とするスタートアップと余剰スペースを持つ企業を結び付ける、オフィス共有のマーケットプレイス。 |

## コミュニティ向けツール<a id="community-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Discourse](https://www.discourse.org) | [@discourse](https://twitter.com/discourse) | - | 共通の話題に関心があるグループ向けのWeb上の議論ソフトウェア。参加者が文章を書いてやり取りする。 |
| [Scoold](https://scoold.com) | [@getscoold](https://twitter.com/getscoold) | 無料 / Pro €299 | JARとして提供される企業向けQ&Aプラットフォーム。全文検索、SAML・LDAP連携、ソーシャルログインに対応。原版では、JARに収めたStack Overflowと表現されている。 |
| [Flarum](https://flarum.org) | [@flarum](https://twitter.com/flarum) | 無料 | 原版で設計が優れていると説明されているフォーラムソフトウェア。 |

## 個人の生産性<a id="personal-productivity"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Tomatoes](http://www.tomato.es/) | [@tomatoesapp](https://twitter.com/tomatoesapp) | - | ポモドーロ・テクニックを使う時間追跡。ポモドーロと呼ばれる25分の区切りを使用。 |
| [RescueTime](https://www.rescuetime.com) | [@rescuetime](https://twitter.com/rescuetime) | 無料 - $9/月 | 時間の使い方を追跡し、日々の生産性改善に活用。 |
| [Qbserve](https://qotoqot.com/qbserve/) | [@Qbserve](https://twitter.com/Qbserve) | 一回払い$40 | プロジェクトの時間の自動追跡、請求書生成、追跡データのローカル保存も行うMac向けの時間追跡。原版では、RescueTimeの全機能を提供すると説明されている。 |
| [Timing](https://timingapp.com/) | [@TimingApp](https://twitter.com/TimingApp) | $29 - $79 | Mac向けの時間・生産性の自動追跡。仕事を予定どおり進めることや、時間単位で請求する場合の請求対象時間の記録を支援。 |
| [fman](https://fman.io) | [@m_herrmann](https://twitter.com/m_herrmann) | $14.00 | Windows、Mac、Linuxでファイルを管理・転送。 |
| [WakaTime](https://wakatime.com) | [@WakaTime](https://twitter.com/WakaTime) | 無料 - $9/月 | テキストエディターのプラグインによる生産性指標の自動計測。目標、ランキング、GitHub連携、プロジェクト・言語・ブランチの自動検出を提供。 |
| [deprocrastination](https://www.deprocrastination.co) | [@deprocrastinate](https://twitter.com/deprocrastinate) | 無料 - $3.99/月 | 先延ばしを減らすための訓練を行うブラウザー拡張。 |


## プロトタイピング・モックアップ<a id="prototypingmockups"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Abstract](https://www.abstract.com/) | [@goabstract](https://twitter.com/goabstract) | $9/月 - $15/月 | デザインチーム向けの、Gitに着想を得たバージョン管理と共同作業。 |
| [Creately](https://creately.com) | [@creately](https://twitter.com/creately) | 無料 - $750/月 | リアルタイムの共同作業に対応するWeb上の作図。フローチャート、モックアップ、ワイヤーフレーム、マインドマップ、組織図、ネットワーク図、AWS構成図、UML図などに対応。原版では、生産性を高める機能により作図が3倍速くなると説明されている。 |
| [Keynote](https://www.apple.com/keynote/) | - | $19.99 | ツールや視覚効果を使ったプレゼンテーション作成。[Keynotopia Themes]( https://keynotopia.com)で、iOS、Androidなどのプラットフォームで一般的なUI要素を利用できる。 |
| [OmniGraffle](https://www.omnigroup.com/omniGraffle) | [@omniGraffle](https://twitter.com/omniGraffle) | $99.99 | 図、工程図、簡単なページレイアウト、Webサイトのワイヤーフレーム、グラフィックデザインを作成する作図ツール。図形を動かしても線の接続を保ち、スタイル設定のツールやワンクリックで図を整える機能を提供。 |
| [moqups](https://moqups.com) | [@moqups](https://twitter.com/moqups) | $9/月 - $39/月 | 解像度に依存しないSVGのモックアップ、ワイヤーフレーム、UIコンセプト、プロトタイプを作成するHTML5アプリ。 |
| [Balsamiq](https://balsamiq.com) | [@balsamiq](https://twitter.com/balsamiq) | $9/月 - $199/月 | ホワイトボードでスケッチする感覚をコンピューター上で再現する、素早くワイヤーフレームを作成するツール。 |
| [Proto.io](https://proto.io) | [@protoio](https://twitter.com/protoio) | $24/月 - $199/月 | 忠実度が高く、対話的な操作に全面対応したモバイルアプリのプロトタイプを数分で作成。ブラウザーや端末で表示し、見た目や動作を体験できる。iPhone、iPad、Android端末などのスマートフォンとタブレットに対応。 |
| [invision](https://www.invisionapp.com) | [@InVisionApp](https://twitter.com/InVisionApp) | $0/月 - $100+/月 | iOS・Android向けデザインに使う、無料のWeb・モバイルのプロトタイピングとUIモックアップのツール。デザインをクリックして操作できるプロトタイプやモックアップに変換し、他の人と共有・共同作業できる。 |
| [Sketch](https://www.sketchapp.com) | [@sketchapp](https://twitter.com/sketchapp) | $99.00 | Mac向けの軽量なデジタルデザインソフトウェア。 |
| [Figma](https://www.figma.com) | [@figmadesign](https://twitter.com/figmadesign) | 無料 - $12/編集者/月 | 共同作業とチームを重視したデザイン・プロトタイピングのツール。 |
| [Anima](https://www.animaapp.com) | [@animaapp](https://twitter.com/animaapp) | $0 - $39/月 | SketchのWebデザインを、画面サイズに対応する操作可能なデザインに変換し、HTML、JavaScript、CSSとして書き出す。 |
| [Framer](https://www.framer.com/) | [@framer](https://twitter.com/framer) | 無料試用 - $12/月 | 画面サイズに対応するピクセル単位で精密なデザイン、忠実度の高いプロトタイプ、共同作業。原版では、利用する数千のプロダクトチームの例としてDropbox、Pinterest、Twitterが挙げられている。 |
| [UXPin](https://www.uxpin.com/) | [@uxpin](https://twitter.com/uxpin) | $0 - $23+/月 | デザインシステム、プロトタイピング、ドキュメント作成を組み合わせるUXデザインプラットフォーム。 |

## コンテンツ制作・インフォグラフィック<a id="content-creationinfographics"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [AudienceOps](https://audienceops.com) | [@AudienceOps](https://twitter.com/AudienceOps) | $850/月 - $1700/月 | コンテンツ戦略全体を管理し、チームがプロダクトに集中できるようにする。 |
| [Visual.ly](https://visual.ly) | [@Visually](https://twitter.com/Visually) | $195/月 - $994/月 | デザイナー、ジャーナリスト、アニメーター、開発者による、ブランド向けの独自のビジュアルコンテンツ制作。原版では、数千のクリエイティブ専門家のネットワークと説明されている。 |
| [Canva](https://www.canva.com) | [@canva](https://twitter.com/canva) | 無料 - $9.95/月 | 文字や画像を使ってソーシャルメディア用の画像を作成。選ぶ画像によって無料または数ドルで利用できる。 |

## 顧客のフィードバック<a id="customer-feedback"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Effortless Reviews](https://effortlessreviews.com) | [@effortlessrevie](https://twitter.com/EffortlessRevie) | 無料 - $25/月 | 顧客に連絡してフィードバックやレビューを集める。 |
| [PickFu](https://www.pickfu.com) | [@pickfu](https://twitter.com/pickfu) | $50/月 - $299/月 | 質問に対する人々の意見を集める。原版では、数分で得られる即時かつ偏りのない、示唆に富む消費者のフィードバックと説明されている。 |
| [Promoter.io](https://www.promoter.io) | [@Promoter_io](https://twitter.com/promoter_io) | $199/月 - $479/月 | NPS（Net Promoter）を使い、収益の増加と解約率の低減を目指す、予測的な顧客情報の分析とインサイト。 |
| [Raaft.io](https://www.raaft.io/) | [@RaaftRetain](https://twitter.com/RaaftRetain) | $79/月 - $229/月 | 解約するすべての顧客から即座にフィードバックを集め、継続利用のための提案を行って解約率を下げる。 |
| [ProsperStack](https://prosperstack.com/) | [@prosperstack](https://twitter.com/prosperstack) | 無料 - $149+ | 顧客の解約時のフィードバックを集め、解約防止を自動化。 |

## データベース<a id="database"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Citus](https://www.citusdata.com) | [@citusdata](https://twitter.com/citusdata) | - | シャーディング、レプリケーション、クエリの並列化によりPostgreSQLを水平に拡張。オープンソースソフトウェア、企業向けソフトウェア、完全管理型のデータベースサービスとして提供。 |
| [Datomic](https://www.datomic.com) | [@datomic_team](https://twitter.com/datomic_team) | - | 不変のデータ、強い整合性、読み取り処理の水平拡張、組み込みのキャッシュを備える、分散型の完全なトランザクション対応データベース。クラウドアーキテクチャ上で拡張性と柔軟性を持つアプリケーション向けに設計されている。 |
| [Tinkerpop](https://tinkerpop.apache.org/) | - | - | グラフ向けのオープンソースソフトウェア製品。 |
| [Vertabelo](http://www.vertabelo.com) | [@vertabelo](https://twitter.com/Vertabelo) | - | PostgreSQL、MySQL、Oracle、SQL Server、SQLite、IBM DB2向けのWeb上の視覚的なデータベース設計。既存の構造をSQL・XMLから、またはリバースエンジニアリングで取り込める。SQLスクリプトや、Propel、jOOQ、SQLAlchemy、[Vertabelo Mobile ORM](http://mobile-orm.vertabelo.com/)などのORM向けコードを生成。 |
| [TablePlus](https://tableplus.io) | [@TablePlus](https://twitter.com/TablePlus) | $0 - $49 | MySQL、PostgreSQL、SQLite、Microsoft SQL Server、Amazon Redshift、MariaDB、CockroachDB、Vertica、Cassandra、Oracle、Redisのデータベースを作成・アクセス・クエリ・編集するGUIツールを備えたネイティブクライアント。 |
| [DBngin](https://dbngin.com) | [@DBngin](https://twitter.com/dbngin) | 無料 | ワンクリックで任意のバージョンのローカルデータベースサーバーを構築するバージョン管理ツールと、原版で説明されている。 |


## 会計・請求書発行<a id="accountinginvoicing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Harvest](https://www.getharvest.com) | [@harvest](https://twitter.com/harvest) | $12/月 - $99/月 | タイムシートと承認手続きを備えた、インストール不要の時間追跡。原版では、数秒で設定できると説明されている。 |
| [Ballpark](https://www.getballpark.com) | [@ballparkapp](https://twitter.com/ballparkapp) | $12/月 - $99/月 | 代金の受け取りや、顧客・同僚とのプロジェクトについてのやり取りに使う、Web上のペーパーレスの請求書・見積書。 |
| [PaySimple](https://paysimple.com) | [@PaySimple](https://twitter.com/PaySimple) | $34.95/月 | 請求、回収、入金を自動化する支払い管理。定期請求、電子小切手処理、口座振替、クレジットカード処理を備える、カスタマイズされた安全なASPソリューション。原版では、手数料は利用可能なものの中で最も低い部類と説明されている。 |
| [FreshBooks](https://www.freshbooks.com) | [@freshbooks](https://twitter.com/freshbooks) | $19.95/月 - $39.95/月 | 会計の専門家ではない人向けの会計ソフトウェア。月曜から金曜の米国東部夏時間（EDT）9時〜18時に、担当者によるサポートを提供。 |
| [FreeAgent](https://www.Freeagent.com) | [@Freeagent](https://twitter.com/Freeagent) | US $20/月 | 電子銀行明細で入出金を照合し、月ごとの残高グラフを作成する会計ソフトウェア。原版では、3万5000以上のフリーランサーや小規模事業者が利用すると記載されている。 |
| [Blinksale](https://www.blinksale.com) | [@blinksale](https://twitter.com/blinksale) | $15.00 | 12種類を超える請求書デザインやお礼のメッセージを使える請求書発行。原版では、一つのプラン・料金で無制限に利用できると宣伝されているが、機能ごとの上限は明記されていない。 |
| [Cashboard](https://cashboardapp.com/) | [@cashboard](https://twitter.com/cashboard) | $8.25/月 - $250/月 | 見積書、請求書、時間追跡、オンライン決済を組み合わせる、フリーランサー向けの時間追跡と請求書発行。開発者自身のソフトウェアコンサルティング事業向けに2007年春に公開。原版では、世界で数千人が利用し、これらの機能を組み合わせた最初のツールだったと説明されている。 |
| [Paydirt](https://paydirtapp.com) | [@paydirtapp](https://twitter.com/paydirtapp) | $8/月 - $149/月 | 時間追跡、請求書発行、オンライン決済。タスクごとの開始ボタンを使い、どのページからでもワンクリックでタスクのタイマーを開始。 |
| [inDinero](https://www.indinero.com) | [@indinero](https://twitter.com/indinero) | - | - |
| [QuickBooks Online](https://c27.qbo.intuit.com/qbo27/login?webredir) | - | - | - |
| [Xero](https://www.xero.com) | [@Xero](https://twitter.com/xero/) | - | - |
| [Fast409A](https://Fast409A.io) | [@ltse](https://twitter.com/ltse) | $2000（スタートアップの資金調達段階による） | ソフトウェアと人間の専門知識を組み合わせ、個々のスタートアップに合わせた409A評価。原版では、顧客が提出にかける時間は1時間以内で、納品は数週間ではなく数日で行うと説明されている。 |
| [Runway](https://startuprunway.io) | [@ltse](https://twitter.com/ltse) | 無料 | スタートアップの資金計画と管理を視覚化。シナリオを検討し、計画した支出と実際の支出を追跡。 |
| [WaveApps](https://www.waveapps.com/) | [@WaveHQ](https://twitter.com/WaveHQ) | 無料 | 無料の会計ソフトウェア。原版の説明では、取引、請求書発行、給与計算には通常の料金がかかる。 |
| [InvoiceNinja](https://www.invoiceninja.com/) | [@invoiceninja](https://twitter.com/invoiceninja) | 無料, $8, $12 | 予算に応じて、独自ブランドでソフトウェアをセルフホストするか、オンラインサービスを利用。 |
| [Bonsai](https://www.hellobonsai.com/) | [@bonsaiinc](https://twitter.com/bonsaiinc) | 無料, $19, $29 | 会計、経費、提案書の機能を統合した、オンラインの請求書発行と決済。 |

## プライバシーポリシー・利用規約・法的文書<a id="privacy-policy-terms--conditions-legal-documents"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [iubenda](https://www.iubenda.com) | [@iubenda](https://twitter.com/iubenda) | 無料 - $27/年 - カスタマイズサービス | 6言語から選び、カスタマイズ可能で自動更新されるプライバシーポリシーを生成。文書はサービス側でホスト・保守され、弁護士の支援を受ける。独自のプライバシーポリシーや利用規約には、有料の法的支援を利用できる。 |
| [Choose a license](https://choosealicense.com/licenses/) | [@ChooseALicense](https://twitter.com/ChooseALicense) | 無料 | ソフトウェア、データ、メディア、ドキュメント、フォント、これらを組み合わせたプロジェクト向けのライセンスの選択肢と比較。 |

## 収益分析<a id="income-analytics"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Baremetrics](https://baremetrics.com) | [@Baremetrics](https://twitter.com/Baremetrics) | $79/月 - $249/月 | Stripeアカウントから数十種類の指標をワンクリックで取得。 |

## 決済・請求・ダウンロード<a id="payments-billing--downloads"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [PayPal](https://www.paypal.com) | [@PayPal](https://twitter.com/PayPal) | - | 国際的な電子商取引の決済と、インターネットを使った送金。小切手や為替などの紙を使う方法に代わる電子的な手段を提供。 |
| [Gumroad](https://gumroad.com) | [@gumroad](https://twitter.com/gumroad) | - | デジタルダウンロードや映画を視聴者に直接販売。原版では、数秒で販売を始められ、コンバージョン率が高く、手数料が低く、顧客に関する管理の自由度が高いと説明されている。 |
| [FetchApp](https://www.fetchapp.com) | [@fetchapp](https://twitter.com/fetchapp) | $5/月 - $500/月 | ダウンロード可能な商品を販売し、デジタル形式で届ける。 |
| [Chargify](https://www.chargify.com) | [@chargify](https://twitter.com/chargify) | $459/月 - $65/月 | 顧客の登録、決済、クーポン、アップグレードなど、継続的な収益を管理。さまざまな料金モデルで一回払い・継続払いの料金を請求し、カードへの課金、請求書やリマインダーの送付を行う。 |
| [Recurly](https://recurly.com) | [@Recurly](https://twitter.com/Recurly) | $99/月 - $259/月 | 事業のニーズに合わせて拡張する、サブスクリプションの請求の自動化。原版では、素早い設定と決済を受け付けるための連携機能が説明されている。 |
| [ChargeOver](https://chargeover.com) | [@ChargeOver](https://twitter.com/chargeover) | $65/月- $549/月 | 支払いプラン、継続・一回払いの請求、主要な決済ゲートウェイのバックエンドに対応する請求書発行プラットフォーム。 |
| [Chargebee](https://www.chargebee.com/) | [@chargebee](https://twitter.com/chargebee) | $249/月- $599/月 | 急成長するB2B SaaS事業向けの、サブスクリプションの請求と収益業務。 |

## 請求・決済処理<a id="billing--payment-processing"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Braintree](https://www.braintreepayments.com) | [@braintree](https://twitter.com/braintree) | - | iOS、Android、Windows Phone向けのネイティブSDKで、アプリやWebサイトで決済を受け付ける。原版では、取引を処理する企業の例としてUber、Airbnb、HotelTonight、Fabが挙げられている。 |
| [Dwolla](https://www.dwolla.com) | [@dwolla](https://twitter.com/dwolla) | 25¢/取引 | 記録された説明では、Dwolla, Inc.はVeridian Credit Unionの代理人であり、Dwollaネットワークアカウントに関連するすべての資金は同組合の共同口座に保管されるとされている。これらの資金は個別の保険の対象にはならず、National Credit Union Share Insurance Fundによる持分保険の対象にもならない可能性がある。Dwolla, Inc.は、利用者の資金移動指示をVeridian Credit Unionに伝えるソフトウェアプラットフォームを運営する。 |
| [Stripe](https://stripe.com) | [@stripe](https://twitter.com/stripe) | 2.9% + 30¢/成功した課金。 | Stripe Checkoutは、決済フォームを一から作ることなく、デスクトップ・モバイル向けにカスタマイズ可能な決済フローを提供。原版では、追加のコードを書かずにCheckoutが最新の状態に保たれると記載されている。 |
| [Pin](https://pinpayments.com) | [@PinPayments](https://twitter.com/PinPayments) | 2.9% + 30¢/成功した課金。 | クレジットカードの決済サービス。原版では、世界中の利用者から決済を受け付けるには通常は加盟店口座が必要で、通貨ごとに口座を開設することは小規模事業者には難しすぎたり、費用が高すぎたりする可能性があると説明されている。 |
| [PayMill](https://www.paymill.com) | [@Paymill](https://twitter.com/Paymill) | 0.28 € - 0.25 € | Webサイトの流れに合わせて決済画面をカスタマイズできるオンライン決済。 |
| [Spreedly](https://www.spreedly.com) | [@spreedly](https://twitter.com/spreedly) | $150/月 - $1500/月 | 決済ゲートウェイをまたいで複数の加盟店口座にアクセス。直接利用する加盟店は世界中で取引し、地理的条件などの業務ルールに応じて特定の口座へ入金できる。SaaSプラットフォームは個々の顧客の加盟店口座に対応できる。各加盟店口座には、取引で口座を識別する固有の決済ゲートウェイトークンがある。 |
| [WePay](https://go.wepay.com) | [@wepay](https://twitter.com/wepay) | 2.9% + 30¢/取引。 | 顧客体験を管理できる、マーケットプレイス、クラウドファンディングのプラットフォーム、業務ソフトウェア・ツール向けの決済。原版では、これと、不正や規制上のリスクから100%保護する機能を組み合わせた最初の決済エンジンだったと主張されている。 |
| [Paddle](https://paddle.com) | [@PaddleHQ](https://twitter.com/PaddleHQ) | 5% + 50¢/取引。 | デスクトップアプリやSaaSサブスクリプションの決済処理と履行。VAT（付加価値税）や請求書発行も含む。 |
| [Fattmerchant](https://fattmerchant.com/) | [@Fattmerchant](https://twitter.com/fattmerchant) | 0% + インターチェンジ手数料 + $99+/月 | 決済処理を統合。Fattmerchant APIを使ってアプリ、Webサイト、ソフトウェア、ハードウェアを連携させ、対面・オンラインの両方の取引で、主要なクレジットカード、ACH決済などを受け付ける。 |

## ひな型<a id="boilerplates"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Lad](https://lad.js.org) | [@niftylettuce](https://twitter.com/niftylettuce) | 無料 | ジョブスケジューラー、メールの自動プレビュー、テンプレートなどを備える、Node.js向けKoa WebアプリとAPIフレームワークのひな型を生成。 |
| [Yeoman](https://yeoman.io/) | [@yeoman](https://twitter.com/yeoman) | 無料 | モダンなWebアプリのひな型を生成するツール。 |
| [Hix on Rails](https://hixonrails.com/) | [@hixonrails](https://twitter.com/hixonrails) | $39 - $249 | Ruby on Railsプロジェクトの生成ツール。 |
| [JHipster](https://www.jhipster.tech/) | [@jhipster](https://twitter.com/jhipster) | 無料 | Java開発者向けに、Spring BootとAngularまたはReactを組み合わせるプロジェクト生成ツール。 |
| [Divjoy](https://divjoy.com/) | [@divjoy](https://twitter.com/divjoy) | $59 | Reactのコードベースの生成ツール。 |
| [WPPB](https://wppb.me/) | - | 無料 | WordPressプラグインのひな型の生成ツール。 |

## 電話・PBX・SMS<a id="phonepbxsms"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Plivo](https://www.plivo.com/) | [@plivo](https://twitter.com/plivo) | - | - |
| [Cisco Tropo](https://flowdocs.built.io/services/cisco-tropo) | - | - | - |
| [Twilio](https://www.twilio.com/) | [@twilio](https://twitter.com/twilio) | - | - |
| [PhoneBooth](http://www.phonebooth.com/) | - | - | - |
| [TalkDesk](https://www.talkdesk.com/) | [@Talkdesk](https://twitter.com/talkdesk) | - | - |
| [HelloFax](https://www.hellofax.com/) | [@HelloFax](https://twitter.com/hellofax) | - | - |
| [Dialpad](https://www.dialpad.com) | [@DialpadHQ](https://twitter.com/dialpadHQ) | $15/ユーザー/月 | インターネットFAXを備える電話・会議システム。利用者がどこで働いても使えるように設計されている。 |


## システム監視<a id="system-monitoring"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [AppNeta (Tracelytics)](https://www.appneta.com/) | [@AppNeta](https://twitter.com/Appneta) | - | - |
| [Riemann](http://riemann.io) | - | - | - |
| [Pingdom](https://www.pingdom.com/) | [@pingdom](https://twitter.com/pingdom) | - | - |
| [UptimeRobot](https://uptimerobot.com/) | [@uptimerobot](https://twitter.com/uptimerobot) | - | - |
| [Where's It Up?](https://wheresitup.com/) | - | - | - |
| [Nagios](https://www.nagios.org/) | [@nagiosinc](https://twitter.com/nagiosinc) | - | - |
| [Smokeping](https://oss.oetiker.ch/smokeping/) | - | - | - |

## 検索<a id="search"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Bonsai](https://bonsai.io/) | [@bonsaisearch](https://twitter.com/bonsaisearch) | - | - |
| [WebSolr](https://www.websolr.com) | [@websolr](https://twitter.com/websolr) | - | - |
| [Searchify](http://www.searchify.com/) | [@getsearchify](https://twitter.com/getsearchify) | - | - |
| [SearchBlox](https://www.searchblox.com) | [@searchblox](https://twitter.com/searchblox) | - | - |

## セキュリティ<a id="security"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Foil](https://usefoil.com) | [@usefoil](https://twitter.com/usefoil) | - | Web、iOS、Android向けの容易に組み込めるSDKで、AIエージェント、ボット、悪意のある端末を検出。 |
| [Burp](https://portswigger.net/burp) | [@Burp_Suite](https://twitter.com/Burp_Suite) | - | - |
| [DuoSecurity](https://duo.com/) | [@duosec](https://twitter.com/duosec) | - | - |
| [Authy](https://authy.com/) | [@Authy](https://twitter.com/Authy) | - | - |
| [Hotspot Shield](https://www.hotspotshield.com/) | [@HotspotShield](https://twitter.com/hotspotshield) | - | - |
| [Encrypt.me](https://encrypt.me) | [@encryptme](https://twitter.com/encryptme/) | - | - |
| [Tinfoil Security](https://www.tinfoilsecurity.com/) | [@tinfoilsecurity](https://twitter.com/tinfoilsecurity) | - | - |

## 配送<a id="shipping"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Shipwire](https://www.shipwire.com) | [@shipwire](https://twitter.com/shipwire) | - | - |
| [Shyp](https://www.shyp.com) | [@shyp](https://twitter.com/shyp/) | - | - |
| [Whiplash](https://sales.getwhiplash.com/) | - | - | - |

## 利用者のフィードバック<a id="user-feedback"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Uservoice](https://www.uservoice.com/) | [@UserVoice](https://twitter.com/uservoice) | $499/月 - $999+/月 | 利用者のフィードバックを集め、理解し、対応。 |
| [Userecho](https://userecho.com/) | [@userecho](https://twitter.com/userecho) | - | - |

## デザイナー<a id="designers"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Dribbble](https://dribbble.com) | [@dribbble](https://twitter.com/dribbble) | - | - |
| [Sortfolio](https://sortfolio.com) | [@Sortfolio](https://twitter.com/Sortfolio) | - | - |
| [Behance](https://www.behance.net) | [@Behance](https://twitter.com/Behance) | - | - |

## ノート<a id="notes"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Google Docs](https://www.google.com/docs/about/) | [@googledocs](https://twitter.com/googledocs) | - | - |
| [Evernote](https://evernote.com/) | [@evernote](https://twitter.com/evernote) | - | - |
| [Google Keep](https://www.google.com/keep/) | - | - | - |
| [Workflowy](https://workflowy.com/) | [@WorkFlowy](https://twitter.com/workflowy) | - | - |
| [Quip](https://quip.com/) | [@quip](https://twitter.com/quip) | - | - |
| [Etherpad](https://etherpad.org/) | [@EtherpadOrg](https://twitter.com/EtherpadOrg) | - | - |
| [Kami](https://www.kamiapp.com/) | [@usekamiapp](https://twitter.com/usekamiapp) | - | ブラウザーで文書を閲覧・編集・注釈付けし、共同作業を行う。 |
| [OneNote](https://www.onenote.com/) | [@msonenote](https://twitter.com/msonenote) | 無料 | 複数の端末で使えるデジタルノートアプリ。 |
| [Taskade](https://www.taskade.com) | [@taskade](https://twitter.com/taskade) | 無料 | チーム向けに、ノート、チェックリスト、アウトラインをリアルタイムで共同作成。 |
| [Nulis](https://nulis.io) | - | - | アウトライン作成とマインドマッピングのツール。 |
| [Dynalist](https://dynalist.io/) | [@dynalisthq](https://twitter.com/dynalisthq) | 無料 - $8/月 | アウトライン、ノート、チェックリストの作成。 |
| [Notion](https://www.notion.so/) | [@notionhq](https://twitter.com/notionhq) | 無料 - $8/ユーザー/月 | 執筆、計画、共同作業、整理を一つのツールで行う。 |
| [Inkdrop](https://inkdrop.app/) | [@inkdrop_app](https://twitter.com/inkdrop_app) | $4.99/月 | Markdownを使うノートアプリ。 |

## グループのコミュニケーション・チャットツール<a id="group-communicationchat-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Kandan](http://getkandan.com) | [@KandanApp](https://twitter.com/kandanapp) | - | - |
| [Yammer](https://www.yammer.com/) | [@Yammer](https://twitter.com/yammer) | - | - |
| [Limechat](http://limechat.net/) | - | - | - |
| [Flowdock](https://www.flowdock.com/) | [@flowdock](https://twitter.com/flowdock) | 5人までのチームは無料 | - |
| [Slack](https://slack.com/) | [@SlackHQ](https://twitter.com/slackhq) | 無料 - $12.5/ユーザー | Webhookや他のツールとの連携を備える、チームの共同作業とチャット。 |
| [Skype](https://www.skype.com) | [@Skype](https://twitter.com/Skype) | 無料 | ビデオ会議、チャット、VoIPによる音声通話。 |
| [Google Hangouts](https://hangouts.google.com/) | - | 無料 | 複数人でのビデオ通話に対応する、Googleのブラウザー上のビデオ会議・チャットアプリ。 |
| [GoToMeeting](https://www.gotomeeting.com) | [@GoToMeeting](https://twitter.com/gotomeeting) | - | - |
| [IRCCloud](https://www.irccloud.com/) | - | - | - |
| [Buddycloud](http://buddycloud.com) | [@buddycloud](https://twitter.com/buddycloud) | - | - |
| [Gitter](https://gitter.im) | [@gitchat](https://twitter.com/gitchat) | - | GitHub連携を備える、オープンソース・非公開の開発チーム向けチャット。 |
| [appear.in](https://appear.in/) | [@appear_in](https://twitter.com/appear_in) | - | ワンクリックでビデオ通話を開始。 |
| [Convo](https://www.convo.com/) | [@convo](https://twitter.com/convo) | - | - |
| [Zoom](https://www.zoom.us/) | [@zoom_us](https://twitter.com/zoom_us) | - | - |
| [Telegram](https://telegram.org/) | [@telegram](https://twitter.com/telegram) | - | - |
| [Matrix](https://matrix.org/) | [@matrixdotorg](https://twitter.com/matrixdotorg) | - | [他のサービスへのブリッジ](https://matrix.org/docs/projects/try-matrix-now.html#application-services)を備える、分散型のオープンソースチャットプロトコル。 |


## 遠隔での共同作業<a id="remote-collaboration"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [TeamViewer](https://www.teamviewer.com) | [@TeamViewer](https://twitter.com/teamviewer) | - | - |
| [Screenmailer](https://www.screenmailer.com) | [@Screenmailer](https://twitter.com/screenmailer) | - | - |

## DNS

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Forward Email](https://forwardemail.net) | [@niftylettuce](https://twitter.com/niftylettuce) | 無料 | 自分のドメイン名で数の制限なくメールアドレスを作成し、メールを転送。すべての宛先を受け付けるキャッチオール、ワイルドカード、使い捨ての転送用アドレスに対応。原版では、DNSを使うこの転送サービスは完全に無料と説明されている。 |
| [DynDNS](https://dyn.com/dns/) | [@Dyn](https://twitter.com/Dyn) | - | - |
| [Cloudflare](https://www.cloudflare.com/) | [@Cloudflare](https://twitter.com/Cloudflare) | - | - |
| [Amazon Route 53](https://aws.amazon.com/route53/) | - | - | - |
| [DNSimple](https://dnsimple.com/) | [@dnsimple](https://twitter.com/dnsimple) | - | - |
| [ClouDNS](https://www.cloudns.net/) | [@ClouDNS](https://twitter.com/ClouDNS) | - | - |
| [FreeDNS](https://freedns.afraid.org) | - | - | - |
| [Noip](https://noip.com) | [@NoIPcom](https://twitter.com/NoIPcom) | 無料 | 無料のホスト名を取得し、IPアドレスが固定されていない場合でもDNSによる名前解決を継続。 |

## 稼働状況のブログ・利用者への通知<a id="status-blogsuser-alerts"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [API Status Check](https://apistatuscheck.com) | - | 無料 | AWS、Stripe、Twilio、GitHubなど50を超える主要なAPI・クラウドサービスの稼働状況ページを集約する、リアルタイム監視ダッシュボード。メール通知を備える。 |
| [StatusPage.io](https://www.statuspage.io/) | [@Statuspage](https://twitter.com/Statuspage) | - | - |
| [Tumblr](https://www.tumblr.com/) | [@tumblr](https://twitter.com/tumblr) | - | - |
| [HelloBar](https://www.hellobar.com ) | - | - | - |
| [Status.io](https://status.io) | [@statusio](https://twitter.com/statusio) | - | ホスト型のシステム稼働状況ページ。 |

## フォーム・アンケート<a id="forms--surveys"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Wufoo](https://www.wufoo.com) | [@Wufoo](https://twitter.com/Wufoo) | - | - |
| [Google Forms](https://www.google.com/intl/ru/forms/about/) | [@googledocs](https://twitter.com/googledocs) | - | - |
| [Typeform](https://www.typeform.com) | [@typeform](https://twitter.com/typeform) | $0/月 - $25/月 | さまざまなプラットフォームで、回答者が使いやすい形式で質問を作成し、統合されたツールで回答を分析。原版では、回答者の関心を引くことで回答完了率が上がると説明されている。 |
| [Qualaroo](https://qualaroo.com) | [@Qualaroo](https://twitter.com/Qualaroo) | $63/月 - 499/月 | 事業の成果改善を目指し、顧客のインサイトを得るためのWebサイトのアンケート。 |
| [Formcarry](https://formcarry.com) | - | $0/月 - $99/月 | バックエンドのコードを書かずにフォームを処理。 |
| [FormKeep](https://formkeep.com) | [@formkeep](https://twitter.com/formkeep) | $59/月 - $199/月 | スパム対策、1000を超えるサービスとの連携、データ保持ポリシーなどを組み込んだ、フォームのバックエンドサービス。 |
| [Formcake](https://formcake.com) | - | 無料 - $19.99/月 | Zapier連携と、Webhook、メールなどの動作のトリガーを備える、開発者向けのフォームのバックエンド。 |

## ソースコードのホスティング<a id="source-code-hosting"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [BitBucket](https://bitbucket.org/) | [@Bitbucket](https://twitter.com/bitbucket) | - | - |
| [Codebase](https://www.codebasehq.com/) | - | - | - |
| [GitHub](https://github.com/) | [@github](https://twitter.com/github) | - | - |
| [Unfuddle](https://unfuddle.com/) | [@unfuddle](https://twitter.com/unfuddle) | - | - |
| [GitLab](https://about.gitlab.com/) | [@gitlab](https://twitter.com/gitlab) | - | - |
| [Launchpad](https://launchpad.net/) | - | - | - |
| [TuxFamily](https://www.tuxfamily.org) | - | - | - |
| [KForge](https://pypi.org/project/kforge/) | - | - | - |
| [VersionShelf](https://www.versionshelf.com) | - | - | - |
| [Assembla](https://www.assembla.com/) | [@assembla](https://twitter.com/assembla) | $24/月 - $99/月 | タスクと統合されたGitホスティング。コードベースの保守に使う、オンラインのファイル閲覧、リビジョン比較、コードのマージを備える。 |
| [Source Hut](https://git.sr.ht/) | - | - | 開発プラットフォームとしてホストされるオープンソースツール群、Source HutのGitサービス。詳細: https://sourcehut.org/ |

## デザインの共同作業<a id="design-collaboration"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [ConceptShare](https://www.conceptshare.com) | [@conceptshare](https://twitter.com/conceptshare) | - | - |
| [Framebench](http://www.framebench.com) | [@framebench](https://twitter.com/framebench) | - | オンラインでファイルを共有・レビューし、議論。 |
| [Helio](https://helio.app/) | [@ZURB](https://twitter.com/zurb) | - | - |

## PaaS

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Heroku](https://www.heroku.com) | [@heroku](https://twitter.com/heroku) | 認証済みアカウントは月1000時間無料 | - |
| [Cloud Foundry](https://www.cloudfoundry.org) | [@cloudfoundry](https://twitter.com/cloudfoundry) | - | プラットフォームをセルフホストするか、対応するホスティングサービスを利用。 |
| [Clever Cloud](https://www.clever-cloud.com ) | [@clever_cloud](https://twitter.com/clever_cloud) | - | - |
| [Google App Engine](https://cloud.google.com/appengine/docs/ ) | - | - | - |
| [OpenShift](https://www.openshift.com) | [@openshift](https://twitter.com/openshift) | - | パブリック・プライベートクラウドでアプリを開発・ホスト・拡張するツール。 |
| [Engine Yard](https://www.engineyard.com) | [@engineyard](https://twitter.com/engineyard) | - | - |
| [Jelastic](https://jelastic.com/) | [@Jelastic](https://twitter.com/Jelastic) | - | - |
| [CloudBees](https://www.cloudbees.com) | [@CloudBees](https://twitter.com/cloudbees) | - | - |
| [Microsoft Azure](https://azure.microsoft.com) | [@Azure](https://twitter.com/azure) | - | 原版では、IaaSで知られるサービスと説明されている。 |
| [Amazon Web Services](https://aws.amazon.com/elasticbeanstalk/) | [@awscloud](https://twitter.com/awscloud) | - | 原版では、Azureと同様にIaaSのほうでよく知られるサービスと説明されている。 |
| [AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/) | [@Azure](https://twitter.com/azure) | - | - |
| [Scalingo](https://scalingo.com) | [@ScalingoHQ](https://twitter.com/ScalingoHQ) | - | 欧州のPaaS。 |
| [Eldarion](https://eldarion.com/) | [@eldarion](https://twitter.com/eldarion) | - | 原版によると、EldarionがPythonとGoで開発したオープンソースのKelproject向けサービス。 |

## VPS

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Linode](https://www.linode.com/) | [@linode](https://twitter.com/linode) | - | - |
| [Ramnode](https://www.ramnode.com/) | [@RamNode](https://twitter.com/ramnode) | - | - |
| [DigitalOcean](https://www.digitalocean.com/) | [@digitalocean](https://twitter.com/digitalocean) | - | - |
| [Vultr](https://www.vultr.com/) | [@Vultr](https://twitter.com/vultr/) | - | - |
| [OVH](https://www.ovh.com) | [@OVHcloud](https://twitter.com/OVHcloud) | - | - |
| [Scaleway](https://www.scaleway.com/) | [@Scaleway](https://twitter.com/scaleway/) | - |  |


## ジオコーディング<a id="geocoding"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [OpenCage Geocoder](https://opencagedata.com/) | [@OpenCageData](https://twitter.com/opencagedata) | $0-1000/月 | オープンデータを使い、世界を対象に住所などから座標への変換とその逆の変換を行うジオコーディングAPI。無料試用、チュートリアル、多くのプログラミング言語向けのライブラリを提供。 |
| [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro) | - | - | GoogleのジオコーディングAPI。原版では、登録にクレジットカードが必要と記載されている。 |
| [Pelias](https://pelias.io) | [@pelias_geocoder](https://twitter.com/pelias_geocoder) | 無料枠あり、利用量により変動 | Elasticsearchを基盤にした、世界を検索対象とするモジュール構成のオープンソースジオコーダー。原版では、高速で正確と説明されている。 |


## Heroku向けツール<a id="heroku-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Hirefire](https://hirefire.io/) | - | - | - |

## AWS向けツール<a id="aws-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Ylastic](http://ylastic.com/) | [@ylastic](https://twitter.com/ylastic) | - | - |
| [Skeddly](https://www.skeddly.com) | [@skeddly](https://twitter.com/skeddly) | - | - |
| [GorillaStack](https://www.gorillastack.com) | [@GorillaStack](https://twitter.com/gorillastack) | - | コスト最適化やバックアップなどのAWSの処理を自動化。 |

## データベースサービス<a id="database-aas"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [HumongouS.io](https://www.humongous.io) | - | - | MongoDB向けのWeb上のグラフィカルユーザーインターフェース。 |
| [mLab](https://mlab.com ) | [@mlab](https://twitter.com/mlab) | - | - |
| [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | [@MongoDB](https://twitter.com/MongoDB) | 無料 - $1000+/月 | MongoDBの公式ホスト型サービス。 |
| [Compose](https://www.compose.com) | [@composeio](https://twitter.com/composeio/) | - | ElasticsearchとMongoDBのデータベースをデプロイ・ホスト・拡張する完全管理型のプラットフォーム。 |
| [RedisLabs](https://redislabs.com) | [@RedisLabs](https://twitter.com/RedisLabs) | 無料 - $338+/月 | 高可用性と拡張機能を備える、RedisまたはMemcacheのデータセット向けの完全管理型クラウドホスティング。原版では、性能は予測可能で安定していると説明されている。 |

## バックエンドサービス<a id="backend-aas"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Firebase](https://firebase.google.com) | [@Firebase](https://twitter.com/Firebase) | - | データをリアルタイムで保存・同期するAPI。クライアント側のコードでモバイル・Webアプリを構築でき、変更はWeb・モバイル端末間で反映される。原版では、数分でアプリを作成できると説明されている。 |
| [Hoodie](http://hood.ie/) | [@hoodiehq](https://twitter.com/hoodiehq) | - | - |
| [BaasBox](https://www.baasbox.com) | [@baasbox](https://twitter.com/baasbox) | - | - |
| [LoopBack](https://loopback.io/) | - | - | - |
| [Para](https://paraio.com) | [@Para_IO](https://twitter.com/para_io) | 無料 - $99/月 | 原版で柔軟かつ手頃な料金と説明されているバックエンドAPI。 |

## WebSocketサービス<a id="websockets-aas"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Pusher](https://pusher.com ) | [@pusher](https://twitter.com/pusher) | - | - |
| [ScaleDrone](https://www.scaledrone.com ) | [@scaledrone](https://twitter.com/scaledrone) | - | - |

## 運用の通知・スケジューリング<a id="ops-alerts-and-scheduling"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [PagerDuty](https://www.pagerduty.com/) | [@pagerduty](https://twitter.com/pagerduty) | - | - |
| [Opsgenie](https://www.opsgenie.com) | [@opsgenie](https://twitter.com/opsgenie) | $0 - $16/ユーザー/月 | 意味があり、対応につながる通知を設計し、適切な人に知らせるツール。 |
| [VictorOps](https://victorops.com/) | [@VictorOps](https://twitter.com/VictorOps/) | $9 - $49/ユーザー/月 | 最初の通知から事後レビューまで、DevOpsのライフサイクル全体でインシデントを管理。 |

## 動画ホスティング<a id="video-hosting"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Wistia](https://wistia.com ) | [@wistia](https://twitter.com/wistia) | - | - |
| [JW Player](https://developer.jwplayer.com) | - | - | 動画ホスティング、コンテンツ配信、再生、データ分析のAPIとツール。 |

## 知識の管理・Wiki<a id="knowledge-trackingwiki"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Confluence](https://www.atlassian.com/software/confluence) | [@Confluence](https://twitter.com/Confluence) | - | - |
| [Confluence Questions (Q&A for your team)](https://www.atlassian.com/software/confluence/questions) | - | - | - |
| bitbucketの標準Wiki | - | - | 独自のリポジトリを備え、MarkdownとCreoleに対応。原版では、Confluenceよりはるかに軽量と説明されている。 |
| [SlimWiki](https://slimwiki.com ) | [@slimwiki](https://twitter.com/slimwiki) | - | - |
| [Documize](https://www.documize.com/) | - | - | - |
| [Notion](https://www.notion.so/) | [@NotionHQ](https://twitter.com/NotionHQ) | 無料, $4 - $8/ユーザー/月 | 執筆、計画、共同作業、整理。 |
| [Slite](https://slite.com/) | [@sliteHQ](https://twitter.com/sliteHQ) | 無料, $6.67/ユーザー/月 | 製品仕様、社内ハンドブック、受け入れ研修、会議メモなどのドキュメント作成。 |

## 外部拠点へのバックアップ<a id="offsite-backups"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Tarsnap](https://www.tarsnap.com/) | - | - | - |
| [Rsync.net ](https://www.rsync.net/) | [@rsyncnet](https://twitter.com/rsyncnet) | - | - |
| [SpiderOak](https://spideroak.com) | [@spideroak](https://twitter.com/spideroak) | 最初の2gbは無料 - $100/100gb/年（特別価格は[twitter](https://twitter.com/spideroak)を確認） | プライバシーを保つファイルの保存・同期・共有。 |

## 個人用端末のバックアップ<a id="personal-machine-backups"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Crashplan](https://www.crashplan.com) | [@CrashPlanSMB](https://twitter.com/crashplansmb) | - | - |
| [Arq](https://www.arqbackup.com/) + S3/Glacier | - | - | - |

## リモートで働く人材<a id="remote-workers"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Upwork](https://www.upwork.com) | [@Upwork](https://twitter.com/Upwork) | - | - |
| [Freelancer](https://www.Freelancer.com/) | [@freelancer](https://twitter.com/freelancer) | - | - |
| [TaskArmy](https://taskarmy.com) | [@taskarmy](https://twitter.com/taskarmy) | - | - |
| [99Designs](https://99designs.com/) | [@99designs](https://twitter.com/99designs) | - | - |
| [Fiverr](https://www.fiverr.com) | [@fiverr](https://twitter.com/fiverr) | - | - |
| [Remotely Awesome Jobs](https://www.remotelyawesomejobs.com) | [@RemotelyAweJobs](https://twitter.com/RemotelyAweJobs) | - | - |

## デプロイ<a id="deployment"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Chef](https://www.chef.io) | [@chef](https://twitter.com/chef) | - | - |
| [Fabric](https://www.fabfile.org) | - | - | - |
| [Puppet](https://puppet.com) | [@puppetize](https://twitter.com/puppetize) | - | - |
| [Ansible](https://www.ansible.com) | [@ansible](https://twitter.com/ansible) | - | - |
| [Vagrant](https://www.vagrantup.com) | - | - | - |
| [Salt](https://www.saltstack.com/resources/community/) | [@SaltStack](https://twitter.com/SaltStack) | - | - |
| [Ngrok](https://ngrok.com) | - | - | - |

## SEOツール<a id="seo-tools"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [AccuRanker](https://www.accuranker.com/) | - | - | - |
| [Ahrefs](https://ahrefs.com) | [@ahrefs](https://twitter.com/ahrefs) | $79/月 - $2500/月 | 被リンク・Webサイトの分析、順位追跡、コンテンツ探索などのためのデジタルマーケティングツール群。 |
| [SerpBook](https://serpbook.com) | - | - | - |
| [WooRank](https://www.woorank.com) | [@woorank](https://twitter.com/woorank) | 無料 - $49/月 | Webサイトの最適化の取り組みを分析し、競合と順位を比較。150を超えるデータ項目を備え、独自ブランドを設定できるリアルタイムのレポートで、トラフィック、使いやすさ、コンバージョンに影響する問題を特定。分析データ、ソーシャルアカウント、キーワードを同期して、さらに追跡できる。 |
| [Moz](https://moz.com) | [@moz](https://twitter.com/moz) | $99/月 - $599/月 | サイト内の最適化状況の評価、競合の追跡、被リンク分析、順位追跡などの検索エンジン最適化ツール。 |
| [RatedWithAI](https://ratedwithai.com) | - | 無料 - $29/月 | WCAG 2.2への準拠を確認し、問題を検出して修正の指針を示す、AIを使うWebアクセシビリティスキャナー。原版ではさらに、アクセシビリティがSEOに影響し、GoogleがCore Web Vitalsやアクセシビリティのシグナルを順位付けに使うと主張されている。 |
| [KWFinder](https://kwfinder.com/) | [@mangools_com](https://twitter.com/mangools_com) | $30+/月 | キーワード調査ツール。 |
| [Animalz - Revive](https://revive.animalz.co/) | [@AnimalzCo](https://twitter.com/AnimalzCo) | 無料 | 更新すべき投稿を特定。 |

## API構築<a id="api-builder"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Postman](https://www.getpostman.com/) | [@postmanclient](https://twitter.com/postmanclient) | 無料 - $8/月 | APIの構築、テスト、ドキュメント作成、監視。原版では、500万人の開発者と10万社を超える企業が利用すると記載されている。 |
| [Deployd](https://deployd.com) | [@deploydapp](https://twitter.com/deploydapp) | 無料 (OSS) | Web・モバイルアプリ向けのAPIを設計・構築・拡張。原版では、数日ではなく数分で行えると説明されている。 |
| [Apiary](https://apiary.io) | [@apiary](https://twitter.com/apiaryio) | 無料 - $99/月 | 開発者が共同で行うAPIの設計、プロトタイピング、ドキュメント作成、テスト。 |
| [Postwoman](https://postwoman.io) | [@liyasthomas](https://twitter.com/liyasthomas) | 無料 (OSS) | 無料のAPIリクエスト構築ツール。原版では、高速で見た目も洗練されていると説明されている。 |

## パスワード管理<a id="password-management"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Lastpass](https://www.lastpass.com) | [@LastPass](https://twitter.com/LastPass) | 無料 - $7.5/ユーザー/月 | - |
| [1Password](https://1password.com) | [@1Password](https://twitter.com/1Password) | $2.99 - 7.99/ユーザー/月 | - |
| [Passpack](https://www.passpack.com) | [@passpack](https://twitter.com/passpack) | $18 - $480/年 | - |
| [KeePassX](https://www.keepassx.org) | - | 無料 | [EFFによる推奨](https://www.eff.org/deeplinks/2014/07/protecting-your-anonymity-how-sex-workers)。 |
| [KeePassXC](https://keepassxc.org/) | [@KeePassXC](https://twitter.com/KeePassXC) | 無料 | KeePassXをさらに開発したもの。 |
| [Enpass](https://www.enpass.io) | [@EnpassApp](https://twitter.com/EnpassApp) | - | - |
| [Dashlane](https://www.dashlane.com) | [@dashlane](https://twitter.com/dashlane) | $5/ユーザー/月 - $8/ユーザー/月 | - |
| [Bitwarden](https://bitwarden.com/) | [@bitwarden](https://twitter.com/bitwarden) | 個人利用は無料 / セルフホスト | オープンソースのパスワード管理。 |

## クリックの獲得・広告プラットフォーム<a id="sources-of-clicksad-platforms"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [NeoReach](https://neoreach.com/) | [@NeoReach](https://twitter.com/NeoReach) | - | - |
| [Bing Ads](http://advertise.bingads.microsoft.com) | - | - | - |
| [Taboola](https://www.taboola.com/) | [@taboola](https://twitter.com/taboola) | - | - |
| [Outbrain](https://www.outbrain.com/) | [@Outbrain](https://twitter.com/outbrain) | - | - |
| [Google Adwords](https://ads.google.com) | [@GoogleAds](https://twitter.com/googleads) | - | - |
| [Facebook Advertising](https://www.facebook.com/business/) | - | - | - |

## ストレージ<a id="storage"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Kloudless](https://kloudless.com) | [@Kloudless](https://twitter.com/kloudless) | 無料 - $500/月 | 個別の連携の代わりに使う単一のクラウドストレージAPI。一つのREST APIを連携させ、UIツールでアプリにクラウドストレージ対応を追加。連携機能の保守はKloudlessが行う。 |
| [CloudBuddy](https://cloudbuddy.cloud) | - | $1/10GB/月 | オンラインのSFTPストレージ。 |

## タスクのスケジューリング<a id="task-scheduling"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [EasyCron](https://www.easycron.com) | - | - | - |
| [IFTTT](https://ifttt.com) | [@IFTTT](https://twitter.com/ifttt) | - | - |
| [Zapier](https://zapier.com) | [@Zapier](https://twitter.com/zapier) | $99/月 - $15/月 | Zapのトリガーとアクションを使って二つのアプリをつなぐ。Zapは数分ごとにバックグラウンドで自動実行され、メール受信時のSMS送信など、データの移動・管理を行う。上限に数えられるのは稼働中のZapだけで、一時停止中・未完成のZapは無制限。 |
| [Integromat](https://www.integromat.com) | [@integromat](https://twitter.com/integromat) | 1000回未満の操作または月100 MBは無料、有料は$9/月から | タスクを自動化し、ほぼすべてのアプリ・サービスに接続。エラー処理、イテレーター、アグリゲーター、ルーター、関数、データストアなどを備える。 |
| [Dead Man's Snitch](https://deadmanssnitch.com) | [@DeadMansSnitch](https://twitter.com/deadmanssnitch) | 無料 - $49/月 | cronジョブやサービスのハートビートなどの定期実行タスクを監視し、ジョブがいつ、なぜ失敗したかを特定。 |
| [Healthchecks.io](https://healthchecks.io) | [@healthchecks_io](https://twitter.com/healthchecks_io) | 無料 - $80/月 | cronジョブと定期実行タスクの監視。 |

## ドキュメント<a id="documentation"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Dash](https://kapeli.com/dash) | [@kapeli](https://twitter.com/kapeli) | - | - |
| [Zeal](https://zealdocs.org) | [@zealdocs](https://twitter.com/zealdocs) | 無料 | オフラインのドキュメントブラウザー。 |
| [DevDocs](https://devdocs.io/) | [@DevDocs](https://twitter.com/DevDocs) | 無料 | 複数のAPIドキュメントを、整理され検索できるインターフェースにまとめる、無料でオープンソースのブラウザー。キーボードショートカット、あいまい一致、ブラウザーのアドレスバーからの検索に対応。 |

## 開発チームの指標<a id="engineering-metrics"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Static Object](https://www.staticobject.com) | [@StaticObjectDev](https://twitter.com/StaticObjectDev) | $295/月 - $495/月 | 開発チームの透明性を高めるための指標。 |
| [Gitprime](https://www.gitprime.com/) | [@GitPrime](https://twitter.com/GitPrime) | $749/月 - $2,549/月 | データに基づいて判断する開発リーダー向けの、文脈情報を伴う指標。 |

## 名刺・印刷物<a id="business-cards-and-print-material"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Moo](https://www.moo.com) | [@MOO](https://twitter.com/MOO) | - | - |
| [PSPrint](https://www.psprint.com) | [@PsPrint](https://twitter.com/psprint) | - | - |
| [Vista Print](https://vistaprint.com) | [@Vistaprint](https://twitter.com/vistaprint) | - | - |

## プレゼンテーション・スライド<a id="presentations--slides"></a>

| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Prezi](https://prezi.com/) | [@prezi](https://twitter.com/prezi) | - | - |
| [markpress](https://github.com/gamell/markpress) | - | - | MarkdownファイルからHTMLのプレゼンテーションを生成。 |
| [Reveal.js](https://github.com/hakimel/reveal.js) | - | - | プレゼンテーションのスライドを作成する柔軟なHTMLフレームワーク。 |
| [Impress.js](https://github.com/impress/impress.js/) | - | - | Preziに着想を得た、CSS3の変形とトランジションを使うプレゼンテーションフレームワーク。 |
| [Slides](https://slides.com/) | - | 無料 - $20/月 | Reveal.jsで構築され、グラフィカルなインターフェースを備えるオンラインエディター。 |
| [SlideShare](https://www.slideshare.net/) | [@slideshare](https://twitter.com/SlideShare) | 無料 | プレゼンテーション、インフォグラフィック、文書などを共有。 |

## 資金調達・投資家との関係<a id="fundraising--investor-relations"></a>
| サービス | Twitter | 料金 | 説明 |
|:--------|:--------|:--------|:------------|
| [Captable.io](https://captable.io) | [@captable_io](https://twitter.com/captable_io) | 無料 | 段階的な作成、共同作業・共有、転換社債・オプションの計算、資金調達ラウンドとエグジットのモデル化を備える、無料の株主構成表の管理。 |
| [Disclosure](https://startupdisclosure.io) | [@ltse](https://twitter.com/ltse) | 無料 | メールを使う手続きを置き換え、スタートアップによる投資家からの近況報告依頼への対応と、投資家による投資先情報の管理・集約を支援。 |
| [NoteGenie](https://notegenie.io) / [SAFEGenie](https://safegenie.io) | [@ltse](https://twitter.com/ltse) | 無料 | 転換社債やSAFEが創業者の持分に与える影響を検討する計算ツール。 |
| [IPO Ready](https://ipo-ready.com) | [@ltse](https://twitter.com/ltse) | 無料 | スタートアップのIPOへの準備状況を評価し、IPOの準備について学ぶ。 |

## 関連リソース<a id="also"></a>

* [Awesome Online IDEs](https://github.com/styfle/awesome-online-ide) - 優れたオンライン開発環境のリスト。
* [Data Extractor for Tools of The Trade](https://www.apify.com/metamn/2MS8r-api-https-github-com-cjbarber-toolsofthetrade) - ApifyでJSON・CSV・XLSに抽出したデータ。
