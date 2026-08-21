export interface TableOfContentsHeading {
  depth: number;
  text: string;
  slug: string;
}

export interface TableOfContentsItem extends TableOfContentsHeading {
  children: TableOfContentsItem[];
}

export interface BuildTableOfContentsOptions {
  minLevel?: number;
  maxLevel?: number;
  maxItems?: number;
}

/**
 * Astroの平坦な見出し列を、文書内の見出しレベルに従う目次ツリーへ変換する。
 * 見出しレベルが飛んだ場合は、直前にある最も近い上位見出しへ所属させる。
 */
export function buildTableOfContents(
  headings: readonly TableOfContentsHeading[],
  options: BuildTableOfContentsOptions = {}
): TableOfContentsItem[] {
  const minLevel = options.minLevel ?? 2;
  const maxLevel = options.maxLevel ?? 3;
  const visibleHeadings = headings
    .filter((heading) => heading.depth >= minLevel && heading.depth <= maxLevel)
    .slice(0, options.maxItems);

  const roots: TableOfContentsItem[] = [];
  const stack: TableOfContentsItem[] = [];

  for (const heading of visibleHeadings) {
    const item: TableOfContentsItem = { ...heading, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].depth >= item.depth) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    if (parent) {
      parent.children.push(item);
    } else {
      roots.push(item);
    }
    stack.push(item);
  }

  return roots;
}

export function countTableOfContentsItems(items: readonly TableOfContentsItem[]): number {
  return items.reduce((count, item) => count + 1 + countTableOfContentsItems(item.children), 0);
}
