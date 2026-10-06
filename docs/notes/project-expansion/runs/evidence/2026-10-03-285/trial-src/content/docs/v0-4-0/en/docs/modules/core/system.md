---
title: "System Class"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">System Class</h1>
<p>The System class is a grab-bag of functionality exposed by the VM, mostly for
use during development or debugging.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>System.<strong>clock</strong> <a href="#system.clock" name="system.clock" class="header-anchor">#</a></h3>
<p>Returns the number of seconds (including fractional seconds) since the program
was started. This is usually used for benchmarking.</p>
<h3>System.<strong>gc</strong>() <a href="#system.gc()" name="system.gc()" class="header-anchor">#</a></h3>
<p>Requests that the VM perform an immediate garbage collection to free unused
memory.</p>
<h3>System.<strong>print</strong>() <a href="#system.print()" name="system.print()" class="header-anchor">#</a></h3>
<p>Prints a single newline to the console.</p>
<h3>System.<strong>print</strong>(object) <a href="#system.print(object)" name="system.print(object)" class="header-anchor">#</a></h3>
<p>Prints <code>object</code> to the console followed by a newline. If not already a string,
the object is converted to a string by calling <code>toString</code> on it.</p>
<pre class="snippet">
System.print("I like bananas") //> I like bananas
</pre>

<h3>System.<strong>printAll</strong>(sequence) <a href="#system.printall(sequence)" name="system.printall(sequence)" class="header-anchor">#</a></h3>
<p>Iterates over <code>sequence</code> and prints each element, then prints a single newline
at the end. Each element is converted to a string by calling <code>toString</code> on it.</p>
<pre class="snippet">
System.printAll([1, [2, 3], 4]) //> 1[2, 3]4
</pre>

<h3>System.<strong>write</strong>(object) <a href="#system.write(object)" name="system.write(object)" class="header-anchor">#</a></h3>
<p>Prints a single value to the console, but does not print a newline character
afterwards. Converts the value to a string by calling <code>toString</code> on it.</p>
<pre class="snippet">
System.write(4 + 5) //> 9
</pre>

<p>In the above example, the result of <code>4 + 5</code> is printed, and then the prompt is
printed on the same line because no newline character was printed afterwards.</p>
<h3>System.<strong>writeAll</strong>(sequence) <a href="#system.writeall(sequence)" name="system.writeall(sequence)" class="header-anchor">#</a></h3>
<p>Iterates over <code>sequence</code> and prints each element, but does not print a newline
character afterwards. Each element is converted to a string by calling <code>toString</code> on it.</p>
