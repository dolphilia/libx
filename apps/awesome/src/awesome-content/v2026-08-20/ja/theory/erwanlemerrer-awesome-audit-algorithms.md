---
title: "erwanlemerrer/awesome-audit-algorithms"
description: "erwanlemerrer/awesome-audit-algorithmsの正規スナップショット"
licenseSource: "github-erwanlemerrer-awesome-audit-algorithms-readme-md"
---

# Awesome Audit Algorithms [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

ブラックボックスアルゴリズムを監査するアルゴリズムのキュレーション済みリストです。
現在、多くのアルゴリズム（推薦、スコアリング、分類）は第三者プロバイダーで運用され、ユーザー・機関はデータ上でどのように動作するかの洞察を得られません。このリストの監査アルゴリズムは、監査者がリモートアルゴリズムについての洞察を得ようとする、この「ブラックボックス」設定へ適用されます。

<img src="https://github.com/erwanlemerrer/awesome-audit-algorithms/blob/main/resources/audit.png" width="600" alt="banner" class="center">

> ユーザーは利用可能な API などを通じてリモートアルゴリズムへ問い合わせ、そのアルゴリズムに関する情報を推論します。

## 更新
更新は低速・停止中: 現行技術により置き換えられています...

## 目次
- [論文](#papers)
- [関連イベント（会議・ワークショップ）](#related-events)

## 論文

### 2026 
- [The Fair Game: Auditing & debiasing AI algorithms over time](https://www.cambridge.org/core/journals/cambridge-forum-on-ai-law-and-governance/article/fair-game-auditing-debiasing-ai-algorithms-over-time/9E8408C67F7CE30505122DD1586D9FA2) - Cambridge Forum on AI: Law and Governance 誌。
- [Exposing the Illusion of Fairness: Auditing Vulnerabilities to Distributional Manipulation Attacks](https://arxiv.org/pdf/2507.20708) - (arXiv)

### 2025
- [Auditing Pay-Per-Token in Large Language Models](https://arxiv.org/pdf/2510.05181) - (arXiv) *プロバイダーへ順次問い合わせる信頼済み第三者監査者がトークンの誤報告を検出できる、マルチンゲール理論に基づく監査フレームワークを開発。*
- [P2NIA: Privacy-Preserving Non-Iterative Auditing](https://arxiv.org/abs/2504.00874) - (ECAI) *監査者・プラットフォーム双方に有益な協働を提案。従来の API ベース監査に伴う課題を回避し、合成・ローカルデータで公平性評価を高める、プライバシー保護・非反復監査スキームです。*
- [The Fair Game: Auditing & debiasing AI algorithms overtime](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9E8408C67F7CE30505122DD1586D9FA2/S3033373325000080a.pdf/the-fair-game-auditing-and-debiasing-ai-algorithms-over-time.pdf) - (Cambridge Forum on AI: Law and Governance) *ML システム周辺に展開されたバイアス除去アルゴリズムへフィードバックを送る監査者を作り、社会の倫理・法的枠組みの進化をシミュレートすることを目指します。*
- [Robust ML Auditing using Prior Knowledge](https://arxiv.org/pdf/2505.04796) - (ICML) *グラウンドトゥルースについての事前知識を用いて、監査者が監査操作を防止できる条件を形式的に確立。*
- [CALM: Curiosity-Driven Auditing for Large Language Models](https://arxiv.org/abs/2501.02997) - (AAAI) *違法、不道徳、安全でない行動を示す対象 LLM の入出力ペアを自動的に発見することを目標とする、ブラックボックス最適化問題としての監査。*
- [Queries, Representation & Detection: The Next 100 Model Fingerprinting Schemes](https://arxiv.org/abs/2412.13021) - (AAAI) *モデルフィンガープリンティングを三つの中核要素へ分け、未探索の約100通りの組合せを特定して性能への洞察を得ます。*

### 2024
- [Hardware and software platform inference](https://arxiv.org/pdf/2411.05197) - (arXiv) *入出力の振る舞いのみから、ブラックボックス機械学習モデルの基盤 GPU アーキテクチャ・ソフトウェアスタックを特定する手法。*
- [Auditing Local Explanations is Hard](https://arxiv.org/abs/2407.13281) - (NeurIPS) *説明を監査する際の（法外な）クエリ複雑性を示します。*
- [LLMs hallucinate graphs too: a structural perspective](https://arxiv.org/abs/2409.00159) - (complex networks) *既知グラフについて LLM に問い合わせ、トポロジー的幻覚を研究。構造的幻覚ランクを提案します。*
- [Fairness Auditing with Multi-Agent Collaboration](https://arxiv.org/pdf/2402.08522) - (ECAI) *複数エージェントが協働し、それぞれ異なるタスクについて同一プラットフォームを監査することを考察。*
- [Mapping the Field of Algorithm Auditing: A Systematic Literature Review
Identifying Research Trends, Linguistic and Geographical Disparities](https://arxiv.org/pdf/2401.11194) - (Arxiv) *アルゴリズム監査研究の系統的レビューと、その方法論的アプローチの傾向の特定。*
- [FairProof: Confidential and Certifiable Fairness for Neural Networks](https://arxiv.org/pdf/2402.12572v1.pdf) - (Arxiv) *Zero-Knowledge Proofs などの暗号ツールを用いる、従来の監査に代わるパラダイムを提案。小規模ニューラルネットワークの公平性を検証する FairProof システムを提供します。*
- [Under manipulations, are some AI models harder to audit?](https://grodino.github.io/projects/manipulated-audits/preprint.pdf) - (SATML) *Rademacher 複雑性を用いて、ブラックボックス監査の難しさを対象モデルの容量へ関連付けます。*
- [Improved Membership Inference Attacks Against Language Classification Models](https://arxiv.org/pdf/2310.07219.pdf) - (ICLR) *監査モードで分類器に対するメンバーシップ推論攻撃を実行するフレームワークを提示。*
- [Auditing Fairness by Betting](https://arxiv.org/pdf/2305.17570.pdf) - (Neurips) [[コード]](https://github.com/bchugg/auditing-fairness) *ブラックボックス分類器・回帰器から到着するデータを継続的に監視できる逐次手法。*
### 2023
- [Privacy Auditing with One (1) Training Run](https://neurips.cc/virtual/2023/poster/70925) - (NeurIPS - best paper) *一度の訓練実行で差分プライバシー機械学習システムを監査するスキーム。*
- [Auditing fairness under unawareness through counterfactual reasoning](https://www.sciencedirect.com/science/article/pii/S0306457322003259) - (Information Processing & Management) *規制に準拠するブラックボックスモデルにもバイアスが残るかを明らかにする方法を示します。*
- [XAudit : A Theoretical Look at Auditing with Explanations](https://arxiv.org/pdf/2206.04740.pdf) - (Arxiv) *監査における説明の役割を形式化し、モデル説明が監査を助け得るか・どのように助けるかを調査。*
- [Keeping Up with the Language Models: Robustness-Bias Interplay in NLI Data and Models](https://arxiv.org/pdf/2305.12620.pdf) - (Arxiv) *言語モデル自体を使い監査データセットの寿命を延長する方法を提案。既存バイアス監査指標の問題を見つけ、代替案を提示します。*
- [Online Fairness Auditing through Iterative Refinement](https://dl.acm.org/doi/pdf/10.1145/3580305.3599454) - (KDD) *公平性指標の推定に伴う確率的保証の推論を自動化する適応的プロセスを提供。*
- [Stealing the Decoding Algorithms of Language Models](https://people.cs.umass.edu/~amir/papers/CCS23-LM-stealing.pdf) - (CCS) *LLM のデコードアルゴリズムの種類・ハイパーパラメーターを窃取。*
- [Modeling rabbit‑holes on YouTube](https://link.springer.com/epdf/10.1007/s13278-023-01105-9?sharing_token=h-O-asHI49VUWS9FxN1Gsve4RwlQNchNByi7wbcMAY6I98PKW1PqhFQJ_JqQyk3TrB05qDb3LUzMDmKOgrupccQliViDle-rwKEi2MZ8xBViaAQhyN41oZBKLLeXchoeIW2kklVHC094I5KD8pxja4-if6-iB0uAI1FnqnYoxjU%3D) - (SNAM) *YouTube のラビットホールにおけるユーザーの捕捉動態をモデル化し、この閉じ込めの尺度を提供。*
- [Auditing YouTube’s Recommendation Algorithm for Misinformation Filter Bubbles](https://dl.acm.org/doi/full/10.1145/3568392) - (Transactions on Recommender Systems) *「バブルを破る」、すなわち推薦によるバブル閉じ込めを元に戻すのに必要なもの。*
- [Auditing Yelp’s Business Ranking and Review Recommendation Through the Lens of Fairness](https://arxiv.org/pdf/2308.02129.pdf) - (Arxiv) *人口統計的パリティ、露出、分位点線形・ロジスティック回帰などの統計テストにより、Yelp の事業者ランキング・レビュー推薦システムの公平性を監査。*
- [Confidential-PROFITT: Confidential PROof of FaIr Training of Trees](https://openreview.net/pdf?id=iIfDQVyuFD) - (ICLR) *監査対象サーバーで公平性の証明を得るため、公平な決定木学習アルゴリズムとゼロ知識証明プロトコルを提案。*
- [SCALE-UP: An Efficient Black-box Input-level Backdoor Detection via Analyzing Scaled Prediction Consistency](https://arxiv.org/pdf/2302.03251.pdf) - (ICLR) *Machine Learning as a Service（MLaaS）アプリケーションにおける、ブラックボックス設定でのバックドア検出を考察。*
### 2022
- [Two-Face: Adversarial Audit of Commercial Face Recognition Systems](https://ojs.aaai.org/index.php/ICWSM/article/view/19300/19072) - (ICWSM) *複数システムの API・データセットへ敵対的監査を行い、多くの懸念すべき観察を得ます。*
- [Scaling up search engine audits: Practical insights for algorithm auditing](https://journals.sagepub.com/doi/10.1177/01655515221093029) - (Journal of Information Science) [(コード)](https://github.com/gesiscss/WebBot) *仮想エージェントによるブラウジング行動のシミュレーションを使い、複数の検索エンジンを監査。*
- [A zest of lime: towards architecture-independent model distances](https://openreview.net/pdf?id=OUz_9TiTv9j) - (ICLR) *LIME により二つのリモートモデル間の距離を測定。*
- [Active Fairness Auditing](https://proceedings.mlr.press/v162/yan22c/yan22c.pdf) - (ICML) *クエリ効率のよい方法で ML モデルの人口統計的パリティを推定できる、クエリベース監査アルゴリズムを研究。*
- [Look at the Variance! Efficient Black-box Explanations with Sobol-based Sensitivity Analysis](https://proceedings.neurips.cc/paper/2021/file/da94cbeff56cfda50785df477941308b-Paper.pdf) - (NeurIPS) *Sobol 指数は分散の観点から、画像領域間の高次相互作用と、ブラックボックスニューラルネットワーク予測への寄与を効率的に捉えます。*
- [Your Echos are Heard: Tracking, Profiling, and Ad Targeting in the Amazon Smart Speaker Ecosystem](https://arxiv.org/pdf/2204.10920.pdf) - (arxiv) *Amazon Echo システムと広告ターゲティングアルゴリズムの関連を推論。*
### 2021
- [When the Umpire is also a Player: Bias in Private Label Product Recommendations on E-commerce Marketplaces](https://arxiv.org/pdf/2102.00141.pdf) - (FAccT) *Amazon のプライベートブランド製品は不公平な推薦割合を受け、第三者製品より有利になっているか。*
- [Everyday Algorithm Auditing: Understanding the Power of Everyday Users in Surfacing Harmful Algorithmic Behaviors](https://arxiv.org/pdf/2105.02980.pdf) - (CHI) *ユーザーによる「日常的アルゴリズム監査」の意義を示します。*
- [Auditing Black-Box Prediction Models for Data Minimization Compliance](https://www.cs.bu.edu/faculty/crovella/paper-archive/minimization-audit-Neurips21.pdf) - (NeurIPS) *限られたクエリ数で、予測モデルが満たすデータ最小化の水準を測定。*
- [Setting the Record Straighter on Shadow Banning](https://arxiv.org/abs/2012.05101) - (INFOCOM)  [(コード)](https://gitlab.enseeiht.fr/bmorgan/infocom-2021) *Twitter におけるシャドウバン（すなわちモデレーション用ブラックボックスアルゴリズム）の可能性を考察し、複数仮説の確率を測定。*
- [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) - (USENIX Security) *GPT-2 モデルの訓練データから逐語的なテキスト列を抽出。*
- [FairLens: Auditing black-box clinical decision support systems](https://www.sciencedirect.com/science/article/pii/S030645732100145X?casa_token=oyjFKij269MAAAAA:w_ohScpMPNMnkDdzBqAIod5QfBgQlq5Ht9mMRSOydZpOgNG-i1yuqEmBjWN__38gOGmjNL7dVT0) - (Information Processing & Management) *異なるマルチラベル分類の不均衡尺度を比較し、Clinical DSS の潜在的公平性問題を検出・説明するパイプラインを提示。*
- [Auditing Algorithmic Bias on Twitter](https://dl.acm.org/doi/abs/10.1145/3447535.3462491) - (WebSci)。
- [Bayesian Algorithm Execution: Estimating Computable Properties of Black-box Functions Using Mutual Information](https://proceedings.mlr.press/v139/neiswanger21a.html) - (ICML) *ブラックボックスアルゴリズムから特性を抽出する、予算制約下のベイズ最適化手順。*
### 2020
- [Black-Box Ripper: Copying black-box models using generative evolutionary algorithms](https://proceedings.neurips.cc/paper/2020/file/e8d66338fab3727e34a9179ed8804f64-Paper.pdf) - (NeurIPS) *教師・生徒スキームと進化的探索を通じ、クエリ数の制限なしでブラックボックスニューラルモデルの機能を複製。*
- [Auditing radicalization pathways on ](https://dl.acm.org/doi/pdf/10.1145/3351095.3372879) - (FAT*) *静的なチャンネル推薦に対するランダムウォークを用い、急進的チャンネル相互間の到達可能性を研究。*
- [Adversarial Model Extraction on Graph Neural Networks](https://arxiv.org/abs/1912.07721) - (AAAI Workshop on Deep Learning on Graphs: Methodologies and Applications) *GNN モデル抽出を導入し、その予備的アプローチを提示。*
- [Remote Explainability faces the bouncer problem](https://rdcu.be/b6qB4) - (Nature Machine Intelligence volume 2, pages529–539)  [(コード)](https://github.com/erwanlemerrer/bouncer_problem) *リモート AI 判断の説明にある虚偽を、一回のリクエストでは発見不可能または困難であることを示します。*
- [GeoDA: a geometric framework for black-box adversarial attacks](https://openaccess.thecvf.com/content_CVPR_2020/papers/Rahmati_GeoDA_A_Geometric_Framework_for_Black-Box_Adversarial_Attacks_CVPR_2020_paper.pdf) - (CVPR)  [(コード)](https://github.com/thisisalirah/GeoDA) *純粋なブラックボックス設定（勾配なし・推論クラスのみ）で、モデルを欺く敵対的事例を作成。*
- [The Imitation Game: Algorithm Selectionby Exploiting Black-Box Recommender](https://github.com/erwanlemerrer/erwanlemerrer.github.io/raw/master/files/imitation_blackbox_recommenders_netys-2020.pdf) - (Netys)  [(コード)](https://github.com/gdamaskinos/RecRank) *リモートでよりよく訓練された推薦アルゴリズムの判断を模倣して、ローカル推薦アルゴリズムをパラメーター化。*
- [Auditing News Curation Systems:A Case Study Examining Algorithmic and Editorial Logic in Apple News](https://ojs.aaai.org/index.php/ICWSM/article/view/7277) - (ICWSM) *社会技術的ニュースキュレーションシステム（トレンド記事セクション）としての Apple News の監査研究。*
- [Auditing Algorithms:  On Lessons Learned and the Risks of DataMinimization](https://dl.acm.org/doi/pdf/10.1145/3375627.3375852) - (AIES) *Telefónica が開発したウェルビーイング推薦アプリへの実践的監査（主にバイアス）。*
- [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805) - (arxiv) *言語モデルへの問い合わせで個々の訓練例を回復する、訓練データ抽出攻撃を実行。*
### 2019
- [Adversarial Frontier Stitching for Remote Neural Network Watermarking](https://arxiv.org/abs/1711.01894) - (Neural Computing and Applications) [(代替実装)](https://github.com/dunky11/adversarial-frontier-stitching) *リモート機械学習モデルが「漏えい」品かを確認。標準 API リクエストを通じ、価値あるモデルへ挿入されたゼロビット透かしを抽出できるか調べます。*
- [Knockoff Nets: Stealing Functionality of Black-Box Models](https://arxiv.org/abs/1812.02766.pdf) - (CVPR) *画像を入力し予測を得るだけのブラックボックス相互作用で、敵対者が「被害者」モデルの機能をどこまで窃取できるかを問います。*
- [Opening Up the Black Box:Auditing Google's Top Stories Algorithm](https://par.nsf.gov/servlets/purl/10101277) - (Flairs-32) *ニュース発行者を選択・順位付けするアルゴリズムの選択への洞察を提供する、Google Top Stories パネルの監査。*
- [Making targeted black-box evasion attacks effective andefficient](https://arxiv.org/pdf/1906.03397.pdf) - (arXiv) *深層ニューラルネットワークへの標的回避攻撃で、敵対者がクエリ予算を最適に使う方法を調査。*
- [Online Learning for Measuring Incentive Compatibility in Ad Auctions](https://research.fb.com/wp-content/uploads/2019/05/Online-Learning-for-Measuring-Incentive-Compatibility-in-Ad-Auctions.pdf) - (WWW) *ブラックボックスオークションプラットフォームのインセンティブ整合的（IC）メカニズム（後悔）を測定。*
- [TamperNN: Efficient Tampering Detection of Deployed Neural Nets](https://arxiv.org/abs/1903.00317) - (ISSRE) *リモート実行される分類器モデルへの改ざんを検出できる入力を作るアルゴリズム。*
- [Neural Network Model Extraction Attacks in Edge Devicesby Hearing Architectural Hints](https://arxiv.org/pdf/1903.03916.pdf) - (arxiv) *バススヌーピングによるメモリアクセスイベント取得、LSTM-CTC による層列同定、メモリアクセスパターンに基づく層トポロジ接続、データ量制約下の層次元推定により、類似ネットワークアーキテクチャを正確に復元できることを示します。*
- [Stealing Knowledge from Protected Deep Neural Networks Using Composite Unlabeled Data](https://ieeexplore.ieee.org/abstract/document/8851798) - (ICNN) *softmax 出力を完全に隠す場合でも、ブラックボックスモデルを攻撃して知識を抽出できる複合手法。*
- [Neural Network Inversion in Adversarial Setting via Background Knowledge Alignment](https://dl.acm.org/citation.cfm?id=3354261) - (CCS) *元モデルの逆として動作する反転モデルの訓練に基づく敵対的設定のモデル反転手法。元の訓練データを完全に知らなくても、より一般的なデータ分布からの補助サンプルで訓練すれば正確な反転が可能です。*
### 2018
- [Counterfactual Explanations without Opening the Black Box: Automated Decisions and the GDPR](https://arxiv.org/abs/1711.00399) - (Harvard Journal of Law & Technology) *x に対する判断を説明するため、判断を変える x に最も近い点、すなわち反実仮想を見つけます。*
- [Distill-and-Compare: Auditing Black-Box Models Using Transparent Model Distillation](https://arxiv.org/abs/1710.06169) - (AIES) *ブラックボックスモデルを教師として扱い、そのリスクスコアを模倣する透明な生徒モデルを訓練。*
- [Towards Reverse-Engineering Black-Box Neural Networks](https://arxiv.org/abs/1711.01768) - (ICLR) [(コード)](https://github.com/coallaoh/WhitenBlackBox) *特定入力への応答パターンを解析し、リモートニューラルネットワークモデルの内部ハイパーパラメーター（層数、非線形活性化種別など）を推論。*
- [Data driven exploratory attacks on black box classifiers in adversarial domains](https://www.sciencedirect.com/science/article/pii/S092523121830136X) - (Neurocomputing) *リモート分類器モデルをリバースエンジニアリング（例: CAPTCHA テストの回避）。*
- [xGEMs: Generating Examplars to Explain Black-Box Models](https://arxiv.org/pdf/1806.08867.pdf) - (arXiv) *教師なし暗黙的生成モデルを訓練してブラックボックスモデルのバイアスを探索。データ多様体に沿ってサンプルを摂動し、モデル行動を定量的に要約。*
- [Learning Networks from Random Walk-Based Node Similarities](https://arxiv.org/pdf/1801.07386) - (NIPS) *ランダムウォークの通勤時間を観測してグラフを逆算。*
- [Identifying the Machine Learning Family from Black-Box Models](https://rd.springer.com/chapter/10.1007/978-3-030-00374-6_6) - (CAEPIA) *返された予測の背後にある機械学習モデルの種類を決定。*
- [Stealing Neural Networks via Timing Side Channels](https://arxiv.org/pdf/1812.11720.pdf) - (arXiv) *クエリを用いたタイミング攻撃によりモデルを窃取・近似。*
- [Copycat CNN: Stealing Knowledge by Persuading Confession with Random Non-Labeled Data](https://arxiv.org/abs/1806.05476) - (IJCNN)  [(コード)](https://github.com/jeiks/Stealing_DL_Models) *ランダムな自然画像（ImageNet・Microsoft-COCO）で問い合わせ、ブラックボックスモデル（CNN）の知識を窃取。*
- [Auditing the Personalization and Composition of Politically-Related Search Engine Results Pages](https://dl.acm.org/doi/10.1145/3178876.3186143) - (WWW) *パーソナライズ・構成を研究するため、参加者を調査し検索結果ページ（SERP）・自動補完候補を収集する Chrome 拡張。*
### 2017
- [Uncovering Influence Cookbooks : Reverse Engineering the Topological Impact in Peer Ranking Services](https://dl.acm.org/authorize.cfm?key=N21772) - (CSCW) *ピアランキングサービスでどの中心性指標が使用されているかの特定を目指します。*
- [The topological face of recommendation: models and application to bias detection](https://arxiv.org/abs/1704.08991) - (Complex Networks) *ユーザーに推薦される項目向けのバイアス検出フレームワークを提案。*
- [Membership Inference Attacks Against Machine Learning Models](http://ieeexplore.ieee.org/document/7958568/) - (Symposium on Security and Privacy) *機械学習モデルとレコードが与えられたとき、そのレコードがモデル訓練データセットの一部として使われたかを判定。*
- [Practical Black-Box Attacks against Machine Learning](https://dl.acm.org/citation.cfm?id=3053009) - (Asia CCS) *リモートサービスが敵対的分類攻撃にどの程度脆弱かを理解。*
### 2016
- [Algorithmic Transparency via Quantitative Input Influence: Theory and Experiments with Learning Systems](https://www.andrew.cmu.edu/user/danupam/datta-sen-zick-oakland16.pdf) - (IEEE S&P) *Shapley 値を用い、特徴の個別・共同・限界影響を評価。*
- [Auditing Black-Box Models for Indirect Influence](https://arxiv.org/abs/1602.07043) - (ICDM) *変数をデータセットから「巧みに」除去し精度差を見ることで、ブラックボックスモデルへの影響を評価。*
- [Iterative Orthogonal Feature Projection for Diagnosing Bias in Black-Box Models](https://arxiv.org/abs/1611.04967) - (FATML Workshop) *特徴ランキングを実行してブラックボックスモデルを解析。*
- [Bias in Online Freelance Marketplaces: Evidence from TaskRabbit](http://datworkshop.org/papers/dat16-final22.pdf) - (dat workshop) *TaskRabbit の検索アルゴリズム順位を測定。*
- [Stealing Machine Learning Models via Prediction APIs](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/tramer) - (Usenix Security)  [(コード)](https://github.com/ftramer/Steal-ML) *リモートサービスで使用される機械学習モデルの抽出を目指します。*
- [“Why Should I Trust You?”Explaining the Predictions of Any Classifier](https://arxiv.org/pdf/1602.04938v3.pdf) - (arXiv)  [(コード)](https://github.com/marcotcr/lime-experiments) *データインスタンスの周囲をサンプリングしてブラックボックス分類器モデルを説明。*
- [Back in Black: Towards Formal, Black Box Analysis of Sanitizers and Filters](http://ieeexplore.ieee.org/document/7546497/) - (Security and Privacy) *サニタイザー・フィルターのブラックボックス解析。*
- [Algorithmic Transparency via Quantitative Input Influence: Theory and Experiments with Learning Systems](http://ieeexplore.ieee.org/document/7546525/) - (Security and Privacy) *観測システムの出力に対する入力の影響度を捉える尺度を導入。*
- [An Empirical Analysis of Algorithmic Pricing on Amazon Marketplace](https://mislove.org/publications/Amazon-WWW.pdf) - (WWW) [(コード)](http://personalization.ccs.neu.edu) *アルゴリズム価格設定を検出する方法論を開発し、Amazon Marketplace での普及・振る舞いを実証的に分析。*
### 2015
- [Certifying and Removing Disparate Impact](https://arxiv.org/abs/1412.3756) - (SIGKDD) *バイアスの不存在を認証する SVM ベース手法と、データセットからバイアスを除去する手法を提案。*
- [Peeking Beneath the Hood of Uber](https://dl.acm.org/citation.cfm?id=2815681) - (IMC) *Uber のサージ価格アルゴリズムの実装詳細を推論。*
### 2014
- [A peek into the black box: exploring classifiers by randomization]() - (Data Mining and Knowledge Discovery journal) ([コード](https://github.com/tsabsch/goldeneye)) *予測サンプルの出力ラベルを変えずに置換できる特徴群を見つけます。*
- [XRay: Enhancing the Web's Transparency with Differential Correlation](https://www.usenix.org/node/184394) - (USENIX Security) *特定の広告、推薦、価格をターゲティングするために使われたユーザープロファイルデータを監査。*
### 2013
- [Measuring Personalization of Web Search](https://dl.acm.org/citation.cfm?id=2488435) - (WWW) *ウェブ検索結果のパーソナライズを測定する方法論を開発。*
- [Auditing: Active Learning with Outcome-Dependent Query Costs](https://www.cs.bgu.ac.il/~sabatos/papers/SabatoSarwate13.pdf) - (NIPS) *負のラベルにのみ費用を払い、二値分類器から学習。*

### 2012
- [Query Strategies for Evading Convex-Inducing Classifiers](http://www.jmlr.org/papers/v13/nelson12a.html) - (JMLR) *凸分類器の回避手法。回避複雑性を考察。*
### 2008
- [Privacy Oracle: a System for Finding Application Leakswith Black Box Differential Testing](https://dl.acm.org/citation.cfm?id=1455806) - (CCS) *Privacy Oracle: リモートサーバーへの送信におけるアプリケーションの個人情報漏えいを発見するシステム。*
### 2005
- [Adversarial Learning](https://dl.acm.org/citation.cfm?id=1081950) - (KDD) *メンバーシップクエリを使ったリモート線形分類器のリバースエンジニアリング。*

## 関連イベント

### 2025
* [AIMLAI at ECML/PKDD 2025](https://project.inria.fr/aimlai/)
* [AAAI workshop on AI Governance: Alignment, Morality, and Law](https://aaai.org/conference/aaai/aaai-25/workshop-list/#ws06)

### 2024
* [1st International Conference on Auditing and Artificial Intelligence](https://www.ircg.msm.uni-due.de/ai/)
* [Regulatable ML Workshop (RegML'24)](https://regulatableml.github.io/)

### 2023
* [Supporting User Engagement in Testing, Auditing, and Contesting AI (CSCW User AI Auditing)](https://cscw-user-ai-auditing.github.io/)
* [Workshop on Algorithmic Audits of Algorithms (WAAA)](https://algorithmic-audits.github.io)
* [Regulatable ML Workshop (RegML'23)](https://regulatableml.github.io/)
