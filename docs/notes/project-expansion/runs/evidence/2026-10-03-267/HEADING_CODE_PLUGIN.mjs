// Raw HTML headings are otherwise parsed after Astro collects the page TOC.
// Promote Ninja's source headings and literal code blocks before TOC/copy enhancement.
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
  return (tree) => {
    // Registered only by the Ninja app; legacy collection render paths vary.
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
          /<h([1-6])\s+id="([A-Za-z0-9_-]+)"\s*>([\s\S]*?)<\/h\1>|<pre>([\s\S]*?)<\/pre>/g
        )) {
          if (match.index > offset)
            output.push({ type: 'raw', value: node.value.slice(offset, match.index) });
          if (match[1]) {
            output.push({
              type: 'element',
              tagName: 'h' + match[1],
              properties: { id: match[2] },
              children: inline(match[3]),
            });
          } else {
            if (/<[a-z][^>]*>/i.test(match[4]))
              throw new Error('Unsupported Ninja code inline HTML');
            output.push({
              type: 'element',
              tagName: 'pre',
              properties: {},
              children: [{
                type: 'element',
                tagName: 'code',
                properties: {},
                children: [{ type: 'text', value: decode(match[4]) }],
              }],
            });
          }
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
