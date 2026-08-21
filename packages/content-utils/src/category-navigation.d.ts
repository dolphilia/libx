export type CategoryTranslations = Record<string, Record<string, string>>;

export function getCategoryId(directoryName: string | null | undefined): string;
export function humanizeCategoryId(categoryId: string): string;
export function resolveCategoryLabel(options: {
  categoryId: string;
  lang: string;
  defaultLang: string;
  translations?: CategoryTranslations | null;
}): string;
