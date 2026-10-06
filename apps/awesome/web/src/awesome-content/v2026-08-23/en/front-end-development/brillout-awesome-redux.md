---
title: "Awesome Redux"
description: "Redux libraries for state management, side effects, debugging, and framework integration, with learning resources and communities."
licenseSource: "github-brillout-awesome-redux-readme-md"
---

# Awesome Redux<a id="awesome-redux-libraries--learning-material"></a>

Redux is a state container for JavaScript apps. This list covers libraries for code architecture, state persistence, side effects, debugging, React and other integrations, and project scaffolding, alongside learning resources and communities.

## Code Architecture

Libraries intended to improve overall code structure and make it easier to reason about code.

 - [redux-schema](https://github.com/ddsol/redux-schema) - Automatic actions, reducers and validation for Redux.
 - [redux-tcomb](https://github.com/gcanti/redux-tcomb) - Immutable state and actions with type checking for Redux.
 - [redux-action-tree](https://github.com/cerebral/redux-action-tree) - The Cerebral signals running with Redux.
 - [redux-elm](https://github.com/salsita/redux-elm) - The Elm Architecture in JavaScript.

## Utilities

 - [redux-orm](https://github.com/tommikaikkonen/redux-orm) - Small, simple, immutable ORM for relational data in a Redux store.
 - [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) - Redux middleware for calling an API.
 - [redux-ignore](https://github.com/omnidan/redux-ignore) - Higher-order reducer to ignore Redux actions.
 - [redux-modifiers](https://github.com/calvinfroedge/redux-modifiers) - Collection of generic functions for writing Redux reducers to operate on various data structures.
 - [rereduce](https://github.com/slorber/rereduce) - Reducer library for Redux.
 - [redux-search](https://github.com/treasure-data/redux-search) - Redux bindings for client-side search.
 - [redux-logger](https://github.com/evgenyrodionov/redux-logger) - Logger middleware for Redux.
 - [redux-immutable](https://github.com/gajus/redux-immutable) - Creates an equivalent of Redux combineReducers for Immutable.js state.
 - [reselect](https://github.com/reactjs/reselect) - Selector library for Redux.
 - [redux-requests](https://github.com/idolize/redux-requests) - Manages in-flight requests with a Redux reducer to avoid issuing duplicate requests.
 - [redux-undo](https://github.com/omnidan/redux-undo) - Higher order reducer to add undo/redo functionality to Redux state containers.
 - [redux-bug-reporter](https://github.com/dtschust/redux-bug-reporter) - Bug reporter and bug playback tool for Redux.
 - [redux-transducers](https://github.com/acdlite/redux-transducers) - Transducer utilities for Redux.

### Store Persistence

 - [redux-storage](https://github.com/michaelcontento/redux-storage) - Persistence layer for Redux with flexible backends.
 - [redux-persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a Redux store.

### Side Effects

Libraries for side effects and asynchronous actions.

 - [redux-saga](https://github.com/yelouafi/redux-saga) - Alternative side effect model for Redux apps.
 - [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - Redux middleware for resolving and rejecting promises with conditional optimistic updates.
 - [redux-effects](https://github.com/redux-effects/redux-effects) - Handles effects while application code is written as pure functions.
 - [redux-thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for Redux.
 - [redux-connect](https://github.com/makeomatic/redux-connect) - Provides a decorator for resolving asynchronous props in react-router, intended to help with server-side rendering in React.
 - [redux-loop](https://github.com/redux-loop/redux-loop) - Port of elm-effects and the Elm Architecture to Redux that allows you to sequence your effects naturally and purely by returning them from your reducers.
 - [redux-side-effects](https://github.com/salsita/redux-side-effects) - Redux toolset for keeping all the side effects inside your reducers while maintaining their purity.
 - [redux-logic](https://github.com/jeffbski/redux-logic) - Redux middleware for organizing business logic and action side effects.
 - [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for action side effects in Redux using Epics.
 - [redux-ship](https://github.com/clarus/redux-ship) - Composable, testable and typable side effects.

## Code Style

Libraries intended to make code easier to read and write.

 - [redux-act](https://github.com/pauldijou/redux-act) - Library following a particular design approach for creating Redux actions and reducers.
 - [redux-crud](https://github.com/Versent/redux-crud) - Set of standard actions and reducers for Redux CRUD Applications.

## Dev tools / Inspection tools

 - [redux-devtools-inspector](https://github.com/alexkuz/redux-devtools-inspector) - Another Redux DevTools Monitor.
 - [redux-diff-logger](https://github.com/fcomb/redux-diff-logger) - Diff logger between states for Redux.
 - [redux-devtools-chart-monitor](https://github.com/romseguy/redux-devtools-chart-monitor) - Chart monitor for Redux DevTools.
 - [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI.
 - [redux-devtools-dispatch](https://github.com/YoruNoHikage/redux-devtools-dispatch) - Dispatches actions manually to test how an app responds.
 - [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - Resizable and movable dock for Redux DevTools monitors.
 - [redux-devtools-filterable-log-monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor) - Filterable tree view monitor for Redux DevTools.
 - [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - The default monitor for Redux DevTools with a tree view.
 - [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) - Redux DevTools remotely.

## React Integration

 - [redux-test-recorder](https://github.com/conorhastings/redux-test-recorder) - Redux middleware to automatically generate tests for reducers through ui interaction.
 - [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux.
 - [react-easy-universal](https://github.com/keystonejs/react-easy-universal) - Tools intended to simplify universal routing and rendering with React and Redux.
 - [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) - Set of wrapper components to facilitate using Material UI with Redux Form.

### Routing

 - [redux-async-connect](https://github.com/Rezonans/redux-async-connect) - It allows you to request async data, store them in Redux state and connect them to your React component.
 - [redux-tiny-router](https://github.com/Agamennon/redux-tiny-router) - Router for Redux and universal apps that treats routing as state rather than as a controller.
 - [redux-router](https://github.com/acdlite/redux-router) - Redux bindings for React Router &ndash; keep your router state inside your Redux store.
 - [react-router-redux](https://github.com/reactjs/react-router-redux) - Bindings to keep react-router and Redux in sync.
 - [ground-control](https://github.com/raisemarketplace/ground-control) - Scalable reducer management and data fetching for React Router and Redux.

### Forms

 - [redux-form](https://github.com/erikras/redux-form) - Higher Order Component using react-redux to keep form state in a Redux store.
 - [react-redux-form](https://github.com/davidkpiano/react-redux-form) - Creates React forms using Redux.

### Component State

 - [redux-react-local](https://github.com/threepointone/redux-react-local) - Local component state via Redux.
 - [redux-ui](https://github.com/tonyhb/redux-ui) - UI state management for React Redux.

## Other Integrations

### Flux

 - [redux-actions](https://github.com/acdlite/redux-actions) - Flux Standard Action utilities for Redux.
 - [redux-promise](https://github.com/acdlite/redux-promise) - FSA-compliant promise middleware for Redux.

### Backbone

 - [backbone-redux](https://github.com/redbooth/backbone-redux) - Synchronizes Backbone collections with a Redux store.

### Falcor

 - [redux-falcor](https://github.com/ekosz/redux-falcor) - Connects a Redux front end to a Falcor back end.

### RxJS

 - [redux-observable](https://github.com/redux-observable/redux-observable) - RxJS middleware for action side effects in Redux using Epics.
 - [rx-redux](https://github.com/jas-chen/rx-redux) - Reimplementation of Redux using RxJS.
 - [redux-rx](https://github.com/acdlite/redux-rx) - RxJS utilities for Redux.
 - [redurx](https://github.com/shiftyp/redurx) - Redux-like functional state management using RxJS.

### Electron

 - [redux-electron-store](https://github.com/samiskin/redux-electron-store) - Redux store enhancer that allows automatic synchronization between electron processes.

### Deku

 - [deku-redux](https://github.com/troch/deku-redux) - Bindings for Redux in deku &lt; v2.

### Other

 - [redux-rollbar-middleware](https://github.com/netguru/redux-rollbar-middleware) - Redux middleware that wraps exceptions in actions and sends them to Rollbar with current state.
 - [kasia](https://github.com/outlandishideas/kasia) - React Redux toolset for the WordPress API.

## Boilerplate

Boilerplates, scaffolds, starter kits, generators, and application stacks.

 - [redux-cli](https://github.com/SpencerCDixon/redux-cli) - CLI following a particular design approach intended to speed up Redux/React app development.
 - [reactuate](https://github.com/reactuate/reactuate) - React/Redux stack (not a boilerplate kit).
 - [react-chrome-extension-boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate) - Boilerplate for Chrome Extension React.js project.
 - [universal-redux](https://github.com/bdefore/universal-redux) - npm package for starting React and Redux apps with universal (isomorphic) rendering. Express setup and Webpack configuration can be managed optionally.
 - [generator-react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate) - Starting point for building isomorphic React applications with ASP.NET Core 1, leveraging existing techniques.
 - [generator-redux](https://github.com/banderson/generator-redux) - CLI tools for functional Flux/React development with Redux and development tools.
 - [generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux) - React Webpack Generator including Redux support.
 - [socrates](https://github.com/matthewmueller/socrates) - Small (8kb) Redux store with built-in features, intended to reduce boilerplate and encourage good coding practices.

## Miscellaneous

 - [redux-core](https://github.com/jas-chen/redux-core) - Minimal Redux.

## Learning Material

 - Redux's concepts

    [Redux official documentation](http://redux.js.org/) explains Redux's core principles.

 - Why immutable data structures

    The [guide on performance](https://facebook.github.io/react/docs/advanced-performance.html) of React's official documentation explains immutable data structures and their role in performance.

 - Side Effects

    [Redux Loop's readme](https://github.com/redux-loop/redux-loop) discusses side effects in the context of Redux.

The first three resources cover Redux fundamentals. The resources below explore functional and reactive programming.

 - Functional Programming - Basics

    This [post](http://jaysoo.ca/2016/01/13/functional-programming-little-ideas/) goes over basic concepts of functional programming while building a YouTube instant search demo app.

 - Reactive Programming

    This [introduction to Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) introduces reactive programming.

 - Functional Programming - Going beyond

    An [article](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504) that talks about computer science concepts implemented in functional languages and how these apply to JavaScript.

 - Monads

    Wikipedia provides an [overview on monads](https://en.wikipedia.org/wiki/Monad_(functional_programming)) and [this article](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html) explains monads in more detail with graphics and simple examples.

## Community

- [Reddit](https://www.reddit.com/r/reduxjs/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/redux)
- [Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)
- [Slack](http://slack.redux.io/)
- [Gitter](https://gitter.im/reactjs/redux)
- [`#rackt` on freenode](https://webchat.freenode.net/)
