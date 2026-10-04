---
title: "組込み演算子と関数"
order: 4
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/3/title">

<h2 id="builtin-operators-and-functions">組込み演算子と関数</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/body">

<p>jqの演算子の一部（たとえば <code>+</code>）は、引数の型（配列、数値など）によって異なる処理を行います。ただし、jqは暗黙の型変換を行いません。文字列をオブジェクトに加えようとすると、エラーメッセージが表示され、結果は得られません。</p>
<p>すべての数値はIEEE754の倍精度浮動小数点表現へ変換されることに注意してください。算術演算子と論理演算子は、この変換済みの倍精度数値を使って動作します。これらの演算の結果も、倍精度に制限されます。</p>
<p>この数値の扱いに対する唯一の例外は、元の数値リテラルを保存したものです。最初にリテラルとして与えられた数値が、プログラムの最後まで一度も変更されなかった場合、元のリテラル形式のまま出力されます。元のリテラルをIEEE754の倍精度浮動小数点数へ変換すると切り詰められる場合も、これに含まれます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/0/title">

<h3 id="addition">加算：<code>+</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/0/body">

<p>演算子 <code>+</code> は2つのフィルターを受け取り、両方を同じ入力に適用して、その結果を加えます。「加える」が何を意味するかは、対象の型によって異なります。</p>
<ul>
<li>
<p><strong>数値</strong>は、通常の算術演算で加算されます。</p>
</li>
<li>
<p><strong>配列</strong>は、連結されて、より大きな配列になります。</p>
</li>
<li>
<p><strong>文字列</strong>は、結合されて、より長い文字列になります。</p>
</li>
<li>
<p><strong>オブジェクト</strong>は、両方のオブジェクトのすべてのキーと値の組を1つのオブジェクトへ挿入する、マージ処理で加算されます。両方のオブジェクトに同じキーの値がある場合、<code>+</code> の右側のオブジェクトが優先されます（再帰的にマージするには、<code>*</code> 演算子を使ってください）。</p>
</li>
</ul>
<p><code>null</code> は任意の値に加えることができ、もう一方の値を変更せずに返します。</p>

</div>

<!-- jq-example:sections/3/entries/0/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.a + 1'
```

入力

```text
{"a": 7}
```

出力 1

```text
8
```

<!-- jq-example:sections/3/entries/0/examples/0:end -->

<!-- jq-example:sections/3/entries/0/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.a + .b'
```

入力

```text
{"a": [1,2], "b": [3,4]}
```

出力 1

```text
[1,2,3,4]
```

<!-- jq-example:sections/3/entries/0/examples/1:end -->

<!-- jq-example:sections/3/entries/0/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '.a + null'
```

入力

```text
{"a": 1}
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/0/examples/2:end -->

<!-- jq-example:sections/3/entries/0/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '.a + 1'
```

入力

```text
{}
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/0/examples/3:end -->

<!-- jq-example:sections/3/entries/0/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq '{a: 1} + {b: 2} + {c: 3} + {a: 42}'
```

入力

```text
null
```

出力 1

```text
{"a": 42, "b": 2, "c": 3}
```

<!-- jq-example:sections/3/entries/0/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/1/title">

<h3 id="subtraction">減算：<code>-</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/1/body">

<p>数値に対する通常の算術的な減算に加えて、<code>-</code> 演算子は配列にも使えます。2つ目の配列の要素について、1つ目の配列からすべての出現箇所を取り除きます。</p>

</div>

<!-- jq-example:sections/3/entries/1/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '4 - .a'
```

入力

```text
{"a":3}
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/1/examples/0:end -->

<!-- jq-example:sections/3/entries/1/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '. - ["xml", "yaml"]'
```

入力

```text
["xml", "yaml", "json"]
```

出力 1

```text
["json"]
```

<!-- jq-example:sections/3/entries/1/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/2/title">

<h3 id="multiplication-division-modulo">乗算・除算・剰余：<code>*</code>、<code>/</code>、<code>%</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/2/body">

<p>これらの中置演算子は、2つの数値を与えると期待どおりに動作します。0による除算はエラーになります。<code>x % y</code> は、xのyによる剰余を計算します。</p>
<p>文字列に数値を掛けると、その数だけ文字列を連結したものを生成します。<code>"x" * 0</code> は <code>""</code> を生成します。</p>
<p>文字列を別の文字列で割ると、2つ目の文字列を区切りとして1つ目の文字列を分割します。</p>
<p>2つのオブジェクトを掛けると、再帰的にマージします。加算と同様に動作しますが、両方のオブジェクトに同じキーの値があり、その値がオブジェクトである場合、その2つの値も同じ方法でマージされます。</p>

</div>

<!-- jq-example:sections/3/entries/2/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '10 / . * 3'
```

入力

```text
5
```

出力 1

```text
6
```

<!-- jq-example:sections/3/entries/2/examples/0:end -->

<!-- jq-example:sections/3/entries/2/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '. / ", "'
```

入力

```text
"a, b,c,d, e"
```

出力 1

```text
["a","b,c,d","e"]
```

<!-- jq-example:sections/3/entries/2/examples/1:end -->

<!-- jq-example:sections/3/entries/2/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '{"k": {"a": 1, "b": 2}} * {"k": {"a": 0,"c": 3}}'
```

入力

```text
null
```

出力 1

```text
{"k": {"a": 0, "b": 2, "c": 3}}
```

<!-- jq-example:sections/3/entries/2/examples/2:end -->

<!-- jq-example:sections/3/entries/2/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '.[] | (1 / .)?'
```

入力

```text
[1,0,-1]
```

出力 1

```text
1
```

出力 2

```text
-1
```

<!-- jq-example:sections/3/entries/2/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/3/title">

<h3 id="abs"><code>abs</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/3/body">

<p>組込み関数 <code>abs</code> は、単純に <code>if . &lt; 0 then - . else . end</code> と定義されています。</p>
<p>数値を入力した場合、これは絶対値になります。この定義が数値入力に与える影響については、恒等フィルターの節を参照してください。</p>
<p>数値の絶対値を浮動小数点数として計算する場合は、<code>fabs</code> の使用を検討してください。</p>

</div>

<!-- jq-example:sections/3/entries/3/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'map(abs)'
```

入力

```text
[-10, -1.1, -1e-1]
```

出力 1

```text
[10,1.1,1e-1]
```

<!-- jq-example:sections/3/entries/3/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/4/title">

<h3 id="length"><code>length</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/4/body">

<p>組込み関数 <code>length</code> は、さまざまな型の値の長さを取得します。</p>
<ul>
<li>
<p><strong>文字列</strong>の長さは、含まれるUnicodeコードポイントの数です（ASCIIだけで構成されている場合、そのJSONエンコード後のバイト長と同じになります）。</p>
</li>
<li>
<p><strong>数値</strong>の長さは、その絶対値です。</p>
</li>
<li>
<p><strong>配列</strong>の長さは、要素の数です。</p>
</li>
<li>
<p><strong>オブジェクト</strong>の長さは、キーと値の組の数です。</p>
</li>
<li>
<p><strong>null</strong>の長さは0です。</p>
</li>
<li>
<p><strong>真偽値</strong>に <code>length</code> を使うと、エラーになります。</p>
</li>
</ul>

</div>

<!-- jq-example:sections/3/entries/4/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | length'
```

入力

```text
[[1,2], "string", {"a":2}, null, -5]
```

出力 1

```text
2
```

出力 2

```text
6
```

出力 3

```text
1
```

出力 4

```text
0
```

出力 5

```text
5
```

<!-- jq-example:sections/3/entries/4/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/5/title">

<h3 id="utf8bytelength"><code>utf8bytelength</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/5/body">

<p>組込み関数 <code>utf8bytelength</code> は、文字列をUTF-8でエンコードするために使うバイト数を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/5/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'utf8bytelength'
```

入力

```text
"\u03bc"
```

出力 1

```text
2
```

<!-- jq-example:sections/3/entries/5/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/6/title">

<h3 id="keys-keys_unsorted"><code>keys</code>, <code>keys_unsorted</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/6/body">

<p>組込み関数 <code>keys</code> は、オブジェクトを与えると、そのキーを配列として返します。</p>
<p>キーは、Unicodeコードポイントの順序で「アルファベット順」にソートされます。これは、特定の言語で特に意味のある順序ではありませんが、ロケール設定にかかわらず、同じキーの集合を持つ2つのオブジェクトでは同じ順序になることが保証されます。</p>
<p><code>keys</code> に配列を与えると、その配列の有効な索引、つまり0からlength-1までの整数を返します。</p>
<p>関数 <code>keys_unsorted</code> は <code>keys</code> と同様ですが、入力がオブジェクトの場合、キーはソートされず、おおむね挿入順になります。</p>

</div>

<!-- jq-example:sections/3/entries/6/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'keys'
```

入力

```text
{"abc": 1, "abcd": 2, "Foo": 3}
```

出力 1

```text
["Foo", "abc", "abcd"]
```

<!-- jq-example:sections/3/entries/6/examples/0:end -->

<!-- jq-example:sections/3/entries/6/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'keys'
```

入力

```text
[42,3,35]
```

出力 1

```text
[0,1,2]
```

<!-- jq-example:sections/3/entries/6/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/7/title">

<h3 id="has"><code>has(key)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/7/body">

<p>組込み関数 <code>has</code> は、入力オブジェクトに指定したキーがあるかどうか、または入力配列の指定した索引に要素があるかどうかを返します。</p>
<p><code>has($key)</code> は、<code>$key</code> が <code>keys</code> の返す配列の要素かどうかを調べるのと同じ効果がありますが、<code>has</code> の方が高速です。</p>

</div>

<!-- jq-example:sections/3/entries/7/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'map(has("foo"))'
```

入力

```text
[{"foo": 42}, {}]
```

出力 1

```text
[true, false]
```

<!-- jq-example:sections/3/entries/7/examples/0:end -->

