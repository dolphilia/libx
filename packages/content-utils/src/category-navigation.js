const ORDER_PREFIX_PATTERN = /^\d+-/;

/**
 * カテゴリディレクトリ名から、順序に依存しないカテゴリIDを得る。
 * 例: `02-getting-started` -> `getting-started`
 */
export function getCategoryId(directoryName) {
  const categoryId = String(directoryName || 'uncategorized').replace(ORDER_PREFIX_PATTERN, '');
  return categoryId || 'uncategorized';
}

/** カテゴリIDを、設定がない場合の人間向けラベルへ変換する。 */
export function humanizeCategoryId(categoryId) {
  const words = getCategoryId(categoryId).replace(/[-_]+/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/**
 * 表示言語、プロジェクトの既定言語、ID整形の順でカテゴリ表示名を解決する。
 */
export function resolveCategoryLabel({ categoryId, lang, defaultLang, translations }) {
  const normalizedId = getCategoryId(categoryId);
  const localizedLabel = translations?.[lang]?.[normalizedId];
  if (typeof localizedLabel === 'string' && localizedLabel.trim()) {
    return localizedLabel;
  }

  const defaultLabel = translations?.[defaultLang]?.[normalizedId];
  if (typeof defaultLabel === 'string' && defaultLabel.trim()) {
    return defaultLabel;
  }

  return humanizeCategoryId(normalizedId);
}
