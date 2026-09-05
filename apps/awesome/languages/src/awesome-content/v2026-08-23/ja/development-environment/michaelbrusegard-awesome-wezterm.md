---
title: "Awesome WezTerm"
description: "WezTermを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-michaelbrusegard-awesome-wezterm-readme-md"
---

# Awesome WezTerm

WezTermを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [AI](#ai)
- [キーバインド](#keybinding)
- [メディア](#media)
- [Neovim](#neovim)
- [ペイン](#panes)
- [セッション](#session)
- [タブバー](#tab-bar)
- [テーマ](#themes)
- [ユーティリティ](#utility)

## AI

- [Michal1993r/ai-helper.wezterm](https://github.com/Michal1993r/ai-helper.wezterm/tree/master) - LM Studio または Google Gemini を使って AI に CLI の助けを求める。
- [dimao/ai-commander.wezterm](https://github.com/dimao/ai-commander.wezterm) - 自然言語プロンプトに基づき bash コマンドを生成・選択する。
- [EdenGibson/wezterm-quota-limit](https://github.com/EdenGibson/wezterm-quota-limit) - 色分けされた閾値と自動トークン更新により、ステータスバーへ Claude API 使用量クォータを表示する。
- [Eric162/wezterm-agent-deck](https://github.com/Eric162/wezterm-agent-deck) - AI コーディングエージェントを監視し、タブに状態ドットを表示し、エージェントの対応が必要なときに通知する。
- [M-Marbouh/agent-quota.wezterm](https://github.com/M-Marbouh/agent-quota.wezterm) - リセットまでのカウントダウン、プロセス認識状態、共有キャッシュを備え、Claude・Codex のクォータ使用量をステータスバーへ表示する。

## キーバインド

- [MLFlexer/modal.wezterm](https://github.com/MLFlexer/modal.wezterm) - 見栄えのよい UI を備える、定義済み Vim 風モーダルキーバインド。
- [sravioli/chord.wz](https://github.com/sravioli/chord.wz) - Vim 風キー表記、モーダルキーテーブル、ヒントバー。
- [sei40kr/wez-pain-control](https://github.com/sei40kr/wez-pain-control?tab=readme-ov-file) - tmux-pain-control のようなペイン制御キーバインド。
- [sei40kr/wez-tmux](https://github.com/sei40kr/wez-tmux) - 移植した tmux キーバインド。
- [selectnull/pinned-tabs.wezterm](https://github.com/selectnull/pinned-tabs.wezterm) - 特定のタブにキー割り当てを設定できる。
- [abidibo/wezterm-cmdpicker](https://github.com/abidibo/wezterm-cmdpicker) - キーバインド用のコマンドパレット風ファジーピッカーを追加する。トリガーキーで検索し、ユーザー定義、設定、WezTerm 既定の任意キーバインドを実行する。
- [annie444/sync-panes.wez](https://github.com/annie444/sync-panes.wez) - アクティブタブ内のすべてのペインへキー入力をミラーする。tmux の `synchronize-panes` に相当。

## メディア

- [xarvex/presentation.wez](https://github.com/xarvex/presentation.wez) - かなりシンプルなプレゼンテーションモード切り替え。

## Neovim

- [mrjones2014/smart-splits.nvim](https://github.com/mrjones2014/smart-splits.nvim) - Neovim と WezTerm MUX 間のシームレスなペインナビゲーション用アドオンを提供する。
- [winter-again/wezterm-config.nvim](https://github.com/winter-again/wezterm-config.nvim) - Neovim から WezTerm 設定を直接操作する。

## ペイン

- [ChrisGVE/pivot_panes.wezterm](https://github.com/ChrisGVE/pivot_panes.wezterm) - ペインの向きを水平・垂直分割間で切り替える。
- [bad-noodles/stack.wez](https://github.com/bad-noodles/stack.wez) - 複数ペインを扱いつつ、一度に一つだけ表示するスタックペインモード。

## セッション

- [DavidRR-F/quick_domains.wezterm](https://github.com/DavidRR-F/quick_domains.wezterm) - （SSH）ドメインをより速く検索・接続する方法。
- [isseii10/workspace-picker.wezterm](https://github.com/isseii10/workspace-picker.wezterm) - `zoxide` 統合付きワークスペース切り替え器。
- [JuanraCM/wsinit.wezterm](https://github.com/JuanraCM/wsinit.wezterm) - ワークスペース設定を管理・初期化するシンプルかつ柔軟な方法。
- [mikkasendke/sessionizer.wezterm](https://github.com/mikkasendke/sessionizer.wezterm) - `fd` を用いて Git リポジトリーを個別の WezTerm ワークスペースとして開く。
- [StephenGemin/resurrect.wezterm](https://github.com/StephenGemin/resurrect.wezterm) - ワークスペース、ウィンドウ、タブ、ペインの状態を保存・復元する。
- [MLFlexer/smart_workspace_switcher.wezterm](https://github.com/MLFlexer/smart_workspace_switcher.wezterm) - ファジー検索と `zoxide` によりワークスペース間を切り替える。
- [vieitesss/workspacesionizer.wezterm](https://github.com/vieitesss/workspacesionizer.wezterm) - `tmux-sessionizer` から着想を得た非常に高速なワークスペース選択器。
- [abidibo/wezterm-sessions](https://github.com/abidibo/wezterm-sessions) - セッションを保存・復元する。
- [srackham/tabsets.wezterm](https://github.com/srackham/tabsets.wezterm) - 名前付きタブセットを読み込み、保存、名前変更、削除する。
- [ryanmsnyder/workspace-manager.wezterm](https://github.com/ryanmsnyder/workspace-manager.wezterm) - スマートなワークスペース切り替えとキーボード駆動ナビゲーションにより、プロジェクトを容易に移動する。

## タブバー

- [adriankarlen/bar.wezterm](https://github.com/adriankarlen/bar.wezterm) - 必要なものを備えた設定可能なタブバー。
- [michaelbrusegard/tabline.wez](https://github.com/michaelbrusegard/tabline.wez) - `lualine.nvim` 設定形式を持つ多用途で使いやすいレトロタブバー。
- [rootiest/battery.wez](https://github.com/rootiest/battery.wez) - レトロタブバー向けのカラフルで凝ったバッテリーコンポーネント。
- [yriveiro/wezterm-status](https://github.com/yriveiro/wezterm-status) - レトロタブバー向け設定可能ステータス。
- [yriveiro/wezterm-tabs](https://github.com/yriveiro/wezterm-tabs) - レトロタブバー向け設定可能タブ。
- [pro-vi/wezterm-attention](https://github.com/pro-vi/wezterm-attention) - 色付きタブインジケーターでタブバーを通知システムに変える。

## テーマ

- [neapsix/wezterm](https://github.com/neapsix/wezterm) - Rosé Pine テーマ。自然な松、フェイクファー、少しのソーホー風雰囲気。
- [sravioli/kanagawa.wz](https://github.com/sravioli/kanagawa.wz) - Wave、Dragon、Lotus 派生版を持つ Kanagawa.nvim カラースキーム。
- [koh-sh/wezterm-theme-rotator](https://github.com/koh-sh/wezterm-theme-rotator) - キーボードショートカットで組み込みテーマを循環する。
- [Tomauskasz/electric-control-room.wez](https://github.com/Tomauskasz/electric-control-room.wez) - レイヤー化された APNG 背景効果を持つアニメーション電気制御室テーマ。
- [willytop8/Wezterm-Window-Tint](https://github.com/willytop8/Wezterm-Window-Tint) - アクティブペインの Git ルートにより、ウィンドウ枠、タブバー、ステータスバッジを色付けする。

## ユーティリティ

- [aureolebigben/wezterm-cmd-sender](https://github.com/aureolebigben/wezterm-cmd-sender) - 複数ペインへコマンドを送る。
- [ChrisGVE/dev.wezterm](https://github.com/ChrisGVE/dev.wezterm) - プラグインの開発・デプロイ向けロケーション解決器。
- [ChrisGVE/lib.wezterm](https://github.com/ChrisGVE/lib.wezterm) - プラグイン開発者向け共通ユーティリティ関数のライブラリ。
- [ChrisGVE/listeners.wezterm](https://github.com/ChrisGVE/listeners.wezterm) - 永続状態管理を備えた強化イベントリスナー機能を実現する。
- [dfsramos/wezterm-sync](https://github.com/dfsramos/wezterm-sync) - 外部依存ゼロで、プライベート GitHub Gist 経由で設定をマシン間同期する。
- [lilaqua/tunicodes](https://gitlab.com/lilaqua/tunicodes) - コードポイントによって Unicode 文字を挿入する。
- [zsh-sage/toggle_terminal.wez](https://github.com/zsh-sage/toggle_terminal.wez) - 使いやすい切り替え可能な端末ウィンドウ。
- [quantonganh/quickselect.wezterm](https://github.com/quantonganh/quickselect.wezterm) - Helix で開き、ビルドエラーへジャンプする。
- [sravioli/lantern.wz](https://github.com/sravioli/lantern.wz) - カラースキーム、フォント、GPU アダプター、ウィンドウ外観、カスタム設定プリセット向けセレクターフレームワーク。
- [sravioli/log.wz](https://github.com/sravioli/log.wz) - 差し替え可能な出力先と深刻度閾値を持つタグ付きロギングライブラリ。
- [sravioli/memo.wz](https://github.com/sravioli/memo.wz) - メモ化、キャッシュ、永続状態管理。
- [sravioli/ribbon.wz](https://github.com/sravioli/ribbon.wz) - ステータスバー、タブタイトル、セレクタープレビュー用のスタイル付きテキストセグメントを構築する。
- [sravioli/sigil.wz](https://github.com/sravioli/sigil.wz) - プロセス、ツール、UI ラベル用アイコン・アイデンティティカラー登録簿。
- [sravioli/warp.wz](https://github.com/sravioli/warp.wz) - 文字列、テーブル、リスト、パス、ファイルシステムヘルパーを備える汎用ユーティリティライブラリ。
- [btrachey/wezterm-replay](https://github.com/btrachey/wezterm-replay) - コマンド出力を解析し、URL、シェルコマンドなどを次のプロンプトに貼り付ける。
- [usrivastava92/widgets.wez](https://github.com/usrivastava92/widgets.wez) - macOS、Linux、Windows の CPU、RAM、バッテリー、ネットワーク、ディスク向けクロスプラットフォームステータスバーウィジェット。
