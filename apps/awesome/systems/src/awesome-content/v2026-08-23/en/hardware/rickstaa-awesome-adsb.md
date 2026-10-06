---
title: "Awesome ADS-B"
description: "ADS-B reception and decoding guides, flight-data aggregators, feeder software, derived datasets, and receiver hardware."
licenseSource: "github-rickstaa-awesome-adsb-readme-md"
---

# Awesome ADS-B

[Automatic Dependent Surveillance–Broadcast (ADS-B)](https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast) lets aircraft broadcast their position for tracking. This list covers reception and decoding guides, flight-data aggregators, feeder and visualisation software, derived flight schedules, and receiver hardware.

ADS-B is a surveillance technology and a form of electronic [conspicuity](https://en.wikipedia.org/wiki/Airborne_collision_avoidance_system#Aircraft_collision_avoidance): an [aircraft](https://en.wikipedia.org/wiki/Aircraft) determines its position using [satellite navigation](https://en.wikipedia.org/wiki/Satellite_navigation) or other sensors and broadcasts it periodically, enabling it to be tracked.

The upstream [ADS-B diagram](https://www.sportys.com//media/wysiwyg/blog/13_-_Navigating_and_Automation_in_the_21st_Century.png), bearing the Aviation Seminars mark, depicts GNSS satellites, aircraft position reporting, TIS-B and aircraft-to-aircraft links, and communications with ground stations and air traffic control (ATC). It also shows an air route traffic control centre (ARTCC) and terminal airport radar. Links involving the communications satellite and ground stations are marked “Projected Capability”; the diagram does not present them as an existing capability. The accompanying [ADS-B 101 article](https://www.sportys.com/blog/ads-b-101-what-you-need-know) provides the source context.

## Docs and Quickstarts

- [ADS-B Docker guide](https://sdr-enthusiasts.gitbook.io/ads-b/) - Guide to ADS-B reception, decoding, and sharing.
- [ADS-B equipment guide](https://sdr-enthusiasts.gitbook.io/ads-b/intro/equipment-needed) - Community-written guide to ADS-B hardware.
- [PiAware ADS-B tutorial](https://flightaware.com/adsb/piaware/build/) - FlightAware's ADS-B setup tutorial.
- [ADS-B transponders guide](https://www.sportys.com/blog/ads-b-out-questions-1090-978/) - Guide to the differences between 978 and 1090 MHz transponders.

## Books and Articles

- [The 1090 Megahertz Riddle - Junzi Sun](https://mode-s.org/decode/index.html) - Guide to decoding Mode S and ADS-B signals.

## ADS-B Aggregators

Within each category, aggregators are ordered by their number of feeders on 2026-01-17. Where feeder counts were unavailable, the upstream list compared the number of aircraft tracked.

### Open-source-oriented Aggregators<a id="open-source-orientated"></a>

- [airplanes.live](https://airplanes.live) - Aggregates unfiltered aviation data and provides a map and a free API.
- [ADSB One](https://adsb.one) - Community-driven aggregator of aviation feeds and related information, legally dedicated to the public interest.
- [adsb.fi](https://adsb.fi) - Community-driven flight tracker with hundreds of feeders worldwide, offering open, unfiltered access to worldwide air traffic data.
- [ADSB.lol](https://adsb.lol) - Fully open-source, community-driven flight tracker that displays [ODbL-licensed](https://opendatacommons.org/licenses/odbl/summary/) data and provides it through a [free API](https://api.adsb.lol/), with [free historical data](https://github.com/adsblol/globe_history) also available.

### Community Projects<a id="community-driven"></a>

- [ADSBHub.org](https://www.adsbhub.org) - Real-time ADS-B data sharing and exchange for flight-tracking enthusiasts, plane spotters, radio amateurs, and professionals developing ADS-B software.
- [TheAirTraffic](https://theairtraffic.com) - Community-driven ADS-B aggregator committed to keeping its flight-tracking data open and unfiltered.
- [PlaneSpotters.net](https://www.planespotters.net) - Civil aviation database and aggregator with a large collection of aircraft photos and information.
- [Plane.watch](https://plane.watch) - Community-hosted flight tracker.
- [www.live-military-mode-s.eu](https://www.live-military-mode-s.eu) - Community-driven tracker focused on military aircraft.
- [adsb.chaos-consulting.de](https://adsb.chaos-consulting.de) - Non-commercial tracker of flights, ships, and radiosondes, run by enthusiasts and focused on contributions from individual feeding stations.

### Non-profits

- [Opensky Network](https://opensky-network.org) - Swiss non-profit association providing open access to flight-tracking control data. It began as a research project involving several universities and government bodies to improve airspace security, reliability, and efficiency.

### Commercial

- [FlightAware](https://flightaware.com)[^1] - US multinational technology company providing real-time, historical, and predictive flight-tracking data and products.
- [FlightRadar24](https://www.flightradar24.com)[^1] - Swedish online service displaying real-time flight-tracking information on a map.
- [RadarBox](https://www.radarbox.com)[^1] - Tampa-based global flight-tracking and data-services company covering commercial and general aviation worldwide.
- [ADS-B Exchange](https://www.adsbexchange.com/) - Flight-tracking company founded by volunteers and aviation enthusiasts. The upstream description characterises its service as high-fidelity, stable, and secure, and describes its acquisition by [JETNET](https://www.jetnet.com/) as recent at the time of writing.
- [PlaneFinder.net](https://planefinder.net)[^1] - UK-based real-time tracker showing worldwide flight numbers, aircraft speed, altitude, and destinations.
- [AvDelphi](https://www.avdelphi.com) - Aviation data and services covering airframes, registrations, aircraft types, airports and flights, radar and navigation points, and owner and flight histories.
- [RadarVirtuel](https://www.radarvirtuel.com) - Flight-data collector offering premium features, focused on traffic around smaller airports worldwide.

[^1]: The upstream list identifies these services as following the [FAA](https://www.faa.gov/)'s [Aircraft Tail Number Blocking/Unblocking list](https://www.faa.gov/pilots/ladd/request). Their data is therefore filtered and may omit data available from other aggregators.

### Other

- [Airframes.io](https://app.airframes.io/) - Aircraft-data aggregator receiving ACARS, VDL, HFDL, and SATCOM data from volunteers worldwide. It works closely with ADS-B aggregators and uses ADS-B data internally.
- [gcmb.io](https://gcmb.io/adsb/adsb) - ADS-B data from ADSBHub.org published through MQTT.

## Software

### General

- [readsb](https://github.com/wiedehopf/readsb) - Versatile ADS-B decoder.
- [dump1090](https://github.com/MalcolmRobb/dump1090) - Simple Mode S decoder for RTLSDR devices.
- [flightmon](https://github.com/mik3y/flightmon) - Command-line interface displaying current dump1090/readsb data.
- [sdr-enthusiasts/plane-alert-db](https://github.com/sdr-enthusiasts/plane-alert-db) - Aircraft list covering governments, dictators, military aircraft, historical aircraft, and unusual aircraft.
- [junzis/pyModeS](https://github.com/junzis/pyModeS) - Python decoder for Mode S and ADS-B signals.
- [adsb_actions](https://github.com/eastham/adsb_actions) - Python tool to detect, respond to, and visualise ADS-B traffic and events.

### Feeding

- [sdr-enthusiasts/docker-adsb-ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) - ADS-B container combining readsb, tar1090, graphs1090, autogain, multi-feeder, and mlat-hub.
- [adsbfi/adsb-fi-scripts](https://github.com/adsbfi/adsb-fi-scripts) - Feeder installation script for sending data to adsb.fi.
- [adsblol/feed](https://github.com/adsblol/feed) - Container-based multi-feed client for MLAT, ADS-B, ACARS, and VDL2, using [SDR-Enthusiasts](https://github.com/sdr-enthusiasts) images.
- [adsb.im](https://adsb.im/home) - ADS-B feeder images for receiving and sharing aircraft position reports on single-board computers such as Raspberry Pi, without requiring command-line or terminal skills. Supports sharing with both open-source and commercial flight-tracking sites.

### Visualisation

- [wiedehopf/tar1090](https://github.com/wiedehopf/tar1090) - Viewer for ADS-B data.
- [amnesica/BelugaProject](https://github.com/amnesica/BelugaProject) - Browser-based map displaying data from one or more local ADS-B feeders, AIS data, and additional information.
- [Grafana](https://grafana.com/) - Open-source analytics and monitoring solution described by the upstream list as supporting every database.

### Apps

- [d4rken/adsb-meta-tracker](https://github.com/d4rken/adsb-meta-tracker) - Android app displaying metadata about ADS-B aggregators.
- [AirPing](https://airping.app) - iOS app that turns a tar1090 or readsb instance into a mobile flight tracker.

### Notifications and Social Sharing<a id="social"></a>

- [docker-planefence](https://github.com/kx1t/docker-planefence) - Tool to log, display, and tweet about aircraft entering the range of your receiver (the “fence”).
- [Jxck-S/plane-notify](https://github.com/Jxck-S/plane-notify) - Takeoff and landing notifications for a selected aircraft, using OpenSky or ADS-B Exchange data.

## ADS-B Derived Data

- [aircraft-flight-schedules](https://github.com/MrAirspace/aircraft-flight-schedules) - Open-source datasets of high-level flight schedules extracted from aircraft ADS-B position broadcasts worldwide, from 2024 onward. Covers all flights worldwide within the reception range of the [ADSBlol](https://adsb.lol/) initiative.

## Hardware

### Single-board Computers<a id="sbc"></a>

- [Raspberry Pi](https://www.raspberrypi.org/) - Small single-board computers developed in the UK.
- [Orange Pi](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-5.html) - Single-board computers built with cost-effective, open-source hardware.
- [Banana Pi](https://banana-pi.org/) - Single-board computers created by a Chinese open-source hardware community.

### Receivers

- [FlightAware ADS-B USB receivers](https://flightaware.store/collections/radio-dongles) - ADS-B USB receivers made by FlightAware.
- [AirNav RadarBox ADS-B USB receivers](https://www.radarbox.com/store) - ADS-B USB receivers made by RadarBox.
- [RTL-SDR DONGLES](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) - RTL-SDR dongle provider focused on fair retail pricing, described as premium by the upstream list.

### Filters

Warning: Some ADS-B USB receivers already have an onboard filter.

- [FlightAware Signal filters](https://flightaware.store/collections/signal-filters) - Signal filters made by FlightAware.

### Antennas

- [Vinnant antennas](https://vinnant.sk/) - Specialised antennas made in Slovakia, described as premium by the upstream list.
- [DPD antennas](https://dpdproductions.com/) - Antennas made in the USA for various radio services, described as high-quality by the upstream list.
