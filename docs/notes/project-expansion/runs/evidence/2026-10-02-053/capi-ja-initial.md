---
title: "C APIの関数と型：absindex–compare"
description: "lua_absindexからlua_compareまでのアルファベット順C APIリファレンス"
---

# 4.6 – <a id="4.6"></a>関数と型

ここではC APIのすべての関数と型をアルファベット順に列挙します。各関数には次のような指示子があります：[-o, +p, *x*]

第1フィールド`o`は関数がスタックからポップする要素数です。第2フィールド`p`は関数がスタックへプッシュする要素数です。（すべての関数は必ず、引数をポップした後に結果をプッシュします。）`x|y`形式のフィールドは、状況に応じて関数が`x`個または`y`個の要素をプッシュ（またはポップ）できることを意味します。疑問符'`?`'は、引数だけを見ても関数がポップまたはプッシュする要素数を判断できないことを意味します。（たとえば、スタック内の内容に依存する場合があります。）第3フィールド`x`は、関数がエラーを発生させる可能性があるかを示します。'`-`'は関数がエラーを決して発生させない、'`m`'はメモリ不足エラーだけを発生させる可能性がある、'`v`'は本文で説明されたエラーを発生させる可能性がある、'`e`'は関数が直接またはメタメソッドを通じて任意のLuaコードを実行でき、そのため任意のエラーを発生させる可能性があることを意味します。

---

## <a id="lua_absindex"></a>`lua_absindex`

[-0, +0, –]

```c
int lua_absindex (lua_State *L, int idx);
```

許容されるインデックス`idx`を、等価な絶対インデックス（つまりスタックサイズに依存しないインデックス）へ変換します。

---

## <a id="lua_Alloc"></a>`lua_Alloc`

```c
typedef void * (*lua_Alloc) (void *ud,
                             void *ptr,
                             size_t osize,
                             size_t nsize);
```

Luaステートが使うメモリアロケーター関数の型です。アロケーター関数は`realloc`に似た機能を提供しなければなりませんが、まったく同じではありません。引数は、[`lua_newstate`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newstate)へ渡された不透明ポインター`ud`、割り当て、再割り当て、解放されるブロックへのポインター`ptr`、ブロックの元のサイズまたは割り当てるものに関する符号`osize`、ブロックの新しいサイズ`nsize`です。

`ptr`が`NULL`でない場合、`osize`は`ptr`が指すブロックのサイズ、つまり割り当てまたは再割り当て時に指定されたサイズです。

