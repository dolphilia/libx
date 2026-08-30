---
title: "Awesome Python Data Science"
description: "Python Data Scienceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-krzjoa-awesome-python-data-science-readme-md"
---

# Awesome Python Data Science

Python Data Scienceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [Contents](#contents)
- [Machine Learning](#machine-learning)
	- [General Purpose Machine Learning](#general-purpose-machine-learning)
  	- [Gradient Boosting](#gradient-boosting)
	- [Ensemble Methods](#ensemble-methods)
	- [Imbalanced Datasets](#imbalanced-datasets)
	- [Kernel Methods](#kernel-methods)
- [Deep Learning](#deep-learning)
	- [PyTorch](#pytorch)
	- [TensorFlow](#tensorflow)
    - [Keras](#keras)
 	- [JAX](#jax)
	- [Others](#others)
- [Automated Machine Learning](#automated-machine-learning)
- [Natural Language Processing](#natural-language-processing)
- [Computer Audition](#computer-audition)
- [Computer Vision](#computer-vision)
- [Time Series](#time-series)
- [Reinforcement Learning](#reinforcement-learning)
- [Graph Machine Learning](#graph-machine-learning)
- [Graph Manipulation](#graph-manipulation)
- [Learning-to-Rank & Recommender Systems](#learning-to-rank-&-recommender-systems)
- [Probabilistic Graphical Models](#probabilistic-graphical-models)
- [Probabilistic Methods](#probabilistic-methods)
- [Model Explanation](#model-explanation)
- [Optimization](#optimization)
- [Genetic Programming](#genetic-programming)
- [Feature Engineering](#feature-engineering)
	- [General](#general)
	- [Feature Selection](#feature-selection)
- [Visualization](#visualization)
	- [General Purposes](#general-purposes)
	- [Interactive plots](#interactive-plots)
	- [Map](#map)
	- [Automatic Plotting](#automatic-plotting)
	- [NLP](#nlp)
- [Data Manipulation](#data-manipulation)
	- [Data Frames](#data-frames)
	- [Pipelines](#pipelines)
	- [Data-centric AI](#data-centric-ai)
	- [Synthetic Data](#synthetic-data)

- [TabGAN](https://github.com/Diyago/Tabular-data-generation) - GANs、拡張モデル、LLMsを用いた合成テーブルデータ生成。<img height="16" width="16" src="https://github.com/krzjoa/awesome-python-data-science/raw/master/img/sklearn_big.png" alt="sklearn">
- [Deployment](#deployment)
- [Statistics](#statistics)
- [Distributed Computing](#distributed-computing)
- [Experimentation](#experimentation)
- [Data Validation](#data-validation)
- [Evaluation](#evaluation)
- [Computations](#computations)
- [Web Scraping](#web-scraping)
- [Spatial Analysis](#spatial-analysis)
- [Quantum Computing](#quantum-computing)
- [Conversion](#conversion)
- [Contributing](#contributing)
- [License](#license)

<a id="machine-learning"></a>
## 機械学習

<a id="general-purpose-machine-learning"></a>
### 汎用機械学習
* [SciPy](https://scipy.org/) - 科学計算におけるPythonの基本アルゴリズム
* [scikit-learn](https://scikit-learn.org/stable/) - Pythonにおける機械学習。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [PyCaret](https://github.com/pycaret/pycaret) - オープンソースかつ低コードのPython機械学習ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/R_big.png" alt="R inspired lib">
* [Shogun](https://github.com/shogun-toolbox/shogun) - 機械学習ツールボックス。
* [xLearn](https://github.com/aksnzhy/xlearn) - 高性能・使いやすく・スケーラブルな機械学習パッケージ。
* [cuML](https://github.com/rapidsai/cuml) - RAPIDS機械学習ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [modAL](https://github.com/cosmic-cortex/modAL) - Python3向けのモジュラーフレームワーク（アクティブ学習）。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn) - PySpark + scikit-learn = Sparkit-learn. <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/spark_big.png" alt="Apache Spark based">
* [mlpack](https://github.com/mlpack/mlpack) - スケーラブルなC++機械学習ライブラリ（Pythonバインディング）。
* [dlib](https://github.com/davisking/dlib) - C++で実世界の機械学習およびデータ分析アプリケーションを作成するためのツールキット（Pythonバインディング）。
* [MLxtend](https://github.com/rasbt/mlxtend) - Pythonのデータ分析および機械学習ライブラリへの拡張および補助モジュール。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [hyperlearn](https://github.com/danielhanchen/hyperlearn) - 50%以上高速、50%以上RAM使用量削減、GPU対応を再実装したsklearn、Statsmodels。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [Reproducible Experiment Platform (REP)](https://github.com/yandex/rep) - 人間が使える機械学習ツールボックス。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn) - Python向けのマルチラベル分類。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [seqlearn](https://github.com/larsmans/seqlearn) - Python向けのシーケンス分類ツールキット。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [pystruct](https://github.com/pystruct/pystruct) - Python向けのシンプルな構造化学習フレームワーク。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys) - scikit-learn向けの高度に解釈可能な分類器。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [RuleFit](https://github.com/christophM/rulefit) - rulefitの実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [metric-learn](https://github.com/all-umass/metric-learn) - Pythonにおけるメトリック学習アルゴリズム。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [pyGAM](https://github.com/dswah/pyGAM) - Pythonにおける一般化加算モデル
* [causalml](https://github.com/uber/causalml) - 機械学習アルゴリズムによるアップリフトモデリングと因果推論。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">

<a id="gradient-boosting"></a>
### 勾配ブースティング
* [XGBoost](https://github.com/dmlc/xgboost) - スケーラブルで、移植可能かつ分散型の勾配ブースト。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [LightGBM](https://github.com/Microsoft/LightGBM) - 高速かつ分散型、高性能な勾配ブースト。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [CatBoost](https://github.com/catboost/catboost) - 決定木ベースの勾梯ブーストを用いたオープンソースライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [ThunderGBM](https://github.com/Xtra-Computing/thundergbm) - GPU上で高速なGBDTとランダムフォレスト。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [NGBoost](https://github.com/stanfordmlgroup/ngboost) - 確率予測用の自然勾梯ブースト
* [TensorFlow Decision Forests](https://github.com/tensorflow/decision-forests) - Kerasにおける決定木モデルの学習・サーバー提供・解釈に用いる最先端アルゴリズムのコレクション。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="keras"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">

<a id="ensemble-methods"></a>
### アンサンブル手法
* [ML-Ensemble](http://ml-ensemble.com/) - 高性能なアンサンブル学習。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Stacking](https://github.com/ikki407/stacking) - シンプルで実用的なスタッキングライブラリ（Pythonベース）。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [stacked_generalization](https://github.com/fukatani/stacked_generalization) - 機械学習のスタッキング一般化に用いるライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [vecstack](https://github.com/vecxoz/vecstack) - スタッキング（機械学習技術）用のPythonパッケージ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">

<a id="imbalanced-datasets"></a>
### 不均衡データセット
* [imbalanced-learn](https://github.com/scikit-learn-contrib/imbalanced-learn) - さまざまな手法による下サンプリングと上サンプリングを行うモジュール。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [imbalanced-algorithms](https://github.com/dialnd/imbalanced-algorithms) - 不均衡データ上の学習に用いるアルゴリズムのPython実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">

<a id="kernel-methods"></a>
### カーネル法
* [pyFM](https://github.com/coreylynch/pyFM) - Pythonにおけるファクタライゼーションマシン。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [fastFM](https://github.com/ibayer/fastFM) - ファクタライゼーションマシン用のライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [tffm](https://github.com/geffy/tffm) - 任意の順序のファクタライゼーションマシンのTensorFlow実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [liquidSVM](https://github.com/liquidSVM/liquidSVM) - SVMの実装。
* [scikit-rvm](https://github.com/JamesRitchie/scikit-rvm) - 関連ベクトルマシンのscikit-learn APIによる実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [ThunderSVM](https://github.com/Xtra-Computing/thundersvm) - GPUおよびCPU上で高速なSVMライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">

<a id="deep-learning"></a>
## 深層学習

### PyTorch
* [PyTorch](https://github.com/pytorch/pytorch) - Pythonでテンソルと動的ニューラルネットワークを強力なGPUアクセラレーションで実現。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [pytorch-lightning](https://github.com/Lightning-AI/lightning) - PyTorch Lightningは単に整理されたPyTorchである。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [ignite](https://github.com/pytorch/ignite) - PyTorchでニューラルネットワークを訓練する際に役立つ高レベルのライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [skorch](https://github.com/dnouri/skorch) - scikit-learnと互換性のあるニューラルネットワークライブラリでPyTorchをラップ。 <img height="20" src=" alt="PyTorch based/compatible"> <img height="20" src=" alt="sklearn"> https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png"
* [Catalyst](https://github.com/catalyst-team/catalyst) - PyTorch DLおよびRL研究用の高レベルユーティリティ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [ChemicalX](https://github.com/AstraZeneca/chemicalx) - 薬品ペアスコアリング用のPyTorchベースのディープラーニングライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">

### TensorFlow
* [TensorFlow](https://github.com/tensorflow/tensorflow) - Googleが提供するデータフローグラフによるスケーラブルマシンラーニングの計算。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [TensorLayer](https://github.com/zsdonghao/tensorlayer) - 研究者およびエンジニア向けのディープラーニングおよび強化学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [TFLearn](https://github.com/tflearn/tflearn) - TensorFlow向けの高レベルAPIを備えたディープラーニングライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [Sonnet](https://github.com/deepmind/sonnet) - TensorFlowベースのニューラルネットワークライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [tensorpack](https://github.com/ppwwyyxx/tensorpack) - TensorFlow上のニューラルネットワーク訓練インターフェース。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [tfdeploy](https://github.com/riga/tfdeploy) - TensorFlowグラフをデプロイし、高速評価とnumpyで動作するTensorFlowなし環境にエクスポート。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream) - TensorFlow ROCm版。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/amd_big.png" alt="Possible to run on AMD GPU">
* [TensorFlow Fold](https://github.com/tensorflow/fold) - TensorFlowにおける動的計算グラフを使ったディープラーニング。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [TensorLight](https://github.com/bsautermeister/tensorlight) - TensorFlow向けの高レベルフレームワーク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [Mesh TensorFlow](https://github.com/tensorflow/mesh) - モデル並列化を容易に。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [Ludwig](https://github.com/uber/ludwig) - コードを書かずに深層学習モデルを訓練・テストできるツールボックス。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">

### JAX
* [JAX](https://github.com/google/jax) - Python+NumPyプログラムの合成可能な変換：微分、ベクトル化、GPU/TPUへのJIT、など。
* [FLAX](https://github.com/google/flax) - JAX向けに柔軟性を重視したニューラルネットワークライブラリ。
* [Optax](https://github.com/google-deepmind/optax) - JAX向けの勾配処理および最適化ライブラリ。

### Keras
* [Keras](https://keras.io) - TensorFlow にのせられた高レベルのニューラルネットワークAPI。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [keras-contrib](https://github.com/keras-team/keras-contrib) - Kerasコミュニティによる貢献。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [Hyperas](https://github.com/maxpumperla/hyperas) - Keras + Hyperopt：便利なハイパーパラメータ設定用のシンプルなラッパー。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [Elephas](https://github.com/maxpumperla/elephas) - Keras と Spark を使って分散深層学習。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [qkeras](https://github.com/google/qkeras) - 量子化深層学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">

<a id="others"></a>
### その他
* [transformers](https://github.com/huggingface/transformers) - PyTorch、TensorFlow、JAX向けの最先端機械学習。 <img height="20" src=" alt="sklearn"> <img height="20" src=" alt="PyTorch based/compatible"> https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png"
* [Tangent](https://github.com/google/tangent) - 純粋Pythonによるソースからソースへのデバッグ可能な導関数。
* [autograd](https://github.com/HIPS/autograd) - NumPyコードの導関数を効率的に計算。
* [Caffe](https://github.com/BVLC/caffe) - 深層学習用の高速オープンフレームワーク。
* [nnabla](https://github.com/sony/nnabla) - ソニーが提供するニューラルネットワークライブラリ。

<a id="automated-machine-learning"></a>
## 自動機械学習
* [auto-sklearn](https://github.com/automl/auto-sklearn) - scikit-learnのエステimatorへの自動化された代替ツール。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Auto-PyTorch](https://github.com/automl/Auto-PyTorch) - PyTorch向けの自動アーキテクチャ探索とハイパーパラメータ最適化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [AutoKeras](https://github.com/keras-team/autokeras) - 深層学習向けの自動機械学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [AutoGluon](https://github.com/awslabs/autogluon) - 画像、テキスト、テーブル、時系列、マルチモーダルデータ向けの自動機械学習。
* [TPOT](https://github.com/rhiever/tpot) - 機械学習パイプラインを遺伝プログラミングで最適化する自動機械学習ツール。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [MLBox](https://github.com/AxeldeRomblay/MLBox) - 強力な自動機械学習Pythonライブラリ。

<a id="natural-language-processing"></a>
## 自然言語処理
* [torchtext](https://github.com/pytorch/text) - テキストおよびNLP用のデータローダーと抽象化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [KerasNLP](https://github.com/keras-team/keras-nlp) - Kerasを用いたモジュラーネイチャルラングュエージプロセッシングワークフロー。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras based/compatible">
* [spaCy](https://spacy.io/) - 産業レベルの自然言語処理。
* [NLTK](https://github.com/nltk/nltk) -  自然言語処理研究開発を支援するモジュール、データセット、チュートリアル。
* [CLTK](https://github.com/cltk/cltk) - クラシカルな言語ツールキット
* [gensim](https://radimrehurek.com/gensim/) - 人間向けのトピックモデル化
* [pyMorfologik](https://github.com/dmirecki/pyMorfologik) - <a href="https://github.com/morfologik/morfologik-stemming">Morfologik</a>.のPythonバインディング
* [skift](https://github.com/shaypal5/skift) - PythonのfastText向けScikit-learnのラッパー。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Phonemizer](https://github.com/bootphon/phonemizer) - 複数言語に対応したシンプルなテキスト-to-フォノメス変換器
* [flair](https://github.com/zalandoresearch/flair) - 最先端NLPを実現する非常にシンプルなフレームワーク

<a id="computer-audition"></a>
## コンピューター聴覚
* [torchaudio](https://github.com/pytorch/audio) - PyTorch向けのオーディオライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [librosa](https://github.com/librosa/librosa) - オーディオおよび音楽分析用のPythonライブラリ
* [Yaafe](https://github.com/Yaafe/Yaafe) - オーディオ特徴量の抽出
* [aubio](https://github.com/aubio/aubio) - オーディオおよび音楽分析用のライブラリ
* [Essentia](https://github.com/MTG/essentia) - オーディオおよび音楽分析、説明、合成用のライブラリ
* [LibXtract](https://github.com/jamiebullock/LibXtract) - シンプルで、ポータブルで、軽量なオーディオ特徴量抽出関数を備えたライブラリ
* [Marsyas](https://github.com/marsyas/marsyas) - オーディオ信号に対する音楽分析、検索、合成
* [muda](https://github.com/bmcfee/muda) - 注記されたオーディオデータを拡張するためのライブラリ
* [madmom](https://github.com/CPJKU/madmom) - オーディオおよび音楽信号処理用のPythonライブラリ

<a id="computer-vision"></a>
## コンピュータービジョン
* [torchvision](https://github.com/pytorch/vision) - コンピュータビジョンに特化したデータセット、変換、モデル。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [PyTorch3D](https://github.com/facebookresearch/pytorch3d) - PyTorch3Dは、FAIRが提供する3Dデータを使った深層学習の再利用可能なコンポーネントのライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [KerasCV](https://github.com/keras-team/keras-cv) - Kerasを使った産業レベルのコンピュータビジョンワークフロー。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="MXNet based">
* [OpenCV](https://github.com/opencv/opencv) - オープンソースコンピュータビジョンライブラリ
* [Decord](https://github.com/dmlc/decord) - 深層学習用の効率的なビデオローダー。スマートなシャッフルを備え、非常に使いやすい。
* [MMEngine](https://github.com/open-mmlab/mmengine) - OpenMMLabによる深層学習モデルの訓練用基礎ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [scikit-image](https://github.com/scikit-image/scikit-image) - 画像処理用SciKit（SciPy向けツールボックス）。
* [imgaug](https://github.com/aleju/imgaug) - 機械学習実験用の画像拡張
* [imgaug_extension](https://github.com/cadenai/imgaug_extension) - imgaugへの追加拡張機能。
* [Augmentor](https://github.com/mdbloice/Augmentor) - 機械学習用のPythonによる画像拡張ライブラリ。
* [albumentations](https://github.com/albu/albumentations) - 高速画像拡張ライブラリおよび他のライブラリを簡単に利用できるラッパー。
* [LAVIS](https://github.com/salesforce/LAVIS) - 言語と視覚の知能を一括で提供するライブラリ。

<a id="time-series"></a>
## 時系列
* [sktime](https://github.com/alan-turing-institute/sktime) - 時系列データを扱う機械学習の統一フレームワーク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [skforecast](https://github.com/JoaquinAmatRodrigo/skforecast) - 機械学習モデルを用いた時系列予測
* [darts](https://github.com/unit8co/darts) - 時系列データの簡単な操作および予測を行うPythonライブラリ。
* [statsforecast](https://github.com/Nixtla/statsforecast) - 統計的および経済モデルを用いた高速予測。
* [mlforecast](https://github.com/Nixtla/mlforecast) - 機械学習に基づくスケーラブル時系列予測。
* [neuralforecast](https://github.com/Nixtla/neuralforecast) - 機械学習に基づくスケーラブル時系列予測。
* [tslearn](https://github.com/rtavenar/tslearn) - 時系列データ専用の機械学習ツールキット。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [tick](https://github.com/X-DataInitiative/tick) - 統計学的学習モジュールで、特に時系列モデルに焦点を当てる。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [greykite](https://github.com/linkedin/greykite) - 柔軟で直感的かつ高速な予測ライブラリの次世代。
* [Prophet](https://github.com/facebook/prophet) - 自動予測プロセス。
* [PyFlux](https://github.com/RJT1990/pyflux) - Python用オープンソース時系列ライブラリ。
* [bayesloop](https://github.com/christophmark/bayesloop) - 時変パラメータモデルの目的関数選択を容易にする確率プログラミングフレームワーク。
* [luminol](https://github.com/linkedin/luminol) - 異常検知および相関分析ライブラリ。
* [dateutil](https://dateutil.readthedocs.io/en/stable/) - 標準datetimeモジュールへの強力な拡張
* [maya](https://github.com/timofurrer/maya) - 文字列のパースやタイムゾーンの変更を非常に容易にします
* [Chaos Genius](https://github.com/chaos-genius/chaos_genius) - 異常検出および原因分析に特化したML駆動の分析エンジン

<a id="reinforcement-learning"></a>
## 強化学習
* [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) - シングルエージェント強化学習環境向けAPI標準、人気のある参照環境および関連ユーティリティ（以前は [Gym](https://github.com/openai/gym)）。
* [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) - マルチエージェント強化学習環境向けAPI標準、人気のある参照環境および関連ユーティリティ。
* [MAgent2](https://github.com/Farama-Foundation/MAgent2) - 大量のエージェントを扱える高性能マルチエージェント環境向けエンジン、および参照環境のセット。
* [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) - OpenAI Baselinesに基づく強化学習アルゴリズムの改善された実装セット。
* [Shimmy](https://github.com/Farama-Foundation/Shimmy) - 人気のある外部強化学習環境向けAPI変換ツール。
* [EnvPool](https://github.com/sail-sg/envpool) - C++ベースの高性能並列環境実行エンジン（ベクトル化環境）：一般強化学習環境向け。
* [RLlib](https://ray.readthedocs.io/en/latest/rllib.html) - スケーラブルな強化学習。
* [Tianshou](https://github.com/thu-ml/tianshou/#comprehensive-functionality) - エレガントなPyTorchベースの強化学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [Acme](https://github.com/google-deepmind/acme) - 強化学習のコンポーネントおよびエージェントを提供するライブラリ。
* [Catalyst-RL](https://github.com/catalyst-team/catalyst-rl) - 強化学習研究向けPyTorchフレームワーク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [d3rlpy](https://github.com/takuseno/d3rlpy) - オフライン強化学習ライブラリ。
* [DI-engine](https://github.com/opendilab/DI-engine) - OpenDILab決定AIエンジン。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorchベース/互換">
* [TF-Agents](https://github.com/tensorflow/agents) - TensorFlowベースの強化学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">
* [TensorForce](https://github.com/reinforceio/tensorforce) - 応用強化学習向けTensorFlowライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">
* [TRFL](https://github.com/deepmind/trfl) - TensorFlow強化学習。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [Dopamine](https://github.com/google/dopamine) - 強化学習アルゴリズムの高速プロトタイピングに特化した研究フレームワーク。
* [keras-rl](https://github.com/keras-rl/keras-rl) - Kerasと互換の強化学習ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [garage](https://github.com/rlworkgroup/garage) - 再現性のある強化学習研究向けツールキット。
* [Horizon](https://github.com/facebookresearch/Horizon) - 応用強化学習向けプラットフォーム。
* [rlpyt](https://github.com/astooke/rlpyt) - PyTorchにおける強化学習。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [cleanrl](https://github.com/vwxyzjn/cleanrl) - 高品質なシングルファイル実装の深層強化学習アルゴリズム（PPO、DQN、C51、DDPG、TD3、SAC、PPG）を、研究者向けの機能で提供。
* [Machin](https://github.com/iffiX/machin) -  PyTorch向けの強化学習ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [SKRL](https://github.com/Toni-SM/skrl) - PyTorchおよびJAX向けのモジュラリティを備えた強化学習ライブラリ。NVIDIA Isaac Gym、Isaac OrbitおよびOmniverse Isaac Gymに対応。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [Imitation](https://github.com/HumanCompatibleAI/imitation) - シミュレーションおよび報酬学習アルゴリズムの、クリーンなPyTorch実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">

<a id="graph-machine-learning"></a>
## グラフ機械学習
* [pytorch_geometric](https://github.com/rusty1s/pytorch_geometric) - PyTorch向けの幾何学的深層学習拡張ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [pytorch_geometric_temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) - PyTorch Geometric向けの時系列拡張ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [PyTorch Geometric Signed Directed](https://github.com/SherylHYX/pytorch_geometric_signed_directed) -  PyTorch Geometric向けの有向／有符号グラフニューラルネットワーク拡張ライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [dgl](https://github.com/dmlc/dgl) - 既存の深層学習フレームワーク上に構築された、グラフ上の深層学習を容易にするPythonパッケージ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/mxnet_big.png" alt="MXNet based">
* [GRAPE](https://github.com/AnacletoLAB/grape/tree/main) - GRAPEは、予測および評価を目的としたRust/Pythonによるグラフ表現学習ライブラリ
* [Spektral](https://github.com/danielegrattarola/spektral) - グラフ上の深層学習。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [StellarGraph](https://github.com/stellargraph/stellargraph) - グラフ上の機械学習。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [Graph Nets](https://github.com/google-deepmind/graph_nets) - TensorFlow上でグラフネットを構築。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">
* [TensorFlow GNN](https://github.com/tensorflow/gnn) - TensorFlowプラットフォーム上でグラフニューラルネットワークを構築するためのライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">
* [Auto Graph Learning](https://github.com/THUMNLab/AutoGL) -グラフ上の機械学習向けの自動機械学習フレームワークおよびツールキット。
* [PyTorch-BigGraph](https://github.com/facebookresearch/PyTorch-BigGraph) - 大規模グラフ構造データから埋め込みを生成。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [Auto Graph Learning](https://github.com/THUMNLab/AutoGL) - グラフ上の機械学習向けの自動機械学習フレームワークおよびツールキット。
* [Karate Club](https://github.com/benedekrozemberczki/karateclub) - グラフ構造データ向けの無教師学習ライブラリ。
* [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) - グラフ構造データのサンプリングを行うためのライブラリ。
* [GreatX](https://github.com/EdisonLeeeee/GreatX) - PyTorchおよびPyTorch Geometric（PyG）をベースとしたグラフの信頼性ツールボックス。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [Jraph](https://github.com/google-deepmind/jraph) - Jax で実装されたグラフニューラルネットワークライブラリ
* [TRL](https://github.com/huggingface/trl) - 強化学習を用いたトランスフォーマー言語モデルの訓練
* [Cleora](https://github.com/BaseModelAI/cleora) - グラフ埋め込みエンジン

<a id="graph-manipulation"></a>
## グラフ操作
* [Networkx](https://github.com/networkx/networkx) - Pythonでのネットワーク解析
* [Rustworkx](https://github.com/Qiskit/rustworkx) - Rustで実装された高性能Pythonグラフライブラリ
* [graph-tool](https://graph-tool.skewed.de/) - グラフ（ネットワーク）の操作および統計解析に用いる効率的なPythonモジュール
* [igraph](https://github.com/igraph/python-igraph) - igraphのPythonインターフェース

<a id="learning-to-rank--recommender-systems"></a>
## ランキング学習と推薦システム
* [LightFM](https://github.com/lyst/lightfm) - LightFMというハイブリッド推薦アルゴリズムのPython実装
* [Spotlight](https://maciejkula.github.io/spotlight/) - PyTorchを用いた深層推薦モデル
* [Surprise](https://github.com/NicolasHug/Surprise) - 推薦システムの構築および分析に用いるPythonのscikit
* [RecBole](https://github.com/RUCAIBox/RecBole) - 統合された、包括的で効率的な推薦ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [allRank](https://github.com/allegro/allRank) - allRankは、PyTorchに基づく学習-to-ランクのニューラルモデルの訓練フレームワーク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [TensorFlow Recommenders](https://github.com/tensorflow/recommenders) - TensorFlowを用いた推薦システムモデルの構築用ライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="Keras compatible">
* [TensorFlow Ranking](https://github.com/tensorflow/ranking) - TensorFlowでの学習-to-ランク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="TensorFlow">

<a id="probabilistic-graphical-models"></a>
## 確率的グラフィカルモデル
* [pomegranate](https://github.com/jmschrei/pomegranate) - Python向けの確率的およびグラフィカルモデル。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [pgmpy](https://github.com/pgmpy/pgmpy) - 確率的グラフィカルモデルを扱うPythonライブラリ
* [pyAgrum](https://agrum.gitlab.io/) - A GRaphical Universal Modeler

<a id="probabilistic-methods"></a>
## 確率的手法
* [pyro](https://github.com/uber/pyro) - PyTorchに基づく柔軟でスケーラブルな深層確率プログラミングライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [PyMC](https://github.com/pymc-devs/pymc) - Pythonでのベイズ的確率モデル
* [ZhuSuan](https://zhusuan.readthedocs.io/en/latest/) - ベイズ深層学習。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [GPflow](https://gpflow.readthedocs.io/en/latest/?badge=latest) - TensorFlowにおけるガウス過程。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [InferPy](https://github.com/PGM-Lab/InferPy) - 深層確率モデルの簡単な実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [PyStan](https://github.com/stan-dev/pystan) - ノーウィンターサンプラーを用いたベイズ推論（Pythonインターフェース）.
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes) - scikit-learn APIを用いたベイズ機械学習用Pythonパッケージ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [skpro](https://github.com/alan-turing-institute/skpro) - 確率モデルにおける監督型ドメイン無関係予測フレームワーク（[The Alan Turing Institute](https://www.turing.ac.uk/)による）。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [PyVarInf](https://github.com/ctallec/pyvarinf) - PyTorchベース/互換性のあるベイズ深層学習と変分推論。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [emcee](https://github.com/dfm/emcee) - affine不変MCMC用のPythonのアンサンブルサンプリングツールキット。
* [hsmmlearn](https://github.com/jvkersch/hsmmlearn) - 明示的な期間を持つ隠れた半マルコフモデル（HSMM）のためのライブラリ。
* [pyhsmm](https://github.com/mattjj/pyhsmm) - HSMMおよびHMMにおけるベイズ推論。
* [GPyTorch](https://github.com/cornellius-gp/gpytorch) - PyTorchにおけるガウス過程の高効率かつモジュラリティの高い実装。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite) - CRFsuite向けscikit-learn風API。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">

<a id="model-explanation"></a>
## モデルの説明
* [dalex](https://github.com/ModelOriented/DALEX) - モデル無関係な探索と説明用の言語（）。<img height="20" src=" alt="sklearn"><img height="20" src=" alt="R inspired/ported lib"> https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/R_big.png"
* [Shapley](https://github.com/benedekrozemberczki/shapley) - 機械学習アンサンブルにおける分類器の価値をデータ駆動で評価するフレームワーク。
* [Alibi](https://github.com/SeldonIO/alibi) - 機械学習モデルの監視および説明に用いるアルゴリズム。
* [anchor](https://github.com/marcotcr/anchor) - 論文『High-Precision Model-Agnostic Explanations』のコード。
* [aequitas](https://github.com/dssg/aequitas) - バイアスと公平性の審査ツールキット。
* [Contrastive Explanation](https://github.com/MarcelRobeer/ContrastiveExplanation) - 対照的説明（Foil Trees）。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [yellowbrick](https://github.com/DistrictDataLabs/yellowbrick) - 機械学習モデル選定を支援する可視化分析および診断ツール。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [scikit-plot](https://github.com/reiinakano/scikit-plot) - scikit-learnオブジェクトにプロット機能を追加するための直感的なライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [shap](https://github.com/slundberg/shap) - 任意の機械学習モデルの出力を説明するための統一アプローチ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [InterpretML](https://github.com/interpretml/interpret) - InterpretMLは、一般化加算モデル（GAMs）に基づく現代的な完全に解釈可能な機械学習モデルである説明可能なブーストマシン（EBM）を実装しています。このオープンソースパッケージは、EBMやその他のガラスボックスモデル、ブラックボックス説明についても可視化ツールを提供しています。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [ELI5](https://github.com/TeamHG-Memex/eli5) - 機械学習分類器のデバッグ／確認やその予測を説明するためのライブラリです。
* [Lime](https://github.com/marcotcr/lime) - 任意の機械学習分類器の予測を説明します。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [FairML](https://github.com/adebayoj/fairml) - FairMLは、機械学習モデルにおけるバイアスを審査するPython用ツールボックスです。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [L2X](https://github.com/Jianbo-Lab/L2X) - 論文『Learning to Explain: An Information-Theoretic Perspective on Model Interpretation』における実験を再現するためのコードです。
* [PDPbox](https://github.com/SauceCat/PDPbox) - 部分依存プロットツールボックス。
* [PyCEbox](https://github.com/AustinRochford/PyCEbox) - Pythonによる個別条件期待プロットツールボックス。
* [Skater](https://github.com/datascienceinc/Skater) - 機械学習モデルの解釈を支援するPythonライブラリ。
* [model-analysis](https://github.com/tensorflow/model-analysis) - TensorFlow向けのモデル分析ツール。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [themis-ml](https://github.com/cosmicBboy/themis-ml) - バイアスを考慮した機械学習アルゴリズムを実装するライブラリ。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [treeinterpreter](https://github.com/andosa/treeinterpreter) - scikit-learnの決定木およびランダムフォレストの予測を解釈します。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [AI Explainability 360](https://github.com/IBM/AIX360) - データおよび機械学習モデルの解釈可能性と説明可能性。
* [Auralisation](https://github.com/keunwoochoi/Auralisation) - CNN（音声）で学習された特徴の聴覚化。
* [CapsNet-Visualization](https://github.com/bourdakos1/CapsNet-Visualization) - CapsNetの層を可視化して、その動作をよりよく理解するための可視化。
* [lucid](https://github.com/tensorflow/lucid) - ニューラルネットワークの解釈性に関する研究に用いるインフラとツールのコレクション。
* [Netron](https://github.com/lutzroeder/Netron) - 深層学習および機械学習モデルの可視化ツール（Pythonコードは不要で、主なPython深層学習フレームワークからのモデルを可視化）。
* [FlashLight](https://github.com/dlguys/flashlight) - あなたのニューラルネットワーク向けの可視化ツール。
* [tensorboard-pytorch](https://github.com/lanpa/tensorboard-pytorch) - PyTorch（およびchainer, mxnet, numpy, ...）向けのTensorboard。

<a id="genetic-programming"></a>
## 遺伝的プログラミング
* [gplearn](https://github.com/trevorstephens/gplearn) - Pythonによる遺伝プログラミング。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [PyGAD](https://github.com/ahmedfgad/GeneticAlgorithmPython) - Pythonによる遺伝アルゴリズム。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/keras_big.png" alt="keras">
* [DEAP](https://github.com/DEAP/deap) - Pythonによる分散型進化アルゴリズム
* [karoo_gp](https://github.com/kstaats/karoo_gp) - PythonでGPUをサポートした遺伝プログラミングプラットフォーム。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [monkeys](https://github.com/hchasestevens/monkeys) - Pythonにおける強制型タイプの遺伝プログラミングフレームワーク。
* [sklearn-genetic](https://github.com/manuel-calzolari/sklearn-genetic) - scikit-learn向けの遺伝的特徴選択モジュール。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">

<a name="opt"></a>
<a id="optimization"></a>
## 最適化
* [Optuna](https://github.com/optuna/optuna) - ハイパーパラメータ最適化フレームワーク。
* [pymoo](https://github.com/anyoptimization/pymoo) - Pythonにおける多目的最適化。
* [pycma](https://github.com/CMA-ES/pycma?tab=readme-ov-file) - CMA-ESのPython実装。
* [Spearmint](https://github.com/HIPS/Spearmint) - ベイズ最適化。
* [BoTorch](https://github.com/pytorch/botorch) - PyTorchにおけるベイズ最適化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pytorch_big2.png" alt="PyTorch based/compatible">
* [scikit-opt](https://github.com/guofei9987/scikit-opt) - 最適化用のヒューリスティックアルゴリズム。
* [sklearn-genetic-opt](https://github.com/rodrigo-arenas/Sklearn-genetic-opt) - 進化アルゴリズムを用いたハイパーパラメータ調整および特徴選択。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [SMAC3](https://github.com/automl/SMAC3) - 順序モデルベースアルゴリズム構成。
* [Optunity](https://github.com/claesenm/optunity) - ハイパーパラメータ調整用の多様な最適化ライブラリを含むライブラリ。
* [hyperopt](https://github.com/hyperopt/hyperopt) - Pythonにおける分散非同期ハイパーパラメータ最適化。
* [hyperopt-sklearn](https://github.com/hyperopt/hyperopt-sklearn) - sklearn向けのハイパーパラメータ最適化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [sklearn-deap](https://github.com/rsteca/sklearn-deap) - scikit-learnでのグリッドサーチ代わりに進化アルゴリズムを使用。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [sigopt_sklearn](https://github.com/sigopt/sigopt_sklearn) - scikit-learnメソッドへのSigOptのラッパー。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Bayesian Optimization](https://github.com/fmfn/BayesianOptimization) - ガウスプロセスを用いたグローバル最適化のPython実装。
* [SafeOpt](https://github.com/befelix/SafeOpt) - 安全なベイズ最適化。
* [scikit-optimize](https://github.com/scikit-optimize/scikit-optimize) - 順序モデルベース最適化と `scipy.optimize`インターフェース。
* [Solid](https://github.com/100/Solid) - Pythonで書かれた包括的な勾配なし最適化フレームワーク。
* [PySwarms](https://github.com/ljvmiranda921/pyswarms) - 粒子 swarm最適化におけるPython用研究ツールキット
* [Platypus](https://github.com/Project-Platypus/Platypus) - マルチオブジェクト最適化向け無料オープンソースPythonライブラリ
* [GPflowOpt](https://github.com/GPflow/GPflowOpt) - GPflowを用いたベイズ最適化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [POT](https://github.com/rflamary/POT) - Pythonの最適輸送ライブラリ
* [Talos](https://github.com/autonomio/talos) - Kerasモデル向けのハイパーパラメータ最適化
* [nlopt](https://github.com/stevengj/nlopt) - 非線形最適化（グローバルおよびローカル、制約付きまたは制約なし）用ライブラリ
* [OR-Tools](https://developers.google.com/optimization) - Googleが提供するオープンソース最適化ソフトウェアセット。SCIP、GLPK、GLOP、CP-SAT、CPLEX、Gurobiの6つのソルバーに統一されたプログラミングインターフェースを提供

<a id="feature-engineering"></a>
## 特徴量エンジニアリング

<a id="general"></a>
### 全般
* [Featuretools](https://github.com/Featuretools/featuretools) - 自動特徴エンジニアリング
* [Feature Engine](https://github.com/feature-engine/feature_engine) - sklearnに類似した機能を持つ特徴エンジニアリングパッケージ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [OpenFE](https://github.com/IIIS-Li-Group/OpenFE) - 専門レベルのパフォーマンスを備えた自動特徴生成
* [skl-groups](https://github.com/dougalsutherland/skl-groups) - set/"group"ベースの特徴に作用するscikit-learn拡張。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Feature Forge](https://github.com/machinalis/featureforge) - 機械学習特徴の作成とテストに用いるツールセット。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [few](https://github.com/lacava/few) - sklearnとの互換性を持つ特徴エンジニアリングのラッパー。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [scikit-mdr](https://github.com/EpistasisLab/scikit-mdr) - 特徴構築用のマルチファクターディメンシオナリリダクション（MDR）のscikit-learn互換版。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [tsfresh](https://github.com/blue-yonder/tsfresh) - 時系列から関連性のある特徴を自動抽出。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [dirty_cat](https://github.com/dirty-cat/dirty_cat) - 汚れたテーブルデータ（特に分類および回帰用の文字ベース変数）上の機械学習。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [NitroFE](https://github.com/NITRO-AI/NitroFE) - 移動窓特徴。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [sk-transformer](https://github.com/chrislemke/sk-transformers) - さまざまなpandasおよびscikit-learn互換の変換器を収録した、あらゆる前処理および特徴エンジニアリングステップに適用可能なツールセット。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [tubular](https://github.com/azukds/tubular) - [narwhals]( https://github.com/narwhals-dev/narwhals)で記述されたscikit-learn互換の変換器のコレクション。polarsまたはpandasの入力を受け取り、内部で選択されたライブラリを使用。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"><img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">


<a id="feature-selection"></a>
### 特徴選択
* [scikit-feature](https://github.com/jundongl/scikit-feature) - Pythonにおける特徴選択リポジトリ
* [boruta_py](https://github.com/scikit-learn-contrib/boruta_py) - ボルタのすべての関連特徴選択手法の実装。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [BoostARoota](https://github.com/chasedehan/BoostARoota) - 高速なxgboost特徴選択アルゴリズム。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate) - ReBATE、機械学習向けリラフベースの特徴選択アルゴリズムのセットをPythonでscikit-learnと互換性を持つように実装。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [zoofs](https://github.com/jaswinder9051998/zoofs) - 進化アルゴリズムに基づいた特徴選択ライブラリ。

<a id="visualization"></a>
## 可視化
<a id="general-purposes"></a>
### 汎用
* [Matplotlib](https://github.com/matplotlib/matplotlib) - Pythonによるプロット機能。
* [seaborn](https://github.com/mwaskom/seaborn) - matplotlibを用いた統計データ可視化。
* [prettyplotlib](https://github.com/olgabot/prettyplotlib) - データ可視化を簡単に美しいmatplotlibプロットを作成。
* [python-ternary](https://github.com/marcharper/python-ternary) - matplotlibを用いたPythonの三元プロットライブラリ。
* [missingno](https://github.com/ResidentMario/missingno) - Pythonの欠損データ可視化モジュール。
* [chartify](https://github.com/spotify/chartify/) - データサイエンティストが簡単にチャートを作成できるPythonライブラリ。
* [physt](https://github.com/janpipek/physt) - 改善されたヒストグラム。
<a id="interactive-plots"></a>
### インタラクティブプロット
* [animatplot](https://github.com/t-makaro/animatplot) - matplotlibに基づいたプロットアニメーション用Pythonパッケージ。
* [plotly](https://plot.ly/python/) - インタラクティブかつ出版品質のグラフを生成するPythonライブラリ。
* [Bokeh](https://github.com/bokeh/bokeh) - Python用のインタラクティブなウェブプロット
* [Altair](https://altair-viz.github.io/) - コード内で多くのデータ変換を簡単に実行できる宣言型統計可視化ライブラリ。
* [bqplot](https://github.com/bqplot/bqplot) - IPython/Jupyterノートブック向けプロットライブラリ
* [pyecharts](https://github.com/pyecharts/pyecharts) - [Echarts](https://github.com/apache/echarts)から移行した、チャートおよび可視化ライブラリをPythonのインタラクティブ可視化ライブラリに。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pyecharts.png" alt="pyecharts"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/echarts.png" alt="echarts">
<a id="map"></a>
### 地図
* [folium](https://python-visualization.github.io/folium/quickstart.html#Getting-Started) - インタラクティブなオープンストリートマップ上でデータを可視化するための簡単な手段。
* [geemap](https://github.com/giswqs/geemap) - Google Earth Engine (GEE)を用いたインタラクティブマッピング用Pythonパッケージ。
<a id="automatic-plotting"></a>
### 自動プロット
* [HoloViews](https://github.com/ioam/holoviews) - プロットするのをやめて、データに注釈をつけて、データが自ら可視化できるようにする。
* [AutoViz](https://github.com/AutoViML/AutoViz): 1行のコードでデータを自動的に可視化（機械学習に最適）
* [SweetViz](https://github.com/fbdesignpro/sweetviz): データセット、ターゲット値、関連性を1行のコードで可視化・比較

### NLP
* [pyLDAvis](https://github.com/bmabey/pyLDAvis): インタラクティブなトピックモデルの可視化

<a id="deployment"></a>
## デプロイ
* [fastapi](https://fastapi.tiangolo.com/) - 現代的で高速（高性能）なPythonによるAPI開発用ウェブフレームワーク
* [streamlit](https://www.streamlit.io/) - 機械学習モデルのデプロイを簡単にする
* [streamsync](https://github.com/streamsync-cloud/streamsync) - フロントエンドはノーコード、バックエンドはPython。データアプリを作成するオープンソースフレームワーク。
* [gradio](https://github.com/gradio-app/gradio) - Pythonで機械学習モデルのUIを作成するのに3分で可能。
* [Vizro](https://github.com/mckinsey/vizro) - モジュラリティを備えたデータ可視化アプリケーションを作成するためのツールキット。
* [datapane](https://datapane.com/) - スクリプトやノートブックをインタラクティブなレポートに変換するためのAPIのコレクション。
* [binder](https://mybinder.org/) - Jupyterノートブックの共有と実行を可能にする
* [Deepnote](https://github.com/deepnote/deepnote) - DeepnoteはJupyterへのAI中心設計のドロップインリプレイス。スリムなUI、新しいブロック、ネイティブなデータ統合を備え、Python、R、SQLを好きなIDEでローカルで使用し、リアルタイムコラボレーション、Deepnoteアグエント、デプロイ可能なデータアプリにスケーリング可能。


<a id="statistics"></a>
## 統計
* [pandas_summary](https://github.com/mouradmourafiq/pandas-summary) - pandasデータフレームのdescribe関数への拡張。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [Pandas Profiling](https://github.com/pandas-profiling/pandas-profiling) - pandasデータフレームオブジェクトからHTMLプロファイリングレポートを作成。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [statsmodels](https://github.com/statsmodels/statsmodels) - Pythonでの統計モデルと経済計量学。
* [stockstats](https://github.com/jealous/stockstats) - インラインの株価統計・指標サポートを備えたwrapper ``StockDataFrame`` based on the ``pandas.DataFrame``を提供。
* [weightedcalcs](https://github.com/jsvine/weightedcalcs) - pandasベースのユーティリティで重み付き平均、中央値、分布、標準偏差などを計算。
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs) - ペアワイズマルチプル比較のポストホコテスト。
* [Alphalens](https://github.com/quantopian/alphalens) - 予測（アルファ）株式ファクターのパフォーマンス分析


<a id="data-manipulation"></a>
## データ操作

<a id="data-frames"></a>
### データフレーム
* [pandas](https://pandas.pydata.org/pandas-docs/stable/) - 強力なPythonデータ分析ツールキット。
* [polars](https://github.com/pola-rs/polars) - 高速かつマルチスレッド、ハイブリッドアウトオブコアのデータフレームライブラリ。
* [Arctic](https://github.com/manahl/arctic) - 時系列およびティックデータ用の高性能データストア。
* [datatable](https://github.com/h2oai/datatable) - Python用のData.table。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/R_big.png" alt="R inspired/ported lib">
* [pandas_profiling](https://github.com/pandas-profiling/pandas-profiling) - pandas DataFrameオブジェクトからHTMLプロファイリングレポートを作成
* [cuDF](https://github.com/rapidsai/cudf) - GPU DataFrameライブラリ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/gpu_big.png" alt="GPU accelerated">
* [blaze](https://github.com/blaze/blaze) - NumPyおよびpandasとのBig Dataインターフェース。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [pandasql](https://github.com/yhat/pandasql) -  SQL構文を使ってpandas DataFramesをクエリできる。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [pandas-gbq](https://github.com/pydata/pandas-gbq) - pandasとGoogle BigQueryの連携。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [xpandas](https://github.com/alan-turing-institute/xpandas) - 1次元・2次元データコンテナと、データ分析用のTransformers機能を持つ [The Alan Turing Institute](https://www.turing.ac.uk/)。
* [pysparkling](https://github.com/svenkreiss/pysparkling) - Apache SparkのRDDおよびDStreamインターフェースの純粋Python実装。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/spark_big.png" alt="Apache Spark based">
* [modin](https://github.com/modin-project/modin) - 1行のコードを変更することでpandasワークフローを高速化。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [swifter](https://github.com/jmcarpenter2/swifter) - pandasデータフレームまたはシリーズに対して、最も高速な方法で任意の関数を適用するパッケージ。
* [pandas-log](https://github.com/eyaltrabelsi/pandas-log) - 基本的なpandas操作に関するフィードバックを提供し、ビジネスロジックおよびパフォーマンス問題を検出するパッケージ。
* [vaex](https://github.com/vaexio/vaex) - Pythonにおけるアウトオブコアデータフレーム。10億行分の大きなテーブルデータを秒単位で視覚化・探索可能。
* [xarray](https://github.com/pydata/xarray) - Xarrayは、NumPyおよびpandasの優れた特徴を組み合わせ、数値軸ラベルに名前付き次元を追加することで、より直感的で簡潔かつ誤りの少ないインデックスルーチンを提供。

<a id="pipelines"></a>
### パイプライン
* [pdpipe](https://github.com/shaypal5/pdpipe) - pandasデータフレーム向けのSasyパイプライン。
* [SSPipe](https://sspipe.github.io/) - Pythonのパイプ（|）演算子。データフレームおよびNumpy、Pytorchに対応。
* [pandas-ply](https://github.com/coursera/pandas-ply) - pandas向けの関数型データ操作。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [Dplython](https://github.com/dodger487/dplython) - Python向けのDplyr。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/R_big.png" alt="R inspired/ported lib">
* [sklearn-pandas](https://github.com/scikit-learn-contrib/sklearn-pandas) - sklearnとのpandas統合。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn"> <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [Dataset](https://github.com/analysiscenter/dataset) - ランダムまたは順次バッチデータの扱いを便利にし、データ処理を定義できる。
* [pyjanitor](https://github.com/ericmjl/pyjanitor) - データクリーニング用のシンプルなAPI。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [meza](https://github.com/reubano/meza) - テーブルデータ処理用のPythonツールキット。
* [Prodmodel](https://github.com/prodmodel/prodmodel) - データサイエンスパイプライン向けのビルドシステム
* [dopanda](https://github.com/dovpanda-dev/dovpanda) -  pandasを分析環境で使う際のヒントとアドバイス。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [Hamilton](https://github.com/DAGWorks-Inc/hamilton) - ラズリ評価されたPython関数の流れで指定された有向無サイクルグラフを適用するデータフレーム生成用マイクロフレームワーク

<a id="data-centric-ai"></a>
### データ中心AI
* [cleanlab](https://github.com/cleanlab/cleanlab) - 実際の世界の汚れたデータとラベルを扱うデータ中心AIの標準パッケージ。データ品質と機械学習
* [snorkel](https://github.com/snorkel-team/snorkel) - 弱監督で訓練データを迅速に生成するシステム
* [dataprep](https://github.com/sfu-db/dataprep) - Pythonで数行のコードでデータを収集・クリーンアップ・可視化

<a id="synthetic-data"></a>
### 合成データ

* [ydata-synthetic](https://github.com/ydataai/ydata-synthetic) - 最先端の生成モデルを活用した合成テーブルデータおよび時系列データ生成パッケージ。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">

<a id="distributed-computing"></a>
## 分散コンピューティング
* [Horovod](https://github.com/uber/horovod) - TensorFlow、Keras、PyTorch、Apache MXNet向けの分散トレーニングフレームワーク。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/tf_big2.png" alt="sklearn">
* [PySpark](https://spark.apache.org/docs/0.9.0/python-programming-guide.html) - PythonにApache Sparkのプログラミングモデルを露出。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/spark_big.png" alt="Apache Spark based">
* [Veles](https://github.com/Samsung/veles) - 分散型機械学習プラットフォーム
* [Jubatus](https://github.com/jubatus/jubatus) - 分散型オンライン機械学習向けのフレームワークおよびライブラリ
* [DMTK](https://github.com/Microsoft/DMTK) - マイクロソフトの分散機械学習ツールキット
* [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) - PArallel Distributed Deep LEarning
* [dask-ml](https://github.com/dask/dask-ml) - 分散型および並列型機械学習。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [Distributed](https://github.com/dask/distributed) - Pythonでの分散計算

<a id="experimentation"></a>
## 実験管理
* [mlflow](https://github.com/mlflow/mlflow) - 機械学習ライフサイクル向けオープンソースプラットフォーム
* [Neptune](https://neptune.ai) - 軽量な機械学習実験のトラッキング、結果可視化、管理ツール
* [dvc](https://github.com/iterative/dvc) - データバージョン制御 | データとモデル向けGit | ML実験管理
* [envd](https://github.com/tensorchord/envd) - 🏕️ データサイエンスおよびAI/MLエンジニアリングチーム向けの機械学習開発環境
* [Sacred](https://github.com/IDSIA/sacred) - 実験の設定、整理、ログ記録、再現を支援するツール
* [Ax](https://github.com/facebook/Ax) - アダプティブな実験プラットフォーム。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">

<a id="data-validation"></a>
## データ検証
* [great_expectations](https://github.com/great-expectations/great_expectations) - データから期待できる内容を常に把握できる。
* [pandera](https://github.com/unionai-oss/pandera) - 軽量で柔軟かつ表現力の高い統計データテストライブラリ。
* [deepchecks](https://github.com/deepchecks/deepchecks) - モデル開発、デプロイ、プロダクション中にMLモデルおよびデータの検証とテスト。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [evidently](https://github.com/evidentlyai/evidently) - 検証からプロダクションまでMLモデルの評価と監視。
* [TensorFlow Data Validation](https://github.com/tensorflow/data-validation) - 機械学習データの探索および検証に用いるライブラリ。
* [DataComPy](https://github.com/capitalone/datacompy)- Pandas、Polars、Sparkのデータフレームを比較するライブラリ。統計情報を提供し、マッチ精度を調整できる。

<a id="evaluation"></a>
## 評価
* [recmetrics](https://github.com/statisticianinstilettos/recmetrics) - 推薦システムの評価に使えるメトリクスとプロットのライブラリ。
* [Metrics](https://github.com/benhamner/Metrics) - 機械学習評価メトリクス。
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation) - モデル評価を簡単に行う：プロット、テーブル、マーカード報告書。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/sklearn_big.png" alt="sklearn">
* [AI Fairness 360](https://github.com/IBM/AIF360) - データセットおよびMLモデルの公平性メトリクス、説明、データセットおよびモデルにおけるバイアスを軽減するアルゴリズム。
* [alibi-detect](https://github.com/SeldonIO/alibi-detect) - 異常値、敵対的行動、ドリフト検出用アルゴリズム。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/alibi-detect.png" alt="sklearn">

<a id="computations"></a>
## 計算処理
* [NumPy](https://numpy.org/) - Pythonで科学計算を行うための基本パッケージ
* [Dask](https://github.com/dask/dask) - タスクスケジューリングによる並列計算。 <img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [bottleneck](https://github.com/kwgoodman/bottleneck) - Cで書かれた高速NumPy配列関数。
* [CuPy](https://github.com/cupy/cupy) - NumPyに類似したAPIをCUDAで加速したものです。
* [scikit-tensor](https://github.com/mnick/scikit-tensor) - Pythonによる多線形代数およびテンソル分解ライブラリ。
* [numdifftools](https://github.com/pbrod/numdifftools) - 1変数または複数変数における自動数値微分問題を解決。
* [quaternion](https://github.com/moble/quaternion) - NumPyに四元数の組み込みサポートを追加。
* [adaptive](https://github.com/python-adaptive/adaptive) - 数学関数のアダプティブかつ並列サンプリングに用いるツール。
* [NumExpr](https://github.com/pydata/numexpr) - NumPy用の高速数値式評価器。中間結果のメモリ割り当てを回避する統合コンピューティング仮想マシンを備え、計算を高速化。

<a id="web-scraping"></a>
## ウェブスクレイピング
* [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): 静的ウェブサイトをスクレイピングする初心者向けで最も簡単なライブラリ
* [Scrapy](https://scrapy.org/): 高速かつ拡張性の高いスクレイピングライブラリ。コア部分に触れないでルールを書くことができ、カスタマイズされたスクレイパーを作成可能
* [Selenium](https://selenium-python.readthedocs.io/installation.html#introduction): Selenium Python API を使って、実際のユーザーが使うように直感的に Selenium WebDriver のすべての機能にアクセス
* [Pattern](https://github.com/clips/pattern): Google、Twitter、Wikipediaなどの確立されたウェブサイト向けの高レベルスクレイピング。またNLP、機械学習アルゴリズム、可視化機能も備えている
* [twitterscraper](https://github.com/taspinar/twitterscraper): Twitterを効率的にスクレイピングするライブラリ

<a id="spatial-analysis"></a>
## 空間解析
* [GeoPandas](https://github.com/geopandas/geopandas) - 地理データ用のPythonツール。<img height="20" src="https://raw.githubusercontent.com/krzjoa/awesome-python-data-science/6612257f3e38af232bd08eef25ffc53b92c1b72d/img/pandas_big.png" alt="pandas compatible">
* [PySal](https://github.com/pysal/pysal) - Python空間分析ライブラリ

<a id="quantum-computing"></a>
## 量子コンピューティング
* [qiskit](https://github.com/Qiskit/qiskit) - Qiskitは、回路、アルゴリズム、アプリケーションモジュールレベルで量子コンピュータを扱うためのオープンソースSDK
* [cirq](https://github.com/quantumlib/Cirq) - Noisy Intermediate Scale Quantum (NISQ)回路の作成、編集、呼び出しを行うPythonフレームワーク
* [PennyLane](https://github.com/XanaduAI/pennylane) - 量子機械学習、自動微分、ハイブリッド量子-クラシカル計算の最適化
* [QML](https://github.com/qmlcode/qml) - 量子機械学習用のPythonツールキット

<a id="conversion"></a>
## 変換
* [sklearn-porter](https://github.com/nok/sklearn-porter) - 学習済みscikit-learnの推定器をC、Java、JavaScriptなどにトランスパイル
* [ONNX](https://github.com/onnx/onnx) - オープンニューラルネットワーク交換フォーマット
* [MMdnn](https://github.com/Microsoft/MMdnn) -  異なるディープラーニングフレームワーク間のユーザーが相互作用を支援するツールセット
* [treelite](https://github.com/dmlc/treelite) - 決定木フォレスト用のユニバーサルモデル交換およびシリアライズフォーマット

<a id="contributing"></a>
## コントリビューション
Contributions are welcome! :sunglasses: </br>
Read the <a href=https://github.com/krzjoa/awesome-python-datascience/blob/master/CONTRIBUTING.md>contribution guideline</a>.

<a id="license"></a>
## ライセンス
This work is licensed under the Creative Commons Attribution 4.0 International License - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
