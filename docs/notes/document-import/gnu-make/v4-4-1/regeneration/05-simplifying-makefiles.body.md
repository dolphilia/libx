<div class="gnu-original-content">

<div id="Variables-Simplify" class="section-level-extent">

<span id="Variables-Make-Makefiles-Simpler"></span>

### 2.4 Variables Make Makefiles Simpler

<span id="index-variables" class="index-entry-id"></span> <span id="index-simplifying-with-variables" class="index-entry-id"></span>

In our example, we had to list all the object files twice in the rule for `edit` (repeated here):

<div class="example">

<div class="group">

    edit : main.o kbd.o command.o display.o \
                  insert.o search.o files.o utils.o
            cc -o edit main.o kbd.o command.o display.o \
                       insert.o search.o files.o utils.o

</div>

</div>

<span id="index-objects" class="index-entry-id"></span>

Such duplication is error-prone; if a new object file is added to the system, we might add it to one list and forget the other. We can eliminate the risk and simplify the makefile by using a variable. *Variables* allow a text string to be defined once and substituted in multiple places later (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Using-Variables" class="pxref">How to Use Variables</a>).

<span id="index-OBJECTS" class="index-entry-id"></span> <span id="index-objs" class="index-entry-id"></span> <span id="index-OBJS" class="index-entry-id"></span> <span id="index-obj" class="index-entry-id"></span> <span id="index-OBJ" class="index-entry-id"></span>

It is standard practice for every makefile to have a variable named `objects`, `OBJECTS`, `objs`, `OBJS`, `obj`, or `OBJ` which is a list of all object file names. We would define such a variable `objects` with a line like this in the makefile:

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

</div>

</div>

Then, each place we want to put a list of the object file names, we can substitute the variable’s value by writing ‘`$(objects)`’ (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Using-Variables" class="pxref">How to Use Variables</a>).

Here is how the complete simple makefile looks when you use a variable for the object files:

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)
    main.o : main.c defs.h
            cc -c main.c
    kbd.o : kbd.c defs.h command.h
            cc -c kbd.c
    command.o : command.c defs.h command.h
            cc -c command.c
    display.o : display.c defs.h buffer.h
            cc -c display.c
    insert.o : insert.c defs.h buffer.h
            cc -c insert.c
    search.o : search.c defs.h buffer.h
            cc -c search.c
    files.o : files.c defs.h buffer.h command.h
            cc -c files.c
    utils.o : utils.c defs.h
            cc -c utils.c
    clean :
            rm edit $(objects)

</div>

</div>

------------------------------------------------------------------------

</div>

<div id="make-Deduces" class="section-level-extent">

<span id="Letting-make-Deduce-the-Recipes"></span>

### 2.5 Letting `make` Deduce the Recipes

<span id="index-deducing-recipes-_0028implicit-rules_0029" class="index-entry-id"></span> <span id="index-implicit-rule_002c-introduction-to" class="index-entry-id"></span> <span id="index-rule_002c-implicit_002c-introduction-to" class="index-entry-id"></span>

It is not necessary to spell out the recipes for compiling the individual C source files, because `make` can figure them out: it has an *implicit rule* for updating a ‘`.o`’ file from a correspondingly named ‘`.c`’ file using a ‘`cc -c`’ command. For example, it will use the recipe ‘`cc -c main.c -o main.o`’ to compile `main.c` into `main.o`. We can therefore omit the recipes from the rules for the object files. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">Using Implicit Rules</a>.

When a ‘`.c`’ file is used automatically in this way, it is also automatically added to the list of prerequisites. We can therefore omit the ‘`.c`’ files from the prerequisites, provided we omit the recipe.

Here is the entire example, with both of these changes, and a variable `objects` as suggested above:

<div class="example">

<div class="group">

    objects = main.o kbd.o command.o display.o \
              insert.o search.o files.o utils.o

    edit : $(objects)
            cc -o edit $(objects)

    main.o : defs.h
    kbd.o : defs.h command.h
    command.o : defs.h command.h
    display.o : defs.h buffer.h
    insert.o : defs.h buffer.h
    search.o : defs.h buffer.h
    files.o : defs.h buffer.h command.h
    utils.o : defs.h

    .PHONY : clean
    clean :
            rm edit $(objects)

</div>

</div>

This is how we would write the makefile in actual practice. (The complications associated with ‘`clean`’ are described elsewhere. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Phony-Targets" class="ref">Phony Targets</a>, and <a href="/docs/gnu-make/source/v4-4-1/manual.html#Errors" class="ref">Errors in Recipes</a>.)

Because implicit rules are so convenient, they are important. You will see them used frequently.

------------------------------------------------------------------------

</div>

</div>
