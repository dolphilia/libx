---
title: "Awesome Fiber"
description: "Middleware, project templates, example applications, tools and learning resources for the Fiber web framework in Go."
licenseSource: "github-gofiber-awesome-fiber-readme-md"
---

# Awesome Fiber

[Fiber](https://gofiber.io) is an [Express](https://github.com/expressjs/express)-inspired web framework for [Go](https://golang.org/doc/), built on [Fasthttp](https://github.com/valyala/fasthttp) with development speed, zero memory allocation and performance as design goals. This list covers middleware, project templates, example applications, tools, articles, videos and benchmarks for Fiber.

## Middleware<a id="️-middlewares"></a>

Middleware for Fiber, grouped by where it is maintained.

### Core<a id="-core"></a>

Middleware included in the Fiber framework.

- [Adaptor](https://github.com/gofiber/fiber/tree/main/middleware/adaptor) - Converter for net/http handlers to/from Fiber request handlers.
- [BasicAuth](https://github.com/gofiber/fiber/tree/main/middleware/basicauth) - HTTP Basic authentication middleware. Calls the next handler for valid credentials and returns 401 Unauthorized for missing or invalid credentials.
- [Cache](https://github.com/gofiber/fiber/tree/main/middleware/cache) - Intercept and cache responses.
- [Compress](https://github.com/gofiber/fiber/tree/main/middleware/compress) - Compression middleware for Fiber, supporting `deflate`, `gzip` and `brotli` by default.
- [CORS](https://github.com/gofiber/fiber/tree/main/middleware/cors) - Enable cross-origin resource sharing (CORS) with various options.
- [CSRF](https://github.com/gofiber/fiber/tree/main/middleware/csrf) - Protect from CSRF exploits.
- [Earlydata](https://github.com/gofiber/fiber/tree/main/middleware/earlydata) - Early data support for Fiber.
- [Encrypt Cookie](https://github.com/gofiber/fiber/tree/main/middleware/encryptcookie) - Middleware that encrypts cookie values.
- [EnvVar](https://github.com/gofiber/fiber/tree/main/middleware/envvar) - Exposes environment variables, with optional configuration.
- [ETag](https://github.com/gofiber/fiber/tree/main/middleware/etag) - Lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content has not changed.
- [Expvar](https://github.com/gofiber/fiber/tree/main/middleware/expvar) - Serves runtime data in JSON format via its HTTP server.
- [Favicon](https://github.com/gofiber/fiber/tree/main/middleware/favicon) - Excludes favicon requests from logs or serves the favicon from memory if a file path is provided.
- [Healthcheck](https://github.com/gofiber/fiber/tree/main/middleware/healthcheck) - Adds health-check endpoints for readiness and liveness probes.
- [Helmet](https://github.com/gofiber/fiber/tree/main/middleware/helmet) - Helps secure your apps by setting various HTTP headers.
- [Host Authorization](https://github.com/gofiber/fiber/tree/main/middleware/hostauthorization) - Validates the `Host` header against an allowlist to protect against DNS rebinding attacks.
- [Idempotency](https://github.com/gofiber/fiber/tree/main/middleware/idempotency) - Enables fault-tolerant APIs when duplicate requests occur.
- [Keyauth](https://github.com/gofiber/fiber/tree/main/middleware/keyauth) - Key-based authentication middleware.
- [Limiter](https://github.com/gofiber/fiber/tree/main/middleware/limiter) - Rate-limiting middleware. Use to limit repeated requests to public APIs and/or endpoints such as password reset.
- [Logger](https://github.com/gofiber/fiber/tree/main/middleware/logger) - HTTP request/response logger.
- [Paginate](https://github.com/gofiber/fiber/tree/main/middleware/paginate) - Parses pagination parameters from the query string, supporting page-based, offset-based and cursor-based strategies.
- [Pprof](https://github.com/gofiber/fiber/tree/main/middleware/pprof) - Serves runtime profiling data in the format expected by the pprof visualization tool.
- [Proxy](https://github.com/gofiber/fiber/tree/main/middleware/proxy) - Proxies requests to multiple servers.
- [Recover](https://github.com/gofiber/fiber/tree/main/middleware/recover) - Recovers from panics anywhere in the stack chain and hands control to the centralized ErrorHandler.
- [Redirect](https://github.com/gofiber/fiber/tree/main/middleware/redirect) - Handles HTTP redirects in Fiber.
- [RequestID](https://github.com/gofiber/fiber/tree/main/middleware/requestid) - Adds a request ID to every request.
- [Responsetime](https://github.com/gofiber/fiber/tree/main/middleware/responsetime) - Adds an `X-Response-Time` header to responses.
- [Rewrite](https://github.com/gofiber/fiber/tree/main/middleware/rewrite) - Rewrites the URL path based on provided rules for backward compatibility or cleaner links.
- [Session](https://github.com/gofiber/fiber/tree/main/middleware/session) - Provides session management. This middleware uses the Fiber Storage package.
- [Skip](https://github.com/gofiber/fiber/tree/main/middleware/skip) - Skips a wrapped handler when a predicate is true.
- [SSE](https://github.com/gofiber/fiber/tree/main/middleware/sse) - Server-Sent Events transport that handles headers, event formatting, flushing, heartbeats and disconnect detection.
- [Static](https://github.com/gofiber/fiber/tree/main/middleware/static) - Serves static files from a local or custom file system.
- [Timeout](https://github.com/gofiber/fiber/tree/main/middleware/timeout) - Sets a maximum time for a request and forwards to ErrorHandler if it is exceeded.

### External<a id="-external"></a>

Modules hosted separately from the framework and maintained by the [Fiber team](https://github.com/orgs/gofiber/people).

- [storage](https://github.com/gofiber/storage) - Premade storage drivers that implement the Storage interface, designed to be used with various Fiber middlewares.
- [template](https://github.com/gofiber/template) - Contains 8 template engines for use with Fiber v1.10.x. Requires Go 1.13 or higher.

### Contrib<a id="-contrib"></a>

Third-party middleware maintained by the Fiber team and community.

- [casbin](https://github.com/gofiber/contrib/tree/main/v3/casbin) - Authorization middleware for Fiber powered by Casbin.
- [circuitbreaker](https://github.com/gofiber/contrib/tree/main/v3/circuitbreaker) - Circuit breaker middleware for Fiber.
- [coraza](https://github.com/gofiber/contrib/tree/main/v3/coraza) - Web application firewall middleware for Fiber powered by Coraza.
- [fgprof](https://github.com/gofiber/contrib/tree/main/v3/fgprof) - Fiber profiling support via fgprof.
- [hcaptcha](https://github.com/gofiber/contrib/tree/main/v3/hcaptcha) - Bot-protection middleware using hCaptcha.
- [i18n](https://github.com/gofiber/contrib/tree/main/v3/i18n) - Internationalization middleware built on go-i18n.
- [jwt](https://github.com/gofiber/contrib/tree/main/v3/jwt) - JSON Web Token (JWT) auth middleware.
- [loadshed](https://github.com/gofiber/contrib/tree/main/v3/loadshed) - Load-shedding middleware to protect Fiber services under pressure.
- [monitor](https://github.com/gofiber/contrib/tree/main/v3/monitor) - Server metrics monitor middleware for Fiber.
- [newrelic](https://github.com/gofiber/contrib/tree/main/v3/newrelic) - New Relic instrumentation support for Fiber.
- [opa](https://github.com/gofiber/contrib/tree/main/v3/opa) - Open Policy Agent (OPA) middleware support for Fiber.
- [otel](https://github.com/gofiber/contrib/tree/main/v3/otel) - OpenTelemetry middleware support for Fiber.
- [paseto](https://github.com/gofiber/contrib/tree/main/v3/paseto) - Platform-Agnostic Security Tokens (PASETO) auth middleware.
- [prometheus](https://github.com/gofiber/contrib/tree/main/v3/prometheus) - Middleware that instruments incoming requests and serves a metrics endpoint for Prometheus.
- [sentry](https://github.com/gofiber/contrib/tree/main/v3/sentry) - Error monitoring and reporting integration for Fiber with Sentry.
- [socketio](https://github.com/gofiber/contrib/tree/main/v3/socketio) - Socket.IO-inspired WebSocket wrapper middleware for Fiber.
- [spnego](https://github.com/gofiber/contrib/tree/main/v3/spnego) - Kerberos authentication middleware for Fiber using the SPNEGO mechanism.
- [swaggo](https://github.com/gofiber/contrib/tree/main/v3/swaggo) - Middleware for serving Swag-generated API docs in Fiber.
- [swaggerui](https://github.com/gofiber/contrib/tree/main/v3/swaggerui) - Swagger UI middleware for serving OpenAPI specs in Fiber.
- [testcontainers](https://github.com/gofiber/contrib/tree/main/v3/testcontainers) - Service implementation for integrating Testcontainers with Fiber.
- [uptime](https://github.com/gofiber/contrib/tree/main/v3/uptime) - Records heartbeat history and serves a status dashboard with a JSON API for monitoring uptime.
- [WebSocket](https://github.com/gofiber/contrib/tree/main/v3/websocket) - Fasthttp-based WebSocket integration for Fiber with `fiber.Ctx` support.
- [zap](https://github.com/gofiber/contrib/tree/main/v3/zap) - Logging middleware support for Fiber with Zap.
- [zerolog](https://github.com/gofiber/contrib/tree/main/v3/zerolog) - Logging middleware support for Fiber with Zerolog.

### Third Party<a id="-third-party"></a>

Middleware created by the Fiber community.

- [shareed2k/fiber_tracing](https://github.com/shareed2k/fiber_tracing) - Traces requests in Fiber using the OpenTracing API.
- [shareed2k/fiber_limiter](https://github.com/shareed2k/fiber_limiter) - Rate limiter using Redis for storage, with a choice of two algorithms: sliding window and GCRA leaky bucket.
- [ansrivas/fiberprometheus](https://github.com/ansrivas/fiberprometheus) - Prometheus middleware for gofiber.
- [sacsand/gofiber-firebaseauth](https://github.com/sacsand/gofiber-firebaseauth) - Fiber Firebase Auth Middleware.
- [aschenmaker/fiber-health-check](https://github.com/aschenmaker/fiber-health-check) - Health-check middleware for Fiber.
- [elastic/apmfiber](https://github.com/elastic/apm-agent-go/tree/master/module/apmfiber) - APM Agent for Go Fiber.
- [eozer/fiber_ldapauth](https://github.com/eozer/fiber_ldapauth) - LDAP Authentication Middleware for Fiber.
- [fugue-labs/gollem](https://github.com/fugue-labs/gollem/tree/main/contrib/fiberhandler) - Handler adapter that wraps a gollem AI agent as a Fiber handler with SSE streaming support.
- [DavidHoenisch/fiber-coraza](https://github.com/DavidHoenisch/fiber-coraza) - Coraza WAF middleware for Fiber, providing web application firewall protection with ModSecurity-compatible rules.
- [darkweak/souin](https://github.com/darkweak/souin) - RFC-compliant HTTP cache available as middleware, providing an alternative to Varnish.
- [witer33/fiberpow](https://github.com/witer33/fiberpow) - Anti-DDoS and bot-protection middleware with a customizable proof-of-work challenge.
- [beyer-stefan/gofiber-minifier](https://github.com/beyer-stefan/gofiber-minifier) - Minifying middleware for HTML5, CSS3, and JavaScript.
- [joffref/opa-middleware](https://github.com/Joffref/opa-middleware) - Provides OPA middleware integration for Fiber.
- [vladfr/fiber-servertiming](https://github.com/vladfr/fiber-servertiming) - A middleware to add Server-Timing headers based on the W3C Server-Timing Spec.
- [airbrake/gobrake](https://github.com/airbrake/gobrake/tree/master/examples/fiber) - An Airbrake middleware that reports performance data (route stats).
- [samber/slog-fiber](https://github.com/samber/slog-fiber) - A logger middleware that uses Go slog library.
- [mikhail-bigun/fiberlogrus](https://github.com/mikhail-bigun/fiberlogrus) - A logger middleware that uses logrus and its structured logging features.
- [Idan-Fishman/fiber-bind](https://github.com/Idan-Fishman/fiber-bind) - Request schema validator middleware that validates sources such as the request body, query string parameters, route parameters and even form files.
- [rodrigoodhin/fiper](https://gitlab.com/rodrigoodhin/fiper) - Provides role-based access control (RBAC) for Fiber using JWT, with database persistence through two supported ORM libraries: Gorm and Bun.
- [zeiss/fiber-goth](https://github.com/ZEISS/fiber-goth) - Middleware that integrates authentication into Fiber applications.
- [zeiss/fiber-authz](https://github.com/ZEISS/fiber-authz) - A middleware to secure routes in Fiber with a defined RBAC model.
- [zeiss/fiber-htmx](https://github.com/ZEISS/fiber-htmx) - A middleware for using HTMX in Fiber.
- [jsorb84/ssefiber](https://github.com/jsorb84/ssefiber) - A basic SSE implementation for Fiber.
- [streamerd/fibergun](https://github.com/streamerd/fibergun) - A GunDB middleware for Fiber. Enables easy integration of GunDB, a decentralized database.
- [apitally/apitally-go](https://github.com/apitally/apitally-go) - Simple API monitoring tool for Fiber. Tracks API usage, errors, and performance, and includes request logging and alerting features.
- [newrelic/go-agent](https://github.com/newrelic/go-agent/tree/master/v3/integrations/nrfiber) - Official New Relic middleware for Fiber that manages instrumentation for New Relic monitoring.
- [narmadaweb/limiter](https://github.com/narmadaweb/limiter) - A high-performance Redis-backed rate limiter middleware for Fiber, supporting fixed window, sliding window, and token bucket algorithms.
- [narmadaweb/gonify](https://github.com/narmadaweb/gonify) - Minification middleware for Fiber supporting HTML5, CSS3, JavaScript, JSON, XML and SVG.
- [oaswrap/fiberopenapi](https://github.com/oaswrap/spec/tree/main/adapter/fiberopenapi) - Fiber adapter for OpenAPI 3.x specification generation with automatic route documentation.

## Boilerplates<a id="-boilerplates"></a>

Premade boilerplates for Fiber.

- [gofiber/boilerplate](https://github.com/gofiber/boilerplate) - Official Fiber boilerplate.
- [fiber-boilerplate](https://github.com/thomasvvugt/fiber-boilerplate) - A boilerplate for the Fiber web framework.
- [sujit-baniya/fiber-boilerplate](https://github.com/sujit-baniya/fiber-boilerplate) - Boilerplate built on Fiber with multiple middleware modules and features.
- [goravel/fiber](https://github.com/goravel/fiber) - Laravel-like boilerplate with Fiber support.
- [create-go-app/fiber-go-template](https://github.com/create-go-app/fiber-go-template) - Fiber backend template for Create Go App CLI.
- [efectn/fiber-boilerplate](https://github.com/efectn/fiber-boilerplate) - Simple and scalable boilerplate to build powerful and organized REST projects with Fiber.
- [embedmode/fiberseed](https://github.com/embedmode/fiberseed) - Fiber API boilerplate with multiple middleware modules.
- [GalvinGao/gofiber-template](https://github.com/GalvinGao/gofiber-template) - A production-ready, container-first opinionated gofiber project template. Config by envvars, DI by go.uber.org/fx, Database by uptrace/bun, with out-of-the-box MVC folder structure and CI/CD support.
- [mikhail-bigun/go-app-template](https://github.com/mikhail-bigun/go-app-template) - Clean architecture Go application boilerplate with enriched Fiber implementation.
- [felipeafonso/go-htmx-starter](https://github.com/FelipeAfonso/go-htmx-starter) - An opinionated front-end boilerplate for Go + HTMX development, using Tailwind and Vite for bundling and hot reloading.
- [amrebada/go-modules](https://github.com/amrebada/go-modules) - NestJS-like project structure for Go Fiber.
- [ingeniousambivert/fiber-bootstrapped](https://github.com/ingeniousambivert/fiber-bootstrapped) - A toolkit for Go projects embracing a service-centric architecture, inspired by the principles of FeathersJS.
- [sebajax/go-vertical-slice-architecture](https://github.com/sebajax/go-vertical-slice-architecture) - Vertical Slice Architecture code archetype using Fiber and Uber dig. A maintainable, and scalable code organization.
- [go-rat/fiber-skeleton](https://github.com/go-rat/fiber-skeleton) - Fiber skeleton for web projects, with wire-based dependency injection.
- [rachmanzz/fiber-starter](https://github.com/rachmanzz/fiber-starter) - A Go backend boilerplate using Fiber v3, PostgreSQL (pgx v5), and SQLC.

## Recipes<a id="-recipes"></a>

Recipes for Fiber.

- [gofiber/recipes](https://github.com/gofiber/recipes) - Official Fiber cookbook.
- [kiyonlin/fiblar-demo](https://github.com/kiyonlin/fiblar-demo) - Fiber v1 + Angular demo.
- [koddr/tutorial-go-fiber-rest-api](https://github.com/koddr/tutorial-go-fiber-rest-api) - Tutorial for building a RESTful API with Fiber.
- [firebase007/go-rest-api-with-fiber](https://github.com/firebase007/go-rest-api-with-fiber) - Demo project with Fiber, logging, BasicAuth and PostgreSQL.
- [chawk/go_fiber_quickstart](https://github.com/chawk/go_fiber_quickstart) - Fiber quick start example project.
- [EricLau1/go-fiber-auth-api](https://github.com/EricLau1/go-fiber-auth-api) - Go authentication API with Fiber, MongoDB and JWT.
- [alpody/golang-fiber-realworld-example-app](https://github.com/alpody/golang-fiber-realworld-example-app) - Example real-world backend API built with Fiber, Gorm and Swagger.
- [kubestellar/console](https://github.com/kubestellar/console) - AI-powered multi-cluster Kubernetes dashboard built on Fiber, with real-time observability and CNCF integrations.
- [paundraP/golang-starter-template](https://github.com/paundraP/Go-Starter-Template) - Golang REST API with authentication, authorization, and integrated payment gateway support.

## Tools<a id="️-tools"></a>

Several tools to make Fiber usage easier.

- [Alibaba/opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Monitors Fiber applications through OpenTelemetry APIs without code changes.
- [deepmap/oapi-codegen](https://github.com/deepmap/oapi-codegen) - Generate Go client and server boilerplate from OpenAPI 3 specifications.
- [go-dawn/dawn](https://github.com/go-dawn/dawn) - An opinionated web framework built on Fiber for rapid development.
- [gofiber/cli](https://github.com/gofiber/cli) - Official Fiber command line interface for project generation, live reloading and version migration.
- [MUlt1mate/protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - A protoc plugin that generates Fiber HTTP server and client code from proto files.
- [ryanbekhen/feserve](https://github.com/ryanbekhen/feserve) - Feserve is a lightweight application or Docker image to serve frontend and load balancer applications.
- [tompston/gomakeme](https://github.com/tompston/gomakeme) - Generate boilerplate + endpoints for Fiber or Gin REST APIs.

## Articles<a id="-articles"></a>

Articles about Fiber written by the community.

- [Working with middlewares and boilerplates](https://dev.to/koddr/go-fiber-by-examples-working-with-middlewares-and-boilerplates-3p0m)
- [Testing the application](https://dev.to/koddr/go-fiber-by-examples-testing-the-application-1ldf)
- [Delving into built-in functions](https://dev.to/koddr/go-fiber-by-examples-delving-into-built-in-functions-1p3k)
- [Go Fiber by Examples: How can the Fiber Web Framework be useful?](https://dev.to/koddr/go-fiber-by-examples-how-can-the-fiber-web-framework-be-useful-487a)
- [Build a RESTful API on Go: Fiber, PostgreSQL, JWT and Swagger docs in isolated Docker containers](https://dev.to/koddr/build-a-restful-api-on-go-fiber-postgresql-jwt-and-swagger-docs-in-isolated-docker-containers-475j)
- [Getting started with Fiber](https://dev.to/fenny/getting-started-with-fiber-36b6)
- [Building an Express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)
- [Fiber v1.9.6 How to improve performance by 817% and stay fast, flexible and friendly?](https://dev.to/koddr/fiber-v1-9-5-how-to-improve-performance-by-817-and-stay-fast-flexible-and-friendly-2dp6)
- [Create a travel list app with Go, Fiber, Angular, MongoDB and Google Cloud Secret Manager](https://blog.yongweilun.me/create-a-travel-list-app-with-go-fiber-angular-mongodb-and-google-cloud-secret-manager-ck9fgxy0p061pcss1xt1ubu8t)
- [Building a Basic REST API in Go using Fiber](https://tutorialedge.net/golang/basic-rest-api-go-fiber/)
- [Creating Fast APIs In Go Using Fiber](https://dev.to/jozsefsallai/creating-fast-apis-in-go-using-fiber-59m9)
- [Is switching from Express to Fiber worth it?](https://dev.to/koddr/are-sure-what-your-lovely-web-framework-running-so-fast-2jl1)
- [Fiber v1.8. What's new, updated and re-thinked?](https://dev.to/koddr/fiber-v1-8-what-s-new-updated-and-re-thinked-339h)
- [Fiber released v1.7! What's new and is it still fast, flexible and friendly?](https://dev.to/koddr/fiber-v2-is-out-now-what-s-new-and-is-he-still-fast-flexible-and-friendly-3ipf)
- [Welcome to Fiber — an Express.js styled web framework written in Go](https://dev.to/koddr/welcome-to-fiber-an-express-js-styled-fastest-web-framework-written-with-on-golang-497)
- [Blazing Fast Unit Tests - Fiber/fasthttp/http Internals](https://medium.com/trendyol-tech/golang-blazing-fast-unit-tests-fiber-fasthttp-http-internals-and-optimizing-http-server-tests-bbd1fe7b944b)
- [Building Microservices in Go : Part 1 - Project Setup, Dockerization](https://saadfarhan124.medium.com/building-microservices-in-go-part-1-e7e58893bc5e)
- [Building Microservices in Go : Part 2 - Live Reload](https://saadfarhan124.medium.com/building-microservices-in-go-part-2-f9c6c535805c)
- [Building Microservices in Go : Part 3 - Database, Models, Migrations](https://saadfarhan124.medium.com/building-microservices-in-go-part-3-database-models-migrations-a4455121bb11)
- [Build a REST API from scratch with Go, Docker & PostgreSQL](https://dev.to/divrhino/build-a-rest-api-from-scratch-with-go-and-docker-3o54)
- [Build a fullstack app with Go Fiber, Docker, and PostgreSQL](https://dev.to/divrhino/build-a-fullstack-app-with-go-fiber-docker-and-postgres-1jg6)
- [Create a CRUD app with Go Fiber, Docker, and PostgreSQL](https://dev.to/divrhino/create-a-crud-app-with-go-fiber-docker-and-postgres-47e3)

## Videos<a id="-videos"></a>

Video tutorials created by the community about Fiber.

- [Is Fiber the best Go web framework? Better than Gin?](https://youtu.be/10miByMOGfY)

## Benchmarks<a id="-benchmarks"></a>

Several benchmarks to compare Fiber with other frameworks.

- [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=json) - Provides performance measurements across a range of web application frameworks.
- [web-frameworks-benchmark](https://web-frameworks-benchmark.netlify.app/result) - Measures differences between frameworks in various programming languages.
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - This benchmark suite aims to compare the performance of Go web frameworks.
