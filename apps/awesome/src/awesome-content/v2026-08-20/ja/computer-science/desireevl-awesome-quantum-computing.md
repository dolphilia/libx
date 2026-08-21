---
title: "desireevl/awesome-quantum-computing"
description: "desireevl/awesome-quantum-computingの正規スナップショット"
licenseSource: "github-desireevl-awesome-quantum-computing-readme-md"
---

# Awesome Quantum Computing [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://raw.githubusercontent.com/desireevl/awesome-quantum-computing/master/logo.png" align="right" width="110">](https://en.wikipedia.org/wiki/Quantum_computing)

[量子コンピューティング](https://en.wikipedia.org/wiki/Quantum_computing)は、量子もつれや重ね合わせなどの量子力学的現象を利用して量子ビットを操作し、量子コンピューター上で計算を実行します。現在は、一般に利用可能な量子コンピューター上でプログラムを作成・実行するツールと、それらについて学ぶためのリソースが利用できます。

これは、量子コンピューターの学習と開発に関する最新リソースを厳選したリストです。最新かつ高品質のリソースを分類した、コミュニティ主導のコレクションを構築することを目標としています。

共有、提案、貢献はいつでも歓迎します。まず貢献ガイドラインと品質基準を確認してください。すべての貢献者に感謝します。皆さんは素晴らしく、皆さんなしには実現できません！

## 目次

- [学習](#learning)
- [MOOC](#moocs)
- [開発ツール](#development-tools)
- [ブログ](#blogs)
- [書籍](#books)
- [動画](#videos)
- [コミュニティ](#community)
- [ポッドキャスト](#podcasts)
- [英語以外の言語のコンテンツ](#content-in-non-english-languages)

オープンソースの量子ソフトウェアプロジェクトに関する追加リソースは、qosfの[リポジトリ](https://github.com/qosf/os_quantum_software)を確認してください。

## 学習

- [An Interactive Introduction to Quantum Computing](https://davidbkemp.github.io/QuantumComputingArticle/) - David Kempによる量子ゲート計算のインタラクティブ学習。
- [Black Opal](https://q-ctrl.com/black-opal) - 量子コンピューティングの基礎を学ぶためのインタラクティブプラットフォーム。
- [CNOT](https://cnot.io/) - 量子コンピューティングの概念を分かりやすく段階的に紹介します。
- [Chris Ferrie](https://csferrie.medium.com/) - オーストラリア・シドニーの大学教授で、『Quantum Computing for babies』などの著者。Mediumで優れた量子コンピューティング講義も提供します。
- [Documentation for Forest and pyQuil](http://pyquil.readthedocs.io/en/latest/) - Rigetti ComputingのSDK向けチュートリアル。
- [Documentation for Strawberry Fields](https://strawberryfields.readthedocs.io/en/latest/) - 光子連続変数量子計算アプローチの背景情報と、XanaduのSDK向けチュートリアル。
- [D-Wave Leap](https://www.dwavesys.com/take-leap) - D-Wave量子コンピューターへのアクセス、デモ、教育リソース。
- [IBM Q Full User Guide](https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=full-user-guide&page=introduction) - 量子コンピューティングとIBM Qを穏やかに紹介する短いチュートリアル。
- [Introduction to Quantum Computing](https://home.cern/news/announcement/computing/online-introductory-lectures-quantum-computing-6-november) - CERN（欧州原子核研究機構）による量子コンピューティングのオンライン入門講義。
- [John Preskill's Notes on Quantum Computation](http://www.theory.caltech.edu/~preskill/ph219/index.html#lecture) - John PreskillによるCaltechのQuantum Computation Course Physics 219/Computer Science 219のノート。
- [Nielsen and Chuang](https://workedproblems.wordpress.com/category/nielsenchuang/) - 量子アルゴリズム問題の解答例。
- [Qiskit Tutorials](https://github.com/Qiskit/qiskit-tutorial) - Qiskitの使い方を簡潔に示すJupyterノートブック。
- [Quantum Algorithm Implementations for Beginners](https://arxiv.org/pdf/1804.03719.pdf) - qiskitを使う20種の量子アルゴリズムの簡潔な概説。
- [Quantum Algorithm Zoo](http://math.nist.gov/quantum/zoo/) - 量子アルゴリズムの包括的なカタログ。
- [Quantum Algorithms](https://quantumalgorithms.org/) - 機械学習とデータ分析に焦点を当てた、量子アルゴリズムのオープンソース講義ノート集。
- [Quantum Computer Programming](https://cs269q.stanford.edu/syllabus.html?fbclid=IwAR09_JNstMi4WVU4oMHDpWR6xWaSISlrYPjWTUTnhcRdEQhzpoOTRgQN8LI) - 量子力学の背景を持たない人に量子コンピューティングを教える、実践的なStanfordコース。
- [Quantum Computing Foundations](https://docs.microsoft.com/en-us/learn/paths/quantum-computing-fundamentals/) - Azure Quantumと量子コンピューティングの要素を扱うMicrosoft Learn学習パス。
- [Quantum Computing Playground](http://www.quantumplayground.net/#/home) - 最大22量子ビットをシミュレートできる3D量子状態可視化ツール。
- [Quantum Computing UK](https://quantumcomputinguk.org/) - 無料のQiskitチュートリアルとコードリポジトリ。
- [Quantum Computing for the Very Curious](https://quantum.country/qcvc) - Michael NielsenとAndy Matuschakによる量子コンピューティング入門エッセイ。
- [Quantum Computing with Amazon Braket SDK](https://www.manning.com/liveprojectseries/quantum-computing-with-amazon-braket-sdk-ser) - Braket APIを紹介し、いくつかの単純なアルゴリズムの実装を学習者に案内するManning liveProjectシリーズ。
- [Quantum Computing with Microsoft QDK](https://www.manning.com/liveprojectseries/quantum-computing-with-five-projects) - Microsoft QDKを使って多様なプロトコルとアルゴリズムを実装するよう学習者を導くManning liveProjectシリーズ。
- [Quantum Inspire Knowledge Base](https://www.quantum-inspire.com/kbase/introduction-to-quantum-computing) - 基本的な量子コンピューティング概念が豊富な読みやすいナレッジベース。
- [Quantum in the Cloud](http://cnotmz.appspot.com/#) - 4量子ビット光量子シミュレーターおよびコンピューター。
- [Quantum Katas](https://github.com/Microsoft/QuantumKatas/) - 量子コンピューティングとQ#を学ぶプログラミング演習。
- [Quantum Machine Learning for Data Scientists](https://arxiv.org/pdf/1804.10068.pdf) - 量子機械学習アルゴリズムの説明。
- [Quirk](http://algassert.com/quirk) - リアルタイムに反応、シミュレート、アニメーションするブラウザーベースのドラッグ＆ドロップ量子回路シミュレーター。
- [QWorld's Bronze-Qiskit](https://gitlab.com/qworld/bronze-qiskit) - 非常に利用しやすい計算・プログラミング志向のチュートリアル。行列の基礎からGroverのアルゴリズムまでを扱い、チュートリアルを説明する付随動画もあります。
- [The Quantum Quest](https://www.quantum-quest.nl/) - 高校生向けに設計した量子コンピューティング原理の入門ウェブ講座。

## MOOC

- [Brilliant.org Quantum Computing](https://brilliant.org/courses/quantum-computing/) - 問題を通じた解説。MicrosoftおよびAlphabet Xと共同でキュレーションされています。
- [Introduction to Quantum Information Science](https://www.arturekert.org/iqis) - オックスフォード大学のArtur Ekert教授による『Introduction to Quantum Information』。
- [MIT Quantum Information Sciences](https://ocw.mit.edu/courses/media-arts-and-sciences/mas-865j-quantum-information-science-spring-2006/lecture-notes/) - MIT量子情報科学コースの講義ノートシリーズ。
- [Programming a Quantum Computer with Qiskit](https://www.coursera.org/projects/programming-quantum-computer-qiskit) - Qiskitを活用して量子コンピューター向けコードを書く方法を学ぶ、2時間のガイド付きコース。
- [QC101 Quantum Computing & Quantum Physics for Beginners](https://www.udemy.com/qc101-introduction-to-quantum-computing-quantum-physics-for-beginners/) - 量子暗号と量子プログラムの実行方法に関する入門コース。
- [Quantum Computing: Theory to Simulation and Programming](https://www.udemy.com/course/quantum-computing/) - D-Wave Quantum Annealerアーキテクチャを、いくつかの実践課題とともに理解します。
- [Quantum Information Science I, Part I](https://www.edx.org/course/quantum-information-science-i) - 量子情報と計算の基礎コース。
- [Quantum Machine Learning](https://www.edx.org/course/quantum-machine-learning) - 量子技術が機械学習にもたらし得る利点を学びます。
- [Quantum Mechanics and Quantum Computation](https://www.edx.org/course/quantum-mechanics-quantum-computation-uc-berkeleyx-cs-191x) - 量子力学の基本原理を概念的に紹介します。
- [The Introduction To Quantum Computing](https://www.coursera.org/learn/quantum-computing-algorithms) - 計算とその背後にある数学、量子的対応物を繊細に導入し、いくつかの量子アルゴリズムを詳細に議論します。
    - [Quantum Computing. Less Formulas - More Understanding](https://www.coursera.org/learn/quantum-computing-lfmu) - 前のコースと同じ教授による、数学より量子概念へ焦点を当てた講座。
- [The Quantum Internet and Quantum Computers: How Will They Change the World?](https://www.edx.org/course/quantum-internet-quantum-computers-how-delftx-qtm1x) - 量子コンピューターと量子インターネットの発展の原理・可能性、それらが将来へ与える影響を学びます。
- [Understanding Quantum Computers](https://www.futurelearn.com/courses/intro-to-quantum-computing) - 最小限の数学で量子コンピューティングの主要概念を紹介します。

## 開発ツール

- [Amazon Braket](https://aws.amazon.com/braket/) - 量子シミュレーターと量子コンピューターで量子回路を実行する開発環境を提供するフルマネージドサービス。
- [Blueqat](https://github.com/Blueqat/Blueqat) - 量子ゲート計算向けPythonソフトウェア開発キット。
- [Boulder Opal](https://q-ctrl.com/boulder-opal) - 量子ハードウェア性能を自動化・最適化するPythonツールセット。
- [Cirq](https://github.com/quantumlib/Cirq) - 量子コンピューター上で実行するNISQ回路を記述、操作、最適化するPythonライブラリー。
- [Covalent](https://github.com/AgnostiqHQ/covalent) - CPU、GPU、量子コンピューターまでの異種基盤上で分散計算を行うフレームワーク。
- [Fire Opal](https://q-ctrl.com/fire-opal) - 量子アルゴリズム結果の品質を改善するPythonパッケージ。
- [IBM Quantum Experience](https://quantum-computing.ibm.com) - 実際の量子計算ハードウェアで実験を実行するオンライン量子コンポーザー。
- [Mitiq](https://mitiq.readthedocs.io/) - 量子コンピューター上でエラー緩和技術を実装するPythonツールキット。
- [NISQAI](https://github.com/quantumai-lib/nisqai) - 近未来の量子コンピューター上で量子人工知能を実行するライブラリー。
- [Ocean](https://docs.ocean.dwavesys.com/en/latest/overview/install.html) - Pythonを用いてD-Wave量子コンピューター上で開発するためのSDK。
- [Orquestra](https://www.zapatacomputing.com/orquestra/) - 量子対応ワークフローを可能にするZapata Computingの統合量子実行環境。
- [Paddle Quantum](https://github.com/PaddlePaddle/Quantum) - 量子機械学習向けBaiduのPythonツールキット。
- [PennyLane](http://github.com/XanaduAI/pennylane) - さまざまな他プラットフォームを統合する、量子コンピューティングと量子機械学習向けオープンソースフレームワーク。
- [Project Q](http://projectq.ch/) - Pythonで量子コンピューティングを実装するフレームワーク。
- [pyQuil](https://github.com/rigetticomputing/pyquil) - RigettiのQuilを用いた量子プログラミング向けPythonライブラリー。
- [pytket](https://cqcl.github.io/pytket/build/html/index.html) - 回路最適化・量子ビット割り当てツールであるCambridge Quantum Computingのt|ket>と連携するPythonモジュール。
- [QCL](http://tph.tuwien.ac.at/~oemer/qcl.html) - 量子コンピューター向けの古いC風言語。シミュレーターとデバッガーのみを備えます。
- [Qiskit SDK](https://qiskit.org) - シミュレーターおよび実機ハードウェアで量子アルゴリズムを記述・実行するIBMのソフトウェア開発キット。
- [Qiskit.js](https://github.com/QISKit/qiskit-js) - IBMが作成したJavaScript向けQiskit。
- [Qrack](https://vm6502q.readthedocs.io) - 高性能なLGPLライセンスのC++量子シミュレーターライブラリー、ドキュメント、テストコード。
- [Quantum++](https://github.com/vsoftco/qpp) - 高性能なモダンC++11量子コンピューティングライブラリー。
- [Quantum Inspire](https://www.quantum-inspire.com/) - QuTechによる、シミュレーターまたは量子ハードウェアで量子アルゴリズムを実行するプラットフォーム。
- [Quantum Programming Studio](https://quantum-circuit.com/) - ウェブベースの量子プログラミングIDE・シミュレーター。
- [Quipper](https://www.mathstat.dal.ca/~selinger/quipper/) - 量子コンピューティング向けの埋め込み型・スケーラブル・関数型プログラミング言語。
- [Qurry](https://github.com/LSaldyt/Qurry) - 関数型・確率的パラダイムに基づく量子確率プログラミング言語。
- [QuTiP](http://qutip.org/docs/latest/index.html) - 開放量子系のダイナミクスをシミュレートするPython量子ツールボックス。
- [Q#](https://docs.microsoft.com/en-gb/quantum/?view=qsharp-preview) - Microsoftの量子開発キットおよびQ#プログラミング言語。
- [Strangeworks Platform](https://quantumcomputing.com/) - 特定のハードウェアソリューション構築ではなく、開発へ集中できるハードウェア非依存のプラットフォーム・インターフェース。
- [TensorFlow Quantum](https://www.tensorflow.org/quantum) - 古典・量子データ向けハイブリッド量子古典モデルのプロトタイピングのため、CirqとTensorFlowを統合する量子機械学習ライブラリー。
- [Tequila](https://github.com/aspuru-guzik-group/tequila) - Alan Aspuru-Guzikグループ（トロント大学）が開発した、拡張可能な量子情報・学習アーキテクチャ。

## ブログ

- [Algorithmic Assertions](http://algassert.com/) - Google Quantum Computing TeamのメンバーCraig Gidneyによる、量子コンピューティングと計算全般についてのブログ。
- [Bits of Quantum](http://blog.qutech.nl/) - QuTech機関による、研究と日常生活の共有。
- [Dawid Kopczyk](http://dkopczyk.quantee.co.uk/category/quantum_computing/) - データサイエンティスト向けに可視化を用いて量子アルゴリズムを説明します。
- [Decodoku](https://medium.com/@decodoku) - James Woottonによる量子計算の興味深い記事。
- [Microsoft Quantum blog](https://cloudblogs.microsoft.com/quantum/) - Microsoft Quantumプログラム全体の更新情報。
- [Musty Thoughts](http://mustythoughts.com) - Michał Stęchłyの個人ブログ。量子コンピューティングを学び始める人向けの記事を多数含みます。
- [Qiskit blog](https://medium.com/qiskit) - Qiskitコミュニティチームによる量子計算のすべて。
- [Quantumfy](https://quantumfyed.com/) - 最新の量子コンピューティングニュースと量子インフォグラフィックの断片。
- [Quantum Frontiers](https://quantumfrontiers.com/) - Quantum Institute for Quantum Information and Matterによる、舞台裏の研究洞察の共有。
- [Quantum Weekly](https://quantumweekly.com/) - 量子計算、暗号、もつれなど量子に関するあらゆることの週次まとめ。
- [Quantum Zeitgeist](https://quantumzeitgeist.com/) - 量子コンピューティング、QC企業、キャリアに関する最新ニュースを扱います。
- [Q# Blog](https://devblogs.microsoft.com/qsharp/) - Microsoft Quantum開発の更新情報。
- [Shtetl-Optimized](https://www.scottaaronson.com/blog/) - Scott Aaronsonによる量子コンピューティングに関する考察。
- [The Quantum Aviary](https://thequantumaviary.blogspot.com/) - 量子ハードウェアの発展を誇張なく語るブログ。
- [The Quantum Daily](https://thequantumdaily.com/) - 量子コンピューティングの最新ニュースを扱い、研究科学者と好奇心旺盛な一般読者の双方へ記事を提供します。
- [xa0](https://blog.xa0.de/list) - 量子コンピューティング最適化の新しい研究と詳細分析。

## 書籍
- [An Introduction to Quantum Computing](https://www.amazon.com/Introduction-Quantum-Computing-Phillip-Kaye/dp/019857049X/) - 分かりやすさと数学的厳密さの優れた均衡を取り、学部生に適します。
- [Classical and Quantum Computation](https://books.google.com.au/books/about/Classical_and_Quantum_Computation.html?id=TrMposZZ0MQC&redir_esc=y) - 古典・量子計算の基礎を紹介します。
- [Dancing with Qubits](https://www.robertsutor.com/dancing-with-qubits/) - 量子コンピューティングの仕組みと、それが世界をどう変えるか。
- [Introduction to Classical and Quantum Computing](http://www.thomaswong.net/) - 入門量子コンピューティング教科書。前提は三角法のみで、数学も段階的に教えます。
- [Learn Quantum Computation using Qiskit](http://community.qiskit.org/textbook) - 量子アルゴリズムを扱い、Qiskitで実機ハードウェア上に実行する方法を示すオープンソース教科書。前提知識も扱います。
- [Learn Quantum Computing with Python and Q#](https://www.manning.com/books/learn-quantum-computing-with-python-and-q-sharp) - 量子プログラミングのためのMicrosoft新言語Q#とPythonを使って量子コンピューティングを紹介します。
- [Problems and Solutions in Quantum Computing](https://www.worldscientific.com/worldscibooks/10.1142/6077#) - 詳細な解答を備える、初級から高度な量子計算・情報問題。
- [Programming Quantum Computers: Essential Algorithms and Code Samples](https://www.amazon.com/Programming-Quantum-Computers-Essential-Algorithms/dp/1492039683) - 概念と複数言語によるプログラミング例に焦点を当てた、実践的な量子コンピューティング入門。
- [Quantum Computation and Quantum Information](http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf) - 数学、コンピューターサイエンス、物理学の事前知識を持つ人向けの包括的な教科書。
- [Quantum Computing: An Applied Approach](https://www.springer.com/gp/book/9783030239213) - 量子コンピューティングの基礎から量子系の数学までを説明する実践的入門。
- [Quantum Computing: A Gentle Introduction](http://mmrc.amss.cas.cn/tlb/201702/W020170224608150244118.pdf) - 基本的な大学数学のみで量子コンピューティングを説明します。
- [Quantum Computing Explained](https://www.amazon.com/Quantum-Computing-Explained-David-McMahon/dp/0470096993) - 解答例を交えた会話的アプローチで量子コンピューティングを説明します。
- [Quantum Computing for Computer Scientists](https://www.amazon.com/Quantum-Computing-Computer-Scientists-Yanofsky/dp/0521879965) - コンピューターサイエンス学部生が理解しやすいアプローチで量子コンピューティングを説明します。
- [Quantum Computing for Everyone](https://www.amazon.com/Quantum-Computing-Everyone-Mit-Press/dp/0262539535) - 一般読者向けに量子ビット、もつれ、量子テレポーテーションなどを紹介します。
- [Quantum Computing for the Quantum Curious](https://link.springer.com/book/10.1007%2F978-3-030-61601-4) - 高校生、大学生、一般向けの自由に利用できる量子コンピューティング教科書。
- [Quantum Computing in Action](https://www.manning.com/books/quantum-computing-in-action) - 量子コンピューティングを早く始めたい、あらゆるレベルのJava開発者向け。
- [Understanding Quantum Technologies](https://www.oezratty.net/wordpress/2021/understanding-quantum-technologies-2021/) - 量子技術の全側面を360度の視点で扱う優れた書籍。

## 一般向け科学
- [Quantum Computing Since Democritus](https://www.amazon.com/Quantum-Computing-since-Democritus-Aaronson/dp/0521199565) - 量子コンピューティングと計算複雑性理論の親しみやすい入門。最も幅広い読者を対象とし、哲学に関連する話題も含みます。
- [Seth Lloyd. Programming the Universe_ A Quantum Computer Scientist Takes on the Cosmos](https://www.amazon.com/Programming-Universe-Quantum-Computer-Scientist-ebook/dp/B000GCFBP6) - 宇宙が巨大な量子コンピューターだったらどうなるか。宇宙の計算モデルと物理学への含意を巡る旅へ読者を導きます。
- [The Fabric of Reality: The Science of Parallel Universes and Its Implications](https://www.amazon.com/Fabric-Reality-Parallel-Universes-Implications/dp/014027541X) - 現実の統一的な構造を明らかにする、哲学的精神を持つ本。

## 動画

- [Anastasia Marchenkova](https://www.youtube.com/channel/UCzaYH6WeohiHKj3Ih_GdZdQ) - 量子コンピューティングの話題と一般技術に焦点を当てるYouTubeチャンネル。
- [Circuit Sessions](https://www.youtube.com/watch?v=Omv-bPvQ3E8&list=PLOFEBzvs-VvrRlVz7wqaqmaMZj_ZK2Afe) - 学界・業界研究者による講義シリーズを通じ、量子回路の価値と利用を探究するQiskitシリーズ。
- [Coding with Qiskit video series](https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY) - 量子アルゴリズムの書き方を示すYouTube動画シリーズ。
- [Introduction to Quantum Programming](https://skillsmatter.com/skillscasts/11929-programming-the-world-s-first-quantum-computers-using-forest) - RigettiのPython Forest SDKへ焦点を当てた、量子プログラミングの理由と方法。
- [Ph/CS 219A at Caltech: Quantum Computation](https://www.youtube.com/playlist?list=PL0ojjrEqIyPy-1RRD8cTD_lF1hflo89Iu) - John Preskillが2020年秋にCaltechで教えた量子計算コース、第1学期の講義。
- [Quantum Computing for Computer Scientists](https://www.youtube.com/watch?v=F_Riqjdh2oM) - コンピューターサイエンティスト向け入門量子コンピューティングに関するMicrosoft Research Talk。長さは1時間28分。
- [Quantum Computing for the Determined](https://www.youtube.com/playlist?list=PL1826E60FD05B44E4) - [Michael Nielsen](http://michaelnielsen.org/)による量子コンピューティング基礎の講義シリーズ。
- [Quantum Computation and Information at CMU](https://www.youtube.com/playlist?list=PLm3J0oaFux3YL5qLskC6xQ24JpMwOAeJz) - [CMUのO'Donnell教授](https://www.cs.cmu.edu/~odonnell/quantum18/)による量子コンピューティング講義シリーズ。
- [Quantum Impact](https://www.youtube.com/playlist?list=PLFPUGjQjckXFsOEBvvaDeIk5GxctP0ZhX) - 量子コンピューティングが土地最適化のような世界で最も困難な問題を科学者が解決する助けとなる方法を理解します。
- [Quantum Computing Seminar Series](https://www.youtube.com/watch?v=iKgysY097Ok&list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2) - 最近の研究を議論するQiskitシリーズ。
- [Quantum Mechanics by PBS Space Time](https://www.youtube.com/playlist?list=PLsPUh22kYmNCGaVGuGfKfJl-6RdHiCjo1) - 量子力学と計算に関する一般的概念を、幅広い対象へ届けるYouTubeプレイリスト。

## コミュニティ

- [D-Wave Leap Community](https://support.dwavesys.com/hc/en-us/community/topics) - D-Wave SystemsのLeap Community Forum。
- [IBM Q Community](https://community.qiskit.org/) - 今後のイベントと最新プログラム一覧を備えるIBM Q Communityページ。
- [IBM Q Qiskit Community](https://qiskit.slack.com/) - Qiskitと量子コンピューティングの議論向けSlackチャンネル。
- [Mike & Ike Subreddit](https://www.reddit.com/r/MikeAndIke/) - 書籍『Quantum Computation and Quantum Information』に関する議論。
- [Pennylane Discussion Forum](https://discuss.pennylane.ai/) - シミュレーションと近未来ハードウェアの両方を使う量子機械学習の議論フォーラム。
- [Quantum Computing Slack Community](https://quantum-computing.herokuapp.com/) - 量子コンピューティングを議論するSlackチャンネル。
- [Quantum Computing StackExchange](http://quantumcomputing.stackexchange.com/) - 量子コンピューティングの質問・回答サイト。
- [Quantum Computing Subreddit](https://www.reddit.com/r/QuantumComputing/) - 多くの量子コンピューティング話題を議論するコミュニティ。
- [Quantum Inferiority](https://matrix.to/#/#quantum_inferiority:chat.weho.st) - Matrix上の量子プログラミングチャット。言語非依存で、専門知識は不要です。
- [Quantum Information and Quantum Computer Scientists of the World Unite](https://www.facebook.com/groups/qinfo.scientists.unite/) - 量子研究の議論向けFacebookグループ。
- [Q# Community](https://qsharp.community) - Q#言語向けのコミュニティ提供ライブラリー、プロジェクト、デモ。
- [Rigetti Community](https://join.slack.com/t/rigetti-forest/shared_invite/enQtNTUyNTE1ODg3MzE2LWExZWU5OTE4YTJhMmE2NGNjMThjOTM1MjlkYTA5ZmUxNTJlOTVmMWE0YjA3Y2M2YmQzNTZhNTBlMTYyODRjMzA) - Rigettiと量子コンピューティングの議論向けSlackチャンネル。
- [Strawberry Fields Community](https://u.strawberryfields.ai/slack) - XanaduとStrawberry Fieldsの光子／CV量子コンピューティングを議論するSlackチャンネル。

## ポッドキャスト

- [Meet the meQuanics](https://soundcloud.com/mequanics) - 一般の人を対象とする、量子コンピューティングの主要人物へのインタビュー。
- [Quantum Computing Now](https://anchor.fm/quantumcomputingnow) - Ethan Hansenによるポッドキャスト。量子コンピューティングの基礎、インタビュー、最新ニュースという三つの主要話題を扱います。
- [The Qubit Guy's Podcast](https://www.classiq.io/insights#podcasts) - [Classiq Technologies](https://www.classiq.io)のYuval Bogerによる、量子コンピューティング業界の思想的リーダーを扱うポッドキャスト。

## 英語以外の言語のコンテンツ

- [Quantum Computing in Portuguese](https://github.com/smendoncabruna/ComputacaoQuantica) - ポルトガル語による量子コンピューティングのキュレーション済みコンテンツを含むリポジトリ。

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Desiree Vogt-Lee](https://github.com/desireevl)は、この著作物に関するすべての著作権および関連する権利または隣接権を放棄しています。
