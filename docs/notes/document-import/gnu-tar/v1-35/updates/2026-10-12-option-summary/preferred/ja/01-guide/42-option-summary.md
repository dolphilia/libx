---
title: "3.4.2 tarのオプション"
licenseSource: gnu-tar-manual
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU tar 1.35 Option Summary / Libx GNU tar 1.35 オプション一覧</h3><p>Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual is for <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> (version\n1.35, 10 July 2023), which creates and extracts files\nfrom archives.\n</p><p>Copyright © 1992, 1994–1997, 1999–2001, 2003–2017,\n2021–2023 Free Software Foundation, Inc.\n</p><blockquote class=\"quotation\">\n<p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with the\nInvariant Sections being “GNU General Public License”, with the\nFront-Cover Texts being “A GNU Manual”, and with the Back-Cover Texts\nas in (a) below.  A copy of the license is included in the section\nentitled “GNU Free Documentation License”.\n</p>\n<p>(a) The FSF’s Back-Cover Text is: “You have the freedom to\ncopy and modify this GNU manual.”\n</p></blockquote><p>Copyright © 2026 Libx, for static editing and independent Japanese translation. This modified version is available under GNU Free Documentation License1.3 or later; invariant section GNU General Public License; Front-Cover Text A GNU Manual; Back-Cover Text You have the freedom to copy and modify this GNU manual. No new invariant sections or cover texts have been added.</p><h3>History / 履歴</h3><p>Original: GNU tar: an archiver tool; version1.35,10July2023; John Gilmore, Jay Fenlason et al.; publisher Free Software Foundation. Fixed archive SHA25614d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e; https://ftp.gnu.org/gnu/tar/tar-1.35.tar.gz.</p><p>12October2026: Libx GNU tar 1.35 Option Summary / Libx GNU tar 1.35 オプション一覧; modification author and publisher Libx. Sections3.4–3.4.4 represented as static editable HTML in Markdown, with independent Japanese translation. Remaining chapters, appendices and indexes are available in the fixed complete original. Original examples remain literal text and are not executed.</p><div class=\"section-level-extent\" id=\"tar-context-Authors\">\n<h3 class=\"section\" id=\"tar-context-GNU-tar-Authors\"><span>1.5 <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> Authors</span></h3>\n<p><abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> was originally written by John Gilmore,\nand modified by many people.  The <abbr class=\"acronym\">GNU</abbr> enhancements were\nwritten by Jay Fenlason, then Joy Kendall, and the whole package has\nbeen further maintained by Thomas Bushnell, n/BSG, François\nPinard, Paul Eggert, and finally Sergey Poznyakoff with the help of\nnumerous and kind users.\n</p>\n<p>We wish to stress that <code class=\"command\">tar</code> is a collective work, and owes much to\nall those people who reported problems, offered solutions and other\ninsights, or shared their thoughts and suggestions.  An impressive, yet\npartial list of those contributors can be found in the <samp class=\"file\">THANKS</samp>\nfile from the <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> distribution.\n</p>\n<p>Jay Fenlason put together a draft of a <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code>\nmanual, borrowing notes from the original man page from John Gilmore.\nThis was withdrawn in version 1.11.  Thomas Bushnell, n/BSG and Amy\nGorin worked on a tutorial and manual for <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code>.\nFrançois Pinard put version 1.11.8 of the manual together by\ntaking information from all these sources and merging them.  Melissa\nWeisshaus finally edited and redesigned the book to create version\n1.12.  The book for versions from 1.14 up to 1.35 were edited\nby the current maintainer, Sergey Poznyakoff.\n</p>\n<p>For version 1.12, Daniel Hagerty contributed a great deal of technical\nconsulting.  In particular, he is the primary author of <a class=\"ref\" href=\"/docs/gnu-tar/source/v1-35/manual.html#Backups\">Performing Backups and Restoring Files</a>.\n</p>\n<p>In July, 2003 <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> was put on CVS at savannah.gnu.org\n(see <a class=\"url\" href=\"https://savannah.gnu.org/projects/tar\">https://savannah.gnu.org/projects/tar</a>), and\nactive development and maintenance work has started\nagain.  Currently <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> is being maintained by Paul Eggert, Sergey\nPoznyakoff and Jeff Bailey.\n</p>\n<p>Support for <abbr class=\"acronym\">POSIX</abbr> archives was added by Sergey Poznyakoff.\n</p>\n<hr/>\n</div><h3>GNU General Public License</h3><p>Unchanged COPYING from the same fixed archive is provided as an explicit supplement. The generated original manual has no GPL appendix despite the invariant-section declaration; this supplement is not presented as an appendix found in the original.</p><pre>                    GNU GENERAL PUBLIC LICENSE\n                       Version 3, 29 June 2007\n\n Copyright (C) 2007 Free Software Foundation, Inc. &lt;https://fsf.org/&gt;\n Everyone is permitted to copy and distribute verbatim copies\n of this license document, but changing it is not allowed.\n\n                            Preamble\n\n  The GNU General Public License is a free, copyleft license for\nsoftware and other kinds of works.\n\n  The licenses for most software and other practical works are designed\nto take away your freedom to share and change the works.  By contrast,\nthe GNU General Public License is intended to guarantee your freedom to\nshare and change all versions of a program--to make sure it remains free\nsoftware for all its users.  We, the Free Software Foundation, use the\nGNU General Public License for most of our software; it applies also to\nany other work released this way by its authors.  You can apply it to\nyour programs, too.\n\n  When we speak of free software, we are referring to freedom, not\nprice.  Our General Public Licenses are designed to make sure that you\nhave the freedom to distribute copies of free software (and charge for\nthem if you wish), that you receive source code or can get it if you\nwant it, that you can change the software or use pieces of it in new\nfree programs, and that you know you can do these things.\n\n  To protect your rights, we need to prevent others from denying you\nthese rights or asking you to surrender the rights.  Therefore, you have\ncertain responsibilities if you distribute copies of the software, or if\nyou modify it: responsibilities to respect the freedom of others.\n\n  For example, if you distribute copies of such a program, whether\ngratis or for a fee, you must pass on to the recipients the same\nfreedoms that you received.  You must make sure that they, too, receive\nor can get the source code.  And you must show them these terms so they\nknow their rights.\n\n  Developers that use the GNU GPL protect your rights with two steps:\n(1) assert copyright on the software, and (2) offer you this License\ngiving you legal permission to copy, distribute and/or modify it.\n\n  For the developers' and authors' protection, the GPL clearly explains\nthat there is no warranty for this free software.  For both users' and\nauthors' sake, the GPL requires that modified versions be marked as\nchanged, so that their problems will not be attributed erroneously to\nauthors of previous versions.\n\n  Some devices are designed to deny users access to install or run\nmodified versions of the software inside them, although the manufacturer\ncan do so.  This is fundamentally incompatible with the aim of\nprotecting users' freedom to change the software.  The systematic\npattern of such abuse occurs in the area of products for individuals to\nuse, which is precisely where it is most unacceptable.  Therefore, we\nhave designed this version of the GPL to prohibit the practice for those\nproducts.  If such problems arise substantially in other domains, we\nstand ready to extend this provision to those domains in future versions\nof the GPL, as needed to protect the freedom of users.\n\n  Finally, every program is threatened constantly by software patents.\nStates should not allow patents to restrict development and use of\nsoftware on general-purpose computers, but in those that do, we wish to\navoid the special danger that patents applied to a free program could\nmake it effectively proprietary.  To prevent this, the GPL assures that\npatents cannot be used to render the program non-free.\n\n  The precise terms and conditions for copying, distribution and\nmodification follow.\n\n                       TERMS AND CONDITIONS\n\n  0. Definitions.\n\n  \"This License\" refers to version 3 of the GNU General Public License.\n\n  \"Copyright\" also means copyright-like laws that apply to other kinds of\nworks, such as semiconductor masks.\n\n  \"The Program\" refers to any copyrightable work licensed under this\nLicense.  Each licensee is addressed as \"you\".  \"Licensees\" and\n\"recipients\" may be individuals or organizations.\n\n  To \"modify\" a work means to copy from or adapt all or part of the work\nin a fashion requiring copyright permission, other than the making of an\nexact copy.  The resulting work is called a \"modified version\" of the\nearlier work or a work \"based on\" the earlier work.\n\n  A \"covered work\" means either the unmodified Program or a work based\non the Program.\n\n  To \"propagate\" a work means to do anything with it that, without\npermission, would make you directly or secondarily liable for\ninfringement under applicable copyright law, except executing it on a\ncomputer or modifying a private copy.  Propagation includes copying,\ndistribution (with or without modification), making available to the\npublic, and in some countries other activities as well.\n\n  To \"convey\" a work means any kind of propagation that enables other\nparties to make or receive copies.  Mere interaction with a user through\na computer network, with no transfer of a copy, is not conveying.\n\n  An interactive user interface displays \"Appropriate Legal Notices\"\nto the extent that it includes a convenient and prominently visible\nfeature that (1) displays an appropriate copyright notice, and (2)\ntells the user that there is no warranty for the work (except to the\nextent that warranties are provided), that licensees may convey the\nwork under this License, and how to view a copy of this License.  If\nthe interface presents a list of user commands or options, such as a\nmenu, a prominent item in the list meets this criterion.\n\n  1. Source Code.\n\n  The \"source code\" for a work means the preferred form of the work\nfor making modifications to it.  \"Object code\" means any non-source\nform of a work.\n\n  A \"Standard Interface\" means an interface that either is an official\nstandard defined by a recognized standards body, or, in the case of\ninterfaces specified for a particular programming language, one that\nis widely used among developers working in that language.\n\n  The \"System Libraries\" of an executable work include anything, other\nthan the work as a whole, that (a) is included in the normal form of\npackaging a Major Component, but which is not part of that Major\nComponent, and (b) serves only to enable use of the work with that\nMajor Component, or to implement a Standard Interface for which an\nimplementation is available to the public in source code form.  A\n\"Major Component\", in this context, means a major essential component\n(kernel, window system, and so on) of the specific operating system\n(if any) on which the executable work runs, or a compiler used to\nproduce the work, or an object code interpreter used to run it.\n\n  The \"Corresponding Source\" for a work in object code form means all\nthe source code needed to generate, install, and (for an executable\nwork) run the object code and to modify the work, including scripts to\ncontrol those activities.  However, it does not include the work's\nSystem Libraries, or general-purpose tools or generally available free\nprograms which are used unmodified in performing those activities but\nwhich are not part of the work.  For example, Corresponding Source\nincludes interface definition files associated with source files for\nthe work, and the source code for shared libraries and dynamically\nlinked subprograms that the work is specifically designed to require,\nsuch as by intimate data communication or control flow between those\nsubprograms and other parts of the work.\n\n  The Corresponding Source need not include anything that users\ncan regenerate automatically from other parts of the Corresponding\nSource.\n\n  The Corresponding Source for a work in source code form is that\nsame work.\n\n  2. Basic Permissions.\n\n  All rights granted under this License are granted for the term of\ncopyright on the Program, and are irrevocable provided the stated\nconditions are met.  This License explicitly affirms your unlimited\npermission to run the unmodified Program.  The output from running a\ncovered work is covered by this License only if the output, given its\ncontent, constitutes a covered work.  This License acknowledges your\nrights of fair use or other equivalent, as provided by copyright law.\n\n  You may make, run and propagate covered works that you do not\nconvey, without conditions so long as your license otherwise remains\nin force.  You may convey covered works to others for the sole purpose\nof having them make modifications exclusively for you, or provide you\nwith facilities for running those works, provided that you comply with\nthe terms of this License in conveying all material for which you do\nnot control copyright.  Those thus making or running the covered works\nfor you must do so exclusively on your behalf, under your direction\nand control, on terms that prohibit them from making any copies of\nyour copyrighted material outside their relationship with you.\n\n  Conveying under any other circumstances is permitted solely under\nthe conditions stated below.  Sublicensing is not allowed; section 10\nmakes it unnecessary.\n\n  3. Protecting Users' Legal Rights From Anti-Circumvention Law.\n\n  No covered work shall be deemed part of an effective technological\nmeasure under any applicable law fulfilling obligations under article\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\nsimilar laws prohibiting or restricting circumvention of such\nmeasures.\n\n  When you convey a covered work, you waive any legal power to forbid\ncircumvention of technological measures to the extent such circumvention\nis effected by exercising rights under this License with respect to\nthe covered work, and you disclaim any intention to limit operation or\nmodification of the work as a means of enforcing, against the work's\nusers, your or third parties' legal rights to forbid circumvention of\ntechnological measures.\n\n  4. Conveying Verbatim Copies.\n\n  You may convey verbatim copies of the Program's source code as you\nreceive it, in any medium, provided that you conspicuously and\nappropriately publish on each copy an appropriate copyright notice;\nkeep intact all notices stating that this License and any\nnon-permissive terms added in accord with section 7 apply to the code;\nkeep intact all notices of the absence of any warranty; and give all\nrecipients a copy of this License along with the Program.\n\n  You may charge any price or no price for each copy that you convey,\nand you may offer support or warranty protection for a fee.\n\n  5. Conveying Modified Source Versions.\n\n  You may convey a work based on the Program, or the modifications to\nproduce it from the Program, in the form of source code under the\nterms of section 4, provided that you also meet all of these conditions:\n\n    a) The work must carry prominent notices stating that you modified\n    it, and giving a relevant date.\n\n    b) The work must carry prominent notices stating that it is\n    released under this License and any conditions added under section\n    7.  This requirement modifies the requirement in section 4 to\n    \"keep intact all notices\".\n\n    c) You must license the entire work, as a whole, under this\n    License to anyone who comes into possession of a copy.  This\n    License will therefore apply, along with any applicable section 7\n    additional terms, to the whole of the work, and all its parts,\n    regardless of how they are packaged.  This License gives no\n    permission to license the work in any other way, but it does not\n    invalidate such permission if you have separately received it.\n\n    d) If the work has interactive user interfaces, each must display\n    Appropriate Legal Notices; however, if the Program has interactive\n    interfaces that do not display Appropriate Legal Notices, your\n    work need not make them do so.\n\n  A compilation of a covered work with other separate and independent\nworks, which are not by their nature extensions of the covered work,\nand which are not combined with it such as to form a larger program,\nin or on a volume of a storage or distribution medium, is called an\n\"aggregate\" if the compilation and its resulting copyright are not\nused to limit the access or legal rights of the compilation's users\nbeyond what the individual works permit.  Inclusion of a covered work\nin an aggregate does not cause this License to apply to the other\nparts of the aggregate.\n\n  6. Conveying Non-Source Forms.\n\n  You may convey a covered work in object code form under the terms\nof sections 4 and 5, provided that you also convey the\nmachine-readable Corresponding Source under the terms of this License,\nin one of these ways:\n\n    a) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by the\n    Corresponding Source fixed on a durable physical medium\n    customarily used for software interchange.\n\n    b) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by a\n    written offer, valid for at least three years and valid for as\n    long as you offer spare parts or customer support for that product\n    model, to give anyone who possesses the object code either (1) a\n    copy of the Corresponding Source for all the software in the\n    product that is covered by this License, on a durable physical\n    medium customarily used for software interchange, for a price no\n    more than your reasonable cost of physically performing this\n    conveying of source, or (2) access to copy the\n    Corresponding Source from a network server at no charge.\n\n    c) Convey individual copies of the object code with a copy of the\n    written offer to provide the Corresponding Source.  This\n    alternative is allowed only occasionally and noncommercially, and\n    only if you received the object code with such an offer, in accord\n    with subsection 6b.\n\n    d) Convey the object code by offering access from a designated\n    place (gratis or for a charge), and offer equivalent access to the\n    Corresponding Source in the same way through the same place at no\n    further charge.  You need not require recipients to copy the\n    Corresponding Source along with the object code.  If the place to\n    copy the object code is a network server, the Corresponding Source\n    may be on a different server (operated by you or a third party)\n    that supports equivalent copying facilities, provided you maintain\n    clear directions next to the object code saying where to find the\n    Corresponding Source.  Regardless of what server hosts the\n    Corresponding Source, you remain obligated to ensure that it is\n    available for as long as needed to satisfy these requirements.\n\n    e) Convey the object code using peer-to-peer transmission, provided\n    you inform other peers where the object code and Corresponding\n    Source of the work are being offered to the general public at no\n    charge under subsection 6d.\n\n  A separable portion of the object code, whose source code is excluded\nfrom the Corresponding Source as a System Library, need not be\nincluded in conveying the object code work.\n\n  A \"User Product\" is either (1) a \"consumer product\", which means any\ntangible personal property which is normally used for personal, family,\nor household purposes, or (2) anything designed or sold for incorporation\ninto a dwelling.  In determining whether a product is a consumer product,\ndoubtful cases shall be resolved in favor of coverage.  For a particular\nproduct received by a particular user, \"normally used\" refers to a\ntypical or common use of that class of product, regardless of the status\nof the particular user or of the way in which the particular user\nactually uses, or expects or is expected to use, the product.  A product\nis a consumer product regardless of whether the product has substantial\ncommercial, industrial or non-consumer uses, unless such uses represent\nthe only significant mode of use of the product.\n\n  \"Installation Information\" for a User Product means any methods,\nprocedures, authorization keys, or other information required to install\nand execute modified versions of a covered work in that User Product from\na modified version of its Corresponding Source.  The information must\nsuffice to ensure that the continued functioning of the modified object\ncode is in no case prevented or interfered with solely because\nmodification has been made.\n\n  If you convey an object code work under this section in, or with, or\nspecifically for use in, a User Product, and the conveying occurs as\npart of a transaction in which the right of possession and use of the\nUser Product is transferred to the recipient in perpetuity or for a\nfixed term (regardless of how the transaction is characterized), the\nCorresponding Source conveyed under this section must be accompanied\nby the Installation Information.  But this requirement does not apply\nif neither you nor any third party retains the ability to install\nmodified object code on the User Product (for example, the work has\nbeen installed in ROM).\n\n  The requirement to provide Installation Information does not include a\nrequirement to continue to provide support service, warranty, or updates\nfor a work that has been modified or installed by the recipient, or for\nthe User Product in which it has been modified or installed.  Access to a\nnetwork may be denied when the modification itself materially and\nadversely affects the operation of the network or violates the rules and\nprotocols for communication across the network.\n\n  Corresponding Source conveyed, and Installation Information provided,\nin accord with this section must be in a format that is publicly\ndocumented (and with an implementation available to the public in\nsource code form), and must require no special password or key for\nunpacking, reading or copying.\n\n  7. Additional Terms.\n\n  \"Additional permissions\" are terms that supplement the terms of this\nLicense by making exceptions from one or more of its conditions.\nAdditional permissions that are applicable to the entire Program shall\nbe treated as though they were included in this License, to the extent\nthat they are valid under applicable law.  If additional permissions\napply only to part of the Program, that part may be used separately\nunder those permissions, but the entire Program remains governed by\nthis License without regard to the additional permissions.\n\n  When you convey a copy of a covered work, you may at your option\nremove any additional permissions from that copy, or from any part of\nit.  (Additional permissions may be written to require their own\nremoval in certain cases when you modify the work.)  You may place\nadditional permissions on material, added by you to a covered work,\nfor which you have or can give appropriate copyright permission.\n\n  Notwithstanding any other provision of this License, for material you\nadd to a covered work, you may (if authorized by the copyright holders of\nthat material) supplement the terms of this License with terms:\n\n    a) Disclaiming warranty or limiting liability differently from the\n    terms of sections 15 and 16 of this License; or\n\n    b) Requiring preservation of specified reasonable legal notices or\n    author attributions in that material or in the Appropriate Legal\n    Notices displayed by works containing it; or\n\n    c) Prohibiting misrepresentation of the origin of that material, or\n    requiring that modified versions of such material be marked in\n    reasonable ways as different from the original version; or\n\n    d) Limiting the use for publicity purposes of names of licensors or\n    authors of the material; or\n\n    e) Declining to grant rights under trademark law for use of some\n    trade names, trademarks, or service marks; or\n\n    f) Requiring indemnification of licensors and authors of that\n    material by anyone who conveys the material (or modified versions of\n    it) with contractual assumptions of liability to the recipient, for\n    any liability that these contractual assumptions directly impose on\n    those licensors and authors.\n\n  All other non-permissive additional terms are considered \"further\nrestrictions\" within the meaning of section 10.  If the Program as you\nreceived it, or any part of it, contains a notice stating that it is\ngoverned by this License along with a term that is a further\nrestriction, you may remove that term.  If a license document contains\na further restriction but permits relicensing or conveying under this\nLicense, you may add to a covered work material governed by the terms\nof that license document, provided that the further restriction does\nnot survive such relicensing or conveying.\n\n  If you add terms to a covered work in accord with this section, you\nmust place, in the relevant source files, a statement of the\nadditional terms that apply to those files, or a notice indicating\nwhere to find the applicable terms.\n\n  Additional terms, permissive or non-permissive, may be stated in the\nform of a separately written license, or stated as exceptions;\nthe above requirements apply either way.\n\n  8. Termination.\n\n  You may not propagate or modify a covered work except as expressly\nprovided under this License.  Any attempt otherwise to propagate or\nmodify it is void, and will automatically terminate your rights under\nthis License (including any patent licenses granted under the third\nparagraph of section 11).\n\n  However, if you cease all violation of this License, then your\nlicense from a particular copyright holder is reinstated (a)\nprovisionally, unless and until the copyright holder explicitly and\nfinally terminates your license, and (b) permanently, if the copyright\nholder fails to notify you of the violation by some reasonable means\nprior to 60 days after the cessation.\n\n  Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n\n  Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, you do not qualify to receive new licenses for the same\nmaterial under section 10.\n\n  9. Acceptance Not Required for Having Copies.\n\n  You are not required to accept this License in order to receive or\nrun a copy of the Program.  Ancillary propagation of a covered work\noccurring solely as a consequence of using peer-to-peer transmission\nto receive a copy likewise does not require acceptance.  However,\nnothing other than this License grants you permission to propagate or\nmodify any covered work.  These actions infringe copyright if you do\nnot accept this License.  Therefore, by modifying or propagating a\ncovered work, you indicate your acceptance of this License to do so.\n\n  10. Automatic Licensing of Downstream Recipients.\n\n  Each time you convey a covered work, the recipient automatically\nreceives a license from the original licensors, to run, modify and\npropagate that work, subject to this License.  You are not responsible\nfor enforcing compliance by third parties with this License.\n\n  An \"entity transaction\" is a transaction transferring control of an\norganization, or substantially all assets of one, or subdividing an\norganization, or merging organizations.  If propagation of a covered\nwork results from an entity transaction, each party to that\ntransaction who receives a copy of the work also receives whatever\nlicenses to the work the party's predecessor in interest had or could\ngive under the previous paragraph, plus a right to possession of the\nCorresponding Source of the work from the predecessor in interest, if\nthe predecessor has it or can get it with reasonable efforts.\n\n  You may not impose any further restrictions on the exercise of the\nrights granted or affirmed under this License.  For example, you may\nnot impose a license fee, royalty, or other charge for exercise of\nrights granted under this License, and you may not initiate litigation\n(including a cross-claim or counterclaim in a lawsuit) alleging that\nany patent claim is infringed by making, using, selling, offering for\nsale, or importing the Program or any portion of it.\n\n  11. Patents.\n\n  A \"contributor\" is a copyright holder who authorizes use under this\nLicense of the Program or a work on which the Program is based.  The\nwork thus licensed is called the contributor's \"contributor version\".\n\n  A contributor's \"essential patent claims\" are all patent claims\nowned or controlled by the contributor, whether already acquired or\nhereafter acquired, that would be infringed by some manner, permitted\nby this License, of making, using, or selling its contributor version,\nbut do not include claims that would be infringed only as a\nconsequence of further modification of the contributor version.  For\npurposes of this definition, \"control\" includes the right to grant\npatent sublicenses in a manner consistent with the requirements of\nthis License.\n\n  Each contributor grants you a non-exclusive, worldwide, royalty-free\npatent license under the contributor's essential patent claims, to\nmake, use, sell, offer for sale, import and otherwise run, modify and\npropagate the contents of its contributor version.\n\n  In the following three paragraphs, a \"patent license\" is any express\nagreement or commitment, however denominated, not to enforce a patent\n(such as an express permission to practice a patent or covenant not to\nsue for patent infringement).  To \"grant\" such a patent license to a\nparty means to make such an agreement or commitment not to enforce a\npatent against the party.\n\n  If you convey a covered work, knowingly relying on a patent license,\nand the Corresponding Source of the work is not available for anyone\nto copy, free of charge and under the terms of this License, through a\npublicly available network server or other readily accessible means,\nthen you must either (1) cause the Corresponding Source to be so\navailable, or (2) arrange to deprive yourself of the benefit of the\npatent license for this particular work, or (3) arrange, in a manner\nconsistent with the requirements of this License, to extend the patent\nlicense to downstream recipients.  \"Knowingly relying\" means you have\nactual knowledge that, but for the patent license, your conveying the\ncovered work in a country, or your recipient's use of the covered work\nin a country, would infringe one or more identifiable patents in that\ncountry that you have reason to believe are valid.\n\n  If, pursuant to or in connection with a single transaction or\narrangement, you convey, or propagate by procuring conveyance of, a\ncovered work, and grant a patent license to some of the parties\nreceiving the covered work authorizing them to use, propagate, modify\nor convey a specific copy of the covered work, then the patent license\nyou grant is automatically extended to all recipients of the covered\nwork and works based on it.\n\n  A patent license is \"discriminatory\" if it does not include within\nthe scope of its coverage, prohibits the exercise of, or is\nconditioned on the non-exercise of one or more of the rights that are\nspecifically granted under this License.  You may not convey a covered\nwork if you are a party to an arrangement with a third party that is\nin the business of distributing software, under which you make payment\nto the third party based on the extent of your activity of conveying\nthe work, and under which the third party grants, to any of the\nparties who would receive the covered work from you, a discriminatory\npatent license (a) in connection with copies of the covered work\nconveyed by you (or copies made from those copies), or (b) primarily\nfor and in connection with specific products or compilations that\ncontain the covered work, unless you entered into that arrangement,\nor that patent license was granted, prior to 28 March 2007.\n\n  Nothing in this License shall be construed as excluding or limiting\nany implied license or other defenses to infringement that may\notherwise be available to you under applicable patent law.\n\n  12. No Surrender of Others' Freedom.\n\n  If conditions are imposed on you (whether by court order, agreement or\notherwise) that contradict the conditions of this License, they do not\nexcuse you from the conditions of this License.  If you cannot convey a\ncovered work so as to satisfy simultaneously your obligations under this\nLicense and any other pertinent obligations, then as a consequence you may\nnot convey it at all.  For example, if you agree to terms that obligate you\nto collect a royalty for further conveying from those to whom you convey\nthe Program, the only way you could satisfy both those terms and this\nLicense would be to refrain entirely from conveying the Program.\n\n  13. Use with the GNU Affero General Public License.\n\n  Notwithstanding any other provision of this License, you have\npermission to link or combine any covered work with a work licensed\nunder version 3 of the GNU Affero General Public License into a single\ncombined work, and to convey the resulting work.  The terms of this\nLicense will continue to apply to the part which is the covered work,\nbut the special requirements of the GNU Affero General Public License,\nsection 13, concerning interaction through a network will apply to the\ncombination as such.\n\n  14. Revised Versions of this License.\n\n  The Free Software Foundation may publish revised and/or new versions of\nthe GNU General Public License from time to time.  Such new versions will\nbe similar in spirit to the present version, but may differ in detail to\naddress new problems or concerns.\n\n  Each version is given a distinguishing version number.  If the\nProgram specifies that a certain numbered version of the GNU General\nPublic License \"or any later version\" applies to it, you have the\noption of following the terms and conditions either of that numbered\nversion or of any later version published by the Free Software\nFoundation.  If the Program does not specify a version number of the\nGNU General Public License, you may choose any version ever published\nby the Free Software Foundation.\n\n  If the Program specifies that a proxy can decide which future\nversions of the GNU General Public License can be used, that proxy's\npublic statement of acceptance of a version permanently authorizes you\nto choose that version for the Program.\n\n  Later license versions may give you additional or different\npermissions.  However, no additional obligations are imposed on any\nauthor or copyright holder as a result of your choosing to follow a\nlater version.\n\n  15. Disclaimer of Warranty.\n\n  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \"AS IS\" WITHOUT WARRANTY\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\n\n  16. Limitation of Liability.\n\n  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGES.\n\n  17. Interpretation of Sections 15 and 16.\n\n  If the disclaimer of warranty and limitation of liability provided\nabove cannot be given local legal effect according to their terms,\nreviewing courts shall apply local law that most closely approximates\nan absolute waiver of all civil liability in connection with the\nProgram, unless a warranty or assumption of liability accompanies a\ncopy of the Program in return for a fee.\n\n                     END OF TERMS AND CONDITIONS\n\n            How to Apply These Terms to Your New Programs\n\n  If you develop a new program, and you want it to be of the greatest\npossible use to the public, the best way to achieve this is to make it\nfree software which everyone can redistribute and change under these terms.\n\n  To do so, attach the following notices to the program.  It is safest\nto attach them to the start of each source file to most effectively\nstate the exclusion of warranty; and each file should have at least\nthe \"copyright\" line and a pointer to where the full notice is found.\n\n    &lt;one line to give the program's name and a brief idea of what it does.&gt;\n    Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.\n\nAlso add information on how to contact you by electronic and paper mail.\n\n  If the program does terminal interaction, make it output a short\nnotice like this when it starts in an interactive mode:\n\n    &lt;program&gt;  Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.\n    This is free software, and you are welcome to redistribute it\n    under certain conditions; type `show c' for details.\n\nThe hypothetical commands `show w' and `show c' should show the appropriate\nparts of the General Public License.  Of course, your program's commands\nmight be different; for a GUI interface, you would use an \"about box\".\n\n  You should also get your employer (if you work as a programmer) or school,\nif any, to sign a \"copyright disclaimer\" for the program, if necessary.\nFor more information on this, and how to apply and follow the GNU GPL, see\n&lt;https://www.gnu.org/licenses/&gt;.\n\n  The GNU General Public License does not permit incorporating your program\ninto proprietary programs.  If your program is a subroutine library, you\nmay consider it more useful to permit linking proprietary applications with\nthe library.  If this is what you want to do, use the GNU Lesser General\nPublic License instead of this License.  But first, please read\n&lt;https://www.gnu.org/licenses/why-not-lgpl.html&gt;.\n</pre><div class=\"appendix-level-extent\" id=\"tar-context-GNU-Free-Documentation-License\">\n<h2 class=\"appendix\" id=\"tar-context-GNU-Free-Documentation-License-1\"><span>Appendix G GNU Free Documentation License</span></h2>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000–2002, 2007–2008, 2022 Free Software\nFoundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"tar-context-ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents</span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></section>"}]
---
<div class="gnu-tar-original-content"><div class="subsection-level-extent" id="Option-Summary">
<h4 class="subsection" id="tar-Options">3.4.2 tarのオプション</h4>
<dl class="table">
<dd>
<a class="anchor" id="g_t_002d_002dabsolute_002dnames"></a></dd>
<dt><a id="index-absolute_002dnames_002c-summary"></a><span><samp class="option">--absolute-names</samp></span></dt>
<dt><samp class="option">-P</samp></dt>
<dd>
<p>通常、アーカイブの作成時に<code class="code">tar</code>はメンバー名の先頭の<code class="code">/</code>を取り除きます。また、展開時には、先頭に<code class="code">/</code>がある名前や、途中に<code class="code">..</code>がある名前を特別に扱います。このオプションは、その動作を無効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#absolute">Absolute File Names</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dacls"></a></dd>
<dt><a id="index-acls_002c-summary"></a><span><samp class="option">--acls</samp></span></dt>
<dd><p>POSIX ACLのサポートを有効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">acls</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dafter_002ddate"></a></dd>
<dt><a id="index-after_002ddate_002c-summary"></a><span><samp class="option">--after-date</samp></span></dt>
<dd>
<p><code class="code">--newer</code>を参照してください（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002danchored"></a></dd>
<dt><a id="index-anchored_002c-summary"></a><span><samp class="option">--anchored</samp></span></dt>
<dd><p>パターンは、名前を構成する要素の先頭から続く部分に一致しなければなりません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002datime_002dpreserve"></a></dd>
<dt><a id="index-atime_002dpreserve_002c-summary"></a><span><samp class="option">--atime-preserve</samp></span></dt>
<dt><samp class="option">--atime-preserve=replace</samp></dt>
<dt><samp class="option">--atime-preserve=system</samp></dt>
<dd>
<p>ファイルを読み込む際に、アクセス時刻を保持しようとします。現在、このオプションは、スーパーユーザー権限がないかぎり、自分が所有するファイルに対してのみ有効です。</p>
<p><code class="code">--atime-preserve=replace</code>は、ファイルを読む前にアクセス時刻を記憶し、読み込んだ後で元に戻します。他のプログラムが同時にそのファイルを読んでいる場合、それらのアクセス時刻が失われるため、問題になることがあります。多くのプラットフォームでは、アクセス時刻を復元する際に、<code class="code">tar</code>がデータの更新時刻も復元する必要があります。そのため、他のプログラムが同時にファイルへ書き込んでいる場合も問題になることがあります。<code class="code">tar</code>はこの状況を検出しようとしますが、競合状態があるため、確実には検出できません。さらに、多くのプラットフォームでは、アクセス時刻を復元すると状態変更時刻も更新されます。このため、このオプションは増分バックアップと併用できません。</p>
<p><code class="code">--atime-preserve=system</code>は、他のプログラムによるタイムスタンプの更新を妨げずに、ファイルのタイムスタンプを変更しないようにするため、増分バックアップにより適しています。ただし、基盤となるオペレーティングシステムとファイルシステムの実装に、特別な<code class="code">O_NOATIME</code>オプションが必要です。また、ディレクトリを検索しても、そのアクセス時刻が更新されないことも必要です。執筆時点（2005年11月）では、これが機能するのはLinuxだけで、カーネル2.6.8以降に限られます。さらに、この機能が実際に働くかどうかを確実に知る方法は、現時点ではありません。<code class="code">tar</code>が機能しないと分かる場合には、<code class="code">--atime-preserve=system</code>を使うと、エラーを報告して直ちに終了します。一方、実際には機能しないのに、<code class="code">tar</code>が機能すると判断する場合もあります。</p>
<p>現在、オペランドを付けない<code class="code">--atime-preserve</code>の既定値は<code class="code">--atime-preserve=replace</code>ですが、<code class="code">--atime-preserve=system</code>のサポートが改善されるにつれて、将来変更される可能性があります。</p>
<p>オペレーティングシステムやファイルシステムが<code class="code">--atime-preserve=system</code>をサポートしていなくても、<code class="code">mount</code>コマンドを使うことで、アクセス時刻を確実に保持できる場合があります。たとえば、ファイルシステムを読み取り専用でマウントする、読み取り専用のループバックマウントを通じてアクセスする、または一部のシステムで使える<code class="code">noatime</code>マウントオプションを使う方法があります。ただし、通常、マウントにはスーパーユーザー権限が必要で、管理が煩雑になることがあります。</p>
<a class="anchor" id="g_t_002d_002dauto_002dcompress"></a></dd>
<dt><a id="index-auto_002dcompress_002c-summary"></a><span><samp class="option">--auto-compress</samp></span></dt>
<dt><samp class="option">-a</samp></dt>
<dd>
<p><code class="code">--create</code>操作の際に、アーカイブの接尾辞に基づく圧縮形式の自動認識を有効にします。このオプションの効果は<code class="code">--no-auto-compress</code>で取り消せます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dbackup"></a></dd>
<dt><a id="index-backup_002c-summary"></a><span><samp class="option">--backup=<var class="var">backup-type</var></samp></span></dt>
<dd>
<p><code class="code">tar</code>は、ファイルシステムからファイルを削除する代わりに、<code class="code">backup-type</code>に応じて、単純なバックアップまたは番号付きバックアップを作成します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#backup">Backup options</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dblock_002dnumber"></a></dd>
<dt><a id="index-block_002dnumber_002c-summary"></a><span><samp class="option">--block-number</samp></span></dt>
<dt><samp class="option">-R</samp></dt>
<dd>
<p>このオプションを指定すると、<code class="code">tar</code>は、読み取りエラーのメッセージにアーカイブファイル内のブロック番号を付けて表示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#block_002dnumber">block-number</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dblocking_002dfactor"></a></dd>
<dt><a id="index-blocking_002dfactor_002c-summary"></a><span><samp class="option">--blocking-factor=<var class="var">blocking</var></samp></span></dt>
<dt><samp class="option">-b <var class="var">blocking</var></samp></dt>
<dd>
<p><code class="code">tar</code>が使うブロッキング係数を設定し、1レコードを<code class="code">blocking</code>×512バイトにします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Blocking-Factor">The Blocking Factor of an Archive</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dbzip2"></a></dd>
<dt><a id="index-bzip2_002c-summary"></a><span><samp class="option">--bzip2</samp></span></dt>
<dt><samp class="option">-j</samp></dt>
<dd>
<p>このオプションは、<code class="code">bzip2</code>を通じてアーカイブを読み書きするよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dcheck_002ddevice"></a></dd>
<dt><a id="index-check_002ddevice_002c-summary"></a><span><samp class="option">--check-device</samp></span></dt>
<dd><p>増分アーカイブ用に変更されたファイルの一覧を作成する際、デバイス番号を調べます。これが既定の動作です。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#device-numbers">device numbers</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dcheckpoint"></a></dd>
<dt><a id="index-checkpoint_002c-summary"></a><span><samp class="option">--checkpoint[=<var class="var">number</var>]</samp></span></dt>
<dd>
<p>このオプションは、アーカイブを読み進める際に、定期的なチェックポイントメッセージを表示するよう<code class="code">tar</code>に指示します。<code class="code">--verbose</code>の出力は見たくないものの、<code class="code">tar</code>が動作を続けていることを目で確認したい場合のためのものです。各チェックポイントで一連のアクションを実行するよう指示することもできます。後述の<code class="code">--checkpoint-action</code>を参照してください。詳しくは<a class="ref" href="/docs/gnu-tar/source/v1-35/manual.html#checkpoints">Checkpoints</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dcheckpoint_002daction"></a></dd>
<dt><a id="index-checkpoint_002daction_002c-summary"></a><span><samp class="option">--checkpoint-action=<var class="var">action</var></samp></span></dt>
<dd><p>チェックポイントに到達したときにアクションを実行するよう<code class="code">tar</code>に指示します。ここでは概要だけを示します。完全な説明は<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#checkpoints">Checkpoints</a>を参照してください。</p>
<p>引数<code class="code">action</code>には、次のいずれかを指定できます。</p>
<dl class="table">
<dt>bell</dt>
<dd><p>コンソールでベルを鳴らします。</p>
</dd>
<dt>dot</dt>
<dt>.</dt>
<dd><p>標準の一覧出力ストリームにドットを1つ表示します。</p>
</dd>
<dt>echo</dt>
<dd><p>チェックポイントの状態と番号を含むテキストメッセージを、標準エラー出力に表示します。これが既定の動作です。</p>
</dd>
<dt>echo=<var class="var">string</var></dt>
<dd><p><code class="code">string</code>を標準エラー出力に表示します。出力の前に、文字列内のメタ文字が展開されます。</p>
</dd>
<dt>exec=<var class="var">command</var></dt>
<dd><p>指定した<code class="code">command</code>を実行します。</p>
</dd>
<dt>sleep=<var class="var">time</var></dt>
<dd><p><code class="code">time</code>秒間待機します。</p>
</dd>
<dt>ttyout=<var class="var">string</var></dt>
<dd><p>現在のコンソール（<code class="code">/dev/tty</code>）に<code class="code">string</code>を出力します。</p>
</dd>
<dt>totals</dt>
<dd><p>統計を表示します（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#totals">totals</a>を参照）。</p>
</dd>
<dt>wait=<var class="var">signo</var></dt>
<dd><p>シグナル<code class="code">signo</code>を待ちます。</p></dd>
</dl>
<p><code class="code">--checkpoint-action</code>は複数指定できます。指定したアクションは、コマンドラインに現れる順に実行されます。</p>
<p><code class="code">--checkpoint</code>を付けずに<code class="code">--checkpoint-action</code>を使うと、既定の頻度である10レコードごとに1回のチェックポイントが使われます。</p>
<a class="anchor" id="g_t_002d_002dcheck_002dlinks"></a></dd>
<dt><a id="index-check_002dlinks_002c-summary"></a><span><samp class="option">--check-links</samp></span></dt>
<dt><samp class="option">-l</samp></dt>
<dd><p>このオプションを指定すると、<code class="code">tar</code>は、処理した各ファイルについて、格納したリンク数を調べます。その数がファイルのハードリンク総数と一致しない場合、警告メッセージを表示します<a class="footnote" href="/docs/gnu-tar/v1-35/ja/01-guide/42-option-summary/#FOOT5" id="DOCF5"><sup>5</sup></a>。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#hard-links">Hard Links</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dcompress"></a><a class="index-entry-id" id="index-compress_002c-summary"></a>
<a class="anchor" id="g_t_002d_002duncompress"></a></dd>
<dt><a id="index-uncompress_002c-summary"></a><span><samp class="option">--compress</samp></span></dt>
<dt><samp class="option">--uncompress</samp></dt>
<dt><samp class="option">-Z</samp></dt>
<dd>
<p><code class="code">tar</code>は、アーカイブを読み書きする際に<code class="code">compress</code>プログラムを使います。これにより、容量を節約しながら、アーカイブを直接操作できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dclamp_002dmtime"></a></dd>
<dt><a id="index-clamp_002dmtime_002c-summary"></a><span><samp class="option">--clamp-mtime</samp></span></dt>
<dd>
<p><code class="code">--mtime</code>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dconfirmation"></a></dd>
<dt><a id="index-confirmation_002c-summary"></a><span><samp class="option">--confirmation</samp></span></dt>
<dd>
<p><code class="code">--interactive</code>を参照してください。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#interactive">Asking for Confirmation During Operations</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002ddelay_002ddirectory_002drestore"></a></dd>
<dt><a id="index-delay_002ddirectory_002drestore_002c-summary"></a><span><samp class="option">--delay-directory-restore</samp></span></dt>
<dd>
<p>展開したディレクトリの更新時刻と許可属性の設定を、展開処理の最後まで遅らせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Directory-Modification-Times-and-Permissions">Directory Modification Times and Permissions</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002ddereference"></a></dd>
<dt><a id="index-dereference_002c-summary"></a><span><samp class="option">--dereference</samp></span></dt>
<dt><samp class="option">-h</samp></dt>
<dd>
<p>アーカイブへ格納するファイルを読み書きする際、<code class="code">tar</code>はシンボリックリンク自体ではなく、そのリンクが指すファイルにアクセスします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#dereference">Symbolic Links</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002ddirectory"></a></dd>
<dt><a id="index-directory_002c-summary"></a><span><samp class="option">--directory=<var class="var">dir</var></samp></span></dt>
<dt><samp class="option">-C <var class="var">dir</var></samp></dt>
<dd>
<p>このオプションを指定すると、<code class="code">tar</code>は、操作を行う前に現在のディレクトリを<code class="code">dir</code>へ変更します。アーカイブの作成時に使う場合は、指定順序によって効果が変わります。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#directory">作業ディレクトリの変更</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude"></a></dd>
<dt><a id="index-exclude_002c-summary"></a><span><samp class="option">--exclude=<var class="var">pattern</var></samp></span></dt>
<dd>
<p>操作を行う際に、<code class="code">tar</code>は<code class="code">pattern</code>に一致するファイルを処理対象から外します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dbackups"></a></dd>
<dt><a id="index-exclude_002dbackups_002c-summary"></a><span><samp class="option">--exclude-backups</samp></span></dt>
<dd><p>バックアップファイルとロックファイルを除外します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-backups</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dfrom"></a></dd>
<dt><a id="index-exclude_002dfrom_002c-summary"></a><span><samp class="option">--exclude-from=<var class="var">file</var></samp></span></dt>
<dt><samp class="option">-X <var class="var">file</var></samp></dt>
<dd>
<p><code class="code">--exclude</code>と似ていますが、<code class="code">tar</code>はファイル<code class="code">file</code>にあるパターンの一覧を使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches"></a></dd>
<dt><a id="index-exclude_002dcaches_002c-summary"></a><span><samp class="option">--exclude-caches</samp></span></dt>
<dd>
<p>有効なキャッシュディレクトリタグファイルを含むディレクトリを格納対象から除外します。ただし、ディレクトリ自身のノードとタグファイルは格納します。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-caches</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches_002dunder"></a></dd>
<dt><a id="index-exclude_002dcaches_002dunder_002c-summary"></a><span><samp class="option">--exclude-caches-under</samp></span></dt>
<dd>
<p>有効なキャッシュディレクトリタグファイルを含むディレクトリを格納対象から除外します。ただし、ディレクトリ自身のノードは格納します。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches_002dall"></a></dd>
<dt><a id="index-exclude_002dcaches_002dall_002c-summary"></a><span><samp class="option">--exclude-caches-all</samp></span></dt>
<dd>
<p>有効なキャッシュディレクトリタグファイルを含むディレクトリを格納対象から除外します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dignore"></a></dd>
<dt><a id="index-exclude_002dignore_002c-summary"></a><span><samp class="option">--exclude-ignore=<var class="var">file</var></samp></span></dt>
<dd><p>ディレクトリを格納する前に、<code class="code">tar</code>は、その中に<code class="code">file</code>があるかを調べます。あれば、そのファイルから除外パターンを読み込みます。パターンは、そのディレクトリ自身だけに適用されます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dignore_002drecursive"></a></dd>
<dt><a id="index-exclude_002dignore_002drecursive_002c-summary"></a><span><samp class="option">--exclude-ignore-recursive=<var class="var">file</var></samp></span></dt>
<dd><p>ディレクトリを格納する前に、<code class="code">tar</code>は、その中に<code class="code">file</code>があるかを調べます。あれば、そのファイルから除外パターンを読み込みます。パターンは、そのディレクトリとすべてのサブディレクトリに適用されます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag"></a></dd>
<dt><a id="index-exclude_002dtag_002c-summary"></a><span><samp class="option">--exclude-tag=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">file</code>という名前のファイルを含むディレクトリを格納対象から除外します。ただし、ディレクトリ自身のノードと<code class="code">file</code>は格納します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag_002dunder"></a></dd>
<dt><a id="index-exclude_002dtag_002dunder_002c-summary"></a><span><samp class="option">--exclude-tag-under=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">file</code>という名前のファイルを含むディレクトリの内容を格納対象から除外します。ただし、ディレクトリ自身のノードは格納します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag-under</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag_002dall"></a></dd>
<dt><a id="index-exclude_002dtag_002dall_002c-summary"></a><span><samp class="option">--exclude-tag-all=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">file</code>という名前のファイルを含むディレクトリを格納対象から除外します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag-all</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dvcs"></a></dd>
<dt><a id="index-exclude_002dvcs_002c-summary"></a><span><samp class="option">--exclude-vcs</samp></span></dt>
<dd>
<p>広く使われているいくつかのバージョン管理システムの内部用ディレクトリとファイルを、格納対象から除外します。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude_002dvcs">exclude-vcs</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dexclude_002dvcs_002dignores"></a></dd>
<dt><a id="index-exclude_002dvcs_002dignores_002c-summary"></a><span><samp class="option">--exclude-vcs-ignores</samp></span></dt>
<dd><p>バージョン管理システム固有の無視ファイルから読み込んだパターンに一致するファイルを除外します。対応するファイルは、<code class="code">.cvsignore</code>、<code class="code">.gitignore</code>、<code class="code">.bzrignore</code>、<code class="code">.hgignore</code>です。各ファイルの意味は、対応するバージョン管理システムでの意味と同じです。たとえば、<code class="code">.gitignore</code>から読み込んだパターンは、そのディレクトリとすべてのサブディレクトリに適用されます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude_002dvcs_002dignores">exclude-vcs-ignores</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dfile"></a></dd>
<dt><a id="index-file_002c-summary"></a><span><samp class="option">--file=<var class="var">archive</var></samp></span></dt>
<dt><samp class="option">-f <var class="var">archive</var></samp></dt>
<dd>
<p><code class="code">tar</code>は、コンパイル時に決まる既定のアーカイブではなく、ファイル<code class="code">archive</code>を操作対象の<code class="code">tar</code>アーカイブとして使います。<a class="xref" href="/docs/gnu-tar/v1-35/ja/01-guide/14-file-tutorial/#file-tutorial">The <samp class="option">--file</samp> Option</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dfiles_002dfrom"></a></dd>
<dt><a id="index-files_002dfrom_002c-summary"></a><span><samp class="option">--files-from=<var class="var">file</var></samp></span></dt>
<dt><samp class="option">-T <var class="var">file</var></samp></dt>
<dd>
<p><code class="code">tar</code>は、コマンドラインで指定したものに加え、<code class="code">file</code>の内容を、操作対象のアーカイブメンバーまたはファイルの一覧として使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#files">ファイルからの名前の読み込み</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dforce_002dlocal"></a></dd>
<dt><a id="index-force_002dlocal_002c-summary"></a><span><samp class="option">--force-local</samp></span></dt>
<dd>
<p><code class="code">--file</code>に指定したファイル名がリモートのテープドライブ名のように見える場合でも、ローカルファイルとして解釈するよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#local-and-remote-archives">local and remote archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dformat"></a></dd>
<dt><a id="index-format_002c-summary"></a><span><samp class="option">--format=<var class="var">format</var></samp></span></dt>
<dt><samp class="option">-H <var class="var">format</var></samp></dt>
<dd>
<p>出力アーカイブの形式を選択します。<code class="code">Format</code>には次のいずれかを指定できます。</p>
<dl class="table">
<dt>‘<samp class="samp">v7</samp>’</dt>
<dd><p>Unix V7の<code class="code">tar</code>と互換性のあるアーカイブを作成します。</p>
</dd>
<dt>‘<samp class="samp">oldgnu</samp>’</dt>
<dd><p>GNU <code class="code">tar</code>のバージョン1.12以前と互換性のあるアーカイブを作成します。</p>
</dd>
<dt>‘<samp class="samp">gnu</samp>’</dt>
<dd><p>GNU <code class="code">tar</code> 1.13形式でアーカイブを作成します。基本的には<code class="code">oldgnu</code>と同じで、長い数値フィールドの扱いだけが異なります。</p>
</dd>
<dt>‘<samp class="samp">ustar</samp>’</dt>
<dd><p>POSIX.1-1988と互換性のあるアーカイブを作成します。</p>
</dd>
<dt>‘<samp class="samp">posix</samp>’</dt>
<dd><p>POSIX.1-2001形式のアーカイブを作成します。</p>
</dd>
</dl>
<p>これらの形式の詳しい説明は、<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Formats">Controlling the Archive Format</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dfull_002dtime"></a></dd>
<dt><a id="index-full_002dtime_002c-summary"></a><span><samp class="option">--full-time</samp></span></dt>
<dd><p>このオプションは、ファイルの時刻を、取得できる最大の精度で表示するよう<code class="code">tar</code>に指示します。通常は1秒単位ですが、基盤となるファイルシステムによって異なります。<code class="code">--full-time</code>が有効になるのは、<code class="code">--verbose</code>によって詳細出力（詳細度2以上）を要求した場合だけです。たとえば、アーカイブを一覧表示または展開する場合は、次のようにします。</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar -t -v --full-time -f archive.tar</kbd>
</pre></div>
<p>アーカイブを作成する場合は、次のようにします。</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar -c -vv --full-time -f archive.tar .</kbd>
</pre></div>
<p>アーカイブの作成時に詳細出力を得るには、<code class="code">--verbose</code>を2回指定する必要があることに注意してください（<a class="pxref" href="/docs/gnu-tar/v1-35/ja/01-guide/15-verbose-tutorial/#verbose-tutorial">The <samp class="option">--verbose</samp> Option</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dgroup"></a></dd>
<dt><a id="index-group_002c-summary"></a><span><samp class="option">--group=<var class="var">group</var></samp></span></dt>
<dd>
<p><code class="code">tar</code>アーカイブに追加するファイルのグループIDを、元のファイルのグループではなく、<code class="code">group</code>にします。<code class="code">group</code>は、名前、数値のID、または<code class="code">name</code>:<code class="code">id</code>の形で両方を指定できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。</p>
<p><code class="code">--group-map</code>オプションと、<code class="code">--owner=user</code>オプションの説明も参照してください。</p>
<a class="anchor" id="g_t_002d_002dgroup_002dmap"></a></dd>
<dt><a id="index-group_002dmap_002c-summary"></a><span><samp class="option">--group-map=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">file</code>から所有グループの変換表を読み込みます。このオプションでは、特定のグループ名やUIDだけを変換できます。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。<code class="code">--group</code>と併用した場合、<code class="code">--group</code>は、所有グループが<code class="code">file</code>に記載されていないファイルにだけ適用されます。</p>
<p>このオプションは、アーカイブからの展開には影響しません。</p>
<a class="anchor" id="g_t_002d_002dgzip"></a><a class="index-entry-id" id="index-gzip_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dgunzip"></a><a class="index-entry-id" id="index-gunzip_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dungzip"></a></dd>
<dt><a id="index-ungzip_002c-summary"></a><span><samp class="option">--gzip</samp></span></dt>
<dt><samp class="option">--gunzip</samp></dt>
<dt><samp class="option">--ungzip</samp></dt>
<dt><samp class="option">-z</samp></dt>
<dd>
<p>このオプションは、<code class="code">gzip</code>を通じてアーカイブを読み書きするよう<code class="code">tar</code>に指示します。これにより、複数の種類の圧縮アーカイブを、圧縮を意識せずに直接操作できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dhard_002ddereference"></a></dd>
<dt><a id="index-hard_002ddereference_002c-summary"></a><span><samp class="option">--hard-dereference</samp></span></dt>
<dd><p>アーカイブの作成時に、ハードリンクをたどり、通常のハードリンクメンバーを作成する代わりに、リンクが参照するファイルを格納します。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#hard-links">Hard Links</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dhelp"></a></dd>
<dt><a id="index-help_002c-summary"></a><span><samp class="option">--help</samp></span></dt>
<dt><samp class="option">-?</samp></dt>
<dd>
<p><code class="code">tar</code>の操作とオプションを要約した短いメッセージを表示し、終了します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#help"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> documentation</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dhole_002ddetection"></a></dd>
<dt><a id="index-hole_002ddetection_002c-summary"></a><span><samp class="option">--hole-detection=<var class="var">method</var></samp></span></dt>
<dd><p>スパースファイル内のホールを検出する方法に<code class="code">method</code>を使います。このオプションは<code class="code">--sparse</code>の指定を含みます。有効な方法は<code class="code">seek</code>と<code class="code">raw</code>です。既定値は<code class="code">seek</code>で、適用できない場合は<code class="code">raw</code>に切り替えます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dignore_002dcase"></a></dd>
<dt><a id="index-ignore_002dcase_002c-summary"></a><span><samp class="option">--ignore-case</samp></span></dt>
<dd><p>メンバー名やファイル名をパターンと照合する際、大文字と小文字を区別しません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dignore_002dcommand_002derror"></a></dd>
<dt><a id="index-ignore_002dcommand_002derror_002c-summary"></a><span><samp class="option">--ignore-command-error</samp></span></dt>
<dd><p>サブプロセスの終了コードを無視します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dignore_002dfailed_002dread"></a></dd>
<dt><a id="index-ignore_002dfailed_002dread_002c-summary"></a><span><samp class="option">--ignore-failed-read</samp></span></dt>
<dd>
<p>読み取りが失敗したという理由だけでは、失敗として終了しません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Ignore-Failed-Read">Ignore Failed Read</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dignore_002dzeros"></a></dd>
<dt><a id="index-ignore_002dzeros_002c-summary"></a><span><samp class="option">--ignore-zeros</samp></span></dt>
<dt><samp class="option">-i</samp></dt>
<dd>
<p>このオプションを指定すると、<code class="code">tar</code>は、通常はEOFを示す、ゼロで埋められたアーカイブ内のブロックを無視します。また、アーカイブ末尾のゼロブロックがない場合や不完全な場合の警告も抑止します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Ignore-Zeros">Ignoring Blocks of Zeros</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dincremental"></a></dd>
<dt><a id="index-incremental_002c-summary"></a><span><samp class="option">--incremental</samp></span></dt>
<dt><samp class="option">-G</samp></dt>
<dd>
<p>古いGNU形式の増分バックアップアーカイブを扱っていることを<code class="code">tar</code>に知らせます。主に、以前の形式との互換性だけを目的としたものです。増分アーカイブの詳しい説明は、<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dindex_002dfile"></a></dd>
<dt><a id="index-index_002dfile_002c-summary"></a><span><samp class="option">--index-file=<var class="var">file</var></samp></span></dt>
<dd>
<p>詳細出力を、標準出力ではなく<code class="code">file</code>へ送ります。</p>
<a class="anchor" id="g_t_002d_002dinfo_002dscript"></a><a class="index-entry-id" id="index-info_002dscript_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dnew_002dvolume_002dscript"></a></dd>
<dt><a id="index-new_002dvolume_002dscript_002c-summary"></a><span><samp class="option">--info-script=<var class="var">command</var></samp></span></dt>
<dt><samp class="option">--new-volume-script=<var class="var">command</var></samp></dt>
<dt><samp class="option">-F <var class="var">command</var></samp></dt>
<dd>
<p>複数のテープにまたがるバックアップを行う際、<code class="code">tar</code>は、各テープの終わりで<code class="code">command</code>を実行します。そのコマンドが0以外の終了ステータスで終了した場合、<code class="code">tar</code>は直ちに失敗します。この機能の詳しい説明は、<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#info_002dscript">info-script</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dinteractive"></a></dd>
<dt><a id="index-interactive_002c-summary"></a><span><samp class="option">--interactive</samp></span></dt>
<dt><samp class="option">--confirmation</samp></dt>
<dt><samp class="option">-w</samp></dt>
<dd>
<p>ファイルの上書きなど、破壊的な結果を招く可能性のある操作を実行する前に、ユーザーへ確認を求めるよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#interactive">Asking for Confirmation During Operations</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dkeep_002ddirectory_002dsymlink"></a></dd>
<dt><a id="index-keep_002ddirectory_002dsymlink_002c-summary"></a><span><samp class="option">--keep-directory-symlink</samp></span></dt>
<dd>
<p>このオプションは、展開しようとするディレクトリと同じ名前のシンボリックリンクを見つけた場合の<code class="code">tar</code>の動作を変えます。既定では、<code class="code">tar</code>は、まずシンボリックリンクを削除してから、ディレクトリの展開を続けます。</p>
<p><code class="code">--keep-directory-symlink</code>は、この動作を無効にし、アーカイブからの展開時に、ディレクトリへのシンボリックリンクをたどるよう<code class="code">tar</code>に指示します。</p>
<p>主に、Slackwareのインストールスクリプトとの互換性を提供するためのものです。</p>
<a class="anchor" id="g_t_002d_002dkeep_002dnewer_002dfiles"></a></dd>
<dt><a id="index-keep_002dnewer_002dfiles_002c-summary"></a><span><samp class="option">--keep-newer-files</samp></span></dt>
<dd>
<p>アーカイブからファイルを展開する際、アーカイブ内のコピーより新しい既存ファイルを置き換えません。</p>
<a class="anchor" id="g_t_002d_002dkeep_002dold_002dfiles"></a></dd>
<dt><a id="index-keep_002dold_002dfiles_002c-summary"></a><span><samp class="option">--keep-old-files</samp></span></dt>
<dt><samp class="option">-k</samp></dt>
<dd>
<p>アーカイブからファイルを展開する際、既存ファイルを上書きしません。そのようなファイルが存在する場合はエラーを返します。<a class="ref" href="/docs/gnu-tar/v1-35/ja/01-guide/42-option-summary/#g_t_002d_002dskip_002dold_002dfiles">--skip-old-files</a>も参照してください。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Keep-Old-Files">Keep Old Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dlabel"></a></dd>
<dt><a id="index-label_002c-summary"></a><span><samp class="option">--label=<var class="var">name</var></samp></span></dt>
<dt><samp class="option">-V <var class="var">name</var></samp></dt>
<dd>
<p>アーカイブの作成時に、<code class="code">name</code>を名前レコードとしてアーカイブに書き込むよう<code class="code">tar</code>に指示します。展開や一覧表示の際には、<code class="code">name</code>で指定したパターンに一致するラベルを持つアーカイブだけを処理します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Tape-Files">Tape Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dlevel"></a></dd>
<dt><a id="index-level_002c-summary"></a><span><samp class="option">--level=<var class="var">n</var></samp></span></dt>
<dd><p>レベル<code class="code">n</code>の増分バックアップを強制します。GNU <code class="code">tar</code>バージョン1.35では、<code class="code">--level=0</code>はスナップショットファイルを切り詰めることで、レベル0のダンプを強制します。<code class="code">n</code>のその他の値は、実質的に無視されます。詳細と例は、<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#g_t_002d_002dlevel_003d0">--level=0</a>を参照してください。</p>
<p>このオプションが有効なのは、<code class="code">--listed-incremental</code>と併用する場合だけです。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dlisted_002dincremental"></a></dd>
<dt><a id="index-listed_002dincremental_002c-summary"></a><span><samp class="option">--listed-incremental=<var class="var">snapshot-file</var></samp></span></dt>
<dt><samp class="option">-g <var class="var">snapshot-file</var></samp></dt>
<dd>
<p><code class="code">--create</code>操作では、<code class="code">snapshot-file</code>を使ってバックアップ対象のファイルを判断する、新しいGNU形式の増分バックアップを作成するよう指定します。その他の操作では、アーカイブが増分形式であることを<code class="code">tar</code>に知らせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dlzip"></a></dd>
<dt><a id="index-lzip_002c-summary"></a><span><samp class="option">--lzip</samp></span></dt>
<dd>
<p>このオプションは、<code class="code">lzip</code>を通じてアーカイブを読み書きするよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dlzma"></a></dd>
<dt><a id="index-lzma_002c-summary"></a><span><samp class="option">--lzma</samp></span></dt>
<dd>
<p>このオプションは、<code class="code">lzma</code>を通じてアーカイブを読み書きするよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
</dd>
<dt><samp class="option">--lzop</samp></dt>
<dd>
<p>このオプションは、<code class="code">lzop</code>を通じてアーカイブを読み書きするよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dmode"></a></dd>
<dt><a id="index-mode_002c-summary"></a><span><samp class="option">--mode=<var class="var">permissions</var></samp></span></dt>
<dd>
<p>アーカイブにファイルを追加する際、<code class="code">tar</code>は、元のファイルの許可属性ではなく、<code class="code">permissions</code>をメンバーの許可属性として使います。<code class="code">permissions</code>は、<code class="code">chmod</code>と同様に、8進数または記号形式で指定できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dmtime"></a></dd>
<dt><a id="index-mtime_002c-summary"></a><span><samp class="option">--mtime=<var class="var">date</var></samp></span></dt>
<dd>
<p>アーカイブを作成してファイルを追加する際、<code class="code">tar</code>は、メンバーの実際の更新時刻ではなく、<code class="code">date</code>を更新時刻として使います。<code class="code">date</code>には、文字列による日時の表現（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Date-input-formats">Date input formats</a>を参照）、または<code class="code">/</code>や<code class="code">.</code>で始まる既存ファイル名を指定できます。後者の場合、そのファイルの更新時刻を使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。</p>
<p><code class="code">--clamp-mtime</code>も指定した場合、更新時刻が<code class="code">date</code>より前のファイルは、実際の更新時刻を保持します。<code class="code">date</code>を使うのは、更新時刻が<code class="code">date</code>より後のファイルだけです。</p>
<a class="anchor" id="g_t_002d_002dmulti_002dvolume"></a></dd>
<dt><a id="index-multi_002dvolume_002c-summary"></a><span><samp class="option">--multi-volume</samp></span></dt>
<dt><samp class="option">-M</samp></dt>
<dd>
<p>複数巻に分かれた<code class="code">tar</code>アーカイブを作成する、またはその他の操作で扱うことを<code class="code">tar</code>に知らせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>を参照してください。</p>
</dd>
<dt><a id="index-new_002dvolume_002dscript_002c-summary-1"></a><span><samp class="option">--new-volume-script</samp></span></dt>
<dd>
<p><code class="code">--info-script</code>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dnewer"></a></dd>
<dt><a id="index-newer_002c-summary"></a><span><samp class="option">--newer=<var class="var">date</var></samp></span></dt>
<dt><samp class="option">--after-date=<var class="var">date</var></samp></dt>
<dt><samp class="option">-N</samp></dt>
<dd>
<p>アーカイブの作成時に、<code class="code">tar</code>は<code class="code">date</code>以降に変更されたファイルだけを追加します。<code class="code">date</code>が<code class="code">/</code>または<code class="code">.</code>で始まる場合、ファイル名と解釈し、そのファイルのデータ更新時刻を日時として使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dnewer_002dmtime"></a></dd>
<dt><a id="index-newer_002dmtime_002c-summary"></a><span><samp class="option">--newer-mtime=<var class="var">date</var></samp></span></dt>
<dd>
<p><code class="code">--newer</code>と似ていますが、内容が変更されたファイルだけを追加します。これに対し、<code class="code">--newer</code>だけの場合は、状態情報のいずれかが変更されたファイルもバックアップします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dacls"></a></dd>
<dt><a id="index-no_002dacls_002c-summary"></a><span><samp class="option">--no-acls</samp></span></dt>
<dd><p>POSIX ACLのサポートを無効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">acls</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002danchored"></a></dd>
<dt><a id="index-no_002danchored_002c-summary"></a><span><samp class="option">--no-anchored</samp></span></dt>
<dd><p>除外パターンは、名前を構成する要素の任意の部分列に一致できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dauto_002dcompress"></a></dd>
<dt><a id="index-no_002dauto_002dcompress_002c-summary"></a><span><samp class="option">--no-auto-compress</samp></span></dt>
<dd>
<p>アーカイブの接尾辞に基づく圧縮形式の自動認識を無効にします。<a class="xref" href="/docs/gnu-tar/v1-35/ja/01-guide/42-option-summary/#g_t_002d_002dauto_002dcompress">--auto-compress</a>および<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dcheck_002ddevice"></a></dd>
<dt><a id="index-no_002dcheck_002ddevice_002c-summary"></a><span><samp class="option">--no-check-device</samp></span></dt>
<dd><p>増分アーカイブ用に変更されたファイルの一覧を作成する際、デバイス番号を調べません。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#device-numbers">device numbers</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002ddelay_002ddirectory_002drestore"></a></dd>
<dt><a id="index-no_002ddelay_002ddirectory_002drestore_002c-summary"></a><span><samp class="option">--no-delay-directory-restore</samp></span></dt>
<dd>
<p>展開したディレクトリの更新時刻と許可属性は、そのディレクトリ内のすべてのファイルを展開し終えた時点で設定します。これが既定の動作です。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Directory-Modification-Times-and-Permissions">Directory Modification Times and Permissions</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dignore_002dcase"></a></dd>
<dt><a id="index-no_002dignore_002dcase_002c-summary"></a><span><samp class="option">--no-ignore-case</samp></span></dt>
<dd><p>大文字と小文字を区別して照合します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dignore_002dcommand_002derror"></a></dd>
<dt><a id="index-no_002dignore_002dcommand_002derror_002c-summary"></a><span><samp class="option">--no-ignore-command-error</samp></span></dt>
<dd><p>0以外の終了コードで終了したサブプロセスについて、警告を表示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dnull"></a></dd>
<dt><a id="index-no_002dnull_002c-summary"></a><span><samp class="option">--no-null</samp></span></dt>
<dd>
<p>以前に<code class="code">--null</code>を指定していた場合、このオプションはその効果を取り消します。その後に現れる<code class="code">--files-from</code>では、各ファイル名が改行で終わる一覧を使います。</p>
<a class="anchor" id="g_t_002d_002dno_002doverwrite_002ddir"></a></dd>
<dt><a id="index-no_002doverwrite_002ddir_002c-summary"></a><span><samp class="option">--no-overwrite-dir</samp></span></dt>
<dd>
<p>アーカイブからファイルを展開する際、既存ディレクトリのメタデータを保持します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dquote_002dchars"></a></dd>
<dt><a id="index-no_002dquote_002dchars_002c-summary"></a><span><samp class="option">--no-quote-chars=<var class="var">string</var></samp></span></dt>
<dd><p>直前の<code class="code">--quote-chars</code>で設定した引用対象文字の一覧から、<code class="code">string</code>内の文字を取り除きます（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dno_002drecursion"></a></dd>
<dt><a id="index-no_002drecursion_002c-summary"></a><span><samp class="option">--no-recursion</samp></span></dt>
<dd>
<p>このオプションを指定すると、<code class="code">tar</code>はディレクトリへ再帰的に入りません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#recurse">ディレクトリへの再帰</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dsame_002downer"></a></dd>
<dt><a id="index-no_002dsame_002downer_002c-summary"></a><span><samp class="option">--no-same-owner</samp></span></dt>
<dt><samp class="option">-o</samp></dt>
<dd>
<p>アーカイブの展開時に、アーカイブ内で指定されている所有者を保持しようとしません。一般ユーザーには、これが既定の動作です。</p>
<a class="anchor" id="g_t_002d_002dno_002dsame_002dpermissions"></a></dd>
<dt><a id="index-no_002dsame_002dpermissions_002c-summary"></a><span><samp class="option">--no-same-permissions</samp></span></dt>
<dd>
<p>アーカイブの展開時に、アーカイブ内で指定されている許可属性からユーザーのumaskを差し引いて、ファイルへ適用します。一般ユーザーには、これが既定の動作です。</p>
<a class="anchor" id="g_t_002d_002dno_002dseek"></a></dd>
<dt><a id="index-no_002dseek_002c-summary"></a><span><samp class="option">--no-seek</samp></span></dt>
<dd>
<p>アーカイブ媒体が、任意の位置へのシークに対応していないことを指定します。通常、<code class="code">tar</code>は、アーカイブがシーク可能かどうかを自動で判断します。このオプションは、その仕組みを無効にするために使います。</p>
<a class="anchor" id="g_t_002d_002dno_002dselinux"></a></dd>
<dt><a id="index-no_002dselinux_002c-summary"></a><span><samp class="option">--no-selinux</samp></span></dt>
<dd><p>SELinuxコンテキストのサポートを無効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">SELinux</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dunquote"></a></dd>
<dt><a id="index-no_002dunquote_002c-summary"></a><span><samp class="option">--no-unquote</samp></span></dt>
<dd><p>入力されたすべてのファイル名やメンバー名を、そのままの文字列として扱い、エスケープシーケンスを解釈しません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#input-name-quoting">入力ファイル名の引用</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dverbatim_002dfiles_002dfrom"></a></dd>
<dt><a id="index-no_002dverbatim_002dfiles_002dfrom_002c-summary"></a><span><samp class="option">--no-verbatim-files-from</samp></span></dt>
<dd>
<p>ファイル一覧から読み込んだ各行を、コマンドラインで指定されたかのように扱うようGNU <code class="code">tar</code>に指示します。つまり、先頭と末尾の空白文字を取り除き、結果がハイフンで始まる場合は、GNU <code class="code">tar</code>のコマンドラインオプションとして扱います。</p>
<p>これが既定の動作です。このオプションは、<code class="code">--verbatim-files-from</code>の後で既定の動作に戻すために用意されています。</p>
<p><code class="code">--no-null</code>は、このオプションの指定を含みます。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#no_002dverbatim_002dfiles_002dfrom">no-verbatim-files-from</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dwildcards"></a></dd>
<dt><a id="index-no_002dwildcards_002c-summary"></a><span><samp class="option">--no-wildcards</samp></span></dt>
<dd><p>ワイルドカードを使いません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dwildcards_002dmatch_002dslash"></a></dd>
<dt><a id="index-no_002dwildcards_002dmatch_002dslash_002c-summary"></a><span><samp class="option">--no-wildcards-match-slash</samp></span></dt>
<dd><p>ワイルドカードは<code class="code">/</code>に一致しません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dno_002dxattrs"></a></dd>
<dt><a id="index-no_002dxattrs_002c-summary"></a><span><samp class="option">--no-xattrs</samp></span></dt>
<dd><p>拡張属性のサポートを無効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dnull"></a></dd>
<dt><a id="index-null_002c-summary"></a><span><samp class="option">--null</samp></span></dt>
<dd>
<p><code class="code">--files-from</code>を使う場合に、ファイル名がNULで終わるものとして読み込み、名前をそのままの文字列として処理するよう<code class="code">tar</code>に指示します。</p>
<p>これにより、改行を含むファイル名や、ハイフンで始まるファイル名を正しく扱えます。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#nul">NULで終端するファイル名</a>を参照してください。</p>
<p><a class="ref" href="/docs/gnu-tar/source/v1-35/manual.html#verbatim_002dfiles_002dfrom">verbatim-files-from</a>も参照してください。</p>
<a class="anchor" id="g_t_002d_002dnumeric_002downer"></a></dd>
<dt><a id="index-numeric_002downer_002c-summary"></a><span><samp class="option">--numeric-owner</samp></span></dt>
<dd>
<p>アーカイブの作成時に、名前ではなく、数値のユーザーIDとグループIDを使うよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Attributes">Handling File Attributes</a>を参照してください。</p>
</dd>
<dt><samp class="option">-o</samp></dt>
<dd><p>このオプションの機能は、<code class="code">tar</code>が実行している操作によって異なります。ファイルの展開時には、<code class="code">-o</code>は<code class="code">--no-same-owner</code>の別名で、展開するファイルの所有者を復元しないようにします。</p>
<p>アーカイブの作成時には、<code class="code">--old-archive</code>の別名です。この動作はGNU <code class="code">tar</code>の以前のバージョンとの互換性のためのもので、将来のリリースでは削除される予定です。</p>
<p>詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Changes">Changes</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002doccurrence"></a></dd>
<dt><a id="index-occurrence_002c-summary"></a><span><samp class="option">--occurrence[=<var class="var">number</var>]</samp></span></dt>
<dd>
<p>このオプションは、コマンドラインまたは<code class="code">-T</code>でファイル一覧を指定した場合に、<code class="code">--delete</code>、<code class="code">--diff</code>、<code class="code">--extract</code>、<code class="code">--list</code>のいずれかのサブコマンドと併用できます。</p>
<p>指定した各ファイルについて、<code class="code">number</code>番目に現れるものだけを処理するよう<code class="code">tar</code>に指示します。<code class="code">Number</code>の既定値は1なので、次のコマンドは、</p>
<div class="example smallexample">
<pre class="example-preformatted">tar -x -f archive.tar --occurrence filename
</pre></div>
<p><code class="code">archive.tar</code>からメンバー<code class="code">filename</code>の最初に現れるものを展開し、アーカイブの末尾まで走査せずに終了します。</p>
<a class="anchor" id="g_t_002d_002dold_002darchive"></a></dd>
<dt><a id="index-old_002darchive_002c-summary"></a><span><samp class="option">--old-archive</samp></span></dt>
<dd><p><code class="code">--format=v7</code>の別名です。</p>
<a class="anchor" id="g_t_002d_002done_002dfile_002dsystem"></a></dd>
<dt><a id="index-one_002dfile_002dsystem_002c-summary"></a><span><samp class="option">--one-file-system</samp></span></dt>
<dd><p>アーカイブの作成時に使います。現在のディレクトリとは異なるファイルシステムにあるディレクトリへ、<code class="code">tar</code>が再帰的に入るのを防ぎます。</p>
<a class="anchor" id="g_t_002d_002done_002dtop_002dlevel"></a></dd>
<dt><a id="index-one_002dtop_002dlevel_002c-summary"></a><span><samp class="option">--one-top-level[=<var class="var">dir</var>]</samp></span></dt>
<dd><p>展開先ディレクトリ、または<code class="code">-C</code>で指定したディレクトリの下に新しいディレクトリを作成し、tarbomb対策に使うよう<code class="code">tar</code>に指示します。引数<code class="code">dir</code>を省略すると、新しいディレクトリの名前はアーカイブのベース名になります。これは、認識されたアーカイブの接尾辞をファイル名から除いたものです。<code class="code">--transform</code>と<code class="code">--strip-components</code>による変換後に、そのディレクトリ名で始まらないメンバー名には、ディレクトリ名を先頭に付けます。認識される接尾辞は<code class="code">.tar</code>と、<a class="xref" href="/docs/gnu-tar/v1-35/ja/01-guide/42-option-summary/#g_t_002d_002dauto_002dcompress">--auto-compress</a>で認識される圧縮形式の接尾辞です。</p>
<a class="anchor" id="g_t_002d_002doverwrite"></a></dd>
<dt><a id="index-overwrite_002c-summary"></a><span><samp class="option">--overwrite</samp></span></dt>
<dd>
<p>アーカイブからファイルを展開する際、既存のファイルとディレクトリのメタデータを上書きします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002doverwrite_002ddir"></a></dd>
<dt><a id="index-overwrite_002ddir_002c-summary"></a><span><samp class="option">--overwrite-dir</samp></span></dt>
<dd>
<p>アーカイブからファイルを展開する際、既存ディレクトリのメタデータを上書きします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002downer"></a></dd>
<dt><a id="index-owner_002c-summary"></a><span><samp class="option">--owner=<var class="var">user</var></samp></span></dt>
<dd>
<p>アーカイブの作成時に、元のファイルのユーザーではなく、<code class="code">user</code>をメンバーの所有者として使うよう<code class="code">tar</code>に指示します。<code class="code">user</code>は、名前、数値のID、または<code class="code">name</code>:<code class="code">id</code>の形で両方を指定できます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。</p>
<p>このオプションは、アーカイブからの展開には影響しません。後述の<code class="code">--owner-map</code>も参照してください。</p>
<a class="anchor" id="g_t_002d_002downer_002dmap"></a></dd>
<dt><a id="index-owner_002dmap_002c-summary"></a><span><samp class="option">--owner-map=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">file</code>から所有者の変換表を読み込みます。このオプションでは、特定の所有者名やUIDだけを変換できます。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>を参照してください。<code class="code">--owner</code>と併用した場合、<code class="code">--owner</code>は、所有者が<code class="code">file</code>に記載されていないファイルにだけ適用されます。</p>
<p>このオプションは、アーカイブからの展開には影響しません。</p>
<a class="anchor" id="g_t_002d_002dpax_002doption"></a></dd>
<dt><a id="index-pax_002doption_002c-summary"></a><span><samp class="option">--pax-option=<var class="var">keyword-list</var></samp></span></dt>
<dd><p>このオプションは、POSIX.1-2001形式のアーカイブを作成できるようにし（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#posix"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> and <abbr class="acronym">POSIX</abbr> <code class="command">tar</code></a>を参照）、拡張ヘッダーのキーワードの扱いを変更します。<code class="code">Keyword-list</code>は、キーワードオプションをカンマで区切った一覧です。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#PAX-keywords">Controlling Extended Header Keywords</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dportability"></a></dd>
<dt><a id="index-portability_002c-summary"></a><span><samp class="option">--portability</samp></span></dt>
<dt><samp class="option">--old-archive</samp></dt>
<dd><p><code class="code">--format=v7</code>の別名です。</p>
<a class="anchor" id="g_t_002d_002dposix"></a></dd>
<dt><a id="index-posix_002c-summary"></a><span><samp class="option">--posix</samp></span></dt>
<dd><p><code class="code">--format=posix</code>と同じです。</p>
<a class="anchor" id="g_t_002d_002dpreserve_002dorder"></a></dd>
<dt><a id="index-preserve_002dorder_002c-summary"></a><span><samp class="option">--preserve-order</samp></span></dt>
<dd>
<p><code class="code">--same-order</code>を参照してください（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Same-Order">Same Order</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dpreserve_002dpermissions"></a><a class="index-entry-id" id="index-preserve_002dpermissions_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dsame_002dpermissions"></a></dd>
<dt><a id="index-same_002dpermissions_002c-summary"></a><span><samp class="option">--preserve-permissions</samp></span></dt>
<dt><samp class="option">--same-permissions</samp></dt>
<dt><samp class="option">-p</samp></dt>
<dd>
<p>アーカイブの展開時、通常の<code class="code">tar</code>は、アーカイブ内で指定されている許可属性からユーザーのumaskを差し引き、その値を展開先ファイルの作成に使います。このオプションは、アーカイブ内の許可属性をそのまま使うよう指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Setting-Access-Permissions">Setting Access Permissions</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dquote_002dchars"></a></dd>
<dt><a id="index-quote_002dchars_002c-summary"></a><span><samp class="option">--quote-chars=<var class="var">string</var></samp></span></dt>
<dd><p>選択した引用形式では引用しない文字であっても、<code class="code">string</code>内の文字は常に引用します（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dquoting_002dstyle"></a></dd>
<dt><a id="index-quoting_002dstyle_002c-summary"></a><span><samp class="option">--quoting-style=<var class="var">style</var></samp></span></dt>
<dd><p>メンバー名とファイル名の表示に使う引用形式を設定します（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>を参照）。<code class="code">style</code>に指定できる値は、<code class="code">literal</code>、<code class="code">shell</code>、<code class="code">shell-always</code>、<code class="code">c</code>、<code class="code">escape</code>、<code class="code">locale</code>、<code class="code">clocale</code>です。パッケージの設定時に変更していなければ、既定の引用形式は<code class="code">escape</code>です。</p>
<a class="anchor" id="g_t_002d_002dread_002dfull_002drecords"></a></dd>
<dt><a id="index-read_002dfull_002drecords_002c-summary"></a><span><samp class="option">--read-full-records</samp></span></dt>
<dt><samp class="option">-B</samp></dt>
<dd>
<p>パイプの実装に不具合があるシステムでパイプから読み取るために、入力を再ブロック化するよう<code class="code">tar</code>に指定します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Reading">Options to Help Read Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002drecord_002dsize"></a></dd>
<dt><a id="index-record_002dsize_002c-summary"></a><span><samp class="option">--record-size=<var class="var">size</var>[<var class="var">suf</var>]</samp></span></dt>
<dd>
<p>アーカイブにアクセスする際、1レコードを<code class="code">size</code>バイトにするよう<code class="code">tar</code>に指示します。引数にはサイズの接尾辞を付けられます。たとえば、<code class="code">--record-size=10K</code>は10キロバイトを指定します。有効な接尾辞の一覧は<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#size_002dsuffixes">Table 9.1</a>を、このオプションの詳しい説明は<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Blocking-Factor">The Blocking Factor of an Archive</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002drecursion"></a></dd>
<dt><a id="index-recursion_002c-summary"></a><span><samp class="option">--recursion</samp></span></dt>
<dd>
<p>このオプションを指定すると、<code class="code">tar</code>はディレクトリへ再帰的に入ります。これが既定の動作です。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#recurse">ディレクトリへの再帰</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002drecursive_002dunlink"></a></dd>
<dt><a id="index-recursive_002dunlink_002c-summary"></a><span><samp class="option">--recursive-unlink</samp></span></dt>
<dd>
<p>アーカイブから同じ名前のディレクトリを展開する前に、既存のディレクトリ階層を削除します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Recursive-Unlink">Recursive Unlink</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dremove_002dfiles"></a></dd>
<dt><a id="index-remove_002dfiles_002c-summary"></a><span><samp class="option">--remove-files</samp></span></dt>
<dd>
<p>アーカイブへ追加した後、元のファイルをファイルシステムから削除するよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#remove-files">Removing Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002drestrict"></a></dd>
<dt><a id="index-restrict_002c-summary"></a><span><samp class="option">--restrict</samp></span></dt>
<dd>
<p>有害な結果を招く可能性のある、一部の<code class="code">tar</code>オプションの使用を無効にします。現在は、複数巻用メニューからのシェル起動を無効にします（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002drmt_002dcommand"></a></dd>
<dt><a id="index-rmt_002dcommand_002c-summary"></a><span><samp class="option">--rmt-command=<var class="var">cmd</var></samp></span></dt>
<dd>
<p>既定の<code class="code">/usr/libexec/rmt</code>ではなく、<code class="code">cmd</code>を使うよう<code class="code">tar</code>に知らせます（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Remote-Tape-Server">Remote Tape Server</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002drsh_002dcommand"></a></dd>
<dt><a id="index-rsh_002dcommand_002c-summary"></a><span><samp class="option">--rsh-command=<var class="var">cmd</var></samp></span></dt>
<dd>
<p>リモートデバイスとの通信に<code class="code">cmd</code>を使うよう<code class="code">tar</code>に知らせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Device">Device Selection and Switching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dsame_002dorder"></a></dd>
<dt><a id="index-same_002dorder_002c-summary"></a><span><samp class="option">--same-order</samp></span></dt>
<dt><samp class="option">--preserve-order</samp></dt>
<dt><samp class="option">-s</samp></dt>
<dd>
<p>このオプションは、メモリの少ないマシンで<code class="code">tar</code>を実行する際の最適化です。ファイル引数の一覧が、アーカイブ内のファイル順に合わせて、すでに並べ替えられていることを<code class="code">tar</code>に知らせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Same-Order">Same Order</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dsame_002downer"></a></dd>
<dt><a id="index-same_002downer_002c-summary"></a><span><samp class="option">--same-owner</samp></span></dt>
<dd>
<p>このオプションを指定すると、アーカイブの展開時に、<code class="code">tar</code>はアーカイブ内で指定されている所有者を保持しようとします。スーパーユーザーには、これが既定の動作です。このオプションが効果を持つのは、一般ユーザーの場合だけです。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Attributes">Handling File Attributes</a>を参照してください。</p>
</dd>
<dt><a id="index-same_002dpermissions_002c-summary-1"></a><span><samp class="option">--same-permissions</samp></span></dt>
<dd>
<p><code class="code">--preserve-permissions</code>を参照してください（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Setting-Access-Permissions">Setting Access Permissions</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dseek"></a></dd>
<dt><a id="index-seek_002c-summary"></a><span><samp class="option">--seek</samp></span></dt>
<dt><samp class="option">-n</samp></dt>
<dd>
<p>アーカイブ媒体が、任意の位置へのシークに対応していると仮定します。通常、<code class="code">tar</code>は、アーカイブがシーク可能かどうかを自動で判断します。このオプションは、その認識に失敗する場合のためのものです。有効になるのは、アーカイブを読み取り用に開いた場合だけです。たとえば、<code class="code">--list</code>や<code class="code">--extract</code>を使う場合が該当します。</p>
<a class="anchor" id="g_t_002d_002dselinux"></a></dd>
<dt><a id="index-selinux_002c-summary"></a><span><samp class="option">--selinux</samp></span></dt>
<dd><p>SELinuxコンテキストのサポートを有効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">selinux</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dshow_002ddefaults"></a></dd>
<dt><a id="index-show_002ddefaults_002c-summary"></a><span><samp class="option">--show-defaults</samp></span></dt>
<dd>
<p><code class="code">tar</code>が使う既定のオプションを表示し、正常終了します。このオプションは、シェルスクリプトで使うためのものです。次は、このオプションで表示される出力の例です。</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar --show-defaults</kbd>
--format=gnu -f- -b20 --quoting-style=escape
--rmt-command=/usr/libexec/rmt --rsh-command=/usr/bin/rsh
</pre></div>
<p>このオプションが出力するのは1行だけであることに注意してください。上の出力例は、ページ幅に収めるために分割してあります。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#defaults">Obtaining <abbr class="acronym">GNU</abbr> <code class="command">tar</code> default values</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dshow_002domitted_002ddirs"></a></dd>
<dt><a id="index-show_002domitted_002ddirs_002c-summary"></a><span><samp class="option">--show-omitted-dirs</samp></span></dt>
<dd>
<p>アーカイブを処理する際、処理対象から外すディレクトリを表示するよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#show_002domitted_002ddirs">show-omitted-dirs</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dshow_002dsnapshot_002dfield_002dranges"></a></dd>
<dt><a id="index-show_002dsnapshot_002dfield_002dranges_002c-summary"></a><span><samp class="option">--show-snapshot-field-ranges</samp></span></dt>
<dd>
<p>このバージョンの<code class="code">tar</code>で、スナップショットファイルの各フィールドに使える値の範囲を表示し、正常終了します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Snapshot-Files">Format of the Incremental Snapshot Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dshow_002dtransformed_002dnames"></a><a class="index-entry-id" id="index-show_002dtransformed_002dnames_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dshow_002dstored_002dnames"></a></dd>
<dt><a id="index-show_002dstored_002dnames_002c-summary"></a><span><samp class="option">--show-transformed-names</samp></span></dt>
<dt><samp class="option">--show-stored-names</samp></dt>
<dd>
<p>各種の変換を適用した後のファイル名またはメンバー名を表示します（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>を参照）。特に、アーカイブの作成操作のいずれかと併用した場合は、実際のファイル名ではなく、アーカイブ内に格納するメンバー名を一覧表示するよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/v1-35/ja/01-guide/23-list/#listing-member-and-file-names">listing member and file names</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dskip_002dold_002dfiles"></a></dd>
<dt><a id="index-skip_002dold_002dfiles_002c-summary"></a><span><samp class="option">--skip-old-files</samp></span></dt>
<dd>
<p>アーカイブからファイルを展開する際、既存ファイルを上書きしません。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Keep-Old-Files">Keep Old Files</a>を参照してください。</p>
<p><code class="code">--keep-old-files</code>とは異なり、そのようなファイルをエラーとして扱わず、単に、何も表示せずに上書きを避けます。</p>
<p>既存ファイルについての警告を表示するには、このオプションと<code class="code">--warning=existing-file</code>を併用できます（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#warnings">Controlling Warning Messages</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dsort"></a></dd>
<dt><a id="index-sort_002c-summary"></a><span><samp class="option">--sort=<var class="var">order</var></samp></span></dt>
<dd><p>ディレクトリを読み込む際の並べ替え順を指定します。<code class="code">Order</code>には、次のいずれかを指定できます。</p>
<dl class="table">
<dt>‘<samp class="samp">none</samp>’</dt>
<dd><p>ディレクトリの並べ替えを行いません。これが既定の動作です。</p>
</dd>
<dt>‘<samp class="samp">name</samp>’</dt>
<dd><p>ディレクトリエントリを名前順に並べ替えます。オペレーティングシステムが返すディレクトリエントリの順序は、多少なりとも不規則な場合があります。並べ替えることで、アーカイブの作成結果を再現可能にします。</p>
</dd>
<dt>‘<samp class="samp">inode</samp>’</dt>
<dd><p>ディレクトリエントリをinode番号順に並べ替えます。一部のファイルシステムでは、inode番号順に並べ替えると、アーカイブの作成時にディスクのシーク回数を減らせることがあります。</p>
</dd>
</dl>
<a class="anchor" id="g_t_002d_002dsparse"></a></dd>
<dt><a id="index-sparse_002c-summary"></a><span><samp class="option">--sparse</samp></span></dt>
<dt><samp class="option">-S</samp></dt>
<dd>
<p>アーカイブにファイルを追加する際、スパースファイルを効率よく扱うGNU拡張を使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dsparse_002dversion"></a></dd>
<dt><a id="index-sparse_002dversion_002c-summary"></a><span><samp class="option">--sparse-version=<var class="var">version</var></samp></span></dt>
<dd>
<p>スパースファイルのアーカイブに使う形式のバージョンを指定します。<code class="code">--sparse</code>の指定を含みます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>を参照してください。対応するスパース形式の説明は、<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Sparse-Formats">Storing Sparse Files</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dstarting_002dfile"></a></dd>
<dt><a id="index-starting_002dfile_002c-summary"></a><span><samp class="option">--starting-file=<var class="var">name</var></samp></span></dt>
<dt><samp class="option">-K <var class="var">name</var></samp></dt>
<dd>
<p>このオプションは、展開だけに影響します。<code class="code">tar</code>は、<code class="code">name</code>に一致するファイルを見つけるまで、アーカイブ内のファイルの展開を飛ばします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Scarce">Coping with Scarce Resources</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dstrip_002dcomponents"></a></dd>
<dt><a id="index-strip_002dcomponents_002c-summary"></a><span><samp class="option">--strip-components=<var class="var">number</var></samp></span></dt>
<dd><p>展開前に、ファイル名の先頭から<code class="code">number</code>個の構成要素を取り除きます。たとえば、アーカイブ<code class="code">archive.tar</code>に<code class="code">/some/file/name</code>が格納されている場合、次のコマンドを実行すると、</p>
<div class="example smallexample">
<pre class="example-preformatted">tar --extract --file archive.tar --strip-components=2
</pre></div>
<p>このファイルを<code class="code">name</code>というファイルに展開します。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dsuffix"></a></dd>
<dt><a id="index-suffix_002c-summary"></a><span><samp class="option">--suffix=<var class="var">suffix</var></samp></span></dt>
<dd>
<p>ファイルのバックアップに<code class="code">tar</code>が使う接尾辞を、既定の<code class="code">~</code>から変更します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#backup">Backup options</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dtape_002dlength"></a></dd>
<dt><a id="index-tape_002dlength_002c-summary"></a><span><samp class="option">--tape-length=<var class="var">num</var>[<var class="var">suf</var>]</samp></span></dt>
<dt><samp class="option">-L <var class="var">num</var>[<var class="var">suf</var>]</samp></dt>
<dd>
<p><code class="code">tar</code>が書き込むテープの長さを、<code class="code">num</code>×1024バイトと指定します。任意の引数<code class="code">suf</code>を付けた場合は、1024の代わりに使う乗数を指定します。たとえば、<code class="code">-L2M</code>は2メガバイトを意味します。使える接尾辞の一覧は<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#size_002dsuffixes">Table 9.1</a>を、このオプションの詳しい説明は<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dtest_002dlabel"></a></dd>
<dt><a id="index-test_002dlabel_002c-summary"></a><span><samp class="option">--test-label</samp></span></dt>
<dd>
<p>ボリュームラベルを読み取ります。引数を指定した場合は、ボリュームラベルに一致するかを調べます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#g_t_002d_002dtest_002dlabel-option">--test-label option</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dto_002dcommand"></a></dd>
<dt><a id="index-to_002dcommand_002c-summary"></a><span><samp class="option">--to-command=<var class="var">command</var></samp></span></dt>
<dd>
<p>展開時に、<code class="code">tar</code>は、展開したファイルを<code class="code">command</code>の標準入力へパイプで渡します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dto_002dstdout"></a></dd>
<dt><a id="index-to_002dstdout_002c-summary"></a><span><samp class="option">--to-stdout</samp></span></dt>
<dt><samp class="option">-O</samp></dt>
<dd>
<p>展開時に、<code class="code">tar</code>は、ファイルシステムではなく標準出力へファイルを展開します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-Standard-Output">Writing to Standard Output</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dtotals"></a></dd>
<dt><a id="index-totals_002c-summary"></a><span><samp class="option">--totals[=<var class="var">signo</var>]</samp></span></dt>
<dd>
<p>アーカイブの処理で転送したバイトの総数を表示します。引数を指定した場合は、シグナル<code class="code">signo</code>が<code class="code">tar</code>へ送られたときに、要求に応じてこの情報を表示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#totals">totals</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dtouch"></a></dd>
<dt><a id="index-touch_002c-summary"></a><span><samp class="option">--touch</samp></span></dt>
<dt><samp class="option">-m</samp></dt>
<dd>
<p>展開したファイルのデータ更新時刻を、アーカイブ内に格納されている時刻ではなく、展開した時刻に設定します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Data-Modification-Times">Setting Data Modification Times</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dtransform"></a><a class="index-entry-id" id="index-transform_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dxform"></a></dd>
<dt><a id="index-xform_002c-summary"></a><span><samp class="option">--transform=<var class="var">sed-expr</var></samp></span></dt>
<dt><samp class="option">--xform=<var class="var">sed-expr</var></samp></dt>
<dd><p><code class="code">sed</code>の置換式<code class="code">sed-expr</code>を使い、ファイル名またはメンバー名を変換します。たとえば、次のコマンドは、</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar cf archive.tar --transform 's,^\./,usr/,' .</kbd>
</pre></div>
<p>現在の作業ディレクトリ内のファイルを<code class="code">archive</code>へ追加し、先頭の<code class="code">./</code>を<code class="code">usr/</code>に置き換えます。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>を参照してください。</p>
<p>詳細な一覧出力で変換後のメンバー名を表示するには、<code class="code">--show-transformed-names</code>を使います（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#show_002dtransformed_002dnames">show-transformed-names</a>を参照）。</p>
</dd>
<dt><a id="index-uncompress_002c-summary-1"></a><span><samp class="option">--uncompress</samp></span></dt>
<dd>
<p><code class="code">--compress</code>を参照してください（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照）。</p>
</dd>
<dt><a id="index-ungzip_002c-summary-1"></a><span><samp class="option">--ungzip</samp></span></dt>
<dd>
<p><code class="code">--gzip</code>を参照してください（<a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照）。</p>
<a class="anchor" id="g_t_002d_002dunlink_002dfirst"></a></dd>
<dt><a id="index-unlink_002dfirst_002c-summary"></a><span><samp class="option">--unlink-first</samp></span></dt>
<dt><samp class="option">-U</samp></dt>
<dd>
<p>アーカイブから展開する前に、対応するファイルをファイルシステムから削除するよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Unlink-First">Unlink First</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dunquote"></a></dd>
<dt><a id="index-unquote_002c-summary"></a><span><samp class="option">--unquote</samp></span></dt>
<dd><p>入力ファイル名やメンバー名の引用解除を有効にします。これが既定の動作です。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#input-name-quoting">入力ファイル名の引用</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002duse_002dcompress_002dprogram"></a></dd>
<dt><a id="index-use_002dcompress_002dprogram_002c-summary"></a><span><samp class="option">--use-compress-program=<var class="var">prog</var></samp></span></dt>
<dt><samp class="option">-I=<var class="var">prog</var></samp></dt>
<dd>
<p>何らかの圧縮プログラムと想定する<code class="code">prog</code>を通じてアーカイブにアクセスするよう<code class="code">tar</code>に指示します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dutc"></a></dd>
<dt><a id="index-utc_002c-summary"></a><span><samp class="option">--utc</samp></span></dt>
<dd>
<p>ファイルの更新日時をUTCで表示します。このオプションは<code class="code">--verbose</code>の指定を含みます。</p>
<a class="anchor" id="g_t_002d_002dverbatim_002dfiles_002dfrom"></a></dd>
<dt><a id="index-verbatim_002dfiles_002dfrom_002c-summary"></a><span><samp class="option">--verbatim-files-from</samp></span></dt>
<dd>
<p>ファイル一覧から読み込んだ各行を、ハイフンで始まる場合でもファイル名として扱うよう、GNU <code class="code">tar</code>に指示します。</p>
<p>ファイル一覧は、<code class="code">--files-from</code>（<code class="code">-T</code>）で指定します。既定では、読み込んだ各行の先頭と末尾から空白文字を取り除き、結果がハイフンで始まる場合は、GNU <code class="code">tar</code>のコマンドラインオプションとして扱います。</p>
<p>この特別な扱いを無効にするには、<code class="code">--verbatim-files-from</code>を使います。これにより、<code class="code">file</code>コマンドが作成したファイル一覧を<code class="code">tar</code>で使いやすくなります。</p>
<p>このオプションは、コマンドラインで後に現れるすべての<code class="code">--files-from</code>に影響します。その効果は、<code class="code">--no-verbatim-files-from</code>で取り消せます。</p>
<p><code class="code">--null</code>は、このオプションの指定を含みます。</p>
<p><a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verbatim_002dfiles_002dfrom">verbatim-files-from</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dverbose"></a></dd>
<dt><a id="index-verbose_002c-summary"></a><span><samp class="option">--verbose</samp></span></dt>
<dt><samp class="option">-v</samp></dt>
<dd>
<p>実行中の操作をより詳しく説明するよう<code class="code">tar</code>に指定します。一部の操作では、このオプションを複数回指定することで、表示する情報量を増やせます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verbose">Checking <code class="command">tar</code> progress</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dverify"></a></dd>
<dt><a id="index-verify_002c-summary"></a><span><samp class="option">--verify</samp></span></dt>
<dt><samp class="option">-W</samp></dt>
<dd>
<p>アーカイブの作成時に、正しく書き込まれたことを検証します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verify">Verifying Data as It is Stored</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dversion"></a></dd>
<dt><a id="index-version_002c-summary"></a><span><samp class="option">--version</samp></span></dt>
<dd>
<p>プログラムの名前、バージョン、出自、法的な状態に関する情報をすべて標準出力へ表示し、正常終了します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#help"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> documentation</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dvolno_002dfile"></a></dd>
<dt><a id="index-volno_002dfile_002c-summary"></a><span><samp class="option">--volno-file=<var class="var">file</var></samp></span></dt>
<dd>
<p><code class="code">--multi-volume</code>と併用します。<code class="code">tar</code>は、複数巻アーカイブのどの巻を扱っているかを、<code class="code">file</code>に記録します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#volno_002dfile">volno-file</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dwarning"></a></dd>
<dt><a id="index-warning_002c-summary"></a><span><samp class="option">--warning=<var class="var">keyword</var></samp></span></dt>
<dd>
<p><code class="code">keyword</code>で指定する警告メッセージを有効または無効にします。<code class="code">keyword</code>の先頭に<code class="code">no-</code>を付けると、そのメッセージは抑止されます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#warnings">Controlling Warning Messages</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dwildcards"></a></dd>
<dt><a id="index-wildcards_002c-summary"></a><span><samp class="option">--wildcards</samp></span></dt>
<dd><p>メンバー名をパターンと照合する際、ワイルドカードを使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dwildcards_002dmatch_002dslash"></a></dd>
<dt><a id="index-wildcards_002dmatch_002dslash_002c-summary"></a><span><samp class="option">--wildcards-match-slash</samp></span></dt>
<dd><p>ワイルドカードは<code class="code">/</code>に一致します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dxattrs"></a></dd>
<dt><a id="index-xattrs_002c-summary"></a><span><samp class="option">--xattrs</samp></span></dt>
<dd><p>拡張属性のサポートを有効にします。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dxattrs_002dexclude"></a></dd>
<dt><a id="index-xattrs_002dexclude_002c-summary"></a><span><samp class="option">--xattrs-exclude=<var class="var">pattern</var></samp></span></dt>
<dd><p>xattrキーの除外パターンを指定します。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs-exclude</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dxattrs_002dinclude"></a></dd>
<dt><a id="index-xattrs_002dinclude_002c-summary"></a><span><samp class="option">--xattrs-include=<var class="var">pattern</var>.</samp></span></dt>
<dd><p>xattrキーの包含パターンを指定します。<code class="code">pattern</code>はグロブパターンです。たとえば、<code class="code">--xattrs-include='user.*'</code>は、user名前空間の属性だけを含めます。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs-include</a>を参照してください。</p>
<a class="anchor" id="g_t_002d_002dxz"></a></dd>
<dt><a id="index-xz_002c-summary"></a><span><samp class="option">--xz</samp></span></dt>
<dt><samp class="option">-J</samp></dt>
<dd><p>アーカイブの圧縮または圧縮解除に<code class="code">xz</code>を使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
</dd>
<dt><samp class="option">--zstd</samp></dt>
<dd><p>アーカイブの圧縮または圧縮解除に<code class="code">zstd</code>を使います。<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>を参照してください。</p>
</dd>
</dl>
<hr/>
<h5 class="footnote-body-heading"><a href="/docs/gnu-tar/v1-35/ja/01-guide/42-option-summary/#DOCF5" id="FOOT5">(5)</a></h5><p>GNU <code class="code">tar</code>の以前のバージョンでは、<code class="code">-l</code>は<code class="code">--one-file-system</code>の別名でした。UNIX98に準拠する現在の意味は、バージョン1.15.91で導入されました。詳しくは<a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Changes">Changes</a>を参照してください。</p></div></div>

