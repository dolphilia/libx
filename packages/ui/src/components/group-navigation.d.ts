export interface GroupNavigationItem {
  title: string;
  href?: string;
  items?: GroupNavigationItem[];
}
export interface GroupNavigation {
  schemaVersion: 1;
  version: string;
  lang: string;
  items: GroupNavigationItem[];
  revision?: string;
}
export function validateGroupNavigation(
  value: unknown,
  context: { baseUrl: string; version: string; lang: string; revision?: string }
): GroupNavigation;
