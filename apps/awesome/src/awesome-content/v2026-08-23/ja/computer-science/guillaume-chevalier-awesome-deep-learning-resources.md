---
title: "Awesome Deep Learning Resources"
description: "Deep Learning Resourcesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-guillaume-chevalier-awesome-deep-learning-resources-readme-md"
---

# Awesome Deep Learning Resources

Deep Learning Resourcesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [動向](#trends)
- [オンライン講座](#online-classes)
- [書籍](#books)
- [投稿と記事](#posts-and-articles)
- [実践資料](#practical-resources)
  - [ライブラリと実装](#librairies-and-implementations)
  - [データセット](#some-datasets)
- [その他の数学理論](#other-math-theory)
  - [勾配降下アルゴリズムと最適化](#gradient-descent-algorithms-and-optimization)
  - [複素数とデジタル信号処理](#complex-numbers-and-digital-signal-processing)
- [論文](#papers)
  - [再帰型ニューラルネットワーク](#recurrent-neural-networks)
  - [畳み込みニューラルネットワーク](#convolutional-neural-networks)
  - [Attention機構](#attention-mechanisms)
  - [その他](#other)
- [YouTubeと動画](#youtube)
- [その他のハブとリンク](#misc-hubs-and-links)
- [ライセンス](#license)

<a name="trends" />

## 動向

2004年から2017年9月までの[Google Trends](https://www.google.ca/trends/explore?date=all&q=machine%20learning,deep%20learning,data%20science,computer%20programming)全期間データです。
<p align="center">
  <img src="google_trends.png" width="792" height="424" />
</p>

機械学習研究の動向については、Andrej Karpathy の[新しい投稿](https://medium.com/@karpathy/a-peek-at-trends-in-machine-learning-ab8a1085a106)も参考になります。

私は、コンピューターをより人間らしく考えさせる鍵が深層学習にあり、大きな可能性を持つと考えています。従来のアルゴリズムでは不可能だった難しい自動化タスクを、容易に解決できる場合があります。

計算機ハードウェアの指数的進歩を示すムーアの法則は、原子トランジスターを小さくできる物理的限界により、CPU より GPU へ強く影響するようになりました。私たちは並列アーキテクチャへ移行しています
[[続きを読む](https://www.quora.com/Does-Moores-law-apply-to-GPUs-Or-only-CPUs)]。深層学習は GPU を使い、内部でそのような並列アーキテクチャを活用します。将来は量子コンピューティングを利用し、脳・機械インターフェースへ応用される可能性もあります。

知性と認知の鍵は非常に興味深い研究対象であり、まだ十分には理解されていません。これらの技術には期待が持てます。


<a name="online-classes" />

## オンライン講座

- **[DL&RNN Course](https://www.dl-rnn-course.neuraxio.com/start?utm_source=github_awesome) - 私が作成した、深層学習と再帰型ニューラルネットワークに関する内容豊富な講座です。**
- [Andrew Ng の Coursera Machine Learning](https://www.coursera.org/learn/machine-learning) - 著名な初級オンライン講座で、[修了証](https://www.coursera.org/account/accomplishments/verify/DXPXHYFNGKG3)があります。講師：Andrew Ng（Stanford University 准教授、Baidu Chief Scientist、Coursera 会長・共同創業者）。
- [Andrew Ng の Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) - Matlab/Octave ではなく Python を使う、Andrew Ng による新しい5講座のシリーズ。[専門修了証](https://www.coursera.org/account/accomplishments/specialization/U7VNC3ZD9YD8)につながります。
- [Google の Deep Learning](https://www.udacity.com/course/deep-learning--ud730) - 高水準の深層学習概念を扱う中〜上級講座。基礎習得後に発想を広げるのに役立ちました。
- [Georgia Tech の Machine Learning for Trading](https://www.udacity.com/course/machine-learning-for-trading--ud501) - 取引に応用する機械学習の基礎と、AI・金融の概念を学べる興味深い講座。特に Q-Learning の章が気に入りました。
- [Université de Sherbrooke、Hugo Larochelle の Neural networks class](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH) - Hugo Larochelle による無料の興味深いニューラルネットワーク講座。私はまだ一部の動画だけを視聴しています。
- [GLO-4030/7030 Apprentissage par réseaux de neurones profonds](https://ulaval-damas.github.io/glo4030/) - University Laval の Philippe Giguère 教授による講座。珍しい Multi-Head Attention の可視化が特に優れており、[第13週講義のスライド28](http://www2.ift.ulaval.ca/~pgiguere/cours/DeepLearning/09-Attention.pdf)で確認できます。
- [Deep Learning & Recurrent Neural Networks (DL&RNN)](https://www.neuraxio.com/en/time-series-solution) - 深層学習と再帰型ニューラルネットワークを扱う、非常に内容の濃い速習講座（末尾までスクロール）。

<a name="books" />

## 書籍

- [Clean Code](https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) - 基礎に立ち返りましょう。キャリアに役立つ Clean Code を学べます。深層学習のリストであっても、私が読んだ中で断然最良の本です。
- [Clean Coder](https://www.amazon.ca/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073) - プログラマーとして専門的に振る舞い、管理者とやり取りする方法を学びます。あらゆる開発職に重要です。
- [How to Create a Mind](https://www.amazon.com/How-Create-Mind-Thought-Revealed/dp/B009VSFXZ4) - 通勤中には音声版が快適です。心をリバースエンジニアリングし、AI の実装を考える意欲を与えます。
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/index.html) - ニューラルネットワークと深層学習の中核概念を多数扱います。
- [Deep Learning - An MIT Press book](http://www.deeplearningbook.org/) - 私はまだ半分までですが、実際の深層学習を考えるための十分な数学的内容があります。
- [私が読んだその他の書籍](https://books.google.ca/books?hl=en&as_coll=4&num=100&uid=103409002069648430166&source=gbs_slider_cls_metadata_4_mylibrary_title) - 深層学習との関係が薄い本もありますが、このリストに何らかの関連があります。

<a name="posts-and-articles" />

## 投稿と記事

- [Ray Kurzweil による予測](https://en.wikipedia.org/wiki/Predictions_made_by_Ray_Kurzweil) - Ray Kurzweil による中長期の未来予測一覧。
- [The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) - Andrej Karpathy による必読記事。私が RNN を学ぶきっかけとなり、最も基本的な NLP 形式で達成できることを示します。
- [Neural Networks, Manifolds, and Topology](http://colah.github.io/posts/2014-03-NN-Manifolds-Topology/) - ニューロンによる情報マッピングへの新しい視点。
- [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) - LSTM セルの内部動作を説明し、結論には興味深いリンクがあります。
- [Attention and Augmented Recurrent Neural Networks](http://distill.pub/2016/augmented-rnns/) - 視覚的アニメーションが興味深く、Attention機構の分かりやすい入門例です。
- [深層学習による Spotify の音楽推薦](http://benanne.github.io/2014/08/05/spotify-cnns.html) - 音声のクラスタリングに優れた、Spotify のインターンによる投稿。
- [Announcing SyntaxNet: The World’s Most Accurate Parser Goes Open Source](https://research.googleblog.com/2016/05/announcing-syntaxnet-worlds-most.html) - ニューラル構文木パーサー Parsey McParseface の誕生。
- [Improving Inception and Image Classification in TensorFlow](https://research.googleblog.com/2016/08/improving-inception-and-image.html) - 非常に興味深い CNN アーキテクチャ。Inception 形式の畳み込み層は有望で、パラメーター数の削減にも効率的です。
- [WaveNet: A Generative Model for Raw Audio](https://deepmind.com/blog/wavenet-generative-model-raw-audio/) - 現実的に話す機械、精巧な音声生成。
- [François Chollet の Twitter](https://twitter.com/fchollet) - Keras の作者。興味深い投稿と革新的なアイデアがあります。
- [Neuralink and the Brain’s Magical Future](http://waitbutwhy.com/2017/04/neuralink.html) - 脳と Brain-Computer Interface の未来について考えさせられる記事。
- [大容量ファイルを使う深層学習アプリ開発で Git LFS へ移行](http://vooban.com/en/tips-articles-geek-stuff/migrating-to-git-lfs-for-developing-deep-learning-applications-with-large-files/) - 非公開 Git プロジェクトの巨大ファイルを簡単に管理。
- [深層学習の未来](https://blog.keras.io/the-future-of-deep-learning.html) - 深層学習の未来に関する François Chollet の考察。
- [決定木でデータの背後にある構造を発見](http://vooban.com/en/tips-articles-geek-stuff/discover-structure-behind-data-with-decision-trees/) - 決定木を成長・可視化し、データの隠れた論理を推測します。
- [ニューラルネットワークのハイパーパラメーターを最適化する Hyperopt チュートリアル](http://vooban.com/en/tips-articles-geek-stuff/hyperopt-tutorial-for-optimizing-neural-networks-hyperparameters/) - 手作業ではなく、ハイパーパラメーター空間を自動で攻略する方法。
- [深層ニューラルネットワークの最適学習率の推定](https://medium.com/@surmenok/estimating-optimal-learning-rate-for-a-deep-neural-network-ce32f2556ce0) - 完全な学習を一度も行う前に最適学習率を推定する巧妙な方法。
 - [The Annotated Transformer](http://nlp.seas.harvard.edu/2018/04/03/attention.html) - 「Attention Is All You Need」（AIAYN）論文の理解に役立ちます。
 - [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/) - 同じく「Attention Is All You Need」（AIAYN）論文の理解に役立ちます。
 - [Improving Language Understanding with Unsupervised Learning](https://blog.openai.com/language-unsupervised/) - 巨大コーパスの教師なし事前学習により、多数の NLP タスクで SOTA を達成。
 - [NLP's ImageNet moment has arrived](https://thegradient.pub/nlp-imagenet/) - NLP に ImageNet の転機が訪れたことを論じます。
 - [The Illustrated BERT, ELMo, and co. (How NLP Cracked Transfer Learning)](https://jalammar.github.io/illustrated-bert/) - NLP の ImageNet 的転機で使われたさまざまな手法を理解できます。
 - [Uncle Bob's Principles Of OOD](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) - Clean Code には SOLID だけでなく、巨大なソフトウェアを分離パッケージへまとめる際に REP、CCP、CRP、ADP、SDP、SAP も重要です。
 - [なぜデータサイエンスプロジェクトの87%が本番へ到達しないのか](https://venturebeat.com/2019/07/19/why-do-87-of-data-science-projects-never-make-it-into-production/) - データを軽視せず、解決策の適切な統合にはチームとデータサイエンティストの意思疎通が重要です。
 - [多くの ML プロジェクトが失敗する本当の理由](https://towardsdatascience.com/what-is-the-main-reason-most-ml-projects-fail-515d409a161f) - 明確な事業目標に集中し、コードが十分きれいでない限りアルゴリズムの方向転換を避け、実装が「十分良い」時点を判断できるようにします。
 - [SOLID Machine Learning](https://www.umaneo.com/post/the-solid-principles-applied-to-machine-learning) - 機械学習へ SOLID 原則を適用。
 
<a name="practical-resources" />

## 実践資料

<a name="librairies-and-implementations" />

### ライブラリと実装
- [Neuraxle, a framwework for machine learning pipelines](https://github.com/Neuraxio/Neuraxle) - 機械学習プロジェクトの構造化とデプロイに優れ、Scikit-Learn、TensorFlow、PyTorch、Keras など多くのフレームワークと互換性があります。
- [TensorFlow の GitHub リポジトリ](https://github.com/tensorflow/tensorflow) - 柔軟性を保ちながら高水準・低水準の両方を扱う、最も有名な深層学習フレームワーク。
- [skflow](https://github.com/tensorflow/skflow) - scikit-learn 風の TensorFlow ラッパー。
- [Keras](https://keras.io/) - TensorFlow のような興味深い深層学習フレームワークで、主に高水準です。
- [carpedm20 のリポジトリ](https://github.com/carpedm20) - carpedm20 こと韓国の Taehoon Kim が、多数の興味深いニューラルネットワークアーキテクチャを実装しています。
- [carpedm20/NTM-tensorflow](https://github.com/carpedm20/NTM-tensorflow) - Neural Turing Machine の TensorFlow 実装。
- [Deep learning for lazybones](http://oduerr.github.io/blog/2016/04/06/Deep-Learning_for_lazybones) - 事前学習済み CNN AlexNet 2012 の高水準埋め込みを使う、TensorFlow の視覚向け転移学習チュートリアル。
- [LSTM for Human Activity Recognition (HAR)](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) - 時系列分類で LSTM を使う、私のチュートリアル。
- [Deep stacked residual bidirectional LSTMs for HAR](https://github.com/guillaume-chevalier/HAR-stacked-residual-bidir-LSTMs) - 前のプロジェクトを改善。
- [Sequence to Sequence (seq2seq) Recurrent Neural Network (RNN) for Time Series Prediction](https://github.com/guillaume-chevalier/seq2seq-signal-prediction) - マルチチャンネルにもなり得る数値の時間的系列を予測する、私のチュートリアル。
- [Hyperopt for a Keras CNN on CIFAR-100](https://github.com/guillaume-chevalier/Hyperopt-Keras-CNN-CIFAR-100) - CIFAR-100 上でニューラルネットワークとそのアーキテクチャを自動（メタ）最適化。
- [私が Star した ML / DL リポジトリ](https://github.com/guillaume-chevalier?direction=desc&page=1&q=machine+OR+deep+OR+learning+OR+rnn+OR+lstm+OR+cnn&sort=stars&tab=stars&utf8=%E2%9C%93) - GitHub には優れたコード例とプロジェクトが豊富にあります。
- [Smoothly Blend Image Patches](https://github.com/guillaume-chevalier/Smoothly-Blend-Image-Patches) - [U-Net によるセマンティックセグメンテーション](https://vooban.com/en/tips-articles-geek-stuff/satellite-image-segmentation-workflow-with-u-net/)向けの滑らかなパッチ結合。
- [Self Governing Neural Networks (SGNN): the Projection Layer](https://github.com/guillaume-chevalier/SGNN-Self-Governing-Neural-Networks-Projection-Layer) - 埋め込みの学習や読み込みなしで、深層学習モデルに単語を使用できます。
- [Neuraxle](https://github.com/Neuraxio/Neuraxle) - 整然としたパイプラインを構築し、ML アプリの研究、開発、デプロイを容易にする適切な抽象化を提供する機械学習ライブラリ。
- [Clean Machine Learning, a Coding Kata](https://github.com/Neuraxio/Kata-Clean-Machine-Learning-From-Dirty-Code) - 実践を通じて、機械学習を適切に行うための良い設計パターンを学びます。

<a name="some-datasets" />

### データセット

モデル開発に興味深いと思った資料です。

- [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets.html) - 機械学習向けの膨大なデータセット。
- [Cornell Movie--Dialogs Corpus](http://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html) - チャットボットに利用できます。
- [SQuAD The Stanford Question Answering Dataset](https://rajpurkar.github.io/SQuAD-explorer/) - オンラインで探索できる質問応答データセットと、高性能モデルの一覧。
- [LibriSpeech ASR corpus](http://www.openslr.org/12/) - 性別と話者のバランスが取れた、高品質と思われる巨大な無料英語音声データセット。
- [Awesome Public Datasets](https://github.com/caesar0301/awesome-public-datasets) - 公開データセットの Awesome リスト。
- [SentEval: An Evaluation Toolkit for Universal Sentence Representations](https://arxiv.org/abs/1803.05449) - 多数のデータセット（NLP タスク）で文表現をベンチマークする Python フレームワーク。
- [ParlAI: A Dialog Research Software Platform](https://arxiv.org/abs/1705.06476) - 多数のデータセット（NLP タスク）で文表現をベンチマークする、もう1つの Python フレームワーク。


<a name="other-math-theory" />

## その他の数学理論

<a name="gradient-descent-algorithms-and-optimization" />

### 勾配降下アルゴリズムと最適化理論

- [Neural Networks and Deep Learning 第2章](http://neuralnetworksanddeeplearning.com/chap2.html) - 誤差逆伝播アルゴリズムの仕組みの概要。
- [Neural Networks and Deep Learning 第4章](http://neuralnetworksanddeeplearning.com/chap4.html) - ニューラルネットが任意の関数を計算できることの視覚的証明。
- [Yes you should understand backprop](https://medium.com/@karpathy/yes-you-should-understand-backprop-e2f06eab496b#.mr5wq61fb) - 誤差逆伝播の注意点と、モデル学習時にそれを知る重要性を示します。
- [Artificial Neural Networks: Mathematics of Backpropagation](http://briandolhansky.com/blog/2013/9/27/artificial-neural-networks-backpropagation-part-4) - 誤差逆伝播を数学的に可視化。
- [Deep Learning Lecture 12: Recurrent Neural Nets and LSTMs](https://www.youtube.com/watch?v=56TYLaQN4N8) - RNN グラフの展開を適切に説明し、勾配降下アルゴリズムの潜在的問題を示します。
- [鞍点における勾配降下アルゴリズム](http://sebastianruder.com/content/images/2016/09/saddle_point_evaluation_optimizers.gif) - さまざまなオプティマイザーと鞍点の相互作用を可視化。
- [ほぼ平坦な地形における勾配降下アルゴリズム](https://devblogs.nvidia.com/wp-content/uploads/2015/12/NKsFHJb.gif) - さまざまなオプティマイザーとほぼ平坦な地形の相互作用を可視化。
- [Gradient Descent](https://www.youtube.com/watch?v=F6GSRDoB-Cg) - Andrew Ng の Coursera 講座は既に掲載しましたが、この動画は入門として特に適切で、勾配降下アルゴリズムを定義します。
- [Gradient Descent: Intuition](https://www.youtube.com/watch?v=YovTqTY-PYY) - 前の動画に続き、直感的な理解を加えます。
- [Gradient Descent in Practice 2: Learning Rate](https://www.youtube.com/watch?v=gX6fZHgfrow) - ニューラルネットワークの学習率を調整する方法。
- [The Problem of Overfitting](https://www.youtube.com/watch?v=u73PU6Qwl1I) - 過学習と、その問題への対処方法の優れた説明。
- [Diagnosing Bias vs Variance](https://www.youtube.com/watch?v=ewogYw5oCAI) - ニューラルネットの予測におけるバイアスと分散、および対処方法を理解します。
- [Self-Normalizing Neural Networks](https://arxiv.org/pdf/1706.02515.pdf) - 優れた SELU 活性化関数の登場。
- [Learning to learn by gradient descent by gradient descent](https://arxiv.org/pdf/1606.04474.pdf) - RNN をオプティマイザーとして使う、メタニューラルネットワーク L2L オプティマイザーの導入。

<a name="complex-numbers-and-digital-signal-processing" />

### 複素数とデジタル信号処理

信号処理は深層学習に直接関係しないかもしれませんが、信号ベースのニューラルアーキテクチャを開発する直感を得るために学ぶ価値があります。

- [Window Functions](https://en.wikipedia.org/wiki/Window_function) - 既知の窓関数を列挙する Wikipedia ページ。[Hann-Poisson window](https://en.wikipedia.org/wiki/Window_function#Hann%E2%80%93Poisson_window) は、勾配降下などの貪欲な山登り法で特に興味深いものです。
- [MathBox, Tools for Thought Graphical Algebra and Fourier Analysis](https://acko.net/files/gltalks/toolsforthought/) - Fourier 解析への新しい視点。
- [How to Fold a Julia Fractal](http://acko.net/blog/how-to-fold-a-julia-fractal/) - 複素数と波動方程式を扱うアニメーション。
- [Animate Your Way to Glory, Math and Physics in Motion](http://acko.net/blog/animate-your-way-to-glory/) - 物理エンジンの収束法と、インタラクションデザインへの応用。
- [Animate Your Way to Glory - Part II, Math and Physics in Motion](http://acko.net/blog/animate-your-way-to-glory-pt2/) - 3D回転を扱う数学的対象 Quaternion による回転と回転補間の優れたアニメーション。
- [信号のフィルタリング、STFT と Laplace 変換のプロット](https://github.com/guillaume-chevalier/filtering-stft-and-laplace-transform) - 信号処理のシンプルな Python デモ。


<a name="papers" />

## 論文

<a name="recurrent-neural-networks" />

### 再帰型ニューラルネットワーク

- [Deep Learning in Neural Networks: An Overview](https://arxiv.org/pdf/1404.7828v4.pdf) - You_Again による、主に RNN を扱う深層学習の要約・概観。
- [Bidirectional Recurrent Neural Networks](http://www.di.ufpe.br/~fnj/RNA/bibliografia/BRNN.pdf) - 時間軸を双方向走査する RNN による分類の改善。
- [Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation](https://arxiv.org/pdf/1406.1078v3.pdf) - 2つのネットワークを seq2seq Encoder-Decoder に統合。1000隠れユニットの RNN Encoder–Decoder と Adadelta オプティマイザー。
- [Sequence to Sequence Learning with Neural Networks](http://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf) - WMT’14 英仏データセットで、入力文を逆順にし、Beam Search を使う1000隠れサイズの4層 LSTM。
- [Exploring the Limits of Language Modeling](https://arxiv.org/pdf/1602.02410.pdf) - 大量の GPU 能力を使い、文字レベル CNN の上に単語レベル LSTM を置く優れた再帰モデル。
- [Neural Machine Translation and Sequence-to-sequence Models: A Tutorial](https://arxiv.org/pdf/1703.01619.pdf) - NMT の興味深い概観。私は復習として主に Attention 付き RNN を扱う第8部を読みました。
- [Exploring the Depths of Recurrent Neural Networks with Stochastic Residual Learning](https://cs224d.stanford.edu/reports/PradhanLongpre.pdf) - 提示された感情分析では、基本的に残差接続が積層 RNN より優れる場合があります。
- [Pixel Recurrent Neural Networks](https://arxiv.org/pdf/1601.06759.pdf) - 画像の欠損パッチを Photoshop の Content-Aware Fill のように埋める用途に適します。
- [Adaptive Computation Time for Recurrent Neural Networks](https://arxiv.org/pdf/1603.08983v4.pdf) - RNN 自身に計算時間を決めさせます。Neural Turing Machine とどの程度うまく組み合わせられるか見てみたいものです。興味深い対話型可視化は[こちら](http://distill.pub/2016/augmented-rnns/)。

<a name="convolutional-neural-networks" />

### 畳み込みニューラルネットワーク

- [What is the Best Multi-Stage Architecture for Object Recognition?](http://yann.lecun.com/exdb/publis/pdf/jarrett-iccv-09.pdf) - 「局所コントラスト正規化」の利用に優れています。
- [ImageNet Classification with Deep Convolutional Neural Networks](http://www.cs.toronto.edu/~fritz/absps/imagenet.pdf) - AlexNet、2012 ILSVRC、ReLU 活性化関数の躍進。
- [Visualizing and Understanding Convolutional Networks](https://arxiv.org/pdf/1311.2901v3.pdf) - 「deconvnet layer」について。
- [Fast and Accurate Deep Network Learning by Exponential Linear Units](https://arxiv.org/pdf/1511.07289v1.pdf) - CIFAR 視覚タスク向け ELU 活性化関数。
- [Very Deep Convolutional Networks for Large-Scale Image Recognition](https://arxiv.org/pdf/1409.1556v6.pdf) - Pooling 前に複数の3x3 Conv+ReLUを積層し、少ないパラメーターで大きなフィルターサイズを実現する興味深い考え方。「ConvNet Configuration」の表も優れています。
- [Going Deeper with Convolutions](http://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Szegedy_Going_Deeper_With_2015_CVPR_paper.pdf) - GoogLeNet。「Inception」層／モジュールの登場。Same Padding を使う異なるサイズの多数の小型畳み込みを並列化し、深さ方向へ連結します。
- [Highway Networks](https://arxiv.org/pdf/1505.00387v2.pdf) - Highway Network、残差接続。
- [Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift](https://arxiv.org/pdf/1502.03167v3.pdf) - Batch Normalization（BN）。バッチ全体でも集計して層の出力を正規化し、学習可能な量で線形リスケール・シフトします。
- [U-Net: Convolutional Networks for Biomedical Image Segmentation](https://arxiv.org/pdf/1505.04597.pdf) - U-Net は Skip Connection を持つ Encoder-Decoder CNN で、ピクセル単位の画像セグメンテーションに適します。
- [Deep Residual Learning for Image Recognition](https://arxiv.org/pdf/1512.03385v1.pdf) - Batch Normalization を持つ非常に深い残差層。十分なデータがあれば多数の層で視覚データセットへ適合し、認識モデルを適切に動かす方法です。
- [Inception-v4, Inception-ResNet and the Impact of Residual Connections on Learning](https://arxiv.org/pdf/1602.07261v2.pdf) - 残差接続による GoogLeNet の改善。
- [WaveNet: a Generative Model for Raw Audio](https://arxiv.org/pdf/1609.03499v2.pdf) - Dilated Causal Convolution を基盤とする新しいアーキテクチャで、より長い音声を捉える生音声・音楽生成。
- [Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling](https://arxiv.org/pdf/1610.07584v2.pdf) - 3Dモデル生成の3D-GANと、埋め込みによる楽しい3D家具演算。word2vec の単語演算を3D家具表現で行うようなものです。
- [Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour](https://research.fb.com/publications/ImageNet1kIn1h/) - CNN の驚くほど高速な分散学習。
- [Densely Connected Convolutional Networks](https://arxiv.org/pdf/1608.06993.pdf) - CVPR 2017 Best Paper。CIFAR-10、CIFAR-100、SVHN の最先端性能を改善した DenseNet アーキテクチャ。
- [The One Hundred Layers Tiramisu: Fully Convolutional DenseNets for Semantic Segmentation](https://arxiv.org/pdf/1611.09326.pdf) - U-Net と DenseNet の考え方を統合し、巨大な画像セグメンテーションデータセットに特に優れたニューラルネットワーク。
- [Prototypical Networks for Few-shot Learning](https://arxiv.org/pdf/1703.05175.pdf) - 損失内の距離尺度を使い、少数例からオブジェクトのクラスを判定。

<a name="attention-mechanisms" />

### Attention機構

- [Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/pdf/1409.0473.pdf) - LSTM の Attention機構。特に図、数式、解説が役立ちました。この論文に関する私の講演は[こちら](https://www.youtube.com/watch?v=QuvRWevJMZ4)。
- [Neural Turing Machines](https://arxiv.org/pdf/1410.5401v2.pdf) - 長期依存に対して良好に汎化するようなアルゴリズムをニューラルネットワークへ学ばせる優れた研究。系列想起問題。
- [Show, Attend and Tell: Neural Image Caption Generation with Visual Attention](https://arxiv.org/pdf/1502.03044.pdf) - CNN 特徴マップ上の LSTM Attention機構が優れた効果を発揮します。
- [Teaching Machines to Read and Comprehend](https://arxiv.org/pdf/1506.03340v3.pdf) - テキスト質問応答に関する非常に興味深く創造的な成果で、大きな躍進です。
- [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025.pdf) - Attention機構へのさまざまなアプローチを探究。
- [Matching Networks for One Shot Learning](https://arxiv.org/pdf/1606.04080.pdf) - Attention機構と Query を使って画像をほかの画像と比較し、少量データで One-Shot 分類する興味深い方法。
- [Google’s Neural Machine Translation System: Bridging the Gap between Human and Machine Translation](https://arxiv.org/pdf/1609.08144.pdf) - 2016年時点では、Encoder/Decoder に Attention機構を持つ積層残差 LSTM が NMT に最適です。
- [Hybrid computing using a neural network with dynamic external memory](http://www.nature.com/articles/nature20101.epdf?author_access_token=ImTXBI8aWbYxYQ51Plys8NRgN0jAjWel9jnR3ZoTv0MggmpDmwljGswxVdeocYSurJ3hxupzWuRNeGvvXnoO8o4jTJcnAyhGuZzXJ1GEaD-Z7E6X_a9R-xqJ9TfJWBqz) - NTM ベースの微分可能メモリーを改善した Differentiable Neural Computer（DNC）。
- [Massive Exploration of Neural Machine Translation Architectures](https://arxiv.org/pdf/1703.03906.pdf) - 枠組み化された seq2seq 問題で NMT を行う際、機能する範囲について直感を与えます。
- [Natural TTS Synthesis by Conditioning WaveNet on Mel Spectrogram
Predictions](https://arxiv.org/pdf/1712.05884.pdf) - Vocoder として使う [WaveNet](https://arxiv.org/pdf/1609.03499v2.pdf) を、Attention 付き Tacotron 2 LSTM が生成した Mel Spectrogram で条件付けし、テキストから明瞭な音声を生成できます。
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) (AIAYN) - RNN や CNN を使わず文レベル NLP を行う、位置エンコーディング付き Multi-Head Self-Attention ニューラルネットワークを導入した必読論文（論文の[解説](http://nlp.seas.harvard.edu/2018/04/03/attention.html)と[可視化](http://jalammar.github.io/illustrated-transformer/)も参照）。

<a name="other" />

### その他

- [ProjectionNet: Learning Efficient On-Device Deep Networks Using Neural Projections](https://arxiv.org/abs/1708.00630) - 深層ニューラルネットワークの単語埋め込みを単語射影へ置換し、事前抽出辞書や埋め込み行列の保存を不要にします。
- [Self-Governing Neural Networks for On-Device Short Text Classification](http://aclweb.org/anthology/D18-1105) - 直前の ProjectionNet の続編。SGNN は ProjectionNet を基に発展し、最適化をさらに詳しく解説します（私が[論文をコードで再現した試み](https://github.com/guillaume-chevalier/SGNN-Self-Governing-Neural-Networks-Projection-Layer)と[講演録画](https://vimeo.com/305197775)も参照）。
- [Matching Networks for One Shot Learning](https://arxiv.org/abs/1606.04080) - 明確なカテゴリーを持たないほかの例から新しい例を分類します。各タスクのデータは少なくても、類似タスクが多く全体のデータが多い場合に使え、Siamese Network より良いようです。Matching Network は、Self-Attention の積のように例同士の Cosine Similarity を直接最適化して Softmax へ渡せます。文脈埋め込みを検索せず、word2vec の CBOW や Skip-gram の Negative Sampling Softmax 学習にも使える可能性があります。


<a name="youtube" />

## YouTubeと動画

- [Attention Mechanisms in Recurrent Neural Networks (RNNs) - IGGG](https://www.youtube.com/watch?v=QuvRWevJMZ4) - Attention機構の読書会講演（論文：Neural Machine Translation by Jointly Learning to Align and Translate）。
- [Tensor Calculus and the Calculus of Moving Surfaces](https://www.youtube.com/playlist?list=PLlXfTHzgMRULkodlIEqfgTS-H1AY_bNtq) - Tensor の働きを適切に一般化します。数本見るだけでも概念の把握に大いに役立ちます。
- [Deep Learning & Machine Learning (Advanced topics)](https://www.youtube.com/playlist?list=PLlp-GWNOd6m4C_-9HxuHg2_ZeI2Yzwwqt) - 私が興味深い、または有用だと思った深層学習動画の雑多なリスト。
- [Signal Processing Playlist](https://www.youtube.com/playlist?list=PLlp-GWNOd6m6gSz0wIcpvl4ixSlS-HEmr) - DFT/FFT、STFT、Laplace 変換について私がまとめた YouTube 再生リスト。ソフトウェア工学の学士課程に信号処理講座がなかった（量子物理学で少し扱っただけ）ことへの不満から作りました。
- [Computer Science](https://www.youtube.com/playlist?list=PLlp-GWNOd6m7vLOsW20xAJ81-65C-Ys6k) - さまざまなコンピューター科学トピックについて私がまとめた、もう1つの YouTube 再生リスト。
- [Siraj's Channel](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A/videos?view=0&sort=p&flow=grid) - Siraj による楽しくテンポの速い深層学習チュートリアル動画。
- [Two Minute Papers' Channel](https://www.youtube.com/user/keeroyz/videos?sort=p&view=0&flow=grid) - WaveNet や Neural Style Transfer など、研究論文の興味深く簡潔な概観。
- [Geoffrey Hinton interview](https://www.coursera.org/learn/neural-networks-deep-learning/lecture/dcm5r/geoffrey-hinton-interview) - Andrew Ng が Geoffrey Hinton に研究と躍進について聞き、学生への助言を得ます。
- [Growing Neat Software Architecture from Jupyter Notebooks](https://www.youtube.com/watch?v=K4QN27IKr0g) - Jupyter Notebook を使う機械学習プロジェクトの構造化入門。

<a name="misc-hubs-and-links" />

## その他のハブとリンク

- [Hacker News](https://news.ycombinator.com/news) - 私が ML を知ったきっかけかもしれません。大きな話題になるかなり前から興味深い動向が現れます。
- [DataTau](http://www.datatau.com/) - Hacker News に似た、データサイエンス専用のハブ。
- [Naver](http://www.naver.com/) - 韓国の検索エンジン。皮肉にも Google Translate との併用が最適です。深層学習の検索結果や理解可能な高度数学の内容が、Google より簡単に見つかることがあります。
- [Arxiv Sanity Preserver](http://www.arxiv-sanity.com/) - TF/IDF 機能を持つ arXiv ブラウザー。
- [Awesome Neuraxle](https://github.com/Neuraxio/Awesome-Neuraxle) - 本番水準のきれいな ML パイプラインを実装する ML フレームワーク Neuraxle の Awesome リスト。


<a name="license" />

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Guillaume Chevalier](https://github.com/guillaume-chevalier) はこの作品に関するすべての著作権および関連・隣接する権利を放棄しています。
