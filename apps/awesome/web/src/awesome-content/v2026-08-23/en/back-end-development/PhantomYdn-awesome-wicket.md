---
title: Awesome Wicket
description: >-
  Apache Wicket documentation, libraries, WicketStuff components, application
  frameworks, solutions, and IDE tools.
licenseSource: github-PhantomYdn-awesome-wicket-readme-md
---
# Awesome Wicket

[Apache Wicket](http://wicket.apache.org) is an open-source, component-oriented framework for server-side Java web applications. This list covers official documentation, libraries and WicketStuff components, frameworks, ready-made applications, and IDE tools.

## Generic Info

- [Apache Wicket](http://wicket.apache.org/) - Official Wicket site.
- [Wicket on Github](https://github.com/apache/wicket) - Official Wicket mirror on [GitHub](https://github.com).
- [Wicket on Twitter](https://twitter.com/apache_wicket) - Official Wicket account.
- [Wicket wiki](https://cwiki.apache.org/confluence/display/WICKET/Index) - Official Wicket knowledge base.
- [Build With Wicket](https://builtwithwicket.tumblr.com/) - Official [Tumblr](https://www.tumblr.com/) account of Wicket.
- [Wicket User Guide](http://ci.apache.org/projects/wicket/guide/7.x/) - Wicket user guide for version 7.x.
- [Wicket JavaDocs](http://ci.apache.org/projects/wicket/apidocs/7.x/index.html) - Wicket JavaDocs for version 7.x.
- [Wicket in Action](http://wicketinaction.com/) - Blog and book about Wicket.

## Libraries
Libraries and components for use in Wicket applications.

- [JNPM](https://github.com/OrienteerBAP/JNPM) - Java library for the Node Package Manager (NPM). Provides a Wicket resource that transparently obtains NPM packages and serves the required files from them.
- [wicket-akka](https://github.com/l0rdn1kk0n/wicket-akka) - Integration of Akka for Wicket.
- [wicket-autowire](https://github.com/wicket-acc/wicket-autowire) - Automatically creates components according to the supplied annotations.
- [wicket-bootstrap](https://github.com/l0rdn1kk0n/wicket-bootstrap) - Integration of Bootstrap Toolkit for Wicket.
- [wicket-clientside-logging](https://github.com/l0rdn1kk0n/wicket-clientside-logging) - Enables client-side JavaScript logging and also stores all log messages on the server.
- [wicket-console](https://github.com/PhantomYdn/wicket-console) - Lightweight, AJAX-enabled web console for executing JavaScript on the server at runtime.
- [wicket-crudifier](https://github.com/premium-minds/wicket-crudifier) - Library for creating CRUD interfaces with Wicket.
- [wicket-dnd](https://github.com/svenmeier/wicket-dnd) - Generic drag-and-drop framework for Wicket.
- [wicket-extjs-integration](https://github.com/onehippo/wicket-extjs-integration) - Integrates Wicket with ExtJS, including event handling, with a Java API designed to resemble the JavaScript API.
- [wicket-fullcalendar](https://github.com/42Lines/wicket-fullcalendar) - Integrates the [FullCalendar](http://fullcalendar.io/) JavaScript library with Wicket.
- [wicket-jersey](https://github.com/OrienteerBAP/wicket-jersey) - Adapter for running JAX-RS resources on [Jersey2](https://jersey.github.io/) under Wicket.
- [wicket-jquery-selectors](https://github.com/l0rdn1kk0n/wicket-jquery-selectors) - Library for working with jQuery and Wicket.
- [wicket-jquery-ui](http://www.7thweb.net/wicket-jquery-ui/) - jQuery UI integration for Wicket 1.5.x, Wicket 6.x, and Wicket 7.x.
- [wicket-modelfactory](http://wicketeer.org/wicket-modelfactory/) - API for creating Wicket PropertyModels in a type-safe and refactoring-safe way.
- [wicket-mustache](https://github.com/l0rdn1kk0n/wicket-mustache) - Specialized panel and related utilities for using Mustache with Wicket.
- [wicket-orientdb](https://github.com/OrienteerDW/wicket-orientdb) - Integration of Wicket with [OrientDB](http://orientdb.com/).
- [wicket-requirejs](https://github.com/l0rdn1kk0n/wicket-requirejs) - Helper to use require.js in your Wicket application.
- [wicket-shieldui](https://github.com/shieldui/wicket-shieldui) - Components for using the [Shield UI](http://www.shieldui.com/) JavaScript library.
- [wicket-source](https://github.com/42Lines/wicket-source) - Enables click-through from browser HTML to the original Wicket components in the source code.
- [wicket-spring-boot](https://github.com/MarcGiffing/wicket-spring-boot) - Creates Wicket projects with minimal configuration using Spring Boot.
- [wicket-webjars](https://github.com/l0rdn1kk0n/wicket-webjars) - Integration of webjars for Wicket.
- [wicked-charts](https://github.com/thombergs/wicked-charts) - Interactive JavaScript charts for Java-based web applications.

### WicketStuff
Libraries based on [WicketStuff](https://github.com/wicketstuff/core).

- [Annotation](https://github.com/wicketstuff/core/wiki/Annotation) - Mounts pages declaratively using Java annotations.
- [Annotation Event Dispatcher](https://github.com/wicketstuff/core/tree/master/annotationeventdispatcher-parent) - Annotation-based event handling in Wicket.
- [Async Tasks](https://github.com/wicketstuff/core/wiki/Async-tasks) - Controls a background process within a Wicket application.
- [Autocomplete TagIt](https://github.com/wicketstuff/core/wiki/Autocomplete-TagIt) - [TagIt](http://aehlke.github.com/tag-it/) integration with Wicket.
- [BrowserId](https://github.com/wicketstuff/core/wiki/BrowserId) - [Mozilla Persona](https://login.persona.org/) integration with Wicket.
- [Console](https://github.com/wicketstuff/core/wiki/Console) - Provides support for executing code dynamically (at runtime).
- [Context](https://github.com/wicketstuff/core/wiki/Context) - Locates components, models, and model objects declaratively with the @Context annotation.
- [Dashboard](https://github.com/wicketstuff/core/tree/master/dashboard-parent) - Dashboards for Wicket with widgets for quick access to required information.
- [DataStores](https://github.com/wicketstuff/core/wiki/DataStores) - Implementations of [IDataStore](https://github.com/apache/wicket/blob/master/wicket-core/src/main/java/org/apache/wicket/pageStore/IDataStore.java) using [MemCached](http://memcached.org/), [Apache Cassandra](http://cassandra.apache.org/), [Redis](http://redis.io/), and [Hazelcast](http://www.hazelcast.com/).
- [Datatable Autocomplete](https://github.com/wicketstuff/core/wiki/Datatable-Autocomplete) - Provides a [Trie](http://en.wikipedia.org/wiki/Trie) search structure for fast AJAX searches on large datasets.
- [DataTables](https://github.com/wicketstuff/core/wiki/DataTables) - [DataTables jQuery](http://www.datatables.net/) Plugin Integration.
- [Editable Grid](https://github.com/wicketstuff/core/wiki/Editable-Grid) - Grid component with combined add, edit, and delete functions, plus sorting, filtering, and paging.
- [Eidogo](https://github.com/wicketstuff/core/wiki/Eidogo) - SGF viewer and editor for the game of Go, also called baduk, igo, or weiqi.
- [Facebook](https://github.com/wicketstuff/core/wiki/Facebook) - Wicket components and behaviors for using [Facebook](https://facebook.com) social plugins.
- [Fast Serializer](https://github.com/wicketstuff/core/wiki/FastSerializer) - Wicket Serializer using the Fast 1.x (FST) library.
- [Fast Serializer 2](https://github.com/wicketstuff/core/wiki/FastSerializer2) - Wicket Serializer using the Fast 2.x (FST) library.
- [GMap3](https://github.com/wicketstuff/core/wiki/Gmap3) - Offers a component to use Google Maps v3 within Wicket applications.
- [Google AppEngine Initializer](https://github.com/wicketstuff/core/wiki/Google-AppEngine-Initializer) - Implementation of Wicket's org.apache.wicket.IInitializer that automatically configures a Wicket application to run on Google AppEngine.
- [Google Charts](https://github.com/wicketstuff/core/wiki/GoogleCharts) - Allows creation of charts using the [Google Chart API](https://developers.google.com/chart/).
- [HTML5](https://github.com/wicketstuff/core/wiki/Html5) - Classes that add HTML5 feature support to Wicket.
- [HTML Compressor](https://github.com/wicketstuff/core/wiki/Htmlcompressor) - Integration library for Wicket and [htmlcompressor](http://code.google.com/p/htmlcompressor).
- [InMethodGrid](https://github.com/wicketstuff/core/wiki/InMethodGrid) - Data grid component.
- [Java EE Inject](https://github.com/wicketstuff/core/wiki/Java-EE-Inject) - Provides integration through Java EE 5 resource injection.
- [JEE Web Integration](https://github.com/wicketstuff/core/wiki/JEE-Web-Integration) - Embeds Servlet, JSP, and JSF content in Wicket HTML pages.
- [JqPlot Plugin Integration](https://github.com/wicketstuff/core/wiki/JqPlot-Plugin-Integration) - Creates feature-rich line, bar, and pie charts.
- [JWicket UI Toolip](https://github.com/wicketstuff/core/wiki/jWicket-UI-Tooltip) - Generates the JavaScript needed to add a jQuery UI tooltip to a Wicket component.
- [Kryo Serializer](https://github.com/wicketstuff/core/wiki/Kryo-Serializer) - An implementation of org.apache.wicket.serialize.ISerializer for Wicket.
- [Kryo2 Serializer](https://github.com/wicketstuff/core/tree/master/serializer-kryo2) - An implementation of org.apache.wicket.serialize.ISerializer for Wicket.
- [LazyModel](https://github.com/wicketstuff/core/wiki/LazyModel) - Type-safe model implementation.
- [Lightbox2 Plugin Integration](https://github.com/wicketstuff/core/wiki/Lightbox2-Plugin-Integration) - Simple, unobtrusive script for overlaying images on the current page.
- [Logback](https://github.com/wicketstuff/core/wiki/Logback) - Classes for using Wicket with [logback](http://logback.qos.ch/).
- [MBeanView](https://github.com/wicketstuff/core/wiki/MBeanView) - JMX panel for viewing and operating application MBeans.
- [Minis](https://github.com/wicketstuff/core/wiki/Minis) - Collection of small components and behaviors that do not warrant separate projects.
- [ModalX](https://github.com/wicketstuff/core/wiki/ModalX) - Lightweight extension of Wicket's ModalWindow, with a standardized MessageBox class and support for defining modal dialog classes.
- [OSGI](https://github.com/wicketstuff/core/wiki/Osgi) - Lets you use Wicket in OSGi environments.
- [Open Layers 3](https://github.com/wicketstuff/core/tree/master/openlayers3-parent) - Provides a set of components that may be used to add interactive maps to a Wicket application.
- [POI](https://github.com/wicketstuff/core/wiki/POI) - Integrates Wicket projects with Apache POI.
- [Progressbar](https://github.com/wicketstuff/core/wiki/Progressbar) - Provides a progress bar component for Wicket.
- [Push](https://github.com/wicketstuff/core/wiki/Push) - Reverse AJAX support for pushing partial web page updates to the browser from Wicket applications.
- [Scala Extensions](https://github.com/wicketstuff/core/wiki/ScalaExtensions) - Improves the syntax of Wicket models when using the Scala programming language.
- [Select2](https://github.com/wicketstuff/core/tree/master/select2-parent) - Apache Wicket components that use the [Select2](http://ivaynberg.github.com/select2) JavaScript library to build select boxes with AJAX choice filtering, custom rendering, and related features.
- [Servlet Container Authentication and Authorization](https://github.com/wicketstuff/core/wiki/Servlet-Container-Authentication-and-Authorization) - Simplifies integration of wicket-auth-roles with the Servlet 3 security container.
- [Spring Reference](https://github.com/wicketstuff/core/wiki/SpringReference) - Integrates a Wicket web application with Spring.
- [Stateless](https://github.com/wicketstuff/core/tree/master/stateless-parent) - A few components that provide more extensive stateless features for Wicket.
- [TinyMCE Integration](https://github.com/wicketstuff/core/wiki/TinyMCE-Integration) - Integrates the TinyMCE WYSIWYG editor with Wicket.
- [Twitter](https://github.com/wicketstuff/core/wiki/Twitter) - Wicket components and behaviors for using Twitter widgets.
- [UrlFragment](https://github.com/wicketstuff/core/tree/master/urlfragment-parent) - Enables bookmarkable AJAX features while retaining back-button support.
- [WHighCharts](https://github.com/wicketstuff/wiquery-highcharts) - Provides WiQuery bindings for HighCharts.
- [Whiteboard](https://github.com/wicketstuff/core/wiki/Whiteboard) - Whiteboard that can be integrated into a Wicket application.
- [wicket-foundation](https://github.com/wicketstuff/core/tree/master/wicket-foundation) - Integrates Wicket and [Zurb Foundation](http://foundation.zurb.com/).
- [Wicket Rest Annotations](https://github.com/wicketstuff/core/tree/master/wicketstuff-restannotations-parent) - Provides a special resource class and a set of annotations to implement REST API/services in much the same way as we do it with Spring MVC or with the standard JAX-RS.
- [WiQuery](https://github.com/wicketstuff/wiquery) - Wicket integration with jQuery and jQuery UI.
- [WqPlot](https://github.com/wicketstuff/wiquery-jqplot) - Provides WiQuery bindings for JqPlot.

## Web Frameworks
Frameworks built on Wicket for developing applications.

- [Apache Isis](https://isis.apache.org/) - A framework for rapidly developing domain-driven apps in Java.
- [BrixCMS](http://www.brixcms.org/) - Wicket-based CMS; the recorded source suggests that it is no longer active.
- [Hippo CMS](http://www.onehippo.com/en) - Helps enterprises continuously refine their online business strategy by responding quickly to content performance metrics.
- [Nocket](https://github.com/Nocket/nocket) - Naked Objects framework for Wicket.
- [NoWicket](http://invesdwin.de/nowicket/) - A naked objects framework for Wicket that enables developers to write less boilerplate Wicket code during implementation of complex websites.
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - Web framework built on Wicket and [OrientDB](http://orientdb.com/) for creating CRM, CMS, ERP, mobile app backends, or general websites.
- [Vuecket](https://github.com/OrienteerBAP/vuecket) - Web framework that integrates VueJS and Wicket using an approach suited to both.
- [Wicketopia](https://github.com/jwcarman/Wicketopia) - Rapid Application Development (RAD) library for Wicket.

## Solutions
End-to-end solutions based on Wicket and derived [web frameworks](#web-frameworks).

- [eFaps](http://www.efaps.org/) - Modules and applications that form the basis of a configurable ERP implementation.
- [eHour](https://ehour.nl/index.phtml) - Open source time tracking tool.
- [Estatio](https://github.com/estatio/estatio) - Open source estate management built on Apache Isis and wicket.
- [GeoServer](https://github.com/geoserver/geoserver) - Open source software server written in Java that allows users to share and edit geospatial data.
- [NextReports](http://www.next-reports.com/) - Business reporting software.
- [Orienteer](https://github.com/OrienteerDW/Orienteer) - Open source Business Application Platform for implementation of data warehouse, CRM, ERP, app/site backend system and other business apps.
- [ProjectForge](https://www.projectforge.org/) - Open source software for your project management.
- [Yes Cart](https://github.com/inspire-software/yes-cart) - Dedicated e-commerce platform.

## IDE Plugins and Tools

- [qwickie](https://marketplace.eclipse.org/content/qwickie) - [Eclipse](http://www.eclipse.org/) plugin for the Java web framework Wicket.
- [WicketForge](https://github.com/minman/wicketforge) - IDE plugin for [IntelliJ IDEA](https://www.jetbrains.com/idea/) designed to assist developers creating applications using Apache Wicket.
