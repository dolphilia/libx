---
title: "CHANGELOG"
licenseSource: "xxhash-library"
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>記録した確認では、文書専用のライセンス表記は見つかりませんでした。Libxの運用方針に基づき、この注記とともにソフトウェアコンポーネントのBSD-2-Clauseライセンスを文書に適用します。これは運用上の判断であり、新たに許可を得たことを意味しません。</p>\n<p>固定したソフトウェアのバージョン：<strong>0.8.4</strong>。ソースコミット：<code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>。非公式の日本語訳です。書式、内部リンク、および明示した編集注記はLibxによる変更です。</p>\n<p><a href=\"/docs/xxhash/v0-8-4/ja/03-notices/library-root/\">library-root</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/CHANGELOG\">固定した原典</a> · <a href=\"/docs/xxhash/source/v0-8-4/CHANGELOG.txt\">原文のダウンロード</a></p>"}]
---

v0.8.4
- 性能：RISC-V Vector拡張（RVV）の実装を追加。@zijianli1234、@BoBoDai、@camel-cdrによる。
- 性能：LoongArch LASXの実装を追加し、LSXを改善。@24bit-xjkpによる。
- 性能：AArch64ではSVEよりNEONを優先し、XXH3を25-40%高速化。@Nicoshevによる。
- 性能：非常に小さい更新でのXXH3ストリーミング速度を改善。@aleksazrの提案による。
- API：`XXH_memcpy()`、`XXH_memset()`、`XXH_memcmp()`をコンパイル時に別の処理へ振り向けられるようにした。
- API：複雑なC++統合向けに、新しいビルドマクロ`XXH_NO_EXTERNC_GUARD`を追加。
- CLI：64ビットシードに対応（`-s`、`--seed`）。@d06iによる。
- CLI：ファイル名の後にもオプションを置けるようにした。`--`でオプション解析を終了する。#1098は@unterkomplexの報告による。
- CLI：読み取りエラー後も後続ファイルの処理を続ける。#1064は@ZoomRmcの報告による。
- CLI：長いWindowsパスや特殊なWindowsパスに対応。#1060。@t-matによる#1061を基にした。
- CLI：ベンチマークの精度、エラー処理、単位ラベルを改善。#1051は@calgrayの報告による。
- 修正：厳密なエイリアシングの下で、GCCが非整列読み取りを誤ってコンパイルする場合があった。#1013は@lassipulkkinenによる。
- 修正：`XXH_INLINE_ALL`と`XXH_NAMESPACE`およびx86実行時ディスパッチとの互換性を修正。@pps83による。#1071は@Dr-Hexの報告による。
- 修正：`extern "C"`ブロック内でシステムヘッダーをインクルードすることを回避。#1122は@andreas-schwabの報告による。
- 修正：MSVCのリンク時最適化、および警告をエラーとして扱う設定でのコンパイルを修正。#1038は@mi2thinkの報告による。
- ビルド：クロスコンパイルと非x86ターゲット向けの実行時ディスパッチ検出を改善。@eworm-deの協力による。#1081は@PotMJの報告による。
- ビルド：`LIBXXH_DISPATCH=1`を静的ライブラリーと動的ライブラリーの両方に適用。#1058は@xiotaの報告による。
- ビルド：Makeビルドで設定ごとにオブジェクトを分離し、テストの並列ビルドに対応。
- ビルド：CMake統合を`build/cmake`へ移し、クロスコンパイル検出を改善。
- インストール：WindowsとFreeBSDでパッケージのメタデータとインストールパスを改善。@iwamatsu、@chitao1234、@sunpoetによる。
- 移植性：GCC < 8を使うARMでのコンパイルを修正。@mstorsjoによる。
- 移植性：SolarisとillumosでのC++コンパイルを修正。@luqmanaによる。
- 移植性：AVX-512の実装でAVX-512BWが不要になった。@NexusXeによる。
- 文書：`xxhsum`の文書を拡充し、アルゴリズム仕様ファイルを明確化。
- 文書：非暗号学的な衝突特性、特にXXH3の中程度の入力の処理経路について文書化（#1127、@thomasahleによる）。

