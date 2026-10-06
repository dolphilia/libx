## <a id="lua_toclose"></a>`lua_toclose`

[-0, +0, *v*]

```c
void lua_toclose (lua_State *L, int index);
```

スタック内の指定されたインデックスをクローズ対象スロットとして印を付けます（[§3.3.8](/docs/lua/v5-5-1/ja/02-language/09-statements/#3.3.8)を参照）。Luaのクローズ対象変数と同様、そのスタックスロットの値はスコープを外れると閉じられます。ここでC関数の文脈においてスコープを外れるとは、実行中の関数がLuaへ戻る、エラーがある、[`lua_settop`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settop)または[`lua_pop`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pop)によってスロットがスタックから除去される、あるいは[`lua_closeslot`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_closeslot)が呼び出されることを意味します。クローズ対象として印を付けられたスロットは、事前に[`lua_closeslot`](/docs/lua/v5-5-1/ja/03-c-api/07-functions-and-types-a-c/#lua_closeslot)で無効化されていない限り、[`lua_settop`](/docs/lua/v5-5-1/ja/03-c-api/14-functions-and-types-set-status/#lua_settop)または[`lua_pop`](/docs/lua/v5-5-1/ja/03-c-api/12-functions-and-types-pop-push/#lua_pop)以外のAPI関数でスタックから除去してはいけません。

指定されたスロットの値が`__close`メタメソッドを持たず、偽の値でもない場合、この関数はエラーを発生させます。

アクティブなクローズ対象スロット以下のインデックスに対して、この関数を呼び出してはいけません。

エラーの場合も通常のreturnの場合も、`__close`メタメソッドが実行される時点ではCスタックがすでに巻き戻されていることに注意してください。そのため、呼び出し元の関数で宣言されたすべての自動C変数（たとえばバッファー）はスコープ外になっています。
