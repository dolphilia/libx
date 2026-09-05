# Awesomeリスト

このディレクトリは、一段の入れ子型アプリグループです。公開URLは `/docs/awesome/<version>/<lang>/<category>/<page>/` を保持します。

入口は `overview`、本文は `web`・`languages`・`systems`・`science`・`creative`・`community` に配置します。所属はディレクトリ、取得元の所有先はリポジトリの `config/awesome-source-owners.json` で管理します。

- グループ全体: `pnpm build:selective --group=awesome`
- 子の選択: `pnpm build:selective --projects=awesome/web`
- 子単独: 子ディレクトリで `pnpm build`

本文・翻訳・出典は同じ所有子に置き、本文の移動によって公開URLを変更しないでください。
