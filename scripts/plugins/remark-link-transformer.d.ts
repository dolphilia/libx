import type { Plugin } from 'unified';
import type { Root } from 'mdast';

export const remarkLinkTransformer: Plugin<[options?: { baseUrl?: string }], Root>;
