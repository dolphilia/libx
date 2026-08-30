---
title: "ironcev/awesome-roslyn"
description: "ironcev/awesome-roslyn の正規スナップショット"
licenseSource: "github-ironcev-awesome-roslyn-readme-md"
---

<p align="center">
    <a href="https://github.com/dotnet/roslyn">
        <img src="https://raw.githubusercontent.com/ironcev/awesome-roslyn/master/images/awesome-roslyn-logo.png" alt="Awesome Roslyn" width="500">
    </a>
</p>

<p align="center">
    <a href="https://github.com/sindresorhus/awesome">
        <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome">
    </a>
</p>

> Roslynに関する書籍、チュートリアル、オープンソースプロジェクト、アナライザー、コード修正、リファクタリング、ソースジェネレーターの厳選リストです。

Roslyn（正式名称：[.NET Compiler Platform](https://en.wikipedia.org/wiki/.NET_Compiler_Platform)）は、C#およびVisual Basic .NET向けのオープンソースコンパイラとコード解析API群です。

## 目次 <a id="contents"></a>

- [書籍](#books)
- [チュートリアル](#tutorials)
- [オープンソースプロジェクト](#open-source-projects)
- [オープンソースのアナライザー、コード修正、リファクタリング](#open-source-analyzers-code-fixes-and-refactorings)
- [アナライザー、コード修正、リファクタリングをテストするライブラリとフレームワーク](#libraries-and-frameworks-for-testing-analyzers-code-fixes-and-refactorings)
- [ソースジェネレーター](#source-generators)
- [ブログ記事と解説](#blog-posts-and-articles)
- [講演](#talks)

## 書籍 <a id="books"></a>
Roslynを学び始めるのに適した書籍です。

- [Roslyn Succinctly](https://www.syncfusion.com/ebooks/roslyn) - Alessandro Del Soleによる*無料電子書籍*。入門に最適で、Roslyn APIを解説した後、アナライザーとリファクタリングの作成に焦点を当てる。
- [.NET Development Using the Compiler API](https://www.apress.com/la/book/9781484221105) - ジェイソン・ボックによる書籍。アナライザとリファクタリングに加え、スクリプティングAPIについても解説し、コンパイラAPIの未来について興味深い考察を提供。
- [Roslyn Cookbook](https://www.packtpub.com/application-development/roslyn-cookbook) - RoslynアナライザーチームのManish Vasaniによる書籍。アナライザー、リファクタリング、スクリプティングを詳しく扱い、新しいC#言語機能の開発やRoslynソースコードへの貢献も深く解説する。

## チュートリアル <a id="tutorials"></a>
最初のアナライザー、コード修正、ソースジェネレーターを書くためのオンラインチュートリアルです。

- [Learn Roslyn Now](https://joshvarty.com/learn-roslyn-now/) - RoslynコンパイラAPIを探究するブログ記事シリーズ。小さな自己完結型の例を通じてRoslynの力を紹介する、入門に最適なチュートリアル :-)
- [How To Write a C# Analyzer and Code Fix](https://github.com/dotnet/roslyn/blob/master/docs/wiki/How-To-Write-a-C%23-Analyzer-and-Code-Fix.md) - Roslynチュートリアルの決定版 :-) 構文解析、意味解析、構文変換を現実的な手順で紹介する。
- [C# and Visual Basic - Use Roslyn to Write a Live Code Analyzer for Your API](https://msdn.microsoft.com/en-us/magazine/dn879356.aspx) - 古いものの内容は今も有効な、コードアナライザー作成に関する詳細なMSDN記事。
- [C# - Adding a Code Fix to Your Roslyn Analyzer](https://msdn.microsoft.com/en-us/magazine/dn904670.aspx) - 前記事の続編。コードフィックスについての詳細な導入。
- [Introducing C# Source Generators](https://devblogs.microsoft.com/dotnet/introducing-c-source-generators/) - C# 9.0 ソースジェネレータ機能の元々の発表。ソースジェネレータとは何か、どのようなシナリオで役立つか、そして簡単なソースジェネレータを書く方法を説明。
- [New C# Source Generator Samples](https://devblogs.microsoft.com/dotnet/new-c-source-generator-samples/) - CSVファイルや [Mustache](https://mustache.github.io/) テンプレートなどの追加の非コードファイルを基にした、非自明なコードジェネレータの作成方法のサンプル。
- [C# Source Generators](https://github.com/amis92/csharp-source-generators) - 追加の学習資料、サンプル、実験用および実用ソースジェネレーターの包括的な一覧。基礎を理解した後の優れた参考資料。

## オープンソースプロジェクト <a id="open-source-projects"></a>
Roslyn上に構築されたオープンソースプロジェクトです。

- [Bridge](https://github.com/bridgedotnet/Bridge) - C#からJavaScriptへのトランスパイラ。現代的なモバイルおよびウェブアプリをC#で書くことができ、JavaScriptでどこでも実行可能。
- [Code Converter](https://github.com/icsharpcode/CodeConverter/) - C#からVB.NETへ、またVB.NETからC#へ変換するトランスパイラー。
- [CodeAnalysis.CSharp.PatternMatching](https://github.com/pvginkel/Microsoft.CodeAnalysis.CSharp.PatternMatching) - Roslyn構文木向けの直感的なパターンマッチング。C#の構文解析と意味解析を簡素化する。
- [CodeGeneration.Roslyn](https://github.com/AArnott/CodeGeneration.Roslyn) - 設計時サポートを備え、ビルド中にRoslynベースのコード生成を行う。
- [dotnet-script](https://github.com/filipw/dotnet-script) - .NET CLIからC#スクリプトを実行し、NuGetパッケージをインラインで定義し、VS Codeで編集・デバッグできる。
- [FlubuCore](https://github.com/dotnetcore/FlubuCore) - C#によるプロジェクトのビルドとデプロイスクリプトの実行に用いられる、クロスプラットフォームのビルド自動化ツール
- [MirrorSharp](https://github.com/ashmind/mirrorsharp) - オンラインのC#、VB.NET、F#コードエディター。コード補完、メソッドシグネチャヘルプ、クイックフィックス、診断機能を備える。
- [OmniSharp](http://www.omnisharp.net/) - 好みのエディターでクロスプラットフォームの.NET開発を可能にするオープンソースプロジェクト群。
- [roslyn-linq-rewrite](https://github.com/antiufo/roslyn-linq-rewrite) - LINQ表現の構文木をプロシージャルコードで再構成した上でC#コードをコンパイルする。これによりパフォーマンスが向上し、ヒープ割り当てや動的ディスパッチが最小限に抑えられる
- [RoslynPad](https://roslynpad.net/) - クロスプラットフォームのC#エディター。コード補完、メソッドシグネチャヘルプ、クイックフィックス、診断機能を備える。
- [RoslynQuoter](https://github.com/KirillOsenkov/RoslynQuoter) - 指定されたC#プログラムに対して、そのプログラムの構文木API呼び出しを生成するオンラインツール
- [scriptcs](http://scriptcs.net/) - C#を強力なスクリプトツールに変える。C#REPL、NuGetパッケージのインストール、1行のコードでスクリプトの実行をサポート
- [Scripty](https://github.com/daveaglick/Scripty) - Roslynを活用したC#スクリプトによるコード生成ツール。T4テンプレートのスクリプト版と考えられる
- [Sharpen](http://sharpen.rocks) - 既存コードベースに、新しいC#言語機能を知的に導入するVisual Studio拡張機能
- [SharpLab](https://sharplab.io/) - .NETコードプレイグラウンド。コードコンパイルの中間ステップと結果を表示。コンパイラが見ているコードの表示を提供し、Roslynの異なるブランチやバージョンを選択可能。ブラウザ上でC#、VB.NET、F#コードを実行可能
- [Testura.Code](https://github.com/Testura/Testura.Code) - C#コードの生成、保存、コンパイルに用いるRoslynAPIをラップしたツール。クラス、メソッド、文、式の生成に必要なメソッドとヘルパーを提供
- [Uno SourceGenerator](https://github.com/nventive/Uno.SourceGeneration) - ビルド中のプロジェクトに基づき、そのプロジェクトの構文および意味モデル情報を用いてC#ソースコードを生成するツール

## オープンソースのアナライザー、コード修正、リファクタリング <a id="open-source-analyzers-code-fixes-and-refactorings"></a>
オープンソースのアナライザー、コード修正、リファクタリングです。

- [.NET Analyzers](https://github.com/DotNetAnalyzers) - Roslynアナライザ開発に用いられるGitHub組織。組織内のリポジトリはASP.NET Core、WPF、IDisposable、System.Reflectionの使用など、さまざまなアナライザをカバー
- [.NET Compiler Platform ("Roslyn") Analyzers](https://github.com/dotnet/roslyn-analyzers) - Roslynチームが開発した診断アナライザ。静的解析APIの設計および実装を補強するために最初に開発された。コード品質、.NET Core、デスクトップ.NETフレームワーク、コード内のコメントなど、さまざまな分野をカバー
- [Code Cracker](https://github.com/code-cracker/code-cracker) - C#およびVB.NET向けのアナライザライブラリ。パフォーマンス、コーディングスタイルなど多くのカテゴリでの診断を提供する、またいくつかの基本的なリファクタリングも提供
- [CSharpGuidelinesAnalyzer](https://github.com/bkoelman/CSharpGuidelinesAnalyzer) - C#コーディングガイドライン（ https://csharpcodingguidelines.com/ ）に対する診断を報告する。
- [ErrorProne.NET](https://github.com/SergeyTeplyakov/ErrorProne.NET) - C#プログラムの正確性とパフォーマンスに焦点を当てたアナライザとコード修正のセット。Googleの[Error Prone](https://github.com/google/error-prone)を参考にした。
- [Mapping Generator](https://github.com/cezarypiatek/MappingGenerator) - 任意に複雑なオブジェクト間マッピングを生成するコード修正。マッピングが使われる多数の場面を標準で認識する。[AutoMapper](https://automapper.org/)に代わる設計時ツール。
- [Nullable.Extended](https://github.com/tom-englert/Nullable.Extended) - nullable reference typesを使用したコーディング時の経験を向上させるRoslynツールとアナライザ。
- [Refactoring Essentials for Visual Studio](https://github.com/icsharpcode/RefactoringEssentials/) - C#およびVB.NET向けのリファクタリング、アナライザ、コード修正。
- [Roslyn Clr Heap Allocation Analyzer](https://github.com/Microsoft/RoslynClrHeapAllocationAnalyzer) - C#のヒープ割り当てアナライザ。ボックス化、クロージャー、暗黙のデリゲート作成など、明示的および多くの暗黙的な割り当てを検出できる。
- [Roslynator](https://github.com/JosefPihrt/Roslynator) - C#向けの190以上のアナライザと190以上のリファクタリングのコレクション。コーディングスタイル、コードの読みやすさと簡略化、冗長性の削除、コンパイラエラーの修正など、多くの項目をカバー。
- [SonarC#](https://github.com/SonarSource/sonar-csharp) - SonarQubeプラットフォームへの拡張として使用されるC#言語用の静的コードアナライザ。
- [StyleCop Analyzers for the .NET Compiler Platform](https://github.com/DotNetAnalyzers/StyleCopAnalyzers) - StyleCopルールのRoslynへの移植。
- [VSDiagnostics](https://github.com/Vannevelj/VSDiagnostics) - asyncメソッドの使用、フラグ付きenum、例外処理におけるベストプラクティスなど、多くのコード品質チェックをカバーするコード品質アナライザのコレクション。

## アナライザー、コード修正、リファクタリングをテストするライブラリとフレームワーク <a id="libraries-and-frameworks-for-testing-analyzers-code-fixes-and-refactorings"></a>
アナライザー、コード修正、リファクタリングをテストするためのライブラリとフレームワークです。

- [Microsoft.CodeAnalysis.Testing](https://github.com/dotnet/roslyn-sdk/tree/master/src/Microsoft.CodeAnalysis.Testing) - NUnit、xUnitおよびMSTestフレームワークでアナライザおよびコード修正をテストするためのライブラリ。[Roslyn SDK](https://github.com/dotnet/roslyn-sdk)の一部。
- [RoslynTestKit](https://github.com/cezarypiatek/RoslynTestKit) - アナライザ、コード修正、リファクタリング、完了プロバイダーのためのユニットテストを書くための軽量フレームワーク。ユニットテストフレームワークに依存しない。

## ソースジェネレーター <a id="source-generators"></a>
ソースジェネレーター、および内部でソースジェネレーターを利用するオープンソースプロジェクトです（.NET 5.0とC# 9.0がまだプレビュー段階のため、現時点では大半が実験的です）。

- [DpDtInject](https://github.com/lsoft/DpdtInject) - 依存関係解決ロジックの大部分をコンパイル段階へ移す依存性注入コンテナの概念実証。コンパイル時の安全性を高め、高速な実行時解決を提供。
- [Generator.Equals](https://github.com/diegofrata/Generator.Equals) - クラスとレコードの等価性およびハッシュ処理を自動実装する。複数の比較戦略をサポートし、IL weavingベースの[Equals.Fody](https://github.com/Fody/Equals)と同様の機能を提供。
- [JsonSrcGen](https://github.com/trampster/JsonSrcGen) - リフレクションなしJSONシリアライザ。コンパイル時にリフレクションなしシリアライザを生成することで、極めて高速なJSON処理を可能にする。
- [Source Generator Playground](https://sourcegen.dev/) - オンラインアプリケーションで、ソースジェネレーターを実験できます。学習やアイデアのテストに最適です。自作のソースジェネレーターを作成したり、組み込み例から学んだりし、生成された出力を確認できます。
- [StrongInject](https://github.com/YairHalberstadt/stronginject) - コンパイル時依存性注入コンテナ。コンパイル時チェックおよび反射・実行時コード生成なしで、高速かつ [app-trimming](https://devblogs.microsoft.com/dotnet/app-trimming-in-net-5/)-フレンドリーです。
- [StructPacker](https://github.com/RudolfKurka/StructPacker) - C# struct型向けの低レベルで軽量かつパフォーマンスに焦点を当てたシリアライザ。自動的にC#のシリアライズコードを生成し、実行時パフォーマンスと効率を最適化します。
- [Svg to C# Source Generators](https://github.com/wieslawsoltes/SourceGenerators) - SVGをC#にコンパイルするコンパイラ。SVGの描画マーカーを [SkiaSharp](https://github.com/mono/SkiaSharp) でレンダリングするエンジンを使用してC#にコンパイルします。
- [WrapperValueObject](https://github.com/martinothamar/WrapperValueObject) - 型にラッパーを自動生成するツール。特に [strongly typed wrappers around primitive types](https://andrewlock.net/series/using-strongly-typed-entity-ids-to-avoid-primitive-obsession/) を作成する際に便利です。

## ブログ記事と解説 <a id="blog-posts-and-articles"></a>
パフォーマンス、Roslynの歴史、内部実装などを扱うブログ記事とオンライン解説です。

- [How Microsoft rewrote its C# compiler in C# and made it open source](https://medium.com/microsoft-open-source-stories/how-microsoft-rewrote-its-c-compiler-in-c-and-made-it-open-source-4ebed5646f98) - Mads Torgersen（C#の設計責任者）によるRoslynの物語。Roslynプロジェクトがなぜ始まり、そしてオープンソース化されたのかという、励まされるストーリーです。
- [Inside the .NET Compiler Platform – Performance Considerations during Syntax Analysis (#SpeakRoslyn)](https://robinsedlaczek.com/2015/04/29/inside-the-net-compiler-platform-performance-considerations-during-syntax-analysis-speakroslyn/) - Roslynのパフォーマンスに関する詳細な分析、特にメモリ消費量に焦点を当てています。
- [Persistence, Facades and Roslyn's Red-Green Trees](https://blogs.msdn.microsoft.com/ericlippert/2012/06/08/persistence-facades-and-roslyns-red-green-trees/) - Roslynチームが、不変で再利用可能なツリーを実装し、親参照を安価に提供するなど、多くの素晴らしい機能を実現した方法についての、励まされる紹介。引用："しかし、Roslynチームでは、不可能なことを日常的にしています" :-)
- [ReSharper and Roslyn: Q&A](https://blog.jetbrains.com/dotnet/2014/04/10/resharper-and-roslyn-qa/) - ReSharperがRoslynを使用しない理由についての優れた説明。静的コード分析とRoslynの制限についての良好なディスカッションを含みます。
- [Roslyn performance (Matt Gertz)](https://blogs.msdn.microsoft.com/csharpfaq/2014/01/15/roslyn-performance-matt-gertz/) - Roslynチームがパフォーマンス評価および実現にどう取り組んでいるかに関する洞察を提供します。

## 講演 <a id="talks"></a>
Roslynに関する公開講演です。

- [The Power of Roslyn](https://www.youtube.com/watch?v=nXljhGDokqA) - Kasey Uhlenhuthが2018年のNDC Osloで行った講演。Roslynの基本とコード分析器・修正ツールのAPIについての説明を含みます。

## コントリビューション <a id="contribute"></a>

コントリビューションを歓迎します :-) 目標は、コミュニティ主導で分類されたRoslynリソース集を構築することです。コントリビューションの前に、[コントリビューションガイドライン](https://github.com/ironcev/awesome-roslyn/blob/7eb315eec6bd3fbaf44bb5c08e42e78d4b248f37/contributing.md)を確認してください。

## ライセンス <a id="license"></a>
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

法律で認められる範囲で、Igor Rončevićは本作品に関するすべての著作権および関連する権利を放棄しています。
