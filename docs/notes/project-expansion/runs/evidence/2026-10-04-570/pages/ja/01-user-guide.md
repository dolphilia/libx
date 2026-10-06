---
title: "利用ガイド（gperf 3.3同梱・第3.2版）"
licenseSource: "gperf-guide"
---

このページは、固定したGNU gperf 3.3の公式リリースアーカイブに同梱された文書全体を掲載する、Libxの非公式な日本語訳です。利用ガイド自身の版表示は第3.2版（2024年10月28日）、CLIの版表示は3.3（2025年4月）です。原文の版の違いを保持しています。バージョン情報の日付は原典の取得日（2026-10-03）であり、上流のリリース日を示すものではありません。

[公式リリースアーカイブ](https://ftp.gnu.org/pub/gnu/gperf/gperf-3.3.tar.gz) — SHA-256 `fd87e0aba7e43ae054837afd6cd4db03a3f2693deb3619085e6ed9d8d9604ad8`。日本語訳、書式、内部リンク、明示した編集注記はLibxによる変更です。利用ガイドの許諾通知とGPLの章、およびCLIの著作権・ライセンス・免責通知とGPL全文は原英語を保持しています。参考文献の書誌は原表記を、索引は元のアルファベット別の配列を保持しています。

Libxによる変更日（日本標準時）: 2026-10-04。Libxの翻訳・書式・編集上の変更を含む利用ガイド全体を、以下に保持した原マニュアルの許諾通知と同じ条件で配布します。

<div class="gperf-original">

<H1><CODE>gperf</CODE> 3.2 利用ガイド</H1>
<H2>GNUの完全ハッシュ関数生成器</H2>
<H2>第3.2版、2024年10月28日</H2>
<ADDRESS>Douglas C. Schmidt</ADDRESS>
<ADDRESS>Bruno Haible</ADDRESS>
<P>
<P><HR><P>
<H1>目次</H1>
<UL>
<LI><A NAME="TOC1" HREF="#SEC1">GNU GENERAL PUBLIC LICENSE</A>
<LI><A NAME="TOC2" HREF="#SEC2">GNU <CODE>gperf</CODE>ユーティリティの貢献者</A>
<LI><A NAME="TOC3" HREF="#SEC3">2 はじめに</A>
<LI><A NAME="TOC4" HREF="#SEC4">3 静的検索構造とGNU <CODE>gperf</CODE></A>
<LI><A NAME="TOC5" HREF="#SEC5">4 GNU <CODE>gperf</CODE>の概要</A>
<UL>
<LI><A NAME="TOC6" HREF="#SEC6">4.1 <CODE>gperf</CODE>への入力形式</A>
<UL>
<LI><A NAME="TOC7" HREF="#SEC7">4.1.1 宣言</A>
<UL>
<LI><A NAME="TOC8" HREF="#SEC8">4.1.1.1 利用者が指定する<CODE>struct</CODE></A>
<LI><A NAME="TOC9" HREF="#SEC9">4.1.1.2 Gperfの宣言</A>
<LI><A NAME="TOC10" HREF="#SEC10">4.1.1.3 Cコードの取り込み</A>
</UL>
<LI><A NAME="TOC11" HREF="#SEC11">4.1.2 キーワード項目の形式</A>
<LI><A NAME="TOC12" HREF="#SEC12">4.1.3 追加のC関数の取り込み</A>
<LI><A NAME="TOC13" HREF="#SEC13">4.1.4 GNU <CODE>indent</CODE>向けの指示を置く場所</A>
</UL>
<LI><A NAME="TOC14" HREF="#SEC14">4.2 <CODE>gperf</CODE>が生成するCコードの出力形式</A>
<LI><A NAME="TOC15" HREF="#SEC15">4.3 NULバイトの使用</A>
<LI><A NAME="TOC16" HREF="#SEC16">4.4 識別子の制御</A>
<LI><A NAME="TOC17" HREF="#SEC17">4.5 出力の著作権</A>
</UL>
<LI><A NAME="TOC18" HREF="#SEC18">5 <CODE>gperf</CODE>の実行</A>
<UL>
<LI><A NAME="TOC19" HREF="#SEC19">5.1 出力ファイルの場所の指定</A>
<LI><A NAME="TOC20" HREF="#SEC20">5.2 入力ファイルの解釈に影響するオプション</A>
<LI><A NAME="TOC21" HREF="#SEC21">5.3 出力コードの言語を指定するオプション</A>
<LI><A NAME="TOC22" HREF="#SEC22">5.4 出力コードの詳細を調整するオプション</A>
<LI><A NAME="TOC23" HREF="#SEC23">5.5 <CODE>gperf</CODE>が使うアルゴリズムを変更するオプション</A>
<LI><A NAME="TOC24" HREF="#SEC24">5.6 情報の出力</A>
</UL>
<LI><A NAME="TOC25" HREF="#SEC25">6 <CODE>gperf</CODE>の既知の不具合と制限</A>
<LI><A NAME="TOC26" HREF="#SEC26">7 今後の課題</A>
<LI><A NAME="TOC27" HREF="#SEC27">8 参考文献</A>
<LI><A NAME="TOC28" HREF="#SEC28">概念索引</A>
</UL>
<P><HR><P>

<P>
Copyright (C) 1989-2024 Free Software Foundation, Inc.

</P>

<P>
Permission is granted to make and distribute verbatim copies of
this manual provided the copyright notice and this permission notice
are preserved on all copies.

</P>
<P>
Permission is granted to copy and distribute modified versions of this
manual under the conditions for verbatim copying, provided also that the
section entitled “GNU General Public License” is included
exactly as in the original, and provided that the entire resulting
derived work is distributed under the terms of a permission notice
identical to this one.

</P>
<P>
Permission is granted to copy and distribute translations of this manual
into another language, under the above conditions for modified versions,
except that the section entitled “GNU General Public License” may be
included in a translation approved by the author instead of in the
original English.

</P>



<H1><A NAME="SEC1" HREF="gperf.html#TOC1">GNU GENERAL PUBLIC LICENSE</A></H1>
<P>
Version 3, 29 June 2007

</P>


<PRE>
Copyright (C) 2007 Free Software Foundation, Inc. <A HREF="http://fsf.org/">http://fsf.org/</A>

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.
</PRE>


<H2>1.0  Preamble</H2>

<P>
The GNU General Public License is a free, copyleft license for
software and other kinds of works.

</P>
<P>
The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom
to share and change all versions of a program--to make sure it remains
free software for all its users.  We, the Free Software Foundation,
use the GNU General Public License for most of our software; it
applies also to any other work released this way by its authors.  You
can apply it to your programs, too.

</P>
<P>
When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

</P>
<P>
To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you
have certain responsibilities if you distribute copies of the
software, or if you modify it: responsibilities to respect the freedom
of others.

</P>
<P>
For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too,
receive or can get the source code.  And you must show them these
terms so they know their rights.

</P>
<P>
Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

</P>
<P>
For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

</P>
<P>
Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the
manufacturer can do so.  This is fundamentally incompatible with the
aim of protecting users' freedom to change the software.  The
systematic pattern of such abuse occurs in the area of products for
individuals to use, which is precisely where it is most unacceptable.
Therefore, we have designed this version of the GPL to prohibit the
practice for those products.  If such problems arise substantially in
other domains, we stand ready to extend this provision to those
domains in future versions of the GPL, as needed to protect the
freedom of users.

</P>
<P>
Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish
to avoid the special danger that patents applied to a free program
could make it effectively proprietary.  To prevent this, the GPL
assures that patents cannot be used to render the program non-free.

</P>
<P>
The precise terms and conditions for copying, distribution and
modification follow.

</P>

<H2>1.1  TERMS AND CONDITIONS</H2>


<OL>
<LI>Definitions.

“This License” refers to version 3 of the GNU General Public License.

“Copyright” also means copyright-like laws that apply to other kinds
of works, such as semiconductor masks.

“The Program” refers to any copyrightable work licensed under this
License.  Each licensee is addressed as “you”.  “Licensees” and
“recipients” may be individuals or organizations.

To “modify” a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of
an exact copy.  The resulting work is called a “modified version” of
the earlier work or a work “based on” the earlier work.

A “covered work” means either the unmodified Program or a work based
on the Program.

To “propagate” a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

To “convey” a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user
through a computer network, with no transfer of a copy, is not
conveying.

An interactive user interface displays “Appropriate Legal Notices” to
the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

<LI>Source Code.

The “source code” for a work means the preferred form of the work for
making modifications to it.  “Object code” means any non-source form
of a work.

A “Standard Interface” means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

The “System Libraries” of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
“Major Component”, in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

The “Corresponding Source” for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

The Corresponding Source need not include anything that users can
regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same
work.

<LI>Basic Permissions.

All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

You may make, run and propagate covered works that you do not convey,
without conditions so long as your license otherwise remains in force.
You may convey covered works to others for the sole purpose of having
them make modifications exclusively for you, or provide you with
facilities for running those works, provided that you comply with the
terms of this License in conveying all material for which you do not
control copyright.  Those thus making or running the covered works for
you must do so exclusively on your behalf, under your direction and
control, on terms that prohibit them from making any copies of your
copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the
conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

<LI>Protecting Users' Legal Rights From Anti-Circumvention Law.

No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such
circumvention is effected by exercising rights under this License with
respect to the covered work, and you disclaim any intention to limit
operation or modification of the work as a means of enforcing, against
the work's users, your or third parties' legal rights to forbid
circumvention of technological measures.

<LI>Conveying Verbatim Copies.

You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

<LI>Conveying Modified Source Versions.

You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these
conditions:


<OL>
<LI>

The work must carry prominent notices stating that you modified it,
and giving a relevant date.

<LI>

The work must carry prominent notices stating that it is released
under this License and any conditions added under section 7.  This
requirement modifies the requirement in section 4 to “keep intact all
notices”.

<LI>

You must license the entire work, as a whole, under this License to
anyone who comes into possession of a copy.  This License will
therefore apply, along with any applicable section 7 additional terms,
to the whole of the work, and all its parts, regardless of how they
are packaged.  This License gives no permission to license the work in
any other way, but it does not invalidate such permission if you have
separately received it.

<LI>

If the work has interactive user interfaces, each must display
Appropriate Legal Notices; however, if the Program has interactive
interfaces that do not display Appropriate Legal Notices, your work
need not make them do so.
</OL>

A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
“aggregate” if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

<LI>Conveying Non-Source Forms.

You may convey a covered work in object code form under the terms of
sections 4 and 5, provided that you also convey the machine-readable
Corresponding Source under the terms of this License, in one of these
ways:


<OL>
<LI>

Convey the object code in, or embodied in, a physical product
(including a physical distribution medium), accompanied by the
Corresponding Source fixed on a durable physical medium customarily
used for software interchange.

<LI>

Convey the object code in, or embodied in, a physical product
(including a physical distribution medium), accompanied by a written
offer, valid for at least three years and valid for as long as you
offer spare parts or customer support for that product model, to give
anyone who possesses the object code either (1) a copy of the
Corresponding Source for all the software in the product that is
covered by this License, on a durable physical medium customarily used
for software interchange, for a price no more than your reasonable
cost of physically performing this conveying of source, or (2) access
to copy the Corresponding Source from a network server at no charge.

<LI>

Convey individual copies of the object code with a copy of the written
offer to provide the Corresponding Source.  This alternative is
allowed only occasionally and noncommercially, and only if you
received the object code with such an offer, in accord with subsection
6b.

<LI>

Convey the object code by offering access from a designated place
(gratis or for a charge), and offer equivalent access to the
Corresponding Source in the same way through the same place at no
further charge.  You need not require recipients to copy the
Corresponding Source along with the object code.  If the place to copy
the object code is a network server, the Corresponding Source may be
on a different server (operated by you or a third party) that supports
equivalent copying facilities, provided you maintain clear directions
next to the object code saying where to find the Corresponding Source.
Regardless of what server hosts the Corresponding Source, you remain
obligated to ensure that it is available for as long as needed to
satisfy these requirements.

<LI>

Convey the object code using peer-to-peer transmission, provided you
inform other peers where the object code and Corresponding Source of
the work are being offered to the general public at no charge under
subsection 6d.

</OL>

A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

A “User Product” is either (1) a “consumer product”, which means any
tangible personal property which is normally used for personal,
family, or household purposes, or (2) anything designed or sold for
incorporation into a dwelling.  In determining whether a product is a
consumer product, doubtful cases shall be resolved in favor of
coverage.  For a particular product received by a particular user,
“normally used” refers to a typical or common use of that class of
product, regardless of the status of the particular user or of the way
in which the particular user actually uses, or expects or is expected
to use, the product.  A product is a consumer product regardless of
whether the product has substantial commercial, industrial or
non-consumer uses, unless such uses represent the only significant
mode of use of the product.

“Installation Information” for a User Product means any methods,
procedures, authorization keys, or other information required to
install and execute modified versions of a covered work in that User
Product from a modified version of its Corresponding Source.  The
information must suffice to ensure that the continued functioning of
the modified object code is in no case prevented or interfered with
solely because modification has been made.

If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or
updates for a work that has been modified or installed by the
recipient, or for the User Product in which it has been modified or
installed.  Access to a network may be denied when the modification
itself materially and adversely affects the operation of the network
or violates the rules and protocols for communication across the
network.

Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

<LI>Additional Terms.

“Additional permissions” are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders
of that material) supplement the terms of this License with terms:


