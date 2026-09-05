import type { AppDescriptor, GroupDescriptor } from './app-registry.js';
export interface GroupPage {
  documentId: string;
  appId: string;
  version: string;
  lang: string;
  slug: string;
  sourcePath: string;
  url: string;
  categoryId: string;
  order: number;
  title: string;
  description: string;
  licenseSource: string | null;
  repository?: string;
}
export interface CatalogApp {
  appId: string;
  versions: { id: string; name: string; date?: string; isLatest?: boolean; tag?: string }[];
  language?: { default?: string; supported?: string[]; displayNames?: Record<string, string> };
}
export interface GroupPageCatalog {
  schemaVersion: 1;
  navigationRevision: string;
  groupId: string;
  publicBase: string;
  versionMode: 'shared' | 'independent';
  apps: CatalogApp[];
  pages: GroupPage[];
}
export function collectAppPages(app: AppDescriptor): CatalogApp & { pages: GroupPage[] };
export function collectGroupPages(
  group: GroupDescriptor,
  members: AppDescriptor[]
): GroupPageCatalog;
export function loadGroupPages(
  directory?: string,
  options?: { cache?: boolean }
): GroupPageCatalog | null;
export function resolveGroupPageContext(
  catalog: GroupPageCatalog,
  context: { url: string; appId: string; version: string; lang: string }
): {
  documentId: string | null;
  languagePaths: { lang: string; path: string; isCurrent: boolean; exact: boolean }[];
  versions: CatalogApp['versions'];
  versionPaths: Record<string, string>;
};
export function resolveGroupPagination(
  catalog: GroupPageCatalog,
  url: string,
  options?: { scope?: 'category' | 'version'; order?: 'catalog' | 'document' }
): {
  prev?: { title: string; url: string };
  next?: { title: string; url: string };
};
export function resolveGroupDocumentLink(
  catalog: GroupPageCatalog,
  link: string,
  currentUrl: string
): { title: string; url: string };