v0.8.3
- 修正：`XXH3_128bits_withSecretandSeed()`が、特定の条件の組み合わせで不正な結果を生成する場合があった。#894は@hltjによる。
- CLI：x86/x64でベクトル拡張を実行時に検出。既定で有効。
- CLI：新しいコマンド`--filelist`と`--files-from`を追加。@Ian-Clowesによる。
- CLI：XXH3の64ビットGNU形式を生成・検査できるようにした（コマンド`-H3`）。
- 移植性：LoongArch SX SIMD拡張に対応。@lrzlinによる。
- 移植性：AIXでビルドできるようにした。@likemaの提案による。
- 移植性：SPARC CPUで検証。

v0.8.2
- 修正：XXH3のS390xベクトル実装を修正（@hzhuang1）。
- 修正：IBM XLコンパイラーでのPowerPCベクトルのコンパイルを修正（@MaxiBoether）。
- 性能：SIMD128を使ってWASMを2倍/3倍高速化（@easyaspi314）。
- 性能：ARM NEON上のXXH3を高速化（+20%）（@easyaspi314）。
- CLI：/LF文字を含むファイル名を修正（@t-mat）。
- CLI：--checkファイル内の#コメント行に対応（@t-mat）。
- CLI：--binaryと--ignore-missingコマンドに対応（@t-mat）。
- ビルド：-Ogでのコンパイルを修正（@easyaspi314、@t-mat）。
- ビルド：cmakeによるpkgconfig生成を修正（@ilya-fedin）。
- ビルド：iccでのコンパイルを修正。
- ビルド：cmakeのインストールディレクトリを修正。
- ビルド：バイナリーサイズを減らす新しいビルドオプションXXH_NO_XXH3、XXH_SIZE_OPT、XXH_NO_STREAMを追加（@easyaspi314）。
- ビルド：専用のインストールターゲットを追加（@ffontaine）。
- ビルド：cmakeでDISPATCHモードに対応（@hzhuang1）。
- 移植性：Visual + clang-clでビルドするときのx86dispatchを修正（@t-mat）。
- 移植性：XXH3のSVEベクトル実装を追加（@hzhuang1）。
- 移植性：XXH_NO_STDLIBを使って、フリースタンディング環境との互換性を確保。
- 移植性：Haikuでビルドできるようにした（@Begasus）。
- 移植性：m68kとrisc-vで検証。
- 文書：XXH3仕様を追加（@Adrien1018）。
- 文書：doxygen文書を改善（@easyaspi314、@t-mat）。
- その他：専用の健全性テスト用バイナリーを追加（@t-mat）。

v0.8.1
- 性能：XXH3のストリーミング版、特にgccとmsvcで性能を大幅に改善。
- 性能：小さい入力でのXXH64の速度とレイテンシーを改善。
- 性能：ランダムな大きさの小さい入力で、XXH32の速度とレイテンシーをわずかに改善。
- 性能：XXH32とXXH64のスタック使用量をわずかに改善。
- API：新しい実験的な版XXH3_*_withSecretandSeed()を追加。
- API：XXH3_generateSecret()を更新し、任意の大きさ（>= XXH3_SECRET_SIZE_MIN）のシークレットを生成できるようにした。
- CLI：xxhsumで、コマンド`-H3`を使ってXXH3チェックサムを生成・検査できるようにした。
- ビルド：新しいビルドマクロXXH_NO_XXH3で、XXH3を含めずにxxhashをビルドできるようにした。
- ビルド：MSVCでのxxh_x86dispatchビルドを修正。@apankratによる。
- ビルド：XXH_NAMESPACEまたは以前のXXH_INLINE_ALLの後でも、XXH_INLINE_ALLを常に安全に使えるようにした。
- ビルド：PPC64LEのベクトル対応を改善。@mpeによる。
- インストール：pkgconfigを修正。@ellertによる。
- インストール：Haikuとの互換性を確保。@Begasusによる。
- 文書：コードコメントをdoxygen対応にした。@easyaspi314による。
- その他：XXH_ACCEPT_NULL_INPUT_POINTERが不要になった。size == 0であれば、すべての関数でNULL入力ポインターを受け付ける。
- その他：GitHub Actions上のCIテストを全面的に再構成し、カバレッジを大幅に拡大。@t-matによる。
- その他：xxhsumのコードベースをcli/ディレクトリ内の複数の専用単位へ分割。@easyaspi314による。

