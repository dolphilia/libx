---
title: "Awesome Information Retrieval"
description: "Information Retrievalを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-harpribot-awesome-information-retrieval-readme-md"
---

# Awesome Information Retrieval

Information Retrievalを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
 - [Books](#books)
 - [Courses](#courses)
 - [Software](#software)
 - [Datasets](#datasets)
 - [Talks](#talks)
 - [Conferences](#conferences)
 - [Blogs](#blogs)
    - [Interesting Reads](#interesting-reads)

## 書籍
- [Introduction to Information Retrieval](http://www-nlp.stanford.edu/IR-book/) - C.D. Manning、P. Raghavan、H. Schütze。Cambridge UP、2008年。（情報検索を始めるための最初の一冊）。
- [Search Engines: Information Retrieval in Practice](http://ciir.cs.umass.edu/downloads/SEIRiP.pdf) - Bruce Croft、Don Metzler、Trevor Strohman。2009年。（検索エンジンの仕組みを知りたい読者向けの優れた書籍。非常に詳しい）。
- [Modern Information Retrieval](http://people.ischool.berkeley.edu/~hearst/irbook/) - R. Baeza-Yates、B. Ribeiro-Neto。Addison-Wesley、1999年。
- [Information Retrieval in Practice](http://www.search-engines-book.com/) - B. Croft、D. Metzler、T. Strohman。Pearson Education、2009年。
- [Mining the Web: Analysis of Hypertext and Semi Structured Data](http://www.cse.iitb.ac.in/%7Esoumen/mining-the-web/) - S. Chakrabarti。Morgan Kaufmann、2002年。
- [Language Modeling for Information Retrieval](http://www.springer.com/prod/b/1-4020-1216-0?referer=www.wkap.nl) - W.B. Croft、J. Lafferty。Springer、2003年。（情報検索における言語モデルの側面を扱い、この領域の確率的観点を広く詳述する）。
- [Information Retrieval: A Survey](http://www.csee.umbc.edu/cadip/readings/IR.report.120600.book.pdf) - Ed Greengrass、2000年。（ディープラーニング以前の従来型情報検索を包括的に調査）。
- [Introduction to  Modern Information Retrieval]( https://www.amazon.com/Introduction-Modern-Information-Retrieval-Third/dp/185604694X) - G.G. Chowdhury。Neal-Schuman、2003年。（図書館・情報学の学生を対象とする）。
- [Text Information Retrieval Systems](https://www.amazon.com/Information-Retrieval-Systems-Library-Hardcover/dp/0123694124) - C.T. Meadow、B.R. Boyce、D.H. Kraft、C.L. Barry。Academic Press、2007年（図書館・情報科学の視点）。


## コース
- [INF384H / CS395T / INF350E: Concepts of Information Retrieval (and Web Search)](http://courses.ischool.utexas.edu/Lease_Matt/2016/Fall/INF384H/) - Matthew Lease（University of Texas at Austin）。
- [CS 276 / LING 286: Information Retrieval and Web Search](http://web.stanford.edu/class/cs276/) - Chris Manning、Pandu Nayak（Stanford University）。
- [CS 371R: Information Retrieval and Web Search](https://www.cs.utexas.edu/~mooney/ir-course/) - Raymond J. Mooney（University of Texas at Austin）。
- [CS 172: Introduction to Information Retrieval](http://www.cs.ucr.edu/~vagelis/classes/CS172/) - Vagelis Hristidis（University of California - Riverside）。
- [SIMS 240: Principles of Information Retrieval](http://www2.sims.berkeley.edu/academics/courses/is240/s06/) - Ray R. Larson（UC Berkeley）。
- [11-442 / 11-642: Search Engines](http://boston.lti.cs.cmu.edu/classes/11-642/) - Jamie Callan（CMU）。
- [600.466: Information Retrieval and Web Agents](http://www.cs.jhu.edu/%7Eyarowsky/cs466.html) - David Yarowsky（John Hopkins University）。
- [CS 435: Information Retrieval, Discovery, and Delivery](http://www.cs.princeton.edu/courses/archive/spring06/cos435/) - Andrea LaPaugh（Princeton University）。
- [Information Retrieval and Data Mining](https://www.mpi-inf.mpg.de/departments/databases-and-information-systems/teaching/winter-semester-201516/information-retrieval-and-data-mining/) - Dr. Jilles Vreeken、Prof. Dr. Gerhard Weikum（MPI）。
- [Coursera - Text Retrieval and Search Engines](https://www.coursera.org/learn/text-retrieval) - Prof. ChengXiang Zhai（University of Illinois at Urbana-Champaign）。

## ソフトウェア
- [Apache Lucene](http://lucene.apache.org/core/) - 情報検索アルゴリズムのテストに使えるオープンソース検索エンジン。Twitterはリアルタイム検索にこのコアを使用している。
- [The Lemur Project](http://www.lemurproject.org) - 情報検索・テキストマイニングソフトウェアの研究開発を支える検索エンジン、ブラウザーツールバー、テキスト分析ツール、データリソースを開発するプロジェクト。
  - [Indri Search Engine](http://www.lemurproject.org/indri.php) - Apache Luceneと競合するもう一つのオープンソース検索エンジン。
  - [Lemur Toolkit](http://www.lemurproject.org/lemur.php) - 言語モデリング、フィルタリング、分類研究向けのオープンソースツールキット。

## データセット
#### 標準IRコレクション
- [DBPedia](http://wiki.dbpedia.org/Downloads2015-10) - リンクトデータのウェブ。
- [Cranfield Collections](http://ir.dcs.gla.ac.uk/resources/test_collections/cran/) - IR分野で最初期のコレクションの一つ。統計的有意性の分析にはデータセットが小さすぎるが、パイロット実行には適している。
- [TREC Collections](http://trec.nist.gov/data.html) - TRECは大半のIR・ウェブ検索アルゴリズムで使われるベンチマークデータセット。特定タスクのテスト用データセットからなる複数のトラックがある。トラックと推奨ユースケースは次のとおり:
  - [Blog](http://trec.nist.gov/data/blog.html) - ブログ圏における情報探索行動を調査する。
  - [Chemical IR](http://trec.nist.gov/data/chem-ir.html) - 化学IR向けの大規模テストベッド構築における課題に取り組む。
  - [Clinical Decision Support](http://trec.nist.gov/data/clinical.html) - 医療症例を患者ケアに関連する情報へ結び付ける技術を調査する。
  - [Confusion](http://trec.nist.gov/data/confusion.html) - [Known Item Searching](http://trec.nist.gov/data/confusion/t5confusion.ps)問題を研究する。
  - [Contextual Suggestion](http://trec.nist.gov/data/context.html) - 複雑な情報ニーズ（コンテキストとユーザーの興味に基づく）のための検索技術を調査する。
  - [Crowdsourcing](http://trec.nist.gov/data/crowd.html) - 検索の実行・評価におけるクラウドソーシング手法を探る。
  - [Enterprise](http://trec.nist.gov/data/enterprise.html) - 組織データ上の検索を研究する。
  - [Entity](http://trec.nist.gov/data/entity.html) - ウェブデータ上でエンティティ関連の検索（エンティティとその属性の発見）を行う。
  - [Filtering](http://trec.nist.gov/data/filtering.html) - 安定した情報ニーズに対し、新規流入文書の検索対象化を二値的に決定する。
  - [Federated Web Search](http://trec.nist.gov/data/federated.html) - さまざまな検索サービスからの結果を統合する性能を研究する。
  - [Genomics](http://trec.nist.gov/data/genomics.html) - ゲノミクスデータおよび対応する文書の検索効率を研究する。
  - [HARD](http://trec.nist.gov/data/hard.html) - 検索者のコンテキストを活用して文書から高精度検索を得る。
  - [Interactive Track](http://trec.nist.gov/data/interactive.html) - テキスト検索システムにおけるユーザー対話を研究する。
  - [Knowledge base acceleration](http://trec.nist.gov/data/kba.html) - 人間のKnowledge Baseの効率を改善するアルゴリズムを研究する。
  - [Legal Track](http://trec.nist.gov/data/legal.html) - 法務ユースケースで高い再現率を持つ検索システムを研究する。
  - [Medical Track](http://trec.nist.gov/data/medical.html) - 患者記録に対する非構造化検索の性能を探る。
  - [Microblog Track](http://trec.nist.gov/data/microblog.html) - マイクロブログサイトにおけるリアルタイム情報ニーズの満足度を調べる。
  - [Million Query Track](http://trec.nist.gov/data/million.query.html) - 大量のクエリ集合に対するアドホック検索を探る。
  - [Novelty Track](http://trec.nist.gov/data/novelty.html) - 新規（非冗長）情報を見つけるシステムの能力を研究する。
  - [Question Answering Track](http://trec.nist.gov/data/qamain.html) - 文書検索を超え、事実、リスト、定義型の質問への回答を検索するシステムをテストする。
  - [Relevance Feedback Track](http://trec.nist.gov/data/relevance.feedback.html) - 関連性フィードバック過程を深く評価する。
  - [Robust Track](http://trec.nist.gov/data/robust.html) - 個別トピックの有効性を研究する。
  - [Session Track](http://trec.nist.gov/data/session.html) - 情報ニーズが変動する複数クエリセッションの測定手法を開発する。
  - [SPAM Track](http://trec.nist.gov/data/spam.html) - スパムフィルタリング手法をベンチマークする。
  - [Tasks Track](http://trec.nist.gov/data/tasks.html) - ユーザーがクエリに対して達成しようとしている可能性のあるタスクをシステムが推定できるかテストする。
  - [Temporal Summarization Track](http://trec.nist.gov/data/tempsumm.html) - 時間の経過とともにイベントに関連する情報を効率的に監視できるシステムを開発する。
  - [Terabyte Track](http://trec.nist.gov/data/terabyte.html) - 大規模コレクションに対するIRシステムのスケーラビリティをテストする。
  - [Web Track](http://trec.nist.gov/data/webmain.html) - 一般的なウェブ検索でよく見られる情報探索行動を探る。
- [GOV2 Test Collection](http://ir.dcs.gla.ac.uk/test_collections/gov2-summary.htm) - Charlie ClarkeとIan SoboroffがNISTのハードウェアとネットワークを用いて政府ウェブサイトをクロールして収集し、Nick Craswelが整形した、最大級のウェブ文書コレクションの一つ。
- [NTCIR Test Collection](http://research.nii.ac.jp/ntcir/data/data-en.html) - アドホックコレクション、中国語IRコレクション、モバイルクリックストリームコレクション、医療コレクションまで、幅広いデータセットのコレクション。主に東アジア言語とクロスリンガル情報検索に焦点を置く。
  - [CLIR Test Collections](http://research.nii.ac.jp/ntcir/permission/ntcir-6/perm-en-CLIR.html) - CJKE（中国語・日本語・韓国語・英語）間のクロスリンガルIRに使えるデータセット。次のタスクに適する:
    - Multilingual CLIR
    - Bilingual CLIR
    - Single Language CLIR
  - [Cross Language Q&A (CLQA) dataset collection](http://research.nii.ac.jp/ntcir/permission/ntcir-6/perm-en-CLQA.html) - 次のバイリンガルおよびモノリンガルをサポートする:
    - Bi-lingua
      - 日本語から英語。
      - 中国語から英語。
      - 英語から日本語。
      - 英語から中国語。
    - Mono-lingua
      - 中国語から中国語。
      - 日本語から日本語。
      - 英語から英語。
  - [Advanced Cross Linugal Information Retrieval and Question Answering (ACLIA)](http://research.nii.ac.jp/ntcir/permission/ntcir-8/perm-en-ACLIA.html) - このデータセットはクロスリンガル質問応答タスクに使用されるが、CLQAデータセットよりもタスクの複雑性が高い。
- [Conference and Labs of the Evaluation Forum (CLEF) dataset](http://www.clef-initiative.eu/dataset/test-collection) - 多言語文書コレクションを含む。テストスイートは次のとおり:
  - AdHoc - News Test suite.
  - Domain Specific Test Suite - On collections of scientific articles.
  - Question Answering Test Suite.
- [Reuters Corpora](http://trec.nist.gov/data/reuters/reuters.html) - コーパスは現在NISTを通じて利用可能。以下を含む:
  - RCV1 (Reuter's Corpus Volume 1) - 英語のニュース記事のみで構成される。
  - RCV2 (Reuter's Corpus Volume 2) - 13言語（オランダ語、フランス語、ドイツ語、中国語、日本語、ロシア語、ポルトガル語、スペイン語、ラテンアメリカのスペイン語、イタリア語、デンマーク語、ノルウェー語、スウェーデン語）の記事で構成される。記事は並列ではないことに注意。
  - TRC (Thomson Reuters Text Research Collection) - 2008-01-01 00:00:03から2009-02-28 23:54:14までの期間を対象とする1,800,370件のニュース記事からなる、比較的新しいコーパス。
- [20 Newsgroup dataset](https://kdd.ics.uci.edu/databases/20newsgroups/20newsgroups.html) - 20のニュースグループトピックから取得した20,000件のニュースグループメッセージで構成されるデータセット。
- [English Gigaword Fifth Edition](https://catalog.ldc.upenn.edu/LDC2011T07) - 見出し、日付行、記事を含む英語ニュースワイヤーテキストデータの包括的アーカイブ。
- [Document Understanding Conference (DUC) datasets](http://www-nlpir.nist.gov/projects/duc/data.html) - 過去のニュースワイヤー／論文データセット（DUC 2001 - DUC 2007）はリクエストにより利用可能。

#### 外部キュレーションリンク
- [CMU List](http://boston.lti.cs.cmu.edu/callan/Data/#DIR)
- [Stanford List](http://nlp.stanford.edu/IR-book/html/htmledition/standard-test-collections-1.html)
- [University of Tennesse Knoxville](http://web.eecs.utk.edu/research/lsi/corpa.html)

## 講演
#### 技術講演
- [Extreme Classification: A New Paradigm for Ranking & Recommendation](https://youtu.be/1X71fTx1LKA) - Manik Verma（Microsoft Research）
- [The next web](https://www.ted.com/talks/tim_berners_lee_on_the_next_web) - Tim Berners-Lee（TED Talk）[Tim Berners-LeeはWorld Wide Webを発明し、Webの標準と開発を監督するWorld Wide Web Consortium（W3C）を率いている]。
- [Is Pivot a turning point for web exploration?](https://www.ted.com/talks/gary_flake_is_pivot_a_turning_point_for_web_exploration?utm_source=tedcomshare&utm_medium=referral&utm_campaign=tedspread) - Gary Flake、MicrosoftのTechnical Fellow（TED Talks）。
- [Challenges in Building Large-Scale Information Retrieval Systems](http://videolectures.net/wsdm09_dean_cblirs/) - Jeff Dean（WSDM Conference、2009年）。
- [Knowledge-based Information Retrieval with Wikipedia](https://youtu.be/NFCZuzA4cFc) - David Wilne（The University of Waikato、2008年）。
- [Music Information Retrieval Using Locality Sensitive Hashing](https://www.youtube.com/watch?v=SghMq1xBJPI&list=PLdktw5AjQqP2gpQNgHRJaSgEkHiaVLfTi&index=24) - Steve Tjoa（RackSpace Developers）[この講演は、IRがテキストと画像だけではないことを示す]。
- [The Functional Web -- The Future of Apps and the Web](https://youtu.be/u6oqr3gMyxk) - Liron Shapira（Box Tech Talk）。
- [Information Experience - Solution to Information Overload on Web](https://youtu.be/EnvtsbCfiAI) - Doug Imbruce（Techcrunch Disrupt）[Doug Imbruceは、2013年にYahoo!に買収されたニューヨークのテクノロジースタートアップQwiki, Inc.の創業者]。
- [Internet Privacy](https://youtu.be/tnsyhKHalGs) - Dr. Alma Whitten（Google Brussels Tech Talk）。


#### 哲学的講演
- [The moral bias behind your search results](https://www.ted.com/talks/andreas_ekstrom_the_moral_bias_behind_your_search_results) - Andreas Ekström（スウェーデンの著者・ジャーナリスト、TED Talk）。
- [Beware online "filter bubbles"](https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles?language=en) - Eli Pariser（The Filter Bubbleの著者、TED Talk）。
- [Think your email's private? Think again](https://www.ted.com/talks/andy_yen_think_your_email_s_private_think_again) - Andy Yen（CERN、TED Talk）[この講演は検索エンジンが侵害するプライバシーと、その保護方法を扱う]。
- [Do we have the right to be forgotten?](https://youtu.be/YO0lbdhF30g) - Michael Douglas [TEDx SouthBank]。
- [The case for anonymity online](https://www.ted.com/talks/christopher_m00t_poole_the_case_for_anonymity_online?utm_source=tedcomshare&utm_medium=referral&utm_campaign=tedspread) - Christopher "moot" Poole"（TED Talks）[Christopher "moot" Pooleは、匿名の住人がウェブで最も不可解かつ影響力の大きいサブカルチャーを生み出した匿名画像掲示板4chanの創設者]。

## 会議
- Web Search and Data Mining Conference - [WSDM](http://www.wsdm-conference.org).
- Special Interests Group on Information Retrieval - [SIGIR](http://sigir.org).
- Text REtrieval Conference - [TREC](http://trec.nist.gov).
- European Conference on Information Retrieval - [ECIR](http://irsg.bcs.org/ecir.php).
- World Wide Web Conference - [WWW](http://www.iw3c2.org).
- Conference on Information and Knowledge Management - [CIKM](http://www.cikmconference.org).
- Forum for Information Retrieval Evaluation - [FIRE](http://fire.irsi.res.in/fire/2016/home).
- Conference and Labs of the Evaluation Forum - [CLEF](http://www.clef-initiative.eu/).
- NII Testsbeds and Community for Information access Research - [NTCIR](http://research.nii.ac.jp/ntcir/index-en.html).

## ブログ
- [Information Retrieval and the Web](http://research.google.com/pubs/InformationRetrievalandtheWeb.html) - Google Research。
- [IR Thoughts](https://irthoughts.wordpress.com) - Dr. Edel Garcia。

#### 注目の読み物
- [Deep Neural Network Learns to Judge Books by Their Covers](https://www.technologyreview.com/s/602807/deep-neural-network-learns-to-judge-books-by-their-covers/?utm_campaign=socialflow&utm_source=facebook&utm_medium=post) - 情報抽出。
- [Can Deep Learning help solve Deep Learning](http://www.theverge.com/2016/11/7/13551210/ai-deep-learning-lip-reading-accuracy-oxford) - 読唇からの情報検索。
- [To reduce biases in machine learning start with openly discussing the problem](https://enterprisersproject.com/article/2016/9/reduce-biases-machine-learning-start-openly-discussing-problem?sc_cid=70160000000q8YTAAY) - 関連性におけるバイアス。
- [Whoa, Google’s AI Is Really Good at Pictionary](https://www.wired.com/2016/11/woah-googles-ai-really-good-pictionary/) - スケッチベース検索。
- [Neural Network Learns to Identify Criminals by Their Faces](https://www.technologyreview.com/s/602955/neural-network-learns-to-identify-criminals-by-their-faces/?utm_campaign=socialflow&utm_source=facebook&utm_medium=post) - 情報抽出。


## ライセンス
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Harshal Priyadarshi](http://www.harshalpriyadarshi.com)およびすべてのコントリビューターは、この作品に関するすべての著作権および関連・近接権を放棄しています。