<OL>
<LI>

Disclaiming warranty or limiting liability differently from the terms
of sections 15 and 16 of this License; or

<LI>

Requiring preservation of specified reasonable legal notices or author
attributions in that material or in the Appropriate Legal Notices
displayed by works containing it; or

<LI>

Prohibiting misrepresentation of the origin of that material, or
requiring that modified versions of such material be marked in
reasonable ways as different from the original version; or

<LI>

Limiting the use for publicity purposes of names of licensors or
authors of the material; or

<LI>

Declining to grant rights under trademark law for use of some trade
names, trademarks, or service marks; or

<LI>

Requiring indemnification of licensors and authors of that material by
anyone who conveys the material (or modified versions of it) with
contractual assumptions of liability to the recipient, for any
liability that these contractual assumptions directly impose on those
licensors and authors.
</OL>

All other non-permissive additional terms are considered “further
restrictions” within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions; the
above requirements apply either way.

<LI>Termination.

You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

However, if you cease all violation of this License, then your license
from a particular copyright holder is reinstated (a) provisionally,
unless and until the copyright holder explicitly and finally
terminates your license, and (b) permanently, if the copyright holder
fails to notify you of the violation by some reasonable means prior to
60 days after the cessation.

Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

<LI>Acceptance Not Required for Having Copies.

You are not required to accept this License in order to receive or run
a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

<LI>Automatic Licensing of Downstream Recipients.

Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

An “entity transaction” is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

<LI>Patents.

A “contributor” is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's “contributor version”.

A contributor's “essential patent claims” are all patent claims owned
or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, “control” includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

In the following three paragraphs, a “patent license” is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To “grant” such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  “Knowingly relying” means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

A patent license is “discriminatory” if it does not include within the
scope of its coverage, prohibits the exercise of, or is conditioned on
the non-exercise of one or more of the rights that are specifically
granted under this License.  You may not convey a covered work if you
are a party to an arrangement with a third party that is in the
business of distributing software, under which you make payment to the
third party based on the extent of your activity of conveying the
work, and under which the third party grants, to any of the parties
who would receive the covered work from you, a discriminatory patent
license (a) in connection with copies of the covered work conveyed by
you (or copies made from those copies), or (b) primarily for and in
connection with specific products or compilations that contain the
covered work, unless you entered into that arrangement, or that patent
license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

<LI>No Surrender of Others' Freedom.

If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey
a covered work so as to satisfy simultaneously your obligations under
this License and any other pertinent obligations, then as a
consequence you may not convey it at all.  For example, if you agree
to terms that obligate you to collect a royalty for further conveying
from those to whom you convey the Program, the only way you could
satisfy both those terms and this License would be to refrain entirely
from conveying the Program.

<LI>Use with the GNU Affero General Public License.

Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

<LI>Revised Versions of this License.

The Free Software Foundation may publish revised and/or new versions
of the GNU General Public License from time to time.  Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies that a certain numbered version of the GNU General Public
License “or any later version” applies to it, you have the option of
following the terms and conditions either of that numbered version or
of any later version published by the Free Software Foundation.  If
the Program does not specify a version number of the GNU General
Public License, you may choose any version ever published by the Free
Software Foundation.

If the Program specifies that a proxy can decide which future versions
of the GNU General Public License can be used, that proxy's public
statement of acceptance of a version permanently authorizes you to
choose that version for the Program.

Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

<LI>Disclaimer of Warranty.

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT
WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND
PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM PROVE
DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR
CORRECTION.

<LI>Limitation of Liability.

IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR
CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT
NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR
LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM
TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER
PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

<LI>Interpretation of Sections 15 and 16.

If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

</OL>


<H2>1.2  END OF TERMS AND CONDITIONS</H2>


<H2>1.3  How to Apply These Terms to Your New Programs</H2>

<P>
If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these
terms.

</P>
<P>
To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the “copyright” line and a pointer to where the full notice is found.

</P>

<PRE>
<VAR>one line to give the program's name and a brief idea of what it does.</VAR>
Copyright (C) <VAR>year</VAR> <VAR>name of author</VAR>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <A HREF="http://www.gnu.org/licenses/">http://www.gnu.org/licenses/</A>.
</PRE>

<P>
Also add information on how to contact you by electronic and paper mail.

</P>
<P>
If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

</P>

<PRE>
<VAR>program</VAR> Copyright (C) <VAR>year</VAR> <VAR>name of author</VAR>
This program comes with ABSOLUTELY NO WARRANTY; for details type <SAMP>&lsquo;show w&rsquo;</SAMP>.
This is free software, and you are welcome to redistribute it
under certain conditions; type <SAMP>&lsquo;show c&rsquo;</SAMP> for details.
</PRE>

<P>
The hypothetical commands <SAMP>&lsquo;show w&rsquo;</SAMP> and <SAMP>&lsquo;show c&rsquo;</SAMP> should show
the appropriate parts of the General Public License.  Of course, your
program's commands might be different; for a GUI interface, you would
use an “about box”.

</P>
<P>
You should also get your employer (if you work as a programmer) or school,
if any, to sign a “copyright disclaimer” for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<A HREF="http://www.gnu.org/licenses/">http://www.gnu.org/licenses/</A>.

</P>
<P>
The GNU General Public License does not permit incorporating your
program into proprietary programs.  If your program is a subroutine
library, you may consider it more useful to permit linking proprietary
applications with the library.  If this is what you want to do, use
the GNU Lesser General Public License instead of this License.  But
first, please read <A HREF="http://www.gnu.org/philosophy/why-not-lgpl.html">http://www.gnu.org/philosophy/why-not-lgpl.html</A>.

</P>


<H1><A NAME="SEC2" HREF="#TOC2">GNU <CODE>gperf</CODE>ユーティリティの貢献者</A></H1>

<UL>
<LI><A NAME="IDX1"></A>
GNU <CODE>gperf</CODE>完全ハッシュ関数生成ユーティリティは、Douglas C. SchmidtがGNU C++で作成しました。完全ハッシュ関数生成器の基本的な着想は、Keith BosticがCで書き、1984年頃にnet.sourcesで配布したアルゴリズムに由来します。現在のプログラムは、Keithの基本的な着想をカリフォルニア大学アーバイン校で大幅に改変・強化・拡張して実装したものです。バグ、パッチ、提案は<CODE>&#60;bug-gperf@gnu.org&#62;</CODE>へ報告してください。
<LI>
有用なコンパイラを提供し、私の制作物を発表する場を与えてくれたMichael TiemannとDoug Leaに、特に感謝します。
また、Adam de BoorとNels Olsonからは多くの助言や知見を得ました。それらは<CODE>gperf</CODE>の品質と機能を向上させるうえで大いに役立ちました。
<LI>
Bruno Haibleは検索アルゴリズムを改良し、最適化しました。また、信頼性を高めるために入力処理と出力処理を書き直し、テストスイートを追加しました。
</UL>

<H1><A NAME="SEC3" HREF="#TOC3">2 はじめに</A></H1>

<P>
<CODE>gperf</CODE>は、C++で書かれた完全ハッシュ関数生成器です。利用者が指定した<VAR>n</VAR>個の要素からなるキーワード集合<VAR>W</VAR>を、完全ハッシュ関数<VAR>F</VAR>に変換します。<VAR>F</VAR>は、<VAR>W</VAR>内のキーワードを0..<VAR>k</VAR>の範囲に一意に対応付けます。ここで<VAR>k</VAR> &#62;= <VAR>n-1</VAR>です。<VAR>k</VAR> = <VAR>n-1</VAR>なら、<VAR>F</VAR>は<EM>最小</EM>完全ハッシュ関数です。<CODE>gperf</CODE>は、0..<VAR>k</VAR>の要素からなる静的な検索テーブルと、2つのC関数を生成します。これらの関数は、検索テーブルを高々1回調べることで、指定した文字列<VAR>s</VAR>が<VAR>W</VAR>に含まれるかどうかを判定します。
</P>
<P>
<CODE>gperf</CODE>は現在、GNU C、GNU C++、GNU Java、GNU Pascal、GNU Modula 3、GNU indentを含む、実用および研究用の複数のコンパイラや言語処理ツールで、字句解析器の予約語認識器を生成するために使われています。<CODE>gperf</CODE>の完全なC++ソースコードは、<CODE>https://ftp.gnu.org/pub/gnu/gperf/</CODE>から入手できます。<CODE>gperf</CODE>の設計と実装をより詳しく説明した論文は、Second USENIX C++ Conferenceの論文集、または<CODE>http://www.cs.wustl.edu/~schmidt/resume.html</CODE>で入手できます。
</P>

