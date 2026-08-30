---
title: "Awesome Cytodata"
description: "Cytodataを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-cytodata-awesome-cytodata-readme-md"
---

# Awesome Cytodata

Cytodataを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [データセット](#datasets)
  - [生画像](#raw-images)
  - [化学的摂動](#chemical-perturbations)
  - [遺伝的摂動](#genetic-perturbations)
- [ソフトウェア](#software)
- [出版物](#publications)
  - [レビュー](#reviews)
  - [応用](#applications)
  - [手法](#methods)

## データセット

化学的・遺伝的摂動を画像ベースプロファイリングするための、**生画像**と**処理済みプロファイル**を含むアノテーション済みデータセット。

### 生画像
- [The Cell Painting Gallery](https://broad.io/CellPaintingGallery) - Cell Painting アッセイ（または類似手法）で作成された画像データセットのコレクション。Broad Institute の Carpenter--Singh 研究室が維持しています。
- [Broad Bioimage Benchmark Collection](https://data.broadinstitute.org/bbbc/) - Broad Bioimage Benchmark Collection（BBBC）は自由にダウンロード可能な顕微鏡画像セットのコレクションです。画像自体に加えて各セットには生物学的応用の説明と何らかの「グラウンドトゥルース」（期待結果）が含まれます。
- [Image Data Resource](https://idr.openmicroscopy.org/) - 公開済み科学研究からの画像データセットの公開リポジトリ。
- [RxRx1](https://www.rxrx.ai/rxrx1) - 四つの細胞型にまたがる51実験バッチで、1,108の遺伝的摂動下にあるヒト細胞の高解像度512x512・6チャネル蛍光顕微鏡画像125,514枚からなるセット。画像は Utah 州 Salt Lake City にある Recursion Pharmaceuticals の研究所で作成されました。生物学的バッチ効果を扱う手法の研究・ベンチマークや、ドメイン適応、転移学習、k-shot 学習などの機械学習領域に使用されます。
- [RxRx19](https://www.rxrx.ai/rxrx19) - COVID-19 の形態学的効果の救済を実証する最初の形態学データセット。
- [Human Protein Atlas](https://www.proteinatlas.org/humanproteome/subcellular) - 他のアッセイに加え、HPA は細胞株でヒトタンパク質の2/3超の位置を表示する共焦点イメージングを実施。[生画像](https://github.com/CellProfiling/HPA-competition#script-to-download-hpav18)または[推定タンパク質細胞内位置](https://www.proteinatlas.org/about/download)をダウンロードできます。

### 化学的摂動

- [Gustafsdottir et al. 2013](https://doi.org/10.1371/journal.pone.0080999) - U2OS 細胞における1,600種の生理活性化合物の Cell Painting プロファイル（公開 S3 バケットからアクセス: `s3://cytodata/datasets/Bioactives-BBBC022-Gustafsdottir/profiles/Bioactives-BBBC022-Gustafsdottir/`）。
- [Wawer et al. 2014](https://doi.org/10.1073/pnas.1410933111) - U2OS 細胞における31,770種の化合物の Cell Painting プロファイル（[ダウンロード](http://www.broadinstitute.org/mlpcn/data/Broad.PNAS2014.ProfilingData.zip)）。
- [Bray et al. 2017](https://doi.org/10.1093/gigascience/giw014) - U2OS 細胞における30,616種の化合物の Cell Painting プロファイル（Center Driven Research Project _CDRP_）（[GigaDB からダウンロード](https://doi.org/10.5524/100351) | 公開 S3 バケットからアクセス: `s3://cytodata/datasets/CDRPBIO-BBBC036-Bray/profiles_cp/CDRPBIO-BBBC036-Bray/`）。
- [Haghighi et al. 2021](https://doi.org/10.1038/s41592-022-01667-0) - 化合物・遺伝子スクリーニングを含む4実験での L1000 プロファイルと対応付けられた Cell Painting（[GitHub の詳細](https://github.com/carpenterlab/2021_Haghighi_submitted)）。

### 遺伝的摂動

- [Singh et al. 2015](https://doi.org/10.1371/journal.pone.0131370) - U2OS 細胞で RNA 干渉（RNAi）によりノックダウンした41遺伝子の3,072 Cell Painting プロファイル（[GitHub からアクセス](https://github.com/carpenterlab/2016_bray_natprot/blob/6dcdcf72cd90bb2dbf238b3ecf94691246d8f104/supplementary_files/profiles.csv.zip)）。
- [Rohban et al. 2017](https://doi.org/10.7554/eLife.24060.001) - U2OS 細胞における220過剰発現遺伝子の Cell Painting データ（公開 S3 バケットからアクセス: `s3://cytodata/datasets/TA-ORF-BBBC037-Rohban/profiles_cp/TA-ORF-BBBC037-Rohban/`）。
- 未公開 - A549 細胞で53遺伝子由来の596過剰発現アレルの Cell Painting プロファイル（公開 S3 バケットからアクセス: `s3://cytodata/datasets/LUAD-BBBC043-Caicedo/profiles_cp/LUAD-BBBC043-Caicedo/`）
- 未公開 - A549、ES2、HCC44 細胞で59遺伝子をノックダウンした CRISPR 実験の3,456 Cell Painting プロファイル（[GitHub からアクセス](https://github.com/broadinstitute/cell-health/tree/master/0.generate-profiles/data/profiles)）。

## ソフトウェア

生物学的表現型の画像ベースプロファイリング向けオープンソースソフトウェアパッケージ。

- [Advanced Cell Classifier](https://www.cellclassifier.org/) - 機械学習を用いて大規模データセット内の細胞を探索、アノテーション、分類するソフトウェアパッケージ。
- [CellProfiler](http://cellprofiler.org/) - 細胞画像を測定・解析する無料オープンソースソフトウェア。
- [CellProfiler Analyst](http://cellprofiler.org/cp-analyst/) - 大規模生物画像セットの対話的データ探索、解析、分類。
- [Cytominer](https://github.com/cytomining/cytominer) - R による画像ベース細胞プロファイリング手法。
- [EBImage](https://github.com/aoles/EBImage) - R 向け画像処理ツールボックス。
- [HTSvis](http://htsvis.dkfz.de/HTSvis/) - アレイ化ハイスループットスクリーニングの探索的データ解析・可視化のウェブアプリ。
- [BioProfiling.jl](https://github.com/menchelab/BioProfiling.jl) - Julia による形態学プロファイルのフィルタリング・キュレーション用ツールキット。
- [PyCytominer](https://github.com/cytomining/pycytominer) - Python による画像ベース細胞プロファイリング手法。
- [ImJoy](https://imjoy.io) - GUI を備え、ディープラーニングベース画像解析用ツールをコンパイルするプラットフォーム。
- [histoCAT](https://github.com/BodenmillerGroup/histoCAT) - 組織学・多重イメージング用の定量的表現型記述子・文脈情報を抽出するツールボックス。

## 出版物

画像ベースプロファイリングに関する出版物。

### レビュー

- [Image-based profiling for drug discovery: due for a machine-learning upgrade?](https://www.nature.com/articles/s41573-020-00117-w) - Carpenter 研究室・製薬の視点から見た、画像ベースプロファイリングの応用に関する2020年レビュー。
- [Data-analysis strategies for image-based cell profiling](https://doi.org/10.1038/nmeth.4397) - 顕微鏡画像コレクションから高品質な画像ベース（すなわち形態学的）プロファイルを作るのに必要な手順を紹介。
- [High-content screening for quantitative cell biology](https://doi.org/10.1016/j.tcb.2016.03.008) - 特定の生物学的過程に必要な遺伝子の同定から遺伝的相互作用の特徴付けまで、HCS の最近の応用を説明します。
- [Microscopy-based high-content screening](https://doi.org/10.1016/j.cell.2015.11.007) - 画像ベーススクリーニング実験の最先端を説明し、CRISPR/Cas9 媒介ゲノム工学の活用を含む課題・将来方向とともに、実験的・画像解析的アプローチを示します。
- [Applications in image-based profiling of perturbations](https://doi.org/10.1016/j.copbio.2016.04.003) - 標的・MOA の同定、リードホッピング、ライブラリ濃縮、遺伝子アノテーション、疾患特異的表現型の同定など、画像ベースプロファイリングの応用を説明。
- [Large-scale image-based screening and profiling of cellular phenotypes](https://doi.org/10.1002/cyto.a.22909) - 応用・課題を含む画像ベースプロファイリングの概観。
- [How cells explore shape space: A quantitative statistical perspective of cellular morphogenesis](https://dx.doi.org/10.1002%2Fbies.201400011) - 定量的記述子に基づく細胞形状変化の生物学に関する議論。
- [Machine learning and image-based profiling in drug discovery](https://doi.org/10.1016/J.COISB.2018.05.004) - 形態学的プロファイリングの導入と、機械学習が提供できるものに関する議論。
- [Pooled genetic screens with image-based profiling](https://doi.org/10.15252/msb.202110768) - 遺伝子スクリーニングで利用できる異なるモダリティと、形態学的プロファイリングに適するもののレビュー。

### コレクション

- [Deep learning in microscopy](https://www.nature.com/collections/cfcdjceech) - ノイズ低減、セグメンテーション、追跡、表現学習などディープラーニングの複数ユースケースに関する Nature Methods 掲載のレビュー・研究論文コレクション。
- [High-Content Imaging and Informatics](https://journals.sagepub.com/toc/jbxb/25/7) - SLAS Discovery 掲載のハイコンテントイメージングの手法・応用論文コレクション。

### 応用

- [Expanding the antibacterial selectivity of polyether ionophore antibiotics through diversity-focused semisynthesis](https://rdcu.be/ccBFH) - Cell Painting アッセイにより、哺乳類細胞を可能な限り無傷に残す抗生物質の能力を検証した2020年 Poulsen 研究室論文。
- [Image-based multivariate profiling of drug responses from single cells](https://doi.org/10.1038/nmeth1032) - 約300の単一細胞表現型測定に基づき、未処理・処理済みヒトがん細胞を分類する多変量手法。
- [Discovering metabolic disease gene interactions by correlated effects on cellular morphology](https://doi.org/10.1016/j.molmet.2019.03.001) - 脂肪細胞分化中の疾患遺伝子相互作用をプロファイリング。
- [Phenotypic profiling of the human genome by time-lapse microscopy reveals cell division genes](https://doi.org/10.1038/nature08869) - 細胞分裂表現型を詳細に分析し、ハイコンテントデータセット全体をコミュニティのリソースとして公開します。
- [Bioactivity screening of environmental chemicals using imaging-based high-throughput phenotypic profiling](https://doi.org/10.1016/j.taap.2019.114876) - 環境化学物質の生理活性スクリーニングに画像ベースプロファイリングを使用。
- [Repurposing High-Throughput Image Assays Enables Biological Activity Prediction for Drug Discovery](https://doi.org/10.1016/j.chembiol.2018.01.015) - 他の無関係なアッセイにおける低分子の生理活性を、画像ベースプロファイルにより予測。
- [Tales of 1,008 Small Molecules: Phenomic Profiling through Live-cell Imaging in a Panel of Reporter Cell Lines](https://doi.org/10.1038/s41598-020-69354-8) - MOA 予測における多剤併用の影響を実証し、将来の画像ベースプロファイリング研究でそれを克服する解決策を提示。
- [Mapping the perturbome network of cellular perturbations](https://doi.org/10.1038/s41467-019-13058-9) - 薬剤組合せの画像ベースプロファイリング・ネットワーク解析。
- [Morphological profiling of human T and NK lymphocytes by high-content cell imaging](https://doi.org/10.1016/j.celrep.2021.109318) - 免疫シナプスにおけるアクチン組織の画像ベースプロファイリング。
- [A subcellular map of the human proteome](https://doi.org/10.1126/science.aal3321) - Human Protein Atlas の共焦点顕微鏡画像からタンパク質の細胞内位置を分類。
- [A multi-scale map of cell structure fusing protein images and interactions](https://doi.org/10.1038/s41586-021-04115-9) - タンパク質の共焦点イメージング・質量分析表現を結合し、物理的近接性を予測して細胞組織を特徴付けます。
- [Predicting cell health phenotypes using image-based morphology profiling](https://doi.org/10.1091/mbc.E20-12-0784) - アポトーシス、増殖、その他の細胞健康記述子の予測因子としての画像ベースプロファイル。
- [Systematic genetics and single‐cell imaging reveal widespread morphological pleiotropy and cell‐to‐cell variability](https://doi.org/10.15252/msb.20199243) - 変動性、多面発現、不完全浸透率を特徴付ける単一細胞プロファイル解析。
- [Large‐scale image‐based profiling of single‐cell phenotypes in arrayed CRISPR‐Cas9 gene perturbation screens](https://doi.org/10.15252/msb.20178064) - アレイ化 CRISPR スクリーニングのイメージング実現可能性を示し、個々の細胞のトランスフェクション効率を特徴付ける方法を提供。
- [Multiparametric phenotyping of compound effects on patient derived organoids](https://doi.org/10.1038/s41467-022-30722-9) - 患者由来オルガノイドにおける化学的影響をプロファイリング。
- [A chemical-genetic interaction map of small molecules using high-throughput imaging in cancer cells](https://doi.org/10.15252/MSB.20156400) - 12ノックアウト細胞株において1,280化合物が誘発する形態学的変化をプロファイリング。
- [Time-resolved mapping of genetic interactions to model rewiring of signaling pathways](https://doi.org/10.7554/eLife.40174) - 複数の形態学的記述子に基づく、時間にわたる遺伝的相互作用の変化。
- [High-Content Imaging of Unbiased Chemical Perturbations Reveals that the Phenotypic Plasticity of the Actin Cytoskeleton Is Constrained](https://doi.org/10.1016/j.cels.2019.09.002) - 大規模化合物スクリーニングにおける形態学的クラスターの定義。
- [A map of directional genetic interactions in a metazoan cell](https://doi.org/10.7554/eLife.05464) - 21個の表現型記述子を統合して遺伝的相互作用を特徴付けます。
- [The phenotypic landscape of essential human genes](https://doi.org/10.1016/j.cell.2022.10.017) - プール CRISPR スクリーニングの形態学的記述子を in-situ シーケンシングと比較。
- [Evaluation of Gene Expression and Phenotypic Profiling Data as Quantitative Descriptors for Predicting Drug Targets and Mechanisms of Action](https://doi.org/10.1101/580654) - 作用機序予測のため、画像ベースプロファイルを含むプロファイリングモダリティをベンチマーク。
- [The molecular architecture of cell cycle arrest](https://doi.org/10.15252/msb.202211087) - 細胞周期の段階にわたる細胞特徴を比較。
- [Integrated intracellular organization and its variations in human iPS cells](https://doi.org/10.1038/s41586-022-05563-7) - 複数 iPSC における細胞・核の形状を3Dで分解し、細胞構造間の関連を研究。
- [Single-cell metabolic profiling of human cytotoxic T cells](https://doi.org/10.1038/s41587-020-0651-8) - 代謝プロファイリング・空間情報を組み合わせ、腫瘍微小環境の免疫サブセットを定義。
- [The single-cell pathology landscape of breast cancer](https://doi.org/10.1038/s41586-019-1876-x) - 多重イメージングの形状、強度、文脈情報に基づき、乳がんにおける細胞集団・相互作用を定義。
- [Identification of phenotype-specific networks from paired gene expression–cell shape imaging data](https://doi.org/10.1101%2Fgr.276059.121) - 発現・イメージングデータを対応付け、細胞形態の根底にある遺伝子ネットワークを探索。
- [Predicting drug polypharmacology from cell morphology readouts using variational autoencoder latent space arithmetic](https://doi.org/10.1371/journal.pcbi.1009888) - オートエンコーダーで細胞形態をモデル化し、薬剤組合せの効果を推定。
- [Deep Morphology Learning Enhances Ex Vivo Drug Profiling-Based Precision Medicine](https://doi.org/10.1158/2643-3230.BCD-21-0219) - 形態学的情報を患者試料から抽出して治療を導く方法を具体的に説明。

### 手法

- [Cell Painting, a high-content image-based assay for morphological profiling using multiplexed fluorescent dyes](https://doi.org/10.1038/nprot.2016.105) - Cell Painting を使う実験の設計・実行を説明するプロトコル。
- [Multiplex Cytological Profiling Assay to Measure Diverse Cellular States](https://doi.org/10.1371/journal.pone.0080999) - Cell Painting アッセイ。
- [CIDRE: an illumination-correction method for optical microscopy](https://doi.org/10.1038/nmeth.3323) - エネルギー最小化に基づく後処理型照明補正手法。
- [Retrospective shading correction based entropy minimization](https://doi.org/10.1046/j.1365-2818.2000.00669.x) - エントロピー最小化に基づく後処理型シェーディング補正手法。
- [Capturing single-cell heterogeneity via data fusion improves image-based profiling](https://doi.org/10.1038/s41467-019-10154-8) - 分散・共分散を集団平均へ追加し、単一細胞の不均一性を捉えます。
- [Minimum redundancy feature selection from microarray gene expression data](https://doi.org/10.1142/S0219720005001004) - 最小冗長性・最大関連性の特徴選択フレームワーク。
- [Learning unsupervised feature representations for single cell microscopy images with paired cell inpainting](https://doi.org/10.1371/journal.pcbi.1007348) - ラベル付き訓練データなしに、顕微鏡画像内の単一細胞の特徴表現を学習する自己教師あり手法。
- [Weakly supervised learning of single-cell feature embeddings](https://doi.org/10.1109/CVPR.2018.00970) - 特徴学習のための弱教師ありアプローチを使う CNN 訓練。
- [Accurate Prediction of Biological Assays with High-Throughput Microscopy Images and Convolutional Networks](https://doi.org/10.1021/acs.jcim.8b00670) - 画像ベースプロファイルを使用し、無関係なアッセイにおける低分子の生理活性を予測する CNN によるエンドツーエンド学習。
- [Evaluation of Deep Learning Strategies for Nucleus Segmentation in Fluorescence Images](https://doi.org/10.1002/cyto.a.23863) - 核セグメンテーション用の複数ディープラーニング手法を比較。
- [Automating Morphological Profiling with Generic Deep Convolutional Networks](https://doi.org/10.1101/085118) - 汎用 CNN の活性化特徴を転移し、画像ベースプロファイリング用の特徴を抽出。
- [A BaSiC tool for background and shading correction of optical microscopy images](https://doi.org/10.1038/ncomms14836) - 空間・時間依存バイアスを考慮する照明補正手法。
- [Cellpose: a generalist algorithm for cellular segmentation](https://doi.org/10.1038/s41592-020-01018-x) - 事前学習済み重みを持つ、細胞・核セグメンテーション用汎用ディープラーニングモデル。
- [Deep Learning Automates the Quantitative Analysis of Individual Cells in Live-Cell Imaging Experiments](https://doi.org/10.1371/journal.pcbi.1005177) - DeepCell: ディープラーニングセグメンテーションモデルのコレクション。
- [Improving Phenotypic Measurements in
High-Content Imaging Screens](https://doi.org/10.1101/161422) - 転移学習を用いて単一細胞・化合物プロファイルを埋め込み、作用機序予測で例示します。
- [The Multidimensional Perturbation Value](https://doi.org/10.1177/1087057112469257) - スクリーニングでの有意な活性を定義するスコアを提案。
- [Label-Free Prediction of Cell Painting from Brightfield Images](https://doi.org/10.1038/s41598-022-12914-x) - 明視野画像から Cell Painting 色素の画像を再構成し、対応する形態学的測定が保持されることを保証。
- [ShapoGraphy: A User-Friendly Web Application for Creating Bespoke and Intuitive Visualisation of Biomedical Data](https://doi.org/10.3389/fbinf.2022.788607) - 形態学的プロファイルを可視化する手法。
- [CytoGAN: Generative Modeling of Cell Images](https://doi.org/10.1101/227645) - 細胞画像から生物学的状態の潜在表現を学習する可能性を示す生成ネットワーク。
- [Self-supervised feature extraction from image time series in plant phenotyping using triplet networks](https://doi.org/https://doi.org/10.1093/bioinformatics/btaa905) - 植物画像から表現型特徴を直接抽出。
- [Morphology and gene expression profiling provide complementary information for mapping cell state](https://doi.org/10.1016/j.cels.2022.10.001) - 同一摂動に対する Cell Painting・L1000 アッセイに含まれる情報を比較。
- [Fully unsupervised deep mode of action learning for phenotyping high-content cellular images](https://doi.org/10.1093/bioinformatics/btab497) - 作用機序など意味のある関係に対応するクラスターで細胞形態を表現する教師なしアプローチ。形態学的プロファイリング・分類のディープラーニング手法概観も含みます。
- [Automated high-speed 3D imaging of organoid cultures with multi-scale phenotypic quantification](https://doi.org/10.1038/s41592-022-01508-0) - ライトシート顕微鏡を使い、オルガノイドの3D形態学的記述子を抽出する実験・計算ワークフロー。

## 寄稿

寄稿を歓迎します。まず[寄稿ガイドライン](https://github.com/cytodata/awesome-cytodata/blob/395cdc9c015a0431e80fc9531931064df59c909c/contributing.md)をお読みください。

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)
