---
title: "C APIの関数と型：toboolean–typename"
description: "変換と型検査に関するアルファベット順C APIリファレンス"
---

# C APIの関数と型：toboolean–typename

## <a id="lua_toboolean"></a>`lua_toboolean`

[-0, +0, –]

```c
int lua_toboolean (lua_State *L, int index);
```

指定されたインデックスのLua値をCのブール値（0または1）へ変換します。Luaのすべての検査と同様に、[`lua_toboolean`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_toboolean)は**false**と**nil**以外のすべてのLua値に対してtrueを返し、それ以外ではfalseを返します。（実際のブール値だけを受け入れたい場合は、[`lua_isboolean`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_isboolean)を使って値の型を検査してください。）

---

## <a id="lua_tocfunction"></a>`lua_tocfunction`

[-0, +0, –]

```c
lua_CFunction lua_tocfunction (lua_State *L, int index);
```

指定されたインデックスの値をC関数へ変換します。その値はC関数でなければならず、それ以外の場合は`NULL`を返します。

---

## <a id="lua_toclose"></a>`lua_toclose`

[-0, +0, *v*]

```c
void lua_toclose (lua_State *L, int index);
```

スタック内の指定されたインデックスをクローズ対象スロットとして印を付けます（[§3.3.8](/docs/lua/v5-5-1/ja/02-language/09-statements/#3.3.8)を参照）。Luaのクローズ対象変数と同様、そのスタックスロットの値はスコープを外れると閉じられます。ここでC関数の文脈においてスコープを外れるとは、実行中の関数がLuaへ戻る、エラーがある、[`lua_settop`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settop)または[`lua_pop`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pop)によってスロットがスタックから除去される、あるいは[`lua_closeslot`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_closeslot)が呼び出されることを意味します。クローズ対象として印を付けられたスロットは、事前に[`lua_closeslot`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settop)で無効化されていない限り、[`lua_settop`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pop)または[`lua_pop`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_closeslot)以外のAPI関数でスタックから除去してはいけません。

指定されたスロットの値が`__close`メタメソッドを持たず、偽の値でもない場合、この関数はエラーを発生させます。

アクティブなクローズ対象スロット以下のインデックスに対して、この関数を呼び出してはいけません。

エラーの場合も通常のreturnの場合も、`__close`メタメソッドが実行される時点ではCスタックがすでに巻き戻されていることに注意してください。そのため、呼び出し元の関数で宣言されたすべての自動C変数（たとえばバッファー）はスコープ外になっています。

---

## <a id="lua_tointeger"></a>`lua_tointeger`

[-0, +0, –]

```c
lua_Integer lua_tointeger (lua_State *L, int index);
```

`isnum`を`NULL`とした[`lua_tointegerx`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tointegerx)と等価です。

---

## <a id="lua_tointegerx"></a>`lua_tointegerx`

[-0, +0, –]

```c
lua_Integer lua_tointegerx (lua_State *L, int index, int *isnum);
```

指定されたインデックスのLua値を符号付き整数型[`lua_Integer`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_Integer)へ変換します。Lua値は整数、または整数へ変換できる数値か文字列でなければなりません（[§3.4.3](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.3)を参照）。それ以外の場合、`lua_tointegerx`は0を返します。

`isnum`が`NULL`でなければ、その参照先へ操作が成功したかを示すブール値を代入します。

---

## <a id="lua_tolstring"></a>`lua_tolstring`

[-0, +0, *m*]

```c
const char *lua_tolstring (lua_State *L, int index, size_t *len);
```

指定されたインデックスのLua値をC文字列へ変換します。Lua値は文字列または数値でなければならず、それ以外の場合は`NULL`を返します。値が数値なら、`lua_tolstring`は*スタック内の実際の値も文字列へ変更します*。（テーブル走査中にキーへ`lua_tolstring`を適用すると、この変更によって[`lua_next`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_next)が混乱します。）

`len`が`NULL`でなければ、関数は`*len`へ文字列の長さを設定します。返されるC文字列は最後の文字の後に常にゼロ（'`\0`'）を持ちますが、内部にほかのゼロを含む場合があります。

対応するLua値がスタックから除去されると、`lua_tolstring`が返したポインターはガベージコレクターによって無効化される可能性があります（[§4.1.3](/docs/lua/v5-5-1/ja/03-c-api/02-stack/#4.1.3)を参照）。

この関数がメモリエラーを発生させる可能性があるのは、数値を文字列へ変換するときだけです（新しい文字列を作成する可能性があるためです）。

---

## <a id="lua_tonumber"></a>`lua_tonumber`

[-0, +0, –]

```c
lua_Number lua_tonumber (lua_State *L, int index);
```

`isnum`を`NULL`とした[`lua_tonumberx`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tonumberx)と等価です。

---

## <a id="lua_tonumberx"></a>`lua_tonumberx`

[-0, +0, –]

```c
lua_Number lua_tonumberx (lua_State *L, int index, int *isnum);
```

指定されたインデックスのLua値をCの型[`lua_Number`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_Number)へ変換します（[`lua_Number`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_Number)を参照）。Lua値は数値または数値へ変換できる文字列でなければなりません（[§3.4.3](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.3)を参照）。それ以外の場合、[`lua_tonumberx`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tonumberx)は0を返します。

`isnum`が`NULL`でなければ、その参照先へ操作が成功したかを示すブール値を代入します。

---

## <a id="lua_topointer"></a>`lua_topointer`

[-0, +0, –]

```c
const void *lua_topointer (lua_State *L, int index);
```

指定されたインデックスの値を汎用Cポインター（`void*`）へ変換します。値にはユーザーデータ、テーブル、スレッド、文字列、または関数を指定できます。それ以外の場合、`lua_topointer`は`NULL`を返します。異なるオブジェクトは異なるポインターになります。ポインターを元の値へ戻す方法はありません。

通常、この関数はハッシュとデバッグ情報にのみ使われます。

---

## <a id="lua_tostring"></a>`lua_tostring`

[-0, +0, *m*]

```c
const char *lua_tostring (lua_State *L, int index);
```

`len`を`NULL`とした[`lua_tolstring`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_tolstring)と等価です。

---

## <a id="lua_tothread"></a>`lua_tothread`

[-0, +0, –]

```c
lua_State *lua_tothread (lua_State *L, int index);
```

指定されたインデックスの値をLuaスレッド（`lua_State*`として表現）へ変換します。この値はスレッドでなければならず、それ以外の場合、関数は`NULL`を返します。

---

## <a id="lua_touserdata"></a>`lua_touserdata`

[-0, +0, –]

```c
void *lua_touserdata (lua_State *L, int index);
```

指定されたインデックスの値がフルユーザーデータなら、そのメモリブロックのアドレスを返します。値がライトユーザーデータなら、その値（ポインター）を返します。それ以外の場合は`NULL`を返します。

---

## <a id="lua_type"></a>`lua_type`

[-0, +0, –]

```c
int lua_type (lua_State *L, int index);
```

指定された有効なインデックスの値の型を返し、有効でないものの許容されるインデックスには`LUA_TNONE`を返します。[`lua_type`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_type)が返す型は、`lua.h`で定義された次の定数によって符号化されます：<a id="pdf-LUA_TNIL"></a>`LUA_TNIL`、<a id="pdf-LUA_TNUMBER"></a>`LUA_TNUMBER`、<a id="pdf-LUA_TBOOLEAN"></a>`LUA_TBOOLEAN`、<a id="pdf-LUA_TSTRING"></a>`LUA_TSTRING`、<a id="pdf-LUA_TTABLE"></a>`LUA_TTABLE`、<a id="pdf-LUA_TFUNCTION"></a>`LUA_TFUNCTION`、<a id="pdf-LUA_TUSERDATA"></a>`LUA_TUSERDATA`、<a id="pdf-LUA_TTHREAD"></a>`LUA_TTHREAD`、<a id="pdf-LUA_TLIGHTUSERDATA"></a>`LUA_TLIGHTUSERDATA`。

---

## <a id="lua_typename"></a>`lua_typename`

[-0, +0, –]

```c
const char *lua_typename (lua_State *L, int tp);
```

値`tp`によって符号化された型の名前を返します。この値は[`lua_type`](/docs/lua/v5-5-1/ja/03-c-api/15-functions-and-types-to-type/#lua_type)が返す値のいずれかでなければなりません。

---
