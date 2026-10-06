---
title: "Awesome Dropwizard"
description: "Dropwizard extensions, Eclipse tooling, tutorials, practical guides, community channels and a service architecture video."
licenseSource: "github-stve-awesome-dropwizard-readme-md"
---

# Awesome Dropwizard

Explore [Dropwizard](http://www.dropwizard.io) extensions for authentication, data stores, metrics, logging, scheduling and deployment, along with Eclipse tooling. Tutorials, practical guides, community channels and a service architecture video provide further reference material.

## Editor Support

### Eclipse

* [dropwizard-tools](https://github.com/Tasktop/dropwizard-tools) - Eclipse tools for Dropwizard.

## Open Source

* [dropwizard-swagger](https://github.com/smoketurner/dropwizard-swagger) - Serves Swagger UI static content and loads Swagger endpoints.
* [dropwizard-jaxws](https://github.com/roskart/dropwizard-jaxws) - Build SOAP web services and clients using the JAX-WS API.
* [dropwizard-redirect-bundle](https://github.com/bazaarvoice/dropwizard-redirect-bundle) - Enables HTTP redirects.
* [dropwizard-template-config](https://github.com/tkrille/dropwizard-template-config) - Write config.yaml as a Freemarker template.
* [dropwizard-caching-bundle](https://github.com/bazaarvoice/dropwizard-caching-bundle) - Generates cache-control options for resources and response caching.
* [dropwizard-xml](https://github.com/yunspace/dropwizard-xml) - A Dropwizard bundle for processing and validating XML.
* [dropwizard-crypto](https://github.com/meltmedia/dropwizard-crypto) - A cryptographic bundle for Dropwizard.
* [dropwizard-circuitbreaker](https://github.com/mtakaki/dropwizard-circuitbreaker) - Implements the circuit breaker design pattern for Dropwizard.
* [dropwizard-maxmind-bundle](https://github.com/phaneesh/dropwizard-maxmind-bundle) - MaxMind GeoIP2 support for Dropwizard.
* [dropwizard-protobuf](https://github.com/dropwizard/dropwizard-protobuf) - Read and write Google Protocol Buffer objects within Dropwizard.
* [dropwizard-activemq-bundle](https://github.com/mbknor/dropwizard-activemq-bundle) - Send and receive JSON via ActiveMQ in a Dropwizard application.
* [dropwizard-consul](https://github.com/smoketurner/dropwizard-consul) - A Consul bundle for Dropwizard.
* [dropwizard-zipkin](https://github.com/smoketurner/dropwizard-zipkin) - A Zipkin bundle for Dropwizard.
* [dropwizard-graphql](https://github.com/smoketurner/dropwizard-graphql) - A GraphQL bundle for Dropwizard.
* [dropwizard-money](https://github.com/smoketurner/dropwizard-money) - A Money bundle for Dropwizard.
* [breakerbox](https://github.com/yammer/breakerbox) - A frontend for Tenacity + Archaius.
* [tenacity](https://github.com/yammer/tenacity) - A Hystrix bundle for Dropwizard.
* [dropwizard-grpc](https://github.com/msteinhoff/dropwizard-grpc) - Use a gRPC server in a Dropwizard service.
* [sqs-dropwizard](https://github.com/bascan/aws-dropwizard) - Amazon SQS integration.
* [dropwizard-simple-cors](https://github.com/ojacobson/dropwizard-simple-cors) - A Dropwizard bundle providing simple, practical CORS support.
* [dropwizard-version-info](https://github.com/palantir/dropwizard-version-info) - A Dropwizard bundle exposing a version endpoint.

### Boilerplate Destruction
* [Brahma-HibernateUtils](https://github.com/gozefo/brahma-hibernateutils) - An annotation processor that tracks ```@Entity``` classes to simplify entity registration in Dropwizard.

### Authentication

* [dropwizard-auth-ldap](https://github.com/yammer/dropwizard-auth-ldap) - LDAP authentication for Dropwizard.
* [dropwizard-jwt-cookie-authentication](https://github.com/dhatim/dropwizard-jwt-cookie-authentication) - A Dropwizard bundle managing authentication through JWT cookies.

### Assets

* [dropwizard-configurable-assets-bundle](https://github.com/bazaarvoice/dropwizard-configurable-assets-bundle) - An AssetBundle implementation for Dropwizard that supports user configuration.
* [dropwizard-markdown-assets-bundle](https://github.com/rnorth/dropwizard-markdown-assets-bundle) - Renders Markdown files as formatted HTML.

### Data Stores

* [dropwizard-etcd](https://github.com/meltmedia/dropwizard-etcd) - An Etcd bundle for Dropwizard.
* [dropwizard-mongo](https://github.com/eeb/dropwizard-mongo) - Factories and health checks for connecting to MongoDB.
* [dropwizard-elasticsearch](https://github.com/dropwizard/dropwizard-elasticsearch) - Classes for using Elasticsearch in a Dropwizard service.
* [dropwizard-service-discovery](https://github.com/santanusinha/dropwizard-service-discovery) - A Zookeeper service discovery bundle and client for Dropwizard.
* [dropwizard-cassandra](https://github.com/composable-systems/dropwizard-cassandra) - Dropwizard support for Cassandra.
* [dropwizard-riak](https://github.com/smoketurner/dropwizard-riak) - Dropwizard support for Riak.
* [dropwizard-orient-server](https://github.com/xvik/dropwizard-orient-server) - An embedded OrientDB server for Dropwizard.
* [dropwizard-atomix](https://github.com/smoketurner/dropwizard-atomix) - Integration with [Atomix](http://atomix.io/).

### Metrics

* [riemann-bundle](https://github.com/phaneesh/riemann-bundle) - Simplifies integration of Dropwizard metrics into Riemann.
* [metrics](http://metrics.dropwizard.io/3.1.0/manual/third-party/) - Metrics libraries.

### Logging

* [dropwizard-gelf](https://github.com/gini/dropwizard-gelf) - A Dropwizard addon bundle for logging to GELF-enabled servers.
* [dropwizard-raven](https://github.com/tradier/dropwizard-raven) - Dropwizard integration for error logging to Sentry.
* [dropwizard-logstash-encoder](https://github.com/Wikia/dropwizard-logstash-encoder) - A Dropwizard logging addon that sends logs using logstash-logback-encoder.

### Scheduled/Recurrence Jobs

* [dropwizard-quartz](https://github.com/jaredstehler/dropwizard-quartz) - A simple job scheduler integrating Guice and Quartz.
* [dropwizard-jobs](https://github.com/spinscale/dropwizard-jobs) - Quartz integration for Dropwizard.
* [dropwizard-sundial](https://github.com/timmolter/dropwizard-sundial) - Scheduled jobs in Dropwizard using Sundial.

### Guice

* [dropwizard-guice](https://github.com/HubSpot/dropwizard-guice) - Adds Guice support.
* [dropwizard-guicey](https://github.com/xvik/dropwizard-guicey) - Guice integration for Dropwizard.
* [dropwizard-guicier](https://github.com/HubSpot/dropwizard-guicier) - A Dropwizard bundle for Guice integration.

### Deployment

* [WizToWar](https://github.com/twilio/wiztowar) - Build WAR files from Dropwizard applications.
* [wizard-in-a-box](https://github.com/rvs-fluid-it/wizard-in-a-box) - Deploy Dropwizard applications as WAR files.

## Tutorials

* [Getting Started](http://www.dropwizard.io/0.9.2/docs/getting-started.html)
* [Official docs](http://www.dropwizard.io/0.9.2/docs/manual/index.html)
* [Dropwizard internals](http://www.dropwizard.io/0.9.2/docs/manual/internals.html)
* [Dropwizard Modules Directory](http://modules.dropwizard.io/)

## Guides

* [Serving Static Assets with DropWizard](https://spin.atomicobject.com/2014/10/11/serving-static-assets-with-dropwizard/)
* [Hooking up Custom Jersey Servlets in Dropwizard](https://spin.atomicobject.com/2015/03/30/jersey-servlets-dropwizard/)
* [Using Hibernate DAOs in DropWizard Tasks](https://spin.atomicobject.com/2015/02/03/dropwizard-hibernate-dao/)
* [Heroku for Highly Available Dropwizard Apps](http://techbytes.anuragkapur.com/2015/05/heroku-for-highly-available-dropwizard.html?m=1)
* [Enabling Newrelic for Dropwizard](http://kyleboon.org/blog/2013/09/23/newrelic-for-dropwizard/)
* [Application Health Checks with DropWizard](http://willhamill.com/2014/12/04/application-health-checks-with-dropwizard)
* [Using Hystrix with Dropwizard](http://christopher-batey.blogspot.com/2014/08/using-hystrix-with-dropwizard.html)
* [Using Dropwizard in combination with Elasticsearch](https://www.gridshore.nl/2014/05/15/using-dropwizard-combination-elasticsearch/)
* [Deploy a Dropwizard Unikernel to AWS](https://boxfuse.com/blog/dropwizard-aws.html)
* [Use Consul's KV store for Dropwizard settings](http://www.remmelt.com/post/use-consuls-kv-store-for-dropwizard-settings/)
* [Deploying Dropwizard on App Engine Flex](https://www.aytech.ca/blog/dropwizard-app-engine-flexible-env/)
* [Measuring the performance of your Dropwizard application](https://www.aytech.ca/blog/measuring-performance-dropwizard-application/)
* [Heroku + Gradle + Dropwizard](https://www.aytech.ca/blog/heroku-gradle-dropwizard/)

## Community

* [dropwizard-user](https://groups.google.com/forum/#!forum/dropwizard-user)
* [StackOverflow](https://stackoverflow.com/questions/tagged/dropwizard)
* [`@dropwizardio` on twitter](https://twitter.com/dropwizardio)

## Videos

* [Instant-ish Real Service Architecture](https://vimeo.com/37930578)
