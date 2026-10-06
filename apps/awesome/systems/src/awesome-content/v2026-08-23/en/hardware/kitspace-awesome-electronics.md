---
title: Awesome Electronics
description: >-
  Electronic engineering learning materials, circuit simulation, EDA and CAD tools,
  PCB services, component resources, inventory tools, and communities.
licenseSource: github-kitspace-awesome-electronics-readme-md
---
# Awesome Electronics

Find learning materials, circuit simulators, EDA and CAD tools, PCB services, component resources, and communities for electronic engineers and hobbyists. The collection also covers inventory tools, development-board retailers, project-sharing platforms, media, subscription kits, and Arabic-language courses.

Electronic engineering (EE) involves understanding, designing, and building electronic circuits. The source distinguishes its typical focus on low-power DC circuits from high-power AC electrical systems, while noting substantial overlap between the two fields.

Experimenting with and building electronic circuits is also a hobby. Resources for professionals and hobbyists are often useful to each other.

Descriptions of availability, pricing, and platform support follow the recorded upstream README.

## Learning

### Technical Tutorials
- ["skill" tag on learn.sparkfun.com](https://learn.sparkfun.com/tutorials/tags/skill) - A wide variety of technical tutorials on various EE related skills.
- [Soldering is Easy](https://mightyohm.com/blog/2011/04/soldering-is-easy-comic-book/) - Comic book that goes over the basics of soldering that has been translated into quite a few languages.
- [Uses of Different Soldering Iron Tips](https://www.instructables.com/id/Uses-of-Different-Soldering-Iron-Tips/) - Covers what all those different soldering iron tips are good for.
- [How to design a motherboard for your electronics project](https://www.staycaffeinated.com/2021/02/21/how-to-design-a-motherboard-for-your-project-part-1) - Introductory tutorial on schematic and PCB design.

### Courses
- [Khan Academy - Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering) - Non-profit learning platform with a full course on electrical engineering and related topics.
- [NEETS (Navy Electricity and Electronics Training Series)](https://www.fcctests.com/neets/Neets.htm) - U.S. Navy Non-Resident Training Course Material.
- [NPTEL](https://nptel.ac.in/course.html) - Free engineering courses, including electronics, electrical engineering, and communication engineering.
- [Udemy courses related to Electronics](https://www.udemy.com/topic/electronics/) - Paid electronics courses on Udemy.
- [Coursera courses related to Electronics](https://www.coursera.org/courses?query=electronics) - Includes some free courses that provide e-certificates on completion.

### Theory
- [Electronics textbook](https://upload.wikimedia.org/wikipedia/commons/e/ee/Electronics.pdf) - Text covers design and function of electronic circuits and components, DC analysis, and AC analysis.
- [Student Handbook](http://cbseacademic.nic.in/web_material/Curriculum/Vocational/2018/Basic_Electronics_XI.pdf) - An accessible introduction to the history and fundamentals of electronics, diodes, rectifiers, transistors and their applications, SCR, DIAC, and TRIAC.
- [Electronics circuits and systems](http://aems.edu.sd/wp-content/uploads/2019/02/Electronics-Circuits-and-Systems-Fourth-Edition-PDFDrive.com-.pdf) - Free e-book covering circuits and systems for conceptual understanding.
- [Lessons In Electric Circuits](https://www.ibiblio.org/kuphaldt/electricCircuits/) - Free textbooks and worksheets emphasizing theory, simulation, and the Socratic method.
- [Ultimate Electronics: Practical Circuit Design and Analysis](https://ultimateelectronicsbook.com/) - Free online book with interactive schematics and simulations by CircuitLab, marked as under development in the source.

### University Course Archives

- [Berkeley EECS](http://inst.eecs.berkeley.edu/classes-eecs.html) - Comprehensive EE & CS course website archives.
- [Dr. Jacob Baker](http://cmosedu.com) - Courses and tutorials, professor at The University of Nevada, Las Vegas.
- [Dr. Abraham](https://www.cerc.utexas.edu/~jaa/teaching.html), [Dr. McDermot](http://users.ece.utexas.edu/~mcdermot/), and [Dr. Valvano](http://users.ece.utexas.edu/~valvano/) - Course materials from professors at UT Austin.

## Documentation
- [Inkscape Electric Symbols](https://github.com/upb-lea/Inkscape_electric_Symbols) - Circuit Drawing Symbols for Inkscape
- [Tabula](http://tabula.ondata.it/) - Extract tabular data from a pdf, very useful for extracting pin tables or part characteristics from datasheets.
- [WebPlotDigitizer](https://automeris.io/WebPlotDigitizer/) - Extract data from plots, charts, etc., very useful for getting part performance curves from datasheets.
- [WaveDrom](https://wavedrom.com/) - Create waveforms and timing diagrams from a JSON description file.
- [tscircuit](https://tscircuit.com) - Open source EDA package for schematic and PCB design using React

## Simulators

### Analog and Mixed Signal Circuit Simulators

- [LTspice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html) - Free SPICE circuit simulator from Linear Technologies. Also see the unofficial [LTwiki](http://ltwiki.org/?title=Main_Page) and [Group](https://groups.io/g/LTspice).
- [ngspice](http://ngspice.sourceforge.net/) - Open source SPICE circuit simulator.
- [Circuit JS/Falstad](http://www.falstad.com/circuit/circuitjs.html) - Free, open source online simulator with electron flow visualization (rewrite of original Java applet by Paul Falstad).
- [EveryCircuit](https://everycircuit.com) - Free to try online, visual, interactive circuit simulator for simpler circuits.
- [Qucs](http://qucs.sourceforge.net/) - Open-source, cross-platform, non-SPICE-based circuit simulator with S-parameter and Harmonic Balance capability.
- [Qucs-S](https://ra3xdh.github.io/) - Open source fork of Qucs using SPICE for simulation.
- [QucsStudio](http://qucsstudio.de/) - Free, closed-source, Windows-only fork of Qucs with a similar interface, new engine, and more features.
- [Open Circuit Design Software](http://opencircuitdesign.com) - Open-source EDA suite for chip design, aimed at keeping pace with commercial tools.
- [TINA-TI](http://www.ti.com/tool/TINA-TI) - Exclusive [DesignSoft-TINA](https://www.tina.com) build for Texas Instruments, bundled with Texas Instruments Models.
- [CppSim](https://www.cppsim.com/) - Free, open-source circuit simulator that uses C++ to accelerate simulations.
- [Scilab with Xcos](https://www.scilab.org/) - Free, open source numerical computing alternative to MATLAB. Xcos provides Electrical System modeling capability similar to Simulink.
- [iCircuit](http://icircuitapp.com/) - Electronic circuit simulator for analog and digital circuits, with continuous real-time analysis.
- [Micro-Cap](http://www.spectrum-soft.com/download/download.shtm) - Mixed-signal simulator with a range of interactive simulation types.
- [GeckoCIRCUITS](https://de.wikipedia.org/wiki/GeckoCircuits) - Open Source Power Electronic Circuit Simulator. [GitHub Project](https://github.com/geckocircuits/GeckoCIRCUITS). Direct [download link](http://gecko-simulations.com/GeckoCIRCUITS/GeckoCIRCUITS.zip) due to broken website.
- [Proteus](https://www.labcenter.com/) - PCB Design and Circuit Simulator Software.

### Verilog HDL Simulators

- [Verilator](https://www.veripool.org/wiki/verilator) - Free, open-source Verilog compiler using C++ or SystemC test benches. The source describes it as fast, but simulation is limited to two states, cycle-based operation, and synthesizable code.
- [Icarus Verilog](http://iverilog.icarus.com/) - Free, open-source Verilog interpreter. Test benches use behavioral Verilog. Simulation is four-state and event-based.

## Gerber Viewers

### Online
- [Tracespace Viewer](https://tracespace.io/) -  Gerber viewer that lets you inspect the individual layers as well as the board preview.
- [Gerblook](https://www.gerblook.org/) - Online Gerber viewer powered by Gerbv.
- [Mayhew Labs 3dpcb](http://mayhewlabs.com/3dpcb) - 3D Gerber viewer.
- [CircuitPeople](https://circuitpeople.com) - Simple 2D layer viewer for Gerber files, without heavy processing.
- [Stackrate Viewer](https://stackrate.de/viewer/) - Easy to use online gerber viewer with trace hovering and measurement tools.

### Installable
- [Gerbv](http://gerbv.geda-project.org/) - Gerber viewer for Linux and BSD.
- [KiCAD Gerbview](https://kicad.org/) - The KiCAD gerber viewer.
- [GC-Prevue](http://www.graphicode.com/GC-Prevue_Gerber_Viewer) - Commercial Gerber viewer with a free version. The source reports better handling of some Gerber files than Gerbv and KiCAD.
- [ZofZPCB](https://www.zofzpcb.com/) - Free 3D Gerber viewer.

## Free EDA Packages
- [KiCad](https://kicad.org/) - Open source EDA package with push and shove router, differential pairs and much more.
- [Eagle](https://www.autodesk.com/products/eagle/overview) - EDA package with a free version restricted by board size.
- [DesignSpark PCB](https://www.rs-online.com/designspark/pcb-software) - Free-of-charge EDA package without restrictions, sponsored by RS Components.
- [Altium CircuitMaker](https://circuitmaker.com/) - Free EDA package from the maker of Altium's professional software.
- [gEDA](http://geda-project.org) - Another open source package, good for people that like scripting and makefiles, Linux and BSD only.
- [DipTrace](https://diptrace.com) - Schematic capture and PCB design software with a free version restricted by pin count and signal layers.
- [LibrePCB](https://librepcb.org/) - Cross-platform EDA tool licensed under GNU GPLv3.
- [Horizon EDA](https://github.com/horizon-eda/horizon) - A free and open source EDA tool with the focus on shortcut operation.
- [EasyEDA](https://easyeda.com/) - EDA tool available in browser and cross-platform app versions. Integrates [LCSC](https://www.lcsc.com/products) and [JLCPCB](https://jlcpcb.com/parts) component catalogs with 3D models.

## Paid EDA Packages
- [Altium](https://www.altium.com/) - PCB Design Software & Tools.
- [Proteus](https://www.labcenter.com/) - PCB Design and Circuit Simulator Software.

## CAD Specific

### KiCad
- [Xesscorp's list of KiCad 3rd party tools](https://github.com/xesscorp/kicad-3rd-party-tools)
- [Contextual Electronics' Shine on You Crazy KiCad](https://contextualelectronics.com/courses/shine-on-you-crazy-kicad/) - Beginner video tutorial focused on getting a board manufactured.
- [Contextual Electronics' Getting to Blinky Tutorial](https://www.youtube.com/playlist?list=PLy2022BX6Eso532xqrUxDT1u2p4VVsg-q) - A more comprehensive beginner to intermediate video tutorial.
- [KiCad.info Forums](https://forum.kicad.info) - User discussion and help forum.
- [Keyboard PCB Guide](https://github.com/ruiqimao/keyboard-pcb-guide) - Written tutorial covering the creation of a keyboard PCB.
- [Cheatsheet](https://silica.io/wp-content/uploads/2018/06/kicad-cheatsheet.pdf) (also [in landscape](https://silica.io/wp-content/uploads/2018/06/kicad-cheatsheet-landscape.pdf)) - Short PDF that goes over the menus and keyboard shortcuts for the most common operations.
- [Footprint Collection](https://github.com/kitspace/kicad_footprints) - Collection intended to gather all KiCad footprints available online, with scripts to manage them.
- [InteractiveHtmlBom](https://github.com/openscopeproject/InteractiveHtmlBom) - An HTML BOM generation tool for manual pick and place.
- [KiBot](https://github.com/INTI-CMNB/KiBot) - Generate fabrication and documentation files for KiCad projects repeatably and through scripts.

### Eagle
- [List of ULPs everyone should know](https://www.element14.com/community/community/eagle/blog/2015/01/19/eagle-ulps-every-user-should-know)
- [Adafruit Eagle Library](https://github.com/adafruit/Adafruit-Eagle-Library)
- [SparkFun Electronics Eagle Libraries](https://github.com/sparkfun/SparkFun-Eagle-Libraries)

### Altium
- [Altium Designer Libraries](https://www.altium.com/documentation/other_installers#!libraries) - `.IntLib` and `.PcbLib` of electronic components from different manufacturers.

## PCB Batching Services
- [PCBShopper](https://pcbshopper.com/) - Comparison service for quite a lot of different PCB batching and assembly services.
- [OSH Park](https://oshpark.com) - Low-cost PCB batching service, described in the source as providing high-quality boards with a signature purple silkscreen.
- [Aisler](https://aisler.net) - Circuit boards described in the source as affordable and of good quality, made in and shipped from Europe (Germany).
- [Dirty PCBs](http://dirtypcbs.com/store/pcbs) - Low-cost PCB batching service that describes its quality as "dirty".
- [JLCPCB](https://jlcpcb.com/) - Low-cost PCB batching service with an in-house, low-cost SMT service.
- [PCBWay](https://www.pcbway.com/) - Low-cost PCB batching service with PCBA, CNC, and 3D-printing services.

## Part Search Engines
- [Octopart](https://octopart.com) - Electronic component search engine.
- [Findchips](https://www.findchips.com/) - Part search from Supply Frame.
- [Parts.io](https://parts.io/) - Another search engine from Supply Frame geared towards discovering new parts.
- [Electronic Component Search Engine](https://componentsearchengine.com/) - Free access to schematic symbols, PCB footprints and 3D models.
- [Yoo Need One - SMD Marking Database](https://smd.yooneed.one/) - Surface Mount Device (SMD) component marking database.
- [JLCSearch](https://jlcsearch.tscircuit.com) - Search for popular in-stock JLC components by category.

## Project Sharing Platforms
- [Kitspace](https://kitspace.org) - Open-source project-sharing site that helps users buy parts and rebuild projects, developed by the list's maintainer.
- [Hackaday.io](https://hackaday.io) - Social site for sharing projects from the popular blog.
- [Hackster.io](https://www.hackster.io/) - Project-sharing site organized by platform, topic, and product.
- [InventHub](https://inventhub.io/) - Git-based project hosting and collaboration platform for hardware development.
- [CADLAB](https://cadlab.io/) - Another Git-based project hosting and collaboration platform for hardware development.
- [Eyrie](https://eyrie.io) - For viewing Eagle and KiCad designs online.
- [WikiFactory](https://wikifactory.com/) - A project hosting and collaboration platform for product development. Filter for "electronics" for more electronics related projects.
- [Instructables](https://www.instructables.com/) - A social site for sharing projects. Filter for "circuits" for more electronics related projects.

## Inventory Management and Purchasing
- [PartsBox](https://partsbox.io) - Web service for managing component inventory, with a user interface and Octopart integration.
- [Part-DB](https://github.com/Part-DB/Part-DB) - Open-source web service for managing part inventory, with a permission system and barcode generator.
- [InvenTree](https://inventree.org) - Open-source web service for managing part inventory, with parametric search, an extensive API, and a plugin system.

## Miscellaneous Software Projects
- [SnapEDA](https://www.snapeda.com) - Parts library with free symbols & footprints. (Compatible with Eagle, KiCad, Altium, OrCad, Allegro, etc.)
- [Language PCB](https://github.com/Alhadis/language-pcb) - Syntax highlighting for various PCB formats.
- [NinjaCalc](https://gbmhunter.github.io/NinjaCalc/) - Calculator toolbox for embedded engineering.
- [Saturn PCB Design Toolkit](https://saturnpcb.com/saturn-pcb-toolkit/) - Freeware toolkit for PCB-related calculations.
- [KiCanvas](https://kicanvas.org/) - An open source online viewer of KiCad schematics and boards.

## Development Board Retailers
- [Sparkfun](https://www.sparkfun.com/) - Retailer and designer of open-source electronics development boards, equipment, and materials, with accompanying tutorials.
- [Adafruit](https://www.adafruit.com/) - Retailer and designer of electronics products, with a product selection and tutorials.
- [Tindie](https://www.tindie.com) - Marketplace for electronics makers to sell low volume batches of their own designs.

## Blogs
- [Hackaday](https://hackaday.com) - Electronics and hardware-hacking blog with a staff of writers.
- [bunniestudios.com](https://www.bunniestudios.com) - Andrew 'Bunnie' Huang covers hardware hacking, open hardware, manufacturing and more.
- [Bald Engineer](https://www.baldengineer.com) - Project logs, tutorials and articles about electronics and embedded software by James Lewis.
- [Rheingold Heavy](https://rheingoldheavy.com) - More project logs, tutorials and articles about electronics and embedded software, these ones by Dan Hienzsch.
- [Hackster.io](https://www.hackster.io/news) - Another blog covering electronics.
- [Dangerous Prototypes](http://dangerousprototypes.com/blog/) - Blog about open source hardware projects and interesting app notes.
- [N-O-D-E](https://n-o-d-e.net/) - Blog about DIY electronics, hardware, and technology.

## Forums

### Discussion
- [EEVBlog forum](https://www.eevblog.com/forum/) - Forum for discussing electronic engineering topics.
- [/r/electronics](https://www.reddit.com/r/electronics/) and [/r/ECE](https://www.reddit.com/r/ECE/) - Subreddits for electronic engineering topics.

### Help
- [/r/askelectronics](https://www.reddit.com/r/AskElectronics/) - Sub-reddit dedicated to help on electronics topics.
- [Electronics Stack Exchange](https://electronics.stackexchange.com) - Question-and-answer site for electronics running on the Stack Overflow service.
- [EEVBlog beginners forum](https://www.eevblog.com/forum/beginners/) - Forum for beginner questions; other EEVBlog subforums cover more advanced topics.

## Podcasts
- [The Amp Hour](https://theamphour.com/) - Off-the-cuff chat about electronics with Chris Gammel and Dave Jones (EEVBlog), often with guests.
- [Embedded.fm](https://embedded.fm/) - Christopher and Elecia White discuss embedded systems development and much more, often with guests.
- [The Spark Gap Podcast](http://thesparkgap.net) - Covers a specific EE topic each episode, sometimes with guests.
- [MacroFab Engineering Podcast](https://macrofab.com/blog/podcast/) - Weekly podcast where Parker and Stephen from MacroFab discuss EE topics and industry news.
- [The Engineering Commons Podcast](http://theengineeringcommons.com/) - Covers general engineering topics from mechanical to electrical.

## Videos
- [EEVblog](https://www.youtube.com/user/EEVblog) - YouTube channel where Dave Jones presents teardowns, tutorials, and more, described in the source as one of the earliest YouTube channels.
- [BigClive](http://bigclive.com) - [YouTube channel](https://www.youtube.com/user/bigclivedotcom) about teardowns (including dangerous products), circuit reverse-engineering and tutorials.
- [ElectroBOOM](https://www.youtube.com/user/msadaghd) - YouTube channel that debunks and explains EE topics with a lot of comedy thrown in.
- [Micah Scott](https://www.youtube.com/user/micahjd) - Video logs of reverse engineering and re-purposing consumer electronics hardware in creative ways.
- [Afrotechmods](https://www.youtube.com/user/afrotechmods) - Tutorials on electronics projects, often suitable for beginners as well.
- [The Signal Path](https://www.youtube.com/user/TheSignalPathBlog) - In-depth teardowns, repairs, and reviews of lab equipment and prototyping products.
- [w2aew](https://www.youtube.com/channel/UCiqd3GLTluk2s_IBt7p_LjA) - Tutorials on basic and complex analog hardware.
- [Mr. Carlson's Lab](https://www.youtube.com/user/MrCarlsonsLab) - Teardowns, repairs and restorations with an emphasis on classic electronics gear.
- [GreatScott](https://www.youtube.com/user/greatscottlab) - Electronics tutorials, projects, and how-to guides.
- [Julian Ilett](https://www.youtube.com/user/julius256) - Buys the cheapest electronic modules he can find and tries to do useful things with them.
- [MikesElectricStuff](https://www.youtube.com/channel/UCcs0ZkP_as4PpHDhFcmCHyA) - Teardowns, large lighting projects, X-rays, and more.
- [Ben Eater](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) - Videos on building an 8-bit computer on breadboards, explaining all the subcircuits.
- [Robert Feranec](https://www.youtube.com/user/matarofe) - 100+ hardware design tips and tricks. Videos about schematic design and PCB layout.
- [Strange Parts](https://strangeparts.com) - [YouTube channel](https://www.youtube.com/channel/UCO8DQrSp5yEP937qNqTooOw) about electronics, manufacturing, making, world travel, living in and making things in China.
- [Analog Circuit Design](https://youtube.com/playlist?list=PLc7Gz02Znph-c2-ssFpRrzYwbzplXfXUT) - Analog Circuit Design by Prof. Ali Hajimiri, Caltech.

## Subscription Kit Services
- [AdaBox](https://www.adafruit.com/adabox/) - Adafruit products, collectibles, and exclusive discounts, delivered quarterly.
- [HackerBoxes](https://hackerboxes.com/) - A monthly surprise box which includes projects, components, modules and tools.

## 3D Part Models
- [GrabCad](https://grabcad.com/library/electronic-components-1) - Community supported database of 3D models with a large number of electronic component models.
- [3D ContentCentral](https://www.3dcontentcentral.com) - Website dedicated to 3D models of parts (requires login).

## Other Lists
- [PwnKitteh/InsanelyCheapElectronics](https://github.com/PwnKitteh/InsanelyCheapElectronics) - A list of cheap electronics from China, that you can use in your projects.
- [PCB/EDA software list on the EEVblog forums](https://www.eevblog.com/forum/eda/pcbeda-software-list/) - A more extensive list of PCB and EDA software tools.
- [intajay/open-electronics](https://github.com/intajay/open-electronics) - Another GitHub list: resources for Electronics Enthusiasts and Hardware Hackers.
- [Vitorian/awesome-fpga](https://github.com/Vitorian/awesome-fpga) - Awesome list of FPGA resources.
- [cajt/list_of_robot_electronics](https://github.com/cajt/list_of_robot_electronics) - A GitHub list of resources, projects and products for robot electronics.
- [embedded-boston/awesome-embedded-systems](https://github.com/embedded-boston/awesome-embedded-systems) - Awesome list of embedded programming resources.
- [TCAD Central](https://tcadcentral.com/Software.html) - List of Technology CAD (TCAD) software and resources from the maker of DEVSIM.
- [Awesome Lattice FPGAs](https://github.com/kelu124/awesome-latticeFPGAs) - List of open-source FPGA boards.
- [TM90/awesome-hwd-tools](https://github.com/TM90/awesome-hwd-tools) - List of hardware design tools with a focus on chip design.
- [delftopenhardware/awesome-open-hardware](https://github.com/delftopenhardware/awesome-open-hardware) - Helpful items for making and learning about open source hardware projects.
- [upb-lea/awesome-open-source-power-electronics](https://github.com/upb-lea/awesome-open-source-power-electronics) - Open source software list specialized on power electronics.

## Arabic Section
 - [Complete EE Course](https://youtube.com/playlist?list=PLww54WQ2wa5rOJ7FcXxi-CMNgmpybv7ei&si=4Whr8h-_9kGdUN3_) - Practical electronics course in Arabic.
 - [Complete Digital Electronics Course](https://youtube.com/playlist?list=PLww54WQ2wa5obq6IbRbIiql8oHaTUp3T_&si=I4mqjy3JUZ8xmElT) - Digital electronics course in Arabic.
 - [professional Electronics Design](https://youtube.com/playlist?list=PLww54WQ2wa5oKEhE_D3UVbKWwml8o8_Fu&si=BF213_MSJwSiyvIV) - Complete professional electronics design course in Arabic.
 - [professional PCB Design](https://www.youtube.com/playlist?list=PLww54WQ2wa5pBm96kQTkqAyMXn9F4Q0i9) - Printed circuit board (PCB) design course in Arabic.
