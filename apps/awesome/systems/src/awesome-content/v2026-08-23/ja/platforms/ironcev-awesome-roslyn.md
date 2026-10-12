---
title: Awesome Roslyn
description: >-
  Roslynの書籍、チュートリアル、オープンソースプロジェクト、アナライザー、コード修正、リファクタリング、テスト用フレームワーク、ソースジェネレーター、記事、講演。
licenseSource: github-ironcev-awesome-roslyn-readme-md
documentContext:
  - kind: source
    html: <p>法律で認められる範囲で、Igor Rončevićは本作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。</p>
---
# Awesome Roslyn<a id="目次"></a><a id="コントリビューション"></a><a id="ライセンス"></a><a id="contents"></a><a id="contribute"></a><a id="license"></a>

[Roslyn](https://github.com/dotnet/roslyn)（正式名[.NET Compiler Platform](https://en.wikipedia.org/wiki/.NET_Compiler_Platform)）は、C#とVisual Basic .NET用のオープンソースコンパイラーとコード解析APIを提供します。書籍、チュートリアル、プロジェクト、アナライザー、コード修正、リファクタリング、テスト用フレームワーク、ソースジェネレーター、記事、講演を探せます。版、件数、製品の主張は固定原文当時の記載です。

## 書籍 <a id="books"></a>

- [Roslyn Succinctly](https://www.syncfusion.com/ebooks/roslyn) - Alessandro Del Soleによる無料電子書籍。Roslyn APIを解説した後、アナライザーとリファクタリングの作成を扱う。
- [.NET Development Using the Compiler API](https://www.apress.com/la/book/9781484221105) - Jason Bockによる書籍。アナライザーとリファクタリングに加え、スクリプティングAPIを解説し、Compiler APIの将来について考察する。
- [Roslyn Cookbook](https://www.packtpub.com/application-development/roslyn-cookbook) - RoslynアナライザーチームのManish Vasaniによる書籍。アナライザー、リファクタリング、スクリプティングを詳しく扱った後、新しいC#言語機能の開発とRoslynのソースコードへの貢献方法を掘り下げる。

## チュートリアル <a id="tutorials"></a>

- [Learn Roslyn Now](https://joshvarty.com/learn-roslyn-now/) - RoslynのコンパイラーAPIを扱うブログ記事シリーズ。小さな自己完結した例でRoslynの機能を紹介する。
- [C#のアナライザーとコード修正の作成](https://github.com/dotnet/roslyn/blob/master/docs/wiki/How-To-Write-a-C%23-Analyzer-and-Code-Fix.md) - 構文解析・意味解析・構文変換を、実践的な手順に沿って紹介する。
- [C#とVisual Basic — RoslynでAPI用のライブコードアナライザーを作る](https://msdn.microsoft.com/en-us/magazine/dn879356.aspx) - コードアナライザーの作成を詳しく解説するMSDN記事。古いものの内容は有効と原文が紹介している。
- [C# — Roslynアナライザーへのコード修正の追加](https://msdn.microsoft.com/en-us/magazine/dn904670.aspx) - 前のMSDN記事の続編。コード修正について詳しく解説する。
- [C#ソースジェネレーターの紹介](https://devblogs.microsoft.com/dotnet/introducing-c-source-generators/) - C# 9.0のソースジェネレーター機能を最初に発表した記事。機能の概要、役立つ場面、簡単なソースジェネレーターの作成方法を解説する。
- [C#ソースジェネレーターの新しいサンプル](https://devblogs.microsoft.com/dotnet/new-c-source-generator-samples/) - CSVファイルや[Mustache](https://mustache.github.io/)テンプレートなど、コード以外の追加ファイルに基づく、単純な例より踏み込んだコードジェネレーターの作成例。
- [C#ソースジェネレーターの一覧](https://github.com/amis92/csharp-source-generators) - 追加の学習資料、サンプル、実験用・実用のソースジェネレーターをまとめた一覧。基礎を学んだ後の参考資料。

## オープンソースプロジェクト <a id="open-source-projects"></a>

- [Bridge](https://github.com/bridgedotnet/Bridge) - C#からJavaScriptへのトランスパイラー。モバイル・ウェブアプリをC#で記述し、JavaScriptが動作する環境で実行する。
- [Code Converter](https://github.com/icsharpcode/CodeConverter/) - C#からVB.NETへ、VB.NETからC#へ変換するトランスパイラー。
- [CodeAnalysis.CSharp.PatternMatching](https://github.com/pvginkel/Microsoft.CodeAnalysis.CSharp.PatternMatching) - Roslynの構文木に対する直感的なパターンマッチング。C#の構文解析・意味解析を簡素化する。
- [CodeGeneration.Roslyn](https://github.com/AArnott/CodeGeneration.Roslyn) - 設計時のサポートを備え、ビルド中にRoslynを使ってコードを生成する。
- [dotnet-script](https://github.com/filipw/dotnet-script) - .NET CLIからC#スクリプトを実行し、NuGetパッケージをインラインで定義して、VS Codeで編集・デバッグできる。
- [FlubuCore](https://github.com/dotnetcore/FlubuCore) - C#コードでプロジェクトをビルドし、デプロイスクリプトを実行する、クロスプラットフォームのビルド自動化ツール。
- [MirrorSharp](https://github.com/ashmind/mirrorsharp) - オンラインのC#・VB.NET・F#コードエディター。コード補完、メソッドのシグネチャ表示、クイックフィックス、診断機能を備える。
- [OmniSharp](http://www.omnisharp.net/) - 好みのエディターでクロスプラットフォームの.NET開発を行えるようにする、オープンソースプロジェクト群。
- [roslyn-linq-rewrite](https://github.com/antiufo/roslyn-linq-rewrite) - LINQ式の構文木を通常の手続き型コードに書き換えてから、C#コードをコンパイルする。ヒープ割り当てと動的ディスパッチを減らし、性能を向上させると原文が説明している。
- [RoslynPad](https://roslynpad.net/) - クロスプラットフォームのC#エディター。コード補完、メソッドのシグネチャ表示、クイックフィックス、診断機能を備える。
- [RoslynQuoter](https://github.com/KirillOsenkov/RoslynQuoter) - 与えられたC#プログラムの構文木を構築するための、構文木APIの呼び出しを生成するオンラインツール。
- [scriptcs](http://scriptcs.net/) - C#をスクリプティングに使うツール。C# REPL、NuGetパッケージのインストール、1行のコードによるスクリプトの実行に対応する。
- [Scripty](https://github.com/daveaglick/Scripty) - Roslynを使うC#スクリプトによるコード生成ツール。T4テンプレートをスクリプトで置き換える選択肢。
- [Sharpen](http://sharpen.rocks) - 既存のコードベースへ新しいC#言語機能を適切に導入するVisual Studio拡張。
- [SharpLab](https://sharplab.io/) - .NETコードの実験環境。コンパイルの中間段階と結果、コンパイラーから見えるコードを表示する。Roslynのブランチ・バージョンを選択し、ブラウザーでC#・VB.NET・F#コードを実行できる。
- [Testura.Code](https://github.com/Testura/Testura.Code) - C#コードの生成・保存・コンパイルに使うRoslyn APIのラッパー。クラス、メソッド、文、式を生成するメソッドとヘルパーを提供する。
- [Uno SourceGenerator](https://github.com/nventive/Uno.SourceGeneration) - ビルド中のプロジェクトについて、構文情報と意味モデルの情報をすべて利用するC#ソースコードジェネレーター。

## オープンソースのアナライザー、コード修正、リファクタリング <a id="open-source-analyzers-code-fixes-and-refactorings"></a>

- [.NET Analyzers](https://github.com/DotNetAnalyzers) - Roslynアナライザーを開発するGitHub組織。ASP.NET Core、WPF、IDisposable、System.Reflectionの使用などを扱うアナライザーのリポジトリを含む。
- [.NET Compiler Platform ("Roslyn") Analyzers](https://github.com/dotnet/roslyn-analyzers) - Roslynチームが開発する診断アナライザー。当初は静的解析APIの設計・実装を具体化するために開発された。コード品質、.NET Core、デスクトップの.NET Framework、コード内コメントなどを扱う。
- [Code Cracker](https://github.com/code-cracker/code-cracker) - C#・VB.NET用のアナライザーライブラリ。性能やコーディングスタイルなど多くの分類の診断と、基本的なリファクタリングを提供する。
- [CSharpGuidelinesAnalyzer](https://github.com/bkoelman/CSharpGuidelinesAnalyzer) - [C#コーディングガイドライン](https://csharpcodingguidelines.com/)に関する診断を報告する。
- [ErrorProne.NET](https://github.com/SergeyTeplyakov/ErrorProne.NET) - C#プログラムの正しさと性能を重視するアナライザーとコード修正のセット。Googleの[Error Prone](https://github.com/google/error-prone)に着想を得ている。
- [Mapping Generator](https://github.com/cezarypiatek/MappingGenerator) - 任意の複雑さのオブジェクト間マッピングを生成するコード修正。マッピングを使う多くの場面を標準で認識する。設計時に利用する[AutoMapper](https://automapper.org/)の代替。
- [Nullable.Extended](https://github.com/tom-englert/Nullable.Extended) - null許容参照型を使った開発を支援するRoslynツールとアナライザー。
- [Refactoring Essentials for Visual Studio](https://github.com/icsharpcode/RefactoringEssentials/) - C#・VB.NET用のリファクタリング、アナライザー、コード修正。
- [Roslyn Clr Heap Allocation Analyzer](https://github.com/Microsoft/RoslynClrHeapAllocationAnalyzer) - C#のヒープ割り当てアナライザー。明示的な割り当てに加え、ボックス化、クロージャー、暗黙のデリゲート生成など、多くの暗黙的な割り当てを検出できる。
- [Roslynator](https://github.com/JosefPihrt/Roslynator) - 原文当時はC#用の190件超のアナライザーと190件超のリファクタリングを収録。コーディングスタイル、読みやすさ・簡素化、冗長性の除去、コンパイラーエラーの修正などを扱う。
- [SonarC#](https://github.com/SonarSource/sonar-csharp) - SonarQubeプラットフォームの拡張として使う、C#用の静的コードアナライザー。
- [StyleCop Analyzers for the .NET Compiler Platform](https://github.com/DotNetAnalyzers/StyleCopAnalyzers) - StyleCopのルールをRoslynへ移植したもの。
- [VSDiagnostics](https://github.com/Vannevelj/VSDiagnostics) - 非同期メソッドの使用、フラグ列挙型、例外処理のベストプラクティスなど、多くのコード品質検査を行うアナライザー集。

## アナライザー、コード修正、リファクタリングをテストするライブラリとフレームワーク <a id="libraries-and-frameworks-for-testing-analyzers-code-fixes-and-refactorings"></a>

- [Microsoft.CodeAnalysis.Testing](https://github.com/dotnet/roslyn-sdk/tree/master/src/Microsoft.CodeAnalysis.Testing) - NUnit・xUnit・MSTestでアナライザーとコード修正をテストするライブラリ。[Roslyn SDK](https://github.com/dotnet/roslyn-sdk)の一部。
- [RoslynTestKit](https://github.com/cezarypiatek/RoslynTestKit) - アナライザー、コード修正、リファクタリング、コード補完プロバイダーの単体テストを作る軽量フレームワーク。特定の単体テストフレームワークに依存しない。

## ソースジェネレーター <a id="source-generators"></a>

原文は、.NET 5.0とC# 9.0がまだプレビュー段階だった時点で、以下のソースジェネレーターと、それらを内部で使うプロジェクトの大半を実験的なものと紹介しています。

- [DpDtInject](https://github.com/lsoft/DpdtInject) - 依存関係解決ロジックの大部分をコンパイル段階へ移す、依存性注入コンテナーの概念実証。コンパイル時の安全性を高め、実行時の依存関係解決を高速化する。
- [Generator.Equals](https://github.com/diegofrata/Generator.Equals) - クラスとレコードに等価性判定とハッシュ処理を自動実装し、異なる比較戦略に対応する。IL書き換えを使う[Equals.Fody](https://github.com/Fody/Equals)に似た機能を提供する。
- [JsonSrcGen](https://github.com/trampster/JsonSrcGen) - リフレクションを使わないJSONシリアライザー。コンパイル時にリフレクション不要のシリアライザーを生成し、極めて高速に処理できると原文が説明している。
- [Source Generator Playground](https://sourcegen.dev/) - ソースジェネレーターを試せるオンラインアプリ。自作のジェネレーターや組み込み例を使い、生成された出力を確認できる。学習やアイデアの検証向け。
- [StrongInject](https://github.com/YairHalberstadt/stronginject) - コンパイル時の依存性注入コンテナー。コンパイル時に検査し、リフレクションも実行時のコード生成も使わない。原文は、これにより高速で[アプリのトリミング](https://devblogs.microsoft.com/dotnet/app-trimming-in-net-5/)にも適すると説明している。
- [StructPacker](https://github.com/RudolfKurka/StructPacker) - C#のstruct型用の低レベルで軽量な、性能を重視するシリアライザー。C#のシリアライズコードを自動生成し、実行時の性能と効率を高める。
- [Svg to C# Source Generators](https://github.com/wieslawsoltes/SourceGenerators) - SVGからC#へのコンパイラー。[SkiaSharp](https://github.com/mono/SkiaSharp)を描画エンジンに使い、SVGの描画マークアップをC#へコンパイルする。
- [WrapperValueObject](https://github.com/martinothamar/WrapperValueObject) - 定型コードを書かずに型のラッパーを作るツール。特に[プリミティブ型を包む厳密に型付けされたラッパー](https://andrewlock.net/series/using-strongly-typed-entity-ids-to-avoid-primitive-obsession/)の作成に役立つ。

## ブログ記事と解説 <a id="blog-posts-and-articles"></a>

性能、Roslynの歴史、内部実装などを扱う記事です。

- [MicrosoftはC#コンパイラーをC#で書き直し、どうオープンソース化したか](https://medium.com/microsoft-open-source-stories/how-microsoft-rewrote-its-c-compiler-in-c-and-made-it-open-source-4ebed5646f98) - C#の設計責任者Mads TorgersenによるRoslynの歩み。プロジェクトが始まった経緯と理由、オープンソース化に必要だった取り組みを紹介する。
- [.NET Compiler Platformの内部 — 構文解析での性能上の考慮点（#SpeakRoslyn）](https://robinsedlaczek.com/2015/04/29/inside-the-net-compiler-platform-performance-considerations-during-syntax-analysis-speakroslyn/) - メモリ消費に焦点を当て、Roslynの性能を掘り下げる。
- [永続性、ファサード、Roslynの赤緑木](https://blogs.msdn.microsoft.com/ericlippert/2012/06/08/persistence-facades-and-roslyns-red-green-trees/) - Roslynチームが、変更不能で再利用できる構文木、低コストの親参照などを実装した方法を紹介する。「Roslynチームでは、不可能なことを日常的に行っている」という言葉を引用する。
- [ReSharperとRoslyn：Q&A](https://blog.jetbrains.com/dotnet/2014/04/10/resharper-and-roslyn-qa/) - ReSharperがRoslynを使わない理由を説明する、原文収録の記事。静的コード解析とRoslynの制約についての議論も含む。
- [Roslynの性能（Matt Gertz）](https://blogs.msdn.microsoft.com/csharpfaq/2014/01/15/roslyn-performance-matt-gertz/) - Roslynチームが性能の評価と改善にどう取り組むかを紹介する。

## 講演 <a id="talks"></a>

- [Roslynの力](https://www.youtube.com/watch?v=nXljhGDokqA) - Kasey UhlenhuthがNDC Oslo 2018で行った講演。Roslynの基礎と、コードアナライザー・コード修正を作るAPIやツールを扱う。
