---
title: "Awesome OpenTofu"
description: "OpenTofuの公式資料、バージョン別の機能、インフラ管理ツール、コミュニティ、学習資料をまとめています。"
licenseSource: "github-virtualroot-awesome-opentofu-readme-md"
---

# Awesome OpenTofu

OpenTofuの公式資料、バージョン別の機能、関連ツールをまとめています。ツールはバージョン管理、ラッパー、CIワークフロー、テスト、ステート管理、プロバイダー、レジストリ、エディター支援を扱います。コミュニティの交流・情報発信先、講座、書籍、動画、ポッドキャストも探せます。[OpenTofu](https://opentofu.org/)は、コミュニティ主導で開発されているオープンソースのTerraform代替です。インフラを宣言的に管理できます。

## 公式 <a id="official"></a>

- [OpenTofuリポジトリ](https://github.com/opentofu/opentofu)
- [フォークの発表](https://opentofu.org/announcement)
- [レジストリ](https://github.com/opentofu/registry)
- [レジストリのMCPサーバー](https://github.com/opentofu/opentofu-mcp-server#opentofu-mcp-server)
- [週次更新](https://github.com/opentofu/opentofu/discussions/categories/weekly-updates)
- [公開相談会（Office hours）](https://www.youtube.com/watch?v=aEoMzUza6Ok&list=PLnVotLM2QsyhCc1_8PA7fbVF-ixt4_XAY)
- [技術運営委員会の活動報告](https://github.com/opentofu/org/tree/main/TSC)

## コミュニティ <a id="community"></a>

*コミュニティでの議論やプロジェクトの情報発信に使う公式チャンネル。*

- [OpenTofuのGitHubディスカッション](https://github.com/orgs/opentofu/discussions)
- [OpenTofu LinkedIn](https://www.linkedin.com/company/opentofuorg/)
- [OpenTofu Slack](https://opentofu.org/slack)
- [OpenTofu Twitter](https://twitter.com/opentofuorg)

## 機能 <a id="features"></a>

- [1.10 - movedおよびremovedブロックの強化](https://opentofu.org/docs/v1.10/intro/whats-new/#enhanced-moved-and-removed-blocks)
- [1.10 - 外部鍵プロバイダー](https://opentofu.org/docs/v1.10/intro/whats-new/#external-key-providers)
- [1.10 - OCIレジストリ対応](https://opentofu.org/docs/cli/oci_registries/)
- [1.10 - S3ネイティブのステートロック](https://opentofu.org/docs/v1.10/intro/whats-new/#native-s3-state-locking)
- [1.10 - targetおよびexcludeファイル](https://opentofu.org/docs/v1.10/intro/whats-new/#target-and-exclude-files)
- [1.9 - for_eachによるプロバイダー反復](https://opentofu.org/docs/v1.9/intro/whats-new/#provider-iteration-for_each)
- [1.9 - -excludeフラグ](https://opentofu.org/docs/v1.9/intro/whats-new/#the--exclude-flag)
- [1.8 - 変数とlocalsの早期評価](https://opentofu.org/docs/v1.8/intro/whats-new/#early-variablelocals-evaluation)
- [1.8 - OpenTofu用オーバーライドファイル（.tofu）](https://opentofu.org/docs/v1.8/intro/whats-new/#override-files-for-opentofu-keeping-compatibility)
- [1.7 - ステートファイルのエンドツーエンド暗号化](https://opentofu.org/docs/v1.7/intro/whats-new/#state-encryption)
- [1.7 - 繰り返し可能なimportブロック](https://opentofu.org/docs/v1.7/intro/whats-new/#loopable-import-blocks)
- [1.7 - プロバイダー定義関数](https://opentofu.org/docs/v1.7/intro/whats-new/#provider-defined-functions)
- [1.7 - removedブロック](https://opentofu.org/docs/v1.7/intro/whats-new/#removed-block)
- [CanI.TF - TerraformとOpenTofuの機能同等性](https://cani.tf/)

## ツール <a id="tools"></a>

### 環境管理 <a id="環境マネージャー"></a> <a id="environment-managers"></a>

- [arkade](https://github.com/alexellis/arkade) - CLIおよびKubernetesアプリのインストーラー。
- [asdf-opentofu](https://github.com/virtualroot/asdf-opentofu) - asdfバージョン管理ツール向けOpenTofuプラグイン。
- [tenv](https://github.com/tofuutils/tenv) - Goで実装されたTerraform・OpenTofuのバージョン管理ツール。
- [tfswitcher](https://github.com/ASleepyCat/tfswitcher) - Rustで実装されたTerraform・OpenTofuのバージョン切り替えツール。
- [tofuenv](https://github.com/tofuutils/tofuenv) - tfenvに着想を得たOpenTofuのバージョン管理ツール。

### ラッパー <a id="wrappers"></a>

*軽量なラッパーでOpenTofuのワークフローを簡素化する。*

- [Atmos](https://github.com/cloudposse/atmos) - 環境設定の重複を避ける（DRY）オーケストレーションツール。
- [Terragrunt](https://github.com/gruntwork-io/terragrunt) - 設定の重複を避け（DRY）、複数モジュールとリモートステートを管理する。
- [Terramate](https://github.com/terramate-io/terramate) - OpenTofu、Terraform、Kubernetesなどの自動化、オーケストレーション、コード生成。
- [easy_infra](https://github.com/SeisoLLC/easy_infra) - Infrastructure as Codeの利用を簡素かつ安全にするDockerコンテナー。
- [pug](https://github.com/leg100/pug) - 熟練ユーザー向けのターミナルUI。
- [tf](https://github.com/dex4er/tf) - コマンド出力を簡潔で読みやすくする。
- [tfam](https://github.com/Ant0wan/tfam) - Terraform/OpenTofuのapplyを並行実行し、複数のデプロイを扱えるRust製ラッパー。
- [tfexe](https://github.com/Ant0wan/tfexe) - バージョン管理を伴うtfswitchとTerraform/OpenTofuの実行を円滑にするRust製ラッパー。
- [tfwrapper](https://github.com/claranet/tfwrapper) - OpenTofuの利用を簡素化し、ベストプラクティスを強制するPythonラッパー。

### CI

- [Atlantis](https://www.runatlantis.io/) - プルリクエスト経由でワークフローを自動化する。
- [Burrito](https://docs.burrito.tf/latest/overview/) - Kubernetes内で動作するTACoS（Terraform自動化・コラボレーションソフトウェア）。
- [drifthound](https://github.com/treezio/drifthound) - 履歴の追跡と通知に対応し、インフラのドリフトを継続的に検出する。
- [TF-via-PR](https://github.com/OP5dev/TF-via-PR) - PR自動化でTerraform/OpenTofuをinit、plan、applyするGitHub Action。
- [pre-commit-opentofu](https://github.com/tofuutils/pre-commit-opentofu) - Git pre-commitフックプラグイン。
- [setup-opentofu](https://github.com/opentofu/setup-opentofu) - GitHub ActionsワークフローでOpenTofu CLIをセットアップする。
- [terraform-github-actions](https://github.com/dflook/terraform-github-actions) - OpenTofu向けGitHub Actions。
- [tofu-controller](https://github.com/flux-iac/tofu-controller) - Flux向けGitOps OpenTofu・Terraformコントローラー。
- [tofUI](https://github.com/65156/tofUI) - OpenTofu・Terraformのプランを読みやすいHTMLへ簡単に出力する。

### テスト <a id="tests"></a>

- [Terratest](https://github.com/gruntwork-io/terratest) - インフラコードの自動テストを簡単に書けるGoライブラリ。

### ステート管理 <a id="状態"></a> <a id="state"></a>

*OpenTofuのステートを分析・操作する。*

- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - ステート移行ツール。
- [tfimport](https://github.com/coolapso/tfimport) - ステートのインポートを自動化するツール。

### プロバイダー <a id="providers"></a>

*OpenTofuプロバイダーを調査・操作する。*

- [tfschema](https://github.com/minamijoyo/tfschema) - プロバイダーのスキーマを調べるツール。

### プラットフォーム <a id="platforms"></a>

*Terraform Cloudの代替。*

- [digger](https://github.com/diggerhq/digger) - オープンソースのIaCオーケストレーションツール。既存のCIパイプラインでIaCを実行できる。
- [Stategraph](https://stategraph.com) - ステートファイルのボトルネックを解消するステートバックエンド。リソース単位でロックし、チームでプランを並行実行できる。ステートはSQLで照会可能。
- [terrakube](https://github.com/AzBuilder/terrakube) - プライベートレジストリ、リモートステート、カスタムフロー、スケジュール済みワークスペース、ステートの視覚化を備えるオープンソースプラットフォーム。
- [Terramantle](https://terramantle.dev) - ホスティングされたモジュール、ステートバックエンド、プライベートレジストリを無料で提供。モジュールとプロバイダーの依存関係を対応付け、ワークスペース全体のセキュリティ、ドリフト、利用状況に関する情報を示す。
- [tofutf](https://github.com/tofutf/tofutf) - SSO、チーム管理、エージェントなどを備えるTerraform Enterpriseのオープンソース代替。
- [Terrateam](https://github.com/terrateamio/terrateam) - Terraform Cloud/Enterpriseのオープンソース代替。GitOpsを中心に、現代的なVCSプロバイダーでの大規模運用、セキュリティ、信頼性を考慮して設計されている。

### レジストリ <a id="registry"></a>

- [library.tf](https://library.tf/) - プロバイダーとモジュールのレジストリを索引化し、分析情報とドキュメントを提供する。
- [boring-registry](https://github.com/boring-registry/boring-registry) - OpenTofu互換のオープンソースモジュール・プロバイダーレジストリ。
- [hermitcrab](https://github.com/seal-io/hermitcrab) - OpenTofu互換のレジストリネットワークミラーリングサービス。
- [terrac](https://github.com/haoliangyu/terrac) - OpenTofu互換の最小限の機能を備えるプライベートモジュールレジストリ。
- [GitLab Module Registry](https://docs.gitlab.com/ee/user/packages/terraform_module_registry/) - GitLabプロジェクトをTerraformモジュール用プライベートレジストリとして使う。
- [terralist](https://github.com/terralist/terralist) - プロバイダー・モジュール向けプライベートレジストリ。
- [citizen](https://github.com/outsideris/citizen) - 複数のデータベース・ストレージに対応するモジュール・プロバイダー向けプライベートレジストリ。
- [petra](https://github.com/devoteamgcloud/petra) - Google Cloud Storageを使うプライベートレジストリマネージャー。
- [tapir](https://github.com/PacoVK/tapir) - UIを備えるモジュール・プロバイダー向けプライベートレジストリ。
- [terraform-registry](https://github.com/nrkno/terraform-registry) - 認証と複数バックエンドに対応するモジュールレジストリ。
- [terrareg](https://github.com/MatthewJohn/terrareg) - UI、任意のGit統合、詳細分析を備えるオープンソースモジュールレジストリ。
- [terustry](https://github.com/veepee-oss/terustry) - プロバイダー向けプロキシレジストリ。
- [tofuref](https://github.com/djetelina/tofuref) - OpenTofuプロバイダーレジストリ向けTUI。

### エディター支援・補助ツール <a id="ヘルパー"></a> <a id="helpers"></a>

- [OpenTofu Language Server](https://github.com/opentofu/tofu-ls) - OpenTofu向け言語サーバー。
- [VS Code拡張機能](https://open-vsx.org/extension/OpenTofu/vscode-opentofu) - OpenTofu Language Serverを利用するVisual Studio Code拡張機能。OpenTofuファイルに構文強調表示、IntelliSense、コードナビゲーション、整形、モジュールエクスプローラーを追加する。
- [Zed拡張機能](https://github.com/ashpool37/zed-extension-opentofu) - Zedエディター向け拡張機能。
- [terratag](https://github.com/env0/terratag) - OpenTofu/Terraformファイル一式にタグまたはラベルを適用できるCLIツール。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Terraform / OpenTofu設定のバージョン制約を更新する。

## 学習 <a id="learning"></a>

- [OpenTofu Course](https://killercoda.com/quincycheng/course/course_opentofu) - 対話型チュートリアル。
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth) - OpenTofuの節を含む書籍。
- [Infrastructure automation with OpenTofu](https://www.udemy.com/course/infrastructure-automation-with-opentofu-hands-on-devops/?couponCode=1D97F4D8FFE62E296BE1) - 講義、クイズ、ハンズオンデモ、コーディング演習を通じてインフラプロビジョニングを学ぶ。
- [Migrating From Terraform To OpenTofu](https://www.youtube.com/watch?v=v9rJgtHzxUk) - OpenTofuの歴史と移行方法の紹介。
- [Terraform Academy OpenTofu Practitioner Path](https://www.terraformacademy.app/max/labs/opentofu-basics.html) - PBKDF2とAES-GCMを使った標準のステート・プラン暗号化を学ぶ、ブラウザー上の対話型演習。OpenTofu 1.6以降にも適用できるHCLの基礎を活用し、実務に必要な知識を網羅する学習パスも含む。

## 動画 <a id="メディア"></a> <a id="media"></a>

- [OSS EU 2023 - 発表](https://www.youtube.com/watch?v=Ha77rpusEDM&t=1190s)
- [OSS EU 2023 - プロジェクト概要](https://www.youtube.com/watch?v=-8sOE9-icmY&t=15116s)
- [Code To Cloud - OpenTofu入門](https://www.youtube.com/watch?v=HeUz6TMg82U)
- [CNCF - OpenTofu Day 欧州 2024](https://www.youtube.com/playlist?list=PLnVotLM2Qsyiw_6Pd_9WxRRLdrUAs3c1c)
- [CNCF - OpenTofu Day 北米 2024](https://www.youtube.com/playlist?list=PLnVotLM2QsyhhCO5TgEUsAip601j3NUlm)
- [CNCF - OpenTofu Day 欧州 2025](https://www.youtube.com/playlist?list=PLj6h78yzYM2P1WUOx9Ny6Q3JJxiAs1A3M)
- [CNCF - OpenTofu Day 北米 2025](https://www.youtube.com/playlist?list=PLj6h78yzYM2MATqCH0Tux6phUq9o4-lnG)

## ポッドキャスト <a id="podcasts"></a>

- [SE Radio: Christian Mesh on OpenTofu](https://se-radio.net/2025/01/se-radio-652-christian-mesh-on-opentofu/)
- [Kubernetes Podcast - OpenTofu, with Ohad Maislish](https://kubernetespodcast.com/episode/232-opentofu/)
- [TheIaCPodcast - Expert Panel on OpenTofu GA Release, Licensing, and OSS Future](https://www.theiacpodcast.com/episode/expert-panel-on-opentofu-ga-release-licensing-and-oss-future)
- [Contributor - Community-Driven IaC](https://www.contributor.fyi/opentofu)
- [Ned in the Cloud - IaC Live Stream](https://www.youtube.com/watch?v=p0vDydkUWB4)
- [Arrested DevOps - What's Up With Open Terraform?](https://www.arresteddevops.com/open-tofu/)
- [OpenObservability - Terraform is no longer open source. Is OpenTF the successor?](https://www.youtube.com/watch?v=5QdUs9VKq5g)
- [TheCloudGambit - The Future of OpenTF](https://www.thecloudgambit.com/2236725/13576531-the-future-of-opentf-with-ohad-maislish)
- [Oxide and Friends - Fork in the road for Terraform?](https://www.youtube.com/watch?v=QaU94LY891M)
- [Changelog - OpenTF for an open Terraform](https://changelog.com/podcast/556)
