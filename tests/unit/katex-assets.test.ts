import assert from 'node:assert/strict';
import test from 'node:test';
import { keepKatexWoff2Only } from '../../scripts/plugins/katex-woff2-only.js';

test('KaTeX CSS keeps its WOFF2 source and removes legacy font fallbacks', () => {
  const css =
    '@font-face{src:url(font.woff2) format("woff2"),url(font.woff) format("woff"),url(font.ttf) format("truetype")}';
  const result = keepKatexWoff2Only(css);
  assert.match(result, /font\.woff2/);
  assert.doesNotMatch(result, /font\.woff\)/);
  assert.doesNotMatch(result, /font\.ttf/);
});
