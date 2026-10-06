---
title: "4 Usage"
description: "Fixed GNU grep3.12 complete manual chapters1–4, with paired Japanese translation."
documentId: "gnu-grep:3.12:24-usage"
licenseSource: "gnu-grep-manual"
toc: {"maxLevel": 4}
documentContext: [{"kind": "source", "html": "<section class=\"gnu-grep-notices\"><h3>Libx GNU grep 3.12 Invocation, Regular Expressions and Usage — Chapters 1–4 / Libx GNU grep 3.12 起動・正規表現・使用例 — 第1〜4章</h3><p>Original authors: Alain Magloire et al. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p><code class=\"command\">grep</code> prints lines that contain a match for one or more patterns.\n</p><p>This manual is for version 3.12 of GNU Grep.\n</p><p>This manual is for <code class=\"command\">grep</code>, a pattern matching engine.\n</p><p>Copyright © 1999–2002, 2005, 2008–2025 Free Software Foundation,\nInc.\n</p><blockquote class=\"quotation\">\n<p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with no\nInvariant Sections, with no Front-Cover Texts, and with no Back-Cover\nTexts.  A copy of the license is included in the section entitled\n“GNU Free Documentation License”.\n</p></blockquote><p>Copyright © 2026 Libx, for editing and independent Japanese translation. This modified guide is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, Front-Cover Texts, or Back-Cover Texts. No new cover texts or invariant sections have been added.</p><h3>History / 履歴</h3><p>Original: GNU Grep: Print lines that match patterns; version3.12; updated2January2025; author Alain Magloire et al.; publisher Free Software Foundation. Source: grep-3.12.tar.gz, SHA256 badda546dfc4b9d97e992e2c35f3b5c7f20522ffcbe2f01ba1e9cdcbe7644cdc.</p><p>2026: Libx GNU grep3.12 Invocation, Regular Expressions and Usage — Chapters1–4 / Libx GNU grep3.12 起動・正規表現・使用例 — 第1〜4章. Modification author and publisher: Libx. Static chapter-scoped HTML in editable Markdown and unofficial Japanese translation. Original copyright, permission and whole English license preserved. Modified6October2026.</p></section><details class=\"gnu-grep-license\"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary><div class=\"section-level-extent\" id=\"GNU-Free-Documentation-License\">\n<h3 class=\"section\" id=\"GNU-Free-Documentation-License-1\"><span>7.1 GNU Free Documentation License<a class=\"copiable-link\" href=\"#GNU-Free-Documentation-License-1\"> ¶</a></span></h3>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000–2002, 2007–2008, 2023–2025 Free Software\nFoundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents<a class=\"copiable-link\" href=\"#ADDENDUM_003a-How-to-use-this-License-for-your-documents\"> ¶</a></span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></details>"}]
---

<div class="gnu-grep-original-content" id="Usage">
<h2 class="chapter" id="Usage-1"><span>4 Usage</span></h2>
<a class="index-entry-id" id="index-usage_002c-examples"></a>
<p>Here is an example command that invokes GNU <code class="command">grep</code>:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -i 'hello.*world' menu.h main.c&#10;</pre></div>
<p>This lists all lines in the files <samp class="file">menu.h</samp> and <samp class="file">main.c</samp> that
contain the string ‘<samp class="samp">hello</samp>’ followed by the string ‘<samp class="samp">world</samp>’;
this is because ‘<samp class="samp">.*</samp>’ matches zero or more characters within a line.
See <a class="xref" href="/docs/gnu-grep/v3-12/en/01-guide/14-regular-expressions/#Regular-Expressions">Regular Expressions</a>.
The <samp class="option">-i</samp> option causes <code class="command">grep</code>
to ignore case, causing it to match the line ‘<samp class="samp">Hello, world!</samp>’, which
it would not otherwise match.
</p>
<p>Here is a more complex example,
showing the location and contents of any line
containing ‘<samp class="samp">f</samp>’ and ending in ‘<samp class="samp">.c</samp>’,
within all files in the current directory whose names
start with non-‘<samp class="samp">.</samp>’, contain ‘<samp class="samp">g</samp>’, and end in ‘<samp class="samp">.h</samp>’.
The <samp class="option">-n</samp> option outputs line numbers, the <samp class="option">--</samp> argument
treats any later arguments as file names not options even if
<code class="code">*g*.h</code> expands to a file name that starts with ‘<samp class="samp">-</samp>’,
and the empty file <samp class="file">/dev/null</samp> causes file names to be output
even if only one file name happens to be of the form ‘<samp class="samp">*g*.h</samp>’.
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -n -- 'f.*\.c$' *g*.h /dev/null&#10;</pre></div>
<p>Note that the regular expression syntax used in the pattern differs
from the globbing syntax that the shell uses to match file names.
</p>
<p>See <a class="xref" href="/docs/gnu-grep/v3-12/en/01-guide/02-invoking/#Invoking">Invoking <code class="command">grep</code></a>, for more details about
how to invoke <code class="command">grep</code>.
</p>
<a class="index-entry-id" id="index-using-grep_002c-Q_0026A"></a>
<a class="index-entry-id" id="index-FAQ-about-grep-usage"></a>
<p>Here are some common questions and answers about <code class="command">grep</code> usage.
</p>
<ol class="enumerate">
<li> How can I list just the names of matching files?

