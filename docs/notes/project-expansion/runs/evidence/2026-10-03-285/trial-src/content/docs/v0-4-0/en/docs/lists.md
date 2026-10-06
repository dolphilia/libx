---
title: "Lists"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Lists</h1>
<p>A list is a compound object that holds a collection of elements identified by
integer index. You can create a list by placing a sequence of comma-separated
expressions inside square brackets:</p>
<pre class="snippet">
[1, "banana", true]
</pre>

<p>Here, we&rsquo;ve created a list of three elements. Notice that the elements don&rsquo;t
have to be the same type.</p>
<h2>Accessing elements <a href="#accessing-elements" name="accessing-elements" class="header-anchor">#</a></h2>
<p>You can access an element from a list by calling the <a href="/docs/wren-trial/v0-4-0/en/docs/method-calls/#subscripts">subscript
operator</a> on it with the index of the
element you want. Like most languages, indexes start at zero:</p>
<pre class="snippet">
var trees = ["cedar", "birch", "oak", "willow"]
System.print(trees[0]) //> cedar
System.print(trees[1]) //> birch
</pre>

<p>Negative indices counts backwards from the end:</p>
<pre class="snippet">
System.print(trees[-1]) //> willow
System.print(trees[-2]) //> oak
</pre>

<p>It&rsquo;s a runtime error to pass an index outside of the bounds of the list. If you
don&rsquo;t know what those bounds are, you can find out using count:</p>
<pre class="snippet">
System.print(trees.count) //> 4
</pre>

<h2>Slices and ranges <a href="#slices-and-ranges" name="slices-and-ranges" class="header-anchor">#</a></h2>
<p>Sometimes you want to copy a chunk of elements from a list. You can do that by
passing a <a href="/docs/wren-trial/v0-4-0/en/docs/values/#ranges">range</a> to the subscript operator, like so:</p>
<pre class="snippet">
System.print(trees[1..2]) //> [birch, oak]
</pre>

<p>This returns a new list containing the elements of the original list whose
indices are within the given range. Both inclusive and exclusive ranges work
and do what you expect.</p>
<p>Negative bounds also work like they do when passing a single number, so to copy
a list, you can just do:</p>
<pre class="snippet">
trees[0..-1]
</pre>

<h2>Adding elements <a href="#adding-elements" name="adding-elements" class="header-anchor">#</a></h2>
<p>Lists are <em>mutable</em>, meaning their contents can be changed. You can swap out an
existing element in the list using the subscript setter:</p>
<pre class="snippet">
trees[1] = "spruce"
System.print(trees[1]) //> spruce
</pre>

<p>It&rsquo;s an error to set an element that&rsquo;s out of bounds. To grow a list, you can
use <code>add</code> to append a single item to the end:</p>
<pre class="snippet">
trees.add("maple")
System.print(trees.count) //> 5
</pre>

<p>You can insert a new element at a specific position using <code>insert</code>:</p>
<pre class="snippet">
trees.insert(2, "hickory")
</pre>

<p>The first argument is the index to insert at, and the second is the value to
insert. All elements following the inserted one will be pushed down to
make room for it.</p>
<p>It&rsquo;s valid to &ldquo;insert&rdquo; after the last element in the list, but only <em>right</em>
after it. Like other methods, you can use a negative index to count from the
back. Doing so counts back from the size of the list <em>after</em> it&rsquo;s grown by one:</p>
<pre class="snippet">
var letters = ["a", "b", "c"]
letters.insert(3, "d")   // OK: inserts at end.
System.print(letters)    //> [a, b, c, d]
letters.insert(-2, "e")  // Counts back from size after insert.
System.print(letters)    //> [a, b, c, e, d]
</pre>

<h2>Adding lists together <a href="#adding-lists-together" name="adding-lists-together" class="header-anchor">#</a></h2>
<p>Lists have the ability to be added together via the <code>+</code> operator. This is often known as concatenation.</p>
<pre class="snippet">
var letters = ["a", "b", "c"]
var other = ["d", "e", "f"]
var combined = letters + other
System.print(combined)  //> [a, b, c, d, e, f]
</pre>

<h2>Removing elements <a href="#removing-elements" name="removing-elements" class="header-anchor">#</a></h2>
<p>The opposite of <code>insert</code> is <code>removeAt</code>. It removes a single element from a
given position in the list. </p>
<p>To remove a specific <em>value</em> instead, use <code>remove</code>. The first value that 
matches using regular equality will be removed.</p>
<p>In both cases, all following items are shifted up to fill in the gap.</p>
<pre class="snippet">
var letters = ["a", "b", "c", "d"]
letters.removeAt(1)
System.print(letters) //> [a, c, d]
letters.remove("a")
System.print(letters) //> [c, d]
</pre>

<p>Both the <code>remove</code> and <code>removeAt</code> method return the removed item:</p>
<pre class="snippet">
System.print(letters.removeAt(1)) //> c
</pre>

<p>If <code>remove</code> couldn&rsquo;t find the value in the list, it returns null:</p>
<pre class="snippet">
System.print(letters.remove("not found")) //> null
</pre>

<p>If you want to remove everything from the list, you can clear it:</p>
<pre class="snippet">
trees.clear()
System.print(trees) //> []
</pre>

<p><br><hr>
<a class="right" href="/docs/wren-trial/v0-4-0/en/docs/maps/">Maps &rarr;</a>
<a href="/docs/wren-trial/v0-4-0/en/docs/values/">&larr; Values</a></p>
