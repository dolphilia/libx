import { getCollection } from 'astro:content';
import type { DocumentationNavigationProvider } from '@docs/content-utils/navigation-provider';

const preparedSidebars = import.meta.glob('../../public/sidebar/sidebar-*.json', {
  eager: true,
  import: 'default',
});

export const navigation: DocumentationNavigationProvider = {
  async documentSlugs() {
    return (await getCollection('docs')).map((entry) => entry.slug);
  },
  async sidebar(lang, version) {
    const key = `../../public/sidebar/sidebar-${lang}-${version}.json`;
    const sidebar = preparedSidebars[key];
    if (!Array.isArray(sidebar)) throw new Error(`Prepared original-order sidebar missing: ${key}`);
    return structuredClone(sidebar);
  },
  async homeLinks(lang, version, baseUrl) {
    return {
      document: `${baseUrl.replace(/\/$/, '')}/${version}/${lang}/reference/overview`,
      siteTitle: `/${lang}`,
    };
  },
};
