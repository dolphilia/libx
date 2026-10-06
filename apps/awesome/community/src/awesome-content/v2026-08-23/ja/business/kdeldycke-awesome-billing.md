---
title: "Awesome Billing"
description: "価格設定・請求書・会計・不正検知・ビジネスインテリジェンスまで、請求・決済システムの設計に役立つ資料をまとめています。"
licenseSource: "github-kdeldycke-awesome-billing-readme-md"
---

# Awesome Billing

請求・決済システムを設計するソフトウェアエンジニア向けの資料集です。価格設定、製品カタログ、費用の試算と予測、マーケットプレイス、会計、財務、契約、クレジット、税、請求書、決済、不正対策、UX、ビジネスインテリジェンスを扱います。顧客から代金を受け取るための事業上の要件と、実装するソフトウェアを結び付けます。

説明は、過去の価格モデルや製品の利用条件など、記録された原文の文脈を保っています。「無料リソース」「商用提供あり」は原文の区分を表します。オープンソースのコア、有料の追加機能、ホスティング、サポートの違いは、原文に記載がある場合に項目ごとに説明します。

## <a id="basics"></a>基礎

[スタンフォード大学のクラウドコンピューティング概論](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf)では、プラットフォームのソフトウェア構成を示しています。元のリストの[注釈付きの図](https://raw.githubusercontent.com/kdeldycke/awesome-billing/ec5eba3b4f3ccbf7e292b76338df781f3d2ff24a/assets/cloud-software-stack-billing.jpg)では、計測・課金が全体を横断する柱として、アイデンティティとアクセス管理（IAM）などのセキュリティと並んで強調されています。赤い「You are here」の矢印は計測・課金を指します。

| 構成要素 | 図に示された例 |
| --- | --- |
| Webサーバー | Java, PHP, JS |
| 分析UI | Hive, Pig, HiPal |
| キャッシュ | memcached, TAO |
| その他のサービス | モデル提供、検索、Unicorn、Druid |
| 分析エンジン | MapReduce, Dryad, Pregel, Spark |
| 運用データストア | SQL, Spanner, Dynamo, Cassandra, BigTable |
| メッセージバス | Kafka, Kinesis |
| メタデータ | Hive, AWS Catalog |
| 分散ストレージ | Amazon S3, GFS, Hadoop FS |
| リソース管理 | EC2, Borg, Mesos, Kubernetes |
| 調整 | Chubby, ZK |

図の下部には分散ストレージとリソース管理があり、その横に調整機能が配置されています。計測・課金とセキュリティ（IAMなど）は、全体を横断する縦の柱として描かれています。表は元の図の例を示しています。各グループの省略記号は、ほかにも例があることを表します。

請求は顧客・製品・事業を結び付け、エコシステム全体に関わります。原文が挙げるもう一つの柱は[アイデンティティとアクセス管理（IAM）](https://github.com/kdeldycke/awesome-iam/)です。請求はクラウドプロバイダーだけでなく、特にソフトウェアを中心とするほかの事業でも戦略的に重要です。

<a id="intro-quote-ref"></a>

「貨幣は、これまで考案されたなかで最も普遍的かつ効率的な相互信頼の仕組みである」— Yuval Noah Harari、[Sapiens: A Brief History of Humankind](https://openlibrary.org/isbn/0062316095)（Harper、2015年。[引用の出典](#intro-quote-def)）。

<a id="intro-quote-def"></a>

元のリストでは、この書籍を上記の引用の出典としています。[引用に戻る](#intro-quote-ref)。

- [5 things I learned while developing a billing system](https://arnon.dk/5-things-i-learned-developing-billing-system/) - 通貨・請求書からプラン変更の仕組みまで、請求システムのさまざまな側面を図解する入門資料。各テーマは以下の専用の節でも扱う。

- [Open guide to AWS](https://github.com/open-guides/og-aws#billing-and-cost-management) - クラウドプロバイダーの請求の主な特徴を解説する「Billing and Cost Management」の節。

- [Billed for ¥21,120, invoiced at ¥2,112,000 and paid ¥2,112,000](https://xunroll.com/thread/1668082843728367616) - [金額に整数や浮動小数点数を使わない](https://xunroll.com/thread/1599113889093890049)という提言。10進小数を使い、この事例のような100倍の異常請求を避けるための資料。

- この分野のソフトウェアエンジニアを採用するため、会計・請求・決済部門をデータエンジニアリングへの入口にするという提案（[出典](https://x.com/kdeldycke/status/1422564355799924736)）。

## <a id="pricing"></a>価格設定

月額契約、利用量に応じた料金、一般的なショッピングカートでの購入など、価格設定にはさまざまな形があります。

- [Don't just roll the dice – Software pricing guide](https://neildavidson.com/downloads/dont-just-roll-the-dice-2.0.0.pdf) - 価格モデルと、その心理的効果・収益モデルへの影響を幅広く扱うガイド。

- [Business Model Patterns](https://reasonstreet.co/business-model-library/) - 製品・サービスの販売方法を15種類紹介するリスト。

- [Axial - Business models](https://archive.ph/BFsZ1) - 事業モデルを考える際の参考になる38のモデル。

- [The Network Monetization Map: Aligning Incentives with Revenue](https://web.archive.org/web/20201222120055/https://medium.com/breadcrumb/the-network-monetization-map-aligning-incentives-with-revenue-b73c362d1ad5) - ネットワーク効果を利用する6つの収益化モデル。

- [The 5 Pillars of PriceOps](https://web.archive.org/web/20260124084716/https://priceops.org/) - DevOpsに着想を得たマニフェスト。価格設定を固定的な設定ではなく、変化に応じて改善を繰り返すプロセスと、システムの柔軟な性質として捉える。

- [SaaS pricing explorer](https://saaspricingexplorer.hyperline.co) - 価格ページの設計の参考になる1,000件以上の事例集。

### <a id="usage-based-pricing"></a>従量課金

従量課金では、弾力的に変動する資源の消費量に応じて料金を計算します。

- [Credyt](https://credyt.ai/?utm_source=awesome-billing&utm_medium=referral&utm_campaign=awesome-billing-oss-sponsorship) - AI製品向けのリアルタイム収益化インフラ。使用量の計測、前払い残高からの課金、フロントエンドのコードを書かずに自社ブランドの顧客ポータルを提供する機能を備える商用SaaS。

- [Why I Love Usage-Based Pricing](https://www.rdegges.com/2020/the-only-type-of-api-services-ill-use/) - 従量課金が顧客と提供者の双方に、関係者全体の利益に沿って行動する動機を与えるという筆者の見解と、他の価格モデルの問題点。

- [Use-cases for cloud services](https://news.ycombinator.com/item?id=19830022) - クラウドの投資収益率（ROI）に関する議論。定常的なワークロードは従来の基盤に残し、弾力的に変動する処理や実験的なプロジェクトにクラウドを使うという提言。

- [Socially Optimal Pricing of Cloud Computing Resources](https://webee.technion.ac.il/people/shimkin/PAPERS/Menache-CloudPricing-Conf2011.pdf) - 社会的に最適な稼働状態が一意に定まり、資源の単位量と単位時間あたりに固定価格を課す線形の従量料金で維持できると論じる論文。

- [A Survey of Profit Optimization Techniques for Cloud Providers](http://www.cs.newpaltz.edu/~lik/publications/Peijin-Cong-ACM-CS-a-2020.pdf) - 利用者向けサービス品質の改善戦略を先に、収益最大化に向けたクラウド資源の価格戦略を続けて扱う調査論文。

- 「請求が意図的に複雑なのではなく、弾力性の対価として複雑になる」（[出典](https://x.com/kdeldycke/status/1214160678363246592)）。リストの筆者は、従量料金がセントやミリセントの精度を持つ一方、仕組みを理解する時間をかけられない顧客には不満の原因になると指摘している。

- [Riemann sum](https://en.wikipedia.org/wiki/Riemann_sum) - 使用量を量子化して扱う仕組みを理解する出発点。

- [Allen's interval algebra](https://en.wikipedia.org/wiki/Allen%27s_interval_algebra) - 従量課金の実装に必要な時間関係の推論を整理する区間代数。[明快なスキーマを示すStack Overflowの質問](https://web.archive.org/web/20240413010618/https://stackoverflow.com/questions/12069082/allens-interval-algebra-operations-in-sql?rq=1)も参考になる。

- [Reconcile Your Monthly GCP Invoice with BigQuery Billing Export](https://web.archive.org/web/20201107232605/https://medium.com/@lukwam/reconcile-your-monthly-gcp-invoice-with-bigquery-billing-export-b36ae0c961e) - クラウド費用を追跡しようとした開発者の取り組みを通じ、請求の照合の難しさを示す記事。リストの筆者は、記事中で明示されてはいないものの、空間・時間・通貨にまたがる量子化、粒度、丸めが難しさの要因だと指摘している。

- [AWS EC2 T2 Instances Demystified: Don't Learn The Hard Way](https://roberttisdale.com/aws-ec2-t2-instances-demystified-dont-learn-hard-way/) - CPUクレジットを蓄積し、その量を制限するバースト可能インスタンスの複雑さを示す事例。

- [“Designing billing for a service can be really challenging”](https://news.ycombinator.com/item?id=23536919) - AWS Simple Email Serviceの価格プラン設計に関する個人の体験談。

- [Subscription-based pricing is dead: Smart SaaS companies are shifting to usage-based models](https://techcrunch.com/2021/01/29/subscription-based-pricing-is-dead-smart-saas-companies-are-shifting-to-usage-based-models/) - 開始時の費用と導入の障壁を抑えつつ、時間をかけて顧客から収益を得られる従量課金を、より効率的で公平なモデルとする議論。

- [Electropedia: Tariffs for electricity](https://www.electropedia.org/iev/iev.nsf/index?openform=&part=691) - クラウドより前から従量料金が使われてきた電力を題材とする、国際電気標準会議（IEC）の詳細な多言語用語分類。

- [Lago](https://github.com/getlago/lago) - 商用提供あり。Ruby製のオープンソース使用量計測・従量課金システム。Lago SASがAGPLのコアに加え、ホスト型CloudとPremium追加機能を販売する。

- [StripeMeter](https://github.com/geminimir/stripemeter) - 無料リソース。TypeScript製のオープンソース使用量計測システムで、Stripeとの統合を前提とする。計算した使用量をStripeの請求書と照合し、請求書発行前の整合性を確保。一度だけの処理とリアルタイムの費用予測に対応する。

- [CGRateS](https://github.com/cgrates/cgrates) - 無料リソース。Go製の高速で拡張可能なリアルタイム課金システム。ISPと通信事業者向けで、50k+ CPS、負荷分散、複製に対応。オープンソースでベンダーに依存せず、商用提供はサポートのみ。

### <a id="subscription-plans"></a>サブスクリプションプラン

サブスクリプションプランはSaaSで広く使われ、理解しやすい価格体系を提供します。

- [Pricing low-touch SaaS](https://stripe.com/en-in/atlas/guides/saas-pricing) - 営業担当者の関与が少ないSaaSで一般的な、料金表の列ごとにプランを示す方式。価格、機能へのアクセス、事業上重要な利用量の上限などに差を設ける。

- [Lotus](https://github.com/uselotus/lotus) - 無料リソース。価格とパッケージ構成を管理するオープンソースの基盤。Lotus Inc.の商用提供は、MITライセンスのコアを使ったマネージドホスティングのみ。

- [`f-license`](https://github.com/furkansenharputlu/f-license) - 無料リソース。Go製のオープンソースライセンスキー生成・検証ツール。個人で保守され、商用提供はない。

### <a id="hybrid"></a>ハイブリッド

複数の課金要素を組み合わせる、比較的珍しい価格方式です。

- [The Three Part Tariff](https://tomtunguz.com/three-part-tariffs/) - 線形の従量料金にプラットフォーム料金や無料枠を組み合わせる、三部料金制の議論。

### <a id="strategy"></a>戦略

価格設定の戦術を選ぶための理論と実践的な指針です。

- 「収益を上げる方法は2つ。まとめて売るか、分けて売るかだ」— [Jim Barksdale](https://hbr.org/podcast/2014/07/marc-andreessen-and-jim-barksdale-on-how-to-make-money.html#:~:text=in%20business%2C%20there%20are%20two%20ways%20to%20make%20money.%20You%20can%20bundle%2C%20or%20you%20can%20unbundle.)。

- [Pricing Psychology](https://www.nickkolenda.com/psychological-pricing-strategies/) - 使用する数字、価格の高さ、丸めの有無などを扱う42の価格設定の手法。

- [The 7 factors to consider when pricing your startup product](https://tomtunguz.com/how-to-price-your-startups-product/) - 価格設定で検討する7つの要因。価格を、製品の価値や企業の中核的なマーケティングメッセージを強める手段として捉える。

- [The Anatomy of SaaS Pricing Strategy](https://sbigrowth.com/hubfs/SBI_PI_AnatomyofSaaSPricingStrategy_Handbook.pdf) - 製品戦略に沿ってSaaSの価格戦略を組み立てる方法。

- [The cup-of-coffee pricing fallacy](https://blog.gingerlime.com/2020/the-cup-of-coffee-pricing-fallacy/) - 製品価格をコーヒー1杯の価格になぞらえる説明が、誤解を招く理由。

- [Changing the Pricing Model](https://monkeynoodle.org/2024/02/10/changing-the-pricing-model/) - 価格モデルの変更に際して、製品のライセンスを変更するいくつかの方法。

### <a id="market-research"></a>市場調査

適切な価格を見つけるための調査手法と価格発見の技術です。

- [Jeremy Howard - From Predictive Modelling to Optimization](https://youtu.be/vYrWTDxoeGg?t=542) - 予測モデルから最適化へ移る考え方を扱う講演。価格そのものが製品となる保険を例に、Jeremy Howardが利益に向けて価格を最適化し、従来の保険数理担当者が提供したリスク推定値ではなく、顧客にとって最適な価格という結果を届ける方法を説明する。

- [Gabor–Granger method](https://en.wikipedia.org/wiki/Gabor%E2%80%93Granger_method) - 新しい製品・サービスの価格を決めるための調査手法。結果から需要の図と収益曲線を作れる。

- [Van Westendorp's Price Sensitivity Meter](https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter) - 消費者の価格に対する選好を調べる市場調査手法。原文では、その結果から収益曲線を作り、収益を最大にする価格を推定する方法として紹介されている。

- [Pricing niche products](https://kevinlynagh.com/notes/pricing-niche-products/) - 価格を単に決めるだけでは市場から学べる量を制限してしまうという議論と、筆者によるヴィックリー・オークションを使った価格発見の実践。

- [Finding the max revenue price mark for digital products](https://web.archive.org/web/20260213003122/https://medium.com/@hovm/finding-the-max-revenue-price-mark-for-digital-products-24cef24f746d) - 複数の価格を実際の市場で試し、収益曲線を再構成して頂点を見つけ、収益を最大にする価格を求める方法。

- [Personalised pricing and EU law](https://www.econstor.eu/bitstream/10419/205221/1/de-Streel-Jacques.pdf) - 個人別の価格設定と、EUの消費者保護・データ保護の規則で禁止される場合を扱う研究。

## <a id="product-catalog"></a>製品カタログ

製品カタログは、顧客が購入できるサービス、製品、バリエーション、オプション、価格をまとめます。クラウドサービスでは独自実装が多い一方、既存の製品データ管理や[製品情報管理](https://en.wikipedia.org/wiki/Product_information_management)のシステムが適する場合もあります。原文ではPDMとPIMという語を使っていますが、リンク先の概念はProduct Information Management（PIM）です。

- [GCP Product Catalog](https://cloud.google.com/blog/products/gcp/introducing-cloud-billing-catalog-api-gcp-pricing-in-real-time) - GCPのすべてのSKUをAPIで取得できる製品カタログ。

- [Pimcore](https://github.com/pimcore/pimcore) - 商用提供あり。PHPとSymfonyで製品メタデータを管理するオープンソースのUI・データベース。Pimcore GmbHがGPL/POCLのコアに加え、Enterprise Subscription、PaaS、独自ライセンスのモジュールを販売する。

## <a id="calculator"></a><a id="計算"></a>コスト試算

利用予定の資源に対する請求額を試算します。

- [Infracost](https://github.com/infracost/infracost) - 商用提供あり。Terraformコードから、資源を構築する前にクラウド費用を見積もるツール。ターミナルの内訳やプルリクエストの差分として表示する。Infracost Inc.がApache-2.0のCLIに加え、ホスト型ダッシュボードInfracost Cloudを販売する。

- [Cloudorado](https://www.cloudorado.com) - 商用提供あり。CPU処理能力の相対指標であるEC2 Compute Unit（ECU）を用いるクラウド比較表。Cloudoradoが商用のクラウド比較製品として運営する。

- [EC2Instances.info](https://ec2instances.info) - 商用提供あり。Amazon EC2インスタンスの比較サイト。Vantageが自社の商用FinOps基盤の見込み顧客を集める無料サイトとして運営する。

## <a id="cost-forecast"></a>コスト予測

顧客が過去の利用実績から将来の消費量を予測するための資料です。

- [Forecasting: Principles and Practice](https://otexts.com/fpp2/) - 各手法を適切に使えるだけの情報を提供する、予測手法の包括的な入門書。

- [Transforming Financial Forecasting with Data Science and Machine Learning at Uber](https://web.archive.org/web/20221203184815/https://www.uber.com/blog/transforming-financial-forecasting-machine-learning/) - Uberが財務計画の基盤にデータサイエンスと機械学習を応用する方法。

- [Time Series Prediction - A short introduction for pragmatists](https://www.liip.ch/en/blog/time-series-prediction-a-short-comparison-of-best-practices) - 時系列データを使って事業上の問題を評価するための入門資料。

- [`sktime`](https://github.com/alan-turing-institute/sktime) - 無料リソース。Alan Turing Instituteが管理する時系列機械学習向けPythonライブラリ。[予測のチュートリアル](https://github.com/alan-turing-institute/sktime/blob/master/examples/01_forecasting.ipynb)と、[Prophetとの違い](https://news.ycombinator.com/item?id=24543861)も参照できる。

- [Darts](https://github.com/unit8co/darts) - 無料リソース。Unit8 SAが管理する時系列予測・異常検知向けPythonライブラリ。同社の商用提供はコンサルティングのみで、有料のライブラリ版はない。[Prophet](https://facebook.github.io/prophet/)を含む多数のモデルをまとめて使え、実験に適する。ただし、[各モデルは規則的な間隔のデータを想定](https://news.ycombinator.com/item?id=37665435)するなど、データの形に前提を置く。

- [Komiser](https://github.com/mlabouardy/komiser) - 商用提供あり。隠れた費用の発見、支出増加の監視、個別の提案によって予算内の運用を支援するオープンソースツール。Tailwardenがホスト型SaaSを販売する。

- [GCP Cost Forecast](https://cloud.google.com//billing/docs/how-to/reports#cost-forecast) - 消費の傾向線から資源消費を予測する例。

- [How to save money on your AWS bill](https://threadreaderapp.com/thread/1091041507342086144.html) - 大きな費用削減として、使っていない資源の停止、スポットインスタンス、リザーブドインスタンスをこの順に挙げる提言。

## <a id="marketplace"></a>マーケットプレイス

このリストでは、金銭の取引を通じて供給と需要を結び付けるサービスをマーケットプレイスと定義し、決済を伴わない集約サービスやハブと区別しています。

- [Customized Regression Model for Airbnb Dynamic Pricing](https://www.kdd.org/kdd2018/accepted-papers/view/customized-regression-model-for-airbnb-dynamic-pricing) - Airbnbに導入された動的価格設定モデルを解説する論文。

- [Papers we love: Auctions and Bidding](https://github.com/papers-we-love/papers-we-love/tree/master/economics#auctions-and-bidding) - 入札とオークションに関する論文集。

- [Vickrey auction](https://en.wikipedia.org/wiki/Vickrey_auction) - [HNのコメント](https://news.ycombinator.com/item?id=19145391)が、人にいくら支払うかを尋ねるだけではうまくいかないとし、Googleの広告オークションに似たヴィックリー・オークションで最大支払意思額を引き出す方法を提案している。

- [19 Tactics to Solve the Chicken-or-Egg Problem and Grow Your Marketplace](https://www.nfx.com/post/19-marketplace-tactics-for-overcoming-the-chicken-or-egg-problem) - 供給と需要のどちらを先に作るかという、マーケットプレイスの「鶏と卵」の問題を扱う19の手法。

- マーケットプレイス事業の立ち上げと拡大：[対象範囲を絞る](https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace)、注力する側を決める、初期供給を作る、初期需要を作るという4部構成。立ち上げ・拡大の経験者数十人へのインタビューに基づく。

- [A Rake Too Far: Optimal Platform Pricing Strategy](https://abovethecrowd.com/2013/04/18/a-rake-too-far-optimal-platformpricing-strategy/) - プラットフォームの手数料に関する議論。カジノのrakeはポーカーゲームを運営する胴元の取り分を指し、サービス運営企業が収益の一部を保持する同じ仕組みに、さまざまな名称が使われる。

### <a id="cloud-resources"></a>クラウドリソース

資源の提供者と利用者を結び付ける、買い・売りの価格提示の仕組みです。原文では、こうした市場の多くを「one-sided」と呼び、大きなプラットフォームが未使用の資源を収益化するものと説明しています。

- [Incentive Engineering for Computational Resource Management](https://papers.agoric.com/assets/pdf/papers/incentive-engineering-for-computational-resource-management.pdf) - プログラミングの実務と市場の仕組みの双方に適合する、プロセッサ時間・ストレージの配分を扱う論文。

- [Pricing of Service in Clouds: Optimal Response and Strategic Interactions](http://www.sigmetrics.org/mama/2013/abstracts2013/UrgaonkarEtAl.pdf) - 利用者が需要を調整して利益を最適化する方法と、提供者・利用者が価格構造を交渉する方法を扱う論文。非線形モデル、段階料金、弾力的な需要、双方の戦略を扱う。

- [History of Spot Instances](https://spot.rackspace.com/blogs/history-of-spot-instances) - AWSの2009～2017年のオークション方式から、主要クラウドで提供者が管理する価格へ至る歴史。透明な入札が不透明なアルゴリズムに置き換わった経緯。

- [Dynamic Cloud Pricing for Revenue Maximization](https://henryhxu.github.io/share/hxu-tcc2013.pdf) - Amazonのスポット価格の狭い変動幅は、市場の需給よりも、最低価格を事前設定したアルゴリズムによるものと考えられると論じる論文。

- [Usage Patterns and the Economics of the Public Cloud](https://mc4f.ee/Papers/PDF/EconPublicCloud.pdf) - クラウドの需給と、論文当時に固定価格が広く使われた理由を扱う研究。CPU使用率を検討し、ホテル・電力・航空と同程度の需要変動なら、効率性に動的価格が不可欠になると論じる。

- [Maximizing Profit of Cloud Brokers under Quantized Billing Cycles: a Dynamic Pricing Strategy based on Ski-Rental Problem](https://arxiv.org/pdf/1507.02545.pdf) - 量子化された請求周期のもと、価格のシグナルで需要を調整する動的価格戦略。クラウド仲介業者の利益を最大化するためにタスクがキューから押し出され、利用者に不利益が生じ得ることも認めている。

- [Present or Future: Optimal Pricing for Spot Instances](https://web.archive.org/web/20150708151037/http://www.temple.edu/cis/icdcs2013/data/5000a410.pdf) - スポット資源の価格設定は、現在と将来の双方への影響を考慮すべきだと論じる論文。

- 「支払うのは常に入札額ではなく、スポット市場価格である」（[出典](https://news.ycombinator.com/item?id=20347716)）。当時の入札方式の簡潔な説明。

- [Deconstructing Amazon EC2 Spot Instance Pricing](https://dants.github.io/papers/Spotprice11CloudCom.pdf) - 余剰容量に入札し、入札額が周期的に変わるスポット価格を上回る間は資源を使える、初期のEC2スポット市場モデルの分析。未使用容量を収益化する仕組み。

- [GCP Preemptible VMs vs AWS Spot Instances](https://news.ycombinator.com/item?id=9564287) - Googleの固定価格のプリエンプティブルVMと、AWSの市場方式を比較する当時の議論。

- 「3か月のスポット価格履歴から費用を見積もり、余剰容量のあるアベイラビリティーゾーンとインスタンスタイプの組み合わせを探す」（[出典](https://news.ycombinator.com/item?id=16071684)）。スポット市場の透明性を求める利用者の例。

- [The Eternal Cost Savings Of Netflix's Internal Spot Market](http://highscalability.com/blog/2017/12/4/the-eternal-cost-savings-of-netflixs-internal-spot-market.html) - 十分な運用規模があれば、[インスタンスの社内二次市場](https://web.archive.org/web/20200101000000/https://medium.com/netflix-techblog/creating-your-own-ec2-spot-market-6dd001875f5)を作ることに経済的な利点が生じる事例。

### <a id="online-ads"></a>オンライン広告

ターゲティング広告の市場は、クラウド資源の市場と概念や技術を共有しており、設計の参考になります。

- [RTB Budget Pacing Summarized](https://github.com/PragmaticLab/RTB_Budget_Pacing_Summarized) - Turn Inc.、Yahoo、LinkedInの研究論文からリアルタイム入札（RTB）の予算消化ペース調整手法をまとめた読書リスト。古い静的資料だが、文献への入口になる。

- [Samsung's online ads platform/exchange war story](https://github.com/eloraiby/fs-pacer/blob/master/fs-pacer.md) - 広告取引所を毎秒500万件の入札要求、最大応答時間2ミリ秒へ拡張した事例。

- [`RTB4Free`](https://github.com/RTB4FREE) - 無料リソース。Apache-2.0ライセンスでOpenRTB 2.0に準拠する入札システム・デマンドサイドプラットフォーム（DSP）。原文では、2022年末以降ほぼ活動が停止しているものの、この分野で唯一のオープンソースDSPの参考実装とされる。

## <a id="accounting"></a>会計

- 「会計部門は通常、過去を振り返る。財務部門は通常、将来を見据える」（[出典](https://news.ycombinator.com/item?id=25366184)）。

### <a id="double-entry-model"></a>複式簿記モデル

このリストでは、資金を追跡する信頼性の高いシステムを設計する際に、複式簿記を最も重要な概念としています。

- [Accounting for Developers 101](https://docs.google.com/document/d/1HDLRa6vKpclO1JtxbGB5NeAYWf8cf1UMGy22o8OZZq4) - 会計の歴史と用語の入門資料。

- [Accounting for Computer Scientists](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html) - 会計を資金の流れのグラフとしてモデル化し、小規模企業の財務諸表にその動きを表す方法。

- [The Double-Entry Counting Method](https://web.archive.org/web/20260306094438/https://beancount.github.io/docs/the_double_entry_counting_method.html) - 上記のグラフに基づく方法を、報告と実装を含めて詳しく扱う資料。

- [Accounting Memento For Entrepreneurs (US GAAP)](https://www.odoo.com/documentation/functional/accounting.html) - 会計の概念を学ぶための対話式フォーム。

### <a id="bookkeeping"></a><a id="帳簿管理"></a>記帳

会計記録を正確で一貫した状態に保つための日々の実務です。

- [So, you want to learn Bookkeeping!](https://www.dwmbeancounter.com/BCTutorials/BCIntro/index.html) - 企業の取引を記録・管理する日々の業務。

- [Reconciliation: A game designed to frustrate the player](https://bam.kalzumeus.com/archive/a-game-that-intentionally-frustrates-the-player/) - 企業間で資金を移す経路に構造化データが欠けることが、照合を難しくするという議論。小数部分に固有の値が生じるよう任意の値引きをする方法や、仮想銀行口座を代理として使う方法を提案している。

- [Plain text accounting tools](https://plaintextaccounting.org/#software) - 複式簿記や記帳の実装の参考になる、オープンソースの個人向け財務管理ツールのリスト。

- 無料リソース。有料版のない、コミュニティ保守のGUI会計ツール：[GNUCash](https://gnucash.org)（GTK+）、[Grisbi](https://grisbi.org)（C）、[Firefly III](https://firefly-iii.org)（PHP）。

- [GnuCash Tutorial and Concepts Guide](https://www.gnucash.org/docs/v2.4/C/gnucash-guide/) - GnuCashで個人の財務を管理するためのチュートリアル。

- [Frappe Books](https://github.com/frappe/books) - 無料リソース。小規模企業・フリーランス向けのデスクトップ記帳ソフトウェア。有料版はない。

- [Luca](https://github.com/brandon-rhodes/luca) - 無料リソース。YAMLによる会計とJSONによる税務書式のツール。個人で保守されている。

- [Go DB Ledger](https://github.com/darcys22/godbledger) - 無料リソース。複式簿記の取引記録をプログラムで扱えるよう設計された、オープンソース会計システム。

- [Formance Ledger](https://github.com/formancehq/ledger) - 商用提供あり。Numscript DSL、複数通貨、REST API、Dockerでの導入に対応する、MITライセンスの独立したプログラム可能な複式簿記台帳。FormanceはEnterprise追加機能（Wallets、Flows、Reconciliation、構築済みコネクター、SSO、RBAC、監査ログ）を販売するが、台帳のコアはオープンソース版で全機能を利用できる。

### <a id="software-design-and-implementation"></a><a id="ソフトウェア設計と実装"></a>ソフトウェアの設計と実装

会計の概念と実務をソフトウェアに実装するための資料です。

- [Moonpig: a billing system that doesn't suck](https://blog.plover.com/prog/Moonpig.html) - 小切手による支払い、浮動小数点の金額を避けること、複雑な顧客ワークフロー、日時の問題、変更可能なデータなど、請求・会計システムの設計判断を扱う。

- [Books, an immutable double-entry accounting database service](https://developer.squareup.com/blog/books-an-immutable-double-entry-accounting-database-service/) - Google Spanner上に構築された、Square社内の変更不可な複式簿記サービスの基本データモデル。

- [TigerBeetle](https://github.com/tigerbeetle/tigerbeetle) - 無料リソース。資金が移動するか移動しないかのいずれかとなり、二つの状態の間で失われないよう設計された分散財務会計データベース。全機能がApache-2.0のオープンソースリポジトリに含まれ、TigerBeetle Inc.は機能の制限ではなく、マネージドホスティングとサポートを販売する。[Jepsenの検証](https://jepsen.io/analyses/tigerbeetle-0.16.11)で、強い直列化可能性を試験している。

- [Django Hordak](https://github.com/adamcharnock/django-hordak) - 無料リソース。Django向けの複式簿記の基本機能。単独の保守者によるMITライセンスのライブラリとして提供される。

- [Managed accounts for Django](https://github.com/django-oscar/django-oscar-accounts) - 無料リソース。借方・貸方への記入ができる資金の割り当てを管理する、コミュニティ保守のdjango-oscar拡張。

- [Triple‐entry accounting with Blockchain: How far have we come?](https://sci-hub.st/10.1111/acfi.12556) - 三式簿記を信頼と透明性の問題に対処する、より新しく効率的な方法とし、適切に実装すればブロックチェーンとの組み合わせで会計を根本的に改善できると論じる論文。

### <a id="currencies"></a>通貨

世界各国で事業を行うための会計システムには、複数の現地通貨を扱う機能が必要です。

- [Tutorial on multiple currency accounting](https://www.mathstat.dal.ca/~selinger/accounting/tutorial.html) - 複数通貨の会計システムを実装するためのガイド。

## <a id="finance"></a>財務

会計を整えると、財務データから事業への洞察や指標を得られます。

- [Accounts Demystified: The Astonishingly Simple Guide To Accounting](https://openlibrary.org/isbn/0273744704) - 企業の財務状況を分析・監視する方法。

- [The Games People Play With Cash Flow](https://commoncog.com/blog/cash-flow-games/) - Maloneが、EBITDA（利払い・税・減価償却・無形資産の償却前の利益）を使い、不動産事業に似た方法でケーブル会社のキャッシュフローを把握した話から始まる記事。続いてSaaSモデルのほかのキャッシュフロー戦略を扱う。

- [Financial Intelligence for Entrepreneurs: What You Really Need to Know About the Numbers](https://openlibrary.org/isbn/1422119157) - 財務データを理解し、事業上の意思決定に活用する方法。

- [What is FinOps](https://www.finops.org/introduction/what-is-finops/) - 技術・財務担当と事業の経営層に、クラウドの運用・管理について共通の言葉とプロセスを提供する枠組み。

- [Algebraic Models for Accounting Systems](https://openlibrary.org/isbn/9814287113) - 会計システムの分析に、高度な抽象代数学を応用する資料。

## <a id="contracts"></a>契約

顧客とサービス提供者の契約は、請求書の発行条件を定め、請求周期の規則の基礎になります。

- [Is this what Enterprise mean?](https://threadreaderapp.com/thread/1389946268764475394.html) - 契約・請求書・支払いの不整合が、企業顧客の不信を招く仕組み。[ライセンスの一括購入](https://news.ycombinator.com/item?id=27053246)に関するHNの議論も参考になる。

- [Entitlements untangled: The modern way to software monetization](https://www.stigg.io/blog-posts/entitlements-untangled-the-modern-way-to-software-monetization) - 製品のバリエーション、料金プラン、パッケージごとの機能利用権限（entitlements）の説明。販売方法と製品の動作を結び付け、有料・無料の顧客がそれぞれ何をできるかを定める。

- [CUDs vs. Commit Contracts vs. SUDs in Google Cloud](https://66degrees.com/insights/comparing-cuds-suds-and-commits-in-google-cloud) - GCPの割引の種類と利用量のコミットメントの違い。

- [Quantity discounts on a virtual good: The results of a massive pricing experiment](https://sci-hub.st/https://www.pnas.org/doi/pdf/10.1073/pnas.1510501113) - 大量購入に対する9～70%の値引きが、収益にほとんどプラスにもマイナスにも影響しなかった価格実験。リストの筆者は、測定された効果が小さくても、広く使われる割引が大口顧客を引き付けるマーケティングの手段として働くのではないかと問いかけている。

- Google Adsにまとまった額を支払い、予算を使い切るまで広告を流したというコメント投稿者の回想（[出典](https://news.ycombinator.com/item?id=36325785)）。リストの筆者は、この以前の上限付き実績払いを、残額の繰り越しができて予想外の請求を減らす月次予算と説明し、割り当て枠の販売になぞらえている。

## <a id="coupons-and-vouchers"></a>クーポンとバウチャー

- [Raising Prices is Hard](https://www.backblaze.com/blog/raising-prices-is-hard/) - 主力サービスの値上げに関するBackblazeの経験談。クレジットを使った延長プログラムの計画が、最も経験豊富なエンジニア数人がフルタイムで取り組む6か月のプロジェクトになった。

- [Details on Expiring DigitalOcean Credits](https://blog.digitalocean.com/details-on-expiring-digitalocean-credits/) - クレジットに有効期限が必要な理由。未使用のクレジットは貸借対照表で負債として扱われる。

- [Hacking Scooters: How I Created \$100k Worth Of Free Rides](https://fant.io/p/hacking-voi/) - プロモーションコードを悪用し、スクーターを無制限に無料利用した事例と注意点。

- [China’s Pinduoduo reports theft of online discount vouchers to police](https://web.archive.org/web/20230404113232/https://www.reuters.com/article/us-pinduoduo-china/chinas-pinduoduo-reports-theft-of-online-discount-vouchers-to-police-idUSKCN1PE05J) - オンラインの集団がプラットフォームの抜け穴を悪用し、数千万元相当の割引券を盗んだという報道。

- [Council Directive 2016/1065 as regards the treatment of vouchers](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016L1065) - バウチャーへのVAT適用を定めるEU指令。

- [The coupon code is a slap in the face](https://justinjackson.ca/the-coupon-code-is-a-slap-in-the-face) - クーポンを持たない利用者に、空のクーポン入力欄を見せることの悪影響。記事の追記には、当初の体験談を裏付ける研究がある。

## <a id="taxes"></a>税

- [2017 Tax Software Developer's Guides](https://web.archive.org/web/20240227073911/https://www.mass.gov/lists/2017-tax-software-developers-guides) - 2017年の開発者向けガイドに含まれる、税務ソフトウェアのテストケース。

- [{Digital,Cloud,Electronic,Online} Services VAT Rate Database](https://github.com/kdeldycke/vat-rates) - 無料リソース。顧客の居住国に応じて、国外のオンラインサービスに適用されるVAT税率をまとめたデータベース。地域ごとの例外も含む。

- [Global VAT & GST on digital services](https://www.avalara.com/vatlive/en/global-vat-gst-on-e-services.html) - 国外から提供されるオンラインサービスへの課税を義務付ける国の資料。

- 英国のスーパーマーケットがカード処理手数料を課しながら、同額を会計時の価格から差し引いていたというコメント投稿者の説明（[出典](https://news.ycombinator.com/item?id=22047028)）。リストはこれを、[処理手数料にかかるVATを仕入税額として控除すること](https://www.gov.uk/guidance/vat-guide-notice-700#section4)と結び付けている。

- [Streamlined Sales Tax Governing Board](https://www.streamlinedsalestax.org/about-us/about-sstgb) - 売上税の会計・徴収を自動化し標準化する、米国の複数州による取り組み。

### <a id="european-vat"></a><a id="欧州vat"></a>欧州のVAT

- [How to correctly setup SaaS subscriptions to charge VAT in Europe](https://web.archive.org/web/20260220184109/https://medium.com/slight-pause/how-to-setup-saas-subscriptions-correctly-to-charge-vat-in-europe-d75d857b5d01) - 欧州でVATを徴収するためにSaaSのサブスクリプションを設定した経験談。単純なStripe連携では不十分な場合があると警告している。

- [Council Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L:2006:347:FULL) - VATの共通制度を定めるEU指令。

- [What does the "Reverse Charge" refer to?](https://news.ycombinator.com/item?id=8767388) - 供給者に代わって顧客がVATの処理を担う、リバースチャージに関する議論。

## <a id="invoice"></a>請求書

請求書は、決済による精算を待つ、利用済みのサービスや購入した製品を記録します。

- [On GCP invoiced billing](https://news.ycombinator.com/item?id=17517479) - 利用後に請求書を発行して代金を支払う、B2Bに適した[請求書払い](https://cloud.google.com/billing/docs/how-to/invoiced-billing)の議論。リストの筆者は、GCPでの設定が複雑なのは、高額な不正被害を減らすためではないかと推測している。

### <a id="structure"></a><a id="構造"></a>構成

- [Content of EU invoices](https://web.archive.org/web/20260128155309/https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AL%3A2006%3A347%3AFULL) - EU指令2006/112/ECの第4節（請求書の内容）第226条で、EUの請求書に記載を求められる情報。

### <a id="integrity"></a><a id="完全性"></a>改ざん防止

このリストでは、発行済みの請求書は変更しないものとして扱います。調整するときも、元の記録を保持します。

- [Digital signatures: how Sleek leverages Cloud HSM to guarantee the integrity of legal documents](https://web.archive.org/web/20260113213039/https://medium.com/google-developers/digital-signatures-how-sleek-leverages-cloud-hsm-to-guarantee-the-integrity-of-legal-documents-a7bd3b82faf6) - SleekがGCP Cloud HSMで文書に電子署名し、変更できない監査証跡を作る方法。請求書や契約への応用が考えられる。

- [OpenTimestamps](https://opentimestamps.org) - Bitcoinのブロックチェーン上で、変更できない文書に直接タイムスタンプを付ける方法。

- [Credit note](https://en.wikipedia.org/wiki/Credit_note) - リストでは、元の請求書を変更せずに、その全額または一部を取り消す唯一の方法を、クレジットノートと説明している。

### <a id="generators"></a>生成ツール

- [Invoice Builder](https://github.com/piratuks/invoice-builder) - 無料リソース。オフラインでの利用を優先したデスクトップアプリ。請求書・見積書の作成、管理、PDF出力に対応し、全データを利用者が所有するローカルデータベースに保存する。

- [InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) - 無料リソース。請求書・顧客・支払いを管理する、セルフホスト型のオープンソースアプリ。コミュニティのプロジェクトで、有料版はない。

- [klirr](https://github.com/sajjon/klirr) - 無料リソース。サービスと経費の請求書を生成する、保守不要のFOSSコマンドラインツール。

- [InvoiceGenerator](https://github.com/by-cx/InvoiceGenerator) - 無料リソース。簡単な請求書を生成するPythonライブラリ。

- [microinvoice](https://github.com/baptistejamin/node-microinvoice) - 無料リソース。PDFKitでPDF請求書を高速生成するNode.jsライブラリ。ヘッドレスブラウザーは不要。

- [Ruby Invoicing Framework](https://github.com/code-mancers/invoicing) - 無料リソース。商用のRailsアプリで請求書を生成・表示するための枠組み。柔軟な業務ロジックと、税・手数料の計算ツールを備える。

### <a id="extractors"></a>抽出ツール

- [InvoiceNet](https://github.com/naiveHobo/InvoiceNet) - 無料リソース。請求書から情報を抽出するための深層ニューラルネットワーク。

### <a id="electronic-invoices"></a>電子請求書

- [Invoice Security Vulnerabilities](https://invoice.secvuln.info) - EUのXMLベースの電子請求書標準にあるセキュリティ上の脆弱性を調べる資料。

- [EU eInvoicing](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+HUB) - 電子請求書の欧州標準。

- [Factur-X](https://github.com/akretion/factur-x) - 無料リソース。フランスとドイツの電子請求書標準を扱うPythonライブラリ。

- [Universal Business Language](https://en.wikipedia.org/wiki/Universal_Business_Language) - リストでは、ほとんどの請求書ソフトウェアがデータ転送のために読み書きできるとされる、XMLの文書言語。

- [GOBL](https://github.com/invopop/gobl) - 商用提供あり。JSON Schema、オープンソースGoライブラリ、世界各国の税のデータベース、変換ツールを一つにまとめたパッケージ。Invopopは公開仕様の上に構築した、マネージド型の電子請求書SaaSを販売する。

## <a id="payments"></a>決済

- [The Best Payment Gateway for Startups](https://web.archive.org/web/20230204235716/http://aynuriev.com/best-payment-gateway-startups/) - 決済サービスの提供者、料金、モデルを比較する資料。

- [Avoiding Double Payments in a Distributed Payments System](https://web.archive.org/web/20260516074518/https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb) - 分散システムで重複した支払いを防ぐ方法。銀行業務向けに発展してきたリレーショナルデータベースのトランザクション対応と、NoSQLで決済を実装する際に必要な注意点を対比する。

- [Monzo's bank transfers post-mortem](https://monzo.com/blog/2019/06/20/why-bank-transfers-failed-on-30th-may-2019/) - 銀行振込の失敗に関するMonzoの障害報告。決済ゲートウェイの停止に備える必要性を示す。

- [How to Build an Insurance Company](https://www.moderntreasury.com/journal/how-to-build-an-insurance-company) - 決済業務のシステム構成の重要性を扱う記事。

- [EU's Late Payment Directive](https://single-market-economy.ec.europa.eu/smes/sme-strategy/late-payment-directive_en) - 支払いが遅れた場合に適用できる手数料に関する欧州の規則。

- [High failure rate of Point Of Sale devices in the upper Midwest](https://news.ycombinator.com/item?id=20043944) - 湿度が低い環境で、ウールの衣服から生じる静電気がPOS端末の故障を引き起こした事例。

- ACHの仕組みを開発者の視点から解説するシリーズ：[第1部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-1-339d3e7bea1)、[第2部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2-7a890638c4dd)、[第3部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-3-cd98728cf31f)、[第4部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-4-718a48cb8d2c)、[第5部](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-5-1d998bbcd82c)。

- [Handling system failures during payment communication](https://blogs.dropbox.com/tech/2017/09/handling-system-failures-during-payment-communication/) - 信頼性の低い決済サービス提供者との通信障害に対処した、Dropboxの経験談。

- [Why was I charged?](https://wpchrg.wordpress.com) - 予期しない決済取引を説明するためのWordPress専用サイト。繰り返し届く顧客の苦情に対応するため、URLを銀行の取引明細に直接記載していた。

- [Hyperswitch](https://github.com/juspay/hyperswitch) - 商用提供あり。オープンソースの決済処理バックエンド。JuspayはHyperswitch Cloudとセルフホスト型Enterprise版を販売する。オープンソース版は全機能を備え、90以上のコネクター、保管機能（vault）、ルーティング、3DS、不正対策の連携に対応する。

- [Polar](https://github.com/polarsource/polar) - 商用提供あり。SaaSとデジタル製品を販売するための、オープンソース収益化プラットフォーム。Polar Software Inc.はpolar.shで販売主体（merchant of record）を担い、各取引の一部を受け取る代わりに、請求・売上税・VATの納付を処理する。セルフホスト可能なオープンソース版では、利用者自身のStripeアカウント上で、チェックアウト、サブスクリプション、使用量の計測、ライセンスキーを提供する。

- [moov](https://github.com/moov-io) - 無料リソース。金融技術向けのApache-2.0ライブラリ群。[`moov-io/ach`](https://github.com/moov-io/ach)、[`iso8583`](https://github.com/moov-io/iso8583)、[`watchman`](https://github.com/moov-io/watchman)などを含む。これらを基にした有料製品はない。

- [Fintech Open Source Foundation](https://github.com/finos) - 無料リソース。金融サービス向けのオープンソースプロジェクトを運営する、Linux Foundationのプロジェクト。

### <a id="receipt"></a>領収書

領収書は決済取引を記録します。

- [The humble receipt gets a brilliant redesign](https://susielu.com/data-viz/reviziting-the-receipt) - Netflixのデータエンジニアによる、レシートのデザインの見直し。

- [The long, long history of long, long CVS receipts](https://www.vox.com/the-goods/2018/10/10/17956950/why-are-cvs-pharmacy-receipts-so-long) - 「CVSはほかとよく似たドラッグストアだが、一つ重要な違いがある。レシートがとても長い」。

### <a id="credit-cards"></a>クレジットカード

このリストでは、クレジットカードを最も普及した決済手段としています。

- ['Is that even legal?': Companies may be sharing new credit or debit card information without you knowing](https://www.cbc.ca/news/business/banking-information-shared-with-third-parties-1.5102931) - 交換後の口座番号と有効期限を加盟店に共有する、クレジットカード・デビットカードの更新サービスを扱う記事。Visaの実装は[VAU](https://developer.visa.com/capabilities/vau)、Mastercardの実装は[ABU](https://developer.mastercard.com/product/automatic-billing-updater-abu/)と呼ばれる。

- [Strong Customer Authentication](https://stripe.com/guides/strong-customer-authentication) - [決済サービス指令](https://en.wikipedia.org/wiki/Payment_Services_Directive)2の説明。

- [Address Verification System](https://en.wikipedia.org/wiki/Address_Verification_System) - 顧客の請求先住所と、クレジットカードに登録された住所が一致するかを確認する仕組み。

### <a id="bank-accounts"></a>銀行口座

銀行口座や振込による支払いです。

- [A (shallow) dive into the American banking system](https://blog.yossarian.net/2019/12/25/A-shallow-dive-into-the-American-banking-system) - 米国の銀行システムに関する説明。通常、送金先として指定できる小切手口座（checking account）と貯蓄口座（savings account）を中心に扱う。

- [Open IBAN](https://openiban.com) - 無料リソース。IBANの検証・計算を行う、無料で公開されたWebサービス。

- [Swift Codes](https://bank.codes/swift-code/) - 個人利用に限って提供されるSWIFT／BICコード。

- [Swift Codes Repository](https://github.com/PeterNotenboom/SwiftCodes) - 無料リソース。上記のサイトから収集した、世界各国のSWIFT／BICコードの静的JSONデータ。最終更新は2019年。記録された原文では、最大の無料参照資料とされ、コードの変更が遅いため、今も幅広く利用できると説明されている。

- [EPC QR code](https://en.wikipedia.org/wiki/EPC_QR_code) - SEPAを通じた銀行口座間の送金に使うQRコードの欧州標準。

### <a id="online-payments"></a>オンライン決済

オンラインの送金サービスと決済プロトコルです。

- [UPI 101: The Basics](https://blog.setu.co/articles/upi-101-the-basics) - インドのUnified Payments Interfaceの入門記事。記事当時、開始から4年のこの仕組みは、インドのデジタル決済の40～45%を占めていた。

- [20 years of payment processing problems](https://kaimi.io/en/2022/07/20-years-of-payment-processing-problems-en/) - 20年間にわたる決済APIの問題を集めた記事。問題を未解決のままにすると、資金が盗まれるおそれがあると警告している。

- [The untold story of Stripe](https://www.wired.co.uk/article/stripe-payments-apple-amazon-facebook) - Stripeの歴史を扱う記事。取扱高が一定額に達するとPayPalが21～60日のローリングリザーブを課し、収益の最大30%が最長2か月間拘束されることがあったと説明している。

- [Idempotency in the context of payments](https://developers.google.com/standard-payments/reference/idempotency) - 決済要求における冪等性。同じクライアントから同一の要求を複数回受けても、最終状態が変わらないことを求める。参照資料では、競合状態の防止を扱う。

- [Optimizing payments with machine learning](https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning) - 決済ワークフローと、固定的な規則を機械学習で置き換え、失敗・再試行の処理を改善して課金の成功率を上げる方法。

## <a id="fraud"></a>不正対策

金銭的な利益を狙い、事業を悪用する試みが生じます。不正の検知と防止に関する資料です。

- [Detecting fraudulent activity in a cloud using privacy-friendly data aggregates](https://arxiv.org/pdf/1411.6721v1.pdf) - 請求データから、プライバシーに配慮した非侵襲的な集計値を使い、DDoS攻撃やBitcoinのマイニングなどの活動を検知する方法。

- [Awesome List of IAM: Fraud links](https://github.com/kdeldycke/awesome-iam#fraud) - このリストと関連するIAMリポジトリにある、利用者アカウントの不正管理の資料。

- [Driving Global Fraud Losses Down While Empowering Business Growth](https://youtu.be/yJKWpTBVTiI?t=60) - 事業の成長と不正による損失率の低下を同時に実現することは、業界では珍しいと述べるUber Eatsの講演。腐敗しない商品のチャージバック、プロモーションの悪用、返金を扱う。

- [KYC and AML: beyond the acronyms](https://www.bitsaboutmoney.com/archive/kyc-and-aml-beyond-the-acronyms/) - リスクを減らす確率的なプロセスとして、KYCを詳しく説明する記事。

- [Awesome Fraud Detection Research Papers](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers) - クレジットカード不正、決済取引、融資、税関検査、資金洗浄ネットワークなどの不正について、複数の学会の論文を集めた資料。

- [Tazama](https://github.com/tazama-lf) - 無料リソース。Linux FoundationのTazamaプロジェクトが管理する、不正・資金洗浄の検知向けのオープンソースリアルタイム取引監視システム。規則の定義、重み付け、取引への適用を行うエンジンを備える。エンジン自体は決済や金融取引に限定されない。

- [Mojaloop Fraud Risk Management](https://github.com/mojaloop/fraud_risk_management/tree/master/typology-214/src/rules) - 無料リソース。Mojaloop Foundationによる具体的な資金洗浄対策（AML）の規則実装。金額の90～100%が一致する範囲での取引ミラーリング、多段階の受取人グラフ探索による資金の多層化の検知、休眠口座の再稼働、大口取引の支払者、新規受取人への送金の規則を含む。リポジトリはアーカイブ済みだが、リストでは、ほかのオープンソースでは珍しい静的な参考資料として紹介されている。

### <a id="cards"></a>カード

このリストでは、最も普及した決済手段であるクレジットカードが、不正の大半で悪用されると述べています。

- [Reproducible Machine Learning for Credit Card Fraud detection](https://fraud-detection-handbook.github.io/fraud-detection-handbook/) - 取引内のパターンを見つけるための実践的なハンドブック。

- [How I Stopped a Credit Card Thief From Ripping Off 3,537 People – and Saved Our Nonprofit in the Process](https://www.freecodecamp.org/news/stopping-credit-card-fraud-and-saving-our-nonprofit/) - 決済APIで大量の盗難カードの有効性を確認する、カードテストの事例。

- [How Candy Japan got credit card fraud somewhat under control](https://www.candyjapan.com/behind-the-scenes/how-i-got-credit-card-fraud-somewhat-under-control) - [警告の兆候](https://www.candyjapan.com/behind-the-scenes/fraudulent-transaction-warning-signs)から不正の疑いがある注文を見つける方法と、不正を難しくする対策の提案。

- [Five Fun Fraud Facts](https://web.archive.org/web/20220327085654/https://blog.sift.com/2013/five-ecommerce-fraud-facts/) - 機械学習で不正を検知するための特徴量。[追加の兆候](https://news.ycombinator.com/item?id=6376350)と[取引から得られる地理情報](https://news.ycombinator.com/item?id=6376221)に関するHNの議論も補足する。

- [Credit Card Fraud Detection using Autoencoders in Keras](https://web.archive.org/web/20200101000000/https://medium.com/@curiousily/credit-card-fraud-detection-using-autoencoders-in-keras-tensorflow-for-hackers-part-vii-20e0c85301bd) - 異常検知で疑わしいクレジットカード取引を見つけるためのチュートリアル。

- [Training an ML model to score chargebacks](https://threadreaderapp.com/thread/1315452323330621440.html) - プラットフォームのネットワーク効果を使い、チャージバックの異議申し立てに勝てる可能性を予測する例。

- [How credit card thieves use free-to-play apps to launder gains](https://kromtech.com/blog/security-center/digital-laundry) - 基本無料アプリを通じた資金洗浄を防ぐには、クレジットカードの確認とアカウント作成時の検証を強化すべきだと論じる記事。

### <a id="trust-score"></a>信頼スコア

複数の兆候を組み合わせたスコアを、利用者の信頼性の目安にできます。カスタマーサポート部門は、自動処理の対象にならない対応を判断する際に使えます。

- [GCP improved account management policies to better support customers](https://cloudplatform.googleblog.com/2018/07/improving-our-account-management-policies-to-better-support-customers.html) - 自動的な不正対策への過度の依存が、顧客の不満を招く例。

- [Digital Ocean's Update on Customer Shutdown Incident](https://blog.digitalocean.com/an-update-on-last-weeks-customer-shutdown-incident/) - 顧客のサービス停止に関するDigitalOceanの説明。無料資源の悪用を防ぐため、強引にサーバーを停止する対策の限界を示す。

- [Awesome Credit Modeling](https://github.com/mourarthur/awesome-credit-modeling#readme) - 信用申込者をリスク別に分類する統計手法と研究。一般的な信頼スコアの改善にも参考になる。

### <a id="statistics"></a>統計

自動的な不正検知に役立つ統計手法です。

- [Benford's law](https://en.wikipedia.org/wiki/Benford's_law) - 数字の分布が、会計不正の兆候になり得る。

- [Integer percentages as electoral falsification fingerprints](https://arxiv.org/pdf/1410.6059.pdf) - 選挙結果に整数の百分率が異常に多く現れることを、人為的な異常の可能性として調べる論文。ほかの不正検知にも応用が考えられる。

- [Huber loss](https://en.wikipedia.org/wiki/Huber_loss) - 「ロバスト回帰で使う損失関数で、二乗誤差損失に比べ、データの外れ値の影響を受けにくい」。

- [Peak Detection in the Python World](https://blog.ytotech.com/2015/11/01/findpeaks-in-python/) - 外れ値を検出する簡単な方法。

- [Method to check if you swapped 2 digits](https://news.ycombinator.com/item?id=39021273) - 複式簿記の台帳で二つの数字を入れ替えた誤りを見つける、手作業の会計技法。

### <a id="billing"></a>請求

- [More than 600 million users installed Android 'fleeceware' apps from the Play Store](https://www.zdnet.com/article/more-than-600-million-users-installed-android-fleeceware-apps-from-the-play-store/) - 試用期間が終わったあと、利用者が気付かないまま課金を続けるアプリ「fleeceware」に関する報道。

- [CEO Fraud](https://www.knowbe4.com/ceo-fraud) - CEOを装って例外的な支払いを指示する、請求担当者を狙った詐欺。

- [The Challenges of Operating a Computing Cloud and Charging for its Use](https://web.stanford.edu/class/cs349d/docs/theimer.pdf) - AWSの副社長による発表。前半の90%は一般的な信頼性を扱い、最後の4枚のスライドで、不正を制限するソフトクォータなど、クラウドサービスの課金をまとめている。

- [Fraud in Telephony Networks](http://www.s3.eurecom.fr/docs/eurosp17_sahin.pdf) - 請求や少額取引の計測に関連する、電話網の不正についての論文。6ページの分類では、根本原因、脆弱性、悪用の手法、不正を行う者の利益を区別している。

## UX/UI

金銭に関する問題は、すぐに利用者の不満につながります。わかりやすい画面と操作の設計は、その不満を減らす助けになります。

- [Apple In-app purchase Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase) - 使いやすいアプリ内購入と[自動更新サブスクリプション](https://developer.apple.com/app-store/subscriptions/)の設計指針。

- [Which has a higher conversion rate: A single long ecommerce checkout form or a multi-step one?](https://capitalandgrowth.org/questions/2055/which-has-a-higher-conversion-rate-a-single-long-e.html) - まずチェックアウト時の不安やためらいを和らげるべきだという議論。カード情報の入力や購入完了の手順の近くに信頼を示すマークや利用者の声を置き、製品を検討する早い段階で保証を説明するなど、安心を与える工夫を挙げる。

- [We tried to make billing backendless](https://useautumn.com/blog/backendless) - 請求の操作をバックエンドからフロントエンドに移そうとしたが、セキュリティ上の懸念から成功しなかった試み。

- [Pricing pages design](https://pricingpages.design) - サービスの提示方法の参考になる、さまざまなSaaS企業の価格ページ集。

## <a id="business-intelligence"></a>ビジネスインテリジェンス

請求処理を担当するチームは、事業の健全性を測定・報告するための重要なデータを扱います。

### <a id="metrics"></a>指標

事業を監視するための重要業績評価指標（KPI）の定義と収集です。

- [Startup financial models - 12 templates compared for SaaS](https://www.stephnass.com/blog/startup-financial-model) - 事業の状況を把握するための参考になる、12のSaaS財務モデルのテンプレートの比較。

- [16 Startup Metrics](https://a16z.com/16-startup-metrics/) - スタートアップの16の指標。顧客獲得単価（CAC）と顧客生涯価値（CLV）を、二つの重要な指標として取り上げる。

- [Thinking about growth and profit](https://jlongster.com/thinking-growth-profit) - 投資・利益・成長が、価格、無料試用、プラン構成の判断に与える影響。

- [A Quantitative Approach to Product Market Fit](https://tribecap.co/a-quantitative-approach-to-product-market-fit/) - 上記の事業指標を、プロダクトマーケットフィットの評価の兆候としても使う方法。

- [Startup growth calculator](http://growth.tlb.org) - スタートアップ向けの対話式の収益性計算ツール。

- [An Overview of Visa](http://minesafetydisclosures.com/blog/2019/7/23/part-ll-an-overview-of-visa) - Visaの事業モデルと指標の分析。

- [The SaaS Financial Model You'll Actually Use](https://web.archive.org/web/20230205234207/https://baremetrics.com/blog/saas-financial-model) - 個々の指標を財務全体の中で捉える、スタートアップの財務の解説。

### <a id="customer-lifetime-value"></a>顧客生涯価値

顧客生涯価値（CLV、LTVとも呼ぶ）は、顧客一人あたりが生み出す価値を測ります。このリストでは、この指標を理解し、行動に反映することを、事業の販売活動で最も重要な部分としています。

- [You're all calculating churn rates wrong](https://web.archive.org/web/20260204065339/https://medium.com/swlh/youre-all-calculating-churn-rates-wrong-cbab072cd992) - 無料試用やバウチャーなどによって顧客の利用期間中に解約の確率が変わる場合、解約率だけではCLVの計算に有用な尺度にならない理由。離脱をモデル化する分布が結果に与える影響を示す。

- [How to project customer retention](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Fader_hardie_jim_07.pdf) - 顧客維持の予測について、[指数分布ではなく幾何分布を使う方法](https://news.ycombinator.com/item?id=24833319)を扱う論文。幾何分布は月次契約などの離散的な期間に適し、指数分布は連続時間の過程に適する。

- [Survival Analysis For Customer Retention](https://two-wrongs.com/survival-analysis-for-customer-retention.html) - [Kaplan–Meier生存曲線](https://two-wrongs.com/bootstrapping-kaplan-meier-confidence-intervals.html)など、生存関数による顧客維持のモデル化。

- [RFM (customer value)](https://en.wikipedia.org/wiki/RFM_%28customer_value%29) - 直近の購入からの経過（recency）、購入頻度（frequency）、購入金額（monetary value）で顧客を区分し、顧客価値のモデルを精緻化する方法。

- [Churn Prediction](https://towardsdatascience.com/customer-churn-prediction-with-text-and-interpretability-bd3d57af34b1/) - PythonのXGBoostによる二値分類で解約を予測し、事業上の対応につなげる入門資料。

- [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) - 無料リソース。利用者の「生存」「離脱」の状態に基づいて分析する、機能豊富なPythonパッケージ。PyMC Labsが管理するApache-2.0ライブラリ。同社は関連するコンサルティングだけを販売し、有料のライブラリ版はない。

### <a id="data-engineering"></a>データエンジニアリング

データエンジニアは、データを整形・永続化・統合し、大規模な生成と利用を支えます。このリストでは、データサイエンティストを迎える前に、こうした基盤を整えることを勧めています。

- [AI vs Data Science vs Data Engineering](https://web.archive.org/web/20171009002725/https://blog.insightdatascience.com/how-emerging-ai-roles-fit-in-the-data-landscape-d4cd922c389b?gi=ebcf517502c7) - 変換済みデータのパイプラインと基盤を構築するデータエンジニア、そのデータを分析・モデル化して製品機能や事業の成果につなげるデータサイエンティスト、認知作業の自動化に取り組むAI担当者の比較。

- [Ten Ways Your Data Project is Going to Fail](https://www.martingoodson.com/ten-ways-your-data-project-is-going-to-fail/) - 業務に役割を合わせるべきだという議論。ETLにはデータエンジニアを、報告にはBIアナリストを充て、そのためにデータサイエンティストを採用することを避ける。

- [Cargo cult data science](http://blog.richardweiss.org/2017/07/25/data-science-in-organizations.html) - データサイエンスは企業文化であり、技術を入手するだけではその文化は生まれないという議論。

- [Why not use Double or Float to represent currency?](https://web.archive.org/web/20250524184249/https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency/3730040#answer-3730040) - 2進浮動小数点型で、金額に使う10進小数を正確に表せない理由。

- [Never Use Floats for Money](https://husobee.github.io/money/float/2016/09/23/never-use-floats-for-currency.html) - 「10^-1、つまり0.1を2進数で表そうとするときも、まさにこの問題が起きる。0.1や0.01には正確な2進表現がない」。

- [The Soul of an Old Machine: Revisiting the Timeless von Neumann Architecture](https://ankush.dev/p/neumann_architecture) - EDVACが作られる前の、浮動小数点演算に対するvon Neumannの疑問を扱う歴史的な考察。精度と丸めの問題の例を示す。

- [European Spreadsheet Risks Interest Group - Horror Stories](https://eusprig.org/research-info/horror-stories/) - 管理やテストが不十分な表計算モデルによって、収益の損失、価格の誤り、不適切な判断、不正、金融システム全体に及ぶ破綻が起きた事例。

### <a id="tools"></a>ツール

可視化、ダッシュボード、SQLによる問い合わせ、データの掘り下げのためのソフトウェアです。

- [Practical Business Python](https://pbpython.com) - 事業でPythonを効果的に使うためのブログ。

- [`redash`](https://github.com/getredash/redash) - 無料リソース。データソースへの問い合わせ、ダッシュボードの作成、社内共有のツール。Databricksが所有し、ホスト型SaaSは2021年に終了した。記録された原文では、Databricksの組織内でコミュニティが保守し、有料のRedash製品はないと説明されている。

- [Apache Superset](https://github.com/apache/superset) - 無料リソース。Apache Software Foundationが管理する、企業利用に対応したビジネスインテリジェンスのWebアプリ。

- [Meltano](https://github.com/meltano/meltano) - 無料リソース。データの読み込みから分析まで、全ライフサイクルを扱う、設定より規約を優先する製品。Meltanoがオープンソースのコアに加えて販売するのは、マネージド型クラウドホスティングとサポートのSLAのみ。

## <a id="competitive-analysis"></a>競合分析

請求分野の企業と製品の動向を追うための資料です。

- [Patents on billing systems of the dot-com era](https://news.ycombinator.com/item?id=34773821) - ドットコム期の請求システムの特許についての議論。コメント投稿者は、放棄された先行技術として説明し、その概念を実装・商用化できると主張している。

- 請求プラットフォームを組み上げるには、分野に適したエンジニアからなる、ある程度高度な開発チームが必要だというGoogleの製品ディレクターの見解（[出典](https://www.techemails.com/i/124009734/google-pms-on-stripe)）。

### <a id="cloud-providers"></a>クラウドプロバイダー

- [AWS Cost Management announcements](https://aws.amazon.com/about-aws/whats-new/aws-cost-management/) - AWSの請求・コスト管理機能に関する発表。

- [AWS reserved instances vs saving plan](https://web.archive.org/web/20240602133657/https://www.prosperops.com/wp-content/uploads/2022/01/ris_and_savings_plans.png) - AWSのReserved InstancesとSavings Plansについて、機能と平均割引率を比較する表。

- [GCP billing release notes](https://cloud.google.com/billing/docs/release-notes) - GCPの請求機能の変更に関するリリースノート。

- [GCP billing news](https://www.gcpweekly.com/gcp-resources/tag/billing/) - 非公式のGoogle Cloud Platformニュースレターが提供する、請求のニュース。

- [More choice, less complexity: New Compute Engine pricing options on tap](https://cloud.google.com/blog/products/compute/more-choice-less-complexity-new-compute-engine-pricing-options-on-tap) - リンク先の記事で発表された、GCPの価格オプションのまとめ。

- [Orbitera](https://en.wikipedia.org/wiki/Orbitera) - 記録された原文で、GCPの請求関連の子会社と説明されている企業。

- [DigitalOcean Billing changelog](http://docs.digitalocean.com/release-notes/billing/) - DigitalOceanの請求機能のリリースノート。

## <a id="history"></a>歴史

- ミシガン大学でLarry PageがMichigan Terminal Systemを利用し、App Engineのエンジニアにその例に倣うよう勧めたというコメント投稿者の回想。投稿者は、AWSとGCPの請求にも見覚えのある類似点があると述べている（[出典](https://news.ycombinator.com/item?id=35123587)）。

- [Product Development as Iterated Taste](https://commoncog.com/product-development-iterated-taste/) - AWSが、顧客の利用方法を予測できなかったため、単純なサブスクリプション料金ではなく、費用に応じたS3の価格設定を選んだ経緯。

- [Israel demanded Google and Amazon use secret 'wink' to sidestep legal orders](https://www.theguardian.com/us-news/2025/oct/29/google-amazon-israel-contract-secret-code#how-the-secret-code-works) - 符号化した金額の無作為な手数料の請求書を、法的義務を回避する秘密の合図に使ったという報道。リストの筆者は、柔軟な請求システムの価値を示す例として取り上げている。

- [£sd computing](https://en.wikipedia.org/wiki/%C2%A3sd#Computing) - 1959年に登場したIBM 1401メインフレームには、ポンド・シリング・ペンス（£sd）の演算に対応する、オプションのハードウェアがあった。

- [Engineering and Operations in the Bell System](http://bitsavers.trailing-edge.com/communications/westernElectric/books/Engineering_and_Operations_in_the_Bell_System_2ed_1984.pdf) - 445ページから始まる第10.5節「Billing Equipment and Systems」で、Bell Systemの通話の計測・料金設定の歴史と技術の変遷を説明する。

- [The vanished grandeur of accounting](https://www.bostonglobe.com/ideas/2014/06/07/the-vanished-grandeur-accounting/3zcbRBoPDNIryWyNYNMvbO/story.html) - オランダ美術の重要なジャンルとして、会計を描いた絵画を扱う記事。

- [Graphic methods for presenting facts](https://archive.org/details/graphicmethodsfo00brinrich/page/336/mode/2up?view=theater&ui=embed&wrapper=false) - 焼石膏（plaster of Paris）製の物理モデルで価格設定を最適化した、1914年の例。

## <a id="humour"></a>ユーモア

元のリストの冗談は、「請求は笑いごとではない」というものです。

- [Detax](https://detax.framer.website) - 小規模企業向けの租税回避製品を題材にした、架空のWebサイト。
