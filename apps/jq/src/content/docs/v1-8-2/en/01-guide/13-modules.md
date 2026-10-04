---
title: "Modules"
order: 13
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/12/title">

<h2 id="modules">Modules</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/body">

<p>jq has a library/module system.  Modules are files whose names end
in <code>.jq</code>.</p>




<p>Modules imported by a program are searched for in a default search
path (see below).  The <code>import</code> and <code>include</code> directives allow the
importer to alter this path.</p>




<p>Paths in the search path are subject to various substitutions.</p>




<p>For paths starting with <code>~/</code>, the user's home directory is
substituted for <code>~</code>.</p>




<p>For paths starting with <code>$ORIGIN/</code>, the directory where the jq
executable is located is substituted for <code>$ORIGIN</code>.</p>




<p>For paths starting with <code>./</code> or paths that are <code>.</code>, the path of
the including file is substituted for <code>.</code>.  For top-level programs
given on the command-line, the current directory is used.</p>




<p>Import directives can optionally specify a search path to which
the default is appended.</p>




<p>The default search path is the search path given to the <code>-L</code>
command-line option, else <code>["~/.jq", "$ORIGIN/../lib/jq",
"$ORIGIN/../lib"]</code>.</p>




<p>Null and empty string path elements terminate search path
processing.</p>




<p>A dependency with relative path <code>foo/bar</code> would be searched for in
<code>foo/bar.jq</code> and <code>foo/bar/bar.jq</code> in the given search path. This
is intended to allow modules to be placed in a directory along
with, for example, version control files, README files, and so on,
but also to allow for single-file modules.</p>




<p>Consecutive components with the same name are not allowed to avoid
ambiguities (e.g., <code>foo/foo</code>).</p>




<p>For example, with <code>-L$HOME/.jq</code> a module <code>foo</code> can be found in
<code>$HOME/.jq/foo.jq</code> and <code>$HOME/.jq/foo/foo.jq</code>.</p>




<p>If <code>.jq</code> exists in the user's home directory, and is a file (not a
directory), it is automatically sourced into the main program.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/0/title">

<h3 id="import-relativepathstring-as-name"><code>import RelativePathString as NAME [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/0/body">

<p>Imports a module found at the given path relative to a
directory in a search path.  A <code>.jq</code> suffix will be added to
the relative path string.  The module's symbols are prefixed
with <code>NAME::</code>.</p>




<p>The optional metadata must be a constant jq expression.  It
should be an object with keys like <code>homepage</code> and so on.  At
this time jq only uses the <code>search</code> key/value of the metadata.
The metadata is also made available to users via the
<code>modulemeta</code> builtin.</p>




<p>The <code>search</code> key in the metadata, if present, should have a
string or array value (array of strings); this is the search
path to be prefixed to the top-level search path.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/1/title">

<h3 id="include-relativepathstring"><code>include RelativePathString [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/1/body">

<p>Imports a module found at the given path relative to a
directory in a search path as if it were included in place.  A
<code>.jq</code> suffix will be added to the relative path string.  The
module's symbols are imported into the caller's namespace as
if the module's content had been included directly.</p>




<p>The optional metadata must be a constant jq expression.  It
should be an object with keys like <code>homepage</code> and so on.  At
this time jq only uses the <code>search</code> key/value of the metadata.
The metadata is also made available to users via the
<code>modulemeta</code> builtin.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/2/title">

<h3 id="import-relativepathstring-as-$name"><code>import RelativePathString as $NAME [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/2/body">

<p>Imports a JSON file found at the given path relative to a
directory in a search path.  A <code>.json</code> suffix will be added to
the relative path string.  The file's data will be available
as <code>$NAME::NAME</code>.</p>




<p>The optional metadata must be a constant jq expression.  It
should be an object with keys like <code>homepage</code> and so on.  At
this time jq only uses the <code>search</code> key/value of the metadata.
The metadata is also made available to users via the
<code>modulemeta</code> builtin.</p>




<p>The <code>search</code> key in the metadata, if present, should have a
string or array value (array of strings); this is the search
path to be prefixed to the top-level search path.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/3/title">

<h3 id="module-<metadata>"><code>module &lt;metadata&gt;;</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/3/body">

<p>This directive is entirely optional.  It's not required for
proper operation.  It serves only the purpose of providing
metadata that can be read with the <code>modulemeta</code> builtin.</p>




<p>The metadata must be a constant jq expression.  It should be
an object with keys like <code>homepage</code>.  At this time jq doesn't
use this metadata, but it is made available to users via the
<code>modulemeta</code> builtin.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/4/title">

<h3 id="modulemeta"><code>modulemeta</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/4/body">

<p>Takes a module name as input and outputs the module's metadata
as an object, with the module's imports (including metadata)
as an array value for the <code>deps</code> key and the module's defined
functions as an array value for the <code>defs</code> key.</p>




<p>Programs can use this to query a module's metadata, which they
could then use to, for example, search for, download, and
install missing dependencies.</p>

</div>


