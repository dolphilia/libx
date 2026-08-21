# Awesome単一アプリ構成

## 採用方式

- 公開プロジェクトは`apps/awesome`だけとする。
- 正規URLは`/docs/awesome/v2026-08-20/<lang>/<category-id>/<page-id>`とする。
- Markdownは`apps/awesome/src/awesome-content/`へ置き、通常の`docs` content collectionから分離する。
- `awesome-routes.json`にはURL生成とナビゲーションに必要な軽量メタデータだけを格納する。
- Awesome専用ルートは`import.meta.glob()`の遅延importで対象Markdownだけを描画する。
- サイドバーと軽量検索索引は同じルート目録から生成する。
- 出典レジストリはincluded 372件を単一`project.config.jsonc`へ機械生成する。

## 採用理由

通常のcontent collectionへ372ページを一括登録すると、本文と描画済みHTMLを含むdata-layer assetが32,260 KiBとなった。ページ単位の動的importでは最大チャンクが1,228,540 bytesとなり、20 MiB警告値と25,600 KiBデプロイ上限の両方を満たした。

## 正本と生成物

- 取得元と法的状態: `SOURCES.lock.json`
- カテゴリ割当: `CONTENT_MAP.json`
- 単一アプリ内区画: `CONTENT_PARTITIONS.json`
- 公開ルート: `apps/awesome/src/generated/awesome-routes.json`
- 旧URL対応: `URL_MIGRATIONS.json`
- 公開本文: `apps/awesome/src/awesome-content/`

`SITE_SHARDS.json`は旧分割検証の移行入力としてのみ保持し、公開配置の正本にはしない。

## 検証コマンド

```bash
pnpm awesome:validate-single-app
pnpm --filter=apps-awesome build
pnpm awesome:validate-assets
pnpm build:selective --projects=awesome
```

正規化済み入力を復元できるインポート作業環境では、追加で`pnpm awesome:publish --check`を実行し、公開本文と正規化済み入力の完全一致を確認する。通常のクリーンcheckoutのビルドは、Git管理された本文、目録、ロックファイルだけで成立させる。
