---
title: "プログラムのリソース使用量を測定する"
description: "GNU Time 1.10の概要と第1〜2章全文。固定原文に対するLibxの独立・非公式日本語訳。"
documentId: "gnu-time:1.10:02-resource-measurement"
licenseSource: "gnu-time-manual"
toc: {"maxLevel": 4}
documentContext: [{"kind": "source", "html": "<section class=\"gnu-time-notices\"><h3>Libx GNU Time 1.10 User Guide / Libx GNU Time 1.10 利用ガイド</h3><p>Original author: David MacKenzie. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual documents version 1.10 of the GNU <code class=\"code\">time</code>\ncommand for running programs and summarizing the system resources they\nuse.\n</p><p>Copyright © 1991–2021, 2026 Free Software Foundation, Inc.\n</p><blockquote class=\"quotation\">\n<p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with no\nInvariant Sections, with no Front-Cover Texts, and with no Back-Cover\nTexts.  A copy of the license is included in the section entitled “GNU\nFree Documentation License”.\n</p></blockquote><p>Copyright © 2026 Libx, for editing and independent Japanese translation. This modified guide is available under GNU Free Documentation License 1.3 or later, with no Invariant Sections, Front-Cover Texts, or Back-Cover Texts. No cover texts or invariant sections have been added.</p><h3>History / 履歴</h3><p>Original: GNU Time; version 1.10; document revision 13 February 2026; author David MacKenzie; publisher Free Software Foundation. Source: time-1.10.tar.xz, SHA256 706bf7b8444ca9eb9037e9eda18e1d0eb7c2327ae7d8c2ce3a4823c5f80c7b11.</p><p>2026: Libx GNU Time 1.10 User Guide / Libx GNU Time 1.10 利用ガイド. Modification author and publisher: Libx. Complete overview and chapters 1–2 in editable Markdown, static examples and independent unofficial Japanese translation. Original copyright, permission and whole English license retained. Modified 6 October 2026.</p></section><details class=\"gnu-time-license\"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary><div class=\"appendix-level-extent\" id=\"GNU-Free-Documentation-License\">\n<div class=\"nav-panel\">\n<p>\nNext: <a accesskey=\"n\" href=\"/docs/gnu-time/source/v1-10/manual.html#Concept-index\" rel=\"next\">Concept index</a>, Previous: <a accesskey=\"p\" href=\"/docs/gnu-time/source/v1-10/manual.html#Reporting-bugs\" rel=\"prev\">Reporting bugs</a>, Up: <a accesskey=\"u\" href=\"/docs/gnu-time/source/v1-10/manual.html#Top\" rel=\"up\">GNU Time</a>   [<a href=\"/docs/gnu-time/source/v1-10/manual.html#SEC_Contents\" rel=\"contents\" title=\"Table of contents\">Contents</a>][<a href=\"/docs/gnu-time/source/v1-10/manual.html#Concept-index\" rel=\"index\" title=\"Index\">Index</a>]</p>\n</div>\n<h2 class=\"appendix\" id=\"GNU-Free-Documentation-License-1\"><span>Appendix A GNU Free Documentation License<a class=\"copiable-link\" href=\"/docs/gnu-time/source/v1-10/manual.html#GNU-Free-Documentation-License-1\"> ¶</a></span></h2>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents<a class=\"copiable-link\" href=\"/docs/gnu-time/source/v1-10/manual.html#ADDENDUM_003a-How-to-use-this-License-for-your-documents\"> ¶</a></span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></details>"}]
---

