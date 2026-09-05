---
title: "Awesome Bitcoin Payment Processors"
description: "Bitcoin Payment Processorsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-alexk111-awesome-bitcoin-payment-processors-readme-md"
---

# Awesome Bitcoin Payment Processors

Bitcoin Payment Processorsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [セルフホスト型Bitcoin決済処理事業者](#self-hosted-bitcoin-payment-processors)
- [ホスト型Bitcoin決済処理事業者](#hosted-bitcoin-payment-processors)
  - [ノンカストディアル](#non-custodial)
  - [カストディアル](#custodial)
- [支援者 💝](#backers-)

## セルフホスト型Bitcoin決済処理事業者

セルフホスト型の決済処理事業者は自身のサーバーで動作し、決済処理と資金全体を完全に制御できます。第三者は関与しないため、あなたと顧客の検閲耐性、プライバシー、セキュリティが大幅に高まります。

| 処理事業者 | 手数料 | Lightning | ウォレットへ直接送金 | 法定通貨への換金 | 要件 |
| --------- |:----:|:---------:|:-----------------------:|:------------------:| ------------ |
| [BTCPay Server](https://btcpayserver.org/) | 手数料なし | はい | はい | [Strike plugin](https://github.com/Marfusios/strike-btcpayserver-plugin) または [Exchange Integration](https://redbtc.org/flows/integrations/kraken-exchange/) 経由 | 2 GB RAM、80 GBストレージ、Docker |
| [One Time Address](https://github.com/alexk111/One-Time-Address) | 手数料なし | いいえ | はい | いいえ | NodeJS |
| [CryptoWoo](https://www.cryptowoo.com/) | 年額$34〜$99 | いいえ | はい | いいえ | PHP 5.6+、Wordpress 4.3+、WooCommerce 3.0+ |
| [BitcartCC](https://bitcartcc.com) | 手数料なし | はい | はい | いいえ | 1 GB RAM、10 GBストレージ、Docker |
| [LnMe](https://github.com/bumi/lnme) | 手数料なし | はい | はい | いいえ | LNDノード |
| [SatSale](https://github.com/SatSale/SatSale) | 手数料なし | はい | はい | Weakhands: [Liquid上でUSDTに交換](https://github.com/SatSale/SatSale/blob/471c8c03bbc269df1f322f6484b6e7a7364e5b34/config.toml#L101)、no-KYC | Python。Bitcoinノード、Lightningノード、WooCommerceは任意。 |
| [Keagate](https://github.com/dilan-dio4/Keagate) | 手数料なし | いいえ | はい | いいえ | 1 GB RAM、Unix |
| [LNURL Daemon](https://github.com/yanascz/lnurld) | 手数料なし | はい | はい | いいえ | LNDノード |

## ホスト型Bitcoin決済処理事業者

ホスト型の決済処理事業者は他者のサーバー上で動作します。初期設定は簡単になりますが、決済処理に対する制御の度合いは低下します。

### ノンカストディアル

これらの処理事業者は、決済の受け取りにあなたのウォレットを使います。

| 処理事業者 | 手数料 | Lightning | ウォレットへ直接送金 | 法定通貨への換金 | 要件 |
| --------- |:----:|:---------:|:-----------------------:|:------------------:| ------------ |
| [Blockonomics](https://www.blockonomics.co/merchants) | 1% | いいえ | はい | [Payment Forwarding](https://www.blockonomics.co/views/payment_forwarding.html) 経由 | なし |
| [Payscrypt](https://payscrypt.com/) | 手数料なし | いいえ | はい | いいえ | なし |
| [Bitrequest](https://bitrequest.io/) | 手数料なし | はい | はい | いいえ | なし |
| [Zaprite](https://zaprite.com/) | 月額$25 | はい | はい | いいえ | なし |
| [Paymento](https://paymento.io/) | 0.5% | いいえ | はい | いいえ | なし |
| [Flash](https://paywithflash.com/) | 1.5% | はい | はい | いいえ | なし |

### カストディアル

以下の処理事業者は、決済の受け取りにあなたのものではなく、自らのウォレットを使います。

⚠ 決済データを収集するだけでなく、資金を完全に制御します。カストディアンには、資金の喪失やロックにつながり得る多くのリスクがあります。

⚠ 多くはKYB/KYC/AML要件を課しており、あなたと顧客のプライバシーに深刻な脅威をもたらします。

⚠ 加盟店および加盟店の顧客に対し、国に基づく制限を設けています。

| 処理事業者 | 手数料 | Lightning | ウォレットへ直接送金 | 法定通貨への換金 | 要件 |
| --------- |:----:|:---------:|:-----------------------:|:------------------:| ------------ |
| [Confirmo](https://confirmo.net/) | 1.3%（請求0.8% + 支払0.5%） | はい | いいえ | はい | 事業・ウェブサイトに関する情報。特定の書類を求められる場合があります。 |
| [CoinGate](https://coingate.com/accept) | 1%（加盟店）+ [変動サービス手数料](https://support.coingate.com/en/109/why-does-coingate-charge-service-fee)（顧客） | はい | いいえ | はい | [多くの情報および事業書類](https://blog.coingate.com/2019/05/verify-merchant-account-faq)が必要。公式に英語へ翻訳済みです。 |
| [CoinPayments](https://www.coinpayments.net/) | 0.5% | はい | いいえ | いいえ | 出金時に多数の本人確認書類を要求され、未払い額の精算を求められる場合があります。 |
| [OpenNode](https://www.opennode.co/) | 1% | はい | いいえ | はい | [KYC/KYB書類](https://help.opennode.com/en/articles/3654899-kyc-and-kyb-requirements)が必要です。 |
| [Strike](https://strike.me/business/) | 1% | のみ | いいえ | いいえ | [基本的な事業情報、所有者・運営者の書類と本人確認](https://strike.me/faq/how-do-i-sign-up-for-a-strike-business-account/)が必要です。 |
| [Coinremitter](https://coinremitter.com/) | 0.23% + 0.0001 | いいえ | いいえ | いいえ | なし |
| [Utrust](https://utrust.com/) | 1% | いいえ | いいえ | はい | 特定の書類が必要です。 |
| [NOWPayments](https://nowpayments.io/) | ≤0.5% | いいえ | いいえ | いいえ | 特定の顧客、ウォレットアドレス、資産にはKYC/AML手続きが適用されます。 |
| [ElenPAY](https://elenpay.tech) | ≤1% | はい | はい | いいえ（近日対応） | 低KYC |
| [Speed](https://tryspeed.com/) | 1% | はい | いいえ | いいえ | なし |
| [Sheepy](https://www.sheepy.com/) | 1% + $0.25 | いいえ | いいえ | はい | [KYB書類](https://www.sheepy.com/faq/what-documents-are-required-to-verify-my-merchant-account)が必要です。 |
| [ALFAcoins](https://www.alfacoins.com/) | 0.99% | いいえ | いいえ | いいえ | KYB書類が必要です。 |
| [Apirone](https://apirone.com/) | 1% | いいえ | いいえ | いいえ | なし |

## 支援者 💝

[![Backer](https://mynode.alexkaul.com/gh-backer/top/0/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/0/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/1/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/1/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/2/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/2/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/3/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/3/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/4/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/4/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/5/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/5/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/6/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/6/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/7/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/7/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/8/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/8/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/9/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/9/profile)

[[Donate](https://mynode.alexkaul.com/gh-donate)] ご支援ありがとうございます！🙌
