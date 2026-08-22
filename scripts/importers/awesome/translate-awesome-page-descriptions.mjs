#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { rootDir } from './common.mjs';

const version = 'v2026-08-20';
const contentRoot = path.join(rootDir, 'apps/awesome/src/awesome-content', version);
const file = process.argv.find((argument) => argument.endsWith('.md'));
const modelOption = process.argv.indexOf('--model');
const model = modelOption === -1 ? 'qwen3:8b' : process.argv[modelOption + 1];
const limitOption = process.argv.indexOf('--limit');
const limit = limitOption === -1 ? Infinity : Number(process.argv[limitOption + 1]);
const pendingLimitOption = process.argv.indexOf('--pending-limit');
const pendingLimit =
  pendingLimitOption === -1 ? Infinity : Number(process.argv[pendingLimitOption + 1]);
const batchSizeOption = process.argv.indexOf('--batch-size');
const batchSize = batchSizeOption === -1 ? 20 : Number(process.argv[batchSizeOption + 1]);
const apply = process.argv.includes('--apply');
const preview = process.argv.includes('--preview');
const reapplyCached = process.argv.includes('--reapply-cached');
const reapplyCachedLines = process.argv.includes('--reapply-cached-lines');
const refresh = process.argv.includes('--refresh');
const allDescriptions = process.argv.includes('--all-descriptions');
const indexesOption = process.argv.indexOf('--indexes');
const explicitIndexes =
  indexesOption === -1
    ? null
    : process.argv[indexesOption + 1].split(',').map(Number).filter(Number.isInteger);
const partialApply = process.argv.includes('--partial-apply');
const concise = process.argv.includes('--concise');
const cachePath = path.join(rootDir, '.tmp/awesome-ja-description-translations.json');

if (
  !file ||
  !model ||
  (limitOption !== -1 && (!Number.isFinite(limit) || limit < 1)) ||
  (pendingLimitOption !== -1 && (!Number.isFinite(pendingLimit) || pendingLimit < 1)) ||
  (batchSizeOption !== -1 && (!Number.isInteger(batchSize) || batchSize < 1))
) {
  console.error(
    'usage: translate-awesome-page-descriptions.mjs <category/file.md> [--model MODEL] [--limit N] [--pending-limit N] [--batch-size N] [--all-descriptions] [--partial-apply] [--apply]'
  );
  process.exit(1);
}

function listItems(markdown) {
  const parsed = matter(markdown);
  const contentOffset = markdown.indexOf(parsed.content);
  const contentStartLine = markdown.slice(0, contentOffset).split('\n').length - 1;
  const tree = unified().use(remarkParse).parse(parsed.content);
  const items = [];

  function visit(node) {
    if (node.type === 'listItem') {
      const paragraph = node.children.find((child) => child.type === 'paragraph');
      const firstLink = paragraph?.children.find((child) => child.type === 'link');
      if (paragraph?.position && firstLink?.position) {
        const suffixStart = contentOffset + firstLink.position.end.offset;
        const suffixEnd = contentOffset + paragraph.position.end.offset;
        const rawSuffix = markdown.slice(suffixStart, suffixEnd);
        const prefix = rawSuffix.match(/^\s*(?:(?:[-–—]|:(?=\s)|&mdash;)\s*)?/i)?.[0] ?? '';
        const description = rawSuffix
          .replace(/^\s*(?:[-–—]|:(?=\s)|&mdash;)\s*/i, '')
          .replace(/\s+/g, ' ')
          .trim();
        items.push({
          suffixStart,
          suffixEnd,
          prefix,
          description,
          lineIndex: contentStartLine + firstLink.position.start.line - 1,
          linkEndColumn: firstLink.position.end.column - 1,
        });
      } else {
        items.push({
          suffixStart: null,
          suffixEnd: null,
          prefix: '',
          description: '',
          lineIndex: null,
          linkEndColumn: null,
        });
      }
    }
    for (const child of node.children ?? []) visit(child);
  }

  visit(tree);
  return items;
}

