import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { readJsoncFileAsync } from './jsonc-utils.js';
import { getContentSegmentError } from '../packages/project-config/src/content-id.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function nonEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validateProjectConfigData(
  config,
  { appId, contentCoordinates = [], licenseReferences = [] }
) {
  const errors = [];
  const supported = config.language?.supported ?? [];
  const versions = config.versioning?.versions ?? [];
  const versionIds = versions.map((item) => item.id);
  const categoryIds = new Set(
    Object.values(config.translations ?? {}).flatMap((translation) =>
      Object.keys(translation.categories ?? {})
    )
  );

  if (config.paths?.projectSlug !== appId) {
    errors.push(`paths.projectSlug must match app directory: ${appId}`);
  }
  const slugError = getContentSegmentError(config.paths?.projectSlug, 'paths.projectSlug');
  if (slugError) errors.push(slugError);
  if (!supported.includes(config.language?.default)) {
    errors.push('language.default must be included in language.supported');
  }
  for (const locale of supported) {
    if (!nonEmpty(config.language?.displayNames?.[locale])) {
      errors.push(`language.displayNames.${locale} is required`);
    }
    if (!config.translations?.[locale]) {
      errors.push(`translations.${locale} is required`);
    }
  }
  if (new Set(versionIds).size !== versionIds.length) {
    errors.push('version IDs must be unique');
  }
  for (const versionId of versionIds) {
    const versionError = getContentSegmentError(versionId, `version ID "${versionId}"`);
    if (versionError) errors.push(versionError);
    if (supported.includes(versionId) || categoryIds.has(versionId)) {
      errors.push(`version ID collides with a locale or category ID: ${versionId}`);
    }
  }
  for (const categoryId of categoryIds) {
    const categoryError = getContentSegmentError(categoryId, `category ID "${categoryId}"`);
    if (categoryError) errors.push(categoryError);
  }
  if (versions.filter((item) => item.isLatest === true).length !== 1) {
    errors.push('exactly one version must have isLatest=true');
  }

  for (const { version, locale } of contentCoordinates) {
    if (!versionIds.includes(version)) errors.push(`content uses unknown version: ${version}`);
    if (!supported.includes(locale)) errors.push(`content uses unsupported locale: ${locale}`);
  }
  for (const version of versionIds) {
    if (!contentCoordinates.some((item) => item.version === version)) {
      errors.push(`configured version has no content: ${version}`);
    }
  }

  const licensing = config.licensing;
  if (!licensing) {
    errors.push('licensing is required for distributed apps');
    return errors;
  }
  const sourceIds = new Set();
  for (const [index, source] of (licensing.sources ?? []).entries()) {
    for (const field of ['id', 'name', 'author', 'license', 'licenseUrl', 'sourceUrl']) {
      if (!nonEmpty(source[field])) errors.push(`licensing.sources[${index}].${field} is required`);
    }
    if (nonEmpty(source.id)) sourceIds.add(source.id);
  }
  if (!sourceIds.has(licensing.defaultSource)) {
    errors.push('licensing.defaultSource must reference an existing source');
  }
  if (!supported.includes(licensing.sourceLanguage)) {
    errors.push('licensing.sourceLanguage must be included in language.supported');
  }
  for (const { file, source } of licenseReferences) {
    if (!sourceIds.has(source)) errors.push(`${file} references unknown licenseSource: ${source}`);
  }

  return errors;
}

async function readContentMetadata(appDir) {
  const contentRoot = path.join(appDir, 'src/content/docs');
  const coordinates = [];
  const references = [];
  const versions = await fs.readdir(contentRoot, { withFileTypes: true });
  for (const versionEntry of versions.filter((entry) => entry.isDirectory())) {
    const versionDir = path.join(contentRoot, versionEntry.name);
    const locales = await fs.readdir(versionDir, { withFileTypes: true });
    for (const localeEntry of locales.filter((entry) => entry.isDirectory())) {
      coordinates.push({ version: versionEntry.name, locale: localeEntry.name });
      const files = await fs.readdir(path.join(versionDir, localeEntry.name), {
        recursive: true,
        withFileTypes: true,
      });
      for (const entry of files) {
        if (!entry.isFile() || !/\.mdx?$/.test(entry.name)) continue;
        const filePath = path.join(entry.parentPath, entry.name);
        const source = matter(await fs.readFile(filePath, 'utf8')).data.licenseSource;
        if (source) references.push({ file: path.relative(rootDir, filePath), source });
      }
    }
  }
  return { coordinates, references };
}

export async function validateRepositoryIntegrity(repositoryRoot = rootDir) {
  const errors = [];
  const languageNames = JSON.parse(
    await fs.readFile(path.join(repositoryRoot, 'packages/i18n/src/language-names.json'), 'utf8')
  );
  const localeFiles = (await fs.readdir(path.join(repositoryRoot, 'packages/i18n/src/locales')))
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''))
    .sort();
  const registeredLocales = Object.keys(languageNames).sort();
  if (JSON.stringify(localeFiles) !== JSON.stringify(registeredLocales)) {
    errors.push('i18n: locale dictionaries and language-names registry must have identical keys');
  }
  const appsDir = path.join(repositoryRoot, 'apps');
  const appIds = (await fs.readdir(appsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const appId of appIds) {
    const appDir = path.join(appsDir, appId);
    const config = await readJsoncFileAsync(path.join(appDir, 'src/config/project.config.jsonc'));
    for (const locale of config.language?.supported ?? []) {
      if (!registeredLocales.includes(locale)) errors.push(`${appId}: unknown locale ${locale}`);
    }
    const { coordinates, references } = await readContentMetadata(appDir);
    for (const error of validateProjectConfigData(config, {
      appId,
      contentCoordinates: coordinates,
      licenseReferences: references,
    })) {
      errors.push(`${appId}: ${error}`);
    }
  }

  const landing = await readJsoncFileAsync(
    path.join(repositoryRoot, 'sites/landing/src/config/projects.config.jsonc')
  );
  for (const decorationId of Object.keys(landing.projectDecorations ?? {})) {
    if (!appIds.includes(decorationId)) {
      errors.push(`landing: projectDecorations.${decorationId} has no matching app`);
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = await validateRepositoryIntegrity();
  if (errors.length) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Repository integrity: OK');
  }
}
