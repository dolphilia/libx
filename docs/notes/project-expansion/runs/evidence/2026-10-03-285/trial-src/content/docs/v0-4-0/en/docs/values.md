---
title: "Values"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Values</h1>
<p>Values are the built-in atomic object types that all other objects are composed
of. They can be created through <em>literals</em>, expressions that evaluate to a
value. All values are <em>immutable</em>&mdash;once created, they do not change. The
number <code>3</code> is always the number <code>3</code>. The string <code>"frozen"</code> can never have its
character array modified in place.</p>
<h2>Booleans <a href="#booleans" name="booleans" class="header-anchor">#</a></h2>
<p>A boolean value represents truth or falsehood. There are two boolean literals,
<code>true</code> and <code>false</code>. Their class is <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/bool/">Bool</a>.</p>
<h2>Numbers <a href="#numbers" name="numbers" class="header-anchor">#</a></h2>
<p>Like other scripting languages, Wren has a single numeric type:
double-precision floating point. Number literals look like you expect coming
from other languages:</p>
<pre class="snippet">
0
1234
-5678
3.14159
1.0
-12.34
0.0314159e02
0.0314159e+02
314.159e-02
0xcaffe2
</pre>

<p>Numbers are instances of the <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/num/">Num</a> class.</p>
<h2>Strings <a href="#strings" name="strings" class="header-anchor">#</a></h2>
<p>A string is an array of bytes. Typically, they store characters encoded in
UTF-8, but you can put any byte values in there, even zero or invalid UTF-8
sequences. (You might have some trouble <em>printing</em> the latter to your terminal,
though.)</p>
<p>String literals are surrounded in double quotes:</p>
<pre class="snippet">
"hi there"
</pre>

<p>They can also span multiple lines:</p>
<pre class="snippet">
"hi
there,
again"
</pre>

<h3>Escaping <a href="#escaping" name="escaping" class="header-anchor">#</a></h3>
<p>A handful of escape characters are supported:</p>
<pre class="snippet">
"\0" // The NUL byte: 0.
"\"" // A double quote character.
"\\" // A backslash.
"\%" // A percent sign.
"\a" // Alarm beep. (Who uses this?)
"\b" // Backspace.
"\e" // ESC character.
"\f" // Formfeed.
"\n" // Newline.
"\r" // Carriage return.
"\t" // Tab.
"\v" // Vertical tab.


"\x48"        // Unencoded byte     (2 hex digits)
"\u0041"      // Unicode code point (4 hex digits)
"\U0001F64A"  // Unicode code point (8 hex digits)
</pre>

<p>A <code>\x</code> followed by two hex digits specifies a single unencoded byte:</p>
<pre class="snippet">
System.print("\x48\x69\x2e") //> Hi.
</pre>

<p>A <code>\u</code> followed by four hex digits can be used to specify a Unicode code point:</p>
<pre class="snippet">
System.print("\u0041\u0b83\u00DE") //> AஃÞ
</pre>

<p>A capital <code>\U</code> followed by <em>eight</em> hex digits allows Unicode code points outside
of the basic multilingual plane, like all-important emoji:</p>
<pre class="snippet">
System.print("\U0001F64A\U0001F680") //> 🙊🚀
</pre>

<p>Strings are instances of class <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/string/">String</a>.</p>
<h3>Interpolation <a href="#interpolation" name="interpolation" class="header-anchor">#</a></h3>
<p>String literals also allow <em>interpolation</em>. If you have a percent sign (<code>%</code>)
followed by a parenthesized expression, the expression is evaluated. The
resulting object&rsquo;s <code>toString</code> method is called and the result is inserted in the
string:</p>
<pre class="snippet">
System.print("Math %(3 + 4 * 5) is fun!") //> Math 23 is fun!
</pre>

<p>Arbitrarily complex expressions are allowed inside the parentheses:</p>
<pre class="snippet">
System.print("wow %((1..3).map {|n| n * n}.join())") //> wow 149
</pre>

<p>An interpolated expression can even contain a string literal which in turn has
its own nested interpolations, but doing that gets unreadable pretty quickly.</p>
<h3>Raw strings <a href="#raw-strings" name="raw-strings" class="header-anchor">#</a></h3>
<p>A string literal can also be created using triple quotes <code>"""</code> which is
parsed as a raw string. A raw string is no different
from any other string, it&rsquo;s just parsed in a different way.</p>
<p><strong>Raw strings do not process escapes and do not apply any interpolation</strong>.</p>
<pre class="snippet">
"""hi there"""
</pre>

<p>When a raw string spans multiple lines and a triple quote is on it&rsquo;s own line,
any whitespace on that line will be ignored. This means the opening and closing
lines are not counted as part of the string when the triple quotes are separate lines,
as long as they only contain whitespace (spaces + tabs).</p>
<pre class="snippet">
  """
    Hello world
  """
</pre>

<p>The resulting value in the string above has no newlines or trailing whitespace. 
Note the spaces in front of the Hello are preserved. </p>
<pre class="snippet">
    Hello world
</pre>

<p>A raw string will be parsed exactly as is in the file, unmodified.
This means it can contain quotes, invalid syntax, other data formats 
and so on without being modified by Wren.</p>
<pre class="snippet">
"""
  {
    "hello": "wren",
    "from" : "json"
  }
"""
</pre>

<p>One more example, embedding wren code inside a string safely.</p>
<pre class="snippet">
"""
A markdown string with embedded wren code example.

    class Example {
      construct code() {
        //
      }
    }
"""
</pre>

<h2>Ranges <a href="#ranges" name="ranges" class="header-anchor">#</a></h2>
<p>A range is a little object that represents a consecutive range of numbers. They
don&rsquo;t have their own dedicated literal syntax. Instead, the number class
implements the <code>..</code> and <code>...</code> <a href="/docs/wren-trial/v0-4-0/en/docs/method-calls/#operators">operators</a> to create them:</p>
<pre class="snippet">
3..8
</pre>

<p>This creates a range from three to eight, including eight itself. If you want a
half-inclusive range, use <code>...</code>:</p>
<pre class="snippet">
4...6
</pre>

<p>This creates a range from four to six <em>not</em> including six itself. Ranges are
commonly used for <a href="/docs/wren-trial/v0-4-0/en/docs/control-flow/#for-statements">iterating</a> over a
sequences of numbers, but are useful in other places too. You can pass them to
a <a href="/docs/wren-trial/v0-4-0/en/docs/lists/">list</a>&rsquo;s subscript operator to return a subset of the list, for
example, or on a String, the substring in that range:</p>
<pre class="snippet">
var list = ["a", "b", "c", "d", "e"]
var slice = list[1..3]
System.print(slice) //> [b, c, d]

var string = "hello wren"
var wren = string[-4..-1]
System.print(wren) //> wren
</pre>

<p>Their class is <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/range/">Range</a>.</p>
<h2>Null <a href="#null" name="null" class="header-anchor">#</a></h2>
<p>Wren has a special value <code>null</code>, which is the only instance of the class
<a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/null/">Null</a>. (Note the difference in case.) It functions a bit like <code>void</code> in some
languages: it indicates the absence of a value. If you call a method that
doesn&rsquo;t return anything and get its returned value, you get <code>null</code> back.</p>
<p><br><hr>
<a class="right" href="/docs/wren-trial/v0-4-0/en/docs/lists/">Lists &rarr;</a>
<a href="/docs/wren-trial/v0-4-0/en/docs/syntax/">&larr; Syntax</a></p>
