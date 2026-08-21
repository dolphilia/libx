---
title: "デバッグインターフェース"
description: "アクティベーションレコード、フック、デバッグAPI関数"
---

# 4.7 – <a id="4.7"></a>デバッグインターフェース

Luaには組み込みのデバッグ機能がありません。その代わり、関数と*フック*による特別なインターフェースを提供します。このインターフェースを使うと、インタープリターの「内部情報」を必要とする各種デバッガー、プロファイラー、そのほかのツールを構築できます。

---

## <a id="lua_Debug"></a>`lua_Debug`

```c
typedef struct lua_Debug {
  int event;
  const char *name;           /* (n) */
  const char *namewhat;       /* (n) */
  const char *what;           /* (S) */
  const char *source;         /* (S) */
  size_t srclen;              /* (S) */
  int currentline;            /* (l) */
  int linedefined;            /* (S) */
  int lastlinedefined;        /* (S) */
  unsigned char nups;         /* (u) number of upvalues */
  unsigned char nparams;      /* (u) number of parameters */
  char isvararg;              /* (u) */
  unsigned char extraargs;    /* (t) number of extra arguments */
  char istailcall;            /* (t) */
  int ftransfer;              /* (r) index of first value transferred */
  int ntransfer;              /* (r) number of transferred values */
  char short_src[LUA_IDSIZE]; /* (S) */
  /* private part */
  other fields
} lua_Debug;
```

関数やアクティベーションレコードに関するさまざまな情報を運ぶ構造体です。[`lua_getstack`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getstack)は、後で利用するため、この構造体の非公開部分だけを設定します。[`lua_Debug`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Debug)のほかのフィールドへ有用な情報を設定するには、適切な引数を指定して[`lua_getinfo`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getinfo)を呼び出す必要があります。具体的には、あるフィールドを取得するには、そのフィールドのコメント内で括弧に囲まれた文字を[`lua_getinfo`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getinfo)の`what`引数へ追加します。

[`lua_Debug`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Debug)の各フィールドには、次の意味があります。

- **`source`**: 関数を作成したチャンクのソースです。`source`が「`@`」で始まる場合、その関数は「`@`」に続く名前のファイルで定義されています。`source`が「`=`」で始まる場合、残りの内容が利用者定義の方法でソースを表します。それ以外の場合、関数は文字列内で定義されており、`source`がその文字列です。
- **`srclen`**: 文字列`source`の長さです。
- **`short_src`**: エラーメッセージで使う、`source`の「表示可能な」版です。
- **`linedefined`**: 関数定義が始まる行番号です。
- **`lastlinedefined`**: 関数定義が終わる行番号です。
- **`what`**: Lua関数なら`"Lua"`、C関数なら`"C"`、チャンクの本体部分なら`"main"`となる文字列です。
- **`currentline`**: 指定した関数が現在実行している行です。行情報がない場合、`currentline`には-1が設定されます。
- **`name`**: 指定した関数の妥当な名前です。Luaの関数は第一級の値なので、固定された名前を持ちません。複数のグローバル変数の値になる関数もあれば、テーブルのフィールドだけに格納される関数もあります。`lua_getinfo`関数は、その関数がどのように呼び出されたかを調べて適切な名前を見つけます。名前が見つからない場合、`name`には`NULL`が設定されます。
- **`namewhat`**: `name`フィールドについて説明します。関数の呼び出し方に応じて、`namewhat`の値は`"global"`、`"local"`、`"upvalue"`、`"field"`、`""`（空文字列）、またはそのほかの選択肢になります。他の選択肢が適用できない場合、Luaは空文字列を使います。
- **`istailcall`**: この関数呼び出しが末尾呼び出しによるものなら真です。この場合、このレベルの呼び出し元はスタック内にありません。
- **`extraargs`**: `__call`メタメソッドを通して呼び出された関数への呼び出しによって追加された引数の数です。各`__call`メタ値は、呼び出されるオブジェクトという追加引数を1つ加えますが、`__call`メタ値が連鎖することもあります。
- **`nups`**: 関数のアップバリュー数です。
- **`nparams`**: 関数の引数数です。C関数では常に0です。
- **`isvararg`**: 関数が可変長引数関数なら真です。C関数では常に真です。
- **`ftransfer`**: 「転送」される最初の値、すなわち呼び出し時の引数またはreturn時の戻り値のスタック内インデックスです。そのほかの値は連続するインデックスにあります。このインデックスを使い、[`lua_getlocal`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getlocal)および[`lua_setlocal`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_setlocal)を通して値へアクセスし、変更できます。このフィールドに意味があるのは、呼び出しフックでは最初の引数を、returnフックでは返される最初の値を示す場合だけです。呼び出しフックでは、この値は常に1です。
- **`ntransfer`**: 転送される値の数です（前項を参照）。Lua関数の呼び出しでは、この値は常に`nparams`と等しくなります。

