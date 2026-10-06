---
title: "LZ4: build/visual/README.md"
licenseSource: "lz4-1-10-0-build-visual-readme-md"
documentContext:
  - kind: source
    html: "<p>Unofficial Libx presentation of the fixed LZ4 1.10.0 English original. Formatting and link mapping: 2026-10-05. Original commit: <code>ebb370ca83af193212df4dcbadcc5d87bc0de2f0</code>; SHA-256: <code>a9cbf6a75a656a8991460f8560686ca1e230724e9e0c097940b18d960aa26bc4</code>. <a href=\"https://github.com/lz4/lz4/blob/ebb370ca83af193212df4dcbadcc5d87bc0de2f0/build/visual/README.md\">Fixed upstream source</a>; <a href=\"/docs/lz4/source/v1-10-0/originals/build/visual/README.md.txt\">Unmodified original and its notices</a>; <a href=\"/docs/lz4/source/v1-10-0/LZ4_FIXED.tar.gz\">Complete fixed upstream archive</a>; <a href=\"/docs/lz4/source/v1-10-0/licenses/UPSTREAM_LICENSE.txt\">Upstream license allocation notice</a>. Original copyright, permission, and warranty notices are retained. Japanese translations are unofficial.</p><p>Under Libx’s operating policy, where no documentation-specific license statement was found, the software license identified for this material is applied to this documentation. Applicable terms: GPL-2.0-or-later（本掲載はversion2条件を履行）. This is an operational decision, not a newly obtained permission.</p><p>Presentation changes: original Markdown unchanged except mapped local destinations. No technical prose has been silently corrected or summarized.</p>"
---

These scripts will generate Visual Studio Solutions for a selected set of supported versions of MS Visual.

For these scripts to work, both `cmake` and the relevant Visual Studio version must be locally installed on the system where the script is run.

If `cmake` is installed into a non-standard directory, or user wants to test a specific version of `cmake`, the target `cmake` directory can be provided via the environment variable `CMAKE_PATH`.
