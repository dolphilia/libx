# デプロイ成果物のファイル数増加に関する調査メモ

- 調査日: 2026-08-11
- 対象: libxの統合デプロイ成果物とCloudflare Pages／Workers／R2
- 文書種別: 調査メモ

## 1. 目的

文書、言語、版、サイトが増えたとき、容量より先に静的ファイル数の上限へ達する可能性を調べた。現在利用中のCloudflare Pagesを継続できる範囲、Workers Paidを活用する構成、R2や他社へ移る条件を整理する。

## 2. 現状

調査時点で配置されていた統合済み`dist/`は469ファイル、約13MiBだった。内訳はHTML 80、JavaScript 158、サイドバーJSON 22、gzip済みJSON 22、KaTeXフォント180だった。ソース文書は51件である。

現在値はPages Freeの20,000ファイルに対して約2.3%、100,000ファイルに対して約0.47%であり、直ちに上限へ達する状態ではない。ただし、現在値にはサイトごとの固定アセットと重複出力が多いため、「文書数×現在比率」で将来を予測してはならない。大量文書fixtureで限界増分を実測する必要がある。

デプロイはGitHub Actionsから`wrangler pages deploy dist --project-name libx`を実行するDirect Upload方式であり、調査時点のルート依存関係はWrangler 3系だった。

## 3. Cloudflareの制限

### 3.1 Pages

- Freeは1サイト20,000ファイル、有料プランは1サイト100,000ファイル。
- 有料枠の有効化にはPagesプロジェクト設定の`PAGES_WRANGLER_MAJOR_VERSION=4`が必要。
- 個別の静的アセットは25MiBまで。
- Pagesプロジェクトは1アカウント100件まで。
- `_headers`は100規則、`_redirects`は静的2,000規則と動的100規則まで。

根拠: [Cloudflare Pages Limits](https://developers.cloudflare.com/pages/platform/limits/)

一般上限は有料100,000件へ更新されている一方、Direct Uploadの説明にはWranglerアップロードが20,000件と残っている。Workers Paid＋外部CIで20,000件のままになる問題はCloudflareの公開Issueで修正済み扱いだが、文書間の不一致が残る。このため、実際のプロジェクトで確認できるまでは20,000件を実効上限として扱う。

根拠: [Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)、[workers-sdk Issue #12394](https://github.com/cloudflare/workers-sdk/issues/12394)

### 3.2 Workers Static Assets

- Workers Freeは1 Workerバージョン20,000ファイル。
- Workers Paidは1 Workerバージョン100,000ファイル。
- 個別アセットは25MiBまで。
- 増加後の上限を利用するにはWrangler 4.34.0以上が必要。
- Workers数はFree 100、Paid 500。
- 静的アセットが直接一致する要求はWorkerコードを呼ばず、静的アセット要求は無料である。

根拠: [Workers Limits](https://developers.cloudflare.com/workers/platform/limits/)、[Static Assets Billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)

PagesからWorkers Static Assetsへ移しても、単一サイトの最大値は100,000件から増えない。利点は、Workers Paidの適用条件が明確であること、サイト単位に最大500 Workerへ分割できること、ルーティングと観測機能を拡張できることである。

### 3.3 R2

R2はバケット容量とオブジェクト数が無制限であり、100,000件を超える単一サイトの退避先になり得る。一方、静的サイトとして使うにはURLから`index.html`への解決、404、Content-Type、キャッシュ、リリース切替、ロールバックを追加で設計する必要がある。

本番配信ではレート制限のある`r2.dev`ではなくカスタムドメインとCloudflare Cacheを使用する。R2はエグレス無料だが、保存容量とClass A／B操作は従量課金である。

根拠: [R2 Limits](https://developers.cloudflare.com/r2/platform/limits/)、[R2 Public Buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/)、[R2 Pricing](https://developers.cloudflare.com/r2/pricing/)

## 4. 現在の成果物で確認した削減余地

### 4.1 サイドバーの事前gzip

クライアントは`.json`を要求しており、`.json.gz`を直接要求しない。Pagesは可能な場合にGzipまたはBrotliで自動配信するため、gzip版を別アセットとして生成・配信する必要はない。

根拠: [Pagesの配信動作](https://developers.cloudflare.com/pages/configuration/serving-pages/)

### 4.2 サイドバーの二重配置

統合ビルドと選択的ビルドは、同じサイドバーを`sidebar/`と`pages/public/sidebar/`へコピーしていた。後者を参照するコードはなく、調査時点で22ファイルが重複していた。

### 4.3 共有アセットとフォント

内容ハッシュでは469ファイル中169ファイルが他ファイルと同一内容だった。すべてを削除できるわけではないが、各サイトへ複製される共有JS、CSS、フォントを集約する余地がある。

KaTeXフォント180ファイルのうち120ファイルはTTFまたはWOFFである。対応ブラウザをWOFF2へ絞れるなら大きく削減できるが、ブラウザ互換性方針を伴うため今回の即時変更対象からは外す。

## 5. 選択肢の評価

| 選択肢 | 評価 | 採用条件 |
| --- | --- | --- |
| Pages継続 | 現在の規模では最小コスト | 実効上限に十分な余裕がある間 |
| 単一Workers Static Assetsへ移行 | Pages Direct Uploadの有料枠が使えない場合に有効 | 20,000件へ近づく前 |
| サイト単位のWorkers分割 | libxの選択的ビルド原則と最も整合する | 統合出力が60～80%へ到達したとき |
| R2＋Worker | オブジェクト数上限を解消できるが運用が増える | 1サイトが100,000件を超え、分割不能なとき |
| Netlify | デプロイ全体の件数上限なし、1ディレクトリ54,000件 | Cloudflare内の分割より単純になる場合 |
| Vercel | CLIソース15,000件、生成物多数ではビルド時間が問題 | libxには優位性が小さい |
| GitHub Pages | 1GiB、10分、帯域の制約が先に問題化し得る | 小規模なミラー用途 |
| S3＋CloudFront | オブジェクト数無制限で成熟しているが運用が増える | Cloudflareから独立する必要がある場合 |

他社根拠: [Netlify Deploy Overview](https://docs.netlify.com/deploy/deploy-overview/)、[Vercel Limits](https://vercel.com/docs/limits)、[GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)、[Amazon S3 Limits](https://docs.aws.amazon.com/en_en/AmazonS3/latest/userguide/BucketRestrictions.html)

## 6. 推論と提案

libxはサイトを選択的ビルドの保証単位としており、1サイトの生成が重くなった場合は別サイトへの分割を兆候として扱う。したがって、ファイル数対策も同じ境界を採用するのが自然である。

推奨順序は次のとおりである。

1. Pagesを継続し、不要成果物を削減して件数を継続測定する。
2. Wrangler v4とPages設定を整え、Direct Uploadで100,000件が使えるか確認する。
3. 上限の60%で設計を開始し、80%までにサイト単位のWorkers Static Assets分割を検証する。
4. 1サイトが100,000件へ近づく場合、まずサイトまたは版を分ける。
5. 分割できない場合だけ、R2＋薄いWorkerとリリース接頭辞方式を採用する。
6. Cloudflare内で要件を満たせなくなった場合にNetlifyまたはS3＋CloudFrontを比較検証する。

R2へ全面移行したり、他社へ先行移行したりする必要は現時点ではない。まず測定可能な予算と、サイト単位で分割可能なデプロイ設計を育てる方が、libxの原則と現在の規模に合う。
