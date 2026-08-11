---
title: "C APIの関数と型：Unsigned–yieldk"
description: "lua_Unsignedからlua_yieldkまでのアルファベット順C APIリファレンス"
licenseSource: "lua-5.5.1"
---

# C APIの関数と型：Unsigned–yieldk

## <a id="lua_Unsigned"></a>`lua_Unsigned`

```c
typedef ... lua_Unsigned;
```

[`lua_Integer`](/docs/lua/v5-5-1/ja/03-c-api/10-functions-and-types-i-l/#lua_Integer)の符号なし版です。

---

## <a id="lua_upvalueindex"></a>`lua_upvalueindex`

[-0, +0, –]

```c
int lua_upvalueindex (int i);
```

実行中の関数の`i`番目の上位値を表す疑似インデックスを返します（[§4.2](/docs/lua/v5-5-1/ja/03-c-api/03-c-closures/#4.2)を参照）。`i`は範囲*[1,256]*内でなければなりません。

---

## <a id="lua_version"></a>`lua_version`

[-0, +0, –]

```c
lua_Number lua_version (lua_State *L);
```

このコアのバージョン番号を返します。

---

## <a id="lua_WarnFunction"></a>`lua_WarnFunction`

```c
typedef void (*lua_WarnFunction) (void *ud, const char *msg, int tocont);
```

Luaが警告を発するために呼び出す警告関数の型です。第1引数は[`lua_setwarnf`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_setwarnf)が設定した不透明ポインターです。第2引数は警告メッセージです。第3引数は、次の呼び出しのメッセージによってこのメッセージを継続するかを示すブール値です。

警告の詳細については[`warn`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-warn)を参照してください。

---

## <a id="lua_warning"></a>`lua_warning`

[-0, +0, –]

```c
void lua_warning (lua_State *L, const char *msg, int tocont);
```

指定されたメッセージで警告を発します。`tocont`がtrueの呼び出しにあるメッセージは、この関数の別の呼び出しで継続する必要があります。

警告の詳細については[`warn`](/docs/lua/v5-5-1/ja/05-standard-library/03-basic-functions/#pdf-warn)を参照してください。

---

## <a id="lua_Writer"></a>`lua_Writer`

```c
typedef int (*lua_Writer) (lua_State *L,
                           const void* p,
                           size_t sz,
                           void* ud);
```

[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)が使うwriter関数の型です。[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)がチャンクの新しい断片を生成するたびにwriterを呼び出し、書き込むバッファー（`p`）、そのサイズ（`sz`）、[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)へ指定された引数`ud`を渡します。

[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)は最後の断片を書き込んだ後、`NULL`バッファー（サイズ0）を指定してwriter関数をもう一度呼び出し、そのことを通知します。

writerはエラーコードを返します。0はエラーなしを意味し、そのほかの値はエラーを意味し、[`lua_dump`](/docs/lua/v5-5-1/ja/03-c-api/08-functions-and-types-concat-gc/#lua_dump)が再びwriterを呼び出すことを停止します。

---

## <a id="lua_xmove"></a>`lua_xmove`

[-?, +?, –]

```c
void lua_xmove (lua_State *from, lua_State *to, int n);
```

同じステートの異なるスレッド間で値を交換します。

この関数はスタック`from`から`n`個の値をポップし、スタック`to`へプッシュします。

---

## <a id="lua_yield"></a>`lua_yield`

[-?, +?, *v*]

```c
int lua_yield (lua_State *L, int nresults);
```

この関数は[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)と等価ですが、継続を持ちません（[§4.5](/docs/lua/v5-5-1/ja/03-c-api/06-handling-yields-in-c/#4.5)を参照）。したがって、スレッドがresumeすると、`lua_yield`を呼び出した関数を呼び出した関数を継続します。予想外の動作を避けるため、この関数は末尾呼び出しでのみ呼び出すべきです。

---

## <a id="lua_yieldk"></a>`lua_yieldk`

[-?, +?, *v*]

```c
int lua_yieldk (lua_State *L,
                int nresults,
                lua_KContext ctx,
                lua_KFunction k);
```

コルーチン（スレッド）をyieldします。

C関数が[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)を呼び出すと、実行中のコルーチンは実行を中断し、このコルーチンを開始した[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)の呼び出しが返ります。引数`nresults`は、[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)へ結果として渡すスタック上の値の数です。

コルーチンが再びresumeされると、Luaは指定された継続関数`k`を呼び出し、yieldしたC関数の実行を継続します（[§4.5](/docs/lua/v5-5-1/ja/03-c-api/06-handling-yields-in-c/#4.5)を参照）。この継続関数は以前の関数と同じスタックを受け取ります。そこではすべての結果（`nresults`）が除去され、[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)へ渡された引数に置き換えられています。さらに、継続関数は[`lua_yieldk`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yieldk)へ渡された値`ctx`を受け取ります。

通常、この関数は返りません。コルーチンが最終的にresumeすると、継続関数の実行を続けます。ただし、行フックまたはカウントフック（[§4.7](/docs/lua/v5-5-1/ja/03-c-api/17-debug-interface/#4.7)を参照）の内部からこの関数を呼び出すという特殊な場合があります。この場合、継続なし（おそらく[`lua_yield`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yield)の形式）、結果なしで`lua_yieldk`を呼び出し、フックは呼び出し直後に返るべきです。Luaはyieldし、コルーチンが再びresumeすると、フックを発動させた（Lua）関数の通常の実行を継続します。

継続関数を持たない保留中のC呼び出し（*C呼び出し境界*と呼びます）があるスレッドから呼び出した場合、またはresume内で実行されていないスレッド（通常はメインスレッド）から呼び出した場合、この関数はエラーを発生させる可能性があります。