<H1><A NAME="SEC4" HREF="#TOC4">3 静的検索構造とGNU <CODE>gperf</CODE></A></H1>
<P><A NAME="IDX2"></A></P>
<P>
<EM>静的検索構造</EM>は、<EM>初期化</EM>、<EM>挿入</EM>、<EM>取得</EM>などの基本操作を持つ抽象データ型です。概念的には、すべての挿入が、どの取得よりも先に行われます。実際には、<CODE>gperf</CODE>は、検索集合のキーワードと、利用者が指定した関連属性を含む<EM>静的</EM>配列を生成します。そのため、挿入には実質的に実行時のコストがかかりません。これは<EM>静的検索集合</EM>を表すのに役立つデータ構造です。静的検索集合は、ソフトウェアシステムの応用で頻繁に現れます。典型的な例には、コンパイラの予約語、アセンブラ命令のオペコード、シェルインタプリタの組み込みコマンドがあります。<EM>キーワード</EM>と呼ぶ検索集合の要素は、通常はプログラムの初期化時に一度だけ構造に挿入され、一般に実行時には変更されません。
</P>
<P>
静的検索構造には、配列、連結リスト、二分探索木、デジタル探索トライ、ハッシュテーブルなど、多数の実装があります。各方式には、空間の利用効率と検索時間の効率とのトレードオフがあります。たとえば、<VAR>n</VAR>個の要素からなる整列済み配列は空間効率がよいものの、二分探索による取得操作の平均時間計算量はlog <VAR>n</VAR>に比例します。一方、ハッシュテーブルの実装は、しばしば定数時間でテーブル項目を見つけられますが、通常は追加のメモリを必要とし、最悪の場合の性能がよくありません。
</P>
<P><A NAME="IDX3"></A>
<EM>最小完全ハッシュ関数</EM>は、ある種類の静的検索集合に対して最適な解を提供します。最小完全ハッシュ関数は、次の2つの性質で定義されます。
</P>
<UL>
<LI>静的検索集合内のキーワードを、ハッシュテーブルを高々<EM>1回</EM>調べることで認識できます。これが「完全」という性質です。
<LI>キーワードを格納するために実際に確保するメモリは、キーワード集合を収めるのにちょうど十分な大きさであり、<EM>それより大きくありません</EM>。これが「最小」という性質です。
</UL>
<P>
ほとんどの用途では、<EM>完全</EM>ハッシュ関数を生成する方が、<EM>最小完全</EM>ハッシュ関数を生成するよりはるかに容易です。さらに、実際には、最小ではない完全ハッシュ関数の方が最小完全ハッシュ関数より速く実行されることがよくあります。疎なキーワードテーブルを検索すると「null」の項目が見つかる確率が高まり、文字列比較が減るためです。<CODE>gperf</CODE>は、デフォルトではキーワード集合に対して<EM>ほぼ最小</EM>の完全ハッシュ関数を生成します。ただし、<CODE>gperf</CODE>には、最小性や完全性の程度を利用者が制御できる多数のオプションがあります。
</P>
<P>
静的検索集合は、時間が経過しても比較的安定していることがよくあります。たとえば、Adaの63個の予約語は、ほぼ10年間変わっていませんでした。そのため、後で何度も頻繁に使うのであれば、最適な検索構造を<EM>一度</EM>構築するために集中的に労力をかける価値があることがよくあります。<CODE>gperf</CODE>は、時間と空間の効率がよい検索構造を手作業で作る煩雑さを取り除きます。本格的なプログラミングプロジェクトで、有用かつ実用的なツールであることが実証されています。<CODE>gperf</CODE>の出力は現在、GNU C、GNU C++、GNU Java、GNU Pascal、GNU Modula 3を含む、実用および研究用の複数のコンパイラで使われています。最後の2つのコンパイラは、まだ公式のGNU配布物には含まれていません。各コンパイラは<CODE>gperf</CODE>を使い、それぞれの予約語を効率よく識別する静的検索構造を自動生成します。
</P>

<H1><A NAME="SEC5" HREF="#TOC5">4 GNU <CODE>gperf</CODE>の概要</A></H1>
<P>
完全ハッシュ関数生成器<CODE>gperf</CODE>は、入力ファイルから「キーワード」の集合を読み込みます。デフォルトでは標準入力から読み込みます。検索テーブルを高々1回調べることで、<EM>静的キーワード集合</EM>の要素を認識する完全ハッシュ関数を求めようとします。このような関数を生成できた場合、<CODE>gperf</CODE>はハッシュ計算とテーブル検索による認識を行う2つのCソースコードのルーチンを出力します。生成するCコードはすべて標準出力に送られます。以下で説明するコマンドラインオプションを使うと、<CODE>gperf</CODE>の入力形式や出力形式を変更できます。
</P>
<P>
デフォルトでは、<CODE>gperf</CODE>は時間効率のよいコードを作ろうとし、空間の利用効率はそれほど重視しません。ただし、実行時間と記憶領域とのトレードオフを調整できるオプションがあります。特に、生成するテーブルのサイズを大きくすると疎な検索構造となり、一般に検索が速くなります。逆に、データの記憶領域を最小限にするCの<CODE>switch</CODE>文方式を使うよう、<CODE>gperf</CODE>に指定することもできます。さらに、Cの<CODE>switch</CODE>を使うことで、実際にキーワードの取得時間が多少短くなる場合もあります。当然ながら、実際の結果は使用するCコンパイラによって異なります。
</P>
<P>
一般に、<CODE>gperf</CODE>は、各キーワードに一意の値が与えられる組み合わせが見つかるまで、ハッシュ計算に使うバイトに値を割り当てます。ハッシュ値の範囲が大きいほど、<CODE>gperf</CODE>が完全ハッシュ関数を見つけて生成しやすくなる、という経験則が役立ちます。<CODE>gperf</CODE>を最大限に活用する鍵は、実際に試してみることです。
</P>

<H2><A NAME="SEC6" HREF="#TOC6">4.1 <CODE>gperf</CODE>への入力形式</A></H2>
<P><A NAME="IDX4"></A><A NAME="IDX5"></A><A NAME="IDX6"></A><A NAME="IDX7"></A>
コマンドライン引数の一部、特に<SAMP>&lsquo;-t&rsquo;</SAMP>オプションを変えることで、入力ファイルの形式を制御できます。入力の見た目は、GNUユーティリティの<CODE>flex</CODE>や<CODE>bison</CODE>、またはUNIXユーティリティの<CODE>lex</CODE>や<CODE>yacc</CODE>に似ています。一般的な形式の概要は次のとおりです。
</P>
<PRE>
declarations
%%
keywords
%%
functions
</PRE>
<P>
<CODE>flex</CODE>や<CODE>bison</CODE>とは<EM>異なり</EM>、宣言セクションと関数セクションは省略できます。以下では、各セクションの入力形式を説明します。
</P>
<P>
<SAMP>&lsquo;-t&rsquo;</SAMP>オプションを指定しない場合、宣言セクション全体を省略できます。その場合、入力ファイルは最初のキーワードの行から直接始まります。たとえば、次のようになります。
</P>
<PRE>
january
february
march
april
...
</PRE>

<H3><A NAME="SEC7" HREF="#TOC7">4.1.1 宣言</A></H3>
<P>
キーワード入力ファイルには、任意のCの宣言や定義、コマンドラインオプションと同様に働く<CODE>gperf</CODE>の宣言、利用者が指定する<CODE>struct</CODE>を含めるためのセクションを、必要に応じて設けることができます。
</P>

<H4><A NAME="SEC8" HREF="#TOC8">4.1.1.1 利用者が指定する<CODE>struct</CODE></A></H4>
<P>
<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言が<EM>有効</EM>な場合、入力ファイルの宣言セクションの最後の要素として、Cの<CODE>struct</CODE>を指定する<EM>必要があります</EM>。このstructの最初のフィールドの型は、<SAMP>&lsquo;-P&rsquo;</SAMP>オプションを指定しない場合は<CODE>char *</CODE>または<CODE>const char *</CODE>、<SAMP>&lsquo;-P&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%pic&rsquo;</SAMP>宣言が有効な場合は<CODE>int</CODE>でなければなりません。最初のフィールドは<SAMP>&lsquo;name&rsquo;</SAMP>という名前にする必要がありますが、後述の<SAMP>&lsquo;-K&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define slot-name&rsquo;</SAMP>宣言を使うと名前を変更できます。
</P>
<P>一年の各月とその属性を入力とする簡単な例を示します。</P>
<PRE>
struct month { char *name; int number; int days; int leap_days; };
%%
january,   1, 31, 31
february,  2, 28, 29
march,     3, 31, 31
april,     4, 30, 30
may,       5, 31, 31
june,      6, 30, 30
july,      7, 31, 31
august,    8, 31, 31
september, 9, 30, 30
october,  10, 31, 31
november, 11, 30, 30
december, 12, 31, 31
</PRE>
<P><A NAME="IDX8"></A>
<CODE>struct</CODE>の宣言と、キーワードおよびその他のフィールドの一覧を区切るのは、連続する2つのパーセント記号<SAMP>&lsquo;%%&rsquo;</SAMP>です。UNIXユーティリティの<CODE>lex</CODE>と同様に、行の最初の列から左詰めで記述します。
</P>
<P>
<CODE>struct</CODE>がすでにインクルードファイル内で宣言されている場合は、次のような省略形で示すことができます。
</P>
<PRE>
struct month;
%%
january,   1, 31, 31
...
</PRE>

