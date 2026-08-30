---
title: "Awesome XAI"
description: "XAIを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-altamiracorp-awesome-xai-readme-md"
---

# Awesome XAI

XAIを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>
- [論文](#papers)
    - [重要論文](#landmarks)
    - [サーベイ](#surveys)
    - [評価](#evaluations)
    - [XAI手法](#xai-methods)
    - [解釈可能なモデル](#interpretable-models)
    - [批評](#critiques)
- [リポジトリ](#repositories)
- [動画](#videos)
- [フォロー](#follow)



## 論文 <a id="papers"></a>

### 重要論文 <a id="landmarks"></a>

分野とその重要な側面を理解するうえで役立つ、特に優れた論文です。全文を読む価値があります。

- [Explanation in Artificial Intelligence: Insights from the Social Sciences](https://arxiv.org/abs/1706.07269) - 説明に関する社会科学研究を概説する。主な知見は、(1) 説明は対比的、(2) 選択的、(3) 確率はおそらく重要ではない、(4) 社会的、という4点で、いずれも説明が文脈依存であるという共通テーマに沿う。
- [Sanity Checks for Saliency Maps](https://arxiv.org/abs/1810.03292) - サリエンスマップを使用するすべての人に重要な読み物。この論文は、サリエンスマップが有用かどうかを確認するための2つの実験を提案している：(1) モデルパラメータのランダム化テストは、訓練済みと未訓練モデルのマップを比較する、(2) データのランダム化テストは、元のデータセットで訓練されたモデルと、ラベルをランダム化したデータセットで訓練されたモデルのマップを比較する。彼らは、「いくつかの広く導入されているサリエンス手法は、モデルが訓練されたデータやモデルパラメータに依存しない」と結論づけている。

### サーベイ <a id="surveys"></a>

- [Explainable Deep Learning: A Field Guide for the Uninitiated](https://arxiv.org/abs/2004.14545) - 深層学習に焦点を当てたXAIに関する詳細な説明。

### 評価 <a id="evaluations"></a>

- [Quantifying Explainability of Saliency Methods in Deep Neural Networks](https://arxiv.org/abs/2009.02899) - 生成データセットを使った実験を通じて、異なるヒートマップベースのサリエンス手法がどのように性能を発揮するかを分析した。

### XAI手法 <a id="xai-methods"></a>

- [Ada-SISE](https://arxiv.org/abs/2102.07799) - 説明のための適応型意味入力サンプリング。
- [ALE](https://rss.onlinelibrary.wiley.com/doi/abs/10.1111/rssb.12377) - 累積局所効果プロット。
- [ALIME](https://link.springer.com/chapter/10.1007/978-3-030-33607-3_49) - 自動エンコーダーに基づく局所解釈手法。
- [Anchors](https://ojs.aaai.org/index.php/AAAI/article/view/11491) - 高精度のモデルに依存しない説明。
- [Auditing](https://link.springer.com/article/10.1007/s10115-017-1116-3) - ブラックボックスモデルの監視。
- [BayLIME](https://arxiv.org/abs/2012.03058) - ベイズ的局所解釈可能なモデルに依存しない説明。
- [Break Down](http://ema.drwhy.ai/breakDown.html#BDMethod) - 加算属性への分解プロット。
- [CAM](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Zhou_Learning_Deep_Features_CVPR_2016_paper.pdf) - クラス活性マッピング。
- [CDT](https://ieeexplore.ieee.org/abstract/document/4167900) - ベイズ決定木アンサンブルの信頼性のある解釈。
- [CICE](https://christophm.github.io/interpretable-ml-book/ice.html) - センター付きICEプロット。
- [CMM](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.40.2710&rep=rep1&type=pdf) - 複数モデルのメタ学習者による統合。
- [Conj Rules](https://www.sciencedirect.com/science/article/pii/B9781558603356500131) - サンプリングとクエリを用いた訓練済みニューラルネットワークからのルール抽出
- [CP](https://ieeexplore.ieee.org/abstract/document/6597214) - 寄与伝播
- [DecText](https://dl.acm.org/doi/abs/10.1145/775047.775113) - 訓練されたニューラルネットワークから決定木を抽出
- [DeepLIFT](https://ieeexplore-ieee-org.ezproxy.libraries.wright.edu/abstract/document/9352498) - 画像アノテーション用の深層ラベル特定特徴学習
- [DTD](https://www.sciencedirect.com/science/article/pii/S0031320316303582) - Deep Taylor分解
- [ExplainD](https://www.aaai.org/Papers/IAAI/2006/IAAI06-018.pdf) - 加法分類器における証拠の説明
- [FIRM](https://link.springer.com/chapter/10.1007/978-3-642-04174-7_45) - 特徴重要度順位評価
- [Fong, et. al.](https://openaccess.thecvf.com/content_iccv_2017/html/Fong_Interpretable_Explanations_of_ICCV_2017_paper.html) - 意味のある変動モデル
- [G-REX](https://www.academia.edu/download/51462700/s0362-546x_2896_2900267-220170122-9600-1njrpyx.pdf) - 遺伝アルゴリズムを用いたルール抽出
- [Gibbons, et. al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3977175/) - 決定木を用いたランダムフォレストの説明
- [GoldenEye](https://link-springer-com.ezproxy.libraries.wright.edu/article/10.1007/s10618-014-0368-8) - ランダム化を用いた分類器の探索
- [GPD](https://arxiv.org/abs/0912.1128) - ガウス過程による決定
- [GPDT](https://ieeexplore.ieee.org/abstract/document/4938655) - 決定木を進化させる遺伝プログラム
- [GradCAM](https://openaccess.thecvf.com/content_iccv_2017/html/Selvaraju_Grad-CAM_Visual_Explanations_ICCV_2017_paper.html) - 勾配重み付きクラス活性マッピング
- [GradCAM++](https://ieeexplore.ieee.org/abstract/document/8354201/) - 勾配ベースの視覚説明の一般化
- [Hara, et. al.](https://arxiv.org/abs/1606.05390) - 木のアンサンブルを解釈する
- [ICE](https://www.tandfonline.com/doi/abs/10.1080/10618600.2014.907095) - 個別条件期待値プロット
- [IG](http://proceedings.mlr.press/v70/sundararajan17a/sundararajan17a.pdf) - 統合勾配
- [inTrees](https://link.springer.com/article/10.1007/s41060-018-0144-8) - inTreesによる木アンサンブルの解釈
- [IOFP](https://arxiv.org/abs/1611.04967) - 反復正規化特徴投影
- [IP](https://arxiv.org/abs/1703.00810) - 情報平面可視化
- [KL-LIME](https://arxiv.org/abs/1810.02678) - Kullback-Leibler投影ベースのLIME
- [Krishnan, et. al.](https://www.sciencedirect.com/science/article/abs/pii/S0031320398001812) - 訓練されたニューラルネットワークから決定木を抽出
- [Lei, et. al.](https://arxiv.org/abs/1606.04155) - 生成器とエンコーダーを用いたニューラル予測の解釈
- [LIME](https://dl.acm.org/doi/abs/10.1145/2939672.2939778) - 局所的に解釈可能なモデル無関係説明
- [LOCO](https://amstat.tandfonline.com/doi/abs/10.1080/01621459.2017.1307116#.YEkdZ7CSmUk) - 1変数を除外した方法
- [LORE](https://arxiv.org/abs/1805.10820) - 局所規則ベースの説明
- [Lou, et. al.](https://dl.acm.org/doi/abs/10.1145/2487575.2487579) - ペア相互作用を持つ正確な解釈可能なモデル
- [LRP](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130140) - 層ごとの関連性伝播
- [MCR](https://www.jmlr.org/papers/volume20/18-760/18-760.pdf) - モデルクラスの依存性
- [MES](https://ieeexplore.ieee.org/abstract/document/7738872) - モデル説明システム
- [MFI](https://arxiv.org/abs/1611.07567) - 非線形アルゴリズム向け特徴重要度評価
- [NID](https://www.sciencedirect.com/science/article/abs/pii/S0304380002000649) - ニューラル解釈図
- [OptiLIME](https://arxiv.org/abs/2006.05714) - 最適化されたLIME
- [PALM](https://dl.acm.org/doi/abs/10.1145/3077257.3077271) - 分区認識型ローカルモデル
- [PDA](https://arxiv.org/abs/1702.04595) - 予測差分分析：深層ニューラルネットワークの決定を可視化
- [PDP](https://projecteuclid.org/download/pdf_1/euclid.aos/1013203451) - 部分依存プロット
- [POIMs](https://academic.oup.com/bioinformatics/article/24/13/i6/233341) - SVM信号検出器の理解に用いる位置オリゴマー重要度マトリクス
- [ProfWeight](https://arxiv.org/abs/1807.07506) - 深層ネットワークからシンプルモデルへの情報転送
- [Prospector](https://dl.acm.org/doi/abs/10.1145/2858036.2858529) - インタラクティブな部分依存診断
- [QII](https://ieeexplore.ieee.org/abstract/document/7546525) - 定量的入力影響
- [REFNE](https://content.iospress.com/articles/ai-communications/aic272) - 学習済みニューラルネットワーク・アンサンブルから記号規則を抽出
- [RETAIN](https://arxiv.org/abs/1608.05745) - 逆時系列注意モデル
- [RISE](https://arxiv.org/abs/1806.07421) - 説明用にランダムな入力サンプリング
- [RxREN](https://link.springer.com/article/10.1007%2Fs11063-011-9207-8) - ニューラルネットワークの逆工学による規則抽出
- [SHAP](https://arxiv.org/abs/1705.07874) - モデル予測の解釈に向けた統一的なアプローチ
- [SIDU](https://arxiv.org/abs/2101.10710) - 類似性、差異、および独自性をもつ入力の変動
- [Simonynan, et. al](https://arxiv.org/abs/1312.6034) - CNNの分類を可視化
- [Singh, et. al](https://arxiv.org/abs/1611.07579) - プログラムをブラックボックス説明として使う
- [STA](https://arxiv.org/abs/1610.09036) - シングルツリー近似を用いたモデルの解釈
- [Strumbelj, et. al.](https://www.jmlr.org/papers/volume11/strumbelj10a/strumbelj10a.pdf) - ゲーム理論を用いた個別分類の解釈
- [SVM+P](https://www.academia.edu/download/2471122/3uecwtv9xcwxg6r.pdf) - サポートベクターマシンからルールを抽出
- [TCAV](https://openreview.net/forum?id=S1viikbCW) - 概念活性化ベクトルを用いたテスト
- [Tolomei, et. al.](https://dl.acm.org/doi/abs/10.1145/3097983.3098039) - 行動可能な特徴調整を用いた木の集合による解釈可能な予測
- [Tree Metrics](https://www.researchgate.net/profile/Edward-George-2/publication/2610587_Making_Sense_of_a_Forest_of_Trees/links/55b1085d08aec0e5f430eb40/Making-Sense-of-a-Forest-of-Trees.pdf) - 木の集合の意味を理解する
- [TreeSHAP](https://arxiv.org/abs/1706.06060) - 木の集合に共通する特徴属性
- [TreeView](https://arxiv.org/abs/1611.07429) - 特徴空間の分割
- [TREPAN](http://www.inf.ufrgs.br/~engel/data/media/file/cmp121/TREPAN_craven.nips96.pdf) - 訓練されたネットワークの木構造表現を抽出
- [TSP](https://dl.acm.org/doi/abs/10.1145/3412815.3416893) - 木空間プロトタイプ
- [VBP](http://www.columbia.edu/~aec2163/NonFlash/Papers/VisualBackProp.pdf) - 可視化されたバックプロパゲーション
- [VEC](https://ieeexplore.ieee.org/abstract/document/5949423) - 可変効果特性曲線
- [VIN](https://dl.acm.org/doi/abs/10.1145/1014052.1014122) - 可変相互作用ネットワーク
- [X-TREPAN](https://arxiv.org/abs/1508.07551) - ANNSにおける理解可能な決定木の適応抽出
- [Xu, et. al.](http://proceedings.mlr.press/v37/xuc15) - 見せ、注意、話す注意モデル

### 解釈可能なモデル <a id="interpretable-models"></a>

- [Decision List](https://christophm.github.io/interpretable-ml-book/rules.html) - 分岐のない決定木に似たモデル
- [Decision Trees](https://en.wikipedia.org/wiki/Decision_tree) - 木は解釈を提供する
- [Explainable Boosting Machine](https://www.youtube.com/watch?v=MREiHgHgl0k) - 学習された特徴ベクトルグラフに基づく予測方法
- [k-Nearest Neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) - 典型的な近傍ベース手法
- [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression) - 簡単にプロット可能で理解しやすい回帰
- [Logistic Regression](https://en.wikipedia.org/wiki/Logistic_regression) - 簡単にプロット可能で理解しやすい分類
- [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) - 条件確率を用いた分類は良好だが、推定は不十分
- [RuleFit](https://christophm.github.io/interpretable-ml-book/rulefit.html) - 特徴間相互作用を含む決定規則をスパース線形モデルとして扱う


### 批評 <a id="critiques"></a>

- [Attention is not Explanation](https://arxiv.org/abs/1902.10186) - 著者は、注意が意味のある説明を提供しないという主張を支持するNLP実験を繰り返し実施し、異なる注意が類似したモデル出力を生成することを示している
- [Attention is not --not-- Explanation](https://arxiv.org/abs/1908.04626) - 上記の論文に対する反論。著者は、複数の説明が有効であり、注意が*一つ*の有効な説明を生成できると主張している。もしもそのような説明が存在しないなら、それは有効な説明ではない。
- [Do Not Trust Additive Explanations](https://arxiv.org/abs/1903.11420) - 著者は、加算説明（例：LIME、SHAP、Break Down）が特徴間相互作用を考慮していないため、信頼性が低いと主張している
- [Please Stop Permuting Features An Explanation and Alternatives](https://arxiv.org/abs/1905.03151) - 著者らは、特徴の並べ替えが特に特徴間の強い依存性がある場合に誤解を招く理由を示している。彼らはこれまでに述べられたいくつかの代替手法を提案している。
- [Stop Explaining Black Box Machine Learning Models for High States Decisions and Use Interpretable Models Instead](https://www.nature.com/articles/s42256-019-0048-x?fbclid=IwAR3156gP-ntoAyw2sHTXo0Z8H9p-2wBKe5jqitsMCdft7xA0P766QvSthFs) - 説明可能・解釈可能な機械学習の課題として、(1) 最適な論理モデル、(2) 最適なスパース・スコアリングシステム、(3) 解釈可能性の定義と分野別手法の開発を挙げる。また、多くの分野で解釈可能なモデルを利用できる可能性を論じる。
- [The (Un)reliability of Saliency Methods](https://link.springer.com/chapter/10.1007/978-3-030-28954-6_14) - 著者らは、入力データに定数シフトを加えることで、重要性評価手法がどのようにアトリビューションを変化させるかを示している。彼らは、アトリビューション手法が*入力不変性*を満たすべきであると主張しており、アトリビューション手法が入力の変換に対してモデルの感度を正確に反映しているべきであると述べている。


## リポジトリ <a id="repositories"></a>

- [EthicalML/xai](https://github.com/EthicalML/xai) - XAIに特化したテーブルデータ用のツールキット。多様なデータおよびモデル評価手法を実装している。
- [MAIF/shapash](https://github.com/MAIF/shapash) - SHAPおよびLIMEに基づくフロントエンドの説明ツール。
- [PAIR-code/what-if-tool](https://github.com/PAIR-code/what-if-tool) - Tensorboardまたはノートブック向けのツールで、モデルの性能および公平性を調査できる。
- [slundberg/shap](https://github.com/slundberg/shap) - Shapley Additive Explanationsを用いるためのPythonモジュール。


## 動画 <a id="videos"></a>

- [Debate: Interpretability is necessary for ML](https://www.youtube.com/watch?v=93Xv8vJ2acI) - Rich CaruanaとPatrice Simardが支持し、Kilian WeinbergerとYann LeCunが反対する、解釈可能性が機械学習において必要であるかどうかに関する議論。


## フォロー <a id="follow"></a>

以下の人物・団体の見解が、必ずしも本リストの見解と一致するわけではありません。:wink:

- [The Institute for Ethical AI & Machine Learning](https://ethical.institute/index.html) - イギリスに所在する倫理的AI/ML研究センターで、XAIに関わる研究を頻繁に行っている。
- [Tim Miller](https://twitter.com/tmiller_unimelb) - XAI分野における最も影響力のある研究者の一人。
- [Rich Caruana](https://www.microsoft.com/en-us/research/people/rcaruana/) - Explainable Boosting Machinesの開発者。

ほかにフォローすべき人や団体はありますか？

## コントリビューション <a id="contributing"></a>

[Contributions of any kind welcome, just follow the guidelines](https://github.com/altamiracorp/awesome-xai/blob/e1cc800f781b3d5755f4e3f3eb07034b0ca6f61e/contributing.md)!

### コントリビューター <a id="contributors"></a>
[コントリビューターの皆さんに感謝します](https://github.com/altamiracorp/awesome-xai/graphs/contributors)！
