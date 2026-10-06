---
title: "Awesome Scapy"
description: "Tools and add-ons that use or extend Scapy, plus exploit implementations and vulnerability analyses."
licenseSource: "github-secdev-awesome-scapy-readme-md"
---

# Awesome Scapy

[Scapy](https://scapy.net) is a Python-based interactive packet manipulation program and library. This list collects tools and add-ons that use or extend Scapy, along with exploit implementations and vulnerability analyses. You can also [explore Scapy topics on GitHub](https://github.com/topics/scapy).

## Tools

Tools that make substantial use of Scapy or extend it.

### Fun
- [pwnagotchi](https://github.com/evilsocket/pwnagotchi) - An AI pet that grows by hacking Wi-Fi, described in the fixed source as very cute.

### DDoS
- [ufonet](https://github.com/epsylon/ufonet) - Tool for creating your own botnet to send DDoS attacks that the fixed source describes as untraceable.

### Wi-Fi
- [trackerjacker](https://github.com/calebmadrigal/trackerjacker) - Maps and tracks Wi-Fi networks and devices through raw 802.11 monitoring.
- [wifiphisher](https://github.com/wifiphisher/wifiphisher) - Creates a rogue access point.

### Wireless
- [WHAD](https://github.com/whad-team/whad-client) - Framework for performing various kinds of wireless attacks, described in the fixed source as powerful.

### IPv6
- [Chiron](https://github.com/aatlasis/Chiron) - An IPv6 security assessment framework.
- [mitm6](https://github.com/fox-it/mitm6) - Performs man-in-the-middle (MiTM) attacks for IPv6.

### Measurements
- [mtraceroute](https://github.com/rwhalb/mtraceroute) - Creates graphs from analyses of multiple traceroutes, described in the fixed source as visually appealing.
- [Network Security Toolkit (NST)](https://wiki.networksecuritytoolkit.org/nstwiki/index.php?title=HowTo_Use_The_Scapy:_Multi-Traceroute_-_MTR) - Includes an enhanced version of `mtraceroute` with IP Geolocation and GUI management.
- [netprobify](https://github.com/criteo/netprobify) - Network probing tool designed for datacenters, but also usable elsewhere. Probes using TCP, UDP, or ICMP.

### Protocols
- [Cotopaxi](https://github.com/Samsung/cotopaxi) - Tools for security testing of Internet of Things devices using specific IoT network protocols: AMQP, CoAP, DTLS, HTCPCP, KNX, mDNS, MQTT, MQTT-SN, QUIC, RTSP, and SSDP.
- [project-memoria-detector](https://github.com/Forescout/project-memoria-detector) - Determines whether a network device runs a specific embedded TCP/IP stack.
- [routopsy](https://github.com/sensepost/routopsy) - Toolkit for attacking DRP and FHRP.
- [TorPylle](https://github.com/cea-sec/TorPylle) - Implementation of the OR (TOR) protocol.

### Unit Tests
- [Linux Kernel](https://github.com/torvalds/linux/blob/master/tools/testing/selftests/tc-testing/plugin-lib/scapyPlugin.py) - Linux Traffic Control (tc) testing suite.
- [OpenBSD](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3Dscapy%2Brepo%253Aopenbsd%252Fsrc%2Bpath%253Aregress%252F%26type%3DCode%26ref%3Dadvsearch%26l%3D%26l%3D) - IPv6 stack testing suite.
- [RIOT-OS](https://github.com/RIOT-OS/RIOT/search?l=Python&q=scapy&type=Code) - RIOT OS networking testing suite.

### Visualization
- [Scapy-Packet-Viewer](https://pypi.org/project/scapy-packet-viewer/) - Minimal packet viewer similar to tshark and mitmproxy, based on urwid.

### Misc
- [aioblescan](https://github.com/frawau/aioblescan) - Scans and decodes advertised BLE information.
- [fenrir](https://github.com/Orange-Cyberdefense/fenrir-ocd) - Bypasses wired 802.1x protection.
- [flowsynth](https://github.com/secureworks/flowsynth) - Tool for rapidly modeling network traffic.
- [Fragscapy](https://github.com/AMOSSYS/Fragscapy) - Fuzzes network protocols by automating modifications to outgoing network packets.
- [Habu](https://github.com/fportantier/habu) - Toolkit containing many small hacking tools, many of which use Scapy.
- [mirage](https://redmine.laas.fr/projects/mirage) - Modular framework dedicated to security analysis of wireless communications, described in the fixed source as powerful.
- [netenum](https://github.com/redcode-labs/Netenum) - A tool to passively discover active hosts on a network.
- [net-creds](https://github.com/DanMcInerney/net-creds) - Tool for sniffing and capturing sensitive data on an interface; the fixed source describes its scope as all sensitive data.
- [packetweaver](https://github.com/ANSSI-FR/packetweaver) - Python framework for organizing scripts and sequencing tasks.
- [p0f3plus](https://github.com/FlUxIuS/p0f3plus) - Implementation of p0f3 with extra analysis features.
- [pysap](https://github.com/SecureAuthCorp/pysap) - Interacts with SAP using custom-built frames and tools.
- [Responder](https://github.com/SpiderLabs/Responder) - LLMNR, NBT-NS, and MDNS poisoning tool.
- [scapy\_unroot](https://github.com/scapy-unroot/scapy_unroot) - Tooling to use Scapy without root permissions.
- [scapy-benchmarks](https://github.com/gpotter2/scapy-benchmarks) - A small test suite that tracks the evolution of Scapy's performance.
- [sshame](https://github.com/HynekPetrak/sshame) - Tool to brute force SSH public-key authentication.
- [TIDoS Framework](https://github.com/0xInfection/TIDoS-Framework) - Framework for manual offensive web application penetration testing.
- [h2spacex](https://github.com/nxenon/h2spacex) - Low-level HTTP/2 library based on Scapy, usable for Single Packet Attack (a race condition on HTTP/2).

## Exploits

Exploits that use Scapy, excluding those included with Scapy by default.

### 2024

- [CVE-2024-20674](https://github.com/gpotter2/CVE-2024-20674) - Windows Kerberos bypass leading to remote code execution (RCE).
- [PPPwn (CVE-2006-4304)](https://github.com/TheOfficialFloW/PPPwn) - PlayStation 4 PPPoE remote code execution (RCE).

### 2022

- [CVE-2021-28444](http://blog.champtar.fr/VLAN0_LLC_SNAP) - Windows Hyper-V Security Feature Bypass Vulnerability.

### 2021

- [CVE-2021-24086](https://blog.quarkslab.com/analysis-of-a-windows-ipv6-fragmentation-vulnerability-cve-2021-24086.html) - Analysis of a Windows IPv6 Fragmentation Vulnerability.
- [fragattacks](https://github.com/vanhoefm/fragattacks) - Fragmentation and aggregation attacks.

### 2020

- [CVE-2020-25577](https://blog.quarkslab.com/bad-neighbor-on-freebsd-ipv6-router-advertisement-vulnerabilities-in-rtsold-cve-2020-25577.html) - Bad Neighbor on FreeBSD: IPv6 Router Advertisement Vulnerabilities in rtsold.
- [CVE-2020-16898](https://blog.quarkslab.com/beware-the-bad-neighbor-analysis-and-poc-of-the-windows-ipv6-router-advertisement-vulnerability-cve-2020-16898.html) - Beware the Bad Neighbor: Analysis and PoC of the Windows IPv6 Router Advertisement Vulnerability.

### 2019
- [CVE-2019-5597](https://www.synacktiv.com/ressources/Synacktiv_OpenBSD_PacketFilter_CVE-2019-5597_ipv6_frag.pdf) - IPv6 fragmentation vulnerability in OpenBSD Packet Filter.

### 2018

- [CVE-2018-4407](https://github.com/r3dxpl0it/CVE-2018-4407) - A heap buffer overflow in the networking code in the XNU operating system kernel (iOS and macOS).

### 2017
- [krackattacks-scripts](https://github.com/vanhoefm/krackattacks-scripts) - Tests whether clients or access points (APs) are affected by the KRACK attack against WPA2.

### 2016
- [CVE-2016-6366](https://github.com/RiskSense-Ops/CVE-2016-6366) - EXTRABACON remote code execution exploit for Cisco ASA, described in the fixed source as written by the Equation Group (NSA) and leaked by the Shadow Brokers.

### Misc
- [isf](https://github.com/dark-lbp/isf) - ISF (Industrial Control System Exploitation Framework): a suite providing exploits for various industrial protocols.
