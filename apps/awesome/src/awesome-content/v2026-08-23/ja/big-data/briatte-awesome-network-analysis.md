---
title: "briatte/awesome-network-analysis"
description: "ネットワークデータの構築、分析、可視化に関する書籍、論文、ソフトウェア、教材集"
licenseSource: "github-briatte-awesome-network-analysis-readme-md"
---

# Awesome Network Analysis [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.7869481.svg)](https://doi.org/10.5281/zenodo.7869481)


ネットワークデータの構築、分析、可視化に役立つリソースの[Awesomeリスト](https://github.com/sindresorhus/awesome)。

[Awesome Deep Learning](https://github.com/ChristosChristofidis/awesome-deep-learning), [Awesome Math](https://github.com/rossant/awesome-math) 他を参考に。2016年に開始され、それ以降、不規則に更新されている。

[![Adamic and Glance’s network of political blogs, 2004.](https://raw.githubusercontent.com/briatte/awesome-network-analysis/master/illustration.png)](http://www.maths.tcd.ie/~mnl/store/AdamicGlance2004a.pdf)

> [AdamicとGlance（2004）](https://dl.acm.org/citation.cfm?doid=1134271.1134277)による米国政治ブログのネットワーク（[プレプリント](http://www.maths.tcd.ie/~mnl/store/AdamicGlance2004a.pdf)）。

## Contents

- __[Books](#books)__
  - [Classics](#classics)
  - [Dissemination](#dissemination)
  - [General Overviews](#general-overviews)
  - [Graph Theory](#graph-theory)
  - [Method-specific](#method-specific)
  - [Software-specific](#software-specific)
  - [Topic-specific](#topic-specific)
- __[Conferences](#conferences)__
- __[Courses](#courses)__
- __[Datasets](#datasets)__
- __[Journals](#journals)__
- __[Professional groups](#professional-groups)__
  - [Research Groups (USA)](#research-groups-usa)
  - [Research Groups (Other)](#research-groups-other)
- __[Review Articles](#review-articles)__
  - [Archeological and Historical Networks](#archeological-and-historical-networks)
  - [Bibliographic, Citation and Semantic Networks](#bibliographic-citation-and-semantic-networks)
  - [Biological, Ecological and Disease Networks](#biological-ecological-and-disease-networks)
  - [Complex Networks](#complex-networks)
  - [Ethics of Network Analysis](#ethics-of-network-analysis)
  - [Network Modeling](#network-modeling)
  - [Network Visualization](#network-visualization)
  - [Social, Economic and Political Networks](#social-economic-and-political-networks)
- __[Selected Papers](#selected-papers)__
- __[Software](#software)__
  - [Algorithms](#algorithms)
  - [C / C++](#c--c)
  - [Java](#java)
  - [JavaScript](#javascript)
  - [Julia](#julia)
  - [MATLAB](#matlab)
  - [Python](#python)
  - [R](#r)
  - [Stata](#stata)
  - [Syntaxes](#syntaxes)
  - [Tutorials](#tutorials)
- __[Varia](#varia)__
  - [Blog Series](#blog-series)
  - [Fictional Networks](#fictional-networks)
  - [Network Science](#network-science)
  - [Small Worlds](#small-worlds)
  - [Two-Mode Networks](#two-mode-networks)
- __[Contributing Guidelines](https://github.com/briatte/awesome-network-analysis/blob/28d9400a850fc36a69f98c14bdf30d77062bec64/CONTRIBUTING.md)__
- __[License](#license)__

## Books

### Classics

-   _[A Novitiate in a Period of Change: An Experimental and Case Study of Social Relationships](https://f.briatte.org/temp/sampson1968.pdf)_, by Samuel F. Sampson (unpublished PhD dissertation, 1968).
-   _[Social Network Analysis](https://uk.sagepub.com/en-gb/eur/social-network-analysis/book249668)_, by John Scott (2017).
-   _[Social Network Analysis. Methods and Applications](http://www.cambridge.org/ar/academic/subjects/sociology/sociology-general-interest/social-network-analysis-methods-and-applications)_, by Stanley Wasserman and Katherine Faust (1994).
-   _[The Structure and Dynamics of Networks](http://press.princeton.edu/titles/8114.html)_, edited by Mark E.J. Newman, Albert-László Barabási and Duncan J. Watts - 600 pages of classic network analysis articles (2006).

### Dissemination

> Accessible introductions aimed at non-technical audiences.

-   _[Connected: The Surprising Power of Our Social Networks and How They Shape Our Lives](http://www.connectedthebook.com/)_, by Nicholas A. Christakis and James H. Fowler (2009).
-   _[Linked: The New Science of Networks](https://barabasi.com/book/linked)_, by Albert-László Barabási (2002).
-   _[Network Literacy: Essential Concepts and Core ideas](https://sites.google.com/a/binghamton.edu/netscied/teaching-learning/network-concepts)_, by the NetSciEd team (c. 2016) - Available in several languages ([paper](https://academic.oup.com/comnet/article-abstract/4/3/457/1745356)).
-   _[Nexus. Small Worlds and the Groundbreaking Theory of Networks](http://books.wwnorton.com/books/Nexus/)_, by Mark Buchanan (2003).
-   _[Six Degrees: The Science of a Connected Age](http://books.wwnorton.com/books/detail.aspx?ID=7599)_, by Duncan J. Watts (2003).

### General Overviews

-   _[L'analyse de réseau en sciences sociales. Petit guide pratique](https://hal.science/hal-04052709)_, by Laurent Beauguitte, in French (2023). [Readable online](https://beauguitte.github.io/analyse-de-reseau-en-shs/)
-   _[The Atlas for the Aspiring Network Scientist](https://www.networkatlas.eu/)_, by Michele Coscia (2021).
-   _[Encyclopedia of Social Networks](http://sk.sagepub.com/reference/socialnetworks)_, edited by George A. Barnett - Covers all sorts of network-related themes (many of them not formal) as well as social network analysis (2011).
-   _[Encyclopedia of Social Network Analysis and Mining](https://www.springer.com/us/book/9781461461692)_, edited by Reda Alhajj and Jon Rokne (2014).
-   _[A First Course in Network Science](https://www.cambridge.org/us/academic/subjects/physics/statistical-physics/first-course-network-science)_, by Filippo Menczer, Santo Fortunato, and Clayton A. Davis - Tutorials, datasets and other resouces [on GitHub](https://github.com/CambridgeUniversityPress/FirstCourseNetworkScience) (2020).
-   _[Network Science](http://networksciencebook.com)_, by Albert-László Barabási - Full book online (2016).
-   _[Network Science](http://www.nap.edu/catalog/11516/network-science)_, by the U.S. National Research Council - Full book online (2005).
-   _[Network Science: Theory and Practice](http://eu.wiley.com/WileyCDA/WileyTitle/productCd-1118211014.html)_, by Ted G. Lewis (2011).
-   _[Networks. An Introduction](http://www-personal.umich.edu/~mejn/networks-an-introduction/)_, by Mark E.J. Newman (2010).
-   _[Networks, Crowds, and Markets: Reasoning About a Highly Connected World](https://www.cs.cornell.edu/home/kleinber/networks-book/)_, by David Easley and Jon Kleinberg - Full pre-publication draft ([review](http://bactra.org/reviews/networks-crowds-markets.html); 2010).
-   _[Réseaux sociaux et structures relationnelles](https://www.puf.com/content/R%C3%A9seaux_sociaux_et_structures_relationnelles)_, by Emmanuel Lazega, in French (2014).
-   _[The SAGE Handbook of Social Network Analysis](https://methods.sagepub.com/book/the-sage-handbook-of-social-network-analysis)_, edited by John Scott and Peter J. Carrington (2011).
-   _[Sociologie des réseaux sociaux](http://pierremerckle.fr/2011/02/sociologie-des-reseaux-sociaux/)_, by Pierre Mercklé, in French (2011).
-   _[Social and Economic Networks](https://press.princeton.edu/books/paperback/9780691148205/social-and-economic-networks)_, by Matthew O. Jackson (2008).
-   _[Social Network Analysis with Applications](https://www.wiley.com/en-gb/Social+Network+Analysis+with+Applications-p-9781118169476)_, by Ian McCulloh, Helen Armstrong and Anthony Johnson (2013).
-   _[Social Networks. An Introduction](https://olizardo.github.io/networks-textbook/)_, by Omar Lizardo and Isaac Jilbert - free to read online (2023).
-   _[Social Networks: An Introduction](https://www.routledge.com/products/9780415458030)_, by Jeroen Bruggeman ([related material](https://sites.google.com/site/introsocnet/); 2008).
-   _[Studying Social Networks. A Guide to Empirical Research](http://press.uchicago.edu/ucp/books/book/distributed/S/bo15475096.html)_, by Marina Hennig _et al._ (2013).
-   _[Understanding Social Networks. Theories, Concepts, and Findings](https://global.oup.com/academic/product/understanding-social-networks-9780195379471)_, by Charles Kadushin (2012).

### Graph Theory

-   _[Combinatorics and Graph Theory](https://www.springer.com/us/book/9780387797106)_, by John Harris, Jeffry L. Hirst and Michael Mossinghoff (2008).
-   _[The Fascinating World of Graph Theory](http://press.princeton.edu/titles/10314.html)_, by Arthur Benjamin, Gary Chartrand and Ping Zhang (2015).
-   _[Graph Theory](https://www.springer.com/us/book/9781846289699)_, by John A. Bondy and Uppaluri S.R. Murty (2008).
-   _[Graph Theory](http://diestel-graph-theory.com/)_, by Reinhard Diestel - Full book online, also in Chinese and German (2016).
-   _[Graph Theory](http://www.dtic.mil/dtic/tr/fulltext/u2/705364.pdf)_, by Frank Harary - Full book online (1969).
-   _[Graphs & Digraphs](https://www.crcpress.com/Graphs--Digraphs-Sixth-Edition/Chartrand-Lesniak-Zhang/p/book/9781498735766)_, by Gary Chartrand, Linda Lesniak and Ping Zhang (2016).
-   _[Introduction to Combinatorics and Graph Theory](https://www.whitman.edu/mathematics/cgt_online/cgt.pdf)_, by David Guichard - Full book online (2016).
-   _[Modern Graph Theory](https://www.springer.com/us/book/9780387984889)_, by Belá Bollobás (1998).

### Method-specific

-   _[Bayesian Networks in R with Applications in Systems Biology](https://www.springer.com/fr/book/9781461464457)_, by Radhakrishnan Nagarajan, Marco Scutari and Sophie Lèbre ([website](http://www.bnlearn.com/book-useR/); 2013).
-   _[Bayesian Networks with Examples in R](http://www.crcpress.com/product/isbn/9781482225587)_, by Marco Scutari and Jean-Baptiste Denis ([website](http://www.bnlearn.com/book-crc/); 2014).
-   _[The Book of Trees. Visualizing Branches of Knowledge](https://papress.com/products/the-book-of-trees-visualizing-branches-of-knowledge)_, by Manuel Lima - Hundreds of beautiful tree diagrams, from all periods of history (2014).
-   _[Exponential Random Graph Models for Social Networks](http://www.cambridge.org/9780521193566)_, edited by Dean Lusher, Johan Koskinen and Garry Robins (2013).
-   _[Generalized Blockmodeling. Structural Analysis in the Social Sciences](http://www.cambridge.org/de/academic/subjects/sociology/sociology-general-interest/generalized-blockmodeling)_, by Patrick Doreian, Vladimir Batagelj and Anuška Ferligoj (2004).
-   _[Handbook of Graph Drawing and Visualization](https://www.crcpress.com/Handbook-of-Graph-Drawing-and-Visualization/Tamassia/9781584884125)_, edited by Roberto Tamassia ([chapter proofs](https://cs.brown.edu/~rt/gdhandbook/); 2013).
-   _[Handbuch Historische Netzwerkforschung. Grundlagen und Anwendungen](http://www.lit-verlag.de/isbn/3-643-11705-2)_, edited by Marten Düring _et al._, in German (2016).
-   _[An Introduction to Exponential Random Graph Modeling](https://uk.sagepub.com/en-gb/eur/an-introduction-to-exponential-random-graph-modeling/book237737)_, by Jenine K. Harris (2014).
-   _[Knoten und Kanten. Soziale Netzwerkanalyse in Wirtschafts- und Migrationsforschung](http://www.transcript-verlag.de/978-3-8376-1311-7/knoten-und-kanten)_, edited by Markus Gamper and Linda Reschke, in German (2010).
-   _[Knoten und Kanten 2.0. Soziale Netzwerkanalyse in Medienforschung und Kulturanthropologie](http://www.transcript-verlag.de/978-3-8376-1927-0/knoten-und-kanten-2.0)_, edited by Markus Gamper, Linda Reschke and Michael Schönhuth, in German (2012).
-   _[Knoten und Kanten III. Soziale Netzwerkanalyse in Geschichts- und Politikforschung](https://www.transcript-verlag.de/978-3-8376-2742-8/knoten-und-kanten-iii)_, edited by Markus Gamper, Linda Reschke and Marten Düring, in German and English (2015).
-   _[Inferential Network Analysis](https://www.cambridge.org/highereducation/books/inferential-network-analysis/A7797D36A24647AA1F900CE7EF694C7E)_, by Skyler J. Cranmer, Bruce A. Desmarais and Jason Morgan (2020).
-   _[Multilayer Social Networks](http://multilayer.it.uu.se/book.html)_, by Mark E. Dickison, Matteo Magnani and Luca Rossi (2016).
-   _[Multilevel Network Analysis for the Social Sciences](https://www.springer.com/fr/book/9783319245188)_, edited by Emmanuel Lazega and Tom A.B. Snijders (2016).
-   _[Multimodal Political Networks](https://www.cambridge.org/core/books/multimodal-political-networks/43EE8C192A1B0DCD65B4D9B9A7842128)_, by David Knoke, Mario Diani, James Hollway and Dimitri Christopulos (2021).
-   _[Multivariate Network Visualization](https://www.springer.com/us/book/9783319067926)_, edited by Andreas Kerren, Helen C. Purchase and Matthew O. Ward (2014).
-   _[Network Analysis in Archaeology](https://global.oup.com/academic/product/network-analysis-in-archaeology-9780199697090)_, edited by Carl Knappett (2013; [review in French](https://doi.org/10.4000/nda.2383)).
-   _[Network Analysis: Methodological Foundations](https://www.springer.com/fr/book/9783540249795)_, edited by Ulrik Brandes and Thomas Erlebach - Covers network centrality, clustering, blockmodels, spatial networks and more (2005).
-   _[Political Networks. The Structural Perspective](http://www.cambridge.org/ar/academic/subjects/sociology/political-sociology/political-networks-structural-perspective)_, by David Knoke (1994).
-   _[Social Network Analysis for Ego-Nets: Social Network Analysis for Actor-Centred Networks](https://uk.sagepub.com/en-gb/eur/social-network-analysis-for-ego-nets/book240391)_, by Nick Crossley _et al._ (2015).
-   _[Understanding Large Temporal Networks and Spatial Networks](https://www.wiley.com/en-gb/Understanding+Large+Temporal+Networks+and+Spatial+Networks%3A+Exploration%2C+Pattern+Searching%2C+Visualization+and+Network+Evolution-p-9780470714522)_, by Vladimir Batagelj _et al._ (2014).

### Software-specific

-   _[Algorithmic Graph Theory and Sage](https://code.google.com/archive/p/graphbook/)_, by David Joyner, Minh Van Nguyen, and David Phillips - Full book online (2013).
-   _[Analyzing Social Networks](https://sites.google.com/site/analyzingsocialnetworks/)_ (using UCINET), by Stephen P. Borgatti, Martin G. Everett and Jeffrey C. Johnson (2013).
-   _[A User’s Guide to Network Analysis in R](https://www.springer.com/us/book/9783319238821)_, by Douglas A. Luke (2015).
-   _[Data Science and Complex Networks: Real Case Studies with Python](https://global.oup.com/academic/product/data-science-and-complex-networks-9780199639601)_, by Guido Caldarelli and Alessandro Chessa (2016).
-   _[Exploratory Social Network Analysis with Pajek](http://www.cambridge.org/us/academic/subjects/sociology/research-methods-sociology-and-criminology/exploratory-social-network-analysis-pajek-2nd-edition)_, by Wouter de Nooy, Andrej Mrvar and Vladimir Batagelj (2011; also [in Japanese](http://www.tdupress.jp/books/isbn978-4-501-54710-3.html) および [in Chinese](http://product.dangdang.com/22927985.html))。
-   _[Gephi Cookbook](https://www.packtpub.com/big-data-and-business-intelligence/gephi-cookbook)_ (2015).
-   _[Graph Drawing Software](http://link.springer.com/book/10.1007/978-3-642-18638-7)_ (covering many programs), edited by Michael Jünger and Petra Mutzel (2004).
-   _[Introduction to Social Network Methods](http://faculty.ucr.edu/~hanneman/nettext/)_ (using mostly UCINET), by Robert A. Hanneman and Mark Riddle - Full book online (2001).
-   _[Mastering Gephi Network Visualization](https://www.packtpub.com/networking-and-servers/mastering-gephi-network-visualization)_, by Ken Cherven (2015).
-   _Network Analysis with R/igraph_, by Gabor Csárdi, Thomas Nepusz and Eduardo M. Airoldi (in preparation).
-   _Network Analysis with Python/igraph_, by Thomas Nepusz, Gabor Csárdi and Eduardo M. Airoldi (in preparation).
-   _[Network Graph Analysis and Visualization with Gephi](https://www.packtpub.com/big-data-and-business-intelligence/network-graph-analysis-and-visualization-gephi)_, by Ken Cherven (2013).
-   _[R for Social Network Analysis](https://schochastics.github.io/R4SNA/)_ (R4SNA), by Termeh Shafie and David Schoch (work in progress).
-   _[Social Network Analysis for Startups. Finding Connections on the Social Web](http://shop.oreilly.com/product/0636920020424.do)_ (using Python), by Maksim Tsvetovat and Alexander Kouznetsov ([code](https://github.com/maksim2042/SNABook); 2011).
-   _[Statistical Analysis of Network Data with R](http://www.springer.com/us/book/9781493909827)_, by Eric D. Kolaczyk and Gabor Csárdi ([R package](https://github.com/kolaczyk/sand); 2014).

### Topic-specific

-   _[Communities and Networks: Using Social Network Analysis to Rethink Urban and Community Studies](http://eu.wiley.com/WileyCDA/WileyTitle/productCd-0745654207.html)_, by Katherine Giuffre (2013).
-   _[Comparing Policy Networks. Labor Politics in the U.S., Germany, and Japan](http://www.cambridge.org/ar/academic/subjects/politics-international-relations/comparative-politics/comparing-policy-networks-labor-politics-us-germany-and-japan)_, by David Knoke _et al._ (1996).
-   _[Conducting Personal Network Research: A Practical Guide](https://www.routledge.com/Conducting-Personal-Network-Research-A-Practical-Guide/McCarty-Lubbers-Vacca-Molina/p/book/9781462538386)_, by Christopher McCarty _et al._ (2019).
    - _[Egocentric Network Analysis with R](https://raffaelevacca.github.io/egocentric-r-book/)_ - An online book/tutorial that covers a lot of similar ground.
-   _[The Connected Past. Challenges to Network Studies in Archaeology and History](https://global.oup.com/academic/product/the-connected-past-9780198748519)_ edited by Tom Brughmans, Anna Collar and Fiona Coward (2016; [companion website](http://connectedpast.net/)).
-   _[The Development of Social Network Analysis: A Study in the Sociology of Science](http://moreno.ss.uci.edu/)_, by Linton C. Freeman, in English and several other languages (2004; [follow-up paper, 2011](http://moreno.ss.uci.edu/91.pdf)).
-   _[Dynamical Networks in Psychology: More Than A Pretty Picture?](https://www.researchgate.net/publication/308874807_Dynamical_networks_in_psychology_More_than_a_pretty_picture)_, by Laura Bringmann (2016; PhD dissertation).
-   _[Dynamical Processes on Complex Networks](http://www.cambridge.org/catalogue/catalogue.asp?isbn=9780521879507)_, by Alain Barrat, Marc Barthélemy and Alessandro Vespignani (2008).
-   _[Economic Networks: Theory and Computation](https://networks.quantecon.org/)_, by John Stachurski and Thomas J. Sargent (2022).
-   _[Fundamentals of Brain Network Analysis](https://www.elsevier.com/books/fundamentals-of-brain-network-analysis/fornito/978-0-12-407908-3)_, by Alex Fornito, Andrew Zalesky and Edward Bullmore (2016).
-   _[Inside Criminal Networks](https://www.springer.com/us/book/9780387095257)_, by Carlo Morselli (2009).
-   _[Neighbor Networks. Competitive Advantage Local and Personal](https://global.oup.com/academic/product/neighbor-networks-9780199570690)_, by Ronald S. Burt (2010).
-   _[Network Analysis Literacy. A Practical Approach to the Analysis of Networks](https://www.springer.com/us/book/9783709107409)_, by Katharina A. Zweig (2016).
-   _[Networks in Social Policy Problems](http://www.cambridge.org/mx/academic/subjects/physics/statistical-physics/networks-social-policy-problems)_, edited by Balázs Vedres and Marco Scotti (2012).
-   _[The Oxford Handbook of the Economics of Networks](https://global.oup.com/academic/product/the-oxford-handbook-of-the-economics-of-networks-9780199948277)_, edited by Yann Bramoullé, Andrea Galeotti and Brian Rogers (2016).
-   _[Policy Debates as Dynamic Networks: German Pension Politics and Privatization Discourse](http://www.campus.de/buecher-campus-verlag/wissenschaft/politikwissenschaft/policy_debates_as_dynamic_networks-10287.html)_, by Philip Leifeld (2016).
-   _[Small Worlds: The Dynamics of Networks between Order and Randomness](http://press.princeton.edu/titles/6768.html)_, by Duncan J. Watts (2003).
-   _[Theories of Communication Networks](https://global.oup.com/academic/product/theories-of-communication-networks-9780195160376)_, by Peter Monge and Nosh Contractor (2003).
-   _[The Chessboard and the Web. Strategies of Connection in a Networked World](http://yalebooks.yale.edu/book/9780300215649/chessboard-and-web)_, by Anne-Marie Slaughter (2017); applies network science to world politics.
-   _[Towards Relational Sociology](https://www.routledge.com/products/9780415480147)_, by Nick Crossley (2011).
-   _[Die Verbundenheit der Dinge. Eine Kulturgeschichte der Netze und Netzwerke [The Connectedness of Things. A Cultural History of Nets and Networks]](http://www.kulturverlag-kadmos.de/buch/die-verbundenheit-der-dinge.html)_, by Sebastian Gießmann, in German (2014).
-   _[Verdeckte soziale Netzwerke im Nationalsozialismus. Die Entstehung und Arbeitsweise von Berliner Hilfsnetzwerken für verfolgte Juden [Hidden Social Networks in National Socialism: The origins and working methods of Berlin assistance networks for persecuted Jews]](http://www.degruyter.com/view/product/432196)_, by Marten Düring, in German (2015; [related publications](http://martenduering.com/research/covert-networks-during-the-holocaust/) および [video presentation in English](https://www.youtube.com/watch?v=SlQ7stSU-9w))。
-   _[Visualisierung komplexer Strukturen. Grundlagen der Darstellung mehrdimensionaler Netzwerke](http://www.campus.de/buecher-campus-verlag/wissenschaft/soziologie/visualisierung_komplexer_strukturen-2467.html)_, by Lothar Krempel, in German.

## Conferences

> Recurring conferences on network analysis.

-   [ASONAM - IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining](http://asonam.cpsc.ucalgary.ca/)
    -   [SNAA - Workshop on Social Network Analysis in Applications](http://snaa.pwr.edu.pl/)
-   [CNDay - Cambridge Networks Day](http://www.cnn.group.cam.ac.uk/cambridge-networks-day) - Cambridge Networks Network によって開催された.
-   [CompleNet - International Workshop on Complex Networks](http://complenet.org/)
-   [EUSN - European Conference on Social Networks](http://eusn.org/)
-   [GD - International Symposium on Graph Drawing and Network Visualization](http://www.graphdrawing.org/symposia.html)
-   [PolNet - Annual Political Networks Workshops and Conference](http://conference.polinetworks.org/) - APSA の政治ネットワーク部門（PolNet）が主催した.
    -   [Videos from the Political Networks 2009 Conference](https://vimeo.com/user2690333)
-   [NetSci - International School and Conference on Social Networks](http://www.netscisociety.net/) - ネットワーク科学学会（NetSci）が主催した.
    -   [Large-scale Structures in Networks: Hidden Communities and Latent Hierarchies](http://danlarremore.com/CommunityDetection_and_Ranking_Larremore_2019.pdf) - [Dan Larremore](http://danlarremore.com/) が NetSci 2019 で行った講演.
-   [Sunbelt - Social Networks Conference of the International Network for Social Network Analysis](http://www.insna.org/archives.html) - 国際社会ネットワーク分析ネットワーク（INSNA）が主催した.

## Courses

-   [Complex Networks](http://cazabetremy.fr/Teaching/ComplexNetworks.html), レミ・カズアベット（ルイ＝1大学およびENSルイ＝1、2022年）による.
    -   [Network Science CheatSheets](https://github.com/Yquetzal/NetworkScience_CheatSheets)
-   [Complex Networks](https://www.uvm.edu/~pdodds/teaching/courses/2016-01UVM-303/)、ペーター・シェリダン・ドッズ（ブランチ大学、2016年）による。
    -   [Tarot Cards for Principles of Complex Systems and Complex Networks](https://www.uvm.edu/~pdodds/teaching/courses/2016-01UVM-303/tarotcards/)
-   [Graph Theory and Applications](http://www.hamilton.ie/ollie/Downloads/Graph.pdf)ペーター・シェリダン・ドッズ（ブランチ州立大学、2016年）による.
-   [Graph Theory (Mathematics)](http://www.personal.psu.edu/cxg286/Math485.pdf)クリス・グリフィンによる - フル講義ノート (ペンシルベニア州立大学, 2012年)
-   [Graphs and Networks](https://sites.google.com/a/yale.edu/462-562-graphs-and-networks/)パウル・ヴァン・ドゥーレン - 完全な講義スライド（ダブリンのハミルトン研究所、2009年）による.','',
-   [Network Analysis and Modeling (Computer Science)](https://aaronclauset.github.io/courses/5352/), アアロン・クラセットによる - 完全な講義スライドと読書 (コロラド大学, 2022).
-   [Networks, Complexity and Its Applications (Media Arts and Sciences)](http://ocw.mit.edu/courses/media-arts-and-sciences/mas-961-networks-complexity-and-its-applications-spring-2011/), セサール・ヒダルゴによる (MIT, 2011).
-   [Networks, Crowds and Markets](https://www.edx.org/course/networks-crowds-markets-cornellx-info2040x-2), デイビッド・エイズリー、ジョン・クレインベルグ、エヴァ・タルドスによる ([presentation](https://www.cornell.edu/video/cornellx-networks-crowds-and-markets); カーネギー・メロン大学経由edX, 2016).
-   [Networks (Economics)](https://ocw.mit.edu/courses/economics/14-15j-networks-spring-2018/), マルダヴィージ・ルーボーハニとエヴァン・サドラーによる (MIT, 2018).
    -   [Networks (Economics)](https://hdl.handle.net/1721.1/119628), ダロン・アセモグルとアス・オズダグラルによる (MIT, 2009).
-   [Network Science (Computer Science)](http://www.cc.gatech.edu/~dovrolis/Courses/NetSci/), コンスタンティン・ドヴロリスによる - 多くがオープンアクセス読書 (ジョージア工科大学, 2015).

-   [Political Networks: Methods and Applications](http://vanity.dss.ucdavis.edu/~maoz/networks/Spring%202011/pol279-11.htm), ゼーブ・マオズによる (カリフォルニア大学ダビス校, 2012).
-   [Social and Economic Networks: Models and Analysis](https://www.coursera.org/course/networksonline), マシュー・O・ジャクソンによる (スタンフォード大学経由Coursera, 2015).
-   [Social Network Analysis](https://www.coursera.org/course/sna), ラダ・アダミクによる (ミシガン大学経由Coursera, 未実施).
-   [Social Network Analysis](http://www.mjdenny.com/workshops/SN_Theory_I.pdf) および [Intermediate Social Network Theory](http://www.mjdenny.com/workshops/Relational_Theory_Workshop.pdf), マシュー・J・デニーによる - ワークショップノートとスライド (2014–5).
-   [Social Network Analysis with Pajek](http://mrvar.fdv.uni-lj.si/sola/info4/), アンデル・マーヴァルによる (ルブリャナ大学, 2016).
-   [Social Networks](http://dennisfeehan.org/teaching/201701_demog260.html), デニス・M・フィーハンによる (ベルキーブ大学, 2017).
-   [The Structure of Information Networks](https://www.cs.cornell.edu/Courses/cs6850/2008fa/), ジョン・クレインベルグによる - 多様な読書へのリンク (カーネギー・メロン大学, 2008).

## Datasets

-   [Animal Social Network Repository](https://bansallab.github.io/asnr/) - 大きな「[multi-species repository of social networks](https://doi.org/10.1038/s41597-019-0056-z)」.
-   [Bayesian Network Repository](http://www.bnlearn.com/bnrepository/)
-   [Bill Cosponsorship Networks in European Parliaments](https://github.com/briatte/parlnet) - 議会共同出資ネットワーク、R形式で.
-   [Colorado Index of Complex Networks (ICON)](https://icon.colorado.edu/) - アーロン・クラセット研究グループが記述・インデックスしたネットワークの大きなコレクション.
-   [Connectome](http://awesome.cs.jhu.edu/graph-services/download/) - 神経接続の包括的な地図.
-   [Enron Email Dataset](https://www.cs.cmu.edu/~enron/)
-   [Eric D. Kolaczyk’s Network Datasets](http://math.bu.edu/people/kolaczyk/datasets.html)
-   [Gephi Datasets](https://github.com/gephi/gephi/wiki/Datasets)
-   [Hetionet: an integrative network of disease](https://github.com/hetio/hetionet) - 複雑な生物ネットワーク、JSONおよび[Neo4j](https://neo4j.het.io/browser/)などの複数フォーマットで利用可能.
-   [igraphdata](https://CRAN.R-project.org/package=igraphdata) - Rデータ中心パッケージ.
-   [igraphwalshdata](https://cran.r-project.org/package=igraphwalshdata) - 別のRデータ中心パッケージ.
-   [Interaction Web Database](http://www.ecologia.ib.usp.br/iwdb/) - 生態学的種間相互作用
-   [International Currencies 1890-1910](http://eh.net/database/international-currencies-1890-1910/) - 45通貨間の国際的な関係に関する歴史データ
-   [KONECT - The Koblenz Network Collection](http://konect.uni-koblenz.de/) - DBpediaおよびWikipediaにおける協力ネットワーク、GitHub（[companion handbook](https://arxiv.org/abs/1402.5500)）を含む

-   [Linton Freeman’s Network Data](http://moreno.ss.uci.edu/data.html) - すべての種類の300以上のデータセット（UCINET形式）
-   [Mangal](http://mangal.io/) - 生態ネットワークデータを分析・アーカイブ・共有できるオンラインプラットフォーム（[preprint](https://doi.org/10.1101/002634)、[Python package](https://github.com/mangal-wg/pymangal)、[R package](https://github.com/mangal-wg/rmangal)）
-   [Manlio De Domenico’s Complex Multilayer Networks](https://manliodedomenico.com/data.php)
-   [Mark E.J. Newman’s Network Data](http://www-personal.umich.edu/~mejn/netdata/) ([example visualizations](http://www-personal.umich.edu/~mejn/networks/)).
-   [Network Repository](http://networkrepository.com/) - 数百の現実世界のネットワークを含む完全検索可能なデータベース
-   [Network Science Book - Network Datasets](http://networksciencebook.com/translations/en/resources/data.html) - アルベルト・ラスゾ・バーバーリの『ネットワーク科学』書に収録されたネットワークデータセット。IMDBの俳優間関係、arXivの科学的協力ネットワーク、ルーター間ネットワーク、米国電力網、タンパク質間相互作用、携帯電話ユーザー間関係、引用ネットワーク、代謝反応、メールネットワーク、nd.eduのウェブページ間関係を含む

-   [Norwegian Interlocking Directorate, 2002-2011](http://www.boardsandgender.com/data.php) - ノルウェー企業における性別表現に関する二モードおよび一モードデータ
-   [Movie galaxies](http://moviegalaxies.com/) - 映画キャラクター間相互作用グラフを含むキャラクターデータベース
-   [Pajek Datasets](http://vlado.fmf.uni-lj.si/pub/networks/data/)
-   [Philosophers Networks from Randall Collins’s _The Sociology of Philosophies_](https://www.uva.nl/profiel/n/o/w.denooy/w.denooy.html#tab_1)
-   [Siena Datasets](http://www.stats.ox.ac.uk/~snijders/siena/siena_datasets.htm)
-   [SocioPatterns Datasets](http://www.sociopatterns.org/datasets/) - [SocioPatterns](http://www.sociopatterns.org/)センシングプラットフォームを通じて得られたネットワークデータ
-   [Stanford Large Network Dataset Collection](https://snap.stanford.edu/data/index.html)
-   [State Networks](https://ippsr.msu.edu/public-policy/state-networks) - 米国各州間の関係変数（境界、移動、貿易などを含む）
-   [tnet Datasets](https://toreopsahl.com/datasets/) - 重み付きネットワークデータ
-   [UC Berkeley Social Networks Study (UCNets)](https://www.icpsr.umich.edu/web/ICPSR/studies/36975) - 5年間のパネル調査から得られたエゴ中心データ（個人ネットワーク）
-   [UCI Network Data Repository](http://networkdata.ics.uci.edu/)
-   [UCINET Datasets](https://sites.google.com/site/ucinetsoftware/datasets) - UCINET形式のネットワークデータセット

## Journals

> Journals that are not fully open-access are marked as “gated”. Please also note that some of the publishers listed below are [deeply hurting](https://twitter.com/costofknowledge) scientific publishing.

-   _[Applied Network Science](http://appliednetsci.springeropen.com/)_ (Springer Open).
-   _[ARCS – Analyse de réseaux pour les sciences sociales / Network Analysis for the Social Sciences](http://arcs.episciences.org/)_, in English and in French ([GDR ARSHS](https://arshs.hypotheses.org/)).
-   _[Computational and Mathematical Organization Theory](http://link.springer.com/journal/10588)_ (Springer, gated).
-   _[Computational Social Networks](http://computationalsocialnetworks.springeropen.com/)_ (Springer Open).
-   _[Connections](http://www.insna.org/connections.html)_ (INSNA).
-   _[IEEE Transactions on Network Science and Engineering](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488902)_ (IEEE).
-   _[Journal of Complex Networks](https://academic.oup.com/comnet)_ (Oxford, gated).
-   _[The Journal of Mathematical Sociology](http://www.tandfonline.com/loi/gmas20)_ (Taylor & Francis, gated).
-   _[Journal of Social Structure](https://www.exeley.com/journal/journal_of_social_structure)_ (INSNA). [Older archives](http://www.cmu.edu/joss)
-   _[NETCOM. Networks and Communication Studies](https://journals.openedition.org/netcom/)_, in English and in French (Revues.org).
-   _[Network Science](http://journals.cambridge.org/action/displayJournal?jid=nws)_ (Cambridge, gated).
-   _[Online Social Networks and Media](https://www.journals.elsevier.com/online-social-networks-and-media/)_ (Elsevier, gated).
-   _[REDES. Revista hispana para el análisis de redes sociales](http://revista-redes.rediris.es/)_, in Spanish (INSNA).
-   _[Social Network Analysis and Mining](http://link.springer.com/journal/13278)_ (Springer, gated).
-   _[Social Networks](http://ees.elsevier.com/son/default.asp)_ (Elsevier, gated).

## Professional Groups

-   [AFS RT 26 “Réseaux sociaux”](https://afs-socio.fr/rt/rt26/) - フランス社会学協会（AFS）のテーマネットワーク（フランス語（[old website](https://web.archive.org/web/20160421164221/http://www.cmh.pro.ens.fr/reseaux-sociaux/)））
-   [APSA Political Networks](http://www.polinetworks.org/) - アメリカ政治科学協会（APSA）の組織部門
-   [ECPR Political Networks SG](https://politicalnetsecpr.wordpress.com/) - ヨーロッパ政治研究連合（EPCR）の定常グループ
-   [GDR ARSHS - GDR Analyse de réseaux en sciences humaines et sociales](https://arshs.hypotheses.org/)フランス語 - パリに拠点を置く研究グループ
-   [Groupe FMR - Flux, Matrices, Réseaux](https://groupefmr.hypotheses.org/), フランス語
-   [INSNA - International Network for Social Network Analysis](https://www.insna.org/) ([SOCNET mailing-list](https://www.insna.org/socnet)).
-   [Mathematical Sociology Section of the American Sociological Association (ASA)](http://mathematicalsociology.org/)
-   [NetSci - Network Science Society](http://www.netscisociety.net/)
-   [Society of Young Network Scientists (SYNS)](https://society-of-young-network-scientists.github.io/). 若干年経験のないネットワーク科学者を支援する.

### Research Groups (USA)

> Network-focused research centers, (reading) groups, institutes, labs – you name it – based in the USA.

-   [Annenberg Networks Network (ANN)](http://uscann.tumblr.com/) - サンタモニカ大学における社会ネットワークを研究する研究グループ.
-   [Center for Applied Network Analysis (CANA)](https://usccana.github.io/) - サンタモニカ大学医学部に所在する研究グループ.
-   [Channing Division of Network Medicine](http://www.brighamandwomens.org/research/depts/medicine/channing/default.aspx) - ブリガム・アンド・ウィメンズ病院の医学部内に設置された研究部門.
-   [Complex Human Networks Reading Group (CoHN)](http://alumni.media.mit.edu/~tanzeem/cohn/CoHN.htm) - 2001–2年にMITで開催されたセミナーから出た読書リスト.
-   [Duke Network Analysis Center](https://dnac.ssri.duke.edu/)
-   [Interdependence in Governance and Policy Research Group](https://sites.psu.edu/desmaraisgroup/) - ペンシルベニア州立大学のブライス・A・デスマライズが率いる.
-   [Indiana University Network Science Institute (IUNI)](http://iuni.iu.edu/)
-   [Interdisciplinary Center for Network Science and Applications (iCeNSA) at the University of Notre Dame](http://icensa.com/)
-   [LINKS Center for Social Network Analysis at the Gatton College of Business and Economics, University of Kentucky](https://sites.google.com/site/uklinkscenter/)
-   [NetSCI Lab at the Rutgers School of Communication and Information](http://netsci.rutgers.edu/)
-   [Network Dynamics Group at the Annenberg School for Communication, University of Pennsylvania](http://ndg.asc.upenn.edu/)
-   [Network Interdependence in Social Systems](http://www.skylercranmer.net/niss-lab/) (NISS Lab) - オハイオ州立大学のスライヤー・J・クランマーが率いる.
-   [Network Science Center at the U.S. Military Academy (USMA) in West Point](http://www.usma.edu/nsc/) ([blog](http://blog.netsciwestpoint.org/)).
-   [Network Science IGERT at the University of California at Santa Barbara (UCSB)](http://networkscience.igert.ucsb.edu/) - [NSF-funded](http://www.igert.org/)の修士課程を備える.
-   [Networks, Computation, and Social Dynamics Lab](http://www.ncasd.org/) - カーター・T・バッツが率いる。カリフォルニア大学イーヴァンス校の [Center for Networks and Relational Analysis](http://relationalanalysis.org/) (CNRA) の一部である.
-   [Northeastern University Network Science Institute](http://www.networkscienceinstitute.org/) - 博士課程のネットワーク科学プログラムを備える.
-   [Northeastern University Center for Complex Network Research](https://www.northeastern.edu/research/centers/center-for-complex-network-research-ccnr/) - アルベルト・ラズロ・バラバシが率いる.
-   [Northeastern University MOBS Lab - Laboratory for the Modeling of Biological and Socio-technical Systems](http://www.mobs-lab.org/) - アレッサンドロ・ヴェスピガニが率いる.
-   [Pacific Ecoinformatics and Computational Ecology Lab](http://foodwebs.org/) - 生態ネットワーク（「食物網」）を研究する非営利研究グループ
-   [Peter J. Mucha’s Research Group at the University of North Carolina at Chapel Hill](http://mucha.web.unc.edu/networks/)
-   [Stanford Network Analysis Project](https://snap.stanford.edu/), [Jure Leskovec](https://cs.stanford.edu/~jure/)によって構成.
-   [Warren Center for Network & Data Sciences at the University of Pennsylvania](http://warrencenter.upenn.edu/)
-   [Yale Institute for Network Science (YINS)](http://yins.yale.edu/)

### Research Groups (Other)

> Network-focused research centers, (reading) groups, institutes, labs – you name it – based outside of the USA.

-   [Cambridge Networks Network (CNN)](http://www.cnn.group.cam.ac.uk/) - 複雑ネットワークに関する研究ネットワーク.
-   [Centre for Business Network Analysis, University of Greenwich](http://www.gre.ac.uk/business/research/centres/cbna/home) - 経済／組織ネットワーク分析に焦点を当てる.
-   [Center for Network Science, Central European University, Budapest](http://cns.ceu.edu/) - 博士課程のネットワーク科学プログラムを備える.
-   [Complex Networks](http://www.complexnetworks.fr/) - パリに所在する研究グループ.
-   [Cx-Nets](http://www.cxnets.org/) - 複雑ネットワーク研究グループ間の仮想協働
-   [Data Science Group](http://datasciencegroup.pl/) -  ワロクラフに拠点を置く研究グループが、複雑ネットワークやその他のネットワーク関連分野を研究している
-   [Digital Humanities](http://cmb.huma-num.fr/) - ベルリンのマルク・ブロッのセンターにおける、多分野を横断する研究グループで、多くのネットワーク科学プロジェクトを実施
-   [Forschungscluster der Universitäten Trier und Mainz “Gesellschaftliche Abhängigkeiten und soziale Netzwerke”](http://www.netzwerk-exzellenz.uni-trier.de/), デュアル言語（ドイツ語）
-   [GDR Analyse de réseaux en sciences humaines et sociales](https://arshs.hypotheses.org/) – 社会科学者向けのネットワーク分析のトレーニングやワークショップを支援するフランスの研究グループ
-   [Historical Network Research (HNR)](http://historicalnetworkresearch.org/) - 歴史研究におけるネットワーク分析に興味を持つ学術者向けのプラットフォーム
    -   [HNR Conferences, Workshops and Other Events](http://historicalnetworkresearch.org/hnr-events/)
    -   [HNR Talks](https://vimeo.com/user11811027) - ドイツ語の動画
-   [ANR-Lab - International Laboratory for Applied Network Research](https://anr.hse.ru/en/) - モスクワのナショナル・リサーチ・ユニバーシティに拠点を置くロシアのグループ
    -   [Theory and Methods in Network Analysis (“TMSA”) Summer Schools](https://anr.hse.ru/en/summer)
-   [Large Graphs and Networks](http://sites.uclouvain.be/networks/) - ルーヴァンのカトリック大学（[official page](https://uclouvain.be/en/research-institutes/icteam/large-graphs-and-networks.html)）における研究グループ
-   [MelNet Social Network Research Group, Swinburne University of Technology](http://www.swinburne.edu.au/fbl/research/transformative-innovation/our-research/MelNet-social-network-group/)
-   [Mitchell Centre for Social Network Analysis, University of Manchester](http://www.socialsciences.manchester.ac.uk/mitchell-centre/) - 現在、[covert networks](http://www.socialsciences.manchester.ac.uk/mitchell-centre/research/covert-networks/)を研究している
-   [Murata Laboratory](http://www.net.c.titech.ac.jp/) - 東京に拠点を置く研究グループが、二部、三部およびk部（ハイパーコンネットワーク）を研究している
-   [NetLab](http://www.urbancentre.utoronto.ca/researchgroups/netlab.html) - トロント大学における研究ネットワークで、バリー・ウェルマンがリード
-   [Network Science Research Centre, Swansea University](http://www.swansea.ac.uk/medicine/enterpriseandinnovation/networkscienceresearchcentre/)
-   [Network Dynamics](http://networkdynamics.org/) - マギル大学における研究ラボで、[Derek Ruths](http://www.derekruths.com/)がリード
-   [Networks, Data, and Society (NERDS)](https://nerds.itu.dk/) - コペンハーゲンのIT大学における研究グループ
-   [Netzwerkerei](http://netzwerkerei.org/) - ユダヤ人の知識人間の間の関係性に関する歴史研究プロジェクト
-   [ORIO - Observatoire des Réseaux Intra- et Inter-Organisationnels](http://blogs.sciences-po.fr/recherche-network-organization-institution-dynamics-multilevel/) - ネットワークと規制に関する研究プログラム
    -   [‘Réseaux et Régulation’ Conference Cycle](http://blogs.sciences-po.fr/recherche-network-organization-institution-dynamics-multilevel/sminaire-rseaux-et-rgulation/) - パリのスカイスポにおけるセミナー
-   [Redes-Sociales](http://www.redes-sociales.net/)スペイン語で－バルセロナのアトム・ユニバーシティに拠点を置く情報ネットワーク
-   [RES-HIST : Réseaux et histoire](https://reshist.hypotheses.org/)フランス語で－歴史ネットワークに関する研究グループのブログ記事
    -   [RES-HIST Conferences](https://reshist.hypotheses.org/?s=res-hist)
-   [SocioPatterns](http://www.sociopatterns.org/) - 無線センサーを用いて社会ネットワークデータを研究する多分野の研究グループ
-   [SoNAR-C - Social Network Analysis Research Center, University of Italian Switzerland (USi)](http://www.sonarcenter.eco.usi.ch/)
-   [Topographies of Entanglements. Mapping Medieval Networks](https://oeaw.academia.edu/TopographiesofEntanglements) - オーストリア科学アカデミーに設置された研究プラットフォームで、中世史にネットワーク理論と可視化を応用するもの。
-   [UCL Centre for Organisational Network Analysis (CONA)](https://www.ucl.ac.uk/cona)
-   [Virtual Observatory for the Study of Online Networks (VOSON)](http://vosonlab.net/) - オーストラリア国立大学に設置された研究およびソフトウェア開発プロジェクト。

## Review Articles

### Archeological and Historical Networks

> See also the bibliographies [by Claire Lemercier and Claire Zalc](http://www.quanti.ihmc.ens.fr/Analyse-de-reseaux-bibliographie.html) (section on ‘_études structurales_’), [by the Historical Network Research Group](http://historicalnetworkresearch.org/resources/bibliography/), and [by Tom Brughmans](https://archaeologicalnetworks.wordpress.com/network-science-bibliography/).

-   [Analyse de réseaux et histoire](https://doi.org/10.3917/rhmc.522.0088), フランス語（_Revue d’histoire moderne et contemporaine_、2005）。
-   [Analyser les réseaux du passé en archéologie et en histoire](https://doi.org/10.4000/nda.2300), フランス語（_Les Nouvelles de l’Archéologie_、2014）。
-   [Formale Methoden der Netzwerkanalyse in den Geschichtswissenschaften: Warum und Wie? [Formal Network Methods in History: Why and How?]](http://www.studienverlag.at/data.cfm?vpath=openaccess/oezg-12012-lemercier&download=yes), デュース語（[preprint in English](https://shs.hal.science/halshs-00521527)；_Österreichische Zeitschrift für Geschichtswissenschaften_、2012）。
-   [From Hermeneutics to Data to Networks: Data Extraction and Network Visualization of Historical Sources](http://programminghistorian.org/lessons/creating-network-diagrams-from-historical-sources) （_Programming Historian_、2015）。
-   [Graph Theory and Networks in Biology](https://doi.org/10.1049/iet-syb:20060038) ([preprint](https://arxiv.org/abs/q-bio/0604006); _IET Systems Biology_, 2007).
-   [Introduction à la visualisation de données : l’analyse de réseau en histoire](https://www.martingrandjean.ch/introduction-visualisation-de-donnees-analyse-de-reseau-histoire/), フランス語（_Geschichte und Informatik_、2015）。
-   [Introduction : où en est l’analyse de réseaux en histoire ? [Introducción: ¿en qué punto se encuentra el análisis de redes en Historia?]](https://doi.org/10.5565/rev/redes.416), フランス語およびスペイン語（_REDES_、2011）。
-   [Networks and History](https://doi.org/10.1002/cplx.10054) （_Complexity_、2002）。
-   [Networks in Historical Research](http://www.themacroscope.org/?page_id=308) (in _The Historian’s Macroscope_, 2013).
-   [Networks of Power in Archaeology](https://doi.org/10.1146/annurev-anthro-102313-025901) (_年次人類学レビュー_, 2014).
-   [Netzwerkanalyse in den Geschichtswissenschaften. Historische Netzwerkanalyse als Methode für die Erforschung von historischen Prozessen](https://www.researchgate.net/publication/300723171_Netzwerkanalyse_in_den_Geschichtswissenschaften_Historische_Netzwerkanalyse_als_Methode_fur_die_Erforschung_von_historischen_Prozessen), デュース語（_[Prozesse. Formen, Dynamiken, Erklärungen](https://www.springer.com/de/book/9783531176604)_、2015）。
-   [The Roots and Shoots of Archaeological Network Analysis: A Citation Analysis and Review of the Archaeological Use of Formal Network Methods](https://www.academia.edu/6925120/Brughmans_T._2014_._The_roots_and_shoots_of_archaeological_network_analysis_A_citation_analysis_and_review_of_the_archaeological_use_of_formal_network_methods._Archaeological_Review_from_Cambridge_29_1_) （ケンブリッジ大学の考古学レビュー、2014年）
-   [Thinking Through Networks: A Review of Formal Network Methods in Archaeology](https://doi.org/10.1007/s10816-012-9133-8) （考古学的方法と理論誌、2013年）

### Bibliographic, Citation and Semantic Networks

-   [Assessing Impact and Quality from Local Dynamics of Citation Networks](https://doi.org/10.1016/j.joi.2011.08.005) （_Journal of Informetrics_、2012年）
-   [Atypical Combinations and Scientific Impact](https://doi.org/10.1126/science.1240474) （_Science_、2013）。
-   [On Bibliographic Networks](https://doi.org/10.1007/s11192-012-0940-1) （_Scientometrics_、2013）。
-   [Dynamic Scientific Co-Authorship Networks](http://patrickdoreian.com/wp-content/uploads/2017/12/dynamic-scientific-coauthorship-networks.pdf) (_[Models of Science Dynamics](https://www.springer.com/us/book/9783642230677)_, 2012).
-   [Extracting Citation Networks from Publications in Classics](http://www.digitalhumanities.org/dhq/vol/10/2/000255/000255.html) （_Digital Humanities Quarterly_、2016）。
-   [Self-Citations, Co-Authorships and Keywords: A New Approach to Scientists’ Field Mobility?](https://doi.org/10.1007/s11192-007-1680-5) (_Scientometrics_, 2007).
-   [Socio-Semantic Frameworks](https://doi.org/10.1142/S0219525913500136) ([preprint](http://camille.roth.free.fr/travaux/roth--sociosemantic-systems-acs-proofs.pdf); 多変量システムの進展、2013)
-   [Socio-Semantic Modeling of Epistemic Communities](https://ssrn.com/abstract=2452614) (APSA, 2014).
-   [Tradition and Innovation in Scientists’ Research Strategies](https://doi.org/10.1177/0003122415601618) (_年次社会学レビュー_, 2015).

### Biological, Ecological and Disease Networks

-   [Biological Networks](http://kops.uni-konstanz.de/handle/123456789/25907) （グラフ描画と可視化ハンドブック、2014）
-   [Interactome Networks and Human Disease](https://barabasi.com/f/326.pdf) (_Cell_, 2011).
-   [Network Analysis: An Integrative Approach to the Structure of Psychopathology](https://doi.org/10.1146/annurev-clinpsy-050212-185608) (_Annual Review of Clinical Psychology_, 2013).
-   [Network Biology: Understanding the Cell’s Functional Organization](https://barabasi.com/f/147.pdf) - 細胞ネットワーク解析に向けたアクセスしやすい導入 (_Nature Reviews Genetics_, 2004)
-   [Network Medicine: A Network-based Approach to Human Disease](https://barabasi.com/f/320.pdf) (_Nature Review Genetics_, 2011).
-   [Social Networks and the Spread of Infectious Diseases: the AIDS Example](https://doi.org/10.1016/0277-9536(85)90269-2) (_Social Networks_, 1985).
-   [Structure and Dynamics of Molecular Networks: A Novel Paradigm of Drug Discovery. A Comprehensive Review](https://doi.org/10.1016/j.pharmthera.2013.01.016) - さらに、ネットワーク解析ソフトウェアの印象的なリストも含まれています（_Pharmacology & Therapeutics_、2013）

### Complex and Multilayer Networks

-   [The Architecture of Complexity](https://barabasi.com/f/226.pdf) - ネットワーク理論から複雑性理論へ (_IEEE Control Systems Magazine_, 2007).
-   [Complex Systems and Networks](https://www.science.org/toc/science/325/5939) (『_Science_』の特別号、2009年。)
-   [Multilayer Networks in a Nutshell](https://doi.org/10.1146/annurev-conmatphys-031218-013259) (_年次凝縮物質物理学レビュー_, 2019).
-   [Statistical Mechanics of Complex Networks](https://barabasi.com/f/103.pdf) （_現代物理学のレビュー_、2002年）
-   [The Structure and Function of Complex Networks](https://doi.org/10.1137/S003614450342480) (_SIAM Review_, 2003).

### Ethics of Network Analysis

-   [A Cautionary Note on Data Inputs and Visual Outputs in Social Network Analysis (SNA)](https://doi.org/10.1111/j.1467-8551.2012.00835.x) ([preprint][conway2014]; _British Journal of Management_, 2014).
-   [Ethical Dilemmas in Social Network Research](https://www.sciencedirect.com/journal/social-networks/vol/27/issue/2) （_Social Networks_ の特別号、2005年）
-   [Ethical and Strategic Issues in Organizational Social Network Analysis](http://www.analytictech.com/borgatti/papers/ethics.pdf) （応用行動科学ジャーナル、2003年）

[conway2014]: https://lra.le.ac.uk/bitstream/2381/36068/2/Draft%20BJM%20Revised%20(3rd%20iteration)%20Manuscript.pdf

### Network Modeling

-   [A Brief History of Statistical Models for Network Analysis and Open Challenges][fienberg2012] (_Journal of Computational and Graphical Statistics_, 2012).
-   [Basic Models and Questions in Statistical Network Analysis](https://projecteuclid.org/euclid.ssu/1504836152) (_Statistics Surveys_, 2017).
-   [Introduction to Stochastic Actor-Based Models for Network Dynamics](https://doi.org/10.1016/j.socnet.2009.02.004) ([preprint](http://www.stats.ox.ac.uk/~snijders/SnijdersSteglichVdBunt2009.pdf); _Social Networks_, 2010).
-   [Navigating the Range of Statistical Tools for Inferential Network Analysis](https://doi.org/10.1111/ajps.12263) (_アメリカ政治科学ジャーナル_, 2017).
-   [Positional Analysis and Blockmodeling](http://link.springer.com/referenceworkentry/10.1007%2F978-1-4614-1800-9_138) (_Computational Complexity_, 2012).
-   [Social Network Evolution and Actor Oriented Models](https://doi.org/10.4000/msh.2750) (_Mathematics & Social Sciences_, 1997).
-   [Statistical Models for Social Networks](https://doi.org/10.1146/annurev.soc.012809.102709) (_年次社会学レビュー_, 2011).
-   [A Survey of Statistical Network Models](https://dl.acm.org/citation.cfm?id=1734795) - 書籍形式のレビュー ([preprint](https://arxiv.org/abs/0912.5410); _Foundations and Trends in Machine Learning_, 2010).
-   [A Unified View of Generative Models for Networks: Models, Methods, Opportunities, and Challenges](https://arxiv.org/abs/1411.4070) ([video presentation](http://www.birs.ca/events/2015/5-day-workshops/15w5080/videos/watch/201504200944-Jacobs.html); [NIPS 2014 workshop](https://nips.cc/Conferences/2014/Schedule?type=Workshop) における「[Networks: From Graphs to Rich Data](https://410f84824e101297359cc81c78f45c7c079eb26c.googledrive.com/host/0Bz6WHrWac3FrWnA5MjZqb3lWa2c/)」).

[fienberg2012]: http://www.stat.cmu.edu/~brian/780/hw01/Fienberg%20(2012)%20A%20Brief%20History%20of%20Statistical%20Models%20for%20Network%20Analysis%20and%20Open%20Challenges.pdf

### Network Visualization

-   [Explorations into the Visualization of Policy Networks](https://www.academia.edu/17565685/Explorations_into_the_Visualization_of_Policy_Networks) （理論政治ジャーナル、1999年）
-   [Graphical Techniques for Exploring Social Network Data](http://moreno.ss.uci.edu/87.pdf) （社会ネットワーク分析におけるモデルと手法、2005）
-   [Methods of Social Network Visualization](http://moreno.ss.uci.edu/90.pdf) （『複雑性とシステム科学の百科事典』、2009；[poster version](http://www.pfeffer.at/data/visposter/)）
-   [Social Networks](http://moreno.ss.uci.edu/93.pdf) （グラフ描画と可視化ハンドブック、2013）

### Social, Economic and Political Networks

> See also the bibliographies [by Eszter Hargittai](http://eszter.com/contract.html#socnet), [by Pierre François](http://pierrefrancois.wifeo.com/documents/Cours-rseau---biblio-gnrale.pdf) and [by Pierre Mercklé](http://socio.ens-lyon.fr/merckle/merckle_communications_2008_cargese_reseaux_nuls_biblio.pdf).

-   [A propos de la notion de rôle dans l’analyse des relations sociales](https://doi.org/10.4000/msh.11969) (_Mathématiques et sciences humaines_, 2011).
-   [Brokerage](https://doi.org/10.1146/annurev-soc-081309-150054) (_年次社会学レビュー_, 2012).
-   [Birds of a Feather: Homophily in Social Networks](https://doi.org/10.1146/annurev.soc.27.1.415) (_年次社会学レビュー_, 2001).
-   [Mixed-Method Approaches to Social Network Analysis](http://eprints.ncrm.ac.uk/842/) (ESRC NCRM Discussion Paper, 2010).
-   [Network Analysis and Political Science](https://doi.org/10.1146/annurev.polisci.12.040907.115949) (_年次政治科学レビュー_, 2011).
-   [Network Analysis for International Relations](https://www.cambridge.org/core/journals/international-organization/article/div-classtitlenetwork-analysis-for-international-relationsdiv/DE2910979C1B5C44C4CC13F336C5DE97) (_International Organization_, 2009).
-   [Network Analysis in the Social Sciences](http://science.sciencemag.org/content/323/5916/892) (_Science_, 2009).
-   [Networks and Trade](https://doi.org/10.1146/annurev-economics-080217-053506) (_年次経済レビュー_, 2018).
-   [Networks in Social Psychology, Beginning with Kurt Lewin](http://link.springer.com/10.1007%2F978-1-4614-6170-8_79) (_[Encyclopedia of Social Network Analysis and Mining](https://www.springer.com/us/book/9781461461692)_, 2014).
-   [Networks in the Understanding of Economic Behaviors](https://www.aeaweb.org/articles?id=10.1257/jep.28.4.3) (_経済展望_, 2014).
-   [Positions and Roles](http://sk.sagepub.com/reference/the-sage-handbook-of-social-network-analysis/n29.xml) (_[The SAGE Handbook of Social Network Analysis](http://www.sagepub.in/books/Book232753/)_, 2011).
-   [The Social and the Sexual: Networks in Contemporary Demographic Research](http://repository.upenn.edu/psc_working_papers/41/) (PSC ワークイングペーパー シリーズ, 2013).
-   [Social Network Analysis in the Study of Terrorism and Political Violence](http://journals.cambridge.org/article_S1049096510001848) ([preprint](http://opensiuc.lib.siu.edu/cgi/viewcontent.cgi?article=1048&context=pn_wp); _PS: 政治科学と政治_, 2011).
-   [Social Networks and Crime: Pitfalls and Promises for Advancing the Field](https://doi.org/10.1146/annurev-criminol-011518-024701) (_年次犯罪学レビュー_, 2019).
-   Urban Social Networks: Some Methodological Problems and Possibilities ([_The Small World_](https://www.worldcat.org/title/small-world/oclc/925078340&referer=brief_results), 1989).

## Selected Papers

> A voluntarily short list of applied, epistemological and methodological articles, many of which have become classic readings in network analysis courses. Intended for highly motivated social science students with little to no prior exposure to network analysis.

-   [Aux sources des grands réseaux d’interactions. Retour sur quelques propriétés déterminantes des réseaux sociaux issus de corpus documentaires](https://www.cairn.info/revue-reseaux1-2008-6-page-21.htm), パスカル・クリストフォリによる、フランス語で書かれたもの - 高規模かつオンラインデータの観点から、関係社会学およびネットワーク分析の現状をレビュー (_Réseaux_, 2008).
-   [Birds of a Feather, Or Friend of a Friend? Using Exponential Random Graph Models to Investigate Adolescent Social Networks](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2831261/), ステファン・M・グッドリュー、ジェームズ・A・キッツおよびマルティナ・モリスによる - 指数型ランダムグラフモデルの論理と応用についてのアクセスしやすい導入 (_Demography_, 2001).
-   [Chains of Affection: The Structure of Adolescent Romantic and Sexual Networks](http://www.soc.duke.edu/~jmoody77/chains.pdf), ペーター・S・ベアマン、ジェームズ・モディとケイサン・ストーブルによる - 感情的および性的関係のネットワークに適用された、トポロジカルネットワーク分析の古典的例 (_アメリカン・ジャーナル・オブ・ソシオロジー_, 2004).
-   [Coauthorship and Citation Patterns in the _Physical Review_](https://doi.org/10.1103/PhysRevE.88.012814), トラビス・マーティンらによる - 時間的ネットワーク分析を通じた科学出版の生産性と協働に関する非常に典型的な研究 ([preprint](https://arxiv.org/abs/1304.0473); _Physical Review E_, 2013).
-   [The Convergence of Social and Technological Networks](https://www.cs.cornell.edu/home/kleinber/cacm08.pdf), ジョン・クレインベルグによる - インターネットおよびソーシャルメディアの文脈において、小世界効果と社会的伝染について述べる (_Communications of the ACM_, 2008).
-   [Deux traditions d’analyse des reseaux sociaux](https://www.cairn.info/revue-reseaux1-2002-5-page-183.htm), マイクル・エヴ（[English version](https://www.academia.edu/14524365/THE_TWO_TRADITIONS_OF_NETWORK_ANALYSIS); _Réseaux_, 2002）による.
-   [Homophily and Contagion Are Generically Confounded in Observational Social Network Studies](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3328971/), コスマ・R・シャリジとアンドリュー・C・トーマスによる - ネットワーク拡散および影響の分析において非常に重要な点を提示 (_Sociological Methods and Research_, 2011).
-   [La notion de réseau complexe : du réseau comme abstraction et outil à la masse de données des réseaux sociaux en ligne](https://doi.org/10.4000/communicationorganisation.4093), アラン・バラットによる、フランス語で書かれたもの - 複雑ネットワークの研究についてのアクセスしやすい導入 (_Communication & Organisation_, 2013).
-   [Network Analysis, Culture, and the Problem of Agency](https://www.mustafaemirbayer.com/network-analysis-culture-and-the-pr), マウスファ・エミルバイヤーとジェフ・グッドウィン（_American Journal of Sociology_, 1994）および [Manifesto for a Relational Sociology](https://www.mustafaemirbayer.com/copy-3-of-bourdieu)、マウスファ・エミルバイヤー（_American Journal of Sociology_, 1997）による - 社会的つながりの科学の社会学的基礎.
-   [Network Theory, Plot Analysis](https://sydney.edu.au/intellectual-history/documents/moretti_network_theory_plot_analysis.pdf), フランコ・モレティによる - 文学研究における（架空の）ネットワーク分析の応用例 (_New Left Review_, 2011).
-   [Node Centrality in Weighted Networks: Generalizing Degree and Shortest Paths](https://doi.org/10.1016/j.socnet.2010.03.006), ツォー・オプスハル、フィリップ・アグネエセンおよびジョン・スコヴレッツによる - ネットワークの中心性および距離測度を、(正の)値を持つグラフに一般化する研究 (_Social Networks_, 2010; [companion website](https://toreopsahl.com/tnet/)).
-   [Scale-Free Networks](https://barabasi.com/f/124.pdf), アルベルト・ラズロ・バラバシおよびエリク・ボナーブによる - 「ネットワークはあらゆる場所に存在する」という主張の初期かつアクセスしやすい表現 (_Scientific American_, 2003).
-   [Social Networks and Causal Inference](http://link.springer.com/chapter/10.1007/978-94-007-6094-3_17), テイラー・J・ヴァンダウェルとウェイハーアンによる - ネットワーク分析が意味のある因果的主張を生み出す方法についてのレビュー、およびネットワーク分析がそのような主張を導くために内在する限界 (_[Handbook of Causal Analysis for Social Research](http://link.springer.com/book/10.1007/978-94-007-6094-3)_, 2013).
-   [The Performativity of Networks](https://kieranhealy.org/files/papers/performativity.pdf), キエラン・ヘリーによる - ネットワーク分析と科学研究の交差点：社会ネットワークは、金融市場のように、パフォーマティビティ（現実が理論的探求によって変化する可能性）に非常に敏感である (_European Journal of Sociology_, 2015).
-   [Revisiting the Foundations of Network Analysis](http://science.sciencemag.org/content/325/5939/414), カーティス・T・バッツによる、研究問題をフレームするための適切なネットワーク表現を選ぶことについて.
-   [Robust Action and the Rise of the Medici, 1400-1434](http://home.uchicago.edu/~jpadgett/papers/published/robust.pdf), ジョン・F・パディッグとクリスチャン・K・アンセルによる、レナisen時代フローレンスの国家における権力関係の古典的分析 (_アメリカン・ジョーナル・オブ・ソシオロジー_, 1993).
-   [The Strength of Weak Ties](https://sociology.stanford.edu/sites/default/files/publications/the_strength_of_weak_ties_and_exch_w-gans.pdf), マーク・グランオベッツによる、社会問題（求職）にネットワーク分析を適用したアーカイブ的例 (_アメリカン・ジョーナル・オブ・ソシオロジー_, 1973).
-   [The Ties that Divide: A Network Analysis of the International Monetary System, 1890–1910](http://www.stats.ox.ac.uk/~snijders/FlandreauJobst2005.pdf) (_The Journal of Economic History_, 2005) および [The Empirics of International Currencies: Network Externalities, History and Persistence](https://doi.org/10.1111/j.1468-0297.2009.02219.x) (_The Economic Journal_, 2009)、どちらもマール・フランドルエとクレメンス・ジョブストによる、19世紀後半の外貨取引システムに関するネットワーク分析 ([data](http://eh.net/database/international-currencies-1890-1910/)).
-   [Topics in Social Network Analysis and Network Science](https://arxiv.org/abs/1404.0067), ア・ジェームズ・O’マリーとジュッカ・ペッカ・オンネラによる、ネットワーク分析の50ページの導入、すべての側面について適切な詳細を含む (_The Handbook of Health Services Research_, 2017年発行).

## Software

> For a hint of why this section of the list might be useful to some, see [Mark Round’s Map of Data Formats and Software Tools](http://mdround.blogs.com/usingnetworks/2009/07/sna-tools-and-formats-diagram-updated.html) (2009).
> Several links in this section come from the [NetWiki Shared Code](http://netwiki.amath.unc.edu/SharedCode/SharedCode) page, from the Cambridge Networks Network [List of Resources for Complex Network Analysis](http://www.cnn.group.cam.ac.uk/Resources), and from the [Software for Social Network Analysis](http://www.gmw.rug.nl/~huisman/sna/software.html) page by Mark Huisman and Marijtje A.J. van Duijn. For a recent academic review on the subject, see the [Social Network Algorithms and Software](https://doi.org/10.1016/B978-0-08-097086-8.43121-1) entry of the _International Encyclopedia of Social and Behavioral Sciences_, 2nd edition (2015).
> See also the [Social Network Analysis Project Survey](https://docs.google.com/spreadsheets/d/1Xo-ehJatzmxMek6gPG0h-d7yRSuiO6_flViTQNMAku0/edit#gid=0) ([blog post](http://pudo.org/blog/2013/12/21/sna-survey.html)), an earlier attempt to chart social network analysis tools that links to many commercial platforms not included in this list, such as [Detective.io](http://www.detective.io/). The Wikipedia English entry on [Social Network Analysis Software](https://en.wikipedia.org/wiki/Social_network_analysis_software) also links to many commercial that are often very expensive, outdated, and far from being awesome by any reasonable standard.
> Software-centric tutorials are listed below their program of choice: other tutorials are listed [in the next section](#tutorials).

-   [ArcGIS Network Analyst](http://www.esri.com/software/arcgis/extensions/networkanalyst) - 複雑なルーティング問題を解決するための、ネットワークベースの空間分析ソフトウェア.
-   [CFinder](http://www.cfinder.org/) - , クリク・ペルコレーション法（CPM）を用いて、クラスタとコミュニティを特定するための、プラットフォームを越えて動作するJavaプログラム.
-   [Circos](http://circos.ca/) - , ネットワークデータの円形レイアウトを生成するための、プラットフォームを越えて動作するPerlによるプログラム.
-   [Cytoscape](http://www.cytoscape.org/) - , ネットワークの構築、分析、可視化を行うための、プラットフォームを越えて動作するJavaプログラム。また、JavaScriptライブラリも提供.
    -   [Network Analysis with Cytoscape Tutorial](https://archaeologicalnetworks.wordpress.com/resources/#cytoscape) - , 地質学および考古学の事例研究を通じて説明（2013年）.
-   [Discourse Network Analyzer (DNA)](http://www.philipleifeld.com/discourse-network-analyzer/discourse-network-analyzer-dna.html) - , ネットワークエクスポート機能を備えた定性的コンテンツ分析ツール、Javaで構築され、Rとの統合を実現.
-   [E-Net](https://sites.google.com/site/enetsoftware1/) - , エゴネットワーク分析を行うためのWindowsプログラム.
-   [EgoNet](https://sourceforge.net/projects/egonet/) - エゴネットワーク分析を行うマルチプラットフォームJavaプログラム。
-   [EgoWeb](https://www.qualintitative.com/egoweb/) - , ソーシャルネットワークデータの収集および処理を行うためのサーバー側ソフトウェア.
-   [easyN](http://www.esyn.org/) - , 基因相互作用ネットワークおよびPetriネットモデルを表現・共有するためのオンラインツール.
-   [Gephi](https://gephi.org/) - , ネットワーク可視化を行うための、プラットフォームを越えて動作する、無料かつオープンソースツール.
    -   [Clément Levallois’ Gephi Tutorials](https://seinecle.github.io/gephi-tutorials/)
    -   [Geographische Netzwerkvisualisierung mit dem Programm ‘Gephi’](http://www.podcampus.de/nodes/RJVZo), デート語（2016年）.
    -   [Introduction to Network Analysis and Visualization with Gephi](http://www.martingrandjean.ch/gephi-introduction/) (2015).
    -   [Practical Social Network Analysis With Gephi](http://derekgreene.com/gephitutorial/) (2014).
-   [GLEAMviz Simulator](http://www.gleamviz.org/) - 人間の流行病の予測に向けた、プラットフォームを越えて動作するツール.
-   [Graph Commons](https://graphcommons.com/) - データネットワークのマッピング・分析・公開を可能にする協働プラットフォーム。
-   [Graphia](https://graphia.app/) - 大規模かつ複雑なネットワークを可視化するためのマルチプラットフォームツール（[announcement](https://www.cnn.group.cam.ac.uk/news/Graphia-April19)）。
-   [Graphviz](http://www.graphviz.org/) - DOTグラフ描画言語でグラフを描くためのマルチプラットフォームソフトウェア。
-   [Graphy](https://github.com/bruce/graphy) - Rubyで書かれたグラフ理論ライブラリ。
-   [GraphX](https://spark.apache.org/graphx/) - グラフ関連の並列計算を行うための[Apache Spark](https://spark.apache.org/)モジュール。
-   [Linkage](https://linkage.fr/) - テキストエッジを持つネットワークを可視化・モデル化するオンラインツール。
-   [Lynks](https://lynksoft.com/) - シンプルなネットワーク分析および可視化を行うウェブベースツール。
-   [Mathematica](https://www.wolfram.com/mathematica/) - グラフ理論およびネットワーク分析機能を備えたマルチプラットフォームプログラム。
    -   [IGraph/M](https://github.com/szhorvat/IGraphM) - Mathematica内で標準的なMathematica オブジェクトを使用してライブラリを呼び出すためのインターフェース。 `igraph` `Graph`
-   [Metamaps](https://metamaps.cc/) - ネットワークを描くための無料かつオープンソースプラットフォーム（現在ベータ版）。
-   [MuxViz](http://muxviz.net/) - RおよびGNU Octaveに基づく、マルチレイヤーネットワークを研究するためのマルチプラットフォーム、無料かつオープンソースツール。
-   [Neo4j](http://neo4j.com/) - 企業が利用しているオープンソース、スケーラブルなグラフデータベース（[Linkurious](http://linkurio.us/)）。
-   [Network Canvas](http://networkcanvas.com/) - 自己中心的および個人ネットワーク研究に用いる無料かつオープンソースの調査ツールセット（其中包括[documentation](https://documentation.networkcanvas.com)および[user community](https://community.networkcanvas.com)）。
-   [Node Overlap and Segregation Software](http://nos.alwaysdata.net/) - [Strona and Veech](https://doi.org/10.1111/2041-210X.12395)のノード重なりおよび分離度を計算するウェブベースツール。
-   [Nodegoat](http://nodegoat.net/) - データ管理、ネットワーク分析および可視化を行うウェブベース環境（[blog](http://nodegoat.net/blog)）。
-   [NodeXL](http://nodexl.codeplex.com/) - Microsoft Excelでネットワークグラフを探索するための無料かつオープンソーステンプレート。
    -   [The NodeXL Series](https://blogs.k-state.edu/it-news/tag/nodexl/) - NodeXL（2013）を使用するに関するブログ記事シリーズ。
-   [ORA-LITE](http://www.casos.cs.cmu.edu/projects/ora/) - 動的メタネットワークの評価および分析を行うWindowsアプリケーション。
-   [OSoMe](https://osome.iu.edu/) - ソーシャルメディア観測所（インディアナ大学の多分野研究センター）は、現在および過去のソーシャルメディア投稿を閲覧できるツールを提供。
-   [Pajek](http://mrvar.fdv.uni-lj.si/pajek/) - 大規模ネットワーク分析を行うためのWindowsアプリケーション（非営利用途には無料）。
    -   [Analyse des réseaux : une introduction à Pajek](https://quanti.hypotheses.org/512/)フランス語で（2011年）。
    -   [La détection de communautés avec Pajek 3.6](https://groupefmr.hypotheses.org/544)フランス語で（2012年）。
-   [Palladio](http://hdlab.stanford.edu/palladio/) - スタンフォード大学の [Humanities + Design research lab](http://hdlab.stanford.edu/) が開発したウェブベースの空間ネットワーク可視化ツール。
-   [PARTNER - Program to Analyze, Record, and Track Networks to Enhance Relationships](https://visiblenetworklabs.com/partner-cprm/) - アンケートからネットワークを構築するためのエクセルベースツール。
-   [PIGALE - Public Implementation of a Graph Algorithm Library and Editor](https://pigale.sourceforge.net/) - 平面グラフを分析するためのWindowsプログラムおよびC++ライブラリ。
-   [PNet](http://www.swinburne.edu.au/fbl/research/transformative-innovation/our-research/MelNet-social-network-group/PNet-software/index.html) - Javaで書かれたWindows用の、(一モードおよび多層)指数ランダムグラフモデル（ERGM）のシミュレーションおよび推定ツール。
-   [Polinode](https://www.polinode.com/) - ネットワークデータの分析および関係に基づくアンケートによるネットワークデータ収集を行うウェブベースプラットフォーム。
-   [PUCK - Program for the Use and Computation of Kinship data](http://www.kintip.net/) - 遺伝学的ネットワーク分析用のクロスプラットフォームJavaプログラム。
-   [qgis-edge-bundling](https://github.com/ait-energy/qgis-edge-bundling) - QGIS Processing toolbox向けの力によるエッジバンドリングの実装。
-   [Radatools](https://deim.urv.cat/~sergio.gomez/radatools.php) - 複雑ネットワーク分析用のツールセットで、Adaで書かれた [Radalib](http://deim.urv.cat/~sergio.gomez/radalib.php) をベースに構築。
-   [Retina](https://ouestware.gitlab.io/retina) - GEXFおよびGraphMLネットワーク可視化を共有できるウェブアプリケーション。
-   [Scikit-network](https://github.com/sknetwork-team/scikit-network) - グラフ上の機械学習を行うためのオープンソースライブラリ。
-   [SageMath](https://www.sagemath.org/) - 広範な [graph capabilities](http://doc.sagemath.org/html/en/reference/graphs/index.html) を備えたオープンソース数学ソフトウェア。
-   [Segrada](https://www.segrada.org/) - 意味ネットワークデータベースの構築および可視化を行うクロスプラットフォームツール。
-   [Siena](https://www.stats.ox.ac.uk/~snijders/siena/) - 実証ネットワーク分析用のシミュレーション調査。以前はWindowsプログラムであったが、現在はRSiena Rパッケージとして開発されている。
-   [SocNetV - Social Network Visualizer](https://socnetv.org/) - ハイパーリンクネットワークを構築するための [simple Web crawler](https://socnetv.org/news/?post=socnetv-v16-released-with-a-working-web-crawler) を含むクロスプラットフォームプログラム。
-   [SoNIA - Social Network Image Animator](http://web.stanford.edu/group/sonia/) - 動的または長期的なネットワークデータを可視化するツール。以前は [Java program](https://sourceforge.net/projects/sonia/)（[example movies](http://www.soc.duke.edu/~jmoody77/NetMovies/index.htm)）であったが、現在はndtv Rパッケージとして開発されている。
-   [SparklingGraph](https://sparkling-graph.github.io/) - Apache SparkのGraphXモジュールを用いて大規模分散ネットワーク計算を行うクロスプラットフォームツール。JavaおよびScalaで書かれた。
-   [SPaTo Visual Explorer](http://www.spato.net/) - 複雑ネットワークの可視化および探索を行うクロスプラットフォームプログラム。
-   [StOCNET](http://www.gmw.rug.nl/~stocnet/StOCNET.htm) - Sienaと同じチームが開発した複数のWindowsプログラム。
-   [Tulip](http://tulip.labri.fr/) - C++ライブラリに基づいた、マルチプラットフォーム対応のネットワーク分析および可視化フレームワークで、生物学的および物理的ネットワークに特化したプラグインが用意されている。また、その [Python package](http://tulip.labri.fr/Documentation/current/tulip-python/html/index.html) からも入手可能。
-   [UCINET](https://sites.google.com/site/ucinetsoftware/) - 社会ネットワークデータの分析に用いるWindows向け商用ソフトウェアパッケージ。
-   [Uberlink](http://www.uberlink.com/) - オンライン（ハイパーリンク）ネットワーク分析を実施するソフトウェアセット。 [VOSON](http://vosonlab.net/) の研究プロジェクトによって開発されたもの。
    -   [VOSON System](http://www.uberlink.com/software#voson) - オンラインネットワークデータの収集および分析を行うウェブベースソフトウェア。
    -   [VOSON Data Provider for NodeXL](http://www.uberlink.com/software#voson-nodexl) ([quick tutorial](https://blogs.k-state.edu/it-news/2013/04/09/the-nodexl-series-using-voson-for-hyperlink-network-analysis-part-9/); 2016年に終了予定)。
    -   [vosonR](http://vosonlab.net/tools) - VOSONソフトウェア向けのRクライアント（開発中）。
-   [UNISoN](http://unison.sleonard.co.uk/) - Usenetデータのダウンロードおよび可視化を行うマルチプラットフォームプログラム。 [Developed for a Masters degree](https://github.com/leonarduk/unison/wiki/MSc-Report-Abstract)。
-   [VennMaker: An Actor-Centered Interactive Network Mapping Tool](http://www.vennmaker.com/?lang=en) - エゴネットワーク分析を行うマルチプラットフォームJavaプログラム。
    -   [VennMaker for Historians: Sources, Social Networks and Software](http://revistes.uab.cat/redes/article/view/v21-during-bixier-kronenwett-stark) (スペイン語版も提供；2011年)。
-   [Visone](https://visone.ethz.ch/) - 非商業用途に無料で利用可能なマルチプラットフォームJavaネットワーク分析および可視化プログラム。
    -   [Visone Tutorials](https://visone.ethz.ch/wiki/index.php/Tutorials) - 考古学的ケーススタディを用いたものも含まれる（2017年）。
-   [Vizster](http://vis.stanford.edu/jheer/projects/vizster/) - オンライン社会ネットワークの可視化を行うマルチプラットフォームJavaプログラム。
-   [VOSviewer](https://www.vosviewer.com/) - 文献メトリクスネットワークの構築および可視化を行うマルチプラットフォームJavaツール。

### Algorithms

> Network placement and community detection algorithms that do not fit in any of the next subsections.
> See also the [Awesome Algorithms](https://github.com/tayllan/awesome-algorithms) and [Awesome Algorithm Visualization](https://github.com/enjalot/algovis) lists for more algorithmic awesomess.

-   [algo.graph](https://github.com/clojure/algo.graph) - グラフ理論の基本アルゴリズムをClojureで記述したもの。
-   [CONGA and CONGO](https://gregory.org/research/networks/software/conga.html) - ネットワーク内の重複するコミュニティを検出するアルゴリズム、Javaで記述。
-   [ForceAtlas2](https://gephi.wordpress.com/2011/06/06/forceatlas2-the-new-version-of-our-home-brew-layout/) - Gephiに含まれる力による配置（force-directed layout）（[paper](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0098679)）。
-   [Linkcomm - Link Communities in Complex Networks](https://github.com/bagrow/linkcomm) - コミュニティ検出アルゴリズム、C++およびPythonで提供（[and R](https://CRAN.R-project.org/package=linkcomm)）。
-   [MixNet - Erdös-Rényi Mixture Model for Networks](https://ssbgroup.fr/mixnet.html) - C++およびRで提供されるコミュニティ検出手法。
-   [OSLOM2 - Order Statistics Local Optimization Method](http://www.oslom.org/) - クラスタリングアルゴリズム。
-   [vbmod: Variational Bayesian Inference for Network Modularity](https://vbmod.sourceforge.net/) - MATLABおよびPythonでの [Bayesian community detection algorithm](https://arxiv.org/abs/0709.3512) の実装。
-   [weighted-modularity-LPAwbPLUS](https://github.com/sjbeckett/weighted-modularity-LPAwbPLUS) - ジュリア、MATLABおよびRにおける二つのアルゴリズムによる二部ネットワークにおける重み付きモジュラリティの計算コード

### C / C++

> For more awesome C / C++ content, see the [Awesome C](https://github.com/aleksandar-todorovic/awesome-c) and [Awesome C / C++](https://github.com/fffaraz/awesome-cpp) lists.

-   [Benchmark Graphs to Test Community Detection Algorithms](https://sites.google.com/site/santofortunato/inthepress2) - 重み付きおよび重みなしグラフを生成するC++コード
-   [BGL - Boost Graph Library](https://www.boost.org/doc/libs/1_60_0/libs/graph/doc/) - グラフ構造にアクセスするための一般化インターフェースを提供するC++ライブラリ
-   [igraph](https://igraph.org/) - ネットワーク解析ツールを備えたCライブラリ；PythonおよびR向けのパッケージも存在
-   [MapEquation](https://www.mapequation.org/) - 多層コミュニティ検出手法であるInfomapのためのC++コード
-   [Louvain Method](https://sites.google.com/site/findcommunities/) - [Louvain multi-level community detection algorithm](https://arxiv.org/abs/0803.0476)のためのC++コード
-   [networks.tb](https://networks-tb.sourceforge.net/) - ソーシャル・セマンティックネットワークの解析に設計されたCプログラム。LinuxおよびMac OS Xで動作。
-   [OGDF - Open Graph Drawing Framework](https://ogdf.uos.de/) - 図、ネットワーク、および木のレイアウトに用いる、自立したC++クラスライブラリ
-   [OpenOrd: Large-scale Graph Layout (formerly DrL)](http://www.cs.sandia.gov/~smartin/software.html) - C++アルゴリズムであり、[Gephi plugin](https://gephi.org/plugins/#/plugin/openord-layout)としても利用可能
-   [RAPIDS cuGraph](https://github.com/rapidsai/cugraph) - GPU加速されたグラフ分析に特化したPythonパッケージおよびC/C++/CUDAライブラリ。
-   [Stanford Network Analysis Project](http://snap.stanford.edu/) - 一般用途のネットワーク解析およびグラフマイニングライブラリ。PythonライブラリおよびMicrosoft ExcelのNodeXL経由で利用可能
-   [Walktrap](https://www-complexnetworks.lip6.fr/~latapy/PP/walktrap.html) - [WalkTrap community detection algorithm](https://arxiv.org/abs/physics/0512106)を実装するC++プログラム

### Java

- [GraphStore](https://github.com/gephi/graphstore) - メモリ内に格納されたグラフ構造の実装、Gephiを駆動する。
- [GraphStream](https://graphstream-project.org/) - 動的グラフのモデリングおよび解析に用いるJavaライブラリ
- [Mixer](https://github.com/keith-turner/mixer) - [Apache Fluo](https://fluo.apache.org/)を用いて複数の大きなグラフを連続的に統合する方法を示すプロトタイプ

### JavaScript

> For more awesome JavaScript libraries, see the [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) list.

-   [Cytoscape.js](https://js.cytoscape.org/) - ネットワーク解析および可視化ライブラリ
-   [d3.js](https://d3js.org/) - JavaScriptによる可視化ライブラリで、[force-directed graphs](http://bl.ocks.org/mbostock/4062045)をプロット可能
    -   [d3-force: Force-directed graph layout](https://github.com/d3/d3-force) 速度Verlet積分法を用いる。
    -   [d3-vector: Define connections between nodes as directional vectors](https://github.com/thepeoplesbourgeois/d3-vector)角および大きさからなるもの。
-   [GENSI](http://www.tobiasstark.nl/GENSI/GENSI.htm) - エゴ中心ネットワークデータを収集するJavaScriptグラフィカルツール（[paper](https://doi.org/10.1016/j.socnet.2016.07.007)）
-   [Gephi Lite](https://github.com/gephi/gephi-lite) - ウェブベースの、Gephiの軽量版
-   [GoJS](https://gojs.net/) - ダイアグラムや複数のネットワークレイアウトを描画するためのビジュアライゼーションライブラリ
-   [Graphology](https://graphology.github.io/) - 堅牢で多目的なJavaScript `Graph`オブジェクトの仕様および実装例
-   [greuler](https://mauriciopoppe.github.io/greuler/) - シンプルなAPIを用いてグラフを構築・操作するためのビジュアライゼーションライブラリ。d3.jsと[WebCola](https://ialab.it.monash.edu/webcola/)を採用
-   [jLouvain](https://github.com/upphiminn/jLouvain) - JavaScript用のLouvainコミュニティ検出（[example](http://bl.ocks.org/emeeks/125db75c9b55ddcbdeb5)）
-   [NetworkCube](https://github.com/networkcube/networkcube) - "ドメイン科学者向けの動的ネットワークビジュアライゼーション"。デモ例は[The Vistorian](https://networkcube.github.io/vistorian/)を参照
-   [Oligrapher](https://github.com/public-accountability/oligrapher) - 最初に["networks of influence" among U.S. elites](https://littlesis.org/)を可視化するためのライブラリ
-   [Popoto.js](https://github.com/Nhogs/popoto) - d3.jsをベースにした、グラフベースの検索インターフェースを提供するライブラリ
-   [Sigma](https://www.sigmajs.org/) - グラフ描画に特化したJavaScriptライブラリ。
-   [vis.js](https://visjs.org/) - ネットワークビジュアライゼーション機能を持つJavaScriptライブラリ
-   [VivaGraphJS](https://github.com/anvaka/VivaGraphJS) - グラフ描画ライブラリ（[ForceAtlas2 plugin](https://github.com/graphcommons/viva.forceatlas2)）
-   [viz.js](https://mdaines.github.io/viz.js/) - ウェブページにGraphvizを組み込む

### Julia

-   [BayesNets.jl](https://github.com/sisl/BayesNets.jl) - ベイズネットワークを扱うためのパッケージ
    -   [Smile.jl](https://github.com/sisl/Smile.jl) - ベイズネットワークおよび影響図をカバーするJulia用のラッパー（[Smile C++ library](http://www.bayesfusion.com/smile-engine)）
-   [EcologicalNetwork.jl](https://github.com/PoisotLab/EcologicalNetwork.jl) - 生態ネットワーク構造の測定値を計算するパッケージ
-   [EvolvingGraphs](https://github.com/weijianzhang/EvolvingGraphs.jl) - 時間依存ネットワークの作成・操作・研究を行うパッケージ
    -   [Dynamic Network Analysis in Julia](http://eprints.ma.man.ac.uk/2376/01/julia_eg_report.pdf)
-   [Graphs.jl](https://github.com/JuliaLang/Graphs.jl) - Juliaでグラフオブジェクトを操作するパッケージ
    -   [Creating Network Diagrams in Plotly from Julia](http://badhessian.org/2014/05/creating-network-diagrams-in-plotly-from-julia/)
    -   [MetaGraphs](https://github.com/JuliaGraphs/MetaGraphs.jl) - Graphs.jlにおけるグラフデータ構造で複数の異質メタデータを扱う
-   [JuliaGraphs](https://github.com/JuliaGraphs) - ネットワーク分析用のJuliaパッケージセット
    -   [GraphVisualize.jl](https://github.com/JuliaGraphs/GraphVisualize.jl) - [GLVisualize.jl](https://github.com/JuliaGL/GLVisualize.jl)をベースにしたグラフビジュアライゼーション
    -   [LightGraphs.jl](https://github.com/JuliaGraphs/LightGraphs.jl) - パフォーマンスとシンプルさに焦点を当てたグラフライブラリ
    -   [LightGraphsExtras.jl](https://github.com/JuliaGraphs/LightGraphsExtras.jl) - LightGraphs.jlパッケージ向けのコミュニティ検出およびその他の機能
    -   [NetworkLayout.jl](https://github.com/JuliaGraphs/NetworkLayout.jl) - グラフおよび木に対するレイアウトアルゴリズム
    -   [Networks.jl](https://github.com/JuliaGraphs/Networks.jl) - LightGraphs.jlパッケージ向けの追加グラフ関数
    -   [GraphCentrality.jl](https://github.com/JuliaGraphs/GraphCentrality.jl) - Graphs.jlパッケージにネットワーク測定を追加
-   [MatrixNetworks.jl](https://github.com/nassarhuda/MatrixNetworks.jl) - グラフ／マトリクス／ネットワーク構造を扱うためのメソッド
-   [NetworkFlows.jl](https://github.com/Azzaare/NetworkFlows.jl) - ネットワークフローアルゴリズムを提供するパッケージ
-   [NetworkViz.jl](https://github.com/abhijithanilkumar/NetworkViz.jl) - LightGraphs.jlで生成されたグラフを可視化するためのパッケージ、を用いる [ThreeJS.jl](https://github.com/rohitvarkey/ThreeJS.jl)
    -   [Video presentation of the package](https://youtu.be/kY5te9NwXo8?list=PLP8iPy9hna6SQPwZUDtAM59-wPzCPyD_S) JuliaCon 2016でその開発者が提供した
-   [PhyloNetworks.jl](https://github.com/crsl4/PhyloNetworks.jl) - 系統解析ネットワークを操作・分析・可視化するためのパッケージ
-   [TikzGraphs](https://github.com/sisl/TikzGraphs.jl) - TikZグラフィックス言語を用いてグラフレイアウトを作成するためのパッケージ

### MATLAB

> See also the webweb tool listed in the [Python](#python) section.

-   [Brain Connectivity Toolbox](https://sites.google.com/site/bctnet/) - 構造的および機能的脳接続データの複雑ネットワーク解析用のツールボックス、多くの関連プロジェクトとのリンクを備える
-   [Complex Networks Package for MatLab](http://www.levmuchnik.net/Content/Networks/ComplexNetworksPackage.html)
-   [CONTEST](http://www.maths.strath.ac.uk/research/groups/numerical_analysis/contest) - 9つのネットワークモデルを実装するランダムネットワークツールボックス
-   [Generalized Louvain](http://netwiki.amath.unc.edu/GenLouvain/GenLouvain) - Louvainコミュニティ検出アルゴリズムの変種
-   [MatlabBGL](https://dgleich.github.io/matlab-bgl/) - C++ Boost Graph Libraryをベースとしたグラフライブラリ
-   [MATLAB RBN Toolbox](http://www.teuscher.ch/rbntoolbox/index.htm) - ランダムブールネットワークのシミュレーションおよび可視化

### Python

> Many items below are from [a Google spreadsheet](https://docs.google.com/spreadsheets/d/1vJILk2EW1JnR3YAwTSSqAV5mPkeXaezy45wOoafBpfU/edit#gid=0) by Michał Bojanowski and others.
> See also [Social Network Analysis with Python](https://www.youtube.com/watch?v=qgGqaBAEy3Q), a 3-hour tutorial by Maksim Tsvetovat and Alex Kouznetsov given at PyCon US 2012 ([code](https://github.com/maksim2042/PyCon2012)).
> For more awesome Python packages, see the [Awesome Python](https://github.com/vinta/awesome-python) and [Awesome Python Books](https://github.com/Junnplus/awesome-python-books) lists.

-   [bokeh](https://bokeh.org/) - ブラウザ上でインタラクティブなデータ可視化を提供するPythonライブラリ、ネットワーク対応を含む
-   [cdlib](https://github.com/GiulioRossetti/cdlib) - 60以上のメソッドと評価・可視化機能を備えたPythonのコミュニティ検出ライブラリ
-   [CHSZLabLib](https://github.com/CHSZLab/CHSZLabLib) - 20の高性能C++ライブラリを統合したPythonインターフェース、グラフ分割、コミュニティ検出、切断、独立集合、動的グラフアルゴリズムに対応
-   [dash-cytoscape](https://github.com/plotly/dash-cytoscape) - Cytoscape.jsおよびDashを用いたPythonのインタラクティブネットワーク可視化ライブラリ
-   [graph-tool](http://graph-tool.skewed.de/) - ネットワーク操作および分析用のPythonモジュール、主にC++で構成されており、高速性を確保
-   [Graphinate](https://erivlis.github.io/graphinate/) - データソースからグラフを生成するためのPythonパッケージ、`networkx`に基づいて構築されたもの。
-   [graphviz](https://pypi.python.org/pypi/graphviz) - DOTグラフ描画言語向けのPythonレンダラー。
-   [graspologic](https://github.com/microsoft/graspologic) - 単一および複数ネットワーク向けの統計アルゴリズム、モデル、および可視化を提供するPythonパッケージ。
    -   [Tutorials on algorithms and models](https://graspologic.readthedocs.io/en/latest/)
-   [hiveplot](https://pypi.python.org/pypi/hiveplot) - matplotlib上でネットワークをハイブプロットとして描画するためのPythonユーティリティ、より包括的なネットワーク可視化を提供。
-   [karateclub](https://github.com/benedekrozemberczki/karateclub) - グラフ構造データに対する無教師学習をsklearnのようなAPIで実行するPythonパッケージ。
-   [linkpred](https://github.com/rafguns/linkpred) - ネットワークの未来のスナップショットにおける潜在リンクの可能性を評価する。
-   [littleballoffur](https://github.com/benedekrozemberczki/littleballoffur) - グラフ構造データからのサンプリングをsklearnのようなAPIで実行するPythonパッケージ。
-   [metaknowledge](http://networkslab.org/metaknowledge/) - bibliometricsデータを著者間および引用ネットワークに変換するためのPythonパッケージ。
-   [networkx](https://networkx.org/) - 複雑ネットワークの構造、動的性質、機能の作成、操作、および研究を行うためのPythonパッケージ。
    -   [Implementing an ERGM from Scratch in Python](https://gist.github.com/dmasad/8509304), networkxおよびnumpy (2014)を用いる。
    -   [nxviz](https://github.com/ericmjl/nxviz/) - NetworkX向けの可視化パッケージ。
-   [nngt](https://nngt.readthedocs.io) - `networkx`、`igraph`および`graph-tool`に包まれた、ライブラリに依存しないグラフ生成および分析。正規化されたグラフ測度、高度な可視化、(geo)空間ツール、および神経科学シミュレータとのインターフェースを含む。
-   [npartite](https://github.com/ike002jp/npartite) - n-partiteネットワークにおけるコミュニティ検出に用いるPythonアルゴリズム。
-   [parag](https://github.com/rraadd88/parag) - Pythonで高次グラフのインタラクティブ可視化。
-   [pathpy](https://www.pathpy.net/) - 高次および多次グラフモデルを用いたネットワーク上の時系列データの分析。
-   [PyGraphistry](https://github.com/graphistry/pygraphistry) - 大規模グラフの抽出、変換、可視化を実行するためのPythonライブラリ。
-   [python-igraph](http://igraph.org/python/) - igraphネットワーク分析パッケージのPython版。
-   [python-louvain](https://perso.crans.org/aynaud/communities/) - Louvainコミュニティ検出アルゴリズムのしっかりとした実装。
-   [Raphtory](https://www.raphtory.com/) - 時系列ネットワークの構築および分析を行うプラットフォーム。
-   [RAPIDS cuGraph](https://github.com/rapidsai/cugraph) - GPU加速されたグラフ分析に特化したPythonパッケージおよびC/C++/CUDAライブラリ。
-   [rustworkx](https://github.com/Qiskit/rustworkx) - Rustで実装された高性能Pythonグラフライブラリ
-   [scipy.sparse.csgraph](https://docs.scipy.org/doc/scipy/reference/sparse.csgraph.html#module-scipy.sparse.csgraph) - 稀疏行列表現を用いた高速グラフアルゴリズム
-   [Snap.py](http://snap.stanford.edu/snappy/index.html) - SNAP（大規模ネットワークの分析および操作に特化した一般用途・高性能システム）向けのPythonインターフェース
-   [SnapVX](https://github.com/snap-stanford/snapvx) - グラフ上に定義された問題に対する凸最適化ソルバー
-   [tnetwork](https://github.com/Yquetzal/tnetwork) - 時系列ネットワークおよび動的コミュニティ検出に特化したPythonライブラリ
-   [TQ (Temporal Quantities)](http://vladowiki.fmf.uni-lj.si/doku.php?id=tq) - 時系列ネットワーク分析用のPython3ライブラリ
-   [uunet](http://multilayer.it.uu.se/software.html) - マルチレイヤー社会ネットワーク向けのツール。
    - [Related book and data](http://multilayer.it.uu.se/). `multinet` を参照してください（R版）
-   [webweb](https://webwebpage.github.io/) - d3.jsを用いたインタラクティブネットワーク可視化を生成するMATLAB/Pythonライブラリ

### R

> For more awesome R resources, see the [Awesome R](https://github.com/qinwf/awesome-R) and [Awesome R Books](https://github.com/RomanTsegelskyi/rbooks) lists. See also [this Google spreadsheet](https://docs.google.com/spreadsheets/d/1CoFGtrW85D9FsVcAE5-bcXVl6QOTncwXjFBYp4u2WgE/edit?usp=sharing) by Ian McCulloh and others.
> To convert many different network model results into tidy data frames, see the [broom](https://CRAN.R-project.org/package=broom) package. To convert many different network model results into LaTeX or HTML tables, see the [texreg](https://CRAN.R-project.org/package=texreg) package.

-   [amen](https://CRAN.R-project.org/package=amen) - 関係データに対する加法的および乗法的効果モデル
-   [backbone](https://CRAN.R-project.org/package=backbone) - 重み付きネットワークを二値化する際に、有意なエッジのみを保持する方法を提供
    - [Introduction to the backbone package](https://arxiv.org/abs/1912.12779)
-   [Bergm](https://CRAN.R-project.org/package=Bergm) - ベイズ指数ランダムグラフモデル（BERGM）の分析ツール
-   [bipartite](https://CRAN.R-project.org/package=bipartite) - 二部（二モード）ネットワークの可視化関数および生態学研究でよく用いられる指標の計算を提供。詳細は：`levelnet` Rパッケージを参照してください
-   [blockmodeling](https://CRAN.R-project.org/package=blockmodeling) - 重み付きネットワークに対する一般化ブロックモデルの実装
-   [bnlearn](https://CRAN.R-project.org/package=bnlearn) - [Bayesian network learning and inference](http://www.bnlearn.com/)（[related Shiny app](https://paulgovan.github.io/RiskNetwork)）向けのツール
-   [brainGraph](https://CRAN.R-project.org/package=brainGraph) - 脳MRIデータのグラフ理論分析を行うツール
-   [btergm](https://CRAN.R-project.org/package=btergm) - 時系列ERGMのブートストラップ偽尤度による適合、ERGMおよびTERGM、そしてランダムアクター指向モデル（SAOM）の尤度適合、ERGMおよびTERGMの適合性評価、およびERGMおよびTERGMのマイクロレベル解釈に関するツールを提供
-   [CCAS](https://github.com/matthewjdenny/CCAS) - 通信ネットワーク向けの統計モデル
-   [concoR](https://github.com/aslez/concoR) - CONCORネットワークブロックモデルアルゴリズム（[blog post](http://badhessian.org/2015/05/concor-in-r/)）の実装
-   [ContentStructure](https://github.com/matthewjdenny/ContentStructure) - [Topic-Partitioned Multinetwork Embeddings (TPME) model](http://dirichlet.net/pdf/krafft12topic-partitioned.pdf)への拡張を実装
-   [DiagrammeR](https://github.com/rich-iannone/DiagrammeR) - R、RStudioおよびJavaScriptライブラリを接続してグラフ図を描画（[blog post](https://blog.rstudio.org/2015/05/01/rstudio-v0-99-preview-graphviz-and-diagrammer/)）
-   [dodgr](https://CRAN.R-project.org/package=dodgr) - 双方向重み付き有向グラフ（例：道路ネットワーク）上の距離を計算するための優先度キュー最短経路アルゴリズム
-   [edgebundle](https://github.com/schochastics/edgebundle) - 輸送図のネットワークを描くために有用なエッジバンドルアルゴリズム
-   [egor](https://CRAN.R-project.org/package=egor) - さまざまなフォーマットでの自己中心ネットワークデータのインポート、分析、可視化ツール
-   [EpiModel](https://CRAN.R-project.org/package=EpiModel) - 感染症動態の数学モデルをシミュレートするためのツール（[presentation paper](https://doi.org/10.18637%2Fjss.v084.i08)）
-   [ergm](https://CRAN.R-project.org/package=ergm) - 指数型ランダムグラフモデル（ERGM）の推定
    -   [ERGM: edgecov and dyadcov Specifications](http://mjh4.blogspot.com/2012/09/ergm-edgecov-and-dyadcov-specifications.html)
-   [ergMargins](https://CRAN.R-project.org/package=ergMargins) - ERGMのプロセス分析
-   [ergmito](https://CRAN.R-project.org/package=ergmito) - 小規模ネットワーク向けのERGM
-   [fergm](https://CRAN.R-project.org/package=fergm) - フレイティERGM
-   [GERGM](https://CRAN.R-project.org/package=GERGM) - 一般化指数型ランダムグラフモデル（GERGM）の推定および収束診断
-   [geomnet](https://CRAN.R-project.org/package=geomnet) - `ggplot2`を用いたネットワーク可視化の単一幾何学アプローチ
-   [ggnetwork](https://CRAN.R-project.org/package=ggnetwork) - `ggplot2`を用いたネットワークオブジェクトの複数幾何学アプローチ
-   [ggraph](https://CRAN.R-project.org/package=ggraph) - `ggplot2`の精神に基づいたグラフグラフィックスの文法。参照：`tidygraph` Rパッケージ
-   [goldfish](https://github.com/snlab-ch/goldfish) - 時間経過における協調ネットワークの統計解析に用いる動的ネットワークアクター指向モデル（DyNAM）
-   [graphlayouts](https://CRAN.R-project.org/package=graphlayouts) - [stress majorization](https://doi.org/10.1007/978-3-540-31843-9_25)の概念に基づいたレイアウトアルゴリズム
    -   [Introducing graphlayouts with Game of Thrones](http://blog.schochastics.net/post/introducing-graphlayouts-with-got/)
    -   [Network Visualizations in R using ggraph and graphlayouts](https://mr.schochastics.net/material/netVizR/)
-   [hergm](https://CRAN.R-project.org/package=hergm) - 局所依存を持つ階層的指数族ランダムグラフモデル（HERGM）の推定およびシミュレーション
-   [hierformR](https://CRAN.R-project.org/package=hierformR) – 社会ネットワークが時間経過で社会的階層を形成する過程における経路および状態を決定
-   [igraph](http://igraph.org/r/) - ネットワーク解析ツールのコレクション
    -   [Network Analysis and Visualization with R and igraph](http://kateto.net/networks-r-igraph) (2016).
-   [ig.degree.betweenness](https://github.com/benyamindsmith/ig.degree.betweenness/) - [Smith-Pittman](https://arxiv.org/abs/2411.01394)のコミュニティ検出アルゴリズム（2024年）のigraph実装
-   [influenceR](https://CRAN.R-project.org/package=influenceR) - Burt、Borgattiなどによるさまざまなノード中心性ネットワーク測度の計算
-   [keyplayer](https://CRAN.R-project.org/package=keyplayer) - 複数のネットワーク中心性測度の実装
-   [latentnet](https://CRAN.R-project.org/package=latentnet) - ネットワークオブジェクトに対する潜在位置およびクラスタモデル
-   [levelnet](https://github.com/schochastics/levelnet) - 二部（二モード）ネットワークの単モード投影を分析するための実験的パッケージ。参照：`bipartite` Rパッケージ
-   [lpNet](https://www.bioconductor.org/packages/release/bioc/html/lpNet.html) - 線形計画法モデルで生物学的（シグナル、遺伝子）ネットワークを推定する。
-   [mlergm](https://cran.r-project.org/package=mlergm) - 既知のブロック内に配置されたノードをモデル化する多層指数族ランダムグラフモデル。
-   [multigraph](https://cran.r-project.org/package=multigraph) - さまざまなマルチグラフを構築し可視化するための関数。
-   [multigraphr](https://cran.r-project.org/package=multigraphr) - マルチグラフの性質に関する確率モデル、統計量、適合性検定。
-   [multinet](https://CRAN.R-project.org/package=multinet) - マルチレイヤー社会ネットワーク向けのツール。
    - [Related book and data](http://multilayer.it.uu.se/), および 。Python版については を参照。 [presentation article](http://multilayer.it.uu.se/papers/jss.pdf) `uunet`
-   [multinets](https://cran.r-project.org/package=multinets) - `igraph` におけるマルチレベルネットワークを扱うパッケージ。
-   [migraph](https://CRAN.R-project.org/web/packages/migraph/) - 一般的な社会ネットワーク分析パッケージを拡張し、マルチモーダルおよびマルチレベルネットワークを分析するためのツールセット。
-   [ndtv](https://CRAN.R-project.org/package=ndtv) - 動的ネットワークデータをさまざまなフォーマットでアニメーション化する可視化ツール
-   [neo4r](https://github.com/neo4j-rstats/neo4r) - R用のNeo4Jドライバー。
-   [networkD3](https://christophergandrud.github.io/networkD3/) - Rからd3.jsネットワークグラフを作成する。
-   [netdiffuseR](https://CRAN.R-project.org/package=netdiffuseR) - イノベーションのネットワーク拡散を分析するためのツール。
-   [netrankr](https://CRAN.R-project.org/package=netrankr) - 最新のネットワーク中心性インデックスのコレクションで、多くのドキュメンテーションを含む。
    -   [Network Centrality in R: An Introduction](http://blog.schochastics.net/post/network-centrality-in-r-introduction/) - 関連するRパッケージについてのレビューを含む。
    -   [Network Centrality in R: Neighborhood Inclusion](http://blog.schochastics.net/post/network-centrality-in-r-neighborhood-inclusion/)
    -   [Network Centrality in R: New Ways of Measuring Centrality](http://blog.schochastics.net/post/network-centrality-in-r-new-ways-of-measuring-centrality/) (2018)。
-   [netseg](https://mbojan.github.io/netseg/) - ネットワークの分離度と同質性に関するさまざまな測度。
-   [NetSim](http://www.christoph-stadtfeld.com/netsim/) - 微小モデルをシミュレートし、結合して社会ネットワークのマクロ特性への影響を研究する。
-   [netUtils](https://github.com/schochastics/netUtils) - さまざまなネットワーク関数と手法、たとえば2つのグラフのカーティアン積を計算するか、離散コアペルフィモデルを適合させる。
-   [network](https://CRAN.R-project.org/package=network) - Rにおける関係データの操作に必要な基本ツール
-   [networkdata](https://github.com/schochastics/networkdata) - 979のネットワークデータセットを含む2135のネットワークを含む。
-   [networkdiffusion](https://github.com/chengjun/networkdiffusion) - ネットワーク内の基本的な流行拡散をシミュレートおよび可視化する。
-   [networkDynamic](https://CRAN.R-project.org/package=networkDynamic) - 動的、(間)時間的ネットワークへの対応
-   [networksis](https://CRAN.R-project.org/package=networksis) - ノードの次数を固定および指定した bipartite ネットワークグラフをシミュレートするためのツール。
-   [PAFit](https://CRAN.R-project.org/package=PAFit) - 時系列複雑ネットワークにおける好意的接続とノードフィットネスの非パラメトリック推定
-   [PCIT](https://CRAN.R-project.org/package=PCIT) - 重み付きネットワーク（例：遺伝子コーエクスプレッションネットワーク）における意味のある相関を特定するための情報理論に基づく部分相関の実装
-   [RCy3](https://bioconductor.org/packages/3.3/bioc/html/RCy3.html) - Rと最新バージョンのCytoscapeの間のインターフェース
-   [RCyjs](https://bioconductor.org/packages/release/bioc/html/RCyjs.html) - RとCytoscape.jsの間のインターフェース
-   [qgraph](https://CRAN.R-project.org/package=qgraph) - 心理測定ネットワークのモデリングと可視化ツール；重み付きグラフィカルモデルにも対応
    -   [Network Model Selection Using qgraph 1.3](http://psychosystems.org/network-model-selection-using-qgraph-1-3-10/) (2014).
    -   [qgraph Examples](http://sachaepskamp.com/qgraph/examples)
    -   [qgraph: Network Visualizations of Relationships in Psychometric Data](https://www.jstatsoft.org/article/view/v048i04) (2012)
-   [relevent](https://CRAN.R-project.org/package=relevent) - 関係イベントモデル（REM）の適合化に用いるツール
    -   [informR](https://CRAN.R-project.org/package=informR) - イベントリストからシーケンス統計を生成するツール（`relevent`で使用）
-   [rem](https://CRAN.R-project.org/package=rem) - イベントシーケンスにおける内生ネットワーク効果の推定および関係イベントモデル（REM）の適合化を行うツール。REMは、ネットワークが時間とともにどのように形成・進化するかを測定する。
-   [rgexf](https://CRAN.R-project.org/package=rgexf) - RからGEXFにネットワークオブジェクトをエクスポートし、GephiやSigmaなどのソフトウェアで操作可能にする。
-   [Rgraphviz](https://bioconductor.org/packages/release/bioc/html/Rgraphviz.html) - R内でGraphvizライブラリおよびDOTグラフ描画言語を使用するためのサポート
-   [RSiena](http://r-forge.r-project.org/R/?group_id=461) - 実証的ネットワーク分析におけるシミュレーション調査；長期的なネットワークデータにモデルを適合化する。
-   [signnet](http://signnet.schochastics.net/) 符号付きネットワーク（構造的バランス、ブロックモデル、中心性など）を分析するための手法。
-   [sna](https://CRAN.R-project.org/package=sna) - 基本的なネットワーク構築ツール、測定方法および可視化ツール。
-   [snahelper](https://CRAN.R-project.org/package=snahelper) - RStudioに含まれるネットワーク可視化および分析を行うためのGUIを提供するアドイン
    - [Introduction to snahelper (Part 1)](http://blog.schochastics.net/post/an-rstudio-addin-for-network-analysis-and-visualization/)
    - [Introduction to snahelper (Part 2)](http://blog.schochastics.net/post/new-rstudio-addins-for-network-analysis/)
-   [SocialMediaLab](https://CRAN.R-project.org/package=SocialMediaLab) - ソーシャルメディアデータの収集およびそれからネットワークを生成するツール（[companion website](http://vosonlab.net/SocialMediaLab), [github repo](https://github.com/voson-labSocialMediaLab)）。
-   [spectralGOF](http://people.bu.edu/jccs/spectralGOF.html) - ネットワークモデルが観測されたネットワークの構造をどの程度説明しているかを測るスペクトル適合性（SGOF）を計算する。
-   [spnet](https://CRAN.R-project.org/package=spnet) - `sp`クラスにおける地図上での空間ネットワークの可視化手法。
-   [spNetwork](https://CRAN.R-project.org/package=spNetwork) - 空間ネットワーク分析の手法、例えばカーネル密度推定、距離計算、点パターン分析を含む。
-   [statnet](https://statnet.org/) - 多くのRネットワーク分析パッケージ（[mailing-list](https://mailman13.u.washington.edu/mailman/listinfo/statnet_help)，[tutorials/workshops](https://statnet.org/workshops/)）の背後にあるプロジェクト。
    -   [Exponential Random Graph Models (ERGMs) Using statnet](https://statnet.org/workshop-ergm/ergm_tutorial.html) (2022).
    -   [Guides for Using the statnet Package](http://www.melissaclarkson.com/resources/R_guides/) （2010）。
    -   [Modeling Valued Networks with statnet](https://statnet.org/workshop-valued/valued.html) (2022).
-   [tergm](https://CRAN.R-project.org/package=tergm) - 時系列指数族ランダムグラフモデル（TERGM）のモデルの適合、シミュレーション、診断。
-   [tidygraph](https://CRAN.R-project.org/package=tidygraph) - ‘Tidy’アプローチによるグラフ構造の構築。参照：`ggraph` Rパッケージ。
    -   [Introducing tidygraph](https://www.data-imaginist.com/2017/introducing-tidygraph/)
    -   [Tidying up your network analysis with tidygraph and ggraph](https://posit.co/resources/videos/tidying-up-your-network-analysis-with-tidygraph-and-ggraph/)
-   [tnam](https://CRAN.R-project.org/package=tnam) - 時系列および横断的ネットワーク自己相関モデル（TNAM）の適合ツール。
-   [tnet](https://CRAN.R-project.org/package=tnet) - 重み付き、二モードおよび長縦ネットワーク向けのネットワークメジャー
-   [tsna](https://CRAN.R-project.org/package=tsna) - 時系列社会ネットワーク分析用のツール。
-   [visNetwork](https://github.com/DataKnowledge/visNetwork) - vis.js ライブラリを用いたネットワーク可視化
-   [xergm](https://CRAN.R-project.org/package=xergm) - 指数ランダムグラフモデル（ERGM、GERGM、TERGM、TNAMおよびREM）の拡張。

### Stata

-   [nwcommands: Network Analysis Using Stata](https://nwcommands.wordpress.com/) ([discussion](http://www.statalist.org/forums/forum/general-stata-discussion/general/1290963-network-analysis-which-command-to-use), [tutorials and slides](https://nwcommands.wordpress.com/tutorials-and-slides/)).
-   [SNA with Stata](http://www.rensecorten.org/index.php/category/sna-with-stata/) - netplot Stataパッケージの使用を記録するブログ。

### Syntaxes

> Generic graph syntaxes intended for use by several programs.

-   [DOT](http://www.graphviz.org/doc/info/lang.html) - Graphvizソフトウェアが使用するグラフ描画構文。
-   [GEXF](https://gexf.net) - Gephiソフトウェアが使用するファイル形式。
-   [GraphML](http://graphml.graphdrawing.org/) - 網を表現するための包括的で使いやすいファイル形式（[handbook chapter](https://www.uni-konstanz.de/mmsp/pubsys/publishedFiles/BrEiLe10.pdf)）。
-   [JGraphT](https://jgrapht.org/) - グラフデータ構造およびアルゴリズムを表現するJavaグラフライブラリ（[example algorithms](https://github.com/agouge/Java-Network-Analyzer)）。
-   [JUNG - Java Universal Network/Graph Framework](https://jung.sourceforge.net/) - ネットワークオブジェクトを表現する拡張可能なライブラリ。
-   [PGF/TikZ](http://www.ctan.org/tex-archive/graphics/pgf/) - [Tandem](https://en.wikipedia.org/wiki/PGF/TikZ)のベクターグラフィックス言語で、[LaTeX](https://latex-project.org/)の排版環境でグラフを描画できる。
    -   [Awesome LaTeX: TiKZ](https://github.com/egeerardyn/awesome-LaTeX#tikz)
    -   [How to Draw Graphs in LaTeX?](https://tex.stackexchange.com/questions/57152/how-to-draw-graphs-in-latex)
    -   [TikZ Graph Examples](http://www.texample.net/tikz/examples/tag/graphs/)
    -   [TikZ & PGF Manual](http://distrib-coffee.ipsl.jussieu.fr/pub/mirrors/ctan/graphics/pgf/base/doc/pgfmanual.pdf)
    -   [TKZ](http://altermundus.com/pages/tkz/index.html) - TikZに基づくパッケージ。
-   [TLP - Tulip Software Graph Format](http://tulip.labri.fr/TulipDrupal/?q=tlp-file-format) - Tulipソフトウェアフレームワークが使用するグラフ構文。
-   [Cypher](http://neo4j.com/docs/stable/cypher-query-lang.html) - [Neo4j](http://neo4j.com/)が使用するグラフクエリ言語。

### Tutorials

> Tutorials that are not focused on a single specific software package or program.

-   [A tutorial for network centrality in R](https://github.com/schochastics/centrality) (2023).
-   [Basic and Advanced Network Visualization with Gephi and R](http://kateto.net/sunbelt2016) (2016).
-   [Basic Network Analysis in R using igraph and related packages](https://mr.schochastics.net/material/netAnaR/) (2022).
-   [Interactive and Dynamic Network Visualization in R](http://curleylab.psych.columbia.edu/netviz/) および JavaScript ライブラリ (2016).
-   [Nodegoat and Palladio: Introductory Workshop](https://www.academia.edu/11450425/Nodegoat_and_Palladio_Introductory_Workshop_by_Emmanuelle_Chaze) - 人文学に向けたもの (2015).
-   [Static and Dynamic Network Visualization with R](http://kateto.net/network-visualization) - igraph, network, ggraph, network, networkD3, ndtv, threejs および visNetwork パッケージをカバー (2019).
-   [Tidy Network Analysis in R using the tidygraph package](https://mr.schochastics.net/material/tidynetAnaR/) (2022).

## Varia

> Resources that do not fit in other categories.

-   [+100 herramientas para el análisis de redes sociales](http://www.k-government.com/2016/06/28/100-herramientas-analisis-redes-sna-ars/) - ネットワーク分析の多様な応用事例の長列表、スペイン語での短い説明を含む.
-   [Awesome graph classification](https://github.com/benedekrozemberczki/awesome-graph-classification) - グラフ埋め込みに関する包括的な論文リスト（タイトル、著者、論文へのリンク、実装例を含む）.
-   [Awesome community detection](https://github.com/benedekrozemberczki/awesome-community-detection) - コミュニティ検出に関する包括的な論文リスト（タイトル、著者、論文へのリンク、実装例を含む）.
-   [Centrality Measures as a Signature of Roles in Rousseau’s _Les Confessions_](http://yro.ch/centrality-measures-signature-roles-rousseaus-les-confessions/) - 現実世界のキャラクター間のネットワークの分析.
-   [Cheat Sheet: Social Network Analysis for Humanists](https://cvcedhlab.hypotheses.org/106) - ネットワークデータの構成および操作を行う際に覚えておくべき基本的な概念.
-   [Computer Technologies for the Historical Research of Intellectual Networks](https://www.youtube.com/playlist?list=PLz79Il7EOvUJxdQ9r2IefFtr--BNkfOa7) - 歴史学者たちによるビデオシリーズ、マートン・ディューリングとスコット・ウィンガートが登場する.
-   [Convert Between Graph Formats](http://awesome.cs.jhu.edu/graph-services/convert/) - 多数の一般的なグラフフォーマット間の相互変換を行うオンラインサービス.
-   [David Knoke on Network Analysis](https://thesocietypages.org/methods/2015/01/30/david-knoke-on-network-analysis/) - 20分間のインタビューで、ネットワーク分析の用途と利点について述べ、Knokeによるテロネットワーク研究をもとにしている.
-   [Glossary of Terms for Statistical Network Models](https://web.archive.org/web/20171215013948/https://statnet.org/trac/raw-attachment/wiki/Resources/glossary.pdf)
-   [Linton C. Freeman’s Social Network Research Publications](http://moreno.ss.uci.edu/pubs.html)、1955年から今日までをカバーしている.
-   [Mapping the Republic of Letters](http://republicofletters.stanford.edu/) - 早期近代の学術に関する研究プロジェクト（[underlying software](http://www.densitydesign.org/research/knot/)）.
-   [Mixed-Method Approaches to Social Network Analysis](https://www.youtube.com/playlist?list=PL3zdEY084WkQD79mR00RSt8j5RuyPwMJE) - ミドルセックス大学法律学部の会議のビデオ（2014）.
-   [Modeling Complex Social Networks: Challenges and Opportunities for Statistical Learning and Inference](https://www.youtube.com/watch?v=1xLjYc7EUEU) - プルード大学でジェニファー・ネヴィルが行ったセミナー講演のビデオ（2011）.
-   [NetSciEd - Network Science in Education](https://sites.google.com/a/binghamton.edu/netscied/home) - ネットワークリテラシーの向上を目指す国際的な取り組み.

-   [Network Map of Knowledge and Art](https://paolonegrini.wordpress.com/2012/11/19/network-map-of-knowledge-and-art/) - DBPediaから導出された「誰が誰を影響したか」を表す有向接続ネットワーク、SPARQLとGephiを使用。

-   [The Networks Network](https://groups.google.com/forum/?hl=en-GB#!forum/the-networks-network) - メールリスト（主にHNRネットワークの歴史学者たち）
-   [New Perspectives for Relational Learning](http://www.birs.ca/events/2015/5-day-workshops/15w5080/videos) - バンフ国際研究施設（BIRS）におけるワークショップ（2015年）の動画（およびそれ以降のもの）
-   [Open Graph protocol](http://ogp.me/) - ウェブページを「ソーシャルグラフオブジェクト」に変換するための提案された標準
-   [Periodic Table of Network Centrality](http://schochastics.net/sna/periodic.html) - 中心性指数のインタラクティブ周期表
-   [Picking Sides](https://codeandculture.wordpress.com/2015/04/03/picking-sides/) - 中東諸国間の政治的連携ネットワークにおけるコミュニティ検出（[updated version](https://gist.github.com/briatte/c6df2f855afb4eb142e6)）

-   [Psych Networks](http://psych-networks.com/) - 心理データのためのネットワークモデリングに関するニュース、参考文献および[tutorials](https://psych-networks.com/tutorials/)を含むウェブサイト
  - [Tutorial Paper on New Methods for Estimating Psychological Networks](http://psych-networks.com/tutorial-paper-new-methods-estimating-psychological-networks/)
-   [(Psychological) Network Analysis Workshops](https://osf.io/6axte/) - Rを用いた心理ネットワーク分析に関する3日間のワークショップ（2019年）
-   [Should I do Social Network Analysis?](https://cvcedhlab.hypotheses.org/125)
-   [The Small World of Psychopathology](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0027407) - 精神症状が互いにどのように関連しているかに関する論文（[code, data and graphs](https://sites.google.com/site/dsmgraphs/Home/files)）
-   [Social Network Analysis in DBpedia](http://othes.univie.ac.at/12285/1/2010-10-14_0703857.pdf) - 非常に指導的な修士論文。SPARQLとPajekの使い方を示している。
-   [SNA-DE Mailing-List](https://dlist.server.uni-frankfurt.de/mailman/listinfo/sna-de), デュアル言語（ドイツ語）
-   [SPARQL for R Tutorial - Hollywood Social Network Analysis](http://semanticweb.cs.vu.nl/R/sparql_hollywood/sparql_hollywood.html) - またGephiも使用
-   [A Sociology Citation Network](http://nealcaren.web.unc.edu/a-sociology-citation-network/) および[A Co-citation Network for Philosophy](https://kieranhealy.org/blog/archives/2013/06/18/a-co-citation-network-for-philosophy/) - 科学的共引用ネットワークの例
-   [Using Metadata to Find Paul Revere](https://kieranhealy.org/blog/archives/2013/06/09/using-metadata-to-find-paul-revere/) および[The Other Ride of Paul Revere: The Brokerage Role in the Making of the American Revolution](http://www.sscnet.ucla.edu/polisci/faculty/chwe/ps269/han.pdf) - アメリカ独立戦争時代の革命家たちへのネットワーク分析
-   [Visual Complexity. An Exploration on Mapping Complex Networks](http://www.visualcomplexity.com/vc/) - 非常に美しいネットワークおよび木構造の可視化（[book](http://www.visualcomplexity.com/vc/book/)、中国語およびフランス語にもある）
-   [Visualizing Historical Networks](https://histecon.fas.harvard.edu/visualizing/index.html) - ハーバード大学における歴史的ネットワーク研究プロジェクト
    -   [Angoulême in 1764](https://histecon.fas.harvard.edu/visualizing/angouleme/index.html)
    -   [Economists in Cambridge](https://histecon.fas.harvard.edu/visualizing/graphing/economists.html)
    -   [The Inner Life of Empires: An Eighteenth Century History](https://histecon.fas.harvard.edu/visualizing/graphing/innerlife.html)

### Blog Series

> Series of blog posts on network topics.

-   [Archaeological Networks](http://archaeologicalnetworks.wordpress.com/) - トム・ブルガンスのブログ（考古学者および歴史学者向け）
-   [Blog Posts About Networks by Aaron Clauset](https://www.cs.unm.edu/~aaron/blog/archives/networks/index.htm)
-   [Blog Posts About Networks by Baptiste Coulmont](http://coulmont.com/index.php?s=r%C3%A9seaux), フランス語
-   [Blog Posts About Networks by Cosma R. Shalizi](http://bactra.org/weblog/cat_networks.html)
-   [Blog Posts About Networks by François Briatte](https://politbistro.hypotheses.org/tag/reseaux), フランス語
-   [Blog Posts About Networks by Katya Ognyanova](http://kateto.net/networks)
-   [Blog Posts About Networks by Pierre Mercklé](http://pierremerckle.fr/category/reseaux/), フランス語
-   [Blog Posts About Networks on the Bad Hessian Blog](http://badhessian.org/category/networks/)、さまざまな貢献者によって
-   Blog posts about networks on [R-Bloggers](http://www.r-bloggers.com/), Rブログの集積サイト:
      -   [Networks](http://www.r-bloggers.com/?s=networks)
      -   [Social Network Analysis](http://www.r-bloggers.com/?s=social+network+analysis)
-   [Cosma R. Shalizi’s Notebooks](http://bactra.org/notebooks) ネットワーク関連のテーマに関しては、選別的に詳細にリストアップすべき無謀な項目:
      -   [Analysis of Network Data](http://bactra.org/notebooks/network-data-analysis.html)
      -   [Assortative Social Networks and Neutral Cultural Evolution](http://bactra.org/notebooks/neutral-cultural-networks.html)
      -   [Biochemical Network Evolution](http://bactra.org/notebooks/biochem-network-evol.html)
      -   [Citations and Citation Networks](http://bactra.org/notebooks/citations.html)
      -   [Community Discovery Methods for Complex Networks](http://bactra.org/notebooks/community-discovery.html)
      -   [Complex Networks](http://bactra.org/notebooks/complex-networks.html)
      -   [Experiments on Social Networks](http://bactra.org/notebooks/network-experiments.html)
      -   [Exponential Random Graph Models (ERGMs)](http://bactra.org/notebooks/ergms.html)
      -   [Graph Sampling Algorithms](http://bactra.org/notebooks/graph-sampling.html)
      -   [Graph Theory](http://bactra.org/notebooks/graph-theory.html)
      -   [Homophily and Influence in Social Networks](http://bactra.org/notebooks/homophily-vs-influence.html)
      -   [Inferring Networks from Non-Network Data](http://bactra.org/notebooks/inferring-networks.html)
      -   [Joint Modeling of Texts and Networks](http://bactra.org/notebooks/text-networks.html)
      -   [Network Comparison](http://bactra.org/notebooks/network-comparisons.html)
      -   [Networks of Political Actors](http://bactra.org/notebooks/networks-of-political-actors.html)
      -   [Relational Learning](http://bactra.org/notebooks/relational-learning.html)
      -   [Social Contagion, Information Cascades, Diffusion of Innovations, Etc.](http://bactra.org/notebooks/social-contagion.html)
      -   [Social Networks](http://bactra.org/notebooks/social-networks.html)
      -   [Stochastic Block Models](http://bactra.org/notebooks/stochastic-block-models.html)
            -   See also: [An Annotated Bibliography on Stochastic Blockmodels](https://www.alexpghayes.com/blog/an-annotated-bibliography-on-stochastic-block-models/) (2019).
-   Daniel Little’s blog posts on the philosophy of social science:
      -   [Networks](https://understandingsociety.blogspot.com/search/label/networks)
      -   [Social Networks](https://understandingsociety.blogspot.com/search/label/social%20networks)
-   Martin Grandjean’s blog posts about (mostly) network visualization, in English and French:
      -   [Network Analysis](https://www.martingrandjean.ch/tag/analyse-de-reseau/)
      -   [Social Networks](https://www.martingrandjean.ch/tag/reseaux-sociaux/)
-   [Networks Demystified](http://www.scottbot.net/HIAL/index.html@tag=networks-demystified.html), スコット・B・ウィンガートによるブログ記事のシリーズ.
-   [Netze und Netzwerke](https://netzeundnetzwerke.de/), 英語およびドイツ語 - ネットワーク分析の歴史に関するブログ、セバスチャン・ギッセンマン（[old blog](http://www.netzeundnetzwerke.de/old/)）による.
-   [R / Notes: Networks](https://f.briatte.org/r/category/networks) - Rでネットワークを操作するに関するブログ記事、フランソワ・ブリアットによる.
-   [TNT: The Network Thinkers](http://www.thenetworkthinkers.com/) - ヴァルディス・クレブスのブログ.
-   [Under Roquentin’s Chestnut Tree](https://mboudour.github.io/) - モーゼス・ボドゥリーデスによる、Pythonで（主に）ネットワークを分析するブログ.
-   Yannick Rochat’s blog posts about digital humanities, in English and French:
      -   [Character Networks](https://yro.ch/tag/character-network/)
      -   [Network Analysis](https://yro.ch/tag/network-analysis/)

### Fictional Networks

> Explorations of fictional character networks.

-   [Analyzing Networks of Characters in _Love Actually_](http://varianceexplained.org/r/love-actually-network/) - クラスタ分析と[Shiny app](https://dgrtwo.shinyapps.io/love-actually-network/)（R + Shinyを使用）を提供.
-   [Character Co-Occurrences in Victor Hugo’s _Les Misérables_](https://docs.bokeh.org/en/latest/docs/examples/topics/categorical/les_mis.html)Python（＋JavaScript）で隣接行列としてプロット.

-   [Lessons on Exponential Random Graph Modeling from _Grey’s Anatomy_ hook-ups](http://badhessian.org/2012/09/lessons-on-exponential-random-graph-modeling-from-greys-anatomy-hook-ups/) (Rを使用).
-   [Network Analysis of Shakespeare’s _Macbeth_](https://mboudour.github.io/2015/10/28/Shakespeare's-Macbeth-Network.html) (Pythonを使用).
-   [The Network and Trajectories of Transitions among Sentential Co-Occurrences of Characters of Arthur Conan Doyle’s _A Study in Scarlet_](https://mboudour.github.io/2016/04/17/Arthur-Conan-Doyle's-A-Study-in-Scarlet-Network-&-Trajectories.html) (Pythonを使用；[code](https://github.com/mboudour/WordNets/blob/master/ArthurConanDoyle_AStudyInScarlet_Network%26Trajectories.ipynb)).
-   [Network Visualization: Mapping Shakespeare’s Tragedies](https://www.martingrandjean.ch/network-visualization-shakespeare/)
-   [Social Network Analysis of _Alice in Wonderland_](https://aclanthology.org/W12-2513/)
-   [_Star Wars_ Social Networks: The Force Awakens](http://evelinag.com/blog/2016/01-25-social-network-force-awakens/index.html) - また、F#で書かれたソーシャルネットワーク分析の例も含まれる.
-   [Universal Properties of Mythological Networks](https://doi.org/10.1209/0295-5075/99/28002) ([preprint](https://arxiv.org/abs/1205.4324)).

### Network Science

> Discussions of what “netsci” is about and means for other scientific disciplines.

-   [Editing a Normal Science Journal in Social Science](https://journals.openedition.org/bms/595) - 『Social Networks』誌の創刊編集者によるその誌の考察.
-   [The Emergence of Network Science](https://www.cornell.edu/video/emergence-of-network-science) - スティーブン・H・ストロガツと多くの人々を含むビデオドキュメンタリー.
-   From [Albert-László Barabási’s review articles](https://barabasi.com/publications/1/review-articles):
    -   [Taming Complexity](https://barabasi.com/f/182.pdf)
    -   [The Network Takeover](https://barabasi.com/f/362.pdf)
-   [The Invasion of the Physicists](https://doi.org/10.1016/j.socnet.2004.06.002) - ネットワーク科学がどうやって生まれたかについての説明.
-   [Isolated Social Networkers](https://crookedtimber.org/2005/05/19/isolated-social-networkers/), [Networks and Netwars](http://bactra.org/weblog/347.html)および[The Inter-Disciplinary Politics of Interdisciplinary Research or, “Hey, That Was My Idea First.”](https://www.cs.unm.edu/~aaron/blog/archives/2005/05/the_interdiscip.htm) - 「ネットワーク科学」という buzzword が登場する前から存在していたブログ記事シリーズだが、そのテーマは現在その分野で議論されているものと同様である.
-   [The ‘New’ Science of Networks](https://www.jstor.org/stable/29737693) - 2002年から2003年に出版されたネットワーク科学の書籍についてのレビュー
-   [Predicting Highly Cited Papers](https://arxiv.org/abs/1310.8220) - ネットワーク科学における次に高い引用を受ける論文の予測
-   [Social Network and Network Science Co-Citations Across Disciplines in 1996-2013](https://github.com/raffaelevacca/EUSN-co-citation-networks)
-   [Three Hard Questions about Network Science](http://environmentalpolicy.ucdavis.edu/node/292)
-   [A Twenty-First Century Science](http://www.nature.com/nature/journal/v445/n7127/full/445489a.html) - ダンカン・J・ワッツによるエッセイ
-   [What is Network Science?](http://journals.cambridge.org/repo_A88Sa8AHdt4SoI) - 最近の『Network Science』誌の初号編集記事

### Small Worlds

> Links focused on (analogues to) [Stanley Milgram’s small-world experiment](https://en.wikipedia.org/wiki/Small-world_experiment).

-   [The Erdös Number Project](http://wwwp.oakland.edu/enp/) - 数学者間の協働関係およびネットワーク距離に関する研究プロジェクト
-   [How Small is the World, Really?](https://medium.com/@duncanjwatts/how-small-is-the-world-really-736fa21808ba#.kyr90lhyo) - 「x度の分離」という小世界実験についての議論
-   [The Oracle of Bacon](https://oracleofbacon.org/) - [online game](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)に基づいた結果が[charity](http://www.sixdegrees.org/)に繋がった
-   [Panel: Six Degrees of Separation](https://www.cornell.edu/video/six-degrees-of-separation-panel) - コロンビア大学における会議の動画、ダンカン・J・ワッツ、スティーブン・H・ストラグズ、ジョン・クレインベルグなどによる講演を含む
-   [Patterns in the Ivy: The Small World of Metal](http://badhessian.org/2013/09/patterns-in-the-ivy-the-small-world-of-metal/) - 金属アーティストとバンドに基づく二モードネットワーク分析の例
-   [Six Degrees of Francis Bacon](http://sixdegreesoffrancisbacon.com/) - よく記録された近代歴史ネットワークのインタラクティブ可視化
-   [Six Degrees of Separation](https://en.wikipedia.org/wiki/Six_degrees_of_separation) - ウィキペディア英語版エントリー

### Two-Mode Networks

> Also known as bipartite graphs.

-   [L’analyse des graphes bipartis](https://shs.hal.science/halshs-00794976), フランス語版（2013年）
-   [Basic Notions for the Analysis of Large Two-mode Networks](https://doi.org/10.1016/j.socnet.2007.04.006)  ([preprint](https://www-complexnetworks.lip6.fr/~latapy/Publis/socnet07.pdf), [related code](https://www-complexnetworks.lip6.fr/~latapy/Bip/); _Social Networks_, 2008).
-   [Fitting Large Signed Two-mode Blockmodels: Problems and Prospects](http://patrickdoreian.com/wp-content/uploads/2017/12/large-signed-2mode-networks_UNGA.pdf)
-   [Generalized Blockmodeling of Two-mode Network Data](https://doi.org/10.1016/j.socnet.2004.01.002) ([preprint](http://vlado.fmf.uni-lj.si/pub/networks/doc/preprint/TwoMode.pdf)).
-   [Generalized Two-Mode Cores](https://doi.org/10.1016/j.socnet.2015.04.001)
-   [Partitioning Signed Two-Mode Networks](http://patrickdoreian.com/wp-content/uploads/2017/12/partitioning-signed-social-networks.pdf)
-   [Working with Bipartite/Affiliation Network Data in R](https://solomonmessing.wordpress.com/2012/09/30/working-with-bipartiteaffiliation-network-data-in-r/) (2012)

* * *

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法的に可能である範囲で、このリストの著者たち（年代順に）： [François Briatte](https://f.briatte.org/),
[Ian McCulloh](https://www.linkedin.com/in/mcculloh),
[Aditya Khanna](https://vivo.brown.edu/display/akhann16),
[Manlio De Domenico](https://manliodedomenico.com/),
Patrick Kaminski,
[Ericka Menchen-Trevino](https://erickaakcire.github.io/),
[Tam-Kien Duong](https://github.com/taniki),
[Jeremy Foote](https://github.com/jdfoote),
[Catherine Cramer](http://nysci.org/nysci_people/catherine-cramer/),
[Andrej Mrvar](http://mrvar.fdv.uni-lj.si/),
[Patrick Doreian](http://patrickdoreian.com/),
[Vladimir Batagelj](http://vladowiki.fmf.uni-lj.si/doku.php?id=vlado),
Eric C. Jones,
Alden S. Klovdahl,
[James Fairbanks](http://www.jpfairbanks.net/),
[Danielle Varda](http://www.ucdenver.edu/academics/colleges/SPA/FacultyStaff/Faculty/Pages/DanielleVarda.aspx),
[Andrew Pitts](https://twitter.com/andpitts),
[Roman Bartusiak](https://github.com/riomus),
[Koustuv Sinha](https://koustuvsinha.com/),
[Mohsen Mosleh](http://mohsenmosleh.com/),
[Sandro Sousa](https://github.com/sandrofsousa),
[Jean-Baptiste Pressac](https://github.com/JBPressac),
[Patrick Connolly](https://github.com/patcon),
[Hristo Georgiev](https://hristog.github.io/),
[Tiago Azevedo](http://github.com/tjiagoM),
[Luis Miguel Montilla](https://twitter.com/luismmontilla),
[Keith Turner](https://github.com/keith-turner),
[Sandra Becker](https://github.com/sandravizmad),
[Benedek Rozemberczki](https://github.com/benedekrozemberczki),
[Xing Han Lu](https://xinghanlu.com/),
[Vincent Labatut](https://cv.hal.science/vlabatut),
[David Schoch](https://www.mr.schochastics.net/),
[Jaewon Chung](https://github.com/j1c),
[Benedek Rozemberczki](https://github.com/benedekrozemberczki),
[Alex Loftus](https://github.com/loftusa),
[Arun](https://github.com/arunppsg),
[Filippo Menczer](https://cnets.indiana.edu/fil/),
[Marc Schiller](https://github.com/m4rcs),
[Tanguy Fardet](https://tfardet.srht.site/),
[Bernhard Bieri](https://bernhardbieri.ch/),
[Rémy Cazabet](https://github.com/Yquetzal),
[Jeremy Gelb](https://github.com/JeremyGelb),
[Mathieu Bastian](https://github.com/mbastian),
[Michael Szell](https://github.com/mszell),
[Eran Rivlis](https://github.com/erivlis),
[Rohan Dandage](https://github.com/rraadd88),
[Benjamin Smith](https://github.com/benyamindsmith),
[Beth Duckles](https://github.com/bduckles),
[Lei Cao](https://github.com/cllei12),
[Simon Delarue](https://www.simondelarue.com/) および
[Christian Schulz](https://schulzchristian.github.io/) - は、この作品に関するすべての著作権および関連するまたは隣接する権利を放棄しました。

ありがとうございました [Robert J. Ackland](https://github.com/rjackland),
[Laurent Beauguitte](https://cv.hal.science/laurent-beauguitte),
[Patrick Connolly](http://nodescription.net/),
[Michael Dorman](https://geobgu.xyz/),
[Colin Fay](https://colinfay.me/),
[Marc Flandreau](https://www.history.upenn.edu/people/faculty/marc-flandreau),
[Eiko Fried](https://eiko-fried.com/),
[Christopher Steven Marcum](https://cmarcum.github.io/),
[Wouter de Nooy](https://www.uva.nl/profiel/n/o/w.denooy/w.denooy.html),
[Katya Ognyanova](https://kateto.net/),
[Rahul Padhy](https://github.com/rahul-38-26-0111-0003),
[Camille Roth](https://camilleroth.github.io/),
[Claude S. Fischer](https://sociology.berkeley.edu/faculty/claude-s-fischer),
[Cosma Shalizi](https://www.stat.cmu.edu/~cshalizi/),
[Tom A.B. Snijders](https://www.stats.ox.ac.uk/~snijders/),
[Chris Watson](https://profiles.bu.edu/Christopher.Watson) および [Tim A. Wheeler](https://github.com/tawheeler) が、このリストに掲載されている素晴らしいリソースの一部を特定するのに協力してくれたことに。
