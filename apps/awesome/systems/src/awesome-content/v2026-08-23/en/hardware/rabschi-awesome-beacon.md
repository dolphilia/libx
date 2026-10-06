---
title: "Awesome Bluetooth Beacon"
description: "iBeacon and Eddystone specifications, platform libraries, scanner and advertising apps, deployment guides, and Bluetooth beacon developer kits."
licenseSource: "github-rabschi-awesome-beacon-readme-md"
---

# Awesome Bluetooth Beacon

Resources for developing and using iBeacon and Eddystone Bluetooth beacons, including protocol specifications, platform libraries, scanner and advertising apps, deployment guides, and developer kits. The list also covers Physical Web, BLE and Web Bluetooth tools, and proximity standards. Descriptions and platform versions follow the recorded source list.

## Eddystone by Google

Eddystone is described in the source list as a platform for adding information to the physical world, enabling apps and devices to provide timely, contextual information.

* [Google Developers Beacons Portal](https://developers.google.com/beacons/)
* [Eddystone Protocol Specification & Tools](https://github.com/google/eddystone)
* Advertising frame types
  * [Eddystone-UID](https://github.com/google/eddystone/tree/master/eddystone-uid)
  * [Eddystone-TLM](https://github.com/google/eddystone/tree/master/eddystone-tlm)
  * [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url)
* [Eddystone Validator](https://github.com/google/eddystone/tree/master/tools/eddystone-validator)
* [Eddystone GATT Configuration Service & Google Nearby API and Proximity API](https://github.com/NordicSemiconductor/Android-nRF-Beacon-for-Eddystone) - By Nordic Semiconductor.
* [Web Bluetooth Eddystone Configurator](https://beaufortfrancois.github.io/sandbox/web-bluetooth/eddystone-url-config/)
* [Eddystone Branding Guidelines](https://github.com/google/eddystone/tree/master/branding) & [Logos](https://github.com/google/eddystone/tree/master/branding/assets)

## Physical Web

Physical Web aims to let people interact with smart devices on demand without first downloading an app. The source list gives vending machines, posters, toys, bus stops, and rental cars as examples, with access just a tap away.

* [Physical Web - Walk up and use anything](http://google.github.io/physical-web/) - Official GitHub repository.
* [Video: Introduction to the Physical Web](https://www.youtube.com/watch?v=w0XazPrh7r0) - Ubiquity Dev Summit 2016
* [URL Validator 1](https://beaufortfrancois.github.io/sandbox/physical-web/url-validator/), [URL Validator 2](https://url-caster.appspot.com/webui)
* [Physical Web Getting Started Guide for Developers](https://docs.google.com/document/d/1VC9umaw9TItV31WrcX0eJ9xVsfXXQoWvUjuSqWXmH8A)
* [Physical Web Implementation Status](https://github.com/google/physical-web/blob/master/implementation-status.md)
* [Physical Web Branding Guidelines](https://github.com/google/physical-web/blob/master/documentation/branding_guidelines.md) & [Logos](https://github.com/google/physical-web/tree/master/documentation/images/logo)
* [IEEE: Enabling the Internet of Things](https://web.eecs.umich.edu/~prabal/teaching/resources/eecs582/want15iot.pdf) by R. Want, B. Schilit, S. Jenson
* [Exploring the Physical Web (Without Buying Beacons)](https://medium.com/@urish/exploring-the-physical-web-without-buying-beacons-efae51e36c2e)

## Proximity Beacon API by Google

* [Beacons 101-- Getting Started with the Google Beacon Platform](https://www.youtube.com/watch?v=0QeY9FueMow) - Video Ubiquity Dev Summit 2016
* [Get Started with Beacons](https://developers.google.com/beacons/get-started) - Steps for using Bluetooth Low Energy (BLE) beacons to provide proximity-based experiences.
* [Proximity Beacon API](https://developers.google.com/beacons/proximity/guides) - Cloud service for managing data associated with BLE beacons through a REST interface.
* [Nearby](https://developers.google.com/nearby/) - Tools for building simple interactions between nearby devices and people.

## iBeacon Resources by Apple

Apple’s iBeacon developer resources describe location-aware interactions between iOS devices and iBeacon hardware, from welcoming visitors to sporting events to providing information about nearby museum exhibits.

* [iBeacon for Developers](https://developer.apple.com/ibeacon)
* [Getting Started with iBeacon (PDF)](https://developer.apple.com/ibeacon/Getting-Started-with-iBeacon.pdf)
* [iBeacon Artwork and Specifications](https://developer.apple.com/ibeacon/)
* [iOS: Understanding iBeacon device compatibility](https://support.apple.com/en-us/HT202880)
* [iOS 7: Understanding Location Services](https://support.apple.com/en-us/HT201357)
* [Apple AirLocate Sample Code](https://developer.apple.com/library/ios/samplecode/AirLocate/Introduction/Intro.html) ([iOS 8 fix](http://stackoverflow.com/questions/26079530/apple-airlocation-demo-app-ranging-not-shows-beacons))

## iBeacon for Developers

* [Building Applications with iBeacon](http://shop.oreilly.com/product/0636920033813.do)
* [Cisco iBeacon FAQ](http://www.cisco.com/c/dam/en/us/solutions/collateral/enterprise-networks/connected-mobile-experiences/ibeacon_faq.pdf)
* [5 Minute Overview - What is iBeacon? by ThoughtWorks](https://www.thoughtworks.com/insights/blog/what-is-ibeacon-in-5-minutes)
* [A Semi-Technical Lowdown on Working with iBeacons](https://www.thoughtworks.com/insights/blog/semi-technical-lowdown-working-ibeacons)
* [CapTech Webinar: iBeacon Demystified](https://www.youtube.com/watch?v=0IGeQqEGhx4)
* [5 fundamental misconceptions about Beacon technology by RadiusNetworks](http://developer.radiusnetworks.com/2014/01/10/ibeacon-misconceptions.html)
* [Ask a Dev: What Are the Limitations of Beacons?](http://mashable.com/2014/05/09/beacons-limitations/)
* [What's the Difference Between Beacons and Geofencing?](http://mashable.com/2014/02/24/beacons-geofencing-location/)
* [Guide to iBeacon Hardware by beekn.net](http://beekn.net/guide-to-ibeacons/)
* [Developing an iBeacon App by beekn.net](http://beekn.net/developing-ibeacon-app/)

## Applications and Projects <a id="hacks--cool-apps"></a>

* [Empowering vision impaired people to navigate the world independently](https://www.wayfindr.net) - An open standard.
* [Google Glass & Beacons](https://github.com/tmwagency/Glasstimote)
* [10 awesome things you can do today with iBeacons](http://blog.twocanoes.com/post/68861362715/10-awesome-things-you-can-do-today-with-ibeacons) - By Twocanoes.
* [PunchClock](https://github.com/panicinc/PunchClock) - In/out tracking app for iOS 7+ using iBeacon and geofencing.
* [The Geofancy iOS app](https://github.com/LocativeHQ/ios-app) - App for home automation using geofencing and iBeacons.
* [LaunchHere for iOS - iBeacon based app shortcuts](http://launchhere.awwapps.com/)
* [Traveling with Beacons: Checked Luggage Made Easy](https://medium.com/@urish/traveling-with-beacons-checked-luggage-made-easy-bbd664765ea3)

### Installation & Radio Planning

* Brooklyn Museum: [Positioning Visitors with iBeacons](https://www.brooklynmuseum.org/community/blogosphere/2014/10/14/positioning-visitors-with-ibeacons/) & [Getting Visibility on the iBeacon Problem](https://www.brooklynmuseum.org/community/blogosphere/2016/02/23/getting-visibility-on-the-ibeacon-problem/)

### Beacon Discovery & Configuration Tools

* [ScanBeacon](https://github.com/RadiusNetworks/scanbeacon-gem) - Ruby gem for scanning beacon advertisements using IOBluetooth on Mac OS X or a BlueGiga BLE112 device on Mac or Linux.

## iOS

### Beacon Scanner Apps

* [Locate Beacon by RadiusNetworks](https://itunes.apple.com/us/app/locate-for-ibeacon/id738709014?mt=8)

### Swift

* [iOS Eddystone Scanner Sample Application](https://github.com/google/eddystone/tree/master/tools/ios-eddystone-scanner-sample)
* [Swift based iBeacon App Development with CoreLocation on Apple iOS 7/8](http://ibeaconmodules.us/blogs/news/14702963-getting-started-developing-ibeacon-apps-with-swift-on-apple-ios-7-8)
* [Udemy: iBeacon development for iPhone](https://www.udemy.com/ibeacon-development-for-iphone/)
* [HiBeacons](https://github.com/nicktoumpelis/HiBeacons) - iBeacon demo app written in Swift.
* [PubNub.com - Two-Way iBeacon Communication with Swift Programming Language](https://www.pubnub.com/blog/2014-08-19-smart-ibeacon-communication-in-the-swift-programming-language/)
* [iOS & OSX Bluetooth library for RxSwift](https://github.com/Polidea/RxBluetoothKit)
* [JMCiBeaconManager](https://github.com/izotx/JMCBeaconManager) - iBeacon manager class for detecting nearby beacons.
* [BeaconKit](https://github.com/igor-makarov/BeaconKit) - Beacon detection framework using CoreBluetooth, supporting Eddystone-UID, Eddystone-URL, and AltBeacon.

### Objective-C

* [Generic iBeacon Management and Utilities by KinveyLabs](https://github.com/KinveyLabs/KCSIBeacon/)
* [Replicates detecting and broadcasting iBeacons in the background](https://github.com/Instrument/Vicinity)
* [RABeaconManager](https://github.com/reelyactive/ble-ios-sdk) - Library for detecting Bluetooth beacons and iBeacons in the foreground and background.

### Stack Overflow Questions <a id="stackoverflow-qa"></a>

* [iBeacon detection time in background](http://stackoverflow.com/questions/25495804/ibeacon-detection-time-in-background-home-automation-use-case/25496669#25496669)
* [iBeacon region monitoring AND proximity for >20 beacons?](http://stackoverflow.com/questions/25387660/ibeacon-region-monitoring-and-proximity-for-20-beacons)
* [How to make iBeacon foreground ranging for CLProximityImmediate faster in iOS?](http://stackoverflow.com/questions/23991733/how-to-make-ibeacon-foreground-ranging-for-clproximityimmediate-faster-in-ios/23992584#23992584)
* [Can we start iBeacon transmitter in background?](http://stackoverflow.com/questions/24164523/can-we-start-ibeacon-transmitter-in-background/24165073#24165073)
* [How does iBeacon wake up our app?](http://stackoverflow.com/questions/24590534/how-does-ibeacon-wake-up-our-app-for-how-long-and-how-to-extend-that-time/24590886#24590886)
* [Use Core Bluetooth instead of iBeacon - Any Downsides?](http://stackoverflow.com/questions/24267421/use-core-bluetooth-instead-of-ibeacon-any-downsides/24268389#24268389)

## Virtual Beacons

* [Beacon Toy - Android App to advertise as Eddystone](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator)
* [Android BLE advertising library](https://github.com/uriio/beacons-android)
* [Locate by Radius Networks - Virtual iBeacon](https://itunes.apple.com/us/app/locate-beacon/id738709014?mt=8)
* [Chrome App to advertise Eddystone packets](https://github.com/google/eddystone/tree/master/tools/eddystone-chrome-app-sample) - uses [Eddystone Advertising Library](https://github.com/google/eddystone/tree/master/libraries/javascript/eddystone-advertising)
* [Linux iBeacon broadcaster](https://github.com/dburr/linux-ibeacon)
* [Quick Beacon](https://itunes.apple.com/us/app/quick-beacon/id1303172948?mt=8)

## Android

### Beacon Development

* [Android Lollipop Bluetooth Low Energy Enhancements](https://developer.android.com/about/versions/android-5.0.html) - OS-level scan filters and peripheral mode.
* [iBeacon Scanner for Android](https://github.com/inthepocket/ibeacon-scanner-android), [Docs](https://github.com/inthepocket/ibeacon-scanner-android/wiki) & [Blog post](http://developer.inthepocket.mobi/2016/11/24/ibeacon-scanner-android/)
* [Android beacon library based on AltBeacon](https://github.com/AltBeacon/android-beacon-library) - Uses a custom beacon parser for compatibility with iBeacon devices.
* [BeaconKeeper](https://github.com/m039/beacon-keeper) - Library for locating iBeacons in the background.
* [Android & BLE](https://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
* [DevBytes: Bluetooth Low Energy API in Android 4.3](https://www.youtube.com/watch?v=vUbFB1Qypg8)
* [BLE SDK for Android](https://github.com/RedBearLab/Android)
* [Bluetooth LE Library for Android](https://github.com/alt236/Bluetooth-LE-Library---Android)
* [reelyactive-ble-android-sdk](https://github.com/reelyactive/ble-android-sdk) - SDK for scanning beacons and advertising as a beacon.

### Beacon Scanner Apps

* [iBeacon Scanner](https://play.google.com/store/apps/details?id=be.createweb.beaconscanner) & [code](https://github.com/eliaslecomte/ibeacon-scanner-app)
* [Beacon Scanner & Logger](https://github.com/justinodwyer/Beacon-Scanner-and-Logger) - Android app that scans BLE beacons and iBeacons and logs results to a file.
* [iBeacon Detector](https://play.google.com/store/apps/details?id=youten.redo.ble.ibeacondetector&hl=de)
* [Bluetooth 4.0 Scanner](https://play.google.com/store/apps/details?id=com.bluemotionlabs.bluescan&hl=de)

### Beacon Advertiser Apps

* [Beacon Simulator](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator) - iBeacon, Eddystone, AltBeacon

### Stack Overflow Questions <a id="stackoverflow-qa-1"></a>

* [BLE Distancing](http://stackoverflow.com/questions/20416218/understanding-ibeacon-distancing/20434019#20434019)

## Cordova, PhoneGap, Xamarin, Titanium

* [Cordova iBeacon Plugin](https://github.com/petermetz/cordova-plugin-ibeacon)
* [Using iBeacon with Xamarin.iOS and Xamarin.Android](http://de.slideshare.net/glennthomasstephens/ibeacon-support)
* [iBeacon advertising and scanning in a Titanium module](https://github.com/jbeuckm/TiBeacons)

## OS X

* [iBeacon Scanning Utility App for OSX](https://github.com/mlwelles/BeaconScanner)
* [iBeacon Scanner - Scan for nearby iBeacons regardless of their UUID](https://github.com/liamnichols/iBeaconScanner)
* [Beacon OSX](https://github.com/mttrb/BeaconOSX) - Uses Mavericks as an iBeacon.
* [Electron Physical Web Scan](https://github.com/dermike/electron-physical-web-scan) - Mac OS X desktop app for scanning Physical Web (Eddystone) Bluetooth beacons.
* [Electron Slide Beacon](https://github.com/dermike/electron-slide-beacon) - Shares links from a Mac by broadcasting them as Eddystone URL (Physical Web) Bluetooth beacons.
* [BeaconKit](https://github.com/igor-makarov/BeaconKit) - Beacon detection framework written in Swift using CoreBluetooth, supporting Eddystone-UID, Eddystone-URL, AltBeacon, and iBeacon.

## Linux

* [Python script for scanning and advertising urls over Eddystone-URL](https://github.com/forksociety/PyBeacon)

## Node.js

* [Node-RED nodes to interact with the Physical Web](http://flows.nodered.org/node/node-red-node-physical-web)
* [A node.js BLE (Bluetooth low energy) central module](https://github.com/sandeepmistry/noble)
* [A node.js module for implementing BLE (Bluetooth low energy) peripherals](https://github.com/sandeepmistry/bleno)

## Windows

* [Universal Bluetooth Beacon Library](https://github.com/andijakl/universal-beacon) - Open-source library and links to apps for communicating with Eddystone and iBeacon beacons.

## Bluetooth Low Energy

* [Official Bluetooth Smart Portal](https://www.bluetooth.com/what-is-bluetooth-technology/bluetooth-technology-basics/low-energy)

### Bluetooth Smart & BLE Tools

* [nRF Master Control Panel (BLE)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) - General-purpose tool for scanning and exploring Bluetooth Smart (BLE) devices and communicating with them.
* [LightBlue Mac OSX](https://itunes.apple.com/de/app/lightblue/id639944780?mt=12) ([or iOS](https://itunes.apple.com/us/app/lightblue-bluetooth-low-energy/id557428110?mt=8)) - Tests all devices using Bluetooth 4.0 Low Energy, also known as Bluetooth Smart or Bluetooth Light.
* [BlueSpeed for iOS by Punch Through](https://itunes.apple.com/us/app/bluespeed/id579118786?mt=8) - Tests Bluetooth LE speed between two iOS devices.

### Web Bluetooth API

* [Web Bluetooth Intro](https://dev.opera.com/articles/web-bluetooth-intro/) - By Opera.
* [Web Bluetooth Demos](https://github.com/WebBluetoothCG/demos)

## Beacon Developer Kits & BLE Chips

* [Texas Instruments - BLE Portal](http://www.ti.com/ble)
* [Texas Instruments - SensorTag DeveloperKit](http://makezine.com/2014/04/16/the-ti-sensortag-now-with-added-ibeacon/)
* [TI SensorTag Android Sources](http://git.ti.com/sensortag-android)
* [Broadcom - WICED™ Sense Development Kit](http://www.broadcom.com/application/internet_of_things.php)
* [Dialog Semiconductor](http://www.dialog-semiconductor.com/bluetooth-smart)
* [EMMicroelectronics](http://www.emmicroelectronic.com/products/wireless-rf/beacons/embc01)

## Proximity Trends & Outlook

* [Wired](http://www.wired.com/2013/12/4-use-cases-for-ibeacon-the-most-exciting-tech-you-havent-heard-of/) - “4 Reasons Why Apple’s iBeacon Is About to Disrupt Interaction Design.”
* [Wi-Fi Aware™](http://www.wi-fi.org/discover-wi-fi/wi-fi-aware) - Described in the source list as a new Wi-Fi Alliance certification program extending Wi-Fi with real-time, energy-efficient discovery for immediate, context-aware experiences.

## Vendor-driven Beacon Standardization

* [BeaconCtrl](https://github.com/upnext/BeaconCtrl) - Open-source platform for setting up and managing large beacon deployments.
* [The Open and Interoperable Proximity Beacon Specification](http://altbeacon.org/)