function collisionIndexes(englishItems, japaneseItems) {
  const groups = new Map();
  const normalizedGroups = new Map();
  const count = Math.max(englishItems.length, japaneseItems.length);
  for (let index = 0; index < count; index += 1) {
    const english = englishItems[index]?.description ?? '';
    const japanese = japaneseItems[index]?.description ?? '';
    if (!english || !japanese) continue;
    const group = groups.get(japanese) ?? [];
    group.push({ index, english });
    groups.set(japanese, group);
    const normalizedJapanese = japanese
      .replace(/\s+(?:参照|関連参照|関連情報|関連コード|値):.+$/, '')
      .replace(/\s+\[[^\]]+\]\([^)]+\).*$/, '')
      .replace(/\s+`[^`]+`.*$/, '')
      .replace(/^.+?に関する/, '<主題>に関する')
      .replace(/^.+?に分類される/, '<分類>に分類される')
      .replace(/^.+?を対象とする/, '<対象>を対象とする');
    const normalizedGroup = normalizedGroups.get(normalizedJapanese) ?? [];
    normalizedGroup.push({ index, english });
    normalizedGroups.set(normalizedJapanese, normalizedGroup);
  }

  const affected = new Set();
  for (const group of groups.values()) {
    if (group.length > 1 && new Set(group.map(({ english }) => english)).size > 1) {
      for (const { index } of group) affected.add(index);
    }
  }
  for (const [template, group] of normalizedGroups) {
    if (
      (file === 'miscellaneous/osmlab-awesome-openstreetmap.md' ||
        file === 'gaming/Symbitic-awesome-babylonjs.md' ||
        file === 'content-management-systems/craftcms-awesome.md' ||
        file === 'computer-science/arbox-nlp-with-ruby.md' ||
        file === 'platforms/hlaueriksson-awesome-powertoys-run-plugins.md' ||
        /に関する.*関連資料です。?$/.test(template) ||
        /ツールまたは資料です。?$/.test(template) ||
        /に関する専門性を(?:確認|検証する)/.test(template) ||
        /または素材です。?$/.test(template) ||
        /に関する包括的なガイド/.test(template) ||
        /ライブラリ、ドライバー、ツール、または資料です/.test(template) ||
        /に関するSwiftライブラリ、ソフトウェア、または資料です/.test(template) ||
        /に関するC\+\+／Cライブラリ、ソフトウェア、または資料です/.test(template) ||
        /に関するプラグイン・資料/.test(template) ||
        /に関するElixir／OTPライブラリ、ソフトウェア、または資料です/.test(template) ||
        /に関するAngularライブラリ、ツール、または資料です/.test(template) ||
        /に関するiOSライブラリ、アプリ、または資料です/.test(template) ||
        /に関するGoライブラリ、ツール、ソフトウェア、または資料です/.test(template) ||
        /に関するmacOS向けソフトウェアまたは資料です/.test(template) ||
        /に分類されるオープンソースゲーム、エンジン、ツール、または資料です/.test(template) ||
        /に関するGitHub Action・資料/.test(template) ||
        /TerraformとIaCを実践的に学ぶための教材・環境です/.test(template) ||
        /Terraformを使った構築・移行・運用の実践記事です/.test(template) ||
        /に関する資料です/.test(template) ||
        /各ベンダーがサポートするTerraformプロバイダーです/.test(template) ||
        /Terraformの開発・検証・運用を支援するツールです/.test(template) ||
        /に関するAda／SPARKの実装、ツール、または資料です/.test(template) ||
        /に関するCrystalライブラリ、サービス、ツール、または資料です/.test(template) ||
        /に関するマイクロサービスの実装、仕様、運用ツール、または資料です/.test(template) ||
        /に関するPascalライブラリ、コンポーネント、ツール、または資料です/.test(template) ||
        /に関するツール・資料。?$/.test(template) ||
        /に関するゲーム開発用の素材、ツール、サービス、または資料です/.test(template) ||
        /に関するAndroidライブラリ、ツール、サービス、または資料です/.test(template) ||
        /に関するV言語のアプリケーション、ライブラリ、ツール、または資料です/.test(template) ||
        /に関するPerlモジュール、ツール、または資料です/.test(template) ||
        /に関するIonic／Capacitorのツール、プラグイン、事例、または資料です/.test(template) ||
        /に関するMagento 2の拡張、サービス、人物、または資料です/.test(template) ||
        /に関するプロジェクト・資料。?$/.test(template) ||
        /に関するWeb Componentsの実装、設計資料、またはツールです/.test(template) ||
        /著名な企業・組織が公開する共有可能なESLint設定です/.test(template) ||
        /広く利用されている共有可能なESLint設定です/.test(template) ||
        /実行環境・ブラウザ・ECMAScript機能の互換性を検査します/.test(template) ||
        /MarkdownやHTML等へ埋め込まれたコードを検査します/.test(template) ||
        /特定のUI・アプリケーションフレームワーク向けルールを提供します/.test(template) ||
        /JavaScript以外の言語、構文、実行環境をESLintで検査します/.test(template) ||
        /その他の用途に対応するESLintプラグインです/.test(template) ||
        /コーディングプラクティスや特定のECMAScript機能を検査します/.test(template) ||
        /コードの表記・スタイル規則を検査または整形します/.test(template) ||
        /利用可能なグローバル変数の定義を提供します/.test(template) ||
        /ESLint設定、ルール探索、実行、移行、開発を支援するツールです/.test(template) ||
        /理論計算機科学に必要な数学と論理を学ぶための講義動画/.test(template) ||
        /FastAPIへ認証・認可機能を追加する拡張です/.test(template) ||
        /FastAPIと連携できるORMまたは統合ライブラリです/.test(template) ||
        /非同期SQLやクエリ構築を支援するライブラリです/.test(template) ||
        /FastAPIで文書データベースを扱うODM・ドライバーです/.test(template) ||
        /FastAPIの依存性注入を拡張するフレームワークです/.test(template) ||
        /FastAPIへ各種機能を追加するユーティリティです/.test(template) ||
        /FastAPIを扱うポッドキャストです/.test(template) ||
        /FastAPIをサーバーレス環境で動かすための基盤・アダプターです/.test(template) ||
        /デバイス接続、制御、データ処理、デジタルツイン等を実装するIoTフレームワークです/.test(
          template
        ) ||
        /デバイス管理、メッセージング、時系列データ、可視化を提供するIoTミドルウェアです/.test(
          template
        ) ||
        /Gemini CLIエコシステムの新着ツールまたはリソースです/.test(template) ||
        /Gemini CLIへ機能やワークフローを追加するコマンドまたは拡張機能です/.test(template) ||
        /Gemini CLIを使う開発ワークフローを支援するツールです/.test(template) ||
        /Gemini CLIから外部機能を利用するためのMCPサーバーです/.test(template) ||
        /Railsで構築されたオープンソースアプリです/.test(template) ||
        /Rails開発を支援するGemまたはツールです/.test(template) ||
        /新しく有用なJAXライブラリです/.test(template) ||
        /JAXを利用する機械学習・数値計算ライブラリです/.test(template) ||
        /JAXまたは関連フレームワークで実装されたモデル・研究プロジェクトです/.test(template) ||
        /JAXの概念、実装、活用事例を扱う動画・講演です/.test(template) ||
        /JAXの導入・実装・応用を解説する教材です/.test(template) ||
        /ブラウザーで地図・地理空間データを描画するJavaScriptライブラリです/.test(template) ||
        /地理空間データの変換・解析・幾何処理を行うライブラリです/.test(template) ||
        /ウェブ上でLiDAR点群を表示・処理するツールです/.test(template) ||
        /地球観測・衛星画像を閲覧・処理するフロントエンド向けリソースです/.test(template) ||
        /ダウンロード可能なオープン地理空間データです/.test(template) ||
        /地理空間データ・検索・経路・環境情報を提供するウェブAPIです/.test(template) ||
        /オープン地理空間データを集めたコレクションです/.test(template) ||
        /地理空間データを作成・分析・編集するウェブアプリです/.test(template) ||
        /地図・データ可視化の配色を支援するツールです/.test(template) ||
        /ウェブアーカイブの基本概念を解説する入門資料です/.test(template) ||
        /ウェブコンテンツを取得してアーカイブへ保存するツールです/.test(template) ||
        /ウェブアーカイブを検索・探索するツールです/.test(template) ||
        /WARCや関連データを変換・検査・操作するユーティリティです/.test(template) ||
        /WARC・ARC形式を読み書きするライブラリまたはツールです/.test(template) ||
        /ウェブアーカイブ分野のブログ・研究資料です/.test(template) ||
        /ウェブアーカイブ関係者のSlackコミュニティです/.test(template) ||
        /セルフホスト可能なオープンソースの保存サービスです/.test(template) ||
        /ネットワークパケットの取得・記録を支援するツールまたはライブラリです/.test(template) ||
        /pcapやネットワークトラフィックの分析・検査を支援するツールです/.test(template) ||
        /に関する年次報告書、調査、標準化組織、または関連資源です/.test(template) ||
        /に関するプロダクト管理のツール、記事、書籍、または資料です/.test(template) ||
        /を対象とするファジング研究、ツール、または資料です/.test(template) ||
        /^\(_using$/.test(template) ||
        /に関する研究文献または資料です/.test(template) ||
        /に関するウィキペディアのencyclopedia項目/.test(template) ||
        /に関するガイドライン/.test(template) ||
        /に関するウィキペディアの記事/.test(template) ||
        /に関するソフトウェア、資料、またはサービスです/.test(template) ||
        /に関するMQTTの実装、サービス、連携ツール、または資料です/.test(template) ||
        /に関する公共交通データ、アプリ、ツール、または資料です/.test(template) ||
        /に関する都市・地域計画のデータ、仕様、ツール、または資料です/.test(template) ||
        /に関するプロジェクト・ツール。?$/.test(template) ||
        /に関する仕様。?$/.test(template) ||
        /に関する(?:素晴らしい)?リソースを厳選したリスト/.test(template) ||
        /に関するリソース。?$/.test(template) ||
        /に関する週刊ニュースレター/.test(template) ||
        /に関するポッドキャスト/.test(template) ||
        /に関する参考記事/.test(template) ||
        /に関する講義、書籍、ソフトウェア、または参考資料です/.test(template) ||
        /に関する無料MIT大学院コース/.test(template) ||
        /オープンソースmacOSアプリです/.test(template)) &&
      group.length > 1 &&
      new Set(group.map(({ english }) => english)).size > 1
    ) {
      for (const { index } of group) affected.add(index);
    }
  }
  for (let index = 0; index < count; index += 1) {
    if (Boolean(englishItems[index]?.description) !== Boolean(japaneseItems[index]?.description)) {
      affected.add(index);
    }
  }
  return [...affected].sort((left, right) => left - right);
}

function protectMarkdown(text) {
  const tokens = [];
  const protectedText = text.replace(
    /(?:\[\[[^\n]+?\)\]|!?\[[^\]]*\]\([^\s)]+(?:\s+"[^"]*")?\)|<https?:\/\/[^>]+>|`[^`]+`|:[A-Za-z0-9_+-]+:|https?:\/\/[^\s)]+)/g,
    (token) => {
      const marker = `⟦MARKDOWN_${String(tokens.length).padStart(4, '0')}⟧`;
      tokens.push({ marker, token });
      return marker;
    }
  );
  return { protectedText, tokens };
}

