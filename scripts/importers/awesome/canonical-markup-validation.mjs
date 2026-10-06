import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export function inspectCanonicalMarkup(content, sourceId) {
  const parsed = matter(content);
  const comments = [];
  function visit(node) {
    if (node.type === 'html' && /<!--[\s\S]*?-->/.test(node.value))
      comments.push(node.position.start.line);
    for (const child of node.children ?? []) visit(child);
  }
  visit(unified().use(remarkParse).parse(parsed.content));
  return { sourceMatches: parsed.data.licenseSource === sourceId, comments };
}
