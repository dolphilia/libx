---
title: "Awesome Real Time Communications"
description: "RTC server software, operational tools, development resources, blogs, discussions, events, and related lists."
licenseSource: "github-rtckit-awesome-rtc-readme-md"
---

# Awesome Real Time Communications

Real-time communications (RTC) covers protocols and methods for exchanging media and data nearly simultaneously. This list collects server software, operational tools, developer tutorials and libraries, blogs, discussion spaces, events, and related lists for RTC.

## Server Software

### General Purpose

- [FreeSWITCH](http://freeswitch.org) - Open-source, cross-platform software switch supporting multiple protocols.
- [Asterisk](http://asterisk.org) - PBX framework supporting multiple protocols and platforms.

### SIP Servers

- [Kamailio](http://www.kamailio.org) - Open-source SIP server formerly known as OpenSER, described in the fixed source as widely deployed by carriers and providers.
- [OpenSIPS](http://www.opensips.org) - Open-source SIP server with roots in OpenSER, identified in the fixed source as what is now Kamailio.
- [Routr](https://routr.io) - Lightweight SIP proxy, location server, and registrar written in Node.js.
- [Sippy B2BUA](https://github.com/sippy/b2bua) - Back-to-back user agent server written in Python.
- [Flexisip](https://github.com/BelledonneCommunications/flexisip) - SIP server suite comprising proxy, presence and group chat functions.

### Media Servers

- [Janus](https://janus.conf.meetecho.com) - Lightweight, open-source, general-purpose WebRTC gateway.
- [LiveKit](https://livekit.io) - Open-source WebRTC infrastructure for building real-time audio and video applications, described in the fixed source as scalable.
- [RTPProxy](https://www.rtpproxy.org) - General-purpose RTP proxy described in the fixed source as high-performance.
- [RTP:Engine](https://github.com/sipwise/rtpengine) - Proxy for RTP- and UDP-based media traffic, also usable as a kernel module.
- [mediasoup](https://mediasoup.org) - WebRTC system specialized for conferencing.
- [SEMS](https://github.com/sems-server/sems) - Open-source media and application server for SIP-based VoIP services.
- [Jitsi](https://jitsi.org/projects) - Collection of open-source RTC projects focused on conferencing software.

### STUN/TURN

- [coturn](https://github.com/coturn/coturn) - TURN/STUN server supporting multiple platforms, described in the fixed source as fully featured.
- [eturnal](https://eturnal.net/) - STUN/TURN server written in Erlang, described in the fixed source as modern and scalable.
- [natcheck](https://github.com/1mb-dev/natcheck) - Command-line tool for diagnosing NAT types. It probes STUN servers, classifies mapping behaviour according to RFC 5780, and reports a forecast for direct WebRTC peer-to-peer connectivity.
- [STUNTMAN](https://github.com/jselbie/stunserver) - Open-source STUN implementation described in the fixed source as RFC-compliant.

## Operations

### Monitoring

- [sngrep](https://github.com/irontec/sngrep) - Terminal-based SIP flow viewer.
- [sipgrep](https://github.com/sipcapture/sipgrep) - Console tool for sniffing, capturing and exploring SIP traffic.
- [rtpbreak](https://github.com/Naishy/rtpsplit) - Detects, reconstructs, and analyzes RTP sessions.
- [HOMER](https://github.com/sipcapture/homer) - Framework for capturing and monitoring RTC traffic across multiple protocols.
- [WebRTC Troubleshooter](https://github.com/webrtc/testrtc) - Self-hosted tool bringing together client-side WebRTC troubleshooting.
- [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice) - Exposes client-side NAT traversal debug data.
- [SIP3](https://sip3.io) - VoIP & RTC traffic monitoring and analysis platform.

### Testing

- [SIPp](http://sipp.sourceforge.net) - Traffic generator for the SIP protocol.
- [SIPVicious](https://github.com/EnableSecurity/sipvicious) - Suite of security tools that can be used to audit SIP based VoIP systems.
- [sipsak](https://github.com/nils-ohlmeier/sipsak) - Utility for SIP stress testing and diagnostics.
- [sipexer](https://github.com/miconda/sipexer) - SIP command-line tool described in the fixed source as modern and flexible.

### Deployment

- [slimswitch](https://github.com/rtckit/slimswitch) - Tools for creating FreeSWITCH Docker images described in the fixed source as lean and secure.

### Web/API Interfaces

- [Eqivo](https://eqivo.org) - Open-source API platform for programmable voice and telephony.
- [Kazoo](https://www.2600hz.org) - VoIP API platform using FreeSWITCH and Kamailio, described in the fixed source as carrier-grade.
- [FusionPBX](https://www.fusionpbx.com) - Multitenant system built on top of FreeSWITCH.
- [FreePBX](https://www.freepbx.org) - Web-based manager for Asterisk.
- [Fonoster](https://github.com/fonoster/fonoster) - Telecommunication stack built with Node.js.
- [Wazo](https://wazo-platform.org) - VoIP API platform built on top of Asterisk, Kamailio and RTPEngine.
- [jambonz](https://www.jambonz.org) - Open-source communications platform as a service (CPaaS) built for communications service providers.
- [IVOZ Provider](https://github.com/irontec/ivozprovider) - Multitenant solution for VoIP telephony providers.
- [Sayna](https://github.com/SaynaAI/sayna) - Real-time speech infrastructure for voice AI with WebSocket streaming, SIP telephony and pluggable STT/TTS providers.

### Billing

- [CGRateS](http://cgrates.org) - Open-source billing and rating server described in the fixed source as carrier-grade.
- [A2Billing](http://www.asterisk2billing.org) - Billing system for Asterisk supporting multiple applications.
- [PyFreeBilling](https://github.com/mwolff44/pyfreebilling) - Wholesale billing platform for Kamailio and FreeSWITCH.

## Developer Resources

### Tutorials

- [Official Website](https://webrtc.org) - Introductory WebRTC resources.
- [Getting Started With WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/basics) - WebRTC tutorial by HTML5 Rocks.
- [WebRTC Samples](https://webrtc.github.io/samples) - Collection of samples demonstrating various parts of the WebRTC APIs.
- [WebRTC Experiments](https://www.webrtc-experiment.com) - List of samples by Muaz Khan, described in the fixed source as comprehensive.
- [Interactive Codelab](https://codelabs.developers.google.com/codelabs/webrtc-web) - Interactive, step-by-step tutorial by Google, described in the fixed source as taking 30 minutes.

### JavaScript Libraries

- [drachtio](https://drachtio.org) - Node.js SIP server framework.
- [adapter.js](https://github.com/webrtcHacks/adapter) - JavaScript shim that abstracts changes and inconsistencies in the WebRTC specification.
- [JsSIP](http://jssip.net) - Lightweight open source JavaScript SIP library.
- [sipML5](https://www.doubango.org/sipml5) - Open source JavaScript SIP client with WebRTC media stack.
- [simple-peer](https://github.com/feross/simple-peer) - WebRTC video, voice, and data channels abstraction for Node.js and the browser.
- [Netflux](https://github.com/coast-team/netflux) - Isomorphic JavaScript peer-to-peer transport API for both client and server.
- [PeerJS](https://peerjs.com) - Data and media peer-to-peer connection API implemented over WebRTC.
- [Socio](https://github.com/Rolands-Laucis/Socio) - WebSocket RTC API framework for real-time reactivity on the front end and back end.

### C/C++ Libraries

- [libre](https://github.com/creytiv/re) - Portable SIP stack with companion libraries for media handling and STUN/TURN, and a modular user agent.
- [PJSIP](https://www.pjsip.org) - Multi-protocol RTC library written in C.
- [eXosip](http://savannah.nongnu.org/projects/exosip) - eXtended osip: a C library that abstracts the SIP protocol, described in the fixed source as mature.
- [libdatachannel](https://github.com/paullouisageneau/libdatachannel) - Standalone C++ implementation of WebRTC DataChannels.
- [icey](https://github.com/nilstate/icey) - C++20 WebRTC media runtime with FFmpeg pipeline, Symple signalling, and RFC 5766 TURN.
- [libSRTP](https://github.com/cisco/libsrtp) - Secure Real-time Transport Protocol (SRTP) library for C.
- [usrsctp](https://github.com/sctplab/usrsctp) - Portable user-space Stream Control Transmission Protocol (SCTP) stack.
- [rawrtc](https://github.com/rawrtc/rawrtc) - WebRTC and ORTC library described in the fixed source as having a small footprint.
- [OSS Core](https://github.com/joegen/oss_core) - General-purpose C++ library for real-time communications.
- [Open WebRTC Toolkit](https://01.org/open-webrtc-toolkit) - WebRTC development toolkit with bindings for multiple platforms.
- [Sofia-SIP](https://github.com/freeswitch/sofia-sip) - Open source SIP library used by FreeSWITCH.

### Go Libraries

- [Pion](https://pion.ly) - WebRTC software stack written in Go, described in the fixed source as extensive.
- [gossip](https://github.com/StefanKopieczek/gossip) - SIP stack for stateful user agents written in Go.
- [siprocket](https://github.com/marv2097/siprocket) - SIP and SDP packet parser described in the fixed source as fast.
- [go-diameter](https://github.com/fiorix/go-diameter) - Diameter protocol library described in the fixed source as RFC-compliant.

### PHP Libraries

- [RTCKit/SIP](https://github.com/rtckit/php-sip) - SIP parsing and rendering library for PHP 7.4 and later, described in the fixed source as compliant with RFC 3261.

### Python Libraries

- [aiortc](https://github.com/aiortc/aiortc) - WebRTC and ORTC implementation for Python using asyncio.
- [Katari](https://github.com/hyperioxx/Katari) - SIP stack application framework.
- [peerjs-python](https://github.com/ambianic/peerjs-python) - Python port of the PeerJS peer-to-peer connection library.

### Erlang Libraries

- [NkSIP](https://github.com/NetComposer/nksip) - Extensible SIP server framework.
- [ersip](https://github.com/poroh/ersip) - Library comprising building blocks for SIP applications.

### Rust Libraries

- [libsip](https://docs.rs/libsip/0.2.4/libsip) - SIP implementation focused on softphone clients.
- [sipcore](https://github.com/armatusmiles/sipcore) - Rust framework for creating SIP applications.
- [rtcrs/webrtc](https://github.com/rtcrs/webrtc) - WebRTC stack supporting SDP, RTP, RTCP, and SRTP.

### Dart Libraries

- [dart-sip-ua](https://github.com/cloudwebrtc/dart-sip-ua) - Dart port of JsSIP supporting SIP over WebSocket.

## Blogs

- [BlogGeekMe](https://bloggeek.me/blog) - Blog by Tsahi Levent-Levi with a strong focus on WebRTC.
- [SIP Adventures](https://andrewjprokop.wordpress.com) - Unified communications blog by Andrew Prokop.
- [WebRTCHacks](https://webrtchacks.com) - WebRTC blog by independent technologists.

## Discussion

- [FreeSWITCH Slack](https://signalwire.community) - Join #freeswitch and #freeswitch-dev for user and developer support.
- [discuss-webrtc](https://groups.google.com/forum/?fromgroups#!forum/discuss-webrtc) - Developer-oriented Google Group for WebRTC discussions.

## Events

- [ClueCon](http://cluecon.com) - Conference for telecommunications developers where FreeSWITCH originated, described in the fixed source as held annually in Chicago.
- [Kamailio World](https://www.kamailioworld.com) - Event focused on Kamailio, VoIP, WebRTC, IMS, VoLTE, and more, described in the fixed source as held annually in Berlin.
- [AstriCon](https://www.asterisk.org/community/astricon-user-conference) - Asterisk-focused event described in the fixed source as held annually at locations across the US.
- [CommCon](https://commcon.xyz) - Conference focused on telecommunications in general and WebRTC in particular, described in the fixed source as held annually in the UK.
- [OpenSIPS Summit](https://www.opensips.org/events) - Meeting place for the OpenSIPS community.
- [Kranky Geek](https://krankygeek.com) - AI and RTC event described in the fixed source as held in San Francisco.
- [FOSDEM](https://fosdem.org) - Free event for software developers that includes RTC, described in the fixed source as held annually in Europe.
- [JanusCon](https://www.januscon.it) - Live event for Janus and RTC implementers.
- [TADHack](https://tadhack.com) - Global hackathon focused on programmable communications.

## Related Lists

- [Awesome RIPT](https://github.com/rtckit/awesome-ript) - Real Time Internet Peering for Telephony.
- [Awesome RTC Hacking](https://github.com/EnableSecurity/awesome-rtc-hacking) - Resources for RTC hacking and penetration testing.
- [Awesome 5G](https://github.com/calee0219/awesome-5g) - 5G frameworks, libraries, software and resources.
- [Awesome Cellular Hacking](https://github.com/W00t3k/Awesome-Cellular-Hacking) - Research resources on 3G/4G/5G cellular security.
- [Awesome Telco](https://github.com/ravens/awesome-telco) - Telco resources and projects.
- [SIP Resources](https://github.com/miconda/sip-resources) - Useful SIP resources curated by Kamailio's lead developer.
