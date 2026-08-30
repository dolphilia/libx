---
title: "analysis-tools-dev/static-analysis"
description: "analysis-tools-dev/static-analysis の定本スナップショット"
licenseSource: "github-analysis-tools-dev-static-analysis-readme-md"
---



 <a href="https://analysis-tools.dev/">
   <img alt="Analysis Tools Website" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/redesign.svg" />
 </a>

このリポジトリは、あらゆるプログラミング言語、ビルドツール、設定ファイルなどを対象とする**静的解析ツール**をまとめています。リンターやフォーマッターなど、コード品質を改善するツールを中心に掲載します。
公式サイト[analysis-tools.dev](https://analysis-tools.dev/)はこのリポジトリを基に、ランキング、利用者コメント、各ツールの動画などの追加資料を提供します。

[![Website](https://img.shields.io/badge/Website-Online-2B5BAE)](https://analysis-tools.dev)
![CI](https://github.com/analysis-tools-dev/static-analysis/workflows/CI/badge.svg)
[![Links](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml/badge.svg)](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml)

## スポンサー

このプロジェクトはスポンサーの支援によって成り立っています。

<table>
   <tr>
      <td>
         <a href="https://www.pixee.ai/">
            <picture >
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-light.png">
               <img width="200px" alt="Pixee" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-dark.png">
            </picture>
         </a>
      </td>
      <td>
         <a href="https://coderabbit.ai">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/code-rabbit.svg" />
         </a>
      </td>
      <td>
         <a href="https://semgrep.dev/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/semgrep.svg" />
         </a>
      </td>
      <td>
         <a href="https://offensive360.com/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/offensive360.png" />
         </a>
      </td>
   </tr>
</table>

プロジェクトを支援する場合は[GitHub Sponsorsページ](https://github.com/sponsors/analysis-tools-dev)をご覧ください。

## 記号の意味:

- :copyright: はプロプライエタリソフトウェアを示します。それ以外はオープンソースです。
- :information_source: は、新規プロジェクトでの利用をコミュニティが推奨しなくなったツールを示します。アイコンから議論Issueへ移動できます。
- :warning: は、1年以上更新されていないか、リポジトリがアーカイブされたツールを示します。

プルリクエストを歓迎します。  
姉妹プロジェクト[awesome-dynamic-analysis](https://github.com/mre/awesome-dynamic-analysis)も参照してください。

## 目次

#### [プログラミング言語](#programming-languages-1)

| | | |
|---|---|---|
| [ABAP](#abap) | [Erlang](#erlang) | [PL/SQL](#plsql) |
| [Ada](#ada) | [F#](#fsharp) | [Perl](#perl) |
| [Assembly](#asm) | [Fortran](#fortran) | [Python](#python) |
| [Awk](#awk) | [Go](#go) | [R](#r) |
| [C](#c) | [Groovy](#groovy) | [Rego](#rego) |
| [C#](#csharp) | [Haskell](#haskell) | [Ruby](#ruby) |
| [C++](#cpp) | [Haxe](#haxe) | [Rust](#rust) |
| [Clojure](#clojure) | [Java](#java) | [SQL](#sql) |
| [CoffeeScript](#coffeescript) | [JavaScript](#javascript) | [Scala](#scala) |
| [ColdFusion](#coldfusion) | [Julia](#julia) | [Shell](#shell) |
| [Crystal](#crystal) | [Kotlin](#kotlin) | [Swift](#swift) |
| [Dart](#dart) | [Lua](#lua) | [Tcl](#tcl) |
| [Delphi](#delphi) | [MATLAB](#matlab) | [TypeScript](#typescript) |
| [Dlang](#dlang) | [Nim](#nim) | [Verilog/SystemVerilog](#verilog) |
| [Elixir](#elixir) | [Ocaml](#ocaml) | [Vim Script](#vim-script) |
| [Elm](#elm) | [PHP](#php) | [WebAssembly](#wasm) |

#### [複数言語](#multiple-languages-1)

#### [その他](#other-1)
<details>
 <summary>その他を表示</summary>

| | | |
|---|---|---|
| [.env](#dotenv) | [Embedded Ruby (a.k.a. ERB, eRuby)](#erb) | [Prometheus](#prometheus) |
| [Ansible](#ansible) | [Gherkin](#gherkin) | [Protocol Buffers](#protobuf) |
| [アーカイブ](#archive) | [HTML](#html) | [Puppet](#puppet) |
| [Azure Resource Manager](#arm) | [JSON](#json) | [Rails](#rails) |
| [バイナリ](#binary) | [Kubernetes](#kubernetes) | [セキュリティ／SAST](#security) |
| [ビルドツール](#buildtool) | [LaTeX](#latex) | [スマートコントラクト](#smart-contracts) |
| [CSS/SASS/SCSS](#css) | [Laravel](#laravel) | [サポート](#support) |
| [設定ファイル](#configfile) | [Makefile](#make) | [テンプレート言語](#template) |
| [構成管理](#configmanagement) | [Markdown](#markdown) | [Terraform](#terraform) |
| [コンテナ](#container) | [Metalinter](#meta) | [翻訳](#translation) |
| [継続的インテグレーション](#ci) | [モバイル](#mobile) | [Vue.js](#vue) |
| [Deno](#deno) | [Nix](#nix) | [文章](#writing) |
| [Dockerfile](#dockerfile) | [Node.js](#nodejs) | [YAML](#yaml) |
| [組み込み](#embedded) | [パッケージ](#package) | [git](#git) |

</details>

---

## プログラミング言語

<a name="abap" />
<h2>ABAP</h2>


- [abaplint](https://abaplint.org) — ABAP用のTypeScriptで書かれたリントツール

- [abapOpenChecks](https://docs.abapopenchecks.org) — SAPコードインスペクタに新たなおよびカスタマイズ可能なチェックを追加


<a name="ada" />
<h2>Ada</h2>


- [Polyspace for Ada](https://www.mathworks.com/products/polyspace-ada.html) :copyright: — ソースコードにオーバーフロー、除算によるゼロ除算、配列の範囲外アクセス、およびその他の実行時エラーが存在しないことを証明するコード検証を提供

- [SPARK](https://www.adacore.com/about-spark) :copyright: — Ada用の静的解析および形式検証ツールセット


<a name="asm" />
<h2>Assembly</h2>


- **STOKE** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="awk" />
<h2>Awk</h2>


- [gawk --lint](https://www.gnu.org/software/gawk/manual/html_node/Options.html) — 他のawk実装に移植が難しいまたは不確実な構文について警告


<a name="c" />
<h2>C</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — AstréeはC/C++アプリケーションにおける実行時エラーおよび無効な並列動作の存在を自動的に証明します。浮動小数点計算に関しては正確であり、非常に高速で、極めて精密です。このアノテーターはMISRA/CERT/CWE/Adaptive Autosarのコーディング規則をチェックし、ISO 2626、DO-178CレベルAおよびその他の安全基準への適合をサポートします。JenkinsおよびEclipseプラグインが利用可能です。

- [CBMC](http://www.cprover.org/cbmc) — Cプログラム向けの境界モデル検証ツール。ユーザー定義アサート、標準アサート、複数のカバレッジメトリック分析を提供。

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — ClangベースのC++リントツールで、問題の修正（限定的に）が可能。

- [clazy](https://github.com/KDE/clazy) — Clangフレームワークに基づくQt向け静的コード分析ツール。clazyはコンパイラプラグインであり、clangがQtの意味を理解できるようにします。50以上のQt関連コンパイラ警告が得られ、無駄なメモリ割り当てからAPIの誤用まで、自動リファクタリングのための修正案（fix-its）も提供されます。

- [CMetrics](https://github.com/MetricsGrimoire/CMetrics) — Cファイルのサイズと複雑度を測定。

- [CPAchecker](https://cpachecker.sosy-lab.org) — Cプログラムの設定可能なソフトウェア検証ツール。CPAcheckerという名前は、ツールがCPA概念に基づいており、ソフトウェアプログラムの検証に使用されていることを反映している

- [cppcheck](https://cppcheck.sourceforge.io) — C/C++コードの静的分析。

- [CppDepend](https://www.cppdepend.com) :copyright: — コードの測定、クエリ、可視化を行い、予期しない問題や技術的負債、複雑性を回避。

- [cpplint](https://github.com/cpplint/cpplint) — Googleのスタイルガイドに従った自動C++チェックツール。

- [cqmetrics](https://github.com/dspinellis/cqmetrics) — Cコード向けの品質メトリクス。

- [CScout](https://www.spinellis.gr/cscout) — CおよびCプリプロセッサコード向けの複雑度および品質メトリクス。

- **ENRE-cpp** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [ESBMC](http://esbmc.org) — ESBMCは、単一およびマルチスレッドC/C++プログラムの検証に用いる、論理性をもつ理論の満足度に基づくオープンソースで、許容されるライセンスの文脈境界モデル検証ツール。

- [flawfinder](http://dwheeler.com/flawfinder/) — 可能性のあるセキュリティ上の弱点を検出。

- **flint++** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Frama-C](https://www.frama-c.com) — Cコード向けの正確で拡張可能な静的分析ツール

- [GCC](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html) — GCCコンパイラはバージョン10から静的分析機能を備えています。この機能はGCCがアナライザサポートを有効にした場合にのみ利用可能です。また、診断結果をSARIF形式（v13以降）のJSONファイルに出力できます。

- [Goblint](https://goblint.in.tum.de) — マルチスレッドCプログラムの静的解析を行う静的解析ツール。主にデータ競合の検出に焦点を当てているが、バッファオーバーフローやヌルポインタ参照といった他の実行時エラーも報告する。

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — エンタープライズレベルの静的分析ツールで、埋め込みソフトウェアに適用。MISRA、CERT、AUTOSARコーディング規則をサポート。

- [IKOS](https://github.com/nasa-sw-vnv/ikos) — LLVMをベースとしたC/C++コード向けの正確な静的分析ツール。

- [KLEE](http://klee.github.io/) — LLVMコンパイラインフラストラクチャに基づいた動的シンボリック実行エンジン。プログラムに対してテストケースを自動生成し、可能な限りプログラムの大部分をテストします。

- [LDRA](https://ldra.com) :copyright: — MISRA CおよびC++、JSF++ AV、CWE、CERT C、CERT C++およびカスタムルールを含む静的解析（TBVISION）を備えたツールセット。

- **MATE** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PC-lint](https://pclintplus.com/) :copyright: — C/C++の静的解析。Windows／Linux／MacOSでネイティブに実行可能。ほぼすべてのプラットフォームに対応したコードの解析をサポート。C11／C18およびC++17に対応。

- [Phasar](https://phasar.org) — LLVMベースの静的解析フレームワークで、汚染および型状態解析を提供。

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — CおよびC++の埋め込みソフトウェアにおける実行時エラー、並列性問題、セキュリティ脆弱性、およびその他の欠陥を特定。

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — CおよびC++ソースコードにおけるオーバーフロー、ゼロ除算、配列外アクセス、およびその他の特定の実行時エラーの存在のないことを証明するコード検証を提供。

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — Clangに内蔵された静的解析器（Clang Static Analyzer）を、通常のビルドで駆動するためのフロントエンド。

- [splint](http://splint.org) — アノテーションを活用した静的プログラムチェック。

- [SVF](https://svf-tools.github.io/SVF) — CおよびC++プログラム向けにスケーラブルかつ正確なプロシージャ間依存性解析を可能にする静的ツール。

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — コーディングエラーおよびその関連するセキュリティ脆弱性の包括的な検出。これは、定義された未定義動作の検出（バッファオーバーフロー、配列外アクセス、ヌルポインタ参照、使用後解放、ゼロ除算、未初期化メモリアクセス、符号オーバーフロー、無効なポインタ算術など）、データフローおよびコントロールフローの検証、および形式仕様の完全な機能検証を含む。C18およびC++20までのすべてのCおよびC++バージョンに対応。TrustInSoft Analyzerは2023年Q2（TCL3）にISO 26262の資格取得を行う。また、MISRA Cチェックも組み込み。

- **vera++** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="csharp" />
<h2>C#</h2>


- [.NET Analyzers](https://github.com/DotNetAnalyzers) — .NETコンパイラプラットフォームを用いた診断およびコード修正ツールの開発を行う組織。

- [ArchUnitNET](https://github.com/TNG/ArchUnitNET) — C#でアーキテクチャルールを指定・検証するためのC#アーキテクチャテストライブラリ。

- [code-cracker](https://code-cracker.github.io) — C#およびVB向けのRoslynを用いたリファクタリング、コード分析、その他便利機能を提供する分析ライブラリ。

- **CSharpEssentials** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Designite](http://www.designite-tools.com) :copyright: — Designiteは、さまざまなアーキテクチャ、設計、実装の匂いを検出、さまざまなコード品質メトリクスの計算、およびトレンド分析をサポート。

- [Gendarme](https://www.mono-project.com/docs/tools+libraries/tools/gendarme) — GendarmeはECMA CIL形式（Monoおよび.NET）を含むプログラムおよびライブラリを検査。

- **Infer#** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Meziantou.Analyzer](https://github.com/meziantou/Meziantou.Analyzer) — C#における設計、使用、セキュリティ、パフォーマンス、スタイルに関する良い慣例を強制するRoslyn分析ツール。

- [NDepend](http://www.ndepend.com) :copyright: — コードの測定、クエリ、可視化を行い、予期しない問題や技術的負債、複雑性を回避。

- [Puma Scan](https://pumasecurity.io) — Puma Scanは、開発チームがVisual Studioでコードを書いている際に、XSS、SQLi、CSRF、LDAPi、暗号、デシリアイズ、など、一般的な脆弱性に対してリアルタイムで安全なコード分析を提供します。

- [Roslynator](https://github.com/JosefPihrt/Roslynator) — C#向けの190以上のアノテーターと190以上のリファクタリングをRoslynが提供するもの。

- [SonarAnalyzer.CSharp](https://github.com/SonarSource/sonar-dotnet) — これらのRoslynアノテーターは、コードベース内のバグ、脆弱性、コードの悪臭を検出し、修正することで、安全で信頼性があり、維持性の高いクリーンコードを生成します。

- **VSDiagnostics** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Wintellect.Analyzers](https://github.com/Wintellect/Wintellect.Analyzers) — .NETコンパイラプラットフォーム（"Roslyn"）の診断アノテーターおよびコード修正機能。


<a name="cpp" />
<h2>C++</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — AstréeはC/C++アプリケーションにおける実行時エラーおよび無効な並列動作の存在を自動的に証明します。浮動小数点計算に関しては正確であり、非常に高速で、極めて精密です。このアノテーターはMISRA/CERT/CWE/Adaptive Autosarのコーディング規則をチェックし、ISO 2626、DO-178CレベルAおよびその他の安全基準への適合をサポートします。JenkinsおよびEclipseプラグインが利用可能です。

- [CBMC](http://www.cprover.org/cbmc) — Cプログラム向けの境界モデル検証ツール。ユーザー定義アサート、標準アサート、複数のカバレッジメトリック分析を提供。

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — ClangベースのC++リントツールで、問題の修正（限定的に）が可能。

- [clazy](https://github.com/KDE/clazy) — Clangフレームワークに基づくQt向け静的コード分析ツール。clazyはコンパイラプラグインであり、clangがQtの意味を理解できるようにします。50以上のQt関連コンパイラ警告が得られ、無駄なメモリ割り当てからAPIの誤用まで、自動リファクタリングのための修正案（fix-its）も提供されます。

- [CMetrics](https://github.com/MetricsGrimoire/CMetrics) — Cファイルのサイズと複雑度を測定。

- [cppcheck](https://cppcheck.sourceforge.io) — C/C++コードの静的分析。

- [CppDepend](https://www.cppdepend.com) :copyright: — コードの測定、クエリ、可視化を行い、予期しない問題や技術的負債、複雑性を回避。

- [cpplint](https://github.com/cpplint/cpplint) — Googleのスタイルガイドに従った自動C++チェックツール。

- [cqmetrics](https://github.com/dspinellis/cqmetrics) — Cコード向けの品質メトリクス。

- [CScout](https://www.spinellis.gr/cscout) — CおよびCプリプロセッサコード向けの複雑度および品質メトリクス。

- **ENRE-cpp** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [ESBMC](http://esbmc.org) — ESBMCは、単一およびマルチスレッドC/C++プログラムの検証に用いる、論理性をもつ理論の満足度に基づくオープンソースで、許容されるライセンスの文脈境界モデル検証ツール。

- [flawfinder](http://dwheeler.com/flawfinder/) — 可能性のあるセキュリティ上の弱点を検出。

- **flint++** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [GCC](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html) — GCCコンパイラはバージョン10から静的分析機能を備えています。この機能はGCCがアナライザサポートを有効にした場合にのみ利用可能です。また、診断結果をSARIF形式（v13以降）のJSONファイルに出力できます。

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — エンタープライズレベルの静的分析ツールで、埋め込みソフトウェアに適用。MISRA、CERT、AUTOSARコーディング規則をサポート。

- [IKOS](https://github.com/nasa-sw-vnv/ikos) — LLVMをベースとしたC/C++コード向けの正確な静的分析ツール。

- [KLEE](http://klee.github.io/) — LLVMコンパイラインフラストラクチャに基づいた動的シンボリック実行エンジン。プログラムに対してテストケースを自動生成し、可能な限りプログラムの大部分をテストします。

- [LDRA](https://ldra.com) :copyright: — MISRA CおよびC++、JSF++ AV、CWE、CERT C、CERT C++およびカスタムルールを含む静的解析（TBVISION）を備えたツールセット。

- **MATE** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PC-lint](https://pclintplus.com/) :copyright: — C/C++の静的解析。Windows／Linux／MacOSでネイティブに実行可能。ほぼすべてのプラットフォームに対応したコードの解析をサポート。C11／C18およびC++17に対応。

- [Phasar](https://phasar.org) — LLVMベースの静的解析フレームワークで、汚染および型状態解析を提供。

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — CおよびC++の埋め込みソフトウェアにおける実行時エラー、並列性問題、セキュリティ脆弱性、およびその他の欠陥を特定。

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — CおよびC++ソースコードにおけるオーバーフロー、ゼロ除算、配列外アクセス、およびその他の特定の実行時エラーの存在のないことを証明するコード検証を提供。

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — Clangに内蔵された静的解析器（Clang Static Analyzer）を、通常のビルドで駆動するためのフロントエンド。

- [splint](http://splint.org) — アノテーションを活用した静的プログラムチェック。

- [SVF](https://svf-tools.github.io/SVF) — CおよびC++プログラム向けにスケーラブルかつ正確なプロシージャ間依存性解析を可能にする静的ツール。

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — コーディングエラーおよびその関連するセキュリティ脆弱性の包括的な検出。これは、定義された未定義動作の検出（バッファオーバーフロー、配列外アクセス、ヌルポインタ参照、使用後解放、ゼロ除算、未初期化メモリアクセス、符号オーバーフロー、無効なポインタ算術など）、データフローおよびコントロールフローの検証、および形式仕様の完全な機能検証を含む。C18およびC++20までのすべてのCおよびC++バージョンに対応。TrustInSoft Analyzerは2023年Q2（TCL3）にISO 26262の資格取得を行う。また、MISRA Cチェックも組み込み。

- **vera++** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="clojure" />
<h2>Clojure</h2>


- [clj-kondo](https://github.com/borkdude/clj-kondo) — Clojureコード向けのリントツール。入力中に潜在的なエラーを通知し、開発者に喜びをもたらす。


<a name="coffeescript" />
<h2>CoffeeScript</h2>


- **coffeelint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="coldfusion" />
<h2>ColdFusion</h2>


- [Fixinator](https://fixinator.app) :copyright: — ColdFusionまたはCFMLコードに対する静的セキュリティコード解析。CIパイプライン内または開発者ターミナルから使用可能に設計されている。


<a name="crystal" />
<h2>Crystal</h2>


- [ameba](https://crystal-ameba.github.io) — Crystal向けの静的コード解析ツール。

- [crystal](https://crystal-lang.org) — Crystalコンパイラに組み込まれたリント機能。


<a name="dart" />
<h2>Dart</h2>


- **Dart Code Metrics** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [effective_dart](https://pub.dev/packages/effective_dart) — Effective Dartガイドラインに従ったリントルール。

- **lint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Linter for dart** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="delphi" />
<h2>Delphi</h2>


- [DelphiLint](https://github.com/integrated-application-development/delphilint) — Delphi IDEパッケージで、リアルタイムコード解析およびリントを提供。SonarDelphiによって駆動。

- [Fix Insight](https://www.tmssoftware.com/site/fixinsight.asp) :copyright: — 静的コード解析用の無料IDEプラグイン。_Pro_エディションには自動化用のコマンドラインツールが含まれる。

- [Pascal Analyzer](https://peganza.com/products_pal.html) :copyright: — 複数のレポートを提供する静的コード解析ツール。無料の_Lite_エディションは、報告機能が限定されている。

- [Pascal Expert](https://peganza.com/products_pex.html) :copyright: — コード解析用のIDEプラグイン。Pascal Analyzerの一部機能を含み、Delphi 2007以降のバージョンで利用可能。

- [SonarDelphi](https://github.com/integrated-application-development/sonar-delphi) — SonarQubeコード品質プラットフォーム向けのDelphi静的解析器。


<a name="dlang" />
<h2>Dlang</h2>


- [D-scanner](https://github.com/dlang-community/D-Scanner) — D-ScannerはDソースコードを解析するツール。


<a name="elixir" />
<h2>Elixir</h2>


- [credo](https://github.com/rrrene/credo) — コードの一貫性と教育に焦点を当てた静的コード解析ツール

- [dialyxir](https://github.com/jeremyjh/dialyxir) — ElixirプロジェクトにおけるDialyzerの使用を簡素化するタスクの組み合わせ

- [sobelow](https://github.com/nccgroup/sobelow) — Phoenixフレームワーク向けのセキュリティに焦点を当てた静的解析


<a name="elm" />
<h2>Elm</h2>


- **elm-analyse** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [elm-review](https://package.elm-lang.org/packages/jfmengels/elm-review/latest) — Elmプロジェクト全体を分析し、Elmで記述された共有ルールやカスタムルールに注目し、Elmコンパイラが提供しない保証を追加する


<a name="erlang" />
<h2>Erlang</h2>


- [dialyzer](https://www.erlang.org/doc/man/dialyzer.html) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
Dialyzerはデバッグ情報付きBEAMバイトコードまたはErlangソースから解析を開始し、不一致の内容とファイル・行番号を報告します。成功型付けに基づき、偽陽性のない健全な警告を目指します。

- [elvis](https://github.com/inaka/elvis) — Erlangスタイルレビューツール

- **Primitive Erlang Security Tool (PEST)** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="fsharp" />
<h2>F#</h2>


- [fantomas](https://fsprojects.github.io/fantomas/) — F#ソースコードフォーマッタ

- [FSharpLint](https://github.com/fsprojects/FSharpLint) — F#用のリントツール

- [ionide-analyzers](https://ionide.io/ionide-analyzers/) — F#アナライザーのコレクション。FSharp.Analyzers.SDKで構築されたもの


<a name="fortran" />
<h2>Fortran</h2>


- [Fortitude](https://fortitude.readthedocs.io) — Ruffをインスピレーションとして（および構築に）採用し、コミュニティのベストプラクティスに基づくFortranリントツール。最新版Fortran（2023）標準に対応。

- [fprettify](https://pypi.python.org/pypi/fprettify) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
Fprettifyは、履歴を保ちながら空白、インデント、区切り文字の配置を統一し、大文字・小文字変換やプリプロセッサ指令にも対応する整形ツールです。

- **i-Code CNES for Fortran** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="go" />
<h2>Go</h2>


- [aligncheck](https://gitlab.com/opennota/check) — 効率的にパッキングされていない構造体を検出

- [bodyclose](https://github.com/timakin/bodyclose) — HTTPレスポンスボディが閉じられているかを確認

- [deadcode](https://github.com/tsenart/deadcode) — 使用されていないコードを検出

- **dingo-hunter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [dogsled](https://github.com/alexkohler/dogsled) — 空白識別子が多数含まれる割り当てや宣言を検出

- [dupl](https://github.com/mibk/dupl) — 潜在的に重複しているコードを報告

- [errcheck](https://github.com/kisielk/errcheck) — エラーリターン値が使用されているかを確認

- **errwrap** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [flen](https://github.com/lafolle/flen) — Goパッケージ内の関数の長さに関する情報を取得

- **Go Meta Linter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `golangci-lint`。

- [go tool vet --shadow](https://golang.org/cmd/vet#hdr-Shadowed_variables) — 意図しないスコープ遮蔽が生じた変数を報告

- [go vet](https://golang.org/cmd/vet) — Goソースコードを検査し、怪しい部分を報告

- **go-consistent** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [go-critic](https://github.com/go-critic/go-critic) — 他のリントツールに実装されていないチェックを維持するGoソースコードリントツール

- [go/ast](https://golang.org/pkg/go/ast) — Package astは、Goパッケージの構文木を表すために使用される型を宣言する

- [goast](https://github.com/m-mizutani/goast) — Go AST（抽象構文木）ベースの静的解析ツール（Rego）

- **gochecknoglobals** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [goconst](https://github.com/jgautheron/goconst) — 繰り返し出現する文字列を特定し、定数に置き換えることができる

- [gocyclo](https://github.com/fzipp/gocyclo) — Goソースコード内の関数のサイクルマトキシティを計算

- [gofmt -s](https://golang.org/cmd/gofmt) — コードが適切にフォーマットされており、さらに簡略化できないかをチェック

- [gofumpt](https://github.com/mvdan/gofumpt) — よりも厳しくフォーマットを定義しつつ、後方互換性を保つ。つまり、が許容するフォーマットの一部をが許容するフォーマットとして受け入れる。このツールはGo 1.19以降ののフォークであり、Go 1.18以降が必要。Goコードのフォーマットに直接置き換えることができる。gofumptを実行した後にgofmtを実行すると、変更が生じない。は、のフォーマットと矛盾するルールを追加することはない。したがって、を拡張するのではなく、それと競合するものではない。 `gofmt` `gofumpt` `gofmt` `gofmt` `gofumpt` `gofmt` `gofmt`

- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) — 未インポートまたは参照されていないパッケージインポートの検出

- [gokart](https://github.com/praetorian-inc/gokart) — Golangのセキュリティ分析で誤検出を最小限に抑え、変数や関数引数の元のソースをトレースして、入力ソースが安全かどうかを判定

- [GolangCI-Lint](https://golangci-lint.run) — Go向けの高速リントランナー。複数のGoリントツールを統合し、一元化された設定、キャッシュ、出力フォーマットを提供。`Go Meta Linter`の代替。

- [golint](https://github.com/golang/lint) — Goソースコード内のコーディングスタイルの誤りを表示

- [goreporter](https://github.com/360EntSecGroup-Skylar/goreporter) — 複数のリントツールを並列実行し、その出力を統一したレポートに変換

- [goroutine-inspect](https://github.com/linuxerwang/goroutine-inspect) — Golangのgoroutineダンプを分析するインタラクティブツール

- [gosec (gas)](https://securego.io) — Go ASTをスキャンしてソースコード内のセキュリティ問題を検出

- [gotype](https://pkg.go.dev/golang.org/x/tools/cmd/gotype) — Goコンパイラに類似する構文および意味論的解析

- [govulncheck](https://go.dev/blog/vuln) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
govulncheckは既定でGo脆弱性データベース https://vuln.go.dev. へ問い合わせます。送信されるのはモジュールパスのみで、コードやその他のプログラム情報は含まれません。

- [ineffassign](https://github.com/gordonklaus/ineffassign) — Goコード内の無意味な代入を検出

- **interfacer** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [lll](https://github.com/walle/lll) — 長すぎる行を報告

- **maligned** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [misspell](https://github.com/client9/misspell) — よく誤って書かれる英語の単語を特定

- **nakedret** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [nargs](https://github.com/alexkohler/nargs) — 関数宣言内の未使用引数を検出

- [OSV-Scanner](https://osv.dev/) — OSV.devが提供するデータを使用したGoで書かれた脆弱性スキャナー。Googleが開発したマルチ言語およびパッケージマネージャーの依存関係における既知の脆弱性をスキャンするツール。コンテナスキャン、ライセンススキャン、ガイド付き修正をサポート。ロックファイル、SBOM、コンテナイメージと連携してセキュリティ問題を特定

- [prealloc](https://github.com/alexkohler/prealloc) — 潜在的に事前に割り当て可能なスライス宣言を特定

- [Reviewdog](https://github.com/haya14busa/reviewdog) — 任意のリントツールから任意のコードホスティングサービスにレビューコメントを投稿するツール

- [revive](https://revive.run) — 高速でカスタマイズ可能、拡張可能、柔軟で美しいGo用リントツール。golintのドロップイン置き換え

- **safesql** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **shisho** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [staticcheck](https://staticcheck.io) — バグの検出、コードの簡略化、パフォーマンス向上に特化したGoの静的解析

- [structcheck](https://gitlab.com/opennota/check) — 未使用な構造体フィールドを検出

- [structslop](https://github.com/orijtech/structslop) — Go向けの静的解析ツールで、構造体フィールドの並び替えを推奨し、メモリ/割り当て効率を最大化

- [test](https://pkg.go.dev/testing) — stdlibのテストモジュールからのテスト失敗の位置を表示

- **unconvert** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [unparam](https://github.com/mvdan/unparam) — 未使用な関数パラメータを検出

- [varcheck](https://gitlab.com/opennota/check) — 未使用なグローバル変数および定数を検出

- [wsl](https://github.com/bombsimon/wsl) — 適切な場所に空行を強制


<a name="groovy" />
<h2>Groovy</h2>


- [CodeNarc](https://codenarc.github.io/CodeNarc) — Groovyソースコード向けの静的解析ツールで、多くのコーディング規則およびベストプラクティスの監視・強制を可能にする


<a name="haskell" />
<h2>Haskell</h2>


- **brittany** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [HLint](https://github.com/ndmitchell/hlint) — Haskellコードへの改善提案を提供するツールHLint

- [Liquid Haskell](https://ucsd-progsys.github.io/liquidhaskell-blog/) — Haskellプログラム向けの精緻型チェックツールLiquid Haskell

- [Stan](https://kowainik.github.io/projects/stan) — Haskellプロジェクトの分析を行うコマンドラインツールStan。発見された脆弱性をわかりやすく表示し、検出された問題に対する解決策を提供

- [Weeder](https://github.com/ocharles/weeder) — Haskellコード内の死んでいるエクスポートまたはパッケージインポートを検出するツール


<a name="haxe" />
<h2>Haxe</h2>


- [Haxe Checkstyle](https://haxecheckstyle.github.io/docs/haxe-checkstyle/home.html) — 開発者がコーディング規則に従ったHaxeコードを書くための静的解析ツール


<a name="java" />
<h2>Java</h2>


- [Checker Framework](https://checkerframework.org) — Java向けのプラグイン型型チェック。これは単なるバグ検出ツールではなく、正確性を保証する検証ツールであり、27の事前構築された型システムを提供し、ユーザーが独自の型システムを定義できる。マニュアルには30以上のユーザー貢献型システムが記載されている。

- [checkstyle](https://checkstyle.org) — Javaソースコードがコーディング規則またはバリデーションルール（ベストプラクティス）に適合しているかをチェック

- [ck](https://github.com/mauricioaniche/ck) — ソースJavaファイルを処理して、ChidamberおよびKemererのオブジェクト指向メトリクスを計算

- [ckjm](http://www.spinellis.gr/sw/ckjm) — コンパイル済みJavaファイルのバイナリコードを処理して、ChidamberおよびK、Kemererのオブジェクト指向メトリクスを計算

- **CogniCrypt** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Dataflow Framework](https://github.com/typetools/checker-framework) — Java向けの産業レベルのデータフローフレームワーク。データフローフレームワークは、Checker Framework、GoogleのError Prone、UberのNullAway、MetaのNullsafeなどに使用されており、Checker Frameworkと共に配布されている。

- [DesigniteJava](http://www.designite-tools.com/designitejava) :copyright: — DesigniteJavaは、さまざまなアーキテクチャ、設計、実装の匂いを検出し、さまざまなコード品質メトリクスを計算する。

- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblueは、ソフトウェア開発チーム向けにAIを活用したコード分析およびテストソリューションを提供するソフトウェア企業。その技術は開発者がテストを自動化し、バグを発見し、ソフトウェア開発プロセスにおける手作業を減らすのを支援。企業の主な製品であるDiffblue Coverは、JavaコードのユニットテストをAIで生成・実行し、エラーを検出し、コード品質を向上させる。

- [Doop](https://plast-lab.github.io/doop-pldi15-tutorial/) — Doopは、Java/Androidプログラムの静的解析を目的とした宣言型フレームワークであり、ポインタ解析アルゴリズムを中心に構成されている。Doopは多様な解析を提供し、解析を端から実行するための周辺構成（事実生成、処理、統計など）も提供している。

- **ENRE-java** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Error Prone](https://errorprone.info) — Javaの一般的なミスをコンパイル時エラーとして検出する

- [fb-contrib](http://fb-contrib.sourceforge.net) — FindBugsに追加のバグ検出機能を提供するプラグイン

- [forbidden-apis](https://github.com/policeman-tools/forbidden-apis) — 特定のメソッド/クラス/フィールド（たとえば、文字列ストリームから読み取る際に文字コードを指定しない）の呼び出しを検出し、禁止する。Maven/Gradle/Antと互換。

- [google-java-format](https://github.com/google/google-java-format) — JavaソースコードをGoogle Javaスタイルにフォーマット

- **HuntBugs** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [IntelliJ IDEA](https://www.jetbrains.com/idea) :copyright: — JavaおよびKotlin向けの多くの検査機能を内蔵しており、リファクタリング、フォーマットなどに必要なツールを提供。

- [JArchitect](https://www.jarchitect.com) :copyright: — コードの測定、クエリ、可視化を行い、予期しない問題や技術的負債、複雑性を回避。

- [JBMC](https://www.cprover.org/jbmc) — Java（バイトコード）向けの制限付きモデル検証ツール。ユーザー定義のアサート、標準アサート、複数のカバレッジメトリック分析を検証。

- [JLiSA](https://github.com/lisa-analyzer/jlisa) — Java向けの抽象解釈に基づく静的解析ツール。[LiSA](https://github.com/lisa-analyzer/lisa)フレームワークをベースに構築。

- [Mariana Trench](https://mariana-tren.ch/) — AndroidおよびJavaアプリケーション向けのセキュリティに特化した静的解析ツール。Mariana TrenchはDalvikバイトコードを分析し、大規模コードベース（数十百万行）でも高速に実行されるように設計されている。コード変更が行われた時点で、リポジトリに登録される前に脆弱性を検出できる。

- [NullAway](https://github.com/uber/NullAway) — タイプベースのヌルポインタチェックツール。実行時負荷が低い。[Error Prone](http://errorprone.info/)プラグイン。

- **OWASP Dependency Check** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [qulice](https://www.qulice.com) — いくつか（事前に設定済み）の静的解析ツール（Checkstyle、PMD、FindBugs、…）を組み合わせる。

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — Javaコードベースにおいて、リファクタリングすべきGodクラスや高結合性クラスを特定し、優先順位を付ける。

- [Soot](https://soot-oss.github.io/soot) — JavaおよびAndroidアプリケーションの分析と変換を行うためのフレームワーク。

- [Spoon](https://spoon.gforge.inria.fr) — SpoonはJavaソースコード（Java 9、10、11、12、13、14を含む）を分析・変換するメタプログラミングライブラリ。ソースファイルをパースし、設計されたASTを構築し、強力な分析および変換APIを提供。MavenおよびGradleに統合可能。

- [SpotBugs](https://spotbugs.github.io) — SpotBugsはFindBugsの後継ツール。Javaコード内のバグを検出するための静的解析ツール。

- **steady** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 静的コード解析からのレポートファイルをパースするためのJavaライブラリ。Jenkins、Maven、Gradleプラグインなどに使用。


<a name="javascript" />
<h2>JavaScript</h2>


- **aether** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Closure Compiler](https://developers.google.com/closure/compiler) — JavaScriptファイルの効率向上、サイズ縮小、コード警告を提供するコンパイラツール。

- **ClosureLinter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **complexity-report** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [DeepScan](https://deepscan.io) :copyright: — JavaScriptの実行時エラーおよび品質問題を対象とした分析ツール。コーディング規約ではなく。

- **es6-plato** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [escomplex](https://github.com/jared-stilwell/escomplex) — JavaScriptファミリーの抽象構文木に関するソフトウェア複雑性分析。

- **Esprima** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [flow](https://flow.org) — JavaScript向けの静的型チェックツール。

- **hegel** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [jshint](https://jshint.com/about) [:information_source:](https://github.com/analysis-tools-dev/static-analysis/blob/66668c6cc5b2db72d0233033efe7ccf2c489aaf8/https:/github.com/analysis-tools-dev/static-analysis/issues/223) — JavaScriptコード内のエラーおよび潜在問題を検出し、チームのコーディング規約を強制。

- [JSLint](https://github.com/douglascrockford/JSLint) [:information_source:](https://github.com/analysis-tools-dev/static-analysis/blob/66668c6cc5b2db72d0233033efe7ccf2c489aaf8/https:/github.com/analysis-tools-dev/static-analysis/issues/223) — JavaScriptコード品質ツール。

- **JSPrime** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **NodeJSScan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **plato** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Polymer-analyzer](https://github.com/Polymer/tools/tree/master/packages/analyzer) — Web Components向けの静的解析フレームワーク。

- [retire.js](https://retirejs.github.io/retire.js) — JavaScriptライブラリの脆弱性が存在する使用を検出するスキャナ

- **RSLint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [standard](http://standardjs.com) — JavaScriptスタイルガイドに関する問題をチェックするnpmモジュール

- [tern](https://ternjs.net) — 深層かつエディタ間で共通の言語サポートを提供するJavaScriptコード分析ツール

- **TypL** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [xo](https://github.com/xojs/xo) — 多くの機能を備えた意見に基づいたが設定可能なものであるESLintラッパー。厳密かつ読みやすいコードを強制する。

- **yardstick** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="julia" />
<h2>Julia</h2>


- [JET](https://github.com/aviatesk/JET.jl) — 静的型推論システムによるバグや型不安定性の検出

- [StaticLint](https://github.com/julia-vscode/StaticLint.jl) — Julia用の静的コード分析


<a name="kotlin" />
<h2>Kotlin</h2>


- [detekt](https://detekt.github.io/detekt) — Kotlinコード用の静的コード分析

- **diktat** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [ktfmt](https://facebook.github.io/ktfmt/) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
A ktfmt IntelliJ plugin is available from the plugin repository. To install it, go to your IDE's settings and select the Plugins category. Click the Marketplace tab, search for the ktfmt plugin, and click the Install button.

- [ktlint](https://ktlint.github.io) — 組み込みフォーマッターを備えた反「バイケーシド」Kotlinのリントツール


<a name="lua" />
<h2>Lua</h2>


- [luacheck](https://github.com/lunarmodules/luacheck) — Luaコードのリントおよび静的分析を行うツール

- [lualint](https://github.com/philips/lualint) — lualintはLuaソースコードにおけるグローバル変数使用について、luacに基づく静的分析を行う。

- **Luanalysis** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="matlab" />
<h2>MATLAB</h2>


- **MISS_HIT** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [mlint](https://www.mathworks.com/help/matlab/ref/mlint.html) :copyright: — MATLABコードファイルに問題があるかをチェック。


<a name="nim" />
<h2>Nim</h2>


- [DrNim](https://nim-lang.org/docs/drnim.html) — DrNimはNimのフロントエンドとZ3の証明エンジンを組み合わせることで、Nimで書かれたソフトウェアの検証・検証を可能にする。

- **nimfmt** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="ocaml" />
<h2>Ocaml</h2>


- [Sys](https://github.com/PLSysSec/sys) — (ブラウザ)コードにおけるバグを検出するための静的/シンボリックツール。LLVM ASTを使用して、未初期化メモリアクセスなどのバグを検出。

- [VeriFast](https://github.com/verifast/verifast) — プリコンディションおよびポストコンディションを分離論理で記述した、単一スレッドおよびマルチスレッドのCおよびJavaプログラムの正確性性質に関するモジュラーフォーマル検証を行うツール。豊かな仕様を表現するために、プログラマはインダクティブなデータ型、これらのデータ型上の原始再帰純関数、および抽象分離論理述語を定義できる。


<a name="php" />
<h2>PHP</h2>


- [CakeFuzzer](https://zigrin.com/tools/cake-fuzzer/) — CakePHPベースのウェブアプリケーション向けのウェブアプリケーションセキュリティテストツール。CakeFuzzerは、事前に定義された攻撃をランダムに変更した後に実行する。Cake FuzzerはCake PHPフレームワークの深い理解を活かし、すべてのアプリケーションの入り口に攻撃を実行する。

- [churn-php](https://github.com/bmitch/churn-php) — リファクタリングの候補を発見するのに役立つ。

- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — composerの依存関係問題の高速検出。

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [dephpend](https://github.com/mihaeu/dephpend) — 依存関係分析ツール。

- [deprecation-detector](https://github.com/sensiolabs-de/deprecation-detector) — 使われなくなった(Symfony)コードの使用を検出。

- [deptrac](https://github.com/sensiolabs-de/deptrac) — ソフトウェアレイヤー間の依存関係に関するルールを強制。

- [DesignPatternDetector](https://github.com/Halleck45/DesignPatternDetector) — PHPコードにおける設計パターンの検出

- [EasyCodingStandard](https://www.tomasvotruba.com/blog/2017/05/03/combine-power-of-php-code-sniffer-and-php-cs-fixer-in-3-lines) — [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)と[PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)を組み合わせる。

- **Enlightn** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [exakat](https://www.exakat.io) — PHP用の自動コードレビューエンジン

- [GrumPHP](https://github.com/phpro/grumphp) — コミットごとにコードをチェック

- [larastan](https://github.com/larastan/larastan) — Laravelに静的解析を追加し、開発者の生産性とコード品質を向上させる。PHPStanをラップしたツール。

- [mago](https://mago.carthage.software) — Magoは、Rustで書かれたPHP用の完全なツールチェーンであり、最高のパフォーマンスを目的として設計された。
- ✨ A blazing-fast formatter that automatically formats your code according to PER-CS, ending style debates forever. - 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Mondrian** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [parallel-lint](https://github.com/php-parallel-lint/PHP-Parallel-Lint) — このツールは、PHPファイルの構文チェックをシリアルチェックよりも速く実行し、より洗練された出力提供。

- [Parse](https://github.com/psecio/parse) — 静的セキュリティスキャナー

- [pdepend](https://pdepend.org) — PHPコードにおけるソフトウェアメトリクス（例：サイクロマティック複雑度）を計算

- [phan](https://github.com/phan/phan/wiki) — エッティの現代的な静的解析ツール

- [PHP Architecture Tester](https://github.com/carlosas/phpat) — PHP用の使いやすいアーキテクチャテストツール

- [PHP Assumptions](https://github.com/rskuipers/php-assumptions) — 弱い仮定の検出

- [PHP Coding Standards Fixer](https://cs.symfony.com) — PSR-1、PSR-2、Symfony標準など、基準に従ってコードを修正

- [PHP Insights](https://github.com/nunomaduro/phpinsights) — コンソールから即時PHP品質チェック。コード品質およびコーディングスタイルの分析、またコードアーキテクチャとその複雑度の概要を提供。

- [Php Inspections (EA Extended)](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-) — PHP用の静的コード分析ツール

- [PHP Refactoring Browser](https://qafoolabs.github.io/php-refactoring-browser) — リファクタリング補助ツール

- [PHP Semantic Versioning Checker](https://github.com/tomzx/php-semver-checker) — セマンティックバージョニングに基づき、次のバージョンを提案

- [PHP-Parser](https://github.com/nikic/PHP-Parser) — PHPで書かれたPHPパーサー

- [php-speller](https://github.com/mekras/php-speller) — PHPのスペルチェックライブラリ

- **PHP-Token-Reflection** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **php7cc** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **php7mar** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **PHP_CodeSniffer** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PHPArkitect](https://github.com/phparkitect/arkitect) — PHPArkitectは、アーキテクチャ制約チェックをワークフローに組み込むことで、PHPコードベースの整合性と堅牢性を維持する。あなたが強制したい制約を、シンプルで読みやすいPHPコードで表現できる。

- **phpca** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **phpcpd** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **phpdcd** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **PhpDependencyAnalysis** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **PhpDeprecationDetector** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **phpdoc-to-typehint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [phpDocumentor](https://www.phpdoc.org) — PHPソースコードを解析してドキュメンテーションを生成

- **phploc** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PHPMD](https://phpmd.org) — あなたのコードに可能性のあるバグを検出します

- [PhpMetrics](http://www.phpmetrics.org) — さまざまなコード品質メトリクスの計算と可視化

- [phpmnd](https://github.com/povils/phpmnd) — マジックナンバーの検出を支援します

- [PHPQA](https://edgedesigncz.github.io/phpqa) — QAツール（phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics）を実行するツール

- [phpqa - jakzal](https://github.com/jakzal/phpqa) — PHP静的解析用の多くのツールを1つのコンテナに集約

- [phpqa - jmolivas](https://github.com/jmolivas/phpqa) — PHPQA 一括分析CLIツール

- **phpsa** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PHPStan](https://phpstan.org) — PHP静的解析ツール - コードを実行せずにバグを発見！

- [Progpilot](https://github.com/designsecurity/progpilot) — セキュリティ目的の静的解析ツール

- [Psalm](https://psalm.dev) — PHPアプリケーションにおける型エラーを検出するための静的解析ツール

- **Qafoo Quality Analyzer** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [rector](https://getrector.org) — PHP 5.3以降のコードに対して即時アップグレードと自動リファクタリング。PHP 7.4、8.0以降へのコードアップグレードを実現。Rectorは、狭く定義されたAST（抽象構文木）パターンを検索することで、誤検出率が低いことを保証しています。主な用途は、古く残っているコードにおける技術的負債の解決と不要コードの削除です。RectorはSymfony、Doctrine、PHPUnitなどに特化したルールを提供しています

- [Reflection](https://github.com/phpDocumentor/Reflection) — PHPプロジェクトの静的解析を行うためのリフレクションライブラリ

- [Symfony Insight](https://insight.symfony.com/) :copyright: — PHPプロジェクトにおけるセキュリティリスクの検出、バグの発見、実行可能なメトリクスの提供

- [Tuli](https://github.com/ircmaxell/Tuli) — 静的解析エンジン

- [twig-lint](https://github.com/asm89/twig-lint) — twig-lintは、あなたのtwigファイル向けのlintツールです

- [WAP](https://securityonline.info/owasp-wap-web-application-protection-project) — PHP（4.0以降）ウェブアプリケーションにおける入力検証脆弱性の検出と修正ツール。静的解析とデータマイニングを組み合わせることで誤検出を予測します


<a name="plsql" />
<h2>PL/SQL</h2>


- [ZPA](https://zpa.felipebz.com) — PL/SQLおよびOracle SQLコード向けのオープンソースパーサーおよびコード分析ツール


<a name="perl" />
<h2>Perl</h2>


- [Perl::Analyzer](https://technix.github.io/Perl-Analyzer/) — Perl-Analyzerは、名前空間や関係、依存関係、継承、パッケージ内で実装・継承・再定義されたメソッド、および親パッケージからのメソッド呼び出し（SUPER）に関する情報を提供することで、Perlコードベースを分析・可視化するプログラムとモジュールのセットです

- [Perl::Critic](https://metacpan.org/pod/Perl::Critic) — Perlソースコードのベストプラクティスを批判します

- [perltidy](https://perltidy.sourceforge.net/) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
The formatting can be controlled with command line parameters. The default parameter settings approximately follow the suggestions in the Perl Style Guide. 
Perltidyはスクリプト整形に加え、波括弧・丸括弧・角括弧の不足や過剰を局所化し、構文上の誤りを見つける助けになります。

- [zarn](https://github.com/htrgouvea/zarn) — 現代のPerlアプリケーション向けの軽量な静的セキュリティ分析ツール


<a name="python" />
<h2>Python</h2>


- [autoflake](https://github.com/PyCQA/autoflake) — AutoflakeはPythonコードから不要なインポートと不要な変数を削除します

- [autopep8](https://pypi.org/project/autopep8/) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
pycodestyleユーティリティを使い、整形が必要なコード部分を判定します。

- [bandit](https://bandit.readthedocs.io/en/latest) — Pythonコードにおける共通のセキュリティ問題を検出するツール

- [bellybutton](https://github.com/hchasestevens/bellybutton) — カスタムプロジェクト用ルールをサポートするリントエンジン

- [Black](https://black.readthedocs.io/en/stable) — 妥協のないPythonコードフォーマッタ

- [Bowler](https://pybowler.io/) — 現代のPython向けの安全なコードリファクタリングツール。BowlerはPythonの構文木レベルでコードを操作するリファクタリングツールであり、安全かつ大規模なコード変更を可能にし、生成されたコードがコンパイル・実行可能であることを保証する。コードの複雑な変更を生成するため、シンプルなコマンドラインインターフェースとPythonによるフラットAPIを提供する。

- **ciocheck** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `pep8`、`pydocstyle`、`flake8`、`pylint`。

- **cohesion** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [deal](https://deal.readthedocs.io/) — Python向けの設計による契約。バグのないコードを書く。コードにいくつかのデコレータを追加することで、テスト、静的解析、形式的検証など、無料で得られるようになる。

- [Dlint](https://github.com/dlint-py/dlint) — Pythonコードのセキュリティを確保するツール

- [Dodgy](https://github.com/landscapeio/dodgy) — Dodgyは、コードベースに「不自然に見える」値を検索するための非常に基本的なツール。事故的なSCM diffチェックイン、ファイルにハードコーディングされたパスワードや秘密キーなど、いくつかの項目を検出するためのシンプルな正規表現のシリーズ。

- **ENRE-py** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [fixit](https://pypi.org/project/fixit) — ソースコードに対するリントルールと自動修正に対応するフレームワーク

- [flake8](https://github.com/PyCQA/flake8) — `pyflakes`、`pycodestyle`および`mccabe`をラップするツール。

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheavenは、flake8をベースに構築されたPythonリントツールで、継承可能かつ複雑なTOML設定を可能にする。

- [Griffe](https://mkdocstrings.github.io/griffe/) — Pythonプログラム全体のシグネチャ。プロジェクトの構造、フレーム、骨格を抽出し、APIドキュメントの生成やAPIの破壊変更を検出する。

- **InspectorTiger** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [jedi](https://jedi.readthedocs.io/en/latest) — Python向けの自動補完／静的解析ライブラリ

- [linty fresh](https://github.com/lyft/linty_fresh) — リントエラーを解析し、GitHubのプルリクエスト上のコメントとして報告するツール

- [mbake](https://pypi.org/project/mbake/) — mbakeはMakefileのフォーマッタおよびリントツール。50年もかかってた！

- **mccabe** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **multilint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `flake8`、`isort`、`modernize`。

- [mypy](http://www.mypy-lang.org) — ダックタイピングと静的型チェックのメリットを組み合わせた静的型チェックツール。よく[MonkeyType](https://github.com/Instagram/MonkeyType)と併用される。

- [pip-audit](https://github.com/pypa/pip-audit) — Pythonパッケージに存在する既知の脆弱性をスキャンするツール。Pythonパッケージングアソシエーション（PyPA）によって開発され、Trail of BitsおよびGoogleによってサポートされている。Python環境および要件ファイルをスキャンし、脆弱なパッケージを特定し、修正案を提案する。GitHub Actions、pre-commitホルダー、複数の脆弱性サービスとの統合をサポート。

- [prospector](https://github.com/PyCQA/prospector) — `pylint`、`pep8`、`mccabe`およびその他のツールをラップするツール。

- **py-find-injection** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [pyanalyze](https://pyanalyze.readthedocs.io/en/latest/) — Pythonコードにおける一般的な誤りをプログラム的に検出するツール。未定義変数への参照や型エラーなど、よくあるミスを検出できる。さらに、追加のルールを追加し、特定の関数に特化したチェックを行うことも可能。

- [pycodestyle](https://pycodestyle.pycqa.org/en/latest) — （以前は`pep8`）PEP 8の一部のスタイル規約に従ってPythonコードをチェック。

- **pydocstyle** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [pyflakes](https://pypi.org/project/pyflakes) — Pythonソースファイルに誤りを検出する。

- [pylint](http://pylint.pycqa.org/en/latest) — プログラムエラーを検出し、コーディング標準を強化し、一部のコードの匂い（code smells）を検出。さらに、`pyreverse`（UML図生成ツール）および`symilar`（類似度チェックツール）を含む。

- **pylyzers** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Pyra](https://github.com/spangea/Pyra) — PyraはPythonで書かれたデータサイエンスアプリケーション向けの高レベルリント静的解析ツールで、開発者がPythonで書いたデータサイエンスコードに潜在的な問題を特定するのに役立つ。これは[Lyra](https://github.com/caterinaurban/Lyra)の拡張として構築されている。

- **pyre-check** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [pyrefly](https://pyrefly.org/) — Python向けの高速かつインクリメンタルな型チェックツールおよび言語サーバー。コードナビゲーション、意味的ハイライト、コード補完などのIDE機能を提供。

- [pyright](https://github.com/Microsoft/pyright) — 既存のツール（例：mypy）に欠けている部分を補うためのPython向けの静的型チェックツール

- [pyroma](https://github.com/regebro/pyroma) — Pythonパッケージエコシステムのベストプラクティスに従っているかを評価し、改善できる問題をリストアップ。

- [Pysa](https://pyre-check.org/docs/pysa-basics.html) — Facebookのpyre-checkをベースにしたツール。Pythonコードにおける潜在的なセキュリティ問題を、汚染分析（taint analysis）により検出する。

- **PyT - 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [pytype](https://google.github.io/pytype) — Pythonコード用の静的型分析ツール

- [pyupgrade](https://pypi.org/project/pyupgrade-docs/) — 新しいバージョンの言語に合わせて構文を自動でアップグレードするツール（およびpre-commit훅）

- **QuantifiedCode** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **radon** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [refurb](https://github.com/dosisod/refurb) — Pythonコードベースをリファインし、現代化するためのツール。RefurbはRustの標準的なリントツールclippyに強くインスピレーションを受けている

- [ruff](https://astral.sh/ruff) — Rustで書かれた高速Pythonリントツール。既存のリントツールと比べて10〜100倍速い。Python 3.10対応。ファイルウォッチャーをサポート

- [Safety](https://safetycli.com/) — Python依存関係の脆弱性スキャナー。ソフトウェアサプライチェーンセキュリティを強化するために、既知の脆弱性を持つパッケージを検出し、Python依存関係を既知のセキュリティ脆弱性データベースと比較し、詳細なレポートを提供。CI/CD統合および複数の出力フォーマットをサポートします

- [ty](https://docs.astral.sh/ty/) — Rustで書かれた非常に高速なPython型チェックツール

- [unimport](https://unimport.hakancelik.dev) — 未使用のインポート文を検出し、削除するためのリントツールとフォーマッター

- [vulture](https://github.com/jendrikseipp/vulture) — Pythonコード内の未使用クラス、関数、変数を検出

- [wemake-python-styleguide](https://wemake-python-styleguide.rtfd.io/) — 最も厳しく、最も意見を持つPythonリントツール

- [wily](https://github.com/tonybaloney/wily) — Pythonソースコードの複雑性をアーカイブ、探索、グラフ化するコマンドラインツール

- **xenon** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 [`radon`](https://github.com/rubik/radon) - .

- **yapf** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
YAPFはDaniel Jasperのclang-formatに由来する方式を採用します。元のコードがスタイルガイドに従っていても最適な形へ再整形し、Goのgofmtと同様にコードベース全体の一貫性を保ってレビュー時の書式論争を減らします。


<a name="r" />
<h2>R</h2>


- [CodeDepends](https://github.com/duncantl/CodeDepends) — R用の静的コード分析

- [cyclocomp](https://github.com/MangoTheCat/cyclocomp) — R関数／式のサイクル複雑度を定量化

- [flowR](https://github.com/flowr-analysis/flowr) — およびのR言語用ツール。そのスライサーは、複雑なプログラムを特定のタスクに関連する部分に簡略化できる。データフロー解析により、Rコードの意味論を詳細に把握できるため、他の解析を大きく改善できる。_flowR_を使用するには、、、、またはを参照。 [program slicer](https://github.com/flowr-analysis/flowr/wiki/Terminology#program-slice) [dataflow analyzer](https://en.wikipedia.org/wiki/Data-flow_analysis) [R](https://www.r-project.org/) [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=code-inspect.vscode-flowr) [RStudio Addin](https://github.com/flowr-analysis/rstudio-addin-flowr) [Docker image](https://hub.docker.com/r/eagleoutice/flowr) [R package](https://github.com/flowr-analysis/flowr-r-adapter)

- [goodpractice](https://docs.ropensci.org/goodpractice/) — Rパッケージのソースコードを分析し、ベストプラクティスの推奨事項を提供

- [lintr](https://github.com/jimhester/lintr) — R用の静的コード分析

- [R Language Server](https://github.com/REditorSupport/languageserver/) — Rのコード補完、リファクタリング、折りたたみ、診断（lintrを使用）、その他を提供

- [rco](https://jcrodriguez1989.github.io/rco/) — Rコードのパフォーマンス最適化ツール（GUI付き）

- [styler](https://styler.r-lib.org) — RソースコードファイルのフォーマットとRコードの整形


<a name="rego" />
<h2>Rego</h2>


- [Regal](https://github.com/styrainc/regal) — Regalはポリシー言語Rego用のリントツール。Regalはポリシーコードにおけるバグや誤りを検出し、同時に人々が言語やベストプラクティス、慣例的な構文を学ぶのを支援する


<a name="ruby" />
<h2>Ruby</h2>


- [Active Record Doctor](https://github.com/gregnavis/active_record_doctor) — 生産環境に到達する前にデータベースの問題を特定する

- [brakeman](https://brakemanscanner.org) — Ruby on Railsアプリケーション向けの静的解析セキュリティ脆弱性スキャナー

- [Bullet](https://github.com/flyerhzm/bullet) — N+1クエリや未使用のエAGERロードを解決するサポート

- [bundler-audit](https://github.com/rubysec/bundler-audit) — Gemfile.lockにセキュリティ上の脆弱性が報告されたgemを検証。[Ruby Advisory Database](https://github.com/rubysec/ruby-advisory-db)で報告されたもの。

- **cane** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Churn** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [DatabaseConsistency](https://github.com/djezzzl/database_consistency) — データベーススキーマとアプリケーションモデルの不整合や効率性の問題を回避するツール

- [dawnscanner](https://github.com/thesp0nge/dawnscanner) — Rubyで書かれたウェブアプリケーション向けの静的解析セキュリティスキャナー。Sinatra、Padrino、Ruby on Railsフレームワークをサポート

- [ERB Lint](https://github.com/Shopify/erb-lint) — ERBやHTMLファイルをlintする

- [ERB::Formatter](https://github.com/nebulab/erb-formatter) — ERBファイルを高速かつ正確にフォーマット

- [Fasterer](https://github.com/DamirSvrtan/fasterer) — Rubyのよくある慣習をチェックするツール

- [flay](https://ruby.sadi.st/Flay.html) — Flayはコードの構造的類似性を分析するツール

- [flog](https://ruby.sadi.st/Flog.html) — Flogは最も苦痛なコードを読みやすい報告書で表示。スコアが高くなるほどコードの苦痛が増す。

- [Fukuzatsu](https://github.com/CoralineAda/fukuzatsu) — Rubyクラスファイルにおけるコード複雑度を測定するツール。その分析はサイクロマティック複雑度アルゴリズムに基づき、追加の「意見」を一切加えずスコアを生成。

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 埋め込みRubyを理解するHTMLの正常化・美観化ツール。Railsテンプレートの整理に最適。

- **laser** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **MetricFu** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [pelusa](https://github.com/codegram/pelusa) — オブジェクト指向Rubyコードの品質を向上させる静的解析Lintツール

- **quality** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Querly** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Railroader** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [rails_best_practices](https://rails-bestpractices.com) — Railsプロジェクト向けのコードメトリクスツール

- [reek](https://github.com/troessner/reek) — Ruby向けのコードスムール検出ツール

- [Roodi](https://github.com/roodi/roodi) — RoodiはRubyオブジェクト指向設計推定計（Ruby Object Oriented Design Inferometer）です。あなたのRubyコードを解析し、設定されたチェックに基づき設計上の問題を警告します。

- [RuboCop](https://docs.rubocop.org/rubocop) — コミュニティRubyスタイルガイドに基づいたRuby静的コード分析ツール

- [Rubrowser](https://github.com/blazeeboy/rubrowser) — Rubyクラスのインタラクティブな依存関係グラフ生成ツール

- **ruby-lint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [rubycritic](https://github.com/whitesmith/rubycritic) — Rubyコード品質の報告ツール

- [rufo](https://github.com/ruby-formatter/rufo) — 意見のあるRubyフォーマッター。コマンドラインまたはテキストエディタプラグインとして使用され、保存時または必要時に対象ファイルを自動フォーマット。

- **Saikuro** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **SandiMeter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Skunk](https://github.com/fastruby/skunk) — RubyコードのSkunkScore計算ツール――テストカバレッジのない最も複雑なコードを特定！

- [Sorbet](https://sorbet.org) — Ruby向けの高速かつ強力な型チェックツール

- [Standard Ruby](https://github.com/testdouble/standard) — Rubyスタイルガイド、リントツールおよび自動コード修正機能

- [Steep](https://github.com/soutaro/steep) — Rubyにおける段階的型付け

- **Traceroute** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="rust" />
<h2>Rust</h2>


- [C2Rust](https://c2rust.com) — C2RustはC99準拠コードをRustに移行するためのツール。翻訳器（またはトランスパイラ）は、入力Cコードに忠実に近いunsafe Rustコードを生成する。

- [cargo udeps](https://github.com/est31/cargo-udeps) — Cargo.tomlに存在しない依存関係を検出。その結果、使われていないcratesをリスト表示する「unused crates」行を出力するか、使われていないcratesが存在しないことを示す行を出力する。

- [cargo-audit](https://rustsec.org) — Cargo.lockにセキュリティ上の脆弱性が報告されたcratesを検証。[RustSec Advisory Database](https://github.com/RustSec/advisory-db/)で報告されたもの。

- **cargo-bloat** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [cargo-breaking](https://github.com/iomentum/cargo-breaking) — cargo-breakingは、2つの異なるブランチ間のcratesの公開APIを比較し、変更点を表示し、セマバージョンに従って次のバージョンを提案する。

- [cargo-call-stack](https://github.com/japaric/cargo-call-stack) — 全体プログラムの静的スタック解析。このツールはプログラムの完全な呼び出しグラフをdotファイルとして生成する。

- [cargo-deny](https://embarkstudios.github.io/cargo-deny) — 依存関係のリントを行うためのcargoプラグイン。コマンドラインツール、Rustのcrate、またはCI用のGitHubアクションとして使用可能。有効なライセンス情報、重複するcrates、セキュリティ上の脆弱性などをチェックする。

- [cargo-expand](https://github.com/dtolnay/cargo-expand) — 現在のcratesに適用されたマクロ展開および#[derive]展開の結果を表示するcargoのサブコマンド。これはより詳細なコンパイラコマンドをラップしたものです。

- [cargo-geiger](https://github.com/geiger-rs/cargo-geiger) — unsafe Rustコードの使用状況を分析するためのcargoプラグ及。セキュリティ審査を支援する統計的な出力情報を提供。

- **cargo-inspect** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [cargo-semver-checks](https://crates.io/crates/cargo-semver-checks) — Rustのリリースにセマンティックバージョニング（semver）違反があるかをスキャン。CLIで直接使用可能であり、CIにおけるGitHub Actionとして使用可能であり、あるいは`release-plz`などのリリースマネージャーを通じて使用可能。crates.ioの[more than 1 in 6 of the top 1000 most-downloaded crates](https://predr.ag/blog/semver-violations-are-common-better-tooling-is-the-answer/)にsemver違反が見つかった。

- [cargo-show-asm](https://github.com/pacak/cargo-show-asm) — Rustコードのアセンブリ、LLVM-IRおよびMIRが生成されたものを表示するcargoサブコマンド

- [cargo-spellcheck](https://github.com/drahnr/cargo-spellcheck) — hunspell（準備中）およびlanguagetool（プレビュ）を使って、すべてのドキュメントのスペルや文法ミスをチェック。

- **cargo-unused-features** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
依存関係の機能を外して再コンパイルし、不要な機能フラグの候補を検出します。ただし偽陽性の可能性があります。

- [clippy](https://rust-lang.github.io/rust-clippy) — よくあるミスを検出し、Rustコードを改善するコードリントツール。

- [diff.rs](https://diff.rs) — Rustのcratesのバージョン間の差分を可視化するウェブアプリ（WASM）。

- [dylint](https://www.trailofbits.com/post/write-rust-lints-without-forking-clippy) — 動的ライブラリからRustリントを実行するためのツール。Dylintにより開発者は自分の個人用リントコレクションを簡単に維持できる。

- **electrolysis** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **herbie** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [kani](https://github.com/model-checking/kani) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
Kani is particularly useful for verifying unsafe code blocks in Rust, 
where the "unsafe superpowers" are unchecked by the compiler.
Kani verifies:

* Memory safety (e.g., null pointer dereferences)
* User-specified assertions (i.e., assert!(...))
* The absence of panics (e.g., unwrap() on None values)
* The absence of some types of unexpected behavior (e.g., arithmetic overflows)


- **linter-rust** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [lockbud](https://github.com/BurtonQin/lockbud) — Rustの死ロックバグを静的に検出。現在、2つの一般的な死ロックバグ（ダブルロック、競合する順序のロック）を検出。各バグについて、ソースコード位置と説明をJSON形式で出力する。

- **MIRAI** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **prae** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Prusti** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Rudra](https://github.com/sslab-gatech/Rudra) — Rustのメモリ安全性および未定義動作の検出。単一のRustパッケージやcrates.io上のすべてのパッケージを分析できる。

- **Rust Language Server** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [rust-analyzer](https://rust-analyzer.github.io) — 'goto definition'、型推論、シンボル検索、フォーマット、コード補完などの機能をサポートし、リネームやリファクタリングを可能にする。

- [rust-audit](https://github.com/Shnatsel/rust-audit) — Rustバイナリにおける既知のバグやセキュリティ脆弱性を検出。これは、依存関係ツリー（Cargo.lock）のデータをJSON形式でコンパイルされた実行可能ファイルの専用リンクセクションに埋め込むことで実現。

- [rustfix](https://github.com/rust-lang/rustfix) — rustc（およびclippyなどの第三者リント）が提示した提案を読み取り、適用する。

- [rustfmt](https://github.com/rust-lang/rustfmt) — Rustコードのスタイルガイドに従ってフォーマットするツール

- [RustViz](https://github.com/rustviz/rustviz) — RustVizは、シンプルなRustプログラムから視覚化を生成するツールで、ユーザーがRustのライフタイムとバーティングメカニズムをよりよく理解するために活用できます。生成されるSVGファイルには、グラフィカルな指示が含まれており、mdbookと統合され、Rustプログラム内のデータフローの視覚化を表示します。

- [TangleGuard](https://tangleguard.com/) :copyright: — スケーラブルなソフトウェアアーキテクチャを理解し、維持できるように支援。そのため、ソースコードからインタラクティブかつネストされた依存関係グラフを生成。必要な詳細レベルを選択し、あなたのコードベースの重要な部分を取得できる。

- **warnalyzer** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="sql" />
<h2>SQL</h2>


- [dbcritic](https://github.com/channable/dbcritic) — dbcriticは、データベーススキーマに問題を検出します。たとえば、テーブルに主キー制約が欠けている場合など。

- [holistic](https://holistic.dev/) — SQLクエリを分析するための1,300以上のルール。SQLスキーマ定義とクエリソースコードを入力として受け取り、改善提案を生成します。コードの異常（code smells）、使われていないインデックス、使われていないテーブル、ビュー、マテリアル化ビューなども検出します。

- [pgspot](https://github.com/timescale/pgspot) — PostgreSQL拡張スクリプトにおける脆弱性を特定。PostgreSQL拡張スクリプトまたはその他のPostgreSQL SQLコードにおいて、危険なsearch_pathの使用や危険なオブジェクト作成を検出します。

- [sleek](https://github.com/nrempel/sleek) — Sleekは、SQLのフォーマットを行うCLIツールです。あなたのSQLコード全体に一貫したスタイルを維持し、読みやすさと生産性を高めます。その大部分の処理はsqlformat crateによって行われます。

- **sqlcheck** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [SQLFluff](https://www.sqlfluff.com/) — 複数の方言に対応するSQLのリントとフォーマットツール。

- [sqlint](https://github.com/purcell/sqlint) — シンプルなSQLリントツール。

- [squawk](https://squawkhq.com) — PostgreSQL向けのリントツールで、移行に焦点を当てています。データベース移行による予期しないダウンタイムを防ぎ、PostgresスキーマやSQLに関するベストプラクティスを促進します。

- **tsqllint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **TSqlRules** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Visual Expert](https://www.visual-expert.com) :copyright: — PowerBuilder、Oracle、SQL Server向けのコード分析。コードの探索、分析、記述を行います。


<a name="scala" />
<h2>Scala</h2>


- **linter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Scalastyle](http://www.scalastyle.org) — Scalastyleは、あなたのScalaコードを検査し、潜在的な問題を示します。

- [scapegoat](https://github.com/sksamuel/scapegoat) — Scalaコンパイラプラグインによる静的コード分析ツール。

- [WartRemover](https://www.wartremover.org) — 柔軟なScalaコードのリントツール。


<a name="shell" />
<h2>Shell</h2>


- [bashate](https://github.com/openstack/bashate) — bashプログラムのコードスタイルの強制ツール。出力フォーマットはpycodestyle（PEP8）のデフォルト出力フォーマドに合わせています。

- **i-Code CNES for Shell** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [kmdr](https://github.com/ediardo/kmdr-cli) — ターミナルからコマンドを学習するためのCLIツール。kmdrは、すべてのコマンドに対して属性ごとに詳細を分解します。

- [sh](https://pkg.go.dev/mvdan.cc/sh/v3) — bash対応のシェルパーサー、フォーマッター、インタープリタ。shfmtを含む。

- [shellcheck](https://www.shellcheck.net) — ShellCheckは、bash/shシェルスクリプトに対して警告と提案を提供する静的解析ツール。

- [shellharden](https://github.com/anordal/shellharden) — 文法強調表示ツールおよび、スクリプトをShellCheckに適合するように半自動で再構成するツール。主に引用符に関する部分に焦点を当てています。


<a name="swift" />
<h2>Swift</h2>


- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) — Swiftコードのリフォーマットを行うためのライブラリおよびコマンドラインフォーマットツール。

- [SwiftLint](https://realm.github.io/SwiftLint) — Swiftのスタイルと慣例を強制するツール

- **Tailor** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="tcl" />
<h2>Tcl</h2>


- [Frink](http://catless.ncl.ac.uk/Programs/Frink) — Tclのフォーマットおよび静的チェックプログラム（プログラムを整列させたり、最小化したり、暗号化したり、あるいは単に sanity check することができる）

- [Nagelfar](https://sourceforge.net/projects/nagelfar) — Tcl用の静的文法チェックツール

- [tclchecker](https://github.com/ActiveState/tdk/blob/master/docs/3.0/TDK_3.0_Checker.txt) — 静的構文解析モジュール（[TDK](https://github.com/ActiveState/tdk)の一部）。


<a name="typescript" />
<h2>TypeScript</h2>


- [Angular ESLint](https://github.com/angular-eslint/angular-eslint#readme) — Angularプロジェクト向けのリントツール

- **Codelyzer** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **ENRE-ts** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [fta](https://ftaproject.dev/) — TypeScriptプロジェクト用のRustベースの静的解析ツール

- **stc** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **tslint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `typescript-eslint`。 [this issue](https://github.com/palantir/tslint/issues/4534)
TSLintはTypeScriptコードの可読性、保守性、機能上の誤りを検査する拡張可能な静的解析ツールです。主要なエディター・ビルドシステムに対応し、独自ルール、設定、フォーマッターでカスタマイズできます。

- [tslint-clean-code](https://www.npmjs.com/package/tslint-clean-code) — Clean Codeハンドブックに基づいたTSLintルールのセット

- **tslint-microsoft-contrib** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [TypeScript Call Graph](https://github.com/whyboris/TypeScript-Call-Graph) — TypeScriptファイルから関数と呼び出しのインタラクティブなグラフを生成するCLIツール

- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) — ESLint用のTypeScript言語拡張

- [zod](https://zod.dev) — ZodによるTypeScriptのスキーマ検証。静的型推論により、重複する型宣言を削除する。Zodでは、バリデーションを一度宣言すれば、自動的に静的TypeScript型を推論する。シンプルな型を複雑なデータ構造に組み立てるのが簡単になる。


<a name="verilog" />
<h2>Verilog/SystemVerilog</h2>


- **Icarus Verilog** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [svls](https://github.com/dalance/svls) — VerilogおよびSystemVerilog向けのLanguage Server Protocol実装（リント機能を含む）

- **verible-linter-action** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Verilator](https://www.veripool.org/verilator) — VerilogをC++またはSystemCによるサイクル精度の行動モデルに変換するツール。コード品質のリントチェックを行う。

- [vscode-verilog-hdl-support](https://github.com/mshr-h/vscode-verilog-hdl-support) — VS CodeにおけるVerilog HDL/SystemVerilog/Bluespec SystemVerilogのサポート。Icarus Verilog、Vivado Logical Simulation、ModelsimおよびVerilatorによる文法強調とリントサポートを提供


<a name="vim-script" />
<h2>Vim Script</h2>


- **vint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="wasm" />
<h2>WebAssembly</h2>


- [Twiggy](https://github.com/rustwasm/twiggy) — バイナリの呼び出しグラフを解析してコードサイズをプロファイリングする。目的は、wasmバイナリのサイズを小さくすることである。

- [wasm-language-tools](https://github.com/g-plane/wasm-language-tools) — WebAssembly Language Toolsは、WebAssemblyテキストフォーマットの編集体験を提供し、改善することを目的としている。また、WebAssemblyテキストフォーマット向けの標準的なフォーマッター（pretty printer）を提供している。


## 複数言語


- [ale](https://github.com/w0rp/ale) — VimおよびNeoVim向けの非同期リントエンジン（多数の言語に対応）

- [Android Studio](https://developer.android.com/studio) — IntelliJ IDEAに基づき、Android向けのツール（Android Lintを含む）が組み込まれている。

- [AppChecker](https://npo-echelon.ru/en/solutions/appchecker.php) :copyright: — C/C++/C#、PHPおよびJava向けの静的解析

- [Application Inspector](https://www.ptsecurity.com/ww-en/products/ai) :copyright: — 商用静的コード解析ツールで、脆弱性を検証するためにエクスプロイトを生成

- [ApplicationInspector](https://github.com/microsoft/ApplicationInspector) — 機能検出用の400以上のルールパターンによるレポート生成（例：アプリケーションにおける暗号化やバージョン管理の使用）

- [ArchUnit](https://www.archunit.org) — JavaまたはKotlinアーキテクチャのユニットテスト

- [ast-grep](https://ast-grep.github.io/) — ast-grepは、抽象構文木（AST）を用いてスケールしたコード管理を行うための強力なツールです。grep、eslint、codemodのハイブリッドとして、コードの構造に基づいて検索・チェック・再構成を行う能力を持ち、単なるテキストではなくコードの構造をもとに動作します。複数の言語をサポートしており、カスタム言語の登録も可能に設計されています。

- **Atom-Beautify** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [autocorrect](https://huacnlee.github.io/autocorrect) — コピー作成の改善、CJK（中国語、日本語、韓国語）間のスペースや語彙、記号の訂正を支援するリーナーとフォーマッターです。

- [Axivion Bauhaus Suite](https://www.axivion.com/en/products-services-9#products_bauhaussuite) :copyright: — C/C++、C#/.NET、JavaおよびAda 83/Ada 95において、誤りを生みやすいコードの場所、スタイル違反、コピーされたまたは無効なコード、サイクル依存関係などを追跡します。

- [Bearer](https://github.com/bearer/bearer) — オープンソースの静的コード分析ツールで、センシティブデータ暴露（PII、PHI、PD）を引き起こすセキュリティリスクや脆弱性を発見・フィルタリング・優先順位付けします。非常にカスタマイズ可能で拡張性に優れ、セキュリティおよびエンジニアリングチーム向けに構築されています。

- [Better Code Hub](https://bettercodehub.com) :copyright: — Better Code Hubは、ソフトウェア品質の权威であるSoftware Improvement Groupが策定した10のエンジニアリングガイドラインに基づき、GitHubのコードベースをチェックします。

- **Betterscan CE** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [biome](https://biomejs.dev) — ウェブプロジェクト向けのツールチェーンで、その維持に必要な機能を提供します。Biomeはコードを数秒でフォーマット・リーナーします。Romeの後継ツールであり、最終的にはBabel、ESLint、webpack、Prettier、Jestなど他のツールを置き換えることを目的としています。

- [BlockWatch](https://github.com/mennanov/blockwatch) — 言語に依存しないリーナーで、コード、ドキュメント、設定を同期させ、厳格なフォーマットとバリデーションルールを強制します。

- **BugProve** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [callGraph](https://github.com/koknat/callGraph) — 静的に呼び出しグラフの画像を生成し、画面に表示します。

- [CAST Highlight](https://www.castsoftware.com/products/highlight) :copyright: — コンマース静的コード分析ツールで、ローカルで実行されますが、結果はクラウドにアップロードされ表示されます。

- [Checkmarx CxSAST](https://www.checkmarx.com/products/static-application-security-testing) :copyright: — コンマース静的コード分析ツールで、事前コンパイルを必要としません。

- [ClassGraph](https://github.com/classgraph/classgraph) — クラスパスおよびモジュールパススキャナーで、クラスメタデータやクラス間関連性を検索または可視化します。

- [Clayton](https://www.getclayton.com/) :copyright: — Salesforce向けのAIによるコードレビュー。開発を安全にし、ベストプラクティスを強制し、技術的負債をリアルタイムで制御します。

- **coala** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Cobra](https://spinroot.com/cobra) :copyright: — ナスアのジェットプロペラ研究所が開発した構造的ソースコード分析ツール。

- [Codacy](https://www.codacy.com) :copyright: — Better Code、Fasterを実現するコード分析ツール。

- [Code Intelligence](https://www.code-intelligence.com) :copyright: — フルスケールなCI/CDに依存しないDevSecOpsプラットフォームで、業界トップクラスのフズエンジンを組み合わせ、バグを検出し、コードカバレッジを可視化します。

- [Code Pathfinder](https://codepathfinder.dev) — セキュリティチーム向けのオープンソース静的コード分析ツールで、ファイル間データフローのタイン分析を実施。脆弱性の発見、高度な構造検索、インサイトの導出をサポートし、MCPサーバーに対応しています。

- [Code-Graph-RAG](https://code-graph-rag.com) — マルチ言語コードベースから知識グラフを構築し、Tree-sitter AST解析を用いてMemgraphに保存します。11のプログラミング言語をサポートし、統一されたグラフスキーマを提供し、コード構造および関係性の自然言語クエリと編集を可能にします。AIアシスタントとの統合としてMCPサーバーを機能します。

- [Codeac](https://www.codeac.io/?ref=awesome-static-analysis) :copyright: — GitHub、Bitbucket、GitLab（自前ホスト含む）との統合可能な自動コードレビューツール。JavaScript、TypeScript、Python、Ruby、Go、PHP、Java、Dockerなど、多数の言語に対応（オープンソース無料）。

- [codeburner](https://groupon.github.io/codeburner) — 発見した問題を一元的に整理・対応するための統一インターフェースを提供します。

- [codechecker](https://codechecker.readthedocs.io/en/latest) — Clang Static Analyzerの欠陥データベースおよびビュー拡張に備えたウェブGUIです。

- [CodeFactor](https://codefactor.io) :copyright: — GitHubまたはBitBucket上のリポジトリ向けの自動コード分析

- [CodeFlow](https://www.getcodeflow.com) :copyright: — 技術的深さに対応する自動コード分析ツール。BitbucketおよびGitlabと統合。（オープンソースプロジェクト向け無料）

- [Codemodder](https://codemodder.io/) — Codemodderは、表現力の高いcodemodを構築するためのプラグイン可能なフレームワークです。リーダーまたはコードフォーマットツール以上の機能が必要な場合に使用します。非自明なセキュリティ問題やその他のコード品質問題の修正に活用できます。

- [codeql](https://github.com/github/codeql) — 深層コード分析 — 複数の言語向けの意味論的クエリとデータフロー。VSCodeプラグイン対応。

- [CodeQue](https://codeque.co) — JavaScriptおよびTypeScriptコードの構造マッチングエコシステム。コード構造を理解する検索ツールを提供。CLIツールおよびVisual Studio Code拡張機能として利用可能。コードの検索をより迅速かつ正確にし、ワークフローを効率化します。今後、ESLintプラグインを提供し、数分で自作ルールを作成してコードベースの品質を確保します。

- [CodeRush](https://www.devexpress.com/products/coderush) :copyright: — Visual Studio 2015以降で利用可能なRoslynエンジンを用いたコード作成、デバッグ、ナビゲーション、リファクタリング、分析および可視化ツール

- [CodeScan](https://www.codescan.io/) :copyright: — Salesforce開発者向けのコード品質およびセキュリティツール。Salesforceプラットフォーム専用のコード分析ソリューションで、コードの健康状態に完全な可視性を提供します。

- [CodeScene](https://codescene.com) :copyright: — CodeSceneはソフトウェアの品質可視化ツールです。技術的債務の優先順位付け、デリバリーリスクの検出、組織的側面の測定を実現。完全自動化。

- [CodeSee](https://www.codesee.io/) :copyright: — CodeSeeはアプリケーションのサービス、ディレクトリ、ファイル依存関係、コード変更をマッピングし、自動化します。Googleマップのように、コードの世界を視覚化します。

- [CodeSonar from GrammaTech](https://codesecure.com/our-products/codesonar/) :copyright: — C、C++、JavaおよびC#向けの高度な、全体プログラム、深層パス、静的分析。わかりやすい説明とコードおよびパスの可視化を提供。

- **Codety** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Codiga](https://www.codiga.io) :copyright: — 12以上の言語をサポートする自動コードレビューおよび技術的債務管理プラットフォーム。

- [Corgea](https://corgea.com/) :copyright: — CorgeaはAIを活用したSASTスキャナーで、開発者が不安全なコードを検出し、修正できるようにします。ビジネスロジックの欠陥、認証の破綻、APIの脆弱性など、少ない誤検出で検出します。さらに、それらのセキュリティ修正を自動的に作成し、承認します。GitHub、GitLab、Azure DevOps、IDE、CLIと統合。無料で試用可能です。

- **Corrode** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — Synopsys Coverityは、Ruby on Rails、Scala、PHP、Python、JavaScript、TypeScript、Java、Fortran、C、C++、C#、VB.NETを含む20言語以上および70以上のフレームワークをサポート。

- [cpp-linter-action](https://cpp-linter.github.io/cpp-linter-action/) — C/C++コードのlintを実行するGitHubアクション。clang-tidyおよびclang-formatを統合し、スレッドコメントおよび/または注釈としてフィードバックを収集します。

- **cqc** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **DeepCode** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [DeepSource](https://deepsource.com) :copyright: — バグリスク、セキュリティ、反パターン、パフォーマンス、ドキュメント、スタイルなど、各分野における深刻な問題を検出する深層静的分析。GitHub、GitLab、Bitbucketとのネイティブ統合。誤検出率は5％未満。

- [deleaker](https://www.deleaker.com/) :copyright: — DeleakerはC++、.NET、Delphi向けのメモリリーク検出ツール。Visual Studio、Qt Creator、RAD Studioと統合され、またはスタンドアローンアプリとして実行可能です。開発者がメモリ、GDI、ハンドルのリークを効率的に検出し、修正できます。

- [Depends](https://github.com/multilang-depends/depends) — Java、C/C++、Rubyのコード要素の包括的な依存関係を分析。

- [DerScanner](https://derscanner.com/) :copyright: — 多言語静的アプリケーションセキュリティテスト（SAST）プラットフォーム。重要な脆弱性（ハードコードされたシークレット、弱い暗号、バックドア、SQLインジェクション、不適切な設定など）を検出。

- [DevSkim](https://github.com/microsoft/devskim) — Visual Studio、VS Code、Sublime Text向けの正規表現ベースの静的分析ツール — C/C++、C#、PHP、ASP、Python、Ruby、Javaなど。

- [diesel-guard](https://github.com/ayarotsky/diesel-guard) — DieselおよびSQLxにおける危険なPostgres移行パターンをチェックするリーダー。不安全なスキーマ変更によるダウンタイムを防止します。

- [dotnet-format](https://github.com/dotnet/format) — .NET向けのコードフォーマッター。ファイルが存在すればその設定を読み込み、存在しない場合はデフォルトの設定を使用。現在、dotnet-formatはC#およびVisual Basicプロジェクトを一部のオプションでフォーマットできる。 `.editorconfig` `.editorconfig`

- [Embold](https://embold.io) :copyright: — 設計問題、コード問題、重複、メトリクスを特定する知能型ソフトウェア分析プラットフォーム。Java、C、C++、C#、JavaScript、TypeScript、Python、Go、Kotlinなどに対応

- **emerge** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Enforster AI](https://enforster.ai/) :copyright:��— Enforster AIは、LLMと人工知能を活用した文脈コードセキュリティSASTを実行し、論理的誤り、秘密情報、データ漏洩、サプライチェーンおよび技術的な脆弱性の検出を減少・豊かにしている。

- [ESLint](https://github.com/eslint/eslint) — JavaScript向けの拡張可能なリントツールで、ECMAScript標準に従っています。

- [ezno](https://kaleidawave.github.io/posts/introducing-ezno/) — Rustで書かれたJavaScriptコンパイラとTypeScriptチェックツール。静的解析および実行時パフォーマンスに焦点を当てている。Eznoの型チェックツールは完全にゼロから構築されている。チェックツールはTypeScriptの型記述と完全に互換性を持ち、型記述なしでも動作できる。

- [Find Security Bugs](https://find-sec-bugs.github.io) — JavaウェブアプリケーションおよびAndroidアプリケーションのセキュリティ診断用のSpotBugsプラグイン。 (Kotlin、GroovyおよびScalaプロジェクトでも動作)

- [Fortify](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer) :copyright: — C/C++、C#、VB.NET、VB6、ABAP/BSP、ActionScript、Apex、ASP.NET、Classic ASP、VBスクリプト、Cobol、ColdFusion、HTML、Java、JS、JSP、MXML/Flex、Objective-C、PHP、PL/SQL、T-SQL、Python（2.6、2.7）、Ruby（1.9.3）、Swift、Scala、VB、およびXMLのソースコードのスキャンをサポートする商用静的解析プラットフォーム

- [Freeplane Code Explorer](https://docs.freeplane.org/user-documentation/Code_Explorer.html) — Freeplaneにおけるコードエクスプローラーモードは、JVMクラスファイルにコンパイルされたコードの構造と依存関係を分析するためのものであり、Freeplaneが実行中である場合、ArchUnitのテスト結果をFreeplaneに直接表示できるようにする。


- [Goodcheck](https://sider.github.io/goodcheck) — 正規表現ベースのカスタマイズ可能なリントツール

- **goone** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [graudit](http://www.justanotherhacker.com) — グリップによる粗いアудイト - ソースコードアудィティングツール。

- [HCL AppScan Source](https://www.hcltechsw.com/products/appscan) :copyright:��— 商業用静的コード分析。

- **Hopper** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Hound CI](https://houndci.com) — GitHubのプルリクエストにおけるスタイル違反に関するコメント。Coffeescript、Go、HAML、JavaScript、Ruby、SCSSおよびSwiftをサポート。

- **imhotep** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **include-gardener** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `#include`。

- [Infer](https://fbinfer.com) — Java、C、Objective-C用のスタティック分析ツール

- [Joern](https://joern.io) — ジョーンはソースコード、バイトコード、バイナリ実行ファイルの解析を行うプラットフォームです。コードプロパティグラフ（CPG）を生成し、複数言語のコード分析に使用するためのグラフ表現を提供します。コードプロパティグラフはカスタムグラフデータベースに保存され、スケールベースのドメイン特定クエリ言語で構成された検索クエリを用いてコードの抽出が可能になります。ジョーンは、静的プログラム分析における脆弱性の発見および研究に役立つツールを提供することを目的として開発されています。

- [jQAssistant](https://jqassistant.org/) — jQAssistantは、リポジトリからコード構造およびメタデータをスキャンし、Neo4jグラフデータベースに取り込むプラグインベースのソフトウェア分析プラットフォームです。収集されたデータは、クエリによる即時探索、可視化、または継続的なアーキテクチャ検証用のルールの定義に利用できます。

- [keploy](https://keploy.io/) — Keployは、開発者がテストプロセスを自動化・効率化できるオープンソースのテストプラットフォームです。APIおよび統合テストエージェントを提供し、実際に動作するAPIに対してテスト、モック・スタブを生成します。さらに、KeployはAIを活用したユニットテストエージェントを提供し、GitHub PRやVSCode内に安定性があり実用的なユニットテストを直接生成することで、エラーの検出とコード品質の向上を支援します。

- [Kiuwan](https://www.kiuwan.com/code-security-sast) :copyright: — SDLCにシームレスに統合された、高速かつ協働な環境でサイバー脅威を特定・対応します。Python、C\C++、Java、C#、PHPなど。

- [Klocwork](https://www.perforce.com/products/klocwork) :copyright: — C/C++、JavaおよびC#用の品質とセキュリティの静的解析

- [LangLint](https://github.com/HzaCode/Langlint) — 20以上のファイルタイプにおけるコードコメントとドキュメント文字列の自動翻訳プラットフォーム。国際的なソフトウェア協働における言語障壁を除去。100以上の言語ペアをサポートし、文法を保護。RuffのようなCI/CDパイプラインに統合。並列処理により10〜20倍速い。

- [LGTM](https://lgtm.com/) :copyright: — ソースコードに対するCodeQLクエリを使って、セキュリティ上の脆弱性、変体、および重要なコード品質問題を検出。自動PRコードレビュー；オープンソース向け無料。以前はsemmle。Bitbucket Cloud、GitHub.com、GitLab.comにホストされた公開Gitリポジトリをサポート。

- [lizard](https://github.com/terryyin/lizard) — リズードは、C/C++を含む多くのプログラミング言語向けに拡張可能な循環複雑度分析ツールです。すべてのヘッダーファイルやJavaのインポートを必要とせず、コードのコピー＆ペースト検出（コードクローン検出／コードダブル検出）や、さまざまな静的コード分析を実行できます。コメントを除いた行数、CCN（循環複雑度数）、関数のトークン数、関数のパラメータ数をカウントします。

- [Mega-Linter](https://megalinter.io/) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
 its advanced reporting, runnable on any CI system or locally,
 with assisted installation and configuration, able to apply formatting and fixes

- [Mobb](https://mobb.ai) :copyright:��— Mobbは、アプリケーションを安全に保ち、セキュリティのバックログを削減し、開発者が革新に集中できる、信頼できる自動脆弱性修正ツールです。Mobbはオープンソースプロジェクトには無料です。

- [MOPSA](https://mopsa.lip6.fr) — CおよびPythonなど、幅広い言語に適用可能な抽象領域を簡単に再利用できる静的解析器です。

- [Neurolint-CLI](https://neurolint.dev) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
Automatically fixes 50+ issues including accessibility violations, hydration errors, 
React 19/Next.js 16 migrations, and configuration updates. Features 5-step fail-safe 
orchestration to ensure zero breaking changes. Specialized for React, Next.js, and TypeScript projects.


- [oclint](http://oclint.org) — C、C++およびObjective-Cのソースコードを静的に分析し、品質を向上させ、バグを減少させるツールです。

- [Offensive 360](https://offensive360.com/) :copyright:��— 商業用静的ソースコード解析システムは、ソースコードのビルドや事前コンパイルを必要としません。

- [OpenRewrite](https://docs.openrewrite.org/) — OpenRewrite [fixes common static analysis issues](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/common-static-analysis-issue-remediation)をSonarおよびその他のツールでMavenおよびGradleプラグインまたはModerne CLIを使って報告。

- [OpenStaticAnalyzer](https://github.com/sed-inf-u-szeged/OpenStaticAnalyzer) — OpenStaticAnalyzerは、複雑なシステムのソースコードに対して深層静的解析を行うソースコード解析ツールです。

- [oxc](https://github.com/web-infra-dev/oxc) — The Oxidation Compilerは、JavaScript / TypeScript言語をRustで再構築した高パフォーマンスツールのセットを作成しています。

- [parasoft](https://www.parasoft.com/) :copyright:��— ユニット、API、ウェブUIテスト用の自動ソフトウェアテストソリューション。MISRA、OWASPなどに準拠しています。

- [pfff](https://github.com/facebookarchive/pfff/wiki/Main) — Facebookが開発した、多数の言語に対応したコード解析、可視化、スタイルを保持したソース変換ツールです。

- [Pixee](https://pixee.ai) :copyright:��— Pixeebotは、あなたのコードにセキュリ及コード品質の問題を検出し、修正を提案したマージ可能なプルリクエストを作成します。

- [PMD](https://pmd.github.io) — Java、Salesforce Apex、JavaScript、PLSQL、XML、XSLなど、他の言語を対象としたソースコード解析ツールです。

- [pre-commit](https://pre-commit.com) — マルチ言語のプリコミットハックを管理・維持するためのフレームワークです。

- [Precaution](https://www.securesauce.dev/) — Precautionは、生産前にソースコードに潜在的に重大な脆弱性を検出するための静的解析セキュリティツール（SAST）です。CLI、GitHub Action、GitHub Appとして利用可能です。

- [Prettier](https://prettier.io) — 意見に基づいたコードフォーマッターです。

- [Pronto](https://github.com/prontolabs/pronto) — あなたの変更に対して迅速な自動コードレビューを実行します。Clang、Elixir、JavaScript、PHP、Rubyなど、さまざまな言語向けに40以上のランナーをサポートしています。

- **PT.PM** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Putout](https://github.com/coderaiser/putout) — js、jsx、typescript、flow、markdown、yaml、jsonなど、多数の言語に対応するプラグイン可能なコード変換ツールで、内蔵のeslint、babelプラグインをサポートしています。

- [PVS-Studio](https://pvs-studio.com) :copyright: — C、C++、C#およびJavaコードの静的解析（FOSSおよび個人開発者向けの[conditionally free](https://pvs-studio.com/en/order/open-source-license)）。広告目的で[you can propose a large FOSS project for analysis by PVS employees](https://github.com/viva64/pvs-studio-check-list)。CWEマッピング、OWASP ASVS、MISRA、AUTOSARおよびSEI CERTコーディング規格をサポート。

- [pylama](https://klen.github.io/pylama/) — PythonおよびJavaScriptのコード検査ツール。pycodestyle、pydocstyle、PyFlakes、Mccabe、Pylintなどをラップしています。

- [Qwiet AI](https://qwiet.ai/) :copyright:��— あなたのコードベースに固有の脆弱性を生産前に特定します。コードプロパティグラフ（CPG）を活用し、分析を1つのグラフのグラフ上で並列実行します。開発環境でのハードコードされたシークレットや論理ボムなどのビジネスロジックの欠陥を自動的に検出します。

- [Refactoring Essentials](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.RefactoringEssentialsforVisualStudio) — Visual Studio 2015向けの無料拡張機能で、C#およびVB.NETのリファクタリングを提供し、コードのベストプラクティスを分析します。

- [relint](https://github.com/codingjoe/relint) — 正規表現（RegEx）を使ってカスタムルールを書ける静的ファイルリントツールです。

- [ReSharper](https://www.jetbrains.com/resharper) :copyright:��— C#、VB.NET、ASP.NET、JavaScript、TypeScriptなど、他の技術に対応したVisual Studioへの即時コード検査を拡張します。

- [Rev-dep](https://github.com/jayu/rev-dep) — 現代のJavaScriptおよびTypeScriptプロジェクト向けの依存関係分析および最適化ツールキット。インポートのトレース、循環依存関係の特定、未使用コードの検出、nodeモジュールの整理。

- [RIPS](https://www.ripstech.com) :copyright: — PHPスクリプトにおける脆弱性を静的ソースコード分析するツール。

- [Roslyn Analyzers](https://github.com/dotnet/roslyn-analyzers) — RoslynをベースにしたFxCopアナライザの実装。

- [Roslyn Security Guard](https://security-code-scan.github.io) — SQLインジェクション、クロスサイトスクリプティング（XSS）、CSRF、暗号化の弱点、ハードコードされたパスワードなど、さまざまな潜在的な脆弱性を特定するプロジェクト。

- [SafeQL](https://safeql.dev) — PostgreSQLにおけるraw SQLクエリからタイプセーフにTypeScript型を検証・自動生成。SafeQLはSQLクエリをタイプセーフに書くためのESLintプラグイン。

- [SAST Online](https://sast.online/) :copyright: — Androidソースコードを徹底的に検証し、潜在的なセキュリティ上の懸念や脆弱性を発見・解決。静的アプリケーションセキュリティテスト（静的コード分析）ツール Online

- **Scrutinizer** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Security Code Scan](https://security-code-scan.github.io) — C#およびVB.NET向けのセキュリティコードアナライザ。SQLi、XSS、CSRF、XXE、オープンリダイレクトなど、さまざまなセキュリティ脆弱性パターンを検出。Visual Studio 2015以降に統合。SQLi、XSS、CSRF、XXE、オープンリダイレクトなど、さまざまなセキュリティ脆弱性パターンを検出。

- [Semgrep](https://semgrep.dev) — エディタ、コミット、CI時のバグ検出とコード規則の強制を目的とした高速かつオープンソースの静的分析ツール。ルールはすでに書いているコードの形をとっている。抽象構文木や正規表現の戦いは不要。17以上の言語をサポート。

- [Semgrep Supply Chain](https://semgrep.dev/products/semgrep-supply-chain) :copyright: — 高優先度のセキュリティ問題を迅速に検出・修正。Semgrep Supply Chainは、あなたのコードから達成可能な2％の脆弱性を優先的に処理。

- [Seqra](https://seqra.dev) — JavaおよびKotlinのウェブアプリケーション向けのセキュリティに特化した静的分析ツール。SemgrepスタイルのYAMLルールとCodeQLクラスのデータフロー（Springの第一クラスサポート）を用いて、ソースコードスキャナが見落とす脆弱性を検出。

- **ShiftLeft Scan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **shipshape** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Sigrid](https://www.softwareimprovementgroup.com/solutions/sigrid-software-assurance-platform/) :copyright: — Sigridは、システムのコード品質を測定し、数千の業界システムのベンチマークと比較することで、改善できる領域について具体的なアドバイスを提供します。

- [Similarity Tester](https://dickgrune.com/Programs/similarity_tester/) — ファイル間またはファイル内の類似性を検出するツール。DRY原則の違反をサポートします。

- [Skylos](https://github.com/duriantaco/skylos) — Python、TypeScript、Go向けの死コード検出、セキュリティスキャン、シークレット検出、コード品質分析。フレームワーク意識型分析で98％の再現率。CI/CD用GitHub Action、VS Code拡張、AIエージェント統合用MCPサーバーを含む。

- [Snyk Code](https://snyk.io) :copyright: — Snyk CodeはAIを用いてセキュリティ脆弱性を検出。分析速度により、IDEの保存ボタンを押した瞬間に結果を提供できます。対応言語はJava、JavaScript、Python、PHP、C#、GoおよびTypeScript。GitHub、BitBucket、Gitlabとの統合。無料で試用可能で、Snykプラットフォームに含まれており、SCA、コンテナ、IaCもカバー。

- [SonarQube Cloud](https://sonarcloud.io) :copyright: — SonarQube Cloudは、チームがクラウドDevOpsプラットフォームに簡単に統合できるコードレビューツールを提供し、CI/CDワークフローを拡張することで、継続的にかつ効率的に清潔なコードをデリバリーできます。SonarQube Cloudは無料プランを提供しています。

- [SonarQube for IDE](https://sonarlint.org) — SonarQube for IDE（以前はSonarLint）は、IntelliJ、VS Code、Visual Studio、Eclipseに無料で提供されるIDE拡張機能で、リアルタイムでコーディング中に問題を検出し、修正し、スパルクチェックのように問題をフラグ付けします。リーダー以上のツールとして、開発者が問題の原因、リスク評価、修正方法を理解するための豊かな文脈情報も提供します。

- [SonarQube Server](https://sonarqube.org) — SonarQubeは、開発チームにコード品質およびセキュリティソリューションを提供し、企業環境に深く統合することで、清潔なコードを継続的かつ信頼性高くデリバリーできます。SonarQubeは無料かつオープンソースのコミュニティ版を提供しています。

- [Sonatype](https://www.sonatype.com) :copyright: — 一般的な依存関係における既知の脆弱性を報告し、更新パッケージの推奨により、破壊的な変更を最小限に抑える。

- [Soto Platform](https://www.hello2morrow.com/products/sotograph) :copyright: — 静的分析ツールのセットで、Sotoarc（アーキテクチャ分析）、Sotograph（品質分析）、Sotoreport（品質レポート）の3つのコンポーネントから構成。アーキテクチャと実装の差異、インターフェース違反（例：サブシステムのプライベート部分への外部アクセス、すべてのクラス、ファイル、パッケージ、サブシステムがサイクル関係で強く結合されているものなど）を検出。Sotograph製品ファミリーはWindowsおよびLinuxで動作。

- [SourceMeter](https://www.sourcemeter.com/) :copyright: — C/C++、Java、C#、Python、RPG IIIおよびRPG IVバージョン（含む自由形式）向けの静的コード分析。

- [sqlvet](https://github.com/houqp/sqlvet) — Goコードベース内のraw SQLクエリに対して静的解析を行い、実行時エラーの可能性を表面化します。SQL文法エラーのチェック、SQLインジェクションに繋がる危険なクエリの特定、INSERT文における列数と値数の一致確認、テーブルおよび列名の検証を行います。

- [StaticReviewer](https://securityreviewer.atlassian.net/wiki/spaces/KC/pages/196633/Static+Reviewer) :copyright: — Static Reviewerは、セキュリティコーディング基準（OWASP、CWE、CVE、CVSS、MISRA、CERT）に基づき、40以上のプログラミング言語に対応する1000以上の組み込み検証ルールを使用して、セキュリティ、不要コード、ベストプラクティスに関するコードチェックを実行します。オープンソースおよび第三者ライブラリ内の脆弱性を特定するためのソフトウェアコンポジション分析（SCA）モジュールも提供しています。

- **Super-Linter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Svace](https://www.ispras.ru/en/technologies/svace/) :copyright: — Java、C、C++、C#、Go向けの静的コード解析ツール。

- [Synopsys](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — 多言語（C/C++、Android、C#、Java、JS、PHP、Python、Node.JS、Ruby、Fortran、Swift）をサポートする商用静的解析プラットフォーム。

- [Teamscale](https://teamscale.com) :copyright: — 25以上の言語をサポートする静的および動的解析ツールで、IDEとの直接統合も可能です。オープンソースプロジェクトにはホスティングを無料で提供可能です。学術ライセンスも無料で提供可能です。

- **TencentCodeAnalysis** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [ThreatMapper](https://github.com/deepfence/ThreatMapper) — コンテナ、サーバレス、ホストの実行時における脆弱性スキャナおよびリスク評価。ThreatMapperは、依存関係およびオペレーティングシステムパッケージから実行時BOMを生成し、複数の脅威フィードと照合し、未保護のシークレットをスキャンし、問題の深刻度およびexploitリスクに基づいてスコアを付与します。

- [todocheck](https://github.com/preslavmihaylov/todocheck) — 問題トラッカーに注釈されたTODOを統合するためのリントツール

- [trivy](https://github.com/aquasecurity/trivy) — コンテナおよびその他のアーテファクト向けのシンプルかつ包括的な脆弱性スキャナ。CIに適しています。TrivyはOSパッケージ（Alpine、RHEL、CentOSなど）およびアプリケーション依存関係（Bundler、Composer、npm、yarnなど）の脆弱性を検出します。コンテナおよびファイルシステムをチェックします。


- [trunk](https://trunk.io) :copyright: — モダンなリポジトリには多くの技術が含まれており、それぞれに独自のリントツールがあります。30以上のリントツールを備え、Trunkはすべてのリポジトリに適切なリントツール、静的解析ツール、フォーマッタを識別・インストール・設定・実行するための操作を極めて簡単に行えます。

- [TscanCode](https://github.com/Tencent/TscanCode) — Tencentが提供するC/C++、C#、Luaコード向けの高速かつ正確な静的解析ソリューション。GPLv3ライセンスを使用。

- [Undebt](https://github.com/Yelp/undebt) — シンプルなパターン定義に基づく、大規模かつ自動化された、プログラム可能なリファクタリングツール。

- [Understand](https://www.scitools.com) :copyright: — Ada、VHDLなどに対応するコード可視化ツール。コード解析、基準テスト、メトリクス、グラフ表示、依存関係分析など、多くの機能を提供します。

- [Unibeautify](https://unibeautify.com) — GitHubアプリを備えたユニバーサルなコードフォーマッタ。HTML、CSS、JavaScript、TypeScript、JSX、Vue、C++、Go、Objective-C、Java、Python、PHP、GraphQL、Markdownなど、多数の言語をサポート。

- [Upsource](https://www.jetbrains.com/upsource) :copyright: — Java、PHP、JavaScript、Kotlin向けのコードレビューツールで、静的コード解析とコード認識ナビゲーションを提供。

- [Veracode](https://www.veracode.com/security/static-code-analysis) :copyright: — ソースコードなしでバイナリやバイトコードの欠陥を検出。Java、.NET、JavaScript、Swift、Objective-C、C、C++など、主要なプログラミング言語すべてをサポート。

- [WALA](https://github.com/wala/WALA) — Javaバイナリおよび関連言語、JavaScript向けの静的解析機能。

- [weggli](https://github.com/googleprojectzero/weggli) — CおよびC++コードベース向けの高速かつ信頼性の高い意味論的検索ツール。セキュリティ研究者たちが大規模コードベース内の興味深い機能を特定するのに設計されています。

- [WhiteHat Application Security Platform](https://source.whitehatsec.com/help/sentinel/sast-service-detail.html) :copyright: — WhiteHat Scout（開発者向け）とWhiteHat Sentinel Source（運用向け）が組み合わさり、WhiteHat Top 40およびOWASP Top 10をサポート。

- **Wotan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [XCode](https://developer.apple.com/xcode) :copyright: — XCodeは、[Clang's](https://clang-analyzer.llvm.org/xcode.html)静的コード分析ツール（C/C++、Obj-C）に非常に良いUIを提供。

- [Xygeni](https://xygeni.io/) :copyright: — Xygeniは包括的なソフトウェアサプライチェーンセキュリティプラットフォームです。高度なSAST（静的分析）にAIによる修正、リアルタイムマルウェア検出を備えたソフトウェアコンポジション分析（SCA）、インフラストラクチャアスコード（IaC）スキャン、シークレット検出を提供し、端末からコードまでの一貫したセキュリティを確保します。


## その他



<a name="dotenv" />
<h2>.env</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます


<a name="ansible" />
<h2>Ansible</h2>


- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbookスキャンツールで、あなたのPlaybookを分析し、推奨事項を提供します


<a name="archive" />
<h2>アーカイブ</h2>


- **alquitran** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
このツールは複数の言語・構成形式に対応します。

- [packj](https://github.com/ossillate-inc/packj) — Packj（パッケージを発音）は、オープンソースソフトウェアパッケージに「リスクがある」とされる属性を検証するコマンドライン（CLI）ツール。これは、Packj.devという大規模セキュリティ分析プラットフォームの背後にあるツールであり、パッケージを継続的に検証し、無料レポートを提供。

- **pure** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="arm" />
<h2>Azure Resource Manager</h2>


- [AzSK](https://azsk.azurewebsites.net/) — Azure（AzSK）向けのセキュリティDevOpsキット。インフラとしてのコードにセキュリティインテリセンス、セキュリ及確認テスト（SVT）、CICDスキャンによる脆弱性、コンプライアンス問題、インフラの誤設定を提供。ARMをサポート。


<a name="binary" />
<h2>バイナリ</h2>


- [angr](https://github.com/angr/angr) — シンボリック実行をサポートするバイナリコード分析ツール。

- [binbloom](https://github.com/quarkslab/binbloom) — 原始バイナリファームウェアを分析し、エンディアン性やロードアドレスといった特徴を決定。このツールはすべてのアーキテクチャに対応。ロードアドレス：binbloomは原始バイナリファームウェアをパースし、そのロードアドレスを決定できる。エンディアン性：binbloomはエンディアン性を決定するためにヒューリスティクスを使用できる。UDSデータベース：binbloomは原始バイナリファームウェアをパースし、UDSコマンドIDを含む配列があるかどうかを確認できる。

- [BinSkim](https://github.com/Microsoft/binskim) — Windows向けのポータブル実行可能ファイルのセキュリティおよび正確性に関する結果を提供するバイナリ静的分析ツール。

- [Black Duck](https://www.blackducksoftware.com) :copyright: — ソースコードおよびバイナリを再利用可能なコード、必要なライセンス、潜在的なセキュリティ側面について分析するツール。

- [bloaty](https://github.com/google/bloaty) — バイナリがなぜ大きくなるのか、気になっていませんか？Bloaty McBloatfaceは、バイナリのサイズプロフィールを表示し、内部でどれがスペースを取っているかを理解できます。Bloatyはバイナリに対して深層分析を実行。カスタムELF、DWARF、Mach-Oパーサーを使用し、Bloatyはバイナリのすべてのバイトを生成したシンボルまたはコンパイルユニットに正確に割り当てることを目的としています。さらに、バイナリをディスアセンブルし、匿名データへの参照を探すこともできます。

- **cargo-bloat** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [cwe_checker](https://github.com/fkie-cad/cwe_checker) — cwe_checkerはバイナリ実行可能ファイルに存在する脆弱パターンを検出。

- [Ghidra](https://ghidra-sre.org) — 米国国家安全保障局（NSA）の研究部門が開発した、サイバーセキュリティミッションを支援するためのソフトウェア逆エンジニアリング（SRE）ツールセット

- [Hopper](https://www.hopperapp.com/) :copyright: — macOSおよびLinux向けの逆エンジニアリングツール。アプリケーションのディスアセンブル、デコンパイル、デバッグを可能にする。Hopperはコードを制御フロー図（CFG）や手続きの擬似コードといったさまざまな表現で表示。Apple Siliconに対応。

- [IDA Free](https://www.hex-rays.com/products/ida/support/download_freeware) :copyright: — バイナリコード分析ツール。

- [Jakstab](https://github.com/jkinder/jakstab) — Jakstabは、抽象解釈に基づく統合ディスアセンブルおよび静的分析フレームワークで、実行可能ファイル上の分析を設計し、信頼できる制御フロー図を回復する。

- [JEB Decompiler](https://www.pnfsoftware.com/) :copyright: — バイナリコードのデコンパイルおよびデバッグ。ドキュメントファイルを分解・分析。Android Dalvik、MIPS、ARM、Intel x86、Java、WebAssemblyおよびEthereumデコンパイラを提供。

- [Malcat](https://malcat.fr/) :copyright: — マルウェア分析やバイナリファイル検査用の十六進エディタおよびディアスアス。50以上のファイルフォーマットと複数のCPUアーキテクチャ（x86/x64、MIPS、.NET、Python、VB p-code）をサポート。高速分析、埋め込みファイル抽出、Yaraシグネチャスキャン、異常検知、Pythonスクリプトを備え、マルウェアアナリスト、SOC運営者、インシデント対応者、CTFプレイヤー向けに設計されています

- [Manalyze](https://github.com/JusticeRage/Manalyze) — ポータブル実行可能ファイルに悪意のあるコンテンツを検出する静的分析ツール。

- **mcsema** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Nauz File Detector](https://github.com/horsicq/Nauz-File-Detector) — Windows、LinuxおよびmacOS向けの静的リンク器／コンパイラ／ツール検出ツール。

- [rhabdomancer](https://crates.io/crates/rhabdomancer) — IDA Proのヘッドレスプラグインで、バイナリファイル内の潜在的に不安全なAPI関数呼び出しを特定。

- [rust-audit](https://github.com/Shnatsel/rust-audit) — Rustバイナリにおける既知のバグやセキュリティ脆弱性を検出。これは、依存関係ツリー（Cargo.lock）のデータをJSON形式でコンパイルされた実行可能ファイルの専用リンクセクションに埋め込むことで実現。

- [Twiggy](https://github.com/rustwasm/twiggy) — バイナリの呼び出しグラフを解析してコードサイズをプロファイリングする。目的は、wasmバイナリのサイズを小さくすることである。

- [VMware chap](https://github.com/vmware/chap) — chapは、インストルメンテーションされていないELFコアファイルを分析し、リーク、メモリの増加、および腐食を検出する。信頼性が十分であるため、自動化プロセスでリークがコミットされる前に検出できる。インタラクティブなツールとして、メモリ増加の原因を説明し、一部の腐食を特定し、デバッガーの機能を補完して、さまざまなメモリ領域の状態を表示できる。

- [zydis](https://zydis.re) — x86/x86-64向けの高速かつ軽量のディアセンサーライブラリ


<a name="buildtool" />
<h2>ビルドツール</h2>


- [checkmake](https://github.com/mrtazz/checkmake) — Makefileに対するリント／アナライザ

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — FreeBSDおよびDragonFlyBSDのポートディレクトリを検証するツール


<a name="css" />
<h2>CSS/SASS/SCSS</h2>


- [CSS Stats](https://cssstats.com) — スタイルシートに関する潜在的に興味深い統計情報

- [CSScomb](https://github.com/csscomb/csscomb.js) — CSSのコーディングスタイルフォーマッタ。独自の設定をサポートし、スタイルシートを美しくかつ一貫性のあるものにできる。

- [CSSLint](http://csslint.net) — 基本的な文法チェックを行い、問題のあるパターンや無効なパターンを検出する。

- [GraphMyCSS.com](https://graphmycss.com) — CSSの特定性グラフ生成ツール

- [Nu Html Checker](https://validator.github.io/validator/) — HTML/CSS/SVGにおける問題を早期に検出

- **Parker** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [PostCSS](https://postcss.org) — JSプラグインでスタイルを変換するツール。これらのプラグインは、CSSのリント、変数やミックスインのサポート、将来のCSS構文のトランスパイル、画像のインライン化などを行うことができる。

- [Project Wallace CSS Analyzer](https://www.projectwallace.com) — CSSに対する分析、[Project Wallace](https://www.projectwallace.com)の一部。

- **sass-lint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **scsslint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Specificity Graph](https://github.com/pocketjoso/specificity-graph) — CSSの特定性グラフ生成ツール

- [Stylelint](http://stylelint.io) — SCSS/CSSファイル向けのリントツール


<a name="configfile" />
<h2>設定ファイル</h2>


- [dotenv-linter](https://dotenv-linter.readthedocs.io/en/latest) — dotenvファイルを魅力的にリントするツール

- [dotenv-linter (Rust)](https://dotenv-linter.github.io/#/) — Rustで書かれた、.envファイル向けの高速リントツール

- [gixy](https://github.com/yandex/gixy) — Nginx設定を分析するツール。主な目的は誤設定を防ぎ、脆弱性の自動検出を実現することである。


<a name="configmanagement" />
<h2>構成管理</h2>


- [ansible-lint](https://ansible.readthedocs.io/projects/lint/) — プレイブックに改善の余地がある実践や行動をチェックする。

- [AWS CloudFormation Guard](https://github.com/aws-cloudformation/cloudformation-guard) — ローカルのCloudFormationテンプレートをポリシー-as-code規則で検証し、既存のテンプレートからルールを生成する。

- [AzSK](https://azsk.azurewebsites.net/) — Azure（AzSK）向けのセキュリティDevOpsキット。インフラとしてのコードにセキュリティインテリセンス、セキュリ及確認テスト（SVT）、CICDスキャンによる脆弱性、コンプライアンス問題、インフラの誤設定を提供。ARMをサポート。

- [cfn-lint](https://github.com/awslabs/cfn-python-lint) — AWS LabsのCloudFormationリントツール

- [cfn_nag](https://github.com/stelligent/cfn_nag) — AWS CloudFormation テンプレート用のリントツール

- [checkov](https://www.checkov.io) — Terraform ファイル（tf>=v0.12）に対する静的解析ツール（ビルド時におけるクラウド誤設定を防止）

- [cookstyle](https://docs.chef.io/cookstyle.html) — Cookstyle は Chef コックブック向けの RuboCop Ruby リントツールをベースにしたリントツール

- [foodcritic](http://www.foodcritic.io) — Chef コックブックにおける一般的な問題を検出するリントツール

- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- [metadata-json-lint](https://github.com/voxpupuli/metadata-json-lint) — Puppetのmetadata.jsonファイルの有効性をチェックするツール

- **Puppet Lint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbookスキャンツールで、あなたのPlaybookを分析し、推奨事項を提供します

- [terraform-compliance](https://terraform-compliance.com) — 軽量で、コンプライアンスおよびセキュリティに焦点を当てた、Terraform に対する BDD テストフレームワーク

- [terrascan](https://github.com/cesar-rodriguez/terrascan) — Terraform テンプレートの静的コード分析用のセキュリティおよびベストプラクティステストのコレクション

- [tflint](https://github.com/wata727/tflint) — `terraform plan`が検出できないエラーを検出するTerraformのリントツール。

- [tfsec](https://github.com/tfsec/tfsec) — Terraformの静的解析ツールで、ビルド時にクラウドの誤設定をチェックし、AWS、Azure、GCPのセキュリティベストプラクティス違反を防止。HCLパーサーと直接統合して、より正確な結果を提供します


<a name="container" />
<h2>コンテナ</h2>


- [anchore](https://anchore.io) — コンテナイメージの検出・分析・認証。Docker イメージを分析し、ユーザーが定義した受容ポリシーを適用して、自動化されたコンテナイメージの検証および認証を実現するサービス

- [clair](https://github.com/coreos/clair) — コンテナの脆弱性の静的分析

- **collector** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **dagda** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **Docker Label Inspector** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Dockle](https://github.com/goodwithtech/dockle) — セキュリティを考慮したコンテナイメージリントツール。ベストプラクティスのDockerイメージを構築するためのツール。Dockerイメージにセキュリティ脆弱性やCISベンチマークの適合性をスキャン。シークレットや認証情報の暴露、セキュリティベストプラクティスをチェック。複数の重症度レベル（FATAL、WARN、INFO）を提供し、CI/CD統合に必要なさまざまな出力フォーマットをサポート。

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます

- [Grype](https://github.com/anchore/grype) — コンテナイメージおよびファイルシステムの脆弱性スキャナー。アンコアが開発したツールで、コンテナイメージ、ディレクトリ、アーカイブに対して既知の脆弱性をスキャンします。複数のイメージフォーマット、SBOMの統合、VEX（脆弱性・exploitability eXchange）をサポートし、正確な脆弱性評価を実現。さまざまな脆弱性データベースと連携し、詳細なレポートを提供します

- [Haskell Dockerfile Linter](https://github.com/lukasmartinelli/hadolint) — よりスマートなDockerfileリントツールで、ベストプラクティスのDockerイメージを構築を支援

- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- **krane** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
このツールは複数の言語・構成形式に対応します。

- [OpenSCAP](https://www.open-scap.org/) — NIST認定セキュリティコンテンツ自動化プロトコル（SCAP）に基づく構成および既知の脆弱性の自動検査を行うアラートツールセット

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — コンテナネイティブアプリケーション保護により、コンテナ化されたアプリケーションの可視性と制御を提供します

- [sysdig](https://sysdig.com/) :copyright: — クラウドおよびコンテナのフォレンジクスに特化したセキュリティなDevOpsプラットフォーム。オープンソーススタックに基づき、Dockerイメージスキャンを提供し、Falco（コンテナ、Kubernetes、クラウド向けのオープンスタンダードのランタイム脅威検出）を提供

- [Vuls](https://vuls.io/) — NVDやOVALなどの情報に基づく、エージェントなしのLinux脆弱性スキャナー。コンテナイメージのサポートは一部あるが、コンテナ専用のツールではない。


<a name="ci" />
<h2>継続的インテグレーション</h2>


- [actionlint](https://rhysd.github.io/actionlint) — GitHub Actionsワークフローファイル向けの静的チェックツール。オンライン版を提供している。

- [AzSK](https://azsk.azurewebsites.net/) — Azure（AzSK）向けのセキュリティDevOpsキット。インフラとしてのコードにセキュリティインテリセンス、セキュリ及確認テスト（SVT）、CICDスキャンによる脆弱性、コンプライアンス問題、インフラの誤設定を提供。ARMをサポート。

- [Code Climate](https://codeclimate.com) — 誰でも使えるオープンで拡張可能な静的解析プラットフォーム。

- [Codecov](https://about.codecov.io/) :copyright: — Codecovは、開発者およびエンジニアリーダー向けにコードカバレッジツールを提供する企業。柔軟かつ統一されたレポート、スムーズなカバレッジ洞察、強力なカバレッジ制御を提供。Codecovは20以上の言語をサポートし、CI/CDに依存しない。29,000以上の組織と100万人の開発者がCodecovを使用。Codecovは最近Sentryに参加。

- [CodeRabbit](https://coderabbit.ai) :copyright: — AIを活用したコードレビューツール。開発者がより良いコードをより速く書けるように支援。CodeRabbitは自動コードレビューを提供し、セキュリティ脆弱性を特定し、コード改善の提案を行う。GitHubおよびGitLabと統合。

- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — composerの依存関係問題の高速検出。

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblueは、ソフトウェア開発チーム向けにAIを活用したコード分析およびテストソリューションを提供するソフトウェア企業。その技術は開発者がテストを自動化し、バグを発見し、ソフトウェア開発プロセスにおける手作業を減らすのを支援。企業の主な製品であるDiffblue Coverは、JavaコードのユニットテストをAIで生成・実行し、エラーを検出し、コード品質を向上させる。

- [exakat](https://www.exakat.io) — PHP用の自動コードレビューエンジン

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます

- [Goblint](https://goblint.in.tum.de) — マルチスレッドCプログラムの静的解析を行う静的解析ツール。主にデータ競合の検出に焦点を当てているが、バッファオーバーフローやヌルポインタ参照といった他の実行時エラーも報告する。

- [PullRequest](https://www.hackerone.com/product/code) :copyright: — 专家エンジニアが提供するコードレビューとしてのサービス。最強の自動化を備えた品質コードレビューにより、開発スピードを向上させ、技術的負債を減少させる。

- **quality** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **QuantifiedCode** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — Javaコードベースにおいて、リファクタリングすべきGodクラスや高結合性クラスを特定し、優先順位を付ける。

- [Reviewdog](https://github.com/haya14busa/reviewdog) — 任意のリントツールから任意のコードホスティングサービスにレビューコメントを投稿するツール

- [Symfony Insight](https://insight.symfony.com/) :copyright: — PHPプロジェクトにおけるセキュリティリスクの検出、バグの発見、実行可能なメトリクスの提供

- [TangleGuard](https://tangleguard.com/) :copyright: — スケーラブルなソフトウェアアーキテクチャを理解し、維持できるように支援。そのため、ソースコードからインタラクティブかつネストされた依存関係グラフを生成。必要な詳細レベルを選択し、あなたのコードベースの重要な部分を取得できる。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 静的コード解析からのレポートファイルをパースするためのJavaライブラリ。Jenkins、Maven、Gradleプラグインなどに使用。


<a name="deno" />
<h2>Deno</h2>


- [deno_lint](https://github.com/denoland/deno_lint) — Deno用の公式なリントツール。


<a name="dockerfile" />
<h2>Dockerfile</h2>


- [Cloud (IaC) Security for JetBrains IDEs](https://plugins.jetbrains.com/plugin/25413-cloud-iac-security) — JetBrains IDE向けのクラウド（IaC）セキュリティプラグイン。DockerおよびKubernetesのIaCに対して、Dockerイメージ/ビルドセキュリティベストプラクティス、Kubernetesポッドセキュリティ基準、NSA/CISAのKubernetes強化ガイドラインに基づく50以上のルールでリアルタイム検査を行う

- [Dockle](https://github.com/goodwithtech/dockle) — セキュリティを考慮したコンテナイメージリントツール。ベストプラクティスのDockerイメージを構築するためのツール。Dockerイメージにセキュリティ脆弱性やCISベンチマークの適合性をスキャン。シークレットや認証情報の暴露、セキュリティベストプラクティスをチェック。複数の重症度レベル（FATAL、WARN、INFO）を提供し、CI/CD統合に必要なさまざまな出力フォーマットをサポート。


<a name="embedded" />
<h2>組み込み</h2>


- [oelint-adv](https://github.com/priv-kweihmann/oelint-adv) — open-embeddedおよびYOCTOで使用されるbitbakeレシピ向けのリントツール


<a name="erb" />
<h2>Embedded Ruby (a.k.a. ERB, eRuby)</h2>


- [ERB Lint](https://github.com/Shopify/erb-lint) — ERBやHTMLファイルをlintする

- [ERB::Formatter](https://github.com/nebulab/erb-formatter) — ERBファイルを高速かつ正確にフォーマット

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 埋め込みRubyを理解するHTMLの正常化・美観化ツール。Railsテンプレートの整理に最適。


<a name="gherkin" />
<h2>Gherkin</h2>


- [gherkin-lint](https://github.com/vsiakka/gherkin-lint) — JavaScriptで書かれたGherkin構文向けのリントツール


<a name="html" />
<h2>HTML</h2>


- [Angular ESLint](https://github.com/angular-eslint/angular-eslint#readme) — Angularプロジェクト向けのリントツール

- [axe-core](https://www.deque.com/axe/) — 自動WebUIテスト用のアクセシビリティエンジン。HTMLをWCAG 2.0、2.1、2.2ガイドラインに照らしてテスト。Google Lighthouse、Microsoft Accessibility Insights、そして世界中数千の組織で使用。

- **Bootlint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [ERB Lint](https://github.com/Shopify/erb-lint) — ERBやHTMLファイルをlintする

- [ERB::Formatter](https://github.com/nebulab/erb-formatter) — ERBファイルを高速かつ正確にフォーマット

- **grunt-bootlint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 [Bootlint](https://github.com/twbs/bootlint) - Bootstrapプロジェクト用のHTML lintツール

- **gulp-bootlint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 [Bootlint](https://github.com/twbs/bootlint) - Bootstrapプロジェクト用のHTML lintツール

- **HTML Inspector** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [HTML Tidy](http://www.html-tidy.org) — HTMLおよびXMLドキュメントの誤ったマークアップを修正し、古くからのコードを現代の標準にアップグレードする

- [HTML-Validate](https://html-validate.org/) — オフラインでのHTML5バリデーションツール

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 埋め込みRubyを理解するHTMLの正常化・美観化ツール。Railsテンプレートの整理に最適。

- [HTMLHint](https://htmlhint.com) — HTML用の静的コード分析ツール

- [Nu Html Checker](https://validator.github.io/validator/) — HTML/CSS/SVGにおける問題を早期に検出

- [Pa11y](https://pa11y.org/) — コマンドラインからHTML CodeSnifferまたはaxe-coreを実行する自動アクセシビリティテストツール。CI/CD統合、複数のレポート、WCAG 2.1 AA基準とのテストをサポート

- [Polymer-analyzer](https://github.com/Polymer/tools/tree/master/packages/analyzer) — Web Components向けの静的解析フレームワーク。


<a name="json" />
<h2>JSON</h2>


- [jsonlint](https://jsonlint.com/) — jsonlint.comのスタンドアローン版。CLI付きのJSONパーサーおよびバリデーター

- [Spectral](https://stoplight.io/open-source/spectral) — 柔軟なJSON/YAMLリントツールで、OpenAPI v2/v3およびAsyncAPI v2に対応


<a name="kubernetes" />
<h2>Kubernetes</h2>


- [chart-testing](https://github.com/helm/chart-testing) — ctはHelmチャートのテストに使用されるツール。プルリクエストのlintおよびテストに用いられる。ターゲットブランチと比較したチャートの変更を自動検出。

- [Cloud (IaC) Security for JetBrains IDEs](https://plugins.jetbrains.com/plugin/25413-cloud-iac-security) — JetBrains IDE向けのクラウド（IaC）セキュリティプラグイン。DockerおよびKubernetesのIaCに対して、Dockerイメージ/ビルドセキュリティベストプラクティス、Kubernetesポッドセキュリティ基準、NSA/CISAのKubernetes強化ガイドラインに基づく50以上のルールでリアルタイム検査を行う

- [clusterlint](https://github.com/digitalocean/clusterlint) — ClusterlintはライブKubernetesクラスタにリソースを問い合わせ、それらに対して一般的なチェックおよびプラットフォーム固有のチェックを実行し、クラスタオペレーターに実行可能なフィードバックを提供する。これは非侵襲的なツールで、外部から実行される。Clusterlintはリソースの構成を変更しない。

- [Datree](https://datree.io/) — Kubernetesの誤設定を防ぐCLIツール。マニフェストやHelmチャートがベストプラクティスおよび組織のポリシーに従っていることを確認する

- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- [klint](https://github.com/uswitch/klint) — Kubernetesリソースの変更を監視し、それに対してlintルールを実行するツール。誤ったオブジェクトを特定・デバッグし、ポリシーに沿ったオブジェクトを時系列的に調整する。Klintはチェックを定義し、チームが行動を必要とする場合に事前警告を提供する。

- **krane** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
このツールは複数の言語・構成形式に対応します。

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — Kubernetesクラスタにおけるセキュリティ弱点を検出

- [kube-lint](https://github.com/viglesiasce/kube-lint) — Kubernetesリソース向けのlintツール。カスタマイズ可能なルールセットを提供。あなたが検証したいルールのリストを定義し、kube-lintはそれらのルールをリソースに対して評価する。

- [kube-linter](https://github.com/stackrox/kube-linter) — KubeLinterは、Kubernetes YAMLファイルおよびHelmチャートに対して静的解析を行うツールで、それらに表れるアプリケーションがベストプラクティスに従っていることを確認します

- [kube-score](https://kube-score.com) — Kubernetesオブジェクト定義に対する静的コード解析

- [kubeconform](https://github.com/yannh/kubeconform) — カスタムリソースをサポートする高速なKubernetesマニフェストバリデータ

It is inspired by, contains code from and is designed to stay close to [Kubeval](https://analysis-tools.dev/tool/kubeval),
but with the following improvements:
* high performance: will validate & download manifests over multiple routines, caching downloaded files in memory
* configurable list of remote, or local schemas locations, enabling validating Kubernetes custom resources (CRDs) and offline validation capabilities
* uses by default a self-updating fork of the schemas registry maintained by the kubernetes-json-schema project - which guarantees up-to-date schemas for all recent versions of Kubernetes.


- [KubeLinter](https://github.com/stackrox/kube-linter) — KubeLinterは、Kubernetes YAMLファイルおよびHelmチャートに対して静的解析を行うツールで、それらに表れるアプリケーションがベストプラクティスに従っていることを確認します

- **kubeval** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="latex" />
<h2>LaTeX</h2>


- **ChkTeX** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [lacheck](https://www.ctan.org/pkg/lacheck) — LaTeXドキュメントにおけるよくある誤りを検出するツール

- [TeXLab](https://texlab.netlify.app) — TeX/LaTeX向けの言語サーバープロトコルの実装、およびlint機能を含む


<a name="laravel" />
<h2>Laravel</h2>


- **Enlightn** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [larastan](https://github.com/larastan/larastan) — Laravelに静的解析を追加し、開発者の生産性とコード品質を向上させる。PHPStanをラップしたツール。


<a name="make" />
<h2>Makefile</h2>


- [checkmake](https://github.com/mrtazz/checkmake) — Makefileに対するリント／アナライザ

- [mbake](https://pypi.org/project/mbake/) — mbakeはMakefileのフォーマッタおよびリントツール。50年もかかってた！

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — FreeBSDおよびDragonFlyBSDのポートディレクトリを検証するツール


<a name="markdown" />
<h2>Markdown</h2>


- [markdownlint](https://github.com/DavidAnson/markdownlint) — Markdown/CommonMarkファイルに対するNode.jsベースのスタイルチェックおよびリントツール

- [mdformat](https://mdformat.rtfd.io) — CommonMarkに準拠したMarkdownフォーマッタ

- [mdl](https://github.com/mivok/markdownlint) — Markdownファイルのスタイル問題を検出し、警告を表示するツール

- [mdsf](https://github.com/hougesen/mdsf) — あなたの好きなコードフォーマッターを使ってMarkdownコードブロックをフォーマットする

- [remark-lint](https://remark.js.org) — JavaScriptで書かれたプラグイン可能なMarkdownコードスタイルリントツール

- [textlint](https://textlint.github.io/) — textlintはJavaScriptで書かれたオープンソーステキストリントユーティリティ


<a name="meta" />
<h2>Metalinter</h2>


- **ciocheck** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `pep8`、`pydocstyle`、`flake8`、`pylint`。

- [flake8](https://github.com/PyCQA/flake8) — `pyflakes`、`pycodestyle`および`mccabe`をラップするツール。

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheavenは、flake8をベースに構築されたPythonリントツールで、継承可能かつ複雑なTOML設定を可能にする。

- **Go Meta Linter** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `golangci-lint`。

- [goreporter](https://github.com/360EntSecGroup-Skylar/goreporter) — 複数のリントツールを並列実行し、その出力を統一したレポートに変換

- **multilint** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。 関連コード: `flake8`、`isort`、`modernize`。

- [prospector](https://github.com/PyCQA/prospector) — `pylint`、`pep8`、`mccabe`およびその他のツールをラップするツール。


<a name="mobile" />
<h2>モバイル</h2>


- [Android Lint](https://developer.android.com/studio/write/lint) — Androidプロジェクトに対する静的解析を実行

- **android-lint-summary** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [FlowDroid](https://github.com/secure-software-engineering/FlowDroid) — Androidアプリケーション向けの静的タイン分析ツール

- **iblessing** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Mariana Trench](https://mariana-tren.ch/) — AndroidおよびJavaアプリケーション向けのセキュリティに特化した静的解析ツール。Mariana TrenchはDalvikバイトコードを分析し、大規模コードベース（数十百万行）でも高速に実行されるように設計されている。コード変更が行われた時点で、リポジトリに登録される前に脆弱性を検出できる。

- [Oversecured](https://oversecured.com) :copyright: — AndroidおよびiOSアプリ向けのエンタープライズ級の脆弱性スキャナー。アプリ所有者および開発者が開発プロセスにOversecurerを統合することで、各新しいモバイルアプリのセキュリティを確保できます

- **paprika** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **qark** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [redex](https://fbredex.com) — Redexは.dexファイルの読み書きおよび分析を行うフレームワークを提供し、このフレームワークを用いた最適化パスを提供することで、バイナリコードを改善します。Redexで最適化されたAPKは小さく、速くなります


<a name="nix" />
<h2>Nix</h2>


- [deadnix](https://github.com/astro/deadnix) — Nixファイルに使われていないコード（未使用変数バインディング）をスキャン

- [statix](https://github.com/nerdypepper/statix) — Nixプログラミング言語向けのリントおよび提案。"statix check"はNixコード内のアンチパターンを強調し、"statix fix"はいくつかのそのようなケースを修正できます


<a name="nodejs" />
<h2>Node.js</h2>


- [lockfile-lint](https://github.com/lirantal/lockfile-lint) — npmまたはyarnのlockファイルをlintして、セキュリティ問題を分析・検出

- **njsscan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **NodeJSScan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [standard](http://standardjs.com) — JavaScriptスタイルガイドに関する問題をチェックするnpmモジュール


<a name="package" />
<h2>パッケージ</h2>


- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — composerの依存関係問題の高速検出。

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [lintian](https://wiki.debian.org/Lintian) — Debianパッケージ向けの静的解析ツール

- [rpmlint](https://github.com/rpm-software-management/rpmlint) — rpmパッケージにおける一般的なエラーをチェックするツール


<a name="prometheus" />
<h2>Prometheus</h2>


- [promformat](https://github.com/facetoe/promformat) — PromformatはPythonで書かれたPromQLフォーマッター

- [promval](https://github.com/facetoe/promval) — Pythonで書かれたPromQLバリデーター。PromQL表現が想定された形で書かれていないかを検証できる


<a name="protobuf" />
<h2>Protocol Buffers</h2>


- [buf](https://buf.build) — 良いAPI設計選択と構造を強制するCLIリントツール

- [protolint](https://github.com/yoheimuta/protolint) — プロトコルバッファのスタイルと規約を強制するプラグイン型リントおよび修正ツール


<a name="puppet" />
<h2>Puppet</h2>


- [metadata-json-lint](https://github.com/voxpupuli/metadata-json-lint) — Puppetのmetadata.jsonファイルの有効性をチェックするツール


<a name="rails" />
<h2>Rails</h2>


- [Active Record Doctor](https://github.com/gregnavis/active_record_doctor) — 生産環境に到達する前にデータベースの問題を特定する

- [Bullet](https://github.com/flyerhzm/bullet) — N+1クエリや未使用のエAGERロードを解決するサポート

- [DatabaseConsistency](https://github.com/djezzzl/database_consistency) — データベーススキーマとアプリケーションモデルの不整合や効率性の問題を回避するツール

- [dawnscanner](https://github.com/thesp0nge/dawnscanner) — Rubyで書かれたウェブアプリケーション向けの静的解析セキュリティスキャナー。Sinatra、Padrino、Ruby on Railsフレームワークをサポート

- [ERB::Formatter](https://github.com/nebulab/erb-formatter) — ERBファイルを高速かつ正確にフォーマット

- [Skunk](https://github.com/fastruby/skunk) — RubyコードのSkunkScore計算ツール――テストカバレッジのない最も複雑なコードを特定！

- **Traceroute** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="security" />
<h2>セキュリティ／SAST</h2>


- [AzSK](https://azsk.azurewebsites.net/) — Azure（AzSK）向けのセキュリティDevOpsキット。インフラとしてのコードにセキュリティインテリセンス、セキュリ及確認テスト（SVT）、CICDスキャンによる脆弱性、コンプライアンス問題、インフラの誤設定を提供。ARMをサポート。

- [brakeman](https://brakemanscanner.org) — Ruby on Railsアプリケーション向けの静的解析セキュリティ脆弱性スキャナー

- [Cloud (IaC) Security for JetBrains IDEs](https://plugins.jetbrains.com/plugin/25413-cloud-iac-security) — JetBrains IDE向けのクラウド（IaC）セキュリティプラグイン。DockerおよびKubernetesのIaCに対して、Dockerイメージ/ビルドセキュリティベストプラクティス、Kubernetesポッドセキュリティ基準、NSA/CISAのKubernetes強化ガイドラインに基づく50以上のルールでリアルタイム検査を行う

- [Credential Digger](https://github.com/SAP/credential-digger) — Credential DiggerはGitHubをスキャンするツールで、ハードコードされた認証情報（パスワード、APIキー、シークレットキー、トークン、個人情報など）を特定し、機械学習モデルである[Password Model](https://huggingface.co/SAPOSS/password-model)を用いて誤検出データをフィルタリングする。このスキャナーは、誤検出率が低いパスワードおよび非構造化トークンを検出できる。

- [Datree](https://datree.io/) — Kubernetesの誤設定を防ぐCLIツール。マニフェストやHelmチャートがベストプラクティスおよび組織のポリシーに従っていることを確認する

- [detect-secrets](https://github.com/Yelp/detect-secrets) — コード内のシークレットを検出・防止する企業向けのツール。これは、定期的に生成されるdiff出力を、ヒューリスティックに作成された正規表現文にマッチさせることで、新しいシークレットがコミットされたかを特定する。これにより、すべてのgit履歴を確認する負荷や、すべてのリポジトリを毎回スキャンする必要がなくなる

- [Dockle](https://github.com/goodwithtech/dockle) — セキュリティを考慮したコンテナイメージリントツール。ベストプラクティスのDockerイメージを構築するためのツール。Dockerイメージにセキュリティ脆弱性やCISベンチマークの適合性をスキャン。シークレットや認証情報の暴露、セキュリティベストプラクティスをチェック。複数の重症度レベル（FATAL、WARN、INFO）を提供し、CI/CD統合に必要なさまざまな出力フォーマットをサポート。

- **Enlightn** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます

- [Gitleaks](https://github.com/zricethezav/gitleaks) — Gitリポジトリに含まれるパスワード、APIキー、トークンなどのハードコードされたシークレットを検出するSASTツール

- [gokart](https://github.com/praetorian-inc/gokart) — Golangのセキュリティ分析で誤検出を最小限に抑え、変数や関数引数の元のソースをトレースして、入力ソースが安全かどうかを判定

- [Grype](https://github.com/anchore/grype) — コンテナイメージおよびファイルシステムの脆弱性スキャナー。アンコアが開発したツールで、コンテナイメージ、ディレクトリ、アーカイブに対して既知の脆弱性をスキャンします。複数のイメージフォーマット、SBOMの統合、VEX（脆弱性・exploitability eXchange）をサポートし、正確な脆弱性評価を実現。さまざまな脆弱性データベースと連携し、詳細なレポートを提供します

- **HasMySecretLeaked** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **iblessing** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [kani](https://github.com/model-checking/kani) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
Kani is particularly useful for verifying unsafe code blocks in Rust, 
where the "unsafe superpowers" are unchecked by the compiler.
Kani verifies:

* Memory safety (e.g., null pointer dereferences)
* User-specified assertions (i.e., assert!(...))
* The absence of panics (e.g., unwrap() on None values)
* The absence of some types of unexpected behavior (e.g., arithmetic overflows)


- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — Kubernetesクラスタにおけるセキュリティ弱点を検出

- [lockfile-lint](https://github.com/lirantal/lockfile-lint) — npmまたはyarnのlockファイルをlintして、セキュリティ問題を分析・検出

- **LunaSec** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Malcat](https://malcat.fr/) :copyright: — マルウェア分析やバイナリファイル検査用の十六進エディタおよびディアスアス。50以上のファイルフォーマットと複数のCPUアーキテクチャ（x86/x64、MIPS、.NET、Python、VB p-code）をサポート。高速分析、埋め込みファイル抽出、Yaraシグネチャスキャン、異常検知、Pythonスクリプトを備え、マルウェアアナリスト、SOC運営者、インシデント対応者、CTFプレイヤー向けに設計されています

- **njsscan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **NodeJSScan** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [OSV-Scanner](https://osv.dev/) — OSV.devが提供するデータを使用したGoで書かれた脆弱性スキャナー。Googleが開発したマルチ言語およびパッケージマネージャーの依存関係における既知の脆弱性をスキャンするツール。コンテナスキャン、ライセンススキャン、ガイド付き修正をサポート。ロックファイル、SBOM、コンテナイメージと連携してセキュリティ問題を特定

- [Oversecured](https://oversecured.com) :copyright: — AndroidおよびiOSアプリ向けのエンタープライズ級の脆弱性スキャナー。アプリ所有者および開発者が開発プロセスにOversecurerを統合することで、各新しいモバイルアプリのセキュリティを確保できます

- [OWASP Noir](https://owasp-noir.github.io/noir/) — 静的解析によりエンドポイントを特定する攻撃面検出ツール

- [pip-audit](https://github.com/pypa/pip-audit) — Pythonパッケージに存在する既知の脆弱性をスキャンするツール。Pythonパッケージングアソシエーション（PyPA）によって開発され、Trail of BitsおよびGoogleによってサポートされている。Python環境および要件ファイルをスキャンし、脆弱なパッケージを特定し、修正案を提案する。GitHub Actions、pre-commitホルダー、複数の脆弱性サービスとの統合をサポート。

- [PT Application Inspector](https://www.ptsecurity.com) :copyright: — コードのバグを識別し、ウェブ攻撃への脆弱性を検出することで、攻撃を防ぎます。可能なexploitを示して、リモートコード実行をデモンストレーションします

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — コンテナネイティブアプリケーション保護により、コンテナ化されたアプリケーションの可視性と制御を提供します

- **QuantifiedCode** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [Safety](https://safetycli.com/) — Python依存関係の脆弱性スキャナー。ソフトウェアサプライチェーンセキュリティを強化するために、既知の脆弱性を持つパッケージを検出し、Python依存関係を既知のセキュリティ脆弱性データベースと比較し、詳細なレポートを提供。CI/CD統合および複数の出力フォーマットをサポートします

- [scorecard](https://github.com/ossf/scorecard) — オープンソースのセキュリティヘルスメトリクス

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbookスキャンツールで、あなたのPlaybookを分析し、推奨事項を提供します

- [Symfony Insight](https://insight.symfony.com/) :copyright: — PHPプロジェクトにおけるセキュリティリスクの検出、バグの発見、実行可能なメトリクスの提供

- [tfsec](https://github.com/tfsec/tfsec) — Terraformの静的解析ツールで、ビルド時にクラウドの誤設定をチェックし、AWS、Azure、GCPのセキュリティベストプラクティス違反を防止。HCLパーサーと直接統合して、より正確な結果を提供します

- [trufflehog](https://trufflesecurity.com) — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。
TruffleHog is an open source secret-scanning engine that resolves exposed secrets across your company’s entire tech stack. 

- [Tsunami Security Scanner](https://github.com/google/tsunami-security-scanner) — 一般的なネットワークセキュリ及スキャナーで、高セグリティのRCE類の脆弱性を高信頼で検出するための拡張可能なプラグインシステムを備えています。脆弱性（例：開いているAPI）を検出するためのカスタムデテクタを追加可能です


<a name="smart-contracts" />
<h2>スマートコントラクト</h2>


- [mythril](https://github.com/ConsenSys/mythril) — シンボリック実行フレームワークで、スマートコントラクトの脆弱性を自動的に検出し、exploitすることができる

- [MythX](https://mythx.io) :copyright: — MythXは、フュージング、シンボリック実行、静的解析などの複数の分析手法を統合した使いやすい分析プラットフォームで、高精度で脆弱性を検出します。RemixやVSCodeなどのツールチェーンやコマンドラインから統合可能です

- [slither](https://github.com/trailofbits/slither) — 静的解析フレームワークで、複数の脆弱性検出器を実行し、コントラクトの詳細に関する視覚情報を表示し、カスタム分析を簡単に書くAPIを提供します

- [solhint](https://protofire.github.io/solhint) — https://protofire.io. が開発する、Solidityコード向けのオープンソースリンターです。

- [solium](https://ethlint.readthedocs.io/en/latest) — Soliumは、Solidityスマートコントラクトにおけるスタイルおよびセキュリティ問題を特定・修正するlintツールです


<a name="support" />
<h2>サポート</h2>


- [LibVCS4j](https://github.com/uni-bremen-agst/libvcs4j) — Javaのライブラリで、既存のツールがソフトウェアシステムの進化を分析できるように、さまざまなバージョン管理システムおよび問題トラッカーに共通のAPIを提供するもの

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — Javaコードベースにおいて、リファクタリングすべきGodクラスや高結合性クラスを特定し、優先順位を付ける。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 静的コード解析からのレポートファイルをパースするためのJavaライブラリ。Jenkins、Maven、Gradleプラグインなどに使用。


<a name="template" />
<h2>テンプレート言語</h2>


- [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) — EmberまたはHandlebarsテンプレート用のリントツール

- [haml-lint](https://github.com/sds/haml-lint) — クリーンで一貫したHAMLを書くためのツール

- [slim-lint](https://github.com/sds/slim-lint) — Slimテンプレートを分析するための設定可能なツール

- [yamllint](https://yamllint.readthedocs.io) — YAMLファイルの構文の有効性、キーの繰り返し、および行の長さ、トリーリングスペース、インデントなどの外見的な問題をチェック


<a name="terraform" />
<h2>Terraform</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます

- [kics](https://kics.io/) — インフラコードにおけるセキュリティ脆弱性、コンプライアンス問題、インフラの誤設定を検出。Terraform、Kubernetes、Docker、AWS CloudFormationおよびAnsibleに対応

- **shisho** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="translation" />
<h2>翻訳</h2>


- [dennis](https://github.com/willkg/dennis) — POファイルの処理に必要なユーティリティのセットで、開発を容易にし品質を向上させるもの


<a name="vue" />
<h2>Vue.js</h2>


- [HTML-Validate](https://html-validate.org/) — オフラインでのHTML5バリデーションツール

- **Vetur** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="writing" />
<h2>文章</h2>


- **After the Deadline** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- **alex** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。

- [codespell](https://github.com/codespell-project/codespell) — コード内の一般的なスペルミスをチェック

- [languagetool](https://languagetool.org) — 25以上の言語に対応したスタイルおよび文法チェックツール。単純なスペルチェックでは検出できない多くの誤りを発見できる

- [misspell-fixer](https://github.com/vlajos/misspell-fixer) — ソースコード内の一般的なスペルミスや誤字を迅速に修正するツール

- [Misspelled Words In Context](https://jwilk.net/software/mwic) — スペルミスの可能性をグループ化し、その文脈で表示するスペルチェックツール

- [proselint](https://github.com/amperser/proselint) — 文のスタイルに焦点を当てた英語の文章リントツール（文法よりもスタイルに注目）

- [vale](https://vale.sh) — 高速かつ拡張性を重視したプロセス用の構文認識リントツール

- **write-good** :warning: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


<a name="yaml" />
<h2>YAML</h2>


- [Spectral](https://stoplight.io/open-source/spectral) — 柔軟なJSON/YAMLリントツールで、OpenAPI v2/v3およびAsyncAPI v2に対応

- [yamllint](https://yamllint.readthedocs.io) — YAMLファイルの構文の有効性、キーの繰り返し、および行の長さ、トリーリングスペース、インデントなどの外見的な問題をチェック


<a name="git" />
<h2>git</h2>


- [commitlint](https://commitlint.js.org) — コミットメッセージがコンフォーマル・コミットフォーマットに合っているかをチェック

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshieldは、ローカル環境またはCI環境で実行されるCLIアプリケーションで、350以上の種類のシークレット、およびコードベースに影響を与える他の潜在的なセキュリティ脆弱性やポリシー違反を検出するのに役立ちます

- **HasMySecretLeaked** :warning: :copyright: — 静的解析、品質検査、整形、セキュリティ検証を支援するツールまたは資料です。


## 関連コレクション

- [Clean code linters](https://github.com/collections/clean-code-linters) — GitHubのコレクションに含まれるリントツールのコレクション
- [Code Quality Checker Tools For PHP Projects](https://github.com/collections/code-quality-in-php) — GitHubのコレクションにあるPHPのリントツールの集まり
- [go-tools](https://github.com/dominikh/go-tools) — Goコードを扱うためのツールとライブラリのコレクション（リントツールおよび静的解析を含む）
- [linters](https://github.com/mcandre/linters) — 静的コード解析についての概説
- [OWASP Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) — オープン・ウェブアプリケーション・セキュリティ・プロジェクトが維持しているツール一覧
- [php-static-analysis-tools](https://github.com/exakat/php-static-analysis-tools) — 有用なPHPの静的解析ツールについてのレビューされたリスト
- [AppSec Santa — SAST Tools](https://appsecsanta.com/sast-tools) — 静的解析セキュリティテストツールを比較する資料です。
- [Wikipedia](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) — 静的コード解析用ツールの一覧

## ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法令で認められる範囲において、[Matthias Endler](https://endler.dev)は本作品に関するすべての著作権および関連・隣接する権利を放棄しています。
このコンテンツの整形・表示に使用する基礎ソースコードはMITライセンスです。


タイトル画像は[Freepikによるデザイン](https://www.freepik.com)です。
