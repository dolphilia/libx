---
title: "Awesome Tiny JS"
description: "小さなクライアント側JavaScriptライブラリを、記録時点のバンドルサイズ、収録条件、機能、利用上の制約とともに紹介します。"
licenseSource: "github-thoughtspile-awesome-tiny-js-readme-md"
---

# Awesome Tiny JS

UI、状態管理、ルーティング、APIリクエスト、国際化、日付、ユーティリティ、検証、ID、色、ジェスチャー、検索に使う、小さなクライアント側JavaScriptライブラリを紹介します。バンドルサイズを比較し、収録条件と利用上の制約も示します。

固定リストの収録条件は次のとおりです。

- 特記がなければ、すべての依存関係を含めてコードを縮小し、gzip圧縮したサイズが、おおむね2 kB未満。
- 多機能なライブラリは、有用な機能の部分集合がおおむね2 kB未満。
- クライアント側で役立つもの。固定リストでは、Node専用ライブラリの参加基準は未定。
- 二次ライブラリは、React・Vue・Angular・Svelte向けのみ。
- コミュニティによる確認がある程度あるツールを対象とするため、GitHubスター100件以上、または週500件以上のnpmインストール。
- JavaScriptを含まず、CSSや型だけで構成されるライブラリは対象外。

以下のサイズは、固定した上流コミットのバッジに記録された値です。特記がなければ依存関係を含めてコードを縮小し、gzip圧縮したサイズで、記録時点の測定値を示します。

## UI フレームワーク

UIフレームワークは、宣言的なテンプレート、イベントとの連携、監視可能な状態によって表示を更新します。この分類では、固定リストのサイズ上限を4.5 kB、GitHubスターの下限を2,000件に引き上げています。

