---
title: "Range Class"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<p>A range defines a bounded range of values from a starting point to a possibly
exclusive endpoint. <a href="/docs/wren-trial/v0-4-0/en/docs/values/#ranges">Here</a> is a friendly introduction.</p>
<p>Extends <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/sequence/">Sequence</a>.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>from</strong> <a href="#from" name="from" class="header-anchor">#</a></h3>
<p>The starting point of the range. A range may be backwards, so this can be
greater than [to].</p>
<pre class="snippet">
System.print((3..5).from) //> 3
System.print((4..2).from) //> 4
</pre>

<h3><strong>to</strong> <a href="#to" name="to" class="header-anchor">#</a></h3>
<p>The endpoint of the range. If the range is inclusive, this value is included,
otherwise it is not.</p>
<pre class="snippet">
System.print((3..5).to) //> 5
System.print((4..2).to) //> 2
</pre>

<h3><strong>min</strong> <a href="#min" name="min" class="header-anchor">#</a></h3>
<p>The minimum bound of the range. Returns either <code>from</code>, or <code>to</code>, whichever is
lower.</p>
<pre class="snippet">
System.print((3..5).min) //> 3
System.print((4..2).min) //> 2
</pre>

<h3><strong>max</strong> <a href="#max" name="max" class="header-anchor">#</a></h3>
<p>The maximum bound of the range. Returns either <code>from</code>, or <code>to</code>, whichever is
greater.</p>
<pre class="snippet">
System.print((3..5).max) //> 5
System.print((4..2).max) //> 4
</pre>

<h3><strong>isInclusive</strong> <a href="#isinclusive" name="isinclusive" class="header-anchor">#</a></h3>
<p>Whether or not the range includes <code>to</code>. (<code>from</code> is always included.)</p>
<pre class="snippet">
System.print((3..5).isInclusive)   //> true
System.print((3...5).isInclusive)  //> false
</pre>

<h3><strong>iterate</strong>(iterator), <strong>iteratorValue</strong>(iterator) <a href="#iterate(iterator),-iteratorvalue(iterator)" name="iterate(iterator),-iteratorvalue(iterator)" class="header-anchor">#</a></h3>
<p>Iterates over the range. Starts at <code>from</code> and increments by one towards <code>to</code>
until the endpoint is reached.</p>
