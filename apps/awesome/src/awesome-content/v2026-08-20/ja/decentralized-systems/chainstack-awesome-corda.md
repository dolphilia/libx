---
title: "chainstack/awesome-corda"
description: "chainstack/awesome-corda の定本スナップショット"
licenseSource: "github-chainstack-awesome-corda-readme-md"
---


<div align="center">
  <a href="https://www.corda.net/"><img width="250px" src="./project_logo.png">
  </a><br />
  <a href="https://www.corda.net/">Corda</a> は、当初からビジネス向けに設計されたオープンソースのブロックチェーンプロジェクトです。
  <br />Corda を使うと、厳格なプライバシーのもとで取引を行う、相互運用可能なブロックチェーンネットワークを構築できます。Corda のスマートコントラクト技術により、企業は価値を直接取引できます。
  <br />

  [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
</div>


プルリクエストを歓迎します！

## 目次

- [目次](#contents)
- [ドキュメント](#documentation)
- [プログラミング](#programming)
- [ツール](#tools)
- [チュートリアル](#tutorials)
- [学習とオンラインコース](#learning-and-online-courses)
- [動画](#videos)
- [CorDapp](#cordapps)
- [ネットワーク](#networks)
- [コミュニティ](#community)
- [その他](#misc)
- [公式](#official)
- [貢献](#contribute)


## ドキュメント

- [Documentation](https://docs.corda.net/) - Corda ドキュメント。あらゆることの参照先です。
- [Technical whitepaper](https://www.r3.com/reports/corda-technical-whitepaper/) - Corda の技術的説明。


## プログラミング

- [Corda API reference](https://api.corda.net/) - Corda 公開 API リファレンス。
- [Development environment](https://docs.corda.net/getting-set-up.html#set-up-instructions) - Corda の開発を始めるためのステップバイステップ手順。

## ツール

- [Braid Corda](https://gitlab.com/bluebank/braid/tree/master/braid-corda) - Corda ノードから Braid エンドポイントとストリームを作成します。
- [Codaptor](https://github.com/180Protocol/codaptor) - Corda ノードで動作する任意の CorDapp 向け REST API を自動作成します。
- [Corbeans](https://manosbatsis.github.io/corbeans) - Spring Boot 向け Corda 統合。
- [Cordage](https://github.com/LayerXcom/cordage) - さらなる信頼できる第三者なしで、Corda と他のブロックチェーン間の相互運用性を可能にするモジュールを提供します。
- [Cordalo](https://github.com/cordalo-ch) - 分散領域での開発を高速化する Corda フレームワークを提供します。
- [Corda Lean State](https://manosbatsis.github.io/corda-lean-state) - 簡略化されたインターフェースから Corda Contract と Persistent state を生成します。
- [Cordentity](https://github.com/hyperledger-labs/cordentity) - [Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) の機能を Corda に統合します。
- [DAML for Corda](https://github.com/chainstack/awesome-corda) - Corda 向け DAML スマートコントラクト。
- [DemoBench](https://www.corda.net/demobench/) - ローカル Corda ノードを構成・起動するスタンドアロンデスクトップアプリ。
- [Interact with nodes](https://docs.chainstack.com/operations/corda/tools) - スタンドアロンシェル、アプリ、またはウェブサーバーを通じて Corda ノードとやり取りします。
- [Nodes and networks deployment with Chainstack](https://chainstack.com/corda/) - 簡単な Corda ノード・ネットワークデプロイメント。
- [Partiture](https://manosbatsis.github.io/partiture/) - CorDapp 向けのコンパクトなコンポーネントフレームワーク。現在の主目的はフロー構成を単純化することです。
- [PyCorda](https://github.com/chainhaus/pycorda) - pandas DataFrame を使い、分析用にノード・vault データへアクセスします。
- [RPC PoolBoy](https://manosbatsis.github.io/corda-rpc-poolboy/) - 複数 Corda ノードをサポートする RPC 接続プール。
- [Smart legal contracts with Accord](https://www.accordproject.org/news/smart-legal-contracts-on-corda/) - Corda 上のスマート法的契約のリファレンス実装。
- [Testacles](https://github.com/manosbatsis/corda-testacles) - CorDapp テストスイートを成長させるためのツール。
- [Vaultaire](https://manosbatsis.github.io/vaultaire/) - Corda 開発者向けのクエリ DSL とデータアクセスユーティリティ。
- [VS Code Corda extension](https://github.com/corda/vscode-corda) - Corda プラットフォームで CorDapp を開発するための VS Code ツール。
- [Web3j integration for Corda](http://corda.web3j.io/) - CorDapp を扱うための軽量クライアントライブラリー。
- [XTS Fountain](https://cordite.foundation/) - XTS トークンをミントし、Corda ノード上のトークンアカウントへ送ります。
- [Splunk App for Corda](https://github.com/splunkdlt/splunk-app-for-corda) - Corda 監視向けの Splunk 公式統合アプリ。

## チュートリアル

- [Official Corda tutorials](https://docs.corda.net/tutorials-index.html) - CorDapp の構築と実行を学びます。
- [Sample CorDapps](https://github.com/corda/samples/) - さまざまな用途を対象としたサンプル CorDapp のコードを探索します。
- [No ticket scalping CorDapp](https://docs.chainstack.com/tutorials/no-ticket-scalping-cordapp-on-corda) - CorDapp をゼロから構築、実行、操作します。
- [Vaultaire: Corda Vault Queries Made Simple](https://medium.com/@manosbatsis/vaultaire-corda-vault-queries-made-simple-d13db4147298) - あなただけのために生成された、クリーンで使いやすいクエリ DSL へアップグレードします。


## 学習とオンラインコース

- [Official Corda Training Platform](https://training.corda.net/) - R3（Corda + SDK）により保守される無料トレーニングプラットフォーム。オプションのサポート付き自習形式です。
- [Introduction to Corda Development](https://www.udemy.com/course/corda-development/) - 無料の自習形式オンラインコース。
- [Corda developer certification](https://www.r3.com/training-and-certification/) - 認定 Corda 開発者になります。


## 動画

- [Corda Bootcamp](https://www.youtube.com/playlist?list=PLi1PppB3-YrVq5Qy_RM9Qidq0eh-nL11N) - Corda 初心者向け20本の動画プレイリスト。


## CorDapp

CorDapp を試して着想を得ましょう。[CorDapp marketplace](https://marketplace.r3.com/) も探索するか、あなたの CorDapp を一覧へ追加してください！

- [Cordite](https://gitlab.com/cordite/cordite) - 分散型の経済・ガバナンスサービスを提供する CorDapp のコレクション。
- [Credit scoring](https://github.com/rafaelazeredo/creditbank) - ユーザーと小売銀行間の信用スコアリングサービス。
- [Auction](https://github.com/ashutoshmeher-r3/auction-cordapp) - デモ用オークション CorDapp。
- [Private health insurance management](https://github.com/corda-codeclub/marge) - 民間医療保険用 CorDapp。
- [Sustainable fishing rights](https://github.com/joeldudleyr3/olive-oyl) - 漁業権を管理する CorDapp。

## ネットワーク

- [Corda Network](https://corda.network/) - Corda Network Foundation により運営されるグローバル本番ネットワーク。
- [Corda Pre-Production Network](https://corda.network/participation/preprod.html) - Corda Network Foundation により運営される、プリプロダクション環境を提供する UAT ネットワーク。
- [Corda Testnet](https://docs.corda.net/corda-testnet-intro.html) - Corda Network Foundation により運営される、最小限の権限を持つ無料公開テストネット。
- [Cordite Network](https://cordite.foundation/) - Cordite Foundation により運営され、誰でも参加できるテストネット。


## コミュニティ

- [Slack](http://slack.corda.net/) - Corda コミュニティと話せます。
- [Mailing list](https://groups.io/g/corda-dev) - Corda 開発者メーリングリストに参加します。
- [Corda Code Club](https://www.meetup.com/Corda-Code-Club/) - ロンドンで開催される Corda 開発者ミートアップ。


## その他

- [Corda developer blog](https://lankydan.dev) - Corda 開発者による非常に役立つブログ。


## 公式

- [Corda website](https://www.corda.net/)


## 貢献

貢献を歓迎します！ [contribution guidelines](https://github.com/chainstack/awesome-corda/blob/7fad26c618a1676dc40d3409bdf682d7e18f3828/CONTRIBUTING.md)をお読みください。
