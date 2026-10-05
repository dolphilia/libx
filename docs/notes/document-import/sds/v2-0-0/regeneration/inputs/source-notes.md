# SDS 2.0.0 原文注釈案（採用前）

これは固定原資料を調査した編集注釈案です。原文やコード例を修正したものではなく、ソフトウェアのコード例は実行検証していません。採用・訳文の全文レビューは未完了です。

- **内部構造**: READMEのInternalsにある`struct sdshdr { int len; int free; char buf[]; }`は、固定版のヘッダーで宣言された`sdshdr5/8/16/32/64`とは異なります。固定版の構造体、flags、len、allocについては[固定sds.hの42–75行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75)の原典付録を参照してください。READMEの構造図と説明は原文として保持します。
- **結合API**: READMEの`sdsjoin`宣言と例は4引数です。[固定sds.hの250–251行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251)では`sdsjoin`は3引数、`sdsjoinsds`は4引数です。二つのAPIを区別してください。
- **トリミング**: READMEは`sdstrim`を`void`として掲載していますが、[固定宣言237行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237)は`sds`戻り値です。[固定実装668–695行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695)は再確保せず受け取った`s`を返します。この関数の原コメントには参照置換の説明があり、入力例`HelloWorld`に対して出力`Hello World`と記されています。これらも原文のまま区別して掲載します。
- **分割APIコメント**: [固定sds.cの778–806行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806)の`sdssplitlen`コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら`*count = 0`でtokensを返します。またコメントにある`sdssplit()`は固定公開ヘッダーに宣言されていません。`sdssplitlen()`と同じ公開APIが存在すると推測しないでください。
- **組み込みと割当設定**: READMEは`sds.c`と`sds.h`のコピーを案内しています。[固定sds.cの38行](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38)は`sdsalloc.h`をインクルードしており、[そのヘッダー全体](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h)を原典付録に含めます。
- **例の静的な不備**: 固定READMEには[305行の引用符不一致](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305)、[416–429行のprintf引数欠落](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429)、[542–548行のs1宣言とsの使用の混在](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548)、[812–814行のsize_t値に対する%d指定](https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814)があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。
- **条件の区別**: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する`sds.c`コメント、`sds.h`、`sdsalloc.h`には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。

全注釈は固定コミット`f74b9b785b63c6d8ea312d7e7864df5267149c85`の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。