<H4><A NAME="SEC9" HREF="#TOC9">4.1.1.2 Gperfの宣言</A></H4>
<P>宣言セクションには、<CODE>gperf</CODE>の宣言を含めることができます。コマンドラインオプションと同様に、<CODE>gperf</CODE>の動作に影響します。実際、各宣言はそれぞれコマンドラインオプションに対応しています。宣言には次の3つの形式があります。</P>
<OL>
<LI><SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>のような、引数を取らない宣言。
<LI><SAMP>&lsquo;%switch=<VAR>count</VAR>&rsquo;</SAMP>のような、引数を取る宣言。
<LI><SAMP>&lsquo;%define lookup-function-name <VAR>name</VAR>&rsquo;</SAMP>のような、出力ファイル内の要素の名前を指定する宣言。
</OL>
<P>同じ宣言を入力ファイルとコマンドラインオプションの両方で指定した場合は、コマンドラインオプションの値が優先されます。</P>
<P>次の<CODE>gperf</CODE>宣言を利用できます。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;%delimiters=<VAR>delimiter-list</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX9"></A>キーワードとその属性を区切るための区切り文字を含む文字列を指定できます。デフォルトは「,」です。カンマや改行を含むキーワードを使うには、このオプションが必要です。
<DT><SAMP>&lsquo;%struct-type&rsquo;</SAMP>
<DD><A NAME="IDX10"></A>生成コードに<CODE>struct</CODE>型の宣言を含められます。例は前節を参照してください。
<DT><SAMP>&lsquo;%ignore-case&rsquo;</SAMP>
<DD><A NAME="IDX11"></A>ASCII文字の大文字と小文字を同等とみなします。文字列の比較では、大文字と小文字を区別せずに文字を比較します。ロケールに依存する大文字・小文字の対応は無視されることに注意してください。
<DT><SAMP>&lsquo;%language=<VAR>language-name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX12"></A>オプションの引数で指定した言語のコードを生成するよう、<CODE>gperf</CODE>に指示します。現在対応している言語は次のとおりです。
<DL COMPACT>
<DT><SAMP>&lsquo;KR-C&rsquo;</SAMP>
<DD>旧式のK&#38;R Cです。旧式のCコンパイラとANSI Cコンパイラで処理できますが、ANSI Cコンパイラでは<SAMP>&lsquo;const&rsquo;</SAMP>がないため、警告やエラーが出ることがあります。
<DT><SAMP>&lsquo;C&rsquo;</SAMP>
<DD>共通のCです。ANSI Cコンパイラで処理できます。また、このキーワードを認識しないコンパイラ向けに<CODE>#define const</CODE>で空の定義を与えれば、旧式のCコンパイラでも処理できます。
<DT><SAMP>&lsquo;ANSI-C&rsquo;</SAMP>
<DD>ANSI Cです。ANSI C（C89、ISO C90）コンパイラ、ISO C99コンパイラ、C++コンパイラで処理できます。
<DT><SAMP>&lsquo;C++&rsquo;</SAMP>
<DD>C++です。C++コンパイラで処理できます。
</DL>
デフォルトはANSI-Cです。
<DT><SAMP>&lsquo;%define slot-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX13"></A>この宣言が役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。デフォルトでは、キーワードを格納する構造体メンバーの識別子を<SAMP>&lsquo;name&rsquo;</SAMP>とみなします。このオプションで、そのメンバーの識別子を任意に選べます。ただし、指定した<CODE>struct</CODE>の最初のフィールドでなければならない点は変わりません。
<DT><SAMP>&lsquo;%define initializer-suffix <VAR>initializers</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX14"></A>この宣言が役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。空のハッシュテーブル項目で、<VAR>slot-name</VAR>より後にある構造体メンバーの初期化子を指定できます。初期化子の一覧はカンマで始める必要があります。デフォルトでは、出力コードは<VAR>slot-name</VAR>より後の構造体メンバーをゼロで初期化します。
<DT><SAMP>&lsquo;%define hash-function-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX15"></A>生成するハッシュ関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;hash&rsquo;</SAMP>です。このオプションにより、同じファイル内で2つのハッシュテーブルを使えます。
<DT><SAMP>&lsquo;%define lookup-function-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX16"></A>生成する検索関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;in_word_set&rsquo;</SAMP>です。このオプションにより、生成した複数のハッシュ関数を同じアプリケーションで使えます。
<DT><SAMP>&lsquo;%define class-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX17"></A>このオプションが役立つのは、<SAMP>&lsquo;-L C++&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%language=C++&rsquo;</SAMP>宣言を指定した場合だけです。生成するC++クラスの名前を指定できます。デフォルトの名前は<CODE>Perfect_Hash</CODE>です。
<DT><SAMP>&lsquo;%7bit&rsquo;</SAMP>
<DD><A NAME="IDX18"></A>生成するハッシュ関数と検索関数に引数として渡す文字列がすべて、7ビットASCII文字（0..127の範囲のバイト）だけで構成されることを指定します。ANSI Cの<CODE>isalnum</CODE>関数や<CODE>isgraph</CODE>関数は、バイトがこの範囲内にあることを保証<EM>しません</EM>。これを保証するのは、<SAMP>&lsquo;c &#62;= 'A' &#38;&#38; c &#60;= 'Z'&rsquo;</SAMP>のような明示的な検査だけです。
<DT><SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>
<DD><A NAME="IDX19"></A>文字列の比較を試みる前に、キーワードの長さを比較します。このオプションはバイナリ比較には必須です（<A HREF="#SEC15">4.3 NULバイトの使用</A>を参照）。長さの異なるキーワードを<CODE>strcmp</CODE>で比較しなくなるため、検索時の文字列比較の回数を減らせる場合もあります。ただし、検索テーブルの範囲が大きい場合、つまりswitchオプションの<SAMP>&lsquo;-S&rsquo;</SAMP>または<SAMP>&lsquo;%switch&rsquo;</SAMP>が有効でない場合は、<SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>を使うと生成するCコードのサイズが大幅に増える可能性があります。長さのテーブルが、検索テーブルの項目数と同じ数の要素を持つためです。
<DT><SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>
<DD><A NAME="IDX20"></A>文字列比較に<CODE>strncmp</CODE>関数を使うCコードを生成します。デフォルトでは<CODE>strcmp</CODE>を使います。
<DT><SAMP>&lsquo;%readonly-tables&rsquo;</SAMP>
<DD><A NAME="IDX21"></A>生成するすべての検索テーブルの内容を定数、つまり「読み取り専用」にします。多くのコンパイラでは、テーブルを読み取り専用メモリに置くことで、より効率のよいコードを生成できます。
<DT><SAMP>&lsquo;%enum&rsquo;</SAMP>
<DD><A NAME="IDX22"></A>#defineの代わりに、検索関数内のローカルなenumを使って定数値を定義します。これにより、異なる検索関数を同じファイル内に置くこともできます。James Clark <CODE>&#60;jjc@ai.mit.edu&#62;</CODE>に感謝します。
<DT><SAMP>&lsquo;%includes&rsquo;</SAMP>
<DD><A NAME="IDX23"></A>コードの先頭に、必要なシステムのインクルードファイル<CODE>&#60;string.h&#62;</CODE>を含めます。デフォルトでは含めないため、コードをコンパイルできるように、利用者自身がこのヘッダーファイルをインクルードする必要があります。
<DT><SAMP>&lsquo;%global-table&rsquo;</SAMP>
<DD><A NAME="IDX24"></A>キーワードの静的テーブルを、検索関数の中に隠すデフォルトの動作ではなく、静的なグローバル変数として生成します。
<DT><SAMP>&lsquo;%pic&rsquo;</SAMP>
<DD><A NAME="IDX25"></A>生成するテーブルを、共有ライブラリに組み込むために最適化します。生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言、または同じ働きをする<SAMP>&lsquo;-t&rsquo;</SAMP>オプションも指定した場合、利用者が定義するstructの最初のフィールドの型は、<SAMP>&lsquo;char *&rsquo;</SAMP>ではなく<SAMP>&lsquo;int&rsquo;</SAMP>でなければなりません。実際の文字列ではなく、文字列プール内のオフセットを格納するためです。そのオフセットを文字列に変換するには、<SAMP>&lsquo;stringpool + <VAR>o</VAR>&rsquo;</SAMP>という式を使えます。<VAR>o</VAR>はオフセットです。文字列プールの名前は、<SAMP>&lsquo;%define string-pool-name&rsquo;</SAMP>宣言で変更できます。
<DT><SAMP>&lsquo;%define string-pool-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX26"></A><SAMP>&lsquo;%pic&rsquo;</SAMP>宣言、または同じ働きをする<SAMP>&lsquo;-P&rsquo;</SAMP>オプションによって作る文字列プールの名前を指定できます。デフォルトの名前は<SAMP>&lsquo;stringpool&rsquo;</SAMP>です。この宣言により、<SAMP>&lsquo;%pic&rsquo;</SAMP>を使う場合に同じファイル内で2つのハッシュテーブルを使えます。<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言、または同じ働きをする<SAMP>&lsquo;-G&rsquo;</SAMP>オプションを指定した場合でも使えます。
<DT><SAMP>&lsquo;%null-strings&rsquo;</SAMP>
<DD><A NAME="IDX27"></A>空のキーワードテーブル項目に、空文字列の代わりにNULL文字列を使います。実行時に検査と分岐の命令が1つ増えますが、生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。ただし、<SAMP>&lsquo;%pic&rsquo;</SAMP>宣言ほどの効果はありません。
<DT><SAMP>&lsquo;%define constants-prefix <VAR>prefix</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX28"></A><CODE>TOTAL_KEYWORDS</CODE>、<CODE>MIN_WORD_LENGTH</CODE>、<CODE>MAX_WORD_LENGTH</CODE>などの定数に付ける接頭辞を指定できます。このオプションにより、<SAMP>&lsquo;-E&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%enum&rsquo;</SAMP>宣言を指定しない場合や、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。
<DT><SAMP>&lsquo;%define word-array-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX29"></A>ハッシュテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;wordlist&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。
<DT><SAMP>&lsquo;%define length-table-name <VAR>name</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX30"></A>長さのテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;lengthtable&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つの長さのテーブルを使えます。
<DT><SAMP>&lsquo;%switch=<VAR>count</VAR>&rsquo;</SAMP>
<DD><A NAME="IDX31"></A>生成するCコードで、配列の検索テーブルの代わりに<CODE>switch</CODE>文方式を使います。入力ファイルによっては、必要な実行時間と記憶領域の両方を減らせます。このオプションの引数は、生成する<CODE>switch</CODE>文の数を指定します。値が1なら全要素を含む1つの<CODE>switch</CODE>を生成し、値が2なら各<CODE>switch</CODE>に要素の半分ずつを含む2つのテーブルを生成します。ほかの値でも同様です。多くのCコンパイラは、大きな<CODE>switch</CODE>文のコードを正しく生成できないため、この指定が役立ちます。このオプションは、Keith Bosticによる元のCプログラムからも着想を得ました。
<DT><SAMP>&lsquo;%omit-struct-type&rsquo;</SAMP>
<DD><A NAME="IDX32"></A>型の宣言を出力ファイルへ転送しないようにします。型がすでにほかの場所で定義されている場合に使ってください。
</DL>
<H4><A NAME="SEC10" HREF="#TOC10">4.1.1.3 Cコードの取り込み</A></H4>
<P><A NAME="IDX33"></A><A NAME="IDX34"></A>GNUユーティリティの<CODE>flex</CODE>や<CODE>bison</CODE>と似た構文を使い、Cのソースコードとコメントをそのまま生成する出力ファイルに直接取り込めます。取り込みたい範囲を、左詰めの<SAMP>&lsquo;%{&rsquo;</SAMP>と<SAMP>&lsquo;%}&rsquo;</SAMP>の組で囲みます。この機能を示すため、前の例を基にした入力の一部を次に示します。</P>
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
<H3><A NAME="SEC11" HREF="#TOC11">4.1.2 キーワード項目の形式</A></H3>
<P>入力ファイルの2番目のセクションには、キーワードと、必要に応じて指定する関連属性の行を記述します。最初の列が<SAMP>&lsquo;#&rsquo;</SAMP>で始まる行はコメントとみなされます。<SAMP>&lsquo;#&rsquo;</SAMP>の後から、その次の改行までを含めてすべて無視されます。最初の列が<SAMP>&lsquo;%&rsquo;</SAMP>で始まる行はオプション宣言なので、キーワードのセクション内に置いてはいけません。</P>
<P>コメントでない各行の最初のフィールドは、必ずキーワードそのものです。指定方法は2つあります。文字列を囲む引用符を付けない単純な名前として指定するか、二重引用符で囲むC構文の文字列として指定します。後者では、<CODE>\"</CODE>、<CODE>\234</CODE>、<CODE>\xa8</CODE>などのバックスラッシュによるエスケープも使用できます。どちらの場合も、先頭に空白を置かず、行の最初から始めなければなりません。ここで「フィールド」は、最初の空白、カンマ、改行の直前までの範囲を指し、それらの区切り自体は含みません。Cの予約語の一部を使った簡単な例を次に示します。</P>
<PRE>
# These are a few C reserved words, see the c.gperf file 
# for a complete list of ANSI C reserved words.
unsigned
sizeof
switch
signed
if
default
for
while
return
</PRE>
<P><CODE>flex</CODE>や<CODE>bison</CODE>とは異なり、宣言セクションが空なら、最初の<SAMP>&lsquo;%%&rsquo;</SAMP>の印を省略できることに注意してください。</P>
<P>先頭のキーワードの後には、必要に応じて追加のフィールドを置けます。フィールドはカンマで区切り、行末で終わるようにします。その意味はすべて利用者が決めます。宣言セクションで指定する、利用者定義の<CODE>struct</CODE>の各要素を初期化するために使われます。<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言が有効で<EM>ない</EM>場合、これらのフィールドは単に無視されます。最後の例を除き、それまでのすべての例にはキーワードの属性が含まれています。</P>
<H3><A NAME="SEC12" HREF="#TOC12">4.1.3 追加のC関数の取り込み</A></H3>
<P>省略可能な3番目のセクションも、<CODE>flex</CODE>や<CODE>bison</CODE>の慣例とよく対応しています。最後の<SAMP>&lsquo;%%&rsquo;</SAMP>から入力ファイルの末尾まで、このセクションのすべてのテキストが、そのまま生成する出力ファイルに取り込まれます。当然ながら、このセクションのコードが有効なCであることを確認する責任は利用者にあります。</P>
<H3><A NAME="SEC13" HREF="#TOC13">4.1.4 GNU <CODE>indent</CODE>向けの指示を置く場所</A></H3>
<P><CODE>gperf</CODE>の入力ファイルにGNU <CODE>indent</CODE>を実行しようとすると、入力ファイルの解釈を制御する<SAMP>&lsquo;%%&rsquo;</SAMP>、<SAMP>&lsquo;%{&rsquo;</SAMP>、<SAMP>&lsquo;%}&rsquo;</SAMP>という<CODE>gperf</CODE>の指示を、GNU <CODE>indent</CODE>が理解しないことがわかります。そのため、GNU <CODE>indent</CODE>向けの指示を挿入する必要があります。具体的には、最も一般的な入力ファイルの構造を次のように仮定します。</P>
<PRE>
declarations part 1
%{
verbatim code
%}
declarations part 2
%%
keywords
%%
functions
</PRE>
<P><SAMP>&lsquo;*INDENT-OFF*&rsquo;</SAMP>と<SAMP>&lsquo;*INDENT-ON*&rsquo;</SAMP>のコメントは、次のように挿入します。</P>
<PRE>
/* *INDENT-OFF* */
declarations part 1
%{
/* *INDENT-ON* */
verbatim code
/* *INDENT-OFF* */
%}
declarations part 2
%%
keywords
%%
/* *INDENT-ON* */
functions
</PRE>
<H2><A NAME="SEC14" HREF="#TOC14">4.2 <CODE>gperf</CODE>が生成するCコードの出力形式</A></H2>
<P><A NAME="IDX35"></A></P>
<P>標準出力に生成するCコードの形式を制御するオプションがいくつかあります。2つのC関数が生成されます。名前は<CODE>hash</CODE>と<CODE>in_word_set</CODE>ですが、コマンドラインオプションで変更できます。どちらの関数にも、文字列<CODE>char *</CODE> <VAR>str</VAR>と、長さのパラメーター<CODE>int</CODE> <VAR>len</VAR>の2つの引数が必要です。デフォルトの関数プロトタイプは次のとおりです。</P>
<P><DL>
<DT><U>関数:</U> unsigned int <B>hash</B> <I>(const char * <VAR>str</VAR>, size_t <VAR>len</VAR>)</I>
<DD><A NAME="IDX36"></A>デフォルトでは、生成する<CODE>hash</CODE>関数は、利用者が指定する<VAR>str</VAR>内の複数のバイト位置を使って<EM>関連値</EM>テーブルを参照し、その値と<VAR>len</VAR>を加算して得られる整数値を返します。関連値テーブルはローカルな静的配列に格納されます。このテーブルは<CODE>gperf</CODE>内部で構築され、後で<SAMP>&lsquo;hash_table&rsquo;</SAMP>という名前の静的なローカルC配列として出力されます。使用する位置、つまり<VAR>str</VAR>へのインデックスは、<CODE>gperf</CODE>の実行時に<SAMP>&lsquo;-k&rsquo;</SAMP>オプションで指定します。詳細は後述の<EM>オプション</EM>の節（<A HREF="#SEC18">5 <CODE>gperf</CODE>の実行</A>）を参照してください。
</DL></P>
<P><DL>
<DT><U>関数:</U> <B>in_word_set</B> <I>(const char * <VAR>str</VAR>, size_t <VAR>len</VAR>)</I>
<DD><A NAME="IDX37"></A><VAR>str</VAR>がキーワード集合に含まれていれば、そのキーワードへのポインターを返します。より正確には、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合は、一致するキーワードの構造体へのポインターを返します。それ以外の場合は<CODE>NULL</CODE>を返します。
</DL></P>
<P><SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言を使わない場合、<VAR>str</VAR>は長さがちょうど<VAR>len</VAR>のNUL終端文字列でなければなりません。<SAMP>&lsquo;-c&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>を使う場合は、<VAR>str</VAR>は単に<VAR>len</VAR>バイトの配列であればよく、NUL終端は不要です。</P>
<P>この2つの関数の生成コードには、次のオプションが影響します。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-t&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--struct-type&rsquo;</SAMP><DD>利用者が定義する<CODE>struct</CODE>を使います。
<DT><SAMP>&lsquo;-S <VAR>total-switch-statements</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--switch=<VAR>total-switch-statements</VAR>&rsquo;</SAMP><DD><A NAME="IDX38"></A>大きな静的配列（疎な配列になる可能性もあります）を使う代わりに、1つ以上のCの<CODE>switch</CODE>文を生成します。実行時間と記憶領域の節約量はCコンパイラの最適化の程度によって異なりますが、この方法ではコードが小さくなり、速くなることがよくあります。
</DL>
<P><SAMP>&lsquo;-t&rsquo;</SAMP>と<SAMP>&lsquo;-S&rsquo;</SAMP>のオプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>と<SAMP>&lsquo;%switch&rsquo;</SAMP>の宣言を省略すると、デフォルトでは、キーワードを格納する<CODE>char *</CODE>配列と、その配列の空きを埋める追加の空文字列が生成されます。さまざまな入力・出力オプションを試し、生成されたCコードの実行時間を測定することで、キーワード集合の特性に応じた最適なオプションの選び方を判断できます。</P>
<H2><A NAME="SEC15" HREF="#TOC15">4.3 NULバイトの使用</A></H2>
<P><A NAME="IDX39"></A></P>
<P>デフォルトでは、<CODE>gperf</CODE>の生成コードは、Cで通常使われるゼロ終端文字列を扱います。そのため、入力ファイルのキーワードにはNULバイトを含められません。また、<CODE>hash</CODE>または<CODE>in_word_set</CODE>に渡す<VAR>str</VAR>引数は、NUL終端され、長さがちょうど<VAR>len</VAR>でなければなりません。</P>
<P><SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言を使う場合、<VAR>str</VAR>引数にNUL終端は不要です。<CODE>gperf</CODE>の生成コードは、<VAR>str</VAR>から始まる最初の<VAR>len</VAR>バイトだけにアクセスし、<VAR>len+1</VAR>バイトにはアクセスしません。ただし、入力ファイルのキーワードには、引き続きNULバイトを含められません。</P>
<P><SAMP>&lsquo;-l&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>宣言を使う場合、ハッシュテーブルはバイナリ比較を行います。入力ファイルのキーワードにNULバイトを含めることができ、文字列構文では<CODE>\000</CODE>または<CODE>\x00</CODE>と記述します。<CODE>gperf</CODE>の生成コードは、NULをほかのバイトと同様に扱います。また、この場合、<SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言は無視されます。</P>
<H2><A NAME="SEC16" HREF="#TOC16">4.4 識別子の制御</A></H2>
<P><CODE>gperf</CODE>の生成コードで定義する関数、テーブル、定数の識別子は、<CODE>gperf</CODE>の宣言、または対応するコマンドラインオプションで制御できます。これは次の3つの目的に役立ちます。</P>
<UL>
<LI>生成コードの見た目を整えること。この目的では、利用できる宣言やオプションを自由に使ってください。
<LI>ライブラリが外部に公開する識別子を制御すること。<CODE>gperf</CODE>の生成コードをライブラリに含め、ほかのライブラリとの衝突を避けるため、そのライブラリが外部に公開するすべての識別子を特定の接頭辞で始めたいとします。デフォルトで外部に公開される識別子は検索関数だけです。そのため、<SAMP>&lsquo;-N&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define lookup-function-name&rsquo;</SAMP>宣言を使えます。<SAMP>&lsquo;-L C++&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%language=C++&rsquo;</SAMP>宣言を使う場合、外部に公開される要素はクラスだけです。その名前は、<SAMP>&lsquo;-Z&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define class-name&rsquo;</SAMP>宣言で制御します。
<LI>単一のコンパイル単位に、複数の<CODE>gperf</CODE>生成コードを含めること。異なる入力ファイルを使って<CODE>gperf</CODE>を複数回実行し、生成コードを同じソースファイルから取り込みたいとします。この場合、外部に公開する識別子だけでなく、<SAMP>&lsquo;static&rsquo;</SAMP>スコープを持つ関数の名前、型、定数も変更する必要があります。デフォルトでは、検索関数、ハッシュ関数、定数を考慮する必要があります。そのため、<SAMP>&lsquo;-N&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define lookup-function-name&rsquo;</SAMP>宣言）、<SAMP>&lsquo;-H&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define hash-function-name&rsquo;</SAMP>宣言）、<SAMP>&lsquo;--constants-prefix&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define constants-prefix&rsquo;</SAMP>宣言）を使うとよいでしょう。<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を使う場合は、キーワード配列と、存在する場合は長さのテーブルと文字列プールも考慮する必要があります。つまり、<SAMP>&lsquo;-W&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define word-array-name&rsquo;</SAMP>宣言を使うとよいでしょう。<SAMP>&lsquo;-l&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>宣言を使う場合は、<SAMP>&lsquo;--length-table-name&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define length-table-name&rsquo;</SAMP>宣言を使うとよいでしょう。<SAMP>&lsquo;-P&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%pic&rsquo;</SAMP>宣言を使う場合は、<SAMP>&lsquo;-Q&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define string-pool-name&rsquo;</SAMP>宣言を使うとよいでしょう。
</UL>
<H2><A NAME="SEC17" HREF="#TOC17">4.5 出力の著作権</A></H2>
<P><A NAME="IDX40"></A></P>
<P><CODE>gperf</CODE>にはGPLが適用されますが、それによって<CODE>gperf</CODE>の生成する出力にもGPLが適用されるわけではありません。出力に<CODE>gperf</CODE>のソースコードから直接含まれるテキストは、ごく小さな断片、長さにして約7行だけであり、意味を持つには小さすぎるためです。そのため、出力はGPLバージョン3でいう「<CODE>gperf</CODE>を基にした著作物」には当たりません。</P>
<P>一方、<CODE>gperf</CODE>の生成する出力は、入力ファイルのほぼすべてを含みます。そのため、出力は米国著作権法でいう入力の「二次的著作物」であり、その著作権上の扱いは入力の著作権に依存します。多くのソフトウェアライセンスでは、出力には、<CODE>gperf</CODE>に渡した入力と同じライセンスが適用され、著作権者も同じになります。</P>
<H1><A NAME="SEC18" HREF="#TOC18">5 <CODE>gperf</CODE>の実行</A></H1>
<P><CODE>gperf</CODE>には<EM>多数の</EM>オプションがあります。実際のアプリケーションでプログラムを便利に使えるようにするために追加されました。<SAMP>&lsquo;--help&rsquo;</SAMP>オプションで、いつでも実行時のヘルプを参照できます。以下にオプションの一覧を示します。</P>
<H2><A NAME="SEC19" HREF="#TOC19">5.1 出力ファイルの場所の指定</A></H2>
<DL COMPACT><DT><SAMP>&lsquo;--output-file=<VAR>file</VAR>&rsquo;</SAMP><DD>出力を書き込むファイルの名前を指定できます。</DL>
<P>出力ファイルを指定しない場合、または<SAMP>&lsquo;-&rsquo;</SAMP>を指定した場合、結果は標準出力に書き込まれます。</P>
<H2><A NAME="SEC20" HREF="#TOC20">5.2 入力ファイルの解釈に影響するオプション</A></H2>
<P>これらのオプションは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-e <VAR>keyword-delimiter-list</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--delimiters=<VAR>keyword-delimiter-list</VAR>&rsquo;</SAMP><DD><A NAME="IDX41"></A>キーワードとその属性を区切るための区切り文字を含む文字列を指定できます。デフォルトは「,」です。カンマや改行を含むキーワードを使うには、このオプションが必要です。便利な方法として、-e'TAB'を使うことができます。ここでTABは、実際のタブ文字を表します。
<DT><SAMP>&lsquo;-t&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--struct-type&rsquo;</SAMP><DD>生成コードに<CODE>struct</CODE>型の宣言を含められます。連続する2つの<SAMP>&lsquo;%%&rsquo;</SAMP>より前のテキストはすべて、型宣言の一部とみなされます。その後にキーワードと追加のフィールドを記述でき、1行につきフィールドの組を1つ置きます。このリリースには、Ada、C、C++、Pascal、Modula 2、Modula 3、JavaScriptの予約語に対して完全ハッシュテーブルと関数を生成する例が含まれています。
<DT><SAMP>&lsquo;--ignore-case&rsquo;</SAMP><DD>ASCII文字の大文字と小文字を同等とみなします。文字列の比較では、大文字と小文字を区別せずに文字を比較します。ロケールに依存する大文字・小文字の対応は無視されることに注意してください。そのため、適切に国際化された、またはロケールを考慮した大文字・小文字の対応を使う必要がある場合、このオプションは適していません。たとえば、トルコ語ロケールでは、ASCIIの小文字<SAMP>&lsquo;i&rsquo;</SAMP>に対応する大文字は、非ASCII文字の<SAMP>&lsquo;capital i with dot above&rsquo;</SAMP>、つまり上に点が付いた大文字Iです。この場合、<CODE>gperf</CODE>の生成関数に文字列を渡す前に、大文字または小文字への変換を行う方が適切です。
</DL>
<H2><A NAME="SEC21" HREF="#TOC21">5.3 出力コードの言語を指定するオプション</A></H2>
<P>これらのオプションは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-L <VAR>generated-language-name</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--language=<VAR>generated-language-name</VAR>&rsquo;</SAMP><DD>オプションの引数で指定した言語のコードを生成するよう、<CODE>gperf</CODE>に指示します。現在対応している言語は次のとおりです。
<DL COMPACT>
<DT><SAMP>&lsquo;KR-C&rsquo;</SAMP><DD>旧式のK&#38;R Cです。旧式のCコンパイラとANSI Cコンパイラで処理できますが、ANSI Cコンパイラでは<SAMP>&lsquo;const&rsquo;</SAMP>がないため、警告やエラーが出ることがあります。
<DT><SAMP>&lsquo;C&rsquo;</SAMP><DD>共通のCです。ANSI Cコンパイラで処理できます。また、このキーワードを認識しないコンパイラ向けに<CODE>#define const</CODE>で空の定義を与えれば、旧式のCコンパイラでも処理できます。
<DT><SAMP>&lsquo;ANSI-C&rsquo;</SAMP><DD>ANSI Cです。ANSI CコンパイラとC++コンパイラで処理できます。
<DT><SAMP>&lsquo;C++&rsquo;</SAMP><DD>C++です。C++コンパイラで処理できます。
</DL>
デフォルトはANSI-Cです。
<DT><SAMP>&lsquo;-a&rsquo;</SAMP><DD>このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。
<DT><SAMP>&lsquo;-g&rsquo;</SAMP><DD>このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。
</DL>
<H2><A NAME="SEC22" HREF="#TOC22">5.4 出力コードの詳細を調整するオプション</A></H2>

