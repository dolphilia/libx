---
title: "Awesome BioIE"
description: "生物医学のテキスト・データから情報を抽出するためのモデル、ツール、データセット、語彙などの資料。"
licenseSource: "github-caufieldjh-awesome-bioie-readme-md"
---

# Awesome BioIE<a id="awesome-bioie-logo"></a>

BioIE（生物医学情報抽出）は、構造化されていない、または構造が一貫していない生物学・臨床・生物医学データから、構造化情報を抽出する取り組みです。研究概観、研究グループ、組織、学術誌、イベント、教材、コード、ツール、モデル、データセット、語彙、データモデルを扱います。説明、日付、数量、評価、利用条件、保守状況は固定原文に基づく記述です。

情報源は専門用語で書かれたテキスト文書の集合であることが多く、抽出結果が検証可能で複数の情報源にわたって一貫していれば、知識とみなせます。他分野の非構造化データ向け手法は、生物医学データへ適応させる必要があります。固定原文は、BERTやGPT-3/4、LLAMA2/3、Geminiなどの大規模言語モデル（LLM）の導入後に分野が大きく変化したと述べています。

この一覧は金銭的費用がなく、ライセンス要件が限定的な資料を優先し、手法とデータセットは公開され活発に保守されているものを掲載する方針です。

