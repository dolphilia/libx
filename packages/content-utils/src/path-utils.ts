export type PathPattern = 'version-first' | 'locale-first';

export interface VersionCandidate {
  id: string;
  isLatest?: boolean;
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
  const baseSegments =
    pathPattern === 'locale-first' ? [lang, version] : [version, lang];

  return `/${[...baseSegments, ...cleanedSegments].map(cleanSegment).join('/')}`;
}
