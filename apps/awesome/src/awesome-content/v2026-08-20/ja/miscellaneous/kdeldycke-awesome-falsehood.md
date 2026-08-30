---
title: "Awesome Falsehood header image"
description: "Falsehood header imageを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-kdeldycke-awesome-falsehood-readme-md"
---

# Awesome Falsehood header image

Falsehood header imageを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [メタ](#meta)
- [芸術](#arts)
- [ビジネス](#business)
- [暗号資産](#cryptocurrency)
- [日付と時刻](#dates-and-time)
- [教育](#education)
- [メール](#emails)
- [地理](#geography)
- [人のアイデンティティ](#human-identity)
- [国際化](#internationalization)
- [管理](#management)
- [マルチメディア](#multimedia)
- [ネットワーク](#networks)
- [電話番号](#phone-numbers)
- [郵便住所](#postal-addresses)
- [科学](#science)
- [社会](#society)
- [ソフトウェア工学](#software-engineering)
- [交通](#transportation)
- [タイポグラフィ](#typography)
- [ビデオゲーム](#video-games)
- [Web](#web)



## メタ

- [プログラマーが信じる誤り](https://spaceninja.com/2015/12/07/falsehoods-programmers-believe/) - 一般的な誤りの短いリスト。この世界の概要と入門に最適です。
- [プログラミングに関する誤り](https://chiselapp.com/user/ttmrichter/repository/gng/doc/trunk/output/falsehoods.html) - プログラミングとプログラマー自身について、謙虚になれる楽しいリスト。
- [誤りリストに関する誤り](https://kevin.deldycke.com/2016/falsehoods-programmers-believe-about-falsehoods-lists) - これらの誤りをどう扱うべきでないかについてのメタ解説。

## 芸術

- [音楽に関する誤り](https://literateprogrammer.blogspot.fr/2016/07/falsehoods-programmers-believe-about.html) - 音楽をコード化するときに置きがちな誤った前提。
- [芸術に関する誤り](http://artsy.github.io/blog/2018/04/18/programmer-misconceptions-about-art/) - 芸術に関する一般的な誤解。

## ビジネス

- [オンラインショッピングに関する誤り](https://wiesmann.codiferes.net/wordpress/archives/22201) - 価格、通貨、在庫を扱います。
- [価格に関する誤り](https://gist.github.com/rgs/6509585) - 通貨、金額、ローカライズを扱います。
- [IBANに関する誤り](https://github.com/globalcitizen/php-iban/blob/master/docs/FALSEHOODS.md) - International Bank Account Number は必ずしも国際的ではありません。
- [経済学に関する誤り](http://exple.tive.org/blarg/2016/09/22/falsehoods-programmers-believe-about-economics/) - 経済は単純でも合理的でもありません。
- [Etsyの会計システムでの小数点エラー](https://web.archive.org/web/20230615151102/https://old.reddit.com/r/Etsy/comments/hz4877/if_you_are_an_etsy_seller_do_not_purchase_postage/) - 会計ソフトにおける型の重要性。小数点が欠けると100倍の過剰請求になります。
- [2万5千ドルの架空通貨](https://web.archive.org/web/20250326135824/http://rachelbythebay.com/w/2022/12/02/25k/) - Google Ads で起きた同様の誤り。セントとドルを分離した結果、250ドルの社内クーポンが25,000ドルになりました。助言：[金額には整数・浮動小数点を使わずDecimalを使う。代替は文字列として解析し、検証しない。](https://twitter.com/kdeldycke/status/1599113889093890049)
- [「システムが10億ドルを処理できない」](https://xcancel.com/signulll/status/1950294195039838480) - AIブーム中の Meta の途方もない報酬が ERP を壊します。
- [会社名の文字 `<` と `>` がXSS攻撃につながる](https://forum.aws.chdev.org/t/cross-site-scripting-xss-software-attack/3355) - [英国では特殊文字を含む会社名を登録できる](https://www.legislation.gov.uk/uksi/2015/17/schedule/1/made)ため、攻撃者は `\"><SCRIPT SRC=MJT.XSS.HT></SCRIPT> LTD`、さらに `; DROP TABLE "COMPANIES";-- LTD`、`BETTS &AMP; TWINE LTD`、`SAFDASD & SFSAF \' SFDAASF\" LTD` を登録しました。
- [会社名の細部](https://twitter.com/nthnmsmth/status/1587880523124408322) - Delaware州とIRSの規則が交わらない仕組み。
- [CLDRの通貨定義](https://github.com/unicode-org/cldr/blob/release-40/common/supplemental/supplementalData.xml#L87-L94) - 🆓 反乱、侵略、新憲法、緩やかな計画導入により、通貨の有効期間が重複します。
- [`tax`](https://github.com/commerceguys/tax) - 🆓 PHP 5.4+ 向け税管理ライブラリ。

## 暗号資産

- [Bitcoinに関する誤り](https://github.com/theborakompanioni/spring-boot-bitcoin-starter/blob/master/docs/FALSEHOODS.md) - Bitcoin への誤った見方のリスト。
- [Ethereumに関する誤り](https://gist.github.com/spalladino/a349f0ca53dbb5fc3914243aaf7ea8c6) - Contract Programming の誤解と一般的な落とし穴。

## 日付と時刻

- [時刻に関する誤り](http://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time) - 日付と時刻に関する先駆的記事。
- [時刻に関するさらなる誤り](http://infiniteundo.com/post/25509354022/more-falsehoods-programmers-believe-about-time) - 上の記事の第2部。
- [時刻とタイムゾーンに関する誤り](https://www.creativedeletion.com/2015/01/28/falsehoods-programmers-date-time-zones.html) - タイムゾーンを重視した、時刻に関する別の誤り集。
- [時刻に関する誤りへの批評](https://gist.github.com/thanatos/eee17100476a336a711e) - 最初の記事の各項目を、追加の文脈と外部資料付きで解説。
- [Unix Timeに関する誤り](https://alexwlchan.net/2019/05/falsehoods-programmers-believe-about-unix-time/) - うるう秒に注意。
- [タイムゾーンに関する誤り](https://www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/) - DST移行の境界事例について良い指摘があります。
- [Your Calendrical Fallacy Is Thinking…](http://yourcalendricalfallacyis.com) - iOS・macOS開発者コミュニティが作った、閏調整と文化的影響を扱うリスト。
- [Time Zone Database](https://www.iana.org/time-zones) - 🆓 世界の代表地点における地方時の歴史を表すコードとデータ。
- [時刻の長く苦しい歴史](http://naggum.no/lugm-time.html) - 時刻管理の特異性の多くは歴史から説明できます。
- [暦の改革を提唱するなら](https://qntm.org/calendar) - そのアイデアが機能しない理由を説明します。
- [タイムゾーンを廃止したいなら](https://qntm.org/abolish) - 廃止は良案に見えても、そう単純ではない問題が多数あります。
- [時刻とタイムゾーンの問題](https://www.youtube.com/watch?v=-5wpm-gesOY) - 可能なら決してタイムゾーンを扱うべきでない理由の動画。
- [労働省による26,000ドルの過剰徴収](http://digital.vpr.net/post/rounding-error-computer-code-leads-26000-overcollection-labor-department) - 誤った暦計算の結果。
- [RFC-3339対ISO-8601](https://ijmacd.github.io/rfc3339-iso8601/) - 2規格の膨大な形式、重複、ライブ例。
- [ISO-8601、`YYYY`、`yyyy`、年が誤る理由](https://web.archive.org/web/20200216181551/https://ericasadun.com/2018/12/25/iso-8601-yyyy-yyyy-and-why-your-year-may-be-wrong/) - 日付の文字列整形は難しいものです。
- [UTCで全員十分、ですよね？](https://zachholman.com/talk/utc-is-enough-for-everyone-right) - おそらく考えたことのない、日付と時刻、特にUTCの境界事例があります。
- [UTC保存は万能薬ではない](https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet/) - 「日付をUTCで保存する」ことが常に正しいとは限りません。
- [UT1、TAI、UTCの選び方](https://news.ycombinator.com/item?id=28047376) - SI秒、地球自転との同期、うるう秒回避の優先度次第です。
- [1927年の2時刻を引くと奇妙な結果になる理由](https://web.archive.org/web/20241124114705/https://stackoverflow.com/questions/6841333/why-is-subtracting-these-two-epoch-milli-times-in-year-1927-giving-a-strange-r/6841479#answer-6841479) - 複雑な歴史的タイムゾーンと、ソフトウェア新版による歴史日付の再解釈を扱う有名な Stack Overflow 回答。
- [Critical and Significant Dates](https://web.archive.org/web/20150908004245/http://www.merlyn.demon.co.uk/critdate.htm) - Y2KからUnix Epoch起点の32ビット秒オーバーフローまで、システムごとに注意すべき特別な日付。
- 「Vermontのコミューンへ行き、季節より短い時間単位は扱わない。」— 1970年代、秒未満の時間処理に苦闘した退職エンジニアが端末に残したメモ。出典：[The Soul of a New Machine](https://openlibrary.org/isbn/0316491705)。

## 教育

- [コンピューター科学の学生が卒業時にも信じる誤り](https://www.netmeister.org/blog/cs-falsehoods.html) - 本来は知っているはずでも、学生らが誤って、時に驚くほど信じがちな事柄。
- [Postdoc myths](https://www.cs.kent.ac.uk/people/staff/srk21/blog/2019/12/02/) - 「Postdoctoral Researcherについて語られ、書かれ、信じられることの多くは単に真実ではない。」

## メール

- [メールに関する誤り](https://beesbuzz.biz/code/439-Falsehoods-programmers-believe-about-email) - アドレス、内容、配送について。
- [RFCを読むまではメールアドレスの検証方法を知っていた](https://haacked.com/archive/2007/08/21/i-knew-how-to-validate-an-email-address-until-i.aspx/) - RFC-822によれば有効な、予想外に複雑なメールアドレス例。
- [メールアドレスを検証できると思うなら（FOSDEM 2018）](https://fosdem.org/2018/schedule/event/email_address_quiz/) - 境界事例と、Regexで解析すべきでない理由の発表。
- [あなたのメール検証ロジックは誤っている](https://www.netmeister.org/blog/email.html) - メールアドレスで許可される驚くべき事柄の要約。
- [`libvldmail`](https://github.com/dertuxmalwieder/libvldmail) - 🆓 RFCベースのメールアドレス検査を実装するライブラリ。

## 地理

- [地理に関する誤り](https://wiesmann.codiferes.net/wordpress/archives/15187) - 場所、その名前、位置を扱います。
- [地図に関する誤り](https://web.archive.org/web/20250516080728/http://www.atlefren.net/post/2014/09/falsehoods-programmers-believe-about-maps/) - 座標、投影法、GISを扱います。
- [天気に関する誤り](https://shkspr.mobi/blog/2024/06/falsehoods-programmers-believe-about-weather/) - 天気は場所に依存し、境界事例に満ちています。
- [I Hate Coordinate Systems](https://ihatecoordinatesystems.com) - 地理空間実務者が座標系の一般的な問題を診断・修正するためのガイド。
- [日本で最も難解な漢字地名トップ5](https://web.archive.org/web/20210310050932/https://soranews24.com/2016/12/01/w-t-f-japan-top-5-most-insane-kanji-place-names-in-japan%E3%80%90weird-top-five%E3%80%91/) - 「日本人にも読みにくい特別な漢字群、それが地名です。」

## 人のアイデンティティ

- [名前に関する誤り](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/) - すべての始まりとなった記事。
- [名前に関する誤り—実例付き](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/) - 上の記事を詳細な説明付きで再検討。
- [Biometricsに関する誤り](https://shkspr.mobi/blog/2021/01/falsehoods-programmers-believe-about-biometrics/) - 指紋は一意ではありません。
- [家族に関する誤り](https://shkspr.mobi/blog/2017/03/falsehoods-programmers-believe-about-families/) - 厳格な規則では家族を定義できません。
- ジェンダーに関する誤り：[その1](https://gist.github.com/garbados/f82604ea639e0e47bf44)・[その2](https://medium.com/gender-2-0/falsehoods-programmers-believe-about-gender-f9a3512b4c9c) - ジェンダーは人のアイデンティティの一部で、固有の複雑さがあります。
- [私に関する誤り](https://skylarmacdonald.com/falsehoods/) - 名前、ジェンダー、国際化が交差する問題。
- [同性婚：データベース工学の視点](https://web.archive.org/web/20170914014648/https://qntm.org/gay) - ジェンダー、名前、関係性に関する多くの誤りへ対処しながら、婚姻をDBへ保存する方法。
- [世界の個人名](https://www.w3.org/International/questions/qa-personal-names) - 世界で名前はどう異なり、Webにどんな影響があるか。
- [XKCD #327: Exploits of a Mom](https://xkcd.com/327/) - 誤った前提の実装がセキュリティホールにつながる様子を面白く描きます。
- [こんにちは、Mr. Nullです。私の名前はコンピューターから見えません](https://www.wired.com/2015/11/null/) - 実装された誤りが人の生活へ悪影響を与える実例。
- [HL7 v3 RIM](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) - 人名を表す柔軟なデータモデル。
- [Apple iOS `NSPersonNameComponentsFormatter`](https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/NSPersonNameComponentsFormatter_Class/index.html) - 人名構成要素のローカライズされた表現。

## 国際化

文字エンコーディング、文字列整形、Unicode、国際化について。

- [言語に関する誤り](http://garbled.benhamill.com/2017/04/18/falsehoods-programmers-believe-about-language) - ソフトウェアの英語からの翻訳は見た目ほど単純ではありません。
- [言語に関する誤り](https://www.lexiconista.com/falsehoods-about-languages/) - 前の記事を補完する追加事例。
- [Plain Textに関する誤り](https://jeremyhussell.blogspot.com/2017/11/falsehoods-programmers-believe-about.html#main) - Plain Textだけでは不十分であり、それでもうまく機能するUnicodeはさらに驚異的です。
- [テキストに関する誤り](https://wiesmann.codiferes.net/wordpress/archives/30296) - Unicode正規化、合字、Surrogate Pair、文字幅、Substring操作でのGrapheme Clusterの落とし穴を示す実例。
- [コードの国際化](https://www.youtube.com/watch?v=0j74jcxSunY) - コードを国際化するときに留意すべきことの動画。
- [Unicodeと文字集合について最低限知るべきこと](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) - Unicodeの歴史的背景・起源と内部動作の概要を示す良い入門。
- [Awesome Unicode](https://github.com/jagracey/Awesome-Unicode) - Unicodeの楽しい小話、パッケージ、資料を厳選。
- [Unicodeの暗部](https://eev.ee/blog/2015/09/12/dark-corners-of-unicode/) - Unicodeは広大で、危険が潜みます。
- [Code Pointへ意味を帰属させるのをやめよう](https://manishearth.github.io/blog/2017/01/14/stop-ascribing-meaning-to-unicode-code-points/) - Unicodeを掘り下げ、Code Pointの神話を解消。
- [Unicodeの誤解](https://jean.abou-samra.fr/blog/unicode-misconceptions/) - 大文字・小文字、Encoding、文字列長などに関する誤り集。
- [`Latin-1`の前提を壊す](https://manishearth.github.io/blog/2017/01/15/breaking-our-latin-1-assumptions/) - 多くのプログラマーは `Latin-1` に触れる時間が長く、ほかの文字体系の癖を忘れます。
- [配送ラベルへの頌歌](http://i.imgur.com/4J7Il0m.jpg) - 文字エンコーディングは難しく、壊れた入力層がそれぞれ問題を加えるとさらに困難です。
- [Localization Failure：温度は難しい](https://randomascii.wordpress.com/2023/10/17/localization-failure-temperature-is-hard/) - 温度差をそのままローカライズすることはできません。
- [i18n Testing Data](https://github.com/patch/i18n-testing) - 🆓 Unit TestとQA向けの実在する国際的で多様な名前データ集。
- [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) - 🆓 利用者入力として問題を引き起こす可能性が高い巨大文字列Corpus。ソフトウェアで試すべき実用的な境界事例集。

## 管理

- [求職者に関する誤り](https://web.archive.org/web/20170114022820/https://medium.com/@creatrixtiara/falsehoods-programmers-believe-about-job-applicants-99280437c616) - 求職者と職歴についての前提は必ずしも真実ではありません。

## マルチメディア

- [動画に関する誤り](https://haasn.xyz/posts/2016-12-25-falsehoods-programmers-believe-about-%5Bvideo-stuff%5D.html) - 動画のDecode・再生、ファイル、画像拡大縮小、Color Space・変換、Display、Subtitleを網羅。
- [音楽を扱う際に考慮すべき恐ろしい境界事例](https://dustri.org/b/horrible-edge-cases-to-consider-when-dealing-with-music.html) - 音楽Catalogのデータは常識外のものに満ちています。
- [MusicBrainz database schema](https://musicbrainz.org/doc/MusicBrainz_Database/Schema) - 音楽Catalog管理の複雑さを解決したと思われるオープンソースプロジェクトとDB。
- [DDEX](https://ddex.net/standards/) - Archive、録音、販売・利用報告、Royalty、License契約を含む音楽Metadataの業界標準。
- [Apple Music Style Guide](https://help.apple.com/itc/musicstyleguide/en.lproj/static.html) - 音楽、芸術、Metadataを整形し発見可能性を高める品質保証ガイドライン。

## ネットワーク

- [ネットワークに関する誤り](https://web.archive.org/web/20250215201837/http://blog.erratasec.com/2012/06/falsehoods-programmers-believe-about.html) - TCP、DHCP、DNS、VLAN、IPv4/v6を扱います。
- [分散コンピューティングの誤謬](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) - 分散アプリケーションの初心者が必ず置く前提。
- [IPアドレスの書き方は1つではない](https://ma.ttias.be/theres-more-than-one-way-to-write-an-ip-address/) - 一部を省略でき、10進・8進表記に注意が必要で、[IPv6も忘れてはいけません](https://news.ycombinator.com/item?id=20390981)。
- [IDNは複雑](https://daniel.haxx.se/blog/2022/12/14/idn-is-crazy/) - Domain Nameの国際文字対応はHomographとHeterographの対応も意味します。

## 電話番号

- [電話番号に関する誤り](https://github.com/google/libphonenumber/blob/master/FALSEHOODS.md) - 電話番号、その表現、意味を扱います。
- [`libphonenumber`](https://github.com/google/libphonenumber) - 🆓 国際電話番号を解析、整形、検証するGoogleの共通Java・C++・JavaScriptライブラリ。[C#](https://github.com/twcclegg/libphonenumber-csharp)、[Objective-C](https://github.com/iziz/libPhoneNumber-iOS)、[Python](https://github.com/daviddrysdale/python-phonenumbers)、[PHP](https://github.com/giggsey/libphonenumber-for-php)版もあります。

## 郵便住所

- [住所に関する誤り](https://www.mjt.me.uk/posts/falsehoods-programmers-believe-about-addresses/) - 道路、郵便番号、建物、都市、国を扱います。
- [居住地に関する誤り](https://twitter.com/samphippen/status/813896916534784004) - 住所自体だけでなく、人と居住地の関係にも関わります。
- [氏名も住所もない手紙が配達された](https://boingboing.net/2016/08/30/letter-sent-to-iceland-farm-wi.html) - 郵便住所に関する究極の誤り。住所は必須ではありません。
- [英国住所の奇妙さ](https://paulplowman.com/stuff/uk-address-oddities/) - 1995年以降のEngland・Walesの住宅販売一覧から抽出した癖。
- [独自のZIP Codeを持つ熊](https://kottke.org/19/08/the-bear-with-its-own-zip-code) - 大量の郵便を受け取るため、Smokey Bearには独自のZIP Code（`20252`）があります。
- [Costa Ricaが実在住所を使わない理由](https://www.crcdaily.com/p/why-doesnt-costa-rica-use-real-addresses) - Landmark、歴史、かなりの推測に依存する独特の住所体系を使います。
- [Regexと郵便住所](https://smartystreets.com/articles/regular-expressions-for-street-addresses) - Regular Expressionと住所が混ざらない理由。
- [悪名高い日本の郵便CSVを解析](https://www.dampfkraft.com/posuto.html) - 「多くの恐怖を見たが、この形式選択はほかで見たことがない。」
- [USPS Postal Addressing Standards](https://pe.usps.com/text/pub28/welcome.htm) - 標準化された住所形式と内容を説明。
- [`libaddressinput`](https://github.com/google/libaddressinput) - 🆓 国際郵便住所を解析、整形、検証するGoogleの共通C++・Javaライブラリ。
- [`addressing`](https://github.com/commerceguys/addressing) - 🆓 Googleのデータセットを使うPHP 5.4+住所ライブラリ。
- [`postal-address`](https://github.com/scaleway/postal-address) - 🆓 郵便住所を解析、正規化、描画するPython Module。
- [`address`](https://github.com/Boostport/address) - 🆓 Googleのデータセットで住所を検証・整形するGoライブラリ。

## 科学

- [計量系に関する誤り](https://www.stevemoser.org/posts/dev/falsehoods-programmers-believe-about-systems-of-measurement.html) - 計量系の利用と相互変換について。

## 社会

- [政治的任命に関する誤り](https://twitter.com/oliver_dw/status/737930439575404544) - 選挙システムの設計には固有の難しさがあります。
- [技術分野の女性に関する誤り](https://gist.github.com/Su-Shee/5d1a417fa9de19c15477) - STEM業界の女性に関する神話。

## ソフトウェア工学

- [バージョンに関する誤り](https://github.com/xenoterracide/falsehoods/blob/master/versions.md) - ソフトウェアReleaseへIdentityを与えるのは見た目より難しいかもしれません。
- [Build Systemに関する誤り](https://pozorvlak.livejournal.com/174763.html) - ソフトウェア構築は難しく、ソフトウェアを構築するソフトウェアの構築はさらに難しいものです。
- [未定義動作に関する誤り](https://predr.ag/blog/falsehoods-programmers-believe-about-undefined-behavior/) - 未定義動作は「何でも」引き起こし得て、その「何でも」は想像以上に広範です。
- [CPU Cacheに関する神話](https://software.rajivprab.com/2018/04/29/myths-programmers-believe-about-cpu-caches/) - Cacheの誤解は、特にConcurrencyとRace Conditionについて誤った断定を生みます。
- [Null Pointerに関する誤り](https://purplesyringa.moe/blog/falsehoods-programmers-believe-about-null-pointers/) - Null Pointerは一般のPointer以上に厄介で、ProvenanceだけでもPointerはかなり複雑です。
- [CSVに関する誤り](https://donatstudios.com/Falsehoods-Programmers-Believe-About-CSVs) - RFC4180は存在しますが決定的ではなく、広く無視されています。
- [Package Managerに関する誤り](https://kdeldycke.github.io/meta-package-manager/falsehoods.html) - PackageとそのManagerを扱います。
- [Testingに関する誤り](https://club.ministryoftesting.com/t/falsehoods-testers-believe/1371) - Testについての誤りリストを作る試み。
- [検索に関する誤り](https://opensourceconnections.com/blog/2019/05/29/falsehoods-programmers-believe-about-search/) - 検索（解析、Tokenization、Highlightを含む）が見た目以上に複雑な理由。
- [全Software Engineerが検索について知るべきこと](https://scribe.rip/p/what-every-software-engineer-should-know-about-search-27d1df99f80d) - Search Engine実装の難しさを、より良い出典で説明。
- [Paginationに関する誤り](https://www.hezmatt.org/~mpalmer/blog/2018/12/12/falsehoods-programmers-believe-about-pagination.html) - Pagination Algorithmが誰か（おそらく自分）を悩ませる理由。
- [Garbage Collectionに関する誤り](https://paul.bone.id.au/blog/2018/10/19/gc-falsehoods/) - Garbage Collectionの予測可能性と性能に関する誤解。
- [File Pathに関する神話](https://yakking.branchable.com/posts/falsehoods-programmers-believe-about-file-paths/) - File SystemとOSの多様性により、File Pathは思うより難しくなります。
- [Windows File Pathの奇妙な世界](https://www.fileside.app/blog/2023-03-17_windows-file-paths/) - 「Unix由来のシステムではPathは驚くほど単純で、`/` から始まればPathだ。Windowsでは違う。」
- [`/dev/urandom`に関する神話](https://www.2uo.de/myths-about-urandom) - `/dev/urandom` と `/dev/random` について繰り返されるいくつかの話は誤りです。
- [State Machineに関する事実](https://codeberg.org/catseye/The-Dossier/src/branch/master/article/Facts-about-State-Machines/README.md) - State Machineは誤解され、十分に適用されないことが多いものです。
- [Hi! My name is…](https://www.youtube.com/watch?v=NIebelIpdYk) - この講演は「Username（とその他のIdentifier）に関する誤り」と呼べたでしょう。
- [`mtime`に関する一般的な誤解](https://apenwarr.ca/log/20181113) - Fileの `mtime` 比較が有害と見なせる理由を扱う投稿の一部。
- [Autocompleteの規則](http://jeremymikkola.com/posts/2019_03_19_rules_for_autocomplete.html) - 厳密には誤りではありませんが、Autocomplete実装の良いPractice集。
- [Floating Point Math](https://0.30000000000000004.com) - 「言語が壊れているのではなく、Floating Point計算をしている。（…）だから多くの場合、`0.1 + 0.2 != 0.3`。」
- [地獄のYAML文書](https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell) - YAMLは偶発的な数値や文字列でないKeyなど、分かりにくい複雑さに満ちています。
- [Content Tagging Systemには果てしなく魅了される](https://twitter.com/hillelogram/status/1534301374166474752) - 最小限に見えるTagging Systemにも境界事例があります。
- [Event-Driven Systemに関する誤り](https://dimtion.fr/blog/falsehoods-event-driven/) - Event-Driven SystemとMessage Passingに関する誤解。
- [Digital Object Identifier（DOI）に関する誤り](https://pardalotus.tech/posts/2024-10-02-falsehoods-programmers-believe-about-dois/) - 研究成果などの識別・リンクに使うIdentifierについての誤解。
- [CVEに関する誤り](https://medium.com/@jonathan.leitschuh/falsehoods-people-believe-about-cves-85c1d063ffda) - CVE ≠ Vulnerability（ほか36の混同）。

## 交通

- [航空に関する誤り](https://flightaware.engineering/falsehoods-programmers-believe-about-aviation/) - 航空データは思うほど正規化されていません。
- [航空機座席表に関する誤り](https://duffel.com/blog/falsehoods-about-seat-maps) - 座席表は整然とした行・列よりはるかに複雑です。
- [空港Codeの腹立たしい混乱](https://www.youtube.com/watch?v=jfOUVYQnuhw) - 複数の国際・国内機関が歴史、実用、物流を調整するため、Codeは難解な規則に従います。
- [私の名前はあらゆる予約で問題になる！](https://web.archive.org/web/20250528134345/https://travel.stackexchange.com/questions/149323/my-name-causes-an-issue-with-any-booking-names-end-with-mr-and-mrs) - 古い航空予約システムは `MR` 接尾辞を `Mister` と解釈して削除します。

## タイポグラフィ

- [Fontに関する誤り](https://github.com/RoelN/Font-Falsehoods) - WebとDesktop ApplicationのTypographyに関する前提。
- [大文字・小文字についてプログラマーが知るべき真実](https://www.b-list.org/weblog/2018/nov/26/case/) - 大文字・小文字を題材に、誤り形式を完全に反転した記事。

## ビデオゲーム

- [The Door Problem](https://lizengland.com/blog/2014/04/the-door-problem/) - ゲームの扉を実装するとき考慮していなかったあらゆること。

## Web

- [HTMLに関する誤り](https://www.aartaka.me.eu.org/falsehoods-html) - 「Webは美しく、醜く、驚異的だ。その魅力の一部は歴史的な癖を持つHTMLにある。」
- [REST APIに関する誤り](https://web.archive.org/web/20201112010147/http://slinkp.com/falsehoods-programmers-believe-about-apis.html) - API作成・文書化時に注意すべき落とし穴。
- [URL：複雑です…](https://www.netmeister.org/blog/urls.html) - URLには多数の構成要素があり、それぞれ固有の論理を持ちます。
- [Favicon Downloadの隠れた複雑さを15以上の境界事例で説明](https://web.archive.org/web/20230604033340/https://www.simplecto.com/complexity-downloading-favicons-told-in-15-plus-edge-cases/) - Browser Tabの小さなIconを取得するだけの単純な作業が、想像以上に複雑でした。Yak Shavingをしていないか注意しましょう。

## コントリビューション

コントリビューションをいつでも歓迎します。最初に[コントリビューションガイドライン](https://github.com/kdeldycke/awesome-falsehood/blob/main/.github/contributing.md)をご覧ください。

## 脚注

このリストは過去数年、Social Mediaで一定の人気を集めました。[ほかでの議論・言及](https://github.com/kdeldycke/kdeldycke/blob/main/in-the-media.md)をご覧ください。

[Header Image](https://github.com/kdeldycke/awesome-falsehood/blob/main/assets/awesome-falsehood-header.jpg)は、[Iza Bellaが2010年2月に撮影した写真](https://commons.wikimedia.org/wiki/File:BLW_Truth_and_Falsehood.jpg)を改変したもので、[Creative Commons BY-SA 2.0 UK License](https://creativecommons.org/licenses/by-sa/2.0/uk/deed.en)で配布されています。



<a name="intro-quote-def">[1]</a>: [*Notebooks, 1914-1916*](https://openlibrary.org/isbn/1324090804) (Liveright, 2022) - [出典：14eページ](https://archive.org/details/notebooks191419100witt/page/n35)。[[↑]](#intro-quote-ref)
