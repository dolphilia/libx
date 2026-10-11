---
title: "Awesome Neuroimaging"
description: "MRを中心とした脳画像の取得・品質管理・前処理・モデリング・来歴管理のツールと、資料・データセット。"
licenseSource: "github-NPACore-awesome-neuroimaging-readme-md"
toc:
  maxLevel: 4
---

# Awesome Neuroimaging

磁気共鳴（MR）を中心に、脳画像や記録を調べ、整理・解析するためのツールと資料をまとめています。画像取得、品質管理、前処理、画像操作・モデリング、来歴管理・自動化、ライブラリ、学習資料、データセットを探せます。説明・料金・バージョン・データセットの数値は、固定原文の時点のものです。

## <a id="viewers"></a><a id="ビューア"></a>画像ビューアー
- [AFNI](https://afni.nimh.nih.gov/pub/dist/doc/htmldoc/afniandafni/gui_guide/main_toc.html) - AFNIスイートのボリューム画像ビューアー。1990年代のMotifツールキットによるGUIの外観が特徴。
- [freeview](https://surfer.nmr.mgh.harvard.edu/fswiki/FreeviewGuide/FreeviewIntroduction) - Freesurferスイートのサーフェス・ボリューム画像ビューアー。QTツールキットを使用。
- [fsleyes](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSLeyes) - FSLのボリューム画像ビューアー。
- [mricron](https://www.nitrc.org/projects/mricron) - Windowsで動作するボリューム画像ビューアー。
- [dsistudio](https://dsi-studio.labsolver.org/doc/gui_t1.html) - dsi-studioツールスイートのDSIビューア。
- [osirix](https://www.osirix-viewer.com/) - DICOMデータベースの整理・閲覧ツール。
- [Mango](https://mangoviewer.com/) - Multi-image Analysis GUIは、dcm、nii、サーフェスなどの医学研究画像用ビューア。バージョン4.1は2019年リリース。
- [`wb_view`](https://www.humanconnectome.org/software/connectome-workbench) - Connectome Workbenchのサーフェスファイルビューア。

## <a id="acquisition"></a><a id="取得"></a>画像取得
### MR
#### <a id="organization"></a>整理
- [reproIn](https://dbic-handbook.readthedocs.io/en/latest/mri/reproin.html) - 検査カードのシーケンス命名に関する資料。
- [BIDS](https://bids-specification.readthedocs.io/en/stable/) - Brain Imaging Data Structure。ディレクトリ階層とファイル命名の仕様。
#### <a id="management"></a>管理
- [PACS](https://en.wikipedia.org/wiki/Picture_archiving_and_communication_system) - 医療機器からのDICOM画像の保存・転送に使われ、スキャナー製造元が実装している可能性が高いPicture Archiving and Communication System標準。 [Siemens Healthineers Syngo Carbon](https://www.siemens-healthineers.com/en-us/digital-health-solutions/syngo-carbon)、[Phillips Vue PACS](https://www.documents.philips.com/assets/20240227/5a788a79bbdd4e1986f1b12300b0e534.pdf)、[GE HealthCare True PACS](https://www.gehealthcare.com/products/healthcare-it/true-pacs)を参照。
- [XNAT](https://www.xnat.org/) - 画像ベース研究専用の、拡張可能なオープンソース画像情報学ソフトウェアプラットフォーム。
  - [DAX](https://github.com/VUIIS/dax) - XNAT向け分散自動化。YAMLで定義した入出力とコンテナ化を使う。
- [LORIS](https://mcin.ca/technology/loris/) - LORIS（Longitudinal Online Research and Imaging System）は、神経画像研究向けのWebベースのデータ・プロジェクト管理ソフトウェア。
- [brainlife.io](https://brainlife.io) - 再現可能な神経科学解析のための、無料のオープンソースプラットフォーム。原文では安全性を備えると紹介。
- [cbrain](https://mcin.ca/technology/cbrain/) - 高性能計算（HPC）へ接続し、神経画像研究の計算負荷の高い解析を行えるWebベースのソフトウェア。
- [Flywheel](https://flywheel.io)（有料） - データ取得、キュレーション、自動化、機械学習のためのクラウドベース画像研究データプラットフォーム。
- [QMENTA](https://qmenta.com)（有料） - 臨床試験のためのオールインワン画像プラットフォーム。

#### <a id="motion"></a><a id="モーション"></a>体動
- [FIRMM](https://firmm.readthedocs.io) - fMRI、拡散画像、ナビゲーションを用いたT1/T2画像の取得時に、体動をリアルタイムに監視。
- [`Dimon`](https://afni.nimh.nih.gov/pub/dist/doc/program_help/Dimon.html) - AFNIでDICOM画像ファイルのリアルタイム取得を監視する。

## <a id="quality-assurance-and-checking"></a><a id="品質保証とチェック"></a>品質保証・品質確認

スキャナー画像のQAおよびQC。

- [MRIQC](https://mriqc.readthedocs.io/) - 構造MRI（T1w・T2w）と機能MRI（磁気共鳴画像）データから、参照画像を必要としない画像品質指標（IQM）を抽出。
- [mrQA](https://github.com/Open-Minds-Lab/mrQA) - プロトコル準拠を含む、医療画像データセットの品質保証ツール。
- [bids-validator](https://github.com/bids-standard/bids-validator/) - Brain Imaging Data Structureのバリデーター。

## <a id="pipelines"></a>パイプライン

前処理ワークフロー。

### <a id="suites"></a><a id="スイート"></a>統合ソフトウェア
複数モダリティ向けのソフトウェアパッケージ。多くはグラフィカルユーザーインターフェースを提供する。

- [AFNI](https://afni.nimh.nih.gov/) - Analysis of Functional NeuroImagesは、主に複数MRIモダリティの解析と表示のために開発されたC、Python、Rプログラムおよびシェルスクリプトの主要なソフトウェアスイート。
- [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki) - FMRI、MRI、拡散脳画像データ向けの包括的な解析ツールライブラリ。
- [SPM](https://www.fil.ion.ucl.ac.uk/spm/) - Statistical Parametric Mappingは、機能画像データに関する仮説の検定に使われる空間的に拡張した統計過程の構築・評価を指す。
- [Qu|Nex](https://qunex.yale.edu/) - Quantitative Neuroimaging Environment & Toolbox（QuNex）は、神経画像モダリティ横断でデータ整理、前処理、品質保証、解析を行う拡張可能なフレームワークを総合的に支援するオープンソースのソフトウェアスイート。

### BOLD

- [fmriprep](https://fmriprep.org/) - 包括的なエラー・出力報告を備え、スキャン取得プロトコルの違いに堅牢な、利用しやすい前処理パイプライン。入力はBIDSデータセット。
- [`afni_proc.py`](https://afni.nimh.nih.gov/pub/dist/doc/program_help/afni_proc.py.html) - AFNIを使い、事前設定済みブロックを備えたベストプラクティスのパイプライン。
- [HALFpipe](https://github.com/HALFpipe/HALFpipe) - fMRIデータの再現可能な解析を容易にする、使いやすいソフトウェア。
- [XCP-D](https://xcp-d.readthedocs.io/en/latest/) - fMRIprepの終了地点から引き継ぐ後処理・ノイズ回帰パイプライン。
- [clpipe](https://clpipe.readthedocs.io/en/latest/) - fMRIの前処理にfmriprepを使用し、機能的結合性の解析で重要な交絡成分の回帰除去やフィルタリングなど、追加の処理を実装。
- [fmri_processing_scripts](https://github.com/LabNeuroCogDevel/fmri_processing_scripts) - 最大限の前処理を行うレガシーパイプライン。
- [HCP Pipeline](https://www.humanconnectome.org/software/hcp-mr-pipelines) - パイプラインスクリプトは[Glasser et al. 2013](http://www.ncbi.nlm.nih.gov/pubmed/23668970)で説明されたMinimal Preprocessing Pipeline（MPP）を実装する。

### DSI

- [dsi-studio](https://dsi-studio.labsolver.org/) - 脳の接続をマッピングし、所見を神経心理学的障害と相関させるトラクトグラフィソフトウェアツール。
- [qsiprep](https://qsiprep.readthedocs.io/) - 拡散強調MRI（dMRI）データ処理用パイプラインを構成する。

### <a id="structural"></a><a id="構造"></a>構造画像

- [Freesurfer](https://freesurfer.net/) - ヒト脳MR画像を処理、解析、可視化するオープンソース神経画像ツールキット。
- [CIVET](https://mcin.ca/technology/civet/) - ヒト脳画像データの体積計測・皮質計測・形態計測を完全に自動化する画像処理パイプライン。

## <a id="raw-data"></a>生データ

DICOMおよびk-space画像を扱う。

- [dcm2niix](https://github.com/rordenlab/dcm2niix) - DICOMからNIfTIへの変換器。
- [heudiconv](https://github.com/nipy/heudiconv/) - 脳画像データを構造化されたディレクトリレイアウトへ整理する、柔軟なDICOM変換器。
- [gdcm](https://sourceforge.net/projects/gdcm/) - Grassroots DICOMは、DICOM医療ファイル向けのC++ライブラリおよびCLIツール。
- [`pydicom`](https://pydicom.github.io/) - DICOMファイルの検査、変更、作成を行うPythonパッケージおよびCLIツール。
- [`dicom_hinfo`](https://afni.nimh.nih.gov/pub/dist/doc/program_help/dicom_hinfo.html), `dicom_hdr` - DICOMファイルから選択した情報を表示する。

- [`dcmdirtab`, `dcmtab_bids`](https://lncd.github.io/lncdtools/BIDS/) - [lncdtools](https://github.com/lncd/lncdtools/)の、CLI重視・正規表現ベースで反復作業に適したBIDS変換パイプライン。
- [pymapVBVD](https://git.fmrib.ox.ac.uk/wclarke/pymapvbvd) - Siemensの.dat「twix」生データファイルを読み取る。Philipp EhsesのMatlabツールmapVBVDのPython移植版。
- [med2image](https://github.com/FNNDSC/med2image/pulls) - DICOMまたはniftiファイルからjpgまたはpng画像を生成するPython CLIツール。

## <a id="provenance-and-automation"></a>来歴と自動化

- [make](https://www.frontiersin.org/articles/10.3389/fninf.2016.00002/full) - `Makefile`で定義したスクリプトレシピに従う。
- [datalad](https://github.com/datalad/datalad) - gitとgit-annexでコード、データ、コンテナを管理する。特に`datalad run --input=... --output=...`。
- [`3dNotes`](https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dNotes.html) - AFNIデータセットのノートを追加、削除、表示するプログラム。

- [`niinote`](https://github.com/lncd/lncdtools/blob/master/niinote) - 任意のコマンドの実行・記録のため、AFNI nifti XML履歴をヘッダーへ追加する。[lncdtools](https://github.com/lncd/lncdtools/)の一部。

## <a id="imaging-tools"></a>画像処理ツール
ボリュームデータおよび／またはサーフェスデータを読み書き・操作するソフトウェア。

### <a id="skullstripping"></a><a id="頭蓋骨除去"></a>脳抽出（スカルストリッピング）
- [optibet](https://montilab.psych.ucla.edu/fmri-wiki/optibet/) - 患者集団でより頑健な脳抽出を行うため、afniとfslのツールを組み合わせるシェルスクリプト。

- [`3dSkullStrip`](https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dSkullStrip.html) - 多数のパラメーターを備えた[AFNI](https://afni.nimh.nih.gov/)の脳抽出ユーティリティ。

- [`bet`](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/BET/UserGuide) - [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki)の脳抽出ツール。

- [`antsBrainExtraction.sh`](https://dpaniukov.github.io/2016/06/06/brain-extraction-with-ants.html)  - [ANTs](http://stnava.github.io/ANTs/)版。

- [`mri-watershed`](https://surfer.nmr.mgh.harvard.edu/fswiki/mri_watershed) - [Freesurfer](https://freesurfer.net/)パイプラインの一部。
- [ROBEX](https://www.nitrc.org/projects/robex) - パラメーターを調整せずに頑健な脳抽出を行うツール。

### <a id="warping"></a>ワーピング
空間正規化。

- [ANTs](http://stnava.github.io/ANTs/) - Advanced Normalization Toolsは、複数モダリティ画像セグメンテーションの信頼性と一貫性を最大化するため、専門家ラベル付きデータに基づく確率的組織セグメンテーションと機械学習手法を含む。

- [3dQwarp](https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dQwarp.html) - ベースデータセットに一致する、ソースデータセットの非線形ワープ版を計算するOpenMP並列化[AFNI](https://afni.nimh.nih.gov/)ツール。

- [flirt, fnirt](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FNIRT/UserGuide) - [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki)ツールが提供するワーピングソフトウェア。

#### <a id="templates"></a>テンプレート
- [templateflow](https://www.templateflow.org/) - 研究者が既製テンプレートを使用し、新しいテンプレートを共有できるモジュール型・バージョン管理済みリソース。
- [MNI152](https://www.bic.mni.mcgill.ca/ServicesAtlases/ICBM152NLin2009) - 正常集団向けの、偏りを抑えた標準MR脳画像テンプレート。

### <a id="manipulation"></a><a id="操作"></a>画像の数値演算
行列値に対して演算を行うツール。

- [3dcalc](https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dcalc.html) - AFNIによる1Dから4Dデータセットのボクセル単位演算。
- [fslmaths](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/Fslutils#:~:text=a%20combined%20image.-,fslmaths,--%20simple%20but%20powerful) - 画像を数学的に操作できる、シンプルだが強力なプログラム。FSLより。
- [fscalc](https://www.freesurfer.net/pub/dist/freesurfer/dev_binaries/centos6_x86_64/fscalc.fsl) - Freesurferによるfslmathsのラッパー。

### <a id="modeling"></a>モデリング

#### HRF

- [3dDeconvolve](https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dDeconvolve.html) -  [AFNI](https://afni.nimh.nih.gov/) - 指定した入力刺激時系列を持つ3D+時間測定データセットのデコンボリューションを計算するプログラム。複数の入力刺激時系列を用いた重回帰も実行できる。

- [FEAT](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FEAT) - 一般線形モデリングに基づく単純な実験を、GUIの案内に従い解析する。 [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki)の一部。

#### MRSI

- [lcmodel](https://github.com/schorschinho/LCModel) - 磁気共鳴分光データの線形結合モデリングを実装。
- [FSL-MRS](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSL-MRS) - 単一ボクセル（SVS）、MRS画像（MRSI）、機能的MRS（fMRS）、拡散MRS（dwMRS）、編集分光などに対応するMR分光法のツール群。
- [Osprey](https://github.com/schorschinho/osprey) - 生体内磁気共鳴分光（MRS）データの先進的な処理と定量解析を行う統合ソフトウェアスイート。

#### EEG
- [`fooof`](https://fooof-tools.github.io/fooof/index.html) -  神経パワースペクトルをパラメーター化する、高速・効率的かつ生理学的知見に基づくツール。

#### <a id="misc"></a>その他
- [hurst](https://github.com/elifesciences-publications/ei_hurst/) - MRにおける内在的な興奮・抑制不均衡を評価するアルゴリズム（[Trakoshis et al, eLife, 2020](http://doi.org/10.7554/eLife.55684)）。

- [tat2](https://lncd.github.io/lncdtools/tat2/) - [lncdtools](https://github.com/lncd/lncdtools/)のAFNIバイナリを用いた時間平均T2*ラッパースクリプト。

## <a id="libraries"></a>ライブラリ

### Python

- [nipy](https://nipy.org/) - `nibabel`、`nipype`、`nilearn`を含む。

### R
- [oro.nifti](https://github.com/bjw34032/oro.nifti) - ANALYZE、NIfTI、AFNI形式に従う医療画像データの入出力と可視化の関数。

### MATLAB

- [SPM](https://www.fil.ion.ucl.ac.uk/spm/) - Statistical Parametric Mappingは、機能画像データに関する仮説の検定に使われる空間的に拡張した統計過程の構築・評価を指す。
- [`imtool3D_td`](https://github.com/tanguyduval/imtool3D_td) - Matlab用ROIツール付き3D画像ビューア（NIFTIビューア、手動セグメンテーション）。

## <a id="resources"></a><a id="リソース"></a>資料

### <a id="blogs-books-and-docs"></a>ブログ、書籍、ドキュメント

- [Andy's brain blog](https://andysbrainblog.com/) - 主要なソフトウェアパッケージ（AFNI、SPM、FSL）を使った神経画像解析を、一連の流れに沿って解説するチュートリアルと動画。
- [DataLad handbook](https://handbook.datalad.org/) - 来歴追跡ソフトウェア`datalad`を使った神経画像分野の具体的な応用について、一連の手順を示すユースケース。
- [Hitchhacker's guide to the brain](https://learn-neuroimaging.github.io/hitchhackers_guide_brain/) - 研究計画から、データ取得・処理・解析・品質管理を経て、報告・データ共有に至るまでを扱うノート。
- [Online Neuroimaging Resources](https://github.com/Remi-Gau/online_neuroimaging_resources) - MRI、fMRI、EEG、MEGを扱うオンライン資料の幅広い一覧。
- [U of A: Neuroimaging Core Documentation](https://neuroimaging-core-docs.readthedocs.io/) - アリゾナ大学の神経画像コアで使用・開発されているアプローチのドキュメント。

### <a id="boards-and-chats"></a>掲示板とチャット
- [neurostars](https://neurostars.org/) - 神経画像全般を扱う`discuss`フォーラム。`fmriprep`の推奨Q&Aサイト。
- [afni discuss](https://discuss.afni.nimh.nih.gov) - AFNIの`discuss`インスタンス。
- [brainhack](https://mattermost.brainhack.org/) - 神経画像研究者のMattermostコミュニティ。

### <a id="datasets-repositories"></a>データセットリポジトリ

- [openneuro](https://openneuro.org/) - BIDS準拠のMRI、PET、MEG、EEG、iEEGデータを検証・共有する無料かつオープンなプラットフォーム。
- [NDA](https://nda.nih.gov/) - National Institute of Mental Health Data Archive（NDA）は、多数の科学分野にわたる数百の研究プロジェクトで収集されたヒト被験者データを提供する。
- [NITRC](https://www.nitrc.org/) - NeuroImaging Tools & Resources Collaboratoryの神経情報学ソフトウェア・データライブラリ。

#### <a id="big-datasets"></a>大規模データセット

- [ABCD](https://abcdstudy.org/) - 数千件の縦断MRIスキャンを含む長期のAdolescent Brain Cognitive Development研究。
- [UK Biobank](https://www.ukbiobank.ac.uk/) - 50万人の研究参加者を対象とする大規模生物医学データベース・研究リソース。
- [NCANDA](http://www.ncanda.org/) - National Consortium on Alcohol and Neurodevelopment in Adolescence（4,000回超のMR受診）。
- [PNC](https://www.med.upenn.edu/bbl/philadelphianeurodevelopmentalcohort.html) - CHOPネットワークで医療を受けた、フィラデルフィア都市圏の8～21歳、9,500人超の集団ベースサンプル。
- [ENIGMA](https://enigma.ini.usc.edu/) - Enhancing Neuro Imaging Genetics through Meta Analysis Consortiumは、50のワーキンググループによる画像・ゲノムデータを含む。
