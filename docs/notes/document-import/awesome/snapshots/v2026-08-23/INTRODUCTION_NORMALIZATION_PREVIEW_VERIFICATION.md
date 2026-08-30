# Awesomeタイトル・序文正規化 Preview検証

- 検証日: 2026-08-31
- Cloudflare Pages環境: Preview
- branch: `awesome-introduction-normalization-preview`
- deployment ID: `cfc7aff9-c346-4d0a-99c7-07d101a784f6`
- 固有URL: `https://cfc7aff9.libx.pages.dev`
- branch alias: `https://awesome-introduction-normali.libx.pages.dev`
- 配置成果物: 4,754ファイル、646.00 MiB
- 配置成果物ツリーハッシュ: `dd9ff0d27b5ee657c7dac2afb93ecacdb2b42b306426bc56eeb7e8164961cf9a`
- 直前Production: `e2f480a1-2b26-4dd6-a6f5-6ea4b336f6b3`

## 配置結果

Wrangler 4.127.1の標準送信設定で、4,176件を新規送信し、578件を既存assetとして再利用した。asset uploadは1,620.79秒で完了し、deploymentは成功した。途中に数分単位の応答待ちはあったが、再開不能なエラーは発生しなかった。

## 検証結果

- トップ、英語overview、日本語overview、branch aliasはHTTP 200。
- 日本語overviewの`title`、H1、概要、meta descriptionは正規化判断と一致。
- overview序文内の画像、中央揃え要素は0件。
- metadata-only、RST由来、最大級Zsh PluginsページでH1と概要を確認。
- 最新版の英日リンクは`v2026-08-23`内の対応ページを維持。
- 最大級Zsh Pluginsページは390×844で横方向overflow 0。

タイトル・序文の外部表示検証は合格した。Productionは変更していない。

## 軽量化CI Preview

Previewの遅延調査後、HTMLなどから到達不能なAstro静的生成用JavaScript 2,276件、189.90 MiBを配信成果物から除く処理を追加した。通常の統合ビルドで再生成した次候補は2,478ファイル、456.10 MiB、ツリーハッシュ`a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`である。

GitHub Actions run [#72](https://github.com/dolphilia/libx/actions/runs/33338909166)で品質ゲートとCI Direct Uploadを実行し、次のPreviewを固定した。

- source commit: `f150c2d61d230e9a79d41ed8eb9d797f14e17ba7`
- deployment ID: `476b728e-0fd4-464c-aeda-ae51347128f7`
- 固有URL: `https://476b728e.libx.pages.dev`
- branch alias: `https://codex-pages-preview-awesome.libx.pages.dev`
- branch: `codex/pages-preview/awesome-introduction-normalization`
- 配置成果物: 2,478ファイル、456.10 MiB
- 配置成果物ツリーハッシュ: `a2d0291f55105504852abe63d26d1a76ca82e9a83f694a8d70b856a492fd1538`

品質jobは約6分49秒、Preview jobは約5分13秒で完了した。Preview job内のビルドは約4分9秒、既存workspaceのWrangler 4.60.0によるPages配置は30秒だった。ローカル回線からのasset upload 1,620.79秒に対し、CIからの配置は大幅に短縮した。

固有URLでトップ、overview、metadata-only、RST由来、最大級ページ、未知URLを再検証し、期待する200または404を確認した。実ブラウザではH1と概要、序文内画像0、中央揃えなし、検索、最新版リンク、読込みJavaScript 6件のHTTP 200、コンソール警告・エラーなし、狭幅表示の横方向overflow 0を確認した。軽量化CI Previewは合格し、Production候補を上記ハッシュへ更新する。Production deploymentは変更していない。
