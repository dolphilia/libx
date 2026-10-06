<div class="gnu-original-content">

<div id="Reading-Makefiles" class="section-level-extent">

<span id="How-make-Reads-a-Makefile"></span>

### 3.7 How `make` Reads a Makefile

<span id="index-reading-makefiles" class="index-entry-id"></span> <span id="index-makefile_002c-reading" class="index-entry-id"></span>

GNU `make` does its work in two distinct phases. During the first phase it reads all the makefiles, included makefiles, etc. and internalizes all the variables and their values and implicit and explicit rules, and builds a dependency graph of all the targets and their prerequisites. During the second phase, `make` uses this internalized data to determine which targets need to be updated and run the recipes necessary to update them.

It’s important to understand this two-phase approach because it has a direct impact on how variable and function expansion happens; this is often a source of some confusion when writing makefiles. Below is a summary of the different constructs that can be found in a makefile, and the phase in which expansion happens for each part of the construct.

We say that expansion is *immediate* if it happens during the first phase: `make` will expand that part of the construct as the makefile is parsed. We say that expansion is *deferred* if it is not immediate. Expansion of a deferred construct part is delayed until the expansion is used: either when it is referenced in an immediate context, or when it is needed during the second phase.

You may not be familiar with some of these constructs yet. You can reference this section as you become familiar with them, in later chapters.

<span id="Variable-Assignment"></span>

#### Variable Assignment

<span id="index-_002b_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_003f_003d_002c-expansion" class="index-entry-id"></span> <span id="index-_002b_003d_002c-expansion-1" class="index-entry-id"></span> <span id="index-_0021_003d_002c-expansion" class="index-entry-id"></span> <span id="index-define_002c-expansion" class="index-entry-id"></span>

Variable definitions are parsed as follows:

<div class="example">

    immediate = deferred
    immediate ?= deferred
    immediate := immediate
    immediate ::= immediate
    immediate :::= immediate-with-escape
    immediate += deferred or immediate
    immediate != immediate

    define immediate
      deferred
    endef

    define immediate =
      deferred
    endef

    define immediate ?=
      deferred
    endef

    define immediate :=
      immediate
    endef

    define immediate ::=
      immediate
    endef

    define immediate :::=
      immediate-with-escape
    endef

    define immediate +=
      deferred or immediate
    endef

    define immediate !=
      immediate
    endef

</div>

For the append operator ‘`+=`’, the right-hand side is considered immediate if the variable was previously set as a simple variable (‘`:=`’ or ‘`::=`’), and deferred otherwise.

For the `immediate-with-escape` operator ‘`:::=`’, the value on the right-hand side is immediately expanded but then escaped (that is, all instances of `$` in the result of the expansion are replaced with `$$`).

For the shell assignment operator ‘`!=`’, the right-hand side is evaluated immediately and handed to the shell. The result is stored in the variable named on the left, and that variable is considered a recursively expanded variable (and will thus be re-evaluated on each reference).

<span id="Conditional-Directives"></span>

#### Conditional Directives

<span id="index-ifdef_002c-expansion" class="index-entry-id"></span> <span id="index-ifeq_002c-expansion" class="index-entry-id"></span> <span id="index-ifndef_002c-expansion" class="index-entry-id"></span> <span id="index-ifneq_002c-expansion" class="index-entry-id"></span>

Conditional directives are parsed immediately. This means, for example, that automatic variables cannot be used in conditional directives, as automatic variables are not set until the recipe for that rule is invoked. If you need to use automatic variables in a conditional directive you *must* move the condition into the recipe and use shell conditional syntax instead.

<span id="Rule-Definition"></span>

#### Rule Definition

<span id="index-target_002c-expansion" class="index-entry-id"></span> <span id="index-prerequisite_002c-expansion" class="index-entry-id"></span> <span id="index-implicit-rule_002c-expansion" class="index-entry-id"></span> <span id="index-pattern-rule_002c-expansion" class="index-entry-id"></span> <span id="index-explicit-rule_002c-expansion" class="index-entry-id"></span>

A rule is always expanded the same way, regardless of the form:

<div class="example">

    immediate : immediate ; deferred
            deferred

</div>

That is, the target and prerequisite sections are expanded immediately, and the recipe used to build the target is always deferred. This is true for explicit rules, pattern rules, suffix rules, static pattern rules, and simple prerequisite definitions.

------------------------------------------------------------------------

</div>

</div>
