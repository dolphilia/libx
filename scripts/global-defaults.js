#!/usr/bin/env node

/**
 * リポジトリ共通のデフォルト設定を読み込むユーティリティ
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const defaultsPath = path.join(rootDir, 'config', 'global-defaults.json');
const FALLBACK_DEFAULT_LANG = 'en';

let cachedDefaultLang = null;
let loadAttempted = false;

function readRepositoryDefaultLang() {
  if (cachedDefaultLang) {
    return cachedDefaultLang;
  }

  if (loadAttempted) {
    return null;
  }

  loadAttempted = true;

  try {
    const content = fs.readFileSync(defaultsPath, 'utf-8');
    const parsed = JSON.parse(content);
    if (typeof parsed?.defaultLang === 'string') {
      cachedDefaultLang = parsed.defaultLang;
      return cachedDefaultLang;
    }
  } catch (error) {
    console.warn(`⚠️  リポジトリ共通設定の読み込みに失敗しました: ${error.message}`);
  }

  return null;
}

export function getRepositoryDefaultLang() {
  return readRepositoryDefaultLang() || FALLBACK_DEFAULT_LANG;
}

export function resolveDefaultLang(preferredLang) {
  if (typeof preferredLang === 'string' && preferredLang.length > 0) {
    return preferredLang;
  }

  return getRepositoryDefaultLang();
}
