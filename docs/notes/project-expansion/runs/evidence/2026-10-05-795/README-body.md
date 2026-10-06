<span id="lz4---extremely-fast-compression"></span>

LZ4 - 非常に高速な圧縮
================================

LZ4 は可逆圧縮アルゴリズムです。コアあたり 500 MB/s を超える圧縮速度を提供し、マルチコア CPU でスケールします。非常に高速なデコーダーを備えており、その速度はコアあたり数 GB/s に達します。マルチコアシステムでは、通常、RAM の速度上限に達します。

圧縮比と引き換えに速度を高める「acceleration」係数を選ぶことで、速度を動的に調整できます。一方、CPU 時間を使って圧縮比を改善する高圧縮の派生版 LZ4_HC も提供されています。いずれのバージョンも展開速度は同じです。

LZ4 は、[API](https://github.com/lz4/lz4/blob/v1.8.3/lib/lz4frame.h#L481) と [CLI](https://github.com/lz4/lz4/blob/v1.8.3/programs/lz4.1.md#operation-modifiers) の両方で[辞書圧縮](https://github.com/facebook/zstd#the-case-for-small-data-compression)にも対応しています。任意の入力ファイルを辞書として取り込めますが、使われるのは最後の 64KB だけです。この機能を [Zstandard Dictionary Builder](https://github.com/facebook/zstd/blob/v1.3.5/programs/zstd.1.md#dictionary-builder) と組み合わせることで、小さなファイルの圧縮性能を大幅に改善できます。


LZ4 ライブラリは、BSD 2-Clause ライセンスを使用するオープンソースソフトウェアとして提供されています。


|ブランチ    |状態     |
|------------|---------|
|dev         | [![ビルド状況][AppveyorDevBadge]][AppveyorLink]  |

[AppveyorDevBadge]: https://ci.appveyor.com/api/projects/status/github/lz4/lz4?branch=dev&svg=true "Windows テストスイート"
[AppveyorLink]: https://ci.appveyor.com/project/YannCollet/lz4-1lndh


<span id="benchmarks"></span>

ベンチマーク
-------------------------

このベンチマークでは、@inikep による [lzbench] を使用し、Linux 64 ビット（Ubuntu 4.18.0-17）上で GCC v8.2.0 を使ってコンパイルしています。基準となるシステムの CPU は Core i7-9700K、動作周波数は 4.9GHz（ターボブーストあり）です。基準データである [Silesia Corpus] の圧縮を、シングルスレッドモードで評価しています。

[lzbench]: https://github.com/inikep/lzbench
[Silesia Corpus]: http://sun.aei.polsl.pl/~sdeor/index.php?page=silesia

|  圧縮プログラム         | 圧縮比  | 圧縮速度    | 展開速度      |
|  ----------             | -----   | ----------- | ------------- |
|  memcpy                 |  1.000  | 13700 MB/s  |  13700 MB/s   |
|**LZ4 既定 (v1.9.0)**    |**2.101**| **780 MB/s**| **4970 MB/s** |
|  LZO 2.09               |  2.108  |   670 MB/s  |    860 MB/s   |
|  QuickLZ 1.5.0          |  2.238  |   575 MB/s  |    780 MB/s   |
|  Snappy 1.1.4           |  2.091  |   565 MB/s  |   1950 MB/s   |
| [Zstandard] 1.4.0 -1    |  2.883  |   515 MB/s  |   1380 MB/s   |
|  LZF v3.6               |  2.073  |   415 MB/s  |    910 MB/s   |
| [zlib] deflate 1.2.11 -1|  2.730  |   100 MB/s  |    415 MB/s   |
|**LZ4 HC -9 (v1.9.0)**   |**2.721**|    41 MB/s  | **4900 MB/s** |
| [zlib] deflate 1.2.11 -6|  3.099  |    36 MB/s  |    445 MB/s   |

[zlib]: http://www.zlib.net/
[Zstandard]: http://www.zstd.net/

LZ4 は x32 モード（`-mx32`）にも対応し、最適化されています。このモードでは、さらに高い速度性能が得られます。


<span id="installation"></span>

インストール
-------------------------

```
make
make install     # this command may require root permissions
```

LZ4 の `Makefile` は、[ステージングインストール]、[配置先の変更]、[コマンドの再定義]など、標準的な [Makefile の慣例]に対応しています。並列ビルド（`-j#`）にも対応しています。

[Makefile の慣例]: https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html
[ステージングインストール]: https://www.gnu.org/prep/standards/html_node/DESTDIR.html
[配置先の変更]: https://www.gnu.org/prep/standards/html_node/Directory-Variables.html
[コマンドの再定義]: https://www.gnu.org/prep/standards/html_node/Utilities-in-Makefiles.html

<span id="building-lz4---using-vcpkg"></span>

### vcpkg を使った LZ4 のビルド

依存関係管理ツール [vcpkg](https://github.com/Microsoft/vcpkg) を使って、LZ4 をダウンロードしてインストールできます。

    git clone https://github.com/Microsoft/vcpkg.git
    cd vcpkg
    ./bootstrap-vcpkg.sh
    ./vcpkg integrate install
    ./vcpkg.exe install lz4

vcpkg の LZ4 ポートは、Microsoft のチームメンバーとコミュニティの貢献者によって最新の状態に保たれています。版が古い場合は、vcpkg のリポジトリで [issue または pull request を作成してください](https://github.com/Microsoft/vcpkg)。

<span id="documentation"></span>

ドキュメント
-------------------------

生の LZ4 ブロック圧縮形式については、[lz4_Block_format] に詳しく記載されています。

任意の長さのファイルやデータストリームは、ストリーミングの要件に対応するため、複数のブロックを使って圧縮します。これらのブロックは、[lz4_Frame_format] で定義されているフレームにまとめられます。相互運用可能な LZ4 のバージョンは、フレーム形式にも従う必要があります。

[lz4_Block_format]: /docs/lz4/v1-10-0/en/03-format/01-block-format/
[lz4_Frame_format]: /docs/lz4/v1-10-0/en/03-format/02-frame-format/


<span id="other-source-versions"></span>

その他のソース実装
-------------------------

C の参照実装に加えて、多くの貢献者が、さまざまな言語（Java、C#、Python、Perl、Ruby など）で lz4 の実装を作成しています。既知の移植実装の一覧は [LZ4 ホームページ][LZ4 Homepage] で管理されています。

[LZ4 Homepage]: http://www.lz4.org

<span id="packaging-status"></span>

### パッケージ提供状況

ほとんどのディストリビューションにはパッケージマネージャーが付属しており、`liblz4` ライブラリと `lz4` コマンドラインインターフェースの両方を簡単にインストールできます。

[![パッケージ提供状況](https://repology.org/badge/vertical-allrepos/lz4.svg)](https://repology.org/project/lz4/versions)


<span id="special-thanks"></span>

### 謝辞

- Takayuki Matsuoka（@t-mat）: このプロジェクトの存続期間を通じて、卓越した最高水準の支援をいただいていることに感謝します。
