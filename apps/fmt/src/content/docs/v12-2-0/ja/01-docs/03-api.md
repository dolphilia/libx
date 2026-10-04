---
title: "APIリファレンス"
licenseSource: "fmt-12-2-0"
documentContext: [{"kind":"editorial","html":"<aside class=\"fmt-editorial-note\" role=\"note\"><p><strong>fmt 12.2.0に対する編集注。</strong> 上の原文リストには、<code>FMT_OPTIMIZE_SIZE=1</code>でロケールサポートが無効になるとあります。一方、<a href=\"https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/base.h#L890-L892\">固定版のヘッダー</a>では、<code>FMT_USE_LOCALE</code>が明示的に定義されていない場合、<code>(FMT_OPTIMIZE_SIZE &lt;= 1)</code>として定義されます。そのため、既定ではレベル1で有効、レベル2で無効です。<code>FMT_USE_LOCALE</code>を明示的に設定した場合は、その設定が優先されます。上には原文の記述を保持しています。</p></aside>","context":{"anchor":"macros","label":"マクロ"}}]
---

<h1 id="api-reference">APIリファレンス</h1>
<p>{fmt}ライブラリのAPIは、次の構成要素からなります。</p>
<ul>
<li><a href="#base-api"><code>fmt/base.h</code></a>：C++20のコンパイル時チェックと最小限の依存関係を備えた、<code>char</code>/UTF-8向けの主要な書式設定関数を提供する基本API</li>
<li><a href="#format-api"><code>fmt/format.h</code></a>：<code>fmt::format</code>などの書式設定関数とロケールサポート</li>
<li><a href="#ranges-api"><code>fmt/ranges.h</code></a>：範囲とタプルの書式設定</li>
<li><a href="#chrono-api"><code>fmt/chrono.h</code></a>：日付と時刻の書式設定</li>
<li><a href="#std-api"><code>fmt/std.h</code></a>：標準ライブラリ型のフォーマッター</li>
<li><a href="#compile-api"><code>fmt/compile.h</code></a>：書式文字列のコンパイル</li>
<li><a href="#color-api"><code>fmt/color.h</code></a>：端末の色とテキストスタイル</li>
<li><a href="#os-api"><code>fmt/os.h</code></a>：システムAPI</li>
<li><a href="#ostream-api"><code>fmt/ostream.h</code></a>：<code>std::ostream</code>のサポート</li>
<li><a href="#args-api"><code>fmt/args.h</code></a>：動的な引数リスト</li>
<li><a href="#printf-api"><code>fmt/printf.h</code></a>：安全な<code>printf</code></li>
<li><a href="#xchar-api"><code>fmt/xchar.h</code></a>：任意で利用できる<code>wchar_t</code>サポート</li>
</ul>
<p>ライブラリが提供するすべての関数と型は<code>fmt</code>名前空間に置かれ、マクロには<code>FMT_</code>接頭辞が付きます。</p>
<h2 id="c-module-api">C++モジュールAPI</h2>
<p>C++モジュールAPIを使う場合、上に挙げたヘッダーをインクルードする必要はありません。代わりに<code>import fmt;</code>文を使えます。以下で説明するその他の機能はすべて同じです。</p>
<h2 id="base-api">基本API</h2>
<p><code>fmt/base.h</code>は、C++20のコンパイル時チェックを備えた<code>char</code>/UTF-8向けの主要な書式設定関数を提供する基本APIを定義します。コンパイル時間を短くするため、インクルードする依存ヘッダーを最小限に抑えています。このヘッダーの利点が得られるのは、{fmt}を既定のライブラリ形式で使う場合だけで、ヘッダーのみのモードではありません。また、次の型に対する<code>formatter</code>の特殊化も提供します。</p>
<ul>
<li><code>int</code>, <code>long long</code></li>
<li><code>unsigned</code>, <code>unsigned long long</code></li>
<li><code>float</code>, <code>double</code>, <code>long double</code></li>
<li><code>bool</code></li>
<li><code>char</code></li>
<li><code>const char*</code>, <a href="#basic_string_view"><code>fmt::string_view</code></a></li>
<li><code>const void*</code></li>
</ul>
<p>次の関数は、Pythonの<a href="https://docs.python.org/3/library/stdtypes.html#str.format">str.format</a>に似た<a href="/docs/fmt/v12-2-0/ja/01-docs/04-syntax/">書式文字列の構文</a>を使います。<em>fmt</em>と<em>args</em>を引数として受け取ります。</p>
<p><em>fmt</em>は、通常のテキストと、波括弧<code>{}</code>で囲まれた置換フィールドを含む書式文字列です。結果の文字列では、フィールドが書式設定された引数に置き換わります。<a href="#format_string"><code>fmt::format_string</code></a>は、文字列リテラルまたは<code>constexpr</code>文字列から暗黙に構築できる書式文字列で、C++20ではコンパイル時に検査されます。実行時の書式文字列を渡すには、<a href="#runtime"><code>fmt::runtime</code></a>で包みます。</p>
<p><em>args</em>は、書式設定するオブジェクトを表す引数リストです。</p>
<p>別途指定されていない限り、入出力エラーは<a href="https://en.cppreference.com/w/cpp/error/system_error"><code>std::system_error</code></a>例外として報告されます。</p>
<div class="docblock">
<a id="print">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;print(format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力を<code>stdout</code>に書き込みます。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("The&#32;answer&#32;is&#32;{}.",&#32;42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="print-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;print(FILE*&#32;f,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力をファイル<code>f</code>に書き込みます。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print(stderr,&#32;"Don't&#32;{}!",&#32;"panic");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="println">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;println(format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力を<code>stdout</code>に書き込んでから改行を出力します。</p>
        </div>
</div>

<div class="docblock">
<a id="println-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;println(FILE*&#32;f,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力をファイル<code>f</code>に書き込んでから改行を出力します。</p>
        </div>
</div>

<div class="docblock">
<a id="format_to">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;OutputIt,&#32;typename...&nbsp;T&gt;&#10;</div><div>remove_cvref_t&lt;OutputIt&gt;&#32;format_to(OutputIt&amp;&amp;&#32;out,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、結果を出力イテレーター<code>out</code>に書き込み、出力範囲の終端の次を指すイテレーターを返します。<code>format_to</code>は終端のヌル文字を追加しません。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">auto&#32;out&#32;=&#32;std::vector&lt;char&gt;();&#10;fmt::format_to(std::back_inserter(out),&#32;"{}",&#32;42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="format_to_n">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;OutputIt,&#32;typename...&nbsp;T&gt;&#10;</div><div>format_to_n_result&lt;OutputIt&gt;&#32;format_to_n(OutputIt&#32;out,&#32;size_t&#32;n,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、結果のうち最大<code>n</code>文字を出力イテレーター<code>out</code>に書き込みます。切り詰める前の出力全体のサイズと、出力範囲の終端の次を指すイテレーターを返します。<code>format_to_n</code>は終端のヌル文字を追加しません。</p>
        </div>
</div>

<div class="docblock">
<a id="format_to_n_result">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;OutputIt&gt;&#10;</div><div>struct&#32;format_to_n_result;</div></code></pre>
</a>
<div class="docblock-desc">
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>OutputIt&#32;out;</div></code></pre>
<div class="docblock-desc">
<p>出力範囲の終端の次を指すイテレーター。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>size_t&#32;size;</div></code></pre>
<div class="docblock-desc">
<p>切り詰める前の出力全体のサイズ。</p>
        </div>
</div>
</div>
</div>

<div class="docblock">
<a id="formatted_size">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>size_t&#32;formatted_size(format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>format(fmt, args...)</code>の出力に含まれる文字数を返します。</p>
        </div>
</div>

<p><span id="udt"></span></p>
<h3 id="formatting-user-defined-types">ユーザー定義型の書式設定</h3>
<p>{fmt}ライブラリは、多くの標準C++型に対するフォーマッターを提供します。<code>std::vector</code>などの標準コンテナーを含む範囲とタプルについては<a href="#ranges-api"><code>fmt/ranges.h</code></a>、日付と時刻の書式設定については<a href="#chrono-api"><code>fmt/chrono.h</code></a>、その他の標準ライブラリ型については<a href="#std-api"><code>fmt/std.h</code></a>を参照してください。</p>
<p>ユーザー定義型を書式設定可能にする方法は2つあります。<code>format_as</code>関数を提供する方法と、<code>formatter</code>構造体テンプレートを特殊化する方法です。void型以外を指すポインター型の書式設定は意図的に禁止されており、どちらの拡張APIを使っても書式設定可能にはできません。</p>
<p>型を別の型として、同じ書式指定子で書式設定可能にしたい場合は、<code>format_as</code>を使います。<code>format_as</code>関数は、その型のオブジェクトを受け取り、書式設定可能な型のオブジェクトを返すようにします。この関数は、対象の型と同じ名前空間に定義するようにします。</p>
<p>例（<a href="https://godbolt.org/z/nvME4arz8">実行</a>）：</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/format.h&gt;&#10;&#10;namespace&#32;kevin_namespacy&#32;{&#10;&#10;enum&#32;class&#32;film&#32;{&#10;&#32;&#32;house_of_cards,&#32;american_beauty,&#32;se7en&#32;=&#32;7&#10;};&#10;&#10;auto&#32;format_as(film&#32;f)&#32;{&#32;return&#32;fmt::underlying(f);&#32;}&#10;&#10;}&#10;&#10;int&#32;main()&#32;{&#10;&#32;&#32;fmt::print("{}\n",&#32;kevin_namespacy::film::se7en);&#32;//&#32;Output:&#32;7&#10;}</code></pre>

<p>特殊化を使う方法はより複雑ですが、解析と書式設定を完全に制御できます。この方法を使うには、対象の型について<code>formatter</code>構造体テンプレートを特殊化し、<code>parse</code>メソッドと<code>format</code>メソッドを実装します。</p>
<p>フォーマッターの定義では、継承またはコンポジションによって既存のフォーマッターを再利用する方法が推奨されます。こうすると、標準の書式指定子を自分で実装せずにサポートできます。例：</p>
<pre><code class="language-c++">//&#32;color.h:&#10;#include&#32;&lt;fmt/base.h&gt;&#10;&#10;enum&#32;class&#32;color&#32;{red,&#32;green,&#32;blue};&#10;&#10;template&#32;&lt;&gt;&#32;struct&#32;fmt::formatter&lt;color&gt;:&#32;formatter&lt;string_view&gt;&#32;{&#10;&#32;&#32;//&#32;parse&#32;is&#32;inherited&#32;from&#32;formatter&lt;string_view&gt;.&#10;&#10;&#32;&#32;auto&#32;format(color&#32;c,&#32;format_context&amp;&#32;ctx)&#32;const&#10;&#32;&#32;&#32;&#32;-&gt;&#32;format_context::iterator;&#10;};&#10;</code></pre>

<pre><code class="language-c++">//&#32;color.cc:&#10;#include&#32;"color.h"&#10;#include&#32;&lt;fmt/format.h&gt;&#10;&#10;auto&#32;fmt::formatter&lt;color&gt;::format(color&#32;c,&#32;format_context&amp;&#32;ctx)&#32;const&#10;&#32;&#32;&#32;&#32;-&gt;&#32;format_context::iterator&#32;{&#10;&#32;&#32;string_view&#32;name&#32;=&#32;"unknown";&#10;&#32;&#32;switch&#32;(c)&#32;{&#10;&#32;&#32;case&#32;color::red:&#32;&#32;&#32;name&#32;=&#32;"red";&#32;break;&#10;&#32;&#32;case&#32;color::green:&#32;name&#32;=&#32;"green";&#32;break;&#10;&#32;&#32;case&#32;color::blue:&#32;&#32;name&#32;=&#32;"blue";&#32;break;&#10;&#32;&#32;}&#10;&#32;&#32;return&#32;formatter&lt;string_view&gt;::format(name,&#32;ctx);&#10;}&#10;</code></pre>

<p><code>formatter&lt;string_view&gt;::format</code>は<code>fmt/format.h</code>に定義されているため、このヘッダーをソースファイルにインクルードする必要があります。<code>parse</code>は<code>formatter&lt;string_view&gt;</code>から継承されるので、文字列の書式指定をすべて認識します。たとえば、</p>
<pre><code class="language-c++">fmt::format("{:&gt;10}",&#32;color::blue)&#10;</code></pre>

<p>は<code>"      blue"</code>を返します。</p>

<p>一般に、フォーマッターは次の形を取ります。</p>
<pre class="highlight"><code>template&#32;&lt;&gt;&#32;struct&#32;fmt::formatter&lt;T&gt;&#32;{&#10;&#32;&#32;//&#32;Parses&#32;format&#32;specifiers&#32;and&#32;stores&#32;them&#32;in&#32;the&#32;formatter.&#10;&#32;&#32;//&#10;&#32;&#32;//&#32;[ctx.begin(),&#32;ctx.end())&#32;is&#32;a,&#32;possibly&#32;empty,&#32;character&#32;range&#32;that&#10;&#32;&#32;//&#32;contains&#32;a&#32;part&#32;of&#32;the&#32;format&#32;string&#32;starting&#32;from&#32;the&#32;format&#10;&#32;&#32;//&#32;specifications&#32;to&#32;be&#32;parsed,&#32;e.g.&#32;in&#10;&#32;&#32;//&#10;&#32;&#32;//&#32;&#32;&#32;fmt::format("{:f}&#32;continued",&#32;...);&#10;&#32;&#32;//&#10;&#32;&#32;//&#32;the&#32;range&#32;will&#32;contain&#32;"f}&#32;continued".&#32;The&#32;formatter&#32;should&#32;parse&#10;&#32;&#32;//&#32;specifiers&#32;until&#32;'}'&#32;or&#32;the&#32;end&#32;of&#32;the&#32;range.&#32;In&#32;this&#32;example&#32;the&#10;&#32;&#32;//&#32;formatter&#32;should&#32;parse&#32;the&#32;'f'&#32;specifier&#32;and&#32;return&#32;an&#32;iterator&#10;&#32;&#32;//&#32;pointing&#32;to&#32;'}'.&#10;&#32;&#32;constexpr&#32;auto&#32;parse(format_parse_context&amp;&#32;ctx)&#10;&#32;&#32;&#32;&#32;-&gt;&#32;format_parse_context::iterator;&#10;&#10;&#32;&#32;//&#32;Formats&#32;value&#32;using&#32;the&#32;parsed&#32;format&#32;specification&#32;stored&#32;in&#32;this&#10;&#32;&#32;//&#32;formatter&#32;and&#32;writes&#32;the&#32;output&#32;to&#32;ctx.out().&#10;&#32;&#32;auto&#32;format(const&#32;T&amp;&#32;value,&#32;format_context&amp;&#32;ctx)&#32;const&#10;&#32;&#32;&#32;&#32;-&gt;&#32;format_context::iterator;&#10;};</code></pre>

<p>少なくとも、オブジェクト全体に適用され、標準フォーマッターと同じ意味を持つfill、align、widthをサポートすることが推奨されます。</p>
<p>クラス階層に対するフォーマッターも記述できます。</p>
<pre><code class="language-c++">//&#32;demo.h:&#10;#include&#32;&lt;type_traits&gt;&#10;#include&#32;&lt;fmt/format.h&gt;&#10;&#10;struct&#32;A&#32;{&#10;&#32;&#32;virtual&#32;~A()&#32;{}&#10;&#32;&#32;virtual&#32;std::string&#32;name()&#32;const&#32;{&#32;return&#32;"A";&#32;}&#10;};&#10;&#10;struct&#32;B&#32;:&#32;A&#32;{&#10;&#32;&#32;virtual&#32;std::string&#32;name()&#32;const&#32;{&#32;return&#32;"B";&#32;}&#10;};&#10;&#10;template&#32;&lt;typename&#32;T&gt;&#10;struct&#32;fmt::formatter&lt;T,&#32;std::enable_if_t&lt;std::is_base_of_v&lt;A,&#32;T&gt;,&#32;char&gt;&gt;&#32;:&#10;&#32;&#32;&#32;&#32;fmt::formatter&lt;std::string&gt;&#32;{&#10;&#32;&#32;auto&#32;format(const&#32;A&amp;&#32;a,&#32;format_context&amp;&#32;ctx)&#32;const&#32;{&#10;&#32;&#32;&#32;&#32;return&#32;formatter&lt;std::string&gt;::format(a.name(),&#32;ctx);&#10;&#32;&#32;}&#10;};&#10;</code></pre>

<pre><code class="language-c++">//&#32;demo.cc:&#10;#include&#32;"demo.h"&#10;#include&#32;&lt;fmt/format.h&gt;&#10;&#10;int&#32;main()&#32;{&#10;&#32;&#32;B&#32;b;&#10;&#32;&#32;A&amp;&#32;a&#32;=&#32;b;&#10;&#32;&#32;fmt::print("{}",&#32;a);&#32;//&#32;Output:&#32;B&#10;}&#10;</code></pre>

<p><code>formatter</code>の特殊化と<code>format_as</code>のオーバーロードを両方提供することは禁止されています。</p>
<div class="docblock">
<a id="basic_format_parse_context">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Char&gt;&#10;</div><div>using&#32;basic_format_parse_context&#32;=&#32;parse_context&lt;Char&gt;;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="context">
<pre><code class="language-cpp decl"><div></div><div>class&#32;context;</div></code></pre>
</a>
<div class="docblock-desc">
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>constexpr&#32;context(iterator&#32;out,&#32;format_args&#32;args,&#32;locale_ref&#32;loc);</div></code></pre>
<div class="docblock-desc">
<p><code>context</code>オブジェクトを構築します。引数への参照がオブジェクトに保存されるため、引数の生存期間が適切であることを確認してください。</p>
        </div>
</div>
</div>
</div>

<div class="docblock">
<a id="format_context">
<pre><code class="language-cpp decl"><div></div><div>using&#32;format_context&#32;=&#32;context;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<h3 id="compile-time-checks">コンパイル時チェック</h3>
<p>C++20の<code>consteval</code>をサポートするコンパイラーでは、書式文字列のコンパイル時チェックが既定で有効です。古いコンパイラーでは、代わりに<code>fmt/format.h</code>で定義された<a href="#legacy-checks">FMT_STRING</a>マクロを使えます。</p>
<p>Pythonの<code>str.format</code>や通常の関数と同様に、使われない引数を渡すこともできます。</p>
<p>テンプレートによるコードの肥大化を避けながら、<code>fmt::format_string</code>を使って独自の関数でコンパイル時チェックを有効にする例は、「<a href="#type-erasure">型消去</a>」を参照してください。</p>
<div class="docblock">
<a id="fstring">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>struct&#32;fstring;</div></code></pre>
</a>
<div class="docblock-desc">
<p>コンパイル時の書式文字列。公開APIでは、型推論を防ぐために<code>format_string</code>を使います。</p>
    </div>
</div>

<div class="docblock">
<a id="format_string">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>using&#32;format_string&#32;=&#32;typename&#32;fstring&lt;T...&gt;::t;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="runtime">
<pre><code class="language-cpp decl"><div></div><div>runtime_format_string&lt;&gt;&#32;runtime(string_view&#32;s);</div></code></pre>
</a>
<div class="docblock-desc">
<p>実行時の書式文字列を作成します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;Check&#32;format&#32;string&#32;at&#32;runtime&#32;instead&#32;of&#32;compile-time.&#10;fmt::print(fmt::runtime("{:d}"),&#32;"I&#32;am&#32;not&#32;a&#32;number");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<h3 id="type-erasure">型消去</h3>
<p>コンパイル時チェックを備え、バイナリーサイズを小さく抑えた独自の書式設定関数を作成できます。例（<a href="https://godbolt.org/z/b9Pbasvzc">実行</a>）：</p>
<pre><code class="language-c++">#include&#32;&lt;fmt/format.h&gt;&#10;&#10;void&#32;vlog(const&#32;char*&#32;file,&#32;int&#32;line,&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::string_view&#32;fmt,&#32;fmt::format_args&#32;args)&#32;{&#10;&#32;&#32;fmt::print("{}:&#32;{}:&#32;{}",&#32;file,&#32;line,&#32;fmt::vformat(fmt,&#32;args));&#10;}&#10;&#10;template&#32;&lt;typename...&#32;T&gt;&#10;void&#32;log(const&#32;char*&#32;file,&#32;int&#32;line,&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args)&#32;{&#10;&#32;&#32;vlog(file,&#32;line,&#32;fmt,&#32;fmt::make_format_args(args...));&#10;}&#10;&#10;#define&#32;MY_LOG(fmt,&#32;...)&#32;log(__FILE__,&#32;__LINE__,&#32;fmt,&#32;__VA_ARGS__)&#10;&#10;MY_LOG("invalid&#32;squishiness:&#32;{}",&#32;42);&#10;</code></pre>

<p><code>vlog</code>は引数の型をパラメーター化していないため、すべてをパラメーター化した版と比べて、コンパイル時間が短くなり、バイナリーのコードサイズも小さくなります。</p>
<div class="docblock">
<a id="make_format_args">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Context,&#32;typename...&nbsp;T,&#32;int&nbsp;NUM_ARGS,&#32;int&nbsp;NUM_NAMED_ARGS,&#32;ullong&nbsp;DESC&gt;&#10;</div><div>detail::format_arg_store&lt;Context,&#32;NUM_ARGS,&#32;NUM_NAMED_ARGS,&#32;DESC&gt;&#32;make_format_args(T&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p>引数への参照を保存し、<code>format_args</code>へ暗黙に変換できるオブジェクトを構築します。<code>Context</code>は省略でき、その場合は<code>context</code>が既定値になります。生存期間については<code>arg</code>を参照してください。</p>
        </div>
</div>

<div class="docblock">
<a id="basic_format_args">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Context&gt;&#10;</div><div>class&#32;basic_format_args;</div></code></pre>
</a>
<div class="docblock-desc">
<p>書式設定引数の集合を参照するビュー。生存期間の問題を避けるため、<code>vformat</code>などの型消去を使う関数で、パラメーター型としてだけ使うようにします。</p><pre><code class="language-cpp">void&#32;vlog(fmt::string_view&#32;fmt,&#32;fmt::format_args&#32;args);&#32;&#32;//&#32;OK&#10;fmt::format_args&#32;args&#32;=&#32;fmt::make_format_args();&#32;&#32;//&#32;Dangling&#32;reference&#10;</code>&#32;</pre><p></p>
    <div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>constexpr&#32;basic_format_args(const&#32;store&lt;NUM_ARGS,&#32;NUM_NAMED_ARGS,&#32;DESC&gt;&amp;&#32;s);</div></code></pre>
<div class="docblock-desc">
<p><code>format_arg_store</code>から<code>basic_format_args</code>オブジェクトを構築します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>constexpr&#32;basic_format_args(const&#32;format_arg*&#32;args,&#32;int&#32;count,&#32;bool&#32;has_named);</div></code></pre>
<div class="docblock-desc">
<p>動的な引数リストから<code>basic_format_args</code>オブジェクトを構築します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>format_arg&#32;get(int&#32;id);</div></code></pre>
<div class="docblock-desc">
<p>指定されたidの引数を返します。</p>
        </div>
</div>
</div>
</div>

<div class="docblock">
<a id="format_args">
<pre><code class="language-cpp decl"><div></div><div>using&#32;format_args&#32;=&#32;basic_format_args&lt;context&gt;;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="basic_format_arg">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Context&gt;&#10;</div><div>class&#32;basic_format_arg;</div></code></pre>
</a>
<div class="docblock-desc">
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>decltype(vis(0))&#32;visit(Visitor&amp;&amp;&#32;vis);</div></code></pre>
<div class="docblock-desc">
<p>引数の型に応じて適切なvisitメソッドへ処理を振り分け、引数を訪問します。たとえば、引数の型が<code>double</code>の場合は、<code>double</code>型の値を渡して<code>vis(value)</code>を呼び出します。</p>
        </div>
</div>
</div>
</div>

<h3 id="named-arguments">名前付き引数</h3>
<div class="docblock">
<a id="arg">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>named_arg&lt;T&gt;&#32;arg(const&#32;char*&#32;name,&#32;const&#32;T&amp;&#32;arg);</div></code></pre>
</a>
<div class="docblock-desc">
<p>書式設定関数で使う名前付き引数を返します。書式設定関数の呼び出しの中だけで使うようにします。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("The&#32;answer&#32;is&#32;{answer}.",&#32;fmt::arg("answer",&#32;42));&#10;</code></pre><p></p>
<p><code>fmt::arg</code>で渡した名前付き引数はコンパイル時チェックでサポートされませんが、十分に新しいコンパイラーでは、<code>"answer"_a=42</code>はコンパイル時に検査されます。<code>operator""_a()</code>を参照してください。</p>
        </div>
</div>

<h3 id="compatibility">互換性</h3>
<div class="docblock">
<a id="basic_string_view">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Char&gt;&#10;</div><div>class&#32;basic_string_view;</div></code></pre>
</a>
<div class="docblock-desc">
<p>C++17より前の環境向けに、APIの一部を提供する<code>std::basic_string_view</code>の実装です。<code>std::basic_string_view</code>が利用できる場合でも、公開APIでは<code>fmt::basic_string_view</code>を使います。これは、ライブラリとクライアントコードを異なる<code>-std</code>オプションでコンパイルした場合の問題を防ぐためです。ただし、そのようなコンパイル方法は推奨されません。</p>
    </div>
</div>

<div class="docblock">
<a id="string_view">
<pre><code class="language-cpp decl"><div></div><div>using&#32;string_view&#32;=&#32;basic_string_view&lt;char&gt;;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<h2 id="format-api">書式設定API</h2>
<p><code>fmt/format.h</code>は、追加の書式設定関数とロケールサポートを提供する、完全な書式設定APIを定義します。</p>
<p><span id="format"></span></p>
<div class="docblock">
<a id="format-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>std::string&#32;format(format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、結果を文字列として返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">#include&#32;&lt;fmt/format.h&gt;&#10;std::string&#32;message&#32;=&#32;fmt::format("The&#32;answer&#32;is&#32;{}.",&#32;42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="vformat">
<pre><code class="language-cpp decl"><div></div><div>std::string&#32;vformat(string_view&#32;fmt,&#32;format_args&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="operator-literal-a">
<pre><code class="language-cpp decl"><div>template&#32;&lt;detail::fixed_string&nbsp;S&gt;&#10;</div><div>auto&#32;operator""_a();</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt::arg</code>に相当するユーザー定義リテラルで、コンパイル時チェックを備えています。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">using&#32;namespace&#32;fmt::literals;&#10;fmt::print("The&#32;answer&#32;is&#32;{answer}.",&#32;"answer"_a=42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<h3 id="utilities">ユーティリティー</h3>
<div class="docblock">
<a id="ptr">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>const&#32;void*&#32;ptr(T&#32;p);</div></code></pre>
</a>
<div class="docblock-desc">
<p>ポインターを書式設定するために、<code>p</code>を<code>const void*</code>に変換します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">auto&#32;s&#32;=&#32;fmt::format("{}",&#32;fmt::ptr(p));&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="underlying">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Enum&gt;&#10;</div><div>underlying_t&lt;Enum&gt;&#32;underlying(Enum&#32;e);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>e</code>を基底型に変換します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">enum&#32;class&#32;color&#32;{&#32;red,&#32;green,&#32;blue&#32;};&#10;auto&#32;s&#32;=&#32;fmt::format("{}",&#32;fmt::underlying(color::red));&#32;&#32;//&#32;s&#32;==&#32;"0"&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="to_string">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>std::string&#32;to_string(const&#32;T&amp;&#32;value);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="group_digits">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>group_digits_view&lt;T&gt;&#32;group_digits(T&#32;value);</div></code></pre>
</a>
<div class="docblock-desc">
<p>ロケールに依存しない3桁ごとの区切り文字として','を使い、整数値を書式設定するビューを返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("{}",&#32;fmt::group_digits(12345));&#10;//&#32;Output:&#32;"12,345"&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="detail::buffer">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>class&#32;detail::buffer;</div></code></pre>
</a>
<div class="docblock-desc">
<p>必要に応じて拡張できる、連続したメモリーバッファーです。内部クラスなので、直接は使わず、<code>memory_buffer</code>を通してだけ使うようにします。</p>
    <div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>size_t&#32;size();</div></code></pre>
<div class="docblock-desc">
<p>このバッファーのサイズを返します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>size_t&#32;capacity();</div></code></pre>
<div class="docblock-desc">
<p>このバッファーの容量を返します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>T&#32;*&#32;data();</div></code></pre>
<div class="docblock-desc">
<p>バッファーデータへのポインターを返します。データはヌル終端されていません。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;clear();</div></code></pre>
<div class="docblock-desc">
<p>このバッファーをクリアします。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;append(const&#32;U*&#32;begin,&#32;const&#32;U*&#32;end);</div></code></pre>
<div class="docblock-desc">
<p>バッファーの末尾にデータを追加します。</p>
        </div>
</div>
</div>
</div>

<div class="docblock">
<a id="basic_memory_buffer">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T,&#32;size_t&nbsp;SIZE,&#32;typename&#32;Allocator&gt;&#10;</div><div>class&#32;basic_memory_buffer;</div></code></pre>
</a>
<div class="docblock-desc">
<p>自明にコピー／構築できる型のための、動的に拡張するメモリーバッファーです。最初の<code>SIZE</code>個の要素は、オブジェクト自体の内部に保存されます。通常は、<code>char</code>向けの別名<code>memory_buffer</code>を通して使います。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">auto&#32;out&#32;=&#32;fmt::memory_buffer();&#10;fmt::format_to(std::back_inserter(out),&#32;"The&#32;answer&#32;is&#32;{}.",&#32;42);&#10;</code></pre><p></p>
<p>これにより、<code>out</code>に"The answer is 42."が追加されます。バッファーの内容は、<code>to_string(out)</code>で<code>std::string</code>に変換できます。</p>
    <div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer(basic_memory_buffer&amp;&amp;&#32;other);</div></code></pre>
<div class="docblock-desc">
<p>別のオブジェクトの内容をムーブして、<code>basic_memory_buffer</code>オブジェクトを構築します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer&#32;&amp;&#32;operator=(basic_memory_buffer&amp;&amp;&#32;other);</div></code></pre>
<div class="docblock-desc">
<p>もう一方の<code>basic_memory_buffer</code>オブジェクトの内容を、このオブジェクトへムーブします。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;resize(size_t&#32;count);</div></code></pre>
<div class="docblock-desc">
<p>バッファーのサイズを変更し、<code>count</code>個の要素を含むようにします。TがPOD型の場合、新しい要素は初期化されないことがあります。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;reserve(size_t&#32;new_capacity);</div></code></pre>
<div class="docblock-desc">
<p>バッファーの容量を<code>new_capacity</code>まで増やします。</p>
        </div>
</div>
</div>
</div>

<h3 id="system-errors">システムエラー</h3>
<p>{fmt}は利用者にエラーを伝えるために<code>errno</code>を使いませんが、<code>errno</code>を設定するシステム関数を呼び出すことがあります。ライブラリ関数が<code>errno</code>の値を保持するとは想定しないようにしてください。</p>
<div class="docblock">
<a id="system_error">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>std::system_error&#32;system_error(int&#32;error_code,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt::format(fmt, args...)</code>で書式設定したメッセージを使って、<code>std::system_error</code>を構築します。<code>error_code</code>は、<code>errno</code>が表すようなシステムエラーコードです。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;This&#32;throws&#32;std::system_error&#32;with&#32;the&#32;description&#10;//&#32;&#32;&#32;cannot&#32;open&#32;file&#32;'madeup':&#32;No&#32;such&#32;file&#32;or&#32;directory&#10;//&#32;or&#32;similar&#32;(system&#32;message&#32;may&#32;vary).&#10;const&#32;char*&#32;filename&#32;=&#32;"madeup";&#10;FILE*&#32;file&#32;=&#32;fopen(filename,&#32;"r");&#10;if&#32;(!file)&#10;&#32;&#32;throw&#32;fmt::system_error(errno,&#32;"cannot&#32;open&#32;file&#32;'{}'",&#32;filename);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="format_system_error">
<pre><code class="language-cpp decl"><div></div><div>void&#32;format_system_error(detail::buffer&lt;char&gt;&amp;&#32;out,&#32;int&#32;error_code,&#32;const&#32;char*&#32;message);</div></code></pre>
</a>
<div class="docblock-desc">
<p>ファイルを開く際のエラーなど、オペレーティングシステムや言語ランタイムが返したエラーのメッセージを書式設定し、<code>out</code>に書き込みます。書式は<code>std::system_error(ec, message)</code>と同じで、ここで<code>ec</code>は<code>std::error_code(error_code, std::generic_category())</code>です。この書式は実装定義ですが、通常は次のようになります。</p><pre><code class="language-cpp">&lt;message&gt;:&#32;&lt;system-message&gt;&#10;</code></pre><p></p>
<p>ここで、<code>&lt;message&gt;</code>は渡したメッセージ、<code>&lt;system-message&gt;</code>はエラーコードに対応するシステムメッセージです。<code>error_code</code>は、<code>errno</code>が表すようなシステムエラーコードです。</p>
        </div>
</div>

<h3 id="custom-allocators">カスタムアロケーター</h3>
<p>{fmt}ライブラリは、カスタムの動的メモリーアロケーターをサポートします。<a href="#basic_memory_buffer"><code>fmt::basic_memory_buffer</code></a>のテンプレート引数として、カスタムアロケーターのクラスを指定できます。</p>
<pre class="highlight"><code>using&#32;custom_memory_buffer&#32;=&#32;&#10;&#32;&#32;fmt::basic_memory_buffer&lt;char,&#32;fmt::inline_buffer_size,&#32;custom_allocator&gt;;</code></pre>

<p>カスタムアロケーターを使う書式設定関数を記述することもできます。</p>
<pre class="highlight"><code>using&#32;custom_string&#32;=&#10;&#32;&#32;std::basic_string&lt;char,&#32;std::char_traits&lt;char&gt;,&#32;custom_allocator&gt;;&#10;&#10;auto&#32;vformat(custom_allocator&#32;alloc,&#32;fmt::string_view&#32;fmt,&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::format_args&#32;args)&#32;-&gt;&#32;custom_string&#32;{&#10;&#32;&#32;auto&#32;buf&#32;=&#32;custom_memory_buffer(alloc);&#10;&#32;&#32;fmt::vformat_to(std::back_inserter(buf),&#32;fmt,&#32;args);&#10;&#32;&#32;return&#32;custom_string(buf.data(),&#32;buf.size(),&#32;alloc);&#10;}&#10;&#10;template&#32;&lt;typename&#32;...Args&gt;&#10;auto&#32;format(custom_allocator&#32;alloc,&#32;fmt::string_view&#32;fmt,&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;const&#32;Args&amp;&#32;...&#32;args)&#32;-&gt;&#32;custom_string&#32;{&#10;&#32;&#32;return&#32;vformat(alloc,&#32;fmt,&#32;fmt::make_format_args(args...));&#10;}</code></pre>

<p>このアロケーターが使われるのは、出力コンテナーだけです。書式設定関数は通常、組み込み型と文字列型に対してメモリーを割り当てません。ただし、既定以外の浮動小数点書式では、場合によって<code>sprintf</code>にフォールバックする例外があります。</p>
<h3 id="locale">ロケール</h3>
<p>すべての書式設定は、既定ではロケールに依存しません。ロケールに応じた数値の区切り文字を挿入するには、<code>'L'</code>書式指定子を使います。</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/format.h&gt;&#10;#include&#32;&lt;locale&gt;&#10;&#10;std::locale::global(std::locale("en_US.UTF-8"));&#10;auto&#32;s&#32;=&#32;fmt::format("{:L}",&#32;1000000);&#32;&#32;//&#32;s&#32;==&#32;"1,000,000"</code></pre>

<p><code>fmt/format.h</code>は、<code>std::locale</code>をパラメーターとして受け取る、次の書式設定関数のオーバーロードを提供します。コストの高い<code>&lt;locale&gt;</code>のインクルードを避けるため、ロケールの型はテンプレートパラメーターになっています。</p>
<div class="docblock">
<a id="format-overload-3">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>std::string&#32;format(locale_ref&#32;loc,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="format_to-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;OutputIt,&#32;typename...&nbsp;T&gt;&#10;</div><div>OutputIt&#32;format_to(OutputIt&#32;out,&#32;locale_ref&#32;loc,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="formatted_size-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>size_t&#32;formatted_size(locale_ref&#32;loc,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<p><span id="legacy-checks"></span></p>
<h3 id="legacy-compile-time-checks">従来のコンパイル時チェック</h3>
<p><code>FMT_STRING</code>は、古いコンパイラーでコンパイル時チェックを有効にします。C++14以降が必要で、C++11では何も行いません。</p>
<div class="docblock">
<a id="FMT_STRING">
<pre><code class="language-cpp decl"><div></div><div>FMT_STRING(s)</div></code></pre>
</a>
<div class="docblock-desc">
<p>文字列リテラル<code>s</code>から、従来方式のコンパイル時書式文字列を構築します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;A&#32;compile-time&#32;error&#32;because&#32;'d'&#32;is&#32;an&#32;invalid&#32;specifier&#32;for&#32;strings.&#10;std::string&#32;s&#32;=&#32;fmt::format(FMT_STRING("{:d}"),&#32;"foo");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p>従来のコンパイル時チェックの使用を強制するには、プリプロセッサー変数<code>FMT_ENFORCE_COMPILE_STRING</code>を定義します。これを設定すると、<code>FMT_STRING</code>を受け取る関数に通常の文字列を渡した場合、コンパイルが失敗します。</p>
<p><span id="ranges-api"></span></p>
<h2 id="range-and-tuple-formatting">範囲とタプルの書式設定</h2>
<p><code>fmt/ranges.h</code>は、範囲とタプルの書式設定をサポートします。</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/ranges.h&gt;&#10;&#10;fmt::print("{}",&#32;std::tuple&lt;char,&#32;int&gt;{'a',&#32;42});&#10;//&#32;Output:&#32;('a',&#32;42)</code></pre>

<p><code>fmt::join</code>を使うと、任意の区切り文字でタプルの要素を区切れます。</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/ranges.h&gt;&#10;&#10;auto&#32;t&#32;=&#32;std::tuple&lt;int,&#32;char&gt;{1,&#32;'a'};&#10;fmt::print("{}",&#32;fmt::join(t,&#32;",&#32;"));&#10;//&#32;Output:&#32;1,&#32;a</code></pre>

<div class="docblock">
<a id="join">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Range&gt;&#10;</div><div>join_view&lt;decltype(detail::range_begin(r)),&#32;decltype(detail::range_end(r))&gt;&#32;join(Range&amp;&amp;&#32;r,&#32;string_view&#32;sep);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>range</code>の要素を<code>sep</code>で区切って書式設定するビューを返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">auto&#32;v&#32;=&#32;std::vector&lt;int&gt;{1,&#32;2,&#32;3};&#10;fmt::print("{}",&#32;fmt::join(v,&#32;",&#32;"));&#10;//&#32;Output:&#32;1,&#32;2,&#32;3&#10;</code></pre><p></p>
<p><code>fmt::join</code>は、渡された書式指定子を範囲の要素に適用します。</p><pre><code class="language-cpp">fmt::print("{:02}",&#32;fmt::join(v,&#32;",&#32;"));&#10;//&#32;Output:&#32;01,&#32;02,&#32;03&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="join-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;It,&#32;typename&#32;Sentinel&gt;&#10;</div><div>join_view&lt;It,&#32;Sentinel&gt;&#32;join(It&#32;begin,&#32;Sentinel&#32;end,&#32;string_view&#32;sep);</div></code></pre>
</a>
<div class="docblock-desc">
<p>イテレーター範囲<code>[begin, end)</code>の要素を<code>sep</code>で区切って書式設定するビューを返します。</p>
        </div>
</div>

<div class="docblock">
<a id="join-overload-3">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>join_view&lt;const&#32;T*,&#32;const&#32;T*&gt;&#32;join(std::initializer_list&lt;T&gt;&#32;list,&#32;string_view&#32;sep);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>std::initializer_list</code>の要素を<code>sep</code>で区切って書式設定するオブジェクトを返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("{}",&#32;fmt::join({1,&#32;2,&#32;3},&#32;",&#32;"));&#10;//&#32;Output:&#32;"1,&#32;2,&#32;3"&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="chrono-api"></span></p>
<h2 id="date-and-time-formatting">日付と時刻の書式設定</h2>
<p><code>fmt/chrono.h</code>は、次の型のフォーマッターを提供します。</p>
<ul>
<li><a href="https://en.cppreference.com/w/cpp/chrono/duration"><code>std::chrono::duration</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/chrono/time_point"><code>std::chrono::time_point</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/chrono/c/tm"><code>std::tm</code></a></li>
</ul>
<p>書式の構文は、「<a href="/docs/fmt/v12-2-0/ja/01-docs/04-syntax/#chrono-format-spec">Chronoの書式指定</a>」で説明しています。</p>
<p><strong>例</strong>：</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/chrono.h&gt;&#10;&#10;int&#32;main()&#32;{&#10;&#32;&#32;auto&#32;now&#32;=&#32;std::chrono::system_clock::now();&#10;&#10;&#32;&#32;fmt::print("The&#32;date&#32;is&#32;{:%Y-%m-%d}.\n",&#32;now);&#10;&#32;&#32;//&#32;Output:&#32;The&#32;date&#32;is&#32;2020-11-07.&#10;&#32;&#32;//&#32;(with&#32;2020-11-07&#32;replaced&#32;by&#32;the&#32;current&#32;date)&#10;&#10;&#32;&#32;using&#32;namespace&#32;std::literals::chrono_literals;&#10;&#10;&#32;&#32;fmt::print("Default&#32;format:&#32;{}&#32;{}\n",&#32;42s,&#32;100ms);&#10;&#32;&#32;//&#32;Output:&#32;Default&#32;format:&#32;42s&#32;100ms&#10;&#10;&#32;&#32;fmt::print("strftime-like&#32;format:&#32;{:%H:%M:%S}\n",&#32;3h&#32;+&#32;15min&#32;+&#32;30s);&#10;&#32;&#32;//&#32;Output:&#32;strftime-like&#32;format:&#32;03:15:30&#10;}</code></pre>

<div class="docblock">
<a id="gmtime">
<pre><code class="language-cpp decl"><div></div><div>std::tm&#32;gmtime(std::time_t&#32;time);</div></code></pre>
</a>
<div class="docblock-desc">
<p>エポックからの経過時間を表す<code>std::time_t</code>の値を、協定世界時（UTC）で表した暦時刻に変換します。<code>std::gmtime</code>とは異なり、この関数はほとんどのプラットフォームでスレッドセーフです。</p>
        </div>
</div>

<p><span id="std-api"></span></p>
<h2 id="standard-library-types-formatting">標準ライブラリ型の書式設定</h2>
<p><code>fmt/std.h</code>は、次の型のフォーマッターを提供します。</p>
<ul>
<li><a href="https://en.cppreference.com/w/cpp/atomic/atomic"><code>std::atomic</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/atomic/atomic_flag"><code>std::atomic_flag</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/utility/bitset"><code>std::bitset</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/error/error_code"><code>std::error_code</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/error/exception"><code>std::exception</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/filesystem/path"><code>std::filesystem::path</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/utility/variant/monostate"><code>std::monostate</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/utility/optional"><code>std::optional</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/utility/source_location"><code>std::source_location</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/thread/thread/id"><code>std::thread::id</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/utility/variant/variant"><code>std::variant</code></a></li>
</ul>
<div class="docblock">
<a id="ptr-overload-2">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T,&#32;typename&#32;Deleter&gt;&#10;</div><div>const&#32;void*&#32;ptr(const&#32;std::unique_ptr&lt;T,&#32;Deleter&gt;&amp;&#32;p);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="ptr-overload-3">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>const&#32;void*&#32;ptr(const&#32;std::shared_ptr&lt;T&gt;&amp;&#32;p);</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<h3 id="variants">バリアント</h3>
<p><code>std::variant</code>を書式設定できるのは、すべての選択肢の型が書式設定可能な場合だけです。また、<a href="https://en.cppreference.com/w/cpp/feature_test">ライブラリー機能</a><code>__cpp_lib_variant</code>が必要です。</p>
<p><strong>例</strong>：</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/std.h&gt;&#10;&#10;fmt::print("{}",&#32;std::variant&lt;char,&#32;float&gt;('x'));&#10;//&#32;Output:&#32;variant('x')&#10;&#10;fmt::print("{}",&#32;std::variant&lt;std::monostate,&#32;char&gt;());&#10;//&#32;Output:&#32;variant(monostate)</code></pre>

<h2 id="bit-fields-and-packed-structs">ビットフィールドとパックされた構造体</h2>
<p>ビットフィールドや、<code>__attribute__((packed))</code>を適用した構造体のフィールドを書式設定するには、キャストまたは単項<code>+</code>によって、基底型または互換性のある型に変換する必要があります（<a href="https://www.godbolt.org/z/3qKKs6T5Y">godbolt</a>）。</p>
<pre><code class="language-c++">struct&#32;smol&#32;{&#10;&#32;&#32;int&#32;bit&#32;:&#32;1;&#10;};&#10;&#10;auto&#32;s&#32;=&#32;smol();&#10;fmt::print("{}",&#32;+s.bit);&#10;</code></pre>

<p>これは、C++の「完全」転送に関する既知の制限です。</p>
<p><span id="compile-api"></span></p>
<h2 id="compile-time-support">コンパイル時のサポート</h2>
<p><code>fmt/compile.h</code>は、書式文字列のコンパイルと、コンパイル時（<code>constexpr</code>）の書式設定を提供します。これらは<code>FMT_COMPILE</code>マクロ、または<code>fmt::literals</code>名前空間で定義されたユーザー定義リテラル<code>_cf</code>で有効になります。<code>FMT_COMPILE</code>または<code>_cf</code>を付けた書式文字列は、コンパイル時に解析・検査され、効率的な書式設定コードへ変換されます。組み込み型と文字列型の引数に加え、<code>formatter</code>の特殊化で、書式設定コンテキストの型をテンプレートパラメーターとして受け取る<code>format</code>メソッドを持つユーザー定義型もサポートします。例（<a href="https://www.godbolt.org/z/3c13erEoq">実行</a>）：</p>
<pre class="highlight"><code>struct&#32;point&#32;{&#10;&#32;&#32;double&#32;x;&#10;&#32;&#32;double&#32;y;&#10;};&#10;&#10;template&#32;&lt;&gt;&#32;struct&#32;fmt::formatter&lt;point&gt;&#32;{&#10;&#32;&#32;constexpr&#32;auto&#32;parse(format_parse_context&amp;&#32;ctx)&#32;{&#32;return&#32;ctx.begin();&#32;}&#10;&#10;&#32;&#32;template&#32;&lt;typename&#32;FormatContext&gt;&#10;&#32;&#32;auto&#32;format(const&#32;point&amp;&#32;p,&#32;FormatContext&amp;&#32;ctx)&#32;const&#32;{&#10;&#32;&#32;&#32;&#32;return&#32;format_to(ctx.out(),&#32;"({},&#32;{})"_cf,&#32;p.x,&#32;p.y);&#10;&#32;&#32;}&#10;};&#10;&#10;using&#32;namespace&#32;fmt::literals;&#10;std::string&#32;s&#32;=&#32;fmt::format("{}"_cf,&#32;point(4,&#32;2));</code></pre>

<p>書式文字列のコンパイルでは、既定のAPIより多くのバイナリーコードが生成されることがあります。書式設定が性能のボトルネックになっている箇所でのみ、使用が推奨されます。</p>
<p>同じAPIは、<code>constexpr</code>関数や<code>consteval</code>関数などでのコンパイル時の書式設定もサポートします。さらに、必要なサイズと厳密に一致する文字列へコンパイル時に書式設定できる、実験的な<code>FMT_STATIC_FORMAT</code>もあります。コンパイル時の書式設定は、<code>constexpr</code>の<code>format</code>メソッドを持つ、組み込みおよびユーザー定義のフォーマッターで利用できます。例：</p>
<pre class="highlight"><code>template&#32;&lt;&gt;&#32;struct&#32;fmt::formatter&lt;point&gt;&#32;{&#10;&#32;&#32;constexpr&#32;auto&#32;parse(format_parse_context&amp;&#32;ctx)&#32;{&#32;return&#32;ctx.begin();&#32;}&#10;&#10;&#32;&#32;template&#32;&lt;typename&#32;FormatContext&gt;&#10;&#32;&#32;constexpr&#32;auto&#32;format(const&#32;point&amp;&#32;p,&#32;FormatContext&amp;&#32;ctx)&#32;const&#32;{&#10;&#32;&#32;&#32;&#32;return&#32;format_to(ctx.out(),&#32;"({},&#32;{})"_cf,&#32;p.x,&#32;p.y);&#10;&#32;&#32;}&#10;};&#10;&#10;constexpr&#32;auto&#32;s&#32;=&#32;FMT_STATIC_FORMAT("{}",&#32;point(4,&#32;2));&#10;const&#32;char*&#32;cstr&#32;=&#32;s.c_str();&#32;//&#32;Points&#32;the&#32;static&#32;string&#32;"(4,&#32;2)".</code></pre>

<div class="docblock">
<a id="operator-literal-cf">
<pre><code class="language-cpp decl"><div>template&#32;&lt;detail::fixed_string&nbsp;Str&gt;&#10;</div><div>auto&#32;operator""_cf();</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="FMT_COMPILE">
<pre><code class="language-cpp decl"><div></div><div>FMT_COMPILE(s)</div></code></pre>
</a>
<div class="docblock-desc">
<p>文字列リテラル<code>s</code>を、コンパイル時に解析され、効率的な書式設定コードへ変換される書式文字列に変換します。コンパイラーによるC++17の<code>constexpr if</code>のサポートが必要です。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;Converts&#32;42&#32;into&#32;std::string&#32;using&#32;the&#32;most&#32;efficient&#32;method&#32;and&#32;no&#10;//&#32;runtime&#32;format&#32;string&#32;processing.&#10;std::string&#32;s&#32;=&#32;fmt::format(FMT_COMPILE("{}"),&#32;42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="FMT_STATIC_FORMAT">
<pre><code class="language-cpp decl"><div></div><div>FMT_STATIC_FORMAT(fmt_str,&#32;...)</div></code></pre>
</a>
<div class="docblock-desc">
<p>書式文字列<code>fmt_str</code>に従って引数を書式設定し、必要なサイズと厳密に一致する文字列をコンパイル時に生成します。書式文字列と引数は、どちらもコンパイル時の式でなければなりません。</p>
<p>結果の文字列には、<code>c_str()</code>でC文字列として、または<code>str()</code>で<code>fmt::string_view</code>としてアクセスできます。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;Produces&#32;the&#32;static&#32;string&#32;"42"&#32;at&#32;compile&#32;time.&#10;static&#32;constexpr&#32;auto&#32;result&#32;=&#32;FMT_STATIC_FORMAT("{}",&#32;42);&#10;const&#32;char*&#32;s&#32;=&#32;result.c_str();&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="color-api"></span></p>
<h2 id="terminal-colors-and-text-styles">端末の色とテキストスタイル</h2>
<p><code>fmt/color.h</code>は、端末の色とテキストスタイルを指定した出力をサポートします。</p>
<div class="docblock">
<a id="print-overload-3">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;print(text_style&#32;ts,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p>文字列を書式設定し、ANSIエスケープシーケンスでテキストの書式を指定してstdoutに出力します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print(fmt::emphasis::bold&#32;|&#32;fg(fmt::color::red),&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"Elapsed&#32;time:&#32;{0:.2f}&#32;seconds",&#32;1.23);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="fg">
<pre><code class="language-cpp decl"><div></div><div>text_style&#32;fg(detail::color_type&#32;foreground);</div></code></pre>
</a>
<div class="docblock-desc">
<p>前景色（文字色）からテキストスタイルを作成します。</p>
        </div>
</div>

<div class="docblock">
<a id="bg">
<pre><code class="language-cpp decl"><div></div><div>text_style&#32;bg(detail::color_type&#32;background);</div></code></pre>
</a>
<div class="docblock-desc">
<p>背景色からテキストスタイルを作成します。</p>
        </div>
</div>

<div class="docblock">
<a id="styled">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>detail::styled_arg&lt;remove_cvref_t&lt;T&gt;&gt;&#32;styled(const&#32;T&amp;&#32;value,&#32;text_style&#32;ts);</div></code></pre>
</a>
<div class="docblock-desc">
<p>ANSIエスケープシーケンスを使って書式設定される引数を返します。書式設定関数で使用します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("Elapsed&#32;time:&#32;{0:.2f}&#32;seconds",&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::styled(1.23,&#32;fmt::fg(fmt::color::green)&#32;|&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::bg(fmt::color::blue)));&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="os-api"></span></p>
<h2 id="system-apis">システムAPI</h2>
<div class="docblock">
<a id="ostream">
<pre><code class="language-cpp decl"><div></div><div>class&#32;ostream;</div></code></pre>
</a>
<div class="docblock-desc">
<p>単一のスレッドから書き込むための、高速なバッファー付き出力ストリームです。外部で同期せずに複数のスレッドから書き込むと、データ競合が生じることがあります。</p>
    <div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;print(format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力をファイルに書き込みます。</p>
        </div>
</div>
</div>
</div>

<div class="docblock">
<a id="output_file">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>ostream&#32;output_file(cstring_view&#32;path,&#32;T...&#32;params);</div></code></pre>
</a>
<div class="docblock-desc">
<p>書き込み用にファイルを開きます。<code>params</code>で渡せるパラメーターは次のとおりです。</p>
<p></p><ul>
<li><p><code>&lt;integer&gt;</code>：<a href="https://pubs.opengroup.org/onlinepubs/007904875/functions/open.html">open</a>に渡すフラグ（既定は<code><a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L235">file::WRONLY</a> | <a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L237">file::CREATE</a> | <a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L239">file::TRUNC</a></code>）</p>
</li><li><p><code>buffer_size=&lt;integer&gt;</code>：出力バッファーのサイズ</p>
</li></ul>
<p></p>
<p><b>例</b>：</p><pre><code class="language-cpp">auto&#32;out&#32;=&#32;fmt::output_file("guide.txt");&#10;out.print("Don't&#32;{}",&#32;"Panic");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="windows_error">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>std::system_error&#32;windows_error(int&#32;error_code,&#32;string_view&#32;message,&#32;const&#32;T&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p>次の形式の説明を持つ<code>std::system_error</code>オブジェクトを構築します。</p><pre><code class="language-cpp">&lt;message&gt;:&#32;&lt;system-message&gt;&#10;</code></pre><p></p>
<p>ここで、<code>&lt;message&gt;</code>は書式設定されたメッセージ、<code>&lt;system-message&gt;</code>はエラーコードに対応するシステムメッセージです。<code>error_code</code>は、<code>GetLastError</code>が返すようなWindowsのエラーコードです。<code>error_code</code>が-1などの有効でないエラーコードの場合、システムメッセージは"error -1"のようになります。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">//&#32;This&#32;throws&#32;a&#32;system_error&#32;with&#32;the&#32;description&#10;//&#32;&#32;&#32;cannot&#32;open&#32;file&#32;'foo':&#32;The&#32;system&#32;cannot&#32;find&#32;the&#32;file&#32;specified.&#10;//&#32;or&#32;similar&#32;(system&#32;message&#32;may&#32;vary)&#32;if&#32;the&#32;file&#32;doesn't&#32;exist.&#10;const&#32;char&#32;*filename&#32;=&#32;"foo";&#10;LPOFSTRUCT&#32;of&#32;=&#32;LPOFSTRUCT();&#10;HFILE&#32;file&#32;=&#32;OpenFile(filename,&#32;&amp;of,&#32;OF_READ);&#10;if&#32;(file&#32;==&#32;HFILE_ERROR)&#32;{&#10;&#32;&#32;throw&#32;fmt::windows_error(GetLastError(),&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;"cannot&#32;open&#32;file&#32;'{}'",&#32;filename);&#10;}&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="ostream-api"></span></p>
<h2 id="stdostream-support"><code>std::ostream</code>のサポート</h2>
<p><code>fmt/ostream.h</code>は、挿入演算子（<code>operator&lt;&lt;</code>）をオーバーロードしたユーザー定義型の書式設定など、<code>std::ostream</code>のサポートを提供します。<code>std::ostream</code>を通して型を書式設定可能にするには、<code>ostream_formatter</code>から継承した<code>formatter</code>の特殊化を提供するようにします。</p>
<pre class="highlight"><code>#include&#32;&lt;fmt/ostream.h&gt;&#10;&#10;struct&#32;date&#32;{&#10;&#32;&#32;int&#32;year,&#32;month,&#32;day;&#10;&#10;&#32;&#32;friend&#32;std::ostream&amp;&#32;operator&lt;&lt;(std::ostream&amp;&#32;os,&#32;const&#32;date&amp;&#32;d)&#32;{&#10;&#32;&#32;&#32;&#32;return&#32;os&#32;&lt;&lt;&#32;d.year&#32;&lt;&lt;&#32;'-'&#32;&lt;&lt;&#32;d.month&#32;&lt;&lt;&#32;'-'&#32;&lt;&lt;&#32;d.day;&#10;&#32;&#32;}&#10;};&#10;&#10;template&#32;&lt;&gt;&#32;struct&#32;fmt::formatter&lt;date&gt;&#32;:&#32;ostream_formatter&#32;{};&#10;&#10;std::string&#32;s&#32;=&#32;fmt::format("The&#32;date&#32;is&#32;{}",&#32;date{2012,&#32;12,&#32;9});&#10;//&#32;s&#32;==&#32;"The&#32;date&#32;is&#32;2012-12-9"</code></pre>

<div class="docblock">
<a id="streamed">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>detail::streamed_view&lt;T&gt;&#32;streamed(const&#32;T&amp;&#32;value);</div></code></pre>
</a>
<div class="docblock-desc">
<p>ostreamの<code>operator&lt;&lt;</code>を通して<code>value</code>を書式設定するビューを返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print("Current&#32;thread&#32;id:&#32;{}\n",&#10;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;fmt::streamed(std::this_thread::get_id()));&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="print-overload-4">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>void&#32;print(std::ostream&amp;&#32;os,&#32;format_string&lt;T...&gt;&#32;fmt,&#32;T&amp;&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p>書式設定したデータをストリーム<code>os</code>に出力します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::print(cerr,&#32;"Don't&#32;{}!",&#32;"panic");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="args-api"></span></p>
<h2 id="dynamic-argument-lists">動的な引数リスト</h2>
<p>ヘッダー<code>fmt/args.h</code>は、書式設定引数のリストを動的に構築できる、ビルダーのようなAPIである<code>dynamic_format_arg_store</code>を提供します。</p>
<div class="docblock">
<a id="dynamic_format_arg_store">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;Context&gt;&#10;</div><div>class&#32;dynamic_format_arg_store;</div></code></pre>
</a>
<div class="docblock-desc">
<p>保存領域を備えた、動的な書式設定引数のリストです。</p>
<p><code>fmt::vformat</code>などの型消去を使う書式設定関数へ渡すために、<code>fmt::basic_format_args</code>へ暗黙に変換できます。</p>
    <div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;push_back(const&#32;T&amp;&#32;arg);</div></code></pre>
<div class="docblock-desc">
<p>後で書式設定関数へ渡すため、動的ストアに引数を追加します。</p>
<p>カスタム型と文字列型はストアへコピーされ、必要に応じてメモリーが動的に割り当てられます。ただし、文字列ビューはこの対象に含まれません。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt;&#32;store;&#10;store.push_back(42);&#10;store.push_back("abc");&#10;store.push_back(1.5f);&#10;std::string&#32;result&#32;=&#32;fmt::vformat("{}&#32;and&#32;{}&#32;and&#32;{}",&#32;store);&#10;</code>&#32;</pre><p></p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;push_back(std::reference_wrapper&lt;T&gt;&#32;arg);</div></code></pre>
<div class="docblock-desc">
<p>後で書式設定関数へ渡すため、動的ストアに引数への参照を追加します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt;&#32;store;&#10;char&#32;band[]&#32;=&#32;"Rolling&#32;Stones";&#10;store.push_back(std::cref(band));&#10;band[9]&#32;=&#32;'c';&#32;//&#32;Changing&#32;str&#32;affects&#32;the&#32;output.&#10;std::string&#32;result&#32;=&#32;fmt::vformat("{}",&#32;store);&#10;//&#32;result&#32;==&#32;"Rolling&#32;Scones"&#10;</code>&#32;</pre><p></p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;push_back(const&#32;named_arg&lt;T,&#32;char_type&gt;&amp;&#32;arg);</div></code></pre>
<div class="docblock-desc">
<p>後で書式設定関数へ渡すため、動的ストアに名前付き引数を追加します。引数のコピーを避けるために<code>std::reference_wrapper</code>を使えます。名前は常にストアへコピーされます。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;clear();</div></code></pre>
<div class="docblock-desc">
<p>ストアからすべての要素を消去します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>void&#32;reserve(size_t&#32;new_cap,&#32;size_t&#32;new_cap_named);</div></code></pre>
<div class="docblock-desc">
<p><code>new_cap_named</code>個の名前付き引数を含む、少なくとも<code>new_cap</code>個の引数を保存できる領域を予約します。</p>
        </div>
</div>
<div class="docblock">
<pre><code class="language-cpp decl"><div></div><div>size_t&#32;size();</div></code></pre>
<div class="docblock-desc">
<p>ストア内の要素数を返します。</p>
        </div>
</div>
</div>
</div>

<p><span id="printf-api"></span></p>
<h2 id="safe-printf">安全な<code>printf</code></h2>
<p>ヘッダー<code>fmt/printf.h</code>は、<code>printf</code>に似た書式設定機能を提供します。次の関数は、位置指定引数のPOSIX拡張を含む<a href="https://pubs.opengroup.org/onlinepubs/009695399/functions/fprintf.html">printfの書式文字列構文</a>を使います。対応する標準関数とは異なり、<code>fmt</code>の関数は型安全で、引数の型が書式指定に合わない場合は例外を送出します。</p>
<div class="docblock">
<a id="printf">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>int&#32;printf(string_view&#32;fmt,&#32;const&#32;T&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力を<code>stdout</code>に書き込みます。</p>
<p><b>例</b>：</p>
<p>fmt::printf("Elapsed time: %.2f seconds", 1.23); </p>
        </div>
</div>

<div class="docblock">
<a id="fprintf">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>int&#32;fprintf(std::FILE*&#32;f,&#32;string_view&#32;fmt,&#32;const&#32;T&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、出力を<code>f</code>に書き込みます。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">fmt::fprintf(stderr,&#32;"Don't&#32;%s!",&#32;"panic");&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<div class="docblock">
<a id="sprintf">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename...&nbsp;T&gt;&#10;</div><div>std::string&#32;sprintf(string_view&#32;fmt,&#32;const&#32;T&amp;...&#32;args);</div></code></pre>
</a>
<div class="docblock-desc">
<p><code>fmt</code>の指定に従って<code>args</code>を書式設定し、結果を文字列として返します。</p>
<p><b>例</b>：</p><pre><code class="language-cpp">std::string&#32;message&#32;=&#32;fmt::sprintf("The&#32;answer&#32;is&#32;%d",&#32;42);&#10;</code>&#32;</pre><p></p>
        </div>
</div>

<p><span id="xchar-api"></span></p>
<h2 id="wide-strings">ワイド文字列</h2>
<p>任意で利用するヘッダー<code>fmt/xchar.h</code>は、<code>wchar_t</code>や特殊な文字型のサポートを提供します。</p>
<div class="docblock">
<a id="wstring_view">
<pre><code class="language-cpp decl"><div></div><div>using&#32;wstring_view&#32;=&#32;basic_string_view&lt;wchar_t&gt;;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="wformat_context">
<pre><code class="language-cpp decl"><div></div><div>using&#32;wformat_context&#32;=&#32;buffered_context&lt;wchar_t&gt;;</div></code></pre>
</a>
<div class="docblock-desc">
</div>
</div>

<div class="docblock">
<a id="to_wstring">
<pre><code class="language-cpp decl"><div>template&#32;&lt;typename&#32;T&gt;&#10;</div><div>std::wstring&#32;to_wstring(const&#32;T&amp;&#32;value);</div></code></pre>
</a>
<div class="docblock-desc">
<p>型<code>T</code>の既定の書式を使って、<code>value</code>を<code>std::wstring</code>に変換します。</p>
        </div>
</div>

<h2 id="compatibility-with-c20-stdformat">C++20の<code>std::format</code>との互換性</h2>
<p>{fmt}は、次の相違点を除き、<a href="https://en.cppreference.com/w/cpp/utility/format">C++20の書式設定ライブラリー</a>のほぼすべてを実装しています。</p>
<ul>
<li><p>標準ライブラリーの実装との衝突を避けるため、名前は<code>std</code>ではなく<code>fmt</code>名前空間に定義されます。</p></li>
<li><p>幅の計算では、書記素クラスターへの分割を使いません。これは別のブランチでは実装されていますが、まだ統合されていません。</p></li>
<li><p>{fmt}の既定の浮動小数点表現は、JavaやPythonなどの他の言語と同様に、ラウンドトリップを保証できる最小の精度を使います。<code>std::format</code>は現在、<code>std::to_chars</code>に基づいて規定されています。std::to_charsは、指数の冗長な桁と符号を無視して、文字数を最小にしようとするため、必要以上の十進桁を出力することがあります。</p></li>
</ul>
<h2 id="configuration-options">設定オプション</h2>
<p>{fmt}は、機能の有効・無効の切り替えやバイナリーサイズの最適化のために、CMakeオプションとプリプロセッサーマクロによる設定を提供します。たとえば、CMakeの設定時に<code>-DFMT_OS=OFF</code>を指定すると、<code>fmt/os.h</code>で定義されたOS固有のAPIを無効にできます。</p>
<h3 id="cmake-options">CMakeオプション</h3>
<ul>
<li><strong><code>FMT_OS</code></strong>：<code>OFF</code>に設定すると、OS固有のAPI（<code>fmt/os.h</code>）を無効にします。</li>
<li><strong><code>FMT_UNICODE</code></strong>：<code>OFF</code>に設定すると、Windows/MSVCでUnicodeサポートを無効にします。他のプラットフォームでは、Unicodeサポートは常に有効です。</li>
</ul>
<h3 id="macros">マクロ</h3>
<ul>
<li><p><strong><code>FMT_HEADER_ONLY</code></strong>：定義すると、ヘッダーのみのモードを有効にします。CMakeターゲット<code>fmt::fmt-header-only</code>を使う代わりの方法です。既定：未定義。</p></li>
<li><p><strong><code>FMT_USE_EXCEPTIONS</code></strong>：<code>0</code>に設定すると、例外の使用を無効にします。既定：<code>1</code>（<code>-fno-exceptions</code>でコンパイルした場合は<code>0</code>）。</p></li>
<li><p><strong><code>FMT_USE_LOCALE</code></strong>：<code>0</code>に設定すると、ロケールサポートを無効にします。既定：<code>1</code>（<code>FMT_OPTIMIZE_SIZE &gt; 1</code>の場合は<code>0</code>）。</p></li>
<li><p><strong><code>FMT_CUSTOM_ASSERT_FAIL</code></strong>：<code>1</code>に設定すると、利用者が独自の<code>fmt::assert_fail</code>関数を提供できるようになります。この関数はアサーションの失敗時に呼ばれ、例外が無効の場合は実行時エラーでも呼ばれます。既定：<code>0</code>。</p></li>
<li><p><strong><code>FMT_BUILTIN_TYPES</code></strong>：<code>0</code>に設定すると、<code>int</code>以外の算術型と文字列型の組み込み処理を無効にします。これにより、呼び出しごとのオーバーヘッドと引き換えにライブラリーのサイズが小さくなります。既定：<code>1</code>。</p></li>
<li><p><strong><code>FMT_OPTIMIZE_SIZE</code></strong>：バイナリーサイズの最適化を制御します。</p>
<ul>
<li><code>0</code> - 無効（既定）</li>
<li><code>1</code> - ロケールサポートを無効にし、いくつかの最適化を適用します</li>
<li><code>2</code> - 一部のUnicode機能と名前付き引数を無効にし、より積極的な最適化を適用します</li>
</ul></li>
</ul>


<h3 id="binary-size-optimization">バイナリーサイズの最適化</h3>
<p>一部の機能を制限して{fmt}のバイナリーサイズをできる限り小さくするには、次の設定を使えます。</p>
<ul>
<li>CMakeオプション：
<ul>
<li><code>FMT_OS=OFF</code></li>
</ul></li>
<li>マクロ：
<ul>
<li><code>FMT_BUILTIN_TYPES=0</code></li>
<li><code>FMT_OPTIMIZE_SIZE=2</code></li>
</ul></li>
</ul>

