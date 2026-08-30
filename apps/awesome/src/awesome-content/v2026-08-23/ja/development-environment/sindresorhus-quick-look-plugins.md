---
title: "Awesome Quick Look plugins"
description: "Quick Look pluginsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-sindresorhus-quick-look-plugins-readme-md"
---

# Awesome Quick Look plugins

Quick Look pluginsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## インストール

### [Homebrew](https://brew.sh) を使う

- `brew install <package>` を実行します。

##### Catalina に関する注意

Catalina 以降で多くのプラグインを動作させるには、quarantine 属性を削除する必要があります。

次を実行して属性を確認します。

```
xattr -r ~/Library/QuickLook
```

次を実行して属性を削除します。

```
xattr -d -r com.apple.quarantine ~/Library/QuickLook
```

### 手動

- 「download manually」をクリックします。
- ダウンロードした .qlgenerator ファイルを `~/Library/QuickLook` に移動します。
- `qlmanage -r` を実行します。

## プラグイン

### [QLStephen](https://github.com/whomwah/qlstephen)

> 拡張子がない、または未知のプレーンテキストファイルをプレビューします。例：README、CHANGELOG、index.styl など。

`brew install qlstephen` を実行するか、[手動でダウンロード](https://github.com/whomwah/qlstephen/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/QLStephen.png)](https://github.com/whomwah/qlstephen)

### [QLMarkdown](https://github.com/sbarex/QLMarkdown)

> Markdown ファイルをプレビューします。

`brew install --cask qlmarkdown` を実行するか、[手動でダウンロード](https://github.com/sbarex/QLMarkdown/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/QLMarkdown.png)](https://github.com/sbarex/QLMarkdown)

### [QuickLookJSON](http://www.sagtau.com/quicklookjson.html)

> JSON ファイルをプレビューします。

[手動でダウンロード](http://www.sagtau.com/media/QuickLookJSON.qlgenerator.zip)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/QuickLookJSON.png)](http://www.sagtau.com/quicklookjson.html)

### [BetterZipQL](https://macitbetter.com/downloads/)

> アーカイブをプレビューします。

> 注：BetterZipQL プラグインは BetterZip アプリに統合されました。

`brew install betterzip` を実行して BetterZip アプリと Quick Look プラグインをインストールするか、[手動でダウンロード](https://macitbetter.com/BetterZip.zip)します。

旧版 BetterZipQL プラグインは[こちらからダウンロード](https://macitbetter.com/dl/BetterZipQL-1.5.zip)できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/BetterZipQL.png)](https://macitbetter.com/BetterZip-Quick-Look-Generator/)

### [Suspicious Package](https://www.mothersruin.com/software/SuspiciousPackage/)

> 標準的な Apple インストーラーパッケージの内容をプレビューします。

`brew install suspicious-package` を実行するか、[手動でダウンロード](https://www.mothersruin.com/software/downloads/SuspiciousPackage.xip)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/SuspiciousPackage.png)](https://www.mothersruin.com/software/SuspiciousPackage/)

### [Apparency](https://www.mothersruin.com/software/Apparency/)

> macOS アプリの内容をプレビューします。

`brew install apparency` を実行するか、[手動でダウンロード](https://mothersruin.com/software/downloads/Apparency.dmg)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/Apparency.png)](https://mothersruin.com/software/Apparency/)

### [QLVideo](https://github.com/Marginal/QLVideo)

> ほとんどの種類の動画ファイルと、そのサムネイル、カバーアート、メタデータをプレビューします。

`brew install qlvideo` を実行するか、[手動でダウンロード](https://github.com/Marginal/QLVideo/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/QLVideo.png)](https://github.com/Marginal/QLVideo)

### [Source Code Preview](https://anybox.ltd/source-code-preview) 💰

> JavaScript、Python、Java、CSS、JSON を含む50以上の言語に対応し、10以上のカラーテーマと構文強調表示を備えています。

[App Store](https://apps.apple.com/app/source-code-preview/id6759270528) で購入できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/SourceCodePreview.png)](https://anybox.ltd/source-code-preview)

### [Peek](https://bigzlabs.com/peek) 💰

> 300以上のファイル拡張子の Quick Look プレビューで、テキストのコピーと検索、行番号への移動、自動生成した目次付きの GitHub Flavored Markdown のレンダリング、スクロール位置の復元、構文強調表示などができます。

[App Store](https://apps.apple.com/app/peek-quick-look-extension/id1554235898) で購入できます。

*このアプリは放棄されており不具合もありますが、現在も動作します。*

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/Peek.png)](https://bigzlabs.com/peek)

### [Folder Preview](https://anybox.ltd/folder-preview) 💰

> フォルダーとアーカイブの中身を Quick Look で確認します。

[App Store](https://apps.apple.com/app/folder-preview/id6698876601) で購入できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/FolderPreview.png)](https://anybox.ltd/folder-preview)

### [Folder Quick Look](https://apps.apple.com/app/id6753110395) 💰

> フォルダーとアーカイブ（ZIP、RAR など）の内容をプレビューします。

[App Store](https://apps.apple.com/app/id6753110395) で購入できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/FolderQuickLook.png)](https://apps.apple.com/app/id6753110395)

### [FluxMarkdown](https://github.com/xykong/flux-markdown)

> Mermaid 図、KaTeX 数式、GFM、インタラクティブな目次に対応した Markdown ファイルのプレビューです。

`brew tap xykong/tap && brew install --cask flux-markdown` を実行するか、[手動でダウンロード](https://github.com/xykong/flux-markdown/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/FluxMarkdown.png)](https://github.com/xykong/flux-markdown)

### [Markdown Preview](https://anybox.ltd/markdown-preview) 💰

> KaTeX と Mermaid に対応した Markdown ファイルの Quick Look です。

[App Store](https://apps.apple.com/app/markdown-preview-quick-look/id6739955340) で購入できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/MarkdownPreview.png)](https://anybox.ltd/markdown-preview)

### [EPS Preview](https://anybox.ltd/eps-preview) 💰

> Finder に EPS ファイルの Quick Look とサムネイルを追加します。

[Web サイト](https://anybox.ltd/eps-preview)で購入できます。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/EPSPreview.png)](https://anybox.ltd/eps-preview)

### [ProvisionQL](https://github.com/ealeksandrov/ProvisionQL)

> iOS／macOS アプリとプロビジョニング情報をプレビューします。

`brew install provisionql` を実行するか、[手動でダウンロード](https://github.com/ealeksandrov/ProvisionQL/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/ProvisionQL.png)](https://github.com/ealeksandrov/ProvisionQL)

### [WebP](https://github.com/dchest/webp-quicklook)

> WebP 画像をプレビューします。

> 注：この機能はすでに `qlImageSize` で提供されています。このプラグインは `qlImageSize` を好まない場合のために掲載しています。

`brew install webpquicklook` を実行するか、[手動でダウンロード](https://github.com/dchest/webp-quicklook/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/WebP.png)](https://github.com/dchest/webp-quicklook)

### [SourceCodeSyntaxHighlight](https://github.com/sbarex/SourceCodeSyntaxHighlight)

> 多様なソースコードファイルをプレビューします。

`brew install --cask --no-quarantine syntax-highlight` を実行するか、[手動でダウンロード](https://github.com/sbarex/SourceCodeSyntaxHighlight/releases/latest)します。

[![](https://user-images.githubusercontent.com/8471055/118415204-5f53fc80-b6a9-11eb-93d8-b88c442c5744.png)](https://github.com/sbarex/SourceCodeSyntaxHighlight)

**注：** ほかの Quick Look プラグインを上書きする可能性があります。

### [Burrete](https://github.com/SergeiNikolenko/Burrete)

> Finder で PDB、mmCIF、SDF、XYZ、トラジェクトリ、化学表をプレビューします。

[手動でダウンロード](https://github.com/SergeiNikolenko/Burrete/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/Burrete.png)](https://github.com/SergeiNikolenko/Burrete)

### [Preview3MF](https://github.com/cavoco/Preview3MF)

> 3MF 形式の3Dプリントモデルを、実際の3Dレンダリングと Finder サムネイル付きでプレビューします。

`brew install --cask cavoco/tap/preview3mf` を実行するか、[手動でダウンロード](https://github.com/cavoco/Preview3MF/releases/latest)します。

[![](https://github.com/sindresorhus/quick-look-plugins/blob/31c4396daf241cc5beef85e5a336ea86b99da010/screenshots/Preview3MF.png)](https://github.com/cavoco/Preview3MF)

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Sindre Sorhus](https://sindresorhus.com) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
