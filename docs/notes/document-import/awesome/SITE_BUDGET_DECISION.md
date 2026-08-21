# サイト構成・成果物予算の判定

## 初回測定

- 測定日: 2026-08-20（Asia/Tokyo）
- 対象: 通常のAstro `docs` content collectionへ英語定本372ページを格納した`apps/awesome`
- 静的ページ数: 377
- `apps/awesome/dist`の容量: 94 MiB
- 最大ファイル: `_astro_data-layer-content.*.js`、32,260 KiB
- デプロイ最大ファイル上限: 25,600 KiB

content collectionのdata layerが本文と描画済みHTMLを一つのモジュールへ集約したことが、上限超過の原因だった。この測定に基づく複数アプリへの分割決定は、次の再測定結果により廃止する。

## 単一アプリ方式の再測定

- 測定日: 2026-08-20（Asia/Tokyo）
- 対象: 軽量ルート目録とページ単位のMarkdown動的importを使う`apps/awesome`
- 英語定本: 372ページ
- 静的ページ数: 377
- `apps/awesome/dist`のファイル数: 776
- `apps/awesome/dist`の容量: 68 MiB
- 最大ファイル: `YuzheSHI-awesome-agi-cocosci.*.js`、1,228,540 bytes
- 警告値: 20 MiB
- デプロイ最大ファイル上限: 25,600 KiB
- ビルド時間: 28.64秒

## 決定

Awesome系リストは単一の`apps/awesome`で公開する。本文は`src/awesome-content/`へ置き、全件をAstro content collectionへ登録しない。ルート、サイドバー、検索索引、出典レジストリは`SOURCES.lock.json`と`CONTENT_MAP.json`から生成する。

上位カテゴリはURL、サイドバー、内部コンテンツ区画として利用し、別アプリにはしない。旧6分割アプリは統合検証後に削除済みであり、旧検証URLと正規URLの対応は`URL_MIGRATIONS.json`へ保持する。