---

## <a id="lua_gethook"></a>`lua_gethook`

[-0, +0, –]

```c
lua_Hook lua_gethook (lua_State *L);
```

現在のフック関数を返します。

---

## <a id="lua_gethookcount"></a>`lua_gethookcount`

[-0, +0, –]

```c
int lua_gethookcount (lua_State *L);
```

現在のフックカウントを返します。

---

## <a id="lua_gethookmask"></a>`lua_gethookmask`

[-0, +0, –]

```c
int lua_gethookmask (lua_State *L);
```

現在のフックマスクを返します。

---

## <a id="lua_getinfo"></a>`lua_getinfo`

[-(0|1), +(0|1|2), *m*]

```c
int lua_getinfo (lua_State *L, const char *what, lua_Debug *ar);
```

特定の関数または関数呼び出しに関する情報を取得します。

関数呼び出しの情報を取得するには、`ar`引数が、以前の[`lua_getstack`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getstack)呼び出しで設定されたか、フックの引数として渡された有効なアクティベーションレコードでなければなりません（[`lua_Hook`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Hook)を参照）。

関数についての情報を得るには、関数をスタックへプッシュし、`what`文字列を文字「`>`」で始めます。この場合、`lua_getinfo`はスタック最上部から関数をポップします。たとえば、関数`f`が定義された行を知るには、次のコードを書けます。

```c
     lua_Debug ar;
     lua_getglobal(L, "f");  /* get global 'f' */
     lua_getinfo(L, ">S", &ar);
     printf("%d\n", ar.linedefined);
```

文字列`what`内の各文字は、構造体`ar`のどのフィールドを設定するか、またはどの値をスタックへプッシュするかを選択します。これらの文字は、構造体[`lua_Debug`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Debug)の宣言でも、各フィールドに続くコメント内の括弧で示されています。

- **「`f`」**: 指定したレベルで実行中の関数をスタックへプッシュします。
- **「`l`」**: `currentline`フィールドを設定します。
- **「`n`」**: `name`および`namewhat`フィールドを設定します。
- **「`r`」**: `ftransfer`および`ntransfer`フィールドを設定します。
- **「`S`」**: `source`、`srclen`、`short_src`、`linedefined`、`lastlinedefined`、`what`フィールドを設定します。
- **「`t`」**: `istailcall`および`extraargs`フィールドを設定します。
- **「`u`」**: `nups`、`nparams`、`isvararg`フィールドを設定します。
- **「`L`」**: 関連するコードがある関数内の行、つまりブレークポイントを置ける行をインデックスとするテーブルをスタックへプッシュします。コードがない行には空行やコメントが含まれます。この選択肢を「`f`」とともに指定した場合、テーブルは関数の後にプッシュされます。メモリエラーを発生させる可能性がある選択肢はこれだけです。

この関数は、`what`内の無効な選択肢を知らせるために0を返します。その場合でも、有効な選択肢は正しく処理されます。

---

## <a id="lua_getlocal"></a>`lua_getlocal`

[-0, +(0|1), –]

```c
const char *lua_getlocal (lua_State *L, const lua_Debug *ar, int n);
```

