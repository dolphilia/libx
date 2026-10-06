---
title: "Awesome Plone"
description: "Plone add-ons for content, search, layouts, forms, authentication, migration, development, and administration, with selection advice and official resources."
licenseSource: "github-collective-awesome-plone-readme-md"
---

# Awesome Plone

[Plone](https://plone.org) is an open-source CMS written in Python, with a focus on functionality, customizability, and security out of the box. This list covers add-ons for content, editing, search, layouts, forms, media, authentication, migration, development, and administration, along with advice for choosing add-ons and official resources.

The fixed upstream list covers add-ons for Plone 5.2 and 6 that support Python 3; these were the major versions described as current in the source. Plone 6 uses the React-based Volto frontend by default, which communicates with Plone through `plone.restapi`. Volto can itself be extended; see [awesome-volto](https://github.com/collective/awesome-volto) for Volto add-ons.

The source describes more than 3,000 add-ons on [PyPI](https://pypi.org/search/?q=&o=&c=Framework+%3A%3A+Plone) and more than 1,500 repositories in [Collective](https://github.com/collective), making it difficult to find a suitable add-on. This list shares knowledge about common products and techniques to help with that choice. For a filterable list aggregating Plone-related packages from PyPI, see https://pag.derico.tech.

## Content and utilities for content

Add-ons that provide content types or additional content functionality.

* [collective.consent](https://github.com/collective/collective.consent) - Asks users for consent on different topics before they can continue.
* [collective.dexteritytextindexer](https://github.com/collective/collective.dexteritytextindexer) - Dynamic SearchableText index for dexterity content types. For Plone 6 this was merged into Plone core.
* [collective.documentgenerator](https://github.com/collective/collective.documentgenerator) - Generates documents (.odt, .pdf, .doc) from content using the appy framework (https://appyframe.work/) and OpenOffice/LibreOffice.
* [collective.documentviewer](https://github.com/collective/collective.documentviewer) - Integrates the DocumentCloud viewer and PDF processing into Plone.
* [collective.easyformplugin.createdx](https://github.com/collective/collective.easyformplugin.createdx) - Creates Plone content objects from EasyForm submissions.
* [collective.embeddedpage](https://github.com/collective/collective.embeddedpage) - A content type to embed remote HTML pages in Plone Classic and Volto.
* [collective.folderishtraverse](https://github.com/collective/collective.folderishtraverse) - Traverses to the first item in a folder.
* [collective.folderishtypes](https://github.com/collective/collective.folderishtypes) - Provides the types "Folderish Event", "Folderish News Item" and "Folderish Document" as replacements for default types. Those types are able to hold any other content, like a Folder.
* [collective.geolocationbehavior](https://github.com/collective/collective.geolocationbehavior) - Geotagging for Plone content using LeafletJS.
* [collective.glossary](https://github.com/collective/collective.glossary) - Content type to define a glossary and its terms.
* [collective.immediatecreate](https://github.com/collective/collective.immediatecreate) - Creates content immediately, skipping the add form.
* [collective.lineage](https://github.com/collective/collective.lineage) - Makes subfolders appear as autonomous Plone subsites, with an ecosystem of add-ons specifically for subsites.
* [collective.mailchimp](https://github.com/collective/collective.mailchimp) - MailChimp newsletter integration for Plone.
* [collective.mirror](https://github.com/collective/collective.mirror) - A content type that mirrors the content of any other container.
* [collective.mustread](https://github.com/collective/collective.mustread) - Tracks user views of content marked as must-read.
* [collective.person](https://github.com/collective/collective.person) - A content type to represent a person, with an optional behavior to connect it to a Plone user.
* [collective.pdfjs](https://github.com/collective/collective.pdfjs) - Plone integration for Mozilla's JavaScript PDF reader.
* [collective.remoteproxy](https://github.com/collective/collective.remoteproxy) - Proxy for remote content. All remote URLs for which a local proxy was created are replaced in the resulting content.
* [collective.restrictportlets](https://github.com/collective/collective.restrictportlets) - Allows you to restrict the available portlets that non-Managers can add.
* [collective.workspace](https://github.com/collective/collective.workspace) - Manages membership in specific areas of a Plone site. Grants access through a membership group rather than per-user local roles, and lets you delegate group management to people without access to the site-wide user/group control panel.
* [dexterity.membrane](https://github.com/collective/dexterity.membrane) - Enables content to be used as users and groups in Plone sites.
* [plone.pdfexport](https://github.com/plone/plone.pdfexport) - Generic PDF export functionality for Plone content.
* [Products.EasyNewsletter](https://github.com/collective/Products.EasyNewsletter) - Newsletter and mailing product for Plone.
* [zopyx.ipsumplone](https://github.com/zopyx/zopyx.ipsumplone) - Creates demo content and demo images for Plone.
* [collective.folderorder](https://github.com/collective/collective.folderorder) - Allows alternative ordering in Plone folders.

## Editing

* [collective.a11ycheck](https://github.com/collective/collective.a11ycheck) - Reports accessibility issues to your site editors when a page is saved.
* [collective.collabora](https://github.com/collective/collective.collabora) - Collabora Online integration for Plone to provide collaborative document editing.
* [collective.bbcodesnippets](https://github.com/collective/collective.bbcodesnippets) - Provides generic and extensible BBCode markup integration for Plone.
* [collective.richdescription](https://github.com/collective/collective.richdescription) - A description field that supports formatting in Plone.

## Searching and Categorizing

* [cioppino.twothumbs](https://github.com/collective/cioppino.twothumbs) - Rates content with thumbs-up and thumbs-down votes.
* [collective.bookmarks](https://github.com/collective/collective.bookmarks) - Bookmarks, favorites, and wish lists for Plone.
* [collective.collectionfilter](https://github.com/collective/collective.collectionfilter) - Faceted navigation filter for collection or contentlisting tiles.
* [collective.elasticsearch](https://github.com/collective/collective.elasticsearch) - Use Elasticsearch as the search backend for Plone.
* [collective.elastic.plone](https://github.com/collective/collective.elastic.plone) - Elasticsearch Integration for Plone content.
* [collective.searchandreplace](https://github.com/collective/collective.searchandreplace) - Find and replace text in Plone content objects.
* [collective.solr](https://github.com/collective/collective.solr) - Solr search engine integration for Plone.
* [collective.taxonomy](https://github.com/collective/collective.taxonomy) - Create, edit and use hierarchical taxonomies to categorize content.
* [eea.facetednavigation](https://github.com/collective/eea.facetednavigation) - A search interface configured through the web without programming. Lets users progressively select and explore content facets (metadata/properties) to narrow searches dynamically.
* [Products.PloneKeywordManager](https://github.com/collective/Products.PloneKeywordManager) - Changes, merges, and deletes keywords, tags, or subjects.
* [zopyx.typesense](https://github.com/zopyx/zopyx.typesense) - Plone integration with the external Typesense search server (open-source). This is an alternative to collective.solr or Elasticsearch.

## Layout

Products and resources for creating and managing site layouts.

* [plone.app.mosaic](https://github.com/plone/plone.app.mosaic) - An extensible editor for composing page content with different tiles.
* [collective.cover](https://github.com/collective/collective.cover) - Cover allows the creation of elaborate covers built around a drag-and-drop interface. Uses the same blocks/tiles ecosystem as plone.app.mosaic but a different approach to editing.
* [collective.contentsections](https://github.com/collective/collective.contentsections) - Offers a block approach for Plone 6 Classic based entirely on Dexterity content types.
* [collective.gridlisting](https://github.com/collective/collective.gridlisting) - Adds a dexterity behavior and a browser template to manipulate folder and collection listings by adding Bootstrap 5 CSS classes and `pat-masonry` from patternslib.

## Tiles

Add-ons that extend the plone.app.mosaic layout editor.

* [plone.app.standardtiles](https://github.com/plone/plone.app.standardtiles) - A set of standard tiles used by Mosaic, but can be used from any other tile manager.
* [collective.tiles.carousel](https://github.com/collective/collective.tiles.carousel) - A slider tile for plone.app.mosaic based on the carousel component of Bootstrap 5.
* [collective.tiles.advancedstatic](https://github.com/collective/collective.tiles.advancedstatic) - A tile for HTML text, similar to the static text portlet, with additional options such as custom CSS classes.
* [collective.tiles.collection](https://github.com/collective/collective.tiles.collection) - A tile that displays collection results and lets you choose or develop custom layouts.

## Events

Add-ons for events and calendars.

* [collective.easyformplugin.registration](https://github.com/collective/collective.easyformplugin.registration) - Add a behavior to collective.easyform to manage registration forms for events.
* [collective.fullcalendar](https://github.com/collective/collective.fullcalendar) - Displays events in a calendar interface using https://fullcalendar.io.
* [collective.venue](https://github.com/collective/collective.venue) - Venue type with geolocation support for use with events or any other location specific content.

## Forms

Add-ons for generating and using forms.

* [collective.easyform](https://github.com/collective/collective.easyform) - EasyForm provides a Plone form builder through-the-web using fields, widgets, actions and validators. Form input can be saved or emailed. A simple and user-friendly interface allows non-programmers to create custom forms.
* [collective.fieldedit](https://github.com/collective/collective.fieldedit) - A flexible form to edit selected fields of a content type.
* [collective.honeypot](https://github.com/collective/collective.honeypot) - Honeypot protection for forms.
* [collective.z3cform.datagridfield](https://github.com/collective/collective.z3cform.datagridfield) - A field with a datagrid (table), where each row is a sub form.
* [collective.z3cform.norobots](https://github.com/collective/collective.z3cform.norobots) - A "human" captcha widget based on a list of questions/answers.
* [plone.formwidgets.hcaptcha](https://github.com/plone/plone.formwidget.hcaptcha) - HCaptcha widget to protect Plone from bots, spam, and other forms of automated abuse.
* [yafowil.plone](https://github.com/bluedynamics/yafowil.plone) - Yafowil is a form library for Python. This is its Plone Integration package.

## Multilingual

Add-ons for managing multilingual sites.

* [collective.linguatags](https://github.com/collective/collective.linguatags) - Multilingual Tags for Plone.
* [plone.app.multilingualindexes](https://github.com/plone/plone.app.multilingualindexes) - Indexes optimized to query multilingual content made with plone.app.multilingual.
* [cs.adminlanguage](https://github.com/codesyntax/cs.adminlanguage) - Configure a language to be used when editing your Plone site, independently of the site language.
* [collective.multilingual](https://github.com/collective/collective.multilingual/tree/fix-tests) - This add-on provides support for content in multiple languages (multilingual).

## Media

Add-ons for images, video, and audio.

* [collective.autoscaling](https://github.com/collective/collective.autoscaling) - Automatic scaling of large images. Useful to reduce your database size when editors upload too large images.
* [collective.behavior.banner](https://github.com/collective/collective.behavior.banner) - A behavior to create banners and sliders from banners.
* [collective.behavior.relatedmedia](https://github.com/collective/collective.behavior.relatedmedia) - A behavior to create/upload/manage media relations (Image, File) for content types.
* [collective.lazysizes](https://github.com/collective/collective.lazysizes) - Integration of lazysizes, a lightweight lazy loader, into Plone.
* [collective.wavesurfer](https://github.com/collective/collective.wavesurfer) - Implementation of https://wavesurfer-js.org audio player for Plone.
* [plone.app.imagecropping](https://github.com/collective/plone.app.imagecropping) - Crops Images in Plone manually using cropper JS library.
* [plone.gallery](https://github.com/plone/plone.gallery) - Photo gallery view for Plone.
* [redturtle.gallery](https://github.com/RedTurtle/redturtle.gallery) - Adds a gallery view with a carousel made with slick.
* [wildcard.media](https://github.com/collective/wildcard.media) - Provides audio and video content types and behaviors.
* [cs_flickrgallery](https://github.com/codesyntax/cs_flickrgallery) - Flickr photo gallery support for Plone.

## Security

* [collective.explicitacquisition](https://github.com/collective/collective.explicitacquisition) - Disallow access to acquired content outside the current path.
* [collective.geotransform](https://github.com/collective/collective.geotransform) - Graceful E-mail Obfuscation for Plone.
* [collective.contactformprotection](https://github.com/collective/collective.contactformprotection) - Disables the default `contact-info` form or protects it with `plone.formwidget.[h|re]captcha`.
* [collective.lockdown](https://github.com/collective/collective.lockdown) - Prevents site administrators from reconfiguring a Plone site or changing its layout.

## SEO

Add-ons for search engine optimization.

* [bda.plone.gtm](https://github.com/bluedynamics/bda.plone.gtm) - Google Tag Manager Integration.
* [collective.behavior.seo](https://github.com/collective/collective.behavior.seo) - Adds extra fields used for SEO optimisation.
* [collective.splitsitemap](https://github.com/collective/collective.splitsitemap) - Provides a cached split sitemap on big public sites.
* [kitconcept.seo](https://github.com/kitconcept/kitconcept.seo) - Adds extra fields used for SEO optimisation for sites using Volto.

## Authentication

Authentication plugins for integrating Plone with external user sources and authentication services.

* [pas.plugins.ldap](https://github.com/collective/pas.plugins.ldap) - Provides users and groups from an LDAP directory.
* [pas.plugins.authomatic](https://github.com/collective/pas.plugins.authomatic) - Authomatic OAuth1/OAuth2/OpenID Login Integration with Plone.
* [pas.plugins.eea](https://github.com/collective/pas.plugins.eea) - Provides user and group enumeration on top of pas.plugins.authomatic, with support for Microsoft Entra ID. Includes user and group synchronization.
* [iw.rejectanonymous](https://github.com/collective/iw.rejectanonymous) - Unconditionally rejects anonymous users without changing the security policy matrix or workflows. Intended for use cases such as an extranet where every visitor must authenticate.
* [pas.plugins.headers](https://github.com/collective/pas.plugins.headers) - Reads request headers and uses them for authentication. Think SAML headers that are set by a front web server like Apache or nginx.
* [dm.zope.saml2](https://pypi.org/project/dm.zope.saml2/) - Supports SAML2 based Single Sign-On.
* [collective.impersonate](https://github.com/collective/collective.impersonate) - Allow administrators to impersonate another user. Useful for verifying workflow/permission set up on real content.
* [collective.pwexpiry](https://github.com/collective/collective.pwexpiry) - Provides methods for stronger Plone user passwords and protection against password attacks.
* [pas.plugins.oidc](https://github.com/collective/pas.plugins.oidc) - Login using OIDC providers.
* [wcs.samlauth](https://github.com/collective/wcs.samlauth) - Login using SAML providers.

## Shop

* [bda.plone.productshop](https://github.com/bluedynamics/bda.plone.productshop) - Flexible and modular e-commerce solution for Plone.

## Export, Import and Migrations

* [collective.exportimport](https://github.com/collective/collective.exportimport) - Export and import content and a lot of other data from and to Plone. The main solution for all kinds of migrations based on plone.restapi.
* [collective.migrationhelpers](https://github.com/collective/collective.migrationhelpers) - Helpers and examples to use during migrations.
* [collective.jsonify](https://github.com/collective/collective.jsonify) - Export Plone content to JSON.
* [collective.transmogrifier](https://github.com/collective/collective.transmogrifier) - A configurable pipeline, aimed at transforming content for import and export.

## Themes

* [plonetheme.tokyo](https://github.com/collective/plonetheme.tokyo) - An alternative theme for Plone using Bootstrap 5.
* [plonetheme.grueezibuesi](https://github.com/collective/plonetheme.grueezibuesi) - A kitten-inspired theme for Plone 6.
* [collective.sidebar](https://github.com/collective/collective.sidebar) - A sidebar that consolidates toolbar and navigation.
* [collective.editablemenu](https://github.com/RedTurtle/collective.editablemenu) - A customizable navigation menu for Plone.
* [collective.localstyles](https://github.com/collective/collective.localstyles) - Add local styles within any subsection of a Plone site by adding a CSS file.

## Develop

Add-ons for Plone development.

* [Products.PDBDebugMode](https://github.com/collective/Products.PDBDebugMode) - Opens a pdb session when an exception occurs for post-mortem debugging. Appending /pdb to a URL also opens a pdb session in the current context.
* [plone.app.debugtoolbar](https://github.com/plone/plone.app.debugtoolbar) - A toolbar showing debug information about a running Plone site and the content being inspected. Includes an interactive Python shell, a TALES expression evaluator, and code reload.
* [plone.reload](https://github.com/plone/plone.reload) - Code and configuration reload without server restarts.
* [Products.PrintingMailHost](https://github.com/collective/Products.PrintingMailHost) - Log mail messages instead of sending mail.
* [experimental.gracefulblobmissing](https://github.com/collective/experimental.gracefulblobmissing/) - Gracefully handle missing binary files in Plone.
* [collective.debugtools](https://github.com/collective/collective.debugtools) - Add remote debugging via debugpy for debugpy-compatible clients like VSCode or PyCharm.
* [collective.icecream](https://github.com/collective/collective.icecream) - Debug and inspect Plone using the icecream package.
* [collective.patchwatcher](https://github.com/collective/collective.patchwatcher) - A companion for keeping track of patched or overridden files.
* [collective.pdbpp](https://github.com/collective/collective.pdbpp) - Allows you to use the pdbpp package.
* [collective.relationhelpers](https://github.com/collective/collective.relationhelpers) - Helpers to manage, create, export and rebuild relations in Plone 5.x. For Plone 6 this was merged into Plone core.

## Sysadmin

Add-ons for deploying and maintaining Plone.

* [collective.catalogcleanup](https://github.com/collective/collective.catalogcleanup) - Removes data from the catalog that no longer belongs to an actual object.
* [collective.fingerpointing](https://github.com/collective/collective.fingerpointing) - Tracks different events and writes them to an audit log.
* [collective.ftw.upgrade](https://github.com/collective/collective.ftw.upgrade) - Simplifies writing and running upgrade steps for Plone add-ons and projects.
* [collective.ifttt](https://github.com/collective/collective.ifttt) - Enables any Plone site to play in the IFTTT ecosystem. For example when a news item is published, then tweet about it or post it on Facebook.
* [collective.purgebyid](https://github.com/collective/collective.purgebyid) - Use tag-based cache invalidation in Plone (e.g. with Varnish's xkey module).
* [collective.recipe.backup](https://github.com/collective/collective.recipe.backup) - A flexible backup and restore solution for Plone.
* [collective.regenv](https://github.com/collective/collective.regenv) - Override registry settings using environment variables stored in a file.
* [plone-registryfromenviron](https://github.com/bluedynamics/plone-registryfromenviron) - Override plone.registry settings from environment variables.
* [collective.revisionmanager](https://github.com/collective/collective.revisionmanager) - Manage Products.CMFEditions histories that can bloat your database.
* [collective.sentry](https://github.com/collective/collective.sentry) - Sentry integration to aggregate errors and help find their causes.
* [dm.historical](https://pypi.org/project/dm.historical) - Access any historical state of your database. Can be useful to find out what happened to objects in the past and to restore accidentally deleted or modified objects.
* [haufe.requestmonitoring](https://github.com/collective/haufe.requestmonitoring) - Detailed request logging functionality on top of the publication events. Useful to find out what takes longer than it should.
* [Cloudbrine](https://bluedynamics.github.io/zodb-pgjsonb/ecosystem.html) - A set of add-ons that replaces the ZODB and catalog with PostgreSQL, stores objects as queryable JSONB, and can delegate image scaling to Thumbor.

## Finding more add-ons

Finding the right add-on for your needs can sometimes be challenging.
Here are a few tips to help you:

* Start by making a list of the features you require.
* Check this list first to see if any existing add-ons meet your needs.
* Search for Plone add-ons on [PyPi](https://pypi.org/search/?c=Framework+%3A%3A+Plone).
* Browse the [Collective](https://github.com/collective) organization on GitHub.
* Browse the [Plone](https://github.com/plone) organization on GitHub.
* Or simply Google for your requirements.

Once you have a shortlist, test these add-ons. Here are the main issues you need to test before you install an add-on on a production site:

* Test all required features. Read the documentation, but verify its claims.
* Check if the add-on runs on your required version
* Check if it is maintained
* Does it have i18n-support, i.e. is the user-interface translated to your language?
* Does it uninstall cleanly?
* Check for unwanted dependencies

Once you found an add-on you like, you can ask the community if you made a good choice or if you missed something:

* Message Board: [community.plone.org](https://community.plone.org)

If you can't find something that fits your requirements 100% you can:

* Adapt your requirements to what is available.
* Invest the time & money to customize an existing add-on to better fit your needs.
* Create a new add-on that does exactly what you need.

## Official resources

Official information and support resources for Plone.

* [plone.org](https://plone.org) - Official website for developers and community.
* [community.plone.org](https://community.plone.org) - Official community forum for getting help.
* [Discord chat](https://discord.gg/zFY3EBbjaj) - Chat with members of the Plone community on Discord.
* [Plone support](https://plone.org/support) - Where to find help.
* [docs.plone.org](https://docs.plone.org) - Official documentation for developers/integrators.
* [Plone 6 Documentation](https://6.dev-docs.plone.org) - Official documentation for Plone 6, described in the source as upcoming and a work in progress.
* [training.plone.org](https://training.plone.org) - Training classes for developers/integrators/users/designers.
* [plone.api](https://6.dev-docs.plone.org/plone.api/index.html) - Documentation for plone.api.
