---
title: "補助関数と型：addchar–buffsub"
description: "バッファー指向の補助APIリファレンス"
licenseSource: "lua-5.5.1"
---

# 5.1 – <a id="5.1"></a>関数と型

ここでは、補助ライブラリのすべての関数と型をアルファベット順に列挙します。

---

## <a id="luaL_addchar"></a>`luaL_addchar`

[-?, +?, *m*]

```c
void luaL_addchar (luaL_Buffer *B, char c);
```

バイト`c`をバッファー`B`へ追加します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。

---

## <a id="luaL_addgsub"></a>`luaL_addgsub`

[-?, +?, *m*]

```c
const void luaL_addgsub (luaL_Buffer *B, const char *s,
                         const char *p, const char *r);
```

文字列`s`のコピーをバッファー`B`へ追加し（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）、文字列`p`のすべての出現を文字列`r`へ置き換えます。

---

## <a id="luaL_addlstring"></a>`luaL_addlstring`

[-?, +?, *m*]

```c
void luaL_addlstring (luaL_Buffer *B, const char *s, size_t l);
```

`s`が指す長さ`l`の文字列をバッファー`B`へ追加します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。文字列には埋め込まれたゼロを含められます。

---

## <a id="luaL_addsize"></a>`luaL_addsize`

[-?, +?, –]

```c
void luaL_addsize (luaL_Buffer *B, size_t n);
```

以前にバッファー領域へコピーした長さ`n`の文字列をバッファー`B`へ追加します（[`luaL_prepbuffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffer)を参照）。

---

## <a id="luaL_addstring"></a>`luaL_addstring`

[-?, +?, *m*]

```c
void luaL_addstring (luaL_Buffer *B, const char *s);
```

`s`が指すゼロ終端文字列をバッファー`B`へ追加します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。

---

## <a id="luaL_addvalue"></a>`luaL_addvalue`

[-?, +?, *m*]

```c
void luaL_addvalue (luaL_Buffer *B);
```

スタック最上部の値をバッファー`B`へ追加します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。値をポップします。

これは、スタックに追加要素（バッファーへ追加する値）を置いた状態で呼び出せる（また、そうしなければならない）唯一の文字列バッファー関数です。

---

## <a id="luaL_argcheck"></a>`luaL_argcheck`

[-0, +0, *v*]

```c
void luaL_argcheck (lua_State *L,
                    int cond,
                    int arg,
                    const char *extramsg);
```

`cond`がtrueかを確認します。trueでなければ、標準メッセージでエラーを発生させます（[`luaL_argerror`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_argerror)を参照）。

---

## <a id="luaL_argerror"></a>`luaL_argerror`

[-0, +0, *v*]

```c
int luaL_argerror (lua_State *L, int arg, const char *extramsg);
```

この関数を呼び出したC関数の引数`arg`に関する問題を、`extramsg`を注釈として含む標準メッセージで報告するエラーを発生させます。

```c
     bad argument #arg to 'funcname' (extramsg)
```

この関数が返ることはありません。

---

## <a id="luaL_argexpected"></a>`luaL_argexpected`

[-0, +0, *v*]

```c
void luaL_argexpected (lua_State *L,
                       int cond,
                       int arg,
                       const char *tname);
```

`cond`がtrueかを確認します。trueでなければ、標準メッセージで引数`arg`の型に関するエラーを発生させます（[`luaL_typeerror`](/docs/lua/v5-5-1/ja/04-auxiliary-library/06-functions-and-types-ref-where/#luaL_typeerror)を参照）。

---

## <a id="luaL_Buffer"></a>`luaL_Buffer`

```c
typedef struct luaL_Buffer luaL_Buffer;
```

*文字列バッファー*の型です。

文字列バッファーを使うと、CコードでLua文字列を断片ごとに構築できます。使用パターンは次のとおりです。

- 最初に、型
  
  [`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)
  
  の変数
  
  `b`
  
  を宣言します。
- 次に、呼び出し
  
  `luaL_buffinit(L,&b)`
  
  で初期化します。
- 次に、いずれかの
  
  `luaL_add*`
  
  関数を呼び出し、文字列の断片をバッファーへ追加します。
- 最後に、
  
  `luaL_pushresult(&b)`
  
  を呼び出します。この呼び出しは最終的な文字列をスタック最上部に残します。

結果の文字列の最大サイズが事前に分かっている場合、次のようにバッファーを使えます。

- 最初に、型
  
  [`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)
  
  の変数
  
  `b`
  
  を宣言します。
- 次に、呼び出し
  
  `luaL_buffinitsize(L,&b,sz)`
  
  で初期化し、サイズ
  
  `sz`
  
  の領域を事前に割り当てます。
- 次に、その領域へ文字列を生成します。
- 最後に、
  
  `luaL_pushresultsize(&b,sz)`
  
  を呼び出します。ここで
  
  `sz`
  
  は、その領域へコピーされた結果の文字列の総サイズです（事前割り当てサイズ以下の場合があります）。

通常の動作中、文字列バッファーは可変数のスタックスロットを使います。そのため、バッファーを使っている間、スタック最上部の位置が分かっていると仮定できません。バッファー操作を連続して呼び出す間では、使用が釣り合っている限りスタックを使えます。つまり、バッファー操作を呼び出すとき、スタックは直前のバッファー操作直後と同じレベルでなければなりません。（この規則の唯一の例外は[`luaL_addvalue`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_addvalue)です。）[`luaL_pushresult`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_pushresult)を呼び出すと、スタックは、バッファー初期化時のレベルに戻り、最上部に最終的な文字列が置かれます。

---

## <a id="luaL_buffaddr"></a>`luaL_buffaddr`

[-0, +0, –]

```c
char *luaL_buffaddr (luaL_Buffer *B);
```

バッファー`B`の現在の内容のアドレスを返します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。バッファーへ何かを追加すると、このアドレスが無効になる可能性があることに注意してください。

---

## <a id="luaL_buffinit"></a>`luaL_buffinit`

[-0, +?, –]

```c
void luaL_buffinit (lua_State *L, luaL_Buffer *B);
```

バッファー`B`を初期化します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。この関数は領域を割り当てません。バッファーは変数として宣言する必要があります。

---

## <a id="luaL_bufflen"></a>`luaL_bufflen`

[-0, +0, –]

```c
size_t luaL_bufflen (luaL_Buffer *B);
```

バッファー`B`の現在の内容の長さを返します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。

---

## <a id="luaL_buffinitsize"></a>`luaL_buffinitsize`

[-?, +?, *m*]

```c
char *luaL_buffinitsize (lua_State *L, luaL_Buffer *B, size_t sz);
```

[`luaL_buffinit`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_buffinit)、[`luaL_prepbuffsize`](/docs/lua/v5-5-1/ja/04-auxiliary-library/05-functions-and-types-make-push/#luaL_prepbuffsize)という呼び出し列と等価です。

---

## <a id="luaL_buffsub"></a>`luaL_buffsub`

[-?, +?, –]

```c
void luaL_buffsub (luaL_Buffer *B, int n);
```

バッファー`B`から`n`バイトを除去します（[`luaL_Buffer`](/docs/lua/v5-5-1/ja/04-auxiliary-library/02-functions-and-types-add-buffer/#luaL_Buffer)を参照）。バッファーは少なくともそのバイト数を持つ必要があります。

---
