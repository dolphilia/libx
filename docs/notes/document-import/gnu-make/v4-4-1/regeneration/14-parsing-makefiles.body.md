<div class="gnu-original-content">

<div id="Parsing-Makefiles" class="section-level-extent">

<span id="How-Makefiles-Are-Parsed"></span>

### 3.8 How Makefiles Are Parsed

<span id="index-parsing-makefiles" class="index-entry-id"></span> <span id="index-makefiles_002c-parsing" class="index-entry-id"></span>

GNU `make` parses makefiles line-by-line. Parsing proceeds using the following steps:

1.  Read in a full logical line, including backslash-escaped lines (see <a href="/docs/gnu-make/v4-4-1/en/01-guide/07-makefile-contents/#Splitting-Lines" class="pxref">Splitting Long Lines</a>).
2.  Remove comments (see <a href="/docs/gnu-make/v4-4-1/en/01-guide/07-makefile-contents/#Makefile-Contents" class="pxref">What Makefiles Contain</a>).
3.  If the line begins with the recipe prefix character and we are in a rule context, add the line to the current recipe and read the next line (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Recipe-Syntax" class="pxref">Recipe Syntax</a>).
4.  Expand elements of the line which appear in an *immediate* expansion context (see <a href="/docs/gnu-make/v4-4-1/en/01-guide/13-reading-makefiles/#Reading-Makefiles" class="pxref">How <code class="code">make</code> Reads a Makefile</a>).
5.  Scan the line for a separator character, such as ‘`:`’ or ‘`=`’, to determine whether the line is a macro assignment or a rule (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Recipe-Syntax" class="pxref">Recipe Syntax</a>).
6.  Internalize the resulting operation and read the next line.

An important consequence of this is that a macro can expand to an entire rule, *if it is one line long*. This will work:

<div class="example">

    myrule = target : ; echo built

    $(myrule)

</div>

However, this will not work because `make` does not re-split lines after it has expanded them:

<div class="example">

    define myrule
    target:
            echo built
    endef

    $(myrule)

</div>

The above makefile results in the definition of a target ‘`target`’ with prerequisites ‘`echo`’ and ‘`built`’, as if the makefile contained `target: echo built`, rather than a rule with a recipe. Newlines still present in a line after expansion is complete are ignored as normal whitespace.

In order to properly expand a multi-line macro you must use the `eval` function: this causes the `make` parser to be run on the results of the expanded macro (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Eval-Function" class="pxref">The <code class="code">eval</code> Function</a>).

------------------------------------------------------------------------

</div>

</div>
