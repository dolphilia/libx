---
title: "arbox/machine-learning-with-ruby"
description: "arbox/machine-learning-with-ruby の定本スナップショット"
licenseSource: "github-arbox-machine-learning-with-ruby-readme-md"
---

<img title="Awesome Machine Learning with Ruby" alt="Awesome Machine Learning with Ruby" src="header.png" align="center">

[![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome#readme) [![Support Me](https://img.shields.io/badge/%F0%9F%92%97-Support%20Me-blue.svg?style=flat-square)](https://www.patreon.com/arbox)

[[RubyNLP](https://github.com/arbox/nlp-with-ruby) |
 [RubyDataScience](https://github.com/arbox/data-science-with-ruby) |
 [RubyInterop](https://github.com/arbox/ruby-interoperability)]

# Awesome Machine Learning with Ruby [<img src="ruby.jpg" align="left" width="30px" height="30px" />][ruby]

> Rubyによる機械学習のリンクとリソースを厳選したリスト

[機械学習][ml]は[計算科学][cs]の一分野で、多くの場合[AI][ai]研究に含まれます。得られたアルゴリズムが、プログラマーによる明示的な指示なしに特定の解決策を体系的に実装できるため、多くの実用的な用途があります。当然、多くのアルゴリズムでは、調査する[特徴量][fe]の定義、または解決策を導き出すための十分に大きな[訓練セット][ts]が必要です。

この厳選リストは、[Ruby][ruby]プログラミング言語を利用した[機械学習][ml]についての[_優れた_][awesome]ライブラリ、データソース、チュートリアル、プレゼンテーションをまとめています。

このリストにある有用なリソースの多くは、[The Ruby Science Foundation][sciruby]、[貢献者][contributors]、そして私たちが日々取り組むさまざまなMLアプリケーションの開発から生まれました。

:sparkles: あらゆる[貢献](https://github.com/arbox/machine-learning-with-ruby/blob/c8c2503b579653487516920a8b955591fbc3336f/contributing.md)を歓迎します！プルリクエストでリンクを追加するか、Issueを作成して議論を始めてください。

[Twitter](https://twitter.com/NonWebRuby)をフォローし、`#RubyML`ハッシュタグを使ってぜひ広めてください！


## 目次



- [:sparkles: チュートリアル](#sparkles-tutorials)
- [機械学習ライブラリ](#machine-learning-libraries)
  * [フレームワーク](#frameworks)
  * [ニューラルネットワーク](#neural-networks)
  * [深層学習](#deep-learning)
  * [カーネル法](#kernel-methods)
  * [進化的アルゴリズム](#evolutionary-algorithms)
  * [ベイズ法](#bayesian-methods)
  * [決定木](#decision-trees)
  * [クラスタリング](#clustering)
  * [線形分類器](#linear-classifiers)
  * [統計モデル](#statistical-models)
  * [勾配ブースティング](#gradient-boosting)
  * [ベクトル検索](#vector-search)
- [機械学習の応用](#applications-of-machine-learning)
- [データ構造](#data-structures)
- [データ可視化](#data-visualization)
- [記事、投稿、講演、プレゼンテーション](#articles-posts-talks-and-presentations)
- [プロジェクトとコード例](#projects-and-code-examples)
- [Heroku buildpack](#heroku-buildpacks)
- [書籍、ブログ、チャンネル](#books-blogs-channels)
- [コミュニティ](#community)
- [関連リソース](#related-resources)
- [ライセンス](#license)





## :sparkles: チュートリアル

このセクションの充実にご協力ください！ :smiley:
- [Rubyのニューラルネットワーク](https://www.honeybadger.io/blog/ruby-neural-networks/)
- [Rubyで線形回帰を実装する方法](https://www.practicalai.io/implementing-linear-regression-using-ruby/)
  <sup>[[コード](https://github.com/daugaard/example-linear-regression)]</sup>
- [Rubyでロジスティック回帰による分類を実装する方法](https://www.practicalai.io/implementing-classification-using-logistic-regression-in-ruby/)
- [Rubyのニューラルネットワークで単純な二値分類を実装する方法](https://www.practicalai.io/implementing-simple-classification-using-neural-network-in-ruby/)
  <sup>[[コード](https://github.com/daugaard/example-neural-network)]</sup>
- [RubyでSVMによる分類を実装する方法](https://www.practicalai.io/implementing-classification-using-a-svm-in-ruby/)
  <sup>[[コード](https://github.com/daugaard/example-svm)]</sup>
- [Rubyでk-meansクラスタリングを使った教師なし学習](https://www.practicalai.io/unsupervised-learning-using-k-means-clustering-in-ruby/)
  <sup>[[コード](https://github.com/daugaard/example-kmeans-clustering)]</sup>
- [RubyのQ-Learningで単純なゲームをAIにプレイさせる](https://www.practicalai.io/teaching-ai-play-simple-game-using-q-learning/)
  <sup>[[コード](https://github.com/daugaard/q-learning-simple-game)]</sup>
- [RubyのQ-Learningでニューラルネットワークにゲームをプレイさせる](https://www.practicalai.io/teaching-a-neural-network-to-play-a-game-with-q-learning/)
  <sup>[[コード](https://github.com/daugaard/q-learning-simple-game/tree/neuralnetwork)]</sup>
- [PyCallを使ってPythonのscikit-learn機械学習ライブラリをRubyで利用する](https://www.practicalai.io/using-scikit-learn-machine-learning-library-in-ruby-using-pycall/)
  <sup>[[コード](https://github.com/daugaard/scikit-learn-from-ruby)]</sup>
- [Machine Learning Workbenchを使ってRubyでニューラルネットワークを_進化_させる方法](https://github.com/giuse/machine_learning_workbench/blob/master/examples/neuroevolution.rb)

## 機械学習ライブラリ

純粋なRubyで実装された[機械学習][ml]アルゴリズム、またはRuby向けの適切なバインディングを備えた他のプログラミング言語製アルゴリズム。

### フレームワーク

- [LangChain.rb](https://github.com/andreibondarev/langchainrb) -
  Ruby版LangChainでML／AIを活用したアプリケーションを構築します。
- [weka](https://github.com/paulgoetze/weka-jruby) -
  WekaのJRubyバインディング。Wekaを介して実装されたさまざまなMLアルゴリズムを利用できます。
- [ai4r](https://github.com/SergioFierens/ai4r) -
  Ruby向け人工知能。
- [classifier-reborn](https://github.com/jekyll/classifier-reborn) -
  ベイズ分類などの分類方式を利用できる汎用分類器モジュール。
  <sup>[[依存: GLS](#gls)]</sup>
- [scoruby](https://github.com/asafschers/scoruby) -
  [PMML](http://dmg.org/pmml/v4-3/GeneralStructure.html)（Predictive Model Markup Language）向けRubyスコアリングAPI。
- [rblearn](https://github.com/himkt/rblearn) - 特徴抽出・交差検証ライブラリ。
- [data_modeler](https://github.com/giuse/data_modeler) -
  機械学習でデータをモデル化します。充実したテストカバレッジ、すぐに始められる例、完全なドキュメントを備え、1.0.0以降は本番利用可能です。
- [shogun](https://github.com/shogun-toolbox/shogun) - 多機能で成熟した
  機械学習ツールボックス。[Rubyバインディング](https://github.com/shogun-toolbox/shogun/tree/develop/src/interfaces/ruby)を備えます。
- [aws-sdk-machinelearning](https://github.com/aws/aws-sdk-ruby) -
  Amazon Web ServicesのMachine Learning API。
- [azure_mgmt_machine_learning](https://github.com/Azure/azure-sdk-for-ruby) -
  Microsoft AzureのMachine Learning API。
- [machine_learning_workbench](https://github.com/giuse/machine_learning_workbench) -
  純粋なRubyで書かれた成長中の機械学習フレームワーク。[Numo](https://github.com/ruby-numo/)による高性能計算と[Cumo](https://github.com/sonots/cumo)によるCUDAバインディングを利用します。現在はニューラルネットワーク、進化戦略、ベクトル量子化を実装中で、多数の例とユーティリティを提供します。
- [Deep NeuroEvolution](https://github.com/giuse/DNE) -
  進化的アルゴリズムを使い、深層ニューラルネットワークを訓練するのではなく探索するための[machine_learning_workbench](https://github.com/giuse/machine_learning_workbench)ベースの実験環境。[OpenAI Gym](https://github.com/openai/gym)へ[PyCall](https://github.com/mrkn/pycall.rb)を介して応用します。
- [rumale](https://github.com/yoshoku/rumale) -
  幅広いアルゴリズム（SVM、ロジスティック回帰、線形回帰、ランダムフォレストなど）を実装し、Pythonの[Scikit-Learn][scikit]に似たインターフェースを備えるRuby製機械学習ツールキット。
- [eps](https://github.com/ankane/eps) - ベイズ分類・線形回帰。エクスポートには
  [PMML](http://dmg.org/pmml/v4-3/GeneralStructure.html)を、代替バックエンドには[GSL][gsl]を使用します。
- [ruby-openai](https://github.com/alexrudall/ruby-openai) - OpenAI APIラッパー。
- [Instruct](https://github.com/instruct-rb/instruct) - Guidanceに着想を得たツール。コード、プロンプト、補完を組み合わせ、LLMへ目的の処理を指示します。
  
### ニューラルネットワーク

- [neural-net-ruby](https://github.com/gbuesing/neural-net-ruby) -
  Rubyで書かれたニューラルネットワーク。
- [ruby-fann](https://github.com/tangledpath/ruby-fann) -
  [Fast Artificial Neural Network Library (FANN)](http://leenissen.dk/fann/wp/)のRubyバインディング。
- [cerebrum](https://github.com/irfansharif/cerebrum) -
  Rubyによる人工ニューラルネットワークの実験的実装。
- [tlearn-rb](https://github.com/josephwilk/tlearn-rb) -
  Ruby向け再帰型ニューラルネットワークライブラリ。
- [brains](https://github.com/jedld/brains-jruby) -
  [brains](https://github.com/jedld/brains)を基にしたJRuby向けフィードフォワードニューラルネットワーク。
- [machine_learning_workbench](https://github.com/giuse/machine_learning_workbench/tree/master/lib/machine_learning_workbench/neural_network) -
  フィードフォワード型と再帰型（全結合）の両ニューラルネットワークを純粋なRubyで実装したフレームワーク。神経進化（Natural Evolution Strategiesアルゴリズム）による訓練が可能です。
- [rann](https://github.com/mikecmpbll/rann) -
  逆伝播（再帰ネットワーク向けの通時的逆伝播を含む）、勾配チェック、AdaGrad、並列バッチ実行を備えた柔軟なRuby ANN実装。

### 深層学習

- [tensor_stream](https://github.com/jedld/tensor_stream) -
  Ruby向けにゼロから構築された独立型TensorFlow再実装。
- [red-chainer](https://github.com/red-data-tools/red-chainer) - Ruby向け深層学習フレームワーク。
- [tensorflow](https://github.com/somaticio/tensorflow.rb) - [TensorFlow](https://www.tensorflow.org/)のRubyバインディング。
- [ruby-dnn](https://github.com/unagiootoro/ruby-dnn) - Ruby向けの簡潔な深層学習。
- [torch-rb](https://github.com/ankane/torch-rb) - [LibTorch](https://github.com/pytorch/pytorch)のRubyバインディング。
  [rice](https://github.com/jasonroelofs/rice)を使用します。
- [mxnet](https://github.com/mrkn/mxnet.rb) - [mxnet](https://mxnet.apache.org/)のRubyバインディング。

### カーネル法

- [rb-libsvm](https://github.com/febeling/rb-libsvm) -
  Rubyと[LIBSVM](https://www.csie.ntu.edu.tw/~cjlin/libsvm/)ライブラリによるサポートベクターマシン。
  <sup>[[依存: bundled](#bundled)]</sup>

### 進化的アルゴリズム

- [machine_learning_workbench](https://github.com/giuse/machine_learning_workbench/tree/master/lib/machine_learning_workbench/optimizer/natural_evolution_strategies) -
  Natural Evolution Strategyアルゴリズム（ブラックボックス最適化）、具体的にはExponential NES（XNES）、Separable NES（sNES）、Block-Diagonal NES（BDNES）などの純粋なRuby実装を含むフレームワーク。ニューラルネットワークの探索・訓練（神経進化）などへ応用できます。
- [simple_ga](https://github.com/giuse/simple_ga) -
  Rubyによる最も簡潔な遺伝的アルゴリズム実装。

### ベイズ法

- [linnaeus](https://github.com/djcp/linnaeus) -
  Redisをバックエンドに使うベイズ分類器。
- [naive_bayes](https://github.com/reddavis/Naive-Bayes) -
  簡潔なNaive Bayes分類器。
- [nbayes](https://github.com/oasic/nbayes) -
  高機能なRuby製Naive Bayes実装。

### 決定木

- [decisiontree](https://github.com/igrigorik/decisiontree) -
  純粋なRubyによる決定木ID3アルゴリズム。
  <sup>[[依存: GraphViz](#graphviz) |
        [投稿](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>。

### クラスタリング

- [kmeans-clusterer](https://github.com/gbuesing/kmeans-clusterer) -
  Rubyによるk-meansクラスタリング。
- [k_means](https://github.com/reddavis/K-Means) -
  高速でメモリー効率のよいK-Meansプログラムの構築を試みます。
- [knn](https://github.com/reddavis/knn) -
  簡潔なK近傍法アルゴリズム。

### 線形分類器

- [liblinear-ruby-swig](https://github.com/tomz/liblinear-ruby-swig) -
  LIBLINEARのRubyインターフェース（テキスト分類ではLIBSVMよりはるかに効率的）。
- [liblinear-ruby](https://github.com/kei500/liblinear-ruby) -
  SWIGを使うLIBLINEARのRubyインターフェース。

### 統計モデル

- [rtimbl](https://github.com/maspwr/rtimbl) -
  Timblフレームワークのメモリーベース学習器。
- [lda-ruby](https://github.com/ealdent/lda-ruby) -
  トピックの自動モデリングと文書クラスタリングに使う[LDA](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)（Latent Dirichlet Allocation）のRuby実装。
- [maxent_string_classifier](https://github.com/mccraigmccraig/maxent_string_classifier) -
  OpenNLP Maxentフレームワークを基にした文字列データ向けJRuby最大エントロピー分類器。
- [omnicat](https://github.com/mustafaturan/omnicat) -
  テキスト分類向けの汎用Rackフレームワーク。
- [omnicat-bayes](https://github.com/mustafaturan/omnicat-bayes) -
  OmniCat分類器戦略としてのNaive Bayesテキスト分類実装。
  <sup>[[依存: bundled](#bundled)]</sup>

### 勾配ブースティング

- [xgboost](https://github.com/PairOnAir/xgboost-ruby) &mdash;
  XGBoostのRubyバインディング。
  <sup>[[依存: XGBoost](#xgboost)]</sup>
- [xgb](https://github.com/ankane/xgb) &mdash;
  XGBoostのRubyバインディング。
  <sup>[[依存: XGBoost](#xgboost)]</sup>
- [lightgbm](https://github.com/ankane/lightgbm) &mdash;
  LightGBMのRubyバインディング。
  <sup>[[依存: LightGBM](#lightgbm)]</sup>

### ベクトル検索

- [flann](https://github.com/mariusmuja/flann) -
  [FLANN](https://github.com/flann-lib/flann)（Fast Library for Approximate Nearest Neighbors）のRubyバインディング。
  <sup>[[flann](#flann)]</sup>
- [annoy-rb](https://github.com/yoshoku/annoy.rb) -
  [Annoy](https://github.com/spotify/annoy)（Approximate Nearest Neighbors Oh Yeah）のRubyバインディング。
- [hnswlib.rb](https://github.com/yoshoku/hnswlib.rb) -
  Hierarchical Navigable Small Worldグラフによる近似最近傍探索を実装する[Hnswlib](https://github.com/nmslib/hnswlib)のRubyバインディング。
- [ngt-ruby](https://github.com/ankane/ngt-ruby) -
  [NGT](https://github.com/yahoojapan/NGT)（Neighborhood Graph and Tree for Indexing High-dimensional data）のRubyバインディング。
- [milvus](https://github.com/andreibondarev/milvus) &mdash;
  Milvus Vector DBのRubyクライアント。
- [pinecone](https://github.com/ScotterC/pinecone) &mdash;
  Pinecone Vector DBのRubyクライアント。
- [qdrant-ruby](https://github.com/andreibondarev/qdrant-ruby) &mdash;
  Qdrantベクトル検索データベースAPIのRubyラッパー。
- [weaviate-ruby](https://github.com/andreibondarev/weaviate-ruby) &mdash;
  Weaviateベクトル検索データベースAPIのRubyラッパー。

## 機械学習の応用

- [phashion](https://github.com/westonplatter/phashion) -
  重複するマルチメディアファイルの検出に使う知覚ハッシュライブラリpHashのRubyラッパー。
  <sup>[[ImageMagick](#imagemagick) | [libjpeg](#libjpeg)]</sup>

## データ構造

独自のMLアルゴリズムを実装するなら、特徴量セットを効率よく保存する方法に関心があるでしょう。[Data Science with Ruby][ds-with-ruby]リストで、適切な[データ構造](https://github.com/arbox/data-science-with-ruby#data-structures)を探してください。

## データ可視化

[Data Science with Ruby][ds-with-ruby]リストの[データ可視化](https://github.com/arbox/data-science-with-ruby#visualization)セクションを参照してください。

## 記事、投稿、講演、プレゼンテーション

- 2022
  - _Rubyで機械学習を知る_、[Justin Bowen](https://twitter.com/TonsOfFun111)
   <sup>[[動画](https://www.youtube.com/watch?v=HPbizNgcyFk)]</sup>
- 2019
  - _TensorStream: Rubyに機械学習をもたらす_、[Joseph Emmanuel Dayo](https://www.linkedin.com/in/jdayo/)
    <sup>[[投稿](https://medium.com/@joseph.dayo/tensorstream-bringing-machine-learning-to-ruby-114582060e3d)]</sup>
  - _SVMKitを使ったRubyでの簡単な機械学習_、[@kojix](https://twitter.com/kojix2dayo)
    <sup>[[投稿](https://dev.to/kojix2/easy-machine-learning-with-ruby-using-svmkit-4n86)]</sup>
- 2018
  - _Rubyでの深層学習プログラミング_、[Kenta Murata](https://twitter.com/mrkn)
    &amp; [Yusaku Hatanaka ](https://twitter.com/hatappi)
    <sup>[[スライド](https://speakerdeck.com/mrkn/deep-learning-programming-on-ruby) |
          [ページ](https://rubykaigi.org/2018/presentations/mrkn.html)]</sup>
  - _訓練済みKeras・TensorFlow機械学習モデルをRuby on Rails内で使用する方法_、[Denis Sellu](https://twitter.com/denis_sellu)
    <sup>[[投稿](https://www.cookieshq.co.uk/posts/how-to-use-trained-keras-and-tensorflow-machine-learning-models-within-ruby-on-rails)]</sup>
- 2017
  - _JRubyでの科学計算_、[Prasun Anand](https://twitter.com/prasun_anand)
    <sup>[[スライド](https://www.slideshare.net/PrasunAnand2/fosdem2017-scientific-computing-on-jruby) |
    [動画](https://ftp.fau.de/fosdem/2017/K.4.201/ruby_scientific_computing_on_jruby.mp4) |
    [スライド](https://www.slideshare.net/PrasunAnand2/scientific-computing-on-jruby) |
    [スライド](https://www.slideshare.net/PrasunAnand2/scientific-computation-on-jruby)]</sup>
  - _これは食べ物？ 機械学習入門_、[Matthew Mongeau](https://twitter.com/halogenandtoast)
    <sup>[[動画](https://www.youtube.com/watch?v=8G709hKkthY) |
          [スライド](https://www.slideshare.net/halogenandtoast/is-it-food)]</sup>
  - _Bayes is BAE_、[Richard Schneeman](https://twitter.com/schneems)
    <sup>[[動画](https://www.youtube.com/watch?v=bQSzZrDDV80) |
          [スライド](https://speakerdeck.com/schneems/bayes-is-bae)]</sup>
  - _Ruby Roundtable: Rubyでの機械学習_、[RubyThursday](https://rubythursday.com/)
    <sup>[[動画](https://www.youtube.com/watch?v=ScIFARN0jCo)]</sup>
- 2016
  - _Rubyによる実践的な機械学習_、[Jordan Hudgens](https://twitter.com/jordanhudgens)
    <sup>[[チュートリアル](https://www.crondose.com/2016/12/practical-machine-learning-ruby/)]</sup>
  - _深層学習: Ruby開発者向け入門_、[Geoffrey Litt](https://twitter.com/geoffreylitt)
    <sup>[[スライド](https://speakerdeck.com/geoffreylitt/deep-learning-an-introduction-for-ruby-developers)]</sup>
  - _純粋なRuby製word2vecプログラムを3倍以上高速化した方法_、[Kei Sawada](https://twitter.com/remore)
    <sup>[[スライド](https://speakerdeck.com/remore/how-i-made-a-pure-ruby-word2vec-program-more-than-3x-faster)]</sup>
  - _Dōmo arigatō, Mr. Roboto: Rubyによる機械学習_、[Eric Weinstein](https://twitter.com/ericqweinstein)
    <sup>[[スライド](https://speakerdeck.com/ericqweinstein/domo-arigato-mr-roboto-machine-learning-with-ruby) |
          [動画](https://www.youtube.com/watch?v=T1nFQ49TyeA)]</sup>
  - _機械学習技法で推薦エンジンを構築する_、[Brian Sam-Bodden](https://twitter.com/bsbodden)
    <sup>[[動画](https://www.youtube.com/watch?v=SRnM_P_ygqI)]</sup>
  - :sparkles: _SciRuby Machine Learning: 現状と将来_、[Kenta Murata](https://twitter.com/mrkn)
    <sup>[[スライド](https://speakerdeck.com/mrkn/sciruby-machine-learning-current-status-and-future) |
          [動画: jp](https://www.youtube.com/watch?v=gfQ8XEy7vO4)]</sup>
  - _Ruby Roundtable: TensorFlow入門_、[RubyThursday](https://rubythursday.com/)
    <sup>[[動画](https://www.youtube.com/watch?v=pYC5mXHUWkc)]</sup>
- 2015
  - _Rubyで機械学習を簡単に_、[Lorenzo Masini](https://twitter.com/rugginoso)
    <sup>[[投稿](https://www.leanpanda.com/blog/2015-08-24-machine-learning-automatic-classification/)]</sup>
  - _Ruby機械学習でParis Hiltonの発言を見つける_、[Rick Carlino](https://github.com/RickCarlino)
    <sup>[[チュートリアル](https://web.archive.org/web/20160414072324/http://datamelon.io/blog/2015/using-ruby-machine-learning-id-paris-hilton-quotes.html)]</sup>
- 2014
  - _テスト駆動ニューラルネットワーク_、[Matthew Kirk](https://twitter.com/mjkirk)
    <sup>[[動画](https://www.youtube.com/watch?v=ppf8m-3uXvU&t=36s)]</sup>
  - _Rubyアプリですぐ使える5つの機械学習技法_、[Benjamin Curtis](https://twitter.com/stympy)
    <sup>[[動画](https://www.youtube.com/watch?v=crziu7dk6Vw) |
          [スライド](https://speakerdeck.com/stympy/machine-learning-techniques)]</sup>
  - _楽しみと利益のための機械学習_、[John Paul Ashenfelter](https://twitter.com/johnashenfelter)
    <sup>[[動画](https://www.youtube.com/watch?v=KC5MtKHm1O4)]</sup>
- 2013
  - _Rubyのサポートベクターマシンによる感情分析_、[Matthew Kirk](https://twitter.com/mjkirk)
    <sup>[[動画](https://www.youtube.com/watch?v=iSug6CgxWxc) |
          [コード](https://github.com/hexgnu/sentiment_analyzer)]</sup>
  - _Rubyによる推薦システム_、[Marcel Caraciolo](https://twitter.com/marcelcaraciolo)
    <sup>[[スライド](https://www.slideshare.net/marcelcaraciolo/recommender-systems-with-ruby-adding-machine-learning-statistics-etc)]</sup>
  - _Rubyで顔を検出する: FFI概説_、[Marc Berszick]()
    <sup>[[投稿](https://www.sitepoint.com/detecting-faces-with-ruby-ffi-in-a-nutshell/)]</sup>
- 2012
  - _Rubyによる機械学習、第1部_、[Vasily Vasinov](https://twitter.com/vasinov)
    <sup>[[チュートリアル](https://www.vasinov.com/blog/machine-learning-with-ruby-part-one/)]</sup>
  - _Rubyの再帰型ニューラルネットワーク_、[Joseph Wilk](https://twitter.com/josephwilk)
    <sup>[[投稿](http://blog.josephwilk.net/ruby/recurrent-neural-networks-in-ruby.html)]</sup>
  - _機械学習とJRubyを使う推薦エンジン_、[Matthew Kirk](https://twitter.com/mjkirk)
    <sup>[[動画](https://www.youtube.com/watch?v=hsZcrlbBg_0)]</sup>
  - _実践的な機械学習とRails_、[Andrew Cantino](https://twitter.com/tectonic)
    and [Ryan Stout](https://twitter.com/ryanstout)
    <sup>[[動画](https://www.youtube.com/watch?v=vy_zQ1-F0JI)]</sup>

- 2011
  - _Rubyでのクラスタリング_、[Colin Drake](https://twitter.com/colinfdrake)
    <sup>[[投稿](https://colindrake.me/post/k-means-clustering-in-ruby/)]</sup>
  - _Rubyのサポートベクターマシンによるテキスト分類_、[Rimas Silkaitis](https://twitter.com/neovintage)
    <sup>[[投稿](http://neovintage.org/2011/11/14/text-classification-using-support/)]</sup>
- 2010
  - _bayes_motel – Ruby向けベイズ分類_、[Mike Perham](https://twitter.com/mperham)
    <sup>[[投稿](http://www.mikeperham.com/2010/04/28/bayes_motel-bayesian-classification-for-ruby/)]</sup>
  - _Intelligent Ruby: 機械学習を始める_、[Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[動画](https://vimeo.com/22513786)]</sup>
- 2009

- 2008
  - _Rubyのサポートベクターマシン（SVM）_、[Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[投稿](https://www.igvita.com/2008/01/07/support-vector-machines-svm-in-ruby/)]</sup>
- 2007
  - _Rubyの決定木学習_、[Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[投稿](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>

## プロジェクトとコード例

- [Wine Clustering](https://github.com/hexgnu/wine_clustering) -
  ワインの品質推定を異なるアルゴリズムでクラスタリングします。
- [simple_ga](https://github.com/giuse/simple_ga) -
  Rubyによる遺伝的アルゴリズムの基本的な動作デモ。
- [Handwritten Digits Recognition](https://github.com/jdrzj/handwritten-digits-recognition) -
  ニューラルネットワークとRubyによる手書き数字認識。

## Heroku buildpack

- [GSL and Ruby buildpack](https://github.com/tomwolfe/heroku-buildpack-gsl-ruby)
- [OpenCV and Ruby buildpack](https://github.com/lilibethdlc/heroku-buildpack-ruby-opencv)
- [ImageMagick buildpack](https://github.com/mcollina/heroku-buildpack-imagemagick)

## 書籍、ブログ、チャンネル

-  [Kirk, Matthew](https://twitter.com/mjkirk)。
   _Thoughtful Machine Learning: A Test-Driven Approach_。O'Reilly、2014年。
   <sup>[[Amazon](https://www.amazon.com/Thoughtful-Machine-Learning-Test-Driven-Approach/dp/1449374069) |
         [コード](https://github.com/thoughtfulml/examples)]</sup>
- [Practical Artificial Intelligence](https://www.practicalai.io/) -
  Rubyによるチュートリアルとコード例を掲載する人工知能・機械学習ブログ。

## コミュニティ

- [SciRuby Mailing List](https://groups.google.com/forum/#!forum/sciruby-dev)
- [SciRuby Slack](https://sciruby.slack.com/)
- [Red Data Gitter](https://gitter.im/red-data-tools/)
- [Reddit](https://www.reddit.com/r/MachineLearning/search?q=Ruby&restrict_sr=on)
- [Stack Overflow](https://stackoverflow.com/search?q=machine+learning+ruby)
- [Twitter](https://twitter.com/search?q=Machine%20Learning%20Ruby&src=typd)
- [NonWebRuby](https://twitter.com/NonWebRuby)
- [Ruby AI Builders Discord](https://discord.gg/zDyFJFBTGB)
- [X Ruby AI group](https://twitter.com/i/communities/1709211359039078677)
- [Mastodon Ruby AI and Data group](https://ruby.social/@Ruby_AI_and_Data@chirp.social)

## 関連リソース

- <a name="lightgbm"></a>
  [LightGBM](https://github.com/microsoft/LightGBM)
- <a name="xgboost"></a>
  [XGBoost](https://github.com/dmlc/xgboost)
- <a name="gls"></a>
  [GSL (GNU Scientific Library)][gls]
- <a name="opencv"></a>
  [OpenCV](https://opencv.org/)
- <a name="empty-lines-around-access-modifier"></a>
  [Graphviz](http://www.graphviz.org/)
- <a name="gnuplot"></a>
  [Gnuplot](http://www.gnuplot.info/)
- <a name="xquartz"></a>
  [X11/XQuartz](https://www.xquartz.org/)
- <a name="imagemagic"></a>
  [ImageMagick](https://www.imagemagick.org/script/index.php)
- <a name="r"></a>
  [R](http://www.r-project.org/)
- <a name="octave"></a>
  [Octave](https://www.gnu.org/software/octave/)
- [scikit-learnアルゴリズム早見表](https://scikit-learn.org/stable/tutorial/machine_learning_map/)
- [Awesome Ruby](https://github.com/markets/awesome-ruby#natural-language-processing) -
  他の優れた項目とともに、NLP関連プロジェクトの短いリストを掲載しています。
- [Ruby NLP](https://github.com/diasks2/ruby-nlp) -
  Ruby向けNLPライブラリの最先端コレクション。
- [Speech and Natural Language Processing](https://github.com/edobashira/speech-language-processing) -
  NLP関連リソースの一般的なリスト（主にRubyプログラマー以外向け）。
- [Scientific Ruby](http://sciruby.com/) -
  Ruby向けの線形代数、可視化、科学計算。
- [iRuby](https://github.com/SciRuby/iruby) - Jupyter（旧IPython）向けIRubyカーネル。
- [Kiba](https://github.com/thbar/kiba) -
  軽量な[ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load)（Extract、Transform、Load）パイプライン。
- [Awesome OCR](https://github.com/kba/awesome-ocr) -
  多数のOCR（Optical Character Recognition）リソース。
- [Awesome TensorFlow](https://github.com/jtoy/awesome-tensorflow) -
  TensorFlowライブラリによる機械学習。
- [rb-gsl](https://github.com/SciRuby/rb-gsl) -
  [GNU Scientific Library](https://www.gnu.org/software/gsl/)のRubyインターフェース。
- [The Definitive Guide to Ruby's C API](https://silverhammermba.github.io/emberb/) -
  Cプログラミング言語を使ったRubyの埋め込みと拡張に関する最新のリファレンスとチュートリアル。

## ライセンス

[![Creative Commons Zero 1.0](http://mirrors.creativecommons.org/presskit/buttons/80x15/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
`Awesome ML with Ruby`、[Andrei Beliankou](https://github.com/arbox)および[貢献者][contributors]による。

法律で可能な範囲において、`Awesome ML with Ruby`へCC0を関連付けた人物は、`Awesome ML with Ruby`に関するすべての著作権および関連する権利、隣接権を放棄しています。

この作品にはCC0の法律条文の写しが添付されているはずです。添付されていない場合は<https://creativecommons.org/publicdomain/zero/1.0/>を参照してください。


[ruby]: https://www.ruby-lang.org/en/
[awesome]: https://github.com/sindresorhus/awesome/blob/master/awesome.md
[change-pr]: https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md
[ml]: https://en.wikipedia.org/wiki/Machine_learning
[ds-with-ruby]: https://github.com/arbox/data-science-with-ruby
[contributors]: https://github.com/arbox/machine-learning-with-ruby/graphs/contributors
[sciruby]: https://github.com/sciruby
[ai]: https://en.wikipedia.org/wiki/Artificial_intelligence
[cs]: https://en.wikipedia.org/wiki/Computational_science
[fe]: https://en.wikipedia.org/wiki/Feature_engineering
[ts]: https://en.wikipedia.org/wiki/Test_set
[gsl]: https://www.gnu.org/software/gsl/
[scikit]: https://scikit-learn.org/stable/index.html