<div class="example">
<pre class="gnu-grep-literal">grep -l 'main' test-*.c&#10;</pre></div>
<p>lists names of ‘<samp class="samp">test-*.c</samp>’ files in the current directory whose contents
mention ‘<samp class="samp">main</samp>’.
</p>
</li><li> How do I search directories recursively?

<div class="example">
<pre class="gnu-grep-literal">grep -r 'hello' /home/gigi&#10;</pre></div>
<p>searches for ‘<samp class="samp">hello</samp>’ in all files
under the <samp class="file">/home/gigi</samp> directory.
For more control over which files are searched,
use <code class="command">find</code> and <code class="command">grep</code>.
For example, the following command searches only C files:
</p>
<div class="example">
<pre class="gnu-grep-literal">find /home/gigi -name '*.c' ! -type d \&#10;  -exec grep -H 'hello' '{}' +&#10;</pre></div>
<p>This differs from the command:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -H 'hello' /home/gigi/*.c&#10;</pre></div>
<p>which merely looks for ‘<samp class="samp">hello</samp>’ in non-hidden C files in
<samp class="file">/home/gigi</samp> whose names end in ‘<samp class="samp">.c</samp>’.
The <code class="command">find</code> command line above is more similar to the command:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -r --include='*.c' 'hello' /home/gigi&#10;</pre></div>
</li><li> What if a pattern or file has a leading ‘<samp class="samp">-</samp>’?
For example:

<div class="example">
<pre class="gnu-grep-literal">grep "$pattern" *&#10;</pre></div>
<p>can behave unexpectedly if the value of ‘<samp class="samp">pattern</samp>’ begins with ‘<samp class="samp">-</samp>’,
or if the ‘<samp class="samp">*</samp>’ expands to a file name with leading ‘<samp class="samp">-</samp>’.
To avoid the problem, you can use <samp class="option">-e</samp> for patterns and leading
‘<samp class="samp">./</samp>’ for files:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -e "$pattern" ./*&#10;</pre></div>
<p>searches for all lines matching the pattern in all the working
directory’s files whose names do not begin with ‘<samp class="samp">.</samp>’.
Without the <samp class="option">-e</samp>, <code class="command">grep</code> might treat the pattern as an
option if it begins with ‘<samp class="samp">-</samp>’.  Without the ‘<samp class="samp">./</samp>’, there might
be similar problems with file names beginning with ‘<samp class="samp">-</samp>’.
</p>
<p>Alternatively, you can use ‘<samp class="samp">--</samp>’ before the pattern and file names:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -- "$pattern" *&#10;</pre></div>
<p>This also fixes the problem, except that if there is a file named ‘<samp class="samp">-</samp>’,
<code class="command">grep</code> misinterprets the ‘<samp class="samp">-</samp>’ as standard input.
</p>
</li><li> Suppose I want to search for a whole word, not a part of a word?

<div class="example">
<pre class="gnu-grep-literal">grep -w 'hello' test*.log&#10;</pre></div>
<p>searches only for instances of ‘<samp class="samp">hello</samp>’ that are entire words;
it does not match ‘<samp class="samp">Othello</samp>’.
For more control, use ‘<samp class="samp">\&lt;</samp>’ and
‘<samp class="samp">\&gt;</samp>’ to match the start and end of words.
For example:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep 'hello\>' test*.log&#10;</pre></div>
<p>searches only for words ending in ‘<samp class="samp">hello</samp>’, so it matches the word
‘<samp class="samp">Othello</samp>’.
</p>
</li><li> How do I output context around the matching lines?

<div class="example">
<pre class="gnu-grep-literal">grep -C 2 'hello' test*.log&#10;</pre></div>
<p>prints two lines of context around each matching line.
</p>
</li><li> How do I force <code class="command">grep</code> to print the name of the file?

<p>Append <samp class="file">/dev/null</samp>:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep 'eli' /etc/passwd /dev/null&#10;</pre></div>
<p>gets you:
</p>
<div class="example">
<pre class="gnu-grep-literal">/etc/passwd:eli:x:2098:1000:Eli Smith:/home/eli:/bin/bash&#10;</pre></div>
<p>Alternatively, use <samp class="option">-H</samp>, which is a GNU extension:
</p>
<div class="example">
<pre class="gnu-grep-literal">grep -H 'eli' /etc/passwd&#10;</pre></div>
</li><li> Why do people use strange regular expressions on <code class="command">ps</code> output?

<div class="example">
<pre class="gnu-grep-literal">ps -ef | grep '[c]ron'&#10;</pre></div>
<p>If the pattern had been written without the square brackets, it would
have matched not only the <code class="command">ps</code> output line for <code class="command">cron</code>,
but also the <code class="command">ps</code> output line for <code class="command">grep</code>.
Note that on some platforms,
<code class="command">ps</code> limits the output to the width of the screen;
<code class="command">grep</code> does not have any limit on the length of a line
except the available memory.
</p>
</li><li> Why does <code class="command">grep</code> report “binary file matches”?

<p>If <code class="command">grep</code> listed all matching “lines” from a binary file, it
would probably generate output that is not useful, and it might even
muck up your display.
So GNU <code class="command">grep</code> suppresses output from
files that appear to be binary files.
To force GNU <code class="command">grep</code>
to output lines even from files that appear to be binary, use the
<samp class="option">-a</samp> or ‘<samp class="samp">--binary-files=text</samp>’ option.
To eliminate the
“Binary file matches” messages, use the <samp class="option">-I</samp> or
‘<samp class="samp">--binary-files=without-match</samp>’ option.
</p>
</li><li> Why doesn’t ‘<samp class="samp">grep -lv</samp>’ print non-matching file names?

<p>‘<samp class="samp">grep -lv</samp>’ lists the names of all files containing one or more
lines that do not match.
To list the names of all files that contain no
matching lines, use the <samp class="option">-L</samp> or <samp class="option">--files-without-match</samp>
option.
</p>
</li><li> I can do “OR” with ‘<samp class="samp">|</samp>’, but what about “AND”?

<div class="example">
<pre class="gnu-grep-literal">grep 'paul' /etc/motd | grep 'franc,ois'&#10;</pre></div>
<p>finds all lines that contain both ‘<samp class="samp">paul</samp>’ and ‘<samp class="samp">franc,ois</samp>’.
</p>
</li><li> Why does the empty pattern match every input line?

<p>The <code class="command">grep</code> command searches for lines that contain strings
that match a pattern.  Every line contains the empty string, so an
empty pattern causes <code class="command">grep</code> to find a match on each line.  It
is not the only such pattern: ‘<samp class="samp">^</samp>’, ‘<samp class="samp">$</samp>’, and many
other patterns cause <code class="command">grep</code> to match every line.
</p>
<p>To match empty lines, use the pattern ‘<samp class="samp">^$</samp>’.  To match blank
lines, use the pattern ‘<samp class="samp">^[[:blank:]]*$</samp>’.  To match no lines at
all, use an extended regular expression like ‘<samp class="samp">a^</samp>’ or ‘<samp class="samp">$a</samp>’.
To match every line, a portable script should use a pattern like
‘<samp class="samp">^</samp>’ instead of the empty pattern, as POSIX does not specify the
behavior of the empty pattern.
</p>
</li><li> How can I search in both standard input and in files?

<p>Use the special file name ‘<samp class="samp">-</samp>’:
</p>
<div class="example">
<pre class="gnu-grep-literal">cat /etc/passwd | grep 'alain' - /etc/motd&#10;</pre></div>
</li><li> Why can’t I combine the shell’s ‘<samp class="samp">set -e</samp>’ with <code class="command">grep</code>?

<p>The <code class="command">grep</code> command follows the convention of programs like
<code class="command">cmp</code> and <code class="command">diff</code> where an exit status of 1 is not an
error.  The shell command ‘<samp class="samp">set -e</samp>’ causes the shell to exit if
any subcommand exits with nonzero status, and this will cause the
shell to exit merely because <code class="command">grep</code> selected no lines,
which is ordinarily not what you want.
</p>
<p>There is a related problem with Bash’s <code class="command">set -e -o pipefail</code>.
Since <code class="command">grep</code> does not always read all its input, a command
outputting to a pipe read by <code class="command">grep</code> can fail when
<code class="command">grep</code> exits before reading all its input, and the command’s
failure can cause Bash to exit.
</p>
</li><li> Why is this back-reference failing?

<div class="example">
<pre class="gnu-grep-literal">echo 'ba' | grep -E '(a)\1|b\1'&#10;</pre></div>
<p>This outputs an error message, because the second ‘<samp class="samp">\1</samp>’
has nothing to refer back to, meaning it will never match anything.
</p>
</li><li> How can I match across lines?

<p>Standard grep cannot do this, as it is fundamentally line-based.
Therefore, merely using the <code class="code">[:space:]</code> character class does not
match newlines in the way you might expect.
</p>
<p>With the GNU <code class="command">grep</code> option <samp class="option">-z</samp> (<samp class="option">--null-data</samp>), each
input and output “line” is null-terminated; see <a class="pxref" href="/docs/gnu-grep/v3-12/en/01-guide/10-other-options/#Other-Options">Other Options</a>.  Thus,
you can match newlines in the input, but typically if there is a match
the entire input is output, so this usage is often combined with
output-suppressing options like <samp class="option">-q</samp>, e.g.:
</p>
<div class="example">
<pre class="gnu-grep-literal">printf 'foo\nbar\n' | grep -z -q 'foo[[:space:]]\+bar'&#10;</pre></div>
<p>If this does not suffice, you can transform the input
before giving it to <code class="command">grep</code>, or turn to <code class="command">awk</code>,
<code class="command">sed</code>, <code class="command">perl</code>, or many other utilities that are
designed to operate across lines.
</p>
</li><li> What do <code class="command">grep</code>, <samp class="option">-E</samp>, and <samp class="option">-F</samp> stand for?

<p>The name <code class="command">grep</code> comes from the way line editing was done on Unix.
For example,
<code class="command">ed</code> uses the following syntax
to print a list of matching lines on the screen:
</p>
<div class="example">
<pre class="gnu-grep-literal">global/regular expression/print&#10;g/re/p&#10;</pre></div>
<p>The <samp class="option">-E</samp> option stands for Extended <code class="command">grep</code>.
The <samp class="option">-F</samp> option stands for Fixed <code class="command">grep</code>;
</p>
</li><li> What happened to <code class="command">egrep</code> and <code class="command">fgrep</code>?

<p>7th Edition Unix had commands <code class="command">egrep</code> and <code class="command">fgrep</code>
that were the counterparts of the modern ‘<samp class="samp">grep -E</samp>’ and ‘<samp class="samp">grep -F</samp>’.
Although breaking up <code class="command">grep</code> into three programs was perhaps
useful on the small computers of the 1970s, <code class="command">egrep</code> and
<code class="command">fgrep</code> were deemed obsolescent by POSIX in 1992,
removed from POSIX in 2001, deprecated by GNU Grep 2.5.3 in 2007,
and changed to issue obsolescence warnings by GNU Grep 3.8 in 2022;
eventually, they are planned to be removed entirely.
</p>
<p>If you prefer the old names, you can use your own substitutes,
such as a shell script named <code class="command">egrep</code> with the following
contents:
</p>
<div class="example">
<pre class="gnu-grep-literal">#!/bin/sh&#10;exec grep -E "$@"&#10;</pre></div>
</li></ol>
<hr/>
</div>
