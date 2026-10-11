---
title: "Awesome Biomedical Information Extraction"
description: "生物医学情報抽出の研究概観、自然言語処理ツールとモデル、注釈付きデータセット、オントロジー、データモデルの一覧。"
licenseSource: "github-caufieldjh-awesome-bioie-readme-md"
---

# Awesome Biomedical Information Extraction<a id="awesome-bioie-logo"></a>

BioIE（生物医学情報抽出）は、非構造化データ、または構造が一貫していない生物学・臨床・生物医学のデータから構造化された情報を取り出す技術です。対象は専門用語で書かれたテキスト文書であることが多く、抽出した情報が検証可能で、複数の情報源の間で整合していれば、知識として扱えます。そのためには、ほかの非構造化データ向けに開発された手法を調整する必要があります。ここでは研究概観、研究グループ、学術誌とイベント、教材、コードライブラリ、ツール、モデル、データセット、オントロジー、データモデルを紹介します。

固定原文は、BERTや大規模言語モデル（LLM）の登場による大きな変化に触れ、GPT-3/4、LLAMA2/3、Geminiなどを例に挙げています。選定では、無料で利用でき、ライセンス上の要件が少ない資料を優先し、手法やデータセットは一般にアクセスでき、継続的に保守されていることを求めています。利用可否、保守状況、アクセス条件、研究グループの主導者に関する説明は、固定原文時点の記述です。