<!-- jq-example:sections/3/entries/7/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'map(has(2))'
```

入力

```text
[[0,1], ["a","b","c"]]
```

出力 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/7/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/8/title">

<h3 id="in"><code>in</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/8/body">

<p>組込み関数 <code>in</code> は、入力のキーが指定したオブジェクトにあるかどうか、または入力の索引が指定した配列の要素に対応するかどうかを返します。基本的には、<code>has</code> の向きを逆にしたものです。</p>

</div>

<!-- jq-example:sections/3/entries/8/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | in({"foo": 42})'
```

入力

```text
["foo", "bar"]
```

出力 1

```text
true
```

出力 2

```text
false
```

<!-- jq-example:sections/3/entries/8/examples/0:end -->

<!-- jq-example:sections/3/entries/8/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'map(in([0,1]))'
```

入力

```text
[2, 0]
```

出力 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/8/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/9/title">

<h3 id="map-map_values"><code>map(f)</code>, <code>map_values(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/9/body">

<p>任意のフィルター <code>f</code> に対して、<code>map(f)</code> と <code>map_values(f)</code> は、入力配列またはオブジェクトの各値に <code>f</code> を適用します。これらは <code>.[]</code> の値です。</p>
<p>エラーがない場合、<code>map(f)</code> は常に配列を出力します。一方、<code>map_values(f)</code> は、配列を与えられた場合は配列を、オブジェクトを与えられた場合はオブジェクトを出力します。</p>
<p><code>map_values(f)</code> への入力がオブジェクトの場合、出力オブジェクトは入力オブジェクトと同じキーを持ちます。ただし、その値を <code>f</code> へパイプで渡したときに値が1つも生成されないキーは除かれます。</p>
<p><code>map(f)</code> と <code>map_values(f)</code> の主な違いは、前者が、<code>($x|f)</code> のすべての値を単に配列へまとめるのに対し（<code>$x</code> は入力配列またはオブジェクトの各値です）、<code>map_values(f)</code> は <code>first($x|f)</code> だけを使う点です。</p>
<p>具体的には、オブジェクト入力の場合、<code>map_values(f)</code> は、<code>first(.[$k]|f)</code> の値を順に調べて、出力オブジェクトを構築します。このとき <code>$k</code> は入力の各キーです。この式が値を1つも生成しなければ、対応するキーは削除されます。それ以外の場合、出力オブジェクトのキー <code>$k</code> には、その値が入ります。</p>
<p>以下の例で、配列に対する <code>map</code> と <code>map_values</code> の動作を示します。これらの例では、どの場合も入力は <code>[1]</code> であるとします。</p>
<pre><code>map(.+1)          #=&gt;  [2]&#10;map(., .)         #=&gt;  [1,1]&#10;map(empty)        #=&gt;  []&#10;&#10;map_values(.+1)   #=&gt;  [2]&#10;map_values(., .)  #=&gt;  [1]&#10;map_values(empty) #=&gt;  []&#10;</code></pre>
<p><code>map(f)</code> は <code>[.[] | f]</code> と同じで、<code>map_values(f)</code> は <code>.[] |= f</code> と同じです。</p>
<p>実際、これらがその実装です。</p>

</div>

<!-- jq-example:sections/3/entries/9/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'map(.+1)'
```

入力

```text
[1,2,3]
```

出力 1

```text
[2,3,4]
```

<!-- jq-example:sections/3/entries/9/examples/0:end -->

<!-- jq-example:sections/3/entries/9/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'map_values(.+1)'
```

入力

```text
{"a": 1, "b": 2, "c": 3}
```

出力 1

```text
{"a": 2, "b": 3, "c": 4}
```

<!-- jq-example:sections/3/entries/9/examples/1:end -->

<!-- jq-example:sections/3/entries/9/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'map(., .)'
```

入力

```text
[1,2]
```

出力 1

```text
[1,1,2,2]
```

<!-- jq-example:sections/3/entries/9/examples/2:end -->

<!-- jq-example:sections/3/entries/9/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'map_values(. // empty)'
```

入力

```text
{"a": null, "b": true, "c": false}
```

出力 1

```text
{"b":true}
```

<!-- jq-example:sections/3/entries/9/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/10/title">

<h3 id="pick"><code>pick(pathexps)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/10/body">

<p>指定した一連のパス式によって定義される、入力オブジェクトまたは配列の射影を出力します。<code>p</code> が指定したパス式のいずれかであれば、<code>(. | p)</code> は <code>(. | pick(pathexps) | p)</code> と同じ値に評価されます。配列では、負の索引や <code>.[m:n]</code> という指定を使うべきではありません。</p>

</div>

<!-- jq-example:sections/3/entries/10/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'pick(.a, .b.c, .x)'
```

入力

```text
{"a": 1, "b": {"c": 2, "d": 3}, "e": 4}
```

出力 1

```text
{"a":1,"b":{"c":2},"x":null}
```

<!-- jq-example:sections/3/entries/10/examples/0:end -->

<!-- jq-example:sections/3/entries/10/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'pick(.[2], .[0], .[0])'
```

入力

```text
[1,2,3,4]
```

出力 1

```text
[1,null,3]
```

<!-- jq-example:sections/3/entries/10/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/11/title">

<h3 id="path"><code>path(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/11/body">

<p><code>.</code> 内の指定したパス式を配列で表したものを出力します。出力は、文字列（オブジェクトのキー）や数値（配列の索引）からなる配列です。</p>
<p>パス式には、<code>.a</code> のようなjqの式だけでなく、<code>.[]</code> も含まれます。パス式には、完全一致できるものと、できないものの2種類があります。たとえば、<code>.a.b.c</code> は完全一致するパス式ですが、<code>.a[].b</code> はそうではありません。</p>
<p><code>path(exact_path_expression)</code> は、そのパスが <code>.</code> 内に存在しなくても、<code>.</code> が <code>null</code>、配列、またはオブジェクトの場合に、パス式を配列で表したものを生成します。</p>
<p><code>path(pattern)</code> は、<code>pattern</code> に一致するパスが <code>.</code> 内に存在する場合、それらを配列で表したものを生成します。</p>
<p>パス式は通常の式と異なるものではないことに注意してください。式 <code>path(..|select(type=="boolean"))</code> は、<code>.</code> 内の真偽値に至るパスをすべて出力し、それ以外のパスは出力しません。</p>

</div>

<!-- jq-example:sections/3/entries/11/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'path(.a[0].b)'
```

入力

```text
null
```

出力 1

```text
["a",0,"b"]
```

<!-- jq-example:sections/3/entries/11/examples/0:end -->

<!-- jq-example:sections/3/entries/11/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[path(..)]'
```

入力

```text
{"a":[{"b":1}]}
```

出力 1

```text
[[],["a"],["a",0],["a",0,"b"]]
```

<!-- jq-example:sections/3/entries/11/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/12/title">

<h3 id="del"><code>del(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/12/body">

<p>組込み関数 <code>del</code> は、オブジェクトからキーと、それに対応する値を削除します。</p>

</div>

<!-- jq-example:sections/3/entries/12/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'del(.foo)'
```

入力

```text
{"foo": 42, "bar": 9001, "baz": 42}
```

出力 1

```text
{"bar": 9001, "baz": 42}
```

<!-- jq-example:sections/3/entries/12/examples/0:end -->

<!-- jq-example:sections/3/entries/12/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'del(.[1, 2])'
```

入力

```text
["foo", "bar", "baz"]
```

出力 1

```text
["foo"]
```

<!-- jq-example:sections/3/entries/12/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/13/title">

<h3 id="getpath"><code>getpath(PATHS)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/13/body">

<p>組込み関数 <code>getpath</code> は、<code>.</code> 内の、<code>PATHS</code> の各パスで見つかった値を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/13/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'getpath(["a","b"])'
```

入力

```text
null
```

出力 1

```text
null
```

<!-- jq-example:sections/3/entries/13/examples/0:end -->

<!-- jq-example:sections/3/entries/13/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[getpath(["a","b"], ["a","c"])]'
```

入力

```text
{"a":{"b":0, "c":1}}
```

出力 1

```text
[0, 1]
```

<!-- jq-example:sections/3/entries/13/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/14/title">

<h3 id="setpath"><code>setpath(PATHS; VALUE)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/14/body">

<p>組込み関数 <code>setpath</code> は、<code>PATHS</code> で指定した <code>.</code> 内のパスを <code>VALUE</code> に設定します。</p>

</div>

<!-- jq-example:sections/3/entries/14/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'setpath(["a","b"]; 1)'
```

入力

```text
null
```

出力 1

```text
{"a": {"b": 1}}
```

<!-- jq-example:sections/3/entries/14/examples/0:end -->

<!-- jq-example:sections/3/entries/14/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'setpath(["a","b"]; 1)'
```

入力

```text
{"a":{"b":0}}
```

出力 1

```text
{"a": {"b": 1}}
```

<!-- jq-example:sections/3/entries/14/examples/1:end -->

<!-- jq-example:sections/3/entries/14/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'setpath([0,"a"]; 1)'
```

入力

```text
null
```

出力 1

```text
[{"a":1}]
```

<!-- jq-example:sections/3/entries/14/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/15/title">

<h3 id="delpaths"><code>delpaths(PATHS)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/15/body">

<p>組込み関数 <code>delpaths</code> は、<code>PATHS</code> で指定した <code>.</code> 内のパスを削除します。
<code>PATHS</code> はパスの配列でなければなりません。各パスは、文字列と数値からなる配列です。</p>

</div>

<!-- jq-example:sections/3/entries/15/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'delpaths([["a","b"]])'
```

入力

```text
{"a":{"b":1},"x":{"y":2}}
```

出力 1

```text
{"a":{},"x":{"y":2}}
```

<!-- jq-example:sections/3/entries/15/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/16/title">

<h3 id="to_entries-from_entries-with_entries"><code>to_entries</code>, <code>from_entries</code>, <code>with_entries(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/16/body">

<p>これらの関数は、オブジェクトと、キーと値の組の配列との間で変換します。<code>to_entries</code> にオブジェクトを渡すと、入力の各 <code>k: v</code> エントリーに対して、出力配列に <code>{"key": k, "value": v}</code> が含まれます。</p>
<p><code>from_entries</code> は逆方向の変換を行います。<code>with_entries(f)</code> は <code>to_entries | map(f) | from_entries</code> の省略形で、オブジェクトのすべてのキーと値に何らかの操作を行う際に便利です。
<code>from_entries</code> は、キーとして <code>"key"</code>、<code>"Key"</code>、<code>"name"</code>、<code>"Name"</code>、<code>"value"</code>、<code>"Value"</code> を受け付けます。</p>

</div>

<!-- jq-example:sections/3/entries/16/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'to_entries'
```

