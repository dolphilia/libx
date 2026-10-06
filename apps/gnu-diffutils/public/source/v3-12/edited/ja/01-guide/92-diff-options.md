---
title: "diff のオプション"
description: "GNU diffutils3.12第11〜15章全文の独立・非公式日本語訳。"
documentId: "gnu-diffutils:3.12:92-diff-options"
licenseSource: "gnu-diffutils-manual"
toc: {"maxLevel": 4}
documentContext: [{"kind": "source", "html": "<section class=\"gnu-diffutils-notices\"><h3>Libx GNU diffutils 3.12 Comparison and Merging — Overview and Chapters 1–15 / Libx GNU diffutils 3.12 比較とマージ — 概要・第1〜15章</h3><p>Original authors: David MacKenzie, Paul Eggert and Richard Stallman Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual is for GNU Diffutils\n(version 3.12, 12 January 2025),\nand documents the GNU <code class=\"command\">diff</code>, <code class=\"command\">diff3</code>,\n<code class=\"command\">sdiff</code>, and <code class=\"command\">cmp</code> commands for showing the\ndifferences between files and the GNU <code class=\"command\">patch</code> command for\nusing their output to update files.\n</p><p>Copyright © 1992–1994, 1998, 2001–2002, 2004, 2006, 2009–2025\nFree Software Foundation, Inc.\n</p><blockquote class=\"quotation\">\n<p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with no\nInvariant Sections, no Front-Cover Texts, and no Back-Cover Texts.\nA copy of the license is included in the section entitled\n“GNU Free Documentation License.”\n</p></blockquote><p>Copyright © 2026 Libx, for editing and independent Japanese translation. This modified guide is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, Front-Cover Texts, or Back-Cover Texts. No new cover texts or invariant sections have been added.</p><h3>History / 履歴</h3><p>Original: GNU Diffutils: Comparing and Merging Files; version3.12; updated12January2025; author David MacKenzie, Paul Eggert and Richard Stallman; publisher Free Software Foundation. Source: diffutils-3.12.tar.gz, SHA256 5be181b27ec38aad2450080661a64e4a1752bb29b7d5052bf0a02a70f623f9b2.</p><p>2026: Libx GNU diffutils3.12 Comparison and Output Formats — Overview and Chapters1–4 / Libx GNU diffutils3.12 比較と出力書式 — 概要・第1〜4章. Modification author and publisher: Libx. Static chapter-scoped HTML in editable Markdown and unofficial Japanese translation. Original copyright, permission and whole English license preserved. Modified6October2026.</p><p>7 October 2026: Libx GNU diffutils 3.12 Comparison and Merging — Overview and Chapters 1–10 / Libx GNU diffutils 3.12 比較とマージ — 概要・第1〜10章. Modification author and publisher: Libx. Added complete chapter 10, with independent Japanese translation and static original examples. Previously published Overview and Chapters 1–9 preferred text is retained; original archive, permission, authors and full English GFDL are preserved.</p><p>7 October 2026: Libx GNU diffutils 3.12 Comparison and Merging — Overview and Chapters 1–15 / Libx GNU diffutils 3.12 比較とマージ — 概要・第1〜15章. Modification author and publisher: Libx. Added complete chapters 11–15, with independent Japanese translation and static original examples. Previously adopted Overview and Chapters 1–10 preferred text is retained; original archive, permission, authors and full English GFDL are preserved.</p></section><details class=\"gnu-diffutils-license\"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary><div class=\"appendix-level-extent\" id=\"Copying-This-Manual\">\n<h2 class=\"appendix\" id=\"Copying-This-Manual-1\"><span>Appendix A Copying This Manual<a class=\"copiable-link\" href=\"#Copying-This-Manual-1\"> ¶</a></span></h2>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000–2002, 2007–2008, 2022–2025 Free Software\nFoundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents<a class=\"copiable-link\" href=\"#ADDENDUM_003a-How-to-use-this-License-for-your-documents\"> ¶</a></span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></details>"}]
---

