---
title: "3.4.2 tar Options"
licenseSource: gnu-tar-manual
documentContext: [{"kind": "source", "html": "<section><h3>Libx GNU tar 1.35 Option Summary / Libx GNU tar 1.35 オプション一覧</h3><p>Original authors: John Gilmore, Jay Fenlason, Joy Kendall, Thomas Bushnell n/BSG, François Pinard, Paul Eggert, Sergey Poznyakoff, Amy Gorin, Melissa Weisshaus, Daniel Hagerty, Jeff Bailey. Original publisher: Free Software Foundation. Modification author and publisher: Libx.</p><p>This manual is for <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> (version\n1.35, 10 July 2023), which creates and extracts files\nfrom archives.\n</p><p>Copyright © 1992, 1994–1997, 1999–2001, 2003–2017,\n2021–2023 Free Software Foundation, Inc.\n</p><blockquote class=\"quotation\">\n<p>Permission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with the\nInvariant Sections being “GNU General Public License”, with the\nFront-Cover Texts being “A GNU Manual”, and with the Back-Cover Texts\nas in (a) below.  A copy of the license is included in the section\nentitled “GNU Free Documentation License”.\n</p>\n<p>(a) The FSF’s Back-Cover Text is: “You have the freedom to\ncopy and modify this GNU manual.”\n</p></blockquote><p>Copyright © 2026 Libx, for static editing and independent Japanese translation. This modified version is available under GNU Free Documentation License1.3 or later; invariant section GNU General Public License; Front-Cover Text A GNU Manual; Back-Cover Text You have the freedom to copy and modify this GNU manual. No new invariant sections or cover texts have been added.</p><h3>History / 履歴</h3><p>Original: GNU tar: an archiver tool; version1.35,10July2023; John Gilmore, Jay Fenlason et al.; publisher Free Software Foundation. Fixed archive SHA25614d55e32063ea9526e057fbf35fcabd53378e769787eff7919c3755b02d2b57e; https://ftp.gnu.org/gnu/tar/tar-1.35.tar.gz.</p><p>12October2026: Libx GNU tar 1.35 Option Summary / Libx GNU tar 1.35 オプション一覧; modification author and publisher Libx. Sections3.4–3.4.4 represented as static editable HTML in Markdown, with independent Japanese translation. Remaining chapters, appendices and indexes are available in the fixed complete original. Original examples remain literal text and are not executed.</p><div class=\"section-level-extent\" id=\"tar-context-Authors\">\n<h3 class=\"section\" id=\"tar-context-GNU-tar-Authors\"><span>1.5 <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> Authors</span></h3>\n<p><abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> was originally written by John Gilmore,\nand modified by many people.  The <abbr class=\"acronym\">GNU</abbr> enhancements were\nwritten by Jay Fenlason, then Joy Kendall, and the whole package has\nbeen further maintained by Thomas Bushnell, n/BSG, François\nPinard, Paul Eggert, and finally Sergey Poznyakoff with the help of\nnumerous and kind users.\n</p>\n<p>We wish to stress that <code class=\"command\">tar</code> is a collective work, and owes much to\nall those people who reported problems, offered solutions and other\ninsights, or shared their thoughts and suggestions.  An impressive, yet\npartial list of those contributors can be found in the <samp class=\"file\">THANKS</samp>\nfile from the <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> distribution.\n</p>\n<p>Jay Fenlason put together a draft of a <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code>\nmanual, borrowing notes from the original man page from John Gilmore.\nThis was withdrawn in version 1.11.  Thomas Bushnell, n/BSG and Amy\nGorin worked on a tutorial and manual for <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code>.\nFrançois Pinard put version 1.11.8 of the manual together by\ntaking information from all these sources and merging them.  Melissa\nWeisshaus finally edited and redesigned the book to create version\n1.12.  The book for versions from 1.14 up to 1.35 were edited\nby the current maintainer, Sergey Poznyakoff.\n</p>\n<p>For version 1.12, Daniel Hagerty contributed a great deal of technical\nconsulting.  In particular, he is the primary author of <a class=\"ref\" href=\"/docs/gnu-tar/source/v1-35/manual.html#Backups\">Performing Backups and Restoring Files</a>.\n</p>\n<p>In July, 2003 <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> was put on CVS at savannah.gnu.org\n(see <a class=\"url\" href=\"https://savannah.gnu.org/projects/tar\">https://savannah.gnu.org/projects/tar</a>), and\nactive development and maintenance work has started\nagain.  Currently <abbr class=\"acronym\">GNU</abbr> <code class=\"command\">tar</code> is being maintained by Paul Eggert, Sergey\nPoznyakoff and Jeff Bailey.\n</p>\n<p>Support for <abbr class=\"acronym\">POSIX</abbr> archives was added by Sergey Poznyakoff.\n</p>\n<hr/>\n</div><h3>GNU General Public License</h3><p>Unchanged COPYING from the same fixed archive is provided as an explicit supplement. The generated original manual has no GPL appendix despite the invariant-section declaration; this supplement is not presented as an appendix found in the original.</p><pre>                    GNU GENERAL PUBLIC LICENSE\n                       Version 3, 29 June 2007\n\n Copyright (C) 2007 Free Software Foundation, Inc. &lt;https://fsf.org/&gt;\n Everyone is permitted to copy and distribute verbatim copies\n of this license document, but changing it is not allowed.\n\n                            Preamble\n\n  The GNU General Public License is a free, copyleft license for\nsoftware and other kinds of works.\n\n  The licenses for most software and other practical works are designed\nto take away your freedom to share and change the works.  By contrast,\nthe GNU General Public License is intended to guarantee your freedom to\nshare and change all versions of a program--to make sure it remains free\nsoftware for all its users.  We, the Free Software Foundation, use the\nGNU General Public License for most of our software; it applies also to\nany other work released this way by its authors.  You can apply it to\nyour programs, too.\n\n  When we speak of free software, we are referring to freedom, not\nprice.  Our General Public Licenses are designed to make sure that you\nhave the freedom to distribute copies of free software (and charge for\nthem if you wish), that you receive source code or can get it if you\nwant it, that you can change the software or use pieces of it in new\nfree programs, and that you know you can do these things.\n\n  To protect your rights, we need to prevent others from denying you\nthese rights or asking you to surrender the rights.  Therefore, you have\ncertain responsibilities if you distribute copies of the software, or if\nyou modify it: responsibilities to respect the freedom of others.\n\n  For example, if you distribute copies of such a program, whether\ngratis or for a fee, you must pass on to the recipients the same\nfreedoms that you received.  You must make sure that they, too, receive\nor can get the source code.  And you must show them these terms so they\nknow their rights.\n\n  Developers that use the GNU GPL protect your rights with two steps:\n(1) assert copyright on the software, and (2) offer you this License\ngiving you legal permission to copy, distribute and/or modify it.\n\n  For the developers' and authors' protection, the GPL clearly explains\nthat there is no warranty for this free software.  For both users' and\nauthors' sake, the GPL requires that modified versions be marked as\nchanged, so that their problems will not be attributed erroneously to\nauthors of previous versions.\n\n  Some devices are designed to deny users access to install or run\nmodified versions of the software inside them, although the manufacturer\ncan do so.  This is fundamentally incompatible with the aim of\nprotecting users' freedom to change the software.  The systematic\npattern of such abuse occurs in the area of products for individuals to\nuse, which is precisely where it is most unacceptable.  Therefore, we\nhave designed this version of the GPL to prohibit the practice for those\nproducts.  If such problems arise substantially in other domains, we\nstand ready to extend this provision to those domains in future versions\nof the GPL, as needed to protect the freedom of users.\n\n  Finally, every program is threatened constantly by software patents.\nStates should not allow patents to restrict development and use of\nsoftware on general-purpose computers, but in those that do, we wish to\navoid the special danger that patents applied to a free program could\nmake it effectively proprietary.  To prevent this, the GPL assures that\npatents cannot be used to render the program non-free.\n\n  The precise terms and conditions for copying, distribution and\nmodification follow.\n\n                       TERMS AND CONDITIONS\n\n  0. Definitions.\n\n  \"This License\" refers to version 3 of the GNU General Public License.\n\n  \"Copyright\" also means copyright-like laws that apply to other kinds of\nworks, such as semiconductor masks.\n\n  \"The Program\" refers to any copyrightable work licensed under this\nLicense.  Each licensee is addressed as \"you\".  \"Licensees\" and\n\"recipients\" may be individuals or organizations.\n\n  To \"modify\" a work means to copy from or adapt all or part of the work\nin a fashion requiring copyright permission, other than the making of an\nexact copy.  The resulting work is called a \"modified version\" of the\nearlier work or a work \"based on\" the earlier work.\n\n  A \"covered work\" means either the unmodified Program or a work based\non the Program.\n\n  To \"propagate\" a work means to do anything with it that, without\npermission, would make you directly or secondarily liable for\ninfringement under applicable copyright law, except executing it on a\ncomputer or modifying a private copy.  Propagation includes copying,\ndistribution (with or without modification), making available to the\npublic, and in some countries other activities as well.\n\n  To \"convey\" a work means any kind of propagation that enables other\nparties to make or receive copies.  Mere interaction with a user through\na computer network, with no transfer of a copy, is not conveying.\n\n  An interactive user interface displays \"Appropriate Legal Notices\"\nto the extent that it includes a convenient and prominently visible\nfeature that (1) displays an appropriate copyright notice, and (2)\ntells the user that there is no warranty for the work (except to the\nextent that warranties are provided), that licensees may convey the\nwork under this License, and how to view a copy of this License.  If\nthe interface presents a list of user commands or options, such as a\nmenu, a prominent item in the list meets this criterion.\n\n  1. Source Code.\n\n  The \"source code\" for a work means the preferred form of the work\nfor making modifications to it.  \"Object code\" means any non-source\nform of a work.\n\n  A \"Standard Interface\" means an interface that either is an official\nstandard defined by a recognized standards body, or, in the case of\ninterfaces specified for a particular programming language, one that\nis widely used among developers working in that language.\n\n  The \"System Libraries\" of an executable work include anything, other\nthan the work as a whole, that (a) is included in the normal form of\npackaging a Major Component, but which is not part of that Major\nComponent, and (b) serves only to enable use of the work with that\nMajor Component, or to implement a Standard Interface for which an\nimplementation is available to the public in source code form.  A\n\"Major Component\", in this context, means a major essential component\n(kernel, window system, and so on) of the specific operating system\n(if any) on which the executable work runs, or a compiler used to\nproduce the work, or an object code interpreter used to run it.\n\n  The \"Corresponding Source\" for a work in object code form means all\nthe source code needed to generate, install, and (for an executable\nwork) run the object code and to modify the work, including scripts to\ncontrol those activities.  However, it does not include the work's\nSystem Libraries, or general-purpose tools or generally available free\nprograms which are used unmodified in performing those activities but\nwhich are not part of the work.  For example, Corresponding Source\nincludes interface definition files associated with source files for\nthe work, and the source code for shared libraries and dynamically\nlinked subprograms that the work is specifically designed to require,\nsuch as by intimate data communication or control flow between those\nsubprograms and other parts of the work.\n\n  The Corresponding Source need not include anything that users\ncan regenerate automatically from other parts of the Corresponding\nSource.\n\n  The Corresponding Source for a work in source code form is that\nsame work.\n\n  2. Basic Permissions.\n\n  All rights granted under this License are granted for the term of\ncopyright on the Program, and are irrevocable provided the stated\nconditions are met.  This License explicitly affirms your unlimited\npermission to run the unmodified Program.  The output from running a\ncovered work is covered by this License only if the output, given its\ncontent, constitutes a covered work.  This License acknowledges your\nrights of fair use or other equivalent, as provided by copyright law.\n\n  You may make, run and propagate covered works that you do not\nconvey, without conditions so long as your license otherwise remains\nin force.  You may convey covered works to others for the sole purpose\nof having them make modifications exclusively for you, or provide you\nwith facilities for running those works, provided that you comply with\nthe terms of this License in conveying all material for which you do\nnot control copyright.  Those thus making or running the covered works\nfor you must do so exclusively on your behalf, under your direction\nand control, on terms that prohibit them from making any copies of\nyour copyrighted material outside their relationship with you.\n\n  Conveying under any other circumstances is permitted solely under\nthe conditions stated below.  Sublicensing is not allowed; section 10\nmakes it unnecessary.\n\n  3. Protecting Users' Legal Rights From Anti-Circumvention Law.\n\n  No covered work shall be deemed part of an effective technological\nmeasure under any applicable law fulfilling obligations under article\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\nsimilar laws prohibiting or restricting circumvention of such\nmeasures.\n\n  When you convey a covered work, you waive any legal power to forbid\ncircumvention of technological measures to the extent such circumvention\nis effected by exercising rights under this License with respect to\nthe covered work, and you disclaim any intention to limit operation or\nmodification of the work as a means of enforcing, against the work's\nusers, your or third parties' legal rights to forbid circumvention of\ntechnological measures.\n\n  4. Conveying Verbatim Copies.\n\n  You may convey verbatim copies of the Program's source code as you\nreceive it, in any medium, provided that you conspicuously and\nappropriately publish on each copy an appropriate copyright notice;\nkeep intact all notices stating that this License and any\nnon-permissive terms added in accord with section 7 apply to the code;\nkeep intact all notices of the absence of any warranty; and give all\nrecipients a copy of this License along with the Program.\n\n  You may charge any price or no price for each copy that you convey,\nand you may offer support or warranty protection for a fee.\n\n  5. Conveying Modified Source Versions.\n\n  You may convey a work based on the Program, or the modifications to\nproduce it from the Program, in the form of source code under the\nterms of section 4, provided that you also meet all of these conditions:\n\n    a) The work must carry prominent notices stating that you modified\n    it, and giving a relevant date.\n\n    b) The work must carry prominent notices stating that it is\n    released under this License and any conditions added under section\n    7.  This requirement modifies the requirement in section 4 to\n    \"keep intact all notices\".\n\n    c) You must license the entire work, as a whole, under this\n    License to anyone who comes into possession of a copy.  This\n    License will therefore apply, along with any applicable section 7\n    additional terms, to the whole of the work, and all its parts,\n    regardless of how they are packaged.  This License gives no\n    permission to license the work in any other way, but it does not\n    invalidate such permission if you have separately received it.\n\n    d) If the work has interactive user interfaces, each must display\n    Appropriate Legal Notices; however, if the Program has interactive\n    interfaces that do not display Appropriate Legal Notices, your\n    work need not make them do so.\n\n  A compilation of a covered work with other separate and independent\nworks, which are not by their nature extensions of the covered work,\nand which are not combined with it such as to form a larger program,\nin or on a volume of a storage or distribution medium, is called an\n\"aggregate\" if the compilation and its resulting copyright are not\nused to limit the access or legal rights of the compilation's users\nbeyond what the individual works permit.  Inclusion of a covered work\nin an aggregate does not cause this License to apply to the other\nparts of the aggregate.\n\n  6. Conveying Non-Source Forms.\n\n  You may convey a covered work in object code form under the terms\nof sections 4 and 5, provided that you also convey the\nmachine-readable Corresponding Source under the terms of this License,\nin one of these ways:\n\n    a) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by the\n    Corresponding Source fixed on a durable physical medium\n    customarily used for software interchange.\n\n    b) Convey the object code in, or embodied in, a physical product\n    (including a physical distribution medium), accompanied by a\n    written offer, valid for at least three years and valid for as\n    long as you offer spare parts or customer support for that product\n    model, to give anyone who possesses the object code either (1) a\n    copy of the Corresponding Source for all the software in the\n    product that is covered by this License, on a durable physical\n    medium customarily used for software interchange, for a price no\n    more than your reasonable cost of physically performing this\n    conveying of source, or (2) access to copy the\n    Corresponding Source from a network server at no charge.\n\n    c) Convey individual copies of the object code with a copy of the\n    written offer to provide the Corresponding Source.  This\n    alternative is allowed only occasionally and noncommercially, and\n    only if you received the object code with such an offer, in accord\n    with subsection 6b.\n\n    d) Convey the object code by offering access from a designated\n    place (gratis or for a charge), and offer equivalent access to the\n    Corresponding Source in the same way through the same place at no\n    further charge.  You need not require recipients to copy the\n    Corresponding Source along with the object code.  If the place to\n    copy the object code is a network server, the Corresponding Source\n    may be on a different server (operated by you or a third party)\n    that supports equivalent copying facilities, provided you maintain\n    clear directions next to the object code saying where to find the\n    Corresponding Source.  Regardless of what server hosts the\n    Corresponding Source, you remain obligated to ensure that it is\n    available for as long as needed to satisfy these requirements.\n\n    e) Convey the object code using peer-to-peer transmission, provided\n    you inform other peers where the object code and Corresponding\n    Source of the work are being offered to the general public at no\n    charge under subsection 6d.\n\n  A separable portion of the object code, whose source code is excluded\nfrom the Corresponding Source as a System Library, need not be\nincluded in conveying the object code work.\n\n  A \"User Product\" is either (1) a \"consumer product\", which means any\ntangible personal property which is normally used for personal, family,\nor household purposes, or (2) anything designed or sold for incorporation\ninto a dwelling.  In determining whether a product is a consumer product,\ndoubtful cases shall be resolved in favor of coverage.  For a particular\nproduct received by a particular user, \"normally used\" refers to a\ntypical or common use of that class of product, regardless of the status\nof the particular user or of the way in which the particular user\nactually uses, or expects or is expected to use, the product.  A product\nis a consumer product regardless of whether the product has substantial\ncommercial, industrial or non-consumer uses, unless such uses represent\nthe only significant mode of use of the product.\n\n  \"Installation Information\" for a User Product means any methods,\nprocedures, authorization keys, or other information required to install\nand execute modified versions of a covered work in that User Product from\na modified version of its Corresponding Source.  The information must\nsuffice to ensure that the continued functioning of the modified object\ncode is in no case prevented or interfered with solely because\nmodification has been made.\n\n  If you convey an object code work under this section in, or with, or\nspecifically for use in, a User Product, and the conveying occurs as\npart of a transaction in which the right of possession and use of the\nUser Product is transferred to the recipient in perpetuity or for a\nfixed term (regardless of how the transaction is characterized), the\nCorresponding Source conveyed under this section must be accompanied\nby the Installation Information.  But this requirement does not apply\nif neither you nor any third party retains the ability to install\nmodified object code on the User Product (for example, the work has\nbeen installed in ROM).\n\n  The requirement to provide Installation Information does not include a\nrequirement to continue to provide support service, warranty, or updates\nfor a work that has been modified or installed by the recipient, or for\nthe User Product in which it has been modified or installed.  Access to a\nnetwork may be denied when the modification itself materially and\nadversely affects the operation of the network or violates the rules and\nprotocols for communication across the network.\n\n  Corresponding Source conveyed, and Installation Information provided,\nin accord with this section must be in a format that is publicly\ndocumented (and with an implementation available to the public in\nsource code form), and must require no special password or key for\nunpacking, reading or copying.\n\n  7. Additional Terms.\n\n  \"Additional permissions\" are terms that supplement the terms of this\nLicense by making exceptions from one or more of its conditions.\nAdditional permissions that are applicable to the entire Program shall\nbe treated as though they were included in this License, to the extent\nthat they are valid under applicable law.  If additional permissions\napply only to part of the Program, that part may be used separately\nunder those permissions, but the entire Program remains governed by\nthis License without regard to the additional permissions.\n\n  When you convey a copy of a covered work, you may at your option\nremove any additional permissions from that copy, or from any part of\nit.  (Additional permissions may be written to require their own\nremoval in certain cases when you modify the work.)  You may place\nadditional permissions on material, added by you to a covered work,\nfor which you have or can give appropriate copyright permission.\n\n  Notwithstanding any other provision of this License, for material you\nadd to a covered work, you may (if authorized by the copyright holders of\nthat material) supplement the terms of this License with terms:\n\n    a) Disclaiming warranty or limiting liability differently from the\n    terms of sections 15 and 16 of this License; or\n\n    b) Requiring preservation of specified reasonable legal notices or\n    author attributions in that material or in the Appropriate Legal\n    Notices displayed by works containing it; or\n\n    c) Prohibiting misrepresentation of the origin of that material, or\n    requiring that modified versions of such material be marked in\n    reasonable ways as different from the original version; or\n\n    d) Limiting the use for publicity purposes of names of licensors or\n    authors of the material; or\n\n    e) Declining to grant rights under trademark law for use of some\n    trade names, trademarks, or service marks; or\n\n    f) Requiring indemnification of licensors and authors of that\n    material by anyone who conveys the material (or modified versions of\n    it) with contractual assumptions of liability to the recipient, for\n    any liability that these contractual assumptions directly impose on\n    those licensors and authors.\n\n  All other non-permissive additional terms are considered \"further\nrestrictions\" within the meaning of section 10.  If the Program as you\nreceived it, or any part of it, contains a notice stating that it is\ngoverned by this License along with a term that is a further\nrestriction, you may remove that term.  If a license document contains\na further restriction but permits relicensing or conveying under this\nLicense, you may add to a covered work material governed by the terms\nof that license document, provided that the further restriction does\nnot survive such relicensing or conveying.\n\n  If you add terms to a covered work in accord with this section, you\nmust place, in the relevant source files, a statement of the\nadditional terms that apply to those files, or a notice indicating\nwhere to find the applicable terms.\n\n  Additional terms, permissive or non-permissive, may be stated in the\nform of a separately written license, or stated as exceptions;\nthe above requirements apply either way.\n\n  8. Termination.\n\n  You may not propagate or modify a covered work except as expressly\nprovided under this License.  Any attempt otherwise to propagate or\nmodify it is void, and will automatically terminate your rights under\nthis License (including any patent licenses granted under the third\nparagraph of section 11).\n\n  However, if you cease all violation of this License, then your\nlicense from a particular copyright holder is reinstated (a)\nprovisionally, unless and until the copyright holder explicitly and\nfinally terminates your license, and (b) permanently, if the copyright\nholder fails to notify you of the violation by some reasonable means\nprior to 60 days after the cessation.\n\n  Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n\n  Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, you do not qualify to receive new licenses for the same\nmaterial under section 10.\n\n  9. Acceptance Not Required for Having Copies.\n\n  You are not required to accept this License in order to receive or\nrun a copy of the Program.  Ancillary propagation of a covered work\noccurring solely as a consequence of using peer-to-peer transmission\nto receive a copy likewise does not require acceptance.  However,\nnothing other than this License grants you permission to propagate or\nmodify any covered work.  These actions infringe copyright if you do\nnot accept this License.  Therefore, by modifying or propagating a\ncovered work, you indicate your acceptance of this License to do so.\n\n  10. Automatic Licensing of Downstream Recipients.\n\n  Each time you convey a covered work, the recipient automatically\nreceives a license from the original licensors, to run, modify and\npropagate that work, subject to this License.  You are not responsible\nfor enforcing compliance by third parties with this License.\n\n  An \"entity transaction\" is a transaction transferring control of an\norganization, or substantially all assets of one, or subdividing an\norganization, or merging organizations.  If propagation of a covered\nwork results from an entity transaction, each party to that\ntransaction who receives a copy of the work also receives whatever\nlicenses to the work the party's predecessor in interest had or could\ngive under the previous paragraph, plus a right to possession of the\nCorresponding Source of the work from the predecessor in interest, if\nthe predecessor has it or can get it with reasonable efforts.\n\n  You may not impose any further restrictions on the exercise of the\nrights granted or affirmed under this License.  For example, you may\nnot impose a license fee, royalty, or other charge for exercise of\nrights granted under this License, and you may not initiate litigation\n(including a cross-claim or counterclaim in a lawsuit) alleging that\nany patent claim is infringed by making, using, selling, offering for\nsale, or importing the Program or any portion of it.\n\n  11. Patents.\n\n  A \"contributor\" is a copyright holder who authorizes use under this\nLicense of the Program or a work on which the Program is based.  The\nwork thus licensed is called the contributor's \"contributor version\".\n\n  A contributor's \"essential patent claims\" are all patent claims\nowned or controlled by the contributor, whether already acquired or\nhereafter acquired, that would be infringed by some manner, permitted\nby this License, of making, using, or selling its contributor version,\nbut do not include claims that would be infringed only as a\nconsequence of further modification of the contributor version.  For\npurposes of this definition, \"control\" includes the right to grant\npatent sublicenses in a manner consistent with the requirements of\nthis License.\n\n  Each contributor grants you a non-exclusive, worldwide, royalty-free\npatent license under the contributor's essential patent claims, to\nmake, use, sell, offer for sale, import and otherwise run, modify and\npropagate the contents of its contributor version.\n\n  In the following three paragraphs, a \"patent license\" is any express\nagreement or commitment, however denominated, not to enforce a patent\n(such as an express permission to practice a patent or covenant not to\nsue for patent infringement).  To \"grant\" such a patent license to a\nparty means to make such an agreement or commitment not to enforce a\npatent against the party.\n\n  If you convey a covered work, knowingly relying on a patent license,\nand the Corresponding Source of the work is not available for anyone\nto copy, free of charge and under the terms of this License, through a\npublicly available network server or other readily accessible means,\nthen you must either (1) cause the Corresponding Source to be so\navailable, or (2) arrange to deprive yourself of the benefit of the\npatent license for this particular work, or (3) arrange, in a manner\nconsistent with the requirements of this License, to extend the patent\nlicense to downstream recipients.  \"Knowingly relying\" means you have\nactual knowledge that, but for the patent license, your conveying the\ncovered work in a country, or your recipient's use of the covered work\nin a country, would infringe one or more identifiable patents in that\ncountry that you have reason to believe are valid.\n\n  If, pursuant to or in connection with a single transaction or\narrangement, you convey, or propagate by procuring conveyance of, a\ncovered work, and grant a patent license to some of the parties\nreceiving the covered work authorizing them to use, propagate, modify\nor convey a specific copy of the covered work, then the patent license\nyou grant is automatically extended to all recipients of the covered\nwork and works based on it.\n\n  A patent license is \"discriminatory\" if it does not include within\nthe scope of its coverage, prohibits the exercise of, or is\nconditioned on the non-exercise of one or more of the rights that are\nspecifically granted under this License.  You may not convey a covered\nwork if you are a party to an arrangement with a third party that is\nin the business of distributing software, under which you make payment\nto the third party based on the extent of your activity of conveying\nthe work, and under which the third party grants, to any of the\nparties who would receive the covered work from you, a discriminatory\npatent license (a) in connection with copies of the covered work\nconveyed by you (or copies made from those copies), or (b) primarily\nfor and in connection with specific products or compilations that\ncontain the covered work, unless you entered into that arrangement,\nor that patent license was granted, prior to 28 March 2007.\n\n  Nothing in this License shall be construed as excluding or limiting\nany implied license or other defenses to infringement that may\notherwise be available to you under applicable patent law.\n\n  12. No Surrender of Others' Freedom.\n\n  If conditions are imposed on you (whether by court order, agreement or\notherwise) that contradict the conditions of this License, they do not\nexcuse you from the conditions of this License.  If you cannot convey a\ncovered work so as to satisfy simultaneously your obligations under this\nLicense and any other pertinent obligations, then as a consequence you may\nnot convey it at all.  For example, if you agree to terms that obligate you\nto collect a royalty for further conveying from those to whom you convey\nthe Program, the only way you could satisfy both those terms and this\nLicense would be to refrain entirely from conveying the Program.\n\n  13. Use with the GNU Affero General Public License.\n\n  Notwithstanding any other provision of this License, you have\npermission to link or combine any covered work with a work licensed\nunder version 3 of the GNU Affero General Public License into a single\ncombined work, and to convey the resulting work.  The terms of this\nLicense will continue to apply to the part which is the covered work,\nbut the special requirements of the GNU Affero General Public License,\nsection 13, concerning interaction through a network will apply to the\ncombination as such.\n\n  14. Revised Versions of this License.\n\n  The Free Software Foundation may publish revised and/or new versions of\nthe GNU General Public License from time to time.  Such new versions will\nbe similar in spirit to the present version, but may differ in detail to\naddress new problems or concerns.\n\n  Each version is given a distinguishing version number.  If the\nProgram specifies that a certain numbered version of the GNU General\nPublic License \"or any later version\" applies to it, you have the\noption of following the terms and conditions either of that numbered\nversion or of any later version published by the Free Software\nFoundation.  If the Program does not specify a version number of the\nGNU General Public License, you may choose any version ever published\nby the Free Software Foundation.\n\n  If the Program specifies that a proxy can decide which future\nversions of the GNU General Public License can be used, that proxy's\npublic statement of acceptance of a version permanently authorizes you\nto choose that version for the Program.\n\n  Later license versions may give you additional or different\npermissions.  However, no additional obligations are imposed on any\nauthor or copyright holder as a result of your choosing to follow a\nlater version.\n\n  15. Disclaimer of Warranty.\n\n  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \"AS IS\" WITHOUT WARRANTY\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\n\n  16. Limitation of Liability.\n\n  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\nSUCH DAMAGES.\n\n  17. Interpretation of Sections 15 and 16.\n\n  If the disclaimer of warranty and limitation of liability provided\nabove cannot be given local legal effect according to their terms,\nreviewing courts shall apply local law that most closely approximates\nan absolute waiver of all civil liability in connection with the\nProgram, unless a warranty or assumption of liability accompanies a\ncopy of the Program in return for a fee.\n\n                     END OF TERMS AND CONDITIONS\n\n            How to Apply These Terms to Your New Programs\n\n  If you develop a new program, and you want it to be of the greatest\npossible use to the public, the best way to achieve this is to make it\nfree software which everyone can redistribute and change under these terms.\n\n  To do so, attach the following notices to the program.  It is safest\nto attach them to the start of each source file to most effectively\nstate the exclusion of warranty; and each file should have at least\nthe \"copyright\" line and a pointer to where the full notice is found.\n\n    &lt;one line to give the program's name and a brief idea of what it does.&gt;\n    Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n\n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this program.  If not, see &lt;https://www.gnu.org/licenses/&gt;.\n\nAlso add information on how to contact you by electronic and paper mail.\n\n  If the program does terminal interaction, make it output a short\nnotice like this when it starts in an interactive mode:\n\n    &lt;program&gt;  Copyright (C) &lt;year&gt;  &lt;name of author&gt;\n    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.\n    This is free software, and you are welcome to redistribute it\n    under certain conditions; type `show c' for details.\n\nThe hypothetical commands `show w' and `show c' should show the appropriate\nparts of the General Public License.  Of course, your program's commands\nmight be different; for a GUI interface, you would use an \"about box\".\n\n  You should also get your employer (if you work as a programmer) or school,\nif any, to sign a \"copyright disclaimer\" for the program, if necessary.\nFor more information on this, and how to apply and follow the GNU GPL, see\n&lt;https://www.gnu.org/licenses/&gt;.\n\n  The GNU General Public License does not permit incorporating your program\ninto proprietary programs.  If your program is a subroutine library, you\nmay consider it more useful to permit linking proprietary applications with\nthe library.  If this is what you want to do, use the GNU Lesser General\nPublic License instead of this License.  But first, please read\n&lt;https://www.gnu.org/licenses/why-not-lgpl.html&gt;.\n</pre><div class=\"appendix-level-extent\" id=\"tar-context-GNU-Free-Documentation-License\">\n<h2 class=\"appendix\" id=\"tar-context-GNU-Free-Documentation-License-1\"><span>Appendix G GNU Free Documentation License</span></h2>\n<div class=\"center\">Version 1.3, 3 November 2008\n</div>\n<div class=\"display\">\n<pre class=\"display-preformatted\">Copyright © 2000–2002, 2007–2008, 2022 Free Software\nFoundation, Inc.\n<a class=\"uref\" href=\"https://fsf.org/\">https://fsf.org/</a>\n\nEveryone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed.\n</pre></div>\n<ol class=\"enumerate\" start=\"0\">\n<li> PREAMBLE\n\n<p>The purpose of this License is to make a manual, textbook, or other\nfunctional and useful document <em class=\"dfn\">free</em> in the sense of freedom: to\nassure everyone the effective freedom to copy and redistribute it,\nwith or without modifying it, either commercially or noncommercially.\nSecondarily, this License preserves for the author and publisher a way\nto get credit for their work, while not being considered responsible\nfor modifications made by others.\n</p>\n<p>This License is a kind of “copyleft”, which means that derivative\nworks of the document must themselves be free in the same sense.  It\ncomplements the GNU General Public License, which is a copyleft\nlicense designed for free software.\n</p>\n<p>We have designed this License in order to use it for manuals for free\nsoftware, because free software needs free documentation: a free\nprogram should come with manuals providing the same freedoms that the\nsoftware does.  But this License is not limited to software manuals;\nit can be used for any textual work, regardless of subject matter or\nwhether it is published as a printed book.  We recommend this License\nprincipally for works whose purpose is instruction or reference.\n</p>\n</li><li> APPLICABILITY AND DEFINITIONS\n\n<p>This License applies to any manual or other work, in any medium, that\ncontains a notice placed by the copyright holder saying it can be\ndistributed under the terms of this License.  Such a notice grants a\nworld-wide, royalty-free license, unlimited in duration, to use that\nwork under the conditions stated herein.  The “Document”, below,\nrefers to any such manual or work.  Any member of the public is a\nlicensee, and is addressed as “you”.  You accept the license if you\ncopy, modify or distribute the work in a way requiring permission\nunder copyright law.\n</p>\n<p>A “Modified Version” of the Document means any work containing the\nDocument or a portion of it, either copied verbatim, or with\nmodifications and/or translated into another language.\n</p>\n<p>A “Secondary Section” is a named appendix or a front-matter section\nof the Document that deals exclusively with the relationship of the\npublishers or authors of the Document to the Document’s overall\nsubject (or to related matters) and contains nothing that could fall\ndirectly within that overall subject.  (Thus, if the Document is in\npart a textbook of mathematics, a Secondary Section may not explain\nany mathematics.)  The relationship could be a matter of historical\nconnection with the subject or with related matters, or of legal,\ncommercial, philosophical, ethical or political position regarding\nthem.\n</p>\n<p>The “Invariant Sections” are certain Secondary Sections whose titles\nare designated, as being those of Invariant Sections, in the notice\nthat says that the Document is released under this License.  If a\nsection does not fit the above definition of Secondary then it is not\nallowed to be designated as Invariant.  The Document may contain zero\nInvariant Sections.  If the Document does not identify any Invariant\nSections then there are none.\n</p>\n<p>The “Cover Texts” are certain short passages of text that are listed,\nas Front-Cover Texts or Back-Cover Texts, in the notice that says that\nthe Document is released under this License.  A Front-Cover Text may\nbe at most 5 words, and a Back-Cover Text may be at most 25 words.\n</p>\n<p>A “Transparent” copy of the Document means a machine-readable copy,\nrepresented in a format whose specification is available to the\ngeneral public, that is suitable for revising the document\nstraightforwardly with generic text editors or (for images composed of\npixels) generic paint programs or (for drawings) some widely available\ndrawing editor, and that is suitable for input to text formatters or\nfor automatic translation to a variety of formats suitable for input\nto text formatters.  A copy made in an otherwise Transparent file\nformat whose markup, or absence of markup, has been arranged to thwart\nor discourage subsequent modification by readers is not Transparent.\nAn image format is not Transparent if used for any substantial amount\nof text.  A copy that is not “Transparent” is called “Opaque”.\n</p>\n<p>Examples of suitable formats for Transparent copies include plain\nASCII without markup, Texinfo input format, LaTeX input\nformat, SGML or XML using a publicly available\nDTD, and standard-conforming simple HTML,\nPostScript or PDF designed for human modification.  Examples\nof transparent image formats include PNG, XCF and\nJPG.  Opaque formats include proprietary formats that can be\nread and edited only by proprietary word processors, SGML or\nXML for which the DTD and/or processing tools are\nnot generally available, and the machine-generated HTML,\nPostScript or PDF produced by some word processors for\noutput purposes only.\n</p>\n<p>The “Title Page” means, for a printed book, the title page itself,\nplus such following pages as are needed to hold, legibly, the material\nthis License requires to appear in the title page.  For works in\nformats which do not have any title page as such, “Title Page” means\nthe text near the most prominent appearance of the work’s title,\npreceding the beginning of the body of the text.\n</p>\n<p>The “publisher” means any person or entity that distributes copies\nof the Document to the public.\n</p>\n<p>A section “Entitled XYZ” means a named subunit of the Document whose\ntitle either is precisely XYZ or contains XYZ in parentheses following\ntext that translates XYZ in another language.  (Here XYZ stands for a\nspecific section name mentioned below, such as “Acknowledgements”,\n“Dedications”, “Endorsements”, or “History”.)  To “Preserve the Title”\nof such a section when you modify the Document means that it remains a\nsection “Entitled XYZ” according to this definition.\n</p>\n<p>The Document may include Warranty Disclaimers next to the notice which\nstates that this License applies to the Document.  These Warranty\nDisclaimers are considered to be included by reference in this\nLicense, but only as regards disclaiming warranties: any other\nimplication that these Warranty Disclaimers may have is void and has\nno effect on the meaning of this License.\n</p>\n</li><li> VERBATIM COPYING\n\n<p>You may copy and distribute the Document in any medium, either\ncommercially or noncommercially, provided that this License, the\ncopyright notices, and the license notice saying this License applies\nto the Document are reproduced in all copies, and that you add no other\nconditions whatsoever to those of this License.  You may not use\ntechnical measures to obstruct or control the reading or further\ncopying of the copies you make or distribute.  However, you may accept\ncompensation in exchange for copies.  If you distribute a large enough\nnumber of copies you must also follow the conditions in section 3.\n</p>\n<p>You may also lend copies, under the same conditions stated above, and\nyou may publicly display copies.\n</p>\n</li><li> COPYING IN QUANTITY\n\n<p>If you publish printed copies (or copies in media that commonly have\nprinted covers) of the Document, numbering more than 100, and the\nDocument’s license notice requires Cover Texts, you must enclose the\ncopies in covers that carry, clearly and legibly, all these Cover\nTexts: Front-Cover Texts on the front cover, and Back-Cover Texts on\nthe back cover.  Both covers must also clearly and legibly identify\nyou as the publisher of these copies.  The front cover must present\nthe full title with all words of the title equally prominent and\nvisible.  You may add other material on the covers in addition.\nCopying with changes limited to the covers, as long as they preserve\nthe title of the Document and satisfy these conditions, can be treated\nas verbatim copying in other respects.\n</p>\n<p>If the required texts for either cover are too voluminous to fit\nlegibly, you should put the first ones listed (as many as fit\nreasonably) on the actual cover, and continue the rest onto adjacent\npages.\n</p>\n<p>If you publish or distribute Opaque copies of the Document numbering\nmore than 100, you must either include a machine-readable Transparent\ncopy along with each Opaque copy, or state in or with each Opaque copy\na computer-network location from which the general network-using\npublic has access to download using public-standard network protocols\na complete Transparent copy of the Document, free of added material.\nIf you use the latter option, you must take reasonably prudent steps,\nwhen you begin distribution of Opaque copies in quantity, to ensure\nthat this Transparent copy will remain thus accessible at the stated\nlocation until at least one year after the last time you distribute an\nOpaque copy (directly or through your agents or retailers) of that\nedition to the public.\n</p>\n<p>It is requested, but not required, that you contact the authors of the\nDocument well before redistributing any large number of copies, to give\nthem a chance to provide you with an updated version of the Document.\n</p>\n</li><li> MODIFICATIONS\n\n<p>You may copy and distribute a Modified Version of the Document under\nthe conditions of sections 2 and 3 above, provided that you release\nthe Modified Version under precisely this License, with the Modified\nVersion filling the role of the Document, thus licensing distribution\nand modification of the Modified Version to whoever possesses a copy\nof it.  In addition, you must do these things in the Modified Version:\n</p>\n<ol class=\"enumerate\" start=\"1\" type=\"A\">\n<li> Use in the Title Page (and on the covers, if any) a title distinct\nfrom that of the Document, and from those of previous versions\n(which should, if there were any, be listed in the History section\nof the Document).  You may use the same title as a previous version\nif the original publisher of that version gives permission.\n\n</li><li> List on the Title Page, as authors, one or more persons or entities\nresponsible for authorship of the modifications in the Modified\nVersion, together with at least five of the principal authors of the\nDocument (all of its principal authors, if it has fewer than five),\nunless they release you from this requirement.\n\n</li><li> State on the Title page the name of the publisher of the\nModified Version, as the publisher.\n\n</li><li> Preserve all the copyright notices of the Document.\n\n</li><li> Add an appropriate copyright notice for your modifications\nadjacent to the other copyright notices.\n\n</li><li> Include, immediately after the copyright notices, a license notice\ngiving the public permission to use the Modified Version under the\nterms of this License, in the form shown in the Addendum below.\n\n</li><li> Preserve in that license notice the full lists of Invariant Sections\nand required Cover Texts given in the Document’s license notice.\n\n</li><li> Include an unaltered copy of this License.\n\n</li><li> Preserve the section Entitled “History”, Preserve its Title, and add\nto it an item stating at least the title, year, new authors, and\npublisher of the Modified Version as given on the Title Page.  If\nthere is no section Entitled “History” in the Document, create one\nstating the title, year, authors, and publisher of the Document as\ngiven on its Title Page, then add an item describing the Modified\nVersion as stated in the previous sentence.\n\n</li><li> Preserve the network location, if any, given in the Document for\npublic access to a Transparent copy of the Document, and likewise\nthe network locations given in the Document for previous versions\nit was based on.  These may be placed in the “History” section.\nYou may omit a network location for a work that was published at\nleast four years before the Document itself, or if the original\npublisher of the version it refers to gives permission.\n\n</li><li> For any section Entitled “Acknowledgements” or “Dedications”, Preserve\nthe Title of the section, and preserve in the section all the\nsubstance and tone of each of the contributor acknowledgements and/or\ndedications given therein.\n\n</li><li> Preserve all the Invariant Sections of the Document,\nunaltered in their text and in their titles.  Section numbers\nor the equivalent are not considered part of the section titles.\n\n</li><li> Delete any section Entitled “Endorsements”.  Such a section\nmay not be included in the Modified Version.\n\n</li><li> Do not retitle any existing section to be Entitled “Endorsements” or\nto conflict in title with any Invariant Section.\n\n</li><li> Preserve any Warranty Disclaimers.\n</li></ol>\n<p>If the Modified Version includes new front-matter sections or\nappendices that qualify as Secondary Sections and contain no material\ncopied from the Document, you may at your option designate some or all\nof these sections as invariant.  To do this, add their titles to the\nlist of Invariant Sections in the Modified Version’s license notice.\nThese titles must be distinct from any other section titles.\n</p>\n<p>You may add a section Entitled “Endorsements”, provided it contains\nnothing but endorsements of your Modified Version by various\nparties—for example, statements of peer review or that the text has\nbeen approved by an organization as the authoritative definition of a\nstandard.\n</p>\n<p>You may add a passage of up to five words as a Front-Cover Text, and a\npassage of up to 25 words as a Back-Cover Text, to the end of the list\nof Cover Texts in the Modified Version.  Only one passage of\nFront-Cover Text and one of Back-Cover Text may be added by (or\nthrough arrangements made by) any one entity.  If the Document already\nincludes a cover text for the same cover, previously added by you or\nby arrangement made by the same entity you are acting on behalf of,\nyou may not add another; but you may replace the old one, on explicit\npermission from the previous publisher that added the old one.\n</p>\n<p>The author(s) and publisher(s) of the Document do not by this License\ngive permission to use their names for publicity for or to assert or\nimply endorsement of any Modified Version.\n</p>\n</li><li> COMBINING DOCUMENTS\n\n<p>You may combine the Document with other documents released under this\nLicense, under the terms defined in section 4 above for modified\nversions, provided that you include in the combination all of the\nInvariant Sections of all of the original documents, unmodified, and\nlist them all as Invariant Sections of your combined work in its\nlicense notice, and that you preserve all their Warranty Disclaimers.\n</p>\n<p>The combined work need only contain one copy of this License, and\nmultiple identical Invariant Sections may be replaced with a single\ncopy.  If there are multiple Invariant Sections with the same name but\ndifferent contents, make the title of each such section unique by\nadding at the end of it, in parentheses, the name of the original\nauthor or publisher of that section if known, or else a unique number.\nMake the same adjustment to the section titles in the list of\nInvariant Sections in the license notice of the combined work.\n</p>\n<p>In the combination, you must combine any sections Entitled “History”\nin the various original documents, forming one section Entitled\n“History”; likewise combine any sections Entitled “Acknowledgements”,\nand any sections Entitled “Dedications”.  You must delete all\nsections Entitled “Endorsements.”\n</p>\n</li><li> COLLECTIONS OF DOCUMENTS\n\n<p>You may make a collection consisting of the Document and other documents\nreleased under this License, and replace the individual copies of this\nLicense in the various documents with a single copy that is included in\nthe collection, provided that you follow the rules of this License for\nverbatim copying of each of the documents in all other respects.\n</p>\n<p>You may extract a single document from such a collection, and distribute\nit individually under this License, provided you insert a copy of this\nLicense into the extracted document, and follow this License in all\nother respects regarding verbatim copying of that document.\n</p>\n</li><li> AGGREGATION WITH INDEPENDENT WORKS\n\n<p>A compilation of the Document or its derivatives with other separate\nand independent documents or works, in or on a volume of a storage or\ndistribution medium, is called an “aggregate” if the copyright\nresulting from the compilation is not used to limit the legal rights\nof the compilation’s users beyond what the individual works permit.\nWhen the Document is included in an aggregate, this License does not\napply to the other works in the aggregate which are not themselves\nderivative works of the Document.\n</p>\n<p>If the Cover Text requirement of section 3 is applicable to these\ncopies of the Document, then if the Document is less than one half of\nthe entire aggregate, the Document’s Cover Texts may be placed on\ncovers that bracket the Document within the aggregate, or the\nelectronic equivalent of covers if the Document is in electronic form.\nOtherwise they must appear on printed covers that bracket the whole\naggregate.\n</p>\n</li><li> TRANSLATION\n\n<p>Translation is considered a kind of modification, so you may\ndistribute translations of the Document under the terms of section 4.\nReplacing Invariant Sections with translations requires special\npermission from their copyright holders, but you may include\ntranslations of some or all Invariant Sections in addition to the\noriginal versions of these Invariant Sections.  You may include a\ntranslation of this License, and all the license notices in the\nDocument, and any Warranty Disclaimers, provided that you also include\nthe original English version of this License and the original versions\nof those notices and disclaimers.  In case of a disagreement between\nthe translation and the original version of this License or a notice\nor disclaimer, the original version will prevail.\n</p>\n<p>If a section in the Document is Entitled “Acknowledgements”,\n“Dedications”, or “History”, the requirement (section 4) to Preserve\nits Title (section 1) will typically require changing the actual\ntitle.\n</p>\n</li><li> TERMINATION\n\n<p>You may not copy, modify, sublicense, or distribute the Document\nexcept as expressly provided under this License.  Any attempt\notherwise to copy, modify, sublicense, or distribute it is void, and\nwill automatically terminate your rights under this License.\n</p>\n<p>However, if you cease all violation of this License, then your license\nfrom a particular copyright holder is reinstated (a) provisionally,\nunless and until the copyright holder explicitly and finally\nterminates your license, and (b) permanently, if the copyright holder\nfails to notify you of the violation by some reasonable means prior to\n60 days after the cessation.\n</p>\n<p>Moreover, your license from a particular copyright holder is\nreinstated permanently if the copyright holder notifies you of the\nviolation by some reasonable means, this is the first time you have\nreceived notice of violation of this License (for any work) from that\ncopyright holder, and you cure the violation prior to 30 days after\nyour receipt of the notice.\n</p>\n<p>Termination of your rights under this section does not terminate the\nlicenses of parties who have received copies or rights from you under\nthis License.  If your rights have been terminated and not permanently\nreinstated, receipt of a copy of some or all of the same material does\nnot give you any rights to use it.\n</p>\n</li><li> FUTURE REVISIONS OF THIS LICENSE\n\n<p>The Free Software Foundation may publish new, revised versions\nof the GNU Free Documentation License from time to time.  Such new\nversions will be similar in spirit to the present version, but may\ndiffer in detail to address new problems or concerns.  See\n<a class=\"uref\" href=\"https://www.gnu.org/licenses/\">https://www.gnu.org/licenses/</a>.\n</p>\n<p>Each version of the License is given a distinguishing version number.\nIf the Document specifies that a particular numbered version of this\nLicense “or any later version” applies to it, you have the option of\nfollowing the terms and conditions either of that specified version or\nof any later version that has been published (not as a draft) by the\nFree Software Foundation.  If the Document does not specify a version\nnumber of this License, you may choose any version ever published (not\nas a draft) by the Free Software Foundation.  If the Document\nspecifies that a proxy can decide which future versions of this\nLicense can be used, that proxy’s public statement of acceptance of a\nversion permanently authorizes you to choose that version for the\nDocument.\n</p>\n</li><li> RELICENSING\n\n<p>“Massive Multiauthor Collaboration Site” (or “MMC Site”) means any\nWorld Wide Web server that publishes copyrightable works and also\nprovides prominent facilities for anybody to edit those works.  A\npublic wiki that anybody can edit is an example of such a server.  A\n“Massive Multiauthor Collaboration” (or “MMC”) contained in the\nsite means any set of copyrightable works thus published on the MMC\nsite.\n</p>\n<p>“CC-BY-SA” means the Creative Commons Attribution-Share Alike 3.0\nlicense published by Creative Commons Corporation, a not-for-profit\ncorporation with a principal place of business in San Francisco,\nCalifornia, as well as future copyleft versions of that license\npublished by that same organization.\n</p>\n<p>“Incorporate” means to publish or republish a Document, in whole or\nin part, as part of another Document.\n</p>\n<p>An MMC is “eligible for relicensing” if it is licensed under this\nLicense, and if all works that were first published under this License\nsomewhere other than this MMC, and subsequently incorporated in whole\nor in part into the MMC, (1) had no cover texts or invariant sections,\nand (2) were thus incorporated prior to November 1, 2008.\n</p>\n<p>The operator of an MMC Site may republish an MMC contained in the site\nunder CC-BY-SA on the same site at any time before August 1, 2009,\nprovided the MMC is eligible for relicensing.\n</p>\n</li></ol>\n<h3 class=\"heading\" id=\"tar-context-ADDENDUM_003a-How-to-use-this-License-for-your-documents\"><span>ADDENDUM: How to use this License for your documents</span></h3>\n<p>To use this License in a document you have written, include a copy of\nthe License in the document and put the following copyright and\nlicense notices just after the title page:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">  Copyright (C)  <var class=\"var\">year</var>  <var class=\"var\">your name</var>.\n  Permission is granted to copy, distribute and/or modify this document\n  under the terms of the GNU Free Documentation License, Version 1.3\n  or any later version published by the Free Software Foundation;\n  with no Invariant Sections, no Front-Cover Texts, and no Back-Cover\n  Texts.  A copy of the license is included in the section entitled ``GNU\n  Free Documentation License''.\n</pre></div></div>\n<p>If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts,\nreplace the “with…Texts.” line with this:\n</p>\n<div class=\"example smallexample\">\n<div class=\"group\"><pre class=\"example-preformatted\">    with the Invariant Sections being <var class=\"var\">list their titles</var>, with\n    the Front-Cover Texts being <var class=\"var\">list</var>, and with the Back-Cover Texts\n    being <var class=\"var\">list</var>.\n</pre></div></div>\n<p>If you have Invariant Sections without Cover Texts, or some other\ncombination of the three, merge those two alternatives to suit the\nsituation.\n</p>\n<p>If your document contains nontrivial examples of program code, we\nrecommend releasing these examples in parallel under your choice of\nfree software license, such as the GNU General Public License,\nto permit their use in free software.\n</p>\n<hr/>\n</div></section>"}]
---

