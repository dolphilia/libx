---
title: "LZ4 trial: build/visual/README.md"
licenseSource: "lz4-trial-07-build-visual-readme-md"
documentContext:
  - kind: source
    html: "<p>隔離候補変換試験。正式定本・翻訳・内容レビュー・通知配布の完了ではありません。文書専用ライセンスの表記が確認できないため、ソフトウェア本体のGPL-2.0-or-laterを文書にも適用する運用判断で掲載しています。</p>"
---

These scripts will generate Visual Studio Solutions for a selected set of supported versions of MS Visual.

For these scripts to work, both `cmake` and the relevant Visual Studio version must be locally installed on the system where the script is run.

If `cmake` is installed into a non-standard directory, or user wants to test a specific version of `cmake`, the target `cmake` directory can be provided via the environment variable `CMAKE_PATH`.
