---
title: "hsiaoyi0504/awesome-cheminformatics"
description: "hsiaoyi0504/awesome-cheminformatics の正規スナップショット"
licenseSource: "github-hsiaoyi0504-awesome-cheminformatics-readme-md"
---

# Awesomeケモインフォマティクス [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ケモインフォマティクス（chemoinformatics、chemioinformatics、chemical informaticsとも呼ばれる）は、化学分野のさまざまな問題へコンピューター技術と情報技術を応用する学問です。— [Wikipedia](https://en.wikipedia.org/wiki/Cheminformatics)

優れたケモインフォマティクスのソフトウェア、資料、ライブラリを厳選した一覧です。主にコマンドラインで利用できる、無料またはオープンソースのものを収録しています。ぜひ[貢献](https://github.com/hsiaoyi0504/awesome-cheminformatics/blob/0e841736b611df8f173525c4f814a55945bc63c7/CONTRIBUTING.md)してください。

<a id="contents"></a>
## 目次

* [アプリケーション](#applications)
  * [可視化](#app-visualization)
  * [コマンドラインツール](#app-cmd)
  * [ドッキング](#app-docking)
  * [仮想マシン](#app-virtual)
* [ライブラリ](#libraries)
  * [汎用](#lib-general)
  * [可視化](#lib-visualization)
  * [形式検査](#lib-format)
  * [ドッキング](#lib-dock)
  * [分子記述子](#lib-des)
  * [機械学習](#lib-ml)
  * [Web API](#lib-web)
  * [データベース](#lib-db)
  * [その他](#lib-others)
* [学術誌](#journals)
* [資料](#resources)
  * [コース](#courses)
  * [ブログ](#blogs)
  * [書籍](#books)
* [関連項目](#see-also)

<a id="applications"></a>
## アプリケーション

<a id="app-visualization"></a>
### 可視化

* [PyMOL](https://sourceforge.net/projects/pymol/) - Pythonを強化した分子構造のグラフィックスツール
* [Jmol](http://jmol.sourceforge.net/) - 化学構造を3D表示する、ブラウザベースのHTML5ビューアー兼スタンドアロンJavaビューアー
* [VMD](http://www.ks.uiuc.edu/Research/vmd/) - 3次元グラフィックスと組み込みスクリプトを使用して、大規模な生物分子系を表示・アニメーション・分析するための分子視覚化プログラム
* [Chimera](https://www.cgl.ucsf.edu/chimera/) - インタラクティブな分子視覚化および分析に高度に拡張可能なプログラム。 [Source](https://www.cgl.ucsf.edu/chimera/docs/sourcecode.html) が利用可能。
* [ChimeraX](https://www.cgl.ucsf.edu/chimerax/) - UCSF Chimeraの次世代分子視覚化プログラム。ソースコードが利用可能 [here](https://www.cgl.ucsf.edu/chimerax/docs/devel/conventions.html)。
* [DataWarrior](http://www.openmolecules.org/datawarrior/index.html) - 動的グラフィカルビューとインタラクティブな行フィルタリングを組み合わせた化学インテリジェンスを備えたデータ視覚化および分析プログラム。

<a id="app-cmd"></a>
### コマンドラインツール

* [Open Babel](http://openbabel.org/wiki/Main_Page) - 化学データの多くの言語に対応するための化学ツールボックス。
* [MayaChemTools](http://www.mayachemtools.org/index.html) - 日常的な計算創薬の作業を支援するPerl／Pythonのスクリプト、モジュール、クラス集。
* [Packmol](http://m3g.iqm.unicamp.br/packmol/home.shtml) - 分子動力学シミュレーションの初期設定を、パッキング最適化によって行う。
* [BCL::Commons](http://meilerlab.org/index.php/bclcommons/show/b_apps_id/1)

<a id="app-docking"></a>
### ドッキング

* [AutoDock Vina](http://vina.scripps.edu/) - 分子ドッキングおよび仮想スクリーニング。
* [smina](https://sourceforge.net/projects/smina/) - スコアリング関数の開発および高性能エネルギー最小化をよりよくサポートするためのカスタマイズされた [AutoDock Vina](http://vina.scripps.edu/)。

<a id="app-virtual"></a>
### 仮想マシン

* [myChEMBL](http://chembl.blogspot.com/2015/07/mychembl-20-has-landed.html) - オープンソースソフトウェア（Ubuntu、PostgreSQL、RDKit）を使用して構築されたChEMBLのバージョン
* [3D e-Chem Virtual Machine](https://github.com/3D-e-Chem/3D-e-Chem-VM) - 3D-e-Chem Knimeワークフローを実行するための仮想マシン（すべてのソフトウェアとサンプルデータを含む）

<a id="libraries"></a>
## ライブラリ

<a id="lib-general"></a>
### 汎用

* [RDKit](http://www.rdkit.org/) - C++およびPythonで書かれたケモインフォマティクス／機械学習ソフトウェア集。
* [Indigo](https://github.com/epam/Indigo) - 分子フィンガープリント、サブ構造検索、分子視覚化を可能にするC++パッケージに加え、Java、C#、Pythonのラッパーを備えたユニバーサルな分子ツールキット。
* [CDK (Chemistry Development Kit)](https://sourceforge.net/projects/cdk/) - 構造ケモインフォマティクス／バイオインフォマティクス向けのJava実装アルゴリズム集。
* [ChemmineR](https://www.bioconductor.org/packages/release/bioc/vignettes/ChemmineR/inst/doc/ChemmineR.html) - 医薬品様低分子データをRで解析するためのケモインフォマティクスパッケージ。
* [ChemPy](https://github.com/bjodah/chempy) - 化学（主に物理・無機・分析化学）に有用なPythonパッケージ。
* [MolecularGraph.jl](https://github.com/mojaie/MolecularGraph.jl) - Juliaで完全実装された、グラフベースの分子モデリング／ケモインフォマティクス解析ツールキット。
* [datamol](https://github.com/datamol-org/datamol): - 分子操作を簡単に行う。RDKitに基づく軽量のラッパー。
* [CGRtools](https://github.com/cimm-kzn/CGRtools) - 分子、反応、凝縮反応グラフを扱うツールキット。化学構造の標準化、最大共通部分構造（MCS）検索、互変異性体生成に対応し、RDKitおよびNetworkXと互換性があります。

<a id="lib-format"></a>
### 形式検査

* [ChEMBL_Structure_Pipeline (formerly standardiser)](https://github.com/chembl/ChEMBL_Structure_Pipeline) - 分子を標準化するためのシンプルなツール。例えば分子モデリングの準備として利用できる。
* [MolVS](https://github.com/mcs07/MolVS) - [RDKit](http://www.rdkit.org/)に基づく分子の検証および標準化。
* [rd_filters](https://github.com/PatWalters/rd_filters) - RDKitおよびChEMBLを使用して構造アラートを実行するスクリプト。
* [pdb-tools](https://github.com/haddocking/pdb-tools) - PDBファイルの操作および編集に使えるスイス軍刀のようなツール。

<a id="lib-visualization"></a>
### 可視化

* [Kekule.js](http://partridgejiang.github.io/Kekule.js/) - ウェブブラウザ上で分子構造を表現・描画・編集・比較・検索できるJavaScriptのフロントエンドライブラリ。
* [3Dmol.js](https://github.com/3dmol/3Dmol.js) - オブジェクト指向、WebGLベースのJavaScriptライブラリでオンライン分子可視化を行う。
* [JChemPaint](https://github.com/JChemPaint/jchempaint) - [Chemistry Development Kit](https://sourceforge.net/projects/cdk/)に基づく2D化学構造式エディター／アプレット。
* [rdeditor](https://github.com/EBjerrum/rdeditor) - PySideを使用したシンプルなRDKit分子編集GUI。
* [nglviewer](http://nglviewer.org/nglview/latest/) - Jupyterノートブック向けのインタラクティブ分子グラフィックス。
* [RDKit.js](https://www.npmjs.com/package/@rdkit/rdkit) - RDKitから提供される公式JavaScript版の化学情報学機能 - C++による化学情報学用ライブラリ

<a id="lib-des"></a>
### 分子記述子

* [mordred](https://github.com/mordred-descriptor/mordred) - [RDKit](http://www.rdkit.org/)を基にした分子特徴量計算器
* [DescriptaStorus](https://github.com/bp-kelley/descriptastorus) - 分子特徴量の計算（化学）および（オプション）機械学習用のストレージ
* [mol2vec](https://github.com/samoturk/mol2vec) - 分子のサブ構造のベクトル表現
* [Align-it](http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/align-it/1.0.4/align-it.html#alignit-generating-pharmacophore-points) - 薬理活性基（pharmacophores）に基づいて分子を対応させる
* [Rcpi](https://nanx.me/Rcpi/index.html) - タンパク質、化合物およびその相互作用の多様な特徴量を生成するR/Bioconductorパッケージ

<a id="lib-ml"></a>
### 機械学習

* [DeepChem](https://github.com/deepchem/deepchem) - Tensorflowを基にした化学用ディープラーニングライブラリ
* [Chemprop](https://github.com/chemprop/chemprop) - 分子および反応の性質予測に用いる、方向性を持つメッセージ伝達ニューラルネットワーク（確率的かつ解釈可能）
* [ChemML](https://github.com/hachmannlab/chemml) - ChemMLは、化学および材料データの分析、探索、モデリングに用いる機械学習および情報学プログラムセット（Tensorflowを基に）
* [olorenchemengine](https://github.com/Oloren-AI/olorenchemengine) - 多様なモデルおよび表現に対応した統一APIによる分子性質予測、統合された不確実性評価、解釈可能性、ハイパラメータ／アーキテクチャチューニングを備えたもの
* [OpenChem](https://github.com/Mariewelt/OpenChem) - PyTorchバックエンドを用いた計算化学用ディープラーニングツールキットOpenChem
* [DGL-LifeSci](https://github.com/awslabs/dgl-lifesci) - グラフニューラルネットワークを用いた生命科学分野の多様な応用に向けた[DGL](https://www.dgl.ai/)ベースパッケージDGL-LifeSci
* [chainer-chemistry](https://github.com/pfnet-research/chainer-chemistry) - 生物学および化学におけるディープラーニング用のライブラリ
* [pytorch-geometric](https://pytorch-geometric.readthedocs.io/en/latest/) - 多数のグラフ畳み込みアルゴリズムを実装したPyTorchライブラリ
* [chemmodlab](https://github.com/jrash/ChemModLab) - Rで機械学習モデルのフィットおよび評価を行う化学情報学モデリングラボ
* [Summit](https://github.com/sustainable-processes/summit) - 機械学習を用いて化学反応を最適化するためのPythonパッケージ（10アルゴリズム＋複数のベンチマークを含む）

<a id="lib-web"></a>
### Web API

* [webchem](https://github.com/ropensci/webchem) - ウェブから取得可能な化学情報
* [PubChemPy](http://pubchempy.readthedocs.io) - PubChem PUG REST APIに対するPythonラッパー
* [ChemSpiPy](http://chemspipy.readthedocs.org) - ChemSpider APIに対するPythonラッパー
* [CIRpy](http://cirpy.readthedocs.org/) - [NCI Chemical Identifier Resolver (CIR)](https://cactus.nci.nih.gov/chemical/structure)に対するPythonラッパー
* [Beaker](https://github.com/chembl/chembl_beaker) - [RDKit](http://www.rdkit.org/)と[OSRA](https://cactus.nci.nih.gov/osra/)を、[Bottle](http://bottlepy.org/docs/dev/)および[Tornado](http://www.tornadoweb.org/en/stable/)上で利用できるサービス
* [chemminetools](https://github.com/girke-lab/chemminetools) - Djangoをベースとした小型分子解析用オープンソースウェブフレームワーク
* [ambit](http://ambit.sourceforge.net/) - RESTウェブサービスを介して化学情報学機能を提供

<a id="lib-db"></a>
### データベース

* [razi](https://github.com/rvianello/razi) - SQLAlchemyデータベース向けのケモインフォマティクス拡張
* [Chemical Translation Service](https://bitbucket.org/fiehnlab/fiehnlab-cts/src/master/) - [Chemical Translation Service](https://cts.fiehnlab.ucdavis.edu/)ウェブサービスのソースコード

<a id="lib-dock"></a>
### ドッキング
* [Rosetta](https://www.rosettacommons.org/docs/latest/Home) - マクロ分子構造モデリングに用いられる包括的なソフトウェアセット。主にタンパク質間ドッキングに使用される。
* [DOCKSTRING](https://github.com/dockstring/dockstring) - AutoDock Vina向けのライガン準備を自動化・標準化するツール

<a id="lib-md"></a>
### 分子動力学

* [Gromacs](http://www.gromacs.org/) - タンパク質、脂質、核酸のシミュレーションに特化した分子動力学パッケージ
* [OpenMM](http://openmm.org/) - Python、C、C++、さらにはFortranにも広く対応した高性能な分子シミュレーションツールキット
* [NAMD](https://www.ks.uiuc.edu/Research/namd/) - 大規模生物分子系の高性能シミュレーションに特化した並列分子動力学コード
* [MDTraj](https://github.com/mdtraj/mdtraj) - 分子動力学トラジェクトリの解析
* [cclib](https://github.com/cclib/cclib) - 計算化学ログファイル向けパーサーおよびアルゴリズム
* [ProDy](https://github.com/prody/ProDy) - タンパク質動力学解析用Pythonパッケージ

<a id="lib-others"></a>
### その他

* [eiR](https://github.com/girke-lab/eiR) - 小分子の類似性検索の高速化
* [OPSIN](https://github.com/dan2097/opsin) - システム的IUPAC命名法向けオープンパーサー
* [Cookiecutter for Computational Molecular Sciences](https://github.com/MolSSI/cookiecutter-cms) - [MolSSL](https://molssi.org/) による分子計算化学パッケージ向けPython中心のCookiecutter
* [Auto-QChem](https://github.com/PrincetonUniversity/auto-qchem) - 有機分子のDFT計算の生成および保存を自動化するワークフロー
* [Gypsum-DL](https://git.durrantlab.pitt.edu/jdurrant/gypsum_dl) - 2D SMILES文字列を3Dモデルに変換するプログラム
* [RDchiral](https://github.com/connorcoley/rdchiral) - RDKitのRunReactantsをラッピングして立体化学処理を改善
* [confgen](https://github.com/Et9797/confgen-webapp) - 配座を生成するウェブアプリ


<a id="journals"></a>
## 学術誌

* [Journal of Cheminformatics](https://jcheminf.biomedcentral.com/)
* [Journal of Chemical Information and Modeling (ACS Publications)](https://pubs.acs.org/journal/jcisd8)

<a id="resources"></a>
## 資料

<a id="courses"></a>
### コース

* [Learncheminformatics.com](http://learncheminformatics.com/) - インディアナ大学における「化学情報学：化学データの世界をナビゲートする」コース
* [Python for chemoinformatics](https://github.com/Mishima-syk/py4chemoinformatics)
* [TeachOpenCADD](https://github.com/volkamerlab/TeachOpenCADD) - オープンソースパッケージおよびデータを用いたコンピュータ支援薬物設計（CADD）を学ぶための教育プラットフォーム
* [Cheminformatics OLCC](https://chem.libretexts.org/Courses/Intercollegiate_Courses/Cheminformatics_OLCC_(2019)) - アーカンソー大学リトルロック校のRobert Belford教授による、大学間オンライン共同化学コース（OLCC）のケモインフォマティクス講座
* [BigChem](http://bigchem.eu/alllectures) - 大規模化学データ解析の革新的教育を提供するHorizon 2020 MSC ITN EIDプロジェクト[BigChem](http://bigchem.eu/)の全講義
* [Molecular modeling course](https://dasher.wustl.edu/chem478/) - ワシントン大学セントルイス校の[Jay Ponder](https://dasher.wustl.edu/)教授によるコース
* [Simulation in Chemistry and Biochemistry](https://dasher.wustl.edu/chem430/) - ワシントン大学セントルイス校の[Jay Ponder](https://dasher.wustl.edu/)教授によるコース

<a id="blogs"></a>
### ブログ

* [Open Source Molecular Modeling](https://opensourcemolecularmodeling.github.io/README.html) - オープンソース分子モデリングソフトウェアのアップデート可能なカタログ
* [PubChem Blog](https://pubchemblog.ncbi.nlm.nih.gov/) - [PubChem](https://pubchem.ncbi.nlm.nih.gov/) に関するニュース、更新情報、チュートリアル
* [The ChEMBL-og blog](http://chembl.blogspot.tw/) - [EMBL-EBI](https://www.ebi.ac.uk/) における計算化学生物学グループのストーリーとニュース
* [ChEMBL blog](http://chembl.github.io/) - GitHub 上の ChEMBL
* [SteinBlog](http://www.steinbeck-molecular.de/steinblog/) - EMBL-EBI における化学情報学および代謝部門の責任者である [Christoph Steinbeck](http://www.steinbeck-molecular.de/steinblog/index.php/about/) のブログ
* [Practical Cheminformatics](http://practicalcheminformatics.blogspot.com/) - 化学情報学の実用的な応用例を深く解説したブログ
* [So much to do, so little time - Trying to squeeze sense out of chemical data](http://blog.rguha.net/) - NIH国立先進トランスレーショナル科学センターの研究者[Rajarshi Guha](http://blog.rguha.net/?page_id=8)のブログ。
 * 過去のブログ [1](https://rguha.wordpress.com/) [2](http://www.rguha.net/index.html)
* [Noel O'Blog](http://baoilleach.blogspot.tw/) - NextMove Software における上級ソフトウェアエンジニアである [Noel O'Boyle](https://www.redbrick.dcu.ie/~noel/) のブログ
* [chem-bla-ics](http://chem-bla-ics.blogspot.tw/) - Maastricht大学の助手教授である [Egon Willighagen](http://egonw.github.io/) のブログ

* [steeveslab-blog](http://asteeves.github.io/) - [RDKit](http://www.rdkit.org/) を使用したいくつかの例
* [Macs in Chemistry](http://www.macinchem.org/) - Apple Macintoshコンピュータを使用する化学者向けのリソース
* [DrugDiscovery.NET](http://www.drugdiscovery.net/) - ケンブリッジ大学で分子情報学を担当する[Andreas Bender](http://www.andreasbender.de/)のブログ
* [Is life worth living?](https://iwatobipen.wordpress.com/) - 化学情報学ライブラリのいくつかの例
* [Cheminformatics 2.0](https://cheminf20.org/) - Collaborative Drug Discovery における研究科学者である [Alex M. Clark](https://twitter.com/aclarkxyz) のブログ
* [Depth-First](https://depth-first.com/) - カリフォルニア州ラホヤ在住の化学者[Richard L. Apodaca](https://depth-first.com/about/)のブログ
* [Cheminformania](https://www.cheminformania.com) - AstraZenecaの主席研究員で、機械学習／AIの専門家である[Esben Jannik Bjerrum博士](https://www.cheminformania.com/about/esben-jannik-bjerrum/)のブログ

<a id="books"></a>
### 書籍

* [Computational Approaches in Cheminformatics and Bioinformatics](https://books.google.com/books/about/Computational_Approaches_in_Cheminformat.html?id=bLqV4rYQoYsC) -  公的（NIH）、学術的、産業的ソースからの洞察を同時に取り入れる
* [Chemoinformatics for Drug Discovery](https://onlinelibrary.wiley.com/doi/book/10.1002/9781118742785) - ケモインフォマティクス戦略を用いて創薬成果を改善する方法を扱う資料
* [Molecular Descriptors for Chemoinformatics](https://onlinelibrary.wiley.com/doi/book/10.1002/9783527628766) - 化合物特性のケモインフォマティクス解析に用いる3,300を超える記述子と関連用語

<a id="see-also"></a>
## 関連項目

* [deeplearning-biology](https://github.com/hussius/deeplearning-biology#chemoinformatics-and-drug-discovery-) - deeplearning-biologyリポジトリ内のケモインフォマティクス／創薬セクション
* [awesome-python-chemistry](https://github.com/lmmentel/awesome-python-chemistry) - 別のリストは化学に関連するPythonの内容を扱っている
* [awesome-small-molecule-ml](https://github.com/benb111/awesome-small-molecule-ml) - 小分子創薬における機械学習の論文、データセット、その他資料の一覧
* [awesome-molecular-docking](https://github.com/yangnianzu0515/awesome-molecular-docking) - 分子ドッキングソフトウェア、データセット、および関連する他のリソースのキュレーションされたリスト
* [MolSSI Molecular Software Database](https://molssi.org/software-search/)
＊[Tobias Kind博士が作成したページ](https://fiehnlab.ucdavis.edu/staff/kind/metabolomics)

<a id="license"></a>
## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