入力

```text
{"a": 1, "b": 2}
```

出力 1

```text
[{"key":"a", "value":1}, {"key":"b", "value":2}]
```

<!-- jq-example:sections/3/entries/16/examples/0:end -->

<!-- jq-example:sections/3/entries/16/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'from_entries'
```

入力

```text
[{"key":"a", "value":1}, {"key":"b", "value":2}]
```

出力 1

```text
{"a": 1, "b": 2}
```

<!-- jq-example:sections/3/entries/16/examples/1:end -->

<!-- jq-example:sections/3/entries/16/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'with_entries(.key |= "KEY_" + .)'
```

入力

```text
{"a": 1, "b": 2}
```

出力 1

```text
{"KEY_a": 1, "KEY_b": 2}
```

<!-- jq-example:sections/3/entries/16/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/17/title">

<h3 id="select"><code>select(boolean_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/17/body">

<p>関数 <code>select(f)</code> は、その入力に対して <code>f</code> がtrueを返す場合、入力をそのまま出力します。それ以外の場合は何も出力しません。</p>
<p>リストを絞り込む際に便利です。<code>[1,2,3] | map(select(. &gt;= 2))</code> は <code>[2,3]</code> を返します。</p>

</div>

<!-- jq-example:sections/3/entries/17/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'map(select(. >= 2))'
```

入力

```text
[1,5,3,0,7]
```

出力 1

```text
[5,3,7]
```

<!-- jq-example:sections/3/entries/17/examples/0:end -->

<!-- jq-example:sections/3/entries/17/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '.[] | select(.id == "second")'
```

入力

```text
[{"id": "first", "val": 1}, {"id": "second", "val": 2}]
```

出力 1

```text
{"id": "second", "val": 2}
```

<!-- jq-example:sections/3/entries/17/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/18/title">

<h3 id="arrays-objects-iterables-booleans-numbers-normals-finites-strings-nulls-values-scalars"><code>arrays</code>, <code>objects</code>, <code>iterables</code>, <code>booleans</code>, <code>numbers</code>, <code>normals</code>, <code>finites</code>, <code>strings</code>, <code>nulls</code>, <code>values</code>, <code>scalars</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/18/body">

<p>これらの組込み関数は、それぞれ、配列、オブジェクト、反復可能な値（配列またはオブジェクト）、真偽値、数値、正規数、有限数、文字列、null、null以外の値、反復可能でない値である入力だけを選択します。</p>

</div>

<!-- jq-example:sections/3/entries/18/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[]|numbers'
```

入力

```text
[[],{},1,"foo",null,true,false]
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/18/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/19/title">

<h3 id="empty"><code>empty</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/19/body">

<p><code>empty</code> は結果を1つも返しません。まったく何も返さず、<code>null</code> さえ返しません。</p>
<p>ときどき便利です。必要になれば、使いどころが分かるでしょう :)</p>

</div>

<!-- jq-example:sections/3/entries/19/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '1, empty, 2'
```

入力

```text
null
```

出力 1

```text
1
```

出力 2

```text
2
```

<!-- jq-example:sections/3/entries/19/examples/0:end -->

<!-- jq-example:sections/3/entries/19/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[1,2,empty,3]'
```

入力

```text
null
```

出力 1

```text
[1,2,3]
```

<!-- jq-example:sections/3/entries/19/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/20/title">

<h3 id="error"><code>error</code>, <code>error(message)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/20/body">

<p>入力値、または引数として与えたメッセージを使って、エラーを生成します。エラーはtry/catchで捕捉できます。後述の説明を参照してください。</p>

</div>

<!-- jq-example:sections/3/entries/20/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'try error catch .'
```

入力

```text
"error message"
```

出力 1

```text
"error message"
```

<!-- jq-example:sections/3/entries/20/examples/0:end -->

<!-- jq-example:sections/3/entries/20/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'try error("invalid value: \(.)") catch .'
```

入力

```text
42
```

出力 1

```text
"invalid value: 42"
```

<!-- jq-example:sections/3/entries/20/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/21/title">

<h3 id="halt"><code>halt</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/21/body">

<p>それ以上何も出力せずに、jqプログラムを停止します。jqは終了ステータス <code>0</code> で終了します。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/22/title">

<h3 id="halt_error"><code>halt_error</code>, <code>halt_error(exit_code)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/22/body">

<p>それ以上何も出力せずに、jqプログラムを停止します。入力は <code>stderr</code> に、そのままの出力として表示されます（つまり、文字列に二重引用符は付きません）。装飾は一切付かず、改行さえ付きません。</p>
<p>指定した <code>exit_code</code>（既定値は <code>5</code>）が、jqの終了ステータスになります。</p>
<p>例：<code>"Error: something went wrong\n"|halt_error(1)</code>。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/23/title">

<h3 id="$__loc__"><code>$__loc__</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/23/body">

<p>"file"キーと"line"キーを持つオブジェクトを生成します。それぞれの値は、<code>$__loc__</code> が現れる位置のファイル名と行番号です。</p>

</div>

<!-- jq-example:sections/3/entries/23/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'try error("\($__loc__)") catch .'
```

入力

```text
null
```

出力 1

```text
"{\"file\":\"<top-level>\",\"line\":1}"
```

<!-- jq-example:sections/3/entries/23/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/24/title">

<h3 id="paths"><code>paths</code>, <code>paths(node_filter)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/24/body">

<p><code>paths</code> は、入力のすべての要素に至るパスを出力します。ただし、.自体を表す空のリストは出力しません。</p>
<p><code>paths(f)</code> は、<code>f</code> が <code>true</code> になる値に至るパスを出力します。つまり、<code>paths(type == "number")</code> は、すべての数値に至るパスを出力します。</p>

</div>

<!-- jq-example:sections/3/entries/24/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[paths]'
```

入力

```text
[1,[[],{"a":2}]]
```

出力 1

```text
[[0],[1],[1,0],[1,1],[1,1,"a"]]
```

<!-- jq-example:sections/3/entries/24/examples/0:end -->

<!-- jq-example:sections/3/entries/24/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[paths(type == "number")]'
```

入力

```text
[1,[[],{"a":2}]]
```

出力 1

```text
[[0],[1,1,"a"]]
```

<!-- jq-example:sections/3/entries/24/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/25/title">

<h3 id="add"><code>add</code>, <code>add(generator)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/25/body">

<p>フィルター <code>add</code> は配列を入力として受け取り、その配列の要素を足し合わせた結果を出力します。入力配列の要素の型に応じて、これは合計、連結、またはマージになります。規則は、前述の <code>+</code> 演算子と同じです。</p>
<p>入力が空の配列の場合、<code>add</code> は <code>null</code> を返します。</p>
<p><code>add(generator)</code> は、入力ではなく、指定したジェネレーターに対して動作します。</p>

</div>

<!-- jq-example:sections/3/entries/25/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'add'
```

入力

```text
["a","b","c"]
```

出力 1

```text
"abc"
```

<!-- jq-example:sections/3/entries/25/examples/0:end -->

<!-- jq-example:sections/3/entries/25/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'add'
```

入力

```text
[1, 2, 3]
```

出力 1

```text
6
```

<!-- jq-example:sections/3/entries/25/examples/1:end -->

<!-- jq-example:sections/3/entries/25/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'add'
```

入力

```text
[]
```

出力 1

```text
null
```

<!-- jq-example:sections/3/entries/25/examples/2:end -->

<!-- jq-example:sections/3/entries/25/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'add(.[].a)'
```

入力

```text
[{"a":3}, {"a":5}, {"b":6}]
```

出力 1

```text
8
```

<!-- jq-example:sections/3/entries/25/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/26/title">

<h3 id="any"><code>any</code>, <code>any(condition)</code>, <code>any(generator; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/26/body">

<p>フィルター <code>any</code> は真偽値の配列を入力として受け取り、出力として <code>true</code> を生成するのは、配列の要素のいずれかが <code>true</code> の場合です。</p>
<p>入力が空の配列の場合、<code>any</code> は <code>false</code> を返します。</p>
<p><code>any(condition)</code> という形式は、指定した条件を入力配列の要素に適用します。</p>
<p><code>any(generator; condition)</code> という形式は、指定した条件を、指定したジェネレーターのすべての出力に適用します。</p>

</div>

<!-- jq-example:sections/3/entries/26/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'any'
```

入力

```text
[true, false]
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/26/examples/0:end -->

<!-- jq-example:sections/3/entries/26/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'any'
```

入力

```text
[false, false]
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/26/examples/1:end -->

<!-- jq-example:sections/3/entries/26/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'any'
```

入力

```text
[]
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/26/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/27/title">

<h3 id="all"><code>all</code>, <code>all(condition)</code>, <code>all(generator; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/27/body">

<p>フィルター <code>all</code> は真偽値の配列を入力として受け取り、出力として <code>true</code> を生成するのは、配列のすべての要素が <code>true</code> の場合です。</p>
<p><code>all(condition)</code> という形式は、指定した条件を入力配列の要素に適用します。</p>
<p><code>all(generator; condition)</code> という形式は、指定した条件を、指定したジェネレーターのすべての出力に適用します。</p>
<p>入力が空の配列の場合、<code>all</code> は <code>true</code> を返します。</p>

</div>

<!-- jq-example:sections/3/entries/27/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'all'
```

入力

```text
[true, false]
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/27/examples/0:end -->

<!-- jq-example:sections/3/entries/27/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'all'
```

入力

```text
[true, true]
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/27/examples/1:end -->

<!-- jq-example:sections/3/entries/27/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'all'
```

入力

