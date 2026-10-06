<div class="commonmark-original-content">
<h3 class="definition" id="atx-headings">
<span class="number">4.2</span>ATX headings
</h3><p>An <a class="definition" href="#atx-heading" id="atx-heading">ATX heading</a>
consists of a string of characters, parsed as inline content, between an
opening sequence of 1–6 unescaped <code>#</code> characters and an optional
closing sequence of any number of unescaped <code>#</code> characters.
The opening sequence of <code>#</code> characters must be followed by spaces or tabs, or
by the end of line. The optional closing sequence of <code>#</code>s must be preceded by
spaces or tabs and may be followed by spaces or tabs only.  The opening
<code>#</code> character may be preceded by up to three spaces of indentation.  The raw
contents of the heading are stripped of leading and trailing space or tabs
before being parsed as inline content.  The heading level is equal to the number
of <code>#</code> characters in the opening sequence.</p><p>Simple headings:</p><div class="commonmark-example" id="example-62">
<div class="examplenum">
<a href="#example-62">Example 62</a>
</div>
<div class="column">
<pre><code class="language-text"># foo&#10;## foo&#10;### foo&#10;#### foo&#10;##### foo&#10;###### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h4&gt;foo&lt;/h4&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;&lt;h6&gt;foo&lt;/h6&gt;&#10;</code></pre>
</div>
</div><p>More than six <code>#</code> characters is not a heading:</p><div class="commonmark-example" id="example-63">
<div class="examplenum">
<a href="#example-63">Example 63</a>
</div>
<div class="column">
<pre><code class="language-text">####### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;####### foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>At least one space or tab is required between the <code>#</code> characters and the
heading’s contents, unless the heading is empty.  Note that many
implementations currently do not require the space.  However, the
space was required by the
<a href="http://www.aaronsw.com/2002/atx/atx.py">original ATX implementation</a>,
and it helps prevent things like the following from being parsed as
headings:</p><div class="commonmark-example" id="example-64">
<div class="examplenum">
<a href="#example-64">Example 64</a>
</div>
<div class="column">
<pre><code class="language-text">#5 bolt&#10;&#10;#hashtag&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;#5 bolt&lt;/p&gt;&#10;&lt;p&gt;#hashtag&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is not a heading, because the first <code>#</code> is escaped:</p><div class="commonmark-example" id="example-65">
<div class="examplenum">
<a href="#example-65">Example 65</a>
</div>
<div class="column">
<pre><code class="language-text">\## foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;## foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Contents are parsed as inlines:</p><div class="commonmark-example" id="example-66">
<div class="examplenum">
<a href="#example-66">Example 66</a>
</div>
<div class="column">
<pre><code class="language-text"># foo *bar* \*baz\*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo &lt;em&gt;bar&lt;/em&gt; *baz*&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Leading and trailing spaces or tabs are ignored in parsing inline content:</p><div class="commonmark-example" id="example-67">
<div class="examplenum">
<a href="#example-67">Example 67</a>
</div>
<div class="column">
<pre><code class="language-text">#                  foo                     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Up to three spaces of indentation are allowed:</p><div class="commonmark-example" id="example-68">
<div class="examplenum">
<a href="#example-68">Example 68</a>
</div>
<div class="column">
<pre><code class="language-text"> ### foo&#10;  ## foo&#10;   # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-69">
<div class="examplenum">
<a href="#example-69">Example 69</a>
</div>
<div class="column">
<pre><code class="language-text">    # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;# foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-70">
<div class="examplenum">
<a href="#example-70">Example 70</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;    # bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&#10;# bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A closing sequence of <code>#</code> characters is optional:</p><div class="commonmark-example" id="example-71">
<div class="examplenum">
<a href="#example-71">Example 71</a>
</div>
<div class="column">
<pre><code class="language-text">## foo ##&#10;  ###   bar    ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;bar&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>It need not be the same length as the opening sequence:</p><div class="commonmark-example" id="example-72">
<div class="examplenum">
<a href="#example-72">Example 72</a>
</div>
<div class="column">
<pre><code class="language-text"># foo ##################################&#10;##### foo ##&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;</code></pre>
</div>
</div><p>Spaces or tabs are allowed after the closing sequence:</p><div class="commonmark-example" id="example-73">
<div class="examplenum">
<a href="#example-73">Example 73</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ###     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>A sequence of <code>#</code> characters with anything but spaces or tabs following it
is not a closing sequence, but counts as part of the contents of the
heading:</p><div class="commonmark-example" id="example-74">
<div class="examplenum">
<a href="#example-74">Example 74</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ### b&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ### b&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>The closing sequence must be preceded by a space or tab:</p><div class="commonmark-example" id="example-75">
<div class="examplenum">
<a href="#example-75">Example 75</a>
</div>
<div class="column">
<pre><code class="language-text"># foo#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo#&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Backslash-escaped <code>#</code> characters do not count as part
of the closing sequence:</p><div class="commonmark-example" id="example-76">
<div class="examplenum">
<a href="#example-76">Example 76</a>
</div>
<div class="column">
<pre><code class="language-text">### foo \###&#10;## foo #\##&#10;# foo \#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ###&lt;/h3&gt;&#10;&lt;h2&gt;foo ###&lt;/h2&gt;&#10;&lt;h1&gt;foo #&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>ATX headings need not be separated from surrounding content by blank
lines, and they can interrupt paragraphs:</p><div class="commonmark-example" id="example-77">
<div class="examplenum">
<a href="#example-77">Example 77</a>
</div>
<div class="column">
<pre><code class="language-text">****&#10;## foo&#10;****&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-78">
<div class="examplenum">
<a href="#example-78">Example 78</a>
</div>
<div class="column">
<pre><code class="language-text">Foo bar&#10;# baz&#10;Bar foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo bar&lt;/p&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;&lt;p&gt;Bar foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ATX headings can be empty:</p><div class="commonmark-example" id="example-79">
<div class="examplenum">
<a href="#example-79">Example 79</a>
</div>
<div class="column">
<pre><code class="language-text">## &#10;#&#10;### ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;&lt;/h2&gt;&#10;&lt;h1&gt;&lt;/h1&gt;&#10;&lt;h3&gt;&lt;/h3&gt;&#10;</code></pre>
</div>
</div>
</div>