<P>
これらのオプションの多くは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。
</P>
<DL COMPACT>

<DT><SAMP>&lsquo;-K <VAR>slot-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--slot-name=<VAR>slot-name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX42"></A>このオプションが役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。デフォルトでは、キーワードを格納する構造体メンバーの識別子を<SAMP>&lsquo;name&rsquo;</SAMP>とみなします。このオプションで、そのメンバーの識別子を任意に選べます。ただし、指定した<CODE>struct</CODE>の最初のフィールドでなければならない点は変わりません。

<DT><SAMP>&lsquo;-F <VAR>initializers</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--initializer-suffix=<VAR>initializers</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX43"></A>このオプションが役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。空のハッシュテーブル項目で、<VAR>slot-name</VAR>より後にある構造体メンバーの初期化子を指定できます。初期化子の一覧はカンマで始める必要があります。デフォルトでは、出力コードは<VAR>slot-name</VAR>より後の構造体メンバーをゼロで初期化します。

<DT><SAMP>&lsquo;-H <VAR>hash-function-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--hash-function-name=<VAR>hash-function-name</VAR>&rsquo;</SAMP>
<DD>
生成するハッシュ関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;hash&rsquo;</SAMP>です。このオプションにより、同じファイル内で2つのハッシュテーブルを使えます。

