import type { Plugin } from 'unified';
import type { Root } from 'hast';

export const rehypeDocumentEnhancements: Plugin<[], Root>;
export const enhanceDocumentTree: (tree: unknown, filePath?: string) => unknown;
