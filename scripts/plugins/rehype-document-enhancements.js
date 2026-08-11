const COPY_LABELS = {
  en: ['Copy code', 'Copied'],
  ja: ['コードをコピー', 'コピーしました'],
  ar: ['نسخ الكود', 'تم النسخ'],
};

function localeFromPath(filePath = '') {
  return filePath.match(/[\\/]docs[\\/][^\\/]+[\\/]([^\\/]+)[\\/]/)?.[1] ?? 'en';
}

export function enhanceDocumentTree(tree, filePath = '') {
  const locale = localeFromPath(filePath);
  const [copyLabel, copiedLabel] = COPY_LABELS[locale] ?? COPY_LABELS.en;
  let hasCode = false;

  function transform(parent) {
    if (!Array.isArray(parent.children)) return;
    parent.children = parent.children.map((node) => {
      if (node.type === 'element' && node.tagName === 'pre') {
        hasCode = true;
        const language = node.properties?.['data-language'];
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['docs-code-frame'] },
          children: [
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['docs-code-toolbar'] },
              children: [
                ...(language
                  ? [
                      {
                        type: 'element',
                        tagName: 'span',
                        properties: {},
                        children: [{ type: 'text', value: String(language) }],
                      },
                    ]
                  : []),
                {
                  type: 'element',
                  tagName: 'button',
                  properties: {
                    type: 'button',
                    className: ['docs-code-copy'],
                    'data-copy-label': copyLabel,
                    'data-copied-label': copiedLabel,
                    ariaLabel: copyLabel,
                  },
                  children: [{ type: 'text', value: copyLabel }],
                },
              ],
            },
            node,
          ],
        };
      }
      if (node.type === 'element' && node.tagName === 'table') {
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['docs-table-scroll'], tabIndex: 0 },
          children: [node],
        };
      }
      transform(node);
      return node;
    });
  }

  transform(tree);
  if (hasCode) {
    tree.children.push({
      type: 'element',
      tagName: 'script',
      properties: { type: 'module' },
      children: [
        {
          type: 'text',
          value: `document.addEventListener('click',async e=>{const b=e.target.closest?.('.docs-code-copy');if(!b)return;const c=b.closest('.docs-code-frame')?.querySelector('code');if(!c)return;await navigator.clipboard.writeText(c.textContent??'');b.textContent=b.dataset.copiedLabel;setTimeout(()=>b.textContent=b.dataset.copyLabel,1500)});`,
        },
      ],
    });
  }
  return tree;
}

export function rehypeDocumentEnhancements() {
  return (tree, file) => enhanceDocumentTree(tree, file.path);
}
