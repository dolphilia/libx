---
title: "Awesome Play1"
description: "Play 1.x modules grouped by application feature, with recorded registration, Maven availability, registry-freeze updates, and reference guides."
licenseSource: "github-PerfectCarl-awesome-play1-readme-md"
---

# Awesome Play1

Explore Play 1.x modules for databases, deployment, security, templates, testing, and other application features, alongside reference guides. Descriptions and module metadata reflect the recorded source snapshot.

## Modules

The original list uses badges to describe registration, Maven availability, and updates after the module registry was frozen. Those details appear as text below; they describe the recorded source, including its historical installation instructions.

| Metadata | Meaning |
| --- | --- |
| Registered | Listed in [playframework.com/modules](http://www.playframework.com/modules); the module ID links to its registry entry. Example: [Carbonate](http://www.playframework.com/modules/carbonate). |
| Not registered | Absent from [playframework.com/modules](http://www.playframework.com/modules). The source requires an external repository in `dependencies.yml`; the project link is its official page. Example: [Mini-profiler](https://github.com/PerfectCarl/play-profiler). |
| Maven | Available in MavenCentral through [maven-play-plugin](https://code.google.com/p/maven-play-plugin). The Maven link points to the module’s repository entry. Example: [Database module artifact](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.db/play-db). |
| Updated after registry freeze | Updated after [playframework.com/modules](http://www.playframework.com/modules) was frozen; the link points to the module’s official page. Example: [Mini-profiler](https://github.com/PerfectCarl/play-profiler). |

### Database

- **[Carbonate](https://github.com/huljas/play-carbonate)** ([carbonate](http://www.playframework.com/modules/carbonate)) — Creates and runs database migrations, using Hibernate schema updates to generate migration SQL automatically. Details: [Blog post](http://huljas.github.com/code/2011/04/04/managing-database-with-playcarbonate.html). Registered.

- **[Chronostamp](https://github.com/omaroman/chronostamp)** ([chronostamp](http://www.playframework.com/modules/chronostamp)) — Adds and updates created_at and updated_at timestamp fields on models. Registered.

- **[Database module](http://github.com/pepite/play--database)** ([db](http://www.playframework.com/modules/db)) — Exports Play! domain models to DDL files and imports a database into Play! domain models. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.db/play-db).

- **[JpaGen](http://github.com/marcuspocus/jpagen)** ([jpagen](http://www.playframework.com/modules/jpagen)) — Generates JPA entities and composite keys when needed, from metadata or a file listing tables. Registered.

- **[Liquibase](https://github.com/7uc0/play-liquibase)** ([liquibase](http://www.playframework.com/modules/liquibase)) — Integrates Liquibase for database refactoring management. Details: [Liquibase](http://www.liquibase.org). Registered.

- **[logisima-yml](http://github.com/sim51/logisima-play-yml)** ([logisimayml](http://www.playframework.com/modules/logisimayml)) — Exports a database to a YML file. Registered.

- **[Database migration](http://github.com/dcardon/play-migrate)** ([migrate](http://www.playframework.com/modules/migrate)) — Maintains database versions for a project. Registered.

- **[Multiple Databases](http://github.com/dcardon/play-multidb)** ([multidb](http://www.playframework.com/modules/multidb)) — Scales an application across multiple databases with a common schema. Registered.

### Deployment

- **[Capistrano](https://github.com/mandubian/play-capistrano)** ([capistrano](http://www.playframework.com/modules/capistrano)) — Deploys remote applications with Capistrano, SSH, and VCS, and runs them in nohup or background mode. Registered.

- **[Cargo](https://github.com/dgouyette/play-cargo)** ([cargo](http://www.playframework.com/modules/cargo)) — Deploys applications remotely. Registered.

- **[CloudBees](https://github.com/hadashi/play-cloudbees)** ([cloudbees](http://www.playframework.com/modules/cloudbees)) — Integrates applications with CloudBees. Registered.

- **[CloudFoundry](https://github.com/bcourtine/play--cloudfondry)** ([cloudfoundry](http://www.playframework.com/modules/cloudfoundry)) — Automatically configures the database for an application deployed in CloudFoundry. Registered.

- **[Dotcloud](https://github.com/lsinger/play-dotcloud)** ([dotcloud](http://www.playframework.com/modules/dotcloud)) — Deploys applications to dotcloud. Registered.

- **[Google App Engine](http://github.com/guillaumebort/play-gae)** ([gae](http://www.playframework.com/modules/gae)) — Creates applications for the Google App Engine platform. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.gae/play-gae).

- **[Heroku](https://github.com/jamesward/play-heroku)** ([heroku](http://www.playframework.com/modules/heroku)) — Deploys applications on Heroku. Registered.

- **[Jelastic Deployment Support](https://github.com/Fameing/play-jelastic)** ([jelastic](http://www.playframework.com/modules/jelastic)) — Deploys applications on the Jelastic platform. Registered.

- **[Open eBay](https://bitbucket.org/kumaresan/openebay)** ([openebay](http://www.playframework.com/modules/openebay)) — Provides the basic integration needed to create an Open eBay application. Details: [Open eBay Application](http://apps.ebay.com/). Registered.

- **[Openshift](https://github.com/opensas/openshift)** ([openshift](http://www.playframework.com/modules/openshift)) — The source describes Openshift as Red Hat’s free cloud PaaS with automatic scaling for Java, Perl, PHP, Python, and Ruby applications. Registered.

- **[Q42's Google App Engine](https://github.com/Q42/play-gae)** (play-gae-q42) — The source describes this as a maintained Google App Engine integration module and recommends it in place of gae. Not registered.

- **[playapps.net](http://github.com/zenexity/play-playapps)** ([playapps](http://www.playframework.com/modules/playapps)) — A deployment environment designed to get Play applications running quickly and efficiently. Registered.

- **[ReverseProxy](https://github.com/omaroman/reverseproxy)** ([reverseproxy](http://www.playframework.com/modules/reverseproxy)) — Automatically switches between HTTP and HTTPS per page when the application runs behind a front end. Registered.

- **[Play Router Annotations](https://github.com/digiPlant/play-router-annotations)** ([router](http://www.playframework.com/modules/router)) — Adds routes through annotations so that routes can be declared in controllers. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.router/play-router).

- **[Stax](http://github.com/erwan/playstax)** ([stax](http://www.playframework.com/modules/stax)) — Deploys applications to the [Stax cloud hosting platform](http://www.stax.net). Registered.

- **[VHost](https://github.com/lyubo/play-vhost)** ([vhost](http://www.playframework.com/modules/vhost)) — Adds virtual hosts with a separate datasource and customizable application settings for each host. Registered.

### Injection/dependencies

- **[Constretto](https://github.com/zapodot/constretto-play)** ([constretto](http://www.playframework.com/modules/constretto)) — Integrates the Constretto configuration framework. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.constretto/play-constretto).

- **[Guice](http://github.com/pk11/play-guice-module)** ([guice](http://www.playframework.com/modules/guice)) — Injects Guice-managed components into applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.guice/play-guice).

- **[Ivy dependency management](http://github.com/pk11/play-ivy)** ([ivy](http://www.playframework.com/modules/ivy)) — Manages dependencies with Apache Ivy. Registered.

- **[Maven dependency management](http://github.com/wangyizhuo/play-maven)** ([maven](http://www.playframework.com/modules/maven)) — Manages dependencies with Apache Maven. Registered.

- **[Spring](http://github.com/pepite/Play--framework-Spring-module)** ([spring](http://www.playframework.com/modules/spring)) — Uses Spring-managed beans in Play! 1.x applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.spring/play-spring).

### Language

- **[Google Closure](http://code.google.com/p/mandubian-play-google-closure/)** ([googleclosure](http://www.playframework.com/modules/googleclosure)) — Integrates Google Closure tools with Play!. Registered.

- **[Google Web Toolkit](http://code.google.com/p/play-framework-gwt/)** ([gwt](http://www.playframework.com/modules/gwt)) — Provides a helper for integrating a GWT UI with Play as the application server. Registered.

- **[GWT2](http://github.com/vbuzzano/play-gwt2)** ([gwt2](http://www.playframework.com/modules/gwt2)) — Integrates Play with GWT. Registered.

- **[Scala](http://www.playframework.com/modules/scala)** ([scala](http://www.playframework.com/modules/scala)) — Uses Scala for applications while retaining key properties of the Play framework. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.scala/play-scala).

- **[Scala Gen](https://github.com/asinghal/Play-ScalaGen)** ([scalagen](http://www.playframework.com/modules/scalagen)) — Provides Scala code generators for the Play! framework. Registered.

- **[Scala secure](https://github.com/asinghal/Play-ScalaSecure)** ([scalasecure](http://www.playframework.com/modules/scalasecure)) — Provides basic authentication and authorization for Play applications written in Scala. Registered.

### Messaging/events

- **[Akka support](http://github.com/dwhitney/akka)** ([akka](http://www.playframework.com/modules/akka)) — Configures Akka through the Play! framework’s conf/application.conf file. Details: [akka](http://akkasource.org). Registered.

- **[Camel](https://github.com/marcuspocus/play-camel)** ([camel](http://www.playframework.com/modules/camel)) — Provides Enterprise Integration Patterns (EIP) and messaging for Play!. Registered.

- **[Pusher](https://github.com/regisbamba/Play-Pusher)** ([pusher](http://www.playframework.com/modules/pusher)) — Adds real-time functionality with Pusher using WebSockets. Details: [Pusher](http://www.pusher.com). Registered.

- **[RabbitMQ](http://geeks.aretotally.in/rabbitmq-module-for-play-framework)** ([rabbitmq](http://www.playframework.com/modules/rabbitmq)) — Integrates RabbitMQ, described by the source as a highly available, scalable, lightweight messaging system. Registered.

### Monitoring

- **[Accesslog](https://github.com/briannesbitt/play-accesslog)** ([accesslog](http://www.playframework.com/modules/accesslog)) — Logs requests in a form similar to nginx or Apache access logs. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.accesslog/play-accesslog).

- **[BetterLogs](https://github.com/sgodbillon/BetterLogs)** ([betterlogs](http://www.playframework.com/modules/betterlogs)) — Adds class and method names, the call location and signature, filename, and line number to default logs. Registered.

- **[InfoPlay](http://code.google.com/p/infoplay/)** ([infoplay](http://www.playframework.com/modules/infoplay)) — Displays information that the source compares to PHP’s infophp. Registered.

- **[Jpastats](https://github.com/eamelink/play-jpastats/)** ([jpastats](http://www.playframework.com/modules/jpastats)) — Records the number of database queries executed during a request. Registered.

- **[Log4Play](https://github.com/feliperazeek/log4play)** ([log4play](http://www.playframework.com/modules/log4play)) — Provides a log4j appender that publishes log entries to an EventStream. Registered.

- **[Hibernate statistics](https://github.com/francisdb/play-hibernate-statistics)** (play-hibernate-statistics) — Displays Hibernate statistics through MBeans. Not registered.

- **[Playerrors](https://github.com/marius0/playerrors)** ([playerrors](http://www.playframework.com/modules/playerrors)) — Collects and reports errors in production web applications to help fix them before visitors report them. Registered.

- **[Mini-profiler](https://github.com/PerfectCarl/play-profiler)** (profiler) — Displays a mini profiler in an application. Not registered.

- **[RecordTracking](https://github.com/omaroman/recordtracking)** ([recordtracking](http://www.playframework.com/modules/recordtracking)) — Tracks record creation, updates, and deletion without intrusive changes. Registered.

- **[Statsd](https://github.com/rkroll/play-statsd/)** ([statsd](http://www.playframework.com/modules/statsd)) — Wraps StatsD for statistical aggregation within Play. Details: [StatsD](https://github.com/etsy/statsd). Registered.

### Persistence

- **[Associations](https://github.com/pareis/play-associations)** ([associations](http://www.playframework.com/modules/associations)) — Reduces the code needed to manage bidirectional associations. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.associations/play-associations).

- **[JCR for Play!](https://github.com/mfornos/Cream)** ([cream](http://www.playframework.com/modules/cream)) — Integrates Apache Jackrabbit (JCR 2.0) with Play. Registered.

- **[EBean ORM support](https://github.com/lyubo/play-ebean)** ([ebean](http://www.playframework.com/modules/ebean)) — Adds Ebean ORM to Play!. The source states that it is still in a very experimental phase. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.ebean/play-ebean).

- **[MongoDB](http://github.com/louth/play-mongo)** ([mongo](http://www.playframework.com/modules/mongo)) — Uses models stored in MongoDB. The source points to Morphia for more complex use cases. Registered.

- **[MongoDB Integration](http://github.com/greenlaw110/play-morphia)** ([morphia](http://www.playframework.com/modules/morphia)) — Integrates MongoDB access with Play’s Model interface. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.morphia/play-morphia); [Updated after registry freeze](http://github.com/greenlaw110/play-morphia).

- **[MyBatisPlay](https://github.com/eamelink/play-navigation/wiki)** ([mybatisplay](http://www.playframework.com/modules/mybatisplay)) — Supports the MyBatis persistence framework. Registered.

- **[logisima-neo4j](https://github.com/sim51/logisima-play-neo4j)** ([neo4j](http://www.playframework.com/modules/neo4j)) — Integrates the Neo4j database into Play! projects. Registered.

- **[Objectify](http://code.google.com/p/play-framework-objectify/)** ([objectify](http://www.playframework.com/modules/objectify)) — Provides a flexible data-access abstraction for Google App Engine/J. Registered.

- **[OrientDB](https://github.com/mfornos/orientdb)** ([orientdb](http://www.playframework.com/modules/orientdb)) — Provides OrientDB support for the Play! framework. Registered.

- **[Redis](https://github.com/tkral/play-redis)** ([redis](http://www.playframework.com/modules/redis)) — Uses Redis in Play! applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.redis/play-redis).

- **[Riak](https://github.com/julienba/play-riak/)** ([riak](http://www.playframework.com/modules/riak)) — Uses riak-java-client in the Play! style. Registered.

- **[S3Blobs](https://github.com/jamesward/S3-Blobs-module-for-Play)** ([s3blobs](http://www.playframework.com/modules/s3blobs)) — Reads and writes Amazon S3 files from JPA entities. Registered.

- **[Siena](http://github.com/mandubian/play-siena)** ([siena](http://www.playframework.com/modules/siena)) — Adds Siena support to map Java entities to GAE, MySQL, PostgreSQL, or H2 from a Play application. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.siena/play-siena); [Updated after registry freeze](http://github.com/mandubian/play-siena).

- **[Twig](https://github.com/netmau5/Play-Twig)** ([twig](http://www.playframework.com/modules/twig)) — Extends Google App Engine Datastore access for Play applications with a fluid API, in-memory joins, and asynchronous queries. Registered.

### Presentation

- **[CoffeeScript](https://github.com/robfig/play-coffee)** ([coffee](http://www.playframework.com/modules/coffee)) — Adds CoffeeScript support for generating JavaScript, with Java and Scala support. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.coffee/play-coffee).

- **[Excel](http://github.com/greenlaw110/play-excel)** ([excel](http://www.playframework.com/modules/excel)) — Generates Excel reports from templates. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.excel/play-excel).

- **[Formee](https://github.com/omaroman/formee)** ([formee](http://www.playframework.com/modules/formee)) — Helps write forms and add client-side and server-side validation. Registered.

- **[Minimize javascript/css files](http://github.com/greenlaw110/greenscript)** ([greenscript](http://www.playframework.com/modules/greenscript)) — Minimizes JavaScript and CSS files, as indicated by the source’s link label. Registered.

- **[HTML5 Validation](https://github.com/oasits/play-html5-validation)** ([html5validation](http://www.playframework.com/modules/html5validation)) — Uses HTML5 attributes for client-side form validation based on Play model annotations. Registered.

- **[Jqueryui](https://github.com/lunatech-labs/play-module-jqueryui)** ([jqueryui](http://www.playframework.com/modules/jqueryui)) — Provides working examples of jQuery UI widgets integrated with a Play application. Registered.

- **[JQuery Validation](https://github.com/murz/play-jqvalidate)** ([jqvalidate](http://www.playframework.com/modules/jqvalidate)) — Provides client-side form validation with jQuery based on model annotations. Registered.

- **[Jqvalidation](http://code.google.com/p/jqvalidate-play-framework/)** ([jqvalidation](http://www.playframework.com/modules/jqvalidation)) — Provides a jQuery validation API with Ajax validation per field or per form. Registered.

- **[Less module](https://github.com/lunatech-labs/play-module-less)** ([less](http://www.playframework.com/modules/less)) — Converts Less to CSS and handles error reporting in Play applications. Details: [less](http://lesscss.org/). Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.less/play-less).

- **[Markdown](https://github.com/orefalo/play-markdown)** ([markdown](http://www.playframework.com/modules/markdown)) — Adds Markdown content to applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.markdown/play-markdown).

- **[Menu](http://github.com/greenlaw110/play-menu)** ([menu](http://www.playframework.com/modules/menu)) — Simplifies navigation menu implementation. Registered.

- **[Navigation](https://bitbucket.org/hlassiege/play-nemrod)** ([navigation](http://www.playframework.com/modules/navigation)) — Defines and displays navigation menus in Play applications. Registered.

- **[Paginate](http://github.com/lmcalpin/Play--Paginate)** ([paginate](http://www.playframework.com/modules/paginate)) — Replaces #{list} tags with support for pagination. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.paginate/play-paginate).

- **[PDF module](http://github.com/pepite/play--pdf)** ([pdf](http://www.playframework.com/modules/pdf)) — Renders PDF documents from HTML templates using the YaHP Converter library. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.pdf/play-pdf).

- **[PegDown Markdown](https://github.com/jagregory/play-pegdown)** ([pegdown](http://www.playframework.com/modules/pegdown)) — Integrates the pegdown Markdown processor with Play applications. Details: [Markdown](https://github.com/sirthias/pegdown). Registered.

- **[Minimize javascript/css files](http://github.com/dirkmc/press)** ([press](http://www.playframework.com/modules/press)) — Minimizes JavaScript, CSS, and Less with an implementation designed to be transparent to application developers. Registered.

- **[Syntactically Awesome Stylesheets](http://github.com/guillaumebort/play-sass)** ([sass](http://www.playframework.com/modules/sass)) — Adds Sass support for CSS with nested rules, variables, mixins, and other features in a concise syntax. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.sass/play-sass).

- **[Table](https://github.com/julienrf/play-table)** ([table](http://www.playframework.com/modules/table)) — Simplifies the code needed to display data in HTML tables. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.table/play-table).

- **[Tabula Rasa](https://github.com/schaloner/tabula-rasa)** ([tabularasa](http://www.playframework.com/modules/tabularasa)) — Supports tables that users can customize in views. Registered.

- **[Twitterbootstrap](http://www.playframework.com/modules/twitterbootstrap)** ([twitterbootstrap](http://www.playframework.com/modules/twitterbootstrap)) — Bundles the twitter-bootstrap style kit and Play Less plugin to simplify .less editing, with changes applied dynamically. Registered.

### REST

- **[Jersey](https://bitbucket.org/psartini/play-jersey)** ([jersey](http://www.playframework.com/modules/jersey)) — Integrates Jersey with the Play! framework. Registered.

- **[RESTEasy Play! module](http://www.lunatech-labs.com/open-source/resteasy-play-module)** ([resteasy](http://www.playframework.com/modules/resteasy)) — Defines JAX-RS RESTful web services in Play! using RESTEasy. Registered.

- **[RESTEasy CRUD module](http://www.lunatech-labs.com/open-source/resteasy-crud-play-module)** ([resteasycrud](http://www.playframework.com/modules/resteasycrud)) — Automatically generates RESTful CRUD resources for a model. Registered.

- **[Swagger](https://github.com/wordnik/swagger-play)** ([swagger](http://www.playframework.com/modules/swagger)) — Creates self-documenting metadata for REST APIs to enable code generation, a UI sandbox, and a test framework. Registered.

### Scaffolding

- **[CRUD for Siena](https://github.com/mandubian/play-crud-siena)** ([crudsiena](http://www.playframework.com/modules/crudsiena)) — Provides a usable web interface for Siena model objects with additional features beyond the default crud module. Registered.

- **[Mocha](https://bitbucket.org/blobsmith/mocha/overview)** ([mocha](http://www.playframework.com/modules/mocha)) — Implements the mocha UI JavaScript interface for Play!. Registered.

- **[Basic bootstrap scaffolding](https://github.com/phaus/play-bootstrap)** (play-bootstrap) — Creates Bootstrap-based applications, derived from the default scaffold module. Not registered.

- **[Scaffold](http://github.com/lmcalpin/Play--Scaffold)** ([scaffold](http://www.playframework.com/modules/scaffold)) — Generates basic project scaffolding from JPA entities or entities named Senia in the source. Registered.

### Search

- **[ElasticSearch](http://geeks.aretotally.in/play-framework-module-elastic-search-distributed-searching-with-json-http-rest-or-java)** ([elasticsearch](http://www.playframework.com/modules/elasticsearch)) — Provides an embedded Elastic Server instance for rapid development with Elastic Search, a distributed search solution based on Apache Lucene. Registered.

- **[Search](http://github.com/jfp/play-search/)** ([search](http://www.playframework.com/modules/search)) — Adds basic full-text search to JPA models using Lucene. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.search/play-search).

### Security

- **[BrowserID](https://github.com/orefalo/play-browserid)** ([browserid](http://www.playframework.com/modules/browserid)) — The source describes BrowserID as an experimental sign-in method intended to be safe and easy for users and developers. Registered.

- **[logisima-cas](http://github.com/sim51/logisima-play-cas)** ([cas](http://www.playframework.com/modules/cas)) — Provides a CAS client for Play! applications. Registered.

- **[Casino](https://github.com/reyez/casino-play)** ([casino](http://www.playframework.com/modules/casino)) — Integrates sign-up and password recovery into applications. Registered.

- **[Deadbolt](https://github.com/schaloner/deadbolt)** ([deadbolt](http://www.playframework.com/modules/deadbolt)) — Provides authorization to define access rights for controller methods or parts of a view. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.deadbolt/play-deadbolt).

- **[Facebook connect](https://github.com/murz/play-fbconnect)** ([fbconnect](http://www.playframework.com/modules/fbconnect)) — Integrates Facebook-based authentication into Play applications. Registered.

- **[Force.com](https://github.com/jesperfj/play-force)** ([force](http://www.playframework.com/modules/force)) — Integrates Play! applications with Force.com through OAuth authentication and a REST API adapter. Registered.

- **[LinkedIn OAuth Authentication](http://geeks.aretotally.in/projects/play-framework-linkedin-module)** ([linkedin](http://www.playframework.com/modules/linkedin)) — Integrates LinkedIn OAuth authentication into Play applications. Registered.

- **[OAuth Client](http://github.com/erwan/playoauthclient)** ([oauth](http://www.playframework.com/modules/oauth)) — Provides tools to connect to OAuth providers such as Twitter or Google. Registered.

- **[Recaptcha](https://github.com/orefalo/play-recaptcha)** ([recaptcha](http://www.playframework.com/modules/recaptcha)) — Integrates the reCaptcha.com challenge-response test into applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.recaptcha/play-recaptcha).

- **[Secure Permissions](http://www.lunatech-labs.com/open-source/secure-permissions-play-module)** ([securepermissions](http://www.playframework.com/modules/securepermissions)) — Extends the default secure module with permission checks based on Seam Framework rules using Drools. Registered.

- **[SecureSocial](http://jaliss.github.com/securesocial/)** ([securesocial](http://www.playframework.com/modules/securesocial)) — Adds an authentication UI for services using OAuth1, OAuth2, OpenID, or OpenID+OAuth hybrid protocols. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.securesocial/play-securesocial).

- **[Shibboleth](https://github.com/TAMULib/Shibboleth-play)** ([shibboleth](http://www.playframework.com/modules/shibboleth)) — Enables users to log in to Play! applications through Shibboleth. Registered.

### Template

- **[Faster Groovy Templates](https://github.com/mbknor/faster-groovy-templates)** ([fastergt](http://www.playframework.com/modules/fastergt)) — Replaces the default Groovy template implementation with GT-Engine, which the source describes as faster and less memory-intensive. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.fastergt/play-fastergt).

- **[Japid Template Engine](http://github.com/branaway/Japid)** ([japid](http://www.playframework.com/modules/japid)) — A pure Java, statically typed template engine for Play! 1.2.x, described by the source as fast. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.japid/play-japid).

- **[Mustache](https://github.com/murz/play-mustache)** ([mustache](http://www.playframework.com/modules/mustache)) — Defines logic-less template snippets for server-side Play! views and client-side JavaScript. Registered.

- **[Rythm Template Engine](https://github.com/greenlaw110/play-rythm)** ([rythm](http://www.playframework.com/modules/rythm)) — Provides PlayRythm, a Razor-like template engine. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.rythm/play-rythm); [Updated after registry freeze](https://github.com/greenlaw110/play-rythm).

- **[Scalate](http://github.com/pk11/play-scalate)** ([scalate](http://www.playframework.com/modules/scalate)) — Adds Scalate template engine support. Details: [Scalate](http://scalate.fusesource.org). Registered.

- **[Thymeleaf](https://github.com/choreo/play-thymeleaf)** ([thymeleaf](http://www.playframework.com/modules/thymeleaf)) — Uses Thymeleaf 2.0 as a template engine in Play. Details: [Thymeleaf 2.0](http://www.thymeleaf.org/). Registered.

### Testing

- **[Cobertura](http://github.com/julienba/play-cobertura)** ([cobertura](http://www.playframework.com/modules/cobertura)) — Integrates Cobertura to calculate the percentage of code exercised by tests (test coverage). Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.cobertura/play-cobertura).

- **[HttpMock](http://github.com/zenexity/play--httpmock)** ([httpmock](http://www.playframework.com/modules/httpmock)) — Caches and emulates web service requests to work around lag, denial of service, and HTTP errors during development. Registered.

- **[Mockito](https://github.com/eamelink/play-mockito)** ([mockito](http://www.playframework.com/modules/mockito)) — Provides the Mockito mocking framework. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.mockito/play-mockito).

- **[QUnit](https://github.com/irregular-at/play-qunit)** ([qunit](http://www.playframework.com/modules/qunit)) — The source describes the QUnit module as integrating JUnit JavaScript tests with Play!. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.qunit/play-qunit).

- **[Spock tests](http://github.com/peterlundberg/play-spock-tests)** ([spocktests](http://www.playframework.com/modules/spocktests)) — Runs Spock specifications and writes BDD-style tests with Groovy’s expressive syntax, still wrapped as JUnit tests. Details: [Spock](https://code.google.com/p/spock/). Registered.

- **[spring tester](https://github.com/digiarnie/springtester)** ([springtester](http://www.playframework.com/modules/springtester)) — Automatically injects Mockito mocks in tests for Play applications wired with the Spring module. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.springtester/play-springtester).

- **[Alternative Test module](https://github.com/GuyMograbi/play_test_module)** ([tests](http://www.playframework.com/modules/tests)) — The source presents this test module as a way to write tests faster, more cleanly, and with reusable code. Registered.

- **[Webdrive](https://github.com/rkaippully/play-webdrive)** ([webdrive](http://www.playframework.com/modules/webdrive)) — Adds Selenium 2 testing support to Play. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.webdrive/play-webdrive).

### Translation

- **[I18ntools](http://github.com/naholyr/i18ntools)** ([i18ntools](http://www.playframework.com/modules/i18ntools)) — Adds tools that simplify i18n in Play! projects. Registered.

- **[@messages](https://github.com/huljas/play-messages)** ([messages](http://www.playframework.com/modules/messages)) — Provides a web tool to manage application localizations. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.messages/play-messages).

- **[Nemrod](https://github.com/sim51/logisima-play-neo4j)** ([nemrod](http://www.playframework.com/modules/nemrod)) — Automatically imports and exports application translations to and from a Nemrod instance. Registered.

- **[Play-i18ned](https://github.com/phaus/play-i18ned)** (play-i18ned) — Converts Excel sheets to default i18n files and vice versa. Not registered.

### Other modules

- **[Bespin online editor](http://github.com/erwan/playbespin)** ([bespin](http://www.playframework.com/modules/bespin)) — Edits all application source files directly in the browser with the Bespin web code editor. Registered.

- **[Bhave](http://bhave.org/)** ([bhave](http://www.playframework.com/modules/bhave)) — Integrates bhave, a web-based behavior-driven development (BDD) framework for web applications. Details: [bhave](http://bhave.org/). Registered.

- **[Cheese](https://github.com/lmcalpin/Play--Cheese)** ([cheese](http://www.playframework.com/modules/cheese)) — Provides a simplified API for integrating the CheddarGetter subscription management service. Registered.

- **[Cms](http://code.google.com/p/play-cms/)** ([cms](http://www.playframework.com/modules/cms)) — Provides a simple embedded CMS. Registered.

- **[Content Negotiation](http://github.com/oasits/play-content-negotiation)** ([cnm](http://www.playframework.com/modules/cnm)) — Uses annotations to support content types such as VCard and Atom/RSS feeds that are not directly supported by default. Registered.

- **[External Config](https://github.com/rugbyhead/externalconfig)** ([externalconfig](http://www.playframework.com/modules/externalconfig)) — Loads external configuration and properties files to simplify configuration for applications deployed in a WAR. Registered.

- **[Feature Flags](http://code.google.com/p/play-featureflags)** ([featureflags](http://www.playframework.com/modules/featureflags)) — Adds feature flags that can be turned on or off at runtime through an administration screen. Registered.

- **[Google Checkout](https://github.com/jagregory/play-google-checkout)** ([googlecheckout](http://www.playframework.com/modules/googlecheckout)) — Integrates Play applications with Google Checkout as a merchant. Registered.

- **[Gravatar](https://github.com/mbarbieri/play-gravatar)** ([gravatar](http://www.playframework.com/modules/gravatar)) — Integrates Gravatar with Play applications. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.gravatar/play-gravatar).

- **[Hazelcast](https://github.com/marcuspocus/hazelcast)** ([hazelcast](http://www.playframework.com/modules/hazelcast)) — Provides a drop-in replacement for Play’s EhCacheImpl or MemcachedImpl. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.hazelcast/play-hazelcast).

- **[Postmark](https://github.com/FrostDigital/play-postmark)** ([postmark](http://www.playframework.com/modules/postmark)) — Integrates postmarkapp.com to handle outgoing email. Registered; [Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.postmark/play-postmark).

- **[UserAgentCheck](https://github.com/orefalo/play-useragentcheck)** ([useragentcheck](http://www.playframework.com/modules/useragentcheck)) — Displays a banner to notify users that their browser is outdated. Registered.

- **[Play1-Chart](https://github.com/sant0s/play1-chart)** ([play1-chart](http://sant0s.github.io/play1-chart/)) — Generates chart images. Not registered.

## Reference guides

- [Mavenized modules](https://code.google.com/p/maven-play-plugin/wiki/MavenizedModules) — A list of Mavenized modules and [instructions for using them](https://code.google.com/p/maven-play-plugin/wiki/Usage).

- [Using Play’s controller](http://www.javabeat.net/using-controllers-in-play-framework/) — A guide covering caching, expiration, and eTags.

- [Luo](https://github.com/greenlaw110)’s `cache4` [annotation](http://www.playframework.com/modules/rythm-1.0.0-20121210/integration#cache4) — A reference for using the annotation.

## Related lists

The original list was inspired by [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python), [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks), and [awesome-ruby](https://github.com/markets/awesome-ruby).