`ptr`が`NULL`の場合、`osize`はLuaが割り当てるオブジェクトの種類を符号化します。Luaがその型の新しいオブジェクトを作成するとき（かつ、そのときだけ）、`osize`は[`LUA_TSTRING`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TSTRING)、[`LUA_TTABLE`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TTABLE)、[`LUA_TFUNCTION`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TFUNCTION)、[`LUA_TUSERDATA`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TUSERDATA)、[`LUA_TTHREAD`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#pdf-LUA_TTHREAD)のいずれかです。`osize`がそのほかの値なら、Luaは別のもののメモリを割り当てています。

Luaはアロケーター関数に次の動作を仮定します。

`nsize`が0なら、アロケーターは`free`のように動作し、その後`NULL`を返さなければなりません。

`nsize`が0でなければ、アロケーターは`realloc`のように動作しなければなりません。特に、要求を満たせない場合に限り`NULL`を返します。

次は、補助ライブラリの関数[`luaL_alloc`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_alloc)に対応する、アロケーター関数の簡単な実装です。

```c
     void *luaL_alloc (void *ud, void *ptr, size_t osize,
                                            size_t nsize) {
       (void)ud;  (void)osize;  /* not used */
       if (nsize == 0) {
         free(ptr);
         return NULL;
       }
       else
         return realloc(ptr, nsize);
     }
```

ISO Cは`free(NULL)`が何もせず、`realloc(NULL,size)`が`malloc(size)`と等価であることを保証している点に注意してください。

---

## <a id="lua_arith"></a>`lua_arith`

[-(2|1), +1, *e*]

```c
void lua_arith (lua_State *L, int op);
```

スタック最上部の2つの値（否定の場合は1つ）に対して算術演算またはビット演算を実行します。最上部の値を第2オペランドとして値をポップし、演算結果をプッシュします。関数は対応するLua演算子の意味論に従います（つまり、メタメソッドを呼び出す可能性があります）。

`op`の値は次の定数のいずれかでなければなりません。

- **<a id="pdf-LUA_OPADD"></a>`LUA_OPADD`**：加算（`+`）を実行します。
- **<a id="pdf-LUA_OPSUB"></a>`LUA_OPSUB`**：減算（`-`）を実行します。
- **<a id="pdf-LUA_OPMUL"></a>`LUA_OPMUL`**：乗算（`*`）を実行します。
- **<a id="pdf-LUA_OPDIV"></a>`LUA_OPDIV`**：浮動小数点除算（`/`）を実行します。
- **<a id="pdf-LUA_OPIDIV"></a>`LUA_OPIDIV`**：床除算（`//`）を実行します。
- **<a id="pdf-LUA_OPMOD"></a>`LUA_OPMOD`**：剰余（`%`）を実行します。
- **<a id="pdf-LUA_OPPOW"></a>`LUA_OPPOW`**：累乗（`^`）を実行します。
- **<a id="pdf-LUA_OPUNM"></a>`LUA_OPUNM`**：数学的な否定（単項`-`）を実行します。
- **<a id="pdf-LUA_OPBNOT"></a>`LUA_OPBNOT`**：ビット単位NOT（`~`）を実行します。
- **<a id="pdf-LUA_OPBAND"></a>`LUA_OPBAND`**：ビット単位AND（`&`）を実行します。
- **<a id="pdf-LUA_OPBOR"></a>`LUA_OPBOR`**：ビット単位OR（`|`）を実行します。
- **<a id="pdf-LUA_OPBXOR"></a>`LUA_OPBXOR`**：ビット単位排他的OR（`~`）を実行します。
- **<a id="pdf-LUA_OPSHL"></a>`LUA_OPSHL`**：左シフト（`<<`）を実行します。
- **<a id="pdf-LUA_OPSHR"></a>`LUA_OPSHR`**：右シフト（`>>`）を実行します。
---

## <a id="lua_atpanic"></a>`lua_atpanic`

[-0, +0, –]

```c
lua_CFunction lua_atpanic (lua_State *L, lua_CFunction panicf);
```

新しいパニック関数を設定し、以前の関数を返します（[§4.4](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#4.4)を参照）。

---

## <a id="lua_call"></a>`lua_call`

[-(nargs+1), +nresults, *e*]

```c
void lua_call (lua_State *L, int nargs, int nresults);
```

関数を呼び出します。通常のLua呼び出しと同様、`lua_call`は`__call`メタメソッドに従います。そのため、ここで「関数」は任意の呼び出し可能な値を意味します。

呼び出しを行うには次のプロトコルを使う必要があります。まず、呼び出す関数をスタックへプッシュします。次に、呼び出しへの引数を正順、つまり第1引数を最初としてプッシュします。最後に[`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)を呼び出します。`nargs`はスタックへプッシュした引数の数です。関数が返ると、すべての引数と関数値がポップされ、呼び出しの結果がスタックへプッシュされます。`nresults`が<a id="pdf-LUA_MULTRET"></a>`LUA_MULTRET`でない限り、結果数は`nresults`へ調整されます。その定数を指定した場合、関数のすべての結果をプッシュします。前者のように結果数を明示する場合、呼び出し元は戻り値を置く領域がスタックにあることを保証する必要があります。後者のようにすべての結果を取得する場合、Luaは戻り値がスタック領域に収まるようにしますが、スタック内の追加領域は保証しません。関数の結果は正順（最初の結果を最初）でスタックへプッシュされるため、呼び出し後は最後の結果がスタック最上部にあります。

`nresults`の最大値は250です。

関数の呼び出し・実行中のすべてのエラーは（`longjmp`によって）上へ伝播します。

次の例は、ホストプログラムが次のLuaコードと等価な操作を行う方法を示します。

```c
     a = f("how", t.x, 14)
```

Cでは次のようになります。

```c
     lua_getglobal(L, "f");                  /* function to be called */
     lua_pushliteral(L, "how");                       /* 1st argument */
     lua_getglobal(L, "t");                    /* table to be indexed */
     lua_getfield(L, -1, "x");        /* push result of t.x (2nd arg) */
     lua_remove(L, -2);                  /* remove 't' from the stack */
     lua_pushinteger(L, 14);                          /* 3rd argument */
     lua_call(L, 3, 1);     /* call 'f' with 3 arguments and 1 result */
     lua_setglobal(L, "a");                         /* set global 'a' */
```

上のコードが*釣り合っている*ことに注意してください。終了時、スタックは元の構成へ戻っています。これは良いプログラミング慣行とみなされます。

---

## <a id="lua_callk"></a>`lua_callk`

[-(nargs + 1), +nresults, *e*]

```c
void lua_callk (lua_State *L,
                int nargs,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

この関数は、呼び出された関数がyieldすることを許可する点（[§4.5](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_call)を参照）を除き、[`lua_call`](/docs/lua/v5-5-1/ja/03-c-api/06-handling-yields-in-c/#4.5)とまったく同様に動作します。

---

## <a id="lua_CFunction"></a>`lua_CFunction`

```c
typedef int (*lua_CFunction) (lua_State *L);
```

C関数の型です。

Luaと正しく通信するため、C関数は引数と結果の受け渡し方法を定義する次のプロトコルを使う必要があります。C関数はLuaから引数をスタック内の正順（最初の引数を最初にプッシュ）で受け取ります。そのため、関数の開始時、`lua_gettop(L)`は関数が受け取った引数の数を返します。第1引数（ある場合）はインデックス1、最後の引数はインデックス`lua_gettop(L)`にあります。Luaへ値を返すには、C関数は正順（最初の結果を最初にプッシュ）でスタックへプッシュし、結果の数をCで返すだけです。結果より下にあるスタック内のそのほかの値はLuaによって適切に破棄されます。Lua関数と同様に、Luaから呼び出されたC関数も複数の結果を返せます。

例として、次の関数は可変数の数値引数を受け取り、その平均と合計を返します。

```c
     static int foo (lua_State *L) {
       int n = lua_gettop(L);    /* number of arguments */
       lua_Number sum = 0.0;
       int i;
       for (i = 1; i <= n; i++) {
         if (!lua_isnumber(L, i)) {
           lua_pushliteral(L, "incorrect argument");
           lua_error(L);
         }
         sum += lua_tonumber(L, i);
       }
       lua_pushnumber(L, sum/n);        /* first result */
       lua_pushnumber(L, sum);         /* second result */
       return 2;                   /* number of results */
     }
```

---

## <a id="lua_checkstack"></a>`lua_checkstack`

[-0, +0, –]

```c
int lua_checkstack (lua_State *L, int n);
```

スタックに少なくとも`n`個の追加要素を置く領域、つまり最大`n`個の値を安全にプッシュできる領域があることを保証します。スタックが固定の最大サイズ（通常は少なくとも数千要素）を超えるか、追加領域のメモリを割り当てられないために要求を満たせなければ、falseを返します。この関数がスタックを縮小することはありません。スタックに追加要素用の領域がすでにある場合は変更しません。

---

## <a id="lua_close"></a>`lua_close`

[-0, +0, –]

```c
void lua_close (lua_State *L);
```

メインスレッドのすべてのアクティブなクローズ対象変数を閉じ、指定されたLuaステートのすべてのオブジェクトを解放し（対応するガベージコレクションのメタメソッドがあれば呼び出します）、このステートが使うすべての動的メモリを解放します。

複数のプラットフォームでは、ホストプログラム終了時にすべてのリソースが自然に解放されるため、この関数を呼び出す必要がない場合があります。一方、デーモンやWebサーバーなど、複数のステートを作成する長時間実行プログラムでは、不要になったステートをすぐに閉じる必要があるでしょう。

---

## <a id="lua_closeslot"></a>`lua_closeslot`

[-0, +0, *e*]

```c
void lua_closeslot (lua_State *L, int index);
```

指定されたインデックスのクローズ対象スロットを閉じ、その値を**nil**へ設定します。このインデックスは、以前にクローズ対象として印を付けられ（[`lua_toclose`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_toclose)を参照）、まだアクティブ（つまり、まだ閉じていない）な最後のインデックスでなければなりません。

この関数を通じて呼び出された`__close`メタメソッドはyieldできません。

---

## <a id="lua_closethread"></a>`lua_closethread`

[-0, +?, –]

```c
int lua_closethread (lua_State *L, lua_State *from);
```

スレッドをリセットし、そのコールスタックを消去して、保留中のすべてのクローズ対象変数を閉じます。引数`from`は`L`をリセットしているコルーチンを表します。そのようなコルーチンがなければ、この引数を`NULL`にできます。

`L`と`from`が等しくない限り、呼び出しはステータスコードを返します。スレッド内にエラー（スレッドを停止させた元のエラー、またはクローズメソッド内のエラー）がなければ[`LUA_OK`](/docs/lua/v5-5-1/ja/03-c-api/05-error-handling-in-c/#pdf-LUA_OK)、それ以外ならエラーステータスです。エラーの場合、エラーオブジェクトをスタック最上部へ置きます。

`L`と`from`が等しい場合は、スレッドが自身を閉じることに相当します。この場合、呼び出しは返りません。代わりに、そのスレッドを（再）開始したresumeが返ります。スレッドはresume内で実行中でなければなりません。

---

## <a id="lua_compare"></a>`lua_compare`

[-0, +0, *e*]

```c
int lua_compare (lua_State *L, int index1, int index2, int op);
```

2つのLua値を比較します。対応するLua演算子の意味論（つまり、メタメソッドを呼び出す可能性があります）に従って、インデックス`index1`の値をインデックス`index2`の値と比較したときに`op`を満たすなら1を返します。それ以外の場合は0を返します。いずれかのインデックスが有効でない場合も0を返します。

`op`の値は次の定数のいずれかでなければなりません。

- **<a id="pdf-LUA_OPEQ"></a>`LUA_OPEQ`**：等しいか（`==`）を比較します。
- **<a id="pdf-LUA_OPLT"></a>`LUA_OPLT`**：より小さいか（`<`）を比較します。
- **<a id="pdf-LUA_OPLE"></a>`LUA_OPLE`**：以下か（`<=`）を比較します。
---
