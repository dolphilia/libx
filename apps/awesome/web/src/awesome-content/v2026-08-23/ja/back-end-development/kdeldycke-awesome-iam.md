---
title: "Awesome IAM"
description: "IAMのプロトコル、アクセス制御モデル、ライブラリ、ツールと、シークレット管理、不正対策、モデレーション、プライバシー、アカウントUXの資料。"
licenseSource: "github-kdeldycke-awesome-iam-readme-md"
---

# Awesome IAM

[Identity and Access Management（IAM）](https://en.wikipedia.org/wiki/Identity_management)は、ユーザーアカウント、認証、認可、ロール、権限、プライバシーを扱います。プロトコル、アクセス制御モデル、ライブラリ、ツールに加え、シークレット管理、不正対策、モデレーション、プライバシー、アカウントUXの資料を収録しています。クラウド基盤の関連分野である請求・決済については、[Awesome Billing](https://github.com/kdeldycke/awesome-billing/)を参照してください。

ラベルは元のリストの分類に従います。「オープンソース」は、商用ベンダーの有料製品による機能制限がないプロジェクトを示し、有料サポートだけではこの分類は変わりません。「商用ベンダー」は、維持者が有料版、Enterprise版、独自モジュールを販売していることを示し、商用プラットフォームに関連する無料データセットにも使われます。これらのラベルは、すべての利用が無料または有料であることを意味しません。

## 概要 <a id="overview"></a>

[スタンフォード大学のクラウドコンピューティング概論](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf)では、クラウド基盤をソフトウェアスタックとして示しています。[元のリストに掲載された図](https://github.com/kdeldycke/awesome-iam/blob/ede0dca67cb280f4ddb3ec8f6e8ebb1e3d166cb4/assets/cloud-software-stack-iam.jpg)では、IAMを含むセキュリティと、使用量の計測・課金がスタック全体を横断します。調整機能は下位層を支え、分散ストレージとリソース管理はアプリケーション、サービス、分析機能の下に配置されています。図の構成要素と例は次のとおりです。

| 構成要素 | 元の図に示された例 |
| --- | --- |
| ウェブサーバー | Java, PHP, JS |
| 分析用UI | Hive, Pig, HiPal |
| キャッシュ | memcached, TAO |
| その他のサービス | モデル配信、検索、Unicorn、Druid |
| 分析エンジン | MapReduce, Dryad, Pregel, Spark |
| 運用データストア | SQL, Spanner, Dynamo, Cassandra, BigTable |
| メッセージバス | Kafka, Kinesis |
| メタデータ | Hive, AWS Catalog |
| 分散ストレージ | Amazon S3, GFS, Hadoop FS |
| リソース管理 | EC2, Borg, Mesos, Kubernetes |
| 調整 | Chubby, ZK |
| 使用量の計測・課金 | スタックを横断する機能 |
| セキュリティ | IAMを含む横断的な機能。このリストの主題として強調 |

以下の資料では、IAMの定義、戦略的重要性、より広いエコシステムでの位置づけ、主な機能を紹介します。

- [The EnterpriseReady SaaS Feature Guides](https://www.enterpriseready.io) - SaaSの機能ガイド。元のリストでは、B2Bユーザーが重視する機能の大多数をIAMの範囲に位置づけている

- [IAM is hard. It's really hard.](https://web.archive.org/web/20200809095434/https://twitter.com/kmcquade3/status/1291801858676228098) - `s3:GetObject`を`*`（すべて）のリソースに許可する過剰なAWS IAMポリシーがCapital Oneへの8000万ドルの制裁金につながったとする投稿。過剰な権限が事業にもたらす影響を示す

- [IAM Is The Real Cloud Lock-In](https://forrestbrazeal.com/2019/02/18/cloud-irregular-iam-is-the-real-cloud-lock-in/) - プロバイダーが事業を継続すること、価格を引き上げたりサービスを撤廃したりしないこと、失われる柔軟性を上回る事業加速の価値を提供することへの信頼という観点から、IAMによるロックインを論じる

## セキュリティ <a id="security"></a>

セキュリティはIAMを支える中心的な柱です。ここでは、幅広いセキュリティ概念を紹介します。

- [Enterprise Information Security](https://infosec.mozilla.org) - Mozillaのセキュリティとアクセスに関するガイドライン

- [Mitigating Cloud Vulnerabilities](https://web.archive.org/web/20250529050934/https://media.defense.gov/2020/Jan/22/2002237484/-1/-1/0/CSI-MITIGATING-CLOUD-VULNERABILITIES_20200121.PDF) - クラウドの脆弱性を、誤設定、アクセス制御の不備、共有テナント環境の脆弱性、サプライチェーンの脆弱性の4種類に分類する文書

- [Cartography](https://github.com/lyft/cartography) - オープンソース。サービスとリソースの依存関係や関連を可視化するNeo4Jベースのツール。AWS、GCP、GSuite、Okta、GitHubに対応

- [Open guide to AWS Security and IAM](https://github.com/open-guides/og-aws#security-and-iam)

## アカウント管理 <a id="account-management"></a>

IAMの基礎となる、ユーザー、グループ、ロール、権限の定義とライフサイクルを扱います。

- [As a user, I want…](https://mobile.twitter.com/oktopushup/status/1030457418206068736) - 架空のプロジェクトマネージャーが書いたユーザーストーリーを通じ、事業側が期待する機能と実際のユーザーニーズの衝突を描くアカウント管理への批評

- [Things end users care about but programmers don't](https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/) - 開発者が見落としがちでもユーザーが重視する機能を紹介。企業顧客が必要とするアカウント管理、連携、インポート・エクスポートツールなどを扱う

- [Separate the account, user and login/auth details](https://news.ycombinator.com/item?id=21151830) - 将来の変更に対応できるIAM APIを設計するため、アカウント、ユーザー、ログイン・認証の概念を分離する助言

- [Identity Beyond Usernames](https://lord.io/blog/2020/usernames/) - 識別子としてのユーザー名と、Unicode文字が一意性の要件に関わる際の複雑さを論じる

- [Kratos](https://github.com/ory/kratos) - 商用ベンダー。ユーザーログイン、ユーザー登録、2FA、プロフィール管理

- [UserFrosting](https://github.com/userfrosting/UserFrosting) - オープンソース。PHPによるユーザーログイン・管理フレームワーク

## 暗号技術 <a id="cryptography"></a>

暗号プリミティブは認証スタックの基盤です。概念、実用上の推奨事項、基礎となる論文を紹介します。

- [Cryptographic Right Answers](https://latacora.micro.blog/2018/04/03/cryptographic-right-answers.html) - 暗号技術の専門家ではない開発者に向けた2018年の推奨事項。[短い要約](https://news.ycombinator.com/item?id=16749140)もある

- [Real World Crypto Symposium](https://web.archive.org/web/20260428040052/https://rwc.iacr.org/) - 暗号研究者と開発者をつなぐシンポジウム。インターネット、クラウド、組み込みデバイスなど、実際の環境での暗号利用を扱う

- [An Overview of Cryptography](https://www.garykessler.net/library/crypto.html) - 基本的な暗号手法の用語・概念を定義し、多様な暗号方式の比較方法と実際の利用例を示す論文

- [Papers we love: Cryptography](https://github.com/papers-we-love/papers-we-love/blob/master/cryptography/README.md) - 暗号学の基礎論文

- [Lifetimes of cryptographic hash functions](http://valerieaurora.org/hash.html) - 悪意あるユーザーが提供できるデータをハッシュ比較によってアドレス化する場合、数年ごとに新しいハッシュへ移行する計画を持つべきだとする説明

### 識別子 <a id="identifiers"></a>

トークン、主キー、UUIDなど、用途に応じたランダム性と一意性を備える値の生成を扱います。

- [Security Recommendations for Any Device that Depends on Randomly-Generated Numbers](https://www.av8n.com/computer/htm/secure-random.htm) - 「random number generator」のrandomはgeneratorを修飾し、numbersを修飾するのではない、という語の捉え方を示す説明

- [RFC #4122: UUID - Security Considerations](https://www.rfc-editor.org/rfc/rfc4122#section-6) - UUIDは推測困難であるとは限らず、持っているだけでアクセス権が得られる識別子として使うべきではないとする警告。一意性のために設計されており、ランダム性や予測不能性を保証するものではないため、秘密として使わない

- [Awesome Identifiers](https://adileo.github.io/awesome-identifiers/) - あらゆる識別子形式のベンチマーク

- [Awesome GUID](https://github.com/secretGeek/AwesomeGUID) - 一意識別子のグローバル性をユーモラスに論じる資料

## ゼロトラストネットワーク <a id="zero-trust-network"></a>

ゼロトラストネットワークは「決して信頼せず、常に検証する」という原則で運用します。

- [BeyondCorp: A New Approach to Enterprise Security](https://www.usenix.org/system/files/login/articles/login_dec14_02_ward.pdf) - Googleのゼロトラストネットワーク構想の概要

- [What is BeyondCorp? What is Identity-Aware Proxy?](https://web.archive.org/web/20251205052156/https://medium.com/google-cloud/what-is-beyondcorp-what-is-identity-aware-proxy-de525d9b3f90) - VPN、ファイアウォールなどの制限を重ね、利用体験を悪化させながら限定的なセキュリティ向上しか得られない方式への代替案を論じる

- [oathkeeper](https://github.com/ory/oathkeeper) - 商用ベンダー。受信HTTPリクエストの認証、認可、変更を行うIdentity & Access Proxyとアクセス制御判断API。BeyondCorp・ゼロトラスト白書に着想を得ている

- [Pomerium](https://github.com/pomerium/pomerium) - 商用ベンダー。アイデンティティを考慮して内部アプリケーションへの安全なアクセスを可能にするプロキシ

- [heimdall](https://github.com/dadrus/heimdall) - オープンソース。クラウドネイティブなアイデンティティ対応プロキシとポリシー適用点。多様なルールで認証・認可システムを連携させ、プロトコルに依存しないアイデンティティの伝播に対応

## マシンアイデンティティ <a id="machine-identity"></a>

ワークロード、サービス、デバイスも主体です。相互認証とアクセス許可のため、人間のユーザーアカウントに対応する非人間のアイデンティティが必要です。

- [SPIFFE/SPIRE](https://github.com/spiffe/spire) - オープンソース。異種環境のワークロードに、有効期間が短く暗号学的に検証できるアイデンティティ（SVID）を発行するCNCFフレームワーク

- [NanoMDM](https://github.com/micromdm/nanomdm) - オープンソース。Appleデバイスの登録とアイデンティティ管理を行う最小限のApple MDMサーバー・ライブラリ。MicroMDMに着想を得ている

## 認証 <a id="authentication"></a>

申告されたアイデンティティを検証するプロトコルと技術です。

- [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) - エンドユーザー向けAPIのあらゆるトークン認証方式の概要と比較

- [A Child's Garden of Inter-Service Authentication Schemes](https://web.archive.org/web/20200507173734/https://latacora.micro.blog/a-childs-garden/) - サービス間の認証方式の比較

- [Scaling backend authentication at Facebook](https://www.youtube.com/watch?v=kY-Bkv3qxMc) - Facebookの認証基盤を解説。小さな信頼の起点、TLSだけでは不十分であること、証明書ベースのトークン、Crypto Auth Tokens（CATs）の4点を挙げる。詳細は[スライド](https://web.archive.org/web/20260306052223/https://rwc.iacr.org/2018/Slides/Lewi.pdf)を参照

## パスワード認証 <a id="password-based-auth"></a>

パスワード認証、パスワードの保存、ポリシー、移行に関する資料です。

- [The new NIST password guidance](https://pciguru.wordpress.com/2019/03/11/the-new-nist-password-guidance/) - [NIST Special Publication 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html)のパスワード複雑性に関する指針を要約した2019年の記事

- [Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - 元のリストは、オフライン攻撃を遅らせるため、できるだけ多くの計算資源を消費するパスワードハッシュアルゴリズムを慎重に選ぶよう勧める

- [Password expiration is dead](https://techcrunch.com/2019/06/02/password-expiration-is-dead-long-live-your-passwords/) - パスワードの有効期限などの慣行に疑問を呈し、禁止パスワードリストやMFAなどの代替策を支持する研究を扱った2019年の記事

- [Practical Recommendations for Stronger, More Usable Passwords](http://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf) - 漏洩済みの一般的なパスワードとの照合、文字種の必須条件を設けないポリシー、最低強度の要件を組み合わせることを推奨する研究

- [Banks, Arbitrary Password Restrictions and Why They Don't Matter](https://www.troyhunt.com/banks-arbitrary-password-restrictions-and-why-they-dont-matter/) - パスワードの長さや文字構成に恣意的な低い上限を設けると、セキュリティへの悪い印象や憶測を招き、パスワードマネージャーなどのツールを妨げると論じる

- [Dumb Password Rules](https://github.com/dumb-password-rules/dumb-password-rules) - オープンソース。不合理なパスワードルールを設けるサイトを批判する一覧

- [Password Manager Resources](https://github.com/apple/password-manager-resources) - オープンソース。各サイトのパスワードルール、変更URL、特有の挙動をまとめた資料

- [A Well-Known URL for Changing Passwords](https://github.com/WICG/change-password-url) - オープンソース。パスワード更新用のサイトリソースを定める仕様

- [How to change the hashing scheme of already hashed user's passwords](https://news.ycombinator.com/item?id=20109360) - 保存済みパスワードを従来のハッシュ方式からより強いアルゴリズムへ、利用者に意識させず移行する手法

## 多要素認証 <a id="multi-factor-auth"></a>

パスワードだけの認証を拡張し、2つ以上の証拠（要素）の提示を利用者に求めます。

- [Breaking Password Dependencies: Challenges in the Final Mile at Microsoft](https://www.youtube.com/watch?v=B_mhJO2qHlQ) - SMTP、IMAP、POPなどの従来の認証方式に対するパスワードスプレーがアカウント侵害の最大の原因で、次いでリプレイ攻撃だとする講演。パスワードは安全ではないと論じ、MFAの利用と必須化を推奨する

- [Beyond Passwords: 2FA, U2F and Google Advanced Protection](https://www.troyhunt.com/beyond-passwords-2fa-u2f-and-google-advanced-protection/) - 2FA、U2F、Google Advanced Protectionの解説

- [A Comparative Long-Term Study of Fallback Authentication](https://maximiliangolla.com/files/2019/papers/usec2019-30-wip-fallback-long-term-study-finalv5.pdf) - メール・SMSによる方式のほうが使いやすく、指定した信頼できる協力者や個人的な知識を問う質問に頼る仕組みは、利便性と効率の両面で劣るとする研究

- [Secrets, Lies, and Account Recovery: Lessons from the Use of Personal Knowledge Questions at Google](https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/43783.pdf) - 秘密の質問は利用者が選んだパスワードより一般に安全性がはるかに低いとする分析。利用者が事実どおりに答えないことが安全性の低さの大きな原因であり、回答を覚えておくことも難しいと報告

- [How effective is basic account hygiene at preventing hijacking](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) - Googleの2019年のセキュリティ研究。調査対象のデータでは、2FAが自動化されたボット攻撃を100%防いだと報告

- [Your Pa\$\$word doesn't matter](https://techcommunity.microsoft.com/t5/Azure-Active-Directory-Identity/Your-Pa-word-doesn-t-matter/ba-p/731984) - MFAを使うとアカウントが侵害される可能性が99.9%を超える割合で低下するという、自社の研究に基づくMicrosoftの報告

- [Attacking Google Authenticator](https://unix-ninja.com/p/attacking_google_authenticator) - 2FA検証の試行回数をレート制限する理由を示す攻撃の解説

- [Compromising online accounts by cracking voicemail systems](https://www.martinvigo.com/voicemailcracker/) - パスワードや2FAのリセット、その他の確認で、利用者への自動音声電話に頼ることを避けるよう警告。SMSによる2FAと同様、最も弱い部分である留守番電話システムを通じて侵害され得ると論じる

- [Getting 2FA Right in 2019](https://blog.trailofbits.com/2019/06/20/getting-2fa-right-in-2019/) - 2FAのUXに関する解説

- [2FA is missing a key feature](https://syslog.ravelin.com/2fa-is-missing-a-key-feature-c781c3861db) - 2FAコードを誤って入力されたときに、その事実を知りたいという要望を論じる

- [SMS Multifactor Authentication in Antarctica](https://brr.fyi/posts/sms-mfa) - 携帯電話基地局のない南極の観測基地で、SMSによるMFAが使えなかった事例

- [Authelia](https://github.com/authelia/authelia) - オープンソース。ウェブポータルを通じ、アプリケーションに二要素認証とシングルサインオン（SSO）を提供する認証・認可サーバー

- [Kanidm](https://github.com/kanidm/kanidm) - オープンソース。元のリストがシンプルで安全かつ高速と紹介するアイデンティティ管理プラットフォーム

### SMSベース <a id="sms-based"></a>

元のリストはSMS認証に依存することを避けるよう警告しています。以下の資料では、そのリスクを扱います。

- [SMS 2FA auth is deprecated by NIST](https://techcrunch.com/2016/07/25/nist-declares-the-age-of-sms-based-2-factor-authentication-over/) - SMSによる二要素認証についてNISTが抱く懸念を扱った2016年の報道

- [SMS: The most popular and least secure 2FA method](https://www.allthingsauth.com/2018/02/27/sms-the-most-popular-and-least-secure-2fa-method/)

- [Is SMS 2FA Secure? No.](https://www.issms2fasecure.com) - SIMスワッピングが成功する事例を示す研究プロジェクト

- [Hackers Hit Twitter C.E.O. Jack Dorsey in a 'SIM Swap.' You're at Risk, Too.](https://archive.ph/AhNAI)

- [AT&T rep handed control of his cellphone account to a hacker](https://www.theregister.com/2017/07/10/att_falls_for_hacker_tricks/)

## パスワードレス認証 <a id="password-less-auth"></a>

- [An argument for passwordless](https://web.archive.org/web/20190515230752/https://biarity.gitlab.io/2018/02/23/passwordless/) - パスワードが利用者認証のすべてではない理由を論じる記事

- [Magic Links – Are they Actually Outdated?](https://zitadel.com/blog/magic-links) - マジックリンクの仕組み、起源、利点と欠点

### WebAuthn

WebAuthnは[FIDO2プロジェクト](https://en.wikipedia.org/wiki/FIDO_Alliance#FIDO2)の一部であり、パスキー認証に使うウェブAPIを提供します。

- [WebAuthn guide](https://webauthn.guide) - 主要ブラウザーすべてに対応し、パスワードの代わりに公開鍵暗号で利用者を登録・認証できる標準としてWebAuthnを紹介するガイド

- [Clearing up some misconceptions about Passkeys](https://www.stavros.io/posts/clearing-up-some-passkeys-misconceptions/) - パスキーはパスワードより劣っていないとする議論

### セキュリティキー <a id="security-key"></a>

- [Webauthn and security keys](https://www.imperialviolet.org/2018/03/27/webauthn.html) - セキュリティキー認証の仕組み、プロトコル、WebAuthnとの関係を説明。WebAuthnではU2Fキーを作成できないため、まずログイン処理をWebAuthnへ完全に移行し、その後に登録処理を移行するよう勧める

- [Getting started with security keys](https://web.archive.org/web/20260401133706/https://paulstamatiou.com/getting-started-with-security-keys/) - FIDO2、WebAuthn、セキュリティキーを使い、オンラインの安全を保ちフィッシングを防ぐための実用ガイド

- [OpenSK](https://github.com/google/OpenSK) - オープンソース。FIDO U2FとFIDO2に対応する、Rustで書かれたセキュリティキーの実装

- [YubiKey Guide](https://github.com/drduh/YubiKey-Guide) - YubiKeyをスマートカードとして使い、GPGの暗号化・署名・認証鍵を保存する方法を説明。SSHにも利用でき、多くの原則は他のスマートカードにも適用できる

### 公開鍵基盤（PKI） <a id="public-key-infrastructure-pki"></a>

証明書ベースの認証です。

- [PKI for busy people](https://gist.github.com/hoffa/5a939fd0f3bcd2a6a0e4754cb2cf3f1b) - 主要なPKI概念の短い概要

- [Everything you should know about certificates and PKI but are too afraid to ask](https://smallstep.com/blog/everything-pki.html) - 暗号学的にシステムを定義する、汎用的でベンダーに依存しない仕組みとしてPKIを解説

- [`lemur`](https://github.com/Netflix/lemur) - オープンソース。CAと環境の間を仲介し、適切な既定値でTLS証明書を発行するための開発者向け中央ポータルを提供

- [CFSSL](https://github.com/cloudflare/cfssl) - オープンソース。CloudflareによるPKI/TLSツール群。TLS証明書の署名、検証、バンドルを行うコマンドラインツールとHTTP APIサーバー

- [JA4+](https://github.com/FoxIO-LLC/ja4) - 商用ベンダー。脅威ハンティングと分析を支援するネットワークフィンガープリント手法群

### JWT

元のリストでは、[JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)をベアラートークンとして利用する文脈で説明しています。

- [Introduction to JSON Web Tokens](https://jwt.io/introduction/) - JWTの基礎を学ぶ記事

- [Learn how to use JWT for Authentication](https://github.com/dwyl/learn-json-web-tokens) - JWTを使ってウェブアプリケーションのセキュリティを確保する方法を学ぶ資料

- [Using JSON Web Tokens as API Keys](https://auth0.com/blog/using-json-web-tokens-as-api-keys/) - JWTとAPIキーを、細かなセキュリティ制御、統一的な認証構成、分散した発行、OAuth2準拠、デバッグ、有効期限の制御、デバイス管理の観点から比較

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://web.archive.org/web/2021/https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/) - JWT実装でよくある落とし穴の解説

- [Adding JSON Web Token API Keys to a DenyList](https://auth0.com/blog/denylist-json-web-token-api-keys/) - トークンの無効化についての解説

- [Stop using JWT for sessions](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) - [提案された解決策が機能しない理由](http://cryto.net/%7Ejoepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/)と、[ステートレスなJWTは無効化も更新もできないこと](https://news.ycombinator.com/item?id=18354141)を論じる。保存先によってサイズまたはセキュリティの問題が生じるとし、状態を持つJWTはセッションクッキーと機能的に同じでも、実績のある十分にレビューされた実装やクライアント対応を欠くと指摘

- [JWT, JWS and JWE for Not So Dummies!](https://web.archive.org/web/20221112173931/https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3) - JWTのクレームを、署名・完全性保護に使うJWS（JSON Web Signature）と暗号化に使うJWE（JSON Web Encryption）で表す仕組みを、抽象クラスと具体的な実装の比喩で説明

- [JOSE is a Bad Standard That Everyone Should Avoid](https://paragonie.com/blog/2017/03/jwt-json-web-tokens-is-bad-standard-that-everyone-should-avoid) - JOSEの規格には欠陥がある、または複雑すぎて安全に使いにくいとする批評

- [JWT.io](https://jwt.io) - JWTのデコード、検証、生成を行うツール

## 認可 <a id="authorization"></a>

認証はアイデンティティを確認し、認可はその主体が実行できる操作を決めます。ポリシーの仕様でルールを定め、その適用では実装上の判断が必要になります。

### ポリシーモデル <a id="policy-models"></a>

アクセス制御ポリシーには、[アクセス制御リスト](https://en.wikipedia.org/wiki/Access-control_list)からロールベースアクセス制御まで、さまざまなモデルがあります。以下の資料では、ポリシーのパターンとアーキテクチャを紹介します。

- [Why Authorization is Hard](https://www.osohq.com/post/why-authorization-is-hard) - 多数の箇所でポリシーを適用する際のトレードオフ、事業ロジックと認可ロジックを分離する判断構成、表現力と複雑さを両立するモデルを論じる

- [The never-ending product requirements of user authorization](https://alexolivier.me/posts/the-never-ending-product-requirements-of-user-authorization) - ロールに基づく単純な認可モデルだけでは不十分であり、製品の提供形態、データの配置、企業組織、コンプライアンスによって急速に複雑になることを説明

- [RBAC like it was meant to be](https://tailscale.com/blog/rbac-like-it-was-meant-to-be/) - DAC、MAC、RBACの変遷をたどり、Unix権限、秘密URL、DRM、MFA、2FA、SELinuxなどの例を扱う。RBACはポリシー、ACL、ユーザー、グループをより適切にモデル化できると論じる

- [The Case for Granular Permissions](https://cerbos.dev/blog/the-case-for-granular-permissions) - RBACの限界と、ABAC（属性ベースアクセス制御）がそれをどう解決するかを論じる

- [In Search For a Perfect Access Control System](https://web.archive.org/web/20240421203937/https://goteleport.com/blog/access-controls/) - 認可方式の歴史的な起源と、異なるチーム・組織間の共有、信頼、委任の将来を考える資料

- [GCP's IAM syntax is better than AWS's](https://web.archive.org/web/20251208231427/https://ucarion.com/iam-operation-syntax) - GCPの権限設計の細部が開発者の体験を改善するという議論

- [Semantic-based Automated Reasoning for AWS Access Policies using SMT](https://d1.awsstatic.com/Security/pdfs/Semantic_Based_Automated_Reasoning_for_AWS_Access_Policies_Using_SMT.pdf) - AWSのZelkovaを説明。IAMポリシーを記号的に解析し、ユーザーの権限とアクセス制約の下でリソースに到達できるかを判定する。概略は[re:inforce 2019の導入講演](https://youtu.be/x6wsTFnU3eY?t=2111)も参照

- [Authorization Academy](https://www.osohq.com/academy) - 認可を考えるためのメンタルモデルを重視した、ベンダーに依存しない詳しい解説。認可の要件を整理し、アーキテクチャとモデルを選ぶ判断に役立つ

### RBACフレームワーク <a id="rbac-frameworks"></a>

[ロールベースアクセス制御](https://en.wikipedia.org/wiki/Role-based_access_control)は、ロールを介してユーザーと権限を対応づけます。

- [Athenz](https://github.com/yahoo/athenz) - オープンソース。プロビジョニングのためのサービス認証・ロールベース認可を支えるサービスとライブラリ群

- [Biscuit](https://www.clever-cloud.com/blog/engineering/2021/04/12/introduction-to-biscuit/) - クッキー、JWT、Macaroons、Open Policy Agentの概念を組み合わせた方式。Datalogに基づく言語で認可ポリシーを表し、JWTのようなデータやMacaroonsのような小さな条件を保存するほか、ロールベースアクセス制御、委任、階層などの複雑なルールに対応

- [Cerbos](https://github.com/cerbos/cerbos) - 商用ベンダー。コンテキストを考慮したアクセス制御ポリシーを記述するための認可エンドポイント

- [FerrisKey](https://github.com/ferriskey/ferriskey) - オープンソース。Rustで書かれたセルフホスト型RBACシステム

### ABACフレームワーク <a id="abac-frameworks"></a>

[属性ベースアクセス制御](https://en.wikipedia.org/wiki/Attribute-based_access_control)は、ロールの代わりに属性を使い、より複雑なポリシーによるアクセス制御に対応します。

- [Keto](https://github.com/ory/keto) - 商用ベンダー。ポリシー判断点。AWSに似たアクセス制御ポリシーを使い、主体がリソースに対する特定の操作を許可されているか判定

- [Ladon](https://github.com/ory/ladon) - 商用ベンダー。AWSに着想を得たアクセス制御ライブラリ

- [Casbin](https://github.com/casbin/casbin) - オープンソース。Golangプロジェクト向けアクセス制御ライブラリ

- [Open Policy Agent](https://github.com/open-policy-agent/opa) - オープンソース。ABACポリシーの作成と適用を行う汎用判断エンジン

### ReBACフレームワーク <a id="rebac-frameworks"></a>

元のリストでは、[関係ベースアクセス制御](https://en.wikipedia.org/wiki/Relationship-based_access_control)を、クラウドシステムにおいてRBACより柔軟で強力な代替モデルとして紹介しています。

- [Zanzibar: Google's Consistent, Global Authorization System](https://web.archive.org/web/20191207160155/https://ai.google/research/pubs/pub48190) - 数十億人が使うサービスのため、数兆件のアクセス制御リストと毎秒数百万件の認可リクエストを処理するシステムについての論文。3年間の本番利用で、95パーセンタイルの遅延を10ミリ秒未満、可用性を99.999%超に維持したと報告。[論文にない詳細](https://nitter.tiekoetter.com/LeaKissner/status/1136626971566149633)と、設計を解説する[Zanzibar Academy](https://zanzibar.academy/)も参照

- [SpiceDB](https://github.com/authzed/spicedb) - 商用ベンダー。Zanzibarに着想を得た、セキュリティ上重要なアプリケーション権限を管理するオープンソースデータベース

- [Permify](https://github.com/Permify/permify) - 商用ベンダー。Google Zanzibarに着想を得たオープンソースの認可サービス。[ほかのZanzibar系ツールとの比較](https://permify.notion.site/Differentiation-Between-Zanzibar-Products-ad4732da62e64655bc82d3abe25f48b6)も参照

- [Topaz](https://github.com/aserto-dev/topaz) - 商用ベンダー。OPAのコードによるポリシー管理と判断ログを、Zanzibarのモデルに沿ったディレクトリと組み合わせるオープンソースプロジェクト

- [Open Policy Administration Layer](https://github.com/permitio/opal) - 商用ベンダー。ポリシーとポリシーデータの変更をリアルタイムに検出し、動作中のアプリケーション向けにOPAエージェントへ更新を送るオープンソース管理層

### AWSポリシーツール <a id="aws-policy-tools"></a>

[AWS IAMポリシー](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)のエコシステムに特化したツールと資料です。

- [An AWS IAM Security Tooling Reference](https://ramimac.me/aws-iam-tools-2024) - 維持されているAWS IAMツールを集めた2024年の参考リスト

- [Become an AWS IAM Policy Ninja](https://www.youtube.com/watch?v=y7-fAT3z8Lo) - Amazonで約5年間働き、毎日・毎週、フォーラムや顧客の問い合わせから利用者が困る箇所を探してきたという経験を紹介する講演

- [AWS IAM Roles, a tale of unnecessary complexity](https://infosec.rodeo/posts/thoughts-on-aws-iam/) - 急成長したAWSの歴史から現行方式ができた経緯を説明し、GCPのリソース階層と比較する資料

- [Policy Sentry](https://github.com/salesforce/policy_sentry) - オープンソース。最小権限のIAMポリシー生成を支援し、煩雑な手作業を減らすツール。元のリストは数秒で作成できると紹介

- [IAM Floyd](https://github.com/udondan/iam-floyd) - オープンソース。メソッドを連鎖させて記述できるインターフェース（fluent interface）を備えたAWS IAMポリシーステートメント生成ツール。型安全なポリシーと、IntelliSenseによる条件・ARN生成で制約を強めたステートメントを支援。Node.js、Python、.NET、Javaで利用可能

- [IAMbic](https://github.com/noqdev/iambic) - 商用ベンダー。GitOpsでクラウドへのアクセスと権限を一元化するマルチクラウドIAMコントロールプレーン。クラウドIAM版Terraformに例えられ、人が読みやすく、双方向で結果整合性を持つIAM表現をバージョン管理に保持

### Macaroons

Macaroonsによる認可の分配と委任に関する資料です。

- [Google's Macaroons in Five Minutes or Less](https://web.archive.org/web/20240521142227/https://blog.bren2010.io/blog/googles-macaroons) - 一定の制約下で操作を許可するMacaroonを受け取った人が、相手とのやり取りなしに、より厳しい制約を持つ別のMacaroonを作成して渡せる仕組みを説明

- [Macaroons: Cookies with Contextual Caveats for Decentralized Authorization in the Cloud](https://web.archive.org/web/20191009113323/https://ai.google/research/pubs/pub41892) - GoogleによるMacaroonsの原論文

- [Google paper's author compares Macaroons and JWTs](https://news.ycombinator.com/item?id=14294463) - Macaroonsの利用者・検証者は、第三者による条件を使って認可判断の一部を別の相手に委ねられるが、JWTにはこの機能がないとする比較

### その他のツール <a id="other-tools"></a>

- [Gubernator](https://github.com/gubernator-io/gubernator) - オープンソース。高性能なレート制限マイクロサービスとライブラリ

## OAuth2とOpenID <a id="oauth2--openid"></a>

[OAuth 2.0](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0)は認可を委任するためのフレームワークです。[OpenID Connect（OIDC）](https://en.wikipedia.org/wiki/OpenID_Connect)は、その上に認証の層を加えます。

元のリストは、旧来のOpenIDプロトコルと、現在も使われているOpenID Connectを区別しています。

- [Descope](https://www.descope.com/?utm_source=awesome-iam&utm_medium=referral&utm_campaign=awesome-iam-oss-sponsorship) - 少量のコードで、アプリケーションに認証、ユーザー管理、認可を加えるためのドラッグ＆ドロップツール

- [Awesome OpenID Connect](https://github.com/cerberauth/awesome-openid-connect) - OpenID Connectのプロバイダー、サービス、ライブラリ、資料を集めたリスト

- [An Illustrated Guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) - 簡略化した図でOAuthとOpenID Connectの仕組みを説明

- [OAuth 2 Simplified](https://aaronparecki.com/oauth-2-simplified/) - 開発者やサービス提供者による実装を助けるため、プロトコルを平易に説明した参考記事

- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0) - 標準ができた歴史を説明し、用語を整理してプロトコルと落とし穴を解説

- [OAuth in one picture](https://mobile.twitter.com/kamranahmedse/status/1276994010423361540) - OAuthの要約図

- [How to Implement a Secure Central Authentication Service in Six Steps](https://shopify.engineering/implement-secure-central-authentication-service-six-steps) - 独自のログイン方法やアカウントを持つ従来のシステムを、OIDCで統合する方法

- [Open-Sourcing BuzzFeed's SSO Experience](https://increment.com/security/open-sourcing-buzzfeeds-single-sign-on-process/) - OAuth2と組み合わせやすいようにCentral Authentication Service（CAS）プロトコルを応用した事例。OAuthのユーザーフロー図も含む

- [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) - OAuth 2.0公開後の実践経験を反映してセキュリティ脅威モデルを更新・拡張し、利用範囲の拡大に伴う新しい脅威を扱う文書

- [Hidden OAuth attack vectors](https://portswigger.net/web-security/oauth) - OAuth 2.0認証の仕組みに見られる主要な脆弱性を見つけ、悪用する方法の解説

- [PKCE Explained](https://www.loginradius.com/blog/engineering/pkce/) - OAuthとOpenID Connectの認可コードフローに、追加のセキュリティ層を設けるPKCEを説明

- [Hydra](https://github.com/ory/hydra) - 商用ベンダー。オープンソースのOIDC・OAuth2サーバープロバイダー

- [Keycloak](https://github.com/keycloak/keycloak) - オープンソース。アイデンティティとアクセスを管理するシステム。OIDC、OAuth 2、SAML 2、LDAP・ADディレクトリ、パスワードポリシーに対応

- [Casdoor](https://github.com/casbin/casdoor) - オープンソース。UIを中心に据えた中央認証・シングルサインオン（SSO）プラットフォーム。OIDC、OAuth 2、ソーシャルログイン、ユーザー管理、メール・SMSによる2FAに対応

- [authentik](https://github.com/goauthentik/authentik) - 商用ベンダー。Keycloakに似たオープンソースのアイデンティティプロバイダー

- [ZITADEL](https://github.com/zitadel/zitadel) - 商用ベンダー。GoとAngularで構築され、システム、ユーザー、サービスアカウント、ロール、外部アイデンティティを管理するオープンソースシステム。OIDC、OAuth 2.0、ログイン・登録フロー、パスワードレス認証、MFAを提供。イベントソーシングとCQRSを組み合わせ、監査証跡を残す

- [obligator](https://github.com/lastlogin-net/obligator) - オープンソース。セルフホスト利用者向けに、明確な設計方針を持つシンプルなOpenID Connectサーバー。単一の静的バイナリで、フラットファイルまたはSQLiteに保存

## SAML

Security Assertion Markup Language（SAML）2.0は、上記のOAuth・OpenIDと同様に、サービス間で認可・認証情報を交換する仕組みです。

元のリストでは、SAMLの典型的なアイデンティティプロバイダーとして機関や企業のSSOを、OIDC・OAuthの典型例として独自のデータ基盤を運営するテクノロジー企業を挙げています。

- [SAML vs. OAuth](https://web.archive.org/web/20230327071347/https://www.cloudflare.com/learning/access-management/what-is-oauth/) - OAuthを正しい駐車場へ行くための認可に、SAMLを守衛所を通るための認証に例えて説明

- [The Difference Between SAML 2.0 and OAuth 2.0](https://www.ubisecure.com/uncategorized/difference-between-saml-and-oauth/) - SAMLは幅広い利用を想定して設計されたものの、実際の利用は企業のSSOに偏っているとする説明。OAuthはインターネット上のアプリケーション、特に認可の委任に向けた設計だと比較

- [What's the Difference Between OAuth, OpenID Connect, and SAML?](https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/) - アイデンティティ関連のプロトコルの役割を理解するための比較

- [The Beer Drinker's Guide to SAML](https://duo.com/blog/the-beer-drinkers-guide-to-saml) - 比喩を使ったSAMLの説明

- [SAML is insecure by design](https://joonas.fi/2021/08/saml-is-insecure-by-design/) - XMLのバイト列ではなく正規化したXMLへの署名に依存するため、XMLパーサーやエンコーダーの違いが悪用され得るとする批評

- [The Difficulties of SAML Single Logout](https://shibboleth.atlassian.net/wiki/spaces/CONCEPT/pages/928645229/SLOIssues) - シングルログアウトの実装における技術面とUXの問題

- [The SSO Wall of Shame](https://sso.tax) - SSOを限定された料金プランに閉じ込めるSaaSの価格設定を批判する資料。著者は、SSOが基本的なセキュリティ機能であり、適切な価格で提供すべきだと論じる

## シークレット管理 <a id="secret-management"></a>

信頼の連鎖を維持しながら、認証・認可に使うシークレットを保存・利用するアーキテクチャ、ソフトウェア、ハードウェアです。

- [Secret at Scale at Netflix](https://www.youtube.com/watch?v=K0EOPddWpsE) - ブラインド署名に基づくシークレット管理方式。[スライド](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Mehta.pdf)も参照

- [High Availability in Google's Internal KMS](https://www.youtube.com/watch?v=5T_c-lqgjso) - GCPのKMSではなく、Googleのインフラの中核にある社内KMSの高可用性を解説。[スライド](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Kanagala.pdf)も参照

- [HashiCorp Vault](https://github.com/hashicorp/vault) - 商用ベンダー。トークン、パスワード、証明書、暗号鍵を保存し、アクセスを厳密に制御

- [Infisical](https://github.com/Infisical/infisical) - 商用ベンダー。HashiCorp Vaultの代替ツール

- [`sops`](https://github.com/mozilla/sops) - オープンソース。YAML、JSON、ENV、INI、BINARY形式に対応する暗号化ファイルエディター。AWS KMS、GCP KMS、Azure Key Vault、age、PGPで暗号化

- [`gitleaks`](https://github.com/zricethezav/gitleaks) - オープンソース。Gitリポジトリに含まれるシークレットを監査

- [`trufflehog`](https://github.com/trufflesecurity/trufflehog) - 商用ベンダー。Gitのコミット履歴まで深く調べ、高エントロピー文字列やシークレットを検索

### ハードウェアセキュリティモジュール（HSM） <a id="hardware-security-module-hsm"></a>

HSMは、ハードウェア層でシークレット管理を保護する物理デバイスです。

- [HSM: What they are and why it's likely that you've (indirectly) used one today](https://web.archive.org/web/20260404010649/https://rwc.iacr.org/2015/Slides/RWC-2015-Hampton.pdf) - HSMの用途を紹介する入門資料

- [Tidbits on AWS Cloud HSM hardware](https://news.ycombinator.com/item?id=16759383) - AWS CloudHSM ClassicはSafeNet Luna HSMを、議論の当時のCloudHSMはCavium Nitroxを使い、分割可能な「仮想HSM」を提供すると説明する議論

- [Keystone](https://github.com/keystone-enclave/keystone) - オープンソース。RISC-Vアーキテクチャを基に、安全なハードウェアエンクレーブを使う信頼実行環境（TEE）を構築するプロジェクト

- [Project Oak](https://github.com/project-oak/oak) - オープンソース。データの安全な転送、保存、処理を行う仕様と参照実装

- [Everybody be cool, this is a robbery!](https://www.sstic.org/2019/presentation/hsm/) - HSMの脆弱性と悪用を扱う、フランス語の事例研究

## トラスト＆セーフティ <a id="trust--safety"></a>

多くの利用者が集まると、コミュニティが形成されます。トラスト＆セーフティは、その交流と取引を支えながら、顧客、その他の人々、企業、事業を守る取り組みです。

トラスト＆セーフティはポリシーと地域の法的制約に従い、モデレーション・管理ツールを使う部門横断のチームが、しばしば24時間体制で担います。カスタマーサポートを拡張し、人手による本人確認、有害コンテンツのモデレーション、嫌がらせの防止、令状や著作権に関する申し立て、データの隔離、クレジットカードの紛争などに対応します。

- [Trust and safety 101](https://www.csoonline.com/article/3206127/trust-and-safety-101.html) - トラスト＆セーフティの領域と責務の入門

- [What the Heck is Trust and Safety?](https://www.linkedin.com/pulse/what-heck-trust-safety-kenny-shi) - TnSチームの役割を示す実際の利用事例

- [Awesome List of Billing and Payments: Fraud links](https://github.com/kdeldycke/awesome-billing#fraud) - 関連リストにある、請求・決済の不正管理を扱う節

### ユーザーアイデンティティ <a id="user-identity"></a>

元のリストは、事業者の大半が、第三者に販売するプロフィールを作るためではなく、地域の[本人確認（KYC）](https://en.wikipedia.org/wiki/Know_your_customer)要件の下で契約関係を記録するために身元情報を集めると論じています。

- [The Laws of Identity](https://www.identityblog.com/stories/2005/05/13/TheLawsOfIdentity.pdf) - アイデンティティのメタシステムを扱う論文。小規模なシステムにも役立つ原則を示し、特に利用者に制御を委ね、信頼を得るため同意を求めるという第1原則を説明

- [How Uber Got Lost](https://archive.ph/hvjKl) - Uberが登録の手間を減らすため、偽造しやすいメールアドレスや電話番号を超える身元確認を求めず、車両の盗難・放火や運転手への暴行・強盗、ときには殺害が起き、暴力が増えても簡便な登録方式を続けたとする報道

- [A Comparison of Personal Name Matching: Techniques and Practical Issues](http://users.cecs.anu.edu.au/~Peter.Christen/publications/tr-cs-06-02.pdf) - アカウントの重複排除から不正監視まで、顧客の氏名照合の多様な用途を扱う資料

- [Statistically Likely Usernames](https://github.com/insidetrust/statistically-likely-usernames) - オープンソース。ユーザー名の列挙、模擬的なパスワード攻撃、その他のセキュリティテストで使う、統計的に出現しやすいユーザー名の単語リスト

- [Facebook Dangerous Individuals and Organizations List](https://theintercept.com/document/facebook-dangerous-individuals-and-organizations-list-reproduced-snapshot/) - 法域によって違法とされる団体やコンテンツへの対応を考えるための、ブロックリストの例

- [Ballerine](https://github.com/ballerine-io/ballerine) - 商用ベンダー。ユーザーのアイデンティティとリスクを管理するオープンソース基盤

- [Sherlock](https://github.com/sherlock-project/sherlock) - オープンソース。ユーザー名から、複数のSNSにあるソーシャルメディアアカウントを探すツール

### 不正対策 <a id="fraud"></a>

オンラインサービスの提供者は、不正、犯罪、悪用にさらされます。ワークフローの不具合や不整合は、金銭的利益のために悪用され得ます。

- [After Car2Go eased its background checks, 75 of its vehicles were stolen in one day.](https://web.archive.org/web/20230526073109/https://www.bloomberg.com/news/articles/2019-07-11/mercedes-thieves-showed-just-how-vulnerable-car-sharing-can-be) - 身元・経歴の確認が必要になる場合があることを示す事例

- [Investigation into the Unusual Signups](https://openstreetmap.lu/MWGGlobalLogicReport20181226.pdf) - OpenStreetMapの不審な貢献者登録を詳しく分析し、組織的な活動を記録した報告。不正調査の参考になる

- [MIDAS: Detecting Microcluster Anomalies in Edge Streams](https://github.com/bhatiasiddharth/MIDAS) - オープンソース。エッジストリーム中に突然現れる、不審なほど似たエッジの集団であるマイクロクラスター異常を、一定の時間とメモリで検出する提案手法

- [Gephi](https://github.com/gephi/gephi) - オープンソース。大規模グラフを可視化・操作するプラットフォーム

### モデレーション <a id="moderation"></a>

ゲームやSNSに限らず、オンラインコミュニティではモデレーションへの継続的な資源投入が必要です。

- [Still Logged In: What AR and VR Can Learn from MMOs](https://youtu.be/kgw8RLHv1j4?t=534) - 人が他人を傷つけ得るオンラインコミュニティを運営するなら責任を負い、その責任を引き受けられないなら運営すべきではないとする講演

- [You either die an MVP or live long enough to build content moderation](https://mux.com/blog/you-either-die-an-mvp-or-live-long-enough-to-build-content-moderation/) - モデレーションをコスト、正確性、速度の3軸と、人手・機械の2方式で考える説明。人手は正確性に優れる一方、高価で遅い。機械は安く速いため、用途に十分な正確性を備えた機械的手段を探すことが目標になると論じる

- [The despair and darkness of people will get to you](https://restofworld.org/2020/facebook-international-content-moderators/) - 大規模SNSの外部委託によるモデレーションの報道。有害な内容にさらされ、担当者がPTSDを発症することが多いと報告

- [The Cleaners](https://thoughtmaybe.com/the-cleaners/) - 投稿やアカウントを削除する、低賃金のモデレーションチームを扱うドキュメンタリー

### 脅威インテリジェンス <a id="threat-intelligence"></a>

攻撃的なオンライン活動を検知、特定、分類する方法を扱います。通常はセキュリティ、ネットワーク、インフラのチームが監視しますが、脅威の分析と対応に専門知識を求められるT&S・IAM担当者にも役立ちます。

- [Awesome Threat Intelligence](https://github.com/hslatman/awesome-threat-intelligence) - 資産に対する既存・新たな脅威について、文脈、仕組み、指標、影響、実行可能な助言を含む根拠ある知識を、対応の意思決定に使うという脅威インテリジェンスの定義を紹介

- [SpiderFoot](https://github.com/poppopjmp/spiderfoot) - オープンソース。オープンソースインテリジェンス（OSINT）の自動化ツール。元のリストは、ほぼあらゆるデータソースと連携し、多様な分析手法でデータを調べやすくすると紹介

- [OSINT Stuff Tool Collection](https://github.com/cipher387/osint_stuff_tool_collection) - 数百のOSINT用オンラインツール。ドメイン、IP、メール、ユーザー名、SNSの検索を、不正や悪用の特定に利用できる

- [Maigret](https://github.com/soxoj/maigret) - オープンソース。ユーザー名を基に3000以上のサイトから人物の調査資料を集め、アカウントの列挙や不正・悪用の特定に使うツール

- [Standards related to Threat Intelligence](https://www.threat-intelligence.eu/standards/) - 脅威インテリジェンス分析を支える公開標準、ツール、方法論

- [MISP taxonomies and classification](https://www.misp-project.org/taxonomies.html) - サイバーセキュリティの指標、金融不正、テロ対策などの脅威情報を整理するタグ

- [Browser Fingerprinting: A survey](https://arxiv.org/pdf/1905.01051.pdf) - ボットや不正を行う者の識別に、フィンガープリントを手掛かりとして使うことを扱う資料

- [The challenges of file formats](https://speakerdeck.com/ange/the-challenges-of-file-formats) - 利用者がファイルをアップロードする際、攻撃者がセキュリティを回避したり利用者を欺いたりできる問題を扱う資料。[不審なメディアファイルのコーパス](https://github.com/corkami/pocs)も参照

- [SecLists](https://github.com/danielmiessler/SecLists) - オープンソース。セキュリティ評価に使うリストを集約。ユーザー名、パスワード、URL、機微データのパターン、ファジング用ペイロード、ウェブシェルなどを含む

- [PhishingKitTracker](https://github.com/neonprimetime/PhishingKitTracker) - オープンソース。脅威主体がフィッシングキットで使うメールアドレスのCSVデータベース

- [PhoneInfoga](https://github.com/sundowndev/PhoneInfoga) - オープンソース。無料の資料だけで電話番号を調べるツール。世界各国の電話番号について、国、地域、通信事業者、回線種別などの基本情報を高精度に収集し、検索エンジンの痕跡からVoIP事業者や所有者を特定することを目指す

- [Confusable Homoglyphs](https://git.sr.ht/~valhalla/confusable_homoglyphs) - オープンソース。フィッシングでよく使われる、見た目の似た文字であるホモグリフを扱う資料

### CAPTCHA

スパム送信者に対する追加の防御手段です。

- [Awesome Captcha](https://github.com/ZYSzys/awesome-captcha) - オープンソースのCAPTCHAライブラリ、連携、代替手段、クラッキングツールをまとめた参考リスト

- [reCaptcha](https://www.google.com/recaptcha) - 商用ベンダー。インターネット規模のボット・スパム対策に専任チームを置けない企業にとって、効果的で経済的かつ素早く使える選択肢として元のリストが紹介

- [You (probably) don't need ReCAPTCHA](https://web.archive.org/web/20190611190134/https://kevv.net/you-probably-dont-need-recaptcha/) - プライバシーとUIの負担を批判し、代替手段を挙げる記事

- [Anubis](https://github.com/TecharoHQ/anubis) - オープンソース。スクレイパーボットから上流のリソースを保護する仕組み

- [Anti-captcha](https://anti-captcha.com) - 商用ベンダー。CAPTCHAを解くサービス

## ブロックリスト <a id="blocklists"></a>

単純な拒否リストは、悪用と不正に対する基本的な自動防御です。

- [Bloom Filter](https://en.wikipedia.org/wiki/Bloom_filter) - 大きな集合に要素が含まれないことを素早く確認するデータ構造。特定のデータ型向けの派生形もある

- [How Radix trees made blocking IPs 5000 times faster](https://web.archive.org/web/2021/https://blog.sqreen.com/demystifying-radix-trees/) - 基数木によってIPブロックリストを高速化する方法の説明

### ホスト名とサブドメイン <a id="hostnames-and-subdomains"></a>

クライアントの識別、ボット群の検出・遮断、DDoSの影響軽減に関する資料です。

- [`hosts`](https://github.com/StevenBlack/hosts) - オープンソース。評価されているhostsファイルを集め、重複を除いた1つのhostsファイルに統合

- [`nextdns/metadata`](https://github.com/nextdns/metadata) - 商用ベンダー。セキュリティ、プライバシー、ペアレンタルコントロール向けの幅広いリスト集

- [The Public Suffix List](https://github.com/publicsuffix/list) - オープンソース。インターネット利用者が直接名前を登録できる、または以前は登録できた公開サフィックスを収録するMozillaの登録簿

- [Country IP Blocks](https://github.com/herrbischoff/country-ip-blocks) - オープンソース。地域インターネットレジストリから直接取得する、CIDR形式の国別IPデータ。毎時更新

- サブドメインの拒否リスト：[資料1](https://gist.github.com/artgon/5366868)、[資料2](https://github.com/sandeepshetty/subdomain-blacklist/blob/master/subdomain-blacklist.txt)、[資料3](https://github.com/nccgroup/typofinder/blob/master/TypoMagic/datasources/subdomains.txt)

- [`common-domain-prefix-suffix-list.tsv`](https://gist.github.com/erikig/826f49442929e9ecfab6d7c481870700) - よく使われるドメインの接頭辞・接尾辞、上位5000件のリスト

- [`xkeyscorerules100.txt`](https://gist.github.com/sehrgut/324626fa370f044dbca7) - TORなどの匿名性を保護するツールに対する、NSAの[XKeyscore](https://en.wikipedia.org/wiki/XKeyscore)の照合ルール

- [AMF site blocklist](https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde) - 金融関連の詐欺サイトを対象とする、フランスの公式拒否リスト

### メール <a id="emails"></a>

- [Burner email providers](https://github.com/wesbos/burner-email-providers) - オープンソース。一時的なメールサービスの一覧。[派生Pythonモジュール](https://github.com/martenson/disposable-email-domains)もある

- [MailChecker](https://github.com/FGRibreau/mailchecker) - 商用ベンダー。複数言語に対応する、一時的・使い捨てメールアドレスの検出ライブラリ

- [`check-if-email-exists`](https://github.com/reacherhq/check-if-email-exists) - 商用ベンダー。メールを送信せずSMTPでメールアドレスの到達可能性を確認し、登録時の入力ミス、使い捨てドメイン、役割別アカウントを検出するツール

- [Temporary Email Address Domains](https://gist.github.com/adamloving/4401361) - 使い捨て・一時的メールアドレスのドメイン一覧。これらのドメインへのメールは開封されにくいため、配信先リストを絞って開封率を改善する参考になる

- [`gman`](https://github.com/benbalter/gman) - オープンソース。メールアドレスやウェブサイトの所有者が政府機関で働いているかを、政府系ドメインによって確認するRuby gem。利用者の中から政府機関の見込み顧客を探す参考になる

### 予約済みID <a id="reserved-ids"></a>

- [General List of Reserved Words](https://gist.github.com/stuartpb/5710271) - ユーザーが任意の名前を選べるシステムで、予約語にすることを検討できる一般的な語のリスト

- [Hostnames and usernames to reserve](https://ldpreload.com/blog/names-to-reserve) - 自動登録システムで登録を制限すべき名前の一覧

### 不適切表現 <a id="profanity"></a>

- [List of Dirty, Naughty, Obscene, and Otherwise Bad Words](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words) - オープンソース。Shutterstockによる不適切表現のブロックリスト

- [`profanity-check`](https://github.com/vzhou842/profanity-check) - オープンソース。不適切表現を含む・含まない文字列について、人手でラベルを付けた20万件の標本で学習した線形SVMモデルを使用

## プライバシー <a id="privacy"></a>

IAMシステムはユーザーデータを保持するため、プライバシーは設計に欠かせない要素です。

- [Paper we love: Privacy](https://github.com/papers-we-love/papers-we-love/tree/master/privacy) - プライバシーを設計に組み込む方式に関する科学的研究を集めた資料

- [Have I been Pwned?](https://haveibeenpwned.com) - データ侵害の索引

- [Automated security testing for Software Developers](https://fahrplan.events.ccc.de/camp/2019/Fahrplan/system/event_attachments/attachments/000/003/798/original/security_cccamp.pdf) - プライバシー侵害の大半を第三者依存パッケージの既知の脆弱性によるものとし、CI/CDで検出する方法を説明する講演

- [Email marketing regulations around the world](https://github.com/threeheartsdigital/email-marketing-regulations) - オープンソース。世界のつながりが深まる中で複雑化する、メールマーケティング規制に関する資料

### 匿名化 <a id="anonymization"></a>

IAMシステムはユーザーデータを集約するため、維持者は事業や顧客のデータ漏洩を防ぐ必要があります。ここでは、内部分析のための匿名化を扱います。

- [The False Allure of Hashing for Anonymization](https://web.archive.org/web/20220927004103/https://goteleport.com/blog/hashing-for-anonymization/) - 元のリストは、GDPRで認められているとする仮名化にはハッシュ化で十分だと説明する一方、匿名化にはハッシュ化だけでは不十分だと警告

- [Four cents to deanonymize: Companies reverse hashed email addresses](https://freedom-to-tinker.com/2018/04/09/four-cents-to-deanonymize-companies-reverse-hashed-email-addresses/) - ハッシュ化したメールアドレスは容易に逆引きされ、個人と結びつけられるとする説明

- [Why differential privacy is awesome](https://desfontain.es/privacy/differential-privacy-awesomeness.html) - 機密性を損なわずに集約データを共有する理論的枠組みである[差分プライバシー](https://en.wikipedia.org/wiki/Differential_privacy)の考え方を説明。[詳しい説明](https://desfontain.es/privacy/differential-privacy-in-more-detail.html)と[実践面](https://desfontain.es/privacy/differential-privacy-in-practice.html)を扱う続編もある

- [Presidio](https://github.com/microsoft/presidio) - オープンソース。テキストと画像のデータ保護・個人を特定できる情報（PII）の匿名化サービス。コンテキストを考慮し、プラグインで拡張・カスタマイズできる

### GDPR

欧州の一般データ保護規則（GDPR）に関する資料です。

- [GDPR Tracker](https://gdpr.eu) - 欧州のGDPRに関する参考サイト

- [GDPR Developer Guide](https://github.com/LINCnil/GDPR-Developer-Guide) - 開発者向けのベストプラクティス

- [GDPR – A Practical guide for Developers](https://techblog.bozho.net/gdpr-practical-guide-developers/) - 上記ガイドを1ページにまとめた資料

- [Dark Patterns after the GDPR](https://arxiv.org/pdf/2001.02479.pdf) - GDPRの執行が限定的であるため、ダークパターンや暗黙の同意が広く残ると論じる論文

- [GDPR Enforcement Tracker](http://enforcementtracker.com) - GDPRの制裁金と罰則の一覧

## UX/UI

元のリストは、登録とオンボーディングに必要な基盤機能の大半をIAMのバックエンドに位置づけています。これらの導線は製品の第一印象を決めるため、フロントエンドの専門家と慎重に設計する必要があります。以下はその体験を扱うガイドです。

- [The 2020 State of SaaS Product Onboarding](https://userpilot.com/saas-product-onboarding/) - ユーザーオンボーディングの主要な側面を網羅する資料

- [User Onboarding Teardowns](https://www.useronboard.com/user-onboarding-teardowns/) - 初回登録の体験を分析した資料集

- [Discover UI Design Decisions Of Leading Companies](https://goodui.org/leaks/) - 流出したスクリーンショットとA/BテストからUI設計を読み解く資料

- [Conversion Optimization](https://web.archive.org/web/2020/https://www.nickkolenda.com/conversion-optimization-psychology/#cro-tactic11) - ユーザーがアカウント作成の導線を最後まで進む確率を高める施策集

- [11 Tips for Better Signup / Login UX](https://learnui.design/blog/tips-signup-login-ux.html) - ログインフォームに関する基本的な助言

- [Don't get clever with login forms](http://bradfrost.com/blog/post/dont-get-clever-with-login-forms/) - シンプルで、直接リンクでき、挙動を予測でき、パスワードマネージャーと連携しやすいログインフォームの設計を勧める記事

- [Why are the username and password on two different pages?](https://www.twilio.com/blog/why-username-and-password-on-two-different-pages) - SSOとパスワードログインの両方に対応する方法を論じる。2段階のログインに不満を感じる利用者への対応として、Dropboxの[ユーザー名入力時にAJAXリクエストを送る方式](https://news.ycombinator.com/item?id=19174355)を紹介

- [HTML attributes to improve your users' two factor authentication experience](https://www.twilio.com/blog/html-attributes-two-factor-authentication-autocomplete) - `<input>`要素とHTML属性を使い、利用者の二要素認証を手早く行えるようにする方法を説明

- [Remove password masking](http://passwordmasking.com) - パスワードの伏字表示をやめることが消費者の信頼に与える影響を調べた学術研究の結果を要約

- [For anybody who thinks "I could build that in a weekend," this is how Slack decides to send a notification](https://twitter.com/ProductHunt/status/979912670970249221) - 通知を送るタイミングの判断が複雑であることを示す例

## 競合分析 <a id="competitive-analysis"></a>

この分野のオープンソースプロジェクトと企業の動向を追うための資料です。

- [Best-of Digital Identity](https://github.com/jruizaranguren/best-of-digital-identity) - オープンソースのデジタルアイデンティティプロジェクトの順位、人気、活動状況

- [AWS Security, Identity & Compliance announcements](https://aws.amazon.com/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-categories=marketing-marchitecture%23security-identity-and-compliance) - セキュリティ、アイデンティティ、コンプライアンス分野のAWS機能発表

- [GCP IAM release notes](https://cloud.google.com/iam/docs/release-notes) - GCP IAMの変更履歴。関連する変更履歴として、[Identity Platform](https://cloud.google.com/identity-platform/docs/release-notes)、[Resource Manager](https://cloud.google.com/resource-manager/docs/release-notes)、[Key Management Service/HSM](https://cloud.google.com/kms/docs/release-notes)、[Access Context Manager](https://cloud.google.com/access-context-manager/docs/release-notes)、[Identity-Aware Proxy](https://cloud.google.com/iap/docs/release-notes)、[Data Loss Prevention](https://cloud.google.com/dlp/docs/release-notes)、[Security Scanner](https://cloud.google.com/security-scanner/docs/release-notes)も参照

- [Unofficial Weekly Google Cloud Platform newsletter](https://www.gcpweekly.com) - Google Cloud Platformの非公式週刊ニュースレター。関連キーワードは[`IAM`](https://www.gcpweekly.com/gcp-resources/tag/iam/)と[`Security`](https://www.gcpweekly.com/gcp-resources/tag/security/)

- [DigitalOcean Accounts changelog](http://docs.digitalocean.com/release-notes/accounts/) - DigitalOceanアカウントの更新に関するリリースノート

- [163 AWS services explained in one line each](https://web.archive.org/web/20260301070017/https://adayinthelifeof.nl/2020/05/20/aws.html#discovering-aws) - 膨大なAWSサービス一覧を理解するための資料。同種の資料として[AWS In Plain English](https://expeditedsecurity.com/aws-in-plain-english/)もある

- [Google Cloud Developer's Cheat Sheet](https://github.com/gregsramblings/google-cloud-4-words#the-google-cloud-developers-cheat-sheet) - GCPの各製品を4語以内で説明する資料

## 歴史 <a id="history"></a>

- [cryptoanarchy.wiki](https://cryptoanarchy.wiki) - セキュリティとも関わるサイファーパンク運動の情報を集めたWiki。歴史や主要な人物・出来事を扱う
