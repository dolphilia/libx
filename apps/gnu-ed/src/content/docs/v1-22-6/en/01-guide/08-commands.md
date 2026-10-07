---
title: "Commands"
description: "GNU ed1.22.6 fixed original manual."
documentId: "gnu-ed:1.22.6:08-commands"
licenseSource: "gnu-ed-manual"
toc: {"maxLevel": 4}
documentContext: [{"kind": "source", "html": "<section class=\"gnu-ed-notices\"><h3>Libx GNU ed 1.22.6 User Guide / Libx GNU ed 1.22.6 利用ガイド</h3><p>Original authors: Andrew L. Moore, François Pinard, and Antonio Diaz Diaz. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual is for GNU ed (version 1.22.6, 20 August 2026).\n</p><p>Written by Andrew L. Moore, François Pinard, and Antonio Diaz Diaz\n</p><p>Copyright © 1993, 1994, 2006-2026 Free Software Foundation, Inc.\n</p><p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with no\nInvariant Sections, no Front-Cover Texts, and no Back-Cover Texts.\n</p><p>Copyright © 2026 Libx, for editing and independent Japanese translation. This modified guide is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, Front-Cover Texts, or Back-Cover Texts. No cover texts or invariant sections have been added.</p><h3>History / 履歴</h3><p>Original: GNU ed Manual; version 1.22.6; document revision 20 August 2026; authors Andrew L. Moore, François Pinard, and Antonio Diaz Diaz; publisher Free Software Foundation. Source: ed-1.22.6.tar.lz, SHA256 3f33b22135219c39c3c695f7b7171c2567d3e2a17c798c0a90607320cbb268f2.</p><p>2026: Libx GNU ed 1.22.6 User Guide / Libx GNU ed 1.22.6 利用ガイド. Modification author and publisher: Libx. Complete Top and eleven chapters in editable Markdown, static original examples and independent unofficial Japanese translation. Original copyright, permission and whole English license retained. Modified 7 October 2026.</p></section><details class=\"gnu-ed-license\"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary><div class=\"chapter-level-extent\" id=\"GNU-Free-Documentation-License\">\n<h2 class=\"chapter\" id=\"GNU-Free-Documentation-License-1\"><span>12 GNU Free Documentation License<a class=\"copiable-link\" href=\"/docs/gnu-ed/source/v1-22-6/manual.html#GNU-Free-Documentation-License-1\"> ¶</a></span></h2>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.\n<a class=\"uref\" href=\"http://fsf.org/\">http://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\n<small class=\"sc\">ASCII</small> without markup, Texinfo input format, LaTeX input\nformat, <abbr class=\"acronym\">SGML</abbr> or <abbr class=\"acronym\">XML</abbr> using a publicly available\n<abbr class=\"acronym\">DTD</abbr>, and standard-conforming simple <abbr class=\"acronym\">HTML</abbr>,\nPostScript or <abbr class=\"acronym\">PDF</abbr> designed for human modification.  Examples\nof transparent image formats include <abbr class=\"acronym\">PNG</abbr>, <abbr class=\"acronym\">XCF</abbr> and\n<abbr class=\"acronym\">JPG</abbr>.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, <abbr class=\"acronym\">SGML</abbr> or\n<abbr class=\"acronym\">XML</abbr> for which the <abbr class=\"acronym\">DTD</abbr> and/or processing tools are\nnot generally available, and the machine-generated <abbr class=\"acronym\">HTML</abbr>,\nPostScript or <abbr class=\"acronym\">PDF</abbr> produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"http://www.gnu.org/copyleft/\">http://www.gnu.org/copyleft/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents<a class=\"copiable-link\" href=\"/docs/gnu-ed/source/v1-22-6/manual.html#ADDENDUM_003a-How-to-use-this-License-for-your-documents\"> ¶</a></span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n</div></details>"}]
---

<div class="gnu-ed-original-content"><div class="chapter-level-extent" id="Commands">
<h2 class="chapter" id="Commands-1"><span>7 Commands<a class="copiable-link" href="/docs/gnu-ed/v1-22-6/en/01-guide/08-commands#Commands-1"> ¶</a></span></h2>
<p>All <code class="command">ed</code> commands are single characters, though some require
additional parameters. If a command’s parameters extend over several lines,
then each line except for the last must be terminated with a backslash
(‘<samp class="samp">\</samp>’).
</p>
<a class="anchor" id="print-suffixes"></a><p>In general, at most one command is allowed per line. However, most
commands accept a print suffix, which is any of ‘<samp class="samp">p</samp>’ (print),
‘<samp class="samp">l</samp>’ (list), or ‘<samp class="samp">n</samp>’ (enumerate), to print the last line
affected by the command. It is not portable to give more than one print
suffix, but <code class="command">ed</code> allows any combination of non-repeated print
suffixes and combines their effects. If any suffix letter is given, it
must immediately follow the command.
</p>
<p>The ‘<samp class="samp">e</samp>’, ‘<samp class="samp">E</samp>’, ‘<samp class="samp">f</samp>’, ‘<samp class="samp">r</samp>’, and ‘<samp class="samp">w</samp>’ commands take an
optional <var class="var">file</var> parameter, separated from the command letter by one or
more whitespace characters.
</p>
<p>An interrupt (typically <kbd class="key">Control-C</kbd>) has the effect of aborting the
current command and returning the editor to command mode.
</p>
<p><code class="command">ed</code> recognizes the following commands. The commands are shown
together with the default address or address range supplied if none is
specified (in parenthesis).
</p>
<dl class="table">
<dt><code class="code">(.)a</code></dt>
<dd><p>Appends text to the buffer after the addressed line. The address
‘<samp class="samp">0</samp>’ (zero) is valid for this command; it places the entered text at
the beginning of the buffer. Text is entered in input mode. The current
address is set to the address of the last line entered or, if there were
none, to the addressed line.
</p>
</dd>
<dt><code class="code">(.,.)c</code></dt>
<dd><p>Changes lines in the buffer. The addressed lines are deleted from the
buffer, and text is inserted in their place. Text is entered in input mode.
The current address is set to the address of the last line entered or, if
there were none, to the new address of the line after the last line deleted;
if the lines deleted were originally at the end of the buffer, the current
address is set to the address of the new last line; if no lines remain in
the buffer, the current address is set to zero. The lines deleted are copied
to the cut buffer.
</p>
</dd>
<dt><code class="code">(.,.)d</code></dt>
<dd><p>Deletes the addressed lines from the buffer. The current address is set to
the new address of the line after the last line deleted; if the lines
deleted were originally at the end of the buffer, the current address is set
to the address of the new last line; if no lines remain in the buffer, the
current address is set to zero. The lines deleted are copied to the cut
buffer.
</p>
</dd>
<dt><code class="code">e <var class="var">file</var></code></dt>
<dd><p>Edits <var class="var">file</var>, and sets the default filename. If <var class="var">file</var> is not
specified, then the default filename is used. Any lines in the buffer are
deleted before the new file is read. If <var class="var">file</var> does not exist, a warning
is printed in place of a byte count and the resulting buffer is left empty.
The current address is set to the address of the last line in the buffer.
</p>
<p>If <var class="var">file</var> is prefixed with a bang (!), then it is interpreted as a shell
command whose output is to be read, (see <a class="pxref" href="/docs/gnu-ed/v1-22-6/en/01-guide/08-commands#shell-escape-command">shell escape command</a> ‘<samp class="samp">!</samp>’
below). In this case the default filename is unchanged. To edit a file whose
name begins with a bang, prefix the name with <samp class="file">./</samp>.
</p>
<p>A warning is printed if the buffer modified flag is set. If another ‘<samp class="samp">e</samp>’
or ‘<samp class="samp">q</samp>’ command is given with no intervening error or buffer-modifying
command, it is executed without warning, and any changes to the buffer are
lost.
</p>
</dd>
<dt><code class="code">E <var class="var">file</var></code></dt>
<dd><p>Edits <var class="var">file</var> unconditionally. This is similar to the ‘<samp class="samp">e</samp>’ command,
except that unwritten changes are discarded without warning.
</p>
</dd>
<dt><code class="code">f <var class="var">file</var></code></dt>
<dd><p>Sets the default filename to <var class="var">file</var>, whether or not <var class="var">file</var> names an
existing file. If <var class="var">file</var> is not specified, then the default filename is
printed. Tilde expansion is performed on <var class="var">file</var>; if <var class="var">file</var> starts
with <samp class="file">~/</samp>, the <samp class="file">~</samp> is expanded to specify your home directory
<samp class="file">$HOME</samp>.
</p>
<a class="anchor" id="global-command"></a></dd>
<dt><code class="code">(1,$)g/<var class="var">re</var>/[I]<var class="var">command-list</var></code></dt>
<dd><p>Global command. The global command makes two passes over the file. On the
first pass, all the addressed lines matching a regular expression <var class="var">re</var>
are marked. The suffix ‘<samp class="samp">I</samp>’ is a GNU extension which makes <code class="command">ed</code>
match <var class="var">re</var> in a case-insensitive manner. Then, going sequentially from
the beginning of the file to the end of the file, the given
<var class="var">command-list</var> is executed for each marked line, with the current
address set to the address of that line. Any line modified by the
<var class="var">command-list</var> is unmarked. The final value of the current address is
the value assigned by the last command in the last <var class="var">command-list</var>
executed. If there were no matching lines, the current address is unchanged.
The execution of <var class="var">command-list</var> stops on the first error.
</p>
<p>The first command of <var class="var">command-list</var> must appear on the same line as the
‘<samp class="samp">g</samp>’ command. The other commands of <var class="var">command-list</var> must appear on
separate lines. All lines of a multi-line <var class="var">command-list</var> except the last
line must be terminated with a backslash (‘<samp class="samp">\</samp>’). Any commands are
allowed, except for ‘<samp class="samp">g</samp>’, ‘<samp class="samp">G</samp>’, ‘<samp class="samp">v</samp>’, and ‘<samp class="samp">V</samp>’. The ‘<samp class="samp">.</samp>’
terminating the input mode of commands ‘<samp class="samp">a</samp>’, ‘<samp class="samp">c</samp>’, and ‘<samp class="samp">i</samp>’ can
be omitted if it would be the last line of <var class="var">command-list</var>. By default, a
newline alone in <var class="var">command-list</var> is equivalent to a ‘<samp class="samp">p</samp>’ command. If
<code class="command">ed</code> is invoked with the command-line option <samp class="option">-G</samp>, then a
newline in <var class="var">command-list</var> is equivalent to a ‘<samp class="samp">.+1p</samp>’ command.
</p>
</dd>
<dt><code class="code">(1,$)G/<var class="var">re</var>/[I]</code></dt>
<dd><p>Interactive global command. Interactively edits the addressed lines
matching a regular expression <var class="var">re</var>. The suffix ‘<samp class="samp">I</samp>’ is a GNU
extension which makes <code class="command">ed</code> match <var class="var">re</var> in a case-insensitive
manner. For each matching line, the line is printed, the current address is
set, and the user is prompted to enter a <var class="var">command-list</var>. The final value
of the current address is the value assigned by the last command executed.
If there were no matching lines, the current address is unchanged.
</p>
<p>The format of <var class="var">command-list</var> is the same as that of the ‘<samp class="samp">g</samp>’
command. A newline alone acts as an empty command list. A single ‘<samp class="samp">&amp;</samp>’
repeats the last non-empty command list.
</p>
</dd>
<dt><code class="code">h</code></dt>
<dd><p>Prints a help message explaining the reason for the most recent ‘<samp class="samp">?</samp>’
notification.
</p>
</dd>
<dt><code class="code">H</code></dt>
<dd><p>Toggles the printing of help messages (see the ‘<samp class="samp">h</samp>’ command above). If
the help mode is being turned on, also prints the help message corresponding
to the most recent ‘<samp class="samp">?</samp>’ notification. By default, help messages are not
printed.
</p>
</dd>
<dt><code class="code">(.)i</code></dt>
<dd><p>Inserts text in the buffer before the addressed line. The address
‘<samp class="samp">0</samp>’ (zero) is valid for this command; it places the entered text at
the beginning of the buffer. Text is entered in input mode. The current
address is set to the address of the last line entered or, if there were
none, to the addressed line.
</p>
</dd>
<dt><code class="code">(.,.+1)j</code></dt>
<dd><p>Joins the addressed lines, replacing them by a single line containing their
joined text. If only one address is given, this command does nothing. If
lines are joined, the lines replaced are copied to the cut buffer and the
current address is set to the address of the joined line. Else, the current
address is unchanged.
</p>
</dd>
<dt><code class="code">(.)kx</code></dt>
<dd><p>Marks the addressed line with a lower case letter ‘<samp class="samp">x</samp>’. The line can
then be addressed as ‘<samp class="samp">'x</samp>’ (i.e., a single quote followed by ‘<samp class="samp">x</samp>’)
in subsequent commands. The mark is not cleared until the line is deleted or
otherwise modified. The current address is unchanged.
</p>
</dd>
<dt><code class="code">(.,.)l</code></dt>
<dd><p>List command. Prints the addressed lines unambiguously. The end of each
line is marked with a ‘<samp class="samp">$</samp>’, and every ‘<samp class="samp">$</samp>’ character within the
text is printed with a preceding backslash. Special characters are
printed as escape sequences. The current address is set to the address
of the last line printed.
</p>
</dd>
<dt><code class="code">(.,.)m(.)</code></dt>
<dd><p>Moves lines in the buffer. The addressed lines are moved to after the
right-hand destination address. The destination address ‘<samp class="samp">0</samp>’ (zero)
is valid for this command; it moves the addressed lines to the beginning
of the buffer. It is an error if the destination address falls within
the range of lines to be moved. The current address is set to the new
address of the last line moved.
</p>
</dd>
<dt><code class="code">(.,.)n</code></dt>
<dd><p>Number command. Prints the addressed lines, preceding each line by its
line number and a <kbd class="key">tab</kbd>. The current address is set to the address
of the last line printed.
</p>
</dd>
<dt><code class="code">(.,.)p</code></dt>
<dd><p>Prints the addressed lines. The current address is set to the address of
the last line printed.
</p>
</dd>
<dt><code class="code">P</code></dt>
<dd><p>Toggles the command prompt on and off. Unless a prompt string is specified
with the command-line option <samp class="option">-p</samp>, the command prompt is by default
turned off. The default prompt string is an asterisk (‘<samp class="samp">*</samp>’).
</p>
</dd>
<dt><code class="code">q</code></dt>
<dd><p>Quits <code class="command">ed</code>. A warning is printed if the buffer modified flag is set.
If another ‘<samp class="samp">e</samp>’ or ‘<samp class="samp">q</samp>’ command is given with no intervening error
or buffer-modifying command, it is executed without warning, and any changes
to the buffer are lost.
</p>
</dd>
<dt><code class="code">Q</code></dt>
<dd><p>Quits <code class="command">ed</code> unconditionally. This is similar to the ‘<samp class="samp">q</samp>’ command,
except that unwritten changes are discarded without warning.
</p>
</dd>
<dt><code class="code">($)r <var class="var">file</var></code></dt>
<dd><p>Reads <var class="var">file</var> and appends it after the addressed line. If <var class="var">file</var>
is not specified, then the default filename is used. If there is no
default filename prior to the command, then the default filename is set
to <var class="var">file</var>. Otherwise, the default filename is unchanged. The address
‘<samp class="samp">0</samp>’ (zero) is valid for this command; it reads the file at the
beginning of the buffer. The current address is set to the address of
the last line read or, if there were none, to the addressed line.
</p>
<p>If <var class="var">file</var> is prefixed with a bang (!), then it is interpreted as a shell
command whose output is to be read, (see <a class="pxref" href="/docs/gnu-ed/v1-22-6/en/01-guide/08-commands#shell-escape-command">shell escape command</a> ‘<samp class="samp">!</samp>’
below). In this case the default filename is unchanged. To read a file whose
name begins with a bang, prefix the name with <samp class="file">./</samp>.
</p>
</dd>
<dt><code class="code">(.,.)t(.)</code></dt>
<dd><p>Copies (i.e., transfers) the addressed lines to after the right-hand
destination address. If the destination address is ‘<samp class="samp">0</samp>’ (zero), the
lines are copied at the beginning of the buffer. The current address is
set to the address of the last line copied.
</p>
</dd>
<dt><code class="code">u</code></dt>
<dd><p>Undoes the effect of the last command that modified anything in the buffer
and restores the current address to what it was before the command. The
global commands ‘<samp class="samp">g</samp>’, ‘<samp class="samp">G</samp>’, ‘<samp class="samp">v</samp>’, and ‘<samp class="samp">V</samp>’ are treated as a
single command by undo. ‘<samp class="samp">u</samp>’ is its own inverse; it can undo only the
last command.
</p>
</dd>
<dt><code class="code">(1,$)v/<var class="var">re</var>/[I]<var class="var">command-list</var></code></dt>
<dd><p>This is similar to the ‘<samp class="samp">g</samp>’ command except that it applies
<var class="var">command-list</var> to each of the addressed lines not matching the
regular expression <var class="var">re</var>.
</p>
</dd>
<dt><code class="code">(1,$)V/<var class="var">re</var>/[I]</code></dt>
<dd><p>This is similar to the ‘<samp class="samp">G</samp>’ command except that it interactively
edits the addressed lines not matching the regular expression <var class="var">re</var>.
</p>
</dd>
<dt><code class="code">(1,$)w <var class="var">file</var></code></dt>
<dd><p>Writes the addressed lines to <var class="var">file</var>. Any previous contents of
<var class="var">file</var> are lost without warning. If there is no default filename, then
the default filename is set to <var class="var">file</var>, otherwise it is unchanged. If no
filename is specified, then the default filename is used. If the whole
buffer is written, then the buffer modified flag is cleared. The current
address is unchanged.
</p>
<p>If <var class="var">file</var> is prefixed with a bang (!), then it is interpreted as a shell
command and the addressed lines are written to its standard input,
(see <a class="pxref" href="/docs/gnu-ed/v1-22-6/en/01-guide/08-commands#shell-escape-command">shell escape command</a> ‘<samp class="samp">!</samp>’ below). In this case the default
filename is unchanged. Writing the buffer to a shell command does not clear
the buffer modified flag. To write to a file whose name begins with a bang,
prefix the name with <samp class="file">./</samp>.
</p>
</dd>
<dt><code class="code">(1,$)wq <var class="var">file</var></code></dt>
<dd><p>Writes the addressed lines to <var class="var">file</var>, and then executes a ‘<samp class="samp">q</samp>’
command.
</p>
</dd>
<dt><code class="code">(1,$)W <var class="var">file</var></code></dt>
<dd><p>Appends the addressed lines to the end of <var class="var">file</var>. This is similar to the
‘<samp class="samp">w</samp>’ command, except that the previous contents of <var class="var">file</var> are not
clobbered. The current address is unchanged.
</p>
</dd>
<dt><code class="code">(.)x</code></dt>
<dd><p>Copies (puts) the contents of the cut buffer to after the addressed
line. The current address is set to the address of the last line copied.
</p>
</dd>
<dt><code class="code">(.,.)y</code></dt>
<dd><p>Copies (yanks) the addressed lines to the cut buffer. The current address is
unchanged. The cut buffer is overwritten by subsequent ‘<samp class="samp">c</samp>’, ‘<samp class="samp">d</samp>’,
‘<samp class="samp">j</samp>’, ‘<samp class="samp">s</samp>’, or ‘<samp class="samp">y</samp>’ commands. The cut buffer is deleted when a
new file is read with ‘<samp class="samp">e</samp>’ or ‘<samp class="samp">E</samp>’.
</p>
</dd>
<dt><code class="code">(.+1)z<var class="var">n</var></code></dt>
<dd><p>Scroll. Prints <var class="var">n</var> lines at a time starting at addressed line, and sets
window size to <var class="var">n</var>. If <var class="var">n</var> is not specified, then the current window
size is used. Window size defaults to screen size minus two lines, or to 22
if screen size can’t be determined. The environment variable <var class="var">LINES</var> can
be used to set the initial window size. <var class="var">LINES</var> and <var class="var">n</var> are not
limited by screen size. The current address is set to the address of the
last line printed.
</p>
<a class="anchor" id="shell-escape-command"></a></dd>
<dt><code class="code">!<var class="var">command</var></code></dt>
<dt><code class="code">[2addr]!<var class="var">command</var></code></dt>
<dd><p>Shell escape command. Executes <var class="var">command</var> via <code class="command">sh</code>. If the first
character of <var class="var">command</var> is ‘<samp class="samp">!</samp>’, then it is replaced by the text of
the previous ‘<samp class="samp">!<var class="var">command</var></samp>’. Thus, ‘<samp class="samp">!!</samp>’ repeats the previous
‘<samp class="samp">!<var class="var">command</var></samp>’. <code class="command">ed</code> does not process <var class="var">command</var> for
backslash (‘<samp class="samp">\</samp>’) escapes. However, each unescaped ‘<samp class="samp">%</samp>’ is replaced
with the default filename, and the backslash is removed from each escaped
‘<samp class="samp">%</samp>’. When the shell returns from execution, a ‘<samp class="samp">!</samp>’ is printed to
the standard output. The current address is unchanged.
</p>
<p>If one or more addresses are specified, the addressed lines are written to
the standard input of <var class="var">command</var> and then replaced with the lines read
from the standard output and standard error of <var class="var">command</var>. Two byte
counts are printed; one for the bytes written to <var class="var">command</var> and the other
for the bytes read from <var class="var">command</var>. The current address is set to the
address of the last line read or, if there were none, to the line before the
first addressed line.
</p>
</dd>
<dt><code class="code">(.,.)#</code></dt>
<dd><p>Begins a comment; the rest of the line, up to a newline, is ignored. If a
line address followed by a semicolon is given, then the current address is
set to that address. Otherwise, the current address is unchanged.
</p>
</dd>
<dt><code class="code">($)=</code></dt>
<dd><p>Prints the line number of the addressed line. The current address is
unchanged.
</p>
</dd>
<dt><code class="code">(.+1)<kbd class="key">newline</kbd></code></dt>
<dd><p>Null command. An address alone prints the addressed line. A <kbd class="key">newline</kbd>
alone is equivalent to ‘<samp class="samp">+1p</samp>’. The current address is set to the address
of the printed line.
</p>
</dd>
</dl>
<hr/>
</div>
</div>
