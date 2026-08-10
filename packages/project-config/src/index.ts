export * from './config';
export {
  resolveProjectDir,
  resolveLocaleDirection,
  loadProjectConfigFromJSON,
  loadProjectConfig,
  createLegacyConfig,
  migrateFromTypeScriptConfig,
  getDisplayName as getDisplayNameFromConfig,
  getDisplayDescription as getDisplayDescriptionFromConfig,
  getCategoryTranslations as getCategoryTranslationsFromConfig
} from './config-loader';
export * from './config-schema';
export * from './global-defaults';
export * from './jsonc';