<DT><SAMP>&lsquo;-N <VAR>lookup-function-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--lookup-function-name=<VAR>lookup-function-name</VAR>&rsquo;</SAMP>
<DD>
生成する検索関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;in_word_set&rsquo;</SAMP>です。このオプションにより、生成した複数のハッシュ関数を同じアプリケーションで使えます。

<DT><SAMP>&lsquo;-Z <VAR>class-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--class-name=<VAR>class-name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX44"></A>このオプションが役立つのは、<SAMP>&lsquo;-L C++&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%language=C++&rsquo;</SAMP>宣言を指定した場合だけです。生成するC++クラスの名前を指定できます。デフォルトの名前は<CODE>Perfect_Hash</CODE>です。

<DT><SAMP>&lsquo;-7&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--seven-bit&rsquo;</SAMP>
<DD>
生成するハッシュ関数と検索関数に引数として渡す文字列がすべて、7ビットASCII文字（0..127の範囲のバイト）だけで構成されることを指定します。ANSI Cの<CODE>isalnum</CODE>関数や<CODE>isgraph</CODE>関数は、バイトがこの範囲内にあることを保証<EM>しません</EM>。これを保証するのは、<SAMP>&lsquo;c &#62;= 'A' &#38;&#38; c &#60;= 'Z'&rsquo;</SAMP>のような明示的な検査だけです。これは2.7より前の<CODE>gperf</CODE>のデフォルトでしたが、現在は8ビット文字とマルチバイト文字のサポートがデフォルトです。

<DT><SAMP>&lsquo;-l&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--compare-lengths&rsquo;</SAMP>
<DD>
文字列の比較を試みる前に、キーワードの長さを比較します。このオプションはバイナリ比較には必須です（<A HREF="#SEC15">4.3 NULバイトの使用</A>を参照）。長さの異なるキーワードを<CODE>strcmp</CODE>で比較しなくなるため、検索時の文字列比較の回数を減らせる場合もあります。ただし、検索テーブルの範囲が大きい場合、つまりswitchオプションの<SAMP>&lsquo;-S&rsquo;</SAMP>または<SAMP>&lsquo;%switch&rsquo;</SAMP>が有効でない場合は、<SAMP>&lsquo;-l&rsquo;</SAMP>を使うと生成するCコードのサイズが大幅に増える可能性があります。長さのテーブルが、検索テーブルの項目数と同じ数の要素を持つためです。

<DT><SAMP>&lsquo;-c&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--compare-strncmp&rsquo;</SAMP>
<DD>
文字列比較に<CODE>strncmp</CODE>関数を使うCコードを生成します。デフォルトでは<CODE>strcmp</CODE>を使います。

<DT><SAMP>&lsquo;-C&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--readonly-tables&rsquo;</SAMP>
<DD>
生成するすべての検索テーブルの内容を定数、つまり「読み取り専用」にします。多くのコンパイラでは、テーブルを読み取り専用メモリに置くことで、より効率のよいコードを生成できます。

<DT><SAMP>&lsquo;-E&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--enum&rsquo;</SAMP>
<DD>
<A NAME="IDX45"></A>#defineの代わりに、検索関数内のローカルなenumを使って定数値を定義します。これにより、異なる検索関数を同じファイル内に置くこともできます。James Clark <CODE>&#60;jjc@ai.mit.edu&#62;</CODE>に感謝します。

<DT><SAMP>&lsquo;-I&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--includes&rsquo;</SAMP>
<DD>
コードの先頭に、必要なシステムのインクルードファイル<CODE>&#60;string.h&#62;</CODE>を含めます。デフォルトでは含めないため、コードをコンパイルできるように、利用者自身がこのヘッダーファイルをインクルードする必要があります。

<DT><SAMP>&lsquo;-G&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--global-table&rsquo;</SAMP>
<DD>
キーワードの静的テーブルを、検索関数の中に隠すデフォルトの動作ではなく、静的なグローバル変数として生成します。

<DT><SAMP>&lsquo;-P&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--pic&rsquo;</SAMP>
<DD>
生成するテーブルを、共有ライブラリに組み込むために最適化します。生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言も指定した場合、利用者が定義するstructの最初のフィールドの型は、<SAMP>&lsquo;char *&rsquo;</SAMP>ではなく<SAMP>&lsquo;int&rsquo;</SAMP>でなければなりません。実際の文字列ではなく、文字列プール内のオフセットを格納するためです。そのオフセットを文字列に変換するには、<SAMP>&lsquo;stringpool + <VAR>o</VAR>&rsquo;</SAMP>という式を使えます。<VAR>o</VAR>はオフセットです。文字列プールの名前は、<SAMP>&lsquo;--string-pool-name&rsquo;</SAMP>オプションで変更できます。

<DT><SAMP>&lsquo;-Q <VAR>string-pool-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--string-pool-name=<VAR>string-pool-name</VAR>&rsquo;</SAMP>
<DD>
<SAMP>&lsquo;-P&rsquo;</SAMP>オプションによって作る文字列プールの名前を指定できます。デフォルトの名前は<SAMP>&lsquo;stringpool&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-P&rsquo;</SAMP>を使う場合に同じファイル内で2つのハッシュテーブルを使えます。<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも使えます。

