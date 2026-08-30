---
title: "johnjago/awesome-free-software"
description: "johnjago/awesome-free-software の定本スナップショット"
licenseSource: "github-johnjago-awesome-free-software-readme-md"
---

# Awesome Free Software [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

このリストのソフトウェアは、誰もがあらゆる目的で利用、変更、共有できる条件で配布されています。最も一般的なライセンスは[MIT License](https://choosealicense.com/licenses/mit/)と[GNU GPL](https://choosealicense.com/licenses/gpl-3.0/)ですが、これらの権利を付与する[その他多数のライセンス](https://choosealicense.com/appendix/)もあります。

## 目次

- [ソフトウェア](#software)
  - [音声](#audio)
  - [コマンドラインツール](#command-line-tools)
  - [コミュニケーション](#communication)
  - [ファイル管理](#file-management)
  - [ファイル共有](#file-sharing)
  - [グラフィックス](#graphics)
  - [IDE](#ides)
  - [オフィス](#office)
  - [オペレーティングシステム](#operating-systems)
  - [その他](#other)
  - [決済](#payments)
  - [科学研究](#scientific-work)
  - [スクリーンキャスト](#screencasting)
  - [テキストエディター](#text-editors)
  - [ユーティリティ](#utilities)
  - [動画](#video)
  - [仮想化](#virtualization)
  - [Webアプリケーション](#web-applications)
  - [Webサーバー](#web-servers)
- [ハードウェア](#hardware)
  - [企業](#companies)
  - [ハードウェアリソース](#hardware-resources)
- [リソース](#resources)
  - [記事](#articles)
  - [ブログ](#blogs)
  - [企業](#businesses)
  - [探索](#discovery)
  - [イベント](#events)
  - [ライセンス](#licensing)
  - [組織](#organizations)
  - [その他のリスト](#other-lists)
  - [人物](#people)
  - [講演](#talks)
- [ライセンス](#license)

## ソフトウェア

### 音声

- [Audacity](http://www.audacityteam.org/) - 音声の録音と後処理。([GNU GPLv2+](http://www.audacityteam.org/about/license/))
- [Ardour](https://ardour.org/) - Digital Audio Workstation（DAW）。([GNU GPLv2](https://ardour.org/copying.html))
- [Libre.fm](https://libre.fm/) - 音楽を無料でストリーミング、ダウンロード、リミックス、共有します。([GNU AGPLv3](https://git.gnu.io/gnu/gnu-fm/blob/master/COPYING))
- [LMMS](https://lmms.io/) - 完全なDigital Audio Workstation。([GNU GPLv2+](https://github.com/LMMS/lmms/blob/master/LICENSE.txt))
- [mStream](http://mstream.io/) - 複数デバイス間で音楽を同期・ストリーミングするソフトウェアスイート。([GNU GPLv3](https://github.com/IrosTheBeggar/mStream/blob/master/LICENSE))
- [Nuclear Music Player](https://nuclear.js.org/) - 無料の配信元から音楽を自動的に見つけるストリーミング音楽プレーヤー。([GNU AGPLv3](https://github.com/nukeop/nuclear/blob/master/LICENSE))

### コマンドラインツール

- [asciinema](https://asciinema.org/) - 端末セッションレコーダー。([GNU GPLv3](https://github.com/asciinema/asciinema/blob/develop/LICENSE))
- [Clipboard](https://github.com/Slackadays/Clipboard) - コマンドラインだけで、どこでもあらゆるものを切り取り、コピー、貼り付けできます。([GNU GPLv3](https://github.com/Slackadays/Clipboard/blob/main/LICENSE))
- [Cygwin](http://cygwin.com/) - Linuxシステムで一般的な多数のツールを利用できる、Windows向けUnix風環境。([GNU GPLv3](https://cygwin.com/COPYING))
- [Logdissect](https://github.com/dogoncouch/logdissect/) - ログファイルなどのデータを分析するCLIユーティリティとPython API。([MIT](https://github.com/dogoncouch/logdissect/blob/master/LICENSE))
- [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) - SSH、Telnet、SCP、rloginプロトコル、およびRaw Socket接続に対応するリモート端末エミュレーター。([MIT](http://www.chiark.greenend.org.uk/~sgtatham/putty/licence.html))
- [ranger](https://ranger.github.io/) - GNU/Linux向けの最小限で軽量かつ美しいファイルエクスプローラー。端末ウィンドウで動作するためi3などのWindow Managerによく適合します。viキーバインディングにより、名前変更や削除を含む操作をすばやく実行できます。([GNU GPLv3](https://github.com/ranger/ranger/blob/master/README.md))
- [GNU stow](https://www.gnu.org/software/stow/) - ファイルシステム上の別々のディレクトリに置かれたソフトウェアやデータの個別パッケージを、同じ場所にインストールされているように見せるSymlink Farm Manager。([GNU GPLv3](https://github.com/ranger/ranger/blob/master/README.md))
- [SimpleLocalize](https://github.com/simplelocalize/simplelocalize-cli) - ソフトウェアプロジェクトのi18nキーを管理するオープンソースツール。
- [Localizely](https://github.com/localizely/localizely-cli) - ソースコードとLocalizelyプラットフォームの間でローカライズファイルを同期するオープンソースツール。([MIT](https://github.com/localizely/localizely-cli/blob/main/LICENSE))
- [Kit CLI](https://github.com/jozu-ai/kitops?tab=readme-ov-file) - Kitfileを使ってModelKitの作成、管理、実行、デプロイを行うオープンソースMLOpsツール。新しいモデルのパッケージ化から既存モデルのデプロイまで、ワークフローを容易に効率化できます。([Apache License 2.0](https://github.com/jozu-ai/kitops/blob/main/LICENSE))

### コミュニケーション

- [Conversations](https://conversations.im/) - Android向けXMPP／Jabberクライアント。([GNU GPLv3](https://github.com/siacs/Conversations/blob/master/LICENSE))
- [Gajim](https://gajim.org/) - デスクトップ向けXMPP／Jabberクライアント。([GNU GPLv3](https://dev.gajim.org/gajim/gajim/blob/master/COPYING))
- [Jitsi Meet](https://jitsi.org/jitsi-meet/) - WebRTCを使う安全なビデオ会議とデスクトップ共有。([Apache License 2.0](https://github.com/jitsi/jitsi-meet/blob/master/LICENSE))
- [Mail-in-a-Box](https://mailinabox.email/) - クラウドコンピューターへ容易にデプロイできるメールサーバーパッケージ。([CC0](https://github.com/mail-in-a-box/mailinabox/blob/master/LICENSE))
- [Matrix](https://matrix.org/) - 分散型で永続的、相互運用可能な通信のオープン標準。([Apache License 2.0](https://github.com/matrix-org/synapse/blob/master/LICENSE))
- [Mattermost](https://mattermost.com/) - Slackに代わるオープンソースのプライベートクラウド。([ライセンス](https://www.mattermost.org/licensing/))
- [ProtonMail](https://protonmail.com/) - 安全なWebベースのメールサービス。([MIT](https://github.com/ProtonMail/WebClient/blob/public/license.md))
- [Ring](https://ring.cx/) - 分散サービスを介した電話、遠隔会議、メディア共有。([GNU GPLv3](https://ring.cx/en/about/practical))
- [Signal](https://signal.org/) - デスクトップ、Android、iOS向けのプライベートなメッセージングと通話。([GNU GPLv3](https://github.com/WhisperSystems/Signal-Android/blob/master/LICENSE))
- [Tox](https://tox.chat/) - 音声、動画、画面共有を備えた暗号化・分散型メッセージングプラットフォーム。([GNU GPLv3](https://github.com/TokTok/c-toxcore/blob/master/COPYING))
- [Tutanota](https://tutanota.com/) - ビジネスアカウントにも対応する無料の暗号化メール。([GNU GPLv3](https://github.com/tutao/tutanota/blob/master/LICENSE.txt))

### ファイル管理

- [7-Zip](http://7-zip.org/) - 圧縮ファイルを作成・展開するファイルアーカイバー。([GNU LGPLv2.1+](http://www.7-zip.org/faq.html))
- [Filestash](http://www.filestash.app) - ユーザーが独自のバックエンド（FTP、SFTP、WebDAV、S3、Minioなど）を利用できるDropbox風Webクライアント。([GNU AGPLv3](https://github.com/mickael-kerjean/filestash/blob/master/LICENSE))
- [FileZilla](https://filezilla-project.org/) - 汎用FTPソリューション。([GNU GPLv2+](https://filezilla-project.org/license.php))
- [Mikochi](https://github.com/zer0tonin/Mikochi) - リモートフォルダーの閲覧、ファイル管理（アップロード、削除、名前変更、ダウンロード）、VLC／mpvへの直接ストリーミングを行うWebインターフェース。([MIT](https://github.com/zer0tonin/Mikochi/blob/main/LICENSE))
- [WinSCP](https://github.com/winscp/winscp) - Windows向けSFTP・FTPクライアント。([GNU GPLv3](https://github.com/winscp/winscp/blob/master/license.txt))

### ファイル共有

- [qBittorrent](https://www.qbittorrent.org/) - 使いやすいBitTorrentクライアント。([GNU GPLv2+](https://raw.githubusercontent.com/qbittorrent/qBittorrent/master/COPYING))
- [Sharry](https://eikek.github.io/sharry/) - ファイルをアップロードし、共有可能なURLを取得できる便利なファイル共有Webアプリケーション。([GNU GPLv3+](https://github.com/eikek/sharry/blob/master/LICENSE.txt))

### グラフィックス

- [Blender](https://www.blender.org/) - モデリング、シミュレーション、アニメーション向け3D制作スイート。([GNU GPLv2+](https://www.blender.org/about/license/))
- [ExifCleaner](https://exifcleaner.com/) - 簡単なDrag and Dropで画像・動画からEXIFメタデータを削除するGUIアプリ。([MIT](https://github.com/szTheory/exifcleaner/blob/master/LICENSE))
- [GIMP](http://www.gimp.org/) - 画像編集ソフトウェア。([GNU GPLv3](https://www.gimp.org/about/COPYING))
- [Inkscape](https://inkscape.org) - 全プラットフォーム向けプロフェッショナルVector Graphics Editor。([GNU GPL](https://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/view/head:/COPYING))
- [Krita](https://krita.org) - アーティストが作ったペイントプログラム。([GNU GPLv3](https://phabricator.kde.org/source/krita/browse/master/COPYING))
- [Pinta](https://pinta-project.com/) - Paint.NETのGtk#クローン。([MIT](https://github.com/PintaProject/Pinta/blob/master/license-mit.txt))
- [Piskel](http://www.piskelapp.com/) - オンラインSprite Editor。([Apache License 2.0](https://github.com/juliandescottes/piskel/blob/master/LICENSE))

### IDE

- [Eclipse](https://www.eclipse.org/eclipseide/) - 最新のJavaバージョンとその他の言語に対応する拡張可能なIDE。([EPL](http://www.eclipse.org/legal/epl-v10.html))
- [IntelliJ IDEA Community Edition](https://github.com/JetBrains/intellij-community) - 開発者の生産性最大化を目的とするJava／Android IDE。([Apache License 2.0](https://github.com/JetBrains/intellij-community/blob/master/LICENSE.txt))

### オフィス

- [LibreOffice](https://www.libreoffice.org/) - ワープロ、表計算、プレゼンテーションプログラムを備えたOffice Suite。([MPLv2](https://www.libreoffice.org/about-us/licenses/))
- [Open Office](https://github.com/apache/openoffice) - オープン標準に基づく高機能なOffice Productivity Suite。([Apache License 2.0](https://github.com/apache/openoffice/blob/trunk/LICENSE))
- [Zathura](https://git.pwmt.org/pwmt/zathura) - 高度にカスタマイズ可能で機能的なDocument Viewer。最小限で省スペースなインターフェースと、主にキーボード操作を重視した使いやすさを提供します。([zlib License](https://git.pwmt.org/pwmt/zathura/raw/master/LICENSE))

### オペレーティングシステム

- [Debian](https://www.debian.org/) - 非自由ソフトウェアをシステムへ含めないことを掲げる、最初期のUnix風オペレーティングシステムの一つ。([DFSG](https://en.wikipedia.org/wiki/Debian_Free_Software_Guidelines))
- [Devuan](https://devuan.org/) - systemdを含まないDebianのフォーク。([ライセンス](https://devuan.org/os/source-code))
- [PureOS](https://pureos.net/) - FSFが承認したDebian派生版。（複数ライセンス）
- [LineageOS](https://lineageos.org/) - スマートフォンとタブレット向けAndroidディストリビューションで、CyanogenModの後継。（複数ライセンス）
- [Arch](https://www.archlinux.org/) - シンプルさを維持する軽量で柔軟なLinuxディストリビューション。([GNU GPLv2](https://www.archlinux.org/packages/core/any/licenses/))

### その他

- [Disroot](https://disroot.org/) - このリストにある多数のサービスをホストして提供します。（複数ライセンス）
- [OpenMapTiles](https://openmaptiles.org/) - OpenStreetMapの地図を50以上の言語でセルフホストするためのオープンソースツール集。Raster／Vector Tile、GISプログラム向けWMS／WMTSサービス、JavaScript Viewer、Mobile SDK対応を提供します。([BSD](https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md))
- [ZeroNet](https://zeronet.io/) - Bitcoin暗号技術とBitTorrentネットワークを使う分散型Webサイト。([GNU GPLv2](https://raw.githubusercontent.com/HelloZeroNet/ZeroNet/master/LICENSE))
- [Simple Mobile Tools](https://simplemobiletools.github.io/) - 煩わしい広告や不要な権限がなく、WidgetをカスタマイズできるAndroidアプリ。
- [IP2Trace](https://github.com/ip2location/ip2location-traceroute) - IP2Locationデータベースを使って位置情報を表示するTracerouteツール。([MIT](https://github.com/ip2location/ip2location-traceroute/blob/master/LICENSE))

### 決済

- [Electrum](https://electrum.org) - Wallet Recovery、分散サーバー、オフライン保管を提供する軽量Bitcoinクライアント。([MIT](https://github.com/spesmilo/electrum/blob/master/LICENCE))
- [GNU Taler](https://taler.net) - オンライン決済向けの現金に似たシステム。([GNU GPL](https://taler.net/en/developers.html))

### 科学研究

- [DocEar](http://www.docear.org/) - Mind Mapping技術を使う文献管理。([GNU GPLv2+](https://github.com/Docear/Desktop/blob/master/docear_framework/license.txt))
- [JabRef](https://www.jabref.org) - BibTeX／BibLaTeXを使って参考文献と添付PDFを管理します。LibreOfficeにも対応します。([MIT](https://github.com/JabRef/jabref/blob/master/LICENSE.md))

### スクリーンキャスト

- [OBS Studio](https://obsproject.com/) - 全プラットフォーム向け画面録画・動画ストリーミングアプリケーション。([GNU GPLv2](https://github.com/jp9000/obs-studio/blob/master/COPYING))
- [ShareX](https://getsharex.com/) - 画面取得、ファイル共有、生産性向上ツール。([GNU GPLv3](https://github.com/ShareX/ShareX/blob/master/LICENSE.txt))
- [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/) - 高度にカスタマイズ可能なGUIスクリーンキャストプログラム。([GNU GPLv3](http://www.maartenbaert.be/simplescreenrecorder/#license))

### テキストエディター

- [Atom](https://atom.io/) - Hack可能なテキスト・ソースコードエディター。（アーカイブ済み）([MIT](https://raw.githubusercontent.com/atom/atom/master/LICENSE.md))
- [Pulsar](https://pulsar-edit.dev/) - コミュニティ主導の高度にHack可能なText Editor。Atomからフォーク。([MIT](https://raw.githubusercontent.com/pulsar-edit/pulsar/master/LICENSE.md))
- [Emacs](https://www.gnu.org/software/emacs/) - 拡張・カスタマイズ可能なFree／Libre Text Editor、そしてそれ以上。([GNU GPL](http://www.free-soft.org/gpl_history/emacs_gpl.html))
- [GNU nano](https://www.nano-editor.org/) - コマンドライン向けの簡潔なText Editor。([GNU GPL](https://www.nano-editor.org/dist/v2.7/README))
- [vim](https://www.vim.org/) - あらゆるテキストの作成と変更を非常に効率的にする、高度に設定可能なText Editor。([GNU GPL compatible](https://vimhelp.org/uganda.txt.html#license))
- [VS Code](https://github.com/microsoft/vscode) - Microsoft製Source Code Editor。([MIT](https://github.com/microsoft/vscode/blob/main/LICENSE.txt))
- [Notepad++](https://notepad-plus-plus.org/) - 拡張可能なテキスト・ソースコードエディター。([GNU GPLv2+](https://raw.githubusercontent.com/notepad-plus-plus/notepad-plus-plus/master/LICENSE))

### ユーティリティ

- [Grayscale Mode](https://github.com/rkbhochalya/grayscale-mode) - メニューバーまたはKeyboard Shortcut（⌥⌘G）からGrayscale Filterをすばやく切り替えられるオープンソースmacOSアプリ。([MIT](https://github.com/rkbhochalya/grayscale-mode/blob/master/LICENSE))
- [Markdownify](https://markdownify.js.org) - 最小限のMarkdown Editor。([MIT](https://github.com/amitmerchant1990/electron-markdownify/blob/master/LICENSE.md))
- [Sandman](https://alexanderepstein.github.io/Sandman/) - 計算したSleep Cycleに基づき、コンピューターを切って眠る時刻を知らせます。([MIT](https://github.com/alexanderepstein/Sandman/blob/master/License.md))
- [Search Deflector](https://spikespaz.com/search-deflector) - Windows Start MenuまたはCortanaからの検索を、好みのブラウザーと検索エンジンへ転送する小さなプログラム。([MIT](https://github.com/spikespaz/search-deflector/blob/master/LICENSE))
- [Wireshark](https://www.wireshark.org/) - ネットワークのトラブルシューティングと分析向けPacket Analyzer。([GNU GPLv2](https://code.wireshark.org/review/gitweb?p=wireshark.git;a=blob_plain;f=COPYING;hb=HEAD))
- [Espanso](https://github.com/federico-terzi/espanso) - クロスプラットフォームText Expander。([GNU GPLv3](https://github.com/federico-terzi/espanso/blob/master/LICENSE))
- [Freeter](https://freeter.io/) - 仕事に必要なすべてをプロジェクトとワークフロー別に一か所へまとめ、すばやくアクセスできます。Windows、Linux、Mac OS向け。([GNU GPLv3](https://github.com/FreeterApp/Freeter/blob/master/COPYING))

### 動画

- [NewPipe](https://newpipe.schabi.org/) - Android向け軽量YouTube Frontend。([GNU GPLv3](https://github.com/TeamNewPipe/NewPipe/blob/master/LICENSE))
- [Kodi](https://kodi.tv/) - Home Theaterソフトウェア兼Entertainment Hub。([GNU GPLv2](https://github.com/xbmc/xbmc/blob/master/README.md))
- [VLC](http://www.videolan.org/vlc/) - 多様な音声・動画形式に対応するMultimedia Player。([GNU GPLv3](http://www.videolan.org/videolan/))
- [youtube-dl](https://rg3.github.io/youtube-dl/) - YouTubeなどの動画サイトから動画をダウンロードする高機能Command Line Program。([Unlicense](https://github.com/rg3/youtube-dl/blob/master/LICENSE))
- [MPV](https://mpv.io/) - Script対応のカスタマイズ可能なMultimedia Player。([GNU GPLv2](https://github.com/mpv-player/mpv/blob/master/LICENSE.GPL/))

### 仮想化

- [QEMU](http://www.qemu-project.org/) - 汎用的なオープンソースMachine Emulator・Virtualizer。([GNU GPLv2](http://wiki.qemu-project.org/License))
- [VirtualBox](https://www.virtualbox.org/) - 多数のオペレーティングシステムに対応する高機能Virtualization Tool。([GNU GPLv2](https://www.virtualbox.org/wiki/GPL))

### Webアプリケーション

- [Cloverleaf](https://cloverleaf.app) - Passwordをどこにも保存せず、Password Managerを置き換えるオープンソースアプリ。([MIT](https://github.com/cloverleaf/web/blob/master/LICENSE))
- [Dnote](https://www.getdnote.com/) - 複数デバイス同期とWebインターフェースを備えた簡潔なCommand Line Notebook。([GNU AGPLv3](https://github.com/dnote/dnote/blob/master/licenses/AGPLv3.txt))
- [DocuSeal](https://www.docuseal.co/) - 電子文書への記入と署名を行うプラットフォーム。([GNU AGPLv3](https://github.com/docusealco/docuseal/blob/master/LICENSE))
- [Etherpad](http://etherpad.org/) - リアルタイム共同文書編集。([Apache License 2.0](https://github.com/ether/etherpad-lite/blob/develop/LICENSE))
- [Ghost](https://ghost.org/) - オンライン出版物を構築・運営するHack可能なプラットフォーム。([MIT](https://github.com/TryGhost/Ghost/blob/master/LICENSE))
- [GitLab](https://about.gitlab.com/installation/) - コードのライフサイクル全体を扱うGit Repository Manager。([MIT](https://gitlab.com/gitlab-org/gitlab-ce/raw/master/LICENSE))
- [GNU social](https://gnu.io/social/) - PHPで書かれたMicroblogging Server。([GNU GPLv3](https://git.gnu.io/gnu/gnu-social/blob/master/COPYING))
- [Gogs](https://gogs.io/) - 軽量でクロスプラットフォーム、セルフホスト型のGitサービス。([MIT](https://github.com/gogits/gogs/blob/master/LICENSE))
- [Healthchecks](https://healthchecks.io/) - Cron Job監視サービス。([BSD 3-clause](https://github.com/healthchecks/healthchecks/blob/master/LICENSE))
- [Inventaire](https://inventaire.io/welcome) - 友人やコミュニティと本を共有します。([GNU AGPLv3](https://github.com/inventaire/inventaire/blob/master/LICENSE.md))
- [Lobsters](https://lobste.rs/) - 低評価理由を説明できるリンク集約・議論サイト。([BSD 3-clause](https://github.com/lobsters/lobsters/blob/master/LICENSE))
- [Mastodon](https://joinmastodon.org/) - 分散型Social Network Server。([GNU AGPLv3](https://github.com/tootsuite/mastodon/blob/master/LICENSE))
- [MediaGoblin](http://mediagoblin.org/) - あらゆる種類のメディア向けPublishing Platform。([GNU AGPLv3](http://mediagoblin.org/))
- [MediaWiki](https://www.mediawiki.org) - 頻繁にアクセスされる大量のデータを整理・配信できるWikiソフトウェア。([GNU GPLv2+](https://www.mediawiki.org/wiki/Copyright))
- [MetaGer](https://metager.de/en) - サーバーへGreen Electricityを使う非営利団体が作成したPrivate Search Engine。([GNU AGPLv3](https://gitlab.metager3.de/open-source/MetaGer/blob/development/LICENSE))
- [Neocities](https://neocities.org/) - 現代版GeoCities。([BSD 2-clause](https://github.com/neocities/neocities/blob/master/LICENSE.txt))
- [NotABug.org](https://notabug.org/) - 自由ライセンスのプロジェクト向けCollaboration Platform。([MIT](https://notabug.org/hp/gogs/src/master/LICENSE))
- [OpenStreetMap](https://www.openstreetmap.org) - ユーザーが作成し、Open Licenseで公開する世界地図。([GNU GPLv2](https://git.openstreetmap.org/rails.git/blob/HEAD:/LICENSE))
- [PeerTube](https://framagit.org/chocobozzz/PeerTube) - 分散型Video Streaming Service。([GNU AGPLv3](https://framagit.org/chocobozzz/PeerTube/blob/develop/LICENSE))
- [Phabricator](https://phacility.com/phabricator/) - PHPで構築されたCode Management Platform（GitLabに類似）。([Apache License 2.0](https://github.com/phacility/phabricator/blob/master/LICENSE))
- [Tolgee](https://tolgee.io) - 開発者と翻訳者に使いやすいWebベースのLocalization Platform。([Apache License 2.0](https://github.com/tolgee/tolgee-platform/blob/main/LICENSE))
- [Wallabag](https://wallabag.org/en) - 記事を保存・分類し、後で自由に読めます。([MIT](https://github.com/wallabag/wallabag/blob/master/COPYING.md))
- [Weblate](https://weblate.org) - Version Control統合を備えたTranslation Management System。([GNU GPLv3](https://github.com/WeblateOrg/weblate/blob/master/COPYING))
- [WordPress](https://wordpress.org/) - Blog Publishing Platform・Content Management System。([GNU GPLv2+](https://wordpress.org/about/gpl/))

### Webサーバー

- [Apache HTTP Server](https://httpd.apache.org/) - 安全で効率的かつ拡張可能なWeb Server。([Apache License 2.0](http://www.apache.org/licenses/))
- [lighttpd](http://www.lighttpd.net/) - 標準準拠、安全性、柔軟性を維持しつつ、速度が重要な環境向けに最適化されています。([Revised BSD license](http://www.lighttpd.net/assets/COPYING))
- [nginx](https://nginx.org/) - HTTP・Reverse Proxy Server、Mail Proxy Server、汎用TCP／UDP Proxy Server。([2-clause BSD-like license](https://nginx.org/LICENSE))

## ハードウェア

### 企業

- [Aleph Objects](https://www.alephobjects.com/) - Libreなハードウェアとソフトウェアで構築されたRespects Your Freedom（RYF）認証3Dプリンター。
- [Libiquity](http://www.libiquity.com/) - 組み込みソフトウェアとFirmware Systemを設計・開発します。
- [Purism](https://puri.sm/) - プライバシー、セキュリティ、自由を重視したコンピューターとソフトウェア。
- [Raptor Computing Systems](https://raptorcs.com/) - IBM POWER9プロセッサーとOpenBMC Firmwareを利用するデスクトップ、Motherboard、その他の部品。
- [Technoethical](https://tehnoetic.com/) - Free Operating Systemと互換性のあるLaptop、Adapter、Mobile Device。
- [ThinkPenguin](https://www.thinkpenguin.com/) - Proprietary Softwareを含まない最新のLaptop、Desktop、Printer。
- [Vikings](https://vikings.net/) - Libreboot Firmware、Libre Software、Green Energyで運営され、ハードウェアも販売するHosting Company。

### ハードウェアリソース

- [disaster.radio](https://disaster.radio/) - Free Softwareと手頃なOpen Hardwareで構築された、電力網から独立する太陽光発電の長距離Mesh Network。
- [h-node](https://h-node.org/) - 完全にFreeなOperating Systemで動作するハードウェアのデータベース。
- [Linux Preloaded](https://linuxpreloaded.com/) - Free Softwareをプリインストールしたコンピューターを販売する、多地域のVendorを厳選したリスト。
- [Respects Your Freedom Hardware Certification](https://www.fsf.org/resources/hw/endorsement/criteria) - Free Software FoundationのRYF認証を得るための要件。

## リソース

### 記事

- [Free Software](https://en.wikipedia.org/wiki/Free_software) - Free Softwareを扱うWikipedia記事。
- ['Libre' Software: Turning Fads into Institutions?](https://www.sciencedirect.com/science/article/pii/S0048733302000033) - Libre Softwareとその持続可能性を経済的に分析する学術論文。
- [Software Freedom](https://devuan.org/os/free-software) - Free Softwareが重要な理由をDevuanが短く簡潔に説明します。

### ブログ

- [BrainBlasted's Privacy and Free Software Blog](https://brainblasted.gitlab.io/) - Free Softwareとプライバシーに関する問題を実践的に考察します。

### 企業

- [Bytemark](https://www.bytemark.co.uk/company/manifesto/) - Free Softwareを公開する人へ50%割引を提供する、透明性の高い英国のHosting Company。

### 探索

- [Free Software Directory](https://directory.fsf.org/wiki/Main_Page) - 15,000を超えるFree Software Package。
- [Free GNU/Linux Distributions](https://www.gnu.org/distros/free-distros.html) - 完全にFreeなディストリビューション。
- [freepost](https://freepo.st/) - Free Cultureに関するあらゆる情報。

### イベント

- [LibrePlanet](https://libreplanet.org/) - Free Softwareに関する年次カンファレンス。
- [Software Freedom Day](https://en.wikipedia.org/wiki/Software_Freedom_Day) - Free Softwareとその長所への認知を高めることを目的とした、Free Softwareの年次世界的祝典。

### ライセンス

- [FOSSology](https://www.fossology.org/) - ソフトウェアプロジェクト向けLicense Compliance Toolkit。
- [gplenforced.org](https://gplenforced.org/) - コミュニティ志向のGPL Enforcement。

### 組織

- [April](https://www.april.org/) - Free Softwareの普及と擁護。
- [Digital Freedom Foundation](https://en.wikipedia.org/wiki/Digital_Freedom_Foundation) - 技術を介した知識へのアクセスを促進します。
- [Framasoft](https://framasoft.org/) - Free Software、革新的なプロジェクト、共有と協力の世界を世界的に推進するネットワーク。
- [Free Software Foundation](https://www.fsf.org/) - コンピューターユーザーの自由を促進する世界的使命を持つ非営利団体。
- [Free Software Movement Karnataka](https://fsmk.org/) - Free Softwareへの認知を広めるインド・Bengaluruの団体。
- [Free Software Movement of India](http://fsmi.in/) - インドのFree Software団体による連合。
- [FSF India](http://gnu.org.in/) - FSFのインド姉妹サイト。
- [FSFE](https://fsfe.org/) - FSFの欧州姉妹サイト。
- [FSFLA](http://www.fsfla.org/ikiwiki/) - FSFの中南米姉妹サイト。
- [GNU](https://www.gnu.org/) - GNU／Linuxオペレーティングシステムの本拠地。
- [Open Source Hardware Association](https://www.oshwa.org/) - ユーザーの自由を尊重するハードウェアを促進します。
- [Outreachy](https://www.outreachy.org/) - 過小評価されている背景を持つ人々がFOSSソフトウェア企業でインターンシップを見つけられるよう支援します。
- [Peers](https://peers.community/) - Free Projectの支援と成長を助けるコミュニティ。
- [Software Freedom Conservancy](https://sfconservancy.org/) - Free、Libre、Open Source Softwareプロジェクトの促進、改善、開発、擁護を支援する慈善団体。
- [Software Freedom Law Center](https://www.softwarefreedom.org/) - Free、Libre、Open Source Softwareの作者へ無償の法律サービスを提供します。
- [Snowdrift.coop](https://snowdrift.coop/) - Public Goods向けCrowdmatching。
- [TuxFamily](https://www.tuxfamily.org/) - Libre Project向けの無料Hostingなどのサービス。

### その他のリスト

- [Awesome Humane Tech](https://github.com/engagingspaces/awesome-humane-tech) - 倫理、透明性、プライバシーを重視するプロジェクトのリスト。
- [Awesome Self-Hosted](https://github.com/Kickball/awesome-selfhosted) - ローカルでホストできるFLOSS Network Service・Web Applicationのリスト。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin) - Free Softwareのシステム管理ツール一覧。

### 人物

- [Maxime Lathuilière](https://maxlath.eu/) - Freeな社会を実現するため、Libre Softwareを通じて情報とリソースを再編成しています。

### 講演

- [Agustín Benito: Free Software、その先へ（TEDxLaLaguna）](https://www.youtube.com/watch?v=_2Qq072wIDk)（スペイン語）
- [Eben Moglen: Free Softwareを発見した経緯](https://www.youtube.com/watch?v=uKxzK9xtSXM)
- [Prof. Nagarjuna G: Digital IndiaのためのFree Software](https://www.youtube.com/watch?v=O1A4UZqPtMQ)
- [Richard Stallman: Free Software、Free Society（TEDxGeneva 2014）](https://www.youtube.com/watch?v=Ag1AKIl_2GM)
- [Stephen Fry: Free Software](https://www.youtube.com/watch?v=YGbMbF0mdPU)
- [Wrishiraj Kaushik: 私はFree Software Guyではない](https://www.youtube.com/watch?v=KQCC5oSfAYo)

### ドキュメンタリー

- 2019年: [Hacking for the Commons、Philippe Borrel](https://vimeo.com/channels/1540870/393778517)。

## ライセンス

[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
