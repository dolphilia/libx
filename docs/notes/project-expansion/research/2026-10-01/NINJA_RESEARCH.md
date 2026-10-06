# Ninja 1.13.2 詳細調査

確認日: 2026-10-01。対象は公式CLIマニュアル `doc/manual.asciidoc` 全文。GLFWのCMakeによるビルドと、Ninja公式マニュアルが案内するCMakeジェネレーターの関係から発見した。GLFWがNinjaを必須とするとは判断していない。

- 公式サイト: https://ninja-build.org/ 。公式マニュアル: https://ninja-build.org/manual.html 。サイトの表示版は1.13.1、リリース最新版のURLは https://github.com/ninja-build/ninja/releases/tag/v1.13.2 。固定タグの文書は先頭に1.13.2を表示する。公式オンラインHTMLを1.13.2と誤登録しない。
- タグv1.13.2はコミット3441b633c2fe2c494e958780ba0f4227b1327634。タグAPI、固定コミットtarball、文書、COPYINGを保存した。
- `doc/README.md`と本体READMEに文書生成方法がある。DoxygenのC++ APIは内部実装でありCLIマニュアルとは別、と本体READMEが明示する。全入力一覧はninja-input-inventory.json。docsディレクトリに独立したライセンス指定は見つからず、manual本文の指定も調べたが、COPYINGだけから文書の権利をpassにしていない。通知と適用範囲の確認を継続する。
- 変換にはAsciiDoc→DocBook→XSLTが必要。環境にasciidoc/asciidoctorがなく、pandocにはAsciiDoc入力器がない。通常・最大・参照を含むページの変換試験は未実施。既存HTMLの流用は版が違うため不可。
- 日本語検索: `Ninja build manual 日本語 1.13 翻訳`、`ninja-build manual 日本語`、`Ninja build system 日本語 manual`。同名の映像機器・忍者関連資料を除外した。豆蔵の2025-01-22の利用記事 https://developer.mamezou-tech.com/en/blogs/2025/01/22/build_system_ninja/ は日本語原記事への導線を持つが、固定1.13.2マニュアル全文ではない。公式サイト・固定配布物に日本語全文は調査範囲で未発見。不在は断定しない。

権利と変換試験、実測工数が未確定のためneeds-evidence。得点は付けない。固定版のNOTICE・適用宣言と生成ツールを確保した時に再開する。外部への問い合わせはユーザーの送信指示がある場合のみ。
