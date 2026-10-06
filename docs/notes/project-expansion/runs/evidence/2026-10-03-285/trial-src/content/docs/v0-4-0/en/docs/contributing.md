---
title: "Contributing"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<h1 id="page-title">Contributing</h1>
<p>Like the bird, Wren&rsquo;s ecosystem is small but full of life. Almost everything is
under active development and there&rsquo;s lots to do. We&rsquo;d be delighted to have you
help.</p>
<p>The first thing to do is to join <a href="https://discord.gg/Kx6PxSX">the discord community</a> (or <a href="https://groups.google.com/forum/#!forum/wren-lang">the mailing list</a>) and say,
&ldquo;Hi&rdquo;. There are no strangers to Wren, just friends we haven&rsquo;t met yet.</p>
<h2>Growing the ecosystem <a href="#growing-the-ecosystem" name="growing-the-ecosystem" class="header-anchor">#</a></h2>
<p>The simplest and often most helpful way to join the Wren party is to be a Wren
<em>user</em>. Create an application that embeds Wren. Write a library or a handy
utility in Wren. Add syntax highlighting support for Wren to your favorite text
editor. Share that stuff and it will help the next Wren user to come along.</p>
<p>If you do any of the above, let us know by adding it to <a href="https://github.com/wren-lang/wren/wiki">the wiki</a>. <br />
We like to keep track of:</p>
<ul>
<li><a href="https://github.com/wren-lang/wren/wiki/Applications">Applications</a> that host Wren as a scripting language.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Modules">Modules</a> written in Wren that others can use.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Language-Bindings">Language bindings</a> that let you interact with Wren from other
  languages.</li>
<li><a href="https://github.com/wren-lang/wren/wiki/Tools">Tools and utilities</a> that make it easier to be a Wren programmer.</li>
</ul>
<h2>Contributing to Wren <a href="#contributing-to-wren" name="contributing-to-wren" class="header-anchor">#</a></h2>
<p>You&rsquo;re also more than welcome to contribute to Wren itself, both the core VM and
the command-line interpreter. The source is developed <a href="https://github.com/wren-lang/">on GitHub</a>. Our
hope is that the codebase, tests, and <a href="https://github.com/wren-lang/wren/tree/main/doc/site">documentation</a> are easy to
understand and contribute to. If they aren&rsquo;t, that&rsquo;s a bug.</p>
<p>You can learn how to build wren on the <a href="/docs/wren-trial/v0-4-0/en/docs/getting-started/#building-wren">getting started page</a>.</p>
<h3>Finding something to hack on <a href="#finding-something-to-hack-on" name="finding-something-to-hack-on" class="header-anchor">#</a></h3>
<p>Between the <a href="https://github.com/wren-lang/wren/issues">issue tracker</a> and searching for <code>TODO</code> comments in the
code, it&rsquo;s pretty easy to find something that needs doing, though we don&rsquo;t
always do a good job of writing everything down.</p>
<p>If nothing there suits your fancy, new ideas are welcome as well! If you have an
idea for a significant change or addition, please file a <a href="https://github.com/wren-lang/wren/labels/proposal">proposal</a> to discuss
it before writing lots of code. Wren tries very <em>very</em> hard to be minimal which
means often having to say &ldquo;no&rdquo; to language additions, even really cool ones.</p>
<h3>Hacking on docs <a href="#hacking-on-docs" name="hacking-on-docs" class="header-anchor">#</a></h3>
<p>The <a href="/docs/wren-trial/v0-4-0/en/docs/overview/">documentation</a> is one of the easiest&mdash;and most
important!&mdash;parts of Wren to contribute to. The source for the site is
written in <a href="http://daringfireball.net/projects/markdown/">Markdown</a> and lives under <code>doc/site</code>. A
simple Python 3 script, <code>util/generate_docs.py</code>, converts that to HTML and CSS.</p>
<pre><code>$ python util/generate_docs.py
</code></pre>
<p>This generates the site in <code>build/docs/</code>. You can run any simple static web
server from there. Python includes one:</p>
<pre><code>$ cd build/docs
$ python -m http.server
</code></pre>
<p>Running that script every time you change a line of Markdown can be slow,
so there is also a file watching version that will automatically regenerate the
docs when you edit a file:</p>
<pre><code>$ python util/generate_docs.py --watch
</code></pre>
<h3>Hacking on the VM <a href="#hacking-on-the-vm" name="hacking-on-the-vm" class="header-anchor">#</a></h3>
<p>The basic process is simple:</p>
<ol>
<li>
<p><strong>Make sure you can build and run the tests locally.</strong> It&rsquo;s good to ensure
   you&rsquo;re starting from a happy place before you poke at the code. Running the
   tests is as simple as <a href="/docs/wren-trial/v0-4-0/en/docs/getting-started/#building-wren">building the vm project</a>,
   which generates <code>bin/wren_test</code> and then running the following python 3 script:</p>
<pre><code>$ python util/test.py
</code></pre>
<p>If there are no failures, you&rsquo;re good to go.</p>
</li>
<li>
<p><strong><a href="https://help.github.com/articles/fork-a-repo/">Fork the repo</a> so you can change it locally.</strong> Please make your
   changes in separate <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow">feature branches</a> to make things a little easier.</p>
</li>
<li>
<p><strong>Change the code.</strong> Please follow the style of the surrounding code. That
   basically means <code>camelCase</code> names, <code>{</code> on the next line, keep within 80
   columns, and two spaces of indentation. If you see places where the existing
   code is inconsistent, let us know.</p>
</li>
<li>
<p><strong>Write some tests for your new functionality.</strong> They live under <code>test/</code>.
   Take a look at some existing tests to get an idea of how to define
   expectations.</p>
</li>
<li>
<p><strong>Make sure the tests all pass, both the old ones and your new ones.</strong></p>
</li>
<li>
<p><strong>Add your name and email to the <a href="https://github.com/wren-lang/wren/tree/main/AUTHORS">AUTHORS</a> file if you haven&rsquo;t already.</strong></p>
</li>
<li>
<p><strong>Send a <a href="https://github.com/wren-lang/wren/pulls">pull request</a>.</strong> Pat yourself on the back for contributing to a
   fun open source project! </p>
</li>
</ol>
<h2>Getting help <a href="#getting-help" name="getting-help" class="header-anchor">#</a></h2>
<p>If at any point you have questions, feel free to <a href="https://github.com/wren-lang/wren/issues">file an issue</a> or ask
on the <a href="https://discord.gg/Kx6PxSX">discord community</a> (or the <a href="https://groups.google.com/forum/#!forum/wren-lang">mailing list</a>). If you&rsquo;re a Redditor, try the
<a href="https://www.reddit.com/r/wren_lang/">/r/wren_lang</a> subreddit. You can also email me directly (<code>robert</code> at
<code>stuffwithstuff.com</code>) if you want something less public.</p>
