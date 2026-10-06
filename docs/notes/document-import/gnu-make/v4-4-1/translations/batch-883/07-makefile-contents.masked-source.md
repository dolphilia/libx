<div class="gnu-original-content">

<div id="Makefiles">

<span id="Writing-Makefiles"></span>

## 3 Writing Makefiles

<span id="index-makefile_002c-how-to-write" class="index-entry-id"></span>

The information that tells `make` how to recompile a system comes from reading a data base called the *makefile*.

------------------------------------------------------------------------

</div>

<div id="Makefile-Contents" class="section-level-extent">

<span id="What-Makefiles-Contain"></span>

### 3.1 What Makefiles Contain

Makefiles contain five kinds of things: *explicit rules*, *implicit rules*, *variable definitions*, *directives*, and *comments*. Rules, variables, and directives are described at length in later chapters.

- <span id="index-rule_002c-explicit_002c-definition-of" class="index-entry-id"></span> <span id="index-explicit-rule_002c-definition-of" class="index-entry-id"></span> An *explicit rule* says when and how to remake one or more files, called the rule’s *targets*. It lists the other files that the targets depend on, called the *prerequisites* of the target, and may also give a recipe to use to create or update the targets. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Rules" class="xref">Writing Rules</a>.

- <span id="index-rule_002c-implicit_002c-definition-of" class="index-entry-id"></span> <span id="index-implicit-rule_002c-definition-of" class="index-entry-id"></span> An *implicit rule* says when and how to remake a class of files based on their names. It describes how a target may depend on a file with a name similar to the target and gives a recipe to create or update such a target. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">Using Implicit Rules</a>.

- <span id="index-variable-definition" class="index-entry-id"></span> A *variable definition* is a line that specifies a text string value for a variable that can be substituted into the text later. The simple makefile example shows a variable definition for `objects` as a list of all object files (see <a href="/docs/gnu-make/v4-4-1/en/01-guide/05-simplifying-makefiles/#Variables-Simplify" class="pxref">Variables Make Makefiles Simpler</a>).

- <span id="index-directive" class="index-entry-id"></span> A *directive* is an instruction for `make` to do something special while reading the makefile. These include:
  - Reading another makefile (see <a href="/docs/gnu-make/v4-4-1/en/01-guide/09-including-makefiles/#Include" class="pxref">Including Other Makefiles</a>).
  - Deciding (based on the values of variables) whether to use or ignore a part of the makefile (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Conditionals" class="pxref">Conditional Parts of Makefiles</a>).
  - Defining a variable from a verbatim string containing multiple lines (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Multi_002dLine" class="pxref">Defining Multi-Line Variables</a>).

- <span id="index-comments_002c-in-makefile" class="index-entry-id"></span> <span id="index-_0023-_0028comments_0029_002c-in-makefile" class="index-entry-id"></span> ‘`#`’ in a line of a makefile starts a *comment*. It and the rest of the line are ignored, except that a trailing backslash not escaped by another backslash will continue the comment across multiple lines. A line containing just a comment (with perhaps spaces before it) is effectively blank, and is ignored. If you want a literal `#`, escape it with a backslash (e.g., `\#`). Comments may appear on any line in the makefile, although they are treated specially in certain situations.

  You cannot use comments within variable references or function calls: any instance of `#` will be treated literally (rather than as the start of a comment) inside a variable reference or function call.

  Comments within a recipe are passed to the shell, just as with any other recipe text. The shell decides how to interpret it: whether or not this is a comment is up to the shell.

  Within a `define` directive, comments are not ignored during the definition of the variable, but rather kept intact in the value of the variable. When the variable is expanded they will either be treated as `make` comments or as recipe text, depending on the context in which the variable is evaluated.

------------------------------------------------------------------------

<div id="Splitting-Lines" class="subsection-level-extent">

<span id="Splitting-Long-Lines"></span>

#### 3.1.1 Splitting Long Lines

<span id="index-splitting-long-lines" class="index-entry-id"></span> <span id="index-long-lines_002c-splitting" class="index-entry-id"></span> <span id="index-backslash-_0028_005c_0029_002c-to-quote-newlines" class="index-entry-id"></span>

Makefiles use a “line-based” syntax in which the newline character is special and marks the end of a statement. GNU `make` has no limit on the length of a statement line, up to the amount of memory in your computer.

However, it is difficult to read lines which are too long to display without wrapping or scrolling. So, you can format your makefiles for readability by adding newlines into the middle of a statement: you do this by escaping the internal newlines with a backslash (`\`) character. Where we need to make a distinction we will refer to “physical lines” as a single line ending with a newline (regardless of whether it is escaped) and a “logical line” being a complete statement including all escaped newlines up to the first non-escaped newline.

The way in which backslash/newline combinations are handled depends on whether the statement is a recipe line or a non-recipe line. Handling of backslash/newline in a recipe line is discussed later (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Splitting-Recipe-Lines" class="pxref">Splitting Recipe Lines</a>).

Outside of recipe lines, backslash/newlines are converted into a single space character. Once that is done, all whitespace around the backslash/newline is condensed into a single space: this includes all whitespace preceding the backslash, all whitespace at the beginning of the line after the backslash/newline, and any consecutive backslash/newline combinations.

If the `.POSIX` special target is defined then backslash/newline handling is modified slightly to conform to POSIX.2: first, whitespace preceding a backslash is not removed and second, consecutive backslash/newlines are not condensed.

<span id="Splitting-Without-Adding-Whitespace"></span>

#### Splitting Without Adding Whitespace

<span id="index-whitespace_002c-avoiding-on-line-split" class="index-entry-id"></span> <span id="index-removing-whitespace-from-split-lines" class="index-entry-id"></span>

If you need to split a line but do *not* want any whitespace added, you can utilize a subtle trick: replace your backslash/newline pairs with the three characters dollar sign, backslash, and newline:

<div class="example">

[LIBX_CODE_1]

</div>

After `make` removes the backslash/newline and condenses the following line into a single space, this is equivalent to:

<div class="example">

[LIBX_CODE_2]

</div>

Then `make` will perform variable expansion. The variable reference ‘`$ `’ refers to a variable with the one-character name “ ” (space) which does not exist, and so expands to the empty string, giving a final assignment which is the equivalent of:

<div class="example">

[LIBX_CODE_3]

</div>

------------------------------------------------------------------------

</div>

</div>

</div>
