# zlib documentation workspace

This app was created from the canonical `templates/docs-site` by the project creator. It is an isolated, unpublished work in progress. No canonical or translated pages are complete yet.

The source is the official zlib 1.3.2 archive, released 2026-02-17. See `meta/source-manifest.json` for its original retrieval date, URL and SHA-256. The entire original archive and the six adopted root files are retained under `upstream/v1.3.2/`. Never silently switch versions. `meta/source-boundary.json` records the classification of all 254 original files.

The planned fourteen pages preserve the entire API header (introduction and eight upstream sections), plus zconf.h, README, all 44 FAQ entries, the complete man page and LICENSE. `meta/page-plan.json` records the exact source byte boundaries; generation remains pending. Declaration tails explicitly marked undocumented stay that way. Internal implementation references are preserved; no missing explanations are invented.

Original notices and disclaimers must remain intact. Generated pages must identify the official version, archive URL/SHA, original file, unofficial translation and formatting changes. The FAQ has no separately identified documentation license; the authorized operating decision applies the software zlib License with an explicit annotation and a full original-license link. This is not a claim of separately verified documentation permission. The distinct `examples/zlib_how.html` guide has CC BY-ND4.0 and is excluded from translation; code public-domain notices do not override that guide's terms. Preserve R. P. C. Rodgers' man-page credit.

Next: implement an app-specific importer and raw-HTML plugins from the tested conversion, verify full original reconstruction and regenerated blocks/anchors/links, then translate and review every page separately. Check source notes for known original typos and version-specific apparent contradictions. Formal build/display/integration and publication checks are still pending. Use integrated Cloudflare Pages only after verified publication registration.
