---
title: "Format String Syntax"
licenseSource: "fmt-12-2-0"
---

# Format String Syntax

The formatting functions in this library — most notably
[`fmt::format`](/docs/fmt/v12-2-0/en/01-docs/03-api/#format) and [`fmt::print`](/docs/fmt/v12-2-0/en/01-docs/03-api/#print) —
accept format strings written in the syntax described here.

A format string is plain text with embedded *replacement fields*
delimited by the braces `{` and `}`. Characters outside of any
replacement field are copied to the output unchanged. To emit a literal
brace, double it: `{{` yields a single `{` in the output, and `}}`
yields a single `}`.

A replacement field is described by the grammar below.

<span id="replacement-field"></span>

<pre><code class="language-json">replacement_field ::= "{" [arg_id] [":" (<a href="#format-spec">format_spec</a> | <a href="#chrono-format-spec">chrono_format_spec</a>)] "}"&#10;arg_id            ::= integer | identifier&#10;integer           ::= digit+&#10;digit             ::= "0"..."9"&#10;identifier        ::= id_start id_continue*&#10;id_start          ::= "a"..."z" | "A"..."Z" | "_"&#10;id_continue       ::= id_start | digit</code>&#10;</pre>

An *arg_id* selects which argument to format. It may be a non-negative
integer (positional reference) or an identifier matching the name of an
argument passed via [`fmt::arg`](/docs/fmt/v12-2-0/en/01-docs/03-api/#arg) (named reference). When
*arg_id* is omitted, arguments are consumed in left-to-right order; this
*automatic* indexing must be used uniformly throughout the format string
— mixing automatic and explicit numeric ids is a compile-time error (or
a `format_error` at runtime).

A *format_spec*, introduced by `:`, describes how the value should be
rendered. Its grammar is type-dependent; the form used by the standard
built-in types is documented in the next section.

For example:

<pre><code class="language-c++">fmt::format("hello, {}", "world");&#10;// Result: "hello, world"&#10;&#10;fmt::format("{1}, {0}!", "world", "hello");&#10;// Result: "hello, world!"&#10;&#10;fmt::format("{greeting}, {name}!",&#10;            fmt::arg("greeting", "hi"), fmt::arg("name", "fmt"));&#10;// Result: "hi, fmt!"&#10;</code></pre>

A *width* or *precision* inside a *format_spec* may itself be written as
a nested replacement field — `{}` or `{arg_id}` — in which case it takes
its value from an integer argument at runtime. Nested fields accept only
an *arg_id*; they cannot themselves contain a *format_spec*.

## Format Specification

The grammar below describes the *format_spec* shared by the built-in
types — integers, floating-point values, characters, strings, booleans,
and pointers — as well as by any user-defined type whose `formatter`
reuses fmt's parser.

<span id="format-spec"></span>

<pre><code class="language-json">format_spec ::= [[fill]align][sign]["#"]["0"][width]["." precision]["L"][type]&#10;fill        ::= &lt;a character other than '{' or '}'&gt;&#10;align       ::= "&lt;" | "&gt;" | "^"&#10;sign        ::= "+" | "-" | " "&#10;width       ::= <a href="#replacement-field">integer</a> | "{" [<a href="#replacement-field">arg_id</a>] "}"&#10;precision   ::= <a href="#replacement-field">integer</a> | "{" [<a href="#replacement-field">arg_id</a>] "}"&#10;type        ::= "a" | "A" | "b" | "B" | "c" | "d" | "e" | "E" | "f" | "F" |&#10;                "g" | "G" | "o" | "p" | "s" | "x" | "X" | "?"</code>&#10;</pre>

Whether a particular option is meaningful depends on the value being
formatted; options that do not apply to a value's type are diagnosed at
compile time when possible and otherwise raise a `format_error`.

### Fill and alignment

The *align* field selects where padding is placed when *width* makes the
field wider than the value's natural rendering.

<table>&#10;<thead>&#10;<tr>&#10;<th>Option</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>&lt;</code></td>&#10;<td>Left-align; pad on the right. Default for non-numeric types.</td>&#10;</tr>&#10;<tr>&#10;<td><code>&gt;</code></td>&#10;<td>Right-align; pad on the left. Default for numeric types.</td>&#10;</tr>&#10;<tr>&#10;<td><code>^</code></td>&#10;<td>Center the value; if the padding cannot be split evenly, the extra padding character goes on the right.</td>&#10;</tr>&#10;</tbody>&#10;</table>

The *fill* character is any single Unicode code point other than `{` or
`}`, encoded the same way as the format string. It supplies the padding
character in place of the default space. A fill character is recognized
only when it is immediately followed by an *align* character — otherwise
it would be indistinguishable from an option in another position — so to
use a custom fill you must also specify an alignment.

Alignment has no observable effect when the value's natural rendering is
already at least as wide as *width*; the value is never truncated to
fit.

<pre><code class="language-c++">fmt::format("[{:&lt;10}]", "42");   // Result: "[42        ]"&#10;fmt::format("[{:&gt;10}]", "42");   // Result: "[        42]"&#10;fmt::format("[{:^10}]", "42");   // Result: "[    42    ]"&#10;fmt::format("[{:*^10}]", "42");  // Result: "[****42****]"  - '*' as fill&#10;</code></pre>

### Sign

The *sign* field controls how the sign of a numeric value is emitted. It
applies to signed integer and floating-point types only.

<table>&#10;<thead>&#10;<tr>&#10;<th>Option</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>+</code></td>&#10;<td>Always emit a sign (<code>+</code> for nonnegative values, <code>-</code> for negative).</td>&#10;</tr>&#10;<tr>&#10;<td><code>-</code></td>&#10;<td>Emit <code>-</code> only for negative values. This is the default.</td>&#10;</tr>&#10;<tr>&#10;<td>space</td>&#10;<td>Emit a leading space for nonnegative values and <code>-</code> for negative ones; useful for aligning columns of signed numbers.</td>&#10;</tr>&#10;</tbody>&#10;</table>

The sign of `-0.0` is preserved in floating-point output.

<pre><code class="language-c++">fmt::format("{:+d} {:+d}", 7, -7);  // Result: "+7 -7"&#10;fmt::format("{: d} {: d}", 7, -7);  // Result: " 7 -7"&#10;</code></pre>

### Alternate form (`#`)

The `#` flag selects an *alternate form* whose exact meaning depends on
the presentation type:

- For integers rendered in binary, octal, or hexadecimal, it prepends
  the appropriate base prefix (`0b`/`0B`, `0`, or `0x`/`0X`). The case
  of the prefix follows the case of the type specifier — `0x` for `x`,
  `0X` for `X`, and so on.
- For floating-point values, it forces the decimal point to appear in
  the output even if no fractional digits would otherwise be emitted,
  and prevents the `g`/`G` presentation types from removing trailing
  zeros from the significand.

The `#` flag is not accepted by non-numeric types.

### Zero padding (`0`)

A `0` placed immediately before *width* enables sign-aware zero padding
for numeric types. Zeros are inserted between the sign (or base prefix,
if any) and the most significant digit, so that a sign or `0x` prefix
stays adjacent to the digits rather than being separated by spaces. For
example, `{:+08d}` applied to `120` produces `+0000120`.

Zero padding:

- applies only to numeric types;
- has no effect on `inf` or `nan`;
- is ignored when an explicit *align* is also present.

### Width

*width* is a non-negative decimal integer giving the minimum number of
characters that the field should occupy. If the formatted value is
shorter than *width*, it is padded according to *align* and *fill*; if
it is longer, the value is written in full. *width* never causes the
value to be truncated.

To supply *width* at runtime, write the field as `{}` to consume the
next argument, or as `{arg_id}` to reference an integer argument by
position or by name.

When formatting strings, "width" is measured in display columns using a
Unicode-aware estimate (East Asian wide and fullwidth characters, plus
common emoji ranges, count as two columns; everything else counts as
one). This keeps fixed *width* values visually consistent in monospace
renderings that combine Latin and CJK text.

<pre><code class="language-c++">fmt::format("[{:6}]", 42);&#10;// Result: "[    42]"  - right-aligned by default&#10;fmt::format("[{:6}]", "hi");&#10;// Result: "[hi    ]"  - left-aligned by default&#10;fmt::format("[{:{}}]", 42, 6);&#10;// Result: "[    42]"  - width from an argument&#10;</code></pre>

### Precision

*precision* is a non-negative decimal integer (introduced by `.`) whose
meaning depends on the value being formatted. As with *width*, it may be
supplied as a nested replacement field for runtime evaluation.

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Meaning of <code>.precision</code></th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>e</code>, <code>E</code>, <code>f</code>, <code>F</code></td>&#10;<td>Digits emitted after the decimal point.</td>&#10;</tr>&#10;<tr>&#10;<td><code>g</code>, <code>G</code></td>&#10;<td>Total number of significant digits.</td>&#10;</tr>&#10;<tr>&#10;<td><code>a</code>, <code>A</code></td>&#10;<td>Digits after the decimal point in the hexadecimal significand. If omitted, just enough digits are emitted to round-trip the value exactly.</td>&#10;</tr>&#10;<tr>&#10;<td>Strings (<code>s</code>, <code>?</code>, or default)</td>&#10;<td>Upper bound on the number of code points copied from the value.</td>&#10;</tr>&#10;</tbody>&#10;</table>

A *precision* is not accepted for integer, character, boolean, or
pointer types. When a *precision* limits the number of characters taken
from a C string, the string must still be null-terminated.

<pre><code class="language-c++">fmt::format("{:.2f}", 3.14159);        // Result: "3.14"&#10;fmt::format("{:.3g}", 3.14159);        // Result: "3.14"&#10;fmt::format("{:.4}", "hello, world");  // Result: "hell"&#10;fmt::format("{:.{}f}", 3.14159, 4);&#10;// Result: "3.1416"  - precision from an argument&#10;</code></pre>

### Locale (`L`)

The `L` flag selects locale-sensitive formatting for numeric types. The
formatter inspects the C++ locale supplied to the formatting function
(or the global locale, if none was passed) and inserts the locale's
digit grouping characters and — for floating-point values — its decimal
point. The flag has no effect on non-numeric types.

<pre><code class="language-c++">auto loc = std::locale("en_US.UTF-8");&#10;fmt::format(loc, "{:L}", 1234567890);     // Result: "1,234,567,890"&#10;fmt::format(loc, "{:.2Lf}", 1234567.89);  // Result: "1,234,567.89"&#10;</code></pre>

### Presentation type

The *type* field chooses the representation for the value. Specifiers
are grouped below by the value categories they apply to.

**Integers, booleans, and characters:**

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>b</code></td>&#10;<td>Base 2. The <code>#</code> flag adds a <code>0b</code> prefix.</td>&#10;</tr>&#10;<tr>&#10;<td><code>B</code></td>&#10;<td>Base 2. The <code>#</code> flag adds a <code>0B</code> prefix.</td>&#10;</tr>&#10;<tr>&#10;<td><code>c</code></td>&#10;<td>Render the integer as the character with that code point. Not allowed for <code>bool</code>.</td>&#10;</tr>&#10;<tr>&#10;<td><code>d</code></td>&#10;<td>Base 10. The default for integer types.</td>&#10;</tr>&#10;<tr>&#10;<td><code>o</code></td>&#10;<td>Base 8.</td>&#10;</tr>&#10;<tr>&#10;<td><code>x</code></td>&#10;<td>Base 16, lower-case digits. The <code>#</code> flag adds a <code>0x</code> prefix.</td>&#10;</tr>&#10;<tr>&#10;<td><code>X</code></td>&#10;<td>Base 16, upper-case digits. The <code>#</code> flag adds a <code>0X</code> prefix.</td>&#10;</tr>&#10;<tr>&#10;<td>none</td>&#10;<td>Same as <code>d</code> for integers, <code>c</code> for characters, and the textual form (<code>true</code>/<code>false</code>) for <code>bool</code>.</td>&#10;</tr>&#10;</tbody>&#10;</table>

<pre><code class="language-c++">fmt::format("{:d} {:#x} {:#o} {:#b}", 42, 42, 42, 42);&#10;// Result: "42 0x2a 052 0b101010"&#10;&#10;fmt::format("{:#06x}", 0xfe);  // # adds the prefix, 06 zero-pads to width 6&#10;// Result: "0x00fe"&#10;</code></pre>

**Floating-point values:**

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>a</code></td>&#10;<td>Hexadecimal-significand form (e.g. <code>1.8p+1</code>). Lower-case digits and a lower-case <code>p</code> for the binary exponent. The <code>#</code> flag adds a <code>0x</code> prefix.</td>&#10;</tr>&#10;<tr>&#10;<td><code>A</code></td>&#10;<td>Same as <code>a</code>, but upper-case throughout.</td>&#10;</tr>&#10;<tr>&#10;<td><code>e</code></td>&#10;<td>Scientific notation with a lower-case <code>e</code> for the decimal exponent.</td>&#10;</tr>&#10;<tr>&#10;<td><code>E</code></td>&#10;<td>Scientific notation with an upper-case <code>E</code>.</td>&#10;</tr>&#10;<tr>&#10;<td><code>f</code></td>&#10;<td>Fixed-point notation.</td>&#10;</tr>&#10;<tr>&#10;<td><code>F</code></td>&#10;<td>Same as <code>f</code>, but renders <code>nan</code> as <code>NAN</code> and <code>inf</code> as <code>INF</code>.</td>&#10;</tr>&#10;<tr>&#10;<td><code>g</code></td>&#10;<td>General form: scientific notation when the exponent would be less than −4 or not less than the precision, otherwise fixed-point; trailing zeros are removed from the fractional part unless <code>#</code> is set. A precision of <code>0</code> is interpreted as <code>1</code>.</td>&#10;</tr>&#10;<tr>&#10;<td><code>G</code></td>&#10;<td>Same as <code>g</code>, but uses <code>E</code> for the exponent and upper-case <code>INF</code>/<code>NAN</code>.</td>&#10;</tr>&#10;<tr>&#10;<td>none</td>&#10;<td>Shortest round-trip representation: the formatted value, when parsed back into the same floating-point type, reproduces the input bit for bit.</td>&#10;</tr>&#10;</tbody>&#10;</table>

**Strings and characters:**

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>s</code></td>&#10;<td>Plain string output. Default for string types and for <code>bool</code> (which is rendered as <code>true</code> or <code>false</code>).</td>&#10;</tr>&#10;<tr>&#10;<td><code>c</code></td>&#10;<td>Character output. Default for character types. Not allowed for <code>bool</code>.</td>&#10;</tr>&#10;<tr>&#10;<td><code>?</code></td>&#10;<td>Debug output: the value is wrapped in single quotes (characters) or double quotes (strings), and non-printable, non-ASCII, and special characters are escaped using C-style escape sequences such as <code>\n</code>, <code>\t</code>, <code>\"</code>, and <code>\u{...}</code>.</td>&#10;</tr>&#10;<tr>&#10;<td>none</td>&#10;<td>Same as <code>s</code> for strings and <code>bool</code>, and as <code>c</code> for characters.</td>&#10;</tr>&#10;</tbody>&#10;</table>

<pre><code class="language-c++">fmt::format("{}",   "tab\there");  // Result contains a literal tab character.&#10;fmt::format("{:?}", "tab\there");  // Result: "\"tab\\there\""&#10;</code></pre>

**Pointers:**

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Effect</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>p</code></td>&#10;<td>Hexadecimal address prefixed by <code>0x</code>. Default for pointer types.</td>&#10;</tr>&#10;<tr>&#10;<td>none</td>&#10;<td>Same as <code>p</code>.</td>&#10;</tr>&#10;</tbody>&#10;</table>

A C string (`char*` or `const char*`) accepts both the string
presentation types and `p`, so the same value can be formatted as either
text or an address.

## Chrono Format Specification

The format specification for chrono duration and time point types as
well as `std::tm` has the following syntax:

<span id="chrono-format-spec"></span>

<pre><code class="language-json">chrono_format_spec ::= [[<a href="#format-spec">fill</a>]<a href="#format-spec">align</a>][<a href="#format-spec">width</a>]["." <a href="#format-spec">precision</a>][chrono_specs]&#10;chrono_specs       ::= conversion_spec |&#10;                       chrono_specs (conversion_spec | literal_char)&#10;conversion_spec    ::= "%" [padding_modifier] [locale_modifier] chrono_type&#10;literal_char       ::= &lt;a character other than '{', '}' or '%'&gt;&#10;padding_modifier   ::= "-" | "_"  | "0"&#10;locale_modifier    ::= "E" | "O"&#10;chrono_type        ::= "a" | "A" | "b" | "B" | "c" | "C" | "d" | "D" | "e" |&#10;                       "F" | "g" | "G" | "h" | "H" | "I" | "j" | "m" | "M" |&#10;                       "n" | "p" | "q" | "Q" | "r" | "R" | "S" | "t" | "T" |&#10;                       "u" | "U" | "V" | "w" | "W" | "x" | "X" | "y" | "Y" |&#10;                       "z" | "Z" | "%"</code>&#10;</pre>

Literal chars are copied unchanged to the output. Precision is valid
only for `std::chrono::duration` types with a floating-point
representation type.

The available presentation types (*chrono_type*) are:

<table>&#10;<tbody><tr>&#10;  <th>Type</th>&#10;  <th>Meaning</th>&#10;</tr>&#10;<tr>&#10;  <td><code>'a'</code></td>&#10;  <td>&#10;    The abbreviated weekday name, e.g. "Sat". If the value does not contain a&#10;    valid weekday, an exception of type <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'A'</code></td>&#10;  <td>&#10;    The full weekday name, e.g. "Saturday". If the value does not contain a&#10;    valid weekday, an exception of type <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'b'</code></td>&#10;  <td>&#10;    The abbreviated month name, e.g. "Nov". If the value does not contain a&#10;    valid month, an exception of type <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'B'</code></td>&#10;  <td>&#10;    The full month name, e.g. "November". If the value does not contain a valid&#10;    month, an exception of type <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'c'</code></td>&#10;  <td>&#10;    The date and time representation, e.g. "Sat Nov 12 22:04:00 1955". The&#10;    modified command <code>%Ec</code> produces the locale's alternate date and&#10;    time representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'C'</code></td>&#10;  <td>&#10;    The year divided by 100 using floored division, e.g. "19". If the result&#10;    is a single decimal digit, it is prefixed with 0. The modified command&#10;    <code>%EC</code> produces the locale's alternative representation of the&#10;    century.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'d'</code></td>&#10;  <td>&#10;    The day of month as a decimal number. If the result is a single decimal&#10;    digit, it is prefixed with 0. The modified command <code>%Od</code>&#10;    produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'D'</code></td>&#10;  <td>Equivalent to <code>%m/%d/%y</code>, e.g. "11/12/55".</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'e'</code></td>&#10;  <td>&#10;    The day of month as a decimal number. If the result is a single decimal&#10;    digit, it is prefixed with a space. The modified command <code>%Oe</code>&#10;    produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'F'</code></td>&#10;  <td>Equivalent to <code>%Y-%m-%d</code>, e.g. "1955-11-12".</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'g'</code></td>&#10;  <td>&#10;    The last two decimal digits of the ISO week-based year. If the result is a&#10;    single digit it is prefixed by 0.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'G'</code></td>&#10;  <td>&#10;    The ISO week-based year as a decimal number. If the result is less than&#10;    four digits it is left-padded with 0 to four digits.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'h'</code></td>&#10;  <td>Equivalent to <code>%b</code>, e.g. "Nov".</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'H'</code></td>&#10;  <td>&#10;    The hour (24-hour clock) as a decimal number. If the result is a single&#10;    digit, it is prefixed with 0. The modified command <code>%OH</code>&#10;    produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'I'</code></td>&#10;  <td>&#10;    The hour (12-hour clock) as a decimal number. If the result is a single&#10;    digit, it is prefixed with 0. The modified command <code>%OI</code>&#10;    produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'j'</code></td>&#10;  <td>&#10;    If the type being formatted is a specialization of duration, the decimal&#10;    number of days without padding. Otherwise, the day of the year as a decimal&#10;    number. Jan 1 is 001. If the result is less than three digits, it is&#10;    left-padded with 0 to three digits.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'m'</code></td>&#10;  <td>&#10;    The month as a decimal number. Jan is 01. If the result is a single digit,&#10;    it is prefixed with 0. The modified command <code>%Om</code> produces the&#10;    locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'M'</code></td>&#10;  <td>&#10;    The minute as a decimal number. If the result is a single digit, it&#10;    is prefixed with 0. The modified command <code>%OM</code> produces the&#10;    locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'n'</code></td>&#10;  <td>A new-line character.</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'p'</code></td>&#10;  <td>The AM/PM designations associated with a 12-hour clock.</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'q'</code></td>&#10;  <td>The duration's unit suffix.</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'Q'</code></td>&#10;  <td>&#10;    The duration's numeric value (as if extracted via <code>.count()</code>).&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'r'</code></td>&#10;  <td>The 12-hour clock time, e.g. "10:04:00 PM".</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'R'</code></td>&#10;  <td>Equivalent to <code>%H:%M</code>, e.g. "22:04".</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'S'</code></td>&#10;  <td>&#10;    Seconds as a decimal number. If the number of seconds is less than 10, the&#10;    result is prefixed with 0. If the precision of the input cannot be exactly&#10;    represented with seconds, then the format is a decimal floating-point number&#10;    with a fixed format and a precision matching that of the precision of the&#10;    input (or to a microseconds precision if the conversion to floating-point&#10;    decimal seconds cannot be made within 18 fractional digits). The modified&#10;    command <code>%OS</code> produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'t'</code></td>&#10;  <td>A horizontal-tab character.</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'T'</code></td>&#10;  <td>Equivalent to <code>%H:%M:%S</code>.</td>&#10;</tr>&#10;<tr>&#10;  <td><code>'u'</code></td>&#10;  <td>&#10;    The ISO weekday as a decimal number (1-7), where Monday is 1. The modified&#10;    command <code>%Ou</code> produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'U'</code></td>&#10;  <td>&#10;    The week number of the year as a decimal number. The first Sunday of the&#10;    year is the first day of week 01. Days of the same year prior to that are&#10;    in week 00. If the result is a single digit, it is prefixed with 0.&#10;    The modified command <code>%OU</code> produces the locale's alternative&#10;    representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'V'</code></td>&#10;  <td>&#10;    The ISO week-based week number as a decimal number. If the result is a&#10;    single digit, it is prefixed with 0. The modified command <code>%OV</code>&#10;    produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'w'</code></td>&#10;  <td>&#10;    The weekday as a decimal number (0-6), where Sunday is 0. The modified&#10;    command <code>%Ow</code> produces the locale's alternative representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'W'</code></td>&#10;  <td>&#10;    The week number of the year as a decimal number. The first Monday of the&#10;    year is the first day of week 01. Days of the same year prior to that are&#10;    in week 00. If the result is a single digit, it is prefixed with 0.&#10;    The modified command <code>%OW</code> produces the locale's alternative&#10;    representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'x'</code></td>&#10;  <td>&#10;    The date representation, e.g. "11/12/55". The modified command&#10;    <code>%Ex</code> produces the locale's alternate date representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'X'</code></td>&#10;  <td>&#10;    The time representation, e.g. "10:04:00". The modified command&#10;    <code>%EX</code> produces the locale's alternate time representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'y'</code></td>&#10;  <td>&#10;    The last two decimal digits of the year. If the result is a single digit&#10;    it is prefixed by 0. The modified command <code>%Oy</code> produces the&#10;    locale's alternative representation. The modified command <code>%Ey</code>&#10;    produces the locale's alternative representation of offset from&#10;    <code>%EC</code> (year only).&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'Y'</code></td>&#10;  <td>&#10;    The year as a decimal number. If the result is less than four digits it is&#10;    left-padded with 0 to four digits. The modified command <code>%EY</code>&#10;    produces the locale's alternative full year representation.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'z'</code></td>&#10;  <td>&#10;    The offset from UTC in the ISO 8601:2004 format. For example -0430 refers&#10;    to 4 hours 30 minutes behind UTC. If the offset is zero, +0000 is used.&#10;    The modified commands <code>%Ez</code> and <code>%Oz</code> insert a&#10;    <code>:</code> between the hours and minutes: -04:30. If the offset&#10;    information is not available, an exception of type&#10;    <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'Z'</code></td>&#10;  <td>&#10;    The time zone abbreviation. If the time zone abbreviation is not available,&#10;    an exception of type <code>format_error</code> is thrown.&#10;  </td>&#10;</tr>&#10;<tr>&#10;  <td><code>'%'</code></td>&#10;  <td>A % character.</td>&#10;</tr>&#10;</tbody></table>

Specifiers that have a calendaric component such as `'d'` (the day of
month) are valid only for `std::tm` and time points but not durations.

The available padding modifiers (*padding_modifier*) are:

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Meaning</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td><code>'_'</code></td>&#10;<td>Pad a numeric result with spaces.</td>&#10;</tr>&#10;<tr>&#10;<td><code>'-'</code></td>&#10;<td>Do not pad a numeric result string.</td>&#10;</tr>&#10;<tr>&#10;<td><code>'0'</code></td>&#10;<td>Pad a numeric result string with zeros.</td>&#10;</tr>&#10;</tbody>&#10;</table>

These modifiers are only supported for the `'H'`, `'I'`, `'M'`, `'S'`,
`'U'`, `'V'`, `'W'`, `'Y'`, `'d'`, `'j'` and `'m'` presentation types.

Example:

<pre><code class="language-c++">#include &lt;fmt/chrono.h&gt;&#10;&#10;auto t = std::tm();&#10;t.tm_year = 2010 - 1900;&#10;t.tm_mon = 7;&#10;t.tm_mday = 4;&#10;t.tm_hour = 12;&#10;t.tm_min = 15;&#10;t.tm_sec = 58;&#10;fmt::print("{:%Y-%m-%d %H:%M:%S}", t);&#10;// Prints: 2010-08-04 12:15:58&#10;</code></pre>

## Range Format Specification

The format specification for range types has the following syntax:

<pre><code class="language-json">range_format_spec ::= ["n"][range_type][":" range_underlying_spec]</code>&#10;</pre>

The `'n'` option formats the range without the opening and closing
brackets.

The available presentation types for `range_type` are:

<table>&#10;<thead>&#10;<tr>&#10;<th>Type</th>&#10;<th>Meaning</th>&#10;</tr>&#10;</thead>&#10;<tbody>&#10;<tr>&#10;<td>none</td>&#10;<td>Default format.</td>&#10;</tr>&#10;<tr>&#10;<td><code>'s'</code></td>&#10;<td>String format. The range is formatted as a string.</td>&#10;</tr>&#10;<tr>&#10;<td><code>'?⁠s'</code></td>&#10;<td>Debug format. The range is formatted as an escaped string.</td>&#10;</tr>&#10;</tbody>&#10;</table>

If `range_type` is `'s'` or `'?s'`, the range element type must be a
character type. The `'n'` option and `range_underlying_spec` are
mutually exclusive with `'s'` and `'?s'`.

The `range_underlying_spec` is parsed based on the formatter of the
range's element type.

By default, a range of characters or strings is printed escaped and
quoted. But if any `range_underlying_spec` is provided (even if it is
empty), then the characters or strings are printed according to the
provided specification.

Examples:

<pre><code class="language-c++">fmt::print("{}", std::vector{10, 20, 30});&#10;// Output: [10, 20, 30]&#10;fmt::print("{::#x}", std::vector{10, 20, 30});&#10;// Output: [0xa, 0x14, 0x1e]&#10;fmt::print("{}", std::vector{'h', 'e', 'l', 'l', 'o'});&#10;// Output: ['h', 'e', 'l', 'l', 'o']&#10;fmt::print("{:n}", std::vector{'h', 'e', 'l', 'l', 'o'});&#10;// Output: 'h', 'e', 'l', 'l', 'o'&#10;fmt::print("{:s}", std::vector{'h', 'e', 'l', 'l', 'o'});&#10;// Output: "hello"&#10;fmt::print("{:?s}", std::vector{'h', 'e', 'l', 'l', 'o', '\n'});&#10;// Output: "hello\n"&#10;fmt::print("{::}", std::vector{'h', 'e', 'l', 'l', 'o'});&#10;// Output: [h, e, l, l, o]&#10;fmt::print("{::d}", std::vector{'h', 'e', 'l', 'l', 'o'});&#10;// Output: [104, 101, 108, 108, 111]&#10;fmt::print("{:n:f}", std::array{std::numbers::pi, std::numbers::e});&#10;// Output: 3.141593, 2.718282&#10;</code></pre>

## A Combined Example

The example below ties together several elements introduced above —
nested replacement fields, fill characters, and centering — to draw a
fixed-width box around a message:

<pre><code class="language-c++">fmt::print(&#10;    "┌{0:─^{2}}┐\n"&#10;    "│{1: ^{2}}│\n"&#10;    "└{0:─^{2}}┘\n", "", "Hello, world!", 20);&#10;</code></pre>

Output:

<pre><code>┌────────────────────┐&#10;│   Hello, world!    │&#10;└────────────────────┘&#10;</code></pre>
