<div class="gnu-original-content">

<div id="Combine-By-Prerequisite" class="section-level-extent">

<span id="Another-Style-of-Makefile"></span>

### 2.6 Another Style of Makefile

<span id="index-combining-rules-by-prerequisite" class="index-entry-id"></span>

When the objects of a makefile are created only by implicit rules, an alternative style of makefile is possible. In this style of makefile, you group entries by their prerequisites instead of by their targets. Here is what one looks like:

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)

    $(objects) : defs.h
    kbd.o command.o files.o : command.h
    display.o insert.o search.o files.o : buffer.h

</div>

</div>

Here `defs.h` is given as a prerequisite of all the object files; `command.h` and `buffer.h` are prerequisites of the specific object files listed for them.

Whether this is better is a matter of taste: it is more compact, but some people dislike it because they find it clearer to put all the information about each target in one place.

------------------------------------------------------------------------

</div>

<div id="Cleanup" class="section-level-extent">

<span id="Rules-for-Cleaning-the-Directory"></span>

### 2.7 Rules for Cleaning the Directory

<span id="index-cleaning-up" class="index-entry-id"></span> <span id="index-removing_002c-to-clean-up" class="index-entry-id"></span>

Compiling a program is not the only thing you might want to write rules for. Makefiles commonly tell how to do a few other things besides compiling a program: for example, how to delete all the object files and executables so that the directory is ‘`clean`’.

<span id="index-clean-target-1" class="index-entry-id"></span>

Here is how we could write a `make` rule for cleaning our example editor:

<div class="example">

<div class="group">

    clean:
            rm edit $(objects)

</div>

</div>

In practice, we might want to write the rule in a somewhat more complicated manner to handle unanticipated situations. We would do this:

<div class="example">

<div class="group">

    .PHONY : clean
    clean :
            -rm edit $(objects)

</div>

</div>

This prevents `make` from getting confused by an actual file called `clean` and causes it to continue in spite of errors from `rm`. (See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="ref">Phony Targets</a>, and <a href="/docs/gnu-make/source/v4-4-1/manual.html#Errors" class="ref">Errors in Recipes</a>.)

A rule such as this should not be placed at the beginning of the makefile, because we do not want it to run by default! Thus, in the example makefile, we want the rule for `edit`, which recompiles the editor, to remain the default goal.

Since `clean` is not a prerequisite of `edit`, this rule will not run at all if we give the command ‘`make`’ with no arguments. In order to make the rule run, we have to type ‘`make clean`’. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Running" class="xref">How to Run <code class="code">make</code></a>.

------------------------------------------------------------------------

</div>

</div>
