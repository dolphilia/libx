---
title: "Using Libtool — Local trial"
licenseSource: gnu-libtool-manual
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU Libtool 2.6.2 Library Build Guide — Local Conversion Trial / Libx GNU Libtool 2.6.2 ライブラリビルドガイド — ローカル変換試作</h3><p>Original authors: Gordon Matzigkeit, Alexandre Oliva, Thomas Tanner, Gary V. Vaughan. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual is for GNU Libtool (version 2.6.2, 16 July 2026).</p><p>Copyright © 1996–2019, 2021–2026 Free Software Foundation, Inc.</p><p>Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, with no Front-Cover Texts, and with no Back-Cover Texts. A copy of the license is included in the section entitled “GNU Free Documentation License”.</p><p>Copyright © 2026 Libx, for conversion and independent Japanese sample translation. This modified version is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, no Front-Cover Texts and no Back-Cover Texts. No new invariant sections or cover texts are added.</p><h3>History / 履歴</h3><p>Original: GNU Libtool, version 2.6.2, 16 July 2026, authors listed above, Free Software Foundation. Modified 12 October 2026 by Libx under the distinct trial title above. English chapters 2–3 and footnotes 1–4; Japanese section 3.1 sample only. This is an unpublished local trial; adoption and full Japanese translation remain pending.</p><p>Libxの運用方針: 原文コピーと非公式の独自日本語訳を提供するローカル試作です。英語第2〜3章・脚注1〜4、日本語は3.1節の試訳のみです。他章・全API・上流固有機能は未収録で、完全な情報は固定原文を参照してください。例は実行せず文字列として保存します。原文中の古い環境名・出力例も維持します。</p><p><a href=\"/docs/gnu-libtool-trial/source/v2-6-2/manual.html\">Fixed complete original / 固定原文全文</a> · <a href=\"/docs/gnu-libtool-trial/source/v2-6-2/libtool-2.6.2.tar.gz\">Original source archive / 原文ソース配布物</a></p><div class=\"appendix-level-extent\" id=\"libtool-context-GNU-Free-Documentation-License\">\n<h2 class=\"appendix\" id=\"libtool-context-GNU-Free-Documentation-License-1\"><span>Appendix A GNU Free Documentation License</span></h2>\n<a class=\"index-entry-id\" id=\"libtool-context-index-FDL_002c-GNU-Free-Documentation-License\"></a>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"libtool-context-ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents</span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></section>"}]
---

<div class="gnu-libtool-original-content"><div class="chapter-level-extent" id="Using-libtool">

