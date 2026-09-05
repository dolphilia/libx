---
title: "Awesome GitHub Cheat Sheet"
description: "GitHub Cheat Sheetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-tiimgreen-github-cheat-sheet-readme-md"
---

# Awesome GitHub Cheat Sheet

GitHub Cheat Sheetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
  - [GitHub](#github)
    - [空白を無視](#ignore-whitespace)
    - [タブ幅を調整](#adjust-tab-space)
    - [作者別コミット履歴](#commit-history-by-author)
    - [リポジトリをクローン](#cloning-a-repository)
    - [ブランチ](#branch)
      - [全ブランチを別ブランチと比較](#compare-all-branches-to-another-branch)
      - [ブランチ同士を比較](#comparing-branches)
      - [フォークしたリポジトリ間でブランチを比較](#compare-branches-across-forked-repositories)
    - [Gist](#gists)
    - [Git.io](#gitio)
    - [キーボードショートカット](#keyboard-shortcuts)
    - [リポジトリ内の行を強調表示](#line-highlighting-in-repositories)
    - [コミットメッセージでIssueを閉じる](#closing-issues-via-commit-messages)
    - [Issueを相互リンク](#cross-link-issues)
    - [会話をロック](#locking-conversations)
    - [プルリクエストのCI状態](#ci-status-on-pull-requests)
    - [フィルター](#filters)
    - [Markdownファイルの構文強調](#syntax-highlighting-in-markdown-files)
    - [絵文字](#emojis)
    - [画像・GIF](#imagesgifs)
      - [GitHub Wikiへ画像を埋め込む](#embedding-images-in-github-wiki)
    - [素早く引用](#quick-quoting)
    - [クリップボード画像をコメントへ貼り付ける](#pasting-clipboard-image-to-comments)
    - [素早くライセンスを設定](#quick-licensing)
    - [タスクリスト](#task-lists)
      - [Markdown文書内のタスクリスト](#task-lists-in-markdown-documents)
    - [相対リンク](#relative-links)
    - [GitHub Pagesのメタデータとプラグイン対応](#metadata-and-plugin-support-for-github-pages)
    - [文書内のYAMLメタデータを表示](#viewing-yaml-metadata-in-your-documents)
    - [表形式データを表示](#rendering-tabular-data)
    - [PDFを表示](#rendering-pdf)
    - [プルリクエストを取り消す](#revert-a-pull-request)
    - [差分](#diffs)
      - [レンダリング済み文書の差分](#rendered-prose-diffs)
      - [地図の差分](#diffable-maps)
      - [差分の前後を展開](#expanding-context-in-diffs)
      - [プルリクエストのdiff・patch](#diff-or-patch-of-pull-request)
      - [画像の表示と差分](#rendering-and-diffing-images)
    - [Hub](#hub)
    - [貢献ガイドライン](#contribution-guidelines)
      - [CONTRIBUTING file](#contributing-file)
      - [ISSUE_TEMPLATEファイル](#issue_template-file)
      - [PULL_REQUEST_TEMPLATEファイル](#pull_request_template-file)
    - [Octicons](#octicons)
    - [GitHub Student Developer Pack](#github-student-developer-pack)
    - [GitHub資料](#github-resources)
      - [GitHub講演](#github-talks)
    - [SSH鍵](#ssh-keys)
    - [プロフィール画像](#profile-image)
    - [リポジトリテンプレート](#repository-templates)
  - [Git](#git)
    - [削除済みファイルをワークツリーからすべて削除](#remove-all-deleted-files-from-the-working-tree)
    - [直前のブランチ](#previous-branch)
    - [空白を除去](#stripspace)
    - [プルリクエストをチェックアウト](#checking-out-pull-requests)
    - [空コミット](#empty-commits)
    - [Git statusを装飾](#styled-git-status)
    - [Git logを装飾](#styled-git-log)
    - [Gitログを検索](#git-query)
    - [Git grep](#git-grep)
    - [マージ済みブランチ](#merged-branches)
    - [fixupとautosquash](#fixup-and-autosquash)
    - [ローカルリポジトリ閲覧用ウェブサーバー](#web-server-for-browsing-local-repositories)
    - [Git設定](#git-configurations)
      - [エイリアス](#aliases)
      - [自動修正](#auto-correct)
      - [色](#color)
    - [Git資料](#git-resources)
      - [Git書籍](#git-books)
      - [Git動画](#git-videos)
      - [Git記事](#git-articles)


## GitHub

### 空白を無視
GitHub上で差分ページを表示している時、そのURLに`?w=1`を加えると、空白の変化によるできた差分は表示されなくなり、コード上の変化だけを参照することができる。

![Diff without whitespace](https://camo.githubusercontent.com/797184940defadec00393e6559b835358a863eeb/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f776869746573706163652e706e67)

[*GitHubの秘密についてもっと詳しく*](https://github.com/blog/967-github-secrets)

### タブ幅を調整
Adding `?ts=4` to a diff or file URL will display tab characters as 4 spaces wide instead of the default 8. The number after `ts` can be adjusted to suit your preference. This does not work on Gists, or raw file views, but a [Chrome extension](https://chrome.google.com/webstore/detail/tab-size-on-github/ofjbgncegkdemndciafljngjbdpfmbkn) can automate this.  
タブ幅を調整についての日本語補足。

例えばGoのソースファイルを表示している時、`?ts=4`を追加する前はこのように表示されるが:

![Before, tab space example](http://i.imgur.com/GIT1Fr0.png)

`?ts=4`を追加するとこのように表示される:

![After, tab space example](http://i.imgur.com/70FL4H9.png)

### 作者別コミット履歴
特定のユーザーによるあるリポジトリへのコミット履歴のみを参照したい場合は、`?author={user}`をURLの末尾に付ける。

```
https://github.com/rails/rails/commits/master?author=dhh
```

![DHH commit history](http://i.imgur.com/S7AE29b.png)

[*Read more about the differences between commits views.*](https://help.github.com/articles/differences-between-commit-views/)  
作者別コミット履歴についての日本語補足。

### リポジトリをクローン
リポジトリをクローンする時、URLの末尾の`.git`は無くても構わない。

```bash
$ git clone https://github.com/tiimgreen/github-cheat-sheet
```

[*Gitの`clone`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-clone)

### ブランチ

#### 全ブランチを別ブランチと比較
コミット一覧ボタンの隣から[ブランチ一覧](https://github.com/tiimgreen/github-cheat-sheet/branches)ページに行くと:

```
https://github.com/{user}/{repo}/branches
```

メイン・ブランチにマージされていないブランチの一覧が表示される。

このページからボタンをクリックしてブランチ比較ページへ移動したりブランチを削除することができる。

![Compare branches not merged into master in rails/rails repo - https://github.com/rails/rails/branches](http://i.imgur.com/0FEe30z.png)

#### ブランチ同士を比較
GitHubのブランチ比較は以下のようなURLで提供されている:

```
https://github.com/{user}/{repo}/compare/{range}
```

where `{range} = master...4-1-stable`  
ブランチ同士を比較についての日本語補足。

例えば:

```
https://github.com/rails/rails/compare/master...4-1-stable
```

![Rails branch compare example](http://i.imgur.com/tIRCOsK.png)

`{range}` can be changed to things like:  
ブランチ同士を比較についての日本語補足。

```
https://github.com/rails/rails/compare/master@{1.day.ago}...master
https://github.com/rails/rails/compare/master@{2014-10-04}...master
```

*Here, dates are in the format `YYYY-MM-DD`*  
ブランチ同士を比較についての日本語補足。

![Another compare example](http://i.imgur.com/5dtzESz.png)

Branches can also be compared in `diff` and `patch` views:  
ブランチ同士を比較についての日本語補足。

```
https://github.com/rails/rails/compare/master...4-1-stable.diff
https://github.com/rails/rails/compare/master...4-1-stable.patch
```

[*Read more about comparing commits across time.*](https://help.github.com/articles/comparing-commits-across-time/)  
ブランチ同士を比較についての日本語補足。

#### フォークしたリポジトリ間でブランチを比較
GitHubでフォークされたリポジトリ同士でブランチを比較する場合、以下のようなURLを変更する:

```
https://github.com/{user}/{repo}/compare/{foreign-user}:{branch}...{own-branch}
```

例:

```
https://github.com/rails/rails/compare/byroot:master...master
```

![Forked branch compare](http://i.imgur.com/Q1W6qcB.png)

### Gist
[Gists](https://gist.github.com/)は少量のコード群を管理する最適な手段だ。ちゃんとしたリポジトリをいちいち作成する必要はない。

![Gist](http://i.imgur.com/VkKI1LC.png?1)

Add `.pibb` to the end of any Gist URL ([like this](https://gist.github.com/tiimgreen/10545817.pibb)) in order to get the *HTML-only* version suitable for embedding in any other site.  
Gistについての日本語補足。

簡単なものとはいえ、Gitリポジトリとして機能するため、以下のようにすれば普通のGitリポジトリと同じようにクローンすることができる:

```bash
$ git clone https://gist.github.com/tiimgreen/10545817
```

![Gists](http://i.imgur.com/BcFzabp.png)

This means you also can modify and push updates to Gists:

```bash
$ git commit
$ git push
Username for 'https://gist.github.com':
Password for 'https://tiimgreen@gist.github.com':
```

However, Gists do not support directories. All files need to be added to the repository root.  
Gistについての日本語補足。
[*Read more about creating Gists.*](https://help.github.com/articles/creating-gists/)  
Gistについての日本語補足。

### Git.io
[Git.io](http://git.io)はGitHubの提供するGitHub専用のシンプルな短縮URLサービスだ。

![Git.io](http://i.imgur.com/6JUfbcG.png?1)

cURLを使って利用することができる:

```bash
$ curl -i http://git.io -F "url=https://github.com/..."
HTTP/1.1 201 Created
Location: http://git.io/abc123

$ curl -i http://git.io/abc123
HTTP/1.1 302 Found
Location: https://github.com/...
```

[*Git.ioについてもっと詳しく*](https://github.com/blog/985-git-io-github-url-shortener)

### キーボードショートカット
リポジトリをブラウザーで開いている時は、ショートカットを利用して様々な機能ヘ簡単にアクセスできるようになっている。

 - Pressing `t` will bring up a file explorer. — キーボードショートカットに関する項目。
 - Pressing `w` will bring up the branch selector. — キーボードショートカットに関する項目。
 - Pressing `s` will focus the search field for the current repository. Pressing ↓ to select the “All GitHub” option changes the field to search all of GitHub. — キーボードショートカットに関する項目。
 - Pressing `l` will edit labels on existing Issues. — キーボードショートカットに関する項目。
 - Pressing `y` **when looking at a file** (e.g., `https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.md`) will change your URL to one which, in effect, freezes the page you are looking at. If this code changes, you will still be able to see what you saw at that current time. — キーボードショートカットに関する項目。

`?`を押すとそのページで使える全ショートカットが表示されるだろう。

![Keyboard shortcuts](http://i.imgur.com/y5ZfNEm.png)

[*検索機能についてもっと詳しく*](https://help.github.com/articles/search-syntax/)

### リポジトリ内の行を強調表示
コードのURLの末尾に`#L52`と付けるか行番号をクリックすると、その行が強調表示される。

これは範囲指定も可能だ（例: `#L53-L60`）。こういった範囲を選択するには`shift`を押しながら二つの行をクリックしても良い:

```
https://github.com/rails/rails/blob/master/activemodel/lib/active_model.rb#L53-L60
```

![Line Highlighting](http://i.imgur.com/8AhjrCz.png)

### コミットメッセージでIssueを閉じる
あるコミットでissueを解決した場合、コミットメッセージで`fix/fixes/fixed`や`close/closes/closed`、`resolve/resolves/resolved`に続けてissue番号を指定すると、そのコミットがmasterブランチにpushされると同時に指定issueが閉じられるだろう。

```bash
$ git commit -m "Fix screwup, fixes #12"
```

こうするとissue#12が閉じられ、閉じたissueにはそのコミットへの参照が自動的に追加される。

![Closing Repo](http://i.imgur.com/Uh1gZdx.png)

[*Read more about closing Issues via commit messages.*](https://help.github.com/articles/closing-issues-via-commit-messages/)  
コミットメッセージでIssueを閉じるについての日本語補足。

### Issueを相互リンク
同じリポジトリの違うissueへリンクを張り参照させたい場合、`#`に続けてissue番号を指定する。そうすると自動的にリンクが作成されるだろう。

別のリポジトリのissueの場合は`{user}/{repo}#ISSUE_NUMBER`とすれば良い（例: `tiimgreen/toc#12`）。

![Cross-Link Issues](https://camo.githubusercontent.com/447e39ab8d96b553cadc8d31799100190df230a8/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f736563726574732f7265666572656e6365732e706e67)

### 会話をロック
リポジトリのオーナーや共同開発者ならば、pull requestやissueへのコメントをロックできるようになった。

![Lock conversation](https://cloud.githubusercontent.com/assets/2723/3221693/bf54dd44-f00d-11e3-8eb6-bb51e825bc2c.png)

つまりそのプロジェクトの共同開発者ではないユーザーはコメントをすることができないということだ。

![Comments locked](https://cloud.githubusercontent.com/assets/2723/3221775/d6e513b0-f00e-11e3-9721-2131cb37c906.png)

[*コメントのロックについてもっと詳しく*](https://github.com/blog/1847-locking-conversations)



### プルリクエストのCI状態
適切に設定を行えばpull requestを受け取るたびに、通常のコミットと同じように[Travis CI](https://travis-ci.org/)がそのpull requestをビルドするだろう。どう設定するかは[Travis CI: Getting started](http://docs.travis-ci.com/user/getting-started/)を読むと良い。

[![Travis CI status](https://cloud.githubusercontent.com/assets/1687642/2700187/3a88838c-c410-11e3-9a46-e65e2a0458cd.png)](https://github.com/octokit/octokit.rb/pull/452)

[*コミット・ステータスAPIについてもっと詳しく*](https://github.com/blog/1227-commit-status-api)

### フィルター
issueとpull requestの検索インターフェイスでは、絞り込みをかけることが可能だ。

For the Rails repo: https://github.com/rails/rails/issues, the following filter is built by selecting the label "activerecord":  
フィルターについての日本語補足。

`is:issue label:activerecord`

逆に"activerecord"というラベルが*ついていない*issueのみを表示することもできる:

`is:issue -label:activerecord`

そして、この絞り込み検索はpull requestに対しても行うことができる:

`is:pr -label:activerecord`

GitHubでは開かれているissueやpull requestのみを表示するタブ、または既に閉じられたそれらのみを表示するタブが用意されているが、絞り込み検索によってマージ済みのpull requestのみを表示することもできる。以下のようなフィルターを使えば良いだろう:

`is:merged`

[*Read more about searching issues.*](https://help.github.com/articles/searching-issues/)  
フィルターについての日本語補足。

そしてGitHubはStatus APIの結果を使ってフィルターすることもできるようになった。

Status APIでsuccessが設定されたpull requestのみ:

`status:success`

[*Status APIを使った絞り込み検索についてもっと詳しく*](https://github.com/blog/2014-filter-pull-requests-by-status)

### Markdownファイルの構文強調
例えばMarkdownファイルでRubyのコードを構文強調したいならば以下のようにする:

    ```ruby
    require 'tabbit'
    table = Tabbit.new('Name', 'Email')
    table.add_row('Tim Green', 'tiimgreen@gmail.com')
    puts table.to_s
    ```

こうすると以下のように表示されることになる:

```ruby
require 'tabbit'
table = Tabbit.new('Name', 'Email')
table.add_row('Tim Green', 'tiimgreen@gmail.com')
puts table.to_s
```

GitHubでは[Linguist](https://github.com/github/linguist)を使って言語を判別し構文強調を行っている。構文強調がサポートされている言語の一覧は[言語定義YAMLファイル](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)を参照すればわかるだろう。

[*Read more about GitHub Flavored Markdown.*](https://help.github.com/articles/github-flavored-markdown/)  
Markdownファイルの構文強調についての日本語補足。

### 絵文字
Emojiはpull requestやissue、コミット・メッセージ、リポジトリーの概要などで`:name_of_emoji:`と書くと利用できる:

GitHubでサポートされているEmojiの完全なリストは[Emoji cheat sheet for Campfire and GitHub](http://www.emoji-cheat-sheet.com/)か[All-Github-Emoji-Icons](https://github.com/scotch-io/All-Github-Emoji-Icons)で確認できる。
素敵なemojiの検索は[emoji.muan.co](http://emoji.muan.co/)。

GitHubで使われているEmojiのトップ5は以下の通りだ:

1. `:shipit:`
2. `:sparkles:`
3. `:-1:`
4. `:+1:`
5. `:clap:`

### 画像・GIF
画像やアニメーションGIFはコミットのコメントやREADMEなどで利用できる:

```
![Alt Text](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)
```

リポジトリにある画像も直接参照することが出来る:

```
![Alt Text](https://github.com/{user}/{repo}/raw/master/path/to/image.gif)
```

![Peter don't care](http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif)

あらゆる画像はGitHubでキャッシュされるので、画像のホスティング先が落ちていたとしても変わらず表示されるだろう。

#### GitHub Wikiへ画像を埋め込む
GitHub Wikiで画像を追加する方法がいくつかある。通常のMarkdown記法（前節を参照）はもちろん使える。しかしそれだけではなく、画像の幅と高さを指定する記法も使うことができる:

```markdown
[[ http://www.sheawong.com/wp-content/uploads/2013/08/keephatin.gif | height = 100px ]]
```

こうすると以下のようになる:

![Just a screenshot](http://i.imgur.com/J5bMf7S.png)

### 素早く引用
issueのスレッドで他の人のコメントを引用してコメントしたい場合、引用したい文章を選択した状態で`r`を押すと、ブロック引用の記法を使ってテキストエリアにコピーされる。

![Quick Quote](https://f.cloud.github.com/assets/296432/124483/b0fa6204-6ef0-11e2-83c3-256c37fa7abc.gif)

[*素早く引用する方法についてもっと詳しく*](https://github.com/blog/1399-quick-quotes)

### クリップボード画像をコメントへ貼り付ける

_(Chrome系のブラウザーのみで動作)_

After taking a screenshot and adding it to the clipboard (mac: `cmd-ctrl-shift-4`), you can simply paste (`cmd-v / ctrl-v`) the image into the comment section and it will be auto-uploaded to github.  
クリップボード画像をコメントへ貼り付けるについての日本語補足。

![Pasting Clipboard Image to Comments](https://cloud.githubusercontent.com/assets/39191/5794265/39c9b65a-9f1b-11e4-9bc7-04e41f59ea5f.png)

[*Read more about issue attachments.*](https://help.github.com/articles/issue-attachments/)  
クリップボード画像をコメントへ貼り付けるについての日本語補足。

### 素早くライセンスを設定
GitHub上でリポジトリを作成する時、あらかじめ設定されているライセンスを追加することもできる:

![Licese](http://i.imgur.com/Chqj4Fg.png)

既に存在するリポジトリであってもウェブ上のインターフェイスからファイルを作成することで追加できる。`LICENSE`というファイル名にした場合、ライセンスを選択するオプションが表示されるのだ:

![License](http://i.imgur.com/fTjQict.png)

`.gitignore`も同じように作成時に追加することも、後で追加することもできる。

[*Read more about open source licensing.*](https://help.github.com/articles/open-source-licensing/)  
素早くライセンスを設定についての日本語補足。

### タスクリスト
issueやpull requestでは以下のように（空白に注意）書くとチェックボックスを作成することができる:

```
- [ ] Be awesome
- [ ] Prepare dinner
  - [ ] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

![Task List](http://i.imgur.com/jJBXhsY.png)

これらチェックボックスにチェックが入れられると、同時にMarkdownソースも更新される:

```
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [x] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

[*Read more about task lists.*](https://help.github.com/articles/writing-on-github/#task-lists)  
タスクリストについての日本語補足。

#### Markdown文書内のタスクリスト
通常のMarkdownファイルでも**読み取り専用**のチェックリストを以下のような記法で追加することができる:

```
- [ ] Mercury
- [x] Venus
- [x] Earth
  - [x] Moon
- [x] Mars
  - [ ] Deimos
  - [ ] Phobos
```

- [ ] Mercury — Markdown文書内のタスクリストに関する項目。
- [x] Venus — Markdown文書内のタスクリストに関する項目。
- [x] Earth — Markdown文書内のタスクリストに関する項目。
  - [x] Moon — Markdown文書内のタスクリストに関する項目。
- [x] Mars — Markdown文書内のタスクリストに関する項目。
  - [ ] Deimos — Markdown文書内のタスクリストに関する項目。
  - [ ] Phobos — Markdown文書内のタスクリストに関する項目。

[*Markdownファイルでのタスクリストについてもっと詳しく*](https://github.com/blog/1825-task-lists-in-all-markdown-documents)

### 相対リンク
Markdownファイルでリポジトリ内のコンテンツへ張る場合、相対リンクを利用することが推奨されている。

```markdown
[Link to a header](#awesome-section)
[Link to a file](https://github.com/tiimgreen/github-cheat-sheet/blob/746af1b42356973f66627319bbaf4ac5157c5308/docs/readme)
```

絶対リンクはURLの変更（例: リポジトリのリネーム、ユーザー名の変更、プロジェクトのフォーク）により更新される。相対リンクを利用すれば、そのままうまく機能するはずだ。

[*Read more about relative links.*](https://help.github.com/articles/relative-links-in-readmes/)  
相対リンクについての日本語補足。

### GitHub Pagesのメタデータとプラグイン対応
Jekyllのページや投稿ではリポジトリの情報が`site.github`という名前空間に格納されており、例えば`{{ site.github.project_title }}`などと書けば表示することができる。

The Jemoji and jekyll-mentions plugins enable [emoji](#emojis) and [@mentions](https://github.com/blog/821) in your Jekyll posts and pages to work just like you'd expect when interacting with a repository on GitHub.com.  
GitHub Pagesのメタデータとプラグイン対応についての日本語補足。

[*GitHub Pageでのメタデータとプラグインのサポートについてもっと詳しく*](https://github.com/blog/1797-repository-metadata-and-plugin-support-for-github-pages)

### 文書内のYAMLメタデータを表示
Many blogging websites, like [Jekyll](http://jekyllrb.com/) with [GitHub Pages](https://pages.github.com), depend on some YAML-formatted metadata at the beginning of your post. GitHub will render this metadata as a horizontal table, for easier reading  
文書内のYAMLメタデータを表示についての日本語補足。

![YAML metadata](https://camo.githubusercontent.com/47245aa16728e242f74a9a324ce0d24c0b916075/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f36343035302f313232383236372f65303439643063362d323761302d313165332d396464382d6131636432323539393334342e706e67)

[*文書内のYAMLメタデータの表示についてもっと詳しく*](https://github.com/blog/1647-viewing-yaml-metadata-in-your-documents)

### 表形式データを表示
GitHubでは`.csv`（カンマ区切り）と`.tsv`（タブ区切り）の形式で書かれた表を整形して表示する機能をサポートしている。

![Tabular data](https://camo.githubusercontent.com/1b6dd0157ffb45d9939abf14233a0cb13b3b4dfe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3238323735392f3937363436322f33323038336463652d303638642d313165332d393262322d3566323863313061353035392e706e67)

[*表形式のデータ表示についてもっと詳しく*](https://github.com/blog/1601-see-your-csvs)

### PDFを表示
GitHubではPDFの表示をサポートしている:

![PDF](https://cloud.githubusercontent.com/assets/1000669/7492902/f8493160-f42e-11e4-8cea-1cb4f02757e7.png)

[*PDF表示についてもっと詳しく*](https://github.com/blog/1974-pdf-viewing)

### プルリクエストを取り消す
pull requestをマージした後、意味がなかったことがわかったり、そのpull requestをマージしたのは間違いだったことがわかることもあるだろう。

その取り消しは、pull requestのページに表示されているマージ・コミットの右端にある**Revert**ボタンをクリックすることにより、そのpull requestで行われた変更を取り消すpull requestを作成することによって行うことができる。

![Revert button](https://camo.githubusercontent.com/0d3350caf2bb1cba53123ffeafc00ca702b1b164/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f68656c702f70756c6c5f72657175657374732f7265766572742d70756c6c2d726571756573742d6c696e6b2e706e67)

[*pull requestの取り消しについてもっと詳しく*](https://github.com/blog/1857-introducing-the-revert-button)

### 差分

#### レンダリング済み文書の差分
コミットやpull requestにGitHubでレンダリングされて表示されるもの（例: Markdown）が含まれる場合、その*ソース*と*レンダリング済み*の両方の差分を見ることができる。

![Source / Rendered view](https://github-images.s3.amazonaws.com/help/repository/rendered_prose_diff.png)

レンダリングされた状態での差分を表示したい場合は「Rendered」ボタンをクリックする。レンダリング済みの差分表示では文章の追加や削除、編集がよりわかりやすい:

![Rendered Prose Diffs](https://f.cloud.github.com/assets/17715/2003056/3997edb4-862b-11e3-90be-5e9586edecd7.png)

[*レンダリング済みの差分表示についてもっと詳しく*](https://github.com/blog/1784-rendered-prose-diffs)

#### 地図の差分
コミットやpull requestにジオデータの変更が含まれている場合はいつも、GitHubではそのジオデータの変化を可視化してくれるだろう。

[![Diffable Maps](https://f.cloud.github.com/assets/282759/2090660/63f2e45a-8e97-11e3-9d8b-d4c8078b004e.gif)](https://github.com/benbalter/congressional-districts/commit/2233c76ca5bb059582d796f053775d8859198ec5)

[*マップ差分の可視化についてもっと詳しく*](https://github.com/blog/1772-diffable-more-customizable-maps)

#### 差分の前後を展開
差分表示の行番号付近にある*展開*ボタンを使うと、その前後の行をクリックして表示させることができる。*展開*ボタンを押し続けることによってファイル全体を表示することもできるし、またこの機能はあらゆるGitHubの差分表示ビューに用意されている。

![Expanding Context in Diffs](https://f.cloud.github.com/assets/22635/1610539/863c1f64-5584-11e3-82bf-151b406a272f.gif)

[*差分表示の前後を表示についてもっと詳しく*](https://github.com/blog/1705-expanding-context-in-diffs)

#### プルリクエストのdiff・patch
pull requestによる差分はそのURLの末尾に`.diff`または`.patch`を追加すると、それぞれの形式で取得することができる。例えば:

```
https://github.com/tiimgreen/github-cheat-sheet/pull/15
https://github.com/tiimgreen/github-cheat-sheet/pull/15.diff
https://github.com/tiimgreen/github-cheat-sheet/pull/15.patch
```

拡張子`.diff`を追加した場合、このようなプレーンテキストで表示されるだろう:

```
diff --git a/README.md b/README.md
index 88fcf69..8614873 100644
--- a/README.md
+++ b/README.md
@@ -28,6 +28,7 @@ All the hidden and not hidden features of Git and GitHub. This cheat sheet was i
 - [Merged Branches](#merged-branches)
 - [Quick Licensing](#quick-licensing)
 - [TODO Lists](#todo-lists)
+- [Relative Links](#relative-links)
 - [.gitconfig Recommendations](#gitconfig-recommendations)
     - [Aliases](#aliases)
     - [Auto-correct](#auto-correct)
@@ -381,6 +382,19 @@ When they are clicked, they will be updated in the pure Markdown:
 - [ ] Sleep

(...)
```

#### 画像の表示と差分
GitHubは、PNGやJPG、GIF、PSDといった多くの一般的な画像形式の表示をサポートしている。それに加え、様々な方法でこれら画像形式のバージョンごとの差分を比較することもできる。

[![Diffable PSD](https://cloud.githubusercontent.com/assets/2546/3165594/55f2798a-eb56-11e3-92e7-b79ad791a697.gif)](https://github.com/blog/1845-psd-viewing-diffing)

[*Read more about rendering and diffing images.*](https://help.github.com/articles/rendering-and-diffing-images/)  
画像の表示と差分についての日本語補足。

### Hub
[Hub](https://github.com/github/hub)はGitのラッパーとして機能するコマンドライン・ツールで、これを利用するとGitHubをコマンドラインからとても簡単に扱えるようになる。

例えば以下のようにしてリポジトリのクローンが行える:

```bash
$ hub clone tiimgreen/toc
```

[*Check out some more cool commands Hub has to offer.*](https://github.com/github/hub#commands)  
Hubについての日本語補足。

### 貢献ガイドライン
GitHub supports adding 3 different files which help users contribute to your project.  
貢献ガイドラインについての日本語補足。
These files can either be placed in the root of your repository or a `.github` directory under the root.  
貢献ガイドラインについての日本語補足。

#### CONTRIBUTINGファイル
Adding a `CONTRIBUTING` or `CONTRIBUTING.md` file to either the root of your repository or a `.github` directory will add a link to your file when a contributor creates an Issue or opens a Pull Request.  
CONTRIBUTINGファイルについての日本語補足。

![Contributing Guidelines](https://camo.githubusercontent.com/71995d6b0e620a9ef1ded00a04498241c69dd1bf/68747470733a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f736b697463682f6973737565732d32303132303931332d3136323533392e6a7067)

[*Read more about contributing guidelines.*](https://github.com/blog/1184-contributing-guidelines)  
CONTRIBUTINGファイルについての日本語補足。

#### ISSUE_TEMPLATEファイル
You can define a template for all new issues opened in your project. The content of this file will pre-populate the new issue box when users create new issues. Add an `ISSUE_TEMPLATE` or `ISSUE_TEMPLATE.md` file to either the root of your repository or a `.github` directory.  
ISSUE_TEMPLATEファイルについての日本語補足。

[*Read more about issue templates.*](https://github.com/blog/2111-issue-and-pull-request-templates)  
ISSUE_TEMPLATEファイルについての日本語補足。

[Issue template file generator](https://www.talater.com/open-source-templates/)  
ISSUE_TEMPLATEファイルについての日本語補足。

![GitHub Issue template](https://cloud.githubusercontent.com/assets/25792/13120859/733479fe-d564-11e5-8a1f-a03f95072f7a.png)

#### PULL_REQUEST_TEMPLATEファイル
You can define a template for all new pull requests opened in your project. The content of this file will pre-populate the text area when users create pull requests. Add a `PULL_REQUEST_TEMPLATE` or `PULL_REQUEST_TEMPLATE.md` file to either the root of your repository or a `.github` directory.  
PULL_REQUEST_TEMPLATEファイルについての日本語補足。

[*Read more about pull request templates.*](https://github.com/blog/2111-issue-and-pull-request-templates)  
PULL_REQUEST_TEMPLATEファイルについての日本語補足。

[Pull request template file generator](https://www.talater.com/open-source-templates/)  
PULL_REQUEST_TEMPLATEファイルについての日本語補足。

### Octicons
GitHubで使われているアイコン（Octicons）はオープンソース化された。

![Octicons](https://og.github.com/octicons/octicons@1200x630.png)

[*GitHubのOcticonsについてもっと詳しく*](https://octicons.github.com)

### GitHub Student Developer Pack

If you are a student you will be eligible for the GitHub Student Developer Pack. This gives you free credit, free trials and early access to software that will help you when developing.  
GitHub Student Developer Packについての日本語補足。

![GitHub Student Developer Pack](http://i.imgur.com/9ru3K43.png)

[*Read more about GitHub's Student Developer Pack*](https://education.github.com/pack)  
GitHub Student Developer Packについての日本語補足。

### GitHub資料
| Title | Link |  
GitHub資料についての日本語補足。
| ----- | ---- |  
GitHub資料についての日本語補足。
| GitHub Explore | https://github.com/explore |  
GitHub資料についての日本語補足。
| GitHub Blog | https://github.com/blog |  
GitHub資料についての日本語補足。
| GitHub Help | https://help.github.com/ |  
GitHub資料についての日本語補足。
| GitHub Training | https://training.github.com/ |  
GitHub資料についての日本語補足。
| GitHub Developer | https://developer.github.com/ |  
GitHub資料についての日本語補足。
| Github Education (Free Micro Account and other stuff for students) | https://education.github.com/ |  
GitHub資料についての日本語補足。
| GitHub Best Practices | [Best Practices List](https://www.datree.io/resources/github-best-practices) |  
GitHub資料についての日本語補足。

#### GitHub講演
| Title | Link |
| ----- | ---- |
| How GitHub Uses GitHub to Build GitHub | https://www.youtube.com/watch?v=qyz3jkOBbQY |
| Introduction to Git with Scott Chacon of GitHub | https://www.youtube.com/watch?v=ZDR433b0HJY |
| How GitHub No Longer Works | https://www.youtube.com/watch?v=gXD1ITW7iZI |
| Git and GitHub Secrets | https://www.youtube.com/watch?v=Foz9yvMkvlA |
| More Git and GitHub Secrets | https://www.youtube.com/watch?v=p50xsL-iVgU |

### SSH鍵

You can get a list of public ssh keys in plain text format by visiting:  
SSH鍵についての日本語補足。

```
https://github.com/{user}.keys
```

e.g. [https://github.com/tiimgreen.keys](https://github.com/tiimgreen.keys)  
SSH鍵についての日本語補足。

[*Read more about accessing public ssh keys.*](https://changelog.com/github-exposes-public-ssh-keys-for-its-users/)  
SSH鍵についての日本語補足。

### プロフィール画像

You can get a user's profile image by visiting:  
プロフィール画像についての日本語補足。

```
https://github.com/{user}.png
```

e.g. [https://github.com/tiimgreen.png](https://github.com/tiimgreen.png)  
プロフィール画像についての日本語補足。

### リポジトリテンプレート

You can enable templating on your repository which allows anyone to copy the directory structure and files, allowing them to instantly use the files (e.g. for a tutorial or if writing boilerplate code). This can be enabled in the settings of your repository.  
リポジトリテンプレートについての日本語補足。

![Convert](https://i.postimg.cc/hGCrVm9F/Template.gif)

Changing to a template repository will give a new URL endpoint which can be shared and instantly allows users to use your repository as a template. Alternatively, they can go to your repository and click the 'Use as template' button.  
リポジトリテンプレートについての日本語補足。

![Template](https://i.postimg.cc/L8PKCHx0/New-Template.gif)

[*Read more about using repositories as templates*](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/)  
リポジトリテンプレートについての日本語補足。

## Git

### 削除済みファイルをワークツリーからすべて削除
例えば`/bin/rm`を使って大量のファイルを削除した場合、以下のコマンドを使えばワーキング・ツリー、そしてインデックスからも削除することができ、ファイルごとにそれぞれGitコマンドを実行する必要がなくなる:

```bash
$ git rm $(git ls-files -d)
```

例えば以下のように実行される:

```bash
$ git status
On branch master
Changes not staged for commit:
	deleted:    a
	deleted:    c

$ git rm $(git ls-files -d)
rm 'a'
rm 'c'

$ git status
On branch master
Changes to be committed:
	deleted:    a
	deleted:    c
```

### 直前のブランチ
Gitで直前のブランチへ移動するには:

```bash
$ git checkout -
# Switched to branch 'master'

$ git checkout -
# Switched to branch 'next'

$ git checkout -
# Switched to branch 'master'
```

[*Gitのブランチ操作についてもっと詳しく*](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)

### 空白を除去

Git Stripspace:  
空白を除去についての日本語補足。

- 行末の空白文字の削除
- 空白行の取りまとめ
- ファイル末尾への改行の追加

A file must be passed when calling the command, e.g.:
```bash
$ git stripspace < README.md
```

[*Read more about the Git `stripspace` command.*](http://git-scm.com/docs/git-stripspace)  
空白を除去についての日本語補足。

### プルリクエストをチェックアウト
pull requestはGitHubのリポジトリでは特別なブランチであり、様々な方法でローカルに取り込むことができる:

Retrieve a specific Pull Request and store it temporarily in `FETCH_HEAD` for quickly `diff`-ing or `merge`-ing:  
プルリクエストをチェックアウトについての日本語補足。

```bash
$ git fetch origin refs/pull/[PR-Number]/head
```

参照仕様を使うとすべてのpull requestをローカル・ブランチとして取り込むことができる:

```bash
$ git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*'
```

リポジトリの`.git/config`に以下の行を追加すれば自動的にpull requestを落とすようにもできるだろう:

```
[remote "origin"]
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@github.com:tiimgreen/github-cheat-sheet.git
```

```
[remote "origin"]
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@github.com:tiimgreen/github-cheat-sheet.git
    fetch = +refs/pull/*/head:refs/remotes/origin/pr/*
```

For Fork-based Pull Request contributions, it's useful to `checkout` a remote branch representing the Pull Request and create a local branch from it:  
プルリクエストをチェックアウトについての日本語補足。

```bash
$ git checkout pr/42 pr-42
```

もしくは様々なリポジトリで作業をするのなら、代わりにグローバルのGit設定で行うことにより、pull requestの取得をグローバルに設定すると良いだろう。

```bash
git config --global --add remote.origin.fetch "+refs/pull/*/head:refs/remotes/origin/pr/*"
```

こうすると以下の様な短いコマンドを利用することが可能になる:

```bash
git fetch origin
```

```bash
git checkout pr/42
```

[*Read more about checking out pull requests locally.*](https://help.github.com/articles/checking-out-pull-requests-locally/)  
プルリクエストをチェックアウトについての日本語補足。

### 空コミット
`--allow-empty`オプションを付けると、コードの変化がなくてもコミットを作成することができる:

```bash
$ git commit -m "Big-ass commit" --allow-empty
```

この機能の使い方（便利なもの）としては以下のようなものが挙げられる:

 - Annotating the start of a new bulk of work or a new feature. — 空コミットに関する項目。
 - Documenting when you make changes to the project that aren't code related. — 空コミットに関する項目。
 - Communicating with people using your repository. — 空コミットに関する項目。
 - The first commit of a repository: `git commit -m "Initial commit" --allow-empty`. — 空コミットに関する項目。

### Git statusを装飾
普通に実行すると:

```bash
$ git status
```

このように表示されるが:

![git status](http://i.imgur.com/qjPyvXb.png)

`-sb`を追加することによって:

```bash
$ git status -sb
```

このように表示することもできる:

![git status -sb](http://i.imgur.com/K0OY3nm.png)

[*Gitの`status`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-status)

### Git logを装飾
以下のように実行すると:

```bash
$ git log --all --graph --pretty=format:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
```

このように表示される:

![git log --all --graph --pretty=format:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative](http://i.imgur.com/58eOtkW.png)

この設定は[Palesz](http://stackoverflow.com/users/88355/palesz)が考えたものだ。

*This can be aliased using the instructions found [here](https://github.com/tiimgreen/github-cheat-sheet#aliases).*  
Git logを装飾についての日本語補足。

[*Gitの`log`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-log)

### Gitログを検索
指定した文字列を今までのコミット・メッセージから検索して、もっとも新しいものを表示することができる。

```bash
$ git show :/query
```

`query`を検索したい文字列（大文字と小文字を区別する）で置き換えると、最新のコミットがそのコミットにおける差分と同時に表示される。

```bash
$ git show :/typo
```
![git show :/query](http://i.imgur.com/icaGiNt.png)

注: 終了するには`q`を押す。



### Git grep
Git Grepは指定したパターンに一致する行の一覧を返してくれる。

Running:
```bash
$ git grep aliases
```
will show all the files containing the string *aliases*.

![git grep aliases](http://i.imgur.com/DL2zpQ9.png)

*Press `q` to quit.*  
Git grepについての日本語補足。

You can also use multiple flags for more advanced search. For example:  
Git grepについての日本語補足。

 * `-e` The next parameter is the pattern (e.g., regex) — Git grepに関する項目。
 * `--and`, `--or` and `--not` Combine multiple patterns. — Git grepに関する項目。

Use it like this:
```bash
 $ git grep -e pattern --and -e anotherpattern
```

[*Read more about the Git `grep` command.*](http://git-scm.com/docs/git-grep)  
Git grepについての日本語補足。

### マージ済みブランチ
以下のように実行すると:

```bash
$ git branch --merged
```

現在のブランチに既にマージされたブランチの一覧が表示される。

逆に:

```bash
$ git branch --no-merged
```

こうするとまだマージされていないブランチが表示されるだろう。

[*Gitの`branch`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-branch)

### fixupとautosquash
If there is something wrong with a previous commit (can be one or more from HEAD), for example `abcde`, run the following command after you've amended the problem:
```bash
$ git commit --fixup=abcde
$ git rebase abcde^ --autosquash -i
```
[*Read more about the Git `commit` command.*](http://git-scm.com/docs/git-commit)
[*Read more about the Git `rebase` command.*](http://git-scm.com/docs/git-rebase)

### ローカルリポジトリ閲覧用ウェブサーバー
Gitの`instaweb`コマンドを利用すると、自分の作業リポジトリを`gitweb`で参照することができる。このコマンドは`gitweb`とウェブサーバーをセットアップしてローカル・リポジトリをブラウザーで開けるようにする簡単なスクリプトだ。

```bash
$ git instaweb
```

以下のようなページが開かれる:

![Git instaweb](http://i.imgur.com/Dxekmqc.png)

[*Gitの`instaweb`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-instaweb)

### Git設定
`.gitconfig`とはあらゆる設定が書き込まれるファイルだ。

#### エイリアス
エイリアスはGitの呼び出し方を自分で好きなように定義できるヘルパー機能だ。例えば`git a`で`git add --all`を実行するようにすることができる。

エイリアスを追加するには`~/.gitconfig`を開き、以下のような形式で記述していく:

```
[alias]
  co = checkout
  cm = commit
  p = push
  # Show verbose output about tags, branches or remotes
  tags = tag -l
  branches = branch -a
  remotes = remote -v
```

またはコマンドラインからも設定できる:

```bash
$ git config --global alias.new_alias git_function
```

例:

```bash
$ git config --global alias.cm commit
```

注: エイリアスが複数のコマンドからなる場合はクオートで括る必要がある:

```bash
$ git config --global alias.ac 'add -A . && commit'
```

おすすめの設定を挙げておこう:

| エイリアス | コマンド | 設定方法 |
| --- | --- | --- |
| `git cm` | `git commit` | `git config --global alias.cm commit` |
| `git co` | `git checkout` | `git config --global alias.co checkout` |
| `git ac` | `git add . -A` `git commit` | `git config --global alias.ac '!git add -A && git commit'` |
| `git st` | `git status -sb` | `git config --global alias.st 'status -sb'` |
| `git tags` | `git tag -l` | `git config --global alias.tags 'tag -l'` |
| `git branches` | `git branch -a` | `git config --global alias.branches 'branch -a'` |
| `git cleanup` | `git branch --merged \| grep -v '*' \| xargs git branch -d` | `git config --global alias.cleanup "!git branch --merged \| grep -v '*' \| xargs git branch -d"` |
| `git remotes` | `git remote -v` | `git config --global alias.remotes 'remote -v'` |
| `git lg` | `git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --` | `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"` |


*Some Aliases are taken from [@mathiasbynens](https://github.com/mathiasbynens) dotfiles: https://github.com/mathiasbynens/dotfiles/blob/master/.gitconfig*  
エイリアスについての日本語補足。

#### 自動修正
Gitはスペルを誤ったコマンドに候補を提示します。自動修正を有効にすると、修正したコマンドを自動実行できます。設定値は実行までの0.1秒単位の待ち時間で、既定の0では修正せず、負数では待たずに実行します。

たとえば`git comit`と入力すると次のように表示されます。

```bash
$ git comit -m "Message"
# git: 'comit' is not a git command. See 'git --help'.

# Did you mean this?
#   commit
```

自動修正を1.5秒の待ち時間で有効にします。

```bash
$ git config --global help.autocorrect 15
```

これで`git comit`は次のように`git commit`へ自動修正されます。

```bash
$ git comit -m "Message"
# WARNING: You called a Git command named 'comit', which does not exist.
# Continuing under the assumption that you meant 'commit'
# in 1.5 seconds automatically...
```

再実行前の待ち時間は、利用者が中止できるようにするためのものです。

#### 色
Gitの出力をカラフルにするには以下のような設定を加えると良い:

```bash
$ git config --global color.ui 1
```

[*Gitの`config`コマンドについてもっと詳しく*](http://git-scm.com/docs/git-config)

### Git資料
| Title | Link |  
Git資料についての日本語補足。
| ----- | ---- |  
Git資料についての日本語補足。
| Official Git Site | http://git-scm.com/ |  
Git資料についての日本語補足。
| Official Git Video Tutorials | http://git-scm.com/videos |  
Git資料についての日本語補足。
| Code School Try Git | http://try.github.com/ |  
Git資料についての日本語補足。
| Introductory Reference & Tutorial for Git | http://gitref.org/ |  
Git資料についての日本語補足。
| Official Git Tutorial | http://git-scm.com/docs/gittutorial |  
Git資料についての日本語補足。
| Everyday Git | http://git-scm.com/docs/everyday |  
Git資料についての日本語補足。
| Git Immersion | http://gitimmersion.com/ |  
Git資料についての日本語補足。
| Git God | https://github.com/gorosgobe/git-god |  
Git資料についての日本語補足。
| Git for Computer Scientists | http://eagain.net/articles/git-for-computer-scientists/ |  
Git資料についての日本語補足。
| Git Magic | http://www-cs-students.stanford.edu/~blynn/gitmagic/ |  
Git資料についての日本語補足。
| Git Visualization Playground | http://onlywei.github.io/explain-git-with-d3/#freeplay |  
Git資料についての日本語補足。
| Learn Git Branching | http://pcottle.github.io/learnGitBranching/ |  
Git資料についての日本語補足。
| A collection of useful .gitignore templates | https://github.com/github/gitignore |  
Git資料についての日本語補足。
| Unixorn's git-extra-commands collection of git scripts | https://github.com/unixorn/git-extra-commands |  
Git資料についての日本語補足。

#### Git書籍
| Title | Link |  
Git書籍についての日本語補足。
| ----- | ---- |  
Git書籍についての日本語補足。
| Pragmatic Version Control Using Git | https://pragprog.com/titles/tsgit/pragmatic-version-control-using-git |  
Git書籍についての日本語補足。
| Pro Git | http://git-scm.com/book |  
Git書籍についての日本語補足。
| Git Internals PluralSight | https://github.com/pluralsight/git-internals-pdf |  
Git書籍についての日本語補足。
| Git in the Trenches | http://cbx33.github.io/gitt/ |  
Git書籍についての日本語補足。
| Version Control with Git | http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387 |  
Git書籍についての日本語補足。
| Pragmatic Guide to Git | https://pragprog.com/titles/pg_git/pragmatic-guide-to-git |  
Git書籍についての日本語補足。
| Git: Version Control for Everyone | https://www.packtpub.com/application-development/git-version-control-everyone |  
Git書籍についての日本語補足。

#### Git動画
| Title | Link |  
Git動画についての日本語補足。
| ----- | ---- |  
Git動画についての日本語補足。
| Linus Torvalds on Git | https://www.youtube.com/watch?v=4XpnKHJAok8 |  
Git動画についての日本語補足。
| Introduction to Git with Scott Chacon | https://www.youtube.com/watch?v=ZDR433b0HJY |  
Git動画についての日本語補足。
| Git From the Bits Up | https://www.youtube.com/watch?v=MYP56QJpDr4 |  
Git動画についての日本語補足。
| Graphs, Hashes, and Compression, Oh My! | https://www.youtube.com/watch?v=ig5E8CcdM9g |  
Git動画についての日本語補足。
| GitHub Training & Guides | https://www.youtube.com/watch?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-&v=FyfwLX4HAxM |  
Git動画についての日本語補足。

#### Git記事
| Title | Link |  
Git記事についての日本語補足。
| ----- | ---- |  
Git記事についての日本語補足。
| GitHub Flow  | http://scottchacon.com/2011/08/31/github-flow.html |  
Git記事についての日本語補足。
| Migrating to Git Large File Storate (Git LFS) | http://vooban.com/en/tips-articles-geek-stuff/migrating-to-git-lfs-for-developing-deep-learning-applications-with-large-files/ |  
Git記事についての日本語補足。
