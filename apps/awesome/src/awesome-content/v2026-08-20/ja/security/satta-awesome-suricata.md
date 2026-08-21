---
title: "satta/awesome-suricata"
description: "satta/awesome-suricata の定本スナップショット"
licenseSource: "github-satta-awesome-suricata-readme-md"
---

# Awesome Suricata [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

[<img src="https://suricata.io/wp-content/uploads/2022/01/Logo-SuricataFinal-1-translucent.png" align="right" width="120">](https://suricata.io)

> Suricataに関連する優れたものの厳選リスト。

[Suricata](https://suricata.io/features)は、無料の侵入検知・防御システム（IDS/IPS）およびネットワークセキュリティ監視エンジンです。

## 目次

- [入力ツール](#input-tools)
- [出力ツール](#output-tools)
- [運用・監視・トラブルシューティング](#operations-monitoring-and-troubleshooting)
- [プログラミングライブラリとツールキット](#programming-libraries-and-toolkits)
- [ダッシュボードとテンプレート](#dashboards-and-templates)
- [開発ツール](#development-tools)
- [ドキュメントとガイド](#documentation-and-guides)
- [分析ツール](#analysis-tools)
- [ルールセットとリスト](#rule-sets-and-lists)
- [ルール／セキュリティコンテンツの管理・処理](#rulesecurity-content-management-and-handling)
- [プラグインと拡張機能](#plugins-and-extensions)
- [Suricataを使用するシステム](#systems-using-suricata)
- [トレーニング](#training)
- [シミュレーションとテスト](#simulation-and-testing)
- [データセット](#data-sets)
- [その他](#misc)

## 入力ツール

- [PacketStreamer](https://github.com/deepfence/PacketStreamer) - クラウドネイティブ環境向け分散tcpdump。

## 出力ツール

- [suricata-kafka-output](https://github.com/Center-Sun/suricata-kafka-output) - Suricata 6向けSuricata Eve Kafka出力プラグイン。
- [suricata-redis-output](https://github.com/jasonish/suricata-redis-output) - Suricata 7向けSuricata Eve Redis出力プラグイン。
- [Meer](https://github.com/quadrantsec/meer) - Suricata / Sagan向け「スプーラー」。
- [FEVER](https://github.com/DCSO/fever) - SuricataのEVE-JSON形式向け、高速で拡張可能かつ多用途のイベントルーター。
- [Suricata-Logstash-Templates](https://github.com/pevma/Suricata-Logstash-Templates) - Suricata IDPSで使うKibana/Logstash向けテンプレート。
- [Lilith](https://github.com/VVelox/Lilith) - EVEファイルをSQLへ読み込み、保存済みデータも検索する。

## 運用・監視・トラブルシューティング

- [slinkwatch](https://github.com/DCSO/slinkwatch) - Suricata監視インターフェースの自動列挙・保守。
- [suri-stats](https://github.com/regit/suri-stats) - suricataの`stats.log`ファイルを扱うツール。
- [Mauerspecht](https://github.com/DCSO/mauerspecht) - 企業ウォールドガーデンネットワーク向けのシンプルなプロービングツール。
- [ansible-suricata](https://github.com/GitMirar/ansible-suricata) - Suricata Ansibleロール（やや古い）。
- [MassDeploySuricata](https://github.com/pevma/MassDeploySuricata) - Ansible IT自動化プラットフォームを使い、Suricata IDPSを大量展開・更新する。
- [docker-suricata](https://github.com/jasonish/docker-suricata) - Suricata Dockerイメージ。
- [Suricata-Monitoring](https://github.com/VVelox/Suricata-Monitoring) - Suricata統計向けLibreNMS JSON / Nagiosモニター。
- [Terraform Module for Suricata](https://github.com/onetwopunch/terraform-google-suricata) - Google Cloudパケットミラーリングをセットアップし、パケットをSuricataへ送るTerraformモジュール。
- [InfluxDB Suricata Input Plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/suricata) - Suricataの`stats`ログを収集・転送するTelegraf向け入力プラグイン（最近のTelegrafリリースには標準搭載）。
- [suricata_exporter](https://github.com/corelight/suricata_exporter) - Suricataソケットからスクレイプした統計メトリクスをエクスポートする、Go製のシンプルなPrometheusエクスポーター。
- [Triagewall](https://github.com/aaronphifer/triagewall) - 調整可能な事前フィルターとOllama分類器を使ってアラート量を減らす、Suricataアラート向けローカルLLMトリアージ層。

## プログラミングライブラリとツールキット

- [rust-suricatax-rule-parser](https://github.com/jasonish/rust-suricatax-rule-parser) - Rustによる実験的なSuricataルールパーサー。
- [go-suricata](https://github.com/ks2211/go-suricata) - Suricata向けGoクライアント（Socket経由で対話）。
- [gonids](https://github.com/google/gonids) - SnortやSuricataなどのエンジン向け侵入検知ルールを解析するGoライブラリ。
- [surevego](https://github.com/rhaist/surevego) - GoによるSuricata EVE-JSONパーサー。
- [suricataparser](https://github.com/m-chrome/py-suricataparser) - Snort/Suricataルール向け純粋なPythonパーサー。
- [py-idstools](https://github.com/jasonish/py-idstools) - PythonによるSnort・Suricataルールおよびイベントユーティリティ（ルール更新ツールを含む）。

## ダッシュボードとテンプレート

- [KTS](https://github.com/StamusNetworks/KTS) - Suricata IDPS脅威ハンティング向けKibana 4テンプレート。
- [KTS5](https://github.com/StamusNetworks/KTS5) - Suricata IDPS脅威ハンティング向けKibana 5テンプレート。
- [KTS6](https://github.com/StamusNetworks/KTS6) - Suricata IDPS脅威ハンティング向けKibana 6テンプレート。
- [KTS7](https://github.com/StamusNetworks/KTS7) - Suricata IDPS脅威ハンティング向けKibana 7テンプレート。

## 開発ツール

- [Suricata Language Server](https://github.com/StamusNetworks/suricata-language-server) - Suricataシグネチャ向けLanguage Server Protocol実装。設定すると、好みのエディターへ構文チェック、ヒント、自動補完を追加する。
- [suricata-ls-vscode](https://github.com/StamusNetworks/suricata-ls-vscode) - Suricata Language Serverを使うSuricata IntelliSense拡張機能。
- [suricata-highlight-vscode](https://github.com/dgenzer/suricata-highlight-vscode) - Visual Studio Code向けSuricataルールサポート（構文強調表示など）。
- [SublimeSuricata](https://github.com/ozuriexv/SublimeSuricata) - Sublime Text向け基本的なSuricata構文ハイライター。
- [Suricata-Check](https://suricata-check.teuwen.net/readme.html) - Suricataルールにフィードバックを提供するコマンドラインユーティリティ。構文の有効性、解釈可能性、ルール固有性、ルールカバレッジ、効率性などの問題を検出できる。

## ドキュメントとガイド

- [SEPTun](https://github.com/pevma/SEPTun) - Suricata Extreme Performance Tuningガイド。
- [SEPTun-Mark-II](https://github.com/pevma/SEPTun-Mark-II) - Suricata Extreme Performance Tuningガイド - Mark II。
- [suricata-4-analysts](https://github.com/StamusNetworks/suricata-4-analysts) - セキュリティアナリストのためのSuricataガイド。
- [Suricata Community Style Guide](https://github.com/sidallocation/suricata-style-guide) - ルール作成者コミュニティからスタイルガイドラインを収集する共同文書。

## 分析ツール

- [Suricata Analytics](https://github.com/StamusNetworks/suricata-analytics) - Suricataデータを扱う際に役立つさまざまなリソース。
- [Malcolm](https://github.com/cisagov/Malcolm) - フルパケットキャプチャアーティファクト（PCAPファイル）、Zeekログ、Suricataアラート向けの、強力で容易に展開できるネットワークトラフィック分析ツールスイート。
- [Evebox](https://github.com/jasonish/evebox) - Elastic SearchにあるSuricata EVEイベント向けWebベースイベントビューアー（GUI）。

## ルールセットとリスト

- [nids-rule-library](https://github.com/klingerko/nids-rule-library#readme) - さまざまなオープンソース・商用ルールセットのコレクション。
- [Stamus Lateral Movement Detection Rules](https://www.stamus-networks.com/blog/new-open-ruleset-for-detecting-lateral-movement-with-suricata) - ラテラルムーブメントを検出するSuricataルールセット。
- [QuadrantSec Suricata Rules](https://github.com/quadrantsec/suricata-rules) - QuadrantSecが公開するSuricataルールセット。
- [Cluster25/detection](https://github.com/Cluster25/detection) - Cluster25の検出ルール。
- Networkforensic.dk（NF）のルールセット:
  - [NF IDS rules](https://networkforensic.dk/SNORT/NF-local.zip)
  - [NF SCADA IDS Rules](https://networkforensic.dk/SNORT/NF-SCADA.zip)
  - [NF Scanners IDS Rules](https://networkforensic.dk/SNORT/NF-Scanners.zip)
- [Quantum Insert detection for Suricata](https://github.com/fox-it/quantuminsert/blob/master/detection/suricata/README.md) - Fox-ITのQUANTUM 2015ブログ／BroConトークに付随するSuricataルール。
- [Hunting rules](https://github.com/travisbgreen/hunting-rules) - Travis Greenによるネットワーク異常検出のためのSuricata IDSアラートルール。
- [3CORESec NIDS - Lateral Movement](https://dtection.io/ruleset/3cs_lateral) - ラテラルムーブメント技術に焦点を当てたSuricataルールセット（有料）。
- [3CORESec NIDS - Sinkholes](https://dtection.io/ruleset/3cs_sinkholes) - 厳選された公開マルウェアシンクホールのリストに焦点を当てたSuricataルールセット（無料）。
- [PAW Patrules](https://pawpatrules.fr) - Suricataエンジン向けの、もう一つの無料（CC BY-NC-SA）ルールコレクション。
- [opnsense-suricata-nmaps](https://github.com/aleksibovellan/opnsense-suricata-nmaps) - NMAPスキャンに対するOPNSenseのSuricata IDS/IPS検出ルール。
- [Antiphishing](https://github.com/julioliraup/Antiphishing) - フィッシング攻撃を検出するSuricataルール・データセット。
- [Suricata Ruleset Index](https://github.com/OISF/suricata-intel-index) - Suricata-Updateが使うソースの、OISFによる厳選された機械可読リスト。
- [EveBox Rules](https://rules.evebox.org) - Suricataルールブラウザー。Suricata Ruleset Indexのルールを含む多くの無料ルールセットを索引化する。

## ルール／セキュリティコンテンツの管理・処理

- [sidallocation.org](https://sidallocation.org/) - SID範囲のリストを扱うSid Allocationワーキンググループ。
- [Scirius](https://github.com/StamusNetworks/scirius) - Suricataルールセット管理・脅威ハンティング向けWebアプリケーション。
- [IOCmite](https://github.com/sebdraven/IOCmite) - MISPインスタンスのインジケーターを用いたsuricata向けデータセットを作成し、データセットのインジケーターがアラートを出した場合にMISPへsightingを追加するツール。
- [luaevilbit](https://github.com/regit/luaevilbit) - Suricata向けluajitでのEvil bit実装。
- [Lawmaker](https://www.3coresec.com/solutions/lawmaker) - Suricata IDSルール・フリート管理システム。
- [surify-cli](https://github.com/dgenzer/surify-cli) - Suricataテンプレートを基に、IOC（JSON、CSV、フラグ）のコレクションからsuricata-rulesを生成する。
- [suricata-prettifier](https://github.com/theY4Kman/suricata-prettifier) - Suricataルールを整形・構文強調表示するコマンドラインツール。
- [OTX-Suricata](https://github.com/AlienVault-OTX/OTX-Suricata) - OTXアカウントのインジケーターをSuricataで警告するためのルール・設定を作成する。
- [Aristotle](https://github.com/secureworks/aristotle) - 各ルールのmetadataキーワードにある解釈済みキー・値ペアに基づき、Suricata・Snortルールセットをフィルタリング・変更できるシンプルなPythonプログラム。

## プラグインと拡張機能

- [suricata-zabbix](https://github.com/catenacyber/suricata-zabbix) - Suricata向けZabbixアプリケーション層プラグイン。

## Suricataを使用するシステム

- [SELKS](https://github.com/StamusNetworks/SELKS) - Suricataベースの侵入検知システム／侵入防御システム／ネットワークセキュリティ監視ディストリビューション。
- [Amsterdam](https://github.com/StamusNetworks/Amsterdam) - DockerベースのSuricata、Elasticsearch、Logstash、Kibana、Scirius、別名SELKS。
- [pfSense](https://www.pfsense.org) - カスタムカーネルを備えたFreeBSDオペレーティングシステムを基に、追加機能向けのサードパーティー製フリーソフトウェアパッケージを含む、無料ネットワークファイアウォールディストリビューション。
- [OPNsense](https://opnsense.org) - オープンソースで使いやすく構築も容易な、FreeBSDベースのファイアウォール・ルーティングプラットフォーム。
- [Artica](https://github.com/dtouzeau/artica-suricata) - [Artica](https://artica.systems)ゲートウェイアプライアンス向けSuricata IDS統合。
- [Shovel](https://github.com/FCSC-FR/shovel) - CTF競技におけるネットワーク分析を主眼として、Suricata EVE出力を探索するWebインターフェース。

## トレーニング

- [Experimental Suricata Training Environment](https://github.com/jasonish/experimental-suricata-training) - Docker（-Compose）を基にしたSuricataトレーニング環境。
- [CDMCS](https://github.com/ccdcoe/CDMCS/tree/master) - Cyber Defence Monitoring Course: ルールベース脅威検出。

## シミュレーションとテスト

- [Leonidas](https://github.com/WithSecureLabs/leonidas) - 検出ユースケースを含むクラウドでの自動攻撃シミュレーション。
- [speeve](https://github.com/satta/speeve) - EVE利用アプリケーションのテスト・ベンチマーク向け、高速な確率的EVE-JSONジェネレーター。
- [Dalton](https://github.com/secureworks/dalton) - Suricata・Snort IDSルールおよびpcapテストシステム。

## データセット

- [suricata-sample-data](https://github.com/FrankHassanabad/suricata-sample-data) - さまざまなSuricataサンプルデータセットを作成するリポジトリ。

## その他

- [Suriwire](https://github.com/regit/suriwire) - Suricata分析情報を表示するWiresharkプラグイン。
- [bash_cata](https://github.com/isMTv/bash_cata) - 生成されたSuricata eve-logをリアルタイムで処理し、アラートに基づいて後続ブロックのため指定時間MikroTikアドレスリストへIPアドレスを追加するシンプルなスクリプト。
- [suriGUI](https://github.com/control-owl/suriGUI) - Suricata + Qubes OS向けGUI。
- [SuriGuard](https://github.com/SEc-123/SuriGuard1) - 高度な分析・可視化機能を備える、Suricata IDS/IPS向けWebベース管理システム。
