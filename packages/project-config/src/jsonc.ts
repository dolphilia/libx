/**
 * JSONC (JSON with comments) ユーティリティ
 * コメントや末尾カンマを許容した文字列をJSONとして読み込むための補助関数
 */

export function stripJsonComments(text: string): string {
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
        i++; // skip '/'
      }
      continue;
    }

    if (!inString && char === '/' && nextChar === '/') {
      inLineComment = true;
      i++; // skip second '/'
      continue;
    }

    if (!inString && char === '/' && nextChar === '*') {
      inBlockComment = true;
      i++; // skip '*'
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