v0.8.0
- API：XXH3を安定化。
- CLI：xxhsumでBSD形式の--check行を解析できるようにした。@WayneDによる。
- CLI：`xxhsum -`でコンソール入力を受け付ける。@jakiの要望による。
- CLI：xxhsumで--区切り記号を受け付ける。@jakiによる。
- CLI：修正：シンボリックリンクによる補助ツールで、正しい既定のアルゴリズムを表示。@martinetdによる。
- インストール：pkgconfigスクリプトを改善し、インストール先を指定できるようにした。@ellertの要望による。

v0.7.4
- 性能：実行時にベクトルを自動検出・選択（`xxh_x86dispatch.h`）。@easyaspi314が着手。
- 性能：AVX512対応を追加。@gzm55による。
- API：追加：シークレット生成器`XXH_generateSecret()`。@koraaの提案による。
- API：修正：XXH3_state_tを移動可能にした。@koraaが特定。
- API：修正：AVXモードで状態を正しく整列させる（`malloc()`とは異なる）。@easyaspi314による。
- API：修正：ランダムな入力取り込み長の組み合わせによって、ストリーミングが誤った値を生成していた。@WayneDの報告による。
- CLI：WindowsのUnicode表示を修正。@easyaspi314による。
- CLI：sfvで生成したファイルを`-c`で検査できるようにした。
- ビルド：`make DISPATCH=1`で、実行時のベクトル検出に対応する`xxhsum`と`libxxhash`を生成（x86/x64のみ）。
- インストール：cygwinでのインストールに対応。
- 文書：XXH32とXXH64のCryptol仕様。@weaversaによる。

v0.7.3
- 性能：大きい入力を高速化（約+20%）。
- 性能：小さい入力のレイテンシーを改善（約10%）。
- 性能：s390xのベクトルコードを追加。@easyaspi314による。
- CLI：Windows上のUnicodeファイル名の対応を改善。@easyaspi314と@t-matの協力による。
- API：`XXH_STATIC_LINKING_ONLY`と`XXH_INLINE_ALL`の有無にかかわらず、`xxhash.h`を任意の順序でインクルードできるようにした。
- ビルド：xxHashの実装を`xxhash.h`へ移した。`XXH_INLINE_ALL`を使うために、`/include`ディレクトリに`xxhash.c`を置く必要がなくなった。
- インストール：pkg-configファイルを作成。@bketによる。
- インストール：VCpkgのインストール手順。@LilyWangLによる。
- 文書：コード文書を大幅に改善。@easyaspi314による。
- その他：`/tests/collisions`に新しいテストツールを追加。64ビットハッシュ向けの総当たり衝突テスター。

v0.7.2
- 特定の入力長での`XXH128`の衝突率を修正。@svpvの報告による。
- `VSX`と`NEON`の版を改善。@easyaspi314による。
- スカラー処理経路（`XXH_VECTOR=0`）の性能を改善。@easyaspi314による。
- `xxhsum`：`-H2`オプションで128ビットハッシュを生成できるようにした（注：実験目的のみ。`XXH128`はまだ凍結されていない）。
- `xxhsum`：`-q`オプションで状態の通知を非表示にする。

v0.7.1
- シークレットを優先：サイズが`XXH3_SECRET_SIZE_MIN`以上の任意のバイト列である「シークレット」を渡すことで、アルゴリズムの計算を変更できる。
- `seed`も引き続き利用でき、シークレット生成器として働く。
- `ARM NEON`版を更新。@easyaspi314による。
- ストリーミング実装を利用可能にした。
- Visual Studioとの互換性と性能を改善。@aras-pの協力による。
- `XXH_INLINE_ALL`使用時の統合を改善。組み込み先の名前空間を汚さず、`XXH_ASSERT()`や`XXH_ALIGN`など、独自のマクロを使う。
- 128ビット版に、ハッシュ比較の補助関数を追加。
- `clang`での`rotl`命令生成を改善。@easyaspi314の協力による。
- バイナリーサイズを減らすビルドマクロ`XXH_REROLL`を追加。@easyaspi314による。
- `cmake`スクリプトを改善。@Mezozoyskyによる。
- `/tests/bench`に完全なベンチマークプログラムを用意。

