<div class="gnu-original-content">

<div id="Makefile-Names" class="section-level-extent">

<span id="What-Name-to-Give-Your-Makefile"></span>

### 3.2 What Name to Give Your Makefile

<span id="index-makefile-name" class="index-entry-id"></span> <span id="index-name-of-makefile" class="index-entry-id"></span> <span id="index-default-makefile-name" class="index-entry-id"></span> <span id="index-file-name-of-makefile" class="index-entry-id"></span>

By default, when `make` looks for the makefile, it tries the following names, in order: `GNUmakefile`, `makefile` and `Makefile`. <span id="index-Makefile" class="index-entry-id"></span> <span id="index-GNUmakefile" class="index-entry-id"></span> <span id="index-makefile-1" class="index-entry-id"></span>

<span id="index-README" class="index-entry-id"></span>

Normally you should call your makefile either `makefile` or `Makefile`. (We recommend `Makefile` because it appears prominently near the beginning of a directory listing, right near other important files such as `README`.) The first name checked, `GNUmakefile`, is not recommended for most makefiles. You should use this name if you have a makefile that is specific to GNU `make`, and will not be understood by other versions of `make`. Other `make` programs look for `makefile` and `Makefile`, but not `GNUmakefile`.

If `make` finds none of these names, it does not use any makefile. Then you must specify a goal with a command argument, and `make` will attempt to figure out how to remake it using only its built-in implicit rules. See <a href="/docs/gnu-make/source/v4-4-1/manual.html#Implicit-Rules" class="xref">Using Implicit Rules</a>.

<span id="index-_002df" class="index-entry-id"></span> <span id="index-_002d_002dfile" class="index-entry-id"></span> <span id="index-_002d_002dmakefile" class="index-entry-id"></span>

If you want to use a nonstandard name for your makefile, you can specify the makefile name with the ‘`-f`’ or ‘`--file`’ option. The arguments ‘`-f name`’ or ‘`--file=name`’ tell `make` to read the file `name` as the makefile. If you use more than one ‘`-f`’ or ‘`--file`’ option, you can specify several makefiles. All the makefiles are effectively concatenated in the order specified. The default makefile names `GNUmakefile`, `makefile` and `Makefile` are not checked automatically if you specify ‘`-f`’ or ‘`--file`’. <span id="index-specifying-makefile-name" class="index-entry-id"></span> <span id="index-makefile-name_002c-how-to-specify" class="index-entry-id"></span> <span id="index-name-of-makefile_002c-how-to-specify" class="index-entry-id"></span> <span id="index-file-name-of-makefile_002c-how-to-specify" class="index-entry-id"></span>

------------------------------------------------------------------------

</div>

</div>
