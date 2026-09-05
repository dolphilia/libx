export interface AppDescriptor {
  id: string;
  directory: string;
  groupId: string | null;
  packageName: string;
  projectSlug: string;
  publicBase: string;
  outputDirectory: string;
}
export interface GroupConfig {
  schemaVersion: 1;
  name: Record<string, string>;
  entry: string;
  order?: string[];
  versioning?: { mode: 'shared' | 'independent' };
  paths?: { baseUrl: string };
}
export interface GroupDescriptor {
  id: string;
  directory: string;
  config: GroupConfig;
  publicBase: string;
  versionMode: 'shared' | 'independent';
  memberIds: string[];
}
export function findRepositoryRoot(start?: string): string;
export function readAppGroup(directory: string): GroupDescriptor | null;
export function discoverApps(repositoryRoot?: string): {
  root: string;
  apps: AppDescriptor[];
  groups: GroupDescriptor[];
};
export function resolveApp(id: string, repositoryRoot?: string): AppDescriptor;
export function selectApps(
  selection: { projects?: string; group?: string },
  repositoryRoot?: string
): AppDescriptor[];
