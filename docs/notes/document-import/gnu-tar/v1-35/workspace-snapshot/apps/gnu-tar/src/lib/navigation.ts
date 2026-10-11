import { getCollection } from 'astro:content';
import { generateRedirectUrl, getSidebarAsync } from '@docs/content-utils';
import type { DocumentationNavigationProvider } from '@docs/content-utils/navigation-provider';

export const navigation: DocumentationNavigationProvider = {
  async documentSlugs() {
    return (await getCollection('docs')).map((entry) => entry.slug);
  },
  sidebar: getSidebarAsync,
  async homeLinks(lang, _version, baseUrl) {
    return { document: await generateRedirectUrl(lang, baseUrl), siteTitle: `/${lang}` };
  },
};