```text
[]
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/27/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/28/title">

<h3 id="flatten"><code>flatten</code>, <code>flatten(depth)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/28/body">

<p>フィルター <code>flatten</code> は、入れ子になった配列を含む配列を入力として受け取り、元の配列の内側にあるすべての配列を、それぞれの値で再帰的に置き換えた、平坦な配列を生成します。引数を渡すことで、入れ子を何階層まで平坦化するか指定できます。</p>
<p><code>flatten(2)</code> は <code>flatten</code> と同様ですが、深さ2階層までしか処理しません。</p>

</div>

<!-- jq-example:sections/3/entries/28/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'flatten'
```

入力

```text
[1, [2], [[3]]]
```

出力 1

```text
[1, 2, 3]
```

<!-- jq-example:sections/3/entries/28/examples/0:end -->

<!-- jq-example:sections/3/entries/28/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'flatten(1)'
```

入力

```text
[1, [2], [[3]]]
```

出力 1

```text
[1, 2, [3]]
```

<!-- jq-example:sections/3/entries/28/examples/1:end -->

<!-- jq-example:sections/3/entries/28/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'flatten'
```

入力

```text
[[]]
```

出力 1

```text
[]
```

<!-- jq-example:sections/3/entries/28/examples/2:end -->

<!-- jq-example:sections/3/entries/28/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'flatten'
```

入力

```text
[{"foo": "bar"}, [{"foo": "baz"}]]
```

出力 1

```text
[{"foo": "bar"}, {"foo": "baz"}]
```

<!-- jq-example:sections/3/entries/28/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/29/title">

<h3 id="range"><code>range(upto)</code>, <code>range(from; upto)</code>, <code>range(from; upto; by)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/29/body">

<p>関数 <code>range</code> は、ある範囲の数値を生成します。<code>range(4; 10)</code> は、4を含み10を含まない範囲の6個の数値を生成します。これらの数値は、個別の出力として生成されます。範囲を配列として取得するには、<code>[range(4; 10)]</code> を使います。</p>
<p>引数が1つの形式は、0から指定した数値まで、1ずつ増加する数値を生成します。</p>
<p>引数が2つの形式は、<code>from</code> から <code>upto</code> まで、1ずつ増加する数値を生成します。</p>
<p>引数が3つの形式は、<code>from</code> から <code>upto</code> まで、<code>by</code> ずつ増加する数値を生成します。</p>

</div>

<!-- jq-example:sections/3/entries/29/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'range(2; 4)'
```

入力

```text
null
```

出力 1

```text
2
```

出力 2

```text
3
```

<!-- jq-example:sections/3/entries/29/examples/0:end -->

<!-- jq-example:sections/3/entries/29/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[range(2; 4)]'
```

入力

```text
null
```

出力 1

```text
[2,3]
```

<!-- jq-example:sections/3/entries/29/examples/1:end -->

<!-- jq-example:sections/3/entries/29/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '[range(4)]'
```

入力

```text
null
```

出力 1

```text
[0,1,2,3]
```

<!-- jq-example:sections/3/entries/29/examples/2:end -->

<!-- jq-example:sections/3/entries/29/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '[range(0; 10; 3)]'
```

入力

```text
null
```

出力 1

```text
[0,3,6,9]
```

<!-- jq-example:sections/3/entries/29/examples/3:end -->

<!-- jq-example:sections/3/entries/29/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq '[range(0; 10; -1)]'
```

入力

```text
null
```

出力 1

```text
[]
```

<!-- jq-example:sections/3/entries/29/examples/4:end -->

<!-- jq-example:sections/3/entries/29/examples/5:start -->

#### 実行例 6

コマンド

```sh
jq '[range(0; -5; -1)]'
```

入力

```text
null
```

出力 1

```text
[0,-1,-2,-3,-4]
```

<!-- jq-example:sections/3/entries/29/examples/5:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/30/title">

<h3 id="floor"><code>floor</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/30/body">

<p>関数 <code>floor</code> は、数値入力の床、つまりその値以下の最大の整数を返します。</p>

</div>

<!-- jq-example:sections/3/entries/30/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'floor'
```

入力

```text
3.14159
```

出力 1

```text
3
```

<!-- jq-example:sections/3/entries/30/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/31/title">

<h3 id="sqrt"><code>sqrt</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/31/body">

<p>関数 <code>sqrt</code> は、数値入力の平方根を返します。</p>

</div>

<!-- jq-example:sections/3/entries/31/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'sqrt'
```

入力

```text
9
```

出力 1

```text
3
```

<!-- jq-example:sections/3/entries/31/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/32/title">

<h3 id="tonumber"><code>tonumber</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/32/body">

<p>関数 <code>tonumber</code> は、入力を数値として解析します。正しい形式の文字列を対応する数値に変換し、数値はそのままにします。それ以外の入力はすべてエラーになります。</p>

</div>

<!-- jq-example:sections/3/entries/32/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | tonumber'
```

入力

```text
[1, "1"]
```

出力 1

```text
1
```

出力 2

```text
1
```

<!-- jq-example:sections/3/entries/32/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/33/title">

<h3 id="toboolean"><code>toboolean</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/33/body">

<p>関数 <code>toboolean</code> は、入力を真偽値として解析します。正しい形式の文字列を対応する真偽値に変換し、真偽値はそのままにします。それ以外の入力はすべてエラーになります。</p>

</div>

<!-- jq-example:sections/3/entries/33/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | toboolean'
```

入力

```text
["true", "false", true, false]
```

出力 1

```text
true
```

出力 2

```text
false
```

出力 3

```text
true
```

出力 4

```text
false
```

<!-- jq-example:sections/3/entries/33/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/34/title">

<h3 id="tostring"><code>tostring</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/34/body">

<p>関数 <code>tostring</code> は、入力を文字列として出力します。文字列は変更せず、それ以外のすべての値はJSONエンコードします。</p>

</div>

<!-- jq-example:sections/3/entries/34/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | tostring'
```

入力

```text
[1, "1", [1]]
```

出力 1

```text
"1"
```

出力 2

```text
"1"
```

出力 3

```text
"[1]"
```

<!-- jq-example:sections/3/entries/34/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/35/title">

<h3 id="type"><code>type</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/35/body">

<p>関数 <code>type</code> は、引数の型を文字列で返します。その文字列は、null、boolean、number、string、array、objectのいずれかです。</p>

</div>

<!-- jq-example:sections/3/entries/35/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'map(type)'
```

入力

```text
[0, false, [], {}, null, "hello"]
```

出力 1

```text
["number", "boolean", "array", "object", "null", "string"]
```

<!-- jq-example:sections/3/entries/35/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/36/title">

<h3 id="infinite-nan-isinfinite-isnan-isfinite-isnormal"><code>infinite</code>, <code>nan</code>, <code>isinfinite</code>, <code>isnan</code>, <code>isfinite</code>, <code>isnormal</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/36/body">

<p>一部の算術演算は、無限大や「非数」（NaN）の値を生成することがあります。組込み関数 <code>isinfinite</code> は、入力が無限大の場合に <code>true</code> を返します。組込み関数 <code>isnan</code> は、入力がNaNの場合に <code>true</code> を返します。組込み関数 <code>infinite</code> は、正の無限大の値を返します。組込み関数 <code>nan</code> はNaNを返します。組込み関数 <code>isnormal</code> は、入力が正規数の場合にtrueを返します。</p>
<p>ゼロによる除算はエラーを発生させることに注意してください。</p>
<p>現在、無限大、NaN、非正規数を扱う算術演算のほとんどは、エラーを発生させません。</p>

</div>

<!-- jq-example:sections/3/entries/36/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '.[] | (infinite * .) < 0'
```

入力

```text
[-1, 1]
```

出力 1

```text
true
```

出力 2

```text
false
```

<!-- jq-example:sections/3/entries/36/examples/0:end -->

<!-- jq-example:sections/3/entries/36/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'infinite, nan | type'
```

入力

```text
null
```

出力 1

```text
"number"
```

出力 2

```text
"number"
```

<!-- jq-example:sections/3/entries/36/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/37/title">

