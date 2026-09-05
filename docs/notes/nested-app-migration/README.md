# Awesome入れ子移行の基準資料

作成日: 2026-09-05。ここは入れ子移行のために追加した記録であり、既存のdocument-import/awesome配下にある凍結済み証拠とは分離する。

## 移行前目録

[awesome-before.json](./awesome-before.json)は2,074本文、2,082公開HTML、4つの現行検索索引を記録する。各本文について、全文・本文だけのSHA-256、文書ID・sourceId・licenseSource、出典レジストリのハッシュ、canonical、本文内アンカー、ページ全体のアンカーを保存した。

検査器は物理app IDとソース配置の変更を許容する。一方で、既存の本文URL・出典・バイト列・本文アンカー・検索メタデータの変更は失敗させる。ナビ等の追加公開ページと本文外のアンカー変更は別途差分として返し、実装時に内容を確認する。

旧v1の英日検索索引にはテンプレート文書へのURLが残っている。これらはAwesomeの現行本文と対応しないためlegacySearchesとして記録した。現行検索4索引から漏れた文書をこの区分へ逃がすことはできず、本文と索引の集合が一致しなければ保存しない。移行後はこの残存物の除去を確認する。

```bash
# 既存の目録を上書きせず、新しい比較資料を保存する
node scripts/migrations/awesome-migration-evidence.js --output=<新規ファイル>

# 現在の配置と統合distを移行前と比較する
node scripts/migrations/awesome-migration-evidence.js --baseline=docs/notes/nested-app-migration/awesome-before.json
```

クリーンビルド後の[全件照合結果](./before-validation.json)は成功した。本文・出典・URL・本文内アンカー・検索項目の差分はない。2,074ページの本文外ID差分は、既存のランダムなdropdown-button／dropdown-menu IDだけだった。これら以外の変更IDは零件。この非決定的なHTML生成は、後続で改善すべき再現性の問題として記録する。

## 外部リンクの追加基準

[external-links-before.json](./external-links-before.json)は、現行v2026-08-23のincluded本文616件・138,784リンクを取得元IDで集計した移行前報告。出典IDを共用する案内ページを概要本文として選ばないよう、本文の選択には経路目録のsourceIdを使用する。

既存snapshotディレクトリのEXTERNAL_LINK_REPORT.jsonは、版名がv2026-08-23でも365ページ時点の集計を保持していた。今回の入れ子移行で凍結済みの既存ファイルを上書きせず、現行本文の基準をここへ保存した。従来の報告への`--check`不一致を、新しい保存先で隠すのではなく、対象と件数の違いとして記録する。

```bash
node scripts/importers/awesome/generate-awesome-external-link-report.mjs --snapshot=v2026-08-23 --report=docs/notes/nested-app-migration/external-links-before.json --check
```

移動後も同じ基準へ照合する。生成日時以外の全項目を比較するため、リンク集合・件数・出典情報の意図しない変化は失敗する。

## 計測条件

[build-before.json](./build-before.json)と[environment.json](./environment.json)に条件を記録する。全体とAwesome選択を同じGit HEAD・同じ入力fingerprintのworktreeで各1回計測する。対象app/siteのdistと.astroを消し、依存パッケージと公開用索引ソースは保持する。OSのファイルキャッシュを消した計測ではない。

このworktreeには入れ子対応の共通基盤が実装されているが、Awesome自身は移動前の単一アプリ・専用レイアウトのままである。最初期HEADだけをcheckoutした数値とは区別する。各ケース完了後にコード・設定・本文・lockfileの入力fingerprintが不変であることを検査する。

RSSはビルドのプロセス群を100ms間隔で集計した最大値。ディスクは出力・.astro・統合ステージ・バックアップの割当済みバイトを1秒間隔で集計する。従前からあるバックアップは開始量に含み、追加のピーク量も別記する。全体CLIによる新しい復旧バックアップも計測範囲へ含める。

```bash
node scripts/performance/measure-nested-app-builds.js --output=<新規レポート> --projects=awesome --runs=1
```

移行後は同じ計測器・環境を使い、全体ビルドと最大の子の選択ビルドを測る。全体は同一コンテンツ集合、選択は変更対象の縮小という別の観点で比較する。単一サンプルの差だけで性能保証や新予算を決めない。

## 移行前の実測（各1回）

