---
title: "dspinellis/awesome-msr"
description: "dspinellis/awesome-msr の翻訳初稿（未検査）"
licenseSource: "github-dspinellis-awesome-msr-readme-md"
---

# Awesome Empirical Software Engineering [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
証拠に基づくデータ駆動型のソフトウェアシステム研究を行うために使える、データセットとツールを集めたリポジトリー。
この研究アプローチは[実験的、または実証的ソフトウェア工学](https://en.wikipedia.org/wiki/Experimental_software_engineering)と呼ばれることが多いです。
データセットの多くは、[探索ベースのソフトウェア工学](https://en.wikipedia.org/wiki/Search-based_software_engineering)手法を用いる研究にも役立ちます。
このリポジトリーは、[Mining Software Repositories（MSR）](https://www.msrconf.org/)会議シリーズにちなんで名付けられました。
この種の研究の例は、MSR会議の[Hall of Fame](http://2016.msrconf.org/#/hall-of-fame)を参照してください。

- このリストを継続的に改善するには、あなたの協力が必要です。
  貢献方法は[コントリビューションガイド](https://github.com/dspinellis/awesome-msr/blob/ac89acae0eb1ac1265903038305433ad0bf8b360/contributing.md)をお読みください。
  手順が面倒またはわかりにくい場合は、[メール](mailto:dds@aueb.gr)で連絡することもできます。
- より多くのAwesomeリストは[awesome](https://github.com/sindresorhus/awesome)を参照してください。

## 目次
- [リポジトリー](#repositories)
- [データセット](#data-sets)
- [ツール](#tools)
- [研究発表先](#research-outlets)

## リポジトリー

- [ESEUR](https://github.com/Derek-Jones/ESEUR-code-data) 公開書籍[Evidence-based Software Engineering](http://www.knosof.co.uk/ESEUR/index.html)で使用されたすべてのデータ。
- [Directory of MSR Datasets](https://authecesofteng.github.io/directory-msr-datasets/)
- [FLOSSmole](https://flossmole.org/collection_details) - フリー／リブレ／オープンソースプロジェクトデータの共同収集・分析。
- [PROMISE](http://promise.site.uottawa.ca/SERepository/datasets-page.html) - ソフトウェア工学研究に関する約20のデータセット。
- [SIR](http://sir.unl.edu/portal/index.php) - ソフトウェア成果物インフラストラクチャリポジトリー。テストスイートと障害データを含むJava、C、C++、C#ソフトウェア。
- [Zenodo](http://zenodo.org/) - CERNのオープンアクセスリポジトリーにあるソフトウェアデータコレクション。
  - [Software Engineering Artifacts Can Really Assist Future Tasks](http://zenodo.org/communities/seacraft)
  - [Empirical Software Engineering](https://zenodo.org/communities/empirical-software-engineering/)
  - [Mining Software Repositories](https://zenodo.org/communities/msr/)

## データセット

- [AndroidTimeMachine](https://androidtimemachine.github.io) - 実世界のAndroidアプリ8,431件のコミット履歴をグラフで表したデータセット。
- [AndroZoo](https://androzoo.uni.lu/) - Androidアプリケーションのコレクション。
- [Bug Prediction Dataset](http://bug.inf.usi.ch/index.php) - Eclipse JDT Core、PDE UI、Equinox Framework、Lucene、Mylynとその履歴のモデル・メトリクス集。
- [Code Reviews](http://kin-y.github.io/miningReviewRepo/) - OpenStack、LibreOffice、AOSP、Qt、Eclipseのコードレビュー。
- [CoREBench](http://www.comp.nus.edu.sg/%7Erelease/corebench/) - Make、Grep、Findutils、Coreutilsの4オープンソースプロジェクトのリポジトリーとバグ報告から体系的に抽出された、70件の現実的な複雑回帰エラーのコレクション。
- [Cryptocurrency GitHub Activity and Market Cap Dataset](https://rvantonder.github.io/CryptOSS/) - GitHub上の200超の暗号通貨プロジェクトについて、時系列のコミット、スター、価格、時価総額などを扱うデータセット。生の履歴データも[利用可能](https://zenodo.org/record/2595588#.XRuzuBNKhSM)。
- [Defects4J](https://github.com/rjust/defects4j) - ソフトウェアテスト研究の発展を目的に収集された、395件の再現可能なバグのコレクション。
- [Eclipse AERI stacktraces](http://download.eclipse.org/scava/datasets/aeri_stacktraces/aeri_stacktraces.html) - AERI報告システムにより取得された、Eclipse IDE利用者が遭遇した例外のスタックトレース集。
- [Enron Spreadsheets and Emails](https://figshare.com/articles/Enron_Spreadsheets_and_Emails/1221767) - 論文「Enron's Spreadsheets and Related Emails: A Dataset and Analysis」で使用されたすべてのスプレッドシートとメール。
- [Findbugs-maven](https://github.com/istlab/maven_bug_catalog) - [Mavenリポジトリー](https://maven.apache.org)のJavaプロジェクトに対するFindBugs報告のセット。
- [GHTorrent](http://ghtorrent.org/) - GitHub REST APIで提供されるデータの、スケーラブルでクエリ可能なオフラインミラー。
- [GitHub Bug Dataset](http://www.inf.u-szeged.hu/~ferenc/papers/GitHubBugDataSet/) - 静的ソースコードメトリクスで特徴づけられた、15件のJavaオープンソースプロジェクトのバグデータセット。
- [GitHub on Google BigQuery](https://cloud.google.com/bigquery/public-data/github) - GoogleのBigQueryプラットフォームを通じて利用できるGitHubデータ。
- [Grammar Zoo](http://slebok.github.io/zoo/) - DSLとGPLの文法のコレクション。一部はメタモデルとドキュメントスキーマから抽出されている。
- [KaVE](http://www.kave.cc/datasets) - 開発者ツールのインタラクションデータ。
- [Linux Kernel 4.21 Call Graphs](https://zenodo.org/record/2652487#.XRnvomUzb0o) - [CScout](https://github.com/dspinellis/cscout/)で生成されたLinux Kernel 4.21のコールグラフ。
- [Maven metrics](https://github.com/bkarak/data_msr2015) - [Maven Repository](https://maven.apache.org)向けのソフトウェア複雑度・規模メトリクス集。
- [Maven Dependency Graph](https://zenodo.org/record/1489120) - グラフデータベースに保存された、2018年9月6日に取得したMaven Central全体のスナップショット。
- [mzdata](https://github.com/jxshin/mzdata) - Mozillaの課題追跡履歴を複数抽出・複数レベルで扱うデータセット。
- [npm-miner](https://github.com/AuthEceSoftEng/msr-2018-npm-miner) - eslint、escomplex、nsp、jsinspect、sonarjsという5つのオープンソースソフトウェア品質ツールによる、人気npmパッケージ2,000件の分析結果を含むデータセット。
- [OCL Expressions on GitHub](https://github.com/tue-mdse/ocl-dataset) - 系統的に選定したGitHubリポジトリー245件のEMFメタモデル504件に由来する、9,188個のOCL式のデータセット。
- [RepoReapers Data Set](https://reporeapers.github.io) - GHTorrentから収集した_エンジニアリングされたソフトウェアプロジェクト_のコレクションを含むデータセット。
- [Software Heritage Graph Dataset](https://doi.org/10.5281/zenodo.2583978) - さまざまなforgeの8,000万超のソフトウェアプロジェクトについて、開発履歴とファイルメタデータを重複除去・統合して表現したグラフ（[論文はこちら](https://dl.acm.org/citation.cfm?id=3341907)）。
- [STAMINA](http://stamina.chefbe.net/download) - （STAte Machine INference Approaches）決定性有限状態機械（FSM）を学習する手法のベンチマークに使うデータ。
- [Stack Exchange](https://archive.org/details/stackexchange) - Stack Exchangeネットワークの、利用者が投稿したすべてのコンテンツを匿名化したダンプ。
- [SWE-bench](https://www.swebench.com) - オープンソースコードリポジトリーで発見された課題の修正を生成することで、AIモデルが実世界のソフトウェア工学問題を解決する能力を評価するために設計されたベンチマーク。
- [TravisTorrent](http://travistorrent.testroots.org) - 無償で使いやすいTraivs CIビルド分析を提供する。
- [Ultimate Debian Database (UDD)](https://wiki.debian.org/UltimateDebianDatabase) - 同じSQLデータベースでDebianのさまざまな側面（パッケージ、バグ、メンテナーなど）に関するデータを扱う。
- [Unified Bug Dataset](http://www.inf.u-szeged.hu/~ferenc/papers/UnifiedBugDataSet/) - Bugcatchers Bug Dataset、[Bug Prediction Dataset](http://bug.inf.usi.ch/index.php)、[Eclipse Bug Dataset](https://www.st.cs.uni-saarland.de/softevo/bug-data/eclipse/)、[GitHub Bug Dataset](http://www.inf.u-szeged.hu/~ferenc/papers/GitHubBugDataSet/)、[PROMISE](http://promise.site.uottawa.ca/SERepository/datasets-page.html)リポジトリーの一部データセットを含む、静的ソースコードベースのデータセット。
- [Unix history](https://github.com/dspinellis/unix-history-repo) - Unixの46年間の進化を含むGitリポジトリー。

## ツール
- [astminer](https://github.com/JetBrains-Research/astminer) - ASTから導出されるコードやその他のデータのパスベース表現をマイニングするライブラリ・ツール。
- [Boa](http://boa.cs.iastate.edu/) - ソフトウェアリポジトリーのマイニングを容易にするドメイン固有言語とインフラストラクチャ。
- [buckwheat](https://github.com/JetBrains-Research/buckwheat) - ソースコードから識別子を抽出する多言語トークナイザー。
- [ckjm](http://www.spinellis.gr/sw/ckjm/) - Chidamber and Kemerer Java Metrics。
- [Coming](https://github.com/SpoonLabs/coming/) - コード変更を分析し、Gitリポジトリーから変更パターンのインスタンスをマイニングするJavaフレームワーク。
- [CryptOSS](https://github.com/rvantonder/CryptOSS) - 暗号通貨プロジェクトのGitHubアクティビティと時価総額データをマイニングする。
- [DbDeo](https://github.com/tushartushar/DbDeo) - 埋め込みSQL文を抽出し、データベーススキーマのスメルを検出する。
- [Designite](http://www.designite-tools.com) - C#のソースコードメトリクスを計算し、多様な実装、設計、アーキテクチャのスメルを検出する。
- [DesigniteJava](https://github.com/tushartushar/DesigniteJava) - Javaのソースコードメトリクスを計算し、多様な実装・設計スメルを検出する。
- [Diggit](https://github.com/jrfaller/diggit) - Gitリポジトリーを分析するアジャイルRubyツール。
- [GitEvo](https://github.com/andrehora/gitevo) - Gitリポジトリーのコード進化分析。
- [GrimoireLab](http://grimoirelab.github.io/) - ソフトウェア開発分析向けのFree/Libre/Open Sourceツール。
- [MetricMiner](http://www.github.com/mauricioaniche/metricminer2) - GitとSVNリポジトリーからコミット、開発者、変更、差分などのデータをマイニング・抽出する軽量Java DSL。
- [Maven-miner](https://github.com/diverse-project/maven-miner) - Maven CentralにホストされたMaven依存関係グラフ全体を、[Neo4j](https://neo4j.com/)グラフの形で解決するJavaツール・インフラストラクチャ。
- [Perceval](https://github.com/chaoss/grimoirelab-perceval) - 数十のバックエンドからリポジトリーデータを取得する。
- [Puppeteer](https://github.com/tushartushar/Puppeteer) - Puppetコードの設定スメルを検出する。
- [PyDriller](https://github.com/ishepard/pydriller) - Gitリポジトリーを分析するPythonフレームワーク。
- [qmcalc](https://github.com/dspinellis/cqmetrics) - Cソースコードから品質メトリクスを計算する。
- [reaper](https://github.com/RepoReapers/reaper) - GHTorrentからリポジトリーのスコアを計算するPythonツール。このスコアは、リポジトリー内のプロジェクトがどの程度_エンジニアリングされているか_を定量化する。
- [RefactoringMiner](https://github.com/tsantalis/RefactoringMiner) - Javaコードの変更におけるリファクタリング検出用ライブラリ/API。
- [TestMiner](https://andrehora.github.io/testminer) - GitHubリポジトリーのソフトウェアテスト分析。
- [VulData7](https://github.com/electricalwind/data7) - NVDに報告された脆弱性を修正するコミットを自動収集できるJavaフレームワーク（NVDとGitを接続する）。

## 研究発表先
- 実証的ソフトウェア工学研究を専門に扱う発表先
  - [Empirical Software Engineering journal](https://link.springer.com/journal/10664)
  - [MSR: Mining Software Repositories conference](https://www.msrconf.org/)
  - [PROMISE: Predictive Models and Data Analytics in Software Engineering conference](http://promise.site.uottawa.ca/SERepository/)
- 実証的ソフトウェア工学研究を掲載する発表先
  - [ACM Transactions on Software Engineering and Methodology (TOSEM)](https://dl.acm.org/citation.cfm?id=J790)
  - [ESEC/FSE: ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering](https://www.esec-fse.org/)
  - [ICSE: International Conference on Software Engineering](http://www.icse-conferences.org/)
  - [IEEE Software magazine](https://publications.computer.org/software-magazine/)
  - [IEEE Transactions on Software Engineering](https://www.computer.org/csdl/journal/ts)
  - [Journal of Systems and Software](https://www.journals.elsevier.com/journal-of-systems-and-software)
  - [SANER: IEEE International Conference on Software Analysis, Evolution and Reengineering](https://ieeexplore.ieee.org/xpl/conhome.jsp?punumber=1000695)

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な範囲において、[Diomidis Spinellis](http://www.spinellis.gr)は本作品に対するすべての著作権および関連・隣接する権利を放棄しています。
