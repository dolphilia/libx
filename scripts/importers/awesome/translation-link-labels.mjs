import { unified } from 'unified';
import remarkParse from 'remark-parse';

// 表示名中のURLをリンク先として二重計上しない。位置と改行は維持する。
// 自動リンク、本文中のURL、コードの内容、リンク先と参照定義は変更しない。
// URL抽出時だけインラインコードの区切りを空白にし、後続の日本語を連結させない。
export function maskMarkdownLinkLabels(markdown, { maskInlineCodeDelimiters = false } = {}) {
  const spans = [];
  function maskText(node) {
    if (['text', 'inlineCode'].includes(node.type))
      spans.push([node.position.start.offset, node.position.end.offset]);
    for (const child of node.children ?? []) maskText(child);
  }
  function visit(node) {
    if (
      ['link', 'linkReference'].includes(node.type) &&
      markdown[node.position?.start.offset] === '['
    ) {
      for (const child of node.children ?? []) maskText(child);
      return;
    }
    if (maskInlineCodeDelimiters && node.type === 'inlineCode') {
      const { start, end } = node.position;
      const raw = markdown.slice(start.offset, end.offset);
      const delimiter = raw.match(/^`+/)?.[0];
      if (delimiter && raw.endsWith(delimiter)) {
        spans.push([start.offset, start.offset + delimiter.length]);
        spans.push([end.offset - delimiter.length, end.offset]);
      }
    }
    for (const child of node.children ?? []) visit(child);
  }
  visit(unified().use(remarkParse).parse(markdown));
  let result = markdown;
  for (const [start, end] of spans.sort((a, b) => b[0] - a[0]))
    result = result.slice(0, start) + result.slice(start, end).replace(/[^\n\r]/g, ' ') + result.slice(end);
  return result;
}
