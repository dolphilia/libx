---
title: "inoue0426/awesome-computational-biology"
description: "計算生物学のデータベース、データセット、ツール、機械学習モデルを分類した定本スナップショット"
licenseSource: "github-inoue0426-awesome-computational-biology-readme-md"
---

# 計算生物学のAwesomeリスト <a id="awesome-computational-biology-"></a> [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

計算生物学に関するデータベース、ソフトウェア、論文を厳選したコレクションです。

> 計算生物学は、生物・生態・行動・社会システムの研究に、データ解析・理論的方法、数理モデリング、計算機シミュレーション技術を開発・応用する分野です。— [Wikipedia](https://en.wikipedia.org/wiki/Computational_biology)

---

## 概要 <a id="overview"></a>

[![Resource Landscape Overview](https://github.com/inoue0426/awesome-computational-biology/blob/dd96b38e5775c672020b9372e78dfa8e8b8ecdb6/docs/overview.png)](https://inoue0426.github.io/awesome-computational-biology/overview.html)

> インタラクティブ版: [Resource Overview page](https://inoue0426.github.io/awesome-computational-biology/overview.html)  
> 図を再生成するコマンド: `python scripts/generate_overview.py`

---

## GitHub Pages UI <a id="github-pages-ui"></a>

[GitHub Pages UI](https://inoue0426.github.io/awesome-computational-biology/)で資料を閲覧・検索できます。

- 検索対象は`name`、`description`、`tasks`、`modalities`、`tags`です。
- **Task**、**Modality**、**Type**フィルターの`tasks`、`modalities`、`type`は、`docs/data/resources.json`内の項目へ直接対応します。
- カード上のバッジをクリックすると、対応するフィルターが適用されます。

---

## 目次 <a id="table-of-contents"></a>

- [計算生物学のAwesomeリスト](#awesome-computational-biology-)
  - [目次](#table-of-contents)
  - [概要](#overview)
  - [GitHub Pages UI](#github-pages-ui)
  - [引用](#citation)
  - [選定基準（厳格）](#curation-criteria-strict)
  - [更新・リンク切れ方針](#update--link-rot-policy)
  - [データスキーマとコントリビューション手順](#data-schema--contribution-workflow)
  - [データベース](#databases)
    - [scRNA](#scrna)
    - [化合物](#compound)
    - [パスウェイ](#pathway)
    - [質量スペクトル](#mass-spectra)
    - [タンパク質](#protein)
    - [ゲノム](#genome)
    - [疾患](#disease)
    - [相互作用](#interaction)
      - [薬物・遺伝子相互作用](#drug-gene-interaction)
      - [薬物（細胞株）応答](#drug-cell-line-response)
      - [化学物質・タンパク質相互作用](#chemical-protein-interaction)
      - [タンパク質間相互作用](#protein-protein-interaction)
      - [知識グラフ](#knowledge-graph)
      - [遺伝子制御ネットワーク](#gene-regulatory-network)
    - [臨床試験](#clinical-trial)
  - [ベンチマークとデータセット](#benchmarks--datasets)
  - [API](#api)
  - [前処理ツール](#preprocessing-tools)
  - [機械学習タスクとモデル](#machine-learning-tasks-and-models)
    - [創薬](#drug-discovery)
      - [薬物応答予測](#drug-response-prediction)
      - [薬物摂動](#drug-perturbation)
      - [ドラッグリポジショニング](#drug-repurposing)
      - [薬物・標的相互作用](#drug-target-interaction)
      - [化合物・タンパク質相互作用](#compound-protein-interaction)
      - [分子生成](#molecular-generation)
    - [生物学向けLLM](#llm-for-biology)
    - [基盤モデル](#foundation-models)
      - [単一細胞基盤モデル](#single-cell-foundation-models)
        - [トランスクリプトミクス基盤モデル](#transcriptomics-foundation-models)
        - [空間基盤モデル](#spatial-foundation-models)
        - [マルチオミクス基盤モデル](#multi-omics-foundation-models)
        - [ドメイン整合](#domain-alignment)
      - [化合物基盤モデル](#compound-foundation-models)
        - [化合物埋め込み](#compound-embedding)
      - [タンパク質基盤モデル](#protein-foundation-models)
        - [事前学習済み埋め込み](#pre-trained-embedding)
        - [タンパク質構造予測・設計](#protein-structure-prediction-and-design)
      - [マルチモーダル基盤モデル](#multi-modal-foundation-models)
      - [ゲノミクス基盤モデル](#genomics-foundation-models)

---

## データベース <a id="databases"></a>

### scRNA <a id="scrna"></a>

- [CZ CELLxGENE](https://cellxgene.cziscience.com/) — チャーン・ズークシン・イニシアティブによる単細胞データセットリポジトリおよびインタラクティブ・エクスプローラー
- [Gene Expression Omnibus](https://www.ncbi.nlm.nih.gov/geo/) — 公開されている機能遺伝学データベース
- [Human Cell Atlas](https://www.humancellatlas.org/) — 人体内すべての細胞に関するオープングローバルアタス
- [Single Cell PORTAL](https://singlecell.broadinstitute.org/single_cell) — 単細胞RNAに関する公開データベース
- [Single Cell Expression Atlas](https://www.ebi.ac.uk/gxa/sc/home) — 単細胞RNAに関する公開データベース

### 化合物 <a id="compound"></a>

- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) — 最大規模の化学データベース（化合物、遺伝子、タンパク質を含む）
- [ChEBI](https://www.ebi.ac.uk/chebi/) — 小型化学化合物に特化したデータベース
- [ChEMBL](https://www.ebi.ac.uk/chembl/) — 薬剤に似た生物活性分子
- [ChemSpider](http://www.chemspider.com/) — 化学構造データベース
- [DrugTargetCommons](https://drugtargetcommons.fimm.fi/) — 薬品およびターゲット間の実験的生物活性データをキュレーション・統合するコミュニティプラットフォーム
- [HMDB (Human Metabolome Database)](https://hmdb.ca/) — 人体内に存在する小型分子代謝物の包括的なデータベース
- [KEGG COMPOUND](https://www.genome.jp/kegg/compound/) — 小型分子および生物多糖体のコレクション
- [LIPID MAPS](https://www.lipidmaps.org/databases/lmsd/overview) — 脂質に関するデータベース
- [Rhea](https://www.rhea-db.org/) — 化学反応に関するデータベース
- [DrugCentral](http://drugcentral.org/) — 薬品の作用メカニズムおよび指標に関するオンライン薬品コンペンドリム
- [Drug Repurposing Hub](https://repo-hub.broadinstitute.org/repurposing#download-data) — 薬品再利用データのコレクション（薬品、作用メカニズム、ターゲットなど）
- [Therapeutic Target Database](https://idrblab.net/ttd/full-data-download) — 薬品-ターゲット、ターゲット-疾患、薬品-疾患データセット
- [ZINC ligand discovery database](https://zinc.docking.org/) — 商業的に入手可能な化合物の無料データベース（仮想スクリーニング用）

### パスウェイ <a id="pathway"></a>

- [PathwayCommons](https://www.pathwaycommons.org/) — 経路および相互作用に関するデータベース
- [KEGG PATHWAY](https://www.genome.jp/kegg/pathway.html) — 経路マップのコレクション
- [WikiPathways](https://wikipathways.org/) — 生物の経路データベース
- [Reactome](https://reactome.org/) — 専門家が-curatedし、同行レビューされた経路データベース。詳細な反応メカニズムを備えたもの。
- [BioCyc](https://biocyc.org/) — 数千の生物にわたる経路／ゲノムデータベースの収集。
- [OmniPath](https://omnipathdb.org/) — 100以上のデータベースから集積されたタンパク質相互作用、シグナル経路、遺伝子調節ネットワーク、miRNAターゲットを統合した包括的なリソース。
- [SIGNOR 2.0](https://signor.uniroma2.it/) — 原因となるシグナル相互作用および経路のデータベース。タンパク質間の符号付きおよび方向付き関係を含むもの。
- [MSigDB (Molecular Signatures Database)](https://www.gsea-msigdb.org/gsea/msigdb) — 経路および生物学的プロセスから導かれたカスタム遺伝子セット。

### 質量スペクトル <a id="mass-spectra"></a>

- [MassBank](http://www.massbank.jp/) — 質量分析の参照スペクトルを提供するオープンソースデータベースおよびツール。
- [MoNA MassBank of North America](https://mona.fiehnlab.ucdavis.edu/) — 代謝物の質量スペクトル、メタデータおよび関連化合物を網羅したメタデータベース。

### タンパク質 <a id="protein"></a>

- [THE HUMAN PROTEIN ATLAS](https://www.proteinatlas.org/) — 包括的な人間タンパク質データベース（細胞、組織、器官）。
- [PROTEIN DATA BANK (PDB)](https://www.rcsb.org/) — タンパク質、核酸、複合体の3次元構造。
- [UniProt](https://www.uniprot.org/) — タンパク質の機能情報。
- [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/api-docs) — タンパク質の3次元構造予測。
- [RCSB Protein Data Bank](https://www.rcsb.org/) — 生物分子の構造データを収集するリポジトリ。
- [Critical Assessment of Structure Prediction (CASP)](https://predictioncenter.org/) — タンパク質構造予測の評価手法。
- [Uniclust](https://uniclust.mmseqs.com/) — タンパク質配列のクラスタリングデータベース。
- [UniRef](https://www.uniprot.org/uniref/) — 複数の配列同一性閾値で非冗長な配列データベースをクラスタリングしたUniProtKBのエントリ。
- [CATH database](https://www.cathdb.info/) — タンパク質ドメイン構造の階層的分類。
- [SAbDab](https://opig.stats.ox.ac.uk/webapps/sabdab-sabpred/sabdab) — PDBに含まれるすべての抗体構造を含む抗体構造データベース。
- [OADB (Observed Antibody Space Database)](http://opig.stats.ox.ac.uk/webapps/oas/) — 免疫叢解析から得られた抗体配列データベース。
- [InterPro](https://www.ebi.ac.uk/interpro/) — 14のデータベース（PfamおよびPROSITEを含む）を統合したタンパク質家族、ドメイン、機能部位データベース。
- [Pfam](https://www.ebi.ac.uk/interpro/entry/pfam/) — プロテインファミリーを複数配列比較と隠れマルコフモデルで記述したデータベース
- [NeXtProt](https://www.nextprot.org/) — 機能注釈が深く、ヒトプロテインに関する専門知識を備えた知識ベース、ユニプロトと補完的なもの

### ゲノム <a id="genome"></a>

- [ENCODE](https://www.encodeproject.org/) — DNA要素の百科事典；遺伝子全体にわたる調節および機能遺伝子要素
- [Ensembl](https://www.ensembl.org/) — 脊椎動物およびその他の真核生物ゲノムのためのゲノムブラウザおよび注釈データベース
- [Human Genome Resources at NCBI](https://www.ncbi.nlm.nih.gov/projects/genome/guide/human/index.shtml) — ゲノム、プロテオミクス、トランスクリプトミクス、システムバイオロジーに関するデータベース
- [GenBank](https://www.ncbi.nlm.nih.gov/genbank/) — NCBIの遺伝子配列データベース
- [UCSC Genome Browser](https://genome.ucsc.edu/) — UCSCのゲノムブラウザ
- [cBioPortal](https://www.cbioportal.org/) — がんゲノミクスデータベース；多数の患者データセットを集約したもの
- [OncoKB](https://www.oncokb.org/) — がん遺伝子、変異、治療意義に関する精密がん医療知識ベース
- [10x Genomics Dataset](https://www.10xgenomics.com/resources/datasets) — シングルセルデータセットの収集
- [The Genotype-Tissue Expression (GTEx)](https://gtexportal.org/home/) — ヒト遺伝子発現および調節に関するリソース
- [Dependency Map (DepMap)](https://depmap.org/portal/) — がん細胞ラインにおけるCRISPR-Cas9スクリーン
- [Catalogue Of Somatic Mutations In Cancer (COSMIC)](https://cancer.sanger.ac.uk/cosmic) — がんにおける体細胞変異に関するリソース
- [MGnify](https://www.ebi.ac.uk/metagenomics/) — メタゲノムおよびメタトランスクリプトムデータに関するリソース
- [JASPAR](http://jaspar.genereg.net/) — 転写因子結合プロファイルデータベース
- [gnomAD](https://gnomad.broadinstitute.org/) — ゲノム集約データベース；大規模シーケンスプロジェクトから得られた遺伝子変異データベース
- [Rfam](https://rfam.org/) — RNAファミリーの配列比較と共通構造を持つデータベース
- [ROADMAP Epigenomics](http://www.roadmapepigenomics.org/) — 111種のヒトの主な細胞タイプおよび組織の参照エピジェネティクスマップ、ヒストン修飾、染色体のアクセシビリティ、DNAメチル化を含む
- [FANTOM5](https://fantom.gsc.riken.jp/5/) — 哺乳類ゲノムの機能注釈；ヒトおよびマウス細胞タイプにおける活性化エンハンサー、プロモーター、転写開始サイトの包括的なアトラス

### 疾患 <a id="disease"></a>

- [KEGG DRUG](https://www.genome.jp/kegg/drug/) — 包括的かつ承認された薬品情報データベース
- [DrugBank](https://go.drugbank.com/) — 薬品と標的に関するデータベース（アリババ大学）
- [DisGeNET](https://www.disgenet.org/) — 遺伝子・疾患の関連性を専門家が編集し、GWASデータを統合したデータベース
- [OMIM (Online Mendelian Inheritance in Man)](https://www.omim.org/) — 人間の遺伝子および遺伝性疾患に関する包括的なデータベース
- [Open Targets Platform](https://platform.opentargets.org/) — 遺伝学、ゲノミクス、薬品データを統合した標的識別および優先化プラットフォーム（薬品発見用）
- [Human Phenotype Ontology (HPO)](https://hpo.jax.org/) — 人間の疾患における表型異常の標準化語彙、遺伝子、変異、臨床特徴を結びつける
- [DISEASES](https://diseases.jensenlab.org/) — テキストマイニング、編集されたデータベース、実験データから得られた遺伝子・疾患関連性データベース

### 相互作用 <a id="interaction"></a>

#### 薬物・遺伝子相互作用 <a id="drug-gene-interaction"></a>

- [DGIdb](https://www.dgidb.org/) — 薬品と遺伝子の相互作用および「ドラッグ可能」遺伝子
- [Comparative Toxicogenomics Database](http://ctdbase.org/) — 化学物質と遺伝子の相互作用、化学物質・疾患および遺伝子・疾患の関連性、化学物質・表型の関連性
- [SNAP](https://snap.stanford.edu/biodata/datasets/10002/10002-ChG-Miner.html) — 薬品と遺伝子の相互作用データセット

#### 薬物（細胞株）応答 <a id="drug-cell-line-response"></a>

- [NCI60](https://dtp.cancer.gov/discovery_development/nci-60/) — 60のがん細胞ラインと多くの薬品に焦点を当てる
- [Genomics of Drug Sensitivity in Cancer (GDSC)](https://www.cancerrxgene.org/) — 約1000のヒトがん細胞ラインと数百の化合物に対する薬品感受性
- [Cancer Cell Line Encyclopedia](https://sites.broadinstitute.org/ccle/) — 約1000のがん細胞ラインのデータベース
- [CellMiner Cross Database (CellMinerCDB)](https://discover.nci.nih.gov/cellminercdb/) — 複数のがん細胞ラインデータベースを統合したデータベース

#### 化学物質・タンパク質相互作用 <a id="chemical-protein-interaction"></a>

- [STITCH](http://stitch.embl.de/) — 化学物質とタンパク質の相互作用
- [BindingDB](https://www.bindingdb.org/rwd/bind/index.jsp) — 化合物と標的データベース
- [Davis kinase inhibitors DB](http://staff.cs.utu.fi/~aijrinas/dti/) — タンパク質-結合物相互作用研究用の実験的キナーゼ阻害剤結合親和性データセット
- [Kinase Inhibitor Bioactivity Data (KIBA)](https://janeliascicomp.github.io/KIBA/) — キナーゼ阻害剤の統合バイオ活性スコア（Ki、Kd、IC50測定を組み合わせ）
- [PDBBind](https://www.pdbbind-plus.org.cn/) — 生物分子複合体の結合親和性データ

#### タンパク質間相互作用 <a id="protein-protein-interaction"></a>

- [STRING](https://string-db.org/) — 複数の生物のタンパク質相互作用ネットワーク
- [BioGRID](https://thebiogrid.org/) — タンパク質、遺伝子、化学物質の相互作用
- [HIPPIE](http://cbdm-01.zdv.uni-mainz.de/~mschaefer/hippie/) — 人間のタンパク質間相互作用データベース
- [IntAct](https://www.ebi.ac.uk/intact/home) — EMBL-EBIから提供されるオープンソースの分子相互作用データベースおよび解析システム

#### 知識グラフ <a id="knowledge-graph"></a>

- [Drug Mechanism Database (DrugMechDB)](https://github.com/SuLab/DrugMechDB/tree/2.0.1) — 薬から病気への作用メカニズム
- [DRKG](https://github.com/gnn4dr/DRKG) — 薬の発見用の大規模生物知識グラフ
- [Hetionet](https://github.com/hetio/hetionet) — 遺伝子、病気、薬、経路など、多様な要素を統合した異質ネットワーク
- [PrimeKG](https://github.com/mims-harvard/PrimeKG) — 臨床データ、遺伝データ、薬データを統合した多モーダル精密医療知識グラフ

#### 遺伝子制御ネットワーク <a id="gene-regulatory-network"></a>

- [TRRUST v2](https://www.grnpedia.org/trrust/) — 人間およびマウスの転写因子とそのターゲット遺伝子間の転写調節相互作用について、文献から導かれた証拠を追加した手動編集データベース
- [RegNetwork](http://www.regnetworkweb.org/) — 複数種類の生物において、転写因子–ターゲット遺伝子およびmiRNA–遺伝子相互作用データをカバーする遺伝子調節ネットワークデータベース
- [miRBase](https://www.mirbase.org/) — miRNA遺伝子の注釈、配列、実験的に検証されたターゲットに関する参照リポジトリ

### 臨床試験 <a id="clinical-trial"></a>

- [ClinicalTrials.gov](https://clinicaltrials.gov/) — 民間および公的資金を用いた臨床研究
- [ICD10](https://icd.who.int/browse10/2019/en) — 国際疾病分類、第10版
- [EU Drug Regulating Authorities Clinical Trials DB (EudraCT)](https://eudract.ema.europa.eu/) — ヨーロッパ臨床試験データベース
- [MIMIC-IV](https://mimic.mit.edu/) — 自由にアクセス可能な重症医療データベース

---

## ベンチマークとデータセット <a id="benchmarks--datasets"></a>

- [1000 Genomes Project](https://www.internationalgenome.org/) — 26の集団から2,504人の人間遺伝子変異に関する参照パネル
- [BACE](https://www.kaggle.com/datasets/gokturkkoch/bace) — β-分泌酵素1（BACE-1）阻害剤結合親和性を予測する二値分類および回帰データセット
- [BEAT AML](https://biodev.github.io/BeatAML2/) — 急性好中球性白血病における機能的外挿型薬品感受性測定と遺伝子解析の組み合わせ
- [Bento](https://github.com/LigandPro/Bento) — タンパク質-ライゲンドドッキングベンチマーク（剛性、柔軟性、de novo、盲検、適合変化、共価結合ドッキングタスクを含む）
- [BindingDB Curated Sets](https://www.bindingdb.org/rwd/bind/chemsearch/marvin/SDFdownload.jsp?all_download=yes) — タンパク質-ライゲンド相互作用を評価するための手動編集された結合親和性データセット
- [Cancer Therapeutics Response Portal (CTRP)](https://portals.broadinstitute.org/ctrp/) — 約900の癌細胞ラインにおける400以上の化合物に対する薬品感受性プロファイル
- [ClinTox](https://tdcommons.ai/single_pred_tasks/tox/#clintox) — FDA承認薬と臨床試験で毒性により失敗した薬の臨床毒性データセット
- [CPTAC (Clinical Proteomic Tumor Analysis Consortium)](https://proteomics.cancer.gov/programs/cptac) — 複数のがんタイプにわたるプロテオームとゲノムをリンクするマルチオミックプロテオゲノミックデータセット
- [CrossDocked2020](https://arxiv.org/abs/2001.01037) — 構造に基づく仮想スクリーニングを目的とした大規模データセット
- [DUD-E (Directory of Useful Decoys, Enhanced)](http://dude.docking.org/) — 多様なタンパク質ターゲットにおける活性結合剤と困難なデコイセットを含む構造に基づく仮想スクリーニングベンチマーキング
- [FLIP (Fitness Landscape Inference for Proteins)](https://github.com/J-SNACKKB/FLIP) — タンパク質MLモデルの評価に用いるタンパク質フィットネスランドスケープデータセットのベンチマーキングコレクション
- [Genomics of Drug Sensitivity in Cancer (GDSC)](https://www.cancerrxgene.org/) — 約1000のヒトがん細胞ラインと数百の化合物に対する薬品感受性
- [GuacaMol](https://github.com/BenevolentAI/guacamol) — 生成型分子設計モデルのベンチマーキングセット
- [JUMP Cell Painting Datasets](https://github.com/jump-cellpainting/datasets) — フェノタイププロファイリングおよび薬品発見研究用の、コンソーシアム規模の細胞イメージング変動データセット（化学的および遺伝子的）
- [LINCS L1000](https://lincsproject.org/LINCS/tools/workflows/find-the-best-place-to-obtain-the-lincs-l1000-data) — 細胞ラインにおける978のランドマーク遺伝子の発現プロファイル（20,000以上の化学的および遺伝子的変動を含む）
- [MoleculeNet](http://moleculenet.ai/) — 分子機械学習のためのベンチマーキングデータセット
- [MOSES](https://github.com/molecularsets/moses) — 分子生成モデルのためのベンチマーキングプラットフォーム
- [NCI60](https://dtp.cancer.gov/discovery_development/nci-60/) — 60の多様なヒトがん細胞ラインにおける薬品感受性ベンチマーキング
- [OGB (Open Graph Benchmark)](https://ogb.stanford.edu/) — 生物学データ（例：ogbl-ppa（タンパク質間関連）、ogbg-molhiv）を含む大規模グラフMLベンチマーキングセット
- [OpenBioLink](https://github.com/OpenBioLink/OpenBioLink) — 生物学知識グラフ補完のためのベンチマーキングデータセット
- [PharmGKB](https://www.pharmgkb.org/) — 遺伝子変異と数千の薬品に対する薬品反応フェノタイプをリンクする-curated薬理ゲノミクスデータセット
- [PK-DB](https://pk-db.com/) — 臨床および前臨床研究から得られた実験的薬動学（PK）およびADMEデータのオープンデータベース
- [PRISM](https://depmap.org/portal/prism/) — プール細胞ラインバーコードを用いた4,500以上の薬品と900以上のがん細胞ラインにおけるがん薬品感受性プロファイリング
- [ProteinGym](https://github.com/OATML-Markslab/ProteinGym) — タンパク質フィットネスランドスケープモデル評価用の深層変異スキャン試験の大規模ベンチマーキング
- [QM9](https://figshare.com/collections/Quantum_chemistry_structures_and_properties_of_134_kilo_molecules/978904) — 134Kの安定した有機小分子の量子化学性質（DFTレベルで計算）
- [scIB (Single-cell Integration Benchmarks)](https://github.com/theislab/scib) — シングルセルデータ統合手法のための包括的なベンチマーキングフレームワーク
- [scPerturb](https://github.com/sanderlab/scPerturb) — CRISPRおよび薬品変動研究を含む、継続的に更新されるシングルセル変動データリソース
- [SIDER (Side Effect Resource)](http://sideeffects.embl.de/) — 1,430種類の承認済み薬品とその記録された副作用反応を27系統・器官クラスに分類したデータベース
- [Tabula Muris](https://tabula-muris.ds.czbiohub.org/) — 20種類のマウスの臓器および組織に関する包括的なシングルセルアタスにより、組織間および種間比較が可能
- [Tabula Sapiens](https://tabula-sapiens-portal.ds.czbiohub.org/) — 24の臓器および組織から約50万セルを収集した人間のシングルセルアタス（複数の寄与者を含む）
- [TAPE (Tasks Assessing Protein Embeddings)](https://github.com/songlab-cal/tape) — タンパク質表現の評価に用いる5つの生物学的に意味のある半教師学習タスクのベンチマークセット
- [The Cancer Genome Atlas (TCGA)](https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga) — 33種類のがんについて約11,000人の患者データを含む、ゲノム、転写、タンパク質、メチル化を含む多オミクスデータセット
- [TCGA virtual spatial transcriptomics atlas](https://huggingface.co/datasets/ratschlab/TCGA_virtual_spatial_transcriptomics_atlas) — DeepSpot-Mが予測したTCGA H&E（FFおよびFFPE；28,664スライド／32がんタイプ；ゲート付き）における全トランスクリプトームスキャン（ST）。論文：[DeepSpot-M](https://www.medrxiv.org/content/10.64898/2026.06.19.26356060v1)
- [HEST Xenium virtual spatial transcriptomics](https://huggingface.co/datasets/ratschlab/HEST_Xenium_virtual_spatial_transcriptomics) — DeepSpot-Mが予測した59サンプルのHEST-1k 10x Xeniumデータ（約1330万セル）における全トランスクリプトームスキャン（ST）。論文：[DeepSpot-M](https://www.medrxiv.org/content/10.64898/2026.06.19.26356060v1)
- [Therapeutics Data Commons (TDC)](https://tdcommons.ai/) — ADMET、薬物-ターゲット相互作用、薬物反応など、幅広い分野をカバーする統合ベンチマークセット
- [Tox21](https://tripod.nih.gov/tox21/challenge/) — 毒性予測に用いる12核受容体およびストレス応答経路の生化学試験において12,707化合物が検証
- [UK Biobank](https://www.ukbiobank.ac.uk/) — 遺伝子、画像、健康データを含む約50万参加者を対象とした大規模バイオメディカルデータベース（集団遺伝学および疾患研究用）

---

## API <a id="api"></a>

- [PubMed E-utilities (esearch/efetch)](https://www.nlm.nih.gov/dataguide/edirect/esearch.html) — PubMedからバイオメディカル文献を検索および取得するAPI
- [NCBI E-utilities](https://www.ncbi.nlm.nih.gov/books/NBK25501/) — NCBIデータベース（Gene、GEO、SRA、PubChemなど）にアクセスする統合API
- [UniProt REST API](https://www.uniprot.org/help/api) — タンパク質の配列および機能注釈データへのプログラムによるアクセス
- [Ensembl REST API](https://rest.ensembl.org/) — ゲノム注釈、変異、遺伝子、比較ゲノムデータへのAPIアクセス
- [KEGG REST API](https://www.kegg.jp/kegg/rest/keggapi.html) — KEGG経路、化合物、遺伝子、反応へのAPIアクセス
- [ChEMBL Web Services](https://www.ebi.ac.uk/chembl/ws) — バイオアクティブ分子、ターゲット、バイオアッセイに関するREST API
- [Open Targets Platform API](https://platform.opentargets.org/api) — 遺伝学、ゲノミクス、薬物データを統合したターゲット-疾患関連性のAPI
- [ClinicalTrials.gov API](https://clinicaltrials.gov/api/gui) — 臨床試験のメタデータおよび結果を照会するAPI

---

## 前処理ツール <a id="preprocessing-tools"></a>

- [Chemistry Development Kit](https://github.com/cdk/cdk) — 化学情報学ソフトウェアおよび機械学習ツール
- [Biopython](https://biopython.org/) — 生物学計算に用いるPythonツールのコレクション（配列解析、構造パース、データベースアクセスを含む）
- [FlashDeconv](https://github.com/cafferychen777/flashdeconv) — 高性能空間トランスクリプトミクスの解離（約3分で約100万スポット）
- [RDKit](https://github.com/rdkit/rdkit) — 化学インフォマティクスソフトウェアおよび機械学習ツールキット
- [DeepChem](https://github.com/deepchem/deepchem) — 薬品発見、量子化学、材料科学向けの深層学習ライブラリ
- [ChatSpatial](https://github.com/cafferychen777/ChatSpatial) — 自然言語を用いた空間トランスクリプトミクス解析用MCPサーバー
- [Scanpy](https://scanpy.readthedocs.io/en/stable/) — scRNA-seq解析用Pythonライブラリ
- [Seurat](https://satijalab.org/seurat/) — scRNA-seq解析用Rライブラリ
- [scvi-tools](https://scvi-tools.org/) — 単細胞オミクスデータ解析用確率モデル
- [CellTypist](https://github.com/Teichlab/celltypist) — scRNA-seq用自動細胞タイプ注釈
- [Squidpy](https://squidpy.readthedocs.io/) — 空間単細胞解析用Pythonライブラリ
- [GROMACS](https://www.gromacs.org/) — 生化学分子の分子動力学シミュレーションパッケージ
- [MDAnalysis](https://www.mdanalysis.org/) — 分子動力学シミュレーショントラジェクトリーの解析および変更用Pythonライブラリ
- [OpenMM](https://openmm.org/) — 分子シミュレーションおよびGPU加速MD向け高性能ツールキット
- [scVelo](https://github.com/theislab/scvelo) — 単細胞トランスクリプトミクスにおけるRNA速度の推定：細胞分化の方向と速度を推定
- [STAR](https://github.com/alexdobin/STAR) — スプライスアライメントおよび単細胞定量をサポートする超高速ユニバーサルRNA-seqアライナー（STARsolo）
- [kallisto](https://pachterlab.github.io/kallisto/) — 偽アライメントによる高速トランスクリプトーム量の近似最適RNA-seq定量
- [Harmony](https://github.com/immunogenomics/harmony) — 複数データセット、条件、技術、種間を対象とした単細胞データの高速かつスケーラブルな統合
- [Monocle3](https://cole-trapnell-lab.github.io/monocle3/) — 発生トラジェクトリーの学習および偽時系列における細胞の順序付け用単細胞トラジェクトリー分析ツール
- [CellChat](https://github.com/sqjin/CellChat) — 単細胞トランスクリプトミクドデータから細胞間通信のリガンド-受容体ネットワークの推定および解析
- [SCENIC](https://github.com/aertslab/SCENIC) — 単細胞調節ネットワークの推定およびクラスタリング：転写因子と共発現遺伝子モジュールを結びつける
- [DoubletFinder](https://github.com/chris-mcginnis-ucsf/DoubletFinder) — 単細胞RNA-seqデータにおけるマルチプレット（ダブルット）アーティファクトの検出を目的とした機械学習アプローチ
- [Numbat](https://github.com/kharchenkolab/numbat) — シングルセルRNA-seqデータから隠れマーカーモデルを用いたハプロタイプ意識型コピー数変動推定
- [CaSpER](https://github.com/akdess/CaSpER) — シングルセルまたはブロックRNA-seqデータの統合解析によるコピー数変動の識別と可視化
- [CellCharter](https://github.com/CSOgroup/cellcharter) — 空間トランスクリプトミクスデータをVAEおよびガウス混合モデルを用いて空間細胞ニッチの識別と特性解析
- [STAGATE](https://github.com/RucDongLab/STAGATE) — 空間トランスクリプトミクスにおける空間領域識別を目的とした適応型グラフ注意自動エンコーダー
- [NCEM](https://github.com/theislab/ncem) — 細胞間相互作用を空間細胞グラフから学習するGNNベースのモデル
- [DeepTalk](https://github.com/JiangBioLab/DeepTalk) — 空間トランスクリプトミクスデータから細胞間通信を解明するグラフ注意ネットワーク
- [COMMOT](https://github.com/zcang/COMMOT) — 空間トランスクリプトミクの細胞間通信をスクリーニングする最適輸送ベースのフレームワーク
- [TIGON](https://github.com/yutongo/TIGON) — シングルセルトランスクリプトミクスから成長および動的軌跡を再構成する神経最適輸送手法
- [LINGER](https://github.com/Durenlab/LINGER) — シングルセルマルチオミクス（RNA+ATAC-seq）データおよびブロックデータを用いた遺伝子調節ネットワーク推定用神経ネットワーク
- [sciPENN](https://github.com/jlakkis/sciPENN) — CITE-seqおよびscRNA-seqデータからタンパク質発現予測、不確実性評価、細胞タイプラベル転移を行うRNNベース手法
- [MOGONET](https://github.com/txWang/MOGONET) — 多オミクスグラフコアラティブネットワークフレームワークによる患者分類およびバイオマーカー識別
- [AutoZyme](https://github.com/ElliotXie/autozyme) — CPU上でバイオインフォマティクスソフトウェア（例：Scanpy、Seurat）の処理を高速化しつつ元の結果を保持する自律アグエントフレームワーク
- [SeqBench](https://seqbench.com/) — プライマーアンプル、クローンシミュレーション（Gibson、Golden Gate、制限酵素消化）、CRISPRガイドRNA設計、シーケンス解析を行うウェブベースの分子生物学シーケンスワークベンチ。公開REST API、OpenAPI 3.1仕様、MCPサーバーを備える

---

## 機械学習タスクとモデル <a id="machine-learning-tasks-and-models"></a>

### 創薬 <a id="drug-discovery"></a>

#### 薬物応答予測 <a id="drug-response-prediction"></a>

- [drGAT](https://github.com/inoue0426/drGAT) — 遺伝子解釈を含む薬剤反応予測用注意ベースモデル
- [MOFGCN](https://github.com/weiba/MOFGCN/tree/main) — GCN + ハイブリッドネットワーク
- [DeepDSC](https://ieeexplore-ieee-org.ezp2.lib.umn.edu/stamp/stamp.jsp?tp=&arnumber=8723620&tag=1) — 自動エンコーダー + 全結合ニューラルネットワーク
- [DGDRP](https://github.com/minwoopak/heteronet) — マルチビュー埋め込みニューラルネットワーク
- [DeepAEG](https://github.com/zhejiangzhuque/DeepAEG) — GNN埋め込み + 注意メカニズム
- [RECOVER](https://github.com/RECOVERcoalition/Recover) — 細胞ライン間の協同薬剤組み合わせ反応を予測する機械学習フレームワーク
- [TGSA](https://github.com/violet-sto/TGSA) — 腫瘍遺伝子セットと注意ベースモデルを用いた生物学的経路知識に基づく薬剤反応予測
- [HiDRA](https://github.com/bsml320/HiDRA) — 遺伝子および経路レベル情報を組み込んだ階層型ネットワークモデルによるがん薬の反応予測
- [DRUML](https://github.com/CutillasLab/DRUMLR) — プロテオミクスおよびRNA-seqデータから抗癌薬を系統的にランク付けする標準機械学習と深層学習を組み合わせたアンサンブル機械学習フレームワーク

#### 薬物摂動 <a id="drug-perturbation"></a>

- [CellOT](https://github.com/bunnech/cellot) — 薬剤および遺伝子の変動に対する単細胞反応を予測する神経最適輸送フレームワーク
- [CMonge](https://github.com/AI4SCR/conditional-monge-gap) — 薬剤および濃度を変化させた際の単細胞変動反応を一般化して予測する条件付き最適輸送モデル
- [chemCPA](https://github.com/theislab/chemCPA) — 未見の薬剤変動および濃度組み合わせに対する単細胞転写反応を予測する構成変動自動エンコーダー
- [cycleCDR](https://github.com/hliulab/cycleCDR) — 薬剤変動に対する細胞反応をモデル化する解釈可能なサイクル一貫性フレームワーク
- [PRNet](https://github.com/Perturbation-Response-Prediction/PRnet) — 新規化学変動に対する転写反応を予測する深層生成モデル（薬物発見用）

#### ドラッグリポジショニング <a id="drug-repurposing"></a>

- [DeepPurpose](https://github.com/kexinhuang12345/DeepPurpose) — 薬物再利用を支援する深層学習ライブラリ
- [TranSiGen](https://github.com/myzhengSIMM/TranSiGen) — 化学誘導転写プロファイルを用いた、結合基準ベースの仮想スクリーニング、薬物反応予測、薬物再利用に用いる二重VAEアーキテクチャ

#### 薬物・標的相互作用 <a id="drug-target-interaction"></a>

- [NeoDTI](https://github.com/FangpingWan/NeoDTI) — 薬物-ターゲット相互作用予測を支援するライブラリ
- [DTINet](https://github.com/luoyunan/DTINet) — 異質な生物学データを統合するネットワークベースフレームワークによるDTI予測
- [DeepDTA](https://github.com/hkmztrk/DeepDTA) — タンパク質配列および薬物SMILESに基づくCNNを用いた深層学習モデル
- [GraphDTA](https://github.com/thinng/GraphDTA) — 分子グラフを用いたグラフ神経ネットワークベースのDTI予測
- [MolTrans](https://github.com/kexinhuang12345/MolTrans) — 分子サブ構造を活用したトランスフォーマーベースDTIモデル
- [DrugBAN](https://github.com/peizhenbai/DrugBAN) — 解釈可能なDTI予測を実現するバイライン注意ネットワーク

#### 化合物・タンパク質相互作用 <a id="compound-protein-interaction"></a>

- [MCPINN](https://github.com/mhlee0903/multi_channels_PINN) — 化合物-タンパク質相互作用と機械学習を用いた薬物発見
- [TransformerCPI](https://github.com/lifanchen-simm/transformerCPI) — トランスフォーマーを用いたCPI予測

#### 分子生成 <a id="molecular-generation"></a>

- [REINVENT](https://github.com/MolecularAI/Reinvent) — 新規薬設計における強化学習
- [MolGPT](https://github.com/devalab/molgpt) — 分子生成を実現するトランスフォーマーベースモデル
- [Molecular Transformer](https://github.com/pschwllr/MolecularTransformer) — 逆合成予測を実現するシーケンス-シーケンスモデル
- [Matcha](https://github.com/LigandPro/Matcha) — 物理的に妥当な分子ドッキングにおけるスコアリング、ポーズフィルタリング、ベンチマーキングを目的とした、多段階リーマン流のマッチングモデル
- [TargetDiff](https://github.com/guanjq/targetdiff) — 構造に基づく薬品設計に適用可能な3D等変モデル
- [DiffDock](https://github.com/gcorso/DiffDock) — 分子ドッキングにおける拡散生成モデル、小分子がタンパク質ターゲットに結合するポーズを予測
- [JTVAE](https://github.com/wengong-jin/icml18-jtnn) — 化学的妥当性を階層的な木分解により保証する、接合木変分自動エンコーダーによる分子グラフ生成
- [DiffSBDD](https://github.com/arneschneuing/DiffSBDD) — 構造に基づく薬品設計に適用可能な等変拡散モデル、タンパク質ターゲットに対する分子および結合構造を生成
- [ReLeaSE](https://github.com/isayev/ReLeaSE) — 生成モデルと予測モデルを組み合わせた、従来なし薬品設計のための深層強化学習フレームワーク
- [PaccMannRL](https://github.com/PaccMann/paccmann_generator) — トランスクリプトミクスデータから、強化学習ベースの生成モデルにより、抗がん分子のヒット類を設計

### 生物学向けLLM <a id="llm-for-biology"></a>

- [AI4Chem/ChemLLM-7B-Chat](https://huggingface.co/AI4Chem/ChemLLM-7B-Chat) — 化学・分子科学用のLLM
- [BioGPT](https://github.com/microsoft/BioGPT) — 医療情報生成用のLLM
- [GeneGPT](https://github.com/ncbi/GeneGPT) — 医療情報用のLLM、複数のAPIと統合
- [GenePT](https://github.com/yiqunchen/GenePT) — シングルセルデータ用の基礎LLM
- [scPRINT](https://github.com/cantinilab/scPRINT) — PubMedの医療文献から5000万セル分のデータで事前学習された、scRNA-seqのノイズ除去およびゼロ補完モデル
- [ClawBio](https://github.com/ClawBio/ClawBio) — 局所優先の薬理ゲノミクス、祖先PCA、意味的類似性、栄養ゲノミクス、メタゲノミクスを備えたバイオインフォマティクス用AIエージェントスキルライブラリ
- [BioMedLM](https://huggingface.co/stanford-crfm/BioMedLM) — PubMedの医療文献のみから学習された2.7BパラメータのGPT-2スタイルの言語モデル、医療質問への回答およびテキスト生成に適用
- [MolT5](https://github.com/blender-nlp/MolT5) — テキストとSMILESを橋渡しする分子タスク用言語モデル、分子のキャプション生成およびテキスト駆動型分子生成を可能にする
- [ChatDrug](https://github.com/chao1224/ChatDrug) — 自然言語プロンプトを用いた反復的な薬品編集および最適化を実現する、LLMベースの対話パイプライン
- [CASSIA](https://github.com/ElliotXie/CASSIA) — シングルセルRNA-seqデータの参照なし、解釈可能な細胞タイプ注釈を実現するマルチエージェントLLM、専用の注釈、検証、スコアリング、報告エージェントを備える

### 基盤モデル <a id="foundation-models"></a>

#### 単一細胞基盤モデル <a id="single-cell-foundation-models"></a>

##### トランスクリプトミクス基盤モデル <a id="transcriptomics-foundation-models"></a>

- [scFoundation](https://github.com/biomap-research/scFoundation) — シングルセル遺伝子発現用の大规模基礎モデル、複数のダウンストリームタスクを可能にする
- [scGPT](https://github.com/bowang-lab/scGPT) — 百万ものシングルセルプロファイルに事前学習されたトランスフォーマーベースの基礎モデル
- [Geneformer](https://huggingface.co/ctheodoris/Geneformer) — シングルセルトランスクリプトームの大量コーパスに事前学習された、文脈意識型、注意機構に基づく深層学習モデル
- [BulkFormer](https://github.com/KangBoming/BulkFormer) — ブロックRNA-seqデータ向けの基礎モデル；一般的な転写組成表現を学習する。
- [scBERT](https://github.com/TencentAILabHealthcare/scBERT) — BERTベースの基礎モデルが大量のscRNA-seqデータ上で事前学習され、細胞タイプの注釈に用いられる。
- [CellPLM](https://github.com/OmicsML/CellPLM) — 細胞間のトランスフォーマー構造を持つ事前学習済み細胞言語モデルで、多様な単細胞解析タスクに適用される。
- [UCE](https://github.com/snap-stanford/UCE) — ユニバーサルな細胞埋め込み：3600万の細胞を、種、組織、試験の多様なデータ上で事前学習し、チューニングなしでゼロショット単細胞埋め込みモデルを学習する。
- [GEARS](https://github.com/snap-stanford/GEARS) — 生物学的事前知識を用いて、単一および組み合わせ遺伝子変異に対する転写反応を予測するグラフベースモデル。
- [SATURN](https://github.com/snap-stanford/SATURN) — 遺伝子発現とタンパク質配列をタンパク質言語モデルを介して統合し、多種間細胞埋め込みを学習するトランスフォーマーベースモデル。
- [CancerFoundation](https://github.com/BoevaLab/CancerFoundation) — 腫瘍細胞のみのカーネートデータセット上で事前学習された単細胞RNA-seq基礎モデルで、癌特異的埋め込みを学習する。

##### 空間基盤モデル <a id="spatial-foundation-models"></a>

- [GigaPath](https://github.com/prov-gigapath/prov-gigapath) — スライドレベルのデジタル病理学基礎モデル：13億の病理画像トークンを全体スライド画像上で事前学習。
- [UNI](https://github.com/mahmoodlab/UNI) — 10万以上の全体スライド画像上で学習された汎用的な自己監督病理学基礎モデルで、多様な計算病理学タスクに適用。
- [CONCH](https://github.com/mahmoodlab/CONCH) — 病理画像とテキストペアをコントラストキャプションで学習した視覚言語基礎モデルで、計算病理学に適用。
- [Phikon](https://huggingface.co/owkin/phikon) — ViTベースの病理学基礎モデル：TCGA全体スライド画像上でiBOT自己監督で事前学習。
- [Nicheformer](https://github.com/theislab/nicheformer) — トランスフォーマー構造を持つ基礎モデルで、空間細胞情報を位置埋め込みでエンコードし、単細胞および空間オミクスに適用。
- [scGPT-spatial](https://github.com/bowang-lab/scGPT-spatial) — scGPTの拡張で、継続的な事前学習とエキスパートミックスデコーダを用いた空間転写組成分析に適用される。
- [DeepSpot](https://github.com/ratschlab/DeepSpot) — H&E画像からスポットおよび単細胞解像度で空間転写組成を予測するディープラーニングモデル。
- [DeepSpot2Cell](https://github.com/ratschlab/DeepSpot2Cell) — H&E画像を用いてスポットレベルの監督で仮想単細の空間転写組成を予測（NeurIPS 2025 Imageomics）。
- [DeepSpot-M](https://github.com/ratschlab/DeepSpotM) — 組織学から全転写組成領域の仮想空間転写組成を予測するマルチモーダル基礎モデル。
- [AESTETIK](https://github.com/ratschlab/aestetik) — トポロジーおよび組織学画像知識を用いた空間転写組成表現学習用のオートエンコーダ。

##### マルチオミクス基盤モデル <a id="multi-omics-foundation-models"></a>

- [scMulan](https://github.com/SuperBianC/scMulan) — 転写組成、遺伝子発現、タンパク質発現をカバーする約1000万の細胞上で事前学習された単細胞マルチオミクス言語モデルで、クロスオミクス転移タスクに適用。
- [totalVI](https://github.com/scverse/scvi-tools) — 単細胞RNA-seqとタンパク質（CITE-seq）データのペアを同時分析する確率フレームワークで、単細胞データセット間のマルチモーダル細胞状態表現を実現。
- [MultiVI](https://github.com/scverse/scvi-tools) — ペアおよび非ペアの単細胞RNA-seqおよびATAC-seq測定を統合し、統一された潜在空間に導入するマルチモーダル変分オートエンコーダ。
- [MIRA](https://github.com/cistrome/MIRA) — 確率的多モーダルトピックモデルが、単細胞轉記組と染色体のアクセシビリティを同時モデル化し、調節ネットワークの推論を行う。
- [GLUE](https://github.com/gao-lab/GLUE) — RNA、ATAC、メチル化、タンパク質モーダリティを含む未対応単細胞多オミクスデータの統合を実現するグラフリンクされた統一埋め込みフレームワーク。
- [BABEL](https://github.com/wukevin/babel) — 単細胞RNA-seqと単細胞ATAC-seqプロファイル間の予測を可能にする、対応なしモーダル間翻訳モデル。
- [Multigrate](https://github.com/theislab/multigrate) — RNA、ATAC、タンパク質モーダリティを含む単細胞データの統合に用い、モーダリティ欠損をサポートする非対称多オミクス変分自動エンコーダー。
- [MOFA+](https://github.com/bioFAM/MOFA2) — 多オミクス要因分析フレームワークが、ブロックおよび単細胞データセット間の共通変動軸を識別する。
- [GeneCompass](https://github.com/xCompass-AI/GeneCompass) — 1億2000万以上の細胞を含む複数種間のDNA調節領域と単細胞転記組を統合した大規模基礎モデルによる遺伝子調節予測。
- [UnitedNet](https://github.com/LiuLab-Bioelectronics-Harvard/UnitedNet) — 単細胞多オミクス統合に用い、転記組、染色体アクセシビリティ、タンパク質組成をカバーする解釈可能なマルチタスクディープニューラルネットワーク。
- [SpatialGlue](https://github.com/zhanglabtools/SpatialGlue) — 空間多オミクス統合に用い、空間転記組と染色体アクセシビリティまたはタンパク質組成を同時埋め込みするグラフ注意ネットワーク。
- [MIDAS](https://github.com/labomics/midas) — 転記組、染色及アクセシビリティ、タンパク質組成の間の任意の欠損モーダリティ組み合わせに対応する単細胞多オミクスデータのマゾス統合および差分アクセシビリティモデル。
- [Concerto](https://github.com/melobio/Concerto-reproducibility) — 単細胞多モーダルデータ統合、バッチ補正、リファレンス-クエリマッピングを実現する対照的自己監督学習フレームワーク。
- [scButterfly](https://github.com/BioX-NKU/scButterfly) — 対応ありおよび対応なし多オミクスデータ間の単細胞クロスモーダル翻訳を実現する二方向一致変分自動エンコーダー。
- [JAMIE](https://github.com/Oafish1/JAMIE) — 多モーダル単細胞データの欠損補完および埋め込みを実現する共通変分自動エンコーダー。
- [scPair](https://github.com/quon-titative-biology/scPair) — 単細胞多モーダル解析に用い、クロスモーダル予測を活用する両方向フードフォワードネットワーク。

##### ドメイン整合 <a id="domain-alignment"></a>

- [scArches](https://github.com/theislab/scarches) — 新しい単細胞データセットを、バッチ、状態、モーダリティを越えて事前に学習されたリファレンスアトラスにマッピングする転移学習フレームワーク。
- [TOSICA](https://github.com/JackieHanlaopo/TOSICA) — 転記組、染色体アクセシビリティ、タンパク質組成をカバーする、一括で解釈可能な細胞タイプアノテーションを支援するトランスフォーマーベースフレームワーク。

#### 化合物基盤モデル <a id="compound-foundation-models"></a>

##### 化合物埋め込み <a id="compound-embedding"></a>

- [ChemBERTa-2](https://github.com/seyonechithrananda/bert-loves-chemistry) — SMILESに事前学習されたRoBERTaベースの分子言語モデルによる小分子表現学習。
- [GROVER](https://github.com/tencent-ailab/grover) — ラベルなし化合物から学習する大規模分子表現学習を実現する自己監督グラフトランスフォーマー。
- [Mol2Vec](https://github.com/samoturk/mol2vec) — Word2Vecにインスパイアされた無教師学習分子埋め込み手法による化学サブ構造のベクトル表現学習。
- [MolFormer](https://github.com/IBM/molformer) — 百万ものSMILES文字列に事前学習された線形注意トランスフォーマーによる効率的な分子埋め込み。
- [Uni-Mol](https://github.com/deepmodeling/Uni-Mol) — 分子およびタンパク質ポケットにおける普遍表現学習を実現する3D分子事前学習フレームワーク。

#### タンパク質基盤モデル <a id="protein-foundation-models"></a>

##### 事前学習済み埋め込み <a id="pre-trained-embedding"></a>

- [Evolutionary Scale Modeling (ESM)](https://github.com/facebookresearch/esm) — タンパク質埋め込み
- [ProtTrans](https://github.com/agemagician/ProtTrans) — ユニリファとBFDから数十億のタンパク質シーケンスを用いて訓練されたタンパク質言語モデル（ProtBERT、ProtT5、ProtXLNet）のセット
- [ProGen2](https://github.com/salesforce/progen) — 多様なタンパク質家族を用いて訓練されたタンパク質言語モデルによるシーケンス生成および適合性予測
- [Ankh](https://github.com/agemagician/Ankh) — 二次構造、局所化、機能注釈などのダウンストリーム予測タスクに最適化された効率的なタンパク質言語モデル

##### タンパク質構造予測・設計 <a id="protein-structure-prediction-and-design"></a>

- [AlphaFold3](https://github.com/google-deepmind/alphafold3) — タンパク質、核酸、小分子およびそれらの複合体の構造を予測
- [Boltz-1](https://github.com/jwohlwend/boltz) — タンパク質、核酸、小分子およびそれらの複合体の全原子構造を予測するオープンソースモデルで、AlphaFold3レベルの精度を達成
- [Chai-1](https://github.com/chaidiscovery/chai-lab) — タンパク質、核酸、小分子および複合体をカバーする統合された分子構造予測モデル
- [ESM3](https://github.com/evolutionaryscale/esm) — シーケンス、構造、機能を統合的に推論するマルチモーダルタンパク質言語モデルで、生成型タンパ及設計とエンジニアリングを実現
- [ESMFold](https://github.com/facebookresearch/esm) — 言語モデル埋め込みを用いた高速タンパク質構造予測
- [RFdiffusion](https://github.com/RosettaCommons/RFdiffusion) — 拡散モデルを用いたタンパク質骨格設計の生成モデル
- [ProteinMPNN](https://github.com/dauparas/ProteinMPNN) — 骨格構造が与えられた場合のタンパク質シーケンス設計を実現するディープラーニングモデル
- [OmegaFold](https://github.com/HeliXonProtein/OmegaFold) — シーケンスから高分解能で従来なし（de novo）タンパク質構造を予測
- [RoseTTAFold](https://github.com/RosettaCommons/RoseTTAFold) — タンパク質構造予測に用いる3トラックニューラルネットワーク
- [OpenFold](https://github.com/aqlaboratory/openfold) — AlphaFold2のトレーニング可能な、メモリ効率の高いオープンソース再現モデルで、カスタムタンパク質構造予測ワークフローを実現
- [SaProt](https://github.com/westlake-reup/SaProt) — 構造を意識したタンパク質言語モデルで、構造を意識したトークンがシーケンスと骨格幾何をエンコードし、機能予測を改善
- [EvoDiff](https://github.com/microsoft/evodiff) — タンパク質構造予測・設計に関するデータベース、ツール、モデル、または研究資料です。 [ [paper-2023](https://www.biorxiv.org/content/10.1101/2023.09.11.556673v1)

#### マルチモーダル基盤モデル <a id="multi-modal-foundation-models"></a>

- [CHIEF](https://github.com/hms-dbmi/CHIEF) — 臨床組織病理学画像評価ファウンデーションモデルで、組織病理学画像と臨床文脈を統合し、がん全癌分析を実現
- [BiomedCLIP](https://huggingface.co/microsoft/BiomedCLIP-PubMedBERT_256-vit_g_14) — PubMedの図–キャプションペアを用いて訓練されたCLIPベースの視覚言語ファウンデーションモデルで、医療画像とテキストを対象
- [PORPOISE](https://github.com/mahmoodlab/PORPOISE) — 多モーダルディープラーニングを用いたがん全癌統合組織病理学・ゲノム解析フレームワークで、患者分類を実現
- [PathomicFusion](https://github.com/mahmoodlab/PathomicFusion) — CNN、GNNおよび注意ゲートを用いて組織病理学とゲノム特徴を統合するフレームワークで、がん診断および予後を実現
- [Virchow](https://huggingface.co/paige-ai/Virchow) — 視覚トランスフォーマーと自己教師付き蒸留を用いた百万スライドのデジタル病理学ファウンデーションモデルで、タイルレベルの病理画像表現を実現
- [TOAD](https://github.com/mahmoodlab/TOAD) — ヒトエンドの深層学習による腫瘍起源評価；H&E全体スライド画像からがんの原発部位を予測する弱教師データ多タスクモデル
- [PLIP](https://github.com/PathologyFoundation/plip) — 病理画像とテキストのペアをコントラスト学習で訓練した視覚・言語基礎モデルによる病理分野の画像分類およびテキストから画像の検索
- [MUSK](https://github.com/lilab-stanford/MUSK) — 精密がん治療向け視覚・言語基礎モデル：病理画像とテキストデータの多モーダルペアを分析し、バイオマーカーの予測および検索を行う

#### ゲノミクス基盤モデル <a id="genomics-foundation-models"></a>

- [Nucleotide Transformer](https://github.com/instadeepai/nucleotide-transformer) — 複数種類の生物におけるゲノム配列の基礎モデル
- [DNABERT](https://github.com/jerryji1993/DNABERT) — DNA配列解析用の事前学習バイアスエンコーダー
- [DNABERT-2](https://github.com/Zhihan1996/DNABERT_2) — 効率的なトークン化を用いた改善されたゲノム基礎モデル
- [Enformer](https://github.com/deepmind/deepmind-research/tree/master/enformer) — DNA配列から遺伝子発現を予測するトランスフォーマーモデル
- [Basenji](https://github.com/calico/basenji) — DNA配列から順次的に規制活性を予測するモデル
- [Caduceus](https://github.com/kuleshov-group/caduceus) — Mambaを用いた両方向等変性長距離DNA配列モデル
- [Evo](https://github.com/evo-design/evo) — 長文脈ゲノム基礎モデル（100万トークンまで）
- [HyenaDNA](https://github.com/HazyResearch/hyena-dna) — 長距離ゲノム基礎モデル（100万トークンまで）を扱い、注意機構をサブ2次関数で実現するモデル
- [Borzoi](https://github.com/calico/borzoi) — Enformerの拡張モデル：長ゲノム領域（524kb）からRNA-seqカバレッジを予測し、解像度を向上させたモデル
- [DeepSEA](http://deepsea.princeton.edu/) — 数千もの染色体特性に対して、単核苷酸感度を持つ遺伝子変異の染色体効果を予測する深層学習フレームワーク
- [Sei](https://github.com/FunctionLab/sei-framework) — DNA配列から全ゲノムの規制活性コードを学習し、変異効果を予測するシーケンスから機能へのフレームワーク
- [GPN (Genomic Pre-trained Network)](https://github.com/songlab-cal/gpn) — 機能注釈なしでゼロショットで変異効果を予測できるDNA配列用マスク言語モデル

---

## 引用 <a id="citation"></a>

このリストを論文、スライド、文書で使用する場合は、[`CITATION.cff`](https://github.com/inoue0426/awesome-computational-biology/blob/dd96b38e5775c672020b9372e78dfa8e8b8ecdb6/CITATION.cff)を使ってリポジトリを引用してください。GitHubの**Cite this repository**ボタンからも利用できます。

## 選定基準（厳格） <a id="curation-criteria-strict"></a>

品質を高く保つため、追加項目は以下をすべて満たす必要があります。

- 資料が信頼でき、計算生物学に関連していること。
- 主リンクが公式資料、組織サイト、保守されているリポジトリ、公式データセットページのいずれかを指すこと。
- 技術的実質を示す根拠があること。査読論文が望ましく、最低でもプレプリントまたは公式技術文書を必要とします。
- 説明が事実に基づき簡潔で、宣伝文句を含まないこと。
- 重複またはほぼ重複する項目を避けること。

宣伝ページのみの項目、個人的な意見記事、技術的参照を伴わない一般的なブログ記事は、原則として受け入れません。

## 更新・リンク切れ方針 <a id="update--link-rot-policy"></a>

- リンクの有効性は[Link Checkワークフロー](https://github.com/inoue0426/awesome-computational-biology/blob/dd96b38e5775c672020b9372e78dfa8e8b8ecdb6/.github/workflows/link-check.yml).
- リンク障害が繰り返される場合、保守担当者は公式ミラーまたは正規URLへ置き換えるか、安定したURLが得られるまで項目を削除できます。
- リンク切れを修正するコントリビューションを歓迎・推奨します。

## データスキーマとコントリビューション手順 <a id="data-schema--contribution-workflow"></a>

- データスキーマ: [`docs/data/SCHEMA.md`](https://github.com/inoue0426/awesome-computational-biology/blob/dd96b38e5775c672020b9372e78dfa8e8b8ecdb6/docs/data/SCHEMA.md).
- 信頼できる唯一の情報源を更新する手順:
  1. `README.md`で資料を編集・追加します。
  2. 機械可読成果物を再生成します。
     - `python scripts/sync_resources_from_readme.py`
     - `python scripts/build_resources.py`
  3. 更新したデータファイル（`data/resources.yml`、`data/resources.json`、`data/resources.csv`、`docs/data/resources.json`）をREADMEの変更とともにコミットします。
- コントリビューションガイド: [`contributing.md`](https://github.com/inoue0426/awesome-computational-biology/blob/dd96b38e5775c672020b9372e78dfa8e8b8ecdb6/contributing.md).
