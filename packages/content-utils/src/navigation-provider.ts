import type { LocaleKey } from '@docs/i18n/locales';

type Result<T> = T | Promise<T>;

/** Local metadata only: providers must never compile sibling apps' documents. */
export interface DocumentationNavigationProvider {
  documentSlugs(): Result<string[]>;
  sidebar(
    lang: LocaleKey,
    version: string,
    baseUrl: string
  ): Result<
    {
      title: string;
      items: { title: string; href: string }[];
    }[]
  >;
  homeLinks(
    lang: LocaleKey,
    version: string,
    baseUrl: string
  ): Result<{
    document: string;
    siteTitle: string;
  }>;
}