| ケース | 時間 秒 | プロセス群最大RSS MiB | 追加ピーク出力ディスク GiB | 統合ファイル数 |
| --- | ---: | ---: | ---: | ---: |
| full-1 | 149.105 | 3214.8 | 1.834 | 2478 |
| selective-1 | 130.100 | 3568.3 | 1.259 | 2478 |

両ケースともAwesome単体のdistは611.82 MiB、統合distは456.11 MiB。未参照アセットの除去後の統合容量と、アプリ自身のdist容量を分けて扱う。入力fingerprintは両ケースで不変だった。

詳細ログ: [全体](./build-before-full.txt)、[Awesome選択](./build-before-selective.txt)。RSSとディスクは一定間隔の標本最大値であり、瞬間値を完全に捕捉する計測ではない。

## 初期分割候補

[partition-inventory.json](./partition-inventory.json)は現在の全版・英日を合計した棚卸し。672のsourceIdに、版によって異なるカテゴリはなかった。同じsourceIdの全版・翻訳を一つの子へ割り当てられる。最終的な所有割当は移行処理の一か所で管理し、この棚卸し表を実行時の二つ目の正本にしない。

| 子 | 本文ページ | 取得元 | Markdown全体 MiB |
| --- | ---: | ---: | ---: |
| overview | 4 | 1 | 0.32 |
| web | 432 | 139 | 10.52 |
| languages | 296 | 103 | 14.38 |
| systems | 386 | 117 | 16.47 |
| science | 280 | 90 | 12.44 |
| creative | 150 | 47 | 5.95 |
| community | 526 | 175 | 14.93 |

overviewは入口、webはWeb開発、languagesは言語・開発環境、systemsは基盤・セキュリティ、scienceは計算機科学・データ・科学、creativeはゲーム・映像等、communityは仕事・学習・一般分野を受け持つ。分野を大きく崩さず、最も重い子の本文量を抑える候補である。ページ数だけを均等にしていない。

上記は7子への初期候補であり、ビルド実測前の速度改善を示す数値ではない。各子の最大RSS・生成時間とHTML量を検証して確定する。公開URLに子名を挿入しない。

## 移行後の計測（全体・Awesome全体は完了）

`measure-nested-app-builds.js` に `--group` を追加し、移行前のAwesome全体と移行後の全7子を同じ文書集合として比較する。対象解決は共通app一覧を使い、ログにはレポート名を含めて移行前ログを上書きしない。時間・RSS・ディスクの採取方法とキャッシュ消去条件は移行前を維持する。

```bash
node scripts/performance/measure-nested-app-builds.js --group=awesome --output=docs/notes/nested-app-migration/build-after.json
```

[移行後レポート](./build-after.json)は完了時に `completedAt` を持つ。処理途中の一ケースだけで全計測完了としない。全7子の選択ビルドは同一文書集合の比較であり、一子の更新コストは別に測る。各1回のローカル実行なので、OSキャッシュ・バックグラウンド負荷・ばらつきを排除した性能保証にはしない。

全体容量には共通ナビのHTML重複削減、子ごとの資産、未参照資産除去など複数の変更が含まれる。入れ子配置だけによる削減率や、ナビだけによる時間短縮率として報告しない。ナビの初期リンク数・共有JSON・静的一覧は[ブラウザー記録](./preview-validation.json)で別途検証している。

| ケース | 時間 秒 | プロセス群最大RSS MiB | 追加ピーク出力ディスク GiB | 統合ファイル数 |
| --- | ---: | ---: | ---: | ---: |
| full-1 | 180.842 | 2351.9 | 0.959 | 2526 |
| selective-1 | 162.335 | 2238.2 | 0.738 | 2526 |

全体ビルドは149.105秒から180.842秒（約21.3%増）、Awesome全体の選択ビルドは130.100秒から162.335秒（約24.8%増）。全体の最大RSSは3214.8 MiBから2351.9 MiB（約26.8%減）、Awesome全体の選択時は3568.3 MiBから2238.2 MiB（約37.3%減）。統合distは456.11 MiBから185.37 MiB（約59.4%減）。全体再生成の速度改善は確認できず、メモリと出力容量の削減を確認した。

全体ログ内のAstro報告では子の最長がcommunityの27.25秒、出力最大がsystemsの71.31 MiB。これらは各子のCLI全体時間・プロセスツリーRSSの測定ではない。次にcommunityとsystemsを単独の選択ビルドで測定し、未変更子を再生成せずに統合できることも確認する。

