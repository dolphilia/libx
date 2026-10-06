---
title: "Awesome WebAudio"
description: "Web Audio frameworks, libraries, MIDI tools, audio applications, tutorials, books, and community resources."
licenseSource: "github-notthetup-awesome-webaudio-readme-md"
---

# Awesome WebAudio

This list collects [Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) resources for browser audio, music production, and learning. The list covers frameworks, libraries, development tools, MIDI, applications, tutorials, books, newsletters, and communities, plus projects grouped as obsolete in the fixed source. Descriptions and status claims reflect that source.

## Packages

### Frameworks

- [Tone.js](https://github.com/Tonejs/Tone.js) - A framework for making interactive music in the browser.
- [Bap](https://github.com/adamrenklint/bap) - A toolkit for making beats and composing sequences, inspired by the classic MPC60/2000.
- [Omnitone](https://github.com/GoogleChrome/omnitone) - Ambisonic spatial audio on the web.
- [Mach1Spatial](https://github.com/Mach1Studios/m1-sdk) - Vector-based panning for spatial audio on the web.
- [Elementary](https://www.elementary.audio/) - A declarative, functional framework for writing audio software for the web or native apps.
- [React Native Audio API](https://github.com/software-mansion-labs/react-native-audio-api) - A Web Audio API implementation for native apps based on React Native.

### Libraries

- [smoothfade](https://github.com/notthetup/smoothfade) - A library for smoothly fading between two AudioNodes.
- [virtual-audio-graph](https://github.com/benji6/virtual-audio-graph) - A library for declaratively manipulating the Web Audio API.
- [XSound.js](https://xsound.app/) - A full-stack library.
- [Sound.js](https://github.com/kittykatattack/sound.js) - A micro-library to load, play and generate sound effects and music for games and interactive applications.
- [Meyda](https://github.com/meyda/meyda) - Audio feature extraction library including a variety of widely used audio features.
- [Wavesurfer.js](https://github.com/katspaugh/wavesurfer.js) - Interactive navigable audio visualization using Web Audio and Canvas.
- [Audiojs](https://github.com/audiojs/audio) - An object that enables you to store, read, and write PCM audio data more easily.
- [Tuna](https://github.com/Theodeus/tuna) - An audio effects library.
- [Rythm.js](https://okazari.github.io/Rythm.js/) - A JavaScript library that makes your page dance.
- [Howler.js](https://github.com/goldfire/howler.js) - A comprehensive library with a fallback to HTML5 Audio.
- [Circular Audio Wave](https://github.com/kelvinau/circular-audio-wave) - A JavaScript library for circular-wave audio visualization using the Web Audio API and ECharts.
- [Wad](https://github.com/rserota/wad) - Web Audio DAW. Use the Web Audio API for dynamic sound synthesis. It's like jQuery for your ears.
- [p5.sound](https://p5js.org/reference/#/libraries/p5.sound) - An extension that adds Web Audio functionality to the creative coding library [p5.js](https://p5js.org/).
- [@magenta/music](https://github.com/magenta/magenta-js/tree/master/music) - A JavaScript library for using machine learning models and generating music in the browser, with abstractions over the Web Audio API.
- [soundfont-player](https://www.npmjs.com/package/soundfont-player) - A soundfont loader and player for playing MIDI sounds with the Web Audio API.
- [html-midi-player](https://github.com/cifkao/html-midi-player) - HTML elements for easy MIDI playback and visualization, without the need to write any custom JS code, but scriptable and stylable as needed.
- [MusicXML Player](https://github.com/infojunkie/musicxml-player) - A TypeScript component that loads and plays MusicXML files in the browser using Web Audio and Web MIDI.
- [waveform-path](https://github.com/jerosoler/waveform-path) - A library for generating waveform paths in SVG.
- [wave-audio-path-player](https://github.com/jerosoler/wave-audio-path-player) - A simple audio player web component customizable with a waveform.
- [dsssp](https://github.com/NumberOneBot/dsssp) - A React component library for visualizing and managing audio filters, with drag-and-drop and transition support.
- [tuning-fork](https://github.com/v-rusu/tuning-fork) - A configurable client-side JavaScript library for guitar tuning with real-time pitch detection.

### Utilities

- [Audion](https://github.com/google/audion) - Chrome extension that adds a Web Audio panel to Developer Tools.
- [web-audio-generator](https://github.com/ISNIT0/webaudio-generator) - A UI for generating Web Audio code.
- [Web Audio Studio](https://app.webaudio.studio) - A real-time visualizer for Web Audio API graphs generated from code.

### MIDI

- [midimessage](https://github.com/notthetup/midimessage) - A simple MIDI Message parser.
- [JZZ](https://github.com/jazz-soft/JZZ) - MIDI library for Node.js and all major browsers.
- [JZZ-midi-Gear](https://github.com/jazz-soft/JZZ-midi-Gear) - Retrieve your MIDI device model and manufacturer.
- [WEBMIDI.js](https://webmidijs.org/) - The Web MIDI API made easy.

### Apps

- [BassoonTracker](https://github.com/steffest/BassoonTracker) - A MOD/XM tracker in JavaScript.
- [LoopDrop App](https://github.com/mmckegg/loop-drop-app) - MIDI looper, modular synth and sampler app built using Web Audio and Web MIDI APIs.
- [X Sound](https://xsound.app/) - A multi-sound application that uses XSound.js.
- [Molgav](https://github.com/surikov/molgav) - A musical step sequencer for exchanging melodies.
- [mod-synth.io](https://github.com/andrevenancio/mod-synth.io) - Create your own modular synthesizer, or emulate different synths.
- [GridSound](https://gridsound.github.io) - A DAW (Digital Audio Workstation) described in the source as a work in progress.
- [Learning Music](https://learningmusic.ableton.com/) - Learn the basics of music making.
- [Super Oscillator](https://github.com/lukehorvat/super-oscillator) - An interactive, 3D music synthesizer for the Web.
- [AudioNodes](https://audionodes.com) - Modular audio production suite with multi-track audio mixing, audio effects, parameter automation, MIDI editing, synthesis, cloud production, and more.
- [waveform-playlist](https://github.com/naomiaro/waveform-playlist) - Multitrack Web Audio editor and player with canvas waveform preview. Set cues, fades and shift multiple tracks in time. Record audio tracks or provide audio annotations. Export your mix to AudioBuffer or WAV. Project inspired by Audacity.
- [SoundCycle](https://github.com/scriptify/soundcycle) - A Web Audio based Loopstation for musicians with effects and different looping modes.
- [DSP.audio Worklet Editor](https://dsp.audio/editor/) - Online Audio Worklet editor for sketching and collaboration, with sampler, MIDI and analyzers. Like a JSFiddle, but for DSP.
- [AudioMass](https://audiomass.co/) - A free, open-source, web-based audio and waveform editor.
- [Csound IDE](https://ide.csound.com/) - A web IDE for the [CSound programming language](https://en.wikipedia.org/wiki/Csound).
- [jamhub](https://github.com/fletcherist/jamhub) - Low-latency remote music collaboration and jamming.
- [Web Audio Metronome](https://github.com/cwilso/metronome) - A metronome app that uses the Web Audio scheduler and setTimeout scheduler.
- [EarSketch](https://earsketch.gatech.edu/landing/#/) - A free educational programming environment for teaching Python and JavaScript through music composition and remixing.
- [webaudio-tinysynth](https://github.com/g200kg/webaudio-tinysynth) - A small JavaScript synthesizer with a GM-like timbre map.
- [web-audio-beat-detector](https://github.com/meerasndr/sample-golang-app) - A beat detection utility that uses the Web Audio API.
- [web-audio-mixer](https://github.com/jamesfiltness/web-audio-mixer) - An audio mixer built using Web Audio.
- [Audio-motion interface](https://github.com/MaxAlyokhin/audio-motion-interface) - A web synthesizer that generates sound from smartphone gestures in space.
- [Topos](https://topos.raphaelforment.fr) - A web-based live coding environment inspired by the Monome Teletype. Uses Web Audio and MIDI.
- [Online Sequencer](https://onlinesequencer.net) - A simple and easy-to-use sequencer with plenty of functionality, based around the Web Audio API.
- [Binary Synth](https://github.com/MaxAlyokhin/binary-synth) - A web synthesizer that generates sound from the binary code of any files.
- [dsssp-demo](https://github.com/NumberOneBot/dsssp-demo) - A Web Audio music player with a 7-band EQ and filter presets.
- [SingMeter](https://www.singmeter.com/) - A collection of browser-based singing tools including a pitch detector and vocal range test.
- [Drumhaus](https://drumha.us/) - A browser-based drum machine with step sequencing, pattern variations, and groove editing.
- [All-in-One Advanced BPM Tool](https://tapbpmhub.com/) - Instantly measure song speed by tapping or using the spacebar. Features MIDI input, optional sound clicks, and real-time BPM visualization. For music producers, DJs, and rhythm gamers.
- [synflow](https://synflow.org) [Github](https://github.com/k1ln/synflow) - A browser-based modular synth flow engine with all Web Audio API nodes and additional Worklets, such as vocoder and reverb, plus sophisticated flow automation.
- [Tonalux](https://tonalux.org) - Free browser-based audio analysis suite with real-time spectrum analyzer, LUFS loudness metering (EBU R128), A/B reference comparison and stereo correlation. Built with Web Audio API and WebAssembly, runs entirely client-side.
- [mdrone](https://mdrone.org) - Microtonal drone instrument that runs in your browser.

## Resources

### Tutorials

- [WebAudio School](https://github.com/mmckegg/web-audio-school) - A series of self-guided workshops to learn WebAudio.
- [Web Audio API Understandable Reference](https://web-audio-api.firebaseapp.com/) - A reference that aims to be easy to understand for those who know some JavaScript and basic audio principles.
- [The Web Audio API: What Is It?](https://code.tutsplus.com/tutorials/the-web-audio-api-what-is-it--cms-23735) - Intro to WebAudio.
- [Web Audio Basics](https://github.com/kylestetz/Web-Audio-Basics) - A growing set of light code samples with CodePen links for each.
- [Web Audio Perf](https://padenot.github.io/web-audio-perf/) - Performance of various AudioNodes and strategies for efficient resource usage (from WAC2016).
- [Percussion Synthesis Using Web Audio](https://github.com/irritant/WAC-2016-Tutorial) - This tutorial will introduce the basics of web audio programming by writing code to synthesize simple percussion sounds (from WAC2016).
- [Browser Noise: Web Audio Tutorials](https://www.youtube.com/playlist?list=PLLgJJsrdwhPywJe2TmMzYNKHdIZ3PASbr) - Playlist of video tutorials by Dan Tramte, hosted on the Audio Programmer YouTube channel.
- [audio-katas](https://github.com/survivejs/audio-katas) - A collection of self-guided katas during which you will build a DAW of your own while getting exposed to the key Web Audio APIs.

### Books

- [JavaScript for Sound Artists](https://www.routledge.com/JavaScript-for-Sound-Artists-Learn-to-Code-with-the-Web-Audio-API/Turner-Leonard/p/book/9781138961531) - A JavaScript and DOM course that builds from the basics, using Web Audio for all examples.
- [Web Audio API](https://webaudioapi.com/book/) - Intended to be a springboard for web developers with little to no digital audio expertise. Geared towards game audio and interactive apps.

### Newsletters

- [Web Audio Weekly Newsletter](https://www.webaudioweekly.com) - A weekly review of what's happening in Web Audio.

### Community

- [Slack](https://web-audio-slackin.herokuapp.com/) - A Slack for discussing Web Audio.
- [Web Audio Conference](https://webaudioconf.com/) - International conference dedicated to web audio technologies and applications.

## Obsolete

The fixed source groups these projects as inactive since January 2019 or officially discontinued.

- [Gibberish](https://github.com/gibber-cc/gibberish) - A JavaScript DSP library that creates JIT optimized audio callbacks using code generation techniques.
- [lissajous](https://github.com/kylestetz/lissajous) - A tool for programmatic audio performance.
- [SSSynthesiser.js](https://github.com/surikov/SSSynthesiser.js) - A wavetable synthesizer for interactive music and sound effects.
- [WAAX](https://github.com/hoch/WAAX/) - Build Music Apps for browsers.
- [Band.js](https://github.com/meenie/band.js/) - An interface for the Web Audio API that supports rhythms, multiple instruments, repeating sections, and complex time signatures.
- [reverbGen](https://github.com/adelespinasse/reverbGen) - A JavaScript library for generating artificial reverb impulse responses.
- [TuneJS](https://github.com/abbernie/tune) - A tuning library of microtonal and just intonation scales. Supports over 3,000 historical tunings.
- [Beet.js](https://github.com/zya/beet.js) - A sequencer library for creating euclidean rhythms and polyrhythms.
- [AudioKeys](https://github.com/kylestetz/AudioKeys) - A QWERTY keyboard for web audio projects.
- [web-audio-test-api](https://github.com/mohayonao/web-audio-test-api) - A Web Audio test library for CI.
- [javascript-karplus-strong](https://github.com/mrahtz/javascript-karplus-strong) - JavaScript/Web Audio implementation of Karplus-Strong guitar synthesis.
- [osc-msg](https://github.com/mohayonao/osc-msg) - OSC message decoder/encoder with fault tolerance.
- [Pizzicato](https://github.com/alemangui/pizzicato) - A library that aims to simplify creating and manipulating sounds in the browser.
- [Mooog](https://github.com/mattlima/mooog) - Tools that simplify working with AudioNodes, inspired by jQuery and mixing tables.
- [envelope-generator](https://github.com/itsjoesullivan/envelope-generator) - Simple ADSR envelope generator for web audio.
- [audio contour](https://github.com/danigb/audio-contour) - A 5-stage audio envelope generator.
- [web-audio-recorder-js](https://github.com/higuma/web-audio-recorder-js) - A library that records audio input (a Web Audio API AudioNode object) and encodes it as audio file data (a Blob object).
- [audiolet](https://github.com/oampo/Audiolet) - A JavaScript library for real-time audio synthesis and composition from within the browser.
- [playnote](https://github.com/createbits/playnote) - Play your favorite instrument in the browser, with complex note intervals and scales.
- [Recorderjs](https://github.com/mattdiamond/Recorderjs) - A plugin for recording/exporting the output of Web Audio API nodes.
- [resampler](https://github.com/notthetup/resampler) - A utility for resampling audio.
- [bpm-detective](https://github.com/tornqvist/bpm-detective) - Detects the BPM of a song or audio sample.
- [web-audio-utils](https://github.com/mohayonao/web-audio-utils) - Commonly needed utility functions for Web Audio API.
- [web-audio-oscillators](https://github.com/lukehorvat/web-audio-oscillators) - A collection of Web Audio custom oscillators.
- [midi-ports](https://github.com/AndrejHronco/midi-ports) - A library that makes working with attached MIDI devices easier.
- [Midi Logger](http://outputchannel.com/midi-logger/) - Prints all MIDI input in the browser for debugging.
- [Code Player](https://github.com/jcppman/code-player) - An experimental app that makes your code sing.
- [Web Audio Modules](https://www.webaudiomodules.org/) - Synthesizers and audio effects processors for web browsers, including APIs and implementations.
