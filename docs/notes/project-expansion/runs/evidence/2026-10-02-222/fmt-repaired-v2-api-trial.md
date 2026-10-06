# API Reference

The {fmt} library API consists of the following components:

- [`fmt/base.h`](#base-api): the base API providing main formatting
  functions for `char`/UTF-8 with C++20 compile-time checks and minimal
  dependencies
- [`fmt/format.h`](#format-api): `fmt::format` and other formatting
  functions as well as locale support
- [`fmt/ranges.h`](#ranges-api): formatting of ranges and tuples
- [`fmt/chrono.h`](#chrono-api): date and time formatting
- [`fmt/std.h`](#std-api): formatters for standard library types
- [`fmt/compile.h`](#compile-api): format string compilation
- [`fmt/color.h`](#color-api): terminal colors and text styles
- [`fmt/os.h`](#os-api): system APIs
- [`fmt/ostream.h`](#ostream-api): `std::ostream` support
- [`fmt/args.h`](#args-api): dynamic argument lists
- [`fmt/printf.h`](#printf-api): safe `printf`
- [`fmt/xchar.h`](#xchar-api): optional `wchar_t` support

All functions and types provided by the library reside in namespace
`fmt` and macros have prefix `FMT_`.

## C++ Module API

With the C++ module API, the headers listed above don't need to be
included. You can use the `import fmt;` statement instead. All other
functionality, listed below, remains the same.

## Base API

`fmt/base.h` defines the base API which provides main formatting
functions for `char`/UTF-8 with C++20 compile-time checks. It has
minimal include dependencies for better compile times. This header is
only beneficial when using {fmt} as a library (the default) and not in
the header-only mode. It also provides `formatter` specializations for
the following types:

- `int`, `long long`
- `unsigned`, `unsigned long long`
- `float`, `double`, `long double`
- `bool`
- `char`
- `const char*`, [`fmt::string_view`](#basic_string_view)
- `const void*`

The following functions use [format string syntax](../syntax/) similar
to that of
[str.format](https://docs.python.org/3/library/stdtypes.html#str.format)
in Python. They take *fmt* and *args* as arguments.

*fmt* is a format string that contains literal text and replacement
fields surrounded by braces `{}`. The fields are replaced with formatted
arguments in the resulting string.
[`fmt::format_string`](#format_string) is a format string which can be
implicitly constructed from a string literal or a `constexpr` string and
is checked at compile time in C++20. To pass a runtime format string
wrap it in [`fmt::runtime`](#runtime).

*args* is an argument list representing objects to be formatted.

I/O errors are reported as
[`std::system_error`](https://en.cppreference.com/w/cpp/error/system_error)
exceptions unless specified otherwise.

<div class="docblock">&#10;<a id="print">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void print(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to <code>stdout</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("The answer is {}.", 42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="print-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void print(FILE* f, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to the file <code>f</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print(stderr, "Don't {}!", "panic");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="println">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void println(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to <code>stdout</code> followed by a newline. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="println-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void println(FILE* f, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to the file <code>f</code> followed by a newline. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="format_to">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;&#10;</div><div>remove_cvref_t<outputit> format_to(OutputIt&amp;&amp; out, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</outputit></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code>, writes the result to the output iterator <code>out</code> and returns the iterator past the end of the output range. <code>format_to</code> does not append a terminating null character.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">auto out = std::vector&lt;char&gt;();&#10;fmt::format_to(std::back_inserter(out), "{}", 42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="format_to_n">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;&#10;</div><div>format_to_n_result<outputit> format_to_n(OutputIt out, size_t n, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</outputit></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code>, writes up to <code>n</code> characters of the result to the output iterator <code>out</code> and returns the total (not truncated) output size and the iterator past the end of the output range. <code>format_to_n</code> does not append a terminating null character. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="format_to_n_result">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt&gt;&#10;</div><div>struct format_to_n_result;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>OutputIt out;</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Iterator past the end of the output range. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>size_t size;</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Total (not truncated) output size. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="formatted_size">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>size_t formatted_size(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns the number of chars in the output of <code>format(fmt, args...)</code>. </p>&#10;        </div>&#10;</div>

<span id="udt"></span>

### Formatting User-Defined Types

The {fmt} library provides formatters for many standard C++ types. See
[`fmt/ranges.h`](#ranges-api) for ranges and tuples including standard
containers such as `std::vector`, [`fmt/chrono.h`](#chrono-api) for date
and time formatting and [`fmt/std.h`](#std-api) for other standard
library types.

There are two ways to make a user-defined type formattable: providing a
`format_as` function or specializing the `formatter` struct template.
Formatting of non-void pointer types is intentionally disallowed and
they cannot be made formattable via either extension API.

Use `format_as` if you want to make your type formattable as some other
type with the same format specifiers. The `format_as` function should
take an object of your type and return an object of a formattable type.
It should be defined in the same namespace as your type.

Example ([run](https://godbolt.org/z/nvME4arz8)):

<pre class="highlight"><code>#include &lt;fmt/format.h&gt;&#10;&#10;namespace kevin_namespacy {&#10;&#10;enum class film {&#10;  house_of_cards, american_beauty, se7en = 7&#10;};&#10;&#10;auto format_as(film f) { return fmt::underlying(f); }&#10;&#10;}&#10;&#10;int main() {&#10;  fmt::print("{}\n", kevin_namespacy::film::se7en); // Output: 7&#10;}</code></pre>

Using a specialization is more complex, but gives you full control over
parsing and formatting. To use this method, specialize the `formatter`
struct template for your type and implement `parse` and `format`
methods.

The recommended way of defining a formatter is by reusing an existing
one via inheritance or composition. This way you can support standard
format specifiers without implementing them yourself. For example:

<pre><code class="language-c++">// color.h:&#10;#include &lt;fmt/base.h&gt;&#10;&#10;enum class color {red, green, blue};&#10;&#10;template &lt;&gt; struct fmt::formatter&lt;color&gt;: formatter&lt;string_view&gt; {&#10;  // parse is inherited from formatter&lt;string_view&gt;.&#10;&#10;  auto format(color c, format_context&amp; ctx) const&#10;    -&gt; format_context::iterator;&#10;};&#10;</code></pre>

<pre><code class="language-c++">// color.cc:&#10;#include "color.h"&#10;#include &lt;fmt/format.h&gt;&#10;&#10;auto fmt::formatter&lt;color&gt;::format(color c, format_context&amp; ctx) const&#10;    -&gt; format_context::iterator {&#10;  string_view name = "unknown";&#10;  switch (c) {&#10;  case color::red:   name = "red"; break;&#10;  case color::green: name = "green"; break;&#10;  case color::blue:  name = "blue"; break;&#10;  }&#10;  return formatter&lt;string_view&gt;::format(name, ctx);&#10;}&#10;</code></pre>

Note that `formatter<string_view>::format` is defined in `fmt/format.h`
so it has to be included in the source file. Since `parse` is inherited
from `formatter<string_view>` it will recognize all string format
specifications, for example

<pre><code class="language-c++">fmt::format("{:&gt;10}", color::blue)&#10;</code></pre>

<p>will return <code>"      blue"</code>.</p>

In general the formatter has the following form:

<pre class="highlight"><code>template &lt;&gt; struct fmt::formatter&lt;T&gt; {&#10;  // Parses format specifiers and stores them in the formatter.&#10;  //&#10;  // [ctx.begin(), ctx.end()) is a, possibly empty, character range that&#10;  // contains a part of the format string starting from the format&#10;  // specifications to be parsed, e.g. in&#10;  //&#10;  //   fmt::format("{:f} continued", ...);&#10;  //&#10;  // the range will contain "f} continued". The formatter should parse&#10;  // specifiers until '}' or the end of the range. In this example the&#10;  // formatter should parse the 'f' specifier and return an iterator&#10;  // pointing to '}'.&#10;  constexpr auto parse(format_parse_context&amp; ctx)&#10;    -&gt; format_parse_context::iterator;&#10;&#10;  // Formats value using the parsed format specification stored in this&#10;  // formatter and writes the output to ctx.out().&#10;  auto format(const T&amp; value, format_context&amp; ctx) const&#10;    -&gt; format_context::iterator;&#10;};</code></pre>

It is recommended to at least support fill, align and width that apply
to the whole object and have the same semantics as in standard
formatters.

You can also write a formatter for a hierarchy of classes:

<pre><code class="language-c++">// demo.h:&#10;#include &lt;type_traits&gt;&#10;#include &lt;fmt/format.h&gt;&#10;&#10;struct A {&#10;  virtual ~A() {}&#10;  virtual std::string name() const { return "A"; }&#10;};&#10;&#10;struct B : A {&#10;  virtual std::string name() const { return "B"; }&#10;};&#10;&#10;template &lt;typename T&gt;&#10;struct fmt::formatter&lt;T, std::enable_if_t&lt;std::is_base_of_v&lt;A, T&gt;, char&gt;&gt; :&#10;    fmt::formatter&lt;std::string&gt; {&#10;  auto format(const A&amp; a, format_context&amp; ctx) const {&#10;    return formatter&lt;std::string&gt;::format(a.name(), ctx);&#10;  }&#10;};&#10;</code></pre>

<pre><code class="language-c++">// demo.cc:&#10;#include "demo.h"&#10;#include &lt;fmt/format.h&gt;&#10;&#10;int main() {&#10;  B b;&#10;  A&amp; a = b;&#10;  fmt::print("{}", a); // Output: B&#10;}&#10;</code></pre>

Providing both a `formatter` specialization and a `format_as` overload
is disallowed.

<div class="docblock">&#10;<a id="basic_format_parse_context">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Char&gt;&#10;</div><div>using basic_format_parse_context = parse_context&lt;Char&gt;;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="context">&#10;<pre><code class="language-cpp decl"><div></div><div>class context;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>constexpr context(iterator out, format_args args, locale_ref loc);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Constructs a <code>context</code> object. References to the arguments are stored in the object so make sure they have appropriate lifetimes. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="format_context">&#10;<pre><code class="language-cpp decl"><div></div><div>using format_context = context;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

### Compile-Time Checks

Compile-time format string checks are enabled by default on compilers
that support C++20 `consteval`. On older compilers you can use the
[FMT_STRING](#legacy-checks) macro defined in `fmt/format.h` instead.

Unused arguments are allowed as in Python's `str.format` and ordinary
functions.

See [Type Erasure](#type-erasure) for an example of how to enable
compile-time checks in your own functions with `fmt::format_string`
while avoiding template bloat.

<div class="docblock">&#10;<a id="fstring">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>struct fstring;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A compile-time format string. Use <code>format_string</code> in the public API to prevent type deduction. </p>&#10;    </div>&#10;</div>

<div class="docblock">&#10;<a id="format_string">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>using format_string = typename fstring&lt;T...&gt;::t;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="runtime">&#10;<pre><code class="language-cpp decl"><div></div><div>runtime_format_string&lt;&gt; runtime(string_view s);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Creates a runtime format string.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// Check format string at runtime instead of compile-time.&#10;fmt::print(fmt::runtime("{:d}"), "I am not a number");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

### Type Erasure

You can create your own formatting function with compile-time checks and
small binary footprint, for example
([run](https://godbolt.org/z/b9Pbasvzc)):

<pre><code class="language-c++">#include &lt;fmt/format.h&gt;&#10;&#10;void vlog(const char* file, int line,&#10;          fmt::string_view fmt, fmt::format_args args) {&#10;  fmt::print("{}: {}: {}", file, line, fmt::vformat(fmt, args));&#10;}&#10;&#10;template &lt;typename... T&gt;&#10;void log(const char* file, int line,&#10;         fmt::format_string&lt;T...&gt; fmt, T&amp;&amp;... args) {&#10;  vlog(file, line, fmt, fmt::make_format_args(args...));&#10;}&#10;&#10;#define MY_LOG(fmt, ...) log(__FILE__, __LINE__, fmt, __VA_ARGS__)&#10;&#10;MY_LOG("invalid squishiness: {}", 42);&#10;</code></pre>

Note that `vlog` is not parameterized on argument types which improves
compile times and reduces binary code size compared to a fully
parameterized version.

<div class="docblock">&#10;<a id="make_format_args">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Context, typename...&nbsp;T, int&nbsp;NUM_ARGS, int&nbsp;NUM_NAMED_ARGS, ullong&nbsp;DESC&gt;&#10;</div><div>detail::format_arg_store<context, num_args,="" num_named_args,="" desc=""> make_format_args(T&amp;... args);</context,></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Constructs an object that stores references to arguments and can be implicitly converted to <code>format_args</code>. <code>Context</code> can be omitted in which case it defaults to <code>context</code>. See <code>arg</code> for lifetime considerations. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="basic_format_args">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;&#10;</div><div>class basic_format_args;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A view of a collection of formatting arguments. To avoid lifetime issues it should only be used as a parameter type in type-erased functions such as <code>vformat</code>: </p><pre><code class="language-cpp">void vlog(fmt::string_view fmt, fmt::format_args args);  // OK&#10;fmt::format_args args = fmt::make_format_args();  // Dangling reference&#10;</code> </pre><p></p>&#10;    <div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>constexpr basic_format_args(const store&lt;NUM_ARGS, NUM_NAMED_ARGS, DESC&gt;&amp; s);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Constructs a <code>basic_format_args</code> object from <code>format_arg_store</code>. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>constexpr basic_format_args(const format_arg* args, int count, bool has_named);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Constructs a <code>basic_format_args</code> object from a dynamic list of arguments. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>format_arg get(int id);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Returns the argument with the specified id. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="format_args">&#10;<pre><code class="language-cpp decl"><div></div><div>using format_args = basic_format_args&lt;context&gt;;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="basic_format_arg">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;&#10;</div><div>class basic_format_arg;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>decltype(vis(0)) visit(Visitor&amp;&amp; vis);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Visits an argument dispatching to the appropriate visit method based on the argument type. For example, if the argument type is <code>double</code> then <code>vis(value)</code> will be called with the value of type <code>double</code>. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

### Named Arguments

<div class="docblock">&#10;<a id="arg">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>named_arg<t> arg(const char* name, const T&amp; arg);</t></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns a named argument to be used in a formatting function. It should only be used in a call to a formatting function.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("The answer is {answer}.", fmt::arg("answer", 42));&#10;</code></pre><p></p>&#10;<p>Named arguments passed with <code>fmt::arg</code> are not supported in compile-time checks, but <code>"answer"_a=42</code> are compile-time checked in sufficiently new compilers. See <code>operator""_a()</code>. </p>&#10;        </div>&#10;</div>

### Compatibility

<div class="docblock">&#10;<a id="basic_string_view">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Char&gt;&#10;</div><div>class basic_string_view;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>An implementation of <code>std::basic_string_view</code> for pre-C++17 providing a subset of the API. <code>fmt::basic_string_view</code> is used in the public API even if <code>std::basic_string_view</code> is available to prevent issues when a library is compiled with a different <code>-std</code> option than the client code (which is not recommended). </p>&#10;    </div>&#10;</div>

<div class="docblock">&#10;<a id="string_view">&#10;<pre><code class="language-cpp decl"><div></div><div>using string_view = basic_string_view&lt;char&gt;;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

## Format API

`fmt/format.h` defines the full format API providing additional
formatting functions and locale support.

<span id="format"></span>

<div class="docblock">&#10;<a id="format-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>std::string format(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and returns the result as a string.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">#include &lt;fmt/format.h&gt;&#10;std::string message = fmt::format("The answer is {}.", 42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="vformat">&#10;<pre><code class="language-cpp decl"><div></div><div>std::string vformat(string_view fmt, format_args args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="operator-literal-a">&#10;<pre><code class="language-cpp decl"><div>template &lt;detail::fixed_string&nbsp;S&gt;&#10;</div><div>auto operator""_a();</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>User-defined literal equivalent of <code>fmt::arg</code>, but with compile-time checks.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">using namespace fmt::literals;&#10;fmt::print("The answer is {answer}.", "answer"_a=42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

### Utilities

<div class="docblock">&#10;<a id="ptr">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>const void* ptr(T p);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Converts <code>p</code> to <code>const void*</code> for pointer formatting.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">auto s = fmt::format("{}", fmt::ptr(p));&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="underlying">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Enum&gt;&#10;</div><div>underlying_t<enum> underlying(Enum e);</enum></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Converts <code>e</code> to the underlying type.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">enum class color { red, green, blue };&#10;auto s = fmt::format("{}", fmt::underlying(color::red));  // s == "0"&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="to_string">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>std::string to_string(const T&amp; value);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="group_digits">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>group_digits_view<t> group_digits(T value);</t></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns a view that formats an integer value using ',' as a locale-independent thousands separator.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("{}", fmt::group_digits(12345));&#10;// Output: "12,345"&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="detail::buffer">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>class detail::buffer;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A contiguous memory buffer with an optional growing ability. It is an internal class and shouldn't be used directly, only via <code>memory_buffer</code>. </p>&#10;    <div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>size_t size();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Returns the size of this buffer. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>size_t capacity();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Returns the capacity of this buffer. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>T * data();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Returns a pointer to the buffer data (not null-terminated). </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void clear();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Clears this buffer. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void append(const U* begin, const U* end);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Appends data to the end of the buffer. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="basic_memory_buffer">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T, size_t&nbsp;SIZE, typename Allocator&gt;&#10;</div><div>class basic_memory_buffer;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A dynamically growing memory buffer for trivially copyable/constructible types with the first <code>SIZE</code> elements stored in the object itself. Most commonly used via the <code>memory_buffer</code> alias for <code>char</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">auto out = fmt::memory_buffer();&#10;fmt::format_to(std::back_inserter(out), "The answer is {}.", 42);&#10;</code></pre><p></p>&#10;<p>This will append "The answer is 42." to <code>out</code>. The buffer content can be converted to <code>std::string</code> with <code>to_string(out)</code>. </p>&#10;    <div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer(basic_memory_buffer&amp;&amp; other);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Constructs a <code>basic_memory_buffer</code> object moving the content of the other object to it. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer &amp; operator=(basic_memory_buffer&amp;&amp; other);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Moves the content of the other <code>basic_memory_buffer</code> object to this one. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void resize(size_t count);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Resizes the buffer to contain <code>count</code> elements. If T is a POD type new elements may not be initialized. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void reserve(size_t new_capacity);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Increases the buffer capacity to <code>new_capacity</code>. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

### System Errors

{fmt} does not use `errno` to communicate errors to the user, but it may
call system functions which set `errno`. Users should not make any
assumptions about the value of `errno` being preserved by library
functions.

<div class="docblock">&#10;<a id="system_error">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>std::system_error system_error(int error_code, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Constructs <code>std::system_error</code> with a message formatted with <code>fmt::format(fmt, args...)</code>. <code>error_code</code> is a system error code as given by <code>errno</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// This throws std::system_error with the description&#10;//   cannot open file 'madeup': No such file or directory&#10;// or similar (system message may vary).&#10;const char* filename = "madeup";&#10;FILE* file = fopen(filename, "r");&#10;if (!file)&#10;  throw fmt::system_error(errno, "cannot open file '{}'", filename);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="format_system_error">&#10;<pre><code class="language-cpp decl"><div></div><div>void format_system_error(detail::buffer&lt;char&gt;&amp; out, int error_code, const char* message);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats an error message for an error returned by an operating system or a language runtime, for example a file opening error, and writes it to <code>out</code>. The format is the same as the one used by <code>std::system_error(ec, message)</code> where <code>ec</code> is <code>std::error_code(error_code, std::generic_category())</code>. It is implementation-defined but normally looks like: </p><pre><code class="language-cpp">&lt;message&gt;: &lt;system-message&gt;&#10;</code></pre><p></p>&#10;<p>where <code>&lt;message&gt;</code> is the passed message and <code>&lt;system-message&gt;</code> is the system message corresponding to the error code. <code>error_code</code> is a system error code as given by <code>errno</code>. </p>&#10;        </div>&#10;</div>

### Custom Allocators

The {fmt} library supports custom dynamic memory allocators. A custom
allocator class can be specified as a template argument to
[`fmt::basic_memory_buffer`](#basic_memory_buffer):

<pre class="highlight"><code>using custom_memory_buffer = &#10;  fmt::basic_memory_buffer&lt;char, fmt::inline_buffer_size, custom_allocator&gt;;</code></pre>

It is also possible to write a formatting function that uses a custom
allocator:

<pre class="highlight"><code>using custom_string =&#10;  std::basic_string&lt;char, std::char_traits&lt;char&gt;, custom_allocator&gt;;&#10;&#10;auto vformat(custom_allocator alloc, fmt::string_view fmt,&#10;             fmt::format_args args) -&gt; custom_string {&#10;  auto buf = custom_memory_buffer(alloc);&#10;  fmt::vformat_to(std::back_inserter(buf), fmt, args);&#10;  return custom_string(buf.data(), buf.size(), alloc);&#10;}&#10;&#10;template &lt;typename ...Args&gt;&#10;auto format(custom_allocator alloc, fmt::string_view fmt,&#10;            const Args&amp; ... args) -&gt; custom_string {&#10;  return vformat(alloc, fmt, fmt::make_format_args(args...));&#10;}</code></pre>

The allocator will be used for the output container only. Formatting
functions normally don't do any allocations for built-in and string
types except for non-default floating-point formatting that occasionally
falls back on `sprintf`.

### Locale

All formatting is locale-independent by default. Use the `'L'` format
specifier to insert the appropriate number separator characters from the
locale:

<pre class="highlight"><code>#include &lt;fmt/format.h&gt;&#10;#include &lt;locale&gt;&#10;&#10;std::locale::global(std::locale("en_US.UTF-8"));&#10;auto s = fmt::format("{:L}", 1000000);  // s == "1,000,000"</code></pre>

`fmt/format.h` provides the following overloads of formatting functions
that take `std::locale` as a parameter. The locale type is a template
parameter to avoid the expensive `<locale>` include.

<div class="docblock">&#10;<a id="format-overload-3">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>std::string format(locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="format_to-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;&#10;</div><div>OutputIt format_to(OutputIt out, locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="formatted_size-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>size_t formatted_size(locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<span id="legacy-checks"></span>

### Legacy Compile-Time Checks

`FMT_STRING` enables compile-time checks on older compilers. It requires
C++14 or later and is a no-op in C++11.

<div class="docblock">&#10;<a id="FMT_STRING">&#10;<pre><code class="language-cpp decl"><div></div><div>FMT_STRING(s)</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Constructs a legacy compile-time format string from a string literal <code>s</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// A compile-time error because 'd' is an invalid specifier for strings.&#10;std::string s = fmt::format(FMT_STRING("{:d}"), "foo");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

To force the use of legacy compile-time checks, define the preprocessor
variable `FMT_ENFORCE_COMPILE_STRING`. When set, functions accepting
`FMT_STRING` will fail to compile with regular strings.

<span id="ranges-api"></span>

## Range and Tuple Formatting

`fmt/ranges.h` provides formatting support for ranges and tuples:

<pre class="highlight"><code>#include &lt;fmt/ranges.h&gt;&#10;&#10;fmt::print("{}", std::tuple&lt;char, int&gt;{'a', 42});&#10;// Output: ('a', 42)</code></pre>

Using `fmt::join`, you can separate tuple elements with a custom
separator:

<pre class="highlight"><code>#include &lt;fmt/ranges.h&gt;&#10;&#10;auto t = std::tuple&lt;int, char&gt;{1, 'a'};&#10;fmt::print("{}", fmt::join(t, ", "));&#10;// Output: 1, a</code></pre>

<div class="docblock">&#10;<a id="join">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Range&gt;&#10;</div><div>join_view<decltype(detail::range_begin(r)), decltype(detail::range_end(r))=""> join(Range&amp;&amp; r, string_view sep);</decltype(detail::range_begin(r)),></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns a view that formats <code>range</code> with elements separated by <code>sep</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">auto v = std::vector&lt;int&gt;{1, 2, 3};&#10;fmt::print("{}", fmt::join(v, ", "));&#10;// Output: 1, 2, 3&#10;</code></pre><p></p>&#10;<p><code>fmt::join</code> applies passed format specifiers to the range elements: </p><pre><code class="language-cpp">fmt::print("{:02}", fmt::join(v, ", "));&#10;// Output: 01, 02, 03&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="join-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename It, typename Sentinel&gt;&#10;</div><div>join_view<it, sentinel=""> join(It begin, Sentinel end, string_view sep);</it,></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns a view that formats the iterator range <code>[begin, end)</code> with elements separated by <code>sep</code>. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="join-overload-3">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>join_view<const t*,="" const="" t*=""> join(std::initializer_list&lt;T&gt; list, string_view sep);</const></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns an object that formats <code>std::initializer_list</code> with elements separated by <code>sep</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("{}", fmt::join({1, 2, 3}, ", "));&#10;// Output: "1, 2, 3"&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="chrono-api"></span>

## Date and Time Formatting

`fmt/chrono.h` provides formatters for

- [`std::chrono::duration`](https://en.cppreference.com/w/cpp/chrono/duration)
- [`std::chrono::time_point`](https://en.cppreference.com/w/cpp/chrono/time_point)
- [`std::tm`](https://en.cppreference.com/w/cpp/chrono/c/tm)

The format syntax is described in [Chrono Format
Specifications](../syntax/#chrono-format-spec).

**Example**:

<pre class="highlight"><code>#include &lt;fmt/chrono.h&gt;&#10;&#10;int main() {&#10;  auto now = std::chrono::system_clock::now();&#10;&#10;  fmt::print("The date is {:%Y-%m-%d}.\n", now);&#10;  // Output: The date is 2020-11-07.&#10;  // (with 2020-11-07 replaced by the current date)&#10;&#10;  using namespace std::literals::chrono_literals;&#10;&#10;  fmt::print("Default format: {} {}\n", 42s, 100ms);&#10;  // Output: Default format: 42s 100ms&#10;&#10;  fmt::print("strftime-like format: {:%H:%M:%S}\n", 3h + 15min + 30s);&#10;  // Output: strftime-like format: 03:15:30&#10;}</code></pre>

<div class="docblock">&#10;<a id="gmtime">&#10;<pre><code class="language-cpp decl"><div></div><div>std::tm gmtime(std::time_t time);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Converts given time since epoch as <code>std::time_t</code> value into calendar time, expressed in Coordinated Universal Time (UTC). Unlike <code>std::gmtime</code>, this function is thread-safe on most platforms. </p>&#10;        </div>&#10;</div>

<span id="std-api"></span>

## Standard Library Types Formatting

`fmt/std.h` provides formatters for:

- [`std::atomic`](https://en.cppreference.com/w/cpp/atomic/atomic)
- [`std::atomic_flag`](https://en.cppreference.com/w/cpp/atomic/atomic_flag)
- [`std::bitset`](https://en.cppreference.com/w/cpp/utility/bitset)
- [`std::error_code`](https://en.cppreference.com/w/cpp/error/error_code)
- [`std::exception`](https://en.cppreference.com/w/cpp/error/exception)
- [`std::filesystem::path`](https://en.cppreference.com/w/cpp/filesystem/path)
- [`std::monostate`](https://en.cppreference.com/w/cpp/utility/variant/monostate)
- [`std::optional`](https://en.cppreference.com/w/cpp/utility/optional)
- [`std::source_location`](https://en.cppreference.com/w/cpp/utility/source_location)
- [`std::thread::id`](https://en.cppreference.com/w/cpp/thread/thread/id)
- [`std::variant`](https://en.cppreference.com/w/cpp/utility/variant/variant)

<div class="docblock">&#10;<a id="ptr-overload-2">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T, typename Deleter&gt;&#10;</div><div>const void* ptr(const std::unique_ptr&lt;T, Deleter&gt;&amp; p);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="ptr-overload-3">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>const void* ptr(const std::shared_ptr&lt;T&gt;&amp; p);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

### Variants

A `std::variant` can be formatted only if every alternative is
formattable, and requires the `__cpp_lib_variant` [library
feature](https://en.cppreference.com/w/cpp/feature_test).

**Example**:

<pre class="highlight"><code>#include &lt;fmt/std.h&gt;&#10;&#10;fmt::print("{}", std::variant&lt;char, float&gt;('x'));&#10;// Output: variant('x')&#10;&#10;fmt::print("{}", std::variant&lt;std::monostate, char&gt;());&#10;// Output: variant(monostate)</code></pre>

## Bit-Fields and Packed Structs

To format a bit-field or a field of a struct with
`__attribute__((packed))` applied to it, you need to convert it to the
underlying or compatible type via a cast or a unary `+`
([godbolt](https://www.godbolt.org/z/3qKKs6T5Y)):

<pre><code class="language-c++">struct smol {&#10;  int bit : 1;&#10;};&#10;&#10;auto s = smol();&#10;fmt::print("{}", +s.bit);&#10;</code></pre>

This is a known limitation of "perfect" forwarding in C++.

<span id="compile-api"></span>

## Compile-Time Support

`fmt/compile.h` provides format string compilation and compile-time
(`constexpr`) formatting enabled via the `FMT_COMPILE` macro or the
`_cf` user-defined literal defined in namespace `fmt::literals`. Format
strings marked with `FMT_COMPILE` or `_cf` are parsed, checked and
converted into efficient formatting code at compile-time. This supports
arguments of built-in and string types as well as user-defined types
with `format` methods taking the format context type as a template
parameter in their `formatter` specializations. For example
([run](https://www.godbolt.org/z/3c13erEoq)):

<pre class="highlight"><code>struct point {&#10;  double x;&#10;  double y;&#10;};&#10;&#10;template &lt;&gt; struct fmt::formatter&lt;point&gt; {&#10;  constexpr auto parse(format_parse_context&amp; ctx) { return ctx.begin(); }&#10;&#10;  template &lt;typename FormatContext&gt;&#10;  auto format(const point&amp; p, FormatContext&amp; ctx) const {&#10;    return format_to(ctx.out(), "({}, {})"_cf, p.x, p.y);&#10;  }&#10;};&#10;&#10;using namespace fmt::literals;&#10;std::string s = fmt::format("{}"_cf, point(4, 2));</code></pre>

Format string compilation can generate more binary code compared to the
default API and is only recommended in places where formatting is a
performance bottleneck.

The same APIs support formatting at compile time e.g. in `constexpr` and
`consteval` functions. Additionally there is an experimental
`FMT_STATIC_FORMAT` that allows formatting into a string of the exact
required size at compile time. Compile-time formatting works with
built-in and user-defined formatters that have `constexpr` `format`
methods. Example:

<pre class="highlight"><code>template &lt;&gt; struct fmt::formatter&lt;point&gt; {&#10;  constexpr auto parse(format_parse_context&amp; ctx) { return ctx.begin(); }&#10;&#10;  template &lt;typename FormatContext&gt;&#10;  constexpr auto format(const point&amp; p, FormatContext&amp; ctx) const {&#10;    return format_to(ctx.out(), "({}, {})"_cf, p.x, p.y);&#10;  }&#10;};&#10;&#10;constexpr auto s = FMT_STATIC_FORMAT("{}", point(4, 2));&#10;const char* cstr = s.c_str(); // Points the static string "(4, 2)".</code></pre>

<div class="docblock">&#10;<a id="operator-literal-cf">&#10;<pre><code class="language-cpp decl"><div>template &lt;detail::fixed_string&nbsp;Str&gt;&#10;</div><div>auto operator""_cf();</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="FMT_COMPILE">&#10;<pre><code class="language-cpp decl"><div></div><div>FMT_COMPILE(s)</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Converts a string literal <code>s</code> into a format string that will be parsed at compile time and converted into efficient formatting code. Requires C++17 <code>constexpr if</code> compiler support.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// Converts 42 into std::string using the most efficient method and no&#10;// runtime format string processing.&#10;std::string s = fmt::format(FMT_COMPILE("{}"), 42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="FMT_STATIC_FORMAT">&#10;<pre><code class="language-cpp decl"><div></div><div>FMT_STATIC_FORMAT(fmt_str, ...)</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats arguments according to the format string <code>fmt_str</code> and produces a string of the exact required size at compile time. Both the format string and the arguments must be compile-time expressions.</p>&#10;<p>The resulting string can be accessed as a C string via <code>c_str()</code> or as a <code>fmt::string_view</code> via <code>str()</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// Produces the static string "42" at compile time.&#10;static constexpr auto result = FMT_STATIC_FORMAT("{}", 42);&#10;const char* s = result.c_str();&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="color-api"></span>

## Terminal Colors and Text Styles

`fmt/color.h` provides support for terminal color and text style output.

<div class="docblock">&#10;<a id="print-overload-3">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void print(text_style ts, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats a string and prints it to stdout using ANSI escape sequences to specify text formatting.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print(fmt::emphasis::bold | fg(fmt::color::red),&#10;           "Elapsed time: {0:.2f} seconds", 1.23);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="fg">&#10;<pre><code class="language-cpp decl"><div></div><div>text_style fg(detail::color_type foreground);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Creates a text style from the foreground (text) color. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="bg">&#10;<pre><code class="language-cpp decl"><div></div><div>text_style bg(detail::color_type background);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Creates a text style from the background color. </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="styled">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>detail::styled_arg<remove_cvref_t<t>&gt; styled(const T&amp; value, text_style ts);</remove_cvref_t<t></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns an argument that will be formatted using ANSI escape sequences, to be used in a formatting function.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("Elapsed time: {0:.2f} seconds",&#10;           fmt::styled(1.23, fmt::fg(fmt::color::green) |&#10;                             fmt::bg(fmt::color::blue)));&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="os-api"></span>

## System APIs

<div class="docblock">&#10;<a id="ostream">&#10;<pre><code class="language-cpp decl"><div></div><div>class ostream;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A fast buffered output stream for writing from a single thread. Writing from multiple threads without external synchronization may result in a data race. </p>&#10;    <div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void print(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to the file. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="output_file">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>ostream output_file(cstring_view path, T... params);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Opens a file for writing. Supported parameters passed in <code>params</code>:</p>&#10;<p></p><ul>&#10;<li><p><code>&lt;integer&gt;</code>: Flags passed to <a href="https://pubs.opengroup.org/onlinepubs/007904875/functions/open.html">open</a> (<code><a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L235">file::WRONLY</a> | <a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L237">file::CREATE</a> | <a href="https://github.com/fmtlib/fmt/blob/1be298e1bd68957e4cd352e1f676f00e07dcfb57/include/fmt/os.h#L239">file::TRUNC</a></code> by default)</p>&#10;</li><li><p><code>buffer_size=&lt;integer&gt;</code>: Output buffer size</p>&#10;</li></ul>&#10;<p></p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">auto out = fmt::output_file("guide.txt");&#10;out.print("Don't {}", "Panic");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="windows_error">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>std::system_error windows_error(int error_code, string_view message, const T&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Constructs a <code>std::system_error</code> object with the description of the form </p><pre><code class="language-cpp">&lt;message&gt;: &lt;system-message&gt;&#10;</code></pre><p></p>&#10;<p>where <code>&lt;message&gt;</code> is the formatted message and <code>&lt;system-message&gt;</code> is the system message corresponding to the error code. <code>error_code</code> is a Windows error code as given by <code>GetLastError</code>. If <code>error_code</code> is not a valid error code such as -1, the system message will look like "error -1".</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">// This throws a system_error with the description&#10;//   cannot open file 'foo': The system cannot find the file specified.&#10;// or similar (system message may vary) if the file doesn't exist.&#10;const char *filename = "foo";&#10;LPOFSTRUCT of = LPOFSTRUCT();&#10;HFILE file = OpenFile(filename, &amp;of, OF_READ);&#10;if (file == HFILE_ERROR) {&#10;  throw fmt::windows_error(GetLastError(),&#10;                           "cannot open file '{}'", filename);&#10;}&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="ostream-api"></span>

## `std::ostream` Support

`fmt/ostream.h` provides `std::ostream` support including formatting of
user-defined types that have an overloaded insertion operator
(`operator<<`). In order to make a type formattable via `std::ostream`
you should provide a `formatter` specialization inherited from
`ostream_formatter`:

<pre class="highlight"><code>#include &lt;fmt/ostream.h&gt;&#10;&#10;struct date {&#10;  int year, month, day;&#10;&#10;  friend std::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const date&amp; d) {&#10;    return os &lt;&lt; d.year &lt;&lt; '-' &lt;&lt; d.month &lt;&lt; '-' &lt;&lt; d.day;&#10;  }&#10;};&#10;&#10;template &lt;&gt; struct fmt::formatter&lt;date&gt; : ostream_formatter {};&#10;&#10;std::string s = fmt::format("The date is {}", date{2012, 12, 9});&#10;// s == "The date is 2012-12-9"</code></pre>

<div class="docblock">&#10;<a id="streamed">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>detail::streamed_view<t> streamed(const T&amp; value);</t></div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Returns a view that formats <code>value</code> via an ostream <code>operator&lt;&lt;</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print("Current thread id: {}\n",&#10;           fmt::streamed(std::this_thread::get_id()));&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="print-overload-4">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>void print(std::ostream&amp; os, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Prints formatted data to the stream <code>os</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::print(cerr, "Don't {}!", "panic");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="args-api"></span>

## Dynamic Argument Lists

The header `fmt/args.h` provides `dynamic_format_arg_store`, a
builder-like API that can be used to construct format argument lists
dynamically.

<div class="docblock">&#10;<a id="dynamic_format_arg_store">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;&#10;</div><div>class dynamic_format_arg_store;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>A dynamic list of formatting arguments with storage.</p>&#10;<p>It can be implicitly converted into <code>fmt::basic_format_args</code> for passing into type-erased formatting functions such as <code>fmt::vformat</code>. </p>&#10;    <div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void push_back(const T&amp; arg);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Adds an argument into the dynamic store for later passing to a formatting function.</p>&#10;<p>Note that custom types and string types (but not string views) are copied into the store dynamically allocating memory if necessary.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt; store;&#10;store.push_back(42);&#10;store.push_back("abc");&#10;store.push_back(1.5f);&#10;std::string result = fmt::vformat("{} and {} and {}", store);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void push_back(std::reference_wrapper&lt;T&gt; arg);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Adds a reference to the argument into the dynamic store for later passing to a formatting function.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt; store;&#10;char band[] = "Rolling Stones";&#10;store.push_back(std::cref(band));&#10;band[9] = 'c'; // Changing str affects the output.&#10;std::string result = fmt::vformat("{}", store);&#10;// result == "Rolling Scones"&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void push_back(const named_arg&lt;T, char_type&gt;&amp; arg);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Adds named argument into the dynamic store for later passing to a formatting function. <code>std::reference_wrapper</code> is supported to avoid copying of the argument. The name is always copied into the store. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void clear();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Erase all elements from the store. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>void reserve(size_t new_cap, size_t new_cap_named);</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Reserves space to store at least <code>new_cap</code> arguments including <code>new_cap_named</code> named arguments. </p>&#10;        </div>&#10;</div>&#10;<div class="docblock">&#10;<pre><code class="language-cpp decl"><div></div><div>size_t size();</div></code></pre>&#10;<div class="docblock-desc">&#10;<p>Returns the number of elements in the store. </p>&#10;        </div>&#10;</div>&#10;</div>&#10;</div>

<span id="printf-api"></span>

## Safe `printf`

The header `fmt/printf.h` provides `printf`-like formatting
functionality. The following functions use [printf format string
syntax](https://pubs.opengroup.org/onlinepubs/009695399/functions/fprintf.html)
with the POSIX extension for positional arguments. Unlike their standard
counterparts, the `fmt` functions are type-safe and throw an exception
if an argument type doesn't match its format specification.

<div class="docblock">&#10;<a id="printf">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>int printf(string_view fmt, const T&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to <code>stdout</code>.</p>&#10;<p><b>Example</b>:</p>&#10;<p>fmt::printf("Elapsed time: %.2f seconds", 1.23); </p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="fprintf">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>int fprintf(std::FILE* f, string_view fmt, const T&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and writes the output to <code>f</code>.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">fmt::fprintf(stderr, "Don't %s!", "panic");&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<div class="docblock">&#10;<a id="sprintf">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;&#10;</div><div>std::string sprintf(string_view fmt, const T&amp;... args);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Formats <code>args</code> according to specifications in <code>fmt</code> and returns the result as string.</p>&#10;<p><b>Example</b>: </p><pre><code class="language-cpp">std::string message = fmt::sprintf("The answer is %d", 42);&#10;</code> </pre><p></p>&#10;        </div>&#10;</div>

<span id="xchar-api"></span>

## Wide Strings

The optional header `fmt/xchar.h` provides support for `wchar_t` and
exotic character types.

<div class="docblock">&#10;<a id="wstring_view">&#10;<pre><code class="language-cpp decl"><div></div><div>using wstring_view = basic_string_view&lt;wchar_t&gt;;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="wformat_context">&#10;<pre><code class="language-cpp decl"><div></div><div>using wformat_context = buffered_context&lt;wchar_t&gt;;</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;</div>&#10;</div>

<div class="docblock">&#10;<a id="to_wstring">&#10;<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;&#10;</div><div>std::wstring to_wstring(const T&amp; value);</div></code></pre>&#10;</a>&#10;<div class="docblock-desc">&#10;<p>Converts <code>value</code> to <code>std::wstring</code> using the default format for type <code>T</code>. </p>&#10;        </div>&#10;</div>

## Compatibility with C++20 `std::format`

{fmt} implements nearly all of the [C++20 formatting
library](https://en.cppreference.com/w/cpp/utility/format) with the
following differences:

- Names are defined in the `fmt` namespace instead of `std` to avoid
  collisions with standard library implementations.

- Width calculation doesn't use grapheme clusterization. The latter has
  been implemented in a separate branch but hasn't been integrated yet.

- The default floating-point representation in {fmt} uses the smallest
  precision that provides round-trip guarantees similarly to other
  languages like Java and Python. `std::format` is currently specified
  in terms of `std::to_chars` which tries to generate the smallest
  number of characters (ignoring redundant digits and sign in exponent)
  and may produce more decimal digits than necessary.

## Configuration Options

{fmt} provides configuration via CMake options and preprocessor macros
to enable or disable features and to optimize for binary size. For
example, you can disable OS-specific APIs defined in `fmt/os.h` with
`-DFMT_OS=OFF` when configuring CMake.

### CMake Options

- **`FMT_OS`**: When set to `OFF`, disables OS-specific APIs
  (`fmt/os.h`).
- **`FMT_UNICODE`**: When set to `OFF`, disables Unicode support on
  Windows/MSVC. Unicode support is always enabled on other platforms.

### Macros

- **`FMT_HEADER_ONLY`**: Enables the header-only mode when defined. It
  is an alternative to using the `fmt::fmt-header-only` CMake target.
  Default: not defined.

- **`FMT_USE_EXCEPTIONS`**: Disables the use of exceptions when set to
  `0`. Default: `1` (`0` if compiled with `-fno-exceptions`).

- **`FMT_USE_LOCALE`**: When set to `0`, disables locale support.
  Default: `1` (`0` when `FMT_OPTIMIZE_SIZE > 1`).

- **`FMT_CUSTOM_ASSERT_FAIL`**: When set to `1`, allows users to provide
  a custom `fmt::assert_fail` function which is called on assertion
  failures and, if exceptions are disabled, on runtime errors. Default:
  `0`.

- **`FMT_BUILTIN_TYPES`**: When set to `0`, disables built-in handling
  of arithmetic and string types other than `int`. This reduces library
  size at the cost of per-call overhead. Default: `1`.

- **`FMT_OPTIMIZE_SIZE`**: Controls binary size optimizations:

  - `0` - off (default)
  - `1` - disables locale support and applies some optimizations
  - `2` - disables some Unicode features, named arguments and applies
    more aggressive optimizations

### Binary Size Optimization

To minimize the binary footprint of {fmt} as much as possible at the
cost of some features, you can use the following configuration:

- CMake options:
  - `FMT_OS=OFF`
- Macros:
  - `FMT_BUILTIN_TYPES=0`
  - `FMT_OPTIMIZE_SIZE=2`
