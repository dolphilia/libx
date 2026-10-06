<div class="gnu-original-content">

<div id="How-Make-Works" class="section-level-extent">

<span id="How-make-Processes-a-Makefile"></span>

### 2.3 How `make` Processes a Makefile

<span id="index-processing-a-makefile" class="index-entry-id"></span> <span id="index-makefile_002c-how-make-processes" class="index-entry-id"></span>

By default, `make` starts with the first target (not targets whose names start with ‘`.`’ unless they also contain one or more ‘`/`’). This is called the *default goal*. (*Goals* are the targets that `make` strives ultimately to update. You can override this behavior using the command line (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Goals" class="pxref">Arguments to Specify the Goals</a>) or with the `.DEFAULT_GOAL` special variable (see <a href="/docs/gnu-make/source/v4-4-1/manual.html#Special-Variables" class="pxref">Other Special Variables</a>). <span id="index-default-goal" class="index-entry-id"></span> <span id="index-goal_002c-default" class="index-entry-id"></span> <span id="index-goal" class="index-entry-id"></span>

In the simple example of the previous section, the default goal is to update the executable program `edit`; therefore, we put that rule first.

Thus, when you give the command:

<div class="example">

[LIBX_CODE_1]

</div>

`make` reads the makefile in the current directory and begins by processing the first rule. In the example, this rule is for relinking `edit`; but before `make` can fully process this rule, it must process the rules for the files that `edit` depends on, which in this case are the object files. Each of these files is processed according to its own rule. These rules say to update each ‘`.o`’ file by compiling its source file. The recompilation must be done if the source file, or any of the header files named as prerequisites, is more recent than the object file, or if the object file does not exist.

The other rules are processed because their targets appear as prerequisites of the goal. If some other rule is not depended on by the goal (or anything it depends on, etc.), that rule is not processed, unless you tell `make` to do so (with a command such as `make clean`).

Before recompiling an object file, `make` considers updating its prerequisites, the source file and header files. This makefile does not specify anything to be done for them—the ‘`.c`’ and ‘`.h`’ files are not the targets of any rules—so `make` does nothing for these files. But `make` would update automatically generated C programs, such as those made by Bison or Yacc, by their own rules at this time.

After recompiling whichever object files need it, `make` decides whether to relink `edit`. This must be done if the file `edit` does not exist, or if any of the object files are newer than it. If an object file was just recompiled, it is now newer than `edit`, so `edit` is relinked. <span id="index-relinking" class="index-entry-id"></span>

Thus, if we change the file `insert.c` and run `make`, `make` will compile that file to update `insert.o`, and then link `edit`. If we change the file `command.h` and run `make`, `make` will recompile the object files `kbd.o`, `command.o` and `files.o` and then link the file `edit`.

------------------------------------------------------------------------

</div>

</div>
