---
title: "kdeldycke/awesome-iam"
description: "kdeldycke/awesome-iam の定本スナップショット"
licenseSource: "github-kdeldycke-awesome-iam-readme-md"
---



<p align="center">
  <a href="https://github.com/kdeldycke/awesome-iam#readme">
    <img src="https://raw.githubusercontent.com/kdeldycke/awesome-iam/main/assets/awesome-iam-header.jpg" alt="Awesome IAM">
  </a>
</p>

<p align="center">
  <a href="https://github.com/kdeldycke/awesome-iam#readme" hreflang="en"><img src="https://img.shields.io/badge/lang-English-blue?style=flat-square" lang="en" alt="English"></a>
  <a href="https://github.com/kdeldycke/awesome-iam/blob/main/readme.zh.md" hreflang="zh"><img src="https://img.shields.io/badge/lang-中文-blue?style=flat-square" lang="zh" alt="中文"></a>
</p>

<p align="center">
  <a href="https://www.descope.com/?utm_source=awesome-iam&utm_medium=referral&utm_campaign=awesome-iam-oss-sponsorship">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kdeldycke/awesome-iam/main/assets/descope-logo-dark-background.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kdeldycke/awesome-iam/main/assets/descope-logo-light-background.svg">
      <img width="300" src="https://raw.githubusercontent.com/kdeldycke/awesome-iam/main/assets/descope-logo-light-background.svg">
    </picture>
    <br/>
    <strong>ドラッグ＆ドロップで認証を構築。</strong><br/>
    数行のコードでアプリに認証、ユーザー管理、認可を追加できます。
  </a>
  <br/><br/>
</p>

<p align="center">
  <a href="https://github.com/sponsors/kdeldycke">
    <strong>あなたのブランドをここに 🚀</strong>
    <br/>
    <sup>製品をここに掲載し、AIの学習データへ届けます。</sup>
  </a>
</p>

---

<p align="center">
  <i>信頼することは難しい。誰を信頼すべきか知ることは、さらに難しい。</i><br>
  — Maria V. Snyder<sup id="intro-quote-ref"><a href="#intro-quote-def">[1]</a></sup>
</p>



