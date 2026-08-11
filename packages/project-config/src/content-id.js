export const SAFE_CONTENT_SEGMENT_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function suggestSafeContentSegment(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getContentSegmentError(value, label = 'ID') {
  if (typeof value !== 'string' || !SAFE_CONTENT_SEGMENT_PATTERN.test(value)) {
    const suggestion = suggestSafeContentSegment(value);
    return `${label}は小文字英数字と単一ハイフンだけを使用してください${suggestion ? `（例: ${suggestion}）` : ''}`;
  }
  return null;
}