<div class="gnu-tar-original-content"><div class="subsection-level-extent" id="Option-Summary">

<h4 class="subsection" id="tar-Options"><span>3.4.2 <code class="command">tar</code> Options</span></h4>
<dl class="table">
<dd>
<a class="anchor" id="g_t_002d_002dabsolute_002dnames"></a></dd>
<dt><a id="index-absolute_002dnames_002c-summary"></a><span><samp class="option">--absolute-names</samp></span></dt>
<dt><samp class="option">-P</samp></dt>
<dd>
<p>Normally when creating an archive, <code class="command">tar</code> strips an initial
‘<samp class="samp">/</samp>’ from member names, and when extracting from an archive <code class="command">tar</code>
treats names specially if they have initial ‘<samp class="samp">/</samp>’ or internal
‘<samp class="samp">..</samp>’.  This option disables that behavior.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#absolute">Absolute File Names</a>.
</p>
<a class="anchor" id="g_t_002d_002dacls"></a></dd>
<dt><a id="index-acls_002c-summary"></a><span><samp class="option">--acls</samp></span></dt>
<dd><p>Enable POSIX ACLs support.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">acls</a>.
</p>
<a class="anchor" id="g_t_002d_002dafter_002ddate"></a></dd>
<dt><a id="index-after_002ddate_002c-summary"></a><span><samp class="option">--after-date</samp></span></dt>
<dd>
<p>(See <samp class="option">--newer</samp>, see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>)
</p>
<a class="anchor" id="g_t_002d_002danchored"></a></dd>
<dt><a id="index-anchored_002c-summary"></a><span><samp class="option">--anchored</samp></span></dt>
<dd><p>A pattern must match an initial subsequence of the name’s components.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002datime_002dpreserve"></a></dd>
<dt><a id="index-atime_002dpreserve_002c-summary"></a><span><samp class="option">--atime-preserve</samp></span></dt>
<dt><samp class="option">--atime-preserve=replace</samp></dt>
<dt><samp class="option">--atime-preserve=system</samp></dt>
<dd>
<p>Attempt to preserve the access time of files when reading them.  This
option currently is effective only on files that you own, unless you
have superuser privileges.
</p>
<p><samp class="option">--atime-preserve=replace</samp> remembers the access time of a file
before reading it, and then restores the access time afterwards.  This
may cause problems if other programs are reading the file at the same
time, as the times of their accesses will be lost.  On most platforms
restoring the access time also requires <code class="command">tar</code> to restore the
data modification time too, so this option may also cause problems if
other programs are writing the file at the same time (<code class="command">tar</code> attempts
to detect this situation, but cannot do so reliably due to race
conditions).  Worse, on most platforms restoring the access time also
updates the status change time, which means that this option is
incompatible with incremental backups.
</p>
<p><samp class="option">--atime-preserve=system</samp> avoids changing time stamps on files,
without interfering with time stamp updates
caused by other programs, so it works better with incremental backups.
However, it requires a special <code class="code">O_NOATIME</code> option from the
underlying operating and file system implementation, and it also requires
that searching directories does not update their access times.  As of
this writing (November 2005) this works only with Linux, and only with
Linux kernels 2.6.8 and later.  Worse, there is currently no reliable
way to know whether this feature actually works.  Sometimes
<code class="command">tar</code> knows that it does not work, and if you use
<samp class="option">--atime-preserve=system</samp> then <code class="command">tar</code> complains and
exits right away.  But other times <code class="command">tar</code> might think that the
option works when it actually does not.
</p>
<p>Currently <samp class="option">--atime-preserve</samp> with no operand defaults to
<samp class="option">--atime-preserve=replace</samp>, but this may change in the future
as support for <samp class="option">--atime-preserve=system</samp> improves.
</p>
<p>If your operating or file system does not support
<samp class="option">--atime-preserve=system</samp>, you might be able to preserve access
times reliably by using the <code class="command">mount</code> command.  For example,
you can mount the file system read-only, or access the file system via
a read-only loopback mount, or use the ‘<samp class="samp">noatime</samp>’ mount option
available on some systems.  However, mounting typically requires
superuser privileges and can be a pain to manage.
</p>
<a class="anchor" id="g_t_002d_002dauto_002dcompress"></a></dd>
<dt><a id="index-auto_002dcompress_002c-summary"></a><span><samp class="option">--auto-compress</samp></span></dt>
<dt><samp class="option">-a</samp></dt>
<dd>
<p>During a <samp class="option">--create</samp> operation, enables automatic compressed
format recognition based on the archive suffix.  The effect of this
option is cancelled by <samp class="option">--no-auto-compress</samp>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dbackup"></a></dd>
<dt><a id="index-backup_002c-summary"></a><span><samp class="option">--backup=<var class="var">backup-type</var></samp></span></dt>
<dd>
<p>Rather than deleting files from the file system, <code class="command">tar</code> will
back them up using simple or numbered backups, depending upon
<var class="var">backup-type</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#backup">Backup options</a>.
</p>
<a class="anchor" id="g_t_002d_002dblock_002dnumber"></a></dd>
<dt><a id="index-block_002dnumber_002c-summary"></a><span><samp class="option">--block-number</samp></span></dt>
<dt><samp class="option">-R</samp></dt>
<dd>
<p>With this option present, <code class="command">tar</code> prints error messages for read errors
with the block number in the archive file.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#block_002dnumber">block-number</a>.
</p>
<a class="anchor" id="g_t_002d_002dblocking_002dfactor"></a></dd>
<dt><a id="index-blocking_002dfactor_002c-summary"></a><span><samp class="option">--blocking-factor=<var class="var">blocking</var></samp></span></dt>
<dt><samp class="option">-b <var class="var">blocking</var></samp></dt>
<dd>
<p>Sets the blocking factor <code class="command">tar</code> uses to <var class="var">blocking</var> x 512 bytes per
record.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Blocking-Factor">The Blocking Factor of an Archive</a>.
</p>
<a class="anchor" id="g_t_002d_002dbzip2"></a></dd>
<dt><a id="index-bzip2_002c-summary"></a><span><samp class="option">--bzip2</samp></span></dt>
<dt><samp class="option">-j</samp></dt>
<dd>
<p>This option tells <code class="command">tar</code> to read or write archives through
<code class="code">bzip2</code>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dcheck_002ddevice"></a></dd>
<dt><a id="index-check_002ddevice_002c-summary"></a><span><samp class="option">--check-device</samp></span></dt>
<dd><p>Check device numbers when creating a list of modified files for
incremental archiving.  This is the default.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#device-numbers">device numbers</a>,
for a detailed description.
</p>
<a class="anchor" id="g_t_002d_002dcheckpoint"></a></dd>
<dt><a id="index-checkpoint_002c-summary"></a><span><samp class="option">--checkpoint[=<var class="var">number</var>]</samp></span></dt>
<dd>
<p>This option directs <code class="command">tar</code> to print periodic checkpoint
messages as it reads through the archive.  It is intended for when you
want a visual indication that <code class="command">tar</code> is still running, but
don’t want to see <samp class="option">--verbose</samp> output.  You can also instruct
<code class="command">tar</code> to execute a list of actions on each checkpoint, see
<samp class="option">--checkpoint-action</samp> below.  For a detailed description, see
<a class="ref" href="/docs/gnu-tar/source/v1-35/manual.html#checkpoints">Checkpoints</a>.
</p>
<a class="anchor" id="g_t_002d_002dcheckpoint_002daction"></a></dd>
<dt><a id="index-checkpoint_002daction_002c-summary"></a><span><samp class="option">--checkpoint-action=<var class="var">action</var></samp></span></dt>
<dd><p>Instruct <code class="command">tar</code> to execute an action upon hitting a
breakpoint.  Here we give only a brief outline.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#checkpoints">Checkpoints</a>,
for a complete description.
</p>
<p>The <var class="var">action</var> argument can be one of the following:
</p>
<dl class="table">
<dt>bell</dt>
<dd><p>Produce an audible bell on the console.
</p>
</dd>
<dt>dot</dt>
<dt>.</dt>
<dd><p>Print a single dot on the standard listing stream.
</p>
</dd>
<dt>echo</dt>
<dd><p>Display a textual message on the standard error, with the status and
number of the checkpoint.  This is the default.
</p>
</dd>
<dt>echo=<var class="var">string</var></dt>
<dd><p>Display <var class="var">string</var> on the standard error.  Before output, the string
is subject to meta-character expansion.
</p>
</dd>
<dt>exec=<var class="var">command</var></dt>
<dd><p>Execute the given <var class="var">command</var>.
</p>
</dd>
<dt>sleep=<var class="var">time</var></dt>
<dd><p>Wait for <var class="var">time</var> seconds.
</p>
</dd>
<dt>ttyout=<var class="var">string</var></dt>
<dd><p>Output <var class="var">string</var> on the current console (<samp class="file">/dev/tty</samp>).
</p>
</dd>
<dt>totals</dt>
<dd><p>Print statistics (see see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#totals">totals</a>).
</p>
</dd>
<dt>wait=<var class="var">signo</var></dt>
<dd><p>Wait for signal <var class="var">signo</var>.
</p></dd>
</dl>
<p>Several <samp class="option">--checkpoint-action</samp> options can be specified.  The
supplied actions will be executed in order of their appearance in the
command line.
</p>
<p>Using <samp class="option">--checkpoint-action</samp> without <samp class="option">--checkpoint</samp>
assumes default checkpoint frequency of one checkpoint per 10 records.
</p>
<a class="anchor" id="g_t_002d_002dcheck_002dlinks"></a></dd>
<dt><a id="index-check_002dlinks_002c-summary"></a><span><samp class="option">--check-links</samp></span></dt>
<dt><samp class="option">-l</samp></dt>
<dd><p>If this option was given, <code class="command">tar</code> will check the number of links
dumped for each processed file.  If this number does not match the
total number of hard links for the file, a warning message will be
output <a class="footnote" href="/docs/gnu-tar/v1-35/en/01-guide/42-option-summary/#FOOT5" id="DOCF5"><sup>5</sup></a>.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#hard-links">Hard Links</a>.
</p>
<a class="anchor" id="g_t_002d_002dcompress"></a><a class="index-entry-id" id="index-compress_002c-summary"></a>
<a class="anchor" id="g_t_002d_002duncompress"></a></dd>
<dt><a id="index-uncompress_002c-summary"></a><span><samp class="option">--compress</samp></span></dt>
<dt><samp class="option">--uncompress</samp></dt>
<dt><samp class="option">-Z</samp></dt>
<dd>
<p><code class="command">tar</code> will use the <code class="command">compress</code> program when reading or
writing the archive.  This allows you to directly act on archives
while saving space.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dclamp_002dmtime"></a></dd>
<dt><a id="index-clamp_002dmtime_002c-summary"></a><span><samp class="option">--clamp-mtime</samp></span></dt>
<dd>
<p>(See <samp class="option">--mtime</samp>.)
</p>
<a class="anchor" id="g_t_002d_002dconfirmation"></a></dd>
<dt><a id="index-confirmation_002c-summary"></a><span><samp class="option">--confirmation</samp></span></dt>
<dd>
<p>(See <samp class="option">--interactive</samp>.)  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#interactive">Asking for Confirmation During Operations</a>.
</p>
<a class="anchor" id="g_t_002d_002ddelay_002ddirectory_002drestore"></a></dd>
<dt><a id="index-delay_002ddirectory_002drestore_002c-summary"></a><span><samp class="option">--delay-directory-restore</samp></span></dt>
<dd>
<p>Delay setting modification times and permissions of extracted
directories until the end of extraction. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Directory-Modification-Times-and-Permissions">Directory Modification Times and Permissions</a>.
</p>
<a class="anchor" id="g_t_002d_002ddereference"></a></dd>
<dt><a id="index-dereference_002c-summary"></a><span><samp class="option">--dereference</samp></span></dt>
<dt><samp class="option">-h</samp></dt>
<dd>
<p>When reading or writing a file to be archived, <code class="command">tar</code> accesses
the file that a symbolic link points to, rather than the symlink
itself.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#dereference">Symbolic Links</a>.
</p>
<a class="anchor" id="g_t_002d_002ddirectory"></a></dd>
<dt><a id="index-directory_002c-summary"></a><span><samp class="option">--directory=<var class="var">dir</var></samp></span></dt>
<dt><samp class="option">-C <var class="var">dir</var></samp></dt>
<dd>
<p>When this option is specified, <code class="command">tar</code> will change its current directory
to <var class="var">dir</var> before performing any operations.  When this option is used
during archive creation, it is order sensitive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#directory">Changing the Working Directory</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude"></a></dd>
<dt><a id="index-exclude_002c-summary"></a><span><samp class="option">--exclude=<var class="var">pattern</var></samp></span></dt>
<dd>
<p>When performing operations, <code class="command">tar</code> will skip files that match
<var class="var">pattern</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dbackups"></a></dd>
<dt><a id="index-exclude_002dbackups_002c-summary"></a><span><samp class="option">--exclude-backups</samp></span></dt>
<dd><p>Exclude backup and lock files.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-backups</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dfrom"></a></dd>
<dt><a id="index-exclude_002dfrom_002c-summary"></a><span><samp class="option">--exclude-from=<var class="var">file</var></samp></span></dt>
<dt><samp class="option">-X <var class="var">file</var></samp></dt>
<dd>
<p>Similar to <samp class="option">--exclude</samp>, except <code class="command">tar</code> will use the list of
patterns in the file <var class="var">file</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches"></a></dd>
<dt><a id="index-exclude_002dcaches_002c-summary"></a><span><samp class="option">--exclude-caches</samp></span></dt>
<dd>
<p>Exclude from dump any directory containing a valid cache directory
tag file, but still dump the directory node and the tag file itself.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-caches</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches_002dunder"></a></dd>
<dt><a id="index-exclude_002dcaches_002dunder_002c-summary"></a><span><samp class="option">--exclude-caches-under</samp></span></dt>
<dd>
<p>Exclude from dump any directory containing a valid cache directory
tag file, but still dump the directory node itself.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dcaches_002dall"></a></dd>
<dt><a id="index-exclude_002dcaches_002dall_002c-summary"></a><span><samp class="option">--exclude-caches-all</samp></span></dt>
<dd>
<p>Exclude from dump any directory containing a valid cache directory
tag file.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dignore"></a></dd>
<dt><a id="index-exclude_002dignore_002c-summary"></a><span><samp class="option">--exclude-ignore=<var class="var">file</var></samp></span></dt>
<dd><p>Before dumping a directory, <code class="command">tar</code> checks if it contains
<var class="var">file</var>.  If so, exclusion patterns are read from this file.
The patterns affect only the directory itself.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dignore_002drecursive"></a></dd>
<dt><a id="index-exclude_002dignore_002drecursive_002c-summary"></a><span><samp class="option">--exclude-ignore-recursive=<var class="var">file</var></samp></span></dt>
<dd><p>Before dumping a directory, <code class="command">tar</code> checks if it contains
<var class="var">file</var>.  If so, exclusion patterns are read from this file.
The patterns affect the directory and all itssubdirectories.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">Excluding Some Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag"></a></dd>
<dt><a id="index-exclude_002dtag_002c-summary"></a><span><samp class="option">--exclude-tag=<var class="var">file</var></samp></span></dt>
<dd>
<p>Exclude from dump any directory containing file named <var class="var">file</var>, but
dump the directory node and <var class="var">file</var> itself.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag_002dunder"></a></dd>
<dt><a id="index-exclude_002dtag_002dunder_002c-summary"></a><span><samp class="option">--exclude-tag-under=<var class="var">file</var></samp></span></dt>
<dd>
<p>Exclude from dump the contents of any directory containing file
named <var class="var">file</var>, but dump the directory node itself.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag-under</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dtag_002dall"></a></dd>
<dt><a id="index-exclude_002dtag_002dall_002c-summary"></a><span><samp class="option">--exclude-tag-all=<var class="var">file</var></samp></span></dt>
<dd>
<p>Exclude from dump any directory containing file named <var class="var">file</var>.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude">exclude-tag-all</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dvcs"></a></dd>
<dt><a id="index-exclude_002dvcs_002c-summary"></a><span><samp class="option">--exclude-vcs</samp></span></dt>
<dd>
<p>Exclude from dump directories and files, that are internal for some
widely used version control systems.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude_002dvcs">exclude-vcs</a>.
</p>
<a class="anchor" id="g_t_002d_002dexclude_002dvcs_002dignores"></a></dd>
<dt><a id="index-exclude_002dvcs_002dignores_002c-summary"></a><span><samp class="option">--exclude-vcs-ignores</samp></span></dt>
<dd><p>Exclude files that match patterns read from VCS-specific ignore
files.  Supported files are: <samp class="file">.cvsignore</samp>, <samp class="file">.gitignore</samp>,
<samp class="file">.bzrignore</samp>, and <samp class="file">.hgignore</samp>.  The semantics of each file
is the same as for the corresponding VCS, e.g. patterns read from
<samp class="file">.gitignore</samp> affect the directory and all its subdirectories.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#exclude_002dvcs_002dignores">exclude-vcs-ignores</a>.
</p>
<a class="anchor" id="g_t_002d_002dfile"></a></dd>
<dt><a id="index-file_002c-summary"></a><span><samp class="option">--file=<var class="var">archive</var></samp></span></dt>
<dt><samp class="option">-f <var class="var">archive</var></samp></dt>
<dd>
<p><code class="command">tar</code> will use the file <var class="var">archive</var> as the <code class="command">tar</code> archive it
performs operations on, rather than <code class="command">tar</code>’s compilation dependent
default.  See <a class="xref" href="/docs/gnu-tar/v1-35/en/01-guide/14-file-tutorial/#file-tutorial">The <samp class="option">--file</samp> Option</a>.
</p>
<a class="anchor" id="g_t_002d_002dfiles_002dfrom"></a></dd>
<dt><a id="index-files_002dfrom_002c-summary"></a><span><samp class="option">--files-from=<var class="var">file</var></samp></span></dt>
<dt><samp class="option">-T <var class="var">file</var></samp></dt>
<dd>
<p><code class="command">tar</code> will use the contents of <var class="var">file</var> as a list of archive members
or files to operate on, in addition to those specified on the
command-line.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#files">Reading Names from a File</a>.
</p>
<a class="anchor" id="g_t_002d_002dforce_002dlocal"></a></dd>
<dt><a id="index-force_002dlocal_002c-summary"></a><span><samp class="option">--force-local</samp></span></dt>
<dd>
<p>Forces <code class="command">tar</code> to interpret the file name given to <samp class="option">--file</samp>
as a local file, even if it looks like a remote tape drive name.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#local-and-remote-archives">local and remote archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dformat"></a></dd>
<dt><a id="index-format_002c-summary"></a><span><samp class="option">--format=<var class="var">format</var></samp></span></dt>
<dt><samp class="option">-H <var class="var">format</var></samp></dt>
<dd>
<p>Selects output archive format.  <var class="var">Format</var> may be one of the
following:
</p>
<dl class="table">
<dt>‘<samp class="samp">v7</samp>’</dt>
<dd><p>Creates an archive that is compatible with Unix V7 <code class="command">tar</code>.
</p>
</dd>
<dt>‘<samp class="samp">oldgnu</samp>’</dt>
<dd><p>Creates an archive that is compatible with GNU <code class="command">tar</code> version
1.12 or earlier.
</p>
</dd>
<dt>‘<samp class="samp">gnu</samp>’</dt>
<dd><p>Creates archive in GNU tar 1.13 format.  Basically it is the same as
‘<samp class="samp">oldgnu</samp>’ with the only difference in the way it handles long
numeric fields.
</p>
</dd>
<dt>‘<samp class="samp">ustar</samp>’</dt>
<dd><p>Creates a <abbr class="acronym">POSIX.1-1988</abbr> compatible archive.
</p>
</dd>
<dt>‘<samp class="samp">posix</samp>’</dt>
<dd><p>Creates a <abbr class="acronym">POSIX.1-2001 archive</abbr>.
</p>
</dd>
</dl>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Formats">Controlling the Archive Format</a>, for a detailed discussion of these formats.
</p>
<a class="anchor" id="g_t_002d_002dfull_002dtime"></a></dd>
<dt><a id="index-full_002dtime_002c-summary"></a><span><samp class="option">--full-time</samp></span></dt>
<dd><p>This option instructs <code class="command">tar</code> to print file times to their full
resolution.  Usually this means 1-second resolution, but that depends
on the underlying file system.  The <samp class="option">--full-time</samp> option takes
effect only when detailed output (verbosity level 2 or higher) has
been requested using the <samp class="option">--verbose</samp> option, e.g., when listing
or extracting archives:
</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar -t -v --full-time -f archive.tar</kbd>
</pre></div>
<p>or, when creating an archive:
</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar -c -vv --full-time -f archive.tar .</kbd>
</pre></div>
<p>Notice, thar when creating the archive you need to specify
<samp class="option">--verbose</samp> twice to get a detailed output (see <a class="pxref" href="/docs/gnu-tar/v1-35/en/01-guide/15-verbose-tutorial/#verbose-tutorial">The <samp class="option">--verbose</samp> Option</a>).
</p>
<a class="anchor" id="g_t_002d_002dgroup"></a></dd>
<dt><a id="index-group_002c-summary"></a><span><samp class="option">--group=<var class="var">group</var></samp></span></dt>
<dd>
<p>Files added to the <code class="command">tar</code> archive will have a group <abbr class="acronym">ID</abbr> of <var class="var">group</var>,
rather than the group from the source file.  <var class="var">group</var> can specify a
symbolic name, or a numeric <abbr class="acronym">ID</abbr>, or both as
<var class="var">name</var>:<var class="var">id</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>.
</p>
<p>Also see the <samp class="option">--group-map</samp> option and comments for the
<samp class="option">--owner=<var class="var">user</var></samp> option.
</p>
<a class="anchor" id="g_t_002d_002dgroup_002dmap"></a></dd>
<dt><a id="index-group_002dmap_002c-summary"></a><span><samp class="option">--group-map=<var class="var">file</var></samp></span></dt>
<dd>
<p>Read owner group translation map from <var class="var">file</var>.  This option allows to
translate only certain group names and/or UIDs.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>, for a
detailed description.  When used together with <samp class="option">--group</samp>
option, the latter affects only those files whose owner group is not listed
in the <var class="var">file</var>.
</p>
<p>This option does not affect extraction from archives.
</p>
<a class="anchor" id="g_t_002d_002dgzip"></a><a class="index-entry-id" id="index-gzip_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dgunzip"></a><a class="index-entry-id" id="index-gunzip_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dungzip"></a></dd>
<dt><a id="index-ungzip_002c-summary"></a><span><samp class="option">--gzip</samp></span></dt>
<dt><samp class="option">--gunzip</samp></dt>
<dt><samp class="option">--ungzip</samp></dt>
<dt><samp class="option">-z</samp></dt>
<dd>
<p>This option tells <code class="command">tar</code> to read or write archives through
<code class="command">gzip</code>, allowing <code class="command">tar</code> to directly operate on several
kinds of compressed archives transparently.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dhard_002ddereference"></a></dd>
<dt><a id="index-hard_002ddereference_002c-summary"></a><span><samp class="option">--hard-dereference</samp></span></dt>
<dd><p>When creating an archive, dereference hard links and store the files
they refer to, instead of creating usual hard link members.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#hard-links">Hard Links</a>.
</p>
<a class="anchor" id="g_t_002d_002dhelp"></a></dd>
<dt><a id="index-help_002c-summary"></a><span><samp class="option">--help</samp></span></dt>
<dt><samp class="option">-?</samp></dt>
<dd>
<p><code class="command">tar</code> will print out a short message summarizing the operations and
options to <code class="command">tar</code> and exit. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#help"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> documentation</a>.
</p>
<a class="anchor" id="g_t_002d_002dhole_002ddetection"></a></dd>
<dt><a id="index-hole_002ddetection_002c-summary"></a><span><samp class="option">--hole-detection=<var class="var">method</var></samp></span></dt>
<dd><p>Use <var class="var">method</var> to detect holes in sparse files.  This option implies
<samp class="option">--sparse</samp>.  Valid methods are ‘<samp class="samp">seek</samp>’ and ‘<samp class="samp">raw</samp>’.
Default is ‘<samp class="samp">seek</samp>’ with fallback to ‘<samp class="samp">raw</samp>’ when not
applicable. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dignore_002dcase"></a></dd>
<dt><a id="index-ignore_002dcase_002c-summary"></a><span><samp class="option">--ignore-case</samp></span></dt>
<dd><p>Ignore case when matching member or file names with
patterns. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dignore_002dcommand_002derror"></a></dd>
<dt><a id="index-ignore_002dcommand_002derror_002c-summary"></a><span><samp class="option">--ignore-command-error</samp></span></dt>
<dd><p>Ignore exit codes of subprocesses. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>.
</p>
<a class="anchor" id="g_t_002d_002dignore_002dfailed_002dread"></a></dd>
<dt><a id="index-ignore_002dfailed_002dread_002c-summary"></a><span><samp class="option">--ignore-failed-read</samp></span></dt>
<dd>
<p>Do not exit unsuccessfully merely because reading failed.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Ignore-Failed-Read">Ignore Failed Read</a>.
</p>
<a class="anchor" id="g_t_002d_002dignore_002dzeros"></a></dd>
<dt><a id="index-ignore_002dzeros_002c-summary"></a><span><samp class="option">--ignore-zeros</samp></span></dt>
<dt><samp class="option">-i</samp></dt>
<dd>
<p>With this option, <code class="command">tar</code> will ignore zeroed blocks in the
archive, which normally signals EOF.  This option also suppresses
warnings about missing or incomplete zero blocks at the end of the
archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Ignore-Zeros">Ignoring Blocks of Zeros</a>.
</p>
<a class="anchor" id="g_t_002d_002dincremental"></a></dd>
<dt><a id="index-incremental_002c-summary"></a><span><samp class="option">--incremental</samp></span></dt>
<dt><samp class="option">-G</samp></dt>
<dd>
<p>Informs <code class="command">tar</code> that it is working with an old
<abbr class="acronym">GNU</abbr>-format incremental backup archive.  It is intended
primarily for backwards compatibility only.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>,
for a detailed discussion of incremental archives.
</p>
<a class="anchor" id="g_t_002d_002dindex_002dfile"></a></dd>
<dt><a id="index-index_002dfile_002c-summary"></a><span><samp class="option">--index-file=<var class="var">file</var></samp></span></dt>
<dd>
<p>Send verbose output to <var class="var">file</var> instead of to standard output.
</p>
<a class="anchor" id="g_t_002d_002dinfo_002dscript"></a><a class="index-entry-id" id="index-info_002dscript_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dnew_002dvolume_002dscript"></a></dd>
<dt><a id="index-new_002dvolume_002dscript_002c-summary"></a><span><samp class="option">--info-script=<var class="var">command</var></samp></span></dt>
<dt><samp class="option">--new-volume-script=<var class="var">command</var></samp></dt>
<dt><samp class="option">-F <var class="var">command</var></samp></dt>
<dd>
<p>When <code class="command">tar</code> is performing multi-tape backups, <var class="var">command</var> is run
at the end of each tape.  If it exits with nonzero status,
<code class="command">tar</code> fails immediately.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#info_002dscript">info-script</a>, for a detailed
discussion of this feature.
</p>
<a class="anchor" id="g_t_002d_002dinteractive"></a></dd>
<dt><a id="index-interactive_002c-summary"></a><span><samp class="option">--interactive</samp></span></dt>
<dt><samp class="option">--confirmation</samp></dt>
<dt><samp class="option">-w</samp></dt>
<dd>
<p>Specifies that <code class="command">tar</code> should ask the user for confirmation before
performing potentially destructive options, such as overwriting files.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#interactive">Asking for Confirmation During Operations</a>.
</p>
<a class="anchor" id="g_t_002d_002dkeep_002ddirectory_002dsymlink"></a></dd>
<dt><a id="index-keep_002ddirectory_002dsymlink_002c-summary"></a><span><samp class="option">--keep-directory-symlink</samp></span></dt>
<dd>
<p>This option changes the behavior of tar when it encounters a symlink
with the same name as the directory that it is about to extract.  By
default, in this case tar would first remove the symlink and then
proceed extracting the directory.
</p>
<p>The <samp class="option">--keep-directory-symlink</samp> option disables this behavior
and instructs tar to follow symlinks to directories when extracting
from the archive.
</p>
<p>It is mainly intended to provide compatibility with the Slackware
installation scripts.
</p>
<a class="anchor" id="g_t_002d_002dkeep_002dnewer_002dfiles"></a></dd>
<dt><a id="index-keep_002dnewer_002dfiles_002c-summary"></a><span><samp class="option">--keep-newer-files</samp></span></dt>
<dd>
<p>Do not replace existing files that are newer than their archive copies
when extracting files from an archive.
</p>
<a class="anchor" id="g_t_002d_002dkeep_002dold_002dfiles"></a></dd>
<dt><a id="index-keep_002dold_002dfiles_002c-summary"></a><span><samp class="option">--keep-old-files</samp></span></dt>
<dt><samp class="option">-k</samp></dt>
<dd>
<p>Do not overwrite existing files when extracting files from an
archive.  Return error if such files exist.  See also
<a class="ref" href="/docs/gnu-tar/v1-35/en/01-guide/42-option-summary/#g_t_002d_002dskip_002dold_002dfiles">--skip-old-files</a>.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Keep-Old-Files">Keep Old Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dlabel"></a></dd>
<dt><a id="index-label_002c-summary"></a><span><samp class="option">--label=<var class="var">name</var></samp></span></dt>
<dt><samp class="option">-V <var class="var">name</var></samp></dt>
<dd>
<p>When creating an archive, instructs <code class="command">tar</code> to write <var class="var">name</var>
as a name record in the archive.  When extracting or listing archives,
<code class="command">tar</code> will only operate on archives that have a label matching
the pattern specified in <var class="var">name</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Tape-Files">Tape Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dlevel"></a></dd>
<dt><a id="index-level_002c-summary"></a><span><samp class="option">--level=<var class="var">n</var></samp></span></dt>
<dd><p>Force incremental backup of level <var class="var">n</var>.  As of <abbr class="acronym">GNU</abbr> <code class="command">tar</code> version
1.35, the option <samp class="option">--level=0</samp> truncates the snapshot
file, thereby forcing the level 0 dump.  Other values of <var class="var">n</var> are
effectively ignored.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#g_t_002d_002dlevel_003d0">--level=0</a>, for details and examples.
</p>
<p>The use of this option is valid only in conjunction with the
<samp class="option">--listed-incremental</samp> option.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>,
for a detailed description.
</p>
<a class="anchor" id="g_t_002d_002dlisted_002dincremental"></a></dd>
<dt><a id="index-listed_002dincremental_002c-summary"></a><span><samp class="option">--listed-incremental=<var class="var">snapshot-file</var></samp></span></dt>
<dt><samp class="option">-g <var class="var">snapshot-file</var></samp></dt>
<dd>
<p>During a <samp class="option">--create</samp> operation, specifies that the archive that
<code class="command">tar</code> creates is a new <abbr class="acronym">GNU</abbr>-format incremental
backup, using <var class="var">snapshot-file</var> to determine which files to backup.
With other operations, informs <code class="command">tar</code> that the archive is in
incremental format.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Incremental-Dumps">Using <code class="command">tar</code> to Perform Incremental Dumps</a>.
</p>
<a class="anchor" id="g_t_002d_002dlzip"></a></dd>
<dt><a id="index-lzip_002c-summary"></a><span><samp class="option">--lzip</samp></span></dt>
<dd>
<p>This option tells <code class="command">tar</code> to read or write archives through
<code class="command">lzip</code>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dlzma"></a></dd>
<dt><a id="index-lzma_002c-summary"></a><span><samp class="option">--lzma</samp></span></dt>
<dd>
<p>This option tells <code class="command">tar</code> to read or write archives through
<code class="command">lzma</code>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
</dd>
<dt><samp class="option">--lzop</samp></dt>
<dd>
<p>This option tells <code class="command">tar</code> to read or write archives through
<code class="command">lzop</code>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dmode"></a></dd>
<dt><a id="index-mode_002c-summary"></a><span><samp class="option">--mode=<var class="var">permissions</var></samp></span></dt>
<dd>
<p>When adding files to an archive, <code class="command">tar</code> will use
<var class="var">permissions</var> for the archive members, rather than the permissions
from the files.  <var class="var">permissions</var> can be specified either as an octal
number or as symbolic permissions, like with
<code class="command">chmod</code>. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>.
</p>
<a class="anchor" id="g_t_002d_002dmtime"></a></dd>
<dt><a id="index-mtime_002c-summary"></a><span><samp class="option">--mtime=<var class="var">date</var></samp></span></dt>
<dd>
<p>When adding files to an archive, <code class="command">tar</code> will use <var class="var">date</var> as
the modification time of members when creating archives, instead of
their actual modification times.  The value of <var class="var">date</var> can be
either a textual date representation (see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Date-input-formats">Date input formats</a>) or a
name of the existing file, starting with ‘<samp class="samp">/</samp>’ or ‘<samp class="samp">.</samp>’.  In the
latter case, the modification time of that file is used. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>.
</p>
<p>When <code class="command">--clamp-mtime</code> is also specified, files with
modification times earlier than <var class="var">date</var> will retain their actual
modification times, and <var class="var">date</var> will only be used for files whose
modification times are later than <var class="var">date</var>.
</p>
<a class="anchor" id="g_t_002d_002dmulti_002dvolume"></a></dd>
<dt><a id="index-multi_002dvolume_002c-summary"></a><span><samp class="option">--multi-volume</samp></span></dt>
<dt><samp class="option">-M</samp></dt>
<dd>
<p>Informs <code class="command">tar</code> that it should create or otherwise operate on a
multi-volume <code class="command">tar</code> archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>.
</p>
</dd>
<dt><a id="index-new_002dvolume_002dscript_002c-summary-1"></a><span><samp class="option">--new-volume-script</samp></span></dt>
<dd>
<p>(see <samp class="option">--info-script</samp>)
</p>
<a class="anchor" id="g_t_002d_002dnewer"></a></dd>
<dt><a id="index-newer_002c-summary"></a><span><samp class="option">--newer=<var class="var">date</var></samp></span></dt>
<dt><samp class="option">--after-date=<var class="var">date</var></samp></dt>
<dt><samp class="option">-N</samp></dt>
<dd>
<p>When creating an archive, <code class="command">tar</code> will only add files that have changed
since <var class="var">date</var>.  If <var class="var">date</var> begins with ‘<samp class="samp">/</samp>’ or ‘<samp class="samp">.</samp>’, it
is taken to be the name of a file whose data modification time specifies
the date.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dnewer_002dmtime"></a></dd>
<dt><a id="index-newer_002dmtime_002c-summary"></a><span><samp class="option">--newer-mtime=<var class="var">date</var></samp></span></dt>
<dd>
<p>Like <samp class="option">--newer</samp>, but add only files whose
contents have changed (as opposed to just <samp class="option">--newer</samp>, which will
also back up files for which any status information has
changed).  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#after">Operating Only on New Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dacls"></a></dd>
<dt><a id="index-no_002dacls_002c-summary"></a><span><samp class="option">--no-acls</samp></span></dt>
<dd><p>Disable the POSIX ACLs support.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">acls</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002danchored"></a></dd>
<dt><a id="index-no_002danchored_002c-summary"></a><span><samp class="option">--no-anchored</samp></span></dt>
<dd><p>An exclude pattern can match any subsequence of the name’s components.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dauto_002dcompress"></a></dd>
<dt><a id="index-no_002dauto_002dcompress_002c-summary"></a><span><samp class="option">--no-auto-compress</samp></span></dt>
<dd>
<p>Disables automatic compressed format recognition based on the archive
suffix.  See <a class="xref" href="/docs/gnu-tar/v1-35/en/01-guide/42-option-summary/#g_t_002d_002dauto_002dcompress">--auto-compress</a>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dcheck_002ddevice"></a></dd>
<dt><a id="index-no_002dcheck_002ddevice_002c-summary"></a><span><samp class="option">--no-check-device</samp></span></dt>
<dd><p>Do not check device numbers when creating a list of modified files
for incremental archiving.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#device-numbers">device numbers</a>, for
a detailed description.
</p>
<a class="anchor" id="g_t_002d_002dno_002ddelay_002ddirectory_002drestore"></a></dd>
<dt><a id="index-no_002ddelay_002ddirectory_002drestore_002c-summary"></a><span><samp class="option">--no-delay-directory-restore</samp></span></dt>
<dd>
<p>Modification times and permissions of extracted
directories are set when all files from this directory have been
extracted.  This is the default.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Directory-Modification-Times-and-Permissions">Directory Modification Times and Permissions</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dignore_002dcase"></a></dd>
<dt><a id="index-no_002dignore_002dcase_002c-summary"></a><span><samp class="option">--no-ignore-case</samp></span></dt>
<dd><p>Use case-sensitive matching.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dignore_002dcommand_002derror"></a></dd>
<dt><a id="index-no_002dignore_002dcommand_002derror_002c-summary"></a><span><samp class="option">--no-ignore-command-error</samp></span></dt>
<dd><p>Print warnings about subprocesses that terminated with a nonzero exit
code. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dnull"></a></dd>
<dt><a id="index-no_002dnull_002c-summary"></a><span><samp class="option">--no-null</samp></span></dt>
<dd>
<p>If the <samp class="option">--null</samp> option was given previously, this option
cancels its effect, so that any following <samp class="option">--files-from</samp>
options will expect their file lists to be newline-terminated.
</p>
<a class="anchor" id="g_t_002d_002dno_002doverwrite_002ddir"></a></dd>
<dt><a id="index-no_002doverwrite_002ddir_002c-summary"></a><span><samp class="option">--no-overwrite-dir</samp></span></dt>
<dd>
<p>Preserve metadata of existing directories when extracting files
from an archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dquote_002dchars"></a></dd>
<dt><a id="index-no_002dquote_002dchars_002c-summary"></a><span><samp class="option">--no-quote-chars=<var class="var">string</var></samp></span></dt>
<dd><p>Remove characters listed in <var class="var">string</var> from the list of quoted
characters set by the previous <samp class="option">--quote-chars</samp> option
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>).
</p>
<a class="anchor" id="g_t_002d_002dno_002drecursion"></a></dd>
<dt><a id="index-no_002drecursion_002c-summary"></a><span><samp class="option">--no-recursion</samp></span></dt>
<dd>
<p>With this option, <code class="command">tar</code> will not recurse into directories.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#recurse">Descending into Directories</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dsame_002downer"></a></dd>
<dt><a id="index-no_002dsame_002downer_002c-summary"></a><span><samp class="option">--no-same-owner</samp></span></dt>
<dt><samp class="option">-o</samp></dt>
<dd>
<p>When extracting an archive, do not attempt to preserve the owner
specified in the <code class="command">tar</code> archive.  This the default behavior
for ordinary users.
</p>
<a class="anchor" id="g_t_002d_002dno_002dsame_002dpermissions"></a></dd>
<dt><a id="index-no_002dsame_002dpermissions_002c-summary"></a><span><samp class="option">--no-same-permissions</samp></span></dt>
<dd>
<p>When extracting an archive, subtract the user’s umask from files from
the permissions specified in the archive.  This is the default behavior
for ordinary users.
</p>
<a class="anchor" id="g_t_002d_002dno_002dseek"></a></dd>
<dt><a id="index-no_002dseek_002c-summary"></a><span><samp class="option">--no-seek</samp></span></dt>
<dd>
<p>The archive media does not support seeks to arbitrary
locations.  Usually <code class="command">tar</code> determines automatically whether
the archive can be seeked or not.  Use this option to disable this
mechanism.
</p>
<a class="anchor" id="g_t_002d_002dno_002dselinux"></a></dd>
<dt><a id="index-no_002dselinux_002c-summary"></a><span><samp class="option">--no-selinux</samp></span></dt>
<dd><p>Disable SELinux context support.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">SELinux</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dunquote"></a></dd>
<dt><a id="index-no_002dunquote_002c-summary"></a><span><samp class="option">--no-unquote</samp></span></dt>
<dd><p>Treat all input file or member names literally, do not interpret
escape sequences.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#input-name-quoting">input name quoting</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dverbatim_002dfiles_002dfrom"></a></dd>
<dt><a id="index-no_002dverbatim_002dfiles_002dfrom_002c-summary"></a><span><samp class="option">--no-verbatim-files-from</samp></span></dt>
<dd>
<p>Instructs <abbr class="acronym">GNU</abbr> <code class="command">tar</code> to treat each line read from a file list as if it
were supplied in the command line.  I.e., leading and trailing
whitespace is removed and, if the result begins with a dash, it is
treated as a <abbr class="acronym">GNU</abbr> <code class="command">tar</code> command line option.
</p>
<p>This is default behavior.  This option is provided as a way to restore
it after <samp class="option">--verbatim-files-from</samp> option.
</p>
<p>It is implied by the <samp class="option">--no-null</samp> option.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#no_002dverbatim_002dfiles_002dfrom">no-verbatim-files-from</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dwildcards"></a></dd>
<dt><a id="index-no_002dwildcards_002c-summary"></a><span><samp class="option">--no-wildcards</samp></span></dt>
<dd><p>Do not use wildcards.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dwildcards_002dmatch_002dslash"></a></dd>
<dt><a id="index-no_002dwildcards_002dmatch_002dslash_002c-summary"></a><span><samp class="option">--no-wildcards-match-slash</samp></span></dt>
<dd><p>Wildcards do not match ‘<samp class="samp">/</samp>’.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dno_002dxattrs"></a></dd>
<dt><a id="index-no_002dxattrs_002c-summary"></a><span><samp class="option">--no-xattrs</samp></span></dt>
<dd><p>Disable extended attributes support.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs</a>.
</p>
<a class="anchor" id="g_t_002d_002dnull"></a></dd>
<dt><a id="index-null_002c-summary"></a><span><samp class="option">--null</samp></span></dt>
<dd>
<p>When <code class="command">tar</code> is using the <samp class="option">--files-from</samp> option, this option
instructs <code class="command">tar</code> to expect file names terminated with
<abbr class="acronym">NUL</abbr>, and to process file names verbatim.
</p>
<p>This means that <code class="command">tar</code> correctly works with file names that
contain newlines or begin with a dash.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#nul"><code class="code">NUL</code>-Terminated File Names</a>.
</p>
<p>See also <a class="ref" href="/docs/gnu-tar/source/v1-35/manual.html#verbatim_002dfiles_002dfrom">verbatim-files-from</a>.
</p>
<a class="anchor" id="g_t_002d_002dnumeric_002downer"></a></dd>
<dt><a id="index-numeric_002downer_002c-summary"></a><span><samp class="option">--numeric-owner</samp></span></dt>
<dd>
<p>This option will notify <code class="command">tar</code> that it should use numeric user
and group IDs when creating a <code class="command">tar</code> file, rather than names.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Attributes">Handling File Attributes</a>.
</p>
</dd>
<dt><samp class="option">-o</samp></dt>
<dd><p>The function of this option depends on the action <code class="command">tar</code> is
performing.  When extracting files, <samp class="option">-o</samp> is a synonym for
<samp class="option">--no-same-owner</samp>, i.e., it prevents <code class="command">tar</code> from
restoring ownership of files being extracted.
</p>
<p>When creating an archive, it is a synonym for
<samp class="option">--old-archive</samp>.  This behavior is for compatibility
with previous versions of <abbr class="acronym">GNU</abbr> <code class="command">tar</code>, and will be
removed in future releases.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Changes">Changes</a>, for more information.
</p>
<a class="anchor" id="g_t_002d_002doccurrence"></a></dd>
<dt><a id="index-occurrence_002c-summary"></a><span><samp class="option">--occurrence[=<var class="var">number</var>]</samp></span></dt>
<dd>
<p>This option can be used in conjunction with one of the subcommands
<samp class="option">--delete</samp>, <samp class="option">--diff</samp>, <samp class="option">--extract</samp> or
<samp class="option">--list</samp> when a list of files is given either on the command
line or via <samp class="option">-T</samp> option.
</p>
<p>This option instructs <code class="command">tar</code> to process only the <var class="var">number</var>th
occurrence of each named file.  <var class="var">Number</var> defaults to 1, so
</p>
<div class="example smallexample">
<pre class="example-preformatted">tar -x -f archive.tar --occurrence filename
</pre></div>
<p>will extract the first occurrence of the member <samp class="file">filename</samp> from <samp class="file">archive.tar</samp>
and will terminate without scanning to the end of the archive.
</p>
<a class="anchor" id="g_t_002d_002dold_002darchive"></a></dd>
<dt><a id="index-old_002darchive_002c-summary"></a><span><samp class="option">--old-archive</samp></span></dt>
<dd><p>Synonym for <samp class="option">--format=v7</samp>.
</p>
<a class="anchor" id="g_t_002d_002done_002dfile_002dsystem"></a></dd>
<dt><a id="index-one_002dfile_002dsystem_002c-summary"></a><span><samp class="option">--one-file-system</samp></span></dt>
<dd><p>Used when creating an archive.  Prevents <code class="command">tar</code> from recursing into
directories that are on different file systems from the current
directory.
</p>
<a class="anchor" id="g_t_002d_002done_002dtop_002dlevel"></a></dd>
<dt><a id="index-one_002dtop_002dlevel_002c-summary"></a><span><samp class="option">--one-top-level[=<var class="var">dir</var>]</samp></span></dt>
<dd><p>Tells <code class="command">tar</code> to create a new directory beneath the extraction directory
(or the one passed to <samp class="option">-C</samp>) and use it to guard against
tarbombs.  In the absence of <var class="var">dir</var> argument, the name of the new directory
will be equal to the base name of the archive (file name minus the
archive suffix, if recognized).  Any member names that do not begin
with that directory name (after
transformations from <samp class="option">--transform</samp> and
<samp class="option">--strip-components</samp>) will be prefixed with it.  Recognized
file name suffixes are ‘<samp class="samp">.tar</samp>’, and any compression suffixes
recognizable by See <a class="xref" href="/docs/gnu-tar/v1-35/en/01-guide/42-option-summary/#g_t_002d_002dauto_002dcompress">--auto-compress</a>.
</p>
<a class="anchor" id="g_t_002d_002doverwrite"></a></dd>
<dt><a id="index-overwrite_002c-summary"></a><span><samp class="option">--overwrite</samp></span></dt>
<dd>
<p>Overwrite existing files and directory metadata when extracting files
from an archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>.
</p>
<a class="anchor" id="g_t_002d_002doverwrite_002ddir"></a></dd>
<dt><a id="index-overwrite_002ddir_002c-summary"></a><span><samp class="option">--overwrite-dir</samp></span></dt>
<dd>
<p>Overwrite the metadata of existing directories when extracting files
from an archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Overwrite-Old-Files">Overwrite Old Files</a>.
</p>
<a class="anchor" id="g_t_002d_002downer"></a></dd>
<dt><a id="index-owner_002c-summary"></a><span><samp class="option">--owner=<var class="var">user</var></samp></span></dt>
<dd>
<p>Specifies that <code class="command">tar</code> should use <var class="var">user</var> as the owner of members
when creating archives, instead of the user associated with the source
file.  <var class="var">user</var> can specify a symbolic name, or a numeric
<abbr class="acronym">ID</abbr>, or both as <var class="var">name</var>:<var class="var">id</var>.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>.
</p>
<p>This option does not affect extraction from archives.  See also
<samp class="option">--owner-map</samp>, below.
</p>
<a class="anchor" id="g_t_002d_002downer_002dmap"></a></dd>
<dt><a id="index-owner_002dmap_002c-summary"></a><span><samp class="option">--owner-map=<var class="var">file</var></samp></span></dt>
<dd>
<p>Read owner translation map from <var class="var">file</var>.  This option allows to
translate only certain owner names or UIDs.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#override">Overriding File Metadata</a>, for a
detailed description.  When used together with <samp class="option">--owner</samp>
option, the latter affects only those files whose owner is not listed
in the <var class="var">file</var>.
</p>
<p>This option does not affect extraction from archives.
</p>
<a class="anchor" id="g_t_002d_002dpax_002doption"></a></dd>
<dt><a id="index-pax_002doption_002c-summary"></a><span><samp class="option">--pax-option=<var class="var">keyword-list</var></samp></span></dt>
<dd><p>This option enables creation of the archive in <abbr class="acronym">POSIX.1-2001</abbr>
format (see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#posix"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> and <abbr class="acronym">POSIX</abbr> <code class="command">tar</code></a>) and modifies the way <code class="command">tar</code> handles the
extended header keywords.  <var class="var">Keyword-list</var> is a comma-separated
list of keyword options.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#PAX-keywords">Controlling Extended Header Keywords</a>, for a detailed
discussion.
</p>
<a class="anchor" id="g_t_002d_002dportability"></a></dd>
<dt><a id="index-portability_002c-summary"></a><span><samp class="option">--portability</samp></span></dt>
<dt><samp class="option">--old-archive</samp></dt>
<dd><p>Synonym for <samp class="option">--format=v7</samp>.
</p>
<a class="anchor" id="g_t_002d_002dposix"></a></dd>
<dt><a id="index-posix_002c-summary"></a><span><samp class="option">--posix</samp></span></dt>
<dd><p>Same as <samp class="option">--format=posix</samp>.
</p>
<a class="anchor" id="g_t_002d_002dpreserve_002dorder"></a></dd>
<dt><a id="index-preserve_002dorder_002c-summary"></a><span><samp class="option">--preserve-order</samp></span></dt>
<dd>
<p>(See <samp class="option">--same-order</samp>; see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Same-Order">Same Order</a>.)
</p>
<a class="anchor" id="g_t_002d_002dpreserve_002dpermissions"></a><a class="index-entry-id" id="index-preserve_002dpermissions_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dsame_002dpermissions"></a></dd>
<dt><a id="index-same_002dpermissions_002c-summary"></a><span><samp class="option">--preserve-permissions</samp></span></dt>
<dt><samp class="option">--same-permissions</samp></dt>
<dt><samp class="option">-p</samp></dt>
<dd>
<p>When <code class="command">tar</code> is extracting an archive, it normally subtracts the
users’ umask from the permissions specified in the archive and uses
that number as the permissions to create the destination file.
Specifying this option instructs <code class="command">tar</code> that it should use the
permissions directly from the archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Setting-Access-Permissions">Setting Access Permissions</a>.
</p>
<a class="anchor" id="g_t_002d_002dquote_002dchars"></a></dd>
<dt><a id="index-quote_002dchars_002c-summary"></a><span><samp class="option">--quote-chars=<var class="var">string</var></samp></span></dt>
<dd><p>Always quote characters from <var class="var">string</var>, even if the selected
quoting style would not quote them (see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>).
</p>
<a class="anchor" id="g_t_002d_002dquoting_002dstyle"></a></dd>
<dt><a id="index-quoting_002dstyle_002c-summary"></a><span><samp class="option">--quoting-style=<var class="var">style</var></samp></span></dt>
<dd><p>Set quoting style to use when printing member and file names
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#quoting-styles">Quoting Member Names</a>). Valid <var class="var">style</var> values are:
<code class="code">literal</code>, <code class="code">shell</code>, <code class="code">shell-always</code>, <code class="code">c</code>,
<code class="code">escape</code>, <code class="code">locale</code>, and <code class="code">clocale</code>. Default quoting
style is <code class="code">escape</code>, unless overridden while configuring the
package.
</p>
<a class="anchor" id="g_t_002d_002dread_002dfull_002drecords"></a></dd>
<dt><a id="index-read_002dfull_002drecords_002c-summary"></a><span><samp class="option">--read-full-records</samp></span></dt>
<dt><samp class="option">-B</samp></dt>
<dd>
<p>Specifies that <code class="command">tar</code> should reblock its input, for reading
from pipes on systems with buggy implementations.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Reading">Options to Help Read Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002drecord_002dsize"></a></dd>
<dt><a id="index-record_002dsize_002c-summary"></a><span><samp class="option">--record-size=<var class="var">size</var>[<var class="var">suf</var>]</samp></span></dt>
<dd>
<p>Instructs <code class="command">tar</code> to use <var class="var">size</var> bytes per record when accessing the
archive.  The argument can be suffixed with a <em class="dfn">size suffix</em>, e.g.
<samp class="option">--record-size=10K</samp> for 10 Kilobytes.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#size_002dsuffixes">Table 9.1</a>,
for a list of valid suffixes.   See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Blocking-Factor">The Blocking Factor of an Archive</a>, for a detailed
description of this option.
</p>
<a class="anchor" id="g_t_002d_002drecursion"></a></dd>
<dt><a id="index-recursion_002c-summary"></a><span><samp class="option">--recursion</samp></span></dt>
<dd>
<p>With this option, <code class="command">tar</code> recurses into directories (default).
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#recurse">Descending into Directories</a>.
</p>
<a class="anchor" id="g_t_002d_002drecursive_002dunlink"></a></dd>
<dt><a id="index-recursive_002dunlink_002c-summary"></a><span><samp class="option">--recursive-unlink</samp></span></dt>
<dd>
<p>Remove existing
directory hierarchies before extracting directories of the same name
from the archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Recursive-Unlink">Recursive Unlink</a>.
</p>
<a class="anchor" id="g_t_002d_002dremove_002dfiles"></a></dd>
<dt><a id="index-remove_002dfiles_002c-summary"></a><span><samp class="option">--remove-files</samp></span></dt>
<dd>
<p>Directs <code class="command">tar</code> to remove the source file from the file system after
appending it to an archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#remove-files">Removing Files</a>.
</p>
<a class="anchor" id="g_t_002d_002drestrict"></a></dd>
<dt><a id="index-restrict_002c-summary"></a><span><samp class="option">--restrict</samp></span></dt>
<dd>
<p>Disable use of some potentially harmful <code class="command">tar</code> options.
Currently this option disables shell invocation from multi-volume menu
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>).
</p>
<a class="anchor" id="g_t_002d_002drmt_002dcommand"></a></dd>
<dt><a id="index-rmt_002dcommand_002c-summary"></a><span><samp class="option">--rmt-command=<var class="var">cmd</var></samp></span></dt>
<dd>
<p>Notifies <code class="command">tar</code> that it should use <var class="var">cmd</var> instead of
the default <samp class="file">/usr/libexec/rmt</samp> (see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Remote-Tape-Server">Remote Tape Server</a>).
</p>
<a class="anchor" id="g_t_002d_002drsh_002dcommand"></a></dd>
<dt><a id="index-rsh_002dcommand_002c-summary"></a><span><samp class="option">--rsh-command=<var class="var">cmd</var></samp></span></dt>
<dd>
<p>Notifies <code class="command">tar</code> that is should use <var class="var">cmd</var> to communicate with remote
devices.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Device">Device Selection and Switching</a>.
</p>
<a class="anchor" id="g_t_002d_002dsame_002dorder"></a></dd>
<dt><a id="index-same_002dorder_002c-summary"></a><span><samp class="option">--same-order</samp></span></dt>
<dt><samp class="option">--preserve-order</samp></dt>
<dt><samp class="option">-s</samp></dt>
<dd>
<p>This option is an optimization for <code class="command">tar</code> when running on machines with
small amounts of memory.  It informs <code class="command">tar</code> that the list of file
arguments has already been sorted to match the order of files in the
archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Same-Order">Same Order</a>.
</p>
<a class="anchor" id="g_t_002d_002dsame_002downer"></a></dd>
<dt><a id="index-same_002downer_002c-summary"></a><span><samp class="option">--same-owner</samp></span></dt>
<dd>
<p>When extracting an archive, <code class="command">tar</code> will attempt to preserve the owner
specified in the <code class="command">tar</code> archive with this option present.
This is the default behavior for the superuser; this option has an
effect only for ordinary users.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Attributes">Handling File Attributes</a>.
</p>
</dd>
<dt><a id="index-same_002dpermissions_002c-summary-1"></a><span><samp class="option">--same-permissions</samp></span></dt>
<dd>
<p>(See <samp class="option">--preserve-permissions</samp>; see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#Setting-Access-Permissions">Setting Access Permissions</a>.)
</p>
<a class="anchor" id="g_t_002d_002dseek"></a></dd>
<dt><a id="index-seek_002c-summary"></a><span><samp class="option">--seek</samp></span></dt>
<dt><samp class="option">-n</samp></dt>
<dd>
<p>Assume that the archive media supports seeks to arbitrary
locations.  Usually <code class="command">tar</code> determines automatically whether
the archive can be seeked or not.  This option is intended for use
in cases when such recognition fails.  It takes effect only if the
archive is open for reading (e.g. with <samp class="option">--list</samp> or
<samp class="option">--extract</samp> options).
</p>
<a class="anchor" id="g_t_002d_002dselinux"></a></dd>
<dt><a id="index-selinux_002c-summary"></a><span><samp class="option">--selinux</samp></span></dt>
<dd><p>Enable the SELinux context support.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">selinux</a>.
</p>
<a class="anchor" id="g_t_002d_002dshow_002ddefaults"></a></dd>
<dt><a id="index-show_002ddefaults_002c-summary"></a><span><samp class="option">--show-defaults</samp></span></dt>
<dd>
<p>Displays the default options used by <code class="command">tar</code> and exits
successfully.  This option is intended for use in shell scripts.
Here is an example of what you can see using this option:
</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar --show-defaults</kbd>
--format=gnu -f- -b20 --quoting-style=escape
--rmt-command=/usr/libexec/rmt --rsh-command=/usr/bin/rsh
</pre></div>
<p>Notice, that this option outputs only one line.  The example output
above has been split to fit page boundaries. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#defaults">Obtaining <abbr class="acronym">GNU</abbr> <code class="command">tar</code> default values</a>.
</p>
<a class="anchor" id="g_t_002d_002dshow_002domitted_002ddirs"></a></dd>
<dt><a id="index-show_002domitted_002ddirs_002c-summary"></a><span><samp class="option">--show-omitted-dirs</samp></span></dt>
<dd>
<p>Instructs <code class="command">tar</code> to mention the directories it is skipping when
operating on a <code class="command">tar</code> archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#show_002domitted_002ddirs">show-omitted-dirs</a>.
</p>
<a class="anchor" id="g_t_002d_002dshow_002dsnapshot_002dfield_002dranges"></a></dd>
<dt><a id="index-show_002dsnapshot_002dfield_002dranges_002c-summary"></a><span><samp class="option">--show-snapshot-field-ranges</samp></span></dt>
<dd>
<p>Displays the range of values allowed by this version of <code class="command">tar</code>
for each field in the snapshot file, then exits successfully.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Snapshot-Files">Format of the Incremental Snapshot Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dshow_002dtransformed_002dnames"></a><a class="index-entry-id" id="index-show_002dtransformed_002dnames_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dshow_002dstored_002dnames"></a></dd>
<dt><a id="index-show_002dstored_002dnames_002c-summary"></a><span><samp class="option">--show-transformed-names</samp></span></dt>
<dt><samp class="option">--show-stored-names</samp></dt>
<dd>
<p>Display file or member names after applying any transformations
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>).  In particular, when used in conjunction with one of
the archive creation operations it instructs <code class="command">tar</code> to list the
member names stored in the archive, as opposed to the actual file
names.  See <a class="xref" href="/docs/gnu-tar/v1-35/en/01-guide/23-list/#listing-member-and-file-names">listing member and file names</a>.
</p>
<a class="anchor" id="g_t_002d_002dskip_002dold_002dfiles"></a></dd>
<dt><a id="index-skip_002dold_002dfiles_002c-summary"></a><span><samp class="option">--skip-old-files</samp></span></dt>
<dd>
<p>Do not overwrite existing files when extracting files from an
archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Keep-Old-Files">Keep Old Files</a>.
</p>
<p>This option differs from <samp class="option">--keep-old-files</samp> in that it does not
treat such files as an error, instead it just silently avoids
overwriting them.
</p>
<p>The <samp class="option">--warning=existing-file</samp> option can be used together with
this option to produce warning messages about existing old files
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#warnings">Controlling Warning Messages</a>).
</p>
<a class="anchor" id="g_t_002d_002dsort"></a></dd>
<dt><a id="index-sort_002c-summary"></a><span><samp class="option">--sort=<var class="var">order</var></samp></span></dt>
<dd><p>Specify the directory sorting order when reading directories.
<var class="var">Order</var> may be one of the following:
</p>
<dl class="table">
<dt>‘<samp class="samp">none</samp>’</dt>
<dd><p>No directory sorting is performed. This is the default.
</p>
</dd>
<dt>‘<samp class="samp">name</samp>’</dt>
<dd><p>Sort the directory entries on name. The operating system may deliver
directory entries in a more or less random order, and sorting them
makes archive creation reproducible.
</p>
</dd>
<dt>‘<samp class="samp">inode</samp>’</dt>
<dd><p>Sort the directory entries on inode number. Sorting directories on
inode number may reduce the amount of disk seek operations when
creating an archive for some file systems.
</p>
</dd>
</dl>
<a class="anchor" id="g_t_002d_002dsparse"></a></dd>
<dt><a id="index-sparse_002c-summary"></a><span><samp class="option">--sparse</samp></span></dt>
<dt><samp class="option">-S</samp></dt>
<dd>
<p>Invokes a <abbr class="acronym">GNU</abbr> extension when adding files to an archive that handles
sparse files efficiently.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dsparse_002dversion"></a></dd>
<dt><a id="index-sparse_002dversion_002c-summary"></a><span><samp class="option">--sparse-version=<var class="var">version</var></samp></span></dt>
<dd>
<p>Specifies the <em class="dfn">format version</em> to use when archiving sparse
files.  Implies <samp class="option">--sparse</samp>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#sparse">Archiving Sparse Files</a>. For the description
of the supported sparse formats, See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Sparse-Formats">Storing Sparse Files</a>.
</p>
<a class="anchor" id="g_t_002d_002dstarting_002dfile"></a></dd>
<dt><a id="index-starting_002dfile_002c-summary"></a><span><samp class="option">--starting-file=<var class="var">name</var></samp></span></dt>
<dt><samp class="option">-K <var class="var">name</var></samp></dt>
<dd>
<p>This option affects extraction only; <code class="command">tar</code> will skip extracting
files in the archive until it finds one that matches <var class="var">name</var>.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Scarce">Coping with Scarce Resources</a>.
</p>
<a class="anchor" id="g_t_002d_002dstrip_002dcomponents"></a></dd>
<dt><a id="index-strip_002dcomponents_002c-summary"></a><span><samp class="option">--strip-components=<var class="var">number</var></samp></span></dt>
<dd><p>Strip given <var class="var">number</var> of leading components from file names before
extraction.  For example, if archive <samp class="file">archive.tar</samp> contained
<samp class="file">/some/file/name</samp>, then running
</p>
<div class="example smallexample">
<pre class="example-preformatted">tar --extract --file archive.tar --strip-components=2
</pre></div>
<p>would extract this file to file <samp class="file">name</samp>.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>.
</p>
<a class="anchor" id="g_t_002d_002dsuffix"></a></dd>
<dt><a id="index-suffix_002c-summary"></a><span><samp class="option">--suffix=<var class="var">suffix</var></samp></span></dt>
<dd>
<p>Alters the suffix <code class="command">tar</code> uses when backing up files from the default
‘<samp class="samp">~</samp>’.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#backup">Backup options</a>.
</p>
<a class="anchor" id="g_t_002d_002dtape_002dlength"></a></dd>
<dt><a id="index-tape_002dlength_002c-summary"></a><span><samp class="option">--tape-length=<var class="var">num</var>[<var class="var">suf</var>]</samp></span></dt>
<dt><samp class="option">-L <var class="var">num</var>[<var class="var">suf</var>]</samp></dt>
<dd>
<p>Specifies the length of tapes that <code class="command">tar</code> is writing as being
<var class="var">num</var> x 1024<!-- /@w --> bytes long.  If optional <var class="var">suf</var> is given, it
specifies a multiplicative factor to be used instead of 1024.  For
example, ‘<samp class="samp">-L2M</samp>’ means 2 megabytes.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#size_002dsuffixes">Table 9.1</a>, for a
list of allowed suffixes.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Using-Multiple-Tapes">Using Multiple Tapes</a>, for a detailed
discussion of this option.
</p>
<a class="anchor" id="g_t_002d_002dtest_002dlabel"></a></dd>
<dt><a id="index-test_002dlabel_002c-summary"></a><span><samp class="option">--test-label</samp></span></dt>
<dd>
<p>Reads the volume label.  If an argument is specified, test whether it
matches the volume label.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#g_t_002d_002dtest_002dlabel-option">--test-label option</a>.
</p>
<a class="anchor" id="g_t_002d_002dto_002dcommand"></a></dd>
<dt><a id="index-to_002dcommand_002c-summary"></a><span><samp class="option">--to-command=<var class="var">command</var></samp></span></dt>
<dd>
<p>During extraction <code class="command">tar</code> will pipe extracted files to the
standard input of <var class="var">command</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-an-External-Program">Writing to an External Program</a>.
</p>
<a class="anchor" id="g_t_002d_002dto_002dstdout"></a></dd>
<dt><a id="index-to_002dstdout_002c-summary"></a><span><samp class="option">--to-stdout</samp></span></dt>
<dt><samp class="option">-O</samp></dt>
<dd>
<p>During extraction, <code class="command">tar</code> will extract files to stdout rather
than to the file system.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Writing-to-Standard-Output">Writing to Standard Output</a>.
</p>
<a class="anchor" id="g_t_002d_002dtotals"></a></dd>
<dt><a id="index-totals_002c-summary"></a><span><samp class="option">--totals[=<var class="var">signo</var>]</samp></span></dt>
<dd>
<p>Displays the total number of bytes transferred when processing an
archive.  If an argument is given, these data are displayed on
request, when signal <var class="var">signo</var> is delivered to <code class="command">tar</code>.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#totals">totals</a>.
</p>
<a class="anchor" id="g_t_002d_002dtouch"></a></dd>
<dt><a id="index-touch_002c-summary"></a><span><samp class="option">--touch</samp></span></dt>
<dt><samp class="option">-m</samp></dt>
<dd>
<p>Sets the data modification time of extracted files to the extraction time,
rather than the data modification time stored in the archive.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Data-Modification-Times">Setting Data Modification Times</a>.
</p>
<a class="anchor" id="g_t_002d_002dtransform"></a><a class="index-entry-id" id="index-transform_002c-summary"></a>
<a class="anchor" id="g_t_002d_002dxform"></a></dd>
<dt><a id="index-xform_002c-summary"></a><span><samp class="option">--transform=<var class="var">sed-expr</var></samp></span></dt>
<dt><samp class="option">--xform=<var class="var">sed-expr</var></samp></dt>
<dd><p>Transform file or member names using <code class="command">sed</code> replacement expression
<var class="var">sed-expr</var>.  For example,
</p>
<div class="example smallexample">
<pre class="example-preformatted">$ <kbd class="kbd">tar cf archive.tar --transform 's,^\./,usr/,' .</kbd>
</pre></div>
<p>will add to <samp class="file">archive</samp> files from the current working directory,
replacing initial ‘<samp class="samp">./</samp>’ prefix with ‘<samp class="samp">usr/</samp>’. For the detailed
discussion, See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#transform">Modifying File and Member Names</a>.
</p>
<p>To see transformed member names in verbose listings, use
<samp class="option">--show-transformed-names</samp> option
(see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#show_002dtransformed_002dnames">show-transformed-names</a>).
</p>
</dd>
<dt><a id="index-uncompress_002c-summary-1"></a><span><samp class="option">--uncompress</samp></span></dt>
<dd>
<p>(See <samp class="option">--compress</samp>, see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>)
</p>
</dd>
<dt><a id="index-ungzip_002c-summary-1"></a><span><samp class="option">--ungzip</samp></span></dt>
<dd>
<p>(See <samp class="option">--gzip</samp>, see <a class="pxref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>)
</p>
<a class="anchor" id="g_t_002d_002dunlink_002dfirst"></a></dd>
<dt><a id="index-unlink_002dfirst_002c-summary"></a><span><samp class="option">--unlink-first</samp></span></dt>
<dt><samp class="option">-U</samp></dt>
<dd>
<p>Directs <code class="command">tar</code> to remove the corresponding file from the file
system before extracting it from the archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Unlink-First">Unlink First</a>.
</p>
<a class="anchor" id="g_t_002d_002dunquote"></a></dd>
<dt><a id="index-unquote_002c-summary"></a><span><samp class="option">--unquote</samp></span></dt>
<dd><p>Enable unquoting input file or member names (default).  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#input-name-quoting">input name quoting</a>.
</p>
<a class="anchor" id="g_t_002d_002duse_002dcompress_002dprogram"></a></dd>
<dt><a id="index-use_002dcompress_002dprogram_002c-summary"></a><span><samp class="option">--use-compress-program=<var class="var">prog</var></samp></span></dt>
<dt><samp class="option">-I=<var class="var">prog</var></samp></dt>
<dd>
<p>Instructs <code class="command">tar</code> to access the archive through <var class="var">prog</var>, which is
presumed to be a compression program of some sort.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
<a class="anchor" id="g_t_002d_002dutc"></a></dd>
<dt><a id="index-utc_002c-summary"></a><span><samp class="option">--utc</samp></span></dt>
<dd>
<p>Display file modification dates in <abbr class="acronym">UTC</abbr>.  This option implies
<samp class="option">--verbose</samp>.
</p>
<a class="anchor" id="g_t_002d_002dverbatim_002dfiles_002dfrom"></a></dd>
<dt><a id="index-verbatim_002dfiles_002dfrom_002c-summary"></a><span><samp class="option">--verbatim-files-from</samp></span></dt>
<dd>
<p>Instructs <abbr class="acronym">GNU</abbr> <code class="command">tar</code> to treat each line read from a file list as a file
name, even if it starts with a dash.
</p>
<p>File lists are supplied with the <samp class="option">--files-from</samp> (<samp class="option">-T</samp>)
option.  By default, each line read from a file list is first trimmed
off the leading and trailing whitespace and, if the result begins with
a dash, it is treated as a <abbr class="acronym">GNU</abbr> <code class="command">tar</code> command line option.
</p>
<p>Use the <samp class="option">--verbatim-files-from</samp> option to disable this special
handling.  This facilitates the use of <code class="command">tar</code> with file lists
created by <code class="command">file</code> command.
</p>
<p>This option affects all <samp class="option">--files-from</samp> options that occur after
it in the command line.  Its effect is reverted by the
<samp class="option">--no-verbatim-files-from</samp> option.
</p>
<p>This option is implied by the <samp class="option">--null</samp> option.
</p>
<p>See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verbatim_002dfiles_002dfrom">verbatim-files-from</a>.
</p>
<a class="anchor" id="g_t_002d_002dverbose"></a></dd>
<dt><a id="index-verbose_002c-summary"></a><span><samp class="option">--verbose</samp></span></dt>
<dt><samp class="option">-v</samp></dt>
<dd>
<p>Specifies that <code class="command">tar</code> should be more verbose about the
operations it is performing.  This option can be specified multiple
times for some operations to increase the amount of information displayed.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verbose">Checking <code class="command">tar</code> progress</a>.
</p>
<a class="anchor" id="g_t_002d_002dverify"></a></dd>
<dt><a id="index-verify_002c-summary"></a><span><samp class="option">--verify</samp></span></dt>
<dt><samp class="option">-W</samp></dt>
<dd>
<p>Verifies that the archive was correctly written when creating an
archive.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#verify">Verifying Data as It is Stored</a>.
</p>
<a class="anchor" id="g_t_002d_002dversion"></a></dd>
<dt><a id="index-version_002c-summary"></a><span><samp class="option">--version</samp></span></dt>
<dd>
<p>Print information about the program’s name, version, origin and legal
status, all on standard output, and then exit successfully.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#help"><abbr class="acronym">GNU</abbr> <code class="command">tar</code> documentation</a>.
</p>
<a class="anchor" id="g_t_002d_002dvolno_002dfile"></a></dd>
<dt><a id="index-volno_002dfile_002c-summary"></a><span><samp class="option">--volno-file=<var class="var">file</var></samp></span></dt>
<dd>
<p>Used in conjunction with <samp class="option">--multi-volume</samp>.  <code class="command">tar</code> will
keep track of which volume of a multi-volume archive it is working in
<var class="var">file</var>.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#volno_002dfile">volno-file</a>.
</p>
<a class="anchor" id="g_t_002d_002dwarning"></a></dd>
<dt><a id="index-warning_002c-summary"></a><span><samp class="option">--warning=<var class="var">keyword</var></samp></span></dt>
<dd>
<p>Enable or disable warning messages identified by <var class="var">keyword</var>.  The
messages are suppressed if <var class="var">keyword</var> is prefixed with ‘<samp class="samp">no-</samp>’.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#warnings">Controlling Warning Messages</a>.
</p>
<a class="anchor" id="g_t_002d_002dwildcards"></a></dd>
<dt><a id="index-wildcards_002c-summary"></a><span><samp class="option">--wildcards</samp></span></dt>
<dd><p>Use wildcards when matching member names with patterns.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dwildcards_002dmatch_002dslash"></a></dd>
<dt><a id="index-wildcards_002dmatch_002dslash_002c-summary"></a><span><samp class="option">--wildcards-match-slash</samp></span></dt>
<dd><p>Wildcards match ‘<samp class="samp">/</samp>’.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#controlling-pattern_002dmatching">Controlling Pattern-Matching</a>.
</p>
<a class="anchor" id="g_t_002d_002dxattrs"></a></dd>
<dt><a id="index-xattrs_002c-summary"></a><span><samp class="option">--xattrs</samp></span></dt>
<dd><p>Enable extended attributes support.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs</a>.
</p>
<a class="anchor" id="g_t_002d_002dxattrs_002dexclude"></a></dd>
<dt><a id="index-xattrs_002dexclude_002c-summary"></a><span><samp class="option">--xattrs-exclude=<var class="var">pattern</var></samp></span></dt>
<dd><p>Specify exclude pattern for xattr keys.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs-exclude</a>.
</p>
<a class="anchor" id="g_t_002d_002dxattrs_002dinclude"></a></dd>
<dt><a id="index-xattrs_002dinclude_002c-summary"></a><span><samp class="option">--xattrs-include=<var class="var">pattern</var>.</samp></span></dt>
<dd><p>Specify include pattern for xattr keys.  <var class="var">pattern</var> is a globbing
pattern, e.g. ‘<samp class="samp">--xattrs-include='user.*'</samp>’ to include
only attributes from the user namespace.
See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Extended-File-Attributes">xattrs-include</a>.
</p>
<a class="anchor" id="g_t_002d_002dxz"></a></dd>
<dt><a id="index-xz_002c-summary"></a><span><samp class="option">--xz</samp></span></dt>
<dt><samp class="option">-J</samp></dt>
<dd><p>Use <code class="command">xz</code> for compressing or decompressing the archives.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
</dd>
<dt><samp class="option">--zstd</samp></dt>
<dd><p>Use <code class="command">zstd</code> for compressing or decompressing the archives.  See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#gzip">Creating and Reading Compressed Archives</a>.
</p>
</dd>
</dl>
<hr/>
<h5 class="footnote-body-heading"><a href="/docs/gnu-tar/v1-35/en/01-guide/42-option-summary/#DOCF5" id="FOOT5">(5)</a></h5><p>Earlier versions of <abbr class="acronym">GNU</abbr> <code class="command">tar</code> understood <samp class="option">-l</samp> as a
synonym for <samp class="option">--one-file-system</samp>.  The current semantics, which
complies to UNIX98, was introduced with version
1.15.91. See <a class="xref" href="/docs/gnu-tar/source/v1-35/manual.html#Changes">Changes</a>, for more information.</p></div></div>