<div class="gnu-diffutils-original-content" id="diff-Options">
<h3 class="section" id="Options-to-diff"><span>13.1 <code class="command">diff</code> のオプション</span></h3>
<a class="index-entry-id" id="index-diff-options"></a>
<a class="index-entry-id" id="index-options-for-diff"></a>
<p>GNU <code class="command">diff</code> が受け付けるすべてのオプションを以下にまとめます。ほとんどのオプションには同等の名前が2つあり、一方は「<samp class="samp">-</samp>」を前置した1文字、他方は「<samp class="samp">--</samp>」を前置した長い名前です。引数を取らない1文字のオプションは、複数をコマンドラインの1語にまとめられます。<samp class="option">-ac</samp> は <samp class="option">-a -c</samp> と同等です。長い名前のオプションは、一意に識別できる任意の接頭部分まで省略できます。角括弧（[ と ]）は省略可能な引数を表します。</p>
<dl class="table">
<dt><samp class="option">-a</samp></dt>
<dt><samp class="option">--text</samp></dt>
<dd><p>テキストに見えないファイルも含め、すべてのファイルをテキストとして扱い、行単位で比較します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/09-binary/#Binary">バイナリファイルとテキスト比較の強制</a>を参照してください。</p>
</dd>
<dt><samp class="option">-b</samp></dt>
<dt><samp class="option">--ignore-space-change</samp></dt>
<dd><p>空白の量の変化を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/04-white-space/#White-Space">空白とタブの間隔による相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">-B</samp></dt>
<dt><samp class="option">--ignore-blank-lines</samp></dt>
<dd><p>空行の挿入・削除だけの変更を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/05-blank-lines/#Blank-Lines">すべて空行である相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">--binary</samp></dt>
<dd><p>バイナリモードでデータを読み書きします。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/09-binary/#Binary">バイナリファイルとテキスト比較の強制</a>を参照してください。</p>
</dd>
<dt><samp class="option">-c</samp></dt>
<dd><p>コンテキスト出力形式を使い、3行のコンテキストを表示します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/14-context-format/#Context-Format">コンテキスト形式</a>を参照してください。</p>
</dd>
<dt><a id="index-color_002c-distinguishing-different-context"></a><span><samp class="option">--color [=<var class="var">when</var>]</samp></span></dt>
<dd><p>ヘッダー、追加行、削除行などの異なるコンテキストを区別するために、色を使うか指定します。<var class="var">when</var> は省略するか、次のいずれかにします。</p><ul class="itemize mark-bullet">
<li>none <a class="index-entry-id" id="index-none-color-option"></a> 色をまったく使いません。–color オプションを指定しない場合のデフォルトです。</li><li>auto <a class="index-entry-id" id="index-auto-color-option"></a> <a class="index-entry-id" id="index-terminal_002c-using-color-iff"></a> 標準出力が端末の場合だけ色を使います。</li><li>always <a class="index-entry-id" id="index-always-color-option"></a> 常に色を使います。</li></ul>
<p><samp class="option">--color</samp> を指定して <var class="var">when</var> を省略すると、<samp class="option">--color=auto</samp> と同等になります。</p>
</dd>
<dt><samp class="option">-C <var class="var">lines</var></samp></dt>
<dt><samp class="option">--context<span class="r">[</span>=<var class="var">lines</var><span class="r">]</span></samp></dt>
<dd><p>コンテキスト出力形式を使い、<var class="var">lines</var>（整数）行のコンテキストを表示します。<var class="var">lines</var> を省略した場合は3行です。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/14-context-format/#Context-Format">コンテキスト形式</a>を参照してください。<code class="command">patch</code> が正常に動作するには、通常少なくとも2行のコンテキストが必要です。</p>
<p>互換性のため、<code class="command">diff</code> は旧式のオプション構文 <samp class="option">-<var class="var">lines</var></samp> もサポートします。これは <samp class="option">-c</samp>、<samp class="option">-p</samp>、または <samp class="option">-u</samp> と組み合わせると有効になります。新しいスクリプトでは、代わりに <samp class="option">-U <var class="var">lines</var></samp>（<samp class="option">-C <var class="var">lines</var></samp>）を使ってください。</p>
</dd>
<dt><samp class="option">--changed-group-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、両ファイルの異なる行を含む行グループを if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/38-line-group-formats/#Line-Group-Formats">行グループ形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">-d</samp></dt>
<dt><samp class="option">--minimal</samp></dt>
<dd><p>アルゴリズムを変更し、より小さな変更集合を見つけられる可能性があります。その分 <code class="command">diff</code> は遅くなり、場合によっては大幅に遅くなります。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/48-diff-performance/#diff-Performance"><code class="command">diff</code> の性能のトレードオフ</a>を参照してください。</p>
</dd>
<dt><samp class="option">-D <var class="var">name</var></samp></dt>
<dt><samp class="option">--ifdef=<var class="var">name</var></samp></dt>
<dd><p>プリプロセッサーマクロ <var class="var">name</var> を条件とする、マージ済みの「<samp class="samp">#ifdef</samp>」形式の出力を作ります。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/37-if-then-else/#If_002dthen_002delse">if-then-else によるファイルのマージ</a>を参照してください。</p>
</dd>
<dt><samp class="option">-e</samp></dt>
<dt><samp class="option">--ed</samp></dt>
<dd><p>有効な <code class="command">ed</code> スクリプトとなる出力を作ります。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/32-ed-scripts/#ed-Scripts"><code class="command">ed</code> スクリプト</a>を参照してください。</p>
</dd>
<dt><samp class="option">-E</samp></dt>
<dt><samp class="option">--ignore-tab-expansion</samp></dt>
<dd><p>タブ展開による変化を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/04-white-space/#White-Space">空白とタブの間隔による相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">-f</samp></dt>
<dt><samp class="option">--forward-ed</samp></dt>
<dd><p><code class="command">ed</code> スクリプトに多少似た出力を作りますが、変更はファイル内で現れる順に並びます。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/35-forward-ed/#Forward-ed">順方向の <code class="command">ed</code> スクリプト</a>を参照してください。</p>
</dd>
<dt><samp class="option">-F <var class="var">regexp</var></samp></dt>
<dt><samp class="option">--show-function-line=<var class="var">regexp</var></samp></dt>
<dd><p>コンテキスト形式と unified 形式で、各相違ハンクの前にある、<var class="var">regexp</var> に最後に一致した行の一部を表示します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/22-specified-headings/#Specified-Headings">正規表現に一致する行を表示する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--from-file=<var class="var">file</var></samp></dt>
<dd><p><var class="var">file</var> を各オペランドと比較します。<var class="var">file</var> はディレクトリでもかまいません。</p>
</dd>
<dt><samp class="option">--help</samp></dt>
<dd><p>使用方法の概要を出力して終了します。</p>
</dd>
<dt><samp class="option">--horizon-lines=<var class="var">lines</var></samp></dt>
<dd><p>共通する先頭部分の末尾 <var class="var">lines</var> 行と、共通する末尾部分の先頭 <var class="var">lines</var> 行を捨てません。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/48-diff-performance/#diff-Performance"><code class="command">diff</code> の性能のトレードオフ</a>を参照してください。</p>
</dd>
<dt><samp class="option">-i</samp></dt>
<dt><samp class="option">--ignore-case</samp></dt>
<dd><p>大文字・小文字の変化を無視し、両者を同等とみなします。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/07-case-folding/#Case-Folding">大文字・小文字の相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">-I <var class="var">regexp</var></samp></dt>
<dt><samp class="option">--ignore-matching-lines=<var class="var">regexp</var></samp></dt>
<dd><p><var class="var">regexp</var> に一致する行の挿入・削除だけの変更を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/06-specified-lines/#Specified-Lines">すべての行が正規表現に一致する相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">--ignore-file-name-case</samp></dt>
<dd><p>ファイル名の比較で大文字・小文字を無視します。たとえば <samp class="file">d</samp> と <samp class="file">e</samp> の再帰的比較では、<samp class="file">d/Init</samp> と <samp class="file">e/inIt</samp> の内容を比較することがあります。トップレベルでは「<samp class="samp">diff d inIt</samp>」が <samp class="file">d/Init</samp> と <samp class="file">inIt</samp> の内容を比較することがあります。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-l</samp></dt>
<dt><samp class="option">--paginate</samp></dt>
<dd><p>出力を <code class="command">pr</code> に渡してページに分割します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/47-pagination/#Pagination"><code class="command">diff</code> 出力のページ分割</a>を参照してください。</p>
</dd>
<dt><samp class="option">-L <var class="var">label</var></samp></dt>
<dt><samp class="option">--label=<var class="var">label</var></samp></dt>
<dd><p>コンテキスト形式（<a class="pxref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/14-context-format/#Context-Format">コンテキスト形式</a>参照）と unified 形式（<a class="pxref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/18-unified-format/#Unified-Format">unified 形式</a>参照）のヘッダーで、ファイル名の代わりに <var class="var">label</var> を使います。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/36-rcs/#RCS">RCS スクリプト</a>を参照してください。</p>
</dd>
<dt><samp class="option">--left-column</samp></dt>
<dd><p>横並び形式で、共通する2行の左側の列だけを表示します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/26-side-by-side-format/#Side-by-Side-Format">横並び形式の制御</a>を参照してください。</p>
</dd>
<dt><samp class="option">--line-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、すべての入力行を if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/39-line-formats/#Line-Formats">行形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">-n</samp></dt>
<dt><samp class="option">--rcs</samp></dt>
<dd><p>RCS 形式の diff を出力します。<samp class="option">-f</samp> と似ていますが、各コマンドで対象行数を指定します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/36-rcs/#RCS">RCS スクリプト</a>を参照してください。</p>
</dd>
<dt><samp class="option">-N</samp></dt>
<dt><samp class="option">--new-file</samp></dt>
<dd><p>一方のファイルが存在しない場合は、存在するが空であると扱います。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--new-group-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、第2ファイルだけから取った行グループを if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/38-line-group-formats/#Line-Group-Formats">行グループ形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--new-line-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、第2ファイルだけから取った1行を if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/39-line-formats/#Line-Formats">行形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--no-dereference</samp></dt>
<dd><p>シンボリックリンクの参照先ではなく、リンク自体を処理します。2つのリンクが等しいとみなされるのは、参照先の名前が厳密に同じ場合だけです。</p>
</dd>
<dt><samp class="option">--old-group-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、第1ファイルだけから取った行グループを if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/38-line-group-formats/#Line-Group-Formats">行グループ形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--old-line-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、第1ファイルだけから取った1行を if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/39-line-formats/#Line-Formats">行形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">-p</samp></dt>
<dt><samp class="option">--show-c-function</samp></dt>
<dd><p>各変更がどの C 関数内にあるかを示します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/23-c-function-headings/#C-Function-Headings">C 関数の見出しを表示する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--palette=<var class="var">palette</var></samp></dt>
<dd><p>色付き出力が有効なときの配色を指定します。デフォルトは「<samp class="samp">rs=0:hd=1:ad=32:de=31:ln=36</samp>」で、削除行は赤、追加行は緑、行番号はシアン、ヘッダーは太字になります。</p>
<p>サポートされる機能は次のとおりです。</p>
<dl class="table">
<dt><a id="index-ad-capability"></a><span><code class="code">ad=32</code></span></dt>
<dd>
<p>追加行の SGR 部分文字列。デフォルトは緑の前景色です。</p>
</dd>
<dt><a id="index-de-capability"></a><span><code class="code">de=31</code></span></dt>
<dd>
<p>削除行の SGR 部分文字列。デフォルトは赤の前景色です。</p>
</dd>
<dt><a id="index-hd-capability"></a><span><code class="code">hd=1</code></span></dt>
<dd>
<p>ハンクヘッダーの SGR 部分文字列。デフォルトは太字の前景表示です。</p>
</dd>
<dt><a id="index-ln-capability"></a><span><code class="code">ln=36</code></span></dt>
<dd>
<p>行番号の SGR 部分文字列。デフォルトはシアンの前景色です。</p></dd>
</dl>
</dd>
<dt><samp class="option">-q</samp></dt>
<dt><samp class="option">--brief</samp></dt>
<dd><p>相違の詳細を示さず、ファイルが異なるかどうかだけを報告します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/08-brief/#Brief">異なるファイルの概要を示す</a>を参照してください。</p>
</dd>
<dt><samp class="option">-r</samp></dt>
<dt><samp class="option">--recursive</samp></dt>
<dd><p>ディレクトリを比較するとき、見つかったサブディレクトリを再帰的に比較します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-s</samp></dt>
<dt><samp class="option">--report-identical-files</samp></dt>
<dd><p>2つのファイルが同じ場合に報告します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-S <var class="var">file</var></samp></dt>
<dt><samp class="option">--starting-file=<var class="var">file</var></samp></dt>
<dd><p>ディレクトリを比較するとき、ファイル <var class="var">file</var> から開始します。中断した比較を再開するために使います。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--speed-large-files</samp></dt>
<dd><p>ヒューリスティックを使って、多数の小さな変更が散在する大きなファイルの処理を速めます。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/48-diff-performance/#diff-Performance"><code class="command">diff</code> の性能のトレードオフ</a>を参照してください。</p>
</dd>
<dt><samp class="option">--strip-trailing-cr</samp></dt>
<dd><p>入力行の末尾にあるキャリッジリターンを除去します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/09-binary/#Binary">バイナリファイルとテキスト比較の強制</a>を参照してください。</p>
</dd>
<dt><samp class="option">--suppress-common-lines</samp></dt>
<dd><p>横並び形式で共通行を表示しません。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/26-side-by-side-format/#Side-by-Side-Format">横並び形式の制御</a>を参照してください。</p>
</dd>
<dt><samp class="option">-t</samp></dt>
<dt><samp class="option">--expand-tabs</samp></dt>
<dd><p>入力ファイル内のタブによる整列を維持するため、出力でタブを空白へ展開します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/45-tabs/#Tabs">タブ位置の整列を維持する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-T</samp></dt>
<dt><samp class="option">--initial-tab</samp></dt>
<dd><p>通常形式とコンテキスト形式で、行のテキストの前に空白の代わりにタブを出力します。これによって行内のタブによる整列が通常どおりに見えます。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/45-tabs/#Tabs">タブ位置の整列を維持する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--tabsize=<var class="var">columns</var></samp></dt>
<dd><p>タブ位置が表示上 <var class="var">columns</var> 列ごと（デフォルト8）に設定されていると仮定します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/45-tabs/#Tabs">タブ位置の整列を維持する</a>を参照してください。</p>
</dd>
<dt><samp class="option">--suppress-blank-empty</samp></dt>
<dd><p>通常形式、コンテキスト形式、unified 形式で空行を表現するとき、改行前の空白を出力しません。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/46-trailing-blanks/#Trailing-Blanks">末尾の空白を省く</a>を参照してください。</p>
</dd>
<dt><samp class="option">--to-file=<var class="var">file</var></samp></dt>
<dd><p>各オペランドを <var class="var">file</var> と比較します。<var class="var">file</var> はディレクトリでもかまいません。</p>
</dd>
<dt><samp class="option">-u</samp></dt>
<dd><p>unified 出力形式を使い、3行のコンテキストを表示します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/18-unified-format/#Unified-Format">unified 形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--unchanged-group-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、両ファイルに共通する行グループを if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/38-line-group-formats/#Line-Group-Formats">行グループ形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--unchanged-line-format=<var class="var">format</var></samp></dt>
<dd><p><var class="var">format</var> を使い、両ファイルに共通する1行を if-then-else 形式で出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/39-line-formats/#Line-Formats">行形式</a>を参照してください。</p>
</dd>
<dt><samp class="option">--unidirectional-new-file</samp></dt>
<dd><p>第1ファイルが存在しない場合は、存在するが空であると扱います。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-U <var class="var">lines</var></samp></dt>
<dt><samp class="option">--unified<span class="r">[</span>=<var class="var">lines</var><span class="r">]</span></samp></dt>
<dd><p>unified 出力形式を使い、<var class="var">lines</var>（整数）行のコンテキストを表示します。<var class="var">lines</var> を省略した場合は3行です。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/18-unified-format/#Unified-Format">unified 形式</a>を参照してください。<code class="command">patch</code> が正常に動作するには、通常少なくとも2行のコンテキストが必要です。</p>
<p>古いシステムでは、<code class="command">diff</code> は <samp class="option">-u</samp> と組み合わせると有効になる旧式のオプション <samp class="option">-<var class="var">lines</var></samp> をサポートします。POSIX 1003.1-2001（<a class="pxref" href="/docs/gnu-diffutils/source/v3-12/manual.html#Standards-conformance">規格への適合</a>参照）はこれを認めていないため、代わりに <samp class="option">-U <var class="var">lines</var></samp> を使ってください。</p>
</dd>
<dt><samp class="option">-v</samp></dt>
<dt><samp class="option">--version</samp></dt>
<dd><p>バージョン情報を出力して終了します。</p>
</dd>
<dt><samp class="option">-w</samp></dt>
<dt><samp class="option">--ignore-all-space</samp></dt>
<dd><p>行を比較するとき空白を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/04-white-space/#White-Space">空白とタブの間隔による相違を抑える</a>を参照してください。</p>
</dd>
<dt><samp class="option">-W <var class="var">columns</var></samp></dt>
<dt><samp class="option">--width=<var class="var">columns</var></samp></dt>
<dd><p>横並び形式で、1行あたり最大 <var class="var">columns</var> 列（デフォルト130）の表示を出力します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/26-side-by-side-format/#Side-by-Side-Format">横並び形式の制御</a>を参照してください。</p>
</dd>
<dt><samp class="option">-x <var class="var">pattern</var></samp></dt>
<dt><samp class="option">--exclude=<var class="var">pattern</var></samp></dt>
<dd><p>ディレクトリを比較するとき、基本名が <var class="var">pattern</var> に一致するファイルとサブディレクトリを無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-X <var class="var">file</var></samp></dt>
<dt><samp class="option">--exclude-from=<var class="var">file</var></samp></dt>
<dd><p>ディレクトリを比較するとき、<var class="var">file</var> に含まれるいずれかのパターンに基本名が一致するファイルとサブディレクトリを無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/43-comparing-directories/#Comparing-Directories">ディレクトリを比較する</a>を参照してください。</p>
</dd>
<dt><samp class="option">-y</samp></dt>
<dt><samp class="option">--side-by-side</samp></dt>
<dd><p>横並び出力形式を使います。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/26-side-by-side-format/#Side-by-Side-Format">横並び形式の制御</a>を参照してください。</p>
</dd>
<dt><samp class="option">-Z</samp></dt>
<dt><samp class="option">--ignore-trailing-space</samp></dt>
<dd><p>行末の空白を無視します。<a class="xref" href="/docs/gnu-diffutils/v3-12/ja/01-guide/04-white-space/#White-Space">空白とタブの間隔による相違を抑える</a>を参照してください。</p></dd>
</dl>
<hr/>
</div>

