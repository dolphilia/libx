---
title: "mourarthur/awesome-credit-modeling"
description: "mourarthur/awesome-credit-modeling の定本スナップショット"
licenseSource: "github-mourarthur-awesome-credit-modeling-readme-md"
---

# Awesome Credit Modeling [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> クレジットスコアリングと信用リスクモデリングに関する優れた論文、記事、各種リソースの成長中のコレクション。

クレジットスコアリングとは、与信申込者をリスク分類へ分類するための正式な統計的手法を表す用語です。貸し手は、こうした分類を申込者の信用力と債務不履行確率の評価に用います。

## 目次

- [はじめに](#introduction)
- [クレジットスコアリング](#credit-scoring)
- [機関向け信用リスク](#institutional-credit-risk)
- [P2P融資](#peer-to-peer-lending)
- [サンプル選択](#sample-selection)
- [特徴量選択](#feature-selection)
- [モデルの説明可能性](#model-explainability)

## はじめに

- [Statistical Classification Methods in Consumer Credit Scoring: A Review](https://www.jstor.org/stable/2983268) - クレジットスコアリングの主題に関する古典的な導入とレビュー。

- [Consumer Finance: Challenges for Operational Research](https://www.jstor.org/stable/40540227) - 消費者金融におけるリスク評価方法であるクレジットスコアリングの発展と、クレジットスコアの意味をレビューします。消費者金融のモデリングを支えるオペレーションズ・リサーチの10の課題を概説します。

- [Machine Learning in Credit Risk Modeling](https://www.slideshare.net/YvanDeMunck/machine-learning-in-credit-risk-modeling-a-james-white-paper) - かつて金融機関にリスク管理ツールを提供していた、現在は廃業したオンライン信用リスク管理スタートアップJames（旧CrowdProcess）によるホワイトペーパー。信用リスクモデリング分野における機械学習応用の概要を提供します。

- ['Lending by numbers': credit scoring and the constitution of risk within American consumer credit](https://www.tandfonline.com/doi/abs/10.1080/03085140601089846) - 統計的クレジットスコアリング技術が、米国の消費者信用におけるデフォルト水準の制御という問題へ貸し手によってどのように適用されるようになったかを検討します。その方法論的・手続的・時間的リスクの認識を探究します。

- [Machine Learning in Financial Crisis Prediction: A Survey](https://ieeexplore.ieee.org/document/6069610) - 1995～2010年のジャーナル論文130本をレビューし、倒産予測とクレジットスコアモデリングの最先端機械学習技法の発展に焦点を当てます。現在の成果と限界も示します。

- [Fintech and big tech credit: a new database](https://www.bis.org/publ/work887.pdf) - 国際決済銀行によるワーキングペーパー。信用リスクへの焦点はやや弱いものの、フィンテックまたは巨大テック企業が提供する代替的な与信の条件とニッチを整理します。

## クレジットスコアリング

- [Benchmarking state-of-the-art classification algorithms for credit scoring: An update of research](https://www.sciencedirect.com/science/article/abs/pii/S0377221715004208) - 新しい学習手法、性能指標、異なる分類器を信頼性高く比較する技法を含め、スコアカード開発には複数の進歩がありますが、クレジットスコアリング文献はそれを反映していません。本論文は複数の新しい分類アルゴリズムを同分野の最先端と比較し、確立済み・新規の予測精度指標間で代替スコアカードの評価がどの程度異なるかも検討します。

- [Classification methods applied to credit scoring: Systematic review and overall comparison](https://www.sciencedirect.com/science/article/abs/pii/S1876735416300101) - 信用リスクを制御・効果的に管理する必要性により、金融機関とコンサルティング企業は多様な定量モデルを開発してきました。この論文は、良好・不良借り手を識別するために適用された多様な分類手法について、クレジットスコアリング金融分析における二値分類技法の理論と応用を関連付ける体系的文献レビューを提示します。

- [Classifier Technology and the Illusion of Progress](https://projecteuclid.org/euclid.ss/1149600839) - 線形判別分析からニューラルネットワーク、サポートベクターマシンまで、教師あり分類には多数の手法があります。本論文は、比較研究が実問題の重要な側面を見落としがちで、高度な手法の見かけの優位性は幻想であり得ると論じます。単純な手法は多くの場合、より高度な手法にほぼ匹敵する性能を示します。

- [Financial credit risk assessment: a recent review](https://dl.acm.org/doi/10.1007/s10462-015-9434-x) - 最新の成果に重点を置き、金融的苦境予測の伝統的統計モデルと最先端の知的手法を要約します。

- [Good practice in retail credit scorecard assessment](https://www.tandfonline.com/doi/abs/10.1057/palgrave.jors.2601932) - リテール銀行では、スコアカードと呼ばれる予測統計モデルを用いて顧客を分類し、適切なアクション・介入を割り当てます。本論文は、一般的な性能指標がスコアの大きさに関する無関係な情報を使い、誤分類数に関する重要な情報を使わないため、時に深刻に誤解を招き得ることを論じます。

- [A literature review on the application of evolutionary computing to credit scoring](https://link.springer.com/article/10.1057/jors.2012.145) - 2000～2012年に発表された科学論文の徹底したレビューを通じ、進化アルゴリズムをクレジットスコアリングへ適用する最新の発展を要約します。

- [Machine learning predictivity applied to consumer creditworthiness](https://fbj.springeropen.com/articles/10.1186/s43093-020-00041-w) - ブラジルの銀行の融資データベースを用いて借り手分類モデルの妥当性を分析し、機械学習技法を探究して、ロジスティック回帰モデルに基づくベンチマークと予測精度を比較します。

- [Consumer credit-risk models via machine-learning algorithms](https://alo.mit.edu/wp-content/uploads/2015/06/Household-behaviorConsumer-credit-riskCredit-card-borrowingMachine-learningNonparametric-estimation.pdf) - 著者は機械学習技法を適用し、消費者信用リスクの非線形・ノンパラメトリック予測モデルを構築します。クレジットカード保有者の延滞・デフォルトの分類率を大幅に改善するアウトオブサンプル予測を構築できます。

- [Example-Dependent Cost-Sensitive Logistic Regression for Credit Scoring](https://ieeexplore.ieee.org/document/7033125) - 現実の分類問題には、誤分類コストが事例ごとに異なる事例依存のコスト感度を持つものがあります。クレジットスコアリングはその典型ですが、通常は融資事業に伴う現実の金融コストを考慮しない方法で扱われます。

- [Credit scoring using the clustered support vector machine](https://www.sciencedirect.com/science/article/abs/pii/S0957417414005119) - クレジットスコアカード開発へclustered support vector machine（CSVM）を導入します。歴史的クレジットスコアリングデータセットが大きくなると高精度ながら計算負荷が高くなる非線形SVM方式の限界の一部に対処し、比較的低い計算コストで同等の分類性能を達成できます。

- [A comparative study on base classifiers in ensemble methods for credit scoring](https://www.sciencedirect.com/science/article/abs/pii/S0957417416306947) - 近年、信用リスク評価への人工知能手法の適用は古典的手法を改善してきました。最近の研究は、分類器アンサンブルがこの種のタスクでより良い結果を達成することを示しています。

- [Multiple classifier application to credit risk assessment](https://www.sciencedirect.com/science/article/abs/pii/S0957417409008847) - ([Corrigendum](https://www.sciencedirect.com/science/article/pii/S0957417410012364)) - 異なる種類のノイズ下における5分類器の信用リスク予測精度での予測挙動と、分類器アンサンブルによる精度改善を探究します。

- [Recent developments in consumer credit risk assessment](https://www.sciencedirect.com/science/article/abs/pii/S0377221706011866) - 与信申込者への融資リスクは通常ロジスティック回帰モデルで推定されますが、他の多くの分類器も検討されています。データ品質の問題により、実験室ベースの結果は実務で達成できないことがあります。採用された申込者のサンプルでの分類器訓練はバイアスを生まないように見える一方、閾値設定の困難を生みます。

- [A survey of credit and behavioural scoring: forecasting financial risk of lending to consumers](https://www.sciencedirect.com/science/article/abs/pii/S0169207000000340) - 組織が消費者に信用を供与するか決める助けとなる統計・オペレーションズリサーチ双方の技法を調査します。経済状況をスコアリングシステムへ組み込む必要性と、消費者のデフォルト確率推定から貸し手組織にもたらす利益推定への変化も論じます。

- [The comparisons of data mining techniques for the predictive accuracy of probability of default of credit card clients](https://www.sciencedirect.com/science/article/abs/pii/S0957417407006719) - 6つのデータマイニング手法について、クレジットカード顧客のデフォルト確率の予測精度を比較します。リスク管理の観点から、推定デフォルト確率の予測精度は二値分類結果より価値があります。

- [Super-App Behavioral Patterns in Credit Risk Models: Financial, Statistical and Regulatory Implications](https://arxiv.org/abs/2005.14658) - 従来の信用情報機関データと対照的な、アプリベースのマーケットプレイス由来の代替データがクレジットスコアリングモデルへ与える影響を提示します。この種のデータは伝統的に銀行・金融機関のサービスが行き届かなかった区分で借り手行動の予測に非常に強力である一方、多様な法域で規制上の障壁を越えるために慎重な検証が必要です。

- [Credit scoring methods: Latest trends and points to consider](https://www.sciencedirect.com/science/article/pii/S2405918822000095) - 「本記事は、固定の質問群を用いて最も新しい2016～2021年の論文の体系的レビューを提供し、クレジットスコアリングの傾向を特定することを目指します」。過去期間の結果と比較し、将来の研究者に役立つ近年のベストプラクティスを示します。

## 機関向け信用リスク

- [Availability of Credit to Small Businesses](https://www.federalreserve.gov/publications/2017-september-availability-of-credit-to-small-businesses.htm) - 1996年のEconomic Growth and Regulatory Paperwork Reduction Act第2227条は、連邦準備制度理事会に対し、すべての債権者による小企業向け融資の規模を詳述する報告書を5年ごとに議会へ提出するよう求めています。直近の報告書は2017年9月付です。

- [Credit Scoring and the Availability, Price, and Risk of Small Business Credit](https://muse.jhu.edu/article/181124) - 銀行規模などの差異を統制したうえで、小企業向けクレジットスコアリングが、10万ドル未満の小企業向け信用供与における数量拡大、平均価格上昇、平均リスク水準上昇と関連することを見出します。

- [Credit Risk Assessment Using Statistical and Machine Learning: Basic Methodology and Risk Modeling Applications](https://link.springer.com/article/10.1023/A:1008699112516) - リスクモデリングを通じてより効率的な資源利用を実現するための重要な要素は、機関の信用ポートフォリオにおける個別リスクの正確な予測因子を見つけることです。著者は、限界と可能性を理解するため、住宅ローンデータセットで異なる統計・機械学習の分類モデリング手法を比較分析します。

- [Random Survival Forests Models for SME Credit Risk Measurement](https://link.springer.com/article/10.1007/s11009-008-9078-2) - 中小企業（SME）の信用リスクデフォルト分野における実証研究の既存文献を拡張し、Random Survival Forests（RSF）に基づくノンパラメトリック手法を提案して標準logitモデルと性能を比較します。

- [Modeling Institutional Credit Risk with Financial News](https://arxiv.org/abs/2004.08204) - 現在の格下げリスクモデリングは、第三者格付機関・リスク管理コンサルティング企業による定量指標の複数の変種に依存します。金融ニュース、決算説明会の文字起こし、ソーシャルメディアといった代替データソースの利用が進む中、この論文はニューラルネットワーク埋込みで表現したニュースデータのみを使う予測的格下げモデルを提案します。

- [Bankruptcy prediction for credit risk using neural networks: A survey and new results](https://ieeexplore.ieee.org/document/935101) - 企業倒産の予測は、銀行の融資判断と収益性へ大きな影響を及ぼし得る重要で広く研究される主題です。本研究はニューラルネットワーク（NN）モデルを強調して倒産予測をレビューし、NNシステム向けの新規指標を提案するNN倒産予測モデルを開発します。

## P2P融資

- [Network based credit risk models](https://www.tandfonline.com/doi/abs/10.1080/08982112.2019.1655159) - Peer-to-Peer融資プラットフォームは、コスト削減とユーザー体験の改善につながる可能性がありますが、これらの改善には不正確な信用リスク測定という代償が伴うことがあります。著者は、借り手の財務比率から推定された類似性ネットワークの中心性指標で構成される「代替データ」により、従来のクレジットスコアリング手法を補強することを提案します。

## サンプル選択

- [Reject inference in application scorecards: evidence from France](https://econpapers.repec.org/paper/drmwpaper/2016-10.htm) - この主題への優れた導入と議論。

- [Reject inference, augmentation, and sample selection](https://www.sciencedirect.com/science/article/abs/pii/S0377221706011969) - 詳細な議論。

- [Instance sampling in credit scoring: An empirical study of sample size and balancing](http://www.research.lancs.ac.uk/portal/en/publications/instance-sampling-in-credit-scoring-an-empirical-study-of-sample-size-and-balancing(89b83914-c7f2-499a-8fa1-844d6cb6004d).html) - 信用モデリングにおける従来のサンプリング慣行を論じ、より大きいサンプルを使うことがアルゴリズム全体で精度を大幅に高めると主張します。

## 特徴量選択

- [A multi-objective approach for profit-driven feature selection in credit scoring](https://www.sciencedirect.com/science/article/pii/S0167923619300570) - クレジットスコアリングの特徴量選択は、無関係なデータを除去してスコアカードの性能と解釈可能性を改善することを目指します。標準技法は特徴量選択を単一目的のタスクとして扱い相関などの統計基準に依存しますが、最近の研究は利益ベースの指標が企業向けスコアリングモデルの質を改善し得ることを示唆します。

- [Data mining feature selection for credit scoring models](https://link.springer.com/article/10.1057/palgrave.jors.2601976) - 使用する特徴量はクレジットスコアリングモデルの性能に重要な影響を与え得ます。最適な特徴量群の選択は通常体系的でなく、やや恣意的な試行に支配されます。本論文は4つの機械学習特徴量選択手法の実証研究を提示します。

- [Combination of feature selection approaches with SVM in credit scoring](https://www.sciencedirect.com/science/article/abs/pii/S0957417409010719) - クレジットスコアリングにおける効果的な分類モデルは、直感的経験に頼る管理者を客観的に支援します。本研究は、分類目的に十分な情報を保持する特徴量選択のため、SVM（support vector machine）分類器を使う4つのアプローチを提案します。

## モデルの説明可能性

- [Explainable Machine learning in Credit Risk Management](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3506274) - 信用リスク管理、特にクレジットスコアリングプラットフォームで借入が行われる際に生じるリスク測定に利用できる説明可能AIモデルを提案します。

- [Machine learning explainability in finance: an application to default risk analysis](https://www.bankofengland.co.uk/working-paper/2019/machine-learning-explainability-in-finance-an-application-to-default-risk-analysis) - イングランド銀行によるStaff Working Paper。機械学習（ML）応用の一部に存在する「ブラックボックス」問題に対処するフレームワークを提案します。

- [Regulatory learning: How to supervise machine learning models? An application to credit scoring](https://www.sciencedirect.com/science/article/pii/S2405918817300648) - ビッグデータ戦略の到来は、モデルの単純化と金融機関が選ぶアプローチの比較可能性向上に関する金融規制の最新傾向を脅かしています。ビッグデータ戦略の本質的に動的な思想は現行の法規制枠組みとほぼ両立せず、モデル選択も動的に変化する可能性があるため、実務家と規制当局はモデル・戦略のライブラリと、リスクを緩和した環境で金融機関が革新できる監督アプローチを開発する必要があります。
