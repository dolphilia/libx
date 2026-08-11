---
title: "コルーチン"
description: "Luaコルーチンの実行とyield"
licenseSource: "lua-5.5.1"
---

# 2.6 – <a id="2.6"></a>コルーチン

Luaは、*協調的マルチスレッディング*とも呼ばれるコルーチンをサポートする。Luaのコルーチンは、独立した実行スレッドを表す。ただし、マルチスレッドシステムのスレッドとは異なり、コルーチンはyield関数を明示的に呼び出した場合にだけ実行を中断する。

コルーチンは、[`coroutine.create`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.create)を呼び出して作成する。唯一の引数は、コルーチンのメイン関数となる関数である。`create`関数は新しいコルーチンを作成し、そのハンドル（*thread*型のオブジェクト）を返すだけで、コルーチンを開始しない。

コルーチンは、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)を呼び出して実行する。[`coroutine.create`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)が返したスレッドを最初の引数として[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.create)を初めて呼び出すと、コルーチンはそのメイン関数を呼び出して実行を開始する。[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)へ渡した追加の引数は、その関数の引数として渡される。コルーチンは、実行開始後、終了するか*yieldする*まで動作する。

コルーチンの実行は2つの方法で終了する。メイン関数が（明示的に、または最後の命令の後に暗黙に）戻る正常終了と、保護されていないエラーによる異常終了である。正常終了の場合、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)は**true**に続けて、コルーチンのメイン関数が返したすべての値を返す。エラーの場合、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)は**false**に続けてエラーオブジェクトを返す。この場合、コルーチンはスタックを巻き戻さないため、エラー発生後にデバッグAPIでスタックを調べられる。

コルーチンは、[`coroutine.yield`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.yield)を呼び出すことでyieldする。コルーチンがyieldすると、対応する[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)は直ちに戻る。これは、ネストした関数呼び出しの内部（すなわちメイン関数ではなく、メイン関数が直接または間接的に呼び出した関数）でyieldした場合も同じである。yieldの場合、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)は**true**に続けて、[`coroutine.yield`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.yield)へ渡されたすべての値も返す。同じコルーチンを次に再開すると、yieldした位置から実行を続行し、[`coroutine.yield`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.yield)の呼び出しは[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)へ渡された追加の引数をすべて返す。

[`coroutine.create`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.create)と同様に、[`coroutine.wrap`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.wrap)関数もコルーチンを作成する。ただし、コルーチン自体を返す代わりに、呼び出すとそのコルーチンを再開する関数を返す。この関数へ渡した引数は、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)への追加引数となる。[`coroutine.wrap`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.wrap)は、[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)が返すすべての値から、最初の値（ブール値のエラーコード）を除いて返す。[`coroutine.resume`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.resume)とは異なり、[`coroutine.wrap`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.wrap)が作成した関数は、すべてのエラーを呼び出し元へ伝播する。この場合、その関数はコルーチンも閉じる（[`coroutine.close`](/docs/lua/v5-5-1/ja/05-standard-library/04-coroutine-manipulation/#pdf-coroutine.close)を参照）。

コルーチンの動作例として、次のコードを考える。

```lua
     function foo (a)
       print("foo", a)
       return coroutine.yield(2*a)
     end
     
     co = coroutine.create(function (a,b)
           print("co-body", a, b)
           local r = foo(a+1)
           print("co-body", r)
           local r, s = coroutine.yield(a+b, a-b)
           print("co-body", r, s)
           return b, "end"
     end)
     
     print("main", coroutine.resume(co, 1, 10))
     print("main", coroutine.resume(co, "r"))
     print("main", coroutine.resume(co, "x", "y"))
     print("main", coroutine.resume(co, "x", "y"))
```

これを実行すると、次の出力が生成される。

```lua
     co-body 1       10
     foo     2
     main    true    4
     co-body r
     main    true    11      -9
     co-body x       y
     main    true    10      end
     main    false   cannot resume dead coroutine
```

C APIからコルーチンを作成し操作することもできる。[`lua_newthread`](/docs/lua/v5-5-1/ja/03-c-api/11-functions-and-types-n-pcall/#lua_newthread)、[`lua_resume`](/docs/lua/v5-5-1/ja/03-c-api/13-functions-and-types-raw-resume/#lua_resume)、[`lua_yield`](/docs/lua/v5-5-1/ja/03-c-api/16-functions-and-types-u-y/#lua_yield)の各関数を参照すること。
