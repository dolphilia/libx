---
title: Awesome Pyramid
description: >-
  Pyramid extension packages, project templates, example applications, CMSs,
  books, videos and community resources.
licenseSource: github-uralbash-awesome-pyramid-readme-md
---
# Awesome Pyramid

Pyramid is a Python web framework. This list covers extension packages for authentication, APIs, storage and other application features, followed by project templates, example applications, CMSs and learning resources. It also includes books, videos, conferences and community links recorded in the source.

## Admin interface

* [pyramid_formalchemy](https://github.com/FormAlchemy/pyramid_formalchemy) -
  Provides a CRUD interface for Pyramid based on FormAlchemy.
* [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) -    Pyramid administration and CRUD interface that allows overrides and customization, similar to django.contrib.admin but with a different resource backend. Its [architecture](http://pyramid-sacrud.readthedocs.io/pages/contribute/architecture.html) uses resources and traversal to support different use cases.
    * [ps_alchemy](https://github.com/sacrud/ps_alchemy) - extension for pyramid_sacrud
      which provides SQLAlchemy models.
    * [ps_tree](https://github.com/sacrud/ps_tree) - extension for
      [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) which displays
      records as a tree and works with models from
      [sqlalchemy_mptt](https://github.com/uralbash/sqlalchemy_mptt).
* [Websauna](https://websauna.org/docs/) - a full stack application framework for Pyramid

## Asset Management

* [pyramid_webassets](https://github.com/sontek/pyramid_webassets) - Pyramid
  extension for working with the webassets library.
* [pyramid_bowerstatic](https://github.com/mrijken/pyramid_bowerstatic) -
  integration of Bowerstatic in Pyramid

## Async

* [aiopyramid](https://github.com/housleyjk/aiopyramid) - Run pyramid using
  asyncio.
* [gevent-socketio](https://github.com/abourget/gevent-socketio) -
  gevent-socketio is a Python implementation of the Socket.IO protocol,
  developed originally for Node.js by LearnBoost and then ported to other
  languages.
* [Stargate](https://github.com/boothead/stargate) - Stargate is a package for
  adding WebSockets support to pyramid applications using the
  eventlet library for long running connections.
* [channelstream](https://github.com/AppEnlight/channelstream) - websocket communication server (gevent).

## Authentication

* [pyramid_ldap](https://github.com/Pylons/pyramid_ldap) - an LDAP
  authentication policy for Pyramid.
* [pyramid_ldap3](https://github.com/Cito/pyramid_ldap3) - Provides LDAP authentication
  services for your Pyramid application based on the ldap3 package.
* [pyramid_who](https://github.com/Pylons/pyramid_who) - Authentication policy
  for pyramid using repoze.who 2.0 API.
* [velruse](https://github.com/bbangert/velruse) - Simplifying third-party
  authentication for web applications. It supports most authentication
  [providers](https://github.com/bbangert/velruse/tree/master/velruse/providers).
* [pyramid_simpleauth](https://github.com/thruflo/pyramid_simpleauth) - session
  based authentication and role based security for Pyramid application
* [Python Social Auth](https://github.com/omab/python-social-auth) - Social
  authentication/registration mechanism with support for a large number of
  [providers](https://github.com/omab/python-social-auth#auth-providers).
* [Authomatic](https://github.com/authomatic/authomatic) -  Authorization and authentication client library for Python web applications.
* [apex](https://github.com/cd34/apex) - Toolkit for Pyramid, a Pylons Project,
  to add Authentication and Authorization using Velruse (OAuth) and/or a local
  database, CSRF, ReCaptcha, Sessions, Flash messages and I18N.
* [pyramid_authsanity](https://github.com/usingnamespace/pyramid_authsanity) -
  Authentication policy with a backend intended to simplify secure authentication.
* [pyramid_jwt](https://github.com/wichert/pyramid_jwt) - This package
  implements a Pyramid authentication policy using [JSON Web Tokens].
  The standard ([RFC 7519]) is often used to secure backend APIs.
  [PyJWT] handles JWT encoding and decoding.
* [pyramid_ipauth](https://github.com/mozilla-services/pyramid_ipauth) -
  Pyramid authentication policy based on remote IP address.

  [JSON Web Tokens]: https://jwt.io/
  [RFC 7519]: https://tools.ietf.org/html/rfc7519
  [PyJWT]: https://pyjwt.readthedocs.io/en/latest/

## Authorization

* [ziggurat_foundations](https://github.com/ergo/ziggurat_foundations) -
  Framework-independent SQLAlchemy classes for building applications that require permissions.
* [pyramid_multiauth](https://github.com/mozilla-services/pyramid_multiauth) -
  An authentication policy for Pyramid that proxies to a stack of other
  authentication policies.
* [pyramid_authstack](https://github.com/wichert/pyramid_authstack) -  Use
  multiple authentication policies with Pyramid.
* [horus](https://github.com/Pylons/horus) - User registration and login system
  for the Pyramid Web Framework.
* [pyramid_yosai](https://github.com/YosaiProject/pyramid_yosai) - Pyramid integration with a Python security framework offering authorization (RBAC permissions and roles), authentication (2FA with TOTP), session management and an extensive audit trail. https://yosaiproject.github.io/yosai/

## Caching & Session

* [pyramid_beaker](https://github.com/Pylons/pyramid_beaker) - A Beaker session
  factory backend for Pyramid, also cache configurator.
    * [Why You'll Want to Switch to
      dogpile.cache](http://techspot.zzzeek.org/2012/04/19/using-beaker-for-caching-why-you-ll-want-to-switch-to-dogpile.cache/)
* [pyramid_redis_sessions](https://github.com/ericrasmussen/pyramid_redis_sessions) -
  Pyramid web framework session factory backed by Redis.
* [pyramid_dogpile_cache](https://github.com/moriyoshi/pyramid_dogpile_cache) -
  dogpile.cache configuration package for Pyramid
* [pyramid_sessions](https://github.com/joulez/pyramid_sessions) - Multiple
  session support for the Pyramid Web Framework
* [pyramid_nacl_session](https://github.com/Pylons/pyramid_nacl_session) -
  defines an encrypting, pickle-based cookie serializer, using
  [PyNaCl](http://pynacl.readthedocs.io/en/latest/secret/) to generate the
  symmetric encryption for the cookie state.

## Debugging

* [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) -
  provides a debug toolbar useful while you're developing your Pyramid
  application.
* [pyramid_exclog](https://github.com/Pylons/pyramid_exclog) - a package which
  logs exceptions from Pyramid applications.
* [pyramid_debugtoolbar_dogpile](https://github.com/jvanasco/pyramid_debugtoolbar_dogpile) -
  dogpile caching support for pyramid_debugtoolbar
* [pyramid_ipython](https://github.com/Pylons/pyramid_ipython) - IPython
  bindings for Pyramid's pshell
* [pyramid_bpython](https://github.com/Pylons/pyramid_bpython) - bpython
  bindings for Pyramid's pshell
* [pyramid_pycallgraph](https://github.com/disko/pyramid_pycallgraph) - Pyramid tween to generate a callgraph image for every request

## Email

* [pyramid_mailer](https://github.com/Pylons/pyramid_mailer) - A package for
  sending email from your Pyramid application.
* [pyramid_marrowmailer](https://github.com/domenkozar/pyramid_marrowmailer) -
  Pyramid integration package for marrow.mailer, formerly known as TurboMail
* [pyramid_mailgun](https://github.com/evannook/pyramid_mailgun) - Mailgun integration for Pyramid framework.

## Forms

* [deform](https://github.com/Pylons/deform) - is a Python HTML form generation
  library.
* [colander](https://github.com/Pylons/colander) - A
  serialization/deserialization/validation library for strings, mappings and
  lists.
* [WTForms](https://github.com/wtforms/wtforms) - is a flexible forms
  validation and rendering library for python web development.
* [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) -
  helps you to auto-generate Colander schemas that are based on SQLAlchemy
  mapped classes.
* [marshmallow](https://github.com/marshmallow-code/marshmallow) - A
  lightweight library for converting complex objects to and from simple Python
  datatypes (i.e. (de)serialization and validation).

## Media-Management

* [pyramid_elfinder](https://github.com/uralbash/pyramid_elfinder) - Connector for the elfinder file manager, written for Pyramid.
* [pyramid_storage](https://github.com/danjac/pyramid_storage) - This is a package for handling file uploads in your Pyramid framework application.

## RESTful API

* [cornice](https://github.com/Cornices/cornice) - provides helpers to
  build & document REST-ish Web Services with Pyramid, with default
  behaviors. It takes care of following the HTTP specification in an automated
  way where possible.
* [rest_toolkit](https://github.com/wichert/rest_toolkit) - is a Python package
  which provides tools to build REST servers. It is built on
  top of Pyramid, but you do not need to know much about Pyramid to use
  rest_toolkit.
* [pyramid_royal](https://github.com/hadrien/pyramid_royal) - Royal is a
  pyramid extension which eases writing RESTful web applications.
* [cliquet](https://github.com/mozilla-services/cliquet) - Cliquet is a toolkit
  to ease the implementation of HTTP microservices, such as data-driven REST
  APIs.
* [webargs](https://github.com/sloria/webargs) - A library for parsing
  HTTP request arguments, with built-in support for popular web frameworks.
* [ramses](https://github.com/ramses-tech/ramses) - Generate a RESTful API using
  RAML. It uses Nefertari which provides ElasticSearch-powered views.
* [nefertari](https://github.com/ramses-tech/nefertari) -  Nefertari is a REST
  API framework sitting on top of Pyramid and ElasticSearch.
* [pyramid_swagger](https://github.com/striglia/pyramid_swagger) - Convenient
  tools for using Swagger to define and validate your interfaces in a Pyramid webapp. (Swagger 2.0 document)
* [pyramid-openapi3](https://github.com/niteoweb/pyramid_openapi3) - Validate Pyramid views against an OpenAPI 3.0 document. Similar to pyramid_swagger but for OpenAPI 3.0.
* [pyramid_jsonapi](https://github.com/colinhiggs/pyramid-jsonapi) - Automatically
  create a [JSON API](http://jsonapi.org/) standard API from a database using the
  sqlAlchemy ORM and pyramid framework.
* [pyramid_apispec](https://github.com/ergo/pyramid_apispec) - Create an OpenAPI
  specification file using apispec and Marshmallow schemas.

## Search

* [hypatia](https://github.com/Pylons/hypatia) - A Python indexing and
  searching system.

## Services

* [pyramid_sms](https://github.com/websauna/pyramid_sms) -
   SMS services for Pyramid web framework.

## Settings

* [pyramid_zcml](https://github.com/Pylons/pyramid_zcml) - Zope Configuration
  Markup Language configuration support for Pyramid.
* [pyramid_services](https://github.com/mmerickel/pyramid_services) - defines a
  pattern and helper methods for accessing a pluggable service layer from
  within your Pyramid apps.
* [hupper](https://github.com/Pylons/hupper) - A process monitor/reloader for developers
    that can watch files for changes and restart the process.

## Storage

* [pyramid_tm](https://github.com/Pylons/pyramid_tm) - Centralized transaction
  management for Pyramid applications (without middleware).
* [zope.sqlalchemy](https://github.com/zopefoundation/zope.sqlalchemy) -
  Integration of SQLAlchemy with transaction management.
    * [What the Zope Transaction Manager Means To Me (and
      you)](https://metaclassical.com/what-the-zope-transaction-manager-means-to-me-and-you/)
* [pyramid_sqlalchemy](https://github.com/wichert/pyramid_sqlalchemy) -
  provides some basic glue to facilitate using SQLAlchemy with Pyramid.
* [pyramid_zodbconn](https://github.com/Pylons/pyramid_zodbconn) - ZODB
  Database connection management for Pyramid.
* [pyramid_mongoengine](https://github.com/marioidival/pyramid_mongoengine) -
  pyramid-mongoengine package based on flask-mongoengine
* [pyramid_mongodb](https://github.com/niallo/pyramid_mongodb) -
  Basic Pyramid Scaffold to easily use MongoDB for persistence with the Pyramid Web framework
* [pyramid-excel](https://github.com/pyexcel-webwares/pyramid-excel) - pyramid-excel is based on [pyexcel](https://github.com/pyexcel/pyexcel) and makes it easy to consume/produce information stored in excel files over HTTP protocol as well as on file system. This library can turn the excel data into a list of lists, a list of records(dictionaries), dictionaries of lists. And vice versa. Hence it lets you focus on data in Pyramid based web development, instead of file formats.

## Task Queue

* [pyramid_celery](https://github.com/sontek/pyramid_celery) - Pyramid
  configuration with celery integration. Allows you to use pyramid .ini files
  to configure celery and have your pyramid configuration inside celery tasks.
* [pyramid_rq](https://github.com/wichert/pyramid_rq) - Support using the rq
  queueing system with pyramid. Tools to monitor and use
  [RQ](http://python-rq.org) in your Pyramid projects.

## Templates

* [pyramid_mako](https://github.com/Pylons/pyramid_mako) - Mako templating
  system bindings for the Pyramid web framework.
* [pyramid_chameleon](https://github.com/Pylons/pyramid_chameleon) - Chameleon
  template compiler for pyramid.
* [pyramid_jinja2](https://github.com/Pylons/pyramid_jinja2) - Jinja2
  templating system bindings for the Pyramid web framework.
* [Tonnikala](https://github.com/ztane/Tonnikala) - Python templating engine
  with Pyramid integration
* [Kajiki](https://github.com/nandoflorestan/kajiki) - provides fast well-formed XML templates, with [Pyramid integration](https://github.com/nandoflorestan/kajiki/blob/master/kajiki/integration/pyramid.py)

## Testing

* [webtest](https://github.com/Pylons/webtest) - Wraps any WSGI application and
  makes it easy to send test requests to that application, without starting up
  an HTTP server.

## Translations

* [lingua](https://github.com/wichert/lingua) - Lingua is a package with tools
  to extract translatable texts from your code, and to check existing
  translations. It replaces the use of the xgettext command from gettext, or
  pybabel from Babel.
* [pyramid_i18n_helper](https://github.com/sahama/pyramid_i18n_helper) - Helper for creating new smgid and translating msgid into local languages.

## Web frontend integration

* [PyramidVue](https://github.com/eddyekofo94/pyramidVue) - Starter template integrating Pyramid and VueJs (JavaScript), with Hot Module Replacement.

## Other

* [pyramid_layout](https://github.com/Pylons/pyramid_layout) - Pyramid add-on
  for managing UI layouts.
* [pyramid_skins](https://github.com/Pylons/pyramid_skins) - This package
  provides a simple framework to integrate code with templates and resources.
* [waitress](https://github.com/Pylons/waitress) - Waitress is meant to be a
  production-quality pure-Python WSGI server with performance intended for production use.
  It has no dependencies except ones which live in the Python standard library.
* [pyramid_handlers](https://github.com/Pylons/pyramid_handlers) - analogue of
  Pylons-style “controllers” for Pyramid.
* [pyramid_rpc](https://github.com/Pylons/pyramid_rpc) - RPC service add-on for
  Pyramid, supports XML-RPC in a more extensible manner than pyramid_xmlrpc
  with support for JSON-RPC and AMF.
* [pyramid_autodoc](https://github.com/SurveyMonkey/pyramid_autodoc) - Sphinx
  extension for documenting your Pyramid APIs.
* [pyramid_pages](https://github.com/uralbash/pyramid_pages) - Provides a
  collection of tree pages to your Pyramid application. This is very similar
  to django.contrib.flatpages but with a tree structure and traversal algorithm
  in URL dispatch.
* [paginate](https://github.com/Pylons/paginate) - Python pagination module.
* [pyramid_tablib](https://github.com/lxneng/pyramid_tablib) - tablib renderer
  (xlsx, xls, csv) for pyramid
* [tomb_routes](https://github.com/sontek/tomb_routes) - Simple utility library
  around pyramid routing
* [pyramid_extdirect](https://github.com/jenner/pyramid_extdirect) - This pyramid plugin provides a router for the ExtDirect Sencha API included in ExtJS. ExtDirect allows to run server-side callbacks directly through JavaScript without the extra AJAX boilerplate.
* [pyramid_retry](https://github.com/Pylons/pyramid_retry) - pyramid_retry is an execution policy for Pyramid that wraps requests and can retry them a configurable number of times under certain "retryable" error conditions before indicating a failure to the client.

## Projects

### Framework

* [Ringo](http://www.ringo-framework.org/) - Ringo is a Python based high level
  web application framework build on top of Pyramid. The framework can be used
  to build form based management or administration software.
* [cone.app](https://github.com/conestack/cone.app) - A web application stub on top of Pyramid.

### CMS

* [nive_cms](https://github.com/nive/nive_cms) - Nive is an out-of-the-box content management system for mobile and desktop websites based on python
  and the webframework pyramid. Please refer to the website cms.nive.co for
  detailed information.
* [substanced](https://github.com/Pylons/substanced) - An application server
  built upon the Pyramid web framework. It provides a user interface for
  managing content as well as libraries and utilities which make it easy to
  create applications.
* [Kotti](https://github.com/Kotti/Kotti) - A lightweight and
  extensible web content management system. Based on Pyramid and SQLAlchemy.
* [KARL](https://karlproject.readthedocs.io/en/latest/) - An
  application built on Pyramid (roughly 80K lines of Python code in the recorded source). It is
  an open source web
  system for collaboration, organizational intranets, and knowledge management.
  It provides facilities for wikis, calendars, manuals, searching, tagging,
  commenting, and file uploads. See the KARL site for download and installation
  details.

### Cookiecutters

* [Pylons](https://github.com/Pylons?q=cookiecutter) - official cookiecutter templates
* [Pyramid Runner](https://github.com/asif-mahmud/pyramid_runner) - A minimal Pyramid
  scaffold that aims to provide a starter template to build small to large web services.

  * Traversal based application
  * JSON only response
  * JWT authentication policy
  * Alembic for database revisions
  * Some simple modifications to base tests, views and models base to reduce typing

### Other

* [cluegun](https://github.com/Pylons/cluegun) - A simple pastebin application
  based on Rocky Burt’s ClueBin. It demonstrates form processing, security, and
  the use of ZODB within a Pyramid application.
* [shootout](https://github.com/Pylons/shootout) - An example “idea
  competition” application by Carlos de la Guardia and Lukasz Fidosz. It
  demonstrates URL dispatch, simple authentication, integration with SQLAlchemy
  and pyramid_simpleform.
* [virginia](https://github.com/Pylons/virginia) - A very simple dynamic
  file rendering application. It is willing to render structured text
  documents, HTML documents, and images from a filesystem directory. It also
  demonstrates traversal. The recorded source notes that an earlier version runs the
  repoze.org website.
* [Akhet](https://docs.pylonsproject.org/projects/akhet/en/latest/) -     A
  Pyramid library and demo application with a Pylons-like feel. Its former
  application scaffold helped users transition from Pylons and supported those preferring a Pylons-like API.
  The scaffold was retired in the recorded source, but the demo plays a similar role.
* [Khufu Project](http://khufuproject.github.io/) - Khufu is an application
  scaffolding for Pyramid that provides an environment to work with Jinja2 and
  SQLAlchemy.
* [Ptah](https://github.com/ptahproject/ptah) - Ptah is an open
  source high-level Python web development environment.
* [warehouse](https://github.com/pypa/warehouse) - The recorded source describes Warehouse as a Python Package Repository
  designed to replace the legacy code base then powering PyPI.
* [travelcrm](https://github.com/mazvv/travelcrm) - TravelCRM is a free and open source application for the automation of customer relationships for travel agencies at all levels, from small to large networks.
* [RhodeCode](https://rhodecode.com/) - enterprise source code management platform. It applies unified user control, permissions, code reviews, and tool integration across Mercurial, Git, and Subversion repositories. It supports collaboration behind a firewall for large and growing software teams.

### Project Management

* [AppEnlight](https://getappenlight.com/) - Performance, exception, and uptime monitoring for the Web

## Resources

### Books

* [Python Web Frameworks](http://www.oreilly.com/web-platform/free/python-web-frameworks.csp) - Details of six Python frameworks: Django, Flask, Tornado, Bottle, Pyramid, and CherryPy.

### Websites

* [Try Pyramid](https://trypyramid.com/) - Official website.
* [Pyramid IRC on Freenode](https://webchat.freenode.net/?channels=pyramid) - Community channel linked from the recorded source.

### Conferences

* [Sushi Sprint at PloneConf 2018 in Tokyo, Japan](https://2018.ploneconf.org/sprints) (November 10-11, 2018)
* [Pyramid Workshop in Munich, Germany.](https://pyconweb.com/talks/28-05-2017/pyramid-workshop) (May 28, 2017, 10:30 a.m. - 12:30 p.m.)
* [PloneConf 2017](https://2017.ploneconf.org/) - Barcelona Plone Digital Experience Conference (16~22 Oct. 2017)
* [PloneConf 2016](https://2016.ploneconf.org/) - Boston Plone Digital Experience Conference (17~23 Oct. 2016)
* [DragonSprint 2016](http://dragonsprint.com/) - A week-long Pyramid sprint recorded for December 5-9, 2016, taking place in Ljubljana, Slovenia, EU in the first week of December. The main two sprint topics are Pyramid 2.0 and Pyramid for Newcomers.

### Videos
* [List of videos from the official site](https://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/misc/videos.html)
* [Online Video Courses at Talk Python Training](https://training.talkpython.fm/courses/all)
* [Web Applications with Python and the Pyramid
  Framework](http://shop.oreilly.com/product/0636920041900.do) -
  Training by Paul Everitt covering the basics of Python web development and Pyramid-specific features, for users with basic Python knowledge. Topics include single-file web apps, templating, multiple routes and views, the MyApp Python package, static assets, forms, databases, sessions, authentication, authorization and JSON. Extensibility topics include custom configuration, extending and overriding, and custom view predicates.

### Who uses it?

* [Projects, Websites, Companies and Organizations that use
  Pyramid](https://trypyramid.com/community-powered-by-pyramid.html)