<h2 class="chapter" id="Using-libtool-1"><span>3 Using libtool</span></h2>
<a class="index-entry-id" id="index-examples-of-using-libtool"></a>
<a class="index-entry-id" id="index-libtool-examples"></a>
<p>It makes little sense to talk about using libtool in your own packages
until you have seen how it makes your life simpler.  The examples in
this chapter introduce the main features of libtool by comparing the
standard library building procedure to libtool’s operation on two
different platforms:
</p>
<dl class="table">
<dt>‘<samp class="samp">a23</samp>’</dt>
<dd><p>An Ultrix 4.2 platform with only static libraries.
</p>
</dd>
<dt>‘<samp class="samp">burger</samp>’</dt>
<dd><p>A NetBSD/i386 1.2 platform with shared libraries.
</p></dd>
</dl>
<p>Source files for the following examples are taken from the Autotest file
<samp class="file">tests/demo.at</samp>.  The files can be extracted by running a demo test and
preserving the artifacts:
</p>
<div class="example">
<pre class="example-preformatted">burger$ make check TESTSUITEFLAGS="-d -k 'preloaded static library'"&#10;burger$ cp -r tests/testsuite.dir/027 demo/&#10;</pre></div>
<p>You can follow these examples on your own platform, using the preconfigured
libtool script that was installed with libtool (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Configuring">Configuring libtool</a>).  Assume
that we are building a library, <samp class="file">libhello</samp>, out of the files <samp class="file">foo.c</samp>
and <samp class="file">hello.c</samp>.
</p>
<p>Note that the <samp class="file">foo.c</samp> source file uses the <code class="code">cos</code> math library
function, which is usually found in the standalone math library, and not
the C library (see <a data-manual="libc" href="https://www.gnu.org/software/libc/manual/html_mono/libc.html#Trig-Functions">Trigonometric Functions</a> in <cite class="cite">The GNU C Library Reference Manual</cite>).  So, we need to add <samp class="option">-lm</samp> to
the end of the link line whenever we link <samp class="file">foo.lo</samp> into an
executable or a library (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Inter_002dlibrary-dependencies">Inter-library dependencies</a>).
</p>
<p>The same rule applies whenever you use functions that don’t appear in
the standard C library… you need to add the appropriate
<samp class="option">-l<var class="var">name</var></samp> flag to the end of the link line when you link
against those objects.
</p>
<p>After we have built that library, we want to create a program by linking
<samp class="file">main.o</samp> against <samp class="file">libhello</samp>.
</p>
<ul class="mini-toc">
<li><a accesskey="1" href="#Creating-object-files">Creating object files</a></li>
<li><a accesskey="2" href="#Linking-libraries">Linking libraries</a></li>
<li><a accesskey="3" href="#Linking-executables">Linking executables</a></li>
<li><a accesskey="4" href="#Debugging-executables">Debugging executables</a></li>
<li><a accesskey="5" href="#Installing-libraries">Installing libraries</a></li>
<li><a accesskey="6" href="#Installing-executables">Installing executables</a></li>
<li><a accesskey="7" href="#Static-libraries">Linking static libraries</a></li>
</ul>
<hr/>
<div class="section-level-extent" id="Creating-object-files">

<h3 class="section" id="Creating-object-files-1"><span>3.1 Creating object files</span></h3>
<a class="index-entry-id" id="index-compiling-object-files"></a>
<a class="index-entry-id" id="index-object-files_002c-compiling"></a>
<p>To create an object file from a source file, the compiler is invoked
with the <samp class="option">-c</samp> flag (and any other desired flags):
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gcc -I. -g -O -c main.c</kbd>&#10;burger$&#10;</pre></div>
<p>The above compiler command produces an object file, usually named
<samp class="file">main.o</samp>, from the source file <samp class="file">main.c</samp>.
</p>
<p>For most library systems, creating object files that become part of a
static library is as simple as creating object files that are linked to
form an executable:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gcc -I. -g -O -c foo.c</kbd>&#10;burger$ <kbd class="kbd">gcc -I. -g -O -c hello.c</kbd>&#10;burger$&#10;</pre></div>
<a class="index-entry-id" id="index-position_002dindependent-code"></a>
<a class="index-entry-id" id="index-PIC-_0028position_002dindependent-code_0029"></a>
<p>Shared libraries, however, may only be built from
<em class="dfn">position-independent code</em> (PIC).  So, special flags must be passed
to the compiler to tell it to generate PIC rather than the standard
position-dependent code.
</p>
<a class="index-entry-id" id="index-library-object-file"></a>
<a class="index-entry-id" id="index-_002elo-files"></a>
<a class="index-entry-id" id="index-object-files_002c-library"></a>
<p>Since this is a library implementation detail, libtool hides the
complexity of PIC compiler flags and uses separate library object files
(the PIC one lives in the <samp class="file">.libs</samp> subdirectory and the
static one lives in the current directory).  On systems without shared
libraries, the PIC library object files are not created, whereas on
systems where all code is PIC, such as AIX, the static ones are not
created.
</p>
<p>To create library object files for <samp class="file">foo.c</samp> and <samp class="file">hello.c</samp>,
simply invoke libtool with the standard compilation command as
arguments (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Compile-mode">Compile mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">a23$ <kbd class="kbd">libtool --mode=compile gcc -I. -g -O -c foo.c</kbd>&#10;gcc -I. -g -O -c foo.c -o foo.o&#10;a23$ <kbd class="kbd">libtool --mode=compile gcc -I. -g -O -c hello.c</kbd>&#10;gcc -I. -g -O -c hello.c -o hello.o&#10;a23$&#10;</pre></div>
<p>Note that libtool silently creates an additional control file on each
‘<samp class="samp">compile</samp>’ invocation.  The <samp class="file">.lo</samp> file is the libtool object,
which Libtool uses to determine what object file may be built into a
shared library.  On ‘<samp class="samp">a23</samp>’, only static libraries are supported so
the library objects look like this:
</p>
<div class="example">
<pre class="example-preformatted"># foo.lo - a libtool object file&#10;# Generated by ltmain.sh (GNU libtool) 2.6.2&#10;#&#10;# Please DO NOT delete this file!&#10;# It is necessary for linking the library.&#10;&#10;# Name of the PIC object.&#10;pic_object=none&#10;&#10;# Name of the non-PIC object.&#10;non_pic_object='foo.o'&#10;</pre></div>
<p>On shared library systems, libtool automatically generates an
additional PIC object by inserting the appropriate PIC generation
flags into the compilation command:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=compile gcc -I. -g -O -c foo.c</kbd>&#10;mkdir .libs&#10;gcc -I. -g -O -c foo.c  -fPIC -DPIC -o .libs/foo.o&#10;gcc -I. -g -O -c foo.c -o foo.o &gt;/dev/null 2&gt;&amp;1&#10;burger$&#10;</pre></div>
<p>Note that Libtool automatically created the <samp class="file">.libs</samp> directory
upon its first execution, where PIC library object files will be stored.
</p>
<p>Since ‘<samp class="samp">burger</samp>’ supports shared libraries, and requires PIC
objects to build them, Libtool has compiled a PIC object and
made a note of it in the libtool object:
</p>
<div class="example">
<pre class="example-preformatted"># foo.lo - a libtool object file&#10;# Generated by ltmain.sh (GNU libtool) 2.6.2&#10;#&#10;# Please DO NOT delete this file!&#10;# It is necessary for linking the library.&#10;&#10;# Name of the PIC object.&#10;pic_object='.libs/foo.o'&#10;&#10;# Name of the non-PIC object.&#10;non_pic_object='foo.o'&#10;</pre></div>
<a class="index-entry-id" id="index-_002dno_002dsuppress_002c-libtool-compile-mode-option"></a>
<p>Notice the second run of GCC has its output discarded.  This is
done so the compiler warnings aren’t annoyingly duplicated.  If you
need to see both sets of warnings (you might have conditional code
inside ‘<samp class="samp">#ifdef PIC</samp>’ for example), you can turn off suppression by
passing the <samp class="option">-no-suppress</samp> option to libtool’s compile mode:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=compile gcc -no-suppress -I. -g -O -c hello.c</kbd>&#10;gcc -I. -g -O -c hello.c  -fPIC -DPIC -o .libs/hello.o&#10;gcc -I. -g -O -c hello.c -o hello.o&#10;burger$&#10;</pre></div>
<hr/>
</div>
<div class="section-level-extent" id="Linking-libraries">

<h3 class="section" id="Linking-libraries-1"><span>3.2 Linking libraries</span></h3>
<a class="index-entry-id" id="index-ar"></a>
<p>Without libtool, the programmer would invoke the <code class="command">ar</code> command to
create a static library:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">ar cr libhello.a hello.o foo.o</kbd>&#10;burger$&#10;</pre></div>
<a class="index-entry-id" id="index-ranlib"></a>
<p>But of course, that would be too simple, so many systems require that
you run the <code class="code">ranlib</code> command on the resulting library in order to
generate a symbol table:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">ranlib libhello.a</kbd>&#10;burger$&#10;</pre></div>
<p>It seems more natural to use the C compiler for this task, given
libtool’s “libraries are programs” approach.  So, on platforms without
shared libraries, libtool simply acts as a wrapper for the system
<code class="command">ar</code> (and possibly <code class="code">ranlib</code>) commands.
</p>
<a class="index-entry-id" id="index-libtool-libraries"></a>
<a class="index-entry-id" id="index-_002ela-files"></a>
<p>Again, the libtool control file name (<samp class="file">.la</samp> suffix) differs from
the standard library name (<samp class="file">.a</samp> suffix).  The arguments to
libtool are the same ones you would use to produce an executable named
<samp class="file">libhello.la</samp> with your compiler (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Link-mode">Link mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">a23$ <kbd class="kbd">libtool --mode=link gcc -g -O -o libhello.la foo.o hello.o</kbd>&#10;*** Warning: Linking the shared library libhello.la against the&#10;*** non-libtool objects foo.o hello.o is not portable!&#10;ar cr .libs/libhello.a&#10;ranlib .libs/libhello.a&#10;creating libhello.la&#10;(cd .libs &amp;&amp; rm -f libhello.la &amp;&amp; ln -s ../libhello.la libhello.la)&#10;a23$&#10;</pre></div>
<p>Aha!  Libtool caught a common error… trying to build a library
from standard objects instead of special <samp class="file">.lo</samp> object files.  This
doesn’t matter so much for static libraries, but on shared library
systems, it is of great importance.  (Note that you may replace
<samp class="file">libhello.la</samp> with <samp class="file">libhello.a</samp> in which case libtool won’t
issue the warning any more.  But although this method works, this is
not intended to be used because it makes you lose the benefits of
using Libtool.)
</p>
<p>So, let’s try again, this time with the library object files.  Remember
also that we need to add <samp class="option">-lm</samp> to the link command line because
<samp class="file">foo.c</samp> uses the <code class="code">cos</code> math library function (see <a class="pxref" href="#Using-libtool">Using libtool</a>).
</p>
<p>Another complication in building shared libraries is that we need to
specify the path to the directory where they will (eventually) be
installed (in this case, <samp class="file">/usr/local/lib</samp>)<a class="footnote" href="#FOOT1" id="DOCF1"><sup>1</sup></a>:
</p>
<div class="example">
<pre class="example-preformatted">a23$ <kbd class="kbd">libtool --mode=link gcc -g -O -o libhello.la foo.lo hello.lo \&#10;                -rpath /usr/local/lib -lm</kbd>&#10;ar cr .libs/libhello.a foo.o hello.o&#10;ranlib .libs/libhello.a&#10;creating libhello.la&#10;(cd .libs &amp;&amp; rm -f libhello.la &amp;&amp; ln -s ../libhello.la libhello.la)&#10;a23$&#10;</pre></div>
<p>Now, let’s try the same trick on the shared library platform:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=link gcc -g -O -o libhello.la foo.lo hello.lo \&#10;                -rpath /usr/local/lib -lm</kbd>&#10;rm -fr  .libs/libhello.a .libs/libhello.la&#10;ld -Bshareable -o .libs/libhello.so.0.0 .libs/foo.o .libs/hello.o -lm&#10;ar cr .libs/libhello.a foo.o hello.o&#10;ranlib .libs/libhello.a&#10;creating libhello.la&#10;(cd .libs &amp;&amp; rm -f libhello.la &amp;&amp; ln -s ../libhello.la libhello.la)&#10;burger$&#10;</pre></div>
<p>Now that’s significantly cooler… Libtool just ran an obscure
<code class="command">ld</code> command to create a shared library, as well as the static
library.
</p>
<a class="index-entry-id" id="index-_002elibs-subdirectory"></a>
<p>Note how libtool creates extra files in the <samp class="file">.libs</samp>
subdirectory, rather than the current directory.  This feature makes
it easier to clean up the build directory, and helps ensure
other programs fail horribly if you accidentally forget to use libtool
when you should.
</p>
<p>Again, you should look at the <samp class="file">.la</samp> file to see what Libtool
stores in it.  You will see Libtool uses this file to remember the
destination directory for the library (the argument to <samp class="option">-rpath</samp>)
as well as the dependency on the math library (‘<samp class="samp">-lm</samp>’).
</p>
<hr/>
</div>
<div class="section-level-extent" id="Linking-executables">

<h3 class="section" id="Linking-executables-1"><span>3.3 Linking executables</span></h3>
<a class="index-entry-id" id="index-linking-against-installed-libraries"></a>
<p>If you choose at this point to <em class="dfn">install</em> the library (put it in a
permanent location) before linking executables against it, then you
don’t need to use libtool to do the linking.  Simply use the appropriate
<samp class="option">-L</samp> and <samp class="option">-l</samp> flags to specify the library’s location.
</p>
<a class="index-entry-id" id="index-buggy-system-linkers"></a>
<p>Some system linkers insist on encoding the full directory name of each
shared library in the resulting executable.  Libtool has to work around
this misfeature by special magic to ensure that only permanent directory
names are put into installed executables.
</p>
<a class="index-entry-id" id="index-security-problems-with-buggy-linkers"></a>
<a class="index-entry-id" id="index-bugs_002c-subtle-ones-caused-by-buggy-linkers"></a>
<p>The importance of this bug must not be overlooked: it won’t cause
programs to crash in obvious ways.  It creates a security hole,
and possibly even worse, if you are modifying the library source code
after you have installed the package, you will change the behaviour of
the installed programs!
</p>
<p>So, if you want to link programs against the library before you install
it, you must use libtool to do the linking.
</p>
<a class="index-entry-id" id="index-linking-against-uninstalled-libraries"></a>
<p>Here’s the old way of linking against an uninstalled library:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gcc -g -O -o hell.old main.o libhello.a -lm</kbd>&#10;burger$&#10;</pre></div>
<p>Libtool’s way is almost the same<a class="footnote" href="#FOOT2" id="DOCF2"><sup>2</sup></a>
(see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Link-mode">Link mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">a23$ <kbd class="kbd">libtool --mode=link gcc -g -O -o hell main.o libhello.la</kbd>&#10;gcc -g -O -o hell main.o  ./.libs/libhello.a -lm&#10;a23$&#10;</pre></div>
<p>That looks too simple to be true.  All libtool did was transform
<samp class="file">libhello.la</samp> to <samp class="file">./.libs/libhello.a</samp>, but remember
that ‘<samp class="samp">a23</samp>’ has no shared libraries.  Notice Libtool also
remembered <samp class="file">libhello.la</samp> depends on <samp class="option">-lm</samp>, so even
though we didn’t specify <samp class="option">-lm</samp> on the libtool command
line<a class="footnote" href="#FOOT3" id="DOCF3"><sup>3</sup></a> Libtool has added it to the <code class="command">gcc</code> link line for us.
</p>
<p>On ‘<samp class="samp">burger</samp>’ Libtool links against the uninstalled shared library:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=link gcc -g -O -o hell main.o libhello.la</kbd>&#10;gcc -g -O -o .libs/hell main.o -L./.libs -R/usr/local/lib -lhello -lm&#10;creating hell&#10;burger$&#10;</pre></div>
<a class="index-entry-id" id="index-linking-with-installed-libtool-libraries"></a>
<p>Now assume <samp class="file">libhello.la</samp> had already been installed, and you want
to link a new program with it.  You could figure out where it lives by
yourself, then run:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gcc -g -O -o test test.o -L/usr/local/lib -lhello -lm</kbd>&#10;</pre></div>
<p>However, unless <samp class="file">/usr/local/lib</samp> is in the standard library search
path, you won’t be able to run <code class="code">test</code>.  If instead you use libtool
to link the already-installed libtool library, it will do The Right
Thing (TM) for you:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=link gcc -g -O -o test test.o \&#10;                /usr/local/lib/libhello.la</kbd>&#10;gcc -g -O -o .libs/test test.o -Wl,--rpath \&#10;        -Wl,/usr/local/lib /usr/local/lib/libhello.a -lm&#10;creating test&#10;burger$&#10;</pre></div>
<p>Note that libtool added the necessary run-time path flag, as well as
<samp class="option">-lm</samp>, the library libhello.la depended upon.  Nice, huh?
</p>
<a class="index-entry-id" id="index-wrapper-scripts-for-programs"></a>
<a class="index-entry-id" id="index-program-wrapper-scripts"></a>
<p>Notice the executable, <code class="code">hell</code>, was actually created in the
<samp class="file">.libs</samp> subdirectory.  Then, a wrapper script (or, on
certain platforms, a wrapper executable see <a class="pxref" href="#Wrapper-executables">Wrapper executables for uninstalled programs</a>) was
created in the current directory.
</p>
<p>Since libtool created a wrapper script, you should use libtool to
install it and debug it too.  However, since the program does not depend
on any uninstalled libtool library, it is probably usable even without
the wrapper script.
</p>
<p>On NetBSD 1.2, libtool encodes the installation directory of
<samp class="file">libhello</samp>, by using the ‘<samp class="samp">-R/usr/local/lib</samp>’ compiler flag.
Then, the wrapper script guarantees the executable finds the
correct shared library (the one in <samp class="file">./.libs</samp>) so it
can be properly installed.
</p>
<p>Let’s compare the two different programs:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">time ./hell.old</kbd>&#10;Welcome to GNU Hell!&#10;** This is not GNU Hello.  There is no built-in mail reader. **&#10;        0.21 real         0.02 user         0.08 sys&#10;burger$ <kbd class="kbd">time ./hell</kbd>&#10;Welcome to GNU Hell!&#10;** This is not GNU Hello.  There is no built-in mail reader. **&#10;        0.63 real         0.09 user         0.59 sys&#10;burger$&#10;</pre></div>
<p>The wrapper script takes significantly longer to execute, but at least
the results are correct, even though the shared library hasn’t been
installed yet.
</p>
<p>So, what about all the space savings that shared libraries are supposed
to yield?
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">ls -l hell.old libhello.a</kbd>&#10;-rwxr-xr-x  1 gord  gord  15481 Nov 14 12:11 hell.old&#10;-rw-r--r--  1 gord  gord   4274 Nov 13 18:02 libhello.a&#10;burger$ <kbd class="kbd">ls -l .libs/hell .libs/libhello.*</kbd>&#10;-rwxr-xr-x  1 gord  gord  11647 Nov 14 12:10 .libs/hell&#10;-rw-r--r--  1 gord  gord   4274 Nov 13 18:44 .libs/libhello.a&#10;-rwxr-xr-x  1 gord  gord  12205 Nov 13 18:44 .libs/libhello.so.0.0&#10;burger$&#10;</pre></div>
<p>Well, that sucks.  Maybe I should just scrap this project and take up
basket weaving.
</p>
<p>Actually, it just proves an important point: shared libraries incur
overhead because of their (relative) complexity.  In this situation, the
price of being dynamic is eight kilobytes, and the payoff is about four
kilobytes.  So, having a shared <samp class="file">libhello</samp> won’t be an advantage
until we link it against at least a few more programs.
</p>
<ul class="mini-toc">
<li><a accesskey="1" href="#Wrapper-executables">Wrapper executables for uninstalled programs</a></li>
</ul>
<hr/>
<div class="subsection-level-extent" id="Wrapper-executables">

<h4 class="subsection" id="Wrapper-executables-for-uninstalled-programs"><span>3.3.1 Wrapper executables for uninstalled programs</span></h4>
<a class="index-entry-id" id="index-wrapper-executables-for-uninstalled-programs"></a>
<a class="index-entry-id" id="index-program-wrapper-executables"></a>
<p>Some platforms, notably those hosted on Windows such as Cygwin
and MinGW, use a wrapper executable rather than a wrapper script
to ensure proper operation of uninstalled programs linked by libtool
against uninstalled shared libraries. The wrapper executable thus
performs the same function as the wrapper script used on other
platforms, but allows to satisfy the <code class="command">make</code> rules for the
program, whose name ends in <code class="code">$(EXEEXT)</code>. The actual program
executable is created below <samp class="file">.libs</samp>, and its name will end
in <code class="code">$(EXEEXT)</code> and may or may not contain an <code class="code">lt-</code> prefix.
This wrapper executable sets various environment values so that the
program executable may locate its (uninstalled) shared libraries,
and then launches the program executable.
</p>
<p>The wrapper executable provides a debug mode, enabled by passing the
command-line option <code class="code">--lt-debug</code> (see below). When executing in
debug mode, diagnostic information will be printed to <code class="code">stderr</code>
before the program executable is launched.
</p>
<p>Finally, the wrapper executable supports a number of command line
options that may be useful when debugging the operation of the wrapper
system. All of these options begin with <code class="code">--lt-</code>, and if present
they and their arguments will be removed from the argument list passed
on to the program executable.  Therefore, the program executable may not
employ command line options that begin with <code class="code">--lt-</code>. (In fact, the
wrapper executable will detect any command line options that begin with
<code class="code">--lt-</code> and abort with an error message if the option is not
recognized.) If this presents a problem, please contact the Libtool
team at the Libtool bug reporting address <a class="email" href="mailto:bug-libtool@gnu.org">bug-libtool@gnu.org</a>.
</p>
<p>These command line options include:
</p>
<dl class="table">
<dt><samp class="option">--lt-dump-script</samp></dt>
<dd><p>Causes the wrapper to print a copy of the wrapper <em class="emph">script</em>
to <code class="code">stdout</code>, and exit.
</p>
</dd>
<dt><samp class="option">--lt-debug</samp></dt>
<dd><p>Causes the wrapper to print diagnostic information to <code class="code">stdout</code>,
before launching the program executable.
</p>
</dd>
</dl>
<p>For consistency, both the wrapper <em class="emph">script</em> and the wrapper
<em class="emph">executable</em> support these options.
</p>
<hr/>
</div>
</div>
<div class="section-level-extent" id="Debugging-executables">

<h3 class="section" id="Debugging-executables-1"><span>3.4 Debugging executables</span></h3>
<p>If <samp class="file">hell</samp> was a complicated program, you would certainly want to
test and debug it before installing it on your system.  In the above
section, you saw how the libtool wrapper script makes it possible to run
the program directly, but unfortunately, this mechanism interferes with
the debugger:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gdb hell</kbd>&#10;GDB is free software and you are welcome to distribute copies of it&#10; under certain conditions; type "show copying" to see the conditions.&#10;There is no warranty for GDB; type "show warranty" for details.&#10;GDB 4.16 (i386-unknown-netbsd), (C) 1996 Free Software Foundation, Inc.&#10;&#10;"hell": not in executable format: File format not recognized&#10;&#10;(gdb) <kbd class="kbd">quit</kbd>&#10;burger$&#10;</pre></div>
<p>Sad.  It doesn’t work because GDB doesn’t know where the executable
lives.  So, let’s try again, by invoking GDB directly on the executable:
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">gdb .libs/hell</kbd>&#10;GNU gdb 5.3 (i386-unknown-netbsd)&#10;Copyright © 1996--2019, 2021--2026 Free Software Foundation,&#10;Inc.&#10;GDB is free software, covered by the GNU General Public License,&#10;and you are welcome to change it and/or distribute copies of it&#10;under certain conditions.  Type "show copying" to see the conditions.&#10;There is no warranty for GDB.  Type "show warranty" for details.&#10;(gdb) <kbd class="kbd">break main</kbd>&#10;Breakpoint 1 at 0x8048547: file main.c, line 29.&#10;(gdb) <kbd class="kbd">run</kbd>&#10;Starting program: /home/src/libtool/demo/.libs/hell&#10;/home/src/libtool/demo/.libs/hell: can't load library 'libhello.so.0'&#10;&#10;Program exited with code 020.&#10;(gdb) <kbd class="kbd">quit</kbd>&#10;burger$&#10;</pre></div>
<p>Argh.  Now GDB complains because it cannot find the shared library that
<samp class="file">hell</samp> is linked against.  So, we must use libtool to
properly set the library path and run the debugger.  Fortunately, we can
forget all about the <samp class="file">.libs</samp> directory, and just run it on
the executable wrapper (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Execute-mode">Execute mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=execute gdb hell</kbd>&#10;GNU gdb 5.3 (i386-unknown-netbsd)&#10;Copyright © 1996--2019, 2021--2026 Free Software Foundation,&#10;Inc.&#10;GDB is free software, covered by the GNU General Public License,&#10;and you are welcome to change it and/or distribute copies of it&#10;under certain conditions.  Type "show copying" to see the conditions.&#10;There is no warranty for GDB.  Type "show warranty" for details.&#10;(gdb) <kbd class="kbd">break main</kbd>&#10;Breakpoint 1 at 0x8048547: file main.c, line 29.&#10;(gdb) <kbd class="kbd">run</kbd>&#10;Starting program: /home/src/libtool/demo/.libs/hell&#10;&#10;Breakpoint 1, main (argc=1, argv=0xbffffc40) at main.c:29&#10;29        printf ("Welcome to GNU Hell!\n");&#10;(gdb) <kbd class="kbd">quit</kbd>&#10;The program is running.  Quit anyway (and kill it)? (y or n) <kbd class="kbd">y</kbd>&#10;burger$&#10;</pre></div>
<hr/>
</div>
<div class="section-level-extent" id="Installing-libraries">

<h3 class="section" id="Installing-libraries-1"><span>3.5 Installing libraries</span></h3>
<a class="index-entry-id" id="index-strip"></a>
<p>Installing libraries on a non-libtool system is quite
straightforward… just copy them into place:<a class="footnote" href="#FOOT4" id="DOCF4"><sup>4</sup></a>
</p>
<a class="index-entry-id" id="index-su"></a>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">su</kbd>&#10;Password: <kbd class="kbd">********</kbd>&#10;burger# <kbd class="kbd">cp libhello.a /usr/local/lib/libhello.a</kbd>&#10;burger#&#10;</pre></div>
<p>Oops, don’t forget the <code class="command">ranlib</code> command:
</p>
<div class="example">
<pre class="example-preformatted">burger# <kbd class="kbd">ranlib /usr/local/lib/libhello.a</kbd>&#10;burger#&#10;</pre></div>
<a class="index-entry-id" id="index-install"></a>
<p>Libtool installation is quite simple, as well.  Just use the
<code class="command">install</code> or <code class="command">cp</code> command that you normally would
(see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Install-mode">Install mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">a23# <kbd class="kbd">libtool --mode=install cp libhello.la /usr/local/lib/libhello.la</kbd>&#10;cp libhello.la /usr/local/lib/libhello.la&#10;cp .libs/libhello.a /usr/local/lib/libhello.a&#10;ranlib /usr/local/lib/libhello.a&#10;a23#&#10;</pre></div>
<p>Note that the libtool library <samp class="file">libhello.la</samp> is also installed, to
help libtool with uninstallation (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Uninstall-mode">Uninstall mode</a>) and linking
(see <a class="pxref" href="#Linking-executables">Linking executables</a>) and to help programs with dlopening
(see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Dlopened-modules">Dlopened modules</a>).
</p>
<p>Here is the shared library example:
</p>
<div class="example">
<pre class="example-preformatted">burger# <kbd class="kbd">libtool --mode=install install -c libhello.la \&#10;                /usr/local/lib/libhello.la</kbd>&#10;install -c .libs/libhello.so.0.0 /usr/local/lib/libhello.so.0.0&#10;install -c libhello.la /usr/local/lib/libhello.la&#10;install -c .libs/libhello.a /usr/local/lib/libhello.a&#10;ranlib /usr/local/lib/libhello.a&#10;burger#&#10;</pre></div>
<a class="index-entry-id" id="index-stripping-libraries"></a>
<a class="index-entry-id" id="index-libraries_002c-stripping"></a>
<p>It is safe to specify the <samp class="option">-s</samp> (strip symbols) flag if you use a
BSD-compatible install program when installing libraries.
Libtool will either ignore the <samp class="option">-s</samp> flag, or will run a program
that will strip only debugging and compiler symbols from the library.
</p>
<p>Once the libraries have been put in place, there may be some additional
configuration that you need to do before using them.  First, you must
make sure that where the library is installed actually agrees with the
<samp class="option">-rpath</samp> flag you used to build it.
</p>
<a class="index-entry-id" id="index-postinstallation"></a>
<a class="index-entry-id" id="index-installation_002c-finishing"></a>
<a class="index-entry-id" id="index-libraries_002c-finishing-installation"></a>
<p>Then, running ‘<samp class="samp">libtool -n finish <var class="var">libdir</var></samp>’ can give you
further hints on what to do (see <a class="pxref" href="/docs/gnu-libtool-trial/source/v2-6-2/manual.html#Finish-mode">Finish mode</a>):
</p>
<div class="example">
<pre class="example-preformatted">burger# <kbd class="kbd">libtool -n finish /usr/local/lib</kbd>&#10;PATH="$PATH:/sbin" ldconfig -m /usr/local/lib&#10;-----------------------------------------------------------------&#10;Libraries have been installed in:&#10;   /usr/local/lib&#10;&#10;To link against installed libraries in a given directory, LIBDIR,&#10;you must use the '-LLIBDIR' flag during linking.&#10;&#10; You will also need to do one of the following:&#10;   - add LIBDIR to the 'LD_LIBRARY_PATH' environment variable&#10;     during execution&#10;   - add LIBDIR to the 'LD_RUN_PATH' environment variable&#10;     during linking&#10;   - use the '-RLIBDIR' linker flag&#10;&#10;See any operating system documentation about shared libraries for&#10;more information, such as the ld and ld.so manual pages.&#10;-----------------------------------------------------------------&#10;burger#&#10;</pre></div>
<p>After you have completed these steps, you can go on to begin using the
installed libraries.  You may also install any executables that depend
on libraries you created.
</p>
<hr/>
</div>
<div class="section-level-extent" id="Installing-executables">

<h3 class="section" id="Installing-executables-1"><span>3.6 Installing executables</span></h3>
<p>If you used libtool to link any executables against uninstalled libtool
libraries (see <a class="pxref" href="#Linking-executables">Linking executables</a>), you need to use libtool to
install the executables after the libraries have been installed
(see <a class="pxref" href="#Installing-libraries">Installing libraries</a>).
</p>
<p>So, for our Ultrix example, we would run:
</p>
<div class="example">
<pre class="example-preformatted">a23# libtool --mode=install install -c hell /usr/local/bin/hell&#10;install -c hell /usr/local/bin/hell&#10;a23#&#10;</pre></div>
<p>On shared library systems that require wrapper scripts, libtool just
ignores the wrapper script and installs the correct binary:
</p>
<div class="example">
<pre class="example-preformatted">burger# libtool --mode=install install -c hell /usr/local/bin/hell&#10;install -c .libs/hell /usr/local/bin/hell&#10;burger#&#10;</pre></div>
<hr/>
</div>
<div class="section-level-extent" id="Static-libraries">

<h3 class="section" id="Linking-static-libraries"><span>3.7 Linking static libraries</span></h3>
<a class="index-entry-id" id="index-static-linking"></a>
<a class="index-entry-id" id="index-convenience-libraries"></a>
<p>Why return to <code class="command">ar</code> and <code class="command">ranlib</code> silliness when you’ve had a
taste of libtool?  Well, sometimes it is desirable to create a static
archive that can never be shared.  The most frequent case is when you
have a set of object files that you use to build several different
libraries.  You can create a “convenience library” out of those
objects, and link against that with the other libraries, instead of
listing all the object files every time.
</p>
<p>If you just want to link this convenience library into programs, then
you could just ignore libtool entirely, and use the old <code class="command">ar</code> and
<code class="command">ranlib</code> commands (or the corresponding GNU Automake
‘<samp class="samp">_LIBRARIES</samp>’ rules).  You can even install a convenience library
using GNU Libtool, though you probably don’t want to and hence GNU
Automake doesn’t allow you to do so.
</p>
<div class="example">
<pre class="example-preformatted">burger$ <kbd class="kbd">libtool --mode=install ./install-sh -c libhello.a \&#10;                /local/lib/libhello.a</kbd>&#10;./install-sh -c libhello.a /local/lib/libhello.a&#10;ranlib /local/lib/libhello.a&#10;burger$&#10;</pre></div>
<p>Using libtool for static library installation protects your library from
being accidentally stripped (if the installer used the <samp class="option">-s</samp> flag),
as well as automatically running the correct <code class="command">ranlib</code> command.
</p>
<p>But libtool libraries are more than just collections of object files:
they can also carry library dependency information, which old archives
do not.  If you want to create a libtool static convenience library, you
can omit the <samp class="option">-rpath</samp> flag and use <samp class="option">-static</samp> to indicate that
you’re only interested in a static library.  When you link a program
with such a library, libtool will actually link all object files and
dependency libraries into the program.
</p>
<p>If you omit both <samp class="option">-rpath</samp> and <samp class="option">-static</samp>, libtool will create a
convenience library that can be used to create other libtool
libraries, even shared ones.  Just like in the static case, the library
behaves as an alias to a set of object files and dependency libraries,
but in this case the object files are suitable for inclusion in shared
libraries.  But be careful not to link a single convenience library,
directly or indirectly, into a single program or library, otherwise you
may get errors about symbol redefinitions.
</p>
<p>The key is remembering that a convenience library contains PIC
objects, and can be linked where a list of PIC objects makes sense;
i.e. into a shared library.  A static convenience library contains
non-PIC objects, so can be linked into an old static library, or
a program.
</p>
<p>When GNU Automake is used, you should use <code class="code">noinst_LTLIBRARIES</code>
instead of <code class="code">lib_LTLIBRARIES</code> for convenience libraries, so that
the <samp class="option">-rpath</samp> option is not passed when they are linked.
</p>
<p>As a rule of thumb, link a libtool convenience library into at most one
libtool library, and never into a program, and link libtool static
convenience libraries only into programs, and only if you need to carry
library dependency information to the user of the static convenience
library.
</p>
<a class="index-entry-id" id="index-standalone-binaries"></a>
<p>Another common situation where static linking is desirable is in
creating a standalone binary.  Use libtool to do the linking and add the
<samp class="option">-all-static</samp> flag.
</p>
<hr/>
</div>
<h5 class="footnote-body-heading"><a href="#DOCF1" id="FOOT1">(1)</a></h5><p>If you don’t
specify an <code class="code">rpath</code>, then libtool builds a libtool convenience
archive, not a shared library (see <a class="pxref" href="#Static-libraries">Linking static libraries</a>).</p><h5 class="footnote-body-heading"><a href="#DOCF2" id="FOOT2">(2)</a></h5><p>However, you should avoid using
<samp class="option">-L</samp> or <samp class="option">-l</samp> flags to link against an uninstalled libtool
library.  Just specify the relative path to the <samp class="file">.la</samp> file, such as
<samp class="file">../intl/libintl.la</samp>.  This is a design decision to eliminate any
ambiguity when linking against uninstalled shared libraries.</p><h5 class="footnote-body-heading"><a href="#DOCF3" id="FOOT3">(3)</a></h5><p>And why should we? <samp class="file">main.o</samp> doesn’t directly depend on <samp class="option">-lm</samp>
after all.
</p><h5 class="footnote-body-heading"><a href="#DOCF4" id="FOOT4">(4)</a></h5><p>Don’t
strip static libraries though, or they will be unusable.</p></div></div>