関連資料として[awesome-nlp](https://github.com/keon/awesome-nlp)、[awesome-biology](https://github.com/raivivek/awesome-biology)、[Awesome-Bioinformatics](https://github.com/danielecook/Awesome-Bioinformatics)も参照できます。

## 研究概観 <a id="research-overviews"></a>

### 生物医学IEのLLM <a id="llms-in-biomedical-ie"></a>
* [Large language models in healthcare: A comprehensive benchmark](http://dx.doi.org/10.1101/2024.04.24.24306315) - 医療言語タスクへ適用した16種のLLMに対する統計的・人手評価。
* [Assessing the research landscape and clinical utility of large language models: a scoping review](https://doi.org/10.1186/s12911-024-02459-6) - 2024年3月時点の医療LLM応用に関する概括的なレビュー。
* [Ethical and regulatory challenges of large language models in medicine](https://doi.org/10.1016/s2589-7500(24)00061-x) - 生物医学LLM応用から生じる倫理問題のレビュー。
* [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](http://dx.doi.org/10.1145/3442188.3445922) - 言語モデルの役割、応用、リスクに関する、頻繁に参照され現在も関連性のある論文。

### LLM以前の概観 <a id="pre-llm-overviews"></a>
* [Biomedical Informatics on the Cloud: A Treasure Hunt for Advancing Cardiovascular Medicine](https://www.ahajournals.org/doi/full/10.1161/CIRCRESAHA.117.310967) - BioIE／バイオインフォマティクスのワークフローを心血管の健康・医学研究の問いへ適用する方法。
* [Clinical information extraction applications: A literature review](https://www.sciencedirect.com/science/article/pii/S1532046417302563) - 2016年9月までの臨床IE論文をMayo Clinic グループがレビュー。
* [Literature Based Discovery: Models, methods, and trends](https://www.sciencedirect.com/science/article/pii/S1532046417301909) - 無関係に見える科学文献間に意味あるつながりを見つけるというLBDのレビュー。
  * LBDの歴史的背景はUniversity of ChicagoのDon Swanson／Neil Smalheiserによる論文、[_Undiscovered Public Knowledge_](https://www.jstor.org/stable/4307965)（有料）と[_Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery_](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5771422/)を参照。
* [Mining Electronic Health Records (EHRs): A Survey](https://arxiv.org/abs/1702.03222) - 有害事象検出を含むEHR マイニングの手法と考え方。2017年半ば時点の関連論文は表2を参照。
* [Capturing the Patient's Perspective: a Review of Advances in Natural Language Processing of Health-Related Text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6250990/) - 健康記録とソーシャルメディアテキストの情報抽出へNLPを適用した2017年レビュー。重要な指摘は、比較可能・再現可能な研究による手法開発を進めるため、コミュニティで共有・利用できるデータの入手可能性が主要課題だという点です。
* [Awesome AI-based Protein Design](https://github.com/opendilab/awesome-AI-based-protein-design) - AIベースのタンパク質設計研究論文集。


## 活動中の研究グループ <a id="groups-active-in-the-field"></a>

* [Boston Children's Hospital Natural Language Processing Laboratory](http://www.childrenshospital.org/research/labs/natural-language-processing-laboratory) - 元Mayo Clinic／Apache cTAKES プロジェクトのGuergana Savova博士が主導。
* [Brown Center for Biomedical Informatics](https://www.brown.edu/academics/medical/about-us/research/centers-institutes-and-programs/biomedical-informatics/) - Brown Universityを拠点にNeil Sarkar博士が率い、臨床NLP／IEを研究。
* [Center for Computational Pharmacology NLP Group](http://compbio.ucdenver.edu/Hunter_lab/CCP_website/index.html) - University of Colorado Denverを拠点にLarry Hunterが主導。[GitHubリポジトリ](https://github.com/UCDenver-ccp)も参照。
* 米国国立衛生研究所（NIH）／国立医学図書館（NLM）のグループ：
  * [Demner-Fushman group at NLM](https://www.lhncbc.nlm.nih.gov/personnel/dina-demner-fushman)
  * [BioNLP group at NCBI](https://www.ncbi.nlm.nih.gov/research/bionlp/) - Zhiyong Lu博士が率い、PubMedなどの生物医学文献検索・キュレーションを改善。
* [JensenLab](https://jensenlab.org/) - デンマークのUniversity of CopenhagenのNovo Nordisk Foundation Center for Protein Researchを拠点。
* [National Centre for Text Mining (NaCTeM)](http://www.nactem.ac.uk/) - University of Manchesterを拠点にSophia Ananiadou教授が率い、テキストマイニング全般、とりわけ生物医学応用を重視。
* [Mayo Clinic's clinical natural language processing program](https://www.mayo.edu/research/departments-divisions/department-health-sciences-research/medical-informatics/projects) - 過去20年にApache cTAKESなどBioIEへ大きく貢献した複数グループ。
* [Monarch Initiative](https://monarchinitiative.org/) - Oregon State University、Oregon Health & Science University、Lawrence Berkeley National Lab、The Jackson Laboratoryなどの共同活動。意味論を用いて生物情報を統合し、表現型で知識の隔たりを埋める新しい情報提示を目指します。
* [TurkuNLP](https://turkunlp.org/) - University of Turkuを拠点に、BioNLP／臨床応用を重視してNLP全般を研究。
* [UTHealth Houston Biomedical Natural Language Processing Lab](https://sbmi.uth.edu/nlp/) - University of Texas Health Science Center at Houston School of Biomedical Informaticsを拠点にHua Xu博士が主導。
* [VCU Natural Language Processing Lab](https://nlp.cs.vcu.edu/) - Virginia Commonwealth Universityを拠点にBridget McInnes博士が主導。
* [Zaklab](http://zaklab.org) - Harvard Medical School Department of Biomedical InformaticsのIsaac Kohane博士が主導。Kohane博士はn2c2（旧i2b2）データセットの管理担当者でもあります。下の[データセット](#datasets)を参照。
* [Columbia University Department of Biomedical Informatics](https://www.dbmi.columbia.edu/) - George Hripcsak博士とNoémie Elhadad博士が主導。


## 組織 <a id="organizations"></a>

* [AMIA](https://www.amia.org/) - 生物医学情報学研究者の多く（全員ではありません）がAmerican Medical Informatics Association（米国医療情報学会）の会員。学術誌JAMIAを発行。
* [IMIA](https://imia-medinfo.org/) - International Medical Informatics Association（国際医療情報学会）。IMIA Yearbook of Medical Informaticsを発行。


## 学術誌とイベント <a id="journals-and-events"></a>

BioIEは学際的であり、研究者はさまざまな方法で成果・ツールを共有します。生物医学・生命科学では一般的な学術誌論文、計算機科学・工学では一般的な会議論文と採択後のポスター／口頭発表などです。会議論文は会議録としてまとめられることが多く、プレプリントも次第に一般化し機関に受容されています。これらの正式な成果物を取り巻くのが[オープンサイエンス](https://en.wikipedia.org/wiki/Open_science)、オープンデータ、オープンソースであり、BioIE研究者が作るコード、データ、ソフトウェアはコミュニティの重要資料です。

### 学術誌 <a id="journals"></a>

プレプリントは[arXiv](https://arxiv.org)の計算と言語（cs.CL）／情報検索（cs.IR）、[bioRxiv](https://www.biorxiv.org/)、[medRxiv](https://www.medrxiv.org/)の医療情報学などを試してください。

* [Database](https://academic.oup.com/database) - 副題は「The Journal of Biological Databases and Curation」。オープンアクセス。
* [NAR](https://academic.oup.com/nar) - Nucleic Acids Research。幅広い生体分子領域を扱い、年次データベース特集号で特に著名。
* [JAMIA](https://academic.oup.com/jamia) - Journal of the American Medical Informatics Association。臨床ケア、臨床研究、橋渡し研究、実装科学、画像処理、教育、消費者の健康、公衆衛生、政策を扱います。
* [JBI](https://www.sciencedirect.com/journal/journal-of-biomedical-informatics) - Journal of Biomedical Informatics。既定ではオープンアクセスではありませんがオープンアクセスの「X」版があります。
* [Scientific Data](https://www.nature.com/sdata/) - 科学的価値のあるデータセットの説明と、科学データの共有・再利用を進める研究を掲載するSpringer Natureのオープンアクセス誌。

### カンファレンスなど <a id="conferences-and-other-events"></a>

* [ACM-BCB](http://acm-bcb.org/) - ACM Conference on Bioinformatics, Computational Biology, and Health Informatics。2010年から毎年開催。
* [BIBM](http://ieeebibm.org/BIBM2019/) - IEEE International Conference on Bioinformatics and Biomedicine。
* [ISMB](https://www.iscb.org/about-ismb) - International Society for Computational Biologyが1993年から毎年開催するInternational Conference on Intelligent Systems for Molecular Biology。臨床を明示せずバイオインフォマティクス／計算生物学を主に扱いますが、テキストマイニングも増加。2019年には[生物学・医療のためのテキストマイニングの終日特別セッション](http://cosi.iscb.org/wiki/TextMining:Home)を開催。奇数年はEuropean Conference on Computational Biology（ECCB）と合同。
* [PSB](https://psb.stanford.edu/) - Pacific Symposium on Biocomputing。

### 課題・競技 <a id="challenges"></a> <a id="challenge"></a>

BioIEの一部イベントは、与えられたデータセットへ各グループが計算的解決手法を開発する正式タスク／課題・競技を中心に構成されます。

* [BioASQ](http://bioasq.org/) - 生物医学意味索引付け／質問応答の課題・競技。2013年から毎年課題・競技とワークショップを開催。
* [BioCreAtIvE workshop](https://biocreative.bioinformatics.udel.edu/) - 2004年から開催。BioCreative VIは2017年2月、[BioCreative/OHNLP 課題・競技](https://sites.google.com/view/ohnlp2018/home)は2018年開催。下の[データセット](#datasets)も参照。
* [SemEval workshop](http://alt.qcri.org/semeval2020/) - 計算意味解析のタスク／評価。年ごとに異なりますが科学・生物医学言語を頻繁に扱い、例として[SemEval-2019 タスク 12：科学論文の地名の曖昧性解消](https://competitions.codalab.org/competitions/19948)があります。
* [eHealth-KD](https://knowledge-learning.github.io/ehealthkd-2019/) - スペイン語のeHealth文書から多様な知識を自動抽出するソフトウェア技術開発を促す課題・競技。以前はスペイン語の意味解析の年次ワークショップ [TASS](http://www.sepln.org/workshops/tass/)の一部。
* [EHR DREAM Challenge](https://www.synapse.org/#!Synapse:syn18405991/wiki/589657) - [バイオインフォマティクス中心のほかの課題・競技](http://dreamchallenges.org/)と併催。2019年10月開始で、EHR データによる患者死亡予測を扱います。実在EHRではなく合成データを使用。


## チュートリアル <a id="tutorials"></a>

分野の変化が速く、数年以上前のチュートリアルには重要な詳細が欠けます。比較的新しい教育資料を以下に示します。テキストマイニング技法の基礎理解とPython／Rの基礎経験が有用で、実践しながら学ぶのが最善かもしれません。

### LLMガイド <a id="llm-guides"></a>

固定原文では、この節の資料はまだ記載されていません。

### LLM以前のガイド、講義、講座 <a id="pre-llm-guides-lectures-and-courses"></a>

* [テキストマイニング入門](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0040020) - Cohen／Hunterによる生物医学テキストマイニングの短い入門。10年以上前ですが今も関連性があります。同著者の[以前の論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1702322/)も参照。
* [Biomedical Literature Mining](https://link.springer.com/book/10.1007/978-1-4939-0709-0) - 2014年Methods in Molecular Biologyの有料書籍。テキストマイニング入門原則、生物科学応用、臨床／医療安全での可能性を扱います。
* [Coursera：非構造化医療データのマイニングの基礎](https://www.coursera.org/learn/mining-medical-data) - テキスト・画像を含むさまざまな種類・構造の医療データを扱う約3時間の動画講義。内容は概括的で初心者向けと思われます。
* [JensenLabのテキストマイニング演習](https://jensenlab.org/training/textmining/)
* [VIBのテキストマイニング・キュレーション研修](https://www.bits.vib.be/training-list/111-bits/training/previous-trainings/183-text-mining) - 2013年開催の研修ワークショップで、スライドは現在もオンライン。


## コードライブラリ <a id="code-libraries"></a> <a id="code-library"></a>

* [Biopython](https://biopython.org/) - [論文](http://dx.doi.org/10.1093/bioinformatics/btp163) - [コード](https://github.com/biopython/biopython) - 主にバイオインフォマティクス／計算分子生物学向けPython ツール。PubMed文書・抄録を含むデータ取得にも便利（文書第9章参照）。
* [Bio-SCoRes](https://github.com/kilicogluh/Bio-SCoRes) - [論文](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0148538) - 生物医学共参照解決フレームワーク。
* [medaCy](https://github.com/NLPatVCU/medaCy) - 予測的医療NLP モデル構築システム。[spaCy](https://spacy.io/) フレームワーク上に構築。
* [ScispaCy](https://github.com/allenai/SciSpaCy) - [論文](https://arxiv.org/abs/1902.07669) - 科学・生物医学文書向け[spaCy](https://spacy.io/) フレームワーク。
* [rentrez](https://github.com/ropensci/rentrez) - PubMedを含むNCBI 資料へアクセスするR ユーティリティ。
* [Med7](https://medium.com/@kormilitzin/med7-clinical-information-extraction-system-in-python-and-spacy-5e6f68ab1c68) - [論文](https://arxiv.org/abs/2003.01271) - [コード](https://github.com/kormilitzin/med7) - 薬剤関連概念のNERを行うspaCy向けPython パッケージ／モデル。

### 特定データセットのリポジトリ <a id="repos-for-specific-datasets"></a>

* [mimic-code](https://github.com/MIT-LCP/mimic-code) - MIMIC-IIIデータセット（下記）関連コード。有用な[チュートリアル](https://github.com/MIT-LCP/mimic-code/tree/master/tutorials)を収録。


## ツール、プラットフォーム、サービス <a id="tools-platforms-and-services"></a> <a id="toolplatformservice"></a>

* [cTAKES](https://ctakes.apache.org/) - [論文](https://academic.oup.com/jamia/article/17/5/507/830823) - [コード](https://github.com/apache/ctakes) - 電子診療記録のテキスト処理システム。広く利用されるオープンソース。
* [CLAMP](https://clamp.uth.edu/) - [論文](https://academic.oup.com/jamia/article/25/3/331/4657212) - 臨床報告書のテキスト向けNLP ツールキット。まず[実演デモ](https://clamp.uth.edu/clampdemo.php)で動作を確認できます。学術研究では無料利用可。
* [DeepPhe](https://github.com/DeepPhe/DeepPhe-Release) - がんの臨床像を記述した文書の処理システム。cTAKESベース。
* [DNorm](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/dnorm/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3810844/) - 疾患名・略語への言及を一意の概念IDへ結び付ける疾患名の正規化手法。ダウンロード版はNCBI Disease CorpusとBC5CDR（下記）を同梱。
* [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - PubMed/PMC、arXiv、対応する米国政策のコーパスを対象に、決定的な結果を返す、日次更新の情報取得、メタデータ検索、全文Markdown取得を行うNode.js CLI／エージェントスキル。
* [PubTator Central](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - PubMed記事・PubMed Central全文から5種類の生物医学概念を識別するWebプラットフォーム。全注釈集合をダウンロード可能です（下記の[注釈付きテキストデータ](#annotated-text-data)を参照）。
* [Pubrunner](https://github.com/jakelever/pubrunner) - PubMedの最新文書集合へテキストマイニングツールを実行するフレームワーク。
* [SemEHR](https://github.com/CogStack/CogStack-SemEHR) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019046/) - EHR向けIE 基盤。[CogStack プロジェクト](https://github.com/CogStack)上に構築。
* [TaggerOne](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/taggerone/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5018376/) - 概念の正規化を実行。特定概念の種類向けに学習でき、ほかの正規化機能から独立してNERも実行可能。
* [TabInOut](https://github.com/nikolamilosevic86/TabInOut) - [論文](https://link.springer.com/article/10.1007/s10032-019-00317-0) - 文献中の表からIEを行うフレームワーク。

### 注釈ツール <a id="annotation-tools"></a> <a id="annotation-tool"></a>

* [Anafora](https://github.com/weitechen/anafora) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5657237/) - 注釈の不一致の裁定と進捗追跡を備える注釈ツール。
* [brat](https://brat.nlplab.org/) - [論文](https://www.aclweb.org/anthology/E12-2021/) - [コード](https://github.com/nlplab/brat) - brat rapid annotation tool（迅速に注釈を付けるツール）。ブラウザーで視覚的にテキスト注釈を作成。分野非依存で多様なプロジェクトに適し、可視化は[_stav_ ツール](https://github.com/nlplab/stav/)を基盤とします。
* [MedTator](https://ohnlp.github.io/MedTator/) - [論文](https://academic.oup.com/bioinformatics/article-abstract/38/6/1776/6496915) - [コード](https://github.com/OHNLP/MedTator) - 依存関係を最小限にした注釈ツール。


## 技法とモデル <a id="techniques-and-models"></a>

### 大規模言語モデル <a id="large-language-models"></a> <a id="large-language-model"></a>

固定原文では、この節の資料はまだ記載されていません。

### BERTモデル <a id="bert-models"></a>
* [BioBERT](https://github.com/naver/biobert-pretrained) - [論文](https://arxiv.org/abs/1901.08746) - [コード](https://github.com/dmis-lab/biobert) - PubMed／PubMed Centralで学習した[BERT 言語モデル](https://arxiv.org/abs/1810.04805)。
* ClinicalBERT - 似た名前を持つ2つの臨床テキスト学習済み言語モデル。両方ともMIMIC-IIIの臨床記録で学習したBERTです。
  * [Alsentzer et al Clinical BERT](https://github.com/EmilyAlsentzer/clinicalBERT) - [論文](https://www.aclweb.org/anthology/W19-1909/)
  * [Huang et al ClinicalBERT](https://github.com/kexinhuang12345/clinicalBERT) - [論文](https://arxiv.org/abs/1904.05342)
* [SciBERT](https://github.com/allenai/scibert) - [論文](https://arxiv.org/abs/1903.10676) - Semantic Scholar データベースの100万超の論文で学習したBERT モデル。
* [BlueBERT](https://github.com/ncbi-nlp/bluebert) - [論文](https://arxiv.org/abs/1906.05474) - PubMed テキストとMIMIC-IIIの臨床記録で事前学習したBERT モデル。
* [PubMedBERT](https://microsoft.github.io/BLURB/models.html) - [論文](https://arxiv.org/abs/2007.15779) - PubMedで一から学習したBERT モデル。抄録＋全文版と抄録のみ版があります。

### GPT-2モデル <a id="gpt-2-models"></a>
* [BioGPT](https://github.com/microsoft/BioGPT) - [論文](https://doi.org/10.1093/bib/bbac409) - 1,500万件のPubMed抄録で事前学習したGPT-2モデル。複数の生物医学タスク向けに微調整した版も提供。

### その他のモデル <a id="other-models"></a>
* [PubMed由来のFlair埋め込み](https://github.com/zalandoresearch/flair/pull/519) - Flair フレームワーク／埋め込み手法から利用できる言語モデル。2015年までのPubMed 抄録 5% 標本、合計120万超で学習。

### テキスト埋め込み <a id="text-embeddings"></a> <a id="text-embedding"></a>
* [Mayo ClinicのHongfang Liuの研究グループによる論文](https://www.sciencedirect.com/science/article/pii/S1532046418301825)は、生物医学・臨床テキストで学習した埋め込みが生物医学NLP タスクで常にではないものの高性能になり得ることを示します。分野固有埋め込みの学習は計算量が多いため、事前学習済み埋め込みが適する場合があります。
* [BioASQword2vec](http://bioasq.org/news/bioasq-releases-continuous-space-word-vectors-obtained-applying-word2vec-pubmed-abstracts) - [論文](http://bioasq.lip6.fr/info/BioASQword2vec/) - 人気の[word2vec](https://code.google.com/archive/p/word2vec/) ツールで1,000万超のPubMed 抄録から得た生物医学テキストの単語埋め込み。
* [BioWordVec](https://figshare.com/articles/Improving_Biomedical_Word_Embeddings_with_Subword_Information_and_MeSH_Ontology/6882647) - [論文](https://www.nature.com/articles/s41597-019-0055-0) - [コード](https://github.com/ncbi-nlp/BioWordVec) - 2,700万超のPubMed タイトル／抄録から得た単語埋め込み。MeSHベースのサブワード埋め込みモデルを含みます。


## データセット <a id="datasets"></a>

以下の一部データセットはアクセスに[UMLS Terminology Services（UTS）アカウント](https://www.nlm.nih.gov/databases/umls.html#license_request)が必要です。UTS アカウントのライセンスではUMLS 資料利用に関する年次報告書提出が必要ですが、見た目ほど難しくありません。

### 生物医学テキスト情報源 <a id="biomedical-text-sources"></a>

以下は生物医学の索引付きテキスト文書を含みます。
* [OHSUMED](http://davis.wpi.edu/xmdv/datasets/ohsumed.html) - [論文](https://dl.acm.org/citation.cfm?id=188557) - 1987〜1991年のMEDLINE 項目 348,566件（タイトル、場合により抄録）。MeSH ラベルを含み、主に歴史的意義があります。
* [PubMed Central Open Access Subset](https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/) - 従来の著作権以外のライセンスで使えるPubMed Central記事集。正確なライセンスは出版物・情報源ごとに異なり、PDF／XMLで利用可能。
* [CORD-19](https://github.com/allenai/cord19) - COVID-19に関する学術原稿コーパス。主にPubMed Centralとプレプリントサーバー由来で、全文のない論文メタデータも含みます。

### 注釈付きテキストデータ <a id="annotated-text-data"></a>

* [SPL-ADR-200db](https://bionlp.nlm.nih.gov/tac2017adversereactions/) - [論文](https://www.nature.com/articles/sdata20181) - FDA承認薬200種の既知有害反応約5,000件について標準化情報とテキスト内出現注釈を含む試行用データセット。
* [BioCreAtIvE 1](https://sourceforge.net/projects/biocreative/files/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-6-S1-S1) - タンパク質名・遺伝子名を注釈した15,000文（学習10,000・テスト 5,000）。タンパク質名／Gene Ontologyの用語を注釈した生物医学研究全文1,000件。
* [BioCreAtIvE 2](https://sourceforge.net/projects/biocreative/files/) - [論文](https://genomebiology.biomedcentral.com/articles/10.1186/gb-2008-9-s2-s1) - タンパク質名・遺伝子名を注釈した、初回コーパスとは異なる15,000文（学習10,000文、テスト5,000文）、EntrezGene IDに対応付けた抄録 542件、タンパク質間相互作用の特徴を注釈した各種論文。
* [BioCreAtIvE V CDR Task Corpus (BC5CDR)](https://biocreative.bioinformatics.udel.edu/accounts/login/?next=/resources/corpora/biocreative-v-cdr-corpus/) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw068/2630414) - 2014年以降の1,500記事（タイトル／抄録）。化学物質4,409件、疾患5,818件、化学物質・疾患間相互作用 3,116を注釈。登録必須。
* [BioCreative VI CHEMPROT Corpus](https://biocreative.bioinformatics.udel.edu/resources/corpora/chemprot-corpus-biocreative-vi/#chemprot-corpus-biocreative-vi:downloads) - [論文](https://pdfs.semanticscholar.org/eed7/81f498b563df5a9e8a241c67d63dd1d92ad5.pdf) - 多様な関係の種類の化学物質・タンパク質間相互作用を注釈した2,400超の記事。登録必須。
* [CRAFT](https://github.com/UCDenver-ccp/CRAFT) - [論文](https://link.springer.com/chapter/10.1007/978-94-024-0881-2_53) - 概念／共参照などを多様に注釈した生物医学全文67件。固定原文では版5で、MONDO疾患オントロジーへの概念リンクを含みます。
* [n2c2 (formerly i2b2) Data](https://portal.dbmi.hms.harvard.edu/projects/n2c2-nlp/) - Harvard Medical School DBMIが、2006年からのNational NLP Clinical Challenges／Informatics for Integrating Biology and the Bedsideのデータを管理。アクセス／利用前に登録必須。データセットはさまざまな主題を含みます。個別説明は[データ競技課題一覧](https://portal.dbmi.hms.harvard.edu/data-challenges/)を参照。
* [NCBI Disease Corpus](https://www.ncbi.nlm.nih.gov/CBBresearch/Dogan/DISEASE/) - [論文](https://www.sciencedirect.com/science/article/pii/S1532046413001974) - 疾患名とMeSH／[OMIM](https://omim.org/)の関連概念を注釈した生物医学抄録 793件。
* [PubTator Central datasets](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - RESTful API／FTP ダウンロードでアクセス可能。2,900万超の抄録と約300万の全文文書の注釈を収録。
* [Word Sense Disambiguation (WSD)](https://wsd.nlm.nih.gov/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-223) - 曖昧語203語と、生物医学研究出版物から自動抽出した用例37,888件。UTS アカウント必須。
* [Clinical Questions Collection](https://www.nlm.nih.gov/databases/download/CQC.html) - CQC／Iowa Collection（アイオワの質問集）とも呼ばれ、診療中に医師が出した数千の質問と回答を収録。
* [BioNLP ST 2013 datasets](http://2013.bionlp-st.org/) - 6つの共有タスクのデータ。一部はアクセスしにくい可能性があります。広範な実体・イベントの注釈にはCGタスクのデータ集合（BioNLP2013CG）を試してください。
* [BioScope](https://rgai.inf.u-szeged.hu/node/105) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2586758/) - 医学・生物学文書の文に否定、推測、言語的スコープを注釈したコーパス。
* [BioRED](https://ftp.ncbi.nlm.nih.gov/pub/lu/BioRED/) - [論文](https://arxiv.org/abs/2204.04263) - 6,500超の生物医学関係の注釈と新規知見ラベル。

### タンパク質間相互作用注釈コーパス <a id="protein-protein-interaction-annotated-corpora"></a> <a id="タンパク質間相互作用注釈corpus"></a>
タンパク質間相互作用はPPIと略します。以下は[BioC形式](http://bioc.sourceforge.net/)で利用できます。古い集合（AIMed、BioInfer、HPRD50、IEPA、LLL）は[WBI Corpora Repository](http://corpora.informatik.hu-berlin.de)提供で、[Turku Universityのグループ](http://mars.cs.utu.fi/PPICorpora/)が原集合から派生させました。

* [AIMed](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/aimed_bioc.xml.zip) - [論文](https://www.ncbi.nlm.nih.gov/pubmed/15811782) - PPIを注釈したMEDLINE 抄録 225件。
* [BioC-BioGRID](http://bioc.sourceforge.net/BioC-BioGRID.html) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw147/2884890) - PPI／遺伝的相互作用を注釈した全文120件。BioCreative V BioC タスクで使用。
* [BioInfer](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/bioinfer_bioc.xml.zip) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-8-50) - PPIを含む関係、固有表現、構文依存関係を注釈した生物医学抄録 1,100文。[追加情報・ダウンロード](http://mars.cs.utu.fi/BioInfer/)。
* [HPRD50](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/hprd50_bioc.xml.zip) - [論文](https://academic.oup.com/bioinformatics/article/23/3/365/236564) - Human Protein Reference Databaseが参照する科学抄録 50件へPPIを注釈。
* [IEPA](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/iepa_bioc.xml.zip) - [論文](http://psb.stanford.edu/psb-online/proceedings/psb02/abstracts/p326.html) - タンパク質を含む共起化学物質の組を注釈した生物医学抄録 486文（したがってPPIの注釈を含む）。
* [LLL](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/lll_bioc.xml.zip) - [論文](https://www.semanticscholar.org/paper/Learning-Language-in-Logic-Genic-Interaction-Nedellec/0863a9d71955341b7e1a6a6877d44d4f0bb22671) - 細菌_Bacillus subtilis_に関する論文77文へタンパク質・遺伝子間相互作用を注釈（PPIに近い）。[追加情報](http://genome.jouy.inra.fr/texte/LLLchallenge/#task1)。

### その他のデータセット <a id="other-datasets"></a>

* [Columbia Open Health Data](http://cohd.io) - [論文](https://www.nature.com/articles/sdata2018273) - EHRから抽出した病態、薬剤、処置、患者の人口統計学的属性の有病率・共起頻度DB。元の記録のテキストは含みません。
* [Comparative Toxicogenomics Database](https://ctdbase.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6323936/) - 化学物質、遺伝子産物、表現型、疾患、環境曝露間の人手で整理した関連のデータベース。化学物質の種類など関連概念オントロジーの組み立てに有用。
* [MIMIC-III](https://mimic.physionet.org/) - [論文](https://www.nature.com/articles/sdata201635) - ICU入院約6万件の個人を特定できる情報を除去した健康データ。利用前にオンライン研修（CITI研修）完了とデータ利用契約同意が必要。
* [MIMIC-CXR](https://physionet.org/content/mimic-cxr/2.0.0/) - MIMIC Chest X-Ray DB。377,000超のX線画像と付随する自由記述放射線診断報告書。MIMIC-III同様、データ利用契約同意が必要。
* [UMLS Knowledge Sources](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html) - [参照マニュアル](https://www.ncbi.nlm.nih.gov/books/NBK9676/) - 生物医学用語・識別子とツール／スクリプトの大規模で包括的な資料群。目的によってはUMLS Metathesaurusの全概念の一意ID／名称を含むMRCONSO.RRFだけで十分です。下のオントロジーと統制語彙も参照。
* [MIMIC-IV](https://mimic-iv.mit.edu/) - MIMIC-IIIの複数種類の患者データ更新版。より新しい入院年、新データ構造、救急部記録、MIMIC-CXR画像へのリンクを追加。
* [eICU Collaborative Research Database](https://eicu-crd.mit.edu/) - [論文](https://www.nature.com/articles/sdata2018178) - 一貫した構造を持つICU入院20万超の観察DB。登録、研修完了、データ利用契約が必要。


## オントロジーと統制語彙 <a id="ontologies-and-controlled-vocabularies"></a> <a id="ontologyと統制語彙"></a>

* [Disease Ontology](http://www.disease-ontology.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4383880/) - 人の疾患オントロジー。MeSH、ICD、NCI Thesaurus、SNOMED、OMIMへの相互リンクを持つパブリックドメイン。[GitHub](https://github.com/DiseaseOntology/HumanDiseaseOntology)と[OBO Foundry](http://www.obofoundry.org/ontology/doid.html)で利用可能。
* [RxNorm](https://www.nlm.nih.gov/research/umls/rxnorm/index.html) - [論文](https://academic.oup.com/jamia/article/18/4/441/734170) - 臨床で使う薬剤／薬剤パッケージの正規化名称。成分、含有量、剤形、Semantic Networkに基づく型を組み合わせ、毎月公開。
* [SPECIALIST Lexicon](https://lexsrv3.nlm.nih.gov/Specialist/Summary/lexicon.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2247735/) - 多数の生物医学用語を含む一般英語語彙集。1994年から年次更新され、2019年時点でも更新中。UMLSの一部ですがダウンロードにUTS アカウント不要。
* [UMLS Metathesaurus](https://www.nlm.nih.gov/research/umls/knowledge_sources/metathesaurus/index.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC308795/) - 380万超概念、1,400万概念名、200超の生物医学語彙・識別子の情報源間の対応付け。巨大です。[MetamorphoSys 導入ツール](https://www.nlm.nih.gov/research/umls/implementation_resources/metamorphosys/help.html)で部分集合を準備できますが、2019年版でも約30GB必要。[手引き](https://www.ncbi.nlm.nih.gov/books/NBK9684/)。UTS アカウント必須。
* [UMLS Semantic Network](https://semanticnetwork.nlm.nih.gov/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2447396/) - 生物医学概念／語彙を扱う133 種類の意味型と54種類の意味関係の一覧。Metathesaurusが複雑すぎる場合に試せます。ダウンロードにUTS アカウント不要。


## データモデル <a id="data-models"></a> <a id="data-model"></a>

[データモデル](https://en.wikipedia.org/wiki/Data_model)が必要ですか？生物医学データを扱うなら、おそらく答えは「はい」です。

* [Biolink](https://biolink.github.io/biolink-model/) - [コード](https://github.com/biolink/biolink-model) - 生物実体のデータモデル。[YAML](https://yaml.org/) ファイルとして提供。
* [BioUML](http://wiki.biouml.org/index.php/BioUML) - [論文](https://academic.oup.com/nar/article/47/W1/W225/5498754) - 生物医学データの分析、統合、可視化構成。視覚モデリング言語 [UML](https://www.uml.org/what-is-uml.htm)を概念的基盤とします。
* [OMOP Common Data Model](https://github.com/OHDSI/CommonDataModel) - 観察医療データの標準。
* [unmiri-ngs-fhir-schema](https://github.com/unmirihealth/unmiri-ngs-fhir-schema) - ベンダー横断の体細胞NGS解釈出力（Foundation Medicine、Tempus、Caris、Guardant）向けApache-2.0 JSON Schema（Draft 2020-12）API仕様。HL7 FHIR Genomics IGに準拠し、腫瘍検査報告書を解析する生物医学情報抽出パイプラインの標準準拠出力表現です。
