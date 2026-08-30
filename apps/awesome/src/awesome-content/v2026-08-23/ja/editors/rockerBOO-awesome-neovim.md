---
title: "rockerBOO/awesome-neovim"
description: "Neovimのプラグイン、設定、開発ツールを用途別に分類した定本スナップショット"
licenseSource: "github-rockerBOO-awesome-neovim-readme-md"
---

# Neovim Awesome リスト [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

<a href="https://neovim.io/"><img src="https://neovim.io/logos/neovim-mark-flat.png" align="right" width="144"/></a>

> 優れたNeovimプラグインのコレクションで、主にNeovim固有機能を対象とします。
> そのため、Vim互換だけのプラグインは掲載していません。

[Neovim](https://neovim.io/)は、新しい応用や貢献を促す拡張性と使いやすさを重視したVimベースのテキストエディターです。
[組み込みプラグイン](https://neovim.io/doc/user/plugins.html#plugins)と豊富なAPIを備え、多様な拡張を開発できます。

## 目次

- [プラグインマネージャー](#plugin-manager)
- [LSP](#lsp)
  - [診断](#diagnostics)
- [補完](#completion)
- [AI](#ai)
- [プログラミング言語対応](#programming-languages-support)
  - [Go](#golang)
  - [ウェブ開発](#web-development)
  - [Markdown・LaTeX](#markdown-and-latex)
- [言語](#language)
- [構文](#syntax)
- [スニペット](#snippet)
- [レジスター](#register)
- [マーク](#marks)
- [検索](#search)
- [ファジーファインダー](#fuzzy-finder)
- [ファイルエクスプローラー](#file-explorer)
- [プロジェクト](#project)
- [バッファー](#buffers)
- [色](#color)
- [カラースキーム](#colorscheme)
  - [カラースキーム作成](#colorscheme-creation)
  - [カラースキーム切り替え](#colorscheme-switchers)
- [バーと行](#bars-and-lines)
  - [ステータスライン](#statusline)
  - [タブライン](#tabline)
  - [カーソルライン](#cursorline)
- [起動](#startup)
- [アイコン](#icon)
- [メディア](#media)
- [ノート作成](#note-taking)
- [ユーティリティ](#utility)
  - [CSVファイル](#csv-files)
- [アニメーション](#animation)
- [ターミナル統合](#terminal-integration)
- [デバッグ](#debugging)
  - [Quickfix](#quickfix)
- [テスト](#test)
- [コード実行](#code-runner)
- [Neovim Lua開発](#neovim-lua-development)
- [Fennel](#fennel)
- [依存関係管理](#dependency-management)
- [Git](#git)
  - [GitHub](#github)
- [移動](#motion)
  - [Tree-sitterベース](#tree-sitter-based)
- [キーバインド](#keybinding)
- [スクロール](#scrolling)
  - [スクロールバー](#scrollbar)
- [編集支援](#editing-support)
  - [コメント](#comment)
  - [折りたたみ](#folding)
- [整形](#formatting)
  - [インデント](#indent)
- [コマンドライン](#command-line)
- [セッション](#session)
- [リモート開発](#remote-development)
- [ライブプレビュー](#live-preview)
- [分割とウィンドウ](#split-and-window)
  - [Tmux](#tmux)
- [ゲーム](#game)
  - [競技プログラミング](#competitive-programming)
- [小物](#toys)
- [ワークフロー](#workflow)
  - [統計追跡](#stats-tracking)
- [データベース](#database)
- [構築済み設定](#pre-made-configuration)
- [外部ツール](#external)
  - [バージョンマネージャー](#version-manager)
  - [プラグインテンプレート](#plugin-template)
  - [OS固有](#os-specific)
- [要望](#wishlist)
- [UI](#ui)
- [外部資料](#external-resource)

## プラグインマネージャー

- [alyxshang/nuwa.nvim](https://source.alyxshang.boo/alyxshang/nuwa.nvim) - 軽量のパッケージマネージャー
- [lewis6991/pckr.nvim](https://github.com/lewis6991/pckr.nvim) - `wbthomason/packer.nvim` のスピリチュアルな継承者。
- [savq/paq-nvim](https://github.com/savq/paq-nvim) - Luaで書かれたパッケージマネージャー
- [folke/lazy.nvim](https://github.com/folke/lazy.nvim) - グラフィカルインターフェース、非同期実行、ロックファイルなどを備えた現代的なプラグインマネージャー
  - [cosmicbuffalo/super_lazy.nvim](https://github.com/cosmicbuffalo/super_lazy.nvim) - `folke` の `lazy.nvim` への拡張であり、大規模なチームが共有・個人設定を組み合わせる際に複数のロックファイルを使用できるようにする。
- [alex-popov-tech/store.nvim](https://github.com/alex-popov-tech/store.nvim) - 時刻ごとにデータベースが更新されるプラグイン発見ツール、かつ `lazy.nvim` および `vim.pack` のワンキーインストールをサポート。
- [lumen-oss/rocks.nvim](https://github.com/lumen-oss/rocks.nvim) - LuaRocksを用いた現代的なプラグイン管理、Cargoにインスパイアされたもの
- [nvim-mini/mini.nvim#mini.deps](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-deps.md) - `mini.nvim` のモジュールで、他のプラグインの管理を行う。Git および組み込みパッケージを使用して、プラグインのインストール、更新、クリーン、スナップショットを行う。
- [wsdjeg/nvim-plug](https://github.com/wsdjeg/nvim-plug) - Luaで書かれた非同期プラグインマネージャー
- [piersolenski/plugin-addict.nvim](https://github.com/piersolenski/plugin-addict.nvim) - プラグインの迅速なインストールを可能にする、まったくシンプルな方法
- [OriginCoderPulse/synapse.nvim](https://github.com/OriginCoderPulse/synapse.nvim) - 美しいUI、知能的な依存関係管理、タグ/ブランチサポート、インストール後のコマンド実行を備えた現代的かつ軽量なプラグインマネージャー
- [zuqini/zpack.nvim](https://github.com/zuqini/zpack.nvim) - `vim.pack` の上に配置された薄いレイヤーで、遅延ロードと `lazy.nvim` の宣言型仕様をサポート。

[**⬆ 目次へ戻る**](#contents)


## LSP

**（Neovim 0.5が必要）**

- [nvim-pio](https://github.com/batoaqaa/nvim-pio) - PlatformIOと`clangd` LSPの間を非同期かつハードコーディングなしで橋渡しする
- [romus204/referencer.nvim](https://github.com/romus204/referencer.nvim) - 軽量で非同期であり、関数、メソッド、型などへの参照をLSPで表示する
- [Dan7h3x/signup.nvim](https://github.com/Dan7h3x/signup.nvim) - ちょっとしたスマート `lsp_signature` ヘルパーで、素晴らしい機能を備えている。

- [neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) - LSPクライアントのためのクイックスタート設定

- [nvimdev/lspsaga.nvim](https://github.com/nvimdev/lspsaga.nvim) - インストールされたLSPに基づいた、非常に高速なUIを持つ軽量LSPプラグイン
- [kosayoda/nvim-lightbulb](https://github.com/kosayoda/nvim-lightbulb) - プラグインが現在のカーソル位置に `textDocument/codeAction` が存在する場合、サイン列にランプを表示する。
- [onsails/lspkind.nvim](https://github.com/onsails/lspkind.nvim) - プラグインはLSP補完にVSCode風のアイコンを追加
- [ojroques/nvim-lspfuzzy](https://github.com/ojroques/nvim-lspfuzzy) - FZFを使用してLSPクライアントを簡易化する小さなプラグイン
- [gfanto/fzf-lsp.nvim](https://github.com/gfanto/fzf-lsp.nvim) - インストールされたLSPにFZFのファジー検索機能を有効化
- [ray-x/lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim) - 入力中にLSPの署名ヒントを表示
- [smjonas/inc-rename.nvim](https://github.com/smjonas/inc-rename.nvim) - コマンドプレビュー機能に基づく、インクリメンタルなLSPリネームコマンドを提供
- [rmagatti/goto-preview](https://github.com/rmagatti/goto-preview) - 浮動ウィンドウ内でネイティブLSPのgoto definition呼び出しをプレビュー
- [jubnzv/virtual-types.nvim](https://github.com/jubnzv/virtual-types.nvim) - 型注釈を仮想テキストとして表示
- [marilari88/twoslash-queries.nvim](https://github.com/marilari88/twoslash-queries.nvim) - 検査中の変数のTypeScript型をインラインで仮想テキストで表示
- [retran/meow.yarn.nvim](https://github.com/retran/meow.yarn.nvim) - インタラクティブなLSP型と呼び出し階層エクスプローラ、ツリー表示、リアルタイムプレビュー、ナビゲーションのbreadcrumb、カスタムノードレンダラー
- [ray-x/navigator.lua](https://github.com/ray-x/navigator.lua) - 既存のコードを迅速に学習し、コードをスムーズにナビゲートできます。スイス軍刀のようなツールで、LSPとTree-sitterのシンボルを探索するのは簡単です。
- [hedyhli/outline.nvim](https://github.com/hedyhli/outline.nvim) - `symbols-outline.nvim` の大幅に強化・リファクタリングされたフォーク。
- [stevearc/aerial.nvim](https://github.com/stevearc/aerial.nvim) - コードのアウトラインウィンドウでスキャンと迅速なナビゲートを実現。
- [hasansujon786/nvim-navbuddy](https://github.com/hasansujon786/nvim-navbuddy) - シンプルなポップアップディスプレイで、キーボード中心のナビゲーション機能を提供し、`ranger` ファイルマネージャーにインスピレーションを得ている。
- [tamago324/nlsp-settings.nvim](https://github.com/tamago324/nlsp-settings.nvim) - JSONまたはYAMLファイルでLSPを設定します。
- [jakewvincent/texmagic.nvim](https://github.com/jakewvincent/texmagic.nvim) - Texlabのlspconfig設定を強化し、任意のカスタムLaTeXビルドエンジンを定義し、マジックコメントで選択します。
- [aznhe21/actions-preview.nvim](https://github.com/aznhe21/actions-preview.nvim) - LSPコードアクションに対する完全にカスタマイズ可能なプレビュー機能。
- [mfussenegger/nvim-lint](https://github.com/mfussenegger/nvim-lint) - 組み込みのLanguage Server Protocolサポートに補完する、非同期リントプラグイン。
- [b0o/SchemaStore.nvim](https://github.com/b0o/SchemaStore.nvim) - [SchemaStore](https://github.com/SchemaStore/schemastore) カタログへのアクセスを提供。
- [j-hui/fidget.nvim](https://github.com/j-hui/fidget.nvim) - LSPの進行状況を表示するスタンドアローンUI。

- [scalameta/nvim-metals](https://github.com/scalameta/nvim-metals) - [Metals](https://scalameta.org/metals/)、Scala ランタイムサーバーを使用する際のより良い体験を提供する。組み込みのLSPサポートを活用。

- [junnplus/lsp-setup.nvim](https://github.com/junnplus/lsp-setup.nvim) - `nvim-lspconfig` および `mason-lspconfig` のシンプルなラッパーで、LSPサーバーの簡単な設定を可能にする。
- [amrbashir/nvim-docs-view](https://github.com/amrbashir/nvim-docs-view) - LSPのホバードキュメントをサイドパネルに表示。
- [mfussenegger/nvim-jdtls](https://github.com/mfussenegger/nvim-jdtls) - 組み込みLSPサポートにEclipse JDT Language Server向けの拡張機能。
- [Kasama/nvim-custom-diagnostic-highlight](https://github.com/Kasama/nvim-custom-diagnostic-highlight) - インライン診断ポップアップハイライトで、`coc-nvim` に似たものだが、`vim.diagnostic` に基づく。
- [mrcjkb/haskell-tools.nvim](https://github.com/mrcjkb/haskell-tools.nvim) - Haskell開発ツール（例：`haskell-language-server` および Hoogle）とのシームレスな統合。
- [~chinmay/clangd_extensions.nvim](https://sr.ht/~chinmay/clangd_extensions.nvim) - 組み込みLSPクライアント向けのオフスペック `clangd`機能。
- [ranjithshegde/ccls.nvim](https://github.com/ranjithshegde/ccls.nvim) - ccls LSPのオフスペック拡張機能を使用し、ASTをブラウズします。
- [idanarye/nvim-buffls](https://github.com/idanarye/nvim-buffls) - 特定のバッファにLSP機能を追加します。
- [error311/wayfinder.nvim](https://github.com/error311/wayfinder.nvim) - 現在のシンボルからガイドされたコード探索を行い、保持可能なトレールを提供します。
- [DNLHC/glance.nvim](https://github.com/DNLHC/glance.nvim) - LSPの位置をプレビュー・ナビゲート・編集するための、見やすいウィンドウ。
- [linrongbin16/lsp-progress.nvim](https://github.com/linrongbin16/lsp-progress.nvim) - LSPの進行状況を高速に表示する機能。
- [jinzhongjia/LspUI.nvim](https://github.com/jinzhongjia/LspUI.nvim) - LSP操作をラップする、現代的で実用的なUI。
- [VidocqH/lsp-lens.nvim](https://github.com/VidocqH/lsp-lens.nvim) - 関数定義の上に関数参照を表示（IDEAのcodelensのように）。
- [Wansmer/symbol-usage.nvim](https://github.com/Wansmer/symbol-usage.nvim) - ドキュメントシンボルの参照、定義、実装を表示。
- [creativenull/efmls-configs-nvim](https://github.com/creativenull/efmls-configs-nvim) - efm-langserverと組み込みLSPを連携させるために、非公式なリントとフォーマッタのコレクション。
- [creativenull/diagnosticls-configs-nvim](https://github.com/creativenull/diagnosticls-configs-nvim) - diagnostic-languageserverと組み込みLSPを連携させるために、非公式なリントとフォーマッタのコレクション。
- [hinell/lsp-timeout.nvim](https://github.com/hinell/lsp-timeout.nvim) - idle/unused LSPサーバーの自動開始/停止を実現し、RAM使用量を低く維持する
- [nvimtools/none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) - Lua を使って、あなたのエディタを言語サーバーとして使用し、LSP診断、コードアクションなどを注入する、再構築された `null-ls.nvim`。
- [Zeioth/none-ls-autoload.nvim](https://github.com/Zeioth/none-ls-autoload.nvim) - でインストールされた ソースを自動でロード／アンロード。組み込みおよび外部ソースに対応。 `none-ls` `mason`
- [vxpm/ferris.nvim](https://github.com/vxpm/ferris.nvim) - Rust-AnalyzerのLSP拡張機能と相互作用
- [mrcjkb/rustaceanvim](https://github.com/mrcjkb/rustaceanvim) - rust-tools.nvim の大幅に変更されたフォークであり、`setup` の呼び出しを必要とせず、nvim-lspconfig に依存しない。
- [soulis-1256/eagle.nvim](https://github.com/soulis-1256/eagle.nvim) - マウスオーバーでLSPヒントを表示
- [stevanmilic/nvim-lspimport](https://github.com/stevanmilic/nvim-lspimport) - 未定義の項のインポートを自動的に解決。`pyright` ランタイムサーバーと組み合わせて便利。
- [jmbuhr/otter.nvim](https://github.com/jmbuhr/otter.nvim) - その他のドキュメントに埋め込まれた言語に対してLSP機能とnvim-cmpの補完ソースを提供
- [lopi-py/luau-lsp.nvim](https://github.com/lopi-py/luau-lsp.nvim) - luau-lsp拡張機能により体験を向上させる
- [LukasPietzschmann/boo.nvim](https://github.com/LukasPietzschmann/boo.nvim) - カーソルが指すオブジェクトに関するLSPを駆動した情報が即座に表示される
- [zeioth/garbage-day.nvim](https://github.com/Zeioth/garbage-day.nvim) - 無効なLSPクライアントを停止してRAMを解放するゴミコレクタ
- [ryan-WORK/ohm](https://github.com/ryan-WORK/ohm) - メモリ膨張、診断の停止、monorepoサーバーの複製、セッションの劣化を解決する持続的なLSPプロセスマネージャーダイアログ
- [rachartier/tiny-inline-diagnostic.nvim](https://github.com/rachartier/tiny-inline-diagnostic.nvim) - より見やすいPrettier診断メッセージを表示。カーソル位置に1行の診断メッセージを表示し、アイコンと色を用いる
- [chrisgrieser/nvim-lsp-endhints](https://github.com/chrisgrieser/nvim-lsp-endhints) - 行の末尾にLSPインレイヒントを表示する（行内ではなく）
- [rachartier/tiny-code-action.nvim](https://github.com/rachartier/tiny-code-action.nvim) - Telescopeを使ってコードアクションを実行し、可視化するためのシンプルな方法を提供
- [mawkler/refjump.nvim](https://github.com/mawkler/refjump.nvim) - カーソル位置にある項目に対して、次の/前のLSP参照にジャンプ。`]r`／`[r` を使用。
- [alexpasmantier/pymple.nvim](https://github.com/alexpasmantier/pymple.nvim) - Pythonのインポートをファイルの移動・リネーム時にリファクタリング
- [esmuellert/nvim-eslint](https://github.com/esmuellert/nvim-eslint) - VSCode ESLint言語サーバーをバンドルし、ネイティブLSPクライアントを活用して、すべてを統合したESLint体験を提供
- [Fildo7525/pretty_hover](https://github.com/Fildo7525/pretty_hover) - 高度にカスタマイズ可能なホバーフォーマッタ。blink.cmpに拡張可能。ネイティブホバーが複数のLSPサーバーをサポートする
- [yarospace/dev-tools.nvim](https://github.com/yarospace/dev-tools.nvim) - カスタムコードアクション用のプロセス内LSPサーバー、強化されたアクション選択画面、コミュニティアクションライブラリ、および自作アクションを作成するための便利なインターフェース
- [SunnyTamang/neodoc.nvim](https://github.com/SunnyTamang/neodoc.nvim) - 関数／クラスのドキュメントを `google`、`numpy`、`sphinx` などのフォーマットで作成するためのドキュメント生成ツール。リアルタイムプレビューを提供。
- [barreiroleo/ltex_extra.nvim](https://github.com/barreiroleo/ltex_extra.nvim) - LTeX LSP拡張機能により外部ファイルの処理（ルールと辞書）を提供
- [chojs23/ts-bridge](https://github.com/chojs23/ts-bridge) - TypeScript言語サーバーのシムが、内蔵されたLSPクライアントと`tsserver`を接続します。
- [akioweh/lsp-document-highlight.nvim](https://github.com/akioweh/lsp-document-highlight.nvim) - カーソ之に即座にLSPシンボル参照をハイライトする
- [nemanjamalesija/ts-expand-hover.nvim](https://github.com/nemanjamalesija/ts-expand-hover.nvim) - hoverフロート内でTypeScriptの型エイリアスを段階的に展開・収縮する
- [mason-org/mason.nvim](https://github.com/mason-org/mason.nvim) - LSPサーバー、DAPサーバー、リント、フォーマッタを簡単にインストール・管理する
- [Senal-D-A-Gunaratna/swapson.nvim](https://github.com/Senal-D-A-Gunaratna/swapson.nvim) - ルート と へのモンキーパッチを と にインストールし、LSPおよびツールのインストールを速くする。 `mason.nvim` `npm` `pip` `bun` `uv`
- [Crysthamus/nvim-file-operations](https://github.com/Crysthamus/nvim-file-operations) - ビルトインLSPを用いてワークスペースファイル操作をサポートする

### 診断

- [sontungexpt/better-diagnostic-virtual-text](https://github.com/sontungexpt/better-diagnostic-virtual-text) - 診断メッセージの表示を強化します。この機能は、エディタ内に直接診断メッセージをより使いやすく、情報量の多い形で表示することを目的としています。
- [~whynothugo/lsp_lines.nvim](https://git.sr.ht/~whynothugo/lsp_lines.nvim) - 実際のコード行の上に仮想線を使用して診断を表示します。
- [folke/trouble.nvim](https://github.com/folke/trouble.nvim) - 問題を解決するための美しく整った診断リストを提供します。
- [piersolenski/wtf.nvim](https://github.com/piersolenski/wtf.nvim) - AIを活用した診断デバッグにより、複雑なエラーを説明し、カスタムに最適化された解決策を提供します。
- [chrisgrieser/nvim-rulebook](https://github.com/chrisgrieser/nvim-rulebook) - ルールを無視するためのインラインコメントを追加したり、ルールのドキュメントをオンラインで検索したりできます。
- [artemave/workspace-diagnostics.nvim](https://github.com/artemave/workspace-diagnostics.nvim) - 開かれているファイル以外のすべてのプロジェクトファイルについても診断を表示します。
- [Kurama622/clean-diagnostic](https://github.com/Kurama622/clean-diagnostic) - 仮想テキストを使って診断数を表示し、診断の詳細をフローティングウィンドウで表示します。
- [tumillanino/semgrep.nvim](https://github.com/tumillanino/semgrep.nvim) - 軽量なSemgrep静的解析統合により、バグや脆弱性を検出します。

[**⬆ 目次へ戻る**](#contents)


## 補完

- [ms-jpq/coq_nvim](https://github.com/ms-jpq/coq_nvim) - 極めて高速な補完。SQLite、並列スケジューラ、数百時間の最適化。
- [hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp) - Luaで書かれた完了エンジン、`nvim-compe`の後継である。
  - [hrsh7th/cmp-cmdline](https://github.com/hrsh7th/cmp-cmdline) - `nvim-cmp` コマンドライン補完のソース。
  - [saadparwaiz1/cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip) - `nvim-cmp`の`LuaSnip`向けソース。
  - [hrsh7th/cmp-buffer](https://github.com/hrsh7th/cmp-buffer) - `nvim-cmp` バッファ内の単語のソース。
  - [hrsh7th/cmp-path](https://github.com/hrsh7th/cmp-path) - `nvim-cmp` ファイルシステムパスのソース。
  - [hrsh7th/cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp) - `nvim-cmp` 内蔵LSPクライアントのソース。
  - [hrsh7th/cmp-nvim-lsp-signature-help](https://github.com/hrsh7th/cmp-nvim-lsp-signature-help) - `nvim-cmp` LSPクライアントから関数署名を表示するためのソース。
  - [hrsh7th/cmp-nvim-lua](https://github.com/hrsh7th/cmp-nvim-lua) - `nvim-cmp` Neovim Lua APIのソース。
  - [petertriho/cmp-git](https://github.com/petertriho/cmp-git) - `nvim-cmp`の`git`向けソース。
  - [lukas-reineke/cmp-under-comparator](https://github.com/lukas-reineke/cmp-under-comparator) - `nvim-cmp` より良い並べ替えを行うための関数。
  - [SergioRibera/cmp-dotenv](https://github.com/SergioRibera/cmp-dotenv) - `nvim-cmp`から環境変数（システムと`.env`ファイル）を取得。
  - [valenyala/cmp-forge-remappings](https://github.com/valenyala/cmp-forge-remappings) - `nvim-cmp` Foundryプロジェクト内のSolidityインポートのソース。リマッピングを意識したパスとシンボル自動インポートをサポート。
- [nvim-mini/mini.nvim#mini.completion](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-completion.md) - `mini.nvim`向けの非同期二段階完了モジュール。完了項目の情報の表示と独立した関数署名をサポートします。
- [saghen/blink.cmp](https://github.com/saghen/blink.cmp) - LSPとスニペットサポートを備えた非常に高速な補完。署名ヘルプ、コマンドライン補完、オートブレケットサポート（セマンティックトークンに基づく）。
  - [saghen/blink.compat](https://github.com/saghen/blink.compat) - `nvim-cmp`のソースを`blink.cmp`で使用するために必要な互換性層。
  - [Kasier-Yang/blink-cmp-avante](https://github.com/Kaiser-Yang/blink-cmp-avante) - Avanteのソース。 `blink-cmp`
  - [krissen/blink-cmp-bibtex](https://github.com/krissen/blink-cmp-bibtex) - `blink.cmp` BibTeX引用ファイルのソース。
  - [Kaiser-Yang/blink-cmp-git](https://github.com/Kaiser-Yang/blink-cmp-git) - `blink.cmp` Gitのソース。
  - [disrupted/blink-cmp-conventional-commits](https://github.com/disrupted/blink-cmp-conventional-commits) - `blink.cmp`の[Conventional Commits](https://www.conventionalcommits.org/)向けソース。
  - [mikavilpas/blink-ripgrep.nvim](https://github.com/mikavilpas/blink-ripgrep.nvim) - `blink.cmp`の`ripgrep`／`git grep`向けソース。
  - [bydlw98/blink-cmp-env](https://github.com/bydlw98/blink-cmp-env) - `blink.cmp` 環境変数のソース
  - [bydlw98/blink-cmp-sshconfig](https://github.com/bydlw98/blink-cmp-sshconfig) - `blink.cmp` ファイルのソースです。 `sshconfig`
  - [mgalliou/blink-cmp-tmux](https://github.com/mgalliou/blink-cmp-tmux) - `blink.cmp`の[tmux](https://github.com/tmux/tmux)向けソース。
  - [moyiz/blink-emoji.nvim](https://github.com/moyiz/blink-emoji.nvim) - `blink.cmp` GitHub Markdown エモジのソース
  - [erooke/blink-cmp-latex](https://github.com/erooke/blink-cmp-latex) - `blink.cmp` LaTeX のソース
  - [xieyonn/blink-cmp-dat-word](https://github.com/xieyonn/blink-cmp-dat-word) - `blink.cmp` ディクショナリのソース
  - [yaocccc/blink-cmp-cmdlinehistory](https://github.com/yaocccc/blink-cmp-cmdlinehistory) - `blink.cmp` コマンドラインと検索履歴のソース
  - [FelipeLema/blink-cmp-vsnip](https://codeberg.org/FelipeLema/blink-cmp-vsnip) - `blink.cmp`の`vim-vsnip`向けソース。
  - [benborla/at-file.nvim](https://github.com/benborla/at-file.nvim) - `blink.cmp` を使用したファイルパス補完のソース `@`.
- [zbirenbaum/copilot.lua](https://github.com/zbirenbaum/copilot.lua) - [GitHub/copilot.vim](https://github.com/github/copilot.vim)向けの完全機能のLuaの代替品。
- [brianaung/compl.nvim](https://github.com/brianaung/compl.nvim) - Vimのins-completionメカニズムに基づく最小で依存関係のない自動補完

[**⬆ 目次へ戻る**](#contents)


## AI

- [saya-ashen/agent-workbench.nvim](https://github.com/saya-ashen/agent-workbench.nvim) - pi.devのワークスペースフロントエンドでセッション、差分レビュー、永続的なシェルワークシートを提供
- [nwiizo/signalbox.nvim](https://github.com/nwiizo/signalbox.nvim) - 持久的なHerdrコードエージェントの監視とルーティングに向けた注目優先制御面
- [cursortab/cursortab.nvim](https://github.com/cursortab/cursortab.nvim) - 複数のAIプロバイダーによる編集補完とカーソル予測の編集
- [teocns/neocursor.nvim](https://github.com/teocns/neocursor.nvim) - APIキーではなく既存のCursorセッションで駆動される次編集予測、カーソルジャンプ、幽霊テキスト
- [ctchen222/openspec.nvim](https://github.com/ctchen222/openspec.nvim) - OpenSpecワークフローのコンテキスト、モデル/プロバイダー選択、コードエージェント実装の手渡し
- [carlos-algms/agentic.nvim](https://github.com/carlos-algms/agentic.nvim) - Claude、Gemini、Codex、OpenCodeおよびCursorなどのAI ACPプロバイダー向けチャットインターフェース
- [BRONZowl/codux.nvim](https://github.com/BRONZowl/codux.nvim) - OpenAI Codexを永続的なフロートテルミナルで実行し、ファイル、選択、診断、またはファイルエクスプローラのターゲットを送信
- [0xble/dotagent.nvim](https://github.com/0xble/dotagent.nvim) - Claude CodeおよびCodexスタイルのプロンプトエディタ向けのコマンドおよびスキル補完。ローカルエージェントコマンドおよびスキルディレクトリから設定可能
- [blob42/codegpt-ng.nvim](https://github.com/blob42/codegpt-ng.nvim) - シンプルなコマンドベースAIコード作成と強力なテンプレートシステム。Ollama、OpenAIなどに対応
- [ray-x/copilot-agent.nvim](https://github.com/ray-x/copilot-agent.nvim) - GitHub Copilotエージェントランタイムでネイティブツール実行、セッション永続性、細かい権限を提供
- [Aaronik/GPTModels.nvim](https://github.com/Aaronik/GPTModels.nvim) - GPTModels - 穩定でクリーンなマルチモデル、ウィンドウベースのLLMAIツール
- [Robitx/gp.nvim](https://github.com/Robitx/gp.nvim) - お気に入りのエディタでChatGPTのようなセッションと指示可能なテキスト/コード操作
- [jackMort/ChatGPT.nvim](https://github.com/jackMort/ChatGPT.nvim) - OpenAIのChatGPT APIによる自然言語生成の容易さ
- [wsdjeg/chat.nvim](https://github.com/wsdjeg/chat.nvim) - 軽量で拡張可能なチャットプラグイン。AI統合、複数プロバイダー、内蔵ツールを備えている
- [CamdenClark/flyboy](https://github.com/CamdenClark/flyboy) - ChatGPTとMarkdownバッファでのシンプルな相互作用。GPT-4およびAzure OpenAIをサポート。
- [gsuuon/model.nvim](https://github.com/gsuuon/model.nvim) - プロンプトビルダーインターフェースを用いてLLMを統合します。OpenAI（＋互換モデル）を含む複数のプロバイダー、`PaLM`、`Hugging Face`、およびローカルエンジンである`llamacpp`。
- [dense-analysis/neural](https://github.com/dense-analysis/neural) - LLMを活用してコード生成、チャットボットとのやり取りなどを行う機能を提供。
- [jpmcb/nvim-llama](https://github.com/jpmcb/nvim-llama) - LLM（LLaMA 2および`llama.cpp`）のラッパー。
- [David-Kunz/gen.nvim](https://github.com/David-Kunz/gen.nvim) - Ollamaを介してLLMを用いてカスタマイズ可能なプロンプトでテキストを生成。
- [kiddos/gemini.nvim](https://github.com/kiddos/gemini.nvim) - Google Gemini APIへのバインディング。
- [olimorris/codecompanion.nvim](https://github.com/olimorris/codecompanion.nvim) - Anthropic、Gemini、OllamaおよびOpenAIをサポートする、Copilot Chatのような体験を提供。
- [you-n-g/simplegpt.nvim](https://github.com/you-n-g/simplegpt.nvim) - ChatGPTに質問を構築・送信するためのシンプルかつ柔軟な方法を提供。
- [Exafunction/windsurf.nvim](https://github.com/Exafunction/windsurf.nvim) - 無料で高速なCopilotの代替ツール。LSPおよびTree-sitterをサポート。
- [GeorgesAlkhouri/nvim-aider](https://github.com/GeorgesAlkhouri/nvim-aider) - Aiderをシームレスに統合し、AIを活用したコーディング体験を提供。
- [CopilotC-Nvim/CopilotChat.nvim](https://github.com/CopilotC-Nvim/CopilotChat.nvim) - GitHub Copilot向けのチャットインターフェースで、コーディング関連の質問を直接質問し、回答を受けることができます。
- [tzachar/cmp-ai](https://github.com/tzachar/cmp-ai) - nvim-cmp向けの一般用途AIソース。任意のREST APIに簡単に適用可能（リモートコード補完をサポート）。
- [milanglacier/minuet-ai.nvim](https://github.com/milanglacier/minuet-ai.nvim) - Minuetは、OpenAI（互換）、Gemini、Claude、Ollama、Deepseekなど、多数のLLMプロバイダーからのコード補完を提供。nvim-cmp、blink.cmpおよびvirtual-textフロントエンドをサポート。
- [yetone/avante.nvim](https://github.com/yetone/avante.nvim) - Cursor AI IDEのようにコードと自然言語でやり取りできる。
- [Kurama622/llm.nvim](https://github.com/Kurama622/llm.nvim) - 無料の大規模言語モデル（LLM）をサポートし、LLMとの相互作用を実行するコマンドを提供。
- [3v0k4/exit.nvim](https://github.com/3v0k4/exit.nvim) - LLM（大規模言語モデル）にVimコマンドを書くようにプロンプトを送信。
- [k2589/LLuMinate.nvim](https://github.com/k2589/lluminate.nvim) - LSPのhover情報をクリップボードに追加し、LLMのコンテキストを豊かにする。
- [milanglacier/yarepl.nvim#aider-extensions](https://github.com/milanglacier/yarepl.nvim/blob/main/extensions/README.md) - [aider-chat](https://aider.chat)との統合、TUI AIコードアシスタント。
- [Davidyz/VectorCode](https://github.com/davidyz/vectorcode) - リポジトリレベルのRAGを活用し、LLM体験を強化。
- [dlants/magenta.nvim](https://github.com/dlants/magenta.nvim) - コーディングアシスタントを活用してチャットとコード生成を行う。Aider、Cursor、WindsurfなどのAI/LLMエージェントがコードを探索・編集できるツールを提供。
- [Flemma-Dev/flemma.nvim](https://github.com/Flemma-Dev/flemma.nvim) - 雑な入力（会議の録音、要約、PDF、メールのやり取り）を洗練された文書に変換し、多数の反復処理を行い、同じ草案に対して別のモデルから二度目の意見を得、その結果を`.chat`ファイルに保存する。
- [heilgar/nochat.nvim](https://github.com/heilgar/nochat.nvim) - Ollama、Anthropic（Claude）、ChatGPTなど複数のAIプロバイダーを活用した、Cursorのような自然言語生成体験。
- [julwrites/llm-nvim](https://github.com/julwrites/llm-nvim) - [LLM](https://github.com/simonw/llm)ツールとの包括的な統合
- [azorng/goose.nvim](https://github.com/azorng/goose.nvim) - [goose](https://block.github.io/goose)とのシームレスな統合 - エディタを離さずに強力なAIアグエントと作業できます
- [mozanunal/sllm.nvim](https://github.com/mozanunal/sllm.nvim) - Simon WillisonのLLM CLIを活用したエディタ内チャット：Markdownバッファにストリーミングレスポンスを表示し、豊かなコンテキスト（ファイル、URL、選択範囲、診断、シェル出力）を管理し、モデルの切り替えをインタラクティブに実行し、トークン使用量の統計を確認できる。
- [chatvim/chatvim.nvim](https://github.com/chatvim/chatvim.nvim) - xAI、OpenAIおよびAnthropicのAIモデルを使ってMarkdownファイルとチャットを行う。
- [3ZsForInsomnia/code-companion-picker](https://github.com/3ZsForInsomnia/code-companion-picker) - CodeCompanionのプロンプトとスキル（OpenSkillsを使用）のプレビュー用のSnacks pickerの統合
- [3ZsForInsomnia/vs-code-companion](https://github.com/3ZsForInsomnia/vs-code-companion) - VSCodeのMarkdownプロンプトをCodeCompanionにインポートするツール
- [3ZsForInsomnia/token-count.nvim](https://github.com/3ZsForInsomnia/token-count.nvim) - 現在のバッファのトークン数を表示する機能、LualineおよびNeoTreeとの統合
- [nishu-murmu/cursor-inline](https://github.com/nishu-murmu/cursor-inline) - カーソルスタイルのインラインAI編集。コードを選択し、変更内容を説明することで、即座にハイライトされた編集を表示し、受け入れまたは拒否できる——Cursorのインラインワークフローに類似。
- [alsi-lawr/agent-term.nvim](https://github.com/alsi-lawr/agent-term.nvim) - ターミナルエージェントUIで、永続的なビュー、軽量のホックベースのエディタコンテキスト、そして任意のネイティブAI TUI用の拡張可能なプリセットを提供。
- [ishiooon/codex.nvim](https://github.com/ishiooon/codex.nvim) - Codex IDE統合（APIキー不要）
- [nickjvandyke/opencode.nvim](https://github.com/nickjvandyke/opencode.nvim) - OpenCode AIアシスタント統合
- [taigrr/neocrush.nvim](https://github.com/taigrr/neocrush.nvim) - Crush AIコードアシスタントとの統合、編集ハイライト、自動フォーカス、Telescope対応、ターミナルおよびバージョン管理をサポート。
- [zgs225/pi2.nvim](https://github.com/zgs225/pi2.nvim) - [pi](https://pi.dev)コードアグエント向けのフロントエンド。エディタ内チャット、差分の確認、セッションツリーのナビゲーション、拡張プロンプトを提供

[**⬆ 目次へ戻る**](#contents)


## プログラミング言語対応

- [alessio-vivaldelli/java-creator-nvim](https://github.com/alessio-vivaldelli/java-creator-nvim) - インタラクティブなJavaファイル作成機能。自動パッケージ検出をサポートし、クラス、インターフェース、エnum、レコード、抽象クラスを含む。
- [Julian/lean.nvim](https://github.com/Julian/lean.nvim) - [Lean Theorem Prover](https://leanprover.github.io/)のサポート
- [nvim-flutter/flutter-tools.nvim](https://github.com/nvim-flutter/flutter-tools.nvim) - ネイティブLSPを使用してFlutterおよびDartアプリケーションを構築。
- [brendalf/mix.nvim](https://github.com/brendalf/mix.nvim) - Mix（Elixirから）のラッパープラグイン。
- [AckslD/swenv.nvim](https://github.com/AckslD/swenv.nvim) - Pythonの仮想環境を即座に切り替えられる、小さなプラグイン。
- [gennaro-tedesco/nvim-jqx](https://github.com/gennaro-tedesco/nvim-jqx) - JSONファイルに対するインタラクティブなインターフェース。
- [nanotee/sqls.nvim](https://github.com/nanotee/sqls.nvim) - SQLデータベース接続プラグイン＋LSPクライアント。
- [dmmulroy/tsc.nvim](https://github.com/dmmulroy/tsc.nvim) - TypeScriptコンパイラ（`tsc`）を用いた非同期プロジェクト全体のTypeチェック。結果はクイックフィックスリストにロードされます
- [dmmulroy/ts-error-translator.nvim](https://github.com/dmmulroy/ts-error-translator.nvim) - Matt PocockのVSCode向け`ts-error-translator`のポート。混乱したTypeScriptエラーをシンプルな英語に変換します
- [chuwy/ucm.nvim](https://github.com/chuwy/ucm.nvim) - [Unison](https://unison-lang.org/)プロジェクトのナビゲーション
- [niuiic/typst-preview.nvim](https://github.com/niuiic/typst-preview.nvim) - Typstドキュメントのプレビュー、ファイル変更への反応。
- [chomosuke/typst-preview.nvim](https://github.com/chomosuke/typst-preview.nvim) - ブラウザ上でTypstドキュメントをプレビューし、各キー入力で即時更新、コードとプレビューの間を跨いでジャンプ。
- [quarto-dev/quarto-nvim](https://github.com/quarto-dev/quarto-nvim) - [Quarto](https://quarto.org/)ドキュメントとの作業ツール
- [iabdelkareem/csharp.nvim](https://github.com/iabdelkareem/csharp.nvim) - .NET開発者向けの開発体験を強化。
- [neolooong/whichpy.nvim](https://github.com/neolooong/whichpy.nvim) - LSPを再起動せずにPythonインタープリタを切り替え。
- [nvim-java/nvim-java](https://github.com/nvim-java/nvim-java) - 快適なJava開発体験に必要なすべての機能。
- [clang-engineer/jvm-env.nvim](https://github.com/clang-engineer/jvm-env.nvim) - 主要バージョンごとにインストールされたJDKを自動検出、jdtlsおよびGradleにそれぞれ環境変数を設定。
- [artur-shaik/jc.nvim](https://github.com/artur-shaik/jc.nvim) - 外部管理された`jdtls`上に構築されたJavaプロダクティビティレイヤー。クラス作成、コード生成、検索によるアノテーション、リファクタリング、neotestテストランナー、および`gradle`と`maven`向けのタスクランナーを含む
- [kiyoon/python-import.nvim](https://github.com/kiyoon/python-import.nvim) - Tree-sitter、LSPなどを活用したPythonのインポート宣言を追加
- [kiyoon/haskell-scope-highlighting.nvim](https://github.com/kiyoon/haskell-scope-highlighting.nvim) - 変数スコープを考慮したHaskellのシンタックスハイライト。ドーカス・クロックフォード教授による「Context Coloring」をインスピレーションとして作成。
- [apyra/nvim-unity.nvim](https://github.com/apyra/nvim-unity) - OmniSharpを介してUnity用のエディタサポートを提供。完全なLSPサポートを備える。
- [atomicptr/defold.nvim](https://github.com/atomicptr/defold.nvim) - Defoldゲームエンジン用のバッテリー付き開発環境。
- [onlyati/quadlet-lsp.nvim](https://github.com/onlyati/quadlet-lsp.nvim) - Podman Quadletファイルに対する補完、ホバーおよびその他の言語サーバー機能を提供。
- [leblocks/hopcsharp.nvim](https://github.com/leblocks/hopcsharp.nvim) - C#リポジトリにおいてLSPなしのナビゲーションおよび型階層情報の提供。
- [AnsonH/copy-python-path.nvim](https://github.com/AnsonH/copy-python-path.nvim) - Pythonシンボルの参照またはインポートパスをコピー。
- [J-Cowsert/classlayout.nvim](https://github.com/J-Cowsert/classlayout.nvim) - C/C++のstructおよびclassのメモリレイアウト（フィールドオフセット、パディング、アライメント）を浮動ウィンドウで可視化。
- [awsum-lang/awsum-nvim](https://github.com/awsum-lang/awsum-nvim) - [Awsum](https://awsum-lang.org)プログラミング言語向けのLSPクライアントとTree-sitterハイライト
- [cuducos.me/yaml.nvim](https://tangled.org/cuducos.me/yaml.nvim) - YAMLファイルとの対話に必要なユーティリティを提供。
- [mosheavni/yaml-companion.nvim](https://github.com/mosheavni/yaml-companion.nvim) - YAMLファイル向けの`yaml-language-server`によるスキーマ検出と選択。組み込みのKubernetesサポートを含む
- [gbprod/phpactor.nvim](https://github.com/gbprod/phpactor.nvim) - [phpactor](https://github.com/phpactor/phpactor)のLua版
- [ta-tikoma/php.easy.nvim](https://github.com/ta-tikoma/php.easy.nvim) - PHP開発における支援メソッド：クラス、定数、メソッド、プロパティの作成、エンティティの簡単なコピーおよび削除。
- [TheLeoP/powershell.nvim](https://github.com/TheLeoP/powershell.nvim) - 第一クラスのPowerShellエディタ統合。LSP、デバッグ（nvim-dapが必要）、$psEditor APIのサポートを含む。
- [Who5673/who5673-nasm](https://github.com/Who5673/who5673-nasm) - スニペットを活用し、Netwide Assembler言語の開発をより速く、より便利に支援。
- [sachinsenal0x64/hot.nvim](https://github.com/sachinsenal0x64/hot.nvim) - どんなプログラミング言語にも対応するホットリロード機能。
- [simonwinther/cppman.nvim](https://github.com/simonwinther/cppman.nvim) - cppmanからC++ドキュメントを検索し、浮動ウィンドウに結果を表示。高速検索のためにローカルSQLiteインデックスをバックアップ。
- [redpierrot/ballerina.nvim](https://github.com/redpierrot/ballerina.nvim) - Ballerina言語向けの文法ハイライト、LSP、デバッグ、パッケージ認識による保存時フォーマット、自動インデント、および`bal`実行/テスト/ビルドコマンド

### Go

- [romus204/go-tagger.nvim](https://github.com/romus204/go-tagger.nvim) - Goファイルにおけるstructフィールドタグを管理するための軽量プラグイン。
- [ray-x/go.nvim](https://github.com/ray-x/go.nvim) - LSPおよびTree-sitterをベースにしたGolangプラグイン。
- [crusj/structrue-go.nvim](https://github.com/crusj/structrue-go.nvim) - Golangシンボル情報のより構造的な表示。
- [crispgm/nvim-go](https://github.com/crispgm/nvim-go) - Golang開発プラグインの最小実装。
- [olexsmir/gopher.nvim](https://github.com/olexsmir/gopher.nvim/) - Golang開発を最も簡単にするためのプラグイン。
- [rafaelsq/nvim-goc.lua](https://github.com/rafaelsq/nvim-goc.lua) - Golangコードカバレッジをバッファにハイライト。
- [crusj/hierarchy-tree-go.nvim](https://github.com/crusj/hierarchy-tree-go.nvim) - Golangとの`callHierarchy`UIツリーの統合
- [yanskun/gotests.nvim](https://github.com/yanskun/gotests.nvim) - Goテストを簡単にする[gotests](https://github.com/cweill/gotests)
- [maxandron/goplements.nvim](https://github.com/maxandron/goplements.nvim) - Goの構造体とインターフェースの実装を可視化する
- [Snikimonkd/cmp-go-pkgs](https://github.com/Snikimonkd/cmp-go-pkgs) - Goパッケージ名のソースを比較する
- [Yu-Leo/gosigns.nvim](https://github.com/Yu-Leo/gosigns.nvim) - Goのヒント：構造体、インターフェース、メソッドの実装とコメントを可視化する
- [Yu-Leo/cmp-go-pkgs](https://github.com/Yu-Leo/cmp-go-pkgs) - Goパッケージのインポート名を提供するソースを比較する
- [fredrikaverpil/godoc.nvim](https://github.com/fredrikaverpil/godoc.nvim) - Goパッケージやシンボルのフュージー検索とドキュメントの表示
- [sjclayton/goplexity.nvim](https://github.com/sjclayton/goplexity.nvim) - Golangの時間/空間（Big-O）複雑度を分析する

### ウェブ開発

- [rest-nvim/rest.nvim](https://github.com/rest-nvim/rest.nvim) - Luaで書かれた高速HTTPクライアント
- [lima1909/resty.nvim](https://github.com/lima1909/resty.nvim) - 高速かつ使いやすいHTTP-Rest-クライアント
- [mistweaverco/kulala.nvim](https://github.com/mistweaverco/kulala.nvim) - 極小のHTTPクライアントインターフェース
- [heilgar/nvim-http-client](https://github.com/heilgar/nvim-http-client) - IntelliJ（JetBrains）のHTTPクライア及構文と互換性のある使いやすいHTTPクライアント
- [farias-hecdin/CSSVarViewer](https://github.com/farias-hecdin/CSSVarViewer) - CSS変数の内容を仮想テキストで簡単に可視化する
- [farias-hecdin/CSSVarHighlight](https://github.com/farias-hecdin/CSSVarHighlight) - CSS変数で定義した色を、`mini.hipatterns`のサポートにより迅速にハイライト
- [mawkler/jsx-element.nvim](https://github.com/mawkler/jsx-element.nvim) - JSX/TSXのテキストオブジェクトと移動操作
- [BibekBhusal0/nvim-shadcn](https://github.com/BibekBhusal0/nvim-shadcn) - Telescopeを使ってShadcn UIコンポーネントを簡単に追加する
- [azratul/expose-localhost.nvim](https://github.com/azratul/expose-localhost.nvim) - cloudflaredまたはngrokでローカルサーバーをインターネットに公開する
- [yelog/i18n.nvim](https://github.com/yelog/i18n.nvim) - LSP対応による`Vue`、`React`、`Java`などへの国際化（i18n）管理
- [Kenzo-Wada/boundary.nvim](https://github.com/Kenzo-Wada/boundary.nvim) - JSXコード内に`'use client'`マーカーを表示し、クライアントコンポーネントの境界を可視化
- [abidibo/nvim-httpyac](https://github.com/abidibo/nvim-httpyac) - `httpYac`との統合を提供
- [rodrigoscc/nurl.nvim](https://github.com/rodrigoscc/nurl.nvim) - 純粋なLuaで定義されたリクエストを持つHTTPクライアント
- [cjodo/convert.nvim](https://github.com/cjodo/convert.nvim) - CSS単位変換をサポートする
- [tednguyendev/recent_rails.nvim](https://github.com/tednguyendev/recent_rails.nvim) - Telescopeによる最近のRailsアクション、ビュー、エラーの選択肢
- [ankushbhagats/liveserver.nvim](https://github.com/ankushbhagats/liveserver.nvim) - スマートコマンドとクリック可能なlualineスイッチでLive-serverを統合する
- [harukikuri/viteenv.nvim](https://github.com/harukikuri/viteenv.nvim) - プロジェクト独自のによって解決された値を、モードごとにinlineで表示する変数の有効値を表示 `import.meta.env` `Vite`

### Markdown・LaTeX

- [iamcco/markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim) - 現代的なブラウザでMarkdownをプレビューし、スクロールを同期させ、柔軟な設定を可能にする
- [davidgranstrom/nvim-markdown-preview](https://github.com/davidgranstrom/nvim-markdown-preview) - pandocとlive-serverをジョブコントロールAPIを使ってブラウザでMarkdownプレビューを表示
- [jghauser/auto-pandoc.nvim](https://github.com/jghauser/auto-pandoc.nvim) - YAMLブロックを活用した簡単なpandoc変換
- [jghauser/follow-md-links.nvim](https://github.com/jghauser/follow-md-links.nvim) - Enterキーで内部のMarkdownリンクに移動
- [jubnzv/mdeval.nvim](https://github.com/jubnzv/mdeval.nvim) - Markdownドキュメント内のコードブロックを評価
- [kdheepak/panvimdoc](https://github.com/kdheepak/panvimdoc) - pandocからvimdocへのGitHubアクション
- [frabjous/knap](https://github.com/frabjous/knap) - Markdown、LaTeXなどに自動更新型プレビューを生成するプラグイン
- [jbyuki/carrot.nvim](https://github.com/jbyuki/carrot.nvim) - Markdown評価用Luaコードブロック
- [Nedra1998/nvim-mdlink](https://github.com/Nedra1998/nvim-mdlink) - Markdownリンクの作成と追跡を簡略化
- [nfrid/markdown-togglecheck](https://github.com/nfrid/markdown-togglecheck) - Tree-sitterを用いてタスクリストチェックボックスを切り替え
- [toppair/peek.nvim](https://github.com/toppair/peek.nvim) - ウェブビューウィンドウ内でMarkdownをプレビュー
- [yaocccc/nvim-hl-mdcodeblock.lua](https://github.com/yaocccc/nvim-hl-mdcodeblock.lua) - Tree-sitterを用いてMarkdownコードブロックをハイライト
- [kiran94/edit-markdown-table.nvim](https://github.com/kiran94/edit-markdown-table.nvim) - Tree-sitterを用いてMarkdownテーブルを編集
- [richardbizik/nvim-toc](https://github.com/richardbizik/nvim-toc) - Markdownファイルの目次を簡単に生成
- [Zeioth/markmap.nvim](https://github.com/Zeioth/markmap.nvim) - Markdownをマインドマップとして可視化
- [tadmccorkle/markdown.nvim](https://github.com/tadmccorkle/markdown.nvim) - Markdownファイル向けに設定可能なツール、包括的にインラインスタイル、リンク、ナビゲーションキーマップ、目次、リスト編集の改善など
- [mpas/marp-nvim](https://github.com/mpas/marp-nvim) - マーカーを使用してマーカーで表示するMarkdownを用意しています。 [Marp](https://marp.app/)
- [MeanderingProgrammer/render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim) - Markdownファイルを直接閲覧する際の体験を向上
- [ChuufMaster/markdown-toc](https://github.com/ChuufMaster/markdown-toc) - 任意のMarkdownファイルから任意のMarkdownファイルでTOCを生成し、見出しのレベルをカスタマイズ可能で、エモジ対応、GitHubでの相対パスでの動作を確保
- [OXY2DEV/markview.nvim](https://github.com/OXY2DEV/markview.nvim) - ハッキング可能なMarkdown、Typst、LaTeX、HTML（インライン）およびYAMLレンダラー
- [gunasekar/markview-smart-tables.nvim](https://github.com/gunasekar/markview-smart-tables.nvim) - 幅の広いMarkdownテーブルを自動調整し、文字を折り返すことができる `markview.nvim`。
- [Kicamon/markdown-table-mode.nvim](https://github.com/Kicamon/markdown-table-mode.nvim) - vim-table-modeに類するMarkdownフォーマットプラグインだがLuaで記述
- [SCJangra/table-nvim](https://github.com/SCJangra/table-nvim) - タイプしながらテーブルをフォーマットするMarkdownテーブルエディタ
- [timantipov/md-table-tidy.nvim](https://github.com/timantipov/md-table-tidy.nvim) - シンプルなMarkdownテーブ及のフォーマット
- [nvim-telescope/telescope-bibtex.nvim](https://github.com/nvim-telescope/telescope-bibtex.nvim) - テレスコープを拡張して、BibTeXエントリをあなたのTeXファイルに検索・貼り付けできるようにする。
- [Thiago4532/mdmath.nvim](https://github.com/Thiago4532/mdmath.nvim) - kittyグラフィックスプロトコルを用いたマークダウン式式のプレビュー機能。
- [OXY2DEV/markdoc.nvim](https://github.com/OXY2DEV/markdoc.nvim) - Tree-sitterベースの `markdown -> vimdoc` コンバーター。
- [YousefHadder/markdown-plus.nvim](https://github.com/YousefHadder/markdown-plus.nvim) - リスト、リンク、TOCなどをサポートし、シンプルで高速なキーマップを備えたマークダウンファイルの完全な編集体験を提供。
- [Myzel394/easytables.nvim](https://github.com/Myzel394/easytables.nvim) - ライブプレビューと便利なヘルパーを備えた、マークダウンテーブルの挿入と編集を簡単に実行。
- [dominic-righthere/markdown-pipetable.nvim](https://github.com/dominic-righthere/markdown-pipetable.nvim) - セルナビゲーション、視覚選択、行・列操作、CSV/TSV変換をサポートするインタラクティブな、幅に合わせたインラインマークダウンテーブルエディタ。
- [tttol/md-outline.nvim](https://github.com/tttol/md-outline.nvim) - マークダウンファイルに対して自動的にアウトラインを表示。
- [rogue-87/inlyne.nvim](https://github.com/rogue-87/inlyne.nvim) - [inlyne](https://github.com/Inlyne-Project/inlyne) Markdown閲覧機能のラッパー。
- [Prgebish/sigil.nvim](https://github.com/Prgebish/sigil.nvim) - Emacsの `prettify-symbols-mode` の実装。LaTeXおよびTypstファイルの編集中に、テキストパターンをUnicode記号に視覚的に置き換える。
- [satozawa/graft.nvim](https://github.com/satozawa/graft.nvim) - ブレットリストのツリー構造編集をサポートし、サブツリーのテキストオブジェクト、Alt+hjklナビゲーション、構造操作を提供。
- [kibi2/tirenvi.nvim](https://github.com/kibi2/tirenvi.nvim) - マークダウンおよびCSVテーブ、損失なしの往復編集を可能にする。
- [itsfernn/vimtex-follow](https://github.com/itsfernn/vimtex-follow) - PDF閲覧器とカーソル位置を同期させる「フォローモード」を切り替えられるようにする。

[**⬆ 目次へ戻る**](#contents)


## 言語

- [potamides/pantran.nvim](https://github.com/potamides/pantran.nvim) - インタラクティブな翻訳ウィンドウでテキストを翻訳。
- [niuiic/translate.nvim](https://github.com/niuiic/translate.nvim) - シェルコマンドを介して任意の翻訳エンジンを呼び出す。
- [tanloong/interlaced.nvim](https://github.com/tanloong/interlaced.nvim) - 双言語並列テキストの並びを整えるためのヘルプを提供。
- [sontungexpt/vietnamese.nvim](https://github.com/sontungexpt/vietnamese.nvim) - ベトナム語入力法エンジンで、挿入モードでベトナム語を自然に入力できるようにする。
- [doodleEsc/translator.nvim](https://github.com/doodleEsc/translator.nvim) - 強力なAIによる翻訳プラグイン。OpenAIのGPTモデルを活用し、自然言語理解を備えた高品質な翻訳を提供。
- [kiyoon/Korean-IME.nvim](https://github.com/kiyoon/Korean-IME.nvim) - OSに依存しない韓国語入力法で、英語入力を韓国語に即座に変換。
- [bennorichters/taal.nvim](https://github.com/bennorichters/taal.nvim) - LLMを用いて、複数言語の文法やスペルミスを改善。
- [walkersumida/deepl.nvim](https://github.com/walkersumida/deepl.nvim) - DeepL APIを用いて、複数出力モード（float、replace、append）でテキストを翻訳。
- [acidsugarx/babel.nvim](https://github.com/acidsugarx/babel.nvim) - Google翻訳を用いて、非同期サポート、float表示、マルチピッカー統合でテキストを翻訳。
- [noir4y/comment-translate.nvim](https://github.com/noir4y/comment-translate.nvim) - オンラインおよびローカルのLLMや外部翻訳ツールを用いて、コードコメントや文字列を翻訳。

[**⬆ 目次へ戻る**](#contents)


## 構文

- [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) - Tree-sitterの設定と抽象化層。
- [romus204/tree-sitter-manager.nvim](https://github.com/romus204/tree-sitter-manager.nvim) - ネオバイム 0.12以降向けの軽量ツリーサイターパーサーマネージャー
- [nvim-treesitter/nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) - Tree-sitterクエリを使って独自のテキストオブジェクトを作成
- [RRethy/nvim-treesitter-textsubjects](https://github.com/RRethy/nvim-treesitter-textsubjects) - 場所と文法に配慮したテキストオブジェクトで「あなたが意図したことを実現」
- [kylechui/nvim-surround](https://github.com/kylechui/nvim-surround) - デリミターペアの追加・変更・削除を可能にするプラグイン
- [nvim-mini/mini.nvim#mini.surround](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-surround.md) - `mini.nvim` のテキスト周囲操作モジュール（追加、削除、置き換え、検索、ハイライト）。ドット繰り返し、異なる検索方法、「最後」／「次」の拡張マッピング、Tree-sitter統合などもサポート。
- [Hdoc1509/gh-actions.nvim](https://github.com/Hdoc1509/gh-actions.nvim) - GitHub Actions向けのTree-sitter文法とLSPクエリ設定
- [m-demare/hlargs.nvim](https://github.com/m-demare/hlargs.nvim) - Tree-sitterを使って引数の定義と使用をハイライト
- [calops/hmts.nvim](https://github.com/calops/hmts.nvim) - Home Manager Nixファイル向けのTree-sitterクエリ
- [LhKipp/nvim-nu](https://github.com/LhKipp/nvim-nu) - nushell言語向けの基本的なエディタサポート
- [desdic/agrolens.nvim](https://github.com/desdic/agrolens.nvim) - TelescopeまたはFZFを使ってTree-sitterノードをナビゲート
- [fei6409/log-highlight.nvim](https://github.com/fei6409/log-highlight.nvim) - 汎用ログ構文ハイライトとログファイルタイプ管理サポート
- [MeanderingProgrammer/treesitter-modules.nvim](https://github.com/MeanderingProgrammer/treesitter-modules.nvim) - nvim-treesitterマスターブランチからのオリジナルモジュール
- [BibekBhusal0/tree-hierarchy.nvim](https://github.com/BibekBhusal0/tree-hierarchy.nvim) - Tree-sitterに基づいてテキストを編集およびナビゲート
- [Sang-it/fluoride](https://github.com/Sang-it/fluoride) - 構造的なコードエディタ。Tree-sitterに基づき浮動ウィンドウからコード宣言を表示・並び替え・リネーム・アノテーション
- [bird-chinese-community/BIRD.nvim](https://github.com/bird-chinese-community/BIRD.nvim) - BIRD 2およびBIRD 3設定ファイル向けの文法ハイライト、自動ファイルタイプ検出、ファイルタイプごとの編集サポート

[**⬆ 目次へ戻る**](#contents)


## スニペット

- [L3MON4D3/LuaSnip](https://github.com/L3MON4D3/LuaSnip) - Luaで書かれたスニペットエンジン
- [nvim-mini/mini.nvim#mini.snippets](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-snippets.md) - `mini.nvim` のスニペット管理および拡張モジュール。LSPスニペット構文、柔軟なローダー、フュージー前綴マッチング、インタラクティブ選択、豊かな可視化を持つスニペットセッションなどもサポート。
- [smjonas/snippet-converter.nvim](https://github.com/smjonas/snippet-converter.nvim) - 最も一般的なスニペットフォーマット間のスニペット変換と、Luaコードの数行でそのスニペットを変更
- [dcampos/nvim-snippy](https://github.com/dcampos/nvim-snippy) - Luaで記述された [vim-snippets](https://github.com/honza/vim-snippets) スニペットプラグイン。
- [ellisonleao/carbon-now.nvim](https://github.com/ellisonleao/carbon-now.nvim) - ターミナルから美しいコードスニペットを作成
- [TobinPalmer/rayso.nvim](https://github.com/TobinPalmer/rayso.nvim) - [ray.so](https://ray.so) を使用してコードスニペットを作成。
- [mrcjkb/haskell-snippets.nvim](https://github.com/mrcjkb/haskell-snippets.nvim) - LuaSnipでHaskellスニペットを提供。Tree-sitterとLSPを活用
- [rafamadriz/friendly-snippets](https://github.com/rafamadriz/friendly-snippets) - さまざまな言語向けの事前設定済みスニペットセット
- [cvigilv/esqueleto.nvim](https://github.com/cvigilv/esqueleto.nvim) - 新しいファイルを作成する際のシンプルなテンプレート
- [chrisgrieser/nvim-scissors](https://github.com/chrisgrieser/nvim-scissors) - 自動編集とスニペットの作成
- [guilherme-puida/tesoura.nvim](https://github.com/guilherme-puida/tesoura.nvim) - ネイティブスニペットAPIを活用した柔軟なスニペットシステム

[**⬆ 目次へ戻る**](#contents)


## レジスター

- [bfredl/nvim-miniyank](https://github.com/bfredl/nvim-miniyank) - デフォルトマッピングのないkillringに類するプラグイン
- [gennaro-tedesco/nvim-peekup](https://github.com/gennaro-tedesco/nvim-peekup) - Vimレジスタとのダイナミックな相互作用
- [tversteeg/registers.nvim](https://codeberg.org/fosk/registers.nvim) - Vimレジスタの非侵襲的かつ最小限のプレビュー
- [acksld/nvim-neoclip.lua](https://github.com/AckslD/nvim-neoclip.lua) - Telescopeとの統合を備えたクリップボードマネージャー
- [tenxsoydev/karen-yank.nvim](https://github.com/tenxsoydev/karen-yank.nvim) - delete, cut, yankマッピングにより、より意図的なレジスタ処理
- [desdic/macrothis.nvim](https://github.com/desdic/macrothis.nvim) - マクロ／レジスタの保存と読み込み
- [kr40/nvim-macros](https://github.com/kr40/nvim-macros) - マクロの保存・読み込みを簡単に行える、バックアップとフォーマットオプション付き

[**⬆ 目次へ戻る**](#contents)


## マーク

- [cbochs/grapple.nvim](https://github.com/cbochs/grapple.nvim) - タグ、カーソル追跡、重要なプロジェクトファイルへの即時ナビゲーションを提供
- [chentoast/marks.nvim](https://github.com/chentoast/marks.nvim) - Vimマーカーの閲覧と相互作用におけるより良いユーザーエクスペリエンス
- [ThePrimeagen/harpoon](https://github.com/ThePrimeagen/harpoon/tree/harpoon2) - プロジェクトごとに自動更新・編集可能なマーカーユーティリティによる高速ファイルナビゲーション
- [otavioschwanck/arrow.nvim](https://github.com/otavioschwanck/arrow.nvim) - harpoonに似ているが、異なるUXと1キーでの操作、ステータスライン対応
- [ofirgall/open.nvim](https://github.com/ofirgall/open.nvim) - カスタムオープンヤーで現在の単語を開く、GitHubのショートハンドなど
- [LeonHeidelbach/trailblazer.nvim](https://github.com/LeonHeidelbach/trailblazer.nvim) - TrailBlazerはスタックベースのマーカーシステムを導入し、プロジェクト全体のマーカーを活用した、まったく新しい動的で非常に高速なワークフローを実現
- [tomasky/bookmarks.nvim](https://github.com/tomasky/bookmarks.nvim) - Luaで記述されたグローバルファイルストレージを備えたブックマーク
- [LintaoAmons/bookmarks.nvim](https://github.com/LintaoAmons/bookmarks.nvim) - あなたの新しいブックマークオプション：シンプルでありながら強力
- [heilgar/bookmarks.nvim](https://github.com/heilgar/bookmarks.nvim) - Telescopeとの統合とSQLiteストレージを活用した行ブックマーク管理
- [desdic/marlin.nvim](https://github.com/desdic/marlin.nvim) - harpoonに似ているが、プロジェクトパス、スプリット対応、UIなしといった違いがある
- [fnune/recall.nvim](https://github.com/fnune/recall.nvim) - リカールはマーカーの使用をグローバルマーカーに絞ることで、その使いやすさと可視性・ナビゲーション性を向上させる
- [niuiic/track.nvim](https://github.com/niuiic/track.nvim) - 強化されたマーカーに説明を付加。ソースコードの読み方を追跡するための思考プロセスを記録。
- [tristone13th/lspmark.nvim](https://github.com/tristone13th/lspmark.nvim) - LSPに基づくプロジェクトごとのマーカーで、永続的なストレージを提供。
- [EvWilson/spelunk.nvim](https://github.com/EvWilson/spelunk.nvim) - 友好的なUIでスタック構造をもつマーカーを作成・管理。
- [2KAbhishek/markit.nvim](https://github.com/2KAbhishek/markit.nvim) - グローバルマーカーとプロジェクト全体のマーカーを改善し、ファイル間のナビゲーションを迅速に可能にする。
- [zongben/navimark.nvim](https://github.com/zongben/navimark.nvim) - Telescopeと連携した、簡単で強力なマーカー管理ツール。
- [Beargruug/skipper.nvim](https://github.com/Beargruug/skipper.nvim/) - ファイル内の関数間を簡単に移動できる。
- [mohseenrm/marko.nvim](https://github.com/mohseenrm/marko.nvim) - 背景では、複数プロジェクト間のグローバルマーカー管理を実現。
- [y3owk1n/warp.nvim](https://github.com/y3owk1n/warp.nvim) - シンプルなハープーン（Harpoon）の代替ツールで、ファイル間のマーカーとナビゲーションに焦点を当てる。
- [walkersumida/fusen.nvim](https://github.com/walkersumida/fusen.nvim) - Gitブランチごとに、ホバー注釈とTelescope統合されたスタイックノートマーカー。
- [markgandolfo/dartboard.nvim](https://github.com/markgandolfo/dartboard.nvim) - ファイルをマーカーし、迅速にアクセスできる。ハープーンとラッソ（Lasso）を参考にした設計。
- [dimtion/guttermarks.nvim](https://github.com/dimtion/guttermarks.nvim) - バッファのギャター（gutter）にマーカーを表示。
- [adithyasource/spearmint.nvim](https://github.com/adithyasource/spearmint.nvim) - 軽量なハープーン風マーカーで、ターミナル対応を実現。

[**⬆ 目次へ戻る**](#contents)


## 検索

- [2KAbhishek/seeker.nvim](https://github.com/2KAbhishek/seeker.nvim) - プログレッシブファイルサーチツール。`snacks.nvim` をベースに構築。
- [wurli/visimatch.nvim](https://github.com/wurli/visimatch.nvim) - 視覚モードで現在選択されているテキストに一致するすべてのテキストにハイライトを追加。
- [kevinhwang91/nvim-hlslens](https://github.com/kevinhwang91/nvim-hlslens) - 検索された情報の確認をより効果的にし、一致したインスタンスにスムーズにジャンプできる。
- [rktjmp/highlight-current-n.nvim](https://github.com/rktjmp/highlight-current-n.nvim) - カーソル位置にある / 、 ? 、 \* の現在のマッチをnまたはNでハイライトし、その後は無視する。
- [ray-x/sad.nvim](https://github.com/ray-x/sad.nvim) - Space Age seD統合。バッチファイル編集ツール、[sad](https://github.com/ms-jpq/sad) のラッパー。
- [s1n7ax/nvim-search-and-replace](https://github.com/s1n7ax/nvim-search-and-replace) - 現在の作業ディレクトリから複数ファイルに対して検索と置換を行う。
- [AckslD/muren.nvim](https://github.com/AckslD/muren.nvim/) - インタラクティブUIを介した複数の置換。
- [nvim-pack/nvim-spectre](https://github.com/nvim-pack/nvim-spectre) - 検索と置換パネル。
- [nvimdev/hlsearch.nvim](https://github.com/nvimdev/hlsearch.nvim) - nまたはNを使用した際に、検索ハイライトを自動削除し、再ハイライトする。
- [mangelozzi/rgflow.nvim](https://github.com/mangelozzi/rgflow.nvim) - RipGrepの結果を編集可能なQuickfixリストに迅速に表示し、RipGrepのCLIを学習する。
- [duane9/nvim-rg](https://github.com/duane9/nvim-rg) - リップグレップを非同期で実行し、結果をクイックフィックスウィンドウに表示する。
- [FabianWirth/search.nvim](https://github.com/FabianWirth/search.nvim) - 異なるテレスコープピッカーにタブを提供する。
- [backdround/improved-search.nvim](https://github.com/backdround/improved-search.nvim) - 検索機能を追加する。
- [polirritmico/telescope-lazy-plugins.nvim](https://github.com/polirritmico/telescope-lazy-plugins.nvim) - lazy.nvim仕様のプラグイン設定にアクセスできるテレスコープピッカーを提供する。
- [MagicDuck/grug-far.nvim](https://github.com/MagicDuck/grug-far.nvim) - バッファベースのリアルタイム検索・置き換え。`rg` のすべてのフラグを活用。Grug風。
- [chrisgrieser/nvim-rip-substitute](https://github.com/chrisgrieser/nvim-rip-substitute) - 現在のバッファまたはワークスペースでの検索・置換を、インクリメンタルプレビュー、便利なUI、および現代的な正規表現構文で実行する。
- [wsdjeg/flygrep.nvim](https://github.com/wsdjeg/flygrep.nvim) - 浮動ウィンドウで非同期にテキストを検索する。
- [prochri/telescope-all-recent.nvim](https://github.com/prochri/telescope-all-recent.nvim) - 任意のテレスコープピッカーに使用可能な頻度と最近使用順のソート機能。
- [mahyarmirrashed/search-and-replace.nvim](https://github.com/mahyarmirrashed/search-and-replace.nvim) - 実用的なエンジニア向けのシンプルかつ効果的な検索・置換機能。
- [bravoecho/brook.nvim](https://github.com/bravoecho/brook.nvim) - クイックフィックスリストにレスポンス性とシェルセーフなリップグレップ検索を提供し、n/Nキーでナビゲート可能にする。
- [KieranCanter/candela.nvim](https://github.com/KieranCanter/candela.nvim) - 正規表現パターンを定義して、一致行をハイライトおよび/または分離するようにログを分析する。
- [ankushbhagats/match.nvim](https://github.com/ankushbhagats/match.nvim) - 最小限の浮動検索・置換で、リアルタイムの一致追跡、ナビゲーション、および即時置換を提供する。

[**⬆ 目次へ戻る**](#contents)


## ファジーファインダー

- [nvim-telescope/telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) - Telescope.nvimは、リスト上の高度に拡張可能なフュージー検索ツールであり、非常に [extendable](https://github.com/nvim-telescope/telescope.nvim/wiki/Extensions) です。
- [vijaymarupudi/nvim-fzf](https://github.com/vijaymarupudi/nvim-fzf) - FZFを使用するためのLua API。UIのスピードと使いやすさのために完全な非同期を可能にする。
- [camspiers/snap](https://github.com/camspiers/snap) - 拡張可能なフュージー検索ツール。テレスコープに類似しており、特に大規模コードベースでのグリープ時にパフォーマンスが最適化されている。
- [ibhagwan/fzf-lua](https://github.com/ibhagwan/fzf-lua) - `fzf.vim` のLuaバージョン。高性能で完全に非同期。`nvim-web-devicons`、Gitインジケータ、LSP、quickfix/位置リストなどもサポート。また、fzfバイナリとして [`skim`](https://github.com/lotabout/skim) をサポート。
- [willyelm/pulse.nvim](https://github.com/willyelm/pulse.nvim) - コマンドの単一エントリーポイント。プレフィックスを使って診断、Gitなどに迅速にアクセスできる。
- [jvgrootveld/telescope-zoxide](https://github.com/jvgrootveld/telescope-zoxide) - Telescopeの [zoxide](https://github.com/ajeetdsouza/zoxide) 統合。使用頻度を追跡するスマートディレクトリ選択ツール。
- [nvim-mini/mini.nvim#mini.fuzzy](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-fuzzy.md) - `mini.nvim`のモジュールで、1つの文字列を他の文字列にフュージー一致させるための関数と、高速なテレスコープソート機能を提供する。
- [axkirillov/easypick.nvim](https://github.com/axkirillov/easypick.nvim) - Easypickは、任意のコンソールコマンドからテレスコープピッカーを簡単に作成できる。
- [linrongbin16/fzfx.nvim](https://github.com/linrongbin16/fzfx.nvim) - キーボード入力ごとに更新されるフュージー検索ツール。
- [nvim-mini/mini.nvim#mini.pick](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-pick.md) - `mini.nvim`のモジュールで、汎用的なインタラクティブなブロッキングなしピッカーを提供。1つのウィンドウ設計、トグル可能なプレビュー、柔軟かつ高速なデフォルトマッチなどがある。
- [nvim-mini/mini.nvim#mini.extra](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-extra.md) - `mini.nvim`のモジュールで、そのモジュールに追加機能を提供。20以上の'mini.pick'ピッカー、'mini.ai'テキストオブジェクト、その他を含む。
- [fdschmidt93/telescope-egrepify.nvim](https://github.com/fdschmidt93/telescope-egrepify.nvim) - Telescopeプラグインによる `rg` フラグの改善。`live_grep` での使用。
- [nvim-telescope/telescope-media-files.nvim](https://github.com/nvim-telescope/telescope-media-files.nvim) - Telescopeを使用して、画像、PDF、EPUB、動画、フォントをプレビューする。
- [crispgm/telescope-heading.nvim](https://github.com/crispgm/telescope-heading.nvim) - アスキードoc、マーカード、ヴィムドックなど、さまざまなフォーマットのヘッディング間を切り替えできるテレスコープの拡張
- [bassamsdata/namu.nvim](https://github.com/bassamsdata/namu.nvim) - 柔軟で洗練されたフュージー選択器、LSPシンボルナビゲーターなど
- [folke/snacks.nvim#picker](https://github.com/folke/snacks.nvim/blob/main/docs/picker.md) - エディタをナビゲートするための現代的なフュージー検索ツール
- [dmtrKovalenko/fff.nvim](https://github.com/dmtrKovalenko/fff.nvim) - ファイル選択器で、ファイルインデックスのスタンドアローンネイティブ実装と、タイポに強いフュージーマッチャーを備え、QOL機能、ファイルプレビュー（画像含む）、頻度順、最近のクエリマッチ、近接性、Gitステータスボーナスなど、多くの機能を備えています
- [wsdjeg/picker.nvim](https://github.com/wsdjeg/picker.nvim) - ファイル、ctagsのアウトラインなど、シンプルなフュージー検索ツール
- [juniorsundar/refer.nvim](https://github.com/juniorsundar/refer.nvim) - 邪魔にならないミニマリズムの選択器
- [dtormoen/neural-open.nvim](https://github.com/dtormoen/neural-open.nvim) - 知能的な `snacks.nvim` 選択器。ファイルの次に開きやすいものに順位付けするためのニューラルネットワークを学習。

[**⬆ 目次へ戻る**](#contents)


## ファイルエクスプローラー

- [nvim-tree/nvim-tree.lua](https://github.com/nvim-tree/nvim-tree.lua) - シンプルで高速なファイルエクスプローラツリー
- [luukvbaal/nnn.nvim](https://github.com/luukvbaal/nnn.nvim) - Luaと [nnn](https://github.com/jarun/nnn) を使用したファイルエクスプローラ。
- [tamago324/lir.nvim](https://github.com/tamago324/lir.nvim) - シンプルなファイルエクスプローラ
- [kevinhwang91/rnvimr](https://github.com/kevinhwang91/rnvimr) - シンプルながらも驚異的なファイルエクスプローラ
- [Xuyuanp/yanil](https://github.com/Xuyuanp/yanil) - Yet Another Nerdtree In Lua
- [ms-jpq/chadtree](https://github.com/ms-jpq/chadtree) - ファイルマネージャー。NERDTreeより優れたもの
- [rolv-apneseth/tfm.nvim](https://github.com/Rolv-Apneseth/tfm.nvim) - `fm-nvim` に似たもので、いくつかのポピュラーなターミナルファイルマネージャー（包括 [yazi](https://github.com/sxyazi/yazi)）との統合を提供。
- [nvim-neo-tree/neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) - ファイルシステムや他のツリー構造を、あなたの好みのスタイルで閲覧。サイドバー、フロートウィンドウ、`netrw` スプリットスタイル、またはすべてを一度に表示。
- [theblob42/drex.nvim](https://github.com/TheBlob42/drex.nvim) - シンプルでカスタマイズ可能なLuaによるファイルエクスプローラ
- [SidOfc/carbon.nvim](https://github.com/SidOfc/carbon.nvim) - Luaで書かれたシンプルなディレクトリツリー閲覧ツール
- [kiran94/s3edit.nvim](https://github.com/kiran94/s3edit.nvim) - Amazon S3上のファイルの編集
- [stevearc/oil.nvim](https://github.com/stevearc/oil.nvim) - ファイルシステムをバッファのように編集
- [kelly-lin/ranger.nvim](https://github.com/kelly-lin/ranger.nvim) - [Ranger](https://github.com/ranger/ranger) の統合。
- [mikavilpas/yazi.nvim](https://github.com/mikavilpas/yazi.nvim) - Yaziターミナルファイルマネージャーとの統合
- [simonmclean/triptych.nvim](https://github.com/simonmclean/triptych.nvim) - Rangerにインスパイアされたディレクトリブラウザ
- [nvim-mini/mini.nvim#mini.files](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-files.md) - `mini.nvim` のモジュールで、列ビューを備えたファイルエクスプローラを提供し、テキスト編集によってファイルシステムを操作できる。ディレクトリ内およびディレクトリ間のファイル／ディレクトリの作成／削除／名前変更／コピー／移動が可能。
- [prichrd/netrw.nvim](https://github.com/prichrd/netrw.nvim) - netrwにアイコンとカスタムキーバインディングを追加
- [X3eRo0/dired.nvim](https://github.com/X3eRo0/dired.nvim) - Emacs Diredにインスパイアされたファイルブラウザ
- [saifulapm/neotree-file-nesting-config](https://github.com/saifulapm/neotree-file-nesting-config) - `neo-tree.nvim` 用の事前定義されたファイルネストルール。
- [Enigama/miss.nvim](https://github.com/Enigama/miss.nvim) - 変更された `unsaved` ファイルを表示するシンプルなポップアップ。GitHubや類似サービスに何かを追加するのを忘れないように助ける。
- [vodchella/hodur.nvim](https://github.com/vodchella/hodur.nvim) - カーソルの下にあるファイルやURLを迅速に開くまたはコピーできる
- [A7Lavinraj/fyler.nvim](https://github.com/A7Lavinraj/fyler.nvim) - ファイルマネージャーで、ツリー表示によるバッファのようにファイルシステムを編集できる
- [adriancmiranda/glimpse.nvim](https://github.com/adriancmiranda/glimpse.nvim) - 高速かつ複数フォーマットに対応したファイルプレビュー機能。インラインでkittyグラフィックスをサポートし、外部パネルでのプレビュー、ファイルエクスプローラやセレクトツールとの統合を提供
- [ingur/fzf-oil.nvim](https://github.com/ingur/fzf-oil.nvim) - fzf-luaとoil.nvimの間をスムーズに切り替える、ミニマムなファイルブラウザ
- [Dev-Addict/FloatingFile.nvim](https://github.com/Dev-Addict/FloatingFile.nvim) - 読み込める任意のファイルを中央に配置されたフローティングウィンドウでプレビューし、現在のバッファを置き換えない

[**⬆ 目次へ戻る**](#contents)


## プロジェクト

- [karnull/switchboard.nvim](https://github.com/karnull/switchboard.nvim) - 言語またはプロジェクトごとに「実行」「ビルド」または任意のカスタムコマンド/バインドを定義し、どこでも同じキーバインドを使用できる
- [Abstract-IDE/penvim](https://github.com/Abstract-IDE/penvim) - プロジェクトのルートディレクトリとドキュメントのインデント検出機能。プロジェクトベースの設定ローダーを搭載
- [windwp/nvim-projectconfig](https://github.com/windwp/nvim-projectconfig) - プロジェクトディレクトリに応じて特定の設定をロードできる
- [DrKJeff16/project.nvim](https://github.com/DrKJeff16/project.nvim) - プロジェクトマネージャーで、プロジェクトルートの検出、ドキュメントされたコード、多数の改善が含まれており、`snacks.nvim`、`fzf-lua`、`picker.nvim` のサポートを含む。
- [klen/nvim-config-local](https://github.com/klen/nvim-config-local) - 安全に作業ディレクトリからローカル設定ファイルを読み込む
- [cljoly/telescope-repo.nvim](https://github.com/cljoly/telescope-repo.nvim) - ファイルシステム上の任意のリポジトリ（Gitを含む）にジャンプできるTelescopeのセレクト機能
- [otavioschwanck/telescope-alternate.nvim](https://github.com/otavioschwanck/telescope-alternate.nvim) - Telescopeを使って、よく使われるファイルを切り替える
- [natecraddock/workspaces.nvim](https://github.com/natecraddock/workspaces.nvim) - ワークスペースディレクト及の管理
- [GnikDroy/projections.nvim](https://github.com/GnikDroy/projections.nvim) - ミニマムなプロジェクトとセッションマネージャー
- [nyngwang/suave.lua](https://github.com/nyngwang/suave.lua) - マルチタブによるプロジェクトセッションの自動化
- [desdic/telescope-rooter.nvim](https://github.com/desdic/telescope-rooter.nvim) - 常にTelescope（かつTelescopeのみ）をプロジェクトまたはルートディレクトリから開始する
- [SalOrak/whaler.nvim](https://github.com/SalOrak/whaler.nvim) - Telescope拡張機能でディレクトリ間を極めて高速に移動できる
- [nvim-mini/mini.nvim#mini.visits](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-visits.md) - `mini.nvim` のモジュールで、ファイルシステムの訪問を永続的に追跡・再利用できる。"最近"／"頻繁"／"frecent"の訪問をリストアップし、訪問にラベルを追加／削除、その他データを管理できる。
- [LintaoAmons/cd-project.nvim](https://github.com/LintaoAmons/cd-project.nvim) - 必要なのは、別のプロジェクトディレクトリへ `cd` を行うためのより簡単な方法だけ。
- [LucasTavaresA/headers.nvim](https://github.com/LucasTavaresA/headers.nvim) - ゼロ設定でヘッダー・フッターの警告を表示
- [zongben/proot.nvim](https://github.com/zongben/proot.nvim) - Telescopeを活用した軽量プロジェクトナビゲーター
- [wsdjeg/rooter.nvim](https://github.com/wsdjeg/rooter.nvim) - 作業ディレクトリをプロジェクトルートに変更する
- [cosmicbuffalo/root_swapper.nvim](https://github.com/cosmicbuffalo/root_swapper.nvim) - 軽量のルートスワッパーで、現在のバッファに基づき `lcd` を使用して適切なルートディレクトリに切り替える。
- [mrjones2014/codesettings.nvim](https://github.com/mrjones2014/codesettings.nvim) - プロジェクトローカル設定（例：`.vscode/settings.json`）をネイティブLSP設定に簡単に読み込む。
- [josephschmitt/pj.nvim](https://github.com/josephschmitt/pj.nvim) - 複数のセレクトツール（Snacks、Telescope、fzf-lua）に対応した、設定可能な深さによる自動プロジェクト発見
- [martuscellifaria/ahoicpp.nvim](https://github.com/martuscellifaria/ahoicpp.nvim) - C++プロジェクトをモジュラーフォームで構築し、新規ユーザーに言語の重い部分をサポート
- [OscarCreator/rsync.nvim](https://github.com/OscarCreator/rsync.nvim) - リモートに自動でプロジェクトを同期（アップ/ダウン）する（rsyncを使用）
- [zachyarbrough/anchor.nvim](https://github.com/zachyarbrough/anchor.nvim) - プロジェクトごとのディレクトリをピン留めし、即時的にふuzzy検索が可能にする。Harpoonをインスピレーションとしている。
- [Rimkomatic/vimtagger.nvim](https://github.com/Rimkomatic/vimtagger.nvim) - Telescopeとの統合によるプロジェクトファイルの意味的なタグ付け。カスタムタグを使ってファイルを整理し、迅速に検索可能にし、タグをインタラクティブなUIで管理できる。

[**⬆ 目次へ戻る**](#contents)


## バッファー

- [TheLazyCat00/workspaces-nvim](https://github.com/TheLazyCat00/workspaces-nvim) - プロジェクトワークスペース内の特定のキーにファイルをピン留めし、最も重要なファイルに即時アクセスできるようにする。
- [dzfrias/arena.nvim](https://github.com/dzfrias/arena.nvim) - スマート（頻度に基づく）バッファ切り替え機能。
- [backdround/tabscope.nvim](https://github.com/backdround/tabscope.nvim) - タブごとのバッファを作成する。
- [akasataikisiti/tabLocalBuffer.nvim](https://github.com/akasataikisiti/tabLocalBuffer.nvim) - 各タブにバッファリストを保持し、現在のタブ内のみをサイクルするbnext / bpreviousスタイルのナビゲーションを提供する。
- [j-morano/buffer_manager.nvim](https://github.com/j-morano/buffer_manager.nvim) - 1つ以上のバッファを追加、順序を変更、ファイル内に保存、または小さなフローティングウィンドウから簡単に削除できる。
- [kazhala/close-buffers.nvim](https://github.com/kazhala/close-buffers.nvim) - 複数のVimバッファを、異なる条件に基づいて削除できる。
- [sQVe/bufignore.nvim](https://github.com/sQVe/bufignore.nvim) - 指定された無視ソースに一致する隠されたバッファをリストから除外する。
- [rgroli/other.nvim](https://github.com/rgroli/other.nvim) - 現在のバッファに代替ファイルを開く。
- [chrisgrieser/nvim-early-retirement](https://github.com/chrisgrieser/nvim-early-retirement) - バッファを自動的に無効化（早期退職）し、不活動がx分以上続くと自動的に閉じる。
- [axkirillov/hbac.nvim](https://github.com/axkirillov/hbac.nvim) - 使用していないバッファを自動的に閉じる。
- [ChuufMaster/buffer-vacuum](https://github.com/ChuufMaster/buffer-vacuum) - 開いているバッファの最大数を設定し、その上限を超える最も古いバッファを知的に削除する。
- [mong8se/buffish.nvim](https://github.com/mong8se/buffish.nvim) - dirvishまたはvinegarの精神をもつバッファ切り替え機能。
- [BibekBhusal0/bufstack.nvim](https://github.com/BibekBhusal0/bufstack.nvim) - 最近訪問したバッファを追跡し、最近閉じたバッファを再開できる。
- [francescarpi/buffon.nvim](https://github.com/francescarpi/buffon.nvim) - バッファのナビゲーション、再配置、閉じる。
- [ahkohd/buffer-sticks.nvim](https://github.com/ahkohd/buffer-sticks.nvim) - 視覚的なバッファインジケーターと選択機能。
- [famiu/bufdelete.nvim](https://github.com/famiu/bufdelete.nvim) - ウィンドウレイアウトを失わずにバッファを削除できる。
- [wsdjeg/bufdel.nvim](https://github.com/wsdjeg/bufdel.nvim) - ウィンドウレイアウトを変更せずにバッファを削除できる。
- [m-demare/attempt.nvim](https://github.com/m-demare/attempt.nvim) - 一時的なバッファの管理と実行を行う
- [iago-lito/bufmarks.nvim](https://codeberg.org/iago-lito/bufmarks.nvim) - Harpoonにインスパイアされたナビゲーション方法だが、順序付きリストではなく「mark」のようなキーでバッファをインデックス化

[**⬆ 目次へ戻る**](#contents)


## 色

- [catgoose/nvim-colorizer.lua](https://github.com/catgoose/nvim-colorizer.lua) - 外部依存がない高性能な色強調ツール
- [winston0410/range-highlight.nvim](https://github.com/winston0410/range-highlight.nvim) - コマンドラインで入力した範囲を強調する、非常に軽量なプラグイン（~120行）
- [folke/twilight.nvim](https://github.com/folke/twilight.nvim) - Tree-sitterを用いて編集中のコードの無関係な部分を暗めること
- [uga-rosa/ccc.nvim](https://github.com/uga-rosa/ccc.nvim) - 非常に強力な色選択/色化プラグイン
- [lcheylus/overlength.nvim](https://github.com/lcheylus/overlength.nvim) - 長すぎる行を強調するための小さなプラグイン
- [max397574/colortils.nvim](https://github.com/max397574/colortils.nvim) - 色の操作（選択、変換）に必要なユーティリティを提供
- [Mr-LLLLL/interestingwords.nvim](https://github.com/Mr-LLLLL/interestingwords.nvim) - 複数の単語を同時に強調し、カーソル下の単語をスムーズにスクロールしながらナビゲート。検索回数をvirtualtextで表示。
- [nvim-mini/mini.nvim#mini.hipatterns](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-hipatterns.md) - `mini.nvim` のモジュールで、設定可能なハイライト器によりテキスト内のパターンをハイライト。設定可能なデボンス遅延で非同期に動作。
- [miversen33/sunglasses.nvim](https://github.com/miversen33/sunglasses.nvim) - ウィンドウ切り替え時に動的に色テーマ／強調を調整
- [rasulomaroff/reactive.nvim](https://github.com/rasulomaroff/reactive.nvim) - モード／オペレーターの変更やウィンドウの切り替え時に、グローバルおよびウィンドウ特定の強調を設定またはコールバックをトリガー
- [moyiz/command-and-cursor.nvim](https://github.com/moyiz/command-and-cursor.nvim) - コマンドモードに入る際に、カーソルと視覚選択を強調
- [rachartier/tiny-devicons-auto-colors.nvim](https://github.com/rachartier/tiny-devicons-auto-colors.nvim) - 現在の色テーマに基づき、nvim-web-deviconsの色を自動的に更新
- [TaDaa/vimade](https://github.com/TaDaa/vimade) - ウィンドウおよびバッファ内の色を暗め、フェード、トーン調整、アニメーション、カスタマイズ
- [xzbdmw/colorful-menu.nvim](https://github.com/xzbdmw/colorful-menu.nvim) - Tree-sitterを用いて自動補完メニューを色付け
- [nvzone/minty](https://github.com/nvzone/minty) - 美しく設計された色ツール
- [3ZsForInsomnia/pacer.nvim](https://github.com/3ZsForInsomnia/pacer.nvim) - 一つの単語を強調しながら、現在の段落の外側のすべてのテキストを暗めることで、読むスピードを速くする読み進捗補助ツール
- [wsdjeg/cpicker.nvim](https://github.com/wsdjeg/cpicker.nvim) - 幅広い色モデルをサポートする軽量な色パレットプラグイン
- [leolaurindo/tunnelvision.nvim](https://github.com/leolaurindo/tunnelvision.nvim) - 無関係な行を暗めることで、一つのシンボルに焦点を当てる
- [cxwx/shadowMyName.nvim](https://github.com/cxwx/shadowMyName.nvim) - スクリーン記録中に、ユーザー名、トークン、電話番号など、センシティブな単語を削除

[**⬆ 目次へ戻る**](#contents)


## カラースキーム

各カラースキームには次のタグが一つ以上付きます。タグがない機能は対応していません。


- **_`[TS]`_** - Tree-sitterハイライト対応。
- **_`[LSP]`_** - LSP Semantic Tokens対応。
- **_`[L/D]`_** - ライト・ダーク両方のバリエーションを提供。
- **_`[Lua]`_** - Lua製。
- **_`[Fnl]`_** - Fennel製。


- [ThorstenRhau/token](https://github.com/ThorstenRhau/token) - **_`[TS][LSP][L/D][Lua]`_** Tokenは温かな色調と丁寧なコントラストを備え、Tree-sitterとLSPを完全に統合しています。
- [oskarnurm/koda.nvim](https://github.com/oskarnurm/koda.nvim) - **_`[TS][LSP][L/D][Lua]`_** コードの静かな相棒となる、Lua製のミニマルなカラーテーマ。
- [yonatan-perel/lake-dweller.nvim](https://github.com/yonatan-perel/lake-dweller.nvim) - **_`[TS][LSP][Lua]`_** 暗い色調で、選択的に強調されたデザインで、一目で読めるように設計されています。
- [silentium-theme/silentium.nvim](https://github.com/silentium-theme/silentium.nvim) - **_`[TS][Luа]`_** 実用的でモノクロテーマ。読む速度を向上し、目への負担を軽減するために、必要最小限の内容をハイライトする目的を持つ。
- [serhez/teide.nvim](https://github.com/serhez/teide.nvim) - **_`[TS][LSP][L/D][Lua]`_** folke の `tokyonight.nvim` のフォークで、異なる色パレットを採用。
- [kuri-sun/yoda.nvim](https://github.com/kuri-sun/yoda.nvim) - **_`[TS][L/D][Lua]`_** 調和された編集に適した、落ち着いた緑のパレット。
- [wurli/cobalt.nvim](https://github.com/wurli/cobalt.nvim) - **_`[TS][LSP][Lua]`_** TextMateのクラシックブルースタイルを忠実に再現したポートです。
- [datsfilipe/min-theme.nvim](https://github.com/datsfilipe/min-theme.nvim) - **_`[TS][LSP][Lua]`_** VSCode用のミニマリズムテーマ「Min」をLuaで再現したものです。
- [github-main-user/lytmode.nvim](https://github.com/github-main-user/lytmode.nvim) - **_`[TS][LSP][Lua]`_** ObsidianのLYT-Modeをインスピレーションとして作った、一筋の間のテーマ。暗いわけでも、明るいわけでもない、ちょうどいい色調。
- [datsfilipe/vesper.nvim](https://github.com/datsfilipe/vesper.nvim) - **_`[TS][LSP][Lua]`_** VS Codeのポピュラーなテーマ「Vesper」をLuaで再現したものです。
- [sontungexpt/witch](https://github.com/sontungexpt/witch) - **_`[TS][LSP][L/D][Lua]`_** メインのstinvimディストロのカラーパレットは、非アクティブウィンドウの暗め表示を含む、ユーザー向けのさまざまなカスタマイズオプションを備えています。
- [Abstract-IDE/Abstract-cs](https://github.com/Abstract-IDE/Abstract-cs) - **_`[TS][LSP][Lua]`_** Luaで書かれたカラーパレット。roshnivim用に特別に作成され、Tree-sitter対応。
- [rafamadriz/neon](https://github.com/rafamadriz/neon) - **_`[TS][LSP][L/D][Lua]`_** イタリックやボルドなサポートが優れており、ダークとライトの両方に対応するカスタマイズ可能なカラーパレット。Tree-sitterとの良好な互換性を意識して設計されています。
- [tomasiser/vim-code-dark](https://github.com/tomasiser/vim-code-dark) - **_`[TS]`_** VSCodeのDark+の見た目を強くインスピレーションとして採用した暗いカラーパレット。
- [Mofiqul/vscode.nvim](https://github.com/Mofiqul/vscode.nvim) - **_`[TS][L/D][Lua]`_** vim-code-darkカラーパレットをLuaで再現した、VSCodeのライトとダークテーマに対応したものです。
- [askfiy/visual_studio_code](https://github.com/askfiy/visual_studio_code) - **_`[TS][LSP][L/D][Lua]`_** VSCodeを非常に忠実に再現したテーマ。
- [marko-cerovac/material.nvim](https://github.com/marko-cerovac/material.nvim) - **_`[TS][LSP][L/D][Lua]`_** Material.nvimは、Luaで書かれており、Materialパレットに基づいた、非常にカスタマイズ可能なカラーパレットです。
- [bluz71/vim-nightfly-colors](https://github.com/bluz71/vim-nightfly-colors) - **_`[TS][LSP][Lua]`_** Tree-sitter対応の暗い午後のカラーパレット。
- [bluz71/vim-moonfly-colors](https://github.com/bluz71/vim-moonfly-colors) - **_`[TS][LSP][Lua]`_** Tree-sitter対応の暗い炭色カラーパレット。
- [ChristianChiarulli/nvcode-color-schemes.vim](https://github.com/ChristianChiarulli/nvcode-color-schemes.vim) - **_`[TS]`_** Nvcode、onedark、nordのカラーパレットにTree-sitter対応。
- [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) - **_`[TS][LSP][L/D][Lua]`_** LSP、Tree-sitter、多数のプラグインに対応する、シンプルで洗練されたダークとライトテーマ。Luaで書かれています。
- [everviolet/nvim](https://github.com/everviolet/nvim) - **_`[TS][LSP][L/D][Lua]`_** 朝の快適なコーディングに最適な、快適なカラーパレット。
- [uhs-robert/oasis.nvim](https://github.com/uhs-robert/oasis.nvim) - **_`[TS][LSP][L/D][Lua]`_** Vimから移植した砂漠テーマを12種類のバリエーションで現代化した、虹の各色に対応するダークテーマ集。
- [sainnhe/sonokai](https://github.com/sainnhe/sonokai) - **_`[TS][LSP]`_** Monokai Proに基づく高コントラストおよび鮮やかなカラーパレット。
- [nyoom-engineering/oxocarbon.nvim](https://github.com/nyoom-engineering/oxocarbon.nvim) - **_`[TS][LSP][L/D][Lua]`_** Fennelで記述されたダークとライトテーマ。IBM Carbonをインスピレーションとしている。
- [mhartington/oceanic-next](https://github.com/mhartington/oceanic-next) - **_`[TS][L/D]`_** Oceanic Nextテーマ。
- [nvimdev/zephyr-nvim](https://github.com/nvimdev/zephyr-nvim) - **_`[TS][Lua]`_** ツリーサイター対応のダークカラーパレット。
- [rockerBOO/boo-colorscheme-nvim](https://github.com/rockerBOO/boo-colorscheme-nvim) - **_`[TS][Lua]`_** LSPおよびツリーサイターに手作りで対応したカラーパレット。
- [jim-at-jibba/ariake.nvim](https://github.com/jim-at-jibba/ariake.nvim) - **_`[TS][LSP][Lua]`_** 有名なAtomテーマを再現した、美しくダークなカラーパレット。
- [Th3Whit3Wolf/onebuddy](https://github.com/Th3Whit3Wolf/onebuddy) - **_`[TS][L/D][Lua]`_** ライトとダークのAtom Oneテーマ。
- [ishan9299/modus-theme-vim](https://github.com/ishan9299/modus-theme-vim) - **_`[TS][L/D][Lua]`_** emacs用にプロテシアス・スタヴロウが開発したカラーパレット。
- [sainnhe/edge](https://github.com/sainnhe/edge) - **_`[TS][LSP][L/D]`_** Atom OneおよびMaterialをインスピレーションとして、シンプルでエレガントなカラーパレット。
- [bkegley/gloombuddy](https://github.com/bkegley/gloombuddy) - **_`[TS][Lua]`_** Gloomをインスピレーションとしたテーマ。
- [Th3Whit3Wolf/one-nvim](https://github.com/Th3Whit3Wolf/one-nvim) - **_`[TS][L/D][Lua]`_** Atom Oneをインスピレーションとしたダークおよびライトカラーパレット。
- [Th3Whit3Wolf/space-nvim](https://github.com/Th3Whit3Wolf/space-nvim) - **_`[TS][L/D][Lua]`_** Spacemacsをインスピレーションとしたダークおよびライトカラーパレット。
- [ray-x/aurora](https://github.com/ray-x/aurora) - **_`[TS][LSP][Lua]`_** 24ビットのダークテーマで、ツリーサイターおよびLSPに対応。
- [ray-x/starry.nvim](https://github.com/ray-x/starry.nvim) - **_`[TS][LSP][L/D][Lua]`_** モダンな色テーマのコレクション：`material`、`moonlight`、`dracula (blood)`、`monokai`、`mariana`、`emerald`、`earlysummer`、`middlenight_blue`、`darksolar`。
- [tanvirtin/monokai.nvim](https://github.com/tanvirtin/monokai.nvim) - **_`[TS][LSP][Lua]`_** Luaで記述されたMonokaiテーマ。
- [ofirgall/ofirkai.nvim](https://github.com/ofirgall/ofirkai.nvim) - **_`[TS][LSP][Lua]`_** Sublime Textに似た体験を意識したMonokaiテーマ。
- [savq/melange-nvim](https://github.com/savq/melange-nvim) - **_`[TS][LSP][L/D][Lua]`_** Luaで記述された温かいカラーパレットで、さまざまなターミナルエミュレーターに対応。
- [fenetikm/falcon](https://github.com/fenetikm/falcon) - **_`[TS][Lua]`_** ターミナル、Vimなどに適用可能なカラーパレット。
- [andersevenrud/nordic.nvim](https://github.com/andersevenrud/nordic.nvim) - **_`[TS][Lua]`_** Nord風のカラーパレット。
- [AlexvZyl/nordic.nvim](https://github.com/AlexvZyl/nordic.nvim) - **_`[TS][Lua]`_** Nordテーマを、より暖かくダークにしたバージョン。さまざまなプラグインおよび他のプラットフォームに対応。
- [shaunsingh/nord.nvim](https://github.com/shaunsingh/nord.nvim) - **_`[TS][Lua]`_** Nordカラーパレットを基にしたカラーテーマ。
- [Tsuzat/NeoSolarized.nvim](https://github.com/Tsuzat/NeoSolarized.nvim) - **_`[TS][LSP][L/D][Lua]`_** 完全な透過表示に対応するNeoSolarizedカラーテーマ。
- [svrana/neosolarized.nvim](https://github.com/svrana/neosolarized.nvim) - **_`[TS][LSP][Lua]`_** カラーバディーを用いて簡単にカスタマイズできるダークソーライズドカラーパレット。
- [ishan9299/nvim-solarized-lua](https://github.com/ishan9299/nvim-solarized-lua) - **_`[TS][Lua]`_** ルアで書かれたソーライズドカラーパレット。
- [jthvai/lavender.nvim](https://codeberg.org/jthvai/lavender.nvim) - **_`[TS][LSP][Lua]`_** ピンク調のダークモードカラーパレット；shaunsingh/moonlight.nvimの完全なリライト。
- [navarasu/onedark.nvim](https://github.com/navarasu/onedark.nvim) - **_`[TS][LSP][Lua]`_** アトムのOne Darkテーマを元にしたルアで書かれたOne Darkテーマ。
- [sainnhe/gruvbox-material](https://github.com/sainnhe/gruvbox-material) - **_`[TS][LSP]`_** グルーブボックスの改良版で、コントラストを柔らかくし、Tree-sitterをサポート。
- [sainnhe/everforest](https://github.com/sainnhe/everforest) - **_`[TS][LSP][L/D]`_** 温かみがあり、ソフトで目を疲れさせにくいグリーンベースのカラーパレット。
- [neanias/everforest-nvim](https://github.com/neanias/everforest-nvim) - **_`[TS][LSP][L/D][Lua]`_** Everforestカラーパレットのルア版。
- [NTBBloodbath/doom-one.nvim](https://github.com/NTBBloodbath/doom-one.nvim) - **_`[TS][L/D][Lua]`_** doom-emacsのdoom-oneのルア版。
- [dracula/vim](https://github.com/dracula/vim) - **_`[TS][LSP]`_** 有名で美しいダークパワードテーマ。
- [Mofiqul/dracula.nvim](https://github.com/Mofiqul/dracula.nvim) - **_`[TS]`_** Lua製のDraculaカラーテーマ。
- [niyabits/calvera-dark.nvim](https://github.com/niyabits/calvera-dark.nvim) - **_`[TS][Lua]`_** [VSCode Calvara Dark](https://github.com/saurabhdaware/vscode-calvera-dark) テーマのポートで、Tree-sitter および多くの他のプラグインに対応。
- [nxvu699134/vn-night.nvim](https://github.com/nxvu699134/vn-night.nvim) - **_`[Lua]`_** ルアで書かれたダークカラーパレット。
- [adisen99/codeschool.nvim](https://github.com/adisen99/codeschool.nvim) - **_`[TS][LSP][Lua]`_** Tree-sitterおよび内蔵LSPをサポートするルアで書かれたコードスクールカラーパレット。
- [projekt0n/github-nvim-theme](https://github.com/projekt0n/github-nvim-theme) - **_`[TS][LSP][L/D][Lua]`_** GitHubテーマ、kitty、alacrittyをルアで書いたテーマ。内蔵LSPおよびTree-sitterをサポート。
- [kdheepak/monochrome.nvim](https://github.com/kdheepak/monochrome.nvim) - **_`[TS][Lua]`_** 16ビットモノクロテーマで、視覚的に異なるグレイカラーを [HSLuv](https://www.hsluv.org/) を使用し、Tree-sitter および他の一般的なプラグインに対応。

- [rose-pine/neovim](https://github.com/rose-pine/neovim) - **_`[TS][LSP][L/D][Lua]`_** 上品なミニマリスト向けに、天然の松、フェイクファー、少しのSohoの雰囲気を表現したテーマ。

- [zenbones-theme/zenbones.nvim](https://github.com/zenbones-theme/zenbones.nvim) - **_`[TS][LSP][L/D][Lua]`_** コードの強調を目的とした、コントラストとフォントのバリエーションを活かしたカラーパレットのコレクション。
- [catppuccin/nvim](https://github.com/catppuccin/nvim) - **_`[TS][LSP][L/D][Lua]`_** バリエーション豊かな明るいダークテーマ。ネイティブLSP、Tree-sitterなどに対応。
- [samesense/savitsky.nvim](https://github.com/samesense/savitsky.nvim) - **_`[TS][LSP][L/D][Lua]`_** サビツキー美術館の絵画からインスピレーションを得た、カスタムされた色パレット。`catppuccin` をベースに構築。
- [FrenzyExists/aquarium-vim](https://github.com/FrenzyExists/aquarium-vim) - **_`[TS][L/D]`_** ダークながらも活き活きとしたカラーパレット。
- [EdenEast/nightfox.nvim](https://github.com/EdenEast/nightfox.nvim) - **_`[TS][LSP][L/D][Lua]`_** 柔らかく、完全にカスタマイズ可能なダークカラーパレット。LSP、Tree-sitter、さまざまなプラグインに対応。
- [ldelossa/vimdark](https://github.com/ldelossa/vimdark) - **_`[TS][L/D]`_** 夜間用の極小 Vim テーマ。vim-monotonic および Chrome のダーク リーダー拡張機能を緩く参考にしたもの。昼間用のライトテーマも含まれている。
- [Everblush/nvim](https://github.com/Everblush/nvim) - **_`[TS][LSP][Lua]`_** Lua で書かれたダークで活き活きとした美しいカラーテーマ。
- [adisen99/apprentice.nvim](https://github.com/adisen99/apprentice.nvim) - **_`[TS][L/D][Lua]`_** Luaで記述されたテーマで、[Apprentice](https://github.com/romainl/Apprentice) の色パレットをベースにし、Tree-sitter およびネイティブLSPをサポート。
- [olimorris/onedarkpro.nvim](https://github.com/olimorris/onedarkpro.nvim) - **_`[TS][L/D][Lua]`_** Atom の代表的な One Dark テーマ。キャッシュ可能で、完全にカスタマイズ可能。Tree-sitter および LSP のセマンティックトークンをサポート。ライトとダークのバリエーションが含まれている。
- [rmehri01/onenord.nvim](https://github.com/rmehri01/onenord.nvim) - **_`[TS][LSP][L/D][Lua]`_** Nord と Atom One Dark のカラーパレットを組み合わせた、より活き活きとしたプログラミング体験を実現するカラーテーマ。
- [nvim-mini/mini.nvim#colorschemes](https://github.com/nvim-mini/mini.nvim#plugin-color-schemes) - **_`[TS][LSP][L/D][Lua]`_** `mini.nvim` に含まれる色テーマ。すべてのテーマは、テキストの読みやすさを優先し、視覚的に均一な色空間でパレットを計算。
- [luisiacc/gruvbox-baby](https://github.com/luisiacc/gruvbox-baby) - **_`[TS][LSP][Lua]`_** モダンな gruvbox テーマで、完全な Tree-sitter サポートを備えている。
- [titanzero/zephyrium](https://github.com/titanzero/zephyrium) - **_`[TS][Lua]`_** Zephyr に似たテーマ。Lua で書かれており、Tree-sitter サポートを備えている。
- [rebelot/kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) - **_`[TS][LSP][L/D][Lua]`_** 有名な歌川広司の絵画の色合いをインスピレーションとして、ダークなカラーテーマ。
- [thesimonho/kanagawa-paper.nvim](https://github.com/thesimonho/kanagawa-paper.nvim) - **_`[TS][LSP][L/D][Lua]`_** カナガワのライトおよびダークカラーテーマをリミックスし、色合いを抑え込んだもの。
- [kevinm6/kurayami.nvim](https://github.com/kevinm6/kurayami.nvim) - **_`[TS][LSP][Lua]`_** ダークのみのテーマで、Tree-sitter サポートを備えている。
- [cpea2506/one_monokai.nvim](https://github.com/cpea2506/one_monokai.nvim) - **_`[TS][LSP][Lua]`_** Lua で書かれた One Monokai テーマ。
- [phha/zenburn.nvim](https://github.com/phha/zenburn.nvim) - **_`[TS][Lua]`_** 低コントラストのダークカラーテーマで、さまざまなプラグインに対応している。
- [chrsm/paramount-ng.nvim](https://github.com/chrsm/paramount-ng.nvim) - **_`[TS][Lua]`_** Lush を使って書かれたダークカラーテーマ。Tree-sitter サポートを備えている。
- [qaptoR-nvim/chocolatier.nvim](https://github.com/qaptoR-nvim/chocolatier.nvim) - **_`[TS][LSP][Lua]`_** espresso/kimbie にインスパイアされたチョコレート風テーマ。ellisonleao/gruvbox.nvim テーマをコードテンプレートとして採用したもの。
- [rockyzhang24/arctic.nvim](https://github.com/rockyzhang24/arctic.nvim) - **_`[TS][LSP][Lua]`_** VSCode Dark+ テーマからポートされたカラーテーマ。編集器およびUIの両方に厳密かつ正確な色選定を実現している。
- [ramojus/mellifluous.nvim](https://github.com/ramojus/mellifluous.nvim) - **_`[TS][LSP][L/D][Lua]`_** 快適で生産性の高いカラーテーマ。
- [lewpoly/sherbet.nvim](https://github.com/lewpoly/sherbet.nvim) - **_`[TS][Lua]`_** 人間らしい色合いを備え、人気プラグインおよびTree-sitterに対応するカラーテーマ。
- [Mofiqul/adwaita.nvim](https://github.com/Mofiqul/adwaita.nvim) - **_`[TS][LSP][L/D][Lua]`_** GNOME Adwaita シンタックスに基づいたカラーテーマで、人気プラグインに対応している。
- [mellow-theme/mellow.nvim](https://github.com/mellow-theme/mellow.nvim) - **_`[TS][LSP][Lua]`_** 親しみやすいダークカラーテーマで、Tree-sitter サポートを備えている。
- [gbprod/nord.nvim](https://github.com/gbprod/nord.nvim) - **_`[TS][LSP][Lua]`_** 北の青い、洗練されたアーティスティックなテーマ。Nord パレットをベースにしている。
- [embark-theme/vim](https://github.com/embark-theme/vim) - **_`[TS]`_** 深いインクのような紫のテーマで、明るい色を活かしている。
- [nyngwang/nvimgelion](https://github.com/nyngwang/nvimgelion) - **_`[TS]`_** ネオン・ジェネシス・エヴァンゲリオンですが、Vimmers向けに。
- [maxmx03/fluoromachine.nvim](https://github.com/maxmx03/fluoromachine.nvim) - **_`[TS][LSP][Lua]`_** SynthwaveとFluoromachineを組み合わせた移植テーマ。
- [dasupradyumna/midnight.nvim](https://github.com/dasupradyumna/midnight.nvim) - **_`[TS][LSP][Lua]`_** 見やすい色コントラストを備えたモダンな黒基調テーマ。LSPとTree-sitterに対応。
- [sonjiku/yawnc.nvim](https://github.com/sonjiku/yawnc.nvim) - **_`[TS][LSP][Lua]`_** pywalによるテーマ設計、Base16風。
- [uncleTen276/dark_flat.nvim](https://github.com/uncleTen276/dark_flat.nvim) - **_`[TS][LSP][Lua]`_** Luaで記述されたカラーパレット。Dark Flat iTerm2テーマから導入されたもので、LSPおよびTree-sitter対応。
- [zootedb0t/citruszest.nvim](https://github.com/zootedb0t/citruszest.nvim) - **_`[TS][LSP][Lua]`_** 明るく、ジューシーな色合いを特徴とするカラーパレット。さまざまな柑橘系果物の色合いを想起させる。LSPおよびTree-sitter対応。
- [2nthony/vitesse.nvim](https://github.com/2nthony/vitesse.nvim) - **_`[TS][LSP][Lua]`_** VitesseテーマのLuaポート。
- [xero/miasma.nvim](https://github.com/xero/miasma.nvim) - **_`[TS][LSP]`_** 木の風景をモチーフにしたダークパステルカラーパレット。lushで構築され、Tree-sitter、診断、CMP、Git-Signs、Telescope、Which-key、Lazyなど多数のプラグインに対応。
- [Verf/deepwhite.nvim](https://github.com/Verf/deepwhite.nvim) - **_`[TS][LSP][Lua]`_** [flatwhite-syntax](https://github.com/biletskyy/flatwhite-syntax) および [elegant-emacs](https://github.com/rougier/elegant-emacs) にインスピレーションを得たライトテーマ。
- [judaew/ronny.nvim](https://github.com/judaew/ronny.nvim) - **_`[TS][LSP][Lua]`_** Monokai（Wimem Hazenbergが作成）を元にしたダークカラーパレット。
- [ribru17/bamboo.nvim](https://github.com/ribru17/bamboo.nvim) - **_`[TS][LSP][Lua]`_** 温かい緑色テーマ。
- [cryptomilk/nightcity.nvim](https://github.com/cryptomilk/nightcity.nvim) - **_`[TS][LSP][Lua]`_** Inkpot、Jellybeans、Gruvbox、Tokyonightをインスピレーションとして採用したダークカラーパレット。LSP対応。
- [polirritmico/monokai-nightasty.nvim](https://github.com/polirritmico/monokai-nightasty.nvim) - **_`[TS][LSP][L/D][Lua]`_** Monokaiカラーパレットに基づいたダーク／ライトテーマ（Luaで記述）。LSP、Tree-sitter、多数のプラグインに対応。
- [oxfist/night-owl.nvim](https://github.com/oxfist/night-owl.nvim) - **_`[TS][LSP][Lua]`_** Tree-sitter およびセマンティックトークンをサポートする [Night Owl colorscheme port from VSCode](https://github.com/sdras/night-owl-vscode-theme)。
- [micdzu/aalto.nvim](https://github.com/micdzu/aalto.nvim) - **_`[TS][LSP][L/D][Lua]`_** 認知的OKLCHエンジンを備えた意味論的カラーパレット。4つの意味論的役割と、ダークおよびライトの両方のバリエーションを備える。
- [miikanissi/modus-themes.nvim](https://github.com/miikanissi/modus-themes.nvim) - **_`[TS][LSP][L/D][Lua]`_** 視覚アクセスを考慮したテーマ。色のコントラストにおいて、WCAG AAAの最高基準に準拠。
- [alexmozaidze/palenight.nvim](https://github.com/alexmozaidze/palenight.nvim) - **_`[TS][LSP][Fnl]`_** Palenightカラーパレット。Tree-sitter、LSP（含む意味論的トークン）および多数のプラグインに対応。
- [scottmckendry/cyberdream.nvim](https://github.com/scottmckendry/cyberdream.nvim) - **_`[TS][L/D][Lua]`_** 高コントラスト、未来感、そして活気あるカラーパレット。
- [HoNamDuong/hybrid.nvim](https://github.com/HoNamDuong/hybrid.nvim) - **_`[TS][LSP][Lua]`_** Luaで記述されたダークテーマ。
- [sxwpb/halfspace.nvim](https://gitlab.com/sxwpb/halfspace.nvim) - **_`[TS][LSP][Lua]`_** 眼に負担をかけないための半ライトカラーパレット。
- [bartekjaszczak/distinct-nvim](https://gitlab.com/bartekjaszczak/distinct-nvim) - **_`[TS][LSP][L/D][Lua]`_** 文法の色分けが明確なテーマ。Tree-sitterおよび意味論的ハイライトに対応。多色文法ハイライトを好む人々向け。
- [samharju/synthweave.nvim](https://github.com/samharju/synthweave.nvim) - **_`[TS][LSP][Lua]`_** Synthwave '84カラーテーマの移植版。
- [loganswartz/sunburn.nvim](https://github.com/loganswartz/sunburn.nvim) - **_`[TS][Lua]`_** パステルとソーライズの間にあるカラーパレット。読みやすさと色の統一性を最優先に設計されている。
- [ptdewey/darkearth-nvim](https://github.com/ptdewey/darkearth-nvim) - **_`[TS][LSP][Fnl]`_** 暗く、地味なカラーパレット。Tree-sitterとLSPに対応。
- [uloco/bluloco.nvim](https://github.com/uloco/bluloco.nvim) - **_`[TS][LSP][L/D][Lua]`_** 夜間と昼間のコーディングに最適な、高級で洗練されたカラーパレット。LSP、Tree-sitter、そして愛用のプラグインすべてに対応。
- [slugbyte/lackluster.nvim](https://github.com/slugbyte/lackluster.nvim) - **_`[TS][LSP][Lua]`_** 視覚的に心地よい、主にグレースケールのカラーパレット。目を疲れさせず、多数のプラグインに対応。
- [0xstepit/flow.nvim](https://github.com/0xstepit/flow.nvim) - **_`[TS][L/D][Lua]`_** コーディング中の集中を助ける、細部まで丁寧に設計されたカラーパレット。蛍光色の要素も備えている。多数のプラグインとツールに対応。
- [samharju/serene.nvim](https://github.com/samharju/serene.nvim) - **_`[TS][Lua]`_** 眼をリラックスさせる、暗いTree-sitter/LSP対応テーマ。より鮮やかなカラーパレットを使用後、目を休めるのに最適。
- [killitar/obscure.nvim](https://github.com/killitar/obscure.nvim) - **_`[TS][LSP][Lua]`_** パステル系の暗いカラーパレット。Mellowのパレットをインスピレーションとして設計。Tree-sitter、LSP（包括的にセマンティックトークン）および多数のプラグインに対応。
- [bakageddy/alduin.nvim](https://github.com/bakageddy/alduin.nvim) - **_`[TS][LSP][Lua]`_** [alduin](https://github.com/AlessandroYorba/alduin)テーマをLuaに移植したもので、Tree-sitterと意味論的ハイライトをサポートしています。
- [diegoulloao/neofusion.nvim](https://github.com/diegoulloao/neofusion.nvim) - **_`[TS][LSP][Lua]`_** Tree-sitterを想定したテーマで、`gruvbox.nvim`をインスピレーションとしています。
- [bartekjaszczak/luma-nvim](https://gitlab.com/bartekjaszczak/luma-nvim) - **_`[TS][LSP][L/D][Lua]`_** ダーク／ライトモードと調整可能なコントラストを備えたカラーテーマ。Tree-sitterとセマンティックハイライトに対応。
- [bartekjaszczak/finale-nvim](https://gitlab.com/bartekjaszczak/finale-nvim) - **_`[TS][LSP][Lua]`_** 活発でバランスの取れたダークテーマ。鮮やかでパステルな色を融合させ、快適で高コントラストな体験を提供。Tree-sitterとセマンティックハイライトに対応。
- [m15a/nvim-srcerite](https://codeberg.org/m15a/nvim-srcerite) - **_`[TS][Lua]`_** [Srcery](https://srcery.sh/)をインスピレーションとしており、`nvim-highlite`をベースにしたカラーリングです。
- [ptdewey/monalisa-nvim](https://github.com/ptdewey/monalisa-nvim) - **_`[TS][LSP][Lua]`_** ダークでカラフルな、モナリザをインスピレーションとしたカラーパレット。
- [ntk148v/slack.nvim](https://github.com/ntk148v/slack.nvim) - **_`[TS][L/D][Lua]`_** Slackのカラーパレットを再実装したもの。
- [y3owk1n/base16-pro-max.nvim](https://github.com/y3owk1n/base16-pro-max.nvim) - **_`[TS][LSP][Lua]`_** Base16による16色＋構文強調、透過性、無効なパネルの暗め表示、セマンティックエイリアス、リアルタイムブレンド、オーバーライド、およびプラグイン統合を第一クラスに提供。
- [ellisonleao/gruvbox.nvim](https://github.com/ellisonleao/gruvbox.nvim) - **_`[TS][LSP][L/D][Lua]`_** GruvboxコミュニティカラーパレットのLua版。
- [pmouraguedes/neodarcula.nvim](https://github.com/pmouraguedes/neodarcula.nvim) - **_`[TS][LSP][Lua]`_** 透過性、暗め表示、LSPのセマンティックトークンなどに対応するダークテーマ。
- [jpwol/thorn.nvim](https://github.com/jpwol/thorn.nvim) - **_`[TS][LSP][L/D][Lua]`_** 豊かな緑色のテーマ。ダークとライトのオプションを提供。LSP、透過性、多数のプラグインなどに対応。
- [calind/selenized.nvim](https://github.com/calind/selenized.nvim) - **_`[TS][LSP][L/D][Lua]`_** [selenized](https://github.com/jan-warchol/selenized)のLua版で、Tree-sitter、`nvim-cmp`、GitSignsなどに対応しています。
- [motaz-shokry/gruvbox.nvim](https://gitlab.com/motaz-shokry/gruvbox.nvim) - **_`[TS][L/D][Lua]`_** 新しいGruvboxテーマ。ハードバージョンでは背景色が異なる。4つのバリエーションを提供。
- [pebeto/dookie.nvim](https://github.com/pebeto/dookie.nvim) - **_`[TS][Lua]`_** Plan9のacmeエディタのパレットをインスピレーションとして設計したカラーパレット。
- [metalelf0/jellybeans-nvim](https://github.com/metalelf0/jellybeans-nvim) - **_`[TS][Lua]`_** jellybeansカラーパレットの再実装。
- [lalitmee/cobalt2.nvim](https://github.com/lalitmee/cobalt2.nvim) - **_`[Lua]`_** colorbuddyを使用したcobalt2カラーパレットの再実装。
- [dybdeskarphet/gruvbox-minimal.nvim](https://github.com/dybdeskarphet/gruvbox-minimal.nvim) - **_`[TS][L/D][Lua]`_** Gruvbox Materialテーマ。Alabasterをインスピレーションとして概念的に設計。
- [taigrr/cyberpunk.nvim](https://github.com/taigrr/cyberpunk.nvim) - **_`[TS][LSP][Lua]`_** 黒背景に緑・シアン・黄色・赤のハイライトを施したダークネオンカラーパレット
- [ankushbhagats/pastel.nvim](https://github.com/ankushbhagats/pastel.nvim) - **_`[TS][LSP][L/D][Lua]`_** 高度なカスタマイズ、スタイル、統合を備えたエレガントなパステルカラーパレット
- [0x-ximon/acario.nvim](https://github.com/0x-ximon/acario.nvim) - **_`[TS][LSP][L/D][Lua]`_** クリアで高コントラストのDoom Emacs Acarioテーマのポート
- [hyperb1iss/silkcircuit](https://github.com/hyperb1iss/silkcircuit) - **_`[TS][LSP][L/D][Lua]`_** 活発なサイバーパンクカラーシステム。5つのバリエーション、40以上のプラグイン統合。WCAG AA準拠。複数のエディタ、ターミナル、CLIツールに対応
- [Aejkatappaja/sora](https://github.com/Aejkatappaja/sora) - **_`[TS][LSP][Lua]`_** 深い青黒のダークカラーパレット。一つのエレガントなシアンアクセントを備え、多くのターミナルアプリとツールにマッチしたポートを提供
- [T-b-t-nchos/Aquavium.nvim](https://github.com/T-b-t-nchos/Aquavium.nvim) - **_`[TS][Lua]`_** エアリーフィルムテーマのカラーパレット。透明なターミナル背景と併用するための設計
- [54L1M/Oshen.nvim](https://github.com/54L1M/Oshen.nvim) - **_`[TS][LSP][L/D][Lua]`_** 夜の深海の水にインスピレーションを得た、完全に5つの元色から派生したカラーパレット
- [Aejkatappaja/cendre](https://github.com/Aejkatappaja/cendre) - **_`[TS][LSP][Lua]`_** 木の火の発光スペクトルからすべての色を計算したダークカラーパレット。ターミナルとツールへのマッチしたポートも提供
- [marekh19/meowsoot.nvim](https://github.com/marekh19/meowsoot.nvim) - **_`[TS][LSP][L/D][Lua]`_** ダークピンク・シアン・ラベンダーのカラーパレット。文字列は黄色、グリーンはコードに到達しない
- [ntk148v/lauds](https://github.com/ntk148v/lauds) - **_`[TS][Lua]`_** 記事とコードに最適なペーパーライトカラーテーマ。温かみのあるオフホワイト紙、テラコッタオレンジ、深いミント
- [alsi-lawr/neotheme.nvim](https://github.com/alsi-lawr/neotheme.nvim) - **_`[TS][LSP][L/D][Lua]`_** セマンティックでパレット駆動のテーマエンジン。リアルタイムテーマ切り替えと複数の内蔵ファミリーを備える
- [brargenzilian/darcula-solid.nvim](https://codeberg.org/brargenzilian/darcula-solid.nvim) - **_`[TS][Lua]`_** JetBrains IntelliJ IDEAのデフォルトテーマに強くインスピレーションを受けたが、より快適で美しく、コントラストの高い体験を実現するために丁寧に精緻化されたカラーパレット
- [tan-wei/zimablue.nvim](https://github.com/tan-wei/zimablue.nvim) - **_`[TS][LSP][Lua]`_** _Love, Death and Robots_ エピソード _Zima Blue_ の代表的な色をインスピレーションに受けて作られたダークNeovimカラーパレット
- [mitander/flume.nvim](https://github.com/mitander/flume.nvim) - **_`[TS][LSP][L/D][Lua]`_** 四パレットのカラーシステム。一貫したセマンティックロールとターミナルおよび開発ツール向けに生成されたマッチしたテーマを提供
- [aadielpr/bono.nvim](https://github.com/aadielpr/bono.nvim) - **_`[TS][LSP][Lua]`_** 温かみのあるマイルドカラーパレット。クリーム（ライト）バリエーションを含む
- [art220/dancheong.nvim](https://github.com/art220/dancheong.nvim) - **_`[TS][LSP][L/D][Lua]`_** 1500年歴史を持つ韓国寺院絵画のパレット「ダンチェオン」から導かれた4つのバリエーション。すべての色がビルド時にコントラストが制御され、LUALINEテーマもマッチ

[**⬆ 目次へ戻る**](#contents)


### カラースキーム作成

- [tjdevries/colorbuddy.nvim](https://github.com/tjdevries/colorbuddy.nvim) - カラーパレットのヘルパー。Luaで書かれています！速く簡単なカラーパレット。
- [norcalli/nvim-base16.lua](https://github.com/norcalli/nvim-base16.lua) - ベース16テーマを設定するためのプログラム型Luaライブラリ。
- [rktjmp/lush.nvim](https://github.com/rktjmp/lush.nvim) - Luaで色 schemes をDSLとして定義し、リアルタイムフィードバックを提供。
- [Iron-E/nvim-highlite](https://github.com/Iron-E/nvim-highlite) - 開発者にとって論理的に軽量なカラーパレット生成ツール
- [nvim-mini/mini.nvim#mini.base16](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-base16.md) - `mini.nvim`のモジュールで、手動で指定されたパレットに合わせたbase16テーマを高速に実装する.
- [ThemerCorp/themer.lua](https://github.com/ThemerCorp/themer.lua) - あなたのエディタおよびサポートされているアプリ（例：`kitty`および`alacritty`）にカラーリングを用意します。
- [nvim-mini/mini.nvim#mini.colors](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-colors.md) - `mini.nvim`のモジュールで、任意の色のスケームを調整・保存できる。また、色の遷移をアニメーション化し、いくつかの色空間間を変換できる.
- [nvim-mini/mini.nvim#mini.hues](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-hues.md) - `mini.nvim`のモジュールで、設定可能な色のスケームを生成。必要な引数として背景色とフォント色のみを取る。非ベースカラーの色の数、飽和度、アクセント色、プラグイン統合を調整できる.
- [loganswartz/polychrome.nvim](https://github.com/loganswartz/polychrome.nvim) - 多くの異なるフォーマット（sRGB、HSL、Oklab、XYZなど）で色を直接指定できる色スケームマイクロフレームワーク。知能的な色のクリッピング、リアルタイム編集プレビュー、シンプルなDSLをサポート。
- [svermeulen/text-to-colorscheme](https://github.com/svermeulen/text-to-colorscheme) - OpenAIのGPT APIを使用して、テキストプロンプトから色スケームを生成できる。
- [RRethy/base16-nvim](https://github.com/RRethy/base16-nvim) - base16色スケームビルダー。Tree-sitterおよびLSPハイライトグループのサポートを含む。
- [Senal-D-A-Gunaratna/matugen.nvim](https://github.com/Senal-D-A-Gunaratna/matugen.nvim) - 外部テンプレートシステムを使用したMaterial You色スケーム生成器。Tree-sitter、LSP、Luaをサポート。
- [nitinbhat972/cwal.nvim](https://github.com/nitinbhat972/cwal.nvim) - cwalで生成された色パレットから動的色スケームを生成する。

[**⬆ 目次へ戻る**](#contents)


### カラースキーム切り替え

- [DrKJeff16/which-colorscheme.nvim](https://github.com/DrKJeff16/which-colorscheme.nvim) - カスタムまたは自動生成された`which-key.nvim`バインディングを使って、カラーリングを切り替えます。
- [itsfernn/auto-gnome-theme.nvim](https://github.com/itsfernn/auto-gnome-theme.nvim) - GNOMEシステムの明るさ／暗さモードに合わせた高速カラーリング切り替え（`gsetting monitor`に基づく）。
- [flashcodes-themayankjha/fkthemes.nvim](https://github.com/flashcodes-themayankjha/fkthemes.nvim) - Luaで書かれた高速で軽量かつ強力なテーマ切り替えツール。
- [4e554c4c/darkman.nvim](https://github.com/4e554c4c/darkman.nvim) - Linuxでのシステムダークモード設定に従う。
- [f-person/auto-dark-mode.nvim](https://github.com/f-person/auto-dark-mode.nvim) - macOSでのシステム外観設定に従う。
- [zaldih/themery.nvim](https://github.com/zaldih/themery.nvim) - VSCodeのようにリアルタイムで色スケームを変更できる新しい方法。
- [linrongbin16/colorbox.nvim](https://github.com/linrongbin16/colorbox.nvim) - あなたのエディタのプレイヤーにすべての超軽量色スケームをロードする。
- [CWood-sdf/pineapple](https://github.com/CWood-sdf/pineapple) - あなたの設定に残らず、任意の色スケームをインストールできる。インターネット上のすべての色スケームを収集し、インストール前にすべてをプレビューできる。
- [BrunoCiccarino/gardenal](https://github.com/BrunoCiccarino/gardenal) - Gardenalは、1クリックでテーマ間を切り替えるためのキーボードショートカットを作成できるテーマ切り替えツール。
- [LmanTW/themify.nvim](https://github.com/LmanTW/themify.nvim/tree/main) - Themery.nvimおよびLazy.nvimにインスパイアされた軽量な色スケームマネージャーおよび切り替えツール。
- [nishu-murmu/ThemeSwitch.nvim](https://github.com/nishu-murmu/ThemeSwitch.nvim) - 軽量な色スケーム切り替えツール。
- [Erl-koenig/theme-hub.nvim](https://github.com/Erl-koenig/theme-hub.nvim) - telescope-pickersを使って色スケームの管理とインストール。

[**⬆ 目次へ戻る**](#contents)


## バーと行

- [Bekaboo/deadcolumn.nvim](https://github.com/Bekaboo/deadcolumn.nvim) - 色カラムを動的に表示する。
- [ecthelionvi/NeoColumn.nvim](https://github.com/ecthelionvi/NeoColumn.nvim) - 特定の文字に対して色カラムのハイライトを切り替える。
- [m4xshen/smartcolumn.nvim](https://github.com/m4xshen/smartcolumn.nvim) - 不要なときにはカラムを隠す
- [utilyre/barbecue.nvim](https://github.com/utilyre/barbecue.nvim) - VSCode風のウィンドウバー
- [Bekaboo/dropbar.nvim](https://github.com/Bekaboo/dropbar.nvim) - IDE風のナビゲーションバー、標準搭載
- [SmiteshP/nvim-navic](https://github.com/SmiteshP/nvim-navic) - LSPを使って現在のコードコンテキストを表示するシンプルなステータスライン／ウィンドウバー要素
- [luukvbaal/statuscol.nvim](https://github.com/luukvbaal/statuscol.nvim) - カスタマイズ可能な「ステータスカラム」で、内蔵セグメントとクリックハンドラを備える
- [mawkler/hml.nvim](https://github.com/mawkler/hml.nvim) - 行番号に`H`／`M`／`L`のインジケーターを追加します。
- [neur1n/noline.nvim](https://github.com/neur1n/noline.nvim) - すべてのバーとライン要素を完全にカスタマイズ可能で、プリセットや制約なし
- [OXY2DEV/bars.nvim](https://github.com/OXY2DEV/bars.nvim) - カスタムステータスライン、ステータスカラム、タブラインおよびウィンドウバーを作成するための出発点／ガイド
- [zaakiy/line-justice.nvim](https://github.com/zaakiy/line-justice.nvim) - 絶対番号と相対番号を同時に表示

### ステータスライン

- [NTBBloodbath/galaxyline.nvim](https://github.com/NTBBloodbath/galaxyline.nvim) - Luaで書かれた軽量かつ非常に高速なステータスラインプラグイン
- [tjdevries/express_line.nvim](https://github.com/tjdevries/express_line.nvim) - コルーチン、関数、ジョブをサポート
- [sontungexpt/witch-line](https://github.com/sontungexpt/witch-line) - 参照概念に基づく非常に高速なステータスライン
- [nvim-lualine/lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) - 簡単にカスタマイズ可能で、非常に高速なステータスライン
- [adelarsq/neoline.vim](https://github.com/adelarsq/neoline.vim) - Luaで書かれた軽量ステータスライン／タブラインプラグイン
- [ojroques/nvim-hardline](https://github.com/ojroques/nvim-hardline) - [vim-airline](https://github.com/vim-airline/vim-airline)をインスピレーションにした、極めて軽量でシンプルなステータスライン／バッファラインです。
- [beauwilliams/statusline.lua](https://github.com/beauwilliams/statusline.lua) - Luaで書かれたゼロ設定の最小ステータスラインで、素晴らしい統合と非常に高速な動作を備える
- [tamton-aquib/staline.nvim](https://github.com/tamton-aquib/staline.nvim) - Luaで書かれた現代的な軽量ステータスライン。情報の表示には主にUnicode記号を使用
- [windwp/windline.nvim](https://github.com/windwp/windline.nvim) - 次世代ステータスライン。アニメーション付きステータスライン
- [konapun/vacuumline.nvim](https://github.com/konapun/vacuumline.nvim) - airlineにインスパイアされたgalaxylineの設定
- [nvim-mini/mini.nvim#mini.statusline](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-statusline.md) - `mini.nvim`のモジュールで、最小限かつ高速なステータスラインを提供。ウィンドウ幅に応じてコンテンツを変更します。
- [b0o/incline.nvim](https://github.com/b0o/incline.nvim) - 軽量なフローティングステータスライン。新しいグローバルステータスラインとの使用を想定
- [rebelot/heirline.nvim](https://github.com/rebelot/heirline.nvim) - 再帰的継承に基づいたシンプルなステータスライン。非常に高速かつ汎用性が高い
- [Zeioth/heirline-components.nvim](https://github.com/Zeioth/heirline-components.nvim) - 30以上の`heirline.nvim`コンポーネントを即座に使用して、完璧なユーザーインターフェースを作成します。
- [yaocccc/nvim-lines.lua](https://github.com/yaocccc/nvim-lines.lua) - 高速で軽量でカスタマイズ可能なステータスラインおよびタブライン（バッファ）
- [MunifTanjim/nougat.nvim](https://github.com/MunifTanjim/nougat.nvim) - ハイパーエクステンシブル ステータスライン／タブライン／ウィンバー
- [Mr-LLLLL/lualine-ext.nvim](https://github.com/Mr-LLLLL/lualine-ext.nvim) - ルアーラインでより多くの情報を表示
- [mikesmithgh/git-prompt-string-lualine.nvim](https://github.com/mikesmithgh/git-prompt-string-lualine.nvim) - ステータスラインに git-prompt-string を追加
- [sschleemilch/slimline.nvim](https://github.com/sschleemilch/slimline.nvim) - スリムで最小限であり、意見をもつ Lua ステータスライン
- [tajirhas9/muslim.nvim](https://github.com/tajirhas9/muslim.nvim) - ステータスラインに祈りの時間とイスラムの必須情報を表示

### タブライン

- [romgrk/barbar.nvim](https://github.com/romgrk/barbar.nvim) - リオーダ可能で、自動サイズ調整、クリック可能タブ、アイコン、良好なハイライト、ソートコマンド、そしてバッファへジャンプする「マジック」モードを備えたタブライン
- [akinsho/bufferline.nvim](https://github.com/akinsho/bufferline.nvim) - Lua を使用して構築されたスタイリッシュなバッファライン
- [crispgm/nvim-tabline](https://github.com/crispgm/nvim-tabline) - `tabline.vim`をLuaで書かれたポートです。
- [alvarosevilla95/luatab.nvim](https://github.com/alvarosevilla95/luatab.nvim) - Lua で書かれたシンプルなタブライン
- [johann2357/nvim-smartbufs](https://github.com/johann2357/nvim-smartbufs) - スマートなバッファ管理
- [willothy/nvim-cokeline](https://github.com/willothy/nvim-cokeline) - アディクティブな性質を持つ人のために作られたバッファライン
- [tomiis4/BufferTabs.nvim](https://github.com/tomiis4/BufferTabs.nvim) - シンプルでスタイリッシュなタブライン
- [nvim-mini/mini.nvim#mini.tabline](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-tabline.md) - `mini.nvim`のモジュールで、1つのタブの場合にリストされたバッファを表示し、それ以外ではデフォルトに戻します。
- [rafcamlet/tabline-framework.nvim](https://github.com/rafcamlet/tabline-framework.nvim) - 数行のコードで夢のタブラインを構築できるユーザーフレームワーク
- [nanozuki/tabby.nvim](https://github.com/nanozuki/tabby.nvim) - 最小限でカスタマイズ可能なタブラインで、タブをワークスペースのマルチプレクサとして使用可能

### カーソルライン

- [ya2s/nvim-cursorline](https://github.com/ya2s/nvim-cursorline) - カーソル位置の単語と行をハイライト
- [sontungexpt/stcursorword](https://github.com/sontungexpt/stcursorword) - カーソルの下にある単語をハイライト（`nvim-cursorline`の改善およびコンパクト版）。
- [RRethy/vim-illuminate](https://github.com/RRethy/vim-illuminate) - カーソル下の単語をハイライト（組み込みLSP対応）
- [nvim-mini/mini.nvim#mini.cursorword](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-cursorword.md) - `mini.nvim`のモジュールで、カーソルの下にある単語を自動的にハイライト（カスタマイズ可能な遅延後表示）。
- [mawkler/modicator.nvim](https://github.com/mawkler/modicator.nvim) - カーソル行番号モードのインジケーター。Vimモードに基づいて`CursorLineNr`のハイライトを変更します。

[**⬆ 目次へ戻る**](#contents)


## 起動

- [nvimdev/dashboard-nvim](https://github.com/nvimdev/dashboard-nvim) - ドゥームエマックスをインスピレーションとして作ったミニマリズムのダッシュボード
- [goolord/alpha-nvim](https://github.com/goolord/alpha-nvim) - 高速かつ高度にカスタマイズ可能なグリーティング画面（[vim-startify](https://github.com/mhinz/vim-startify)／dashboard-nvimに似たもの）。
- [nvim-mini/mini.nvim#mini.starter](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-starter.md) - `mini.nvim`のモジュールでスタート画面を提供。表示項目は完全にカスタマイズ可能で、項目選択はプレフィックスクエリで即時視覚フィードバックで行えます。
- [henriquehbr/nvim-startup.lua](https://sr.ht/~henriquehbr/nvim-startup.lua) - 起動時間の表示
- [max397574/startup.nvim](https://github.com/max397574/startup.nvim) - 完全にカスタマイズ可能なゲートーラー
- [TobinPalmer/Tip.nvim](https://github.com/TobinPalmer/Tip.nvim) - 起動時に簡単なヒントを表示
- [CWood-sdf/spaceport.nvim](https://github.com/CWood-sdf/spaceport.nvim) - プロジェクトに即座にアクセスできるスタート画面
- [mong8se/actually.nvim](https://github.com/mong8se/actually.nvim) - 実際に読み込もうとしたファイルを読み込みます。
- [Kurama622/profile.nvim](https://github.com/Kurama622/profile.nvim) - GitHub ホームページに似たダッシュボード。
- [leo-alvarenga/homecoming.nvim](https://github.com/leo-alvarenga/homecoming.nvim) - シンプルでカスタマイズ可能で心地よいダッシュボード。適切なデフォルト設定と、設定不要のゼロ構成。
- [Amansingh-afk/milli.nvim](https://github.com/Amansingh-afk/milli.nvim) - バンドルされたアニメーションを備えたアニメーション付き ASCII スプラッシュスクリーン。カスタム画像やGIFに対応。

[**⬆ 目次へ戻る**](#contents)


## アイコン

- [nvim-tree/nvim-web-devicons](https://github.com/nvim-tree/nvim-web-devicons) - [vim-devicons](https://github.com/ryanoasis/vim-devicons)のLua版です。
- [nvim-mini/mini.nvim#mini.icons](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-icons.md) - `mini.nvim`のモジュールで、一般的なアイコンプロバイダーとして設計されています。固定セットのハイライトグループを使用。さまざまなカテゴリ、アイコン、スタイルのカスタマイズ、パフォーマンス用キャッシュをサポート。組み込みのファイルタイプマッチングと統合されています。
- [2KAbhishek/nerdy.nvim](https://github.com/2KAbhishek/nerdy.nvim/) - 最新のnerd fontの文字を検索して挿入します。
- [stephansama/fzf-nerdfont.nvim](https://github.com/stephansama/fzf-nerdfont.nvim) - Nerd Fontのアイコンを選択するためのピッカーを `fzf-lua` で提供.
- [Mirsmog/real-icons.nvim](https://github.com/Mirsmog/real-icons.nvim) - kittyのグラフィックスプロトコルを使って、エクスプローラー、ピッカー、ステータスライン、タブラインにPNGおよびSVGファイルアイコンをレンダリング。

[**⬆ 目次へ戻る**](#contents)


## メディア

- [ricmonmol/nvim-music-player](https://github.com/ricmonmol/nvim-music-player) - Pythonで書かれた、 `mpv` によって駆動されたシンプルな音楽プレイヤーにTelescopeブラウザを含む.
- [melMass/echo.nvim](https://github.com/melMass/echo.nvim) - 編集ワークフローにスムーズにサウンドを統合。
- [~elisoli/nekovim](https://git.sr.ht/~elisoli/nekovim) - 柔軟なDiscordのリッチプレゼンス。
- [edluffy/hologram.nvim](https://github.com/edluffy/hologram.nvim) - マルチプラットフォーム対応のターミナル画像閲覧ツール。macOSおよびLinuxで動作。
- [HakonHarnes/img-clip.nvim](https://github.com/HakonHarnes/img-clip.nvim) - LaTeX、Markdown、Typstなどの任意のマークアップ言語に画像を簡単に埋め込みます。
- [ekickx/clipboard-image.nvim](https://github.com/ekickx/clipboard-image.nvim) - クリップボードから画像を貼り付けます。
- [niuiic/cp-image.nvim](https://github.com/niuiic/cp-image.nvim) - クリップボードから画像を貼り付け、参照コードを挿入します。
- [askfiy/nvim-picgo](https://github.com/askfiy/nvim-picgo) - 画像をアップロードできる機能を提供し、インターネット上のどこからでも画像を閲覧できます。
- [davidgranstrom/scnvim](https://github.com/davidgranstrom/scnvim) - SuperColliderのフロントエンド。
- [Chaitanyabsrip/present.nvim](https://github.com/Chaitanyabsprip/present.nvim) - Luaで書かれたプレゼンテーションプラグイン。
- [3rd/image.nvim](https://github.com/3rd/image.nvim) - kittyのグラフィックスプロトコルまたはueberzugppを使って画像サポートを追加。
- [adelarsq/image_preview.nvim](https://github.com/adelarsq/image_preview.nvim) - ターミナルのImage Protocol対応に基づいた画像プレビュー。
- [niuiic/code-shot.nvim](https://github.com/niuiic/code-shot.nvim) - コードのスクリーンショットを撮ります。
- [AntonVanAssche/music-controls.nvim](https://github.com/AntonVanAssche/music-controls.nvim) - お気に入りの音楽プレイヤー（Spotify、VLCなど）を迅速に制御。
- [neo451/feed.nvim](https://github.com/neo451/feed.nvim) - Luaで書かれたウェブフィードリーダー（RSS、Atom、JSONフィード）。
- [vyfor/cord.nvim](https://github.com/vyfor/cord.nvim) - ディスコード向けに非常に拡張可能な豊かな存在状態
- [iamt4nk/smm.nvim](https://github.com/iamt4nk/smm.nvim) - スパッと小さいTUIでスパッとプレイ制御が可能
- [sanjay-np/nvim-yt-player](https://github.com/sanjay-np/nvim-yt-player) - IPCソケットを介して `mpv` と `yt-dlp` を使ってYouTubeの音声を再生.
- [T-b-t-nchos/FMP7.nvim](https://github.com/T-b-t-nchos/FMP7.nvim) - FMP7を制御し、FM/SSG/PCMドライバ用の音楽ファイルを再生（Windows専用）

[**⬆ 目次へ戻る**](#contents)


## ノート作成

- [DaFi-1/tasknvim](https://github.com/DaFi-1/tasknvim) - 目標の整理、習慣の記録、生産性の向上を支援するシンプルなライフ・パーソナル開発ツール
- [niuiic/todo.nvim](https://github.com/niuiic/todo.nvim) - テキストベースのシンプルで強力なTODOマネージャー
- [flashcodes-themayankjha/Fknotes.nvim](https://github.com/flashcodes-themayankjha/Fknotes.nvim) - プロジェクト内のどこからでもノートやTODOを取る、すべてのTODOを検索し、リマインダーを取得できる
- [apdot/doodle](https://github.com/apdot/doodle) - 開発者向けの知識ベースで、プロジェクト/ブランチごとのノート、両方向リンク、ノートタグ、グラフビュー、テレスコープ統合、Git同期をサポート
- [sduras/duras_bridge](https://github.com/sduras/duras_bridge) - [duras](https://codeberg.org/duras/duras) のプレーンテキスト日記ノートとのブリッジ；編集からノートを追加、検索、開く.
- [gmcusaro/ma.nvim](https://github.com/gmcusaro/ma.nvim) - 関係性のあるノートナビゲーションと安全なファイル操作を備えた最小限のマーカード知識管理
- [jameswolensky/marker-groups.nvim](https://github.com/jameswolensky/marker-groups.nvim) - コードを変更せずに持続的なコードノートを取る
- [bngarren/checkmate.nvim](https://github.com/bngarren/checkmate.nvim) - フル機能のマーカードベースのTODOプラグイン
- [lfilho/note2cal.nvim](https://github.com/lfilho/note2cal.nvim) - マーカードノートからカレンダーイベントを作成（macOS専用）
- [0styx0/abbreinder.nvim](https://github.com/0styx0/abbreinder.nvim) - 略語のリマインダー
- [jakewvincent/mkdnflow.nvim](https://github.com/jakewvincent/mkdnflow.nvim) - スムーズなマーカードノートナビゲーションと管理（リンク作成、リンクフォロー、TODOリストの作成と管理、bibファイル参照など）
- [jbyuki/nabla.nvim](https://github.com/jbyuki/nabla.nvim) - 科学的なノートを取る
- [nvim-neorg/neorg](https://github.com/nvim-neorg/neorg) - 現代性と極めて高い拡張性。あなたの生活を整理する未来
- [nvim-orgmode/orgmode](https://github.com/nvim-orgmode/orgmode) - Luaで書かれたOrg-modeのクローン
- [nfrid/due.nvim](https://github.com/nfrid/due.nvim) - 日付文字列に対して、仮想テキストとして期限を表示
- [jbyuki/venn.nvim](https://github.com/jbyuki/venn.nvim) - ASCII図を描画
- [nvim-telekasten/telekasten.nvim](https://github.com/nvim-telekasten/telekasten.nvim) - テレスコープ.nvimに基づくテキストベースのマーカード・ゼッテルカストン／Wikiとジャーナルを組み合わせる
- [zk-org/zk-nvim](https://github.com/zk-org/zk-nvim) - `zk` というプレーンテキストノート作成アシスタントとの統合を提供.
- [chrsm/impulse.nvim](https://github.com/chrsm/impulse.nvim) - ノイション.soのノートを読む
- [obsidian-nvim/obsidian.nvim](https://github.com/obsidian-nvim/obsidian.nvim) - Obsidian用のLuaで書かれたプラグイン
- [jjuchara/obsidian-tasks.nvim](https://github.com/jjuchara/obsidian-tasks.nvim) - 複数のデータフォルダを対象に、キーボード中心のタスク管理と順序付きタグツリー
- [IlyasYOY/obs.nvim](https://github.com/IlyasYOY/obs.nvim) - あなたのObsidianノートを思考の速さで管理
- [jghauser/papis.nvim](https://github.com/jghauser/papis.nvim) - あなたの好きなエディタ内でbibliographyを管理
- [Ostralyan/scribe.nvim](https://github.com/Ostralyan/scribe.nvim) - 簡単にメモを取る
- [serenevoid/kiwi.nvim](https://github.com/serenevoid/kiwi.nvim) - 必要な機能を備えた極めてシンプルなVimWiki
- [backdround/global-note.nvim](https://github.com/backdround/global-note.nvim) - 一つのグローバルノートをフロートウィンドウで表示
- [2KAbhishek/tdo.nvim](https://github.com/2KAbhishek/tdo.nvim) - 速くシンプルなメモ作成
- [slugbyte/whip.nvim](http://github.com/slugbyte/whip.nvim) - 非常に高速で最小限のスクラッチパッド管理プラグイン、biew biew biew
- [y3owk1n/dotmd.nvim](https://github.com/y3owk1n/dotmd.nvim) - メモ、TODO、日記、インボックスをすべてMarkdownで管理
- [athar-qadri/scratchpad.nvim](https://github.com/athar-qadri/scratchpad.nvim) - あなたの好きなエディタ内でスクラッチパッドを簡単に管理
- [echaya/neowiki.nvim](https://github.com/echaya/neowiki.nvim) - 現代的なVimWikiの継承品で、メモ作成とGetting Things Done(GTD)に必要な最小限の直感的なワークフローを標準で提供
- [happyeric77/joplin.nvim](https://github.com/happyeric77/joplin.nvim) - Joplinノートのユーティリティ：ツリーブラウザ、検索、開閉、Telescope統合
- [ymic9963/mdnotes.nvim](https://github.com/ymic9963/mdnotes.nvim) - シンプルで改善され、拡張可能なMarkdownメモ作成
- [nbeversl/urtext_neovim](https://github.com/nbeversl/urtext_neovim) - Urtextの実装
- [losch/ztl](https://codeberg.org/losch/ztl) - すべてがビルドインされた、1つのバイナリで高速な静的メモ生成器
- [indium114/studytools.nvim](https://github.com/indium114/studytools.nvim) - 学習とメモ作成体験を向上させるためのさまざまなユーティリティ
- [iwe-org/iwe.nvim](https://github.com/iwe-org/iwe.nvim) - `IWE` というマークダウンベースの知識管理およびノート作成ワークフロー向けのLSPとの統合.
- [carloscalla/notepad.nvim](https://github.com/carloscalla/notepad.nvim) - リポジトリごとのものとグローバルなメモ帳をサポートした、Markdownによる迅速なメモ作成
- [MattHandzel/taskwarrior.nvim](https://github.com/MattHandzel/taskwarrior.nvim) - タスクワーリアのタスクをバッファで編集し、タスクをMarkdownチェックボックスとして表示、Vimの操作で大量編集、保存時にdiff-and-apply。oil.nvimにインスパイアされたもの

[**⬆ 目次へ戻る**](#contents)


## ユーティリティ

- [StefanBartl/color_my_ascii.nvim](https://github.com/StefanBartl/color_my_ascii.nvim) - Markdownコードブロック内のASCIIアートをカラフルにハイライト
- [necrom4/calcium.nvim](https://github.com/necrom4/calcium.nvim) - 強力な [`lua-lib-math`](https://www.lua.org/pil/18.html) バッファ内計算機で、視覚モード、関数、変数サポートを備える.
- [code-biscuits/nvim-biscuits](https://github.com/code-biscuits/nvim-biscuits) - アソーシエート・ビスケットのポート。サポートされている言語がさらに増えます。
- [rktjmp/paperplanes.nvim](https://github.com/rktjmp/paperplanes.nvim) - オンラインペーストボックスへの選択項目やバッファの送信。
- [axieax/urlview.nvim](https://github.com/axieax/urlview.nvim) - 現在のバッファに含まれるすべてのURLを閲覧。
- [cxwx/lazyUrlUpdate.nvim](https://github.com/cxwx/lazyUrlUpdate.nvim) - カーソル位置のプラグインを `lazy.nvim` で更新.
- [sontungexpt/url-open](https://github.com/sontungexpt/url-open) - カーソル位置にあるURLを開き、それらに対してハイライト効果を生成。
- [crusj/bookmarks.nvim](https://github.com/crusj/bookmarks.nvim) - ファイルの場所を記憶し、時間と頻度で並べ替え。
- [jbyuki/instant.nvim](https://github.com/jbyuki/instant.nvim) - Luaで書かれた依存関係のないコラボエディティングプラグイン。
- [chrisgrieser/nvim-genghis](https://github.com/chrisgrieser/nvim-genghis) - Luaで書かれた便利なファイル操作機能。
- [figsoda/nix-develop.nvim](https://github.com/figsoda/nix-develop.nvim) - `nix develop` を実行するが、再起動なしで動作させる.
- [tenxsoydev/nx.nvim](https://github.com/tenxsoydev/nx.nvim) - Luaキーマップ、ハイライト、自動コマンド、オプションに向けた組み込みAPIユーティリティラッパー。
- [mluders/comfy-line-numbers.nvim](https://github.com/mluders/comfy-line-numbers.nvim) - 相対数値を制限し、キーボードの左側の桁だけを表示。
- [ragnarok22/whereami.nvim](https://github.com/ragnarok22/whereami.nvim) - VPNのテストに、現在の位置情報を取得。
- [aPeoplesCalendar/apc.nvim](https://github.com/aPeoplesCalendar/apc.nvim) - 「この日」スタイルのカレンダーで、世界の労働運動や解放闘争の歴史情報を提供。
- [subnut/nvim-ghost.nvim](https://github.com/subnut/nvim-ghost.nvim) - 依存関係のないGhostTextのサポート。
- [LintaoAmons/scratch.nvim](https://github.com/LintaoAmons/scratch.nvim) - スクラッチファイルの作成と管理。
- [0xJohnnyboy/scretch.nvim](https://github.com/0xJohnnyboy/scretch.nvim) - スクラッチファイル、スクラッチテンプレートの作成と管理、ピッカー統合機能付き。
- [yutkat/confirm-quit.nvim](https://github.com/yutkat/confirm-quit.nvim) - 終了前に確認を表示。
- [bgaillard/readonly.nvim](https://github.com/bgaillard/readonly.nvim) - 感度情報や秘密情報、パスワード、APIキー、SSHキーなど、ファイルのセキュア編集。
- [zeybek/camouflage.nvim](https://github.com/zeybek/camouflage.nvim) - 画面共有中に構成ファイル内のセンシティブな値を隠すために、 `.env`, `.json`, `.yaml`, `.toml`, および `.properties` ファイル内のシークレットを視覚的にマスクする.
- [linrongbin16/gentags.nvim](https://github.com/linrongbin16/gentags.nvim) - 旧来のvimユーザー向けのタグ生成・管理機能。
- [Zeioth/distroupdate.nvim](https://github.com/Zeioth/distroupdate.nvim) - ディストリビューションに依存しないアップダート機能で、設定のGitリポジトリから最新の変更を取得。
- [terje/simctl.nvim](https://github.com/terje/simctl.nvim) - iOSシミュレーターとの相互作用。
- [mistricky/codesnap.nvim](https://github.com/mistricky/codesnap.nvim) - 豊かな機能を持つスナップショットプラグインで、美しく見えるコードスナップショットを作成。
- [AlejandroSuero/freeze-code.nvim](https://github.com/AlejandroSuero/freeze-code.nvim) - 編集内で [freeze](https://github.com/charmbracelet/freeze) を活用したコードスクリーンショットプラグイン.
- [ysmb-wtsg/in-and-out.nvim](https://github.com/ysmb-wtsg/in-and-out.nvim) - 周囲の文字列に迅速に移動・戻る機能
- [ellisonleao/dotenv.nvim](https://github.com/ellisonleao/dotenv.nvim) - 極めてシンプルな `.env` のサポート
- [MisanthropicBit/decipher.nvim](https://github.com/MisanthropicBit/decipher.nvim) - base64 などさまざまなコード方式を使ってテキストを暗号化・復号化
- [philosofonusus/ecolog.nvim](https://github.com/philosofonusus/ecolog.nvim) - `.env`ファイルと環境変数を扱うための高度な統合ツールキット。
- [theKnightsOfRohan/hexer.nvim](https://github.com/theKnightsOfRohan/hexer.nvim) - 変換テーブルなしで二進表現の間を簡単に変換
- [josephburgess/nvumi](https://github.com/josephburgess/nvumi) - スクラッチバッファに内蔵された自然言語計算機能
- [redoxahmii/json-to-types.nvim](https://github.com/redoxahmii/json-to-types.nvim) - JSONオブジェクトを複数言語の型定義に変換
- [ovk/endec.nvim](https://github.com/ovk/endec.nvim) - Base64、Base64URL、URL（パーセント）エンコードを使ってテキストを暗号化・復号化・再暗号化
- [y3owk1n/time-machine.nvim](https://github.com/y3owk1n/time-machine.nvim) - 編集履歴をインタラクティブなタイムライン、差分プレビュー、タグ付け、リアルタイムリロードツリー、クリーンアップ関数で制御
- [athar-qadri/weather.nvim](https://github.com/athar-qadri/weather.nvim) - リアルタイムの天気と地震のアラート（lualine統合に対応、APIキー不要）
- [penaz91/MiniDYM](https://github.com/Penaz91/MiniDYM) - 非常に小さな「あなたが意図したのはこれですか？」プラグイン。ユーザーが開くべきファイルを推奨する。
- [Owen-Dechow/videre.nvim](https://github.com/Owen-Dechow/videre.nvim) - JSON、YAML、TOMLファイルをネストされた単位／ノードベースのグラフィカル表現で探索
- [mahyarmirrashed/famous-quotes.nvim](https://github.com/mahyarmirrashed/famous-quotes.nvim) - スタートアップ時に歴史的な名言を表示
- [iquzart/toggleword.nvim](https://github.com/iquzart/toggleword.nvim) - カーソルの位置にある一般的なコードキーワード（true ⇄ false, on ⇄ off, enabled ⇄ disabled, dev ⇄ prod）を切り替える
- [leblocks/toggle.nvim](https://github.com/leblocks/toggle.nvim) - カーソルの位置にある一般的な語（_public_ ⇄ _private_ ⇄ _protected_）を切り替える。既存の切り替え機能を簡単に追加・上書きできる
- [piersolenski/brewfile.nvim](https://github.com/piersolenski/brewfile.nvim) - あなたの [Homebrew](https://brew.sh/) [Brewfile](https://docs.brew.sh/Brew-Bundle-and-Brewfile) を管理する.
- [gpanders/nvim-moonwalk](https://github.com/gpanders/nvim-moonwalk) - 設定中のどこでも、Luaにコンパイルできる言語を使用できる
- [johannww/tts.nvim](https://github.com/johannww/tts.nvim) - Microsoft Edgeのオンラインサービスに基づくテキストを音声に変換するツール
- [doctorfree/cheatsheet.nvim](https://github.com/doctorfree/cheatsheet.nvim) - 検索可能なチートシート
- [gaborvecsei/cryptoprice.nvim](https://github.com/gaborvecsei/cryptoprice.nvim) - 定義された暗号通貨の価格を確認できる
- [wsdjeg/mru.nvim](https://github.com/wsdjeg/mru.nvim) - 最も最近使用した（MRU）ファイルの管理と表示
- [wsdjeg/ctags.nvim](https://github.com/wsdjeg/ctags.nvim) - タグファイルを自動生成し、タグオプションを自動更新します
- [leo-alvarenga/quoth.nvim](https://github.com/leo-alvarenga/quoth.nvim) - ライトウェイトで、カスタマイズ可能なランダムクォートプロバイダー。遅延ロード、カスタムテーブル、フィルターをサポートします
- [indium114/cheaty.nvim](https://github.com/indium114/cheaty.nvim) - シンプルでカスタマイズ可能なヒントシート
- [indium114/unobtrusive-relnums.nvim](https://github.com/indium114/unobtrusive-relnums.nvim) - サイン列に非侵襲的な相対行番号を表示
- [glyccogen/imprint.nvim](https://github.com/glyccogen/imprint.nvim) - PlaywrightとヘッドレスChromiumを使ってコードのWYSIWYGスクリーンショットを撮影し、色テーマやハイライトを保持します
- [emrearmagan/dockyard.nvim](https://github.com/emrearmagan/dockyard.nvim) - Dockerのダッシュボードでコンテナ、イメージ、ネットワーク、ログを管理します
- [ChuYanLon/telegram.nvim](https://github.com/ChuYanLon/telegram.nvim) - TDLibを用いたTelegramチャットクライアント。リアルタイムメッセージ、グループ管理、メディアプレビューをサポートします
- [paulburgess1357/nvim-mcp](https://github.com/paulburgess1357/nvim-mcp) - MCPサーバーにより、AIエージェントがバッファ、コマンド、LSP診断にアクセスできるよう、組み込みのmsgpack-RPCソケットを提供します
- [dpezto/chezmoi-template.nvim](https://github.com/dpezto/chezmoi-template.nvim) - chezmoiのソースファイルをネイティブに編集：ターゲット言語のTree-sitterインジェクション、テンプレート認識フォーマット、リアルタイムプレビュー、診断、補完をサポートします

### CSVファイル

- [VidocqH/data-viewer.nvim](https://github.com/VidocqH/data-viewer.nvim) - データファイル（例： `csv`, `tsv`）を簡易なテーブルビューで確認できるようにする.
- [theKnightsOfRohan/csvlens.nvim](https://github.com/theKnightsOfRohan/csvlens.nvim) - [YS-L/csvlens](https://github.com/YS-L/csvlens) のポートで、テーブルデータの簡単なプレビューを可能にする.
- [emmanueltouzery/decisive.nvim](https://github.com/emmanueltouzery/decisive.nvim) - CSVファイルを簡単に高速に閲覧・編集できます
- [hat0uma/csvview.nvim](https://github.com/hat0uma/csvview.nvim) - リアルタイム更新、カスタマイズ可能なコメントと区切り記号、複数の表示モードを備えた非同期CSV/TSVテーブル閲覧器

[**⬆ 目次へ戻る**](#contents)


## アニメーション

- [LuxVim/nvim-luxmotion](https://github.com/LuxVim/nvim-luxmotion) - スムーズで高パフォーマンスの動きとスクロールアニメーション — 60fpsの流れるようなカーソル移動、単語ジャンプ、ビューのスクロールすべてを1つで実現
- [sphamba/smear-cursor.nvim](https://github.com/sphamba/smear-cursor.nvim) - すべてのターミナルでカーソルにスメア効果を適用します。Neovideのアニメーションカーソルをインスピレーションに受けています
- [nvim-mini/mini.nvim#mini.animate](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-animate.md) - `mini.nvim` のモジュールで、カーソル移動、スクロール、サイズ変更、ウィンドウ開閉などの標準的な動作に即時アニメーションを追加する.
- [rachartier/tiny-glimmer.nvim](https://github.com/rachartier/tiny-glimmer.nvim/) - さまざまな操作に微細なアニメーションを追加します
- [y3owk1n/undo-glow.nvim](https://github.com/y3owk1n/undo-glow.nvim/) - 編集操作（取り消し、再実行、クリップ、貼り付けなど）にアニメーション Glow/highlight を適用。完全にカスタマイズ可能なアニメーションと外観を提供します
- [gen740/SmoothCursor.nvim](https://github.com/gen740/SmoothCursor.nvim) - サインカラムにエレガントなサブカーソルを追加し、スクロールやジャンプ方向を表示します
- [indium114/smudge.nvim](https://github.com/indium114/smudge.nvim) - パフォーマンスの高いカーソルアニメーション

[**⬆ 目次へ戻る**](#contents)


## ターミナル統合

- [TheLazyCat00/termfile-nvim](https://github.com/TheLazyCat00/termfile-nvim) - ファイルを永続的なターミナルセッションに変換し、バックグラウンド作業をスムーズに実行できます
- [TheLazyCat00/runner-nvim](https://github.com/TheLazyCat00/runner-nvim) - 浮遊ターミナル内でコマンドを実行し、CWDごとの最後に実行されたコマンドを追跡することで、ビルドやテストコマンドを簡単に繰り返し実行できます
- [LuxVim/nvim-luxterm](https://github.com/LuxVim/nvim-luxterm) - 浮遊ウィンドウターミナルセッションマネージャー。エレガントなマルチターミナル構成、リアルタイムプレビュー、現代的なUIデザインによる直感的なナビゲーションを提供。複数のターミナルを簡単に管理・切り替え・カスタマイズできます
- [waiting-for-dev/ergoterm.nvim](https://github.com/waiting-for-dev/ergoterm.nvim) - スマートピッカーに基づいたターミナル選択と、柔軟なテキスト送信、永続的な設定を備えた、ターミナルワークフローのシームレス統合
- [ingur/floatty.nvim](https://github.com/ingur/floatty.nvim) - 200行未満（<200 LOC）だが、非常にカスタマイズ可能なフロートターミナルマネージャー
- [imranzero/multiterm.nvim](https://github.com/imranZERO/multiterm.nvim) - 複数のフロートターミナルウィンドウを簡単に管理
- [Dan7h3x/neaterm.nvim](https://github.com/Dan7h3x/neaterm.nvim) - 素晴らしい機能を備えた、小さなスマートターミナル／REPLマネージャー
- [nikvdp/neomux](https://github.com/nikvdp/neomux) - `:term` コマンドを通じて実行されたシェルから編集器を制御する.
- [willothy/flatten.nvim](https://github.com/willothy/flatten.nvim) - ターミナルバッファから現在のエディタインスタンスでファイルを開く（ネストインスタンスを起動しない）
- [akinsho/toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim) - 複数のターミナルウィンドウを簡単に管理
- [norcalli/nvim-terminal.lua](https://github.com/norcalli/nvim-terminal.lua) - 高速なファイルタイプモードで、concealを活用し、バッファに正しい色コードでハイライト
- [numToStr/FTerm.nvim](https://github.com/numToStr/FTerm.nvim) - Luaで書かれた、無駄のないフロートターミナル
- [jghauser/kitty-runner.nvim](https://github.com/jghauser/kitty-runner.nvim) - 貧しい人のREPL。バッファの行やコマンドを簡単にkittyターミナルに送信可能
- [jlesquembre/nterm.nvim](https://github.com/jlesquembre/nterm.nvim) - ターミナルと通知を相互作用
- [s1n7ax/nvim-terminal](https://github.com/s1n7ax/nvim-terminal) - シンプルで使いやすいマルチターミナルプラグイン
- [logicmagix/tide42](https://github.com/logicmagix/tide42) - Lua、tmux、スクリプト可能なワークフローに基づいた完全統合ターミナルIDE
- [samjwill/nvim-unception](https://github.com/samjwill/nvim-unception) - ターミナルバッファから開始されたエディタセッションの自動ネスト解除
- [Senal-D-A-Gunaratna/hyprfade.nvim](https://github.com/Senal-D-A-Gunaratna/hyprfade.nvim) - Hyprlandを使用する際、 `hyprctl` を使ってターミナルウィンドウをフェードさせる.
- [kassio/neoterm](https://github.com/kassio/neoterm) - いくつかの `:terminal` 関数をラップしたプラグイン.
- [nyngwang/NeoTerm.lua](https://github.com/nyngwang/NeoTerm.lua) - 各**バッファ**に対してターミナルを接続、安定したトグルと驚異的なカーソル復元を実現
- [idanarye/nvim-channelot](https://github.com/idanarye/nvim-channelot) - Luaコルーチンからエディタジョブを操作
- [chomosuke/term-edit.nvim](https://github.com/chomosuke/term-edit.nvim) - コマンドをターミナル内で編集できるようにする（他のバッファと同様）
- [mikesmithgh/kitty-scrollback.nvim](https://github.com/mikesmithgh/kitty-scrollback.nvim) - kittyのスクロールバックバッファを開く。アメオウ。
- [niuiic/terminal.nvim](https://github.com/niuiic/terminal.nvim) - ターミナルをバッファとして管理、複数ターミナル対応
- [NeViRAIDE/nekifoch.nvim](https://github.com/NeViRAIDE/nekifoch.nvim) - kittyターミナルのフォント設定を管理
- [2KAbhishek/termim.nvim](https://github.com/2KAbhishek/termim.nvim/) - 内蔵ターミナル、改善
- [samharju/yeet.nvim](https://github.com/samharju/yeet.nvim) - ターミナルバッファまたはtmuxパネル内でシェルコマンドを実行する
- [isak102/ghostty.nvim](https://github.com/isak102/ghostty.nvim) - Ghosttyの設定を保存時に自動的に検証する
- [laktak/tome](https://github.com/laktak/tome) - ターミナルに用意されたインタラクティブなスクリプトプレイブック（オプションでtmuxを含む）
- [Axot017/multiterm.nvim](https://github.com/Axot017/multiterm.nvim) - 複数のターミナルインスタンスを管理する軽量マネージャー（キーバインディング付き）
- [da-moon/telescope-toggleterm.nvim](https://github.com/da-moon/telescope-toggleterm.nvim) - ターミナルバッファ用のTelescope選択機能
- [benoror/gpg.nvim](https://github.com/benoror/gpg.nvim) - GPG暗号化ファイルを対称的に編集する
- [gh-liu/nvim-winterm](https://github.com/gh-liu/nvim-winterm) - マルチターミナルウィンドウマネージャー
- [hawknewton/termyank.nvim](https://github.com/hawknewton/termyank.nvim) - ターミナルバッファ内で新しい改行をヤンクしない
- [jaimeibanezrivera/zj-theme](https://github.com/jaimeibanezrivera/zj-theme) - zellijのテーマを現在アクティブなカラーチームに同期し、リアルタイムで反映、再起動不要

[**⬆ 目次へ戻る**](#contents)


## デバッグ

- [mfussenegger/nvim-dap](https://github.com/mfussenegger/nvim-dap) - デバッグアダプタプロトコルのクライアント実装
- [sakhnik/nvim-gdb](https://github.com/sakhnik/nvim-gdb) - GDB、LLDB、PDB/PDB++およびBashDBへの軽量ラッパー
- [rcarriga/nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui) - nvim-dap用のUI
- [pocco81/dap-buddy.nvim](https://github.com/pocco81/dap-buddy.nvim) - nvim-dapで複数のデバッガを管理する
- [Weissle/persistent-breakpoints.nvim](https://github.com/Weissle/persistent-breakpoints.nvim) - nvim-dapのパーセントブレークポイントを保持する
- [ofirgall/goto-breakpoints.nvim](https://github.com/ofirgall/goto-breakpoints.nvim) - nvim-d及のブレークポイントをサイクルする
- [andrewferrier/debugprint.nvim](https://github.com/andrewferrier/debugprint.nvim) - print()方式でデバッグする
- [t-troebst/perfanno.nvim](https://github.com/t-troebst/perfanno.nvim) - コードにコールグラフプロファイリングデータを注釈する。perf、flamegraphおよびLuaJITプロファイラーへのネイティブサポート
- [niuiic/dap-utils](https://github.com/niuiic/dap-utils.nvim) - nvim-dapの使用をより良い体験にするためのユーティリティ
- [theHamsta/nvim-dap-virtual-text](https://github.com/theHamsta/nvim-dap-virtual-text) - nvim-dap用の仮想テキストサポート
- [chrisgrieser/nvim-chainsaw](https://github.com/chrisgrieser/nvim-chainsaw) - ログ作成を高速化。変数、アサーション、時間測定など、言語に応じたさまざまなログステートメントを作成
- [Willem-J-an/visidata.nvim](https://github.com/Willem-J-an/visidata.nvim) - Pandasデータフレームを `nvim-dap` で visidata の力を用いてレンダリングする.
- [igorlfs/nvim-dap-view](https://github.com/igorlfs/nvim-dap-view) - nvim-dap用の現代的かつミニマリズムのUI
- [Carcuis/dap-breakpoints.nvim](https://github.com/Carcuis/dap-breakpoints.nvim) - nvim-dapで、仮想テキストとポップアップ表示を用いて高度なブレークポイントを管理・作成
- [ravsii/nvim-dap-envfile](https://github.com/ravsii/nvim-dap-envfile) - nvim-dap 用の自動 `envFile` サポート
- [fschaal/azfunc.nvim](https://github.com/fschaal/azfunc.nvim) - Azure Functionsのデバッグを自動DAP統合によりスムーズに実行
- [evanmcpheron/rocketlog.nvim](https://github.com/evanmcpheron/rocketlog.nvim) - JavaScriptおよびTypeScriptファイルにログを追加し、ログとメタデータの検索を可能に
- [NickTsaizer/splitasm.nvim](https://github.com/NickTsaizer/splitasm.nvim) - コンパイルされたアセンブリ出力とソースコードを並列に表示し、カーソルの移動を同期

### Quickfix

- [kevinhwang91/nvim-bqf](https://github.com/kevinhwang91/nvim-bqf) - クイックフィックスウィンドウをより良くする
- [yorickpeterse/nvim-pqf](https://github.com/yorickpeterse/nvim-pqf) - Prettierクイックフィックス／ロケーションリストウィンドウ
- [ashfinal/qfview.nvim](https://github.com/ashfinal/qfview.nvim) - 一貫したパス短縮と折りたたみを備えたクイックフィックス／ロケーションビュー
- [niuiic/quickfix.nvim](https://github.com/niuiic/quickfix.nvim) - クイックフィックスの拡張機能（保存、復元、作成、削除など）
- [stevearc/quicker.nvim](https://github.com/stevearc/quicker.nvim) - クイックフィックスUIの改善および編集可能なクイックフィックスバッファ

[**⬆ 目次へ戻る**](#contents)


## テスト

- [David-Kunz/jester](https://github.com/David-Kunz/jester) - Jestテストの実行とデバッグを簡単に
- [klen/nvim-test](https://github.com/klen/nvim-test) - テスト実行用のラッパー
- [nvim-neotest/neotest](https://github.com/nvim-neotest/neotest) - エディタ内でのテストとのインタラクションを可能にする拡張フレームワーク
- [andythigpen/nvim-coverage](https://github.com/andythigpen/nvim-coverage) - サインカラムにカバレッジ情報を表示
- [quolpr/quicktest.nvim](https://github.com/quolpr/quicktest.nvim) - スプリットウィンドウまたはポップアップでテストを実行し、リアルタイムフィードバックを提供
- [zkucekovic/tdd.nvim](https://github.com/zkucekovic/tdd.nvim) - PSR-4名前空間マッピングに基づき、指定されたクラスに対してマッチングするPHPUnitテストファイルを開くまたは作成
- [nvim-neotest/neotest-jest](https://github.com/nvim-neotest/neotest-jest) - Jestテストの実行用のNeotestアダプタ
- [MisanthropicBit/neotest-busted](https://github.com/MisanthropicBit/neotest-busted) - エディタをLuaインタープリタとして使用して、バーストしたテストを実行するためのNeotestアダプタ
- [mr-u0b0dy/crazy-coverage.nvim](https://github.com/mr-u0b0dy/crazy-coverage.nvim) - コードカバレッジの表示

[**⬆ 目次へ戻る**](#contents)


## コード実行

- [rafcamlet/nvim-luapad](https://github.com/rafcamlet/nvim-luapad) - Luaコードを実行するためのインタラクティブなスクラッチパッド
- [michaelb/sniprun](https://github.com/michaelb/sniprun) - あなたのエディタから、どんな言語のコードでも直接実行できる。
- [CRAG666/code_runner.nvim](https://github.com/CRAG666/code_runner.nvim) - 最も優れたコード実行ツールであり、超能力を備えている。
- [is0n/jaq-nvim](https://github.com/is0n/jaq-nvim) - Lua におけるただのもう一つの Quickrun プラグイン。
- [jedrzejboczar/toggletasks.nvim](https://github.com/jedrzejboczar/toggletasks.nvim) - JSON/YAML ファイルで構成されたタスク実行ツール。toggleterm.nvim と telescope.nvim を使用。
- [EthanJWright/vs-tasks.nvim](https://github.com/EthanJWright/vs-tasks.nvim) - プロジェクトジョブの実行と管理を行い、VSCodeの `tasks.json` スペックをサポートする。
- [stevearc/overseer.nvim](https://github.com/stevearc/overseer.nvim) - タスク実行とジョブ管理プラグイン。
- [desdic/greyjoy.nvim](https://github.com/desdic/greyjoy.nvim) - Makefile、VSCode タスク、kitchen などに特化したモジュラーなタスク実行ツール。
- [Shatur/neovim-tasks](https://github.com/Shatur/neovim-tasks) - ビルドシステムとの統合に焦点を当てた状態を保持するタスクマネージャー。
- [krady21/compiler-explorer.nvim](https://github.com/krady21/compiler-explorer.nvim) - [compiler-explorer](https://godbolt.org/) の REST API を使用した非同期コンパイル。
- [hadishahpuri/nvimlaunch](https://github.com/hadishahpuri/nvimlaunch) - プロジェクトごとのコマンドを定義・実行・管理できる。
- [milanglacier/yarepl.nvim](https://github.com/milanglacier/yarepl.nvim) - もう一つのREPL（インタラクティブ実行環境）。柔軟で、複数のプログラミングアプローチに対応し、他の依存関係なしにネイティブなドット繰り返しをサポート。
- [Vigemus/iron.nvim](https://github.com/Vigemus/iron.nvim) - 30以上の言語に内蔵されたインタラクティブREPL。
- [Civitasv/cmake-tools.nvim](https://github.com/Civitasv/cmake-tools.nvim) - CMakeとの統合。
- [idanarye/nvim-moonicipal](https://github.com/idanarye/nvim-moonicipal) - 個人のタスクが頻繁に変化する場合に特化したタスク実行ツール。
- [MarcHamamji/runner.nvim](https://github.com/MarcHamamji/runner.nvim) - カスタマイズ可能なLuaコード実行ツール。
- [google/executor.nvim](https://github.com/google/executor.nvim) - コマンドラインタスクをバックグラウンドで実行し、結果に通知される。
- [sektant1/executioner.nvim](https://github.com/sektant1/executioner.nvim) - プロジェクトディレクトリから任意のスクリプトを検索・実行できるスクリプト選択と実行ツール。引数付きまたはなしで実行可能。
- [Zeioth/compiler.nvim](https://github.com/Zeioth/compiler.nvim) - 構成を一切行わずにコードをビルド・実行できるコンパイラ。
- [Zeioth/makeit.nvim](https://github.com/Zeioth/makeit.nvim) - overseer をベースにしたMakefile実行ツール。
- [jaytyrrell13/static.nvim](https://github.com/jaytyrrell13/static.nvim) - 静的サイトジェネレーターのコマンドを実行できる。
- [dasupradyumna/launch.nvim](https://github.com/dasupradyumna/launch.nvim) - シンプルで迅速なタスク起動ツール。動的にタスクを設定でき、デバッグ対応をオプションでサポート。
- [benlubas/molten-nvim](https://github.com/benlubas/molten-nvim) - Jupyter カーネルを使ってコードブロックを実行可能。出力（画像出力も含む）はコードの下に浮かぶウィンドウで表示される。
- [pianocomposer321/officer.nvim](https://github.com/pianocomposer321/officer.nvim) - オーバーセイア.rnvで動作する、dispatch.vimに似たもの
- [speelbarrow/spLauncher.nvim](https://github.com/speelbarrow/spLauncher.nvim) - タスクの起動に使えるものだと考えます
- [al1-ce/just.nvim](https://github.com/al1-ce/just.nvim) - justfiles用のタスクランナー
- [niuiic/task.nvim](https://github.com/niuiic/task.nvim) - タスクを非常にカスタマイズ可能にし、タスクとのスムーズな相互作用を可能にする別のタスクマネージャー
- [chrisgrieser/nvim-justice](https://github.com/chrisgrieser/nvim-justice) - `just` タスクランナーへの軽量統合。
- [pewpewnor/pilot.nvim](https://github.com/pewpewnor/pilot.nvim) - キーバインディングを使ってプロジェクトやファイルを迅速に実行し、その実行方法を即座に設定できます
- [ok97465/ipybridge.nvim](https://github.com/ok97465/ipybridge.nvim) - Pythonコードの実行、Jupyterセルの実行、デバッグ、変数の探索を可能にします
- [wsdjeg/code-runner.nvim](https://github.com/wsdjeg/code-runner.nvim) - 範囲をサポートするアシンクコードランナー
- [mikeboiko/nvim-flow](https://github.com/mikeboiko/nvim-flow) - YAML設定、コマンドプレビュー、デバッグ統合、トレースバックのクイックフィックスを備えたファイルスコープコマンドランナー
- [negativo/nx-nvim](https://github.com/negativo/nx-nvim) - NXのモノリソプロジェクトとターゲットに対するTelescope選択器で、選択されたものをスプリットターミナルで実行
- [lewistg/pesto.nvim](https://github.com/lewistg/pesto.nvim) - - Bazelとの統合（_Build Event Protocol_）により、失敗したビルドアクションのログを検索・取得・解析し、リモートに保存されたログも含む
- [wsdjeg/tasks.nvim](https://github.com/wsdjeg/tasks.nvim) - 外部ツールとの統合を可能にするタスクマネージャー。VSCodeのタスクマネージャーをインスピレーションとしています
- [JulOuellet/bzl.nvim](https://github.com/JulOuellet/bzl.nvim) - Bazel統合：ターゲット選択とツリー、実行/テスト/ビルド時のストリーミング出力、Bazelで管理された依存関係に対するLSPサポート

[**⬆ 目次へ戻る**](#contents)


## Neovim Lua開発

- [saghen/blink.lib](https://github.com/saghen/blink.lib) - すべての他の `blink.*` プラグイン向けの汎用ユーティリティ。
- [folke/lazydev.nvim](https://github.com/folke/lazydev.nvim) - LuaLSのセットアップを速くする
- [lumen-oss/luarocks-tag-release](https://github.com/lumen-oss/luarocks-tag-release) - GitHubアクションで、あなたのプラグインをLuaRocksに公開する
- [svermeulen/vimpeccable](https://github.com/svermeulen/vimpeccable) - .vimrcをLuaまたはLuaベースの言語で書くために使えるコマンド
- [nvim-lua/plenary.nvim](https://github.com/nvim-lua/plenary.nvim) - プラネリ：完全；完全に；全体；絶対；未指定。私が二度書く必要のないすべてのLua関数
- [tjdevries/vlog.nvim](https://github.com/tjdevries/vlog.nvim) - 1ファイルで構成され、依存関係なし、簡単にコピー＆ペーストしてLuaプラグインに追加できるログファイル
- [bfredl/nvim-luadev](https://github.com/bfredl/nvim-luadev) - REPL/debug コンソールの Lua プラグイン。 `:Luadev` コマンドはスクラッチウィンドウを開き、Lua コードの実行結果を表示する。
- [jbyuki/one-small-step-for-vimkind](https://github.com/jbyuki/one-small-step-for-vimkind) - エディタインスタンス内で実行中のすべてのLuaコードをデバッグできる、組み込みLua言語用のアダプタ
- [kkharji/sqlite.lua](https://github.com/kkharji/sqlite.lua) - SQLite/LuaJITのバインディング
- [MunifTanjim/nui.nvim](https://github.com/MunifTanjim/nui.nvim) - UIコンポーネントライブラリ
- [nvim-mini/mini.nvim#mini.doc](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-doc.md) - EmmyLuaのような注釈からヘルプファイルを生成するための `mini.nvim` モジュール。出力の柔軟なカスタマイズをホック関数で可能にする。
- [milisims/nvim-luaref](https://github.com/milisims/nvim-luaref) - ビルトインLua関数に関するリファレンス。
- [DrKJeff16/nvim-luaref](https://github.com/DrKJeff16/nvim-luaref) - `milisims/nvim-luaref` からフォークされたもので、組み込みの Lua 5.1 ヘルプドキュメントを追加。
- [nvim-mini/mini.nvim#mini.test](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-test.md) - 階層的なテスト、ホック、パラメトリゼーション、フィルタリング、スクリーンテスト、"bustedスタイル"のエミュレーション、カスタマイズ可能なレポート、その他をサポートする、拡張プラグインテストを書くための `mini.nvim` モジュール。
- [ray-x/guihua.lua](https://github.com/ray-x/guihua.lua) - Lua用のUIライブラリ。fzy検索バー、リストビュー、ツリービューモジュールを含む。
- [anuvyklack/animation.nvim](https://github.com/anuvyklack/animation.nvim) - アニメーションの作成。
- [nfrid/treesitter-utils](https://github.com/nfrid/treesitter-utils) - いくつかの便利なTree-sitterメソッド。
- [svermeulen/nvim-lusc](https://github.com/svermeulen/nvim-lusc) - Luaに構造化されたアシンク/コンカレンシーをサポートする。
- [gregorias/coop.nvim](https://github.com/gregorias/coop.nvim) - Luaコルーチンを使った構造化コンカレンシー。
- [CWood-sdf/banana.nvim](https://github.com/CWood-sdf/banana.nvim) - プラグインUI用のHTMLレンダラー。
- [OXY2DEV/helpview.nvim](https://github.com/OXY2DEV/helpview.nvim) - ハッキング可能で、かっこいい `vimdoc/help` ファイル閲覧機能。
- [niuiic/omega.nvim](https://github.com/niuiic/omega.nvim) - Luaプラグイン開発用の欠落関数。
- [2KAbhishek/utils.nvim](https://github.com/2KAbhishek/utils.nvim) - プラグイン開発を加速する強力なユーティリティ。
- [YaroSpace/lua-console.nvim](https://github.com/YaroSpace/lua-console.nvim) - ビルトインLua開発用の便利なスクラッチペッド／REPL／デバッグコンソール。
- [DrKJeff16/wezterm-types](https://github.com/DrKJeff16/wezterm-types) - LuaLS用のWezTerm設定型注釈、コミュニティプラグインのサポートを含む。
- [chrisgve/databox.nvim](https://github.com/chrisgve/databox.nvim) - Lua テーブルの暗号化ストレージを、 [age](https://github.com/FiloSottile/age) またはその互換ツールを使用して暗号安全性を確保。
- [BirdeeHub/lze](https://github.com/BirdeeHub/lze) - プラグイン用の遅延ロードライブラリ。
- [lumen-oss/lz.n](https://github.com/lumen-oss/lz.n) - プラグイン用のシンプルな遅延ロードライブラリ。
- [jrop/morph.nvim](https://github.com/jrop/morph.nvim) - インタラクティブなバッファ／TUIを構築するためのReactのようなレンダラー。

[**⬆ 目次へ戻る**](#contents)


## Fennel

- [aileot/nvim-thyme](https://github.com/aileot/nvim-thyme) - ゼロオーバーヘッドの Fennel JIT コンパイラで、安全性の確保されたロールバックと [parinfer-rust](https://github.com/eraserhd/parinfer-rust) の統合。
- [Olical/aniseed](https://github.com/Olical/aniseed) - Fennelでエディタを構成・拡張する。
- [Olical/nfnl](https://github.com/Olical/nfnl) - Aniseedの簡易な継承品。ファイルの書き込み時にFennelをLuaにコンパイルする。
- [Olical/conjure](https://github.com/Olical/conjure) - インタラクティブ評価（Clojure、Fennel、Janet、Racket、Hy、MIT Scheme、Guile）。
- [rktjmp/hotpot.nvim](https://github.com/rktjmp/hotpot.nvim) - エディタ内にスムーズで透明なFennel。
- [udayvir-singh/tangerine.nvim](https://github.com/udayvir-singh/tangerine.nvim) - タangerineは、構成ファイルにフェンネルを追加するための痛みのない方法を提供します
- [udayvir-singh/hibiscus.nvim](https://github.com/udayvir-singh/hibiscus.nvim) - 構成ファイルを美しく記述するために、強い意見をもつマクロを提供します

[**⬆ 目次へ戻る**](#contents)


## 依存関係管理

- [DrKJeff16/pipenv.nvim](https://github.com/DrKJeff16/pipenv.nvim) - 非同期 `Pipenv` マネージャーと `spinner.nvim` の統合。
- [vuki656/package-info.nvim](https://github.com/vuki656/package-info.nvim) - package.jsonにパッケージの最新バージョンを仮想テキストとして表示します
- [Saecki/crates.nvim](https://github.com/Saecki/crates.nvim) - `Cargo.toml` 用の Rust ディペンディエンシー管理。
- [piersolenski/import.nvim](https://github.com/piersolenski/import.nvim) - プロジェクト内で既にインポート済みのモジュールに基づいて、インポートを速くします
- [Silletr/LazyDeveloperHelper](https://github.com/Silletr/LazyDeveloperHelper) - Python ディペンディエンシー管理機能で、自動的に `requirements.txt` ファイルに追加。
- [JesperLundberg/projektgunnar.nvim](https://github.com/JesperLundberg/projektgunnar.nvim) - C#の依存関係マネージャーで、プロジェクト間およびソリューションファイル間の参照を扱えます
- [cosmicbuffalo/gem_install.nvim](https://github.com/cosmicbuffalo/gem_install.nvim) - Ruby グェームのインストール、 `bundle install` および `gem install` をトリガーし、進捗とキャッシュを提供して、インストールが失敗した場合にリトライを防ぐ。
- [taigrr/glaze.nvim](https://github.com/taigrr/glaze.nvim) - Goバイナリの中央管理ツールで、並列インストール、自動更新チェック、MasonスタイルのUIを提供します

[**⬆ 目次へ戻る**](#contents)


## Git

- [YouSame2/inlinediff-nvim](https://github.com/YouSame2/inlinediff-nvim) - より良いインライン Git ダイアグラムビューを提供し、お気に入りの Git プラグイン（例： `gitsigns`）と併用するためのもの。
- [mrloop/telescope-git-branch.nvim](https://github.com/mrloop/telescope-git-branch.nvim) - Gitブランチの複数コミット間で変更されたファイルを検索し、変更内容をプレビューできるテレスコープ選択ツール
- [f-person/git-blame.nvim](https://github.com/f-person/git-blame.nvim) - Gitのブレイン情報を表示できる
- [trevorhauter/gitportal.nvim](https://github.com/trevorhauter/gitportal.nvim) - Gitのパーマリンクを生成し、ブラウザで開き、パーマリンクからローカルにファイルを読み込みますなど
- [lewis6991/gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) - Git統合：サイン、ハングアクション、ブレームなど
- [nvim-mini/mini.nvim#mini.diff](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-diff.md) - `mini.nvim` のモジュールで、バッファテキストとその参照間の差分をインタラクティブに可視化。テキストエリアに切り替え可能な詳細概要、組み込みの適用/リセット/テキストオブジェクト/移動マッピング、その他を提供。
- [nvim-mini/mini.nvim#mini.git](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-git.md) - `mini.nvim` のモジュールで、現在のエディタプロセスとの強化された Git インテグレーションを実現し、Git 関連データの追跡、 `:Git` ユーザーコマンド、および Git ヒストリを探索するための各種ヘルパーを実装。
- [NeogitOrg/neogit](https://github.com/NeogitOrg/neogit) - Vimの哲学に合うように一部を変更したMagitのクローンです
- [tveskag/nvim-blame-line](https://github.com/tveskag/nvim-blame-line) - 現在の行の末尾にGitブレーム情報を仮想テキストで表示する、小さなプラグインです
- [linrongbin16/gitlinker.nvim](https://github.com/linrongbin16/gitlinker.nvim) - ruifmの"gitlinker"の維持されたフォークで、バグ修正、SSHエイリアス、ブレーム対応など、他の改善を加えています
- [tanvirtin/vgit.nvim](https://github.com/tanvirtin/vgit.nvim) - Git経験を向上させるための視覚的なGitプラグイン
- [dlyongemallo/diffview.nvim](https://github.com/dlyongemallo/diffview.nvim) - すべての変更されたファイルのdiffを簡単にサイクルできる、1タブページインターフェース。sindrets/diffview.nvimの維持されたフォークです
- [barrettruth/diffs.nvim](https://github.com/barrettruth/diffs.nvim) - `vim-fugitive` および `&diff` バッファに対応した Tree-sitter を使用した差分の文法強調。
- [kdheepak/lazygit.nvim](https://github.com/kdheepak/lazygit.nvim) - lazygitを呼び出すためのプラグインです
- [AckslD/nvim-gfold.lua](https://github.com/AckslD/nvim-gfold.lua) - [gfold](https://github.com/nickgerace/gfold) を使用してリポジトリを切り替え、ステータスラインコンポーネントを提供するプラグイン。
- [aaronhallaert/advanced-git-search.nvim](https://github.com/aaronhallaert/advanced-git-search.nvim) - Telescopeを使って、コミット内容、メッセージ、著者でGitの履歴を検索します
- [9seconds/repolink.nvim](https://github.com/9seconds/repolink.nvim) - さまざまなGitウェブフロントエンド向けに共有可能なHTTPパーマリンクを生成します
- [chrisgrieser/nvim-tinygit](https://github.com/chrisgrieser/nvim-tinygit) - 軽量でスムーズなGitクライアントです
- [niuiic/git-log.nvim](https://github.com/niuiic/git-log.nvim) - 選択されたコードのGitログを確認します
- [2KAbhishek/co-author.nvim](https://github.com/2KAbhishek/co-author.nvim) - コミットにコーアウターを迅速に追加できる
- [isak102/telescope-git-file-history.nvim](https://github.com/isak102/telescope-git-file-history.nvim) - 特定のコミットでの現在のファイルの内容を開く／プレビューを行うが、 `git checkout` を使用しない。
- [moyiz/git-dev.nvim](https://github.com/moyiz/git-dev.nvim) - 編集中にリモートGitリポジトリを開ける
- [SuperBo/fugit2.nvim](https://github.com/SuperBo/fugit2.nvim) - [libgit2](https://libgit2.org) で駆動された Git GUI。
- [Yu-Leo/blame-column.nvim](https://github.com/Yu-Leo/blame-column.nvim) - Gitのブレイン情報を表示できる
- [yutkat/git-rebase-auto-diff.nvim](https://github.com/yutkat/git-rebase-auto-diff.nvim) - Gitのリベース時に自動的に差分を表示できる
- [Kohei-Wada/yadm-git.nvim](https://github.com/Kohei-Wada/yadm-git.nvim) - yadm dotfiles向けにスムーズなGitプラグインサポート
- [axkirillov/unified.nvim](https://github.com/axkirillov/unified.nvim) - バッファ内に直接統合差分を表示できる
- [kokusenz/deltaview.nvim](https://github.com/kokusenz/deltaview.nvim) - インライン/統合差分表示機能付きで、Tree-sitterによる文法ハイライトと、[delta](https://github.com/dandavison/delta)スタイルの差分ハイライトを提供。さらにナビゲーション機能を強化。
- [StackInTheWild/headhunter.nvim](https://github.com/StackInTheWild/headhunter.nvim) - マージコンフリクトを検索・解決する高速かつシンプルなツール
- [yus-works/csc.nvim](https://github.com/yus-works/csc.nvim) - Gitの履歴から学習した、コンベンショナルコミットのスコープ補完
- [404pilo/aicommits.nvim](https://github.com/404pilo/aicommits.nvim) - AIを用いてコンベンショナルコミットメッセージを生成できる
- [wsdjeg/git.nvim](https://github.com/wsdjeg/git.nvim) - async Gitコマンドをラップするプラグイン。`:Git`コマンドを使用し、`:!git`コマンドを代替。
- [Mauritz8/gitstatus.nvim](https://github.com/Mauritz8/gitstatus.nvim) - ステージング、アンステージング、コミットファイルをサポートするインタラクティブなGitステータスウィンドウ
- [esmuellert/codediff.nvim](https://github.com/esmuellert/codediff.nvim) - VSCodeのアルゴリズムをCで実装した、2段階ハイライト（行＋文字レベル）による並列差分
- [ajatdarojat45/commitmate.nvim](https://github.com/ajatdarojat45/commitmate.nvim) - 一般的なコミット規約に従ったAIによるコミットメッセージ生成ツール
- [Enigama/remarks.nvim](https://github.com/Enigama/remarks.nvim) - Gitコミットに個人開発ノートを付加できる
- [Salanoid/gitlogdiff.nvim](https://github.com/Salanoid/gitlogdiff.nvim) - JetBrainsのGitログに類似した、複数コミット間の差分を表示できる
- [Sengoku11/commitpad.nvim](https://github.com/Sengoku11/commitpad.nvim) - 情報量豊かなコミットを書くために、永続的なワークツリー分離ドロップ、視覚50/72ガイド、Markdownバッファを提供する
- [BibekBhusal0/nvim-git-utils](https://github.com/BibekBhusal0/nvim-git-utils) - Git操作時に生活を楽にするためのシンプルなコマンド
- [spacedentist/resolve.nvim](https://github.com/spacedentist/resolve.nvim) - マージコンフリクトを簡単に解決できる
- [jceb/jiejie.nvim](https://github.com/jceb/jiejie.nvim) - Jujutsuのスタイルにした前端。 `fugitive`
- [chojs23/ec](https://github.com/chojs23/ec) - 3つのパネルを持つTUI本体のGitマージツール
- [harrisoncramer/GitLab.nvim](https://github.com/harrisoncramer/GitLab.nvim) - プルリクエストの確認とその他のGitLabリソースの管理

### GitHub

- [pwntester/octo.nvim](https://github.com/pwntester/octo.nvim) - GitHubのイシューとPRとの連携
- [ldelossa/gh.nvim](https://github.com/ldelossa/gh.nvim) - GitHubのコードレビューを実行するための完全な機能付き統合
- [topaxi/pipeline.nvim](https://github.com/topaxi/pipeline.nvim) - GitHub ActionsのワークフローおよびGitLab CIパイプラインの実行を表示および実行
- [rawnly/gist.nvim](https://github.com/rawnly/gist.nvim) - 現在のファイルからGitHub Gistを作成（ghによって駆動）
- [2KAbhishek/octohub.nvim](https://github.com/2KAbhishek/octohub.nvim) - すべてのGitHubリポジトリ、統計情報など、シンプルなキーボードショートカットでアクセス
- [comatory/gh-co.nvim](https://github.com/comatory/gh-co.nvim) - GitHubの`CODEOWNERS`仕様に基づき、ファイルごとのコードオーナーを表示。
- [3ZsForInsomnia/revman.nvim](https://github.com/3ZsForInsomnia/revman.nvim) - レビューが必要なPRを自動的に追跡し、Octo.nvimで開く
- [cd-4/git-needy.nvim](https://github.com/cd-4/git-needy.nvim) - ステータスバーにレビューが必要なワークフローの数を表示
- [claydugo/browsher.nvim](https://github.com/claydugo/browsher.nvim) - GitHubにホストされたファイルや行へのコミットピンリンクを作成
- [gh-tui-tools/gh-review.nvim](https://github.com/gh-tui-tools/gh-review.nvim) - GitHubのPRをレビュー
- [justinmk/guh.nvim](https://github.com/justinmk/guh.nvim) - 任意のGitHubオブジェクト（CIログを含む）を表示
- [mesirendon/nvim-ghrelease](https://github.com/mesirendon/nvim-ghrelease) - リポジトリの現在のリリースに基づき、新しいGitHubリリースを作成

[**⬆ 目次へ戻る**](#contents)


## 移動

- [HawkinsT/pathfinder.nvim](https://github.com/HawkinsT/pathfinder.nvim) - gf/gF/gxに前方予測とスマートなファイル、行/列番号、リンク解決を追加。また、ファイル/リンクの視覚的ターゲット、新しい移動コマンド、リンク説明の取得を提供
- [nolleh/warp.nvim](https://github.com/nolleh/warp.nvim) - ラベルに基づいて、任意のバッファからファイルパス、URL、Markdownリンクへジャンプ
- [tris203/precognition.nvim](https://github.com/tris203/precognition.nvim) - Precognitionは仮想テキストとグリットサインを使用して、利用可能な移動を表示
- [smoka7/hop.nvim](https://github.com/smoka7/hop.nvim) - HopはEasyMotionに類するプラグインで、可能な限り少ないキーボードショートカットでドキュメントのどこかにジャンプできる
- [ggandor/lightspeed.nvim](https://github.com/ggandor/lightspeed.nvim) - Sneakに類するプラグインで、事前に表示されたラベルにより、検索パターンの入力とターゲット選択の間の停止を完全に除去し、極めて高速なナビゲーションを提供
- [ggandor/leap.nvim](https://github.com/ggandor/leap.nvim) - Lightspeedの精緻な後継として、Vim風エディタでの移動に広く受け入れられる標準インターフェース拡張を目指す
- [ggandor/flit.nvim](https://github.com/ggandor/flit.nvim) - Leapのf/t移動を強化
- [ggandor/leap-spooky.nvim](https://github.com/ggandor/leap-spooky.nvim) - Spooky（Leap）による遠隔操作
- [rasulomaroff/telepath.nvim](https://github.com/rasulomaroff/telepath.nvim) - 別のアプローチによるリモート操作を行うLeapの拡張
- [folke/flash.nvim](https://github.com/folke/flash.nvim) - 検索ラベル、強化された文字移動、Tree-sitter統合によりコードをナビゲート
- [nvim-mini/mini.nvim#mini.jump](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-jump.md) - `mini.nvim`のモジュールで、1文字にジャンプする際にスマートに動作する機能
- [nvim-mini/mini.nvim#mini.jump2d](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-jump2d.md) - `mini.nvim`のモジュールで、可視ライン内を繰り返しラベルフィルタでフィルタリングしながらジャンプ。カスタムジャンプターゲット（スポット）、ラベル、ハック、許容されるウィンドウやライン、などに対応
- [rlane/pounce.nvim](https://github.com/rlane/pounce.nvim) - Fuzzy検索を用いたカーソル移動を可能にするEasyMotion風プラグイン
- [xiaoshihou514/squirrel.nvim](https://github.com/xiaoshihou514/squirrel.nvim) - Tree-sitterノード間を迅速にジャンプ
- [abecodes/tabout.nvim](https://github.com/abecodes/tabout.nvim) - 括弧ペア、引用符、オブジェクトなどから外へジャンプ
- [woosaaahh/sj.nvim](https://github.com/woosaaahh/sj.nvim) - 検索ベースナビゲーションと迅速ジャンプ機能を組み合わせたもの
- [cbochs/portal.nvim](https://github.com/cbochs/portal.nvim) - 既存のジャンプリスト操作（例：`<c-i>`、`<c-o>`）を拡張・改善。
- [nvim-mini/mini.nvim#mini.bracketed](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-bracketed.md) - `mini.nvim`で、四角括弧を使って前後へ移動するモジュール
- [liangxianzhe/nap.nvim](https://github.com/liangxianzhe/nap.nvim) - 1キーで次の/前のバッファ、タブ、診断などにジャンプ
- [chrisgrieser/nvim-spider](https://github.com/chrisgrieser/nvim-spider) - w, e, bの動きを蜘蛛のように使い、camelCaseを考慮し、無意味な記号をスキップ
- [backdround/neowords.nvim](https://github.com/backdround/neowords.nvim) - 任意の単語タイプでジャンプ。`w`、`e`、`b`、`ge`の移動を細かく制御できる。
- [backdround/improved-ft.nvim](https://github.com/backdround/improved-ft.nvim) - デフォルトの`f`/`t`の能力を強化
- [cosmicbuffalo/eyeliner.nvim](https://github.com/cosmicbuffalo/eyeliner.nvim) - `f`/`t`の動きにジャンプ先をハイライト
- [Mr-LLLLL/treesitter-outer](https://github.com/Mr-LLLLL/treesitter-outer) - スマートに外側ノードへジャンプ
- [Aaronik/Treewalker.nvim](https://github.com/aaronik/Treewalker.nvim) - 抽象構文木（AST）をスムーズに移動
- [timseriakov/spamguard.nvim](https://github.com/timseriakov/spamguard.nvim) - 過剰なキー連打（jjjj/kkkk）を検出し、より効率的な代替案を提案
- [millerjason/neovimacs.nvim](https://github.com/millerjason/neovimacs.nvim) - 挿入モード中にEmacsの移動およびバッファキーバインディングを提供
- [kiyoon/repeatable-move.nvim](https://github.com/kiyoon/repeatable-move.nvim) - `;`および`,`キーで、任意の操作を繰り返すことができる。
- [kkew3/jieba.vim](https://github.com/kkew3/jieba.vim) - 中国語の単語動きと単語テキストオブジェクト

### Tree-sitterベース

- [mfussenegger/nvim-treehopper](https://github.com/mfussenegger/nvim-treehopper) - Tree-sitterによるドキュメントのASTノードにヒントを表示しながら領域選択
- [drybalka/tree-climber.nvim](https://github.com/drybalka/tree-climber.nvim) - Tree-sitterのツリーを多言語ファイルや通常モードでナビゲートできるようにした簡単なナビゲーション
- [atusy/treemonkey.nvim](https://github.com/atusy/treemonkey.nvim) - Tree-sitterノードによる領域選択
- [kiyoon/treesitter-indent-object.nvim](https://github.com/kiyoon/treesitter-indent-object.nvim) - Tree-sitterをベースにした文脈認識インデントテキストオブジェクト
- [subev/sibling-jump.nvim](https://github.com/subev/sibling-jump.nvim) - シングル・ツリー・サイトターノード間のコンテキスト意識型ナビゲーション
- [iago-lito/tree-spider.nvim](https://codeberg.org/iago-lito/tree-spider.nvim) - ツリー・サイトターネイティブなローカル移動と遠隔ノード選択

[**⬆ 目次へ戻る**](#contents)


## キーバインド

- [RutaTang/compter.nvim](https://github.com/RutaTang/compter.nvim) - `<C-a>`および`<C-x>`にカスタムパターンを適用し、その能力を強化。
- [zdcthomas/yop.nvim](https://github.com/zdcthomas/yop.nvim) - 独自のオペレーターを作成できる（例：`d`、`y`）。
- [chrisgrieser/nvim-recorder](https://github.com/chrisgrieser/nvim-recorder) - マクロとのインタラクションを簡潔にし、改善
- [sontungexpt/bim.nvim](https://github.com/sontungexpt/bim.nvim) - 入力モードのキーマッピングをリアルタイムで表示し、タイムアウト待ちを避けることで、レスポンス性と直感性を高め、IMEなどの複雑な入力ワークフローに最適
- [folke/which-key.nvim](https://github.com/folke/which-key.nvim) - 開始したコマンドの可能キーバインディングを表示するポップアップを表示
- [kamegoro/tobira.nvim](https://github.com/kamegoro/tobira.nvim) - あなたの実際の使用パターンに基づき、欠けている1つのコマンドを提案
- [nvim-mini/mini.nvim#mini.clue](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-clue.md) - `mini.nvim`のモジュールで、次のキーポイントを表示。オプショントリガーを提供し、カスタマイズ可能な遅延後に次のキーポイント情報を表示。ハイドラ風のサブモードをサポートし、さらに機能を提供。
- [mrjones2014/legendary.nvim](https://github.com/mrjones2014/legendary.nvim) - キーマップ、コマンド、オートコマンドをシンプルなLuaテーブルで定義し、同時にそれらのための説明を表示（VSCodeのコマンドパレットのように）。`which-key.nvim`と統合。
- [Iron-E/nvim-cartographer](https://github.com/Iron-E/nvim-cartographer) - Lua環境向けに、より便利な`:map`ping構文を提供。
- [LionC/nest.nvim](https://github.com/LionC/nest.nvim) - Luaによるキーマッピングの簡潔な設定ツール。また、Lua関数をキーバインディングにバインドできる
- [slugbyte/unruly-worker.nvim](https://github.com/slugbyte/unruly-worker.nvim) - ワークマンキーボードレイアウトに向けた、非常に楽しい代替キーマップ。yank、マーキング、マクロ、LSPなど、多くの強力な機能を備えている。Luaで構築・設定されている。
- [FeiyouG/commander.nvim](https://github.com/FeiyouG/commander.nvim) - Telescopeを用いて、キーバインディングとコマンドをより整理された形で作成・管理し、迅速に検索できる
- [nvimtools/hydra.nvim](https://github.com/nvimtools/hydra.nvim) - カスタムサブモードとメニューを作成。Emacs Hydraのポート。anuvyklack/hydra.nvimのメンテナンスされたフォーク。
- [max397574/better-escape.nvim](https://github.com/max397574/better-escape.nvim) - 入力モードを脱出するための、遅延なしのショートカットを作成
- [TheBlob42/houdini.nvim](https://github.com/TheBlob42/houdini.nvim) - モードを脱出するための、遅延なしのショートカットを作成
- [Nexmean/caskey.nvim](https://github.com/Nexmean/caskey.nvim) - 宣言型カスケードツリーを使用したキーマップ設定のユーティリティ。必要に応じて`which-key`と統合。
- [Wansmer/langmapper.nvim](https://github.com/Wansmer/langmapper.nvim) - 非英語入力方法に対応したマッピングの自動翻訳
- [tris203/hawtkeys.nvim](https://github.com/tris203/hawtkeys.nvim) - 新しい打つのが簡単なキーバインディングを提案し、現在のキーバインディング設定に問題を検出できる
- [mawkler/demicolon.nvim](https://github.com/mawkler/demicolon.nvim) - `;`および`,`キーを使用して、診断へのジャンプ（例：`]d`）や[nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects?tab=readme-ov-file#text-objects-move)（例：`]f`）へのジャンプを繰り返すことができる。さらに、`t`/`T`/`f`/`F`の繰り返しも可能。
- [nvim-mini/mini.nvim#mini.keymap](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-keymap.md) - `mini.nvim`のモジュールで、特別なキーマップを作成するためのユーティリティを提供：複数ステップアクション（「スマート」`<Tab>`、`<S-Tab>`、`<CR>`、`<BS>`のための組み込みステップ）、コマボ（「より良いエスケープ」のような挙動の一般化バージョン）。
- [notomo/gesture.nvim](https://github.com/notomo/gesture.nvim) - マウスジェスチャープラグイン

[**⬆ 目次へ戻る**](#contents)


## スクロール

- [saghen/filler-begone.nvim](https://github.com/saghen/filler-begone.nvim) - バッファの下端を越えてスクロールしないようにし、不要な埋め込み行を表示しない
- [karb94/neoscroll.nvim](https://github.com/karb94/neoscroll.nvim) - スムーズスクロール
- [declancm/cinnamon.nvim](https://github.com/declancm/cinnamon.nvim) - すべての移動コマンドに対してスムーズスクロール
- [niuiic/scroll.nvim](https://github.com/niuiic/scroll.nvim) - スムーズスクロール、カスタムスムーズ戦略
- [rlychrisg/keepcursor.nvim](https://github.com/rlychrisg/keepcursor.nvim) - カーソル周囲の画面配置を制御するための関数のコレクション

### スクロールバー

- [Xuyuanp/scrollbar.nvim](https://github.com/Xuyuanp/scrollbar.nvim) - スクロールバー
- [dstein64/nvim-scrollview](https://github.com/dstein64/nvim-scrollview) - インタラクティブなスクロールバーを表示
- [petertriho/nvim-scrollbar](https://github.com/petertriho/nvim-scrollbar) - 拡張可能なスクロールバーで診断情報や検索結果を表示
- [nvim-mini/mini.nvim#mini.map](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-map.md) - `mini.nvim`のモジュールで、バッファのテキスト概要、スクロールバー、ハイライトを表示するフローティングウィンドウを提供。
- [gorbit99/codewindow.nvim](https://github.com/gorbit99/codewindow.nvim) - ミニマッププラグインがTree-sitterと組み込みLSPと密接に統合され、ユーザーにより多くの情報を提供
- [lewis6991/satellite.nvim](https://github.com/lewis6991/satellite.nvim) - スクロールバーを装飾
- [wsdjeg/scrollbar.nvim](https://github.com/wsdjeg/scrollbar.nvim) - フローティングスクロールバー

[**⬆ 目次へ戻る**](#contents)


## 編集支援

- [DrKJeff16/boolean-toggle.nvim](https://github.com/DrKJeff16/boolean-toggle.nvim) - カーソルの下にある `true` と `false` の間を切り替える
- [DrKJeff16/shebang.nvim](https://github.com/DrKJeff16/shebang.nvim) - 現在のファイルの上にシェルバーンを追加または変更
- [nxhung2304/lastplace.nvim](https://github.com/nxhung2304/lastplace.nvim) - ファイルを開き直したときにカーソルの位置を知的に復元
- [attilarepka/header.nvim](https://github.com/attilarepka/header.nvim) - 任意のソースファイルに著作権およびライセンスヘッダーを追加または更新
- [rlychrisg/truncateline.nvim](https://github.com/rlychrisg/truncateline.nvim) - 長さの長い行を切り詰めることで、画面左端にスクロールされたときにどこにいるかを追跡
- [zbirenbaum/neodim](https://github.com/zbirenbaum/neodim) - 未使用の関数、変数、パラメータなどに適用されるハイライトを暗くする
- [nguyenvukhang/nvim-toggler](https://github.com/nguyenvukhang/nvim-toggler) - テキストの反転、例えば `true` と `false` の間を切り替える
- [saifulapm/commasemi.nvim](https://github.com/saifulapm/commasemi.nvim) - コンマとセミコロンの切り替え
- [necrom4/convy.nvim](https://github.com/necrom4/convy.nvim) - さまざまなフォーマット間の文字列の変換を簡単に実行
- [qwavies/smart-backspace.nvim](https://github.com/qwavies/smart-backspace.nvim) - 文脈に応じたバックスペースがペア、空白、インデントを処理
- [TheLazyCat00/replace-nvim](https://github.com/TheLazyCat00/replace-nvim) - `+`レジスタの内容を使って、コードの一部を置き換えることができる。
- [wurli/split.nvim](https://github.com/wurli/split.nvim) - デリミタでテキストを分割するためのマッピングを提供し、ネイティブJコマンドの逆操作を実現
- [csessh/stopinsert.nvim](https://github.com/csessh/stopinsert.nvim) - 無活動状態後に挿入モードを自動的に終了
- [windwp/nvim-ts-autotag](https://github.com/windwp/nvim-ts-autotag) - Tree-sitterを使用してXML、HTML、JSXタグの自動閉じと自動リネームを実現
- [windwp/nvim-autopairs](https://github.com/windwp/nvim-autopairs) - Luaで書かれたミニマリストな自動ペア補完
- [ZhiyuanLck/smart-pairs](https://github.com/ZhiyuanLck/smart-pairs) - Luaで書かれた究極のスマートペアズ
- [nvim-mini/mini.nvim#mini.pairs](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-pairs.md) - `mini.nvim`のautopairsモジュールで、最小限のデフォルトとキーごとのマッピングを行う機能を備えたもの
- [m4xshen/autoclose.nvim](https://github.com/m4xshen/autoclose.nvim) - Luaで書かれたミニマリズムな自動閉じプラグイン
- [altermo/ultimate-autopair.nvim](https://github.com/altermo/ultimate-autopair.nvim) - 拡張機能付きのAutopair
- [monaqa/dial.nvim](https://github.com/monaqa/dial.nvim) - 増減機能の拡張
- [DRoma82/add-subtract-ex.nvim](https://github.com/DRoma82/add-subtract-ex.nvim) - `<C-a>`/`<C-x>`を拡張し、ブール値、比較／論理演算子、文字のシフトを切り替える。数値処理にデフォルトで委ねる。
- [HiPhish/rainbow-delimiters.nvim](https://github.com/HiPhish/rainbow-delimiters.nvim) - Tree-sitterによるRainbowデリミタ
- [AckslD/nvim-trevJ.lua](https://github.com/AckslD/nvim-trevJ.lua) - Tree-sitterで駆動された引数のjoin-line(J)の逆操作
- [okuuva/auto-save.nvim](https://github.com/okuuva/auto-save.nvim) - 必要に応じて頻繁に、かつ可能な限り少なく、自動的に作業を保存。スマートデフォルトでカスタマイズ可能。Pocco81/auto-save.nvimのメンテナンスされたフォーク
- [tmillr/sos.nvim](https://github.com/tmillr/sos.nvim) - プレセットされたタイムアウト値に基づき、すべての変更されたバッファを自動的に保存
- [folke/zen-mode.nvim](https://github.com/folke/zen-mode.nvim) - 集中したコーディング
- [andersevenrud/nvim_context_vt](https://github.com/andersevenrud/nvim_context_vt) - 現在のコンテキストの仮想テキストを表示
- [nvim-treesitter/nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context) - 現在の関数／ブロックコンテキストのフローティングホバーを表示
- [mizlan/iswap.nvim](https://github.com/mizlan/iswap.nvim) - Tree-sitterで駆動された関数引数、リスト要素などをインタラクティブに選択・交換
- [Wansmer/sibling-swap.nvim](https://github.com/Wansmer/sibling-swap.nvim) - Tree-sitterによる引数および他の兄弟要素の交換の別の方法
- [Wansmer/binary-swap.nvim](https://github.com/Wansmer/binary-swap.nvim) - 二項式表現における操作数と演算子の交換：比較および数学演算
- [nacro90/numb.nvim](https://github.com/nacro90/numb.nvim) - 非目立つ方法で行をプレビュー
- [Allendang/nvim-expand-expr](https://github.com/AllenDang/nvim-expand-expr) - 複数行に展開・繰り返し表現を実行
- [h-hg/fcitx.nvim](https://github.com/h-hg/fcitx.nvim) - 各バッファごとに独立してfcitxの状態を切り替え・復元
- [keaising/im-select.nvim](https://github.com/keaising/im-select.nvim) - 編集モードに応じて自動的に入力方法を切り替え・復元
- [nvim-mini/mini.nvim#mini.trailspace](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-trailspace.md) - `mini.nvim`のモジュールで、トリーリングスペースの自動ハイライトと削除機能を備えたもの
- [smjonas/live-command.nvim](https://github.com/smjonas/live-command.nvim) - 即時視覚フィードバック付きのテキスト編集：`:norm`、`:g`、マクロなど、プレビューコマンドを提供。
- [filipdutescu/renamer.nvim](https://github.com/filipdutescu/renamer.nvim) - VSCode風のリネームUI、Luaで記述されたもの。
- [gbprod/cutlass.nvim](https://github.com/gbprod/cutlass.nvim) - 'cut'操作を'delete'とは別に追加するプラグイン。
- [gbprod/substitute.nvim](https://github.com/gbprod/substitute.nvim) - テキストを迅速に置き換え・交換できる新しいオペレーターの動き。
- [gregorias/coerce.nvim](https://github.com/gregorias/coerce.nvim) - キーワードのケースを変更。
- [nvim-mini/mini.nvim#mini.operators](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-operators.md) - `mini.nvim`のモジュールで、置き換え、交換、複製、並べ替え、評価といったさまざまなテキスト編集オペレーターを提供。
- [gbprod/yanky.nvim](https://github.com/gbprod/yanky.nvim) - YankとPut機能の改善。
- [sQVe/sort.nvim](https://github.com/sQVe/sort.nvim) - 行単位や区切り単位の並べ替えを知的にサポートする並べ替えプラグイン。
- [booperlv/nvim-gomove](https://github.com/booperlv/nvim-gomove) - ブロックや行の移動・複製を完全にサポートするプラグイン。折りたたみの処理、再インデント、元に戻す機能をすべて一括で提供。
- [hinell/duplicate.nvim](https://github.com/hinell/duplicate.nvim) - 行や行ブロックを簡単に複製。元に戻す・展開サポート。完全なOOP。
- [hinell/move.nvim](https://github.com/hinell/move.nvim) - テキストのブロックを移動。[fedepujol/move.nvim](https://github.com/fedepujol/move.nvim)のフォーク。
- [willothy/moveline.nvim](https://github.com/willothy/moveline.nvim) - 行やブロックを上下に簡単に移動。移動中にインデントが自動的に処理される。Rustで記述されたもの。
- [nvim-mini/mini.nvim#mini.move](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-move.md) - `mini.nvim`のモジュールで、選択範囲（文字単位、行単位、ブロック単位、正常モードでの現在行）を任意方向に移動できる。`v:count`およびアンダンドストリームの処理をサポート。
- [gbprod/stay-in-place.nvim](https://github.com/gbprod/stay-in-place.nvim) - シフトやフィルタ操作時にカーソルの移動を防ぐ。
- [nvim-mini/mini.nvim#mini.ai](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-ai.md) - `mini.nvim`のモジュールで、`a`／`i`テキストオブジェクトを拡張および作成。既存のテキストオブジェクトを強化し、多数の新しいオブジェクト（例：`a*`、`a<Space>`、`a?`など）を提供し、ユーザーがLuaパターンまたは関数を使って独自のオブジェクトを作成できる。ドット繰り返し、さまざまな検索方法、連続適用、などもサポート。
- [Wansmer/treesj](https://github.com/Wansmer/treesj) - 配列、ハッシュ、文、オブジェクト、辞書など、コードブロックを分割・結合できる。Tree-sitterを使用。greatest splitjoin.vimをインスピレーションとしている。
- [bennypowers/splitjoin.nvim](https://github.com/bennypowers/splitjoin.nvim) - さまざまな構文構造を分割・結合できる。
- [nvim-mini/mini.nvim#mini.splitjoin](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-splitjoin.md) - `mini.nvim`のモジュールで、引数を分割・結合できる。カスタマイズ可能な前処理と後処理のハンドルを備えている。コメント内でも動作。
- [shortcuts/no-neck-pain.nvim](https://github.com/shortcuts/no-neck-pain.nvim) - 現在フォーカスされているバッファをターミナルの中央に配置。
- [debugloop/telescope-undo.nvim](https://github.com/debugloop/telescope-undo.nvim) - telescope拡張で、Undoツリーを可視化し、その中でのファジー検索を行う。
- [chrisgrieser/nvim-various-textobjs](https://github.com/chrisgrieser/nvim-various-textobjs) - 30以上の新しいテキストオブジェクトを提供するバンドル。
- [XXiaoA/ns-textobject.nvim](https://github.com/XXiaoA/ns-textobject.nvim) - 素晴らしいテキストオブジェクトプラグインがnvim-surroundと連携。
- [~nedia/auto-save.nvim](https://git.sr.ht/~nedia/auto-save.nvim) - `InsertLeave`および`TextChanged`における極めてシンプルな自動保存。Pocco81/AutoSaveをベースにしたが、軽量設計。
- [nvim-mini/mini.nvim#mini.basics](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-basics.md) - `mini.nvim`のモジュールで、一般的なオプション、マッピング、自動コマンドにカスタマイズ可能な設定プリセットを提供。
- [niuiic/part-edit.nvim](https://github.com/niuiic/part-edit.nvim) - ファイルの一部を個別に編集できる。
- [niuiic/divider.nvim](https://github.com/niuiic/divider.nvim) - カスタムコードの区切り線
- [ckolkey/ts-node-action](https://github.com/CKolkey/ts-node-action) - Tree-sitterノード上で機能変換を実行するためのフレームワーク
- [tomiis4/hypersonic.nvim](https://github.com/tomiis4/hypersonic.nvim) - RegExpに対する説明を提供
- [chrisgrieser/nvim-puppeteer](https://github.com/chrisgrieser/nvim-puppeteer) - 文字列をf-文字列またはテンプレート文字列に自動変換し、逆に変換
- [nat-418/boole.nvim](https://github.com/nat-418/boole.nvim) - ブール値および一般的な文字列値の切り替え
- [cshuaimin/ssr.nvim](https://github.com/cshuaimin/ssr.nvim) - Tree-sitterベースの構造検索と置換
- [Jxstxs/conceal.nvim](https://github.com/Jxstxs/conceal.nvim) - Tree-sitterを用いて、一般的なボイラープレートコードを隠す
- [hiberabyss/bzlops.vim](https://github.com/hiberabyss/bzlops.vim) - bazelビルドルールの管理を支援
- [altermo/iedit.nvim](https://github.com/altermo/iedit.nvim) - テキストの1つの出現を編集し、同時に他の選択された出現も同じように編集
- [ptdewey/yankbank-nvim](https://github.com/ptdewey/yankbank-nvim) - 最近のyankや削除を迅速にアクセスできるポップアップメニューに表示
- [SunnyTamang/select-undo.nvim](https://github.com/SunnyTamang/select-undo.nvim) - 特定の行または部分選択を元に戻すことができるが、ファイルの他の部分に影響を与えない
- [OXY2DEV/foldtext.nvim](https://github.com/OXY2DEV/foldtext.nvim) - 動的にスタイルを備えたfoldtext
- [tummetott/unimpaired.nvim](https://github.com/tummetott/unimpaired.nvim) - [tpope/vim-unimpaired](https://github.com/tpope/vim-unimpaired)のLua版。
- [daltongd/yanklock.nvim](https://github.com/daltongd/yanklock.nvim) - 貼り付けレジスタを一時的に`"0`にロックし、`d`、`c`、`s`の動きを使用しながら、最新のコピー内容を簡単にアクセスできるようにする。
- [zongben/capsoff.nvim](https://github.com/zongben/capsoff.nvim) - 挿入モードを離れたときにCapsLockを無効にする
- [kobbikobb/move-lines.nvim](https://github.com/kobbikobb/move-lines.nvim) - 仮想モードで選択された行を移動
- [kiyoon/telescope-insert-path.nvim](https://github.com/kiyoon/telescope-insert-path.nvim) - Telescopeを使用して現在のバッファにファイルパスを挿入
- [zhisme/copy_with_context.nvim](https://github.com/zhisme/copy_with_context.nvim) - ファイルパスと行番号メタデータを含む行をコピーし、コンテキスト付きのコードスニペットを共有
- [jake-stewart/multicursor.nvim](https://github.com/jake-stewart/multicursor.nvim) - 複数カーソルのサポートを追加し、期待される動作で動作
- [brenton-leighton/multiple-cursors.nvim](https://github.com/brenton-leighton/multiple-cursors.nvim) - 通常モード、挿入/置換モード、または視覚モードでほぼすべてのコマンドと動作する複数カーソルプラグイン
- [smoka7/multicursors.nvim](https://github.com/smoka7/multicursors.nvim) - 複数選択で繰り返し出現するテキテキストを編集するためのより直感的な方法を提供
- [tigion/swap.nvim](https://github.com/tigion/swap.nvim) - カーソルの下にある単語または現在の行内のパターンを迅速に切り替え
- [XXiaoA/atone.nvim](https://github.com/XXiaoA/atone.nvim) - アンダンドリームによるキャンセル履歴の可視化と管理
- [nemanjamalesija/smart-paste.nvim](https://github.com/nemanjamalesija/smart-paste.nvim) - 3段階インデント戦略（indentexpr / Tree-sitter / ヘューリスティック）を用いた貼り付けコードの自動インデント
- [neur1n/hyphen.nvim](https://github.com/neur1n/hyphen.nvim) - テキストにTeXスタイルのハイフン分割ポイントを表示
- [ntk148v/yankdown.nvim](https://github.com/ntk148v/yankdown.nvim) - クリップボードの豊かなコンテンツをクリーンなマークダウンとして貼り付け
- [Chiarandini/smart-enter.nvim](https://github.com/Chiarandini/smart-enter.nvim) - コンテキストに応じた改行がLaTeX環境、マークダウンリストなどを継続する
- [yaocccc/visual-multi.nvim](https://github.com/yaocccc/visual-multi.nvim) - Luaで書かれた、ノーマル、インサート、エクステンドモードを備えた高速かつ核心を重視したマルチカーソルプラグイン
- [iago-lito/lastput.nvim](https://codeberg.org/iago-lito/lastput.nvim) - 貼り付けた最後のテキストの一部を（再）選択するための1つのマッピング

### コメント

- [jeangiraldoo/codedocs.nvim](https://github.com/jeangiraldoo/codedocs.nvim) - 多数の言語とアノテーション規則に対応する強力でカスタマイズ可能なアノテーションフレームワーク
- [numToStr/Comment.nvim](https://github.com/numToStr/Comment.nvim) - スマートかつ強力なコメントプラグイン。コメント文字列、移動、ドット繰り返しなどに対応
- [b3nj5m1n/kommentary](https://github.com/b3nj5m1n/kommentary) - Luaで書かれたコメントプラグイン
- [gennaro-tedesco/nvim-commaround](https://github.com/gennaro-tedesco/nvim-commaround) - Luaで書か的高速かつ軽量なコメントプラグイン
- [folke/todo-comments.nvim](https://github.com/folke/todo-comments.nvim) - プロジェクト内のTODOコメントをハイライト、リスト、検索
- [kuri-sun/todoage.nvim](https://github.com/kuri-sun/todoage.nvim) - TODOの年数を表示
- [alexmozaidze/tree-comment.nvim](https://github.com/alexmozaidze/tree-comment.nvim) - [tree-sitter-comment](https://github.com/stsewd/tree-sitter-comment)用のTODOコメントのハイライトと設定。
- [terrortylor/nvim-comment](https://github.com/terrortylor/nvim-comment) - コメントの切り替えを、組み込みのコメント文字列オプションで行う
- [winston0410/commented.nvim](https://github.com/winston0410/commented.nvim) - カウントや複数のコメントパターンなどに対応する強力なコメントプラグイン
- [s1n7ax/nvim-comment-frame](https://github.com/s1n7ax/nvim-comment-frame) - ソースファイルに基づいたコメントフレームを追加
- [danymat/neogen](https://github.com/danymat/neogen) - 多数の言語とアノテーション規則に対応するより優れたアノテーション生成器
- [nvim-mini/mini.nvim#mini.comment](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-comment.md) - `mini.nvim`のモジュールで、行単位コメントを実行。ドット繰り返しを完全にサポート。
- [LudoPinelli/comment-box.nvim](https://github.com/LudoPinelli/comment-box.nvim) - ボックスや線を使ってコメントを明確にし、美しくする
- [JoosepAlviste/nvim-ts-context-commentstring](https://github.com/JoosepAlviste/nvim-ts-context-commentstring) - ファイル内のカーソル位置に基づき、`commentstring`オプションを設定。位置はTree-sitterクエリで確認される。
- [LucasTavaresA/SingleComment.nvim](https://github.com/LucasTavaresA/SingleComment.nvim) - 常に1行で、コメントに敏感でインデントを保持するコメント
- [Zeioth/dooku.nvim](https://github.com/Zeioth/dooku.nvim) - HTMLコードドキュメントを生成および開く
- [georgeharker/comment-tasks.nvim](https://github.com/georgeharker/comment-tasks.nvim) - コード内のTODOとFIXMEコメントからタスクマネージャを常に最新に保つ
- [celeste3z/celeste_comment.nvim](https://github.com/celeste3z/celeste_comment.nvim) - VSCodeスタイルのコメントプラグイン。行コメントとブロックコメント、テキストオブジェクトに対応

### 折りたたみ

- [yaocccc/nvim-foldsign](https://github.com/yaocccc/nvim-foldsign) - サインカラムに折りたたみを表示
- [soemre/commentless.nvim](https://github.com/soemre/commentless.nvim) - コメントをすべて折りたたみ、コードの論理を明確にし、必要に応じて展開
- [jghauser/fold-cycle.nvim](https://github.com/jghauser/fold-cycle.nvim) - 折りたたみの開閉をサイクル操作
- [kevinhwang91/nvim-ufo](https://github.com/kevinhwang91/nvim-ufo) - 現代的な見た目とパフォーマンス向上を実現した超折りたたみ
- [chrisgrieser/nvim-origami](https://github.com/chrisgrieser/nvim-origami) - 折りたたみを徹底的に美しく実現
- [malbertzard/inline-fold.nvim](https://github.com/malbertzard/inline-fold.nvim) - 長さの大きいCSSクラスや`href`コンテンツなどの要素をインラインで非表示にする。
- [netmute/foldchanged.nvim](https://github.com/netmute/foldchanged.nvim) - `FoldChanged`用のユーザーエンジンを追加。
- [netmute/foldsigns.nvim](https://github.com/netmute/foldsigns.nvim) - 編集中において折りたたみマーカーをサインカラムに追加し、折りたたみの可視性を高める
- [fold-logging.nvim](https://github.com/markosnarinian/fold-logging.nvim) - 通常の折りたたみに影響を与えず、折りたたみログやデバッグ出力を表示

[**⬆ 目次へ戻る**](#contents)


## 整形

- [TheLazyCat00/simple-format](https://github.com/TheLazyCat00/simple-format) - カスタム正規表現とハイライトルールを使ってテキストを置き換える
- [mhartington/formatter.nvim](https://github.com/mhartington/formatter.nvim) - Luaで書かれたフォーマット実行者
- [sbdchd/neoformat](https://github.com/sbdchd/neoformat) - コードフォーマット実行者
- [cappyzawa/trim.nvim](https://github.com/cappyzawa/trim.nvim) - 末尾の空白と改行をトリム
- [MunifTanjim/prettier.nvim](https://github.com/MunifTanjim/prettier.nvim) - Prettierとの統合
- [nvim-mini/mini.nvim#mini.align](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-align.md) - `mini.nvim`のモジュールで、テキストをインタラクティブに整列（即時プレビューあり／なし）。
- [emileferreira/nvim-strict](https://github.com/emileferreira/nvim-strict) - 厳密でネイティブなコードスタイルフォーマット。深層ネスト、長すぎる行、末尾の空白、末尾の空行、TODO、インデントの不一致を露呈
- [~nedia/auto-format.nvim](https://git.sr.ht/~nedia/auto-format.nvim) - 保存時にフォーマットするための自動コマンドを設定。優先的に`null-ls`を使用する。
- [tenxsoydev/tabs-vs-spaces.nvim](https://github.com/tenxsoydev/tabs-vs-spaces.nvim) - インデントのずれをヒントし、修正
- [bennypowers/svgo.nvim](https://github.com/bennypowers/svgo.nvim) - SVGファイルを最適化
- [niuiic/format.nvim](https://github.com/niuiic/format.nvim) - 非同期、マルチタスク、高度にカスタマイズ可能なフォーマットプラグイン
- [elentok/format-on-save.nvim](https://github.com/elentok/format-on-save.nvim) - LSPと非LSPフォーマットを組み合わせた同期フォーマッター（例：`shfmt`、`stylua`、`prettier`）。保存時にフォーマットに特化。
- [stevearc/conform.nvim](https://github.com/stevearc/conform.nvim) - LSPと良好に協調する軽量フォーマンティングエンジン
- [nvimdev/guard.nvim](https://github.com/nvimdev/guard.nvim) - ミニマリストな非同期フォーマットとリントプラグイン
- [paul-louyot/toggle-quotes.nvim](https://github.com/paul-louyot/toggle-quotes.nvim) - 引用を切り替える
- [wsdjeg/format.nvim](https://github.com/wsdjeg/format.nvim) - 非同期コードフォーマットプラグイン

### インデント

- [saghen/blink.indent](https://github.com/saghen/blink.indent) - キー入力ごとにスコープを持つ高速インデントガイド
- [nvimdev/indentmini.nvim](https://github.com/nvimdev/indentmini.nvim) - `nvim_set_decoration_provide`API関数を使用した極めてシンプルで高速なインデントラインプラグイン。
- [lukas-reineke/indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) - LuaでのIndentLineの置き換えに追加機能とTree-sitter対応
- [LucasTavaresA/simpleIndentGuides.nvim](https://github.com/LucasTavaresA/simpleIndentGuides.nvim) - ビルトイン変数を使用したインデントガイド
- [nvim-mini/mini.nvim#mini.indentscope](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-indentscope.md) - `mini.nvim`のモジュールで、インデントスコープの可視化と操作を実現。デボンス遅延、アニメーションスタイル、スコープ計算アルゴリズムのオプションのグリッドをカスタマイズ可能。
- [NMAC427/guess-indent.nvim](https://github.com/NMAC427/guess-indent.nvim) - 自動インデントスタイルの検出
- [Darazaki/indent-o-matic](https://github.com/Darazaki/indent-o-matic) - Luaで書かれた無駄な自動高速インデント検出
- [yaocccc/nvim-hlchunk](https://github.com/yaocccc/nvim-hlchunk) - `{}`ブロックのハイライト。
- [shellRaining/hlchunk.nvim](https://github.com/shellRaining/hlchunk.nvim) - `nvim-hlchunk`のLua実装。ハイライト、`{}`ブロック、インデントライン、スペースブランクなど、追加機能を含む。
- [VidocqH/auto-indent.nvim](https://github.com/VidocqH/auto-indent.nvim) - カーソルが最初の列に位置し、`<TAB>`キーを押下した際に自動インデント。VSCodeと同様の動作。
- [Mr-LLLLL/cool-chunk.nvim](https://github.com/Mr-LLLLL/cool-chunk.nvim) - アニメーション付きよりシンプルで高速なチャンク分離
- [gh-liu/fold_line.nvim](https://github.com/gh-liu/fold_line.nvim) - コード折りたたみを示すライン。`:set fdm=indent`によるインデントラインと類似の効果を実現。

[**⬆ 目次へ戻る**](#contents)


## コマンドライン

- [notomo/cmdbuf.nvim](https://github.com/notomo/cmdbuf.nvim) - オプションのコマンドラインウィンドウプラグイン
- [gelguy/wilder.nvim](https://github.com/gelguy/wilder.nvim) - フュージーなコマンドライン自動補完プラグイン
- [vzze/cmdline.nvim](https://github.com/vzze/cmdline.nvim) - フュージー自動補完を備えたヘルキスのようなコマンドライン
- [nvim-mini/mini.nvim#mini.cmdline](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-cmdline.md) - `mini.nvim`のモジュールで、コマンドラインの調整を実現。カスタマイズ可能な遅延による自動補完、固定候補語の自動訂正、浮動ウィンドウ内の自動プレビューコマンドを追加。

[**⬆ 目次へ戻る**](#contents)


## セッション

- [rmagatti/auto-session](https://github.com/rmagatti/auto-session) - 小さな自動セッションマネージャー
- [nvim-mini/mini.nvim#mini.sessions](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-sessions.md) - `mini.nvim` のセッション管理モジュール（読み込み、書き込み、削除）
- [gennaro-tedesco/nvim-possession](https://github.com/gennaro-tedesco/nvim-possession) - シンプルで、ブランチ、自動保存/ロード、Telescope対応のセッション管理
- [olimorris/persisted.nvim](https://github.com/olimorris/persisted.nvim) - シンプルな自動セッション管理
- [folke/persistence.nvim](https://github.com/folke/persistence.nvim) - インタラクティブに無名のスクラッチバッファを回復する軽量セッション保存
- [dmshvedchenko/persist.nvim](https://github.com/dmshvedchenko/persist.nvim) - :mksessionに対するシンプルなラッパー
- [Shatur/neovim-session-manager](https://github.com/Shatur/neovim-session-manager) - JSONに任意の永続データを保存した柔軟なセッション管理
- [jedrzejboczar/possession.nvim](https://github.com/jedrzejboczar/possession.nvim) - マルチセッション管理機能を提供
- [niuiic/multiple-session.nvim](https://github.com/niuiic/multiple-session.nvim) - 宣言型プロジェクト管理、セッションの自動保存、Telescopeを使用する
- [coffebar/neovim-project](https://github.com/coffebar/neovim-project) - 宣言型プロジェクト管理、セッションの自動保存、Telescopeを使用
- [njayman/season.nvim](https://github.com/njayman/season.nvim) - 現在のワークディレクトリに基づいてセッションを管理する軽量プラグイン
- [Akmadan23/local-session.nvim](https://github.com/Akmadan23/local-session.nvim) - 高速で最小限であり、現在のワークディレクトリに基づくセッションマネージャー。Luaで構成が簡単なセッションファイルを提供。

[**⬆ 目次へ戻る**](#contents)


## リモート開発

- [inhesrom/remote-ssh.nvim](https://github.com/inhesrom/remote-ssh.nvim) - VSCodeのRemote-SSHプラグインの基本的な機能を再現しており、リモート環境での「遅延」を回避するため、ローカル編集体験に焦点を当てる。リモートファイルをブラウズし、完全なローカル編集体験（LSP、Tree-sitter、Telescope統合、ファイルウォッチャー）で「リモートバッファ」を編集。
- [chipsenkbeil/distant.nvim](https://github.com/chipsenkbeil/distant.nvim) - ローカル環境でリモートマシン上のファイルを編集、プログラムを実行し、LSPと連携できる。
- [jamestthompson3/nvim-remote-containers](https://github.com/jamestthompson3/nvim-remote-containers) - Dockerコンテナ内で開発できる。VSCodeと同様に。
- [esensar/nvim-dev-container](https://github.com/esensar/nvim-dev-container) - VSCode の [remote container development](https://code.visualstudio.com/docs/remote/containers) プラグインに類似した機能を提供し、Docker コンテナ内で開発を行うための他の機能を備えたもの
- [miversen33/netman.nvim](https://github.com/miversen33/netman.nvim) - Luaで駆動されたネットワークリソースマネージャー。
- [niuiic/remote.nvim](https://github.com/niuiic/remote.nvim) - ローカル設定でリモートファイルを編集できる。
- [uhs-robert/sshfs.nvim](https://github.com/uhs-robert/sshfs.nvim) - SSHFSでリモートシステムをマウント。スマートピッカー自動検出（Telescope/Oil/Snacks/Neo-tree/fzf-lua/Yazi/Rangerなど）。
- [nosduco/remote-sshfs.nvim](https://github.com/nosduco/remote-sshfs.nvim) - SSHFSを介してリモートマシン上で探索、編集、開発できる。
- [azratul/live-share.nvim](https://github.com/azratul/live-share.nvim) - どこからでもリモート協働機能を提供し、ペアプログラミングに最適。

[**⬆ 目次へ戻る**](#contents)


## ライブプレビュー

- [hat0uma/prelive.nvim](https://github.com/hat0uma/prelive.nvim) - シンプルなluvベースの開発サーバーで、リアルタイムリロードを実現。
- [hat0uma/doxygen-previewer.nvim](https://github.com/hat0uma/doxygen-previewer.nvim) - Doxygenドキュメントのリアルタイムプレビュー。
- [brianhuster/live-preview.nvim](https://github.com/brianhuster/live-preview.nvim) - HTML、Markdown、Asciidocのブラウザ内リアルタイムプレビュー。
- [SUSTech-data/neopyter](https://github.com/SUSTech-data/neopyter) - Jupyter Labでファイルを編集・プレビュー・実行できる。
- [kiyoon/jupynium.nvim](https://github.com/kiyoon/jupynium.nvim) - SeleniumによるJupyter Notebookの自動化とリアルタイム同期。
- [gruvw/strudel.nvim](https://github.com/gruvw/strudel.nvim) - [strudel](https://strudel.cc) 用のライブコーディングコントローラー
- [ritschalex/jupyter_ascending.nvim](https://github.com/RitschAlex/jupyter_ascending.nvim) - Jupyter Ascendingを用いたJupyterノートブックとのスムーズな連携。

[**⬆ 目次へ戻る**](#contents)


## 分割とウィンドウ

- [wsdjeg/tabman.nvim](https://github.com/wsdjeg/tabman.nvim) - タブ間およびその含まれるウィンドウ間をナビゲートできる。
- [~henriquehbr/ataraxis.lua](https://sr.ht/~henriquehbr/ataraxis.lua) - コードの可読性を高めるためのゼンモード。
- [yorickpeterse/nvim-window](https://github.com/yorickpeterse/nvim-window) - ウィンドウ間を簡単にジャンプできる。
- [sindrets/winshift.nvim](https://github.com/sindrets/winshift.nvim) - ウィンドウを簡単に並べ替えられる。
- [nvim-focus/focus.nvim](https://github.com/nvim-focus/focus.nvim) - Luaで書かれた自動フォーカスと自動サイズ調整のスプリット／ウィンドウ。Vimのスプリットを強化した機能。
- [anuvyklack/windows.nvim](https://github.com/anuvyklack/windows.nvim) - 現在のウィンドウの幅を自動的に拡大し、最大化・復元を行う。さらに、スムーズなアニメーションを備える。
- [nvim-zh/colorful-winsep.nvim](https://github.com/nvim-zh/colorful-winsep.nvim) - カスタマイズ可能な色付きスプリットライン。
- [nyngwang/NeoNoName.lua](https://github.com/nyngwang/NeoNoName.lua) - レイアウトを保持したバッファ削除。
- [nvim-mini/mini.nvim#mini.bufremove](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-bufremove.md) - `mini.nvim` のバッファ削除モジュール（未表示、削除、消去）を、ウィンドウレイアウトを保存する際に提供
- [jyscao/ventana.nvim](https://github.com/jyscao/ventana.nvim) - ウィンドウレイアウトのための便利なフリップとシフト操作。
- [mrjones2014/smart-splits.nvim](https://github.com/mrjones2014/smart-splits.nvim) - スプリットのスマートで連続した方向性のナビゲーションとサイズ調整。
- [altermo/nwm](https://github.com/altermo/nwm) - X11ウィンドウマネージャー。
- [MisanthropicBit/winmove.nvim](https://github.com/MisanthropicBit/winmove.nvim) - ウィンドウを簡単に移動・交換・サイズ調整できる。
- [ycdzj/win-mover.nvim](https://github.com/ycdzj/win-mover.nvim) - 側面のウィンドウを移動させないウィンドウマネージャー。
- [mkajsjo/windowcolumns.nvim](https://github.com/mkajsjo/windowcolumns.nvim) - 列優先のウィンドウ管理。
- [aronjohanns/smooth-resize.nvim](https://github.com/aronjohanns/smooth-resize.nvim) - デフォルトのウィンドウサイズ調整マッピングで、スムーズかつ連続したウィンドウサイズ調整。

### Tmux

- [aserowy/tmux.nvim](https://github.com/aserowy/tmux.nvim) - Tmuxとの統合機能でパネルの移動とサイズ調整を実現。
- [danielpieper/telescope-tmuxinator.nvim](https://github.com/danielpieper/telescope-tmuxinator.nvim) - tmuxinatorとtelescope.nvimとの統合。
- [hkupty/nvimux](https://github.com/hkupty/nvimux) - あなたのエディタをtmuxの代替として利用できる。
- [numToStr/Navigator.nvim](https://github.com/numToStr/Navigator.nvim) - エディタのスプリットとtmuxパネルの間をスムーズにナビゲートできる。
- [declancm/windex.nvim](https://github.com/declancm/windex.nvim) - エディタのスプリットとtm及パネル間の移動、閉じる、最大化などのウィンドウ関数のコレクション。
- [karnull/only-tmux.nvim](https://github.com/karnull/only-tmux.nvim) - `:only` に tmux パネルを組み込み、パネルを新しいウィンドウに移動または閉じる機能を拡張
- [karshPrime/tmux-compile.nvim](https://github.com/karshPrime/tmux-compile.nvim) - F5 などのキーを共通に設定し、各言語（例： `make` で C、 `cargo build` で Rust）ごとにコンパイル／実行コマンドを実行し、プロジェクトを新しい tmux パネルまたはウィンドウで実行またはコンパイル
- [EvWilson/slimux.nvim](https://github.com/EvWilson/slimux.nvim) - 現在のバッファの内容を、設定可能なtmuxパネルに送信できる。
- [juselara1/tmutils.nvim](https://github.com/juselara1/tmutils.nvim) - tmuxのユーティリティで、行の送信、コンテンツのキャプチャ、ターミナルの作成、REPLの管理を可能にする。
- [kiyoon/tmux-send.nvim](https://github.com/kiyoon/tmux-send.nvim) - `nvim-tree`、 `neo-tree` または `oil.nvim` のいずれかのバッファコンテンツまたはファイルパスを、別の tmux パネルにコピー・ペースト
- [jkeresman01/tmux-switch.nvim](https://github.com/jkeresman01/tmux-switch.nvim) - Tmuxのファジーセッション切り替えを提供。
- [salorak/libtmux.nvim](https://github.com/salorak/libtmux.nvim) - `tmux` API を使うための軽量ラッパー

[**⬆ 目次へ戻る**](#contents)


## ゲーム

- [alec-gibson/nvim-tetris](https://github.com/alec-gibson/nvim-tetris) - Emacsの最も優れた機能であるTetrisを実現。
- [seandewar/nvimesweeper](https://github.com/seandewar/nvimesweeper) - お気に入りのテキストエディタでマインスイーパーをプレイできます
- [seandewar/killersheep.nvim](https://github.com/seandewar/killersheep.nvim) - killersheepのポート
- [rktjmp/playtime.nvim](https://github.com/rktjmp/playtime.nvim) - フリークセル、深センソリテア、エミサリーなどのゲームを集めたもの
- [Eandrju/cellular-automaton.nvim](https://github.com/Eandrju/cellular-automaton.nvim) - 現在のバッファの内容に基づいて、美しく見えるセルオートマトンアニメーションを実行できます
- [alanfortlink/blackjack.nvim](https://github.com/alanfortlink/blackjack.nvim) - クラシックなブラックジャックゲーム
- [jim-fx/sudoku.nvim](https://github.com/jim-fx/sudoku.nvim) - クラシックなスードクーカー
- [csessh/aoc.vim](https://github.com/csessh/aoc.nvim) - シンプルなエルフで、アドベンチャーオブコードのパズル入力を取り寄せてくれます
- [seandewar/actually-doom.nvim](https://github.com/seandewar/actually-doom.nvim) - テキスト編集はつまらない；DOOMをプレイしてください！
- [piersolenski/skifree.nvim](https://github.com/piersolenski/skifree.nvim) - Windows 3.1のスキー・フリーゲームをプレイできます
- [xiangnongWu2233/rubiks-cube.nvim](https://github.com/xiangnongWu2233/rubiks-cube.nvim) - 自動解法付きのプレイ可能なルービックキューブ

### 競技プログラミング

- [~chinmay/cphelper.nvim](https://git.sr.ht/~chinmay/cphelper.nvim) - Luaで書かれた競技プログラミング用のヘルパー
- [xeluxee/competitest.nvim](https://github.com/xeluxee/competitest.nvim) - 競技プログラミングコンテスト用のテストケース管理とチェックを自動化するプラグイン
- [barrettruth/cp.nvim](https://github.com/barrettruth/cp.nvim) - 人気コンテストプラットフォーム（CodeForces、CSESなど）向けの競技プログラミングワークフロー。自動テストスクレイピング、I/Oビュー、差分パネルを含みます
- [kawre/leetcode.nvim](https://github.com/kawre/leetcode.nvim) - Leetcodeの問題を解きます
- [2KAbhishek/exercism.nvim](https://github.com/2KAbhishek/exercism.nvim) - Exercismの問題を閲覧・解きます

[**⬆ 目次へ戻る**](#contents)


## 小物

- [folke/drop.nvim](https://github.com/folke/drop.nvim) - ダッシュボードに対応したスクリーンセーバー
- [axsaucedo/neovim-power-mode](https://github.com/axsaucedo/neovim-power-mode) - エディタにカウンター、粒子効果、爆発を追加
- [jerrywang1981/keystroke.nvim](https://github.com/jerrywang1981/keystroke.nvim) - タイプするたびに音を鳴らし、他のことを行います
- [cxwx/keywound.nvim](https://github.com/cxwx/keysound.nvim) - 各キーショートで音を鳴らし、カスタマイズ可能な音をサポート

[**⬆ 目次へ戻る**](#contents)


## ワークフロー

- [letieu/jira.nvim](https://github.com/letieu/jira.nvim) - Jiraタスクを美しいUIで管理できます
- [m4xshen/hardtime.nvim](https://github.com/m4xshen/hardtime.nvim) - 良いコマンドワークフローと習慣の確立をサポートします。
- [saxon1964/neovim-tips](https://github.com/saxon1964/neovim-tips) - 数百の組み込みのヒント、コツ、ショートカットを提供し、カスタムピッカーインターフェースと、自分のヒントを追加できる機能を備えています。
- [ecthelionvi/NeoComposer.nvim](https://github.com/ecthelionvi/NeoComposer.nvim) - マクロ管理を簡素化し、生産性を高め、調和の取れたワークフローを作成します。
- [yagiziskirik/AirSupport.nvim](https://github.com/yagiziskirik/AirSupport.nvim) - カスタムショートカットやコマンドの検索可能なリマインダーウィンドウ。
- [emrearmagan/atlas.nvim](https://github.com/emrearmagan/atlas.nvim) - GitHub、GitLab、Bitbucket、Jira 用の1つのワークフロー。
- [mateuszwieloch/automkdir.nvim](https://github.com/mateuszwieloch/automkdir.nvim) - ファイルを書く際に存在しない親ディレクトリを自動的に作成します。
- [jghauser/mkdir.nvim](https://github.com/jghauser/mkdir.nvim) - ファイルを保存する際に存在しないディレクトリを自動的に作成します。

### 統計追跡

- [aikhe/wrapped.nvim](https://github.com/aikhe/wrapped.nvim) - 統計、洞察、履歴、ヒートマップなど、あなたの設定活動を可視化し、レビューします。
- [gisketch/triforce.nvim](https://github.com/gisketch/triforce.nvim) - lualine統合による、XP、レベル、達成度、活動ヒートマップを備えたゲーム化された統計トラッカー。
- [QuentinGruber/pomodoro.nvim](https://github.com/QuentinGruber/pomodoro.nvim) - 組み込みのセッショントラッキングとブレイクリマインダーで、ポモドーロ技術を使用します。
- [yal212/pomodoro.nvim](https://github.com/yal212/pomodoro.nvim) - 自動的に作業とブレイクサイクルを実行し、セッション統計と分散なしのフォーカスモードを備えた、フォーカスを最優先としたポモドーロタイマー。
- [raymondware/focusmode.nvim](https://github.com/raymondware/focusmode.nvim) - 設定可能な間隔、分散ブロッキング、セッション統計、ダッシュボードを備えたポモドーロと深仕事タイマー。
- [gaborvecsei/usage-tracker.nvim](https://github.com/gaborvecsei/usage-tracker.nvim) - 使用状況を追跡し、統計を簡単に可視化します。
- [SunnyTamang/pendulum.nvim](https://github.com/SunnyTamang/pendulum.nvim) - コーダー、競技プログラマー、開発者などに、時間ベースの生産的セッションを作成するためのシンプルなタイマー。
- [ptdewey/pendulum-nvim](https://github.com/ptdewey/pendulum-nvim) - コーディングに費やした時間を追跡し、オンデマンドの時間レポートを通じて洞察を得ます。
- [ravsii/timers.nvim](https://github.com/ravsii/timers.nvim) - タイマー管理機能、シンプルなLua API、複数のタイマー、保存、UI、プラグイン統合をサポート。
- [Rtarun3606k/takatime](https://github.com/Rtarun3606k/takatime) - GoとMongoDBを使用したプライバシーを最優先とするWakaTimeの代替品。
- [taigrr/blast.nvim](https://github.com/taigrr/blast.nvim) - NvimBlast用の活動トラッキングクライアントで、プロジェクトごとの設定、モノリスリポジトリ対応、プライバシー制御を提供。

[**⬆ 目次へ戻る**](#contents)


## データベース

- [zongben/dbout.nvim](https://github.com/zongben/dbout.nvim) - データベース接続の管理と、JSON結果を返すSQLクエリの実行。
- [kndndrj/nvim-dbee](https://github.com/kndndrj/nvim-dbee) - インタラクティブなデータベースクライアント。
- [tashikomaaa/neomongo.nvim](https://github.com/tashikomaaa/neomongo.nvim) - Telescopeを活用したダッシュボードで、MongoDBのコレクションを探索・クエリ・編集できる
- [zerochae/dbab.nvim](https://github.com/zerochae/dbab.nvim) - 現代的なUIと非同期実行を備えた軽量データベースクライアント
- [joryeugene/dadbod-grip.nvim](https://github.com/joryeugene/dadbod-grip.nvim) - セル内編集、ステージド変更、リアルタイムSQLプレビュー、スキーマブラウザ、DDL、AIによるSQL生成、FKナビゲーション、DuckDB/Parquet対応を備えたデータベースエディタ
- [clang-engineer/dadbod-vertica.nvim](https://github.com/clang-engineer/dadbod-vertica.nvim) - 公式 クライアントを用いて に Vertica アダプタを提供し、 とのスキーマツリー統合を実現 [vim-dadbod](https://github.com/tpope/vim-dadbod) `vsql` `vim-dadbod-ui`

[**⬆ 目次へ戻る**](#contents)


## 構築済み設定

- [tokiory/neovim-boilerplate](https://github.com/tokiory/neovim-boilerplate) - 新しい設定を作成するためのスタートアップテンプレート
- [frans-johansson/lazy-nvim-starter](https://github.com/frans-johansson/lazy-nvim-starter) - ラズリプラグインマネージャーを備えたスタートアップテンプレート
- [abdellatif-temsamani/adev.nvim](https://github.com/abdellatif-temsamani/adev.nvim) - 開発者がすべての機能を手に入れたい人向けに過剰設計されたNeovimディストリビューション
- [pgosar/CyberNvim](https://github.com/pgosar/CyberNvim) - 世界で最もシンプルで拡張性の高いNeov之imディストリビューション
- [sontungexpt/stinvim](https://github.com/sontungexpt/stinvim) - フルスタック開発者向けの設定
- [Abstract-IDE/Abstract](https://github.com/Abstract-IDE/Abstract) - 現代IDEの力を実現するための設定

- [SpaceVim/SpaceVim](https://spacevim.org) - [spacemacs](https://github.com/syl20bnr/spacemacs) にインスパイアされたコミュニティが運営するモジュールベースの配布

- [CosmicNvim/CosmicNvim](https://github.com/CosmicNvim/CosmicNvim) - CosmicNvimは、ウェブ開発に特化した軽量かつ意見をもつ設定で、COSMICプログラミング体験を提供する
- [artart222/CodeArt](https://github.com/artart222/CodeArt) - Lua で完全に構築された高速な汎用 IDE で、Linux/Windows/macOS 用のインストーラと、自らの更新用の `:CodeArtUpdate` コマンドを内蔵
- [LazyVim/LazyVim](https://github.com/LazyVim/LazyVim) - **lazy.nvim**をベースにしたフル機能IDEで、あなたの設定をカスタマイズ・拡張しやすくする
- [legobeat/l7-devenv](https://github.com/legobeat/l7-devenv) - Neovimとシェルに基づく、セキュリティに配慮したIDEで、適切な方法でカスタマイズ可能（hackable）
- [crispybaccoon/chaivim](https://github.com/crispybaccoon/chaivim) - しっかりしたデフォルト設定と快適なエディタ体験を備えた、簡単にカスタマイズできるディストリビューション
- [crivotz/nv-ide](https://github.com/crivotz/nv-ide) - フルスタック開発者（Rails、Ruby、PHP、HTML、CSS、SCSS、JavaScript）向けに設計されたカスタム設定
- [LunarVim/LunarVim](https://github.com/LunarVim/LunarVim) - このプロジェクトは、VSCodeから離脱し、より優れたテキスト編集体験へ移行することを支援する
- [hackorum/VapourNvim](https://github.com/hackorum/VapourNvim) - 究極のVim IDEのような体験を実現するための設定
- [siduck76/NvChad](https://github.com/siduck76/NvChad) - 組み込みCLIをIDEのように機能的かつ美しさを保ちながら、過剰な機能を減らして作成した試み
- [cstsunfu/.sea.nvim](https://github.com/cstsunfu/.sea.nvim) - 美しいUIと、ポモドーロ時計やウィンドウ番号といった便利な機能を備えたモジュラーセットアップ
- [shaeinst/roshnivim](https://github.com/shaeinst/roshnivim) - エディタをIDEとして構築するための事前設定で、数千時間の設定時間を節約できる
- [AstroNvim/AstroNvim](https://github.com/AstroNvim/AstroNvim) - 美しさと機能性に優れた設定で、拡張性があり、便利なプラグインセットを備えた
- [shaunsingh/nyoom.nvim](https://github.com/shaunsingh/nyoom.nvim) - 非常に速く、設定可能で、最小限であり、「lispy」な設定をFennelで記述。
- [jrychn/moduleVim](https://github.com/jrychn/ModuleVim) - バックエンドおよびフロントエンドに非常に使いやすい。LSPを自動的にインストール。
- [imbacraft/dusk.nvim](https://github.com/imbacraft/dusk.nvim) - 軽量で美しく最小限の設定をLuaで記述し、ウェブ開発およびJava開発に対応。
- [nvim-lua/kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) - あなたの個人設定のスタート地点。
- [dam9000/kickstart-modular.nvim](https://github.com/dam9000/kickstart-modular.nvim) - nvim-lua/kickstart.nvimのフォークであり、単一ファイルからマルチファイル設定へと移行。
- [cunderw/nvim](https://github.com/cunderw/nvim) - JS/TS、Go、Java開発向けのカスタム、IDEのような設定。
- [ldelossa/nvim-ide](https://github.com/ldelossa/nvim-ide) - VSCodeに強くインスピレーションを受けた、機能豊かなIDE層。
- [linrongbin16/lin.nvim](https://github.com/linrongbin16/lin.nvim) - 高度に設定された Neovim 配布で、開発に必要な多くのユーティリティを統合しており、 `spf13-vim` にインスパイアされたもの
- [doctorfree/nvim-lazyman](https://github.com/doctorfree/nvim-lazyman) - 設定マネージャーであり、独自のモジュラー設定も提供。40以上の事前設定をサポート。
- [NormalNvim/NormalNvim](https://github.com/NormalNvim/NormalNvim) - 日々の業務に必要な安定性を重視した設定。
- [chrisgrieser/nvim-kickstart-python](https://github.com/chrisgrieser/nvim-kickstart-python) - あなたの設定のスタート地点（Python用）。
- [mrcjkb/kickstart-nix.nvim](https://github.com/mrcjkb/kickstart-nix.nvim) - Neovimの派生設定用のテンプレートリポジトリ。既存設定から移行を簡易化することを目的としている。
- [drybalka/clean.nvim](https://github.com/drybalka/clean.nvim) - デフォルトのキーマッピングやプラグインを整理し、必要な最低限の要素だけを残して、それらに構築を可能にする。
- [StratOS-Linux/StratVIM](https://github.com/StratOS-Linux/StratVIM) - [StratOS-Linux](https://github.com/StratOS-Linux) にデフォルトで含まれるフル機能の Neovim 配布
- [Shaobin-Jiang/IceNvim](https://github.com/Shaobin-Jiang/IceNvim) - 美しく、強力でカスタマイズ可能な設定であり、非常に速い。
- [ayamir/nvimdots](https://github.com/ayamir/nvimdots) - NixOS対応の、よく設定された構造化された設定。
- [adoyle-h/one.nvim](https://github.com/adoyle-h/one.nvim) - Luaで構成された、すべてを一括で提供する設定フレームワーク。
- [nvim-mini/MiniMax](https://github.com/nvim-mini/MiniMax) - 多数の独立した、詳細にコメントされた設定を収録。これらは主にMINIツールを使用。
- [TheItcor/MoaiVim](https://github.com/TheItcor/MoaiVim) - 極めてシンプルな設定で、軽量IDEを模倣。
- [plutowang/nvim.pack](https://github.com/plutowang/nvim.pack) - ネイティブVim.packのみで構成された、宣言的かつイベント駆動の遅延読み込み設定。極めて高速な起動性能を実現。

[**⬆ 目次へ戻る**](#contents)


## 外部ツール

Neovimの外部から利用して操作性を高めるツールです。

### バージョンマネージャー

- [MordechaiHadad/bob](https://github.com/MordechaiHadad/bob) - マルチプラットフォーム対応で、使いやすいバージョンマネージャー。
- [NTBBloodbath/nvenv](https://github.com/NTBBloodbath/nvenv) - 軽量かつ非常に高速なバージョンマネージャー。
- [y3owk1n/nvs](https://github.com/y3owk1n/nvs) - 別のバージョンマネージャーで構成切り替えを提供する

### プラグインテンプレート

- [gennaro-tedesco/boilit](https://github.com/gennaro-tedesco/boilit) - ボイラープレート構造プラグインを作成
- [m00qek/plugin-template.nvim](https://github.com/m00qek/plugin-template.nvim) - テストインフラとGitHub Actionsをセットアップするプラグインテンプレート
- [ellisonleao/nvim-plugin-template](https://github.com/ellisonleao/nvim-plugin-template) - GitHubのテンプレート機能を使用する別のプラグインテンプレート
- [2KAbhishek/template.nvim](https://github.com/2KAbhishek/template.nvim) - プラグイン開発を迅速に開始するための意見を反映したテンプレート
- [jkeresman01/spring-initializr.nvim](https://github.com/jkeresman01/spring-initializr.nvim) - Telescopeを活用したSpring Bootプロジェクトのスケルトン作成
- [DrKJeff16/nvim-plugin-boilerplate](https://github.com/DrKJeff16/nvim-plugin-boilerplate) - スクリプトで生成される新しいプラグイン向けにドキュメント付きのテンプレート。テスト、CIユーティリティなども含む
- [chrisgrieser/nvim-pseudometa-plugin-template](https://github.com/chrisgrieser/nvim-pseudometa-plugin-template) - 新しいプラグイン向けのテンプレート

### OS固有

- [chrisgrieser/alfred-neovim-utilities](https://github.com/chrisgrieser/alfred-neovim-utilities) - Alfred（macOS）を介してプラグインの検索とオンライン `:help`
- [iamironz/android-nvim-plugin](https://github.com/iamironz/android-nvim-plugin) - Androidのビルド、デプロイ、ログ캣コマンドをGradleで統合
- [massix/termux.nvim](https://github.com/massix/termux.nvim) - Termux APIとインタラクションを行い、Android端末の情報をステータスラインに表示（例：バッテリー残量）
- [m15a/flake-awesome-neovim-plugins](https://github.com/m15a/flake-awesome-neovim-plugins) - Nix flake で、 `awesome-neovim` プラグインを Nix パッケージとして提供するもの

[**⬆ 目次へ戻る**](#contents)


## 要望

プラグインで解決できそうな問題は、[nvim-lua wishlist](https://github.com/nvim-lua/wishlist)へ追加してください。

[**⬆ 目次へ戻る**](#contents)


## UI

- [OXY2DEV/ui.nvim](https://github.com/OXY2DEV/ui.nvim) - UIカスタマイズ用のブループリント／テンプレート／ガイド
- [mcauley-penney/visual-whitespace.nvim](https://github.com/mcauley-penney/visual-whitespace.nvim) - Visual選択範囲内の空白文字を表示、VSCodeと同様
- [jrop/tuis.nvim](https://github.com/jrop/tuis.nvim) - さまざまなCLIに豊かなインタラクティブUIを提供するインタラクティブTUIのコレクション
- [matbme/JABS.nvim](https://github.com/matbme/JABS.nvim) - 美しく簡潔なバッファ切り替えウィンドウ
- [rcarriga/nvim-notify](https://github.com/rcarriga/nvim-notify) - 華やかで設定可能な通知マネージャー
- [nvim-mini/mini.nvim#mini.notify](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-notify.md) - `mini.nvim` のモジュールで、一つのウィンドウに一つまたは複数のハイライトされた通知を表示。 `vim.notify()` の実装を提供し、自動 LSP プログレス更新を設定
- [folke/noice.nvim](https://github.com/folke/noice.nvim) - メッセージ、コマンドライン、ポップアップメニューのUIを完全に置き換える、高度に実験的なプラグイン
- [toppair/reach.nvim](https://github.com/toppair/reach.nvim) - バッファ、マーク、タブページの切り替え
- [ghillb/cybu.nvim](https://github.com/ghillb/cybu.nvim) - バッファをサイクルする際に、コンテキストを表示する通知ウィンドウを表示
- [CosmicNvim/cosmic-ui](https://github.com/CosmicNvim/cosmic-ui) - Cosmic-UIは特定のVim機能をシンプルにラップした wrapper です
- [sitiom/nvim-numbertoggle](https://github.com/sitiom/nvim-numbertoggle) - 相対行番号と絶対行番の切り替えを自動的に切り替える
- [nkakouros-original/numbers.nvim](https://github.com/nkakouros-original/numbers.nvim) - 相対番号の表示を、意味があるときに切り替える
- [cpea2506/relative-toggle.nvim](https://github.com/cpea2506/relative-toggle.nvim) - 数値と相対数値の間をスムーズに切り替え、さまざまな数値組み合わせをサポートし、高度にカスタマイズ可能
- [LukasPietzschmann/telescope-tabs](https://github.com/LukasPietzschmann/telescope-tabs) - telescopeを使用してタブ間を迅速に移動
- [ariel-frischer/bmessages.nvim](https://github.com/ariel-frischer/bmessages.nvim) - デフォルトの `:messages` ウィンドウを、設定可能な自動更新バッファに置き換える
- [markgandolfo/lightswitch.nvim](https://github.com/markgandolfo/lightswitch.nvim) - `nui.nvim` ライブラリを使って、さまざまなオプションを切り替える
- [wsdjeg/calendar.nvim](https://github.com/wsdjeg/calendar.nvim) - 拡張機能をサポートするシンプルなフローティングカレンダー
- [xieyonn/spinner.nvim](https://github.com/xieyonn/spinner.nvim) - ステータスライン、タブライン、ウィンドウバー、バッファ、コマンドライン、またはカーソルの側に配置されたアニメーションスピンナーをサポートする拡張可能なスピンナーフレームワーク
- [quickui.nvim](https://github.com/mjmjm0101/quickui.nvim) - 構造化されたキーボード操作によるメニューとコンテキストメニュー、ネストされたナビゲーションをサポート
- [ln.nvim](https://github.com/markosnarinian/ln.nvim) - アクティブなウィンドウでは相対番号、それ以外では絶対番号
- [nvim-mini/mini.nvim#mini.input](https://github.com/nvim-mini/mini.nvim/blob/main/readmes/mini-input.md) - `mini.nvim` のモジュールで、完全にカスタマイズ可能なキーとビュー処理でユーザー入力を取得。フローティングウィンドウ、ステータスライン／タブライン／ウィンドウバー、仮想ライン／テキストとして表示可能。 `vim.ui.input()` の実装を提供

[**⬆ 目次へ戻る**](#contents)


## 外部資料

- [Vimawesome](https://vimawesome.com/) - Vim 用のさまざまなプラグインを紹介し、他の Neovim 関連プラグインに [Neovim tag](https://vimawesome.com/?q=tag:neovim) を提供
- [akrawchyk/awesome-vim#tools](https://github.com/akrawchyk/awesome-vim#tools) - Vimプラグインと便利なガイドの短いリスト
- [Neovimcraft](https://neovimcraft.com) - Luaでプラグインを構築するための特定のプラグインやガイドを検索できるサイト
- [Dotfyle](https://dotfyle.com) - 設定やプラグインの共有・発見ができるサイト
- [NeoLand](https://neoland.dev) - Neovimリソースに関する美しく設計されたウェブサイト
- [Weyaaron/nvim-training](https://github.com/Weyaaron/nvim-training) - 初心者でも使える、小さな繰り返しタスクで「筋肉記憶」を訓練するツール
- [Nvim.app](https://nvim.app) - プラグインのための現代的な検索インターフェース。フュージー検索、フィルタリング、プラグイン開発者向けのセルフサービス更新をサポート
- [ChuYanLon/chad46](https://github.com/ChuYanLon/chad46) - 94のテーマと44のハイライト統合。毎日NvChad/base46から同期
- [Neovim Cheatsheet](https://neovimcheatsheet.com) - キーボード入力ごとに検索可能なインタラクティブなチェックリスト。キーバインディングの再マッピング、JSONのインポート・エクスポートをサポート

[**⬆ 目次へ戻る**](#contents)
