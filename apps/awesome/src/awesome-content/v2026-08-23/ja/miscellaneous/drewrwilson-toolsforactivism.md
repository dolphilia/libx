---
title: "drewrwilson/toolsforactivism"
description: "drewrwilson/toolsforactivism の正規スナップショット"
licenseSource: "github-drewrwilson-toolsforactivism-readme-md"
---

# 活動家のためのデジタルツール

![活動家のためのデジタルツール](https://raw.githubusercontent.com/drewrwilson/toolsforactivism/master/digital-tool.jpg "活動家のためのデジタルツール")

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

以下は、社会運動に役立つ優れたデジタルツールを集めたリストです。社会変革のためにキャンペーン、組織化、情報発信を行う個人、臨時グループ、正式な組織を対象としています。一部は、自分でセットアップしてホストするために技術知識が必要なオープンソースプロジェクトです。ほかには、ブラウザーで Web ページを開いて利用する SaaS ツールもあります。提案があればぜひ共有してください。

## 目次

  1. [自分でホストするオープンソースツール](#open-source-host-it-yourself)
  2. [SaaS ツール](#software-as-a-service)
  3. [開発中のプロジェクト](#projects-to-keep-an-eye-on-ie-projects-in-development)
  4. [このリストへの貢献方法](#how-do-i-contribute-to-this-list)
  5. [ライセンス](#license)


# リスト

## 自分でホストするオープンソースツール：

 * [Contact Congress (Open Source)](https://github.com/EFForg/contact-congress) - 米国議会議員にメールを送信します。EFF がオープンソースプロジェクトとして開発し、内部のキャンペーンでも使用しています。Fight for the Future が運営するホスト版もあります（後述）。
 * [Call Congress](https://github.com/fightforthefuture/call-congress) - 米国議会、大統領、地域や企業の対象に一斉に電話をかける日を調整します。Fight for the Future と Taskforce.is によるプロジェクトを基に、[Mozilla](https://github.com/mozilla/call-congress) と [EFF](https://github.com/effOrg/call-congress/tree/refactor/master) も大幅に開発しています。フロントエンドは [https://call.mozilla.org](https://call.mozilla.org/)、バックエンドは [http://callpower.org](http://callpower.org/easy-to-use/) のように動作します。ホスト版もあり、コードは AGPL です。
 * [Twilio.org's Rapid Response Kit](https://github.com/Twilio-org/rapid-response-kit) - Twilio のサービスを利用する電話関連ツール集です。自動応答（音声・SMS の着信応答）、ブロードキャスト（リストへテキストや電話を一斉送信）、会議回線、転送、リングダウン（リストの先頭から電話し、応答がなければ次へ進む）、ヘルプライン（「1 を押すと…、2 を押すと…」）を含みます。
 * [Ushahidi](https://www.ushahidi.com/) - データ管理と可視化のプラットフォームです。CrowdMap、CrisisNET（世界の危機に関するデータ）、Ping（緊急事態の後に無事を確認するツール）、SMSsync（双方向 SMS ゲートウェイ）なども提供しています。[GitHub リポジトリ](https://github.com/ushahidi)も参照してください。
 * [Crowdring](https://github.com/therules/CrowdRing) - 世界中の人々が無料の不在着信を使って請願に署名できる Web アプリです。
 * [Self Starter](https://github.com/lockitron/selfstarter) - 独自のクラウドファンディングサイトを構築できます。
 * [TakeCharge.io](https://github.com/controlshift/prague-server) - Stripe を利用したオープンソースまたは SaaS のオンライン寄付サービスです。
 * [Countdown](https://github.com/drewrwilson/countdown) - 今後のイベントまでのカウントダウン Web ページを作るための、素早く簡単なツールです。
 * [CiviCRM](https://civicrm.org/) - 非営利・活動家分野向けの連絡先管理システムで、寄付、会員、イベント、SMS、一斉メール、完全な CRM を備えています。
 * [Spoke](https://github.com/Elizabeth-Warren/Spoke) - 支持者やメンバーの行動を促すための、組織向けテキスト配信ツールです。電話番号のアップロード、台本のカスタマイズ、支持者と連絡するボランティアの割り当てができ、組織側はそのプロセスを管理できます。

## SaaS：

 * [Loomio](https://www.loomio.org/) - グループで共同意思決定を行うためのツールです。注：[コードもオープンソース](https://github.com/loomio/loomio)ですが、通常はホスト型サービスとして利用されます。
 * [Change.org](https://www.change.org/) 請願サイトです。対象を選び、請願を作成して友人に送ります。支持が広がれば、Change.org のスタッフから支援を受けられます（組織向けアカウントでは、ブランドページの作成や署名者の連絡先情報のエクスポートも可能です）。
 * [Contact Congress (FFTF)](http://congress.fightforthefuture.org/) - 米国議会議員へのメール送信に使います。Fight for the Future が提供する、オープンソース版 Contact Congress のホスト版です。議会へ大量のメールを送るものの、オープンソースソフトウェアを導入・保守できる技術スタッフがいない組織に適しています。
 * [ControlShift](https://www.controlshiftlabs.com/) - 進歩的なアドボカシー団体向けの、分散型請願、イベント、地域グループの仕組みです。キャンペーンをより参加型にするツールを提供します。
 * [Riseup](http://riseup.net/) - 無料 Web メール、チャット、VPN など、活動家向けのコミュニケーションツールを提供します。
 * [Action Network](https://actionnetwork.org) - 進歩的な組織向けの非営利デジタル組織化ツール群です。請願、アドボカシー、資金調達、一斉メールなどを無料または安価に利用できます。
 * [Democracy.io](https://democracy.io)（[コード](https://github.com/sinak/democracy.io)）- 米国上院・下院議員へメッセージを送信します。
 * [MoveOn's Petition Platform](https://petitions.moveon.org/) - MoveOn のホスト型プラットフォームで独自の請願を始められます。支持が広がれば、MoveOn のスタッフが支援してくれる場合があります。
 * [CiviWiki](https://civi.wiki/) - 民主的参加のための Web システムを開発する、オープンソースの非営利コミュニティです。

## オペレーティングシステム：

 * [Tails](https://tails.boum.org/) - デジタルな痕跡を残さずコンピューターを使用できるよう設計された、ライブメディア形式の Linux ベース OS です。

 ## ブラウザー：

 * [Tor Browser](https://github.com/TheTorProject/gettorbrowser) - 匿名通信を可能にするフリーソフトウェアです。インターネット接続の監視者に閲覧サイトを知られること、閲覧先サイトに物理的な位置を知られることを防ぎ、ブロックされたサイトにもアクセスできます。

* [Brave Browser](https://github.com/brave/brave-browser) - [Brave](https://brave.com/) は Brave Software, Inc. が Chromium を基に開発する、無料でオープンソースの Web ブラウザーです。広告や Web サイトのトラッカーをブロックし、Basic Attention Token の形で Web サイトやコンテンツ制作者に情報提供の対価を送る方法も提供します。


## 注目しておきたいプロジェクト（開発中）

いずれも開発途中のプロジェクトです。完成はしていませんが、確認する価値があります。

 * [Where@](https://github.com/the-learning-collective/whereat-macroid) - デモ行進中に参加者同士がリアルタイムで連絡を取るためのモバイルアプリです。
 * [Stencil Validator](https://drewrwilson.com/stencilvalidator/)（[コード](https://github.com/drewrwilson/stencilvalidator)）- アートワークが有効なステンシルか判定するデザインツールです。
 * [Day of Action](https://github.com/handsupwalkout/handsupwalkout.github.io) - 高校生の一斉行動日を調整するために使われた、ごく初期段階のツールです。より汎用的な一斉行動キャンペーンツールの出発点です。
 * [Umbrella App](https://github.com/securityfirst/Umbrella_android) - 安全なメールの送信、物理的監視への対処、抗議活動への安全な参加など、デジタル・物理セキュリティに関する教材とチェックリストを備えたオープンソース Android アプリです。セキュリティインシデントへの対応フォームや、地域の最新セキュリティ情報を届けるフィードも含みます。スペイン語版と中国語版もあります。
 * [Code Corps](https://github.com/code-corps) - 社会的影響を持つプロジェクトと人を結び付け、クラウドファンディングを促進し、プロジェクト参加者を支援するツールの提供を目指しています。

## 終了したプロジェクト

以前は存在していたものの、現在は存在しないプロジェクトやツールです。
 * [Thunderclap](http://thunderclap.it) - グループが同じメッセージを同時にソーシャルメディアで共有できるよう調整します。ツイートを書いてキャンペーンを作成し、支援の約束を募ります。一定数の支援者という目標を達成すると、そのツイートが各支援者のソーシャルメディアへ自動的に投稿されます。


## このリストへの貢献方法

このリストに載せるべきツールのアイデアがありますか？次の方法で追加できます。
 * **GitHub に詳しい場合：** 提案を含むプルリクエストを送ってください。方法が分からなくても心配はいりません。次を参照してください。
 * **GitHub に詳しくない場合：** 右側の `Issues` タブをクリックして New Issue を追加すると、このページにコメントを残せます。GitHub アカウントの作成が必要です。

## ライセンス

著作権の主張を意図していません。

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Drew Wilson](https://drewrwilson.com) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
