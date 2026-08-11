export type PathPattern = 'version-first' | 'locale-first';

export interface VersionCandidate {
  id: string;
  isLatest?: boolean;
}

export interface AvailableLanguagePath {
  lang: string;
  name: string;
  path: string;
  isCurrent: boolean;
}

/** 現在の言語で、同じ相対スラッグが実在する版IDだけを返す。 */
export function collectAvailableVersionIds({
  documentSlugs,
  language,
  relativeSlug,
}: {
  documentSlugs: string[];
  language: string;
  relativeSlug: string;
}): Set<string> {
  const normalizedSlug = relativeSlug.replace(/^\/+|\/+$/g, '');
  return new Set(
    documentSlugs.flatMap((documentSlug) => {
      const [version, documentLanguage, ...slugParts] = documentSlug.split('/');
      if (!version || documentLanguage !== language) return [];
      if (normalizedSlug && slugParts.join('/') !== normalizedSlug) return [];
      return [version];
    })
  );
}

export function buildAvailableLanguagePaths({
  documentSlugs,
  supportedLanguages,
  displayNames,
  baseUrl,
  version,
  currentLanguage,
  relativeSlug,
}: {
  documentSlugs: string[];
  supportedLanguages: string[];
  displayNames: Record<string, string>;
  baseUrl: string;
  version: string;
  currentLanguage: string;
  relativeSlug: string;
}): AvailableLanguagePath[] {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  const normalizedSlug = relativeSlug.replace(/^\/+|\/+$/g, '');
  return supportedLanguages.flatMap((language) => {
    const prefix = `${version}/${language}/`;
    const hasContent = normalizedSlug
      ? documentSlugs.includes(`${prefix}${normalizedSlug}`)
      : documentSlugs.some((slug) => slug.startsWith(prefix));
    if (!hasContent) return [];
    const suffix = normalizedSlug ? `/${normalizedSlug}` : '';
    return [
      {
        lang: language,
        name: displayNames[language] ?? language,
        path: `${normalizedBase}/${version}/${language}${suffix}/`,
        isCurrent: language === currentLanguage,
      },
    ];
  });
}

export function selectLatestVersionId(
  availableVersionIds: string[],
  configuredVersions: VersionCandidate[] = []
): string {
  const available = [...new Set(availableVersionIds)].sort((a, b) => {
    const numberA = Number.parseInt(a.replace(/^v/i, ''), 10);
    const numberB = Number.parseInt(b.replace(/^v/i, ''), 10);
    return numberB - numberA;
  });

  return (
    available[0] ??
    configuredVersions.find((version) => version.isLatest)?.id ??
    configuredVersions[0]?.id ??
    'v1'
  );
}

function cleanSegment(segment: string): string {
  return segment.replace(/^\/+|\/+$/g, '');
}

export function buildDocumentPath(
  version: string,
  lang: string,
  relativePath?: string | string[],
  pathPattern: PathPattern = 'version-first'
): string {
  const relativeSegments = Array.isArray(relativePath)
    ? relativePath
    : relativePath
      ? relativePath.split('/')
      : [];
  const cleanedSegments = relativeSegments
    .map(cleanSegment)
    .filter((segment) => segment.length > 0);
  const baseSegments = pathPattern === 'locale-first' ? [lang, version] : [version, lang];

  return `/${[...baseSegments, ...cleanedSegments].map(cleanSegment).join('/')}`;
}
