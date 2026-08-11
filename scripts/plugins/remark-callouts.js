import { visit } from 'unist-util-visit';

const CALLOUT_PATTERN = /^\[!([A-Z]+)\][ \t]+(.+)$/;
const CALLOUT_TYPES = new Set(['NOTE', 'TIP', 'WARNING', 'DANGER']);

function firstTextNode(paragraph) {
  return paragraph?.type === 'paragraph' && paragraph.children?.[0]?.type === 'text'
    ? paragraph.children[0]
    : undefined;
}

export function remarkCallouts() {
  return (tree, file) => {
    visit(tree, 'blockquote', (node) => {
      const marker = firstTextNode(node.children?.[0]);
      if (!marker) return;
      const [markerLine, ...bodyLines] = marker.value.split('\n');
      const candidate = markerLine.match(/^\[!([A-Z]+)\]/);
      if (!candidate) return;
      const match = markerLine.match(CALLOUT_PATTERN);
      const type = candidate[1];
      if (!match || !CALLOUT_TYPES.has(type)) {
        file.fail(`Unknown or malformed callout type: ${type}`, marker);
      }

      const label = match[2];
      node.data = {
        ...node.data,
        hProperties: {
          ...(node.data?.hProperties ?? {}),
          className: ['docs-callout', `docs-callout--${type.toLowerCase()}`],
          'data-callout': type.toLowerCase(),
        },
      };
      const originalParagraph = node.children[0];
      const remainingChildren = [...originalParagraph.children];
      const remainingText = bodyLines.join('\n');
      if (remainingText) {
        remainingChildren[0] = { ...marker, value: remainingText };
      } else {
        remainingChildren.shift();
      }
      const title = {
        type: 'paragraph',
        data: { hProperties: { className: ['docs-callout__title'] } },
        children: [{ type: 'strong', children: [{ type: 'text', value: label }] }],
      };
      const body = remainingChildren.length
        ? [{ ...originalParagraph, children: remainingChildren }]
        : [];
      node.children = [title, ...body, ...node.children.slice(1)];
    });
  };
}