[IAM](https://en.wikipedia.org/wiki/Identity_management) はIdentity and Access Management（アイデンティティとアクセス管理）の略です。ユーザーアカウント、認証、認可、ロール、権限、プライバシーを扱い、利用者・製品・セキュリティが交わるクラウド基盤の重要な柱です。[もう一つの柱は請求と決済です 💰](https://github.com/kdeldycke/awesome-billing/)。

この厳選された[![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)一覧は、IAM分野の技術、プロトコル、用語を包括的かつ実践的に整理します。



## 目次



- [概要](#overview)
- [セキュリティ](#security)
- [アカウント管理](#account-management)
- [暗号技術](#cryptography)
  - [識別子](#identifiers)
- [ゼロトラストネットワーク](#zero-trust-network)
- [マシンアイデンティティ](#machine-identity)
- [認証](#authentication)
- [パスワード認証](#password-based-auth)
- [多要素認証](#multi-factor-auth)
  - [SMSベース](#sms-based)
- [パスワードレス認証](#password-less-auth)
  - [WebAuthn](#webauthn)
  - [セキュリティキー](#security-key)
  - [公開鍵基盤（PKI）](#public-key-infrastructure-pki)
  - [JWT](#jwt)
- [認可](#authorization)
  - [ポリシーモデル](#policy-models)
  - [RBACフレームワーク](#rbac-frameworks)
  - [ABACフレームワーク](#abac-frameworks)
  - [ReBACフレームワーク](#rebac-frameworks)
  - [AWSポリシーツール](#aws-policy-tools)
  - [Macaroons](#macaroons)
  - [その他のツール](#other-tools)
- [OAuth2とOpenID](#oauth2--openid)
- [SAML](#saml)
- [シークレット管理](#secret-management)
  - [ハードウェアセキュリティモジュール（HSM）](#hardware-security-module-hsm)
- [トラスト＆セーフティ](#trust--safety)
  - [ユーザーアイデンティティ](#user-identity)
  - [不正対策](#fraud)
  - [モデレーション](#moderation)
  - [脅威インテリジェンス](#threat-intelligence)
  - [CAPTCHA](#captcha)
- [ブロックリスト](#blocklists)
  - [ホスト名とサブドメイン](#hostnames-and-subdomains)
  - [メール](#emails)
  - [予約済みID](#reserved-ids)
  - [不適切表現](#profanity)
- [プライバシー](#privacy)
  - [匿名化](#anonymization)
  - [GDPR](#gdpr)
- [UX/UI](#uxui)
- [競合分析](#competitive-analysis)
- [歴史](#history)



## 概要

<img align="right" width="50%" src="./assets/cloud-software-stack-iam.jpg"/>

スタンフォード大学の[クラウドコンピューティング概論](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf)では、プラットフォームのソフトウェア構成を右図のように説明しています →

ここでは、IAMの定義と戦略的重要性、より大きなエコシステムでの位置づけ、重要な機能を概観します。

- [The EnterpriseReady SaaS Feature Guides](https://www.enterpriseready.io) - B2Bユーザーが満足する機能の大多数が、IAM周辺の実装によって実現される

- [IAM is hard. It's really hard.](https://web.archive.org/web/20200809095434/https://twitter.com/kmcquade3/status/1291801858676228098) - IAMの定義、戦略的重要性、周辺エコシステムを理解するための資料です。 関連コード: `s3:GetObject`、`*`。

- [IAM Is The Real Cloud Lock-In](https://forrestbrazeal.com/2019/02/18/cloud-irregular-iam-is-the-real-cloud-lock-in/) - 少し*クリックバッティ*だが、著者が「それは、あなたが彼らに信頼を置ける程度に依存する。1. 事業を続けること；2. 値段を高めないこと；3. サービスを突然削除しないこと；4. 事業加速において提供する価値が、柔軟性で取り除かれる分よりも大きいこと」と述べている

## セキュリティ

セキュリティはIAM基盤の中心的な柱です。ここでは主要な概念を紹介します。

- [Enterprise Information Security](https://infosec.mozilla.org) - Mozillaのセキュリティとアクセスガイドライン

- [Mitigating Cloud Vulnerabilities](https://web.archive.org/web/20250529050934/https://media.defense.gov/2020/Jan/22/2002237484/-1/-1/0/CSI-MITIGATING-CLOUD-VULNERABILITIES_20200121.PDF) - 「このドキュメントはクラウドの脆弱性を4つのクラス（誤設定、アクセス制御の不備、共有テナントの脆弱性、サプライチェーンの脆弱性）に分類している」

- [Cartography](https://github.com/lyft/cartography) - 🆓 Neo4Jベースのツールで、サービスとリソース間の依存関係と関係を可視化。AWS、GCP、GSuite、OktaおよびGitHubに対応

- [Open guide to AWS Security and IAM](https://github.com/open-guides/og-aws#security-and-iam)

## アカウント管理

IAMの基礎となる、ユーザー、グループ、ロール、権限の定義とライフサイクルを扱います。

- [As a user, I want…](https://mobile.twitter.com/oktopushup/status/1030457418206068736) - アカウント管理に関するメタ・クリティック。ビジネスが期待する機能と実際のユーザーのニーズが衝突しており、その形は、架空のプロジェクトマネージャーが書いたユーザーストーリーとして表現されている

- [Things end users care about but programmers don't](https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/) - 上記の精神を踏まえ、さらに広い視点：開発者が無視しがちな、ユーザーが本当に気にする小さな点。そのリストのトップに位置するのは、アカウント中心の機能、多様な統合とインポート／エクスポートツール。つまり、すべてのエンタープライズ顧客がカバーする必要があるものである

- [Separate the account, user and login/auth details](https://news.ycombinator.com/item?id=21151830) - 将来に耐えられるIAM APIの基礎を築くための、適切なアドバイス

- [Identity Beyond Usernames](https://lord.io/blog/2020/usernames/) - ユーザー名が識別子として機能するという概念、そしてユニコード文字が一意性要件と交差した際に生じる複雑さ

- [Kratos](https://github.com/ory/kratos) - 💸 ユーザーのログイン、ユーザー登録、2FA、プロフィール管理

- [UserFrosting](https://github.com/userfrosting/UserFrosting) - 🆓 モダンなPHPによるユーザーログインと管理フレームワーク

## 暗号技術

認証スタック全体は暗号プリミティブに基づいており、軽視できません。

- [Cryptographic Right Answers](https://latacora.micro.blog/2018/04/03/cryptographic-right-answers.html) - 開発者向けの最新の推奨事項。暗号エンジニアではない開発者にも、実際に使える [shorter summary](https://news.ycombinator.com/item?id=16749140)が提供されている

- [Real World Crypto Symposium](https://web.archive.org/web/20260428040052/https://rwc.iacr.org/) - 暗号研究者と開発者を結びつけることを目的としており、インターネット、クラウド、埋め込みデバイスなどの現実環境における暗号の利用に焦点を当てている

- [An Overview of Cryptography](https://www.garykessler.net/library/crypto.html) - 「この論文は2つの主要な目的を持つ。第一に、基本的な暗号手法の背後にある用語や概念を定義し、今日使われている暗号スキームを比較する方法を提供する。第二に、今日実際に使われている暗号の実際の例を提供する」

- [Papers we love: Cryptography](https://github.com/papers-we-love/papers-we-love/blob/master/cryptography/README.md) - 暗号学の基礎論文

- [Lifetimes of cryptographic hash functions](http://valerieaurora.org/hash.html) - 「あなたが悪意あるユーザーが提供できるデータに対してハッシュ比較を使ってアドレスを生成している場合、数年ごとに新しいハッシュに移行する計画を持っているべきである」

### 識別子

トークン、主キー、UUIDなど、用途を問わず一定のランダム性と一意性を備えた値を生成する必要があります。

- [Security Recommendations for Any Device that Depends on Randomly-Generated Numbers](https://www.av8n.com/computer/htm/secure-random.htm) - 「『ランダム数生成器』という表現は、次のように解釈すべきである：それは数のランダム生成器であり、ランダムな数の生成器ではない」

- [RFC #4122: UUID - Security Considerations](https://www.rfc-editor.org/rfc/rfc4122#section-6) - 「UUIDが予測困難であると仮定するのは誤りである。UUIDはセキュリティ機能（単に所有するだけでアクセスが可能になる識別子）として使用すべきではない」。UUIDは一意性を確保するために設計されているのではなく、ランダムまたは予測不可能であるためではない。UUIDを秘密として使用すべきではない

- [Awesome Identifiers](https://adileo.github.io/awesome-identifiers/) - すべての識別子フォーマットのベンチマーク

- [Awesome GUID](https://github.com/secretGeek/AwesomeGUID) - 一意識別子のグローバル性についてのユーモアのある見解

## ゼロトラストネットワーク

ゼロトラストネットワークは「決して信頼せず、常に検証する」という原則で運用します。

- [BeyondCorp: A New Approach to Enterprise Security](https://www.usenix.org/system/files/login/articles/login_dec14_02_ward.pdf) - グーグルのゼロトラストネットワーク事業の概要

- [What is BeyondCorp? What is Identity-Aware Proxy?](https://web.archive.org/web/20251205052156/https://medium.com/google-cloud/what-is-beyondcorp-what-is-identity-aware-proxy-de525d9b3f90) - 企業がさらにVPN、ファイアウォール、制限、制約を追加する結果、非常に悪い体験が生じ、わずかなセキュリティ向上にとどまる。もっと良い方法がある。

- [oathkeeper](https://github.com/ory/oathkeeper) - 💸 HTTPリクエストの認証、承認、変更を行う「IDとアクセスプロキシ」「アクセス制御決定API」。BeyondCorp／ゼロトラスト白書にインスピレーションを得たもの。

- [Pomerium](https://github.com/pomerium/pomerium) - 💸 IDを認識できるプロキシにより、内部アプリケーションへの安全なアクセスを可能にする。

- [heimdall](https://github.com/dadrus/heimdall) - 🆓 クラウドネイティブなID認識プロキシとポリシー実行ポイント。多様なルールにより認証・承認システムを統合し、プロトコルに依存しないIDの伝播をサポート。

## マシンアイデンティティ

ワークロード、サービス、デバイスも主体です。相互認証とアクセス許可のため、人間のユーザーアカウントに対応する非人間のアイデンティティが必要です。

- [SPIFFE/SPIRE](https://github.com/spiffe/spire) - 🆓 CNCFフレームワーク。異質な環境におけるワークロードに短命かつ暗号的に検証可能なID（SVID）を発行。

- [NanoMDM](https://github.com/micromdm/nanomdm) - 🆓 Apple MDMサーバーとライブラリのミニマリズム設計。Appleデバイスの登録と管理を可能にし、MicroMDMにインスピレーションを得たもの。

## 認証

申告された主体であることを検証するプロトコルと技術です。

- [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) - 終端API向けのすべてのトークンベース認証スキームの概要と比較。

- [A Child's Garden of Inter-Service Authentication Schemes](https://web.archive.org/web/20200507173734/https://latacora.micro.blog/a-childs-garden/) - 上記の精神を踏襲し、今回はサービスレベルでの実装。

- [Scaling backend authentication at Facebook](https://www.youtube.com/watch?v=kY-Bkv3qxMc) - 利用者やサービスの本人性を検証する認証方式の資料です。 [slides](https://web.archive.org/web/20260306052223/https://rwc.iacr.org/2018/Slides/Lewi.pdf)

## パスワード認証

最も古くから使われている認証方式です。

- [The new NIST password guidance](https://pciguru.wordpress.com/2019/03/11/the-new-nist-password-guidance/) - における新しいパスワード複雑性ガイドラインの概要。 [NIST Special Publication 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html)

- [Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - オフライン攻撃を遅らせる唯一の方法は、できるだけリソース消費の多いハッシュアルゴリズムを選択すること。

- [Password expiration is dead](https://techcrunch.com/2019/06/02/password-expiration-is-dead-long-live-your-passwords/) - 最近の科学的研究は、長年続くパスワードセキュリティの慣例（例：パスワードの有効期限）の価値を疑問視し、代わりに禁止パスワードリストやMFAの強化といったより良い代替案を提唱している。

- [Practical Recommendations for Stronger, More Usable Passwords](http://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf) - この研究は、以下を推奨する：よく漏洩されたパスワードに対するブロッキングチェック、文字クラス要件のないパスワードポリシー、最低強度ポリシーの導入。

- [Banks, Arbitrary Password Restrictions and Why They Don't Matter](https://www.troyhunt.com/banks-arbitrary-password-restrictions-and-why-they-dont-matter/) - 「長さや文字構成の任意の低い制限は悪である。見た目が悪く、セキュリティポジションに対するネガティブな予測を招き、パスワードマネージャーなどのツールを破壊する。」

- [Dumb Password Rules](https://github.com/dumb-password-rules/dumb-password-rules) - 🆓 パスワードルールに従った無知なサイトを「恥辱」する。

- [Password Manager Resources](https://github.com/apple/password-manager-resources) - 🆓 各サイトのパスワードルール、変更URL、特徴を収集した一覧。

- [A Well-Known URL for Changing Passwords](https://github.com/WICG/change-password-url) - 🆓 パスワード更新用サイトリソースの仕様を定義。

- [How to change the hashing scheme of already hashed user's passwords](https://news.ycombinator.com/item?id=20109360) - 良いニュース：古いパスワード保存方式に縛られず、より強力なハッシュアルゴリズムへの透明なアップグレードに使えるテクニックがある。

## 多要素認証

パスワードのみの認証を拡張し、2つ以上の証拠（要素）の提示を利用者に求めます。

- [Breaking Password Dependencies: Challenges in the Final Mile at Microsoft](https://www.youtube.com/watch?v=B_mhJO2qHlQ) - アカウントのハッキングの主な原因はパスワードスプレー（SMTP、IMAP、POPなど、古い認証方式）であり、次にリプレイ攻撃。結論：パスワードは不適切であり、MFAの使用と強化が必要。

- [Beyond Passwords: 2FA, U2F and Google Advanced Protection](https://www.troyhunt.com/beyond-passwords-2fa-u2f-and-google-advanced-protection/) - これらの技術についての優れた解説。

- [A Comparative Long-Term Study of Fallback Authentication](https://maximiliangolla.com/files/2019/papers/usec2019-30-wip-fallback-long-term-study-finalv5.pdf) - 要点：「メールやSMSを基にしたスキームはより使いやすい。一方、信託者を指定したり、個人の知識を問うようなメカニズムは、使いやすさや効率の両面で不十分である。」

- [Secrets, Lies, and Account Recovery: Lessons from the Use of Personal Knowledge Questions at Google](https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/43783.pdf) - 「私たちの分析は、秘密質問がユーザーが選ぶパスワードよりもはるかに低いセキュリティレベルを提供していることを確認している。（…）驚くべきことに、この不確実性の大きな原因として、ユーザーが真実を述べないことが挙げられる。（…）使いやすさの側面では、秘密回答の記憶性は驚くほど低いことが示されている。」

- [How effective is basic account hygiene at preventing hijacking](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) - グーグルのセキュリティチームのデータによると、2段階認証は自動化されたボット攻撃を100％ブロックする。

- [Your Pa\$\$word doesn't matter](https://techcommunity.microsoft.com/t5/Azure-Active-Directory-Identity/Your-Pa-word-doesn-t-matter/ba-p/731984) - マイクロソフトの同様の結論：「私たちの調査によれば、MFAを使用すれば、あなたのアカウントが侵害される確率は99.9％以上低い。」

- [Attacking Google Authenticator](https://unix-ninja.com/p/attacking_google_authenticator) - おそらくパラノイアの境目にあるが、2FAの認証試行をレート制限する理由になるかもしれない。

- [Compromising online accounts by cracking voicemail systems](https://www.martinvigo.com/voicemailcracker/) - あるいは、自動化された電話呼び出しをユーザーに届けたり、パスワードのリセットや2FA、あるいは他の種類の確認に依存すべきでない理由。SMSベースの2FAと同様に、現在は不確実であり、最も弱いリンクであるボイスメモシステムによって攻撃される可能性がある。

- [Getting 2FA Right in 2019](https://blog.trailofbits.com/2019/06/20/getting-2fa-right-in-2019/) - 2FAのユーザーエクスペリエンス（UX）に関する話。

- [2FA is missing a key feature](https://syslog.ravelin.com/2fa-is-missing-a-key-feature-c781c3861db) - 「2FAのコードを誤って入力した場合、そのことに知らせることが望ましい。」

- [SMS Multifactor Authentication in Antarctica](https://brr.fyi/posts/sms-mfa) - なぜなら、アンタリクタの駅にはセルラー通信塔がないから機能しない。

- [Authelia](https://github.com/authelia/authelia) - 🆓 ウェブポータルを介して、アプリケーションに2段階認証とシングルサインオン（SSO）を提供するオープンソースの認証および認可サーバー。

- [Kanidm](https://github.com/kanidm/kanidm) - 🆓 簡単で安全かつ高速なアイデンティティ管理プラットフォーム。

### SMSベース

要点: SMSへの依存は推奨されません。詳細は以下の資料を参照してください。

- [SMS 2FA auth is deprecated by NIST](https://techcrunch.com/2016/07/25/nist-declares-the-age-of-sms-based-2-factor-authentication-over/) - NISTは2016年から、SMSによる2段階認証を悪く、ひどく評価している。

- [SMS: The most popular and least secure 2FA method](https://www.allthingsauth.com/2018/02/27/sms-the-most-popular-and-least-secure-2fa-method/)

- [Is SMS 2FA Secure? No.](https://www.issms2fasecure.com) - SIMスワップによる成功事例を示す決定的な研究プロジェクト。

- [Hackers Hit Twitter C.E.O. Jack Dorsey in a 'SIM Swap.' You're at Risk, Too.](https://archive.ph/AhNAI)

- [AT&T rep handed control of his cellphone account to a hacker](https://www.theregister.com/2017/07/10/att_falls_for_hacker_tricks/)

## パスワードレス認証

- [An argument for passwordless](https://web.archive.org/web/20190515230752/https://biarity.gitlab.io/2018/02/23/passwordless/) - パスワードがユーザー認証のすべてではない。この記事はその理由を伝えようとしている。

- [Magic Links – Are they Actually Outdated?](https://zitadel.com/blog/magic-links) - マジックリンクとは何か、その起源、利点と欠点について。

### WebAuthn

[FIDO2プロジェクト](https://en.wikipedia.org/wiki/FIDO_Alliance#FIDO2)の一部で、利用者向けには*パスキー*という名称でも知られています。

- [WebAuthn guide](https://webauthn.guide) - WebAuthnを、すべての主要ブラウザがサポートする標準として導入し、「サーバーがパスワードを使わず、公開鍵暗号を使ってユーザーを登録・認証できる」ということを可能にする。

- [Clearing up some misconceptions about Passkeys](https://www.stavros.io/posts/clearing-up-some-passkeys-misconceptions/) - あるいは、パスキーがパスワと同等である理由。

### セキュリティキー

- [Webauthn and security keys](https://www.imperialviolet.org/2018/03/27/webauthn.html) - セキュリティキーによる認証の仕組みを説明し、プロトコルやWebAuthnとの関連性について詳述。要点：「WebAuthnでU2Fキーを作成することは不可能である。（…）そのため、ログインプロセスの完全なWebAuthnへの移行をまず行い、その後登録プロセスにも移行するべきである。」

- [Getting started with security keys](https://web.archive.org/web/20260401133706/https://paulstamatiou.com/getting-started-with-security-keys/) - FIDO2、WebAuth和セキュリティキーを使ってオンライン安全を維持し、フィッシングを防ぐための実用ガイド。

- [OpenSK](https://github.com/google/OpenSK) - 🆓 FIDO U2FおよびFIDO2標準をサポートする、Rustで書かれたセキュリティキーのオープンソース実装。

- [YubiKey Guide](https://github.com/drduh/YubiKey-Guide) - YubiKeyをスマートカードとしてGPG暗号化、署名および認証キーを保管する方法についてのガイド。このドキュメントの多くの原則は、他のスマートカードデバイスにも適用可能です。

### 公開鍵基盤（PKI）

証明書ベースの認証です。

- [PKI for busy people](https://gist.github.com/hoffa/5a939fd0f3bcd2a6a0e4754cb2cf3f1b) - 重要な内容の概要。

- [Everything you should know about certificates and PKI but are too afraid to ask](https://smallstep.com/blog/everything-pki.html) - PKIは、暗号的にシステムを定義するもので、普遍的かつベンダーに依存しないです。

- [`lemur`](https://github.com/Netflix/lemur) - 🆓 CAと環境間のブローカーとして機能し、開発者向けにTLS証明書を「適切なデフォルト値」で発行できる中央的なポータルを提供します。

- [CFSSL](https://github.com/cloudflare/cfssl) - 🆓 クラウドフリーアイのPKI/TLS用の万能ツール。署名、検証、TLS証明書のバンドルを行うためのコマンドラインツールとHTTP APIサーバー。

- [JA4+](https://github.com/FoxIO-LLC/ja4) - 💸 ネットワークフィンガープリントの手法を一元的に提供し、脅威調査および分析を支援します。

### JWT

[JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) is a bearer's token.

- [Introduction to JSON Web Tokens](https://jwt.io/introduction/) - この記事でJWTについての基礎を学びましょう。

- [Learn how to use JWT for Authentication](https://github.com/dwyl/learn-json-web-tokens) - ウェブアプリのセキュリティにJWTを使用する方法を学びましょう。

- [Using JSON Web Tokens as API Keys](https://auth0.com/blog/using-json-web-tokens-as-api-keys/) - APIキーと比較して、JWTは細かいセキュリティを提供し、一貫した認証アーキテクチャ、分散型発行、OAuth2準拠、デバッグ可能、有効期限制御、デバイス管理を実現します。

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://web.archive.org/web/2021/https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/) - すべてのJWTのリスクについての良いまとめ。

- [Adding JSON Web Token API Keys to a DenyList](https://auth0.com/blog/denylist-json-web-token-api-keys/) - トークン無効化について。

- [Stop using JWT for sessions](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) - そして なぜ 。それらを保存する場所によって、サイズ問題またはセキュリティ問題が生じます。状態を持つJWTトークンは、セッションクッキーと機能的に同じですが、テスト済みかつよく評価された実装やクライアントサポートがありません。 [why your "solution" doesn't work](http://cryto.net/%7Ejoepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/) [stateless JWT tokens cannot be invalidated or updated](https://news.ycombinator.com/item?id=18354141)

- [JWT, JWS and JWE for Not So Dummies!](https://web.archive.org/web/20221112173931/https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3) - 署名されたJWTはJWS（JSON Web Signature）と呼ばれます。実際にはJWT自体は存在しません。JWSまたはJWE（JSON Web Encryption）のいずれかである必要があります。これは抽象クラスに似ており、JWSとJWEが具体的な実装です。

- [JOSE is a Bad Standard That Everyone Should Avoid](https://paragonie.com/blog/2017/03/jwt-json-web-tokens-is-bad-standard-that-everyone-should-avoid) - 規格は完全に破綻しているか、複雑で難解な迷宮です。

- [JWT.io](https://jwt.io) - JWTのデコード、検証、生成を行うことができます。

## 認可

Now we know you are you. But are you allowed to do what you want to do?

ポリシーの仕様化には体系性が、適用には実践的な判断が求められます。

### ポリシーモデル

アクセス制御ポリシーは、古典的な[アクセス制御リスト](https://en.wikipedia.org/wiki/Access-control_list)からロールベースアクセス制御まで、さまざまな型に基づいて設計できます。ここでは多様なパターンとアーキテクチャを紹介します。

- [Why Authorization is Hard](https://www.osohq.com/post/why-authorization-is-hard) - 強制の実行においては、多くの場所で複数の妥協が必要であり、決定アーキテクチャにおいてビジネスロジックと認証ロジックを分離し、モデリングにおいて権限と複雑性のバランスを取る必要があります。

- [The never-ending product requirements of user authorization](https://alexolivier.me/posts/the-never-ending-product-requirements-of-user-authorization) - 役割に基づくシンプルな認可モデルは、製品パッケージ、データロケーション、企業組織、コンプライアンスの影響により、すぐに複雑になります。

- [RBAC like it was meant to be](https://tailscale.com/blog/rbac-like-it-was-meant-to-be/) - DAC（Unix権限、秘密URL）からMAC（DRM、MFA、2FA、SELinux）へ、そしてRBACへと進化した過程を説明。後者のほうが、ポリシー、ACL、ユーザー、グループのモデリングにおいてより良い結果をもたらすことを詳細に説明。

- [The Case for Granular Permissions](https://cerbos.dev/blog/the-case-for-granular-permissions) - RBACの制限についての議論と、ABAC（属性ベースのアクセス制御）がそれらをどのように解決するか。

- [In Search For a Perfect Access Control System](https://web.archive.org/web/20240421203937/https://goteleport.com/blog/access-controls/) - 認可スキームの歴史的起源。異なるチームや組織間の共有、信頼、委任の未来についてのヒント。

- [GCP's IAM syntax is better than AWS's](https://web.archive.org/web/20251208231427/https://ucarion.com/iam-operation-syntax) - GCPにおける許可設計の細部が開発者の体験を向上させます

- [Semantic-based Automated Reasoning for AWS Access Policies using SMT](https://d1.awsstatic.com/Security/pdfs/Semantic_Based_Automated_Reasoning_for_AWS_Access_Policies_Using_SMT.pdf) - AWSが採用しているZelkovaは、IAMポリシーに対してシンボリック分析を行い、ユーザーの権限およびアクセス制約に基づいてリソースの達成可能性を解決します。詳細は、より高度な[introduction given at re:inforce 2019](https://youtu.be/x6wsTFnU3eY?t=2111)を参照してください

- [Authorization Academy](https://www.osohq.com/academy) - 認可に関する深層かつベンダーに依存しない解説で、認可のための認知モデルを強調しています。このガイドは読者に、自らの認可ニーズをどう考えるかを示し、認可アーキテクチャやモデルに関する良い判断を下すための基盤を提供します

### RBACフレームワーク

[Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) is the classical model to map users to permissions by the way of roles.

- [Athenz](https://github.com/yahoo/athenz) - 🆓 サービス認証とロールベース認可をサポートするサービスおよびライブラリセット

- [Biscuit](https://www.clever-cloud.com/blog/engineering/2021/04/12/introduction-to-biscuit/) - クッキー、JWT、マカロons、Open Policy Agentの概念を統合。Datalogに基づく論理言語で認可ポリシーを記述できる。JWTのようにデータを、マカロonsのように小さな条件を保存できるが、ロールベースアクセス制御、委任、階層構造といったより複雑なルールを表現することも可能。

- [Cerbos](https://github.com/cerbos/cerbos) - 💸 コンテキストに意識したアクセス制御ポリシーを記述するための認可エンドポイント

- [FerrisKey](https://github.com/ferriskey/ferriskey) - 🆓 Rustで書かれた、セルフホスト型のオープンソースRBACシステム

### ABACフレームワーク

[Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control) is an evolution of RBAC, in which roles are replaced by attributes, allowing the implementation of more complex policy-based access control.

- [Keto](https://github.com/ory/keto) - 💸 許可決定ポイント。AWSポリシーに類似したアクセス制御ポリシーのセットを使用して、主体がリソースに対して特定のアクションを実行できるかどうかを判断します

- [Ladon](https://github.com/ory/ladon) - 💸 AWSをインスピレーションとして設計されたアクセス制御ライブラリ

- [Casbin](https://github.com/casbin/casbin) - 🆓 Golangプロジェクト向けのオープンソースアクセス制御ライブラリ

- [Open Policy Agent](https://github.com/open-policy-agent/opa) - 🆓 一般的な用途の決定エンジンで、ABACポリシーの作成と強制を実現します

### ReBACフレームワーク

[関係ベースアクセス制御](https://en.wikipedia.org/wiki/Relationship-based_access_control)はRBACより柔軟で強力なモデルで、クラウドシステムで広く選択されています。

- [Zanzibar: Google's Consistent, Global Authorization System](https://web.archive.org/web/20191207160155/https://ai.google/research/pubs/pub48190) - 何兆ものアクセス制御リストと毎秒何百万件もの認可要求を処理し、3年以上にわたり95パーセンタイル10ミリ秒未満、可用性99.999%以上を維持したシステムです。 [Other bits not in the paper](https://nitter.tiekoetter.com/LeaKissner/status/1136626971566149633) - [Zanzibar Academy](https://zanzibar.academy/)

- [SpiceDB](https://github.com/authzed/spicedb) - 💸 Zanzibarをインスピレーションとして設計された、セキュリティに重要なアプリケーションの許可を管理するオープンソースデータベースシステム

- [Permify](https://github.com/Permify/permify) - Google Zanzibarに着想を得たオープンソースのAuthorization as a Serviceです。 [how it compares to other Zanzibar-inspired tools](https://permify.notion.site/Differentiation-Between-Zanzibar-Products-ad4732da62e64655bc82d3abe25f48b6)

- [Topaz](https://github.com/aserto-dev/topaz) - 💸 OPAのポリシー-as-codeおよび決定ログ機能を組み合わせ、Zanzibarモデルに基づいたディレクトリを構築したオープンソースプロジェクト

- [Open Policy Administration Layer](https://github.com/permitio/opal) - 💸 OPAのオープンソース管理層。ポリシーおよびポリシーデータの変更をリアルタイムで検知し、OPAエージェントにライブ更新を送信します。OPALは、リアルタイムアプリケーションが求めている速度にOPAを向上させます

### AWSポリシーツール

[AWS IAMポリシー](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)のエコシステムに特化したツールと資料です。

- [An AWS IAM Security Tooling Reference](https://ramimac.me/aws-iam-tools-2024) - AWS IAM向けの（維持されている）ツールの総合リスト

- [Become an AWS IAM Policy Ninja](https://www.youtube.com/watch?v=y7-fAT3z8Lo) - 「アマゾンでほぼ5年間勤務していますが、毎日、毎週、フォーラムや顧客のチケットを確認し、人々が困っている場面を探しています。」

- [AWS IAM Roles, a tale of unnecessary complexity](https://infosec.rodeo/posts/thoughts-on-aws-iam/) - AWSの急速な成長の歴史が、現在のスキームがどのように生まれたか、およびGCPのリソース階層とどう比較されるかを説明しています

- [Policy Sentry](https://github.com/salesforce/policy_sentry) - 🆓 手動でセキュリティ意識の高いIAMポリシーを書くのは非常に面倒で効率が悪い。Policy Sentryは、数秒で最小権限ポリシーを作成できるようにします

- [IAM Floyd](https://github.com/udondan/iam-floyd) - 🆓 AWS IAMポリシー文書生成ツールで、フラットインターフェースを提供。型安全なIAMポリシーの作成や、条件やARNの生成をIntelliSenseでサポートし、より制限的で安全な文書を書くことができます。Node.js、Python、.NetおよびJavaで利用可能

- [IAMbic](https://github.com/noqdev/iambic) - 💸 IAM向けのGitOps。Cloud IAMのTerraform。IAMbicは、マルチクラウドの識別およびアクセス管理（IAM）コントロールプレーンであり、クラウドアクセスと権限を中央化・簡素化します。IAMの最終一致し、人間が読みやすい、両方向の表現をバージョン管理に保持します

### Macaroons

A clever curiosity to distribute and delegate authorization.

- [Google's Macaroons in Five Minutes or Less](https://web.archive.org/web/20240521142227/https://blog.bren2010.io/blog/googles-macaroons) - もし私が、特定の制限の下で行動を実行できるように許可を与えるマカローンを受けるならば、私はそれをもとに、さらに厳しい制限を持つ第二のマカローンを非インタラクティブに構築でき、それをあなたに渡すことができる。

- [Macaroons: Cookies with Contextual Caveats for Decentralized Authorization in the Cloud](https://web.archive.org/web/20191009113323/https://ai.google/research/pubs/pub41892) - グーグルの元の論文。

- [Google paper's author compares Macaroons and JWTs](https://news.ycombinator.com/item?id=14294463) - 消費者／検証者としてのマカローンは、あなた（第三者の制約を通じて）に一部の認可決定を委ねる機能を提供する。JWTはそうではない。

### その他のツール

- [Gubernator](https://github.com/gubernator-io/gubernator) - 認可設計・実装を支援するその他のツールです。

## OAuth2とOpenID

[OAuth 2.0](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0) is a *delegated authorization* framework. [OpenID Connect (OIDC)](https://en.wikipedia.org/wiki/OpenID_Connect) is an *authentication* layer on top of it.

旧来の*OpenID*は役目を終えましたが、新しい*OpenID Connect*は現役です。

- [Descope](https://www.descope.com/?utm_source=awesome-iam&utm_medium=referral&utm_campaign=awesome-iam-oss-sponsorship) - 認証をドラッグ＆ドロップで追加。数行のコードで、あなたのアプリに認証、ユーザー管理、認可機能を追加。

- [Awesome OpenID Connect](https://github.com/cerberauth/awesome-openid-connect) - OpenID Connect向けのプロバイダー、サービス、ライブラリ、リソースの厳選されたリスト。

- [An Illustrated Guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) - これらの標準がどのように機能するかを、簡易な図解を使って説明。

- [OAuth 2 Simplified](https://aaronparecki.com/oauth-2-simplified/) - 開発者やサービスプロバイダーがそれを実装できるように、プロトコルを簡易形式で説明した参考記事。

- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0) - 歴史的文脈からこれらの標準が生まれたことの解説を始め、語彙の誤解を是正し、プロトコルとその課題を詳細に解説することで、やや難解な印象を軽減。

- [OAuth in one picture](https://mobile.twitter.com/kamranahmedse/status/1276994010423361540) - 良い要約カード。

- [How to Implement a Secure Central Authentication Service in Six Steps](https://shopify.engineering/implement-secure-central-authentication-service-six-steps) - 複数の古くからのシステムを、自分のログイン方法やアカウントと統合したいですか？OIDCを使って、そのすべての混乱を統合する方法をここに示す。

- [Open-Sourcing BuzzFeed's SSO Experience](https://increment.com/security/open-sourcing-buzzfeeds-single-sign-on-process/) - OAuth2に親和性のある中央認証サービス（CAS）プロトコルのアダプテーション。そこには、良いOAuthユーザーフロー図が含まれている。

- [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) - 「OAuth 2.0のセキュリティ脅威モデルを更新し、OAuth 2.0が発表された以降に集めた実際の経験を反映し、広範なアプリケーション環境に生じる新たな脅威をカバーする。」

- [Hidden OAuth attack vectors](https://portswigger.net/web-security/oauth) - OAuth 2.0認証メカニズムに見つかるいくつかの重要な脆弱性を特定し、それらを活用する方法を説明。

- [PKCE Explained](https://www.loginradius.com/blog/engineering/pkce/) - 「PKCEは、OAuthおよびOpenID Connectにおける認可コードフローに、もう一つのセキュリティ層を提供する。」

- [Hydra](https://github.com/ory/hydra) - 💸 Open-source OIDC & OAuth2 サーバー プロバイダー。

- [Keycloak](https://github.com/keycloak/keycloak) - 🆓 Open-source インターフェースとアクセス管理。OIDC、OAuth 、SAML 2、LDAPおよびADディレクトリ、パスワードポリシーをサポート。

- [Casdoor](https://github.com/casbin/casdoor) - 🆓 OIDCおよびOAuth 2、ソーシャルログイン、ユーザー管理、メールおよびSMSベースの2FAをサポートする、UI中心の中央認証／シングルサインオン（SSO）プラットフォーム。

- [authentik](https://github.com/goauthentik/authentik) - 💸 Keycloakに類似したオープンソースのIDプロバイダー。

- [ZITADEL](https://github.com/zitadel/zitadel) - 💸 GoとAngularで構築されたオープンソースソリューション。すべてのシステム、ユーザー、サービスアカウントおよびその役割、外部識別情報の管理を一元的に行う。ZITADELは、OIDC、OAuth 2.0、ログインおよび登録フロー、パスワードなし認証およびMFA認証を提供。すべてがイベントソースとCQRSを組み合わせて構築されており、優れたログトレースを提供。

- [obligator](https://github.com/lastlogin-net/obligator) - 🆓 自分でホストできるユーザー向けに設計されたシンプルかつ意見のあるOpenID Connectサーバー。シングルスタティックバイナリで、フラットファイルまたはSQLiteストレージをサポート。

## SAML

Security Assertion Markup Language（SAML）2.0は、OAuth/OpenIDと同様にサービス間で認証・認可情報を交換する仕組みです。

一般的なSAMLアイデンティティプロバイダーは組織や大企業の社内SSOである一方、OIDC/OAuthプロバイダーはデータ基盤を運営するテクノロジー企業であることが多いです。

- [SAML vs. OAuth](https://web.archive.org/web/20230327071347/https://www.cloudflare.com/learning/access-management/what-is-oauth/) - 「OAuthは認可プロトコルである：ボブが正しい駐車場に行けるようにする。一方、SAMLは認証プロトコルであり、ボブがゲートハウスを通過できるようにするものである。」

- [The Difference Between SAML 2.0 and OAuth 2.0](https://www.ubisecure.com/uncategorized/difference-between-saml-and-oauth/) - 「SAMLは実際には広く適用できるように設計されたが、現在の利用は主に企業向けSSOシナリオに偏っている。一方、OAuthはインターネット上のアプリケーションとの利用を目的として設計されたものであり、特に委任認可に特化している。」

- [What's the Difference Between OAuth, OpenID Connect, and SAML?](https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/) - アイデンティティは難しい。異なるプロトコルについての別の視点が常に歓迎され、すべてを理解するのを助ける。

- [The Beer Drinker's Guide to SAML](https://duo.com/blog/the-beer-drinkers-guide-to-saml) - SAMLはときには奥深い。別の例え話があれば、それによって理解を深められるかもしれない。

- [SAML is insecure by design](https://joonas.fi/2021/08/saml-is-insecure-by-design/) - SAMLは単に不思議で、設計上不安全である。なぜなら、SAMLはXML canonicalizationに基づく署名に頼っているからであり、XMLバイトストリームに頼っているわけではない。つまり、XMLパーサーやエンコーダーの違いを悪用できる。

- [The Difficulties of SAML Single Logout](https://shibboleth.atlassian.net/wiki/spaces/CONCEPT/pages/928645229/SLOIssues) - シングルログアウト実装における技術的およびUX上の問題について。

- [The SSO Wall of Shame](https://sso.tax) - SaaSプロバイダーがSSOを有効化する際に採用する過剰な価格設定についての記録された批判。著者の主張は、SSOは基本的なセキュリティ機能であるため、適切な価格で提供され、排他的なプランに含まれるべきではないということである。

## シークレット管理

信頼の連鎖を維持しながら、認証・認可に必要なシークレットを保存・利用するためのアーキテクチャ、ソフトウェア、ハードウェアです。

- [Secret at Scale at Netflix](https://www.youtube.com/watch?v=K0EOPddWpsE) - ブラインド署名に基づくNetflixの大規模シークレット管理方式を解説します。 [slides](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Mehta.pdf)

- [High Availability in Google's Internal KMS](https://www.youtube.com/watch?v=5T_c-lqgjso) - GCPのKMSではなく、Google基盤の中核にある社内KMSの高可用性を解説します。 [slides](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Kanagala.pdf)

- [HashiCorp Vault](https://github.com/hashicorp/vault) - 💸 ターゲット、パスワード、証明書、暗号鍵の安全な保管と、アクセスの厳密な制御。

- [Infisical](https://github.com/Infisical/infisical) - 💸 HashiCorp Vaultの代替案。

- [`sops`](https://github.com/mozilla/sops) - 🆓 YAML、JSON、ENV、INI、BINARY形式をサポートする暗号化ファイルエディタで、AWS KMS、GCP KMS、Azure Key Vault、age、PGPで暗号化。

- [`gitleaks`](https://github.com/zricethezav/gitleaks) - 🆓 セクレットを監視するGitリポジトリの編集。

- [`trufflehog`](https://github.com/trufflesecurity/trufflehog) - 💸 Gitリポジトリを検索し、高エンタロピーの文字列やセクレットを特定し、コミット履歴に深く掘り下げる。

### ハードウェアセキュリティモジュール（HSM）

HSMはハードウェア層でシークレット管理の安全性を保証する物理デバイスです。

- [HSM: What they are and why it's likely that you've (indirectly) used one today](https://web.archive.org/web/20260404010649/https://rwc.iacr.org/2015/Slides/RWC-2015-Hampton.pdf) - HSMの利用についての非常に基本的な概要。

- [Tidbits on AWS Cloud HSM hardware](https://news.ycombinator.com/item?id=16759383) - AWS CloudHSM ClassicはSafeNetのLuna HSMによってサポートされており、現在のCloudHSMはCaviumのNitroxに依存しており、これにより分割可能な「仮想HSM」が可能になる。

- [Keystone](https://github.com/keystone-enclave/keystone) - 🆓 RISC-Vアーキテクチャに基づく信頼できる実行環境（TEE）を構築するためのオープンソースプロジェクト。

- [Project Oak](https://github.com/project-oak/oak) - 🆓 データの安全な転送、保管、処理に関する仕様および参照実装。

- [Everybody be cool, this is a robbery!](https://www.sstic.org/2019/presentation/hsm/) - HSM（フランス語で）の脆弱性と悪用可能性に関する事例研究。

## トラスト＆セーフティ

十分な利用者基盤はコミュニティになります。運営者には、顧客、人々、企業、事業を守り、その中で行われる交流と取引を安全に支える責任があります。

A critical intermediation complex driven by a policy and constraint by local laws, the Trust & Safety department is likely embodied by a cross-functional team of 24/7 operators and systems of highly advanced moderation and administration tools. You can see it as an extension of customer support services, specialized in edge-cases like manual identity checks, moderation of harmful content, stopping harassment, handling of warrants and copyright claims, data sequestration and other credit card disputes.

- [Trust and safety 101](https://www.csoonline.com/article/3206127/trust-and-safety-101.html) - ドメインとその責任についての素晴らしい紹介。

- [What the Heck is Trust and Safety?](https://www.linkedin.com/pulse/what-heck-trust-safety-kenny-shi) - TnSチームの役割を示す実際の使用例のいくつか。



- [Awesome List of Billing and Payments: Fraud links](https://github.com/kdeldycke/awesome-billing#fraud) - 請求および支払いにおけるファイアウォール管理に関してのセクション、私たちの姉妹リポジトリから。



### ユーザーアイデンティティ

多くの事業者は第三者へ販売するプロフィール作成のためではなく、法令に基づく契約関係の記録として[本人確認（KYC）](https://en.wikipedia.org/wiki/Know_your_customer)を行う必要があります。

- [The Laws of Identity](https://www.identityblog.com/stories/2005/05/13/TheLawsOfIdentity.pdf) - この紙はアイデンティティメタシステムを狙っているが、その法則は小さなスケールにおいても大きな洞察を提供しており、特に第一の法則：ユーザーの制御を常に許可し、信頼を得るために同意を求める。

- [How Uber Got Lost](https://archive.ph/hvjKl) - 「摩擦を最小限に抑えるために、Uberは利用者にメールアドレス（簡単に偽造できる）または電話番号の提供を要せず登録を許可した。(...) 車両が盗まれて焼かれた；運転手が襲われ、強盗され、場合によっては殺害された。しかし、暴力が増加する中でも、会社は低摩擦の登録システムを維持した。

- [A Comparison of Personal Name Matching: Techniques and Practical Issues](http://users.cecs.anu.edu.au/~Peter.Christen/publications/tr-cs-06-02.pdf) - 顧客名の一致は、アカウントの重複除去から詐欺監視まで幅広い応用がある。

- [Statistically Likely Usernames](https://github.com/insidetrust/statistically-likely-usernames) - 🆓 ユーザー名の統計的に可能性の高いリストを提供。これは、ユーザー名の枚挙、シミュレートされたパスワード攻撃、その他セキュリティテストに使用する場合に有効。

- [Facebook Dangerous Individuals and Organizations List](https://theintercept.com/document/facebook-dangerous-individuals-and-organizations-list-reproduced-snapshot/) - あるグループやコンテンツは、特定の法域において違法である。これはブロッキングリストの例である。

- [Ballerine](https://github.com/ballerine-io/ballerine) - 💸 ユーザーのアイデンティティとリスク管理に用いるオープンソースインフラ。

- [Sherlock](https://github.com/sherlock-project/sherlock) - 🆓 複数のソーシャルネットワークにおけるユーザー名でソーシャルメディアアカウントを特定。

### 不正対策

オンラインサービスは不正、犯罪、悪用にさらされます。ワークフロー上の不具合や不整合は金銭的利益のために悪用され得るものとして設計する必要があります。

- [After Car2Go eased its background checks, 75 of its vehicles were stolen in one day.](https://web.archive.org/web/20230526073109/https://www.bloomberg.com/news/articles/2019-07-11/mercedes-thieves-showed-just-how-vulnerable-car-sharing-can-be) - 背景チェックがなぜ時々必要なのか。

- [Investigation into the Unusual Signups](https://openstreetmap.lu/MWGGlobalLogicReport20181226.pdf) - OpenStreetMapにおける怪しい貢献者の登録に関する非常に詳細な分析。この美しく高レベルな報告書は、組織的かつ目的意識のあるキャンペーンを示しており、詐欺報告書のテンプレートとして機能する可能性がある。

- [MIDAS: Detecting Microcluster Anomalies in Edge Streams](https://github.com/bhatiasiddharth/MIDAS) - 🆓 「エッジストリームにおいて、微小クラスタの異常、または急に現れる異常なエッジのグループを、定常時間とメモリで検出するための提案された手法。

- [Gephi](https://github.com/gephi/gephi) - 🆓 大規模グラフの可視化および操作を行うオープンソースプラットフォーム。

### モデレーション

ゲームやSNSに限らず、オンラインコミュニティの運営にはモデレーションのための継続的な資源投入が必要です。

- [Still Logged In: What AR and VR Can Learn from MMOs](https://youtu.be/kgw8RLHv1j4?t=534) - 「オンラインコミュニティを運営している場合、人々が他の人を傷つける可能性がある：その責任が発生する。そして、その責任を負うことが負担であるなら、オンラインコミュニティを運営しないべきだ。』

- [You either die an MVP or live long enough to build content moderation](https://mux.com/blog/you-either-die-an-mvp-or-live-long-enough-to-build-content-moderation/) - 「この問題の解決空間を検討する際、コスト、正確性、スピードの3つの次元と、人間によるレビューと機械によるレビューの2つのアプローチを考慮する。人間は正確性の次元において優れているが、コストとスピードの観点では高価で遅いという欠点がある。機械、またはロボットはコストとスピードの次元において優れている。コストが低く、スピードも速い。しかし、目的は、必要に応じて十分に正確なロボットソリューションを見つけることである。

- [The despair and darkness of people will get to you](https://restofworld.org/2020/facebook-international-content-moderators/) - 巨大なソーシャ及ネットワークのモデレーションは、外部に委託されたサブコンタクターの軍団によって行われており、これらの人は最悪の状況にさらされ、一般的にPTSDに陥る。

- [The Cleaners](https://thoughtmaybe.com/the-cleaners/) - これらの給料が低い人々が投稿を削除し、アカウントを削除するチームについてのドキュメンタリー。

### 脅威インテリジェンス

攻撃的なオンライン活動を検知、識別、分類する方法を扱います。通常はセキュリティ、ネットワーク、インフラチームが監視しますが、脅威分析と対応に関与するT&S・IAM担当者にも有用です。

- [Awesome Threat Intelligence](https://github.com/hslatman/awesome-threat-intelligence) - 「脅威インテリジェンスの簡潔な定義：資産に対する既存または新たな脅威・危険に関する、文脈、メカニズム、指標、影響、および実行可能なアドバイスを含む、根拠に基づく知識。この知識は、その脅威や危険に対する対応に関する意思決定を導くために用いられる。』

- [SpiderFoot](https://github.com/poppopjmp/spiderfoot) - 🆓 オープンソースインテリジェンス（OSINT）自動化ツール。ほぼすべてのデータソースと統合され、データ分析のための多様な手法を用いて、データを簡単にナビゲートできるようにする。

- [OSINT Stuff Tool Collection](https://github.com/cipher387/osint_stuff_tool_collection) - 「数百のオンラインツールを収集したOSINTツールセット」：ドメイン、IPアドレス、メールアドレス、ユーザー名、ソーシャルネットワークの検索が、詐欺や悪用の暴露に役立つ。

- [Maigret](https://github.com/soxoj/maigret) - 🆓 「3000以上のサイトからユーザー名で個人のファイルを収集」。これはアカウントの枚挙や詐欺・悪用の暴露に有効。

- [Standards related to Threat Intelligence](https://www.threat-intelligence.eu/standards/) - 脅威インテリジェンス分析を支援するオープンスタンダード、ツール、手法。

- [MISP taxonomies and classification](https://www.misp-project.org/taxonomies.html) - 「脅威情報（サイバーセキュリティ指標、金融詐欺、反テロ情報など）」を整理するためのタグ。

- [Browser Fingerprinting: A survey](https://arxiv.org/pdf/1905.01051.pdf) - フィンガープリントは、ボットや詐欺者を特定するためのシグナルのソースとして利用できる。

- [The challenges of file formats](https://speakerdeck.com/ange/the-challenges-of-file-formats) - 脅威情報の収集・共有・活用に関する資料・基盤です。 [corpus of suspicious media files](https://github.com/corkami/pocs)

- [SecLists](https://github.com/danielmiessler/SecLists) - 🆓 セキュリティ評価中に使用される複数種類のリストを、一か所に集約したコレクション。リストの種類にはユーザー名、パスワード、URL、センシティブデータパターン、フュージングペイロード、ウェブシェルなどがある。

- [PhishingKitTracker](https://github.com/neonprimetime/PhishingKitTracker) - 🆓 フィッシングキットを使用する脅威行動者によるメールアドレスのCSVデータベース。

- [PhoneInfoga](https://github.com/sundowndev/PhoneInfoga) - 🆓 フリーリソースのみで携帯電話番号をスキャンできるツール。目的は、国、エリア、キャリア、ラインタイプなどの標準情報の収集（非常に高い精度）であり、その後、検索エンジンでの足跡を検索し、VoIPプロバイダーを特定または所有者を識別すること。

- [Confusable Homoglyphs](https://git.sr.ht/~valhalla/confusable_homoglyphs) - 🆓 ホモグロフィックは、フィッシングの一般的なトリック。

### CAPTCHA

スパム送信者に対する追加の防御線です。

- [Awesome Captcha](https://github.com/ZYSzys/awesome-captcha) - オープンソースのCAPTCHAライブラリ、統合、代替手段およびクラッキングツールに関するすべてのリファレンス。

- [reCaptcha](https://www.google.com/recaptcha) - 💸 企業がインターネット規模でのボットやスパマー対策に専門チームを割くことができない場合でも、依然として効果的で経済的かつ迅速な解決策。

- [You (probably) don't need ReCAPTCHA](https://web.archive.org/web/20190611190134/https://kevv.net/you-probably-dont-need-recaptcha/) - サービスがプライバシーの危険な状態であり、UIが面倒であるという批判から始まり、代替案をリストアップ。

- [Anubis](https://github.com/TecharoHQ/anubis) - 🆓 スクリッパー・ボットが上流リソースを侵害するのを防ぐオープンソースソリューション。

- [Anti-captcha](https://anti-captcha.com) - 💸 CAPTCHA解決サービス。

## ブロックリスト

悪用に対する最初の機械的防御は単純な拒否リストです。基本的な不正対策ですが、現在も有効です。

- [Bloom Filter](https://en.wikipedia.org/wiki/Bloom_filter) - この用途に最適である。なぜなら、ブロームフィルターは、ある（大きな）セットに要素が含まれていないかを迅速に確認するために設計されている。特定データタイプに応じたブロームフィルターのバリエーションが存在する。

- [How Radix trees made blocking IPs 5000 times faster](https://web.archive.org/web/2021/https://blog.sqreen.com/demystifying-radix-trees/) - ラディクスツリーは、IPブロッキングリストの処理を速くするのに役立つ可能性がある。

### ホスト名とサブドメイン

クライアントの識別、ボット群の検出・遮断、DDoSの影響軽減に役立ちます。

- [`hosts`](https://github.com/StevenBlack/hosts) - 🆓 評価されたホストファイルを統合し、重複を削除した一元化されたホストファイルにまとめる。

- [`nextdns/metadata`](https://github.com/nextdns/metadata) - 💸 セキュリティ、プライバシー、親子制御に関する広範なリストの収集。

- [The Public Suffix List](https://github.com/publicsuffix/list) - 🆓 モzillaが管理する公開サフィックスリスト。インターネットユーザーが（または歴史的に）直接名前を登録できる。

- [Country IP Blocks](https://github.com/herrbischoff/country-ip-blocks) - 🆓 インターネット地域登録機関から直接取得したCIDRレベルの国別IPデータ。毎時更新。

- Subdomain denylists: [#1](https://gist.github.com/artgon/5366868), [#2](https://github.com/sandeepshetty/subdomain-blacklist/blob/master/subdomain-blacklist.txt), [#3](https://github.com/nccgroup/typofinder/blob/master/TypoMagic/datasources/subdomains.txt).

- [`common-domain-prefix-suffix-list.tsv`](https://gist.github.com/erikig/826f49442929e9ecfab6d7c481870700) - トップ5000の最も一般的なドメインプレフィックス／サフィックスリスト。

- [`xkeyscorerules100.txt`](https://gist.github.com/sehrgut/324626fa370f044dbca7) - ホスト名・サブドメインの判定用リストやツールです。 [XKeyscore](https://en.wikipedia.org/wiki/XKeyscore)

- [AMF site blocklist](https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde) - 公式フランス語のお金関連詐欺サイトのdenylist。

### メール

- [Burner email providers](https://github.com/wesbos/burner-email-providers) - メールアドレスやドメインの判定用リスト・サービスです。 [derivative Python module](https://github.com/martenson/disposable-email-domains)

- [MailChecker](https://github.com/FGRibreau/mailchecker) - 💸 複数言語対応の一時的な（使い捨て／捨てられる）メールアドレス検出ライブラリ。

- [`check-if-email-exists`](https://github.com/reacherhq/check-if-email-exists) - 💸 SMTPでメールアドレスの到達可能性を確認するのに何かを送信せず、登録時にタイポや一時的なドメイン、役割アカウントをキャッチする

- [Temporary Email Address Domains](https://gist.github.com/adamloving/4401361) - 一時的・仮のメールアドレスのドメイン一覧。あなたのメールリストをフィルタリングして開封率を向上させるのに役立ちます（これらのドメインにメールを送ることは開封されにくいです）

- [`gman`](https://github.com/benbalter/gman) - 🆓 「あるメールアドレスまたはウェブサイトの所有者がTHE MAN（＝政府ドメインを確認）に勤務しているかどうかをチェックするRubyのgem」。あなたのユーザーベースに潜在的な政府顧客を発見するための良いリソースです

### 予約済みID

- [General List of Reserved Words](https://gist.github.com/stuartpb/5710271) - ユーザーが任意の名前を選択できるシステムにおいて、予備的に考慮すべき語彙の一覧

- [Hostnames and usernames to reserve](https://ldpreload.com/blog/names-to-reserve) - 自動化システムで登録を制限すべき名前の一覧

### 不適切表現

- [List of Dirty, Naughty, Obscene, and Otherwise Bad Words](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words) - 🆓 Shutterstockのプロフィンシーブロックリスト

- [`profanity-check`](https://github.com/vzhou842/profanity-check) - 🆓 20万件の人工ラベルされたクリーンおよびプロフィンシーなテキストのサンプルに基づく線形SVMモデルを使用

## プライバシー

ユーザーデータを守るIAMスタックには、プライバシー尊重が深く結びついています。

- [Paper we love: Privacy](https://github.com/papers-we-love/papers-we-love/tree/master/privacy) - プライバシーを設計で提供するスキームに関する科学的調査のコレクション

- [Have I been Pwned?](https://haveibeenpwned.com) - データ漏洩インデックス

- [Automated security testing for Software Developers](https://fahrplan.events.ccc.de/camp/2019/Fahrplan/system/event_attachments/attachments/000/003/798/original/security_cccamp.pdf) - 大多数のプライバシーの侵害は、第三者依存の既知の脆弱性によって許可された。ここではCI/CDを通じてそれらを検出する方法を示す

- [Email marketing regulations around the world](https://github.com/threeheartsdigital/email-marketing-regulations) - 🆓 世界がますます接続性を高めるにつれて、メールマーケティング規制の環境はますます複雑になっていく

### 匿名化

ユーザーデータの中央リポジトリを担うIAM関係者は、事業・顧客データの漏えいを防ぐ必要があります。内部分析を可能にするには匿名化が必要です。

- [The False Allure of Hashing for Anonymization](https://web.archive.org/web/20220927004103/https://goteleport.com/blog/hashing-for-anonymization/) - ハッシュ化は匿名化には不十分であるが、それでもGDPRが許容する偽名化には十分である

- [Four cents to deanonymize: Companies reverse hashed email addresses](https://freedom-to-tinker.com/2018/04/09/four-cents-to-deanonymize-companies-reverse-hashed-email-addresses/) - 「ハッシュ化されたメールアドレスは個人を簡単に逆算し、個人と結びつけることができる」

- [Why differential privacy is awesome](https://desfontain.es/privacy/differential-privacy-awesomeness.html) - 機密性を損なわず集約データを共有する理論的枠組みである[differential privacy](https://en.wikipedia.org/wiki/Differential_privacy)の直感を解説します。 [more details](https://desfontain.es/privacy/differential-privacy-in-more-detail.html) - [practical aspects](https://desfontain.es/privacy/differential-privacy-in-practice.html)

- [Presidio](https://github.com/microsoft/presidio) - 🆓 文字と画像に対して、文脈に応じた、プラグイン型かつカスタマイズ可能なデータ保護および個人情報（PII）の匿名化サービス

### GDPR

The well-known European privacy framework

- [GDPR Tracker](https://gdpr.eu) - ヨーロッパの参考サイト

- [GDPR Developer Guide](https://github.com/LINCnil/GDPR-Developer-Guide) - 開発者向けのベストプラクティス

- [GDPR – A Practical guide for Developers](https://techblog.bozho.net/gdpr-practical-guide-developers/) - 上記の要約を1ページにまとめたもの

- [Dark Patterns after the GDPR](https://arxiv.org/pdf/2001.02479.pdf) - この論文は、GDPRの法執行が不十分であるため、暗黙の同意や暗黙のパターンが広く存在していることを示している

- [GDPR Enforcement Tracker](http://enforcementtracker.com) - GDPRの罰則とペナルティの一覧

## UX/UI

IAM担当者は、登録導線とユーザーオンボーディングに必要な基盤機能の多くをバックエンドへ実装します。製品の第一印象を決めるため、フロントエンドの専門家と慎重に設計する必要があります。以下は体験改善の参考資料です。

- [The 2020 State of SaaS Product Onboarding](https://userpilot.com/saas-product-onboarding/) - ユーザーのオンボーディングにおけるすべての重要な側面をカバー

- [User Onboarding Teardowns](https://www.useronboard.com/user-onboarding-teardowns/) - 初めてのユーザーのサインアップを解体した膨大なリスト

- [Discover UI Design Decisions Of Leading Companies](https://goodui.org/leaks/) - 漏洩されたスクリーンショットとA/Bテストから

- [Conversion Optimization](https://web.archive.org/web/2020/https://www.nickkolenda.com/conversion-optimization-psychology/#cro-tactic11) - ユーザーがアカウント作成フローを終える確率を高めるための戦略のコレクション

- [11 Tips for Better Signup / Login UX](https://learnui.design/blog/tips-signup-login-ux.html) - ログインフォームに関する基本的なアドバイス

- [Don't get clever with login forms](http://bradfrost.com/blog/post/dont-get-clever-with-login-forms/) - ログインフォームはシンプルで、リンク可能で、予測可能であり、パスワードマネージャーと良好に協調するように設計する

- [Why are the username and password on two different pages?](https://www.twilio.com/blog/why-username-and-password-on-two-different-pages) - SSOとパスワードベースログインを両方サポートする。もしログインフローを2ステップに分割するとユーザーに非常に不快に感じられるなら、ドロップボックスのように解決する: [an AJAX request when you enter your username](https://news.ycombinator.com/item?id=19174355).

- [HTML attributes to improve your users' two factor authentication experience](https://www.twilio.com/blog/html-attributes-two-factor-authentication-autocomplete) - 「この記事では、シンプルな `<input>` 要素と、ユーザーの2段階認証体験を加速するHTML属性について見ていきます」

- [Remove password masking](http://passwordmasking.com) - パスワードマスクの削除が消費者の信頼に与える影響を調査した学術研究の結果を要約

- [For anybody who thinks "I could build that in a weekend," this is how Slack decides to send a notification](https://twitter.com/ProductHunt/status/979912670970249221) - 通知は難しい。本当に難しい。

## 競合分析

この分野で活動するオープンソースプロジェクトと企業の動向を追跡します。

- [Best-of Digital Identity](https://github.com/jruizaranguren/best-of-digital-identity) - オープンソースのデジタルアイデンティティプロジェクトのランキング、人気、活動状況

- [AWS Security, Identity & Compliance announcements](https://aws.amazon.com/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-categories=marketing-marchitecture%23security-identity-and-compliance) - IAM周辺に追加されたすべての新機能の元となる情報

- [GCP IAM release notes](https://cloud.google.com/iam/docs/release-notes) - GCP IAMの変更履歴です。関連する変更履歴として[Identity Platform](https://cloud.google.com/identity-platform/docs/release-notes)、[Resource Manager](https://cloud.google.com/resource-manager/docs/release-notes)、[Key Management Service/HSM](https://cloud.google.com/kms/docs/release-notes)、[Access Context Manager](https://cloud.google.com/access-context-manager/docs/release-notes)、[Identity-Aware Proxy](https://cloud.google.com/iap/docs/release-notes)、[Data Loss Prevention](https://cloud.google.com/dlp/docs/release-notes)、[Security Scanner](https://cloud.google.com/security-scanner/docs/release-notes)も参照できます。

- [Unofficial Weekly Google Cloud Platform newsletter](https://www.gcpweekly.com) - Google Cloud Platformの非公式週刊ニュースレターです。関連キーワードは[`IAM`](https://www.gcpweekly.com/gcp-resources/tag/iam/)と[`Security`](https://www.gcpweekly.com/gcp-resources/tag/security/)です。

- [DigitalOcean Accounts changelog](http://docs.digitalocean.com/release-notes/accounts/) - DOにおける最新のアカウント更新情報

- [163 AWS services explained in one line each](https://web.archive.org/web/20260301070017/https://adayinthelifeof.nl/2020/05/20/aws.html#discovering-aws) - AWSの巨大なサービスカタログを理解しやすくする一行解説集です。同趣旨の資料として[AWS In Plain English](https://expeditedsecurity.com/aws-in-plain-english/)があります。

- [Google Cloud Developer's Cheat Sheet](https://github.com/gregsramblings/google-cloud-4-words#the-google-cloud-developers-cheat-sheet) - GCPのすべての製品を4語以内で説明

## 歴史

- [cryptoanarchy.wiki](https://cryptoanarchy.wiki) - サイファーパンクスはセキュリティと重なります。このWikiは、この運動、その歴史、および重要な人物・出来事を収集しています。

## コントリビューション

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/kdeldycke/awesome-iam/blob/ede0dca67cb280f4ddb3ec8f6e8ebb1e3d166cb4/.github/contributing.md)をご確認ください。

## 脚注

[ヘッダー画像](https://github.com/kdeldycke/awesome-iam/blob/main/assets/awesome-iam-header.jpg)は、[写真](https://web.archive.org/web/20230919012225/https://unsplash.com/photos/2LowviVHZ-E)を[Ben Sweet](https://web.archive.org/web/20260303063416/https://unsplash.com/@benjaminsweet)が加工したものです。



<a name="intro-quote-def">[1]</a>: [*Poison Study*](https://openlibrary.org/isbn/0778324338) (Mira, 2007). [[↑]](#intro-quote-ref)
