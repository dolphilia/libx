---
title: "Awesome CI/CD Attacks"
description: "CI/CD Attacksを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-TupleType-awesome-cicd-attacks-readme-md"
---

# Awesome CI/CD Attacks

CI/CD Attacksを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [技法](#techniques)
  - [公開された機密データ](#publicly-exposed-sensitive-data)
  - [初期コード実行](#initial-code-execution)
  - [侵害後](#post-exploitation)
  - [防御回避](#defense-evasion)
- [ツール](#tools)
- [事例研究](#case-studies)
- [類似プロジェクト](#similar-projects)

## 技法
独自性と有用性を備えたCI/CD攻撃技法のキュレーションリスト。

### 公開された機密データ
- [(The) Postman Carries Lots of Secrets](https://trufflesecurity.com/blog/postman-carries-lots-of-secrets) - 分かりにくいUI、フォーク、不十分なシークレットスキャンにより、Postmanの公開APIネットワークが数千のシークレットを漏えいさせます。
- [All the Small Things: Azure CLI Leakage and Problematic Usage Patterns](https://www.paloaltonetworks.com/blog/prisma-cloud/secrets-leakage-user-error-azure-cli/) - 使用パターンによりAzure CLIがCI/CDログへシークレットを漏えいさせます。
- [Anyone can Access Deleted and Private Repository Data on GitHub](https://trufflesecurity.com/blog/anyone-can-access-deleted-and-private-repo-data-github) - フォークネットワークの一部である限りアクセスできます。
- [Beyond S3: Exposed Resources on AWS](https://duo.com/blog/beyond-s3-exposed-resources-on-aws) - インターネットに公開されたEBS、RDS、AMI、Elasticsearchクラスター。
- [CloudQuarry: Digging for secrets in public AMIs](https://securitycafe.ro/2024/05/08/aws-cloudquarry-digging-for-secrets-in-public-amis/) - 研究者が、複数業界に影響する公開AWS AMI内の認証情報、非公開リポジトリ、鍵500GBを発見しました。
- [Employee Personal GitHub Repos Expose Internal Azure and Red Hat Secrets](https://www.aquasec.com/blog/github-repos-expose-azure-and-red-hat-secrets/) - 従業員の個人GitHubリポジトリが内部のAzure・Red Hatシークレットを公開します。
- [Fortune 500 at Risk: 250M Artifacts Exposed via Misconfigured Registries](https://www.aquasec.com/blog/250m-artifacts-exposed-via-misconfigured-registries/) - 機密の独自コードとシークレットを含むソフトウェアアーティファクトが、誤設定された公開レジストリから露出します。
- [GitLab Secrets](https://github.com/RichardoC/gitlab-secrets) - 公開Git履歴からはアクセスできない、機密情報を含む可能性がある削除済みGitLabコミットを明らかにするツール。
- [Hidden GitHub Commits and How to Reveal Them](https://neodyme.io/en/blog/github_secrets/) - 公開Git履歴からはアクセスできない、機密情報を含む可能性がある削除済みGitHubコミットを明らかにするツール。
- [Holes in Your Bitbucket: Why Your CI/CD Pipeline Is Leaking Secrets](https://cloud.google.com/blog/topics/threat-intelligence/bitbucket-pipeline-leaking-secrets) - Bitbucket Secured Variablesがアーティファクトオブジェクトを通じてシークレットを漏らす問題。専用シークレットマネージャーとコードスキャンの利用を推奨します。
- [Millions of Secrets Exposed via Web Application Frontends](https://web.archive.org/web/20230531032433/https://redhuntlabs.com/blog/millions-of-secrets-exposed-via-web-application-frontend/) - JavaScriptとデバッグページを通じてWebアプリのフロントエンドから数百万のシークレットが公開されます。
- [Publicly Exposed AWS Document DB Snapshots](https://ramimac.me/exposed-docdb) - Cinemark Brazilの公開AWS DocumentDBスナップショットが数百万件の顧客レコードを明らかにしました。
- [Thousands of images on Docker Hub leak auth secrets, private keys](https://www.bleepingcomputer.com/news/security/thousands-of-images-on-docker-hub-leak-auth-secrets-private-keys/) - 研究者が、秘密鍵とAPIシークレットを漏えいする数千のDocker Hubイメージを発見しました。

### 初期コード実行
- [ActionsTOCTOU (Time Of Check to Time Of Use)](https://github.com/AdnaneKhan/ActionsTOCTOU/) - 承認イベントを監視し、PRヘッド内のファイルをパラメーター指定のローカルファイルへ迅速に置き換えるツール。
- [AWS Targeted by a Package Backfill Attack](https://www.mend.io/blog/aws-targeted-by-a-package-backfill-attack/) - 内部パッケージのコミット履歴を走査し、dependency confusionを実行します。
- [Can you trust ChatGPT's package recommendations?](https://vulcan.io/blog/ai-hallucinations-package-risk) - 存在しないコーディングライブラリを生成する生成AIプラットフォームの傾向を利用してDependency Confusionを実行します。
- [Can You Trust Your VSCode Extensions?](https://www.aquasec.com/blog/can-you-trust-your-vscode-extensions/) - 人気のVSCode拡張機能になりすまし、気付かない開発者にダウンロードさせます。
- [Deep dive into Visual Studio Code extension security vulnerabilities](https://snyk.io/blog/visual-studio-code-extension-security-vulnerabilities-deep-dive/) - VS Code拡張には、開発者マシンを侵害し得るコマンドインジェクション、パストラバーサル、zip slipの脆弱性があります。
- [Dependency Confusion: How I Hacked Into Apple, Microsoft and Dozens of Other Companies](https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610) - 研究者が社内企業名を持つ悪意あるパッケージを公開し、dependency confusionによりApple、Microsoftほかへアクセスしました。
- [Dependency Confusions in Docker and remote pwning of your infra](https://www.errno.fr/DockerDependencyConfusion.html) - 誤設定されたDockerミラーがプライベートイメージではなく悪意ある公開イメージを取得する際に、Docker dependency confusionが発生します。
- [Erosion of Trust: Unmasking Supply Chain Vulnerabilities in the Terraform Registry](https://boostsecurity.io/blog/erosion-of-trust-unmasking-supply-chain-vulnerabilities-in-the-terraform-registry) - TerraformモジュールはDependency Lock Fileで保護されず、無害に見えるモジュールが悪意あるコードを導入し得ます。
- [Fixing typos and breaching microsoft's perimeter](https://johnstawinski.com/2024/04/15/fixing-typos-and-breaching-microsofts-perimeter/) - コントリビューターになることでGitHubワークフローの承認要件を回避します。
- [GitHub Dataset Research Reveals Millions Potentially Vulnerable to RepoJacking](https://www.aquasec.com/blog/github-dataset-research-reveals-millions-potentially-vulnerable-to-repojacking/) - 組織名変更により数百万のGitHubリポジトリがRepoJackingに脆弱で、コード実行につながる可能性があります。
- [Gitloker attacks abuse GitHub notifications to push malicious OAuth apps](https://www.bleepingcomputer.com/news/security/gitloker-attacks-abuse-github-notifications-to-push-malicious-oauth-apps/) - 攻撃者が偽のGitHub通知を用い、リポジトリアクセスを盗む悪意あるOAuthアプリの認可へ誘導します。
- [Hacking GitHub AWS integrations again](https://dagrz.com/writing/aws-security/hacking-github-aws-oidc/) - OIDCを使用する誤設定パイプラインを攻撃します。
- [How I hacked into Google's internal corporate assets](https://observationsinsecurity.com/2024/04/25/how-i-hacked-into-googles-internal-corporate-assets/) - Dependency Confusionのため、コード内の依存関係を見つけるさらなる方法。
- [How to completely own an airline in 3 easy steps](https://maia.crimew.gay/posts/how-to-hack-an-airline/) - インターネットからアクセスできる誤設定CIシステム。
- [How We Hacked a Software Supply Chain for $50K](https://www.landh.tech/blog/20250211-hack-supply-chain-for-50k/) - 対象のJavaScriptフロントエンドファイルを収集し、ASTでimport/require文を特定してNPM認証情報を含む公開コンテナを発見しました。
- [Introducing MavenGate: a supply chain attack method for Java and Android applications](https://blog.oversecured.com/Introducing-MavenGate-a-supply-chain-attack-method-for-Java-and-Android-applications/) - 長く放棄された公開・人気ライブラリが巨大プロジェクトで使われ続けています。ドメイン名の購入によりプロジェクトへのアクセスを乗っ取れます。
- [Keeping your GitHub Actions and workflows secure Part 1: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) - pull_request_targetワークフロートリガーと信頼できないPRの明示的checkoutの組合せは、リポジトリ侵害につながり得ます。
- [Keeping your GitHub Actions and workflows secure Part 2: Untrusted input](https://securitylab.github.com/research/github-actions-untrusted-input/) - GitHub Actionsのコマンドインジェクション。
- [Malicious code analysis: Abusing SAST (mis)configurations to hack CI systems](https://medium.com/cider-sec/malicious-code-analysis-abusing-sast-mis-configurations-to-hack-ci-systems-13d5c1b37ffe) - 誤設定されたSASTツールを悪用してCIシステムで悪意あるコードを実行し、認証情報の窃取や悪意あるアーティファクトのデプロイを行えます。
- [PPE — Poisoned Pipeline Execution](https://medium.com/cider-sec/ppe-poisoned-pipeline-execution-34f4e8d0d4e9) - Poisoned Pipeline Execution（PPE）は、直接アクセスなしで攻撃者がCI/CDシステム上の悪意あるコードを実行できるようにします。
- [Security alert: social engineering campaign targets technology industry employees](https://github.blog/2023-07-18-security-alert-social-engineering-campaign-targets-technology-industry-employees/) - GitHubユーザーをフィッシングし、リポジトリのダウンロードと実行へ誘導します。
- [The (In)security Landscape of AI-Powered GitHub Actions (Part 2/2)](https://www.wiz.io/blog/github-actions-security-ai-powered-actions-vulnerabilities) - AI搭載GitHub Actionsの脆弱性。攻撃者が信頼されたアプリになりすませる構文的権限検査とDependabot Deputy Confusion Injectionを扱います。
- [The Monsters in Your Build Cache – GitHub Actions Cache Poisoning](https://adnanthekhan.com/2024/05/06/the-monsters-in-your-build-cache-github-actions-cache-poisoning/) - 脆弱性・依存関係の欠陥を悪用し、キャッシュトークン窃取、退避を強制するキャッシュ充填、正規エントリーの悪意あるコードへの置換を行うことで、限定的な権限でもワークフローを侵害できます。
- [Thousands of npm accounts use email addresses with expired domains](https://therecord.media/thousands-of-npm-accounts-use-email-addresses-with-expired-domains) - メンテナーのメールハイジャック。
- [Understanding typosquatting methods - for a secure supply chain](https://bytesafe.dev/posts/understanding-typosquatting-methods/) - typosquattingは、正規のものに似た名前の悪意あるパッケージを公開し、タイポを悪用して悪意あるコードを注入します。
- [Vulnerable GitHub Actions Workflows Part 1: Privilege Escalation Inside Your CI/CD Pipeline](https://www.legitsecurity.com/blog/github-privilege-escalation-vulnerability) - GitHub Actionsのworkflow_run権限昇格。
- [What the fork? Imposter commits in GitHub Actions and CI/CD](https://www.chainguard.dev/unchained/what-the-fork-imposter-commits-in-github-actions-and-ci-cd) - GitHub Actionsの脆弱性により、フォークされたコミットがワークフローセキュリティ設定を回避できます。
- [whoAMI: A cloud image name confusion attack](https://securitylabs.datadoghq.com/articles/whoami-a-cloud-image-name-confusion-attack/) - AWS AMIを使うDependency Confusion。
- [WordPress Plugin Confusion: How an update can get you pwned](https://vavkamil.cz/2021/11/25/wordpress-plugin-confusion-update-can-get-you-pwned/) - 未請求のWordPressプラグインは、プラグインディレクトリ経由の乗っ取りに脆弱です。

### 侵害後
- [From Self-Hosted GitHub Runner to Self-Hosted Backdoor](https://www.praetorian.com/blog/self-hosted-github-runners-are-backdoors/) - 攻撃者が誤設定ランナーと弱いPATセキュリティを悪用し、永続化、権限昇格、ラテラルムーブメントを行います。
- [Hacking Terraform State for Privilege Escalation](https://blog.plerion.com/hacking-terraform-state-privilege-escalation/) - Terraform stateファイルの変更により、攻撃者はインフラを削除したりカスタムプロバイダー経由でコードを実行したりできます。
- [Hijacking GitHub runners to compromise the organization](https://www.synacktiv.com/publications/hijacking-github-runners-to-compromise-the-organization) - ubuntu-latestタグを持つGitHubランナーを登録すると、GitHub提供ランナー用だったジョブへアクセスできます。
- [How We Discovered Vulnerabilities in CI/CD Pipelines of Popular Open-Source Projects](https://cycode.com/blog/github-actions-vulnerabilities) - GitHub Actionsで全リポジトリ・組織シークレットを抽出します。
- [Invisible Ghost: Alarming Vulnerability in GitHub Copilot](https://www.apexhq.ai/blog/blog/invisible-ghost-alarming-vulnerability-in-github-copilot/) - 隠されたUnicode文字でGitHub Copilotの提案を操作します。
- [Leaking Secrets From GitHub Actions: Reading Files And Environment Variables, Intercepting Network/Process Communication, Dumping Memory](https://karimrahal.com/2023/01/05/github-actions-leaking-secrets/) - 脆弱なGitHub Actionsワークフローから、ファイル・環境変数の読取り、通信の傍受、ランナーメモリダンプなど複数の方法でシークレットを漏えいさせられます。
- [Living off the pipeline](https://github.com/boostsecurityio/lotp) - 開発ツール（一般にCLI）が持つ、あまり知られていないRCE-by-design機能を棚卸しします。

- [Registering self-hosted CircleCI runner](https://github.com/TupleType/awesome-cicd-attacks/blob/d6fd99e44fee5b88547f2f965ebaab70e48bc4c4/broken_links.md/#httpstwittercomalxk7istatus1524353383976558593t5esgwtom2218sgygy5vdoas19) - 悪意あるランナー上で実行されるジョブのシークレット窃取に利用できます。
- [The GitHub Actions Worm: Compromising GitHub Repositories Through the Actions Dependency Tree](https://www.paloaltonetworks.com/blog/prisma-cloud/github-actions-worm-dependencies/) - 新しいGitHub Actionsワームはアクション依存ツリーを悪用します。攻撃者はアクションを侵害してブランチプッシュまたはタグ上書きで依存アクションを感染させ、マルウェアを再帰的に拡散します。

### 防御回避
- [#redteam tip: want to discretely extract credentials from a CI/CD pipeline?](https://twitter.com/_alxk/status/1442519103885959172?s=21) - ドラフトプルリクエストはリポジトリコントリビューターに通知されませんが、パイプラインは起動します。
- [Abusing Repository Webhooks to Access Internal CI/CD Systems at Scale](https://www.paloaltonetworks.com/blog/prisma-cloud/repository-webhook-abuse-access-ci-cd-systems-at-scale/) - CI/CDパイプラインを起動するリポジトリWebhookを悪用して内部システムへアクセスできます。
- [Bypassing required reviews using GitHub Actions](https://medium.com/cider-sec/bypassing-required-reviews-using-github-actions-6e1b29135cc7) - GitHub Actionsが必須レビューを回避し、保護ブランチへの悪意あるコードプッシュを可能にします。
- [Forging signed commits on GitHub](https://iter.ca/post/gh-sig-pwn/) - GitHub APIのバグにより署名済みコミットを偽造できました。内部Codespaces APIエンドポイントのregex欠陥を悪用して、GitHub Webフローの署名にもかかわらず任意ユーザーが署名したコミットを作成できました。
- [GitHub comments abused to push malware via Microsoft repo URLs](https://www.bleepingcomputer.com/news/security/github-comments-abused-to-push-malware-via-microsoft-repo-urls/) - 隠されたGitHubコメントリンク。
- [How a Single Vulnerability Can Bring Down the JavaScript Ecosystem](https://www.landh.tech/blog/20240603-npm-cache-poisoning/) - パッケージを利用不能にするNPMレジストリへのキャッシュポイズニング攻撃。
- [One Supply Chain Attack to Rule Them All – Poisoning GitHub's Runner Images](https://adnanthekhan.com/2023/12/20/one-supply-chain-attack-to-rule-them-all/) - actions/runner-imagesリポジトリ内の誤設定セルフホストランナーに関わるGitHub Actionsの重大脆弱性により、全GitHub・Azureホストランナーイメージが侵害され得ました。
- [PR sneaking](https://github.com/mortenson/pr-sneaking) - GitHubプルリクエストへ悪意あるコードを忍び込ませる手法。
- [Remove evidence of malicious pull requests on GitHub](https://x.com/adnanthekhan/status/1829116171045474374) - アカウントのメールをブロックリスト登録済みドメインへ変更し、アカウントを自動停止させます。
- [StarJacking – Making Your New Open Source Package Popular in a Snap](https://checkmarx.com/blog/starjacking-making-your-new-open-source-package-popular-in-a-snap/) - StarJackingは、攻撃者が悪意あるオープンソースパッケージを人気があるように見せかける技法です。
- [The massive bug at the heart of the npm ecosystem](https://blog.vlt.sh/blog/the-massive-hole-in-the-npm-ecosystem) - NPM Manifest Confusion。
- [Trojan Source](https://trojansource.codes/) - 論理バグを挿入する代わりに、敵対者はソースコードファイルのエンコーディングを攻撃して脆弱性を注入できます。
- [Unpinnable Actions: How Malicious Code Can Sneak into Your GitHub Actions Workflows](https://www.paloaltonetworks.com/blog/prisma-cloud/unpinnable-actions-github-security/) - GitHub ActionsはコミットSHAに固定していても、Dockerイメージ、ロックされていないパッケージ、外部スクリプトといった可変依存関係経由で悪意あるコードを取り込む可能性があります。
- [Why npm lockfiles can be a security blindspot for injecting malicious modules](https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/) - 大きく機械生成され、徹底的にレビューされることが少ないlockfile（package-lock.jsonまたはyarn.lock）を通じて、悪意あるコードをnpmプロジェクトへ注入できます。
- [Working as unexpected](https://www.chainguard.dev/unchained/working-as-unexpected) - ブランチ保護ルールのパターンに一致するGitHubブランチを作成し、pushで起動するワークフローファイルを置くことで環境シークレットへアクセスします。
- [Zuckerpunch - Abusing Self Hosted GitHub Runners at Facebook](https://marcyoung.us/post/zuckerpunch/) - GitHub PR内のコミットを隠します。

## ツール
- [ADOKit](https://github.com/xforcered/ADOKit) - Azure DevOps Services Attack Toolkit。
- [Gato](https://github.com/praetorian-inc/gato) - GitHub Attack Toolkit。
- [Gato-X](https://github.com/AdnaneKhan/Gato-X) - GitHub Attack Toolkit - Extreme Edition。
- [GH Archive](https://www.gharchive.org/) - GitHubの公開タイムラインを記録・アーカイブし、さらに分析しやすくするプロジェクト。
- [GHTorrent Project](http://ghtorrent-downloads.ewi.tudelft.nl/mysql/) - クエリ可能なGitHub APIデータのオフラインミラー。[チュートリアル](https://ghtorrent.github.io/tutorial/)。
- [git-dumper](https://github.com/arthaud/git-dumper) - WebサイトからGitリポジトリをダンプします。
- [GitFive](https://github.com/mxrch/gitfive) - GitHubプロフィールを調査するOSINTツール。
- [Grep.app](https://grep.app/) - regexを使ってGitHubを検索します。
- [Jenkins Attack Framework](https://github.com/Accenture/jenkins-attack-framework) - ジョブの一覧表示、認証情報ダンプ、コマンド・スクリプト実行、APIトークン管理など、Jenkinsタスクを管理できるツール。
- [Nord Stream](https://github.com/synacktiv/nord-stream) - CI/CD環境内に保存されたシークレットを抽出するツール。
- [pwn_jenkins](https://github.com/gquere/pwn_jenkins) - Jenkinsサーバーを攻撃するためのノート。
- [Secrets Patterns Database](https://github.com/mazen160/secrets-patterns-db) - シークレット、APIキー、パスワード、トークンなどを検出する最大のオープンソースデータベース。
- [Sourcegraph](https://sourcegraph.com/search) - 公開リポジトリ向けWebベースのコード検索・ナビゲーションツール。
- [Token-Spray](https://blog.projectdiscovery.io/nuclei-v2-5-3-release/) - Nucleiを用いてトークン検証を自動化します。
- [zizmor](https://github.com/zizmorcore/zizmor) - GitHub Actionsの静的解析。

## 事例研究
- [10 real-world stories of how we've compromised CI/CD pipelines](https://www.nccgroup.com/research-blog/10-real-world-stories-of-how-we-ve-compromised-cicd-pipelines/) - S3設定ミス、Jenkinsプラグインの欠陥、GitLabランナーの権限昇格、Kubernetes Podアノテーションの脆弱性、侵害された開発者ラップトップの悪用例を含みます。
- [GitHub Actions Attack Diagram](https://github.com/jstawinski/GitHub-Actions-Attack-Diagram) - Black Hat USA 2024とDEF CON 32で発表された公開脆弱性研究を含みます。
- [Playing with Fire – How We Executed a Critical Supply Chain Attack on PyTorch](https://johnstawinski.com/2024/01/11/playing-with-fire-how-we-executed-a-critical-supply-chain-attack-on-pytorch/) - 研究者が悪意あるプルリクエストを通じ、PyTorchの重大な脆弱性を悪用してセルフホストランナー上でコードを実行しました。

## 類似プロジェクト
- [Common Threat Matrix for CI/CD Pipeline](https://github.com/rung/threat-matrix-cicd)
- [Open Software Supply Chain Attack Reference (OSC&R)](https://pbom.dev/)
- [Risk Explorer for Software Supply Chains](https://riskexplorer.endorlabs.com/#/attack-tree)
- [SDLC Infrastructure Threat Framework (SITF)](https://github.com/wiz-sec-public/SITF) - ソフトウェア開発ライフサイクルインフラを標的とする攻撃を分析・防御する包括的フレームワーク。
