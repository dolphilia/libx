---
title: "Awesome AppImage"
description: "AppImageを探すサイト、実行・統合・更新ツール、各種アプリのパッケージ化と開発資料。"
licenseSource: "github-AppImageCommunity-awesome-appimage-readme-md"
---

# Awesome AppImage

AppImageを探すカタログやストア、実行・デスクトップ統合・更新のツール、各言語のアプリをAppImageにまとめる開発用ツールと資料を探せます。

原文では、[AppImage](https://appimage.org)を、中央のストアを必要とせず、主要なLinuxディストリビューションへアプリを配布するコミュニティ主体の形式と説明しています。1つのアプリを1つのファイルにまとめる方式です。

機能、対応環境、実験的・非推奨・リンク失効の区分は、この版の原文に基づきます。現在の互換性、保守状況、外部リンクの到達性は確認していません。

## AppImageを探す <a id="appimage-discovery"></a>

### アプリカタログ <a id="app-catalogs"></a>

- [AppImage.GitHub.io](https://appimage.github.io/) - 自動テストに合格したAppImageのカタログ。上流のダウンロードページへのリンクを掲載。

### アプリストア <a id="app-stores"></a>

- [AppImageHub.com](https://www.appimagehub.com/) - [Opendesktop.org](https://www.opendesktop.org/)を基盤にする、AppImageのダウンロードサイト。
- [pling.com](https://www.pling.com/) - 作者がAppImageを含む自由な製品や創作物を公開できる、開かれたストア。
- [Manjaro Software Discover](https://software.manjaro.org/appimages) - AppImageを含む複数形式のアプリを掲載するWebアプリストア。

### アプリセンター <a id="app-centers"></a>

- [NX Software Center](https://github.com/Nitrux/nx-software-center) - 持ち運び可能なソフトウェアセンター。持ち運び可能なAppImageアプリを対象とする。
- [AppImagePool](https://github.com/prateekmedia/appimagepool) - Flutter製の、シンプルで現代的なAppImageHubクライアント。

### アプリ情報の収集 <a id="app-scrapers"></a>

- [appimages.scraper](https://github.com/azubieta/appimages.scraper) - Web上のAppImageリリースを検索するツール。
- [AppImageRadar](https://github.com/AppImage/AppImageRadar) - Travis CIを使ってGitHub上のAppImage関連の活動を検索するツール。

## AppImageを利用するツール <a id="appimage-consumption-tools"></a>

### デスクトップとの統合 <a id="desktop-integration"></a>

- [Getting Started Managing Software with AppImage on Ubuntu](https://adamtheautomator.com/appimage-ubuntu/) - 追加のソフトウェアを使わずにAppImageを管理する方法を詳しく解説。
- [go-appimaged](https://github.com/probonopd/go-appimage/tree/master/src/appimaged) - AppImageをシステムに統合する任意のデーモン。実験的。
- [appimaged](https://github.com/AppImage/appimaged) - AppImageをシステムに統合する任意のデーモン。非推奨。
- [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) - システムに統合し、AppImageの移動先として単一の`~/Applications`ディレクトリを用意するツール。アプリランチャーからの更新・削除にも対応。
- [appimagehelper](https://gitlab.com/posktomten/appimagehelper) - AppImageへのショートカットを作成・削除・管理・整理するプログラム。
- [LinuxPA](https://github.com/CalebQ42/LinuxPA) - AppImageに対応する、Linux向けのPortableApps.com型ランチャー。
- [AppImage Desktop Maker](https://github.com/Alexsussa/AIDM) - デーモンを使わずにAppImageのメニュー項目を作成するツール。
- [AppImageのサムネイル生成](https://github.com/mttbernardini/appimage-thumbnailer) - GNOME・KDE互換のデスクトップ環境のファイルマネージャーに表示するAppImageのアイコンを生成。
- [XApp Thumbnailers](https://github.com/linuxmint/xapp-thumbnailers) - AppImage形式にも対応するGTKデスクトップ環境向けサムネイル生成ツール。Caja（MATE）、Nautilus（GNOME）、Nemo（Cinnamon）、PCManFM（LXDE）、Thunar（Xfce）などのGTK系ファイルマネージャーで、AppImageにアプリのアイコンを表示。
- [AppImage To Gnome](https://github.com/DejfCold/ATG) - GNOMEデスクトップでAppImageを監視し、インストール・アンインストールするツール。
- [gnome_appimage_installer](https://github.com/knork-fork/gnome_appimage_installer) - AppImageファイル向けにfreedesktop.org仕様に沿ったデスクトップファイルを作成するBash製ツール。AppImage自体は「インストール」を必要としないため、名前はやや不正確。
- [Gear lever](https://github.com/mijorus/gearlever/) - Gear leverアプリへのドラッグ＆ドロップでAppImageをGNOMEデスクトップに統合。

### 更新ツール <a id="updaters"></a>

- [AppImageUpdate](https://github.com/AppImage/AppImageUpdate) - AppImageを更新する公式GUIアプリとコマンドラインツール。
- [AppImageUpdater](https://github.com/antony-jr/AppImageUpdater) - C++とQtで書かれた、利用者向けのシンプルな更新ツール。
- [appimage-update](https://github.com/AppImageCrafters/appimage-update) - Goで書かれたAppImage Updateの実装。
- [appimage-updater](https://pypi.org/project/appimage-updater/) - Pythonで書かれ、PyPIで配布されるAppImage Updateの実装。

### サンドボックス <a id="sandboxes"></a>

- [Firejail](https://github.com/netblue30/firejail) - AppImage対応を内蔵する、任意で利用できるサンドボックス。
- [AppImageサンドボックス化プロジェクト](https://github.com/mgord9518/aisap) - bwrapを使ったAppImageのサンドボックス化を支援するGoライブラリ。

### パッケージマネージャー <a id="package-managers"></a>

注意: AppImage形式は、パッケージマネージャーや同様のツールを必要としないよう明確に設計されています。ファイルマネージャーと、任意のシステム統合用デーモンだけで操作できます。

- [appimage-manager](https://github.com/AppImageCrafters/appimage-manager) - アプリの検索・インストール・削除・更新に対応するAppImage管理用コマンドラインツール。
- [bauh](https://github.com/vinifmor/bauh) - AppImage、Arch（リポジトリ／AUR）、Flatpak、Snap、ネイティブWebアプリに対応する、Linuxアプリ管理用GUI。
- [homebrew-appimage](https://github.com/athrunsun/homebrew-appimage) - Linuxbrew向けのAppImage用Formula集。
- [AIPM](https://github.com/michaeldelago/aipm) - AppImage用パッケージマネージャー。
- [Zap](https://github.com/srevinsaju/zap) - AppImageがなければダウンロードし、あればAppImageUpdateで更新するパッケージマネージャー。システムへの統合にも対応。
- [RookiePM](https://github.com/18fadly-anthony/rookie) - AppImageとシェルスクリプトのパッケージマネージャー。
- [AppMan](https://github.com/ivan-hc/AppMan) - APTやPacmanのように動作するAppImage管理ツール。
- [jewelrystore](https://rubygems.org/gems/jewelrystore) - Ruby製のコマンドラインAppImageストア。
- [ayy](https://github.com/lawl/ayy) - Goで書かれたAppImage用パッケージマネージャー。依存のない単一の静的バイナリ。
- [leap](https://github.com/lnxcz/leap) - Rustで書かれたシンプルなAppImage管理ツール。
- [Bread](https://github.com/pegvin/bread) - コマンドラインでGitHub上のAppImageをダウンロード・更新・削除・実行し、デスクトップに統合するツール。

### Linuxディストリビューション <a id="linux-distributions"></a>

AppImage形式はLinuxディストリビューション側の特別な対応を必要としないよう設計されていますが、標準でさまざまな程度のAppImage対応を提供するものもあります。

- [Deepin](https://www.deepin.org/en/) - 実行権限のないAppImageや他の実行ファイルをダブルクリックすると、状況を説明するダイアログを表示し、実行権限の付与と実行の許可を求める環境。
- [Nitrux](https://nxos.org/) - アプリ取得の主要形式としてAppImageを推奨し、AppImageを扱うアプリセンターを内蔵する環境。
- [Linux Mint](https://linuxmint.com/) - AppImageファイルにアプリのアイコンを表示する[AppImageサムネイル生成ツール](https://github.com/linuxmint/xapp-thumbnailers)を備える環境。
- [Zenwalk GNU Linux](http://www.zenwalk.org/) - AppImageに対応し、一部のアプリをAppImage形式で配布する環境。

## AppImage開発者向けツール <a id="appimage-developer-tools"></a>

### 低水準ツール <a id="low-level-tools"></a>

- [appimagetool](https://github.com/AppImage/AppImageKit/releases/tag/continuous) - AppDirをAppImageに変換するツール。
- [nix-bundle](https://github.com/matthewbauer/nix-bundle) - Nix derivationをAppImageに変換するツール。

### ビルドシステム <a id="build-systems"></a>

- [appimagecraft](https://github.com/TheAssassin/appimagecraft) - レシピに基づきソースからAppImageを作成するツール。
- [appimage-builder](https://github.com/AppImageCrafters/appimage-builder) - レシピに基づきソースからAppImageを作成するツール。
- [KDE Craft](https://invent.kde.org/packaging/craft) - AppImageや他の形式を生成できる、KDEで使われるビルドシステム。
- [appimage-tooling](https://gitlab.com/sgclarkkde/appimage-tooling) - AppImageを生成するRuby製ツール群。
- [AppImage.cmake](https://github.com/Ravbug/AppImage.cmake) - Linux向けAppImage実行ファイルの生成を支援するCMakeスクリプト。
- [rules_appimage](https://github.com/lalten/rules_appimage) - 任意のlang_binaryターゲットをAppImageにパッケージ化するBazelルール。

### コンパイル済みアプリの配布ツール <a id="deployment-tools-for-compiled-applications"></a>

- [go-appimagetool](https://github.com/probonopd/go-appimage/tree/master/src/appimagetool) - 依存ファイルをAppDirに配置し、AppDirをAppImageに変換するツール。実験的。
- [linuxdeployqt](https://github.com/probonopd/linuxdeployqt) - 依存ファイルをAppDirに配置してAppImageを作成するツール。Qtやその他のコンパイル済みアプリ向け。
- [linuxdeploy](https://github.com/linuxdeploy/linuxdeploy) - プラグインを使ってAppDirを作成・保守するツール。
- [XojoToAppImage](https://github.com/AlwaysOfflineSoftware/XojoToAppImage) - コンパイル済みのXojo LinuxプログラムをAppImageにパッケージ化するGUIツール。

### Pythonアプリの配布ツール <a id="deployment-tools-for-python-applications"></a>

- [python-appimage](https://github.com/niess/python-appimage) - そのまま使えるPythonのAppImage配布版。変更して自分のアプリを含めることも可能。
- [linuxdeploy-plugin-python](https://github.com/niess/linuxdeploy-plugin-python) - ソース配布物とlinuxdeployを使ってPythonをAppDirに同梱するツール。
- [linuxdeploy-plugin-conda](https://github.com/linuxdeploy/linuxdeploy-plugin-conda) - ソース配布物、Conda、linuxdeployを使ってPythonをAppDirに同梱するツール。
- [Briefcase](https://briefcase.readthedocs.io/) - AppImageなどを使ってPythonプロジェクトを独立したネイティブアプリに変換するツール。
- [pycharm-appimage-support](https://gitlab.com/chezmurray/pycharm-appimage-support) - PyCharm IDEから直接PythonプロジェクトをAppImageとして配布するツール。
- [PyAppImage](https://github.com/srevinsaju/pyappimage) - PythonからAppImageを作るシンプルなバンドルツール。

### Electronアプリの配布ツール <a id="deployment-tools-for-electron-applications"></a>

- [electron-builder](https://github.com/electron-userland/electron-builder) - 出力形式としてAppImageに対応。
- [electron-forge-maker-appimage](https://github.com/saleae/electron-forge-maker-appimage) - AppImage向けのElectron Forgeビルダー。
- [Appnativefy](https://github.com/sarweshparajuli/appnativefy) - 任意のWebサイトから、Electronブラウザーを内蔵するAppImageを作成。

### Windowsアプリの配布ツール <a id="deployment-tools-for-windows-applications"></a>

- [wine32-deploy](https://github.com/sudo-give-me-coffee/wine32-deploy) - multilibをインストールせずに64ビットLinuxで動作する、32ビットWindowsアプリのAppImageを作成。
- [AppImage For WINE](https://github.com/Hackerl/Wine_Appimage) - WINEベースのAppImageと、AppImageからWINEを起動するためのLD_PRELOADベースのパッチ。
- [ferion11/Wine_Appimage](https://github.com/ferion11/Wine_Appimage) - PlayOnLinux由来の32ビットWINE向けAppImage。multilibのないシステムでも動作。
- [GameImage](https://gitlab.com/formigoni/gameimage) - Wineまたはエミュレーターとゲームを持ち運び可能なAppImageにまとめる仕組み。Steam Deckでの利用にも役立つ可能性がある。

### Javaアプリの配布ツール <a id="deployment-tools-for-java-applications"></a>

- [nbPackager](https://github.com/trixon/nbPackager) - NetBeans PlatformアプリをJREとともにパッケージ化するツール。AppImage、Linux、macOS、Windows向け。

### .NET Core（Mono）アプリの配布ツール <a id="deployment-tools-for-net-core-mono-applications"></a>

- [Publish-AppImage for .NET](https://github.com/kuiperzone/Publish-AppImage) - .NETアプリ向けAppImageを公開するツール。
- [.NET CoreのAppImage作成例](https://github.com/ppy/osu-deploy/blob/697a49e9602502a2b7a899c0dff5383f6512d5d2/Program.cs#L207-L243) - `dotnet publish -f netcoreapp3.1 -r linux-x64`を`.cs`プログラム内から実行し、.NET Core（Mono）アプリをAppImageとして配布する例。
- [PupNet Deploy](https://github.com/kuiperzone/PupNet-Deploy) - .NETプロジェクトの公開と、配布可能なインストールファイルへのパッケージ化を1段階で行う、複数プラットフォーム対応の配布ユーティリティ。
- [DotnetPackaging](https://github.com/SuperJMN/DotnetPackaging) - .NETアプリをAppImage形式で配布するツール。

### Flashアプリの配布ツール <a id="deployment-tools-for-flash-applications"></a>

- [flash-to-appimage](https://github.com/CredibleOpossum/flash-to-appimage) - Flashゲーム（`.swf`）をAppImageにパッケージ化するスクリプト。

### Rustアプリの配布ツール <a id="deployment-tools-for-rust-applications"></a>

- [Cargo AppImage](https://github.com/StratusFearMe21/cargo-appimage) - RustプログラムをAppImageに変換するCargoプログラム。

### 他のパッケージ形式からの変換 <a id="tools-to-convert-from-other-package-formats"></a>

- [pkg2appimage](https://github.com/AppImage/pkg2appimage) - YAMLレシピを使ってdeb、zip、tar.gzなどの形式をAppImageに変換。
- [appimage2pkg](https://gitlab.com/nixtux-packaging/appimage2pkg) - AppImageを再パッケージ化し、FUSEを必要としないrpm／debを作成。
- [flatpak2appdir](https://github.com/sudo-give-me-coffee/flatpak2appdir) - FlatpakをAppDirに変換するツール。生成したAppDirはAppImageへ変換可能。
- [make-portable](https://github.com/sudo-give-me-coffee/make-portable) - インストール済みアプリをAppDirに配置するツール。straceでファイルシステム呼び出しを取得し、glibcを含むアクセス先の全ファイルをAppDirへコピー。
- [AppImage cobbler](https://gitlab.com/brinkervii/appimage-cobbler) - strace.logからAppImageに適したディレクトリを作成するPythonアプリ。
- [Elements](https://github.com/s-zeid/elements) - 最小限のAlpine Linux rootfs（圧縮時約3 MB）を使い、runcベースの単一ファイルAppImageを生成するツール。
- [arch2appimage](https://github.com/hanzala123/arch2appimage) - Arch Linuxの任意のパッケージ（公式／AUR）をAppImageに変換するPythonスクリプト。
- [appimage-bash](https://github.com/valicm/appimage-bash) - `.tar.gz`アーカイブ内のバイナリからAppImageリリースを作成するGitHub Action。
- [Package-to-appimage](https://github.com/CausaPrincipalis71/package-to-appimage) - Dockerを使って`.deb`・`.rpm`パッケージをAppImage形式に変換するツール。
- [GMAppImager](https://github.com/samuelvenable/GMAppImager) - GameMaker Studio 2のゲームをGUIでAppImageに変換。
- [AppImaGen](https://github.com/ivan-hc/AppImaGen) - Debian、または1世代前でサポート期間内のUbuntu LTS向けの任意のPPAからAppImageを生成。原文では、推奨される最古のLTSを対象にしていない点を注意事項として記載。

### メタデータ用ツール <a id="metadata-tools"></a>

- [AppStream MetaInfo Creator](https://www.freedesktop.org/software/appstream/metainfocreator/#/) - AppStreamメタ情報形式の作者による、より高機能なAppStream MetaInfoファイル生成ツール。

### 品質検査ツール <a id="qc-tools"></a>

- [appimage-testsuite](https://github.com/aferrero2707/appimage-testsuite) - 各種LinuxディストリビューションのDockerコンテナーを使うAppImageテスト環境。
- [appimagelint](https://github.com/TheAssassin/appimagelint) - AppImageの互換性や推奨手法への適合などを検査するツール。

### 継続的インテグレーション <a id="continuous-integration"></a>

- [GitHub Actionsの例](https://github.com/probonopd/Zoom.AppImage/blob/master/.github/workflows/main.yml) - GitHub ActionsでビルドしたAppImageをGitHub Releasesへアップロードする例。
- [appimage.yml](https://github.com/iotang/Project_LemonLime/blob/master/.github/workflows/appimage.yml) - GitHub ActionsでAppImageをビルド・アップロードする、規模が大きく複雑な例。
- [build-appimage-action](https://github.com/AppImageCrafters/build-appimage-action) - appimage-builderを使ってAppImageを生成するGitHub Action。
- [jniltinho/packages](https://github.com/jniltinho/packages) - go-appimagetoolを使ってAppImageを生成するDrone.ioの例。
- [GitLab CIの最新ビルド成果物へのリンク](https://gitlab.com/linuxappimage/element-desktop/-/jobs/artifacts/master/raw/Element.AppImage?job=run-build) - GitLab CIの最新ビルド成果物へ直接リンクする例。設定には注意が必要。

### ライブラリ <a id="libraries"></a>

- [QAppImageUpdate](https://github.com/antony-jr/QAppImageUpdate) - アプリに組み込める、AppImage更新用Qt5ライブラリとプラグイン。
- [AppImageServices](https://github.com/azubieta/AppImageServices) - ファイルマネージャー、ソフトウェアセンターなど向けに、AppImage操作ライブラリへの高水準インターフェースを提供するD-Busサービス。
- [libappimage](https://github.com/AppImage/libappimage) - Boostを使うC++製の、AppImageファイルを扱う機能の実装。
- [libzsync-go](https://github.com/AppImageCrafters/libzsync-go) - AppImageの更新に使えるGo製Zsync実装。
- [appenv](https://github.com/TheMarlboroMan/appenv) - `readlink("/proc/self/exe")`でアプリデータとユーザーデータの場所を判別し、C++アプリをファイルシステム内で移動可能にする小さなC++ライブラリ。

### テンプレート <a id="templates"></a>

- [Qt Desktop Template](https://github.com/stemoretti/qt-desktop-template) - linuxdeployqtによるAppImage生成に対応した、Qt Widgetsデスクトップアプリのテンプレート。
- [qt-hello-world](https://github.com/AppImageCrafters/qt-hello-world) - appimage-builderでAppImageを作成するQt Hello Worldプロジェクト。
- [qt-qml-project-template-with-ci](https://github.com/219-design/qt-qml-project-template-with-ci) - GitHub CI、GUI自動テスト、コード形式の自動検査などを備えるQt／QMLアプリのテンプレート。Linux（AppImage）、Mac、Android向けにコンパイル可能。
- [mini-qml](https://github.com/patrickelectric/mini-qml) - Linux（AppImage）、Windows、macOS、WebAssembly向けに配布できる、最小限のQMLアプリのテンプレート。
- [wxWidgetsTemplate](https://github.com/Ravbug/wxWidgetsTemplate) - 設定済みファイルとIDEプロジェクトを備え、AppImageに対応する、wxWidgets C++向けの複数プラットフォーム対応アプリテンプレート。
- [Briefcase Linux AppImage Template](https://github.com/beeware/briefcase-linux-appimage-template) - Linuxで動作するPythonアプリをAppImageにパッケージ化するCookiecutterテンプレート。

## 資料 <a id="resources"></a>

### 仕様 <a id="specs"></a>

- [AppImageSpec](https://github.com/AppImage/AppImageSpec) - AppImage形式の公式仕様。
- [Desktop Entry Specification](https://specifications.freedesktop.org/desktop-entry-spec/latest/) - AppImage内で使われるメタデータの仕様。

### 文書 <a id="documentation"></a>

- [docs.appimage.org](https://docs.appimage.org/) - AppImageの公式文書。
- [appimage-builder.readthedocs.io](https://appimage-builder.readthedocs.io/) - チュートリアルや例などを含むappimage-builderの文書。

### チュートリアル <a id="tutorials"></a>

- [Produce an AppImage that bundles everything with go-appimage](https://www.youtube.com/watch?v=XTGn_JqmDu0) - 必要なライブラリをすべて同梱し、ビルド環境より新しいシステムだけでなく古いシステムでも動作することを目指すAppImageの作成方法。

### 記事 <a id="articles"></a>

- [The Background Story of AppImage](https://itsfoss.com/appimage-interview/) - AppImageの作者に、構想の主要な考え方や動機を聞くインタビュー。
- [Flatpak, Snap and AppImage](https://distrowatch.com/weekly.php?issue=20160704#opinion) - DistroWatchでJesse SmithがAppImage、Flatpak、Snapを論じる記事。
- [Don't Install, Just Copy with klik](https://dot.kde.org/2005/09/16/dont-install-just-copy-klik) - AppImageの始まりを理解するための2005年の記事。歴史的資料として掲載。

### 動画 <a id="videos"></a>

- [AppImage: Portable applications for Linux](https://www.youtube.com/watch?v=nzZ6Ikc7juw) - 創設者によるAppImageの公式紹介動画。
- [Comparing Linux Package Formats - Deb, Flatpak, AppImage, etc.](https://www.youtube.com/watch?v=7fPShv-8Z_4) - Bryan Lundukeによる動画。
- [AppImage: Universal Linux Apps, Overview and Thoughts](https://www.youtube.com/watch?v=tMqES2pNxYY) - LearnLinuxTVのJeremy "Jay" LaCroixによる動画。
- [AppImage system integration on Ubuntu using go-appimaged](https://www.youtube.com/watch?v=L00UjifUEfE) - go-appimageの実装に含まれる新しいappimagedデーモンの紹介。
- [Integrate and Manage AppImages with AppImageLauncher](https://www.youtube.com/watch?v=D2WA2zdLvVk) - Eric Adamsによる動画。

### 書籍 <a id="books"></a>

- [Mastering Qt 5](https://www.amazon.de/Mastering-Qt-stunning-cross-platform-applications-ebook/dp/B07DH9YK9Q/) - linuxdeployqtを使ってQtアプリをLinux向けにパッケージ化・配布する方法を扱う節を収録。

### ブログ <a id="blogs"></a>

- [Planet AppImage](https://appimage.gitlab.io/planet/) - AppImage全般を扱うブログ記事の集約サイト。
- [TheAssassin Blog](https://assassinate-you.net/tags/appimage/) - TheAssassinによる、AppImage関連の話題を扱うブログ。
- [AppImage Crafters Blog](https://appimagecrafters.github.io/) - azubietaによる、AppImageの作成と利用を扱うブログ。

### コミュニティ <a id="community"></a>

- [libera.chatの#AppImageチャンネル](https://web.libera.chat/#AppImage) - AppImageの開発者と利用者のチャット。すぐに回答がない場合は、数日間チャンネルに滞在することも想定。
- [discourse.appimage.org](https://discourse.appimage.org/) - 利用者とアプリ開発者のためのAppImage公式フォーラム。
- [Stack Overflow](https://stackoverflow.com/tags/AppImage) - Stack Overflowで`[appimage]`タグが付いた質問。
- [r/AppImage/](https://www.reddit.com/r/AppImage/) - RedditのAppImageコミュニティ。

### その他 <a id="miscellaneous"></a>

- [AppImage wiki](https://github.com/AppImage/AppImageKit/wiki) - AppImage公式Wiki。
- [AppImageZip](https://github.com/sagebind/appimagezip) - Zipを基盤のファイルシステムイメージとして使う、Rustだけで書かれた実験的なAppImageランタイム実装。
- [help-wanted](https://github.com/search?q=user%3Aappimage+label%3Ahelp-wanted+state%3Aopen&type=Issues) - AppImageチームが協力を求めている課題の一覧。
- [appdwarf](https://github.com/Phantop/appdwarf) - ローカルファイルまたはURLで指定したAppDirや既存AppImageを、dwarfsで高圧縮の持ち運び可能なイメージに変換するツール。

### 関連資料 <a id="related"></a>

- [類似プロジェクト](https://github.com/AppImage/AppImageKit/wiki/Similar-projects) - 他のパッケージシステムとの比較。

### 他のAwesomeリスト <a id="other-awesome-lists"></a>

- [awesome-linuxdeploy](https://github.com/linuxdeploy/awesome-linuxdeploy) - linuxdeployのAwesomeリスト。
- [すべてのAwesomeリスト](https://github.com/topics/awesome) - GitHub上のAwesomeリスト一覧。

### 原文で失効とされるリンク <a id="expired-links"></a>

- [App Outlet](https://app-outlet.github.io/) - AppImage、Flatpak、Snapに対応する汎用アプリストア。
- [appimage2desktop](https://github.com/me1ting/appimage2desktop) - AppImage用のデスクトップファイルとアイコンをシステム内に作成するツール。他の機能は持たない。
- [AppImage-Integrator](https://github.com/w-j-r/AppImage-Integrator) - Qt6で書かれた、AppImageをLinuxデスクトップに統合するシンプルなプログラム。
- [Get AppImage](https://g.sreve/get-appimage/) - AppImageを1つのサイトに集め、検索機能を提供。
- [AppStream Generator](https://output.jsbin.com/qoqukof) - アプリ作者がAppImageへ説明・スクリーンショット・リンクなどのメタデータを追加するための、シンプルなAppStream MetaInfoファイル生成ツール。
