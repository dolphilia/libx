---
title: "Awesome Artificial General Intelligence and Computational Cognitive Sciences"
description: "Artificial General Intelligence and Computational Cognitive Sciencesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-YuzheSHI-awesome-agi-cocosci-readme-md"
---

# Awesome Artificial General Intelligence and Computational Cognitive Sciences

Artificial General Intelligence and Computational Cognitive Sciencesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

* [論文](#papers)
    * [アブダクション](#abduction)
      * [説明](#explanation)
      * [科学的発見](#scientific-discovery)
      * [合理化](#rationalization)
      * [AIへの応用](#applications-in-ai)
    * [ベイズモデリング](#bayesian-modeling)
      * [ベイズ帰納](#bayesian-induction)
      * [生成モデル](#generative-model)
      * [ノンパラメトリックモデル](#nonparametric-model)
      * [ベイズ最適化](#bayesian-optimization)
    * [概念](#concepts)
      * [概念理論](#theory-of-concepts)
      * [Human Concept Represenataion](#human-concept-representation)
      * [AIの概念表現](#ai-concept-representation)
    * [複雑性・情報理論](#complexity--information-theory)
      * [理論](#theory)
      * [次元削減](#dimensionality-reduction)
      * [視覚的複雑性](#visual-complexity)
    * [コミュニケーション](#communications)
      * [非言語コミュニケーション](#non-verbal-communication)
      * [語用論](#pragmatics)
      * [言語の構成性](#language-compositionality)
      * [協調](#coordination)
    * [ドメイン固有言語](#domain-specific-language)
      * [設計理論](#design-theory)
      * [設計実践](#design-practises)
      * [設計自動化](#design-automation)
      * [命令型DSLの応用](#imperative-dsl-applications)
      * [宣言型DSLの応用](#declarative-dsl-applications)
      * [論理DSLの応用](#logic-dsl-applications)
      * [DSLプログラム合成](#dsl-program-synthesis)
      * [認知的基盤](#cognitive-foundations)
    * [問題解決](#problem-solving)
      * [人間水準の問題解決](#human-level-problem-solving)
      * [計画](#planning)
      * [内発的動機づけ](#intrinsic-motivation)
      * [強化学習](#reinforcement-learning)
      * [逆強化学習](#inverse-reinforcement-learning)
    * [システム1とシステム2](#system-1--system-2)
      * [二重符号化理論](#dual-coding-theory)
      * [ニューラル記号AI](#neural-symbolic-ai)
    * [説明可能性](#explainability)
      * [信頼できるAI](#trustworthy-ai)
      * [強い機械学習](#strong-machine-learning)
      * [説明可能な深層学習](#explainable-deep-learning)
    * [身体性知能](#embodied-intelligence)
    * [進化的知能](#evolutionary-intelligence)
    * [実験方法論](#methodologies-for-experiments)
      * [定量分析](#quantitative-analysis) 
      * [行動研究の大規模化](#scaling-up-behavioral-studies)
      * [意思決定](#decision-making)
      * [質問応答](#question-answering)
      * [人間と機械の比較](#human-machine-comparison)
      * [連想テスト](#association-test)
      * [仮想現実](#virtual-reality)
    * [メタレベルの考察](#meta-level-considerations)
      * [メタ学習](#meta-learning)
      * [Marrの分析レベル](#marrs-levels-of-analysis)
      * [ゲシュタルト](#gestalt)
      * [アハ体験](#the-aha-moment)
      * [合理性](#rationality)
      * [認知アーキテクチャ](#cognitive-architecture)
    * [科学学](#science-logology)
      * [科学哲学](#philosophy-of-science)
      * [科学の科学](#science-of-science)
      * [文献マイニング](#literature-mining)
      * [科学執筆](#scientific-writing)
      * [科学教育](#science-education)
      * [科学の民主化](#democratization-of-science)
      * [研究室自動化](#laboratory-automation)
      * [AI支援研究](#ai-assisted-research)
    * [心の理論](#theory-of-mind)
    * [類推](#analogy)
    * [因果性](#causality)
    * [常識](#commonsense)
      * [直観物理](#intuitive-physics)
      * [AIの常識推論](#ai-commonsense-reasoning)
      * [常識知識ベース](#commonsense-knowledgebase)
    * [帰納論理とプログラム合成](#inductive-logic--program-synthesis)
    * [知識表現](#knowledge-representation)
    * [認知発達](#cognitive-development)
    * [オープンワールドでの学習](#learning-in-the-open-world)
    * [認知的妥当性を持つ学習](#learning-with-cognitive-plausibility)
    
* [研究ツール](#academic-tools)
    * [コース](#courses)
    * [プログラミング](#programming)
    * [論文執筆](#paper-writing)
    * [論文読解](#paper-reading)
    * [文献管理](#literature-management)
    * [知識管理](#knowledge-management)
* [研究機関と研究者](#institute--researcher)
    * [MIT](#mit)
    * [Stanford](#stanford)
    * [Princeton](#princeton)
    * [Harvard](#harvard)
    * [UCLA](#ucla)
    * [UC Berkeley](#uc-berkeley)
    * [BNU](#bnu)
    * [PKU](#pku)
    * [UCSD](#ucsd)
    * [NYU](#nyu)
    * [JHU](#jhu)
    * [SIT](#sit)
* [人物と書籍](#people--book)
    * [John Hopcroft](#john-hopcroft)
    * [Ulf Grenander](#ulf-grenander)
    * [David Marr](#david-marr)
    * [Michael Tomasello](#michael-tomasello)
    * [Judea Pearl](#judea-pearl)
    * [Susan Carey](#susan-carey)
    * [Daniel Kahneman](#daniel-kahneman)
    * [Karl Popper](#karl-popper)
* [本一覧について](#about)



## 論文 <a id="papers"></a>


### アブダクション <a id="abduction"></a>

#### 説明 <a id="explanation"></a>

* [Abduction](https://plato.stanford.edu/entries/abduction/index.html) - ***プラトン・スタンフォード***. 形式的哲学的アプローチによる「帰納」、「推論」、「帰納」の三つの思考パターンの一つである「帰納」についての説明で、現在の知識に新たなアイデアを導入する可能性を持つ点が特徴である。

* [Scientific Explanation](https://plato.stanford.edu/entries/scientific-explanation/) - ***プラトン・スタンフォード***. 「科学的説明」に関する形式的哲学的アプローチ。これは「帰納」の典型的な応用である。

* [Scientific Reduction](https://plato.stanford.edu/entries/scientific-reduction/) - ***プラトン・スタンフォード***. 「科学的簡約」に関する形式的哲学的アプローチ。これは説明との明確な境界を持たない。

* [Non-monotonic Logic](https://plato.stanford.edu/entries/logic-nonmonotonic/) - ***プラトン・スタンフォード***. 「非単調論理」に関する形式的哲学的アプローチ。これは、妥当性が失われる可能性を含む推論を捉え、表現するための形式的枠組みの家族である。

* [Philosophical Writings of Peirce](https://4lib.org/book/702071/e8ffe8) - ***Courier Corporation***, 1955. [[All Versions](https://scholar.google.com/scholar?cluster=3917019015464129592)]. C. S. ペアースがアブダクションという概念を初めて導入した哲学家による元々の文章。

* [Inference to the Best Explanation](https://www.hps.cam.ac.uk/files/lipton-inference.pdf) - ***Routledge***, 1991. [[All Versions](https://scholar.google.com/scholar?cluster=5097986614430666854)]. Lipton による、説明の最良推論がアブダクションの特殊な条件として機能するという論文の元々の資料。

* [Abductive Reasoning and Learning](https://link.springer.com/book/10.1007/978-94-017-1733-5) - ***Springer***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=12074269365138058159)]. 本書はアブダクションのさまざまな側面、論理的および数値的アプローチに関する主要な調査論文を収録している。

* [Abductive Cognition: The Epistemological and Eco-Cognitive Dimensions of Hypothetical Reasoning](https://link.springer.com/book/10.1007%2F978-3-642-03631-6) - ***Springer***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=8707351442527595188)]. 20世紀の多くの科学哲学家は、創造的プロセスの論理は存在せず、かつ、発見の合理的モデルも不可能であると結論づけている。つまり、科学的創造的推論は無理であり、仮説に対する「論理」は存在しない。一方、人工知能分野の一部の研究は、実験的または理論的法則および定理を再発見あるいは初めて発見するための、計算的に適切な方法が存在することを示している。

* [Explanation and Abductive Inference](https://cognition.princeton.edu/sites/default/files/cognition/files/explanation_abductive_inference.pdf) - ***The Oxford Handbook of Thinking and Reasoning***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=16126850654692681562)]. 本章は認知心理学および認知発達に関する証拠をレビューし、説明の構造と機能に焦点を当て、学習および推論における説明の役割を明らかにする。その結果は、説明およびアブダクション推論を、人間認知の基本的側面である表現、学習、推論に関する洞察を提供する現象として理解する価値があることを強調している。

* [Probabilistic models of cognition: Conceptual foundations](https://www.cell.com/AJHG/fulltext/S1364-6613(06)00132-X) - ***Trends in Cognitive Sciences***, 2006. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=12857321660837478492)]. 概率の数学およびコンピュータサイエンスにおける進展は、確率モデルの範囲に革命をもたらした。特に、「高度な」確率的手法は、グラフや文法といった構造化された関係システムに適用され、これは認知科学に即した関連性を持つ。このレビューは、急速に発展しているこの分野における進展を概観し、幅広い分野およびレベルの説明に統合的な視点を提供する可能性を示している。

* [The structure and function of explanations](https://cognition.princeton.edu/sites/default/files/cognition/files/tics_explanation.pdf) - ***Trends in Cognitive Sciences***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=2849189270394400667)]. 説明の生成および評価は、自然に起こり、広範に存在し、私たちの理解の感覚に根本的に関係している。最近の証拠は、個人の推論過程において、説明に参加することで、因果的主張に与えられる確率、性質の一般化方法、および学習に深刻な影響を与える可能性があることを示している。これらの影響は、説明の構造の二つの性質から生じている：説明は、事前の信念の文脈において新しい情報を吸収し、その結果、一般化を促進するように作用する。

* [Explanatory Preferences Shape Learning and Inference](https://scholar.princeton.edu/sites/default/files/cognition/files/explanatory_prefs_tics.pdf) - ***Trends in Cognitive Sciences***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=2040551538203889465)]. 人々はしばしば説明を求めて学び、仮説の妥当性を、データをどれだけ説明できるかによって評価する。近年の研究は、子どもや成人が、良い説明とは何かについて強いかつ体系的な直感を持っていることを明らかにし、これらの説明の好ましい傾向が説明に基づくプロセスに体系的に影響を与えることを示している。特に、人々は単純で広範な説明を好む傾向があり、その結果、説明の過程が人々にパターンを求めるように促し、広範かつ単純な説明を支持する仮説を好むようにする。

* [The Role of Explanatory Considerations in Updating](https://www.sciencedirect.com/science/article/pii/S0010027715000955) - ***Cognition***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=3089358487428261042)]. 本論文は、哲学における説明と推論の関係に関する議論を実験的に検証し、仮説の説明的価値の判断が、新しい証拠を受け取った際にその仮説に対する信念の度合いを修正する際に果たす役割を検討している。

* [Explanation, updating, and accuracy](https://www.tandfonline.com/doi/full/10.1080/20445911.2016.1230122) - ***Journal of Cognitive Psychology***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=967127146748155733)]. 人々が信頼の度合いを更新する際に、説明的要因を部分的に考慮しているという証拠がある。最近の哲学者は、その信頼の不正確さを最小限に抑えるために、人々の更新も説明的要因に基づいて部分的に行われるべきだと主張している。しかし、説明的要因が更新にどのように関与するかは、多くの方法があり、すべてが不正確さを最小限に抑えるとは限らない。人々が更新の際に、哲学者が推奨するような方法で説明的要因を考慮しているかどうかは、まだ開かれた問題である。この問題を解決するために、著者は、Douven および Schupbach が報告した実験のデータを再分析している。

* [Best, second-best, and good-enough explanations: How they matter to reasoning](https://psycnet.apa.org/record/2018-03972-001) - ***Journal of Experimental Psychology***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=3067550385175104201)]. 人々の推論が説明的要因によって影響を受けるという証拠は非常に多い。3つの実験は、哲学文献に記載された、特定の条件が満たされる場合に「最良の説明に推論する」という提案の説明的妥当性を検証している。主な結論は、(a) 説明の質は、人々がその説明を受け入れる意志を予測する上で優れた指標であり、説明の事前確率よりも優れた予測指標であり、(b) 二つ以上の可能性のある説明が提示された場合、人々が最も良い説明に推論する意志は、二番目に良い説明を評価するほど良いほど小さくなるという点である。

* [How explanation guides belief change](https://www.sciencedirect.com/science/article/pii/S1364661321001790) - ***Trends in Cognitive Sciences***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=15240531165875981526)]. 哲学者は、人々がベイズの法則に基づいて自分の評価を変化させべきだと主張している。最近の心理学研究は、人々が説明的要因に注目することで、その法則を違反することがあることを示している。計算モデルの結果は、そのような違反が実際に合理的である可能性を示している。

* [Use of current explanations in multicausal abductive reasoning](https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog2506_2) - ***認知科学***、2001. [[All Versions](https://scholar.google.com/scholar?cluster=7816050625957759346&hl=en&as_sdt=2005&sciodt=0,5)].

* [Kinematic mental simulations in abduction and deduction](https://www.pnas.org/content/110/42/16766.short) - ***Proceedings of the National Academy of Sciences***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=11864820390497230588)]. 本論文は、非公式なアルゴリズムおよびそれらから導かれる推論のアブダクションが、精神的シミュレーションによって支えられているという理論およびそのコンピュータ実装を提示している。3つの実験は、単一の鉄道線と側線の環境を用いて、この理論の予測を検証した。結果は、運動学的認知モデルの使用が非公式なアルゴリズムの作成と検証に有効であることを裏付けており、個人間でこれらのタスクを実行する能力に信頼性のある差があることを示している。

* [Patterns of abduction](https://link.springer.com/article/10.1007/s11229-007-9223-4) - ***Synthese***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=15230540023076470385&hl=en&as_sdt=0,5)]. 純粋哲学におけるアブダクションの分類。

* [Abduction: A categorical characterization](https://www.sciencedirect.com/science/article/pii/S1570868314000895) - 『応用論理ジャーナル』、2015年。 [[All Versions](https://scholar.google.com/scholar?cluster=17834260152484836885&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Defending Abduction](https://www.journals.uchicago.edu/doi/abs/10.1086/392744) - 科学哲学、1999。[[All Versions](https://scholar.google.com/scholar?cluster=13895790050138832555&hl=en&as_sdt=0,5)]。

* [On the distinction between Peirce's abduction and Lipton's Inference to the best explanation](https://link.springer.com/article/10.1007/s11229-009-9709-3) - ***シンテシス***、2011。 [[All Versions](https://scholar.google.com/scholar?cluster=7865291004729010145&hl=en&as_sdt=0,5)]。

* [Abduction − the context of discovery + underdetermination = inference to the best explanation](https://link.springer.com/article/10.1007/s11229-019-02337-z) - ***シンテシス***、2019。 [[All Versions](https://scholar.google.com/scholar?cluster=4261649938116694095&hl=en&as_sdt=0,5)]。

* [Towards an Architecture for Cognitive Vision Using Qualitative Spatio-temporal Representations and Abduction](https://link.springer.com/chapter/10.1007%2F3-540-45004-1_14) - ***空間認知***、2002. [[All Versions](https://scholar.google.com/scholar?cluster=8072265283930278310&hl=en&as_sdt=0,5)].

* [Abductive inference within a pragmatic framework](https://link.springer.com/article/10.1007/s11229-018-1824-6) - ***シンテシス***、2018。 [[All Versions](https://scholar.google.com/scholar?cluster=10285954503043361393&hl=en&as_sdt=0,5)]。

* [Disjunctive Abduction](https://link.springer.com/article/10.1007/s00354-019-00059-x) - ***新世代コンピューティング***、2019年。 [[All Versions](https://scholar.google.com/scholar?cluster=6664745483675209831&hl=en&as_sdt=0,5)]。

* [Probabilistic alternatives to Bayesianism: the case of explanationism](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00459/full) - ***Frontiers in Psychology***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=9016714668469830914&hl=en&as_sdt=0,5)]. 類推の非ベイズ的アプローチ.

* [A Probabilistic Theory of Abductive Reasoning](https://www.scitepress.org/Link.aspx?doi=10.5220/0010195405620571) - ***ICAART***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=450937566244876051&hl=en&as_sdt=0,5)]. 類推の解釈における確率的視点.

* [The order effect in human abductive reasoning: an empirical and computational study](https://www.tandfonline.com/doi/full/10.1080/09528130600558141?scroll=top&needAccess=true) - ***実験的・理論的人工知能ジャーナル***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=3803536062463585043&hl=en&as_sdt=0,5)].

* [Abduction, Induction, and Analogy](https://link.springer.com/chapter/10.1007%2F978-3-642-15223-8_5) - ***Model-Based Reasoning in Science and Technology***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=14979764682921693390&hl=en&as_sdt=0,5)]. 類推、帰納、類比の区別と関係.

* [Remembrance of inferences past: Amortization in human hypothesis generation](https://www.sciencedirect.com/science/article/abs/pii/S0010027718301094) - ***Cognition***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=190340622765037472&hl=en&as_sdt=2005&sciodt=0,5)]. 人間の仮説生成に関する合理的なアプローチ.

* [The AHA! Experience: Creativity Through Emergent Binding in Neural Networks](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1551-6709.2010.01142.x) - ***認知科学***、2012. [[All Versions](https://scholar.google.com/scholar?cluster=10006889101167052798&hl=en&as_sdt=0,5)].

* [Explanation-seeking curiosity in childhood](https://www.sciencedirect.com/science/article/pii/S2352154620300851) - ***Current Opinion in Behavioral Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=4167956555501133663&hl=en&as_sdt=2005)]. 幼児における類推に関する発達心理的証拠.

* [A Grammar of Hypotheses for Visualization, Data, and Analysis](https://arxiv.org/abs/2204.14267) - 2022. [[All Versions](https://scholar.google.com/scholar?cluster=10321469321980973246)]. 本研究は、視覚データ分析における仮説表現のための文法を提示し、これまで抽象的であった「分析タスク」という概念を形式化する。この文法の視点から、著者は、ユーザーのデータ分析に関する質問が、仮説（仮説空間）として実行可能かつ自動化される方法を構築する。著者は、この文法に基づく分析タスクアプローチが、視覚化研究における3つの異なる空間を統合するための体系的な方法を提供することを示している。その3つの空間とは、データセットが表現可能な仮説（データ仮説空間）、ユーザーが分析を通じて精緻化または検証したい仮説（分析仮説空間）、視覚化設計が支援可能な仮説（視覚化仮説空間）である。著者は、これらの3つの空間の形式化が、視覚化評価、知識抽出、解析プロVENANCE、視覚化推薦における今後の研究を、共通の仮説言語によって導くことを示している。最後に、提案された文法ベースアプローチを既存の視覚分析モデルと比較し、新しい仮説中心の視覚分析理論の可能性を論じている.

*[Back to Top](#c)

#### 科学的発見 <a id="scientific-discovery"></a>

* [Scientific Discovery](https://plato.stanford.edu/entries/scientific-discovery/) - ***Plato Stanford***. 科学発見に関する計算哲学的アプローチ、成功した科学調査のプロセスまたは成果、あるいは類推のような（説明）思考パターンを含むもの.

* [Models of Discovery: And Other Topics in the Methods of Science](https://hk1lib.org/book/2241843/c5d7b3?id=2241843&secret=c5d7b3) - ***Springer***, 1977. [[All Versions](https://scholar.google.com/scholar?cluster=9932701864897299105&hl=en&as_sdt=0,5)]. 検索としての科学的思考に関する元となる書籍.

* [Scientific discovery: Computational explorations of the creative processes](https://hk1lib.org/book/970300/6b0ff7?id=970300&secret=6b0ff7) - ***MIT Press***, 1987. [[All Versions](https://scholar.google.com/scholar?cluster=11327000316248254911)]. 本書は4つの部分に分けられている。第1部は発見の主題を紹介し、本研究の範囲を定義し、これまでに周囲にあった問題点について述べている。第2部と第3部は、主な結果を含み、主に人工知能プログラムが人間の思考プロセスを模倣して科学的発見を行う様子を記述している。第2部は、データから定量理論を誘導するプロセスに焦点を当てており、第3部は、データから定性的な記述および構造理論を誘導するプロセスに焦点を当てている。第4部では、これまでの経験に基づき、前章で述べたプログラムを統合して一つのより一般的な発見システムに組み込むための、より低い精度のレベルでの議論を行い、科学的発見に参加する他のプロセスの幅広い範囲について述べている.

* [Exploring science: The cognition and development of discovery processes](https://psycnet.apa.org/record/2000-03968-000) - ***MIT Press***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=13091264356550286420)]. 本書では、D. Klahrは、科学者が「科学的知識」と呼ばれる情報の体を形成するための認知および発達プロセスを説明する。過去10年間、Klahrと彼の同僚は、実験環境を構築し、実際の世界における科学的発見の特徴を持つ思考を引き起こすような「発見コンテキスト」を構築してきた。実験参加者（幼稚園児から大学学生まで）は、実際の科学者と同様の高次の認知プロセスを用いて、発見課題を解決している。Klahrの研究により、内容ベースアプローチとプロセスベースアプローチの2つの異なるアプローチを統合し、科学的発見の心理学に関する包括的なモデルを提示している.

* [Dual Space Search During Scientific Reasoning](https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1201_1) - ***Cognitive Science***, 1988. [[All Versions](https://scholar.google.com/scholar?cluster=17542852673494089523&hl=en&as_sdt=2005&sciodt=0,5)]. 二空間検索としての科学的思考理論に関する元となる論文.

* [Complexity Management in a Discovery Task](https://escholarship.org/uc/item/94n547fj) - ***CogSci'92***, 1992. [[All Versions](https://scholar.google.com/scholar?cluster=18138712608977258974)]. 過去の心理的研究は、単一の次元または少数の関連次元と簡単な二方向相互作用を持つ概念の発見に焦点を当てることが多く、本論文は、多値出力の複雑な三方向相互作用を含む概念を発見するための実験結果を提示している。22人のCMU大学院生がこのタスクに挑戦し、そのうち16人が成功し、平均85分で完了した。分析は、タスクの複雑性を調整するための3つの戦略に焦点を当てている。まず、参加者は深さ優先検索を広さ優先検索よりも好む傾向があり、成功した参加者は実験ごとに変化する特徴数を最も効果的に調整した。次に、参加者は実験の長さを系統的に調整した。さらに、成功した参加者が使用した新しい明示的検索ヒューリスティクス（スタックに置くヒューリスティクス）について述べている.

* [A dual-space model of iteratively deepening exploratory learning](https://www.sciencedirect.com/science/article/pii/S1071581996900324) - ***International Journal of Human-Computer Studies***, 1996. [[All Versions](https://scholar.google.com/scholar?cluster=17337189265334825678)]. 本論文は、試行錯誤と指示受容活動を含む探索学習の認知モデルを説明している。このモデルは、タスク指向の試行錯誤探索学習状況における参加者の実証データに基づいてSoarで実装されている。モデルに反映された重要な実証的発見は、可用メニュー項目の一部を繰り返しスキャンし、各スキャンごとにその項目に注目を強めるという点である。これは、外部インターフェースとユーザーの内部知識という二つの検索空間を、変化するコストと利益に注意を払いながらtentatively探索するという観点から説明されている.

* [Heuristics for Scientific Experimentation: A Developmental Study](https://www.sciencedirect.com/science/article/abs/pii/S0010028583710030) - ***Cognitive Psychology***, 1993. [[All Versions](https://scholar.google.com/scholar?cluster=2469515962071844494&hl=en&as_sdt=2005&sciodt=0,5)]. 子どもが基本的な科学的思考スキルを持つことの証拠.

* [A 4-Space Model of Scientific Discovery](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.645.248&rep=rep1&type=pdf) - ***CogSci'95***, 1995. [[All Versions](https://scholar.google.com/scholar?cluster=1063157789682040473&hl=en&as_sdt=2005&sciodt=0,5)]. 二空間検索の拡張.

* [When to trust the data: Further investigations of system error in a scientific reasoning task](https://link.springer.com/article/10.3758/BF03201090) - ***Memory & Cognition***, 1996. [[All Versions](https://scholar.google.com/scholar?cluster=3131191372086488656)]. 実験データの評価において、人々は誤ったフィードバックの可能性をどう扱うか？誤りの可能性があるため、データの信頼性に関する判断が評価に含まれる必要がある。本論文は、仮説検証状況における誤ったフィードバックに対する参加者の反応を焦点にした2つの研究を提示している。これは、Wason（1960）の2–4–6ルール発見タスクの変形であり、一部のフィードバックがシステム誤りにさらされたものである。「ヒット」が「ミス」と報告され、「ミス」が「ヒット」と報告された。結果は、以前の研究とは異なり、人々は偽陰性と偽陽性の識別に同等に優れている。さらに、成功した参加者は、正のテスト戦略（Klayman & Ha, 1987）を用いる傾向が、失敗した参加者よりも低い。最後に、他の研究では、実験前に可能な仮説を生成することで成功とタスク効率が向上することが示されているが、このような操作はシステム誤りの影響をほとんど軽減していない。

* [Confirmation, disconfirmation, and information in hypothesis testing](https://psycnet.apa.org/record/1987-20689-001) - 1987年『心理学会誌』。[[All Versions](https://scholar.google.com/scholar?cluster=1954141597807453515&hl=en&as_sdt=0,5)]。仮説検証に関する心理学的解説。

* [Hypothesis generation, sparse categories, and the positive test strategy](https://psycnet.apa.org/record/2010-22980-001) - 『心理学レビュー』2011年。[[All Versions](https://scholar.google.com/scholar?cluster=4329636480235863472&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Children and adults as intuitive scientists](https://psycnet.apa.org/record/1990-03504-001) - 『心理科学レビュー』1989年。[[All Versions](https://scholar.google.com/scholar?cluster=9577945454476127070&hl=en&as_sdt=2005&sciodt=0,5)]。科学的思考に対する検索反対の視点。

* [Abduction and styles of scientific thinking](https://link.springer.com/content/pdf/10.1007/s11229-019-02127-7.pdf) - ***Synthese***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9336871656706514469&hl=en&as_sdt=0,5)]. 推論と科学的思考を結びつける計算哲学的アプローチ。

*[Back to Top](#c)

#### 合理化 <a id="rationalization"></a>

* [Imagination and the generation of new ideas](https://www.sciencedirect.com/science/article/abs/pii/S0885201414000744) - ***認知発達***、2015。[[All Versions](https://scholar.google.com/scholar?cluster=16920774374067505248)]。想像の機能を説明するための理論が多数提示されているが、特に注目されているのは、想像が子どもたちの「理論の理解」と「反事実的推論」を促進・発展させることである。この研究では、想像の主な役割が、新しい事実を観察せずに、効率的に新しいアイデアを生み出すための認知メカニズムであると提唱している。学習者は、仮説を生成する必要があるため、その仮説の真偽を評価する前に仮説を構築しなければならない。無限に可能性がある中で、学習者はどのように仮説生成プロセスを制限するのか？著者は、学習者が問題解決に必要な抽象的な基準を表現し、その基準が真であれば問題を解決するような解決策を生成するという仮説を提示している。このアイデアを事前に検証するために、著者は、事実が存在しない状況（すなわち、事前の知識や統計データが競合する仮説を区別しない状況）において、4～6歳の子ども（平均年齢：63ヶ月）が問題の解決策に系統的に収束することを示している。これは、原因問題およびその解決策の抽象的性質を想像できる能力があることを示している。

* [How We Know What Not To Think](https://www.sciencedirect.com/science/article/pii/S1364661319302311) - ***認知科学のトレンド***、2019年。[[All Versions](https://scholar.google.com/scholar?cluster=13106919756521743226)]。人間は、実現されていない可能性のある行動——選ばれていない（またはまだ選ばれていない）無数の事柄——を表し、論理的に扱うことがよくあります。この能力は、人間が持つ最も印象的な能力の中心にあります：原因の理解、計画、言語的コミュニケーション、道徳的判断など。しかし、無数の実現されていない行動の中から、無視すべきものとして残すべき行動を選び、考慮すべきものとして選ぶにはどうすればよいでしょうか。本研究は、認知科学分野の研究を総合的にレビューし、その結果、デフォルトで考慮される可能性のある行動は、実際に起こる可能性が高く、かつ一般的に価値があるものであることがわかりました。本論文は、その理由について統一された理論を提示します。著者は、(i) 多様な認知タスクにおいて、私たちが考慮する可能性のある行動は、一般的な実用性を持つものに偏っていること、および(ii) このメカニズムの主な機能が意思決定にある可能性があること、を提唱しています。

* [Rationalization is rational](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/rationalization-is-rational/2A13B99ED09BD802C0924D3681FEC55B) - 『Behavioral and Brain Sciences』2020. [[All Versions](https://scholar.google.com/scholar?cluster=5165464589274056844)]. [[Preprint](https://bpb-us-e1.wpmucdn.com/websites.harvard.edu/dist/0/59/files/2022/03/rationalization_is_rational.pdf)]. 行動を実行した後に、その行動が合理的であったように見せかけるための信念や欲求を構築する現象を「合理化」と呼ぶ。その後、人々は自分の信念や欲求を、その構築されたものに合わせて調整する傾向がある。多くの研究が合理化の存在を示しており、いくつかの理論がその認知的メカニズムを説明しているものの、合理化の機能についてはほとんど理解が不十分である。なぜ、脳は自らの行動に対して、事後的に合理的な説明を構築し、それらを採用するように設計されているのか。これは、私たちの行動に影響を与えるさまざまなプロセスと表現の間で情報を伝達する重要な任務を達成する可能性がある。人間の意思決定は、一つのプロセスに依存しているわけではない。それは、論理、習慣、本能、規範などに影響されている。その中には、合理的な選択（つまり、期待値を計算し、最大化する）に従って組織化されていないものがある。合理化は、こうした非合理的なシステムが行動に与える影響から、真の信念や有用な欲求といった暗黙の情報を抽出する。

* [Rationalizing constraints on the capacity for cognitive control](https://www.sciencedirect.com/science/article/pii/S1364661321001480) - ***認知科学のトレンド***、2021. [[All Versions](https://scholar.google.com/scholar?cluster=13060297961922073063)]。人間は、(i) 同時に実行できる制御に依存するタスクの数、および(ii) 1つのタスクに集中できる集中度において、非常に制限されている。これらの制限は、認知理論のほとんどにおいて普遍的な前提として扱われている。しかし、人間がこれらの制約にさらされている理由については、まだ明確でない。本特集レビューは、心理学、神経科学、機械学習からの最新の洞察をもとに、認知制御の制約が、神経アーキテクチャにおける基本的な計算的課題への合理的な適応の結果であると提案する。レビューされた文献は、マルチタスクの制限が学習効果と処理効率のトレードオフの結果である可能性を示唆し、1つのタスクへの集中度の制限が、認知の安定性と柔軟性の間のトレードオフを反映している可能性を示している。

* [Why Imaginary Worlds? The psychological foundations and cultural evolution of fictions with imaginary worlds](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/why-imaginary-worlds/CA2AB4B1E1EDD8FE965E6DDB4A047B35) - ***Behavioral and Brain Sciences***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=16985691366494688837)]. 仮想世界は極めて成功している。過去数十年間に生まれた最も人気のあるフィクションには、こうした仮想世界が含まれている。これらは小説（例：『ルーンズ・オブ・ザ・リング』や『ハリー・ポッター』）、映画（例：『スター・ウォーズ』や『アバター』）、ゲーム（例：『ゼルダの伝説』や『ファイナル・ファンタジー』）、グラフィックノベル（例：『ワンピース』や『ナルト』）、テレビドラマ（例：『スター・トレック』や『ゲーム・オブ・スローンズ』）など、すべてのフィクションメディアに見られる。また、古代文学（例：『オデュッセイ』における『キュクロス諸島』、紀元前850年）にもそのような世界が存在する。なぜこのような成功なのか？なぜ、存在しない世界にこんなに多くの注目を寄せているのか？本論文では、仮想世界が、人間および非人間動物に進化してきた探索への好意を借りて、人々を新しい環境や新しい報酬の源へと導くと提案している。人間にとって、仮想世界は現実世界における未知の環境に引き寄せられるように、まったく同じ理由と状況で非常に魅力的である。行動生態学、環境美學、神経科学、進化および発達心理学における探索好意に関する研究を総合的に検討した結果、著者はその時間と空間における変動の源に注目し、それが文化における仮想世界への好意の変動を説明できると主張している。この仮説は、仮想世界がどのように文化的に進化したか、その形や内容、最近の著しい成功、そして時間と人間集団における分布を説明できるため、非常に有効である。

* [Coalescing the Vapors of Human Experience into a Viable and Meaningful Comprehension](https://escholarship.org/uc/item/5f64z7d7) - ***CogSci'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=5460385008324352958)]. 概念学習と理論獲得のモデルでは、学習者が構造的なランダムプロセスを通じて仮説を生成し、その品質や価値を測定するデータで仮説を評価する確率的探索プロセスがよく用いられる。このモデルが合理的な期間内に成功するためには、データを考慮する前に、優れた候補仮説を生成する方法が必要である。Schulz (2012a) は、新しいアイデアの起源を、たとえば新しい名前を思いつくような日常的な状況において研究することで、学習に用いられる優れた仮説を生成する認知プロセスを理解できると提案している。我々は、人々が経験をもとに、パブの名前やアクション映画などの日常的な分野で新しい名前を提案するプロセスについて、シンプルな生成モデルを提示し、実際に人々が思いつく名前を驚くほど正確に捉えていることを示している。また、類似の仮説生成メカニズムが、原因理論学習を可能にし、制約する上で果たす役割について述べている。

*[Back to Top](#c)

#### AIへの応用 <a id="applications-in-ai"></a>

* [Functional genomic hypothesis generation and experimentation by a robot scientist](https://www.nature.com/articles/nature02236) - ***Nature***, 2004. [[All Versions](https://scholar.google.com/scholar?cluster=17461972625475533182)]. 本論文は、人工知能の技術を応用して科学実験のサイクルを実行する物理的に実装されたロボットシステムについて述べている。このシステムは、観測を説明する仮説を自動的に生成し、その仮説を検証するための実験を設計し、実験ロボットを用いて実際の実験を実行し、結果を解釈してデータと不一致な仮説を否定し、その後同じサイクルを繰り返す。このシステムは、酵母（Saccharomyces cerevisiae）の遺伝子の機能決定に用いる削除変異体およびアウトロフィック成長実験に応用されている。著者は、芳香族アミノ酸合成経路の論理モデル（遺伝子、タンパク質、代謝物を含む）を詳細に構築し、検証した。

* [Interpretation as abduction](https://www.sciencedirect.com/science/article/abs/pii/0004370293900154?via%3Dihub) - ***人工知能***、1993年。[[All Versions](https://scholar.google.com/scholar?cluster=12658433318211361322)]。帰納は、最も妥当な説明に到達する推論である。著者は、「重み付き帰納」と呼ばれる帰納推論のアプローチを開発し、文の解釈問題の概念化を大きく簡略化した。文の解釈とは、その文が真である理由を最小限に説明することである。より正確には、文を解釈するには、既に共有されている知識からその文の論理形式を証明し、必要に応じて強制的変換を行い、冗長性を削減し、仮定を導入する必要がある。このような「局所的語用」問題、すなわち参照の解決、複合名詞の解釈、文法の曖昧性の解決およびメトニミー、およびスキーマ認識が、この方法で解決できることが示されている。さらに、「解釈として帰納」というアプローチは、「解析として帰納」という従来の視点と組み合わせることで、音韻からディスカッション構造までをカバーする、文法、意味、語用の包括的な統合を実現できる。

* [Probabilistic Horn abduction and Bayesian networks](https://www.sciencedirect.com/science/article/abs/pii/000437029390061F?via%3Dihub) - ***人工知能***、1993年。[[All Versions](https://scholar.google.com/scholar?cluster=7728248035489349629)]。この論文は、仮説に確率を関連付けるHorn規則の抽象化フレームワークを提示している。このフレームワークは、ルールベースに関する仮定と、仮説間の独立性に関する仮定を含んでいる。このフレームワークでは、離散的ベイズ信念ネットワークで表現可能なすべての確率的知識が表現可能であることが示されている。主な貢献は、論理的および確率的証拠推論の間の関係を発見することにある。これにより、ヒューリスティックと知識論的妥当性の間の妥当なバランスを提供する有用な表現言語が得られる。

* [Abductive Inference in Bayesian Networks: A Review](https://link.springer.com/chapter/10.1007/978-3-540-39879-0_6) - ベイズネットワークにおける進展、2004年。 [[All Versions](https://scholar.google.com/scholar?cluster=8502276402734843212)]。本論文の目的は、ベイズネットワークにおける帰納的推論（または信念の修正）という問題についての調査を提供することにある。そのため、この問題は2つの変種として導入される：全帰納（またはMPE）と部分帰納（またはMAP）。また、問題は一般ケースとして提示され、すなわちK個の最良説明を求める問題として形式化される。その後、全帰納および部分帰納の推論問題に対して正確かつ近似アルゴリズムの（非完全な）レビューが行われる。最後に、著者たちはMPEおよびMAPの問題に関して文献に登場する主要な複雑度結果をまとめている。

* [Abductive Logic Programming](https://academic.oup.com/logcom/article-abstract/2/6/719/942121) - 『論理計算のジャーナル』1992年。[[All Versions](https://scholar.google.com/scholar?cluster=18119357517656745518)]。この論文は、論理プログラミングの拡張による帰納的推論（帰納論理プログラミング）に関する最近の研究を概観し、批判的に評価したものである。著者は、帰納の一般枠組みおよび知識の吸収やデフォルト推論への応用を概説し、帰納を否定の失敗としての解釈に用いるための議論理論的アプローチを導入している。

* [ACLP: Abductive Constraint Logic Programming](https://www.sciencedirect.com/science/article/pii/S0743106699000758) - ***The Journal of Logic Programming***, 1999. [[All Versions](https://scholar.google.com/scholar?cluster=14319574550421192429)]. この論文は、帰納論理プログラミング（ALP）と制約論理プログラミング（CLP）を統合した帰納制約論理プログラミング（ACLP）のフレームワークを提示している。ACLPでは、帰納のタスクが制約解決との非自明な統合によってサポートされ強化されている。制約解決の統合が帰納的推論に導入されることで、一般形の構成帰納が可能となり、帰納を計算的に困難な問題に適用することができる。この論文は、ACLPフレームワークの形式的宣言的および操作的意味論を研究し、その応用をさまざまな問題に展開している。

* [Abduction in Logic Programming](https://link.springer.com/chapter/10.1007/3-540-45628-7_16) - ***論理計算***、2002。[[All Versions](https://scholar.google.com/scholar?cluster=902643678163312237)]。[[Preprint](https://web.stanford.edu/class/cs227/Readings/Abudction%20in%20LP.pdf)]。論理プログラミングにおける帰納論理は、1980年代後半から1990年代初頭にかけて、人工知能やコンピュータ科学の他の分野における多様な問題を扱うためのフレームワークを拡張する試みの下で始まった。本論文は、過去10年間におけるこの分野の主要な進展を整理し、論理的、知識論的、計算的、実用性の観点からこれらの進展を批判的に検討することを目的としている。本論文は、この分野のさらなる発展に向けた課題と展望の一部を明らかにしようとする。

* [Bayesian Abductive Logic Programs: A Probabilistic Logic for Abductive Reasoning](https://dl.acm.org/doi/abs/10.5555/2283696.2283887) - ***IJCAI'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=4453424083730209198)]. [[Preprint](https://www.cs.utexas.edu/~ml/papers/raghavan.starai10.pdf)]. 本研究では、ベイズ的帰納論理プログラム（BALP）を導入し、ベイズ論理プログラム（BLP）を帰納的推論に適応した確率論理を提案する。BLPと同様に、BALPは一階論理とベイズネットを組み合わせているが、BLPは推論を用いてベイズネットを構築するのに対し、BALPは論理的帰納を用いる。これにより、プラン／活動認識といった帰納的推論が必要な問題に対して、BALPはより適している。

* [Abductive Plan Recognition by Extending Bayesian Logic Programs](https://www.cs.utexas.edu/~ml/papers/raghavan.ecml11.pdf) - ***ECML'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=7276511797197017483)]. プラン認識は、観測された行動に基づいて、エージェントのトップレベルのプランを予測するタスクである。これは、原因から効果を推論する帰納的推論タスクである。これまでのプラン認識の大多数のアプローチは、一階論理または確率的グラフモデルを使用している。前者は不確実性を扱えず、後者は構造化された表現を扱えない。これらの制限を克服するために、本研究ではベイズ論理プログラム（BLPs）を用いたプラン認識アプローチを開発した。BLPsは一階論理とベイズネットワークを組み合わせているが、BLPsは論理的推論を用いてネットワークを構築するため、プラン認識に効果的に使用できない。そのため、著者はBLPsを論理的帰納を用いてベイズネットワークを構築するように拡張し、その結果をベイズ帰納論理プログラム（BALPs）と呼んでいる。著者は、BALPsのパラメータを、BLPsに適応した期待最大化アルゴリズムを用いて学習した。最後に、著者はBALPsを3つのベンチマークデータセット上で実験評価を行い、プラン認識における最適技術とその性能を比較した。

* [An Approach to Abductive Reasoning in Equational Logic](https://www.aaai.org/ocs/index.php/IJCAI/IJCAI13/paper/view/6624/6619) - ***IJCAI'13***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=686895264429811190)]. 論理における帰納推論は、人工知能における多くの応用から広く研究されてきた。しかし、その内在的な複雑性は、より表現力の高い論理において帰納的推論ツールの実装を制限してきた。著者らは、定数間の等式または非等式からなる文脈（ground flat equational logic）において、このようなツールを構築した。このツールは、素帰結の計算に基づいている。それは、すべての素帰結を生成するための緩和されたパラモダーション計算を用い、さらに、帰結を効率的に検出・除去できるように設計されたデータ構造を採用している。

* [Abduction-Based Explanations for Machine Learning Models](https://ojs.aaai.org//index.php/AAAI/article/view/3964) - ***AAAI'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7355960657107994022)]. マシンラーニング（ML）が多様な状況において広く応用されていることから、モデルが行った予測に対して小さな説明を計算できる能力が求められている。小さな説明は、人間の意思決定者にとって理解しやすいと一般的に受け入れられている。これまでの説明の計算に関する研究は、主にヒューリスティックなアプローチに基づいており、その解が、数値的または部分的に最小の説明にどれだけ近いかという品質の保証が一切ない。本論文では、任意のMLモデルに対して説明を計算するための制約に依存しない解決策を提案する。この解決策は、帰納的推論を活用し、MLモデルが特定の制約理由システムにおいて、あるオーラクルにより決定問題が解決可能な形で表現できるようにするという要件を課す。実験結果は、よく知られたデータセット上で得られ、提案されたアプローチのスケーラビリティおよび計算された解の品質を検証している。

* [Probabilistic Sufficient Explanations](https://www.ijcai.org/proceedings/2021/0424.pdf) - ***IJCAI'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1874102360688341104)]. 学習された分類器の動作を理解することは重要な課題であり、さまざまなブラックボックス説明、論理的推論手法、およびモデル固有の手法が提案されている。本論文では、分類のインスタンスを説明するという問題を、「最もシンプルな」特徴の部分集合として選択することとして定義する確率的十分説明を導入する。すなわち、その特徴だけを観測することで、データ分布においてすべての特徴を観測した場合にモデルが類似した行動を示すという強い確率的保証が得られるようにする。さらに、著者は確率的推論ツール（例：確率回路や期待予測）を活用し、必要な説明を効率的に見つけるアルゴリズムを設計しており、その保証を維持している。実験結果は、アルゴリズムが十分説明を見つける効果を示しており、アンカーメソッドや論理的説明と比較して優位性を示している。

* [Machine Translation Using Abductive Inference](https://www.aclweb.org/anthology/H91-1024.pdf) - ***COLING***, 1990. [[All Versions](https://scholar.google.com/scholar?cluster=15275163177548183539)]. 既存の機械翻訳アプローチの多くは、出力に含まれる情報が入力にどこかに存在していると前提にしているだけでなく、その情報は一つの表現レベル（例：パースツリーまたは「意味」に関する主張）で表現されるべきであると主張している。しかし、言語は、同等の情報をまったく異なる言語的手段で表現し、さらに、どのような区別が言語的に表現すべきかについてもしばしば意見が異なる。たとえば、日本語から英語への翻訳では、名詞句に決定詞を付与することがしばしば必要であり、これは一般的に元のテキストの深い理解なしには行えない。同様に、英語から日本語への翻訳では、英語では社会的状況に隠れたが、日本語では非常に広範な仮定の使用によって明確に表現される、礼儀の観点を日本語の文法に反映させる必要がある。したがって、機械翻訳は適切な推論を導き、テキストをある程度深く解釈する必要がある。最近、いくつかの場所で、帰納的推論に関する優れたアプローチが開発されており、すべてが帰納という概念に基づいている。著者は、このアプローチが機械翻訳への応用可能性を示す可能性があると主張している。著者は、このアプローチが、さまざまなレベルでの言語間の深層推論とマッピングを可能にする可能性があると述べている。

* [Automated Biodesign Engineering by Abductive Meta-Interpretive Learning](https://arxiv.org/abs/2105.07758) - ***AAAI Spring Symposium Series 2021 on Artificial Intelligence for Synthetic Biology***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=543730388062329581)]. 本研究では、Abductive Meta-Interpretive Learning（MetaAbd）という新しい機械学習手法を活用した自動バイオデザインエンジニアリングフレームワークを提案する。このフレームワークは、記号的およびサブ記号的機械学習を組み合わせることで、設計・建設・試験・学習サイクルをさらに強化する。この学習機械は、1）領域知識を活用し、形式言語（例：一階論理）で表現される人間が理解できるモデルを学習する；2）モデルの構造およびパラメータを同時に最適化し、正確な数値予測を行う；3）仮説と例を積極的に生成することで、実験コストおよびデータラベル付けの努力を削減する。

* [Human Comprehensible Active Learning of Genome-Scale Metabolic Networks](https://arxiv.org/abs/2308.12740) - ***AAAI Spring Symposium Series 2023 on Computational Scientific Discovery***, 2023. . . 本研究では、帰納論理プログラミング（ILP）に基づく新しい機械学習フレームワークILP-iML1515を導入する。このILP-iML1515フレームワークは、帰納的論理推論を行い、トレーニング例から積極的に学習する。ILP-iML1515フレームワークは、1）高スループットシミュレーションを可能にする、2）遺伝子機能の学習における実験コストを、ランダムに選ばれた実験に比べて減少させるために実験を積極的に選択する。 [[All Versions](https://scholar.google.com/scholar?cluster=10875437066608527790)] [[Extended Abstract](http://cogsys.org/symposium/discovery-2023/abstracts/Abstract_3169.pdf)] [[Slides](http://cogsys.org/symposium/discovery-2023/talks/Ai.pdf)]

* [Automated causal inference in application to randomized controlled clinical trials](https://www.nature.com/articles/s42256-022-00470-y) - ***Nature Machine Intelligence***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=7468801599737513065)]. 隨機化比較試験（RCT）は臨床分野における因果仮説の検証において、黄金基準とされているが、標準的な統計手法では、仮定された原因－効果の経路における患者の予後変数の検討は実現不可能である。本研究では、因果推論の枠組みである不変因果予測（ICP）を基盤として構築した新しい自動因果推論手法（AutoCI）を提案し、臨床試験データの因果的解釈を可能にする。既存手法と比較して、著者らは、提案されたAutoCIが、成熟した結果と広範な臨床病理および分子データを持つ実世界の2つのRCTにおいて、患者の因果変数を明確に特定できることを示している。これは、非因果変数の因果確率を大幅に抑制することで達成されている。消去試験において、著者らは、AutoCIが混同因子の存在下でも因果確率の割り当てが一貫していることをさらに示している。結論として、これらの結果は、AutoCIが将来の実世界臨床分析において、堅牢性と実用性を確実に保つことを確認している。



*[Back to Top](#c)


### ベイズモデリング <a id="bayesian-modeling"></a>

#### ベイズ帰納 <a id="bayesian-induction"></a>

* [Bayesian Epistemology](https://plato.stanford.edu/entries/epistemology-bayesian/) - ***Plato Stanford***. ベイズ認識論における確率モデルの性質に関する計算哲学的アプローチ。

* [Probabilistic machine learning and artificial intelligence](https://www.nature.com/articles/nature14541) - ***Nature***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=1783282361269717744)]. 確率モデルは、学習とは何かを理解するための枠組みを提供し、したがって、経験を通じてデータを学習する機械の設計において、理論的および実用的なアプローチの一つとして登場している。確率枠組みは、モデルおよび予測に関する不確実性を表現・操作する方法を示しており、科学データ分析、機械学習、ロボティクス、認知科学および人工知能の分野において中心的な役割を果たしている。本レビューは、この枠組みについての概説を提供し、分野における最新の進展、すなわち確率プログラミング、ベイズ最適化、データ圧縮および自動モデル発見について述べている。

* [Generalization, similarity, and Bayesian inference](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/generalization-similarity-and-bayesian-inference/595CAA321C9C56270C624057021DE77A) - ***Behavioral and Brain Sciences***, 2001. [[All Versions](https://scholar.google.com/scholar?cluster=14074987155133342565)]. [[Preprint](http://web.mit.edu/cocosci/archive/Papers/tenenbaum_griffiths01.pdf)]. Shepardは、異なる感覚・認知領域、さらには異なる種類の生物や異なる惑星間での一般化に普遍的な法則が適用されるべきであると主張している。自然な種のいくつかの基本的な前提に基づき、彼は一般化勾配の指数関数的減衰関数を導き出し、広範な実証データと非常によく一致している。しかし、彼の元の構成は、単一の刺激から単一の新しい刺激への一般化という理想的なケースに限定され、連続的な心理的空間における点として表現可能な刺激に適用されるものであった。著者らは、Shepardの理論をより一般的なベイズ枠組みに再構築し、これは彼のアプローチを、複数の結果をもつ刺激から任意の表現構造を持つ刺激に一般化する現実的な状況に自然に拡張することを示している。この枠組みは、Tverskyの集合論的類似性モデルの一種も包含しており、通常、Shepardの連続的なメトリック空間モデルの主な代替案とされている。

* [Bayesian modeling of human concept learning](https://proceedings.neurips.cc/paper_files/paper/1998/hash/d010396ca8abf6ead8cacc2c2f2f26c7-Abstract.html) - ***NeurIPS'98***, 1998. [[All Versions](https://scholar.google.com/scholar?cluster=3772493362518191863)]. [[Preprint](http://web.mit.edu/cocosci/archive/Papers/bayes.pdf)]. 本研究は、少数の陽性例から概念を学習する問題を扱い、これは人間が日常的に行っているが、コンピュータはほとんど実現できない能力である。機械学習と認知科学の視点を結びつけ、多次元特徴空間における軸に平行な矩形に対応する概念を学習するというシンプルなタスクについて、理論的分析と人間被験者の実証研究を提示している。既存の学習モデルがこのタスクに適用されても、被験者がわずかな例から一般化するメカニズムを説明できない。著者は、例が学習すべき概念からランダムに抽出されたサンプルであるという仮定に基づき、原則的なベイズモデルを提案している。このモデルは、このシンプルなタスクにおける人間の行動に正確な適合を示し、より複雑で現実的な概念学習のケースについても、質的な洞察を提供している。

* [Rules and Similarity in Concept Learning](https://proceedings.neurips.cc/paper/1999/hash/86d7c8a08b4aaa1bc7c599473f5dddda-Abstract.html) - ***NeurIPS'99***, 1999. [[All Versions](https://scholar.google.com/scholar?cluster=10968021160883668417)]. [[Preprint](http://web.mit.edu/cocosci/archive/Papers/nips99preprint.pdf)]. この論文は、概念の一般化に関する二つの明らかに異なるメカニズム—ルールの抽象化と例に基づく類似性の計算—が、より一般的なベイズ学習フレームワークの特殊ケースであるべきであると主張している。ベイズ理論は、これらの二つのメカニズムにおける具体的な動作—どのルールが抽象化されるか、類似性はどのように測定されるか—および、異なる状況において一般化がルールまたは類似性に基づくべきである理由を説明している。この分析は、ルール／類似性の区別が、計算的に基本的でなくても、アルゴリズムレベルにおいて、完全なベイズ学習への原則的な近似として依然として有用である理由を示唆している。

* [Theory-based Bayesian models of inductive learning and reasoning](https://www.cell.com/AJHG/fulltext/S1364-6613(06)00134-3) - ***Trends in Cognitive Sciences***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=6741344960992898446)]. [[Preprint](http://www.charleskemp.com/papers/TenenbaumGK06.pdf)]. 形容的帰納は、語の意味、観測されていない性質、因果関係など、世界の多くの側面について学習する際に、稀少なデータから強力な一般化を可能にする。帰納に関する従来の説明は、統計的学習の力または構造化された分野知識、直観的理論やスキームからの強い制約の重要性を強調している。この論文は、これらの二つの要素が、人間知識の性質、使用、獲得を説明するために必要であると主張し、著者は帰納学習と推論を構造化された知識表現上の統計的推論としてモデル化するための理論ベースのベイズフレームワークを導入している。

* [Word learning as Bayesian inference](https://psycnet.apa.org/doiLanding?doi=10.1037%2F0033-295X.114.2.245) - ***Psychological Review***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=5476233692839102256)]. [[Preprint](https://tallinzen.net/media/readings/xu_tenenbaum_2007.pdf)]. 著者は、成人および子どもが語の意味を学ぶ際にどのように学習するかを理解するためのベイズフレームワークを提示している。この理論は、学習者が、新しい語の参照例のわずか1つまたは数個の陽性例から意味を意味的に一般化できるようにするため、事前知識に基づく合理的な帰納的推論を用いる方法を説明している。この理論は、語学習をモデル化する二つの最も知られているアプローチ—帰納的仮説排除と関連学習—の欠点を解決している。成人および子どもを対象とした3つの実験は、カテゴリの階層構造における複数レベルでの物体カテゴリの語学習におけるベイズ理論の予測を検証している。結果は、定量モデル適合性および重要な質的現象の説明能力の観点から、ベイズ理論が競合理論よりも強く支持されている。基本理論のいくつかの拡張が議論されており、ベイズモデルが語学習において持つ広範な可能性を示している。

* [How to Grow a Mind: Statistics, Structure, and Abstraction](https://www.science.org/doi/full/10.1126/science.1192788) - ***Science***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=2667398573353002097)]. [[Preprint](https://cocosci.princeton.edu/tom/papers/growamind.pdf)]. このレビューは、人間の学習および認知発達を逆算する最近のアプローチと、より人間らしくなった機械学習システムを設計するアプローチを説明している。階層的に柔軟な構造を持つ表現上の確率的推論を行う計算モデルは、人間の思考の性質および起源に関するいくつかの最も深い問いに答えることができる：抽象的知識は、稀少なデータから学習と推論をどのように導くか？我々の知識は、異なる分野やタスクにおいてどのような形をとるか？そして、その抽象的知識自体はどのように獲得されるか？

* [Human-level concept learning through probabilistic program induction](https://www.science.org/doi/full/10.1126/science.aab3050) - ***Science***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=11844685101409624506)]. [[Preprint](https://ai6034.mit.edu/wiki/images/LakeDec2015.pdf)]. [[Supplementary Material](https://cims.nyu.edu/~brenden/LakeEtAl2015Science_supp.pdf)]. 新しい概念を学習する人々は、たった1つの例から成功裏に一般化できるが、機械学習アルゴリズムは通常、類似の精度で正確に動作するために数十または数百の例を必要とする。人々は、従来のアルゴリズムよりも、学習した概念を行動、想像、説明といったより豊かな形で使用できる。この研究は、世界のアルファベットから由来する手書き文字という多くの単純な視覚概念に対して、人間の学習能力を捉えるための計算モデルを提示している。このモデルは、観測された例をベイズ基準で最も説明するようなシンプルなプログラムとして概念を表現している。難関な1例分類タスクにおいて、このモデルは人間レベルの性能を達成し、最近の深層学習アプローチを上回っている。

* [Building Machines That Learn and Think Like People](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/building-machines-that-learn-and-think-like-people/A9535B1D745A0377E16C590E14B94993) - ***Behavioral and Brain Sciences***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=8504723689348856287)]. [[Preprint](https://leylaroksancaglar.github.io/Caglar_Hanson_2017.pdf)]. 人工知能の最新進展が、人間のように学び、考えることを可能にするシステムの構築に関心を再び呼び起こしている。多くの進展は、物体認識、ゲーム、ボードゲームなどのタスクにおいて、端末から訓練された深層ニューラルネットワークの使用によって得られたもので、いくつかの観点において人間の性能を達成または上回る結果をもたらしている。しかし、これらのシステムは生物学的インスピレーションや性能の達成をもっても、人間の知能とは重要な点で異なる。著者は、認知科学の進展をレビューし、本当に人間のような学習と思考を行う機械が、現在の工学的トレンドを越えて、学ぶ内容および学習方法の両面において進展を必要とすることを示している。具体的には、著者は、これらの機械が（1）世界の因果モデルを構築し、説明や理解を支えること、単にパターン認識問題を解決するのではなく、（2）物理や心理学の直感的な理論に基づいて学習を根拠づけ、学習された知識を支え、豊かにすること、および（3）構成性と学習による学習を活用し、新しいタスクや状況に対して知識を迅速に獲得し、一般化することを提唱している。著者は、これらの目標に向けた具体的な課題と有望な道筋を提示し、近年のニューラルネットワークの進展とより構造化された認知モデルの強みを組み合わせることを提案している。

* [Building machines that learn and think with people](https://www.nature.com/articles/s41562-024-01991-9) - ***Nature Human Behavior***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=4420595706578245444)]. [[Preprint](https://arxiv.org/abs/2408.03943)]. 本視点は、協働認知の科学が、本当に「思考パートナー」と呼べるシステムの設計にどのように応用されるかを示している。これらのシステムは、人間の期待に応え、人間の限界を補完するように設計されている。著者は、人間と人工知能の思考パートナーが協働できる複数の思考モードを提示し、人間と適合する思考パートナーシップのための要望を提案している。計算認知科学のモチーフをもとに、著者は、思考パートナーおよびその利用に関するエコシステムの設計において、ベイズ的視点から代替的なスケーリング経路を提案している。このアプローチでは、構築されたパートナーが人間および世界のモデルを積極的に構築し、推論を行うことになる。

* [The rational basis of representativeness](http://web.mit.edu/cocosci/archive/Papers/cogsci01_final.pdf) - ***CogSci'01***, 2001. [[All Versions](https://scholar.google.com/scholar?cluster=11464039134248091466&hl=en&as_sdt=0,5)].

* [Testing a Bayesian Measure of Representativeness Using a Large Image Database](https://proceedings.neurips.cc/paper/2011/hash/2c89109d42178de8a367c0228f169bf8-Abstract.html) - ***NeurIPS'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=8576570792794301292&hl=en&as_sdt=0,5)].

* [Constructing a hypothesis space from the Web for large-scale Bayesian word learning](https://cocosci.princeton.edu/tom/papers/abbott_cogsci2012_wordnet.pdf) - ***CogSci'12***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=9266416266046851766&hl=en&as_sdt=0,5)].

* [Modeling rules and similarity in colexification](https://escholarship.org/content/qt1md755ng/qt1md755ng.pdf) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=11578380234126546169)]. コレクシフィケーションにおけるルールベースおよび類似性ベースの一般化

* [Human-level few-shot concept induction through minimax entropy learning](https://www.science.org/doi/full/10.1126/sciadv.adg2488) - ***Science Advances***, 2024. [[All Versions](https://scholar.google.com/scholar?&cluster=9084477652494351940)]. 本論文は、最小エントロピーを用いてデータの最も効果的な制約を特定し、最大エントロピーを用いてそれらの組み合わせを最適に決定することで、IQテストなどの抽象的推論タスクにおける人間の帰納的推論をシミュレートするための計算モデルを導入している。

*[Back to Top](#c)

#### 生成モデル <a id="generative-model"></a>

* [Generative Modeling Explained](https://github.com/YuzheSHI/generative-modeling-explained) - ***Statistical Machine Learning Tutorials***, 2022. ユング・ニアン・ウのUCLA統計学部による統計機械学習チュートリアルの一部として、生成モデルに関するチュートリアルが提供されている。このチュートリアルでは、エネルギーベースモデル、拡散／スコアベースモデル、自己回帰／フローベースモデル、VAEs、GANsを含む最近の生成モデルの主要な式とアルゴリズムを解説し、これらのモデル間の関連性を説明している。

* [Bayesian Data Analysis](https://www.taylorfrancis.com/books/mono/10.1201/9780429258411/bayesian-data-analysis-andrew-gelman-donald-rubin-john-carlin-hal-stern) - ***Chapman and Hall/CRC***, 1995. [[All Versions](https://scholar.google.com/scholar?cluster=5067275302121330689&hl=en&as_sdt=0,5)]. ドン・ルビンによるベイズモデルの入門書

* [Filters, random fields and maximum entropy (FRAME): Towards a unified theory for texture modeling](https://link.springer.com/article/10.1023/A:1007925832420) - ***International Journal of Computer Vision***, 1998. . この論文は、テクスチャモデリングの統計理論を提示している。この理論は、フィルタ理論とマーカー確率場モデリングを最大エントロピー原理を通じて統合し、テクスチャ分析および合成のこれまでの概念や手法を統一的な視点から解釈・明確化している。この理論は、同じテクスチャ外観を持つ画像の集合を、確率分布f(I)で特徴づけ、テクスチャモデリングの目的は、観測されたテクスチャ例の集合に基づいてf(I)について推論することにある。 [[All Versions](https://scholar.google.com/scholar?cluster=11604954524863138240)] [[Preprint](https://dash.harvard.edu/bitstream/handle/1/3637117/Mumford_FRAME.pdf?sequence=1)]

* [Object Perception as Bayesian Inference](https://www.annualreviews.org/content/journals/10.1146/annurev.psych.55.090902.142005) - ***Annual Review of Psychology***, 2004. [[All Versions](https://scholar.google.com/scholar?cluster=1611451804975333652)]. [[Preprint](https://www.cs.jhu.edu/~ayuille/pubs/ucla/A189_dkersten_ARP2004.pdf)]. 私たちは、自然画像の複雑さや客観的な曖昧さにもかかわらず、物体の形状や物質特性を迅速かつ信頼性の高い方法で認識できる。典型的な画像は、背景の混雑に埋もれた多数の物体から構成されているため、非常に複雑である。さらに、投影、遮蔽、背景の混雑、照明の影響により、物体の画像特徴は極めて変動し、曖昧である。日常的な視覚の高い成功は、無関係な情報を無視し、曖昧またはノイズを含む局所的な画像特徴を物体や表面に組織化するための神経メカニズムを示唆しているが、まだ理解されていない。ベイズ的視覚認識理論の最近の研究では、事前知識と画像特徴をタスクに依存する確率的統合によって、複雑性を管理し、曖昧性を解決する方法が示されている。

* [A tale of three probabilistic families: Discriminative, descriptive, and generative models](https://www.ams.org/journals/qam/2019-77-02/S0033-569X-2018-01528-5/home.html) - ***Quarterly of Applied Mathematics***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=6129609629126793774)]. [[Preprint](http://www.stat.ucla.edu/~ywu/QAM2018.pdf)]. グレンナーのパターン理論は、パターンを代数構造上の確率モデルとして表現する数学的枠組みである。本論文では、分類モデル、描写モデル、生成モデルの3つの確率モデルファミリーについてレビューする。分類モデルは分類器の形をとる。これは、入力信号に基づくクラスラベルの条件確率を指定する。描写モデルは、エネルギー関数に基づいて信号の確率分布を指定する。生成モデルは、信号がある潜在変数を経由して変換によって生成されるものと仮定する。著者は、これらのモデルを共通の枠組みの中でレビューし、それらの関連性を検討し、さらに、深層ニューラルネットワークの高い近似能力を活用した最近の発展についてもレビューする。

* [From information scaling of natural images to regimes of statistical models](https://www.jstor.org/stable/43638808?seq=1) - ***Quarterly of Applied Mathematics***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=17387130978932998303)]. [[Preprint](http://www.stat.ucla.edu/~sczhu/papers/Quarterly_final.pdf)]. 自然画像データの一つの基本的な性質は、視覚が他の感覚タスク（例：音声認識）と区別される点として、スケールが画像形成および解釈において極めて重要な役割を果たす点である。特に、視覚物体は、視線距離やカメラ解像度の変化により、画像内で広範囲のスケールで現れる。同じ物体が異なるスケールで現れる場合、異なる統計的性質を持つ画像データが得られる。特に、この研究は、画像データのエントロピー率がスケールに応じて変化することを示している。また、推論の不確実性もスケールに応じて変化する。著者は、このような変化を「情報スケーリング」と呼んでいる。それらは、実証的にも理論的にも、波動稀疏符号化モデルとマーカー確率場モデルという二つの顕著でかつ孤立した画像モデルクラスを検討する。結果は、二つのモデルが異なるエントロピー領域に適していることを示している：稀疏符号化は低エントロピー領域に適しており、マーカー確率場は高エントロピー領域に適している。情報スケーリングが異なるエントロピー領域をつなぐため、稀疏符号化とマーカー確率場の両方が自然画像データの表現に必要であり、情報スケーリングがこの二つの領域間の遷移を引き起こす。

* [A Theory of Generative ConvNet](https://proceedings.mlr.press/v48/xiec16.html) - ***ICML'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=11062907630625111054)]. 著者は、多カテゴリ分類用のConvNetを仮定し、そのカテゴリの一つを参照分布によって生成されるベースカテゴリと仮定することで、通常使われる分類ConvNetから導かれる生成型確率場モデル（著者はこれを「生成型ConvNet」と呼んでいる）を示す。さらに、ConvNet内の非線形性が修正線形単位（ReLU）であり、参照分布がガウス白ノイズであると仮定した場合、エネルギーベースモデルの中でも一意の生成型ConvNetモデルが得られる：このモデルはピースワイズガウスであり、ガウスピースの平均は自動エンコーダーによって定義され、下向きのエンコーディングフィルタが上向きのデコーディングにおける基底関数となり、下向きのコネクションプロセスでフィルタによって検出された二値活性変数が上向きのデコネクションプロセスにおける基底関数の係数となる。

* [Cooperative Training of Descriptor and Generator Networks](https://ieeexplore.ieee.org/abstract/document/8519332) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=18202808849093155435)]. 本論文は、画像モデリングおよび合成のための二つの生成モデルの協調訓練を研究する。両モデルはコネクショナルニューラルネットワーク（ConvNets）によってパラメータ化されている。第一のモデルは深層エネルギーベースモデルであり、エネルギー関数は下向きのConvNetによって定義され、観測された画像をエネルギーにマッピングする。これを「ディスクリプターネット」と呼ぶ。第二のモデルは生成ネットワークであり、因子分析の非線形バージョンである。これは上向きのConvNetによって定義され、潜在因子を観測画像にマッピングする。両モデルの最大尤度学習アルゴリズムは、ランジェビン動力学などMCMCサンプリングを含む。この研究は、二つの学習アルゴリズムを、協調学習アルゴリズムにスムーズに統合し、両モデルを同時に訓練できることを観察する。具体的には、協調学習アルゴリズムの各反復において、生成モデルが初期合成例を生成し、有限ステップのMCMCを初期化する。その後、生成モデルはMCMCがその合成例をどのように変化させているかを学習する。つまり、ディスクリプターネットがMCMCによって生成モデルを指導し、生成モデルがMCMCの遷移を蓄積し、直接祖先サンプリングによってそれらを再現する。

* [Learning Latent Space Energy-Based Prior Model](https://proceedings.neurips.cc/paper/2020/hash/fa3060edb66e6ff4507886f9912e1ab9-Abstract.html) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=9945264852135249894)]. [[Project](https://bpucla.github.io/latent-space-ebm-prior-project/)]. [[Code](https://github.com/bpucla/latent-space-EBM-prior)]. ラテンエネルギーベースモデルに関する記録的な論文。

* [Learning Energy-Based Models by Diffusion Recovery Likelihood](https://openreview.net/forum?id=v_1Soh8QUNc) - ***ICLR'21***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=4399294843209736764)]. [[Code](https://github.com/ruiqigao/recovery_likelihood)].

* [Score-Based Generative Modeling through Stochastic Differential Equations](https://openreview.net/forum?id=PxTIG12RRHS&utm_campaign=NLP%20News&utm_medium=email&utm_source=Revue%20newsletter) - ***ICLR'21***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=14592788616550656262)].

* [Latent Space Factorisation and Manipulation via Matrix Subspace Projection](http://proceedings.mlr.press/v119/li20i.html) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=9592355331559392684)].

* [Minimax entropy principle and its application to texture modeling](https://ieeexplore.ieee.org/abstract/document/6796444) - ***ニューラルコンピューティング***、1997。[[All Versions](https://scholar.google.com/scholar?cluster=407872717119429940)]。[[Preprint](https://www.dam.brown.edu/people/mumford/vision/papers/1997e--MinimaxEntropy-NC.pdf)]。この論文は、画像（または信号）のさまざまな応用において統計モデルを構築するための一般理論および手法、すなわち「ミニマックスエントロピー原則」と呼ばれるものを提案する。この原則は二つの部分から成り立つ。第一は特徴結合（または融合）に対する最大エントロピー原則：与えられた観測された特徴統計の集合に対して、それらの特徴統計をすべての再現する分布の中でエントロピーを最大化することにより、分布を構築して結合する。第二は特徴選択に対する最小エントロピー原則：すべての可能性のある特徴統計の集合の中から、その最大エントロピー分布が最小エントロピーを持つ集合を選択する。両方の部分における計算および推論上の問題が扱われ、特に、最適な特徴集合を近似的に選択するための特徴探索プロトコルが提案される。さらに、観測された特徴統計におけるサンプル変動を考慮し、ミニマックスエントロピー原則を修正し、特徴探索用の情報基準を導出する。このミニマックスエントロピー原則は、テクスチャモデリングに応用され、新たなマーカーランダムフィールド（MRF）モデル、すなわちFRAME（フィルタ、ランダムフィールド、ミニマックスエントロピー）が導出され、さまざまなテクスチャ画像に対する実験において、好ましい結果が得られた。

* [Parameter Expansion for Data Augmentation](https://www.tandfonline.com/doi/abs/10.1080/01621459.1999.10473879) - 『アメリカ統計学会誌』1999年。 [[All Versions](https://scholar.google.com/scholar?cluster=15342818142955984734)]。 [[Preprint](http://www.stat.ucla.edu/~ywu/research/papers/PXDA.pdf)]。統計モデルの観測データを不完全とみなし、欠損部分を補完することは、概念の明確化に有用であり、期待最大化（EM）およびデータ補完の二つの有名な統計アルゴリズムの発明において中心的な役割を果たしている。最近、著者が、パラメータ空間を拡張しつつ欠損データを補完することで、EMアルゴリズムにおける反復計算を加速できることが示された。本論文の主目的は、パラメータ拡張データ補完（PX-DA）アルゴリズムを厳密に定義し、その理論的性質を研究することである。PX-DAは、補助変数を用いてギブスサンプリングアルゴリズムを加速する特別な手法であり、再パラメータ化技術と密接に関連している。

* [Image segmentation by data-driven markov chain monte carlo](https://ieeexplore.ieee.org/abstract/document/1000239) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2002. [[All Versions](https://scholar.google.com/scholar?cluster=3461400072144667491)]. [[Preprint](http://www.stat.ucla.edu/~sczhu/papers/DDMCMC_reprint.pdf)]. 本論文は、ベイズ統計フレームワークにおける画像セグメンテーションに用いられる、データ駆動型マーカーチェーンモンテカルロ（DDMCMC）と呼ばれる計算パラダイムを提示する。本論文は、画像セグメンテーションに関して4つの側面から貢献している。まず、複雑な解空間を効率的かつバランスの取れたマーカーチェーン動的プロセスによって探索し、初めのセグメンテーションに依存しないほぼグローバル最適解を達成する。次に、マーカーチェーンシーケンスから複数の異なる解を計算するための数学的原理およびKアドベンチャーアルゴリズムを提示し、画像セグメンテーションにおける内在的な曖昧性を反映する。第三に、クラスタリングやエッジ検出といったデータ駆動型（下位から上位）手法を用いて重要提案確率を計算し、マーカーチェーン動的プロセスを駆動し、従来のジャンプ拡散手法と比較して顕著な高速化を達成する。第四に、DDMCMCパラダイムは、エッジ検出、クラスタリング、領域成長、分割-合併、スネーク/バルーン、領域競争など、既存の多くのセグメンテーションアルゴリズムの役割を、マーカーチェーン動的プロセスの実現または重要提案確率の計算として明らかにし、これらセグメンテーション手法を原則的に統合・一般化する。

* [Efficient Learning of Sparse Representations with an Energy-Based Model](https://proceedings.neurips.cc/paper/2006/file/87f4d79e36d68c3031ccf6c55e9bbd39-Paper.pdf) - ***NeurIPS'06***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=2247668190782691760)].

* [A Tutorial on Energy-Based Learning](http://yann.lecun.com/exdb/publis/orig/lecun-06.pdf) - ***構造化データの予測、MIT Press***、2006。[[All Versiosn](https://scholar.google.com/scholar?cluster=8819502341081664768&hl=en&as_sdt=0,5)]。ヤン・レクンによるエネルギーベース学習に関するチュートリアル。

* [Unsupervised Representaton Learning with Deep Convolutional Generative Adversarial Networks](https://arxiv.org/abs/1511.06434) - ***ICLR'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=3321343160055675528&hl=en&as_sdt=0,5)].

* [Analysis of Langevin Monte Carlo via Convex Optimization](https://www.jmlr.org/papers/v20/18-173.html) - 『機械学習研究ジャーナル』、2019年。[[All Versions](https://scholar.google.com/scholar?cluster=5305860199396047317)]。この論文は、未調整ランゲvinアルゴリズムについて新たな洞察を提供する。著者らは、この手法が、順序2のワッサーティン空間上で定義された目的関数の1次最適化アルゴリズムとして表現できることを示している。この解釈と凸最適化から借りた技術を用い、この手法が、\mathbb{R}^d 上のlog-concaveかつ滑らかなターゲット分布からサンプリングするための非漸近解析を提供する。この解釈に基づき、著者らは非滑らかなターゲット分布からのサンプリングに新たな2つのアルゴリズムを提案する。これらの新しいアルゴリズムは、大規模ベイズ推論における未調整ランゲvinアルゴリズムの一般的な拡張である確率勾配ランゲvinダイナミクス（SGLD）アルゴリズムの自然な拡張である。最適化の視点から、新たに提案されたアルゴリズムについての非漸近収束解析を提供する。

* [A generative vision model that trains with high data efficiency and breaks text-based CAPTCHAs](https://www.science.org/doi/full/10.1126/science.aag2612) - ***Science***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=1478382321633671444)]. [[Preprint](https://www.cs.jhu.edu/~ayuille/JHUcourses/ProbabilisticModelsOfVisualCognition2020/Lec22/GeorgeCAPCHAS.pdf)]. 少数の例から学習し、著しい違いを持つ状況に一般化する能力は、人間の視覚知能の特徴であり、現在の最先端の機械学習モデルにはまだ達成されていない。システム神経科学の知見を参考に、本研究では視覚に関する確率的生成モデルを提案し、メッセージ伝達に基づく推論が認識、分割、推論を統一的に処理するように設計した。このモデルは、優れた一般化能力および遮蔽推論能力を示し、困難なシーンテキスト認識ベンチマークにおいて、深層ニューラルネットワークを300倍データ効率で上回る。さらに、このモデルは、現代のテキストベースのCAPTCHA（完全自動公開チューリングテストによるコンピュータと人間の区別）の防御を根本的に打ち破し、CAPTCHAに特化したヒューリスティクスを用いずに、文字を生成的に分割する。

* [Where do hypotheses come from?](https://www.sciencedirect.com/science/article/pii/S0010028516302766) - ***Cognitive Psychology***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=17480320046655923235)]. [[Preprint](https://gershmanlab.com/pubs/Dasgupta17.pdf)]. 人間の推論は、なぜ時々ベイズ的理想に非常に近い結果を示し、他の時には系統的にバイアスを示すのか？特に、候補仮説が明示的に可用な自然な領域では人間が近似合理的な推論を行うが、類似の領域において仮説を自発的に生成する必要があるタスクでは、合理的推論から系統的なずれが生じる。本研究では、これらのずれがベイズの法則を近似するアルゴリズムプロセスから生じると提案している。特に、本研究のアプローチでは、仮説はサンプリングプロセスから確率的に生成され、サンプルされた仮説がポスト確率のモンテカルロ近似を形成する。

*[Back to Top](#c)

#### ノンパラメトリックモデル <a id="nonparametric-model"></a>

* [A Bayesian Analysis of Some Non-parametric Problems](https://www.jstor.org/stable/2958008?seq=1) - ***The Annals of Statistics***, 1973. [[All Versions](https://scholar.google.com/scholar?cluster=3969163427460060902)]. [[Preprint](https://people.stat.sc.edu/hansont/stat740/Ferguson1973.pdf)]. 非パラメトリック問題に関する古典的なレビュー。

* [Mixtures of Dirichlet Process with Applications to Bayesian Nonparametric Problems](https://people.eecs.berkeley.edu/~jordan/courses/281B-spring04/readings/antoniak.pdf) - ***The Annals of Statistics***, 1974. [[All Versions](https://scholar.google.com/scholar?cluster=17937202534282344046&hl=en&as_sdt=0,5)]. 非パラメトリック問題におけるディリクレプロセスモデルの元論文。

* [Latent Semantic Indexing: A Probabilistic Analysis](https://www.sciencedirect.com/science/article/pii/S0022000000917112) - ***Journal of Computer and System Sciences***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=7296120469860429813&hl=en&as_sdt=0,5)]. ヒエラルキー付きトピックモデルの元論文。

* [Nonparametric Bayesian Data Analysis](https://projecteuclid.org/journals/statistical-science/volume-19/issue-1/Nonparametric-Bayesian-Data-Analysis/10.1214/088342304000000017.full) - ***統計科学***、2004年。[[All Versions](https://scholar.google.com/scholar?cluster=13476170780072319995)]。この論文は、非パラメトリックベイズ推論の現状をレビューしている。議論は、密度推定、回帰、生存分析、階層モデルおよびモデル検証といった重要な統計推論問題のリストに従って進む。各推論問題について、著者は関連する非パラメトリックベイズモデルおよびアプローチ（ディリクレプロセス（DP）モデルおよびその変種、ポリア木、ウェーブレットベースのモデル、ニューラルネットワークモデル、スプライン回帰、CART、依存DPモデルおよびパラメトリックモデルへのDPおよびポリア木の拡張によるモデル検証）を紹介している。

* [Finding scientific topics](https://www.pnas.org/doi/abs/10.1073/pnas.0307752101) - ***米国国家科学院論文集***、2004年。[[All Versions](https://scholar.google.com/scholar?cluster=17382767110929995134)]。ドキュメントの内容を特定する第一歩として、そのドキュメントが扱っているトピックを特定する必要がある。この論文では、ドキュメントを生成するための生成モデルを説明しており、各ドキュメントは、トピックの分布を選び、その分布に従って選ばれたトピックからドキュメント内の各単語を選びながら生成される。著者は、このモデルにおける推論に用いるマーカーチェーンモンテカルロアルゴリズムを提示している。著者は、このアルゴリズムを用いて、PNASの抽象を分析し、ベイズモデル選択によりトピックの数を決定している。この研究は、抽出されたトピックがデータに意味のある構造を捉えていることを示しており、著者の記事の分類指定と一致しており、この分析のさらなる応用例（時間的動態を検討して「ホットトピック」を特定し、抽象にセマンティックコンテンツを示すタグを付与するなど）を示している。

* [Hierarchical topic models and the nested Chinese restaurant process](https://proceedings.neurips.cc/paper/2003/file/7b41bfa5085806dfa24b8c9de0ce567f-Paper.pdf) - ***NeurIPS'03***、2003年。[[All Versions](https://scholar.google.com/scholar?cluster=15040818675282958700&hl=en&as_sdt=0,5)]。ネストされた中国レストランプロセスの元論文。

* [Learning Systems of Concepts with an Infinite Relational Model](https://www.aaai.org/Papers/AAAI/2006/AAAI06-061.pdf) - ***AAAI'06***、2006年。[[All Versions](https://scholar.google.com/scholar?cluster=3207350432755252565&hl=en&as_sdt=0,5)]。

* [The nested chinese restaurant process and bayesian nonparametric inference of topic hierarchies](https://dl.acm.org/doi/abs/10.1145/1667053.1667056) - ***ACMジャーナル***、2010年。[[All Versions](https://scholar.google.com/scholar?cluster=8216933258869737505&hl=en&as_sdt=0,5)]。

* [Infinite Latent Feature Models and the Indian Buffet Process](http://mlg.eng.cam.ac.uk/zoubin/papers/ibptr.pdf) - ***Gatsby Computational Neuroscience Unit Technical Report 2005-001***, 2005. [[All Versions](https://scholar.google.com/scholar?cluster=13180738480564152907&hl=en&as_sdt=0,5)].

* [The Indian Buffet Process: An Introduction and Review](https://jmlr.org/papers/v12/griffiths11a.html) - ***Journal of Machine Learning Research***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=6301314251995890943)]. インドイアン・バーフィスト過程は、有限行と無限列を持つ稀疏な二値行列の同値クラスの確率分布を定義する確率過程である。この分布は、対象を潜在的に無限の特徴量の配列で表現する、または少なくとも一つのノードクラスのサイズが未知の二部グラフを含む確率モデルにおいて、事前分布として使用するのに適している。本稿では、この分布の詳細な導出を示し、無限潜在特徴量モデルにおける事前分布としての利用を例示する。著者らは、機械学習におけるインドイアン・バーフィスト過程の最近の応用をレビューし、その拡張について述べ、他の確率過程との関連性を要約する。

* [Nonparametric Bayesian Logic](https://dl.acm.org/doi/abs/10.5555/3020336.3020347) - ***UAI'05***, 2005. [[All Versions](https://scholar.google.com/scholar?cluster=18267211625980322095)]. [[Preprint](https://www.cs.ubc.ca/~nando/papers/npblog.pdf)]. ベイズ論理（BLOG）言語は、未知の数のオブジェクトを持つ世界における第一順位確率モデルを定義するための最近の開発である。AIにおける重要な問題、データ関連および人口推定を扱う。本論文は、関数空間上の生成過程——ベイズ文献における非パラメトリックと呼ばれるもの——を採用することでBLOGを拡張する。本研究では、任意のオブジェクトの集合およびその性質について、直感的に論理的に扱うための構文を導入する。交換可能性を活用することで、未知のオブジェクトおよびその属性に関する分布はディリクレ過程に変換され、オブジェクト数の変動によって生じるモデル選択および推論の困難を解決する。

* [Infinite Hidden Relational Models](https://dl.acm.org/doi/abs/10.5555/3020419.3020485) - ***UAI'06***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=2143172296528388141)]. [[Preprint](https://www.dbs.ifi.lmu.de/~yu_k/uai06_relation.pdf)]. リレーションシップ学習は、エンティティの属性および関係間の確率的制約を分析する。本研究では、各エンティティ（またはオブジェクト）に対して、ディリクレ過程（DP）混合モデルの一部として無限次元の潜在変数を導入することで、リレーションモデルの表現力の拡張を行う。本稿では、DPギブスサンプラー、すなわち中国レストラン過程に基づくモデルにおける推論について述べ、著者らは中国レストラン過程をリレーションモデルに適用可能なように拡張する。

* [Statistical Predicate Invention](https://alchemy.cs.washington.edu/papers/kok07/kok07.pdf) - ***ICML'07***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=17009312281859401704)]. 本研究では、統計関係学習における重要な問題として「統計述語発見（SPI）」を提案する。SPIとは、構造データにおいて新しい概念、性質および関係を発見する問題であり、統計モデルにおける隠れ変数発見およびILPにおける述語発見を一般化する。本研究では、述語および引数が変数であり、議論の領域が事前に完全に知られていない第二階層マーカー論理に基づく初期モデルを提案する。提案されたアプローチは、述語が出現する原子（例えば、関係は関連するオブジェクトのクラスタによって分類される）のシンボルクラスタに基づいて、シンボルクラスタを反復的に精緻化する。

*[Back to Top](#c)

#### ベイズ最適化 <a id="bayesian-optimization"></a>

* [Taking the Human Out of the Loop: A Review of Bayesian Optimization](https://ieeexplore.ieee.org/abstract/document/7352306) - ***IEEEの会議録***、2015年。[[All Versions](https://scholar.google.com/scholar?cluster=2039456143890648437)]。[[Preprint](https://www.cs.princeton.edu/~rpa/pubs/shahriari2016loop.pdf)]。大規模データアプリケーションは、多くのユーザーを含むシステム、複雑なソフトウェアシステム、および大規模かつ異質な計算・ストレージアーキテクチャを含むものと一般的に関連付けられる。このようなシステムの構築には多くの分散設計選択が関与する。その結果、最終製品（例：推薦システム、医療分析ツール、リアルタイムゲームエンジン、音声認識器）には多くの調整可能な設定パラメータが含まれる。これらのパラメータは、さまざまな開発者やチームによって指定され、ソフトウェアにハードコーディングされることが多い。これらのパラメータを統合的に最適化すれば、大きな改善が得られる。ベイズ最適化は、近年非常に人気を博している、設計選択の統合最適化に有効なツールである。これにより、製品品質および人間の生産性の向上が期待される。本レビュー論文では、ベイズ最適化について紹介し、その方法論の一部を強調し、幅広い応用事例を示している。

* [Practical Bayesian Optimization of Machine Learning Algorithms](https://proceedings.neurips.cc/paper/2012/hash/05311655a15b75fab86956663e1819cd-Abstract.html) - ***NeurIPS'12***、2012年。[[All Versions](https://scholar.google.com/scholar?cluster=14442949298925775705)]。機械学習アルゴリズムの使用には、学習パラメータおよびモデルハイパーパラメータの細部調整が頻繁に必要となる。しかし、この調整はしばしば「黒箱アート」として、専門知識、ルールオブサンプル、あるいは場合によっては力尽きる探索を必要とする。そのため、問題に応じた学習アルゴリズムの性能を自動的に最適化するアプローチには大きな需要がある。本研究では、ベイズ最適化の枠組みを用いて、学習アルゴリズムの一般化性能をガウス過程（GP）からのサンプルとしてモデル化する。著者らは、GPの性質に関する選択（例：カーネルの種類やそのハイパーパラメータの扱い）が、優れた最適化アルゴリズムを構築し、専門家レベルの性能を達成する上で極めて重要な役割を果たすことを示している。著者らは、学習アルゴリズム実験の変動コスト（実行時間）を考慮した新しいアルゴリズムを提示し、複数コアの存在を活用して並列実験を行うことができる。これらの提案されたアルゴリズムは、以前の自動プロセスを改善し、ラテンディリクレ分配、構造化SVM、畳み込みニューラルネットワークなど多くのアルゴリズムにおいて、人間の専門家レベルの最適化を達成または上回ることができる。

* [A Tutorial on Bayesian Optimization](https://arxiv.org/abs/1807.02811) - 2018年。[[All Versions](https://scholar.google.com/scholar?cluster=7971934771645047583)]。ベイズ最適化は、評価に時間がかかる（分または時間単位）目的関数を最適化するアプローチである。これは、連続領域で20次元未満の領域における最適化に最も適しており、関数評価における確率的ノイズを許容できる。目的関数の代替モデルを構築し、その代替モデルにおける不確実性をガウス過程回帰というベイズ機械学習手法で評価し、その代替モデルから定義された取得関数を用いてサンプリング地点を決定する。このチュートリアルでは、ベイズ最適化の仕組みについて説明し、ガウス過程回帰と、期待改善、エントロピー検索、知識勾配の3つの一般的な取得関数を含む。著者はさらに、複数の関数評価を並列実行、多フィデリティおよび多情報源最適化、評価が難しい制約、ランダムな環境条件、マルチタスクベイズ最適化、および導関数情報の包含といった高度な技術について述べる。著者は、ベイズ最適化ソフトウェアおよびこの分野における今後の研究方向についても論じる。このチュートリアルは、ノイズフリー設定を超えて、ノイズのある評価に対して期待改善を一般化している。この一般化は、形式的な決定理論的根拠によって正当化され、過去の任意の修正とは対照的である。

* [Human-in-the-loop for Bayesian autonomous materials phase mapping](https://www.cell.com/matter/fulltext/S2590-2385(24)00006-7) - ***Matter***。[[All Versions](https://scholar.google.com/scholar?cluster=1442913820064050211)]。自律実験は、機械学習と実験自動化を組み合わせることで、エディソン式の研究よりもユーザーの目的を効率的に達成できる。理論、シミュレーション、文献、人間の直感からの知識を機械学習モデルに統合することで、この優位性をさらに高めることができる。本研究では、組成-構造-相図のマッピングに人間の入力を確率的に統合するための手法を提示する。実験キャンペーン中に、ユーザーは潜在的な相境界や相領域を示すか、その不確実性を示すか、あるいは関心のある領域を示すことで入力を提供できる。その入力は確率的事前分布を通じて統合され、データ、モデル、人間の入力に基づいて潜在的な相図の確率分布が得られる。本研究は、適切な人間の入力が与えられた場合に、相図マッピング性能の向上を示している。

*[Back to Top](#c)


### 概念 <a id="concepts"></a>

#### 概念理論 <a id="theory-of-concepts"></a>

* [Concepts](https://plato.stanford.edu/entries/concepts/) - ***プラトン・スタンフォード***. 「概念」に関する形式的哲学的議論の集積。

* [Theory-theory](https://en.wikipedia.org/wiki/Theory-theory) - ***ウィキペディア***. 「理論理論」に関するウィキペディア。これは概念を理論（または実証）システムの文脈に位置づける視点である。

* [Conceptual Change in Childhood](https://hk1lib.org/book/3659332/11fa44) - ***MIT Press***、1985年。[[All Versions](https://scholar.google.com/scholar?cluster=11720022076481483465)]。サーン・ケリーの児童発達における概念の理論理論に関する書籍。

* [Words, thoughts, and theories](http://library.lol/main/6A8215E9BAEB77F198C98CD75C517E02) - ***MIT Press***, 1997. [[All Versions](https://scholar.google.com/scholar?cluster=16726462136203686735&hl=en&as_sdt=0,5)]. アリソン・ゴプニクの書籍で、認知および意味の発達に関する「理論理論」を体系的に提示し、その妥当性を主張している。この理論は、乳児や幼児が、科学者同様に世界について理論を形成・修正することで学習するという考えであり、知識および意味の起源に関する見解として、認知科学に広範な影響を与えるものである。

* [The Theory Theory](https://psycnet.apa.org/record/1994-97940-009) - ***Mapping the mind: Domain specificity in cognition and culture, Cambridge University Press***, 1994. [[All Versions](https://scholar.google.com/scholar?cluster=9397889700764191662&hl=en&as_sdt=0,5)]. アリソン・ゴプニクによる理論理論に関する元論文。

* [The Origin of Concepts](https://hk1lib.org/book/844457/42178f?id=844457&secret=42178f) - ***Oxford University Press***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=11493102398422813821&hl=en&as_sdt=0,5)]. サン・ケリーによる、児童発達における概念の理論理論に関する拡張書籍。

* [What we mean when we say semantic: A Consensus statement on the nomenclature of semantic memory](https://osf.io/preprints/psyarxiv/xrnb2) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=7464626532716945232)]. この多学際のワークグループの目的は、意味研究における主要かつ繰り返し現れる構成（例：概念、アモダル、抽象）について、共通認識の定義を確立することであった。こうした努力により、簡潔な定義、合意、主観的な信頼度評価、関連理論背景、そして原則的に反対する見解を含む用語集が作成された。これらの基本的な定義は、意味研究における見解の統一および学際的コミュニケーションの改善に潜在的な基準を提供するものである。

* [Reconstructing constructivism: Causal models, Bayesian learning mechanisms, and the theory theory](https://psycnet.apa.org/record/2012-12791-001) - ***Psychological Bulletin***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=11218217347365817167&hl=en&as_sdt=0,5)]. アリソン・ゴプニクによる発達研究における構成主義思想に関するレビュー記事。これには、概念の理論理論が含まれる。

* [Similarity involving attributes and relations: Judgments of similarity and difference are not inverses](https://groups.psych.northwestern.edu/gentner/newpdfpapers/MedinGoldstoneGentner90.pdf) - ***心理科学***、1990年。[[All Versions](https://scholar.google.com/scholar?cluster=13205938250772079784)]。属性および関係に基づく類似判断に関する理論。

*[Back to Top](#c)

#### 人間の概念表現 <a id="human-concept-representation"></a>

* [Organizing conceptual knowledge in humans with a gridlike code](https://www.science.org/doi/full/10.1126/science.aaf0941) - ***科学***、2016年。[[All Versions](https://scholar.google.com/scholar?cluster=10995575332310321503)]。[[Preprint](http://behavioralhealth2000.com/wp-content/uploads/2017/01/Organizing-conceptual-knowledge-in-humans-with-a-gridlike-code.pdf)]。脳は概念を精神マップに組織化し、概念間の関係を空間のようにナビゲートできるようにしていると仮定されている。グリッド細胞は空間表現を六角形対称コードで組織化し、機能性磁気共鳴画像信号における正確な六角形対称性の源であると考えられている。人間が概念的な2次元知識をナビゲートした際、空間ナビゲーション時に活性化される脳領域に非常に似た領域で同じ六角形信号が観測された。このグリッドのような信号は、1時間以内および1週間以上隔たったセッションで一貫している。この研究の結果は、非空間的コンセプチュアル表現をグローバルな関係コードで組織化している可能性があり、概念知識を2次元連続空間に配置した際、これらのコードが六角形グリッドのようなパターンを持つ可能性を示唆している。

* [Navigating cognition: Spatial codes for human thinking](https://www.science.org/doi/full/10.1126/science.aat6766) - ***科学***、2018年。[[All Versions](https://scholar.google.com/scholar?cluster=1407237757770081862)]。[[Preprint](https://doellerlab.com/wp-content/uploads/2018/11/Bellmund_et_al_2018_Science_Navigating-cognition.pdf)]。海馬形成部は、記憶形成および空間ナビゲーションの背後にあると長年提案されてきた。本研究では、空間ナビゲーション研究で特定された神経メカニズムが、情報領域を越えて広範な認知機能を支援する方法について述べている。提案されたフレームワークでは、場およびグリッド細胞の集団コードが、認知空間の可変次元をマップする代表的フォーマットを提供する。この非常に動的なマッピングシステムは、行動状況間の直交表現間のリマッピングを通じて、コードを迅速に再組織化し、異なる解像度および階層レベルでの多数の安定した認知空間を生成する。行動シーケンスは認知空間を通過する軌跡を生み出し、海馬内での順序的なコード化によってシミュレートできる。こうした形で、海馬形成部の空間表現フォーマットは、柔軟な認知および行動を支援する能力を持つ。

* [Structuring Knowledge with Cognitive Maps and Cognitive Graphs](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(20)30250-3) - ***認知科学のトレンド***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=7196012353183004425)]。[[Preprint](https://www.sas.upenn.edu/psych/epsteinlab/pdfs/Peer%20Brunec%20Newcombe%20Epstein%20TiCS%202020%20Cog%20maps%20and%20cog%20graphs.pdf)]。人間および動物は、世界の空間構造を精神的表現としてナビゲートする。古典的な見解は、これらの表現がユークリッド認知マップの形をとるが、代替理論は、それらが場所を結ぶ経路を持つ認知グラフであると主張している。著者は、マップのようなおよびグラフのような表現が、部分的に重なり合う神経システムに依存して脳内に存在する可能性を示す証拠をレビューしている。マップおよびグラフは同時にまたは分離して動作し、空間的および非空間的知識に適用される可能性がある。複雑な情報に構造的枠組みを提供する認知マップおよび認知グラフは、私たちが物理的、社会的、概念的空間をナビゲートするための基本的な組織スキームを提供する可能性がある。

* [Natural speech reveals the semantic maps that tile human cerebral cortex](https://www.nature.com/articles/nature17637) - ***自然***、2016年。[[All Versions](https://scholar.google.com/scholar?cluster=14997953800741854188)]。[[Preprint](https://www.polyu.edu.hk/cbs/rclcn/images/cdl_articles/H/Huth_et_al._2016.pdf)]。[[Code & Tutorial](https://github.com/HuthLab/speechmodeltutorial)]。言語の意味は、脳皮質の特定領域に集約され、「意味システム」と呼ばれる。しかし、意味システムの大部分は包括的にマッピングされておらず、ほとんどの領域の意味選択性は不明である。本研究は、被験者が数時間の物語を聴く際の機能性磁気共鳴画像（fMRI）データを用いて、皮質全体における意味選択性を系統的にマッピングした。この研究は、意味システムが個人間で一貫した複雑なパターンを持っていることを示している。著者は、新たな生成モデルを用いて詳細な意味アトラスを作成した。結果は、意味システム内のほとんどの領域が特定の意味領域または関連する概念のグループに関する情報を表していることを示しており、アトラスは各領域にどの領域が含まれているかを示している。この研究は、人間の神経解剖学および機能的接続性研究で一般的に用いられるデータ駆動型手法が、脳内の機能的表現をマッピングするための強力で効率的な手段であることを示している。

* [Idiosyncratic Tower of Babel: Individual differences in word-meaning representation increase as word abstractness increases](https://journals.sagepub.com/doi/full/10.1177/09567976211003877) - ***Psychological Science***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=18214600097352809308)]. [[All Versions](http://bilab.bnu.edu.cn/paper/2021/Wang_2021_Psychology%20Science.pdf)]. 人間は主に言語を介してコミュニケーションを行うが、その基礎となるコミュニケーションの基本単位である「語」について共有される理解に基づいている。同じ語を用いるとき、同じ意味を意味しているのか？認知神経科学における意味研究は、語の意味表現の共通原則を明らかにしたが、語の意味における個人差の背後にある要因はまだ不明である。本研究では、行動測定（評価に基づく意味関係パターン）および神経画像測定（語に引き起こされる脳活動パターン）を用いて、20人の成人（10名が女性）において90語の間の一致性を実証的に特徴付けた。行動および神経画像実験の結果、個人間の語の意味に関する誤差の大きさは、語と言語や感覚経験の関連度に依存し、語の抽象度が高くなるにつれてその変動が大きくなることが示された。個人間の語の意味に関する誤差の認知および神経的起源を明らかにすることは、その誤差を調整する潜在メカニズムに影響を与えるものである。

* [Semantic projection recovers rich human knowledge of multiple object features from word embeddings](https://www.nature.com/articles/s41562-022-01316-8) - ***Nature Human Behavior***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=2499199921371106654)]. [[Preprint](https://cap.csail.mit.edu/sites/default/files/research-pdfs/Semantic%20projection%20recovers%20rich%20human%20knowledge%20of%20multiple%20object%20features%20from%20word%20embeddings.pdf)]. 語の意味に関する知識は、精神的語彙においてどのように表現されているか？現在の計算モデルは、語の共現パターンから語の意味を推測している。これらのモデルは、語を多様な次元空間におけるベクトルとして表現し、より似た言語文脈で使われる語（すなわち、意味的に関連性の高い語）は、より近い位置に配置されるように学習している。しかし、語間の近接性は全体的な関連性を捉えているだけであり、人間の判断は文脈に強く依存している。たとえば、イルカとアリスはサイズが似ているが、危険性は異なる。本研究では、語ベクトルから文脈依存関係を抽出するための一般化された手法、「意味投影」を提案している。これは、サイズ（「小さい」と「大きい」の語を結ぶ線）や危険性（「安全」と「危険」の語を結ぶ線）といった特徴を表す線に語ベクトルを投影するもので、人間の判断に類似した「精神的スケール」として考えられる。この手法は、さまざまな対象カテゴリおよび性質において人間の判断を回復する。したがって、語ベクトルの幾何学は、文脈依存の世界知識を明示的に表現している。

* [Using a high-dimensional graph of semantic space to model relationships among words](https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00385/full) - ***Frontiers in Psychology***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=472523411548302295)]. GOLDモデル（言語分布のグラフ）は、自然言語の大規模コーパスにおける共現に基づいて構築されたネットワークモデルであり、言語のグラフ構造モデルに存在する情報や、理論に基づいたアルゴリズムおよび標準的なグラフ解析手法によって抽出可能な情報について検討できる。本研究では、GOLDを用いて、語間の2種類の関係、すなわち意味の類似性と関連性を検討する。意味の類似性とは、語の意味の重なり度を指し、関連性とは、2語が同じスキーム文脈で出現する度合いを指す。共現に基づく言語のグラフ構造モデルは、関連性を容易に捉えることが期待される。なぜなら、この種の関係は語の共現に直接存在すると考えられるからである。しかし、意味の類似性は、1次接続の集合の交わりから抽出される可能性があると仮説されている。なぜなら、意味的に類似な語は、さまざまな文脈において類似したテーマ的または文法的役割を果たし、同じノード集合と語の共現を示すからである。共現ウィンドウが異なる2つのGOLDモデル、段落レベルのbigGOLDと隣接語レベルのsmallGOLDが、確立された分布モデルである潜在意味分析（LSA）との性能を直接比較された。GOLDモデル（bigおよびsmall）の優れた性能は、単一の習得および保存メカニズム、すなわち共現が、語間の関連性（関連性および概念的関係）を説明できることを示しており、単一値分解（SVD）を用いるモデルよりも心理的により妥当であることを示している。

* [Simple shape feature computation across modalities: convergence and divergence between the ventral and dorsal visual streams](https://academic.oup.com/cercor/article/33/15/9280/7190929) - ***Cerebral Cortex***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=5977822802446917081)]. [[Preprints](http://bilab.bnu.edu.cn/paper/2023/Tian_2023_CC.pdf)]. 形の処理、視覚または触覚によるいずれも、物体認識および操作において極めて重要である。低レベルの信号は最初に異なる感覚特異の神経回路で処理されるが、視覚通路の下流および上流に、物体の形に対する多感覚反応が報告されている。この転移プロセスを理解するために、研究者たちは視覚および触覚による形の認識に関するfMRI実験を実施し、視覚通路における基本的な形の特徴（すなわち、曲率および直線性）を検証した。領域の興味に基づくサポートベクターマシンの解読分析とボリューム選択法を組み合わせることで、研究者たちは左大脳枕葉皮質（OC）における最も視覚的に判別可能なボリュームが、触覚的形の特徴を分類できること、および左後頭葉皮質（PPC）における最も触覚的に判別可能なボリュームが、視覚的形の特徴を分類できることを発見した。さらに、これらのボリュームは、多感覚的に形の特徴を解読できることを示しており、視覚および触覚モダリティ間で共有された神経計算を示している。単一変数解析では、左PPCにおける最も触覚的に判別可能なボリュームは触覚的直線性特徴を好む一方、左OCにおける最も視覚的に判別可能なボリュームは、いずれのモダリティにおいても有意な形の特徴を好まなかった。これらの結果は、下流および上流通路において、中間レベルの形の特徴がモダリティに依存しない形で表現されていることを示している。

* [The Database of Cross-Linguistic Colexifications, reproducible analysis of cross-linguistic polysemies](https://www.nature.com/articles/s41597-019-0341-x) - ***Scientific Data***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=4039754406289857135)]. [[Project](https://clics.clld.org/)]. コンピュータ支援言語研究の進展は、言語研究の再構築に大きな影響を与えている。研究者が作成・編集した相互接続データセットの可用性が増加しているため、より多くの相互に関連する問いが調査可能になっている。しかし、こうした進展は、データセットの準備および編集において厳密性の要求を高めている。本研究では、言語間共現語（CLICS）データベースを提示する。CLICSは、世界の言語における語の意味分類間の共現語に関する相互接続分野の研究課題を解決し、言語間研究におけるデータ準備のベストプラクティスを示している。

* [Locating what comes to mind in empirically derived representational spaces](https://www.sciencedirect.com/science/article/pii/S001002772300183X) - ***Cognition***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=57834483230365927)]. 代表空間におけるカテゴリメンバーの位置に基づいて、そのメンバーを意識に呼び出すという、根拠に基づく研究。特に、特定の特徴を持つカテゴリメンバーを考慮する際の予測される有用性に基づいて、人々がカテゴリメンバーを意識に呼び出すことが示された。

* [Why concepts are (probably) vectors](https://www.cell.com/trends/cognitive-sciences/abstract/S1364-6613(24)00171-2) - ***Trends in Cognitive Sciences***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=4315363807034184312)]. 数十年にわたり、認知科学者は、人間の概念を特徴づけるような表現の形について議論してきた。どのような表現形式であれ、その表現は、類似性、特徴、カテゴリ、定義、関係といった多様な性質を計算できるようにしなければならない。また、理論、仮説カテゴリ、手続きに関する知識の形成を支える必要がある。本稿では、ベクトルベースの表現が、これらのすべてのニーズを満たしつつ、ニューロンアーキテクチャに妥当にエンコード可能であるという説明を提示している。近年の大規模言語モデルおよびベクトルシンボリックアーキテクチャの進展により、この視点は特に有望である。これらの革新は、これまでニューロンモデルが扱い得なかった、組み立て性、定義、構造、シンボリック計算プロセスといった性質をベクトルが処理できるよう示している。

*[Back to Top](#c)

#### AIの概念表現 <a id="ai-concept-representation"></a>

* [A principal odor map unifies diverse tasks in olfactory perception](https://www.science.org/doi/full/10.1126/science.ade4401) - ***Science***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=17847258457660438418)]. [[Code](https://github.com/osmoai/publications/tree/main/lee_et_al_2023)]. [[Data (Reproduced)](https://www.kaggle.com/datasets/aryanamitbarsainyan/multi-labelled-smiles-odors-dataset)]. [[Preprint](https://centaur.reading.ac.uk/113304/1/Mayhew%20et%20al%20for%20Centaur.pdf)]. [[GoodScents Database](https://www.thegoodscentscompany.com/)]. [[Leffingwell Database](http://www.leffingwell.com/bacispmp.htm)]. 香りの認識を分子構造にマッピングすることは、嗅覚分野における重要な課題である。本研究では、感覚的関係を保持し、未分類の香り物質の香り品質を予測できる主な香りマップ（POM）を、グラフニューラルネットワークを用いて生成した。このモデルは、人間の評価と同程度に信頼性を持つ：400種類の未収集香り物質を対象とした予測検証セットにおいて、モデルが生成した香りプロファイルは、訓練されたパネルの平均よりも、中間パネルメンバーのものに近い。単純で解釈可能かつ理論的に根拠のある変換を適用することで、POMは他の香り予測タスクにおいて、化学情報モデルを上回り、構造-香り関係の一般化マップを成功裏にエンコードしていることが示された。このアプローチは、香り予測を広く可能にし、香りのデジタル化を促進する。

* [Metabolic activity organizes olfactory representations](https://elifesciences.org/articles/82502) - ***eLife***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8857896396450033667)]. [[Code & Data](https://github.com/osmoai/publications/tree/main/qian_et_al_2023)]. POM表現が類似している香り化合物は、物質内で共存しやすく、代謝的に近い関係にある傾向がある；代謝反応の経路も、分子構造の大きなジャンプを経ても、POM上で滑らかな経路をたどる。

* [A Review of Tactile Information: Perception and Action Through Touch](https://ieeexplore.ieee.org/abstract/document/9136877) - ***IEEE Transactions on Robotics***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15493221881484741343)]. [[Preprint](https://www.researchgate.net/profile/Qiang-Li-110/publication/342797645_A_Review_of_Tactile_Information_Perception_and_Action_Through_Touch/links/602f95bc92851c4ed5806e9f/A-Review-of-Tactile-Information-Perception-and-Action-Through-Touch.pdf)]. ロボットが周囲環境と相互作用する際の重要なセンサモダリティである、触覚センシング。これらのセンサは、ロボットと環境との接触から得られる詳細なデータ信号を提供し、環境中の物体やロボットの行動に関する多様な情報を含んでいる。しかし、データは単一の接触に限らず、環境中の物体やロボットの行動に関する広範な情報を抽出できる。本論文は、触覚情報とそのロボット応用についての概要を提供している。著者は、原始データ、接触、物体、行動のレベルから構成される階層を提示し、高レベル情報はしばしば低レベル情報に基づいて構築される。著者は、階層の各レベルで抽出可能な情報の種類について述べている。また、異なる種類のロボット応用とそれらが採用する触覚情報の種類についての概要を示している。最後に、現在のロボットが達成できない未来の触覚応用についての議論を終える。

* [ImageBind: One Embedding Space To Bind Them All](https://openaccess.thecvf.com/content/CVPR2023/html/Girdhar_ImageBind_One_Embedding_Space_To_Bind_Them_All_CVPR_2023_paper.html) - ***CVPR'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=1657173986906232916)]. [[Project](https://github.com/facebookresearch/ImageBind)]. 本研究では、画像、テキスト、音声、深度、熱画像、IMUデータの6つのモダリティ間で共通の埋め込みを学習するImageBindというアプローチを提示する。著者らは、このような共通埋め込みを学習するためには、すべてのペアデータの組み合わせが不要であり、画像とペアのデータのみでモダリティ間を結合できることを示す。ImageBindは、最近の大规模視覚・言語モデルを活用し、それらのゼロショット能力を画像との自然なペアリングによって新しいモダリティに拡張する。これにより、クロスモダリティ検索、モダリティの算術合成、クロスモダリティ検出および生成といった新たなエモーショナルな応用が「即時」に実現される。これらのエモーショナルな能力は、画像エンコーダの強さに比例して向上し、本研究はモダリティ間のゼロショット認識タスクにおいて、専門的な教師付きモデルを上回る最新の成果を達成する。さらに、著者らは、過去の研究を上回る強力なフィンッシュ認識結果を示し、ImageBindは視覚および非視覚タスクにおける視覚モデルの評価に新たな手法を提供する。


* [Semantic features of object concepts generated with GPT-3](https://escholarship.org/uc/item/44s454ng) - ***CogSci'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=16958563995984242923)]. 意味的な特徴は、私たちの概念表現の性質を調査する上で中心的な役割を果たしてきた。しかし、人間評価者から特徴を実証的にサンプリング・ノーマライズするための膨大な時間と労力が、その使用を限定された手動キュレーションされた概念に制限してきた。最近のトランスフォーマーベースの言語モデルの進展を踏まえ、著者らは、このようなモデルを用いて、任意の物体概念に対して意味的に意味のあるプロパティのリストを自動生成できるか、そしてそのモデルが人間の特徴に類似したものを生成するかを問う。この目的のために、著者らはGPT-3モデルを用いて1,854個の物体に対して意味的特徴を生成し、自動生成された特徴を既存の人間の特徴ノーマルと比較した。GPT-3は人間より多くの特徴を生成したが、生成された特徴の種類の分布は類似していた。生成された特徴ノーマルは、類似性、関連性、カテゴリ属する性質の予測において人間のノーマルと同等であり、分散分析の結果、これらの予測は人間とGPT-3で類似した分散によって駆動されていた。これらの結果は、大規模言語モデルが人間の知識の重要な側面を捉え、意味的特徴を自動的に解釈可能なセットとして生成する可能性を示し、心理・言語研究における意味的特徴の応用範囲を劇的に拡大する新しいアプローチを提供する。

* [Connecting Touch and Vision via Cross-Modal Prediction](https://ieeexplore.ieee.org/document/8953737) - ***CVPR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=17326564895972374001)]. [[Project](https://github.com/YunzhuLi/VisGel)]. 人間は視覚、聴覚、触覚などの多モダリティ感覚情報を用いて世界を認識する。本研究では、視覚と触覚の間のクロスモダリティ接続を調査する。このクロスドメインモデリングタスクにおける主な課題は、二つのモダリティ間の大きなスケールの差にある：視覚では眼が一瞬で全体の視覚シーンを認識する一方、人間は常に物体の小さな領域しか感じられない。視覚と触覚を結びつけるために、本研究では、視覚入力から妥当な触覚信号を合成する新しいタスクおよび、触覚データを入力として与えられたときの物体との相互作用を想像するタスクを導入する。これらの目標を達成するために、著者らはロボットに視覚および触覚センサーを装備し、対応する視覚および触覚画像シーケンスの大規模データセットを収集する。スケールのギャップを埋めるために、著者らは、触覚のスケールと位置情報を組み込んだ新しい条件付き対立モデルを提示する。人間の認知研究の結果は、このモデルが触覚データからリアルな視覚画像を生成し、逆に視覚データから触覚データを生成できることを示している。

* [Unit Testing for Concepts in Neural Networks](https://aclanthology.org/2022.tacl-1.69/) - ***Transactions of the Association for Computational Linguistics***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=3036662275506971282&hl=en&as_sdt=0,5)]. Fodorの概念理論を用いて、ニューラルネットワークによる概念表現の検証。

* [Do Llamas Work in English? On the Latent Language of Multilingual Transformers](https://aclanthology.org/2024.acl-long.820/) - ***ACL'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=5847238732288003106)]. 多言語トランスフォーマーの中間埋め込み（1）が出力トークン埋め込みと遠く離れていること、（2）中間層で意味的に正しい次のトークンを解釈できるが、その英語版の確率が入力言語版よりも高いこと、（3）最終的に入力言語に特化した埋め込み空間領域に移動することを、実証的に示す初期研究。また、抽象概念空間の埋め込みは、英語に近いとされる。

* [From task structures to world models: what do LLMs know?](https://www.cell.com/trends/cognitive-sciences/abstract/S1364-6613(24)00035-4) - ***Cognitive Sciencesのトレンド***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=14836877410607949822)]. [[Preprint](http://cncl.yale.edu/sites/default/files/pub-downloads/yildirim-paul-llms-knowledge.pdf)]. 大規模言語モデル（LLM）が知識を持つとはどういう意味か？著者は、LLMが「道具的な知識」を持つと答える。この道具的な知識とは、次語生成を道具として使うことで得られる知識である。著者は、この道具的な知識が人間が示す通常の「世界の知識」とどのように関係しているかを問うとともに、道具的な知識が認知科学における構造化された世界モデルをどれだけ含んでいるかという点でその問いを検討する。著者は、LLMが世界の知識の度合いを回復できる方法について述べ、その回復は世界モデルとタスクの間の暗黙の、リソース効率的なトレードオフによって支配されるであろうと提案する。この問いに対する著者の答えは、特定のAIシステムの能力を超えており、知識および知能の性質に関する前提を挑戦している。

*[Back to Top](#c)


### 複雑性・情報理論 <a id="complexity--information-theory"></a>

#### 理論 <a id="theory"></a>

* [A Mathematical Theory of Communication](http://www.cs.yale.edu/homes/yry/readings/general/shannon1948.pdf) - ***ベルシステム技術ジャーナル***, 1948. [[All Versions](https://scholar.google.com/scholar?cluster=8313213127749369813)]. 情報理論に関するシャノンの元論文。

* [An introduction to Kolmogorov complexity and its applications](https://link.springer.com/content/pdf/10.1007/978-3-030-11298-1.pdf) - ***スプリンガー***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=8746708322477453221)]. アルゴリズム情報理論の導入書、特にコルモゴロフ複雑性理論。

* [Complexity and the representation of patterned sequences of symbols](https://psycnet.apa.org/record/1973-01647-001) - ***心理学レビュー***, 1972. [[All Versions](https://scholar.google.com/scholar?cluster=3426861135318645138)]. ヘルバート・シモンの主観複雑性に関するレビュー。

* [Visual Pattern Discrimination](https://ieeexplore.ieee.org/abstract/document/1057698) - ***IRE情報理論トランスアクション***, 1962. [[All Versions](https://scholar.google.com/scholar?cluster=10729525966103382864)]。

* [Algorithmic Information Theory](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5390997) - ***IBM Journal of Research and Development***, 1977. [[All Versions](https://scholar.google.com/scholar?cluster=14735710867906424793)]. アルゴリズム情報理論に関するチャイチンの元論文。

* [From Algorithmic to Subjective Randomness](https://proceedings.neurips.cc/paper/2003/hash/b06b5541a62ed438f956b662b4e1ec28-Abstract.html) - ***NeurIPS'03***, 2003. [[All Versions](https://scholar.google.com/scholar?cluster=14721764738308036578)].

* [On the Complexity of Bayesian Generalization](https://proceedings.mlr.press/v202/shi23i.html) - ***ICML'23***, 2023. . . この研究は、自然視覚スペクトルにおける大規模な概念一般化を検討する。既存の計算モード（すなわち、ルールベースまたは類似性ベース）は、主に孤立して研究され、限定的かつ抽象的な問題空間に焦点を当てる。本研究では、問題空間が拡大し、概念の複雑性が多様になる状況において、これらの二つのモードを検討する。表現レベルでは、著者が視覚概念が表現空間にマッピングされる際に、複雑性がどのように変化するかを検討する。既存の文献は、二つの種類の複雑性が反U関係にあることを示している。代表性属性（RoA）を活用し、著者は計算的に確認した：モデルは視覚概念を高RoAを持つ属性で記述し、視覚複雑性の増加に伴い、記述長が反U関係に変化する。計算レベルでは、著者が表現の複雑性がルールベースと類似性ベースの一般化の間のシフトにどのように影響するかを検討する。著者は、カテゴリ条件付き視覚モデルが視覚属性とカテゴリ属性の共現頻度を推定することを仮定し、これにより自然視覚世界の事前知識として機能する可能性があると提案する。実験結果は、ルールベース一般化において、主観的に比較的高い複雑性を持つ表現が、比較的低い複雑性を持つ表現よりも優れていることを示し、類似性ベース一般化ではその傾向が逆であることを示している。 [[All Versions](https://scholar.google.com/scholar?cluster=5817813824878811147)] [[Project](https://github.com/SHI-Yu-Zhe/bayesian-generalization-complexity)] [[Models](https://drive.google.com/file/d/1eCuFqBYN8kuiAmoVtXWedXW0r0TdY55W/view)]

* [Quantifying artificial intelligence through algorithmic generalization](https://www.nature.com/articles/s42256-025-01092-w) - ***Nature Machine Intelligence***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=16525845943864999422)]. 人工知能（AI）システムの急速な発展は、その科学的定量化の必要性を急務にしている。AIシステムは多様な分野において優れた柔軟性を示しているが、アルゴリズム的推論を必要とするテストでは不十分であり、これは、解釈可能で信頼性のある技術が求められているため、明確な欠陥である。学術界から登場する推論ベンチマークの急増にもかかわらず、AIシステムにおけるアルゴリズム的推論を定量化するための理論的枠組みは存在しない。本稿では、計算複雑性理論から導入されたフレームワークを用いて、代数式を用いてアルゴリズム一般化を定量化する：代数回路複雑性。代数回路複雑性理論――代数式を回路モデルとして研究する分野――は、アルゴリズム計算の複雑性を研究するための自然な枠組みである。代数回路複雑性は、問題解決に必要な計算要件を基にベンチマークを定義することで、一般化の研究を可能にする。さらに、代数回路は一般的な数学的対象であり、指定された回路に対して任意の大量のサンプルを生成できるため、今日のデータ量を必要とするモデルにとって理想的な実験環境となる。本見解では、著者は代数回路複雑性から導入されたツールを採用し、アルゴリズム一般化の科学を形式化し、そのAI科学への成功応用に向けた主要な課題を解決する。

*[Back to Top](#c)

#### 次元削減 <a id="dimensionality-reduction"></a>

* [A global geometric framework for nonlinear dimensionality reduction](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.1084.4695&rep=rep1&type=pdf) - ***Science***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=14602426245887619907)]. スペクトルクラスタリングに関する元論文。

* [Reducing the dimensionality of data with neural networks](https://asset-pdf.scinapse.io/prod/2100495367/2100495367.pdf) - ***Science***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=15344645275208957628)]. バリアンシャル・オートエンコーダーに関する元論文。

* [Representation Learning: A Review and New Perspectives](https://arxiv.org/pdf/1206.5538.pdf) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=559463397382443088)]. ヨシュア・ベンジオによる表現学習に関するレビュー。

* [Representation Learning: A Statistical Perspective](http://www.stat.ucla.edu/~jxie/personalpage_file/publications/representation_learning_Review.pdf) - ***Annual Review of Statistics and Its Application***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=14358027809538175293)]. ソン・チュン・チュウとイング・ニアン・ウの表現学習に関するレビュー（統計に関する解説内）。

* [Deep Learning and the Information Bottleneck Principle](http://robotics.caltech.edu/wiki/images/8/8f/DeepLearningBottleneck.pdf) - ***IEEE Information Theory Workshop'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=13152354842433826281)]. 表現学習における情報ボトルネック問題を初めて特定した論文。

* [On the information bottleneck theory of deep learning](https://artemyk.github.io/assets/pdf/papers/Saxe%20et%20al_2019_On%20the%20information%20bottleneck%20theory%20of%20deep%20learning.pdf) - 統計力学：理論と実験 journal, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=12271240925674881982)].

*[Back to Top](#c)

#### 視覚的複雑性 <a id="visual-complexity"></a>

* [Visual complexity: a review](https://www.researchgate.net/profile/Don-Donderi-2/publication/7337589_Visual_Complexity_A_Review/links/5f0875ed45851550509a3a7a/Visual-Complexity-A-Review.pdf) - ***Psychological Bulletin***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=10747901143387624939)]. [[APA](https://psycnet.apa.org/record/2006-00818-005)]. 視覚的複雑性に関する心理学的アカウント。

* [Compressed File Length Predicts Search Time and Errors on Visual Displays](https://www.sciencedirect.com/science/article/pii/S0141938205000120) - ***Displays***, 2005. [[All Versions](https://scholar.google.com/scholar?cluster=15600966633648834042)]. コンプレスされたファイルサイズは、表示の複雑性を表す客観的かつ容易に得られる指標であり、主観的な複雑性判断および実際の検索パフォーマンスを予測する。これは、ビット列の複雑性を表す理論的だが実用性のない指標であるアルゴリズム的複雑性と類似している。データは、適用タスクにおける表示パフォーマンスを予測するために、コンプレスされたファイルサイズの指標を用いることが可能であることを示唆している。

* [Image complexity and spatial information](https://stefan.winklerbros.net/Publications/qomex2013si.pdf) - 2013年 国際マルチメディア体験ワークショップ、. [[All Versions](https://scholar.google.com/scholar?cluster=16011036229039693102)]

* [Seeing and speaking: How verbal “description length” encodes visual complexity](https://perception.jhu.edu/files/PDFs/21_Complexity_Speaking/SunFirestone_SpeakingSeeing_2021_JEPG.pdf) - ***Journal of Experimental Psychology***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=246820603191585233)]. [[APA](https://psycnet.apa.org/record/2021-83037-001)]. 視覚的複雑性と説明長の関係を示す実証的証拠。

* [How variability shapes learning and generalization](https://pure.mpg.de/rest/items/item_3380375/component/file_3383568/content) - ***Trends in Cognitive Sciences***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=10940775338620708972)]. 変動性と一般化能力のトレードオフに関する包括的なレビュー。

* [Identifying concept libraries from language about object structure](https://arxiv.org/pdf/2205.05666.pdf) - ***CogSci'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=4019205027627496528)].

* [Show or tell? Exploring when (and why) teaching with language outperforms demonstration](https://www.sciencedirect.com/science/article/pii/S0010027722003158) - ***Cognition***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11837154580063293174)]. 本論文の結果は、言語が抽象規則を直接伝達することにより複雑な概念を伝達していることを示している。対照的に、デモンストレーションは例を伝達し、学習者はその規則を推論しなければならない。

*[Back to Top](#c)


### コミュニケーション <a id="communications"></a>

#### 非言語コミュニケーション <a id="non-verbal-communication"></a>

* [The Interactive Evolution of Human Communication Systems](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1551-6709.2009.01090.x) - ***Cognitive Science***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=6689941517686043970)]. Nicolas Fayによるアイコンリティの元論文。

* [Iconicity: From sign to system in human communication and language](https://benjamins.com/catalog/pc.22.2.05fay) - ***Pragmatics & Cognition***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=8525760321117094567)]. 本論文は、話す言語および他の人間のコミュニケーションシステムにおけるアイコンリティの役割を検討している。

* [The Picture Exchange Communication System](https://journals.sagepub.com/doi/abs/10.1177/108835769400900301) - 行動変容、1994。[[All Versions](https://scholar.google.com/scholar?cluster=18113491434570143349&hl=en&as_sdt=0,5)]。

* [Graphical Language Games: Interactional Constraints on Representational Form](https://onlinelibrary.wiley.com/doi/full/10.1080/15326900701221363) - ***認知科学***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=280214578402050136&hl=en&as_sdt=0,5)]. グラフィカル言語ゲームを導入した最初の論文.

* [A multimodal discourse theory of visual narrative](https://www.sciencedirect.com/science/article/pii/S0378216614001830) - ***語用学ジャーナル***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=912273653379961242&hl=en&as_sdt=0,5)].

* [Pixelor: A Competitive Sketching AI Agent. So you think you can beat me?](https://ayankumarbhunia.github.io/pixelor/image/pixelor.pdf) - ***ACM SIGGRAPH'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=6676723059377806081&hl=en&as_sdt=0,5)]. [[Project](http://sketchx.ai/pixelor)]. 特徴のスケッチにおける合理的性.

* [Pragmatic Inference and Visual Abstraction Enable Contextual Flexibility During Visual Communication](https://link.springer.com/article/10.1007/s42113-019-00058-7) - ***計算脳と行動***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17971107104483505071&hl=en&as_sdt=0,5)]. グラフィカル言語ゲームにおける合理的行動に関する計算的アプローチ.

* [Emergent Graphical Conventions in a Visual Communication Game](https://proceedings.neurips.cc/paper_files/paper/2022/hash/550ff553efc2c58410f277c667d12786-Abstract-Conference.html) - ***NeurIPS***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=17122070906194572150)]. イコニック言語の出現における合理的性に関する計算的アプローチ。

* [AI Nüshu: An Exploration of Language Emergence in Sisterhood Through the Lens of Computational Linguistics](https://dl.acm.org/doi/abs/10.1145/3610591.3616427) - ***ACM SIGGRAPH Asia'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=6849286654402017109&hl=en&as_sdt=0,5)]. 中文辞書およびヌシュ文字コーパスに訓練されたAIエージェントが、環境を継続的に観察し、コミュニケーションを図ることで、中国語を記録するための標準的な文字体系を共同で構築する。

* [Communicating artificial neural networks develop efficient color-naming systems](https://www.pnas.org/content/118/12/e2016569118) - ***Proceedings of the National Academy of Sciences***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1640459156303560508&hl=en&as_sdt=0,5)]. 色の学習タスクにおけるコミュニケーションの障壁としてコードの出現をシミュレーションする。

* [Bridging cultural and cognitive perspectives on similarity reasoning](https://escholarship.org/content/qt9p70d5s9/qt9p70d5s9.pdf) - ***CogSci'22***, 2022. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Bridging+cultural+and+cognitive+perspectives+on+similarity+reasoning&btnG=)].

* [Twelve-month-olds communicate helpfully and appropriately for knowledgeable and ignorant partners](https://www.eva.mpg.de/documents/Elsevier/Liszkowski_Twelve_Cognition_2008_1554509.pdf) - ***Cognition***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=8202048572661677635&hl=en&as_sdt=0,5)]. 子供の指差しに関する元論文。

* [12- and 18-Month-Olds Point to Provide Information for Others](https://pure.mpg.de/rest/items/item_64467_4/component/file_64468/content) - 『認知開発ジャーナル』、2009年。 [[All Versions](https://scholar.google.com/scholar?cluster=7322772656439413984&hl=en&as_sdt=0,5)]。

* [Toward understanding the importance of gesture in distributed scientific collaboration](https://link.springer.com/article/10.1007/s10115-006-0062-2) - ***知識と情報システム***、2006。[[All Versions](https://scholar.google.com/scholar?cluster=3145646721897130511)]。

*[Back to Top](#c)

#### 語用論 <a id="pragmatics"></a>

* [Pragmatics](https://plato.stanford.edu/entries/pragmatics/) - ***プラト・スタンフォード***。発話が特定の文脈においてどのように解釈されるかを研究する、計算哲学的アプローチの妥当性について。

* [Predicting Pragmatic Reasoning in Language Games](https://www.science.org/doi/abs/10.1126/science.1218633) - ***科学***、2012。[[All Versions](https://scholar.google.com/scholar?cluster=15533081031935746054)]。[[Preprint](https://langcog.stanford.edu/papers_new/frank-2012-science.pdf)]。人間の言語の最も驚くべき特徴の一つは、文脈において効率的に情報を伝達できる能力である。多くの理論がコミュニケーション推論について非形式的な説明を提供しているが、文脈における推論の正確で定量的な予測についての成功はほとんどない。本研究では、単純な参照コミュニケーションゲームにおける判断を検討し、発話者は情報的であるように努力し、聴取者はベイズ推論を用いて発話者の意図した参照を回復するという仮定に基づき、その行動をモデル化した。このモデルは、人間の判断に対して非常に密接かつパラメータなしで適合しており、情報理論的ツールを用いて推論を予測するアプローチが、コミュニケーションのためのより効果的な形式モデルの構築に繋がる可能性を示している。

* [Pragmatic Language Interpretation as Probabilistic Inference](https://www.sciencedirect.com/science/article/pii/S136466131630122X) - ***認知科学のトレンド***、2016。[[All Versions](https://scholar.google.com/scholar?cluster=11393505968563356130)]。言語を理解するには、固定された規則の使用や、組み合わせ構造の解読を越えて、発話者の知識、言語、文脈に基づいて発話の意味について極めて敏感な推論を行う必要がある。ゲーム理論および確率モデルの発展を踏まえ、著者は文脈における推論のための合理的発話行動（RSA）フレームワークを説明している。RSAモデルは、文脈における意味の推論を形式的に表現するための原則的なアプローチを提供しており、さまざまなタスクや状況における人間行動について成功した定量的予測を実現している。また、ハイパボリズムや曖昧さといった複雑な現象がなぜ起こるのかを説明している。より広い観点から見れば、言語構造、世界の知識、文脈を統合するための計算的フレームワークを提供している。

* [Pragmatic Reasoning through Semantic Inference](http://cocolab.stanford.edu/papers/BergenLevyGoodman-LexUnc.pdf) - ***意味と文脈***、2016。[[All Versions](https://scholar.google.com/scholar?cluster=1433855075217315997)]。

* [Processing gradable adjectives in context: A visual world study](https://semantics.uchicago.edu/kennedy/docs/processing.pdf) - ***意味論と言語理論***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=13426776838629402579)]. 文脈における形容詞理解としての合理的推論

* [Colors in Context: A Pragmatic Neural Model for Grounded Language Understanding](https://transacl.org/index.php/tacl/article/view/1142) - ***計算言語学協会論文集***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=11119271811833503059)].

* [Social Pragmatics: Preschoolers Rely on Commonsense Psychology to Resolve Referential Underspecification](https://compdevlab.yale.edu/docs/2019/2019_ChildDev_Pragmatics.pdf) - ***子供の発達***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=16352913537004112920)]. 子どもが社会的語用能力を持つことの証拠

* [Pragmatically Informative Image Captioning with Character-Level Inference](http://cocolab.stanford.edu/papers/CohnGordonEtAl2018_NAACL.pdf) - ***NAACL'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=1670953084401884599)].

* [Pragmatic Issue-Sensitive Image Captioning](https://aclanthology.org/2020.findings-emnlp.173/) - ***EMNLP Findings'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=10608257248144445301)]. ラジカルスピーチアクの画像キャプションへの応用

* [Disentangling contributions of visual information and interaction history in the formation of graphical conventions](https://cogsci.mindmodeling.org/2019/papers/0091/0091.pdf) - ***CogSci'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=15046353579508199394&hl=en&as_sdt=0,5)].

* [How young children integrate information sources to infer the meaning of words](https://www.nature.com/articles/s41562-021-01145-1) - ***Nature Human Behavior***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=10144794357802769844)]. 正式な教育が始まる前には、子どもたちは通常、数千語の語彙を獲得する。この学習プロセスには、彼らの社会環境におけるさまざまな情報源の使用が求められる。その情報源には、彼らの現在の知識状態や、語が使われる状況が含まれる。本論文では、子どもたちが年齢に応じた形で情報源を考慮し、ベイズ推論を用いてそれらを統合する発達モデルを提示する。本研究は、言語学習中の情報統合に関する発達理論を提示し、形式モデルを用いて、異なる理論の予測力と説明力を定量的に検証する方法を示している。

* [Information Structure in Discourse: Towards an Integrated Formal Theory of Pragmatics](https://semprag.org/index.php/sp/article/view/sp.5.6/pdf) - ***意味論と語用学***、1998. [[All Versions](https://scholar.google.com/scholar?cluster=9127222314768938599&hl=en&as_sdt=0,5)].

* [When Lingens meets Frege: communication without common ground](https://link.springer.com/article/10.1007/s11098-020-01490-3) - 『哲学的研究』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=10912415595149303257&hl=en&as_sdt=0,5)]。

* [The SocialAI School: Insights from Developmental Psychology Towards Artificial Socio-Cultural Agents](https://arxiv.org/abs/2307.07871) - ***ICML'23 Workshop on Theory-of-Mind***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11933410239580707313&hl=en&as_sdt=0,5)]. [[Project](https://sites.google.com/view/socialai-school)].

* [Language as shaped by the environment: linguistic construal in a collaborative spatial task](https://www.nature.com/articles/s41599-020-0404-9) - ***人間isticsおよび社会科学通信***、2020。[[All Versions](https://scholar.google.com/scholar?cluster=7842508027049437987)]。[[Code & Data](https://osf.io/sxtaq)]。[[Dialogue Experimental Toolkit(DiET)](https://dialoguetoolkit.github.io/chattool/)]。本研究は、環境要因が言語慣習の出現をどのように形成するかを実験的に検証することを目的としている。このため、著者は古典的なマゼゲームタスクをアダプトし、参加者がマゼの構造（すなわち環境の可能性）に応じて異なる言語戦略を習慣化するという仮説を検証する。結果は、全く同じタスクにおいても、微細な環境要因が異なるコミュニケーション慣習の出現を促進していることを確認しており、言語の適応が共有タスク環境の要因に非常に敏感であることを示している。

* [Exploring Urban Form Through Openstreetmap Data: A Visual Introduction](https://arxiv.org/abs/2008.12142) - ***都市体験とデザイン：公共空間の改善に関する現代的視点***、2020。[[All Versions](https://scholar.google.com/scholar?cluster=7094530618542001733&hl=en&as_sdt=0,5)]。[[OSMnx Tool](https://github.com/gboeing/osmnx)]。[[OpenStreetMap Website]( https://www.openstreetmap.org/)]。

* [Saying what you mean in dialogue: A study in conceptual and semantic co-ordination](https://www.speech.kth.se/~edlund/bielefeld/references/garrod-and-anderson-1987.pdf) - ***認知***、1987。[[All Versions](https://scholar.google.com/scholar?cluster=15377075954534820544&hl=en&as_sdt=0,5)]。

* [Conversation, co-ordination and convention: an empirical investigation of how groups establish linguistic conventions](http://www.sfs.uni-tuebingen.de/~gjaeger/lehre/ws0708/spieltheorie/garrod.pdf) - ***認知***、1994。[[All Versions](https://scholar.google.com/scholar?cluster=3784850469297049700&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 言語の構成性 <a id="language-compositionality"></a>

* [Compositionality](https://plato.stanford.edu/entries/compositionality/) - ***プラトン・スタンフォード***。言語の特徴の一つである構成性についての計算哲学的アプローチ。

* [Language is primarily a tool for communication rather than thought](https://www.nature.com/articles/s41586-024-07522-w) - ***Nature***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=13724799649075764503)]. この見解は、神経科学および関連分野からの最新の証拠をもとに、現代人の言語はコミュニケーションのための道具であると主張しており、言語を思考のための道具として使うという主流の見解とは対照的である。著者はまず、人間における言語能力を支える脳ネットワークを紹介し、言語と思考の間の二重分離の証拠をレビューし、言語がコミュニケーションに最適化されていることに関するいくつかの性質を検討する。この見解は、言語の出現が人間文化の進化において確実に変化をもたらしたことは間違いないものの、複雑な思考、包括的に符号思考を含むものに対して言語が必須であるとは見られない。代わりに、言語は文化的知識の伝達に強力な道具であり、人間の思考および論理的判断能力と共に進化してきた可能性があり、人間認知の特徴的な高度さを反映しているにすぎず、それ自体がその根源である。

* [The Principle of Semantic Compositionality](https://link.springer.com/content/pdf/10.1007/BF00763644.pdf) - ***Topoi***, 1994. [[All Versions](https://scholar.google.com/scholar?cluster=10899040818001759322&hl=en&as_sdt=0,5)]. 意味の合成性の原則に関する元論文。

* [On The Emergence Of Compositionality](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.60.3235) - ***Proceedings of the Evolution of Language Conference'06***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=16315741180717951222&hl=en&as_sdt=0,5)]. 合成性の出現に関する元論文。

* [Multi-Agent Cooperation and the Emergence of (Natural) Language](https://arxiv.org/pdf/1612.07182.pdf) - ***ICLR'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=1931070702879918446&hl=en&as_sdt=0,5)]. 多代理者強化学習における言語の出現に関する元論文。

* [Emergence of Language with Multi-agent Games: Learning to Communicate with Sequences of Symbols](https://proceedings.neurips.cc/paper/2017/hash/70222949cc0db89ab32c9969754d4758-Abstract.html) - ***NeurIPS'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=17308624474306270808&hl=en&as_sdt=0,5)].

* [Emergent communication through negotiation](https://arxiv.org/abs/1804.03980) - ***ICLR'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=8825869866742501521&hl=en&as_sdt=0,5)].

* [The language of generalization](https://psycnet.apa.org/record/2019-07481-001) - 心理学会誌、2019年。[[All Versions](https://scholar.google.com/scholar?cluster=7723877614160376324&hl=en&as_sdt=0,5)]。

* [Compositionality and Generalization in Emergent Languages](https://arxiv.org/abs/2004.09124) - ***ACL'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=5792073344743965767&hl=en&as_sdt=0,5)].

* [Word formation supports efficient communication: The case of compounds](https://escholarship.org/uc/item/5kv636c5) - ***CogSci'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=17465553221758916299&hl=en&as_sdt=0,5)].

* [War and Peace (WarAgent): Large Language Model-based Multi-Agent Simulation of World Wars](https://arxiv.org/abs/2311.17227) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=3598519753107761968&hl=en&as_sdt=0,5)].

*[Back to Top](#c)

#### 協調 <a id="coordination"></a>

* [In situ bidirectional human-robot value alignment](https://www.science.org/doi/full/10.1126/scirobotics.abm4183) - ***Science Robotics***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=18342339995965564405)]. [[Preprint](https://par.nsf.gov/servlets/purl/10351399)]. 本論文では、ロボットがユーザーの価値を予測するため、リアルタイムフィードバックを考慮しながら、ユーザーに意思決定プロセスを説明することで、人間が理解できる人工知能（XAI）システムを提案する。人間のフィードバックから学習するため、このXAIシステムは、複数の望ましい目標に関連する人間の価値を推定するための協調的なコミュニケーションモデルを統合している。人間にとって解釈可能なように、システムは人間の心理ダイナミクスをシミュレートし、グラフィカルモデルを用いて最適な説明を予測する。

* [From Explicit Communication to Tacit Cooperation: A Novel Paradigm for Cooperative MARL](https://arxiv.org/pdf/2304.14656.pdf) - ***AAMAS'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=12114270828108588849)]. 人間のチームにおける協同学習に着目し、本論文では、明示的なコミュニケーションから無意識の協働へと徐々に移行するための新たなパラダイムを提案する。

* [The future of open human feedback](https://www.nature.com/articles/s42256-025-01038-2) - ***Nature Machine Intelligence***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=8282207012874793204)]. 人間が言語モデルとの会話で与えるフィードバックは、これらのシステムが世界を理解し、能力を向上させ、望ましいかつ安全な行動に導かれるために中心的な役割を果たす。しかし、このフィードバックは主に先端AI研究機関によって収集され、閉鎖的に保管されている。本研究では、多分野の専門家を結びつけ、AIにおけるオープンな人間フィードバックエコシステムの実現可能性と課題を評価する。著者たちは、パーソンプロダクション、オープンソース、市民科学コミュニティにおける成功事例を調査し、オープン人間フィードバックの主な課題を特徴づけ、それぞれについて現行のアプローチを調査し、提言を行う。最後に、持続可能でオープンな人間フィードバックエコシステムを支える必要となる要素を展望する。このエコシステムの中心には、ユーザーと専門モデルの間の相互利益をもたらすフィードバックループがあり、モデルトレーナーやフィードバック提供者といった多様なステークホルダーコミュニティが、一般のオープンフィードバックプールを支えるよう激励する。

* [HLSMAC: A New StarCraft Multi-Agent Challenge for High-Level Strategic Decision-Making](https://openreview.net/forum?id=b7VmJ4107q) - ***AAMAS'26***, 2026. [[All Versions](https://scholar.google.com/scholar?cluster=11127617290205220978)]. マルチエージェント強化学習（MARL）アルゴリズムの評価にはベンチマークが極めて重要である。StarCraft II関連環境がMARLの進展を大きく推進してきたが、現行のベンチマーク（例：SMAC）は主にミクロ管理に焦点を当てており、高レベル戦略的知能の包括的な評価を制限している。この問題に対応するために、本研究ではHLSMACと呼ばれる新しい協調型MARLベンチマークを導入し、*Thirty-Six Stratagems*の古典戦略に基づく12のStarCraft IIシナリオを設計した。各シナリオは特定の戦略に対応し、戦術的な操作、タイミングの調整、欺瞞といった多様な戦略要素を課題として設定し、高レベル戦略的決定能力の評価を可能にする。著者たちは、従来の勝率を超える多様な次元（例：能力の活用度、進展効率など）を含む新たな評価指標を提案し、HLSMAC環境におけるエージェントの全体的な性能を評価する。さらに、21の最先端MARLアルゴリズムおよびLLMベースエージェントを大規模に評価し、特に優れた性能を示す手法については多セード分析を行う。結果から、HLSMACはマルチエージェント戦略的決定能力の進展に適した堅牢な評価プラットフォームであることが示された。


*[Back to Top](#c)


### ドメイン固有言語 <a id="domain-specific-language"></a>

#### 設計理論 <a id="design-theory"></a>

* [Domain-Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language) - ***Wikipedia***. Wikipediaにおけるドメイン特定言語に関する百科事典項目。

* [Domain Engineering](https://en.wikipedia.org/wiki/Domain_engineering) - ***ウィキペディア***. ドメインエンジニアリングに関するウィキペディアのencyclopedia項目。

* [Domain-Specific Languages](https://martinfowler.com/books/dsl.html) - ***ペアソン・エデュケーション***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=3653365103385845410)]. [[Domain-Specific Languages Guide](https://martinfowler.com/dsl.html)]. 適切に選定・活用されれば、ドメイン特定言語（DSL）は複雑なコードを簡素化し、顧客との効果的なコミュニケーションを促進し、生産性を高め、開発のブレーキを解消することができる。ドメイン特定言語（DSL）について、ソフトウェア開発分野の著名な専門家であるマーティン・フォーワーは、ソフトウェアプロフェッショナルがDSLを導入すべきかどうか、いつ導入すべきかを判断するために必要な情報を提供する。その後、DSLが適切である場合、フォーワーはDSLの構築に有効な技術を提示し、ソフトウェアエンジニアが自社のアプリケーションに最適なアプローチを選ぶためのガイドを提供する。

* [Comparison of multi-paradigm programming languages](https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages) - ***ウィキペディア***. プログラミング言語は複数のプログラミングパラダイムをサポートする可能性がある。このウィキペディア項目は、プログラミングパラダイムに関する簡潔な参考資料をリストアップしている。

* [Epigrams on programming](https://dl.acm.org/doi/pdf/10.1145/947955.1083808) - ***ACM SIGPLAN Notices***, 1982. [[All Versions](https://scholar.google.com/scholar?cluster=6439127299132936476)].

* [The complete guide to (external) Domain Specific Languages](https://tomassetti.me/domain-specific-languages/). An introduction to Domain Specific Languages (DSL) based on 19 DSL cases.

* [When and How to Develop Domain-Specific Languages](https://dl.acm.org/doi/abs/10.1145/1118890.1118892) - ***ACM Computing Surveys***, 2005. [[All Versions](https://scholar.google.com/scholar?cluster=8598236436890577027)]. [[Preprint](https://people.cs.ksu.edu/~schmidt/505f14/Lectures/WhenDSL.pdf)]. ドメイン特定言語（DSL）とは、特定のアプリケーションドメインに合わせた言語であり、その適用領域において一般用途のプログラミング言語に比べて、表現力と使いやすさの面で大きな優位性を持つ。DSLの開発は困難であり、ドメイン知識と言語開発の専門性の両方を必要とする。そのような知識を持つ人は非常に少ない。そのため、DSL開発の決定はしばしば無期限に遅れたり、そもそも検討されない場合が多く、多くのDSLはアプリケーションライブラリ段階でしか進展しない。特定のDSLの開発に関する多くの論文が存在するものの、DSL開発の手法に関する文献は極めて限られており、DSLを開発するタイミングや方法についての多くの問いが残っている。この調査論文は、DSL開発における決定、分析、設計、実装の各フェーズに見られるパターンを特定し、それらは既存のDSL設計パターンに関する研究を改善・拡張する。

* [Design Guidelines for Domain Specific Languages](https://arxiv.org/abs/1409.2378) - ***OOPSLAワークショップ：ドメイン特定モデリング（DSM'09）***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=1962567819031018744)]. 新しいドメイン特定言語の設計は、他の複雑なタスクと同様に、誤りを起こしやすく、特に高品質で使いやすい言語を設計する場合、時間のかかる作業となる。既存のツール支援は技術的側面の簡素化に焦点を当てているが、優れた言語設計の原則を強制するための支援は欠如している。本論文では、ドメイン特定言語設計に有用なガイドラインを検討し、我々が言語開発経験に基づき、一般用途言語（GPL）およびモデリング言語の既存ガイドラインを参考にしている。この研究により、DSL開発者が言語設計の品質を向上させ、ユーザーからの受け入れを高めるためのガイドラインが定義された。

* [Domain-specific languages: an annotated bibliography](https://dl.acm.org/doi/abs/10.1145/352029.352035) - ***ACM SIGPLAN Notices***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=8845429548327315750)]. ドメイン特定言語がソフトウェアシステムの構築および維持においてどのように使われるかに関する調査。この調査では、該当分野の75件の重要な論文を選び挙げ、各論文について要約を提供している。さらに、用語、リスクと利点、例としてのドメイン特定言語、設計手法、実装技術について議論している。

* [Usability Evaluation of Domain-Specific Languages](https://ieeexplore.ieee.org/abstract/document/6511840) - ***ICQICT'12***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=3047215455890195199)]. [[Preprint](http://www-ctp.di.fct.unl.pt/QUASAR/Resources/Papers/2012/Barisic2012SEDES.pdf)]. 本提案の目的は、ソフトウェア言語工学の体系的な活動に貢献することであり、DSLの使いやすさ評価の問題に焦点を当てるものである。使いやすさ評価は、DSL開発に関する論文において頻繁に省略されたり、緩和されたり、少なくとも無視されている。著者らは、ユーザーインターフェース実験的検証技術に基づく体系的なアプローチを用いて、新規DSLの影響を評価すべきだと主張している。そのため、著者らは、一般的な使いやすさ評価プロセスをDSL開発プロセスと統合するよう提案している。

* [Domain-Specific Modeling Languages: Requirements Analysis and Design Guidelines](https://link.springer.com/chapter/10.1007/978-3-642-36654-3_6) - ***Domain Engineering: Product Lines, Languages, and Conceptual Models***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=15620404537599157753)]. 最近の年間、ドメイン特定モデリング言語の開発に大きな注目が集まっている。これは、その理由がある。ドメイン特定モデリング言語は、ドメインレベルの知識を表す概念を組み込んでおり、システムアナリストがそれらの概念をゼロから再構築する必要がなくなる。同時に、ドメイン特定モデリング言語はモデルの整合性を確保する貢献をしている。なぜなら、それらにはすでに手動で追加しなければならない制約が含まれているからである。ドメイン特定モデリング言語の開発および使用に関する研究はすでに多くなっているが、それらの言語設計に導く包括的な手法はまだ不足している。特に、ドメイン特定モデリング言語開発に関わる複雑さとリスクの観点から見ると、これは重大なギャップである。本章は、このギャップを埋める貢献を目指している。まず、メタモデリング言語の選定に関するガイドラインを提示し、要件分析からドメイン特定モデリング言語の指定および評価までのプロセスを支援することを主眼としている。

* [Domain-Specific Languages: A Systematic Mapping Study](https://www.sciencedirect.com/science/article/abs/pii/S0950584915001858) - ***Information and Software Technology***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=10633158457161608253)]. 本研究は、ドメイン特定言語（DSL）に関する体系的マッピング研究（SMS）を報告している。この研究の主な目的は、DSL研究分野をより深く理解し、研究動向や可能性のある未解決課題を特定することである。このSMSは、DSL分野における研究空間と論文の動向・人口統計という2つの主要な研究課題を検討している。それぞれの研究課題はさらに複数の研究副課題に分割されている。最初の研究課題の結果から、DSLコミュニティは、新しい技術・手法の開発に重点を置いているが、DSLとその他のソフトウェア工学プロセスの統合や、DSLアプローチの効果を測定する研究に比べて、それらの研究に注目している。さらに、評価に関する研究が明確に不足している。DSL開発の段階において、ドメイン分析、検証、維持に関しては、より注意が必要である。2番目の研究課題の結果では、論文数は年々増加していないことが明らかであり、安定していることが示されている。

* [Building Domain-Specific Machine Learning Workflows: A Conceptual Framework for the State of the Practice](https://dl.acm.org/doi/full/10.1145/3638243) - ***ACM Transactions on Software Engineering and Methodology***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=16602627179061103486)]. ドメイン専門家は、自らのドメイン特定問題を解決するために機械学習をますます活用している。本論文は、ソフトウェア工学研究者に、ドメイン専門家が計算プロセスとその実行可能な実装を用いて問題を解決する際に直面する6つの主要な課題を提示している。これらの課題は、提案された概念フレームワークに基づき、ドメイン専門家が解決策を開発する際に選択可能な「変換のルート」から生じている。

* [PLIERS: A Process that Integrates User-Centered Methods into Programming Language Design](https://dl.acm.org/doi/abs/10.1145/3452379) - ***ACM Transactions on Computer-Human Interaction***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=14808918880141361248)]. プログラミング言語設計には、多くのユーザビリティに関連する設計決定が求められるが、現存のHCI手法はプログラミング言語への適用に不適切である。言語の開発には高い反復コストがあり、プログラマには長期間の学習が必要であり、ユーザーのパフォーマンスには大きなばらつきがある。これらの問題に対応するために、著者はフォーマティブおよびサマティブHCI手法を改良し、プログラミング言語設計に適した形にした。これらの手法を統合し、ユーザーセンターデザインを目的とした新しいプロセス「PLIERS」を提案した。著者は、このプロセスを用いて2つの新しいプログラミング言語を設計し、その有効性を評価した。GlacierはJavaを拡張し、プログラマが不変性の性質を効果的かつ容易に表現できるようにした。Obsidianはブロックチェーン向けの言語で、重要な安全性特性の検証を含む。実証研究により、PLIERSプロセスは多くのプログラマが効果的に使用できる言語を生み出し、さらに言語改善の可能性を明らかにした。

*[Back to Top](#c)

#### 設計実践 <a id="design-practises"></a>

* [Quantifying usability of domain-specific languages: An empirical study on software maintenance](https://www.sciencedirect.com/science/article/pii/S0164121214002799) - ***Journal of Systems and Software***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=3450893039446010260)]. DSLは、特定の領域に対して抽象を提供することでソフトウェア開発を支援する。一般用途言語で作成されたアーテファクトの維持性を高めることが期待されるが、その維持性は、DSL自体のユーザビリティに大きく依存する。しかし、初期段階でそのユーザビリティの強みや弱みを特定するのは難しい。なぜなら、それらを客観的に明らかにするための指針が存在しないからである。ユーザビリティは多面的な品質特性であり、DSL関係者にとって事前評価が難しい。さらに、メンテナンスタスクで使用されるDSLのユーザビリティを定量的に評価するための支援は極めて少ない。このような状況において、本研究はソフトウェアメンテナンスの観点から、テキストDSLのユーザビリティを比較する研究を報告している。この研究では、記述の認知次元に基づいたユーザビリティ測定フレームワークを開発し、2つのオブジェクト指向システムにおける2つのDSLを用いて、定性的および定量的に評価した。結果から、提案されたメトリクスは以下の3点に有効であると分かった：(1) DSLのユーザビリティの制限を早期に特定できる、(2) メンテナンスタスクに有利な特定のDSL機能を明らかにする、(3) 8つの重要なDSLユーザビリティ次元を成功裏に分析できる。

* [A Taxonomy of Domain-Specific Aspect Languages](https://dl.acm.org/doi/abs/10.1145/2685028) - ***ACM Computing Surveys***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=17254174131160041640)]. ドメイン特定アスペクト言語（DSAL）は、ドメイン特定言語（DSL）の一種であり、クロスカットコンセーンを表現するため設計されている。DSLと比較して、DSALはアスペクト的な性質により、言語設計空間を大きく拡張する。本調査は、この設計空間を構造化し、クロスカットコンセーンに対処するさまざまなドメイン特定アプローチを明らかにし、比較する。本調査は36のDSALをカバーするデータセットを報告し、設計上の考慮事項を検討し、DSAL実装アプローチの分類を提供する。この研究は、DSALおよびDSL研究者にとっての参考枠組みとなり、分野のさらなる進展を促進し、開発者にとってDSAL実装のガイドとして機能する。

* [No Grammar to Rule Them All: A Survey of JSON-style DSLs for Visualization](https://ieeexplore.ieee.org/abstract/document/9904438) - ***IEEE Transactions on Visualization and Computer Graphics***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=17206818917381447796)]. JSONベースの文法や、他の標準データシリアライゼーション言語の使用が、視覚化の分野で急速に増加している。これらの文法はそれぞれ異なる目的を持つ：一部は特定の計算タスク（例：アニメーション）に焦点を当て、一部は特定のチャートタイプ（例：地図）に、一部は特定のデータ領域（例：機械学習）に特化している。しかし、このインターフェース形式の重要性があるにもかかわらず、これらの言語の特性についての詳細な分析はほとんど行われていない。本研究は、57のJSONスタイルの視覚化DSLの設計および実装を調査・分析した。著者は、各DSLの収集された例（4395インスタンス）をもとに、ドメイン、概念モデル、言語の関係性、機能性、一般の実用性といった軸に沿って分析した。その結果、形式的および口語的仕様の間の対立、ユーザーの種類間の対立、言語構成内の対立といった緊張を明らかにした。この研究を通じて、視覚化DSL設計における選択肢、機会、およびトレードオフを明確にし、言語実装者に支援を提供することを目的とした。

* [How Domain Experts Use an Embedded DSL](https://dl.acm.org/doi/abs/10.1145/3622851) - ***OOPSLA'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8416124186663074528)]. プログラミングツールは、さまざまな分野、特にコンピュータサイエンスと無関係な専門分野における研究や分析において、ますます重要な役割を果たしている。埋め込まれたドメイン特定言語（eDSL）は、これらのプログラマにサービスを提供しつつ、言語設計者に相対的に低い実装負担をもたらす可能性がある。しかし、eDSLの使用に向けた障壁がその実用性と採用を低下させている。本研究は、プログラマがeDSLをどのように使用するかを深く理解し、ユーザーのニーズを明らかにすることで、今後のeDSL設計を支援することを目的としている。著者は、気候変動経済モデル用のeDSL「Mimi」を用いて、専門家9名にコンテクストインクエアを実施した。テーマ分析により、5つの重要なテーマが特定された。その中には、eDSLとホスト言語の相互作用が、ユーザー体験に大きな影響を与え、場合によっては予期しない影響を及ぼす、およびユーザーはドメイン特定のコミュニティやコードテンプレートに積極的に関与するという点が含まれる。

* [Abstract Hardware Grounding Towards the Automated Design of Automation Systems](https://link.springer.com/chapter/10.1007/978-981-96-0780-8_9) - ***ICIRA'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=3331524500088540378)]. [[Preprint](https://arxiv.org/abs/2410.05663)]. 域に特化した自動化システムの設計には、人間の専門知識とロボットが実行可能な行動の間の意味空間を一致させ、それに応じてリソースやシステム構成をスケジュールする必要がある。しかし、細分化された領域知識の注入、人間の知識とロボット指令の異質性、およびユーザーの好みの多様性といった3つの大きなギャップが存在し、結果として自動化システム設計は個別に実施され、労力がかかるため、自動化の民主化が妨げられている。本研究では、この困難な一致を「抽象ハードウェア接地問題」と呼ぶ。著者たちは、人間の意味空間における手続き的動作をハードウェア要件の抽象と捉え、それらを現実世界の制約と好みに則ってハードウェアデバイスに接地させることを提案する。この問題の最適化は、自動化システム設計の標準化と自動化を意味する。この基礎上、本研究はハイブリッドデータ駆動と原理導出を組み合わせた自動設計フレームワークを構築する。自律走行実験室の設計に関する結果は、本フレームワークが、領域に特化した要件およびユーザーに合わせた要件を満たしつつ冗長性のないコンパクトなシステムを生成できる可能性を示している。

* [Constraint Representation Towards Precise Data-Driven Storytelling](https://ieeexplore.ieee.org/abstract/document/10766486) - ***VIS-Gen4DS'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=12234019078719898658)]. [[Preprint](https://arxiv.org/abs/2410.07535)]. データ駆動ストーリーリング用DSLの位置付け論文。データ駆動ストーリーリングは、アイデアを説得的に伝達する上で重要な橋渡しとなる。しかし、手動でデータストーリーを作成することは、多面的で労力がかかる、ケースバイケースの作業であり、その広範な応用を妨げている。そのため、データストーリーの自動生成が重要な研究テーマとなっている。人工知能の進展にもかかわらず、データストーリーの体系的な生成は、そのハイブリッド性により依然として困難である。データストーリーは、トップダウンでシードアイデアに基づいた視点を構築する必要があり、かつ、与えられた証拠の洞察をボトムアップで整合的に接地させる必要がある。この二つの要件は、データストーリーの許容空間に正確な制約を課す必要がある。本位置付けは、制約をデータストーリー生成プロセスに統合することを提案する。解釈と表現の階層に基づき、制約はストーリーの叙述と図解をシードアイデアと文脈化された証拠に合わせるよう形成する。著者は、これらの制約の分類と必要な機能を特定する。制約は異質かつ潜在的であるが、本位置付けでは、ドメイン特定言語を用いて計算に適した形で表現する可能性を検討する。著者は、制約の活用がデータストーリー生成の芸術的および科学的側面を促進すると考えている。

* [Reproducibility in automated chemistry laboratories using computer science abstractions](https://www.nature.com/articles/s44160-024-00649-8) - ***Nature Synthesis***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=2583939834455194329)]. 抽象化は、(生物)化学および材料科学における自動化実験科学の汎用性に不可欠であるが、誤った実装は実験結果の再現性を損なう技術的負債となる。数十年にわたり、コンピュータ科学は、プログラム言語における抽象化の捉え方に関するガイドラインや戦略を構築してきた—特に、抽象化されたアイデアの実装の置換可能性と、抽象化が使用される文脈の明確な定義である。しかし、自動実験用に開発されたプログラミング言語の多くは、コンピュータ科学で学んだ知見を十分に活用していない。自動化実験室を通じた科学知識の協働共有を実現するためには、マシンエージェントが実験プロトコルをコード化・解釈する際、再現性を重視した上で、抽象化を適切に使用することが必要である。本レビューでは、コンピュータ科学の抽象化原理が、自律実験室による協働研究の加速を支えるための再現性のある自動化の創出にどう応用されるかを論じる。

*[Back to Top](#c)

#### 設計自動化 <a id="design-automation"></a>

* [AutoDSL: Automated domain-specific language design for structural representation of procedures with constraints](https://aclanthology.org/2024.acl-long.659/) - ***ACL'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=588082932830954126)]. [[Preprint](https://arxiv.org/abs/2406.12324)]. [[Project](https://autodsl.org/procedure/papers/acl24shi.html)]. AutoDSLと呼ばれるDSL自動設計の元論文。非標準化科学実験などの限定された状況における手続きの正確な表現には、制約の正確な描写が不可欠である。しかし、ドメイン特定言語（DSL）は、構造的に制約を表現するための有効なツールであるが、多くの場合、ケースバイケースで手作業で設計され、カスタマイズされた労力が要される。この課題を克服するために、本論文はAutoDSLフレームワークを導入し、さまざまなドメインにおけるDSLベースの制約設計を自動化する。ドメイン特定実験プロトコルデータベースを活用し、AutoDSLは文法制約を最適化し、意味制約を抽象化する。AutoDSLが設計した5つの異なるドメインにおけるDSLの定量的および質的分析は、その言語モデルへの補助モジュールとしての可能性を示しており、手続き計画および実行の改善を目的としている。

* [Hierarchically Encapsulated Representation for Protocol Design in Self-Driving Labs](https://openreview.net/forum?id=9nUBh4V6SA) - ***ICLR'25***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=6090102857833092474)]. [[Project](https://autodsl.org/procedure/papers/iclr25shi.html)]. 自律実験室は、単一実験スキルや事前に定義された実験プロトコルの実行において、人間実験者を置き換えるようになってきた。しかし、人工知能が科学研究におけるアイデアの反復速度を高めているため、新たな発見に向けたプロトコルの迅速設計の必要性が現れている。プロトコル設計の自動化に取り組みは始まっているが、知識ベースのマシンデザイナー（例：大規模言語モデル）の能力は、実験知識の体系的な表現の欠如により、十分に引き出されていない。この問題に対応するために、本研究は多面的かつ多スケールの表現を提案する。インスタンスアクション、一般化された操作、製品フローモデルがドメイン特定言語を用いて階層的に封じ込められる。著者は、非パラメトリックモデリングに基づくデータ駆動アルゴリズムを開発し、これらの表現を特定ドメインに自動的にカスタマイズする。提案された表現は、計画、修正、調整といったプロトコル設計タスクを管理するためのさまざまなマシンデザイナーを備えている。結果は、提案された方法が大規模言語モデルのプロトコル設計プロセスに効果的に補完できることを示しており、マシン支援科学探索の領域において補助モジュールとして機能している。

*[Back to Top](#c)

#### 命令型DSLの応用 <a id="imperative-dsl-applications"></a>

* [Organic synthesis in a modular robotic system driven by a chemical programming language](https://www.science.org/doi/full/10.1126/science.aav2211) - ***Science***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=13920677955690815682)]. [[Preprint](https://www.chem.gla.ac.uk/cronin/images/pubs/387-Steiner-ScienceJan19.full.pdf)]. [[Perspective: Democratizing synthesis by automation](https://www.science.org/doi/10.1126/science.aav8816)]. 本論文は、標準化された手法記述をもとに有機化合物の合成を行う自律型コンパイラとロボット実験プラットフォームを開発した。プラットフォームには、ラウンドボトムフラス、分離漏斗、回転蒸発器などの従来の装置を採用し、既存の文献との適合性を最大化している。著者は、3つの一般的な薬品の短い合成プロセスを示し、その結果が手動合成と同等であったことを示した。

* [Convergence of multiple synthetic paradigms in a universally programmable chemical synthesis machine](https://www.nature.com/articles/s41557-020-00596-9) - ***Nature Chemistry***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=18024303106901939347)]. [[Preprint](https://eprints.gla.ac.uk/231947/)]. 分子の自動合成は確立されているが、各反応クラスには専用のハードウェアが必要であるため、一つの機械内で複数のステップ合成を接続し、さまざまなプロトコルや反応を実行することは不可能である。これは、手動介入が不可欠だからである。本論文では、Chemputer合成ロボットが、固体相ペプチド合成、反復クロスカップリング、不安定なダイジリンへのアクセスなど、さまざまな反応を一つの統一システムで高収率・高純度で実行できるようにプログラムできることが示された。こうした普遍的かつモジュラーなハードウェアを、一つのソフトウェアシステムで自動化することで、多様なバッチ化学反応がアクセス可能になる。提案されたシステムは、10個の異なるモジュールで22の異なるステップを再利用しながら、約8,500操作を実行した。コードは17の異なる反応にアクセス可能であり、複雑な収束型ロボット合成において、ペプチドとダイジリンの反応を12ステップで実現したことも示された。

* [Biocoder: A programming language for standardizing and automating biology protocols](https://jbioleng.biomedcentral.com/track/pdf/10.1186/1754-1611-4-13.pdf) - ***Journal of Biological Engineering***, 2010. [[All Versions](https://scholar.google.com/scholar?start=0&hl=en&as_sdt=0,5&cluster=15572197190838916795)]. [[Project](https://github.com/nmz787/BioCoder)]. [[Microsoft Page](https://www.microsoft.com/en-us/download/details.aspx?id=52556)] 本論文は、バイオコーダー（BioCoder）というC++ライブラリを導入し、バイオロジストがプロトコルを実行するために必要な正確な手順を表現できるようにした。自動化に適しただけでなく、コードを読みやすい英語の説明に変換し、バイオロジストが理解しやすい形で利用できるようにしている。

* [Universal chemical programming language for robotic synthesis repeatability](https://www.nature.com/articles/s44160-023-00473-6) - ***Nature Synthesis***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=3455106495990439366)]. [[Preprint](https://www.chem.gla.ac.uk/cronin/images/pubs/rauschen-natsynthesisjan24.pdf)]. 化学合成に関する文献量は急速に増加しているが、新プロセスの共有や評価には長時間かかる。本論文は、普遍的な化学プログラミング言語（χDL）を用いて、さまざまな化学反応（還元アミン化、環形成、エステル化、炭素–炭素結合形成、アミド結合）の合成プロトコルをエンコード・実行するアプローチを提示した。このアプローチは、4つの異なるハードウェアシステム上で2つの研究室で実行され、各反応につき約50行のコードを用いることで、化学プロトコルを効率的に圧縮している。

* [An integrated self-optimizing programmable chemical synthesis and reaction engine](https://www.nature.com/articles/s41467-024-45444-3) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=9157508627971047184)]. 化学分野のロボットプラットフォームは急速に進化しているが、ほとんどのシステムは現在、実時間で状況変化に適応できない。本論文は、反応を常に監視する7つのセンサーを用いた動的にプログラミング可能なシステムを提示し、分子の生成・最適化・発見を実現した。動的プログラミング言語を開発することで、非常に発熱性の酸化反応の10倍規模の拡大、反応終点の検出、および重要なハードウェア故障の検知が実現された。

* [Building an Open Representation for Biological Protocols](https://dl.acm.org/doi/full/10.1145/3604568) - ***ACM Journal on Emerging Technologies in Computing Systems***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=17225405546647782000)]. 生物学的研究開発において、実験プロトコルは極めて重要であるが、プロジェクト間、研究者間、組織間での共有や再現が難しい。これまで多くの試みがなされているものの、まだ明確で正確に解釈・自動化できる一方で、人間が使いやすく、再利用・適応が可能となるようなプロトコル表現は存在しない。この課題に応えるために、UML、Autoprotocol、Aquarium、SBOL RDF、プロビエンスオントロジーを基盤とする「Laboratory Open Protocol language（LabOP）」が開発された。LabOPは、プロトコルおよびその実行記録と生成データをリンクデータとして表現し、人間や実験自動化システムによる実行を可能にするフレームワークを提供する。LabOPは現在、RDF知識表現、規格文書、Pythonライブラリとして実装されており、手動の「紙プロトコル」、Autoprotocol、またはOpentronsによる実行をサポートしている。この初期実装をもとに、LabOPはオープンなコミュニティによるさらなる開発が進んでいる。

* [KnitScript: A Domain-Specific Scripting Language for Advanced Machine Knitting](https://dl.acm.org/doi/abs/10.1145/3586183.3606789) - ***UIST'23***, 2023. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=KnitScript%3A+A+Domain-Specific+Scripting+Language+for+Advanced+Machine+Knitting&btnG=)]. [[Project](https://pypi.org/project/knit-script/)]. 本論文では、KnitScriptと呼ばれるドメイン特定のマシン編み込みスクリプト言語を提示する。KnitScriptは、計算駆動の編み込みデザインをサポートする。KnitScriptは編み込みマシンの包括的な仮想モデルを提供し、必要に応じてマシンレベルの機能にアクセスしながら、多様な手間がかかるかつ誤りが生じやすい細部を自動化する。

* [A domain‑specifc language framework for farm management information systems in precision agriculture](https://link.springer.com/article/10.1007/s11119-020-09770-y) - ***Precision Agriculture***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1495954486695213496)]. 本論文では、精密農業向けのFMISの設計開発に用いるドメイン特定言語フレームワークを提案する。このフレームワークは、設計決定の理解性の向上、設計決定のコミュニケーションおよび分析の強化、そして関係者間のコミュニケーションを解決する。

* [Corel: A DSL for Cooking Recipes](https://fse.studenttheses.ub.rug.nl/25731/) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9477049800574267813)]. [[Corel recipe page](https://roorda.dev/recipes/0)]. [[International Network of Food Data Systems (INFOODS)](https://www.fao.org/infoods/infoods/tables-and-databases/faoinfoods-databases/en/)]. Corel DSLによる料理レシピの表現は、材料の理解と計算を可能にし、レシピに応じた栄養表示を作成できる。

* [Infinite Photorealistic Worlds Using Procedural Generation](https://openaccess.thecvf.com/content/CVPR2023/html/Raistrick_Infinite_Photorealistic_Worlds_Using_Procedural_Generation_CVPR_2023_paper.html) - ***CVPR'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11620922717915489091)]. [[Website](https://infinigen.org/)]. [[Supplementary Text](https://openaccess.thecvf.com/content/CVPR2023/supplemental/Raistrick_Infinite_Photorealistic_Worlds_CVPR_2023_supplemental.pdf)]. 本論文では、自然世界の写実的な3Dシーンを生成するプロシージャル生成器「Infinigen」を導入する。Infinigenは完全にプロシージャルである：形状からテクスチャまで、すべてランダムな数学規則により一から生成され、外部ソースを一切使用せず、無限に多様かつ組み合わせ可能な構成を可能にする。

* [Infinigen Indoors: Photorealistic Indoor Scenes using Procedural Generation](https://openaccess.thecvf.com/content/CVPR2024/html/Raistrick_Infinigen_Indoors_Photorealistic_Indoor_Scenes_using_Procedural_Generation_CVPR_2024_paper.html) - ***CVPR'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=14526967027465419958)]. 本研究では、Infinigen Indoorsと呼ばれる、Blenderを基盤としたリアルな室内シーンを生成するプロシージャル生成システムを提案する。既存のInfinigenシステム（自然シーンに特化）を基盤とし、家具、建築要素、家電、日常用品など多様なプロシージャル室内資産を備えたライブラリを導入することで、室内シーンへの適用を拡張。さらに、シーン構成における多様な制約を表現するためのドメイン特定言語と、その制約を最大限満たすシーン構成を生成するソルバーを導入。著者らは、生成された3DオブジェクトやシーンをOmniverseやUnrealなどのリアルタイムシミュレータでエモディーメントエージェントの訓練に直接使用できるエクスポートツールを提供している。Infinigen IndoorsはBSDライセンスのもとでオープンソースである。

* ["We Need Structured Output": Towards User-centered Constraints on Large Language Model Output](https://dl.acm.org/doi/full/10.1145/3613905.3650756) - ***CHI EA'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=12105435542197416648)]. [[Preprint](https://research.google/pubs/we-need-structured-output-towards-user-centered-constraints-on-large-language-model-output/)]. 大規模言語モデルは創造的かつ多様な応答を生成できるが、開発者ワークフローに統合するためには、その出力が特定のフォーマットや基準に従うように制約を適用することが必要である。本研究では、51人の業界経験者を対象に、ユーザー中心の視点から出力制約が必要なシナリオや動機を調査。著者らは、低レベル（出力の構造や長さを確保）と高レベル（意味・スタイルガイドラインに従い、幻覚を排除）の2レベルにわたる134の具体的な使用例を特定。出力制約の適用は、開発者がLLMプロンプトを開発・テスト・統合する繰り返し作業を効率化し、LLMを活用した機能やアプリケーションのユーザーエクスペリエンスを向上させる。著者は、ユーザーがLLM向けに意図した制約を明確に表現するための好みやニーズ、および初期の制約プロトタイピングツールの設計について述べている。

* [Evolution-inspired engineering of nonribosomal peptide synthetases](https://www.science.org/doi/full/10.1126/science.adg4320) - ***Science***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=1405723492554017729)]. 臨床的に使用される多くの薬剤は、アミノ酸やアシル基の結合によって段階的に構成される自然微生物産物から導出されている。進化解析の洞察に基づき、2つの独立した研究グループが、これらの分子を生成する複雑な酵素複合体を、適切な結合ポイントを知れば、必要な時に新しい製品を即座に生成できると示している。Bozhüyükらは、非リボソームペプチド合成酵素を用いてXUT（Tドメイン間の交換単位）というアプローチを開発し、5つの異なるシステムの断片を含む酵素複合体によってプロテアソーム阻害剤を生成した。Mabesooneらは、ポリケト酸合成酵素を用いて、概念的に類似する交換単位の削除・挿入を容易に実現し、多様な変異を持つ多くの関連ポリケト酸製品を生成した。これらのアプローチは、大規模酵素複合体の合理的設計を進展させ、小分子薬品の発見および生産において重要な一歩を踏み出した。

* [OCTOPUS: operation control system for task optimization and job parallelization via a user-optimal scheduler](https://www.nature.com/articles/s41467-024-54067-7) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=4172377940787950525)]. ロボティクスと人工知能を活用した材料加速プラットフォームは、多様な分野における材料発見プロセスを飛躍的に進化させるアプローチであるが、複数ユーザーによる実験の同時管理において課題が生じる。特に、複数ユーザーが利用する際、実験モジュールや装置の重複した課題が、リソースの効率利用や安全リスクに影響を及ぼす。この課題を解決するために、本研究では材料加速プラットフォーム向けの運用制御システム、OCTOPUS（タスク最適化とジョブ並列化を実現するユーザー最適スケジューラに基づく運用制御システム）を提案。OCTOPUSは、インターフェースノード、マスターノード、モジュールノードを統合することで、実験スケジュールの簡易化とリソース効率の最適化を実現。プロセスのモジュライズとネットワークプロトコルを活用し、プラットフォームの均一性、拡張性、安全性、汎用性を確保。さらに、OCTOPUSはユーザー最適スケジューラを備え、ジョブ並列化とタスク最適化により、現実的な運用環境における遅延や安全リスクを軽減し、閉包スケジュールアルゴリズムにより、リソースの浪費を最小限に抑えながら複数ジョブを効率的に実行。OCTOPUSのコピオットは、ユーザーが独自の実験リソースを持つ場合でも、GPTの提案とクライアントフィードバックを活用してコード生成とカスタマイズを簡易化するためのツールとして開発された。本研究は、複数ユーザーがアクセスするプラットフォームにおける課題を解決し、材料開発プロセスにおける広範な採用を促進する。

*[Back to Top](#c)

#### 宣言型DSLの応用 <a id="declarative-dsl-applications"></a>

* [The BioPAX community standard for pathway data sharing](https://www.nature.com/articles/nbt.1666) - ***Nature Biotechnology***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=11368332679628594895)]. [[Preprint](https://core.ac.uk/download/pdf/216139091.pdf)]. 生物経路交換（BioPAX）は、分子・細胞レベルでの生物経路を表現し、経路データの交換を促進する標準言語である。BioPAXは、代謝経路やシグナル経路、分子・遺伝子相互作用、遺伝子調節ネットワークを表現できる。

* [Learning the language of viral evolution and escape](https://www.science.org/doi/full/10.1126/science.abd7331) - ***Science***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=13862653184613223515)]. ビルスが変異し、人間の免疫系を回避して感染を引き起こす「逃げ出し（viral escape）」は、抗ウイルス薬やワクチン開発の障壁となっている。逃げ出しの複雑な規則を理解することは、治療設計に貢献する可能性がある。本研究では、人間の自然言語に用いられた機械学習アルゴリズムを用いて、ビーロスの逃げ出しをモデル化した。著者らは、ウイルスの感染性を維持しつつ免疫系に見せかけを変えるような変異を「逃げ出し変異」と定義し、これは文の文法性を保ちつつ意味を変える語の変更に類似している。このアプローチにより、インフルエンザの血球凝集素、HIV-1の包膜糖タンパク質（HIV Env）、および重症急性呼吸器症候群コロナウイルス2（SARS-CoV-2）のスパイクタンパク質の言語モデルは、シーケンスデータのみから構造的な逃げ出しパターンを正確に予測できる。本研究は、自然言語とウイルス進化の間にある有望な概念的橋渡しを示している。

* [A high-level programming language for generative protein design](https://www.biorxiv.org/content/10.1101/2022.12.21.521526v1) - 2022. [[All Versions](https://scholar.google.com/scholar?cluster=11732741354610784314)]. 基本的な構成要素を複雑な形に組み合わせることは、普遍的な設計原則である。これまでのタンパク質設計は、自然界から作られたパーツを用いて手動で下から構築してきたが、生物学的な複雑性のため、上から設計は根本的に難しい。本研究は、タンパク質設計において長年求められてきたモジュール性とプログラミング性が、生成型人工知能によって実現できることを示している。高度なタンパク質言語モデルは、原子分解レベルの構造やタンパク質設計の原則を自発的に学習する。著者らは、これらの進展を活用し、高複雑度の新規タンパク質のシーケンスおよび構造のプログラミング設計を可能にしている。まず、著者らは、モジュール構成要素に基づく高度なプログラミング言語を提示し、設計者が望む性質を簡単に組み合わせることができる。次に、原子分解レベルの構造予測に基づくエネルギー型生成モデルを開発し、プログラムされた性質を持つすべての原子構造設計を実現している。原子座標、二次構造、対称性、多体化といった多様な規制を含む設計仕様の構築により、このアプローチの一般性と制御性が示された。階層的複雑度が増加する規制を列挙することで、このアプローチが組み合わせ的に非常に大きな設計空間にアクセスできることが示された。

* [Artificial intelligence driven design of catalysts and materials for ring opening polymerization using a domain-specific language](https://www.nature.com/articles/s41467-023-39396-3) - ***Nature Communications***, 2023. . 機械学習（ML）および自動実験の進展が、ポリマー科学の研究を大きく加速させる。データ表現は、MLの統合を可能にする重要な要素であるが、多くのデータモデルは非常に硬直性を持ち、ポリマー科学で見られる多様な実験およびデータタイプを適切に扱うことが難しい。この硬直性は、研究者が過去のデータをML開発に活用する上で大きな障壁となる。本研究は、専門分野の言語（Chemical Markdown Language、CMDL）が、多様な実験タイプおよびポリマー構造を柔軟かつ拡張可能に、一貫性を持って表現できることを示している。CMDLは、過去の実験データをスムーズに活用し、回帰変換器（RT）モデルを調整するための生成型分子設計タスクに適用できる。著者らは、リング開口ポリマー化における触媒およびポリマーの生成と実験的検証を通じて、このアプローチの有用性を示している。ただし、CMDLが他のポリマークラスにも広く適用可能であることを例示している。特に、CMDLを調整したモデルはポリマー構造内の重要な機能基を保持し、実験検証が可能であることを示しており、CMDLの柔軟性と、過去データを意味のある予測および生成モデルに変換し、実験的に実行可能な出力へと移行する能力が明らかになった。 [[All Versions](https://scholar.google.com/scholar?cluster=6595955912508683146)] [[Project](https://github.com/IBM/ibm-materials-notebook)]

* [OpenLaw](https://docs.openlaw.io/) - ***OpenLaw.io***. 法的契約の全または一部をコード（スマートコントラクト）でモデル化できるようになり、契約の作成、保護、生成におけるコストと摩擦が低下している。法務の専門家は、実行可能で法務専門家が理解できるような動的で「スマート」な契約を構築するための基本的なツールを備えていない。OpenLawは、次世代の「スマート」法的契約を支えるための技術スタックであり、専門分野のマーカップ言語、統合フレームワーク、および一連の一般アプリケーションを提供している。

* [Scenic: a language for scenario specification and data generation](https://link.springer.com/article/10.1007/s10994-021-06120-5) - ***Machine Learning***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=13790565080942515865)]. 本論文は、シーンの分布とその中で行動するエージェントの時間的行動を記述するための専門分野の言語、Scenicを提案している。Scenicは、空間時間関係を簡潔かつ読みやすい構文で表現し、シナリオにハードおよびソフト制約を宣言的に課す能力を持つ。

* [Domain Specific Language for Smart Contract Development](https://ieeexplore.ieee.org/abstract/document/9169399) - ***ICBC'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=16998538751745390273)]. [[Preprint](http://eprints-dev5.cs.univie.ac.at/6341/1/PID6382125.pdf)]. 本研究は、契約条項とソリディティ言語の実装コードとの概念的乖離がもたらす理解の難しさを、抽象度の高いドメイン特定のスマートコントラクト言語の設計と研究を通じて解決することを目的としている。この言語は、自動的に実装コードに変換可能である。

* [iContractML 2.0: A domain-specific language for modeling and deploying smart contracts onto multiple blockchain platforms](https://www.sciencedirect.com/science/article/pii/S0950584921002081) - ***Information and Software Technology***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=1548144959305241494)]. スマートコントラクトは多くの分野で重要な役割を果たしている。しかし、スマートコントラクトと呼ばれるものの開発は、契約ルールを定義する以上の、技術的にも複雑な作業である。ビジネス知識に加え、スマートコントラクトの開発には、多様な新規かつ急速に変化するドメイン特定言語やブロックチェーンプラットフォームに関する強力な技術知識が必要である。本論文の目的は、開発者が言語やターゲットブロックチェーンプラットフォームに依存せずにスマートコントラクトを独自に開発できるように支援することであり、これには第2世代のスマートコントラクト言語iContractML 2.0が提案されている。iContractML 2.0は、複数のブロックチェーンプラットフォームにデプロイ可能な機能をモデル化・生成できる拡張可能なフレームワークである。

* [PClean: Bayesian Data Cleaning at Scale with Domain-Specific Probabilistic Programming](https://proceedings.mlr.press/v130/lew21a.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=2892523061439714130)]. 本研究では、データセットに特化した知識を活用してベイズクリーニングを自動化し、現実世界の誤りパターンの多様性と推論の難しさを克服するための確率的プログラミング言語（PPL）PCleanを提示する。

* [A Language for Counterfactual Generative Models](http://proceedings.mlr.press/v139/tavares21a.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=2067748786482591497)]. [[Project](https://github.com/zenna/Omega.jl)]. 本論文では、反事実推論をサポートする確率的プログラミング言語Omegaを提示する。この機能は、ペールのdo演算子に類似する新しい演算子を確率的プログラミングに導入することによって達成される。

* [Product Line Engineering Using Domain-Specific Languages](https://ieeexplore.ieee.org/abstract/document/6030048) - ***ISPLC'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=17589685299346185442)]. [[Preprint](https://voelter.de/data/pub/VoelterVisser-PLEusingDSLs.pdf)]. 本論文は、製品ラインエンジニアリング（PLE）におけるドメイン特定言語の応用を検討する。まず、特徴モデルの表現力の限界を分析し、特徴モデルは再帰を含まない文法に対応しており、複数のインスタンスや参照の表現が不可能であることを示す。著者たちは、ドメイン特定言語（DSL）が特徴モデルとプログラミングの間の中間的な存在として機能できる可能性を示し、特徴モデルが限定的すぎる場合に活用できるとし、特徴モデルが提供する問題空間と解空間の分離を維持する。この研究では、特徴モデルとDSLの組み合わせを分類し、DSLをPLEの概念フレームワークに統合する。最後に、モデル、コード、構成のための一貫性と統一された形式を用いることで、変動性の管理およびトレース性の向上に重要な利点が得られることを示す。

* [A Domain-Specific Language for Product-Process-Resource Modeling](https://ieeexplore.ieee.org/document/9613674) - ***ETFA'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=6006131184799036515)]. 本論文では、製品・プロセス・リソース（PPR）の側面を効果的かつ効率的に表現し、フォーマルプロセス記述標準（VDI 3682）におけるPPRビューの制約を評価するためのPPR-DSLの設計を提示する。

* [Configurable 3D Scene Synthesis and 2D Image Rendering with Per-pixel Ground Truth Using Stochastic Grammars](https://link.springer.com/article/10.1007/s11263-018-1103-5) - ***国際計算機ビジョンジャーナル***、2018年。[[All Versions](https://scholar.google.com/scholar?cluster=8301697457354598778)]。[[Preprint](https://yzhu.io/publication/scenesynthesis2018ijcv/paper.pdf)]。本研究では、学習に基づく系統的なアプローチにより、大量の合成3Dシーンとその任意数のリアルな2D画像を生成し、その際に関連する真のデータを伴って、学習ベースの計算機ビジョンおよびロボティクスアルゴリズムの訓練、ベンチマーキング、診断に用いることを提案する。特に、著者は、確率的文法（属性付き空間And-Orグラフとして表現）と最先端の物理ベースレンダリングを組み合わせた学習ベースのパイプラインを設計し、室内シーンの無限に多様なバリエーションを自動生成・レンダリングできるようにする。このパイプラインは、シーンのレイアウトを高度に多様に合成でき、重要な属性の正確なカスタマイズと制御を可能にする。また、生成されたシーンのリアルなRGB画像をレンダリングし、各ピクセルの詳細な真のデータ（可視表面の深度と法線、物体識別、材料情報（物体の部分まで詳細）、環境（例：照明とカメラ視点）など）を自動生成する。著者は、特定の機械学習ベースのシーン理解タスク（深度と表面法線予測、セマンティックセグメンテーション、再構成など）における性能向上や、物体属性やシーンプロパティを制御的に変更することで、訓練済みモデルのベンチマーキングおよび診断の価値を示している。

* [The Scene Language: Representing Scenes with Programs, Words, and Embeddings](https://arxiv.org/abs/2410.16770) - ***CVPR'25***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=8704845413716059914)]. [[Project](https://ai.stanford.edu/~yzzhang/projects/scene-language/)]. 本論文では、視覚シーンを簡潔かつ正確に構造・意味・識別を描写する「Scene Language」を提案する。この表現は、シーンを3つの要素で表す：シーン内のエンティティの階層的および関係構造を指定するプログラム、各エンティティの意味クラスを要約する自然言語の語彙、および各エンティティの視覚的識別を捉える埋め込みベクトル。この表現は、テキストまたは画像入力に基づき、学習なしの推論技術を用いて、事前に訓練された言語モデルから導出可能である。

* [A prometastatic splicing program regulated by SNRPA1 interactions with structured RNA elements](https://www.science.org/doi/full/10.1126/science.abc7531) - ***Science***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9442501233912150085)]. 遺伝子の選択的スプライシングパターンにおける病変はがんの特徴として認識されているが、このプロセスを制御する根本的な調節プログラムはほとんど不明である。これらのプログラムをよりよく理解する上で大きな障壁は、通常用いられる生物情報学的手法が、RNAの二次構造が調節情報に与える寄与を捉えられない点にある。この点に対応するために、これまでにTEISER（RNAにおける情報的構造要素を引き出すためのツール）という計算フレームワークを開発した。TEISERはRNAの構造と配列情報を併用して、トランスクリプトーム変化に影響を与えるcis-調節要素を特定する。本研究では、実験的に得られたおよび追加の計算による予測RNA構造情報を組み込んだpyTEISER（pythonic TEISER）を導入し、スプライシングやRNA処理など、幅広いRNA関連プロセス、さらには定常状態の遺伝子発現にも関与するRNAの配列および構造コードを調査した。

* [Goals as reward-producing programs](https://www.nature.com/articles/s42256-025-00981-4) - 『Nature Human Behavior』2025. [[All Versions](https://scholar.google.com/scholar?cluster=10210797462358956689)]. [[Project](https://github.com/guydav/goals-as-reward-producing-programs/)]. 人々は、子供の遊びから成人期に至るまで、自らの目標を生成する能力を持っている。目標や目標指向行動に関する多くの実証的研究や計算モデルが行われているにもかかわらず、現時点のモデルは、日常的な人間の目標の多様性を捉えきれていまだ。本研究では、人間が生成する遊びの目標（スコア可能な、一人プレイゲーム）のデータセットを収集し、それらを報酬を生むプログラムとしてモデル化し、プログラム合成を通じて新たな人間らしい目標を生成する。報酬を生むプログラムは、目標の豊かな意味を、組み合わせ、追加の時系列制約を許容するシンボリック操作によって捉え、行動のトレース上でプログラムの実行を用いて進捗を評価する。目標の生成モデルを構築するために、著者は無限に多くの目標プログラムの集合に対して適合性関数を学習し、質と多様性を考慮したアルゴリズムで新たな目標をサンプリングする。人間評価者によると、人間の例が占めるプログラム空間の分区からサンプリングされたモデル生成目標は、人間が作成したゲームと区別がつかない。また、著者はモデルの内部適合性スコアが、実際に遊ぶ楽しさや人間らしさの高いゲームを予測していることを発見した。

* [A Generalized Earley Parser for Human Activity Parsing and Prediction](https://scholar.google.com/scholar?cluster=8196745813546421985) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=8196745813546421985)]. シーケンスデータ（例：動画）の検出・解析および未来予測には、高レベル意味の非マルコフ性および構成性を捉えるアルゴリズムが必要である。文法はこのような性質を捉える自然な選択肢だが、従来の文法解析器（例：エアリー解析器）は記号文を入力として扱うのみである。本論文では、エアリー解析器を拡張し、分割もしくはラベルが与えられていないシーケンスデータを解析するものとする。任意の確率分類器の出力に基づき、この拡張エアリー解析器は入力文法が定義する言語における最適な分割とラベルを求める。解析結果をもとに、トップダウンで未来を予測する。提案手法は汎用的であり、原理的であり、広範な応用が可能である。実験結果は、人間行動の解析および3つの動画データセットにおける未来予測において、この手法の有効性を明確に示している。

* [Structured Generative Models for Scene Understanding](https://link.springer.com/article/10.1007/s11263-024-02316-z) - ***International Journal of Computer Vision***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=14048730122287265932)]. 本ポジション論文は、静止シーンの理解において構造的生成モデル（SGMs）の利用を主張する。これは、入力画像（または複数視点画像）から3Dシーンを再構成し、その画像の内容を、個々のオブジェクトのタイプ、形状、外観、姿勢、およびシーンの照明やカメラパラメータといったグローバル変数を含むモデルで因果的に説明することを要する。このアプローチは、シーン内のオブジェクト間の共現および相互関係を考慮するシーンモデルの構築も必要とする。SGMアプローチは、構成性および生成性を持つため、解釈可能性と編集可能性をもたらすという利点がある。SGMアグレードを推進するためには、オブジェクトおよびシーンのモデル、および推論を行う手法が必要である。著者はまず、形状が明確に定義された「物」（object categories）と、空間的に無形な「物質」（stuff categories）を含むオブジェクトモデルをレビューする。次に、オブジェクト間の相互関係を記述するシーンモデルについてもレビューする。SGMにとって最も困難な課題は、単一または複数の画像からオブジェクト、照明およびカメラパラメータ、およびシーン間の相互関係を推論することである。著者は、SGMアグレードを進展させるために解決すべき問題について検討を終える。

* [Algorithm for optimized mRNA design improves stability and immunogenicity](https://www.nature.com/articles/s41586-023-06127-z) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=13852796394887781838)]. メッセージRNA（mRNA）ワクチンがCOVID-19の拡散を抑えるために用いられているが、mRNAの不安定性と分解により、保存、配布および効果において重大な制限が生じている。二次構造の長さを増加させることでmRNAの半減期が延び、最適なコードオンと組み合わせることでタンパク質発現が向上する。したがって、mRNA設計アルゴリズムは構造的安定性とコードオン使用の両方を最適化する必要がある。しかし、同義コードオンの存在により、mRNA設計空間は極めて広大である—for example、SARS-CoV-2のスパイクタンパク質に対して約2.4 × 10632の候補mRNAシーケンスがある。これは計算上の困難をもたらす。本研究は、計算言語学における古典的な「ラティス解析」概念を用いて、最適なmRNAシーケンスの探索を、類似した音声を持つ選択肢の中から最も可能性の高い文の特定に類似させることで、シンプルかつ予想外の解決策を提供する。アルゴリズムLinearDesignは、スパイクタンパク質の最適mRNA設計を11分で見つけることができ、安定性とコードオン使用の両方を同時に最適化できる。LinearDesignはmRNAの半減期およびタンパク質発現を大幅に改善し、COVID-19および水痘帯状疱疹ウイルスのmRNAワクチンにおけるコードオン最適化ベンチマークと比較して、マウスでの抗体濃度を最大128倍まで向上させる。この結果は、構成的mRNA設計の巨大な可能性を明らかにし、これまで到達できなかったが非常に安定かつ効率的な設計の探索を可能にする。本研究は、モノクロナーライドや抗がん薬などの治療タンパク質をコードするワクチンおよびその他のmRNAベースの医薬品にとって、即時的なツールとなる。

* [Penrose: from mathematical notation to beautiful diagrams](https://dl.acm.org/doi/abs/10.1145/3386569.3392375) - ***ACM Transactions on Graphics***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7935816003253127595)]. 本研究では、数学図の作成に用いられるPenroseというシステムを導入する。その基本機能は、馴染みのある数学的な表記法で書かれた抽象的な記述を、1つまたは複数の視覚表現に変換することである。固定された視覚化ツールライブラリに頼らず、視覚表現は制約に基づく指定言語でユーザーが定義され、その後、制約付き数値最適化により自動的に生成される。このシステムは、数学の多くの分野に拡張可能であり、反復設計探索に十分な速度を持つ。直接操作または低レベルグラフィックスプログラミングで図を指定するツールとは異なり、Penroseは、根本的な数学的意味を忠実に保持した図の迅速な作成と探索を可能にする。著者は、数学およびコンピュータグラフィックスの多様な概念を視覚化する方法として、このシステムの有効性と一般性を示している。

* [LegalLanguage: A Domain-Specific Language for Legal Contexts](https://link.springer.com/chapter/10.1007/978-3-030-37933-9_3) - ***EEWC'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=12637991160754186719)]. 現在、法的オントロジーは法的分野で利用されているが、立法および生産プロセスでは十分に探索されていない。本論文は、法的オントロジーを立法および生産プロセスの支援ツールとしての導入を分析し、特に、法案の提出からその作成および承認までの活動に焦点を当てる。本論文は、法的（または規範的）オントロジーの現状と、いくつかの応用例を紹介する。この現状の分析により、法の作成および検証活動が非常に人間中心的であり、誤りが多発するという問題が明らかになる。この分析の結果、著者はLegalLanguageという言語を導入し、法の作成および指定においてより厳密かつ体系的な方法を提供し、異なる種類の法間の関係（例：条項間や法間の構造的、順序的または時系列関係）を追跡できるようにする。

* [GarmentCode: Programming Parametric Sewing Patterns](https://dl.acm.org/doi/abs/10.1145/3618351) - ***ACM Transactions on Graphics***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=9890151343262605598)]. グラムのモデリングは、グローバルな衣料業界の基本的なタスクであり、デジタルヒューマンモデリングの中心的な部分である。現実的な衣類の表現と有効な縫製パターンの構築は、その正確なデジタルシミュレーションおよび最終的な製造に不可欠である。しかし、構成目標の高レベルとパターン幾何学の低レベル編集の間のギャップを埋めるための計算ツールはほとんど存在せず、例えば衣類要素の結合や切り替え、意味論的な編集、あるいは縫製パターンの有効性を維持しながら設計を探索といった機能が不足している。本研究では、オブジェクト指向プログラミングの原則を衣類構成に応用し、縫製パターンを階層的かつコンポーネント指向に設計できる初めてのDSL「GarmentCode」を提案する。プログラミングベースのアプローチは、コンポーネント抽象、アルゴリズム操作、自由設計パラメータ化といった独自の利点を提供する。著者たちは、ドーツを指定した場所に配置するといった典型的な低レベルタスクを自動化することで、構成プロセスを支援する。プロトタイプの衣類設定ツールでは、ユーザーが意味のある設計パラメータや体測定値を操作でき、パターン幾何学の構築はGarmentCodeで実装された衣類プログラムが担う。

* [VMC: A Grammar for Visualizing Statistical Model Checks](https://ieeexplore.ieee.org/abstract/document/10700937) - ***IEEE Transactions on Visualization and Computer Graphics***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=884768102185861577)]. ビジュアライゼーションは、統計モデルの検証と改善において重要な役割を果たす。しかし、モデルチェックビジュアライゼーションの設計空間は十分に理解されておらず、著者が効果的なグラフィカルモデルチェックを探索・指定する上での困難を生じている。VMCは、モデルチェックビジュアライゼーションを以下の4つの要素で定義する：(1) モデルから生成されたチェック可能な量の分布サンプル、包括的に新しいデータの予測分布およびモデルパラメータの分布；(2) 観測データへの変換による比較の容易化；(3) 分布の視覚表現；(4) モデルサンプルと観測データを比較するためのレイアウト。本研究では、VMCをRパッケージとして実装し、既存のモデルチェック例を再現することでVMCの有効性を検証し、VMCを用いてモデルチェックを生成することで、既存のビジュアライゼーションツールキットと比較して視覚表現の編集距離を減少させることを示す。3人の専門モデルリーダーがVMCを使用したインタビュー調査の結果から、正しいかつ効果的なモデルチェックビジュアライゼーションの探索を促進するための課題と機会を明らかにする。

* [RoboGrammar: graph grammar for terrain-optimized robot design](https://dl.acm.org/doi/abs/10.1145/3414685.3417831) - ***ACM Transactions on Graphics***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7042593841334771437)]. 本研究では、RoboGrammarと呼ばれる完全自動化手法を提示し、与えられた地形を通過するための最適化されたロボット構造を生成する。このフレームワークは、各ロボット設計をグラフとして表現し、物理的なロボットアセンブリの可能な配置をグラフ文法で表現する。各ロボット設計は、文法規則のシーケンスとして表現できる。わずかな規則セットで、数百万人ものロボット設計を記述できる。文法の構築により、設計空間は製造可能な設計に限定される。与えられた入力地形に対して、最優秀なロボット設計とその対応する制御器を探索する。著者たちは、組合せ設計空間の効率的な探索を実現する新しい手法「グラフヒューリスティックサーチ」を導入する。グラフヒューリスティックサーチでは、設計空間を探索しながら、不完全な設計（例：組合せ検索木のノード）を拡張することで達成可能な最良性能値にマッピングする関数を学習する。この手法は、設計空間の最も有望な枝の探索を優先する。この手法を検証するために、著者は複数の困難で多様な地形に対してロボットを最適化する。著者は、RoboGrammarが、単一地形または複数地形に最適化された非自明なロボットを成功裏に生成できることを示す。

*[Back to Top](#c)

#### 論理DSLの応用 <a id="logic-dsl-applications"></a>

* [Situation Calculus](https://en.wikipedia.org/wiki/Situation_calculus) - ***Wikipedia***. Wikipediaにおけるシチュエーション計算論、動的領域を表現・推論するための論理形式。

* [What is Answer Set Programming?](https://link.springer.com/content/pdf/10.1007/978-3-030-24658-7.pdf) - ***Springer***, 2008. . . アンサーファミリープログラミング（ASP）は、困難な探索問題に特化した声明型プログラミングの一種である。非単調論理の知識表現における研究の結果として生まれたものであり、知識指向アプリケーションにおいて特に有用である。ASPプログラムはプロログ規則に似た規則から構成されるが、ASPが用いる計算機構は異なる：それらは論理の命題充足性ソルバーの開発に寄与したアイデアに基づいている。 [[All Versions](https://scholar.google.com/scholar?cluster=3691841207891991771)] [[Tutorial on AAAI](https://dl.acm.org/doi/abs/10.5555/1620270.1620340)]

* [Answer Set Programming](https://link.springer.com/chapter/10.1007/3-540-46767-x_28) - ***ICLPNR'99***, 1999. [[All Versions](https://scholar.google.com/scholar?cluster=15267370435063454675)]. [[Preprint](http://people.sabanciuniv.edu/~esraerdem/teaching/krr06/asp.pdf)]. 回答集合プログラミング（ASP）の元論文。ASPは、困難な探索問題に向けた宣言型プログラミングの一種であり、知識表現における非単調論理の利用を扱う。問題の解決は、従来の論理プログラミングとは異なり、クエリに対する回答置換ではなく、回答集合（安定モデルとも呼ばれる）で表現される。

* [Action Languages, Answer Sets, and Planning](https://link.springer.com/chapter/10.1007%2F978-3-642-60085-2_16) - ***The Logic Programming Paradigms***, 1999. [[All Versions](https://scholar.google.com/scholar?cluster=2045126541850245645)]. [[Preprint](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=e58359b3dae3141fd2c85ee3f00c566411134929)]. 論理プログラミングの視点から、行動の表現とプランナー設計に関する成果と課題について述べる。著者は、行動言語の最新研究とそれらを論理プログラミングに変換する話題、行動領域の可能性のある履歴を回答集合で表現する話題、回答集合意味の効率的な実装とそのプラン生成への応用、因果論理とプランニングアルゴリズムの関係について述べる。これらの分野における最新進展は、論理プログラミングの思想に基づいたプランナーの開発を促進し、表現力の高い行動記述言語と効率的な計算手続きを組み合わせたプランナーの創出につながる可能性がある。

* [Qualitative Simulation](https://www.sciencedirect.com/science/article/abs/pii/0004370286900731) - ***Artificial Intelligence***, 1986. [[All Versions](https://scholar.google.com/scholar?cluster=4945009733425184345&hl=en&as_sdt=0,5)]. [[Preprint](https://www.cs.utexas.edu/ftp/qsim/papers/Kuipers-aij-86.pdf)]. 本論文は、微分方程式および連続的に微分可能な関数の抽象としての質的構造と行動記述の正確な定義を提示する。著者は、既存アルゴリズムの優れた特徴を一般化した新しい質的シミュレーションアルゴリズムを提示し、異なるアプローチ間の直接比較を可能にする。微分方程式から抽象化された制約集合を起点として、本研究はQSIMアルゴリズムが元の方程式の任意の解に対応する質的行動を生成することを保証するという結果を示す。また、質的シミュレーションアルゴリズムは、与えられた制約を満たすメカニズムに一致しない「虚偽の質的行動」を時折生成することを示しており、これは質的因果推論システムの設計やメカニズム記述知識ベースの構築および検証において、特定の注意を払う必要があることを示している。

* [Qualitative Reasoning: Modeling and Simulation with Incomplete Knowledge](https://www.cs.utexas.edu/users/qr/QR-book.html) - ***MIT Press***, 1994. [[All Versions](https://scholar.google.com/scholar?&cluster=6634684154722677465)]. 本書は、過去15年間で開発された、不完全な知識を持つ物理システム（バスタブ、ティーカップ、自動車、人体の生理、化学プロセス、制御システム、電気システムなど）の質的モデルの構築とシミュレーションに用いられる手法を、概念的に統一された理論フレームワーク内で提示する。この作業の主なツールは著者のQSIMアルゴリズムであり、詳細に説明される。質的モデルは、連続メカニズムに関する不完全な知識の状態を表現する上で、従来のモデルよりも優れた能力を持つ。質的シミュレーションは、モデル内の知識と一致するすべての可能な行動を保証するため、診断、設計、監視、説明など、人工知能のさまざまな応用において重要である。

* [Qualitative and quantitative simulation: bridging the gap](https://www.sciencedirect.com/science/article/pii/S0004370297000507) - ***Artificial Intelligence***, 1997. [[All Versions](https://scholar.google.com/scholar?cluster=9033452473914228535)]. 質的シミュレーションおよび定量的シミュレーションの欠点から、両者の組み合わせによるシミュレーションが、両者の強みを併せ持つものとして提案される。その結果として生じた技術のクラスは「半定量シミュレーション」と呼ばれる。半定量シミュレーションの一つのアプローチは、不完全な定量情報を数値区間で表現することである。この研究は、Q3という実装された半定量シミュレータを用いて、区間を用いた半定量シミュレーションを実証する。Q3は質的シミュレーションを段階的に精緻化し、徐々に具体的な定量的予測を提供し、極限では数値シミュレーションに収束しつつ、質的および区間シミュレーションの重要な正確性保証を維持する。

* [A Logic Programming Language for Computational Nucleic Acid Devices](https://pubs.acs.org/doi/10.1021/acssynbio.8b00229) - ***ACS Synthetic Biology***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=3336951672389047784)]. この論文は、計算核酸系の設計および解析を可能にする論理プログラミング言語を提示している。この言語は標準論理プログラミングに新たな等式理論を追加し、核酸分子モチーフを表現するものであり、システム全体に存在する一致するモチーフを自動的に特定し、論理規則として表現された変換を適用する。

* [Genetic circuit design automation with Cello 2.0](https://www.nature.com/articles/s41596-021-00675-2) - ***Nature Protocol***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=7418307542591684967)]. [[Preprint](https://www.researchgate.net/profile/Samuel-Oliveira-38/publication/358801979_Genetic_circuit_design_automation_with_Cello_20/links/635debf412cbac6a3e0b19e4/Genetic-circuit-design-automation-with-Cello-20.pdf)]. 個々の細胞は環境と相互作用し、同士の間で通信し、時間の経過を追跡し、自然な調節遺伝回路によって制御された関数を通じて意思決定を行う。臨床療法やその他の応用に用いられる合成プログラマブル回路は、コンピュータ支援ツールによって自動的に設計可能である。Celloソフトウェアは、高度なソフトウェア記述と、論理ゲートを表す特徴付けられたDNA部品のライブラリをもとに、プログラム回路のDNA配列を設計する。このプロセスにより、設計仕様の再利用、モジュラーなDNA部品ライブラリの管理、実験データに基づく形式化された回路変換が可能になる。本プロトコルは、Javaで書かれた自由に利用可能なマルチプラットフォームソフトウェアであるCello 2.0を説明している。Cello 2.0は、論理ゲートの構造および動的行動を表す数学モデルの柔軟な記述、ゲートの遺伝子配置に関する新たな形式規則、新たなグラフィカルユーザーインターフェース、Verilog 2005構文のサポート、およびSynBioHub部品リポジトリソフトウェア環境との連携を提供する。これらの機能により、Celloは大腸菌のプラスミドにとどまらず、新たな生物および広範な遺伝的文脈（包括して遺伝子組成）にまで拡張される。Cello 2.0で回路を設計すると、Verilogファイルから抽象的なブールネットワークが生成され、その各ノードに生物学的部品が割り当てられ、DNA配列が構築され、構造的かつ注記された配列表現が生成され、それぞれが後続プロセスや製造に適した形で提供される。結果として、指定されたブール関数が生物体内で実行され、回路の性能に関する予測が得られる。設計空間の規模やユーザーの専門性に応じて、処理時間は数分から数時間までかかる。

* [MoVer: Motion Verification for Motion Graphics Animations](https://arxiv.org/abs/2502.13372) - ***ACM Transactions on Graphics***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=527747131334466686)]. 大規模な視覚言語モデルは、テキストプロンプトから運動グラフィックスアニメーションを生成できるが、プロンプトに記述された空間時間的性質をすべて含めることは頻繁に失敗する。本研究では、第一順序論理に基づく運動検証DSL（MoVer）を導入し、運動グラフィックスアニメーションの空間時間的性質を検証できるようにする。著者たちは、人々がアニメーションを記述する際によく用いる一般的な性質の集合を特定し、これらをMoVerの述語として実装し、任意のSVGベースの運動グラフィックスアニメーションに適用可能な実行エンジンを提供する。その後、MoVerがLLMベースの合成および検証パイプラインにおいて、運動グラフィックスアニメーションを反復的に改善する用途を示す。テキストプロンプトが与えられた場合、パイプラインは運動グラフィックスアニメーションと対応するMoVerプログラムを合成する。アニメーションに検証プログラムを実行することで、失敗した述語の報告が得られ、この報告は自動的にLLMにフィードバックされ、アニメーションを反復的に修正する。

* [The KoLMogorov Test: Compression by Code Generation](https://openreview.net/forum?id=C45YqeBDUM) - ***ICLR'25***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=16809888292456252135)]. 壊れは知能の中心にある。データの任意のシーケンスを圧縮する理論的に最適な方法は、そのシーケンスを出力し、停止する最短プログラムを見つけることである。しかし、このようなコルモゴロフ圧縮は計算不可能であり、LLMがこの理論的極限を近似することは困難である。なぜなら、これは現在のモデルの範囲を超える推論、計画、探索能力を必要とするためである。本研究では、コード生成LLM向けの圧縮としての知能テストであるKoLMogorov-Test（KT）を導入する。KTでは、推論時にデータシーケンスが提示され、モデルがそのシーケンスを生成するための最短DSL（タスクに特化した）プログラムを生成するよう求められる。著者たちは、評価および訓練においてKTがもたらすいくつかの利点を指摘する：難易度が異なる問題インスタンスが理論的に無限に存在し、既存の強力なベースラインが存在し、評価メトリクス（圧縮）は操作できない、かつ事前訓練データの汚染が極めて低い。現在のモデルの評価には、音声、テキスト、DNAデータおよびランダムに生成された合成DSLプログラムによって生成されたシーケンスを用いる。

* [Meta-analysis of the functional neuroimaging literature with probabilistic logic programming](https://www.nature.com/articles/s41598-022-21801-4) - ***Scientific Reports***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=5952076495542489316)]. 可靠な脳行動関連を推論するには、数千の機能性神経画像研究のデータをメタ解析によって統合する必要がある。しかし、現行のメタ解析ツールは、単純な神経科学概念に限定され、問うことができる範囲が制限されている。本研究では、NeuroLang：神経画像メタ解析において仮説を表現および検証するために用いるドメイン特定言語を設計することで、メタ解析の範囲を拡張する。人工知能と知識表現の交差点にある形式論理を活用し、NeuroLangは神経画像データに固有な不確実性を自然にモデル化しながら、より広範な仮説を扱う表現力を提供する。著者たちは、構造・機能関連に関する実用例を通じて、NeuroLangの能力を示し、3つの典型的な脳ネットワークの特定機能的役割を推論し、視覚語形領域が視覚空間注意に与える役割を支持し、前頭側頭制御ネットワークの異質な組織構造を調査した。

* [Prototyping an Ontological Framework for Cellular Senescence Mechanisms: A Homeostasis Imbalance Perspective](https://www.nature.com/articles/s41597-024-03331-y) - ***Scientific Data***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=16297381933381807246)]. セルularな老化は個体の老化において重要な要因であり、個体に正の影響も負の影響も及ぼすが、そのメカニズムはほとんど不明である。そのため、細胞老化が組織損傷や年齢関連疾患にどのように現れるかを説明するためには、知識の統合が不可欠である。本研究では、細胞老化に関する知識をコンピュータが読み取れる形で構造化するための本質モデルを提案する。著者は、ホメオスタシス不均衡プロセスオントロジー（HOIP）を基に、細胞老化のプロセス、分子、解剖構造、現象、およびその他のエンティティを手動でアノテーションし、定義した。著者は、プロセス間の因果関係としてメカニズムを記述し、細胞老化におけるストレスとストレス反応の間のホメオスタシス不均衡を統一フレームワークとしてモデル化した。HOIPは形式的に評価され、細胞老化と疾患の関係が高次知識処理に用いられるように推論された。著者は、細胞老化プロセスを可視化し、知識の活用を支援した。本研究は、細胞老化と個体老化の関連メカニズムを解明するための知識ベースを提供する。

* [Knowledge-Based Embodied Question Answering](https://ieeexplore.ieee.org/abstract/document/10128752) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=3297900861513340459)]. 本論文では、知識に基づく体験型質問応答（K-EQA）タスクを提案する。このタスクでは、エージェントが環境を知的に探索し、知識を用いて多様な質問に答える。従来の明示的に質問に目的対象を指定するEQAsとは異なり、エージェントは外部知識を活用して、「部屋に使われる食品を切るための道具は何か？」といった複雑な質問を理解できる。このK-EQA問題を解決するために、ニューラルプログラム合成推論に基づく新しいフレームワークが提案され、外部知識と3Dシーングラフの連携推論が行われ、ナビゲーションと質問応答が実現される。特に、3Dシーングラフは訪問したシーンの視覚情報を記憶するためのメモリを提供し、複数回質問に対する応答の効率を大きく向上させる。実験結果から、提案されたフレームワークは体験環境における複雑で現実的な質問に答える能力を持つことが確認された。この手法は、複数エージェントシナリオにも適用可能である。

* [Explainable Robotic Plan Execution Monitoring Under Partial Observability](https://ieeexplore.ieee.org/abstract/document/9623348) - ***IEEE Transactions on Robotics***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=8699998059430654104)]. 自動システムにおける計画生成は、目標状態に到達するためには必要だが、十分ではない。計画実行中に、期待される状態と観測された状態の間にさまざまなズレが生じる（例：予期しない外部イベント、目標の変更、ロボット部品の故障など）が、これらは計画の失敗を引き起こす可能性がある。そのため、自動システムには、このようなズレに対して自己回復できる実行監視アルゴリズムを備える必要がある。本研究では、部分観測下で動作する計画実行監視アルゴリズムを導入する。このアルゴリズムは、ハイブリッド予測、診断および説明生成、計画のための新しい形式論理を用いる。予測モジュールは、不完全な状態から計画の一部の実行後の期待される状態を生成し、ズレを検出する。診断推論モジュールは、ロボット部品の故障を説明する意味のある仮説を生成する。従来の診断手法とは異なり、以前の仮説は新たな部分観測に基づいて修正され、さらに情報が得られるにつれて説明の精度が向上する。再計画モジュールは、これらの説明を考慮しながら、故障を回避する新しい計画を計算する。すべての推論モジュールは、高レベルの論理推論と低レベルの確率ベースの実行可能性チェックを組み合わせたハイブリッド構造を持つ。著者は、これらのハイブリッド形式論理モジュールが計画実行監視の性能を向上させることを実験的に示した。

* [LogSay: An Efficient Comprehension System for Log Numerical Reasoning](https://ieeexplore.ieee.org/abstract/document/10494680) - ***IEEE Transactions on Computers***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=17053857493674669692)]. スマートシステムやアプリケーションの発展により、システム維持に必要な重要なデータを記録する大量ログが生成される。システム開発者は、通常、ログを分析してシステムやアプリケーションの状態を追跡する必要がある。そのため、大量ログの中から質問に対する答えを見つけることが極めて重要である。本研究では、正確かつ効率的に答えを予測するための多段階「リトリーバー-リーダー」質問応答システム、LogSayを設計した。このシステムは、単純な質問（例：ログのセグメントやスパン）だけでなく、数理的推論を用いて複雑な論理質問にも答えることができる。LogSayは、ログリトリーバーとログリーダーの2つの主要なコンポーネントを持つ。著者は、これらを実現するため5つのオペレーターを設計した。ログリトリーバーは、質問に基づいて関連するログを検索する。その後、ログリーダーは数理的推論を実行し、最終的な答えを導出する。さらに、システムログ向けの質問応答データセットが存在しないため、著者は3つの公開ログデータセットをもとに質問応答データセットを構築し、公開する予定である。評価結果から、LogSayは正確性および効率性において、最先端の手法を上回ることが示された。

*[Back to Top](#c)

#### DSLプログラム合成 <a id="dsl-program-synthesis"></a>

* [Learning to Infer Graphics Programs from Hand-Drawn Images](https://proceedings.neurips.cc/paper/2018/hash/6788076842014c83cedadbe6b0ba0314-Abstract.html) - ***NeurIPS'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=14065112485794121024)]. この手法は、プログラム合成技術を用いて、描画プリミティブからグラフィックプログラムを回復するモデルを学習する。これらのプログラムには変数バインディング、繰り返しループ、または簡単な条件分岐などの構造がある。グラフィックプログラムを手に入れたことで、深層ネットワークが犯した誤りを訂正し、描画を外挿できるようになった。

* [babble: Learning Better Abstractions with E-Graphs and Anti-unification](https://dl.acm.org/doi/abs/10.1145/3571207) - ***POPL'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=7935064016901049715)]. 本論文では、問題領域に応じた等式理論を入力として取り込む新たなライブラリ学習アルゴリズム「ライブラリ学習モジュロ理論（LLMT）」を提案する。LLMTはeグラフと等式飽和を用いて、理論モジュロで等価なプログラムの空間をコンパクトに表現し、新たなeグラフ反統一技術を用いて、コーパス内の共通パターンをより直接的かつ効率的に発見する。

* [Top-Down Synthesis for Library Learning](https://dl.acm.org/doi/abs/10.1145/3571234) - ***POPL'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=12324277007659029766)]. 本論文では、ドメイン特定言語（DSL）におけるプログラムコーパスから共通機能を捉えるライブラリ関数を合成するための「コーパスガイドドトップダウン合成」を導入する。このアルゴリズムは、初期のDSLプリミティブから直接抽象を構築し、中間抽象の文法パターンマッチングを用いて検索空間を知的に絞り込み、コーパス内の共有構造を最大限捉える抽象へとアルゴリズムを導く。

* [DreamCoder: growing generalizable, interpretable knowledge with wake–sleep Bayesian program learning](https://royalsocietypublishing.org/doi/full/10.1098/rsta.2022.0050) - ***Philosophical Transactions of the Royal Society A***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11356436337624711843)]. [[Preprint](https://arxiv.org/abs/2006.08381)]. 本論文では、問題をプログラムで解決する能力を持つ「DreamCoder」というシステムを提示する。このシステムは、ドメイン概念を表現するためのドメイン特定プログラミング言語と、その中でプログラムを探索するためのニューラルネットワークを構築することで専門性を獲得する。‘ウェイク–スリープ’学習アルゴリズムは、新しいシンボリック抽象を言語に追加し、想定されたおよび再現された問題を用いてニューラルネットワークを訓練する。DreamCoderは、古典的な誘導プログラミングタスクおよび絵を描く、シーンを構築するといった創造的タスクも解決する。

* [Synthesizing theories of human language with Bayesian program induction](https://www.nature.com/articles/s41467-022-32012-w) - ***Nature Communications***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=8603772394100237159)]. 科学モデルや理論の自動化・データ駆動型構築および評価は、人工知能分野における長期的な課題である。本研究では、人間の言語の基本部分である「形音学」（音から語形を構成するシステム）のモデルをアルゴリズム的に合成するフレームワークを提示する。著者たちはベイズ推論とプログラム合成、そして言語理論および学習・発見の認知モデルに由来する表現を統合する。58の異なる言語から得られた70のデータセットにおいて、システムは各言語の形音学の核心部分に対して人間が解釈可能なモデルを合成し、場合によっては人間言語学者が提唱したモデルに近い結果を達成する。さらに、すべての70データセットを統合して推論することで、人間が解釈可能な言語間のタイプ学的傾向を記述するメタモデルが自動的に合成される。最後に、同アルゴリズムは少数サンプルでの学習ダイナミクスを捉え、1つまたは少数の例から新たな形音則を習得する。これらの結果は、言語学やその他の科学分野における人間解釈可能なモデルの機械的発見をより強力に実現する道を開くことを示唆する。

* [Grammar Prompting for Domain-Specific Language Generation with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2023/hash/cd40d0d65bfebb894ccc9ea822b47fa8-Abstract-Conference.html) - ***NeurIPS'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11694070042468483715)]. グラムマープロミプトは、Backus--Naur Form（BNF）で表現された外部知識やドメイン特定制約を、コンテキスト内学習中に大規模言語モデル（LLM）が利用できるようにするシンプルなアプローチである。グラムマープロミプトは、各デモンストレーション例に、特定の出力例を生成するために最小限に必要な専門的なグラムマーを追加する。この専門的なグラムマーは、フルDSLグラムマーの部分集合である。推論時には、LLMがテスト入力に対してBNFグラムマーを予測し、そのルールに基づいて出力を生成する。実験結果から、グラムマープロミプトは、意味解析（SMCalFlow、Overnight、GeoQuery）、PDDL計画、およびSMILESベースの分子生成など、多様なDSL生成タスクにおいて、LLMが競争力を持つ性能を発揮することが確認された。

* [Errors are Useful Prompts: Instruction Guided Task Programming with Verifier-Assisted Iterative Prompting](https://arxiv.org/abs/2303.14100) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8063693456660536915)]. [[Project](https://github.com/ac-rad/xdl-generation)]. [[Website](https://ac-rad.github.io/clairify/)]. 本論文では、データが限られたドメイン特定言語で書かれたプログラムが文法的に正しく、環境制約を含むようにするため、自動反復プロミプトとプログラム検証を組み合わせたCLAIRIFYというアプローチを提案する。

* [PhotoScout: Synthesis-Powered Multi-Modal Image Search](https://dl.acm.org/doi/full/10.1145/3613904.3642319) - ***ACM SIGCHI'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=6522231014055730719)]. 本論文では、ユーザーが自然言語で説明し、正例・負例、オブジェクトタグを提供して意味的な画像検索を実行できる新しいマルチモーダル画像検索手法を検討する。このツールPhotoScoutは、ドメイン特定言語で視覚検索クエリを生成し、合成されたプログラムを実行して目的の画像を検索するプロセスを実現している。

* [Expert-level protocol translation for self-driving labs](https://proceedings.neurips.cc/paper_files/paper/2024/hash/54dd9e0cff6d9214e20d97eb2a3bae49-Abstract-Conference.html) - ***NeurIPS'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=13997597682274906943)]. [[Project](https://autodsl.org/procedure/papers/neurips24shi.html)]. AIモデルの進化により、科学発見への応用が進展しているが、その発見の検証と探索には実験が必要となる。自律実験室の概念は、AIによる発見後の実験プロセスを自動化し、効率化することを目指しているが、人間が理解できる実験プロトコルを機械が解釈できる形式に変換するには、構造化された言語の必要性、明示的な知識の重要性、およびプロトコルの各ステップにおける因果性と一貫性の維持といった課題がある。現時点で、プロトコルの変換は主にドメイン専門家とIT専門家による手動作業に依存しており、時間がかかる。この課題に対応するために、本研究では、構造化されたプロトコル依存グラフ（PDG）を段階的に構築する3段階ワークフローを提案し、文法レベルで構造化され、意味レベルで完成し、実行レベルでリンクされたプロトコル変換フレームワークを構築した。定量的および質的評価により、このフレームワークは専門家と同等の性能を示し、自律実験室における自動化能力の向上により、科学発見プロセスを大幅に加速・民主化する可能性を示している。

* [Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6) - ***Nature***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=5653439474813913484)]. 大規模言語モデル（LLM）は、定量的推論や自然言語理解といった複雑なタスクを解決する能力を示しているが、LLMは時折「フィクション」（または「ハラクション」）を起こし、妥当だが誤った記述を生成することがある。これは、現在の大規模モデルの科学発見への適用を妨げている。本研究では、事前学習済みLLMと体系的な評価器を組み合わせた「FunSearch（関数空間での探索）」という進化プロセスを導入し、重要な問題において既存の成果を上回る効果を示している。特に、極端な組合せ論の中心問題である「キャップセット問題」にFunSearchを適用することで、有限次元および漸近的なケースにおいて、既知の最良解を上回る新しいキャップセット構成を発見した。これは、既存の未解決問題においてLLMを用いて発見を行うことが可能であることを示している。また、アルゴリズム問題であるオンラインバインパッキングにFunSearchを適用し、広く使われているベースラインを上回る新しいヒューリスティックを発見した。多くのコンピュータ検索手法とは異なり、FunSearchは問題解決のためのプログラムを探索するものであり、解決策そのものではなく、そのプロセスを探索する。発見されたプログラムは、原始的な解決策よりも解釈しやすく、ドメイン専門家とFunSearchのフィードバックループを可能にし、実世界アプリケーションへの導入を支援する。

* [CoLadder: Manipulating Code Generation via Multi-Level Blocks](https://dl.acm.org/doi/abs/10.1145/3654777.3676357) - ***UIST'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=6267750825019915015)]. 本論文では、プログラマーがLLMを用いてプログラムを作成する際の戦略を理解するため、反復設計プロセスを採用した。著者らは、階層的なタスク分解、直接的なコードセグメント操作、プロミプト作成中の結果評価を支援する新しいシステム「CoLadder」を提案した。12名の経験豊富なプログラマーによるユーザスタディ結果から、CoLadderはプログラマーが柔軟に問題解決意図を外部化し、さまざまな抽象レベルからコードの評価・修正能力を向上させる上で有効であることが明らかになった。

* [InverseCSG: automatic conversion of 3D models to CSG trees](https://dl.acm.org/doi/abs/10.1145/3272127.3275006) - ***ACM Transactions on Graphics***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=3247081749407570405)]. コンピュータ支援設計（CAD）は多くの現代製造プロセスにおいて重要な役割を果たしているが、生成される設計ファイルは通常、原始的な幾何学的形状を記述している。この表現では、設計がどのように生成されたかというプロセスが失われている。本論文では、3Dモデルがどのように生成されたかを、構成固体幾何学（CSG）という言語で逆に再構成する手法を提示する。CSGが形式文法であることに着目し、著者はこの逆CSG問題をプログラム合成問題として定式化する。その解決策は、幾何学的処理と最先端のプログラム合成技術を組み合わせたアルゴリズムである。このスキームでは、CSG木の混合離散・連続領域を純粋な離散領域に変換し、現代のプログラム合成器が優れた性能を発揮できるようにする。著者は、複数の例（100個以上の基本部品を含むものも含む）において、このアルゴリズムの効率性とスケーラビリティを示している。著者は、単純なプログラムが真の状態に近いことを示し、メッシュ再編集におけるこの手法の適用可能性を確認している。最後に、既存の最先端手法と比較し、このアルゴリズムが生成されたCSGのコンパクトさおよび実行時間において優位であり、かつこれまでのすべての手法よりもはるかに複雑なメッシュを処理できることを示している。

* [pix2code: Generating Code from a Graphical User Interface Screenshot](https://dl.acm.org/doi/abs/10.1145/3220134.3220135) - ***ACM SIGCHI Symposium on Engineering Interactive Computing Systems***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=8296741513177971931)]. [[Code](https://github.com/tonybeltramelli/pix2code)]. [[Website](https://uizard.io/research/)]. 本論文は、深層学習手法を活用し、ユーザーインターフェースを自動的に逆工程化し、1つの入力画像からiOS、Android、ウェブベース技術の3つのプラットフォームに対応したコードを生成できるモデルをエンドツーエンドで訓練できる可能性を示している。正確率は3つのプラットフォームにおいて77％以上である。

* [Free2CAD: parsing freehand drawings into CAD commands](https://dl.acm.org/doi/abs/10.1145/3528223.3530133) - ***ACM Transactions on Graphics***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=5726506085191658159)]. CADモデリングは業界標準であるが、2つの主要な障壁により、専門家に限定された使用となっている。第一に、ユーザーが最終的な形状を、有効なCAD命令の連続列に精神的に分解できる必要がある；第二に、ユーザーがCADソフトウェアに十分な知識を持ち、対応する命令を実行できる必要がある。これらの課題を解決するための一歩として、本研究ではFree2CADを提案する。ユーザーは最終的な形状をスケッチするだけで、システムが入力の筆跡を簡易CAD言語で表現された命令の列に解析する。この命令を実行すると、スケッチされたオブジェクトが再現される。技術的には、著者はスケッチベースのCADモデリングをシーケンス・ツー・シーケンスの翻訳問題として捉え、強力なTransformerニューラルネットワークアーキテクチャを活用する。筆跡のシーケンスを入力として、著者は個々のCAD操作に該当する筆跡をグループ化する新しいタスクを導入する。著者は、筆跡のグループ化と操作パラメータの幾何学的適合を組み合わせ、中間グループが幾何学的に補正された後、それらを次のシーケンス推論の文脈として再利用する。合成データ上で訓練されたにもかかわらず、著者はFree2CADが現実世界のCADモデルから作成されたスケッチや、初心者によるスケッチにも一般化できることを示している。

* [ShapeAssembly: learning to generate programs for 3D shape structure synthesis](https://dl.acm.org/doi/abs/10.1145/3414685.3417812) - ***ACM Transactions on Graphics***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7510961460353268258)]. 3D形状を手動で作成するのは困難で、時間もかかる。3D形状の生成モデルは、魅力的な代替案を提供する。プロシージャル表現はその一つである：高品質かつ編集可能な結果を提供するが、作成が難しいため、出力の多様性が限られている。対極にあるのは深層生成モデルである：十分なデータがあれば、どんな形状クラスも学習し、生成できるが、その出力にはアーティファクトがあり、表現は編集できない。本研究は、新しい3D形状合成において、両者の長所を統合する一歩を踏み出す。著者は、3D形状構造に特化した「アセンブリ言語」であるShapeAssemblyを提案する。ShapeAssemblyプログラムは、立方体部品のプロキシを宣言し、それらを階層的かつ対称的に接続することで形状構造を構築する。ShapeAssembly関数は連続自由変数でパラメータ化されており、1つのプログラム構造が関連する形状のファミリーを捉えることができる。著者は、PartNetデータセットにある既存の形状構造からShapeAssemblyプログラムを抽出する方法を示し、その後、階層的シーケンスVAEという深層生成モデルを訓練し、新しいShapeAssemblyプログラムを生成できるようにする。このアプローチは、それぞれの表現の強みを活かす：プログラムは解釈可能で編集可能な形状変動の部分を捉え、深層生成モデルは形状コレクション間の変動と相関を捉え、プロシージャル表現では表現しづらい部分をカバーする。

* [ShapeMOD: macro operation discovery for 3D shape programs](https://dl.acm.org/doi/abs/10.1145/3450626.3459821) - ***ACM Transactions on Graphics***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=16783678518681779265)]. 詳細で操作しやすい3D形状を構築するための一般的な方法は、プロシージャルモデリングである、すなわちプログラムを使って幾何学を生成することである。このようなプログラムは、一連の命令とその関連するパラメータ値から構成される。この表現のメリットを完全に実現するためには、形状プログラムがコンパクトで、出力幾何学の意味のある操作を可能にする自由度のみを公開すべきである。この目標を達成するための一つの方法は、高レベルのマクロ操作を設計し、実行時にベースの形状モデリング言語の命令系列に展開することである。しかし、このようなマクロの手動作成は、形状プログラムそのものと同様に困難であり、ほとんど専門家に限定されている。本論文では、ShapeMODと名付けたアルゴリズムを提示し、大量の3D形状プログラムデータセットにおいて有用なマクロを自動的に発見する。ShapeMODは、命令ベースの文法で表現された形状プログラムに作用する。その目的は、入力形状集合を表現するために必要な関数呼び出しと自由パラメータの数を最小化することにより、プログラムをコンパクトにすることである。著者は、3D形状構造に特化した言語で表現された複数のプログラム集合に対してShapeMODを実行する。著者は、ShapeMODが自動的に、大規模な形状集合に共通する構造的およびパラメトリックパターンを抽象化する簡潔なマクロ集合を発見していることを示している。さらに、著者は、ShapeMODが発見したマクロが、形状生成モデリングや点クラウドからプログラムを推論するといった後続タスクのパフォーマンス向上をもたらすことを示している。最後に、ユーザー研究を実施し、ShapeMODが発見したマクロがインタラクティブな形状編集を効率化していることを示している。

* [ShapeCoder: Discovering Abstractions for Visual Programs from Unstructured Primitives](https://dl.acm.org/doi/abs/10.1145/3592416) - ***ACM Transactions on Graphics***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=682217944594450121)]. 本研究では、形状データセット（無構造プリミティブで表現）を入力として受け取り、その中で（i）有用な抽象関数と（ii）これらの抽象を用いて入力形状を説明するプログラムを同時に発見するShapeCoderを提案する。発見された抽象は、データセット全体における構造的およびパラメトリックな共通パターンを捉え、その上で生成されたプログラムはよりコンパクトになり、誤った自由度を抑制する。ShapeCoderは、より複雑な入力に対して、厳密な入力仮定を必要とせずに、より優れた抽象を発見するため、従来の抽象発見手法を大幅に改善する。これは、（a）形状からプログラムへの認識ネットワークによる部分問題の解決学習と（b）条件付きリライトを用いたeグラフの活用による、複雑なパラメトリック表現を持つ抽象が実用的に適用可能であることを保証するための二つの方法論的進展に起因する。著者は、プリミティブ分解が手動注釈から解析されたり、無教師学習による立方体抽象法で生成されたりする、複数の3D形状データセット上でShapeCoderを評価し、すべての分野において、高レベルの関係性を捉え、不要な自由度を除去し、他のアプローチと比較してデータセットの圧縮効果を達成する抽象のライブラリを発見した。最後に、発見された抽象を用いて書き直されたプログラムが、後続タスクにおいて実際に有用であることを検証する。

* [Learning attribute grammars for movement primitive sequencing](https://journals.sagepub.com/doi/full/10.1177/0278364919868279) - ***International Journal of Robotics Research***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=3308554285811264465)]. 運動プリミティブは現代ロボット分野でよく研究され、広く応用されている概念である。しかし、既存のプリミティブライブラリからプリミティブを組み合わせるという問題は、依然として難しく残っている。本研究では、確率的文法を用いて、与えられたプリミティブライブラリから複雑なロボットポリシーを生成するためのプリミティブのシーケンスを構築する方法を提案する。形式文法のルールベース構造により、階層構造を持つタスクを直感的に表現できる。この階層的構想は、ロボットポリシーの学習・整理・再利用方法と強く結びついている。しかし、文法の誘導は依然として複雑で、解決されていない課題である。著者は、ロボット運動プリミティブの物理的性質を活かし、文法空間を制限し、効率的に探索する。文法は観測に基づく文法のポストリーダをマーカーチェーンモンテカルロ最適化によって学習される。提案分布は、探索空間における演算子の確率の混合として定義される。さらに、確率的運動プリミティブの分類手法を提示し、二つのプリミティブが接続可能かどうかを決定する方法を検討する。これらの特性と演算子への制限の組み合わせにより、連続したシーケンスを保ちながら文法空間を縮小する。また、属性と条件のセットを導入し、確率的文法に追加することで、シーケンス内の単一プリミティブを適応的に変更できるようにする。この手法は、7自由度の軽量ロボットアームを用いて、単純な運動プリミティブから構成される複雑なシーケンス生成を必要とするタスクで検証された。

* [LogiCode: An LLM-Driven Framework for Logical Anomaly Detection](https://ieeexplore.ieee.org/abstract/document/10710633) - ***IEEE Transactions on Automation Science and Engineering***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=4279830355362202335)]. 本論文では、大規模言語モデル（LLM）を活用して工業環境における論理的異常を検出するLogiCodeという新しいフレームワークを提示する。従来の構造的不整合にとどまらず、論理的不整合の検出に進化する。LLMを論理的推論に活用することで、LogiCodeは自動的にPythonコードを生成し、誤った部品数や欠落要素といった異常を特定する。これは異常検出技術における大きな進展である。独自のデータセット「LOCO-Annotations」とベンチマーク「LogiBench」を導入し、二値分類精度、コード生成成功率、推論精度といった指標でLogiCodeの性能を評価する。結果は、LogiCodeの解釈性の向上を示し、論理的異常検出の精度を大幅に向上させ、特定された異常に対して詳細な説明を提供している。これは工業異常検出分野において、より知能のあるLLM駆動アプローチへの重要な転換を示しており、業界特化アプリケーションに大きな影響をもたらす可能性がある。

* [Synthesis of Incremental Linear Algebra Programs](https://dl.acm.org/doi/abs/10.1145/3385398) - ***ACM Transactions on Database Systems***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=18222415331047706008)]. 本論文は、統計モデル、機械学習プログラム、グラフアルゴリズムなどの高度な分析を線形代数プログラムとして表現した際のインクリメンタルビュー維持（IVM）を対象とする。本研究では、LAGOと呼ばれる線形代数の統一フレームワークを提示し、効率的なインクリメンタルトリガープログラムを自動合成することで、ユーザーが誤りを生む手動導出、パフォーマンスチューニング、低レベル実装の細部から解放される。このフレームワークの鍵となる技術は抽象解釈であり、分析プログラムのさまざまな性質を推論する。これらの性質が、効率的なインクリメンタルトリガーの自動合成に必要な推論力を提供する。著者は、回帰モデルからグラフ計算まで幅広いアプリケーションにおいて、このフレームワークの有効性を評価する。

* [Enhancing Robot Program Synthesis Through Environmental Context](https://proceedings.neurips.cc/paper_files/paper/2023/hash/0c1e94af650f5c74b1f3da467c2308c2-Abstract-Conference.html) - ***NeurIPS'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=17630134586050451683)]. プログラム合成は、与えられた仕様に従って自動的に実行可能なプログラムを生成することを目的とする。最近の進展では、深層ニューラル手法および大規模事前学習言語モデルがプログラムの意味を正確に捉えられることが示されている。ロボットプログラミングにおいては、これまでの研究ではグローバル環境を組み込むことでプログラム合成を支援してきたが、全体環境を包括的に理解するという仮定は、実際には非常に困難である。本研究では、部分的に観測された環境を用いて、潜在的に誤ったコードセグメントを訂正することでプログラムを合成するフレームワークを提案する。部分観測に対する注意不足の問題を解決するために、著者はまず、各プログラムトークンの影響を前提条件に基づいて暗黙に評価できる環境埋め込み空間を学習する。さらに、グラフ構造を用いることで、環境情報と文法情報の流れを統合し、スムーズなプログラム訂正ガイドを提供する。部分観測されたVizDoom領域における広範な実験評価および消去実験の結果から、この方法は多様なタスクにおいて優れた一般化能力を持ち、ノイズに遭遇した際にも高い耐性を持つことが確認された。

* [On the Effectiveness of Large Language Models in Domain-Specific Code Generation](https://dl.acm.org/doi/full/10.1145/3697012) - ***ACM Transactions on Software Engineering and Methodology***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=9022735489715766344)]. 大規模言語モデル（LLMs）のようなChatGPTは、コード生成において優れた能力を示している。しかし、その知識習得には膨大な訓練データが必要であり、開域知識の幅広い習得に依存している。また、評価はHumanEvalなどの開域ベンチマークに依存しており、これらは主にプログラミングコンテストから成り立つ。そのため、特定の分野（例：Web、ゲーム、数学）における複雑さや課題を完全に把握するのは難しい。本研究では、分野ごとのコード生成におけるLLMの詳細な調査を行った。結果から、LLMは分野固有のライブラリを適切に活用できず、分野固有コードの生成において最適な性能を発揮していないことが分かった。著者は、API知識をプロンプトに組み込むことで、LLMがより専門的なコードを生成できるようになると観察した。これらの結果に基づき、API知識をコード生成プロセスに効果的に組み込む方法を検討した。著者は、外部知識尋問、チェーンオブシンクプロミプト、チェーンオブシンクファインチューニングの3つの戦略を実験した。これらを「DomCoder」と名付け、実験結果から、DomCoderのすべての戦略が特定の設定下で分野固有コード生成の効果を向上させることを示した。

*[Back to Top](#c)

#### 認知的基盤 <a id="cognitive-foundations"></a>

* [The Child as Hacker](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(20)30174-1) - ***Trends in Cognitive Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13128656954836679743)]. 人間の学習と発達の範囲は、認知科学にとって極めて深刻な課題を投げかけている。著者は、コンピュータ科学の視点を採用することで、この課題を解決できると提案している。多くの優れたモデルでは、学習をコンピュータプログラミングに類似させているが、シンボリックプログラムが複雑な精神的表現を最も説明できるためである。著者は特に、子どもたちの学習が「ハッキング」と呼ばれる特定のプログラミングスタイルに類似していると提唱し、開かれた目標と活動を通じてコードを多面的に改善すると述べている。既存の理論が主に局所探索と単純な評価基準に依存するのに対し、この視点は、優れた精神的表現の特徴や、子どもがそれらを構築するために用いる複数の補完的プロセスを強調している。

* [How laypeople evaluate scientific explanations containing jargon](https://www.nature.com/articles/s41562-025-02227-0) - ***Nature Human Behavior***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=6467855047925175367)]. 個体は他者の専門性をもとに、世界の基本的な理解を得ている。しかし、定義上評価できない説明から、非専門家が理解を得る方法は何か？9回の実験（合計6,698人：Study 1A=737；1B=734；1C=733；2A=1,014；2B=509；2C=1,012；3A=1,026；3B=512；4=421）において、本研究は専門用語を含む科学的説明に焦点を当て、このパズルを解決した。著者は、専門用語の導入が説明の満足度を高める「いつ」および「なぜ」を特定した。専門用語が説明の満足度を高めるのは、一般の人々が専門用語が説明の欠落部分を埋めていると仮定しているためである。また、これらの判断をバイアスから脱却するための戦略を明らかにした。人々が自ら説明を生成する際、専門用語を含む劣った説明に対する過大評価が減少し、自らの説明能力の評価がより正確になることが分かった。

* [Communicating Natural Programs to Humans and Machines](https://proceedings.neurips.cc/paper_files/paper/2022/hash/182aed0379591ebd1d655b2bdc152075-Abstract-Datasets_and_Benchmarks.html) - ***NeurIPS'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=13381039702346039142)]. 人間は一般言語で指示を容易に生成・解釈できるが、コンピュータシステムは、正確に実行できる限定された分野専用言語に縛られている。これにより、新しい状況（例：ARC）に一般化できる知能システムの構築が困難である。人間が生成する指示を「自然プログラム」と呼ぶ。これらはコンピュータプログラムに似ているが、2つの点で異なる：第一に、それらには広範なプリミティブが含まれる；第二に、それらは直接実行可能なコードを超えて、コミュニケーション戦略を頻繁に活用する。

* [Symbolic metaprogram search improves learning efficiency and explains rule learning in humans](https://www.nature.com/articles/s41467-024-50966-x) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=7670274141609367282)]. プログラム学習に基づくシンボリックモデルは、多くの分野におけるルール学習を成功裏に説明しているが、プログラムの複雑性が増すにつれて性能が急激に低下する。人間の行動をモデル化するためのシンボリックルール学習手法をスケーリングする方法はまだ不明である。本研究では、メタプログラム空間（プログラムを修正するプログラム）におけるシンボリック探索が、学習効率を劇的に向上させることを示した。100のアルゴリズム的に複雑なルールを対象とした行動ベンチマークにおいて、このアプローチは代替モデルよりも人間の学習をより正確に再現し、かつ探索量が数桁少ない。人間の平均的なパフォーマンスに一致する計算量は、人間の思考時間の保守的な見積もりと一致している。この結果から、メタプログラムのような表現が、人間の学習者がルールを効率的に習得するのを支援している可能性がある。

*[Back to Top](#c)


### 問題解決 <a id="problem-solving"></a>

#### 人間水準の問題解決 <a id="human-level-problem-solving"></a>

* [Elements of a theory of human problem solving](https://psycnet.apa.org/record/1959-07883-001) - ***Psychological Review***, 1958. [[All Versions](https://scholar.google.com/scholar?cluster=6226995019045187501)]. ヒルベルト・シモンの人的問題解決に関する元のアイデア。

* [Human Problem Solving](https://psycnet.apa.org/record/1973-10478-000) - ***Englewood Cliffs, NJ: Prentice-hall***, 1972. [[All Versions](https://scholar.google.com/scholar?cluster=3996229083126262536&hl=en&as_sdt=0,5)]. ヒルベルト・シモンの人的問題解決を検索として捉えるクラシックなアイデア。

* [Learning to Solve Problems: A Handbook for Designing Problem-Solving Learning Environments](http://196.223.158.148/bitstream/handle/123456789/2978/596.pdf?sequence=1&isAllowed=y) - 2010年、***Taylorfrancis***。 [[All Versions](https://scholar.google.com/scholar?cluster=13262690779319271809&hl=en&as_sdt=2005&sciodt=0,5)]

* [Judgment under Uncertainty: Heuristics and Biases: Biases in judgments reveal some heuristics of thinking under uncertainty](https://www.science.org/doi/abs/10.1126/science.185.4157.1124) - ***Science***, 1974. [[All Versions](https://scholar.google.com/scholar?cluster=17040257859216791312&hl=en&as_sdt=0,5)]. ダニエル・カーネマンの予見理論に関するクラシックなアイデア。

* [Computational evidence for hierarchically structured reinforcement learning in humans](https://www.pnas.org/content/117/47/29381.short) - ***Proceedings of the National Academy of Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=5731363475904675608&hl=en&as_sdt=0,5)]. 人的計画における階層構造に関する証拠の一つ。

* [Hierarchical reasoning by neural circuits in the frontal cortex](https://www.cnbc.cmu.edu/braingroup/papers/sarafyazd_jazayeri_2019.pdf) - ***Science***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=9875733886908769773&hl=en&as_sdt=0,5)]. ルールスイッチのための神経科学的証拠.

* [The importance of mixed selectivity in complex cognitive tasks](https://oar.princeton.edu/rt4ds/file/11875/2161) - ***Nature***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=2707751672275136220&hl=en&as_sdt=0,5)]. 高次元神経表現を用いた混合選択性の導入に関する元論文.

* [People construct simplified mental representations to plan](https://www.nature.com/articles/s41586-022-04743-9) - ***Nature***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=12068944400080889789&hl=en&as_sdt=0,5)]. 人間の計画における合理的問題表現に関する計算モデル.

* [Goals, usefulness and abstraction in value-based choice](https://www.sciencedirect.com/science/article/pii/S1364661322002819) - ***Trends in Cognitive Sciences***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=6256990098976657651&hl=en&as_sdt=2005&sciodt=0,5)]. 大脳が目標の変化に応じて柔軟に適応する抽象化を用いて、選択肢や行動の有用性を計算するための計算的および生物学的原理を概説するレビュー.

* [Value signals guide abstraction during learning](https://elifesciences.org/articles/68943) - eLife、2022年。[[All Versions](https://scholar.google.com/scholar?cluster=10324834842795908439&hl=en&as_sdt=0,5)]。

* [Learning to perceive and act by trial and error](https://link.springer.com/article/10.1007/BF00058926) - ***機械学習***、1991年。[[All Versions](https://scholar.google.com/scholar?cluster=1987606770603964473&hl=en&as_sdt=0,5)]。

* [Representations in distributed cognitive tasks](https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1801_3) - ***認知科学***、1994年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=14781266698447195483)]。

* [The nature of external representations in problem solving](https://www.sciencedirect.com/science/article/abs/pii/S0364021399800226) - ***認知科学***、1997年。[[All Versions](https://scholar.google.com/scholar?cluster=10698887231200401430&hl=en&as_sdt=0,5)]。

* [Rapid trail-and-error learning with simulation supports flexible tool use and physical reasoning.](https://www.pnas.org/content/pnas/117/47/29302.full.pdf) - ***米国国家科学院論文集***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=14400178089019636923)]。[[Project](https://sites.google.com/view/virtualtoolsgame/home)]。[[Appendix](https://www.pnas.org/content/pnas/suppl/2020/11/20/1912341117.DCSupplemental/pnas.1912341117.sapp.pdf)]。多くの動物および人工アゲンツは、物体を認識・操作する高度な能力を示しているが、人間は柔軟かつ創造的な道具の使用において依然として特異である。人間が世界に作用し、目的を達成、あるいは問題を解決するために、既存の道具を新たな方法で使用する能力は、他の生物や人工アゲンツとは異なり、その柔軟性と効率性が、仮定された行動の影響をイメージする能力と、世界の観察を通じて更新される豊かな行動事前知識に依存している。本研究では、この2つの要素を「サンプル、シミュレーション、更新」（SSUP）モデルに実装し、Virtual Toolsゲームの30レベルにおける人間のパフォーマンスを正確に捉えていることを示している。さらに、このモデルは、人間が一般の物理的知識を行動可能かつタスクに特化した計画に圧縮するメカニズムを説明するための枠組みを提供している。

* [Abstract strategy learning underlies flexible transfer in physical problem solving](https://cognitivesciencesociety.org/cogsci20/papers/0765/0765.pdf) - ***CogSci'20***、2020年。[[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Abstract+strategy+learning+underlies+flexible+transfer+in+physical+problem+solving.&btnG=)]。

* [Physion: Evaluating Physical Prediction from Vision in Humans and Machines](https://openreview.net/forum?id=CXyZrKPz4CU) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=8733318111076645893&hl=en&as_sdt=0,5)].

* [Exploration: from machines to humans](https://www.sciencedirect.com/science/article/pii/S2352154620301236) - 『Current Opinion in Behavioral Sciences』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=8015078432419172621&hl=en&as_sdt=0,5)]。

* [Balancing exploration and exploitation with information and randomization](https://www.sciencedirect.com/science/article/pii/S2352154620301467) - 『Current Opinion in Behavioral Sciences』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=8164388137243077863&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Hippocampal neurons construct a map of an abstract value space](https://www.sciencedirect.com/science/article/pii/S0092867421008369) - セル、2021。[[All Versions](https://scholar.google.com/scholar?cluster=12658820581876003172&hl=en&as_sdt=0,5)]。

* [Insightful problem solving and creative tool modification by captive nontool-using rooks](https://www.pnas.org/content/106/25/10370.short) - ***Proceedings of the National Academy of Sciences***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=6776471679661065229&hl=en&as_sdt=0,5)]. [[Supplementary Material](https://www.pnas.org/content/suppl/2009/05/28/0901008106.DCSupplemental)]. 意識のある動物における創造的な道具使用に関する証拠の一つ。

* [Learning to act by integrating mental simulations and physical experiments](https://cpilab.org/pubs/Dasgupta2018Learning.pdf) - ***CogSci'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=7342920174595829739&hl=en&as_sdt=0,5)]. [[Code](https://github.com/ishita-dg/SimulationVSAction)].

* [The successor representation in human reinforcement learning](https://gershmanlab.com/pubs/Momennejad17.pdf) - 2017年『Nature Human Behavior』。[[All Versions](https://scholar.google.com/scholar?cluster=7317529612823134939&hl=en&as_sdt=0,5)]。

* [Beyond imitation: Zero-shot task transfer on robots by learning concepts as cognitive programs](https://www.science.org/doi/abs/10.1126/scirobotics.aav3150) - ***Science Robotics***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7451223471302689228)]. 人間は画像ペアから概念を推論し、物理世界で全く異なる状況に適用できるため、たとえばアイカの組み立て図から実際の組み立てを行うことができる。ロボットが高レベルの概念を表現し、推論できるようなら、その意図の理解や異なる環境間でのタスクの移行能力が著しく向上する。このため、著者は人間の概念学習の要素を再現する計算フレームワークを提案する。概念は、視覚認識システム、作業記憶、行動制御器から構成されたコンピュータアーキテクチャ上のプログラムとして表現される。この認知コンピュータの命令セットには、視覚シーンの解析、視線と注意の制御、新たな物体の想像、視覚作業記憶内の内容の操作、そして腕の動きの制御といった命令が含まれる。概念の推論は、入力から出力へ変換するプログラムの誘導に相当する。一部の概念には想像力や再帰の使用が必要である。以前学習した概念は、その後のより複雑な概念の学習を簡略化し、抽象の階層を形成する。著者は、ロボットが新たなスケッチ画像で提示された概念を解釈し、それらをまったく異なる状況で適用できるようにする抽象の利用方法を示している。認知科学におけるイメージ形成、感覚記号、体験認知、指標メカニズムの考えを機械学習に導入することで、ロボットが解釈可能な表現と常識を持つものを作成する目標に近づくことが可能になる。

*[Back to Top](#c)

#### 計画 <a id="planning"></a>

* [From Skills to Symbols: Learning Symbolic Representations for Abstract High-Level Planning](https://jair.org/index.php/jair/article/view/11175) - ***Journal of Artificial Intelligence Research***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=17962480659445514879)]. 本研究では、高次元連続環境における計画に必要な抽象表現の構築問題を検討する。著者は、高レベル行動を備えたエージェントを仮定し、その行動のシーケンスを構成する計画を確実に評価できる表現を構築する。まず、決定論的計画のケースを検討し、状態集合間の集合演算が関連する計算を示す。次に、確率的計画について検討し、状態集合から状態分布への一般化が必要であることを示す。最後に、これらの技術を用いて、センサーモータデータ（点群、マップ位置、関節角）から自らの符号表現を学習し、それを使って計画を行う物理ロボットシステムを構築する。

* [Integrated Task and Motion Planning](https://www.annualreviews.org/doi/abs/10.1146/annurev-control-091420-084139) - ***Annual Review of Control, Robotics, and Autonomous Systems***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=478421650694199529)]. ロボットが多数の物体を含む環境で動作し、自らの位置を移動させ、物体の状態を変化させる行動を行う際の計画問題は、タスクと運動計画（TAMP）と呼ばれる。TAMP問題は離散タスク計画、離散-連続数学計画、連続運動計画の要素を含み、これら各分野が直接的に効果的に解決できない。本稿では、TAMP問題のクラスを定義し、その解決アルゴリズムを調査し、連続空間のサブ問題の解決戦略と、離散・連続成分の統合手法によって解法方法を特徴づける。

* [Differentiable Physics and Stable Modes for Tool-Use and Manipulation Planning](https://dspace.mit.edu/handle/1721.1/126626) - ロボティクス：科学とシステム、2018。[[All Versions](https://scholar.google.com/scholar?cluster=10342169019935480143&hl=en&as_sdt=0,5)]。

* [Learning to act by integrating mental simulations and physical experiments](https://gershmanlab.com/pubs/Dasgupta18_simulation.pdf) - コグニティブサイエンス'21、2018。[[All Versions](https://scholar.google.com/scholar?cluster=7342920174595829739&hl=en&as_sdt=0,5)]。

* [What Is the Model in Model-Based Planning?](https://onlinelibrary.wiley.com/doi/ftr/10.1111/cogs.12928) - 認知科学、2021。[[All Versions](https://scholar.google.com/scholar?cluster=10598397017491369972&hl=en&scisbd=1&as_sdt=2005&sciodt=0,5)]。

* [Discovering State and Action Abstractions for Generalized Task and Motion Planning](https://arxiv.org/pdf/2109.11082.pdf) - ***AAAI'22***, 2022. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=1054368060554971920)].

*[Back to Top](#c)

#### 内発的動機づけ <a id="intrinsic-motivation"></a>

* [Intrinsically Motivated Reinforcement Learning](https://proceedings.neurips.cc/paper/2004/hash/4be5a36cbaca8ab9d2066debfe4e65c1-Abstract.html) - ニューラル情報処理システム'04、2004。[[All Versions](https://scholar.google.com/scholar?cluster=9736217847061704054&hl=en&as_sdt=0,5)]。古典的強化学習における内在的報酬関数に関する包括的なレビュー。

* [What is intrinsic motivation? A typology of computational approaches](https://www.frontiersin.org/articles/10.3389/neuro.12.006.2007/full) - 『Neuroroboticsのフロントイアーズ』2009年。[[All Versions](https://scholar.google.com/scholar?cluster=11901343819872275353&hl=en&as_sdt=0,5)]。

* [Adapting Behavior via Intrinsic Reward: A Survey and Empirical Study](https://www.jair.org/index.php/jair/article/view/12087) - 『人工知能研究ジャーナル』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=5309595875334344707&hl=en&as_sdt=0,5)]。

* [Curiosity-driven Exploration by Self-supervised Prediction](https://proceedings.mlr.press/v70/pathak17a.html) - ICML'17、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=9379743003299559904&hl=en&as_sdt=0,5)]。好奇心を内在的動機としての元論文。

* [UCB Exploration via Q-Ensembles](https://arxiv.org/abs/1706.01502) - 2017年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=13260404166621290240)]。

* [Causal Curiosity: RL Agents Discovering Self-supervised Experiments for Causal Representation Learning](https://arxiv.org/abs/2010.03110) - ICML'21、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=4880520597219138666&hl=en&as_sdt=0,5)]。

* [Variational Information Maximisation for Intrinsically Motivated Reinforcement Learning](https://proceedings.neurips.cc/paper/2015/hash/e00406144c1e7e35240afed70f34166a-Abstract.html) - ***NeurIPS'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=9262504233068870193&hl=en&as_sdt=0,5)]. エンパワーメントが内在動機として機能するに関する元論文。

* [Intrinsic Exploration as Empowerment in a Richly Structured Online Game](https://psyarxiv.com/ybs7g/) - 2022. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=12321757821600526668)].

* [Multi-task reinforcement learning in humans](https://gershmanlab.com/pubs/Tomov21.pdf) - 2021年『Nature Human Behavior』。[[All Versions](https://scholar.google.com/scholar?cluster=14589018692074515644&hl=en&as_sdt=0,5)]。

* [JARVIS-1: Open-World Multi-Task Agents With Memory-Augmented Multimodal Language Models](https://ieeexplore.ieee.org/abstract/document/10778628) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***. [[All Versions](https://scholar.google.com/scholar?cluster=12845806504666245406)]. 開放環境における多モーダル観測に基づく人間のような計画と制御を達成することは、より機能的な一般目的エージェントにとって重要な達成点である。既存のアプローチは、開放環境における特定の長時間スケールタスクを処理できるが、開放環境におけるタスクの数が理論的に無限にあり得る場合や、ゲーム進行に伴ってタスク完了能力が徐々に向上しないという点で、依然として課題がある。本研究では、視覚観測と人間の指示を多モーダル入力として受け取り、高度な計画を生成し、体験に基づく実装制御を実行するJARVIS-1という開放環境エージェントを提案する。JARVIS-1は、事前訓練された多モーダル言語モデルに基づいて構築され、視覚観測とテキスト指令を計画に変換する。その計画は最終的に目標条件付き制御器に送られる。JARVIS-1は、事前訓練された知識と実際のゲーム生存経験を両方活用する多モーダル記憶を備えている。JARVIS-1は、人間と同様の制御および観測空間で200以上の異なるタスクを完了できる現時点で最も一般的なMinecraftエージェントである。

*[Back to Top](#c)

#### 強化学習 <a id="reinforcement-learning"></a>

* [Reinforcement learning: An introduction](https://www.andrew.cmu.edu/user/rmorina/papers/SuttonBook.pdf) - ***MIT Press***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=8821915215029978039&hl=en&as_sdt=0,5)]. リチャード・サルトンによる強化学習に関する総合的な書籍。

* [Reinforcement learning: A survey](https://www.jair.org/index.php/jair/article/view/10166) - ***人工知能研究誌***、1996年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=4983604491168613713)]。レジ・ケルビングによる強化学習に関するレビュー。

* [An overview of multi-agent reinforcement learning from game theoretical perspective](https://arxiv.org/pdf/2011.00583.pdf) - 2020年。[[All Versions](https://scholar.google.com/scholar?cluster=16197919002723407603&hl=en&as_sdt=0,5)]。ヤオドン・ヤンによる、ゲーム理論の視点から見た多-agent強化学習に関するレビュー。

* [Human-level control through deep reinforcement learning](https://klab.tch.harvard.edu/academia/classes/Neuro230/ReadingAssignments/MnihEtAlHassibis15NatureControlDeepRL.pdf) - ***ナチュラル***、2015年。[[All Versions](https://scholar.google.com/scholar?cluster=12439121588427761338&hl=en&as_sdt=0,5)]。Deep Q-Networkを用いたAtariゲームの解決に関する元論文。

* [Between MDPs and semi-MDPs: A framework for temporal abstraction in reinforcement learning](https://www.sciencedirect.com/science/article/pii/S0004370299000521) - ***人工知能***、1999年。[[All Versions](https://scholar.google.com/scholar?cluster=1471968208408231068&hl=en&as_sdt=0,5)]。操作強化学習に関する元論文。

* [On Monte Carlo Tree Search and Reinforcement Learning](http://oucsace.cs.ohio.edu/~chelberg/classes/680/paperPresentations/NathanPaperToPresent.pdf) - ***人工知能研究誌***、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=5805718077259491860&hl=en&as_sdt=0,5)]。

* [Reinforcement Learning and Control as Probabilistic Inference: Tutorial and Review](https://arxiv.org/abs/1805.00909) - 2018. [[All Versions](https://scholar.google.com/scholar?cluster=16437288987337534404&hl=en&as_sdt=0,5)]. [[Slides](http://rail.eecs.berkeley.edu/deeprlcourse-fa18/static/slides/lec-15.pdf)]. サレジ・レヴィンによる強化学習の確率的アプローチに関するチュートリアル.

* [A Generalized Algorithm for Multi-Objective Reinforcement Learning and Policy Adaptation](https://proceedings.neurips.cc/paper/2019/hash/4a46fbfca3f1465a27b210f4bdfe6ab3-Abstract.html) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7721047641895252765&hl=en&as_sdt=0,5)].

* [Solving Compositional Reinforcement Learning Problems via Task Reduction](https://openreview.net/forum?id=9SS69KwomAM) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=15628616147808752058&hl=en&as_sdt=0,5)]。

* [Neural Task Programming: Learning to Generalize Across Hierarchical Tasks](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8460689) - ***ICRA'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=7155333517647976638&hl=en&as_sdt=0,5)].

* [Learning to act: qualitative learning of deterministic action models](https://academic.oup.com/logcom/article-abstract/28/2/337/4695480) - 論理と計算のジャーナル、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=14570482854600886953&hl=en&as_sdt=0,5)]。

* [Learning to Act and Observe in Partially Observable Domains](https://arxiv.org/abs/2109.06076) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=2258600434630687063&hl=en&as_sdt=0,5)].

* [Why Generalization in RL is Difficult: Epistemic POMDPs and Implicit Partial Observability](https://arxiv.org/abs/2107.06277) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9640851185758072663&hl=en&as_sdt=0,5)]. 強化学習における一般化問題に関する形式的な取り扱い.

* [Learning to Perform Physics Experiments via Deep Reinforcement Learning](https://openreview.net/forum?id=r1nTpv9eg) - ***ICLR'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=13142558595749186250&hl=en&as_sdt=0,5)].

* [Data-Efficient Learning for Complex and Real-Time Physical Problem Solving Using Augmented Simulation](https://ieeexplore.ieee.org/abstract/document/9387127) - 2021年『ロボティクス・アンド・オートメーション・レターズ』。[[All Versions](https://scholar.google.com/scholar?cluster=3140653562829320759&hl=en&as_sdt=0,5)]。

* [A Survey of Preference-Based Reinforcement Learning Methods](https://www.jmlr.org/papers/volume18/16-634/16-634.pdf) - 機械学習研究ジャーナル、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=13278778479251450967&hl=en&as_sdt=0,5)]。

* [On the Expressivity of Markov Reward](https://papers.NeurIPS.cc/paper/2021/file/4079016d940210b4ae9ae7d41c4a2065-Paper.pdf) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=4524686816939437211&hl=en&as_sdt=0,5)]. 削減学習モデルにおけるタスクと報酬の形式的な扱いについて.

* [Trust Region Policy Optimization](https://proceedings.mlr.press/v37/schulman15.html) - ***ICML'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=4215501129336400677&hl=en&as_sdt=0,5)]. コントロールポリシー最適化手法TRPOの原始論文。改善の保証付きで、単調に改善が保証される方法を提示.

* [Constrained Policy Optimization](http://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf) - ***ICML'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=6114366704163518185&hl=en&as_sdt=0,5)]. 制約付き強化学習（安全な強化学習）に関する原始論文.

* [When to Trust Your Model: Model-Based Policy Optimization](https://proceedings.neurips.cc/paper_files/paper/2019/hash/5faf461eff3099671ad63c6f3f094f7f-Abstract.html) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=4248859125840907707&hl=en&as_sdt=0,5)]. [[Post](https://bair.berkeley.edu/blog/2019/12/12/mbpo/)].

* [SUNRISE: A Simple Unified Framework for Ensemble Learning in Deep Reinforcement Learning](http://proceedings.mlr.press/v139/lee21g.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=8840831494454574191&hl=en&as_sdt=0,5)]. [[Code](https://github.com/pokaxpoka/sunrise)].

* [The Quest for a Common Model of the Intelligent Decision Maker](https://arxiv.org/abs/2202.13252) - ***多学科的な強化学習と意思決定に関する会議'22***、2022年。[[All Versions](https://scholar.google.com/scholar?cluster=7652784232757502910&hl=en&as_sdt=0,5)]。リチャード・サートンが強化学習研究の今後の方向性について述べた意見。

* [Automatic curriculum learning for deep RL: a short survey](https://dl.acm.org/doi/abs/10.5555/3491440.3492111) - ***IJCAI'20***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=10660055557098312214&hl=en&as_sdt=0,5)]。

* [TeachMyAgent: a Benchmark for Automatic Curriculum Learning in Deep RL](http://proceedings.mlr.press/v139/romac21a.html) - ***ICML'21***、2021年。。 [[All Versions](https://scholar.google.com/scholar?cluster=11016662361926634008&hl=en&as_sdt=0,5)] [[Project](https://github.com/flowersteam/TeachMyAgent)]

*[Back to Top](#c)

#### 逆強化学習 <a id="inverse-reinforcement-learning"></a>

* [Apprenticeship Learning via Inverse Reinforcement Learning](https://dl.acm.org/doi/pdf/10.1145/1015330.1015430) - ***ICML'04***、2004年。[[All Versions](https://scholar.google.com/scholar?cluster=10260011060619377707&hl=en&as_sdt=0,5)]。ピエール・アーベルとアンデュー・ングが逆強化学習（IRL）について行った元論文。

* [Bayesian Inverse Reinforcement Learning](https://www.ijcai.org/Proceedings/07/Papers/416.pdf) - ***IJCAI'07***、2007年。[[All Versions](https://scholar.google.com/scholar?cluster=4154724070362583557&hl=en&as_sdt=0,5)]。古典的な逆強化学習に関するベイズ的アプローチ。

* [From Language to Goals: Inverse Reinforcement Learning for Vision-Based Instruction Following](https://arxiv.org/abs/1902.07742) - ***ICLR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=9128320307925997063&hl=en&as_sdt=0,5)].

* [Few-shot Bayesian imitation learning with logical program policies.](https://arxiv.org/pdf/1904.06317.pdf) - ***AAAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=5103854692762145813&hl=en&as_sdt=0,5)].

* [Generalized Inverse Planning: Learning Lifted non-Markovian Utility for Generalizable Task Representation](http://export.arxiv.org/pdf/2011.09854) - 2020. [[All Versions](https://scholar.google.com/scholar?cluster=18369106870663956780&hl=en&as_sdt=0,5)].

* [Inverse Constrained Reinforcement Learning](https://proceedings.mlr.press/v139/malik21a.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Inverse+Constrained+Reinforcement+Learning+S+Malik&btnG=)].

*[Back to Top](#c)


### システム1とシステム2 <a id="system-1--system-2"></a>

#### 二重符号化理論 <a id="dual-coding-theory"></a>

* [Mental Representations: A Dual Coding Approach](https://zh.pb1lib.org/book/1004349/825277) - ***Oxford University Press***, 1990. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0,5&q=mental+representations:+a+dual+coding+approach)]. ダイアルコーディング理論の元となる書籍。神経科学的視点から精神的表現を説明したもの。

* [Dual coding of knowledge in the human brain](https://www.sciencedirect.com/science/article/pii/S1364661321001765) - ***Trends in Cognitive Sciences***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=11751507203561842501&hl=en&as_sdt=0,5)]. ダブルコーディング理論に関する神経科学実験についてのYanchao Biによるレビュー

* [Two Forms of Knowledge Representations in the Human Brain](https://www.sciencedirect.com/science/article/pii/S0896627320302798) - ***Neuron***, 2020. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=16941965185680116049)]. 言語由来と感覚由来の知識を示す研究

* [Organizational Principles of Abstract Words in the Human Brain](http://bilab.bnu.edu.cn/paper/2018/Wang_2018_Cerebral_Cortex.pdf) - 脳皮質、2018年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=15272192531353715481)]。

* [Different computational relations in language are captured by distinct brain systems](http://bilab.bnu.edu.cn/paper/2022/Fu_2022_CC.pdf) - 脳皮質、2022年。[[All Versions](https://scholar.google.com/scholar?cluster=720215181903530260&hl=en&as_sdt=0,5)]。

* [The Deese-Roediger-McDermott (DRM) task: A simple cognitive paradigm to investigate false memories in the laboratory](https://europepmc.org/article/med/28190038) - 視覚化実験ジャーナル、2017年。 [[All Versions](https://scholar.google.com/scholar?cluster=10880194606861797581&hl=en&as_sdt=0,5)]。

* [A continuous semantic space describes the representation of thousands of object and action categories across the human brain](https://mri-q.com/uploads/3/4/5/7/34572113/gallant_piis0896627312009348.pdf) - ***Neuron***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=10348115268396987731&hl=en&as_sdt=0,5)].

* [Rational arbitration between statistics and rules in human sequence processing](https://www.nature.com/articles/s41562-021-01259-6) - 2022年『Nature Human Behavior』。[[All Versions](https://scholar.google.com/scholar?cluster=9856085207409198966&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### ニューラル記号AI <a id="neural-symbolic-ai"></a>

* [How large language models need symbolism](https://academic.oup.com/nsr/article/12/10/nwaf339/8237444) - ***National Science Review***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=9866048591424428891)]. 人工知能（AI）の進展、特に大規模言語モデル（LLM）において、顕著な成果が得られている。この進展は「スケーリング則」という原理から生じており、計算量、データ量、モデルサイズが大きくなるほど性能が向上する。しかし、このアプローチには重要な脆弱性がある：スケーリング則はデータが豊富な場合にのみ有効である。その基礎となるプロセスは、人間の「商空間形成能力」である。これは、広大な問題空間からコンパクトな記号空間を構築する能力であり、数学における同値類を用いた商空間の形成に類似している。新しい戦略では、記号を圧縮された人間の知恵の容器として用い、LLMが持つ強力な統計的直観を導くマップを作成する。これは、実用的なデータが自然に稀である複雑な問題を解決する際に特に重要である。AIの次のフェーズは、単にスケーリングだけでは征服できない。したがって、記号化そのもの——強力な抽象の構築——が、今後の中心的な課題となる。スケーリング則がモデルに強力な直観を与えたならば、それは記号の芸術が、本物の発見を導くコンパスとなるのである。

* [Regression Analysis for Interval-Valued Data](https://link.springer.com/chapter/10.1007/978-3-642-59789-3_58) - ***Data Analysis, Classification, and Related Methods***, 2000. [[All Versions](https://scholar.google.com/scholar?cluster=9407097855380377791&hl=en&as_sdt=0,5)]. 記号回帰の元論文。

* [Symbolic data analysis: what is it?](https://link.springer.com/chapter/10.1007/978-3-7908-1709-6_20) - コンピュータ統計学プロシーディングス、2006年。[[All Versions](https://scholar.google.com/scholar?cluster=3730437602749399283&hl=en&as_sdt=0,5)]。

* [DeepProbLog: Neural Probabilistic Logic Programming](https://arxiv.org/abs/1805.10872) - ***NeurIPS'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=6079567413300944995&hl=en&as_sdt=0,5)]. 神経符号確率プログラミングに関する元論文。

* [Learning Explanatory Rules from Noisy Data](https://www.jair.org/index.php/jair/article/view/11172) - ***Journal of Artificial Intelligence Research***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=2553893814364678772&hl=en&as_sdt=0,5)]. 差分誘導論理プログラミングに関する元論文。

* [Combining Logical Abduction and Statistical Induction: Discovering Written Primitives with Human Knowledge](https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/aaai17lasin.pdf) - ***AAAI'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=14477085725208589393&hl=en&as_sdt=0,5)].

* [Neural Logic Reinforcement Learning](https://arxiv.org/pdf/1904.10729.pdf) - ***ICML'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=18074632043038701502&hl=en&as_sdt=0,5)].

* [Bridging Machine Learning and Logical Reasoning by Abductive Learning.](http://papers.NeurIPS.cc/paper/8548-bridging-machine-learning-and-logical-reasoning-by-abductive-learning) - ***NeurIPS'19***, 2019. . . 神経符号学習における導出フリー手法であるアブダクティブ学習に関する元論文。 [[All Versions](https://scholar.google.com/scholar?cluster=1518342375288126288&hl=en&as_sdt=0,5)] [[Slides](https://daiwz.net/org/slides/ABL-meetup.html#/slide-title)] [[Code](https://github.com/AbductiveLearning/ABL-HED)]

* [Abductive learning: towards bridging machine learning and logical reasoning](https://link.springer.com/article/10.1007/s11432-018-9801-4) - 『科学中国情報科学』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=8541635351775190855&hl=en&as_sdt=0,5)]。

* [Abductive Knowledge Induction From Raw Data](https://arxiv.org/pdf/2010.03514.pdf) - ***IJCAI'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=7027142960863064076&hl=en&as_sdt=0,5)].

* [Fast Abductive Learning by Similarity-based Consistency Optimization](https://proceedings.neurips.cc/paper/2021/hash/df7e148cabfd9b608090fa5ee3348bfe-Abstract.html) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=8539963460239876225&hl=en&as_sdt=0,5)]. 類推学習の収束を加速するための手法の提案.

* [Learning by Abstraction: The Neural State Machine](https://proceedings.neurips.cc/paper/2019/file/c20a7ce2a627ba838cfbff082db35197-Paper.pdf) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7361406080192630148&hl=en&as_sdt=0,5)].

* [Making sense of sensory input](https://www.sciencedirect.com/science/article/pii/S0004370220301855) - 人工知能、2021年。 [[All Versions](https://scholar.google.com/scholar?cluster=11875529139573472578&hl=en&as_sdt=0,5)]。

* [Abstract Spatial-Temporal Reasoning via Probabilistic Abduction and Execution](https://arxiv.org/pdf/2103.14230v1.pdf) - ***CVPR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=4172146500538799638&hl=en&as_sdt=0,5)]。

* [Learn to explain efﬁciently via neural logic inductive learning](https://openreview.net/pdf?id=SJlh8CEYDB) - ***ICLR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=4550874980727321525&hl=en&as_sdt=0,5)]. [[Project](https://github.com/gblackout/NLIL)].

* [Closed Loop Neural-Symbolic Learning via Integrating Neural Perception, Grammar Parsing, and Symbolic Reasoning](https://arxiv.org/abs/2006.06649) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=9257372000778020812&hl=en&as_sdt=0,5)].

* [Generating new concepts with hybrid neuro-symbolic models.](https://arxiv.org/abs/2003.08978) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=1912020791698331044)].

* [Learning Task-General Representations with Generative Neuro-Symbolic Modeling](https://arxiv.org/abs/2006.14448) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=1335404082385789329)]。

* [Hybrid computing using a neural network with dynamic external memory](http://clgiles.ist.psu.edu/IST597/materials/slides/papers-memory/2016-graves.pdf) - ***Nature***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=8100274942961380405&hl=en&as_sdt=0,5)].

* [AI Feynman: A physics-inspired method for symbolic regression](https://www.science.org/doi/full/10.1126/sciadv.aay2631) - ***Science Advances***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=3655502646441210453)]. 物理学と人工知能（AI）の共通課題である記号回帰問題は、未知関数からのデータに一致する記号表現を発見することである。この問題は理論的にはNP困難である可能性があるが、実用的な関数は対称性、分離性、合成性などの簡略化特性を示すことが多い。この考えに基づき、著者は再帰的多次元記号回帰アルゴリズムを開発し、ニューラルネットワークの適合と物理学に着想を得た技術を組み合わせた。このアルゴリズムをフェイナーの物理学講義の100式に適用した結果、すべての式を発見でき、かつ以前の公開ソフトウェアは71式しか解けなかった。さらに、難度の高い物理学ベースのテストセットにおいて、この研究は現状の成功率を15%から90%に向上させた。

* [Classification-by-Components: Probabilistic Modeling of Reasoning over a Set of Components](http://papers.NeurIPS.cc/paper/8546-classification-by-components-probabilistic-modeling-of-reasoning-over-a-set-of-components.pdf) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=12691103404451941071&hl=en&as_sdt=0,5)].

* [Neuro-Symbolic Visual Reasoning: Disentangling “Visual” from “Reasoning”](https://arxiv.org/pdf/2006.11524.pdf) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13160160974887139307&hl=en&as_sdt=0,5)].

* [Understanding Deep Architectures with Reasoning Layer](https://proceedings.neurips.cc/paper/2020/file/0d82627e10660af39ea7eb69c3568955-Paper.pdf) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=937882599430270789&hl=en&as_sdt=0,5)].

* [An Explicitly Relational Neural Network Architecture](https://arxiv.org/pdf/1905.10307.pdf) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=37732747764322837&hl=en&as_sdt=0,5)].

* [Neural Production Systems](https://arxiv.org/pdf/2103.01937.pdf) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=15299280949648915581&hl=en&as_sdt=0,5)]. ヨシュア・ベンジオがスロット注意モデルを一般産業システムとして捉えた視点.

* [Compositional Generalization via Neural-Symbolic Stack Machines](https://arxiv.org/pdf/2008.06662.pdf) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15612498612943317331&hl=en&as_sdt=0,5)].

* [Stochastic Optimization of Sorting Networks via Continuous Relaxations](https://openreview.net/pdf?id=H1eSS3CcKX) - ***ICLR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=10619362619006891050&hl=en&as_sdt=0,5)].

* [Program Guided Agent](https://openreview.net/pdf?id=BkxUvnEYDH) - ***ICLR'20***, 2020. [[All Versions](https://openreview.net/forum?id=BkxUvnEYDH)].

* [Learning Compositional Rules via Neural Program Synthesis](https://proceedings.neurips.cc/paper/2020/hash/7a685d9edd95508471a9d3d6fcace432-Abstract.html) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=3160670555314650508&hl=en&as_sdt=0,5)].

* [Discovering Symbolic Models from Deep Learning with Inductive Biases](https://arxiv.org/abs/2006.11287) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=9452091824686227240&hl=en&as_sdt=0,5)].

* [Neural Logic Machines](https://arxiv.org/pdf/1904.11694.pdf) - ***ICLR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=4525183211642569463&hl=en&as_sdt=0,5)].

* [The Neuro-Symbolic Concept Learner: Interpreting Scenes, Words, and Sentences From Natural Supervision](https://arxiv.org/pdf/1904.12584.pdf) - ***ICLR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=8837128214653317831&hl=en&as_sdt=0,5)].

* [Visual Concept-Metaconcept Learning](https://papers.NeurIPS.cc/paper/2019/file/98d8a23fd60826a2a474c5b4f5811707-Paper.pdf) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=1888051343232298875&hl=en&as_sdt=0,5)].

* [Grounding Physical Concepts of Objects and Events Through Dynamic Visual Reasoning](https://arxiv.org/abs/2103.16564) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=16735976343684307244&hl=en&as_sdt=0,5)]。

* [Temporal and Object Quantification Networks](https://jiajunwu.com/papers/toqnet_ijcai.pdf) - ***IJCAI'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=17251222943638414124&hl=en&as_sdt=0,5)].

* [Grounded Language Learning Fast and Slow](https://arxiv.org/pdf/2009.01719.pdf) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=17735027444431750346&hl=en&as_sdt=0,5)]。[[Project](https://github.com/deepmind/dm_fast_mapping?s=05)]。

* [Detect, Understand, Act: A Neuro-symbolic Hierarchical Reinforcement Learning Framework](https://link.springer.com/article/10.1007/s10994-022-06142-7) - ***Machine Learning***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=10321228117236432485&hl=en&as_sdt=0,5)]. メタポリシー学習をインダクティブ・論理プログラミングに統合したニューロ・シンボリックフレームワーク.

* [Visual Programming: Compositional Visual Reasoning Without Training](https://openaccess.thecvf.com/content/CVPR2023/html/Gupta_Visual_Programming_Compositional_Visual_Reasoning_Without_Training_CVPR_2023_paper.html) - ***CVPR'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=16156060658942400125&hl=en&as_sdt=0,5)]. 自然言語指示に基づいて複雑かつ構成的な視覚タスクを解決するニューロ・シンボリックアプローチVISPROG。大規模言語モデルのコンテキスト学習能力を活用して、Python風のモジュラープログラムを生成し、そのプログラムを実行することで、解と包括的かつ解釈可能な理由を同時に得る。

* [Semi-Supervised Abductive Learning and Its Application to Theft Judicial Sentencing](https://ieeexplore.ieee.org/abstract/document/9338352) - ***ICDM'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=16646246740380524224)]. [[Preprint](https://www.lamda.nju.edu.cn/huangyx/src/ICDM20-SSABL.pdf)]. 実用的なタスクでは、通常、二種類の情報が存在する：コストの低い未ラベルデータと、記号形式のドメイン知識。これまで、半教師付き学習や帰納学習といった単一情報源の利用が試行されてきたが、これらの二種類の情報源を同時に活用する研究はほとんどない。これは、論理的記号表現と数値モデル最適化を効果的に統合するための難しさがあるためである。ドメイン知識が不足する場合、学習はさらに困難になる。本論文では、半教師付き帰納学習（SS-ABL）フレームワークを提案する。このフレームワークでは、未ラベルデータから帰納学習によって生成された偽ラベルを用いて半教師付き学習を学習し、半教師付き学習によって予測されたラベル分布を用いて背景知識を精緻化する。このフレームワークは反復的に最適化可能であり、自然に解釈可能である。本フレームワークの有効性は、実際の法的文書の裁判所の量刑決定において完全に検証された。量刑要素の欠如や複数の法規則の混在状況において、本フレームワークは多くの既存の基準手法に優れており、裁判所の量刑決定に説明的支援を提供する。

*[Back to Top](#c)


### 説明可能性 <a id="explainability"></a>

#### 信頼できるAI <a id="trustworthy-ai"></a>

* [Bayesian modeling of human–AI complementarity](https://www.pnas.org/doi/full/10.1073/pnas.2111547119) - ***Proceedings of the National Academy of Sciences***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=15735143859968841009&hl=en&as_sdt=0,5)]. 人間と機械の予測および信頼度スコアを組み合わせるベイズフレームワーク。

* [A tale of two explanations: Enhancing human trust by explaining robot behavior](https://www.science.org/doi/10.1126/scirobotics.aay4663) - ***Science Robotics***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=3985046411399524590)]. [[Preprint](https://yzhu.io/publication/openbottle2019scirob/paper.pdf)]. 選択された行動について包括的な説明を行う能力は、知能の特徴である。この能力の欠如は、AIおよびロボットシステムが重要なタスクにおいて一般に受け入れられにくい原因となる。本論文は、人間が機械に信頼をもつために最も効果的な説明の形を検討し、機能的および機械的視点から説明を生成するフレームワークを提案する。ロボットシステムは、人間のデモンストレーションから医薬品の蓋を開ける行動を学習し、(i) 身体的感覚フィードバックから知識を抽出する体験的予測モデル、(ii) 多段階タスクの構成構造を捉える確率的文法モデル、(iii) 身体的フィードバックと文法モデルを同時に活用する改善されたエアリー解析アルゴリズムを用いる。ロボットシステムは、人間のデモンストレーションから学習する能力を示し、新しい未見の蓋を開けることに成功する。ロボットが生成するさまざまな形の説明を用いて、人間の信頼を促進する最も効果的な説明の形を心理実験で検証した結果、ロボットの内部決定を包括的かつリアルタイムで可視化した説明が、要約的なテキスト説明に基づく説明よりも人間の信頼を促進するという結果を得た。さらに、信頼を高めるため最も効果的な説明の形は、タスクパフォーマンスに貢献するモデル成分とは必ずしも一致しないことが示され、これはロボット分野においてモデル成分を統合して、タスク実行と人間の信頼を両立させる必要性を示している。

* [X-ToM: Explaining with Theory-of-Mind for Gaining Justified Human Trust](https://arxiv.org/abs/1909.06907) - ***CVPR XAI Workshop'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7751326666821697923)]. 本研究では、AI機械における人間の正当な信頼と依存を高めるための新たな説明可能なAI（XAI）フレームワークを提示する。著者は、説明を機械と人間ユーザー間の反復的コミュニケーション（つまり対話）として捉える。より具体的には、機械が対話の各段階で、(a) 人間の意図（または好奇心）、(b) 人間が機械についての理解、(c) 機械が人間ユーザーについての理解を考慮した説明のシーケンスを生成する。これには、Theory of Mind（ToM）を用いる。ToMは、人間の意図、人間が機械として推測する機械の心、および機械が人間として推測する人間の心を明示的にモデル化するのに役立つ。つまり、ToMの明示的な心の表現を用いて、人間の認識と信念を考慮した最適な説明ポリシーを学習する。さらに、著者はToMが機械に対する正当な人間の信頼を定量的に測定する上で、すべての三つの心の表現を比較することによって、その効果を示している。我々のフレームワークを、画像分類、行動認識、人体ポーズ推定の三つの視覚認識タスクに適用した。著者は、我々のToMに基づく説明が、専門家および非専門家ユーザーにとって複雑な機械学習モデルの内部仕組みを理解しやすいと主張している。これは、ToMを用いて説明を導出する初めての研究である。広範な人間実験により、我々の仮説が検証され、提案された説明が、人間の信頼、依存、説明満足といったすべての標準的な定量的および質的XAI評価メトリクスにおいて、最適なXAI手法を大幅に上回ることが示された。

* [CoCoX: Generating Conceptual and Counterfactual Explanations via Fault-Lines](https://ojs.aaai.org/index.php/AAAI/article/view/5643) - ***AAAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17443137068166403183&hl=en&as_sdt=0,5)].

* [CX-ToM: Counterfactual explanations with theory-of-mind for enhancing human trust in image recognition models](https://www.sciencedirect.com/science/article/pii/S2589004221015510) - ***iScience***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=17526041764295337444)]. 本研究では、深層コネクショナルニューラルネットワーク（CNN）の決定を説明するための新しい可解AI（XAI）フレームワーク「CX-ToM」（理論の理解をもとにした反事実説明）を提案する。従来のXAI手法が説明を一括で生成するのに対し、本研究では説明を機械と人間ユーザーとの対話プロセス（ディアログ）として捉え、機械と人間の「心の差異」を中間的に調整することで、一連の説明を生成する。このプロセスには「理論の理解（ToM）」を用い、人間の意図や機械が人間がどのように見ているか、人間が機械がどのように見ているかを明示的にモデル化する。さらに、最先端のXAIフレームワークは通常、注意（またはヒートマップ）に基づく説明を提供するが、本研究ではそのような説明が、人間の信頼を高めるには不十分であることを示す。CX-ToMでは、反事実説明として「fault-lines」を用いる。これは、CNN分類モデルMが入力画像Iに対してクラスcpredを予測する場合、Iに追加または削除すべき最小の意味レベルの特徴（例：ゾウの縁の模様）を「説明可能な概念」と呼ぶ。この概念を変更することで、Mがクラスcaltに分類するようになる。実験結果は、CX-ToMが最先端のXAIモデルに比べて著しく優れていることを示している。

* [Explaining machine learning models with interactive natural language conversations using TalkToModel](https://www.nature.com/articles/s42256-023-00692-8) - ***Nature Machine Intelligence***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=7044008493489695982)]. マシンラーニング（ML）モデルの利用が広がっているが、モデルの複雑さが増し、理解が難しくなっている。複雑なモデルを理解するため、研究者がモデル予測の説明手法を提案しているが、実務家はどの説明を選ぶべきか、どのように解釈すべきかを理解できていない。本研究では、説明手法の利用を困難とする課題に対し、「TalkToModel」というインタラクティブディアログシステムを提案する。TalkToModelは、自然言語による会話でMLモデルを説明する。このシステムは、自然言語を解釈し、意味のある応答を生成する適応型ディアログエンジン、会話に使用される説明を構築する実行コンポーネント、および会話インターフェースの3つの要素から構成される。実世界の評価では、医療従事者は73％が、病気予測モデルの理解にTalkToModelを採用すると言った。また、ML専門家は85％がTalkToModelの使いやすさに同意しており、これはTalkToModelがモデル説明において非常に効果的であることを示している。

*[Back to Top](#c)

#### 強い機械学習 <a id="strong-machine-learning"></a>

* [Ultra-Strong Machine Learning: comprehensibility of programs learned with ILP](https://link.springer.com/article/10.1007/s10994-018-5707-3) - ***Machine Learning***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=17551060457946144913)]. 1980年代、Michieは機械学習を「予測精度」と「生成仮説の理解可能性」の2つの直交軸で定義した。予測精度は測定しやすく、理解可能性はそれほどでなかったため、1990年代の定義（例：Mitchellの定義）は、予測精度のみに基づく1次元的なアプローチを採用し、統計的機械学習を符号的機械学習に優先した。本論文では、人間参加試験によって評価可能な仮説の理解可能性の定義を提供する。著者は、論理プログラムの理解可能性を検証する2つの実験を実施した。第1の実験では、述語の発明ありなしで人間の理解可能性を検証し、結果から、プログラムの複雑さだけでなく、匿名述語の存在が理解可能性に影響を与ることを示した。第2の実験では、最先端のILPシステムがMichieの意味での「超強力機械学習（USML）」であるかを直接検証し、Metagolシステムを人間試験に選出した。結果は、参加者は例から関係概念を自ら学習できなかったが、ILPシステムが提供した関係定義を正しく適用できた。これは、人間が学習しにくい関係概念のクラスが存在するが、抽象的な説明があれば理解しやすいことを示しており、このクラスの理解を深めることが、人間の学習や指導、言語的相互作用の文脈に潜在的な関連性を持つ可能性があると著者は考える。

* [Beneficial and harmful explanatory machine learning](https://link.springer.com/article/10.1007%2Fs10994-020-05941-0) - ***Machine Learning***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=16983722694047294963)]. 深層学習のAIにおける最近の成功により、機械学習理論における説明の役割と必要性が注目されている。この文脈における特異な概念として、Michieが定義した「超強力機械学習（USML）」がある。USMLとは、人間に符号的機械学習理論を提供することで、タスクの実行能力が測定可能な程度で向上することを示す。最近の論文は、分類タスクにおける機械学習論理理論の有益な効果を示しているが、機械の介入が人間の理解に悪影響を及ぼす可能性については、これまでの研究が検討されていない。本論文は、シンプルな2人対戦ゲームにおける機械学習理論の説明効果を検討し、認知科学の文献に基づき、機械説明の有害性を特定するためのフレームワークを提案する。このアプローチは、2つの定量的境界を含む「認知窓」と呼ばれ、人間試験から収集された実証データで支持されている。定量的および質的結果は、認知窓を満たす符号的機械学習理論を用いた人間学習が、自ら学習した人間の学習よりも著しく高い性能を達成していることを示している。また、認知窓を満たさない符号的機械学習理論を用いた人間学習は、未支援の人間学習よりも著しく劣る結果を示している。

* [Deep Forest: Towards An Alternative to Deep Neural Networks](https://www.ijcai.org/Proceedings/2017/497) - ***IJCAI'17***, 2017. . 本論文では、gcForestと呼ばれる決定木のアンサンブル手法を提案する。この手法は、幅広いタスクにおいて、深層ニューラルネットワークと同等の性能を発揮する。深層ニューラルネットワークはハイパーパラメータチューニングに多くの努力を要するのに対し、gcForestは訓練が非常に容易で、実験において異なるドメインの異なるデータに適用しても、ほぼ同じハイパーパラメータ設定で優れた性能を達成できる。gcForestの訓練プロセスは効率的であり、ユーザーは利用可能な計算リソースに応じて訓練コストを調整できる。gcForestは自然に並列実装に適しており、効率がさらに向上する可能性がある。さらに、深層ニューラルネットワークは大量の訓練データを必要とするのに対し、gcForestは小さな訓練データでも良好な性能を発揮できる。 [[All Versions](https://scholar.google.com/scholar?cluster=7391596872731517007)] [[Project](https://github.com/LAMDA-NJU/Deep-Forest)]

* [NBDT: Neural-Backed Decision Trees](https://openreview.net/forum?id=mCLVeEpplNE) - ***ICLR'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1902399007162005819)]. [[Code](https://github.com/alvinwan/neural-backed-decision-trees)]. ファイナンスや医療といった機械学習アプリケーションでは、正確かつ正当な予測が求められるため、多くの深層学習手法は実用化されない。その対応として、これまでの研究では決定木と深層学習を組み合わせ、得られたモデルは（1）正確性を犠牲にした解釈性の向上または（2）解釈性を犠牲にした正確性の向上となっている。本研究は、Neural-Backed Decision Trees（NBDTs）を用いて、正確性と解釈性の両方を同時に向上させることで、このジレンマを回避する。NBDTsは、ニューラルネットワークの最終線形層を、微分可能な決定のシーケンスと代替損失に置き換えることで、モデルが高レベルの概念を学習し、確信の低い決定に依存するのを減らす。これにより、（1）正確性において、NBDTsはCIFAR、ImageNetにおいて現代のニューラルネットワークと同等または優れており、未見クラスへの一般化性能は最大16％向上する。さらに、代替損失により元のモデルの正確性は最大2％向上する。また、（2）解釈性においても、モデルの誤りを明確に特定し、データセットのバグ診断を支援することで、人間の信頼を高める。

*[Back to Top](#c)

#### 説明可能な深層学習 <a id="explainable-deep-learning"></a>

* [pytorch-grad-cam](https://github.com/jacobgil/pytorch-grad-cam) - 2021. PyTorchに実装されたクラス活性マップ手法で、多くの洗練された機能を備えている。

* [Network dissection: Quantifying interpretability of deep visual representations](https://ieeexplore.ieee.org/document/8099837) - ***CVPR'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=18069685615852396783&hl=en&as_sdt=0,5)]. [[Project](http://netdissect.csail.mit.edu/)]. [[Dataset: Places365](http://places2.csail.mit.edu/index.html)]. コンボリューションニューラルネットワークの説明を目的とした、クラス活性マップを可視化する元論文。

* [Understanding the role of Individual Units in a Deep Neural Network](https://www.pnas.org/content/pnas/early/2020/08/31/1907375117.full.pdf) - ***Proceedings of the National Academy of Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=11996680970579301810&hl=en&as_sdt=0,5)]. David Bauによる、判別的および生成的モデルにおけるネットワークディスセクションのレビュー。

* [Zoom In: An Introduction to Circuits](https://distill.pub/2020/circuits/zoom-in/) - ***Distill***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=9053581372570691569&hl=en&as_sdt=0,5)]. ニューラルネットワークを回路として扱う視点についての解説。

* [Compositional Explanations of Neurons](https://proceedings.neurips.cc/paper/2020/hash/c74956ffb38ba48ed6ce977af6727275-Abstract.html) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15725346730266402738&hl=en&as_sdt=0,5)]. [[Project](https://github.com/jayelm/compexp)]. ネットワークディスセクションの概念構成版。

* [This Looks Like That: Deep Learning for Interpretable Image Recognition](http://papers.NeurIPS.cc/paper/9095-this-looks-like-that-deep-learning-for-interpretable-image-recognition.pdf) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=9461838581952136719&hl=en&as_sdt=0,5)].

* [Unsupervised learning by competing hidden units](https://www.pnas.org/content/pnas/116/16/7723.full.pdf) - 『アメリカ国家科学院会議録』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=1228003598355915526&hl=en&as_sdt=0,5)]。

* [Noise or Signal: The Role of Backgrounds in Image Classification](https://arxiv.org/pdf/2006.09994.pdf) - ***ICLR'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=14729938011425134088&hl=en&as_sdt=0,5)]. [[Code & Data](https://github.com/MadryLab/backgrounds_challenge)]. [[Project](https://gradientscience.org/background/)]. 画像の背景に関する視点が前景分類に強いヒントを提供する。

* [Towards Understanding Learning Representations: To What Extent Do Different Neural Networks Learn the Same Representation](https://proceedings.neurips.cc/paper/2018/hash/5fc34ed307aac159a30d81181c99847e-Abstract.html) - ***NeurIPS'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=401428033641216502&hl=en&as_sdt=0,5)]. 不同のニューラルネットワークにおけるニューロンの学習パターンを一致させる。

* [Individual differences among deep neural network models](https://kriegeskortelab.zuckermaninstitute.columbia.edu/sites/default/files/content/MehrerKietzmann_2020_NatureComms.pdf) - 『Nature Communications』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=8259893575188417318&hl=en&as_sdt=2005&sciodt=0,5)]。

*[Back to Top](#c)


### 身体性知能 <a id="embodied-intelligence"></a>

* [Embodied Cognition](https://plato.stanford.edu/entries/embodied-cognition/) - ***プラトン・スタンフォード***. 「体験的認知」に関する形式的哲学的アプローチ。これは、主体の物理的な体が認知能力において重要な役割を果たすことを強調している。

* [Externalism About the Mind](https://plato.stanford.edu/entries/content-externalism/) - ***プラトン・スタンフォード***. 「心の外部主義」に関する形式的哲学的アプローチ。これは、体験的知能の境界に関する長期的な議論である。

* [Cognitive engineering: Human problem solving with tools](https://www.researchgate.net/profile/David-Woods-19/publication/242545872_Cognitive_Engineering_Human_Problem_Solving_with_Tools/links/542becf70cf29bbc126ac097/Cognitive-Engineering-Human-Problem-Solving-with-Tools.pdf) - ***Human Factors***, 1988. [[All Versions](https://scholar.google.com/scholar?cluster=14194840995416222723&hl=en&as_sdt=0,5)]. 人間の道具使用が問題解決にどのように関与するかを調査する元となったアイデア.

* [Tools, language and cognition in human evolution](https://psycnet.apa.org/record/1993-97340-000) - ***Cambridge University Press***, 1993. [[All Versions](https://scholar.google.com/scholar?cluster=6046350461147957220&hl=en&as_sdt=0,5)]. 人間の道具使用が文明の進化とどのように関連しているかを示す古典的な視点.

* [The Extended Mind](https://icds.uoregon.edu/wp-content/uploads/2014/06/Clark-and-Chalmers-The-Extended-Mind.pdf) - ***Analysis***, 1998. [[All Versions](https://scholar.google.com/scholar?cluster=9546561188261943866&hl=en&as_sdt=0,5)]. マインドの外部主義に関する議論の元となった論文.

* [The neural bases of complex tool use in humans](https://www.sciencedirect.com/science/article/pii/S1364661303003231) - ***Trends in Cognitive Sciences***, 2004. [[All Versions](https://scholar.google.com/scholar?cluster=3612212926196611828&hl=en&as_sdt=0,5)]. 人間の道具使用に関する神経科学的アプローチ。

* [Spontaneous Metatool Use by New Caledonian Crows](https://www.sciencedirect.com/science/article/pii/S0960982207017708) - ***Current Biology***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=9263531730425342443&hl=en&as_sdt=0,5)]. 意識のある動物が道具を活用して問題解決のための道具を作り出すことの証拠を示す研究.

* [Rapid Assimilation of External Objects Into the Body Schema](https://journals.sagepub.com/doi/abs/10.1177/0956797610371962) - 『心理科学』2010年。[[All Versions](https://scholar.google.com/scholar?cluster=854636910326733489&hl=en&as_sdt=0,5)]。

* [The cognitive bases of human tool use](https://www.eva.mpg.de/documents/Cambridge/Tennie_Cultural_BehBrainSci_2012_1566208.pdf) - 『行動と脳科学』2012年。[[All Versions](https://scholar.google.com/scholar?cluster=4648150119820414671&hl=en&as_sdt=0,5)]。

* [The embodied mind extended: using words as social tools](https://www.frontiersin.org/articles/10.3389/fpsyg.2013.00214/full) - 『心理学のフロントイアーズ』2013年。[[All Versions](https://scholar.google.com/scholar?cluster=14719988081062606352&hl=en&as_sdt=0,5)]。

* [Tool use as adaptation](https://royalsocietypublishing.org/doi/10.1098/rstb.2012.0408) - 『royal society b: biological sciences』2013年。[[All Versions](https://scholar.google.com/scholar?cluster=8060841461200774807&hl=en&as_sdt=0,5)]。

* [Intensive tool-practice and skillfulness facilitate the extension of body representations in humans](https://www.sciencedirect.com/science/article/pii/S0028393214000232) - ***ニューロサイエンス***、2014。[[All Versions](https://scholar.google.com/scholar?cluster=10578024091098127929&hl=en&as_sdt=0,5)]。

* [Tool use and affordance: Manipulation-based versus reasoning-based approaches](https://psycnet.apa.org/doiLanding?doi=10.1037%2Frev0000027) - ***Psychological Review***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=3284942486402374505&hl=en&as_sdt=0,5)]. 人間の道具使用と意味の理解に関する古典的なレビュー記事.

* [Meta-strategy learning in physical problem-solving: the effect of embodied experience](https://escholarship.org/uc/item/5gf0m7x3) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=9713842177532954702)].

* [Understanding Tools: Task-Oriented Object Modeling, Learning and Recognition](https://yzhu.io/publication/tool2015cvpr/paper.pdf) - ***CVPR'15***, 2015. . コンピュータビジョン分野で意味と物理的根拠に基づく道具使用を導入した元論文. [[All Versions](https://scholar.google.com/scholar?cluster=4609926671953500969&hl=en&as_sdt=0,5)] [[Project](https://yzhu.io/publication/tool2015cvpr/)]

* [Robotic hand augmentation drives changes in neural body representation](https://robotics.sciencemag.org/content/6/54/eabd7935.abstract) - ***科学ロボティクス***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=1622125726197763917&hl=en&as_sdt=0,5)]。

* [Expert Tool Users Show Increased Differentiation between Visual Representations of Hands and Tools](https://www.jneurosci.org/content/jneuro/41/13/2980.full.pdf) - 『ネuroサイエンス』誌、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=13454164767827515188&hl=en&as_sdt=0,5)]。

* [Visual scoping operations for physical assembly](https://arxiv.org/pdf/2106.05654.pdf) - CogSci'21、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=7238090583833839&hl=en&as_sdt=0,5)]。

* [Behavior-grounded representation of tool affordances](https://www.cc.gatech.edu/ai/robot-lab/online-publications/StoytchevICRA2005.pdf) - ICRA'05、2005年。[[All Versions](https://scholar.google.com/scholar?cluster=6115815663915603675&hl=en&as_sdt=0,5)]。

* [A Relational Approach to Tool-Use Learning in Robots](https://link.springer.com/chapter/10.1007/978-3-642-38812-5_1) - ILP'12、2012年。[[All Versions](https://scholar.google.com/scholar?cluster=18374178227592386332&hl=en&as_sdt=0,5)]。

* [Relational affordances for multiple-object manipulation](https://link.springer.com/article/10.1007/s10514-017-9637-x) - 自律ロボット、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=6357646940615855682&hl=en&as_sdt=0,5)]。

* [Improvisation through Physical Understanding: Using Novel Objects as Tools with Visual Foresight](http://m.roboticsproceedings.org/rss15/p01.pdf) - ***RSS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=4316276917607326251&hl=en&as_sdt=0,5)].

* [Meta-strategy learning in physical problem-solving: the effect of embodied experience](https://escholarship.org/uc/item/5gf0m7x3) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9713842177532954702)]. 本論文は、自然な体験が、仮想タスクにおける抽象的な物理問題解決戦略の選択にどのように影響するかを検討している。結果から、体験の違いが、行動と思考のバランスを取るためのメタ戦略、試行すべき行動の種類、および現在の行動計画への堅持度の決定に、異なる戦略を獲得させることが示された。

* [Humanoid robotics—History, current state of the art, and challenges](https://www.science.org/doi/full/10.1126/scirobotics.aar4043) - ***Science Robotics***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=10429657872677563981)]. 人間oidsは、ロボティクスの最終目標の一つとして、多くの分野の進展を統合するものである。

* [3D dynamic scene graphs: Actionable spatial perception with places, objects, and humans](https://arxiv.org/abs/2002.06289) - ***RSS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=4428742298455436054)]. 本論文は、行動可能な空間認識を統一的に表現する「3D動的シーングラフ（DSG）」を提示している。シーングラフは、ノードがシーン内のエンティティ（例：物体、壁、部屋）を、エッジがノード間の関係（例：包含、隣接）を表す有向グラフである。動的シーングラフ（DSG）は、移動するエージェント（例：人間、ロボット）を含む動的シーンを表現し、計画や意思決定を支援する行動可能な情報（例：時空関係、抽象レベルごとのトポロジー）を含む。第二の貢献は、視覚・慣性データからDSGを自動生成する世界初の空間認識エンジン（SPIN）の提供である。著者は、物体および人間の検出や姿勢推定の最先端技術を統合し、混雑したシーンにおける物体、ロボット、人間ノードを確実に推論する方法を示している。これは、視覚・慣性SLAMと密集人間メッシュトラッキングを初めて統合した論文である。さらに、著者は、室内環境（例：場所、構造、部屋）およびそれらの関係を階層的に表現するアルゴリズムを提供している。第三の貢献は、写実的なUnityベースのシミュレーターで提案された空間認識エンジンの実証であり、その耐性と表現力について評価している。最後に、著者は、その提案が現代ロボティクス応用に与える影響について述べている。3D動的シーングラフは、計画および意思決定、人間とロボットの相互作用、長期的な自律性、シーン予測に深遠な影響を与える可能性がある。

* [Embodied large language models enable robots to complete complex tasks in unpredictable environments](https://www.nature.com/articles/s42256-025-01005-x) - ***Nature Machine Intelligence***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=4507358987058849097)]. 不確実な環境における複雑なタスクの完了は、ロボットシステムに大きな挑戦をもたらし、機械知能の飛躍的な進展を必要とする。感覚運動能力は、人間知能の重要な要素であるとされる。したがって、生物学的インスピレーションに基づいた機械知能は、人工知能とロボットの感覚運動能力を組み合わせることで、有用である可能性がある。本研究は、GPT-4および検索強化生成インフラを用いた「体験型大規模言語モデルロボット（ELLMER）」フレームワークを報告しており、ロボットが不確実な環境における長期タスクを完了できるようにしている。この手法は、知識ベースから文脈に適した例を抽出し、力および視覚フィードバックを含む行動計画を生成し、変化する状況への適応を可能にする。著者は、コーヒーマシンの作成およびプレートの装飾というタスクにELLMERをテストした。これらのタスクは、ドレッサー開閉から注ぎまでの一連のサブタスクを含み、それぞれが異なるフィードバックタイプと方法を必要とする。著者は、ELLMERフレームワークがロボットがこれらのタスクを完了できることを示している。この実証は、スケーラブルで効率的かつ「知能あるロボット」が、不確実な環境における複雑なタスクを完了できるようになる進展を示している。

* [The Design, Education and Evolution of a Robotic Baby](https://ieeexplore.ieee.org/abstract/document/10056320) - ***IEEE Transactions on Robotics***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=16298301812039402477)]. アラン・チューリングが提唱した「子機械」の思想を受けて、本論文は「ロボット・ベビー」という概念を形式的に定義し、出生時に世界に関する知識が極めて少なく、徐々にかつインタラクティブに学習し、世界に適応できる統合システムを提示する。この定義に基づき、ロボット・ベビーの基本的な能力とシステム特性がシステムレベルの要件として特定・提示される。最小限の実現可能なプロトタイプとして、システム工学的設計アプローチを用いて「ベビー」アーキテクチャが提案され、その要件がロボットシステムにおけるシミュレーションおよび実験によって検証・検証された。著者らは、英語および中国語における自然言語習得や意味解析、自然言語接地、自然言語強化学習、自然言語プログラミング、および説明可能性を目的としたシステムの自己認識能力について、ロボット・ベビーの能力を示している。また、現実のロボット実験を用いて、ロボット・ベビーの教育および進化プロセスを示している。人間の遺伝的継承を参考に、ロボット・ベビーにおける知識継承とその進化への利点について検討している。

*[Back to Top](#c)


### 進化的知能 <a id="evolutionary-intelligence"></a>

* [Evolutionary trade-offs, Pareto optimality, and the geometry of phenotype space](http://websites.umich.edu/~zhanglab/clubPaper/06_08_2012.pdf) - ***Science***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=16162252507845975080&hl=en&as_sdt=0,5)]. 生物学的トレードオフとパレート最適性の進化との関連を示す古典的な論文。

* [Pareto optimality in multiobjective problems](https://link.springer.com/article/10.1007/BF01442131) - ***Applied Mathematics and Optimization***, 1977. [[All Versions](https://scholar.google.com/scholar?cluster=11305142600366783354&hl=en&as_sdt=0,5)]. マルチオブジェクト問題におけるパレート最適性に関する元論文。

* [Pareto-Based Multiobjective Machine Learning: An Overview and Case Studies](http://www.soft-computing.de/SMC0805.pdf) - ***IEEE Transactions on Systems, Man, and Cybernetics***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=11308312498510305429&hl=en&as_sdt=0,5)]. パレート最適性がマルチオブジェクト機械学習にどのように応用されるかに関する包括的なレビュー。

* [Phylogenetic evidence for Sino-Tibetan origin in northern China in the Late Neolithic](https://www.nature.com/articles/s41586-019-1153-z) - ***Nature***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=13913123623752818925&hl=en&as_sdt=0,5)]. サイン・チベット語族の起源に関する二つの対立する仮説についてのベイズ的系統解析が、約4,000～6,000年前（現在から算定）に中国北部の黄河流域でサイン・チベット語族の初期拡張が起こったことを示し、その拡張は陽邵および/または馬家窑新石器時代文化の発展と関連していると結論している。

* [Triangulation supports agricultural spread of the Transeurasian languages](https://www.nature.com/articles/s41586-021-04108-8) - ***Nature***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1183005894965630508&hl=en&as_sdt=0,5)]. [[Nature News](https://www.nature.com/articles/d41586-021-03037-w)]. 言語、考古学、遺伝学のデータを三角的に分析した結果、トランセウラシアン語系は約9,000年前に中国の穀物農耕集団から起源し、農業がその拡散を支えたと示された.

* [From language development to language evolution: A unified view of human lexical creativity](https://www.science.org/doi/abs/10.1126/science.ade7981) - ***Science***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=15871163761816546924&hl=en&as_sdt=0,5)]. [[Preprint](https://brochhagen.github.io/content/ms/accepted-lexical-creativity.pdf)]. 本研究は、個体の発達過程における一時的な言語表現と、言語の進化過程における遺伝的産物を統一的に説明する人間の言語創造の基礎を示している.

*[Back to Top](#c)


### 実験方法論 <a id="methodologies-for-experiments"></a>

#### 定量分析 <a id="quantitative-analysis"></a>

* [Identification of Causal Effects Using Instrumental Variables](http://www.jakebowers.org/ITVExperiments/angristimbensrubin96.pdf) - ***Journal of the American Statistical Association***, 1996. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=17166265099721941605)]. 自然社会学研究における工具変数の元となる論文.

* [Experiments with More Than One Random Factor: Designs, Analytic Models, and Statistical Power](https://www.annualreviews.org/doi/abs/10.1146/annurev-psych-122414-033702) - ***Annual Review of Psychology***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=6652444619934494760&hl=en&as_sdt=0,5)]. 行動研究における定量分析手法に関する包括的なレビュー.

* [With or Without U? The Appropriate Test for a U-Shaped Relationship](https://mpra.ub.uni-muenchen.de/4823/1/MPRA_paper_4823.pdf) - ***Oxford Bulletin of Economics and Statistics***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=1574723532506536904&hl=en&as_sdt=0,5)]. データからU字関係を検証する元となる手法で、二次関数回帰検証とは異なり、特徴的なものである。

* [Two lines: A valid alternative to the invalid testing of U-shaped relationships with quadratic regressions](https://journals.sagepub.com/doi/pdf/10.1177/2515245918805755) - 『心理科学の手法と実践における進展』2018年。[[All Versions](https://scholar.google.com/scholar?cluster=12010185803500406162&hl=en&as_sdt=0,5)]。U字型関係の統計的有意性を検証する代替手法。

*[Back to Top](#c)

#### 行動研究の大規模化 <a id="scaling-up-behavioral-studies"></a>

* [Scaling up experimental social, behavioral, and economic science](https://osf.io/wksv8) - 『オープンサイエンスフォウンデーションプレプリント』。[[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Scaling+up+experimental+social%2C+behavioral%2C+and+economic+science&btnG=)]。社会的、行動的および経済的実験の規模拡大に関する白書。

* [The weirdest people in the world?](https://scholar.harvard.edu/files/henrich/files/henrich_heine_norenzayan_2010-2.pdf) - 『脳と行動科学』2010年。[[All Versions](https://scholar.google.com/scholar?cluster=3129419557801277936&hl=en&as_sdt=0,5)]。行動研究におけるサンプルバイアスを再考し、克服するための元論文。その対象は主に西欧、教育を受けた、工業化された、豊かで民主主義的な（WEIRD）社会から選ばれている。

* [Scaling up psychology via Scientific Regret Minimization](https://www.pnas.org/doi/10.1073/pnas.1915841117) - 『米国国家科学院会議記録』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=8011895688226766944&hl=en&as_sdt=0,5)]。行動研究の規模拡大における統計的および生態学的根拠。

* [Machine-generated theories of human decision-making](https://cpb-us-w2.wpmucdn.com/web.sas.upenn.edu/dist/a/511/files/2021/06/Bhatia-He-Science.pdf) - 『サイエンス』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=7065547001880027350&hl=en&as_sdt=0,5)]。

* [Using large-scale experiments and machine learning to discover theories of human decision-making](https://cocosci.princeton.edu/jpeterson/papers/peterson2021-science.pdf) - ***Science***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=7456250222852859810&hl=en&as_sdt=0,5)]. 社会科学における大規模行動研究がもたらす利点の証拠としての事例

* [Integrating explanation and prediction in computational social science](http://jakehofman.com/pdfs/integrating-prediction-and-explanation.pdf) - ***Nature***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=288245575125750925&hl=en&as_sdt=0,5)].

* [Exploring human cognition using large image databases](https://cocosci.princeton.edu/josh/papers/griffiths-largeimagedatabases-topics2016.pdf) - 認知科学のトピック、2016。[[All Versions](https://scholar.google.com/scholar?cluster=3629906005701226294&hl=en&as_sdt=0,5)]。

* [Visual Search at Pinterest](https://web.archive.org/web/20170809024454id_/http://www.kevinjing.com/visual_search_at_pinterest.pdf) - ***KDD'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=2051024301293529405&hl=en&as_sdt=0,5)]. Pinterestが推薦システムを開発する過程における大規模ユーザー調査

*[Back to Top](#c)

#### 意思決定 <a id="decision-making"></a>

* [A computational process-tracing method for measuring people’s planning strategies and how they change over time](https://link.springer.com/article/10.3758/s13428-022-01789-5) - ***Behavior Research Methods***, 2022. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=10405935000926098041)]. モデルベースの戦略識別

*[Back to Top](#c)

#### 質問応答 <a id="question-answering"></a>

* [Searching large hypothesis spaces by asking questions](https://cogsci.mindmodeling.org/2016/papers/0122/paper0122.pdf) - ***CogSci'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=3398849603439166012&hl=en&as_sdt=0,5)]. 20問ゲームにおける行動研究.

* [Asking and evaluating natural language questions](https://gureckislab.org/papers/RotheLakeGureckis-2016cogsci.pdf) - ***CogSci'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=34641833161282231&hl=en&as_sdt=0,5)]. バトルシップゲームにおける行動研究.

* [Do People Ask Good Questions?](https://link.springer.com/article/10.1007/s42113-018-0005-5) - ***計算脳と行動***、2018。 [[All Versions](https://scholar.google.com/scholar?cluster=14595996621617337270&hl=en&as_sdt=0,5)]。

* [Asking goal-oriented questions and learning from answers](http://nyuccl.org/papers/Rothe-Lake-Gureckis-2019-Cogsci.pdf) - ***CogSci'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=14185546187726917682&hl=en&as_sdt=0,5)].

*[Back to Top](#c)

#### 人間と機械の比較 <a id="human-machine-comparison"></a>

* [Elimination by aspects: A theory of choice](https://psycnet.apa.org/record/1973-00249-001) - ***Psychological Review***, 1972. [[All Versions](https://scholar.google.com/scholar?cluster=1633792484482810297&hl=en&as_sdt=0,5)]. ヘルバート・シモンの早期のコンピュータ支援行動研究実験。

* [Problem Solving and Rule Induction: A Unified View](https://stacks.stanford.edu/file/druid:qv796fc9687/qv796fc9687.pdf) - 知識と認知 [[All Versions](https://scholar.google.com/scholar?cluster=12943734683291006234&hl=en&as_sdt=0,5)]

* [Evidence integration in model-based tree search](https://www.pnas.org/content/112/37/11708.short) - 米国国家科学院論文集 [[All Versions](https://scholar.google.com/scholar?cluster=11085043350027609187&hl=en&as_sdt=0,5)]

* [People Infer Recursive Visual Concepts from Just a Few Examples](https://link.springer.com/content/pdf/10.1007/s42113-019-00053-y.pdf) - 計算脳と行動 [[All Versions](https://scholar.google.com/scholar?cluster=3871396883970734141&hl=en&as_sdt=0,5)]

* [One-shot learning of generative speech concepts](https://escholarship.org/content/qt3xf2n3vc/qt3xf2n3vc.pdf) - ***CogSci'14***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=15482292457660075957&hl=en&as_sdt=0,5)].

* [Human few-shot learning of compositional instructions](https://arxiv.org/abs/1901.04587) - ***CogSci'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=12841163907815018136&hl=en&as_sdt=0,5)].

* [Fast and flexible: Human program induction in abstract reasoning tasks](https://arxiv.org/pdf/2103.05823.pdf) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=5294483826040237516&hl=en&as_sdt=0,5)].

* [Investigating Human Priors for Playing Video Games](http://proceedings.mlr.press/v80/dubey18a.html) - ***ICML'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=2202192690517876762&hl=en&as_sdt=0,5)].

* [Tasks for aligning human and machine planning](https://www.sciencedirect.com/science/article/pii/S2352154619300622) - 『Current Opinion in Behavioral Sciences』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=8308872468787875598&hl=en&as_sdt=0,5)]。

* [Humans can decipher adversarial images](https://perception.jhu.edu/files/PDFs/19_Adversarial_Deciphering/ZhouFirestone-AdversarialDeciphering.pdf) - ***Nature Communications***. 2019. [[All Versions](https://scholar.google.com/scholar?cluster=4423950118844131054&hl=en&as_sdt=2005&sciodt=0,5)].

* [Shared computational principles for language processing in humans and deep language models](https://www.nature.com/articles/s41593-022-01026-4.pdf) - 『Nature Neuroscience』2022年。[[All Versions](https://scholar.google.com/scholar?cluster=16078004657063602593&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 連想テスト <a id="association-test"></a>

* [Implicit Association Test](https://en.wikipedia.org/wiki/Implicit-association_test) - ***ウィキペディア***. ウィキペディアに掲載されている「無意識関連テスト（IAT）」についての説明。これは、記憶内の物体（概念）の精神的表現間の無意識的な関連を検出するための議論の多い評価手法である。

* [Measuring Individual Differences in Implicit Cognition: The Implicit Association Test](http://faculty.fortlewis.edu/burke_b/Senior/BLINK%20replication/IAT.pdf) - ***人格と社会心理学ジャーナル***、1998年。 [[All Versions](https://scholar.google.com/scholar?cluster=302378224541015580&hl=en&as_sdt=0,5)]。無意識関連テスト（IAT）が導入された元の論文。

* [Health of the Implicit Association Test at age 3](http://faculty.washington.edu/agg/pdf/Gwald_Nosek_ZEITSCHR_2001.OCR.pdf) - ***実験心理学誌（Zeitschrift für Experimentelle Psychologie）***、2001年。 [[All Versions](https://scholar.google.com/scholar?cluster=10868478693422595588&hl=en&as_sdt=0,5)]。IATに関する3年間のレビュー。

* [The Implicit Association Test at Age 7: A Methodological and Conceptual Review](https://faculty.washington.edu/agg/pdf/Nosek%20&%20al.IATatage7.2007.pdf) - ***社会心理学と無意識：高等精神プロセスの自動性（pp. 265–292）***、Psychology Press、2007年。 [[All Versions](https://scholar.google.com/scholar?cluster=16189750920013376566&hl=en&as_sdt=0,5)]。IATに関する7年間のレビュー。

* [A Meta-Analysis on the Correlation Between the Implicit Association Test and Explicit Self-Report Measures](http://faculty.washington.edu/agg/IATmaterials/PDFs/Hofmann%20&%20al%20(PSPB,2005).pdf) - ***人格と社会心理学bulletin***、2005年。 [[All Versions](https://scholar.google.com/scholar?cluster=4888328728717829047&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 仮想現実 <a id="virtual-reality"></a>

* [Virtual reality in behavioral neuroscience and beyond](https://www.nature.com/articles/nn948) - ***Nature Neuroscience***, 2002. [[All Versions](https://scholar.google.com/scholar?cluster=12168354203281280346&hl=en&as_sdt=0,5)]. 虚擬現実が行動研究に初めに応用された際の代表的なレビュー記事。

* [Virtual reality: A survival guide for the social scientist](https://stanfordvr.com/mm/2009/fox-jmp-vr-survival.pdf) - メディア心理学ジャーナル、2009年。[[All Versions](https://scholar.google.com/scholar?cluster=17318470193315023264&hl=en&as_sdt=0,5)]。

* [The psychology of virtual reality](https://psycnet.apa.org/record/2022-60836-006) - ***The psychology of technology: Social science research in the age of Big Data (pp. 155–193), American Psychological Association***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=11535480055596209683&hl=en&as_sdt=0,5&as_ylo=2021)]. ジェミー・ベイレンソンによる、虚擬現実が行動研究にどのように応用されているかに関するレビュー。

* [How Immersive Is Enough? A Meta-Analysis of the Effect of Immersive Technology on User Presence](https://stanfordvr.com/mm/2015/cummings-mp-how-immersive.pdf) - ***Media Psychology***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=9218122072360464558&hl=en&as_sdt=0,5)]. 技術が「存在感」を生み出すためにどれだけ浸透性が必要かに関するメタ分析。

* [Towards an Understanding of Distributed Asymmetric Collaborative Visualization on Problem-solving](https://ieeexplore.ieee.org/document/10108427) - ***VR'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11228377215337222005&hl=en&as_sdt=0,5)].

* [Agent: automatic generation of experimental protocol runtime](https://dl.acm.org/doi/abs/10.1145/3139131.3139152) - ***VRST'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=3511549412244980073)]. 本論文では、ドメイン特定言語（DSL）の活用により、VR実験の記述と生成を容易にし、実験設計者に設計、実施、報告といった核心業務に集中できるようにする方法を提案している。

* [What's the Game, then? Opportunities and Challenges for Runtime Behavior Generation](https://dl.acm.org/doi/abs/10.1145/3654777.3676358) - ***UIST'24***, 2024. [[All Versions]()]. プロシージャルコンテンツ生成（PCG）は、手動で作成するのではなくアルゴリズム的にゲーム要素を生成する手法であり、数十年にわたりゲーム開発において一般的なツールとして用いられてきた。近年の大規模言語モデル（LLM）の進化により、実時間にプレイヤーの入力に基づいてゲーム行動を生成できるようになった。このようなコード生成は、従来のゲーム開発フローと統合が難しい新たなプレイ体験の可能性をもたらす。本研究では、Unity向けの新たなLLMベースの実時間行動生成システムGROMITを用いて、その影響を検討している。プレイヤーの行動がトリガーされた際に、GROMITは関連する行動を生成し、開発者の介入なしにコンパイルされ、ゲームに統合される。

*[Back to Top](#c)


### メタレベルの考察 <a id="meta-level-considerations"></a>

#### メタ学習 <a id="meta-learning"></a>

* [Automated Reinforcement Learning (AutoRL): A Survey and Open Problems](https://arxiv.org/pdf/2201.03916.pdf) - 2022. [[All Versions](https://scholar.google.com/scholar?cluster=9025378857688824887&hl=en&as_sdt=0,5)]. AutoRLに関する包括的なレビュー。

* [Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks](https://proceedings.mlr.press/v70/finn17a/finn17a.pdf) - ***ICML'17***, 2017. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=17278604844873996878)]. [[Post](https://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/)]. Chelsea Finnによるモデル無関係メタ学習（MAML）の元論文。

* [Bayesian Model-Agnostic Meta-Learning](https://proceedings.neurips.cc/paper/2018/hash/e1021d43911ca2c1845910d84f40aeae-Abstract.html) - ***NeurIPS'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=7370333111335795917&hl=en&as_sdt=0,5)]. MAMLに関するベイズ的アプローチ。

* [Meta-Q-Learning](https://openreview.net/forum?id=SJeD3CEFPH) - ***ICLR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2865388954464396222&hl=en&as_sdt=0,5)]. コンテキストメタ強化学習のマイルストーン論文。

* [Efficient Off-Policy Meta-Reinforcement Learning via Probabilistic Context Variables](http://proceedings.mlr.press/v97/rakelly19a.html) - ***ICML'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=15379570585451726919&hl=en&as_sdt=0,5)].

* [Balancing Constraints and Rewards with Meta-Gradient D4PG](https://openreview.net/forum?id=TQt98Ya7UMP) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=2805226315118298313&hl=en&as_sdt=0,5)]。

* [Metacontrol for Adaptive Imagination-Based Optimization](https://openreview.net/forum?id=Bk8BvDqex) - ***ICLR'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=16728474512617398730&hl=en&as_sdt=0,5)].

* [On Effective Scheduling of Model-based Reinforcement Learning](https://proceedings.neurips.cc/paper/2021/hash/1e4d36177d71bbb3558e43af9577d70e-Abstract.html) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=11128521607771619105&hl=en&as_sdt=0,5)].

*[Back to Top](#c)

#### Marrの分析レベル <a id="marrs-levels-of-analysis"></a>

* [Vision: A Computational Investigation into the Human Representation and Processing of Visual Information](https://usa1lib.org/book/1223444/8e5ca8) - ***MIT Press***, 1982. [[All Versions](https://scholar.google.com/scholar?cluster=14386368570811483142&hl=en&as_sdt=0,44)]. デイビッド・マールの分析のレベルに関する元の書籍。

* [From understanding computation to understanding neural circuitry](https://dspace.mit.edu/bitstream/handle/1721.1/5782/AIM-357.pdf?sequence=2) - 1979年「神経科学研究プログラム要報」。[[All Versions](https://scholar.google.com/scholar?start=0&hl=en&as_sdt=0,5&cluster=11150567121969913334)]。

* [Bridging Levels of Analysis for Probabilistic Models of Cognition](https://cocosci.princeton.edu/tom/papers/LabPublications/BridgingLevelsAnalysis.pdf) - ***Current Directions in Psychological Science***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=5063382112136991296&hl=en&as_sdt=0,5)]. マールのパラダイムによる確率モデルに関する説明。

* [Levels of Analysis in Computational Social Science](https://people.csail.mit.edu/pkrafft/papers/krafft-griffiths-levels-css.pdf) - ***CogSci'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=10178929388985626844&hl=en&as_sdt=0,5)]. マールのパラダイムによる計算社会科学に関する説明。

* [Levels of Analysis for Machine Learning](https://baicsworkshop.github.io/pdf/BAICS_6.pdf) - ***ICLR'20 Bridging AI and Cognitive Science Workshop***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13819038971626384115&hl=en&as_sdt=0,5)]. マールのパラダイムによる機械学習に関する説明。

*[Back to Top](#c)

#### ゲシュタルト <a id="gestalt"></a>

* [Gestalt theory](https://psycnet.apa.org/record/2007-10344-001) - ***ゲスタルト心理学の源流書***、1938年。[[All Versions](https://scholar.google.com/scholar?cluster=18133275659218646817&hl=en&as_sdt=0,5)]。ゲスタルト心理学の元となる書籍。

* [Gestalt Psychology](https://link.springer.com/article/10.1007/BF00422382) - ***心理学的研究***、1967年。[[All Versions](https://scholar.google.com/scholar?cluster=16023098380090751616&hl=en&as_sdt=0,5)]。ウルフ・コーアーラによるゲスタルト心理学に関するレビュー。

* [Restructuring revisited I. Summary and critique of the Gestalt theory of problem solving](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9450.1984.tb01001.x) - ***スカンジナビア心理学会誌***、1984年。[[All Versions](https://scholar.google.com/scholar?cluster=1540079499182933565&hl=en&as_sdt=0,5)]。

* [Restructuring revisited II. An information processing theory of restructuring and insight](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-9450.1984.tb01005.x) - ***スカンジナビア心理学会誌***、1984年。[[All Versions](https://scholar.google.com/scholar?cluster=1821980539002417470&hl=en&as_sdt=0,5)]。

* [Thoughts beyond words: When language overshadows insight](https://psycnet.apa.org/record/1993-36184-001) - ***実験心理学誌***、1993年。[[All Versions](https://scholar.google.com/scholar?cluster=13773440938721955384&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Deep Learning: How the Mind Overrides Experience](https://hk1lib.org/book/1244721/20ddc5) - ***カミブリッジ大学プレス***、2011年。 [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=231021877034210140)]。

*[Back to Top](#c)

#### アハ体験 <a id="the-aha-moment"></a>

* [Eureka Effect](https://en.wikipedia.org/wiki/Eureka_effect) - ***ウィキペディア***. 「エウレカ効果（＝アハ！体験、洞察、閃光）」に関するウィキペディア。これは、人間が突然以前は理解できなかった問題や概念を理解するという一般的な経験である。

* [Insight](https://en.wikipedia.org/wiki/Insight) - ***ウィキペディア***. 「洞察」に関するウィキペディア。

* [Epiphany](https://en.wikipedia.org/wiki/Epiphany_(feeling)) - ***ウィキペディア***. 「閃光」に関するウィキペディア。これは「アハ！」体験が訪れるときの「感覚」である。

* [A computational model of scientific insight](https://escholarship.org/uc/item/54x8v354) - ***創造性の性質：現代心理学の視点***、1988年。 [[All Versions](https://scholar.google.com/scholar?cluster=13633357571064621019&hl=en&as_sdt=0,5)]。科学発見における洞察に関する計算モデル。

* [What Makes an Insight Problem? The Roles of Heuristics, Goal Conception, and Solution Recoding in Knowledge-Lean Problems](https://www.researchgate.net/profile/Thomas-Ormerod/publication/8909475_What_Makes_an_Insight_Problem_The_Roles_of_Heuristics_Goal_Conception_and_Solution_Recoding_in_Knowledge-Lean_Problems/links/00b7d5159f3c057eb5000000/What-Makes-an-Insight-Problem-The-Roles-of-Heuristics-Goal-Conception-and-Solution-Recoding-in-Knowledge-Lean-Problems.pdf) - ***実験心理学ジャーナル***、2004年。 。 [[All Versions](https://scholar.google.com/scholar?cluster=17529631069707671285&hl=en&as_sdt=0,5)] [[APA](https://psycnet.apa.org/record/2003-10949-002)]

* [Constraint relaxation and chunk decomposition in insight problem solving](https://www.hf.uni-koeln.de/data/fgpsych/File/Haider/Knoblich_etal_1999.pdf) - ***実験心理学ジャーナル***、1999年。 。 [[All Versions](https://scholar.google.com/scholar?cluster=8057214169831054227&hl=en&as_sdt=0,5)] [[APA](https://psycnet.apa.org/record/1999-01477-011)]

* [Dynamics and constraints in insight problem solving](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=818fec7c896ea3716eeb637da095293e9e6d1806) - ***実験心理学ジャーナル***、2002年。 。 [[All Versions](https://scholar.google.com/scholar?cluster=12067671710370549516&hl=en&as_sdt=0,5)] [[APA](https://psycnet.apa.org/record/2002-01361-014)]

* [Insight solutions are correct more often than analytic solutions](https://bpb-us-e1.wpmucdn.com/sites.northwestern.edu/dist/a/699/files/2015/11/Salvi_etal_Insight-is-right_TR2016-2n3ns9l.pdf) - 思考と論理、2016。[[All Versions](https://scholar.google.com/scholar?cluster=883561570778414219&hl=en&as_sdt=0,5)]。

* [Human Performance on Insight Problem Solving: A Review](https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1094&context=jps) - 問題解決のジャーナル、2011年。[[All Versions](https://scholar.google.com/scholar?cluster=15913242870565808883&hl=en&as_sdt=0,5)]。

* [Insight Is Not in the Problem: Investigating Insight in Problem Solving across Task Types](https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01424/full) - 『心理学のフロントイアーズ』2016年。[[All Versions](https://scholar.google.com/scholar?cluster=4564128114316001308&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Multiple Causes of Difficulty in Insight: The Case of the Nine-Dot Problem](https://www.researchgate.net/profile/Trina-Kershaw/publication/8909474_Multiple_Causes_of_Difficulty_in_Insight_The_Case_of_the_Nine-Dot_Problem/links/55dca27e08aeb38e8a8d23b6/Multiple-Causes-of-Difficulty-in-Insight-The-Case-of-the-Nine-Dot-Problem.pdf) - 『実験心理学誌』2004年。[[All Versions](https://scholar.google.com/scholar?cluster=15600199808825346018&hl=en&as_sdt=0,5)]。[[APA](https://psycnet.apa.org/record/2003-10949-001)]。

* [Investigating the effect of Mental Set on Insight Problem Solving](https://www.researchgate.net/profile/Gary-Jones-14/publication/23152585_Investigating_the_Effect_of_Mental_Set_on_Insight_Problem_Solving/links/0fcfd50abb767b1102000000/Investigating-the-Effect-of-Mental-Set-on-Insight-Problem-Solving.pdf) - 実験心理学、2008年。[[All Versions](https://scholar.google.com/scholar?cluster=11054712671934144981&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 合理性 <a id="rationality"></a>

* [Bounded Rationality](https://plato.stanford.edu/entries/bounded-rationality/) - ***プラトン・スタンフォード***. 「制限された理性」に関する形式的哲学的アプローチ。これは心理学および生態学における人間の知能の基本的な仮説である。

* [Instrumental Rationality](https://plato.stanford.edu/entries/rationality-instrumental/) - ***プラトン・スタンフォード***. 「手段的理性」に関する形式的哲学的アプローチ。これは、主体の意思決定が意図的に行われているか、あるいは合理的な整合性に基づいて行われているかという議論である。

* [A Study of Thinking](https://www.taylorfrancis.com/books/mono/10.4324/9781315083223/study-thinking-jerome-bruner-jacqueline-goodnow-george-austin) - ***Routledge***, 1956. [[All Versions](https://scholar.google.com/scholar?cluster=17466297915128086930)]. 人間が時間や無知といった制約の下で、ある程度の理性を獲得する仕組みについての先駆的な解説書。

* [The Adaptive Nature of Human Categorization Behavior](http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/89AdaptiveNature.pdf) - ***Psychological Review***, 1991. [[All Versions](https://scholar.google.com/scholar?cluster=7349048316173616836&hl=en&as_sdt=0,5)]. 分類行動における認知資源の制限とベイズ的理性分析の関係を示した元論文。

* [Task switching](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(03)00028-7?large_figure=true&mobileUi=0) - ***Trends in Cognitive Sciences***, 2003. [[All Versions](https://scholar.google.com/scholar?cluster=676255515965300942&hl=en&as_sdt=0,5)]. [[Preprint](http://psychfiles.net/experimental/Monsell_2003.pdf)]. 「スイッチコスト」に関する元論文。タスクの切り替え直後、被験者の反応が著しく遅くなり、誤りの確率も通常より高い。

* [Computational Rationality: Linking Mechanism and Behavior Through Bounded Utility Maximization](https://onlinelibrary.wiley.com/doi/full/10.1111/tops.12086) - ***Topics in Cognitive Science***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=15813211310327194798&hl=en&as_sdt=0,5)]. 情報処理の限界を理性分析に組み込むための計算的理性フレームワークを導入した。

* [Computational rationality: A converging paradigm for intelligence in brains, minds, and machines](https://gershmanlab.com/pubs/GershmanHorvitzTenenbaum15.pdf) - ***Science***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=7744057022238735461&hl=en&as_sdt=0,5)]. ベイズ的計算モデルの理性についての包括的なレビュー。

* [Resource-rational analysis: Understanding human cognition as the optimal use of limited computational resources](https://cocosci.princeton.edu/papers/lieder_resource.pdf) - ***Behavioral and Brain Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1642626865293965288&hl=en&as_sdt=0,5)]. 人間の知能を解釈するためのリソース合理的アプローチについての論文.

* [Rational Use of Cognitive Resources: Levels of Analysis Between the Computational and the Algorithmic](https://onlinelibrary.wiley.com/doi/full/10.1111/tops.12142) - ***Topics in Cognitive Science***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=16305499937147933368&hl=en&as_sdt=0,5)]. 上記論文の早期版についての記述.

* [Understanding Human Intelligence through Human Limitations](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(20)30215-1) - ***Trends in Cognitive Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=6469796133334580403)]. [[Preprint](https://cocosci.princeton.edu/papers/griffiths_understanding.pdf)]. 人工知能の最新進展により、人間の知能が人工知能とはどこが異なるかという問いが、新たな比較基準のもとで提起される。著者は、人間の脳が解決しなければならない計算問題の性質を考慮することで、人間の知能を理解し、それが人工知能とどのように異なるかを明らかにできると主張する。この問題の構造は、人間にとって適用される3つの根本的な制限——時間の制限、計算能力の制限、コミュニケーションの制限——から生じるとされ、これらから人間の知能に見られる性質（迅速な学習、問題の分解能力、累積的文化進化の能力など）が導かれる。

* [Foundations of intuitive power analyses in children and adults](https://eccl.mit.edu/s/Pelz_Foundations-of-intuitive-power-analyses-in-children-and-adults.pdf) - ***Nature Human Behavior***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=4370839893505978405&hl=en&as_sdt=0,5)]. 人々が「直感的パワー分析」の基礎をある程度備えていることが示され、これにより人々は直感的な統計的推論やメタ認知戦略を用いて、異なる識別問題を解決するために必要な情報量を推定できる。

* [Cognitive Science as a Source of Forward and Inverse Models of Human Decisions for Robotics and Control](https://cocosci.princeton.edu/papers/ho2022cognitive.pdf) - ***Annual Review of Control, Robotics, and Autonomous Systems***, 2022. [[All Versions](https://scholar.google.com/scholar?oi=bibs&cluster=14055765901243029337)]. このレビューは、認知科学が人間の意思決定の「前向きモデル」および他人の意思決定をどう考えるかに関する「逆向きモデル」を提供できる可能性について述べている。著者は、ブラックボックスモデルと理論に基づいたモデルを統合するアプローチ、ヒューリスティックとバイアスを「制限された最適性」として再解釈する説明、そして人間の理論的知能とコミュニケーションを決定論的視点で特徴づけるモデルなど、関連する最新の進展を強調している。

*[Back to Top](#c)

#### 認知アーキテクチャ <a id="cognitive-architecture"></a>

* [Epistemology](https://plato.stanford.edu/entries/epistemology/) - ***プラトン・スタンフォード***。

* [The secret life of predictive brains: what's spontaneous activity for?](https://www.sciencedirect.com/science/article/pii/S1364661321001285) - ***Trends in Cognitive Sciences***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=719229834892860829&hl=en&as_sdt=0,5)]. 脳が生成モデルとして機能するという神経科学的アプローチ

* [SOAR: An architecture for general intelligence](https://www.sciencedirect.com/science/article/abs/pii/0004370287900506) - 人工知能、1987年。 [[All Versions](https://scholar.google.com/scholar?cluster=10873259207109132615&hl=en&as_sdt=0,5)]。

* [Is human cognition adaptive?](http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2013/09/Anderson91.pdf) - ***Behavioral and Brain Sciences***, 1991. [[All Versions](https://scholar.google.com/scholar?cluster=3639936076538071052&hl=en&as_sdt=0,5)]. 人間の知能における適応的視点を導入した元論文。ACT認知アーキテクチャの理論的基盤を提供した。

* [Metacognition in computation: A selected research review](https://www.sciencedirect.com/science/article/pii/S0004370205001530) - 人工知能、2005年。 [[All Versions](https://scholar.google.com/scholar?cluster=4240334051245008914&hl=en&as_sdt=0,5)]。

* [Basic functional trade-offs in cognition: An integrative framework](https://www.sciencedirect.com/science/article/pii/S0010027718301604) - 認知科学、2018。[[All Versions](https://scholar.google.com/scholar?cluster=11475742130443069967&hl=en&as_sdt=0,5)]。

* [What is consciousness, and could machines have it?](https://doi.org/10.1126/SCIENCE.AAN8871) - 『***Science***』2017年。[[All Versions](https://scholar.google.com/scholar?cluster=6932714857132107942&hl=en&as_sdt=0,5)]。機械知能における意識の二つのレベルについての見解。

* [A Theoretical Computer Science Perspective on Consciousness](https://www.worldscientific.com/doi/abs/10.1142/S2705078521500028) - 『***Journal of Artificial Intelligence and Consciousness***』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=16430561748075101972&hl=en&as_sdt=0,5)]。社会科学（自然科学にも一般化可能）における「理論」の定義に関する哲学的アプローチ。

*[Back to Top](#c)


### 科学学 <a id="science-logology"></a>

#### 科学哲学 <a id="philosophy-of-science"></a>

* [The structure of scientific revolutions](https://www-inst.eecs.berkeley.edu/~cs298-7/fa20/readings/kuhn.pdf) - 『***University of Chicago Press: Chicago***』1970年。[[All Versions](https://scholar.google.com/scholar?cluster=8909475038284903063&hl=en&as_sdt=0,5)]。科学的パラダイムの出現と移行に関するトマス・クーンの元論書。

* [The Meaning of "Theory"](https://jamacoartney.net/Abend%20(2008).pdf) - 『***Sociological Theory***』2008年。[[All Versions](https://scholar.google.com/scholar?cluster=4876642889050563131&hl=en&as_sdt=0,5)]。社会科学における「理論」の定義に関する哲学的解釈。

* [The blind men and the elephant: A metaphor to illuminate the role of researchers and reviewers in social science](https://journals.sagepub.com/doi/pdf/10.4256/mio.2013.015) - 『***Methodological Innovations Online***』2013年。[[All Versions](https://scholar.google.com/scholar?cluster=1654629562068006152&hl=en&as_sdt=0,5)]。

* [A Computational Inflection for Scientific Discovery](https://dl.acm.org/doi/abs/10.1145/3576896) - 『ACMの通信』2023年。[[All Versions](https://scholar.google.com/scholar?cluster=1756108647531090189&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 科学の科学 <a id="science-of-science"></a>

* [Metascience](https://en.wikipedia.org/wiki/Metascience) - ***ウィキペディア***。

* [Science of Science](http://ctbergstrom.com/publications/pdfs/2018Science.pdf) - ***Science***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=6471468823556848055&hl=en&as_sdt=0,5)]. 科学の科学に関する包括的な大規模レビュー.

* [Finding Scientific Topics](https://www.pnas.org/doi/abs/10.1073/pnas.0307752101) - ***Proceedings of the National Academy of Sciences***, 2004. [[All Versions](https://scholar.google.com/scholar?cluster=17382767110929995134&hl=zh-CN&as_sdt=0,5)]. Thomas L. Griffiths による科学的テーマに対するベイズモデルによる分析.

* [Meta-assessment of Bias in Science](https://www.pnas.org/doi/10.1073/pnas.1618569114) - ***Proceedings of the National Academy of Sciences***, 2017. [[All Verisions](https://scholar.google.com/scholar?cluster=14575889060982308028&hl=zh-CN&as_sdt=0,5)]. 科学におけるバイアスパターンおよびリスク要因の分析.

* [Slowed Canonical Progress in Large Fields of Science](https://www.pnas.org/doi/10.1073/pnas.2021636118) - ***Proceedings of the National Academy of Sciences***, 2021. [[All Verisions](https://scholar.google.com/scholar?cluster=7541922918797308487&hl=zh-CN&as_sdt=0,5)]. ある分野における年間発表論文数が多すぎると、進展ではなく停滞を引き起こす理由に関する分析。

* [HCI Research as Problem-Solving](https://dl.acm.org/doi/10.1145/2858036.2858283) - ***ACM SIGCHI'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=3206201064123443333&as_sdt=0,5)]. 本論文は、人間とコンピュータの相互作用（HCI）研究を問題解決の観点からメタ科学的に考察するものである。ラリー・ラダンの科学の基礎概念である「問題」と「解決策」の哲学を踏まえ、HCI研究は主に実証的、概念的、構築的な3つの問題タイプに分類されるという主張を行う。

*[Back to Top](#c)

#### 文献マイニング <a id="literature-mining"></a>

* [Structured information extraction from scientific text with large language models](https://www.nature.com/articles/s41467-024-45563-x) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=13694008040033857249)]. 本論文は、名前付きエンティティ認識と関係抽出を同時に行うシンプルなアプローチを提示し、事前に学習された大規模言語モデルを微調整することで、複雑な科学知識の有用な記録を抽出できることを示す。著者たちは、材料化学における3つの代表的なタスクを検証した：ドーパントとホスト材料のリンク、金属有機フレームワークのカタログ化、および一般の組成・相・形態・応用情報の抽出。

* [Automated extraction of chemical synthesis actions from experimental procedures](https://www.nature.com/articles/s41467-020-17266-6) - ***Nature Communications***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1626689948540815082)]. 本論文は、英語で書かれた非構造化実験手順を、成功を収めるための必要なすべての操作を反映する構造化合成手順（行動シーケンス）に変換する手法を提示する。

* [Inferring experimental procedures from text-based representations of chemical reactions](https://www.nature.com/articles/s41467-021-22951-1) - ***Nature Communications***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=15772647675166217556)]. 本論文は、化学反応の対応する化学式のテキスト表現から出発して、合成手順の全過程を予測するデータ駆動型モデルを提示し、バッチ有機化学への応用を示す。

* [Language models and protocol standardization guidelines for accelerating synthesis planning in heterogeneous catalysis](https://www.nature.com/articles/s41467-023-43836-5) - ***Nature Communications***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8186755371438552520)]. 本論文は、触媒発見における自動合成プロトコル分析に用いるトランスフォーマーモデルを導入し、単原子異質触媒（SACs）という急速に拡大する触媒ファミリーを例に示す。このモデルはSACプロトコルを行動シーケンスに変換し、その出力により合成傾向や応用に関する統計的推論を促進し、文献のレビューおよび分析を加速する可能性がある。

* [An intelligent guided troubleshooting method for aircraft based on HybirdRAG](https://www.nature.com/articles/s41598-025-02643-2) - ***Scientific Reports***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=4924119792997395046)]. 航空機の故障診断効率を高めるために、本論文は知識グラフと大規模言語モデル（LLM）を統合したハイブリッドなトラブルシューティングフレームワーク「HybridRAG」を提案する。従来の検索強化生成（RAG）手法は、単一モーダル検索に依存しているが、HybridRAGは多次元検索戦略を採用し、ベクトルベースおよびBM25ベースのテキスト検索とグラフベースの推論を組み合わせる。このハイブリッドアプローチにより、非構造化テキストと構造化故障グラフから関連情報が包括的に抽出され、診断の正確性、関連性、耐性が向上する。実験結果では、HybridRAGは主流のRAGベースラインと比較してF1スコアで少なくとも4％向上し、ホラクション率を7％以上低減した。これらの進展と、多モーダル検索の独自統合により、HybridRAGは航空機保守における複雑な課題に対処するための新たなフレームワークとして位置づけられる。さらに、本論文では、よりインタラクティブで適応的かつ柔軟な診断質問応答を支援するアグエントベースの知的トラブルシューティングアシスタントを提示し、保守担当者に高度な知能を持ち、文脈に応じた診断ツールを提供する。

* [Dual retrieving and ranking medical large language model with retrieval augmented generation](https://www.nature.com/articles/s41598-025-00724-w) - ***Scientific Reports***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=9572966919397577345)]. 大規模言語モデル（LLM）の進化により、さまざまな分野におけるテキスト生成が大幅に向上しているが、医療分野への応用では正確性とリアルタイム対応性の両方において深刻な課題が残っている。これらの二つの課題に対応するために、本研究では、埋め込み検索とElasticsearch技術を統合した、二段階検索およびランク付けを用いた新しいRAGフレームワークを提案する。動的に更新される医療知識ベース（主要医療機関の専門家レビューされたドキュメントを含む）に基づき構築されたこのハイブリッドアーキテクチャは、ColBERTv2を用いて文脈意識型結果ランク付けを実現しつつ、計算効率を維持する。実験結果では、単独のLLMおよび単一検索RAGと比較して、複雑な医療質問に対して正確性が10％向上し、緊急事態において秒単位の応答が必要な場合の遅延課題は、実験環境では依然として存在するが、実際の導入環境ではより強力なハードウェアを用いることでリアルタイム対応が可能となる。本研究は、正確性と実用的な導入の両方をバランスよく達成する信頼性の高い医療AIアシスタントの新たな枠組みを確立する。

* [Galactica: A Large Language Model for Science](https://galactica.org/static/paper.pdf) - ***Meta AI***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=15782429788006956926&hl=en&as_sdt=0,5)]. 大規模科学的コーパスに基づいた大規模言語モデル。

* [CORWA: A Citation-Oriented Related Work Annotation Dataset](https://arxiv.org/abs/2205.03512) - ***NAACL'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=14605899782190710454&hl=en&as_sdt=0,5)].

* [ESRA: Explainable Scientific Research Assistant](https://aclanthology.org/2021.acl-demo.14/) - ***ACL'21 Demo Track***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=4387915912582172679&hl=en&as_sdt=0,5)]. 文献検索におけるキーワードの知識グラフを構築・可視化するツール。

* [cite2vec: Citation-Driven Document Exploration via Word Embeddings](https://matthewberger.github.io/papers/cite2vec.pdf) - 『IEEE Transactions on Visualization and Computer Graphics』2016年。[[All Versions](https://scholar.google.com/scholar?cluster=6949650208780085923&hl=en&as_sdt=0,5)]。

* [Galex: Exploring the evolution and intersection of disciplines](http://cic.tju.edu.cn/faculty/zhangjiawan/Jiawan_Zhang_files/paper/zeyuli2020.pdf) - 『IEEE Transactions on Visualization and Computer Graphics』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=13313104491218225635&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)

#### 科学執筆 <a id="scientific-writing"></a>

* [The uses of argument](http://library.lol/main/8036CBB1CCC448CA7E036774D810EBC0) - ***Cambridge University Press***, 1958. [[All Versions](https://scholar.google.com/scholar?cluster=12052408655432810103&hl=en&as_sdt=0,5)]. ステファン・トゥルミンによるトゥルミン論理構造の導入。これは一般的に主張、根拠、反論から構成される。

* [A tagmemic approach to paragraph analysis](https://www.jstor.org/stable/355200) - ***College Composition and Communication***, 1965. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=A+Tagmemic+Approach+to+Paragraph+Analysis+AL+Becker&btnG=)]. 説明文の構造を分析する元論文。その中で登場する2つのパターンは、トピック・制限・例パターンと問題・解決パターンである。

* [The uses and complexity of argument structures in expert and student persuasive writing](https://journals.sagepub.com/doi/abs/10.1177/0741088398015002004) - ***Written Communication***, 1998. [[All Versions](https://scholar.google.com/scholar?cluster=3218190258774062869&hl=en&as_sdt=0,5)]. 論理的議論を書く人々の行動を調査した研究で、彼らが使用する論理構造が明らかになった。

* [Towards an argument interchange format](https://pure.mpg.de/rest/items/item_3020351/component/file_3045811/content) - ***The Knowledge Engineering Review***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=11123720528835823517&hl=en&as_sdt=0,5)]. 引用された最初の論文で、議論分析用の引数交換形式（AIF）フレームワークが導入された.

* [Speech Acts of Argumentation: Inference Anchors and Peripheral Cues in Dialogue](https://www.aaai.org/ocs/index.php/WS/AAAIW11/paper/viewFile/3940/4244) - ***AAAI'12***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=9761955212933152906&hl=en&as_sdt=0,5)]. 引用された最初の論文で、AIFの代替として情報固定理論（IAT）が導入された.

*[Back to Top](#c)

#### 科学教育 <a id="science-education"></a>

* [Cognitive Science and Science Education](https://www.harvardlds.org/wp-content/uploads/2018/05/Carey-Cognitive-science-and-science-education.-American-Psychologist.pdf) - ***American Psychologist***, 1986. [[All Versions](https://scholar.google.com/scholar?cluster=6627805813997387166&hl=en&as_sdt=0,5)]. スーハン・キャリーによる、認知科学に基づく科学教育研究手法に関するレビュー.

* [PersLEARN: Research Training through the Lens of Perspective Cultivation](https://aclanthology.org/2023.acl-demo.2/) - ***ACL'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=6242389165210232890)]. 科学的研究は、著者の視点に内在しており、性格、コミュニティ、社会などの要因によって影響を受ける。若手研究者は、既存文献に含まれる視点を特定し、自らの視点を形成する上で困難を抱えることが多い。この問題に対応するために、本論文はPersLEARNと呼ばれるツールを提案し、基本的なアイデアから始まり、明確に構成されたフレームワークへと進化する科学的視点の育成を支援する.

*[Back to Top](#c)

#### 科学の民主化 <a id="democratization-of-science"></a>

* [Reproducibility](https://www.science.org/doi/full/10.1126/science.1250475) - 『***Science***』2014年。[[All Versions](https://scholar.google.com/scholar?cluster=676974831306442279&hl=en&as_sdt=0,10)]。

* [Bridging the information gap in organic chemical reactions](https://www.nature.com/articles/s41557-024-01470-8) - ***Nature Chemistry***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=5365091261196953334)]. この概観論文は、データ標準化、再現性および評価に関する科学出版物におけるデータ管理を改善するための8つの原則を提示し、科学者に現行の出版基準を越えることを促進する。

* [A manifesto for reproducible science](https://www.nature.com/articles/s41562-016-0021) - 2017年『Nature Human Behavior』。[[All Versions](https://scholar.google.com/scholar?cluster=9515807942859203900&hl=en&as_sdt=0,10)]。

* [1,500 scientists lift the lid on reproducibility](https://www.nature.com/articles/533452a) - ***Nature***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=11479406257389837824&hl=en&as_sdt=0,5)].

* [How to Make More Published Research True](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4204808/) - 『PLoS Medicine』2014年。[[All Versions](https://scholar.google.com/scholar?cluster=10945341175996677908)]。

* [Six factors affecting reproducibility in life science research and how to handle them](https://www.nature.com/articles/d42473-019-00004-y) - ***Nature Advertisement***.

* [Five keys to writing a reproducible lab protocol](https://www.nature.com/articles/d41586-021-02428-3) - ***Nature***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=13259206850261301938)]. このインタビュー記事は、実験プロトコルの再現性を高めるための5つの方法を紹介している。その方法は、(i) 実験の進行中にプロトコルを記録すること、(ii) 書面のプロトコルに加えて動画による説明を提供すること、(iii) 実験資源をデジタルに管理する電子実験ノート（ELN）の活用、(iv) 成分をデポジットし、各ステップの根拠を理解しながら記録すること、および(v) オンラインプラットフォームを活用して研究者間でヒントや拡張、手法、データを共有することである。

* [The Experimental Design Assistant](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2003779) - ***PLoS Biology***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=12481490526120919925)]. [[Nature Methods Correspondence](https://www.nature.com/articles/nmeth.4462)]. [[EDA Website](https://eda.nc3rs.org.uk/)]. EDAは、ウェブベースのツールで、体内実験を行う研究者に実験設計および分析プロセスを導き、提案された設計に対して自動的にフィードバックを提供し、グラフィカルな要約を生成することで、同僚、資金提供者、規制当局、そして広い科学コミュニティとのコミュニケーションを支援する。

*[Back to Top](#c)

#### 研究室自動化 <a id="laboratory-automation"></a>

* [Reconfigurable system for automated optimization of diverse chemical reactions](https://www.science.org/doi/full/10.1126/science.aat0650) - ***Science***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=3076614068291119943)]. [[Preprint](https://www.science.org/doi/pdf/10.1126/science.aat0650)]. この論文は、ハードウェア、ソフトウェア、アナリティクスを統合したプラグアンドプレイ型の連続流化学合成システムを紹介しており、この課題を克服する。システムのソフトウェアは、ユーザーが選択した反応剤や単位操作（反応器および分離器）を制御し、反応分析（高圧液クロマトグラフィー、質量分析、振動スペクトロスコピー）を処理し、自動的に最適化を行う。

* [A universal system for digitization and automatic execution of the chemical synthesis literature](https://www.science.org/doi/full/10.1126/science.abc2986) - ***Science***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13909991218383718512)]. [[Preprint](https://www.chem.gla.ac.uk/cronin/images/pubs/Mehr-ScienceOct2020.pdf)]. この論文は、自然言語処理を用いて有機化学文献を直接編集可能なコードに翻訳するソフトウェアプラットフォームを報告している。そのコードは、実験室での化合物の自動合成を駆動することができる。 [[XDL Documentation](https://croningroup.gitlab.io/chemputer/xdl/index.html)] [[XDL Schema Database](https://zenodo.org/records/3955107)]

* [Digitization and validation of a chemical synthesis literature database in the ChemPU](https://www.science.org/doi/full/10.1126/science.abo0058) - ***Science***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=17368503277308594977)]. [[Preprint](https://www.researchgate.net/profile/Aamir-Khan/publication/361857872_Digitization_and_validation_of_a_chemical_synthesis_literature_database_in_the_ChemPU/links/62cd356d00d0b451104cbfe9/Digitization-and-validation-of-a-chemical-synthesis-literature-database-in-the-ChemPU.pdf)]. この論文は、現代有機合成で見られる反応範囲を代表する100分子の化学反応データベースを自動実行可能な形で提示している。これらの反応の化学反応コード（χDL）は、バージョン管理、検証、協働、データマイニングのためのデータベースに保存されている。この中で、データベースから50以上の項目がダウンロードされ、7台のモジュラー化学コンピュータでロボットによって実行され、専門家化学者が達成したような収率と純度を実現している。

* [Chemputation and the Standardization of Chemical Informatics](https://pubs.acs.org/doi/full/10.1021/jacsau.1c00303) - ***Journal of the American Chemical Society (Au)***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=3884902150148113559)]. 本論文は、すべての化学合成を包含する標準ハードウェア（化学プロセスプログラミングアーキテクチャ―ChemPU）を提示し、固体相ペプチド合成からHTEフロー化学プラットフォームまですべての化学自動化戦略を統合する一方で、研究者間の化学コード（χDL）の共有を可能にする出版標準を確立する。

* [An autonomous portable platform for universal chemical synthesis](https://www.nature.com/articles/s41557-022-01016-w) - ***Nature Chemistry***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=4484997534431409967)]. [[Preprint](https://eprints.gla.ac.uk/275574/)]. 本論文は、合成および精製に必要なすべてのモジュールを内蔵した携帯型のスーツケースサイズの化学合成プラットフォームを提示する。このシステムは、文献ベースのテキスト合成をもとに、化学プログラミング言語とデジタル反応生成器を組み合わせて反応器と実行可能なプロトコルを生成し、同時に反応圧の指紋を生成して反応器内のプロセスをモニタリングし、遠隔でプロトコルの品質を確認する。

* [A mobile robotic chemist](https://www.nature.com/articles/s41586-020-2442-2) - ***Nature***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13216902493789027324&hl=en&as_sdt=0,5)]. [[Preprint](https://strathprints.strath.ac.uk/74759/1/Burger_etal_Nature_2020_A_mobile_robotic.pdf)]. 本研究では、水から水素を生成するための改善された光触媒を探索するためのモバイルロボットを用いる。このロボットは8日間自動的に動作し、10変数の実験空間内で688回の実験を実施し、バッチ型ベイズ探索アルゴリズムによって駆動された結果、初期構成体の6倍の活性を持つ光触媒混合物を特定し、有益な成分を選出、悪影響の成分を除外した。

* [An autonomous laboratory for the accelerated synthesis of novel materials](https://www.nature.com/articles/s41586-023-06734-w) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=17944003281308189532)]. 本論文は、無機粉末の固体状態合成に特化した自律実験室A-Labを導入する。このプラットフォームは、計算、文献からの歴史データ、機械学習（ML）およびアクティブ学習を用いて、ロボットによる実験の計画と結果の解釈を行う。連続運転17日間で、58のターゲット（酸化物やリン酸塩など）の中から41の新しい化合物を発見した。

* [The Internet of Things comes to the lab](https://www.nature.com/articles/542125a) - ***Nature***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=7747117198956166976&hl=en&as_sdt=0,5)]. つながった機器と設備の出現は、研究者を実験室から解放し、実験を調整し、データを遠隔で分析できるようにする。

* [A dynamic knowledge graph approach to distributed self-driving laboratories](https://www.nature.com/articles/s41467-023-44599-9) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=7070798385652764751)]. 本研究では、設計・製造・試験・分析サイクルにおけるデータおよび物質の流れを、事前定義された知識体系（ontology）を用いて捉え、自律型エージェントを実行可能な知識コンポーネントとして実験プロセスを実行する。データの起源を記録することで、その検索可能性、アクセス可能性、相互運用性、再利用性を確保する。このアーキテクチャは、動的知識グラフに基づく包括的なデジタルツインを構築する「World Avatar」プロジェクトに根ざしている。

* [Automation isn't automatic](https://pubs.rsc.org/en/content/articlehtml/2021/sc/d1sc04588a) - ***Chemical Science***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=14176714971050097971)]. 本稿は、ベンチトップスケールにおける合成化学の自動化現状について概説し、特にシステム導入における基本的な考慮事項とその課題に焦点を当てる。著者は、自動化を「自動的」とは限らず、人間および計算による一連の慎重な判断と継続的な調整を含む反復的プロセスとして再構築する。

* [Balancing act: when to flex and when to stay fixed](https://www.cell.com/trends/chemistry/fulltext/S2589-5974(23)00249-6) - ***Trends in Chemistry***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=14208571639305934551)]. 本稿は、自動化プラットフォームの選定における意思決定プロセスについて重要な洞察を提供し、標準化されたタスクには固定自動化が適しており、動的かつ変化する研究環境では柔軟自動化の戦略的活用が有効であることを強調する。

* [What is a minimal working example for a self-driving laboratory?](https://www.sciencedirect.com/science/article/pii/S2590238522006385) - ***Matter***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=1612804023616680548)]. 本論文は、低コストで「Hello, World!」として機能する自律実験室「SDL-Demo」を提案し、電子工学、物理学ベースのシミュレーション、最適化の分野から得られた「Hello, World!」タスクを統合している。SDL-Demoはモジュラーかつ拡張性を持つため、自律実験室概念の低コスト教育およびプロトタイピングに最適である。

* [Robotic search for optimal cell culture in regenerative medicine](https://elifesciences.org/articles/77007) - ***eLife***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=1330075145723138159)]. 本論文では、バッチベイズ最適化アルゴリズムを用いたロボットAIシステムを開発し、誘導多能性幹細胞（iPSC）から導かれる網膜色素上皮（iPSC-RPE）細胞の分化を自律的に誘導する。2億組のパラメータ組み合わせの中から、システムは111日間で143種類の条件で細胞培養を行い、色素スコアにおいて事前最適化された培養結果に比べて88％高いiPSC-RPE生成量を達成した。

* [Balancing autonomy and expertise in autonomous synthesis laboratories](https://www.nature.com/articles/s43588-025-00769-x) - ***Nature Computational Science***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=2487456887760587329)]. 自律合成実験室は、計画・製造・測定・分析の繰り返しプロセスを効率化する可能性を秘めている。本論文では、この分野における障壁、人間が関与するアプローチの可能性、および自律実験室のアクセス性、精度、効率の最適化に関する戦略について述べている。

* [AlphaFlow: autonomous discovery and optimization of multi-step chemistry using a self-driven fluidic lab guided by reinforcement learning](https://www.nature.com/articles/s41467-023-37139-y) - ***Nature Communications***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=14092546584501434626)]. 閉ループ型の自律実験は、ユーザーの介入なしに、広範な反応空間を高速かつ材料効率的に探索可能である。しかし、複雑な多段階プロセスとデータが少ない環境における先進材料の自律探索は依然として課題である。本研究では、自己駆動型流体実験室「AlphaFlow」を提示し、複雑な多段階化学反応の自律発見を実現する。AlphaFlowは強化学習を組み合わせたモジュラーミクロドロップ反応器を用いて、反応段階の変動順序、相分離、洗浄、および連続的な場中スペクトルモニタリングを実施できる。強化学習が高次元多段階化学反応に与える力を示すために、著者はAlphaFlowを用いて、コア・シェルセマンドナノ粒子の殻成長プロセスの合成経路を発見・最適化し、従来のcALDパラメータを事前に知らぬ状態で、最大40パラメータを含む新しい多段階反応経路を成功裏に発見・最適化した。この研究により、著者は閉ループ型強化学習を導入したシステムが、多段階ナノ粒子合成における課題の探索と解決にどのように貢献できるかを示している。さらに、AlphaFlowはcALDを超えて多段階化学反応への応用により、基礎知識の生成や合成経路の発見・最適化を加速する可能性を示している。

*[Back to Top](#c)

#### AI支援研究 <a id="ai-assisted-research"></a>

* [Scientific discovery in the age of artificial intelligence](https://www.nature.com/articles/s41586-023-06221-2) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11962817646389491592)]. 過去10年間の進展を検討するレビュー論文で、自己監督学習や幾何学的深層学習が紹介されている。自己監督学習は、大量の未ラベルデータを用いてモデルを訓練し、幾何学的深層学習は科学データの構造に関する知識を活用して、モデルの精度と効率を向上させる。

* [Artificial Intelligence for Retrosynthetic Planning Needs Both Data and Expert Knowledge](https://pubs.acs.org/doi/full/10.1021/jacs.4c00338) - ***Journal of the American Chemical Society***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=10595951443492961310)]. 反応例データのみに基づくAI合成計画者開発は停滞しており、専門知識とAIを組み合わせた「ハイブリッド」アルゴリズムの性能に比べて劣っている。本稿は、この不足の原因を、反応データ量の不足という既存の説明を超えて検討する。合成化学分野固有の複雑性やデータバイアスに注目し、AIの独自能力に分野専門家の知識ベースと推論戦略を組み合わせることを提唱している。合成化学者が合成計画ソフトウェアの最終ユーザーであるため、その関与を積極的に取り入れることで、コンピュータアルゴリズムと化学合成の複雑性の間にギャップを埋めることが可能になると示している。

* [The Impact of Large Language Models on Scientific Discovery: a Preliminary Study using GPT-4](https://arxiv.org/abs/2311.07361) - ***Microsoft Research AI4Science***, 2023. . LLMが科学発見の文脈における性能に関する調査、GPT-4を焦点にしている。 [[All Versions](https://scholar.google.com/scholar?%2C5&q=The+Impact+of+Large+Language+Models+on+Scientific+Discovery%3A+a+Preliminary+Study+using+GPT-4&btnG=)] [[Project](https://github.com/microsoft/LLM4ScientificDiscovery)]

* [An agentic system for rare disease diagnosis with traceable reasoning](https://www.nature.com/articles/s41586-025-10097-9) - ***Nature***, 2026. [[All Versions](https://scholar.google.com/scholar?cluster=586452159650802493)]. 罕見疾患は世界中で3億人以上に及ぶが、迅速かつ正確な診断は依然として大きな課題である。患者は長期間にわたる「診断の旅」を経験し、5年以上に及ぶ反復的な転院や誤診、無駄な治療に見舞われ、治療の遅れや大きな精神的・経済的負担をもたらす。本研究では、大規模言語モデルを用いた多代理システム「DeepRare」を提案し、40以上の専門ツールと最新の知識源を統合することで、稀有疾患の診断差分を支援する。DeepRareは自由文書、構造化した人間の現象オノロジー用語、遺伝子検査結果といった多様な臨床データを処理し、検証可能な医学的根拠に基づく透明な理由を含む診断仮説をランク付けする。アジア、北米、ヨーロッパの文献、症例報告、臨床センターから収集された9データセットを用いて評価した結果、14医学分野にわたる2,919疾患において優れた性能を示した。人間現象オノロジーに基づくタスクでは、1位の再帰率が57.18%に達し、次に優れた手法を23.79%上回り、多モーダルテストでは168ケースにおいてExomiserの55.9%を上回る69.1%を達成。専門家によるレビューでは、その推論過程の一致率が95.4%とされ、妥当性と追跡可能性が確認された。本研究は稀有疾患診断の進展を示し、最新の大規模言語モデルを駆使した代理システムが現在の臨床プロセスをどのように変革できるかを実証した。

* [Towards end-to-end automation of AI research](https://www.nature.com/articles/s41586-026-10265-5) - ***Nature***, 2026. [[All Versions](https://scholar.google.com/scholar?cluster=12977019577074057664)]. 科学の自動化は人工知能（AI）研究における長期的な目標である。コミュニティは科学プロセスの個々の要素を自動化する上で大きな進展を遂げたが、研究の全ライフサイクル（構想から発表まで）を完全に自動化するシステムは依然として実現されていない。本研究では、科学プロセス全体を端から端まで自動化するパイプラインを提示する。著者は「AI Scientist」というシステムを提案し、研究アイデアの創出、コードの作成、実験の実行、データの可視化と解析、科学論文の作成、さらには自らの同行レビューを行う。このAIシステムが生成したアイデアや実行、報告は十分な品質を持ち、その論文はトップクラスの機械学習会議のワークショップの初回同行レビューを通過した。そのワークショップの採択率は70%であった。このシステムは、複雑な代理システム内で現代の基礎モデルを活用している。著者はAI Scientistを2つの設定で評価した：特定のテーマに関する研究を行うために人間が提供したコードテンプレートを初期の枠組みとして用いるフォーカスモードと、テンプレートなしで広範な科学的探求を行うオープンエンドモード。両者の設定は多様なアイデアを生成し、自動的にそれらをテスト、報告、評価する。この成果はAIが科学的貢献を可能にする能力の成長を示し、研究の実施方法に新たな変革をもたらす可能性を示している。こうした影響力のある新技術には、過負荷のレビューシステムを圧迫したり、科学文献にノイズを加えるといった重要なリスクがあるが、責任を持って開発されれば、科学発見のスピードを大きく加速できる可能性がある。

* [Machine learning-assisted molecular design and efficiency prediction for high-performance organic photovoltaic materials](https://www.science.org/doi/full/10.1126/sciadv.aay4275) - ***Science Advances***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=12392230644945701722)]. 有機太陽電池（OPV）の高性能材料を探索する際、それらの化学構造と光電特性の関係を合成前に確立することは意味がある。本研究では、文献に報告された1700以上のドナー材料を含むデータベースを構築し、監督学習により構造と性質の関係を構築し、OPV材料の迅速なスクリーニングを実現する。著者は分子構造のいくつかの表現形（画像、ASCII文字列、記述子、フィンガープリント）を、さまざまな機械学習アルゴリズムの入力として検討した。結果として、1000ビットを超える長さのフィンガープリントが高精度な予測を達成することが分かった。このアプローチの信頼性は、新たに設計された10種のドナー材料をスクリーニングすることでさらに検証され、モデルの予測と実験結果の間に良好な一致が得られた。この結果は、機械学習が新規OPV材料の事前スクリーニングに強力なツールであることを示しており、OPV分野の開発を加速する可能性がある。

* [Design of metalloproteins and novel protein folds using variational autoencoders](https://www.nature.com/articles/s41598-018-34533-1) - ***Scientific Reports***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=18126187509308242959)]. 新しいタンパク質の設計は多くの応用を持つが、成功は個別のケースにとどまっている。一方で、近年のデータの増加により、深層学習技術は生物学分野への適用が急速に広がっている。本研究では、変分自動エンコーダーを用いて、望ましい性質に基づいたタンパク質の配列を生成することで、タンパク質設計と深層学習の接続を試みる。人間の介入なしに、金属結合部位を持たないタンパク質に銅やカルシウム結合部位を追加し、隠れマーカーモデルと比較した。また、タンパク質構造の文法を構築し、新たなタンパク質のトポロジーに適用した。その結果、1つの候補構造が分子動力学シミュレーションにより安定性を持つことが確認された。このモデルがタンパク質配列の広大な検索空間を制限し、スケーラビリティを持つ能力は、さまざまなタンパク質設計タスクに貢献する可能性がある。

* [Highly accurate protein structure prediction with AlphaFold](https://www.nature.com/articles/s41586-021-03819-2) - ***Nature***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=6286436358625670901)]. 本論文は、類似構造が存在しない場合でも原子精度でタンパク質構造を予測できる初めての計算手法を提供する。このアプローチは、タンパク質構造予測において観察・説明に基づく手法の典型的な応用であり、第一原理に基づく手法とは異なっている。

* [Human–machine collaboration for improving semiconductor process development](https://www.nature.com/articles/s41586-023-05773-7) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=10295771969614897767)]. [[Nature News](https://www.nature.com/articles/d41586-023-01353-x)]. 本研究では、ベイズ最適化アルゴリズムを用いて、人工知能（AI）が複雑な半導体チッププロセス開発のコスト削減にどのように寄与するかを調査した。特に、本研究では、半導体製造プロセス設計における人間とコンピュータの性能を系統的に比較できる制御された仮想プロセスゲームを構築し、その結果、人間エンジニアは開発初期段階で優れた性能を発揮する一方、アルゴリズムは目標の精密な許容範囲近くにおいて、コスト面ではるかに効率的であることが明らかになった。

* [A foundation model for generalizable disease detection from retinal images](https://www.nature.com/articles/s41586-023-06555-x) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=3139988207343394501)]. 本論文では、RETFoundと呼ばれる網膜画像向けの基礎モデルを提示し、未ラベルの網膜画像から汎化可能な表現を学習し、複数の応用分野におけるラベル効率の高いモデル適応を可能にする。具体的には、RETFoundは自己監督学習により160万枚の未ラベル網膜画像上で訓練され、その後、疾患検出タスクに明示的なラベルを用いて適応された。

* [Accurate medium-range global weather forecasting with 3D neural networks](https://www.nature.com/articles/s41586-023-06185-3) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=7198604620204619820)]. 本研究では、正確で中間期間のグローバル気象予測を可能にする人工知能ベースの手法を導入した。3次元深層ネットワークに地球特有の事前知識を組み込み、気象データにおける複雑なパターンを効果的に処理できること、および階層的な時系列集約戦略が中間期間予測における誤差の蓄積を抑制することを示した。39年間のグローバル気象データに基づいて訓練されたPangu-Weatherプログラムは、欧州気象センターの運用中間範囲気象予測システム（ECMWF）と比較して、検証されたすべての変数において、再分析データ上でより強い決定論的予測結果を達成した。

* [Learning skillful medium-range global weather forecasting](https://www.science.org/doi/10.1126/science.adi2336) - 『***Science***』2023年。[[All Versions](https://scholar.google.com/scholar?cluster=269756601245477923&hl=en&as_sdt=0,5)]。

* [Skilful nowcasting of extreme precipitation with NowcastNet](https://www.nature.com/articles/s41586-023-06184-4) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=17837864391812838009&hl=en&as_sdt=0,5)].

* [Autonomous chemical research with large language models](https://www.nature.com/articles/s41586-023-06792-0) - ***Nature***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8097577445064259203)]. GPT-4を駆動する人工知能システムが、インターネットやドキュメント検索、コード実行、実験自動化といったツールを活用し、大規模言語モデルを組み込みながら、複雑な実験の設計・計画・実施を自律的に実行する。

* [Augmenting large language models with chemistry tools](https://www.nature.com/articles/s42256-024-00832-8) - ***Nature Machine Intelligence***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=9291969834799338362)]. [[Preprint](https://arxiv.org/abs/2304.05376)]. 本論文では、有機合成、薬品発見、材料設計におけるタスクを遂行できるLLM化学アグリント「ChemCrow」を導入。18の専門設計ツールを統合し、GPT-4を基盤とすることで、化学分野におけるLLMの性能を向上させ、新たな能力が発現。アグリントは、昆虫忌避剤および3つの有機触媒の合成計画と実行を自律的に実施し、新たな染色体基質の発見を指導した。

* [Empowering biomedical discovery with AI agents](https://www.cell.com/cell/fulltext/S0092-8674(24)01070-5) - ***Cell***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=16382920795308615613)]. 作者たちは、「AI科学者」として、疑いをもつ学習と推論を可能にするシステムを想定し、AIモデルと生物医学ツールを実験プラットフォームと統合する協働アグリントによって、生物医学研究を強化する。人間の創造性と専門性とAIが大規模データを分析し、仮説空間をナビゲートし、繰り返しタスクを実行する能力を組み合わせることで、発見プロセスに人間を排除せず、AIアグリントは多様なタスクに精通し、発見ワークフローの計画や自己評価を通じて知識のギャップを特定・補完する。これらのアグリントは、構造化された記憶を備えた大規模言語モデルと生成モデルを活用し、継続的な学習を実現し、機械学習ツールを用いて科学的知識や生物学的原理、理論を統合する。AIアグリントは、仮想細胞シミュレーション、性質のプログラム制御、細胞回路設計から新しい治療法開発まで、幅広い分野に影響を与える。

* [DrBioRight 2.0: an LLM-powered bioinformatics chatbot for large-scale cancer functional proteomics analysis](https://www.nature.com/articles/s41467-025-57430-4) - ***Nature Communications***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=4899547492027803190)]. [[Project](https://drbioright.org)]. 関与プロテオミクスは、がんメカニズムの理解に重要な洞察を提供し、新たなバイオマーカーおよび治療ターゲットの発見を促進する。著者たちは、逆相タンパク質アレイを用いて、がん関連の機能プロテオミクスリソースを開発。これは、がんゲノムマップ（TCGA）のほぼ8000サンプルおよびがん細胞ラインエヌクレア（CCLE）の約900サンプルを統合したもので、500以上の高品質抗体のキュレーションパネルを含み、すべての主要がんの特徴的経路をカバー。このリソースのアクセス性と解析力を高めるために、本研究では、最先端の大規模言語モデルを駆動する直感的なバイオインフォマティクスプラットフォーム「DrBioRight 2.0」を導入。DrBioRightは、タンパク質中心のがんオミクスデータを探索し、高度な解析、結果の可視化、自然言語によるインタラクティブディスカッションを行うことを可能にする。複雑なプロテオゲノミクス解析を簡素化することで、大規模機能プロテオミクスデータの意味のある医療洞察への転換を加速する。

* [The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies](https://www.nature.com/articles/s41586-025-09442-9) - ***Nature***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=9384650162839457416)]. 科学は多分野の研究者によるチーム活動によって進展するが、多くの研究者には複数分野の専門家にアクセスしやすい環境が存在しない。大規模言語モデル（LLM）は、多様な分野の研究者を支援する能力を示しているが、その利用は主に特定の科学的質問への回答にとどまっている。本研究では、LLMの科学的応用を拡張するために、人工知能（AI）と人間の協働研究環境「Virtual Lab」を導入。Virtual Labは、LLMの主導研究者アグリントが、LLM科学者アグリントのチームを研究会議を通じて導き、人間研究者が高レベルのフィードバックを提供する構造を持つ。著者たちは、Virtual LabをSARS-CoV-2の最新変異株に向けたナノボディ結合設計に応用。Virtual Labは、ESMプロテイン言語モデル、AlphaFold-Multimerプロテイン折りたたみモデル、およびロセットのコンピュータバイオロジーソフトウェアを組み合わせた、新たな計算ナノボディ設計パイプラインを構築し、92の新しいナノボディを設計した。実験検証では、SARS-CoV-2の変異株に対して機能的なナノボディが多数発見され、特に2つの新しいナノボディは、最新のJN.1またはKP.3変異株に対してより強い結合を示し、祖先ウイルスのスパイクタンパク質に対して強い結合を維持しており、さらなる調査に適した候補であることが示された。この研究は、Virtual Labが迅速に実世界の科学的発見を達成できる可能性を示している。

* [BioPlanner: Automatic Evaluation of LLMs on Protocol Planning in Biology](https://aclanthology.org/2023.emnlp-main.162/) - ***EMNLP'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=1222312709622462659)]. [[Project](https://github.com/bioplanner/bioplanner )]. 本論文では、実験プロトコルの計画タスクに向けた自動評価フレームワークを提示し、生物学分野のプロトコルとそれに伴う擬似コード表現を含むデータセット「BioProt」を導入する。

* [From intention to implementation: automating biomedical research via LLMs](https://link.springer.com/article/10.1007/s11432-024-4485-0) - ***Science China Information Sciences***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=15681173257674232428)]. 伝統的な医療研究は、科学文献やデータセットの指数関数的な増加により、ますます労働負担が大きくなっている。人工知能（AI）特に大規模言語モデル（LLM）は、このプロセスを自動化することで革命をもたらす可能性があるが、依然として多分野の専門知識、実験設計の論理性、評価指標の確立といった課題が残っている。本論文では、乾実験を含む医療研究プロセス全体を効率化するための、世界初の端末から端まで自動化されたシステム「BioResearcher」を提案する。BioResearcherは、検索、文献処理、実験設計、プログラミングに特化したエージェントを統合したモジュラー多エージェントアーキテクチャを採用し、複雑なタスクを論理的に関連付けられたサブタスクに分解し、階層的学習手法を用いることで、多分野の要件や論理的複雑性という課題を効果的に解決する。さらに、BioResearcherはLLMを用いたレビューエージェントを導入し、プロセス中の品質を監視し、実験プロトコルの品質と自動化レベルを評価するための新たな評価指標を提案する。BioResearcherは、8つの未達成研究目標において、平均実行成功率63.07％を達成し、5つの品質指標において、典型的なエージェントシステムよりも平均22.0％高い性能を発揮する。このシステムは、研究者の負担を大幅に軽減し、医療分野の発見を加速する可能性を示しており、将来の自動化研究システムにおける革新を促進する。

* [A human-machine interface for automatic exploration of chemical reaction networks](https://www.nature.com/articles/s41467-024-47997-9) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=13306522324804014261)]. 自動反応ネットワーク探索アルゴリズムは、複雑な化学プロセスのメカニズムを体系的に探索するためのアプローチを提供するが、生成される反応ネットワークは非常に広大であり、すべての可能性のある中間体を探索することは計算的に不可能である。本論文では、無偏向の自動探索をガイドする「STEERING WHEEL」を導入する。STEERING WHEELアルゴリズムは直感的で一般適用可能であり、出現するネットワークの特定領域に焦点を当てることを可能にする。また、メカニズム探索、触媒設計など、化学最適化の課題において、自動データ生成をガイドすることができる。

* [Active learning accelerates electrolyte solvent screening for anode-free lithium metal batteries](https://www.nature.com/articles/s41467-025-63303-7) - ***Nature Communications***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=3974490115470252870)]. アノードフリーまたは「ゼロエクセス」リチウム電池は、現在のリチウムイオン電池に比べて高いエネルギー密度を提供するが、サイクル寿命を延ばすためには電解質の革新が必要である。電解質設計のための普遍的な設計原則が欠如しているため、アノードフリーリチウム電池の電解質開発は遅く、進展は試行錯誤に依存している。本研究では、電解質発見を加速するためのアクティブ学習を導入する。従来のデータ中心型の頻度主義機械学習手法とは異なり、アクティブ学習フレームワークは、順次ベイズ実験設計とベイズモデル平均を用いて、データが少ないおよびラベルがノイズを含む状況でも、最適候補を効率的に特定する。容量保持を目標として、実験フィードバックを統合し、予測を反復的に改善する。自社のサイクルデータセットから58データポイントを起点に、アクティブ学習フレームワークは100万種の電解質を含む仮想検索空間を探索し、最適候補に迅速に収束した。7回のアクティブ学習キャンペーン（各キャンペーンで約10種の電解質をテスト）を経て、4つの異なる電解質溶媒が特定され、最先端の電解質と同等の性能を示すことが確認された。本研究は、次世代電池のための広範な電解質化学空間をナビゲートするアクティブ学習アプローチの可能性を示している。

* [PatCID: an open-access dataset of chemical structures in patent documents](https://www.nature.com/articles/s41467-024-50779-y) - ***Nature Communications***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=329287456191953845)]. 特許公報の自動解析は、薬品発見や材料科学など、さまざまな分野における研究を加速する可能性がある。特許文書内では、分子構造の視覚的表現に重要な情報が含まれている。PatCID（Patent-extracted Chemical-structure Images database for Discovery）は、こうした情報をスケールでアクセス可能にする。ユーザーは、どの文書にどのような分子が表示されているかを検索できる。PatCIDには8100万の化学構造画像と1400万のユニークな化学構造が含まれている。本研究では、PatCIDが最先端の化学特許データベースと比較される。ランダムに選ばれたデータセットにおいて、PatCIDは56.0％の分子を検索し、自動生成データベース（Google Patents 41.5％、SureChEMBL 23.5％）および手動作成データベース（Reaxys 53.5％、SciFinder 49.5％）を上回る。最先端のドキュメント理解手法を活用したPatCIDの高品質データは、現在の自動生成特許データベースを上回り、プロプライエタリな手動作成データベースと競争できる。これにより、自動文献レビューおよび学習ベースの分子生成手法への応用が期待される。

* [Large language models for scientific discovery in molecular property prediction](https://www.nature.com/articles/s42256-025-00994-z) - ***Nature Machine Intelligence***, 2025. [[All Versions](https://scholar.google.com/scholar?cluster=12679596096313341977)]. 大規模言語モデル（LLMs）は、自然言語として知識を内包する人工知能システムであり、創造的な文章作成、物語構成、翻訳、質問応答、要約、コンピュータコード生成など、多くの複雑なタスクに優れた能力を持つ。LLMsは自然科学分野で初期的な応用を見ているものの、科学的発見への可能性はほとんど未探索である。本研究では、文献から知識を合成し、科学データから知識を推論することで、分子性質予測における科学的発見を促進するLLM4SDフレームワークを提案する。LLMsは科学文献から既存の情報を抽出し、例えば分子量が溶解性予測に重要であるといった知識を合成する。推論では、分子データにおけるパターンを特定し、特に簡易分子入力線記述システム（SMILES）で表される構造、例えば塩素を含む分子が脳-血障壁を越える可能性が高いといったパターンを識別する。こうした情報は解釈可能な知識として提示され、分子を特徴ベクトルに変換できる。これらの特徴を、解釈可能なモデル（例：ランダムフォレスト）と組み合わせることで、分子性質予測のベンチマークタスクにおいて、現状の最先端を上回る性能を達成する。著者は、このアプローチが解釈可能で、新たな洞察を提供し、分子性質予測における科学的発見を支援すると期待している。

* [Retrosynthesis prediction using an end-to-end graph generative architecture for molecular graph editing](https://www.nature.com/articles/s41467-023-38851-5) - ***Nature Communications***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=8204732491203332966)]. 有機合成における逆合成計画、すなわち目標分子を合成するために利用可能な反応セットを特定するプロセスは、依然として大きな課題である。近年、コンピュータ支援合成計画が再び注目され、深層学習に基づく逆合成予測アルゴリズムが多数提案されているが、ほとんどの既存手法はモデル予測の適用性および解釈可能性に限定されており、より実用的な精度への向上が求められている。本研究では、化学反応メカニズムにおける矢印推進形式を参考に、逆合成予測に用いる端末アーキテクチャ「Graph2Edits」を提案する。具体的には、Graph2Editsはグラフニューラルネットワークを用いて、製品グラフの編集を自動回帰的に予測し、その編集シーケンスに基づいて順次変換中間体および最終反応物を生成する。この戦略は、半テンプレートベース手法の二段階プロセスを一つのプロセスに統合し、複雑な反応における適用性を向上させ、また予測の解釈性を高める。標準ベンチマークデータセットUSPTO-50k上で評価された結果、Graph2Editsは半テンプレートベース逆合成において、55.1％のトップ1精度という優れた性能を達成している。

* [ChipNeMo: Domain-Adapted LLMs for Chip Design](https://arxiv.org/abs/2311.00176) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=5962372610489019326)]. ChipNeMoは、大規模言語モデル（LLMs）を工業用チップ設計に応用する可能性を探るプロジェクトである。販売用またはオープンソースの既存LLMを直接導入するのではなく、以下のドメイン適応技術を採用している：ドメイン適応トークン化、ドメイン適応継続事前学習、ドメイン特定指示とのモデル調整、ドメイン適応検索モデル。著者は、チップ設計向けの3つのLLM応用（エンジニアリングアシスタントチャットボット、EDAスクリプト生成、バグの要約および分析）において、これらの手法を評価した。評価結果は、ドメイン適応事前学習によって、ドメイン関連のダウンストリームタスクにおいて、ベースのLLaMA2モデルに比べて優れた性能が得られることを示しており、一般用途能力の低下は見られない。特に、最大規模のモデルChipNeMo-70Bは、エンジニアリングアシスタントチャットボットおよびEDAスクリプト生成という2つの用途において、高度な能力を持つGPT-4を上回り、バグ要約および分析においても競争力のある性能を示している。これらの結果は、大規模言語モデルが専門分野での効果を高めるためにドメイン特定カスタマイズの可能性を強調している。

* [Single-atom alloy catalysts designed by first-principles calculations and artificial intelligence](https://www.nature.com/articles/s41467-021-22048-9) - ***Nature Communications***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=6593978922251447907)]. 本論文は、密度関数入力に基づいた圧縮センシングデータ解析手法を用いて、新しい単原子合金触媒（SAACs）の発見問題を解決する。

* [Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences](https://www.pnas.org/doi/abs/10.1073/pnas.2016239118) - 『アメリカ国家科学院会議録』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=15181490380139888639&hl=en&as_sdt=0,5)]。

* [Comparability of automated human induced pluripotent stem cell culture: a pilot study](https://link.springer.com/article/10.1007/s00449-016-1659-9) - バイオプロセスとバイオシステムエンジニアリング、2016。[[All Versions](https://scholar.google.com/scholar?cluster=14666375402220991095&hl=en&as_sdt=0,5)]。

* [Virtual and augmented reality for biomedical applications](https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(21)00197-X) - ***Cell Reports Medicine***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=14732259085495422063)]. 虚擬現実（VR）、拡張現実（AR）、混合現実（MR）などの3D可視化技術は、近年の分野で人気を博している。これらのデジタル拡張現実（XR）技術は、エンターテインメントから教育まで、アクセス性とコスト面で優れたため、さまざまな分野に採用されている。XR技術は、従来の2次元ディスプレイの制約を克服し、コンテンツの浸透的な体験を可能にする。本論文は、現在の生物医学分野におけるXR技術の応用についての視点を提示し、細胞生物学の概念、多チャンネルタンパク質画像、心臓手術データ、および心臓3Dモデルを用いた事例研究を示している。また、XR技術に関連する健康リスクおよび各プラットフォームのコスト比較に関する新たな課題についても検討している。提示されたXRプラットフォームは、生物医学教育、医療訓練、手術ガイド、分子データ可視化において、研修生や学生の学習効果、医療操作の精度、複雑な生物システムの理解を高める上で有効である。

* [An augmented reality microscope with real-time artificial intelligence integration for cancer diagnosis](https://www.nature.com/articles/s41591-019-0539-7) - ***Nature Medicine***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=3280260879383275625)]. 組織サンプルの微視的評価は、がんの診断および進行段階の判定に不可欠であり、治療の選択を導く。しかし、こうした評価には大きな変動があり、世界の多くの地域では訓練を受けた病理学者が不足している。人工知能（AI）は医療アクセスと品質の向上を約束しているが、病理学における画像デジタル化のコストやAIソリューションの導入における困難が、現実の利用を妨げている。本研究では、コスト効率の高いソリューションである「拡張現実顕微鏡（ARM）」を提案している。ARMは、リアルタイムでサンプルの現在の画像にAIベースの情報を重ねることで、AIを日常業務に自然に統合できるようにしている。

* [Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory](https://ieeexplore.ieee.org/abstract/document/10059206) - 『IEEE知識とデータ工学交易誌』2023年。[[All Versions](https://scholar.google.com/scholar?cluster=949715967083833369&hl=en&as_sdt=0,10)]。

* [LEGAL-BERT: The Muppets straight out of Law School](https://aclanthology.org/2020.findings-emnlp.261/) - ***EMNLP'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=11254432523766039890&hl=en&as_sdt=0,5)]. 法的質問への回答生成、契約の分析、法的文書の要約を行い、専門知識を非専門者にもよりアクセス可能にしている。

* [BioBERT: a pre-trained biomedical language representation model for biomedical text mining](https://academic.oup.com/bioinformatics/article/36/4/1234/5566506) - ***Bioinformatics***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2783127196632783403&hl=en&as_sdt=0,5)]. 医療に関する質問に答える、関連する臨床試験を特定し、症状に基づいて疾患を診断するなど、医療情報の一般大衆への提供を促進する。

* [Finbert: A pre-trained financial language representation model for financial text mining](https://dl.acm.org/doi/abs/10.5555/3491440.3492062) - ***IJCAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17844713837232165872&hl=en&as_sdt=0,5)]. 株価の動向を予測し、金融文書を分析し、経済ニュース記事の要約を生成することで、金融知識の広く普及を支援する。

* [SciBERT: A Pretrained Language Model for Scientific Text](https://aclanthology.org/D19-1371/) - ***EMNLP'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7377999893003631695&hl=en&as_sdt=0,5)]. 科学文献の検索と総合を行い、研究者に仮説生成や実験設計の支援を提供し、科学知識の一般への提供を促進する。

* [CodeBERT: A Pre-Trained Model for Programming and Natural Languages](https://aclanthology.org/2020.findings-emnlp.139/) - ***EMNLP'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=9055786889913621082&hl=en&as_sdt=0,5)]. コードの補完、プログラミングドキュメンテーションの生成、技術サポートを提供し、非専門家にとってのプログラミング知識の提供を促進する。

*[Back to Top](#c)


### 心の理論 <a id="theory-of-mind"></a>

* [Theory of Mind](https://en.wikipedia.org/wiki/Theory_of_mind) - ***ウィキペディア***. 「心の理論（ToM）」に関するウィキペディア。これは、他者の目的、信念、欲求を推測する認知能力である。

* [Intentionality](https://plato.stanford.edu/entries/intentionality/) - ***プラトン・スタンフォード***。

* [Mental Imagery](https://plato.stanford.edu/entries/mental-imagery/) - ***プラトン・スタンフォード***。





* [The naïve utility calculus: Computational principles underlying commonsense psychology](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(16)30053-5) - ***Trends in Cognitive Sciences***, 2016. . 本レビュー論文は、人間の社会認知が、自分自身および他者を直感的に効用最大化する存在として理解している構造にあると提案している。幼い頃から、人間は無意識に、行動主体が得られる報酬と負担の期待値を比較して目標と行動を選択するという前提をもつ。この「初歩的な効用計算」により、子どもや成人が他者の行動を観察し、その信念や欲求、長期的な知識や好み、さらには性格（知識や能力、称賛や非難、親しみや無関心、敵など）を推測できる。 [[All Versions](https://scholar.google.com/scholar?cluster=6894095575934067763)] [[Preprint](http://sll.stanford.edu/docs/2016_JaraEttinger_Gweon_Schulz_Tenenbaum_TiCS.pdf)]

* [Planning with theory of mind](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(22)00185-1) - ***Trends in Cognitive Sciences***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=8461125353366208047)]. [[Preprint](https://saxelab.mit.edu/sites/default/files/publications/HoSaxeCushman2022.pdf)]. 抽象的構造因果表現を用いた計画が、理論の理解を可能にし、無数の行動の中から効率的に検索・選択を支援する。理論の理解は、抽象的かつ構造化された因果表現を必要とし、無数の行動の中から効率的に検索・選択を行う能力を持つものである。理論の理解は、他者の行動を説明するための統計的予測モデルや、他者の行動に与える影響に基づく無モデル強化学習といった、認知負荷の低い代替手段とは異なり、新しい介入の計画やその効果の予測に用いられる可能性がある。例えば、教育、感情調整、印象管理の分野で活用される。

* [Action Understanding as Inverse Planning](https://www.sciencedirect.com/science/article/pii/S0010027709001607) - ***Cognition***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=11478704181983566675)]. [[Appendix](https://ars.els-cdn.com/content/image/1-s2.0-S0010027709001607-mmc1.pdf)]. 逆計画（Inverse Planning）という理論の理解を実装した計算モデルに関する元論文。人間は、他者の行動の背後にある精神状態（目標、信念、欲求、感情など）を推論できる。本論文は、ベイズ逆計画に基づく計算フレームワークを提案し、人間の行動理解をモデル化する。このフレームワークは、合理的性の原則（世界に関する信念に基づき、目的を達成するためにほぼ合理的に計画するという期待）に基づき、意図的主体の行動に関する直感的な理論を表現する。観測された行動の確率と精神状態の事前確率をベイズ推論により統合することで、主体の行動を引き起こした精神状態を推定する。

* [Bayesian Theory of Mind: Modeling Joint Belief-Desire Attribution](https://escholarship.org/content/qt5rk7z59q/qt5rk7z59q.pdf) - ***CogSci'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=7454981153033683025)]. [[Preprint](http://web.mit.edu/9.s915/www/classes/theoryOfMind.pdf)]. 理論の理解（ToM）に関する計算フレームワークを提示する。ToMとは、信念や欲求といった他者の精神状態について推論する人間の能力である。提案されたベイズ理論の理解モデル（BToM）は、ToMの中心にある信念・欲求に依存した行動の予測モデルを、部分的に観測可能なマルコフ意思決定プロセス（POMDP）として表現し、環境内の行動観測に基づいて、主体の連続信念状態と報酬関数をベイズ推論により再構成する。

* [The Signature of All Things: Children Infer Knowledge States from Static Images](https://psyarxiv.com/f692k/) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=12380982112592086477&hl=en&as_sdt=0,5&as_ylo=2017)].

* [Bayesian Brains without Probabilities](https://www.sciencedirect.com/science/article/pii/S1364661316301565?via%3Dihub) - ***Trends in Cognitive Sciences***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=13076510377612067772&hl=en&as_sdt=0,5)]. 明示的な確率計算なしで人間が確率モデルを構築するという視点。

* [Rational quantitative attribution of beliefs, desires and percepts in human mentalizing](https://www.nature.com/articles/s41562-017-0064) - 『Nature Human Behavior』2017年。[[All Versions](https://scholar.google.com/scholar?cluster=9377509910551057835)]。[[Preprint](https://cbmm.mit.edu/sites/default/files/publications/article.pdf)]。本論文は、行動者が局所的な空間環境における動きから、その信念、欲求、感覚を共に推論する「核心的なメンタル化計算」のモデルを提示する。提案されたベイズ理論の心（BToM）モデルは、人工知能における合理的計画および状態推定の確率的逆算手法を基に構築され、古典的な期待効用行動モデルを複雑で部分的に観測可能な環境における連続行動に拡張している。

* [Machine theory of mind](http://proceedings.mlr.press/v80/rabinowitz18a.html) - 『ICML'18』2018年。[[All Versions](https://scholar.google.com/scholar?cluster=6267278380616425333)]。理論の心（ToM）とは、人間が他者の信念、欲求、意図といった精神状態を表現できる能力を指す。本研究では、メタ学習を用いて、遭遇するエージェントのモデルを構築する「理論の心ニューラルネットワーク（ToMnet）」を提案する。ToMnetは、エージェントの将来行動に対する強力な事前モデルを学習し、わずかな行動観測から、エージェントの特性や精神状態に関するより豊かな予測を導出できる。

* [Theory of mind as inverse reinforcement learning](https://www.sciencedirect.com/science/article/pii/S2352154618302055?via%3Dihub) - 『Current Opinion in Behavioral Sciences』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=14959443239271810913)]。本論文は、理論の心（ToM）——人間が他者の精神状態を論理的に推論できる能力——を逆強化学習（IRL）として形式化できるという考えをレビューする。このフレームワークでは、精神状態が行動をどのように生み出すかに関する期待は強化学習（RL）モデルに記述される。他者の行動を予測するには、仮定された信念と欲求をもとにRLモデルをシミュレーションし、精神状態の推論はそのモデルを逆算することで達成される。逆強化学習（IRL）の多くの進展は人間の理論の心を意識していないが、本論文はそれらを認知理論として捉えられた際の洞察に焦点を当てる。

* [Computational Models of Emotion Inference in Theory of Mind: A Review and Roadmap](https://onlinelibrary.wiley.com/doi/full/10.1111/tops.12371) - 『Topics in Cognitive Science』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=15919410726494658168)]。本論文は、感情認知——人間が感情についてどう考えるか——を研究するための「直感理論フレームワーク」を提案し、感情認知における推論の分類を導出する。この分類に基づき、著者は、他者の反応に対する因果推論、見えない感情の原因に関する推論、複数のヒントを用いた推論、および感情から他の精神状態への推論といった、形式的な計算モデルに関する研究をレビューする。このフレームワークは、これらの多様な推論を、共通の「直感的理論の感情」におけるベイズ推論として統合するものである。

* [The Naïve Utility Calculus as a unified, quantitative framework for action understanding](https://www.sciencedirect.com/science/article/pii/S0010028520300633) - 『Cognitive Psychology』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=10366690800692546587)]。[[Project](http://www.github.com/julianje/bishop)]。本論文は、ナイブな効用計算を確率的生成モデルとして形式化し、行動理解におけるコストと報酬のトレードオフの役割をベイズフレームワークで強調する。モデルは、観測可能な行動に基づいて、人間がエージェントの主観的なコストと報酬をどのように推論するかを定量的に正確に予測する。欲求、目標、意図を区別することで、複数の物体と複数の行動エピソードを含む空間・時間の展開する複雑な行動シナリオにも拡張される。

* [AGENT: A Benchmark for Core Psychological Reasoning](http://proceedings.mlr.press/v139/shu21a.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9729067071974484204)]. インターチュアル心理の発達研究を参考に、本論文はプロシージャルに生成された3Dアニメーションの大規模データセットを構成したベンチマークを提示する。このデータセットは、目的の優先順位、行動の効率性、観測できない制約、コストと報酬のトレードオフという4つのシナリオに構成されており、核心的な直感的psychologyの概念を検証する。結果から、人間レベルの直感的psychologyのテストを通過するためには、モデルが行動計画の構造を獲得または内蔵する必要があり、その中で物や物理法則の基本知識と効用計算を統合する必要がある。

* [Experimental Games and Social Decision Making](https://www.annualreviews.org/doi/pdf/10.1146/annurev-psych-081420-110718) - ***Annual Review of Psychology***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=4713510112126264116)]. 実験ゲームは、個人やグループの将来の結果が、自分たちの選択と他者の（グループの）選択に依存する状況をモデル化する。ゲームは、人間間およびグループ間の協力と調整の背後にある神経的・心理的メカニズムを特定するための強力なツールである。このレビュー記事は、実験ゲームの使用とアダプテーションに関する最新の進展を検討し、繰り返し相互作用、制裁を通じたパートナーの制御、および将来の相互作用におけるパートナーの選択・非選択に焦点を当てる。

* [Theory of Minds: Understanding Behavior in Groups through Inverse Planning](https://www.aaai.org/ojs/index.php/AAAI/article/view/4574) - ***AAAI'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=6755247312077985817)]. 人間のような社会的知能を持つ機械学習アルゴリズムの構築を目指し、複数アグリの行動理解をモデル化するため、新たな潜在関係表現「可合成チーム階層（CTH）」を導入する。この表現は、確率ゲームおよび多アグリ強化学習の形式論に根ざしている。本研究では、CTHをベイズ推論の対象として用い、複数アグリが相互作用する際の行動を理解するための新しいアルゴリズムを提案し、隠れた関係を推定し、将来の行動を予測できる。

* [Leveraging Facial Expressions and Contextual Information to Investigate Opaque Representations of Emotion](https://psycnet.apa.org/fulltext/2019-58384-001.pdf?auth_token=0859666184839448b848053cd7bdceb2bdf2745a) - 感情、2019。[[All Versions](https://scholar.google.com/scholar?cluster=9634378462684744548&hl=en&as_sdt=0,5)]。

* [Waiting and weighting: Information sampling is a balance between efficiency and error-reduction](https://linkinghub.elsevier.com/retrieve/pii/S0010027712002235) - 認知科学、2013。[[All Versions](https://scholar.google.com/scholar?cluster=12787722822882067638&hl=en&as_sdt=0,5)]。

* [Natural scene statistics account for the representation of scene categories in human visual cortex](https://www.sciencedirect.com/science/article/pii/S0896627313005503?via%3Dihub) - ***Neuron***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=14030885492052338412&hl=en&as_sdt=0,5)].

* [Using human brain activity to guide machine learning](https://www.nature.com/articles/s41598-018-23618-6) - 科学報告、2018年。 [[All Versions](https://scholar.google.com/scholar?cluster=12987955253653036948&hl=en&as_sdt=0,5)]。

* [Unit of visual working memory: A Boolean map provides a better account than an object does](https://psycnet.apa.org/record/2019-27729-001) - 実験心理学誌、2020年。 [[All Versions](https://scholar.google.com/scholar?cluster=14909735035752892020&hl=en&as_sdt=0,5)]。

* [The logic of universalization guides moral judgment](https://www.pnas.org/content/117/42/26158.short) - 『アメリカ国家科学院会議録』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=13482051983012049752&hl=en&as_sdt=0,5)]。

* [Learning Triadic Belief Dynamics in Nonverbal Communication from Videos](https://openaccess.thecvf.com/content/CVPR2021/html/Fan_Learning_Triadic_Belief_Dynamics_in_Nonverbal_Communication_From_Videos_CVPR_2021_paper.html) - ***CVPR'21***, 2021. . 本論文は、視覚入力のみから、行動者間の精神状態を表現・モデル化・学習・推論するため、異なる非言語的コミュニケーションのヒント（例：視線、人間の姿勢、ジェスチャー）を統合する。特に、行動者の信念を考慮した精神表現により、現実世界の状態を表し、各行動者の精神状態における信念を推論する。複数の信念と現実世界の状態を統合することで、2つの行動間の相互作用において「五つの心」が形成される。この「五つの心」モデルは、過去の無限再帰による信念推論の手法とは異なり、行動者の信念が「共通の心」に収束する。この表現を基に、本研究は階層的なエネルギーベースモデルを構築し、すべての五つの心を同時に追跡・予測する。この新たな視点から、社会的イベントは非言語的コミュニケーションと信念動態の連続的な過程として解釈され、従来のキーフレーム動画要約を越える。 [[All Versions](https://scholar.google.com/scholar?cluster=15365483338824697316)] [[Preprint](https://arxiv.org/abs/2104.02841)]

* [Ten-month-old infants infer the value of goals from the costs of actions](https://dspace.mit.edu/bitstream/handle/1721.1/112291/ivc_full_preprint.pdf?sequence=1&isAllowed=y) - ***Science***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=11862940312128630925&hl=en&as_sdt=0,5)]. 子どもたちの理論的意図理解（ToM）能力に関する証拠の一つ。

* [Origins of the concepts cause, cost, and goal in prereaching infants](https://www.pnas.org/content/116/36/17747) - 『アメリカ国家科学院会議録』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=15973074852436355789&hl=en&as_sdt=0,5)]。

* [Baby Intuitions Benchmark (BIB): Discerning the goals, preferences, and actions of others](https://static1.squarespace.com/static/595a9f155016e1f7ead6edf1/t/61eeb3e7bbc41a23cd288f8a/1643033708945/Gandhi_etal_2021.pdf) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=16514364601966350574)].

* [Intentonomy: a Dataset and Study towards Human Intent Understanding](https://arxiv.org/pdf/2011.05558.pdf) - ***CVPR'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=5268870345003195142&hl=en&as_sdt=0,5)]. ソーシャルメディア上に意図的に投稿された画像に関する大規模データベース。

* [Adventures in Flatland: Perceiving Social Interactions Under Physical Dynamics](https://www.tshu.io/HeiderSimmel/CogSci20/Flatland_CogSci20.pdf) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1928005249823745390&hl=en&as_sdt=0,5)].

* [PHASE: PHysically-grounded Abstract Social Events for Machine Social Perception](https://ojs.aaai.org/index.php/AAAI/article/view/16167) - ***AAAI'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=15536873427310696150&hl=en&as_sdt=0,5)]。[[Project](https://tshu.io/PHASE/)]。

* [Watch-And-Help: A Challenge for Social Perception and Human-AI Collaboration](https://openreview.net/forum?id=w_7JMpGZRh0) - ***ICLR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=16340001407726295133)]。

* [Evaluating and Modeling Social Intelligence: A Comparative Study of Human and AI Capabilities](https://escholarship.org/uc/item/2j53v5nv) - ***CogSci'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=902767361177896884)]. 本研究は、社会動態の包括的な理論フレームワークを構築し、逆推論（IR）および逆逆計画（IIP）という2つの評価タスクを導入した。さらに、再帰的ベイズ推論に基づく計算モデルを提示し、多様な人間の行動パターンを解明する能力を持つものとした。広範な実験と詳細な分析により、人間が最新のGPTモデルを全体的に上回り、ゼロショット学習、ワンショット一般化、マルチモーダルへの適応において優れた性能を示したことが明らかになった.

*[Back to Top](#c)


### 類推 <a id="analogy"></a>

* [Metaphor](https://plato.stanford.edu/entries/metaphor/) - ***プラトン・スタンフォード***. 「比喩」に関する形式的哲学的アプローチ。これは詩的または修辞的に野心的な言葉の使用であり、文脈的に表現されたものであり、字面の使用とは異なっている。

* [Analogy and Analogical Reasoning](https://plato.stanford.edu/entries/reasoning-analogy/) - ***プラトン・スタンフォード***。類似性（アナロジー）についての計算哲学的アプローチ。二つの対象または対象のシステム間の比較であり、それらが似ているとされる点を強調するもの。

* [A Cognitive Theory of Metaphor](https://1lib.net/book/1165963/e9aa3d) - ***MIT Press***, 1985. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=a+cognitive+theory+of+metaphor&btnG=)]. 語彙の認知的解釈.

* [The structure-mapping engine: Algorithm and examples](https://www.sciencedirect.com/science/article/abs/pii/0004370289900775) - ***Artificial Intelligence***, 1989. [[All Versions](https://scholar.google.com/scholar?cluster=16104901325436513899&hl=en&as_sdt=0,5)]. 比喩の計算的実装。

* [Structure mapping in analogy and similarity](https://cogsci.ucsd.edu/~coulson/203/gentner-markman-97.pdf) - ***American Psychologist***, 1997. [[All Versions](https://scholar.google.com/scholar?cluster=3497411606978611830&hl=en&as_sdt=0,5)]. 类推と類似性判断を統一する視点の提案.

* [A theory of relation learning and cross-domain generalization](https://psycnet.apa.org/record/2022-26663-001) - ***Psychological Review***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=8559821723107269122&hl=en&as_sdt=0,5)]. 类推を領域間一般化として捉える視点に関する包括的なレビュー.

* [Emergence of analogy from relation learning](https://www.pnas.org/content/pnas/116/10/4176.full.pdf) - ***Proceedings of the National Academy of Sciences***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=4877125748339538047&hl=en&as_sdt=0,5)]. 言語モデルにおける類推の特徴.

* [Analogies Explained: Towards Understanding Word Embeddings](https://proceedings.mlr.press/v97/allen19a.html) - ***ICML'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=15445529659618849253&hl=en&as_sdt=0,5)]. 単語埋め込みにおける類推能力の解明.

* [Skip-Gram − Zipf + Uniform = Vector Additivity](https://aclanthology.org/P17-1007/) - ***ACL'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=11732363456979525246&hl=en&as_sdt=0,5)].

* [Generalize and Blend: Concept Blending Based on Generalization, Analogy, and Amalgams](https://www.iiia.csic.es/~enric/papers/generalize_and_blend.pdf) - ***ICCC'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=11073359237116879862&hl=en&as_sdt=0,5)].

* [Analogy-preserving Semantic Embedding for Visual Object Categorization](http://proceedings.mlr.press/v28/juhwang13.pdf) - ***ICML'13***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=9332855910734484101&hl=en&as_sdt=0,5)]. 比喩が機械学習に初めて適用された例.

* [VISALOGY: Answering Visual Analogy Questions](https://proceedings.neurips.cc/paper/2015/file/45f31d16b1058d586fc3be7207b58053-Paper.pdf) - ***NeurIPS'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=7665427758655324654&hl=en&as_sdt=0,5)].

* [Detecting Unseen Visual Relations Using Analogies](https://ieeexplore.ieee.org/document/9010418) - ***CVPR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=16686853801653819556&hl=en&as_sdt=0,5)].

* [Analogy between concepts](https://www.sciencedirect.com/science/article/pii/S0004370218301863) - ***Artificial Intelligence***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=1397905953174123757&hl=en&as_sdt=0,5)]. 比喩に関する数学的解説。

* [Learning to Make Analogies by Contrasting Abstract Relational Structure](https://arxiv.org/abs/1902.00120) - ***ICLR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=15521573039503233138&hl=en&as_sdt=0,5)].

* [Sky + Fire = Sunset. Exploring Parallels between Visually Grounded Metaphors and Image Classifiers](https://aclanthology.org/2020.figlang-1.pdf#page=140) - ***ACL'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=5747285277687442001&hl=en&as_sdt=0,5)].

* [Analogy as Nonparametric Bayesian Inference over Relational Systems](https://arxiv.org/pdf/2006.04156.pdf) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1798148167130120057&hl=en&as_sdt=0,5)].

* [Visual Analogy: Deep Learning Versus Compositional Models](https://www.cs.jhu.edu/~alanlab/Pubs21/ichien2021visual.pdf) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1187822306970312749&hl=en&as_sdt=0,5)]. 類似性判断における人間と深層学習の比較.

* [Preschoolers and adults make inferences from novel metaphors](https://escholarship.org/content/qt3j2576vv/qt3j2576vv.pdf) - ***CogSci'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=16038983545360341739&hl=en&as_sdt=0,44)]. 語の比喩理解が異なる認知発達段階で可能であるという証拠。

* [Similarity involving attributes and relations: Judgments of similarity and difference are not inverses](https://pcl.sitehost.iu.edu/rgoldsto/pdfs/simdiff.pdf) - 『心理科学』1990年。[[All Versions](https://scholar.google.com/scholar?cluster=13205938250772079784&hl=en&as_sdt=0,5)].

*[Back to Top](#c)


### 因果性 <a id="causality"></a>

* [Causality](https://en.wikipedia.org/wiki/Causality) - ***ウィキペディア***。原因性（因果性）に関するウィキペディアの解説。あるイベント、プロセス、状態、または対象（原因）が別のイベント、プロセス、状態、または対象（結果）の生成に影響を与えることで、原因は結果に対して一部の責任を持ち、結果は原因に対して一部の依存性を持つもの。

* [Causal Models](https://plato.stanford.edu/entries/causal-models/) - ***プラトン・スタンフォード***。因果モデルについての計算哲学的アプローチ。個々のシステムまたは集団における因果関係を数学的に表現するモデル。

* [Causal Theories of Mental Content](https://plato.stanford.edu/entries/content-causal/) - ***プラトン・スタンフォード***。心の内容に関する因果理論についての計算哲学的アプローチ。思考が何についてあるかを説明するもの。

* [Identification of Causal Effects Using Instrumental Variables](http://www.jakebowers.org/ITVExperiments/angristimbensrubin96.pdf) - 『アメリカ統計学会誌』1996年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=17166265099721941605)].

* [Predictive and Diagnostic Learning Within Causal Models: Asymmetries in Cue Competition](https://www.psych.uni-goettingen.de/de/cognition/publikationen-dateien-waldmann/1992_predictive_vs_diagnostic.pdf) - 『実験心理学誌』1992年。[[All Versions](https://scholar.google.com/scholar?cluster=9614241045842043939&hl=en&as_sdt=0,5)]。因果関係と関連の区別に関する実験的証拠.

* [Causal Reasoning](https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780195376746.001.0001/oxfordhb-9780195376746-e-46) - 『オックスフォード認知心理学ハンドブック』2013年。[[All Versions](https://scholar.google.com/scholar?cluster=11361740093816709089&hl=en&as_sdt=0,5)].

* [Reasoning with cause and effect](https://ftp.cs.ucla.edu/pub/stat_ser/R265.pdf) - 1998年。ジュデア・ペールのベイズネットワーク上の操作による因果推論に関するチュートリアル。

* [The Seven Tools of Causal Inference, with Reflections on Machine Learning](https://dl.acm.org/doi/pdf/10.1145/3241036) - 『ACMの通信』2019年。[[All Versions](https://scholar.google.com/scholar?cluster=13296019510897277617&hl=en&as_sdt=0,5)]。ジュデア・ペールによる確率グラフモデルにおける因果推論に関するレビュー。

* [Toward Causal Representation Learning](https://cardiacmr.hms.harvard.edu/files/cardiacmr/files/toward_causal_representation_learning.pdf) - 『IEEEの会議記録』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=15629454810797806102&hl=en&as_sdt=0,5)]。ヨシュア・ベンジオによる因果推論を表現学習問題として捉える視点に関するレビュー。

* [Theory-Based Causal Induction](https://cocosci.princeton.edu/tom/papers/tbci.pdf) - 『心理学レビュー』2009年。[[All Versions](https://scholar.google.com/scholar?cluster=13980129728092173387&hl=en&as_sdt=0,5)]。トーマス・グリフィスによる因果ベイズ理論帰納に関するレビュー。

* [Theory-Based Causal Transfer: Integrating Instance-Level Induction and Abstract-Level Structure Learning](https://ojs.aaai.org//index.php/AAAI/article/view/5483) - 『AAAI20』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=9411622427165139667&hl=en&as_sdt=0,5)]。因果移動に関する計算的アプローチ。

* [Inferring causal networks from observations and interventions](https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog2703_6) - 『認知科学』2010年。[[All Versions](https://scholar.google.com/scholar?cluster=12050301037347772984&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Constraints on Hypothesis Selection in Causal Learning](https://cogsci.mindmodeling.org/2015/papers/0418/paper0418.pdf) - ***CogSci'15***, 2015. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=2005&sciodt=0%2C5&cites=16920774374067505248&scipsc=&q=Constraints+on+hypothesis+selection+in+causal+learning&btnG=)].

* [Eye-tracking causality](http://cocolab.stanford.edu/papers/GerstenbergEtAl17_PsychScience.pdf) - 『心理科学』2017年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=17518200401109470519)]。

* [What happened? Reconstructing the past through vision and sound](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=d0TfP8EAAAAJ&sortby=pubdate&citation_for_view=d0TfP8EAAAAJ:S16KYo8Pm5AC) - 2021. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=12975579257004398798)].

* [How do people generalize causal relations over objects? A non-parametric Bayesian account](https://link.springer.com/article/10.1007/s42113-021-00124-z) - ***Computational Brain & Behavior***, 2022. . 人々は、因果関係がどの程度の範囲に適用されるかをどのように判断するのか。新しい状況が既存の因果法則か新しい因果法則に従うかを判断するために、人々がどのような特徴を用いるのか。そして、こうした判断を迅速かつ効率的に行うためにはどうすればよいのか。本論文は、参加者が1つの（実験1）または複数の（実験2）物体間の因果相互作用から一般化するという2つの実験を通じて、これらの問いに答える。各実験では、参加者が主体物体が受容物体に作用し、受容物体に変化をもたらす様子を観察する。 [[All Versions](https://scholar.google.com/scholar?cluster=3364672295201228487)] [[Preprint](https://psyarxiv.com/x57hf/)]

* [Causal Reasoning in Rats](https://www.psych.uni-goettingen.de/de/cognition/publikationen-dateien-waldmann/2006_science.pdf) - ***Science***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=17987039255457850949&hl=en&as_sdt=0,5)]. 意識のある動物が因果推論を行う能力の証拠の一つ。

* [Do New Caledonian crows solve physical problems through causal reasoning?](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.183.4674&rep=rep1&type=pdf) - 『ロイヤル・ソサイエティ・B：生物科学誌』2009年。[[All Versions](https://scholar.google.com/scholar?cluster=18374985546068164189&hl=en&as_sdt=0,5)]。知能ある動物が原因推論を行う能力に関する証拠の一つ。
 
* [Do six-month-old infants perceive causality?](http://fitelson.org/woodward/leslie.pdf) - 『コグニション』1987年。[[All Versions](https://scholar.google.com/scholar?cluster=14270905342434182186&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)


### 常識 <a id="commonsense"></a>

#### 直観物理 <a id="intuitive-physics"></a>

* [Intuitive Physics Reading List](https://github.com/lishiqianhugh/Intuitive_Physics_Reading_List) - GitHub。Liのしあきせんが維持している直観的物理学に関する読書リスト。

* [Intuitive Physics: Current Research and Controversies](https://www.sciencedirect.com/science/article/pii/S1364661317301262) - 『コグニティブ・サイエンスのトレンド』2018年。[[All Versions](https://scholar.google.com/scholar?start=0&hl=en&as_sdt=0,5&cluster=12085981794958916203)]。盧洪靖による直観的物理学に関するレビュー。

* [Simulation as an engine of physical scene understanding](https://www.pnas.org/content/pnas/110/45/18327.full.pdf) - 『アメリカ国家学術院誌』2013年。。直観的物理学をコンピュータでシミュレーションする初めての試み。 [[All Versions](https://scholar.google.com/scholar?cluster=5892822406285231676&hl=en&as_sdt=0,5)] [[Appendix](https://www.pnas.org/content/pnas/suppl/2013/10/18/1306572110.DCSupplemental/pnas.201306572SI.pdf?targetid=nameddest%3DSTXT)]

* [Functional neuroanatomy of intuitive physical inference](https://www.pnas.org/doi/pdf/10.1073/pnas.1610344113) - 『ナショナルアカデミーofサイエンスの会議録』2016年。[[All Versions](https://scholar.google.com/scholar?cluster=1792195093536891402&hl=en&as_sdt=0,5)]。人間の脳における直感的物理学の機能部分の証拠についての研究。

* [Mind Games: Game Engines as an Architecture for Intuitive Physics](https://www.sciencedirect.com/science/article/pii/S1364661317301134) - 『コグニティブサイエンスのトレンド』2017年。[[All Versions](https://scholar.google.com/scholar?cluster=14527964477161848029&hl=en&as_sdt=2005&sciodt=0,5)]。トマー・ウルマンによるシミュレーションに基づく直感的物理学に関するレビュー。

* [Learning physical parameters from dynamic scenes](https://www.sciencedirect.com/science/article/abs/pii/S0010028517301822) - 『コグニティブ・パーソロジー』2017年。[[All Versions](https://scholar.google.com/scholar?cluster=5103729321433959736&hl=en&as_sdt=0,5)]。

* [Limits on Simulation Approaches in Intuitive Physics](https://www.sciencedirect.com/science/article/pii/S0010028521000190) - 『コグニティブ・パーソロジー』2021年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=6329029167380621767)]。エルネスト・デイビスが提唱する、物理的推論は直感ではなく論理的推論であるという見解。

* [Partial Mental Simulation Explains Fallacies in Physical Reasoning](https://psyarxiv.com/y4a8x/download?format=pdf) - 『コグニティブ・ニューロンユルギュリー』2022年。[[All Versions](https://scholar.google.com/scholar?cluster=15541954459060383152&hl=en&as_sdt=2005)]。

* [Intuitive physics learning in a deep-learning model inspired by developmental psychology](https://www.nature.com/articles/s41562-022-01394-8) - ***Nature Human Behavior***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=13803979681049451699&hl=en&as_sdt=0,5)]. 感覚物理学の直観的理解を評価するための機械学習データセットで、発達心理学における期待違反（VoE）パラダイムを採用；子供の視覚認知研究を参考に、視覚データから直感的な物理学を学習する深層学習システム。

* [PHYRE: A New Benchmark for Physical Reasoning](https://proceedings.neurips.cc/paper/2019/hash/4191ef5f6c1576762869ac49281130c9-Abstract.html) - ***NeurIPS'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=9555658528231205655&hl=en&as_sdt=0,5)]. AIが物理的推論を行うためのベンチマーク。

* [Phy-Q as a measure for physical reasoning intelligence](https://www.nature.com/articles/s42256-022-00583-4) - ***Nature Machine Intelligence***, 2023. [[NMI Challenge](https://www.nature.com/articles/s42256-019-0072-x)]. AIが物理的推論を行うためのインタラクティブなベンチマーク。

*[Back to Top](#c)

#### AIの常識推論 <a id="ai-commonsense-reasoning"></a>

* [Representations of Commonsense Knowledge](https://www.sciencedirect.com/book/9781483207704/representations-of-commonsense-knowledge) - ***Morgan Kaufmann***, 1990. [[All Versions](https://scholar.google.com/scholar?cluster=8861902735724600978)]. 感覚的知識に関する古典的な書籍。

* [Towards a theory of commonsense visual reasoning](https://link.springer.com/chapter/10.1007%2F3-540-53487-3_59) - ***FSTTCS***, 1990. [[All Versions](https://scholar.google.com/scholar?cluster=13178231862265713961&hl=en&as_sdt=0,5)]. 視覚的感覚的知識に関する元論文。

* [Commonsense reasoning and commonsense knowledge in artificial intelligence](http://cs.wellesley.edu/~cs125/reading/commonsenseAI.pdf) - ***Communications of the ACM***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=13786590180441485203&hl=en&as_sdt=0,5)]. AIにおける共通知識に関するゲリー・マーシュのレビュー

* [From Recognition to Cognition: Visual Commonsense Reasoning](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8953217) - ***CVPR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=15467433880059136365&hl=en&as_sdt=0,5)]. [[Project](http://visualcommonsense.com/)].

* [PIQA: Reasoning about Physical Commonsense in Natural Language](https://arxiv.org/pdf/1911.11641.pdf) - ***AAAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=10110424163152713144&hl=en&as_sdt=0,5)].

* [Visual Commonsense R-CNN](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9156347) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=6886229776034162585&hl=en&as_sdt=0,5)].

* [Abductive Commonsense Reasoning](https://openreview.net/pdf?id=Byg1v1HKDB) - ***ICLR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=16544200144479839958&hl=en&as_sdt=0,5)]. 大規模言語モデルにおける帰納的共通知識推論

* [VisualCOMET: Reasoning About the Dynamic Context of a Still Image](https://link.springer.com/chapter/10.1007%2F978-3-030-58558-7_30) - ***ECCV'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7681600847940772451&hl=en&as_sdt=0,5)].

* [The Abduction of Sherlock Holmes: A Dataset for Visual Abductive Reasoning](https://link.springer.com/chapter/10.1007/978-3-031-20059-5_32) - ***ECCV'22***, 2022. [[All Versions](https://scholar.google.com/scholar?cluster=18355807581692234364)]. [[Preprint](https://arxiv.org/abs/2202.04800)]. 本論文では、103,000枚の画像から構成されたSherlockという注釈データセットを提示し、画像の内容を超えて抽象的推論能力を評価するためのテストデータセットを提供する。データセットの構築プロセスでは、参加者がまず画像内の重要なヒント（例：物体、行動）を観察・特定し、それらに基づいてシーンの妥当な推論を提供する自由視聴パラダイムが採用されている。

* [UNcommonsense Reasoning: Abductive Reasoning about Uncommon Situations](https://aclanthology.org/2024.naacl-long.469/) - ***NAACL'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=470445696014235795)]. 本論文は、不自然な結果をもつ文脈に対して、その結果が文脈内でより可能性のあるものになるように説明を生成する「不commonsenseの抽象的推論」タスクを検討する。

* [Experience Grounds Language](https://aclanthology.org/2020.emnlp-main.703.pdf) - ***EMNLP'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=3734668471751920487&hl=en&as_sdt=0,5)]. 計算言語学の未来に関する視点——共通知識に基づく、体験的言語。

* [Broaden the Vision: Geo-Diverse Visual Commonsense Reasoning](https://aclanthology.org/2021.emnlp-main.162/) - ***EMNLP'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=12305856131717604775&hl=en&as_sdt=0,5)].

* [Human-like property induction is a challenge for large language models](http://www.charleskemp.com/papers/hanrpk_humanlikepropertyinductionisachallengeforlargelanguagemodels.pdf) - ***CogSci'22***, 2022.

* [SwiftSage: A Generative Agent with Fast and Slow Thinking for Complex Interactive Tasks](https://arxiv.org/abs/2305.17390) - ***ネイリプス2023***、2023年。 [[All Versions](https://scholar.google.com/scholar?cluster=3844178012869500706&hl=en&as_sdt=0,5)]。 [[Project](https://swiftsage.github.io/)]。

*[Back to Top](#c)

#### 常識知識ベース <a id="commonsense-knowledgebase"></a>

* [wikiHow](https://www.wikihow.com/Main-Page) - ***wikiHow.com***。wikiHowは、さまざまな分野やテーマにわたるステップバイステップの「ハウツー」プロトコルをウェブサイトホスティングするサービス。

* [The World Avatar](https://theworldavatar.io/) - ***ザ・ワールド・アバター™***。分子、建物、都市、国などに概念と関係を結びつける大規模な動的知識グラフ。

* [CYC: A Large-Scale Investment in Knowledge Infrastructure](https://faculty.cc.gatech.edu/~isbell/classes/reading/papers/lenat95cyc.pdf) - ***Communications of the ACM***, 1995. [[All Versions](https://scholar.google.com/scholar?cluster=6505009388871605141&hl=en&as_sdt=0,5)]. 人間の知識から大規模な共通知識ベースを構築する最初の試み.

* [ConceptNet 5.5: An Open Multilingual Graph of General Knowledge](https://arxiv.org/pdf/1612.03975.pdf) - ***AAAI'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=7089916805257737701&hl=en&as_sdt=0,5)]. ConceptNetの最新版.

* [The Public Acquisition of Commonsense Knowledge](https://www.aaai.org/Library/Symposia/Spring/2002/ss02-09-011.php) - ***Proceedings of AAAI Spring Symposium on Acquiring (and Using) Linguistic (and World) Knowledge for Information Access***, 2002. [[All Versions](https://scholar.google.com/scholar?cluster=12533779219524472080&hl=en&as_sdt=0,5)]. 人間がインターネット上で行う活動から共通知識を取得する最初の試み。

* [Open Mind Common Sense: Knowledge Acquisition from the General Public](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.472.914&rep=rep1&type=pdf) - ***OTM コンファレド・インターナショナル・コンファレンス'02***、2002年。 [[All Versions](https://scholar.google.com/scholar?cluster=11431785236825227404&hl=en&as_sdt=0,5)]..

* [Verbosity: A Game for Collecting Common-Sense Facts](http://www.aladdin.cs.cmu.edu/papers/pdfs/y2006/verbosity.pdf) - ***CHI'06***, 2006. [[All Versions](https://scholar.google.com/scholar?cluster=7793704394155465847&hl=en&as_sdt=0,5)].

* [Designing games with a purpose](https://dl.acm.org/doi/fullHtml/10.1145/1378704.1378719) - 『ACMの通信』2008年。[[All Versions](https://scholar.google.com/scholar?cluster=18332117920150730595&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Acquiring Comparative Commonsense Knowledge from the Web](https://people.mpi-inf.mpg.de/~ntandon/papers/aaai-2014-tandon.pdf) - ***AAAI'14***, 2014. [[All Versions](https://scholar.google.com/scholar?cluster=16641273554706459553&hl=en&as_sdt=0,5)].

* [Visual Concept Programming: A Visual Analytics Approach to Injecting Human Intelligence at Scale](https://ieeexplore.ieee.org/abstract/document/9904017) - ***IEEE Transactions on Visualization and Computer Graphics***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=10724509334112758172&hl=en&as_sdt=0,5)]. 本論文では、大量の画像データを視覚概念を用いてプログラミングする初めての視覚分析手法である「Visual Concept Programming」を提示する。

*[Back to Top](#c)


### 帰納論理とプログラム合成 <a id="inductive-logic--program-synthesis"></a>

* [Inductive Logic](https://plato.stanford.edu/entries/logic-inductive/) - ***プラトン・スタンフォード***。帰納論理についての計算哲学的アプローチ。証拠的支援に関する論理。

* [First-order Model Theory](https://plato.stanford.edu/entries/modeltheory-fo/) - ***プラトン・スタンフォード***。第一順序モデル理論についての計算哲学的アプローチ。第一順序言語における記述とそれらを満たす構造の間の関係を扱う数学の一分野。

* [Paraconsistent Logic](https://plato.stanford.edu/entries/logic-paraconsistent/) - ***プラトン・スタンフォード***。パラコンシステント論理についての計算哲学的アプローチ。論理が爆発的でない限り、すべての論理はパラコンシステントである。

* [Logical Consequence](https://plato.stanford.edu/entries/logical-consequence/) - ***プラトン・スタンフォード***。論理的帰結についての計算哲学的アプローチ。妥当な論証における前提と結論の間の関係について。

* [Logic Pluralism](https://plato.stanford.edu/entries/logical-pluralism/) - ***プラトン・スタンフォード***。論理多様性（論理pluralism）についての計算哲学的アプローチ。一つ以上の正しい論理が存在するという見解。

* [The Emergence of First-Order Logic](https://plato.stanford.edu/entries/logic-firstorder-emergence/) - ***プラトン・スタンフォード***。第一順序論理の出現についての計算哲学的アプローチ。第一順序論理が自然な帰結をもつことについての主な内容。

* [Second-order and Higher-order Logic](https://plato.stanford.edu/entries/logic-higher-order/) - ***プラトン・スタンフォード***。

* [Program Synthesis](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/10/program_synthesis_now.pdf) - 『プログラミング言語の基礎とトレンド』2017. [[All Versions](https://scholar.google.com/scholar?cluster=5442933587668978421&hl=en&as_sdt=0,5)]. スミット・グルワニによるプログラム合成に関する包括的なレビュー.

* [The Discovery of the Equator or Concept Driven Learning](https://www.ijcai.org/Proceedings/83-1/Papers/109.pdf) - 『IJCAI'83』1983. [[All Versions](https://scholar.google.com/scholar?cluster=15712225225140903169&hl=en&as_sdt=0,5)]. 二階メタルールに関する元論文.

* [Towards combining inductive logic programming with Bayesian networks](https://link.springer.com/chapter/10.1007%2F3-540-44797-0_10) - ***ILP'01***, 2001. [[All Versions](https://scholar.google.com/scholar?cluster=2904180673047700407&hl=en&as_sdt=0,5)].

* [Meta-interpretive learning: application to grammatical inference](http://www.doc.ic.ac.uk/~shm/Papers/metagol_gram.pdf) - 『マシンラーニング』2014. [[All Versions](https://scholar.google.com/scholar?cluster=17075313112718885592&hl=en&as_sdt=0,5)]. ステファン・ムーグレットンによるメタ解釈学習（MIL）に関する元論文.

* [Learning Efficient Logical Robot Strategies Involving Composable Objects](http://andrewcropper.com/pubs/ijcai15-metagolo.pdf) - ***IJCAI'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=5109851972354087162&hl=en&as_sdt=0,5)].

* [Learning Higher-Order Logic Programs through Abstraction and Invention](http://andrewcropper.com/pubs/ijcai16-metafunc.pdf) - ***IJCAI'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=10945054943203858325&hl=en&as_sdt=0,5)].

* [How Much Can Experimental Cost Be Reduced in Active Learning of Agent Strategies?](https://link.springer.com/chapter/10.1007%2F978-3-319-99960-9_3) - ***ILP'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=8152380236842970357&hl=en&as_sdt=0,5)].

* [Meta-Interpretive Learning from noisy images](https://link.springer.com/article/10.1007/s10994-018-5710-8) - 機械学習、2018年。 [[All Versions](https://scholar.google.com/scholar?cluster=5719375383968868329&hl=en&as_sdt=0,5)]。

* [Learning efficient logic programs](http://andrewcropper.com/pubs/mlj18-metaopt.pdf) - 機械学習、2018年。 [[All Versions](https://scholar.google.com/scholar?cluster=17955696870252443734&hl=en&as_sdt=0,5)]。

* [Learning higher-order logic programs](http://andrewcropper.com/pubs/mlj19-metaho.pdf) - 機械学習、2019年。 [[All Versions](https://scholar.google.com/scholar?cluster=6723896359456002413&hl=en&as_sdt=0,5)]。

* [Logical reduction of metarules](http://andrewcropper.com/pubs/mlj19-reduce.pdf) - 機械学習、2019。 [[All Versions](https://scholar.google.com/scholar?cluster=4577603126537024540&hl=en&as_sdt=0,5)]。

* [Playgol: Learning Programs Through Play](http://andrewcropper.com/pubs/ijcai19-playgol.pdf) - ***IJCAI'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=556522464212000763&hl=en&as_sdt=0,5)].

* [Machine Discovery of Comprehensible Strategies for Simple Games Using Meta-interpretive Learning](https://link.springer.com/article/10.1007%2Fs00354-019-00054-2) - 新世代コンピューティング、2019。 [[All Versions](https://scholar.google.com/scholar?cluster=11019349634035542991&hl=en&as_sdt=0,5)]。

* [Forgetting to Learn Logic Programs](http://andrewcropper.com/pubs/aaai20-forgetgol.pdf) - ***AAAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=13676986733133377042&hl=en&as_sdt=0,5)].

* [Turning 30: New Ideas in Inductive Logic Programming](https://www.ijcai.org/proceedings/2020/673) - ***IJCAI'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17980870844719684257&hl=en&as_sdt=0,5)].

* [Inductive logic programming at 30: a new introduction](https://arxiv.org/abs/2008.07912) - 『人工知能研究ジャーナル』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=317114056670544302&hl=en&as_sdt=0,5)]。誘導論理プログラミングに関する30年間の包括的なレビュー。

* [Learning programs by learning from failures](https://arxiv.org/pdf/2005.02259.pdf) - 『機械学習』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=6797200487935462023&hl=en&as_sdt=0,5)]。

* [Complete Bottom-Up Predicate Invention in Meta-Interpretive Learning](https://www.ijcai.org/proceedings/2020/320) - 『IJCAI'20』2020年。[[All Versions](https://scholar.google.com/scholar?cluster=6085183078630665234&hl=en&as_sdt=0,5)]。

* [Meta-Interpretive Learning as Metarule Specialisation](https://arxiv.org/pdf/2106.07464.pdf) - 『機械学習』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=14684315775211086859&hl=en&as_sdt=0,5)]。

* [Qualitative choice logic](https://www.sciencedirect.com/science/article/pii/S0004370204000591) - 『人工知能』2004年。[[All Versions](https://scholar.google.com/scholar?cluster=1586187056162326386&hl=en&as_sdt=0,5)]。

* [Derivative-free optimization of high-dimensional non-convex functions by sequential random embeddings](https://www.ijcai.org/Proceedings/16/Papers/278.pdf) - ***IJCAI'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=15955040483290586781&hl=en&as_sdt=0,5)].

* [Finitely Generated Groups and First-Order Logic](https://londmathsoc.onlinelibrary.wiley.com/doi/abs/10.1112/S0024610704006106) - 『ロンドン数学学会誌 第二シリーズ』、2005年。[[All Versions](https://scholar.google.com/scholar?cluster=3457158221419711506&hl=en&as_sdt=0,5)]。

* [Leveraging Language for Abstraction and Program Search](https://vigilworkshop.github.io/static/papers-2021/25.pdf) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Leveraging+Language+for+Abstraction+and+Program+Search&btnG=)].

* [Program Synthesis Guided Reinforcement Learning](https://proceedings.neurips.cc/paper/2021/hash/f7e2b2b75b04175610e5a00c1e221ebb-Abstract.html) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=17353674428642875269&hl=en&as_sdt=0,5)].

* [Learning Part-Based Abstractions for Visual Object Concepts](https://cogtoolslab.github.io/pdf/wang_cogsci_2021a.pdf) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?lookup=0&q=Learning+Part-Based+Abstractions+for+Visual+Object+Concepts&hl=en&as_sdt=0,5)].

* [Program Synthesis with Large Language Models](https://arxiv.org/abs/2108.07732) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=15213050540818392833)]. 本論文は、一般用途プログラミング言語におけるプログラム合成に向けた現行世代の大規模言語モデルの限界を検討するものである。

* [Combining Functional and Automata Synthesis to Discover Causal Reactive Programs](https://dl.acm.org/doi/abs/10.1145/3571249) - ***POPL'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=10470162446663474225&as_sdt=0,5)]. 観測データから機能的反応プログラムを合成する新しいアルゴリズムを提案し、観測された状態間の遷移関数を生成する機能的合成ステップと、観測を完全に説明するために必要な潜在状態を追加する自動機合成ステップを繰り返す。

* [Synthesizing theories of human language with Bayesian program induction](http://cap.csail.mit.edu/sites/default/files/research-pdfs/Synthesizing%20theories%20of%20human%20language%20with%20Bayesian%20program%20induction.pdf) - 『Nature Communications』2022年。[[All Versions](https://scholar.google.com/scholar?cluster=8603772394100237159&hl=en&as_sdt=0,5)]。

* [From Word Models to World Models: Translating from Natural Language to the Probabilistic Language of Thought](https://arxiv.org/abs/2306.12672) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=13778788929096574993)]. 理論的意味構築（Rational Meaning Construction）は、神経言語モデルと合理的推論を用いた言語に基づく思考のための計算フレームワークであり、自然言語から確率的思考言語（PLoT）への文脈依存マッピングとして意味を捉える。PLoTは、生成的ワールドモデリングに用いられる汎用シンボリック基盤である。

* [Latent Programmer: Discrete Latent Codes for Program Synthesis](https://proceedings.mlr.press/v139/hong21a.html) - ***ICML'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=9789877360194738968)]. Latent Programmerという二段階のプログラム合成手法を導入する論文。入力/出力例から離散的な潜在コードを予測し、その後、ターゲット言語でプログラムを生成する。

* [PAL: Program-aided Language Models](https://proceedings.mlr.press/v202/gao23f) - ***ICML'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=14898051625978777315&hl=en&as_sdt=0,5)]. プログラム生成をLLMが自然言語問題を読み取り、中間的な推論ステップとして生成する手法を提示するが、解決ステップはPythonインタープリターや他のランタイムに任せる。PALでは、自然言語問題を実行可能なステップに分解する作業がLLMの唯一の学習タスクとなり、解決はインタープリターや他のランタイムに委ねられる。

* [Large Language Models Meet NL2Code: A Survey](https://aclanthology.org/2023.acl-long.411/) - ***ACL'23***, 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11868015824802341463&hl=en&as_sdt=0,5)]. [[NL2Code Website](https://nl2code.github.io/)]. 自然言語からコード生成（NL2Code）向けの27の既存大規模言語モデルについての包括的な調査を提示し、ベンチマークや評価指標をレビュー。大規模言語モデルがNL2Codeにおいて成功するための鍵となる要因は「規模の大きさ」「高品質データ」「専門的なチューニング」とされる。

* [A Large-Scale Survey on the Usability of AI Programming Assistants: Successes and Challenges](https://dl.acm.org/doi/abs/10.1145/3597503.3608128) - ***ICSE'24***, 2024. [[All Versions](https://scholar.google.com/scholar?cluster=3696356619002071917&hl=en&as_sdt=0,5)]. 開発者がAIプログラミングアシスタントを使う動機として、キーボード操作の削減、タスクの迅速な完了、構文の記憶を支援することに強い関心を示すが、潜在的な解決策のブラインドを支援する点についてはあまり共感が得られない。

* [Large Language Models for Software Engineering: A Systematic Literature Review](https://arxiv.org/abs/2308.10620) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=10466731638053452642&as_sdt=0,5)]. LLM4SEに関する体系的な文献レビュー。LLMがプロセスや成果の最適化にどのように活用できるかを特に焦点にしている。

*[Back to Top](#c)


### 知識表現 <a id="knowledge-representation"></a>

* [Handbook of Knowledge Representation](https://1lib.net/book/511192/9eab86) - ***Elsevier***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=14732064619564679879&hl=en&as_sdt=0,5)]. すべての知識表現モード向けの実用的なハンドブック。

* [Logic and Ontology](https://plato.stanford.edu/entries/logic-ontology/) - ***プラトン・スタンフォード***。論理と存在論についての計算哲学的アプローチ。論理と存在論が多くの重要な哲学的問題において交差する点について。

* [The Language of Thought Hypothesis](https://plato.stanford.edu/entries/language-thought/) - ***プラトン・スタンフォード***。思考の言語仮説についての計算哲学的アプローチ。思考が精神的言語で行われると提案するもの。

* [The Analysis of Knowledge](https://plato.stanford.edu/entries/knowledge-analysis/) - ***プラトン・スタンフォード***。

* [Scientific Representation](https://plato.stanford.edu/entries/scientific-representation/) - ***プラトン・スタンフォード***。科学的表現についての計算哲学的アプローチ。科学モデルがその対象システムをどのように表現するかに焦点を当てるもの。

* [Self-Knowledge](https://plato.stanford.edu/entries/self-knowledge/) - ***プラトン・スタンフォード***。自己知識についての計算哲学的アプローチ。通常、自分の精神状態（つまり、自分がどのように感じているか、考えているか、信じているか、望んでいるか）に関する知識を指す。

* [Common Knowledge](https://plato.stanford.edu/entries/common-knowledge/) - ***プラトン・スタンフォード***。

* [Sense-Data](https://plato.stanford.edu/entries/sense-data/) - ***プラトン・スタンフォード***。

* [Supervenience](https://plato.stanford.edu/entries/supervenience/) - ***プラトン・スタンフォード***。スーパーバンスの計算哲学的アプローチ。性質の集合Aが別の集合Bにスーパーバンスするとは、Aの性質に関して異なる二つの対象が存在しないこと、その対象のBの性質に関しても異なることと同値である場合をいう。

* [Dialogical Logic](https://plato.stanford.edu/entries/logic-dialogical/) - ***プラトン・スタンフォード***。対話論理の計算哲学的アプローチ。対話に基づく論理および議論のアプローチであり、ギリシャ古代の対話論（ダイアレクトス）の研究伝統に根ざしており、問題は質問と回答を通じた対立する側の議論によって扱われた。

* [Temporal Logic](https://plato.stanford.edu/entries/logic-temporal/) - ***プラトン・スタンフォード***。

* [Modal Logic](https://plato.stanford.edu/entries/logic-modal/) - ***プラトン・スタンフォード***。モーダル論理の計算哲学的アプローチ。表現「それは必要である」と「それは可能である」の論理的導出行動を研究するもの。

* [Epistemic Logic](https://plato.stanford.edu/entries/logic-epistemic/) - ***プラトン・スタン術***。エピステミクス論理の計算哲学的アプローチ。知識、信念および関連する概念に関する論理的アプローチを扱うエピステミクスの分野。

* [Epistemic Modal Logic](https://en.wikipedia.org/wiki/Epistemic_modal_logic) - ***ウィキペディア***。

* [The Perception of Relations](https://perception.jhu.edu/files/PDFs/21_Relations/HafriFirestone_2021_SeeingRelations_TiCS.pdf) - ***認知科学のトレンド***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=12190078466818849725&hl=en&as_sdt=2005&sciodt=0,5)]。チャズ・ファイアストーンによる関係の認識に関するレビュー、従来の論理的推論観点との対比。

* [Commonsense reasoning about causality: Deriving behavior from structure](https://www.sciencedirect.com/science/article/abs/pii/0004370284900390) - ***人工知能***、1984年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=14940738362673077704)]。

* [Logics for Epistemic Programs](https://link.springer.com/article/10.1023/B:SYNT.0000024912.56773.5e) - ***シンテーゼ***、2004年。[[All Versions](https://scholar.google.com/scholar?cluster=11403619699670839488&hl=en&as_sdt=0,5&as_vis=1)]。

* [A Translation Approach to Portable Ontology Specifications](https://tomgruber.org/writing/ontolingua-kaj-1993.pdf) - ***知識取得***、1993年。[[All Versions](https://scholar.google.com/scholar?cluster=14668658395073605123&hl=en&as_sdt=0,5)]。

* [The Symbolic Grounding Problem](http://www.cs.ox.ac.uk/activities/ieg/e-library/sources/harnad90_sgproblem.pdf) - ***フィジカ・D：非線形現象***、1990年。[[All Versions](https://scholar.google.com/scholar?cluster=6279614024681929496&hl=en&as_sdt=0,5)]。

* [Learning overhypotheses with hierarchical Bayesian models](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-7687.2007.00585.x?__cf_chl_captcha_tk__=pmd_Q6xVT1AstoEUxA7xS3_10HyDVsk8W_DzWgOPho_Njnw-1635210931-0-gqNtZGzNA1CjcnBszQvl) - 『開発科学』2007年。[[All Versions](https://scholar.google.com/scholar?cluster=18041836774924845900&hl=en&as_sdt=0,5)]。

* [Learning Causal Schemata](https://escholarship.org/content/qt19v2r2ws/qt19v2r2ws.pdf) - 『CogSci'07』2007年。[[All Versions](https://scholar.google.com/scholar?cluster=5008191267417189643&hl=en&as_sdt=0,5)]。

* [The discovery of structural form](https://www.pnas.org/content/105/31/10687) - 『米国国家科学院論文集』2008年。[[All Versions](https://scholar.google.com/scholar?cluster=10433149156915110486&hl=en&as_sdt=0,5)]。チャレス・ケンプによる理論誘導に関するレビュー。

* [A Rational Analysis of Rule-Based Concept Learning](https://onlinelibrary.wiley.com/doi/full/10.1080/03640210701802071) - 『認知科学』2008年。[[All Versions](https://scholar.google.com/scholar?cluster=7765061503727822620&hl=en&as_sdt=0,5)]。

* [Modeling semantic cognition as logical dimensionality reduction](https://escholarship.org/content/qt50r1c7qh/qt50r1c7qh.pdf) - 『CogSci'08』2008年。[[All Versions](https://scholar.google.com/scholar?cluster=17061801746839695691&hl=en&as_sdt=0,5)]。

* [Theory Acquisition and the Language of Thought](http://www.charleskemp.com/papers/KempGT08.pdf) - ***CogSci'08***, 2008. [[All Versions](https://scholar.google.com/scholar?cluster=1839916602381147749&hl=en&as_sdt=0,5)].

* [Theory Acquisition as Stochastic Search](http://web.mit.edu/tomeru/www/papers/tlss2010.pdf) - ***CogSci'10***, 2010. [[All Versions](https://scholar.google.com/scholar?cluster=16324634056226561429&hl=en&as_sdt=0,5)].

* [A probabilistic model of theory formation](http://www.charleskemp.com/papers/kemptng09.pdf) - 認知科学、2010。[[All Versions](https://scholar.google.com/scholar?cluster=7705799129887482041&hl=en&as_sdt=0,5)]。

* [Bootstrapping in a language of thought: A formal model of numerical concept learning](https://core.ac.uk/display/78064072) - 認知科学、2012。[[All Versions](https://scholar.google.com/scholar?cluster=13046606910781656302&hl=en&as_sdt=0,5)]。

* [Concepts in a Probabilistic Language of Thought](http://cbmm-dev.mit.edu/sites/default/files/publications/CBMM-Memo-010.pdf) - ***脳・心・機械センター メモ第010号***、2014年。 [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=14593712389828476130)]。

* [Exploring the Conceptual Universe](http://www.charleskemp.com/papers/kemp_exploringtheconceptualuniverse.pdf) - 『心理学レビュー』2012年。[[All Versions](https://scholar.google.com/scholar?cluster=17824067813343816306&hl=en&as_sdt=0,5)].

* [A taxonomy of inductive problems](http://www.charleskemp.com/papers/kempj_ataxonomyofinductiveproblems.pdf) - 『心理科学bulletinとレビュー』2014年。[[All Versions](https://scholar.google.com/scholar?cluster=2571009743105592927&hl=en&as_sdt=0,5)].

* [The Logical Primitives of Thought: Empirical Foundations for Compositional Cognitive Models](http://colala.berkeley.edu/papers/piantadosi2016logical.pdf) - 『心理学レビュー』2016年。[[All Versions](https://scholar.google.com/scholar?cluster=5316027496661813145&hl=en&as_sdt=0,5)].

* [The Emergence of Organizing Structure in Conceptual Representation](https://onlinelibrary.wiley.com/doi/full/10.1111/cogs.12580) - 『認知科学』2018年。[[All Versions](https://scholar.google.com/scholar?cluster=4986316323923233074&hl=en&as_sdt=0,5)].

* [Theory Acquisition as Constraint-Based Program Synthesis](https://cogtoolslab.github.io/pdf/wang_cogsci_2021b.pdf) - 『CogSci'21』2021年。[[All Versions](https://scholar.google.com/scholar?cluster=525148607069840280&hl=en&as_sdt=0,5)].

* [Connecting perceptual and procedural abstractions in physical construction](https://escholarship.org/uc/item/9j00x928) - ***CogSci'21***, 2021. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Connecting+perceptual+and+procedural+abstractions+in+physical+construction&btnG=)].

* [Invariant representation of physical stability in the human brain](https://www.biorxiv.org/content/10.1101/2021.03.19.385641v1.full.pdf) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=17431019238600295521&hl=en&as_sdt=0,5)].

* [Introduction to The Fluent Calculus](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.146.4086&rep=rep1&type=pdf) - リンクオーピング大学電子プレス、1998。[[All Versions](https://scholar.google.com/scholar?cluster=12069059079023496731&hl=en&as_sdt=0,5)]。

* [From situation calculus to fluent calculus: State update axioms as a solution to the inferential frame problem](https://www.sciencedirect.com/science/article/pii/S0004370299000338) - 人工知能、1999年。 [[All Versions](https://scholar.google.com/scholar?cluster=10854895617698839149&hl=en&as_sdt=0,5)]。

* [Unsupervised Structure Learning of Stochastic And-Or Grammars](http://www.stat.ucla.edu/~sczhu/papers/Conf_2013/Learning_AoG_NeurIPS_2013.pdf) - ***NeurIPS'13***, 2013. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=4354984630817844670)].

* [Algorithms of Adaptation in Inductive Inference](https://psyarxiv.com/ysndt) - 認知心理学、2021。[[All Versions](https://scholar.google.com/scholar?cluster=16222039361294164246&hl=en&as_sdt=0,5)]。

* [A representational analysis of numeration systems](https://www.sciencedirect.com/science/article/pii/0010027795006743) - 認知、1995。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=8852566070856662412)]。

* [Learning Program Representations for Food Images and Cooking Recipes](https://openaccess.thecvf.com/content/CVPR2022/html/Papadopoulos_Learning_Program_Representations_for_Food_Images_and_Cooking_Recipes_CVPR_2022_paper.html) - ***CVPR'22***, 2022. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=7690010749576063125)].

* [Reasoning about Procedures with Natural Language Processing: A Tutorial](https://arxiv.org/abs/2205.07455) - 2023. [[All Versions](https://scholar.google.com/scholar?cluster=11364086808527515615&hl=en&as_sdt=0,5)].

*[Back to Top](#c)


### 認知発達 <a id="cognitive-development"></a>

* [Machine Common Sense Concept Paper](https://arxiv.org/abs/1810.07528) - DARPA、2018。[[All Versions](https://scholar.google.com/scholar?cluster=1603121108181262769&hl=en&as_sdt=0,5)]。DARPAが開発心理学の基本知識を機械知能システムに統合する視点。

* [Cognitive Development](https://en.wikipedia.org/wiki/Cognitive_development) - ***ウィキペディア***。

* [Cognitive development: An information processing approach](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Cognitive+Development%3A+an+information+processing+approach&btnG=) - ***B.Blackwell***, 1991. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Cognitive+development%3A+An+information+processing+approach&btnG=)].

* [Reconstructing constructivism: Causal models, Bayesian learning mechanisms, and the theory theory](https://psycnet.apa.org/record/2012-12791-001) - ***Psychological Bulletin***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=11218217347365817167&hl=en&as_sdt=0,5)]. アリソン・ゴプニクによる発達研究における構造主義思想に関するレビュー.

* [Towards a rational constructivist theory of cognitive development](https://doi.apa.org/doiLanding?doi=10.1037/rev0000153) - ***Psychological Review***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=3294824172745724080&hl=en&as_sdt=0,5)]. フェイ・シュウのレビューがゴプニクの構造主義思想を拡張し、合理的性を制約として導入している.

* [The origins of inquiry: inductive inference and exploration in early childhood](https://www.sciencedirect.com/science/article/pii/S1364661312001301) - ***Trends in Cognitive Sciences***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=5189329081728071335&hl=en&as_sdt=0,5)]. ラウラ・シュルズによる子どもたちの探求的な遊びに関するレビュー.

* [Play, Curiosity, and Cognition](https://www.annualreviews.org/doi/abs/10.1146/annurev-devpsych-070120-014806) - ***Annual Review of Developmental Psychology***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=10278208468154249192&hl=en&as_sdt=2005&sciodt=0,5)]. ラウラ・シュルズによる子どもたちの探求的な遊びに関するレビューで、探求的遊びの新たな視点を提示し、遊びにおける非合理的行動の出現を説明している。

* [From exploration to play: A cross-sectional study of infant free play behavior](https://psycnet.apa.org/record/1981-32566-001) - 発達心理学、1981年。[[All Versions](https://scholar.google.com/scholar?cluster=15547331535034599545&hl=en&as_sdt=0,5)]。

* [Detecting Blickets: How Young Children Use Information about Novel Causal Powers in Categorization and Induction](https://srcd.onlinelibrary.wiley.com/doi/abs/10.1111/1467-8624.00224) - 児童発達、2003年。[[All Versions](https://scholar.google.com/scholar?cluster=9049737233568227380&hl=en&as_sdt=0,5)]。

* [Serious fun: Preschoolers engage in more exploratory play when evidence is confounded](http://eccl.scripts.mit.edu/papers/bonawitzandschulzseriousfun.pdf) - 発達心理学、2007年。[[All Versions](https://scholar.google.com/scholar?cluster=3033619407322882147&hl=en&as_sdt=0,5)]。

* [Observing the unexpected enhances infants' learning and exploration](https://stahla.pages.tcnj.edu/files/2015/08/Stahl_Feigenson_Science_2015.pdf) - 科学、2015年。[[All Versions](https://scholar.google.com/scholar?start=10&hl=en&as_sdt=0,5&cluster=9247917261616759689)]。

* [Word, thought, and deed: the role of object categories in children's inductive inferences and exploratory play](https://psycnet.apa.org/record/2008-12114-008) - 発達心理学、2009年。[[All Versions](https://scholar.google.com/scholar?cluster=13947689064550390312&hl=en&as_sdt=0,5)]。

* [Where science starts: Spontaneous experiments in preschoolers' exploratory play](https://www.sciencedirect.com/science/article/pii/S0010027711000916) - 認知科学、2011年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=16321989770180281706)]。

* [Scientific thinking in young children: Theoretical advances, empirical research, and policy implications](http://alisongopnik.com/Papers_Alison/Scientific%20Thinking%20in%20young%20Children.pdf) - 『***Science***』2012年。[[All Versions](https://scholar.google.com/scholar?cluster=9103846738385460508&hl=en&as_sdt=2005)]。

* [Finding New Facts; Thinking New Thoughts](http://eccl.scripts.mit.edu/papers/Finding%20New%20Facts_%20Thinking%20New%20Thoughts.pdf) - 児童発達と行動に関する進歩、2012年。[[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Finding+new+facts%3B+thinking+new+thoughts&btnG=)]。

* [Theory learning as stochastic search in the language of thought](https://www.sciencedirect.com/science/article/pii/S0885201412000445) - 認知発達、2012。[[All Versions](https://scholar.google.com/scholar?cluster=8036476579458645432&hl=en&as_sdt=0,5)]。

* [Infants make more attempts to achieve a goal when they see adults persist](https://www.science.org/doi/abs/10.1126/science.aan2317) - 『***Science***』2017年。[[All Versions](https://scholar.google.com/scholar?cluster=2617011825272996810&hl=en&as_sdt=0,5)]。

* [Knowing when to quit: Children consider access to solutions when deciding whether to persist](https://cognitivesciencesociety.org/cogsci20/papers/0716/0716.pdf) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15997297570269958414&hl=en&as_sdt=2005&sciodt=0,5)].

* [Bayesian Models of Conceptual Development: Learning as Building Models of the World](https://psyarxiv.com/aq3rp/) - 発行年：2020年 『開発心理学年次レビュー』。[[All Versions](https://scholar.google.com/scholar?cluster=646614032563248495&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Sticking to the Evidence? A Behavioral and Computational Case Study of Micro-Theory Change in the Domain of Magnetism](https://onlinelibrary.wiley.com/doi/full/10.1111/cogs.12765) - 認知科学、2019年。[[All Versions](https://scholar.google.com/scholar?cluster=4409900195679222965&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Cognitive pragmatism: Children flexibly choose between facts and conjectures](https://junyichu.mit.edu/sites/default/files/documents/2018-05-14%20CogSci%20Final.pdf) - ***CogSci'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=6978944437676543728&hl=en&as_sdt=2005&sciodt=0,5)].

* [Exploratory play, rational action, and efficient search](https://psyarxiv.com/9yra2/) - ***CogSci'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17529638197045429028&hl=en&as_sdt=0,5)].

* [Children selectively endorse speculative conjectures](https://srcd.onlinelibrary.wiley.com/doi/full/10.1111/cdev.13647?saml_referrer) - 子供の発達、2021。[[All Versions](https://scholar.google.com/scholar?cluster=5672344544260882286&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Learning higher-order generalizations through free play: Evidence from 2- and 3-year-old children](https://psycnet.apa.org/buy/2017-12497-003) - 発達心理学、2017年。[[All Versions](https://scholar.google.com/scholar?cluster=4386474921214936914&hl=en&as_sdt=0,5)]。

* [Childhood as a solution to explore–exploit tensions](https://royalsocietypublishing.org/doi/10.1098/rstb.2019.0502) - ***Philosophical Transactions of the Royal Society B: Biological Sciences***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=11960188575664977017&hl=en&as_sdt=2005&sciodt=0,5)].

* [Children's exploratory play tracks the discriminability of hypotheses](https://www.nature.com/articles/s41467-021-23431-2) - ***Nature Communications***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=12389351553206792907&hl=en&as_sdt=0,5&as_ylo=2020)].

* [A Developmental Perspective on Executive Function](https://srcd.onlinelibrary.wiley.com/doi/full/10.1111/j.1467-8624.2010.01499.x?saml_referrer) - 子供の発達、2010年。 [[All Versions](https://scholar.google.com/scholar?cluster=11347590808138984649&hl=en&as_sdt=0,5)]。

* [Rethinking Executive Function and Its Development](https://journals.sagepub.com/doi/pdf/10.1177/1745691620904771) - 心理科学ジャーナル、2020年。 [[All Versions](https://scholar.google.com/scholar?cluster=16570230278367237499&hl=en&as_sdt=2005&sciodt=0,5)]。

* [Perception of partly occluded objects in infancy](https://www.harvardlds.org/wp-content/uploads/2017/01/Perception-of-partly-occluded-objects-in-infancy-1.pdf) - 認知心理学、1983年。[[All Versions](https://scholar.google.com/scholar?cluster=4182861116190610992&hl=en&as_sdt=0,5)]。

* [Age-of-acquisition ratings for 30,000 English words](https://link.springer.com/article/10.3758/s13428-012-0210-4) - ***Behavior Research Methods***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=6752414178722956940&hl=en&as_sdt=0,5)]. [[Project](http://crr.ugent.be/archives/806)]. 英語の3万語以上に対する年齢獲得評価データベース。

*[Back to Top](#c)


### オープンワールドでの学習 <a id="learning-in-the-open-world"></a>

* [Online learning of symbolic concepts](https://www.sciencedirect.com/science/article/abs/pii/S002224961730010X) - 『数学心理学ジャーナル』、2017年。[[All Versions](https://scholar.google.com/scholar?start=20&hl=en&as_sdt=2005&sciodt=0,5&cites=8036476579458645432&scipsc=)]。

* [Zero-Shot Learning—A Comprehensive Evaluation of the Good, the Bad and the Ugly](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8413121) - ***IEEE Transactions on Pattern Analysis and Machine Intelligence***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=11909080239486864961&hl=en&as_sdt=0,5)]. 零ショット学習に関する包括的なレビュー。

* [Generalizing from a few examples: A survey on few-shot learning](https://www.4paradigm.com/upload/file/20210427/20210427225045_12063.pdf) - ***ACM Computing Survey***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7932202448069313464&hl=en&as_sdt=0,5)].

* [Towards Open World Recognition](https://ieeexplore.ieee.org/document/7298799) - ***CVPR'15***, 2015. [[All Versions](https://scholar.google.com/scholar?cluster=856704237994181529&hl=en&as_sdt=0,5)]. 開世界認識問題を初めて提唱した論文.

* [Towards Open Set Deep Networks](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7780542) - ***CVPR'16***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=3571743951915089896&hl=en&as_sdt=0,5)].

* [In the Wild: From ML Models to Pragmatic ML Systems](https://arxiv.org/pdf/2007.02519.pdf) - ***ICLR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15243890330014986346&hl=en&as_sdt=0,5)]. 増分機械学習に関する包括的なレビュー.

* [Adversarial Filters of Dataset Biases](https://arxiv.org/pdf/2002.04108.pdf) - ***ICML'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=11617966867048191189&hl=en&as_sdt=0,5)].

* [A Wholistic View of Continual Learning with Deep Neural Networks: Forgotten Lessons and the Bridge to Active and Open World Learning](https://arxiv.org/pdf/2009.01797.pdf) - 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2640432662088551010&hl=en&as_sdt=0,5)].

* [Energy-Based Models for Continual Learning](https://arxiv.org/pdf/2011.12216.pdf) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7094884707139778576&hl=en&as_sdt=0,5)]. [[Project](https://energy-based-model.github.io/Energy-Based-Models-for-Continual-Learning/)].

* [Learning to Learn Image Classifiers with Visual Analogy](https://openaccess.thecvf.com/content_CVPR_2019/papers/Zhou_Learning_to_Learn_Image_Classifiers_With_Visual_Analogy_CVPR_2019_paper.pdf) - ***CVPR'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=6285495755337309034&hl=en&as_sdt=0,5)].

* [Zero-Shot Object Detection](https://arxiv.org/pdf/1804.04340v2.pdf) - ***ECCV'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=2027060030559987993&hl=en&as_sdt=0,5)].

* [Towards Open World Object Detection](https://arxiv.org/pdf/2103.02603v1.pdf) - ***CVPR'21***、2021年。[[All Versions](https://scholar.google.com/scholar?cluster=9715328489246217151&hl=en&as_sdt=0,5)]。[[Project](https://github.com/JosephKJ/OWOD)]。

* [Learning to Recognise Unseen Classes by A Few Similes](https://dl.acm.org/doi/pdf/10.1145/3123266.3123323) - ***MM'17***, 2017. [[All Versions](https://scholar.google.com/scholar?q=related:FZZr2BK0U6YJ:scholar.google.com/&scioq=Learning+to+Recognise+Unseen+Classes+by+A+Few+Similes&hl=en&as_sdt=0,5)].

* [Ontology-guided Semantic Composition for Zero-Shot Learning](https://proceedings.kr.org/2020/87/kr2020-0087-chen-et-al.pdf) - ***KR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=1825132732653262003&hl=en&as_sdt=0,5)].

* [OntoZSL: Ontology-enhanced Zero-shot Learning](https://arxiv.org/pdf/2102.07339.pdf) - ***WWW'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=1042573079110416209&hl=en&as_sdt=0,5)].

* [Knowledge-aware Zero-Shot Learning: Survey and Perspective](https://arxiv.org/abs/2103.00070) - ***IJCAI'21*** 2021. [[All Versions](https://scholar.google.com/scholar?cluster=2596179801089642923&hl=en&as_sdt=0,5)].

* [From Red Wine to Red Tomato: Composition with Context](https://ieeexplore.ieee.org/document/8099612) - ***CVPR'17***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=6959320578989247472&hl=en&as_sdt=0,5)].

* [Attributes as Operators: Factorizing Unseen Attribute-Object Compositions](https://link.springer.com/chapter/10.1007%2F978-3-030-01246-5_11) - ***ECCV'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=11627198158637727139&hl=en&as_sdt=0,5)].

* [Learning Compositional Representations for Few-Shot Recognition](https://ieeexplore.ieee.org/document/9010671) - ***CVPR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7363445845219257348&hl=en&as_sdt=0,5)].

* [Symmetry and Group in Attribute-Object Compositions](https://ieeexplore.ieee.org/document/9156505) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=16870815556752021056&hl=en&as_sdt=0,5)].

* [A causal view of compositional zero-shot recognition](https://proceedings.neurips.cc/paper/2020/file/1010cedf85f6a7e24b087e63235dc12e-Paper.pdf) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2543173389101020482&hl=en&as_sdt=0,5)].

* [Compositional Few-Shot Recognition with Primitive Discovery and Enhancing](https://dl.acm.org/doi/10.1145/3394171.3413849) - ***MM'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=15817839338790433509&hl=en&as_sdt=0,5)].

* [Learning Unseen Concepts via Hierarchical Decomposition and Composition](https://ieeexplore.ieee.org/document/9156655) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=14161656227038242300&hl=en&as_sdt=0,5)].

*[Back to Top](#c)


### 認知的妥当性を持つ学習 <a id="learning-with-cognitive-plausibility"></a>

* [Accuracy and Precision](https://en.wikipedia.org/wiki/Accuracy_and_precision) - ***Wikipedia***. ワイキピディアにおける正確性と精密性の違いおよびそのトレードオフについての解説.

* [Cognitive Science: Definition, Status, and Questions](https://www.annualreviews.org/doi/abs/10.1146/annurev.ps.40.020189.003131) - 『心理学期刊年次レビュー』1989年。[[All Versions](https://scholar.google.com/scholar?cluster=8549671583307260475&hl=en&as_sdt=0,5)]。

* [Recognition-by-Components: A Theory of Human Image Understanding](http://people.csail.mit.edu/torralba/courses/6.870/papers/Biederman_RBC_1987.pdf) - ***Psychological Review***, 1987. [[All Versions](https://scholar.google.com/scholar?cluster=16522931798979362446&hl=en&as_sdt=0,5)]. 観察成分理論に関する元論文.

* [Machine Behaviour](https://www.nature.com/articles/s41586-019-1138-y) - ***Nature***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=7881171273277686092&hl=en&as_sdt=0,5)].

* [Dark, Beyond Deep: A Paradigm Shift to Cognitive AI with Humanlike Common Sense](https://yzhu.io/publication/dark2020engineering/paper.pdf) - ***エンジニアリング***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=12292747257300299161&hl=en&as_sdt=0,5)]。玉ixin 竹 と 竹 慎の視覚共通知識に関するレビュー。

* [Self-supervised Learning Through the eyes of a Child](https://cims.nyu.edu/~brenden/papers/OrhanEtAl2020NeurIPS.pdf) - ***NeurIPS'20***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=5608715260418451299&hl=en&as_sdt=0,5)]。自然に近い共現頻度の推定を用いた概念学習。

* [CLEVRER: CoLlision Events for Video REpresentation and Reasoning](https://arxiv.org/abs/1910.01442) - ***ICLR'20***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=4352064462350202338&hl=en&as_sdt=0,5)]。

* [BONGARD-LOGO: A New Benchmark for Human-Level Concept Learning and Reasoning](https://proceedings.neurips.cc/paper/2020/hash/bf15e9bbff22c7719020f9df4badc20a-Abstract.html) - ***NeurIPS'20***、2020年。[[All Versions](https://scholar.google.com/scholar?cluster=9164011458889391917&hl=en&as_sdt=0,5)]。

* [The relationship between Precision-Recall and ROC curves](https://dl.acm.org/doi/10.1145/1143844.1143874) - ***ICML'06***、2006年。[[All Versions](https://scholar.google.com/scholar?cluster=10708180947310062390&hl=en&as_sdt=0,5)]。

* [Distributional Generalization: A New Kind of Generalization](http://export.arxiv.org/pdf/2009.08092) - 2020. [[All Versions](https://scholar.google.com/scholar?cluster=6190621467796247477&hl=en&as_sdt=0,5)].

* [Learning and development in networks: The importance of starting small.](https://www.sciencedirect.com/science/article/abs/pii/0010027793900584) - ***Cognition***, 1993. [[All Versions](https://scholar.google.com/scholar?cluster=5133345254007462915&hl=en&as_sdt=0,5)]. コアラーリングの概念に関する元論文.

* [Language acquisition in the absence of explicit negative evidence: how important is starting small?](https://www.sciencedirect.com/science/article/pii/S0010027799000311) - 1999年の『Cognition』。[[All Versions](https://scholar.google.com/scholar?cluster=11813578367725362166&hl=en&as_sdt=0,5)]。

* [Curriculum Learning](https://dl.acm.org/doi/pdf/10.1145/1553374.1553380) - ***ICML'09***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=8740915934335425405&hl=en&as_sdt=0,5)]. コアラーリングの概念を機械学習に応用した元論文.

* [Parsing video events with goal inference and intent prediction](https://ieeexplore.ieee.org/document/6126279) - ***ICCV'11***, 2011. [[All Versions](https://scholar.google.com/scholar?cluster=5979196784405021658&hl=en&as_sdt=0,5)].

* [Inferring "Dark Matter" and "Dark Energy" from Videos](https://ieeexplore.ieee.org/document/6751387) - ***ICCV'13***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=3467068307444498624&hl=en&as_sdt=0,5)]. ビデオから潜在状態を発見する元論文.

* [Explainable and Explicit Visual Reasoning over Scene Graphs](https://openaccess.thecvf.com/content_CVPR_2019/papers/Shi_Explainable_and_Explicit_Visual_Reasoning_Over_Scene_Graphs_CVPR_2019_paper.pdf) - ***CVPR'19***, 2019. [[All Versions](https://scholar.google.com/scholar?cluster=8517395712319798436&hl=en&as_sdt=0,5)].

* [Attention over Learned Object Embeddings Enables Complex Visual Reasoning](https://proceedings.neurips.cc/paper/2021/hash/4c26774d852f62440fc746ea4cdd57f6-Abstract.html) - ***NeurIPS'21***, 2021. [[All Versions](https://scholar.google.com/scholar?cluster=127829313460149801&hl=en&as_sdt=0,5)].

* [Distributed Representations of Words and Phrases and their Compositionality](https://papers.NeurIPS.cc/paper/2013/file/9aa42b31882ec039965f3c4923ce901b-Paper.pdf) - ***NeurIPS'13***, 2013. [[All Versions](https://scholar.google.com/scholar?cluster=2410615501856807729&hl=en&as_sdt=0,5)].

* [Motion Reasoning for Goal-Based Imitation Learning](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9197172) - ***ICRA'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=7519230802512388210&hl=en&as_sdt=0,5)].

* [Action Genome: Actions as Compositions of Spatio-temporal Scene Graphs](https://openaccess.thecvf.com/content_CVPR_2020/papers/Ji_Action_Genome_Actions_As_Compositions_of_Spatio-Temporal_Scene_Graphs_CVPR_2020_paper.pdf) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=388714326304810525&hl=en&as_sdt=0,5)].

* [Refactoring Policy for Compositional Generalizability using Self-Supervised Object Proposals](https://proceedings.neurips.cc/paper/2020/file/64dcf3c521a00dbb4d2a10a27a95a9d8-Paper.pdf) - ***NeurIPS'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2255457416066730255&hl=en&as_sdt=0,5)].

* [Something-Else: Compositional Action Recognition with Spatial-Temporal Interaction Networks](https://openaccess.thecvf.com/content_CVPR_2020/papers/Materzynska_Something-Else_Compositional_Action_Recognition_With_Spatial-Temporal_Interaction_Networks_CVPR_2020_paper.pdf) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=17469863154797360929&hl=en&as_sdt=0,5)].

* [Putting visual object recognition in context](https://openaccess.thecvf.com/content_CVPR_2020/papers/Zhang_Putting_Visual_Object_Recognition_in_Context_CVPR_2020_paper.pdf) - ***CVPR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=6207193649298787857&hl=en&as_sdt=0,5)].

* [Multimodal Few-Shot Learning with Frozen Language Models](https://arxiv.org/abs/2106.13884) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=16154696122208258147&hl=en&as_sdt=0,5)].

* [Describing Objects by their Attributes](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5206772) - ***CVPR'09***, 2009. [[All Versions](https://scholar.google.com/scholar?cluster=6853730684095116174&hl=en&as_sdt=0,5)].

* [Panoramic Learning with A Standardized Machine Learning Formalism](https://arxiv.org/abs/2108.07783) - 2021. [[All Versions](https://scholar.google.com/scholar?cluster=14222434793711614257&hl=en&as_sdt=0,5)].

* [Graininess of judgment under uncertainty: An accuracy-informativeness trade-off](https://psycnet.apa.org/record/1996-10319-001) - 『実験心理学誌』1995年。[[All Versions](https://scholar.google.com/scholar?cluster=15366302654259490472&hl=en&as_sdt=0,5)]。

* [Federated Learning via Posterior Averaging: A New Perspective and Practical Algorithms](https://openreview.net/forum?id=GFsU8a0sGB) - ***ICLR'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=2486025806014234529&hl=en&as_sdt=0,5)].

* [Interplay between rule learning and rule switching in a perceptual categorization task](https://www.biorxiv.org/content/10.1101/2022.01.29.478330v2.abstract) - 2022年。[[All Versions](https://scholar.google.com/scholar?cluster=7461559646167397406&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)






## 研究ツール <a id="academic-tools"></a>


### コース <a id="courses"></a>

* [Computational Cognitive Science Courses](https://cbmm.mit.edu/education/courses/computational-cognitive-science) - ***MIT***。MIT、ハーバード、スタンフォードの計算認知科学の講義。

* [Introduction to Program Synthesis](https://people.csail.mit.edu/asolar/SynthesisCourse/index.htm) - ***MIT***。アランドロ・ソーラー・レザマのプログラム合成の基礎講義。

* [Structure and Interpretation of Computer Programs](https://web.mit.edu/6.001/6.037/) - ***MIT***. [[Book: SICP](https://web.mit.edu/6.001/6.037/sicp.pdf)]. [[All Versions](https://scholar.google.com/scholar?cluster=7488066943428166450&hl=en&as_sdt=0,5)]. 構造的・手続き的・メタ言語的抽象化を用いて計算問題を解決するためのクラシックなコース。

* [Discrete Mathematics and Its Applications](https://faculty.ksu.edu.sa/sites/default/files/rosen_discrete_mathematics_and_its_applications_7th_edition.pdf). Classic course on basic discrete mathematics, including matheatical logic, set theory, graph theory, formal language (and automata), basic number theory (e.g., counting), and other related topics.

*[Back to Top](#c)


### プログラミング <a id="programming"></a>

* [Probabilistic Models of Cognition](https://probmods.org/) - ***MIT***. 認知科学における確率的アプローチは、学習と推論を複雑な確率モデルにおける推論としてモデル化する。

*[Back to Top](#c)


### 論文執筆 <a id="paper-writing"></a>

* [LaTex Configuration](https://github.com/YuzheSHI/awesome-agi-cocosci/blob/0ff4ed6ef214e4151669e5187cc7d9873219f974/LaTex/config.sty) - ***LaTex***。構成ファイル用のLaTexテンプレート（灰色の参照、ページ逆参照を含む）。

* [BibTex Template](https://github.com/YuzheSHI/awesome-agi-cocosci/blob/0ff4ed6ef214e4151669e5187cc7d9873219f974/BibTex/references_header.bib) - ***BibTex***。AI、数学、認知科学のジャーナルおよび会議の略称を含むBibTexテンプレート。

* [bioRender](https://www.biorender.com/) - ***bioRender***. 生命科学の30以上の分野から提供される数千の事前作成されたアイコンとテンプレートを閲覧することで、数分でプロフェッショナルな科学図を生成できる。

* [How to construct a Nature summary paragraph](https://www.nature.com/documents/nature-summary-paragraph.pdf) - ***ナチュラル***。ナチュラルの抽象の作成に関する公式ガイドライン。

* [How to write a superb literature review](https://www.nature.com/articles/d41586-020-03422-x) - ***Nature***, 2020. Natureは、過去の経験者と初学者に、レビューを魅力的に仕上げた実際の作業を語る。

* [Scientific Papers](https://www.nature.com/scitable/topicpage/scientific-papers-13815490/) - ***Nature***. 科学論文の執筆に関するNatureのガイドライン。

* [The Machine Learning Reproducibility Checklist](https://www.cs.mcgill.ca/~jpineau/ReproducibilityChecklist.pdf) - ***マギル大学***. マシンラーニングアルゴリズムを再現性を保証した形で導入するためのガイドライン。

*[Back to Top](#c)


### 論文読解 <a id="paper-reading"></a>

* [How to Read a Paper](https://www.cs.uni-potsdam.de/bs/teaching/docs/courses/ss2020/scn/material/p83-keshavA.pdf) - ***ACM SIGCOMM コンピュータ・コミュニケーション・リビュー***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=7234542241721187587&hl=en&as_sdt=0,5)]. 科学論文を読むための包括的なチュートリアル。

* [How to (seriously) read a scientific paper](https://www.science.org/content/article/how-seriously-read-scientific-paper) - ***サイエンス***, 2016. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=How+to+%28seriously%29+read+a+scientific+paper&btnG=)]. 科学論文を読むためのサイエンスインタビュー。

* [It's not just you: science papers are getting harder to read](https://www.nature.com/articles/nature.2017.21751) - ***ナチュラル***, 2017. [[All Versions](https://scholar.google.com/scholar?cluster=4409814498614719804&hl=en&as_sdt=0,5)]. 科学論文を読むためのナチュラルの視点。

* [How to navigate a scientific paper with time constraints: a graphics approach](https://be.mit.edu/sites/default/files/documents/HowToReadAScientificPaper.pdf) - ***MIT***. 不同の時間制約下での論文読解に向けた戦略についてのMITのガイド。

* [Text Visualization Browser](https://textvis.lnu.se/) - ***ISOVIS group***, 2015. [[Paper](https://cs.lnu.se/isovis/pubs/docs/kucher-pacificvis15-postprint.pdf)]. [[All Versions](https://scholar.google.com/scholar?cluster=7000995325728444282&hl=en&as_sdt=0,5)]. 文字視覚化技術の中心的な研究グループ.

*[Back to Top](#c)


### 文献管理 <a id="literature-management"></a>

* [How to keep up with the scientific literature](https://www.science.org/content/article/how-keep-scientific-literature) - ***Science***, 2016. 科学論文の整理に関する科学誌のインタビュー.

* [Scientific literature: Information overload](https://www.nature.com/articles/nj7612-457a) - ***Nature***, 2016. [[All Versions](https://scholar.google.com/scholar?cluster=9898832432826237365&hl=en&as_sdt=0,5)]. 科学文献からの過剰情報処理に関する見解.

* [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/) - ***マイクロソフト研究***。科学出版物の記録、その出版物間の引用関係、著者、機関、ジャーナル、会議、研究分野を含む異質グラフ。

* [An Overview of Microsoft Academic Service (MAS) and Applications](http://sonyis.me/paperpdf/Microsoft%20Academic%20Graph%20WWW%202015.pdf) - ***WWW'15***, 2015. [[All Versios](https://scholar.google.com/scholar?cluster=9075899176667058496&hl=en&as_sdt=0,5)]. Microsoft Academic Graphに関する元論文.

* [Goodbye, Microsoft Academic – Hello, open research infrastructure?](https://blogs.lse.ac.uk/impactofsocialsciences/2021/05/27/goodbye-microsoft-academic-hello-open-research-infrastructure/) - ***LSE Impact Blog***, 2021. Microsoftが研究インフラに採用した戦略の解釈。

* [Semantic Scholar](https://www.semanticscholar.org/) - ***アレン研究所（AI研究）***。AIを活用した科学文献の研究ツール。

* [Construction of the Literature Graph in Semantic Scholar](https://aclanthology.org/N18-3011/) - ***NAACL'18***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=5500969515339734950&hl=en&as_sdt=0,5)]. 原始論文データから特徴量とメタデータを抽出するSemantic Scholar.

* [S2ORC: The Semantic Scholar Open Research Corpus](https://aclanthology.org/2020.acl-main.447/) - ***ACL'20***, 2020. [[All Versions](https://scholar.google.com/scholar?cluster=11978464475399626925&hl=en&as_sdt=0,5)]. Semantic Scholarが公開した学術論文のオープンコーパス.

* [Litmaps](https://www.litmaps.com/) - ***リトマップ・リミット***。インタラクティブな文献マップの構築およびリンクドドキュメント管理を可能にする。

* [VOSviewer](https://www.vosviewer.com/) - ***ライデン大学***。バイオメトリックネットワークの構築および可視化を支援する。

* [StateOfTheArt.AI](https://www.stateoftheart.ai/) - ***ステートオブザートAI***。AI研究の進展を追跡、収集、可視化するツール。

*[Back to Top](#c)


### 知識管理 <a id="knowledge-management"></a>

* [Library of Congress Classification](https://www.loc.gov/aba/publications/FreeLCC/freelcc.html) - ***アメリカ国書館***。アメリカの分類システム（PDFのみ）。

* [Chinese Library Classification](http://cct.nlc.cn/) - ***中国国家図書館***. 中国人民共和国分類体系（中国語オンラインインターフェース）。[[English introduction at ISKO](https://www.isko.org/cyclo/clc)]. [[Wikipedia-EN](https://en.wikipedia.org/wiki/Chinese_Library_Classification)].

* [DDC at German National Library](https://rvk.uni-regensburg.de/regensburger-verbundklassifikation-online) - ***ドイツ国際図書館***. ドイツの分類体系（デイウェイ十進分類法DDC）（オンラインインターフェース）。[[DNB Website](https://www.dnb.de/EN/Professionell/DDC-Deutsch/DDCinDNB/ddcindnb_node.html)].

* [National Dite Library Classification](https://www.ndl.go.jp/jp/data/catstandards/classification_subject/ndlc.html) - ***日本国書館***。日本の分類システム（PDFのみ）。

* [DDC at OCLC (Wikipedia)](https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes) - ***オンラインコンピュータ図書館センター（OCLC）***. [[OCLC Website](https://www.oclc.org/en/home.html)]. [[Introduction to DDC](https://www.oclc.org/content/dam/oclc/dewey/versions/print/intro.pdf)]. [[DDC Manual](https://www.oclc.org/content/dam/oclc/webdewey/help/full_manual.pdf)]. 世界の図書館リソース構築用デイウェイ十進分類法（DDC）システム。[[DDC Class 000 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/000.pdf)]. [[DDC Class 100 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/100.pdf)]. [[DDC Class 200 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/200.pdf)]. [[DDC Class 300 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/300.pdf)]. [[DDC Class 400 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/400.pdf)]. [[DDC Class 500 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/500.pdf)]. [[DDC Class 600 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/600.pdf)]. [[DDC Class 700 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/700.pdf)]. [[DDC Class 800 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/800.pdf)]. [[DDC Class 900 (PDF only)](https://www.oclc.org/content/dam/oclc/webdewey/help/900.pdf)].

* [Knowledge organization](https://en.wikipedia.org/wiki/Knowledge_organization) - ***ウィキペディア***. 知識整理手法に関するウィキペディアの記事。

* [The Zettelkasten Method](https://zettelkasten.de/) - ***Bielefeld University***. グラフとマルチラベルを用いたアイデアの関連付け。

* [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) - ***ウィキペディア***. ゼッテルカストン手法に関するウィキペディアの記事。

* [Roam Research](https://roamresearch.com/) - ***Roam Research***. 関連付けられたドキュメントの管理、可視化、共有に適したツール。

* [Foam](https://foambubble.github.io/foam/) - ***Foambubble***. 関連付けられたドキュメントの管理、可視化、共有に適したツール。VSCodeをベースにしたオープンソースソフトウェア。

* [Building a Second Brain](https://www.buildingasecondbrain.com/) - ***Forte Labs, LLC***. グラフを用いたアイデアの関連付け。

* [Zotero](https://www.zotero.org/) - ***Digital Scholar***. 参考文献データや研究関連資料の管理に適したリファレンス管理ツール。

* [Niklas Luhmann's Card Index: Thinking Tool, Communication Partner, Publication Machine](https://pdfs.semanticscholar.org/88f8/fa9dfbc0c2b296758dd932b871917c5c775a.pdf%C2%A0) - ***忘却の機械：近代ヨーロッパにおける知識管理の進化，ブリル，2016．． [[All Versions](https://scholar.google.com/scholar?cluster=1786807670077004336&hl=en&as_sdt=0,5)]

* [The card index as creativity machine](https://culturemachine.net/wp-content/uploads/2019/01/373-604-1-PB.pdf) - 2010年の『***Culture Machine***』。[[All Versions](https://scholar.google.com/scholar?cluster=9767873312286889264&hl=en&as_sdt=0,5)]。

* [Where Does Niklas Luhmann's Card Index Come From?](https://www.researchgate.net/profile/Alberto-Cevolini/publication/328624186_Where_Does_Niklas_Luhmann%27s_Card_Index_Come_From/links/609f818e299bf147699a401d/Where-Does-Niklas-Luhmanns-Card-Index-Come-From.pdf) - ***Erudition and the Republic of Letters***, 2018. [[All Versions](https://scholar.google.com/scholar?cluster=8279465066043884141&hl=en&as_sdt=0,5)]. ルーマンのゼッテルカストンについての簡易的な紹介。

* [Niklas Luhmann's Card Index: The Fabrication of Serendipity](https://www.uni-bielefeld.de/fakultaeten/soziologie/forschung/luhmann-archiv/pdf/jschmidt_niklas-luhmanns-card-index_-sociologica_2018_12-1.pdf) - ソシアロジカ、2018年。 [[All Versions](https://scholar.google.com/scholar?cluster=12440286698665929622&hl=en&as_sdt=0,5)]。

* [Communicating with Slip Boxes](https://luhmann.surge.sh/communicating-with-slip-boxes) - 2019. [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Communicating+with+slip+boxes+luhmann&btnG=)].

*[Back to Top](#c)



## 研究機関と研究者 <a id="institute--researcher"></a>


### MIT <a id="mit"></a>

* [Center for Brains, Minds and Machines (CBMM)](https://cbmm.mit.edu/) - ***MIT***.

* [Josh Tenenbaum](https://cocosci.mit.edu/josh) - マサチューセッツ工科大学（MIT）の脳科学および認知科学部門、CSAIL、[Computational Cognitive Science Group (CoCoSci Group)](https://cocosci.mit.edu/) - マサチューセッツ工科大学（MIT）

* [Rebecca Saxe](https://saxelab.mit.edu/people/rebecca-saxe) - マサチューセッツ工科大学（MIT）の脳科学および認知科学部門、[Social Cognitive Neuroscience Laboratory (SaxeLab)](https://saxelab.mit.edu/) - マサチューセッツ工科大学（MIT）。

* [Laura Schulz](https://cbmm.mit.edu/about/people/schulz) - ***脳科学および認知科学部門、MIT***、[Early Childhood Cognition Lab](https://eccl.mit.edu/) - ***MIT***.

* [Leslie Kaelbling](https://people.csail.mit.edu/lpk/) - ***電気工学およびコンピュータサイエンス部門、CSAIL、MIT***、[The Learning & Intelligent Systems Group](https://lis.csail.mit.edu/) - ***MIT***.

* [Armando Solar-Lezama](https://people.csail.mit.edu/asolar/) - ***電気工学およびコンピュータサイエンス部門、CSAIL、MIT***、[Computer-Aided Programming Group](http://groups.csail.mit.edu/cap/) - ***MIT***.

*[Back to Top](#c)


### Stanford <a id="stanford"></a>

* [Li Fei-Fei](https://profiles.stanford.edu/fei-fei-li) - ***コンピュータサイエンス部門、人間中心AI研究所、スタンフォード***、[Stanford Vision and Learning Lab](https://svl.stanford.edu/) - ***スタンフォード***.

* [Noah Goodman](https://cocolab.stanford.edu/ndg.html) - ***心理学部門、コンピュータサイエンス部門、スタンフォード***、[Computation & Cognition Lab (CoCoLab)](https://cocolab.stanford.edu/) - ***スタンフォード***.

* [Michael Frank](https://web.stanford.edu/~mcfrank/) - ***心理学部、スタンフォード***、[The Stanford Language and Cognition Lab](http://langcog.stanford.edu/) - ***スタンフォード***。

* [Tobias Gerstenberg](https://cicl.stanford.edu/member/tobias_gerstenberg/) - ***心理学部、スタンフォード***、[Causality in Cognition Lab (CICL)](https://cicl.stanford.edu/) - ***スタンフォード***。

* [Chelsea Finn](http://ai.stanford.edu/~cbfinn/) - ***コンピュータサイエンス部、スタンフォード***、[Intelligence through Robotic Interaction at Scale (IRIS Group)](https://irislab.stanford.edu/) - ***スタンフォード***。

* [Jeremy Bailenson](https://comm.stanford.edu/faculty-bailenson/) - ***コミュニケーション部、スタンフォード***、[Virtual Human Interaction Lab (VHIL)](https://stanfordvr.com/) - ***スタンフォード***。

* [Jiajun Wu](https://jiajunwu.com/) - ***コンピュータサイエンス部、スタンフォード***。

* [Judith Fan](https://profiles.stanford.edu/judith-fan) - ***心理学科、スタンフォード大学***, [Cognitive Tools Lab](https://cogtoolslab.github.io/) - ***スタンフォード***.

*[Back to Top](#c)


### Princeton <a id="princeton"></a>

* [Tania Lombrozo](https://psych.princeton.edu/person/tania-lombrozo) - ***心理学科、プリンストン大学***, [Concepts & Cognition Lab](https://cognition.princeton.edu/) - ***プリンストン***.

* [Thomas Griffiths](https://cocosci.princeton.edu/tom/index.php) - ***心理学科、コンピュータサイエンス学科、プリンストン大学***, [Computational Cognitive Science Lab](https://cocosci.princeton.edu/index.php) - ***プリンストン***.

*[Back to Top](#c)


### Harvard <a id="harvard"></a>

* [Elizabeth Spelke](https://psychology.fas.harvard.edu/people/elizabeth-s-spelke) - ***心理学科、ハーバード大学***, [Harvard Laboratory for Developmental Studies](https://www.harvardlds.org/) - ***ハーバード***.

* [Tomer Ullman](https://www.tomerullman.org/) - ***心理学科、ハーバード大学***, [Computation, Cognition, and Development Lab (CoCoDev)](https://cocodev.fas.harvard.edu/) - ***ハーバード***.

* [Samuel Gershman](https://psychology.fas.harvard.edu/people/samuel-j-gershman) - ***心理学科、ハーバード大学***、[Computational Cognitive Neuroscience Lab (CCN Lab)](https://gershmanlab.com/) - ***ハーバード大学***。

* [Fiery Cushman](https://psychology.fas.harvard.edu/people/fiery-cushman) - ***心理学科、ハーバード大学***、[Moral Psychology Research Lab](https://cushmanlab.fas.harvard.edu/) - ***ハーバード大学***。

*[Back to Top](#c)


### UCLA <a id="ucla"></a>

* [Center for Vision, Cognition, Learning and Autonomy (VCLA)](http://vcla.stat.ucla.edu/) - ***統計学科、UCLA***。

* [Ying Nian Wu](http://www.stat.ucla.edu/~ywu/) - ***統計学科、UCLA***。

* [Tao Gao](http://www.stat.ucla.edu/~taogao/Taogao.html) - ***統計学科、心理学科、UCLA***、[Visual Intelligence Lab](http://www.stat.ucla.edu/~taogao/index.html) - ***UCLA***。

* [Hongjing Lu](https://www.psych.ucla.edu/faculty/page/hongjing) - ***心理学部門、統計学部門、UCLA***、[Computational Vision and Learning Lab (CVL)](http://cvl.psych.ucla.edu/) - ***UCLA***.

* [Guy Van den Broeck](http://web.cs.ucla.edu/~guyvdb/) - ***コンピュータサイエンス部門、UCLA***、[StarAI Lab](http://starai.cs.ucla.edu/#) - ***UCLA***.

*[Back to Top](#c)


### UC Berkeley <a id="uc-berkeley"></a>

* [Anca Dragan](https://people.eecs.berkeley.edu/~anca/index.html) - ***電気工学およびコンピュータサイエンス部門、UCベイリー***、[Interactive Autonomy and Collaborative Technologies Laboratory (InterACT)](http://interact.berkeley.edu/) - ***UCベイリー***.

* [Fei Xu](https://psychology.berkeley.edu/people/fei-xu) - ***心理学部門、UCベイリー***、[Berkeley Early Learning Lab (Xu Lab)](https://babylab5.wixsite.com/bell) - ***UCベイリー***.

* [Alison Gopnik](http://alisongopnik.com/) - ***心理学部門、UCベイリー***、[Cognitive Development & Learning Lab (Gopnik Lab)](http://www.gopniklab.berkeley.edu/) - ***UCベイリー***.

* [Steve Piantadosi](http://colala.berkeley.edu/people/piantadosi/) - ***心理学部、UCバークレー***、[The computation and language lab (colala)](http://colala.berkeley.edu/) - ***UCバークレー***。

* [Celeste Kidd](http://www.celestekidd.com/) - ***心理学部、UCバークレー***、[Kidd Lab](https://www.kiddlab.com/) - ***UCバークレー***。

*[Back to Top](#c)


### BNU <a id="bnu"></a>

* [Yanchao Bi](https://brain.bnu.edu.cn/English/Faculty/CurrentFaculty/Bzz/a552402e529a4f27b979378abd42c10e.htm) - ***IDG／マクゴビ脳研究研究所および北京师范大学認知神経科学と学習国家重点实验室、北京师范大学（BNU）***、[Yanchao Bi's Concept Lab (Bi Lab)](http://bilab.bnu.edu.cn/) - ***BNU***。

*[Back to Top](#c)


### PKU <a id="pku"></a>

* [Song-Chun Zhu](https://zhusongchun.net/) - ***人工知能学部および人工知能研究所、北京大学（PKU）***。

* [Yixin Zhu](https://yzhu.io/) - ***人工知能学部および人工知能研究所、北京大学（PKU）***、[Cognitive Reasoning Lab (CoRe Lab)](https://pku.ai/) - ***PKU***。

*[Back to Top](#c)


### UCSD <a id="ucsd"></a>

* [Zhuowen Tu](https://pages.ucsd.edu/~ztu/) - ***コンピュータ科学部、UCSD***、[Machine Learning, Perception, and Cognition Lab (mlPC)](https://pages.ucsd.edu/~ztu/Group.htm) - ***UCSD***.

* [Ed Vul](https://psychology.ucsd.edu/people/profiles/evul.html) - ***心理学部、UCSD***、[Computational Cognition Lab](http://www.evullab.org/index.html) - ***UCSD***.

*[Back to Top](#c)


### NYU <a id="nyu"></a>

* [Ernest Davis](https://cs.nyu.edu/~davise/) - ニューヨーク大学、コートン数学科学研究所のコンピュータ科学部門

* [Gary Marcus](http://garymarcus.com/index.html) - ニューヨーク大学心理学部

* [Brenden Lake](https://cims.nyu.edu/~brenden/) - ***心理学部、NYU***、[Human & Machine Learning Lab (Lake Lab)](https://lake-lab.github.io/) - ***NYU***.

* [Todd Gureckis](https://as.nyu.edu/faculty/todd-gureckis.html) - ***心理学部、NYU***、[Computation & Cognition Lab](http://gureckislab.org/) - ***NYU***.

* [Wei Ji Ma](http://www.cns.nyu.edu/malab/people.html) - ***心理学部、ニューヨーク大学神経科学センター、NYU***、[Wei Ji Ma Lab](http://www.cns.nyu.edu/malab/) - ***NYU***.

*[Back to Top](#c)


### JHU <a id="jhu"></a>

* [Chaz Firestone](https://perception.jhu.edu/chaz/) - ***心理・脳科学部門、ジョンズホプキンス大学（JHU）***, [Hopkins Perception & Mind Lab](https://perception.jhu.edu/) - ***JHU***.

*[Back to Top](#c)


### SIT <a id="sit"></a>

* [Mark Ho](https://markkho.github.io/) - ***コンピュータ科学部門、ステイブズ工科大学（SIT）***, [Computation and Decision-Making Lab](https://codec-lab.github.io/) - ***SIT***.

*[Back to Top](#c)



## 人物と書籍 <a id="people--book"></a>


### John Hopcroft <a id="john-hopcroft"></a>

理論計算機科学者です。

* [Introduction to Automata Theory, Languages, and Computation](http://elib.vku.udn.vn/bitstream/123456789/2543/1/2007.%20Introduction%20to%20Automata%20Theory%2C%20Languages%2C%20and%20Computations%20%283rd%20edition%29.pdf) - ***ペアソン***, 2007. [[All Versions](https://scholar.google.com/scholar?cluster=326269839585842480)].

* [Foundations of Data Science](http://www.cs.cornell.edu/jeh/book%20no%20so;utions%20March%202019.pdf) - ***ケンブリッジ大学出版局***. [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=1802704438630899850)].

*[Back to Top](#c)


### Ulf Grenander <a id="ulf-grenander"></a>

応用数学者で、一般パターン理論の創始者です。

* [A Calculus of Ideas: A Mathematical Study of Thinking](https://www.dam.brown.edu/ptg/REPORTS/calculustext.PDF) - ***ワールドサイエンティフィック出版株式会社***, 2012. [[All Versions](https://scholar.google.com/scholar?cluster=12182416000849265255&hl=en&as_sdt=0,5)].

* [General Pattern Theory: A Mathematical Study of Regular Structures](https://global.oup.com/academic/product/general-pattern-theory-9780198536710?cc=lt&lang=de#) - オックスフォード大学出版局、1993年。[[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=General+Pattern+Theory&btnG=)]。

*[Back to Top](#c)


### David Marr <a id="david-marr"></a>

計算認知神経科学者で、分析レベルを確立しました。

* [Vision: A Computational Investigation into the Human Representation and Processing of Visual Information](https://usa1lib.org/book/1223444/8e5ca8) - MIT出版局、1982年。[[All Versions](https://scholar.google.com/scholar?cluster=14386368570811483142&hl=en&as_sdt=0,44)]。

*[Back to Top](#c)


### Michael Tomasello <a id="michael-tomasello"></a>

認知科学者で、人間のコミュニケーション研究の基礎を築きました。

* [Origins of human communication](https://1lib.net/book/541274/39859f) - MIT出版局、2010年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=2553369883266458474)]。

* [The cultural origins of human cognition](https://hk1lib.org/book/541275/1452f8?id=541275&secret=1452f8) - ハーバード大学出版局、2000年。[[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=5000469061641945144)]。

*[Back to Top](#c)


### Judea Pearl <a id="judea-pearl"></a>

応用数学者で、シャム型ベイズネットワークへの因果介入を提案しました。

* [The Book of Why: The New Science of Cause and Effect](http://bayes.cs.ucla.edu/WHY/) - ベーシックブックス、2018年。[[All Versions](https://scholar.google.com/scholar?cluster=2505901292485349932&hl=en&as_sdt=0,5)]。

* [Causality: Models, Reasoning and Inference](https://hk1lib.org/book/2780725/2ec8f1?id=2780725&secret=2ec8f1) - カーヴィッジ大学プレス、2009年。 [[All Versions](https://scholar.google.com/scholar?cluster=10996260119229499611&hl=en&as_sdt=0,5&as_vis=1)].

*[Back to Top](#c)


### Susan Carey <a id="susan-carey"></a>

発達心理学者で、人間知能の中核知識として*物体*を提案しました。

* [The Origin of Concepts](https://hk1lib.org/book/844457/42178f?id=844457&secret=42178f) - オックスフォード大学プレス、2009年。 [[All Versions](https://scholar.google.com/scholar?cluster=11493102398422813821&hl=en&as_sdt=0,5)].

* [Conceptual Change in Childhood](https://hk1lib.org/book/3659332/11fa44) - MITプレス、1985年。 [[All Versions](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=conceptual+change+in+childhood+susan+carey&btnG=)].

*[Back to Top](#c)


### Daniel Kahneman <a id="daniel-kahneman"></a>

計算認知科学者・経済学者で、意思決定理論の基礎を築きました。

* [Thinking, fast and slow](https://hk1lib.org/book/2181569/f5e85a?id=2181569&secret=f5e85a) - ファラーファースト・ギルロックス、2011年。 [[All Versions](https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=3255681708785115121)].

*[Back to Top](#c)


### Karl Popper <a id="karl-popper"></a>

科学哲学者で、科学的検証理論の創始者です。

* [The logic of scientific discovery](https://hk1lib.org/book/511214/299596) - ルートジャード、2005年。 [[All Versions](https://scholar.google.com/scholar?cluster=5836864564733788424&hl=en&as_sdt=0,5)].

* [All Life is Problem Solving](https://hk1lib.org/book/2773070/c48f60) - ロートレード、2001年。 [[All Versions](https://scholar.google.com/scholar?cluster=9799073870888093350&hl=en&as_sdt=0,5)]。

*[Back to Top](#c)



## 本一覧について <a id="about"></a>

このリポジトリは、課題・技法・形而上学など多数の観点がある関連トピックを、***知能の科学***という観点から分類します。各トピックは知能の現象または知的行動を記述し、人間の知能を計算的方法へ逆設計する目的を示します。特定の技法や課題に限定せず、ソフトウェアとハードウェアの両面から知能の本質を整理します。

この読書リストはAGIと計算認知科学の全側面を網羅するものではありません。アブダクションとベイズモデリングの文献レビューから生まれたため、他のトピックには偏りがあります。既知から世界を説明し未知を発見する方法としてのアブダクションには、計算基盤、認知的基礎、AI応用のさらなる研究が必要です。

*[Back to Top](#c)
