# JSON PointerとPatch

## JSON Pointer

ライブラリは、`JSON Pointer`（[RFC 6901](https://tools.ietf.org/html/rfc6901)）によるJSON値の問い合わせに対応します。

@@CODE_0@@

たとえば、次のJSONドキュメントがあるとします。
@@CODE_1@@
次のJSON文字列を評価すると、それぞれ隣に示した値になります。

|Pointer|一致する値|
|:--|:--|
| `""` | `ドキュメント全体` |
| `"/size"` | `3` |
| `"/users/0"` | `{"id": 1, "name": "Harry"}` |
| `"/users/1/name"` | `"Ron"` |
| `"/no_match"` | NULL |
| `"no_slash"` | NULL |
| `"/"` | NULL（空のキーに一致：root[""]） |

@@CODE_2@@

ライブラリは、`JSON Pointer`によるJSON値の変更にも対応します。
@@CODE_3@@

例：
@@CODE_4@@

上に示した、名前が`x`で終わる関数はすべて、結果のコンテキスト`ctx`とエラーメッセージ`err`を取得するために使えます。例：
@@CODE_5@@

## JSON Patch

ライブラリはJSON Patch（RFC 6902）に対応します。
仕様と例：<https://tools.ietf.org/html/rfc6902>
@@CODE_6@@

## JSON Merge Patch

ライブラリはJSON Merge Patch（RFC 7386）に対応します。
仕様と例：<https://tools.ietf.org/html/rfc7386>
@@CODE_7@@

---------------