function restoreMarkdown(text, tokens) {
  let restored = text;
  for (const { marker, token } of tokens) {
    if (!restored.includes(marker)) {
      restored = `${restored.trimEnd()} ${token}`;
      continue;
    }
    restored = restored.replaceAll(marker, token);
  }
  if (/⟦MARKDOWN_\d{4}⟧/.test(restored)) {
    throw new Error('未知の保護記号が翻訳結果に残りました');
  }
  return restored.replace(/\s+/g, ' ').trim();
}

function normalizeCachedTranslation(english, translation) {
  if (!translation) return null;
  const { tokens } = protectMarkdown(english);
  const sanitizedTranslation = translation
    .replace(/[⟦⟧]?MARKDOWN_[0-9０-９,、._\s]+[⟦⟧]?/g, '')
    .replace(/[⟦⟧]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const positions = tokens.map(({ token }) => sanitizedTranslation.indexOf(token));
  const expectedCounts = new Map();
  for (const { token } of tokens) expectedCounts.set(token, (expectedCounts.get(token) ?? 0) + 1);
  const exactCounts = [...expectedCounts].every(
    ([token, expected]) => sanitizedTranslation.split(token).length - 1 === expected
  );
  const ordered = positions.every(
    (position, index) => position !== -1 && (index === 0 || position > positions[index - 1])
  );
  if (ordered && exactCounts) return sanitizedTranslation;

  let normalized = sanitizedTranslation;
  for (const { token } of tokens) {
    normalized = normalized.replaceAll(token, '');
    if (token.startsWith('[')) {
      for (const malformed of [token.slice(1), token.slice(0, -1), token.slice(1, -1)]) {
        normalized = normalized.replaceAll(malformed, '');
      }
    }
    if (token.startsWith('[[') && token.endsWith(')]')) {
      for (const malformed of [
        token.slice(0, -1),
        token.slice(1),
        token.slice(1, -1),
        token.slice(2),
        token.slice(2, -1),
      ]) {
        normalized = normalized.replaceAll(malformed, '');
      }
      for (const innerLink of token.match(/\[[^\]]+\]\([^)]+\)/g) ?? []) {
        normalized = normalized.replaceAll(innerLink, '');
      }
      normalized = normalized.replaceAll('[[', '').replace(/(?:\s*\|\s*)+/g, ' ');
    }
  }
  return `${normalized.trim()} ${tokens.map(({ token }) => token).join(' ')}`
    .replace(/\s+/g, ' ')
    .trim();
}

