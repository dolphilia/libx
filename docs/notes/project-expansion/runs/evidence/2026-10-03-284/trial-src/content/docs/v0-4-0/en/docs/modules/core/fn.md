---
title: "Fn Class"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Fn Class</h1>
<p>A first class function&mdash;an object that wraps an executable chunk of code.
<a href="/docs/wren-trial/v0-4-0/en/docs/functions/">Here</a> is a friendly introduction.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>Fn.<strong>new</strong>(function) <a href="#fn.new(function)" name="fn.new(function)" class="header-anchor">#</a></h3>
<p>Creates a new function from&hellip; <code>function</code>. Of course, <code>function</code> is already a
function, so this really just returns the argument. It exists mainly to let you
create a &ldquo;bare&rdquo; function when you don&rsquo;t want to immediately pass it as a <a href="/docs/wren-trial/v0-4-0/en/docs/functions/#block-arguments">block
argument</a> to some other method.</p>
<pre class="snippet">
var fn = Fn.new {
  System.print("The body")
}
</pre>

<p>It is a runtime error if <code>function</code> is not a function.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>arity</strong> <a href="#arity" name="arity" class="header-anchor">#</a></h3>
<p>The number of arguments the function requires.</p>
<pre class="snippet">
System.print(Fn.new {}.arity)             //> 0
System.print(Fn.new {|a, b, c| a }.arity) //> 3
</pre>

<h3><strong>call</strong>(args&hellip;) <a href="#call(args...)" name="call(args...)" class="header-anchor">#</a></h3>
<p>Invokes the function with the given arguments.</p>
<pre class="snippet">
var fn = Fn.new { |arg|
  System.print(arg)     //> Hello world
}

fn.call("Hello world")
</pre>

<p>It is a runtime error if the number of arguments given is less than the arity
of the function. If more arguments are given than the function&rsquo;s arity they are
ignored.</p>