- [preact](https://github.com/preactjs/preact) - React風のAPI（フック導入前の方式）と、同様に小さなツールやコンポーネントのエコシステム。4.3 kB。

固定リストでは、次の小さなライブラリの人気を[preactの約500分の1](https://npmtrends.com/preact-vs-hyperapp-vs-redom)と説明しています。

- [hyperapp](https://github.com/jorgebucaran/hyperapp) - 純粋なJS構文と不変の状態を使う仮想DOMフレームワーク。1.73 kB。
- [redom](https://github.com/redom/redom) - Hyperapp風のテンプレートと、命令的なイベントリスナー・更新処理。2.7 kB。

固定リストでは、次のライブラリを[実験的なUIライブラリ](https://npmtrends.com/@arrow-js/core-vs-fre-vs-hyperapp-vs-redom-vs-superfine-vs-vanjs-core)として扱っています。

- [fre](https://github.com/frejs/fre) - フックと並行処理を備えるReact風ライブラリ。2.23 kB。
- [van](https://github.com/vanjs-org/van) - ビルド不要の構成に最適化した仮想DOMフレームワーク。1.14 kB。
- [superfine](https://github.com/jorgebucaran/superfine) - 状態フックと副作用フックを取り除いたHyperapp。1.14 kB。
- [arrowjs](https://github.com/justin-schroeder/arrow-js) - タグ付きテンプレートとリアクティブなデータ。3.03 kB。

命令的なDOM操作に使うライブラリです。

- [umbrella](https://github.com/franciscop/umbrella) - jQuery風のDOM操作ライブラリ。2.71 kB。

## イベントエミッター

イベントエミッターは、イベントの発行と購読を提供します。この分類の記録上のサイズ上限は0.5 kBです。

- [mitt](https://github.com/developit/mitt) - シンプルなイベントエミッター。193 B。
- [nanoevents](https://github.com/ai/nanoevents) - 購読解除APIを備えるが、`*`イベントには非対応。189 B。
- [onfire.js](https://github.com/hustcc/onfire.js) - `.once`メソッドも提供。476 B。

## 状態管理

状態管理ライブラリは、監視可能な状態、アクション、フレームワークとの連携を組み合わせ、アプリ全体の状態を扱います。

- [zustand](https://github.com/pmndrs/zustand) - アクションとセレクターを備えるストア。フレームワーク非依存版は255 B、React版は375 B。
- [nanostores](https://github.com/nanostores/nanostores) - ツリーシェイキング対応のモジュール式ストア。フレームワーク非依存版は803 B、React連携には273 Bを追加。固定リストでは主要なフレームワークすべてに対応すると説明。
- [exome](https://github.com/marcisbee/exome) - フレームワークとの連携機能を備えるアトミックなストア。ストアは890 B、React連携には257 Bを追加。固定リストでは主要なフレームワークすべてに対応すると説明。
- [storeon](https://github.com/storeon/storeon) - フレームワークとの連携機能を備える最小構成のRedux風ストア。276 B。React連携には299 Bを追加し、Vue・Svelte・Angularとの連携も提供。
- [unistore](https://github.com/developit/unistore) - アクションを備える集中型ストア。326 Bに加え、React連携は1.01 kB。
- [teaful](https://github.com/teafuljs/teaful) - useState風APIのストア。React／preact連携を含めて1.01 kB。

### シグナル

シグナル方式の状態管理は、監視可能な値であるシグナル、派生値、副作用を提供します。

- [@preact/signals](https://github.com/preactjs/signals) - preactのシグナル。コアは1.45 kB、React連携込みでは2.22 kB。
- [usignal](https://github.com/WebReflection/usignal) - 小さなシグナル実装。963 B。
- [hyperactiv](https://github.com/elbywan/hyperactiv) - オブジェクトを監視可能にして、変更を購読する4つの関数。1.25 kB。
- [flimsy](https://github.com/fabiospampinato/flimsy) - Solid由来のシグナル。Solid本体もUIフレームワーク分類の条件にほぼ収まると記載。作者は「おそらくバグがある」と警告。1.02 kB。

補足として[oby](https://github.com/vobyjs/oby)も挙げられています。ツリーシェイキングに対応していれば収録条件を満たせる可能性がありますが、未対応では約7 kBです。

### リアクティブプログラミング

リアクティブプログラミングも状態管理の方式の一つです。イベントストリームにフィルターや変換を適用して、監視可能な値を得ます。RxJSに似た方式を小さなライブラリで利用できます。

- [flyd](https://github.com/paldepind/flyd) - Rx風のイベントストリーム。2.28 kB。
- [callbag-basics](https://github.com/staltz/callbag-basics) - Rx風のイベントストリーム。2.18 kB。

## ルーターと URL ユーティリティ

URLや履歴の変更に応じて動作し、パスの照合と解析を行うライブラリです。

- [wouter](https://github.com/molefrog/wouter) - React／preact向け宣言的ルーター。2.13 kB。単独フックとしても利用でき、その場合は562 B。
- [@nanostores/router](https://github.com/nanostores/router) - ルートをnanostoresのストアとして扱う、フレームワーク非依存の実装。1.4 kB。
- [navaid](https://github.com/lukeed/navaid) - 履歴に基づく、監視可能なルーター。934 B。

変更を監視せず、URLパスの解析と照合だけを行うライブラリです。

- [matchit](https://github.com/lukeed/matchit) - ルートの解析と照合。662 B。
- [regexparam](https://github.com/lukeed/regexparam) - パスを正規表現へ変換。408 B。
- [qss](https://github.com/lukeed/qss) - クエリ文字列の解析。318 B。固定リストでは、組み込みの[URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)も対応環境が整った選択肢として紹介。

## API レイヤー

データのシリアライズ・解析や200以外の応答の拒否など、`fetch`で必要になる処理をまとめるパッケージです。

- [redaxios](https://github.com/developit/redaxios) - 現代的なブラウザーでaxiosの代わりにそのまま使える実装。925 B。
- [wretch](https://github.com/elbywan/wretch) - メソッドを連結できるAPI、エラー処理、追加プラグイン。2 kB。
- [gretchen](https://github.com/truework/gretchen) - メソッドを連結できるAPIと、型安全なエラー。2.15 kB。

fetchのポリフィルが必要な環境向けです。

- [unfetch](https://github.com/developit/unfetch) - fetchの厳密ではないポリフィル。471 B。

## 国際化 <a id="i18n"></a>

翻訳文字列の対応表に加え、文字列への値の埋め込みや関連機能を提供する国際化ツールです。

- [@nanostores/i18n](https://github.com/nanostores/i18n) - ロケール検出、辞書の読み込み、日付・数値の書式設定。nanostores込みで1.96 kB。
- [eo-locale](https://github.com/ibitcy/eo-locale) - 文字列への値の埋め込みと日付・数値の処理。1.4 kB、React連携込みでは2.01 kB。
- [rosetta](https://github.com/lukeed/rosetta) - 基本的なテンプレート文字列（`{{hello}}, {{username}}`）と、それ以外の処理用のカスタム関数。314 B。
- [lingui](https://github.com/lingui/js-lingui) - テンプレート文字列を備える小さなコア。2.91 kB。

## 日付と時刻

小さなバンドルや必要な部分だけの利用で、日付と時刻を操作できるライブラリです。

- [date-fns](https://github.com/date-fns/date-fns/) - 全体は小さくないが、[大半の関数](https://bundlephobia.com/package/date-fns)はそれぞれ1 kB未満。formatとparseは比較的大きい。
- [dayjs](https://github.com/iamkun/dayjs) - moment.jsとほぼ互換のAPIで、大半の用途に対応。3.06 kB。

書式設定を中心とするパッケージです。

- [tinytime](https://github.com/aweary/tinytime) - シンプルな日付・時刻の書式設定。`{h}:{mm} -> 9:33`。854 B。
- [tinydate](https://github.com/lukeed/tinydate) - 日付・時刻の書式設定。ゼロ埋めした数値出力のみ対応（`September -> 09`）。360 B。
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - 日付・時刻の書式設定。412 B。
- [ms](https://github.com/vercel/ms) - ミリ秒単位の期間の解析と書式設定。例：`"1m" <-> 60000`。696 B。
- [timeago.js](https://github.com/hustcc/timeago.js) - 「X分前」「X時間後」のような相対的な日付表現へ変換。993 B。
- [fromnow](https://github.com/lukeed/fromnow) - 相対的な日付・時刻の書式設定。361 B。

固定リストでは、組み込みの[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)も、対応環境が整った選択肢として紹介しています。

## 汎用ユーティリティ

lodashやramdaにあるような機能を、小さなライブラリで提供します。多くは似た機能でサイズも小さく、パッケージ構成（単一パッケージか、補助関数ごとのパッケージか）や、ツリーシェイキングと補助関数の直接インポートに違いがあります。

- [remeda](https://github.com/remeda/remeda) - ツリーシェイキング可能な90個の補助関数（[一覧](https://bundlephobia.com/package/remeda)）。
- [rambda](https://github.com/selfrefactor/rambda) - ツリーシェイキング可能な187個の補助関数（[一覧](https://bundlephobia.com/package/rambda)）。
- [just](https://github.com/angus-c/just) - 別々のパッケージに分かれた82個の補助関数（[一覧](https://anguscroll.com/just/)）。
- [@fxts/core](https://github.com/marpple/FxTS) - ツリーシェイキング可能な96個の補助関数。遅延評価にも対応。

補足として[underscore](https://github.com/jashkenas/underscore)も挙げられており、1 kB未満の補助関数を多数含みます。ただしコードの構成により、上記ライブラリほどツリーシェイキングが効きません。

固定リストでは、lodash自体はツリーシェイキング非対応としています。`lodash.method`パッケージ、`lodash/method`からのインポート、`lodash-es`による分割の試みも、実用上うまく機能しないと説明しています。

固定リストでは、元のlodashの機能の多くは当時のESに組み込まれていると説明し、対象ブラウザーが対応していれば組み込みの同等機能を優先するよう勧めています。

## バリデーション

zod、yup、joi、ajvなどの代わりに、オブジェクトがスキーマに合うかを検証するライブラリです。固定リストでは、2 kB未満のバンドルで需要の90%を満たせると見積もっています。比較対象はツリーシェイキング後の基本部分（コア、オブジェクト／配列、文字列／数値／真偽値の検証）で、機能の多いライブラリも同じ範囲で比較しています。

- [v8n](https://github.com/imbrn/v8n) - zod風APIによる細かな検証：`v8n().string().minLength(5).first("H").last("o")`。ツリーシェイキング非対応。2.17 kB。
- [banditypes](https://github.com/thoughtspile/banditypes) - 小さな検証ライブラリ。289 B。
- [superstruct](https://github.com/ianstormtaylor/superstruct) - ツリーシェイキング対応のモジュール式検証ライブラリ。1.51 kB。
- [valibot](https://github.com/fabian-hiller/valibot) - モジュール式検証ライブラリ。1.16 kB。
- [deep-waters](https://github.com/antonioru/deep-waters) - 組み合わせ可能な関数型バリデーター。617 B。

## 一意 ID 生成

一意ID生成の記録上のサイズ上限は500バイトです。組み込みの[`crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)と、その[ブラウザー対応表](https://caniuse.com/mdn-api_crypto_randomuuid)も紹介しています。

- [@lukeed/uuid](https://github.com/lukeed/uuid) - UUIDの生成。243 B。
- [nanoid](https://github.com/ai/nanoid) - より多くの種類の文字を使うランダムID。207 B。
- [uid](https://github.com/lukeed/uid) - ランダムID生成。186 B。
- [hexoid](https://github.com/lukeed/hexoid) - 16進数のID。204 B。

## 色

UIやデータ可視化に必要な色の操作や、[色空間の変換](https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae)を支援するライブラリです。

- [colord](https://github.com/omgovich/colord) - 色の操作と色空間の変換。1.92 kB。追加機能はプラグインで、それぞれ150b〜1.5 kB。
- [colr](https://github.com/stayradiated/colr) - 色の操作と変換。1.9 kB。
- [polychrome](https://github.com/cdonohue/polychrome) - 色の操作と変換。2.1 kB。
- [randomcolor](https://github.com/davidmerfield/randomColor) - 設定可能なランダム色の生成。2.14 kB。

## タッチジェスチャー

一連のtouchmoveやポインターイベントから、スワイプ、ドラッグ、ピンチ、ダブルタップなどのモバイルジェスチャーを認識するライブラリです。

- [alloyfinger](https://github.com/AlloyTeam/AlloyFinger) - パン、スワイプ、タップ、ダブルタップ、長押しに加え、ピンチ・回転にも対応。1.89 kB。
- [tinygesture](https://github.com/sciactive/tinygesture) - 設定可能なパン、スワイプ、タップ、ダブルタップ、長押し。2.4 kB。

ジェスチャー認識を実装する際に、ブラウザーごとに異なるマウス、タッチ、ポインターイベントを扱うためのライブラリです。

- [pointer-tracker](https://github.com/GoogleChromeLabs/pointer-tracker) - マウス、タッチ、ポインターイベントを統一したインターフェース。1.09 kB。
- [detect-it](https://github.com/rafgraph/detect-it) - 利用可能な入力方法と主な入力方法（タッチ／マウス）、対応イベントの検出。506 B。

補足として、[any-touch](https://github.com/any86/any-touch)はジェスチャー認識をモジュール化していますが、認識器を含まないコアだけで約2 kBです。Ant Designで使われる[rc-gesture](https://github.com/react-component/gesture)は、このリストで唯一のReactコンポーネントになり得るものの、ビルドに固定で含まれるbabel-runtime／corejsのポリフィルにより、約2.5 kBのサイズが10 kB超になります。

## テキスト検索

クライアント側の絞り込みや入力候補の提示に使うテキスト検索です。単純な`option.includes(search)`では結果に適切な順序がなく、単語の境界を無視するとspa -> newSPAperのような意図しない一致が起きます。まず、単語単位の一致を優先するライブラリを紹介します。

- [js-search](https://github.com/bvaughn/js-search) - 複数フィールドの索引、ストップワード、カスタムのステマーやトークナイザーなど、設定可能な機能。1.92 kB。
- [ndx](https://github.com/localvoid/ndx) - js-searchに似るが、[順位付け](https://kmwllc.com/index.php/2020/03/20/understanding-tf-idf-and-bm-25/)が異なり、複数語クエリの条件がより緩い（[比較](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,ndx,Wade&search=twilight%20sag)）。フィールドの重み付けにも対応。1.4 kB。
- [wade](https://github.com/kbrsh/wade) - 同様の検索機能（[比較](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,Wade,ndx&search=twilight%20sag)）。1.23 kB。
- [libsearch](https://github.com/thesephist/libsearch) - 索引不要の検索。遅いが扱いやすく、適切な順序で結果を表示。439 B。

近い語を照合する方法の一つが、語を語幹へ変換するステミングです。たとえばwalkedとwalkingが一致します。以下は英語向けの[Porterステマー](https://vijinimallawaarachchi.com/2017/05/09/porter-stemming-algorithm/)です。

- [stemmer](https://github.com/words/stemmer) - 784 B。
- [porter-stemmer](https://github.com/jedp/porter-stemmer) - 926 B。

英語以外の語には、補足の選択肢として[snowball-js](https://github.com/fortnightlabs/snowball-js)（17 kB、15言語）、[lunr-languages](https://github.com/MihaiValentin/lunr-languages)（30言語対応、[lunr](https://github.com/olivernn/lunr.js)との組み合わせ専用）、[natural](https://github.com/NaturalNode/natural/tree/master/lib/natural/stemmers)（Node.jsに依存）が挙げられています。

### あいまい検索

あいまい検索は、変更された語も照合する別の方法です。まず、文字の挿入だけを許すライブラリ（spacecat -> SPACECrAfT）を紹介します。汎用のテキスト検索には制約がありますが、ファイル名、コマンド、URLの検索に適しています。

- [fuzzy](https://github.com/mattyork/fuzzy) - 索引不要で、一致部分を強調表示可能。536 B。
- [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search) - 状態を保持する索引を使用。866 B。
- [fzy.js](https://github.com/jhawthorn/fzy.js) - 一度に1つの文字列を照合し、ツリーシェイキング可能なスコア計算と一致部分の強調表示を提供。全体は751 B、`hasMatch`だけなら約150バイト。
- [fuzzysearch](https://github.com/bevacqua/fuzzysearch) - 一度に1つの文字列を照合。スコアや順位は計算しない。223 B。
- [liquidmetal](https://github.com/rmm5t/liquidmetal) - Quicksilverアルゴリズムで、コマンドの略記では単語先頭の一致を優先（例：`gp` -> `git push`）。一度に1つの文字列を照合。628 B。
- [quick-score](https://github.com/fwextensions/quick-score) - 長い文字列向けに調整したQuicksilver方式のライブラリ。リストの絞り込み・並べ替えを内蔵。2.11 kB、単一文字列のスコア計算なら1.2 kB。

最後に、スペルチェック専用のライブラリです。

- [fuzzyset](https://github.com/Glench/fuzzyset.js) - 綴りの誤りを検索。例：missipissi -> Missisipi。1.32 kB。固定リストでは商用利用は42ドルと記載。

## 脚注

補足リストには、有用な可能性があるものの詳しく分析されていないライブラリを扱う[WIP](https://github.com/thoughtspile/awesome-tiny-js/blob/f49d74e245824eb1194a01636b8dd3b0904d347c/wip.md)と、人気に関する収録条件をまだ満たさないライブラリを扱う[incubate](https://github.com/thoughtspile/awesome-tiny-js/blob/f49d74e245824eb1194a01636b8dd3b0904d347c/incubate.md)があります。

2023年に[Vladimir Klepov](https://blog.thoughtspile.tech)が収集・レビューしました。
