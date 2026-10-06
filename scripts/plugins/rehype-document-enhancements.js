const COPY_LABELS = {
  en: ['Copy code', 'Copied'],
  ja: ['コードをコピー', 'コピーしました'],
  ar: ['نسخ الكود', 'تم النسخ'],
};

function localeFromPath(filePath = '') {
  return (
    filePath.match(/[\\/](?:docs|awesome-content)[\\/][^\\/]+[\\/]([^\\/]+)[\\/]/)?.[1] ?? 'en'
  );
}

// Japanese prose has no word spaces, so wide comparison tables can squeeze a
// description down to a few characters. Keep those cells readable in the
// existing horizontal scroller without changing their text or inline code.
function markJapaneseTableProse(table) {
  const rows = [];
  function collectRows(node) {
    if (node.tagName === 'tr') rows.push(node);
    else if (node !== table && node.tagName === 'table') return;
    else for (const child of node.children ?? []) collectRows(child);
  }
  collectRows(table);
  const cells = (row) => (row.children ?? []).filter((cell) =>
    cell.type === 'element' && ['td', 'th'].includes(cell.tagName));
  if (!rows.some((row) => cells(row).reduce((n, cell) =>
    n + Math.max(1, Number(cell.properties?.colSpan) || 1), 0) >= 4)) return;
  function prose(node) {
    if (node.tagName === 'code' || node.tagName === 'table') return '';
    if (node.type === 'text') return node.value ?? '';
    return (node.children ?? []).map(prose).join('');
  }
  for (const row of rows) {
    for (const cell of cells(row)) {
      if (cell.tagName !== 'td' ||
          (prose(cell).match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu)?.length ?? 0) < 24) continue;
      cell.properties ??= {};
      const existing = cell.properties.className;
      const classes = Array.isArray(existing) ? existing : String(existing ?? '').split(/\s+/).filter(Boolean);
      cell.properties.className = [...new Set([...classes, 'docs-table-prose'])];
    }
  }
}

export function enhanceDocumentTree(tree, filePath = '') {
  const locale = localeFromPath(filePath);
  const [copyLabel, copiedLabel] = COPY_LABELS[locale] ?? COPY_LABELS.en;
  let hasCode = false;

  function transform(parent) {
    if (!Array.isArray(parent.children)) return;
    parent.children = parent.children.map((node) => {
      if (locale === 'ja' && node.type === 'element') {
        if (
          parent.tagName === 'section' &&
          (parent.properties?.dataFootnotes !== undefined ||
            parent.properties?.['data-footnotes'] !== undefined) &&
          node.tagName === 'h2' &&
          node.properties?.id === 'footnote-label' &&
          node.children?.length === 1 &&
          node.children[0].type === 'text' &&
          node.children[0].value === 'Footnotes'
        ) {
          node.children[0].value = '脚注';
        }
        if (
          node.tagName === 'a' &&
          (node.properties?.dataFootnoteBackref !== undefined ||
            node.properties?.['data-footnote-backref'] !== undefined)
        ) {
          const reference = node.properties.ariaLabel?.match(/^Back to reference ([\d-]+)$/)?.[1];
          if (reference) node.properties.ariaLabel = `脚注参照${reference}へ戻る`;
        }
      }
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
        if (locale === 'ja') markJapaneseTableProse(node);
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
