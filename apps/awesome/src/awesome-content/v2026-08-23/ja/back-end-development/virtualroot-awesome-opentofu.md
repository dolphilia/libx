---
title: "Awesome OpenTofu"
description: "OpenTofuを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-virtualroot-awesome-opentofu-readme-md"
---

# Awesome OpenTofu

OpenTofuを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [公式](#official)
- [コミュニティ](#community)
- [機能](#features)
- [ツール](#tools)
  - [環境マネージャー](#environment-managers)
  - [ラッパー](#wrappers)
  - [CI](#ci)
  - [テスト](#tests)
  - [状態](#state)
  - [プロバイダー](#providers)
  - [プラットフォーム](#platforms)
  - [レジストリ](#registry)
  - [ヘルパー](#helpers)
- [学習](#learning)
- [メディア](#media)
- [ポッドキャスト](#podcasts)

## 公式

- [OpenTofu repository](https://github.com/opentofu/opentofu) 🎉
- [フォークの発表](https://opentofu.org/announcement)
- [Registry](https://github.com/opentofu/registry)
- [Registry MCP Server](https://github.com/opentofu/opentofu-mcp-server#opentofu-mcp-server)
- [週次更新](https://github.com/opentofu/opentofu/discussions/categories/weekly-updates)
- [オフィスアワー](https://www.youtube.com/watch?v=aEoMzUza6Ok&list=PLnVotLM2QsyhCc1_8PA7fbVF-ixt4_XAY)
- [技術運営委員会の更新](https://github.com/opentofu/org/tree/main/TSC)

## コミュニティ

*コミュニケーションチャンネル、ミートアップ、ニュースレター、フォーラム。*

- [OpenTofu GitHub Discussion](https://github.com/orgs/opentofu/discussions)
- [OpenTofu LinkedIn](https://www.linkedin.com/company/opentofuorg/)
- [OpenTofu Slack](https://opentofu.org/slack)
- [OpenTofu Twitter](https://twitter.com/opentofuorg)

## 機能

- [1.10 - movedおよびremovedブロックの強化](https://opentofu.org/docs/v1.10/intro/whats-new/#enhanced-moved-and-removed-blocks)
- [1.10 - 外部キープロバイダー](https://opentofu.org/docs/v1.10/intro/whats-new/#external-key-providers)
- [1.10 - OCIレジストリ対応](https://opentofu.org/docs/cli/oci_registries/)
- [1.10 - S3ネイティブの状態ロック](https://opentofu.org/docs/v1.10/intro/whats-new/#native-s3-state-locking)
- [1.10 - targetおよびexcludeファイル](https://opentofu.org/docs/v1.10/intro/whats-new/#target-and-exclude-files)
- [1.9 - for_eachによるプロバイダー反復](https://opentofu.org/docs/v1.9/intro/whats-new/#provider-iteration-for_each)
- [1.9 - -excludeフラグ](https://opentofu.org/docs/v1.9/intro/whats-new/#the--exclude-flag)
- [1.8 - 変数とlocalsの早期評価](https://opentofu.org/docs/v1.8/intro/whats-new/#early-variablelocals-evaluation)
- [1.8 - OpenTofu用オーバーライドファイル（.tofu）](https://opentofu.org/docs/v1.8/intro/whats-new/#override-files-for-opentofu-keeping-compatibility)
- [1.7 - 状態ファイルのエンドツーエンド暗号化](https://opentofu.org/docs/v1.7/intro/whats-new/#state-encryption)
- [1.7 - 繰り返し可能なimportブロック](https://opentofu.org/docs/v1.7/intro/whats-new/#loopable-import-blocks)
- [1.7 - プロバイダー定義関数](https://opentofu.org/docs/v1.7/intro/whats-new/#provider-defined-functions)
- [1.7 - removedブロック](https://opentofu.org/docs/v1.7/intro/whats-new/#removed-block)
- [CanI.TF - TerraformとOpenTofuの機能同等性](https://cani.tf/)

## ツール

### 環境マネージャー

- [arkade](https://github.com/alexellis/arkade) - CLIおよびKubernetesアプリのインストーラー。
- [asdf-opentofu](https://github.com/virtualroot/asdf-opentofu) - asdfバージョンマネージャー向けOpenTofuプラグイン。
- [tenv](https://github.com/tofuutils/tenv) - Goで書かれたTerraform・OpenTofuバージョンマネージャー。
- [tfswitcher](https://github.com/ASleepyCat/tfswitcher) - Rustで書かれたTerraform・OpenTofuバージョンスイッチャー。
- [tofuenv](https://github.com/tofuutils/tofuenv) - tfenvに着想を得たOpenTofuバージョンマネージャー。

### ラッパー

*薄いラッパーでOpenTofuワークフローを簡素化する。*

- [Atmos](https://github.com/cloudposse/atmos) - 環境設定をDRYに保つオーケストレーションツール。
- [Terragrunt](https://github.com/gruntwork-io/terragrunt) - 設定をDRYに保ち、複数モジュールを扱い、リモート状態を管理する。
- [Terramate](https://github.com/terramate-io/terramate) - OpenTofu、Terraform、Kubernetesなどの自動化、オーケストレーション、コード生成。
- [easy_infra](https://github.com/SeisoLLC/easy_infra) - Infrastructure as Codeの利用を簡素かつ安全にするDockerコンテナー。
- [pug](https://github.com/leg100/pug) - パワーユーザー向けターミナルユーザーインターフェース。
- [tf](https://github.com/dex4er/tf) - より簡潔で親しみやすいコマンド出力。
- [tfam](https://github.com/Ant0wan/tfam) - 並行Terraform/OpenTofu applyのためのRust製ラッパーで、複数デプロイを可能にする。
- [tfexe](https://github.com/Ant0wan/tfexe) - バージョン制御付きでtfswitchとTerraform/OpenTofuをシームレスに実行するRust製ラッパー。
- [tfwrapper](https://github.com/claranet/tfwrapper) - OpenTofuの利用を簡素化し、ベストプラクティスを強制するPythonラッパー。

### CI

- [Atlantis](https://www.runatlantis.io/) - プルリクエスト経由でワークフローを自動化する。
- [Burrito](https://docs.burrito.tf/latest/overview/) - Kubernetes内で動作するTACoS（Terraform自動化・コラボレーションソフトウェア）。
- [drifthound](https://github.com/treezio/drifthound) - 履歴追跡と通知を備えた継続的インフラドリフト検出。
- [TF-via-PR](https://github.com/OP5dev/TF-via-PR) - PR自動化でTerraform/OpenTofuをinit、plan、applyするGitHub Action。
- [pre-commit-opentofu](https://github.com/tofuutils/pre-commit-opentofu) - Git pre-commitフックプラグイン。
- [setup-opentofu](https://github.com/opentofu/setup-opentofu) - GitHub ActionsワークフローでOpenTofu CLIをセットアップする。
- [terraform-github-actions](https://github.com/dflook/terraform-github-actions) - OpenTofu向けGitHub Actions。
- [tofu-controller](https://github.com/flux-iac/tofu-controller) - Flux向けGitOps OpenTofu・Terraformコントローラー。
- [tofUI](https://github.com/65156/tofUI) - 可読性向上のためOpenTofu・TerraformプランをHTMLへ簡単にエクスポートする。

### テスト

- [Terratest](https://github.com/gruntwork-io/terratest) - インフラコードの自動テストを簡単に書けるGoライブラリ。

### 状態

*OpenTofuの状態を分析・操作する。*

- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - 状態移行ツール。
- [tfimport](https://github.com/coolapso/tfimport) - 状態インポートを自動化するツール。

### プロバイダー

*OpenTofuプロバイダーを調査・操作する。*

- [tfschema](https://github.com/minamijoyo/tfschema) - プロバイダー向けスキーマインスペクター。

### プラットフォーム

*Terraform Cloudの代替。*

- [digger](https://github.com/diggerhq/digger) - オープンソースのIaCオーケストレーションツール。既存のCIパイプラインでIaCを実行できる。
- [Stategraph](https://stategraph.com) - 状態ファイルのボトルネックを解消する状態バックエンド。リソース単位ロックでチームが並行してプランでき、状態はSQLで照会可能。
- [terrakube](https://github.com/AzBuilder/terrakube) - プライベートレジストリ、リモート状態、カスタムフロー、スケジュール済みワークスペース、視覚的な状態を備えるオープンソースプラットフォーム。
- [Terramantle](https://terramantle.dev) - モジュール・プロバイダー依存関係を対応付け、ワークスペース全体のセキュリティ、ドリフト、利用状況を明らかにする無料ホスト型モジュール、状態バックエンド、プライベートレジストリ。
- [tofutf](https://github.com/tofutf/tofutf) - SSO、チーム管理、エージェントなどを備えるTerraform Enterpriseのオープンソース代替。
- [Terrateam](https://github.com/terrateamio/terrateam) - Terraform Cloud/Enterpriseのオープンソース代替。GitOpsファーストで、モダンなVCSプロバイダー全体の規模、セキュリティ、信頼性を考慮して構築されている。

### レジストリ

- [library.tf](https://library.tf/) - 洞察とドキュメントを備えるプロバイダー・モジュールレジストリのインデクサー。
- [boring-registry](https://github.com/boring-registry/boring-registry) - OpenTofu互換のオープンソースモジュール・プロバイダーレジストリ。
- [hermitcrab](https://github.com/seal-io/hermitcrab) - OpenTofu互換のレジストリネットワークミラーリングサービス。
- [terrac](https://github.com/haoliangyu/terrac) - OpenTofu互換の最小限なプライベートモジュールレジストリ。
- [GitLab Module Registry](https://docs.gitlab.com/ee/user/packages/terraform_module_registry/) - GitLabプロジェクトをTerraformモジュール用プライベートレジストリとして使う。
- [terralist](https://github.com/terralist/terralist) - プロバイダー・モジュール向けプライベートレジストリ。
- [citizen](https://github.com/outsideris/citizen) - 複数のデータベース・ストレージに対応するモジュール・プロバイダー向けプライベートレジストリ。
- [petra](https://github.com/devoteamgcloud/petra) - Google Cloud Storageを使うプライベートレジストリマネージャー。
- [tapir](https://github.com/PacoVK/tapir) - UIを備えるモジュール・プロバイダー向けプライベートレジストリ。
- [terraform-registry](https://github.com/nrkno/terraform-registry) - 認証と複数バックエンドに対応するモジュールレジストリ。
- [terrareg](https://github.com/MatthewJohn/terrareg) - UI、任意のGit統合、詳細分析を備えるオープンソースモジュールレジストリ。
- [terustry](https://github.com/veepee-oss/terustry) - プロバイダー向けプロキシレジストリ。
- [tofuref](https://github.com/djetelina/tofuref) - OpenTofuプロバイダーレジストリ向けTUI。

### ヘルパー

- [OpenTofu Language Server](https://github.com/opentofu/tofu-ls) - OpenTofu Language Server。
- [VS Code Extension](https://open-vsx.org/extension/OpenTofu/vscode-opentofu) - OpenTofu Language Serverを備え、構文強調表示、IntelliSense、コードナビゲーション、整形、モジュールエクスプローラーなどの編集機能をOpenTofuファイルへ追加するVisual Studio Code拡張機能。
- [zed Extension](https://github.com/ashpool37/zed-extension-opentofu) - Zedエディター向け拡張機能。
- [terratag](https://github.com/env0/terratag) - OpenTofu/Terraformファイル一式にタグまたはラベルを適用できるCLIツール。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Terraform / OpenTofu設定のバージョン制約を更新する。

## 学習

- [OpenTofu Course](https://killercoda.com/quincycheng/course/course_opentofu) - 対話型チュートリアル。
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth) - OpenTofuの節を含む書籍。
- [Infrastructure automation with OpenTofu](https://www.udemy.com/course/infrastructure-automation-with-opentofu-hands-on-devops/?couponCode=1D97F4D8FFE62E296BE1) - 講義、クイズ、ハンズオンデモ、コーディング演習を通じてインフラプロビジョニングを学ぶ。
- [Migrating From Terraform To OpenTofu](https://www.youtube.com/watch?v=v9rJgtHzxUk) - OpenTofuの歴史と移行方法の紹介。
- [Terraform Academy OpenTofu Practitioner Path](https://www.terraformacademy.app/max/labs/opentofu-basics.html) - PBKDF2とAES-GCMによるネイティブな状態・プラン暗号化を扱う対話型ブラウザラボと、OpenTofu 1.6以降にも適用できるHCL基礎を再利用する実践者向け学習パス。

## メディア

- [OSS EU 2023 - Announcement](https://www.youtube.com/watch?v=Ha77rpusEDM&t=1190s)
- [OSS EU 2023 - Project Overview](https://www.youtube.com/watch?v=-8sOE9-icmY&t=15116s)
- [Code To Cloud - Getting Started With OpenTofu](https://www.youtube.com/watch?v=HeUz6TMg82U)
- [CNCF - OpenTofu Day Europe 2024](https://www.youtube.com/playlist?list=PLnVotLM2Qsyiw_6Pd_9WxRRLdrUAs3c1c)
- [CNCF - OpenTofu Day North America 2024](https://www.youtube.com/playlist?list=PLnVotLM2QsyhhCO5TgEUsAip601j3NUlm)
- [CNCF - OpenTofu Day Europe 2025](https://www.youtube.com/playlist?list=PLj6h78yzYM2P1WUOx9Ny6Q3JJxiAs1A3M)
- [CNCF - OpenTofu Day North America 2025](https://www.youtube.com/playlist?list=PLj6h78yzYM2MATqCH0Tux6phUq9o4-lnG)

## ポッドキャスト

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
