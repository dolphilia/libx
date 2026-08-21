---
title: "basharovV/StumbleUponAwesome"
description: "basharovV/StumbleUponAwesome の定本スナップショット"
licenseSource: "github-basharovV-StumbleUponAwesome-readme-md"
---

# <img src="extension/images/icon_128.png" width="45" align="left"> StumbleUponAwesome
開発者、テクノロジーと科学を愛する人のための、*awesome* なインターネット発見ボタン。

<img src="https://img.shields.io/chrome-web-store/users/dhfmgppomdaagdcbpccdfjpopgikcdge?color=%236F82EB&label=chrome%20users&labelColor=464646&style=flat-square&logo=google-chrome&logoColor=white"/> <img src="https://flat.badgen.net/amo/users/stumbleuponawesome?color=6F82EB&label=firefox%20users&icon=firefox"/> <img src="https://img.shields.io/chrome-web-store/v/dhfmgppomdaagdcbpccdfjpopgikcdge?color=E87676&label=version&style=flat-square" /> <img src="https://flat.badgen.net/github/license/basharovV/stumbleuponawesome?color=green" />
[![Mentioned in Awesome](https://awesome.re/mentioned-badge-flat.svg)](https://github.com/sindresorhus/awesome)

<p align="center">
  <img style="width: 100%;padding:0;margin:0;" src="header.png"/>
</p>

> [awesome curated lists](https://github.com/sindresorhus/awesome) のいずれかからランダムなサイトへ連れて行くブラウザー拡張機能。かつての StumbleUpon（現在は終了）のようなものです。
<p align="center">
  <a href="https://chrome.google.com/webstore/detail/stumbleuponawesome/dhfmgppomdaagdcbpccdfjpopgikcdge?authuser=3"><b>⚡️ Chrome 拡張機能をインストール</b></a>
  <a href="https://addons.mozilla.org/en-GB/firefox/addon/stumbleuponawesome/"><b>⚡️ Firefox アドオンをインストール</b></a>
</p>

親切な貢献者による GitHub 上の554件の awesome リストから、45,787件のユニークなサイトを収録しています。そこには隠れた逸品が待っています 💎。

----

## 使い方:
**Stumbleする:** ⚡️ 拡張機能ボタンをクリックするだけで、新しい awesome サイトへ移動します。

<small>（または <kbd>**`Alt`**</kbd> + <kbd>**`Shift`**</kbd> +<kbd>**`S`**</kbd> を使用）</small>

---

<img align="right" width="150" src="./rabbit-hole-icon.gif"/>

### ꩜ 紹介: Rabbit Hole

_誰もがインターネットのラビットホールに迷い込んだことがあります。_ <br/>
.<br/>
一分前には何気なくニュースを読んでいたのに、次の瞬間には `random topic` についてあまりにも多くを読んでいて、TED トークをしてもよさそうなほどです。 <br/>
.<br/>
_いったい何が起きたのでしょうか？_ ラビットホールがあなたを引き込み、時間を忘れさせました。しかし、何か _awesome_ なものを発見したかもしれません。 <br/>
.<br/>
ならば、もちろん、そのためのしゃれたボタンを用意して受け入れてみてはいかがでしょう。

**同じトピックを Stumble し続ける**、またはランダムモードへ戻ります。<br/>

<p align="center">
  <img style="width: 100%;padding:0;margin:0;" src="rabbit-hole.gif"/>
</p>

---

### セットアップ

1. このリポジトリを clone または fork します
2. Chrome/Brave またはその他の Chromium ベースブラウザーを開きます
3. `chrome://extensions` で拡張機能ページを開きます
4. デベロッパーモードを有効にします
5. "Load unpacked" をクリックし、`/extension` フォルダーを選択します。

### 開発

この拡張機能で構築したいものをいくつか挙げます。ただし、現時点で主に取り組んでいるのは、可能な限り良いリンクをキュレートし、より多くのデータソースを追加し、ページが興味深く、有用で、楽しく、わくわくするものを適切に組み合わせたものになるようにすることです。

- [ ] 良い／悪いリンクのフィードバック機構
- [ ] お気に入りの「逸品」をブックマークフォルダーへ
- [ ] 基本統計
- [ ] カテゴリー
  - [x] [awesome curated lists](https://github.com/sindresorhus/awesome)
  - [ ] テクノロジー、科学、ソフトウェア、スタートアップなど
- [x] Rabbit hole 機能（同じトピックに留まる）。
- [x] Firefox サポート
- [ ] Safari サポート

**[→ Changelog](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/CHANGELOG.md)**


### 権限に関する注記
この拡張機能は、アクセスするすべての stumble ページでオーバーレイ UI を表示するため、`<all_urls>` 権限を必要とします。これらのサイト上のデータにはアクセスしません。トラッキングや分析は一切なく、状態はローカルにのみ保存されます。

### キュレーターの皆さんに感謝 ✔
この拡張機能は、インターネットをキュレートする素晴らしい人々によって実現しています。
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) と [すべての awesome リスト著者](https://github.com/sindresorhus/awesome/graphs/contributors)

### データセットに関する注記
完全にローカルであり、[/extension/data](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/extension/data) にあります。[awesome_scraper.py](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/scraper/awesome_scraper.py) で生成されます。

##### 品質の維持
すべてのリンクが動作し、関連性を持つことを保証するために、データセットはクリーンアップされます。無効または壊れたリンク、CI パイプラインへのリンク、再帰リンク、寄付リンクなどはすべて削除されます。これは [utils.py](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/scraper/utils.py) のクリーンアップ関数で行います。低速な接続では、このスクリプトの実行に数時間かかる場合があります。

##### 壊れたリンク
データセットから削除した後、無効または壊れたリンク（404、SSL、その他のサーバーエラーを返すもの）の記録は、各スクレイプ後に[これらのテキストファイル](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/extension/data/broken-urls)へ保存されます。

❗️awesome リストのメンテナーの方は、**[あなたの awesome-list 用テキストファイル](https://github.com/basharovV/StumbleUponAwesome/blob/a7485e5f442afd1b324b524776e2571c8c5b924a/extension/data/broken-urls)** で無効なリンクを確認し、一覧から削除するか、有効な URL に更新してください。ファイルが空であれば問題ありません。

#### 貢献

[☝️issue を提出](https://github.com/basharovV/StumbleUponAwesome/issues/new)
[🤘PR を提出](https://github.com/basharovV/StumbleUponAwesome/pulls)

✨ 好奇心を持ち続けてください！