関連リストとして[awesome-nlp](https://github.com/keon/awesome-nlp)、[awesome-biology](https://github.com/raivivek/awesome-biology)、[Awesome-Bioinformatics](https://github.com/danielecook/Awesome-Bioinformatics)も参照できます。

## 研究概観<a id="research-overviews"></a>

### 生物医学情報抽出のLLM<a id="llms-in-biomedical-ie"></a><a id="生物医学ieのllm"></a>
* [医療における大規模言語モデル：包括的ベンチマーク](http://dx.doi.org/10.1101/2024.04.24.24306315) - 医療分野の言語タスクに適用した16種類のLLMを、統計的手法と人手で評価。
* [大規模言語モデルの研究動向と臨床的有用性：スコーピングレビュー](https://doi.org/10.1186/s12911-024-02459-6) - 2024年3月時点の、医学におけるLLMの応用を概観するレビュー。
* [医療における大規模言語モデルの倫理・規制上の課題](https://doi.org/10.1016/s2589-7500(24)00061-x) - 生物医学分野へのLLM応用で生じる倫理的問題のレビュー。
* [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](http://dx.doi.org/10.1145/3442188.3445922) - 言語モデルの役割、応用、リスクを論じた、頻繁に参照され、なお意義のある論文。

### LLM以前の概観<a id="pre-llm-overviews"></a>
* [クラウド上の生物医学情報学：心血管医学を進める宝探し](https://www.ahajournals.org/doi/full/10.1161/CIRCRESAHA.117.310967) - BioIEやバイオインフォマティクスのワークフローを、心血管の健康や医学研究の問いに適用する方法を概観。
* [臨床情報抽出の応用：文献レビュー](https://www.sciencedirect.com/science/article/pii/S1532046417302563) - Mayo Clinicの研究グループによる、2016年9月までに発表された臨床情報抽出の論文のレビュー。
* [文献に基づく発見：モデル、手法、動向](https://www.sciencedirect.com/science/article/pii/S1532046417301909) - 文献に基づく発見（LBD）のレビュー。一見無関係な科学文献の間にも、意味のあるつながりを見いだせるという考え方を扱う。
  * LBDの歴史的背景については、シカゴ大学のDon SwansonとNeil Smalheiserによる論文、[_Undiscovered Public Knowledge_](https://www.jstor.org/stable/4307965)（有料）と[_Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery_](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5771422/)を参照。
* [電子健康記録（EHR）のマイニング：概観](https://arxiv.org/abs/1702.03222) - 有害事象の検出も含め、電子健康記録を分析する手法と考え方を概観。2017年半ば時点の関連論文一覧は表2を参照。
* [患者の視点を捉える：健康関連テキストの自然言語処理の進歩](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6250990/) - 健康記録やソーシャルメディアのテキストからの情報抽出に自然言語処理を適用した、2017年のレビュー。比較可能で再現可能な研究に基づく手法開発を進めるため、研究コミュニティで共有・利用できるデータの確保が主要な課題だと指摘。
* [Awesome AI-based Protein Design](https://github.com/opendilab/awesome-AI-based-protein-design) - AIによるタンパク質設計の研究論文集。

## 活動中の研究グループ<a id="groups-active-in-the-field"></a>

* [Boston Children's Hospital Natural Language Processing Laboratory](http://www.childrenshospital.org/research/labs/natural-language-processing-laboratory) - 以前Mayo ClinicとApache cTAKESプロジェクトに所属していたGuergana Savova博士が主導。
* [Brown Center for Biomedical Informatics](https://www.brown.edu/academics/medical/about-us/research/centers-institutes-and-programs/biomedical-informatics/) - ブラウン大学を拠点にNeil Sarkar博士が率いる。研究グループは臨床自然言語処理や情報抽出に取り組む。
* [Center for Computational Pharmacology NLP Group](http://compbio.ucdenver.edu/Hunter_lab/CCP_website/index.html) - コロラド大学デンバー校を拠点にLarry Hunterが主導。[GitHubリポジトリ](https://github.com/UCDenver-ccp)も参照。
* 米国国立衛生研究所（NIH）・国立医学図書館（NLM）の研究グループ：
  * [NLMのDemner-Fushman研究グループ](https://www.lhncbc.nlm.nih.gov/personnel/dina-demner-fushman)
  * [NCBIのBioNLP研究グループ](https://www.ncbi.nlm.nih.gov/research/bionlp/) - Zhiyong Lu博士が率い、PubMedなどを通じた生物医学文献の検索やキュレーションの改善に取り組む。
* [JensenLab](https://jensenlab.org/) - デンマークのコペンハーゲン大学、Novo Nordisk Foundation Center for Protein Researchを拠点とする。
* [National Centre for Text Mining（NaCTeM）](http://www.nactem.ac.uk/) - マンチェスター大学を拠点にSophia Ananiadou教授が率いる。テキストマイニング全般を扱い、特に生物医学への応用を重視。
* [Mayo Clinicの臨床自然言語処理プログラム](https://www.mayo.edu/research/departments-divisions/department-health-sciences-research/medical-informatics/projects) - 複数の研究グループが、Apache cTAKESなどを通じて過去20年間にBioIEへ大きく貢献。
* [Monarch Initiative](https://monarchinitiative.org/) - オレゴン州立大学、Oregon Health & Science University、ローレンス・バークレー国立研究所、The Jackson Laboratoryなどの共同活動。意味論を用いて生物学情報を統合し、表現型を手掛かりに知識の隔たりを埋める、新しい情報提示を目指す。
* [TurkuNLP](https://turkunlp.org/) - トゥルク大学を拠点に自然言語処理全般を扱い、生物医学や臨床への応用を重視。
* [UTHealth Houston Biomedical Natural Language Processing Lab](https://sbmi.uth.edu/nlp/) - テキサス大学ヒューストン健康科学センターのSchool of Biomedical Informaticsを拠点にHua Xu博士が主導。
* [VCU Natural Language Processing Lab](https://nlp.cs.vcu.edu/) - バージニア・コモンウェルス大学を拠点にBridget McInnes博士が主導。
* [Zaklab](http://zaklab.org) - ハーバード大学医学部の生物医学情報学部門でIsaac Kohane博士が率いるグループ。同博士はn2c2（旧i2b2）データセットの管理責任者でもある。下の[データセット](#datasets)を参照。
* [Columbia University Department of Biomedical Informatics](https://www.dbmi.columbia.edu/) - George Hripcsak博士とNoémie Elhadad博士が主導。

## 組織<a id="organizations"></a>

* [AMIA](https://www.amia.org/) - 米国医療情報学会。生物医学情報学の研究者の多くが所属するが、全員ではない。学術誌JAMIAを発行。
* [IMIA](https://imia-medinfo.org/) - 国際医療情報学会。IMIA Yearbook of Medical Informaticsを発行。

## 学術誌とイベント<a id="journals-and-events"></a>

BioIEは学際的な分野で、研究成果やツールはさまざまな方法で共有されます。生物医学や生命科学では学術誌論文が一般的です。計算機科学や工学では国際会議論文を投稿し、採択後にポスターや口頭発表を行うことがよくあり、論文は会議録にまとめられる場合が多くあります。プレプリントも広まり、研究機関で受け入れられるようになっています。こうした正式な文書成果を取り巻く考え方として、[オープンサイエンス](https://en.wikipedia.org/wiki/Open_science)、オープンデータ、オープンソースがあります。BioIEの研究者が開発するコード、データ、ソフトウェアも、研究コミュニティにとって価値ある資源です。

### 学術誌<a id="journals"></a>

プレプリントは、[arXiv](https://arxiv.org)の「計算と言語（Computation and Language、cs.CL）」や「情報検索（Information Retrieval、cs.IR）」、[bioRxiv](https://www.biorxiv.org/)、[medRxiv](https://www.medrxiv.org/)の「医療情報学（Health Informatics）」などで探せます。

* [Database](https://academic.oup.com/database) - 副題は「The Journal of Biological Databases and Curation」。オープンアクセス誌。
* [NAR](https://academic.oup.com/nar) - Nucleic Acids Research。生体分子を幅広く扱うが、特に毎年のデータベース特集号で知られる。
* [JAMIA](https://academic.oup.com/jamia) - Journal of the American Medical Informatics Association。臨床ケア、臨床研究、トランスレーショナルサイエンス、実装科学、画像、教育、消費者の健康、公衆衛生、政策を扱う。
* [JBI](https://www.sciencedirect.com/journal/journal-of-biomedical-informatics) - Journal of Biomedical Informatics。通常はオープンアクセスではないが、オープンアクセスの「X」版もある。
* [Scientific Data](https://www.nature.com/sdata/) - 科学的価値のあるデータセットの説明や、科学データの共有・再利用を進める研究を掲載する、Springer Natureのオープンアクセス誌。

### カンファレンスなど<a id="conferences-and-other-events"></a>

* [ACM-BCB](http://acm-bcb.org/) - ACM Conference on Bioinformatics, Computational Biology, and Health Informatics。2010年から毎年開催。
* [BIBM](http://ieeebibm.org/BIBM2019/) - IEEE International Conference on Bioinformatics and Biomedicine。
* [ISMB](https://www.iscb.org/about-ismb) - International Conference on Intelligent Systems for Molecular Biology。International Society for Computational Biologyが1993年から毎年開催。臨床に特化せずバイオインフォマティクスや計算生物学を主に扱うが、テキストマイニングに関する内容も増えている。2019年には[生物学・医療のテキストマイニングを扱う終日の特別セッション](http://cosi.iscb.org/wiki/TextMining:Home)を開催。奇数年にはEuropean Conference on Computational Biology（ECCB）との合同開催。
* [PSB](https://psb.stanford.edu/) - Pacific Symposium on Biocomputing。

### チャレンジ<a id="challenges"></a><a id="challenge"></a>

BioIEのイベントには、与えられたデータセットに対して各研究グループが計算手法による解決策を開発する、共通の課題やチャレンジを中心にしたものもあります。

* [BioASQ](http://bioasq.org/) - 生物医学分野の意味索引付けと質問応答のチャレンジ。2013年からチャレンジとワークショップを毎年開催。
* [BioCreAtIvE workshop](https://biocreative.bioinformatics.udel.edu/) - 2004年から開催されているワークショップ。BioCreative VIは2017年2月、[BioCreative/OHNLP Challenge](https://sites.google.com/view/ohnlp2018/home)は2018年に開催。下の[データセット](#datasets)も参照。
* [SemEval workshop](http://alt.qcri.org/semeval2020/) - 計算意味解析の課題と評価を扱う。課題は年によって異なるが、科学・生物医学分野の言語を頻繁に対象とする。例として[SemEval-2019 Task 12：科学論文中の地名の解決](https://competitions.codalab.org/competitions/19948)がある。
* [eHealth-KD](https://knowledge-learning.github.io/ehealthkd-2019/) - スペイン語のeHealth文書から多様な知識を自動抽出するソフトウェア技術の開発を促すチャレンジ。以前は、スペイン語の意味解析を扱う年次ワークショップ[TASS](http://www.sepln.org/workshops/tass/)の一部として開催。
* [EHR DREAM Challenge](https://www.synapse.org/#!Synapse:syn18405991/wiki/589657) - [バイオインフォマティクス中心のほかのチャレンジ](http://dreamchallenges.org/)と併催。2019年10月に開始し、電子健康記録のデータによる患者の死亡予測を扱う。実際の記録の内容ではなく合成データを使用。

## チュートリアル<a id="tutorials"></a>

変化の速い分野のため、数年以上前のチュートリアルには重要な詳細が欠けている場合があります。以下は比較的新しい教育資料です。テキストマイニングの基礎と、PythonやRの基本的な使用経験が役立ちます。実践を通じて学ぶのが、最も適した方法かもしれません。

### LLMガイド<a id="llm-guides"></a>

この固定スナップショットでは、この節に資料は記載されていません。

### LLM以前のガイド、講義、講座<a id="pre-llm-guides-lectures-and-courses"></a>

* [Getting Started in Text Mining](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0040020) - CohenとHunterによる、生物医学テキストマイニングの短い入門。10年以上前の論文だが、なお意義がある。同じ著者による[以前の論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1702322/)も参照。
* [Biomedical Literature Mining](https://link.springer.com/book/10.1007/978-1-4939-0709-0) - Methods in Molecular Biologyシリーズの2014年の有料書籍。テキストマイニングの基本原理、生物科学への応用、臨床や医療安全への利用可能性を扱う。
* [Coursera - Foundations of mining non-structured medical data](https://www.coursera.org/learn/mining-medical-data) - テキストや画像を含む、種類や構造の異なる医療データを扱う約3時間の動画講義。概略を学ぶ、初心者向けの内容と思われる。
* [JensenLabのテキストマイニング演習](https://jensenlab.org/training/textmining/)
* [VIBのテキストマイニングとキュレーションの研修](https://www.bits.vib.be/training-list/111-bits/training/previous-trainings/183-text-mining) - 2013年開催の研修ワークショップ。スライドは原文時点でオンライン公開されている。

## コードライブラリ<a id="code-libraries"></a><a id="code-library"></a>

* [Biopython](https://biopython.org/) - [論文](http://dx.doi.org/10.1093/bioinformatics/btp163) - [コード](https://github.com/biopython/biopython) - 主にバイオインフォマティクスや計算分子生物学向けのPythonツール。PubMedの文書や抄録など、データの取得にも便利。ドキュメント第9章を参照。
* [Bio-SCoRes](https://github.com/kilicogluh/Bio-SCoRes) - [論文](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0148538) - 生物医学分野の共参照解析のフレームワーク。
* [medaCy](https://github.com/NLPatVCU/medaCy) - 医療分野の予測用自然言語処理モデルを構築するシステム。[spaCy](https://spacy.io/)フレームワークを基盤とする。
* [ScispaCy](https://github.com/allenai/SciSpaCy) - [論文](https://arxiv.org/abs/1902.07669) - 科学・生物医学文書に対応する[spaCy](https://spacy.io/)フレームワーク。
* [rentrez](https://github.com/ropensci/rentrez) - PubMedを含むNCBIの資源へアクセスするRのユーティリティ。
* [Med7](https://medium.com/@kormilitzin/med7-clinical-information-extraction-system-in-python-and-spacy-5e6f68ab1c68) - [論文](https://arxiv.org/abs/2003.01271) - [コード](https://github.com/kormilitzin/med7) - 薬剤に関連する概念の固有表現認識（NER）を行う、spaCy向けのPythonパッケージとモデル。

### 特定データセットのリポジトリ<a id="repos-for-specific-datasets"></a>

* [mimic-code](https://github.com/MIT-LCP/mimic-code) - 下記のMIMIC-IIIデータセットに関連するコード。役立つ[チュートリアル](https://github.com/MIT-LCP/mimic-code/tree/master/tutorials)も収録。

## ツール、プラットフォーム、サービス<a id="tools-platforms-and-services"></a><a id="toolplatformservice"></a>

* [cTAKES](https://ctakes.apache.org/) - [論文](https://academic.oup.com/jamia/article/17/5/507/830823) - [コード](https://github.com/apache/ctakes) - 電子カルテのテキストを処理するシステム。広く使われているオープンソースのソフトウェア。
* [CLAMP](https://clamp.uth.edu/) - [論文](https://academic.oup.com/jamia/article/25/3/331/4657212) - 臨床報告書のテキストに使う自然言語処理ツールキット。[実演デモ](https://clamp.uth.edu/clampdemo.php)で機能を確認できる。学術研究では無料で利用可能。
* [DeepPhe](https://github.com/DeepPhe/DeepPhe-Release) - がんの臨床像を記述した文書を処理するシステム。cTAKESを基盤とする。
* [DNorm](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/dnorm/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3810844/) - 疾患名や略語への言及を、一意の概念識別子に結び付ける疾患名正規化の手法。ダウンロード版にはNCBI Disease CorpusとBC5CDRを同梱。下の注釈付きテキストデータを参照。
* [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - PubMed/PMC、arXiv、対応する米国政策文書コーパスを対象に、同じ入力に対して同じ結果を返す取得処理を行うNode.jsのCLIとエージェント用スキル。取得対象は日次更新され、メタデータの検索や全文のMarkdown取得に対応。
* [PubTator Central](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - PubMedの記事やPubMed Centralの全文から5種類の生物医学概念を識別するウェブ基盤。注釈データ一式をダウンロードできる。下の[注釈付きテキストデータ](#annotated-text-data)を参照。
* [Pubrunner](https://github.com/jakelever/pubrunner) - PubMedの新しい文書集合にテキストマイニングツールを実行するフレームワーク。
* [SemEHR](https://github.com/CogStack/CogStack-SemEHR) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019046/) - 電子健康記録向けの情報抽出基盤。[CogStackプロジェクト](https://github.com/CogStack)を基盤とする。
* [TaggerOne](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/taggerone/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5018376/) - 概念の正規化を行う。特定の概念の種類に合わせて学習でき、ほかの正規化機能とは独立に固有表現認識（NER）も実行可能。
* [TabInOut](https://github.com/nikolamilosevic86/TabInOut) - [論文](https://link.springer.com/article/10.1007/s10032-019-00317-0) - 文献内の表から情報を抽出するフレームワーク。

### 注釈ツール<a id="annotation-tools"></a><a id="annotation-tool"></a>

* [Anafora](https://github.com/weitechen/anafora) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5657237/) - 注釈の不一致を裁定する機能や、進捗の追跡機能を備えた注釈ツール。
* [brat](https://brat.nlplab.org/) - [論文](https://www.aclweb.org/anthology/E12-2021/) - [コード](https://github.com/nlplab/brat) - brat rapid annotation tool。ブラウザー上で視覚的にテキストへ注釈を付ける。分野を限定せず、多様な注釈プロジェクトに対応。可視化は[_stav_ツール](https://github.com/nlplab/stav/)を基盤とする。
* [MedTator](https://ohnlp.github.io/MedTator/) - [論文](https://academic.oup.com/bioinformatics/article-abstract/38/6/1776/6496915) - [コード](https://github.com/OHNLP/MedTator) - 依存関係を最小限にするよう設計された注釈ツール。

## 技法とモデル<a id="techniques-and-models"></a>

### 大規模言語モデル<a id="large-language-models"></a><a id="large-language-model"></a>

この固定スナップショットでは、この節に資料は記載されていません。

### BERTモデル<a id="bert-models"></a>
* [BioBERT](https://github.com/naver/biobert-pretrained) - [論文](https://arxiv.org/abs/1901.08746) - [コード](https://github.com/dmis-lab/biobert) - PubMedとPubMed Centralのテキストで学習した[BERT言語モデル](https://arxiv.org/abs/1810.04805)。
* ClinicalBERT - 臨床テキストで学習した、似た名称を持つ2種類の言語モデル。どちらもMIMIC-IIIデータセットの診療記録で学習したBERTモデル。
  * [Alsentzerほか Clinical BERT](https://github.com/EmilyAlsentzer/clinicalBERT) - [論文](https://www.aclweb.org/anthology/W19-1909/)
  * [Huangほか ClinicalBERT](https://github.com/kexinhuang12345/clinicalBERT) - [論文](https://arxiv.org/abs/1904.05342)
* [SciBERT](https://github.com/allenai/scibert) - [論文](https://arxiv.org/abs/1903.10676) - Semantic Scholarデータベースの100万件を超える論文で学習したBERTモデル。
* [BlueBERT](https://github.com/ncbi-nlp/bluebert) - [論文](https://arxiv.org/abs/1906.05474) - PubMedのテキストとMIMIC-IIIの診療記録で事前学習したBERTモデル。
* [PubMedBERT](https://microsoft.github.io/BLURB/models.html) - [論文](https://arxiv.org/abs/2007.15779) - PubMedのテキストで一から学習したBERTモデル。抄録と全文を用いた版と、抄録のみを用いた版がある。

### GPT-2モデル<a id="gpt-2-models"></a>
* [BioGPT](https://github.com/microsoft/BioGPT) - [論文](https://doi.org/10.1093/bib/bbac409) - PubMedの1,500万件の抄録で事前学習したGPT-2モデルと、生物医学分野の複数のタスクに合わせて微調整した版。

### その他のモデル<a id="other-models"></a>
* [PubMedから学習したFlair埋め込み](https://github.com/zalandoresearch/flair/pull/519) - Flairフレームワークとその埋め込み手法を通じて利用できる言語モデル。2015年までのPubMed抄録の5%を抽出した、合計120万件を超える標本で学習。

### テキスト埋め込み<a id="text-embeddings"></a><a id="text-embedding"></a>
* [Mayo ClinicのHongfang Liuの研究グループによる論文](https://www.sciencedirect.com/science/article/pii/S1532046418301825) - 生物医学・臨床テキストで学習した埋め込みは、生物医学の自然言語処理タスクで性能を高める場合があるが、常にそうなるとは限らないことを示す論文。分野固有の埋め込みの学習には多くの計算資源が必要なため、事前学習済みの埋め込みが適する場合もある。
* [BioASQword2vec](http://bioasq.org/news/bioasq-releases-continuous-space-word-vectors-obtained-applying-word2vec-pubmed-abstracts) - [論文](http://bioasq.lip6.fr/info/BioASQword2vec/) - 広く使われる[word2vec](https://code.google.com/archive/p/word2vec/)ツールにより、PubMedの1,000万件を超える抄録から得た生物医学テキストの単語埋め込み。
* [BioWordVec](https://figshare.com/articles/Improving_Biomedical_Word_Embeddings_with_Subword_Information_and_MeSH_Ontology/6882647) - [論文](https://www.nature.com/articles/s41597-019-0055-0) - [コード](https://github.com/ncbi-nlp/BioWordVec) - PubMedの2,700万件を超える題名・抄録から得た単語埋め込み。MeSHに基づくサブワード埋め込みモデルを含む。

## データセット<a id="datasets"></a>

以下の一部のデータセットにアクセスするには、[UMLS Terminology Services（UTS）アカウント](https://www.nlm.nih.gov/databases/umls.html#license_request)が必要です。UTSアカウントのライセンスでは、UMLS資源の利用状況に関する年次報告の提出が求められます。原文では、想像するほど難しい作業ではないと説明されています。

### 生物医学テキスト情報源<a id="biomedical-text-sources"></a>

以下の資源は、索引付けされた生物医学分野のテキスト文書を収録しています。
* [OHSUMED](http://davis.wpi.edu/xmdv/datasets/ohsumed.html) - [論文](https://dl.acm.org/citation.cfm?id=188557) - 1987〜1991年のMEDLINEレコード348,566件。題名と、一部には抄録を含み、MeSHラベルを付与。主に歴史的意義のある資料。
* [PubMed Central Open Access Subset](https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/) - 通常の著作権による制限とは異なるライセンスで利用できるPubMed Centralの記事集合。具体的なライセンスは出版物や情報源ごとに異なる。PDFとXMLで利用可能。
* [CORD-19](https://github.com/allenai/cord19) - COVID-19に関する学術論文のコーパス。主にPubMed Centralやプレプリントサーバー由来だが、全文を入手できない論文のメタデータも含む。

### 注釈付きテキストデータ<a id="annotated-text-data"></a>

* [SPL-ADR-200db](https://bionlp.nlm.nih.gov/tac2017adversereactions/) - [論文](https://www.nature.com/articles/sdata20181) - FDA承認薬200種の既知の有害反応約5,000件に関する、標準化された情報とテキスト内での出現の注釈を含む試行用データセット。
* [BioCreAtIvE 1](https://sourceforge.net/projects/biocreative/files/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-6-S1-S1) - タンパク質名・遺伝子名を注釈した15,000文（学習用10,000文、テスト用5,000文）と、タンパク質名・Gene Ontologyの用語を注釈した生物医学研究論文の全文1,000件。
* [BioCreAtIvE 2](https://sourceforge.net/projects/biocreative/files/) - [論文](https://genomebiology.biomedcentral.com/articles/10.1186/gb-2008-9-s2-s1) - タンパク質名・遺伝子名を注釈した15,000文（学習用10,000文、テスト用5,000文。最初のコーパスとは別の文）。EntrezGene識別子に結び付けた抄録542件と、タンパク質間相互作用の特徴を注釈した各種研究論文も収録。
* [BioCreAtIvE V CDR Task Corpus（BC5CDR）](https://biocreative.bioinformatics.udel.edu/accounts/login/?next=/resources/corpora/biocreative-v-cdr-corpus/) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw068/2630414) - 2014年以降に発表された1,500件の記事の題名と抄録。化学物質4,409件、疾患5,818件、化学物質と疾患の相互作用3,116件を注釈。登録が必要。
* [BioCreative VI CHEMPROT Corpus](https://biocreative.bioinformatics.udel.edu/resources/corpora/chemprot-corpus-biocreative-vi/#chemprot-corpus-biocreative-vi:downloads) - [論文](https://pdfs.semanticscholar.org/eed7/81f498b563df5a9e8a241c67d63dd1d92ad5.pdf) - さまざまな関係の種類について、化学物質とタンパク質の相互作用を注釈した2,400件を超える記事。登録が必要。
* [CRAFT](https://github.com/UCDenver-ccp/CRAFT) - [論文](https://link.springer.com/chapter/10.1007/978-94-024-0881-2_53) - 概念や共参照などの注釈を付けた、生物医学論文の全文67件。原文時点ではバージョン5で、概念をMONDO疾患オントロジーへ結び付けた注釈を含む。
* [n2c2（旧i2b2）のデータ](https://portal.dbmi.hms.harvard.edu/projects/n2c2-nlp/) - ハーバード大学医学部の生物医学情報学部門（DBMI）が管理するデータ。2006年から開催されているNational NLP Clinical ChallengesとInformatics for Integrating Biology and the Bedsideの課題を扱い、多様な主題を含む。アクセス・利用前に登録が必要。個別の説明は[データを用いた課題の一覧](https://portal.dbmi.hms.harvard.edu/data-challenges/)を参照。
* [NCBI Disease Corpus](https://www.ncbi.nlm.nih.gov/CBBresearch/Dogan/DISEASE/) - [論文](https://www.sciencedirect.com/science/article/pii/S1532046413001974) - 疾患名や、MeSH・[OMIM](https://omim.org/)の関連概念を注釈した、生物医学分野の抄録793件。
* [PubTator Centralのデータセット](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - RESTful APIまたはFTPダウンロードで利用できる。2,900万件を超える抄録と約300万件の全文文書の注釈を収録。
* [語義曖昧性解消（WSD）](https://wsd.nlm.nih.gov/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-223) - 意味が曖昧な203語と、生物医学研究の出版物から自動抽出した用例37,888件。UTSアカウントが必要。
* [Clinical Questions Collection](https://www.nlm.nih.gov/databases/download/CQC.html) - CQCやIowa collectionとも呼ばれる、診療時に医師が提起した数千件の質問と、それに対応する回答。
* [BioNLP ST 2013のデータセット](http://2013.bionlp-st.org/) - 6種類の共通課題のデータ。一部は容易にアクセスできない可能性がある。広範な実体とイベントの注釈が必要なら、CG課題のデータ（BioNLP2013CG）が候補となる。
* [BioScope](https://rgai.inf.u-szeged.hu/node/105) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2586758/) - 医学・生物学文書の文に、否定、推量、言語上の作用域を注釈したコーパス。
* [BioRED](https://ftp.ncbi.nlm.nih.gov/pub/lu/BioRED/) - [論文](https://arxiv.org/abs/2204.04263) - 6,500件を超える生物医学の関係注釈と、新規知見を示すラベル。

### タンパク質間相互作用の注釈コーパス<a id="protein-protein-interaction-annotated-corpora"></a><a id="タンパク質間相互作用注釈corpus"></a>
タンパク質間相互作用はPPIと略します。以下の集合は[BioC形式](http://bioc.sourceforge.net/)で利用できます。古い集合（AIMed、BioInfer、HPRD50、IEPA、LLL）は[WBIのコーパスリポジトリ](http://corpora.informatik.hu-berlin.de)から提供され、[トゥルク大学の研究グループ](http://mars.cs.utu.fi/PPICorpora/)が元の集合を基に作成したものです。

* [AIMed](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/aimed_bioc.xml.zip) - [論文](https://www.ncbi.nlm.nih.gov/pubmed/15811782) - PPIを注釈したMEDLINE抄録225件。
* [BioC-BioGRID](http://bioc.sourceforge.net/BioC-BioGRID.html) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw147/2884890) - PPIと遺伝的相互作用を注釈した全文記事120件。BioCreative V BioC課題で使用。
* [BioInfer](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/bioinfer_bioc.xml.zip) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-8-50) - PPIを含む関係、固有表現、構文上の依存関係を注釈した、生物医学研究の抄録に含まれる1,100文。[追加情報とダウンロード](http://mars.cs.utu.fi/BioInfer/)も参照。
* [HPRD50](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/hprd50_bioc.xml.zip) - [論文](https://academic.oup.com/bioinformatics/article/23/3/365/236564) - Human Protein Reference Databaseで参照される、科学論文の抄録50件にPPIを注釈。
* [IEPA](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/iepa_bioc.xml.zip) - [論文](http://psb.stanford.edu/psb-online/proceedings/psb02/abstracts/p326.html) - 生物医学研究の抄録486文に、タンパク質を含む同時出現する化学物質の対を注釈。そのためPPIの注釈も含む。
* [LLL](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/lll_bioc.xml.zip) - [論文](https://www.semanticscholar.org/paper/Learning-Language-in-Logic-Genic-Interaction-Nedellec/0863a9d71955341b7e1a6a6877d44d4f0bb22671) - 細菌 _Bacillus subtilis_ に関する研究論文の77文に、タンパク質と遺伝子の相互作用を注釈。PPIの注釈に近いもの。[追加情報](http://genome.jouy.inra.fr/texte/LLLchallenge/#task1)も参照。

### その他のデータセット<a id="other-datasets"></a>

* [Columbia Open Health Data](http://cohd.io) - [論文](https://www.nature.com/articles/sdata2018273) - 電子健康記録から抽出した、病態、薬剤、処置、患者の人口統計学的特性の出現率や共起頻度のデータベース。元の記録のテキストは含まない。
* [Comparative Toxicogenomics Database](https://ctdbase.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6323936/) - 化学物質、遺伝子産物、表現型、疾患、環境曝露の間の関係を、人手で整理したデータベース。化学物質の種類など、関連する概念のオントロジーの構築に役立つ。
* [MIMIC-III](https://mimic.physionet.org/) - [論文](https://www.nature.com/articles/sdata201635) - 集中治療室への入院約6万件の、個人識別情報を除いた健康データ。利用前にオンライン研修（CITI研修）の修了と、データ利用契約への同意が必要。
* [MIMIC-CXR](https://physionet.org/content/mimic-cxr/2.0.0/) - MIMIC Chest X-Rayデータベース。377,000件を超える放射線画像と、それに付随する自由記述の放射線診断報告書を収録。MIMIC-IIIと同様に、データ利用契約への同意が必要。
* [UMLS Knowledge Sources](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html) - [参照マニュアル](https://www.ncbi.nlm.nih.gov/books/NBK9676/) - 生物医学の用語や識別子と、それに付随するツールやスクリプトの大規模で包括的な集合。UMLS Metathesaurusの全概念について一意の識別子と名称を含むMRCONSO.RRFという1ファイルだけで、目的を満たせる場合もある。下のオントロジーと統制語彙も参照。
* [MIMIC-IV](https://mimic-iv.mit.edu/) - MIMIC-IIIの複数の形式を含む患者データの更新版。より新しい年の入院データ、新たなデータ構造、救急部門の記録、MIMIC-CXR画像へのリンクを含む。
* [eICU Collaborative Research Database](https://eicu-crd.mit.edu/) - [論文](https://www.nature.com/articles/sdata2018178) - 集中治療室への入院20万件を超える観察データを、一貫した構造で収録したデータベース。登録、研修の修了、データ利用契約への同意が必要。

## オントロジーと統制語彙<a id="ontologies-and-controlled-vocabularies"></a><a id="ontologyと統制語彙"></a>

* [Disease Ontology](http://www.disease-ontology.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4383880/) - ヒトの疾患のオントロジー。MeSH、ICD、NCI Thesaurus、SNOMED、OMIMへの相互リンクを持ち、パブリックドメインで提供。[GitHub](https://github.com/DiseaseOntology/HumanDiseaseOntology)と[OBO Foundry](http://www.obofoundry.org/ontology/doid.html)で利用可能。
* [RxNorm](https://www.nlm.nih.gov/research/umls/rxnorm/index.html) - [論文](https://academic.oup.com/jamia/article/18/4/441/734170) - 臨床用医薬品や医薬品パッケージの名称を正規化し、成分、含量、剤形を組み合わせ、下記のSemantic Networkの分類を割り当てる。毎月公開。
* [SPECIALIST Lexicon](https://lexsrv3.nlm.nih.gov/Specialist/Summary/lexicon.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2247735/) - 多数の生物医学用語を含む一般英語の語彙集。1994年から毎年更新され、2019年時点でも更新が続いている。UMLSの一部だが、ダウンロードにUTSアカウントは不要。
* [UMLS Metathesaurus](https://www.nlm.nih.gov/research/umls/knowledge_sources/metathesaurus/index.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC308795/) - 380万件を超える概念、1,400万件の概念名、200を超える生物医学の語彙・識別子の情報源を対応付ける、大規模な集合。[MetamorphoSysインストールツール](https://www.nlm.nih.gov/research/umls/implementation_resources/metamorphosys/help.html)で部分集合を準備できるが、2019年版でも約30GBのディスク容量が必要。[マニュアル](https://www.ncbi.nlm.nih.gov/books/NBK9684/)も参照。UTSアカウントが必要。
* [UMLS Semantic Network](https://semanticnetwork.nlm.nih.gov/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2447396/) - 生物医学の概念や語彙を扱う、133種類の意味型と54種類の意味関係の一覧。Metathesaurusが複雑すぎる場合の候補。ダウンロードにUTSアカウントは不要。

## データモデル<a id="data-models"></a><a id="data-model"></a>

生物医学のデータを扱う場合は、[データモデル](https://en.wikipedia.org/wiki/Data_model)が必要となることが多いでしょう。

* [Biolink](https://biolink.github.io/biolink-model/) - [コード](https://github.com/biolink/biolink-model) - 生物学の実体を表すデータモデル。[YAML](https://yaml.org/)ファイルとして提供。
* [BioUML](http://wiki.biouml.org/index.php/BioUML) - [論文](https://academic.oup.com/nar/article/47/W1/W225/5498754) - 生物医学データを分析・統合・可視化するための構成。視覚的モデリング言語[UML](https://www.uml.org/what-is-uml.htm)を概念的な基盤とする。
* [OMOP Common Data Model](https://github.com/OHDSI/CommonDataModel) - 医療の観察データに関する標準。
* [unmiri-ngs-fhir-schema](https://github.com/unmirihealth/unmiri-ngs-fhir-schema) - ベンダーをまたいだ体細胞NGSの解釈出力（Foundation Medicine、Tempus、Caris、Guardant）に用いる、Apache-2.0のJSON Schema（Draft 2020-12）によるAPI契約。HL7 FHIR Genomics IGに整合し、腫瘍検査の報告書を解析する生物医学情報抽出パイプラインの、標準に沿った出力の表現形式となる。
