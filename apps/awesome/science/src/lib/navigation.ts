import type { DocumentationNavigationProvider } from '@docs/content-utils/navigation-provider';
import { getProjectConfig } from '@docs/project-config';
import routes from '../generated/awesome-routes.json';
import localizedRoutes from '../generated/awesome-localized-routes.json';

// The owning app's generated metadata supplies navigation without a content collection.
export const navigation: DocumentationNavigationProvider = {
  documentSlugs() {
    return localizedRoutes.entries.map((entry) => `${entry.version}/${entry.lang}/${entry.slug}`);
  },
  async sidebar(lang, version, baseUrl) {
    const config = await getProjectConfig();
    const names = config.translations[lang]?.categories ?? {};
    const entries = localizedRoutes.entries.filter(
      (entry) => entry.lang === lang && entry.version === version
    );
    return routes.categories
      .map((category) => ({
        title: names[category.id] ?? category.name,
        items: entries
          .filter((entry) => entry.categoryId === category.id)
          .map((entry) => ({
            title: entry.navigationTitle,
            href: `${baseUrl}/${entry.version}/${entry.lang}/${entry.slug}`,
          })),
      }))
      .filter((category) => category.items.length > 0);
  },
  homeLinks(lang, version, baseUrl) {
    const home = `${baseUrl}/${version}/${lang}/`;
    return { document: home, siteTitle: home };
  },
};
