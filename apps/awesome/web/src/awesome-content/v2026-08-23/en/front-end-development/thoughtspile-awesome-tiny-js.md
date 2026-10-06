---
title: "Awesome Tiny JS"
description: "Small client-side JavaScript libraries with recorded bundle sizes, selection criteria, features, and usage constraints."
licenseSource: "github-thoughtspile-awesome-tiny-js-readme-md"
---

# Awesome Tiny JS

This list covers small client-side JavaScript libraries for UI, state management, routing, API requests, localization, dates, utilities, validation, IDs, colors, gestures, and search. The list compares bundle sizes and records selection criteria and usage constraints.

The recorded selection criteria are:

- Sizes are under roughly 2 kB, minified and gzipped with all dependencies, except where noted.
- For multi-purpose libraries, a useful subset must be under roughly 2 kB.
- Libraries must be useful on the client side; the recorded list does not define participation rules for Node-only libraries.
- Second-level libraries are allowed only for React, Vue, Angular, and Svelte.
- At least 100 GitHub stars or 500 weekly npm installs, to include tools with some community review.
- No zero-JavaScript libraries that contain only CSS or types.

The sizes below reproduce the badges stored in the fixed upstream commit. They are historical measurements, minified and gzipped with dependencies unless noted otherwise.

## UI Frameworks

UI frameworks provide declarative templates, event bindings, and observable state to update the view. For this category, the recorded list raises the size limit to 4.5 kB and the GitHub-star threshold to 2,000.