<h3 id="sort-sort_by"><code>sort</code>, <code>sort_by(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/37/body">

<p>関数 <code>sort</code> は、入力をソートします。入力は配列でなければなりません。値は次の順序でソートされます。</p>
<ul>
<li><code>null</code></li>
<li><code>false</code></li>
<li><code>true</code></li>
<li>数値</li>
<li>文字列。Unicodeコードポイントの値によるアルファベット順</li>
<li>配列。辞書式順序</li>
<li>オブジェクト</li>
</ul>
<p>オブジェクトの順序は少し複雑です。まず、キーの集合を、ソート済みの配列として比較します。キーが同じであれば、キーごとに値を比較します。</p>
<p><code>sort_by</code> は、オブジェクトの特定のフィールドによるソートや、任意のjqフィルターを適用したソートに使えます。<code>sort_by(f)</code> は、それぞれの要素に対する <code>f</code> の結果を比較することで、2つの要素を比較します。<code>f</code> が複数の値を生成する場合、まず最初の値を比較し、それらが等しければ2番目の値を比較する、というように続けます。</p>

</div>

<!-- jq-example:sections/3/entries/37/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'sort'
```

入力

```text
[8,3,null,6]
```

出力 1

```text
[null,3,6,8]
```

<!-- jq-example:sections/3/entries/37/examples/0:end -->

<!-- jq-example:sections/3/entries/37/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'sort_by(.foo)'
```

入力

```text
[{"foo":4, "bar":10}, {"foo":3, "bar":10}, {"foo":2, "bar":1}]
```

出力 1

```text
[{"foo":2, "bar":1}, {"foo":3, "bar":10}, {"foo":4, "bar":10}]
```

<!-- jq-example:sections/3/entries/37/examples/1:end -->

<!-- jq-example:sections/3/entries/37/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'sort_by(.foo, .bar)'
```

入力

```text
[{"foo":4, "bar":10}, {"foo":3, "bar":20}, {"foo":2, "bar":1}, {"foo":3, "bar":10}]
```

出力 1

```text
[{"foo":2, "bar":1}, {"foo":3, "bar":10}, {"foo":3, "bar":20}, {"foo":4, "bar":10}]
```

<!-- jq-example:sections/3/entries/37/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/38/title">

<h3 id="group_by"><code>group_by(path_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/38/body">

<p><code>group_by(.foo)</code> は配列を入力として受け取り、同じ <code>.foo</code> フィールドを持つ要素を個別の配列にまとめます。そして、それらの配列すべてを、<code>.foo</code> フィールドの値でソートした大きな配列の要素として出力します。</p>
<p><code>.foo</code> の代わりに使えるのはフィールドへのアクセスだけでなく、任意のjq式です。ソート順は、前述の <code>sort</code> 関数で説明した順序と同じです。</p>

</div>

<!-- jq-example:sections/3/entries/38/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'group_by(.foo)'
```

入力

```text
[{"foo":1, "bar":10}, {"foo":3, "bar":100}, {"foo":1, "bar":1}]
```

出力 1

```text
[[{"foo":1, "bar":10}, {"foo":1, "bar":1}], [{"foo":3, "bar":100}]]
```

<!-- jq-example:sections/3/entries/38/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/39/title">

<h3 id="min-max-min_by-max_by"><code>min</code>, <code>max</code>, <code>min_by(path_exp)</code>, <code>max_by(path_exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/39/body">

<p>入力配列の最小または最大の要素を見つけます。</p>
<p>関数 <code>min_by(path_exp)</code> と <code>max_by(path_exp)</code> では、調べる特定のフィールドやプロパティを指定できます。たとえば、<code>min_by(.foo)</code> は、<code>foo</code> フィールドが最小のオブジェクトを見つけます。</p>

</div>

<!-- jq-example:sections/3/entries/39/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'min'
```

入力

```text
[5,4,2,7]
```

出力 1

```text
2
```

<!-- jq-example:sections/3/entries/39/examples/0:end -->

<!-- jq-example:sections/3/entries/39/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'max_by(.foo)'
```

入力

```text
[{"foo":1, "bar":14}, {"foo":2, "bar":3}]
```

出力 1

```text
{"foo":2, "bar":3}
```

<!-- jq-example:sections/3/entries/39/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/40/title">

<h3 id="unique-unique_by"><code>unique</code>, <code>unique_by(path_exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/40/body">

<p>関数 <code>unique</code> は配列を入力として受け取り、同じ要素をソート順に並べ、重複を取り除いた配列を生成します。</p>
<p>関数 <code>unique_by(path_exp)</code> は、引数を適用して得られる値ごとに、1つの要素だけを残します。<code>group</code> が生成する各グループから1つずつ要素を取り出して、配列を作ると考えてください。</p>

</div>

<!-- jq-example:sections/3/entries/40/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'unique'
```

入力

```text
[1,2,5,3,5,3,1,3]
```

出力 1

```text
[1,2,3,5]
```

<!-- jq-example:sections/3/entries/40/examples/0:end -->

<!-- jq-example:sections/3/entries/40/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'unique_by(.foo)'
```

入力

```text
[{"foo": 1, "bar": 2}, {"foo": 1, "bar": 3}, {"foo": 4, "bar": 5}]
```

出力 1

```text
[{"foo": 1, "bar": 2}, {"foo": 4, "bar": 5}]
```

<!-- jq-example:sections/3/entries/40/examples/1:end -->

<!-- jq-example:sections/3/entries/40/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'unique_by(length)'
```

入力

```text
["chunky", "bacon", "kitten", "cicada", "asparagus"]
```

出力 1

```text
["bacon", "chunky", "asparagus"]
```

<!-- jq-example:sections/3/entries/40/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/41/title">

<h3 id="reverse"><code>reverse</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/41/body">

<p>この関数は、配列の要素の順序を逆にします。</p>

</div>

<!-- jq-example:sections/3/entries/41/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'reverse'
```

入力

```text
[1,2,3,4]
```

出力 1

```text
[4,3,2,1]
```

<!-- jq-example:sections/3/entries/41/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/42/title">

<h3 id="contains"><code>contains(element)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/42/body">

<p>フィルター <code>contains(b)</code> は、bが入力に完全に含まれている場合にtrueを生成します。文字列Bが文字列Aに含まれているとは、BがAの部分文字列であることを意味します。配列Bが配列Aに含まれているとは、Bのすべての要素が、それぞれAのいずれかの要素に含まれていることを意味します。オブジェクトBがオブジェクトAに含まれているとは、Bのすべての値が、Aの同じキーに対応する値に含まれていることを意味します。それ以外の型はすべて、互いに等しい場合に、互いに含まれているとみなします。</p>

</div>

<!-- jq-example:sections/3/entries/42/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'contains("bar")'
```

入力

```text
"foobar"
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/0:end -->

<!-- jq-example:sections/3/entries/42/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'contains(["baz", "bar"])'
```

入力

```text
["foobar", "foobaz", "blarp"]
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/1:end -->

<!-- jq-example:sections/3/entries/42/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'contains(["bazzzzz", "bar"])'
```

入力

```text
["foobar", "foobaz", "blarp"]
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/42/examples/2:end -->

<!-- jq-example:sections/3/entries/42/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'contains({foo: 12, bar: [{barp: 12}]})'
```

入力

```text
{"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]}
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/42/examples/3:end -->

<!-- jq-example:sections/3/entries/42/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq 'contains({foo: 12, bar: [{barp: 15}]})'
```

入力

```text
{"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]}
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/42/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/43/title">

<h3 id="indices"><code>indices(s)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/43/body">

<p><code>.</code> 内で <code>s</code> が現れる位置の索引を含む配列を出力します。入力は配列でも構いません。その場合、<code>s</code> も配列であれば、<code>.</code> 内の一連の要素が <code>s</code> のすべての要素と一致する位置の索引を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/43/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'indices(", ")'
```

入力

```text
"a,b, cd, efg, hijk"
```

出力 1

```text
[3,7,12]
```

<!-- jq-example:sections/3/entries/43/examples/0:end -->

<!-- jq-example:sections/3/entries/43/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'indices(1)'
```

入力

```text
[0,1,2,1,3,1,4]
```

出力 1

```text
[1,3,5]
```

<!-- jq-example:sections/3/entries/43/examples/1:end -->

<!-- jq-example:sections/3/entries/43/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'indices([1,2])'
```

入力

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

出力 1

```text
[1,8]
```

<!-- jq-example:sections/3/entries/43/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/44/title">

<h3 id="index-rindex"><code>index(s)</code>, <code>rindex(s)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/44/body">

<p>最初の出現位置（<code>index</code>）または最後の出現位置（<code>rindex</code>）の索引を出力します。探す対象は、入力内の <code>s</code> です。</p>

</div>

<!-- jq-example:sections/3/entries/44/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'index(", ")'
```

入力

```text
"a,b, cd, efg, hijk"
```

出力 1

```text
3
```

<!-- jq-example:sections/3/entries/44/examples/0:end -->

<!-- jq-example:sections/3/entries/44/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'index(1)'
```

入力

```text
[0,1,2,1,3,1,4]
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/44/examples/1:end -->

<!-- jq-example:sections/3/entries/44/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'index([1,2])'
```

入力

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

出力 1

```text
1
```

<!-- jq-example:sections/3/entries/44/examples/2:end -->

<!-- jq-example:sections/3/entries/44/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'rindex(", ")'
```

入力

```text
"a,b, cd, efg, hijk"
```

出力 1

```text
12
```

<!-- jq-example:sections/3/entries/44/examples/3:end -->

<!-- jq-example:sections/3/entries/44/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq 'rindex(1)'
```

入力

```text
[0,1,2,1,3,1,4]
```

出力 1

```text
5
```

<!-- jq-example:sections/3/entries/44/examples/4:end -->

<!-- jq-example:sections/3/entries/44/examples/5:start -->

#### 実行例 6

コマンド

```sh
jq 'rindex([1,2])'
```

入力

```text
[0,1,2,3,1,4,2,5,1,2,6,7]
```

出力 1

```text
8
```

<!-- jq-example:sections/3/entries/44/examples/5:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/45/title">

<h3 id="inside"><code>inside</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/45/body">

<p>フィルター <code>inside(b)</code> は、入力がbに完全に含まれている場合にtrueを生成します。基本的には、<code>contains</code> の向きを逆にしたものです。</p>

</div>

<!-- jq-example:sections/3/entries/45/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'inside("foobar")'
```

入力

```text
"bar"
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/0:end -->

<!-- jq-example:sections/3/entries/45/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'inside(["foobar", "foobaz", "blarp"])'
```

入力

```text
["baz", "bar"]
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/1:end -->

<!-- jq-example:sections/3/entries/45/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'inside(["foobar", "foobaz", "blarp"])'
```

入力

```text
["bazzzzz", "bar"]
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/45/examples/2:end -->

<!-- jq-example:sections/3/entries/45/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq 'inside({"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]})'
```

入力

```text
{"foo": 12, "bar": [{"barp": 12}]}
```

出力 1

```text
true
```

<!-- jq-example:sections/3/entries/45/examples/3:end -->

<!-- jq-example:sections/3/entries/45/examples/4:start -->

#### 実行例 5

コマンド

```sh
jq 'inside({"foo": 12, "bar":[1,2,{"barp":12, "blip":13}]})'
```

入力

```text
{"foo": 12, "bar": [{"barp": 15}]}
```

出力 1

```text
false
```

<!-- jq-example:sections/3/entries/45/examples/4:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/46/title">

<h3 id="startswith"><code>startswith(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/46/body">

<p>.が指定した文字列引数で始まる場合、<code>true</code> を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/46/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|startswith("foo")]'
```

入力

```text
["fo", "foo", "barfoo", "foobar", "barfoob"]
```

出力 1

```text
[false, true, false, true, false]
```

<!-- jq-example:sections/3/entries/46/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/47/title">

<h3 id="endswith"><code>endswith(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/47/body">

<p>.が指定した文字列引数で終わる場合、<code>true</code> を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/47/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|endswith("foo")]'
```

入力

```text
["foobar", "barfoo"]
```

出力 1

```text
[false, true]
```

<!-- jq-example:sections/3/entries/47/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/48/title">

<h3 id="combinations"><code>combinations</code>, <code>combinations(n)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/48/body">

<p>入力配列の中にある各配列の要素の、すべての組合せを出力します。引数 <code>n</code> を与えた場合、入力配列を <code>n</code> 回繰り返した、すべての組合せを出力します。</p>

</div>

<!-- jq-example:sections/3/entries/48/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'combinations'
```

入力

```text
[[1,2], [3, 4]]
```

出力 1

```text
[1, 3]
```

出力 2

```text
[1, 4]
```

出力 3

```text
[2, 3]
```

出力 4

```text
[2, 4]
```

<!-- jq-example:sections/3/entries/48/examples/0:end -->

<!-- jq-example:sections/3/entries/48/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'combinations(2)'
```

入力

```text
[0, 1]
```

出力 1

```text
[0, 0]
```

出力 2

```text
[0, 1]
```

出力 3

```text
[1, 0]
```

出力 4

```text
[1, 1]
```

<!-- jq-example:sections/3/entries/48/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/49/title">

<h3 id="ltrimstr"><code>ltrimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/49/body">

<p>入力が指定した接頭文字列で始まる場合、その接頭文字列を取り除いた入力を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/49/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|ltrimstr("foo")]'
```

入力

```text
["fo", "foo", "barfoo", "foobar", "afoo"]
```

出力 1

```text
["fo","","barfoo","bar","afoo"]
```

<!-- jq-example:sections/3/entries/49/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/50/title">

<h3 id="rtrimstr"><code>rtrimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/50/body">

<p>入力が指定した接尾文字列で終わる場合、その接尾文字列を取り除いた入力を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/50/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|rtrimstr("foo")]'
```

入力

```text
["fo", "foo", "barfoo", "foobar", "foob"]
```

出力 1

```text
["fo","","bar","foobar","foob"]
```

<!-- jq-example:sections/3/entries/50/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/51/title">

<h3 id="trimstr"><code>trimstr(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/51/body">

<p>入力が指定した文字列で始まるか終わる場合、両端からその文字列を取り除いた入力を出力します。</p>

</div>

<!-- jq-example:sections/3/entries/51/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|trimstr("foo")]'
```

入力

```text
["fo", "foo", "barfoo", "foobarfoo", "foob"]
```

出力 1

```text
["fo","","bar","bar","b"]
```

<!-- jq-example:sections/3/entries/51/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/52/title">

<h3 id="trim-ltrim-rtrim"><code>trim</code>, <code>ltrim</code>, <code>rtrim</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/52/body">

<p><code>trim</code> は、先頭と末尾の両方の空白文字を取り除きます。</p>
<p><code>ltrim</code> は、先頭（左側）の空白文字だけを取り除きます。</p>
<p><code>rtrim</code> は、末尾（右側）の空白文字だけを取り除きます。</p>
<p>空白文字には、通常の <code>" "</code>、<code>"\n"</code>、<code>"\t"</code>、<code>"\r"</code> に加え、Unicode文字データベースで空白プロパティを持つすべての文字が含まれます。何を空白とみなすかは、将来変わる可能性があることに注意してください。</p>

</div>

<!-- jq-example:sections/3/entries/52/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'trim, ltrim, rtrim'
```

入力

```text
" abc "
```

出力 1

```text
"abc"
```

出力 2

```text
"abc "
```

出力 3

```text
" abc"
```

<!-- jq-example:sections/3/entries/52/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/53/title">

<h3 id="explode"><code>explode</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/53/body">

<p>入力文字列を、その文字列のコードポイントの数値からなる配列に変換します。</p>

</div>

<!-- jq-example:sections/3/entries/53/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'explode'
```

入力

```text
"foobar"
```

出力 1

```text
[102,111,111,98,97,114]
```

<!-- jq-example:sections/3/entries/53/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/54/title">

<h3 id="implode"><code>implode</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/54/body">

<p>explodeの逆の操作です。</p>

</div>

<!-- jq-example:sections/3/entries/54/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'implode'
```

入力

```text
[65, 66, 67]
```

出力 1

```text
"ABC"
```

<!-- jq-example:sections/3/entries/54/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/55/title">

<h3 id="split-1"><code>split(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/55/body">

<p>区切り文字の引数を使って、入力文字列を分割します。</p>
<p><code>split</code> は、引数を2つ指定して呼び出すと、正規表現の一致箇所でも分割できます。後述の正規表現の節を参照してください。</p>

</div>

<!-- jq-example:sections/3/entries/55/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'split(", ")'
```

入力

```text
"a, b,c,d, e, "
```

出力 1

```text
["a","b,c,d","e",""]
```

<!-- jq-example:sections/3/entries/55/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/56/title">

<h3 id="join"><code>join(str)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/56/body">

<p>入力として与えられた要素の配列を、引数を区切り文字として使って結合します。これは <code>split</code> の逆の操作です。つまり、任意の入力文字列に対して <code>split("foo") | join("foo")</code> を実行すると、その入力文字列が返ります。</p>
<p>入力内の数値と真偽値は文字列に変換されます。nullの値は空文字列として扱われます。入力内の配列とオブジェクトには対応していません。</p>

</div>

<!-- jq-example:sections/3/entries/56/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'join(", ")'
```

入力

```text
["a","b,c,d","e"]
```

出力 1

```text
"a, b,c,d, e"
```

<!-- jq-example:sections/3/entries/56/examples/0:end -->

<!-- jq-example:sections/3/entries/56/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'join(" ")'
```

入力

```text
["a",1,2.3,true,null,false]
```

出力 1

```text
"a 1 2.3 true  false"
```

<!-- jq-example:sections/3/entries/56/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/57/title">

<h3 id="ascii_downcase-ascii_upcase"><code>ascii_downcase</code>, <code>ascii_upcase</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/57/body">

<p>入力文字列のコピーを出力し、英字（a-zとA-Z）を指定した大文字または小文字に変換します。</p>

</div>

<!-- jq-example:sections/3/entries/57/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'ascii_upcase'
```

入力

```text
"useful but not for é"
```

出力 1

```text
"USEFUL BUT NOT FOR é"
```

<!-- jq-example:sections/3/entries/57/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/58/title">

<h3 id="while"><code>while(cond; update)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/58/body">

<p>関数 <code>while(cond; update)</code> は、<code>.</code> に更新を繰り返し適用し、<code>cond</code> がfalseになるまで続けます。</p>
<p><code>while(cond; update)</code> は、内部では再帰的なjq関数として定義されています。<code>while</code> 内の再帰呼び出しは、<code>update</code> が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。</p>

</div>

<!-- jq-example:sections/3/entries/58/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[while(.<100; .*2)]'
```

入力

```text
1
```

出力 1

```text
[1,2,4,8,16,32,64]
```

<!-- jq-example:sections/3/entries/58/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/59/title">

<h3 id="repeat"><code>repeat(exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/59/body">

<p>関数 <code>repeat(exp)</code> は、式 <code>exp</code> を <code>.</code> に繰り返し適用し、エラーが発生するまで続けます。</p>
<p><code>repeat(exp)</code> は、内部では再帰的なjq関数として定義されています。<code>repeat</code> 内の再帰呼び出しは、<code>exp</code> が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。</p>

</div>

<!-- jq-example:sections/3/entries/59/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[repeat(.*2, error)?]'
```

入力

```text
1
```

出力 1

```text
[2]
```

<!-- jq-example:sections/3/entries/59/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/60/title">

<h3 id="until"><code>until(cond; next)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/60/body">

<p>関数 <code>until(cond; next)</code> は、式 <code>next</code> を繰り返し適用します。最初は <code>.</code> に、その後は式自身の出力に適用し、<code>cond</code> がtrueになるまで続けます。たとえば、階乗関数の実装に使えます。以下を参照してください。</p>
<p><code>until(cond; next)</code> は、内部では再帰的なjq関数として定義されています。<code>until()</code> 内の再帰呼び出しは、<code>next</code> が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。</p>

</div>

<!-- jq-example:sections/3/entries/60/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.,1]|until(.[0] < 1; [.[0] - 1, .[1] * .[0]])|.[1]'
```

入力

```text
4
```

出力 1

```text
24
```

<!-- jq-example:sections/3/entries/60/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/61/title">

<h3 id="recurse"><code>recurse(f)</code>, <code>recurse</code>, <code>recurse(f; condition)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/61/body">

<p>関数 <code>recurse(f)</code> は、再帰的な構造を探索し、すべての階層から必要なデータを抽出できます。入力が次のようなファイルシステムを表すとします。</p>
<pre><code>{"name": "/", "children": [&#10;  {"name": "/bin", "children": [&#10;    {"name": "/bin/ls", "children": []},&#10;    {"name": "/bin/sh", "children": []}]},&#10;  {"name": "/home", "children": [&#10;    {"name": "/home/stephen", "children": [&#10;      {"name": "/home/stephen/jq", "children": []}]}]}]}&#10;</code></pre>
<p>存在するすべてのファイル名を抽出したいとします。<code>.name</code>、<code>.children[].name</code>、<code>.children[].children[].name</code>、というように取得する必要があります。これは次の式で行えます。</p>
<pre><code>recurse(.children[]) | .name&#10;</code></pre>
<p>引数なしで呼び出した <code>recurse</code> は、<code>recurse(.[]?)</code> と同じです。</p>
<p><code>recurse(f)</code> は <code>recurse(f; true)</code> と同じで、再帰の深さを気にせずに使えます。</p>
<p><code>recurse(f; condition)</code> は、まず.を出力し、その後は計算した値が条件を満たす限り、.|f、.|f|f、.|f|f|f、…と順に出力するジェネレーターです。たとえば、少なくとも原理的には、<code>recurse(.+1; true)</code> と書けば、すべての整数を生成できます。</p>
<p><code>recurse</code> 内の再帰呼び出しは、<code>f</code> が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。</p>

</div>

<!-- jq-example:sections/3/entries/61/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'recurse(.foo[])'
```

入力

```text
{"foo":[{"foo": []}, {"foo":[{"foo":[]}]}]}
```

出力 1

```text
{"foo":[{"foo":[]},{"foo":[{"foo":[]}]}]}
```

出力 2

```text
{"foo":[]}
```

出力 3

```text
{"foo":[{"foo":[]}]}
```

出力 4

```text
{"foo":[]}
```

<!-- jq-example:sections/3/entries/61/examples/0:end -->

<!-- jq-example:sections/3/entries/61/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'recurse'
```

入力

```text
{"a":0,"b":[1]}
```

出力 1

```text
{"a":0,"b":[1]}
```

出力 2

```text
0
```

出力 3

```text
[1]
```

出力 4

```text
1
```

<!-- jq-example:sections/3/entries/61/examples/1:end -->

<!-- jq-example:sections/3/entries/61/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'recurse(. * .; . < 20)'
```

入力

```text
2
```

出力 1

```text
2
```

出力 2

```text
4
```

出力 3

```text
16
```

<!-- jq-example:sections/3/entries/61/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/62/title">

<h3 id="walk"><code>walk(f)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/62/body">

<p>関数 <code>walk(f)</code> は、入力の各構成要素にfを再帰的に適用します。配列に出会うと、まずその要素にfを適用し、その後に配列自体に適用します。オブジェクトに出会うと、まずすべての値にfを適用し、その後にオブジェクトに適用します。実際には、以下の例のように、fは通常、入力の型を調べます。最初の例は、配列の配列について、配列自体を処理する前に要素を処理することの便利さを示します。2番目の例は、入力内のすべてのオブジェクトのすべてのキーを、変更の対象にできることを示します。</p>

</div>

<!-- jq-example:sections/3/entries/62/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'walk(if type == "array" then sort else . end)'
```

入力

```text
[[4, 1, 7], [8, 5, 2], [3, 6, 9]]
```

出力 1

```text
[[1,4,7],[2,5,8],[3,6,9]]
```

<!-- jq-example:sections/3/entries/62/examples/0:end -->

<!-- jq-example:sections/3/entries/62/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'walk( if type == "object" then with_entries( .key |= sub( "^_+"; "") ) else . end )'
```

入力

```text
[ { "_a": { "__b": 2 } } ]
```

出力 1

```text
[{"a":{"b":2}}]
```

<!-- jq-example:sections/3/entries/62/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/63/title">

<h3 id="have_literal_numbers"><code>have_literal_numbers</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/63/body">

<p>jqのビルド設定が入力の数値リテラルを保持する機能を含んでいる場合、この組込み関数はtrueを返します。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/64/title">

<h3 id="have_decnum"><code>have_decnum</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/64/body">

<p>jqが"decnum"を使ってビルドされた場合、この組込み関数はtrueを返します。これは、現在のjqで数値リテラルを保持する数値バックエンドの実装です。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/65/title">

<h3 id="$jq_build_configuration"><code>$JQ_BUILD_CONFIGURATION</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/65/body">

<p>この組込みの束縛は、jq実行ファイルのビルド設定を示します。値に決まった形式はありませんが、少なくとも <code>./configure</code> のコマンドライン引数が含まれると期待できます。将来は、使用したビルドツールのバージョン文字列などが追加される可能性があります。</p>
<p>これは、コマンドラインの <code>--arg</code> や関連するオプションで上書きできることに注意してください。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/66/title">

<h3 id="$env-env"><code>$ENV</code>, <code>env</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/66/body">

<p><code>$ENV</code> は、jqプログラムの開始時点で設定されていた環境変数を表すオブジェクトです。</p>
<p><code>env</code> は、jqの現在の環境を表すオブジェクトを出力します。</p>
<p>現時点では、環境変数を設定する組込み関数はありません。</p>

</div>

<!-- jq-example:sections/3/entries/66/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '$ENV.PAGER'
```

入力

```text
null
```

出力 1

```text
"less"
```

<!-- jq-example:sections/3/entries/66/examples/0:end -->

<!-- jq-example:sections/3/entries/66/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'env.PAGER'
```

入力

```text
null
```

出力 1

```text
"less"
```

<!-- jq-example:sections/3/entries/66/examples/1:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/67/title">

<h3 id="transpose"><code>transpose</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/67/body">

<p>行ごとの長さが異なる場合もある行列（配列の配列）を転置します。行はnullで埋められるため、結果は常に長方形になります。</p>

</div>

<!-- jq-example:sections/3/entries/67/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'transpose'
```

入力

```text
[[1], [2,3]]
```

出力 1

```text
[[1,2],[null,3]]
```

<!-- jq-example:sections/3/entries/67/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/68/title">

<h3 id="bsearch"><code>bsearch(x)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/68/body">

<p><code>bsearch(x)</code> は、入力配列からxを二分探索します。入力がソート済みでxを含んでいる場合、<code>bsearch(x)</code> は配列内でのその索引を返します。そうでなくても配列がソート済みであれば、(-1 - ix)を返します。ここでixは、その位置にxを挿入しても配列のソート順が保たれる挿入位置です。配列がソートされていない場合、<code>bsearch(x)</code> は、おそらく意味のない整数を返します。</p>

</div>

<!-- jq-example:sections/3/entries/68/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'bsearch(0)'
```

入力

```text
[0,1]
```

出力 1

```text
0
```

<!-- jq-example:sections/3/entries/68/examples/0:end -->

<!-- jq-example:sections/3/entries/68/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'bsearch(0)'
```

入力

```text
[1,2,3]
```

出力 1

```text
-1
```

<!-- jq-example:sections/3/entries/68/examples/1:end -->

<!-- jq-example:sections/3/entries/68/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'bsearch(4) as $ix | if $ix < 0 then .[-(1+$ix)] = 4 else . end'
```

入力

```text
[1,2,3]
```

出力 1

```text
[1,2,3,4]
```

<!-- jq-example:sections/3/entries/68/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/69/title">

<h3 id="string-interpolation">文字列への式の埋込み：<code>\(exp)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/69/body">

<p>文字列内では、バックスラッシュに続く丸括弧の中に式を置けます。その式が返すものが、文字列に埋め込まれます。</p>

</div>

<!-- jq-example:sections/3/entries/69/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '"The input was \(.), which is one less than \(.+1)"'
```

入力

```text
42
```

出力 1

```text
"The input was 42, which is one less than 43"
```

<!-- jq-example:sections/3/entries/69/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/70/title">

<h3 id="convert-to-from-json">JSONへの変換とJSONからの変換</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/70/body">

<p>組込み関数 <code>tojson</code> と <code>fromjson</code> は、それぞれ、値をJSONテキストとして出力するか、JSONテキストを値へ解析します。組込み関数 <code>tojson</code> と <code>tostring</code> の違いは、<code>tostring</code> が文字列を変更せず返すのに対し、<code>tojson</code> は文字列をJSON文字列としてエンコードする点です。</p>

</div>

<!-- jq-example:sections/3/entries/70/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '[.[]|tostring]'
```

入力

```text
[1, "foo", ["foo"]]
```

出力 1

```text
["1","foo","[\"foo\"]"]
```

<!-- jq-example:sections/3/entries/70/examples/0:end -->

<!-- jq-example:sections/3/entries/70/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '[.[]|tojson]'
```

入力

```text
[1, "foo", ["foo"]]
```

出力 1

```text
["1","\"foo\"","[\"foo\"]"]
```

<!-- jq-example:sections/3/entries/70/examples/1:end -->

<!-- jq-example:sections/3/entries/70/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '[.[]|tojson|fromjson]'
```

入力

```text
[1, "foo", ["foo"]]
```

出力 1

```text
[1,"foo",["foo"]]
```

<!-- jq-example:sections/3/entries/70/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/71/title">

<h3 id="format-strings-and-escaping">文字列の書式設定とエスケープ</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/71/body">

<p><code>@foo</code> 構文は、文字列の書式設定やエスケープに使います。URLや、HTML・XMLのような言語の文書などを作る際に便利です。<code>@foo</code> は、それ自体をフィルターとして使えます。利用できるエスケープは次のとおりです。</p>
<ul>
<li><code>@text</code>:</li>
</ul>
<p><code>tostring</code> を呼び出します。詳細はその関数を参照してください。</p>
<ul>
<li><code>@json</code>:</li>
</ul>
<p>入力をJSONとしてシリアライズします。</p>
<ul>
<li><code>@html</code>:</li>
</ul>
<p>文字 <code>&lt;&gt;&amp;'"</code> を、対応する実体参照 <code>&amp;lt;</code>、<code>&amp;gt;</code>、<code>&amp;amp;</code>、<code>&amp;apos;</code>、<code>&amp;quot;</code> に置き換えて、HTML/XMLエスケープを適用します。</p>
<ul>
<li><code>@uri</code>:</li>
</ul>
<p>URIのすべての予約文字を <code>%XX</code> という並びに置き換えて、パーセントエンコードを適用します。</p>
<ul>
<li><code>@urid</code>:</li>
</ul>
<p><code>@uri</code> の逆の操作です。すべての <code>%XX</code> という並びを対応するURIの文字に置き換えて、パーセントデコードを適用します。</p>
<ul>
<li><code>@csv</code>:</li>
</ul>
<p>入力は配列でなければなりません。CSVとして出力し、文字列は二重引用符で囲み、引用符は繰り返すことでエスケープします。</p>
<ul>
<li><code>@tsv</code>:</li>
</ul>
<p>入力は配列でなければなりません。TSV（タブ区切りの値）として出力します。各入力配列を1行として出力します。フィールドは1つのタブ（ASCII <code>0x09</code>）で区切ります。入力の改行（ASCII <code>0x0a</code>）、復帰（ASCII <code>0x0d</code>）、タブ（ASCII <code>0x09</code>）、バックスラッシュ（ASCII <code>0x5c</code>）は、それぞれエスケープシーケンス <code>\n</code>、<code>\r</code>、<code>\t</code>、<code>\\</code> として出力します。</p>
<ul>
<li><code>@sh</code>:</li>
</ul>
<p>POSIXシェルのコマンドラインで使えるように入力をエスケープします。入力が配列の場合、出力はスペースで区切った文字列の並びになります。</p>
<ul>
<li><code>@base64</code>:</li>
</ul>
<p>RFC 4648で規定されているbase64へ入力を変換します。</p>
<ul>
<li><code>@base64d</code>:</li>
</ul>
<p><code>@base64</code> の逆の操作です。RFC 4648に従って入力をデコードします。注意：デコードした文字列がUTF-8でない場合、結果は未定義です。</p>
<p>この構文は、文字列への式の埋込みと便利に組み合わせられます。<code>@foo</code> トークンの後に文字列リテラルを置けます。文字列リテラルの内容自体は、エスケープ<em>されません</em>。ただし、その文字列リテラル内に埋め込まれる式の結果は、すべてエスケープされます。たとえば、</p>
<pre><code>@uri "https://www.google.com/search?q=\(.search)"&#10;</code></pre>
<p>は、入力 <code>{"search":"what is jq?"}</code> に対して、次の出力を生成します。</p>
<pre><code>"https://www.google.com/search?q=what%20is%20jq%3F"&#10;</code></pre>
<p>URLのスラッシュや疑問符などは、文字列リテラルの一部だったため、エスケープされないことに注意してください。</p>

</div>

<!-- jq-example:sections/3/entries/71/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq '@html'
```

入力

```text
"This works if x < y"
```

出力 1

```text
"This works if x &lt; y"
```

<!-- jq-example:sections/3/entries/71/examples/0:end -->

<!-- jq-example:sections/3/entries/71/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq '@sh "echo \(.)"'
```

入力

```text
"O'Hara's Ale"
```

出力 1

```text
"echo 'O'\\''Hara'\\''s Ale'"
```

<!-- jq-example:sections/3/entries/71/examples/1:end -->

<!-- jq-example:sections/3/entries/71/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq '@base64'
```

入力

```text
"This is a message"
```

出力 1

```text
"VGhpcyBpcyBhIG1lc3NhZ2U="
```

<!-- jq-example:sections/3/entries/71/examples/2:end -->

<!-- jq-example:sections/3/entries/71/examples/3:start -->

#### 実行例 4

コマンド

```sh
jq '@base64d'
```

入力

```text
"VGhpcyBpcyBhIG1lc3NhZ2U="
```

出力 1

```text
"This is a message"
```

<!-- jq-example:sections/3/entries/71/examples/3:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/72/title">

<h3 id="dates">日付</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/72/body">

<p>jqは、高水準と低水準の組込み関数による、基本的な日付処理機能を提供します。これらの組込み関数は、すべての場合においてUTCの時刻だけを扱います。</p>
<p>組込み関数 <code>fromdateiso8601</code> は、ISO 8601形式の日時を、Unixエポック（1970-01-01T00:00:00Z）からの秒数へ解析します。組込み関数 <code>todateiso8601</code> は、その逆の操作を行います。</p>
<p>組込み関数 <code>fromdate</code> は日時文字列を解析します。現在、<code>fromdate</code> はISO 8601形式の日時文字列にだけ対応していますが、将来はさらに多くの形式の日時文字列の解析を試みるようになります。</p>
<p>組込み関数 <code>todate</code> は、<code>todateiso8601</code> の別名です。</p>
<p>組込み関数 <code>now</code> は、現在の時刻を、Unixエポックからの秒数で出力します。</p>
<p>Cライブラリの時刻関数に対する低水準のjqインターフェースも提供されています。<code>strptime</code>、<code>strftime</code>、<code>strflocaltime</code>、<code>mktime</code>、<code>gmtime</code>、<code>localtime</code> です。<code>strptime</code> と <code>strftime</code> で使う書式文字列については、ホストOSの文書を参照してください。注意：これらはjqで必ずしも安定したインターフェースではなく、特に地域化機能については注意が必要です。</p>
<p>組込み関数 <code>gmtime</code> は、Unixエポックからの秒数を受け取り、グリニッジ標準時の「分解された時刻」表現を出力します。これは数値の配列で、次の順序で表します。年、月（0始まり）、月内の日（1始まり）、時、分、秒、曜日、年内の日です。別途記載がない限り、すべて1始まりです。一部のシステムでは、1900年3月1日より前、または2099年12月31日より後の日付で、曜日の数値が誤っていることがあります。</p>
<p>組込み関数 <code>localtime</code> は、組込み関数 <code>gmtime</code> と同様に動作しますが、ローカルのタイムゾーン設定を使います。</p>
<p>組込み関数 <code>mktime</code> は、<code>gmtime</code> と <code>strptime</code> が出力する「分解された時刻」表現を受け取ります。</p>
<p>組込み関数 <code>strptime(fmt)</code> は、引数 <code>fmt</code> に一致する入力文字列を解析します。出力は「分解された時刻」表現で、<code>mktime</code> が受け取り、<code>gmtime</code> が出力する表現です。</p>
<p>組込み関数 <code>strftime(fmt)</code> は、指定した書式で時刻（GMT）を整形します。<code>strflocaltime</code> は同じ操作を行いますが、ローカルのタイムゾーン設定を使います。</p>
<p><code>strptime</code> と <code>strftime</code> の書式文字列は、一般的なCライブラリの文書で説明されています。ISO 8601日時の書式文字列は <code>"%Y-%m-%dT%H:%M:%SZ"</code> です。</p>
<p>一部のシステムでは、jqがこれらの日付機能の一部またはすべてに対応していない場合があります。特に、macOSでは、<code>%u</code> と <code>%j</code> の指定子を <code>strptime(fmt)</code> で使えません。</p>

</div>

<!-- jq-example:sections/3/entries/72/examples/0:start -->

#### 実行例 1

コマンド

```sh
jq 'fromdate'
```

入力

```text
"2015-03-05T23:51:47Z"
```

出力 1

```text
1425599507
```

<!-- jq-example:sections/3/entries/72/examples/0:end -->

<!-- jq-example:sections/3/entries/72/examples/1:start -->

#### 実行例 2

コマンド

```sh
jq 'strptime("%Y-%m-%dT%H:%M:%SZ")'
```

入力

```text
"2015-03-05T23:51:47Z"
```

出力 1

```text
[2015,2,5,23,51,47,4,63]
```

<!-- jq-example:sections/3/entries/72/examples/1:end -->

<!-- jq-example:sections/3/entries/72/examples/2:start -->

#### 実行例 3

コマンド

```sh
jq 'strptime("%Y-%m-%dT%H:%M:%SZ")|mktime'
```

入力

```text
"2015-03-05T23:51:47Z"
```

出力 1

```text
1425599507
```

<!-- jq-example:sections/3/entries/72/examples/2:end -->

<div class="jq-upstream-field" data-source-key="sections/3/entries/73/title">

<h3 id="sql-style-operators">SQL形式の演算子</h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/73/body">

<p>jqはいくつかのSQL形式の演算子を提供します。</p>
<ul>
<li><code>INDEX(stream; index_expression)</code>:</li>
</ul>
<p>この組込み関数は、指定したストリームの各値に、指定した索引式を適用してキーを計算したオブジェクトを生成します。</p>
<ul>
<li><code>JOIN($idx; stream; idx_expr; join_expr)</code>:</li>
</ul>
<p>この組込み関数は、指定したストリームの値を、指定した索引へ結合します。索引のキーは、指定したストリームの各値に、指定した索引式を適用して計算します。ストリーム内の値と、索引内の対応する値からなる配列を、指定した結合式に渡して、それぞれの結果を生成します。</p>
<ul>
<li><code>JOIN($idx; stream; idx_expr)</code>:</li>
</ul>
<p><code>JOIN($idx; stream; idx_expr; .)</code> と同じです。</p>
<ul>
<li><code>JOIN($idx; idx_expr)</code>:</li>
</ul>
<p>この組込み関数は、入力 <code>.</code> を指定した索引へ結合します。指定した索引式を <code>.</code> に適用して、索引のキーを計算します。結合操作は、前述のとおりです。</p>
<ul>
<li><code>IN(s)</code>:</li>
</ul>
<p>この組込み関数が <code>true</code> を出力するのは、<code>.</code> が指定したストリームに現れる場合です。それ以外の場合は <code>false</code> を出力します。</p>
<ul>
<li><code>IN(source; s)</code>:</li>
</ul>
<p>この組込み関数が <code>true</code> を出力するのは、元のストリームのいずれかの値が2番目のストリームに現れる場合です。それ以外の場合は <code>false</code> を出力します。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/74/title">

<h3 id="builtins"><code>builtins</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/3/entries/74/body">

<p>すべての組込み関数のリストを、<code>name/arity</code> という形式で返します。同じ名前でも引数の数が異なる関数は別の関数とみなされるため、<code>all/0</code>、<code>all/1</code>、<code>all/2</code> はすべてリストに含まれます。</p>

</div>

## 訳注

訳注：この節の数値に関する一般的な説明は、Basic filtersのIdentityにある実装・ビルド設定による精度保持と比較の条件も踏まえて読んでください。全ビルドで同じ精度保持が保証されるという意味に拡張しないでください。

訳注：lengthの文字列に対する値はUnicodeコードポイント数です。文字列自体のUTF-8バイト数と、引用符・エスケープを含むJSON文字列表現のバイト数は区別してください。UTF-8バイト数はutf8bytelengthを参照してください。原文のASCIIに関する括弧内の説明は保持していますが、JSONテキスト全体のバイト数と常に一致するという意味に拡張しないでください。

訳注：このunique_byの説明では、原文のgroupという表記を保持しています。グループ分けの具体的な説明と実行例は、このページのgroup_by(path_expression)を参照してください。ここで新しい関数名や未記載のAPIを補うものではありません。

訳注：日付の原文冒頭のUTCに関する一般的な説明は保持していますが、同じ原文にlocaltimeとstrflocaltimeはローカルのタイムゾーン設定を使うと明記されています。すべての関数が常にUTCだけを使うという保証へ拡張せず、各関数の説明を参照してください。時刻配列の全項目を一律に1始まりと推測せず、原文の個別説明と保持した実行例を区別して参照してください。

[原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#builtin-operators-and-functions) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/02-basic-filters/#identity) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#length) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#utf8bytelength) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#unique-unique_by) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#group_by) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#group_by) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#dates)

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
