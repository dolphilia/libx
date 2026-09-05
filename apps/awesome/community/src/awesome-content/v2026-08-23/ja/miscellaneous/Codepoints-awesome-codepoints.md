---
title: "Awesome Code Points"
description: "Code Pointsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Codepoints-awesome-codepoints-readme-md"
---

# Awesome Code Points

Code Pointsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

1. [単独のコードポイント](#standalone-code-points)
2. [他へ影響するコードポイント](#code-points-that-affect-others)
    1. [他の文字を分離・接着するもの](#breaking-and-gluing-other-characters)
3. [記録保持者と極値](#record-holders-and-extremes)
4. [お楽しみ](#for-funsies)
    1. [ゲーム](#games)
5. [その他のコードポイント一覧](#other-lists-of-code-points)
6. [貢献](#contributing-your-code-points)
7. [ライセンス](#license)

## 単独のコードポイント

* Unicodeブロックの[罫線素片]
    (https://codepoints.net/box_drawing)（U+2500からU+257F）と[ブロック要素]
    (https://codepoints.net/block_elements)（U+2580からU+259F）のコードポイントは、等幅コマンドラインでの可視化の大半を満たします。

        ╭───────╮
        │Unicode│
        │rules! │
        ╰┬─────┬╯
* [U+2E2E](https://codepoints.net/U+2E2E) REVERSED QUESTION MARK - 皮肉・アイロニーを表す「皮肉記号」。便利な文字&#x2E2E;。
* [U+D800](https://codepoints.net/U+D800)から
    [U+DFFF](https://codepoints.net/U+DFFF) - サロゲートコードポイント。[UTF-16符号化]
    (https://en.wikipedia.org/wiki/UTF-16)を容易にするためだけに予約されています。
* [U+FEFF](https://codepoints.net/U+FEFF) ZERO WIDTH NO-BREAK SPACE - 名前が示すようにU+2060 WORD JOINERのように使えます。実際、後者はその意味論を引き継ぐために導入されました。これはU+FEFFが、UTF-8ファイルの先頭に置かれる[バイト順マーク]
    (https://en.wikipedia.org/wiki/Byte_order_mark)という特別な標識になったためです。準拠ソフトウェア（多くのテキストエディターを含む）では、この文字はファイル先頭から除去されメタデータとして扱われます。非準拠ソフトウェア（PHPインタープリターなど）では、さまざまな愉快な挙動を招きます。
* [U+FFFD](https://codepoints.net/U+FFFD) REPLACEMENT CHARACTER - 文字を表示できない場合（例: 誤ったUTF-8列の復号時）に、このコードポイントが代役を務めます。
* [U+1D455](https://codepoints.net/U+1D455)は欠けています。これはイタリック体小文字の「h」になるはずでした。プランク定数ℎ（[U+210E]
    (https://codepoints.net/U+210E)）と同一になるため符号化されませんでした。
* [U+FF03](https://codepoints.net/U+FF03) FULLWIDTH NUMBER SIGN - 「日本語ハッシュタグ」である`＃`。Twitterのようなサイトでは、通常の`#`（[U+0023]
    (https://codepoints.net/U+0023)）と同じものとして受け入れられます。

## 他へ影響するコードポイント

* [U+202D](https://codepoints.net/U+202D)と
    [U+202E](https://codepoints.net/U+202E) - テキスト方向を変更します。関連するXKCD:

    [![](http://imgs.xkcd.com/comics/rtl.png )](https://xkcd.com/1137/)
* [U+FE0E](https://codepoints.net/U+FE0E) VARIATION SELECTOR-15 - 白黒絵文字を強制します。このコードポイントが絵文字に続くと、絵文字の明示的なモノクロ表示が要求されます（クライアントが対応している場合）。
* [U+FE0F](https://codepoints.net/U+FE0F) VARIATION SELECTOR-16 - カラー絵文字を強制します。このコードポイントが絵文字に続くと、絵文字の明示的なカラー表示が要求されます（クライアントが対応している場合）。
* ダイアクリティカルマークと結合文字: 前の文字へ追加する[多数の文字]
    (https://codepoints.net/search?gc=Mn)があり、これらを結合文字と呼びます。Unicodeには詳細を説明する[便利なFAQ]
    (http://unicode.org/faq/char_combmark.html)があります。要するに、文字の後に追加するとその前の文字の上に置かれます。つまり`a + ̊ = å`です。一部の組み合わせには事前合成文字があるため、さまざまな面白い問題につながる場合があります。この小さな`å`はU+00E5としても符号化できます。これは長さ1文字ですが、`a`と結合リングの組み合わせは2文字です。

    もちろん、StackOverflowの[この回答](http://stackoverflow.com/a/1732454/113195)のように、これらの文字で遊ぶこともできます。
* [地域指示記号](https://codepoints.net/U+1F1E6..U+1F1FF)U+1F1E6からU+1F1FFは、26個のラテン文字に似ています。これらは国旗絵文字の作成に使われます。Unicodeコンソーシアムは国際政治に関わりたくなかったため、これら26文字を国のISOコードに対応して組み合わせる方法を採りました。例:

    国 | ISOコード | コードポイント | 絵文字（対応時）
    ---|----------|----------------|---------------
    米国 | US       | U+1F1FA + U+1F1F8 | &#x1F1FA;&#x1F1F8;
    ドイツ | DE       | U+1F1E9 + U+1F1EA | &#x1F1E9;&#x1F1EA;
    中国 | CN       | U+1F1E8 + U+1F1F3 | &#x1F1E8;&#x1F1F3;
* 絵文字の肌色: 絵文字の肌色を制御するコードポイントは5つあり、[U+1F3FBからU+1F3FF]
    (https://codepoints.net/U+1F3FB..U+1F3FF)です。「Emoji Modifier Fitzpatrick Type」1から6と呼ばれ、1が最も淡く6が最も濃いものです。これらの文字のいずれかが絵文字に続くと、その絵文字は[Fitzpatrick尺度]
    (https://en.wikipedia.org/wiki/Fitzpatrick_scale)における適切な肌色で表示されます。この修飾子がない場合、肌色は不自然、たとえば明るい黄色であるべきです。興味深い点として、Fitzpatrick修飾子は通常のコードポイントなので、肌色付きの絵文字は長さ2となり、Twitterユーザーが最初に気付きました。以下は[仕様から直接引用した]
    (http://www.unicode.org/reports/tr51/tr51-2.html#Diversity)比較表です:

    コード | 名称 | サンプル
    -------|------|---------
    U+1F3FB | EMOJI MODIFIER FITZPATRICK TYPE-1-2 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2.png" alt="" height="20" width="auto"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2-bw.png" alt="" height="20" width="auto">
    U+1F3FC | EMOJI MODIFIER FITZPATRICK TYPE-3 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3.png" alt="" height="20" width="auto"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3-bw.png" alt="" height="20" width="auto">
    U+1F3FD | EMOJI MODIFIER FITZPATRICK TYPE-4 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4.png" alt="" height="20" width="auto"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4-bw.png" alt="" height="20" width="auto">
    U+1F3FE | EMOJI MODIFIER FITZPATRICK TYPE-5 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5.png" alt="" height="20" width="auto"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5-bw.png" alt="" height="20" width="auto">
    U+1F3FF | EMOJI MODIFIER FITZPATRICK TYPE-6 | <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6.png" alt="" height="20" width="auto"> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6-bw.png" alt="" height="20" width="auto">

### 他の文字を分離・接着するもの

* [U+00A0](https://codepoints.net/U+00A0) NO-BREAK SPACE - 隣接する文字をくっつけます。HTMLでは`&nbsp;`としてよく知られています。
* [U+00AD](https://codepoints.net/U+00AD) SOFT HYPHEN - HTMLでは`&shy;`。ZERO WIDTH SPACEと似ていますが、改行が発生した場合に限りハイフンを表示します。
* [U+200B](https://codepoints.net/U+200B) ZERO WIDTH SPACE - U+00A0の逆で、空白を作らずに単語分割を許可します。
* [U+200D](https://codepoints.net/U+200D) ZERO WIDTH JOINER - 隣接文字（例: アラビア文字や対応絵文字）を結合させます。Appleは異なる家族などの絵文字を合成するために使用します。
* [U+2060](https://codepoints.net/U+2060) WORD JOINER - U+00A0と同じですが完全に不可視です。Twitterで`@font-face`を書くのに適しています。

どのコードポイントがどの効果を持つかを比較しやすくするため、次の表を参照してください:

               | U+00A0 | U+00AD | U+200B | U+200D | U+2060
---------------|--------|--------|--------|--------|--------
空白を作る     |   ✓    |   ✗    |   ✗    |   ✗    |   ✗
分割を許可     |   ✗    |   ✓    |   ✓    |   ✗    |   ✗
変化の可能性   |   ✗    |   ✓    |   ✗    |   ✓    |   ✗

Smashing Magazineは、さまざまな空白文字を扱う[包括的な記事](http://www.smashingmagazine.com/2015/10/space-yourself/)を掲載しました。

## 記録保持者と極値

* [U+0000](https://codepoints.net/U+0000) &lt;control> - 最初のコードポイント。
* [U+10FFFF](https://codepoints.net/U+10FFFF)（_非文字_） - 最後のコードポイント。U+10FFFEを除くその平面の残り、0x10000から0x10FFFDの範囲のコードポイントは私用文字であり、将来のUnicode標準で決して埋められないことが保証されています。
* [U+1F402](https://codepoints.net/U+1F402) OX - 最短の名前。
* U+1FBA8 BOX DRAWINGS LIGHT DIAGONAL UPPER CENTRE TO MIDDLE LEFT AND MIDDLE RIGHT TO LOWER CENTREおよびU+1FBA9 BOX DRAWINGS LIGHT DIAGONAL UPPER CENTRE TO MIDDLE RIGHT AND MIDDLE LEFT TO LOWER CENTRE - 最長の名前: それぞれ88文字。
* [U+FDFA](https://codepoints.net/U+FDFA) ARABIC LIGATURE SALLALLAHOU ALAYHE WASALLAM - 最長の分解形式: 18文字。
* [U+5146](https://codepoints.net/U+5146)と
    [U+16B61](https://codepoints.net/U+16B61) - 最大の「1桁」の数を表すコードポイント。どちらも1兆（1,000,000,000,000）です。
* [U+0F33](https://codepoints.net/U+0F33) TIBETAN DIGIT HALF ZERO - 最小の「1桁」の数であると同時に唯一の負の数、-½を表すコードポイント。
* 最も役に立たないコードポイントの栄冠は
    [U+0080](https://codepoints.net/U+0080)、
    [U+0081](https://codepoints.net/U+0081)と
    [U+0099](https://codepoints.net/U+0099)に贈られます。これらC1制御文字はいわば未定義です。後にUnicodeのISO標準版となるISO 10646の最初のバージョンに含まれていたためUnicodeへ入りました。それらは実現しなかったISO 2022のアップグレードの[一部になるはずでした]
    (http://unicode.org/mail-arch/unicode-ml/y2015-m10/0050.html)。
* この点で僅差の2位はCJK統合漢字の
    [妛](https://codepoints.net/U+599B)、[挧](https://codepoints.net/U+6327)、[暃](https://codepoints.net/U+6683)、[椦](https://codepoints.net/U+6926)、[槞](https://codepoints.net/U+69DE)、[蟐](https://codepoints.net/U+87D0)、[袮](https://codepoints.net/U+88AE)、[閠](https://codepoints.net/U+95A0)、[駲](https://codepoints.net/U+99F2)、[墸](https://codepoints.net/U+58B8)、[壥](https://codepoints.net/U+58E5)、[彁](https://codepoints.net/U+5F41)。これらのいわゆる[「幽霊文字」](https://www.dampfkraft.com/ghost-characters.html)は、日本のJIS規格経由でUnicodeに入りました。JISを原印刷資料から編集した際、別の字を読み違え・誤解釈したため追加されたものです。
* [U+006F](https://codepoints.net/U+006F) LATIN SMALL LETTER O - 紛らわしい形を持つ文字のリストの先頭です。[紛らわしい文字の一覧]
    (http://www.unicode.org/reports/tr39/#Data_Files)にある可能な対応のうち、小文字の「o」は似た字形を73個持ち、70個の[U+006C](https://codepoints.net/U+006C) LATIN SMALL LETTER Lが続きます。
* [U+1F4C0](https://codepoints.net/U+1F4C0) DVD - 母音を含まない唯一のコードポイント名（[出典](https://twitter.com/ken_lunde/status/960188623390846976)）。
* [U+3106C](https://codepoints.net/U+3106C) CJK UNIFIED IDEOGRAPH 3106C - 最も多くの
    [画数](https://en.wikipedia.org/wiki/Chinese_character_strokes)を持つ文字: 84画。ゆっくり書いてみてください。

## お楽しみ

* [U+1680](https://codepoints.net/U+1680) OGHAM SPACE MARK - ダッシュのように見える空白。プログラマーを狂気へ近づけるのに最適です: `1 +  2 === 3`。
* [U+037E](https://codepoints.net/U+037E) GREEK QUESTION MARK - セミコロンにそっくりです。開発者を困らせる面白い方法でもあります。
* [U+1DD2](https://codepoints.net/U+1DD2) COMBINING US ABOVE - 最もロマンチックなコードポイント。
* [U+F8FF](https://codepoints.net/U+F8FF) PRIVATE USE CODEPOINT - 多くのAppleデバイスではAppleロゴとして表示される私用コードポイント。
* [U+1F574](https://codepoints.net/U+1F574) MAN IN BUSINESS SUIT LEVITATING - 後方互換性のため、Webdingsフォントでの表示だけを理由にUnicodeに入った、やや奇妙な文字。
* [U+1F596](https://codepoints.net/U+1F596) RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS - バルカン式敬礼。長寿と繁栄を！&#x1F596;
* [U+1F918](https://codepoints.net/U+1F918) SIGN OF THE HORNS - ロックオン！&#x1F918;
* [U+2800](https://codepoints.net/U+2800) BRAILLE PATTERN BLANK - 6個または8個の点が一つも埋まっていない点字パターン。標準では「この文字は多くのフォントで固定幅の空白として描画されるが、空白として振る舞わない」とされます。実質的には空白として表示されますが、空白ではないと指定されているため、空白を検証する正規表現には一致しません。空白を禁止・トリミングする各種検証を回避するために利用できます。

### ゲーム

プレーンテキストのゲーム用途では、Unicodeには完全なセットがいくつも揃っています:

* [チェス駒](https://codepoints.net/U+2654..U+265F)。
* [トランプのスート](https://codepoints.net/U+2660..U+2667)と、ジョーカーおよび裏面を含む完全な[トランプ一組]
    (https://codepoints.net/playing_cards)。
* [サイコロの目](https://codepoints.net/U+2680..U+2685)と素敵な[サイコロ絵文字]
    (https://codepoints.net/U+1F3B2)。
* [碁石](https://codepoints.net/U+2686..U+2689)。
* [ドラフツ（またはチェッカー）の駒](https://codepoints.net/U+26C0..U+26C3)。
* [将棋の駒](https://codepoints.net/U+2616,U+2617,U+26C9,U+26CA)、
    [日本版チェス](https://en.wikipedia.org/wiki/Shogi)。
* [ドミノ牌](https://codepoints.net/domino_tiles)
* [麻雀牌](https://codepoints.net/mahjong_tiles)

## その他のコードポイント一覧

* [Cross-platform terminal characters](https://github.com/ehmicky/cross-platform-terminal-characters) - 大半のターミナルで動作する文字の一覧。

## コードポイントへの貢献

詳細は[貢献ガイド](https://github.com/Codepoints/awesome-codepoints/blob/f12da2cf61a38f0c0e1d72e27192f91c05daf2e4/CONTRIBUTING.md)を参照してください。

## ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[貢献者](https://github.com/Codepoints/awesome-codepoints/graphs/contributors)はこの作品に対するすべての著作権および関連・隣接権を放棄しています。詳細は[ライセンスファイル](https://github.com/Codepoints/awesome-codepoints/blob/f12da2cf61a38f0c0e1d72e27192f91c05daf2e4/LICENSE)を参照してください。