function deterministicFallback(english) {
  if (/^<sup>.*<\/sup>$/.test(english)) return english;
  if (/^\*{3}[^*]+\*{3},?\s+\d{4}\.(?:\s+\[\[[^\]]+\]\([^)]+\)\]\.)+$/.test(english))
    return english;
  if (/^\d{4}\.(?:\s+\[\[[^\]]+\]\([^)]+\)\]\.)+$/.test(english)) return english;
  if (/^\*{3}Wikipedia\*{3}[.]$/.test(english)) return english;
  const { protectedText, tokens } = protectMarkdown(english);
  const metadataText = protectedText.replace(/⟦MARKDOWN_\d{4}⟧/g, '').trim();
  if (/^(?:\*{3}[^*]+\*{3}[.,]?\s*)?\d{4}[.\s]*$/.test(metadataText)) return english;
  if (/^\*{3}Wikipedia\*{3}[.\s]*$/.test(metadataText)) return english;
  const linkedImplementation = english.match(/^Official implementation of (.+?)[.]?$/);
  if (linkedImplementation) return `${linkedImplementation[1]}の公式実装。`;
  const linkedMinimalImplementation = english.match(/^Minimal implementation of (.+?)[.]?$/);
  if (linkedMinimalImplementation) return `${linkedMinimalImplementation[1]}の最小実装。`;
  const linkedMultiDeviceImplementation = english.match(
    /^Implementation of (.+?) with multi-device GPU\/TPU support[.]?$/
  );
  if (linkedMultiDeviceImplementation)
    return `マルチデバイスGPU／TPUをサポートする${linkedMultiDeviceImplementation[1]}の実装。`;
  const linkedGeneralImplementation = english.match(/^Implementation of (.+?)[.]?$/);
  if (linkedGeneralImplementation) return `${linkedGeneralImplementation[1]}の実装。`;
  const linkedOfficialTutorial = english.match(
    /^Official tutorial and implementation from the paper (.+?)[.]?$/
  );
  if (linkedOfficialTutorial) return `${linkedOfficialTutorial[1]}論文の公式チュートリアル兼実装。`;
  const linkedWorkshopPresentation = english.match(
    /^JAX intro presentation in (.+?) workshop[.]?$/
  );
  if (linkedWorkshopPresentation)
    return `${linkedWorkshopPresentation[1]}ワークショップでのJAX入門発表。`;
  const linkedOgbEntry = english.match(
    /^This repository contains DeepMind's entry to the (.+?) \(quantum chemistry\) and (.+?) \(academic graph\)[.]?$/
  );
  if (linkedOgbEntry)
    return `DeepMindが${linkedOgbEntry[1]}（量子化学）と${linkedOgbEntry[2]}（学術グラフ）へ提出した実装。`;
  if (english.startsWith("This repository contains DeepMind's entry to the ")) {
    const links = tokens.map(({ token }) => token);
    if (links.length === 2)
      return `DeepMindが${links[0]}（量子化学）と${links[1]}（学術グラフ）へ提出した実装。`;
    if (links.length === 3)
      return `DeepMindが${links[0]}（量子化学）と${links[1]}（学術グラフ）を${links[2]}（OGB-LSC）へ提出した実装。`;
  }
  if (tokens.length === 1) {
    const link = tokens[0].token;
    if (/^By\s+/.test(english)) return `${link}による。`;
    if (/^\(_using\s+/.test(english)) return `（${link}を使用）`;
    if (english.startsWith('A prototype web archives exploration UI, developed with researchers'))
      return `研究者と共同開発されたウェブアーカイブ探索UIのプロトタイプで、${link}の一環として制作されました。*(安定版)*`;
    if (english.startsWith('Implementation for the paper ')) return `${link}論文の実装。`;
    if (english.startsWith('Reference code for the paper ')) return `${link}論文の参照実装。`;
    if (english.startsWith('Code used for the paper ')) return `${link}論文で使用したコード。`;
    if (english.startsWith('JAX implementation of the paper ')) return `${link}論文のJAX実装。`;
    if (english.startsWith('Open source implementation of the paper '))
      return `${link}論文のオープンソース実装。`;
    if (english.startsWith('Baseline code to reproduce results in '))
      return `${link}の結果を再現するベースラインコード。`;
    if (english.startsWith('Code related to ')) return `${link}に関連するコード。`;
    if (english.startsWith('Code for the ICML 2021 paper '))
      return `ICML 2021の${link}論文のコード。`;
    if (english.startsWith('Checkpoints and model inference code for the ICCV 2021 paper '))
      return `ICCV 2021の${link}論文向けチェックポイントとモデル推論コード。`;
  }
  if (!protectedText.replace(/⟦MARKDOWN_\d{4}⟧/g, '').replace(/[./\s]/g, '')) return english;
  const unprotectedText = protectedText.replace(/⟦MARKDOWN_\d{4}⟧/g, '').trim();
  if (/^(?:API|SDK|CLI|GUI)[.]?$/.test(unprotectedText)) return english;
  if (/^\*{3}[^*]+\*{3},?\s+\d{4}[.]?$/.test(unprotectedText)) return english;
  const channelMatch = english.match(/^([#@][A-Za-z0-9_.+-]+)\s+on\s+(.+?)[.]?$/i);
  if (channelMatch) return `${channelMatch[2]}の${channelMatch[1]}。`;
  const forMatch = english.match(/^(.+?)\s+for\s+(.+?)[.]?$/i);
  if (forMatch && tokens.length === 0) return `${forMatch[2]}向けの${forMatch[1]}。`;
  if (/^[A-Z0-9.+#-]+\s+['"][A-Za-z0-9.+#_-]+['"][.]?(?:\s+\[[A-Z0-9.+# -]+\])?$/.test(english))
    return english;
  if (/^[A-Za-z0-9_.-]+(?:\/[A-Za-z0-9_.+#-]+)+[.]?$/.test(english)) return english;
  if (/^[A-Za-z0-9_.-]+ OSS:\s+[A-Za-z0-9_.-]+(?:\s*\+\s*[A-Za-z0-9_.-]+)+[.]?$/.test(english))
    return english;
  if (/^[A-Z][A-Za-z0-9_.+-]+\s+[a-z][A-Za-z0-9_.+-]+\s+\d+[.]?$/.test(english)) return english;
  if (/^[A-Za-z][A-Za-z0-9_.+-]+(?:\s*\+\s*[A-Za-z][A-Za-z0-9_.+-]+)+[.]?$/.test(english))
    return english;
  const officialImplementation = english.match(/^Official implementation of (.+?)[.]?$/);
  if (officialImplementation) return `${officialImplementation[1]}の公式実装。`;
  const minimalImplementation = english.match(/^Minimal implementation of (.+?)[.]?$/);
  if (minimalImplementation) return `${minimalImplementation[1]}の最小実装。`;
  const multiDeviceImplementation = english.match(
    /^Implementation of (.+?) with multi-device GPU\/TPU support[.]?$/
  );
  if (multiDeviceImplementation)
    return `マルチデバイスGPU／TPUをサポートする${multiDeviceImplementation[1]}の実装。`;
  const officialTutorial = english.match(
    /^Official tutorial and implementation from the paper (.+?)[.]?$/
  );
  if (officialTutorial) return `${officialTutorial[1]}論文の公式チュートリアル兼実装。`;
  const workshopPresentation = english.match(/^JAX intro presentation in (.+?) workshop[.]?$/);
  if (workshopPresentation) return `${workshopPresentation[1]}ワークショップでのJAX入門発表。`;
  const ogbEntry = english.match(
    /^This repository contains DeepMind's entry to the (.+?) \(quantum chemistry\) and (.+?) \(academic graph\)[.]?$/
  );
  if (ogbEntry)
    return `DeepMindが${ogbEntry[1]}（量子化学）と${ogbEntry[2]}（学術グラフ）へ提出した実装。`;
  return null;
}

async function translateBatch(entries, forceJapanese = false) {
  const prepared = entries.map(({ id, english }) => {
    const { protectedText, tokens } = protectMarkdown(english);
    return { id, english: protectedText, source: english, tokens };
  });
  const response = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      model,
      stream: false,
      think: false,
      format: {
        type: 'object',
        properties: {
          translations: {
            type: 'array',
            items: { type: 'string' },
            minItems: entries.length,
            maxItems: entries.length,
          },
        },
        required: ['translations'],
      },
      options: { temperature: 0.1, num_ctx: 8192, num_predict: 2048 },
      messages: [
        {
          role: 'system',
          content:
            '必ず日本語だけで回答する技術文書の英日翻訳者です。英語の各説明を、簡潔で自然な日本語へ正確に翻訳してください。英語の文をそのまま返してはいけません。製品名、固有名詞、⟦MARKDOWN_0000⟧形式の保護記号は一字も変えず、同じ位置に残してください。入力と同じ順序、同じ件数の文字列を返してください。' +
            (concise
              ? '書誌情報と保護記号はすべて保持し、本文は対象、目的、主要な手法または結論が分かる1〜2文の日本語へ正確に要約翻訳してください。項目固有の情報を一般的な定型文へ置き換えてはいけません。'
              : '情報を省略・追加しないでください。') +
            (forceJapanese
              ? 'これは再試行です。固有名詞以外の英語を必ず日本語にしてください。例: Works for Vue 2 & 3. → Vue 2と3で動作します。'
              : ''),
        },
        {
          role: 'user',
          content: `次の英語説明を日本語へ翻訳してください。\n${JSON.stringify(
            prepared.map(({ english }) => english)
          )}`,
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`Ollama API: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const parsed = JSON.parse(payload.message.content);
  if (parsed.translations.length !== entries.length) {
    throw new Error('翻訳結果の件数が入力と一致しません');
  }
  return prepared.map(({ id, source, tokens }, index) => {
    const japanese = restoreMarkdown(parsed.translations[index], tokens);
    const sourceWords = source.match(/[A-Za-z][A-Za-z0-9.+#-]*/g) ?? [];
    const properNameList =
      sourceWords.length === 0 ||
      sourceWords.every((word) => /^[A-Z]/.test(word) || /^[A-Z0-9.+#-]+$/.test(word));
    const valid = !(
      (!/[ぁ-んァ-ヶ一-龠]/.test(japanese) && !properNameList) ||
      /^\/?no[_ ]?think$/i.test(japanese.trim())
    );
    return { id, japanese, valid };
  });
}

const englishPath = path.join(contentRoot, 'en', file);
const japanesePath = path.join(contentRoot, 'ja', file);
if (!fs.existsSync(englishPath) || !fs.existsSync(japanesePath)) {
  console.error(`英日ページが見つかりません: ${file}`);
  process.exit(1);
}

const englishMarkdown = fs.readFileSync(englishPath, 'utf8');
const japaneseMarkdown = fs.readFileSync(japanesePath, 'utf8');
const englishItems = listItems(englishMarkdown);
const japaneseItems = listItems(japaneseMarkdown);
if (englishItems.length !== japaneseItems.length) {
  console.error(
    `リスト項目数が一致しません: en=${englishItems.length}, ja=${japaneseItems.length}`
  );
  process.exit(1);
}

const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
const affected = (
  explicitIndexes
    ? explicitIndexes
    : allDescriptions
      ? englishItems.flatMap(({ description }, index) => (description ? [index] : []))
      : reapplyCached || reapplyCachedLines
        ? englishItems.flatMap(({ description }, index) => {
            if (!description) return [];
            const key = crypto.createHash('sha256').update(description).digest('hex');
            return cache[key] ? [index] : [];
          })
        : collisionIndexes(englishItems, japaneseItems)
).slice(0, limit);
let pending = affected
  .filter((index) => englishItems[index].description)
  .map((index) => ({ index, english: englishItems[index].description }))
  .filter(
    ({ english }) => refresh || !cache[crypto.createHash('sha256').update(english).digest('hex')]
  )
  .slice(0, pendingLimit);

pending = pending.filter(({ english }) => {
  const fallback = deterministicFallback(english);
  if (!fallback) return true;
  cache[crypto.createHash('sha256').update(english).digest('hex')] = fallback;
  return false;
});

for (let offset = 0; offset < pending.length; offset += batchSize) {
  const batch = pending.slice(offset, offset + batchSize).map(({ index, english }) => ({
    id: index,
    english,
  }));
  let translations;
  let batchError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      translations = await translateBatch(batch);
      break;
    } catch (error) {
      batchError = error;
      if (attempt < 3) {
        console.warn(`翻訳バッチを再試行します (${attempt}/3): ${error.message}`);
      }
    }
  }
  if (!translations) {
    console.warn(`バッチを項目単位へ分割します: ${batchError.message}`);
    translations = [];
    for (const entry of batch) {
      let translated;
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        try {
          [translated] = await translateBatch([entry], true);
          if (translated.valid) break;
        } catch (error) {
          if (attempt === 3) {
            if (!partialApply) throw error;
            console.warn(`項目を保留します: ${entry.english} (${error.message})`);
            translated = { id: entry.id, valid: false, skip: true };
          }
        }
      }
      if (!translated?.valid) {
        if (translated?.skip) {
          translations.push(translated);
          continue;
        }
        throw new Error(`日本語ではない翻訳結果です: ${translated?.japanese}`);
      }
      translations.push(translated);
    }
  }
  for (let index = 0; index < translations.length; index += 1) {
    if (translations[index].skip) continue;
    if (translations[index].valid) continue;
    const entry = batch[index];
    let retry;
    let retryError;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        [retry] = await translateBatch([entry], true);
      } catch (error) {
        retryError = error;
        if (attempt < 3)
          console.warn(`項目の再試訳に失敗しました (${attempt}/3): ${error.message}`);
        continue;
      }
      if (retry.valid) break;
      console.warn(`項目を再試訳します (${attempt}/3): ${retry.japanese}`);
    }
    if (!retry?.valid) {
      const fallback = deterministicFallback(entry.english);
      if (!fallback) {
        if (!partialApply)
          throw new Error(retryError?.message ?? `日本語ではない翻訳結果です: ${retry?.japanese}`);
        translations[index] = { id: entry.id, valid: false, skip: true };
        console.warn(
          `項目を保留します: ${entry.english} (${retryError?.message ?? retry?.japanese})`
        );
        continue;
      }
      retry = { id: entry.id, japanese: fallback, valid: true };
      console.warn(`限定変換を適用します: ${entry.english} -> ${fallback}`);
    }
    translations[index] = retry;
  }
  for (const { id, japanese, skip } of translations) {
    if (skip) continue;
    const english = englishItems[id].description;
    cache[crypto.createHash('sha256').update(english).digest('hex')] = japanese;
  }
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);
  console.log(`翻訳済み: ${Math.min(offset + batch.length, pending.length)}/${pending.length}`);
}

const replacements = affected.flatMap((index) => {
  const english = englishItems[index].description;
  const japaneseItem = japaneseItems[index];
  if (japaneseItem?.suffixStart == null || japaneseItem?.suffixEnd == null) return [];
  if (!english) return { start: japaneseItem.suffixStart, end: japaneseItem.suffixEnd, value: '' };
  const key = crypto.createHash('sha256').update(english).digest('hex');
  const translation = normalizeCachedTranslation(english, cache[key]);
  if (!translation) {
    if (partialApply) return [];
    throw new Error(`翻訳キャッシュがありません: list index ${index}`);
  }
  const prefix = japaneseItem.description ? japaneseItem.prefix : ' - ';
  return [
    {
      start: japaneseItem.suffixStart,
      end: japaneseItem.suffixEnd,
      value: `${prefix}${translation}`,
    },
  ];
});

let output = japaneseMarkdown;
if (reapplyCachedLines) {
  const lines = output.split('\n');
  for (const index of affected) {
    const english = englishItems[index].description;
    const japaneseItem = japaneseItems[index];
    if (japaneseItem?.lineIndex == null || japaneseItem?.linkEndColumn == null) continue;
    const key = crypto.createHash('sha256').update(english).digest('hex');
    const translation = normalizeCachedTranslation(english, cache[key]);
    const prefix = japaneseItem.description ? japaneseItem.prefix : ' - ';
    const line = lines[japaneseItem.lineIndex];
    lines[japaneseItem.lineIndex] =
      `${line.slice(0, japaneseItem.linkEndColumn)}${prefix}${translation}`;
  }
  output = lines.join('\n');
} else {
  for (const replacement of replacements.sort((left, right) => right.start - left.start)) {
    output = `${output.slice(0, replacement.start)}${replacement.value}${output.slice(replacement.end)}`;
  }
}

console.log(`対象: ${affected.length}件（新規翻訳: ${pending.length}件）`);
if (preview) {
  for (const index of affected) {
    const english = englishItems[index].description;
    const key = english ? crypto.createHash('sha256').update(english).digest('hex') : null;
    console.log(`[${index}] EN: ${english || '(descriptionなし)'}`);
    console.log(`     JA: ${key ? cache[key] : '(削除対象)'}`);
  }
}
if (apply) {
  fs.writeFileSync(japanesePath, output);
  console.log(`更新: ${path.relative(rootDir, japanesePath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
