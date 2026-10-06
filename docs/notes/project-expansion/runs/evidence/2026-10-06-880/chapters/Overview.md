<div id="Overview" class="chapter-level-extent">

## 1 Overview of `make`

The `make` utility automatically determines which pieces of a large program need to be recompiled, and issues commands to recompile them. This manual describes GNU `make`, which was implemented by Richard Stallman and Roland McGrath. Development since Version 3.76 has been handled by Paul D. Smith.

GNU `make` conforms to section 6.2 of IEEE Standard 1003.2-1992 (POSIX.2). <span id="index-POSIX" class="index-entry-id"></span> <span id="index-IEEE-Standard-1003_002e2" class="index-entry-id"></span> <span id="index-standards-conformance" class="index-entry-id"></span>

Our examples show C programs, since they are most common, but you can use `make` with any programming language whose compiler can be run with a shell command. Indeed, `make` is not limited to programs. You can use it to describe any task where some files must be updated automatically from others whenever the others change.

------------------------------------------------------------------------

<span id="Preparing" class="node"></span>

### Preparing and Running Make

To prepare to use `make`, you must write a file called the *makefile* that describes the relationships among files in your program and provides commands for updating each file. In a program, typically, the executable file is updated from object files, which are in turn made by compiling source files.

Once a suitable makefile exists, each time you change some source files, this simple shell command:

<div class="example">

    make

</div>

suffices to perform all necessary recompilations. The `make` program uses the makefile data base and the last-modification times of the files to decide which of the files need to be updated. For each of those files, it issues the recipes recorded in the data base.

You can provide command line arguments to `make` to control which files should be recompiled, or how. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Running" class="xref">How to Run <code class="code">make</code></a>.

------------------------------------------------------------------------

<div id="Reading" class="section-level-extent">

### 1.1 How to Read This Manual

If you are new to `make`, or are looking for a general introduction, read the first few sections of each chapter, skipping the later sections. In each chapter, the first few sections contain introductory or general information and the later sections contain specialized or technical information. The exception is the second chapter, <a href="/docs/gnu-make/source/v4-4-1/manual.html#Introduction" class="ref">An Introduction to Makefiles</a>, all of which is introductory.

If you are familiar with other `make` programs, see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Features" class="ref">Features of GNU <code class="code">make</code></a>, which lists the enhancements GNU `make` has, and <a href="/docs/gnu-make/source/v4-4-1/manual.html#Missing" class="ref">Incompatibilities and Missing Features</a>, which explains the few things GNU `make` lacks that others have.

For a quick summary, see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Options-Summary" class="ref">Summary of Options</a>, <a href="/docs/gnu-make/source/v4-4-1/manual.html#Quick-Reference" class="ref">Quick Reference</a>, and <a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Targets" class="ref">Special Built-in Target Names</a>.

------------------------------------------------------------------------

</div>

<div id="Bugs" class="section-level-extent">

### 1.2 Problems and Bugs

<span id="index-reporting-bugs" class="index-entry-id"></span> <span id="index-bugs_002c-reporting" class="index-entry-id"></span> <span id="index-problems-and-bugs_002c-reporting" class="index-entry-id"></span>

If you have problems with GNU `make` or think you’ve found a bug, please report it to the developers; we cannot promise to do anything but we might well want to fix it.

Before reporting a bug, make sure you’ve actually found a real bug. Carefully reread the documentation and see if it really says you can do what you’re trying to do. If it’s not clear whether you should be able to do something or not, report that too; it’s a bug in the documentation!

Before reporting a bug or trying to fix it yourself, try to isolate it to the smallest possible makefile that reproduces the problem. Then send us the makefile and the exact results `make` gave you, including any error or warning messages. Please don’t paraphrase these messages: it’s best to cut and paste them into your report. When generating this small makefile, be sure to not use any non-free or unusual tools in your recipes: you can almost always emulate what such a tool would do with simple shell commands. Finally, be sure to explain what you expected to occur; this will help us decide whether the problem was really in the documentation.

Once you have a precise problem you can report it in one of two ways. Either send electronic mail to:

<div class="example">

        bug-make@gnu.org

</div>

or use our Web-based project management tool, at:

<div class="example">

        https://savannah.gnu.org/projects/make/

</div>

In addition to the information above, please be careful to include the version number of `make` you are using. You can get this information with the command ‘`make --version`’. Be sure also to include the type of machine and operating system you are using. One way to obtain this information is by looking at the final lines of output from the command ‘`make --help`’.

If you have a code change you’d like to submit, see the `README` file section “Submitting Patches” for information.

------------------------------------------------------------------------

</div>

</div>
