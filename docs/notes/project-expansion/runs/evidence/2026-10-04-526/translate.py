from pathlib import Path
import re,json
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');note=root/'docs/notes/document-import/xxhash/v0-8-4'
s=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/20-group__public.md').read_text();body,foot=s.split('## Source and notices')
m={
'&#10;Topics':'&#10;トピック','XXH32 family':'XXH32ファミリー','XXH64 family':'XXH64ファミリー','XXH3 family':'XXH3ファミリー','&#10;Macros':'&#10;マクロ','&#10;Typedefs':'&#10;型定義','&#10;Enumerations':'&#10;列挙型','&#10;Functions':'&#10;関数','Detailed Description':'詳細説明','Macro Definition Documentation':'マクロ定義の説明','Typedef Documentation':'型定義の説明','Enumeration Type Documentation':'列挙型の説明','Function Documentation':'関数の説明','Enumerator':'列挙子','Value:':'値：','More...':'詳細…',
'Gives access to internal state declaration, required for static allocation.':'静的な割り当てに必要な内部状態の宣言にアクセスできるようにします。',
'Gives access to internal definitions.':'内部定義にアクセスできるようにします。',
'Exposes the implementation and marks all functions as':'実装を公開し、すべての関数を',
'Exposes the implementation without marking functions as inline.':'関数をinlineとして指定せずに、実装を公開します。',
'Emulate a namespace by transparently prefixing all symbols.':'すべてのシンボルに透過的に接頭辞を付け、名前空間を模倣します。',
'Marks a global symbol.':'グローバルシンボルを指定します。',
'Version number, encoded as two digits each.':'各要素を2桁で符号化したバージョン番号。',
'An unsigned 32-bit integer.':'符号なし32ビット整数。','An unsigned 64-bit integer.':'符号なし64ビット整数。','Exit code for the streaming API.':'ストリーミングAPIの終了コード。','Obtains the xxHash version.':'xxHashのバージョンを取得します。','Contains details on the public xxHash functions.':'公開されているxxHash関数の詳細を示します。',
'Incompatible with dynamic linking, due to risks of ABI changes.':'ABI変更のリスクがあるため、動的リンクとは互換性がありません。','Usage:':'使用例：',
'Use these build macros to inline xxhash into the target unit. Inlining improves performance on small inputs, especially when the length is expressed as a compile-time constant:':'これらのビルド用マクロを使うと、対象の翻訳単位にxxhashをインライン化できます。インライン化は、小さな入力、特に長さがコンパイル時定数で表される入力で性能を改善します：',
'It also keeps xxHash symbols private to the unit, so they are not exported.':'また、xxHashのシンボルをその翻訳単位内に限定し、外部へエクスポートしません。',
'Do not compile and link xxhash.o as a separate object, as it is not useful.':'xxhash.oを別のオブジェクトとしてコンパイルしてリンクしても役に立たないため、そのようにしないでください。',
'If you want to include':'自分のライブラリにxxHash関数を組み込み、',
'and expose':'外部公開',
'xxHash functions from within your own library, but also want to avoid symbol collisions with other libraries which may also include xxHash, you can use':'したい一方で、xxHashを含む可能性のある他のライブラリとのシンボル衝突を避けたい場合は、',
' to automatically prefix any public symbol from xxhash library with the value of':'を使用できます。xxhashライブラリのすべての公開シンボルに、',
'(therefore, avoid empty or numeric values).':'の値を接頭辞として自動的に付けます（そのため、空の値や数値は避けてください）。',
'Note that no change is required within the calling program as long as it includes':'呼び出し側のプログラムが',
': Regular symbol names will be automatically translated by this header.':'をインクルードしている限り、そのプログラムを変更する必要はありません。このヘッダーが通常のシンボル名を自動的に変換します。',
'Definition':'定義','Not necessarily defined to':'必ずしも',
'but functionally equivalent.':'として定義されるとは限りませんが、機能的には同等です。','OK':'正常','Error':'エラー',
'This is mostly useful when xxHash is compiled as a shared library, since the returned value comes from the library, as opposed to header file.':'戻り値はヘッダーファイルではなくライブラリに由来するため、主にxxHashを共有ライブラリとしてコンパイルした場合に役立ちます。',
'Returns':'戻り値','of the invoked library.':'：呼び出したライブラリの値。'
}
# Leading/trailing whitespace is kept; map keys are stripped text nodes.
m['to automatically prefix any public symbol from xxhash library with the value of']=m.pop(' to automatically prefix any public symbol from xxhash library with the value of')
parts=re.split(r'(<[^>]*>)',body);used=set()
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.add(x)
assert used==set(m),set(m)-used
body=''.join(parts).replace('title: "Public API "','title: "公開API"').replace('<span class="tt">inline</span>.','<span class="tt">inline</span>として指定します。')
# The brief description uses the same span text.
body=body.replace('<span class="tt">inline</span>.','<span class="tt">inline</span>として指定します。')
body+='\n翻訳補足：コード内の原文コメント`/* YOUR NAME HERE */`は「ここに自分の名前を指定」、`/* do nothing */`は「何もしない」、`/* disable */`は「無効化」を意味します。コードとマクロ値は原文を保持しています。\n\n'
assert foot==(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1]
jfoot=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
out=note/'drafts/ja/20-api-public.reviewed-content.md';assert not out.exists();out.write_text((body+'## 出典と通知'+jfoot).replace('/v0-8-4/en/','/v0-8-4/ja/'))
Path('/private/tmp/libx-public-labels-526.json').write_text(json.dumps({'labels':{'XXH32 family':'XXH32ファミリー','XXH64 family':'XXH64ファミリー','XXH3 family':'XXH3ファミリー','More...':'詳細…'},'titles':{}}))
