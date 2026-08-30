---
title: "Awesome Radio"
description: "Radioを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-kyleterry-awesome-radio-readme-md"
---

# Awesome Radio

Radioを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 一般

### リンク

* [Radio (wikipedia)](http://en.wikipedia.org/wiki/Radio)
* [Radio Spectrum (wikipedia)](http://en.wikipedia.org/wiki/Radio_spectrum)
* [Skywave (skip) (wikipedia)](http://en.wikipedia.org/wiki/Skywave)
* [Mystery signal from a
  helicopter](http://www.windytan.com/2014/02/mystery-signal-from-helicopter.html)
* [Portable SDR](http://hackaday.io/project/1538-PortableSDR)
* [N0NBH's Solar-Terrestrial Data](http://www.hamqsl.com/solar2.html) - 現在の太陽地球データと、HF 伝搬・伝搬予報への影響の説明。

## CB

市民バンド無線、すなわち CB は、ほぼあらゆる目的で誰でも利用できるよう公開された双方向無線スペクトルです。米国その他の多くの国で、運用に免許は不要です。CB は 26.965 MHz から 27.405 MHz の 40 チャンネルで構成され、チャンネル 09 は緊急用です。

CB はトラック運転手や無線愛好家に人気ですが、その有用性はそれだけに留まりません。人気のトラック輸送ルートでの長距離移動に優れています。チャンネル 19（非公式の運転手チャンネル）を受信すれば、リアルタイム交通情報、代替ルート、事故警告を得られます。

適切に調整された良好なアンテナでは、CB の想定範囲は通常約 2〜5 マイル（3.2〜8 キロメートル）です。

### 一般的な利用

多くの情報は Jeep・トラック運転手フォーラムから得ました。私の経験では、聞こえる CB 送信の半分ほどに何らかのハンドルネームが含まれます。悪態も多く聞くため、誤って「fuck」や「shit」と言ってしまっても気にする必要はないでしょう。

CB は公開されています。非常に公開されています。現在の世代はほぼ携帯電話だけを使うため、CB 無線機のような「原始的」なものを使うことは本質的に[世界への放送](http://en.wikipedia.org/wiki/Citizens_band_radio#Working_skip)であることを忘れがちです。

トラック運転手はチャンネル 19 を使う傾向があります。交通状況の監視に適したチャンネルです。

チャンネル 9 は緊急専用です。このチャンネルで一般的な会話はしません。故障・車両火災時には、911 への連絡に加えて助けを求める送信に適しています。

ポートランド周辺では、チャンネル 6、17、28 で多くの会話を聞きます。楽しい会話に適したチャンネルです。

### SWR

[SWR](http://en.wikipedia.org/wiki/Standing_wave_ratio)、つまり定在波比は、アンテナを無線機へ接続するときの効率測定です。

最適比は 1:1 ですが、おそらく 1.3:1 程度になります。2:1 より高い値は無線機を損傷し、送信品質を悪化させるため避けるべきです。[SWR の調整方法](http://www.rightchannelradios.com/tuning-cb-antenna-adjusting-swr)を読んでください。

### モバイル CB の取り付け

CB を正しく取り付けることは、A）無線ハードウェアを損傷しないこと、B）受信・送信の両方で良好な範囲・品質を得ることの鍵です。

以下の記事の助言に従うと、品質のよいセットアップを確保できます。

### リンク

* [Right Channel Radios](http://www.rightchannelradios.com/) - パーツ、無線機、アンテナ、マウント向けの優れたオンラインショップ。
* [CB Slang](http://www.cbslang.com/) - 主にユーモラスだが、やや役立つ。
* [CB Slang (wikipedia)](http://en.wikipedia.org/wiki/List_of_CB_slang)
* [CB Talk and etiquette](http://www.jeepforum.com/forum/f8/cb-radio-etiquette-jeep-trail-1169815/)
* [Skip](http://cbradiomagazine.com/Articles/How%20to%20Shoot%20Skip.htm)
* [Silly CB Handles](http://www.somethingawful.com/news/cb-handles/)
* [CB FAQ](http://www.advancedspecialties.net/cb-radio-faq.htm)
* [Frequency Table](http://www.radioreference.com/apps/db/?aid=7731)

## SDR（ソフトウェア定義無線）

ソフトウェア定義無線は、通常はフィルター・増幅器のようなハードウェアであるコンポーネントを、ソフトウェアとして定義する方法です。以前から存在しますが、SDR 実行に必要なデジタル電子機器がますます安価になり、SDR で遊び構築するハッカーが増えています。

この節への貢献者を募集します。

### リンク

* [Gqrx](http://gqrx.dk/)
* [sdrsharp on .NET](http://sdrsharp.com)

### ハードウェア
* __推奨の入門ハードウェア__ 低価格帯では、
  [RTL-SDR](http://sdr.osmocom.org/trac/wiki/rtl-sdr) は非常に安価な USB
  ドングルであり、その周囲には活発なコミュニティが形成されています。
* 価格帯の反対側では、[pervices](http://www.pervices.com/)
  がすべての通信を記録する必要がある場合の高スループット PCIe デバイスを提供します。ただしソフトウェア・コミュニティサポートは弱いです（@outofculture を責められます）。
* [大きな
  リスト](https://gnuradio.org/redmine/projects/gnuradio/wiki/Hardware)で、すべての互換ハードウェアを参照できます。
* アンテナは独自の選択肢・トレードオフの集合であり、私は何も知りません。

### ソフトウェア
使用しているハードウェアにより、試すためのデモソフトウェアが付属する場合があります。これは波を見て何が可能か理解し始めるには最適です。そうでなければ、[GNU
Radio](https://gnuradio.org/redmine/) に時間を費やすことになります。主にライブラリですが、処理ブロックを組み合わせ、Python を出力する補助 GUI もあります。慣れれば、デバイス調整、設定、I/O に GNURadio を使い、信号操作の数学には numpy を使えます。

信号を可視化し手動で検査するだけでも、信号の扱いを学ぶうえで価値があります。[Baudline](http://www.baudline.com/) は古く扱いにくいものですが、最良です。UI の習得は容易ではないことを覚悟してください。

## アマチュア無線（別名ハム無線）

アマチュア無線という趣味には長く誇らしい伝統があります。最初の無線アマチュアは真の無線技術の先駆者でした。アマチュアは初期無線技術の多くを「発明」・洗練し、新しい無線受信機を持つ少数の人々へ音楽、ラジオ劇、情報を送信した最初の人々でした。

第二次世界大戦後、アマチュア無線の趣味は発展しました。世界中の学校で無線クラブが生まれ、子どもたちは毎晩帰宅して新しい装置を作るか、無線で誰かと会話しました。これらの若者は技術専門職の中心となり、今日使う現代技術の多くを開発しました。
([WIA](http://www.wia.org.au/licenses/foundation/about/))

[What is Ham Radio?](http://www.arrl.org/what-is-ham-radio)

### リンク

* American Radio Relay League - [ARRL](http://www.arrl.org/)
* The Wireless Institute of Australia [WIA](http://www.wia.org.au/)
* Radio Society of Great Britain - [RSGB](http://rsgb.org/)
* Pakistan Amateur Radio Society - [PARS](http://www.pakhams.com/)
* [The International Amateur Radio Union](http://www.iaru.org/)
* [Japanese asteroid mission](http://www.arrl.org/news/amateur-radio-transponder-will-accompany-japanese-asteroid-mission-into-deep-space)
* [Slow-scan Television](https://en.wikipedia.org/wiki/Slow-scan_television)

この節への貢献者を募集します。

### アマチュア無線免許

* [米国](http://www.arrl.org/getting-licensed)には Technician、General、Extra の 3 つの免許区分があります。
* オーストラリアの [The Foundation Licence](http://www.wia.org.au/licenses/foundation/about/)オーストラリアに在
* 英国の [Foundation Licence]
  (http://rsgb.org/main/clubs-training/for-students/foundation/)。
* パキスタンでは、
  [パキスタン](http://www.pakhams.com/index.php?option=com_content&view=article&id=75&Itemid=92)でまず SWL（Short Wave Listener）会員を申し込み、その後[HAM
  License へ申請](http://www.pta.gov.pk/index.php?option=com_content&view=article&id=466%3Aamateur-wireless-license&catid=138%3Aguidelines&Itemid=349)できます。

## 公衆衛生・安全

米国の警察・消防は通常トランク型無線で通信します。このため、トランク追跡機能なしに通常の受信機でスキャンすることは困難です。詳細は[トランキング](#trunking)節を参照してください。

### トランキング

公衆衛生・安全に厳密に特有ではありませんが、トランク型無線について話すとき通常最初に思い浮かぶものです。

トランク型無線は、複数組織が他組織の会話を聞かずに少数の実周波数スペクトルを共有できるデジタル双方向通信の形式です。ユーザーは論理チャンネル・グループを選択でき、基地局は送信用の空いている周波数を見つけます。

### リンク

* [Project 25](http://www.project25.org/)
* [Project 25 wikipedia](http://en.wikipedia.org/wiki/Project_25)
* [Trunked Radio wikipedia](http://en.wikipedia.org/wiki/Trunked_radio_system)
