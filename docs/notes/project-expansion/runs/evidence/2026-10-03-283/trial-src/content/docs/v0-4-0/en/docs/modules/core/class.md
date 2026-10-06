---
title: "Class Class"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<p><strong>TODO</strong></p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>name</strong> <a href="#name" name="name" class="header-anchor">#</a></h3>
<p>The name of the class.</p>
<h3><strong>supertype</strong> <a href="#supertype" name="supertype" class="header-anchor">#</a></h3>
<p>The superclass of this class.</p>
<pre class="snippet">
class Crustacean {}
class Crab is Crustacean {}

System.print(Crab.supertype) //> Crustacean
</pre>

<p>A class with no explicit superclass implicitly inherits Object:</p>
<pre class="snippet">
System.print(Crustacean.supertype) //> Object
</pre>

<p>Object forms the root of the class hierarchy and has no supertype:</p>
<pre class="snippet">
System.print(Object.supertype) //> null
</pre>
