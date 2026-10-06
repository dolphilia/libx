---
title: "Awesome Relay"
description: "Relay documentation, tutorials, example applications, packages, tooling, starter kits, and server support."
licenseSource: "github-expede-awesome-relay-readme-md"
toc:
  maxLevel: 4
---

# Awesome Relay

Find learning resources and example applications for [Relay](https://github.com/facebook/relay), along with libraries, development tools, and starter kits. The list also covers language-specific server support and testing.

## Learning Resources
### Documentation
- [Official Docs](https://facebook.github.io/relay/docs/getting-started.html#content) - Official Relay documentation.

### FAQs
- [Unofficial Relay FAQ](https://gist.github.com/wincent/598fa75e22bdfa44cf47) - Answers to common questions. The original list notes that Relay resources were scarce at the time and recommends this FAQ when you get stuck.

### Tutorials
- [Getting Started with Relay](https://auth0.com/blog/2015/10/06/getting-started-with-relay/) - A detailed hands-on Relay walkthrough, described in the original list as one of the few available at the time.
- [Relay 101: Building A Hacker News Client](https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6#.1i64q1pf9) - A complete, working example.
  - [Relay 102: Mutations](https://medium.com/@clayallsopp/relay-102-mutations-d8b471a4730e#.i9vuv3vxl) - A follow-up to "Relay 101" focused on mutations.
- [Facebook Relay talk - Lunch and Learn session](https://www.youtube.com/watch?v=sP3n-nht0Xo) - Walkthrough of building a simple app, and demonstration of [GraphiQL](https://github.com/graphql/graphiql).
- [A Beginner's Guide to Relay Mutations](http://blog.pathgather.com/blog/a-beginners-guide-to-relay-mutations) - Mutations in depth.
- [Learn Relay](https://learnrelay.org/) - Shows you how to make a Pokemon-themed CRUD app, providing a personal, cloud-based GraphQL backend so you can focus on the client-side code.

### Overviews
- [React Data Fetching with Relay](http://www.sitepoint.com/react-data-fetching-with-relay/) - A conceptual overview of Relay's components and how they work.
- [Joseph Savona - Relay: An Application Framework For React](https://www.youtube.com/watch?v=IrgHurBjQbg) - Conceptual overview of Relay from the Facebook team.
- [F8 2015 - React Native & Relay: Bringing Modern Web Techniques to Mobile](https://www.youtube.com/watch?v=X6YbAKiLCLU) - An overview of Relay, including some of its underlying philosophy.
- [Relay - Daniel Dembach - Hamburg React.js Meetup](https://www.youtube.com/watch?v=dvWTxy1eY6s) - A general overview of Relay with discussion of alternatives. Common questions are covered in the Q&A at the end.
- [Facebook Relay talk - Lunch and Learn session](https://www.youtube.com/watch?v=sP3n-nht0Xo) - Walkthrough of building a simple app, and demonstration of [GraphiQL](https://github.com/graphql/graphiql).
- [React with Relay and GraphQL with Andrew Smith](https://www.youtube.com/watch?v=Cfna8gwt9h8) - A high-level overview of Relay and GraphQL, with audience discussion and coverage of other front-end frameworks.
- [Relay for Visual Learners](http://sgwilym.github.io/relay-visual-learners/) - Diagrams showing how the different parts of Relay relate to each other.
- [Relay: Seamless Syncing For React](http://www.slideshare.net/BrooklynZelenka/relay-seamless-syncing-for-react-vanjs) - An overview of what Relay is, and some discussion of experience using it in production.
- Cartoon Intro to Facebook's Relay - An overview of how Relay works, complete with illustrations.
  - [Part 1: Saying what data you need with GraphQL](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5)
  - [Part 2: Fetching data from the server](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-2-d4a2435aee59)
  - [Part 3: Syncing changes back up to the server](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-3-9d8fcf8db670)
  - [Part 4: How it all fits together](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-4-aef7d819a8ed)

### Example Implementations
- [Relay TODO MVC](https://github.com/taion/relay-todomvc) - A TodoMVC example app written with Relay.
- [`relay-chat`](https://github.com/transedward/relay-chat) - Relay with routing and pagination.
- [`koa-graphql-relay-example`](https://github.com/chentsulin/koa-graphql-relay-example) - "TODO" app with [`koa-graphql`](https://github.com/chentsulin/koa-graphql) and `relay`.
- [`todomvc-relay-go`](https://github.com/sogko/todomvc-relay-go) - Relay TodoMVC app, driven by a Golang GraphQL backend.

### Lists of Lists
- [Relay and GraphQL Introduction Materials](https://quip.com/oLxzA1gTsJsE)

## Ecosystem
### Libraries & Packages
- [`graphql-relay-js`](https://github.com/graphql/graphql-relay-js) - Simplifies creating a JS GraphQL server for `react-relay`.
- [Babel Relay Plugin](https://www.npmjs.com/package/babel-relay-plugin) - Use Relay with ES6+ syntax, described as the latest syntax in the original list.
- [`react-router-relay`](https://github.com/relay-tools/react-router-relay) - `react-router` bindings for Relay. Simplifies many UI use cases involving local state.
  - [Relay and Routing](https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.h91614i65) - A walkthrough of `react-router-relay` and the problems it solves.
  - [`relay-nested-routes`](https://www.npmjs.com/package/relay-nested-routes) - Generate nested routes that reflect nested data. Helpful for managing deep data.
  - [`isomorphic-relay-router`](https://github.com/denvned/isomorphic-relay-router) - Server-side rendering support for `react-router-relay`.
- [`relay-decorator`](https://github.com/4Catalyzer/relay-decorators) - Simplified syntax for Relay containers using ES7 decorators (`@` syntax).
- [`recompose-relay`](https://www.npmjs.com/package/recompose-relay) - Ease composition of Relay containers by currying and providing the component after the container.
- [`relay-local-schema`](https://github.com/relay-tools/relay-local-schema) - Use a local schema; no need for a remote GraphQL server.
- [`react-native-relay`](https://github.com/lenaten/react-native-relay) - Use Relay with React Native.
  - The original list notes possible future [out-of-the-box support](https://github.com/facebook/relay/issues/26).
- [`relay-sink`](https://github.com/acdlite/relay-sink) - Use Relay to fetch and store data outside of a React component.
- [`babel-plugin-flow-relay-query`](https://github.com/guymers/babel-plugin-flow-relay-query) - Convert [Flow](http://flowtype.org) types into Relay fragments.
- [`sequelize-relay`](https://github.com/MattMcFarland/sequelize-relay) - Make Relay compatible with [`sequelize`](https://github.com/sequelize/sequelize).
- [`relay-mongodb-connection`](https://github.com/mikberg/relay-mongodb-connection) - Create Relay connections from MongoDB cursors.
- [`relay-composite-network-layer`](https://github.com/eyston/relay-composite-network-layer) - Compose a Relay network layer from multiple network layers, each with its own schema.
- [`react-relay-network-layer`](https://github.com/nodkz/react-relay-network-layer) - A network layer with query batching and middleware support, including authentication and logging middleware.

### Tooling
- [GraphiQL](https://github.com/graphql/graphiql) - A library for GraphQL introspection and for testing queries and mutations.
  - [GraphiQL App](https://github.com/skevy/graphiql-app) - A standalone app for viewing GraphQL and introspection documentation and for testing queries and mutations. Useful for debugging Relay apps.
- [`relay-local-schema`](https://github.com/relay-tools/relay-local-schema) - Use a local schema; no need for a remote GraphQL server.
- [Babel Relay Plugin](https://www.npmjs.com/package/babel-relay-plugin) - Use Relay with ES6+ syntax, described as the latest syntax in the original list.

### Starter Kits
- [Relay Skeleton](https://github.com/fortruce/relay-skeleton) - Relay project skeleton.
- [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit) - An app with a basic setup already in place. Clone it and adapt it to your needs.
- [Node.js API Starter Kit](https://github.com/kriasoft/nodejs-api-starter) - Boilerplate and tooling for building data APIs with Node.js, GraphQL, and Relay.
- [Simple Relay Starter](https://github.com/mhart/simple-relay-starter) - A Browserify version of the [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit).
- [UniversalRelayBoilerplate](https://github.com/codefoundries/UniversalRelayBoilerplate)
Boilerplate + examples for React Native (iOS, Android), React (isomorphic, Material-UI), Relay, GraphQL, JWT, Node.js, Apache Cassandra.
- [Relay on Rails Starter Kit](https://github.com/nethsix/relay-on-rails) - A minimal starter kit for a Relay application on a Rails server. Clone it and adapt it to your needs.
- [Relay Fullstack](https://github.com/lvarayut/relay-fullstack) - Relay Starter Kit integrated with Relay, Express, Webpack, Babel, Material Design Lite, and PostCSS.

## Relay-Specific Server Support
### Go
- [Go Relay](https://github.com/graphql-go/relay) - A Go/Golang library to help construct a graphql-go server supporting react-relay.
- [`todomvc-relay-go`](https://github.com/sogko/todomvc-relay-go) - React/Relay TodoMVC app, driven by a Golang GraphQL backend.

### JavaScript
- [`graphql-relay-js`](https://github.com/graphql/graphql-relay-js) - Simplifies creating a JS GraphQL server for `react-relay`.

### Python
- [`graphql-relay-py`](https://github.com/graphql-python/graphql-relay-py) - A library to help construct a `graphql-py` server supporting `react-relay`.

### Ruby
- [`graphql-relay-ruby`](https://github.com/rmosolgo/graphql-relay-ruby) - Relay helpers for GraphQL & Ruby.

#### Rails
- [GraphQL and Relay on Rails — First relay powered react component](https://medium.com/@gauravtiwari/graphql-and-relay-on-rails-first-relay-powered-react-component-cb3f9ee95eca#.c88zcoftn) - A full walkthrough of a simple Relay setup, including code you can clone.
- [Relay/GraphQL On Rails](https://medium.com/@khor/relay-facebook-on-rails-8b4af2057152#.5hjih9wms) - A brief example of Relay with Rails, complete with several diagrams to aid in comprehension.
- [Relay on Rails Starter Kit](https://github.com/nethsix/relay-on-rails) - A minimal starter kit for a Relay application on a Rails server. Clone it and adapt it to your needs.

### Scala
- [`sangria-relay`](https://github.com/sangria-graphql/sangria-relay) - Relay support for [Sangria](http://sangria-graphql.org).

## Testing
- [Writing Simple Unit Tests with Relay](https://medium.com/@mikaelberg/writing-simple-unit-tests-with-relay-707f19e90129) - An early first look at testing Relay.
