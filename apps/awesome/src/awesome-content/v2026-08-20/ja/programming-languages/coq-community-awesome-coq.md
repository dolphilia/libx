---
title: "coq-community/awesome-coq"
description: "coq-community/awesome-coq の定本スナップショット"
licenseSource: "github-coq-community-awesome-coq-readme-md"
---

# Awesome Coq [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="coq-logo.svg" align="right" width="100" alt="coq-community logo" title="Awesome Coq is a coq-community project">](https://github.com/coq-community/manifesto)

> 優れたCoq Library、Plugin、Tool、資料を厳選したリストです。

[Coq Proof Assistant](https://coq.inria.fr)は、数学的定義、実行可能Algorithm、定理を書くための形式言語と、機械検査される証明を半対話的に開発する環境を提供します。

コントリビューションを歓迎します。最初に[ガイドライン](https://github.com/coq-community/awesome-coq/blob/master/CONTRIBUTING.md)をお読みください。

## 目次

- [プロジェクト](#projects)
  - [Framework](#frameworks)
  - [User Interface](#user-interfaces)
  - [Library](#libraries)
  - [Package／Build管理](#package-and-build-management)
  - [Plugin](#plugins)
  - [Puzzle／Game](#puzzles-and-games)
  - [Tool](#tools)
  - [型理論と数学](#type-theory-and-mathematics)
  - [検証済みSoftware](#verified-software)
- [資料](#resources)
  - [Community](#community)
  - [Blog](#blogs)
  - [書籍](#books)
  - [講義資料](#course-material)
  - [Tutorial／Hint](#tutorials-and-hints)

---

## プロジェクト

### Framework

- [ConCert](https://github.com/AU-COBRA/ConCert) - 複数のSmart Contract言語へのCode Extraction Pipelineを備えたTest／検証Framework。
- [CoqEAL](https://github.com/CoqEAL/CoqEAL) - 証明内のData Representation変更を容易にするFramework。
- [FCF](https://github.com/adampetcher/fcf) - 暗号学的証明のFramework。
- [Fiat](https://github.com/mit-plv/fiat) - Correct-by-Construction Programをほぼ自動合成。
- [FreeSpec](https://github.com/lthms/FreeSpec) - Effect／Effect Handlerを持つProgramをModularに検証するFramework。
- [Hoare Type Theory](https://github.com/imdea-software/htt/) - Type Theoryとして定式化した逐次Separation LogicのShallow Embedding。
- [Hybrid](https://www.site.uottawa.ca/~afelty/HybridCoq/) - Object LogicのHigher-Order Abstract Syntax表現で推論するSystem。
- [Iris](https://iris-project.org) - Higher-Order Concurrent Separation Logic Framework。
- [Q\*cert](https://github.com/querycert/qcert) - Query Compilerを実装・検証するPlatform。
- [SSProve](https://github.com/SSProve/ssprove) - Mathematical Components LibraryベースのModularな暗号学的証明Framework。
- [VCFloat](https://github.com/VeriNum/vcfloat) - 浮動小数点計算を行うC Programの検証Framework。
- [Verdi](https://github.com/uwplse/verdi) - 分散System実装を形式検証するFramework。
- [VST](https://vst.cs.princeton.edu) - CompCert CompilerのClight言語に対して健全なHigher-Order Concurrent Impredicative Separation Logicで、Coq内のC Codeを検証するToolchain。

### User Interface

- [CoqIDE](https://coq.inria.fr/refman/practical-tools/coqide.html) - Coqと対話するStandalone Graphical Tool。
- [Coqtail](https://github.com/whonore/Coqtail) - Vim Text EditorベースのCoq Interface。
- [Coq LSP](https://github.com/ejgallego/coq-lsp) - 独自Document Checking Engineを持つVisual Studio Code／VSCodium向けLanguage Server／Extension。
- [Proof General](https://proofgeneral.github.io) - 拡張・CustomizableなEmacsベースのProof Assistant汎用Interface。
- [Company-Coq](https://github.com/cpitclaudel/company-coq) - Proof GeneralのCoq Mode向けIDE Extension。
- [opam-switch-mode](https://github.com/ProofGeneral/opam-switch-mode) - Menu／Commandからopam SwitchをLocal変更・ResetするProof General Extension。
- [jsCoq](https://github.com/jscoq/jscoq) - BrowserでCoq Projectを実行できるJavaScript移植版。
- [Jupyter kernel for Coq](https://github.com/EugeneLoy/coq_jupyter) - Jupyter Notebook Web環境のCoq対応。
- [VsCoq](https://github.com/coq-community/vscoq) - Visual Studio Code／VSCodium向けLanguage Server／Extension。
- [VsCoq Legacy](https://github.com/coq-community/vscoq/tree/vscoq1) - Coq旧XML Protocolを使う後方互換Visual Studio Code／VSCodium Extension。
- [Waterproof editor](https://github.com/impermeable/waterproof) - 対話型Notebookで数学証明を書く教育環境。
- [Tree Sitter Rocq](https://github.com/lamg/tree-sitter-rocq) - [Helix](https://github.com/helix-editor/helix)などのSyntax Highlightに有用な部分的Rocq Tree-Sitter Grammar。Rocq Codeの完全なParseには非推奨。

### Library

- [ALEA](https://github.com/coq-community/alea) - Randomized Algorithmを推論するLibrary。
- [Algebra Tactics](https://github.com/math-comp/algebra-tactics) - Mathematical Components向けRing／Field Tactic。
- [Bignums](https://github.com/coq/bignums) - 任意精度数Library。
- [Bedrock Bit Vectors](https://github.com/mit-plv/bbv) - 固定精度Machine Wordを推論するLibrary。
- [CertiGraph](https://github.com/Salamari/CertiGraph) - Directed GraphとSeparation Logic内へのEmbeddingを推論。
- [CoLoR](https://github.com/fblanqui/color) - Rewriting Theory、Lambda Calculus、TerminationのLibrary。Coq Standard Libraryを拡張する一般Data Structure Sub-Libraryを含みます。
- [coq-haskell](https://github.com/jwiegley/coq-haskell) - Haskell利用者のCoq移行を滑らかにするLibrary。
- [Coq-Kruskal](https://github.com/DmxLarchey/Coq-Kruskal) - Rose TreeとKruskal Tree Theorem関連Library集。
- [CoqInterval](https://gitlab.inria.fr/coqinterval/interval/) - 実数式の不等式証明を行うTactic。
- [Coq record update](https://github.com/tchajed/coq-record-update) - Coq Record Fieldを汎用的に更新するLibrary。
- [Coq-std++](https://gitlab.mpi-sws.org/iris/stdpp) - Coq向け拡張代替Standard Library。
- [ExtLib](https://github.com/coq-community/coq-ext-lib) - ほかのCoq開発で有用なTheory／Plugin集。
- [FCSL-PCM](https://github.com/imdea-software/fcsl-pcm) - Pointer操作Programの検証で使うPartial Commutative Monoidの形式化。
- [Flocq](https://gitlab.inria.fr/flocq/flocq) - 浮動小数点数・計算の形式化。
- [Formalised Undecidable Problems](https://github.com/uds-psl/coq-library-undecidability) - 決定不能問題とそれらのReductionのLibrary。
- [Hahn](https://github.com/vafeiadis/hahn) - ListとBinary Relationを推論するLibrary。
- [Interaction Trees](https://github.com/DeepSpec/InteractionTrees) - Recursive／Impure Programを表現するLibrary。
- [LibHyps](https://github.com/Matafou/LibHyps) - 証明内のHypothesisを管理・操作するLtac Tactic Library。
- [MathComp Extra](https://github.com/thery/mathcomp-extra) - AKS Primality Test、RSA暗号化・復号などMathematical Components追加資料。
- [Mczify](https://github.com/math-comp/mczify) - Mathematical Componentsの数定義でMicromega Arithmetic Solverを利用可能にするLibrary。
- [Metalib](https://github.com/plclub/metalib) - Locally Nameless Variable Binding表現を使うProgramming Language Metatheory Library。
- [Paco](http://plv.mpi-sws.org/paco/) - Parameterized Coinduction Library。
- [Regular Language Representations](https://github.com/coq-community/reglang) - Regular Expression／Automataを含むRegular Languageの各定義間の変換。
- [Relation Algebra](https://github.com/damien-pous/relation-algebra) - Heterogeneous Binary RelationをModelとするAlgebraのModular形式化。
- [Simple IO](https://github.com/Lysxia/coq-simple-io) - 利用者定義Primitive Operationを持つI/O Monad。
- [TLC](https://github.com/charguer/tlc) - Coq Standard LibraryのNon-Constructive代替。

### Package／Build管理

- [coq_makefile](https://coq.inria.fr/refman/practical-tools/utilities.html) - Coq同梱でMakefile生成ベースのBuild Tool。
- [Coq Nix Toolbox](https://github.com/coq-community/coq-nix-toolbox) - CoqのLocal Build／CIを自動化するNix Helper Script。
- [Coq Package Index](https://coq.inria.fr/opam/www/) - opamベースのCoq Package集。
- [Coq Platform](https://github.com/coq/platform) - 産業、教育、研究でのCoq利用を支えるPackage選集。
- [coq-community Templates](https://github.com/coq-community/templates) - Coq Project設定File生成Template。
- [Debian Coq packages](https://people.debian.org/~jpuydt/coq_platform.html) - Debian Testing Distributionで利用可能なCoq関連Package。
- [Docker-Coq](https://github.com/coq-community/docker-coq) - 多数のCoq Version向けDocker Image。
- [Docker-MathComp](https://github.com/math-comp/docker-mathcomp) - Coq／Mathematical Componentsの多数のVersion組み合わせ向けDocker Image。
- [Docker-Coq GitHub Action](https://github.com/marketplace/actions/docker-coq-action) - Docker-Coq／Docker-MathCompで使えるGitHub Container Action。
- [Dune](https://dune.build) - OCaml／Coq向けComposableでOpinionatedなBuild System（旧jbuilder）。
- [Nix](https://nixos.org/nix/) - Atomic Upgrade／Rollback対応のLinuxなどUnix System向けPackage Manager。
- [Nix Coq packages](https://search.nixos.org/packages?channel=unstable&query=coqPackages) - Nix向けCoq関連Package集。
- [opam](https://opam.ocaml.org) - Multiple Compiler対応で柔軟かつGit-FriendlyなOCaml／Coq Package Manager。

### Plugin

- [AAC Tactics](https://github.com/coq-community/aac-tactics) - 一部OperatorのAssociativity／Commutativityを法としてUniversally Quantified Equationを書き換えるTactic。
- [Coinduction](https://github.com/damien-pous/coinduction) - 強化Coinductionによる証明Plugin。
- [Coq-Elpi](https://github.com/LPCIC/coq-elpi) - Command／Tactic実装の広範なAPIを提供するλPrologベースExtension Framework。
- [CoqHammer](https://github.com/lukaszcz/coqhammer) - 過去の証明学習、Automated Proverへの問題変換、発見した証明の再構成を組み合わせる汎用Automated Reasoning Hammer Tool。
- [Equations](https://github.com/mattam82/Coq-Equations) - Coq向け関数定義Package。
- [Gappa](https://gitlab.inria.fr/gappa/coq) - 浮動小数点Arithmetic／Round-Off ErrorのGoalを解くTactic。
- [Hierarchy Builder](https://github.com/math-comp/hierarchy-builder) - Packed ClassベースのCoq Hierarchy宣言Command集。
- [Itauto](https://gitlab.inria.fr/fbesson/itauto) - Function Symbol、Constructor、Arithmeticの命題推論を組み合わせるSMT風Tactic。
- [Ltac2](https://coq.inria.fr/refman/proof-engine/ltac2.html) - 古典的Ltacに似た実験的Typed Tactic Language。
- [MetaCoq](https://github.com/MetaCoq/metacoq) - CoqをCoqで形式化し、Coq Term操作／Certified Plugin開発Toolを提供するProject。
- [Mtac2](https://github.com/Mtac2/Mtac2) - Backward Reasoning向けTyped Tacticを追加するPlugin。
- [Paramcoq](https://github.com/coq-community/paramcoq) - Coq TermのParametricity Translationを生成。
- [QuickChick](https://github.com/QuickChick/QuickChick) - Randomized Property-Based Testing Plugin。
- [SMTCoq](https://github.com/smtcoq/smtcoq) - 外部SAT／SMT Solver由来Proof Witnessを検査するTool。
- [Tactician](https://coq-tactician.github.io) - 導入済みCoq Package全体のTactic Scriptから学び、次に実行するTacticを提案、またはProof Synthesisを完全自動化する対話型Tool。
- [Unicoq](https://github.com/unicoq/unicoq) - 既存Unification Algorithmを強化版へ置換するPlugin。
- [Waterproof proof language](https://github.com/impermeable/coq-waterproof) - 非機械的な数学証明に似たStyleでProof Scriptを書くLanguageを提供。

### Puzzle／Game

- [Coqoban](https://github.com/coq-community/coqoban) - 日本の倉庫番GameのCoq実装。
- [Hanoi](https://github.com/thery/hanoi) - 一般化とConfiguration定理を含むCoqのTower of Hanoi。
- [Mini-Rubik](https://github.com/thery/minirubik) - 2x2x2 Rubik's CubeのCoq形式化／Solver。
- [Name the Biggest Number](https://github.com/codyroux/name-the-biggest-number) - Coqで最大数の称号を証明した候補を投稿するRepository。
- [Natural Number Game](https://github.com/uncomputable/natural-number-game) - Lean Prover向けNatural Number GameのCoq版。
- [Sudoku](https://github.com/coq-community/sudoku) - Sudoku Number-Placement PuzzleのCoq形式化／Solver。
- [T2048](https://github.com/thery/T2048) - 2048 Sliding Tile GameのCoq版。

### Tool

- [Alectryon](https://github.com/cpitclaudel/alectryon) - Coq Codeと文章を組み合わせた技術文書を書くTool集。
- [Autosubst-ocaml](https://github.com/uds-psl/autosubst-ocaml) - Renaming／SubstitutionなどSyntax内Binder処理用Coq Code生成Tool。
- [CFML](https://gitlab.inria.fr/charguer/cfml2) - Separation LogicでOCaml ProgramのPropertyを証明。
- [coq2html](https://github.com/xavierleroy/coq2html) - Coq向け代替HTML Documentation Generator。
- [coqdoc](https://coq.inria.fr/refman/using/tools/coqdoc.html) - Coq CodeからLaTeX／HTML Fileを生成する標準Documentation Tool。
- [CoqOfOCaml](https://github.com/clarus/coq-of-ocaml) - OCaml CodeからIdiomaticなCoqを生成。
- [coq-dpdgraph](https://github.com/coq-community/coq-dpdgraph) - Coq Object間Dependency Graphを構築。
- [coq-scripts](https://github.com/JasonGross/coq-scripts) - Proof時間集計などCoq File処理Script。
- [coq-tools](https://github.com/JasonGross/coq-tools) - Coq Development操作Script。
  - [`find-bug.py`](https://github.com/JasonGross/coq-tools/blob/master/find-bug.py) - Errorを生むSource Fileを自動最小化し、Coq Bugの小さなTest Caseを作成。
  - [`absolutize-imports.py`](https://github.com/JasonGross/coq-tools/blob/master/absolutize-imports.py) - File Name Shadowingに対しDependency読込を堅牢化。
  - [`inline-imports.py`](https://github.com/JasonGross/coq-tools/blob/master/inline-imports.py) - 全Dependency読込をInline化し、DevelopmentからStandalone Source Fileを作成。
  - [`minimize-requires.py`](https://github.com/JasonGross/coq-tools/blob/master/minimize-requires.py) - 未使用Dependencyの読込を除去。
  - [`move-requires.py`](https://github.com/JasonGross/coq-tools/blob/master/move-requires.py) - 全Dependency読込文をSource File先頭へ移動。
  - [`move-vernaculars.py`](https://github.com/JasonGross/coq-tools/blob/master/move-vernaculars.py) - 多数のVernacular Command／Inner LemmaをProof Script Block外へ移動。
  - [`proof-using-helper.py`](https://github.com/JasonGross/coq-tools/blob/master/proof-using-helper.py) - Source FileへProof Annotationを追加し、Parallel Provingを高速化。
- [Cosette](https://github.com/uwdb/Cosette) - SQL Query Equivalenceを推論するAutomated Solver。
- [hs-to-coq](https://github.com/plclub/hs-to-coq) - Haskell Codeから等価なCoq CodeへのConverter。
- [lngen](https://github.com/plclub/lngen) - Locally Nameless Coq定義／証明生成Tool。
- [Menhir](http://gallium.inria.fr/~fpottier/menhir/) - Verified Parser向けCoq Codeを出力できるParser Generator。
- [mCoq](https://github.com/EngineeringSoftware/mcoq) - Coq Project向けMutation Analysis Tool。
- [Ott](https://github.com/ott-lang/ott) - Coqへ変換できるProgramming Language／Calculus定義記述Tool。
- [PyCoq](https://github.com/ejgallego/pycoq) - Python 3内からCoqと対話するBinding／Library集。
- [Rocqnavi](https://github.com/affeldt-aist/rocqnavi) - Index、ClickableなNotation、Comment内Markdown／LaTeX Formatなどを追加したcoq2html Fork。
- [Roosterize](https://github.com/EngineeringSoftware/roosterize) - Coq ProjectのLemma名提案Tool。
- [Sail](https://github.com/rems-project/sail) - Processor ISA Semanticsを指定しCoq定義を生成。
- [SerAPI](https://github.com/ejgallego/coq-serapi) - Coq CodeとJSON／S-Expression間をSerialize／DeserializeするTool／OCaml Library。
- [Trakt](https://github.com/ecranceMERCE/trakt) - Proof Automation Tactic向け汎用Goal Preprocessing Tool。

### 型理論と数学

- [Analysis](https://github.com/math-comp/analysis) - Mathematical Components互換のClassical Real Analysis Library。
- [Category Theory in Coq](https://github.com/jwiegley/category-theory) - Category TheoryのAxiom-Free形式化。
- [Completeness and Decidability of Modal Logic Calculi](https://github.com/coq-community/comp-dec-modal) - Logic K、K*、CTL、PDLのSoundness、Completeness、Decidability。
- [CoqPrime](https://github.com/thery/coqprime) - Pocklington／Elliptic Curve CertificateによるPrimality認定Library。
- [CoRN](https://github.com/coq-community/corn) - Constructive Real Analysis／Algebra Library。
- [Coqtail Math](https://github.com/coq-community/coqtail-math) - ArithmeticからReal／Complex Analysisまでの数学結果Library。
- [Coquelicot](https://gitlab.inria.fr/coquelicot/coquelicot) - Standard Library互換でUsabilityを重視するClassical Real Analysis形式化。
- [Finmap](https://github.com/math-comp/finmap) - Finite Map、Set、MultisetによるMathematical Components拡張。
- [Four Color Theorem](https://github.com/coq-community/fourcolor) - Graph Theoryの画期的成果Four Color TheoremのFormal Proof。
- [Gaia](https://github.com/coq-community/gaia) - Set Theory／Number Theoryを含むBourbaki「Elements of Mathematics」の実装。
- [GeoCoq](https://github.com/GeoCoq/GeoCoq) - Tarski Axiom SystemベースのGeometry形式化。
- [Graph Theory](https://github.com/coq-community/graph-theory) - Graph Theory結果の形式化。
- [Homotopy Type Theory](https://github.com/HoTT/Coq-HoTT) - Homotopy-Theoretic Ideaの開発。
- [Infotheo](https://github.com/affeldt-aist/infotheo) - Information Theory／Linear Error-Correcting Codeの形式化。
- [Mathematical Components](http://math-comp.github.io) - とりわけGroup Theoryに注力する数学Theory形式化。
- [Math Classes](https://github.com/coq-community/math-classes) - Type Classベースの数学Structure抽象Interface。
- [Monae](https://github.com/affeldt-aist/monae) - Monadic Effect／Equational Reasoning。
- [Odd Order Theorem](https://github.com/math-comp/odd-order) - Finite Group Theoryの画期的成果Odd Order TheoremのFormal Proof。
- [Puiseuxth](https://github.com/roglo/puiseuxth) - Puiseux's Theoremの証明とPuiseux Series多項式Rootの計算。
- [UniMath](https://github.com/UniMath/UniMath) - Univalentな視点で大規模な数学体系を形式化するLibrary。

### 検証済みSoftware

- [CompCert](http://compcert.inria.fr) - ほぼ全C言語（ISO C99）向けHigh-Assurance Compiler。PowerPC、ARM、RISC-V、x86の効率的Codeを生成。
- [Ceramist](https://github.com/certichain/ceramist) - Bloom Filterなど検証済みHash-Based Approximate Membership Structure。
- [CertiCoq](https://github.com/CertiCoq/certicoq) - Coq内部言語GallinaからCompCert ClightへのVerified Compiler。
- [Fiat-Crypto](https://github.com/mit-plv/fiat-crypto) - Cryptographic Primitive Code生成。
- [Functional Algorithms Verified in SSReflect](https://github.com/clayrat/fav-ssr) - Search、Sortなど基本問題のPurely Functionalな検証済み実装。
- [Incremental Cycles](https://gitlab.inria.fr/agueneau/incremental-cycles) - GraphのIncremental Cycle Detection Algorithmの検証済みOCaml実装。
- [Jasmin](https://github.com/jasmin-lang/jasmin) - High-Assurance／High-Speed Cryptography向け形式化言語／Verified Compiler。
- [JSCert](https://github.com/jscert/jscert) - Verified Reference Interpreterを持つECMAScript 5（JavaScript）のCoq仕様。
- [lambda-rust](https://gitlab.mpi-sws.org/iris/lambda-rust) - Rust Core Language／Type SystemのFormal Model、Type SystemのLogical Relation、一部Rust LibraryのSafety Proof。
- [Prosa](https://gitlab.mpi-sws.org/RT-PROOFS/rt-proofs) - Real-Time System Schedulability Analysisの定義・証明。
- [RISC-V Specification in Coq](https://github.com/mit-plv/riscv-coq) - RISC-V Processor ISA／Extensionの定義。
- [Stable sort algorithms in Coq](https://github.com/pi8027/stablesort) - Merge Sort関数のStabilityを含む汎用・ModularなCorrectness Proof。
- [Tarjan and Kosaraju](https://github.com/math-comp/tarjan) - Finite GraphのTopological Sort／Strongly Connected Component探索Algorithmの検証済み実装。
- [Vélus](http://velus.inria.fr) - Lustre/Scade風Dataflow Synchronous Language向けVerified Compiler。
- [Verdi Raft](https://github.com/uwplse/verdi-raft) - Verdi FrameworkでCoq検証されたRaft Distributed Consensus Protocol実装。
- [WasmCert-Coq](https://github.com/WasmCert/WasmCert-Coq/) - WebAssembly（Wasm）1.0仕様のCoq形式化。

## 資料

### Community

- [Coq公式Webサイト](https://coq.inria.fr)
- [Coq公式Manual](https://coq.inria.fr/refman/)
- [Coq公式Standard Library](https://coq.inria.fr/stdlib/)
- [Coq公式Discourse Forum](https://coq.discourse.group)
- [Coq公式Zulip Chat](https://coq.zulipchat.com)
- [Coq-Club公式Mailing List](https://sympa.inria.fr/sympa/arc/coq-club)
- [Coq公式Wiki](https://github.com/coq/coq/wiki)
- [Coq公式X/Twitter](https://x.com/CoqLang)
- [Coq Zulip Chat Archive](https://coq.gitlab.io/zulip-archive/)
- [Coq Subreddit](https://www.reddit.com/r/Coq/)
- [Stack OverflowのCoq Tag](https://stackoverflow.com/questions/tagged/coq)
- [Theoretical Computer Science Stack ExchangeのCoq Tag](https://cstheory.stackexchange.com/questions/tagged/coq)
- [Proof Assistants Stack ExchangeのCoq Tag](https://proofassistants.stackexchange.com/questions/tagged/coq)
- [ZenodoのCoq Keyword](https://zenodo.org/search?q=keywords%3A%22Coq%22)
- [Coq-community Package保守Project](https://github.com/coq-community/manifesto)
- [Mathematical Components Wiki](https://github.com/math-comp/math-comp/wiki)
- [Coqで証明された有名な100定理](https://github.com/coq-community/coq-100-theorems)
- [Planet Coq Link Aggregator](https://coq.pl-a.net)

### Blog

- [Coq Exchange：CoqのIdea／Experiment Report](https://project.inria.fr/coqexchange/news/)
- [Gagallium](http://gallium.inria.fr/blog)
- [Gregory MalechaのBlog](https://gmalecha.github.io)
- [Joachim BreitnerのCoq記事](http://www.joachim-breitner.de/blog/tag/Coq)
- [LysxiaのBlog](https://blog.poisson.chat)
- [MIT PLVのCoq記事](http://plv.csail.mit.edu/blog/category/coq.html)
- [PLClub Blog](https://www.seas.upenn.edu/~plclub/blog/)
- [Poleiro：Arthur Azevedo de AmorimのCoq Blog](http://poleiro.info)
- [Ralf JungのCoq記事](https://www.ralfj.de/blog/categories/coq.html)
- [Thomas LetanのCoq記事](https://soap.coffee/~lthms/tags/coq.html)

### 書籍

- [Coq'Art](https://www.labri.fr/perso/casteran/CoqArt/) - Coqに特化した最初の書籍。
- [Software Foundations](https://softwarefoundations.cis.upenn.edu) - 初心者にもAccessしやすい、Logic、Functional Programming、Programming Language基礎に関するCoqベース教科書シリーズ。
  - [第1巻：Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html) - Functional Programming、Logic基礎、Computer-Assisted Theorem Proving入門。
  - [第2巻：Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html) - Operational Semantics、Hoare Logic、Static Type Systemを含むProgramming Language Theory入門。
  - [第3巻：Verified Functional Algorithms](https://softwarefoundations.cis.upenn.edu/vfa-current/index.html) - 各種基本Data Structureの仕様化・検証を実演。
  - [第4巻：QuickChick](https://softwarefoundations.cis.upenn.edu/qc-current/index.html) - Randomized Property-Based TestingとFormal Specification／Proofを組み合わせるTool入門。
  - [第5巻：Verifiable C](https://softwarefoundations.cis.upenn.edu/vc-current/index.html) - Verified Software ToolchainでC Programを仕様化・検証する詳細Tutorial。
  - [第6巻：Separation Logic Foundations](https://softwarefoundations.cis.upenn.edu/slf-current/index.html) - Separation Logicと、その上にProgram Verification Toolを構築する方法。
- [Certified Programming with Dependent Types](http://adam.chlipala.net/cpdt/) - Coqによる実践Engineering、Advancedな実用技法、特定のProof Styleを教える教科書。
- [Program Logics for Certified Compilers](https://www.cs.princeton.edu/~appel/papers/plcc.pdf) - Separation LogicでProgram Logicを構築する方法。Coq Formal ModelをClightなどへ適用。
- [Formal Reasoning About Programs](http://adam.chlipala.net/frap/) - Program CorrectnessのFormal Logical Reasoningと、そのためのCoq利用を同時に紹介。
- [Programs and Proofs](https://ilyasergey.net/pnp/) - SSReflect Proof Languageの少数PrimitiveでDecidable PropositionをInductive Reasoningする計算的性質を重視した、Coq Interactive Proofの短い実践入門。
- [Computer Arithmetic and Formal Proofs](https://www.sciencedirect.com/book/9781785481123/computer-arithmetic-and-formal-proofs) - Flocq Libraryで浮動小数点AlgorithmをCoq仕様化・検証する方法。
- [The Mathematical Components book](https://math-comp.github.io/mcb/) - 数学志向の利用者向けでMathematical Components／SSReflectに注力。
- [Modeling and Proving in Computational Type Theory](https://github.com/uds-psl/MPCTT) - 基礎、代表的Case Study、実践Programmingを含むCoq Computational Logic書籍。
- [Hydras & Co.](https://github.com/coq-community/hydra-battles) - Kirby／ParisのHydra Battleなど楽しいCoq形式化数学を扱う継続執筆中の書籍／Library。Gödel-Rosser第一不完全性定理の証明を含みます。

### 講義資料

- [An Introduction to MathComp-Analysis](https://staff.aist.go.jp/reynald.affeldt/documents/karate-coq.pdf) - Mathematical Componentsを始め、Classical Reasoning／Real Analysisへ使う講義Note。
- [Foundations of Separation Logic](https://chargueraud.org/teach/verif/) - CoqでSeparation Logicを使いSequential Imperative Programを推論する入門。
- [Floating-Point Numbers and Formal Proof](https://github.com/thery/FlocqLecture) - Flocq LibraryのCoq実数・浮動小数点数入門講座。
- [Introduction to the Theory of Computation](https://gitlab.com/umb-svl/turing) - Language／Turing Machineを含む学部Theory of Computation講義向け形式化。
- [Lectures on Software Foundations](https://github.com/clarksmr/sf-lectures) - YouTube動画シリーズを含むSoftware Foundations教材。
- [MathComp School](https://github.com/gares/math-comp-school-2022) - SSReflect／Mathematical Components入門Lesson／ExerciseのCoq Source。
- [Mechanized Semantics](https://github.com/xavierleroy/cdf-mech-sem) - Collège de France Programming Language Semantics講座のCoq Source。
- [Program Logics](https://github.com/xavierleroy/cdf-program-logics) - Collège de France Program Logic講座のCoq Source。
- [Program verification with types and logic](https://gitlab.science.ru.nl/program-verification/course-2023-2024) - Radboud University NijmegenでCoqを使うProgramming Language Semantics、Type System、Program Logic講義／演習。
- [Proofs and Reliable Programming using Coq](https://team.inria.fr/stamp/proofs-and-reliable-programming-using-coq-2022/) - CoqによるProgram開発・検証入門。

### Tutorial／Hint

- [Coq'Art Exercises and Tutorials](https://github.com/coq-community/coq-art) - 追加Tutorialを含むCoq'Art書籍のCoq Code／Exercise。
- [Coq in a Hurry](http://cel.archives-ouvertes.fr/inria-00001173) - CoqでLogical Concept／Functionを定義し推論する方法の入門。
- [Common Criteria評価におけるCoq要件](https://inria.hal.science/hal-04452421) - High-Assurance Applicationで読みやすくReview可能なCoq Codeを書くGuide。
- [Coq Tactics in Plain English](https://charlesaverill.github.io/ctpe/) - 説明・例付きCoq Tactic Guide。
- [Learn X in Y minutes where X=Coq](https://learnxinyminutes.com/docs/coq/) - 言語としてのCoqを駆け足で紹介。
- [Lemma Overloading](https://github.com/coq-community/lemma-overloading) - Canonical StructureでProgramming／ProvingするDesign Patternの実演。
- [MathComp Tutorial Materials](https://github.com/math-comp/tutorial_material) - Mathematical Components Tutorial Source Code。
- [Mike Nahas's Coq Tutorial](https://mdnahas.github.io/doc/nahas_tutorial.html) - CoqでFormal Proofを書く基礎。
- [Tricks in Coq](https://github.com/coq-community/coq-tricks) - 見つけにくいCoqのTip、Trick、機能。
