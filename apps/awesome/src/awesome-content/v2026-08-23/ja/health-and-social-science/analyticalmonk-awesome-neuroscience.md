---
title: "analyticalmonk/awesome-neuroscience"
description: "analyticalmonk/awesome-neuroscience の正規スナップショット"
licenseSource: "github-analyticalmonk-awesome-neuroscience-readme-md"
---


<img src="https://raw.githubusercontent.com/analyticalmonk/awesome-neuroscience/33ca06398bff26a53a913f0ea7a600e5e18164eb/AWESOME2.png" width="50%">

> 優れた神経科学ライブラリ、ソフトウェア、その他の関連コンテンツの厳選リスト。

[神経科学](https://en.wikipedia.org/wiki/Neuroscience)は、神経系がどのように発達し、どのような構造を持ち、何を行うかを研究する学問です。神経科学者は脳と、それが行動や認知機能へ与える影響に注目します。伝統的に神経科学は生物学の一分野と見なされてきましたが、現在では複数の研究水準から脳機能を明らかにするために協働する、幅広い学際分野を包含しています。

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)


## 目次

- [プログラミング](#programming)
  - [Python](#python)
  - [Matlab](#matlab)
  - [C++](#c)
  - [JavaScript](#javascript)
  - [R](#r)
- [リソース](#resources)
  - [電子書籍](#ebooks)
  - [ブログ](#blogs)
  - [MOOC](#moocs)
  - [コミュニティ](#communities)
  - [ニュースレター](#newsletters)
  - [その他](#miscellaneous)


## プログラミング <a id="programming"></a>
開発用途のソフトウェア、ライブラリ、フレームワーク。

### Python

- [Nengo](https://github.com/nengo/nengo) - 大規模な脳モデルを作成・シミュレーションするライブラリ。
- [Nitime](https://github.com/nipy/nitime) - 神経科学データの時系列解析。
- [Nilearn](https://github.com/nilearn/nilearn) - 神経画像データに統計学習／機械学習を適用するモジュール。
- [DIPY](https://github.com/nipy/dipy) - MR拡散画像解析のためのツールボックス。
- [MNE-Python](https://github.com/mne-tools/mne-python) - 脳波（EEG）や脳磁図（MEG）など、時間分解された神経信号を処理するコミュニティ主導ソフトウェア。
- [NiBabel](https://github.com/nipy/nibabel) - 一般的な医用画像・神経画像ファイル形式の一部を読み書きできる。
- [PsychoPy](https://github.com/psychopy/psychopy) - 心理学・神経科学実験を実行するパッケージ。Pythonで心理学実験用刺激を作成できる。
- [Brian2](https://github.com/brian-team/brian2) - スパイキングニューラルネットワーク向けの無料オープンソースシミュレーター。
- [expyriment](https://github.com/expyriment/expyriment) - タイミングが重要な行動・神経画像実験の設計と実施に使う、プラットフォーム非依存の軽量Pythonライブラリ。
 - [BindsNET](https://github.com/Hananel-Hazan/bindsnet) - 強化学習・機械学習向けスパイキングニューラルネットワークをシミュレーションするパッケージ。
 - [SpikeInterface](https://github.com/SpikeInterface/spikeinterface) - スパイクソーティング技術を統合するために設計されたフレームワーク。
 - [NiMARE](https://nimare.readthedocs.io/en/latest/) - 神経画像メタ分析用Pythonパッケージ。
- [DeepLabCut](https://github.com/DeepLabCut/DeepLabCut) - 深層ニューラルネットワークの転移学習を使った、動物行動分析向けマーカーレス姿勢推定ツールキット。
- [CaImAn](https://github.com/flatironinstitute/CaImAn) - 動き補正、信号源抽出、デコンボリューションなどを含む、大規模カルシウムイメージングデータ解析用計算ツールボックス。
- [Elephant](https://github.com/NeuralEnsemble/elephant) - スパイク列統計、信号処理、結合性解析のツールを提供する電気生理学データ解析ライブラリ。
- [NEURON](https://github.com/neuronsimulator/nrn) - 個々のニューロンとニューロンネットワークをモデル化するシミュレーション環境。計算論的・システム神経科学で広く利用される。
- [Nipype](https://github.com/nipy/nipype) - 既存の神経画像パッケージ（FSL、FreeSurfer、AFNI、SPM、ANTs）へ統一的なPythonインターフェースを提供し、柔軟にパイプラインを構成できるワークフローエンジン。
- [PyNWB](https://github.com/NeurodataWithoutBorders/pynwb) - 細胞ベースの神経生理学データに関するコミュニティ標準形式、Neurodata Without Borders（NWB）ファイルを読み書きするPython API。
- [fMRIPrep](https://github.com/nipreps/fmriprep) - ほぼあらゆるデータセットに適応し、最小限の手動介入で解析可能な出力を生成する堅牢なfMRIデータ前処理パイプライン。
- [AllenSDK](https://github.com/AllenInstitute/AllenSDK) - Allen Brain AtlasやAllen Brain Observatoryなど、Allen Institute for Brain Scienceのデータへアクセス・処理するツールキット。
- [Suite2p](https://github.com/MouseLand/suite2p) - 大規模二光子カルシウムイメージング記録から細胞を検出し、信号を抽出するパイプライン。
- [Neo](https://github.com/NeuralEnsemble/python-neo) - Pythonで電気生理学データを表現するパッケージ。幅広い神経生理学ファイル形式のリーダーを備える。
- [Monty](https://github.com/thousandbrainsproject/tbp.monty) - 新皮質のthousand brains theoryに基づく感覚運動学習フレームワーク。
- [PyNoetic](https://github.com/NeuroDiag/PyNoetic-official) - EEGブレイン・コンピューター・インターフェースをノーコードで開発するモジュール式Pythonフレームワーク。エンドツーエンドのBCI設計に対応。

### Matlab

- [Brain Dynamics Toolbox](https://bdtoolbox.org/) - 神経科学の力学系をシミュレーションするオープンソフトウェア。
- [BrainStorm](https://neuroimage.usc.edu/brainstorm/) - 脳記録（MEG、EEG、fNIRS、ECoG、深部電極、多ユニット電気生理）解析専用のオープンソースアプリケーション。
- [EEGLAB](https://sccn.ucsd.edu/eeglab/) - 連続・事象関連EEG、MEG、その他の電気生理学データを処理する対話型Matlabツールボックス。
- [FieldTrip](https://github.com/fieldtrip/fieldtrip) - MEGおよびEEG解析用ツールボックス。
- [Psychtoolbox-3](http://psychtoolbox.org/) - 視覚・神経科学研究向けの無料Matlab／GNU Octave関数集。
- [SPM](https://www.fil.ion.ucl.ac.uk/spm/) - 脳画像データ系列（fMRI、PET、SPECT、EEG、MEG）を解析する無料オープンソースソフトウェア。

### C++

- [Brayns](https://github.com/BlueBrain/Brayns) - ニューロンをレイトレーシング描画できる最小限のビジュアライザー。レイトレーシングは、神経回路で細胞同士が接触する領域やシナプスが形成される領域を強調し、個々の細胞、ひいては脳の機能をより深く理解するのに役立つ。

### JavaScript
- [Brainbrowser](https://github.com/aces/brainbrowser) - 主に神経画像を対象としたWebベースの3D可視化ツール群を公開するライブラリ。
- [jsPsych](https://www.jspsych.org/) - Webブラウザーで行動実験を作成・実行するライブラリ。

### R
- [nat: NeuroAnatomy Toolbox](https://github.com/jefferis/nat) - 生物画像データ、特に単一ニューロンのトレースを3D可視化・解析するパッケージ。
- [brainGraph](https://github.com/cwatson/brainGraph) - 脳MRIデータのグラフ理論解析を行うパッケージ。

## リソース <a id="resources"></a>
神経科学に関連する興味深いリソース。

### 電子書籍 <a id="ebooks"></a>
- [Neuroscience Online](http://nba.uth.tmc.edu/neuroscience/m/index.htm) - 神経科学を詳しく扱うオープンアクセス電子教科書と対話型教材。University of Texas Medical School at HoustonのDepartment of Neurobiology and Anantomyが提供。
- [Computational Cognitive Neuroscience](https://compcogneuro.org/book) - 生物学に基づく計算モデルで脳を理解することを目指す計算認知神経科学の主要概念を詳しく紹介する文書。
- [Neuronal Dynamics](https://neuronaldynamics.epfl.ch) - 計算論的・理論神経科学を扱うオープンアクセス電子教科書。École Polytechnique Fédérale de Lausanne（EPFL）が提供。
- [Andy's Brain Book](https://andysbrainbook.readthedocs.io/en/latest/) - [Andy's Brain Blog](https://www.andysbrainblog.com/)の関連書籍。Unix環境での作業、fMRI解析、一般的な神経画像ツールと話題を紹介。
- [NiPraxis](https://textbook.nipraxis.org/intro.html) - [NiPraxisコース](https://nipraxis.org/)の教科書。神経画像解析の基本概念と、統計学、工学、計算機科学との関係を扱う。データとコードを使い、fMRI手法の仕組み、失敗の原因と修正方法、新手法の開発方法をより深く理解できる。

### ブログ <a id="blogs"></a>

- [Neuroskeptic](https://www.discovermagazine.com/author/neuroskeptic) - [Discover magazine](http://discovermagazine.com/)の神経科学ブログ。神経科学、精神医学、心理学の最新動向を批判的な視点から紹介。
- [Andy's Brain Blog](https://www.andysbrainblog.com/) - 一般的な神経画像ツールと手法を幅広く扱う記事、チュートリアル、動画の大規模コレクション。

### MOOC <a id="moocs"></a>

[大規模公開オンライン講座（MOOC）](https://en.wikipedia.org/wiki/Massive_open_online_course)は、地理的に分散した多数の学習者が参加できるよう設計された、無料のWebベース遠隔学習プログラムです。
MOOCは大学の講義形式に沿う場合もあれば、より自由な構成の場合もあります。

- [Introduction to Neuroscience | MIT OCW](https://ocw.mit.edu/courses/brain-and-cognitive-sciences/9-01-introduction-to-neuroscience-fall-2007/) - 人間の脳の構造と機能に重点を置いた、哺乳類の神経系の入門。
- [Computational Neuroscience | Coursera](https://www.coursera.org/learn/computational-neuroscience) - 神経系が行うこととその機能を理解するための基本的な計算手法を紹介。
- [Medical Neuroscience](https://www.coursera.org/learn/medical-neuroscience) - 人間の行動を理解するための神経生物学的枠組みを提供しながら、人間の中枢神経系の機能構成と神経生理学を探究。
- [Neuromatch Academy](https://github.com/NeuromatchAcademy/course-content) - 3週間の計算論的神経科学集中サマースクール用Jupyter Notebook。

### コミュニティ <a id="communities"></a>
- [Quora](https://www.quora.com/topic/Neuroscience-1) - Quoraの神経科学トピック。基礎から高度な内容まで、多くは専門家による回答を掲載。
- [r/neuroscience](https://www.reddit.com/r/neuroscience/) - 神経科学のニュース、研究、質問を議論するSubreddit。
- [StackExchange](https://psychology.stackexchange.com) - 心理学と神経科学のStackExchangeサイト。
- [neuroimaging@python.org](https://mail.python.org/mailman/listinfo/neuroimaging) - Pythonによる神経画像解析を議論するメーリングリスト。[NiPy](https://nipy.org/)プロジェクト（NiBabel、Nilearn、dipy、MNE-Pythonなど）に関する議論も扱う。

### ニュースレター <a id="newsletters"></a>
- [On The Brain](http://neuro.hms.harvard.edu/harvard-mahoney-neuroscience-institute/hmni-newsletter) - Harvard Mahoney Neuroscience Instituteの季刊メールニュースレター。
- [BrainPost](https://www.brainpost.co/) - 最新の神経科学論文を読みやすくまとめた週刊要約を配信するメーリングリスト。

### その他 <a id="miscellaneous"></a>
- [Awesome Public Datasets - Neuroscience](https://github.com/awesomedata/awesome-public-datasets#neuroscience) - 高品質なオープン神経科学データセット。
- [McCulloch & Pitts Neural Net Simulator](https://justinmeiners.github.io/neural-nets-sim/) - ニューロンに基づく歴史的な計算モデルのシミュレーター。
- [ModelDB](https://modeldb.science/) - 計算論的神経科学モデルの検索可能なデータベース。
- [NeuroElectro](https://neuroelectro.org/) - 文献から抽出したニューロンとその電気生理学的特性を検索できるデータベース。
- [Neuroscience Mindmap](https://learn-anything.xyz/neuroscience) - 神経科学を学びたい人向けの厳選リソースを収録する対話型マインドマップ。
- [neuroSummerSchools](https://github.com/PhABC/neuroSummerSchools) - 神経科学と関連分野の夏季・季節スクール一覧。
- [Brain Matters](https://brainpodcast.com/) - 現役の神経科学者が脳について語る神経科学ポッドキャスト。
- [NeuroHackademy](https://neurohackademy.org/) - University of Washington eScience Instituteで開催される神経画像・データ科学のサマースクール。講義は同研究所の[YouTubeチャンネル](https://www.youtube.com/@UWeScienceInstitute)で視聴可能。
- [SORTED](https://github.com/PTDZ/SORTED) - 興味深い科学のアイデアとリンク（認知／神経科学とデータ科学）のリスト。
- [BIDS](https://bids.neuroimaging.io/) - Brain Imaging Data Structure。神経画像・行動データを整理するコミュニティ標準で、現代の神経画像ツールの大部分が対応。
- [OpenNeuro](https://openneuro.org/) - 神経画像データ（MRI、MEG、EEG、iEEG、ECoG、ASL、PET）を共有・解析する無料オープンプラットフォーム。

## コントリビュート <a id="contribute"></a>

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/analyticalmonk/awesome-neuroscience/blob/33ca06398bff26a53a913f0ea7a600e5e18164eb/contributing.md)をお読みください。


## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

法律で認められる限り、[Akash Tandon](https://github.com/analyticalmonk)は本作品に関するすべての著作権および
関連する権利または隣接権を放棄しています。
