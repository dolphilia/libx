---
title: "EclipseIDEへの統合"
licenseSource: spdlog-wiki
toc:
  maxLevel: 6
documentContext: [{"kind":"source","html":"<aside data-editorial=\"provenance\"><p>公式spdlog Wikiの2025-10-15固定版に基づく非公式の日本語訳です。<a href=\"https://github.com/gabime/spdlog/wiki/Integrating-into-Eclipse-IDE\">原資料</a>。原資料のSHA-256：<code>643339b22d8e1a5b7464db1126348fdd869f870d4d30d76face16fd1768f2bc8</code>。ソフトウェアのコミット：<code>79524ddd08a4ec981b7fea76afd08ee05f83755d</code>。Wikiのコミット：<code>d384272cd5320e27b041ae92625040aa6db71a1e</code>。このWikiは独立した固定版であり、spdlog 1.17.0のタグに対応するマニュアルではありません。<a href=\"/docs/spdlog/v1-17-0/ja/02-reference/01-license/\">原ライセンス・通知の全文</a>。本文の表示形式、日本語訳、版に関する注記は、Libxによる非公式の変更です。</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。これは運用上の判断であり、権利者から新たに得た許諾ではありません。</p></aside>"}]
---



<div data-spdlog-source-body="13-integrating-into-eclipse-ide">

この短いガイドは、C++の**spdlog**ライブラリをEclipse IDEへ統合する際の出発点になります。設定全体は、簡単な5つの手順からなります。

注意：もちろん、git cloneも使えます :)<br>
注意：多くの場合、親フォルダーの名前には、'_ThirdParty_'や'_libs_'など、第三者のファイルを格納するフォルダーだとすぐに分かる名前を選ぶことを推奨します。私は親フォルダーとして、'_ThirdParty_'というフォルダーを選びました…

1) [プロジェクトの頁](https://github.com/gabime/spdlog)から事前にダウンロードしたアーカイブの内容を、新しく作成したプロジェクトまたは既存のプロジェクトへコピー・展開します。または、[GitHub](https://github.com/gabime/spdlog)からcloneします。

2) メニューバーから `Project > Properties > C/C+ Build > GCC C++ Compiler > Preprocessor` を選びます。Addボタンをクリックして定義を追加し（シンボルの定義 `-D`）、`SPDLOG_COMPILED_LIB` を追加してください。大文字・小文字に注意してください。

3) 次に、`Includes` をクリックし（引き続き `Project > Properties > C/C++ Build > GCC C++ Compiler` にいます）、**spdlog**ライブラリのヘッダーがあるフォルダーへのパスを追加します。例：`thirdParty/spdlog/include`。

4) `apply and close` をクリックします。

5) `Project > Indexer > rebuild` をクリックします。

楽しいコーディングを ;)

</div>

<aside data-editorial="original-copyright"><p>©gabime 2023-2024 spdlog. All Rights Reserved.</p></aside>
