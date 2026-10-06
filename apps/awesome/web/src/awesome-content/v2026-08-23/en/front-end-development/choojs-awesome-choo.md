---
title: "Awesome choo"
description: "Choo documentation, dependencies, demos, plugins, elements, CLI templates, learning resources, and projects."
licenseSource: "github-choojs-awesome-choo-readme-md"
---

# Awesome choo<a id="awesome-choo-steam-locomotive"></a>

The fixed source describes [choo](https://choo.io/) as a `4kb` framework for building sturdy frontend applications. Find official resources, dependencies, demos, community links, plugins, elements, CLI templates, tutorials, videos, articles, and projects using choo.

## Official resources

- [Docs](https://github.com/yoshuawuyts/choo/blob/master/README.md)
- [Handbook](https://github.com/yoshuawuyts/choo-handbook)
- [Repo](https://github.com/yoshuawuyts/choo)
- [Website](https://choo.io/)
- [Twitter thread](https://twitter.com/yoshuawuyts/status/730087077803528193)

## Dependencies
`choo` is a modular framework. These are the dependencies it glues together
under the hood:

- [bel](https://github.com/shama/bel) - Create composable DOM elements using
  template strings.
- [hyperx](https://github.com/substack/hyperx) - Convert template strings to
  library backends.
- [nanomorph](https://github.com/choojs/nanomorph) - Fast diffing algorithm for real DOM nodes, as described by the source.
- [nanoraf](https://github.com/yoshuawuyts/nanoraf) - Only call RAF when needed.
- [nanorouter](https://github.com/choojs/nanorouter) - Small frontend router.
- [nanobus](https://github.com/choojs/nanobus) - Tiny message bus.
- [nanolocation](https://github.com/choojs/nanolocation) - Small window.location library.
- [nanohref](https://github.com/choojs/nanohref) - Tiny href click handler library.
- [nanoquery](https://github.com/choojs/nanoquery) - Tiny querystring module.
- [nanotiming](https://github.com/choojs/nanotiming) - Small timing library.

## Demos

- [Input example](http://requirebin.com/?gist=e589473373b3100a6ace29f7bbee3186) - ([repo](https://github.com/yoshuawuyts/choo/tree/master/examples/title))
- [HTTP effects](https://hyperdev.com/#!/project/fork-fang)
- [Mailbox routing](https://github.com/yoshuawuyts/choo/tree/master/examples/mailbox)
- [TodoMVC](http://shuheikagawa.com/todomvc-choo) - ([repo](https://github.com/shuhei/todomvc-choo))
- [choo-firebase](https://choo-firebase-2ec21.firebaseapp.com) - ([repo](https://github.com/mw222rs/choo-firebase))
- [Grow](https://grow.static.land) - ([repo](https://github.com/sethvincent/grow))
- [Chatbot](http://chootbot.herokuapp.com) - ([repo](https://github.com/plaey/chatbot))
- [chat-random](https://github.com/akiva/chat-random)
- [choo-leaflet-demo](https://github.com/timwis/choo-leaflet-demo)
- [choo-scriber](https://zhouhansen.github.io/choo-scriber) - ([repo](https://github.com/ZhouHansen/choo-scriber))

## Community

- [Freenode](https://webchat.freenode.net/?channels=choo)

## Plugins and addons

- [choo-location-electron](https://github.com/bcomnes/choo-location-electron) - Fix `choo`'s router in electron.
- [choo-log](https://github.com/yoshuawuyts/choo-log) - Development logger for choo.
- [choo-test](https://github.com/mantoni/choo-test) - Easy choo app unit testing.
- [choo-persist](https://github.com/yoshuawuyts/choo-persist/) - Synchronize choo state with LocalStorage.
- [choo-promise](https://github.com/rahatarmanahmed/choo-promise) - Use promises in effects and subscriptions.
- [choo-pull](https://github.com/yoshuawuyts/choo-pull) - Wrap handlers to use pull-stream in a choo plugin.
- [choo-redirect](https://github.com/yoshuawuyts/choo-redirect) - Redirect a view to another view.
- [choo-model](https://github.com/yoshuawuyts/choo-model) - Experimental state management lib for choo.
- [choo-resume](https://github.com/bengourley/choo-resume) - choo-resume + hot-rld = hot app reload in choo.
- [choo-detached](https://github.com/graforlock/choo-detached) - Use `choo` as a mountable, simple stand-alone component (no routing).
- [choo-service-worker](https://github.com/choojs/choo-service-worker) - Service worker loader for `choo`.
- [choo-websocket](https://github.com/YerkoPalma/choo-websocket) - Small wrapper around WebSocket browser API, for `choo` apps.
- [choo-store](https://github.com/ungoldman/choo-store) - Lightweight state structure for choo apps.

## Elements

- [dom-notifications](https://github.com/finnp/dom-notifications) - Atom-inspired notifications component.
- [choodown](https://github.com/trainyard/choodown) - A simple markdown component for choo.
- [choo-md-editor](https://github.com/dbtek/choo-md-editor) - Lightweight markdown editor that can be used inside Choo app or as a standalone library.
- [choo-chartist](https://github.com/rexmortus/choo-chartist) - A little component for using [Chartist](https://gionkunz.github.io/chartist-js/) with the choo framework.

## CLI Templates

Templates for [choo-cli](https://github.com/trainyard/choo-cli)

- [trainyard/template-basic](https://github.com/trainyard/template-basic)
- [haroenv/template-webpack](https://github.com/haroenv/template-webpack)
- [simonwjackson/atomic-choo](https://github.com/simonwjackson/atomic-choo) - An opinionated project seed to get started developing with electron, webpack and choo.

Other CLI templates
- [graforlock/choo-bandwagon](https://github.com/graforlock/choo-bandwagon)

## Resources
- Tutorial: [Your first choo app](https://yoshuawuyts.gitbooks.io/choo/content/02_your_first_app.html)
- Video: [TCBY community live hangout](https://www.youtube.com/watch?v=a97Mw2z1SAI)
- Article: [A better frontend experience](https://medium.com/@yoshuawuyts/a-better-frontend-experience-7b0498c85658)
- Article: [Composition in CycleJS, choo, React and Angular2](http://blog.krawaller.se/posts/composition-in-cyclejs-choo-react-and-angular2)
- Article: [Stupidly smart components in choo](http://blog.krawaller.se/posts/stupidly-smart-components-in-choo)

## Projects using choo

- [boxcar](https://github.com/toddself/boxcar) - A choo-based grid/spreadsheet editor.
- [choo-sortable](https://github.com/willkessler/choo-sortable) - Building sortable code with choo.
- [hacker-choo](https://github.com/mw222rs/hacker-choo) - Hacker Typer clone written in choo.
- [footprint-rechoo](https://github.com/npeihl/footprint-rechoo) - A choo rewrite of [footprint-review](http://github.com/sjcgis/footprint-review).
- [minidocs](https://github.com/freeman-lab/minidocs) – A documentation site generator built with choo.
- [dataface](https://github.com/timwis/dataface) - Desktop application to manage databases.
- [BlankUp](https://github.com/HoverBaum/BlankUp-Electron) - Multiplatform markdown editor.
- [hackernews-choo](https://github.com/kvnneff/hackernews-choo) - A Hacker News reader built with choo.
- [tic-tac-choo](https://github.com/YerkoPalma/tic-tac-toe) - Progressive tic tac toe game, made with choo.
- [enviar](https://github.com/timwis/enviar) - Chat interface for SMS / text messages.
- [kaktus](https://github.com/kaktus/kaktus) - A minimal web browser, built on `choo` and IndexedDB.
- [civicdr.org](https://github.com/CiviCDR/civicdr.org) - Website for [CiviCDR](https://civicdr.org/).
- [nekocafe](https://github.com/notenoughneon/nekocafe) - Web chat room.
- [Robotopia](https://github.com/robotopia-x/robotopia) - Introduce children to coding with small virtual robots.
- [busca](https://github.com/afk-mcz/busca) - A small web-extension to search the current tab on reddit.
- [choo-ban](https://github.com/luizbaldi/choo-ban) - Simple kanban to manage board tasks, built with `choo`.
- [boowa](https://github.com/boowajs/boowa) - A blog generator, built with `choo`.
- [hyperamp](https://github.com/hypermodules/hyperamp) - Humble music player.
