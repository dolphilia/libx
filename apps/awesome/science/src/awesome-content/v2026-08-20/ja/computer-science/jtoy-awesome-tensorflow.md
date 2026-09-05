---
title: "Awesome TensorFlow"
description: "TensorFlowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-jtoy-awesome-tensorflow-readme-md"
---

# Awesome TensorFlow

TensorFlowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次


- [チュートリアル](#github-tutorials)
- [モデル／プロジェクト](#github-projects)
- [TensorFlow採用事例](#github-powered-by)
- [ライブラリ](#libraries)
- [ツール／ユーティリティ](#tools-utils)
- [動画](#video)
- [論文](#papers)
- [ブログ記事](#blogs)
- [コミュニティ](#community)
- [書籍](#books)




<a name="github-tutorials" />

## チュートリアル

* [TensorFlow Tutorial 1](https://github.com/pkmital/tensorflow_tutorials) - TensorFlow の基礎から少し興味深い応用まで。
* [TensorFlow Tutorial 2](https://github.com/nlintz/TensorFlow-Tutorials) - Google の TensorFlow を基盤とする深層学習入門。Newmu の Theano チュートリアルを直接移植。
* [TensorFlow Tutorial 3](https://github.com/Hvass-Labs/TensorFlow-Tutorials) - 詳細に文書化されたコードと YouTube 動画を備えた、深層学習と TensorFlow の初心者向けチュートリアル。
* [TensorFlow Examples](https://github.com/aymericdamien/TensorFlow-Examples) - 初心者向け TensorFlow チュートリアルとコード例。
* [Sungjoon's TensorFlow-101](https://github.com/sjchoi86/Tensorflow-101) - Python と Jupyter Notebook で書かれた TensorFlow チュートリアル。
* [Terry Um’s TensorFlow Exercises](https://github.com/terryum/TensorFlow_Exercises) - ほかの TensorFlow サンプルのコードを再作成。
* [Raspberry Pi 3へのTensorFlow導入](https://github.com/samjabrahams/tensorflow-on-raspberry-pi) - Raspberry Pi 上で適切にコンパイル・動作する TensorFlow。
* [時系列の分類](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) - 携帯電話のセンサーデータに LSTM を使う TensorFlow の再帰型ニューラルネットワーク分類。
* [AndroidでTensorFlowを始める](https://omid.al/posts/2017-02-20-Tutorial-Build-Your-First-Tensorflow-Android-App.html) - 最初の TensorFlow Android アプリを構築。
* [時系列の予測](https://github.com/guillaume-chevalier/seq2seq-signal-prediction) - このアーキテクチャが持つ幅広い可能性への入門として、単純なデータセットで seq2seq モデルを使う方法を学びます。
* [Single Image Random Dot Stereograms](https://github.com/Mazecreator/TensorFlow-SIRDS) - SIRDS は3Dデータを2D画像で表現する方法。遠近法による隠線のない Waterfall Plot 形式で科学データを表示できます。
* [CS20 SI: TensorFlow for DeepLearning Research](http://web.stanford.edu/class/cs20si/syllabus.html) - 2017年の Stanford TensorFlow 講座 - [シラバス](http://web.stanford.edu/class/cs20si/syllabus.html) - [非公式動画](https://youtu.be/g-EvyKpZjmQ?list=PLSPPwKHXGS2110rEaNH7amFGmaD5hsObs)
* [TensorFlow World](https://github.com/astorfi/TensorFlow-World) - 詳細な文書を備えた、簡潔ですぐ使える TensorFlow チュートリアル。
* [Effective Tensorflow](https://github.com/vahidk/EffectiveTensorflow) - TensorFlow の How-to とベストプラクティス。基礎から高度なトピックまで扱います。
* [TensorLayer](http://tensorlayer.readthedocs.io/en/latest/user/tutorial.html) - TensorFlow 公式チュートリアルのモジュール式実装（[中国語](https://tensorlayercn.readthedocs.io/zh/latest/user/tutorial.html)）。
* [Tensorflow Estimator APIを理解する](https://www.lighttag.io/blog/tensorflow-estimator-api/) Estimator API の概念、利用時期、利用理由の概要。
* [Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning](https://www.coursera.org/learn/introduction-tensorflow) - Coursera が提供する TensorFlow 入門。
* [Convolutional Neural Networks in TensorFlow](https://www.coursera.org/learn/convolutional-neural-networks-tensorflow) - Coursera が提供する TensorFlow の畳み込みニューラルネットワーク講座。
* [TensorLayerX](https://tensorlayerx.readthedocs.io/en/latest/index.html#user-guide) - TensorFlow を PyTorch のように使用（[APIドキュメント](https://tensorlayerx.readthedocs.io/en/latest/index.html#)）。

<a name="github-projects" />

## モデル／プロジェクト

* [Tensorflow-Project-Template](https://github.com/Mrgemy95/Tensorflow-Project-Template) - TensorFlow プロジェクト向けのシンプルで優れた設計のテンプレート。
* [Domain Transfer Network](https://github.com/yunjey/dtn-tensorflow) - 教師なし Cross-Domain Image Generation の実装。
* [Show, Attend and Tell](https://github.com/yunjey/show_attend_and_tell) - Attention ベースの Image Caption Generator。
* [Neural Style](https://github.com/cysmith/neural-style-tf) Neural Styleの実装。
* [SRGAN](https://github.com/tensorlayer/srgan) - Generative Adversarial Network を使った写実的な単一画像超解像。
* [Pretty Tensor](https://github.com/google/prettytensor) - 高水準の Builder API を提供。
* [Neural Style](https://github.com/anishathalye/neural-style) - 神経スタイルの実装
* [AlexNet3D](https://github.com/denti/AlexNet3D) - AlexNet3D の実装。単純な AlexNet モデルを3D畳み込み層（conv3d）で構成。
* [TensorFlow White Paper Notes](https://github.com/samjabrahams/tensorflow-white-paper-notes) - TensorFlow White Paper の注釈・要約、SVG図、ドキュメントリンク。
* [NeuralArt](https://github.com/ckmarkoh/neuralart_tensorflow) - A Neural Algorithm of Artistic Style の実装。
* [Generative Handwriting Demo using TensorFlow](https://github.com/hardmaru/write-rnn-tensorflow) - Alex Graves の論文にあるランダム手書き生成部分の実装試行。
* [Neural Turing Machine in TensorFlow](https://github.com/carpedm20/NTM-tensorflow) - Neural Turing Machine の実装。
* [GoogleNet Convolutional Neural Network Groups Movie Scenes By Setting](https://github.com/agermanidis/thingscoop) - 動画に現れる物体、場所などに基づいて検索、絞り込み、説明を行います。
* [TensorFlowによるShakespeare文体と現代英語間のニューラル機械翻訳](https://github.com/tokestermw/tensorflow-shakespeare) - 現代英語から Shakespeare 文体へ、またはその逆へ変換する単一言語翻訳。
* [Chatbot](https://github.com/Conchylicultor/DeepQA) - [「A neural conversational model」](http://arxiv.org/abs/1506.05869)の実装。
* [Seq2seq-Chatbot](https://github.com/tensorlayer/seq2seq-chatbot) - 200行のコードによる Chatbot。
* [DCGAN](https://github.com/tensorlayer/dcgan) - Deep Convolutional Generative Adversarial Networks。
* [GAN-CLS](https://github.com/zsdonghao/text-to-image) - テキストから画像を生成する Generative Adversarial Synthesis。
* [im2im](https://github.com/zsdonghao/Unsup-Im2Im) - Generative Adversarial Network による教師なし Image-to-Image Translation。
* [Improved CycleGAN](https://github.com/luoxier/CycleGAN_Tensorlayer) - 対応なし Image-to-Image Translation。
* [DAGAN](https://github.com/nebulaV/DAGAN) - 高速な圧縮センシング MRI 再構成。
* [Colornet - 白黒画像を着色するニューラルネットワーク](https://github.com/pavelgonchar/colornet) - 白黒画像を着色するニューラルネットワーク。
* [Neural Caption Generator](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - [「Show and Tell」](http://arxiv.org/abs/1411.4555)の実装。
* [Neural Caption Generator with Attention](https://github.com/jazzsaxmafia/show_attend_and_tell.tensorflow) - [「Show, Attend and Tell」](http://arxiv.org/abs/1502.03044)の実装。
* [Weakly_detector](https://github.com/jazzsaxmafia/Weakly_detector) - [「Learning Deep Features for Discriminative Localization」](http://cnnlocalization.csail.mit.edu/)の実装。
* [Dynamic Capacity Networks](https://github.com/jazzsaxmafia/dcn.tf) - [「Dynamic Capacity Networks」](http://arxiv.org/abs/1511.07838)の実装。
* [HMM in TensorFlow](https://github.com/dwiel/tensorflow_hmm) - HMM の Viterbi・Forward/Backward アルゴリズム実装。
* [DeepOSM](https://github.com/trailbehind/DeepOSM) - OpenStreetMap の特徴と衛星画像で TensorFlow ニューラルネットを学習。
* [DQN-tensorflow](https://github.com/devsisters/DQN-tensorflow) - Devsisters.com による、OpenAI Gym を使った DeepMind「Human-Level Control through Deep Reinforcement Learning」の TensorFlow 実装。
* [Policy Gradient](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_atari_pong.py) - Atari Ping Pong のプレイ用。
* [Deep Q-Network](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_frozenlake_dqn.py) - Frozen Lake ゲームのプレイ用。
* [AC](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_cartpole_ac.py) - 離散行動空間ゲーム（Cartpole）向け Actor Critic。
* [A3C](https://github.com/zsdonghao/tensorlayer/blob/master/example/tutorial_bipedalwalker_a3c_continuous_action.py) - 連続行動空間（Bipedal Walker）向け Asynchronous Advantage Actor Critic（A3C）。
* [DAGGER](https://github.com/zsdonghao/Imitation-Learning-Dagger-Torcs) - [Gym Torcs](https://github.com/ugo-nama-kun/gym_torcs) のプレイ用。
* [TRPO](https://github.com/jjkke88/RL_toolbox) - 連続・離散行動空間向け。
* [Highway Network](https://github.com/fomorians/highway-cnn) - [「Training Very Deep Networks」](http://arxiv.org/abs/1507.06228)の TensorFlow 実装。[ブログ記事](https://medium.com/jim-fleming/highway-networks-with-tensorflow-1e6dfa667daa#.ndicn1i27)付き。
* [Hierarchical Attention Networks](https://github.com/tqtg/hierarchical-attention-networks) - [「Hierarchical Attention Networks for Document Classification」](https://www.cs.cmu.edu/~hovy/papers/16HLT-hierarchical-attention-networks.pdf)の TensorFlow 実装。
* [Sentence Classification with CNN](https://github.com/dennybritz/cnn-text-classification-tf) - [「Convolutional Neural Networks for Sentence Classification」](http://arxiv.org/abs/1408.5882)の TensorFlow 実装。[ブログ記事](http://www.wildml.com/2015/12/implementing-a-cnn-for-text-classification-in-tensorflow/)付き。
* [End-To-End Memory Networks](https://github.com/domluna/memn2n) - [End-To-End Memory Networks](http://arxiv.org/abs/1503.08895) の実装。
* [Character-Aware Neural Language Models](https://github.com/carpedm20/lstm-char-cnn-tensorflow) - [Character-Aware Neural Language Models](http://arxiv.org/abs/1508.06615) の TensorFlow 実装。
* [YOLO TensorFlow ++](https://github.com/thtrieu/yolotf) - 「YOLO: Real-Time Object Detection」の TensorFlow 実装。学習とモバイル端末上での実際のリアルタイム動作に対応。
* [Wavenet](https://github.com/ibab/tensorflow-wavenet) - 音声生成向け [WaveNet Generative Neural Network Architecture](https://deepmind.com/blog/wavenet-generative-model-raw-audio/) の TensorFlow 実装。
* [Mnemonic Descent Method](https://github.com/trigeorgis/mdm) - [「Mnemonic Descent Method: A recurrent process applied for end-to-end face alignment」](http://ibug.doc.ic.ac.uk/media/uploads/documents/trigeorgis2016mnemonic.pdf)の TensorFlow 実装。
* [Tensorflowを使ったCNN可視化](https://github.com/InFoCusp/tf_cnnvis) - [「Visualizing and Understanding Convolutional Networks」](https://www.cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf)の TensorFlow 実装。
* [VGAN Tensorflow](https://github.com/Singularity42/VGAN-Tensorflow) - Vondrick ほかによる MIT [「Generating Videos with Scene Dynamics」](http://carlvondrick.com/tinyvideo/) の TensorFlow 実装。
* [TensorFlowの3D Convolutional Neural Networks](https://github.com/astorfi/3D-convolutional-speaker-recognition) - Torfi ほかによる[「話者検証向け3D Convolutional Neural Networks」](https://arxiv.org/abs/1705.09422)の TensorFlow 実装。
* [U-Net](https://github.com/zsdonghao/u-net-brain-tumor) - 脳腫瘍セグメンテーション向け。
* [Spatial Transformer Networks](https://github.com/zsdonghao/Spatial-Transformer-Nets) - 変換関数を学習。
* [Lip Reading - TensorFlowの3DアーキテクチャによるCross Audio-Visual Recognition](https://github.com/astorfi/lip-reading-deeplearning) - Torfi ほかによる[「Cross Audio-Visual Recognition in the Wild Using Deep Learning」](https://arxiv.org/abs/1706.05739)の TensorFlow 実装。
* [Attentive Object Tracking](https://github.com/akosiorek/hart) - [「Hierarchical Attentive Recurrent Tracking」](https://arxiv.org/abs/1706.09262)の実装。
* [グラフ補完とリンク予測向けHolographic Embeddings](https://github.com/laxatives/TensorFlow-TransX) - [Holographic Embeddings of Knowledge Graphs](http://arxiv.org/abs/1510.04935) の実装。
* [教師なしオブジェクトカウント](https://github.com/akosiorek/attend_infer_repeat) - [「Attend, Infer, Repeat」](https://papers.nips.cc/paper/6230-attend-infer-repeat-fast-scene-understanding-with-generative-models)の実装。
* [Tensorflow FastText](https://github.com/apcode/tensorflow_fasttext) - Facebook fastText に着想を得たシンプルな Embedding ベースのテキスト分類器。
* [MusicGenreClassification](https://github.com/mlachmish/MusicGenreClassification) - 10秒の音声ストリームからニューラルネットワークで音楽ジャンルを分類。
* [Kubeflow](https://github.com/kubeflow/kubeflow) - Kubernetes で TensorFlow を簡単に使うためのフレームワーク。
* [TensorNets](https://github.com/taehoonlee/tensornets) - 事前学習済み重みを持つ40以上の人気 Computer Vision モデル。
* [Ladder Network](https://github.com/divamgupta/ladder_network_keras) - Keras と TensorFlow による半教師あり学習向け Ladder Network 実装。
* [TF-Unet](https://github.com/juniorxsound/TF-Unet) - 画像セグメンテーション向けに Keras で実装した汎用 U-Network。
* [Sarus TF2 Models](https://github.com/sarus-tech/tf2-published-models) - 再利用しやすい明快な TensorFlow 2 コードで実装された近年の生成モデルの長いリスト（Plain Autoencoder、VAE、VQ-VAE、PixelCNN、Gated PixelCNN、PixelCNN++、PixelSNAIL、Conditional Neural Processes）。
* [Model Maker](https://www.tensorflow.org/lite/guide/model_maker) - TensorFlow Lite モデルの学習、評価、デプロイを簡素化する転移学習ライブラリ（画像分類、物体検出、テキスト分類、BERT質問応答、音声分類、推薦などに対応。[APIリファレンス](https://www.tensorflow.org/lite/api_docs/python/tflite_model_maker)）。


<a name="github-powered-by" />

## TensorFlow採用事例

* [YOLO TensorFlow](https://github.com/gliese581gg/YOLO_tensorflow) - 「YOLO: Real-Time Object Detection」の実装。
* [android-yolo](https://github.com/natanielruiz/android-yolo) - TensorFlow を使い、YOLO ネットワークで Android 上のリアルタイム物体検出を実現。
* [Magenta](https://github.com/tensorflow/magenta) - 音楽・芸術生成における Machine Intelligence の最先端を進める研究プロジェクト。


<a name="libraries" />

## ライブラリ

* [TensorFlow Estimators](https://www.tensorflow.org/guide/estimators) - 機械学習プログラミングを大幅に簡素化する高水準 TensorFlow API（元は [tensorflow/skflow](https://github.com/tensorflow/skflow)）。
* [TensorFlowのRインターフェース](https://tensorflow.rstudio.com/) - Estimators、Keras、Datasets など TensorFlow API の R インターフェース。
* [Lattice](https://github.com/tensorflow/lattice) - TensorFlow による単調較正補間 Look-Up Table の実装。
* [tensorflow.rb](https://github.com/somaticio/tensorflow.rb) - SWIG を使った Ruby 向け TensorFlow ネイティブインターフェース。
* [tflearn](https://github.com/tflearn/tflearn) - 高水準 API を備えた深層学習ライブラリ。
* [TensorLayer](https://github.com/tensorlayer/tensorlayer) - 研究者・エンジニア向けの深層学習・強化学習ライブラリ。
* [TensorFlow-Slim](https://github.com/tensorflow/models/tree/master/inception/inception/slim) - モデル定義用の高水準ライブラリ。
* [TensorFrames](https://github.com/tjhunter/tensorframes) - Apache Spark 向け TensorFlow Binding。
* [TensorForce](https://github.com/reinforceio/tensorforce) - 応用強化学習向け TensorFlow ライブラリ。
* [TensorFlowOnSpark](https://github.com/yahoo/TensorFlowOnSpark) - Apache Spark で分散 TensorFlow を可能にする Yahoo! の取り組み。
* [caffe-tensorflow](https://github.com/ethereon/caffe-tensorflow) - Caffe モデルを TensorFlow 形式へ変換。
* [keras](http://keras.io) - TensorFlow と Theano 向けの最小限でモジュール式の深層学習ライブラリ。
* [SyntaxNet: Neural Models of Syntax](https://github.com/tensorflow/models/tree/master/syntaxnet) - [Globally Normalized Transition-Based Neural Networks, Andor et al. (2016)](http://arxiv.org/pdf/1603.06042.pdf) で説明されたモデルの TensorFlow 実装。
* [keras-js](https://github.com/transcranial/keras-js) - GPU 対応で Keras モデル（TensorFlow Backend）をブラウザーで実行。
* [NNFlow](https://github.com/welschma/NNFlow) - ROOT NTuple を Numpy Array へ変換して読み込み、Google TensorFlow で使えるシンプルなフレームワーク。
* [Sonnet](https://github.com/deepmind/sonnet) - 複雑なニューラルネットワークを構築する、TensorFlow 上の DeepMind 製ライブラリ。
* [tensorpack](https://github.com/ppwwyyxx/tensorpack) - 学習速度と大規模データセットに重点を置く、TensorFlow 上の Neural Network Toolbox。
* [tf-encrypted](https://github.com/mortendahl/tf-encrypted) - 暗号化データ上で機械学習を行う TensorFlow レイヤー。
* [pytorch2keras](https://github.com/nerox8664/pytorch2keras) - PyTorch モデルを Keras（TensorFlow Backend）形式へ変換。
* [gluon2keras](https://github.com/stjordanis/gluon2keras) - Gluon モデルを Keras（TensorFlow Backend）形式へ変換。
* [TensorIO](https://doc-ai.github.io/tensorio/) - TensorFlow Lite モデルをモバイル端末へデプロイする軽量クロスプラットフォームライブラリ。
* [StellarGraph](https://github.com/stellargraph/stellargraph) - グラフ構造（ネットワーク構造）データの機械学習を行う Python ライブラリ。
* [DeepBay](https://github.com/ElPapi42/DeepBay) - 一般的なアーキテクチャスタックを使いやすい Plug-and-Play モジュールとして実装する高水準 Keras 補完。
* [Tensorflow-Probability](https://www.tensorflow.org/probability) - 現代的ハードウェア上で確率モデルと深層学習を容易に組み合わせる TensorFlow ベースの確率的プログラミング。
* [TensorLayerX](https://github.com/tensorlayer/TensorLayerX) - TensorFlow を含むすべてのハードウェア、Backend、OS に対応する統合深層学習フレームワーク。
* [Txeo](https://github.com/rdabra/txeo) - TensorFlow のモダンな C++ ラッパー。

<a name="tools-utils" />

## ツール／ユーティリティ

* [Speedster](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/speedster) - 最先端の最適化技法を自動適用し、ハードウェア上で推論を最大限高速化。
* [Guild AI](https://guild.ai) - TensorFlow 向け Task Runner と Package Manager。
* [ML Workspace](https://github.com/ml-tooling/ml-workspace) - 機械学習とデータサイエンス向けのオールインワン Web IDE。TensorFlow、Jupyter、VS Code、TensorBoard など多数のツール／ライブラリを1つの Docker Image に統合。
* [create-tf-app](https://github.com/radi-cho/create-tf-app) - 環境管理、Lint、Logging を扱う TensorFlow プロジェクト構築 CLI。

<a name="video" />

## 動画

* [TensorFlow Guide 1](http://bit.ly/1OX8s8Y) - 導入・利用ガイド。
* [TensorFlow Guide 2](http://bit.ly/1R27Ki9) - 最初の動画の続編。
* [TensorFlow Basic Usage](http://bit.ly/1TCNmEY) - 基本的な利用方法のガイド。
* [TensorFlow Deep MNIST for Experts](http://bit.ly/1L9IfJx) - Deep MNIST を解説。
* [TensorFlow Udacity Deep Learning](https://www.youtube.com/watch?v=ReaxoSIM5XQ) - 1GBのデータを使える Cloud 9 オンラインサービスへ TensorFlow を無料導入する基本手順。
* [GoogleがTensorFlowを誰でも利用可能にしたい理由](http://video.foxnews.com/v/4611174773001/why-google-wants-everyone-to-have-access-to-tensorflow/?#sp=show-clips)
* [TensorFlow Silicon Valley Meet Up 2016年1月19日の動画](http://blog.altoros.com/videos-from-tensorflow-silicon-valley-meetup-january-19-2016.html)
* [TensorFlow Silicon Valley Meet Up 2016年1月21日の動画](http://blog.altoros.com/videos-from-tensorflow-seattle-meetup-jan-21-2016.html)
* [Stanford CS224d Lecture 7 - Introduction to TensorFlow, 2016年4月19日](https://www.youtube.com/watch?v=L8Y2_Cq2X5s&index=7&list=PLmImxx8Char9Ig0ZHSyTqGsdhb9weEGam) - Richard Socher による CS224d「Deep Learning for Natural Language Processing」。
* [Diving into Machine Learning through TensorFlow](https://youtu.be/GZBIPwdGtkk?list=PLBkISg6QfSX9HL6us70IBs9slFciFFa4W) - PyCon 2016 Portland Oregon。Julia Ferraioli、Amy Unruh、Eli Bixby による[スライド](https://storage.googleapis.com/amy-jo/talks/tf-workshop.pdf)と[コード](https://github.com/amygdala/tensorflow-workshop)。
* [Large Scale Deep Learning with TensorFlow](https://youtu.be/XYwIDn00PAo) - Jeff Dean による Spark Summit 2016 基調講演。
* [Tensorflow and deep learning - without at PhD](https://www.youtube.com/watch?v=vq2nnJ4g6N0) - Martin Görner による講演。
* [Tensorflow and deep learning - without at PhD, Part 2 (Google Cloud Next '17)](https://www.youtube.com/watch?v=fTUwdXUFfI8) - Martin Görner による講演。
* [TensorFlowを使ったGoの画像認識](https://youtu.be/P8MZ1Z2LHrw) - Alex Pliutau による講演。



<a name="papers" />

## 論文

* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf) - TensorFlow Interface と、Google が構築したその実装について説明。
* [TensorFlow Estimators: Managing Simplicity vs. Flexibility in High-Level Machine Learning Frameworks](https://arxiv.org/pdf/1708.02637.pdf)
* [TF.Learn: TensorFlow's High-level Module for Distributed Machine Learning](https://arxiv.org/abs/1612.04251)
* [Comparative Study of Deep Learning Software Frameworks](http://arxiv.org/abs/1511.06435) - 複数の深層学習アーキテクチャを対象に、単一マシンのマルチスレッド CPU と GPU（Nvidia Titan X）で各フレームワークの性能を評価。
* [Distributed TensorFlow with MPI](http://arxiv.org/abs/1603.02339) - Message Passing Interface（MPI）を使い、Google TensorFlow を大規模クラスター上で実行できるよう拡張。
* [Globally Normalized Transition-Based Neural Networks](http://arxiv.org/abs/1603.06042) - [SyntaxNet](https://github.com/tensorflow/models/tree/master/syntaxnet) の背後にあるモデルを説明。
* [TensorFlow: A system for large-scale machine learning](https://arxiv.org/abs/1605.08695) - 既存システムと対比して TensorFlow Dataflow Model を説明し、優れた性能を示します。
* [TensorLayer: A Versatile Library for Efficient Deep Learning Development](https://arxiv.org/abs/1707.08551) - 研究者・エンジニアによる深層学習システム開発の効率化を目指す汎用 Python ライブラリを説明（ACM MM 2017 Best Open Source Software Award 受賞）。

<a name="blogs" />

## 公式発表

* [TensorFlow: smarter machine learning, for everyone](https://googleblog.blogspot.com/2015/11/tensorflow-smarter-machine-learning-for.html) - TensorFlow 入門。
* [Announcing SyntaxNet: The World’s Most Accurate Parser Goes Open Source](http://googleresearch.blogspot.com/2016/05/announcing-syntaxnet-worlds-most.html) - SyntaxNet の公開。Natural Language Understanding システムの基盤となる、TensorFlow 実装のオープンソースニューラルネットワークフレームワーク。

## ブログ記事
* [Tensorflow公式ブログ](http://blog.tensorflow.org/)
* [TensorFlowがAIを変える理由](https://archive.fo/o9asj)
* [TensorFlow for Poets](http://petewarden.com/2016/02/28/tensorflow-for-poets) - TensorFlow の実装を解説。
* [Introduction to Scikit Flow - Simplified Interface to TensorFlow](http://terrytangyuan.github.io/2016/03/14/scikit-flow-intro/) - 主要機能を図解。
* [Building Machine Learning Estimator in TensorFlow](http://terrytangyuan.github.io/2016/07/08/understand-and-build-tensorflow-estimator/) - TensorFlow Learn Estimator の内部を理解。
* [TensorFlow - Not Just For Deep Learning](http://terrytangyuan.github.io/2016/08/06/tensorflow-not-just-deep-learning/)
* [indico Machine Learning TeamによるTensorFlowの見解](https://indico.io/blog/indico-tensorflow)
* [The Good, Bad, & Ugly of TensorFlow](https://indico.io/blog/the-good-bad-ugly-of-tensorflow/) - 急速に進化した6か月の調査（問題点を修正するヒント、Hack、コードを含む）。Indico の Dan Kuster、2016年5月9日。
* [Fizz Buzz in TensorFlow](http://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/) - Joel Grus によるジョーク。
* [RNNs In TensorFlow, A Practical Guide And Undocumented Features](http://www.wildml.com/2016/08/rnns-in-tensorflow-a-practical-guide-and-undocumented-features/) - GitHub の完全なコード例を含む段階的ガイド。
* [TensorBoardを使ったTensorFlow画像分類再学習の可視化](http://maxmelnick.com/2016/07/04/visualizing-tensorflow-retrain.html)
* [TFRecords Guide](http://warmspringwinds.github.io/tensorflow/tf-slim/2016/12/21/tfrecords-guide/) セマンティックセグメンテーションと TFRecord ファイル形式の処理。
* [TensorFlow Android Guide](https://blog.mindorks.com/android-tensorflow-machine-learning-example-ff0e9b2654cc) - Android TensorFlow Machine Learning の例。
* [現代的Intel® ArchitectureにおけるTensorFlow最適化](https://software.intel.com/en-us/articles/tensorflow-optimizations-on-modern-intel-architecture) - Intel/Google の協力に基づく、Intel® Xeon® および Intel® Xeon Phi™ プロセッサー環境の TensorFlow 最適化を紹介。
* [Coca-Colaの画像認識アプリ](https://developers.googleblog.com/2017/09/how-machine-learning-with-tensorflow.html) 利用者入力の Feedback Loop を持つ、Coca-Cola 商品コード画像認識ニューラルネットワーク。
* [TensorFlowはどのように動くか](https://www.letslearnai.com/2018/02/02/how-does-the-machine-learning-library-tensorflow-work.html) 機械学習ライブラリ TensorFlow の仕組み。


<a name="community" />

## コミュニティ

* [Stack Overflow](http://stackoverflow.com/questions/tagged/tensorflow)
* [Twitterの@TensorFlow](https://twitter.com/tensorflow)
* [Reddit](https://www.reddit.com/r/tensorflow)
* [メーリングリスト](https://groups.google.com/a/tensorflow.org/forum/#!forum/discuss)


<a name="books" />

## 書籍

* [Machine Learning with TensorFlow 2nd edition](https://github.com/jtoy/awesome-tensorflow/blob/2c1780ae4ce541d5abb9b8a3bd5976a9ab3bfb29/[http:/tensorflowbook.com](https:/github.com/chrismattmann/MLwithTensorFlow2ed))、著者：[Dr. Chris A. Mattmann](http://github.com/chrismattmann/)（UCLA Chief Data and Artificial Intelligence Officer、[Tika in Action](https://www.manning.com/books/tika-in-action)著者）。数学要素の多い AI・ML を初心者にも親しみやすく実践的に解説。TensorFlow 2 と書籍の最新版へ更新。
* [First Contact with TensorFlow](http://www.jorditorres.org/first-contact-with-tensorflow/)、著者：Jordi Torres（UPC Barcelona Tech 教授、Barcelona Supercomputing Center Research Manager・Senior Advisor）。
* [Deep Learning with Python](https://machinelearningmastery.com/deep-learning-with-python/) - Jason Brownlee による、Keras を使って Theano と TensorFlow 上で深層学習モデルを開発する方法。
* [TensorFlow for Machine Intelligence](https://bleedingedgepress.com/tensor-flow-for-machine-intelligence/) - Graph Computing の基礎から深層学習モデル、本番環境での利用まで、TensorFlow の完全ガイド。Bleeding Edge Press。
* [Getting Started with TensorFlow](https://www.packtpub.com/big-data-and-business-intelligence/getting-started-tensorflow) - Google の最新数値計算ライブラリを動かし、データを深く掘り下げる方法。著者：Giancarlo Zaccone。
* [Hands-On Machine Learning with Scikit-Learn and TensorFlow](http://shop.oreilly.com/product/0636920052289.do) – YouTube 動画分類チーム元責任者 Aurélien Geron 著。ML の基礎、TensorFlow による複数サーバー・GPUでの深層ネットの学習とデプロイ、最新 CNN・RNN・Autoencoder、強化学習（Deep Q）を扱います。
* [Building Machine Learning Projects with Tensorflow](https://www.packtpub.com/big-data-and-business-intelligence/building-machine-learning-projects-tensorflow) – Rodolfo Bonnin 著。さまざまな状況で TensorFlow に何ができるかを示すプロジェクトを収録。モデル学習、機械学習、深層学習、各種ニューラルネットワークを扱い、TensorFlow の使い方と Tensor によるデータ層の探索を実践的に学べます。
* [Deep Learning using TensorLayer](http://www.broadview.com.cn/book/5059) - Hao Dong ほか著。深層学習と TensorFlow・TensorLayer による実装の両方を扱います。
* [TensorFlow 2.0 in Action](https://www.manning.com/books/tensorflow-in-action) - Thushan Ganegedara 著。TensorFlow 2.0 の新機能で深層学習モデルを構築する実践ガイド。魅力的なプロジェクト、平易な表現、最新アルゴリズムを収録。
* [Probabilistic Programming and Bayesian Methods for Hackers](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) - Cameron Davidson-Pilon 著。tensorflow-probability（または PyMC2/3）を使った Bayes 手法と確率的グラフィカルモデル入門。



<a name="contributions" />

## コントリビューション

コントリビューションをいつでも歓迎します。

このリストへ貢献する場合は、Pull Request を送るか [@jtoy](https://twitter.com/jtoy) へ連絡してください。
また、次の理由により掲載リポジトリを非推奨にすべきと気づいた場合もお知らせください。

* リポジトリ所有者が「このライブラリは保守されていない」と明示している。
* 長期間（2〜3年）コミットされていない。

詳細は[ガイドライン](https://github.com/jtoy/awesome-tensorflow/blob/master/contributing.md)をご覧ください。


<a name="credits" />

## クレジット

* Python ライブラリの一部は [vinta](https://github.com/vinta/awesome-python)
* 見つけた少数の Go 資料は[このページ](https://code.google.com/p/go-wiki/wiki/Projects#Machine_Learning)