<div class="gnu-time-original-content"><div class="chapter-level-extent" id="Resource-Measurement">
<h2 class="chapter" id="Measuring-Program-Resource-Use"><span>1 プログラムのリソース使用量を測定する<a class="copiable-link" href="#Measuring-Program-Resource-Use"> ¶</a></span></h2>
<a class="index-entry-id" id="index-time"></a>
<a class="index-entry-id" id="index-time-1"></a>
<a class="index-entry-id" id="index-time-2"></a>
<a class="index-entry-id" id="index-measurement"></a>
<p><code class="code">time</code> コマンドは別のプログラムを実行し、その実行中にシステムが収集した、そのプログラムのリソース使用量を表示します。報告する情報と表示形式を選択できます（<a class="pxref" href="#Setting-Format">出力形式の設定</a>を参照）。また、<code class="code">time</code> に情報を画面へ表示させる代わりにファイルへ保存させることもできます（<a class="pxref" href="#Redirecting">出力のリダイレクト</a>を参照）。</p>
<p><code class="code">time</code> が報告できるリソースは、大きく時間、メモリ、I/OおよびIPC呼び出しに分類されます。システムによっては、プログラムのリソース使用量に関する情報があまり提供されません。<code class="code">time</code> は取得できない情報をゼロとして報告します（<a class="pxref" href="#Accuracy">精度</a>を参照）。</p>
<p><code class="code">time</code> コマンドの形式は次のとおりです。</p>
<div class="example">
<pre class="example-preformatted">time <span class="r">[</span>option...<span class="r">]</span> <var class="var">command</var> <span class="r">[</span><var class="var">arg</var>...<span class="r">]</span>&#10;</pre></div>
<a class="index-entry-id" id="index-resources"></a>
<p><code class="code">time</code> は、指定された引数 <var class="var">arg</var>… を渡してプログラム <var class="var">command</var> を実行します。<var class="var">command</var> が終了すると、<code class="code">time</code> は <var class="var">command</var> のリソース使用量を表示します。</p>
<p>次の例では、<code class="code">time</code> を使ってプログラム <code class="code">grep</code> の実行に要した時間やその他のリソースを測定します。</p>
<div class="example">
<pre class="example-preformatted">eg$ time grep nobody /etc/aliases&#10;nobody:/dev/null&#10;etc-files:nobody&#10;misc-group:nobody&#10;0.07user 0.50system 0:06.69elapsed 8%CPU (0avgtext+489avgdata 324maxresident)k&#10;46inputs+7outputs (43major+251minor)pagefaults 0swaps&#10;</pre></div>
<p>GNU <code class="code">time</code> への提案やバグ報告は <code class="code">bug-time@gnu.org</code> 宛てにメールで送ってください。<code class="code">time</code> のバージョン（「<samp class="samp">env time --version</samp>」で取得できます）、使用したオペレーティングシステムとCコンパイラを含めてください。</p>
<ul class="mini-toc">
<li><a accesskey="1" href="#Setting-Format">出力形式の設定</a></li>
<li><a accesskey="2" href="#Format-String">書式文字列</a></li>
<li><a accesskey="3" href="#Redirecting">出力のリダイレクト</a></li>
<li><a accesskey="4" href="#Examples">例</a></li>
<li><a accesskey="5" href="#Accuracy">精度</a></li>
<li><a accesskey="6" href="#Invoking-time"><code class="code">time</code> コマンドの実行</a></li>
</ul>
<hr/>
<div class="section-level-extent" id="Setting-Format">
<h3 class="section" id="Setting-the-Output-Format"><span>1.1 出力形式の設定<a class="copiable-link" href="#Setting-the-Output-Format"> ¶</a></span></h3>
<p><code class="code">time</code> は、実行するコマンドのリソース使用量についてどの情報を表示するかを、<em class="dfn">書式文字列</em>で決定します。書式文字列の内容の解釈については、<a class="xref" href="#Format-String">書式文字列</a>を参照してください。</p>
<p>以下のコマンドラインオプションで書式文字列を指定できます。コマンドラインで書式が指定されていなくても、環境変数 <code class="code">TIME</code> が設定されていれば、その値が書式文字列として使われます。それ以外の場合は、<code class="code">time</code> に組み込まれた既定の書式が使われます。</p>
<div class="example">
<pre class="example-preformatted">%Uuser %Ssystem %Eelapsed %PCPU (%Xtext+%Ddata %Mmax)k&#10;%Iinputs+%Ooutputs (%Fmajor+%Rminor)pagefaults %Wswaps&#10;</pre></div>
<p>書式を設定するコマンドラインオプションは次のとおりです。</p>
<dl class="table">
<dt><code class="code">-f <var class="var">format</var></code></dt>
<dt><code class="code">--format=<var class="var">format</var></code></dt>
<dd><p><var class="var">format</var> を書式文字列として使います。</p>
</dd>
<dt><code class="code">-p</code></dt>
<dt><code class="code">--portability</code></dt>
<dd><p>POSIX標準1003.2に適合する、次の書式文字列を使います。</p>
<div class="example">
<pre class="example-preformatted">real %e&#10;user %U&#10;sys %S&#10;</pre></div>
</dd>
<dt><a id="index-format"></a><span><code class="code">-v</code><a class="copiable-link" href="#index-format"> ¶</a></span></dt>
<dt><code class="code">--verbose</code></dt>
<dd><p>組み込みの詳細書式を使います。プログラムのリソース使用量について取得できる情報を、意味を説明する英語の記述とともに、情報ごとに1行ずつ表示します。</p></dd>
</dl>
<hr/>
</div>
<div class="section-level-extent" id="Format-String">
<h3 class="section" id="The-Format-String"><span>1.2 書式文字列<a class="copiable-link" href="#The-Format-String"> ¶</a></span></h3>
<a class="index-entry-id" id="index-format-1"></a>
<a class="index-entry-id" id="index-resource"></a>
<p><em class="dfn">書式文字列</em>は <code class="code">time</code> の出力内容を制御します。通常のテキストの間に<em class="dfn">リソース指定子</em>と<em class="dfn">エスケープ</em>を挟んで構成します。</p>
<p>バックスラッシュは<em class="dfn">エスケープ</em>を開始し、出力時には単一の出力文字に変換されます。有効なエスケープを以下に示します。無効なエスケープは、疑問符に続けてバックスラッシュを出力します。</p>
<dl class="table">
<dt><code class="code">\t</code></dt>
<dd><p>タブ文字</p>
</dd>
<dt><code class="code">\n</code></dt>
<dd><p>改行</p>
</dd>
<dt><code class="code">\\</code></dt>
<dd><p>バックスラッシュそのもの</p></dd>
</dl>
<p><code class="code">time</code> はリソース使用量を表示した後、必ず改行を出力するため、通常、書式文字列の末尾には改行文字（または「<samp class="samp">\n</samp>」）を付けません。</p>
<p>リソース指定子は、パーセント記号とそれに続く1文字で構成します。無効なリソース指定子は、疑問符に続けてその無効な文字を出力します。パーセント記号そのものを出力するには「<samp class="samp">%%</samp>」を使います。</p>
<p>リソース指定子を以下に示します。これらは <code class="code">tcsh</code> の組み込み <code class="code">time</code> コマンドが認識する指定子を包含します。Unixのすべてのバージョンですべてのリソースが測定されるわけではないため、一部の値はゼロとして報告されることがあります（<a class="pxref" href="#Accuracy">精度</a>を参照）。</p>
<ul class="mini-toc">
<li><a accesskey="1" href="#Time-Resources">時間リソース</a></li>
<li><a accesskey="2" href="#Memory-Resources">メモリリソース</a></li>
<li><a accesskey="3" href="#I_002fO-Resources">I/Oリソース</a></li>
<li><a accesskey="4" href="#Command-Info">コマンド情報</a></li>
<li><a accesskey="5" href="#Termination-Status">終了状態</a></li>
</ul>
<hr/>
<div class="subsection-level-extent" id="Time-Resources">
<h4 class="subsection" id="Time-Resources-1"><span>1.2.1 時間リソース<a class="copiable-link" href="#Time-Resources-1"> ¶</a></span></h4>
<dl class="table">
<dt><code class="code">E</code></dt>
<dd><p>プロセスが使用した実経過時間（壁時計時間）。形式は [時:]分:秒です。</p>
</dd>
<dt><code class="code">e</code></dt>
<dd><p>プロセスが使用した実経過時間（壁時計時間）。単位は秒です。</p>
</dd>
<dt><code class="code">S</code></dt>
<dd><p>システムがプロセスのためにカーネルモードで使用したCPU時間の合計。単位はCPU秒です。</p>
</dd>
<dt><code class="code">U</code></dt>
<dd><p>プロセスがユーザーモードで直接使用したCPU時間の合計。単位はCPU秒です。</p>
</dd>
<dt><code class="code">P</code></dt>
<dd><p>このジョブが得たCPUの割合。ユーザー時間とシステム時間の和を総実行時間で割った値です。</p></dd>
</dl>
<hr/>
</div>
<div class="subsection-level-extent" id="Memory-Resources">
<h4 class="subsection" id="Memory-Resources-1"><span>1.2.2 メモリリソース<a class="copiable-link" href="#Memory-Resources-1"> ¶</a></span></h4>
<dl class="table">
<dt><code class="code">M</code></dt>
<dd><p>プロセスの生存期間中の最大常駐セットサイズ。単位はキロバイトです。</p>
</dd>
<dt><code class="code">t</code></dt>
<dd><p>プロセスの平均常駐セットサイズ。単位はキロバイトです。</p>
</dd>
<dt><code class="code">K</code></dt>
<dd><p>プロセスの平均総メモリ使用量（データ＋スタック＋テキスト）。単位はキロバイトです。</p>
</dd>
<dt><code class="code">D</code></dt>
<dd><p>プロセスの非共有データ領域の平均サイズ。単位はキロバイトです。</p>
</dd>
<dt><code class="code">p</code></dt>
<dd><p>プロセスの非共有スタックの平均サイズ。単位はキロバイトです。</p>
</dd>
<dt><code class="code">X</code></dt>
<dd><p>プロセスの共有テキストの平均サイズ。単位はキロバイトです。</p>
</dd>
<dt><code class="code">Z</code></dt>
<dd><p>システムのページサイズ。単位はバイトです。各システム内では一定ですが、システム間では異なります。</p></dd>
</dl>
<hr/>
</div>
<div class="subsection-level-extent" id="I_002fO-Resources">
<h4 class="subsection" id="I_002fO-Resources-1"><span>1.2.3 I/Oリソース<a class="copiable-link" href="#I_002fO-Resources-1"> ¶</a></span></h4>
<dl class="table">
<dt><code class="code">F</code></dt>
<dd><p>プロセスの実行中に発生したメジャーページフォールト、すなわちI/Oを必要とするページフォールトの回数。ページが実際に主記憶から移動している場合のフォールトです。</p>
</dd>
<dt><code class="code">R</code></dt>
<dd><p>マイナーページフォールト、すなわち回復可能なページフォールトの回数。これらのページは有効でないためフォールトが発生しますが、まだ他の仮想ページに割り当てられていません。このため、ページ内のデータは依然として有効ですが、システムの管理表を更新する必要があります。</p>
</dd>
<dt><code class="code">W</code></dt>
<dd><p>プロセスが主記憶からスワップアウトされた回数。</p>
</dd>
<dt><code class="code">c</code></dt>
<dd><p>プロセスが非自発的にコンテキスト切り替えされた回数（タイムスライスが終了したため）。</p>
</dd>
<dt><code class="code">w</code></dt>
<dd><p>プログラムが自発的にコンテキスト切り替えされた回数。たとえば、I/O操作の完了を待っている場合です。</p>
</dd>
<dt><code class="code">I</code></dt>
<dd><p>プロセスによるファイルシステム入力の回数。</p>
</dd>
<dt><code class="code">O</code></dt>
<dd><p>プロセスによるファイルシステム出力の回数。</p>
</dd>
<dt><code class="code">r</code></dt>
<dd><p>プロセスが受信したソケットメッセージの数。</p>
</dd>
<dt><code class="code">s</code></dt>
<dd><p>プロセスが送信したソケットメッセージの数。</p>
</dd>
<dt><code class="code">k</code></dt>
<dd><p>プロセスへ配信されたシグナルの数。</p></dd>
</dl>
<hr/>
</div>
<div class="subsection-level-extent" id="Command-Info">
<h4 class="subsection" id="Command-Info-1"><span>1.2.4 コマンド情報<a class="copiable-link" href="#Command-Info-1"> ¶</a></span></h4>
<dl class="table">
<dt><code class="code">C</code></dt>
<dd><p>測定対象コマンドの名前とコマンドライン引数。</p>
</dd>
<dt><code class="code">x</code></dt>
<dd><p>コマンドの終了ステータス。</p></dd>
</dl>
<hr/>
</div>
<div class="subsection-level-extent" id="Termination-Status">
<h4 class="subsection" id="Termination-Status-1"><span>1.2.5 終了状態<a class="copiable-link" href="#Termination-Status-1"> ¶</a></span></h4>
<p>以下は<em class="emph">2文字の指定子</em>です。</p>
<dl class="table">
<dt><code class="code">%Tt</code></dt>
<dd><p>終了の種類。コマンドの終了のしかたに応じて、「<samp class="samp">normal</samp>」または「<samp class="samp">signalled</samp>」というテキストになります。「<samp class="samp">normal</samp>」は、終了コードがゼロの場合に限らず、任意の終了コードでプログラムが終了したことを意味します。</p>
</dd>
<dt><code class="code">%Tx</code></dt>
<dd><p>コマンドが正常に終了した<em class="emph">場合</em>（シグナルで終了していない場合）の数値の終了コード。「<samp class="samp">%x</samp>」書式指定子と似ていますが、「<samp class="samp">%x</samp>」とは異なり、プログラムがシグナルで終了した場合は<em class="emph">空</em>になります。</p>
</dd>
<dt><code class="code">%Tn</code></dt>
<dd><p>コマンドがシグナルで終了した<em class="emph">場合</em>の数値のシグナル番号（たとえば、SIGKILLで終了した場合の「<samp class="samp">9</samp>」）。プログラムが正常に終了した場合（シグナルで終了していない場合）は空になります。</p>
</dd>
<dt><code class="code">%Ts</code></dt>
<dd><p>コマンドがシグナルで終了した<em class="emph">場合</em>のシグナル名（たとえば、SIGKILLで終了した場合の「<samp class="samp">KILL</samp>」）。プログラムが正常に終了した場合（シグナルで終了していない場合）は空になります。</p>
</dd>
<dt><code class="code">%To</code></dt>
<dd><p>コマンドが正常に終了し（シグナルによる終了でなく）、終了コードがゼロである<em class="emph">場合</em>は「<samp class="samp">ok</samp>」というテキスト。それ以外の場合は空になります。</p>
</dd>
</dl>
<hr/>
</div>
</div>
<div class="section-level-extent" id="Redirecting">
<h3 class="section" id="Redirecting-Output"><span>1.3 出力のリダイレクト<a class="copiable-link" href="#Redirecting-Output"> ¶</a></span></h3>
<p>既定では、<code class="code">time</code> はリソース使用統計を標準エラー出力へ書き出します。以下のオプションでは、代わりにファイルへ書き出します。実行するプログラムが標準エラー出力へ書き込む場合や、<code class="code">time</code> を対話なしで、またはバックグラウンドで実行する場合に役立ちます。</p>
<dl class="table">
<dt><code class="code">-o <var class="var">file</var></code></dt>
<dt><code class="code">--output=<var class="var">file</var></code></dt>
<dd><p>リソース使用統計を <var class="var">file</var> へ書き出します。既定ではファイルを<em class="emph">上書き</em>し、それまでの内容を破棄します。</p>
</dd>
<dt><code class="code">-a</code></dt>
<dt><code class="code">--append</code></dt>
<dd><p>出力ファイルを上書きする代わりに、リソース使用情報を<em class="emph">追記</em>します。このオプションは「<samp class="samp">-o</samp>」または「<samp class="samp">--output</samp>」オプションと併用した場合にのみ有用です。</p></dd>
</dl>
<hr/>
</div>
<div class="section-level-extent" id="Examples">
<h3 class="section" id="Examples-1"><span>1.4 例<a class="copiable-link" href="#Examples-1"> ¶</a></span></h3>
<p>コマンド「<samp class="samp">wc /etc/hosts</samp>」を実行して、既定の情報を表示します。</p>
<div class="example">
<pre class="example-preformatted">eg$ time wc /etc/hosts&#10;      35     111    1134 /etc/hosts&#10;0.00user 0.01system 0:00.04elapsed 25%CPU (0avgtext+0avgdata 0maxresident)k&#10;1inputs+1outputs (0major+0minor)pagefaults 0swaps&#10;</pre></div>
<p>コマンド「<samp class="samp">ls -Fs</samp>」を実行して、ユーザー時間、システム時間、壁時計時間だけを表示します。</p>
<div class="example">
<pre class="example-preformatted">eg$ time -f "\t%E real,\t%U user,\t%S sys" ls -Fs&#10;total 16&#10;1 account/      1 db/           1 mail/         1 run/&#10;1 backups/      1 emacs/        1 msgs/         1 rwho/&#10;1 crash/        1 games/        1 preserve/     1 spool/&#10;1 cron/         1 log/          1 quotas/       1 tmp/&#10;        0:00.03 real,   0.00 user,      0.01 sys&#10;</pre></div>
<p>ファイル <samp class="file">.bashrc</samp> を編集し、環境変数 <code class="code">TIME</code> から書式文字列を読み取って、<code class="code">time</code> に経過時間とシグナル数をファイル <samp class="file">log</samp> へ追記させます。</p>
<div class="example">
<pre class="example-preformatted">eg$ export TIME="\t%E,\t%k" #<span class="r"> If using bash or ksh</span>&#10;eg$ setenv TIME "\t%E,\t%k" #<span class="r"> If using csh or tcsh</span>&#10;eg$ time -a -o log emacs .bashrc&#10;eg$ cat log&#10;        0:16.55,        726&#10;</pre></div>
<p>コマンド「<samp class="samp">sleep 4</samp>」を実行し、その情報をすべて詳細に表示します。</p>
<div class="example">
<pre class="example-preformatted">eg$ time -v sleep 4&#10;        Command being timed: "sleep 4"&#10;        User time (seconds): 0.00&#10;        System time (seconds): 0.05&#10;        Percent of CPU this job got: 1%&#10;        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:04.26&#10;        Average shared text size (kbytes): 36&#10;        Average unshared data size (kbytes): 24&#10;        Average stack size (kbytes): 0&#10;        Average total size (kbytes): 60&#10;        Maximum resident set size (kbytes): 32&#10;        Average resident set size (kbytes): 24&#10;        Major (requiring I/O) page faults: 3&#10;        Minor (reclaiming a frame) page faults: 0&#10;        Voluntary context switches: 11&#10;        Involuntary context switches: 0&#10;        Swaps: 0&#10;        File system inputs: 3&#10;        File system outputs: 1&#10;        Socket messages sent: 0&#10;        Socket messages received: 0&#10;        Signals delivered: 1&#10;        Page size (bytes): 4096&#10;        Exit status: 0&#10;</pre></div>
<hr/>
</div>
<div class="section-level-extent" id="Accuracy">
<h3 class="section" id="Accuracy-1"><span>1.5 精度<a class="copiable-link" href="#Accuracy-1"> ¶</a></span></h3>
<a class="index-entry-id" id="index-error-_0028in-measurement_0029"></a>
<p>経過時間の収集は、プログラムの実行と不可分な操作として行われません。そのため、特殊な状況（測定対象のプログラムが終了してから <code class="code">time</code> が実行時間を計算するまでの間に、<code class="code">time</code> コマンドが停止したりスワップアウトされたりした場合）には、実際の実行時間よりも大幅に長くなることがあります。</p>
<p>コマンドの実行時間がほぼゼロの場合、一部の値（たとえばCPU使用率）がゼロ（これは誤り）または疑問符として報告されることがあります。</p>
<p><code class="code">time</code> が表示する情報の大部分は、<code class="code">getrusage</code> システムコールから得られます。数値の精度は <code class="code">getrusage</code> が返す値の精度に依存します。システムによっては、<code class="code">time</code> が報告できるすべてのリソースを測定しているわけではなく、それらのリソースはゼロとして報告されます。大部分またはすべてのリソースを測定するシステムは、4.2BSDまたは4.3BSDを基盤としています。後のBSDリリースは異なるメモリ管理コードを使い、測定するリソースが少なくなっています。</p>
<p><code class="code">getrusage</code> 呼び出しがないシステムでは、代わりに <code class="code">times</code> システムコールが使われます。これは <code class="code">getrusage</code> よりもはるかに少ない情報しか提供しないため、そのようなシステムでは <code class="code">time</code> が大部分のリソースをゼロとして報告します。</p>
<p>「<samp class="samp">%I</samp>」と「<samp class="samp">%O</samp>」の値は、「実際の」入力と出力だけで、キャッシュ装置が供給するものは含まないと言われています。「<samp class="samp">%I</samp>」と「<samp class="samp">%O</samp>」が報告する「実際の」I/Oの意味は、ワークステーション、とりわけディスクレスのものでは曖昧になることがあります。</p>
<hr/>
</div>
<div class="section-level-extent" id="Invoking-time">
<h3 class="section" id="Running-the-time-Command"><span>1.6 <code class="code">time</code> コマンドの実行<a class="copiable-link" href="#Running-the-time-Command"> ¶</a></span></h3>
<p><code class="code">time</code> コマンドの形式は次のとおりです。</p>
<div class="example">
<pre class="example-preformatted">time <span class="r">[</span>option...<span class="r">]</span> <var class="var">command</var> <span class="r">[</span><var class="var">arg</var>...<span class="r">]</span>&#10;</pre></div>
<a class="index-entry-id" id="index-resources-1"></a>
<p><code class="code">time</code> は、指定された引数 <var class="var">arg</var>… を渡してプログラム <var class="var">command</var> を実行します。<var class="var">command</var> が終了すると、<code class="code">time</code> は <var class="var">command</var> のリソース使用量を表示します（既定では標準エラー出力へ）。<var class="var">command</var> が非ゼロのステータスで終了したり、シグナルで終了したりした場合、<code class="code">time</code> は警告メッセージと、終了ステータスまたはシグナル番号を表示します。</p>
<p><code class="code">time</code> のオプションは、コマンドライン上で <var class="var">command</var> より前に置かなければなりません。<var class="var">command</var> より後にあるものはすべて、<var class="var">command</var> への引数として渡されます。</p>
<dl class="table">
<dt><code class="code">-o <var class="var">file</var></code></dt>
<dt><code class="code">--output=<var class="var">file</var></code></dt>
<dd><p>リソース使用統計を <var class="var">file</var> へ書き出します。</p>
</dd>
<dt><code class="code">-a</code></dt>
<dt><code class="code">--append</code></dt>
<dd><p>出力ファイルを上書きする代わりに、リソース使用情報を<em class="emph">追記</em>します。</p>
</dd>
<dt><code class="code">-f <var class="var">format</var></code></dt>
<dt><code class="code">--format=<var class="var">format</var></code></dt>
<dd><p><var class="var">format</var> を書式文字列として使います。</p>
</dd>
<dt><code class="code">--help</code></dt>
<dd><p><code class="code">time</code> のコマンドラインオプションの要約を表示して終了します。</p>
</dd>
<dt><code class="code">-p</code></dt>
<dt><code class="code">--portability</code></dt>
<dd><p>POSIX形式を使います。</p>
</dd>
<dt><a id="index-format-2"></a><span><code class="code">-v</code><a class="copiable-link" href="#index-format-2"> ¶</a></span></dt>
<dt><code class="code">--verbose</code></dt>
<dd><p>組み込みの詳細書式を使います。</p>
</dd>
<dt><a id="index-version-number"></a><span><code class="code">-V</code><a class="copiable-link" href="#index-version-number"> ¶</a></span></dt>
<dt><code class="code">--version</code></dt>
<dd><p><code class="code">time</code> のバージョン番号を表示して終了します。</p></dd>
</dl>
<hr/>
</div>
</div>

</div>