指定したアクティベーションレコードまたは関数のローカル変数や一時値に関する情報を取得します。

前者の場合、`ar`引数は以前の[`lua_getstack`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getstack)呼び出しで設定されたか、フックの引数として渡された有効なアクティベーションレコードでなければなりません（[`lua_Hook`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Hook)を参照）。インデックス`n`は調査するローカル変数を選択します。変数のインデックスと名前について詳しくは[`debug.getlocal`](/docs/lua/v5-5-1/ja/05-standard-library/12-debug-library/#pdf-debug.getlocal)を参照してください。

[`lua_getlocal`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getlocal)は変数の値をスタックへプッシュし、その名前を返します。

後者の場合、`ar`は`NULL`でなければならず、調査する関数がスタック最上部になければなりません。この場合、有効な変数に関する情報がないためLua関数の引数だけが見え、値はスタックへプッシュされません。

インデックスが有効なローカル変数の数を超える場合、`NULL`を返し、何もプッシュしません。

---

## <a id="lua_getstack"></a>`lua_getstack`

[-0, +0, –]

```c
int lua_getstack (lua_State *L, int level, lua_Debug *ar);
```

インタープリターの実行時スタックに関する情報を取得します。

この関数は、指定したレベルで実行中の関数の*アクティベーションレコード*を識別する情報を[`lua_Debug`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_Debug)構造体の一部へ設定します。レベル0は現在実行中の関数で、レベル*n+1*はレベル*n*を呼び出した関数です。ただし、スタックで数えない末尾呼び出しは除きます。スタックの深さを超えるレベルで呼び出すと、[`lua_getstack`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getstack)は0を返し、それ以外では1を返します。

---

## <a id="lua_getupvalue"></a>`lua_getupvalue`

[-0, +(0|1), –]

```c
const char *lua_getupvalue (lua_State *L, int funcindex, int n);
```

インデックス`funcindex`にあるクロージャの`n`番目のアップバリューについて情報を取得します。アップバリューの値をスタックへプッシュし、その名前を返します。インデックス`n`がアップバリュー数を超える場合は`NULL`を返し、何もプッシュしません。

アップバリューについて詳しくは[`debug.getupvalue`](/docs/lua/v5-5-1/ja/05-standard-library/12-debug-library/#pdf-debug.getupvalue)を参照してください。

---

## <a id="lua_Hook"></a>`lua_Hook`

```c
typedef void (*lua_Hook) (lua_State *L, lua_Debug *ar);
```

デバッグフック関数の型です。

フックが呼ばれるたびに、その`ar`引数の`event`フィールドにはフックを発生させた特定のイベントが設定されます。Luaはこれらのイベントを、<a id="pdf-LUA_HOOKCALL"></a>`LUA_HOOKCALL`、<a id="pdf-LUA_HOOKRET"></a>`LUA_HOOKRET`、<a id="pdf-LUA_HOOKTAILCALL"></a>`LUA_HOOKTAILCALL`、<a id="pdf-LUA_HOOKLINE"></a>`LUA_HOOKLINE`、<a id="pdf-LUA_HOOKCOUNT"></a>`LUA_HOOKCOUNT`という定数で識別します。さらに、行イベントでは`currentline`フィールドも設定されます。`ar`のほかのフィールドの値を取得するには、フックが[`lua_getinfo`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getinfo)を呼び出す必要があります。

呼び出しイベントでは、`event`は通常値の`LUA_HOOKCALL`か、末尾呼び出しの場合の`LUA_HOOKTAILCALL`になります。後者では対応するreturnイベントはありません。

Luaはフックの実行中、ほかのフック呼び出しを無効にします。そのため、フックからLuaを呼び戻して関数やチャンクを実行した場合、その実行中にはフックが呼ばれません。

フック関数は継続を持てません。すなわち、非NULLの`k`を指定して[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)、[`lua_pcallk`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_pcallk)、[`lua_callk`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_callk)を呼び出すことはできません。

フック関数は次の条件でyieldできます。yieldできるのはカウントイベントと行イベントだけです。yieldするには、フック関数が`nresults`を0（値なし）にして[`lua_yield`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yield)を呼び出し、実行を終えなければなりません。

---

## <a id="lua_sethook"></a>`lua_sethook`

[-0, +0, –]

```c
void lua_sethook (lua_State *L, lua_Hook f, int mask, int count);
```

デバッグフック関数を設定します。

引数`f`はフック関数です。`mask`はフックを呼び出すイベントを指定し、定数<a id="pdf-LUA_MASKCALL"></a>`LUA_MASKCALL`、<a id="pdf-LUA_MASKRET"></a>`LUA_MASKRET`、<a id="pdf-LUA_MASKLINE"></a>`LUA_MASKLINE`、<a id="pdf-LUA_MASKCOUNT"></a>`LUA_MASKCOUNT`のビット単位ORで構成します。`count`引数に意味があるのは、マスクに`LUA_MASKCOUNT`が含まれる場合だけです。各イベントでは、次のようにフックが呼ばれます。

- **呼び出しフック**: インタープリターが関数を呼び出したとき、Luaが新しい関数へ入った直後に呼ばれます。
- **returnフック**: インタープリターが関数から戻るとき、Luaが関数を離れる直前に呼ばれます。
- **行フック**: インタープリターがコードの新しい行を実行し始める直前、またはコード内を後方へジャンプするとき（同じ行へのジャンプも含む）に呼ばれます。このイベントは、LuaがLua関数を実行している間だけ発生します。
- **カウントフック**: インタープリターが`count`個の命令を実行するたびに呼ばれます。このイベントは、LuaがLua関数を実行している間だけ発生します。

`mask`を0に設定するとフックは無効になります。

---

## <a id="lua_setlocal"></a>`lua_setlocal`

[-(0|1), +0, –]

```c
const char *lua_setlocal (lua_State *L, const lua_Debug *ar, int n);
```

指定したアクティベーションレコードのローカル変数へ値を設定します。スタック最上部の値を変数へ代入してその名前を返し、値をスタックからポップします。

インデックスが有効なローカル変数の数を超える場合、`NULL`を返し、何もポップしません。

引数`ar`と`n`は関数[`lua_getlocal`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getlocal)と同じですが、`lua_setlocal`はアクティベーションレコードだけを操作するため、`ar`を`NULL`にはできません。

---

## <a id="lua_setupvalue"></a>`lua_setupvalue`

[-(0|1), +0, –]

```c
const char *lua_setupvalue (lua_State *L, int funcindex, int n);
```

クロージャのアップバリューへ値を設定します。スタック最上部の値をアップバリューへ代入してその名前を返し、値をスタックからポップします。

インデックス`n`がアップバリュー数を超える場合、`NULL`を返し、何もポップしません。

引数`funcindex`と`n`は関数[`lua_getupvalue`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getupvalue)と同じです。

---

## <a id="lua_upvalueid"></a>`lua_upvalueid`

[-0, +0, –]

```c
void *lua_upvalueid (lua_State *L, int funcindex, int n);
```

インデックス`funcindex`にあるクロージャの、番号`n`のアップバリューに対する一意な識別子を返します。

この一意な識別子により、異なるクロージャがアップバリューを共有しているか確認できます。1つのアップバリュー、すなわち同じ外側のローカル変数へアクセスするLuaクロージャは、そのアップバリューのインデックスに対して同一の識別子を返します。

引数`funcindex`と`n`は関数[`lua_getupvalue`](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#lua_getupvalue)と同じですが、`n`はアップバリュー数を超えられません。

---

## <a id="lua_upvaluejoin"></a>`lua_upvaluejoin`

[-0, +0, –]

```c
void lua_upvaluejoin (lua_State *L, int funcindex1, int n1,
                                    int funcindex2, int n2);
```

インデックス`funcindex1`にあるLuaクロージャの`n1`番目のアップバリューが、インデックス`funcindex2`にあるLuaクロージャの`n2`番目のアップバリューを参照するようにします。
