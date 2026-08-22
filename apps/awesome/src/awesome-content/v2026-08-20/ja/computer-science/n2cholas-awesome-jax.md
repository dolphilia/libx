---
title: "n2cholas/awesome-jax"
description: "n2cholas/awesome-jax の定本スナップショット"
licenseSource: "github-n2cholas-awesome-jax-readme-md"
---


# Awesome JAX [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)[<img src="https://raw.githubusercontent.com/google/jax/master/images/jax_logo_250px.png" alt="JAX Logo" align="right" height="100">](https://github.com/google/jax)


[JAX](https://github.com/google/jax) は、自動微分と [XLAコンパイラー](https://www.tensorflow.org/xla) を [NumPy](https://numpy.org/) に似たAPIを通じて組み合わせ、GPUやTPUなどのアクセラレーター上で高性能な機械学習研究を可能にします。


優れたJAXライブラリ、プロジェクト、関連リソースを集めた一覧です。コントリビューションを歓迎します。

## 目次

- [ライブラリ](#libraries)
- [モデルとプロジェクト](#models-and-projects)
- [動画](#videos)
- [論文](#papers)https://github.com/jax-ml/jax
- [チュートリアルとブログ記事](#tutorials-and-blog-posts)
- [書籍](#books)
- [コミュニティ](#community)

<a name="libraries" />

## ライブラリ

- ニューラルネットワークライブラリ
    - [Flax](https://github.com/google/flax) - 柔軟性と明確性を中心にした設計。<img src="https://img.shields.io/github/stars/google/flax?style=social" align="center">
    - [Flax NNX](https://github.com/google/flax/tree/main/flax/nnx) - 同じチームが開発したFlaxの進化形。<img src="https://img.shields.io/github/stars/google/flax?style=social" align="center">
    - [Haiku](https://github.com/deepmind/dm-haiku) - シンプルさに焦点を当て、DeepMindのSonnetの開発者たちが作成した。 https://img.shields.io/github/stars/deepmind/dm-haiku?style=social"
    - [Objax](https://github.com/google/objax) - PyTorchに類似したオブジェクト指向設計を採用。 https://img.shields.io/github/stars/google/objax?style=social"
    - [Elegy](https://poets-ai.github.io/elegy/) - Deep Learning in JAX. Supports Flax, Haiku, and Optax. <img src="https://img.shields.io/github/stars/poets-ai/elegy?style=social" align="center">向けのA High Level API。
    - [Trax](https://github.com/google/trax) - common workloads. <img src="https://img.shields.io/github/stars/google/trax?style=social" align="center">向けの"Batteries included" deep learning library focused on providing solutions。
    - [Jraph](https://github.com/deepmind/jraph) - 軽量なグラフニューラルネットワークライブラリ。 https://img.shields.io/github/stars/deepmind/jraph?style=social"
    - [Neural Tangents](https://github.com/google/neural-tangents) - specifying neural networks of both finite and _infinite_ width. <img src="https://img.shields.io/github/stars/google/neural-tangents?style=social" align="center">向けのHigh-level API。
    - [HuggingFace Transformers](https://github.com/huggingface/transformers) - a wide range of natural language tasks (Flax). <img src="https://img.shields.io/github/stars/huggingface/transformers?style=social" align="center">向けのEcosystem of pretrained Transformers。
    - [Equinox](https://github.com/patrick-kidger/equinox) - 呼び出し可能なPyTreeとフィルタされたJIT/grad変換により、JAXにおけるニューラルネットワークを実現。 https://img.shields.io/github/stars/patrick-kidger/equinox?style=social"
    - [Scenic](https://github.com/google-research/scenic) - Computer Vision Research and Beyond. <img src="https://img.shields.io/github/stars/google-research/scenic?style=social" align="center">向けのA Jax Library。
    - [Penzai](https://github.com/google-deepmind/penzai) - 可読性・可視性・モデル編集の容易さを重視し、組み立て可能なツールとシンプルな認知モデルを用いる。 https://img.shields.io/github/stars/google-deepmind/penzai?style=social"
- [Levanter](https://github.com/stanford-crfm/levanter) - 名前付きテンソルとJAXを活用した、可読性・スケーラビリティ・再現性の高い基礎モデル。 https://img.shields.io/github/stars/stanford-crfm/levanter?style=social"
- [EasyLM](https://github.com/young-geng/EasyLM) - LLMsを簡単に行う：JAX/FlaxでLLMの事前学習、微調整、評価、サービス。<img src="https://img.shields.io/github/stars/young-geng/EasyLM?style=social" align="center">
- [NumPyro](https://github.com/pyro-ppl/numpyro) - Pyroライブラリに基づく確率プログラミング。<img src="https://img.shields.io/github/stars/pyro-ppl/numpyro?style=social" align="center">
- [Chex](https://github.com/deepmind/chex) - 信頼性の高いJAXコードの作成とテストに使うユーティリティ。<img src="https://img.shields.io/github/stars/deepmind/chex?style=social" align="center">
- [Optax](https://github.com/deepmind/optax) - 勾配処理と最適化ライブラリ。<img src="https://img.shields.io/github/stars/deepmind/optax?style=social" align="center">
- [RLax](https://github.com/deepmind/rlax) - implementing reinforcement learning agents. <img src="https://img.shields.io/github/stars/deepmind/rlax?style=social" align="center">向けのLibrary。
- [JAX, M.D.](https://github.com/google/jax-md) - 高速化された差分分子動力学。<img src="https://img.shields.io/github/stars/google/jax-md?style=social" align="center">
- [Coax](https://github.com/coax-dev/coax) - RL論文を簡単な方法でコードに変換。<img src="https://img.shields.io/github/stars/coax-dev/coax?style=social" align="center">
- [Distrax](https://github.com/deepmind/distrax) - TensorFlow Probabilityの再実装。確率分布と変換（bijectors）を含む。<img src="https://img.shields.io/github/stars/deepmind/distrax?style=social" align="center">
- [cvxpylayers](https://github.com/cvxgrp/cvxpylayers) - 微分可能な凸最適化層の構築。<img src="https://img.shields.io/github/stars/cvxgrp/cvxpylayers?style=social" align="center">
- [TensorLy](https://github.com/tensorly/tensorly) - テンソルベースの学習をシンプルに。<img src="https://img.shields.io/github/stars/tensorly/tensorly?style=social" align="center">
- [NetKet](https://github.com/netket/netket) - Quantum Physics. <img src="https://img.shields.io/github/stars/netket/netket?style=social" align="center">向けのMachine Learning toolbox。
- [Fortuna](https://github.com/awslabs/fortuna) - Uncertainty Quantification in Deep Learning. <img src="https://img.shields.io/github/stars/awslabs/fortuna?style=social" align="center">向けのAWS library。
- [BlackJAX](https://github.com/blackjax-devs/blackjax) - JAX. <img src="https://img.shields.io/github/stars/blackjax-devs/blackjax?style=social" align="center">向けのLibrary of samplers。
- [Dynamax](https://github.com/probml/dynamax) - 確率的状態空間モデル。<img src="https://img.shields.io/github/stars/probml/dynamax?style=social" align="center">

<a name="new-libraries" />

### 新しいライブラリ

この節には、高品質で有用である一方、大規模な利用者層で十分に実戦検証されているとは限らないライブラリを掲載します。

- ニューラルネットワークライブラリ
    - [FedJAX](https://github.com/google/fedjax) - JAXにおけるフェデレートラーニング。OptaxとHaikuをベースに構築。<img src="https://img.shields.io/github/stars/google/fedjax?style=social" align="center">
    - [Equivariant MLP](https://github.com/mfinzi/equivariant-MLP) - 等変換性を持つニューラルネットワーク層の構築。<img src="https://img.shields.io/github/stars/mfinzi/equivariant-MLP?style=social" align="center">
    - [jax-resnet](https://github.com/n2cholas/jax-resnet/) - ResNet variants in Flax. <img src="https://img.shields.io/github/stars/n2cholas/jax-resnet?style=social" align="center">向けのImplementations and checkpoints。
    - [jax-raft](https://github.com/alebeck/jax-raft/) - RAFT光学流推定器のJAX/Flaxへの移植。<img src="https://img.shields.io/github/stars/alebeck/jax-raft?style=social" align="center">
    - [Parallax](https://github.com/srush/parallax) - JAX. <img src="https://img.shields.io/github/stars/srush/parallax?style=social" align="center">向けのImmutable Torch Modules。
- 非線形最適化
    - [Optimistix](https://github.com/patrick-kidger/optimistix) - 根の探索、最小化、固定点、最小二乗法。<img src="https://img.shields.io/github/stars/patrick-kidger/optimistix?style=social" align="center">
    - [JAXopt](https://github.com/google/jaxopt) - GPU/TPUによるハードウェア加速、バッチ処理可能かつ微分可能な最適化アルゴリズム（JAXで）。<img src="https://img.shields.io/github/stars/google/jaxopt?style=social" align="center">
- [jax-unirep](https://github.com/ElArkk/jax-unirep) - protein machine learning applications. <img src=" align="center">向けのLibrary implementing the 。 [UniRep model](https://www.nature.com/articles/s41592-019-0598-1) https://img.shields.io/github/stars/ElArkk/jax-unirep?style=social"
- [flowjax](https://github.com/danielward27/flowjax) - 確率分布と正規化フローをEquinoxモジュールとして構築。<img src="https://img.shields.io/github/stars/danielward27/flowjax?style=social" align="center">
- [flaxdiff](https://github.com/AshishKumar4/FlaxDiff) - building and training Diffusion models in multi-node multi-device distributed settings (TPUs) <img src="https://img.shields.io/github/stars/AshishKumar4/FlaxDiff?style=social" align="center">向けのFramework and Library。
- [jax-flows](https://github.com/ChrisWaites/jax-flows) - JAXにおける正規化フロー。<img src="https://img.shields.io/github/stars/ChrisWaites/jax-flows?style=social" align="center">
- [sklearn-jax-kernels](https://github.com/ExpectationMax/sklearn-jax-kernels) - `scikit-learn`カーネル行列のJAXでの利用。<img src="https://img.shields.io/github/stars/ExpectationMax/sklearn-jax-kernels?style=social" align="center">
- [jax-cosmo](https://github.com/DifferentiableUniverseInitiative/jax_cosmo) - JAXにおける指数族分布。<img src="https://img.shields.io/github/stars/DifferentiableUniverseInitiative/jax_cosmo?style=social" align="center">
- [efax](https://github.com/NeilGirdhar/efax) - JAXにおける可微分宇宙論ライブラリ。<img src="https://img.shields.io/github/stars/NeilGirdhar/efax?style=social" align="center">
- [mpi4jax](https://github.com/PhilipVinc/mpi4jax) - CPUおよびGPUでのJAXコードにMPI操作を組み合わせる。<img src="https://img.shields.io/github/stars/PhilipVinc/mpi4jax?style=social" align="center">
- [imax](https://github.com/4rtemi5/imax) - 画像の拡張および変換。<img src="https://img.shields.io/github/stars/4rtemi5/imax?style=social" align="center">
- [FlaxVision](https://github.com/rolandgvc/flaxvision) - フラックス版TorchVision。<img src="https://img.shields.io/github/stars/rolandgvc/flaxvision?style=social" align="center">
- [Oryx](https://github.com/tensorflow/probability/tree/master/spinoffs/oryx) - プログラム変換をベースとした確率プログラミング言語。
- [Optimal Transport Tools](https://github.com/google-research/ott) - 最適輸送問題を解決するためのユーティリティをまとめるツールボックス。
- [delta PV](https://github.com/romanodev/deltapv) - 自動微分を用いた太陽電池シミュレータ。<img src="https://img.shields.io/github/stars/romanodev/deltapv?style=social" align="center">
- [jaxlie](https://github.com/brentyi/jaxlie) - rigid body transformations and optimization. <img src="https://img.shields.io/github/stars/brentyi/jaxlie?style=social" align="center">向けのLie theory library。
- [BRAX](https://github.com/google/brax) - these environments. <img src="https://img.shields.io/github/stars/google/brax?style=social" align="center">向けのDifferentiable physics engine to simulate environments along with learning algorithms to train agents。
- [flaxmodels](https://github.com/matthias-wright/flaxmodels) - Jax/Flax. <img src="https://img.shields.io/github/stars/matthias-wright/flaxmodels?style=social" align="center">向けのPretrained models。
- [CR.Sparse](https://github.com/carnotresearch/cr-sparse) - sparse representations and compressive sensing. <img src="https://img.shields.io/github/stars/carnotresearch/cr-sparse?style=social" align="center">向けのXLA accelerated algorithms。
- [exojax](https://github.com/HajimeKawahara/exojax) - JAXと互換可能な系外行星・褐矮星の自動微分スペクトルモデル。<img src="https://img.shields.io/github/stars/HajimeKawahara/exojax?style=social" align="center">
- [PIX](https://github.com/deepmind/dm_pix) - JAX. <img src="https://img.shields.io/github/stars/deepmind/dm_pix?style=social" align="center">向けのPIX is an image processing library in JAX,。
- [bayex](https://github.com/alonfnt/bayex) - JAXを用いたベイズ最適化。<img src="https://img.shields.io/github/stars/alonfnt/bayex?style=social" align="center">
- [JaxDF](https://github.com/ucl-bug/jaxdf) - differentiable simulators with arbitrary discretizations. <img src="https://img.shields.io/github/stars/ucl-bug/jaxdf?style=social" align="center">向けのFramework。
- [tree-math](https://github.com/google/tree-math) - 配列に作用する関数を、PyTreeに作用する関数に変換。<img src="https://img.shields.io/github/stars/google/tree-math?style=social" align="center">
- [jax-models](https://github.com/DarshanDeshpande/jax-models) - 元々コードがなく、またはJAX以外のフレームワークで書かれた研究論文の実装。<img src="https://img.shields.io/github/stars/DarshanDeshpande/jax-modelsa?style=social" align="center">
- [PGMax](https://github.com/vicariousinc/PGMax) - building discrete Probabilistic Graphical Models (PGM's) and running inference inference on them via JAX. <img src="https://img.shields.io/github/stars/vicariousinc/pgmax?style=social" align="center">向けのA framework。
- [EvoJAX](https://github.com/google/evojax) - ハードウェア加速によるニューロ進化 https://img.shields.io/github/stars/google/evojax?style=social"
- [evosax](https://github.com/RobertTLange/evosax) - JAXベースの進化戦略 https://img.shields.io/github/stars/RobertTLange/evosax?style=social"
- [SymJAX](https://github.com/SymJAX/SymJAX) - シンボリックなCPU/GPU/TPUプログラミング https://img.shields.io/github/stars/SymJAX/SymJAX?style=social"
- [mcx](https://github.com/rlouf/mcx) - performant inference. <img src="https://img.shields.io/github/stars/rlouf/mcx?style=social" align="center">向けのExpress & compile probabilistic programs。
- [Einshape](https://github.com/deepmind/einshape) - JAX and other frameworks. <img src="https://img.shields.io/github/stars/deepmind/einshape?style=social" align="center">向けのDSL-based reshaping library。
- [ALX](https://github.com/google-research/google-research/tree/master/alx) - distributed matrix factorization using Alternating Least Squares, more info in [_ALX: Large Scale Matrix Factorization on TPUs_](https://arxiv.org/abs/2112.02194)向けのOpen-source library。
- [Diffrax](https://github.com/patrick-kidger/diffrax) - JAXにおける数値微分方程式ソルバー https://img.shields.io/github/stars/patrick-kidger/diffrax?style=social"
- [tinygp](https://github.com/dfm/tinygp) - JAXにおける最も小さなガウス過程ライブラリ https://img.shields.io/github/stars/dfm/tinygp?style=social"
- [gymnax](https://github.com/RobertTLange/gymnax) - よく知られたgym APIを用いた強化学習環境 https://img.shields.io/github/stars/RobertTLange/gymnax?style=social"
- [Mctx](https://github.com/deepmind/mctx) - JAXに内蔵されたモンテカルロ木探索アルゴリズム。<img src="https://img.shields.io/github/stars/deepmind/mctx?style=social" align="center">
- [KFAC-JAX](https://github.com/deepmind/kfac-jax) - NNs. <img src="https://img.shields.io/github/stars/deepmind/kfac-jax?style=social" align="center">向けのSecond Order Optimization with Approximate Curvature。
- [TF2JAX](https://github.com/deepmind/tf2jax) - 関数／グラフをJAX関数に変換。<img src="https://img.shields.io/github/stars/deepmind/tf2jax?style=social" align="center">
- [jwave](https://github.com/ucl-bug/jwave) - differentiable acoustic simulations <img src="https://img.shields.io/github/stars/ucl-bug/jwave?style=social" align="center">向けのA library。
- [GPJax](https://github.com/thomaspinder/GPJax) - JAXにおけるガウス過程の実装。
- [Jumanji](https://github.com/instadeepai/jumanji) - JAXで記述された、業界向けハードウェア加速型強化学習環境のソースコード。<img src="https://img.shields.io/github/stars/instadeepai/jumanji?style=social" align="center">
- [Eqxvision](https://github.com/paganpasta/eqxvision) - TorchvisionのEquinox版。<img src="https://img.shields.io/github/stars/paganpasta/eqxvision?style=social" align="center">
- [JAXFit](https://github.com/dipolar-quantum-gases/jaxfit) - nonlinear least-squares problems (see [arXiv paper](https://arxiv.org/abs/2208.12187)). <img src="https://img.shields.io/github/stars/dipolar-quantum-gases/jaxfit?style=social" align="center">向けのAccelerated curve fitting library。
- [econpizza](https://github.com/gboehl/econpizza) - JAXを用いて異質なエージェントを用いたマクロ経済モデルを解く。<img src="https://img.shields.io/github/stars/gboehl/econpizza?style=social" align="center">
- [SPU](https://github.com/secretflow/spu) - MPC（セキュアマルチパーティ計算）を用いたJAXコードを実行するためのドメイン特定コンパイラおよびランタイムセット。<img src="https://img.shields.io/github/stars/secretflow/spu?style=social" align="center">
- [jax-tqdm](https://github.com/jeremiecoullon/jax-tqdm) - JAXのスキャンとループにtqdmの進行バーを追加する。<img src="https://img.shields.io/github/stars/jeremiecoullon/jax-tqdm?style=social" align="center">
- [safejax](https://github.com/alvarobartt/safejax) - JAX、Flax、Haiku、またはObjaxのモデルパラメータを🤗`safetensors`でシリアル化する。<img src="https://img.shields.io/github/stars/alvarobartt/safejax?style=social" align="center">
- [Kernex](https://github.com/ASEM000/kernex) - JAXにおける微分可能なステンルデコレータ。<img src="https://img.shields.io/github/stars/ASEM000/kernex?style=social" align="center">
- [MaxText](https://github.com/google/maxtext) - Google CloudのTPUをターゲットとした、純粋なPython/JAXで書かれたシンプルで高性能かつスケーラブルなJaxLLM。<img src="https://img.shields.io/github/stars/google/maxtext?style=social" align="center">
- [Pax](https://github.com/google/paxml) - training large scale models. <img src="https://img.shields.io/github/stars/google/paxml?style=social" align="center">向けのA Jax-based machine learning framework。
- [Praxis](https://github.com/google/praxis) - Pax with a goal to be usable by other JAX-based ML projects. <img src="https://img.shields.io/github/stars/google/praxis?style=social" align="center">向けのThe layer library。
- [purejaxrl](https://github.com/luchris429/purejaxrl) - JAXで実装されたベクトル化された、端到端の強化学習アルゴリズム。<img src="https://img.shields.io/github/stars/luchris429/purejaxrl?style=social" align="center">
- [Lorax](https://github.com/davisyoshida/lorax) - JAXモデル（Flax、Haikuなど）にLoRAを自動的に適用。
- [SCICO](https://github.com/lanl/scico) - JAXを用いた科学的計算画像処理。<img src="https://img.shields.io/github/stars/lanl/scico?style=social" align="center">
- [Spyx](https://github.com/kmheckel/spyx) - machine learning on neuromorphic hardware. <img src="https://img.shields.io/github/stars/kmheckel/spyx?style=social" align="center">向けのSpiking Neural Networks in JAX。
- 脳ダイナミクス・プログラミングエコシステム
    - [BrainPy](https://github.com/brainpy/BrainPy) - Pythonで脳動力学プログラミング。<img src="https://img.shields.io/github/stars/brainpy/BrainPy?style=social" align="center">
    - [brainunit](https://github.com/chaobrain/brainunit) - JAXにおける物理単位と単位を意識した数学システム。<img src="https://img.shields.io/github/stars/chaobrain/brainunit?style=social" align="center">
    - [dendritex](https://github.com/chaobrain/dendritex) - JAXを用いた樹状細胞モデル化。<img src="https://img.shields.io/github/stars/chaobrain/dendritex?style=social" align="center">
    - [brainstate](https://github.com/chaobrain/brainstate) - Program Compilation and Augmentation. <img src="https://img.shields.io/github/stars/chaobrain/brainstate?style=social" align="center">向けのState-based Transformation System。
    - [braintaichi](https://github.com/chaobrain/braintaichi) - Taichi Langを活用した脳動力学演算子のカスタマイズ。<img src="https://img.shields.io/github/stars/chaobrain/braintaichi?style=social" align="center">
- [OTT-JAX](https://github.com/ott-jax/ott) - JAXにおける最適輸送ツール。<img src="https://img.shields.io/github/stars/ott-jax/ott?style=social" align="center">
- [QDax](https://github.com/adaptive-intelligent-robotics/QDax) - Jaxにおける品質多様性最適化。<img src="https://img.shields.io/github/stars/adaptive-intelligent-robotics/QDax?style=social" align="center">
- [JAX Toolbox](https://github.com/NVIDIA/JAX-Toolbox) - JAX on NVIDIA GPUs using libraries such as T5x, Paxml, and Transformer Engine. <img src="https://img.shields.io/github/stars/NVIDIA/JAX-Toolbox?style=social" align="center">向けのNightly CI and optimized examples。
- [Pgx](http://github.com/sotetsuk/pgx) - RL with an AlphaZero example. <img src="https://img.shields.io/github/stars/sotetsuk/pgx?style=social" align="center">向けのVectorized board game environments。
- [EasyDeL](https://github.com/erfanzar/EasyDeL) - training and serving (Llama, MPT, Mixtral, Falcon, etc) in JAX <img src="https://img.shields.io/github/stars/erfanzar/EasyDeL?style=social" align="center">向けのEasyDeL 🔮 is an OpenSource Library to make your training faster and more Optimized With cool Options。
- [XLB](https://github.com/Autodesk/XLB) - Physics-Based Machine Learning. <img src="https://img.shields.io/github/stars/Autodesk/XLB?style=social" align="center">向けのA Differentiable Massively Parallel Lattice Boltzmann Library in Python。
- [dynamiqs](https://github.com/dynamiqs/dynamiqs) - JAXを用いた量子系の高性能かつ微分可能なシミュレーション。<img src="https://img.shields.io/github/stars/dynamiqs/dynamiqs?style=social" align="center">
- [foragax](https://github.com/i-m-iron-man/Foragax) - JAXにおけるアグリーティブなモデリングフレームワーク。<img src="https://img.shields.io/github/stars/i-m-iron-man/Foragax?style=social" align="center">
- [tmmax](https://github.com/bahremsd/tmmax) - thin-film optics research <img src="https://img.shields.io/github/stars/bahremsd/tmmax" align="center">向けのVectorized calculation of optical properties in thin-film structures using JAX. Swiss Army knife tool。
- [Coreax](https://github.com/gchq/coreax) - finding coresets to compress large datasets while retaining their statistical properties. <img src="https://img.shields.io/github/stars/gchq/coreax?style=social" align="center">向けのAlgorithms。
- [NAVIX](https://github.com/epignatelli/navix) - 強化学習環境MiniGridのJAXによる再実装。<img src="https://img.shields.io/github/stars/epignatelli/navix?style=social" align="center">
- [FDTDX](https://github.com/ymahlau/fdtdx) - JAXを用いた有限差分時域電磁シミュレーション。<img src="https://img.shields.io/github/stars/ymahlau/fdtdx?style=social" align="center">
- [DiffeRT](https://github.com/jeertmans/DiffeRT) - Radio Propagation powered by the JAX ecosystem. <img src="https://img.shields.io/github/stars/jeertmans/DiffeRT?style=social" align="center">向けのDifferentiable Ray Tracing toolbox。
- [JAX-in-Cell](https://github.com/uwplasma/JAX-in-Cell) - electron and ion dynamics in electromagnetic fields <img src="https://img.shields.io/github/stars/uwplasma/JAX-in-Cell?style=social" align="center">向けのPlasma physics simulations using a PIC (Particle-in-Cell) method to self-consistently solve。
- [kvax](https://github.com/nebius/kvax) - JAX with support for efficient document mask computation and context parallelism. <img src="https://img.shields.io/github/stars/nebius/kvax?style=social" align="center">向けのA FlashAttention implementation。
- [astronomix](https://github.com/leo1200/astronomix) - astrophysics in JAX <img src="https://img.shields.io/github/stars/leo1200/astronomix?style=social" align="center">向けのdifferentiable (magneto)hydrodynamics。
- [vivsim](https://github.com/haimingz/vivsim) - 浸没境界-格子ボルツマン法を用いた流体-構造相互作用シミュレーション。<img src="https://img.shields.io/github/stars/haimingz/vivsim?style=social" align="center">
- [MBIRJAX](https://github.com/cabouman/mbirjax) - 高性能トモグラフィ再構成。<img src="https://img.shields.io/github/stars/cabouman/mbirjax?style-social" align="center">
- [torchax](https://github.com/google/torchax/) - Jax to interoperate with model code written in PyTorch.<img src="https://img.shields.io/github/stars/google/torchax?style=social" align="center">向けのtorchax is a library。

<a name="models-and-projects" />

## モデルとプロジェクト

### JAX

- [Fourier Feature Networks](https://github.com/tancik/fourier-feature-networks) - の公式実装。<img src=" align="center"> [_Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains_](https://people.eecs.berkeley.edu/~bmild/fourfeat)
- [kalman-jax](https://github.com/AaltoML/kalman-jax) - Markov (i.e., temporal) Gaussian processes using iterated Kalman filtering and smoothing向けのApproximate inference。
- [jaxns](https://github.com/Joshuaalbert/jaxns) - JAXにおけるネストサンプリング
- [Amortized Bayesian Optimization](https://github.com/google-research/google-research/tree/master/amortized_bo) - [_Amortized Bayesian Optimization over Discrete Spaces_](http://www.auai.org/uai2020/proceedings/329_main_paper.pdf)に関連するコード。
- [Accurate Quantized Training](https://github.com/google-research/google-research/tree/master/aqt) - running and analyzing neural network quantization experiments in JAX and Flax向けのTools and libraries。
- [BNN-HMC](https://github.com/google-research/google-research/tree/master/bnn_hmc) - [_What Are Bayesian Neural Network Posteriors Really Like?_](https://arxiv.org/abs/2104.14421)論文の実装。
- [JAX-DFT](https://github.com/google-research/google-research/tree/master/jax_dft) - JAXにおける一次元密度関数理論（DFT）の実装、[_Kohn-Sham equations as regularizer: building prior knowledge into machine-learned physics_](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.036401)の実装。
- [Robust Loss](https://github.com/google-research/google-research/tree/master/robust_loss_jax) - [_A General and Adaptive Robust Loss Function_](https://arxiv.org/abs/1701.03077)論文の参照実装。
- [Symbolic Functionals](https://github.com/google-research/google-research/tree/master/symbolic_functionals) - [_Evolving symbolic density functionals_](https://arxiv.org/abs/2203.02540)に関するデモンストレーション。
- [TriMap](https://github.com/google-research/google-research/tree/master/trimap) - [_TriMap: Large-scale Dimensionality Reduction Using Triplets_](https://arxiv.org/abs/1910.00204)の公式JAX実装。

### Flax

- [awesome-jax-flax-llms](https://github.com/your-username/awesome-jax-flax-llms) - **JAX**・**Flax**で実装されたLLMのコレクション
- [DeepSeek-R1-Flax-1.5B-Distill](https://github.com/J-Rosser-UK/Torch2Jax-DeepSeek-R1-Distill-Qwen-1.5B) - DeepSeek-R1 1.5Bの蒸留推論LLMのFlax実装
- [Performer](https://github.com/google-research/google-research/tree/master/performer/fast_attention/jax) - Performer（FAVOR+による線形トランスフォーマー）アーキテクチャのFlax実装
- [JaxNeRF](https://github.com/google-research/google-research/tree/master/jaxnerf) - マルチデバイスGPU／TPUをサポートする[_NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis_](http://www.matthewtancik.com/nerf)の実装。
- [mip-NeRF](https://github.com/google/mipnerf) - [_Mip-NeRF: A Multiscale Representation for Anti-Aliasing Neural Radiance Fields_](https://jonbarron.info/mipnerf)の公式実装。
- [RegNeRF](https://github.com/google-research/google-research/tree/master/regnerf) - [_RegNeRF: Regularizing Neural Radiance Fields for View Synthesis from Sparse Inputs_](https://m-niemeyer.github.io/regnerf/)の公式実装。
- [JaxNeuS](https://github.com/huangjuite/jaxneus) - [_NeuS: Learning Neural Implicit Surfaces by Volume Rendering for Multi-view Reconstruction_](https://lingjie0206.github.io/papers/NeuS/)の実装。
- [Big Transfer (BiT)](https://github.com/google-research/big_transfer) - [_Big Transfer (BiT): General Visual Representation Learning_](https://arxiv.org/abs/1912.11370)の実装。
- [JAX RL](https://github.com/ikostrikov/jax-rl) - 強化学習アルゴリズムの実装
- [gMLP](https://github.com/SauravMaheshkar/gMLP) - [_Pay Attention to MLPs_](https://arxiv.org/abs/2105.08050)の実装。
- [MLP Mixer](https://github.com/SauravMaheshkar/MLP-Mixer) - [_MLP-Mixer: An all-MLP Architecture for Vision_](https://arxiv.org/abs/2105.01601)の最小実装。
- [Distributed Shampoo](https://github.com/google-research/google-research/tree/master/scalable_shampoo) - [_Second Order Optimization Made Practical_](https://arxiv.org/abs/2002.09018)の実装。
- [NesT](https://github.com/google-research/nested-transformer) - [_Aggregating Nested Transformers_](https://arxiv.org/abs/2105.12723)の公式実装
- [XMC-GAN](https://github.com/google-research/xmcgan_image_generation) - [_Cross-Modal Contrastive Learning for Text-to-Image Generation_](https://arxiv.org/abs/2101.04702)の公式実装。
- [FNet](https://github.com/google-research/google-research/tree/master/f_net) - [_FNet: Mixing Tokens with Fourier Transforms_](https://arxiv.org/abs/2105.03824)の公式実装
- [GFSA](https://github.com/google-research/google-research/tree/master/gfsa) - [_Learning Graph Structure With A Finite-State Automaton Layer_](https://arxiv.org/abs/2007.04929)の公式実装
- [IPA-GNN](https://github.com/google-research/google-research/tree/master/ipagnn) - [_Learning to Execute Programs with Instruction Pointer Attention Graph Neural Networks_](https://arxiv.org/abs/2010.12621)の公式実装
- [Flax Models](https://github.com/google-research/google-research/tree/master/flax_models) - Flaxで実装されたモデルと手法のコレクション
- [Protein LM](https://github.com/google-research/google-research/tree/master/protein_lm) - proteins, as described in [_Biological Structure and Function Emerge from Scaling Unsupervised Learning to 250 Million Protein Sequences_](https://www.biorxiv.org/content/10.1101/622803v1.full) and [_ProGen: Language Modeling for Protein Generation_](https://www.biorxiv.org/content/10.1101/2020.03.07.982272v2)向けのImplements BERT and autoregressive models。
- [Slot Attention](https://github.com/google-research/google-research/tree/master/ptopk_patch_selection) - [_Differentiable Patch Selection for Image Recognition_](https://arxiv.org/abs/2104.03059)向けのReference implementation。
- [Vision Transformer](https://github.com/google-research/vision_transformer) - [_An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale_](https://arxiv.org/abs/2010.11929)の公式実装。
- [FID computation](https://github.com/matthias-wright/jax-fid) - [mseitzer/pytorch-fid](https://github.com/mseitzer/pytorch-fid)のFlaxへの移植
- [ARDM](https://github.com/google-research/google-research/tree/master/autoregressive_diffusion) - [_Autoregressive Diffusion Models_](https://arxiv.org/abs/2110.02037)の公式実装
- [D3PM](https://github.com/google-research/google-research/tree/master/d3pm) - [_Structured Denoising Diffusion Models in Discrete State-Spaces_](https://arxiv.org/abs/2107.03006)の公式実装
- [Gumbel-max Causal Mechanisms](https://github.com/google-research/google-research/tree/master/gumbel_max_causal_gadgets) - [_Learning Generalized Gumbel-max Causal Mechanisms_](https://arxiv.org/abs/2111.06888), with extra code in [GuyLor/gumbel_max_causal_gadgets_part2](https://github.com/GuyLor/gumbel_max_causal_gadgets_part2)向けのCode。
- [Latent Programmer](https://github.com/google-research/google-research/tree/master/latent_programmer) - ICML 2021の[_Latent Programmer: Discrete Latent Codes for Program Synthesis_](https://arxiv.org/abs/2012.00377)論文のコード。
- [SNeRG](https://github.com/google-research/google-research/tree/master/snerg) - [_Baking Neural Radiance Fields for Real-Time View Synthesis_](https://phog.github.io/snerg)の公式実装。
- [Spin-weighted Spherical CNNs](https://github.com/google-research/google-research/tree/master/spin_spherical_cnns) - [_Spin-Weighted Spherical CNNs_](https://arxiv.org/abs/2006.10731)の適応
- [VDVAE](https://github.com/google-research/google-research/tree/master/vdvae_flax) - [_Very Deep VAEs Generalize Autoregressive Models and Can Outperform Them on Images_](https://arxiv.org/abs/2011.10650)の適応。オリジナルコードは[openai/vdvae](https://github.com/openai/vdvae)に存在
- [MUSIQ](https://github.com/google-research/google-research/tree/master/musiq) - ICCV 2021の[_MUSIQ: Multi-scale Image Quality Transformer_](https://arxiv.org/abs/2108.05997)論文向けチェックポイントとモデル推論コード。
- [AQuaDem](https://github.com/google-research/google-research/tree/master/aquadem) - [_Continuous Control with Action Quantization from Demonstrations_](https://arxiv.org/abs/2110.10149)の公式実装
- [Combiner](https://github.com/google-research/google-research/tree/master/combiner) - [_Combiner: Full Attention Transformer with Sparse Computation Cost_](https://arxiv.org/abs/2107.05768)の公式実装
- [Dreamfields](https://github.com/google-research/google-research/tree/master/dreamfields) - the ICLR 2022 paper [_Progressive Distillation for Fast Sampling of Diffusion Models_](https://ajayj.com/dreamfields)の公式実装。
- [GIFT](https://github.com/google-research/google-research/tree/master/gift) - [_Gradual Domain Adaptation in the Wild:When Intermediate Distributions are Absent_](https://arxiv.org/abs/2106.06080)の公式実装
- [Light Field Neural Rendering](https://github.com/google-research/google-research/tree/master/light_field_neural_rendering) - [_Light Field Neural Rendering_](https://arxiv.org/abs/2112.09687)の公式実装
- [Sharpened Cosine Similarity in JAX by Raphael Pisoni](https://colab.research.google.com/drive/1KUKFEMneQMS3OzPYnWZGkEnry3PdzCfn?usp=sharing) - JAX/Flax による鋭いコサイン類似度層の実装
- [GNNs for Solving Combinatorial Optimization Problems](https://github.com/IvanIsCoding/GNN-for-Combinatorial-Optimization) - JAX + Flaxによる[Combinatorial Optimization with Physics-Inspired Graph Neural Networks](https://arxiv.org/abs/2107.01188)の実装
- [DETR](https://github.com/MasterSkepticista/detr) - Sinkhornソルバーと並列双対マッチングを用いた[_DETR: End-to-end Object Detection with Transformers_](https://github.com/facebookresearch/detr)のFlax実装

### Haiku

- [AlphaFold](https://github.com/deepmind/alphafold) - AlphaFold v2.0で提示された[_Highly accurate protein structure prediction with AlphaFold_](https://www.nature.com/articles/s41586-021-03819-2)の推論パイプライン実装
- [Adversarial Robustness](https://github.com/deepmind/deepmind-research/tree/master/adversarial_robustness) - [_Uncovering the Limits of Adversarial Training against Norm-Bounded Adversarial Examples_](https://arxiv.org/abs/2010.03593) and [_Fixing Data Augmentation to Improve Adversarial Robustness_](https://arxiv.org/abs/2103.01946)向けのReference code。
- [Bootstrap Your Own Latent](https://github.com/deepmind/deepmind-research/tree/master/byol) - [_Bootstrap your own latent: A new approach to self-supervised Learning_](https://arxiv.org/abs/2006.07733)論文の実装。
- [Gated Linear Networks](https://github.com/deepmind/deepmind-research/tree/master/gated_linear_networks) - GLNsは、バックプロパゲーションなしのニューラルネットワークのファミリーである
- [Glassy Dynamics](https://github.com/deepmind/deepmind-research/tree/master/glassy_dynamics) - [_Unveiling the predictive power of static structure in glassy systems_](https://www.nature.com/articles/s41567-020-0842-8)論文のオープンソース実装。
- [MMV](https://github.com/deepmind/deepmind-research/tree/master/mmv) - the models in [_Self-Supervised MultiModal Versatile Networks_](https://arxiv.org/abs/2006.16228)向けのCode。
- [Normalizer-Free Networks](https://github.com/deepmind/deepmind-research/tree/master/nfnets) - [_NFNets_](https://arxiv.org/abs/2102.06171)の公式Haiku実装
- [NuX](https://github.com/Information-Fusion-Lab-Umass/NuX) - JAXにおけるノーマライズフローの実装
- [OGB-LSC](https://github.com/deepmind/deepmind-research/tree/master/ogb_lsc) - DeepMindが[PCQM4M-LSC](https://ogb.stanford.edu/kddcup2021/pcqm4m/)（量子化学）と[MAG240M-LSC](https://ogb.stanford.edu/kddcup2021/mag240m/)（学術グラフ）を
[OGB Large-Scale Challenge](https://ogb.stanford.edu/kddcup2021/)（OGB-LSC）へ提出した実装。
- [Persistent Evolution Strategies](https://github.com/google-research/google-research/tree/master/persistent_es) - [_Unbiased Gradient Estimation in Unrolled Computation Graphs with Persistent Evolution Strategies_](http://proceedings.mlr.press/v139/vicol21a.html)論文で使用したコード。
- [Two Player Auction Learning](https://github.com/degregat/two-player-auctions) - [_Auction learning as a two-player game_](https://arxiv.org/abs/2006.05684)論文のJAX実装。
- [WikiGraphs](https://github.com/deepmind/deepmind-research/tree/master/wikigraphs) - [_WikiGraphs: A Wikipedia Text - Knowledge Graph Paired Datase_](https://aclanthology.org/2021.textgraphs-1.7)の結果を再現するベースラインコード。

### Trax

- [Reformer](https://github.com/google/trax/tree/master/trax/models/reformer) - Reformer（効率的なトランスフォーマー）アーキテクチャの実装

### NumPyro

- [lqg](https://github.com/RothkopfLab/lqg) - linear-quadratic Gaussian problems from the paper [_Putting perception into action with inverse optimal control for continuous psychophysics_](https://elifesciences.org/articles/76635)向けのOfficial implementation of Bayesian inverse optimal control。


### Equinox

- [Sampling Path Candidates with Machine Learning](https://differt.eertmans.be/icmlcn2025/notebooks/sampling_paths.html) - [_Towards Generative Ray Path Sampling for Faster Point-to-Point Ray Tracing_](https://arxiv.org/abs/2410.23773)論文の公式チュートリアル兼実装。

<a name="videos" />

## 動画

- [NeurIPS 2020: JAX Ecosystem Meetup](https://www.youtube.com/watch?v=iDxJxIyzSiM) - JAX、DeepMindでの利用、およびエンジニア、科学者、JAXコアチームとのディスカッション
- [Introduction to JAX](https://youtu.be/0mVmRHMaOJ4) - JAXでゼロからシンプルなニューラルネットワークの実装
- [JAX: Accelerated Machine Learning Research | SciPy 2020 | VanderPlas](https://youtu.be/z-WSrQDXkuM) - JAXの核心設計、新たな研究への貢献、およびその利用を開始する方法について。
- [Bayesian Programming with JAX + NumPyro — Andy Kitchen](https://youtu.be/CecuWGpoztw) - NumPyroを用いたベイズモデルの導入講座。
- [JAX: Accelerated machine-learning research via composable function transformations in Python | NeurIPS 2019 | Skye Wanderman-Milne](https://slideslive.com/38923687/jax-accelerated-machinelearning-research-via-composable-function-transformations-in-python) - [_Program Transformations for Machine Learning_](https://program-transformations.github.io)ワークショップでのJAX入門発表。
- [JAX on Cloud TPUs | NeurIPS 2020 | Skye Wanderman-Milne and James Bradbury](https://drive.google.com/file/d/1jKxefZT1xJDUxMman6qrQVed7vWI0MIn/edit) - TPUホストアクセスの紹介とデモ。
- [Deep Implicit Layers - Neural ODEs, Deep Equilibirum Models, and Beyond | NeurIPS 2020](https://slideslive.com/38935810/deep-implicit-layers-neural-odes-equilibrium-models-and-beyond) - Zico Kolter、David Duvenaud、Matt Johnson が作成したチュートリアル．Colabノートブックは [_Deep Implicit Layers_](http://implicit-layers-tutorial.org) に公開されている．
- [Solving y=mx+b with Jax on a TPU Pod slice - Mat Kelcey](http://matpalm.com/blog/ymxb_pod_slice/) - v3-32 TPU Podスライス上でデータ並列アプローチによる訓練まで進む、YouTubeチュートリアルシリーズ（Colabノートブック付き）。
- [JAX, Flax & Transformers 🤗](https://github.com/huggingface/transformers/blob/9160d81c98854df44b1d543ce5d65a6aa28444a2/examples/research_projects/jax-projects/README.md#talks) - JAX／Flax、Transformer、大規模言語モデルなど、素晴らしいテーマを中心に3日間の講演会。

<a name="papers" />

## 論文

この節にはJAXを主題とする論文（JAXベースのライブラリのホワイトペーパーやJAX自体の研究など）を掲載します。JAXで実装された論文は[モデル／プロジェクト](#projects)節に掲載します。


- [__Compiling machine learning programs via high-level tracing__. Roy Frostig, Matthew James Johnson, Chris Leary. _MLSys 2018_.](https://mlsys.org/Conferences/doc/2018/146.pdf) - JAXの初期バージョンについての白書。計算のトレースとコンパイル方法を詳細に説明。
- [__JAX, M.D.: A Framework for Differentiable Physics__. Samuel S. Schoenholz, Ekin D. Cubuk. _NeurIPS 2020_.](https://arxiv.org/abs/1912.04232) - JAX、M.D.を導入する。これはシミュレーション環境、相互作用ポテンシャル、ニューラルネットワークなどを含む微分可能物理ライブラリである。
- [__Enabling Fast Differentially Private SGD via Just-in-Time Compilation and Vectorization__. Pranav Subramani, Nicholas Vadivelu, Gautam Kamath. _arXiv 2020_.](https://arxiv.org/abs/2010.09063) - JAXのJITとVMAPを活用し、既存のライブラリよりも高速な差分プライバシーを達成する。
- [__XLB: A Differentiable Massively Parallel Lattice Boltzmann Library in Python__. Mohammadmehdi Ataei, Hesam Salehipour. _arXiv 2023_.](https://arxiv.org/abs/2311.16080) - XLBライブラリに関する白書：ベンチマーク、検証、ライブラリの詳細情報について。



<a name="tutorials-and-blog-posts" />

## チュートリアルとブログ記事

- [Using JAX to accelerate our research by David Budden and Matteo Hessel](https://deepmind.com/blog/article/using-jax-to-accelerate-our-research) - DeepMindにおけるJAXおよびJAXエコシステムの現状について説明する。
- [Getting started with JAX (MLPs, CNNs & RNNs) by Robert Lange](https://roberttlange.github.io/posts/2020/03/blog-post-10/) - 基本的なJAX演算子から始めて、ニューラルネットワークの構成ブロックを構築する。
- [Learn JAX: From Linear Regression to Neural Networks by Rito Ghosh](https://www.kaggle.com/code/truthr/jax-0) - JAXの基礎を丁寧に解説し、線形回帰やロジスティック回帰、ニューラルネットワークモデルを実装し、現実世界の問題に応用する方法を紹介する。
- [Tutorial: image classification with JAX and Flax Linen by 8bitmp3](https://github.com/8bitmp3/JAX-Flax-Tutorial-Image-Classification-with-Linen) - FlaxのLinen APIを使ってシンプルなコネクショナルネットワークを作成し、手書き数字を認識できるように訓練する方法を学習する。
- [Plugging Into JAX by Nick Doiron](https://medium.com/swlh/plugging-into-jax-16c120ec3302) - Kaggleの花の分類チャレンジにおいて、Flax、Haiku、Objaxの比較を紹介する。
- [Meta-Learning in 50 Lines of JAX by Eric Jang](https://blog.evjang.com/2019/02/maml-jax.html) - JAXとメタ学習についての概要を解説する。
- [Normalizing Flows in 100 Lines of JAX by Eric Jang](https://blog.evjang.com/2019/07/nf-jax.html) - [RealNVP](https://arxiv.org/abs/1605.08803) の簡潔な実装．
- [Differentiable Path Tracing on the GPU/TPU by Eric Jang](https://blog.evjang.com/2019/11/jaxpt.html) - パスティングの実装に関するチュートリアル。
- [Ensemble networks by Mat Kelcey](http://matpalm.com/blog/ensemble_nets) - アンサンブルネットは、複数のモデルを1つの論理モデルとして表現する手法である。
- [Out of distribution (OOD) detection by Mat Kelcey](http://matpalm.com/blog/ood_using_focal_loss) - OOD detection向けのImplements different methods。
- [Understanding Autodiff with JAX by Srihari Radhakrishna](https://www.radx.in/jax.html) - JAXを使って自動微分がどのように機能するかを理解する。
- [From PyTorch to JAX: towards neural net frameworks that purify stateful code by Sabrina J. Mielke](https://sjmielke.com/jax-purify.htm) - パイトorch風のコードスタイルから機能型コードスタイルへの移行方法を示す。
- [Extending JAX with custom C++ and CUDA code by Dan Foreman-Mackey](https://github.com/dfm/extending-jax) - JAXでカスタムオペレーションを提供するためのインフラストラクチャを解説するチュートリアル。
- [Evolving Neural Networks in JAX by Robert Tjarko Lange](https://roberttlange.github.io/posts/2021/02/cma-es-jax/) - JAXがスケーラブルなニューローエволユーションアルゴリズムの次世代を支える方法を検証する。
- [Exploring hyperparameter meta-loss landscapes with JAX by Luke Metz](http://lukemetz.com/exploring-hyperparameter-meta-loss-landscapes-with-jax/) - JAXを用いて、内側損失の最適化（SGDおよびモーメンタム）、外側損失の勾配最適化、および進化戦略による外側損失最適化を行う方法を示す。
- [Deterministic ADVI in JAX by Martin Ingram](https://martiningram.github.io/deterministic-advi/) - JAXを用いて、自動微分変分推論（ADVI）を簡単にかつクリーンに実装するプロセスを解説する。
- [Evolved channel selection by Mat Kelcey](http://matpalm.com/blog/evolved_channel_selection/) - a particular loss向けのTrains a classification model robust to different combinations of input channels at different resolutions, then uses a genetic algorithm to decide the best combination。
- [Introduction to JAX by Kevin Murphy](https://colab.research.google.com/github/probml/probml-notebooks/blob/main/notebooks/jax_intro.ipynb) - 言語のさまざまな側面を紹介し、簡単な機械学習問題に応用するColab。
- [Writing an MCMC sampler in JAX by Jeremie Coullon](https://www.jeremiecoullon.com/2020/11/10/mcmcjax3ways/) - JAXでMCMCサンプラーを書くさまざまな方法についてのチュートリアルと、性能ベンチマーク。
- [How to add a progress bar to JAX scans and loops by Jeremie Coullon](https://www.jeremiecoullon.com/2021/01/29/jax_progress_bar/) - JAXにおけるコンパイルされたループに進行バーを追加する方法についてのチュートリアル． `host_callback` モジュールを使用する．
- [Get started with JAX by Aleksa Gordić](https://github.com/gordicaleksa/get-started-with-JAX) - ゼロからJAXの知識を身につけ、Haikuでニューラルネットワークを構築するまでのノートブックと動画シリーズ。
- [Writing a Training Loop in JAX + FLAX by Saurav Maheshkar and Soumik Rakshit](https://wandb.ai/jax-series/simple-training-loop/reports/Writing-a-Training-Loop-in-JAX-FLAX--VmlldzoyMzA4ODEy) - JAX、Flax、Optaxを使ってシンプルな端到端のトレーニングと評価パイプラインを書くチュートリアル。
- [Implementing NeRF in JAX by Soumik Rakshit and Saurav Maheshkar](https://wandb.ai/wandb/nerf-jax/reports/Implementing-NeRF-in-JAX--VmlldzoxODA2NDk2?galleryTag=jax) - JAXでニューラルラジエンスフィールドによって表現されたシーンの3D体積レンダリングについてのチュートリアル。
- [Deep Learning tutorials with JAX+Flax by Phillip Lippe](https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/JAX/tutorial2/Introduction_to_JAX.html) - 基礎から最新のディープラーニング概念（例：JAX/Flaxの紹介、活性化関数）まで、PyTorchへの翻訳付きのさまざまな深層学習概念を解説するノートブックシリーズ。
- [Achieving 4000x Speedups with PureJaxRL](https://chrislu.page/blog/meta-disco/) - JAXがベクトル化によって強化学習のトレーニングを大幅に加速する方法についてのブログ記事。
- [Simple PDE solver + Constrained Optimization with JAX by Philip Mocz](https://levelup.gitconnected.com/create-your-own-automatically-differentiable-simulation-with-python-jax-46951e120fbb?sk=e8b9213dd2c6a5895926b2695d28e4aa) - JAXを用いて拡散伝導方程式を解く簡単な例と、その結果を制約付き最適化問題に適用して、望ましい結果をもたらす初期条件を求める方法。

<a name="books" />

## 書籍

- [Jax in Action](https://www.manning.com/books/jax-in-action) - JAXを体系的に学ぶための書籍です。

<a name="community" />

## コミュニティ

- [JaxLLM (Unofficial) Discord](https://discord.com/channels/1107832795377713302/1107832795688083561)
- [JAX GitHub Discussions](https://github.com/google/jax/discussions)
- [Reddit](https://www.reddit.com/r/JAX/)

## コントリビューション

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/n2cholas/awesome-jax/blob/ccc12842b71f0d61ce555ec147244a6c303557ce/contributing.md)をお読みください。
