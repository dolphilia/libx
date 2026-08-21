---
title: "MartinZikmund/awesome-uno-platform"
description: "MartinZikmund/awesome-uno-platform の定本スナップショット"
licenseSource: "github-MartinZikmund-awesome-uno-platform-readme-md"
---

<div align="center">
	<div>
		<img width="160" src="media/logo.png" alt="Uno Platform">
	</div>
	<br>
</div>

<div align="center">

# Awesome Uno Platform


[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

</div>

[Uno Platform](https://platform.uno/) は、Windows、iOS、Android、WebAssembly、macOS、Linux 向けの単一コードベース .NET アプリケーションを構築するためのオープンソース UI プラットフォームです。

これは Uno Platform ユーザー向けの**優れたリソース**一覧です。**このリストが役立つ場合は、⭐ スターを付けてください。**

## 目次

- [一般](#general)
- [リポジトリー](#repositories)
- [ツール](#tools)
- [ライブラリ](#libraries)
  - [ツールキット](#toolkits)
  - [MVVM](#mvvm)
  - [互換性](#compatibility)
- [ブログ](#blogs)
- [ライブアプリ](#live-apps)
- [オープンソースアプリ](#open-source-apps)
- [ライブコーディング](#live-coding)
- [講演](#talks)
- [動画](#videos)
- [書籍](#books)

## 一般

- [Uno Platform website](https://platform.uno/platforms)
- [Uno Platform documentation](https://docs.platform.uno/)

## リポジトリー

- [Uno Platform](https://github.com/unoplatform/uno) - UWP/WinUI の完全な API サーフェスを含む Uno Platform のメインリポジトリー。Issue 提出と貢献に最適な場所。
- [Uno Themes](https://github.com/unoplatform/Uno.Themes) - Uno Platform アプリ向け Material・Cupertino テーマライブラリ。さらに Android/iOS 開発者ガイドラインに基づく高度なコントロールを含む。
- [Uno Toolkit](https://github.com/unoplatform/uno.toolkit.ui) - アプリケーション開発を高速化するマルチプラットフォーム優先 UI コンポーネントライブラリ。含まれるコンポーネント向けの Material・Cupertino スタイルも提供する。
- [Uno Gallery](https://github.com/unoplatform/Uno.Gallery) - コントロール・API ギャラリーアプリ。使いやすいコードスニペットとともに、ほとんどの組み込みコントロール・機能のライブ例を含む。
- [Uno Samples](https://github.com/unoplatform/Uno.Samples) - 増え続けるコードサンプルとスニペットのコレクション。
- [Uno Core](https://github.com/unoplatform/Uno.Core) - 再利用可能なユーティリティ・ヘルパーセットを提供する。メイン Uno Platform リポジトリーで使用される。
- [Uno UI Test](https://github.com/unoplatform/Uno.UITest) - Android、iOS、WebAssembly 向けクロスプラットフォーム UI テストライブラリ。

## ツール
- [Uno Platform extension for Visual Studio 2022](https://marketplace.visualstudio.com/items?itemName=unoplatform.uno-platform-addin-2022) - Visual Studio 2022 に Uno Platform プロジェクトテンプレートとホットリロード機能を追加する。
- [Uno Platform extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=unoplatform.vscode) - XAML IntelliSense、Hot Reload、モバイルターゲットデバッグ対応を含む生産性向上機能を Visual Studio Code に追加する。
- [Uno Extensions](https://github.com/unoplatform/uno.extensions) - Uno Platform を用いるマルチプラットフォームアプリケーション構築に関連する一般的な機能向け NuGet パッケージ群。
- [Uno Platform for Figma Plugin](https://www.figma.com/community/plugin/1045528009520465828/Uno-Platform-(Figma-to-XAML)) - 高精細デザインからレスポンシブ XAML を生成する Figma プラグイン。
- [Uno Material Toolkit](https://www.figma.com/community/file/1110792522046146058/Uno-Platform-Material-Toolkit) - Uno Figma Plugin で使用する Figma ファイル。

## ライブラリ

### ツールキット
- [Windows Community Toolkit for Uno](https://github.com/unoplatform/Uno.WindowsCommunityToolkit) - Microsoft Community Toolkit の Uno Platform フォーク。
- [Telerik UI for Uno](https://github.com/unoplatform/Uno.Telerik.UI-For-UWP) - Uno Platform をサポートする Telerik UI for UWP のフォーク。

### MVVM
- [MVx.Observable](https://www.nuget.org/packages/MVx.Observable/) - フレームワークではなくライブラリとして提供される、（大部分で）意見を押し付けない軽量 ReactiveUI 代替。
- [Prism](https://prismlibrary.com/) - 疎結合、モジュール式、保守可能、テスト可能な XAML アプリケーションを構築するフレームワーク。
- [Microsoft MVVM Toolkit](https://docs.microsoft.com/en-us/windows/communitytoolkit/mvvm/introduction) - モダン、高速、モジュール式の MVVM ライブラリ。

### 互換性
- [SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr) - [Cross-Platform Real-Time Communication with Uno & SignalR](https://ian.bebbs.co.uk/posts/UnoChat) - SignalR フレームワークの統合例。
- [Elmish.Uno](https://github.com/xperiandri/Elmish.Uno) - F# で書かれたアプリ向け Half-Elmish フレームワーク。

## ブログ
- [Official Uno Platform blog](https://platform.uno/blog/) - Uno Platform メンテナーと外部貢献者による最新リリースノート、チュートリアル、記事を掲載する。
- [Jerome Laban's blog](https://jaylee.org/) - Uno Platform CTO のブログ。
- [Martin Zikmund blog](https://blog.mzikmund.com/category/development/uno-platform/) - Martin Zikmund による Uno Platform ブログ記事。
- [Nick's .NET Travels](https://nicksnettravels.builttoroam.com/tag/uno/) - Nick Randolph による Uno Platform ブログ記事。
- [IObservable\<Opinion\>](https://ian.bebbs.co.uk/tags/uno-platform) - Ian Bebbington による Uno Platform ブログ記事。

## ライブアプリ

- [Uno Playground](https://playground.platform.uno) - ブラウザーから Uno Platform の C#・XAML を試せるアプリ。
- [Windows Calculator](https://calculator.platform.uno/) - Windows 10 Calculator アプリの WebAssembly ポート。
- [NuGet.info](https://nuget.info/) - NuGet Package Explorer アプリケーションのモダン化版。
- [Toolkit Labs](https://toolkitlabs.dev/) - Windows Community Toolkit 向け新コンポーネントを開発する場所。
- [Unexpected APIs in Uno Platform](https://unexpectedapis.uno/) - Uno Platform で使用できるさまざまな UI・非 UI API を含むデモアプリ。

## オープンソースアプリ
- [UADO](https://github.com/unoplatform/uado) - Azure DevOps バックログビューアー。
- [Uno Playground](https://github.com/unoplatform/Uno.Playground) - UI サンプル付き Uno Playground アプリ。
- [Uno Calculator](https://github.com/unoplatform/calculator) - Windows 10 Calculator のポート。
- [NuGet Package Explorer](https://github.com/NuGetPackageExplorer/NuGetPackageExplorer/tree/main/Uno) - NuGet Package Explorer の Uno Platform 版ソースコード。
- [Ch9](https://github.com/unoplatform/Uno.Ch9) - Channel 9 ブラウザーアプリ。
- [COduo](https://github.com/ibebbs/CODuo) - 英国における現在・予測エネルギー発電の環境影響を可視化する。単一・デュアルスクリーンデバイスの両方での使用を想定。

## ライブコーディング

- [Jerome Laban's Twitch](https://www.twitch.tv/jeromelaban) - 毎週（火曜日）の Uno Platform ライブコーディングセッション。
- [Martin Zikmund's Twitch](https://www.twitch.tv/martinzikmund) - 主に Uno Platform をテーマとするライブコーディングセッション。

## 講演

- [Introduction to open source Uno Platform](https://youtu.be/vRzTr8XYau0) - Uno Platform とその提供内容について Jérôme Laban が行う入門講演。
- [Uno Platform - Your Apps Everywhere](https://youtu.be/dX69x-D6COI) - NDC Porto 2022 で Martin Zikmund が行った Uno Platform エコシステムの概要。
- [Building Multi-Platform Applications with the Uno Platform](https://youtu.be/0zvzfCGO0gI) - 既存の XAML・C# スキルを再利用しながら、複数のプラットフォーム・フォームファクター向けアプリを作成する方法を Nick Randolph が紹介する。
- [Разработка кросс-платформенных приложений с Uno Platform и Elmish-подходом на F# (RU)](https://www.youtube.com/watch?v=ApNGATu9RSo) - Uno、Blend、Elmish の紹介。

## 動画

- [Uno Platform's YouTube](https://www.youtube.com/@unoplatform) - 新リリースのハイライト、ライブセッション、チュートリアルを含む Uno Platform 公式 YouTube チャンネル。
- [Uno Tech Bites](https://www.youtube.com/playlist?list=PLl_OlDcUya9rP_fDcFrHWV3DuP7KhQKRA) - 一口サイズのレッスンによる Uno Platform 開発学習。
- [Martin Zikmund's YouTube](https://www.youtube.com/@mzikmund) - Uno Platform 関連のさまざまな動画・チュートリアル。

## 書籍

- [Getting Started with the Uno Platform and WinUI 3 (2022/09)](https://link.springer.com/book/10.1007/978-1-4842-8248-9) - どこでも動くクロスプラットフォームのデスクトップ、モバイル、Web アプリケーションを実践的に構築する。Skye Hoefling 著。
- [Creating Cross-Platform C# Applications with Uno Platform (2021/08)](https://www.packtpub.com/product/creating-cross-platform-c-applications-with-uno-platform/9781801078498) - Windows、macOS、iOS、Android、WebAssembly で動く C#・XAML アプリを構築する。Matt Lacey・Marcel Alexander Wagner 著。

## 貢献

貢献を歓迎します。プルリクエストを作成する前に[貢献ガイドライン](https://github.com/MartinZikmund/awesome-uno-platform/blob/4887d585d7cf42dea91e86360649cc54975c82ed/contributing.md)を読んでください。
