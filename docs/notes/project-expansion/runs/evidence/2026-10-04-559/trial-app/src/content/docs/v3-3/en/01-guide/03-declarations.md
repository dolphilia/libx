---
title: "Declarations — isolated fragment"
licenseSource: "gperf-guide"
---

This is an isolated conversion trial, not a selected or published project.

<div class="gperf-original">
<H4><A NAME="SEC9" HREF="/docs/gperf-trial/v3-3/en/01-guide/01-full-guide/#TOC9">4.1.1.2  Gperf Declarations</A></H4>

<P>
The declaration section can contain <CODE>gperf</CODE> declarations.  They
influence the way <CODE>gperf</CODE> works, like command line options do.
In fact, every such declaration is equivalent to a command line option.
There are three forms of declarations:

</P>

<OL>
<LI>

Declarations without argument, like <SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>.

<LI>

Declarations with an argument, like <SAMP>&lsquo;%switch=<VAR>count</VAR>&rsquo;</SAMP>.

<LI>

Declarations of names of entities in the output file, like
<SAMP>&lsquo;%define lookup-function-name <VAR>name</VAR>&rsquo;</SAMP>.
</OL>

<P>
When a declaration is given both in the input file and as a command line
option, the command-line option's value prevails.

</P>
<P>
The following <CODE>gperf</CODE> declarations are available.

</P>
<DL COMPACT>

<DT><SAMP>&lsquo;%delimiters=<VAR>delimiter-list</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX9"></A>
Allows you to provide a string containing delimiters used to
separate keywords from their attributes.  The default is ",".  This
option is essential if you want to use keywords that have embedded
commas or newlines.

<DT><SAMP>&lsquo;%struct-type&rsquo;</SAMP>
<DD>
<A NAME="IDX10"></A>
Allows you to include a <CODE>struct</CODE> type declaration for generated
code; see above for an example.

<DT><SAMP>&lsquo;%ignore-case&rsquo;</SAMP>
<DD>
<A NAME="IDX11"></A>
Consider upper and lower case ASCII characters as equivalent.  The string
comparison will use a case insignificant character comparison.  Note that
locale dependent case mappings are ignored.

<DT><SAMP>&lsquo;%language=<VAR>language-name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX12"></A>
Instructs <CODE>gperf</CODE> to generate code in the language specified by the
option's argument.  Languages handled are currently:

<DL COMPACT>

<DT><SAMP>&lsquo;KR-C&rsquo;</SAMP>
<DD>
Old-style K&#38;R C.  This language is understood by old-style C compilers and
ANSI C compilers, but ANSI C compilers may flag warnings (or even errors)
because of lacking <SAMP>&lsquo;const&rsquo;</SAMP>.

<DT><SAMP>&lsquo;C&rsquo;</SAMP>
<DD>
Common C.  This language is understood by ANSI C compilers, and also by
old-style C compilers, provided that you <CODE>#define const</CODE> to empty
for compilers which don't know about this keyword.

<DT><SAMP>&lsquo;ANSI-C&rsquo;</SAMP>
<DD>
ANSI C.  This language is understood by ANSI C (C89, ISO C90) compilers,
ISO C99 compilers, and C++ compilers.

<DT><SAMP>&lsquo;C++&rsquo;</SAMP>
<DD>
C++.  This language is understood by C++ compilers.
</DL>

The default is ANSI-C.

<DT><SAMP>&lsquo;%define slot-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX13"></A>
This declaration is only useful when option <SAMP>&lsquo;-t&rsquo;</SAMP> (or, equivalently, the
<SAMP>&lsquo;%struct-type&rsquo;</SAMP> declaration) has been given.
By default, the program assumes the structure component identifier for
the keyword is <SAMP>&lsquo;name&rsquo;</SAMP>.  This option allows an arbitrary choice of
identifier for this component, although it still must occur as the first
field in your supplied <CODE>struct</CODE>.

<DT><SAMP>&lsquo;%define initializer-suffix <VAR>initializers</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX14"></A>
This declaration is only useful when option <SAMP>&lsquo;-t&rsquo;</SAMP> (or, equivalently, the
<SAMP>&lsquo;%struct-type&rsquo;</SAMP> declaration) has been given.
It permits to specify initializers for the structure members following
<VAR>slot-name</VAR> in empty hash table entries.  The list of initializers
should start with a comma.  By default, the emitted code will
zero-initialize structure members following <VAR>slot-name</VAR>.

<DT><SAMP>&lsquo;%define hash-function-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX15"></A>
Allows you to specify the name for the generated hash function.  Default
name is <SAMP>&lsquo;hash&rsquo;</SAMP>.  This option permits the use of two hash tables in
the same file.

