---
title: "オペレーティングシステム機能"
description: "オペレーティングシステムライブラリのリファレンス"
---

# 6.10 – <a id="6.10"></a>オペレーティングシステム機能

このライブラリはテーブル<a id="pdf-os"></a>`os`を通じて実装されています。

---

## <a id="pdf-os.clock"></a>`os.clock ()`

基盤となるISO C関数`clock`が返す、プログラムによって使用されたCPU時間の秒数の近似値を返します。

---

## <a id="pdf-os.date"></a>`os.date ([format [, time]])`

指定された文字列`format`に従って整形された日時を含む文字列またはテーブルを返します。

引数`time`がある場合、それが整形する時刻です（この値の説明については関数[`os.time`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.time)を参照）。それ以外の場合、`date`は現在時刻を整形します。

`format`が'`!`'で始まる場合、日時は協定世界時で整形されます。この省略可能な文字の後で、`format`が文字列"`*t`"なら、`date`は次のフィールドを持つテーブルを返します：`year`、`month`（1–12）、`day`（1–31）、`hour`（0–23）、`min`（0–59）、`sec`（うるう秒のため0–61）、`wday`（曜日、1–7、日曜日が1）、`yday`（年内の通算日、1–366）、`isdst`（夏時間フラグ、ブール値）。情報を利用できない場合、最後のフィールドは存在しないことがあります。

`format`が"`*t`"でない場合、`date`はISO C関数`strftime`と同じ規則に従って整形した日時を文字列として返します。

`format`を省略した場合のデフォルトは"`%c`"で、現在のロケールを使った人間が読める日時表現になります。

POSIXでないシステムでは、C関数`gmtime`とC関数`localtime`に依存するため、この関数がスレッドセーフでない場合があります。

---

## <a id="pdf-os.difftime"></a>`os.difftime (t2, t1)`

時刻`t1`から時刻`t2`までの差を秒単位で返します（時刻は[`os.time`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.time)が返す値です）。POSIX、Windows、および一部のシステムでは、この値は正確に`t2`*-*`t1`です。

---

## <a id="pdf-os.execute"></a>`os.execute ([command])`

この関数はISO C関数`system`と等価です。オペレーティングシステムのシェルで実行するために`command`を渡します。コマンドが正常に終了した場合、最初の結果は**true**、それ以外の場合は**fail**です。この最初の結果に続き、関数は次のように文字列と数値を返します。

- **"`exit`"**：コマンドは正常に終了しました。続く数値はコマンドの終了ステータスです。
- **"`signal`"**：コマンドはシグナルによって終了しました。続く数値はコマンドを終了させたシグナルです。
`command`なしで呼び出した場合、`os.execute`はシェルが利用可能ならtrueとなるブール値を返します。

---

## <a id="pdf-os.exit"></a>`os.exit ([code [, close]])`

ISO C関数`exit`を呼び出してホストプログラムを終了します。`code`が**true**の場合、返されるステータスは`EXIT_SUCCESS`です。`code`が**false**の場合、返されるステータスは`EXIT_FAILURE`です。`code`が数値の場合、返されるステータスはその数値です。`code`のデフォルト値は**true**です。

省略可能な第2引数`close`がtrueの場合、関数は終了前にLuaステートを閉じます（[`lua_close`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_close)を参照）。

---

## <a id="pdf-os.getenv"></a>`os.getenv (varname)`

プロセス環境変数`varname`の値を返します。変数が定義されていない場合は**fail**を返します。

---

## <a id="pdf-os.remove"></a>`os.remove (filename)`

指定された名前のファイル（POSIXシステムでは空のディレクトリも可）を削除します。この関数が失敗した場合、**fail**、エラーを説明する文字列、エラーコードを返します。それ以外の場合はtrueを返します。

---

## <a id="pdf-os.rename"></a>`os.rename (oldname, newname)`

`oldname`という名前のファイルまたはディレクトリを`newname`へ改名します。この関数が失敗した場合、**fail**、エラーを説明する文字列、エラーコードを返します。それ以外の場合はtrueを返します。

---

## <a id="pdf-os.setlocale"></a>`os.setlocale (locale [, category])`

プログラムの現在のロケールを設定します。`locale`はロケールを指定するシステム依存の文字列です。`category`は変更するカテゴリーを表す省略可能な文字列で、`"all"`、`"collate"`、`"ctype"`、`"monetary"`、`"numeric"`、`"time"`のいずれかです。デフォルトのカテゴリーは`"all"`です。関数は新しいロケールの名前を返します。要求を満たせない場合は**fail**を返します。

`locale`が空文字列の場合、現在のロケールは実装定義のネイティブロケールに設定されます。`locale`が文字列"`C`"の場合、現在のロケールは標準Cロケールに設定されます。

第1引数を**nil**として呼び出すと、この関数は指定されたカテゴリーの現在のロケール名を返すだけです。

C関数`setlocale`に依存するため、この関数がスレッドセーフでない場合があります。

---

## <a id="pdf-os.time"></a>`os.time ([table])`

引数なしで呼び出すと現在のローカル時刻を返し、テーブルを指定すると、そのテーブルで指定されたローカルの日時を表す時刻を返します。このテーブルはフィールド`year`、`month`、`day`を持たなければならず、フィールド`hour`（デフォルトは12）、`min`（デフォルトは0）、`sec`（デフォルトは0）、`isdst`（デフォルトは**nil**）を持つことができます。そのほかのフィールドは無視されます。これらのフィールドの説明については、関数[`os.date`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.date)を参照してください。

関数を呼び出すとき、これらのフィールドの値は有効範囲内になくても構いません。たとえば、`sec`が-10なら、ほかのフィールドで指定された時刻の10秒前を意味します。`hour`が1000なら、ほかのフィールドで指定された時刻の1000時間後を意味します。

返される値は数値で、その意味はシステムに依存します。POSIX、Windows、および一部のシステムでは、この数値は指定された開始時刻（「エポック」）からの秒数を数えます。そのほかのシステムでは意味は規定されず、`time`が返す数値は[`os.date`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.date)と[`os.difftime`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.difftime)への引数としてのみ使用できます。

テーブルを指定して呼び出した場合、`os.time`は関数[`os.date`](/docs/lua/v5-5-1/ja/05-standard-library/11-operating-system/#pdf-os.date)に記載されたすべてのフィールドも正規化します。これにより、呼び出し前と同じ時刻を表しながら、値が有効範囲内に収まります。

---

## <a id="pdf-os.tmpname"></a>`os.tmpname ()`

一時ファイルに使用できるファイル名を持つ文字列を返します。ファイルは使用前に明示的に開き、不要になったら明示的に削除する必要があります。

POSIXシステムでは、セキュリティ上のリスクを避けるため、この関数はその名前のファイルも作成します。（名前を取得してからファイルを作成するまでの間に、ほかの誰かが不適切な権限でファイルを作成する可能性があるためです。）使用するにはファイルを開き、（使用しない場合でも）削除する必要があります。

可能であれば、プログラム終了時にファイルを自動的に削除する[`io.tmpfile`](/docs/lua/v5-5-1/ja/05-standard-library/10-input-and-output/#pdf-io.tmpfile)を使用する方がよいでしょう。
