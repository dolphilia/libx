#!/usr/bin/env node

/**
 * リポジトリ共通のデフォルト設定を読み込むユーティリティ
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { readJsoncFile } from './jsonc-utils.js';
import {
  normalizeSlug,
  resolveBaseUrlPrefixValue,
  resolveBaseUrlValue,
  resolveDefaultLangValue,
  resolveDisplayNamesValue,
  resolveSupportedLangsValue,
} from '../packages/project-config/default-resolvers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const defaultsPath = path.join(rootDir, 'config', 'global-defaults.jsonc');

let cachedDefaults = null;
let loadAttempted = false;

function readRepositoryDefaults() {
  if (cachedDefaults) {
    return cachedDefaults;
  }

  if (loadAttempted) {
    return null;
  }

  loadAttempted = true;

  try {
    cachedDefaults = readJsoncFile(defaultsPath);
    return cachedDefaults;
  } catch (error) {
    console.warn(`⚠️  リポジトリ共通設定の読み込みに失敗しました: ${error.message}`);
  }

  return null;
}

function getDefaults() {
  return readRepositoryDefaults() || {};
}

export function getRepositoryDefaultLang() {
  return resolveDefaultLangValue(getDefaults());
}

export function getRepositorySupportedLangs() {
  const defaults = getDefaults();
  if (defaults.language && Array.isArray(defaults.language.supported)) {
    return [...defaults.language.supported];
  }
  return null;
}

export function resolveDefaultLang(preferredLang) {
  return resolveDefaultLangValue(getDefaults(), preferredLang);
}

export function resolveSupportedLangs(preferredLangs) {
  return resolveSupportedLangsValue(getDefaults(), preferredLangs);
}

export function getRepositoryLanguageDisplayNames() {
  const defaults = getDefaults();
  if (defaults.language && defaults.language.displayNames) {
    return { ...defaults.language.displayNames };
  }
  return null;
}

export function resolveLanguageDisplayNames(preferredDisplayNames) {
  return resolveDisplayNamesValue(getDefaults(), preferredDisplayNames);
}

export function resolveBaseUrlPrefix(baseUrlPrefix) {
  return resolveBaseUrlPrefixValue(getDefaults(), baseUrlPrefix);
}

export function resolveProjectSlug(projectSlug, projectName) {
  const normalized = normalizeSlug(projectSlug);
  if (normalized) {
    return normalized;
  }

  if (typeof projectName === 'string') {
    return normalizeSlug(projectName);
  }

  return '';
}

export function resolveBaseUrl(options = {}) {
  return resolveBaseUrlValue(getDefaults(), options);
}
