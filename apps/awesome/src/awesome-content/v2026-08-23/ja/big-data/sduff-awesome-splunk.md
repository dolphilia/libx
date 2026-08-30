---
title: "sduff/awesome-splunk"
description: "sduff/awesome-splunk の定本スナップショット"
licenseSource: "github-sduff-awesome-splunk-readme-md"
---

<div align="center">
	<img width="344" height="193" src="https://raw.githubusercontent.com/sduff/awesome-splunk/master/splunk.jpg" alt="Splunk">
</div>

# Awesome Splunk [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Splunk 向けの優れたアプリ、可視化、その他のリソースの厳選リスト。

[*Splunk*](https://splunk.com) は、リアルタイムデータを検索可能なリポジトリに取り込み、インデックス化、相関付けを行い、そこからグラフ、レポート、アラート、ダッシュボード、可視化を生成できます。セキュリティ、コンプライアンス、IT サービス監視などのユースケースのため、金融、公益事業、ヘルスケア、製造業などで広く利用されています。

## 目次

- [基礎](#basics) — 始めるための基本リソース
- [アプリ](#apps)
  - [プレミアムアプリ](#premium-apps)
- [可視化](#visualisations)
- [カンファレンス、ミートアップ、交流](#conferences-meet-ups-and-socialising)
- [非公式リソース](#unofficial-resources)

## 基礎

Splunk を始めるための基本リソース。

- [Splunk Website](https://splunk.com) - Splunk のホームページ。
  - [Downloads](https://www.splunk.com/download) - ダウンロードページ。
  - [Previous Releases](https://www.splunk.com/page/previous_releases) - Splunk Enterprise と Splunk Forwarders の以前のバージョン。
- [Splunk Answers](https://answers.splunk.com) - Splunk のコミュニティ質問・回答。
- [SplunkBase](https://splunkbase.splunk.com) - Splunk とコミュニティが構築したアプリとアドオン。
- [Splunk Blogs](https://blogs.splunk.com/) - さまざまなトピックのブログ投稿。
- [Splunk Dev](https://dev.splunk.com) - Splunk 上で開発します。
  - [Free Dev License](https://dev.splunk.com/enterprise/dev_license/) - 無料の Splunk Developer ライセンスを申請します。
- [Splunk Docs](https://docs.splunk.com/) - ドキュメント。
- Splunk Sizing Calculators
  - [Storage](https://splunk-sizing.appspot.com/) - ウェブベースのストレージ要件計算機。

## アプリ

推奨する Splunk アプリ。

- [Splunk App for Infrastructure](https://www.splunk.com/en_us/software/splunk-enterprise/server-and-infrastructure-monitoring-and-troubleshooting.html) - インフラ監視のためにログとメトリクスを相関付けます。
  - [Splunkbase Entry](https://splunkbase.splunk.com/app/3975/) - ダウンロードページ。
  - [SAI Documentation](https://docs.splunk.com/Documentation/InfraApp) - Splunk App for Infrastructure ドキュメント。
  - [SAI Install Guide](https://docs.splunk.com/Documentation/InfraApp/latest/Install/About)
- [Miscellaneous Scripts for fixing issues with the Universal Forwarder](https://github.com/jimmyatSplunk/SplunkForwarderRepairKit) - このキットは、Splunk デプロイメントに共通する問題と自然に発生しがちな特異性の管理に基づきまとめられました。

### プレミアムアプリ

Splunk 向けプレミアムアプリ。

#### Enterprise Security

Splunk Enterprise Security はセキュリティエコシステムの神経中枢であり、チームに内部・外部攻撃を迅速に検出・対応し、脅威管理を簡素化してリスクを最小化するための洞察を提供します。

- [ES Home Page](https://www.splunk.com/en_us/software/enterprise-security.html) - Enterprise Security 向け Splunk ホームページ。
- [ES Splunkbase Entry](https://splunkbase.splunk.com/app/263/) - ダウンロードページ（ライセンスがある場合）。
- [ES Documentation](https://docs.splunk.com/Documentation/ES/latest) - Enterprise Security 向け Splunk ドキュメント。
- [Awesome-ES](https://github.com/sduff/awesome-es/) - Enterprise Security に関するあらゆるものの Awesome リスト。

#### IT Service Intelligence

Splunk IT Service Intelligence（ITSI）は、人工知能を活用する IT 運用（AIOps）向けの監視・分析ソリューションであり、重要な IT・ビジネスサービスとそのインフラストラクチャの健全性および主要業績指標を可視化します。

- [ITSI Home Page](https://www.splunk.com/en_us/software/it-service-intelligence.html) - IT Service Intelligence 向け Splunk ホームページ。
- [ITSI Splunkbase Entry](https://splunkbase.splunk.com/app/1841/) - ダウンロードページ（ライセンスがある場合）。
- [ITSI Documentation](https://docs.splunk.com/Documentation/ITSI/latest) - ITSI ドキュメント。
- [Awesome-ITSI](https://github.com/sduff/awesome-itsi/) - IT Service Intelligence に関するあらゆるものの Awesome リスト。

## 可視化

- [Event Timeline Viz](https://splunkbase.splunk.com/app/4370/) - イベントのコールアウトを備えたインタラクティブなタイムライン。
- [Timeline](https://splunkbase.splunk.com/app/3120/) - インタラクティブなタイムライン。
- [Halo](https://splunkbase.splunk.com/app/3514/) - 階層的・関係的な円グラフ。
- [Heat Map](https://splunkbase.splunk.com/app/4460/) - 値から導出した色の濃さを持つ、関連する測定値のグリッド。
- [Calendar Heat Map](https://splunkbase.splunk.com/app/3162/) - 日ごとに分解したヒートマップ。
- [Punchcard](https://splunkbase.splunk.com/app/3129/) - パンチカード可視化。
- [Horizon Chart](https://splunkbase.splunk.com/app/3117/) - ホライゾンチャート可視化。
- [Sankey Diagram](https://splunkbase.splunk.com/app/3112/) - サンキーダイアグラム可視化。
- [WebGL Globe](https://splunkbase.splunk.com/app/3674/) - 場所に相関付けたイベントを備える回転地球儀（派手な経営層向けアイキャンディ）。
- [Splunkbase Custom Visualizations](https://splunkbase.splunk.com/apps/#/app_content/visualizations) - Splunkbase から他のカスタム可視化をダウンロードします。

## カンファレンス、ミートアップ、交流

- [UserGroups](https://usergroups.splunk.com/) - 近くのユーザーグループを見つけます。
- [.Conf](https://conf.splunk.com) - Splunk の年次カンファレンスウェブサイト。
  - [Past .Conf Material](https://conf.splunk.com/watch/conf-online.html) - 過去の発表を視聴し、過去の .conf 発表のスライドをダウンロードします。
- [Splunk UserGroups Slack](http://splk.it/slack) - Splunk の公開アクセス可能な Slack。
- [/r/Splunk](https://reddit.com/r/splunk) - 非公式 Sub-Reddit。
- [IRC](https://wiki.splunk.com/Community:IRC) - Efnet の `#splunk` に接続する手順。
- [Splunk Store](https://www.mylogocloud.com/splunk) - ミートアップまたは .conf で入手しそびれた Splunk グッズを注文します。
- [Splunk Trust](https://www.splunk.com/en_us/community/splunk-trust.html) - Splunk Trust は招待制の Splunk Ninja グループです。

## 非公式リソース

Splunk Inc. と直接は関連しない、有用な Splunk リソース。

#### 個人ホームページ

- [Simon Duff](https://simonduff.net/splunk) - その他のスクリプトと可視化。
- [Ryan Faircloth](https://www.rfaircloth.com/) - セキュリティと Syslog 関連の資料。
- [George Starcher](http://www.georgestarcher.com/) - Splunk ES の Extreme Search 詳細を含む、多数の Splunk 関連項目。
- [Anthony Tellez](https://anthonygtellez.github.io/) - セキュリティと機械学習項目。
- [Duane Waddle](https://www.duanewaddle.com/) - その他の Splunk 項目。
- [Vladimir's GitHub](https://github.com/hire-vladimir/) - [CIM Validation](https://github.com/hire-vladimir/SA-cim_vladiator)を含む、多数の Splunk リソースのコード。
- [Nico's GitHub](https://github.com/nicovdw/) - 並行性設定の最適化を支援する検索とダッシュボードのリポジトリ。
- [David Veuve](https://www.davidveuve.com/tech/) - Splunk の基礎と最適化に関する初期リソース（更新頻度は低い）。

#### SPL リポジトリ

有用な Splunk 検索のコレクション。

- [GoSplunk](https://gosplunk.com/) - sourcetype とユースケース別に分けられた Splunk クエリ向け検索エンジン。

## 貢献

貢献を歓迎します！ まず [contribution guidelines](https://github.com/sduff/awesome-splunk/blob/397b607bc81690b525d6eb988c03db9dcace809f/contributing.md) をお読みください。

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

法律の下で可能な限り、Simon Duff はこの作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
