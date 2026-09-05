---
title: "Awesome NLP with Ruby"
description: "NLP with Rubyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-arbox-nlp-with-ruby-readme-md"
---

# Awesome NLP with Ruby

NLP with Rubyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [:sparkles: チュートリアル](#sparkles-tutorials)
- [NLPパイプラインのサブタスク](#nlp-pipeline-subtasks)
  * [パイプライン生成](#pipeline-generation)
  * [多目的エンジン](#multipurpose-engines)
    + [オンラインAPI](#on-line-apis)
  * [言語識別](#language-identification)
  * [分割](#segmentation)
  * [語彙処理](#lexical-processing)
    + [ステミング](#stemming)
    + [見出し語化](#lemmatization)
    + [語彙統計: タイプとトークンの計数](#lexical-statistics-counting-types-and-tokens)
    + [ストップワードの除去](#filtering-stop-words)
  * [句レベル処理](#phrasal-level-processing)
  * [統語処理](#syntactic-processing)
    + [句構造解析](#constituency-parsing)
  * [意味解析](#semantic-analysis)
  * [語用論解析](#pragmatical-analysis)
- [高水準タスク](#high-level-tasks)
  * [綴り・誤り訂正](#spelling-and-error-correction)
  * [テキストアラインメント](#text-alignment)
  * [機械翻訳](#machine-translation)
  * [感情分析](#sentiment-analysis)
  * [数値・日付・時刻の解析](#numbers-dates-and-time-parsing)
  * [固有表現認識](#named-entity-recognition)
  * [音声合成・音声認識](#text-to-speech-to-text)
- [対話エージェント・アシスタント・チャットボット](#dialog-agents-assistants-and-chatbots)
- [言語資源](#linguistic-resources)
- [機械学習ライブラリ](#machine-learning-libraries)
- [データ可視化](#data-visualization)
- [光学文字認識](#optical-character-recognition)
- [テキスト抽出](#text-extraction)
- [全文検索・情報検索・索引付け](#full-text-search-information-retrieval-indexing)
- [言語対応の文字列操作](#language-aware-string-manipulation)
- [記事・投稿・講演・発表](#articles-posts-talks-and-presentations)
- [プロジェクトとコード例](#projects-and-code-examples)
- [書籍](#books)
- [コミュニティ](#community)
- [協力募集中!](#needs-your-help)
- [関連リソース](#related-resources)
- [ライセンス](#license)





## :sparkles: チュートリアル

この節の充実にご協力ください! :smiley:

## NLPパイプラインのサブタスク

NLPパイプラインはプレーンテキストから始まります。

### パイプライン生成

- [composable_operations](https://github.com/t6d/composable_operations) -
  Definition framework for operation pipelines.
- [ruby-spark](https://github.com/ondra-m/ruby-spark) -
  Spark bindings with an easy to understand DSL.
- [phobos](https://github.com/phobos/phobos) -
  [Apache Kafka](https://kafka.apache.org/)向けのRuby用簡易クライアント.
- [parallel](https://github.com/grosser/parallel) -
  Supervisor for parallel execution on multiple CPUs or in many threads.
- [pwrake](https://github.com/masa16/pwrake) -
  Rake extensions to run local and remote tasks in parallel.

### 多目的エンジン

- [open-nlp](https://github.com/louismullie/open-nlp) -
  Rubyで[OpenNLP](https://opennlp.apache.org/)ツールキットへのバインディング
- [stanford-core-nlp](https://github.com/louismullie/stanford-core-nlp) -
  スタンフォードの[CoreNLP](https://github.com/stanfordnlp/CoreNLP)ツール向けのRubyバインディング.
- [treat](https://github.com/louismullie/treat) -
  Ruby用の自然言語処理フレームワーク（Pythonの[NLTK](http://www.nltk.org/)に類似）.
- [nlp_toolz](https://github.com/LeFnord/nlp_toolz) -
  いくつかの[OpenNLP](https://opennlp.apache.org/)クラスおよびオリジナルの[Berkeley Parser](https://github.com/slavpetrov/berkeleyparser)をラップしたコード.
- [open_nlp](https://github.com/hck/open_nlp) -
  JRubyで[OpenNLP](https://opennlp.apache.org/)ツールキットへのバインディング
- [ruby-spacy](https://github.com/yohasebe/ruby-spacy) &mdash;
  spaCy NLPライブラリを[PyCall](https://github.com/mrkn/pycall.rb)を介してラップしたモジュール.

#### オンラインAPI

- [alchemyapi_ruby](https://github.com/alchemyapi/alchemyapi_ruby) -
  Legacy Ruby SDK for AlchemyAPI/Bluemix.
- [wit-ruby](https://github.com/wit-ai/wit-ruby) -
  [Wit.ai](https://wit.ai/)言語理解プラットフォーム向けのRubyクライアントライブラリ.
- [wlapi](https://github.com/arbox/wlapi) - オンラインAPIに関するRubyライブラリ、ツール、資料です。
  オンラインAPIに関するRubyライブラリ、ツール、資料です。 [Wortschatz Leipzig](http://wortschatz.uni-leipzig.de/de)
- [monkeylearn-ruby](https://github.com/monkeylearn/monkeylearn-ruby) - オンラインAPIに関するRubyライブラリ、ツール、資料です。
  Analysis, Topic Modelling, Language Detection, Named Entity Recognition via
  a Ruby based Web API client.
- [google-cloud-language](https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-language) -
  Google's Natural Language service API for Ruby.

### 言語識別

言語識別は、あらゆるNLPパイプラインにおける最初の重要工程の一つです。

- [scylla](https://github.com/hashwin/scylla) -
  Language Categorization and Identification.

### 分割

トークン化、単語・文境界の検出と曖昧性解消を行うツールです。

- [tokenizer](https://github.com/arbox/tokenizer) -
  Simple multilingual tokenizer.
  <sup>[[tutorial](https://github.com/arbox/nlp-with-ruby/blob/44db8a3e4c74c2a6fdcc6bef6bd14ed021b7bd24/tutorials/tokenizer.md)]</sup>
- [pragmatic_tokenizer](https://github.com/diasks2/pragmatic_tokenizer) -
  Multilingual tokenizer to split a string into tokens.
- [nlp-pure](https://github.com/parhamr/nlp-pure) -
  Natural language processing algorithms implemented in pure Ruby with minimal dependencies.
- [textoken](https://github.com/manorie/textoken) -
  Simple and customizable text tokenization library.
- [pragmatic_segmenter](https://github.com/diasks2/pragmatic_segmenter) -
  Word Boundary Disambiguation with many cookies.
- [punkt-segmenter](https://github.com/lfcipriani/punkt-segmenter) -
  Pure Ruby implementation of the Punkt Segmenter.
- [tactful_tokenizer](https://github.com/zencephalon/Tactful_Tokenizer) -
  RegExp based tokenizer for different languages.
- [scapel](https://github.com/louismullie/scalpel) -
  Sentence Boundary Disambiguation tool.

### 語彙処理

#### ステミング

ステミングとは、情報検索において語形を何らかの基本表現へ縮約する処理を指します。
`stems`は必ずしも言語学的な根拠を持たないため、[見出し語化](#lemmatization)とは
区別する必要があります。

- [ruby-stemmer](https://github.com/aurelian/ruby-stemmer) -
  Ruby-Stemmer exposes the SnowBall API to Ruby.
- [uea-stemmer](https://github.com/ealdent/uea-stemmer) -
  Conservative stemmer for search and indexing.

#### 見出し語化

Lemmatization is considered a process of finding a base form of a word. Lemmas
are often collected in dictionaries.

- [lemmatizer](https://github.com/yohasebe/lemmatizer) -
  WordNet based Lemmatizer for English texts.

#### 語彙統計: タイプとトークンの計数

- [wc](https://github.com/thesp0nge/wc) -
  Facilities to count word occurrences in a text.
- [word_count](https://github.com/AtelierConvivialite/word_count) -
  `String`および`Hash`オブジェクト用の単語カウンタ.
- [words_counted](https://github.com/abitdodgy/words_counted) -
  Pure Ruby library counting word statistics with different custom options.

#### ストップワードの除去

- [stopwords-filter](https://github.com/brenes/stopwords-filter) - ストップワードの除去に関するRubyライブラリ、ツール、資料です。
  Stop Word Lexicon based on the SnowBall lemmatizer.

### 句レベル処理

- [n_gram](https://github.com/reddavis/N-Gram) -
  N-Gram generator.
- [ruby-ngram](https://github.com/tkellen/ruby-ngram) -
  Break words and phrases into ngrams.
- [raingrams](https://github.com/postmodern/raingrams) -
  Flexible and general-purpose ngrams library written in pure Ruby.

### 統語処理

#### 句構造解析

- [stanfordparser](https://rubygems.org/gems/stanfordparser) -
  Ruby based wrapper for the Stanford Parser.
- [rley](https://github.com/famished-tiger/Rley) -
  純粋なRuby実装の[Earley](https://en.wikipedia.org/wiki/Earley_parser)による文法解析アルゴリズム（文法構成解析）.
- [rsyntaxtree](https://github.com/yohasebe/rsyntaxtree) -
  Rubyベースの[RMagick](https://github.com/rmagick/rmagick)を用いた構文木の可視化。<sup>[dep: [ImageMagick](#imagemagick)</sup>

### 意味解析

- [amatch](https://github.com/flori/amatch) -
  Set of five distance types between strings (including Levenshtein, Sellers, Jaro-Winkler, 'pair distance').
- [damerau-levenshtein](https://github.com/GlobalNamesArchitecture/damerau-levenshtein) -
  Calculates edit distance using the Damerau-Levenshtein algorithm.
- [hotwater](https://github.com/colinsurprenant/hotwater) -
  Fast Ruby FFI string edit distance algorithms.
- [levenshtein-ffi](https://github.com/dbalatero/levenshtein-ffi) -
  Fast string edit distance computation, using the Damerau-Levenshtein algorithm.
- [tf_idf](https://github.com/reddavis/TF-IDF) -
  Term Frequency / Inverse Document Frequency in pure Ruby.
- [tf-idf-similarity](https://github.com/jpmckinney/tf-idf-similarity) -
  Calculate the similarity between texts using TF/IDF.

### 語用論解析
- [SentimentLib](https://github.com/nzaillian/sentiment_lib) -
  Simple extensible sentiment analysis gem.

## 高水準タスク

### 綴り・誤り訂正

- [gingerice](https://github.com/subosito/gingerice) -
  スペルと文法の訂正を[Ginger](https://www.gingersoftware.com/) APIを用いて行う。
- [hunspell-i18n](https://github.com/romanbsd/hunspell) -
  標準の[Hunspell](https://hunspell.github.io/)スペルチェック機能へのRubyバインディング
- [ffi-hunspell](https://github.com/postmodern/ffi-hunspell) -
  FFIを用いた[Hunspell](https://hunspell.github.io/)へのRubyバインディング
- [hunspell](https://github.com/segabor/Hunspell) -
  Ruby C APIを介した[Hunspell](https://hunspell.github.io/)へのRubyバインディング

### テキストアラインメント

- [alignment](https://github.com/povilasjurcys/alignment) -
  Alignment routines for bilingual texts (Gale-Church implementation).

### 機械翻訳

- [google-api-client](https://github.com/googleapis/google-api-ruby-client) -
  Google API Ruby Client.
- [microsoft_translator](https://github.com/ikayzo/microsoft_translator) -
  Ruby client for the microsoft translator API.
- [termit](https://github.com/pawurb/termit) -
  Google Translate with speech synthesis in your terminal.
- [zipf](https://github.com/pks/zipf) -
  implementation of BLEU and other base algorithms.

### 感情分析

- [stimmung](https://github.com/pachacamac/stimmung) -
  [SentiWS](http://wortschatz.uni-leipzig.de/en/download)語彙に基づく意味論的極性の分析。

### 数値・日付・時刻の解析

- [chronic](https://github.com/mojombo/chronic) -
  Pure Ruby natural language date parser.
- [chronic_between](https://github.com/jrobertson/chronic_between) -
  Simple Ruby natural language parser for date and time ranges.
- [chronic_duration](https://github.com/henrypoydar/chronic_duration) -
  Pure Ruby parser for elapsed time.
- [kronic](https://github.com/xaviershay/kronic) -
  Methods for parsing and formatting human readable dates.
- [nickel](https://github.com/iainbeeston/nickel) -
  Extracts date, time, and message information from naturally worded text.
- [tickle](https://github.com/yb66/tickle) -
  Parser for recurring and repeating events.
- [numerizer](https://github.com/jduff/numerizer) -
  Ruby parser for English number expressions.

### 固有表現認識

- [ruby-ner](https://github.com/mblongii/ruby-ner) -
  Named Entity Recognition with Stanford NER and Ruby.
- [ruby-nlp](https://github.com/tiendung/ruby-nlp) -
  Ruby Binding for Stanford Pos-Tagger and Name Entity Recognizer.

### 音声合成・音声認識

- [espeak-ruby](https://github.com/dejan/espeak-ruby) -
  Small Ruby API for utilizing 'espeak' and 'lame' to create text-to-speech mp3 files.
- [tts](https://github.com/c2h2/tts) -
  Text-to-Speech conversion using the Google translate service.
- [att_speech](https://github.com/adhearsion/att_speech) -
  Ruby wrapper over the AT&T Speech API for speech to text.
- [pocketsphinx-ruby](https://github.com/watsonbox/pocketsphinx-ruby) -
  Pocketsphinx bindings.

## 対話エージェント・アシスタント・チャットボット

- [chatterbot](https://github.com/muffinista/chatterbot) -
  Straightforward ruby-based Twitter Bot Framework, using OAuth to authenticate.
- [lita](https://github.com/litaio/lita) -
  persistent storageを用いた、高度に拡張可能なチャット操作ボットフレームワーク（[Redis](https://redis.io/)で構築）。

## 言語資源

- [rwordnet](https://github.com/doches/rwordnet) -
  純粋なRubyによる自立型APIライブラリ（[Princeton WordNet®](https://wordnet.princeton.edu/)）
- [wordnet](https://github.com/ged/ruby-wordnet/blob/master/README.rdoc) -
  パフォーマンス最適化された[Princeton WordNet®](https://wordnet.princeton.edu/)へのバインディング

## 機械学習ライブラリ

機械学習ライブラリに関するRubyライブラリ、ツール、資料です。 [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning)
in pure Ruby or written in other programming languages with appropriate bindings
for Ruby.

より新しい情報は[Awesome ML with Ruby][ml-with-ruby]を参照してください。

- [rb-libsvm](https://github.com/febeling/rb-libsvm) -
  Support Vector Machines with Ruby.
- [weka](https://github.com/paulgoetze/weka-jruby) -
  JRuby bindings for Weka, different ML algorithms implemented through Weka.
- [decisiontree](https://github.com/igrigorik/decisiontree) -
  Decision Tree ID3 Algorithm in pure Ruby
  <sup>[[post](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>.
- [rtimbl](https://github.com/maspwr/rtimbl) -
  Memory based learners from the Timbl framework.
- [classifier-reborn](https://github.com/jekyll/classifier-reborn) -
  General classifier module to allow Bayesian and other types of classifications.
- [lda-ruby](https://github.com/ealdent/lda-ruby) -
  Rubyによる[LDA](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)（潜在ディリクレ分配）の実装（自動トピックモデル化およびドキュメントクラスタリング）。
- [liblinear-ruby-swig](https://github.com/tomz/liblinear-ruby-swig) -
  Ruby interface to LIBLINEAR (much more efficient than LIBSVM for text classification).
- [linnaeus](https://github.com/djcp/linnaeus) -
  Redis-backed Bayesian classifier.
- [maxent_string_classifier](https://github.com/mccraigmccraig/maxent_string_classifier) -
  JRuby maximum entropy classifier for string data, based on the OpenNLP Maxent framework.
- [naive_bayes](https://github.com/reddavis/Naive-Bayes) -
  Simple Naive Bayes classifier.
- [nbayes](https://github.com/oasic/nbayes) -
  Full-featured, Ruby implementation of Naive Bayes.
- [omnicat](https://github.com/mustafaturan/omnicat) -
  Generalized rack framework for text classifications.
- [omnicat-bayes](https://github.com/mustafaturan/omnicat-bayes) -
  Naive Bayes text classification implementation as an OmniCat classifier strategy.
- [ruby-fann](https://github.com/tangledpath/ruby-fann) -
  [Fast Artificial Neural Network Library (FANN)](http://leenissen.dk/fann/wp/)へのRubyバインディング。
- [rblearn](https://github.com/himkt/rblearn) - 特徴量抽出および交差検証ライブラリ。

## データ可視化

データ可視化に関するRubyライブラリ、ツール、資料です。 [データ可視化](https://github.com/arbox/data-science-with-ruby#visualization)
section on the [Data Science with Ruby][ds-with-ruby] list.

## 光学文字認識

* [tesseract-ocr](https://github.com/meh/ruby-tesseract-ocr) -
  [Tesseract OCR Engine](https://github.com/tesseract-ocr/tesseract)に対するFFIベースのラッパー。

## テキスト抽出

- [yomu](https://github.com/yomurb/yomu) -
  ファイルおよびドキュメントからテキストとメタデータを抽出するための [Apache Tika](https://tika.apache.org/) コンテンツ分析ツールキットのライブラリ

## 全文検索・情報検索・索引付け

- [rsolr](https://github.com/rsolr/rsolr) -
  RubyおよびRails用の[Apache Solr](http://lucene.apache.org/solr/)クライアントライブラリ
- [sunspot](https://github.com/sunspot/sunspot) -
  [Apache Solr](http://lucene.apache.org/solr/)向けのRails中心のクライアント
- [thinking-sphinx](https://github.com/pat/thinking-sphinx) -
  [Active Record](https://guides.rubyonrails.org/active_record_basics.html) を (Railsベースのプロジェクトに限らず) 使用するための [Sphinx](http://sphinxsearch.com/) プラグイン
- [elasticsearch](https://github.com/elastic/elasticsearch-ruby/tree/master/elasticsearch) -
  [Elasticsearch](https://www.elastic.co/)用のRubyクライアントおよびAPI
- [elasticsearch-rails](https://github.com/elastic/elasticsearch-rails) -
  [Elasticsearch](https://www.elastic.co/)におけるRubyおよびRailsの統合
- [google-api-client](https://github.com/googleapis/google-api-ruby-client) -
  [Google](https://developers.google.com/api-client-library/ruby/) サービス向けのRuby API ライブラリ

## 言語対応の文字列操作

Libraries for language aware string manipulation, i.e. search, pattern matching,
case conversion, transcoding, regular expressions which need information about
the underlying language.

- [fuzzy_match](https://github.com/seamusabshere/fuzzy_match) -
  Fuzzy string comparison with Distance measures and Regular Expression.
- [fuzzy-string-match](https://github.com/kiyoka/fuzzy-string-match) -
  Fuzzy string matching library for Ruby.
- [active_support](https://github.com/rails/rails/tree/master/activesupport/lib/active_support) -
  RoR の `ActiveSupport` ゲームには、ケースを扱うためのさまざまな文字列拡張機能が含まれる
- [fuzzy_tools](https://github.com/brianhempel/fuzzy_tools) -
  Toolset for fuzzy searches in Ruby tuned for accuracy.
- [u](http://disu.se/software/u-1.0/) -
  U extends Ruby’s Unicode support.
- [unicode](https://github.com/blackwinter/unicode) -
  Unicode normalization library.
- [CommonRegexRuby](https://github.com/talyssonoc/CommonRegexRuby) -
  Find a lot of kinds of common information in a string.
- [regexp-examples](https://github.com/tom-lord/regexp-examples) -
  Generate strings that match a given regular expression.
- [verbal_expressions](https://github.com/ryan-endacott/verbal_expressions) -
  Make difficult regular expressions easy.
- [translit_kit](https://github.com/AnalyzePlatypus/TranslitKit) -
  Transliterate Hebrew & Yiddish text into Latin characters.
- [re2](https://github.com/mudge/re2) -
  hight-speed Regular Expression library for Text Mining and Text Extraction.
- [regex_sample](https://github.com/mochizukikotaro/regex_sample) -
  sample string generation from a given Regular Expression.
- [iuliia](https://github.com/adnikiforov/iuliia-rb) &mdash;
  ルシアン文字をラテン文字にさまざまな方法で変換（[reference implementation](https://github.com/nalgeon/iuliia) が定義する方法）

## 記事・投稿・講演・発表

- 2019
  - _Extracting Text From Images Using Ruby_ by [aonemd](https://twitter.com/aonemd)
    <sup>[[post](https://aonemd.github.io/blog/extracting-text-from-images-using-ruby) | [code](https://gist.github.com/aonemd/7bb3c4760d9e47a9ce8e270198cb40a0)]</sup>
- 2018
  - _Natural Language Processing and Tweet Sentiment Analysis_ by [Cassandra Corrales](https://twitter.com/casita305)
    <sup>[[post](https://medium.com/@cmcorrales3/natural-language-processing-and-tweet-sentiment-analysis-fa1edbb5ddd5)]</sup>
- 2017
  - _The Google NLP API Meets Ruby_ by [Aja Hammerly](https://twitter.com/the_thagomizer)
    <sup>[[post](http://www.thagomizer.com/blog/2017/04/13/the-google-nlp-api-meets-ruby.html)]</sup>
  - _Syntax Isn't Everything: NLP For Rubyists_ by [Aja Hammerly](https://twitter.com/the_thagomizer)
    <sup>[[slides](http://www.thagomizer.com/files/NLP_RailsConf2017.pdf)]</sup>
  - _Scientific Computing on JRuby_ by [Prasun Anand](https://twitter.com/prasun_anand)
    <sup>[[slides](https://www.slideshare.net/PrasunAnand2/fosdem2017-scientific-computing-on-jruby) | [video](https://ftp.fau.de/fosdem/2017/K.4.201/ruby_scientific_computing_on_jruby.mp4) | [slides](https://www.slideshare.net/PrasunAnand2/scientific-computing-on-jruby) | [slides](https://www.slideshare.net/PrasunAnand2/scientific-computation-on-jruby)]</sup>
  - _Unicode Normalization in Ruby_ by [Starr Horne](https://twitter.com/starrhorne)
    <sup>[[post](https://blog.honeybadger.io/ruby_unicode_normalization/)]</sup>
- 2016
  - _Quickly Create a Telegram Bot in Ruby_ by [Ardian Haxha](https://twitter.com/ArdianHaxha)
    <sup>[[tutorial](https://www.sitepoint.com/quickly-create-a-telegram-bot-in-ruby/)]</sup>
  - _Deep Learning: An Introduction for Ruby Developers_ by [Geoffrey Litt](https://twitter.com/geoffreylitt)
    <sup>[[slides](https://speakerdeck.com/geoffreylitt/deep-learning-an-introduction-for-ruby-developers)]</sup>
  - _How I made a pure-Ruby word2vec program more than 3x faster_ by [Kei Sawada](https://twitter.com/remore)
    <sup>[[slides](https://speakerdeck.com/remore/how-i-made-a-pure-ruby-word2vec-program-more-than-3x-faster)]</sup>
  - _Dōmo arigatō, Mr. Roboto: Machine Learning with Ruby_ by [Eric Weinstein](https://twitter.com/ericqweinstein)
    <sup>[[slides](https://speakerdeck.com/ericqweinstein/domo-arigato-mr-roboto-machine-learning-with-ruby) | [video](https://www.youtube.com/watch?v=T1nFQ49TyeA)]</sup>
- 2015
  - _N-gram Analysis for Fun and Profit_ by [Jesus Castello](https://github.com/matugm)
    <sup>[[tutorial](https://www.rubyguides.com/2015/09/ngram-analysis-ruby/)]</sup>
  - _Machine Learning made simple with Ruby_ by [Lorenzo Masini](https://github.com/rugginoso)
    <sup>[[tutorial](https://www.leanpanda.com/blog/2015/08/24/machine-learning-automatic-classification/)]</sup>
  - _Using Ruby Machine Learning to Find Paris Hilton Quotes_ by [Rick Carlino](https://github.com/RickCarlino)
    <sup>[[tutorial](http://web.archive.org/web/20160414072324/http://datamelon.io/blog/2015/using-ruby-machine-learning-id-paris-hilton-quotes.html)]</sup>
  - _Exploring Natural Language Processing in Ruby_ by [Kevin Dias](https://github.com/diasks2)
    <sup>[[slides](https://www.slideshare.net/diasks2/exploring-natural-language-processing-in-ruby)]</sup>
  - _Machine Learning made simple with Ruby_ by [Lorenzo Masini](https://twitter.com/rugginoso)
    <sup>[[post](https://www.leanpanda.com/blog/2015/08/24/machine-learning-automatic-classification/)]</sup>
  - 記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。
    <sup>[[slides](http://slides.com/bobbygrayson/p#/)]</sup>
- 2014
  - _Natural Language Parsing with Ruby_ by [Glauco Custódio](https://github.com/glaucocustodio)
    <sup>[[tutorial](http://glaucocustodio.github.io/2014/11/10/natural-language-parsing-with-ruby/)]</sup>
  - 記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。
    記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。 [Todd Schneider](https://github.com/toddwschneider)
    <sup>[[video](https://www.youtube.com/watch?v=2ZDCxwB29Bg) | [code](https://github.com/Genius/abstractogram)]</sup>
  - _Natural Language Processing with Ruby_ by [Konstantin Tennhard](https://github.com/t6d)
    <sup>[[video](https://www.youtube.com/watch?v=5u86qVh8r0M) | [video](https://www.youtube.com/watch?v=oFmy_QBQ5DU) |
    記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。 [video](https://www.youtube.com/watch?v=sPkeeWnsMn0)
    記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。 [slides](http://euruko2013.org/speakers/presentations/natural_language_processing_with_ruby_and_opennlp-tennhard.pdf)
- 2013
  - 記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。
    記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。 [Tom Cartwright](https://twitter.com/tomcartwrightuk)
    <sup>[[slides](https://www.slideshare.net/TomCartwright/natual-language-processing-in-ruby) | [video](https://skillsmatter.com/skillscasts/4883-how-to-parse-go)]</sup>
  - _Natural Language Processing in Ruby_ by [Brandon Black](https://twitter.com/brandonmblack)
    <sup>[[slides](https://speakerdeck.com/brandonblack/natural-language-processing-in-ruby) | [video](http://confreaks.tv/videos/railsconf2013-natural-language-processing-with-ruby)]</sup>
  - _Natural Language Processing with Ruby: n-grams_ by [Nathan Kleyn](https://github.com/nathankleyn)
    <sup>[[tutorial](https://www.sitepoint.com/natural-language-processing-ruby-n-grams/) | [code](https://github.com/nathankleyn/ruby-nlp)]</sup>
  - 記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。
    記事・投稿・講演・発表に関するRubyライブラリ、ツール、資料です。 [Robert Qualls](https://github.com/rlqualls)
    <sup>[[tutorial](https://www.sitepoint.com/seeking-lovecraft-part-1-an-introduction-to-nlp-and-the-treat-gem/)]</sup>
- 2012
  - _Machine Learning with Ruby, Part One_ by [Vasily Vasinov](https://twitter.com/vasinov)
    <sup>[[tutorial](http://www.vasinov.com/blog/machine-learning-with-ruby-part-one/)]</sup>
- 2011
  - _Ruby one-liners_ by [Benoit Hamelin](https://twitter.com/benoithamelin)
    <sup>[[post](http://benoithamelin.tumblr.com/ruby1line)]</sup>
  - _Clustering in Ruby_ by [Colin Drake](https://twitter.com/colinfdrake)
    <sup>[[post](https://colindrake.me/post/k-means-clustering-in-ruby/)/)]</sup>
- 2010
  - _bayes_motel – Bayesian classification for Ruby_ by [Mike Perham](https://twitter.com/mperham)
    <sup>[[post](http://www.mikeperham.com/2010/04/28/bayes_motel-bayesian-classification-for-ruby/)]</sup>
- 2009
  - _Porting the UEA-Lite Stemmer to Ruby_ by [Jason Adams](https://twitter.com/ealdent)
    <sup>[[post](https://ealdent.wordpress.com/2009/07/16/porting-the-uea-lite-stemmer-to-ruby/)]</sup>
  - _NLP Resources for Ruby_ by [Jason Adams](https://twitter.com/ealdent)
    <sup>[[post](https://ealdent.wordpress.com/2009/09/13/nlp-resources-for-ruby/)]</sup>
- 2008
  - _Support Vector Machines (SVM) in Ruby_ by [Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[post](https://www.igvita.com/2008/01/07/support-vector-machines-svm-in-ruby/)]</sup>
  - _Practical text classification with Ruby_ by [Gleicon Moraes](https://twitter.com/gleicon)
    <sup>[[post](https://zenmachine.wordpress.com/practical-text-classification-with-ruby/) | [code](https://github.com/gleicon/zenmachine)]</sup>
- 2007
  - _Decision Tree Learning in Ruby_ by [Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[post](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>
- 2006
  - _Speak My Language: Natural Language Processing With Ruby_ by [Michael Granger](https://deveiate.org/resume.html)
    <sup>[[slides](https://deveiate.org/misc/Speak-My-Language.pdf) | [write-up](http://blog.nicksieger.com/articles/2006/10/22/rubyconf-natural-language-generation-and-processing-in-ruby/) | [write-up](http://juixe.com/papers/RubyConf2006.pdf)]</sup>

## プロジェクトとコード例

- [Going the Distance](https://github.com/schneems/going_the_distance) -
  Implementations of various distance algorithms with example calculations.
- [Named entity recognition with Stanford NER and Ruby](https://github.com/mblongii/ruby-ner) -
  Ruby と Java での NER 例および一部の [explanations](https://web.archive.org/web/20120722225402/http://mblongii.com/2012/04/15/named-entity-recognition-with-stanford-ner-and-ruby/).
- [Words Counted](http://rubywordcount.com/) -
  [words_counted](https://github.com/abitdodgy/words_counted) が提供するカスタマイズ可能な語彙統計の例.
- [RSyntaxTree](https://yohasebe.com/rsyntaxtree/) -
  Web based demonstration of the syntactic tree visualization.

## 書籍

-  [Miller, Rob](https://twitter.com/robmil/).
   _Text Processing with Ruby: Extract Value from the Data That Surrounds You._
   Pragmatic Programmers, 2015.
   <sup>[[link](https://www.amazon.com/Text-Processing-Ruby-Extract-Surrounds/dp/1680500708)]</sup>
-  [Watson, Mark](https://twitter.com/mark_l_watson).
   _Scripting Intelligence: Web 3.0 Information Gathering and Processing._
   APRESS, 2010.
   <sup>[[link](https://www.amazon.de/Scripting-Intelligence-Information-Gathering-Processing/dp/1430223510)]</sup>
-  [Watson, Mark](https://twitter.com/mark_l_watson).
   _Practical Semantic Web and Linked Data Applications._ Lulu, 2010.
   <sup>[[link](http://www.lulu.com/shop/mark-watson/practical-semantic-web-and-linked-data-applications-java-edition/paperback/product-10915016.html)]</sup>

## コミュニティ

- [Reddit](https://www.reddit.com/r/LanguageTechnology/search?q=ruby&restrict_sr=on)
- [Stack Overflow](https://stackoverflow.com/search?q=%5Bnlp%5D+and+%5Bruby%5D)
- [Twitter](https://twitter.com/search?q=Ruby%20NLP%20%23ruby%20OR%20%23nlproc%20OR%20%23rubynlp%20OR%20%23nlp&src=typd&lang=en)

## 協力募集中!

この節のプロジェクトはコミュニティにとって重要ですが、より多くの協力を必要としています。時間を確保できる場合は、開発への参加をご検討ください。

- [ferret](https://github.com/dbalmain/ferret) -
  Information Retrieval in C and Ruby.
- [summarize](https://github.com/ssoper/summarize) -
  Ruby 用の [Open Text Summarizer](https://github.com/neopunisher/Open-Text-Summarizer) のネイティブラッパー。

## 関連リソース

- [Neural Machine Translation Implementations](https://github.com/jonsafari/nmt-list)
- [Awesome Ruby](https://github.com/markets/awesome-ruby#natural-language-processing) -
  Among other awesome items a short list of NLP related projects.
- [Ruby NLP](https://github.com/diasks2/ruby-nlp) -
  State-of-Art collection of Ruby libraries for NLP.
- [Speech and Natural Language Processing](https://github.com/edobashira/speech-language-processing) -
  General List of NLP related resources (mostly not for Ruby programmers).
- [Scientific Ruby](http://sciruby.com/) -
  Linear Algebra, Visualization and Scientific Computing for Ruby.
- [iRuby](https://github.com/SciRuby/iruby) - Jupyter (formelly IPython)向けのIRuby kernel。
- [Awesome OCR](https://github.com/kba/awesome-ocr) -
  Multitude of OCR (Optical Character Recognition) resources.
- [Awesome TensorFlow](https://github.com/jtoy/awesome-tensorflow) -
  Machine Learning with TensorFlow libraries.
- <a name="imagemagic"></a>
  関連リソースに関するRubyライブラリ、ツール、資料です。 [ImageMagick](https://imagemagick.org/index.php)

## ライセンス

[![Creative Commons Zero 1.0](http://mirrors.creativecommons.org/presskit/buttons/80x15/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/) `Awesome NLP with Ruby` by [Andrei Beliankou](https://github.com/arbox) and
[Contributors](https://github.com/arbox/nlp-with-ruby/graphs/contributors).

法令で認められる範囲において、CC0を適用した人物は
`Awesome NLP with Ruby`に関するすべての著作権および関連・隣接する権利を
`Awesome NLP with Ruby`から放棄しています。

本作品にはCC0の法的文書が同梱されている必要があります。
同梱されていない場合は<https://creativecommons.org/publicdomain/zero/1.0/>を参照してください。


[ruby]: https://www.ruby-lang.org/en/
[motivation]: https://github.com/arbox/nlp-with-ruby/blob/master/motivation.md
[faq]: https://github.com/arbox/nlp-with-ruby/blob/master/FAQ.md
[ds-with-ruby]: https://github.com/arbox/data-science-with-ruby
[ml-with-ruby]: https://github.com/arbox/machine-learning-with-ruby
[change-pr]: https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md