<DT><SAMP>&lsquo;%define lookup-function-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX16"></A>
Allows you to specify the name for the generated lookup function.
Default name is <SAMP>&lsquo;in_word_set&rsquo;</SAMP>.  This option permits multiple
generated hash functions to be used in the same application.

<DT><SAMP>&lsquo;%define class-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX17"></A>
This option is only useful when option <SAMP>&lsquo;-L C++&rsquo;</SAMP> (or, equivalently,
the <SAMP>&lsquo;%language=C++&rsquo;</SAMP> declaration) has been given.  It
allows you to specify the name of generated C++ class.  Default name is
<CODE>Perfect_Hash</CODE>.

<DT><SAMP>&lsquo;%7bit&rsquo;</SAMP>
<DD>
<A NAME="IDX18"></A>
This option specifies that all strings that will be passed as arguments
to the generated hash function and the generated lookup function will
solely consist of 7-bit ASCII characters (bytes in the range 0..127).
(Note that the ANSI C functions <CODE>isalnum</CODE> and <CODE>isgraph</CODE> do
<EM>not</EM> guarantee that a byte is in this range.  Only an explicit
test like <SAMP>&lsquo;c &#62;= 'A' &#38;&#38; c &#60;= 'Z'&rsquo;</SAMP> guarantees this.)

<DT><SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>
<DD>
<A NAME="IDX19"></A>
Compare keyword lengths before trying a string comparison.  This option
is mandatory for binary comparisons (see section <A HREF="/docs/gperf-trial/v3-3/en/01-guide/01-full-guide/#SEC15">4.3  Use of NUL bytes</A>).  It also might
cut down on the number of string comparisons made during the lookup, since
keywords with different lengths are never compared via <CODE>strcmp</CODE>.
However, using <SAMP>&lsquo;%compare-lengths&rsquo;</SAMP> might greatly increase the size of the
generated C code if the lookup table range is large (which implies that
the switch option <SAMP>&lsquo;-S&rsquo;</SAMP> or <SAMP>&lsquo;%switch&rsquo;</SAMP> is not enabled), since the length
table contains as many elements as there are entries in the lookup table.

<DT><SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>
<DD>
<A NAME="IDX20"></A>
Generates C code that uses the <CODE>strncmp</CODE> function to perform
string comparisons.  The default action is to use <CODE>strcmp</CODE>.

<DT><SAMP>&lsquo;%readonly-tables&rsquo;</SAMP>
<DD>
<A NAME="IDX21"></A>
Makes the contents of all generated lookup tables constant, i.e.,
“readonly”.  Many compilers can generate more efficient code for this
by putting the tables in readonly memory.

<DT><SAMP>&lsquo;%enum&rsquo;</SAMP>
<DD>
<A NAME="IDX22"></A>
Define constant values using an enum local to the lookup function rather
than with #defines.  This also means that different lookup functions can
reside in the same file.  Thanks to James Clark <CODE>&#60;jjc@ai.mit.edu&#62;</CODE>.

<DT><SAMP>&lsquo;%includes&rsquo;</SAMP>
<DD>
<A NAME="IDX23"></A>
Include the necessary system include file, <CODE>&#60;string.h&#62;</CODE>, at the
beginning of the code.  By default, this is not done; the user must
include this header file himself to allow compilation of the code.

<DT><SAMP>&lsquo;%global-table&rsquo;</SAMP>
<DD>
<A NAME="IDX24"></A>
Generate the static table of keywords as a static global variable,
rather than hiding it inside of the lookup function (which is the
default behavior).

<DT><SAMP>&lsquo;%pic&rsquo;</SAMP>
<DD>
<A NAME="IDX25"></A>
Optimize the generated table for inclusion in shared libraries.  This
reduces the startup time of programs using a shared library containing
the generated code.  If the <SAMP>&lsquo;%struct-type&rsquo;</SAMP> declaration (or,
equivalently, the option <SAMP>&lsquo;-t&rsquo;</SAMP>) is also given, the first field of the
user-defined struct must be of type <SAMP>&lsquo;int&rsquo;</SAMP>, not <SAMP>&lsquo;char *&rsquo;</SAMP>, because
it will contain offsets into the string pool instead of actual strings.
To convert such an offset to a string, you can use the expression
<SAMP>&lsquo;stringpool + <VAR>o</VAR>&rsquo;</SAMP>, where <VAR>o</VAR> is the offset.  The string pool
name can be changed through the <SAMP>&lsquo;%define string-pool-name&rsquo;</SAMP> declaration.

<DT><SAMP>&lsquo;%define string-pool-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX26"></A>
Allows you to specify the name of the generated string pool created by
the declaration <SAMP>&lsquo;%pic&rsquo;</SAMP> (or, equivalently, the option <SAMP>&lsquo;-P&rsquo;</SAMP>).
The default name is <SAMP>&lsquo;stringpool&rsquo;</SAMP>.  This declaration permits the use of
two hash tables in the same file, with <SAMP>&lsquo;%pic&rsquo;</SAMP> and even when the
<SAMP>&lsquo;%global-table&rsquo;</SAMP> declaration (or, equivalently, the option <SAMP>&lsquo;-G&rsquo;</SAMP>)
is given.

<DT><SAMP>&lsquo;%null-strings&rsquo;</SAMP>
<DD>
<A NAME="IDX27"></A>
Use NULL strings instead of empty strings for empty keyword table entries.
This reduces the startup time of programs using a shared library containing
the generated code (but not as much as the declaration <SAMP>&lsquo;%pic&rsquo;</SAMP>), at the
expense of one more test-and-branch instruction at run time.

<DT><SAMP>&lsquo;%define constants-prefix <VAR>prefix</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX28"></A>
Allows you to specify a prefix for the constants <CODE>TOTAL_KEYWORDS</CODE>,
<CODE>MIN_WORD_LENGTH</CODE>, <CODE>MAX_WORD_LENGTH</CODE>, and so on.  This option
permits the use of two hash tables in the same file, even when the option
<SAMP>&lsquo;-E&rsquo;</SAMP> (or, equivalently, the <SAMP>&lsquo;%enum&rsquo;</SAMP> declaration) is not given or
the option <SAMP>&lsquo;-G&rsquo;</SAMP> (or, equivalently, the <SAMP>&lsquo;%global-table&rsquo;</SAMP> declaration)
is given.

<DT><SAMP>&lsquo;%define word-array-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX29"></A>
Allows you to specify the name for the generated array containing the
hash table.  Default name is <SAMP>&lsquo;wordlist&rsquo;</SAMP>.  This option permits the
use of two hash tables in the same file, even when the option <SAMP>&lsquo;-G&rsquo;</SAMP>
(or, equivalently, the <SAMP>&lsquo;%global-table&rsquo;</SAMP> declaration) is given.

<DT><SAMP>&lsquo;%define length-table-name <VAR>name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX30"></A>
Allows you to specify the name for the generated array containing the
length table.  Default name is <SAMP>&lsquo;lengthtable&rsquo;</SAMP>.  This option permits the
use of two length tables in the same file, even when the option <SAMP>&lsquo;-G&rsquo;</SAMP>
(or, equivalently, the <SAMP>&lsquo;%global-table&rsquo;</SAMP> declaration) is given.

<DT><SAMP>&lsquo;%switch=<VAR>count</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX31"></A>
Causes the generated C code to use a <CODE>switch</CODE> statement scheme,
rather than an array lookup table.  This can lead to a reduction in both
time and space requirements for some input files.  The argument to this
option determines how many <CODE>switch</CODE> statements are generated.  A
value of 1 generates 1 <CODE>switch</CODE> containing all the elements, a
value of 2 generates 2 tables with 1/2 the elements in each
<CODE>switch</CODE>, etc.  This is useful since many C compilers cannot
correctly generate code for large <CODE>switch</CODE> statements.  This option
was inspired in part by Keith Bostic's original C program.

<DT><SAMP>&lsquo;%omit-struct-type&rsquo;</SAMP>
<DD>
<A NAME="IDX32"></A>
Prevents the transfer of the type declaration to the output file.  Use
this option if the type is already defined elsewhere.
</DL>



<H4><A NAME="SEC10" HREF="/docs/gperf-trial/v3-3/en/01-guide/01-full-guide/#TOC10">4.1.1.3  C Code Inclusion</A></H4>

<P>
<A NAME="IDX33"></A>
<A NAME="IDX34"></A>
Using a syntax similar to GNU utilities <CODE>flex</CODE> and <CODE>bison</CODE>, it
is possible to directly include C source text and comments verbatim into
the generated output file.  This is accomplished by enclosing the region
inside left-justified surrounding <SAMP>&lsquo;%{&rsquo;</SAMP>, <SAMP>&lsquo;%}&rsquo;</SAMP> pairs.  Here is
an input fragment based on the previous example that illustrates this
feature:

</P>

<PRE>
%{
#include &#60;assert.h&#62;
/* This section of code is inserted directly into the output. */
int return_month_days (struct month *months, int is_leap_year);
%}
struct month { char *name; int number; int days; int leap_days; };
%%
january,   1, 31, 31
february,  2, 28, 29
march,     3, 31, 31
...
</PRE>




</div>