<DT><SAMP>&lsquo;--null-strings&rsquo;</SAMP>
<DD>
空のキーワードテーブル項目に、空文字列の代わりにNULL文字列を使います。実行時に検査と分岐の命令が1つ増えますが、生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。ただし、<SAMP>&lsquo;-P&rsquo;</SAMP>オプションほどの効果はありません。

<DT><SAMP>&lsquo;--constants-prefix=<VAR>prefix</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX46"></A><CODE>TOTAL_KEYWORDS</CODE>、<CODE>MIN_WORD_LENGTH</CODE>、<CODE>MAX_WORD_LENGTH</CODE>などの定数に付ける接頭辞を指定できます。このオプションにより、<SAMP>&lsquo;-E&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%enum&rsquo;</SAMP>宣言を指定しない場合や、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。

<DT><SAMP>&lsquo;-W <VAR>hash-table-array-name</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--word-array-name=<VAR>hash-table-array-name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX47"></A>ハッシュテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;wordlist&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。

<DT><SAMP>&lsquo;--length-table-name=<VAR>length-table-array-name</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX48"></A>長さのテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;lengthtable&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つの長さのテーブルを使えます。

<DT><SAMP>&lsquo;-S <VAR>total-switch-statements</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--switch=<VAR>total-switch-statements</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX49"></A>生成するCコードで、配列の検索テーブルの代わりに<CODE>switch</CODE>文方式を使います。入力ファイルによっては、必要な実行時間と記憶領域の両方を減らせます。このオプションの引数は、生成する<CODE>switch</CODE>文の数を指定します。値が1なら全要素を含む1つの<CODE>switch</CODE>を生成し、値が2なら各<CODE>switch</CODE>に要素の半分ずつを含む2つのテーブルを生成します。ほかの値でも同様です。多くのCコンパイラは、大きな<CODE>switch</CODE>文のコードを正しく生成できないため、この指定が役立ちます。このオプションは、Keith Bosticによる元のCプログラムからも着想を得ました。

<DT><SAMP>&lsquo;-T&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--omit-struct-type&rsquo;</SAMP>
<DD>
型の宣言を出力ファイルへ転送しないようにします。型がすでにほかの場所で定義されている場合に使ってください。

<DT><SAMP>&lsquo;-p&rsquo;</SAMP>
<DD>
このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。

</DL>



<H2><A NAME="SEC23" HREF="#TOC23">5.5 <CODE>gperf</CODE>が使うアルゴリズムを変更するオプション</A></H2>

<DL COMPACT>

<DT><SAMP>&lsquo;-k <VAR>selected-byte-positions</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--key-positions=<VAR>selected-byte-positions</VAR>&rsquo;</SAMP>
<DD>
キーワードのハッシュ関数で使うバイト位置を選択できます。指定できる位置は1から255までです。位置は<SAMP>&lsquo;-k 9,4,13,14&rsquo;</SAMP>のようにカンマで区切り、<SAMP>&lsquo;-k 2-7&rsquo;</SAMP>のように範囲でも指定できます。順序は任意です。また、ワイルドカード「*」を指定すると、生成するハッシュ関数は各キーワードの<STRONG>すべての</STRONG>バイト位置を使用します。「$」は、キーワードの「最後のバイト」を使うよう指示します。なお、これは255より大きいバイト位置を使う唯一の方法です。たとえば、<SAMP>&lsquo;-k 1,2,4,6-10,'$'&rsquo;</SAMP>では、位置1、2、4、6、7、8、9、10と、各キーワードの最後のバイトを使うハッシュ関数を生成します。最後のバイトの位置は当然、キーワードごとに異なる場合があります。指定位置より短いキーワードでも正常に動作します。キーワードの長さを超える指定位置は、ハッシュ関数で単に参照されないためです。<CODE>gperf</CODE>のバージョン2.8以降、通常このオプションは不要です。デフォルトのバイト位置は、キーワード集合に応じて、使用する位置の数を最小化する探索によって計算されます。

<DT><SAMP>&lsquo;-D&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--duplicates&rsquo;</SAMP>
<DD>
<A NAME="IDX50"></A>選択したバイト集合のハッシュ値が重複するキーワードを処理します。同じ名前で属性が異なるキーワードがある場合や、選択したバイト位置が適切でない場合に、ハッシュ値が重複することがあります。-Dオプションを使うと、<CODE>gperf</CODE>はこれらのキーワードをすべて同じ同値類に含め、重複するキーワードに対して複数回の比較を行う完全ハッシュ関数を生成します。キーワードを完全に区別するために生成したCコードを変更する作業は、利用者が行う必要があります。ただし、<CODE>gperf</CODE>は出力を整理することで、その作業を助けます。このオプションを使うと、通常、生成するハッシュ関数は完全ではなくなります。一方で、<CODE>gperf</CODE>がほかの方法では扱えないキーワード集合を処理できるようになります。

<DT><SAMP>&lsquo;-m <VAR>iterations</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--multiple-iterations=<VAR>iterations</VAR>&rsquo;</SAMP>
<DD>
<SAMP>&lsquo;-i&rsquo;</SAMP>と<SAMP>&lsquo;-j&rsquo;</SAMP>の値を複数通り試し、最良の結果を選びます。実行時間は<VAR>iterations</VAR>倍になりますが、生成するテーブルのサイズを小さくするのに効果があります。

<DT><SAMP>&lsquo;-i <VAR>initial-value</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--initial-asso=<VAR>initial-value</VAR>&rsquo;</SAMP>
<DD>
関連値配列の初期<VAR>value</VAR>を指定します。デフォルトは0です。初期値を大きくすると最終的なテーブルサイズが増え、キーワード検索の時間効率がよくなる可能性があります。ただし、<SAMP>&lsquo;-S&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%switch&rsquo;</SAMP>を使う場合、このオプションは特に有用ではありません。また、<SAMP>&lsquo;-r&rsquo;</SAMP>オプションを使うと、<SAMP>&lsquo;-i&rsquo;</SAMP>の指定より優先されます。

<DT><SAMP>&lsquo;-j <VAR>jump-value</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--jump=<VAR>jump-value</VAR>&rsquo;</SAMP>
<DD>
<A NAME="IDX51"></A>「ジャンプ値」、つまり衝突時に関連バイト値をどれだけ進めるかに影響します。<VAR>Jump-value</VAR>は奇数に切り上げられ、デフォルトは5です。<VAR>jump-value</VAR>が0の場合、<CODE>gperf</CODE>はランダムな幅でジャンプします。

<DT><SAMP>&lsquo;-n&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--no-strlen&rsquo;</SAMP>
<DD>
ハッシュ値の計算にキーワードの長さを含めないよう、生成器に指示します。生成する検索テーブルで、アセンブリ命令を数個節約できる場合があります。

<DT><SAMP>&lsquo;-r&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--random&rsquo;</SAMP>
<DD>
関連値テーブルの初期化に乱数を使います。すべての関連値を0から始める決定的な初期化よりも、速く解が得られることがよくあります。また、ランダム化オプションを使うと、一般にテーブルのサイズが大きくなります。

<DT><SAMP>&lsquo;-s <VAR>size-multiple</VAR>&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--size-multiple=<VAR>size-multiple</VAR>&rsquo;</SAMP>
<DD>
生成するハッシュテーブルのサイズに影響します。このオプションの数値引数は、関連値の最大範囲をキーワードの数に対して「何倍大きく、または小さく」するかを示します。整数、浮動小数点数、分数で記述できます。たとえば、値が3なら「関連値の最大値を入力キーワード数の約3倍まで許す」という意味です。逆に、1/3なら「関連値の最大値を入力キーワード数の約3分の1まで許す」という意味です。1より小さい値は、生成するハッシュテーブルの全体のサイズを制限するのに役立ちますが、この目的には<SAMP>&lsquo;-m&rsquo;</SAMP>オプションの方が適しています。「switchの生成」オプション<SAMP>&lsquo;-S&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%switch&rsquo;</SAMP>が有効で<EM>ない</EM>場合、関連値の最大値は静的配列のテーブルサイズに影響します。テーブルを大きくすると、追加の領域を必要とする代わりに、検索が不成功に終わるまでの時間が短くなると考えられます。デフォルトは1なので、デフォルトの関連値の最大値は、キーワード数とほぼ同じ大きさになります。効率のため、関連値の最大値は必ず2のべき乗に切り上げられます。この手法は本質的にヒューリスティックなので、実際のテーブルサイズは多少変わる場合があります。

</DL>



<H2><A NAME="SEC24" HREF="#TOC24">5.6 情報の出力</A></H2>

<DL COMPACT>

<DT><SAMP>&lsquo;-h&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--help&rsquo;</SAMP>
<DD>
プログラムの各オプションの意味を短くまとめて表示します。その後のプログラムの実行を打ち切ります。

<DT><SAMP>&lsquo;-v&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--version&rsquo;</SAMP>
<DD>
現在のバージョン番号を表示します。

<DT><SAMP>&lsquo;-d&rsquo;</SAMP>
<DD>
<DT><SAMP>&lsquo;--debug&rsquo;</SAMP>
<DD>
デバッグオプションを有効にします。<CODE>gperf</CODE>の実行中、詳細な診断を「標準エラー出力」に出力します。プログラムの保守にも、指定したオプションの組が実際に解の探索を速くしているかを判断するためにも役立ちます。<SAMP>&lsquo;-d&rsquo;</SAMP>オプションを有効にすると、プログラムの終了時に有用な情報が出力されます。

</DL>



<H1><A NAME="SEC25" HREF="#TOC25">6 <CODE>gperf</CODE>の既知の不具合と制限</A></H1>
<P>現在の<CODE>gperf</CODE>リリースには、次のような制限があります。</P>
<UL>
<LI><CODE>gperf</CODE>は速く実行されるように調整されており、小規模から中規模のデータ集合（約1000キーワード）を高速に処理します。コンパイラのキーワード集合の完全ハッシュ関数を保守するのに、非常に役立ちます。バージョン3.0以降、<CODE>gperf</CODE>は、はるかに大きなキーワード集合（15000キーワードを超えるもの）も効率よく処理します。
<LI>入力キーワードファイルが大きい場合や、キーワード同士がよく似ている場合、生成する静的キーワード配列のサイズが<EM>極端に</EM>大きくなることがあります。その結果、生成したCコードのコンパイルが遅くなり、オブジェクトコードのサイズも<EM>大幅に</EM>増える傾向があります。この場合、データサイズを減らすために<SAMP>&lsquo;-S&rsquo;</SAMP>オプションを使うことを検討してください。キーワードの認識時間は増える可能性がありますが、その増加はごく小さい場合があります。多くのCコンパイラは大きなswitch文のコードを正しく生成できないため、生成するswitch文の数を制御する適切な数値引数を<VAR>-S</VAR>オプションに付けることが重要です。
<LI>選択するバイト位置の最大数には、255という任意の制限があります。この制限は取り除くべきです。これを問題だと考える方は、制限を取り除けるよう、筆者に知らせてください。
</UL>
<H1><A NAME="SEC26" HREF="#TOC26">7 今後の課題</A></H1>
<P>現在の完全ハッシュ関数のアルゴリズムを、より網羅的に探索する方法に置き換えることは、「比較的」容易なはずです。完全ハッシュのモジュールは、基本的にほかのプログラムモジュールから独立しています。ほかに取り組む価値のある改善として、次のものがあります。</P>
<UL>
<LI>有用な拡張の1つは、「最小」完全ハッシュ関数を生成するようにプログラムを変更することです。現在のバージョンは、条件によっては生成テーブルのサイズがかなり大きくなる場合があります。これは主に理論的な関心に基づくものです。疎なテーブルの方が検索が速いことが多く、<SAMP>&lsquo;-S&rsquo;</SAMP>の<CODE>switch</CODE>オプションを使えば、検索が少し遅くなる代わりに、データサイズを最小化できるためです。なお、gccコンパイラは一般に<CODE>switch</CODE>文に対してよいコードを生成するので、より複雑な方式の必要性は小さくなります。
<LI>アルゴリズムの改善に加えて、現在のCとC++のルーチンだけでなく、出力コードとしてAdaのパッケージを生成できるようにすることも有用です。
</UL>
<H1><A NAME="SEC27" HREF="#TOC27">8 参考文献</A></H1>

