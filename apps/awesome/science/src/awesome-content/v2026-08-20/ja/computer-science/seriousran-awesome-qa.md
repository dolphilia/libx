---
title: "Awesome Question Answering"
description: "Question Answeringを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-seriousran-awesome-qa-readme-md"
---

# Awesome Question Answering

Question Answeringを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次




- [最近の動向](#recent-trends)
- [QAについて](#about-qa)
- [主な出来事](#events)
- [システム](#systems)
- [QAコンペティション](#competitions-in-qa)
- [出版物](#publications)
- [コード](#codes)
- [講義](#lectures)
- [スライド](#slides)
- [データセット集](#dataset-collections)
- [データセット](#datasets)
- [書籍](#books)
- [リンク](#links)



## 最近の動向
### 最近のQAモデル
- DilBert: Delaying Interaction Layers in Transformer-based Encoders for Efficient Open Domain Question Answering (2020)
  - 論文: https://arxiv.org/pdf/2010.08422.pdf
  - GitHub: https://github.com/wissam-sib/dilbert
- UnifiedQA: Crossing Format Boundaries With a Single QA System (2020)
  - Demo: https://unifiedqa.apps.allenai.org/
- ProQA: Resource-efficient method for pretraining a dense corpus index for open-domain QA and IR. (2020)
  - 論文: https://arxiv.org/pdf/2005.00038.pdf
  - GitHub: https://github.com/xwhan/ProQA
- TYDI QA: A Benchmark for Information-Seeking Question Answering in Typologically Diverse Languages (2020)
  - 論文: https://arxiv.org/ftp/arxiv/papers/2003/2003.05002.pdf
- Retrospective Reader for Machine Reading Comprehension
  - 論文: https://arxiv.org/pdf/2001.09694v2.pdf
- TANDA: Transfer and Adapt Pre-Trained Transformer Models for Answer Sentence Selection (AAAI 2020)
  - 論文: https://arxiv.org/pdf/1911.04118.pdf
### 最近の言語モデル
- [ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators](https://openreview.net/pdf?id=r1xMH1BtvB) - ケビン・クラークら、ICLR、2020。
- [TinyBERT: Distilling BERT for Natural Language Understanding](https://openreview.net/pdf?id=rJx0Q6EFPB) - ショウキ・ジョーら、ICLR、2020。
- [MINILM: Deep Self-Attention Distillation for Task-Agnostic Compression of Pre-Trained Transformers](https://arxiv.org/abs/2002.10957) - ウェンホイ・ワンガら、arXiv、2020。
- [T5: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://arxiv.org/abs/1910.10683) - コリント・ラフェルら、arXivプレプリント、2019。
- [ERNIE: Enhanced Language Representation with Informative Entities](https://arxiv.org/abs/1905.07129) - チェンヤン・チャングら、ACL、2019。
- [XLNet: Generalized Autoregressive Pretraining for Language Understanding](https://arxiv.org/abs/1906.08237) - チリン・ヤンら、arXivプレプリント、2019。
- [ALBERT: A Lite BERT for Self-supervised Learning of Language Representations](https://arxiv.org/abs/1909.11942) - 蘭真忠ら、arXiv予稿、2019年。
- [RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/abs/1907.11692) - 劉尹漢ら、arXiv予稿、2019年。
- [DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter](https://arxiv.org/pdf/1910.01108.pdf) - ヴァイクター・サンハら、arXiv、2019年。
- [SpanBERT: Improving Pre-training by Representing and Predicting Spans](https://arxiv.org/pdf/1907.10529v3.pdf) - ジョシ・マンドルら、TACL、2019年。
- [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805) - デビリン・ジャクブら、NAACL 2019、2018年。
### AAAI 2020
  - [TANDA: Transfer and Adapt Pre-Trained Transformer Models for Answer Sentence Selection](https://arxiv.org/pdf/1911.04118.pdf) - AAAI 2020のQA関連論文です。
### ACL 2019
  - [Overview of the MEDIQA 2019 Shared Task on Textual Inference,
Question Entailment and Question Answering](https://www.aclweb.org/anthology/W19-5039), Asma Ben Abacha, et al., ACL-W 2019, Aug 2019.
  - [Towards Scalable and Reliable Capsule Networks for Challenging NLP Applications](https://arxiv.org/pdf/1906.02829v1.pdf) - 趙偉ら、ACL 2019、2019年6月。
  - [Cognitive Graph for Multi-Hop Reading Comprehension at Scale](https://arxiv.org/pdf/1905.05460v2.pdf) - 明丁ら、ACL 2019、6月2019。
  - [Real-Time Open-Domain Question Answering with Dense-Sparse Phrase Index](https://arxiv.org/abs/1906.05807) - 申敏俊ら、ACL 2019、6月2019。
  - [Unsupervised Question Answering by Cloze Translation](https://arxiv.org/abs/1906.04980) - パトリック・レーウィスら、ACL 2019、6月2019。
  - [SemEval-2019 Task 10: Math Question Answering](https://www.aclweb.org/anthology/S19-2153) - マーカス・ホプキンスら、ACL-W 2019、6月2019。
  - [Improving Question Answering over Incomplete KBs with Knowledge-Aware Reader](https://arxiv.org/abs/1905.07098) - 熊文漢ら、ACL 2019、5月2019。
  - [Matching Article Pairs with Graphical Decomposition and Convolutions](https://arxiv.org/pdf/1802.07459v2.pdf) - 劉邦ら、ACL 2019、5月2019。
  - [Episodic Memory Reader: Learning what to Remember for Question Answering from Streaming Data](https://arxiv.org/abs/1903.06164) - Moonsu Han 他、ACL 2019、2019年3月。
  - [Natural Questions: a Benchmark for Question Answering Research](https://ai.google/research/pubs/pub47761) - Tom Kwiatkowski 他、TACL 2019、2019年1月。
  - [Textbook Question Answering with Multi-modal Context Graph Understanding and Self-supervised Open-set Comprehension](https://arxiv.org/abs/1811.00232) - Daesik Kim 他、ACL 2019、2018年11月。
### EMNLP-IJCNLP 2019
  - [Language Models as Knowledge Bases?](https://arxiv.org/pdf/1909.01066v2.pdf) - Fabio Petron 他、EMNLP-IJCNLP 2019、2019年9月。
  - [LXMERT: Learning Cross-Modality Encoder Representations from Transformers](https://arxiv.org/pdf/1908.07490v3.pdf) - Hao Tan 他、EMNLP-IJCNLP 2019、2019年12月。
  - [Answering Complex Open-domain Questions Through Iterative Query Generation](https://arxiv.org/pdf/1910.07000v1.pdf) - Peng Qi 他、EMNLP-IJCNLP 2019、2019年10月。
  - [KagNet: Knowledge-Aware Graph Networks for Commonsense Reasoning](https://arxiv.org/pdf/1909.02151v1.pdf) - リン ビル・ユチェン 他、EMNLP-IJCNLP 2019、9月2019。
  - [Mixture Content Selection for Diverse Sequence Generation](https://arxiv.org/pdf/1909.01953v1.pdf) - チョ・ジャエミン 他、EMNLP-IJCNLP 2019、9月2019。
  - [A Discrete Hard EM Approach for Weakly Supervised Question Answering](https://arxiv.org/pdf/1909.04849v1.pdf) - ミン・セウォン 他、EMNLP-IJCNLP 2019、9月2019。
### Arxiv
  - [Investigating the Successes and Failures of BERT for Passage Re-Ranking](https://arxiv.org/abs/1905.01758) - パディジェラ・ハーシス 他、arXivプレプリント、5月2019。
  - [BERT with History Answer Embedding for Conversational Question Answering](https://arxiv.org/abs/1905.05412) - ク・チェン 他、arXivプレプリント、5月2019。
  - [Understanding the Behaviors of BERT in Ranking](https://arxiv.org/abs/1904.07531) - キオ・ユファン 他、arXivプレプリント、4月2019。
  - [BERT Post-Training for Review Reading Comprehension and Aspect-based Sentiment Analysis](https://arxiv.org/abs/1904.02232) - 、胡徐ら、arXiv予備論文、2019年4月。
  - [End-to-End Open-Domain Question Answering with BERTserini](https://arxiv.org/abs/1902.01718) - 、楊偉ら、arXiv予備論文、2019年2月。
  - [A BERT Baseline for the Natural Questions](https://arxiv.org/abs/1901.08634) - 、クリス・アルベーリら、arXiv予備論文、2019年1月。
  - [Passage Re-ranking with BERT](https://arxiv.org/abs/1901.04085) - 、ロドリゴ・ノゲイラら、arXiv予備論文、2019年1月。
  - [SDNet: Contextualized Attention-based Deep Network for Conversational Question Answering](https://arxiv.org/abs/1812.03593) - 、朱成光ら、arXiv、2018年12月。
### データセット
  - [ELI5: Long Form Question Answering](https://arxiv.org/abs/1907.09190) - QAデータセットに関する研究です。
  - [CODAH: An Adversarially-Authored Question Answering Dataset for
Common Sense](https://www.aclweb.org/anthology/W19-2008.pdf), Michael Chen, et al., RepEval 2019, Jun 2019.
  
## QAについて
### QAの種類
- 単一ターンQA：文脈を考慮せずに回答します
- 会話型QA：それまでの会話ターンを利用します
#### QAの下位分類
- 知識ベースQA
- 表・リストベースQA
- テキストベースQA
- コミュニティベースQA
- 視覚QA

### QAシステムの前処理における分析と構文解析
言語分析
  1. [Morphological analysis](https://www.cs.bham.ac.uk/~pjh/sem1a5/pt2/pt2_intro_morphology.html)
  2. [Named Entity Recognition(NER)](https://github.com/seriousran/awesome-qa/blob/b5d2f5f3030c35b772e2c0064cf896377b913724/mds/named-entity-recognition.md)
  3. 同音異義語・多義語分析
  4. 統語解析（依存構造解析）
  5. 意味認識

### 多くのQAシステムを構成する3要素
1. 事実抽出 <br/>
    1. エンティティ抽出 <br/>
        1. [Named-Entity Recognition(NER)](https://github.com/seriousran/awesome-qa/blob/b5d2f5f3030c35b772e2c0064cf896377b913724/mds/named-entity-recognition.md)
    2. [Relation Extraction](https://github.com/seriousran/awesome-qa/blob/b5d2f5f3030c35b772e2c0064cf896377b913724/mds/relation-extraction.md) <br/>
2. 質問の理解
3. 回答の生成

## 主な出来事
- Wolfram Alphaが2009年に回答エンジンを公開しました。
- IBM Watsonシステムが2011年に *[Jeopardy!](https://www.jeopardy.com)* のトップチャンピオンを破りました。
- AppleのSiriが2011年にWolfram Alphaの回答エンジンを統合しました。
- Googleは2012年にFreebase知識ベースを活用したKnowledge Graphを公開し、QAを導入しました。
- Amazon Echo／Alexa（2015年）、Google Home／Google Assistant（2016年）、INVOKE／MS Cortana（2017年）、HomePod（2017年）

## システム
- [IBM Watson](https://www.ibm.com/watson/) - 、最先端の性能を達成。
- [Facebook DrQA](https://research.fb.com/downloads/drqa/) - SQuAD1.0データセットに適用されている。SQuAD2.0データセットはリリースされたが、DrQAはまだテストされていない。
- [MIT media lab's Knowledge graph](http://conceptnet.io/) - 自由に利用できる意味ネットワークであり、コンピュータが人々が使う語の意味を理解するのを助けるように設計されている。

## QAコンペティション

|   | データセット | 言語 | 主催者 | 開始年 | 首位 | モデル | 状態 | 人間の性能超過 |
|---|------------------|---------------|---------------------|-------|-------------------------|-------------------------|--------|------------------------|
| 0 | [Story Cloze Test](http://cs.rochester.edu/~nasrinm/files/Papers/lsdsem17-shared-task.pdf) | English       | Univ. of Rochester    | 2016 | msap                   | Logistic regression | Closed | x                      |
| 1 | MS MARCO         | English       | Microsoft           | 2016  | YUANFUDAO research NLP  | MARS                    | Closed | o                      |
| 2 | MS MARCO V2      | English       | Microsoft           | 2018  | NTT Media Intelli. Lab. | Masque Q&A Style        | Opened | x                      |
| 3 | [SQuAD](https://arxiv.org/abs/1606.05250)            | English       | Univ. of Stanford   | 2018  | XLNet (single model)  |XLNet Team | Closed | o                      |
| 4 | [SQuAD 2.0](https://rajpurkar.github.io/SQuAD-explorer/)        | English       | Univ. of Stanford   | 2018  | PINGAN Omni-Sinitic | ALBERT + DAAF + Verifier (ensemble) | Opened | o                      |
| 5 | [TriviaQA](http://nlp.cs.washington.edu/triviaqa/)         | English       | Univ. of Washington | 2017  | Ming Yan                | -                       | Closed | -                      |
| 6 | [decaNLP](https://decanlp.com/)          | English       | Salesforce Research | 2018  | Salesforce Research     | MQAN                    | Closed | x                      |
| 7 | [DuReader Ver1.](https://ai.baidu.com/broad/introduction)          | Chinese       | Baidu               | 2015  | Tryer                    | T-Reader (single)       | Closed | x                      |
| 8 | [DuReader Ver2.](https://ai.baidu.com/broad/introduction)          | Chinese       | Baidu               | 2017  | renaissance             | AliReader               | Opened | -                      |
| 9 | [KorQuAD](https://korquad.github.io/KorQuad%201.0/)    | Korean     | LG CNS AI Research | 2018  | Clova AI LaRva Team      | LaRva-Kor-Large+ + CLaF (single)  | Closed | o                      |
| 10 | [KorQuAD 2.0](https://korquad.github.io/)    | Korean     | LG CNS AI Research | 2019  | Kangwon National University | KNU-baseline(single model) | Opened | x                      |
| 11 | [CoQA](https://stanfordnlp.github.io/coqa/)    | English     | Univ. of Stanford | 2018  | Zhuiyi Technology | RoBERTa + AT + KD (ensemble) | Opened | o                      |

## 出版物
- 論文
  - ["Learning to Skim Text"](https://arxiv.org/pdf/1704.06877.pdf), Adams Wei Yu, Hongrae Lee, Quoc V. Le, 2017.
    : テキスト中の必要な部分だけを表示します
  - ["Deep Joint Entity Disambiguation with Local Neural Attention"](https://arxiv.org/pdf/1704.04920.pdf), Octavian-Eugen Ganea and Thomas Hofmann, 2017.
  - ["BI-DIRECTIONAL ATTENTION FLOW FOR MACHINE COMPREHENSION"](https://arxiv.org/pdf/1611.01603.pdf), Minjoon Seo, Aniruddha Kembhavi, Ali Farhadi, Hananneh Hajishirzi, ICLR, 2017.
  - ["Capturing Semantic Similarity for Entity Linking with Convolutional Neural Networks"](http://nlp.cs.berkeley.edu/pubs/FrancisLandau-Durrett-Klein_2016_EntityConvnets_paper.pdf), Matthew Francis-Landau, Greg Durrett and Dan Klei, NAACL-HLT 2016.
    - https://GitHub.com/matthewfl/nlp-entity-convnet
  - ["Entity Linking with a Knowledge Base: Issues, Techniques, and Solutions"](https://ieeexplore.ieee.org/document/6823700/), Wei Shen, Jianyong Wang, Jiawei Han, IEEE Transactions on Knowledge and Data Engineering(TKDE), 2014.
  - ["Introduction to “This is Watson"](https://ieeexplore.ieee.org/document/6177724/), IBM Journal of Research and Development, D. A. Ferrucci, 2012.
  - ["A survey on question answering technology from an information retrieval perspective"](https://www.sciencedirect.com/science/article/pii/S0020025511003860), Information Sciences, 2011.
  - ["Question Answering in Restricted Domains: An Overview"](https://www.mitpressjournals.org/doi/abs/10.1162/coli.2007.33.1.41), Diego Mollá and José Luis Vicedo, Computational Linguistics, 2007
  - ["Natural language question answering: the view from here"](), L Hirschman, R Gaizauskas, natural language engineering, 2001.
  - エンティティ曖昧性解消／エンティティリンキング

## コード
- [BiDAF](https://github.com/allenai/bi-att-flow) - 双方向注意フロー（BIDAF）ネットワークは、文の異なる粒度レベルにおける文脈を表現する多段階階層プロセスであり、早期の要約なしにクエリに意識を持つ文脈表現を獲得するための双方向注意フロー機構を用いている。
  - Official; Tensorflow v1.2
  - [Paper](https://arxiv.org/pdf/1611.01603.pdf)
- [QANet](https://github.com/NLPLearn/QANet) - 質問と回答のアーキテクチャは再帰ネットワークを必要としない。そのエンコーダは、すべてのコンボリューションと自己注意から構成されており、コンボリューションは局所的な相互作用をモデル化し、自己注意はグローバルな相互作用をモデル化する。
  - Google; Unofficial; Tensorflow v1.5
  - [Paper](#qanet)
- [R-Net](https://github.com/HKUST-KnowComp/R-Net) - reading comprehension style question answering, which aims to answer questions from a given passage向けのAn end-to-end neural networks model。
  - MS; Unofficially by HKUST; Tensorflow v1.5
  - [Paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/05/r-net.pdf)
- [R-Net-in-Keras](https://github.com/YerevaNN/R-NET-in-Keras) - KerasでR-NETを再実装した。
  - MS; Unofficial; Keras v2.0.6
  - [Paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/05/r-net.pdf)
- [DrQA](https://github.com/hitvoice/DrQA) - reading comprehension applied to open-domain question answering向けのDrQA is a system。
  - Facebook; Official; Pytorch v0.4
  - [Paper](#drqa)
- [BERT](https://github.com/google-research/bert) - Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers向けのA new language representation model which stands。
  - Google; Official implementation; Tensorflow v1.11.0
  - [Paper](https://arxiv.org/abs/1810.04805)

## 講義
- [Question Answering - Natural Language Processing](https://youtu.be/Kzi6tE4JaGo) - 質問応答を扱う講義です。

## スライド
- [Question Answering with Knowledge Bases, Web and Beyond](https://github.com/scottyih/Slides/blob/master/QA%20Tutorial.pdf) - スコット・ウェンタウ・イとハオ・マ | ミシガン・リサーチ | 2016年
- [Question Answering](https://hpi.de/fileadmin/user_upload/fachgebiete/plattner/teaching/NaturalLanguageProcessing/NLP2017/NLP8_QuestionAnswering.pdf) - ハソ・プラッターファン・インスティテュート マリアナ・ネヴス 医師 2017年

## データセット集
- [NLIWOD's Question answering datasets](https://github.com/dice-group/NLIWOD/tree/master/qa.datasets)
- [karthinkncode's Datasets for Natural Language Processing](https://github.com/karthikncode/nlp-datasets)

## データセット
- [AI2 Science Questions v2.1(2017)](http://data.allenai.org/ai2-science-questions/)
  - データセットの概要です。
  - 論文: http://ai2-website.s3.amazonaws.com/publications/AI2ReasoningChallenge2018.pdf
- [Children's Book Test](https://uclmr.github.io/ai4exams/data.html)
- データセットの概要です。
- [CODAH Dataset](https://github.com/Websail-NU/CODAH)
- [DeepMind Q&A Dataset; CNN/Daily Mail](https://github.com/deepmind/rc-data)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1506.03340
- [ELI5](https://github.com/facebookresearch/ELI5)
  - 論文: https://arxiv.org/abs/1907.09190
- [GraphQuestions](https://github.com/ysu1989/GraphQuestions)
  - データセットの概要です。
- [LC-QuAD](http://sda.cs.uni-bonn.de/projects/qa-dataset/)
  - データセットの概要です。
- [MS MARCO](http://www.msmarco.org/dataset.aspx)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1611.09268
- [MultiRC](https://cogcomp.org/multirc/)
  - データセットの概要です。
  - 論文: http://cogcomp.org/page/publication_view/833 
- [NarrativeQA](https://github.com/deepmind/narrativeqa)
  - データセットの概要です。
  - 論文: https://arxiv.org/pdf/1712.07040v1.pdf
- [NewsQA](https://github.com/Maluuba/newsqa)
  - データセットの概要です。
  - 論文: https://arxiv.org/pdf/1611.09830.pdf
- [Qestion-Answer Dataset by CMU](http://www.cs.cmu.edu/~ark/QA-data/)
  - データセットの概要です。
- [SQuAD1.0](https://rajpurkar.github.io/SQuAD-explorer/)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1606.05250
- [SQuAD2.0](https://rajpurkar.github.io/SQuAD-explorer/)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1806.03822
- [Story cloze test](http://cs.rochester.edu/nlp/rocstories/)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1604.01696
- [TriviaQA](http://nlp.cs.washington.edu/triviaqa/)
  - データセットの概要です。
  - 論文: https://arxiv.org/abs/1705.03551
- [WikiQA](https://www.microsoft.com/en-us/download/details.aspx?id=52419&from=https%3A%2F%2Fresearch.microsoft.com%2Fen-US%2Fdownloads%2F4495da01-db8c-4041-a7f6-7984a4f6a905%2Fdefault.aspx)
  - データセットの概要です。
  
### IBM Watson DeepQA研究チームの5年間の出版物
- 2015
  - "Automated Problem List Generation from Electronic Medical Records in IBM Watson", Murthy Devarakonda, Ching-Huei Tsou, IAAI, 2015.
  - "Decision Making in IBM Watson Question Answering", J. William Murdock, Ontology summit, 2015.
  - ["Unsupervised Entity-Relation Analysis in IBM Watson"](http://www.cogsys.org/papers/ACS2015/article12.pdf), Aditya Kalyanpur, J William Murdock, ACS, 2015.
  - "Commonsense Reasoning: An Event Calculus Based Approach", E T Mueller, Morgan Kaufmann/Elsevier, 2015.
- 2014
  - "Problem-oriented patient record summary: An early report on a Watson application", M. Devarakonda, Dongyang Zhang, Ching-Huei Tsou, M. Bornea, Healthcom, 2014.
  - ["WatsonPaths: Scenario-based Question Answering and Inference over Unstructured Information"](http://domino.watson.ibm.com/library/Cyberdig.nsf/1e4115aea78b6e7c85256b360066f0d4/088f74984a07645485257d5f006ace96!OpenDocument&Highlight=0,RC25489), Adam Lally, Sugato Bachi, Michael A. Barborak, David W. Buchanan, Jennifer Chu-Carroll, David A. Ferrucci*, Michael R. Glass, Aditya Kalyanpur, Erik T. Mueller, J. William Murdock, Siddharth Patwardhan, John M. Prager, Christopher A. Welty, IBM Research Report RC25489, 2014.
  - ["Medical Relation Extraction with Manifold Models"](http://acl2014.org/acl2014/P14-1/pdf/P14-1078.pdf), Chang Wang and James Fan, ACL, 2014.

### Microsoft Researchの5年間の出版物
- 2018
  - "Characterizing and Supporting Question Answering in Human-to-Human Communication", Xiao Yang, Ahmed Hassan Awadallah, Madian Khabsa, Wei Wang, Miaosen Wang, ACM SIGIR, 2018.
  - ["FigureQA: An Annotated Figure Dataset for Visual Reasoning"](https://arxiv.org/abs/1710.07300), Samira Ebrahimi Kahou, Vincent Michalski, Adam Atkinson, Akos Kadar, Adam Trischler, Yoshua Bengio, ICLR, 2018
- 2017
  - "Multi-level Attention Networks for Visual Question Answering", Dongfei Yu, Jianlong Fu, Tao Mei, Yong Rui, CVPR, 2017.
  - "A Joint Model for Question Answering and Question Generation", Tong Wang, Xingdi (Eric) Yuan, Adam Trischler, ICML, 2017.
  - "Two-Stage Synthesis Networks for Transfer Learning in Machine Comprehension", David Golub, Po-Sen Huang, Xiaodong He, Li Deng, EMNLP, 2017.
  - "Question-Answering with Grammatically-Interpretable Representations", Hamid Palangi, Paul Smolensky, Xiaodong He, Li Deng, 
  - "Search-based Neural Structured Learning for Sequential Question Answering", Mohit Iyyer, Wen-tau Yih, Ming-Wei Chang, ACL, 2017.
- 2016
  - ["Stacked Attention Networks for Image Question Answering"](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Yang_Stacked_Attention_Networks_CVPR_2016_paper.html), Zichao Yang, Xiaodong He, Jianfeng Gao, Li Deng, Alex Smola, CVPR, 2016.
  - ["Question Answering with Knowledge Base, Web and Beyond"](https://www.microsoft.com/en-us/research/publication/question-answering-with-knowledge-base-web-and-beyond/), Yih, Scott Wen-tau and Ma, Hao, ACM SIGIR, 2016.
  - ["NewsQA: A Machine Comprehension Dataset"](https://arxiv.org/abs/1611.09830), Adam Trischler, Tong Wang, Xingdi Yuan, Justin Harris, Alessandro Sordoni, Philip Bachman, Kaheer Suleman, RepL4NLP, 2016.
  - ["Table Cell Search for Question Answering"](https://dl.acm.org/citation.cfm?id=2883080), Sun, Huan and Ma, Hao and He, Xiaodong and Yih, Wen-tau and Su, Yu and Yan, Xifeng, WWW, 2016.
- 2015
  - ["WIKIQA: A Challenge Dataset for Open-Domain Question Answering"](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/YangYihMeek_EMNLP-15_WikiQA.pdf), Yi Yang, Wen-tau Yih, and Christopher Meek, EMNLP, 2015.
  - ["Web-based Question Answering: Revisiting AskMSR"](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/AskMSRPlusTR_082815.pdf), Chen-Tse Tsai, Wen-tau Yih, and Christopher J.C. Burges, MSR-TR, 2015.
  - ["Open Domain Question Answering via Semantic Enrichment"](https://dl.acm.org/citation.cfm?id=2741651), Huan Sun, Hao Ma, Wen-tau Yih, Chen-Tse Tsai, Jingjing Liu, and Ming-Wei Chang, WWW, 2015.
- 2014
  - ["An Overview of Microsoft Deep QA System on Stanford WebQuestions Benchmark"](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Microsoft20Deep20QA.pdf), Zhenghao Wang, Shengquan Yan, Huaming Wang, and Xuedong Huang, MSR-TR, 2014.
  - ["Semantic Parsing for Single-Relation Question Answering"](), Wen-tau Yih, Xiaodong He, Christopher Meek, ACL, 2014.
  
### Google AIの5年間の出版物
- 2018
  - Google QA <a name="qanet"></a>
    - ["QANet: Combining Local Convolution with Global Self-Attention for Reading Comprehension"](https://openreview.net/pdf?id=B14TlG-RW), Adams Wei Yu, David Dohan, Minh-Thang Luong, Rui Zhao, Kai Chen, Mohammad Norouzi, Quoc V. Le, ICLR, 2018.
    - ["Ask the Right Questions: Active Question Reformulation with Reinforcement Learning"](https://openreview.net/pdf?id=S1CChZ-CZ), Christian Buck and Jannis Bulian and Massimiliano Ciaramita and Wojciech Paweł Gajewski and Andrea Gesmundo and Neil Houlsby and Wei Wang, ICLR, 2018.
    - ["Building Large Machine Reading-Comprehension Datasets using Paragraph Vectors"](https://arxiv.org/pdf/1612.04342.pdf), Radu Soricut, Nan Ding, 2018.
  - Sentence representation
    - ["An efficient framework for learning sentence representations"](https://arxiv.org/pdf/1803.02893.pdf), Lajanugen Logeswaran, Honglak Lee, ICLR, 2018.
  - ["Did the model understand the question?"](https://arxiv.org/pdf/1805.05492.pdf), Pramod K. Mudrakarta and Ankur Taly and Mukund Sundararajan and Kedar Dhamdhere, ACL, 2018.
- 2017
  - ["Analyzing Language Learned by an Active Question Answering Agent"](https://arxiv.org/pdf/1801.07537.pdf), Christian Buck and Jannis Bulian and Massimiliano Ciaramita and Wojciech Gajewski and Andrea Gesmundo and Neil Houlsby and Wei Wang, NIPS, 2017.
  - ["Learning Recurrent Span Representations for Extractive Question Answering"](https://arxiv.org/pdf/1611.01436.pdf), Kenton Lee and Shimi Salant and Tom Kwiatkowski and Ankur Parikh and Dipanjan Das and Jonathan Berant, ICLR, 2017.
  - Identify the same question
    - ["Neural Paraphrase Identification of Questions with Noisy Pretraining"](https://arxiv.org/pdf/1704.04565.pdf), Gaurav Singh Tomar and Thyago Duque and Oscar Täckström and Jakob Uszkoreit and Dipanjan Das, SCLeM, 2017.
- 2014
  - "Great Question! Question Quality in Community Q&A", Sujith Ravi and Bo Pang and Vibhor Rastogi and Ravi Kumar, ICWSM, 2014.

### Facebook AI Researchの5年間の出版物
- 2018
  - [Embodied Question Answering](https://research.fb.com/publications/embodied-question-answering/), Abhishek Das, Samyak Datta, Georgia Gkioxari, Stefan Lee, Devi Parikh, and Dhruv Batra, CVPR, 2018
  - [Do explanations make VQA models more predictable to a human?](https://research.fb.com/publications/do-explanations-make-vqa-models-more-predictable-to-a-human/), Arjun Chandrasekaran, Viraj Prabhu, Deshraj Yadav, Prithvijit Chattopadhyay, and Devi Parikh, EMNLP, 2018
  - [Neural Compositional Denotational Semantics for Question Answering](https://research.fb.com/publications/neural-compositional-denotational-semantics-for-question-answering/), Nitish Gupta, Mike Lewis, EMNLP, 2018
- 2017
  - DrQA <a name="drqa"></a>
    - [Reading Wikipedia to Answer Open-Domain Questions](https://cs.stanford.edu/people/danqi/papers/acl2017.pdf), Danqi Chen, Adam Fisch, Jason Weston & Antoine Bordes, ACL, 2017.

## 書籍
- Natural Language Question Answering system Paperback - Boris Galitsky (2003)
- New Directions in Question Answering - Mark T. Maybury (2004)
- Part 3. 5. Question Answering in The Oxford Handbook of Computational Linguistics - Sanda Harabagiu and Dan Moldovan (2005)
- Chap.28 Question Answering in Speech and Language Processing - Daniel Jurafsky & James H. Martin (2017)

## リンク
- [Building a Question-Answering System from Scratch— Part 1](https://towardsdatascience.com/building-a-question-answering-system-part-1-9388aadff507)
- [Qeustion Answering with Tensorflow By Steven Hewitt, O'REILLY, 2017](https://www.oreilly.com/ideas/question-answering-with-tensorflow)
- [Why question answering is hard](http://nicklothian.com/blog/2014/09/25/why-question-answering-is-hard/)


## コントリビューション

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/seriousran/awesome-qa/blob/b5d2f5f3030c35b772e2c0064cf896377b913724/contributing.md)をお読みください。

## ライセンス
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/share-your-work/public-domain/cc0/)

法律で認められる限り、メンテナーの [seriousmac](https://github.com/seriousmac) は本作品に関するすべての著作権および関連・隣接権を放棄しています。
