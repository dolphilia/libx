---
title: "build/make/README.md"
licenseSource: "xxhash-make"
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>記録した確認範囲では、文書専用ライセンスの表記が見つかりませんでした。Libxの運用方針に基づき、ソフトウェア本体のGPL-2.0-or-laterライセンスを、この注釈を付けて文書にも適用しています。これは運用上の判断であり、新たに取得した許諾ではありません。</p>\n<p>固定したソフトウェア版は<strong>0.8.4</strong>、出典コミットは<code>c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0</code>です。これは非公式の日本語訳です。書式、内部リンク、明示した編集者注記はLibxによる変更です。コード例の英語コメントは原文どおり保持しています。ソース列挙のコメントは、それぞれ全.cファイルと全.cppファイルが指定したディレクトリーにあることを示します。インクルード例のコメントはルートのMakefileを示します。最後の例のコメントは順に、GCCでのリリースビルド、ClangとAddressSanitizerでのデバッグビルド（新しいキャッシュディレクトリー）、GCCでのリリース設定への切り替え（オブジェクトは引き続き有効で、再リンクだけ）を説明しています。</p>\n<p><a href=\"/docs/xxhash/v0-8-4/ja/03-notices/make-header/\">Makefileの原通知</a> · <a href=\"/docs/xxhash/v0-8-4/ja/03-notices/gpl-v2/\">GPLv2の原文全文</a></p>\n<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/build/make/README.md\">固定した原文</a> · <a href=\"/docs/xxhash/source/v0-8-4/build/make/README.md.txt\">原文テキストのダウンロード</a></p>"}]
---

# multiconf.make

**multiconf.make**は、**同じターゲットをさまざまなフラグの組み合わせでビルドする**ための、単体で使えるMakefileインクルードです。たとえば、デバッグとリリース、ASanとUBSan、GCCとClangを切り替えられます。
フラグの組み合わせごとにオブジェクトファイルを**専用のキャッシュディレクトリー**へ生成するため、ある設定でコンパイルしたオブジェクトを別の設定で再利用することはありません。
以前の設定のオブジェクトファイルは保持されるので、その設定へ戻すときは、実際に変更されたオブジェクトだけをコンパイルすれば済みます。

---

## 利点の一覧

| 利点 | `multiconf.make`の動作 |
| --- | --- |
| **設定の分離** | フラグの組み合わせごとに1つのディレクトリーを用意し、`cachedObjs/<hash>/`にオブジェクトを保存します。 |
| **高速な切り替え** | 以前の設定はすぐに再利用でき、リンクだけを行い、再コンパイルはしません。 |
| **ヘッダーへの依存** | ヘッダーを編集すると、必要なものだけを再ビルドします。 |
| **1行でターゲットを定義** | マクロ（`c_program`、`cxx_program`など）が、規則の定型記述を隠します。 |
| **並列実行に対応** | `make -j`で安全に使え、共有するソースを重複してコンパイルしません。 |
| **出力の詳しさを制御** | デフォルトではオブジェクトだけを一覧表示し、`V=1`ではコマンド全体を表示します。 |
| **`clean`も用意** | `make clean`はすべてのオブジェクト、バイナリー、リンクを削除します。 |

---

## 使い始める

### 1 · ソースを列挙する

```make
C_SRCDIRS   := src src/cdeps    # all .c are in these directories
CXX_SRCDIRS := src src/cxxdeps  # all .cpp are in these directories
```

### 2 · 追加してインクルードする

```make
# root/Makefile
include multiconf.make
```

### 3 · ターゲットを宣言する

```make
app:
$(eval $(call c_program,app,app.o cdeps/obj.o))

test:
$(eval $(call cxx_program,test, test.o cxxdeps/objcxx.o))

lib.a:
$(eval $(call static_library,lib.a, lib.o cdeps/obj.o))

lib.so:
$(eval $(call c_dynamic_library,lib.so, lib.o cdeps/obj.o))
```

### 4 · 好きな設定でビルドする

```sh
# Release with GCC
make CFLAGS="-O3"

# Debug with Clang + AddressSanitizer (new cache dir)
make CC=clang CFLAGS="-g -O0 -fsanitize=address"

# Switch back to GCC release (objects still valid, relink only)
make CFLAGS="-O3"
```

各コマンドのオブジェクトは異なるサブフォルダーに置かれ、互いに重複しません。

---

