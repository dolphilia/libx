import fs from 'fs';
import fsp from 'fs/promises';

export function stripJsonComments(text) {
  let result = '';
  let inString = false;
  let inLineComment = false;
  let inBlockComment = false;
  let prevChar = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = i + 1 < text.length ? text[i + 1] : '';

    if (inLineComment) {
      if (char === '\n' || char === '\r') {
        inLineComment = false;
        result += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === '*' && nextChar === '/') {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (!inString && char === '/' && nextChar === '/') {
      inLineComment = true;
      i++;
      continue;
    }

    if (!inString && char === '/' && nextChar === '*') {
      inBlockComment = true;
      i++;
      continue;
    }

    result += char;

    if (char === '"' && prevChar !== '\\') {
      inString = !inString;
    }

    prevChar = char === '\\' && prevChar === '\\' ? '' : char;
  }

  return result;
}

export function readJsoncFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(stripJsonComments(raw));
}

export async function readJsoncFileAsync(filePath) {
  const raw = await fsp.readFile(filePath, 'utf-8');
  return JSON.parse(stripJsonComments(raw));
}

const PROJECT_CONFIG_SECTIONS = [
  { key: '"basic": {', comment: '// 基本設定' },
  { key: '"languageNames": {', comment: '// プロジェクト固有の言語表示名（必要に応じて上書き）' },
  { key: '"translations": {', comment: '// 各言語の表示情報とカテゴリ名' },
  { key: '"versioning": {', comment: '// バージョン管理' },
  { key: '"licensing": {', comment: '// ライセンス情報' }
];

const LANDING_CONFIG_SECTIONS = [
  { key: '"siteConfig": {', comment: '// ランディングページ全体の設定' },
  { key: '"projectDecorations": {', comment: '// プロジェクトカードの装飾情報' }
];

export function formatProjectConfigJsonc(text) {
  return insertSectionComments(text, PROJECT_CONFIG_SECTIONS);
}

export function formatLandingConfigJsonc(text) {
  return insertSectionComments(text, LANDING_CONFIG_SECTIONS);
}

function insertSectionComments(text, sections) {
  let result = text;
  for (const { key, comment } of sections) {
    const regex = new RegExp(`(^\\s*)${escapeRegExp(key)}`, 'm');
    result = result.replace(regex, (_match, indent) => {
      return `${indent}${comment}\n${indent}${key}`;
    });
  }
  return result;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
