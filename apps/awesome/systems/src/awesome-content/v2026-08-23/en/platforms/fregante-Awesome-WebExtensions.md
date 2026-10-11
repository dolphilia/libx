---
title: "Awesome WebExtensions"
description: "Documentation, libraries, tools, testing and examples for cross-browser WebExtensions development."
licenseSource: "github-fregante-Awesome-WebExtensions-readme-md"
---

# Awesome WebExtensions

WebExtensions is a cross-browser system for developing browser add-ons. This list covers documentation, communities, libraries, development tools, testing, starter templates and sample extensions. The fixed source describes broad compatibility with Chrome’s extension API, with Chrome extensions usually running in Firefox after [a few changes](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension).

## Getting started

- [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions/reference) - Documentation for the original Chrome extension model.
- [Mozilla's WebExtensions documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) - MDN wiki for the WebExtensions API.
- [Browser support for WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) - Compatibility table for Chrome, Edge, Firefox, and Opera.
- [Safari Extensions documentation](https://developer.apple.com/safari/extensions/) - The fixed source describes these as developer docs for Safari extensions with an API completely different from WebExtensions.
- [Opera API support](https://dev.opera.com/extensions/apis/) - Detailed WebExtensions support for Opera.
- [Browser Extension Standard](https://browserext.github.io/browserext/) - API standard described in the fixed source as supported by Mozilla, Opera and Microsoft.

## Community

- [Google Groups](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions) - Discussions.
- [Mozilla Discourse](https://discourse.mozilla.org/c/add-ons) - Discussions.
- [`#addons:mozilla.org`](https://matrix.to/#/#addons:mozilla.org) - Matrix channel by Mozilla.
- [`google-chrome-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/google-chrome-extension) - Relevant questions.
- [`firefox-addon-webextensions` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/firefox-addon-webextensions) - Relevant questions.
- [`microsoft-edge-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) - Relevant questions.

## Libraries and Frameworks

Code intended to become part of an extension.

- [webext-options-sync](https://github.com/fregante/webext-options-sync) - Helps you manage and autosave your extension's options.
- [webext-storage-cache](https://github.com/fregante/webext-storage-cache) - Map-like, Promise-based cache storage with expiration.
- [webext-dynamic-content-scripts](https://github.com/fregante/webext-dynamic-content-scripts) - Automatically inject your `content_scripts` on custom domains.
- [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill) - Polyfill for the standardized Promise-based API in the `browser` namespace.
- [@types/firefox-webext-browser](https://www.npmjs.com/package/@types/firefox-webext-browser) - Supplies TypeScript types for the `browser` namespace.
- [redux-webext](https://github.com/ivantsov/redux-webext) - Uses Redux for managing the state of your WebExtension.
- [ExtPay](https://github.com/Glench/ExtPay) - Accept payments in extensions without running a server backend.
- [inject-react-anywhere](https://github.com/OlegWock/inject-react-anywhere) - Inject React components into third-party sites with an API and style isolation.
- [More…](https://github.com/fregante/webext-fun)

## Tools

Applications for managing extensions.

- [Chrome Webstore Upload](https://github.com/fregante/chrome-webstore-upload-cli) - Upload an extension to the Chrome Web Store through the CLI, or automatically through GitHub Actions.
- [mozilla/web-ext](https://github.com/mozilla/web-ext) - Command line tool to help build, run, and test WebExtensions.
- [chromepet](https://github.com/ZenHubIO/chromepet) - Get notified when your new version has been published.
- [chrome-ext-downloader](https://github.com/jiripospisil/chrome-ext-downloader) - Download any extension on Chrome Web Store to see how they do it.
- [chrome-store-api](https://github.com/acvetkov/chrome-store-api) - Chrome Web Store API wrapper.
- [Chrome extension source viewer](https://github.com/Rob--W/crxviewer) - WebExtension to view source code of extensions directly on the store.
- [@wext/shipit](https://github.com/LinusU/wext-shipit) - Tool to automatically publish to Chrome Web Store, Mozilla Addons and Opera Addons.
- [wext-manifest-loader](https://github.com/abhijithvijayan/wext-manifest-loader) - Webpack loader for including `manifest.json` properties only for specific browsers.
- [webextension-manifest-loader](https://github.com/jsmnbom/webextension-manifest-loader) - Webpack loader for browser-tailored manifest.json files. Imports all importable properties so manifest.json can be the only Webpack entry point.
- [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) - A Webpack plugin to automatically reload browser extensions during development.
- [webpack-target-webextension](https://github.com/awesome-webextension/webpack-target-webextension) - Adds code-splitting support to WebExtensions build with Webpack.
- [Extension.js](https://github.com/cezaraugusto/extension.js) - Plug-and-play, zero-config, cross-browser extension development tool.

## Testing

- [sinon-chrome](https://github.com/acvetkov/sinon-chrome) - Mocks the Chrome Extensions API for testing.
- [addons-linter](https://github.com/mozilla/addons-linter) - Validate an extension against Mozilla's guidelines.
- [webextensions-jsdom](https://github.com/stoically/webextensions-jsdom) - Load popup, sidebar and background with JSDOM based on the manifest.json.
- [webextensions-api-fake](https://github.com/stoically/webextensions-api-fake) - In-memory WebExtensions API Fake Implementation (includes TypeScript types).
- [webextensions-api-mock](https://github.com/stoically/webextensions-api-mock) - WebExtensions API as sinon stubs (includes TypeScript types).
- [webextensions-schema](https://github.com/stoically/webextensions-schema) - Programmatically consume the WebExtensions Schema JSON files.

## Boilerplates

- [browser-extension-template](https://github.com/fregante/browser-extension-template) - Barebones boilerplate with parcel, options handler and auto-publishing.
- [create-webextension](https://github.com/rpl/create-webextension) - Yarn WebExtension generator.
- [generator-web-extension](https://github.com/webextension-toolbox/generator-web-extension) - WebExtension generator that creates everything you need to get started with cross-browser web-extension development.
- [WXT](https://github.com/wxt-dev/wxt) - Framework for developing web extensions.

## Sample Extensions

Repositories for exploring extension structure, including automatic deployment through GitHub Actions.

- [npmhub](https://github.com/npmhub/npmhub)
- [Hide Files on GitHub](https://github.com/sindresorhus/hide-files-on-github)
- [mdn/webextension-examples](https://github.com/mdn/webextensions-examples) - Various example extensions curated for the MDN documentation.
