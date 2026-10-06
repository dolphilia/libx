---
title: "Awesome Progressive Web Apps"
description: "Learning resources, case studies, sample apps, and technologies for building progressive web apps, including offline storage, installation, sharing, and performance."
licenseSource: "github-TalAter-awesome-progressive-web-apps-readme-md"
toc:
  maxLevel: 4
---

# Awesome Progressive Web Apps

As described in [Building Progressive Web Apps](https://pwabook.com/oreillyapwa), progressive web apps combine native-app benefits with the low friction of the web, starting as websites and gaining app-like capabilities as users interact with them. This list covers learning resources, browser support, case studies, sample apps, service workers, offline storage, notifications, installation, sharing, and web performance.

## Must Reads

- [Building Progressive Web Apps - O'Reilly Media](https://pwabook.com/oreillyapwa) - A book covering in depth progressive web apps, service workers, push notifications, background sync, IndexedDB, offline-first development, and related topics.
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - A free Udacity course introducing the basic concepts of building a progressive web app.

## Learning Resources

- [Google Developers - Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en) - A step-by-step guide to building a progressive web app using the app shell pattern.
- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers) - Resources for learning service workers.
- [Service Workers W3C Specification](https://www.w3.org/TR/service-workers/) - The official W3C service workers specification.

## Browser Support

- [Can I Use - Service Workers](http://caniuse.com/#feat=serviceworkers) - A browser support table for the ServiceWorker API, described as up to date in the recorded source.
- [Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - A comparison of ServiceWorker support across browsers at the time of the recorded list.

## Videos

- [Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://youtu.be/cmGr0RszHc8) - An overview of common technologies and techniques for building offline-first progressive web apps.
- [Intro To Progressive Web Apps](https://www.udacity.com/course/intro-to-progressive-web-apps--ud811) - A free Udacity course by Google introducing PWAs, service workers, and web app manifests.
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - A free Udacity course for studying service workers in depth.
- [Progressive Web Apps (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=MyQ8mtR9WxI) - An introduction to progressive web apps by Alex Russell and Andreas Bovens.
- [Polymer and Progressive Web Apps: Building on the modern web - Google I/O 2016](https://www.youtube.com/watch?v=fFF2Yup2dMM) - Using Polymer to build progressive web apps.

## Case Studies

- [Building the Google I/O 2016 Progressive Web App](https://developers.google.com/web/showcase/2016/iowa2016) - Building and launching the Google I/O 2016 progressive web app with web components, Polymer, and Material Design.
- [AliExpress Case Study](https://developers.google.com/web/showcase/2016/aliexpress) - A case study reporting a 104% increase in conversion rate for new AliExpress users with progressive web apps.
- [eXtra Electronics Case Study](https://developers.google.com/web/showcase/2016/extra) - A case study reporting a 100% increase in United eXtra Electronics eCommerce sales with web push notifications.
- [Jumia Case Study](https://developers.google.com/web/showcase/2016/jumia) - A case study reporting that push notifications reduced Jumia cart abandonment and increased conversions by 9X.
- [Konga Case Study](https://developers.google.com/web/showcase/2016/konga) - A case study reporting that Konga reduced data usage by 92% with a progressive web app.
- [Suumo Case Study](https://developers.google.com/web/showcase/2016/suumo) - A case study describing Suumo as a leading Japanese real estate site, using web push notifications to promote new listings and reporting a 31% notification open rate.

## Sample Progressive Web Apps

- [PWA.rocks](https://pwa.rocks/) - A showcase of progressive web apps collected by the [Opera Dev Relations team](https://twitter.com/ODevRel).
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Guitar Tuner](https://aerotwist.com/blog/guitar-tuner/)
- [Voice Memos](https://voice-memos.appspot.com/)
- [Hacker News](https://react-hn.appspot.com/)

## Specific Technologies

### Service Workers

- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers/) - A collection of service worker resources.

### CacheStorage API

- [Offline Storage for Progressive Web Apps](https://medium.com/@addyosmani/offline-storage-for-progressive-web-apps-70d52695513c) - A survey of browser offline storage at the time of the article.
- [CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) - API documentation and sample code from Mozilla.

### Background Sync

- [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync) - An introduction to background sync, with videos and code samples.
- [Background Sync Explained](https://github.com/WICG/BackgroundSync/blob/master/explainer.md) - The official background sync explainer, covering one-off and periodic synchronization.
- [Background Sync Spec](https://wicg.github.io/BackgroundSync/spec/) - The Background Sync specification, described as a work in progress in the recorded list.

### Push Notifications

- [Can I Use - Push API](http://caniuse.com/#feat=push-api) - A browser support table for the Push API, described as up to date in the recorded source.
- [Chrome Platform Status - Web Notifications](https://www.chromestatus.com/feature/5480344312610816) - Implementation status for Chrome and other browsers.
- [PWA Dev Summit 2016 codelab - Push Notifications](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en) - A getting-started tutorial covering progressive web apps, push notifications, and service worker basics, described as up to date in the recorded source.
- [Using the Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Using_the_Push_API) - An introduction to the Push API.
- [web-push-libs](https://github.com/web-push-libs) - Web push libraries for technologies including Node.js, PHP, and Python.

### IndexedDB

- [IndexedDB API](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API) - API documentation, key concepts, and sample code from Mozilla.

### Installable Web Apps

- [Increasing Engagement with Web App Install Banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en) - An introduction to app install banners and how to ensure Chrome offers a web app to users.
- [Installable Web Apps with the Web App Manifest in Chrome for Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) - An introduction to installable web apps in Chrome for Android using the Web App Manifest.

#### App Icons

- [RealFaviconGenerator](http://realfavicongenerator.net/) - Generates the images, favicons, and associated files needed to display an app icon across browsers.
- [Android Asset Studio - Launcher Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html) - Generates Android-style icons.

### Web Share APIs

- [Introducing the Web Share API](https://developers.google.com/web/updates/2016/10/navigator-share) - An overview of the Web Share API.
- [Web Share API explainer](https://github.com/WICG/web-share/blob/master/docs/explainer.md) - An explanation of the API with examples, included in the proposal documentation.
- [Web Share Target API](https://github.com/WICG/web-share-target) - The Web Share Target API proposal and an introductory [explainer](https://github.com/WICG/web-share-target/blob/master/docs/explainer.md).

## Awesome Performance

- [Web Fundamentals - Performance](https://developers.google.com/web/fundamentals/performance/) - Google’s learning portal on optimizing web app performance.
- [Introducing RAIL: A User-Centric Model For Performance](https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/) - An introduction to the user-centered RAIL performance model by the Gang of Pauls.
- [Website Performance Optimization](https://udacity.com/ud884) - A free Udacity course on optimizing website speed.
- [Browser Rendering Optimization](https://udacity.com/ud860) - A free Udacity course on building web apps that maintain smooth, jank-free 60fps performance.
- [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) - A pattern for structuring and serving progressive web apps with an emphasis on performance, presented as new in the recorded source.
- [Browser Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/) - How browsers process HTML, JavaScript, and CSS, and how to optimize pages accordingly.
