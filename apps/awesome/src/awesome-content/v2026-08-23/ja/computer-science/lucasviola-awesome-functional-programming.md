---
title: "lucasviola/awesome-functional-programming"
description: "lucasviola/awesome-functional-programming の正規スナップショット"
licenseSource: "github-lucasviola-awesome-functional-programming-readme-md"
---

## Awesome Functional Programming [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[Awesome](https://github.com/sindresorhus/awesome/)プロジェクトを基にしています。

## これは何？ <a id="what-is-this-about"></a>

この10年間、関数型プログラミングは、その宣言的な特性によって新たな力を得ました。
この特性は並列計算や[ムーアの法則](https://en.wikipedia.org/wiki/Moore%27s_law)を最大限に活用するうえで
非常に効果的だと考える人もいます。

このリポジトリは、ブログ記事、論文、動画、ツールなど、関数型プログラミングに関する資料を集め、
その背景にある理論的な話題の一部を明確にすることも目指しています。

コントリビュートしたい場合は、まず[こちら](https://github.com/lucasviola/awesome-functional-programming/blob/master/contributing.md)を参照してください。

## 目次 <a id="table-of-contents"></a>
- [ブログ記事](#blog-posts)
- [論文](#papers)
- [Wiki](#wikis)
- [書籍](#books)
- [コミュニティ](#communities)
- [議論](#discussions-quora-stack-overflow-reddit-etc)
- [動画](#videos)
- [講義](#lectures)
- [ツール](#tools)
- [リポジトリ](#repos)
- [人物](#people)

### ブログ記事 <a id="blog-posts"></a>
- [Personal thoughts on the current functional programming bandwagon](http://www.akitaonrails.com/2015/10/28/personal-thoughts-on-the-current-functional-programming-bandwagon)
題名とは裏腹に、関数型プログラミングの基本概念をいくつか明確にし、FPの歴史と命令型言語におけるFP機能の実装を説明し、宣言型プログラミングをめぐる騒ぎや近年人気を集めた理由を論じています。
- [A Monad in Practicality - Controlling Time](http://robotlolita.me/2014/03/20/a-monad-in-practicality-controlling-time.html)
- [A Monad in Practicality - First Class Failures](http://robotlolita.me/2013/12/08/a-monad-in-practicality-first-class-failures.html)
- [How to desugar Haskell Code](http://www.haskellforall.com/2014/10/how-to-desugar-haskell-code.html)
- [Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)
- [Monads Made Difficult](http://www.stephendiehl.com/posts/monads.html)
- [Your easy guide to Monads, Applicatives, & Functors](https://medium.com/@lettier/your-easy-guide-to-monads-applicatives-functors-862048d61610)
- [Async Streams in C#](https://freecontent.manning.com/async-streams-in-c/)
- [How to leverage functional programming in Kotlin to write better, cleaner code](https://doordash.engineering/2022/03/22/how-to-leverage-functional-programming-in-kotlin-to-write-better-cleaner-code/)

### 論文 <a id="papers"></a>
- [Tradeoffs between Unique Types and Monads](http://lambda-the-ultimate.org/node/1180)
- [The implementation of Functional Programming Languages](http://research.microsoft.com/en-us/um/people/simonpj/papers/slpj-book-1987/start.htm) - Simon Peyton Jonesによる論文。
- [Sound and Decidable Type Inference for Functional Dependencies](http://research.microsoft.com/en-us/um/people/simonpj/papers/fd-chr/esop04.pdf) - HaskellとGHCの中心的作者による、型推論に関するもう一つの非常に有名な論文。
- [Template Meta-Programming for Haskell](http://research.microsoft.com/en-us/um/people/simonpj/papers/meta-haskell/meta-haskell.pdf) - Haskellでコンパイル時にコードを生成することに関する論文。
- [Why Functional Programming Matters](http://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)
- [From Higher-Order Logic to Haskell: There and Back Again](http://isabelle.in.tum.de/~haftmann/pdf/from_hol_to_haskell_haftmann.pdf)
- [Translating Haskell to Isabelle](http://es.cs.uni-kl.de/events/TPHOLs-2007/proceedings/B-178.pdf)

### Wiki <a id="wikis"></a>
- [nLab](http://ncatlab.org/nlab/show/HomePage) - FPの主要な数学的背景である圏論の観点から、記事、議論、ツールを提供するWikiラボ。
- [Haskell/Category Theory](https://en.wikibooks.org/wiki/Haskell/Category_theory) - Wikibooksによる、Haskellへ応用した圏論の優れた概要。
- [Haskell Wiki](https://wiki.haskell.org/Haskell)

### 書籍 <a id="books"></a>
- [Learn you a Haskell](http://learnyouahaskell.com/) - 書籍だが、オンラインでも無料で読める。初心者に非常に優しい。
- [The Little Prover](https://books.google.com.br/books?id=I9E_CgAAQBAJ&pg=PR13#v=onepage&q&f=false) - LISPで証明を書くための
JBobという定理証明器を扱う。
- [Isabelle/HOL - A Proof Assistant for Higher-Order Logic](http://isabelle.in.tum.de/doc/tutorial.pdf) - Isabelle/HOLで論理形式体系を実装する書籍。
- [The Little MLer](http://www.ccs.neu.edu/home/matthias/BTML/) - Standard MLで型、再帰的思考、その他の重要な話題を教えることへ重点を置いた書籍。
- [Introduction to Programming using SML](http://catalogue.pearsoned.co.uk/educator/product/Introduction-to-Programming-using-SML/9780201398205.page) - 非常に数学的な方法でプログラム設計を紹介。
- [How to Design Programs](http://www.htdp.org/) / [第2版](http://www.ccs.neu.edu/home/matthias/HtDP2e/)
- [Introduction to Functional Programming](http://www.amazon.com/Introduction-Functional-Programming-International-Computing/dp/0134841891)
- [Haskell in Depth](https://www.manning.com/books/haskell-in-depth) - Haskellの仕組みと正しい適用方法を教えるよう設計された例や応用場面を深掘りする、Haskellの2冊目として最適な書籍。
- [Grokking Simplicity: Taming complex software with functional thinking](https://www.manning.com/books/grokking-simplicity) - 現実の場面を使い、第一原理から関数型プログラミングを教える。
- [Functional Programming in Scala, Second Edition](https://www.manning.com/books/functional-programming-in-scala-second-edition) - 新しい演習、注釈、Scala 3の完全な解説を加えて改訂された世界的ベストセラー。
- [Functional Programming in C#, Second Edition](https://www.manning.com/books/functional-programming-in-c-sharp-second-edition) - C#における関数型プログラミングの実例と実践的手法。
- [Grokking Functional Programming](https://www.manning.com/books/grokking-functional-programming) - 関数型プログラミングの入門書。
- [Functional Programming in Kotlin](https://www.manning.com/books/functional-programming-in-kotlin) - より安全、単純、効果的なKotlinコードを提供するため、関数型プログラミングの技法と概念を習得。
- [Functional Design and Architecture](https://www.manning.com/books/functional-design-and-architecture) - HaskellなどのFP言語による例を通じ、関数型プログラミングで本番品質のアプリケーションを構築するための設計パターンとアーキテクチャを解説。
- [Haskell Bookcamp](https://www.manning.com/books/haskell-bookcamp) - Haskellコードを記述し、実際の開発課題へ関数型プログラミングを適用する実践経験を得られる。
- [Mastering Functional Programming](https://www.perlego.com/book/800653/mastering-functional-programming-functional-techniques-for-sequential-and-parallel-programming-with-scala-pdf) - 命令型やOOPの経験者を、使用言語にかかわらず関数型プログラミングの世界へ案内。
- [Jax in Action](https://www.manning.com/books/jax-in-action) - JAX数値計算ライブラリに関する書籍。
- [Learn PowerShell Scritping in a Month of Lunches](https://www.manning.com/books/learn-powershell-scripting-in-a-month-of-lunches-second-edition) - PowerShellスクリプトで複雑なタスクとプロセスを自動化。
- [F# in Action](https://www.manning.com/books/f-sharp-in-action) - プロフェッショナルなアプリケーションを作成するために必要な、実践的F#開発スキルを扱う書籍。
- [Elixir in Action, Third Edition](https://www.manning.com/books/elixir-in-action-third-edition) - Elixir 1.14へ全面更新され、スケーラビリティ、耐障害性、高可用性の問題にElixirがどう対処するかを明らかにする定評あるベストセラー。

### コミュニティ <a id="communities"></a>
- [Lambda the Ultimate](http://lambda-the-ultimate.org/) - 研究や論文、
学界の話題を議論するコミュニティ。議論の技術水準は非常に高い。
- [FP Complete](https://www.fpcomplete.com/) - 企業と学生がHaskellで関数型プログラミングを学び、実装することを支援するコミュニティ。最も有名なHaskell学習センターの一つ、[School of Haskell](https://www.schoolofhaskell.com/school)を運営。
- [Haskellers](http://www.haskellers.com/) - Haskellプログラマーの交流拠点。
- [ElixirLangMoscow](http://elixir-lang.moscow/) - ロシアのElixirコミュニティ。

### 議論（Quora、Stack Overflow、Redditなど） <a id="discussions-quora-stack-overflow-reddit-etc"></a>
- [Why dont more programmers use Haskell](https://www.quora.com/Why-dont-more-programmers-use-Haskell)
- [Hidden complexities of tail-call/tail-recursion optimization](http://lambda-the-ultimate.org/classic/message1532.html)

### 動画 <a id="videos"></a>
- [Dont fear the Monad](https://www.youtube.com/watch?v=ZhuHCtR3xq8) - Microsoft研究者Brian Beckmanによる、
関数型プログラミングで最も難解な話題の一つの説明。
- [Haskell is useless](https://www.youtube.com/watch?v=iSmkqocn0oQ) - Simon Peyton Jonesが
自身の創作物について謙虚すぎるほどに語る。
- [Brian Beckman: The Zen of Stateless State](https://www.youtube.com/watch?v=XxzzJiXHOJs)
- [Erik Meijer: Functional Programming](https://www.youtube.com/watch?v=z0N1aZ6SnBk)
- [Scala Monads: Declutter Your Code With Monadic Design](https://www.youtube.com/watch?v=Mw_Jnn_Y5iA)
- [Philip Wadler and Erik Meijer: On Programming Language Theory and Practice](https://www.youtube.com/watch?v=9SBR_SnrEiI)
- [Kotlin for Android & Java Developers](https://www.manning.com/livevideo/kotlin-for-android-and-java-developers) - Kotlinの関数型プログラミング、オブジェクト指向、KotlinによるAndroidアプリ構築を扱うLiveVideo講座。
- [Do we really need OOD and FDD?](https://www.youtube.com/watch?v=KW9U6HMKEgk) - オブジェクト指向設計（OOD）と対比した関数型宣言的設計（FDD）。
* [Functional Programming with TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - 初心者向けYouTube再生リストで、Sahand Javidとともに関数型プログラミングを学び、fp-tsのようなライブラリを作成。

### 講義 <a id="lectures"></a>
- [C9 Lectures: Dr. Erik Meijer - Functional Programming Fundamentals](https://www.youtube.com/playlist?list=PLTA0Ta9Qyspa5Nayx0VCHj5AHQJqp1clD) - Haskellの作者の一人による講義シリーズ。
- [Adventure with types in Haskell - Simon Peyton Jones](https://www.youtube.com/watch?v=6COvD8oynmI&list=RD6COvD8oynmI#t=0) - Simon Peyton Jonesによる、Haskellの強力な型システムの講義。
- [The Algebra of Algebraic Data Types](https://www.youtube.com/watch?v=YScIPA8RbVE) - 数学と、HaskellやMLなど一般的なFP言語の型システムである代数的データ型との関係を
非常に分かりやすく説明。

### プラットフォーム <a id="platforms"></a>

- [Paqmind.com] – プログラミングを学び、上達するためのガイドと課題。すべてのコンテンツが計算機科学とFPを指向。

### ツール <a id="tools"></a>
- [Isabelle/HOL](https://www.cl.cam.ac.uk/research/hvg/Isabelle/) - 高階論理に基づく汎用定理証明支援系。

### リポジトリ <a id="repos"></a>
- [Idris Koans](https://github.com/idris-hackers/idris-koans) - 依存型を備えた汎用関数型プログラミング言語Idrisを教えるプロジェクト。
- [Functional Javascript Workshop](https://github.com/timoxley/functional-javascript-workshop) - 関数型JavaScriptワークショップ。
- [J-Bob](https://github.com/the-little-prover/j-bob) - 書籍`The Little Prover`に登場する定理証明支援系。
- [Haskell Must Watch](https://github.com/olehkuchuk/haskell-must-watch) - Haskellに関する動画、講演、講座のリスト。
- [Intro SML](http://www.it.dtu.dk/introSML/) - 書籍`Introduction to Programming using SML`のコード、訂正、情報。
- [Functional Programming In JavaScript](https://github.com/busypeoples/functional-programming-javascript) - JavaScriptの関数型プログラミングリソース一覧。
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon) - FPの用語集を提供し、FPを学びやすくするプロジェクト。
- [Bow](https://github.com/bow-swift/bow) - Swiftの型付き関数型プログラミング向け補助ライブラリ。
- [Parsing With Haskell Parser Combinators](https://github.com/lettier/parsing-with-haskell-parser-combinators) - Haskellのパーサーコンビネーターを使う解析の段階的ガイド。
- [Functional Programming Learning Path](https://github.com/imteekay/functional-programming-learning-path.git) - 関数型プログラミングの学習パス。
### 人物 <a id="people"></a>

- [Simon Peyton Jones](http://research.microsoft.com/en-us/people/simonpj/) - Haskell言語とGlasgow Haskell Compilerの作者の一人。Microsoft研究者。
- [Philip Wadler](http://homepages.inf.ed.ac.uk/wadler/) - University of Edinburghの理論計算機科学教授。有名な論文Propositions as Typesの著者で、Javaジェネリック型を支えた中心人物の一人。
- [Matthias Felleisen](http://www.ccs.neu.edu/home/matthias/) - How to Design ProgramsやThe Little Schemerなど、多数の書籍の著者。
- [Erik Meijer](https://www.linkedin.com/pub/erik-meijer/0/5ba/924) - 元Microsoftソフトウェアアーキテクト、関数型プログラミング研究者。FP、ソフトウェア設計、リアクティブプログラミングの講義を行う。
- [Brian Beckman](https://www.linkedin.com/in/brianbeckman) - 元Microsoft研究者、現Amazonソフトウェアエンジニア。C#、LINQ、F#など、数多くのMicrosoft技術へのFP機能実装に貢献。

### ライセンス <a id="license"></a>

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、[Lucas Viola](http://lucasviola.github.io)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
