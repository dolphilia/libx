---
title: "caufieldjh/awesome-bioie"
description: "caufieldjh/awesome-bioie の定本スナップショット"
licenseSource: "github-caufieldjh-awesome-bioie-readme-md"
---

<div align="center">
	<img src="https://github.com/caufieldjh/awesome-bioie/blob/main/images/abie_head.png" alt="Awesome BioIE Logo"/>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<br>
	構造化されていない生物医学データとテキストから情報を抽出する方法。
	<br>
	
</div>

BioIEとは何でしょうか。これは、_非構造化_（または少なくとも一貫して構造化されていない）生物学、臨床、その他の生物医学データから構造化情報を抽出するあらゆる試みを含みます。データ源は専門用語で書かれた文書集であることが多く、得られた情報が検証可能で情報源をまたいで一貫していれば、それを_知識_とみなせます。生物データから情報を抽出して知識を作るには、ほかの非構造化データ向け手法の適応が必要です。

BioIEはBERTなどのLanguage Model、さらに近年のLarge Language Model（LLM。GPT-3/4、LLAMA2/3、Geminiなど）の登場以来、大きく変化しました。

ここでは金銭的費用がなく、License要件が限定的な資料を優先します。手法とデータセットは公開Access可能で、活発に保守されているものとします。

