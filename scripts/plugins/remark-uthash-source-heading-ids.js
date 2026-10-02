export function remarkSourceHeadingIds() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i],
          match =
            child.type === 'html' &&
            child.value.match(/^\s*<!--libx-source-heading:([A-Za-z0-9_.:-]+)-->\s*$/);
        if (match) {
          const heading = node.children[i + 1];
          if (heading?.type !== 'heading')
            throw Error('Source heading marker lacks Markdown heading');
          heading.data ??= {};
          heading.data.hProperties ??= {};
          heading.data.hProperties.id = match[1];
          node.children.splice(i, 1);
          i--;
        } else visit(child);
      }
    };
    visit(tree);
  };
}
