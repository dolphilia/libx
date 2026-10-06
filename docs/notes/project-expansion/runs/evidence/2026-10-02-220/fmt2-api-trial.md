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

<div class="docblock">

<span id="print"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void print(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to `stdout`.

**Example**:

<pre><code class="language-cpp">fmt::print("The answer is {}.", 42);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="print"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void print(FILE* f, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to the file `f`.

**Example**:

<pre><code class="language-cpp">fmt::print(stderr, "Don't {}!", "panic");
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="println"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void println(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to `stdout` followed by a newline.

</div>

</div>

<div class="docblock">

<span id="println"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void println(FILE* f, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to the file `f` followed by a newline.

</div>

</div>

<div class="docblock">

<span id="format_to"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;
</div><div>remove_cvref_t<outputit> format_to(OutputIt&amp;&amp; out, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</outputit></div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt`, writes the result
to the output iterator `out` and returns the iterator past the end of
the output range. `format_to` does not append a terminating null
character.

**Example**:

<pre><code class="language-cpp">auto out = std::vector&lt;char&gt;();
fmt::format_to(std::back_inserter(out), "{}", 42);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="format_to_n"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;
</div><div>format_to_n_result<outputit> format_to_n(OutputIt out, size_t n, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</outputit></div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt`, writes up to `n`
characters of the result to the output iterator `out` and returns the
total (not truncated) output size and the iterator past the end of the
output range. `format_to_n` does not append a terminating null
character.

</div>

</div>

<div class="docblock">

<span id="format_to_n_result"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt&gt;
</div><div>struct format_to_n_result;</div></code></pre>

<div class="docblock-desc">

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>OutputIt out;</div></code></pre>

<div class="docblock-desc">

Iterator past the end of the output range.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>size_t size;</div></code></pre>

<div class="docblock-desc">

Total (not truncated) output size.

</div>

</div>

</div>

</div>

<div class="docblock">

<span id="formatted_size"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>size_t formatted_size(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Returns the number of chars in the output of `format(fmt, args...)`.

</div>

</div>

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

<pre class="highlight"><code>#include &lt;fmt/format.h&gt;

namespace kevin_namespacy {

enum class film {
  house_of_cards, american_beauty, se7en = 7
};

auto format_as(film f) { return fmt::underlying(f); }

}

int main() {
  fmt::print("{}\n", kevin_namespacy::film::se7en); // Output: 7
}</code></pre>

Using a specialization is more complex, but gives you full control over
parsing and formatting. To use this method, specialize the `formatter`
struct template for your type and implement `parse` and `format`
methods.

The recommended way of defining a formatter is by reusing an existing
one via inheritance or composition. This way you can support standard
format specifiers without implementing them yourself. For example:

<pre><code class="language-c++">// color.h:
#include &lt;fmt/base.h&gt;

enum class color {red, green, blue};

template &lt;&gt; struct fmt::formatter&lt;color&gt;: formatter&lt;string_view&gt; {
  // parse is inherited from formatter&lt;string_view&gt;.

  auto format(color c, format_context&amp; ctx) const
    -&gt; format_context::iterator;
};
</code></pre>

<pre><code class="language-c++">// color.cc:
#include "color.h"
#include &lt;fmt/format.h&gt;

auto fmt::formatter&lt;color&gt;::format(color c, format_context&amp; ctx) const
    -&gt; format_context::iterator {
  string_view name = "unknown";
  switch (c) {
  case color::red:   name = "red"; break;
  case color::green: name = "green"; break;
  case color::blue:  name = "blue"; break;
  }
  return formatter&lt;string_view&gt;::format(name, ctx);
}
</code></pre>

Note that `formatter<string_view>::format` is defined in `fmt/format.h`
so it has to be included in the source file. Since `parse` is inherited
from `formatter<string_view>` it will recognize all string format
specifications, for example

<pre><code class="language-c++">fmt::format("{:&gt;10}", color::blue)
</code></pre>

will return `" blue"`.

In general the formatter has the following form:

<pre class="highlight"><code>template &lt;&gt; struct fmt::formatter&lt;T&gt; {
  // Parses format specifiers and stores them in the formatter.
  //
  // [ctx.begin(), ctx.end()) is a, possibly empty, character range that
  // contains a part of the format string starting from the format
  // specifications to be parsed, e.g. in
  //
  //   fmt::format("{:f} continued", ...);
  //
  // the range will contain "f} continued". The formatter should parse
  // specifiers until '}' or the end of the range. In this example the
  // formatter should parse the 'f' specifier and return an iterator
  // pointing to '}'.
  constexpr auto parse(format_parse_context&amp; ctx)
    -&gt; format_parse_context::iterator;

  // Formats value using the parsed format specification stored in this
  // formatter and writes the output to ctx.out().
  auto format(const T&amp; value, format_context&amp; ctx) const
    -&gt; format_context::iterator;
};</code></pre>

It is recommended to at least support fill, align and width that apply
to the whole object and have the same semantics as in standard
formatters.

You can also write a formatter for a hierarchy of classes:

<pre><code class="language-c++">// demo.h:
#include &lt;type_traits&gt;
#include &lt;fmt/format.h&gt;

struct A {
  virtual ~A() {}
  virtual std::string name() const { return "A"; }
};

struct B : A {
  virtual std::string name() const { return "B"; }
};

template &lt;typename T&gt;
struct fmt::formatter&lt;T, std::enable_if_t&lt;std::is_base_of_v&lt;A, T&gt;, char&gt;&gt; :
    fmt::formatter&lt;std::string&gt; {
  auto format(const A&amp; a, format_context&amp; ctx) const {
    return formatter&lt;std::string&gt;::format(a.name(), ctx);
  }
};
</code></pre>

<pre><code class="language-c++">// demo.cc:
#include "demo.h"
#include &lt;fmt/format.h&gt;

int main() {
  B b;
  A&amp; a = b;
  fmt::print("{}", a); // Output: B
}
</code></pre>

Providing both a `formatter` specialization and a `format_as` overload
is disallowed.

<div class="docblock">

<span id="basic_format_parse_context"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Char&gt;
</div><div>using basic_format_parse_context = parse_context&lt;Char&gt;;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="context"></span>

<pre><code class="language-cpp decl"><div></div><div>class context;</div></code></pre>

<div class="docblock-desc">

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>constexpr context(iterator out, format_args args, locale_ref loc);</div></code></pre>

<div class="docblock-desc">

Constructs a `context` object. References to the arguments are stored in
the object so make sure they have appropriate lifetimes.

</div>

</div>

</div>

</div>

<div class="docblock">

<span id="format_context"></span>

<pre><code class="language-cpp decl"><div></div><div>using format_context = context;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

### Compile-Time Checks

Compile-time format string checks are enabled by default on compilers
that support C++20 `consteval`. On older compilers you can use the
[FMT_STRING](#legacy-checks) macro defined in `fmt/format.h` instead.

Unused arguments are allowed as in Python's `str.format` and ordinary
functions.

See [Type Erasure](#type-erasure) for an example of how to enable
compile-time checks in your own functions with `fmt::format_string`
while avoiding template bloat.

<div class="docblock">

<span id="fstring"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>struct fstring;</div></code></pre>

<div class="docblock-desc">

A compile-time format string. Use `format_string` in the public API to
prevent type deduction.

</div>

</div>

<div class="docblock">

<span id="format_string"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>using format_string = typename fstring&lt;T...&gt;::t;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="runtime"></span>

<pre><code class="language-cpp decl"><div></div><div>runtime_format_string&lt;&gt; runtime(string_view s);</div></code></pre>

<div class="docblock-desc">

Creates a runtime format string.

**Example**:

<pre><code class="language-cpp">// Check format string at runtime instead of compile-time.
fmt::print(fmt::runtime("{:d}"), "I am not a number");
</code> </pre>

</div>

</div>

### Type Erasure

You can create your own formatting function with compile-time checks and
small binary footprint, for example
([run](https://godbolt.org/z/b9Pbasvzc)):

<pre><code class="language-c++">#include &lt;fmt/format.h&gt;

void vlog(const char* file, int line,
          fmt::string_view fmt, fmt::format_args args) {
  fmt::print("{}: {}: {}", file, line, fmt::vformat(fmt, args));
}

template &lt;typename... T&gt;
void log(const char* file, int line,
         fmt::format_string&lt;T...&gt; fmt, T&amp;&amp;... args) {
  vlog(file, line, fmt, fmt::make_format_args(args...));
}

#define MY_LOG(fmt, ...) log(__FILE__, __LINE__, fmt, __VA_ARGS__)

MY_LOG("invalid squishiness: {}", 42);
</code></pre>

Note that `vlog` is not parameterized on argument types which improves
compile times and reduces binary code size compared to a fully
parameterized version.

<div class="docblock">

<span id="make_format_args"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Context, typename...&nbsp;T, int&nbsp;NUM_ARGS, int&nbsp;NUM_NAMED_ARGS, ullong&nbsp;DESC&gt;
</div><div>detail::format_arg_store<context, num_args,="" num_named_args,="" desc=""> make_format_args(T&amp;... args);</context,></div></code></pre>

<div class="docblock-desc">

Constructs an object that stores references to arguments and can be
implicitly converted to `format_args`. `Context` can be omitted in which
case it defaults to `context`. See `arg` for lifetime considerations.

</div>

</div>

<div class="docblock">

<span id="basic_format_args"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;
</div><div>class basic_format_args;</div></code></pre>

<div class="docblock-desc">

A view of a collection of formatting arguments. To avoid lifetime issues
it should only be used as a parameter type in type-erased functions such
as `vformat`:

<pre><code class="language-cpp">void vlog(fmt::string_view fmt, fmt::format_args args);  // OK
fmt::format_args args = fmt::make_format_args();  // Dangling reference
</code> </pre>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>constexpr basic_format_args(const store&lt;NUM_ARGS, NUM_NAMED_ARGS, DESC&gt;&amp; s);</div></code></pre>

<div class="docblock-desc">

Constructs a `basic_format_args` object from `format_arg_store`.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>constexpr basic_format_args(const format_arg* args, int count, bool has_named);</div></code></pre>

<div class="docblock-desc">

Constructs a `basic_format_args` object from a dynamic list of
arguments.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>format_arg get(int id);</div></code></pre>

<div class="docblock-desc">

Returns the argument with the specified id.

</div>

</div>

</div>

</div>

<div class="docblock">

<span id="format_args"></span>

<pre><code class="language-cpp decl"><div></div><div>using format_args = basic_format_args&lt;context&gt;;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="basic_format_arg"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;
</div><div>class basic_format_arg;</div></code></pre>

<div class="docblock-desc">

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>decltype(vis(0)) visit(Visitor&amp;&amp; vis);</div></code></pre>

<div class="docblock-desc">

Visits an argument dispatching to the appropriate visit method based on
the argument type. For example, if the argument type is `double` then
`vis(value)` will be called with the value of type `double`.

</div>

</div>

</div>

</div>

### Named Arguments

<div class="docblock">

<span id="arg"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>named_arg<t> arg(const char* name, const T&amp; arg);</t></div></code></pre>

<div class="docblock-desc">

Returns a named argument to be used in a formatting function. It should
only be used in a call to a formatting function.

**Example**:

<pre><code class="language-cpp">fmt::print("The answer is {answer}.", fmt::arg("answer", 42));
</code></pre>

Named arguments passed with `fmt::arg` are not supported in compile-time
checks, but `"answer"_a=42` are compile-time checked in sufficiently new
compilers. See `operator""_a()`.

</div>

</div>

### Compatibility

<div class="docblock">

<span id="basic_string_view"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Char&gt;
</div><div>class basic_string_view;</div></code></pre>

<div class="docblock-desc">

An implementation of `std::basic_string_view` for pre-C++17 providing a
subset of the API. `fmt::basic_string_view` is used in the public API
even if `std::basic_string_view` is available to prevent issues when a
library is compiled with a different `-std` option than the client code
(which is not recommended).

</div>

</div>

<div class="docblock">

<span id="string_view"></span>

<pre><code class="language-cpp decl"><div></div><div>using string_view = basic_string_view&lt;char&gt;;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

## Format API

`fmt/format.h` defines the full format API providing additional
formatting functions and locale support.

<span id="format"></span>

<div class="docblock">

<span id="format"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>std::string format(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and returns the
result as a string.

**Example**:

<pre><code class="language-cpp">#include &lt;fmt/format.h&gt;
std::string message = fmt::format("The answer is {}.", 42);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="vformat"></span>

<pre><code class="language-cpp decl"><div></div><div>std::string vformat(string_view fmt, format_args args);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="operator" "_a"=""></span>

<pre><code class="language-cpp decl"><div>template &lt;detail::fixed_string&nbsp;S&gt;
</div><div>auto operator""_a();</div></code></pre>

<div class="docblock-desc">

User-defined literal equivalent of `fmt::arg`, but with compile-time
checks.

**Example**:

<pre><code class="language-cpp">using namespace fmt::literals;
fmt::print("The answer is {answer}.", "answer"_a=42);
</code> </pre>

</div>

</div>

### Utilities

<div class="docblock">

<span id="ptr"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>const void* ptr(T p);</div></code></pre>

<div class="docblock-desc">

Converts `p` to `const void*` for pointer formatting.

**Example**:

<pre><code class="language-cpp">auto s = fmt::format("{}", fmt::ptr(p));
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="underlying"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Enum&gt;
</div><div>underlying_t<enum> underlying(Enum e);</enum></div></code></pre>

<div class="docblock-desc">

Converts `e` to the underlying type.

**Example**:

<pre><code class="language-cpp">enum class color { red, green, blue };
auto s = fmt::format("{}", fmt::underlying(color::red));  // s == "0"
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="to_string"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>std::string to_string(const T&amp; value);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="group_digits"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>group_digits_view<t> group_digits(T value);</t></div></code></pre>

<div class="docblock-desc">

Returns a view that formats an integer value using ',' as a
locale-independent thousands separator.

**Example**:

<pre><code class="language-cpp">fmt::print("{}", fmt::group_digits(12345));
// Output: "12,345"
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="detail::buffer"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>class detail::buffer;</div></code></pre>

<div class="docblock-desc">

A contiguous memory buffer with an optional growing ability. It is an
internal class and shouldn't be used directly, only via `memory_buffer`.

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>size_t size();</div></code></pre>

<div class="docblock-desc">

Returns the size of this buffer.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>size_t capacity();</div></code></pre>

<div class="docblock-desc">

Returns the capacity of this buffer.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>T * data();</div></code></pre>

<div class="docblock-desc">

Returns a pointer to the buffer data (not null-terminated).

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void clear();</div></code></pre>

<div class="docblock-desc">

Clears this buffer.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void append(const U* begin, const U* end);</div></code></pre>

<div class="docblock-desc">

Appends data to the end of the buffer.

</div>

</div>

</div>

</div>

<div class="docblock">

<span id="basic_memory_buffer"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T, size_t&nbsp;SIZE, typename Allocator&gt;
</div><div>class basic_memory_buffer;</div></code></pre>

<div class="docblock-desc">

A dynamically growing memory buffer for trivially copyable/constructible
types with the first `SIZE` elements stored in the object itself. Most
commonly used via the `memory_buffer` alias for `char`.

**Example**:

<pre><code class="language-cpp">auto out = fmt::memory_buffer();
fmt::format_to(std::back_inserter(out), "The answer is {}.", 42);
</code></pre>

This will append "The answer is 42." to `out`. The buffer content can be
converted to `std::string` with `to_string(out)`.

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer(basic_memory_buffer&amp;&amp; other);</div></code></pre>

<div class="docblock-desc">

Constructs a `basic_memory_buffer` object moving the content of the
other object to it.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>basic_memory_buffer &amp; operator=(basic_memory_buffer&amp;&amp; other);</div></code></pre>

<div class="docblock-desc">

Moves the content of the other `basic_memory_buffer` object to this one.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void resize(size_t count);</div></code></pre>

<div class="docblock-desc">

Resizes the buffer to contain `count` elements. If T is a POD type new
elements may not be initialized.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void reserve(size_t new_capacity);</div></code></pre>

<div class="docblock-desc">

Increases the buffer capacity to `new_capacity`.

</div>

</div>

</div>

</div>

### System Errors

{fmt} does not use `errno` to communicate errors to the user, but it may
call system functions which set `errno`. Users should not make any
assumptions about the value of `errno` being preserved by library
functions.

<div class="docblock">

<span id="system_error"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>std::system_error system_error(int error_code, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Constructs `std::system_error` with a message formatted with
`fmt::format(fmt, args...)`. `error_code` is a system error code as
given by `errno`.

**Example**:

<pre><code class="language-cpp">// This throws std::system_error with the description
//   cannot open file 'madeup': No such file or directory
// or similar (system message may vary).
const char* filename = "madeup";
FILE* file = fopen(filename, "r");
if (!file)
  throw fmt::system_error(errno, "cannot open file '{}'", filename);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="format_system_error"></span>

<pre><code class="language-cpp decl"><div></div><div>void format_system_error(detail::buffer&lt;char&gt;&amp; out, int error_code, const char* message);</div></code></pre>

<div class="docblock-desc">

Formats an error message for an error returned by an operating system or
a language runtime, for example a file opening error, and writes it to
`out`. The format is the same as the one used by
`std::system_error(ec, message)` where `ec` is
`std::error_code(error_code, std::generic_category())`. It is
implementation-defined but normally looks like:

<pre><code class="language-cpp">&lt;message&gt;: &lt;system-message&gt;
</code></pre>

where `<message>` is the passed message and `<system-message>` is the
system message corresponding to the error code. `error_code` is a system
error code as given by `errno`.

</div>

</div>

### Custom Allocators

The {fmt} library supports custom dynamic memory allocators. A custom
allocator class can be specified as a template argument to
[`fmt::basic_memory_buffer`](#basic_memory_buffer):

<pre class="highlight"><code>using custom_memory_buffer = 
  fmt::basic_memory_buffer&lt;char, fmt::inline_buffer_size, custom_allocator&gt;;</code></pre>

It is also possible to write a formatting function that uses a custom
allocator:

<pre class="highlight"><code>using custom_string =
  std::basic_string&lt;char, std::char_traits&lt;char&gt;, custom_allocator&gt;;

auto vformat(custom_allocator alloc, fmt::string_view fmt,
             fmt::format_args args) -&gt; custom_string {
  auto buf = custom_memory_buffer(alloc);
  fmt::vformat_to(std::back_inserter(buf), fmt, args);
  return custom_string(buf.data(), buf.size(), alloc);
}

template &lt;typename ...Args&gt;
auto format(custom_allocator alloc, fmt::string_view fmt,
            const Args&amp; ... args) -&gt; custom_string {
  return vformat(alloc, fmt, fmt::make_format_args(args...));
}</code></pre>

The allocator will be used for the output container only. Formatting
functions normally don't do any allocations for built-in and string
types except for non-default floating-point formatting that occasionally
falls back on `sprintf`.

### Locale

All formatting is locale-independent by default. Use the `'L'` format
specifier to insert the appropriate number separator characters from the
locale:

<pre class="highlight"><code>#include &lt;fmt/format.h&gt;
#include &lt;locale&gt;

std::locale::global(std::locale("en_US.UTF-8"));
auto s = fmt::format("{:L}", 1000000);  // s == "1,000,000"</code></pre>

`fmt/format.h` provides the following overloads of formatting functions
that take `std::locale` as a parameter. The locale type is a template
parameter to avoid the expensive `<locale>` include.

<div class="docblock">

<span id="format"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>std::string format(locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="format_to"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename OutputIt, typename...&nbsp;T&gt;
</div><div>OutputIt format_to(OutputIt out, locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="formatted_size"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>size_t formatted_size(locale_ref loc, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<span id="legacy-checks"></span>

### Legacy Compile-Time Checks

`FMT_STRING` enables compile-time checks on older compilers. It requires
C++14 or later and is a no-op in C++11.

<div class="docblock">

<span id="FMT_STRING"></span>

<pre><code class="language-cpp decl"><div></div><div>FMT_STRING(s)</div></code></pre>

<div class="docblock-desc">

Constructs a legacy compile-time format string from a string literal
`s`.

**Example**:

<pre><code class="language-cpp">// A compile-time error because 'd' is an invalid specifier for strings.
std::string s = fmt::format(FMT_STRING("{:d}"), "foo");
</code> </pre>

</div>

</div>

To force the use of legacy compile-time checks, define the preprocessor
variable `FMT_ENFORCE_COMPILE_STRING`. When set, functions accepting
`FMT_STRING` will fail to compile with regular strings.

<span id="ranges-api"></span>

## Range and Tuple Formatting

`fmt/ranges.h` provides formatting support for ranges and tuples:

<pre class="highlight"><code>#include &lt;fmt/ranges.h&gt;

fmt::print("{}", std::tuple&lt;char, int&gt;{'a', 42});
// Output: ('a', 42)</code></pre>

Using `fmt::join`, you can separate tuple elements with a custom
separator:

<pre class="highlight"><code>#include &lt;fmt/ranges.h&gt;

auto t = std::tuple&lt;int, char&gt;{1, 'a'};
fmt::print("{}", fmt::join(t, ", "));
// Output: 1, a</code></pre>

<div class="docblock">

<span id="join"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Range&gt;
</div><div>join_view<decltype(detail::range_begin(r)), decltype(detail::range_end(r))=""> join(Range&amp;&amp; r, string_view sep);</decltype(detail::range_begin(r)),></div></code></pre>

<div class="docblock-desc">

Returns a view that formats `range` with elements separated by `sep`.

**Example**:

<pre><code class="language-cpp">auto v = std::vector&lt;int&gt;{1, 2, 3};
fmt::print("{}", fmt::join(v, ", "));
// Output: 1, 2, 3
</code></pre>

`fmt::join` applies passed format specifiers to the range elements:

<pre><code class="language-cpp">fmt::print("{:02}", fmt::join(v, ", "));
// Output: 01, 02, 03
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="join"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename It, typename Sentinel&gt;
</div><div>join_view<it, sentinel=""> join(It begin, Sentinel end, string_view sep);</it,></div></code></pre>

<div class="docblock-desc">

Returns a view that formats the iterator range `[begin, end)` with
elements separated by `sep`.

</div>

</div>

<div class="docblock">

<span id="join"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>join_view<const t*,="" const="" t*=""> join(std::initializer_list&lt;T&gt; list, string_view sep);</const></div></code></pre>

<div class="docblock-desc">

Returns an object that formats `std::initializer_list` with elements
separated by `sep`.

**Example**:

<pre><code class="language-cpp">fmt::print("{}", fmt::join({1, 2, 3}, ", "));
// Output: "1, 2, 3"
</code> </pre>

</div>

</div>

<span id="chrono-api"></span>

## Date and Time Formatting

`fmt/chrono.h` provides formatters for

- [`std::chrono::duration`](https://en.cppreference.com/w/cpp/chrono/duration)
- [`std::chrono::time_point`](https://en.cppreference.com/w/cpp/chrono/time_point)
- [`std::tm`](https://en.cppreference.com/w/cpp/chrono/c/tm)

The format syntax is described in [Chrono Format
Specifications](../syntax/#chrono-format-specifications).

**Example**:

<pre class="highlight"><code>#include &lt;fmt/chrono.h&gt;

int main() {
  auto now = std::chrono::system_clock::now();

  fmt::print("The date is {:%Y-%m-%d}.\n", now);
  // Output: The date is 2020-11-07.
  // (with 2020-11-07 replaced by the current date)

  using namespace std::literals::chrono_literals;

  fmt::print("Default format: {} {}\n", 42s, 100ms);
  // Output: Default format: 42s 100ms

  fmt::print("strftime-like format: {:%H:%M:%S}\n", 3h + 15min + 30s);
  // Output: strftime-like format: 03:15:30
}</code></pre>

<div class="docblock">

<span id="gmtime"></span>

<pre><code class="language-cpp decl"><div></div><div>std::tm gmtime(std::time_t time);</div></code></pre>

<div class="docblock-desc">

Converts given time since epoch as `std::time_t` value into calendar
time, expressed in Coordinated Universal Time (UTC). Unlike
`std::gmtime`, this function is thread-safe on most platforms.

</div>

</div>

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

<div class="docblock">

<span id="ptr"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T, typename Deleter&gt;
</div><div>const void* ptr(const std::unique_ptr&lt;T, Deleter&gt;&amp; p);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="ptr"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>const void* ptr(const std::shared_ptr&lt;T&gt;&amp; p);</div></code></pre>

<div class="docblock-desc">

</div>

</div>

### Variants

A `std::variant` can be formatted only if every alternative is
formattable, and requires the `__cpp_lib_variant` [library
feature](https://en.cppreference.com/w/cpp/feature_test).

**Example**:

<pre class="highlight"><code>#include &lt;fmt/std.h&gt;

fmt::print("{}", std::variant&lt;char, float&gt;('x'));
// Output: variant('x')

fmt::print("{}", std::variant&lt;std::monostate, char&gt;());
// Output: variant(monostate)</code></pre>

## Bit-Fields and Packed Structs

To format a bit-field or a field of a struct with
`__attribute__((packed))` applied to it, you need to convert it to the
underlying or compatible type via a cast or a unary `+`
([godbolt](https://www.godbolt.org/z/3qKKs6T5Y)):

<pre><code class="language-c++">struct smol {
  int bit : 1;
};

auto s = smol();
fmt::print("{}", +s.bit);
</code></pre>

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

<pre class="highlight"><code>struct point {
  double x;
  double y;
};

template &lt;&gt; struct fmt::formatter&lt;point&gt; {
  constexpr auto parse(format_parse_context&amp; ctx) { return ctx.begin(); }

  template &lt;typename FormatContext&gt;
  auto format(const point&amp; p, FormatContext&amp; ctx) const {
    return format_to(ctx.out(), "({}, {})"_cf, p.x, p.y);
  }
};

using namespace fmt::literals;
std::string s = fmt::format("{}"_cf, point(4, 2));</code></pre>

Format string compilation can generate more binary code compared to the
default API and is only recommended in places where formatting is a
performance bottleneck.

The same APIs support formatting at compile time e.g. in `constexpr` and
`consteval` functions. Additionally there is an experimental
`FMT_STATIC_FORMAT` that allows formatting into a string of the exact
required size at compile time. Compile-time formatting works with
built-in and user-defined formatters that have `constexpr` `format`
methods. Example:

<pre class="highlight"><code>template &lt;&gt; struct fmt::formatter&lt;point&gt; {
  constexpr auto parse(format_parse_context&amp; ctx) { return ctx.begin(); }

  template &lt;typename FormatContext&gt;
  constexpr auto format(const point&amp; p, FormatContext&amp; ctx) const {
    return format_to(ctx.out(), "({}, {})"_cf, p.x, p.y);
  }
};

constexpr auto s = FMT_STATIC_FORMAT("{}", point(4, 2));
const char* cstr = s.c_str(); // Points the static string "(4, 2)".</code></pre>

<div class="docblock">

<span id="operator" "_cf"=""></span>

<pre><code class="language-cpp decl"><div>template &lt;detail::fixed_string&nbsp;Str&gt;
</div><div>auto operator""_cf();</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="FMT_COMPILE"></span>

<pre><code class="language-cpp decl"><div></div><div>FMT_COMPILE(s)</div></code></pre>

<div class="docblock-desc">

Converts a string literal `s` into a format string that will be parsed
at compile time and converted into efficient formatting code. Requires
C++17 `constexpr if` compiler support.

**Example**:

<pre><code class="language-cpp">// Converts 42 into std::string using the most efficient method and no
// runtime format string processing.
std::string s = fmt::format(FMT_COMPILE("{}"), 42);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="FMT_STATIC_FORMAT"></span>

<pre><code class="language-cpp decl"><div></div><div>FMT_STATIC_FORMAT(fmt_str, ...)</div></code></pre>

<div class="docblock-desc">

Formats arguments according to the format string `fmt_str` and produces
a string of the exact required size at compile time. Both the format
string and the arguments must be compile-time expressions.

The resulting string can be accessed as a C string via `c_str()` or as a
`fmt::string_view` via `str()`.

**Example**:

<pre><code class="language-cpp">// Produces the static string "42" at compile time.
static constexpr auto result = FMT_STATIC_FORMAT("{}", 42);
const char* s = result.c_str();
</code> </pre>

</div>

</div>

<span id="color-api"></span>

## Terminal Colors and Text Styles

`fmt/color.h` provides support for terminal color and text style output.

<div class="docblock">

<span id="print"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void print(text_style ts, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats a string and prints it to stdout using ANSI escape sequences to
specify text formatting.

**Example**:

<pre><code class="language-cpp">fmt::print(fmt::emphasis::bold | fg(fmt::color::red),
           "Elapsed time: {0:.2f} seconds", 1.23);
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="fg"></span>

<pre><code class="language-cpp decl"><div></div><div>text_style fg(detail::color_type foreground);</div></code></pre>

<div class="docblock-desc">

Creates a text style from the foreground (text) color.

</div>

</div>

<div class="docblock">

<span id="bg"></span>

<pre><code class="language-cpp decl"><div></div><div>text_style bg(detail::color_type background);</div></code></pre>

<div class="docblock-desc">

Creates a text style from the background color.

</div>

</div>

<div class="docblock">

<span id="styled"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>detail::styled_arg<remove_cvref_t<t>&gt; styled(const T&amp; value, text_style ts);</remove_cvref_t<t></div></code></pre>

<div class="docblock-desc">

Returns an argument that will be formatted using ANSI escape sequences,
to be used in a formatting function.

**Example**:

<pre><code class="language-cpp">fmt::print("Elapsed time: {0:.2f} seconds",
           fmt::styled(1.23, fmt::fg(fmt::color::green) |
                             fmt::bg(fmt::color::blue)));
</code> </pre>

</div>

</div>

<span id="os-api"></span>

## System APIs

<div class="docblock">

<span id="ostream"></span>

<pre><code class="language-cpp decl"><div></div><div>class ostream;</div></code></pre>

<div class="docblock-desc">

A fast buffered output stream for writing from a single thread. Writing
from multiple threads without external synchronization may result in a
data race.

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void print(format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to the file.

</div>

</div>

</div>

</div>

<div class="docblock">

<span id="output_file"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>ostream output_file(cstring_view path, T... params);</div></code></pre>

<div class="docblock-desc">

Opens a file for writing. Supported parameters passed in `params`:

- `<integer>`: Flags passed to
  [open](https://pubs.opengroup.org/onlinepubs/007904875/functions/open.html)
  ([`file::WRONLY`](file::WRONLY)` | `[`file::CREATE`](file::CREATE)` | `[`file::TRUNC`](file::TRUNC)
  by default)

- `buffer_size=<integer>`: Output buffer size

**Example**:

<pre><code class="language-cpp">auto out = fmt::output_file("guide.txt");
out.print("Don't {}", "Panic");
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="windows_error"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>std::system_error windows_error(int error_code, string_view message, const T&amp;... args);</div></code></pre>

<div class="docblock-desc">

Constructs a `std::system_error` object with the description of the form

<pre><code class="language-cpp">&lt;message&gt;: &lt;system-message&gt;
</code></pre>

where `<message>` is the formatted message and `<system-message>` is the
system message corresponding to the error code. `error_code` is a
Windows error code as given by `GetLastError`. If `error_code` is not a
valid error code such as -1, the system message will look like "error
-1".

**Example**:

<pre><code class="language-cpp">// This throws a system_error with the description
//   cannot open file 'foo': The system cannot find the file specified.
// or similar (system message may vary) if the file doesn't exist.
const char *filename = "foo";
LPOFSTRUCT of = LPOFSTRUCT();
HFILE file = OpenFile(filename, &amp;of, OF_READ);
if (file == HFILE_ERROR) {
  throw fmt::windows_error(GetLastError(),
                           "cannot open file '{}'", filename);
}
</code> </pre>

</div>

</div>

<span id="ostream-api"></span>

## `std::ostream` Support

`fmt/ostream.h` provides `std::ostream` support including formatting of
user-defined types that have an overloaded insertion operator
(`operator<<`). In order to make a type formattable via `std::ostream`
you should provide a `formatter` specialization inherited from
`ostream_formatter`:

<pre class="highlight"><code>#include &lt;fmt/ostream.h&gt;

struct date {
  int year, month, day;

  friend std::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const date&amp; d) {
    return os &lt;&lt; d.year &lt;&lt; '-' &lt;&lt; d.month &lt;&lt; '-' &lt;&lt; d.day;
  }
};

template &lt;&gt; struct fmt::formatter&lt;date&gt; : ostream_formatter {};

std::string s = fmt::format("The date is {}", date{2012, 12, 9});
// s == "The date is 2012-12-9"</code></pre>

<div class="docblock">

<span id="streamed"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>detail::streamed_view<t> streamed(const T&amp; value);</t></div></code></pre>

<div class="docblock-desc">

Returns a view that formats `value` via an ostream `operator<<`.

**Example**:

<pre><code class="language-cpp">fmt::print("Current thread id: {}\n",
           fmt::streamed(std::this_thread::get_id()));
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="print"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>void print(std::ostream&amp; os, format_string&lt;T...&gt; fmt, T&amp;&amp;... args);</div></code></pre>

<div class="docblock-desc">

Prints formatted data to the stream `os`.

**Example**:

<pre><code class="language-cpp">fmt::print(cerr, "Don't {}!", "panic");
</code> </pre>

</div>

</div>

<span id="args-api"></span>

## Dynamic Argument Lists

The header `fmt/args.h` provides `dynamic_format_arg_store`, a
builder-like API that can be used to construct format argument lists
dynamically.

<div class="docblock">

<span id="dynamic_format_arg_store"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename Context&gt;
</div><div>class dynamic_format_arg_store;</div></code></pre>

<div class="docblock-desc">

A dynamic list of formatting arguments with storage.

It can be implicitly converted into `fmt::basic_format_args` for passing
into type-erased formatting functions such as `fmt::vformat`.

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void push_back(const T&amp; arg);</div></code></pre>

<div class="docblock-desc">

Adds an argument into the dynamic store for later passing to a
formatting function.

Note that custom types and string types (but not string views) are
copied into the store dynamically allocating memory if necessary.

**Example**:

<pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt; store;
store.push_back(42);
store.push_back("abc");
store.push_back(1.5f);
std::string result = fmt::vformat("{} and {} and {}", store);
</code> </pre>

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void push_back(std::reference_wrapper&lt;T&gt; arg);</div></code></pre>

<div class="docblock-desc">

Adds a reference to the argument into the dynamic store for later
passing to a formatting function.

**Example**:

<pre><code class="language-cpp">fmt::dynamic_format_arg_store&lt;fmt::format_context&gt; store;
char band[] = "Rolling Stones";
store.push_back(std::cref(band));
band[9] = 'c'; // Changing str affects the output.
std::string result = fmt::vformat("{}", store);
// result == "Rolling Scones"
</code> </pre>

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void push_back(const named_arg&lt;T, char_type&gt;&amp; arg);</div></code></pre>

<div class="docblock-desc">

Adds named argument into the dynamic store for later passing to a
formatting function. `std::reference_wrapper` is supported to avoid
copying of the argument. The name is always copied into the store.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void clear();</div></code></pre>

<div class="docblock-desc">

Erase all elements from the store.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>void reserve(size_t new_cap, size_t new_cap_named);</div></code></pre>

<div class="docblock-desc">

Reserves space to store at least `new_cap` arguments including
`new_cap_named` named arguments.

</div>

</div>

<div class="docblock">

<pre><code class="language-cpp decl"><div></div><div>size_t size();</div></code></pre>

<div class="docblock-desc">

Returns the number of elements in the store.

</div>

</div>

</div>

</div>

<span id="printf-api"></span>

## Safe `printf`

The header `fmt/printf.h` provides `printf`-like formatting
functionality. The following functions use [printf format string
syntax](https://pubs.opengroup.org/onlinepubs/009695399/functions/fprintf.html)
with the POSIX extension for positional arguments. Unlike their standard
counterparts, the `fmt` functions are type-safe and throw an exception
if an argument type doesn't match its format specification.

<div class="docblock">

<span id="printf"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>int printf(string_view fmt, const T&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to `stdout`.

**Example**:

fmt::printf("Elapsed time: %.2f seconds", 1.23);

</div>

</div>

<div class="docblock">

<span id="fprintf"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>int fprintf(std::FILE* f, string_view fmt, const T&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and writes the
output to `f`.

**Example**:

<pre><code class="language-cpp">fmt::fprintf(stderr, "Don't %s!", "panic");
</code> </pre>

</div>

</div>

<div class="docblock">

<span id="sprintf"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename...&nbsp;T&gt;
</div><div>std::string sprintf(string_view fmt, const T&amp;... args);</div></code></pre>

<div class="docblock-desc">

Formats `args` according to specifications in `fmt` and returns the
result as string.

**Example**:

<pre><code class="language-cpp">std::string message = fmt::sprintf("The answer is %d", 42);
</code> </pre>

</div>

</div>

<span id="xchar-api"></span>

## Wide Strings

The optional header `fmt/xchar.h` provides support for `wchar_t` and
exotic character types.

<div class="docblock">

<span id="wstring_view"></span>

<pre><code class="language-cpp decl"><div></div><div>using wstring_view = basic_string_view&lt;wchar_t&gt;;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="wformat_context"></span>

<pre><code class="language-cpp decl"><div></div><div>using wformat_context = buffered_context&lt;wchar_t&gt;;</div></code></pre>

<div class="docblock-desc">

</div>

</div>

<div class="docblock">

<span id="to_wstring"></span>

<pre><code class="language-cpp decl"><div>template &lt;typename T&gt;
</div><div>std::wstring to_wstring(const T&amp; value);</div></code></pre>

<div class="docblock-desc">

Converts `value` to `std::wstring` using the default format for type
`T`.

</div>

</div>

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
