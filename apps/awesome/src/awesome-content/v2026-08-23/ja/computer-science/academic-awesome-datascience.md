---
title: "academic/awesome-datascience"
description: "データサイエンスの講座、書籍、ツール、ライブラリ、論文、データセット集"
licenseSource: "github-academic-awesome-datascience-readme-md"
---

<div align="center"><img src="https://raw.githubusercontent.com/academic/awesome-datascience/936a76248cbe5fd8be422dc655b62ea5b570769a/assets/head.jpg"></div>

# AWESOME DATA SCIENCE

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

ご寄付は歓迎です - [`CONTRIBUTING.md`](https://github.com/academic/awesome-datascience/blob/936a76248cbe5fd8be422dc655b62ea5b570769a/CONTRIBUTING.md)を参照してください.

**オープンソースのデータサイエンスリポジトリで、現実の問題解決に向けて概念を学び、応用します。**

これは**データサイエンス**を学び始めるためのショートカットパスです。ただ、質問に答える手順に従ってください。「データサイエンスとは何か、そしてデータサイエンスを学ぶために何を学ぶべきか？」

<br>

## $ [academic](https://academic.io/cli)

```
$ brew tap academic/tap
$ brew install academic
```

## Sponsors


[![Graphyn: visualize specialized agent workflows](https://raw.githubusercontent.com/fuego-wtf/graphyn-code/main/assets/graphyn-agent-workflows.png)](https://graphyn.ai/?utm_source=github&utm_medium=sponsorship&utm_campaign=graphyn_founding_alpha&utm_content=awesome_datascience_banner)


スポンサーになる！ `github@academic.io`



## Table of Contents

- [What is Data Science?](#what-is-data-science)
- [Where do I Start?](#where-do-i-start)
- [Agents](#agents)
- [Training Resources](#training-resources)
  - [Tutorials](#tutorials)
  - [Free Courses](#free-courses)
  - [Massively Open Online Courses](#moocs)
  - [Intensive Programs](#intensive-programs)
  - [Colleges](#colleges)
- [The Data Science Toolbox](#the-data-science-toolbox)

  - [Algorithms](#algorithms)
    - [Supervised Learning](#supervised-learning)
    - [Unsupervised Learning](#unsupervised-learning)
    - [Semi-Supervised Learning](#semi-supervised-learning)
    - [Reinforcement Learning](#reinforcement-learning)
    - [Data Mining Algorithms](#data-mining-algorithms)
    - [Deep Learning Architectures](#deep-learning-architectures)
  - [General Machine Learning Packages](#general-machine-learning-packages)
  - [Model Evaluation & Monitoring](#model-evaluation--monitoring)
    - [Evidently AI](#evidently-ai)
  - [Deep Learning Packages](#deep-learning-packages)
    - [PyTorch Ecosystem](#pytorch-ecosystem)
    - [TensorFlow Ecosystem](#tensorflow-ecosystem)
    - [Keras Ecosystem](#keras-ecosystem)
  - [Visualization Tools](#visualization-tools)
  - [Miscellaneous Tools](#miscellaneous-tools)
- [Literature and Media](#literature-and-media)
  - [Books](#books)
    - [Book Deals (Affiliated)](#book-deals-affiliated)
  - [Journals, Publications, and Magazines](#journals-publications-and-magazines)
  - [Newsletters](#newsletters)
  - [Bloggers](#bloggers)
  - [Presentations](#presentations)
  - [Podcasts](#podcasts)
  - [YouTube Videos & Channels](#youtube-videos--channels)
- [Socialize](#socialize)
  - [Facebook Accounts](#facebook-accounts)
  - [Twitter Accounts](#twitter-accounts)
  - [Telegram Channels](#telegram-channels)
  - [Slack Communities](#slack-communities)
  - [GitHub Groups](#github-groups)
  - [Data Science Competitions](#data-science-competitions)
- [Fun](#fun)
  - [Infographics](#infographics)
  - [Datasets](#datasets)
  - [Comics](#comics)
- [Other Awesome Lists](#other-awesome-lists)
  - [Hobby](#hobby)

## What is Data Science?
**[`^        back to top        ^`](#awesome-data-science)**

データサイエンスは、現在のコンピュータとインターネットの農場で最も注目されているテーマの一つです。人々はアプリケーションやシステムからデータを収集してきたのです。今こそ、それらのデータを分析する時期です。次に進むべきステップは、データから提案を生み出し、未来についての予測を作成することです。 [Here](https://www.quora.com/Data-Science/What-is-data-science) で、**データサイエンス**に関する最大の問いと、専門家からの数百の回答を見つけることができます。


| Link | Preview |
| --- | --- |
| [Data Science For Beginners](https://github.com/microsoft/Data-Science-For-Beginners) | Microsoft are pleased to offer a 10-week, 20-lesson curriculum all about Data Science. |
| [What is Data Science @ O'reilly](https://www.oreilly.com/ideas/what-is-data-science) | _Data scientists combine entrepreneurship with patience, the willingness to build data products incrementally, the ability to explore, and the ability to iterate over a solution. They are inherently interdisciplinary. They can tackle all aspects of a problem, from initial data collection and data conditioning to drawing conclusions. They can think outside the box to come up with new ways to view the problem, or to work with very broadly defined problems: “here’s a lot of data, what can you make from it?”_ |
| [What is Data Science @ Quora](https://www.quora.com/Data-Science/What-is-data-science) | Data Science is a combination of a number of aspects of Data such as Technology, Algorithm development, and data interference to study the data, analyse it, and find innovative solutions to difficult problems. Basically Data Science is all about Analysing data and driving for business growth by finding creative ways. |
| [The sexiest job of 21st century](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century) | _Data scientists today are akin to Wall Street “quants” of the 1980s and 1990s. In those days people with backgrounds in physics and math streamed to investment banks and hedge funds, where they could devise entirely new algorithms and data strategies. Then a variety of universities developed master’s programs in financial engineering, which churned out a second generation of talent that was more accessible to mainstream firms. The pattern was repeated later in the 1990s with search engineers, whose rarefied skills soon came to be taught in computer science programs._ |
| [Wikipedia](https://en.wikipedia.org/wiki/Data_science) | _Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, machine learning and big data._ |
| [How to Become a Data Scientist](https://www.mastersindatascience.org/careers/data-scientist/) | _Data scientists are big data wranglers, gathering and analyzing large sets of structured and unstructured data. A data scientist’s role combines computer science, statistics, and mathematics. They analyze, process, and model data then interpret the results to create actionable plans for companies and other organizations._ |
| [a very short history of #datascience](https://www.forbes.com/sites/gilpress/2013/05/28/a-very-short-history-of-data-science/) | _The story of how data scientists became sexy is mostly the story of the coupling of the mature discipline of statistics with a very young one--computer science.  The term “Data Science” has emerged only recently to specifically designate a new profession that is expected to make sense of the vast stores of big data. But making sense of data has a long history and has been discussed by scientists, statisticians, librarians, computer scientists and others for years. The following timeline traces the evolution of the term “Data Science” and its use, attempts to define it, and related terms._ |
|[Software Development Resources for Data Scientists](https://www.rstudio.com/blog/software-development-resources-for-data-scientists/)|_Data scientists concentrate on making sense of data through exploratory analysis, statistics, and models. Software developers apply a separate set of knowledge with different tools. Although their focus may seem unrelated, data science teams can benefit from adopting software development best practices. Version control, automated testing, and other dev skills help create reproducible, production-ready code and tools._|
|[Data Scientist Roadmap](https://www.scaler.com/blog/how-to-become-a-data-scientist/)|_Data science is an excellent career choice in today’s data-driven world where approx 328.77 million terabytes of data are generated daily. And this number is only increasing day by day, which in turn increases the demand for skilled data scientists who can utilize this data to drive business growth._|
|[Navigating Your Path to Becoming a Data Scientist](https://www.appliedaicourse.com/blog/how-to-become-a-data-scientist/)|_Data science is one of the most in-demand careers today. With businesses increasingly relying on data to make decisions, the need for skilled data scientists has grown rapidly. Whether it’s tech companies, healthcare organizations, or even government institutions, data scientists play a crucial role in turning raw data into valuable insights. But how do you become a data scientist, especially if you’re just starting out? _|

## Where do I Start?
**[`^        back to top        ^`](#awesome-data-science)**

プログラミング言語を持つことは、厳密には必須ではありませんが、データサイエンティストとして効果的に働くために非常に重要なスキルです。現在、最も人気のある言語は _Python_ で、それに次いで _R_ が人気です。Pythonは、さまざまな分野に応用される汎用的なスクリプト言語です。Rは統計に特化した言語で、多くの統計ツールを標準で備えています。

[Python](https://python.org/)は、使用のしやすさやユーザーが生成したパッケージの豊かな生態系のおかげで、科学分野で最も人気のある言語です。パッケージのインストールには、主に2つの方法があります：Pythonが標準で提供するパッケージマネージャーであるPip（呼び出し名：`pip install`）と、Python、R用にパッケージをインストールできるだけでなく、Gitなどの実行ファイルをダウンロードできる強力なパッケージマネージャーである[Anaconda](https://www.anaconda.com)（呼び出し名：`conda install`）です。

Rとは異なり、Pythonはデータサイエンスを設計の中心に置いたものではなく、しかし、その欠如を補うための多くの第三者ライブラリがあります。このドキュメントの後半に、パッケージのより詳細なリストが掲載されていますが、これら4つのパッケージはデータサイエンスの旅を始めるのに適した選択肢です：[Scikit-Learn](https://scikit-learn.org/stable/index.html)は汎用的なデータサイエンスパッケージであり、最も人気のあるアルゴリズムを実装しています。また、その実装するモデルについての豊かなドキュメンテーション、チュートリアル、および例が含まれています。あなたが自作の実装を好む場合でも、Scikit-Learnは多くの一般的なアルゴリズムの内部構造を理解するための貴重な参考資料です。[Pandas](https://pandas.pydata.org/)を使用することで、データを収集し、分析して便利なテーブル形式に変換できます。[Numpy](https://numpy.org/)はベクトルと行列に焦点を当てた数学演算の高速ツールを提供しています。[Seaborn](https://seaborn.pydata.org/)は、[Matplotlib](https://matplotlib.org/)パッケージに基づいており、データの美しく視覚的に表現するための迅速な手段であり、多くのデフォルト設定が用意されており、データの多くの一般的な可視化方法を示すギャラリーも提供されています。

データサイエンティストになる旅を始める際、言語の選択は特に重要ではなく、PythonとRのそれぞれには利点と欠点があります。好きな言語を選んで、下記にリストされた[Free courses](#free-courses)のいずれかをチェックしてみてください！

### Beginner Roadmap
If you're just starting out, here's a simple recommended path:

1. **Learn Python** – Start with basics: variables, loops, functions
2. **Learn core libraries** – Pandas, NumPy, Matplotlib, Scikit-Learn
3. **Practice with beginner projects** – Try Titanic survival or house price prediction on Kaggle
4. **Learn Math basics** – Statistics, Linear Algebra, Probability
5. **Move into ML** – Supervised learning → Unsupervised → Deep Learning

## Agents

このセクションには、データサイエンスのワークフローに役立つエージェントフレームワークとツールが含まれています。

### Frameworks
- [ADK-Rust](https://github.com/zavora-ai/adk-rust) - RustでAIアグエントを開発できるプロダクション用開発キット。モデルに依存しない設計（Gemini、OpenAI、Anthropic）、複数のアグエントタイプ（LLM、グラフ、ワークフロー）、MCP対応、内蔵テレメトリ。
- [Lumen](https://github.com/holoviz/lumen) - データとのチャットを可能にするアグエントフレームワーク。自然言語をSQLに変換し、変換パイプラインや可視化を実現。出力は宣言型仕様であり、検証・編集・ノートブックに再開・ダッシュボードに組み込むことが可能。

### Tools
- [Frostbyte MCP](https://github.com/OzorOwn/frostbyte-mcp) - AIアグエントが利用できる13のデータツールを提供するMCPサーバー：リアルタイムの暗号通貨価格、IPの地理位置、DNS検索、ウェブスクレイピング（マークダウンへ）、コード実行、スクリーンショット。1つのAPIキーで40以上のサービスにアクセス可能。
- [Arch Tools](https://archtools.dev) - データサイエンスワークフロー向けの61のプロダクション用AI APIツール：コード分析、ウェブスクレイピング、NLP、画像生成、暗号資産データ、検索。REST APIおよびMCPプロトコル対応。[GitHub](https://github.com/Deesmo/Arch-AI-Tools)
- [Not Human Search](https://nothumansearch.ai) - AIアグエントが利用できる9,000以上のAIツールとAPIをインデックスする検索エンジン。各ツールのアグエント対応度を評価（llms.txt、OpenAPI、MCP、ai-plugin.json）。プログラムによるツール発見用のREST APIおよびMCPサーバー。[GitHub](https://github.com/unitedideas/nothumansearch)
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - LightGBM + XGBoostのアンサンブルモデルを用いたAI暗号取引フレームワーク。72のML特徴量を活用し、外サンプルデータでの検証精度は70.9％。BybitおよびBinanceに対応。MITライセンス、[PyPI](https://pypi.org/project/deepalpha-bot/)で利用可能。
- [CAJAL](https://github.com/Agnuxo1/CAJAL) - 実際のarXiv引用を含む、出版用の科学論文を生成するローカルAIアグエント。IMRaD構造と審査スコアを提供。Ollamaで完全にオフラインで動作し、4B～9Bモデルを用いる。MITライセンス。[HuggingFace](https://huggingface.co/Agnuxo/CAJAL-9B-P2PCLAW)
- [ai-evaluation](https://github.com/future-agi/ai-evaluation) - 50以上のメトリクスを備えたオープンソースLLMおよびアグエント評価フレームワーク。LLM-as-Judgeの拡張とガードレールスキャナ（ジャイルブレイク、PII、プロンプトインジェクション）。データサイエンスワークフローにおけるRAG出力、アグエントの行動、関数呼び出しの評価に有効。

### Research & Knowledge Retrieval
- [BGPT MCP](https://bgpt.pro/mcp) - AIアグエントが、全文研究から抽出された原始実験データをもとに構築された科学論文データベースにアクセスできるMCPサーバー。各論文に対して25以上の構造化フィールドを返す（方法、結果、サンプルサイズ、品質スコアなど）。[GitHub](https://github.com/connerlambden/bgpt-mcp)
- [Chunk Tuner](https://github.com/shantanu-deshmukh/chunktuner) - RAGにおけるドキュメントチャンク戦略のベンチマーク、リトリーブ品質の評価、コーパスの設定を推奨するためのオープンソースPythonライブラリおよびMCPサーバー。
- [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - arXiv、PubMed/PMC、および対応する米国政策データベースを対象とした、決定論的なリトリーブを実現する毎日のスキルとCLI。
- [Spraay x402 Gateway](https://docs.spraay.app/#cat-research) - x402支払いゲートウェイ。AIアグエント向け23の研究・参考端末：ウィキペディア、arXiv、PubMed、Wikidata、学術引用検索、エンティティ抽出など。BaseおよびSolana上でUSDCでコールごとに支払い。APIキーまたはサブスクリプション不要。さらに、地図、AI推論、DeFi、計算など39カテゴリの150以上の端末を提供。[GitHub](https://github.com/plagtech)

- [Suppr](https://suppr.wilddata.cn/) - 研究者向けのAI文献検索、ドキュメント翻訳、深層研究ワークスペース。

### Workflow
**[`^        back to top        ^`](#awesome-data-science)**
- [sim](https://sim.ai) - Sim Studioのインターフェースは、好きなツールと連携するLLMを迅速に構築・デプロイできる軽量かつ直感的なインターフェース。


## Training Resources
**[`^        back to top        ^`](#awesome-data-science)**

データサイエンスをどう学ぶか？データサイエンスを実際にやることで、もちろん！まあ、最初の段階ではそれだけではあまり役立たないかもしれません。このセクションでは、学習リソースを、やや順番に、最小のコミットメントから最大のコミットメントまで、 [Tutorials](#tutorials)、 [Massively Open Online Courses (MOOCs)](#moocs)、 [Intensive Programs](#intensive-programs)、および [Colleges](#colleges) とリストアップしています。


### Tutorials
**[`^        back to top        ^`](#awesome-data-science)**

- [1000 Data Science Projects](https://cloud.blobcity.com/#/ps/explore) ブラウザ上でIPythonで実行可能。
- [#tidytuesday](https://github.com/rfordatascience/tidytuesday) - Rエコシステム向けの週次データプロジェクト。
- [Data science your way](https://github.com/jadianes/data-science-your-way)
- [DataCamp Cheatsheets](https://www.datacamp.com/cheat-sheet) データサイエンスのためのチェックシート。
- [PySpark Cheatsheet](https://github.com/kevinschaich/pyspark-cheatsheet)
- [Machine Learning, Data Science and Deep Learning with Python ](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python)
- [TutorialSearch](https://tutorialsearch.io/) - Udemy、Skillshare、Pluralsingなど、主要な学習プラットフォームの45以上のカテゴリにわたる5万件以上のチュートリアルを無料でクロスプラットフォーム検索エンジンでインデックス
- [Your Guide to Latent Dirichlet Allocation](https://medium.com/@lettier/how-does-lda-work-ill-explain-using-emoji-108abf40fa7d)
- [Tutorials of source code from the book Genetic Algorithms with Python by Clinton Sheppard](https://github.com/handcraftsman/GeneticAlgorithmsWithPython)
- [Tutorials to get started on signal processing for machine learning](https://github.com/jinglescode/python-signal-processing)
- [Realtime deployment](https://www.microprediction.com/python-1) Pythonの時系列モデルのデプロイに関するチュートリアル。
- [Python for Data Science: A Beginner’s Guide](https://learntocodewith.me/posts/python-for-data-science/)
- [Minimum Viable Study Plan for Machine Learning Interviews](https://github.com/khangich/machine-learning-interview)
- [Understand and Know Machine Learning Engineering by Building Solid Projects](https://mlzoomcamp.com/)
- [12 free Data Science projects to practice Python and Pandas](https://www.datawars.io/articles/12-free-data-science-projects-to-practice-python-and-pandas)
- [Best CV/Resume for Data Science Freshers](https://enhancv.com/resume-examples/data-scientist/)
- [Understand Data Science Course in Java](https://www.alter-solutions.com/articles/java-data-science)
- [Data Analytics Interview Questions (Beginner to Advanced)](https://www.appliedaicourse.com/blog/data-analytics-interview-questions/)
- [Top 100+ Data Science Interview Questions and Answers](https://www.appliedaicourse.com/blog/data-science-interview-questions/)
- [DataDriven - SQL, Python, and Data Modeling Interview Questions](https://www.datadriven.io/)
- [StepByStepML](https://www.stepbystepml.com) - 機械学習アルゴリズムの手順を可視化するインタラクティブ計算機。試験準備に活用。
- [How to Build Optimal AI Agents That Actually Work](https://www.freecodecamp.org/news/how-to-build-optimal-ai-agents-that-actually-work-a-handbook-for-devs/) - 効果的なAIアグエントの設計と構築に関する開発者ハンドブック。
- [Train LLM From Scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) - ダウンロードからテキスト生成まで、LLMを訓練するためのシンプルな方法

### Free Courses
**[`^        back to top        ^`](#awesome-data-science)**

- [Data Science](https://github.com/ossu/data-science) - オープンソース社会大学
- [Data Scientist with R](https://www.datacamp.com/tracks/data-scientist-with-r)
- [Data Scientist with Python](https://www.datacamp.com/tracks/data-scientist-with-python)
- [Genetic Algorithms OCW Course](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-1-introduction-and-scope/)
- [AI Expert Roadmap](https://github.com/AMAI-GmbH/AI-Expert-Roadmap) - 人工知能専門家になるための道筋
- [Convex Optimization](https://www.edx.org/course/convex-optimization) - 凸最適化（凸解析の基礎；最小二乗法、線形および二次計画問題、半正定値計画問題、ミニマックス、極端な体積など、その他問題；最適性条件、双対理論など）
- [Learning from Data](https://home.work.caltech.edu/telecourse.html) - 機械学習の基礎理論、アルゴリズムおよび応用についての紹介
- [Kaggle](https://www.kaggle.com/learn) - データサイエンス、機械学習、Pythonなどについて学ぶ
- [ML Observability Fundamentals](https://arize.com/ml-observability-fundamentals/) - 生産環境におけるML問題の監視および原因究明方法を学ぶ
- [Weights & Biases Effective MLOps: Model Development](https://www.wandb.courses/courses/effective-mlops-model-development) - W&Bを用いてエンドツーエンドな機械を構築するための無料コースと認定
- [Python for Data Science by Scaler](https://www.scaler.com/topics/course/python-for-data-science/) - 本コースは、データ駆動型世界で優れたスキルを身につけるために初心者を支援するように設計されています。包括的なカリキュラムにより、統計学、プログラミング、データ可視化、機械学習の基礎をしっかり学ぶことができます。
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - NYU Tandonにおける2022年の金融機械学習コースのスライド、スクリプト、資料。
- [Hands-on Train and Deploy ML](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - サーバレスAPIを訓練・デプロイするための実践的なコース。暗号通貨価格を予測する。
- [LLMOps: Building Real-World Applications With Large Language Models](https://www.comet.com/site/llm-course/) - 最新のツールと技術を用いて、LLMを用いた現代的なソフトウェア開発を学ぶ。
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - 自然言語で、ポイント、境界ボックス、セグメンテーションマスク、さらには他の画像まで、最先端のコンピュータビジョンモデルにプロンプトを送る方法を学ぶ。DeepLearning.AIの無料コース。
- [Data Science Course By IBM](https://skillsbuild.org/students/course-catalog/data-science) - データサイエンスの基礎とその業界での応用についての無料リソースを提供。
- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) - アンデル・カーパティの無料動画シリーズ。ゼロからニューラルネットワークを学ぶ——バックプロパゲーション、makemore、GPTなど。



### MOOC's
**[`^        back to top        ^`](#awesome-data-science)**

- [Coursera Introduction to Data Science](https://www.coursera.org/specializations/data-science)
- [Data Science - 9 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/jhu-data-science)
- [Data Mining - 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/data-mining)
- [Machine Learning – 5 Steps Courses, A Specialization on Coursera](https://www.coursera.org/specializations/machine-learning)
- [CS 109 Data Science](https://cs109.github.io/2015/)
- [OpenIntro](https://www.openintro.org/)
- [CS 171 Visualization](https://www.cs171.org/#!index.md)
- [Process Mining: Data science in Action](https://www.coursera.org/learn/process-mining)
- [Oxford Deep Learning](https://www.cs.ox.ac.uk/projects/DeepLearn/)
- [Oxford Deep Learning - video](https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
- [Oxford Machine Learning](https://www.cs.ox.ac.uk/research/ai_ml/index.html)
- [UBC Machine Learning - video](https://www.cs.ubc.ca/~nando/540-2013/lectures.html)
- [Data Science Specialization](https://github.com/DataScienceSpecialization/courses)
- [Coursera Big Data Specialization](https://www.coursera.org/specializations/big-data)
- [Statistical Thinking for Data Science and Analytics by Edx](https://www.edx.org/course/statistical-thinking-for-data-science-and-analytic)
- [Cognitive Class AI by IBM](https://cognitiveclass.ai/)
- [Udacity - Deep Learning](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [Keras in Motion](https://www.manning.com/livevideo/keras-in-motion)
- [Microsoft Professional Program for Data Science](https://academy.microsoft.com/en-us/professional-program/tracks/data-science/)
- [COMP3222/COMP6246 - Machine Learning Technologies](https://tdgunes.com/COMP6246-2019Fall/)
- [CS 231 - Convolutional Neural Networks for Visual Recognition](https://cs231n.github.io/)
- [Coursera Tensorflow in practice](https://www.coursera.org/professional-certificates/tensorflow-in-practice)
- [Coursera Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- [365 Data Science Course](https://365datascience.com/)
- [Coursera Natural Language Processing Specialization](https://www.coursera.org/specializations/natural-language-processing)
- [Coursera GAN Specialization](https://www.coursera.org/specializations/generative-adversarial-networks-gans)
- [Codecademy's Data Science](https://www.codecademy.com/learn/paths/data-science)
- [Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) - ギルバート・ストラングによる線形代数コース
- [A 2020 Vision of Linear Algebra (G. Strang)](https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/)
- [Python for Data Science Foundation Course](https://intellipaat.com/academy/course/python-for-data-science-free-training/)
- [Data Science: Statistics & Machine Learning](https://www.coursera.org/specializations/data-science-statistics-machine-learning)
- [Machine Learning Engineering for Production (MLOps)](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
- [Recommender Systems Specialization from University of Minnesota](https://www.coursera.org/specializations/recommender-systems) コースは、カーラーサイトプラットフォーム上で、推薦システムに焦点を当てた中級〜上級レベルの専門コース。
- [Stanford Artificial Intelligence Professional Program](https://online.stanford.edu/programs/artificial-intelligence-professional-program)
- [Data Scientist with Python](https://app.datacamp.com/learn/career-tracks/data-scientist-with-python)
- [Programming with Julia](https://www.udemy.com/course/programming-with-julia/)
- [Scaler Data Science & Machine Learning Program](https://www.scaler.com/data-science-course/)
- [Data Science Skill Tree](https://labex.io/skilltrees/data-science)
- [Data Science for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/data-science-368dbf)
- [Machine Learning for Beginners - Learn with AI tutor](https://codekidz.ai/lesson-intro/machine-lear-36abfb)
- [Introduction to Data Science](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-data-science)
-[Getting Started with Python for Data Science](https://www.codecademy.com/learn/getting-started-with-python-for-data-science)
- [Google Advanced Data Analytics Certificate](https://grow.google/data-analytics/) – データ分析、統計学、機械学習の基礎に関するプロフェッショナルコース。
- [Maschinelle Sprachgebrauchsanalyse - Grundlagen der Korpuslinguistik](https://www.twillo.de/edu-sharing/components/collections?id=e6ce03ae-4660-49b0-be10-dcc92e71e796) - テキストマイニング／コルパ・リングワイズの講義資料（ドイツ語）——北リヒェン・ウェストファーレの連邦州が支援。
- [Programmieren für Germanist*innen](https://www.twillo.de/edu-sharing/components/collections?id=16bac749-f10e-483f-9020-5d6365b4e092) - プログラミング（ドイツ語）——デジタル人文科学向けの講義資料——北リヒェン・ウェストファーレの連邦州が支援。

### Intensive Programs
**[`^        back to top        ^`](#awesome-data-science)**

- [S2DS](https://www.s2ds.org/)
- [WorldQuant University Applied Data Science Lab](https://www.wqu.edu/adsl)


### Colleges
**[`^        back to top        ^`](#awesome-data-science)**

- [A list of colleges and universities offering degrees in data science.](https://github.com/ryanswanstrom/awesome-datascience-colleges)
- [Data Science Degree @ Berkeley](https://ischoolonline.berkeley.edu/data-science/)
- [Data Science Degree @ UVA](https://datascience.virginia.edu/)
- [Data Science Degree @ Wisconsin](https://datasciencedegree.wisconsin.edu/)
- [BS in Data Science & Applications](https://study.iitm.ac.in/ds/)
- [MS in Computer Information Systems @ Boston University](https://www.bu.edu/online/programs/graduate-programs/computer-information-systems-masters-degree/)
- [MS in Business Analytics @ ASU Online](https://asuonline.asu.edu/online-degree-programs/graduate/master-science-business-analytics/)
- [MS in Applied Data Science @ Syracuse](https://ischool.syr.edu/academics/applied-data-science-masters-degree/)
- [M.S. Management & Data Science @ Leuphana](https://www.leuphana.de/en/graduate-school/masters-programmes/management-data-science.html)
- [Master of Data Science @ Melbourne University](https://study.unimelb.edu.au/find/courses/graduate/master-of-data-science/#overview)
- [Msc in Data Science @ The University of Edinburgh](https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&id=902)
- [Master of Management Analytics @ Queen's University](https://smith.queensu.ca/grad_studies/mma/index.php)
- [Master of Data Science @ Illinois Institute of Technology](https://www.iit.edu/academics/programs/data-science-mas)
- [Master of Applied Data Science @ The University of Michigan](https://www.si.umich.edu/programs/master-applied-data-science)
- [Master Data Science and Artificial Intelligence @ Eindhoven University of Technology](https://www.tue.nl/en/education/graduate-school/master-data-science-and-artificial-intelligence/)
- [Master's Degree in Data Science and Computer Engineering @ University of Granada](https://masteres.ugr.es/datcom/)

## The Data Science Toolbox
**[`^        back to top        ^`](#awesome-data-science)**

このセクションは、データサイエンス世界におけるパッケージ、ツール、アルゴリズム、およびその他の有用なアイテムのコレクションです。

### Algorithms
**[`^        back to top        ^`](#awesome-data-science)**

これらは、データを理解し、その中から意味を導くために使える機械学習およびデータマイニングのアルゴリズムとモデルです。

#### Three kinds of Machine Learning Systems

- Based on training with human supervision
- Based on learning incrementally on fly
- Based on data points comparison and pattern detection

### Comparison
- [datacompy](https://github.com/capitalone/datacompy) - DataComPyは、2つのPandasのデータフレームを比較するためのパッケージ。

#### Supervised Learning

- [Regression](https://en.wikipedia.org/wiki/Regression)
- [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression)
- [Ordinary Least Squares](https://en.wikipedia.org/wiki/Ordinary_least_squares)
- [Logistic Regression](https://en.wikipedia.org/wiki/Logistic_regression)
- [Stepwise Regression](https://en.wikipedia.org/wiki/Stepwise_regression)
- [Multivariate Adaptive Regression Splines](https://en.wikipedia.org/wiki/Multivariate_adaptive_regression_spline)
- [Softmax Regression](https://d2l.ai/chapter_linear-classification/softmax-regression.html)
- [Locally Estimated Scatterplot Smoothing](https://en.wikipedia.org/wiki/Local_regression)
- Classification
  - [k-nearest neighbor](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
  - [Support Vector Machines](https://en.wikipedia.org/wiki/Support_vector_machine)
  - [Decision Trees](https://en.wikipedia.org/wiki/Decision_tree)
  - [ID3 algorithm](https://en.wikipedia.org/wiki/ID3_algorithm)
  - [C4.5 algorithm](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [Ensemble Learning](https://scikit-learn.org/stable/modules/ensemble.html)
  - [Boosting](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
  - [Stacking](https://machinelearningmastery.com/stacking-ensemble-machine-learning-with-python)
  - [Bagging](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
  - [Random Forest](https://en.wikipedia.org/wiki/Random_forest)
  - [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)

#### Unsupervised Learning
- [Clustering](https://scikit-learn.org/stable/modules/clustering.html#clustering)
  - [Hierchical clustering](https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering)
  - [k-means](https://scikit-learn.org/stable/modules/clustering.html#k-means)
  - [Density-based clustering](https://scikit-learn.org/stable/modules/clustering.html#dbscan)
  - [Fuzzy clustering](https://en.wikipedia.org/wiki/Fuzzy_clustering)
  - [Mixture models](https://en.wikipedia.org/wiki/Mixture_model)
- [Dimension Reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction)
  - [Principal Component Analysis (PCA)](https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca)
  - [t-SNE; t-distributed Stochastic Neighbor Embedding](https://scikit-learn.org/stable/modules/manifold.html#t-distributed-stochastic-neighbor-embedding-tsne)
  - [Factor Analysis](https://scikit-learn.org/stable/modules/decomposition.html#factor-analysis)
  - [Latent Dirichlet Allocation (LDA)](https://scikit-learn.org/stable/modules/decomposition.html#latent-dirichlet-allocation-lda)
- [Neural Networks](https://en.wikipedia.org/wiki/Neural_network)
- [Self-organizing map](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Adaptive resonance theory](https://en.wikipedia.org/wiki/Adaptive_resonance_theory)
- [Hidden Markov Models (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

#### Semi-Supervised Learning

- S3VM
- [Clustering](https://en.wikipedia.org/wiki/Weak_supervision#Cluster_assumption)
- [Generative models](https://en.wikipedia.org/wiki/Weak_supervision#Generative_models)
- [Low-density separation](https://en.wikipedia.org/wiki/Weak_supervision#Low-density_separation)
- [Laplacian regularization](https://en.wikipedia.org/wiki/Weak_supervision#Laplacian_regularization)
- [Heuristic approaches](https://en.wikipedia.org/wiki/Weak_supervision#Heuristic_approaches)

#### Reinforcement Learning

- [Q Learning](https://en.wikipedia.org/wiki/Q-learning)
- [SARSA (State-Action-Reward-State-Action) algorithm](https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action)
- [Temporal difference learning](https://en.wikipedia.org/wiki/Temporal_difference_learning#:~:text=Temporal%20difference%20(TD)%20learning%20refers,estimate%20of%20the%20value%20function.)

#### Data Mining Algorithms

- [C4.5](https://en.wikipedia.org/wiki/C4.5_algorithm)
- [k-Means](https://en.wikipedia.org/wiki/K-means_clustering)
- [SVM (Support Vector Machine)](https://en.wikipedia.org/wiki/Support_vector_machine)
- [Apriori](https://en.wikipedia.org/wiki/Apriori_algorithm)
- [EM (Expectation-Maximization)](https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm)
- [PageRank](https://en.wikipedia.org/wiki/PageRank)
- [AdaBoost](https://en.wikipedia.org/wiki/AdaBoost)
- [KNN (K-Nearest Neighbors)](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
- [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [CART (Classification and Regression Trees)](https://en.wikipedia.org/wiki/Decision_tree_learning)
#### Modern Data Mining Algorithms

- [XGBoost (Extreme Gradient Boosting)](https://en.wikipedia.org/wiki/XGBoost)
- [LightGBM (Light Gradient Boosting Machine)](https://en.wikipedia.org/wiki/LightGBM)
- [CatBoost](https://catboost.ai/)
- [HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise)](https://en.wikipedia.org/wiki/DBSCAN#HDBSCAN)
- [FP-Growth (Frequent Pattern Growth Algorithm)](https://en.wikipedia.org/wiki/Association_rule_learning#FP-growth_algorithm)
- [Isolation Forest](https://en.wikipedia.org/wiki/Isolation_forest)
- [Deep Embedded Clustering (DEC)](https://arxiv.org/abs/1511.06335)
- [TPU (Top-k Periodic and High-Utility Patterns)](https://arxiv.org/abs/2509.15732)
- [Context-Aware Rule Mining (Transformer-Based Framework)](https://arxiv.org/abs/2503.11125)


#### Deep Learning architectures

- [Multilayer Perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron)
- [Convolutional Neural Network (CNN)](https://en.wikipedia.org/wiki/Convolutional_neural_network)
- [Recurrent Neural Network (RNN)](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- [Boltzmann Machines](https://en.wikipedia.org/wiki/Boltzmann_machine)
- [Autoencoder](https://www.tensorflow.org/tutorials/generative/autoencoder)
- [Generative Adversarial Network (GAN)](https://developers.google.com/machine-learning/gan/gan_structure)
- [Self-Organized Maps](https://en.wikipedia.org/wiki/Self-organizing_map)
- [Transformer](https://www.tensorflow.org/text/tutorials/transformer)
- [Conditional Random Field (CRF)](https://towardsdatascience.com/conditional-random-fields-explained-e5b8256da776)
- [ML System Designs)](https://www.evidentlyai.com/ml-system-design)

### General Machine Learning Packages
**[`^        back to top        ^`](#awesome-data-science)**

* [scikit-learn](https://scikit-learn.org/)
* [scikit-multilearn](https://github.com/scikit-multilearn/scikit-multilearn)
* [sklearn-expertsys](https://github.com/tmadl/sklearn-expertsys)
* [scikit-feature](https://github.com/jundongl/scikit-feature)
* [scikit-rebate](https://github.com/EpistasisLab/scikit-rebate)
* [seqlearn](https://github.com/larsmans/seqlearn)
* [sklearn-bayes](https://github.com/AmazaspShumik/sklearn-bayes)
* [sklearn-crfsuite](https://github.com/TeamHG-Memex/sklearn-crfsuite)
* [sklearn-deap](https://github.com/rsteca/sklearn-deap)
* [sigopt_sklearn](https://github.com/sigopt/sigopt-sklearn)
* [sklearn-evaluation](https://github.com/edublancas/sklearn-evaluation)
* [scikit-image](https://github.com/scikit-image/scikit-image)
* [scikit-opt](https://github.com/guofei9987/scikit-opt)
* [scikit-posthocs](https://github.com/maximtrp/scikit-posthocs)
* [feature-engine](https://feature-engine.trainindata.com/)
* [pystruct](https://github.com/pystruct/pystruct)
* [Shogun](https://www.shogun-toolbox.org/)
* [xLearn](https://github.com/aksnzhy/xlearn)
* [cuML](https://github.com/rapidsai/cuml)
* [causalml](https://github.com/uber/causalml)
* [mlpack](https://github.com/mlpack/mlpack)
* [MLxtend](https://github.com/rasbt/mlxtend)
* [modAL](https://github.com/modAL-python/modAL)
* [Sparkit-learn](https://github.com/lensacom/sparkit-learn)
* [hyperlearn](https://github.com/danielhanchen/hyperlearn)
* [dlib](https://github.com/davisking/dlib)
* [imodels](https://github.com/csinva/imodels)
* [jSciPy](https://github.com/hissain/jscipy) - スカイプの信号処理モジュールをJavaで再実装したもので、フィルター、変換、その他科学計算ツールを提供
* [RuleFit](https://github.com/christophM/rulefit)
* [pyGAM](https://github.com/dswah/pyGAM)
* [Deepchecks](https://github.com/deepchecks/deepchecks)
* [scikit-survival](https://scikit-survival.readthedocs.io/en/stable)
* [interpretable](https://pypi.org/project/interpretable)
* [XGBoost](https://github.com/dmlc/xgboost)
* [LightGBM](https://github.com/microsoft/LightGBM)
* [CatBoost](https://github.com/catboost/catboost)
* [PerpetualBooster](https://github.com/perpetual-ml/perpetual)
* [JAX](https://github.com/google/jax)



### Deep Learning Packages

#### PyTorch Ecosystem
* [PyTorch](https://github.com/pytorch/pytorch)
* [torchvision](https://github.com/pytorch/vision)
* [torchtext](https://github.com/pytorch/text)
* [torchaudio](https://github.com/pytorch/audio)
* [ignite](https://github.com/pytorch/ignite)
* [PyTorchNet](https://github.com/pytorch/tnt)
* [PyToune](https://github.com/GRAAL-Research/poutyne)
* [skorch](https://github.com/skorch-dev/skorch)
* [PyVarInf](https://github.com/ctallec/pyvarinf)
* [pytorch_geometric](https://github.com/pyg-team/pytorch_geometric)
* [GPyTorch](https://github.com/cornellius-gp/gpytorch)
* [pyro](https://github.com/pyro-ppl/pyro)
* [Catalyst](https://github.com/catalyst-team/catalyst)
* [pytorch_tabular](https://github.com/manujosephv/pytorch_tabular)
* [Yolov3](https://github.com/ultralytics/yolov3)
* [Yolov5](https://github.com/ultralytics/yolov5)
* [Yolov8](https://github.com/ultralytics/ultralytics)

#### TensorFlow Ecosystem
* [TensorFlow](https://github.com/tensorflow/tensorflow)
* [TensorLayer](https://github.com/tensorlayer/TensorLayer)
* [TFLearn](https://github.com/tflearn/tflearn)
* [Sonnet](https://github.com/deepmind/sonnet)
* [tensorpack](https://github.com/tensorpack/tensorpack)
* [TRFL](https://github.com/deepmind/trfl)
* [Polyaxon](https://github.com/polyaxon/polyaxon)
* [NeuPy](https://github.com/itdxer/neupy)
* [tfdeploy](https://github.com/riga/tfdeploy)
* [tensorflow-upstream](https://github.com/ROCmSoftwarePlatform/tensorflow-upstream)
* [TensorFlow Fold](https://github.com/tensorflow/fold)
* [tensorlm](https://github.com/batzner/tensorlm)
* [TensorLight](https://github.com/bsautermeister/tensorlight)
* [Mesh TensorFlow](https://github.com/tensorflow/mesh)
* [Ludwig](https://github.com/ludwig-ai/ludwig)
* [TF-Agents](https://github.com/tensorflow/agents)
* [TensorForce](https://github.com/tensorforce/tensorforce)

#### Keras Ecosystem

* [Keras](https://keras.io)
* [keras-contrib](https://github.com/keras-team/keras-contrib)
* [Hyperas](https://github.com/maxpumperla/hyperas)
* [Elephas](https://github.com/maxpumperla/elephas)
* [Hera](https://github.com/keplr-io/hera)
* [Spektral](https://github.com/danielegrattarola/spektral)
* [qkeras](https://github.com/google/qkeras)
* [keras-rl](https://github.com/keras-rl/keras-rl)
* [Talos](https://github.com/autonomio/talos)

#### Visualization Tools
**[`^        back to top        ^`](#awesome-data-science)**

- [altair](https://altair-viz.github.io/)
- [amcharts](https://www.amcharts.com/)
- [anychart](https://www.anychart.com/)
- [bokeh](https://bokeh.org/)
- [Comet](https://www.comet.com/site/products/ml-experiment-tracking/?utm_source=awesome-datascience)
- [slemma](https://slemma.com/)
- [cartodb](https://cartodb.github.io/odyssey.js/)
- [Cube](https://square.github.io/cube/)
- [d3plus](https://d3plus.org/)
- [Data-Driven Documents(D3js)](https://d3js.org/)
- [dygraphs](https://dygraphs.com/)
- [exhibit](https://www.simile-widgets.org/exhibit/)
- [gephi](https://gephi.org/)
- [ggplot2](https://ggplot2.tidyverse.org/)
- [Glue](https://docs.glueviz.org/en/latest/index.html)
- [Google Chart Gallery](https://developers.google.com/chart/interactive/docs/gallery)
- [Highcharts](https://www.highcharts.com/)
- [import.io](https://www.import.io/)
- [Matplotlib](https://matplotlib.org/)
- [nvd3](https://nvd3.org/)
- [Netron](https://github.com/lutzroeder/netron)
- [Openrefine](https://openrefine.org/)
- [plot.ly](https://plot.ly/)
- [raw](https://rawgraphs.io)
- [Resseract Lite](https://github.com/abistarun/resseract-lite)
- [Seaborn](https://seaborn.pydata.org/)
- [techanjs](https://techanjs.org/)
- [Timeline](https://timeline.knightlab.com/)
- [variancecharts](https://variancecharts.com/index.html)
- [vida](https://vida.io/)
- [vizzu](https://github.com/vizzuhq/vizzu-lib)
- [Wrangler](https://vis.stanford.edu/wrangler/)
- [r2d3](https://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
- [NetworkX](https://networkx.org/)
- [Redash](https://redash.io/)
- [Metabase](https://www.metabase.com/)
- [C3](https://c3js.org/)
- [TensorWatch](https://github.com/microsoft/tensorwatch)
- [geomap](https://pypi.org/project/geomap/)
- [Dash](https://plotly.com/dash/)
- [MetaReview](https://metareview-8c1.pages.dev/) - 無料オンラインのメタ分析プラットフォーム。11のインタラクティブD3.js統計チャート（フォレストプロット、ファンヌプロット、ギャブライト、L'Abbé、バウジャットなど）、5つの効果サイズ測定、AIによる文献検索、および出版用レポートのエクスポート。 [github.com](https://github.com/TerryFYL/metareview)
- [torchvista](https://github.com/sachinhosmani/torchvista) - PyTorchモデルの前向きパスを可視化するためのノートブックベースのインタラクティブツール

### Miscellaneous Tools
**[`^        back to top        ^`](#awesome-data-science)**

| Link | Description |
| --- | --- |
| [The Data Science Lifecycle Process](https://github.com/dslp/dslp) | The Data Science Lifecycle Process is a process for taking data science teams from Idea to Value repeatedly and sustainably. The process is documented in this repo  |
| [Data Science Lifecycle Template Repo](https://github.com/dslp/dslp-repo-template) | Template repository for data science lifecycle project  |
| [TabGAN](https://github.com/Diyago/Tabular-data-generation) | Synthetic tabular data generation using GANs, Diffusion Models, and LLMs with adversarial filtering and privacy metrics. |
| [RexMex](https://github.com/AstraZeneca/rexmex) | A general purpose recommender metrics library for fair evaluation.  |
| [ChemicalX](https://github.com/AstraZeneca/chemicalx) | A PyTorch based deep learning library for drug pair scoring.  |
| [FileShot.io](https://github.com/FileShot/FileShotZKE) | Secure zero-knowledge encrypted file sharing (AES-256-GCM in-browser). No account required, MIT licensed, self-hostable, optional link expiry. |
| [CorpusExplorer](https://corpusexplorer.de/) | Software for corpus linguists and text/data mining enthusiasts. Build your own corpora in over 60 languages. Use over 50 tools/visualizations.  |
| [PyTorch Geometric Temporal](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) | Representation learning on dynamic graphs.  |
| [Little Ball of Fur](https://github.com/benedekrozemberczki/littleballoffur) | A graph sampling library for NetworkX with a Scikit-Learn like API.  |
| [Karate Club](https://github.com/benedekrozemberczki/karateclub) | An unsupervised machine learning extension library for NetworkX with a Scikit-Learn like API. |
| [ML Workspace](https://github.com/ml-tooling/ml-workspace) | All-in-one web-based IDE for machine learning and data science. The workspace is deployed as a Docker container and is preloaded with a variety of popular data science libraries (e.g., Tensorflow, PyTorch) and dev tools (e.g., Jupyter, VS Code) |
| [xonsh shell](https://github.com/xonsh/xonsh) | A Python-powered shell that enables integration, management and orchestration of data science libraries mostly written in Python, allowing you to build pipelines, code and command-based workflows. It can also be used as a kernel for Jupyter Notebook.  |
| [Neptune.ai](https://neptune.ai) | Community-friendly platform supporting data scientists in creating and sharing machine learning models. Neptune facilitates teamwork, infrastructure management, models comparison and reproducibility. |
| [steppy](https://github.com/minerva-ml/steppy) | Lightweight, Python library for fast and reproducible machine learning experimentation. Introduces very simple interface that enables clean machine learning pipeline design. |
| [steppy-toolkit](https://github.com/minerva-ml/steppy-toolkit) | Curated collection of the neural networks, transformers and models that make your machine learning work faster and more effective. |
| [Datalab from Google](https://cloud.google.com/datalab/docs/) | easily explore, visualize, analyze, and transform data using familiar languages, such as Python and SQL, interactively. |
| [Hortonworks Sandbox](https://www.cloudera.com/downloads/hortonworks-sandbox.html) | is a personal, portable Hadoop environment that comes with a dozen interactive Hadoop tutorials. |
| [R](https://www.r-project.org/) | is a free software environment for statistical computing and graphics. |
| [Tidyverse](https://www.tidyverse.org/) | is an opinionated collection of R packages designed for data science. All packages share an underlying design philosophy, grammar, and data structures. |
| [RStudio](https://www.rstudio.com) | IDE – powerful user interface for R. It’s free and open source, and works on Windows, Mac, and Linux. |
| [Python - Pandas - Anaconda](https://www.anaconda.com) | Completely free enterprise-ready Python distribution for large-scale data processing, predictive analytics, and scientific computing |
| [Pandas GUI](https://github.com/adrotog/PandasGUI) | Pandas GUI |
| [NuriStat](https://github.com/baramgay/stat) | Free open-source SPSS alternative — menu-driven desktop statistics (t-tests, ANOVA, regression, survival analysis, ROC) with SPSS .sav import/export |
| [Polars](https://github.com/pola-rs/polars) | Fast DataFrame library for Rust and Python, designed as a faster alternative to Pandas |
| [CiteMe](https://citeme.app) | free academic citation generator with a built-in reference checker that flags fabricated or hallucinated references. Searches 11+ scholarly databases (OpenAlex, PubMed, Semantic Scholar, CrossRef, SciELO), formats 40+ citation styles, and offers a public API. No sign-up; available in English, Spanish, Portuguese, French, and German.|
| [Scikit-Learn](https://scikit-learn.org/stable/) | Machine Learning in Python |
| [NumPy](https://numpy.org/) | NumPy is fundamental for scientific computing with Python. It supports large, multi-dimensional arrays and matrices and includes an assortment of high-level mathematical functions to operate on these arrays. |
| [Vaex](https://vaex.io/) | Vaex is a Python library that allows you to visualize large datasets and calculate statistics at high speeds. |
| [SciPy](https://scipy.org/) | SciPy works with NumPy arrays and provides efficient routines for numerical integration and optimization. |
| [Data Science Toolbox](https://www.coursera.org/learn/data-scientists-tools) | Coursera Course |
| [Data Science Toolbox](https://datasciencetoolbox.org/) | Blog |
| [Wolfram Data Science Platform](https://www.wolfram.com/data-science-platform/) | Take numerical, textual, image, GIS or other data and give it the Wolfram treatment, carrying out a full spectrum of data science analysis and visualization and automatically generate rich interactive reports—all powered by the revolutionary knowledge-based Wolfram Language. |
| [Datadog](https://www.datadoghq.com/) | Solutions, code, and devops for high-scale data science. |
| [Variance](https://variancecharts.com/) | Build powerful data visualizations for the web without writing JavaScript |
| [Kite Development Kit](https://kitesdk.org/docs/current/index.html) | The Kite Software Development Kit (Apache License, Version 2.0), or Kite for short, is a set of libraries, tools, examples, and documentation focused on making it easier to build systems on top of the Hadoop ecosystem. |
| [Domino Data Labs](https://www.dominodatalab.com) | Run, scale, share, and deploy your models — without any infrastructure or setup. |
| [Apache Flink](https://flink.apache.org/) | A platform for efficient, distributed, general-purpose data processing. |
| [Apache Hama](https://hama.apache.org/) | Apache Hama is an Apache Top-Level open source project, allowing you to do advanced analytics beyond MapReduce. |
| [Weka](https://ml.cms.waikato.ac.nz/weka/index.html) | Weka is a collection of machine learning algorithms for data mining tasks. |
| [Octave](https://www.gnu.org/software/octave/) | GNU Octave is a high-level interpreted language, primarily intended for numerical computations.(Free Matlab) |
| [Apache Spark](https://spark.apache.org/) | Lightning-fast cluster computing |
| [Hydrosphere Mist](https://github.com/Hydrospheredata/mist) | a service for exposing Apache Spark analytics jobs and machine learning models as realtime, batch or reactive web services. |
| [Data Mechanics](https://www.datamechanics.co) | A data science and engineering platform making Apache Spark more developer-friendly and cost-effective. |
| [Caffe](https://caffe.berkeleyvision.org/) | Deep Learning Framework |
| [Torch](https://torch.ch/) | A SCIENTIFIC COMPUTING FRAMEWORK FOR LUAJIT |
| [Nervana's python based Deep Learning Framework](https://github.com/NervanaSystems/neon) | Intel® Nervana™ reference deep learning framework committed to best performance on all hardware. |
| [Skale](https://github.com/skale-me/skale) | High performance distributed data processing in NodeJS |
| [Aerosolve](https://airbnb.io/aerosolve/) | A machine learning package built for humans. |
| [Intel framework](https://github.com/intel/idlf) | Intel® Deep Learning Framework |
| [Datawrapper](https://www.datawrapper.de/) | An open source data visualization platform helping everyone to create simple, correct and embeddable charts. Also at [github.com](https://github.com/datawrapper/datawrapper) |
| [Tensor Flow](https://www.tensorflow.org/) | TensorFlow is an Open Source Software Library for Machine Intelligence |
| [Natural Language Toolkit](https://www.nltk.org/) | An introductory yet powerful toolkit for natural language processing and classification |
| [FunASR](https://github.com/modelscope/FunASR) | Industrial-grade speech recognition toolkit supporting 50+ languages with built-in VAD, punctuation, speaker diarization, and emotion detection. OpenAI-compatible API server included. |
| [Annotation Lab](https://www.johnsnowlabs.com/annotation-lab/) | Free End-to-End No-Code platform for text annotation and DL model training/tuning. Out-of-the-box support for Named Entity Recognition, Classification, Relation extraction and Assertion Status Spark NLP models. Unlimited support for users, teams, projects, documents. |
| [nlp-toolkit for node.js](https://www.npmjs.com/package/nlp-toolkit) | This module covers some basic nlp principles and implementations. The main focus is performance. When we deal with sample or training data in nlp, we quickly run out of memory. Therefore every implementation in this module is written as stream to only hold that data in memory that is currently processed at any step. |
| [Julia](https://julialang.org) | high-level, high-performance dynamic programming language for technical computing |
| [IJulia](https://github.com/JuliaLang/IJulia.jl) | a Julia-language backend combined with the Jupyter interactive environment |
| [Apache Zeppelin](https://zeppelin.apache.org/) | Web-based notebook that enables data-driven, interactive data analytics and collaborative documents with SQL, Scala and more  |
| [Featuretools](https://github.com/alteryx/featuretools) | An open source framework for automated feature engineering written in python |
| [Optimus](https://github.com/hi-primus/optimus) | Cleansing, pre-processing, feature engineering, exploratory data analysis and easy ML with PySpark backend.  |
| [Albumentations](https://github.com/albumentations-team/albumentations) | А fast and framework agnostic image augmentation library that implements a diverse set of augmentation techniques. Supports classification, segmentation, and detection out of the box. Was used to win a number of Deep Learning competitions at Kaggle, Topcoder and those that were a part of the CVPR workshops. |
| [DVC](https://github.com/iterative/dvc) | An open-source data science version control system. It helps track, organize and make data science projects reproducible. In its very basic scenario it helps version control and share large data and model files. |
| [Lambdo](https://github.com/asavinov/lambdo) | is a workflow engine that significantly simplifies data analysis by combining in one analysis pipeline (i) feature engineering and machine learning (ii) model training and prediction (iii) table population and column evaluation. |
| [Feast](https://github.com/feast-dev/feast) | A feature store for the management, discovery, and access of machine learning features. Feast provides a consistent view of feature data for both model training and model serving. |
| [Polyaxon](https://github.com/polyaxon/polyaxon) | A platform for reproducible and scalable machine learning and deep learning. |
| [UBIAI](https://ubiai.tools) | Easy-to-use text annotation tool for teams with most comprehensive auto-annotation features. Supports NER, relations and document classification as well as OCR annotation for invoice labeling |
| [Trains](https://github.com/allegroai/clearml) | Auto-Magical Experiment Manager, Version Control & DevOps for AI |
| [Hopsworks](https://github.com/logicalclocks/hopsworks) | Open-source data-intensive machine learning platform with a feature store. Ingest and manage features for both online (MySQL Cluster)  and offline (Apache Hive) access, train and serve models at scale. |
| [MindsDB](https://github.com/mindsdb/mindsdb) | MindsDB is an Explainable AutoML framework for developers. With MindsDB you can build, train and use state of the art ML models in as simple as one line of code. |
| [Lightwood](https://github.com/mindsdb/lightwood) | A Pytorch based framework that breaks down machine learning problems into smaller blocks that can be glued together seamlessly with an objective to build predictive models with one line of code. |
| [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) | An open-source Python package that extends the power of Pandas library to AWS connecting DataFrames and AWS data related services (Amazon Redshift, AWS Glue, Amazon Athena, Amazon EMR, etc). |
| [Amazon Rekognition](https://aws.amazon.com/rekognition/) | AWS Rekognition is a service that lets developers working with Amazon Web Services add image analysis to their applications. Catalog assets, automate workflows, and extract meaning from your media and applications.|
| [Amazon Textract](https://aws.amazon.com/textract/) | Automatically extract printed text, handwriting, and data from any document. |
| [Amazon Lookout for Vision](https://aws.amazon.com/lookout-for-vision/) | Spot product defects using computer vision to automate quality inspection. Identify missing product components, vehicle and structure damage, and irregularities for comprehensive quality control.|
| [Amazon CodeGuru](https://aws.amazon.com/codeguru/) | Automate code reviews and optimize application performance with ML-powered recommendations.|
| [CML](https://github.com/iterative/cml) | An open source toolkit for using continuous integration in data science projects. Automatically train and test models in production-like environments with GitHub Actions & GitLab CI, and autogenerate visual reports on pull/merge requests. |
| [Dask](https://dask.org/) | An open source Python library to painlessly transition your analytics code to distributed computing systems (Big Data) |
| [DuckDB](https://github.com/duckdb/duckdb) | An in-process SQL OLAP database management system |
| [Statsmodels](https://www.statsmodels.org/stable/index.html) | A Python-based inferential statistics, hypothesis testing and regression framework |
| [Gensim](https://radimrehurek.com/gensim/) | An open-source library for topic modeling of natural language text |
| [spaCy](https://spacy.io/) | A performant natural language processing toolkit |
| [Grid Studio](https://github.com/ricklamers/gridstudio) | Grid studio is a web-based spreadsheet application with full integration of the Python programming language. |
|[Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook)|Python Data Science Handbook: full text in Jupyter Notebooks|
| [Shapley](https://github.com/benedekrozemberczki/shapley) | A data-driven framework to quantify the value of classifiers in a machine learning ensemble.  |
| [DAGsHub](https://dagshub.com) | A platform built on open source tools for data, model and pipeline management.  |
| [Deepnote](https://deepnote.com) | A new kind of data science notebook. Jupyter-compatible, with real-time collaboration and running in the cloud. |
| [Valohai](https://valohai.com) | An MLOps platform that handles machine orchestration, automatic reproducibility and deployment. |
| [PyMC3](https://docs.pymc.io/) | A Python Library for Probabalistic Programming (Bayesian Inference and Machine Learning) |
| [PyStan](https://pypi.org/project/pystan/) | Python interface to Stan (Bayesian inference and modeling) |
| [hmmlearn](https://pypi.org/project/hmmlearn/) | Unsupervised learning and inference of Hidden Markov Models |
| [Chaos Genius](https://github.com/chaos-genius/chaos_genius/) | ML powered analytics engine for outlier/anomaly detection and root cause analysis |
| [Nimblebox](https://nimblebox.ai/) | A full-stack MLOps platform designed to help data scientists and machine learning practitioners around the world discover, create, and launch multi-cloud apps from their web browser. |
| [Towhee](https://github.com/towhee-io/towhee) | A Python library that helps you encode your unstructured data into embeddings. |
| [LineaPy](https://github.com/LineaLabs/lineapy) | Ever been frustrated with cleaning up long, messy Jupyter notebooks? With LineaPy, an open source Python library, it takes as little as two lines of code to transform messy development code into production pipelines. |
| [envd](https://github.com/tensorchord/envd) | 🏕️ machine learning development environment for data science and AI/ML engineering teams |
| [Explore Data Science Libraries](https://kandi.openweaver.com/explore/data-science) | A search engine 🔎 tool to discover & find a curated list of popular & new libraries, top authors, trending project kits, discussions, tutorials & learning resources |
| [MLEM](https://github.com/iterative/mlem) | 🐶 Version and deploy your ML models following GitOps principles |
| [MLflow](https://mlflow.org/) | MLOps framework for managing ML models across their full lifecycle |
| [cleanlab](https://github.com/cleanlab/cleanlab) | Python library for data-centric AI and automatically detecting various issues in ML datasets |
| [AutoGluon](https://github.com/awslabs/autogluon) | AutoML to easily produce accurate predictions for image, text, tabular, time-series, and multi-modal data |
| [Arize AI](https://arize.com/) | Arize AI community tier observability tool for monitoring machine learning models in production and root-causing issues such as data quality and performance drift. |
| [Aureo.io](https://aureo.io) | Aureo.io is a low-code platform that focuses on building artificial intelligence. It provides users with the capability to create pipelines, automations and integrate them with artificial intelligence models – all with their basic data. |
| [ERD Lab](https://www.erdlab.io/) | Free cloud based entity relationship diagram (ERD) tool made for developers.
| [Arize-Phoenix](https://docs.arize.com/phoenix) | MLOps in a notebook - uncover insights, surface problems, monitor, and fine tune your models. |
| [Comet](https://github.com/comet-ml/comet-examples) | An MLOps platform with experiment tracking, model production management, a model registry, and full data lineage to support your ML workflow from training straight through to production. |
| [Opik](https://github.com/comet-ml/opik) | Evaluate, test, and ship LLM applications across your dev and production lifecycles. |
| [Synthical](https://synthical.com) | AI-powered collaborative environment for research. Find relevant papers, create collections to manage bibliography, and summarize content — all in one place |
| [teeplot](https://github.com/mmore500/teeplot) | Workflow tool to automatically organize data visualization output |
| [Streamlit](https://github.com/streamlit/streamlit) | App framework for Machine Learning and Data Science projects |
| [Gradio](https://github.com/gradio-app/gradio) | Create customizable UI components around machine learning models |
| [Weights & Biases](https://github.com/wandb/wandb) | Experiment tracking, dataset versioning, and model management |
| [DVC](https://github.com/iterative/dvc) | Open-source version control system for machine learning projects |
| [Optuna](https://github.com/optuna/optuna) | Automatic hyperparameter optimization software framework |
| [Ray Tune](https://github.com/ray-project/ray) | Scalable hyperparameter tuning library |
| [Apache Airflow](https://github.com/apache/airflow) | Platform to programmatically author, schedule, and monitor workflows |
| [Prefect](https://github.com/PrefectHQ/prefect) | Workflow management system for modern data stacks |
| [Kedro](https://github.com/kedro-org/kedro) | Open-source Python framework for creating reproducible, maintainable data science code |
| [Hamilton](https://github.com/dagworks-inc/hamilton) | Lightweight library to author and manage reliable data transformations |
| [SHAP](https://github.com/slundberg/shap) | Game theoretic approach to explain the output of any machine learning model |
| [InterpretML](https://github.com/interpretml/interpret) | InterpretML implements the Explainable Boosting Machine (EBM), a modern, fully interpretable machine learning model based on Generalized Additive Models (GAMs). This open-source package also provides visualization tools for EBMs, other glass-box models, and black-box explanations |
| [LIME](https://github.com/marcotcr/lime) | Explaining the predictions of any machine learning classifier |
| [flyte](https://github.com/flyteorg/flyte) | Workflow automation platform for machine learning |
| [dbt](https://github.com/dbt-labs/dbt-core) | Data build tool |
| [zasper](https://github.com/zasper-io/zasper) | Supercharged IDE for Data Science |
| [skrub](https://github.com/skrub-data/skrub/) | A Python library to ease preprocessing and feature engineering for tabular machine learning |
| [Codeflash](https://www.codeflash.ai/) | Ship Blazing-Fast Python Code — Every Time |
| [Hugging Face](https://huggingface.co/) | Popular open platform for sharing ML models, datasets, and collaborating on NLP and generative AI projects. |
| [Chinese-Elite](https://github.com/anonym-g/Chinese-Elite) | An open-source project that automatically maps relationship networks by parsing public data using LLMs and visualizes it as an interactive graph. |
| [Desbordante](https://github.com/desbordante/desbordante-core/) | An open-source data profiler specifically focused on discovery and validation of complex patterns, such as [numerical association rules](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Numerical_Association_Rules.ipynb), [differential dependencies](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Differential_Dependencies.ipynb), [denial constraints](https://colab.research.google.com/github/Desbordante/desbordante-core/blob/main/examples/notebooks/Denial_Constraints.ipynb), and more. |
| [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) | Personal genome analysis toolkit with Python scripts analyzing raw DNA data across 17 categories (health risks, ancestry, pharmacogenomics, nutrition, psychology, and more) and generating a terminal-style single-page HTML visualization. |
| [RunMat](https://github.com/runmat-org/runmat) | Fast MATLAB-syntax runtime with automatic CPU/GPU execution and fused array kernels. |
| [Turbostream](https://github.com/turboline-ai/turbostream) | A terminal UI for experimenting with custom rule engines and selective LLM analysis on real-time data streams, without worrying about streaming infra or backpressure. |
| [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) | Open source “failure atlas” of 16 recurring issues in LLM and RAG pipelines, with observable symptoms and suggested fixes for data science teams. |
| [Deploybase](https://deploybase.ai/) | Track real-time GPU and LLM pricing across all cloud and inference providers. |
| [DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) | An agentic LLM for autonomous data science, which can autonomously complete a wide range of data science tasks without human intervention. |
| [Disco](https://github.com/leap-laboratories/discovery-engine) | Superhuman exploratory data analysis. Finds the feature interactions and subgroup effects in tabular data that LLMs and manual exploration miss — with p-values, effect sizes, and literature citations. Free for public data. |
| [AI for Database](https://aifordatabase.com) | Chat with your database in natural language — no SQL needed. Get instant insights, build self-refreshing dashboards, and trigger automated workflows based on database changes. |
| [Crypto Pump Scanner](https://github.com/stefanoviana/deepalpha) | AI-powered cryptocurrency trading bot with LSTM neural network (84.6% accuracy). Real-time pump detection, walk-forward validated models, multi-exchange support (Bybit, Binance, OKX, Gate.io). Open source. |
| [Future AGI](https://github.com/future-agi/future-agi) | Open-source platform to simulate, evaluate, trace, guardrail, route, and optimize LLM and AI agent apps in one feedback loop, so agents don't just get monitored, they self-improve. Self-hostable. Apache-2.0. |



## Literature and Media
**[`^        back to top        ^`](#awesome-data-science)**

このセクションには、追加の読み物、視聴できるチャンネル、および聴ける講演が含まれています。

### Books
**[`^        back to top        ^`](#awesome-data-science)**

- [Data Science From Scratch: First Principles with Python](https://www.amazon.com/Data-Science-Scratch-Principles-Python-dp-1492041130/dp/1492041130/ref=dp_ob_title_bk)
- [Artificial Intelligence with Python - Tutorialspoint](https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_tutorial.pdf)
- [Machine Learning from Scratch](https://dafriedman97.github.io/mlbook/content/introduction.html)
- [Probabilistic Machine Learning: An Introduction](https://probml.github.io/pml-book/book1.html)
- [How to Lead in Data Science](https://www.manning.com/books/how-to-lead-in-data-science) - 早期アクセス
- [Fighting Churn With Data](https://www.manning.com/books/fighting-churn-with-data)
- [Data Science at Scale with Python and Dask](https://www.manning.com/books/data-science-with-python-and-dask)
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)
- [The Data Science Handbook: Advice and Insights from 25 Amazing Data Scientists](https://www.thedatasciencehandbook.com/)
- [Think Like a Data Scientist](https://www.manning.com/books/think-like-a-data-scientist)
- [Introducing Data Science](https://www.manning.com/books/introducing-data-science)
- [Practical Data Science with R](https://www.manning.com/books/practical-data-science-with-r)
- [Everyday Data Science](https://www.amazon.com/dp/B08TZ1MT3W/ref=cm_sw_r_cp_apa_fabc_a0ceGbWECF9A8) & [(cheaper PDF version)](https://gum.co/everydaydata)
- [Exploring Data Science](https://www.manning.com/books/exploring-data-science) - 無料電子書籍サンプラー
- [Exploring the Data Jungle](https://www.manning.com/books/exploring-the-data-jungle) - 無料電子書籍サンプラー
- [Classic Computer Science Problems in Python](https://www.manning.com/books/classic-computer-science-problems-in-python)
- [Math for Programmers](https://www.manning.com/books/math-for-programmers) 早期アクセス
- [R in Action, Third Edition](https://www.manning.com/books/r-in-action-third-edition) 早期アクセス
- [Data Science Bookcamp](https://www.manning.com/books/data-science-bookcamp) 早期アクセス
- [Data Science Thinking: The Next Scientific, Technological and Economic Revolution](https://www.springer.com/gp/book/9783319950914)
- [Applied Data Science: Lessons Learned for the Data-Driven Business](https://www.springer.com/gp/book/9783030118204)
- [The Data Science Handbook](https://www.amazon.com/Data-Science-Handbook-Field-Cady/dp/1119092949)
- [Essential Natural Language Processing](https://www.manning.com/books/getting-started-with-natural-language-processing) - 早期アクセス
- [Mining Massive Datasets](https://www.mmds.org/) - オンラインコースに含まれる無料電子書籍
- [Pandas in Action](https://www.manning.com/books/pandas-in-action) - 早期アクセス
- [Genetic Algorithms and Genetic Programming](https://www.taylorfrancis.com/books/9780429141973)
- [Advances in Evolutionary Algorithms](https://www.intechopen.com/books/advances_in_evolutionary_algorithms) - 無料ダウンロード
- [Genetic Programming: New Approaches and Successful Applications](https://www.intechopen.com/books/genetic-programming-new-approaches-and-successful-applications) - 無料ダウンロード
- [Evolutionary Algorithms](https://www.intechopen.com/books/evolutionary-algorithms) - 無料ダウンロード
- [Advances in Genetic Programming, Vol. 3](https://www0.cs.ucl.ac.uk/staff/W.Langdon/aigp3/) - 無料ダウンロード
- [Genetic Algorithms and Evolutionary Computation](https://www.talkorigins.org/faqs/genalg/genalg.html) - 無料ダウンロード
- [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) - スティーブン・ボードによる凸最適化書籍 - 無料ダウンロード
- [Data Analysis with Python and PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark) - 早期アクセス
- [R for Data Science](https://r4ds.had.co.nz/)
- [Build a Career in Data Science](https://www.manning.com/books/build-a-career-in-data-science)
- [Machine Learning Bookcamp](https://mlbookcamp.com/) - 早期アクセス
- [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
- [Effective Data Science Infrastructure](https://www.manning.com/books/effective-data-science-infrastructure)
- [Practical MLOps: How to Get Ready for Production Models](https://valohai.com/mlops-ebook/)
- [Data Analysis with Python and PySpark](https://www.manning.com/books/data-analysis-with-python-and-pyspark)
- [Regression, a Friendly guide](https://www.manning.com/books/regression-a-friendly-guide) - 早期アクセス
- [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [Data Science at the Command Line: Facing the Future with Time-Tested Tools](https://www.oreilly.com/library/view/data-science-at/9781491947845/)
- [Machine Learning with Python - Tutorialspoint](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_tutorial.pdf)
- [Deep Learning](https://www.deeplearningbook.org/)
- [Designing Cloud Data Platforms](https://www.manning.com/books/designing-cloud-data-platforms) - 早期アクセス
- [An Introduction to Statistical Learning with Applications in R](https://www.statlearning.com/)
- [The Elements of Statistical Learning: Data Mining, Inference, and Prediction](https://hastie.su.domains/ElemStatLearn/)
- [Deep Learning with PyTorch](https://www.simonandschuster.com/books/Deep-Learning-with-PyTorch/Eli-Stevens/9781617295263)
- [Neural Networks and Deep Learning](https://neuralnetworksanddeeplearning.com)
- [Deep Learning Cookbook](https://www.oreilly.com/library/view/deep-learning-cookbook/9781491995839/)
- [Introduction to Machine Learning with Python](https://www.oreilly.com/library/view/introduction-to-machine/9781449369880/)
- [Artificial Intelligence: Foundations of Computational Agents, 2nd Edition](https://artint.info/index.html) - 無料HTML版
- [The Quest for Artificial Intelligence: A History of Ideas and Achievements](https://ai.stanford.edu/~nilsson/QAI/qai.pdf) - 無料ダウンロード
- [Graph Algorithms for Data Science](https://www.manning.com/books/graph-algorithms-for-data-science) - 早期アクセス
- [Data Mesh in Action](https://www.manning.com/books/data-mesh-in-action) - 早期アクセス
- [Julia for Data Analysis](https://www.manning.com/books/julia-for-data-analysis) - 早期アクセス
- [Casual Inference for Data Science](https://www.manning.com/books/julia-for-data-analysis) - 早期アクセス
- [Regular Expression Puzzles and AI Coding Assistants](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants) ダビッド・メルツによる
- [Dive into Deep Learning](https://d2l.ai/)
- [Data for All](https://www.manning.com/books/data-for-all)
- [Interpretable Machine Learning: A Guide for Making Black Box Models Explainable](https://christophm.github.io/interpretable-ml-book/) - 無料GitHub版
- [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf) 無料ダウンロード
- [Comet for DataScience: Enhance your ability to manage and optimize the life cycle of your data science project](https://www.amazon.com/Comet-Data-Science-Enhance-optimize/dp/1801814430)
- [Software Engineering for Data Scientists](https://www.manning.com/books/software-engineering-for-data-scientists) - 早期アクセス
- [Julia for Data Science](https://www.manning.com/books/julia-for-data-science) - 早期アクセス
- [An Introduction to Statistical Learning](https://www.statlearning.com/) - ダウンロードページ
- [Machine Learning For Absolute Beginners](https://www.amazon.in/Machine-Learning-Absolute-Beginners-Introduction-ebook/dp/B07335JNW1)
- [Unifying Business, Data, and Code: Designing Data Products with JSON Schema](https://learning.oreilly.com/library/view/unifying-business-data/9781098144999/)
- [Grokking Bayes](https://www.manning.com/books/grokking-bayes)
- [Machine Learning Q and AI](https://sebastianraschka.com/books/ml-q-and-ai)
- [JavaScript for Data Science](https://third-bit.com/js4ds/) - 無料HTMLページ
- [Angewandte Data Science](https://angewandtedatascience.de/) - ドイツ語の応用データサイエンスに関する書籍
- [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book): エンジニアの視点からAIの背後にある数学を英語でわかりやすく教える無料FreeCodeCamp書籍
- [Executive Data Science](https://leanpub.com/eds): データサイエンスチームとプロジェクトを管理するための高度なガイド
- [Introduction to Modern Statistics](https://leanpub.com/imstat): データサイエンス応用に重点を置いた現代的なオープンアクセス統計学教科書
- [The Art of Data Science](https://bookdown.org/rdpeng/artofdatascience/): データ分析の「芸」に焦点を当て、適切な質問をどう立て、それを精緻化するかについて述べる。

#### Book Deals (Affiliated)

- [eBook sale - Save up to 45% on eBooks!](https://www.manning.com/?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=ebook_sale_8_8_22)

- [Causal Machine Learning](https://www.manning.com/books/causal-machine-learning?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ness_causal_7_26_22&a_aid=mikrobusiness&a_bid=43a2198b
)
- [Managing ML Projects](https://www.manning.com/books/managing-machine-learning-projects?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_thompson_managing_6_14_22)
- [Causal Inference for Data Science](https://www.manning.com/books/causal-inference-for-data-science?utm_source=mikrobusiness&utm_medium=affiliate&utm_campaign=book_ruizdevilla_causal_6_6_22)
- [Data for All](https://www.manning.com/books/data-for-all?utm_source=mikrobusiness&utm_medium=affiliate)

### Journals, Publications and Magazines
**[`^        back to top        ^`](#awesome-data-science)**

- [ICML](https://icml.cc/2015/) - 機械学習国際会議
- [GECCO](https://gecco-2019.sigevo.org/index.html/HomePage) - 遺伝的および進化計算コンファレンス（GECCO）
- [epjdatascience](https://epjdatascience.springeropen.com/)
- [Journal of Data Science](https://jds-online.org/journal/JDS) - 統計手法の応用に関する国際ジャーナル
- [Big Data Research](https://www.journals.elsevier.com/big-data-research)
- [Journal of Big Data](https://journalofbigdata.springeropen.com/)
- [Big Data & Society](https://journals.sagepub.com/home/bds)
- [Data Science Journal](https://www.jstage.jst.go.jp/browse/dsj)
- [datatau.com/news](https://www.datatau.com/news) - Hacker Newsに似たデータ関連のサイト
- [Data Science Trello Board](https://trello.com/b/rbpEfMld/data-science)
- [Medium Data Science Topic](https://medium.com/tag/data-science) - Medium上のデータサイエンス関連の出版物
- [Towards Data Science Genetic Algorithm Topic](https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3#:~:text=A%20genetic%20algorithm%20is%20a,offspring%20of%20the%20next%20generation.) -データサイエンスに関連する遺伝アルゴリズムの出版物
- [Maxim AI](https://getmaxim.ai). AIエージェントのシミュレーション、評価および可観測性を支援するツール。
- [8bitconcepts](https://8bitconcepts.com/) - AI業界の研究と分析、AIの価格、企業導入、評価フレームワークに関する論文を含む。

### Newsletters
**[`^        back to top        ^`](#awesome-data-science)**

- [AI Weekly](https://aiweekly.co) - 業界リーダーによるAIインテリジェンスのキュレーションされた要約。2017年から3回/週、40,000人以上のサブスクリプションを持つ。
- [DataTalks.Club](https://datatalks.club). データに関連する話題についての週刊ニュースレター。 [Archive](https://us19.campaign-archive.com/home/?u=0d7822ab98152f5afc118c176&id=97178021aa).
- [The Analytics Engineering Roundup](https://roundup.getdbt.com/about). データサイエンスに関するニュースレター。 [Archive](https://roundup.getdbt.com/archive).
- [Techpresso](https://dupple.com/techpresso). AI、機械学習、テクノロジー分野における最も影響力のある進展をカバーする無料の日刊ニュースレター。 [Archive](https://dupple.com/techpresso).
- [DiamantAI](https://diamantai.substack.com). 実用的なAIエンジニアリングと生成AIをシンプルに説明：RAG、エージェント、LLMの応用パターンについての開発者向け解説。
- [Bamboo Weekly](https://www.bambooweekly.com) - 現実の出来事や公開データに基づいた週次pandas練習問題。完全な解説付き。2年以上前の問題は無料であり、現在の号の最初の2問と解答も無料。 [Archive](https://www.bambooweekly.com/archive/).

### Mailing lists
**[`^        back to top        ^`](#awesome-data-science)**
- [Working Group - Research Software Engineering in the Digital Humanities](https://www.listserv.dfn.de/sympa/info/ag-dhrse). デジタル人文科学（DH-RSE）の研究ソフトウェアエンジニアリングワークグループのメールリスト。

### Bloggers
**[`^        back to top        ^`](#awesome-data-science)**

- [Wes McKinney](https://wesmckinney.com/archives.html) - ウェス・マッキンニーのアーカイブ。
- [Matthew Russell](https://miningthesocialweb.com/) - ソーシャルウェブの掘り下げ。
- [Greg Reda](https://www.gregreda.com/) - グレッグ・レーダーの個人ブログ
- [Julia Evans](https://jvns.ca/) - Recurse Centerの卒業生
- [Hakan Kardas](https://www.cse.unr.edu/~hkardes/) - 個人ウェブページ
- [Sean J. Taylor](https://seanjtaylor.com/) - 個人ウェブページ
- [Drew Conway](https://drewconway.com/) - 個人ウェブページ
- [Hilary Mason](https://hilarymason.com/) - 個人ウェブページ
- [Noah Iliinsky](https://complexdiagrams.com/) - 個人のブログ
- [Matt Harrison](https://hairysun.com/) - 個人のブログ
- [Vamshi Ambati](https://allthingsds.wordpress.com/) - AllThings Data Sciene
- [Prash Chan](https://www.mdmgeek.com/) - マスターデータ管理とその周辺の話題に関するテックブログ
- [Clare Corthell](https://datasciencemasters.org/) - The Open Source Data Science Masters
- [Datawrangling](https://www.datawrangling.org) ペーター・スコモロチによる。マシンラーニング、データマイニング、その他
- [Quora Data Science](https://www.quora.com/topic/Data-Science) - 専門家によるデータサイエンスの質問と回答
- [Siah](https://openresearch.wordpress.com/) berkeleyの博士課程生
- [Louis Dorard](https://www.ownml.co/blog/) ウェブとデータに情熱を持つテクノロジーのプロ
- [Machine Learning Mastery](https://machinelearningmastery.com/) プロのプログラマが複雑な問題を解決するための機械学習アルゴリズムを自信を持って適用できるように支援する
- [Daniel Forsyth](https://www.danielforsyth.me/) - 個人のブログ
- [Data Science Weekly](https://www.datascienceweekly.org/) - 週刊ニュースブログ
- [Revolution Analytics](https://blog.revolutionanalytics.com/) - データサイエンスブログ
- [R Bloggers](https://www.r-bloggers.com/) - R Bloggers
- [The Practical Quant](https://practicalquant.blogspot.com/) ビッグデータ
- [Yet Another Data Blog](https://yet-another-data-blog.blogspot.com/) Yet Another Data Blog
- [KD Nuggets](https://www.kdnuggets.com/) データマイニング、分析、ビッグデータ、データ、サイエンスはブログやポータルではない
- [Meta Brown](https://www.metabrown.com/blog/) - 個人のブログ
- [Data Scientist](https://datascientists.com/) データサイエンティストの文化を構築している
- [WhatSTheBigData](https://whatsthebigdata.com/) 上記の一部、すべて、あるいはそれ以上の内容を含み、このブログはその影響が情報技術、ビジネス世界、政府機関、そして私たちの生活に及ぼす点を調査している
- [Tevfik Kosar](https://magnus-notitia.blogspot.com/) - マグナス・ノティタ
- [New Data Scientist](https://newdatascientist.blogspot.com/) 社会科学の専門家がビッグデータの世界へ進出するまでの道
- [Harvard Data Science](https://harvarddatascience.com/) - 統計解析と可視化に関する考え
- [Data Science 101](https://ryanswanstrom.com/datascience101/) - データサイエンティストになるための学び
- [Kaggle Past Solutions](https://www.chioka.in/kaggle-competition-solutions/)
- [DataScientistJourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [NYC Taxi Visualization Blog](https://chriswhong.github.io/nyctaxi/)
- [Data-Mania](https://www.data-mania.com/)
- [Data-Magnum](https://data-magnum.com/)
- [datascopeanalytics](https://datascopeanalytics.com/blog/)
- [Digital transformation](https://tarrysingh.com/)
- [datascientistjourney](https://datascientistjourney.wordpress.com/category/data-science/)
- [Data Mania Blog](https://www.data-mania.com/blog/) - - Chris Saidの科学ブログ [The File Drawer](https://chris-said.io/)
- [Emilio Ferrara's web page](https://www.emilio.ferrara.name/)
- [DataNews](https://datanews.tumblr.com/)
- [Reddit TextMining](https://www.reddit.com/r/textdatamining/)
- [Periscopic](https://periscopic.com/#!/news)
- [Hilary Parker](https://hilaryparker.com/)
- [Data Stories](https://datastori.es/)
- [Data Science Lab](https://datasciencelab.wordpress.com/)
- [Meaning of](https://www.kennybastani.com/)
- [Adventures in Data Land](https://blog.smola.org)
- [Dataclysm](https://theblog.okcupid.com/)
- [FlowingData](https://flowingdata.com/) - 可視化と統計
- [Calculated Risk](https://www.calculatedriskblog.com/)
- [O'reilly Learning Blog](https://www.oreilly.com/content/topics/oreilly-learning/)
- [Dominodatalab](https://blog.dominodatalab.com/)
- [i am trask](https://iamtrask.github.io/) - 機械学習の匠のブログ
- [Vademecum of Practical Data Science](https://datasciencevademecum.wordpress.com/) - 現実世界の問題に対するデータ駆動型ソリューションのハンドブックとレシピ
- [Dataconomy](https://dataconomy.com/) - 新たなデータ経済に関するブログ
- [Springboard](https://www.springboard.com/blog/) - データサイエンス学習者向けのリソースを提供するブログ
- [Analytics Vidhya](https://www.analyticsvidhya.com/) - データサイエンスおよび分析に関する学習資料を扱う完全なウェブサイト
- [Occam's Razor](https://www.kaushik.net/avinash/) - ウェブ分析に焦点を当てる
- [Data School](https://www.dataschool.io/) - 初心者向けデータサイエンスチュートリアル！
- [Colah's Blog](https://colah.github.io) - ニューラルネットワークを理解するためのブログ！
- [Sebastian's Blog](https://ruder.io/#open) - NLPおよびトランスフォーム学習に関するブログ！
- [Distill](https://distill.pub) - 機械学習の明確な説明を提供するブログ！
- [Chris Albon's Website](https://chrisalbon.com/) - データサイエンスとAIのノート
- [Andrew Carr](https://andrewnc.github.io/blog/blog.html) - エソテリックプログラミング言語を用いたデータサイエンス
- [floydhub](https://blog.floydhub.com/introduction-to-genetic-algorithms/) - 進化アルゴリズム向けブログ
- [Jingles](https://jinglescode.github.io/) - 学術論文のレビューとキーテンプの抽出
- [nbshare](https://www.nbshare.io/notebooks/data-science/) - データサイエンスノートブック
- [Loic Tetrel](https://ltetrel.github.io/) - データサイエンスブログ
- [Chip Huyen's Blog](https://huyenchip.com/blog/) - MLエンジニアリング、MLOpsおよびスタートアップにおけるMLの活用
- [Maria Khalusova](https://www.mariakhalusova.com/) - データサイエンスブログ
- [Aditi Rastogi](https://medium.com/@aditi2507rastogi) - ML、DL、データサイエンスブログ
- [Santiago Basulto](https://medium.com/@santiagobasulto) - Pythonを用いたデータサイエンス
- [Akhil Soni](https://medium.com/@akhil0435) - ML、DLおよびデータサイエンス
- [Akhil Soni](https://akhilworld.hashnode.dev/) - ML、DLおよびデータサイエンス
- [Applied AI Blogs](https://www.appliedaicourse.com/blog/) - AI、機械学習、データサイエンスの概念に関する実用的な応用を含む詳細記事
- [Scaler Blogs](https://www.scaler.com/blog/) - ソフトウェア開発、AI、テック業界におけるキャリア成長に関する教育コンテンツ
- [Mlu github](https://mlu-explain.github.io/) - Mluはアマゾンが開発したML分野向けの学習プラットフォームで、基本から始めてライブ図解で学習できます
- [Jan Oliver Rüdiger](https://notesjor.de/) - ML、DLおよびデータサイエンス - 文字・データマイニングに焦点

### Presentations
**[`^        back to top        ^`](#awesome-data-science)**

- [How to Become a Data Scientist](https://www.slideshare.net/ryanorban/how-to-become-a-data-scientist)
- [Introduction to Data Science](https://www.slideshare.net/NikoVuokko/introduction-to-data-science-25391618)
- [Intro to Data Science for Enterprise Big Data](https://www.slideshare.net/pacoid/intro-to-data-science-for-enterprise-big-data)
- [How to Interview a Data Scientist](https://www.slideshare.net/dtunkelang/how-to-interview-a-data-scientist)
- [How to Share Data with a Statistician](https://github.com/jtleek/datasharing)
- [The Science of a Great Career in Data Science](https://www.slideshare.net/katemats/the-science-of-a-great-career-in-data-science)
- [What Does a Data Scientist Do?](https://www.slideshare.net/datasciencelondon/big-data-sorry-data-science-what-does-a-data-scientist-do)
- [Building Data Start-Ups: Fast, Big, and Focused](https://www.slideshare.net/medriscoll/driscoll-strata-buildingdatastartups25may2011clean)
- [How to win data science competitions with Deep Learning](https://www.slideshare.net/0xdata/how-to-win-data-science-competitions-with-deep-learning)
- [Full-Stack Data Scientist](https://www.slideshare.net/AlexeyGrigorev/fullstack-data-scientist)

### Podcasts
**[`^        back to top        ^`](#awesome-data-science)**

- [AI at Home](https://podcasts.apple.com/us/podcast/data-science-at-home/id1069871378)
- [AI Today](https://www.cognilytica.com/aitoday/)
- [Adversarial Learning](https://adversariallearning.com/)
- [Chai time Data Science](https://www.youtube.com/playlist?list=PLLvvXm0q8zUbiNdoIazGzlENMXvZ9bd3x)
- [Chain of Thought](https://www.chainofthought.show/)
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/)
- [Data Science at Home](https://datascienceathome.com/)
- [Data Science Mixer](https://community.alteryx.com/t5/Data-Science-Mixer/bg-p/mixer)
- [Data Skeptic](https://dataskeptic.com/)
- [Data Stories](https://datastori.es/)
- [Datacast](https://jameskle.com/writes/category/Datacast)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [DataTalks.Club](https://anchor.fm/datatalksclub)
- [Gradient Descent](https://wandb.ai/fully-connected/gradient-descent)
- [Learning Machines 101](https://www.learningmachines101.com/)
- [Let's Data (Brazil)](https://www.youtube.com/playlist?list=PLn_z5E4dh_Lj5eogejMxfOiNX3nOhmhmM)
- [Linear Digressions](https://lineardigressions.com/)
- [Not So Standard Deviations](https://nssdeviations.com/)
- [O'Reilly Data Show Podcast](https://www.oreilly.com/radar/topics/oreilly-data-show-podcast/)
- [Partially Derivative](https://partiallyderivative.com/)
- [Superdatascience](https://www.superdatascience.com/podcast/)
- [The Data Engineering Show](https://www.dataengineeringshow.com/)
- [The Radical AI Podcast](https://www.radicalai.org/)
- [What's The Point](https://fivethirtyeight.com/tag/whats-the-point/)
- [The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast)

### YouTube Videos & Channels
**[`^        back to top        ^`](#awesome-data-science)**

- [What is machine learning?](https://www.youtube.com/watch?v=WXHM_i-fgGo)
- [Andrew Ng: Deep Learning, Self-Taught Learning and Unsupervised Feature Learning](https://www.youtube.com/watch?v=n1ViNeWhC24)
- [Data36 - Data Science for Beginners by Tomi Mester](https://www.youtube.com/c/TomiMesterData36comDataScienceForBeginners)
- [Deep Learning: Intelligence from Big Data](https://www.youtube.com/watch?v=czLI3oLDe8M)
- [Interview with Google's AI and Deep Learning 'Godfather' Geoffrey Hinton](https://www.youtube.com/watch?v=1Wp3IIpssEc)
- [Introduction to Deep Learning with Python](https://www.youtube.com/watch?v=S75EdAcXHKk)
- [What is machine learning, and how does it work?](https://www.youtube.com/watch?v=elojMnjn4kk)
- [CampusX](https://www.youtube.com/@campusx-official)
- [Data School](https://www.youtube.com/channel/UCnVzApLJE2ljPZSeQylSEyg) - データサイエンス教育
- [Neural Nets for Newbies by Melanie Warrick (May 2015)](https://www.youtube.com/watch?v=Cu6A96TUy_o)
- [Neural Networks video series by Hugo Larochelle](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
- [Google DeepMind co-founder Shane Legg - Machine Super Intelligence](https://www.youtube.com/watch?v=evNCyRL3DOU)
- [Data Science Primer](https://www.youtube.com/watch?v=cHzvYxBN9Ls&list=PLPqVjP3T4RIRsjaW07zoGzH-Z4dBACpxY)
- [Data Science with Genetic Algorithms](https://www.youtube.com/watch?v=lpD38NxTOnk)
- [Data Science for Beginners](https://www.youtube.com/playlist?list=PL2zq7klxX5ATMsmyRazei7ZXkP1GHt-vs)
- [DataTalks.Club](https://www.youtube.com/channel/UCDvErgK0j5ur3aLgn6U-LqQ)
- [Mildlyoverfitted - Tutorials on intermediate ML/DL topics](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [mlops.community - Interviews of industry experts about production ML](https://www.youtube.com/channel/UCYBSjwkGTK06NnDnFsOcR7g)
- [ML Street Talk - Unabashedly technical and non-commercial, so you will hear no annoying pitches.](https://www.youtube.com/c/machinelearningstreettalk)
- [Neural networks by 3Blue1Brown ](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- [Neural networks from scratch by Sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
- [Manning Publications YouTube channel](https://www.youtube.com/c/ManningPublications/featured)
- [Ask Dr Chong: How to Lead in Data Science - Part 1](https://youtu.be/JYuQZii5o58)
- [Ask Dr Chong: How to Lead in Data Science - Part 2](https://youtu.be/SzqIXV-O-ko)
- [Ask Dr Chong: How to Lead in Data Science - Part 3](https://youtu.be/Ogwm7k_smTA)
- [Ask Dr Chong: How to Lead in Data Science - Part 4](https://youtu.be/a9usjdzTxTU)
- [Ask Dr Chong: How to Lead in Data Science - Part 5](https://youtu.be/MYdQq-F3Ws0)
- [Ask Dr Chong: How to Lead in Data Science - Part 6](https://youtu.be/LOOt4OVC3hY)
- [Regression Models: Applying simple Poisson regression](https://www.youtube.com/watch?v=9Hk8K8jhiOo)
- [Deep Learning Architectures](https://www.youtube.com/playlist?list=PLv8Cp2NvcY8DpVcsmOT71kymgMmcr59Mf)
- [Time Series Modelling and Analysis](https://www.youtube.com/playlist?list=PL3N9eeOlCrP5cK0QRQxeJd6GrQvhAtpBK)
- [Serrano.Academy](https://www.youtube.com/@SerranoAcademy)
- [End to End Data Science Playlist](https://www.youtube.com/watch?v=S_F_c9e2bz4&list=PLZoTAELRMXVPS-dOaVbAux22vzqdgoGhG)
- [Introduction to Data Science - Linkedin](https://www.linkedin.com/learning/introduction-to-data-science-22668235/beginning-your-data-science-exploration?u=42458916)

## Socialize
**[`^        back to top        ^`](#awesome-data-science)**

以下にいくつかのソーシャルメディアのリンクがあります。他のデータサイエンティストとつながりましょう！

- [Facebook Accounts](#facebook-accounts)
- [Twitter Accounts](#twitter-accounts)
- [Telegram Channels](#telegram-channels)
- [Slack Communities](#slack-communities)
- [GitHub Groups](#github-groups)
- [Data Science Competitions](#data-science-competitions)


### Facebook Accounts
**[`^        back to top        ^`](#awesome-data-science)**

- [Data](https://www.facebook.com/data)
- [Big Data Scientist](https://www.facebook.com/Bigdatascientist)
- [Data Science Day](https://www.facebook.com/datascienceday/)
- [Data Science Academy](https://www.facebook.com/nycdatascience)
- [Facebook Data Science Page](https://www.facebook.com/pages/Data-science/431299473579193?ref=br_rs)
- [Data Science London](https://www.facebook.com/pages/Data-Science-London/226174337471513)
- [Data Science Technology and Corporation](https://www.facebook.com/DataScienceTechnologyCorporation?ref=br_rs)
- [Data Science - Closed Group](https://www.facebook.com/groups/1394010454157077/?ref=br_rs)
- [Center for Data Science](https://www.facebook.com/centerdatasciences?ref=br_rs)
- [Big data hadoop NOSQL Hive Hbase](https://www.facebook.com/groups/bigdatahadoop/)
- [Analytics, Data Mining, Predictive Modeling, Artificial Intelligence](https://www.facebook.com/groups/data.analytics/)
- [Big Data Analytics using R](https://www.facebook.com/groups/434352233255448/)
- [Big Data Analytics with R and Hadoop](https://www.facebook.com/groups/rhadoop/)
- [Big Data Learnings](https://www.facebook.com/groups/bigdatalearnings/)
- [Big Data, Data Science, Data Mining & Statistics](https://www.facebook.com/groups/bigdatastatistics/)
- [BigData/Hadoop Expert](https://www.facebook.com/groups/BigDataExpert/)
- [Data Mining / Machine Learning / AI](https://www.facebook.com/groups/machinelearningforum/)
- [Data Mining/Big Data - Social Network Ana](https://www.facebook.com/groups/dataminingsocialnetworks/)
- [Vademecum of Practical Data Science](https://www.facebook.com/datasciencevademecum)
- [Veri Bilimi Istanbul](https://www.facebook.com/groups/veribilimiistanbul/)
- [The Data Science Blog](https://www.facebook.com/theDataScienceBlog/)


### Twitter Accounts
**[`^        back to top        ^`](#awesome-data-science)**

| Twitter | Description |
| --- | --- |
| [Big Data Combine](https://twitter.com/BigDataCombine) | Rapid-fire, live tryouts for data scientists seeking to monetize their models as trading strategies |
| Big Data Mania | Data Viz Wiz, Data Journalist, Growth Hacker, Author of Data Science for Dummies (2015) |
| [Big Data Science](https://twitter.com/analyticbridge) | Big Data, Data Science, Predictive Modeling, Business Analytics, Hadoop, Decision and Operations Research. |
| Charlie Greenbacker | Director of Data Science at @ExploreAltamira |
| [Chris Said](https://twitter.com/Chris_Said) | Data scientist at Twitter |
| [Clare Corthell](https://twitter.com/clarecorthell) | Dev, Design, Data Science @mattermark #hackerei |
| [DADI Charles-Abner](https://twitter.com/DadiCharles) | #datascientist @Ekimetrics. , #machinelearning #dataviz #DynamicCharts #Hadoop #R #Python #NLP #Bitcoin #dataenthousiast |
| [Data Science Central](https://twitter.com/DataScienceCtrl) | Data Science Central is the industry's single resource for Big Data practitioners. |
| [Data Science London](https://twitter.com/ds_ldn)  | Data Science. Big Data. Data Hacks. Data Junkies. Data Startups. Open Data |
| [Data Science Renee](https://twitter.com/BecomingDataSci) | Documenting my path from SQL Data Analyst pursuing an Engineering Master's Degree to Data Scientist |
| [Data Science Report](https://twitter.com/TedOBrien93) | Mission is to help guide & advance careers in Data Science & Analytics |
| [Data Science Tips](https://twitter.com/datasciencetips) | Tips and Tricks for Data Scientists around the world! #datascience #bigdata |
| [Data Vizzard](https://twitter.com/DataVisualizati) | DataViz, Security, Military |
| [DataScienceX](https://twitter.com/DataScienceX) |  |
| deeplearning4j | |
| [DJ Patil](https://twitter.com/dpatil) | White House Data Chief, VP @ RelateIQ. |
| [Domino Data Lab](https://twitter.com/DominoDataLab) | |
| [Drew Conway](https://twitter.com/drewconway) | Data nerd, hacker, student of conflict. |
| Emilio Ferrara | #Networks, #MachineLearning and #DataScience. I work on #Social Media. Postdoc at @IndianaUniv |
| [Erin Bartolo](https://twitter.com/erinbartolo) | Running with #BigData--enjoying a love/hate relationship with its hype. @iSchoolSU #DataScience Program Mgr. |
| [Greg Reda](https://twitter.com/gjreda)  | Working @ _GrubHub_ about data and pandas |
| [Gregory Piatetsky](https://twitter.com/kdnuggets) |  KDnuggets President, Analytics/Big Data/Data Mining/Data Science expert, KDD & SIGKDD co-founder, was Chief Scientist at 2 startups, part-time philosopher. |
| [Hadley Wickham](https://twitter.com/hadleywickham) |  Chief Scientist at RStudio, and an Adjunct Professor of Statistics at the University of Auckland, Stanford University, and Rice University. |
| [Hakan Kardas](https://twitter.com/hakan_kardes) | Data Scientist |
| [Hilary Mason](https://twitter.com/hmason) | Data Scientist in Residence at @accel. |
| [Jeff Hammerbacher](https://twitter.com/hackingdata)  | ReTweeting about data science |
| [John Myles White](https://twitter.com/johnmyleswhite)  | Scientist at Facebook and Julia developer. Author of Machine Learning for Hackers and Bandit Algorithms for Website Optimization. Tweets reflect my views only. |
| [Juan Miguel Lavista](https://twitter.com/BDataScientist) | Principal Data Scientist @ Microsoft Data Science Team |
| [Julia Evans](https://twitter.com/b0rk) | Hacker - Pandas - Data Analyze |
| [Kenneth Cukier](https://twitter.com/kncukier) | The Economist's Data Editor and co-author of Big Data (https://www.big-data-book.com/). |
| Kevin Davenport | Organizer of https://www.meetup.com/San-Diego-Data-Science-R-Users-Group/ |
| [Kevin Markham](https://twitter.com/justmarkham) | Data science instructor, and founder of [Data School](https://www.dataschool.io/) |
| [Kim Rees](https://twitter.com/krees) | Interactive data visualization and tools. Data flaneur. |
| [Kirk Borne](https://twitter.com/KirkDBorne) | DataScientist, PhD Astrophysicist, Top #BigData Influencer. |
| Linda Regber | Data storyteller, visualizations. |
| [Luis Rei](https://twitter.com/lmrei) | PhD Student. Programming, Mobile, Web. Artificial Intelligence, Intelligent Robotics Machine Learning, Data Mining, Natural Language Processing, Data Science. |
| Mark Stevenson | Data Analytics Recruitment Specialist at Salt (@SaltJobs)  Analytics - Insight - Big Data - Data science |
| [Matt Harrison](https://twitter.com/__mharrison__) | Opinions of full-stack Python guy, author, instructor, currently playing Data Scientist. Occasional fathering, husbanding, organic gardening. |
| [Matthew Russell](https://twitter.com/ptwobrussell) | Mining the Social Web. |
| [Mert Nuhoğlu](https://twitter.com/mertnuhoglu)  | Data Scientist at BizQualify, Developer |
| [Monica Rogati](https://twitter.com/mrogati) | Data @ Jawbone. Turned data into stories & products at LinkedIn. Text mining, applied machine learning, recommender systems. Ex-gamer, ex-machine coder; namer. |
| [Noah Iliinsky](https://twitter.com/noahi) | Visualization & interaction designer. Practical cyclist. Author of vis books: https://www.oreilly.com/pub/au/4419 |
| [Paul Miller](https://twitter.com/PaulMiller) | Cloud Computing/ Big Data/ Open Data Analyst & Consultant. Writer, Speaker & Moderator. Gigaom Research Analyst. |
| [Peter Skomoroch](https://twitter.com/peteskomoroch) | Creating intelligent systems to automate tasks & improve decisions. Entrepreneur, ex-Principal Data Scientist @LinkedIn. Machine Learning, ProductRei, Networks |
| [Prash Chan](https://twitter.com/MDMGeek) | Solution Architect @ IBM, Master Data Management, Data Quality & Data Governance Blogger. Data Science, Hadoop, Big Data & Cloud. |
| [Quora Data Science](https://twitter.com/q_datascience)  | Quora's data science topic |
| [R-Bloggers](https://twitter.com/Rbloggers) | Tweet blog posts from the R blogosphere, data science conferences, and (!) open jobs for data scientists. |
| [Rand Hindi](https://twitter.com/randhindi) |  |
| [Randy Olson](https://twitter.com/randal_olson) | Computer scientist researching artificial intelligence. Data tinkerer. Community leader for @DataIsBeautiful. #OpenScience advocate. |
| [Recep Erol](https://twitter.com/EROLRecep) | Data Science geek @ UALR |
| [Ryan Orban](https://twitter.com/ryanorban) | Data scientist, genetic origamist, hardware aficionado |
| [Sean J. Taylor](https://twitter.com/seanjtaylor) | Social Scientist. Hacker. Facebook Data Science Team. Keywords: Experiments, Causal Inference, Statistics, Machine Learning, Economics. |
| [Silvia K. Spiva](https://twitter.com/silviakspiva) | #DataScience at Cisco |
| [Harsh B. Gupta](https://twitter.com/harshbg) | Data Scientist at BBVA Compass |
| [Spencer Nelson](https://twitter.com/spenczar_n) | Data nerd |
| [Talha Oz](https://twitter.com/tozCSS) | Enjoys ABM, SNA, DM, ML, NLP, HI, Python, Java. Top percentile Kaggler/data scientist |
| [Tasos Skarlatidis](https://twitter.com/anskarl) | Complex Event Processing, Big Data, Artificial Intelligence and Machine Learning. Passionate about programming and open-source. |
| [Terry Timko](https://twitter.com/Terry_Timko) | InfoGov; Bigdata; Data as a Service; Data Science; Open, Social & Business Data Convergence |
| [Tony Baer](https://twitter.com/TonyBaer) | IT analyst with Ovum covering Big Data & data management with some systems engineering thrown in. |
| [Tony Ojeda](https://twitter.com/tonyojeda3) | Data Scientist , Author , Entrepreneur. Co-founder @DataCommunityDC. Founder @DistrictDataLab. #DataScience #BigData #DataDC |
| [Vamshi Ambati](https://twitter.com/vambati) | Data Science @ PayPal. #NLP, #machinelearning; PhD, Carnegie Mellon alumni (Blog: https://allthingsds.wordpress.com ) |
| [Wes McKinney](https://twitter.com/wesmckinn) | Pandas (Python Data Analysis library). |
| [WileyEd](https://twitter.com/WileyEd) | Senior Manager - @Seagate Big Data Analytics @McKinsey Alum #BigData + #Analytics Evangelist #Hadoop, #Cloud, #Digital, & #R Enthusiast |
| [WNYC Data News Team](https://twitter.com/datanews) | The data news crew at @WNYC. Practicing data-driven journalism, making it visual, and showing our work. |
| [Alexey Grigorev](https://twitter.com/Al_Grigor) | Data science author |
| [İlker Arslan](https://twitter.com/ilkerarslan_35) | Data science author. Shares mostly about Julia programming |
| [INEVITABLE](https://twitter.com/WeAreInevitable) | AI & Data Science Start-up Company based in England, UK |
| [Jan Oliver Rüdiger](https://x.com/notesJOR) | ML, DL and Data Science - with a focus on text-/data-mining |

### Telegram Channels
**[`^        back to top        ^`](#awesome-data-science)**

- [Open Data Science](https://t.me/opendatascience) – 最初のTelegramデータサイエンスチャンネル。AI、ビッグデータ、機械学習、統計、一般数学およびそれらの応用に関するすべての技術的および人気のトピックをカバーしています
- [Loss function porn](https://t.me/loss_function_porn) — DS/MLテーマに関する美しい投稿。動画やグラフィックによる可視化を含む。
- [Machinelearning](https://t.me/ai_machinelearning_big_data) – 毎日のMLニュース


### Slack Communities
[top](#awesome-data-science)

- [DataTalks.Club](https://datatalks.club)

### GitHub Groups
- [Berkeley Institute for Data Science](https://github.com/BIDS)

### Data Science Competitions

いくつかのデータマイニングコンペティションプラットフォーム

- [Kaggle](https://www.kaggle.com/)
- [DrivenData](https://www.drivendata.org/)
- [Analytics Vidhya](https://datahack.analyticsvidhya.com/)
- [InnoCentive](https://www.innocentive.com/)
- [Microprediction](https://www.microprediction.com/python-1)

## Fun

- [Infographic](#infographics)
- [Datasets](#datasets)
- [Comics](#comics)


### Infographics
**[`^        back to top        ^`](#awesome-data-science)**

| Preview                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://i.imgur.com/0OoLaa5.png" width="150" />](https://i.imgur.com/0OoLaa5.png)                                                                                                                                                | [Key differences of a data scientist vs. data engineer](https://searchbusinessanalytics.techtarget.com/feature/Key-differences-of-a-data-scientist-vs-data-engineer)                                                                                         |
| [<img src="https://cloud.githubusercontent.com/assets/182906/19517857/604f88d8-960c-11e6-97d6-16c9738cb824.png" width="150" />](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                    | A visual guide to Becoming a Data Scientist in 8 Steps by [DataCamp](https://www.datacamp.com) [(img)](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/DataScienceEightSteps_Full.png)                                                              |
| [<img src="https://i.imgur.com/W2t2Roz.png" width="150" />](https://i.imgur.com/FxsL3b8.png)                                                                                                                                                | Mindmap on required skills ([img](https://i.imgur.com/FxsL3b8.png))                                                                                                                                                                                          |
| [<img src="https://i.imgur.com/rb9ruaa.png" width="150" />](https://nirvacana.com/thoughts/wp-content/uploads/2013/07/RoadToDataScientist1.png)                                                                                              | Swami Chandrasekaran made a [Curriculum via Metro map](https://nirvacana.com/thoughts/2013/07/08/becoming-a-data-scientist/).                                                                                                                                            |
| [<img src="https://i.imgur.com/XBgKF2l.png" width="150" />](https://i.imgur.com/4ZBBvb0.png)                                                                                                                                                | by [@kzawadz](https://twitter.com/kzawadz) via [twitter](https://twitter.com/MktngDistillery/status/538671811991715840)                                                                                                                                      |
| [<img src="https://i.imgur.com/l9ZGtal.jpg" width="150" />](https://i.imgur.com/xLY3XZn.jpg)                                                                                                                                                | By [Data Science Central](https://www.datasciencecentral.com/)                                                                                                                                                                                                |
| [<img src="https://i.imgur.com/TWkB4X6.png" width="150" />](https://i.imgur.com/0TydZ4M.png)                                                                                                                                                | Data Science Wars: R vs Python                                                                                                                                                                                                                               |
| [<img src="https://i.imgur.com/gtTlW5I.png" width="150" />](https://i.imgur.com/HnRwlce.png)                                                                                                                                                | How to select statistical or machine learning techniques                                                                                                                                                                                                     |
| [<img src="https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg" width="150" />](https://scikit-learn.org/1.5/_downloads/b82bf6cd7438a351f19fac60fbc0d927/ml_map.svg)                                                                                                           | [Choosing the Right Estimator](https://scikit-learn.org/1.5/machine_learning_map.html#choosing-the-right-estimator)                                                                                                                                                                                                                                 |
| [<img src="https://i.imgur.com/3JSyUq1.png" width="150" />](https://i.imgur.com/uEqMwZa.png)                                                                                                                                                | The Data Science Industry: Who Does What                                                                                                                                                                                                                     |
| [<img src="https://i.imgur.com/DQqFwwy.png" width="150" />](https://i.imgur.com/RsHqY84.png)                                                                                                                                                | Data Science ~~Venn~~ Euler Diagram                                                                                                                                                                                                                          |
| [<img src="https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png" width="150" height="150" />](https://www.springboard.com/blog/wp-content/uploads/2016/03/20160324_springboard_vennDiagram.png) | Different Data Science Skills and Roles from [Springboard](https://www.springboard.com)                                                                                       |
| [<img src="https://data-literacy.geckoboard.com/assets/img/data-fallacies-to-avoid-preview.jpg" width="150" alt="Data Fallacies To Avoid" />](https://data-literacy.geckoboard.com/poster/)                                                 | A simple and friendly way of teaching your non-data scientist/non-statistician colleagues [how to avoid mistakes with data](https://data-literacy.geckoboard.com/poster/). From Geckoboard's [Data Literacy Lessons](https://data-literacy.geckoboard.com/). |

### Datasets
**[`^        back to top        ^`](#awesome-data-science)**

- [Academic Torrents](https://academictorrents.com/)
- [ADS-B Exchange](https://www.adsbexchange.com/data-samples/) - 航空機および自動依存監視・ブロードキャスト（ADS-B）ソースに特化したデータセット
- [Chinese Tea Dataset](https://chinatea.house/dataset/) - 100以上の中国茶に関するカスタムオープンデータセット。カテゴリ、産地、カフェイン含有量、風味、酸化度、調理パラメータを含む。JSONおよびCSV形式で提供。
- [College ROI Dataset](https://github.com/thomasthinks/college-roi-data) - 3,392校の大学における29,700件の米国大学院課程のライフタイム投資回収率の推定値。FREOPP、IPEDS、BEA地域価格データに基づく。データ辞書付きの5つのCSVファイル。CC BY 4.0、Zenodo DOI。
- [AI Displacement Tracker](https://github.com/noahaust2/ai-displacement-tracker) - 92件のAIによる労働力削減イベントを追跡する構造化データセット。453,748人の労働者を12か国・11業界にわたってカバー。JSONおよびCSV形式。CC-BY-4.0ライセンス。
- [Packrift Packaging Optimization Benchmark Corpus](https://packrift.github.io/packaging-optimization-benchmark-corpus/) - 1,000件の正確な仕様のパッケージ商品SKU記録から生成されたパブリックパッケージ製品データセット。ECサイトでの納品および倉庫分析用にダウンロード可能なCSVおよびJSONファイルを提供。
- [hadoopilluminated.com](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [data.gov](https://catalog.data.gov/dataset) - 米国政府のオープンデータの拠点
- [United States Census Bureau](https://www.census.gov/)
- [enigma.com](https://enigma.com/) - 公的データの世界をナビゲート - 政府、企業、組織が公開した数十億件の公的記録を迅速に検索・分析。
- [datahub.io](https://datahub.io/)
- [aws.amazon.com/datasets](https://aws.amazon.com/datasets/)
- [datacite.org](https://datacite.org/)
- [The official portal for European data](https://data.europa.eu/en)
- [NASDAQ:DATA](https://data.nasdaq.com/) - Nasdaq Data Link：金融、経済、代替データセットのトップソース。
- [Congressional Stock Brain](https://congressionalstockbrain.com) - 米国議会のSTOCK法規の取引公開情報を重要度で評価するAI駆動の無料ツール。537人の議員の公開取引記録から機械評価されたシグナルを提供。
- [figshare.com](https://figshare.com/)
- [GeoLite Legacy Downloadable Databases](https://dev.maxmind.com/geoip)
- [Hugging Face Datasets](https://huggingface.co/datasets)
- [Japan Neighborhoods](https://japanneighborhoods.com) - 東京の5,078地域×7年間（36,222件の記録、2018～2024年）の犯罪統計データ。東京都警察のオープンデータから収集。インタラクティブな犯罪地図、安全性評価、生活費インデックスを含む。CC BYライセンス。
- [The Quiet-Broke Index](https://jeevesagency.github.io/quiet-broke-index/) - 40万ドルの世帯収入のうち、住宅、税金、子育て、医療、交通費にどれくらい使われるかを30メートルの合成評価で示す。オープンメソッド、無料、メール登録なし。
- [Crime Brasil](https://crimebrasil.com.br) - ブラジルの犯罪統計に関するオープンデータプラットフォーム。リオグランデドスル州（299万件の事件、79,024地域、2022～2025年）の地域レベル、マインツおよびリオジャネイロの市レベル、さらに全国PRF道路およびDATASUS人間関係暴力データを含む。無料REST API、CSV/Parquet、毎日更新、CC BY 4.0。
- [US Truck-Involved Fatal Crashes (FARS) 2018-2024](https://doi.org/10.5281/zenodo.20487070) - NHTSAの事故報告システムのフィルタリングされたサブセット。2018～2024年、全50州で発生した中型および大型トラックによる33,898件の重大事故をカバー。19都市間の比較をインタラクティブに提供し、[Vision Zero Report Card](https://accidentlawyerreview.com/research/vision-zero-report-card/)で再現可能なPythonパイプライン、およびHuggingFaceのミラーを含む。永続的なDOI、CC BY 4.0。 [GitHub](https://github.com/MarvinBregiosa/vision-zero-fars)
- [State of Peptides 2026](https://peptahub.com/state-of-peptides-2026) - 156種のペプチドおよびペプチド周辺化合物の構造化参照データセット。各化合物には規制ステータス、カテゴリ、投与経路、半減期、分子量、CAS番号、参照数、PubChem/DrugBank/Wikidata IDが含まれる。CSVおよびJSON形式。ログイン不要、CC BY 4.0。
- [Quora's Big Datasets Answer](https://www.quora.com/Where-can-I-find-large-datasets-open-to-the-public)
- [Public Big Data Sets](https://hadoopilluminated.com/hadoop_illuminated/Public_Bigdata_Sets.html)
- [Kaggle Datasets](https://www.kaggle.com/datasets)
- [A Deep Catalog of Human Genetic Variation](https://www.internationalgenome.org/data)
- [A community-curated database of well-known people, places, and things](https://developers.google.com/freebase/)
- [Google Public Data](https://www.google.com/publicdata/directory)
- [World Bank Data](https://data.worldbank.org/)
- [NYC Taxi data](https://chriswhong.github.io/nyctaxi/)
- [Open Data Philly](https://www.opendataphilly.org/) フィラデルフィアにおける人々とデータの結びつき
- [grouplens.org](https://grouplens.org/datasets/) 映画（評価付き）・書籍・ウィキデータセットのサンプル
- [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/ml/) - 機械学習に適したデータセットを含む
- [research-quality data sets](https://web.archive.org/web/20150320022752/https://bitly.com/bundles/hmason/1) [Hilary Mason](https://web.archive.org/web/20150501033715/https://bitly.com/u/hmason/bundles)によって
- [National Centers for Environmental Information](https://www.ncei.noaa.gov/)
- [ClimateData.us](https://www.climatedata.us/) (関連: [U.S. Climate Resilience Toolkit](https://toolkit.climate.gov/))
- [r/datasets](https://www.reddit.com/r/datasets/)
- [MapLight](https://www.maplight.org/data-series) - 一般公開に自由に利用できるデータを多様に提供。下記のデータセットをクリックして詳細を確認
- [GHDx](https://ghdx.healthdata.org/) - IHME - 全世界の健康および人口統計データセットのカタログに加え、IHMEの結果を含む
- [St. Louis Federal Reserve Economic Data - FRED](https://fred.stlouisfed.org/)
- [New Zealand Institute of Economic Research – Data1850](https://data1850.nz/)
- [Open Data Sources](https://github.com/datasciencemasters/data)
- [UNICEF Data](https://data.unicef.org/)
- [undata](https://data.un.org/)
- [NASA SocioEconomic Data and Applications Center - SEDAC](https://earthdata.nasa.gov/centers/sedac-daac)
- [The GDELT Project](https://www.gdeltproject.org/)
- [Sweden, Statistics](https://www.scb.se/en/)
- [StackExchange Data Explorer](https://data.stackexchange.com) - Stack Exchangeネットワークの公開データに対して任意のクエリを実行できるオープンソースツール
- [San Fransisco Government Open Data](https://datasf.org/opendata/)
- [IBM Asset Dataset](https://developer.ibm.com/exchanges/data/)
- [Open data Index](https://index.okfn.org/)
- [Public Git Archive](https://github.com/src-d/datasets/tree/master/PublicGitArchive)
- [GHTorrent](https://ghtorrent.org/)
- [Microsoft Research Open Data](https://msropendata.com/)
- [Open Government Data Platform India](https://data.gov.in/)
- [Google Dataset Search (beta)](https://datasetsearch.research.google.com/)
- [NAYN.CO Turkish News with categories](https://github.com/naynco/nayn.data)
- [Covid-19](https://github.com/datasets/covid-19)
- [Covid-19 Google](https://github.com/google-research/open-covid-19-data)
- [Enron Email Dataset](https://www.cs.cmu.edu/~./enron/)
- [5000 Images of Clothes](https://github.com/alexeygrigorev/clothing-dataset)
- [IBB Open Portal](https://data.ibb.gov.tr/en/)
- [The Humanitarian Data Exchange](https://data.humdata.org/)
- [250k+ Job Postings](https://aws.amazon.com/marketplace/pp/prodview-p2554p3tczbes) - ルクセンブルクの2020年から現在までの歴史的職種募集データセット。AWS Data Exchange上に25万件以上の職種募集が無料提供されている。
- [FinancialData.Net](https://financialdata.net/documentation) - 金融データセット（株価市場データ、財務諸表、持続可能性データなど）。
- [HDD Price Index](https://github.com/AdamDudley/hddhunt-price-index) - アメリカン・USのAmazonで販売されている3.5" SATAハードディスクの1テラバイトあたりの最安価格（米ドル/TB）の日次オープンデータセット。時間系列データを含む。CSV、JSON、JSONL形式。ログイン不要。CC BY 4.0。
- [BDE Score](https://github.com/hbhqq9/bde-score) - AIを活用した多市場株価分析。73銘柄（米国/香港/A株）に対して透明性のあるBDEスコアを提供。EU AI法第50条に準拠。MITライセンス。
- [Google Dataset Search](https://datasetsearch.research.google.com/) – ウェブ上のデータセットを検索できる。
- [notesjor corpus-collection](https://notes.jan-oliver-ruediger.de/korpora/) - 無料のコーパス（60億トークン以上）。主にドイツ語（歴史的および現代のドイツ語）を含む。
- [CLARIN-Repository](https://lindat.mff.cuni.cz/repository/home) - CLARINはヨーロッパの科学データセットのリポジトリ。
- [GBIF](https://www.gbif.org/) - グローバルバイオダイバーシティ情報施設：24億件以上の種の出現記録。生態モデルおよびML研究向けの無料オープンAPI。
- [FAOSTAT](https://www.fao.org/faostat/en/) - UN FAOによる245カ国以上の食料生産、貿易、土地利用、排出量の統計。無料APIおよび大量ダウンロード。
- [Movebank](https://www.movebank.org/) - 60億件以上の動物移動記録（GPSおよび衛星テレメトリ）をアーカイブした無料プラットフォーム。オープンREST API。空間時間モデルおよびトラジェクトMLに有用。
- [Encyclopedia of Life](https://eol.org/) - 190万種以上の種に関するオープン構造データ。性質、分類、メディアを含む。バイオダイバーシティおよび種分類タスク向けの無料APIおよび大量ダウンロード。
- [FirstData](https://github.com/MLT-OSS/FirstData) - 世界で最も包括的かつ信頼性の高いデータソース知識ベース。政府、国際機関、研究機関から210以上のキュレーションされたソースを提供。AIエージェントとのMCP統合。MITライセンス。
- [latamdata-py](https://github.com/juanmoisesd/latamdata-py) - ラテンアメリカの38のオープン研究データセットへの1行アクセスを可能にするPythonパッケージ。pip install latamdata-py。
- [ZipCheckup](https://github.com/artakulov/us-water-quality-data) - 42,000以上のアメリカ州のZIPコードにおける環境安全データ（無料）。水質、空気質、PFAS汚染、ラドン、鉛、洪水リスクなど11の分野を含む。公開REST API、npm/PyPIパッケージ、CC BY 4.0。
- [Helium](https://heliumtrades.com/mcp-page/) - 15以上の次元で構造化されたバイアス特徴を持つリアルタイムニュースコーパス（320万件以上の記事、5,000以上のソース）、リアルタイムの金融市場データ（株価、ETF、暗号資産）にAI生成分析、MLオプション価格設定と確率メトリクスおよび完全なグリース、過去のオプションチェーンデータ（定量研究用）；MCPサーバーまたはREST APIで利用可能。
- [Verified Supplement Evidence](https://github.com/erinheit451/verified-supplement-evidence) - 投与量、形態による生物利用度、薬品-栄養素相互作用、NHANESの欠乏率、FDA FAERSの副作用信号、効果的な投与量あたりのコストを含む、証拠に基づいたサプリメントデータセット。すべての臨床的主張はPubMed PMIDを引用。CC BY 4.0、DOI 10.57967/hf/9356。


### Comics
**[`^        back to top        ^`](#awesome-data-science)**

- [Comic compilation](https://medium.com/@nikhil_garg/a-compilation-of-comics-explaining-statistics-data-science-and-machine-learning-eeefbae91277)
- [Cartoons](https://www.kdnuggets.com/websites/cartoons.html)
- [Data Science Cartoons](https://www.cartoonstock.com/directory/d/data_science.asp)
- [Data Science: The XKCD Edition](https://davidlindelof.com/data-science-the-xkcd-edition/)

## Other Awesome Lists

- Other amazingly awesome lists can be found in the [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
- [Awesome Machine Learning](https://github.com/josephmisiti/awesome-machine-learning)
- [lists](https://github.com/jnv/lists)
- [awesome-dataviz](https://github.com/javierluraschi/awesome-dataviz)
- [awesome-python](https://github.com/vinta/awesome-python)
- [Data Science IPython Notebooks.](https://github.com/donnemartin/data-science-ipython-notebooks)
- [awesome-r](https://github.com/qinwf/awesome-R)
- [awesome-datasets](https://github.com/awesomedata/awesome-public-datasets)
- [awesome-Machine Learning & Deep Learning Tutorials](https://github.com/ujjwalkarn/Machine-Learning-Tutorials/blob/master/README.md)
- [Awesome Data Science Ideas](https://github.com/JosPolfliet/awesome-ai-usecases)
- [Machine Learning for Software Engineers](https://github.com/ZuzooVn/machine-learning-for-software-engineers)
- [Community Curated Data Science Resources](https://hackr.io/tutorials/learn-data-science)
- [Awesome Machine Learning On Source Code](https://github.com/src-d/awesome-machine-learning-on-source-code)
- [Awesome Community Detection](https://github.com/benedekrozemberczki/awesome-community-detection)
- [Awesome Graph Classification](https://github.com/benedekrozemberczki/awesome-graph-classification)
- [Awesome Decision Tree Papers](https://github.com/benedekrozemberczki/awesome-decision-tree-papers)
- [Awesome Fraud Detection Papers](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers)
- [Awesome Gradient Boosting Papers](https://github.com/benedekrozemberczki/awesome-gradient-boosting-papers)
- [Awesome Computer Vision Models](https://github.com/nerox8664/awesome-computer-vision-models)
- [Awesome Monte Carlo Tree Search](https://github.com/benedekrozemberczki/awesome-monte-carlo-tree-search-papers)
- [Glossary of common statistics and ML terms](https://www.analyticsvidhya.com/glossary-of-common-statistics-and-machine-learning-terms/)
- [100 NLP Papers](https://github.com/mhagiwara/100-nlp-papers)
- [Awesome Game Datasets](https://github.com/leomaurodesenv/game-datasets#readme)
- [ML/AI Interview Prep](https://github.com/aasimansari1/ml-interview-prep) - 500以上のML/AIに関するインタビューQ&A。実行可能なコードを含む。MLの基礎、ディープラーニング、NLP、PyTorch、scikit-learnパイプライン、システム設計をカバー。
- [Data Science Interviews Questions](https://github.com/alexeygrigorev/data-science-interviews)
- [Awesome Explainable Graph Reasoning](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
- [Top Data Science Interview Questions](https://www.interviewbit.com/data-science-interview-questions/)
- [Awesome Drug Synergy, Interaction and Polypharmacy Prediction](https://github.com/AstraZeneca/awesome-drug-pair-scoring)
- [Deep Learning Interview Questions](https://www.adaface.com/blog/deep-learning-interview-questions/)
- [Top Future Trends in Data Science in 2023](https://medium.com/the-modern-scientist/top-future-trends-in-data-science-in-2023-3e616c8998b8)
- [How Generative AI Is Changing Creative Work](https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work)
- [What is generative AI?](https://www.techtarget.com/searchenterpriseai/definition/generative-AI)
- [Top 100+ Machine Learning Interview Questions (Beginner to Advanced)](https://www.appliedaicourse.com/blog/machine-learning-interview-questions/)
- [Data Science Projects](https://github.com/veb-101/Data-Science-Projects)
- [Is Data Science a Good Career?](https://www.scaler.com/blog/is-data-science-a-good-career/)
- [The Future of Data Science: Predictions and Trends](https://www.appliedaicourse.com/blog/future-of-data-science/)
- [Data Science and Machine Learning: What’s The Difference?](https://www.appliedaicourse.com/blog/data-science-and-machine-learning-whats-the-difference/)
- [AI in Data Science: Uses, Roles, and Tools](https://www.scaler.com/blog/ai-in-data-science/)
- [Top 13 Data Science Programming Languages](https://www.appliedaicourse.com/blog/data-science-programming-languages/)
- [40+ Data Analytics Projects Ideas](https://www.appliedaicourse.com/blog/data-analytics-projects-ideas/)
- [Best Data Science Courses with Certificates](https://www.appliedaicourse.com/blog/best-data-science-courses/)
- [Generative AI Models](https://www.appliedaicourse.com/blog/generative-ai-models/)
- [Awesome Data Analysis](https://github.com/PavelGrigoryevDS/awesome-data-analysis) -  データ分析ツール、ライブラリ、リソースのキュレーションされたリスト。
- [Awesome Evidence Synthesis](https://github.com/evidencesynthesis-tools/awesome-evidence-synthesis) - 体系的なレビュー、メタ分析、証拠合成に使えるオープンソースツールの厳選リスト
- [AI Dev Jobs](https://aidevboard.com/) - AI/MLエンジニアリング職に特化したジョブボード。5,400以上の求人情報と無料のREST APIを提供


### Hobby
- [Awesome Music Production](https://github.com/ad-si/awesome-music-production)