<P>
[1] Chang, C.C.: <I>A Scheme for Constructing Ordered Minimal Perfect
Hashing Functions</I> Information Sciences 39(1986), 187-195.

</P>
<P>
[2] Cichelli, Richard J. <I>Author's Response to “On Cichelli's Minimal Perfect Hash
Functions Method”</I> Communications of the ACM, 23, 12(December 1980), 729.

</P>
<P>
[3] Cichelli, Richard J. <I>Minimal Perfect Hash Functions Made Simple</I>
Communications of the ACM, 23, 1(January 1980), 17-19.

</P>
<P>
[4] Cook, C. R. and Oldehoeft, R.R. <I>A Letter Oriented Minimal
Perfect Hashing Function</I> SIGPLAN Notices, 17, 9(September 1982), 18-27.

</P>
<P>
[5] Cormack, G. V. and Horspool, R. N. S. and Kaiserwerth, M.
<I>Practical Perfect Hashing</I> Computer Journal, 28, 1(January 1985), 54-58.

</P>
<P>
[6] Jaeschke, G. <I>Reciprocal Hashing: A Method for Generating Minimal
Perfect Hashing Functions</I> Communications of the ACM, 24, 12(December
1981), 829-833.

</P>
<P>
[7] Jaeschke, G. and Osterburg, G. <I>On Cichelli's Minimal Perfect
Hash Functions Method</I> Communications of the ACM, 23, 12(December 1980),
728-729.

</P>
<P>
[8] Sager, Thomas J. <I>A Polynomial Time Generator for Minimal Perfect
Hash Functions</I> Communications of the ACM, 28, 5(December 1985), 523-532

</P>
<P>
[9] Schmidt, Douglas C. <I>GPERF: A Perfect Hash Function Generator</I>
Second USENIX C++ Conference Proceedings, April 1990.

</P>
<P>
[10] Schmidt, Douglas C. <I>GPERF: A Perfect Hash Function Generator</I>
C++ Report, SIGS 10 10 (November/December 1998).

</P>
<P>
[11] Sebesta, R.W. and Taylor, M.A. <I>Minimal Perfect Hash Functions
for Reserved Word Lists</I>  SIGPLAN Notices, 20, 12(September 1985), 47-53.

</P>
<P>
[12] Sprugnoli, R. <I>Perfect Hashing Functions: A Single Probe
Retrieving Method for Static Sets</I> Communications of the ACM, 20
11(November 1977), 841-850.

</P>
<P>
[13] Stallman, Richard M. <I>Using and Porting GNU CC</I> Free Software Foundation,
1988.

</P>
<P>
[14] Stroustrup, Bjarne <I>The C++ Programming Language.</I> Addison-Wesley, 1986.

</P>
<P>
[15] Tiemann, Michael D. <I>User's Guide to GNU C++</I> Free Software
Foundation, 1989.

</P>


<H1><A NAME="SEC28" HREF="#TOC28">概念索引</A></H1>

<P>
移動先:
<A HREF="#cindex_&">&#38;</A>
-
<A HREF="#cindex_a">a</A>
-
<A HREF="#cindex_b">b</A>
-
<A HREF="#cindex_c">c</A>
-
<A HREF="#cindex_d">d</A>
-
<A HREF="#cindex_f">f</A>
-
<A HREF="#cindex_h">h</A>
-
<A HREF="#cindex_i">i</A>
-
<A HREF="#cindex_j">j</A>
-
<A HREF="#cindex_k">k</A>
-
<A HREF="#cindex_m">m</A>
-
<A HREF="#cindex_n">n</A>
-
<A HREF="#cindex_s">s</A>
<P>
<H2><A NAME="cindex_&">&#38;</A></H2>
<DIR>
<LI><A HREF="#IDX8"><SAMP>&lsquo;%%&rsquo;</SAMP></A>
<LI><A HREF="#IDX18"><SAMP>&lsquo;%7bit&rsquo;</SAMP></A>
<LI><A HREF="#IDX19"><SAMP>&lsquo;%compare-lengths&rsquo;</SAMP></A>
<LI><A HREF="#IDX20"><SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP></A>
<LI><A HREF="#IDX17"><SAMP>&lsquo;%define class-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX28"><SAMP>&lsquo;%define constants-prefix&rsquo;</SAMP></A>
<LI><A HREF="#IDX15"><SAMP>&lsquo;%define hash-function-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX14"><SAMP>&lsquo;%define initializer-suffix&rsquo;</SAMP></A>
<LI><A HREF="#IDX30"><SAMP>&lsquo;%define length-table-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX16"><SAMP>&lsquo;%define lookup-function-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX13"><SAMP>&lsquo;%define slot-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX26"><SAMP>&lsquo;%define string-pool-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX29"><SAMP>&lsquo;%define word-array-name&rsquo;</SAMP></A>
<LI><A HREF="#IDX9"><SAMP>&lsquo;%delimiters&rsquo;</SAMP></A>
<LI><A HREF="#IDX22"><SAMP>&lsquo;%enum&rsquo;</SAMP></A>
<LI><A HREF="#IDX24"><SAMP>&lsquo;%global-table&rsquo;</SAMP></A>
<LI><A HREF="#IDX11"><SAMP>&lsquo;%ignore-case&rsquo;</SAMP></A>
<LI><A HREF="#IDX23"><SAMP>&lsquo;%includes&rsquo;</SAMP></A>
<LI><A HREF="#IDX12"><SAMP>&lsquo;%language&rsquo;</SAMP></A>
<LI><A HREF="#IDX27"><SAMP>&lsquo;%null-strings&rsquo;</SAMP></A>
<LI><A HREF="#IDX32"><SAMP>&lsquo;%omit-struct-type&rsquo;</SAMP></A>
<LI><A HREF="#IDX25"><SAMP>&lsquo;%pic&rsquo;</SAMP></A>
<LI><A HREF="#IDX21"><SAMP>&lsquo;%readonly-tables&rsquo;</SAMP></A>
<LI><A HREF="#IDX10"><SAMP>&lsquo;%struct-type&rsquo;</SAMP></A>
<LI><A HREF="#IDX31"><SAMP>&lsquo;%switch&rsquo;</SAMP></A>
<LI><A HREF="#IDX33"><SAMP>&lsquo;%{&rsquo;</SAMP></A>
<LI><A HREF="#IDX34"><SAMP>&lsquo;%}&rsquo;</SAMP></A>
</DIR>
<H2><A NAME="cindex_a">a</A></H2>
<DIR>
<LI><A HREF="#IDX47">配列名</A>, <A HREF="#IDX48">配列名</A>
</DIR>
<H2><A NAME="cindex_b">b</A></H2>
<DIR>
<LI><A HREF="#IDX1">不具合</A>
</DIR>
<H2><A NAME="cindex_c">c</A></H2>
<DIR>
<LI><A HREF="#IDX44">クラス名</A>
<LI><A HREF="#IDX45">定数の定義</A>
<LI><A HREF="#IDX46">定数の接頭辞</A>
<LI><A HREF="#IDX40">著作権</A>
</DIR>
<H2><A NAME="cindex_d">d</A></H2>
<DIR>
<LI><A HREF="#IDX5">宣言セクション</A>
<LI><A HREF="#IDX41">区切り文字</A>
<LI><A HREF="#IDX50">重複</A>
</DIR>
<H2><A NAME="cindex_f">f</A></H2>
<DIR>
<LI><A HREF="#IDX4">形式</A>
<LI><A HREF="#IDX7">関数セクション</A>
</DIR>
<H2><A NAME="cindex_h">h</A></H2>
<DIR>
<LI><A HREF="#IDX36">hash</A>
<LI><A HREF="#IDX35">ハッシュテーブル</A>
</DIR>
<H2><A NAME="cindex_i">i</A></H2>
<DIR>
<LI><A HREF="#IDX37">in_word_set</A>
<LI><A HREF="#IDX43">初期化子</A>
</DIR>
<H2><A NAME="cindex_j">j</A></H2>
<DIR>
<LI><A HREF="#IDX51">ジャンプ値</A>
</DIR>
<H2><A NAME="cindex_k">k</A></H2>
<DIR>
<LI><A HREF="#IDX6">キーワードセクション</A>
</DIR>
<H2><A NAME="cindex_m">m</A></H2>
<DIR>
<LI><A HREF="#IDX3">最小完全ハッシュ関数</A>
</DIR>
<H2><A NAME="cindex_n">n</A></H2>
<DIR>
<LI><A HREF="#IDX39">NUL</A>
</DIR>
<H2><A NAME="cindex_s">s</A></H2>
<DIR>
<LI><A HREF="#IDX42">スロット名</A>
<LI><A HREF="#IDX2">静的検索構造</A>
<LI><A HREF="#IDX38"><CODE>switch</CODE></A>, <A HREF="#IDX49"><CODE>switch</CODE></A>
</DIR>

</P>

<P><HR><P>
この文書は、2025年4月16日に<A HREF="http://wwwinfo.cern.ch/dis/texi2html/">texi2html</A>変換器バージョン1.52bを使って生成されました。</P>

</div>


## 固定原文についての編集注記

- 利用ガイド4.2の、構造体の戻り値の説明に続く「それ以外の場合はNULLを返します」という原文には、構造体を使わない検索が成功した場合について曖昧さがあります。固定した3.3の実装（`src/output.cc`の通常の検索成功分岐）では、`--struct-type`なしでは一致したキーワード文字列へのポインターを、そのオプションを使う場合は構造体へのポインターを返します。失敗経路ではNULLを返します。原文の説明は保持して訳し、この実装上の説明を別に付けています。上流の修正として扱ってはいません。
- CLIは`--jump`の値に奇数を要求する一方、利用ガイド5.5では偶数を切り上げると説明しています。固定した`src/options.cc`のパーサーは負数を拒否し、ゼロでない偶数に1を加えます。両方の原文をそのまま保持して訳しています。ゼロの値でのランダムな動作は、ここでは独立に実行して確認していません。
