---
title: "Invoking jq"
order: 1
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/0/title">

<h2 id="invoking-jq">Invoking jq</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/0/body">

<p>jq filters run on a stream of JSON data. The input to jq is
parsed as a sequence of whitespace-separated JSON values which
are passed through the provided filter one at a time. The
output(s) of the filter are written to standard output, as a
sequence of newline-separated JSON data.</p>




<p>The simplest and most common filter (or jq program) is <code>.</code>,
which is the identity operator, copying the inputs of the jq
processor to the output stream.  Because the default behavior of
the jq processor is to read JSON texts from the input stream,
and to pretty-print outputs, the <code>.</code> program's main use is to
validate and pretty-print the inputs.  The jq programming
language is quite rich and allows for much more than just
validation and pretty-printing.</p>




<p>Note: it is important to mind the shell's quoting rules.  As a
general rule it's best to always quote (with single-quote
characters on Unix shells) the jq program, as too many characters with special
meaning to jq are also shell meta-characters.  For example, <code>jq
"foo"</code> will fail on most Unix shells because that will be the same
as <code>jq foo</code>, which will generally fail because <code>foo is not
defined</code>.  When using the Windows command shell (cmd.exe) it's
best to use double quotes around your jq program when given on the
command-line (instead of the <code>-f program-file</code> option), but then
double-quotes in the jq program need backslash escaping. When using
the Powershell (<code>powershell.exe</code>) or the Powershell Core
(<code>pwsh</code>/<code>pwsh.exe</code>), use single-quote characters around the jq
program and backslash-escaped double-quotes (<code>\"</code>) inside the jq
program.</p>




<ul>
<li>Unix shells: <code>jq '.["foo"]'</code></li>
<li>Powershell: <code>jq '.[\"foo\"]'</code></li>
<li>Windows command shell: <code>jq ".[\"foo\"]"</code></li>
</ul>




<p>Note: jq allows user-defined functions, but every jq program
must have a top-level expression.</p>




<p>You can affect how jq reads and writes its input and output
using some command-line options:</p>




<ul>
<li><code>--null-input</code> / <code>-n</code>:</li>
</ul>




<p>Don't read any input at all. Instead, the filter is run once
  using <code>null</code> as the input. This is useful when using jq as a
  simple calculator or to construct JSON data from scratch.</p>




<ul>
<li><code>--raw-input</code> / <code>-R</code>:</li>
</ul>




<p>Don't parse the input as JSON. Instead, each line of text is
  passed to the filter as a string. If combined with <code>--slurp</code>,
  then the entire input is passed to the filter as a single long
  string.</p>




<ul>
<li><code>--slurp</code> / <code>-s</code>:</li>
</ul>




<p>Instead of running the filter for each JSON object in the
  input, read the entire input stream into a large array and run
  the filter just once.</p>




<ul>
<li><code>--compact-output</code> / <code>-c</code>:</li>
</ul>




<p>By default, jq pretty-prints JSON output. Using this option
  will result in more compact output by instead putting each
  JSON object on a single line.</p>




<ul>
<li><code>--raw-output</code> / <code>-r</code>:</li>
</ul>




<p>With this option, if the filter's result is a string then it
  will be written directly to standard output rather than being
  formatted as a JSON string with quotes. This can be useful for
  making jq filters talk to non-JSON-based systems.</p>




<ul>
<li><code>--raw-output0</code>:</li>
</ul>




<p>Like <code>-r</code> but jq will print NUL instead of newline after each output.
  This can be useful when the values being output can contain newlines.
  When the output value contains NUL, jq exits with non-zero code.</p>




<ul>
<li><code>--join-output</code> / <code>-j</code>:</li>
</ul>




<p>Like <code>-r</code> but jq won't print a newline after each output.</p>




<ul>
<li><code>--ascii-output</code> / <code>-a</code>:</li>
</ul>




<p>jq usually outputs non-ASCII Unicode codepoints as UTF-8, even
  if the input specified them as escape sequences (like
  "\u03bc"). Using this option, you can force jq to produce pure
  ASCII output with every non-ASCII character replaced with the
  equivalent escape sequence.</p>




<ul>
<li><code>--sort-keys</code> / <code>-S</code>:</li>
</ul>




<p>Output the fields of each object with the keys in sorted order.</p>




<ul>
<li><code>--color-output</code> / <code>-C</code> and <code>--monochrome-output</code> / <code>-M</code>:</li>
</ul>




<p>By default, jq outputs colored JSON if writing to a
  terminal. You can force it to produce color even if writing to
  a pipe or a file using <code>-C</code>, and disable color with <code>-M</code>.
  When the <code>NO_COLOR</code> environment variable is not empty, jq disables
  colored output by default, but you can enable it by <code>-C</code>.</p>




<p>Colors can be configured with the <code>JQ_COLORS</code> environment
  variable (see below).</p>




<ul>
<li><code>--tab</code>:</li>
</ul>




<p>Use a tab for each indentation level instead of two spaces.</p>




<ul>
<li><code>--indent n</code>:</li>
</ul>




<p>Use the given number of spaces (no more than 7) for indentation.</p>




<ul>
<li><code>--unbuffered</code>:</li>
</ul>




<p>Flush the output after each JSON object is printed (useful if
  you're piping a slow data source into jq and piping jq's
  output elsewhere).</p>




<ul>
<li><code>--stream</code>:</li>
</ul>




<p>Parse the input in streaming fashion, outputting arrays of path
  and leaf values (scalars and empty arrays or empty objects).
  For example, <code>"a"</code> becomes <code>[[],"a"]</code>, and <code>[[],"a",["b"]]</code>
  becomes <code>[[0],[]]</code>, <code>[[1],"a"]</code>, and <code>[[2,0],"b"]</code>.</p>




<p>This is useful for processing very large inputs.  Use this in
  conjunction with filtering and the <code>reduce</code> and <code>foreach</code> syntax
  to reduce large inputs incrementally.</p>




<ul>
<li><code>--stream-errors</code>:</li>
</ul>




<p>Like <code>--stream</code>, but invalid JSON inputs yield array values
  where the first element is the error and the second is a path.
  For example, <code>["a",n]</code> produces <code>["Invalid literal at line 1,
  column 7",[1]]</code>.</p>




<p>Implies <code>--stream</code>.  Invalid JSON inputs produce no error values
  when <code>--stream</code> without <code>--stream-errors</code>.</p>




<ul>
<li><code>--seq</code>:</li>
</ul>




<p>Use the <code>application/json-seq</code> MIME type scheme for separating
  JSON texts in jq's input and output.  This means that an ASCII
  RS (record separator) character is printed before each value on
  output and an ASCII LF (line feed) is printed after every
  output.  Input JSON texts that fail to parse are ignored (but
  warned about), discarding all subsequent input until the next
  RS.  This mode also parses the output of jq without the <code>--seq</code>
  option.</p>




<ul>
<li><code>-f</code> / <code>--from-file</code>:</li>
</ul>




<p>Read the filter from a file rather than from a command line,
  like awk's -f option. This changes the filter argument to be
  interpreted as a filename, instead of the source of a program.</p>




<ul>
<li><code>-L directory</code> / <code>--library-path directory</code>:</li>
</ul>




<p>Prepend <code>directory</code> to the search list for modules.  If this
  option is used then no builtin search list is used.  See the
  section on modules below.</p>




<ul>
<li><code>--arg name value</code>:</li>
</ul>




<p>This option passes a value to the jq program as a predefined
  variable. If you run jq with <code>--arg foo bar</code>, then <code>$foo</code> is
  available in the program and has the value <code>"bar"</code>. Note that
  <code>value</code> will be treated as a string, so <code>--arg foo 123</code> will
  bind <code>$foo</code> to <code>"123"</code>.</p>




<p>Named arguments are also available to the jq program as
  <code>$ARGS.named</code>. When the name is not a valid identifier, this is
  the only way to access it.</p>




<ul>
<li><code>--argjson name JSON-text</code>:</li>
</ul>




<p>This option passes a JSON-encoded value to the jq program as a
  predefined variable. If you run jq with <code>--argjson foo 123</code>, then
  <code>$foo</code> is available in the program and has the value <code>123</code>.</p>




<ul>
<li><code>--slurpfile variable-name filename</code>:</li>
</ul>




<p>This option reads all the JSON texts in the named file and binds
  an array of the parsed JSON values to the given global variable.
  If you run jq with <code>--slurpfile foo bar</code>, then <code>$foo</code> is available
  in the program and has an array whose elements correspond to the
  texts in the file named <code>bar</code>.</p>




<ul>
<li><code>--rawfile variable-name filename</code>:</li>
</ul>




<p>This option reads in the named file and binds its content to the given
  global variable.  If you run jq with <code>--rawfile foo bar</code>, then <code>$foo</code> is
  available in the program and has a string whose content is set to the
  text in the file named <code>bar</code>.</p>




<ul>
<li><code>--args</code>:</li>
</ul>




<p>Remaining arguments are positional string arguments.  These are
  available to the jq program as <code>$ARGS.positional[]</code>.</p>




<ul>
<li><code>--jsonargs</code>:</li>
</ul>




<p>Remaining arguments are positional JSON text arguments.  These
  are available to the jq program as <code>$ARGS.positional[]</code>.</p>




<ul>
<li><code>--exit-status</code> / <code>-e</code>:</li>
</ul>




<p>Sets the exit status of jq to 0 if the last output value was
  neither <code>false</code> nor <code>null</code>, 1 if the last output value was
  either <code>false</code> or <code>null</code>, or 4 if no valid result was ever
  produced.  Normally jq exits with 2 if there was any usage
  problem or system error, 3 if there was a jq program compile
  error, or 0 if the jq program ran.</p>




<p>Another way to set the exit status is with the <code>halt_error</code>
  builtin function.</p>




<ul>
<li><code>--binary</code> / <code>-b</code>:</li>
</ul>




<p>Windows users using WSL, MSYS2, or Cygwin, should use this option
  when using a native jq.exe, otherwise jq will turn newlines (LFs)
  into carriage-return-then-newline (CRLF).</p>




<ul>
<li><code>--version</code> / <code>-V</code>:</li>
</ul>




<p>Output the jq version and exit with zero.</p>




<ul>
<li><code>--build-configuration</code>:</li>
</ul>




<p>Output the build configuration of jq and exit with zero.
  This output has no supported format or structure and may change
  without notice in future releases.</p>




<ul>
<li><code>--help</code> / <code>-h</code>:</li>
</ul>




<p>Output the jq help and exit with zero.</p>




<ul>
<li><code>--</code>:</li>
</ul>




<p>Terminates argument processing.  Remaining arguments are not
  interpreted as options.</p>




<ul>
<li><code>--run-tests [filename]</code>:</li>
</ul>




<p>Runs the tests in the given file or standard input.  This must
  be the last option given and does not honor all preceding
  options.  The input consists of comment lines, empty lines, and
  program lines followed by one input line, as many lines of
  output as are expected (one per output), and a terminating empty
  line.  Compilation failure tests start with a line containing
  only <code>%%FAIL</code>, then a line containing the program to compile,
  then a line containing an error message to compare to the
  actual.</p>




<p>Be warned that this option can change backwards-incompatibly.</p>

</div>


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
