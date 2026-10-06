// Raw HTML headings are otherwise parsed after Astro collects the page TOC.
// Promote only ninja's explicit JA heading blocks, keeping their stable source IDs.
const decode = (value) =>
  value.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (_, entity) => {
    if (entity[0] === '#')
      return String.fromCodePoint(
        entity[1].toLowerCase() === 'x'
          ? parseInt(entity.slice(2), 16)
          : parseInt(entity.slice(1), 10)
      );
    return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }[entity.toLowerCase()];
  });
function inline(value) {
  const children = [];
  const code = /<code>([\s\S]*?)<\/code>/g;
  let offset = 0;
  const append = (text) => {
    if (!text) return;
    if (/<\/?[a-z][^>]*>/i.test(text)) throw new Error('Unsupported ninja heading inline HTML');
    children.push({ type: 'text', value: decode(text) });
  };
  for (const match of value.matchAll(code)) {
    append(value.slice(offset, match.index));
    children.push({
      type: 'element',
      tagName: 'code',
      properties: {},
      children: [{ type: 'text', value: decode(match[1]) }],
    });
    offset = match.index + match[0].length;
  }
  append(value.slice(offset));
  return children;
}
export default function explicitNinjaHeadings() {
  return (tree, file) => {
    // Registered only by the Ninja trial app; legacy collection render paths vary.
    const visit = (parent) => {
      if (!parent.children) return;
      parent.children = parent.children.flatMap((node) => {
        if (node.type !== 'raw') {
          visit(node);
          return [node];
        }
        const output = [];
        let offset = 0;
        for (const match of node.value.matchAll(
          /<h([1-6])\s+id="([A-Za-z0-9_-]+)"\s*>([\s\S]*?)<\/h\1>/g
        )) {
          if (match.index > offset)
            output.push({ type: 'raw', value: node.value.slice(offset, match.index) });
          output.push({
            type: 'element',
            tagName: 'h' + match[1],
            properties: { id: match[2] },
            children: inline(match[3]),
          });
          offset = match.index + match[0].length;
        }
        if (!offset) return [node];
        if (offset < node.value.length)
          output.push({ type: 'raw', value: node.value.slice(offset) });
        return output;
      });
    };
    visit(tree);
  };
}
