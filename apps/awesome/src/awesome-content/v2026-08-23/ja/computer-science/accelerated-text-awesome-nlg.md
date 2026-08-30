---
title: "accelerated-text/awesome-nlg"
description: "accelerated-text/awesome-nlg の正規スナップショット"
licenseSource: "github-accelerated-text-awesome-nlg-readme-md"
---

# Awesome Natural Language Generation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![BL Harley 647のPiscis Magnus](https://raw.githubusercontent.com/accelerated-text/awesome-nlg/e12d701762a97047e28383ae8b09e13b7e88d280/logo.png)

自然言語生成は、チャットボット、物語生成、データ記述などへ応用される幅広い分野です。NLGプロセスの一部または全体を扱う、多様な技術が存在します。このリストは、さまざまなプロジェクト、ツール、研究論文、学習資料へのリンクを通じて、NLGの応用と技法の多様性を示すことを目的としています。

## 目次

- [データセット](#datasets)
- [対話](#dialog)
- [評価](#evaluation)
- [文法](#grammar)
- [ライブラリ](#libraries)
- [物語生成](#narrative-generation)
- [ニューラル自然言語生成](#neural-natural-language-generation)
- [論文と記事](#papers-and-articles)
- [製品](#products)
- [表層実現器](#realizers)
- [テンプレート言語](#templating-languages)
- [動画](#videos)

## データセット <a id="datasets"></a>

- [Alex Context NLG Dataset](https://github.com/UFAL-DSG/alex_context_nlg_dataset) - 公共交通案内分野の対話システムにおけるNLG用データセット。
- [Box-score data](https://github.com/harvardnlp/boxscore-data/) - 人間が記述したNBAバスケットボールの試合要約と、それに対応するボックススコアおよびラインスコアで構成されるデータセット。
- [E2E](http://www.macs.hw.ac.uk/InteractionLab/E2E) - 整列されていないデータから文計画と表層実現を同時に学習する、近年のエンドツーエンド（E2E）データ駆動NLG手法に焦点を当てた共通タスク。
- [Neural-Wikipedian](https://github.com/pvougiou/Neural-Wikipedian) - Semantic Webのトリプルから英語の人物伝を生成する方法を「学習」するシステムの構築に使用されたコードと必要なコーパス。
- [WeatherGov](https://cs.stanford.edu/~pliang/data/weather-data.zip) - weather.gov（米国の公共気象予報）がコンピューター生成した天気予報と、対応する気象データ。
- [WebNLG](https://github.com/ThiagoCF05/webnlg) - 談話順序付け、語彙化、指示表現生成など、一般的なNLGタスクを評価するリソースWebNLGの拡張版。
- [WikiBio - wikipedia biography dataset](https://rlebret.github.io/wikipedia-biography-dataset/) - Wikipediaから728,321件の人物伝を収集した、テキスト生成アルゴリズムの評価用データセット。
- [The Schema-Guided Dialogue Dataset](https://github.com/google-research-datasets/dstc8-schema-guided-dialogue) - Schema-Guided Dialogue（SGD）データセット。人間と仮想アシスタントによる、注釈付きの複数ドメイン・タスク指向対話を2万件以上収録。
- [The Wikipedia company corpus](https://gricad-gitlab.univ-grenoble-alpes.fr/getalp/wikipediacompanycorpus) - Wikipediaから収集した企業説明。英語で51,000社の意味表現、短い説明、長い説明を収録。
- [YelpNLG](https://nlds.soe.ucsc.edu/yelpnlg) - レストランレビューの自然言語生成用リソース。

## 対話 <a id="dialog"></a>

- [Chatito](https://github.com/rodrigopivi/Chatito) - シンプルなDSLを使い、AIチャットボット、NLPタスク、固有表現認識、テキスト分類モデル用のデータセットを生成。
- [NNDIAL](https://github.com/shawnwun/NNDIAL) - エンドツーエンドで訓練可能なタスク指向対話モデルを構築するためのオープンソースツールキット。
- [Plato](https://github.com/uber-research/plato-research-dialogue-system) - 対話AIエージェントを開発するための柔軟な研究プラットフォーム、Plato Research Dialogue System。
- [RNNLG](https://github.com/shawnwun/RNNLG) - 音声対話システムの応用領域における自然言語生成（NLG）用オープンソースベンチマークツールキット。
- [TGen](https://github.com/UFAL-DSG/tgen) - 音声対話システム向けの統計的NLG。

## 評価 <a id="evaluation"></a>

- [BLEURT: a Transfer Learning-Based Metric for Natural Language Generation](https://github.com/google-research/bleurt)
- [compare-mt](https://github.com/neulab/compare-mt) - 言語生成システムを包括的に分析するツール。
- [GEM](https://gem-benchmark.com/) - 人手注釈と自動指標の両方による評価に重点を置いたNLGベンチマーク環境。
- [NLG-eval](https://github.com/Maluuba/nlg-eval) - 自然言語生成における各種教師なし自動指標の評価コード。
- [VizSeq](https://github.com/facebookresearch/vizseq) - テキスト生成タスク向け視覚分析ツールキット。

## 文法 <a id="grammar"></a>

- [OpenCCG](https://github.com/OpenCCG/openccg) - CCGによる構文解析と表層実現のためのライブラリ。
- [GrammaticalFramework](http://www.grammaticalframework.org/) - 多言語文法アプリケーション向けプログラミング言語。
- [EasyCCG](https://github.com/mikelewis0/easyccg) - CCGの全組合せ規則、共通文法形式、論理形式への構文解析、確率的CCGのパラメーター推定。
- [CCG Lab](https://github.com/bozsahin/ccglab) - 全組合せ規則、共通文法形式、論理形式への構文解析、確率的CCGのパラメーター推定。
- [CCGweb](https://github.com/texttheater/ccgweb) - 構文解析と注釈付けのためのWebプラットフォーム。

## ライブラリ <a id="libraries"></a>

- [Cron Expression Descriptor](https://github.com/bradymholt/cron-expression-descriptor) - cron式を人間が読める説明へ変換する.NETライブラリ。
- [Number Words](https://github.com/tokenmill/numberwords) - 数値を近似的なテキスト表現へ変換。例：'0.23'から「4分の1未満」へ。
- [Writebot](https://docs.writebot.app) - プリセットを利用してGPT-3を簡単に扱えるようにするNodeJSライブラリ。

## 物語生成 <a id="narrative-generation"></a>

- [Random Story Generator](https://github.com/aherriot/story-generator) - 自然言語生成（NLG）を使ってランダムな短編物語を作成。
- [Tracery](https://github.com/galaxykate/tracery) - JavaScript向けの物語文法生成ライブラリ。

## ニューラル自然言語生成 <a id="neural-natural-language-generation"></a>

- [aitextgen](https://github.com/minimaxir/aitextgen) - GPT-2を使ったテキストベースAIの訓練と生成に対応する堅牢なPythonツール。
- [graph-2-text](https://github.com/diegma/graph-2-text) - グラフ畳み込みネットワークとopennmt-pyを組み合わせ、グラフから系列への変換をPytorchで実装。
- [Image Caption Generator](https://github.com/neural-nuts/image-caption-generator) - Tensorflowを使って画像へキャプションを付けるニューラルネットワークベースの生成モデル。
- [lightnlg](https://github.com/kasnerz/lightnlg) - PyTorch Lightningを使ったNLGモデルのファインチューニングと操作のための最小限のコードベース。
- [PaperRobot: Incremental Draft Generation of Scientific Ideas](https://github.com/EagleW/PaperRobot) - 自動研究アシスタントとして機能するPaperRobot。
- [PPLM](https://github.com/uber-research/PPLM) - Plug and Play Language Modelの実装。GPT-2モデルの話題と属性を誘導できる。
- [Question Generation using hugstransformers](https://github.com/patil-suraj/question_generation) - テキスト段落から質問を自動生成するタスク。
- [Texar](https://github.com/asyml/texar) - 機械学習、特に自然言語処理とテキスト生成の幅広いタスクを支援するツールキット。
- [textgenrnn](https://github.com/minimaxir/textgenrnn) - 数行のコードで、任意のテキストデータセットから規模や複雑さを問わず独自のテキスト生成ニューラルネットワークを簡単に訓練。
- [This Word Does Not Exist](https://github.com/turtlesoupy/this-word-does-not-exist) - 単語、定義、用例をゼロから作り出すGPT-2の派生モデルを訓練できるプロジェクト。
- [Transformers](https://github.com/huggingface/transformers) - TensorFlow 2.0とPyTorch向けの最先端自然言語処理。
- [Summary Generation From Structured Data](https://github.com/akanimax/natural-language-summary-generation-from-structured-data) - 構造化データ形式の情報を自然言語テキストへ変換。

## 論文と記事 <a id="papers-and-articles"></a>
- [2022: Repairing the Cracked Foundation: A Survey of Obstacles in Evaluation Practices for Generated Text](https://arxiv.org/abs/2202.06935)
- [2021: Vision: NLG Can Help Humanise Data and AI](https://ehudreiter.com/2021/03/17/vision-nlg-can-help-humanise-data-and-ai/)
- [2020: The Curious Case of Neural Text Degeneration](https://openreview.net/forum?id=rygGQyrFvH)
- [2020: A Gold Standard Methodology for Evaluating Accuracy in Data-To-Text Systems](https://arxiv.org/abs/2011.03992)
- [2020: Evaluating the state-of-the-art of End-to-End Natural Language Generation: The E2E NLG challenge](https://www.sciencedirect.com/science/article/pii/S0885230819300919)
- [2020: How to generate text: using different decoding methods for language generation with Transformers](https://huggingface.co/blog/how-to-generate)
- [2020: Natural language generation: The commercial state ofthe art in 2020](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/BA2417D73AF29F8073FF5B611CDEB97F/S135132492000025Xa.pdf/natural_language_generation_the_commercial_state_of_the_art_in_2020.pdf)
- [2020: Turing-NLG: A 17-billion-parameter language model by Microsoft](https://www.microsoft.com/en-us/research/blog/turing-nlg-a-17-billion-parameter-language-model-by-microsoft/)
- [2019: A Closer Look at Recent Results of Verb Selection for Data-to-Text NLG](https://www.inlg2019.com/assets/papers/178_Paper.pdf)
- [2019: A Personalized Data-to-Text Support Tool for Cancer Patients](https://www.inlg2019.com/assets/papers/28_Paper.pdf)
- [2019: Controlling Contents in Data-to-Document Generation with Human-Designed Topic Labels](https://www.inlg2019.com/assets/papers/79_Paper.pdf)
- [2019: Generated Texts Must Be Accurate!](https://ehudreiter.com/2019/09/26/generated-texts-must-be-accurate/)
- [2019: Hotel Scribe: Generating High Variation Hotel Descriptions](https://www.inlg2019.com/assets/papers/44_Paper.pdf)
- [2019: Revisiting Challenges in Data-to-Text Generation with Fact Grounding](https://www.inlg2019.com/assets/papers/32_Paper.pdf)
- [2017: Survey of the State of the Art in NaturalLanguage Generation: Core tasks, applicationsand evaluation](https://arxiv.org/pdf/1703.09902.pdf)
- [2016: Natural Language Generation enhances human decision-making with uncertain information](https://arxiv.org/pdf/1606.03254.pdf)


## 製品 <a id="products"></a>

- [Accelerated Text](https://github.com/tokenmill/accelerated-text) - データから、表現と構成の異なる複数の自然言語説明を自動生成。
- [RosaeNLG](https://rosaenlg.org) - Pugテンプレートエンジンを基盤に、node.jsまたはクライアント側（ブラウザー）で実行し、英語、フランス語、ドイツ語、イタリア語のテキストを生成するオープンソースライブラリ。
- [Twine](http://twinery.org/) - インタラクティブで非線形な物語を作るためのオープンソースツール。

## 表層実現器 <a id="realizers"></a>

- [Genl](https://github.com/kowey/GenI) - Tree Adjoining Grammarを使う表層実現器（自然言語生成システムの一部）。
- [JSrealB](https://github.com/rali-udem/JSrealB) - Web開発向けのJavaScript製二言語テキスト実現器。
- [SimpleNLG](https://github.com/simplenlg/simplenlg) - 自然言語生成のためのJava API。
- [SimpleNLG DE](https://github.com/sebischair/SimpleNLG-DE) - SimpleNLG 4のドイツ語版。
- [SimpleNLG-EnFr](https://github.com/rali-udem/SimpleNLG-EnFr) - SimpleNLG v4.2を英語とフランス語に適応させた二言語版、SimpleNLG-EnFr 1.1。

## テンプレート言語 <a id="templating-languages"></a>

- [calyx](https://github.com/maetl/calyx) - 再帰的テンプレート文法でテキストを生成するRubyライブラリ。
- [nalgene](https://github.com/spro/nalgene) - 自然言語生成用の言語。
- [StringTemplate](https://www.stringtemplate.org/) - ソースコード、Webページ、メール、その他の整形済みテキスト出力を生成するJavaテンプレートエンジン（C##、Objective-C、JavaScript、Scalaへの移植版あり）。

## 動画 <a id="videos"></a>

- [Data-To-Text: Generating Textual Summaries of Complex Data - Ehud Reiter](https://www.youtube.com/watch?v=kFRw-wk5YOA)
- [Imitation Learning and its Application to Natural Language Generation](https://slideslive.com/38922816/imitation-learning-and-its-application-to-natural-language-generation)
- [Natural Language Generation (Introduction)](https://www.youtube.com/watch?v=4fjM72lbJaw)
- [Strata Data Conference | The future of natural language generation: 2017-2027](https://www.youtube.com/watch?v=Ls7elVbN8bI)
- [The Quest for Automated Story Generation - Mark Riedl](https://www.youtube.com/watch?v=wgcDUX_BPpk)

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

法律で認められる限り、[TokenMill](https://www.tokenmill.ai)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
