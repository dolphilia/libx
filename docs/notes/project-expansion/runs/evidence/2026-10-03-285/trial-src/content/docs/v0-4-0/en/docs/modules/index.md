---
title: "Modules"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Modules</h1>
<p>Wren comes with two kinds of modules, the core module (built-in),
and a few optional modules that the host embedding Wren can enable.</p>
<h2>Core module <a href="#core-module" name="core-module" class="header-anchor">#</a></h2>
<p>The core module is built directly into the VM and is implicitly
imported by every other module. You don&rsquo;t need to <code>import</code> anything to use it.
It contains objects and types for the language itself like <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/num/">numbers</a> and <a href="/docs/wren-trial/v0-4-0/en/docs/modules/core/string/">strings</a>.</p>
<p>Because Wren is designed for <a href="/docs/wren-trial/v0-4-0/en/docs/embedding/">embedding in applications</a>, its core
module is minimal and is focused on working with objects within Wren. For
stuff like file IO, graphics, etc., it is up to the host application to provide
interfaces for this.</p>
<h2>Optional modules <a href="#optional-modules" name="optional-modules" class="header-anchor">#</a></h2>
<p>Optional modules are available in the Wren project, but whether they are included is up to the host.
They are written in Wren and C, with no external dependencies, so including them in
your application is as easy as a simple compile flag.</p>
<p>Since they aren&rsquo;t <em>needed</em> by the VM itself to function, you can
disable some or all of them, so check if your host has them available.</p>
<p>So far there are a few optional modules:</p>
<ul>
<li><a href="/docs/wren-trial/v0-4-0/en/docs/modules/meta/">meta docs</a></li>
<li><a href="/docs/wren-trial/v0-4-0/en/docs/modules/random/">random docs</a></li>
</ul>
