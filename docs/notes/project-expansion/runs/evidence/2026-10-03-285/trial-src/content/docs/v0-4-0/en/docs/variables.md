---
title: "Variables"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Variables</h1>
<p>Variables are named slots for storing values. You define a new variable in Wren
using a <code>var</code> statement, like so:</p>
<pre class="snippet">
var a = 1 + 2
</pre>

<p>This creates a new variable <code>a</code> in the current scope and initializes it with
the result of the expression following the <code>=</code>. Once a variable has been
defined, it can be accessed by name as you would expect.</p>
<pre class="snippet">
var animal = "Slow Loris"
System.print(animal) //> Slow Loris
</pre>

<h2>Scope <a href="#scope" name="scope" class="header-anchor">#</a></h2>
<p>Wren has true block scope: a variable exists from the point where it is defined
until the end of the <a href="/docs/wren-trial/v0-4-0/en/docs/syntax/#blocks">block</a> where that definition appears.</p>
<pre class="snippet">
{
  System.print(a) //! "a" doesn't exist yet.
  var a = 123
  System.print(a) //> 123
}
System.print(a) //! "a" doesn't exist anymore.
</pre>

<p>Variables defined at the top level of a script are <em>top-level</em> and are visible
to the <a href="/docs/wren-trial/v0-4-0/en/docs/modularity/">module</a> system. All other variables are <em>local</em>.
Declaring a variable in an inner scope with the same name as an outer one is
called <em>shadowing</em> and is not an error (although it&rsquo;s not something you likely
intend to do much).</p>
<pre class="snippet">
var a = "outer"
{
  var a = "inner"
  System.print(a) //> inner
}
System.print(a) //> outer
</pre>

<p>Declaring a variable with the same name in the <em>same</em> scope <em>is</em> an error.</p>
<pre class="snippet">
var a = "hi"
var a = "again" //! "a" is already declared.
</pre>

<h2>Assignment <a href="#assignment" name="assignment" class="header-anchor">#</a></h2>
<p>After a variable has been declared, you can assign to it using <code>=</code></p>
<pre class="snippet">
var a = 123
a = 234
</pre>

<p>An assignment walks up the scope stack to find where the named variable is
declared. It&rsquo;s an error to assign to a variable that isn&rsquo;t defined. Wren
doesn&rsquo;t roll with implicit variable definition.</p>
<p>When used in a larger expression, an assignment expression evaluates to the
assigned value.</p>
<pre class="snippet">
var a = "before"
System.print(a = "after") //> after
</pre>

<p>If the left-hand side is some more complex expression than a bare variable name,
then it isn&rsquo;t an assignment. Instead, it&rsquo;s calling a <a href="/docs/wren-trial/v0-4-0/en/docs/method-calls/#setters">setter method</a>.</p>
<p><br><hr>
<a class="right" href="/docs/wren-trial/v0-4-0/en/docs/functions/">Functions &rarr;</a>
<a href="/docs/wren-trial/v0-4-0/en/docs/control-flow/">&larr; Control Flow</a></p>