計測中の入力fingerprintは不変。移行前後は同じHEADを基点とする異なるworktree入力であり、コード・配置の差は意図した処置に含む。Gitコミットが同じという理由で同一入力と扱わない。リモートCIやCloudflare転送の時間は含まない。

## 大きい子の個別更新

計測器の `--scenarios=selective` で対象子だけのdist/.astroを削除してCLI全体を測った。計測器の変更が入力ハッシュに含まれるため、先にグループ全子を現行入力で生成した。その準備時間は以下に含まない。未変更子の成果物がないクリーン環境は、この個別更新値とは別のケースになる。

| 対象 | CLI時間 秒 | プロセス群最大RSS MiB | 対象外appの保持 |
| --- | ---: | ---: | --- |
| community | 46.587 | 1513.9 | 他10appの内容・更新時刻不変 |
| systems | 43.852 | 2276.4 | 他10appの内容・更新時刻不変 |

[community計測](./build-community.json)、[systems計測](./build-systems.json)、[非対象出力の保持](./individual-output-preservation.json)を保存した。両ケースで入力fingerprintは不変、CLIが報告するbuilt一覧は指定した一子だけ。communityは全体ログ中で最長、systemsは出力最大のため選んだ。残る子の個別RSSはこの二件から推定しない。

一子の更新は旧単一Awesomeの全体更新130.100秒より短いが、処理する本文集合が異なる。これを同一文書集合の高速化率とは扱わない。systemsのRSSはcommunityより大きく、ページ数の多寡だけではメモリ負荷を判断できない。

```bash
node scripts/performance/measure-nested-app-builds.js --projects=awesome/community --scenarios=selective --output=<新規レポート>
```

## 7子構成の確定

[全子の個別計測](./partition-build-comparison.json)は同一の入力fingerprintで各1回、対象dist/.astroを消して選択CLI全体を測った。未変更子の検証済み成果物を保持する条件であり、クリーンCIの全体生成とは区別する。

| 子 | CLI時間 秒 | 最大RSS MiB | 子dist MiB |
| --- | ---: | ---: | ---: |
| overview | 21.093 | 885.7 | 2.96 |
| web | 36.440 | 1852.5 | 51.88 |
| languages | 42.931 | 1861.7 | 64.79 |
| systems | 46.067 | 1842.7 | 71.31 |
| science | 36.255 | 1961.2 | 50.89 |
| creative | 27.354 | 1501.5 | 25.86 |
| community | 45.914 | 1857.4 | 70.63 |

初期構成は7子で確定する。時間が最大のsystemsとページ数が最大のcommunityに偏りすぎず、今回の最大RSSはscienceだった。メモリは標本最大・各1回であり上限保証ではない。旧計測のsystemsは2276.4 MiBで、入力差・環境差・ばらつきもあるため、新予算を約2 GiBに固定しない。現行の6 GiBヒープ設定に対して余地を持ち、まずこの構成で運用する。

全体再生成は既存計測で149.1→180.8秒と増加した。少数の子へ分けるだけで全体ビルドが速くなるとは扱わず、独立更新と最大負荷の抑制を採用理由にする。一リストの更新需要・容量が突出した場合にだけ、同じgroup直下の専用子へ切り出す。

## ナビ共有化の容量効果を分けて測る

[サイドバー容量比較](./sidebar-byte-comparison.json)では、同じ2074文書の旧artifactと現行distについて、HTMLパーサーの元ソース位置から `aside.sidebar-column` のUTF-8バイト数を合計した。さらに両構成のnavigation/・sidebar/ファイルを加えた。CSS/JSや本文・その他HTMLはこの小計に含めない。

旧構成は 276.56 MiB、現行は 5.05 MiB、差は 271.51 MiB。初期HTMLのナビを局所化し共有目録へ移した範囲の直接的な容量差である。総distの差約270.74 MiBとは範囲が異なり、その他の資産・HTMLの増減もある。これを入れ子ディレクトリ自体の削減効果やビルド時間の因果分解として扱わない。

実演用スクリプトは `.tmp/nested-app-migration/measure-sidebar-bytes.mjs`。出力目録と集計方法を保存し、旧artifactは復旧検証で凍結したものを使用した。全体時間・RSS・ディスクの比較、ナビ容量、各子更新の値はそれぞれ別の測定である。
