---
title: "Awesome text editing"
description: "Web rich-text and code editors, Markdown tools, and criteria for evaluating contenteditable editors."
licenseSource: "github-dok-awesome-text-editing-readme-md"
---

# Awesome text editing

Find web text-editing libraries and resources: rich-text editors using contenteditable, browser code editors, Markdown tools, and criteria for evaluating contenteditable editors. The list records library dependencies, editing modes, and selection requirements.

## Rich-text editors using contenteditable
* [Slate](https://github.com/ianstormtaylor/slate) - Rich text editor built on top of React and Immutable
* [TipTap](https://github.com/scrumpy/tiptap) - Rich text editor for Vue.js
* [Trix](https://github.com/basecamp/trix) - Basecamp's rich text editor
* [CKEditor](http://ckeditor.com/) - Started back in 2003. Has both iframe and inline style rich-text editing
* [Squire](https://github.com/neilj/Squire) - HTML5 rich text editor
* [ProseMirror](http://prosemirror.net/) - From the maker of CodeMirror
* [Scribe](https://github.com/guardian/scribe) - From the [Guardian](http://www.theguardian.com/) team
* [Quill](http://quilljs.com/) - Free, open-source WYSIWYG editor for the web
* [Summernote](http://summernote.org/) - Bootstrap dependent rich-text editor
* [wysihtml](http://wysihtml.com/) - Made by Voog
* [Etherpad](http://etherpad.org/) - Open-source online editor providing real-time collaborative editing
* [TinyMCE](http://www.tinymce.com/) - Used by much of the WordPress and Drupal community
* [Medium.js](http://jakiestfu.github.io/Medium.js/docs/) - Warning: Not actually used by [Medium](https://medium.com/)
* [Textbox.IO](https://textbox.io/) - From the makers of TinyMCE
* [Froala](https://www.froala.com/wysiwyg-editor) - Rich text editor with mobile support, many examples, inline editing, and high performance according to the source
* [Redactor](http://imperavi.com/redactor/) - Rich text editor
* [Ritzy](https://github.com/ritzyed/ritzy) - Collaborative web-based rich text editor
* [Aloha Editor](http://www.alohaeditor.org/Content.Node/index.html) - Open-source browser-based HTML5 rich text editor
* [WYMeditor](http://www.wymeditor.org/) - Open-source XHTML editor focusing on semantic markup
* [Dijit Editor](http://dojotoolkit.org/) - Dojo-based rich text editor component
* [YUI Rich Text Editor](http://yui.github.io/yui2/) - Yahoo! rich text editor component
* [KindEditor](https://github.com/kindsoft/kindeditor) - Open-source HTML editor
* [Hallo](https://github.com/bergie/hallo) - Rich text editor (contentEditable) for jQuery UI
* [markitup](http://markitup.jaysalvat.com/home/) - Universal markup jQuery editor
* [openwysiwyg](http://www.openwebware.com/) - Free cross-browser WYSIWYG editor
* [tejQuery](http://jqueryte.com/) - Lightweight (19.5 KB) HTML editor
* [Trumbowyg](http://alex-d.github.io/Trumbowyg/) - Lightweight, translatable and customisable jQuery plugin
* [NicEdit](http://nicedit.com/) - Described by the source as abandoned in 2012
* [jWYSIWYG](https://github.com/jwysiwyg/jwysiwyg) - WYSIWYG jQuery Plugin
* [Alloy](http://alloyeditor.com/) - WYSIWYG editor built on top of CKEDITOR
* [Draft.js](http://facebook.github.io/draft-js/) - Rich text editor framework for React
* [MediumEditor](https://github.com/yabwe/medium-editor) - A clone of medium.com inline editor toolbar. Uses contenteditable API to implement a rich text solution.

## Code editors

* [Yace](https://solopov.dev/yace) - 1 KB code editor for the browser, with plugins
* [CodeJar](https://medv.io/codejar/) - Micro code editor for the browser
* [CodeMirror](https://codemirror.net/) - Text editor implemented in JavaScript for the browser
* [Ace](https://ace.c9.io/#nav=about) - Embeddable code editor written in JavaScript
* [EditArea](http://www.cdolivet.com/editarea/editarea/exemples/exemple_full.html)
* [Behave.js](http://jakiestfu.github.io/Behave.js/) - Lightweight library for adding IDE style behaviors to plain text areas

## Markdown editors

* [markdown-js](https://github.com/evilstreak/markdown-js) - Markdown parser for JavaScript
* [pagedown](https://code.google.com/p/pagedown/wiki/PageDown) - JavaScript Markdown previewer used on Stack Overflow and the rest of the Stack Exchange network

## Heuristic for contenteditable rich-text editors

The source proposes these criteria for evaluating an editor:
* Be stable
* Be open source
* Handle soft breaks
* Be able to manipulate styles on block level elements
* Be able to manipulate styles on inline level elements
* Be able to manipulate classes on block level elements
* Be able to manipulate classes on inline level elements
* Be able to alter custom attributes on block level elements
* Be able to alter custom attributes on inline level elements
* Cache the selection
* Have iframing capabilities as well as inline mode capability
* Change the tag type of nodes
* Clear the format
* Have a concise API
* Support various module loaders
    * AMD & Common.js
* Have an organization backing the service and the potential for a paid support plan
* Support copying and pasting from Microsoft Word