- [preact](https://github.com/preactjs/preact) - React-like API (pre-hooks), with an ecosystem of similarly small tools and components. 4.3 kB.

The recorded list describes the following small libraries as [about 500 times less popular than preact](https://npmtrends.com/preact-vs-hyperapp-vs-redom):

- [hyperapp](https://github.com/jorgebucaran/hyperapp) - vDOM framework with pure JS syntax and immutable state, 1.73 kB.
- [redom](https://github.com/redom/redom) - Hyperapp-style templates with _imperative_ event listeners and updates, 2.7 kB.

The recorded list treats the following as [experimental UI libraries](https://npmtrends.com/@arrow-js/core-vs-fre-vs-hyperapp-vs-redom-vs-superfine-vs-vanjs-core):

- [fre](https://github.com/frejs/fre) - React-like library with hooks and concurrency, 2.23 kB.
- [van](https://github.com/vanjs-org/van) - vDOM-based framework optimized for no-build setups, 1.14 kB.
- [superfine](https://github.com/jorgebucaran/superfine) - Hyperapp with state & effect hooks removed, 1.14 kB.
- [arrowjs](https://github.com/justin-schroeder/arrow-js) - Tagged templates + reactive data, 3.03 kB.

For imperative DOM manipulation:

- [umbrella](https://github.com/franciscop/umbrella) - jQuery-style DOM manipulation library, 2.71 kB.

## Event Emitters

Event emitters provide a publish-and-subscribe pattern. The recorded size limit for this category is 0.5 kB.

- [mitt](https://github.com/developit/mitt) - Plain event emitter, 193 B.
- [nanoevents](https://github.com/ai/nanoevents) - An unsubscribe API, without a `*` event, 189 B.
- [onfire.js](https://github.com/hustcc/onfire.js) - Also has `.once` method, 476 B.

## State Managers

State managers combine observable state with actions and framework bindings, intended for app-wide state.

- [zustand](https://github.com/pmndrs/zustand) - Stores with actions and selectors. Vanilla: 255 B; React: 375 B.
- [nanostores](https://github.com/nanostores/nanostores) - Modular store with tree-shaking support. Vanilla: 803 B; React integration adds 273 B. The recorded list states that it supports all major frameworks.
- [exome](https://github.com/marcisbee/exome) - Atomic stores with framework connectors. Store: 890 B; React integration adds 257 B. The recorded list states that it supports all major frameworks.
- [storeon](https://github.com/storeon/storeon) - Minimal Redux-style store with framework connectors, 276 B. React integration adds 299 B; Vue, Svelte, and Angular integrations are also available.
- [unistore](https://github.com/developit/unistore) - Centralized store with actions, 326 B, plus React integration at 1.01 kB.
- [teaful](https://github.com/teafuljs/teaful) - Store with useState-like API, 1.01 kB, including React / preact connector.

### Signals

A signal-styled state manager provides observable values (aka _signals_), derived values and effects.

- [@preact/signals](https://github.com/preactjs/signals) - Signals from preact. Core: 1.45 kB; with React integration: 2.22 kB.
- [usignal](https://github.com/WebReflection/usignal) - A small signal implementation, 963 B.
- [hyperactiv](https://github.com/elbywan/hyperactiv) - 4 functions to make objects observable and listen to changes, 1.25 kB.
- [flimsy](https://github.com/fabiospampinato/flimsy) - Signals from Solid (Solid itself _almost_ fit into the UI frameworks category). Author warning: _it's probably buggy._ 1.02 kB.

Honorable mention: [oby](https://github.com/vobyjs/oby) _could_ make it _if_ it had tree-shaking, but otherwise is around 7 kB.

### Reactive Programming

Another well-known state management approach is reactive programming — operating on event streams, applying filters and transforms to end up with an observable value. Think RxJS, but tiny:

- [flyd](https://github.com/paldepind/flyd) - Rx-styled event streams, 2.28 kB.
- [callbag-basics](https://github.com/staltz/callbag-basics) - Rx-style event streams, 2.18 kB.

## Routers and URL Utils

These libraries respond to URL or history changes and provide path matching and parsing:

- [wouter](https://github.com/molefrog/wouter) - Declarative router for React / preact, 2.13 kB, also available as a standalone hook: 562 B.
- [@nanostores/router](https://github.com/nanostores/router) - Routes as a nanostores store (framework-agnostic), 1.4 kB.
- [navaid](https://github.com/lukeed/navaid) - History-based observable router, 934 B.

For URL-path parsing and matching without observing changes:

- [matchit](https://github.com/lukeed/matchit) - Route parser and matcher in 662 B.
- [regexparam](https://github.com/lukeed/regexparam) - Convert path to regexp in 408 B.
- [qss](https://github.com/lukeed/qss) - Parse query strings in 318 B. The recorded list also points to the native [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL) as a supported alternative.

## API Layer

These packages wrap `fetch` tasks such as serializing and parsing data and rejecting non-200 responses:

- [redaxios](https://github.com/developit/redaxios) - Drop-in axios replacement for modern browsers, 925 B.
- [wretch](https://github.com/elbywan/wretch) - Chainable API with error processing and lots of extra plugins, 2 kB.
- [gretchen](https://github.com/truework/gretchen) - Chainable API with type-safe errors, 2.15 kB.

For environments requiring a fetch polyfill:

- [unfetch](https://github.com/developit/unfetch) - Loose fetch polyfill, 471 B.

## I18N

These localization tools provide string interpolation and related functions beyond a map of translated strings:

- [@nanostores/i18n](https://github.com/nanostores/i18n) - Detect locale, load dictionaries, format dates / numbers, 1.96 kB including nanostores.
- [eo-locale](https://github.com/ibitcy/eo-locale) - Interpolation and dates / numbers, 1.4 kB, or 2.01 kB with React bindings.
- [rosetta](https://github.com/lukeed/rosetta) - Bare-bones template strings (`{{hello}}, {{username}}`) and custom functions for everything else, 314 B.
- [lingui](https://github.com/lingui/js-lingui) - Small core with template strings, 2.91 kB.

## Dates and Time

These libraries provide date and time manipulation with small bundles or usable subsets:

- [date-fns](https://github.com/date-fns/date-fns/) - Not tiny as a whole, but [most functions](https://bundlephobia.com/package/date-fns) are under 1 kB each (format and parse are quite heavy).
- [dayjs](https://github.com/iamkun/dayjs) - _Almost_ moment.js-compatible API, covers most use cases, 3.06 kB.

Packages focused on formatting:

- [tinytime](https://github.com/aweary/tinytime) - Simple date / time formatter: `{h}:{mm} -> 9:33`, 854 B.
- [tinydate](https://github.com/lukeed/tinydate) - Date / time formatter, only supports padded numeric output (`September -> 09`), 360 B.
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - Date / time formatting, 412 B.
- [ms](https://github.com/vercel/ms) - Parse & format ms durations, e.g. `"1m" <-> 60000`, 696 B.
- [timeago.js](https://github.com/hustcc/timeago.js) - Format dates into stuff like _X minutes ago_ or _in X hours,_ 993 B.
- [fromnow](https://github.com/lukeed/fromnow) - Relative date / time formatting, 361 B.

The recorded list also identifies the built-in [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) as a supported alternative.

## Generic Utilities

Something you'd find in lodash or ramda, but smaller. Most are pretty similar and very small, with minor differences in package structure (single / package-per-helper) and tree shaking vs direct helper import.

- [remeda](https://github.com/remeda/remeda) - 90 tree-shakable helpers [(list).](https://bundlephobia.com/package/remeda)
- [rambda](https://github.com/selfrefactor/rambda) - 187 tree-shakable helpers [(list).](https://bundlephobia.com/package/rambda)
- [just](https://github.com/angus-c/just) - 82 helpers in separate packages [(list).](https://anguscroll.com/just/)
- [@fxts/core](https://github.com/marpple/FxTS) - 96 tree-shakable helpers. Lazy evaluation support.

Honorable mention: [underscore,](https://github.com/jashkenas/underscore) contains many sub-1 kB helpers. It does not tree-shake as well as the libraries above due to codebase structure.

The recorded list describes lodash itself as not tree-shakable and states that its modular approaches—`lodash.method` packages, imports from `lodash/method`, and `lodash-es`—do not work well in practice.

The recorded list notes that much of the original lodash functionality is built into modern ES and recommends native equivalents where the target browsers support them.

## Validation

These libraries check whether objects match a schema, as alternatives to zod, yup, joi, or ajv. The recorded list estimates that bundles under 2 kB meet 90% of needs. Its comparison uses a tree-shaken base subset: core, object / array, and string / number / boolean validation, so libraries with additional features are compared on the same basis.

- [v8n](https://github.com/imbrn/v8n) - zod-style API with fine-grained checks: `v8n().string().minLength(5).first("H").last("o")`. No tree shaking, 2.17 kB.
- [banditypes](https://github.com/thoughtspile/banditypes) - A small validation library: 289 B.
- [superstruct](https://github.com/ianstormtaylor/superstruct) - A modular validation library with tree-shaking support, 1.51 kB.
- [valibot](https://github.com/fabian-hiller/valibot) - Another modular validation library, 1.16 kB.
- [deep-waters](https://github.com/antonioru/deep-waters) - Composable functional validators, 617 B.

## Unique ID Generation

The recorded size limit for unique ID generation is 500 bytes. The list also points to the [native `crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) and its [browser-support table](https://caniuse.com/mdn-api_crypto_randomuuid).

- [@lukeed/uuid](https://github.com/lukeed/uuid) - Real UUIDs, 243 B.
- [nanoid](https://github.com/ai/nanoid) - Random IDs with larger alphabet, 207 B.
- [uid](https://github.com/lukeed/uid) - Random ID generation, 186 B.
- [hexoid](https://github.com/lukeed/hexoid) - Hexadecimal IDs, 204 B.

## Colors

These libraries support color manipulation for UI and data visualization, including [color-space conversion](https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae):

- [colord](https://github.com/omgovich/colord) - Manipulate colors and convert between spaces, 1.92 kB. Extra features come as plugins, 150b to 1.5 kB each.
- [colr](https://github.com/stayradiated/colr) - Color manipulation and conversion, 1.9 kB.
- [polychrome](https://github.com/cdonohue/polychrome) - Color manipulation and conversion, 2.1 kB.
- [randomcolor](https://github.com/davidmerfield/randomColor) - Configurable random color generation. 2.14 kB.

## Touch Gestures

These libraries recognize mobile gestures such as swipe, drag, pinch, or double-tap from sequences of touchmove or pointer events:

- [alloyfinger](https://github.com/AlloyTeam/AlloyFinger) - Pan, swipe, tap, doubletap, longpress, _and_ pinch / rotate. 1.89 kB.
- [tinygesture](https://github.com/sciactive/tinygesture) - Configurable pan, swipe, tap, doubletap, longpress. 2.4 kB.

These libraries help handle mouse, touch, and pointer events across browsers when implementing gesture detection:

- [pointer-tracker](https://github.com/GoogleChromeLabs/pointer-tracker) - Unified interface for mouse, touch and pointer events, 1.09 kB.
- [detect-it](https://github.com/rafgraph/detect-it) - Detect present and primary input method (touch / mouse) and supported events, 506 B.

Honorable mentions: [any-touch](https://github.com/any86/any-touch) attempts a modular approach to gesture detection, but the core is around 2 kB without any gesture recognizers. [rc-gesture,](https://github.com/react-component/gesture) used in ant design system, could be the only react component on the list, but babel-runtime / corejs polyfills hard-wired into the build push the ~2.5 kB size to over 10 kB.

## Text Search

Text search is important for client-side filtering and autosuggests. Naive `option.includes(search)` has no sensible order on the results, and ignoring word boundaries gives unexpected matches like _spa -> newSPAper._ First, here are some libraries that prioritize word matches:

- [js-search](https://github.com/bvaughn/js-search) - Feature-rich and customizable: multi-field indices, stop words, custom stemmers and tokenizers. 1.92 kB.
- [ndx](https://github.com/localvoid/ndx) - Similar to js-search, differs in [ranking](https://kmwllc.com/index.php/2020/03/20/understanding-tf-idf-and-bm-25/) and is less strict for multi-word queries [(compare)](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,ndx,Wade&search=twilight%20sag). Supports field weights. 1.4 kB.
- [wade](https://github.com/kbrsh/wade) - Also similar, [(compare)](https://leeoniya.github.io/uFuzzy/demos/compare.html?libs=js-search,Wade,ndx&search=twilight%20sag) 1.23 kB.
- [libsearch](https://github.com/thesephist/libsearch) - Index-free search (slower, but easier to use) with sane ordering 439 B.

One way to find sensible inexact matches is _stemming_ — converting words to a root form. _Walked_ will match _walking,_ etc. Here are a few [Porter stemmers](https://vijinimallawaarachchi.com/2017/05/09/porter-stemming-algorithm/) for English language:

- [stemmer](https://github.com/words/stemmer) - 784 B.
- [porter-stemmer](https://github.com/jedp/porter-stemmer) - 926 B.

The recorded list offers the following supplementary options for non-English words: [snowball-js](https://github.com/fortnightlabs/snowball-js) is 17 kB with 15 languages, [lunr-languages](https://github.com/MihaiValentin/lunr-languages) supports 30 languages but only works with [lunr,](https://github.com/olivernn/lunr.js) another candidate is [natural](https://github.com/NaturalNode/natural/tree/master/lib/natural/stemmers) but it depends on Node.js.

### Fuzzy search

__Fuzzy search__ is another take on inexact matching — the words can be modified. First, we have libraries that only allow insertion: spacecat -> SPACECrAfT. These are limited for general-purpose text search but suited to filename, command, or URL lookups.

- [fuzzy](https://github.com/mattyork/fuzzy) - Index-free, can highlight matches. 536 B.
- [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search) - With stateful index. 866 B.
- [fzy.js](https://github.com/jhawthorn/fzy.js) - Matches one string at a time, tree-shakeable scores and match highlighting. 751 B total, or ~150 bytes for `hasMatch` only.
- [fuzzysearch](https://github.com/bevacqua/fuzzysearch) -  One string at a time, does not compute score / rank. 223 B.
- [liquidmetal](https://github.com/rmm5t/liquidmetal) - Quicksilver algorithm, prioritizes matches at start of word for command abbreviations (e.g. `gp` -> `git push`). One string at a time. 628 B.
- [quick-score](https://github.com/fwextensions/quick-score) - Another quicksilver-based lib, tweaked for long strings. Built-in list filtering and sorting, 2.11 kB or 1.2 kB for single-string scoring.

Finally, one library is specifically built for spellchecking:

- [fuzzyset](https://github.com/Glench/fuzzyset.js) - Find misspellings, e.g. missipissi -> Missisipi, 1.32 kB. The recorded list states that commercial usage costs $42.

## Footnotes

Supplementary lists include [WIP](https://github.com/thoughtspile/awesome-tiny-js/blob/f49d74e245824eb1194a01636b8dd3b0904d347c/wip.md) for potentially useful libraries not yet analyzed in depth, and [incubate](https://github.com/thoughtspile/awesome-tiny-js/blob/f49d74e245824eb1194a01636b8dd3b0904d347c/incubate.md) for libraries that do not yet meet the popularity criteria.

Collected and reviewed by [Vladimir Klepov](https://blog.thoughtspile.tech) in 2023.
