---
title: "Awesome Billing"
description: "Billingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-kdeldycke-awesome-billing-readme-md"
---

# Awesome Billing

Billingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [基礎](#basics)
- [価格設定](#pricing)
  - [従量課金](#usage-based-pricing)
  - [サブスクリプションプラン](#subscription-plans)
  - [ハイブリッド](#hybrid)
  - [戦略](#strategy)
  - [市場調査](#market-research)
- [製品カタログ](#product-catalog)
- [計算](#calculator)
- [コスト予測](#cost-forecast)
- [マーケットプレイス](#marketplace)
  - [クラウドリソース](#cloud-resources)
  - [オンライン広告](#online-ads)
- [会計](#accounting)
  - [複式簿記モデル](#double-entry-model)
  - [帳簿管理](#bookkeeping)
  - [ソフトウェア設計と実装](#software-design-and-implementation)
  - [通貨](#currencies)
- [財務](#finance)
- [契約](#contracts)
- [クーポンとバウチャー](#coupons-and-vouchers)
- [税](#taxes)
  - [欧州VAT](#european-vat)
- [請求書](#invoice)
  - [構造](#structure)
  - [完全性](#integrity)
  - [生成ツール](#generators)
  - [抽出ツール](#extractors)
  - [電子請求書](#electronic-invoices)
- [決済](#payments)
  - [領収書](#receipt)
  - [クレジットカード](#credit-cards)
  - [銀行口座](#bank-accounts)
  - [オンライン決済](#online-payments)
- [不正対策](#fraud)
  - [カード](#cards)
  - [信頼スコア](#trust-score)
  - [統計](#statistics)
  - [請求](#billing)
- [UX/UI](#uxui)
- [ビジネスインテリジェンス](#business-intelligence)
  - [指標](#metrics)
  - [顧客生涯価値](#customer-lifetime-value)
  - [データエンジニアリング](#data-engineering)
  - [ツール](#tools)
- [競合分析](#competitive-analysis)
  - [クラウドプロバイダー](#cloud-providers)
- [歴史](#history)
- [ユーモア](#humour)



## 基礎

<img align="right" width="50%" src="./assets/cloud-software-stack-billing.jpg"/>

スタンフォード大学の[クラウドコンピューティング概論](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf)では、プラットフォームのソフトウェア構成を右図のように説明しています →



請求は顧客、製品、事業が交わるエコシステム横断の柱です。[もう一つの柱はアイデンティティとアクセス管理（IAM）です 👤](https://github.com/kdeldycke/awesome-iam/)。



請求・決済システムの全体像と設計上の要点を扱う資料です。

- [5 things I learned while developing a billing system](https://arnon.dk/5-things-i-learned-developing-billing-system/) - すべての請求システムの側面——通貨から請求書まで——について、プランの変更の論理を示す素晴らしい図解を含む、非常にわかりやすい導入。これらのテーマは、下記の専門セクションで詳細に解説されている。

- [Open guide to AWS](https://github.com/open-guides/og-aws#billing-and-cost-management) - *請求とコスト管理* セクションへのリンク。ここでは、クラウドプロバイダーの請求の広範な特徴が詳しく解説されている。

- [Billed for ¥21,120, invoiced at ¥2,112,000 and paid ¥2,112,000](https://xunroll.com/thread/1668082843728367616) - 請求・決済システムの全体像と設計上の要点を扱う資料です。 [Get rid of integers and floats for monetary values](https://xunroll.com/thread/1599113889093890049)

- この分野のソフトウェアエンジニアを採用するには「会計・請求・決済部門をデータエンジニアリングの入口にする」のが一案です（[出典](https://x.com/kdeldycke/status/1422564355799924736)）。

## 価格設定

製品・サービスの価格モデルと収益設計に関する資料です。

- [Don't just roll the dice – Software pricing guide](https://neildavidson.com/downloads/dont-just-roll-the-dice-2.0.0.pdf) - 価格設定スキームの巨大かつ包括なコレクション。その心理的影響と収益モデルへの影響についても詳述されている。

- [Business Model Patterns](https://reasonstreet.co/business-model-library/) - 製品とサービスの販売方法の15通りのリスト。

- [Axial - Business models](https://archive.ph/BFsZ1) - インスピレーションに使える38のモデル。

- [The Network Monetization Map: Aligning Incentives with Revenue](https://web.archive.org/web/20201222120055/https://medium.com/breadcrumb/the-network-monetization-map-aligning-incentives-with-revenue-b73c362d1ad5) - ネットワーク効果に基づく6つの収益化モデル。

- [The 5 Pillars of PriceOps](https://web.archive.org/web/20260124084716/https://priceops.org/) - DevOps運動に影響を受けたマニフェスト。価格設定がもう固定されず、反応的なイテレーションプロセスとして実践され、システムの柔軟な性質として実装される。

- [SaaS pricing explorer](https://saaspricingexplorer.hyperline.co) - インスピレーションに使える1000以上の価格ページのコレクション。

### 従量課金

利用量に基づく計測・価格計算・請求の設計に関する資料・実装です。

- [Credyt](https://credyt.ai/?utm_source=awesome-billing&utm_medium=referral&utm_campaign=awesome-billing-oss-sponsorship) - AI製品向けのリアルタイム収益化インフラ：使用量のメートリング、プリペイド残高からの課金、フロントエンドを書かずにブランド化された顧客ポータルを提供。商業SaaS。

- [Why I Love Usage-Based Pricing](https://www.rdegges.com/2020/the-only-type-of-api-services-ill-use/) - 「この価格モデルを好む最も重要な理由は、顧客とサービスプロバイダーの両方にとって、すべての関係者の利益を最優先に行動を促す点にある。」他にも他の価格モデルの問題点が詳述されている。

- [Use-cases for cloud services](https://news.ycombinator.com/item?id=19830022) - 使用量ベース価格がクラウドサービスにおいてさらに意味を持つ理由：ROIの最適化、定常的なワークロードを伝統的なアーキテクチャに残し、クラウドコンピューティングを弾性かつ実験的なプロジェクトに限定する。

- [Socially Optimal Pricing of Cloud Computing Resources](https://webee.technion.ac.il/people/shimkin/PAPERS/Menache-CloudPricing-Conf2011.pdf) - 「社会的に最適な運営点は一意であり、線形の使用量ベースの料金制度によって維持可能である。」この論文はクラウドリソースに対する使用量ベース価格の正当性を正当化している。

- [A Survey of Profit Optimization Techniques for Cloud Providers](http://www.cs.newpaltz.edu/~lik/publications/Peijin-Cong-ACM-CS-a-2020.pdf) - 「ユーザーのサービス品質の向上戦略がまず議論され、その後にクラウドリソースの価格戦略が収益最大化の観点から提示される。」

- 「請求が意図的に複雑なのではなく、弾力性の対価として複雑になる」（[出典](https://x.com/kdeldycke/status/1214160678363246592)）。従量課金は細かな精度を持つ一方、仕組みを理解する時間を取れない顧客には不満の原因になります。

- [Riemann sum](https://en.wikipedia.org/wiki/Riemann_sum) - 使用量の量化に関する出発点について。

- [Allen's interval algebra](https://en.wikipedia.org/wiki/Allen%27s_interval_algebra) - 実装が難しい従量課金で、時間関係を整理するための区間代数です。明快なスキーマ例は[Stack Overflow question with clean schema](https://web.archive.org/web/20240413010618/https://stackoverflow.com/questions/12069082/allens-interval-algebra-operations-in-sql?rq=1)を参照してください。

- [Reconcile Your Monthly GCP Invoice with BigQuery Billing Export](https://web.archive.org/web/20201107232605/https://medium.com/@lukwam/reconcile-your-monthly-gcp-invoice-with-bigquery-billing-export-b36ae0c961e) - この開発者が支出を追跡しようとする試みの背後には、クラウド請求の困難さがうかがえる。明示的に述べられていないが、クラウドリソースの価格設定は難しいとされ、空間、時間、通貨における量化、グリッド、四捨五入の結果が影響している。

- [AWS EC2 T2 Instances Demystified: Don't Learn The Hard Way](https://roberttisdale.com/aws-ec2-t2-instances-demystified-dont-learn-hard-way/) - 非常に難しいバースト可能なインスタンスの例。そのインスタンスは自らCPU使用量のクレジットを蓄積し、その量を制限する。

- [“Designing billing for a service can be really challenging”](https://news.ycombinator.com/item?id=23536919) - AWS Simple Email Serviceの価格設定設計に関する個人的な体験談。

- [Subscription-based pricing is dead: Smart SaaS companies are shifting to usage-based models](https://techcrunch.com/2021/01/29/subscription-based-pricing-is-dead-smart-saas-companies-are-shifting-to-usage-based-models/) - 使用量ベース価格はより最適かつ公正である。それは「顧客が低コストからスタートでき、開始の摩擦を最小限に抑えながら、長期的に顧客を収益化できる能力を保持する」ことを可能にする。

- [Electropedia: Tariffs for electricity](https://www.electropedia.org/iev/iev.nsf/index?openform=&part=691) - クラウドの前に、もう一つの使用量に基づくリソースが存在した。それは電気。国際電気委員会（IEC）の用語の詳細（および多言語）な分類がここに示されている。

- [Lago](https://github.com/getlago/lago) - 💸 Rubyでオープンソースのメートリングと使用量ベース請求。Lago SASはAGPLコアの上にホスティングされたクラウドとプレミアムオプションを販売している。

- [StripeMeter](https://github.com/geminimir/stripemeter) - 🆓 TypeScriptで書かれたオープンソース、ストリップネイティブな使用量計測。ストリップの請求書との使用量計算を一致させ、「請求書前」の正確な一致を確保し、正確1回処理とリアルタイムコスト予測を実現。

- [CGRateS](https://github.com/cgrates/cgrates) - 🆓 オープンソース、高速（5万以上CPS）、スケーラブル（ロードバランサ＋レプリケーションを含む）リアルタイム請求システム。ISPおよびテレコム事業者向け。Goで書かれた。ベンダー中立、販売のみの商業モデル。

### サブスクリプションプラン

定期契約型の価格・プラン設計に関する資料・実装です。

- [Pricing low-touch SaaS](https://stripe.com/en-in/atlas/guides/saas-pricing) - 「低コストSaaSでは、価格プランは価格グリッドの各列として提示されることが多い。各列はプランに対応し、異なる価格で提供され、機能へのアクセスや使用量の上限など、事業に重要な軸に沿った差異が存在する。」

- [Lotus](https://github.com/uselotus/lotus) - 🆓 MITコアの上にマネージドホスティングを提供するLotus Inc.のみが販売するオープンソースプロジェクト。価格とパッケージのインフラ管理を担う。

- [`f-license`](https://github.com/furkansenharputlu/f-license) - 🆓 Goで書かれたオープンソースライセンスキー生成および検証ツール。単一メンテナーによるプロジェクト。商業提供なし。

### ハイブリッド

複数方式を組み合わせた価格モデルに関する資料です。

- [The Three Part Tariff](https://tomtunguz.com/three-part-tariffs/) - 線形価格を超えて、追加のプラットフォーム手数料や無料プランが価格構造に適切に位置する場合がある。

### 戦略

価格戦略と事業モデルを検討するための資料です。

- 「収益を上げる方法は2つ。まとめて売るか、分けて売るかだ」— [Jim Barksdale](https://hbr.org/podcast/2014/07/marc-andreessen-and-jim-barksdale-on-how-to-make-money.html#:~:text=in%20business%2C%20there%20are%20two%20ways%20to%20make%20money.%20You%20can%20bundle%2C%20or%20you%20can%20unbundle.)。

- [Pricing Psychology](https://www.nickkolenda.com/psychological-pricing-strategies/) - どの数字を使うべきか？どのくらいの範囲にするべきか？丸めればよいのか？このガイドには42のコツが含まれており、最適な価格を選択する手助けとなる。

- [The 7 factors to consider when pricing your startup product](https://tomtunguz.com/how-to-price-your-startups-product/) - 価格設定は、製品価値を強調し、企業のマーケティングメッセージを強調するための攻撃的なツールである。

- [The Anatomy of SaaS Pricing Strategy](https://sbigrowth.com/hubfs/SBI_PI_AnatomyofSaaSPricingStrategy_Handbook.pdf) - SaaS事業の価格設定を製品戦略に基づいて説明する方法。

- [The cup-of-coffee pricing fallacy](https://blog.gingerlime.com/2020/the-cup-of-coffee-pricing-fallacy/) - なぜこのような類推が粗いのかを説明。

- [Changing the Pricing Model](https://monkeynoodle.org/2024/02/10/changing-the-pricing-model/) - 製品のライセンス再設定を行う方法のいくつか。

### 市場調査

価格感応度・需要・収益を調査する手法の資料です。

- [Jeremy Howard - From Predictive Modelling to Optimization](https://youtu.be/vYrWTDxoeGg?t=542) - 「保険業界では、価格が製品である。（…）価格をどう変更すれば、大量の利益を得られるか？」あるいは、顧客の最適価格（結果の提供）を提供する方法（過去のアクチュアリーが採用していたリスク評価のデータ提供）を代替する方法。

- [Gabor–Granger method](https://en.wikipedia.org/wiki/Gabor%E2%80%93Granger_method) - 新製品やサービスの価格を決定するために調査に使用される。その結果から需要曲線と収益曲線を構築できる。

- [Van Westendorp's Price Sensitivity Meter](https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter) - PSMは、消費者の価格好意を決定する市場技術。収益曲線を描くことで、最大収益を達成する価格点を推定できる。

- [Pricing niche products](https://kevinlynagh.com/notes/pricing-niche-products/) - 「単に価格を決めるだけにすると、市場について学べる量が限られるという、最も有力な反論がある。」その後、著者がビックリアワードを用いて価格を発見する。

- [Finding the max revenue price mark for digital products](https://web.archive.org/web/20260213003122/https://medium.com/@hovm/finding-the-max-revenue-price-mark-for-digital-products-24cef24f746d) - 「製品の最適価格を最大収益で提供するには、複数の価格点を実際のテストを行う必要があり、その後収益曲線を再構築し、ピークを特定する。」

- [Personalised pricing and EU law](https://www.econstor.eu/bitstream/10419/205221/1/de-Streel-Jacques.pdf) - EUにおける消費者保護およびデータ保護規則により、一部の価格パーソナライゼーションが禁止されている。

## 製品カタログ

顧客が購入できるサービス、製品、バリエーション、オプション、価格を集約する中央リポジトリです。クラウドサービスのカタログは独自実装が多い一方、既存のPDM（[Product Data Management](https://en.wikipedia.org/wiki/Product_information_management)、PIMとも呼ばれます）が適合する場合もあります。

- [GCP Product Catalog](https://cloud.google.com/blog/products/gcp/introducing-cloud-billing-catalog-api-gcp-pricing-in-real-time) - すべてのGCP SKUがAPIとして提供される。

- [Pimcore](https://github.com/pimcore/pimcore) - 💸 PHP Symfonyで書かれたオープンソースUIおよびデータベース。Pimcore GmbHは、GPL/POCLコアの上にエンタープライズサブスクリプション、PaaS、およびプロプライエタリーモジュールを販売。

## 計算

金額、数量、期間などの請求計算を安全に行うための資料・実装です。

- [Infracost](https://github.com/infracost/infracost) - 💸 Terraformコードから導出されたクラウドコスト見積もりが、リソースがプロビジョニングされる前、ターミナルに分解表示またはプルリクエストでの差分として表示される。Infracost Inc.は、Apache-2.0 CLIの上にホストされたダッシュボード（Infracost Cloud）を販売。

- [Cloudorado](https://www.cloudorado.com) - 💸 ECU（アマゾンのvCPU）をCPUパワーメアス単位として用いた比較マトリクス。クラウドオーラドによって商業用クラウド比較製品として運営されている。

- [EC2Instances.info](https://ec2instances.info) - 💸 アマゾンEC2インスタンスの簡単な比較。ヴァンテージがその商業FinOpsプラットフォームの無料リード生成表面として運営している。

## コスト予測

利用量と料金から将来コストを予測・管理する資料・ツールです。

- [Forecasting: Principles and Practice](https://otexts.com/fpp2/) - 「予測手法についての包括的な紹介であり、各手法について十分な情報を提供して読者に適切に使用できるようにする。」

- [Transforming Financial Forecasting with Data Science and Machine Learning at Uber](https://web.archive.org/web/20221203184815/https://www.uber.com/blog/transforming-financial-forecasting-machine-learning/) - Uberが財務計画プラットフォームにおいてデータサイエンスと機械学習をどのように応用しているかについて述べている。

- [Time Series Prediction - A short introduction for pragmatists](https://www.liip.ch/en/blog/time-series-prediction-a-short-comparison-of-best-practices) - 時系列データがビジネス問題の評価にどのように使われるかについての素晴らしい紹介。

- [`sktime`](https://github.com/alan-turing-institute/sktime) - Alan Turing Instituteが管理する、時系列機械学習向けの無料Pythonライブラリです。 [forecasting tutorial](https://github.com/alan-turing-institute/sktime/blob/master/examples/01_forecasting.ipynb) - [differences between sktime and the Prophet project](https://news.ycombinator.com/item?id=24543861)

- [Darts](https://github.com/unit8co/darts) - Unit8 SAが管理する、時系列の予測と異常検知を扱いやすくする無料Pythonライブラリです。[Prophet](https://facebook.github.io/prophet/)を含む多数のモデルを統合しますが、[models in Darts expects](https://news.ycombinator.com/item?id=37665435)のとおり、データが非常に規則的な間隔であることなど多くの前提を置きます。

- [Komiser](https://github.com/mlabouardy/komiser) - 💸 バudgetを下回るためのオープンソースツール。隠れたコストを発見し、支出の増加を監視し、カスタム推奨に基づいて影響力のある変更を行う。タイルワードンはその上にホスティングされたSaaSを販売している。

- [GCP Cost Forecast](https://cloud.google.com//billing/docs/how-to/reports#cost-forecast) - リソース消費の消費傾向線の例。

- [How to save money on your AWS bill](https://threadreaderapp.com/thread/1091041507342086144.html) - 「最も大きなコスト削減の方法は：1. 使わないものをオフにする；2. スポットインスタンスを使う；3. リザーブドインスタンスを使う。」

## マーケットプレイス

複数の売り手・買い手・決済を扱うマーケットプレイス設計の資料です。

- [Customized Regression Model for Airbnb Dynamic Pricing](https://www.kdd.org/kdd2018/accepted-papers/view/customized-regression-model-for-airbnb-dynamic-pricing) - この論文はAirbnbが採用した価格戦略モデルについて述べている。

- [Papers we love: Auctions and Bidding](https://github.com/papers-we-love/papers-we-love/tree/master/economics#auctions-and-bidding) - 出資とオークションに関する論文の集まり。

- [Vickrey auction](https://en.wikipedia.org/wiki/Vickrey_auction) - 複数の売り手・買い手・決済を扱うマーケットプレイス設計の資料です。 [HN comment](https://news.ycombinator.com/item?id=19145391)

- [19 Tactics to Solve the Chicken-or-Egg Problem and Grow Your Marketplace](https://www.nfx.com/post/19-marketplace-tactics-for-overcoming-the-chicken-or-egg-problem) - 「供給か需要か、どちらが先？鶏か卵か？」

- マーケットプレイス事業の立ち上げと拡大: [市場範囲を絞る](https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace)、注力する側を決める、初期供給を作る、初期需要を作る、という4部構成の実務者インタビューです。

- [A Rake Too Far: Optimal Platform Pricing Strategy](https://abovethecrowd.com/2013/04/18/a-rake-too-far-optimal-platformpricing-strategy/) - 少しの語彙：「カジノでは、*rake* という用語は、ポーカーのゲームを運営するためのハウスが得る手数料を指す。（…）カジノでは*rake*という用語を使用するが、興味深い語彙の多様性が存在し、それらはすべて同じことを表している——サービスを運営する企業が少しの収益を保有すること。」

### クラウドリソース

クラウド資源の価格・請求・比較を扱うサービスです。

- [Incentive Engineering for Computational Resource Management](https://papers.agoric.com/assets/pdf/papers/incentive-engineering-for-computational-resource-management.pdf) - 「プロセッサ時間とストレージの割り当てメカニズムについて、プログラミング実務と市場メカニズムの両方に適合するものについて探求する。」

- [Pricing of Service in Clouds: Optimal Response and Strategic Interactions](http://www.sigmetrics.org/mama/2013/abstracts2013/UrgaonkarEtAl.pdf) - 「消費者がどのように需要を調整すべきか、その利益を最適化するか？（…）提供者と消費者がどのように特定の価格構造を交渉すべきか？」非線形モデル、階層価格、弾性需要、消費者および提供者の戦略をカバー。

- [History of Spot Instances](https://spot.rackspace.com/blogs/history-of-spot-instances) - AWSの元のオークションベース市場（2009-2017）から、現在の主要クラウドプロバイダーにおけるプロバイダー管理価格へと至るまで。透明なオークションが暗黙のアルゴリズムに置き換わった過程を記述している。

- [Dynamic Cloud Pricing for Revenue Maximization](https://henryhxu.github.io/share/hxu-tcc2013.pdf) - 「アマゾンのスポット価格は市場の需要と供給に基づいて設定されない。むしろ、価格はほとんどが非常に狭い範囲内で振動しており、これはある価格アルゴリズムの予め設定された保留価格の結果である可能性が高い。」

- [Usage Patterns and the Economics of the Public Cloud](https://mc4f.ee/Papers/PDF/EconPublicCloud.pdf) - 「我々はクラウドコンピューティングにおける需要と供給の経済学を検討する。（…）これらの結果は、時間変動の必要性にもかかわらず、現在の固定価格がなぜ成立しているかを説明している。実際にCPU使用率を検討することで、将来の視点を得ることができる。（…）需要の変動は、ホテル、電力、航空業界の3つの古典的産業と同等であり、動的価格は効率性にとって極めて重要である。」

- [Maximizing Profit of Cloud Brokers under Quantized Billing Cycles: a Dynamic Pricing Strategy based on Ski-Rental Problem](https://arxiv.org/pdf/1507.02545.pdf) - 「我々のアルゴリズムの鍵となる考えは、価格信号を用いてユーザーの需要を調整することである。このようなアルゴリズムは、タスクをキューから押し出してしまうため、ユーザーに悪影響を与えると主張できる。」

- [Present or Future: Optimal Pricing for Spot Instances](https://web.archive.org/web/20150708151037/http://www.temple.edu/cis/icdcs2013/data/5000a410.pdf) - 「スポットリソースの価格ポリシーは慎重に設計され、現在および将来の影響を考慮すべきである。」

- 「支払うのは常に入札額ではなくスポット市場価格である」（[出典](https://news.ycombinator.com/item?id=20347716)）という入札方式の簡潔な説明です。

- [Deconstructing Amazon EC2 Spot Instance Pricing](https://dants.github.io/papers/Spotprice11CloudCom.pdf) - 「大量の余剰容量を保有するクラウドプロバイダーは、顧客にそれを購入させるインセンティブを提供しなければ、損失を被る。アマゾンは、顧客が余剰容量を競い合って購入できるようにし、その競い合った価格が周期的に変化するスポット価格を上回る場合に、リソースを提供することで、この課題を最初に解決した。」

- [GCP Preemptible VMs vs AWS Spot Instances](https://news.ycombinator.com/item?id=9564287) - 「Googleの価格は固定されているが、AWSは市場モデルを採用している」

- 「3か月のスポット価格履歴からコストを見積もり、余剰容量のあるAZとインスタンスタイプの組み合わせを探す」（[出典](https://news.ycombinator.com/item?id=16071684)）。スポット市場の透明性を求める利用者の例です。

- [The Eternal Cost Savings Of Netflix's Internal Spot Market](http://highscalability.com/blog/2017/12/4/the-eternal-cost-savings-of-netflixs-internal-spot-market.html) - クラウド資源の価格・請求・比較を扱うサービスです。 [creating an internal secondary market](https://web.archive.org/web/20200101000000/https://medium.com/netflix-techblog/creating-your-own-ec2-spot-market-6dd001875f5)

### オンライン広告

オンライン広告の入札・価格・収益設計に関する資料です。

- [RTB Budget Pacing Summarized](https://github.com/PragmaticLab/RTB_Budget_Pacing_Summarized) - Turn Inc.、Yahoo、LinkedInの研究論文からまとめられた、RTBの予算管理技術に関する読書リスト。静的リソース：古いが、文献への入り口としてまだ有用な項目。

- [Samsung's online ads platform/exchange war story](https://github.com/eloraiby/fs-pacer/blob/master/fs-pacer.md) - 500万件の出价リクエスト/秒、最大2ミリ秒の応答時間に対応するスケーリング方法。

- [`RTB4Free`](https://github.com/RTB4FREE) - 🆓 Apache-2.0準拠のOpenRTB 2.0対応の出价者および需要側プラットフォーム（DSP）。2022年末以降、ほとんど活動が停止しているが、この分野における唯一のオープンソースDSPの参考実装。

## 会計

- 「会計部門は通常過去を、財務部門は通常将来を見る」（[出典](https://news.ycombinator.com/item?id=25366184)）。

### 複式簿記モデル

複式簿記と台帳モデルの設計・実装に関する資料です。

- [Accounting for Developers 101](https://docs.google.com/document/d/1HDLRa6vKpclO1JtxbGB5NeAYWf8cf1UMGy22o8OZZq4) - 会計の歴史と用語に関する一般解説。

- [Accounting for Computer Scientists](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html) - お金の流れをグラフとして表現し、それらの動きが小規模企業の財務諸表にどのように現れるかを説明。

- [The Double-Entry Counting Method](https://web.archive.org/web/20260306094438/https://beancount.github.io/docs/the_double_entry_counting_method.html) - 上記と同じ前提だが、報告および実装の詳細を追加しており、非常に詳細かつ包括。

- [Accounting Memento For Entrepreneurs (US GAAP)](https://www.odoo.com/documentation/functional/accounting.html) - 会計概念を体験できるインタラクティブフォーム。

### 帳簿管理

取引・残高・仕訳を管理する帳簿システムです。

- [So, you want to learn Bookkeeping!](https://www.dwmbeancounter.com/BCTutorials/BCIntro/index.html) - 事業の日々の運営として、取引の記録と維持に焦点を当てる。

- [Reconciliation: A game designed to frustrate the player](https://bam.kalzumeus.com/archive/a-game-that-intentionally-frustrates-the-player/) - 「対決は、事業間のお金の流れを伝達するパイプラインに構造化されたデータがほとんどないため、ほぼ完全に生じるビジネスプロセスである」という。このプロセスを効率化するためのいくつかのハックがある。たとえば、任意の割引を加えることで、一意の小数点を生成する、または複数の仮想銀行口座を設定してプロキシとして使う。

- [Plain text accounting tools](https://plaintextaccounting.org/#software) - オープンソースの個人財務プロジェクトの詳細リスト。これは、対入金会計および書記にインスピレーションを得る上で非常に良い可能性がある。

- 🆓 A list of graphical accounting tools, all community-maintained OSS without paid editions: [GNUCash](https://gnucash.org) (GTK+), [Grisbi](https://grisbi.org) (C), [Firefly III](https://firefly-iii.org) (PHP).

- [GnuCash Tutorial and Concepts Guide](https://www.gnucash.org/docs/v2.4/C/gnucash-guide/) - GnuCashを用いた個人財務追跡に関する完全なチュートリアル。

- [Frappe Books](https://github.com/frappe/books) - 🆓 小規模事業者やフリーランス向けの無料デスクトップ会計ソフトウェア。有償版は存在しない。

- [Luca](https://github.com/brandon-rhodes/luca) - 🆓 YAML形式の会計データとJSON形式の税務フォーム。個人で維持されている。

- [Go DB Ledger](https://github.com/darcys22/godbledger) - 🆓 二重記録会計の取引記録をプログラム可能にするオープンソース会計システム。

- [Formance Ledger](https://github.com/formancehq/ledger) - 💸 MITライセンスのプログラム可能な二重記録帳簿。Numscript DSL、複数通貨、REST API、Dockerデプロイメントでスタンドアローン使用可能。Formanceは企業向けの追加機能（ウォレット、フロー、対決、事前構築された接続、SSO、RBAC、ログの確認）を販売しているが、その核心の帳簿はオープンソースで完全に機能している。

### ソフトウェア設計と実装

会計・台帳をソフトウェアとして実装するための資料です。

- [Moonpig: a billing system that doesn't suck](https://blog.plover.com/prog/Moonpig.html) - 請求および会計システムの設計決定。重要なポイント：一部の企業はまだチェックで支払いを行っている；浮動小数点を用いない；複雑な顧客ワークフロー；日付および時刻の問題；変更可能なデータ。

- [Books, an immutable double-entry accounting database service](https://developer.squareup.com/blog/books-an-immutable-double-entry-accounting-database-service/) - Squareが内部でGoogle Spannerを用いて運用する二重記録会計システムの基本データモデルを説明。

- [TigerBeetle](https://github.com/tigerbeetle/tigerbeetle) - 会計・台帳をソフトウェアとして実装するための資料です。 [tested on Jepsen](https://jepsen.io/analyses/tigerbeetle-0.16.11)

- [Django Hordak](https://github.com/adamcharnock/django-hordak) - 🆓 Django向けの二重記録会計システムの核機能。単一メンテナーによるMITライセンスのライブラリ。

- [Managed accounts for Django](https://github.com/django-oscar/django-oscar-accounts) - 🆓 「管理アカウント」とは、借方および貸方で引き落とし・貸し出し可能な資金の割り当てである。コミュニティメンテナのDjango-oscar拡張。

- [Triple‐entry accounting with Blockchain: How far have we come?](https://sci-hub.st/10.1111/acfi.12556) - 「トリプルエントリーアカウンティングは、現在のアカウンティングシステムが抱える信頼性と透明性の問題を、新しいかつ効率的な方法で解決するものである。ブロックチェーンと組み合わせたトリプルエントリーアカウンティングが適切に実装されれば、アカウンティングの基礎を根本的に改善できる。」

### 通貨

通貨コード、端数、換算、金額表現に関する資料・ライブラリです。

- [Tutorial on multiple currency accounting](https://www.mathstat.dal.ca/~selinger/accounting/tutorial.html) - 通貨コード、端数、換算、金額表現に関する資料・ライブラリです。

## 財務

企業財務、資金管理、財務データに関する資料・ツールです。



- [Accounts Demystified: The Astonishingly Simple Guide To Accounting](https://openlibrary.org/isbn/0273744704) - 企業の財務パフォーマンスを分析・監視する方法を学べる。

- [The Games People Play With Cash Flow](https://commoncog.com/blog/cash-flow-games/) - 「マローンは新しいアカウンティングメトリクスを創出、それが『利息・償却・税金を引いた利益』（EBITDA）と呼ばれた。」これはケーブル会社のCEOがキャッシュフローを理解する際に、不動産業界のように使った例である。この例から始まり、SaaSモデルにおける他のキャッシュフローの取り組みについて説明している。

- [Financial Intelligence for Entrepreneurs: What You Really Need to Know About the Numbers](https://openlibrary.org/isbn/1422119157) - 財務データを用いてビジネス上のより良い意思決定を行うための使い方を、完全に理解できる。

- [What is FinOps](https://www.finops.org/introduction/what-is-finops/) - テックファイナンスとビジネスリーダーシップチームが、クラウド運用と管理の共通言語とプロセスを共有できるフレームワーク。

- [Algebraic Models for Accounting Systems](https://openlibrary.org/isbn/9814287113) - 抽象代数学の高度な応用がアカウンティングシステムの分析に用いられる。

## 契約

契約、利用条件、契約ライフサイクルに関する資料・ツールです。

- [Is this what Enterprise mean?](https://threadreaderapp.com/thread/1389946268764475394.html) - 契約、利用条件、契約ライフサイクルに関する資料・ツールです。 [on bulk license purchase](https://news.ycombinator.com/item?id=27053246)

- [Entitlements untangled: The modern way to software monetization](https://www.stigg.io/blog-posts/entitlements-untangled-the-modern-way-to-software-monetization) - 「エンティティの概念は、さまざまな製品バリエーション（＝価格プランまたはパッケージ）における機能アクセス設定をカバーし、製品の販売方法とそのバリエーションでの振る舞いの間のギャップを埋める。要するに、エンティティとは、顧客（支払い対象か、非支払い対象かを問わず）がソフトウェアアプリケーションに対して行える権限のセットである。」

- [CUDs vs. Commit Contracts vs. SUDs in Google Cloud](https://66degrees.com/insights/comparing-cuds-suds-and-commits-in-google-cloud) - GCPにおけるさまざまな種類の割引と使用コミットメントの違いについて説明。

- [Quantity discounts on a virtual good: The results of a massive pricing experiment](https://sci-hub.st/https://www.pnas.org/doi/pdf/10.1073/pnas.1510501113) - 「大規模な購入に対して9％から70％の価格削減を導入した結果、売上に対して驚くほど小さな影響が見られた（正の方向または負の方向）。」割引がプレースボーであり、業界でまだ広く使われているなら、おそらく大規模顧客を引きつけるためのマーケティングのトリックなのかもしれない。

- 「以前は一括予算を渡し、尽きるまでGoogle Adsを運用できたが、今は違う」（[出典](https://news.ycombinator.com/item?id=36325785)）。顧客の予想外の請求を抑える、繰越付き月次上限の考え方を説明しています。

## クーポンとバウチャー

- [Raising Prices is Hard](https://www.backblaze.com/blog/raising-prices-is-hard/) - Backblazeがメインサービスの価格引き上げに関するポストマートム。彼らはクレジット制度に基づく拡張プログラムを構築したかったが、これは少数の最上級エンジニアにとってのフルタイム業務となり、6か月間のプロジェクトとなった。

- [Details on Expiring DigitalOcean Credits](https://blog.digitalocean.com/details-on-expiring-digitalocean-credits/) - クレジットに期限を設ける必要があるのは、未使用のクレジットがバランスシート上に負債として計上されるためである。

- [Hacking Scooters: How I Created \$100k Worth Of Free Rides](https://fant.io/p/hacking-voi/) - プロモコードが無制限無料利用を得るために悪用されるケースの警告。



- [China’s Pinduoduo reports theft of online discount vouchers to police](https://web.archive.org/web/20230404113232/https://www.reuters.com/article/us-pinduoduo-china/chinas-pinduoduo-reports-theft-of-online-discount-vouchers-to-police-idUSKCN1PE05J) - 次世代の詐欺：「オンラインの集団が自社プラットフォームのルールの隙間を活かし、数十百万元分の割引券を『盗む』ことになった。」

- [Council Directive 2016/1065 as regards the treatment of vouchers](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016L1065) - 割引券が関与する場合のVATの適用に関するヨーロッパの指導。

- [The coupon code is a slap in the face](https://justinjackson.ca/the-coupon-code-is-a-slap-in-the-face) - ユーザーがクーポンフィールドに空欄を入力しているのにクーポンを持たない状況の負の影響について説明。記事の最後に、この事例を裏付ける研究結果を示す更新がある。

## 税

- [2017 Tax Software Developer's Guides](https://web.archive.org/web/20240227073911/https://www.mass.gov/lists/2017-tax-software-developers-guides) - 開発者向けの税金コードをテストするためのテストケースの一覧。

- [{Digital,Cloud,Electronic,Online} Services VAT Rate Database](https://github.com/kdeldycke/vat-rates) - 🆓 国ごとの居住地（包括地域例外）ごとに、外国のオンラインサービスに適用されるVAT率を統合。

- [Global VAT & GST on digital services](https://www.avalara.com/vatlive/en/global-vat-gst-on-e-services.html) - 外国のオンラインサービスを提供する際に、税金の適用が必要な国の一覧。

- 「英国のスーパーマーケットはバックエンドのカード処理手数料を請求し、会計価格から同額を差し引く」（[出典](https://news.ycombinator.com/item?id=22047028)）。これにより[処理手数料のVATを仕入税額として控除](https://www.gov.uk/guidance/vat-guide-notice-700#section4)できます。

- [Streamlined Sales Tax Governing Board](https://www.streamlinedsalestax.org/about-us/about-sstgb) - 米国における複数州の取り組みで、販売税の会計と収集を自動化・標準化するもの。

### 欧州VAT

- [How to correctly setup SaaS subscriptions to charge VAT in Europe](https://web.archive.org/web/20260220184109/https://medium.com/slight-pause/how-to-setup-saas-subscriptions-correctly-to-charge-vat-in-europe-d75d857b5d01) - 「単純にStripeの統合をセットアップして進めるだけだと考えているなら、あなたは非常に誤りである。」



- [Council Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L:2006:347:FULL) - ヨーロッパ連合が定めた共通消費税システムに関する参照資料



- [What does the "Reverse Charge" refer to?](https://news.ycombinator.com/item?id=8767388) - 答え：企業が消費税の処理責任を顧客に移すような規定

## 請求書

請求書のデータモデル、生成、保存、交換に関する資料・実装です。

- [On GCP invoiced billing](https://news.ycombinator.com/item?id=17517479) - サービス利用後に請求書を発行して支払うB2B向けの[Invoiced billing](https://cloud.google.com/billing/docs/how-to/invoiced-billing)を扱います。GCPでの設定が煩雑なのは、高コストな不正利用を抑えるためと推測されています。

### 構造



- [Content of EU invoices](https://web.archive.org/web/20260128155309/https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AL%3A2006%3A347%3AFULL) - 請求書の項目・データ構造に関する仕様・資料です。



### 完全性

請求書の真正性・改ざん防止・検証に関する資料です。

- [Digital signatures: how Sleek leverages Cloud HSM to guarantee the integrity of legal documents](https://web.archive.org/web/20260113213039/https://medium.com/google-developers/digital-signatures-how-sleek-leverages-cloud-hsm-to-guarantee-the-integrity-of-legal-documents-a7bd3b82faf6) - GCPのHSMを活用して、文書にデジタル署名を行い、不変な審査履歴を提供する素晴らしい方法。請求書や契約書にも適用可能。

- [OpenTimestamps](https://opentimestamps.org) - 上記のソリューションを越えて、ビットコインのブロックチェーンに直接不変な文書をタイムスタンプを付加する。

- [Credit note](https://en.wikipedia.org/wiki/Credit_note) - 請求書は不変であるため、完全または部分的にキャンセルするには、クレジットノートを作成するしかない。

### 生成ツール

- [Invoice Builder](https://github.com/piratuks/invoice-builder) - 🆓 オフライン優先のデスクトップアプリで、請求書や見積もりを作成・管理・PDFにエクスポートし、すべてのデータを自ら所有するローカルデータベースに保存。

- [InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) - 🆓 自前でホストできるオープンソースアプリで、請求書、顧客、支払いを管理。コミュニティプロジェクトであり、有償版は存在しない。

- [klirr](https://github.com/sajjon/klirr) - 🆓 保守不要なオープンソースCLIツールで、サービスや費用の請求書を美しく生成。

- [InvoiceGenerator](https://github.com/by-cx/InvoiceGenerator) - 🆓 簡単な請求書を生成するPythonライブラリ。

- [microinvoice](https://github.com/baptistejamin/node-microinvoice) - 🆓 PDF請求書を生成する高速Node.jsライブラリ（PDFKitを使用）。ヘッドレスブラウザは不要。

- [Ruby Invoicing Framework](https://github.com/code-mancers/invoicing) - 🆓 請求書の生成と表示（商業用Railsアプリに最適）。柔軟なビジネスロジックを提供し、税務処理、手数料計算などにツールを備える。

### 抽出ツール

- [InvoiceNet](https://github.com/naiveHobo/InvoiceNet) - 請求書から構造化データを抽出するツールです。

### 電子請求書

- [Invoice Security Vulnerabilities](https://invoice.secvuln.info) - ヨーロッパ連合がXML形式で導入した「標準」だが、そのセットにはセキュリティ上の脆弱性が含まれる。

- [EU eInvoicing](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+HUB) - 電子請求書に関するヨーロッパ標準。

- [Factur-X](https://github.com/akretion/factur-x) - 🆓 フランスおよびドイツの電子請求書標準をサポートするPythonライブラのライブラリ。

- [Universal Business Language](https://en.wikipedia.org/wiki/Universal_Business_Language) - ほとんどの請求書ソフトウェアは、データ転送用のUBLドキュメント（XML）を読み書きできる。

- [GOBL](https://github.com/invopop/gobl) - 💸 JSON Schema、オープンソースGoライブラリ、グローバル税データベース、変換ツールすべてを一括提供。Invopopは、オープン仕様の上に管理型電子請求書SaaSを販売。

## 決済

- [The Best Payment Gateway for Startups](https://web.archive.org/web/20230204235716/http://aynuriev.com/best-payment-gateway-startups/) - トップの決済プロバイダーのベンチマーク、その価格とモデル。

- [Avoiding Double Payments in a Distributed Payments System](https://web.archive.org/web/20260516074518/https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb) - RDBMSは銀行の取引処理に特化して構築されたものであり、それによりノード・データベースが登場し、重複支出を避けるためにシステムを慎重に設計する必要が生じた。

- [Monzo's bank transfers post-mortem](https://monzo.com/blog/2019/06/20/why-bank-transfers-failed-on-30th-may-2019/) - あるいは、ゲートウェイプロバイダーの障害に備え、対応する必要がある理由。

- [How to Build an Insurance Company](https://www.moderntreasury.com/journal/how-to-build-an-insurance-company) - 決済運用アーキテクチャの重要性。

- [EU's Late Payment Directive](https://single-market-economy.ec.europa.eu/smes/sme-strategy/late-payment-directive_en) - ヨーロッパにおける遅延支払いに対する適用手数料に関する規則

- [High failure rate of Point Of Sale devices in the upper Midwest](https://news.ycombinator.com/item?id=20043944) - 根本原因は、低湿度の空気中に多くのウールを着用している人々が、大量の静電気を発生させることにある

- 開発者視点でACHの仕組みを解説する連載: [第1部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-1-339d3e7bea1)、[第2部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2-7a890638c4dd)、[第3部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-3-cd98728cf31f)、[第4部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-4-718a48cb8d2c)、[第5部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-5-1d998bbcd82c)。

- [Handling system failures during payment communication](https://blogs.dropbox.com/tech/2017/09/handling-system-failures-during-payment-communication/) - Dropboxが信頼できない支払い提供者に対応する試み

- [Why was I charged?](https://wpchrg.wordpress.com) - ユーザーからの支払いに関する連続的な不満の流れの中、WordPressは顧客が予期しない取引を理解できるように、専用のサブドメインを設けた。そのポイントは、このURLを銀行の明細に直接記載することだった

- [Hyperswitch](https://github.com/juspay/hyperswitch) - 💸 支払い処理用オープンソースバックエンド。JuspayはHyperswitch Cloudおよび自前ホスト型エンタープライズ版を販売しており、オープンソース版は90以上のコンネクタ、vault、ルーティング、3DS、および詐欺オーケストレーションを備え、機能的に完全である

- [Polar](https://github.com/polarsource/polar) - 💸 SaaSおよびデジタル製品の販売を可能にするオープンソースモニタリングプラットフォーム。Polar Software Inc.は、ホストされたpolar.shサービスを事業者として運営し、各取引の一部を収益化するための請求、売上税およびVATの納付を担当；自前ホスト可能なオープンソース版は、あなたのストリートアカウントの上にチェックアウト、サブスクリプション、使用量計測、ライセンスキーを含む全スタックを提供する

- [moov](https://github.com/moov-io) - 支払いの受付、処理、照合を実装するための資料・サービスです。 [`moov-io/ach`](https://github.com/moov-io/ach) - [`iso8583`](https://github.com/moov-io/iso8583) - [`watchman`](https://github.com/moov-io/watchman)

- [Fintech Open Source Foundation](https://github.com/finos) - 🆓 フィナンシャルサービス向けオープンソースプロジェクトをホスティングするLinux Foundationプロジェクト

### 領収書

支払いを証明する領収書の設計・生成に関する資料です。

- [The humble receipt gets a brilliant redesign](https://susielu.com/data-viz/reviziting-the-receipt) - Netflixのデータエンジニアが領収書を再確認した際

- [The long, long history of long, long CVS receipts](https://www.vox.com/the-goods/2018/10/10/17956950/why-are-cvs-pharmacy-receipts-so-long) - 「CVSは他の薬局と似たような薬局だが、重要な違いがある。それは領収書が非常に長いことである。」

### クレジットカード

カード決済の処理・規格・安全性に関する資料です。

- ['Is that even legal?': Companies may be sharing new credit or debit card information without you knowing](https://www.cbc.ca/news/business/banking-information-shared-with-third-parties-1.5102931) - 一部のクレジットおよびデビットカード会社は、「更新サービス」という機能を提供しており、新しいアカウント番号や有効期限日を販売業者に共有できる。Visaの実装は [VAU](https://developer.visa.com/capabilities/vau) であり、マスターカードの実装は [ABU](https://developer.mastercard.com/product/automatic-billing-updater-abu/) である

- [Strong Customer Authentication](https://stripe.com/guides/strong-customer-authentication) - [Payment Services Directive](https://en.wikipedia.org/wiki/Payment_Services_Directive) 2の説明

- [Address Verification System](https://en.wikipedia.org/wiki/Address_Verification_System) - 顧客の請求住所とクレジットカードに関連付けられた住所の一致を確認するシステム

### 銀行口座

銀行口座、振込、口座識別子に関する資料・サービスです。

- [A (shallow) dive into the American banking system](https://blog.yossarian.net/2019/12/25/A-shallow-dive-into-the-American-banking-system) - ルーティング可能な口座の一般的なケースに焦点を当てた、雑多なノートの集まり、つまり現金口座および貯金口座

- [Open IBAN](https://openiban.com) - 🆓 フリーアクセスかつ公開のIBAN検証および計算ウェブサービス

- [Swift Codes](https://bank.codes/swift-code/) - Swift / BICコードは個人使用のみ

- [Swift Codes Repository](https://github.com/PeterNotenboom/SwiftCodes) - 🆓 世界中の銀行のSwift/BICコードを収集した静的JSONデータセット。上記サイトからスクレイピングされたもので、2019年に最終更新されたが、まだ最も大きな無料リファレンスであり、Swiftコードはゆっくりと変化するため、データは広範に利用可能である

- [EPC QR code](https://en.wikipedia.org/wiki/EPC_QR_code) - EUがSEPAを通じて銀行口座間の資金移動に使用するQRコードの標準

### オンライン決済

オンライン決済サービス・プロトコル・統合に関する資料です。

- [UPI 101: The Basics](https://blog.setu.co/articles/upi-101-the-basics) - 「この記事では、インドの統一決済インターフェースについて学びます。これは4年前に導入された決済スキームで、インドのデジタル決済の40〜45％を占めています。」

- [20 years of payment processing problems](https://kaimi.io/en/2022/07/20-years-of-payment-processing-problems-en/) - 過去20年間の支払いAPIに関するすべての問題の大きなコレクション。この記事で暴露された問題が無視されれば、最終的に不正に使われるお金になる



- [The untold story of Stripe](https://www.wired.co.uk/article/stripe-payments-apple-amazon-facebook) - 「ここでは、売上高が一定水準に達すると、PayPalが自動的に事業者に対して21日から60日間の回転予備金を設けることになる。つまり、企業の売上高の最大30％が最大2ヶ月間ロックされてしまう。」

- [Idempotency in the context of payments](https://developers.google.com/standard-payments/reference/idempotency) - 「自己一致性（Idempotency）は、競合状態を防ぐ。自己一致性とは、同じクライアントから送られた複数の同一のリクエストが、最終的な状態に異なる結果をもたらさないという意味である。」

- [Optimizing payments with machine learning](https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning) - ハードコーディングされたビジネスルールを機械学習で置き換えることで、従来の決済フローを再構築し、決済失敗やリトライループを微調整することで、チャージの成功確率を高める方法を説明。

## 不正対策

決済・請求における不正検知と損失防止の資料・ツールです。

- [Detecting fraudulent activity in a cloud using privacy-friendly data aggregates](https://arxiv.org/pdf/1411.6721v1.pdf) - 非侵襲的かつプライバシーに配慮したデータ（請求データ）を用いて、不正行為（DDoS攻撃、ビットコインマイニングなど）を検出する方法について述べる。



- [Awesome List of IAM: Fraud links](https://github.com/kdeldycke/awesome-iam#fraud) - 私たちの姉妹リポジトリに含まれる、ユーザーアカウントに関する不正管理に関するセクション。



- [Driving Global Fraud Losses Down While Empowering Business Growth](https://youtu.be/yJKWpTBVTiI?t=60) - Uber Eatsの講演では、最大の決済処理業者から「成長する企業において損失率が低下するケースは業界では非常に稀である」という事実を学ぶ。また、不正行為は、非消費品の商品に対するチャージバック、プロモーションの不当利用、返金など、さまざまな形をとる。

- [KYC and AML: beyond the acronyms](https://www.bitsaboutmoney.com/archive/kyc-and-aml-beyond-the-acronyms/) - KYC（顧客識別）は、リスクを低減するための確率的プロセスであるため、やや曖昧で複雑である。

- [Awesome Fraud Detection Research Papers](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers) - さまざまな不正行為（クレジットカード、決済取引、ローン、関税検査、資金洗浄ネットワークなど）に関する、複数の会議から出された論文を紹介。

- [Tazama](https://github.com/tazama-lf) - 🆓 Tazama Linux Foundationプロジェクトが運営する、リアルタイム取引監視ソフトウェア（不正および資金洗浄検出用）。これはルールを定義し、その重みを設定し、取引に適用するエンジンに過ぎず、決済や金融取引に特化した内容は一切ない。

- [Mojaloop Fraud Risk Management](https://github.com/mojaloop/fraud_risk_management/tree/master/typology-214/src/rules) - 🆓 Mojaloop Foundationから提供されたAMLルールの実装例：取引のミラーリング（金額一致範囲90～100％）、多層の受取人グラフの探索による層構造検出、アカウントの休眠状態の再活性化、大額取引の送金者、新規受取人送金など。リポジトリはアーカイブされているが、ルールは静的で、OSSにおいて稀に見られる参考資料である。

### カード

カード不正、チャージバック、リスク管理に関する資料です。

- [Reproducible Machine Learning for Credit Card Fraud detection](https://fraud-detection-handbook.github.io/fraud-detection-handbook/) - 取引におけるパターンを特定するための実用的なハンドブック。

- [How I Stopped a Credit Card Thief From Ripping Off 3,537 People – and Saved Our Nonprofit in the Process](https://www.freecodecamp.org/news/stopping-credit-card-fraud-and-saving-our-nonprofit/) - 「カードテスト」と呼ばれる不正手法について説明。大量の盗難カードがAPIの有効性を検証するためのバッチ処理を行う。

- [How Candy Japan got credit card fraud somewhat under control](https://www.candyjapan.com/behind-the-scenes/how-i-got-credit-card-fraud-somewhat-under-control) - 提案は、 [warning signals](https://www.candyjapan.com/behind-the-scenes/fraudulent-transaction-warning-signs) に示されたように、どの注文が不正であるかを予測するための推測、または不正者にとって困難な環境を構築するための対策に含まれる。

- [Five Fun Fraud Facts](https://web.archive.org/web/20220327085654/https://blog.sift.com/2013/five-ecommerce-fraud-facts/) - もう一つの、機械学習システムに供給できる小さな特徴のコレクション。HNのコメントでも [more qualifying signals](https://news.ycombinator.com/item?id=6376350) および [derived geodata on the transaction](https://news.ycombinator.com/item?id=6376221) が明らかになった。

- [Credit Card Fraud Detection using Autoencoders in Keras](https://web.archive.org/web/20200101000000/https://medium.com/@curiousily/credit-card-fraud-detection-using-autoencoders-in-keras-tensorflow-for-hackers-part-vii-20e0c85301bd) - 異常検知を用いて、怪しいカード取引を検出するためのチュートリアル。

- [Training an ML model to score chargebacks](https://threadreaderapp.com/thread/1315452323330621440.html) - プラットフォームのネットワーク効果の例として、紛争の勝敗確率を予測する能力を示す。

- [How credit card thieves use free-to-play apps to launder gains](https://kromtech.com/blog/security-center/digital-laundry) - 不正行為の防止のために、サービスプロバイダーはクレジットカードの検証およびアカウント作成プロセスを強化する必要がある。

### 信頼スコア

取引・利用者の信頼度を評価する手法・サービスです。

- [GCP improved account management policies to better support customers](https://cloudplatform.googleblog.com/2018/07/improving-our-account-management-policies-to-better-support-customers.html) - あるいは、不正自動化に過度に頼ることで、ユーザーが不満を抱く原因になる可能性がある。

- [Digital Ocean's Update on Customer Shutdown Incident](https://blog.digitalocean.com/an-update-on-last-weeks-customer-shutdown-incident/) - 不正者による無料リソースの悪用を防ぐために、ユーザーのサーバーを積極的に停止することは、ビジネス的にも良い結果をもたらすが、その限りではない。

- [Awesome Credit Modeling](https://github.com/mourarthur/awesome-credit-modeling#readme) - 申請者をカテゴリに分類することでリスクを低減するための統計的手法の活用方法。その中には、リスク評価を改善するための多くのインスピレーションと研究論文が含まれている。

### 統計

決済不正の傾向と規模を示す統計・調査です。

- [Benford's law](https://en.wikipedia.org/wiki/Benford's_law) - 数字の分布は、会計不正のサインである可能性がある。

- [Integer percentages as electoral falsification fingerprints](https://arxiv.org/pdf/1410.6059.pdf) - 上記の精神を踏まえ、この論文は選挙における報告された丸数字の頻度が人為的な異常を示す信号であることを示している。これは、ある種の詐欺防止分野に適用できる可能性がある。

- [Huber loss](https://en.wikipedia.org/wiki/Huber_loss) - robust regressionに用いられる損失関数であり、データ中の異常値に対して平方誤差損失よりも感受性が低い。

- [Peak Detection in the Python World](https://blog.ytotech.com/2015/11/01/findpeaks-in-python/) - 異常値を検出するためのシンプルな方法。

- [Method to check if you swapped 2 digits](https://news.ycombinator.com/item?id=39021273) - 二重帳簿の誤りを特定する際に用いられる標準的手動会計のトリック。

### 請求

- [More than 600 million users installed Android 'fleeceware' apps from the Play Store](https://www.zdnet.com/article/more-than-600-million-users-installed-android-fleeceware-apps-from-the-play-store/) - アプリが試用期間終了後にユーザーに無意識に課金を続けるという新たな詐欺形態。

- [CEO Fraud](https://www.knowbe4.com/ceo-fraud) - 支払いを収集する支払いチームが、CEOを偽装して優れた支払い取引を称賛するというタイプの詐欺に巻き込まれる。

- [The Challenges of Operating a Computing Cloud and Charging for its Use](https://web.stanford.edu/class/cs349d/docs/theimer.pdf) - AWSのVPが行ったこのプレゼンテーションの最初の90％をスキップ（これは一般的なシステムの信頼性について述べている）。最後の4枚のスライドは、特にソフトクォータの使用により、請求クラウドサービスがどのように機能するかをよく要約している。

- [Fraud in Telephony Networks](http://www.s3.eurecom.fr/docs/eurosp17_sahin.pdf) - 電話による詐欺の多くは請求およびマイクロ取引の計測に関係している。この論文は、根本原因、脆弱性、悪用手法、そして詐欺犯がそれらから利益を得る方法を区別する分類（第6ページ）を提示している。

## UX/UI

価格、決済、請求画面のUX/UI設計に関する資料です。

- [Apple In-app purchase Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase) - 如何に をユーザーに親しみやすいものにするかに関するガイドおよび推奨事項。 [auto-renewable subscriptions](https://developer.apple.com/app-store/subscriptions/)

- [Which has a higher conversion rate: A single long ecommerce checkout form or a multi-step one?](https://capitalandgrowth.org/questions/2055/which-has-a-higher-conversion-rate-a-single-long-e.html) - カート内の他の項目に焦点を当て、不安を和らげ、二の考えを減らすために、クレジットカードや完了ステップの近くに信頼マークやテストimonialsを追加し、かつ、以前の製品探索プロセスで使用したような保証表現を導入する。

- [We tried to make billing backendless](https://useautumn.com/blog/backendless) - セキュリティ上の理由から、バックエンドからフロントエンドへ請求体験を移行しようとした試みが失敗した。

- [Pricing pages design](https://pricingpages.design) - さまざまなSaaS企業の価格ページを集めたもので、自社の提供内容をどのように提示するかをインスピレーションを得るため。

## ビジネスインテリジェンス

請求パイプラインの担当者は、事業の健全性を測定・報告するための重要データを扱います。

### 指標

収益・利用・顧客行動を測る事業指標の資料です。

- [Startup financial models - 12 templates compared for SaaS](https://www.stephnass.com/blog/startup-financial-model) - 事業運営におけるより良い可視性を得るための素晴らしいインスピレーションの源。

- [16 Startup Metrics](https://a16z.com/16-startup-metrics/) - 顧客獲得コスト（CAC）と顧客ライフタイムバリュー（CLV）の2つの重要な指標。

- [Thinking about growth and profit](https://jlongster.com/thinking-growth-profit) - 投資、利益、成長の関係性について議論し、それらが価格設定、無料試用、プラン構造の決定にどのように影響するかを説明する。

- [A Quantitative Approach to Product Market Fit](https://tribecap.co/a-quantitative-approach-to-product-market-fit/) - 上記で生成された指標は、より広範な範囲で使用され、製品市場適合性を検証する重要なシグナルとして機能している。

- [Startup growth calculator](http://growth.tlb.org) - スタートアップ向けのシンプルで効果的なインタラクティブな利益性計算機。

- [An Overview of Visa](http://minesafetydisclosures.com/blog/2019/7/23/part-ll-an-overview-of-visa) - Visaのビジネスモデルとメトリクスに関する素晴らしい分解。

- [The SaaS Financial Model You'll Actually Use](https://web.archive.org/web/20230205234207/https://baremetrics.com/blog/saas-financial-model) - スタートアップの財務状況を完全に紹介するもので、あなたが生成したメトリクスが全体の視点にどのように位置するかを補足的に理解できる。

### 顧客生涯価値

顧客生涯価値の算出・予測・活用に関する資料です。

- [You're all calculating churn rates wrong](https://web.archive.org/web/20260204065339/https://medium.com/swlh/youre-all-calculating-churn-rates-wrong-cbab072cd992) - 表面的には、離脱率が顧客ライフタイムの変化を自然に表すように見えるが、その理由は実は真実ではない。離脱率は顧客ライフタイムバリュー（CLV）を計算するための意味のあるメトリクスではない：顧客のライフタイム中に離脱確率は一定ではない。ほとんどの場合、無料試用やクーポンの影響がある。この記事は、顧客が離脱する確率をモデル化するための分布の影響を説明している。

- [How to project customer retention](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Fader_hardie_jim_07.pdf) - 重要な論文で、上記のアプローチよりも強力なアプローチを採用：[the exponential distributions is replaced by a geometric model](https://news.ycombinator.com/item?id=24833319)。これは月間契約のような離散時間区間に対してより適している。前者は連続時間プロセスに適している。

- [Survival Analysis For Customer Retention](https://two-wrongs.com/survival-analysis-for-customer-retention.html) - 生存関数を用いて留保率をより正確にモデル化する方法を示している：。 [Kaplan–Meier survival curves](https://two-wrongs.com/bootstrapping-kaplan-meier-confidence-intervals.html)

- [RFM (customer value)](https://en.wikipedia.org/wiki/RFM_%28customer_value%29) - 再訪、頻度、金額に基づくユーザーのセグメンテーションを目的としたCLVの精緻なモデル。



- [Churn Prediction](https://towardsdatascience.com/customer-churn-prediction-with-text-and-interpretability-bd3d57af34b1/) - 「Pythonをシンプルに使い、すべての行動に予測アプローチを適用して、企業の成長を促進する方法。」これはXGBoostの二値分類に依存している。

- [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) - 🆓 ユーザーの「生きている」か「死んでいる」状態に基づいて分析を行うフル機能のPythonパッケージ。Apache-2.0ライブラリで、PyMC Labsが運営しており、販売するものはコンサルティングサービスのみ（有償のライブラリは存在しない）。

### データエンジニアリング

請求・決済データを収集・変換・分析する基盤の資料です。

- [AI vs Data Science vs Data Engineering](https://web.archive.org/web/20171009002725/https://blog.insightdatascience.com/how-emerging-ai-roles-fit-in-the-data-landscape-d4cd922c389b?gi=ebcf517502c7) - 「データエンジニアは、変換データの継続的な可用性を確保するためにデータパイプラインとインフラを構築する。データサイエンティストは、それらのデータを分析・モデル化し、新規製品機能を開発または事業の利益を向上させる。」AIプロフェッショナルについては、認知自動化に焦点を当てる。

- [Ten Ways Your Data Project is Going to Fail](https://www.martingoodson.com/ten-ways-your-data-project-is-going-to-fail/) - データサイエンティストは必要ない。「ETLについてはデータエンジニアを、レポートについてはBIアナリストを、終了。」

- [Cargo cult data science](http://blog.richardweiss.org/2017/07/25/data-science-in-organizations.html) - 「データサイエンスは、技術の集合体ではなく、企業文化として捉えるべきである。しかし、多くの企業はデータサイエンス技術を取得することでその企業文化を創出しようとする。」

- [Why not use Double or Float to represent currency?](https://web.archive.org/web/20250524184249/https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency/3730040#answer-3730040) - 正確性の問題：浮動小数点は、お金の表記に使われる10進数の倍数を正確に表現できない。

- [Never Use Floats for Money](https://husobee.github.io/money/float/2016/09/23/never-use-floats-for-currency.html) - 「これは、10^-1、つまり0.1を二進数で表現しようとする際に生じるまさに問題である。0.1や0.01には正確な二進数表現が存在しない。」

- [The Soul of an Old Machine: Revisiting the Timeless von Neumann Architecture](https://ankush.dev/p/neumann_architecture) - 浮動小数点は、最初の一般用途のコンピュータ（EDVAC）が完成する前から疑われていた。「von Neumannは、なぜ浮動小数点が必要なのかを完全に理解していなかった。彼は浮動小数点の批判に対して非常に明確だった。」この記事の著者は、精度と四捨五入の問題を示すことで、その批判を補強している。

- [European Spreadsheet Risks Interest Group - Horror Stories](https://eusprig.org/research-info/horror-stories/) - 未制御かつ未検証のスプレッドシートモデルがもたらした収益喪失、誤価格設定、悪質な意思決定、不正、そしてシステム的金融失敗の事例を集めたもの。

### ツール

請求・収益データを分析・可視化するツールです。

- [Practical Business Python](https://pbpython.com) - ビジネス環境におけるPythonの効果的な活用方法に関するアイデアを集めて共有するブログ。

- [`redash`](https://github.com/getredash/redash) - 🆓 データソースに接続し、データを可視化するダッシュボードを作成し、会社内に共有できる。Databricksが所有しているが、2021年にホスティングされたSaaSが終了したため、現在はDatabricks組織によってコミュニティで維持されている。有償のRedash製品は存在しない。

- [Apache Superset](https://github.com/apache/superset) - 🆓 Apacheソフトウェアファウンデーションが管理する、企業向けのビジネスインテリジェンスウェブアプリケーション。

- [Meltano](https://github.com/meltano/meltano) - 🆓 データライフサイクル全体（データの読み込みから分析まで）にわたる、構成を優先したオープンソース製品。Meltanoは、OSSコアの上に管理型クラウドホスティングとサポートSLAのみを販売している。

## 競合分析

請求・決済市場と製品を比較するための資料です。

- [Patents on billing systems of the dot-com era](https://news.ycombinator.com/item?id=34773821) - 請求・決済市場と製品を比較するための資料です。

- 「請求プラットフォームを組み上げるには、やや高度な開発チームが必要だ」（[出典](https://www.techemails.com/i/124009734/google-pms-on-stripe)）。請求システムにはこの領域に適したエンジニアが必要だというGoogle製品責任者の見解です。

### クラウドプロバイダー

- [AWS Cost Management announcements](https://aws.amazon.com/about-aws/whats-new/aws-cost-management/) - 請求システムの境界に追加されたすべての新機能の元となるもの。

- [AWS reserved instances vs saving plan](https://web.archive.org/web/20240602133657/https://www.prosperops.com/wp-content/uploads/2022/01/ris_and_savings_plans.png) - さまざまなプランとその平均割引率の特徴マトリクス。

- [GCP billing release notes](https://cloud.google.com/billing/docs/release-notes) - GCP請求機能の最新変更。

- [GCP billing news](https://www.gcpweekly.com/gcp-resources/tag/billing/) - 非公式Google Cloud Platformニュースレターから

- [More choice, less complexity: New Compute Engine pricing options on tap](https://cloud.google.com/blog/products/compute/more-choice-less-complexity-new-compute-engine-pricing-options-on-tap) - 最近のGCP価格設定機能のまとめ

- [Orbitera](https://en.wikipedia.org/wiki/Orbitera) - GCPの請求部門

- [DigitalOcean Billing changelog](http://docs.digitalocean.com/release-notes/billing/) - DOにおける最新の請求更新情報

## 歴史

- 「Larry Pageはミシガン大学でMichigan Terminal Systemを使い、App Engine開発時にMTSを手本とするよう促した。現在のAWS・GCP請求を見ると懐かしく感じる」（[出典](https://news.ycombinator.com/item?id=35123587)）。大学メインフレームと現在のクラウドサービスの直接的な系譜を示します。

- [Product Development as Iterated Taste](https://commoncog.com/product-development-iterated-taste/) - AWSはS3のサブスクリプション価格設定の簡便性を犠牲にし、安全なコスト追従戦略を採用した。それは、ユーザーがサービスをどのように使うかをまったく理解できなかったためである。

- [Israel demanded Google and Amazon use secret 'wink' to sidestep legal orders](https://www.theguardian.com/us-news/2025/oct/29/google-amazon-israel-contract-secret-code#how-the-secret-code-works) - コードされた金額によるランダムな費用の請求は、法的義務を回避するための隠れたシグナルとして使用された。おそらく、それ故に柔軟な請求システムが必要なのかもしれない。

- [£sd computing](https://en.wikipedia.org/wiki/%C2%A3sd#Computing) - IBM 1401メインフレーム（1959年）は、ハードウェアでポンド/シルリング/ペンス（£sd）通貨算術をオプションでサポートしていた。

- [Engineering and Operations in the Bell System](http://bitsavers.trailing-edge.com/communications/westernElectric/books/Engineering_and_Operations_in_the_Bell_System_2ed_1984.pdf) - ページ#445から始まる「10.5 請求設備とシステム」のセクションは、ベルの電話回線計測および価格設定の歴史と技術的進化を説明している。

- [The vanished grandeur of accounting](https://www.bostonglobe.com/ideas/2014/06/07/the-vanished-grandeur-accounting/3zcbRBoPDNIryWyNYNMvbO/story.html) - 会計画はオランダ芸術における重要なジャンルであった。

- [Graphic methods for presenting facts](https://archive.org/details/graphicmethodsfo00brinrich/page/336/mode/2up?view=theater&ui=embed&wrapper=false) - 1914年に製作されたアルミンの物理モデルを用いて価格設定を最適化する方法。

## ユーモア

請求・決済・価格設定を題材にしたユーモアです。

- [Detax](https://detax.framer.website) - 請求・決済・価格設定を題材にしたユーモアです。

## コントリビューション

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/kdeldycke/awesome-billing/blob/ec5eba3b4f3ccbf7e292b76338df781f3d2ff24a/.github/contributing.md)をご確認ください。

## 脚注

[ヘッダー画像](https://github.com/kdeldycke/awesome-billing/blob/main/assets/awesome-billing-header.jpg)は、[写真](https://web.archive.org/web/20221210200108/https://unsplash.com/photos/u2zSzMTwIjQ)を[Denny Müller](https://web.archive.org/web/20221210200108/https://unsplash.com/@redaquamedia)が加工したものです。



<a name="intro-quote-def">[1]</a>: [*Sapiens: A Brief History of Humankind*](https://openlibrary.org/isbn/0062316095) (Harper, 2015). [[↑]](#intro-quote-ref)
