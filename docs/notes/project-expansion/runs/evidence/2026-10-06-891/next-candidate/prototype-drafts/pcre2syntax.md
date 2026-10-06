

<h2>pcre2syntax man page</h2>


<p>
Return to the <a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/index.html">PCRE2 index page</a>.
</p>


<p>
This page is part of the PCRE2 HTML documentation. It was generated
automatically from the original man page. If there is any nonsense in it,
please consult the man page, in case the conversion went wrong.
<br/>
<ul>
<li><a href="#SEC1" id="TOC1" name="TOC1">PCRE2 REGULAR EXPRESSION SYNTAX SUMMARY</a>
<li><a href="#SEC2" id="TOC2" name="TOC2">QUOTING</a>
<li><a href="#SEC3" id="TOC3" name="TOC3">BRACED ITEMS</a>
<li><a href="#SEC4" id="TOC4" name="TOC4">ESCAPED CHARACTERS</a>
<li><a href="#SEC5" id="TOC5" name="TOC5">CHARACTER TYPES</a>
<li><a href="#SEC6" id="TOC6" name="TOC6">GENERAL CATEGORY PROPERTIES FOR \p and \P</a>
<li><a href="#SEC7" id="TOC7" name="TOC7">PCRE2 SPECIAL CATEGORY PROPERTIES FOR \p and \P</a>
<li><a href="#SEC8" id="TOC8" name="TOC8">BINARY PROPERTIES FOR \p AND \P</a>
<li><a href="#SEC9" id="TOC9" name="TOC9">SCRIPT MATCHING WITH \p AND \P</a>
<li><a href="#SEC10" id="TOC10" name="TOC10">THE BIDI_CLASS PROPERTY FOR \p AND \P</a>
<li><a href="#SEC11" id="TOC11" name="TOC11">CHARACTER CLASSES</a>
<li><a href="#SEC12" id="TOC12" name="TOC12">PERL EXTENDED CHARACTER CLASSES</a>
<li><a href="#SEC13" id="TOC13" name="TOC13">QUANTIFIERS</a>
<li><a href="#SEC14" id="TOC14" name="TOC14">ANCHORS AND SIMPLE ASSERTIONS</a>
<li><a href="#SEC15" id="TOC15" name="TOC15">REPORTED MATCH POINT SETTING</a>
<li><a href="#SEC16" id="TOC16" name="TOC16">ALTERNATION</a>
<li><a href="#SEC17" id="TOC17" name="TOC17">CAPTURING</a>
<li><a href="#SEC18" id="TOC18" name="TOC18">ATOMIC GROUPS</a>
<li><a href="#SEC19" id="TOC19" name="TOC19">COMMENT</a>
<li><a href="#SEC20" id="TOC20" name="TOC20">OPTION SETTING</a>
<li><a href="#SEC21" id="TOC21" name="TOC21">NEWLINE CONVENTION</a>
<li><a href="#SEC22" id="TOC22" name="TOC22">WHAT \R MATCHES</a>
<li><a href="#SEC23" id="TOC23" name="TOC23">LOOKAHEAD AND LOOKBEHIND ASSERTIONS</a>
<li><a href="#SEC24" id="TOC24" name="TOC24">NON-ATOMIC LOOKAROUND ASSERTIONS</a>
<li><a href="#SEC25" id="TOC25" name="TOC25">SUBSTRING SCAN ASSERTION</a>
<li><a href="#SEC26" id="TOC26" name="TOC26">SCRIPT RUNS</a>
<li><a href="#SEC27" id="TOC27" name="TOC27">BACKREFERENCES</a>
<li><a href="#SEC28" id="TOC28" name="TOC28">SUBROUTINE REFERENCES (POSSIBLY RECURSIVE)</a>
<li><a href="#SEC29" id="TOC29" name="TOC29">CONDITIONAL PATTERNS</a>
<li><a href="#SEC30" id="TOC30" name="TOC30">BACKTRACKING CONTROL</a>
<li><a href="#SEC31" id="TOC31" name="TOC31">CALLOUTS</a>
<li><a href="#SEC32" id="TOC32" name="TOC32">REPLACEMENT STRINGS</a>
<li><a href="#SEC33" id="TOC33" name="TOC33">SEE ALSO</a>
<li><a href="#SEC34" id="TOC34" name="TOC34">AUTHOR</a>
<li><a href="#SEC35" id="TOC35" name="TOC35">REVISION</a>
</li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></ul>
<h3><a href="#TOC1" id="SEC1" name="SEC1">PCRE2 REGULAR EXPRESSION SYNTAX SUMMARY</a></h3>
<p>
The full syntax and semantics of the regular expression patterns that are
supported by PCRE2 are described in the
<a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/pcre2pattern.html"><b>pcre2pattern</b></a>
documentation. This document contains a quick-reference summary of the pattern
syntax followed by the syntax of replacement strings in substitution function.
The full description of the latter is in the
<a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/pcre2api.html"><b>pcre2api</b></a>
documentation.
</p>
<h3><a href="#TOC1" id="SEC2" name="SEC2">QUOTING</a></h3>
<p>
<pre><code>&#10;  \x         where x is non-alphanumeric is a literal x&#10;  \Q...\E    treat enclosed characters as literal&#10;</code></pre>
Note that white space inside \Q...\E is always treated as literal, even if
PCRE2_EXTENDED is set, causing most other white space to be ignored. Note also
that PCRE2's handling of \Q...\E has some differences from Perl's. See the
<a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/pcre2pattern.html"><b>pcre2pattern</b></a>
documentation for details.
</p>
<h3><a href="#TOC1" id="SEC3" name="SEC3">BRACED ITEMS</a></h3>
<p>
With one exception, wherever brace characters { and } are required to enclose
data for constructions such as \g{2} or \k{name}, space and/or horizontal tab
characters that follow { or precede } are allowed and are ignored. In the case
of quantifiers, they may also appear before or after the comma. The exception
is \u{...} which is not Perl-compatible and is recognized only when
PCRE2_EXTRA_ALT_BSUX is set. This is an ECMAScript compatibility feature, and
follows ECMAScript's behaviour.
</p>
<h3><a href="#TOC1" id="SEC4" name="SEC4">ESCAPED CHARACTERS</a></h3>
<p>
This table applies to ASCII and Unicode environments. An unrecognized escape
sequence causes an error.
<pre><code>&#10;  \a         alarm, that is, the BEL character (hex 07)&#10;  \cx        "control-x", where x is a non-control ASCII character&#10;  \e         escape (hex 1B)&#10;  \f         form feed (hex 0C)&#10;  \n         newline (hex 0A)&#10;  \r         carriage return (hex 0D)&#10;  \t         tab (hex 09)&#10;  \0dd       character with octal code 0dd&#10;  \ddd       character with octal code ddd, or backreference&#10;  \o{ddd..}  character with octal code ddd..&#10;  \N{U+hh..} character with Unicode code point hh.. (Unicode mode only)&#10;  \xhh       character with hex code hh&#10;  \x{hh..}   character with hex code hh..&#10;</code></pre>
\N{U+hh..} is synonymous with \x{hh..} but is not supported in environments
that use EBCDIC code (mainly IBM mainframes). Note that \N not followed by an
opening curly bracket has a different meaning (see below).
</p>
<p>
If PCRE2_ALT_BSUX or PCRE2_EXTRA_ALT_BSUX is set ("ALT_BSUX mode"), the
following are also recognized:
<pre><code>&#10;  \U         the character "U"&#10;  \uhhhh     character with hex code hhhh&#10;  \u{hh..}   character with hex code hh.. but only for EXTRA_ALT_BSUX&#10;</code></pre>
When \x is not followed by {, one or two hexadecimal digits are read,
but in ALT_BSUX mode \x must be followed by two hexadecimal digits to be
recognized as a hexadecimal escape; otherwise it matches a literal "x".
Likewise, if \u (in ALT_BSUX mode) is not followed by four hexadecimal digits
or (in EXTRA_ALT_BSUX mode) a sequence of hex digits in curly brackets, it
matches a literal "u".
</p>
<p>
Note that \0dd is always an octal code. The treatment of backslash followed by
a non-zero digit is complicated; for details see the section
<a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/pcre2pattern.html#digitsafterbackslash">"Non-printing characters"</a>
in the
<a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/pcre2pattern.html"><b>pcre2pattern</b></a>
documentation, where details of escape processing in EBCDIC environments are
also given.
</p>
<h3><a href="#TOC1" id="SEC5" name="SEC5">CHARACTER TYPES</a></h3>
<p>
<pre><code>&#10;  .          any character except newline;&#10;               in dotall mode, any character whatsoever&#10;  \C         one code unit, even in UTF mode (best avoided)&#10;  \d         a decimal digit&#10;  \D         a character that is not a decimal digit&#10;  \h         a horizontal white space character&#10;  \H         a character that is not a horizontal white space character&#10;  \N         a character that is not a newline&#10;  \p{xx}     a character with the xx property&#10;  \P{xx}     a character without the xx property&#10;  \R         a newline sequence&#10;  \s         a white space character&#10;  \S         a character that is not a white space character&#10;  \v         a vertical white space character&#10;  \V         a character that is not a vertical white space character&#10;  \w         a "word" character&#10;  \W         a "non-word" character&#10;  \X         a Unicode extended grapheme cluster&#10;</code></pre>
\C is dangerous because it may leave the current matching point in the middle
of a UTF-8 or UTF-16 character. The application can lock out the use of \C by
setting the PCRE2_NEVER_BACKSLASH_C option. It is also possible to build PCRE2
with the use of \C permanently disabled.
</p>
<p>
By default, \d, \s, and \w match only ASCII characters, even in UTF-8 mode
or in the 16-bit and 32-bit libraries. However, if locale-specific matching is
happening, \s and \w may also match characters with code points in the range
128-255. If the PCRE2_UCP option is set, the behaviour of these escape
sequences is changed to use Unicode properties and they match many more
characters, but there are some option settings that can restrict individual
sequences to matching only ASCII characters.
</p>
<p>
Property descriptions in \p and \P are matched caselessly; hyphens,
underscores, and ASCII white space characters are ignored, in accordance with
Unicode's "loose matching" rules. For example, \p{Bidi_Class=al} is the same
as \p{ bidi class = AL }.
</p>
<h3><a href="#TOC1" id="SEC6" name="SEC6">GENERAL CATEGORY PROPERTIES FOR \p and \P</a></h3>
<p>
<pre><code>&#10;  C          Other&#10;  Cc         Control&#10;  Cf         Format&#10;  Cn         Unassigned&#10;  Co         Private use&#10;  Cs         Surrogate&#10;&#10;  L          Letter&#10;  Lc         Cased letter, the union of Ll, Lu, and Lt&#10;  L&amp;         Synonym of Lc&#10;  Ll         Lower case letter&#10;  Lm         Modifier letter&#10;  Lo         Other letter&#10;  Lt         Title case letter&#10;  Lu         Upper case letter&#10;&#10;  M          Mark&#10;  Mc         Spacing mark&#10;  Me         Enclosing mark&#10;  Mn         Non-spacing mark&#10;&#10;  N          Number&#10;  Nd         Decimal number&#10;  Nl         Letter number&#10;  No         Other number&#10;&#10;  P          Punctuation&#10;  Pc         Connector punctuation&#10;  Pd         Dash punctuation&#10;  Pe         Close punctuation&#10;  Pf         Final punctuation&#10;  Pi         Initial punctuation&#10;  Po         Other punctuation&#10;  Ps         Open punctuation&#10;&#10;  S          Symbol&#10;  Sc         Currency symbol&#10;  Sk         Modifier symbol&#10;  Sm         Mathematical symbol&#10;  So         Other symbol&#10;&#10;  Z          Separator&#10;  Zl         Line separator&#10;  Zp         Paragraph separator&#10;  Zs         Space separator&#10;</code></pre>
From release 10.45, when caseless matching is set, Ll, Lu, and Lt are all
equivalent to Lc.
</p>
<h3><a href="#TOC1" id="SEC7" name="SEC7">PCRE2 SPECIAL CATEGORY PROPERTIES FOR \p and \P</a></h3>
<p>
<pre><code>&#10;  Xan        Alphanumeric: union of properties L and N&#10;  Xps        POSIX space: property Z or tab, NL, VT, FF, CR&#10;  Xsp        Perl space: property Z or tab, NL, VT, FF, CR&#10;  Xuc        Universally-named character: one that can be&#10;               represented by a Universal Character Name&#10;  Xwd        Perl word: property Xan or underscore&#10;</code></pre>
Perl and POSIX space are now the same. Perl added VT to its space character set
at release 5.18.
</p>
<h3><a href="#TOC1" id="SEC8" name="SEC8">BINARY PROPERTIES FOR \p AND \P</a></h3>
<p>
Unicode defines a number of binary properties, that is, properties whose only
values are true or false. You can obtain a list of those that are recognized by
\p and \P, along with their abbreviations, by running this command:
<pre><code>&#10;  pcre2test -LP&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC9" name="SEC9">SCRIPT MATCHING WITH \p AND \P</a></h3>
<p>
Many script names and their 4-letter abbreviations are recognized in
\p{sc:...} or \p{scx:...} items, or on their own with \p (and also \P of
course). You can obtain a list of these scripts by running this command:
<pre><code>&#10;  pcre2test -LS&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC10" name="SEC10">THE BIDI_CLASS PROPERTY FOR \p AND \P</a></h3>
<p>
<pre><code>&#10;  \p{Bidi_Class:&lt;class&gt;}   matches a character with the given class&#10;  \p{BC:&lt;class&gt;}           matches a character with the given class&#10;</code></pre>
The recognized classes are:
<pre><code>&#10;  AL          Arabic letter&#10;  AN          Arabic number&#10;  B           paragraph separator&#10;  BN          boundary neutral&#10;  CS          common separator&#10;  EN          European number&#10;  ES          European separator&#10;  ET          European terminator&#10;  FSI         first strong isolate&#10;  L           left-to-right&#10;  LRE         left-to-right embedding&#10;  LRI         left-to-right isolate&#10;  LRO         left-to-right override&#10;  NSM         non-spacing mark&#10;  ON          other neutral&#10;  PDF         pop directional format&#10;  PDI         pop directional isolate&#10;  R           right-to-left&#10;  RLE         right-to-left embedding&#10;  RLI         right-to-left isolate&#10;  RLO         right-to-left override&#10;  S           segment separator&#10;  WS          white space&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC11" name="SEC11">CHARACTER CLASSES</a></h3>
<p>
<pre><code>&#10;  [...]       positive character class&#10;  [^...]      negative character class&#10;  [x-y]       range (can be used for hex characters)&#10;  [[:xxx:]]   positive POSIX named set&#10;  [[:^xxx:]]  negative POSIX named set&#10;&#10;  alnum       alphanumeric&#10;  alpha       alphabetic&#10;  ascii       0-127&#10;  blank       space or tab&#10;  cntrl       control character&#10;  digit       decimal digit&#10;  graph       printing, excluding space&#10;  lower       lower case letter&#10;  print       printing, including space&#10;  punct       printing, excluding alphanumeric&#10;  space       white space&#10;  upper       upper case letter&#10;  word        same as \w&#10;  xdigit      hexadecimal digit&#10;</code></pre>
In PCRE2, POSIX character set names recognize only ASCII characters by default,
but some of them use Unicode properties if PCRE2_UCP is set. You can use
\Q...\E inside a character class.
</p>
<p>
When PCRE2_ALT_EXTENDED_CLASS is set, UTS#18 extended character classes may be
used, allowing nested character classes, combined using set operators.
<pre><code>&#10;  [x&amp;&amp;[^y]]   UTS#18 extended character class&#10;&#10;  x||y        set union (OR)&#10;  x&amp;&amp;y        set intersection (AND)&#10;  x--y        set difference (AND NOT)&#10;  x~~y        set symmetric difference (XOR)&#10;&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC12" name="SEC12">PERL EXTENDED CHARACTER CLASSES</a></h3>
<p>
<pre><code>&#10;  (?[...])                Perl extended character class&#10;  (?[\p{Thai} &amp; \p{Nd}])  operators; white space ignored&#10;  (?[(x - y) &amp; z])        parentheses for grouping&#10;&#10;  (?[ [^3] &amp; \p{Nd} ])    [...] is a nested ordinary class&#10;  (?[ [:alpha:] - [z] ])  POSIX set is allowed outside [...]&#10;  (?[ \d - [3] ])         backslash-escaped set is allowed outside [...]&#10;  (?[ !\n &amp; [:ascii:] ])  backslash-escaped character is allowed outside [...]&#10;                      all other characters or ranges must be enclosed in [...]&#10;&#10;  x|y, x+y                set union (OR)&#10;  x&amp;y                     set intersection (AND)&#10;  x-y                     set difference (AND NOT)&#10;  x^y                     set symmetric difference (XOR)&#10;  !x                      set complement (NOT)&#10;</code></pre>
Inside a Perl extended character class, [...] switches mode to be interpreted
as an ordinary character class. Outside of a nested [...], the only items
permitted are backslash-escapes, POSIX sets, operators, and parentheses. Inside
a nested ordinary class, ^ has its usual meaning (inverts the class when used
as the first character); outside of a nested class, ^ is the XOR operator.
</p>
<h3><a href="#TOC1" id="SEC13" name="SEC13">QUANTIFIERS</a></h3>
<p>
<pre><code>&#10;  ?           0 or 1, greedy&#10;  ?+          0 or 1, possessive&#10;  ??          0 or 1, lazy&#10;  *           0 or more, greedy&#10;  *+          0 or more, possessive&#10;  *?          0 or more, lazy&#10;  +           1 or more, greedy&#10;  ++          1 or more, possessive&#10;  +?          1 or more, lazy&#10;  {n}         exactly n&#10;  {n,m}       at least n, no more than m, greedy&#10;  {n,m}+      at least n, no more than m, possessive&#10;  {n,m}?      at least n, no more than m, lazy&#10;  {n,}        n or more, greedy&#10;  {n,}+       n or more, possessive&#10;  {n,}?       n or more, lazy&#10;  {,m}        zero up to m, greedy&#10;  {,m}+       zero up to m, possessive&#10;  {,m}?       zero up to m, lazy&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC14" name="SEC14">ANCHORS AND SIMPLE ASSERTIONS</a></h3>
<p>
<pre><code>&#10;  \b          word boundary&#10;  \B          not a word boundary&#10;  ^           start of subject&#10;                also after an internal newline in multiline mode&#10;                (after any newline if PCRE2_ALT_CIRCUMFLEX is set)&#10;  \A          start of subject&#10;  $           end of subject&#10;                also before newline at end of subject&#10;                also before internal newline in multiline mode&#10;  \Z          end of subject&#10;                also before newline at end of subject&#10;  \z          end of subject&#10;  \G          first matching position in subject&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC15" name="SEC15">REPORTED MATCH POINT SETTING</a></h3>
<p>
<pre><code>&#10;  \K          set reported start of match&#10;</code></pre>
From release 10.38 \K is not permitted by default in lookaround assertions,
for compatibility with Perl. However, if the PCRE2_EXTRA_ALLOW_LOOKAROUND_BSK
option is set, the previous behaviour is re-enabled. When this option is set,
\K is honoured in positive assertions, but ignored in negative ones.
</p>
<h3><a href="#TOC1" id="SEC16" name="SEC16">ALTERNATION</a></h3>
<p>
<pre><code>&#10;  expr|expr|expr...&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC17" name="SEC17">CAPTURING</a></h3>
<p>
<pre><code>&#10;  (...)           capture group&#10;  (?&lt;name&gt;...)    named capture group (Perl)&#10;  (?'name'...)    named capture group (Perl)&#10;  (?P&lt;name&gt;...)   named capture group (Python)&#10;  (?:...)         non-capture group&#10;  (?|...)         non-capture group; reset group numbers for&#10;                   capture groups in each alternative&#10;</code></pre>
In non-UTF modes, names may contain underscores and ASCII letters and digits;
in UTF modes, any Unicode letters and Unicode decimal digits are permitted. In
both cases, a name must not start with a digit.
</p>
<h3><a href="#TOC1" id="SEC18" name="SEC18">ATOMIC GROUPS</a></h3>
<p>
<pre><code>&#10;  (?&gt;...)         atomic non-capture group&#10;  (*atomic:...)   atomic non-capture group&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC19" name="SEC19">COMMENT</a></h3>
<p>
<pre><code>&#10;  (?#....)        comment (not nestable)&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC20" name="SEC20">OPTION SETTING</a></h3>
<p>
Changes of these options within a group are automatically cancelled at the end
of the group.
<pre><code>&#10;  (?a)            all ASCII options&#10;  (?aD)           restrict \d to ASCII in UCP mode&#10;  (?aS)           restrict \s to ASCII in UCP mode&#10;  (?aW)           restrict \w to ASCII in UCP mode&#10;  (?aP)           restrict all POSIX classes to ASCII in UCP mode&#10;  (?aT)           restrict POSIX digit classes to ASCII in UCP mode&#10;  (?i)            caseless&#10;  (?J)            allow duplicate named groups&#10;  (?m)            multiline&#10;  (?n)            no auto capture&#10;  (?r)            restrict caseless to either ASCII or non-ASCII&#10;  (?s)            single line (dotall)&#10;  (?U)            default ungreedy (lazy)&#10;  (?x)            ignore white space except in classes or \Q...\E&#10;  (?xx)           as (?x) but also ignore space and tab in classes&#10;  (?-...)         unset the given option(s)&#10;  (?^)            unset imnrsx options&#10;</code></pre>
(?aP) implies (?aT) as well, though this has no additional effect. However, it
means that (?-aP) also implies (?-aT) and disables all ASCII restrictions for
POSIX classes.
</p>
<p>
Unsetting x or xx unsets both. Several options may be set at once, and a
mixture of setting and unsetting such as (?i-x) is allowed, but there may be
only one hyphen. Setting (but no unsetting) is allowed after (?^ for example
(?^in). An option setting may appear at the start of a non-capture group, for
example (?i:...).
</p>
<p>
The following are recognized only at the very start of a pattern or after one
of the newline or \R sequences or options with similar syntax. More than one
of them may appear. For the first three, d is a decimal number.
<pre><code>&#10;  (*LIMIT_DEPTH=d)     set the backtracking limit to d&#10;  (*LIMIT_HEAP=d)      set the heap size limit to d * 1024 bytes&#10;  (*LIMIT_MATCH=d)     set the match limit to d&#10;  (*CASELESS_RESTRICT) set PCRE2_EXTRA_CASELESS_RESTRICT when matching&#10;  (*NOTEMPTY)          set PCRE2_NOTEMPTY when matching&#10;  (*NOTEMPTY_ATSTART)  set PCRE2_NOTEMPTY_ATSTART when matching&#10;  (*NO_AUTO_POSSESS)   no auto-possessification (PCRE2_NO_AUTO_POSSESS)&#10;  (*NO_DOTSTAR_ANCHOR) no .* anchoring (PCRE2_NO_DOTSTAR_ANCHOR)&#10;  (*NO_JIT)            disable JIT optimization&#10;  (*NO_START_OPT)      no start-match optimization (PCRE2_NO_START_OPTIMIZE)&#10;  (*TURKISH_CASING)    set PCRE2_EXTRA_TURKISH_CASING when matching&#10;  (*UTF)               set appropriate UTF mode for the library in use&#10;  (*UCP)               set PCRE2_UCP (use Unicode properties for \d etc)&#10;</code></pre>
Note that LIMIT_DEPTH, LIMIT_HEAP, and LIMIT_MATCH can only reduce the value of
the limits set by the caller of <b>pcre2_match()</b> or <b>pcre2_dfa_match()</b>,
not increase them. LIMIT_RECURSION is an obsolete synonym for LIMIT_DEPTH. The
application can lock out the use of (*UTF) and (*UCP) by setting the
PCRE2_NEVER_UTF or PCRE2_NEVER_UCP options, respectively, at compile time.
</p>
<h3><a href="#TOC1" id="SEC21" name="SEC21">NEWLINE CONVENTION</a></h3>
<p>
These are recognized only at the very start of the pattern or after option
settings with a similar syntax.
<pre><code>&#10;  (*CR)           carriage return only&#10;  (*LF)           linefeed only&#10;  (*CRLF)         carriage return followed by linefeed&#10;  (*ANYCRLF)      all three of the above&#10;  (*ANY)          any Unicode newline sequence&#10;  (*NUL)          the NUL character (binary zero)&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC22" name="SEC22">WHAT \R MATCHES</a></h3>
<p>
These are recognized only at the very start of the pattern or after option
setting with a similar syntax.
<pre><code>&#10;  (*BSR_ANYCRLF)  CR, LF, or CRLF&#10;  (*BSR_UNICODE)  any Unicode newline sequence&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC23" name="SEC23">LOOKAHEAD AND LOOKBEHIND ASSERTIONS</a></h3>
<p>
<pre><code>&#10;  (?=...)                     )&#10;  (*pla:...)                  ) positive lookahead&#10;  (*positive_lookahead:...)   )&#10;&#10;  (?!...)                     )&#10;  (*nla:...)                  ) negative lookahead&#10;  (*negative_lookahead:...)   )&#10;&#10;  (?&lt;=...)                    )&#10;  (*plb:...)                  ) positive lookbehind&#10;  (*positive_lookbehind:...)  )&#10;&#10;  (?&lt;!...)                    )&#10;  (*nlb:...)                  ) negative lookbehind&#10;  (*negative_lookbehind:...)  )&#10;</code></pre>
Each top-level branch of a lookbehind must have a limit for the number of
characters it matches. If any branch can match a variable number of characters,
the maximum for each branch is limited to a value set by the caller of
<b>pcre2_compile()</b> or defaulted. The default is set when PCRE2 is built
(ultimate default 255). If every branch matches a fixed number of characters,
the limit for each branch is 65535 characters.
</p>
<h3><a href="#TOC1" id="SEC24" name="SEC24">NON-ATOMIC LOOKAROUND ASSERTIONS</a></h3>
<p>
These assertions are specific to PCRE2 and are not Perl-compatible.
<pre><code>&#10;  (?*...)                                )&#10;  (*napla:...)                           ) synonyms&#10;  (*non_atomic_positive_lookahead:...)   )&#10;&#10;  (?&lt;*...)                               )&#10;  (*naplb:...)                           ) synonyms&#10;  (*non_atomic_positive_lookbehind:...)  )&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC25" name="SEC25">SUBSTRING SCAN ASSERTION</a></h3>
<p>
This feature is not Perl-compatible.
<pre><code>&#10;  (*scan_substring:(grouplist)...)  scan captured substring&#10;  (*scs:(grouplist)...)             scan captured substring&#10;</code></pre>
The comma-separated list "grouplist" may identify groups in any of the
following ways:
<pre><code>&#10;  n       absolute reference&#10;  +n      relative reference&#10;  -n      relative reference&#10;  &lt;name&gt;  name&#10;  'name'  name&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC26" name="SEC26">SCRIPT RUNS</a></h3>
<p>
<pre><code>&#10;  (*script_run:...)           ) script run, can be backtracked into&#10;  (*sr:...)                   )&#10;&#10;  (*atomic_script_run:...)    ) atomic script run&#10;  (*asr:...)                  )&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC27" name="SEC27">BACKREFERENCES</a></h3>
<p>
<pre><code>&#10;  \n              reference by number (can be ambiguous)&#10;  \gn             reference by number&#10;  \g{n}           reference by number&#10;  \g+n            relative reference by number (PCRE2 extension)&#10;  \g-n            relative reference by number&#10;  \g{+n}          relative reference by number (PCRE2 extension)&#10;  \g{-n}          relative reference by number&#10;  \k&lt;name&gt;        reference by name (Perl)&#10;  \k'name'        reference by name (Perl)&#10;  \g{name}        reference by name (Perl)&#10;  \k{name}        reference by name (.NET)&#10;  (?P=name)       reference by name (Python)&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC28" name="SEC28">SUBROUTINE REFERENCES (POSSIBLY RECURSIVE)</a></h3>
<p>
<pre><code>&#10;  (?R)            recurse whole pattern&#10;  (?n)            call subroutine by absolute number&#10;  (?+n)           call subroutine by relative number&#10;  (?-n)           call subroutine by relative number&#10;  (?&amp;name)        call subroutine by name (Perl)&#10;  (?P&gt;name)       call subroutine by name (Python)&#10;  \g&lt;name&gt;        call subroutine by name (Oniguruma)&#10;  \g'name'        call subroutine by name (Oniguruma)&#10;  \g&lt;n&gt;           call subroutine by absolute number (Oniguruma)&#10;  \g'n'           call subroutine by absolute number (Oniguruma)&#10;  \g&lt;+n&gt;          call subroutine by relative number (PCRE2 extension)&#10;  \g'+n'          call subroutine by relative number (PCRE2 extension)&#10;  \g&lt;-n&gt;          call subroutine by relative number (PCRE2 extension)&#10;  \g'-n'          call subroutine by relative number (PCRE2 extension)&#10;</code></pre>
The variants using parentheses (?...) may also specify a list of capture groups
to return, which shall be retained in the calling subexpression if set during
the recursion (this feature is not supported by Perl).
<pre><code>&#10;  (?R(grouplist))       recurse whole pattern, returning capture groups&#10;                          (PCRE2 extension)&#10;  (?n(grouplist))       )&#10;  (?+n(grouplist))      ) call subroutine, returning capture groups&#10;  (?-n(grouplist))      )   (PCRE2 extension)&#10;  (?&amp;name(grouplist))   )&#10;  (?P&gt;name(grouplist))  )&#10;</code></pre>
The comma-separated list "grouplist" uses the same syntax as
(*scan_substring:(grouplist)...), and may identify groups in any of the
following ways:
<pre><code>&#10;  n       absolute reference&#10;  +n      relative reference&#10;  -n      relative reference&#10;  &lt;name&gt;  name&#10;  'name'  name&#10;</code></pre>
</p>
<h3><a href="#TOC1" id="SEC29" name="SEC29">CONDITIONAL PATTERNS</a></h3>
<p>
<pre><code>&#10;  (?(condition)yes-pattern)&#10;  (?(condition)yes-pattern|no-pattern)&#10;&#10;  (?(n)                absolute reference condition&#10;  (?(+n)               relative reference condition (PCRE2 extension)&#10;  (?(-n)               relative reference condition (PCRE2 extension)&#10;  (?(&lt;name&gt;)           named reference condition (Perl)&#10;  (?('name')           named reference condition (Perl)&#10;  (?(name)             named reference condition (PCRE2, deprecated)&#10;  (?(R)                overall recursion condition&#10;  (?(Rn)               specific numbered group recursion condition&#10;  (?(R&amp;name)           specific named group recursion condition&#10;  (?(DEFINE)           define groups for reference&#10;  (?(VERSION[&gt;]=n[.m]) test PCRE2 version&#10;  (?(assert)           assertion condition&#10;</code></pre>
Note the ambiguity of (?(R) and (?(Rn) which might be named reference
conditions or recursion tests. Such a condition is interpreted as a reference
condition if the relevant named group exists.
<br/>
<br/>
The parts within brackets for the VERSION conditional syntax could be ommited.
The fractional part of the version number defaults to 0 in that case.
</p>
<h3><a href="#TOC1" id="SEC30" name="SEC30">BACKTRACKING CONTROL</a></h3>
<p>
All backtracking control verbs may be in the form (*VERB:NAME). For (*MARK) the
name is mandatory, for the others it is optional. (*SKIP) changes its behaviour
if :NAME is present. The others just set a name for passing back to the caller,
but this is not a name that (*SKIP) can see. The following act immediately they
are reached:
<pre><code>&#10;  (*ACCEPT)       force successful match&#10;  (*FAIL)         force backtrack; synonym (*F)&#10;  (*MARK:NAME)    set name to be passed back; synonym (*:NAME)&#10;</code></pre>
The following act only when a subsequent match failure causes a backtrack to
reach them. They all force a match failure, but they differ in what happens
afterwards. Those that advance the start-of-match point do so only if the
pattern is not anchored.
<pre><code>&#10;  (*COMMIT)       overall failure, no advance of starting point&#10;  (*PRUNE)        advance to next starting character&#10;  (*SKIP)         advance to current matching position&#10;  (*SKIP:NAME)    advance to position corresponding to an earlier&#10;                  (*MARK:NAME); if not found, the (*SKIP) is ignored&#10;  (*THEN)         local failure, backtrack to next alternation&#10;</code></pre>
The effect of one of these verbs in a group called as a subroutine is confined
to the subroutine call.
</p>
<h3><a href="#TOC1" id="SEC31" name="SEC31">CALLOUTS</a></h3>
<p>
<pre><code>&#10;  (?C)            callout (assumed number 0)&#10;  (?Cn)           callout with numerical data n&#10;  (?C"text")      callout with string data&#10;</code></pre>
The allowed string delimiters are ` ' " ^ % # $ (which are the same for the
start and the end), and the starting delimiter { matched with the ending
delimiter }. To encode the ending delimiter within the string, double it.
</p>
<h3><a href="#TOC1" id="SEC32" name="SEC32">REPLACEMENT STRINGS</a></h3>
<p>
If the PCRE2_SUBSTITUTE_LITERAL option is set, a replacement string for
<b>pcre2_substitute()</b> is not interpreted. Otherwise, by default, the only
special character is the dollar character in one of the following forms:
<pre><code>&#10;  $$                  insert a dollar character&#10;  $n or ${n}          insert the contents of group n&#10;  $&lt;name&gt;             insert the contents of named group&#10;  $0 or $&amp;            insert the entire matched substring&#10;  $`                  insert the substring that precedes the match&#10;  $'                  insert the substring that follows the match&#10;  $_                  insert the entire input string&#10;  $+                  insert the highest-numbered capture group which matched&#10;  $*MARK or ${*MARK}  insert a control verb name&#10;</code></pre>
For ${n}, n can be a name or a number. If PCRE2_SUBSTITUTE_EXTENDED is set,
there is additional interpretation:
</p>
<p>
1. Backslash is an escape character, and the forms described in "ESCAPED
CHARACTERS" above are recognized. Also:
<pre><code>&#10;  \Q...\E can be used to suppress interpretation&#10;  \l      force the next character to lower case&#10;  \u      force the next character to upper case&#10;  \L      force subsequent characters to lower case&#10;  \U      force subsequent characters to upper case&#10;  \u\L    force next character to upper case, then all lower&#10;  \l\U    force next character to lower case, then all upper&#10;  \E      end \L or \U case forcing&#10;  \b      backspace character (note: as in character class in pattern)&#10;  \v      vertical tab character (note: not the same as in a pattern)&#10;</code></pre>
2. The Python form \g&lt;n&gt;, where the angle brackets are part of the syntax and
<i>n</i> is either a group name or a number, is recognized as an alternative way
of inserting the contents of a group, for example \g&lt;3&gt;.
</p>
<p>
3. Capture substitution supports the following additional forms:
<pre><code>&#10;  ${n:-string}             default for unset group&#10;  ${n:+string1:string2}    values for set/unset group&#10;</code></pre>
The substitution strings themselves are expanded. Backslash can be used to
escape colons and closing curly brackets.
</p>
<h3><a href="#TOC1" id="SEC33" name="SEC33">SEE ALSO</a></h3>
<p>
<b>pcre2pattern</b>(3), <b>pcre2api</b>(3), <b>pcre2callout</b>(3),
<b>pcre2matching</b>(3), <b>pcre2</b>(3).
</p>
<h3><a href="#TOC1" id="SEC34" name="SEC34">AUTHOR</a></h3>
<p>
Philip Hazel
<br/>
Retired from University Computing Service
<br/>
Cambridge, England.
<br/>
</p>
<h3><a href="#TOC1" id="SEC35" name="SEC35">REVISION</a></h3>
<p>
Last updated: 14 October 2025
<br/>
Copyright © 1997-2024 University of Cambridge.
<br/>
<p>
Return to the <a href="https://github.com/PCRE2Project/pcre2/blob/6f9d7c1373262c541324a16a358785b33ef116cf/doc/html/index.html">PCRE2 index page</a>.
</p>
</p></p>
