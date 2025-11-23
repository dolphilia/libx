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
const FALLBACK_BASE_URL_PREFIX = '/docs';
const FALLBACK_SUPPORTED_LANGS = ['en'];

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
    const content = fs.readFileSync(defaultsPath, 'utf-8');
    cachedDefaults = JSON.parse(content);
    return cachedDefaults;
  } catch (error) {
    console.warn(`⚠️  リポジトリ共通設定の読み込みに失敗しました: ${error.message}`);
  }

  return null;
}

function getDefaults() {
  return readRepositoryDefaults() || {};
}

function normalizeBasePath(value) {
  if (typeof value !== 'string') {
    return '/';
  }

  let normalized = value.trim();
  if (!normalized) {
    return '/';
  }

  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }

  normalized = normalized.replace(/\/{2,}/g, '/');

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || '/';
}

function normalizeSlug(value) {
  if (typeof value !== 'string') {
    return '';
  }

  let normalized = value.trim();
  if (!normalized) {
    return '';
  }

  normalized = normalized.replace(/^\//, '').replace(/\/$/, '');
  normalized = normalized.replace(/\s+/g, '-');
  return normalized;
}

export function getRepositoryDefaultLang() {
  const defaults = getDefaults();
  return typeof defaults.defaultLang === 'string' && defaults.defaultLang.length > 0
    ? defaults.defaultLang
    : FALLBACK_DEFAULT_LANG;
}

export function getRepositorySupportedLangs() {
  const defaults = getDefaults();
  if (defaults.language && Array.isArray(defaults.language.supported)) {
    return [...defaults.language.supported];
  }
  return null;
}

export function resolveDefaultLang(preferredLang) {
  if (typeof preferredLang === 'string' && preferredLang.length > 0) {
    return preferredLang;
  }

  return getRepositoryDefaultLang();
}

export function resolveSupportedLangs(preferredLangs) {
  if (Array.isArray(preferredLangs)) {
    return preferredLangs;
  }

  const repoSupported = getRepositorySupportedLangs();
  if (repoSupported) {
    return repoSupported;
  }

  return [...FALLBACK_SUPPORTED_LANGS];
}

export function resolveBaseUrlPrefix(baseUrlPrefix) {
  const defaults = getDefaults();
  if (typeof baseUrlPrefix === 'string' && baseUrlPrefix.trim().length > 0) {
    return normalizeBasePath(baseUrlPrefix);
  }

  if (typeof defaults.baseUrlPrefix === 'string' && defaults.baseUrlPrefix.trim().length > 0) {
    return normalizeBasePath(defaults.baseUrlPrefix);
  }
  return FALLBACK_BASE_URL_PREFIX;
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
  const { baseUrl, baseUrlPrefix, projectSlug, projectName } = options;

  if (typeof baseUrl === 'string' && baseUrl.trim().length > 0) {
    return normalizeBasePath(baseUrl);
  }

  const prefix = normalizeBasePath(resolveBaseUrlPrefix(baseUrlPrefix));
  const slug = resolveProjectSlug(projectSlug, projectName);

  if (!slug) {
    return prefix || '/';
  }

  const combined = `${prefix}/${slug}`.replace(/\/{2,}/g, '/');
  if (combined.length > 1 && combined.endsWith('/')) {
    return combined.slice(0, -1);
  }
  return combined || '/';
}
