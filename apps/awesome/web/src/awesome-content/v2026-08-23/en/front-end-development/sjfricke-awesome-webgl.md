---
title: Awesome WebGL
description: >-
  WebGL libraries, shader editors, debugging tools, and learning resources are
  collected here, alongside WebGL 2 and developer-oriented WebVR resources,
  community links, and related lists.
licenseSource: github-sjfricke-awesome-webgl-readme-md
toc:
  maxLevel: 4
---
# Awesome WebGL

WebGL libraries, shader editors, debugging tools, and learning resources are collected here, alongside WebGL 2 and developer-oriented WebVR resources, community links, and related lists.

[WebGL (Web Graphics Library)](https://www.khronos.org/webgl/) is a JavaScript API for rendering interactive 3D and 2D graphics in compatible browsers without plug-ins. It integrates with browser web standards to use GPU acceleration for physics, image processing, and effects in a page’s canvas.

WebGL content can be mixed with other HTML elements and composited with the page or its background. Programs combine JavaScript control code with shader code executed on the graphics processing unit (GPU).

## WebGL

WebGL resources and tools.

### Articles

Articles and blog posts about WebGL, excluding tutorials.

* [Context Loss & Preloading](https://medium.com/@mattdesl/non-intrusive-webgl-cebd176c281d#.gyc6h9mr5) - Managing WebGL context loss.
* [WebGL Off the Main Thread](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) - Using browser Web Workers with WebGL.
* [Optimizing Scenes for Better WebGL Performance](https://www.soft8soft.com/docs/manual/en/introduction/Optimizing-WebGL-performance.html) - Optimization techniques for WebGL-based interactive content.
* [First steps in WebGL](https://dev.to/aralroca/first-steps-in-webgl-385c) - An introduction to WebGL and how it works, using a triangle drawing example.

### Blog Series

> Blog series of WebGL topics

* [Codeflow](http://codeflow.org/tags/webgl.html) - Blog posts about WebGL techniques and tricks.
* [Real-Time Rendering](http://www.realtimerendering.com/blog/tag/webgl/) - This is the blog for the book _Real-Time Rendering_.
* [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) - Mozilla’s official WebGL best practices.
* [WebGL Insights](http://webglinsights.blogspot.com/) - This is the blog for the book _WebGL Insights_.
* [WebGL Month](https://github.com/lesnitsky/webgl-month) - A month-long series of daily WebGL tutorials.
* [WebGL Image Processing](https://maximmcnair.com/webgl-image-processing) - Covers a range of _Image Processing_ algorithms in WebGL such as Color Correction, Blend Modes, Thresholding, Dithering, Convolution and Film Grain.

### Books

Books about WebGL.

* [Interactive Computer Graphics: A Top-Down Approach with WebGL](https://www.amazon.com/Interactive-Computer-Graphics-Top-Down-Approach/dp/0133574849) by Edward Angel and Dave Shreiner - Suitable for undergraduate students in computer science and engineering, for students in other disciplines who have good programming skills, and for professionals interested in computer animation and graphics using the version of WebGL described as the latest in the recorded source.
* [Professional WebGL Programming](https://www.amazon.com/Professional-WebGL-Programming-Developing-Graphics/dp/1119968860) by Andreas Anyuru - Developing hardware-accelerated 3D graphics with WebGL.
* [Programming 3D Applications with HTML5 and WebGL](https://www.amazon.com/Programming-Applications-HTML5-WebGL-Visualization/dp/1449362966) by Tony Parisi - Building high-performance 3D web applications with HTML5, CSS3, and WebGL, described in the book as an emerging graphics standard.
* [WebGL Beginner's guide](https://www.amazon.com/WebGL-Beginners-Guide-Diego-Cantor/dp/184969172X) by Diego Cantor and Brandon Jones - An introduction to 3D web development with WebGL for JavaScript developers.
* [WebGL Hotshot](https://www.amazon.com/WebGL-Hotshot-Mitch-Williams-ebook/dp/B00KLAJ65Y) by Mitch Williams - 3D graphics concepts and skills for web designers.
* [WebGL Insights](https://github.com/WebGLInsights/WebGLInsights.github.io/releases/download/v1.0/WebGL.Insights.-.Patrick.Cozzi.pdf) by Patrick Cozzi - Presents real-world techniques for intermediate and advanced WebGL developers by assembling contributions from experienced WebGL engine and application developers, GPU vendors, browser developers, researchers, and educators.
  * [Book's Personal Site](http://www.webglinsights.com/)
* [WebGL Programming Guide: Interactive 3D Graphics Programming with WebGL](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920) by Kouichi Matsuda and Rodger Lea - Getting started with interactive 3D programming in WebGL without prior knowledge of HTML5, JavaScript, 3D graphics, mathematics, or OpenGL.

### Bug Reporting

Browser and specification bug trackers.

* [Chrome Bug Report](https://bugs.chromium.org/p/chromium/issues/list) - Chrome-related bugs.
* [Khronos Github Issue Page](https://github.com/KhronosGroup/WebGL/issues) - Specification and conformance bugs.
* [Mozilla BugZilla](https://bugzilla.mozilla.org) - Firefox-related bugs.
* [WebKit Bugzilla](https://bugs.webkit.org/enter_bug.cgi?assigned_to=cmarrin%40apple.com&attachurl=&blocked=&bug_file_loc=http%3A%2F%2F&bug_severity=Normal&bug_status=NEW&comment=&component=WebGL&contenttypeentry=&contenttypemethod=autodetect&contenttypeselection=text%2Fplain&data=&dependson=&description=&flag_type-1=X&flag_type-3=X&form_name=enter_bug&keywords=&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Mac%20OS%20X%2010.5&priority=P2&product=WebKit&rep_platform=PC&short_desc=&version=528%2B%20%28Nightly%20build%29) - Safari-related bugs.

### GLSL Editors

> Online GLSL Editors

> Note: [WebGL 1 shaders must conform to The OpenGL ES Shading Language, Version 1.00](https://www.khronos.org/registry/webgl/specs/1.0.3/#4.3)

> [Official Specs for GLSL Version 1.00](https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf)

> [Official Specs for OpenGL ES Version 2.0.25](https://www.khronos.org/registry/OpenGL/specs/es/2.0/es_full_spec_2.0.pdf)

* [Fractal Lab](http://hirnsohle.de/test/fractalLab/) - An online explorer for 2D and 3D fractals.
* [GLSL Sandbox](http://glslsandbox.com) - Online live editor for fragment shaders.
* [GLSLbin](http://glslb.in) - Fragment shader sandbox supporting [glslify](https://github.com/glslify/glslify).
* [Shader Toy](https://www.shadertoy.com) - A live editor for fragment shaders.
* [ShaderFrog](https://shaderfrog.com/) - A WebGL shader editor and composer.
* [SHDR Editor](http://shdr.bkcore.com) - A live GLSL shader editor, viewer, and validator.
* [ShaderExpo](https://anuraghazra.github.io/ShaderExpo/) - A shader editor with no dependencies, inline error logs, autocompletion, and model and texture loading.

### References

> WebGL references

* [Google Project ANGLE](https://github.com/google/angle) - Identified in the recorded list as the default WebGL backend for Google Chrome and Mozilla Firefox on Windows.
* [Khronos Official Wiki](https://www.khronos.org/webgl/wiki/) - The official wiki for WebGL.
* [WebVR Community Group](https://www.w3.org/community/immersive-web/) - A group working to bring high-performance virtual reality to the open web.
* [WebGL Errata](https://www.khronos.org/webgl/wiki/Errata_to_the_WebGL_Specification) - Graphics driver bugs affecting the conformance suite and code portability.
* [WebGL Extensions](https://www.khronos.org/registry/webgl/extensions/) - A list of WebGL extensions.
* [WebGL Reference Card](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf) - WebGL 1.0 API Quick Reference Card for printing.
* [WebGL Source Code](https://github.com/KhronosGroup/WebGL) - WebGL source code for viewing and contributing.
* [WebGL Spec Sheet](https://www.khronos.org/registry/webgl/specs/1.0/) - The detailed WebGL specification.

### Talks

> WebGL related talks

* [List of Presentations](https://www.khronos.org/webgl/wiki/Presentations) - Khronos’s collection of WebGL presentations.
* [Next-Generation 3D Graphics on the Web](https://www.youtube.com/watch?v=K2JzIUIHIhc) - Talk at Google I/O 19 from Ricardo Cabello (MrDoob).

### Tools/Debugging

> Tools for development and debugging WebGL

* [Khronos Dev Tools](https://github.com/KhronosGroup/WebGLDeveloperTools) - WebGL developer tools intended for use as an ES6 module.
* [Spector.js](https://spector.babylonjs.com/) - A JavaScript framework for exploring and troubleshooting WebGL scenes, independent of the rendering framework.
* [WebGL Inspector](http://benvanik.github.io/WebGL-Inspector/) - A tool inspired by gDEBugger and PIX for developing advanced WebGL applications.
* [WebGl Playground](http://jessevdk.github.io/webgl-play/) - An editor for working on JavaScript and optional GLSL vertex and fragment shaders together, with organization, formatting, and syntax highlighting.
* [WebGL Report](http://webglreport.com/?v=1) - Information about the WebGL features supported by your browser.
* [WebGL Support Stats](http://webglstats.com/) - An interactive dashboard of WebGL feature support across browsers and devices.
* [WebGL Texture Tester](http://toji.github.io/texture-tester/) - Attempts to load one of each WebGL texture format to show which formats a browser and device support.
* [Web Tracing Framework](http://google.github.io/tracing-framework/index.html) - Set of libraries, tools, and visualizers for the tracing and investigation of complex web applications.

#### Chrome Specific Tools/Debugger

* [GLSL Shader Editor Extension](https://github.com/spite/ShaderEditorExtension) - Chrome DevTools extension to help you edit shaders live in the browser.
* [Spector.js Extension](https://chrome.google.com/webstore/detail/spectorjs/denbgaamihkadbghdceggmchnflmhpmk) - Exploring and troubleshooting WebGL and WebGL 2 scenes.
* [Webgl Insight](https://github.com/3Dparallax/insight) - A Chrome extension with a range of WebGL debugging tools.

#### Firefox Specific Tools/Debugger

* [Canvas Debugger](https://hacks.mozilla.org/2014/03/introducing-the-canvas-debugger-in-firefox-developer-tools/) - A short tutorial on using Firefox’s developer tools to debug WebGL shaders.
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools) - Mozilla’s official collection of Firefox debugging tools.
* [Shader Editor](https://hacks.mozilla.org/2013/11/live-editing-webgl-shaders-with-firefox-developer-tools/) - A short tutorial on using Firefox’s developer tools to debug WebGL shaders.

### Tutorials

> Online WebGL Tutorials (non-video)

* [Directional Shadow Mapping](http://chinedufn.com/webgl-shadow-mapping-tutorial/) - Concepts behind real time directional light shadow mapping.
* [Get Started Tutorial](https://www.khronos.org/webgl/wiki/Tutorial) - Khronos’s introductory WebGL tutorial.
* [Getting Started with WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) - Mozilla Foundation guide to getting started with WebGL.
* [Learn WebGL](https://www.tutorialspoint.com/webgl/index.htm) - Tutorials Point articles introducing WebGL terminology.
* [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217) - Tutorials from the author of _WebGL Up and Running_.
* [Multitexturing using a Blendmap](http://chinedufn.com/webgl-multitexture-blend-map-tutorial/) - How to use a blendmap to multitexture a terrain.
* [Particle Effects via Billboards](http://chinedufn.com/webgl-particle-effect-billboard-tutorial/) - Create particle effects by applying a technique called billboarding.
* [The Book of Shaders](https://thebookofshaders.com/) - A step-by-step introduction to fragment shaders.
* [WebGL Academy](http://www.webglacademy.com/) - An online IDE with automatic indentation and syntax highlighting for HTML, JavaScript, GLSL, and Python, plus code execution and project downloads.
* [WebGL Fundamentals](https://webglfundamentals.org/) - Series of online tutorials with code samples and live demonstrations.
* [WebGL Workshop](http://webgl-workshop.com/) - An interactive introductory WebGL workshop.

### Videos

> WebGL Related Videos

* [An Introduction to WebGL Programming](https://www.youtube.com/watch?v=tgVLb6fOVVc&feature=youtu.be) - 3 hour overview of WebGL by SIGGRAPH University.
* [WebGL Tutorials - YouTube](https://www.youtube.com/playlist?list=PLjcVFFANLS5zH_PeKC6I8p0Pt1hzph_rt) - Series of lecture style video tutorials from Indigo Code on YouTube.

## WebGL 2

The recorded list introduces WebGL 2 as a forthcoming specification.

General WebGL resources are in the [WebGL](#webgl) section.

### Articles

Articles and blog posts about WebGL 2, excluding tutorials.

* [WebGL 2 What's New](https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html) - Look into the new features added in WebGL 2.
* [What's Coming in WebGL 2.0](https://blog.tojicode.com/2013/09/whats-coming-in-webgl-20.html) - Features presented as forthcoming in WebGL 2 at the time of the article.
* [WebGL 2 SIGGRAPH Asia 2015](https://docs.google.com/presentation/d/1Orx0GB0cQcYhHkYsaEcoo5js3c5-pv7ahPniIRIzzfg/edit#slide=id.p) - Presentation by Zhenyao Mo, Ken Russell of Google during SIGGRAPH Asia 2015.
* [WebGL 2 Lands in Firefox](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) - WebGL 2 support beginning with Firefox 51.
* [WebGL 2 Basics](http://www.realtimerendering.com/blog/webgl-2-basics/) - Blog post about getting started with WebGL 2.
* [WebGL 2 New Features](http://www.realtimerendering.com/blog/webgl-2-new-features/) - New features in WebGL 2.

### References

> WebGL 2 references

* [WebGL 2 Spec Sheet (Editor Draft)](https://www.khronos.org/registry/webgl/specs/latest/2.0/) - The detailed WebGL 2 specification, listed upstream as an editor’s draft.
* [WebGL 2 Reference Card](https://www.khronos.org/files/webgl20-reference-guide.pdf) - WebGL 2.0 API Quick Reference Card for printing.
* [WebGL 2 Compatible Chart](https://caniuse.com/#feat=webgl2) - A chart of browser support for WebGL 2.

### Tutorials
* [WebGL 2 Fundamentals](https://webgl2fundamentals.org/) - Series of online tutorials with code samples and live demonstrations.
* [WebGL 2 Samples](http://webglsamples.org/WebGL2Samples/) - WebGL 2 samples with explanatory comments.
* [WebGL 2 Examples](https://github.com/tsherif/webgl2examples) - Rendering algorithms implemented in raw WebGL 2.
* [WebGL 2 & GLSL Primer: A Zero-to-Hero, Spaced-Repetition Guide](https://github.com/GregStanton/webgl2-glsl-primer) - Guided WebGL 2 and GLSL lessons using spaced repetition and atomic question-and-answer cards, with hands-on projects and solution code throughout.

### Videos

> WebGL related Videos

* [Fun with WebGL 2.0](https://www.youtube.com/playlist?list=PLMinhigDWz6emRKVkVIEAaePW7vtIkaIF) - An introductory WebGL 2 video tutorial series, described in the recorded list as still adding videos.
* [WebGL 2.0 is Here: What You Need To Know](https://www.youtube.com/watch?v=Xf65duJ_QFs) - Khronos Webinar April 2017.
    * [Slides](https://www.khronos.org/assets/uploads/developers/library/2017-webgl-webinar/Khronos-Webinar-WebGL-20-is-here_What-you-need-to-know_Apr17.pdf)

## WebVR

The recorded list introduces WebVR as an emerging ecosystem.

These resources focus on development, rather than finding WebVR entertainment content.

### Blog Series

WebVR blog series described as maintained in the recorded list.

* [Mozilla VR Blog](https://blog.mozvr.com/) - WebVR focused blog from makers of Firefox.

### Platforms

> WebVR designed platforms to experience

* [JanusVR](https://janusvr.com/) - Webpages as collaborative 3D webspaces interconnected by portals.

### References

> WebVR references

* [Browser Support](https://webvr.rocks/) - WebVR support by browser, headset, and operating system.
* [Mozilla VR](https://mixedreality.mozilla.org/) - Mozilla's official WebVR page.
* [UX of VR](https://www.uxofvr.com/) - Resources for creating user experiences in WebVR.
* [WebXR Device API](https://immersive-web.github.io/webxr/) - The W3C draft API for WebXR.
* [WebVR Spec](https://w3c.github.io/webvr/) - The official W3C WebVR spec (legacy).
  * [How to read WebVR Specs](https://dassur.ma/things/reading-specs/)

## Libraries

> [More detailed information about the different libraries can be found in the Libraries directory.](https://github.com/sjfricke/awesome-webgl/tree/master/Libraries)

### 2D
* [p2.js](https://github.com/schteppe/p2.js) - 2D rigid body physics engine written in JavaScript.
* [Phaser](https://phaser.io/) - Open source HTML5 2D game framework for Canvas and WebGL, supports mobile web browsers.
* [PixiJS](http://www.pixijs.com/) - A WebGL-based 2D JavaScript renderer.
* [Planck.js](https://github.com/shakiba/planck.js) - 2D physics engine for cross-platform HTML5 game development.
* [Stage.js](https://github.com/shakiba/stage.js) - 2D Library for cross-platform HTML5 game development.

### Compute (GPGPU)

#### Computer Vision
* [GammaCV](https://gammacv.com) - WebGL accelerated Computer Vision library for browser.

#### Particles
* [Phenomenon](https://github.com/vaneenige/phenomenon) - A small, low-level WebGL library providing essentials for high-performance applications.

### Maps and Visualizations
* [Cesium](https://cesiumjs.org/) - An open-source library for 3D globes and maps.
* [Deck.gl](http://deck.gl/) - WebGL data visualization overlays for React, designed for high performance.
* [Luma.gl](https://luma.gl/) - WebGL2 powered framework for GPU-powered data visualization and computation.
* [MapMetrics GL](https://github.com/MapMetrics/mapmetrics-gl) - Mapbox GL JS-compatible mapping library with built-in vector tiles, geocoding, routing, and search.
* [xeokit](https://xeokit.io/) - Web Graphics SDK for AEC/BIM applications with 3D-tiles, real-world coordinates and double precision.

### Math
* [glMatrix](http://glmatrix.net/) - Javascript matrix and vector library for high performance WebGL apps.
* [Sylvester](http://sylvester.jcoglan.com/) - Sylvester is a vector, matrix and geometry library for JavaScript.
* [TWGL](http://twgljs.org/) - Sole purpose is to make using the WebGL API less verbose.

### Rendering
* [GLBoost](https://github.com/emadurandal/GLBoost) - A library for rendering 3D graphics.
* [GrimoireGL](https://grimoire.gl/) - A bridge between web engineering and computer graphics engineering.
* [Hilo3d](https://github.com/hiloteam/Hilo3d) - WebGL rendering engine for 3D games.

### Physics
* [Ammo.js](https://github.com/kripken/ammo.js/) - Direct port of the Bullet physics engine to JavaScript using Emscripten.
* [Cannon.js](http://schteppe.github.io/cannon.js/) - Lightweight and simple 3D physics engine for the web.

### WebGL 2
* [PicoGL.js](https://tsherif.github.io/picogl.js/) - Minimal WebGL 2-only rendering library.

### WebVR
* [A-Frame](https://aframe.io/) - Web framework for building virtual reality experiences.
  * [Awesome-AFrame](https://github.com/aframevr/awesome-aframe)
* [Hologram](https://hologram.cool/) - A desktop app for interactively creating and prototyping WebVR without prior coding knowledge.
* [LÖVR](https://lovr.org/) - Simple framework for creating VR with Lua.
* [React 360](https://facebook.github.io/react-360/) - Build VR websites and interactive 360 experiences with React.
* [Primrose](https://github.com/capnmidnight/Primrose/) - Prototyping VR applications in the browser.

### Others
* [Babylon.js](https://www.babylonjs.com/) - A JavaScript framework for building 3D games with HTML5, WebGL, and Web Audio.
* [Blend4Web](https://www.blend4web.com/en/) - Tool for interactive 3D visualization on the Internet.
* [ClayGL](http://claygl.xyz/) - WebGL graphic Library for building scalable Web3D applications.
* [CopperLicht](https://www.ambiera.com/copperlicht/index.html) - JavaScript library and WebGL 3D engine for creating games and 3D applications.
* [GLGE](http://www.glge.org/) - Javascript library intended to ease the use of WebGL.
* [Lightgl.js](https://github.com/evanw/lightgl.js) - A lightweight, explicit WebGL library for prototyping.
* [OSG.js](https://cedricpinson.github.io/osgjs-website/) - A WebGL framework based on OpenSceneGraph concepts.
* [Pex-gl](http://vorg.github.io/pex/) - JavaScript libraries for computational thinking in Plask/Node.js and WebGL.
* [PlayCanvas](https://playcanvas.com/) - Game engine platform to build interactive experiences.
* [Pocket.gl](https://github.com/gportelli/pocket.gl) - A fully customizable WebGL shader sandbox for embedding in web pages.
* [Regl](http://regl.party/) - A lightweight, declarative, stateless library providing a functional abstraction for WebGL.
* [Scene.js](http://scenejs.org/) - Extensible WebGL-based engine for high-detail 3D visualisation.
* [Three.js](https://threejs.org/) - A 3D library designed to be lightweight and easy to use.
* [Turbulenz](https://github.com/turbulenz/turbulenz_engine) - Modular 3D and 2D game framework for making HTML5 powered games for browsers, desktops and mobile devices.
* [Verge3D](https://www.soft8soft.com/verge3d/) - A toolkit for artists creating 3D web experiences.
* [Whitestorm.js](https://whs.io/) - Framework for developing 3D web apps with physics.

## Community
* [Stack Overflow](https://stackoverflow.com/questions/tagged/webgl)
* [Reddit](https://www.reddit.com/r/webgl/)
* [Facebook](https://www.facebook.com/groups/webgl/about/)
* [Twitter](https://twitter.com/webgl)
* [Freenode IRC](http://webchat.freenode.net/?channels=webgl)
* [Khronos Forum](https://community.khronos.org/c/other-standards/webgl)
* [Google Group](https://groups.google.com/forum/#!forum/webgl-dev-list)
* [Google Plus](https://plus.google.com/communities/114915309361980512257)
* [Public Mailing List](https://www.khronos.org/webgl/public-mailing-list/)
* [WebVR Slack](http://webvr-slack.herokuapp.com/)
* [WebVR Public Mailing List](https://lists.w3.org/Archives/Public/public-webvr/)
* Meetup groups listed as active in the recorded source
  * [San Francisco, CA](https://www.meetup.com/WebGL-Developers-Meetup/)
  * [Mountain View, CA](https://www.meetup.com/Silicon-Valley-HTML5-WebGL-Meetup/)
  * [London, United Kingdom](https://www.meetup.com/WebGL-Workshop-London/)
  * [New York, NY](https://www.meetup.com/NYC-WebGL-Developers/)

## Related lists

> Similar awesome lists

* [awesome](https://github.com/sindresorhus/awesome) - A collection of Awesome lists.
* [awesome-opengl](https://github.com/eug/awesome-opengl) - OpenGL libraries, debuggers, and resources, inspired by other Awesome lists.
* [awesome-vulkan](https://github.com/vinjn/awesome-vulkan) - Vulkan projects and ecosystem resources.
* [gamedev](https://github.com/ellisonleao/magictools) - Resources about game development.
* [glTF](https://github.com/KhronosGroup/glTF) - Runtime 3D Asset Delivery designed for the web.
* [graphics-resources](https://github.com/mattdesl/graphics-resources) - Graphics programming resources.