[awesome-nlp](https://github.com/keon/awesome-nlp)、[awesome-biology](https://github.com/raivivek/awesome-biology)、[Awesome-Bioinformatics](https://github.com/danielecook/Awesome-Bioinformatics)も参照してください。

_コントリビューション前に[ガイドライン](https://github.com/caufieldjh/awesome-bioie/blob/2689dd4118e0cb9be19a164bbf5165188f010d70/contributing.md)をお読みください。お気に入りの資料は[Pull Request](https://github.com/caufieldjh/awesome-bioie/pulls)で追加してください。_

## 目次
* [研究概観](#research-overviews)
* [活動中の研究グループ](#groups-active-in-the-field)
* [組織](#organizations)
* [学術誌とイベント](#journals-and-events)
  * [学術誌](#journals)
  * [カンファレンスなど](#conferences-and-other-events)
  * [Challenge](#challenges)
* [チュートリアル](#tutorials)
  * [ガイド](#guides)
  * [動画講義とオンライン講座](#video-lectures-and-online-courses)
* [Code Library](#code-libraries)
  * [特定データセットのリポジトリ](#repos-for-specific-datasets)
* [Tool、Platform、Service](#tools-platforms-and-services)
  * [Annotation Tool](#annotation-tools)
* [技法とモデル](#techniques-and-models)
* [データセット](#datasets)
  * [生物医学テキスト情報源](#biomedical-text-sources)
  * [注釈付きテキストデータ](#annotated-text-data)
  * [タンパク質間相互作用注釈Corpus](#protein-protein-interaction-annotated-corpora)
  * [その他のデータセット](#other-datasets)
* [Ontologyと統制語彙](#ontologies-and-controlled-vocabularies)
* [Data Model](#data-models)
* [クレジット](#credits)

## 研究概観

### 生物医学IEのLLM
* [医療におけるLarge Language Model：包括的Benchmark](http://dx.doi.org/10.1101/2024.04.24.24306315) - 医療言語タスクへ適用した16種のLLMに対する統計的・人手評価。
* [Large Language Modelの研究状況と臨床的有用性の評価：Scoping Review](https://doi.org/10.1186/s12911-024-02459-6) - 2024年3月時点の医療LLM応用に関する高水準Review。
* [医療におけるLarge Language Modelの倫理・規制上の課題](https://doi.org/10.1016/s2589-7500(24)00061-x) - 生物医学LLM応用から生じる倫理問題のReview。
* [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](http://dx.doi.org/10.1145/3442188.3445922) - Language Modelの役割、応用、Riskに関する、頻繁に参照され現在も関連性のある論文。

### LLM以前の概観
* [Cloud上のBiomedical Informatics：心血管医学を前進させる宝探し](https://www.ahajournals.org/doi/full/10.1161/CIRCRESAHA.117.310967) - BioIE／Bioinformatics Workflowを心血管の健康・医学研究の問いへ適用する方法。
* [臨床情報抽出応用：文献Review](https://www.sciencedirect.com/science/article/pii/S1532046417302563) - 2016年9月までの臨床IE論文をMayo Clinic GroupがReview。
* [Literature Based Discovery：モデル、手法、動向](https://www.sciencedirect.com/science/article/pii/S1532046417301909) - 無関係に見える科学文献間に意味あるつながりを見つけるというLBDのReview。
  * LBDの歴史的背景はUniversity of ChicagoのDon Swanson／Neil Smalheiserによる論文、[_Undiscovered Public Knowledge_](https://www.jstor.org/stable/4307965)（有料）と[_Rediscovering Don Swanson: the Past, Present and Future of Literature-Based Discovery_](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5771422/)を参照。
* [電子健康記録（EHR）のMining：Survey](https://arxiv.org/abs/1702.03222) - 有害事象検出を含むEHR Miningの手法と考え方。2017年半ば時点の関連論文は表2を参照。
* [患者の視点を捉える：健康関連テキストNLPの進歩に関するReview](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6250990/) - 健康記録とSocial Mediaテキストの情報抽出へNLPを適用した2017年Review。重要な指摘は、比較可能・再現可能な研究による手法開発を進めるため、Communityで共有・利用できるデータの入手可能性が主要課題だという点です。
* [Awesome AI-based Protein Design](https://github.com/opendilab/awesome-AI-based-protein-design) - AIベースのProtein Design研究論文集。

[先頭へ戻る](#contents)

## 活動中の研究グループ

* [Boston Children's Hospital Natural Language Processing Laboratory](http://www.childrenshospital.org/research/labs/natural-language-processing-laboratory) - 元Mayo Clinic／Apache cTAKES ProjectのGuergana Savova博士が主導。
* [Brown Center for Biomedical Informatics](https://www.brown.edu/academics/medical/about-us/research/centers-institutes-and-programs/biomedical-informatics/) - Brown Universityを拠点にNeil Sarkar博士が率い、臨床NLP／IEを研究。
* [Center for Computational Pharmacology NLP Group](http://compbio.ucdenver.edu/Hunter_lab/CCP_website/index.html) - University of Colorado Denverを拠点にLarry Hunterが主導。[GitHubリポジトリ](https://github.com/UCDenver-ccp)も参照。
* 米国National Institutes of Health（NIH）／National Library of Medicine（NLM）のGroup：
  * [NLMのDemner-Fushman Group](https://www.lhncbc.nlm.nih.gov/personnel/dina-demner-fushman)
  * [NCBIのBioNLP Group](https://www.ncbi.nlm.nih.gov/research/bionlp/) - Zhiyong Lu博士が率い、PubMedなどの生物医学文献検索・Curationを改善。
* [JensenLab](https://jensenlab.org/) - University of CopenhagenのNovo Nordisk Foundation Center for Protein Researchを拠点。
* [National Centre for Text Mining（NaCTeM）](http://www.nactem.ac.uk/) - University of Manchesterを拠点にSophia Ananiadou教授が率い、Text Mining全般、とりわけ生物医学応用を重視。
* [Mayo Clinicの臨床NLP Program](https://www.mayo.edu/research/departments-divisions/department-health-sciences-research/medical-informatics/projects) - 過去20年にApache cTAKESなどBioIEへ大きく貢献した複数Group。
* [Monarch Initiative](https://monarchinitiative.org/) - Oregon State University、Oregon Health & Science University、Lawrence Berkeley National Lab、The Jackson Laboratoryなどの共同活動。意味論を用いて生物情報を統合し、Phenotypeで知識Gapを橋渡しする新しい提示を目指します。
* [TurkuNLP](https://turkunlp.org/) - University of Turkuを拠点に、BioNLP／臨床応用を重視してNLP全般を研究。
* [UTHealth Houston Biomedical Natural Language Processing Lab](https://sbmi.uth.edu/nlp/) - University of Texas Health Science Center at Houston School of Biomedical Informaticsを拠点にHua Xu博士が主導。
* [VCU Natural Language Processing Lab](https://nlp.cs.vcu.edu/) - Virginia Commonwealth Universityを拠点にBridget McInnes博士が主導。
* [Zaklab](http://zaklab.org) - Harvard Medical School Department of Biomedical InformaticsのIsaac Kohane博士が主導。Kohane博士はn2c2（旧i2b2）データセットのStewardでもあります。下の[データセット](#datasets)を参照。
* [Columbia University Department of Biomedical Informatics](https://www.dbmi.columbia.edu/) - George Hripcsak博士とNoémie Elhadad博士が主導。

[先頭へ戻る](#contents)

## 組織

* [AMIA](https://www.amia.org/) - 生物医学情報学研究者の多く（全員ではありません）がAmerican Medical Informatics Association会員。学術誌JAMIAを発行。
* [IMIA](https://imia-medinfo.org/) - International Medical Informatics Association。IMIA Yearbook of Medical Informaticsを発行。

[先頭へ戻る](#contents)

## 学術誌とイベント

BioIEは学際的であり、研究者はさまざまな方法で成果・Toolを共有します。生物医学・Life Scienceでは一般的な学術誌論文、Computer Science・Engineeringでは一般的なConference Paperと採択後のPoster／口頭発表などです。Conference PaperはProceedingsとしてまとめられることが多く、Preprintも次第に一般化し機関に受容されています。これらの正式な成果物を取り巻くのが[Open Science](https://en.wikipedia.org/wiki/Open_science)、Open Data、Open Sourceであり、BioIE研究者が作るCode、Data、SoftwareはCommunityの重要資料です。

### 学術誌

Preprintは[arXiv](https://arxiv.org)のComputation and Language（cs.CL）／Information Retrieval（cs.IR）、[bioRxiv](https://www.biorxiv.org/)、[medRxiv](https://www.medrxiv.org/)のHealth Informaticsなどを試してください。

* [Database](https://academic.oup.com/database) - 副題は「The Journal of Biological Databases and Curation」。Open Access。
* [NAR](https://academic.oup.com/nar) - Nucleic Acids Research。幅広いBiomolecular領域を扱い、年次Database Issueで特に著名。
* [JAMIA](https://academic.oup.com/jamia) - Journal of the American Medical Informatics Association。臨床Care／Research、Translational／Implementation Science、Imaging、教育、Consumer Health、Public Health、Policyを扱います。
* [JBI](https://www.sciencedirect.com/journal/journal-of-biomedical-informatics) - Journal of Biomedical Informatics。既定ではOpen AccessではありませんがOpen Accessの「X」版があります。
* [Scientific Data](https://www.nature.com/sdata/) - 科学的価値のあるデータセットの説明と、科学データの共有・再利用を進める研究を掲載するSpringer NatureのOpen Access誌。

### カンファレンスなど

* [ACM-BCB](http://acm-bcb.org/) - ACM Conference on Bioinformatics, Computational Biology, and Health Informatics。2010年から毎年開催。
* [BIBM](http://ieeebibm.org/BIBM2019/) - IEEE International Conference on Bioinformatics and Biomedicine。
* [ISMB](https://www.iscb.org/about-ismb) - International Society for Computational Biologyが1993年から毎年開催するInternational Conference on Intelligent Systems for Molecular Biology。臨床を明示せずBioinformatics／Computational Biologyを主に扱いますが、Text Miningも増加。2019年には[Text Mining for Biology and Healthcareの終日特別Session](http://cosi.iscb.org/wiki/TextMining:Home)を開催。奇数年はEuropean Conference on Computational Biology（ECCB）と合同。
* [PSB](https://psb.stanford.edu/) - Pacific Symposium on Biocomputing。

### Challenge

BioIEの一部イベントは、与えられたデータセットへ各Groupが計算的Solutionを開発する正式Task／Challengeを中心に構成されます。

* [BioASQ](http://bioasq.org/) - 生物医学Semantic Indexing／Question AnsweringのChallenge。2013年から毎年ChallengeとWorkshopを開催。
* [BioCreAtIvE workshop](https://biocreative.bioinformatics.udel.edu/) - 2004年から開催。BioCreative VIは2017年2月、[BioCreative/OHNLP Challenge](https://sites.google.com/view/ohnlp2018/home)は2018年開催。下の[データセット](#datasets)も参照。
* [SemEval workshop](http://alt.qcri.org/semeval2020/) - Computational Semantic AnalysisのTask／評価。年ごとに異なりますが科学・生物医学言語を頻繁に扱い、例として[SemEval-2019 Task 12：科学論文のToponym Resolution](https://competitions.codalab.org/competitions/19948)があります。
* [eHealth-KD](https://knowledge-learning.github.io/ehealthkd-2019/) - SpanishのeHealth文書から多様な知識を自動抽出するSoftware Technology開発を促すChallenge。以前はSpanish Semantic Analysisの年次Workshop [TASS](http://www.sepln.org/workshops/tass/)の一部。
* [EHR DREAM Challenge](https://www.synapse.org/#!Synapse:syn18405991/wiki/589657) - [Bioinformatics中心のほかのChallenge](http://dreamchallenges.org/)と併催。2019年10月開始で、EHR Dataによる患者死亡予測を扱います。実在EHRではなくSynthetic Dataを使用。

[先頭へ戻る](#contents)

## チュートリアル

分野の変化が速く、数年以上前のチュートリアルには重要な詳細が欠けます。比較的新しい教育資料を以下に示します。Text Mining技法の基礎理解とPython／Rの基礎経験が有用で、実践しながら学ぶのが最善かもしれません。

### LLMガイド

_未定—今後の更新をお待ちください。_

### LLM以前のガイド、講義、講座

* [Getting Started in Text Mining](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0040020) - Cohen／HunterによるBio-Text Miningの短い入門。10年以上前ですが今も関連性があります。同著者の[以前の論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1702322/)も参照。
* [Biomedical Literature Mining](https://link.springer.com/book/10.1007/978-1-4939-0709-0) - 2014年Methods in Molecular Biologyの有料書籍。Text Mining入門原則、生物科学応用、臨床／Medical Safetyでの可能性を扱います。
* [Coursera - Foundations of mining non-structured medical data](https://www.coursera.org/learn/mining-medical-data) - テキスト・画像を含むさまざまな種類・構造の医療データを扱う約3時間の動画講義。比較的高水準で初心者向けと思われます。
* [JensenLab text mining exercises](https://jensenlab.org/training/textmining/)
* [VIB text mining and curation training](https://www.bits.vib.be/training-list/111-bits/training/previous-trainings/183-text-mining) - 2013年開催のTraining Workshopで、Slideは現在もOnline。

[先頭へ戻る](#contents)

## Code Library

* [Biopython](https://biopython.org/) - [論文](http://dx.doi.org/10.1093/bioinformatics/btp163) - [コード](https://github.com/biopython/biopython) - 主にBioinformatics／Computational Molecular Biology向けPython Tool。PubMed文書・Abstractを含むデータ取得にも便利（Documentation第9章参照）。
* [Bio-SCoRes](https://github.com/kilicogluh/Bio-SCoRes) - [論文](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0148538) - 生物医学Coreference Resolution Framework。
* [medaCy](https://github.com/NLPatVCU/medaCy) - 予測的医療NLP Model構築System。[spaCy](https://spacy.io/) Framework上に構築。
* [ScispaCy](https://github.com/allenai/SciSpaCy) - [論文](https://arxiv.org/abs/1902.07669) - 科学・生物医学文書向け[spaCy](https://spacy.io/) Framework。
* [rentrez](https://github.com/ropensci/rentrez) - PubMedを含むNCBI ResourceへAccessするR Utility。
* [Med7](https://medium.com/@kormilitzin/med7-clinical-information-extraction-system-in-python-and-spacy-5e6f68ab1c68) - [論文](https://arxiv.org/abs/2003.01271) - [コード](https://github.com/kormilitzin/med7) - 薬剤関連ConceptのNERを行うspaCy向けPython Package／Model。

### 特定データセットのリポジトリ

* [mimic-code](https://github.com/MIT-LCP/mimic-code) - MIMIC-IIIデータセット（下記）関連Code。有用な[チュートリアル](https://github.com/MIT-LCP/mimic-code/tree/master/tutorials)を収録。

[先頭へ戻る](#contents)

## Tool、Platform、Service

* [cTAKES](https://ctakes.apache.org/) - [論文](https://academic.oup.com/jamia/article/17/5/507/830823) - [コード](https://github.com/apache/ctakes) - 電子Medical Recordのテキスト処理System。広く利用されるOpen Source。
* [CLAMP](https://clamp.uth.edu/) - [論文](https://academic.oup.com/jamia/article/25/3/331/4657212) - 臨床Reportのテキスト向けNLP Toolkit。まず[Live Demo](https://clamp.uth.edu/clampdemo.php)で動作を確認できます。学術研究では無料利用可。
* [DeepPhe](https://github.com/DeepPhe/DeepPhe-Release) - Cancer Presentationを記述した文書の処理System。cTAKESベース。
* [DNorm](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/dnorm/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3810844/) - 疾患名・略語への言及を一意Concept IDへLinkするDisease Normalization手法。Download版はNCBI Disease CorpusとBC5CDR（下記）を同梱。
* [II-Commons](https://github.com/Intelligent-Internet/II-Commons-Skills) - PubMed/PMC、arXiv、対応US Policy Corpusを対象に、決定的で日次更新の検索、Metadata Lookup、全文Markdown取得を行うNode.js CLI／Agent Skill。
* [PubTator Central](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - PubMed記事・PubMed Central全文から5種類の生物医学Conceptを識別するWeb Platform。全Annotation SetをDownload可能です（下記の[注釈付きテキストデータ](#annotated-text-data)を参照）。
* [Pubrunner](https://github.com/jakelever/pubrunner) - PubMedの最新Document SetへText Mining Toolを実行するFramework。
* [SemEHR](https://github.com/CogStack/CogStack-SemEHR) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6019046/) - EHR向けIE Infrastructure。[CogStack Project](https://github.com/CogStack)上に構築。
* [TaggerOne](https://www.ncbi.nlm.nih.gov/research/bionlp/Tools/taggerone/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5018376/) - Concept Normalizationを実行。特定Concept Type向けに学習でき、ほかのNormalization機能から独立してNERも実行可能。
* [TabInOut](https://github.com/nikolamilosevic86/TabInOut) - [論文](https://link.springer.com/article/10.1007/s10032-019-00317-0) - 文献中の表からIEを行うFramework。

### Annotation Tool

* [Anafora](https://github.com/weitechen/anafora) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5657237/) - Adjudicationと進捗追跡を備えるAnnotation Tool。
* [brat](https://brat.nlplab.org/) - [論文](https://www.aclweb.org/anthology/E12-2021/) - [コード](https://github.com/nlplab/brat) - brat Rapid Annotation Tool。Browserで視覚的にText Annotationを作成。分野非依存で多様なProjectに適し、可視化は[_stav_ Tool](https://github.com/nlplab/stav/)を基盤とします。
* [MedTator](https://ohnlp.github.io/MedTator/) - [論文](https://academic.oup.com/bioinformatics/article-abstract/38/6/1776/6496915) - [コード](https://github.com/OHNLP/MedTator) - 依存関係を最小限にしたAnnotation Tool。

[先頭へ戻る](#contents)

## 技法とモデル

### Large Language Model

_未定—今後の更新をお待ちください。_

### BERTモデル
* [BioBERT](https://github.com/naver/biobert-pretrained) - [論文](https://arxiv.org/abs/1901.08746) - [コード](https://github.com/dmis-lab/biobert) - PubMed／PubMed Centralで学習した[BERT Language Model](https://arxiv.org/abs/1810.04805)。
* ClinicalBERT - 似た名前を持つ2つの臨床テキスト学習済みLanguage Model。両方ともMIMIC-IIIの臨床Noteで学習したBERTです。
  * [Alsentzerほか Clinical BERT](https://github.com/EmilyAlsentzer/clinicalBERT) - [論文](https://www.aclweb.org/anthology/W19-1909/)
  * [Huangほか ClinicalBERT](https://github.com/kexinhuang12345/clinicalBERT) - [論文](https://arxiv.org/abs/1904.05342)
* [SciBERT](https://github.com/allenai/scibert) - [論文](https://arxiv.org/abs/1903.10676) - Semantic Scholar Databaseの100万超の論文で学習したBERT Model。
* [BlueBERT](https://github.com/ncbi-nlp/bluebert) - [論文](https://arxiv.org/abs/1906.05474) - PubMed TextとMIMIC-III Noteで事前学習したBERT Model。
* [PubMedBERT](https://microsoft.github.io/BLURB/models.html) - [論文](https://arxiv.org/abs/2007.15779) - PubMedで一から学習したBERT Model。Abstract＋全文版とAbstractのみ版があります。

### GPT-2モデル
* [BioGPT](https://github.com/microsoft/BioGPT) - [論文](https://doi.org/10.1093/bib/bbac409) - 1,500万PubMed Abstractで事前学習し、複数の生物医学TaskへFine-TuneしたGPT-2 Model。

### その他のモデル
* [PubMedのFlair Embedding](https://github.com/zalandoresearch/flair/pull/519) - Flair Framework／Embedding Methodから利用できるLanguage Model。2015年までのPubMed Abstract 5% Sample、合計120万超で学習。

### Text Embedding
* [Mayo ClinicのHongfang Liu Groupによる論文](https://www.sciencedirect.com/science/article/pii/S1532046418301825)は、生物医学・臨床Textで学習したEmbeddingが生物医学NLP Taskで常にではないものの高性能になり得ることを示します。分野固有Embeddingの学習は計算量が多いため、事前学習済みEmbeddingが適する場合があります。
* [BioASQword2vec](http://bioasq.org/news/bioasq-releases-continuous-space-word-vectors-obtained-applying-word2vec-pubmed-abstracts) - [論文](http://bioasq.lip6.fr/info/BioASQword2vec/) - 人気の[word2vec](https://code.google.com/archive/p/word2vec/) Toolで1,000万超のPubMed Abstractから得た生物医学TextのWord Embedding。
* [BioWordVec](https://figshare.com/articles/Improving_Biomedical_Word_Embeddings_with_Subword_Information_and_MeSH_Ontology/6882647) - [論文](https://www.nature.com/articles/s41597-019-0055-0) - [コード](https://github.com/ncbi-nlp/BioWordVec) - 2,700万超のPubMed Title／Abstractから得たWord Embedding。MeSHベースのSubword Embedding Modelを含みます。

[先頭へ戻る](#contents)

## データセット

以下の一部データセットはAccessに[UMLS Terminology Services（UTS）Account](https://www.nlm.nih.gov/databases/umls.html#license_request)が必要です。UTS AccountのLicenseではUMLS Resource利用に関する年次Report提出が必要ですが、見た目ほど難しくありません。

### 生物医学テキスト情報源

以下は生物医学科学の索引付きText Documentを含みます。
* [OHSUMED](http://davis.wpi.edu/xmdv/datasets/ohsumed.html) - [論文](https://dl.acm.org/citation.cfm?id=188557) - 1987〜1991年のMEDLINE Entry 348,566件（Title、場合によりAbstract）。MeSH Labelを含み、主に歴史的意義があります。
* [PubMed Central Open Access Subset](https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/) - 従来のCopyright以外のLicenseで使えるPubMed Central記事集。正確なLicenseは出版物・情報源ごとに異なり、PDF／XMLで利用可能。
* [CORD-19](https://github.com/allenai/cord19) - COVID-19に関する学術原稿Corpus。主にPubMed CentralとPreprint Server由来で、全文のない論文Metadataも含みます。

### 注釈付きテキストデータ

* [SPL-ADR-200db](https://bionlp.nlm.nih.gov/tac2017adversereactions/) - [論文](https://www.nature.com/articles/sdata20181) - FDA承認薬200種の既知有害反応約5,000件について標準化情報とText内出現Annotationを含むPilot Dataset。
* [BioCreAtIvE 1](https://sourceforge.net/projects/biocreative/files/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-6-S1-S1) - Protein／Gene Nameを注釈した15,000文（学習10,000・Test 5,000）。Protein Name／Gene Ontology Termを注釈した生物医学研究全文1,000件。
* [BioCreAtIvE 2](https://sourceforge.net/projects/biocreative/files/) - [論文](https://genomebiology.biomedcentral.com/articles/10.1186/gb-2008-9-s2-s1) - Protein／Gene Nameを注釈した別の15,000文、EntrezGene IDへLinkしたAbstract 542件、Protein間相互作用の特徴を注釈した各種論文。
* [BioCreAtIvE V CDR Task Corpus（BC5CDR）](https://biocreative.bioinformatics.udel.edu/accounts/login/?next=/resources/corpora/biocreative-v-cdr-corpus/) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw068/2630414) - 2014年以降の1,500記事（Title／Abstract）。Chemical 4,409、Disease 5,818、Chemical–Disease Interaction 3,116を注釈。登録必須。
* [BioCreative VI CHEMPROT Corpus](https://biocreative.bioinformatics.udel.edu/resources/corpora/chemprot-corpus-biocreative-vi/#chemprot-corpus-biocreative-vi:downloads) - [論文](https://pdfs.semanticscholar.org/eed7/81f498b563df5a9e8a241c67d63dd1d92ad5.pdf) - 多様なRelation TypeのChemical–Protein Interactionを注釈した2,400超の記事。登録必須。
* [CRAFT](https://github.com/UCDenver-ccp/CRAFT) - [論文](https://link.springer.com/chapter/10.1007/978-94-024-0881-2_53) - Concept／Coreferenceなどを多様に注釈した生物医学全文67件。現在Version 5で、MONDO Disease OntologyへのConcept Linkを含みます。
* [n2c2（旧i2b2）Data](https://portal.dbmi.hms.harvard.edu/projects/n2c2-nlp/) - Harvard Medical School DBMIが、2006年からのNational NLP Clinical Challenges／Informatics for Integrating Biology and the BedsideのDataを管理。Access／利用前に登録必須。個別説明は[Data Challenge一覧](https://portal.dbmi.hms.harvard.edu/data-challenges/)を参照。
* [NCBI Disease Corpus](https://www.ncbi.nlm.nih.gov/CBBresearch/Dogan/DISEASE/) - [論文](https://www.sciencedirect.com/science/article/pii/S1532046413001974) - Disease NameとMeSH／[OMIM](https://omim.org/)の関連Conceptを注釈した生物医学Abstract 793件。
* [PubTator Central datasets](https://www.ncbi.nlm.nih.gov/research/pubtator/) - [論文](https://academic.oup.com/nar/article/47/W1/W587/5494727) - RESTful API／FTP DownloadでAccess可能。2,900万超のAbstractと約300万の全文DocumentのAnnotationを収録。
* [Word Sense Disambiguation（WSD）](https://wsd.nlm.nih.gov/) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-223) - 曖昧語203語と、生物医学研究出版物から自動抽出した用例37,888件。UTS Account必須。
* [Clinical Questions Collection](https://www.nlm.nih.gov/databases/download/CQC.html) - CQC／Iowa Collectionとも呼ばれ、診療中に医師が出した数千の質問と回答を収録。
* [BioNLP ST 2013 datasets](http://2013.bionlp-st.org/) - 6つのShared TaskのData。一部はAccessしにくい可能性があります。広範なEntity／Event AnnotationにはCG Task Set（BioNLP2013CG）を試してください。
* [BioScope](https://rgai.inf.u-szeged.hu/node/105) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2586758/) - 医学・生物学文書の文にNegation、Speculation、Linguistic Scopeを注釈したCorpus。
* [BioRED](https://ftp.ncbi.nlm.nih.gov/pub/lu/BioRED/) - [論文](https://arxiv.org/abs/2204.04263) - 6,500超の生物医学Relation Annotationと新規知見Label。

### タンパク質間相互作用注釈Corpus
Protein–Protein InteractionはPPIと略します。以下は[BioC形式](http://bioc.sourceforge.net/)で利用できます。古いSet（AIMed、BioInfer、HPRD50、IEPA、LLL）は[WBI Corpora Repository](http://corpora.informatik.hu-berlin.de)提供で、[Turku UniversityのGroup](http://mars.cs.utu.fi/PPICorpora/)が原Setから派生させました。

* [AIMed](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/aimed_bioc.xml.zip) - [論文](https://www.ncbi.nlm.nih.gov/pubmed/15811782) - PPIを注釈したMEDLINE Abstract 225件。
* [BioC-BioGRID](http://bioc.sourceforge.net/BioC-BioGRID.html) - [論文](https://academic.oup.com/database/article/doi/10.1093/database/baw147/2884890) - PPI／Genetic Interactionを注釈した全文120件。BioCreative V BioC Taskで使用。
* [BioInfer](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/bioinfer_bioc.xml.zip) - [論文](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-8-50) - PPIを含む関係、Named Entity、Syntactic Dependencyを注釈した生物医学Abstract 1,100文。[追加情報・Download](http://mars.cs.utu.fi/BioInfer/)。
* [HPRD50](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/hprd50_bioc.xml.zip) - [論文](https://academic.oup.com/bioinformatics/article/23/3/365/236564) - Human Protein Reference Databaseが参照する科学Abstract 50件へPPIを注釈。
* [IEPA](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/iepa_bioc.xml.zip) - [論文](http://psb.stanford.edu/psb-online/proceedings/psb02/abstracts/p326.html) - Proteinを含む共起Chemical Pairを注釈した生物医学Abstract 486文（したがってPPI Annotationを含む）。
* [LLL](http://corpora.informatik.hu-berlin.de/corpora/brat2bioc/lll_bioc.xml.zip) - [論文](https://www.semanticscholar.org/paper/Learning-Language-in-Logic-Genic-Interaction-Nedellec/0863a9d71955341b7e1a6a6877d44d4f0bb22671) - 細菌_Bacillus subtilis_に関する論文77文へProtein–Gene Interactionを注釈（PPIに近い）。[追加情報](http://genome.jouy.inra.fr/texte/LLLchallenge/#task1)。

### その他のデータセット

* [Columbia Open Health Data](http://cohd.io) - [論文](https://www.nature.com/articles/sdata2018273) - EHRから抽出したCondition、Drug、Procedure、Patient Demographicsの有病率・共起頻度DB。元Record Textは含みません。
* [Comparative Toxicogenomics Database](https://ctdbase.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6323936/) - Chemical、Gene Product、Phenotype、Disease、Environmental Exposure間の人手Curation Association DB。Chemical Typeなど関連Concept Ontologyの組み立てに有用。
* [MIMIC-III](https://mimic.physionet.org/) - [論文](https://www.nature.com/articles/sdata201635) - ICU入院約6万件のDeidentified Health Data。利用前にOnline Training（CITI Training）完了とData Use Agreement同意が必要。
* [MIMIC-CXR](https://physionet.org/content/mimic-cxr/2.0.0/) - MIMIC Chest X-Ray DB。377,000超のRadiographic Imageと付随する自由記述Radiology Report。MIMIC-III同様、Data Use Agreement同意が必要。
* [UMLS Knowledge Sources](https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html) - [Reference Manual](https://www.ncbi.nlm.nih.gov/books/NBK9676/) - 生物医学用語・IdentifierとTool／Scriptの大規模で包括的なCollection。目的によってはUMLS Metathesaurus全Conceptの一意ID／Nameを含むMRCONSO.RRFだけで十分です。下のOntology／統制語彙も参照。
* [MIMIC-IV](https://mimic-iv.mit.edu/) - MIMIC-IIIのMultimodal Patient Data更新版。より新しい入院年、新Data Structure、救急部記録、MIMIC-CXR ImageへのLinkを追加。
* [eICU Collaborative Research Database](https://eicu-crd.mit.edu/) - [論文](https://www.nature.com/articles/sdata2018178) - 一貫した構造を持つICU入院20万超の観察DB。登録、Training完了、Data Use Agreementが必要。

[先頭へ戻る](#contents)

## Ontologyと統制語彙

* [Disease Ontology](http://www.disease-ontology.org/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4383880/) - 人の疾患Ontology。MeSH、ICD、NCI Thesaurus、SNOMED、OMIMへのCross-Linkを持つPublic Domain。[GitHub](https://github.com/DiseaseOntology/HumanDiseaseOntology)と[OBO Foundry](http://www.obofoundry.org/ontology/doid.html)で利用可能。
* [RxNorm](https://www.nlm.nih.gov/research/umls/rxnorm/index.html) - [論文](https://academic.oup.com/jamia/article/18/4/441/734170) - Clinical Drug／Drug Packの正規化Name。成分、Strength、Form、Semantic Network由来Typeを組み合わせ、毎月Release。
* [SPECIALIST Lexicon](https://lexsrv3.nlm.nih.gov/Specialist/Summary/lexicon.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2247735/) - 多数の生物医学用語を含む一般英語Lexicon。1994年から年次更新され、2019年時点でも更新中。UMLSの一部ですがDownloadにUTS Account不要。
* [UMLS Metathesaurus](https://www.nlm.nih.gov/research/umls/knowledge_sources/metathesaurus/index.html) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC308795/) - 380万超Concept、1,400万Concept Name、200超の生物医学語彙・Identifier Source間のMapping。巨大です。[MetamorphoSys Installation Tool](https://www.nlm.nih.gov/research/umls/implementation_resources/metamorphosys/help.html)でSubsetを準備できますが、2019 Releaseでも約30GB必要。[Manual](https://www.ncbi.nlm.nih.gov/books/NBK9684/)。UTS Account必須。
* [UMLS Semantic Network](https://semanticnetwork.nlm.nih.gov/) - [論文](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2447396/) - 生物医学Concept／語彙を扱う133 Semantic Typeと54 Semantic Relationshipの一覧。Metathesaurusが複雑すぎる場合に試せます。DownloadにUTS Account不要。

[先頭へ戻る](#contents)

## Data Model

[Data Model](https://en.wikipedia.org/wiki/Data_model)が必要ですか？生物医学Dataを扱うなら、おそらく答えは「はい」です。

* [Biolink](https://biolink.github.io/biolink-model/) - [コード](https://github.com/biolink/biolink-model) - 生物EntityのData Model。[YAML](https://yaml.org/) Fileとして提供。
* [BioUML](http://wiki.biouml.org/index.php/BioUML) - [論文](https://academic.oup.com/nar/article/47/W1/W225/5498754) - 生物医学Dataの分析、統合、可視化Architecture。視覚Modeling Language [UML](https://www.uml.org/what-is-uml.htm)を概念的基盤とします。
* [OMOP Common Data Model](https://github.com/OHDSI/CommonDataModel) - 観察医療Dataの標準。
* [unmiri-ngs-fhir-schema](https://github.com/unmirihealth/unmiri-ngs-fhir-schema) - Vendor横断の体細胞NGS解釈出力（Foundation Medicine、Tempus、Caris、Guardant）向けApache-2.0 JSON Schema（Draft 2020-12）API Contract。HL7 FHIR Genomics IGに準拠し、Oncology Lab Reportを解析する生物医学情報抽出Pipelineの標準準拠Target Representationです。

[先頭へ戻る](#contents)

## クレジット

Curatorと情報源の[クレジット](https://github.com/caufieldjh/awesome-bioie/blob/2689dd4118e0cb9be19a164bbf5165188f010d70/CREDITS.md)。

## ライセンス
[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

[ライセンス](https://github.com/caufieldjh/awesome-bioie/blob/2689dd4118e0cb9be19a164bbf5165188f010d70/LICENSE)
