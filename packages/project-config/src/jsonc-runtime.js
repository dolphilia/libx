/** Remove JSONC comments while preserving comment-like text inside strings. */
export function stripJsonComments(text) {
  let result = '';
  let inString = false;
  let inLineComment = false;
  let inBlockComment = false;
  let previous = '';

  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    const next = text[index + 1] ?? '';
    if (inLineComment) {
      if (character === '\n' || character === '\r') {
        inLineComment = false;
        result += character;
      }
      continue;
    }
    if (inBlockComment) {
      if (character === '*' && next === '/') {
        inBlockComment = false;
        index++;
      }
      continue;
    }
    if (!inString && character === '/' && next === '/') {
      inLineComment = true;
      index++;
      continue;
    }
    if (!inString && character === '/' && next === '*') {
      inBlockComment = true;
      index++;
      continue;
    }
    result += character;
    if (character === '"' && previous !== '\\') inString = !inString;
    previous = character === '\\' && previous === '\\' ? '' : character;
  }
  return result;
}
