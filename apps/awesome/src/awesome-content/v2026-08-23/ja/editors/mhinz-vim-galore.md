---
title: "mhinz/vim-galore"
description: "Vimの基本概念、設定、実践的な使い方、ヒント、デバッグ方法を網羅したガイド"
licenseSource: "github-mhinz-vim-galore-readme-md"
---

<div align='center'>
  <br /><br /><br />
  <img src='https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/logo-vim-galore.png' alt='vim-galore logo' />
  <br /><br /><br /><br />
  <div>
    <a href='https://github.com/wsdjeg/vim-galore-zh_cn'>Chinese</a> |
    <a href='http://postd.cc/?s=vim-galore'>Japanese</a> |
    <a href='https://github.com/lsrdg/vim-galore'>Portuguese</a> |
    <a href='http://givi.olnd.ru/vim-galore/vim-galore-ru.html'>Russian</a> |
    <a href='https://github.com/kyoz/vim-galore-vi'>Vietnamese</a>
    <div>
      <br />
      <sub>Licensed under <a href='https://creativecommons.org/licenses/by-sa/4.0'>CC BY-SA 4.0<a/>.</sub>
    </div>
  </div>
  <br /><br />
</div>

### [Intro](#intro-1)

- [What is Vim?](#what-is-vim)
- [The Vim Philosophy](#the-vim-philosophy)
- [First steps](#first-steps)
- [Minimal vimrc](#minimal-vimrc)
- [What kind of Vim am I running?](#what-kind-of-vim-am-i-running)
- [Cheatsheets](#cheatsheets)

### [Basics](#basics-1)

- [Buffers, windows, tabs](#buffers-windows-tabs)
- [Active, loaded, listed, named buffers](#active-loaded-listed-named-buffers)
- [Argument list](#argument-list)
- [Mappings](#mappings)
- [Mapleader](#mapleader)
- [Registers](#registers)
- [Ranges](#ranges)
- [Marks](#marks)
- [Completion](#completion)
- [Motions, operators, text objects](#motions-operators-text-objects)
- [Autocmds](#autocmds)
- [Changelist, jumplist](#changelist-jumplist)
- [Undo tree](#undo-tree)
- [Quickfix and location lists](#quickfix-and-location-lists)
- [Macros](#macros)
- [Colorschemes](#colorschemes)
- [Folding](#folding)
- [Sessions](#sessions)
- [Locality](#locality)

### [Usage](#usage-1)

- [Getting help offline](#getting-help-offline)
- [Getting help offline (alternative)](#getting-help-offline-alternative)
- [Getting help online](#getting-help-online)
- [Autocmds in practice](#autocmds-in-practice)
  - [User events](#user-events)
  - [Nested autocmds](#nested-autocmds)
- [Clipboard](#clipboard)
  - [Clipboard usage (Windows, macOS)](#clipboard-usage-windows-macos)
  - [Clipboard usage (Linux, BSD, ...)](#clipboard-usage-linux-bsd-)
- [Restore cursor position when opening file](#restore-cursor-position-when-opening-file)
- [Temporary files](#temporary-files)
  - [Backup files](#backup-files)
  - [Swap files](#swap-files)
  - [Undo files](#undo-files)
  - [Viminfo files](#viminfo-files)
  - [Example configuration for temporary files](#example-configuration-for-temporary-files)
- [Editing remote files](#editing-remote-files)
- [Managing plugins](#managing-plugins)
- [Block insert](#block-insert)
- [Running external programs and using filters](#running-external-programs-and-using-filters)
- [Cscope](#cscope)
- [MatchIt](#matchit)
- [True colors](#true-colors)

### [Tips](#tips-1)

- [Go to other end of selected text](#go-to-other-end-of-selected-text)
- [Saner behavior of n and N](#saner-behavior-of-n-and-n)
- [Saner command-line history](#saner-command-line-history)
- [Saner CTRL-L](#saner-ctrl-l)
- [Disable audible and visual bells](#disable-audible-and-visual-bells)
- [Quickly move current line](#quickly-move-current-line)
- [Quickly add empty lines](#quickly-add-empty-lines)
- [Quickly edit your macros](#quickly-edit-your-macros)
- [Quickly jump to header or source file](#quickly-jump-to-header-or-source-file)
- [Quickly change font size in GUI](#quickly-change-font-size-in-gui)
- [Change cursor style dependent on mode](#change-cursor-style-dependent-on-mode)
- [Don't lose selection when shifting sidewards](#dont-lose-selection-when-shifting-sidewards)
- [Reload a file on saving](#reload-a-file-on-saving)
- [Smarter cursorline](#smarter-cursorline)
- [Faster keyword completion](#faster-keyword-completion)
- [Cosmetic changes to colorschemes](#cosmetic-changes-to-colorschemes)

### [Commands](#commands-1)

- [:global and :vglobal](#global-and-vglobal) - すべての一致する行に対してコマンドを実行する
- [:normal and :execute](#normal-and-execute) - スクリプティングの夢のチーム
- [:redir and execute()](#redir-and-execute) - コマンドの出力をキャプチャする

### [Debugging](#debugging-1)

- [General tips](#general-tips)
- [Verbosity](#verbosity)
- [Profiling startup time](#profiling-startup-time)
- [Profiling at runtime](#profiling-at-runtime)
- [Debugging Vim scripts](#debugging-vim-scripts)
- [Debugging syntax files](#debugging-syntax-files)

### [Miscellaneous](#miscellaneous-1)

- [Additional resources](#additional-resources)
- [Vim distributions](#vim-distributions)
- [Standard plugins](#standard-plugins)
- [Map CapsLock to Control](#map-capslock-to-control)
- [Generating HTML from buffer](#generating-html-from-buffer)
- [Easter eggs](#easter-eggs)
- [Why hjkl for navigation?](#why-hjkl-for-navigation)

### [Common problems](#common-problems-1)

- [Editing small files is slow](#editing-small-files-is-slow)
- [Editing huge files is slow](#editing-huge-files-is-slow)
- [Bracketed paste (or why do I have to set 'paste' all the time?)](#bracketed-paste-or-why-do-i-have-to-set-paste-all-the-time)
- [Delays when using escape key in terminal](#delays-when-using-escape-key-in-terminal)
- [Function search undo](#function-search-undo)

### [Technical quirks](#technical-quirks-1)

- [Newline used for NUL](#newline-used-for-nul)

### [Terminology](#terminology-1)

- [Vim script? Vimscript? VimL?](#vim-script-vimscript-viml)

### [List of colorschemes](https://github.com/mhinz/vim-galore/blob/604f1a6f39705a83c02dd94b7ff2db1d3ff136f7/PLUGINS.md#colorschemes-1)

### [List of plugins](https://github.com/mhinz/vim-galore/blob/604f1a6f39705a83c02dd94b7ff2db1d3ff136f7/PLUGINS.md)

<br>

# Intro

## What is Vim?

[Vim](http://www.vim.org)は、[qed](https://en.wikipedia.org/wiki/QED_(text_editor))まで
さかのぼる長い系譜を持つテキストエディターです。[Bram
Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar)が1991年に公開しました。

プロジェクトは [vim.org](http://www.vim.org/index.php) にオンラインでホストされています。

Vimをインストールする：お気に入りのパッケージマネージャーを使用するか、vim.orgの [download
page](http://www.vim.org/download.php)を訪ねてください。

ディスカッションやユーザーの質問は、
[vim_use](https://groups.google.com/forum/#!forum/vim_use) メーリングリストで行うか、
IRC ([Freenode](https://freenode.net)) の `#vim` チャンネルで行うのが最適です。

開発は [GitHub](https://github.com/vim/vim) で行われ、議論は [vim_dev](https://groups.google.com/forum/#!forum/vim_dev) メーリングリストで行われる。

[Why, oh WHY, do those #?@! nutheads use
vi?](http://www.viemu.com/a-why-vi-vim.html) を読みましょう。Vimに関する一般的な誤解が説明されています。

## The Vim Philosophy

ヴィムはモーダル編集の哲学に従っています。これは、複数のモードを提供し、キーの意味がモードによって変化するということです。ファイルをナビゲートするのは_正常モード_、テキストを挿入するのは_挿入モード_、行を選択するのは_視覚モード_、コマンドにアクセスするのは_コマンドラインモード_などです。最初はこれに少し複雑に思えるかもしれませんが、大きな利点があります。つまり、ほとんどの場合、一度に複数のキーを押さえる必要がなく、キーを一つずつ連続して押すだけで済むのです。よくあるタスクほど頻繁に使われるほど、必要なキーの数が減ります。

モーダル編集とよく組み合わせられる概念に、オペレーターと動きがあります。
_オペレーター_ は特定の操作を開始します。たとえば、テキストの変更、削除、または選択など。
その後、操作を適用したいテキストの範囲を_動き_を使って指定します。
カッコの中のすべての内容を変更するには、`ci(` (「内側のカッコを変更」と読みます) を使用します。テキストのすべての段落を削除するには、`dap` (「段落の周りを削除」と読みます) を使用します。

もし高度なVimユーザーが作業しているのを見ると、彼らがVimの言語をピアニストが楽器を扱うように扱っていることに気づきます。複雑な操作は、わずかなキーボード操作で行われます。それらはもうほとんど意識しなくて済みます。なぜなら [muscle memory](https://en.wikipedia.org/wiki/Muscle_memory) がすでにその役割を担っているからです。これにより [cognitive
load](https://en.wikipedia.org/wiki/Cognitive_load) が減少し、実際のタスクに集中できるようになります。

## First steps

ヴィムには、最も基本的なことについて学べるインタラクティブなチュートリアルが組み込まれています。シェルから開始できます。

```
$ vimtutor
```

どう見てもつまらないように見えるので、やめてしまうのを避け、練習を進めましょう。以前使っていたエディタやIDEはおそらくすべてモーダルでなかったので、モードを切り替えることで作業を行うのは最初は不自然に感じますが、Vimを使うほどになると、それが [muscle memory](https://en.wikipedia.org/wiki/Muscle_memory)になります。

Vimは[Stevie](https://en.wikipedia.org/wiki/Stevie_(text_editor))、一個の[vi](https://en.wikipedia.org/wiki/Vi)のクローンとして取り付けられ、2つの動作モードをサポートしている。
"compatible" と "nocompatible"。compatibleモードでVimを使用することは、すべてのオプションに対してviのデフォルト値を使用することを意味する。Vimを起動する際にまだユーザー用のvimrcファイルを作成していないか、あるいは`vim -N`でVimを起動していない場合、compatibleモードが自動的に適用される！compatibleモードでVimを使用しないでください。ただ、使わないでください。

次に：

1. Create your own [vimrc](#minimal-vimrc).
2. Have some [cheatsheets](#cheatsheets) 初週の準備が整った
3. Read through the [basics](#basics-1) 何が可能なのかを学ぶセクション
4. Learn on demand! You never finish learning Vim. If you encounter any
   problems, just look for it on the internet. Your problem was solved already.
   Vim comes with great documentation and knowing how to navigate it is a must:
   [Getting help offline](#getting-help-offline).
5. Have a look at the [additional resources](#additional-resources).

最後のアドバイス：すべての種類の過剰に宣伝された [plugins](#managing-plugins) を追加する前に、Vimが既に本質的にサポートしている機能だけを実装するものであることに気づくように、Vimを適切に使う方法を学んでください。

## Minimal vimrc

ユーザーのvimrcは`~/.vimrc`に配置するか、より明確な分離のため`~/.vim/vimrc`に配置することができる。後者の方法により、全体の設定をバージョン管理に含め、たとえばGitHubにアップロードできるようになる。

インターネットのあらゆる場所に「minimal vimrcs」がたくさんあります。私のバージョンがそれほど最小限であるとは限りませんが、初心者にとって有用だと考えられる、適切な設定の良いセットを提供しています。

いずれにせよ、すべての記載された設定について調べて、自分で判断する必要があります。 :-)

こうして、ここにあります： [minimal-vimrc](https://github.com/mhinz/vim-galore/blob/604f1a6f39705a83c02dd94b7ff2db1d3ff136f7/static/minimal-vimrc.vim)

興味がある場合は、ここに
[my vimrc](https://github.com/mhinz/dotfiles/blob/master/.vim/vimrc)。

**ヒント**：ほとんどのプラグイン開発者は複数のプラグインを維持しており、GitHubに自分のvimrcを公開しています（通常は「vim-config」とか「dotfiles」というリポジトリに）。したがって、好きなプラグインを見つけたときは、その開発者のGitHubページを検索し、そのリポジトリを確認してください。

## What kind of Vim am I running?

`:version` を見ることで、現在実行中の Vim バイナリがコンパイルされた方法について必要なすべての情報を得られます。

最初の行は、バイナリがコンパイルされた日付とバージョンを示しており、たとえば 7.4 です。
次の行の一つが `Included patches: 1-1051` と記されています。これはパッチレベルです。したがって、あなたの正確な Vim バージョンは 7.4.1051 です。

別の行には、たとえば`Tiny version without GUI`または`Huge version
with GUI`と記されています。この情報から、VimにGUIサポートが含まれるかどうか、
たとえばシェルから`gvim`を起動したり、ターミナルエミュレーター内のVimから
`:gui`を実行したりできるかが分かります。ほかに重要なのは`Tiny`と`Huge`です。
Vimは`tiny`、`small`、`normal`、`big`、`huge`という機能セットを区別し、
それぞれ異なる機能の部分集合を有効にします。

`:version`の出力の大部分は、機能リストそのものに消費されている。
`+clipboard`はクリップボード機能がコンパイルされたことを意味し、`-clipboard`はその機能がコンパイルされていないことを意味する。

Vimのいくつかの機能は、それらが動作するためにはコンパイルする必要があります。たとえば、`:prof`が動作するには、機能が非常に多いVimが必要です。なぜなら、その機能セットが`+profile`の機能を可能にしているからです。

もしもそのような状況でなく、Vimをパッケージマネージャーからインストールした場合は、名前が `vim-x`、`vim-x11`、`vim-gtk`、`vim-gnome` またはそれらに類するパッケージをインストールしていることを確認してください。これらのパッケージは通常、大きな機能セットを提供しています。

プログラム的にバージョンや機能を確認することもできます

```vim
" Do something if running at least Vim 7.4.42 with +profile enabled.
if (v:version > 704 || v:version == 704 && has('patch42')) && has('profile')
  " do stuff
endif
```

ヘルプ：

```
:h :version
:h feature-list
:h +feature-list
:h has-patch
```

## Cheatsheets

- http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
- https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
- http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png
- http://www.rosipov.com/images/posts/vim-movement-commands-cheatsheet.png

もしくは、Vim内ですぐにチェックシートを開く： [vim-cheat40](https://github.com/lifepillar/vim-cheat40).

# Basics

## Buffers, windows, tabs

Vimはテキストエディタです。テキストが表示されるたび、そのテキストは**バッファ**の一部になります。各ファイルは独自のバッファに開かれます。プラグインはそれぞれのバッファに内容を表示しますなど。

バッファには多くの属性がある。たとえば、その中に含まれるテキストが変更可能かどうか、あるいはファイルと関連付けられており、保存時にディスクに同期させる必要があるかどうかといったものがある。

**Windows** はバッファへのビューポートです。複数のファイルを同時に表示するか、あるいは同じファイルの異なる場所を表示したい場合、ウィンドウを使用します。

そして、お願いします、お願いします、それらを _splits_ と呼んでください。窓を二つに分けることはできますが、それだけではそれらを _splits_ と呼ぶことはできません。

ウィンドウは縦にまたは横に分割でき、既存のウィンドウの高さや幅も変更できます。したがって、好みのウィンドウレイアウトを使用できます。

**タブページ**（あるいは単にタブ）は、ウィンドウのコレクションです。したがって、複数のウィンドウレイアウトを使用したい場合は、タブを使用してください。

簡潔に言えば、引数を指定せずにVimを起動すると、1つのタブページに1つのウィンドウが含まれ、そのウィンドウが1つのバッファを表示する。

ちなみに、バッファリストはグローバルであり、どのタブからもどのバッファにアクセスできます。

## Active, loaded, listed, named buffers

Vimをこうして実行してください `vim file1`。ファイルの内容がバッファにロードされます。
現在、**ロードされたバッファ**を持ちます。バッファの内容は、Vim内で保存するまでディスク（ファイルに書き戻す）まで同期されません。

バッファはウィンドウに表示されているため、それも**アクティブバッファ**です。今後、別のファイルを `:e file2` で読み込むと、 `file1` は**非表示バッファ**になり、 `file2` がアクティブバッファになります。

両方のバッファも**リストされている**ため、それらは`:ls`の出力にリストされる。プラグインバッファまたはヘルプバッファは通常、リストされていないとマークされる。なぜなら、それらはテキストエディタで通常編集するような普通のファイルではないからである。リストされているか、リストされていないかは、`:ls!`で表示できる。

**名前なしバッファ**、またプラグインでもよく使われるバッファは、ファイル名が関連付けられていないバッファです。たとえば `:enew` は名前なしのスクラッチバッファを作成します。いくつかのテキストを追加し、`:w /tmp/foo` を使ってディスクに書き出せば、名前付きバッファになります。

## Argument list

[global buffer list](#buffers-windows-tabs)はVimの機能です。それ以前のviでは、ただ引数リストしか存在していなかったのです。これはVimでも利用可能です。

シェルコマンドラインにVimに渡されたすべてのファイル名は、引数リストに記憶される。複数の引数リストが存在する可能性がある：デフォルトではすべての引数がグローバルな引数リストに格納されるが、`:arglocal`を使用することで、ウィンドウに限定された新しい引数リストを作成できる。

現在の引数を `:args` でリスト表示します。引数リストからファイルを `:next`、`:previous`、`:first`、`:last` などで切り替えます。ファイルのリストを `:argadd`、`:argdelete` または `:args` で変更します。

ファイルを扱う際にバッファまたは引数リストを使用するかどうかは好みの問題です。私の印象は、ほとんどの人がバッファリストを exclusively 使っており、それ以外の方法は使わないということです。

それでも、引数リストには一つ、大きな用途があります： `:argdo` を使ってバッチ処理！簡単なリファクタリングの例：

```vim
:args **/*.[ch]
:argdo %s/foo/bar/ge | update
```

このコマンドは、現在のディレクトリおよびその下にあるすべてのCソースファイルとヘッダーファイルにおけるすべての"foo"の出現を"bar"に置き換える。

ヘルプ: `:h argument-list`

## Mappings

あなたは、`:map`ファミリーコマンドを使って、独自のマッピングを定義できます。このファミリーの各コマンドは、特定のモードセットに対してマッピングを定義します。技術的にはVimには12のモードが用意されており、そのうち6つはマッピング可能です。さらに、一部のコマンドは複数のモードに対して同時に動作します。

| Recursive | Non-recursive | Unmap     | Modes                            |
|-----------|---------------|-----------|----------------------------------|
| `:map`    | `:noremap`    | `:unmap`  | normal, visual, operator-pending |
| `:nmap`   | `:nnoremap`   | `:nunmap` | normal                           |
| `:xmap`   | `:xnoremap`   | `:xunmap` | visual                           |
| `:cmap`   | `:cnoremap`   | `:cunmap` | command-line                     |
| `:omap`   | `:onoremap`   | `:ounmap` | operator-pending                 |
| `:imap`   | `:inoremap`   | `:iunmap` | insert                           |

たとえば、これは通常モードだけに適用されるマッピングを定義している。

```vim
:nmap <space> :echo "foo"<cr>
```

`:nunmap <space>`]を使用して再度マップを解除してください。

幾つか、それほど一般的でないモード（またはそれらの組み合わせ）については、`:h
map-modes`を参照してください。

ここまで、問題ない。初心者にとってかなり混乱を招く唯一の問題は、`:nmap`が_再帰_的であるということだ。つまり、右側の部分が他のマッピングを考慮するということだ。

だから、あなたは"Foo"をただ繰り返すマッピングを定義した

```vim
:nmap b :echo "Foo"<cr>
```

でも、`b`のデフォルト動作（一つの単語分戻る）を別のキーにマッピングしたい場合がある

```vim
:nmap a b
```

<kbd>a</kbd>を押すとカーソルが1単語戻るはずですが、代わりにコマンドラインへ
「Foo」と表示されます。右辺の`b`が、すでに別の操作、つまり
`:echo "Foo"<cr>`へマッピングされているためです。

この問題を解決する正しい方法は、_非再帰_マッピングを使用することです：

```vim
:nnoremap a b
```

ルール：再帰を実際に必要とする場合を除き、常に非再帰的なマッピングを使用する。

マッピングを検索するには、右側の値を指定しないでください。たとえば `:nmap` はすべての通常のマッピングを表示し、`:nmap <leader>` はマップリーダーで始まるすべての通常のマッピングを表示します。

標準マッピングを無効にする場合は、それらを特別な `<nop>`
文字にマッピングしてください。たとえば、`:noremap <left> <nop>`。

ヘルプ:

:h key-notation
 :h mapping
 :h 05.3

## Mapleader

マップリーダーは、カスタムマッピングと使用できるプレースホルダーに過ぎず、デフォルトでは `\` に設定されています。

```vim
nnoremap <leader>h :helpgrep<space>
```

このマッピングは `\h` によってトリガーされます。 `<space>h` を代わりに使用したい場合：

```vim
let mapleader = ' '
nnoremap <leader>h :helpgrep<space>
```

さらに、`<localleader>` がある。これは `<leader>` のローカル対応であり、バッファに局所的なもの（たとえば、ファイルタイプごとのプラグイン）に適用されるマッピングに使用されるものとされている。また、デフォルトで `\` となる。

**Note**: Set the mapleaders before mappings! All leader mappings that are in
effect already, won't change just because the mapleader was changed. `:nmap
<leader>` will show all normal mode leader mappings with the mapleader resolved
already, so use it to double-check your mappings.

`:h mapleader` と `:h maplocalleader` を参照してください。

## Registers

レジスタはテキストを保存するためのスロットです。テキストをレジスタにコピーすることは**ヤンク**と呼ばれ、レジスタからテキストを抽出することは**ペースト**と呼ばれます。

Vim は以下のレジスタを提供します。

| Type                | Character              | Filled by? | Readonly? | Contains text from? |
|---------------------|------------------------|------------|-----------|---------------------|
| Unnamed             | `"`                    | vim        | [ ]       | Last yank or deletion. (`d`, `c`, `s`, `x`, `y`) |
| Numbered            | `0` to `9`             | vim        | [ ]       | Register `0`: Last yank. Register `1`: Last deletion. Register `2`: Second last deletion. And so on. Think of registers `1`-`9` as a read-only [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) with 9 elements. |
| Small delete        | `-`                    | vim        | [ ]       | Last deletion that was less than one line. |
| Named               | `a` to `z`, `A` to `Z` | user       | [ ]       | If you yank to register `a`, you replace its text. If you yank to register `A`, you append to the text in register `a`. |
| Read-only           | `:`, `.`, `%`          | vim        | [x]       | `:`: Last command, `.`: Last inserted text, `%`: Current filename. |
| Alternate buffer    | `#`                    | vim        | [ ]       | Most of the time the previously visited buffer of the current window. See `:h alternate-file` |
| Expression          | `=`                    | user       | [ ]       | Evaluation of the VimL expression that was yanked. E.g. do this in insert mode: `<c-r>=5+5<cr>` and "10" will be inserted in the buffer. |
| Selection           | `+`, `*`               | vim        | [ ]       | `*` and `+` are the [clipboard](#clipboard) registers. |
| Drop                | `~`                    | vim        | [x]       | From last drag'n'drop. |
| Black hole          | `_`                    | vim        | [ ]       | If you don't want any other registers implicitly affected. E.g. `"_dd` deletes the current line without affecting registers `"`, `1`, `+`, `*`. |
| Last search pattern | `/`                    | vim        | [ ]       | Last pattern used with `/`, `?`, `:global`, etc. |

各読み取り専用でないレジスタはユーザーによって設定可能である。

```vim
:let @/ = 'register'
```

その後 <kbd>n</kbd>は「register」の次に出現する場所にジャンプする。

レジスタが暗黙に埋められる場合に多くの例外が発生するため、必ず `:h registers` を読みましょう。

`y` と `p`/`P` で貼り付けますが、Vim は文字単位と行単位の視覚選択を区別しています。 `:h linewise` を参照してください。

**例: 行ごと**

`yy`（またはただ `Y`）で現在の行を引き抜き、カーソルを別の場所に移動させ、
`p` を使用して現在の行の下に貼り付け `P` でその上に貼り付けます。

**例: 文字単位**

`0yw`で最初の単語を引き抜き、別の場所に移動し、`p`で現在の行のカーソルの後ろに、`P`でカーソルの前に貼り付けます。

**例：レジスタの明示的な命名**

`"aY` に現在の行を登録する `a`。別の行に移動する。`"AY`
現在の行を `a` に追加する。

私は、すべてのこれらのレジスタを少し試して、常にチェックしてください
`:reg`、そうすれば実際に何が起こっているかを見ることができます。

**興味深い事実**：Emacsでは「yanking」とは貼り付け（または_以前に削除したテキストの再挿入_）を意味し、コピーを意味しない。

## Ranges

範囲はかなりわかりやすいですが、多くのVimmerはその
完全な可能性について知りません。

- Many commands take ranges.
- An address denotes a certain line.
- A range is either a single address or a pair of addresses separated by either
  `,` or `;`.
- Ranges tell commands which lines to act on.
- Most commands act only on the current line by default. Notable exceptions are
  `:write` and `:global` which act on all lines.

範囲の使用はかなり直感的です。以下にいくつかの例を示します（`:d`を`:delete`の短縮形として使用）：

| Command | Lines acted on |
|---------|----------------|
| `:d` | Current line. |
| `:.d` | Current line. |
| `:1d` | First line. |
| `:$d` | Last line. |
| `:1,$d` | All lines. |
| `:%d` | All lines (syntactic sugar for `1,$`). |
| `:.,5d` | Current line to line 5. |
| `:,5d` | Also current line to line 5. |
| `:,+3d` | Current line and the next 3 lines. |
| `:1,+3d` | First line to current line + 3. |
| `:,-3d` | Current line and the last 3 lines. (Vim will prompt you, since this is a reversed range.) |
| `:3,'xdelete` | Lines 3 to the line marked by [mark](#marks) x. |
| `:/^foo/,$delete` | From the next line that starts with "foo" to the end. |
| `:/^foo/+1,$delete` | From the line after the line that starts with "foo" to the end. |

`,`の代わりに、`;`をセパレータとして使うことができます。違いは、`from,to`の場合、_to_は現在の行に対して相対的ですが、`from;to`を使う場合、_to_は_from_のアドレスに対して相対的になります！現在の行が5行にあると仮定すると、`:1,+1d`は1行から6行までを削除し、`:1;+1d`はただ1行と2行だけを削除します。

`/`アドレスの前に別のアドレスを付加できます。これにより、パターンを_スタック_できます。たとえば：

```vim
:/foo//bar//quux/d
```

これは、現在の行後にまず"foo"を含む行、その後に"bar"を含む行、その後に"quux"を含む行を含む最初の行を削除する。

vimは、場合によってはコマンドラインに範囲を自動的に前に追加します。たとえば、視覚的に1行を選択するには `V` を入力し、いくつかの行を選択して `:` をタイプすると、コマンドラインに範囲 `'<,'>` が表示されます。これは、次のコマンドが、以前選択した行を範囲として使用するということです。（これは、なぜか、たまに `:vnoremap foo :<c-u>command` といったマッピングを見かける原因です。ここでは `<c-u>` が範囲を削除するために使われており、vimは、範囲をサポートしていないコマンドに範囲を指定するとエラーを出すためです。）

別の例として、通常モードで `!!` を使用する場合がある。これにより、コマンドラインに `:.!` が入力される。そのあとに外部プログラムを続けて呼び出した場合、そのプログラムの出力が現在の行を置き換える。したがって、ls の出力を使って現在の段落を置き換えるには、`:?^$?+1,/^$/-1!ls` を使用すればよい。面白い！

ヘルプ:

```
:h cmdline-ranges
:h 10.3
```

## Marks

あなたはマークを使用して、ファイル内の位置、つまり行番号と列を記憶します。

| Marks | Set by.. | Usage |
|-------|----------|-------|
| `a` - `z` | User | Local to file, thus only valid within one file. Jumping to a lowercase mark, means jumping within the current file. |
| `A` - `Z` | User | Global, thus valid between files. Also called _file marks_. Jumping to a file mark may switch to another buffer. |
| `0` - `9` | viminfo | `0` is the position when the viminfo file was written last. In practice this means when the last Vim process ended. `1` is the position of when the second last Vim process ended and so on. |

マークの前に `'`/`g'` または `` ` ``/`` g` `` を配置して動きを形成する。

`mm`を使うと、現在位置をマーク「m」として記憶できます。ファイル内を移動した後、
`'m`（最初の非空白文字）または`` `m ``（正確な列）で戻れます。小文字のマークは、
viminfoファイルを適切に設定すればVim終了後も保持されます。`:h viminfo-'`を参照してください。

`mM`を使うと、現在位置をファイルマーク「M」として記憶できます。別のバッファーへ
切り替えた後、`'M`または`` `M ``で戻れます。

他の動きには：

| Motion           | Jump to.. |
|------------------|-----------|
| `'[`, `` `[ ``   | First line or character of previously changed or yanked text. |
| `']`, `` `] ``   | Last line or character of previously changed or yanked text. |
| `'<`, `` `< ``   | Beginning line or character of last visual selection. |
| `'>`, `` `> ``   | Ending line or character of last visual selection. |
| `''`, ``` `` ``` | Position before the latest jump. |
| `'"`, `` `" ``   | Position when last exiting the current buffer. |
| `'^`, `` `^ ``   | Position where last insertion stopped. |
| `'.`, `` `. ``   | Position where last change was made. |
| `'(`, `` `( ``   | Start of current sentence. |
| `')`, `` `) ``   | End of current sentence. |
| `'{`, `` `{ ``   | Start of current paragraph. |
| `'}`, `` `} ``   | End of current paragraph. |

マーカーは、また [range](#ranges) にも使用できます。以前にこれを見たことがあるでしょうし、それが何を意味するか不思議に思ったかもしれません：視覚モードでいくつかのテキストを選択し、 `:` を実行すると、コマンドラインの前に `:'<,'>` が表示され、これは次のコマンドが視覚選択を表す範囲を得ることを意味します。

`:marks`にすべてのマーカーをリストしてください。`:h mark-motions`に記載されたすべての内容を読みましょう。

## Completion

Vimにはさまざまな挿入モードの補完があります。一致する項目が複数ある場合、ポップアップメニューが表示され、選択したい一致項目に移動できます。

典型的な補完の種類には、タグ、インポートされたモジュールやライブラリから導入された関数、ファイル名、辞書、あるいは現在のバッファ内の単語などがあります。

Vim は各種の補完に対してマッピングを提供しており、それらはすべて
`<c-x>`（挿入モードで使用してください）で始まります：

| Mapping | Kind | Help         |
|---------|------|--------------|
| `<c-x><c-l>` | whole lines | `:h i^x^l` |
| `<c-x><c-n>` | keywords from current file | `:h i^x^n` |
| `<c-x><c-k>` | keywords from `'dictionary'` option | `:h i^x^k` |
| `<c-x><c-t>` | keywords from `'thesaurus'` option | `:h i^x^t` |
| `<c-x><c-i>` | keywords from current and included files | `:h i^x^i` |
| `<c-x><c-]>` | tags | `:h i^x^]` |
| `<c-x><c-f>` | file names | `:h i^x^f` |
| `<c-x><c-d>` | definitions or macros | `:h i^x^d` |
| `<c-x><c-v>` | Vim commands | `:h i^x^v` |
| `<c-x><c-u>` | user defined (as specified in `'completefunc'`) | `:h i^x^u` |
| `<c-x><c-o>` | omni completion (as specified in `'omnifunc'`) | `:h i^x^o` |
| `<c-x>s`     | spelling suggestions | `:h i^Xs` |

人々は、ユーザー定義補完とオミニ補完の違いについて混乱するかもしれません。しかし、技術的にはどちらも同じことをしています。どちらも、現在の位置を検査する関数を受取り、補完候補のリストを返します。ユーザー定義補完は、ユーザーが自分の目的のために定義します。（驚き！）これは何でも可能です。一方、オミニ補完はファイルタイプに特化した目的のために使われ、たとえば構造体のメンバやクラスメソッドの補完などに使われ、通常はファイルタイププラグインによって設定されます。

Vimでは`'complete'`オプションを設定して、複数種類の補完を同時に使うこともできます。
デフォルトでは多くの対象が含まれるため、好みに合わせて絞り込んでください。
補完は`<c-n>`（次）または`<c-p>`（前）で起動でき、これらはポップアップメニューの
項目選択にも使われます。詳しくは`:h i^n`と`:h 'complete'`を参照してください。

`:h 'completeopt'`でポップアップメニューの動作を設定できるようにしてください。デフォルトは非常に適切ですが、私はさらに"noselect"を追加したいと思っています。

ヘルプ：

```
:h ins-completion
:h popupmenu-keys
:h new-omni-completion
```

## Motions, operators, text objects

**移動**はカーソルを動かします。皆さん、`h`/`j`/`k`/`l`を知っています。あるいは`w`と`b`。さらに`/`も移動です。これらはすべて数を取るのです。`2?the<cr>`は「the」の最後から第二の出現場所にジャンプします。

`:h navigation` およびその下のすべての内容を参照してください。

**オペレータ**はテキストの領域に作用する。たとえば、`d`、`~`、`gU`、`>`などがある。これらは通常モードまたは視覚モードで使用される。通常モードでは、オペレータが最初に来て、その後に移動命令が続く。たとえば、`>j`。視覚モードでは、オペレータは選択範囲に直接作用する。たとえば、`Vjd`。

動き同様に、操作命令もカウントを取ります。たとえば、`2gUw`は現在の文字列の残り部分および次の文字列を大文字にします。動きと操作命令がカウントを取りますので、`2gU2w`はまったく同じように動作し、`gU2w`が2回実行されます。

すべての利用可能な演算子については `:h operator` を参照してください。 `:set tildeop` を使用して `~` が演算子として動作するようにしてください。

**テキストオブジェクト**は、周囲の領域に作用し、一方にのみ作用する動きとは対照的である。実際には、オブジェクトに作用するもので、たとえば一連の文字、一文、かっこの中のすべての内容などがある。

テキストオブジェクトは、通常モードでカーソルを移動するために使用できません。なぜなら、最も熟練したカーソルでも、同時に二方向にジャンプすることはできませんからです。しかし、視覚モードでは機能します。その理由は、オブジェクトの一方側がすでに選択されているためで、カーソルはただもう一方側にジャンプするだけです。

テキストオブジェクトは、いずれにせよ `i`（_inner_を想定）または `a`（_around_を想定）から始まり、オブジェクトを表す文字が続く。 `i`はそのオブジェクト自身にのみ作用し、 `a`はオブジェクト plus その後の空白文字に作用する。 例： `diw`は現在の単語を削除し、 `ci(`はすべての括弧の中の内容を変更する。

テキストオブジェクトはカウントを取る。 `((( )))` とカーソルを最内側の括弧の内側またはその間にあると想定し、その後 `d2a(` は2つの内側の括弧を削除し、それらの間にあるすべての内容を削除する。

すべての利用可能なテキストオブジェクトについては、`:h text-objects`を参照してください。

## Autocmds

Vimにおいて、バッファが保存されたか、あるいはVimが起動した後に、所謂_autocmds_によってアクションをトリガーできます。

Vimは自動コマンドに大きく依存しています。信じられませんか？ `:au`を確認してください。しかし、出力があなたを圧倒しないようにしてください。これらは現在有効なすべての自動コマンドです！

`:h {event}`にある内容を確認して、すべての利用可能なイベントについての概要を把握し、`:h
autocmd-events-abc`を参照して詳細を確認してください。

ファイルタイプごとの設定の典型的な例はこうである。

```vim
autocmd FileType ruby setlocal shiftwidth=2 softtabstop=2 comments-=:#
```

でも、バッファがRubyコードを含んでいることをどうやって知っているのだろうか？ それは別の自動コマンドがその内容をRubyとして検知し、それに応じてファイルタイプを設定したためであり、その結果、再度 `FileType` イベントがトリガーされたのである。

vimrc に誰もが最初に追加するものは `filetype on` です。これは `filetype.vim` が起動時に読み込まれることを意味し、ほぼすべてのファイルタイプに対して自動コマンドを設定します。

もし勇気があるなら、見てみましょう： `:e $VIMRUNTIME/filetype.vim`。 "Ruby" と検索すると、Vim は Ruby ファイルを検出するためにファイルの拡張子 `.rb` を使っていることがわかります。

**注意**：同じイベントのアトゥーコマンドは、作成順に実行される。`:au`では、正しい順序で表示している。

```vim
au BufNewFile,BufRead *.rb,*.rbw  setf ruby
```

この場合、`BufNewFile`と`BufRead`イベントはVimのCソースにハードコードされており、
`:e`などのコマンドでファイルを開くたびに発行されます。その後、`filetype.vim`に
定義された数百種類のファイルタイプがすべて検査されます。

簡潔に言えば、Vimはイベントと自動コマンドを積極的に活用しているが、それらのイベント駆動システムにカスタマイズを接続できるシンプルなインターフェースを提供している。

ヘルプ: `:h autocommand`

## Changelist, jumplist

最後の100件の変更の位置は**changelist**に保持されます。同じ行に複数の小さな変更が行われた場合、それらはまとめて処理されますが、位置は最後の変更の位置になります（行の途中に何かを追加した場合など）

ジャンプするたびに、ジャンプ前の位置は**jumplist**に記憶されます。jumplistには最大100項目まで含まれます。各ウィンドウにはそれぞれのjumplistがあります。ウィンドウを分割すると、jumplistがコピーされます。

ジャンプに該当するのは、`'`, `` ` ``, `G`, `/`, `?`, `n`, `N`,
`%`, `(`, `)`, `[[`, `]]`, `{`, `}`, `:s`, `:tag`, `L`, `M`, `H`、および新しいファイルの
編集を開始するコマンドです。

| List       | List all entries | Go to older position | Go to newer position |
|------------|------------------|----------------------|----------------------|
| jumplist   | `:jumps`         | `[count]<c-o>`       | `[count]<c-i>`       |
| changelist | `:changes`       | `[count]g;`          | `[count]g,`          |

すべての項目をリストアップするとき、現在の位置を示すマーカー `>`が使用されます。通常、それは1番目の位置の下にあります。

Vimを再起動しても両方のリストが保持されるようにするには、viminfoファイルと`:h viminfo-'`を使用する必要があります。

**NOTE**: 最新のジャンプ前の位置も [mark](#marks) として保持され、``` `` ``` or `''` にジャンプ可能である。

ヘルプ:

```
:h changelist
:h jumplist
```

## Undo tree

テキストステートの最新変更は記憶されます。_undo_ を使用して変更を元に戻し、_redo_ を使用して以前元に戻した変更を再適用できます。

重要な点は、最近の変更を保持しているデータ構造が
[queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) ではなく
[tree](https://en.wikipedia.org/wiki/Tree_(data_structure))! あなたの変更は木のノードであり、それぞれ（トップノードを除く）は親ノードを持ちます。各ノードは変更されたテキストと時間に関する情報を保持しています。枝（branch）とは、どのノードから始まりトップノードまで上に向かうノードの系列です。変更を元に戻した後に別のものを取り込むと、新しい枝が作られます。

```
ifoo<esc>
obar<esc>
obaz<esc>
u
oquux<esc>
```

今、あなたは3行を持ち、アンダーオートリーフはこうなります。

```
     foo(1)
       /
    bar(2)
   /      \
baz(3)   quux(4)
```

アンダーオートリーツには4つの変更があります。数字はノードが作成された_時刻_を表しています。

今、この木を走査するには二つの方法があります。それらを_branch-wise_と_time-wise_と呼ぶことにしましょう。

undo（`u`）とredo（`<c-r>`）は分岐単位で動作し、現在の分岐を上下します。`u`で
テキスト状態はノード「bar」へ戻り、もう一度`u`を実行すると「foo」まで戻ります。
続いて`<c-r>`を実行すると「bar」へ、さらにもう一度`<c-r>`を実行すると「quux」へ進みます。
分岐単位のコマンドでは、もはや「baz」へ到達できません。

この対立に対して、`g-`と`g+`は時間的に作用する。したがって、`g-`は、`u`がするようにノード"bar"の状態に戻るのではなく、時系列上の前の状態、ノード"baz"に戻る。別の`g-`は状態をノード"bar"の状態に戻し、さらにそのように繰り返す。したがって、`g-`と`g+`はそれぞれ時間軸上で往復するだけである。

| Command / Mapping | Action |
|-------------------|--------|
| `[count]u`, `:undo [count]` | Undo [count] changes. |
| `[count]<c-r>`, `:redo` | Redo [count] changes. |
| `U` | Undo all changes to the line of the latest change. |
| `[count]g-`, `:earlier [count]?` | Go to older text state [count] times. The "?" can be either "s", "m", "h", "d", or "f". E.g. `:earlier 2d` goes to the text state from 2 days ago. `:earlier 1f` will go to the state of the latest file save. |
| `[count]g+`, `:later [count]?` | Same as above, but other direction. |

アンダーモードのツリーはメモリ上に保持され、Vimが終了すると失われます。persistent undoを有効にする方法については [Undo
files](#undo-files) を参照してください。

Undoツリーが混乱している場合は、
[undotree](https://github.com/mbbill/undotree)がそれを可視化するのに非常に良い仕事しています。

ヘルプ：

```
:h undo.txt
:h usr_32
```

## Quickfix and location lists

クイックフィックスリストは、ファイル位置を保持するデータ構造です。本質的には、クイックフィックスリストの各項目は、ファイルパス、行番号およびオプションの列番号、および説明文を含みます。

典型的な使用例は、コンパイラのエラーを組み立てたり、grepツールの実行結果を生成したりすることである。

Vimには、クイックフィックスリストを表示するための特別な種類のバッファがあります。それはクイックフィックスバッファです。クイックフィックスバッファ内の各行は、クイックフィックスリストの1つの項目を示しています。

通常、クイックフィックスリストを表示するために新しいウィンドウを開きます。そのウィンドウはクイックフィックスウィンドウです。そのとき、最後のウィンドウはクイックフィックスウィンドウと関連付けられます。

クイックフィックスバッファ `<cr>` で選択された項目を関連するウィンドウに開き、`<c-w><cr>` は新しいウィンドウに開く

quickfix listという名前は、[Aztec C
compiler](https://en.wikipedia.org/wiki/Aztec_C)の「quick fix」機能に由来します。

実際にリストには二種類があります：quickfixとlocation listです。これらはほぼ同じように動作しますが、以下の違いがあります：

- There is only one quickfix list. There can be multiple location lists; one per
  window.
- They use slightly different commands for navigation.

| Action         | Quickfix     | Location     |
|----------------|--------------|--------------|
| open window    | `:copen`     | `:lopen`     |
| close window   | `:cclose`    | `:lclose`    |
| next entry     | `:cnext`     | `:lnext`     |
| previous entry | `:cprevious` | `:lprevious` |
| first entry    | `:cfirst`    | `:lfirst`    |
| last entry     | `:clast`     | `:llast`     |

これらのコマンドが動作するには、クイックフィックスおよび位置ウィンドウを開ける必要はありません。

`:h quickfix`に詳しくはおよびコマンドの完全なリストについてはご確認ください。

簡潔のため、_quickfix_ および _location_ はそれぞれ _qf_ および
_loc_ と略される。

**例**

現在のディレクトリ内を再帰的に探索し、特定のクエリに対してファイルを検索し、その結果をクイックフィックスリストに表示するには、私たちの昔からの友達 `grep` を使ってください。

```vim
:let &grepprg = 'grep -Rn $* .'
:grep! foo
<grep output - hit enter>
:copen
```

仮にどのファイルにも"foo"という文字列が含まれていた場合、今すぐクイックフィックスウィンドウに表示されるべきです。

## Macros

Vimは、入力された文字を [register](#registers) に_記録_する機能を提供します。これは、即座に特定のタスクを自動化するための素晴らしい方法です。（より複雑なタスクには、Vimスクリプトの使用が推奨されます。）

- Start recording by typing `q` followed by the register, e.g. `q`. (The
  command-line will signify this via "recording @q".)
- Stop recording by hitting `q` once again.
- Execute the macro via `[count]@q`.
- Repeat the last used macro via `[count]@@`.

**例 1:**

線を挿入し、それを10回繰り返す

```
qq
iabc<cr><esc>
q
10@q
```

（マクロを使わずに同じことが行えます： `oabc<esc>10.`）

**例2：**

すべての行の前に行番号を追加するには、最初の行から始め、その行に「1. 」を手動で追加します。カーソルの下に表示される `<c-a>` を使用して数値を増加させます。これは `^A` として表示されます。

```
qq
0yf jP0^A
q
1000@q
```

ここでは、`1000@q`を使用する際、ファイルに1000行を超える内容がないことをただ望んでいます。しかし、再帰マクロを使用することもできます。これは、マクロが行に適用できなくなるまで実行されます。

```
qq
0yf jP0^A@q
q
@q
```

（マクロを使わずに同じことが行えます： `:%s/^/\=line('.') . '. '`）

こうした例ではマクロを使わずに同じことを実現する方法も示していますが、これは主にシンプルな例にしか適用できません。より複雑な自動化にはマクロが絶対に必要です！

もごらえ： [Quickly edit your macros](#quickly-edit-your-macros)

ヘルプ：

```
:h recording
:h 'lazyredraw'
```

## Colorschemes

カラーリングはVimをカスタマイズするための方法です。Vimは多くのコンポーネントから構成されており、それぞれのコンポーネントには、フォント、背景、強調表示など、いくつかの属性に対して異なる色を設定できます。設定方法は以下の通りです：

```vim
:highlight Normal ctermbg=1 guibg=red
```

これはエディタの背景を赤色に塗りつぶす。より詳細な情報は `:h :highlight` を参照してください。

したがって、カラーパレットは主に `:highlight` コマンドのコレクションです。

実際には、ほとんどのカラーパレットは本当に2つのカラーパレットです！上の例では、`ctermbg` と `guibg` を使って色を設定しています。前者の定義（`cterm*`）は、Vimがターミナルエミュレーター（たとえばxterm）で起動された場合にのみ使用されます。後者の定義（`gui*`）は、gvimやMacVimのようなグラフィカル環境で使用されます。

もしもあなたが終端のVimでカラーパレットを使用し、その色がスクリーンショットに表示されているものとはまったく異なる場合、そのカラーパレットはGUI用にしか色を定義していない可能性があります。逆に、グラフィカルなVim（たとえばgvimまたはMacVim）を使用していて色が不自然に見える場合、そのカラーパレットは終端用にしか色を定義していない可能性があります。

後者のケースは、NeovimまたはVim 7.4.1830以降で真の色を有効にすることで"解決"できる。これにより、終端VimはGUIの定義を使用するが、同時に終端エミュレータ自体およびその間にあるすべてのソフトウェア（例：tmux）が真の色を処理できるようにしなければならない。（[This
gist](https://gist.github.com/XVilka/8346728)はこのテーマについて良い概要を提供している。）

ヘルプ:

- `:h 'termguicolors'`
- [List of colorschemes](https://github.com/mhinz/vim-galore/blob/604f1a6f39705a83c02dd94b7ff2db1d3ff136f7/PLUGINS.md#colorschemes-1)
- [Cosmetic changes to colorschemes](#cosmetic-changes-to-colorschemes)

## Folding

すべてのテキスト（またはソースコード）には、ある構造が存在する。構造があるということは、論理的に分離されたテキストの領域を持っているということである。折りたたみ機能により、そのような領域を1行に折りたたみ、短い説明を表示できる。このような領域に作用するコマンドは、_folds_ と呼ばれるものがある。折りたたみはネストできる。

Vimは複数のfoldメソッドの種類を区別している。

| 'foldmethod' | Usage |
|--------------|-------|
| diff         | Used in diff windows to fold unchanged text. |
| expr         | Uses `'foldexpr'` to basically create a new fold method. |
| indent       | Folds based on indentation. |
| manual       | Create folds yourself via `zf`, `zF`, and `:fold`. |
| marker       | Folds based on markers in the text (often in comments). |
| syntax       | Folds based on syntax, e.g. folding `if` blocks. |

**NOTE**: 折りたたみは計算量が大きく、処理に時間がかかる可能性があります！もしタイプ時に小さな遅延などのパフォーマンスの低下を感じた場合は、[FastFold](https://github.com/Konfekt/FastFold)を確認してください。これはVimが必要ない場合に折りたたみの更新を行わないようにするためです。

ヘルプ：

```
:h usr_28
:h folds
```

## Sessions

**view**（`:h :mkview`）を保存した場合、ウィンドウの現在の状態（およびオプションやマッピング）が後で使用できるように保存されます（`:h :loadview`）。

セッションは、すべてのウィンドウのビューおよびグローバル設定を保存します。これは、現在のVimインスタンスのスナップショットを作成し、その内容をセッションファイルに保存することを意味します。ここに強調したいのは、セッションは現在の状態を保存しているということです。セッションを保存した後のすべての操作は、セッションファイルに含まれません。セッションを「更新」するには、再度その内容を書き出してください。

これは、_projects_ を保存するのに最適であり、それらの間を切り替えるのが簡単です。

今すぐ試してください。いくつかのウィンドウとタブを開き、`:mksession Foo.vim`を実行します。ファイル名を省略すると`Session.vim`が使われます。ファイルは現在の作業ディレクトリへ保存されるため、`:pwd`で確認してください。Vimを再起動して`:source
Foo.vim`を実行すると、バッファー一覧、ウィンドウ配置、マッピング、作業ディレクトリなどがセッション保存時の状態へ戻ります。さらに作業を進めたら、既存のセッションファイルを
`:mksession! Foo.vim`で上書きして更新してください。

セッションファイルは、実際にVimインスタンスの特定の状態を復元するために必要なVimコマンドの集合体であるため、それを確認してみてください: `:vs Foo.vim`.

セッションに保存するものについてVimに設定できるのは`'sessionoptions'`です。

スクリプトの目的でVimは、最後に読み込まれたまたは書かれたセッションの名前を内部変数 `v:this_session` に保持する。

ヘルプ：

```
:h Session
:h 'sessionoptions'
:h v:this_session
```

## Locality

上記で述べられた多くの概念も、_local_ に対応するものがあります。

| Global | Local | Scope | Help |
|--------|-------|-------|------|
| `:set`     | `:setlocal`           | buffer or window | `:h local-options`    |
| `:map`     | `:map <buffer>`       | buffer           | `:h :map-local`       |
| `:autocmd` | `:autocmd * <buffer>` | buffer           | `:h autocmd-buflocal` |
| `:cd`      | `:lcd`                | window           | `:h :lcd`             |
| `<leader>` | `<localleader>`       | buffer           | `:h maplocalleader`   |

[Variables also have different scopes](https://vimhelp.appspot.com/usr_41.txt.html#41.2).

# Usage

## Getting help offline

Vimには、特別なレイアウトを持つ単一のテキストファイルとしての優れたドキュメンテーションが含まれています。Vimは、そのヘルプファイルの特定部分にアクセスするためにタグベースのシステムを使用しています。

まず、この内容を読んでください: `:help :help`。これにより、新しいウィンドウにファイル `$VIMRUNTIME/doc/helphelp.txt` が開き、そのファイル内の `:help` タグにジャンプします。

いくつかのシンプルなルール

- options are enclosed in single quotes, e.g. `:h 'textwidth'`
- VimL functions end in `()`, e.g. `:h reverse()`
- commands start with `:`, e.g. `:h :echo`

`<c-d>`（これは <kbd>ctrl</kbd>+<kbd>d</kbd>）を使用すると、現在入力中のクエリに一致するすべてのタグを一覧表示できます。たとえば、`:h tab<c-d>`は、`tab`から`'softtabstop'`まで`setting-guitablabel`のすべてのタグの一覧を表示します。

すべてのVimL関数をリストにしたい？簡単です： `:h ()<c-d>`。ウィンドウに関連するすべてのVimL関数をリストにしたい？ `:h win*()<c-d>`。

これはすぐに自然な行動になりますが、特に初めの段階では、探しているタグのどの部分も分からず、関与している可能性のあるキーワードをただ想像するしかありません。`:helpgrep`が助けになります！

```
:helpgrep backwards
```

この操作は、すべてのドキュメントファイルに「backwards」が含まれているかを検索し、最初の一致にジャンプします。一致結果はクイックフィックスリストに集約されます。次/前の一貫をジャンプするには `:cn`/`:cp` を使用します。あるいは `:copen` を使ってクイックフィックスウィンドウを開き、項目に移動して `<cr>` を押すことでその一致にジャンプできます。詳細については `:h quickfix` を参照してください。

## Getting help offline (alternative)

このリストは、最も積極的にVimを開発している開発者たちの一人である@chrisbraが作成し、[vim_dev](https://groups.google.com/forum/#!forum/vim_dev)に投稿されました。

ここにわずかな変更を加えて再投稿されています。

---

もしあなたが探しているものについてわかっているなら、ヘルプシステムを使って探すのが通常は簡単です。なぜなら、テーマは一定のスタイルガイドに従っているからです。

また、このヘルプは、あなたの特定のVimバージョンに属しているため、
古くなった項目や後に追加された項目が表示されないという利点があります。

したがって、ヘルプシステムとその言語を学ぶことが重要である。
以下にいくつかの例を示す（必ずしも完全ではなく、何かを忘れている可能性がある）。

1. Options are enclosed in single quotes. So you would use `:h 'list'` to go to
   the help topic for the list option. If you only know, you are looking for a
   certain option, you can also do `:h options.txt` to open the help page which
   describes all option handling and then you can search using regular
   expressions e.g. `/width`. Certain options have their own namespace, e.g. `:h
   cpo-a`, `:h cpo-A`, `:h cpo-b`, and so on.

2. Normal mode commands are just that. Use `:h gt` to go to the help page for
   the "gt" command.

3. Regexp items always start with "/", so `:h /\+` takes you to the help item
   for the "\+" quantifier in Vim regexes. If you need to know anything about
   regular expressions, start reading at `:h pattern.txt`.

4. Key combinations. They usually start with a single letter indicating the mode
   for which they can be used. E.g. `:h i_CTRL-X` takes you to the family of
   CTRL-X commands for insert mode which can be used to auto complete different
   things. Note that certain keys will always be written the same, e.g. Control
   will always be CTRL. Note, for normal mode commands, the "n" is left away,
   e.g. `:h CTRL-A`. In contrast, `:h c_CTRL-R` will describe what CTRL-R does
   when entering commands in the command line and `:h v_Ctrl-A` talks about
   incrementing numbers in visual mode and `:h g_CTRL-A` talks about the g<C-A>
   command (thus you have to press "g" then <Ctrl-A>). Here the "g" stand for
   the normal command "g" which always expect a second key before doing
   something similar to the commands starting with "z".

5. Registers always start with "quote" so use `:h quote` to find out about the
   special ":" register.

6. Vim script (VimL) is available at `:h eval.txt`. Certain aspects of the
   language are available at `:h expr-X` where 'X' is a single letter, e.g. `:h
   expr-!` will take you to the topic describing the '!' (Not) operator for
   VimL. Also important, see `:h function-list` to find a short description of
   all functions available.

7. Mappings are talked about in the help page `:h map.txt`. Use `:h mapmode-i`
   to find out about the `:imap` command. Also use `:map-topic` to find out
   about certain subtopics particular for mappings (e.g. `:h :map-local` for
   buffer-local mappings or `:h map_bar` for how the '|' is handled in mappings.

8. Command definitions are talked about at `:h command-*`, so use :h command-bar
   to find out about the '!' argument for custom commands.

9. Window management commands always start with CTRL-W, so you find the
   corresponding help at `:h CTRL-W_*` (e.g. `:h CTRL-W_p` for switch to the
   previously accessed window). You can also access `:h windows.txt` and read
   your way through, if you are looking for window handling command.

10. Ex commands always start with ":", so `:h :s` covers the ":s" command.

11. Use CTRL-D after typing a topic and let Vim try to complete to all available
    topics.

12. Use `:helpgrep` to search in all help pages (usually also includes help
    pages by installed plugins). See `:h :helpgrep` for how to use it. Once you
    have searched for a topic, all matches are available in the quickfix (or
    location) window which can be opened with `:copen` or `:lopen`. There you
    can also use `/` to further filter the matches.

13. `:h helphelp` contains some information on how to use the help.

14. The user manual. This describes help topics for beginners in a rather
    friendly way. Start at `:h usr_toc.txt` to find the table of content (as you
    might have guessed). Skimming over that help to find certain topics, .e.g
    you will find an entry "Digraphs" and "Entering special characters" in
    chapter 24 (so use `:h usr_24.txt` to go to that particular help page).

15. Highlighting groups always start with `hl-*`. E.g. `:h hl-WarningMsg` talks
    about the "WarningMsg" highlighting group.

16. Syntax highlighting is namespaced to ":syn-topic", e.g. `:h :syn-conceal`
    talks about the conceal argument for the :syn command.

17. Quickfix commands usually start with ":c", while location list commands
    usually start with ":l".

18. `:h BufWinLeave` talks about the BufWinLeave autocmd. Also, `:h
    autocommands-events` talks about all possible events.

19. Startup arguments always start with "-", so `:h -f` takes you to the help of
    the "-f" command switch of Vim.

20. Compiled extra features always start with "+", so `:h +conceal` talks about
    the conceal support.

21. Error codes can be looked up directly in the help. `:h E297` takes you
    exactly to the description of the error message. Sometimes however, those
    error codes are not described, but rather are listed at the Vim command that
    usually causes this. E.g. `:h hE128` takes you directly to the `:function`
    command.

22. Documentation for included syntax files is usually available at `:h
    ft-*-syntax`. E.g. `:h ft-c-syntax` talks about the C syntax file and the
    options it provides. Sometimes, additional sections for omni completion (`:h
    ft-php-omni`) or filetype plugins (`:h ft-tex-plugin`) are available.

また、ユーザードキュメントへのリンク（特定のコマンドについてユーザーの視点から説明し、詳細度が低い）が利用可能であれば、ヘルプページの上部に記載されます。したがって、`:h pattern.txt`ではユーザーガイドのトピック`:h 03.9`および`:h usr_27`が述べられています。

## Getting help online

解決できない問題があるか、または一般的なガイドが必要な場合は、
[vim_use](https://groups.google.com/forum/#!forum/vim_use) メールリストを参照してください。
もう一つ素晴らしいリソースは、
[IRC](https://de.wikipedia.org/wiki/Internet_Relay_Chat) を利用することです。`#vim` チャンネルは、
[Freenode](https://freenode.net) に非常に大きく、通常、役立つ人々が多数います。

Vimのバグを報告したい場合は、
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev) メーリングリストを使用してください。

## Autocmds in practice

今すぐ、どんなイベントでもトリガーできます: `:doautocmd BufRead`。

### User events

特にプラグインの場合、自作の"ユーザー"イベントを作成することは有用です。

```vim
function! Chibby()
  " A lot of stuff is happening here.
  " And at last..
  doautocmd User ChibbyExit
endfunction
```

now your pluginの利用者は、チビが実行を終えた際に何でも実行できます

```vim
autocmd User ChibbyExit call ChibbyCleanup()
```

ちなみに、受け取る:autocmdがない場合、:doautocmdは「No matching autocommands」という
煩わしいメッセージを出力します。そのため、多くのプラグインは代わりに`silent
doautocmd ...`を使います。ただし、:autocmd内で単純に
`echo "foo"`を使えず、代わりに`unsilent echo "foo"`を使う必要があるという欠点があります。

それがなぜ、受信autocmdが実際に存在するかを確認し、それ以外ではイベントを発行しないほうが良いのか。

```vim
if exists('#User#ChibbyExit')
  doautocmd User ChibbyExit
endif
```

ヘルプ: `:h User`

### Nested autocmds

デフォルトでは、自動コマンドはネストされません！自動コマンドがコマンドを実行し、そのコマンドが通常は別のイベントをトリガーする場合、そのイベントは発生しません。

毎回Vimを起動するときに、自動的にvimrcを開くようにしたいとします

```vim
autocmd VimEnter * edit $MYVIMRC
```

Vimを今から開始すると、vimrcが開かれますが、最初に気づくのはハイライトが表示されない点です。通常はハイライトが表示されるはずですが。

問題は、あなたのネストされていないautocmd内の `:edit` が "BufRead" イベントをトリガーしないことであるため、ファイルタイプが "vim" に設定されず、`$VIMRUNTIME/syntax/vim.vim` が読み込まれないのです。詳しくは `:au BufRead *.vim` を参照してください。以下の方法を使用してください：

```vim
autocmd VimEnter * nested edit $MYVIMRC
```

ヘルプ: `:h autocmd-nested`

## Clipboard

必須の[features](#what-kind-of-vim-am-i-running)は`+clipboard`です。また、`+xterm_clipboard`は、GUIサポートのないVimでUnixシステム上の`'clipboard'`オプションを使う場合に必要です。

ヘルプ：

```
:h 'clipboard'
:h gui-clipboard
:h gui-selections
```

もごらえ： [Bracketed paste (or why do I have to set 'paste' all the
time?)](#bracketed-paste-or-why-do-i-have-to-set-paste-all-the-time)

### Clipboard usage (Windows, macOS)

Windows には、
[clipboard](https://msdn.microsoft.com/en-us/library/windows/desktop/ms649012(v=vs.85).aspx)
があり、macOS には、
[pasteboard](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/PasteboardGuide106/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008100-SW1)。

どちらも、ほとんどのユーザーが期待するように動作します。選択したテキストをコピーするには `ctrl+c`/`cmd+c` を使用し、別のアプリケーションに貼り付けるには `ctrl+v`/`cmd+v` を使用します。

コピーしたテキストは実際にクリップボードに転送されるため、別のアプリケーションに貼り付ける前にコピー元のアプリケーションを閉じても問題ありません。

このとき、クリップボードレジスタ `*` には選択された内容が入ります。Vimでは、 `"*y` と `"*p` を使用して、クリップボードから切り取りおよび貼り付けを行います。

もし、常に `*` レジスタを指定したいのでもないなら、この内容を
あなたの vimrc に追加してください。

```vim
set clipboard=unnamed
```

通常、すべてのyank/delete/put操作は `"` レジスタを埋めます。現在、 `*` レジスタが同じ操作に使用されています。そのため、単に `y` と `p` が十分です。

Let me repeat: 上記のオプションを使用すると、すべてのyank/paste操作（同じVimウィンドウ内で実行された場合を含む）がクリップボードを変更します。これは必要かどうか、自分自身で判断してください。

もしも `y` をタイプするまでにやたらと怠いなら、以下の設定を使ってすべての視覚選択をクリップボードに送信できます。

```vim
set clipboard=unnamed,autoselect
set guioptions+=a
```

ヘルプ:

```
:h clipboard-unnamed
:h autoselect
:h 'go_a'
```

### Clipboard usage (Linux, BSD, ...)

もしあなたのOSが[X](http://www.x.org/wiki)を使用しているなら、状況は少し異なる。Xは[X Window System
Protocol](http://www.x.org/releases/X11R7.7/doc/xproto/x11protocol.html)を実装しており、1987年以降、その主要バージョンは11であるため、XはしばしばX11と呼ばれる。

以前、X10において、[cut
buffers](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Cut_Buffers)
が導入され、その仕組みはクリップボードのように動作し、コピーされたテキストが実際にXによって保持され、他のアプリケーションからアクセス可能であった。このメカニズムは現在のXにおいて依然として存在しているが、その使用は現在 deprecated されており、ほとんどのソフトウェアはもうこれを使わなくなっている。

現在、アプリケーション間でデータは[selections](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Selections)によって転送される。
定義された3つの選択原子の中から、実際にはPRIMARYとCLIPBOARDの2つだけが使用されている。

選択はおよそこうなります：

```
Program A: <ctrl+c>
Program A: assert ownership of CLIPBOARD
Program B: <ctrl+v>
Program B: note that ownership of CLIPBOARD is hold by Program A
Program B: request data from Program A
Program A: respond to request and send data to Program B
Program B: receives data from Program A and inserts it into the window
```

| Selection | When used? | How to paste? | How to access from Vim? |
|-----------|------------|---------------|-------------------------|
| PRIMARY   | Selecting text              | `middle-click`, `shift+insert` | `*` register |
| CLIPBOARD | Selecting text and `ctrl+c` | `ctrl+v`                       | `+` register |

**NOTE**: 選択されたデータ（CLIPBOARDを含むものも含まず）は、Xサーバーに一切保持されません。したがって、アプリケーションが終了した際に、`ctrl+c`でコピーされたデータは失われます。

`"*p` を使用して PRIMARY 選択を貼り付け、`"+y1G` を使用して全体のファイルを CLIPBOARD 選択にコピーします。

もし、常にその2つのレジスタのいずれかにアクセスする場合、次を使用することを検討してください。

```vim
set clipboard^=unnamed      " * register
" or
set clipboard^=unnamedplus  " + register
```

( `^=` をデフォルト値の前に付加する。 `:h :set^=` )

これにより、すべてのyank/delete/put操作は`*`または`+`を、無名レジスター`"`の代わりに使います。その後は、選択したX selectionへアクセスするために`y`または`p`を使えます。

ヘルプ：

```vim
:h clipboard-unnamed
:h clipboard-unnamedplus
```

## Restore cursor position when opening file

ファイルを開くと、カーソルは1行目、1列目に位置します。
幸運なことに、viminfoファイルは [marks](#marks) を記憶しています。 `"` マークには、あなたが中断したバッファ内の位置が含まれています。

```vim
autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   execute "normal! g`\"" |
    \ endif
```

読む：マーク `"` に含まれる行番号が1行より大きく、ファイルの最後の行より大きくない場合、その行にジャンプする。

    :h viminfo-'
    :h `quote
    :h g`

## Temporary files

### Backup files

ファイルを保存する前に、Vimはバックアップファイルを作成する。ディスクへの書き込みが成功した場合、バックアップファイルは削除される。

`:set backup`でバックアップが継続されます。これは、バックアップファイルが、最新の保存直前までのオリジナルファイルと同じ内容を持つことを意味します。これは、あなたがそのような機能が役立つかどうかを判断する必要があります。

あなたは `:set nobackup nowritebackup` を使ってバックアップを完全に無効にできますが、今の時代にはそれが必要ないでしょう。 `'writebackup'` はセキュリティ機能で、保存が失敗した場合に元のファイルを失うのを防ぐようにしています。その後のバックアップファイルを保存するかどうかに関係なく、そのような場合に元のファイルを失うことを防ぎます。

Vimで大きなファイルを頻繁に編集する場合、[and you probably
shouldn't](#editing-huge-files-is-slow)、そのファイルはバックアップから除外できます。
`'backupskip'`

ヴィムはバックアップを作成するための異なる方法を知っている：_コピー_と_リネーム_。

- **Copying**
    1. A full copy of the original file is created and used as backup.
    1. The original file gets emptied and then filled with the content of the
    Vim buffer.
- **Renaming**
    1. The original file is renamed to the backup file.
    1. The content of the Vim buffer gets written to a new file with the name of
    the original file.

すべての細かい詳細は `:h 'backupcopy'` を参照してください。

---

デモ：

```vim
:set backup backupskip= backupdir=. backupext=-backup
:e /tmp/foo
ifoo<esc>
:w
" original file gets created, no need for backup file
obar<esc>
:w
" backup file is created, original file gets updated
```

```diff
$ diff -u /tmp/foo-backup /tmp/foo
--- /tmp/foo-backup     2017-04-22 15:05:13.000000000 +0200
+++ /tmp/foo    2017-04-22 15:05:25.000000000 +0200
@@ -1 +1,2 @@
 foo
+bar
```

---

:h バックアップ
 :h ワーク・ファイล

### Swap files

ファイルを編集しているとき、保存されていない変更はスワップファイルに書き込まれます。

現在のスワップファイルの名前を `:swapname` で取得する。 `:set
noswapfile` で無効にする。

スワップファイルは、200文字分すべて更新されるか、4秒間タイプがなかった場合に更新されます。編集を終了すると、これらのファイルは削除されます。これら数字は `:h 'updatecount'` と `:h 'updatetime'` で変更できます。

Vimが終了した場合（例：電源切-off）には、ファイルがディスクに書き出された最後の時点以降のすべての変更が失われますが、スワップファイルは削除されません。その後、ファイルを再度編集する場合、Vimはスワップファイルからファイルを回復する機会を提示します。

2人の人が同じファイルを編集しようとする場合、2番目の人はスワップファイルが既に存在していることを通知されます。これにより、ファイルの異なるバージョンを保存しようとする人の行動が防がれます。その動作を避けたい場合は、`:h
'directory'`を参照してください。

:h swap-file
 :h usr_11

### Undo files

[undo tree](#undo-tree)はメモリ上に保持され、Vimが終了すると失われます。
これを継続させるには、 `:set undofile`を設定してください。これにより、 `~/foo.c`の取り消しファイルが `~/foo.c.un~`に保存されます。

:h 'undofile'\n :h undo-persistence

### Viminfo files

バックアップ、スワップ、およびアンダーオーのファイルがすべてテキスト状態である場合、viminfoファイルはVimを終了した際に失われる他のすべての情報を保存するために使用されます。viminfoファイルはコマンドライン、検索、入力の履歴、レジスタ、マーカー、バッファリスト、グローバル変数など、すべてを保持します。

デフォルトでは、viminfoは `~/.viminfo` に書き込まれる。

:h viminfo
 :h 'viminfo'

### Example configuration for temporary files

すべての一時ファイルを `~/.vim/files` の下にある独自のディレクトリに配置してください。

```vim
" create directory if needed
if !isdirectory($HOME.'/.vim/files') && exists('*mkdir')
  call mkdir($HOME.'/.vim/files')
endif

" backup files
set backup
set backupdir   =$HOME/.vim/files/backup/
set backupext   =-vimbackup
set backupskip  =
" swap files
set directory   =$HOME/.vim/files/swap//
set updatecount =100
" undo files
set undofile
set undodir     =$HOME/.vim/files/undo/
" viminfo files
set viminfo     ='100,n$HOME/.vim/files/info/viminfo
```

## Editing remote files

Vimには、リモートファイルの編集を可能にするnetrwプラグインが含まれています。実際に、それはscpを介してリモートファイルをローカルの一時ファイルに転送し、そのファイルを使ってバッファを開き、保存時に変更をリモートファイルに書き戻します。

ローカルの設定を使用したい場合、これは非常に便利です。SSHでサーバーに接続して、管理者が指定するものを使うのではなく、ローカルの設定を使用できるようにします。

```
:e scp://bram@awesome.site.com/.vimrc
```

既に `~/.ssh/config` を設定済みであれば、その設定が自動的に使用されます。

```
Host awesome
    HostName awesome.site.com
    Port 1234
    User bram
```

上記の`~/.ssh/config`内の内容を仮定すれば、これもまったく同様に機能する。

```
:e scp://awesome/.vimrc
```

類似したことは `~/.netrc` でも行えます、詳しくは `:h netrw-netrc` を参照してください。

`:h netrw-ssh-hack` と `:h g:netrw_ssh_cmd` をしっかり読みましょう。

---

別の可能性として、[sshfs](https://wiki.archlinux.org/index.php/Sshfs)を使用する方法があります。
これは、[FUSE](https://en.wikipedia.org/wiki/Filesystem_in_Userspace)を用いて、リモートファイルシステムをローカルファイルシステムにマウントする方法です。

## Managing plugins

[Pathogen](https://github.com/tpope/vim-pathogen)は、プラグインを管理するための最初の一般的なツールであった。実際には、特定のディレクトリに配置されたすべての項目を含めるように _runtimepath_ (`:h 'rtp'`) を調整するだけである。そのプラグインリポジトリのリポジトリを自分でクローンする必要がある。

実際のプラグインマネージャーは、Vim内部からプラグインをインストールしたりアップデートしたりするためのコマンドを公開しています。

[List of plugin managers](https://github.com/mhinz/vim-galore/blob/604f1a6f39705a83c02dd94b7ff2db1d3ff136f7/PLUGINS.md#plugin-managers)

## Block insert

これは、同時に複数連続した行に同じテキストを挿入する技術です。これについて詳しくは
[demo](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-block_insert.gif)を参照してください。

`<c-v>` で視覚ブロックモードに切り替えます。その後、いくつかの行分下に移動します。
`I` または `A` を押して、テキストの入力を開始します。

最初は少し混乱するかもしれませんが、テキストは常に現在の行に入力され、現在の挿入を終えたら、その同じテキストが前の視覚選択範囲の他のすべての行に適用されます。

したがって、簡単な例は `<c-v>3jItext<esc>` である。

異なる長さの行がいくつかある場合に、それぞれの行の末尾に同じテキストを追加したいときは、こうします： `<c-v>3j$Atext<esc>`。

あるとき、現在の行の終わりの後ろにカーソルを置く必要があることがあります。デフォルトではその操作ができませんが、`virtualedit`オプションを設定することで可能です。

```vim
set virtualedit=all
```

その後 `$10l` または `90|` はラインの終了後も作業を続けます。

`:h blockwise-examples`を参照してください。最初は複雑に見えますが、すぐに自然に身につきます。

もし本当に高級なものを求めたいなら、
[multiple-cursors](https://github.com/terryma/vim-multiple-cursors)をチェックしてみてください。

## Running external programs and using filters

声明：Vimはスレッドが一つしかないため、前向きに外部プログラムを実行すると、それ以外のすべての操作がブロッキングされます。もちろん、Vimのプログラミングインターフェースの一つ、たとえばLuaを用いて、スレッドサポートを利用することはできますが、その期間中Vimプロセスは依然としてブロッキングされます。Neovimは、適切なジョブAPIを追加することでこれを解決しました。

(おそらくブラムはVimにもジョブコントロールを追加していると考えられている。非常に新しいバージョンをお持ちであれば、`:helpgrep startjob`を参照してください。)

`:!` を使用してジョブを開始します。現在の作業ディレクトリ内のファイルを一覧表示したい場合は、 `:!ls` を使用します。シェルで通常のようにパイプを渡すには、 `|` を使用します。たとえば、 `:!ls -1 |
sort | tail -n5` 。

範囲が指定されていない場合、`:!`の出力はスクロール可能なウィンドウに表示されます。一方、範囲が指定された場合、これらの行は[filtered](https://en.wikipedia.org/wiki/Filter_(software)) になります。これは、それらがフィルタプログラムの[stdin](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_.28stdin.29)にパイプされ、処理された後、フィルタの[stdout](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_.28stdout.29)に置き換わることを意味します。たとえば、次の5行の先頭に数字をプレフィックスするには、次の方法を使用します。

    :.,+4!nl -ba -w1 -s' '

手動で範囲を指定するのは非常に負担なので、Vimはそのためにいくつかの補助機能を提供しています。範囲選択の通常の方法と同じように、視覚モードで行を選択した後、`:`を押すことができます。また、動きを引数として受け取るオペレーター`!`もあります。たとえば、`!ip!sort`は現在の段落の行を並び替えます。

フィルタリングに良い例として、[Go programming
language](https://golang.org)です。Goにはソースコードを適切にインデントする`gofmt`というフィルターがあります。そのためGo向けプラグインは`:Fmt`というヘルパーコマンドを提供することが多く、これは基本的に`:%!gofmt`を実行してファイル内の全行を整形します。

人々はしばしば `:r !prog` を使って、以下のプログの出力を現在の行の下に配置します。これはスクリプトの場合には問題ありませんが、即座に実行する際には、現在の行を置き換える `!!ls` を使うほうが、私はより簡単だと感じます。

:h filter
 :h :read!

## Cscope

[Cscope](http://cscope.sourceforge.net/)は[ctags](http://ctags.sourceforge.net/)よりも多くのことをできますが、C（およびC++およびJavaに限って）のみをサポートしています。

whereas a tags file only knows where a symbol was defined, a cscope database
knows much more about your data:

- Where is this symbol defined?
- Where is this symbol used?
- What is this global symbol's definition?
- Where did this variable get its value?
- Where is this function in the source files?
- What functions call this function?
- What functions are called by this function?
- Where does the message "out of space" come from?
- Where is this source file in the directory structure?
- What files include this header file?

### 1. Build the database

プロジェクトのルートにこれを行う

```sh
$ cscope -bqR
```

これは3つのファイルを作成します：`cscope{,.in,.po}.out`が現在の作業ディレクトリにあります。これらはあなたのデータベースと考えてください。

残念ながら `cscope` はデフォルトで `*.[c|h|y|l]` ファイルのみを分析します。Java プロジェクトで cscope を使う場合は、以下の手順を実行してください。

```sh
$ find . -name "*.java" > cscope.files
$ cscope -bq
```

### 2. Add the database

新たに構築したデータベースに接続を開けます：

```vim
:cs add cscope.out
```

接続が行われたことを確認してください：

```vim
:cs show
```

（はい、複数の接続を追加できます。）

### 3. Query the database

```vim
:cs find <kind> <query>
```

たとえば、`:cs find d foo`は`foo(...)`が呼び出すすべての関数をリストする。

| Kind | Explanation |
|------|-------------|
| s    | **s**ymbol: find all references to the token        |
| g    | **g**lobal: find global definition(s) of the token  |
| c    | **c**alls: find all calls to the function           |
| t    | **t**ext: find all instances of the text            |
| e    | **e**grep: egrep search for the word                |
| f    | **f**ile: open the filename                         |
| i    | **i**ncludes: find files that include the filename  |
| d    | **d**epends: find functions called by this function |

私はいくつかの便利なマッピングを提案します。たとえば：

```vim
nnoremap <buffer> <leader>cs :cscope find s  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cg :cscope find g  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cc :cscope find c  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ct :cscope find t  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ce :cscope find e  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cf :cscope find f  <c-r>=expand('<cfile>')<cr><cr>
nnoremap <buffer> <leader>ci :cscope find i ^<c-r>=expand('<cfile>')<cr>$<cr>
nnoremap <buffer> <leader>cd :cscope find d  <c-r>=expand('<cword>')<cr><cr>
```

したがって、 `:tag`（または `<c-]>`）がタグファイルから定義にジャンプしたとき、 `:cstag` は同じように動作するが、関連する cscope データベースも考慮する。オプション `'cscopetag'` により、 `:tag` は自動的に `:cstag` のように動作する。すでにタグに関連するマッピングを設定している場合は、これ非常に便利である。

ヘルプ: `:h cscope`

## MatchIt

VimはC言語で書かれており、多くの機能はC言語のような構文を前提としています。デフォルトでは、カーソルが`{`または`#endif`にある場合、`%`を使用して対応する`}`または`#ifdef`にジャンプできます。

Vimには、デフォルトで有効になっていないプラグイン「matchit.vim」が組み込まれています。これは、VimLなどのif/else/endif構文やHTMLタグについても、`%`をサイクルで通過させ、いくつかの新しいコマンドを導入します。

#### Installation for Vim 8

```vim
" vimrc
packadd! matchit
```

#### Installation for Vim 7 and older

```vim
" vimrc
runtime macros/matchit.vim
```

マッチイットのドキュメンテーションが非常に詳しいため、以下の手順を一度だけ実行することを推奨します。

```vim
:!mkdir -p ~/.vim/doc
:!cp $VIMRUNTIME/macros/matchit.txt ~/.vim/doc
:helptags ~/.vim/doc
```

#### Small intro

プラグインは現在使用可能になっています。サポートされているコマンドは `:h matchit-intro` を、サポートされている言語は `:h matchit-languages` を参照してください。

それならば、自分のマッチングペアを定義するのは簡単です：

```vim
autocmd FileType python let b:match_words = '\<if\>:\<elif\>:\<else\>'
```

以降、任意のPythonファイルで`%`（前進）または`g%`（後退）を使用して、これらの3行を順に繰り返し表示できます。

ヘルプ：

```
:h matchit-install
:h matchit
:h b:match_words
```

## True colors

ターミナルエミュレーターで真の色を使用するということは、RGB色に24ビットを使用できるということです。これにより、通常の256色から16777216（2^24）色になります。

前述の [here](#colorschemes)によれば、カラーチームは実際にターミナル（xterm）とGUI（gvim）それぞれに対して定義を持つことで2つのカラーチームになることができる。これは、ターミナルエミュレーターが真の色を理解する以前には意味があった。

`:set termguicolors`以降、Vimは真の色をサポートする终端エミュレータだけが理解できるエスケープシーケンスを送信開始します。色がおかしい場合、おそらくあなたの终端エミュレータが真の色をサポートしていないか、あるいは色のテーマにGUI用の色が定義されていない可能性があります。

多くの人が終端マルチプレクサを用いる
[tmux](https://github.com/tmux/tmux/wiki) これは基本的には終端エミュレータとVimの間に座る。Vimが発行する真の色エスケープシーケンスをtmuxが_フォワード_するには、ユーザーの
`.tmux.conf` に以下の内容を記述する必要がある

```
set-option -g  default-terminal 'tmux-256color'
set-option -ga terminal-overrides ',xterm-256color:Tc'
```

- The first line should be the same for most people and denotes the `$TERM` to
  be used _within_ tmux.
- The second line adds the tmux-specific `Tc` (true color) capability to the
  other terminfo entries of `xterm-256color`. Obviously this assumes that the
  user is using `TERM=xterm-256color` _outside_ of tmux.

したがって、真の色を有効にするためのチェックリストは以下の通りです

- Read `:h 'termguicolors'`.
- Put `set termguicolors` in your vimrc.
- Make sure your colorscheme has color definitions for GUIs. (It should contain
  lines with `guifg` and `guibg`.)
- Make sure your terminal emulator of choice supports true colors.
- Using tmux? Configure it to add the `Tc` capability.

ターミナルにおける色の参考として人気のあるもの:
https://gist.github.com/XVilka/8346728

# Tips

## Go to other end of selected text

`o` と `O` を視覚的に選択した場合、カーソルはもう一方の端に移動します。ブロック選択で試して、その違いを確認してください。これにより、選択されたテキストのサイズを迅速に変更できます。

```
:h v_o
:h v_O
```

## Saner behavior of n and N

`n`と`N`の方向は、それぞれ前向きまたは後向きに検索した際に`/`または`?`が使用されたかどうかによって決まる。これは私にはかなり混乱している。

もし `n` が常に前向きに、 `N` が常に後向きに検索するようにするなら、以下の方法を使用してください。

```vim
nnoremap <expr> n  'Nn'[v:searchforward]
xnoremap <expr> n  'Nn'[v:searchforward]
onoremap <expr> n  'Nn'[v:searchforward]

nnoremap <expr> N  'nN'[v:searchforward]
xnoremap <expr> N  'nN'[v:searchforward]
onoremap <expr> N  'nN'[v:searchforward]
```

## Saner command-line history

もし君が私と似ているなら、君はそれぞれ`<c-n>`と`<c-p>`を使って次の項目と前の項目に移動していることだろう。デフォルトでは、これはコマンドラインでも機能し、履歴から以前のまたは最近のコマンドラインを呼び出すことができる。

ここまで、問題ない。しかし `<up>` と `<down>` はさらに賢い！それらは現在のコマンドラインの開始部分に一致するコマンドラインを記憶する。たとえば `:echo <up>` が `:echo "Vim rocks!"` に変更される。

もちろん、あなたが矢キーを押すようにはさせません。

```vim
cnoremap <expr> <c-n> wildmenumode() ? "\<c-n>" : "\<down>"
cnoremap <expr> <c-p> wildmenumode() ? "\<c-p>" : "\<up>"
```

ここでは、コマンドラインの履歴とワイルドメニューを区別しています。詳しくは `:h
'wildmenu'` を参照してください。

私はこの行動を一日に何回も依存しています。

## Saner CTRL-L

デフォルトでは、`<c-l>`は画面をクリアし、再描画する（`:redraw!`のように）。
以下のマッピングは、これと同じ動作を行うだけでなく、`/`、`?`などにより見つかったマッチをハイライトを解除し、
文法ハイライトの修正（vimが複雑なハイライトルールによりハイライトを失う場合がある）を行い、
diffモードでの文法ハイライトを強制的に更新する。

```vim
nnoremap <leader>l :nohlsearch<cr>:diffupdate<cr>:syntax sync fromstart<cr><c-l>
```

## Disable audible and visual bells

```vim
set noerrorbells
set novisualbell
set t_vb=
```

[Vim Wiki: Disable beeping](http://vim.wikia.com/wiki/Disable_beeping)を参照してください。

## Quickly move current line

ときには、現在の行を上または下に移動するための簡単な方法が必要になります。

```vim
nnoremap [e  :<c-u>execute 'move -1-'. v:count1<cr>
nnoremap ]e  :<c-u>execute 'move +'. v:count1<cr>
```

これらのマッピングもカウントを取りますので、`2]e`は現在の行を2行下に移動します。

## Quickly add empty lines

```vim
nnoremap [<space>  :<c-u>put! =repeat(nr2char(10), v:count1)<cr>'[
nnoremap ]<space>  :<c-u>put =repeat(nr2char(10), v:count1)<cr>
```

now `5[<space>` は現在の行の上に5行の空白を挿入する。

## Quickly edit your macros

これは本当の宝石です！マッピングはレジスタ（またはデフォルトで `*`）を取り、それをcmdlineウィンドウで開きます。編集が終了したら、 `<cr>` を押してください。

私はマクロを記録中にしたタイポを修正するためによくこれを使います。

```vim
nnoremap <leader>m  :<c-u><c-r><c-r>='let @'. v:register .' = '. string(getreg(v:register))<cr><c-f><left>
```

これをこう使います `<leader>m` または `"q<leader>m`。

`<c-r><c-r>` を使用して、`<c-r>` が正確に挿入されていることを確認してください。 `:h c_^R^R` を参照してください。

## Quickly jump to header or source file

この技術は、多くのファイル形式に適用できる可能性があります。ソースまたはヘッダーファイルを離れる際に、_file marks_（参照 `:h marks`）を設定するため、 `'C` または `'H` を使用して、最後にアクセスしたファイルに戻るのを迅速にできます（参照 `:h 'A`）。

```vim
autocmd BufLeave *.{c,cpp} mark C
autocmd BufLeave *.h       mark H
```

**NOTE**: その情報はviminfoファイルに保存されているため、`:set
viminfo?`に`:h viminfo-'`が含まれていることを確認してください。

## Quickly change font size in GUI

私はこれはtpopeの設定から取られたものだと思います

```vim
command! Bigger  :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)+1', '')
command! Smaller :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)-1', '')
```

## Change cursor style dependent on mode

通常モードではブロックカーソル、挿入モードではi-beamカーソル、置換モードでは下線カーソルを使用したい。

```vim
if empty($TMUX)
  let &t_SI = "\<Esc>]50;CursorShape=1\x7"
  let &t_EI = "\<Esc>]50;CursorShape=0\x7"
  let &t_SR = "\<Esc>]50;CursorShape=2\x7"
else
  let &t_SI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=1\x7\<Esc>\\"
  let &t_EI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=0\x7\<Esc>\\"
  let &t_SR = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=2\x7\<Esc>\\"
endif
```

これは、挿入モードに入るか離れるときに、Vimに特定の文字列（[escape
sequence](https://en.wikipedia.org/wiki/Escape_sequence)）を表示させるだけの指示です。その下にあるターミナル、またはVimとターミナルの間に位置するプログラム（[tmux](https://tmux.github.io)）は、これを処理および評価します。

しかし、一つの欠点があります: 終端エミュレータの実装方法は多く、同じ操作に対してすべてが同じシーケンスを使用しているわけではありません。上記に示したシーケンスは、あなたの実装と互換性を持たない可能性があります。あなたの実装が異なるカーソルスタイルをサポートしているかどうかも不明です。ドキュメントを確認してください。

上の例はiTerm2と動作します。

## Don't lose selection when shifting sidewards

1つ以上を選択した場合、 `<` と `>` を使用してその行を側方に移動できます。しかし、その直後に選択が失われます。

`gv`を使用して、最後の選択を再選択できます（詳しくは`:h gv`を参照してください））。そのため、次のように対処できます。

```vim
xnoremap <  <gv
xnoremap >  >gv
```

now you can use `>>>>>` on your visual selection without any problems.

**注意**：同様の結果は、`.`を使用して、最後の変更を繰り返すことで得られます。

## Reload a file on saving

[autocmds](#autocmds)を使用すると、ファイルを保存する際に何でもできます。たとえば、ドットファイルの場合にそのファイルをソースとして読み込み、あるいはソースコード内の文法エラーを確認するためにリントを実行できます。

```vim
autocmd BufWritePost $MYVIMRC source $MYVIMRC
autocmd BufWritePost ~/.Xdefaults call system('xrdb ~/.Xdefaults')
```

## Smarter cursorline

カーソルラインを愛していますが、現在のウィンドウだけに使うようにしたいです。挿入モードのときには使いたいとは思っていません。

```vim
autocmd InsertLeave,WinEnter * set cursorline
autocmd InsertEnter,WinLeave * set nocursorline
```

## Faster keyword completion

キーワード補完 (`<c-n>`/`<c-p>`) は、`'complete'` オプションにリストされている内容を補完しようとします。デフォルトでは、タグ（これは不快である可能性がある）およびすべての含まれるファイルをスキャン（これは非常に遅い可能性がある）が含まれます。これらを必要としていない場合は、無効にします。

```vim
set complete-=i   " disable scanning included files
set complete-=t   " disable searching tags
```

## Cosmetic changes to colorschemes

常に、色のスケームがどれであろうと、濃いグレーのステータスラインを使用してください。

```vim
autocmd ColorScheme * highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

これは、`:colorscheme ...`を使用するたびにトリガーされます。特定のカラーパレットに対してのみトリガーしたい場合：

```vim
autocmd ColorScheme desert highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

これは `:colorscheme desert` に対してのみトリガーする。

# Commands

役立つコマンドの例。詳しく知るには `:h :<command name>` を使ってください。たとえば `:h :global`。

## :global and :vglobal

一致するすべての行に対してコマンドを実行する。たとえば、`:global /regexp/ print`は「regexp」を含むすべての行に対して`:print`を使用する。

興味深い事実：おそらく皆さんに、ケン・トーマスが書いた古くからのgrep、フィルタプログラムをご存知でしょう。grepは一体何をしますか？特定の正規表現に一致するすべての行を表示します！では、`:global /regexp/ print`の短い形を予想してみてください。正解です！それは`:g/re/p`です。ケン・トーマスはgrepを書く際に、viの`:global`にインスピレーションを受けました。

名前に反して、`:global`がデフォルトですべての行へ作用するだけで、範囲を指定することもできます。`:delete`を、現在行から正規表現`^$`に一致する次の空行までのうち、「foo」を含むすべての行へ使う場合を考えます。

```vim
:,/^$/g/foo/d
```

パターンに一致しないすべての行に対してコマンドを実行するには、
`:global!`またはその別名`:vglobal`（_inVerse_をイメージ）を使用してください。

## :normal and :execute

これらのコマンドは通常、Vimスクリプトで使用されます。

`:normal`を使って、コマンドラインから通常モードのマッピングを実行できます。たとえば、
`:normal! 4j`はカーソルを4行下に移動させます（「j」に対するカスタムマッピングを使わずに、『!』の存在により）。

`:normal`にも[range](#ranges)が渡されるため、`:%norm! Iabc`はすべての行の前に"abc"をプレフィックスする

`:execute`を使うことで、コマンドと表現を混在させることができます。Cのソースファイルを編集している場合、そのヘッダーファイルに移動したいとします。

```vim
:execute 'edit' fnamemodify(expand('%'), ':r') . '.h'
```

両方のコマンドはよく一緒に使われます。カーソルを下に"n"行分動かしたいとします：

```vim
:let n = 4
:execute 'normal!' n . 'j'
```

## :redir and execute()

多くのコマンドはメッセージを表示し、`:redir`はその出力をリダイレクトできます。ファイル、[registers](#registers)または変数にリダイレクトできます。

```vim
:redir => var
:reg
:redir END
:echo var
:" For fun let's also put it onto the current buffer.
:put =var
```

Vim 8 には、さらに短い方法があります。

```vim
:put =execute('reg')
```

ヘルプ：

```
:h :redir
:h execute()
```

# Debugging

## General tips

もし異常な動作を確認した場合は、以下の通りに再現してみてください。

```
vim -u NONE -N
```

これはvimrcを読み込まない（したがってデフォルト設定）かつnocompatibleモードでVimを起動します（これによりVimのデフォルト設定がviのデフォルト設定に代わって使用されます）。（開始時に読み込む内容の他の組み合わせについては、`:h
--noplugin`を参照してください。）

もし今でも再現できるなら、それはVim自体のバグである可能性が高い！ [vim_dev](https://groups.google.com/forum/#!forum/vim_dev)のメールリストに報告してください。ほとんどの場合、この時点で問題が解決されず、さらに調査する必要があります。

プラグインは新しい、変更された、または不正な動作を導入することがあります。たとえば、保存時に問題が発生した場合、`:verb au BufWritePost`を確認して潜在的な原因をリストアップしてください。

プラグインマネージャーを使用している場合は、一時的にコメントアウトして、原因となるものを特定するまで。

問題はまだ解決されていませんか？プラグインではないなら、他の設定のせいです。したがって、おそらくオプションやアートコマンドなどです。

二分探索の時が来た。検索範囲を繰り返し2分割し、原因となる行を見つけるまで続ける。二分分割の性質上、多くのステップは必要ない。

実際には、こうなります。あなたのvimrcの中央に `:finish` コマンドを置きます。Vimはその以降のすべてをスキップします。それでも起きるなら、問題はアクティブな上半分にあります。 `:finish` をその上半分の中央に移動します。そうでなければ、問題は非アクティブな下半分にあります。 `:finish` をその下半分の中央に移動します。こうして繰り返します。

## Verbosity

Vimが現在何をしているかを観察するための別の便利な方法は、verbosityレベルを上げることです。現在Vimは9つの異なるレベルをサポートしています。完全なリストは `:h 'verbose'` を参照してください。

```vim
:e /tmp/foo
:set verbose=2
:w
:set verbose=0
```

これは、ソースされるすべてのファイルを表示する、たとえば、取り消しファイルまたは保存時に動作するさまざまなプラグインを含む。

もし単一のコマンドに対してのみverbosityを増やすだけなら、
`:verbose`もあります。これは他のどのコマンドの前にただ置かれるだけです。verbosityレベルは数値として受け取り、デフォルトは1です：

```vim
:verb set verbose
"  verbose=1
:10verb set verbose
"  verbose=10
```

デフォルトのverbosityレベル1でよく使われ、オプションが最後に設定された場所を表示します

```vim
:verb set ai?
"      Last set from ~/.vim/vimrc
```

自然に、verbosityレベルが高くなるほど出力が過剰になります。しかし、気にせず、出力をファイルにリダイレクトすればよいです。

```vim
:set verbosefile=/tmp/foo | 15verbose echo "foo" | vsplit /tmp/foo
```

開始時にもverbosityを有効にできる。`-V`オプションでこれを行うことができる。デフォルトはverbosityレベル10である。例：`vim -V5`。

## Profiling startup time

Vimの起動が遅い？ 数値を分析の時です：

```
vim --startuptime /tmp/startup.log +q && vim /tmp/startup.log
```

最初の列が最も重要である。なぜなら、その列は経過した絶対時間を見せるからである。もし2行の間に時間の大きなジャンプがあるならば、2行目のファイルは非常に大きなファイルであるか、または誤ったVimLコードを含むファイルであり、調査する価値がある。

## Profiling at runtime

必須 [feature](#what-kind-of-vim-am-i-running): `+profile`

ヴィムは実行時におけるプロファイリングを内蔵しており、環境内の遅いコードを発見するための優れた手段です。

`:profile` コマンドは、プロフィールする内容を指定するための複数のサブコマンドを取る。

もしすべてをプロファイリングしたいなら、こうする。

:プロファイル開始 /tmp/profile.log
 :プロファイルファイル * 
 :プロファイル関数 * 
 <do something in Vim>
 :QA

Vimはプロファイリング情報をメモリに保持し、終了時にのみログファイルに書き出します。（Neovimはこれに`:profile dump`を使用して修正しています。）

`/tmp/profile.log` を見てください。プロファイリング中に実行されたすべてのコードが表示されます。各行について、実行回数とその際の所要時間も示されます。

ログの下端に移動してください。ここには2つの異なるセクション `FUNCTIONS SORTED
ON TOTAL TIME` と `FUNCTIONS SORTED ON SELF TIME` があり、それらは金価値を持っています。一瞥のうちに、どの関数が最も時間がかかるかがわかります。

スタートアップ時に`:profile`を使用できます。

$ vim --cmd 'prof start prof.log | prof file * | prof func *' test.c
 :q
 $ tail -50 prof.log

## Debugging Vim scripts

以前、コマンドラインデバッガーを使っていたことがあるなら、`:debug`はすぐに馴染みやすいでしょう。

任意の他のコマンドの前に `:debug` をプレフィックスに加えれば、デバッグモードに入ります。
すなわち、実行が最初に実行される行に停止し、その行が表示されます。

`:h >cont` および以下に、利用可能なデバッガーコマンドの6つを示し、gdbや類似のデバッガーや同様に、短縮形を使用することも可能です: `c`, `q`, `n`, `s`, `i`, および `f`.

それ以外については、任意のVimコマンドを使用できます。たとえば `:echo myvar` などです。これは、現在のコード位置のコンテキスト内で実行されます。

あなたは基本的に、ただ `:debug 1` を使って、 [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) を得ます。

1行ずつすべてをステップ実行しなければならなくなるのは大変なので、もちろんブレークポイントも定義できます。 (ブレークポイントとは、その地点に到達したときに実行が停止するため、関心のないコードをスキップできるのです。) 詳細については `:h :breakadd`、`:h :breakdel`、および `:h
:breaklist` をご参照ください。

ファイルを保存するたびに実行されるコードを知りたいとします

```vim
:au BufWritePost
" signify  BufWritePost
"     *         call sy#start()
:breakadd func *start
:w
" Breakpoint in "sy#start" line 1
" Entering Debug mode.  Type "cont" to continue.
" function sy#start
" line 1: if g:signify_locked
>s
" function sy#start
" line 3: endif
>
" function sy#start
" line 5: let sy_path = resolve(expand('%:p'))
>q
:breakdel *
```

ご覧の通り、`<cr>`を使用すると、前のデバッガーコマンドが繰り返されます。この場合の`s`です。

`:debug`は、[verbose](#verbosity)のオプションと組み合わせて使用できます。

## Debugging syntax files

構文ファイルは、誤ったおよび/または複雑な正規表現によって引き起こされる遅延の原因となることが多い。 `+profile` [feature](#what-kind-of-vim-am-i-running) がコンパイルされている場合、Vimは非常に便利な `:syntime` コマンドを提供する。

```vim
:syntime on
" hit <c-l> a few times to redraw the window which causes the syntax rules to get applied again
:syntime off
:syntime report
```

出力には重要なメトリクスが含まれています。たとえば、どのregexpが長時間かかるかを確認し、最適化すべきか、あるいはどのregexpが頻繁に使われているかを確認できますが、実際に一致することさえありません。

`:h :syntime`を参照してください。

# Miscellaneous

## Additional resources

| Resource | Description |
|----------|-------------|
| [Seven habits of effective text editing](http://www.moolenaar.net/habits.html) | By Bram Moolenaar, the author of Vim. |
| [Seven habits of effective text editing 2.0 (PDF)](http://www.moolenaar.net/habits_2007.pdf) | See above. |
| [IBM DeveloperWorks: Scripting the Vim editor](http://www.ibm.com/developerworks/views/linux/libraryview.jsp?sort_order=asc&sort_by=Title&search_by=scripting+the+vim+editor) | Five-part series on Vim scripting. |
| [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com) | Develop a Vim plugin from scratch. |
| [Practical Vim (2nd Edition)](https://pragprog.com/titles/dnvim2/practical-vim-second-edition) | Hands down the best book about Vim. |
| [Why, oh WHY, do those #?@! nutheads use vi?](http://www.viemu.com/a-why-vi-vim.html) | Common misconceptions explained. |
| [Your problem with Vim is that you don't grok vi](http://stackoverflow.com/a/1220118) | Concise, informative and correct. A real gem. |

#### Screencasts

- [vimcasts.org](http://vimcasts.org/episodes/archive)
- [By wincent](https://www.youtube.com/channel/UCXPHFM88IlFn68OmLwtPmZA)
- [By Derek Wyatt](http://derekwyatt.org/vim/tutorials/index.html)

## Vim distributions

Vimの配布版は、Vim向けのカスタム設定とプラグインのバンドルである。

より高度なユーザーは、編集器を設定する方法をすでに知っているため、ディストリビューションは主に初心者を対象としています。しかし、その点を考えてみると、学ばなければならない内容をさらに増やして易しくするというのは、非常に矛盾しているのです。

私は多くの人が、エディタをカスタマイズするのに数時間、数時間と時間を費やすことを望まないことを知っています（実際に、vimrcをしっかり使い始めると、その使い方を常にカスタマイズしていくことになります）。しかし、最終的にVimで効率的に作業できるようになるのは、ちゃんとそれを学ぶ時間を取るときです。

私に合わせて繰り返してください：『プログラマーは自分のツールを理解すべきである。』

とにかく、自分が何をやっているかわかっているなら、いくつかの分布を見てみることで、いくつかのインスピレーションを得られるかもしれません。

- [cream](http://cream.sourceforge.net)
- [janus](https://github.com/carlhuda/janus.git)
- [spacevim](https://github.com/SpaceVim/SpaceVim)
- [spf13](https://github.com/spf13/spf13-vim)

## Standard plugins

多くの人が、Vimが標準でいくつかのプラグインを提供していることに驚きます。一部はデフォルトで読み込まれます（`:e $VIMRUNTIME/plugin`）而、一部は読み込まれません（`:e $VIMRUNTIME/pack/dist/opt`）。後者の読み込み方法については、`:h pack-add`を参照してください。

ただし、デフォルトで読み込まれるプラグインの多くは実際には使われません。必要に応じて
無効化してください。`:scriptnames`では読み込み済みと表示されますが、Vimが処理を
打ち切る前に先頭数行だけが読まれ、以降のコード（マッピング、コマンド、ロジック）は
処理されません。

| Plugin     | Disable it using..                  | Help |
|------------|-------------------------------------|------|
| 2html      | `let g:loaded_2html_plugin = 1`     | `:h 2html` |
| getscript  | `let g:loaded_getscriptPlugin = 1`  | `:h pi_getscript` |
| gzip       | `let g:loaded_gzip = 1`             | `:h pi_gzip` |
| logipat    | `let g:loaded_logipat = 1`          | `:h pi_logipat` |
| matchparen | `let g:loaded_matchparen = 1`       | `:h pi_paren` |
| netrw      | `let g:loaded_netrwPlugin = 1`      | `:h pi_netrw` |
| rrhelper   | `let g:loaded_rrhelper = 1`         | `:e $VIMRUNTIME/plugin/rrhelper.vim` |
| spellfile  | `let g:loaded_spellfile_plugin = 1` | `:h spellfile.vim` |
| tar        | `let g:loaded_tarPlugin = 1`        | `:h pi_tar` |
| vimball    | `let g:loaded_vimballPlugin = 1`    | `:h pi_vimball` |
| zip        | `let g:loaded_zipPlugin = 1`        | `:h pi_zip` |

## Map CapsLock to Control

CapsLockはキーボード上での最も無意味なキーの一つですが、コントロールキーよりも簡単に達成できます。なぜなら、それはあなたの [home
row](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-homerow.png)にあるからです。CapsLockをコントロールにマッピングすることは、プログラムを多く行う場合に、あるいは少なくとも減少させるために、非常に良い方法です。[RSI](https://de.wikipedia.org/wiki/Repetitive-Strain-Injury-Syndrom)

注意：慣れたら、もう生きていけなくなります。

**macOS**:

`System Preferences -> Keyboard -> Keyboard Tab -> Modifier Keys`. "CapsLock" を "Control" に変更

**Linux**:

Xのキーを変更するには、あなたの`~/.xmodmap`にこれを入れてください。

ロックの解除 = キャップスロック
キー記号 キャップスロック = コントロール_L
コントロールの追加 = コントロール_L

以降、 `$ xmodmap ~/.xmodmap` を経由してソースを取得してください。

別の選択肢として、[caps2esc](https://github.com/oblitum/caps2esc)または
[xcape](https://github.com/alols/xcape)を使用する場合がある。

**Windows**:

[superuser.com: Map Caps-Lock to Control in Windows
8.1](http://superuser.com/questions/764782/map-caps-lock-to-control-in-windows-8-1)を参照してください。

## Generating HTML from buffer

任意のバッファから2html [standard
plugin](#standard-plugins)の`:TOhtml`を使用してHTMLを生成する。出力は印刷または簡単なウェブ公開に使用できる。

コマンドは、`.html`を付加した同じ名前の新しいバッファを作成する。色はVimで表示されるものと同じである。これらは[colorscheme](#colorschemes)に依存する。

プラグインは出力を調整するためのいくつかのオプションを知っている。たとえば、エンコーディングやフォントの設定など。

`:h :TOhtml`を参照してください。

## Easter eggs

| Command   | Message |
|-----------|---------|
| `:Ni!` | `Do you demand a shrubbery?` |
| `:h 'sm'` | `NOTE: Use of the short form is rated PG.` |
| `:h 42` | `What is the meaning of life, the universe and everything? Douglas Adams, the only person who knew what this question really was about is now dead, unfortunately.  So now you might wonder what the meaning of death is...` |
| `:h UserGettingBored` | `When the user presses the same key 42 times. Just kidding! :-)` |
| `:h bar` | `Ceci n'est pas une pipe.` |
| `:h holy-grail` | `You found it, Arthur!` |
| `:h map-modes` | `:nunmap can also be used outside of a monastery.` |
| `:help!` | `E478: Don't panic!` (Glitch? When used in a help buffer (`buftype=help`) this works like `:h help.txt` instead.) |
| `:smile` | Try it out yourself. ;-) Added in 7.4.1005. |
| `:hi!` | `Greetings, Vim user!` |

## Why hjkl for navigation?

[Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy)が[vi](https://en.wikipedia.org/wiki/Vi)、Vimの前身を作ったとき、それは[ADM-3A](https://en.wikipedia.org/wiki/ADM-3A)で行われたもので、そのキーボードには追加のカーソルボタンがなく、あなたがすでに気づいた通り、hjklを使用していた。

キーボードの配置： [click](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-adm-3a-layout.jpg)

これは、Unixシステムでホームディレクトリを表すために `~`が使われる理由を示している。

# Common problems

## Editing small files is slow

パフォーマンスに大きな影響を与えることは、二つある。

1. Complex **regular expressions**. Particular the Ruby syntax file caused
   people to have slowdowns in the past. (Also see [Debugging syntax files](#debugging-syntax-files).)
2. **Screen redraws**. Some features force all lines to redraw.

| Typical culprit | Why? | Solution? |
|-----------------|------|-----------|
| `:set cursorline`        | Causes all lines to redraw. | `:set nocursorline` |
| `:set cursorcolumn`      | Causes all lines to redraw. | `:set nocursorcolumn` |
| `:set relativenumber`    | Causes all lines to redraw. | `:set norelativenumber` |
| `:set foldmethod=syntax` | If the syntax file is slow already, this makes it even worse. | `:set foldmethod=manual`, `:set foldmethod=marker` or [FastFold](https://github.com/Konfekt/FastFold) |
| `:set synmaxcol=3000`    | Due to internal representation, Vim has problems with long lines in general. Highlights columns till column 3000. | `:set synmaxcol=200` |
| matchparen.vim           | Loaded by default. Uses regular expressions to find the accompanying parenthesis. | Disable plugin: `:h matchparen` |

**NOTE**: 実際のパフォーマンスの低下を経験した場合に限り、これを行う必要があります。ほとんどの場合、上記の内容を使用することはまったく問題ありません。

## Editing huge files is slow

大きなファイルの大きな問題は、Vimがファイル全体を一度に読み込むことである。これは、バッファが内部でどのように表現されているためである。
([Discussion on vim_dev@](https://groups.google.com/forum/#!topic/vim_dev/oY3i8rqYGD4/discussion))

もしただ読むだけなら、`tail hugefile | vim -`は良い代替案です。

もし現在、文法や設定やプラグインを一切使わずに生活できるなら：

```
$ vim -u NONE -N
```

これはナビゲーションをかなり速くするはずです。特に、構文ハイライトのために高価な正規表現を使用していないためです。また、書き出し時に長時間の遅延を避けるために、Vimがスワップファイルやviminfoファイルを使用しないように設定してください。

```
$ vim -n -u NONE -i NONE -N
```

簡潔に言うと、本当に大きなファイルを書く予定なら、Vimを使うのを避けよう。:\

## Bracketed paste (or why do I have to set 'paste' all the time?)

ブラケット付きペーストモードは、终端エミュレータが入力されたテキストとペーストされたテキストを区別できるようにする。

vimにコードを貼り付けたことがある？その後、すべてがおかしくなったことがありますか？

これは、`cmd+v`、`shift-insert`、`middle-click`などを使って貼り付けした場合にのみ起こります。
その理由は、そのときあなたはただテキストをターミナルエミュレーターに投げているからです。Vimは、あなたがテキストを貼り付けたことを知りません。Vimは、あなたが非常に速いタイピストであると誤解しています。
したがって、Vimは行をインデントしようと試みますが、失敗します。

明らかに、Vimのレジスタを使って貼り付けを行う場合、たとえば `"+p` であれば、これは問題ではありません。なぜならそのときVimは実際に貼り付けを行っていることを知っているからです。

これを回避するには、あなたは `:set paste` しなければなりませんので、そのまま貼り付けられます。 `:h
'paste'` と `:h 'pastetoggle'` を参照してください。

`'paste'` を何度も切り替えるのが面倒なら、これを使ってくれる素晴らしいプラグインをチェックしてください:
[bracketed-paste](https://github.com/ConradIrwin/vim-bracketed-paste)。

同じ著者からの追加読書（プラグインに伴う）:
[here](http://cirw.in/blog/bracketed-paste).

**Neovim**: Neovimは、こうしたすべての操作をはるかにスムーズにし、ターミナルエミュレーターがそれをサポートしている場合、自動的にブレケットペーストモードを設定します。

## Delays when using escape key in terminal

コマンドラインで生活しているなら、おそらくxterm、gnome-terminal、iTerm2などという所謂_terminal
エミュレーターを使用しているでしょう。（実際の[terminal](https://en.wikipedia.org/wiki/Computer_terminal)とは対照的です。）

彼らの祖先たちと同じように、終端エミュレータは、カーソルの移動や文字色の変更など、さまざまな操作を制御するために、[escape
sequences](https://en.wikipedia.org/wiki/Escape_sequence)（または_コントロールシーケンス_）を使用する。これらは、エスケープ文字で始まるASCII文字の連続体（[caret notation](https://en.wikipedia.org/wiki/Caret_notation)では`^[`として表示される）である。このような文字列が到着したとき、終端エミュレータは、それに伴う操作を[terminfo](https://en.wikipedia.org/wiki/Terminfo)データベースに検索する。

問題を明確にするために、まずマッピングタイムアウトについて説明します。それらは、マッピング間の曖昧性があるときに常に起こります:

```vim
:nnoremap ,a  :echo 'foo'<cr>
:nnoremap ,ab :echo 'bar'<cr>
```

両方のマッピングが予想通りに動作しますが、`,a`を入力するときには1秒の遅延が発生します。これはVimがユーザーが別の`b`を入力したかどうかを確認しているためです。

エスケープシーケンスも同様の問題を抱えている。

- `<esc>` is used a lot for returning to normal mode or quitting an action.
- Cursor keys are encoded using escape sequences.
- Vim expects <kbd>Alt</kbd> (also called _Meta key_) to send a proper 8-bit
  encoding with the high bit set, but many terminal emulators don't support it
  (or don't enable it by default) and send an escape sequence instead.

上の内容をこうしてテストできます: `vim -u NONE -N` に `i<c-v><left>` を入力し、
すると、 `^[` から始まるシーケンスが挿入され、これはエスケープ文字を表しています。

要するにVimは、入力された`<esc>`文字と正規のエスケープシーケンスを区別するのが
苦手です。

デフォルトでは、Vimは`:set timeout timeoutlen=1000`を使用しているため、マッピングの曖昧性およびキーコードの曖昧性に対して1秒の遅延を適用しています。これはマッピングに適した値ですが、キーコードのタイムアウトを個別に定義することで、この問題に対する最も一般的な解決策になります。

```vim
set timeout           " for mappings
set timeoutlen=1000   " default value
set ttimeout          " for key codes
set ttimeoutlen=10    " unnoticeable small value
```

`:h ttimeout`に示されている小さな表は、これらのオプションの関係性を示しています。

Vimとあなたのターミナルエミュレーターの間でtmuxを使用している場合は、これもあなたの `~/.tmux.conf`に追加してください。

```tmux
set -sg escape-time 0
```

## Function search undo

- A search pattern in a command (`/`, `:substitute`, ...) changes the "last used
  search pattern". (It's saved in the `/` register; print it with `:echo @/`).
- A simple text change can be redone with `.`. (It's saved in the `.` register;
  print it with `:echo @.`).

どちらのことが_ない_場合、関数から実行したときです！したがって、関数から選ばれた単語を強調したり、その関数が行ったテキストの変更を再実行したりすることは、簡単にできません。

ヘルプ: `:h function-search-undo`

# Technical quirks

## Newline used for NUL

ファイル内のNUL文字（`\0`）は、メモリ上では改行（`\n`）として保存され、
バッファーでは`^@`と表示されます。

`man 7 ascii` および `:h NL-used-for-Nul` を参照してください。

# Terminology

## Vim script? Vimscript? VimL?

`Vim script`, `Vimscript`, および `VimL` はすべて同じものを指しています：Vim用のスクリプト言語。 [8.0.360](https://github.com/vim/vim/commit/b544f3c81f1e6a50322855681ac266ffaa8e313c) がすべての参照を `VimL` から `Vim script` に変更したにもかかわらず、現在は が公式な用語とみなされますが、 `VimL` はインターネットのあらゆる場所で広く使われています。

どの用語を使うにせよ、誰もがそれを理解するだろう。
