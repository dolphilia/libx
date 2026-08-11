/**
 * i18n ユーティリティ関数
 */

import { getCurrentLanguage as getLanguage } from './getLanguage.js';
import { switchLanguage as translatePath } from './translatePath.js';
import { t as translate } from './translate.js';
import { getLicenseTemplate, getLicenseTemplateKey, getLicenseCategory } from './license.js';
import { getLocaleFromPathname } from './localeFromPathname.js';

export {
  getLanguage,
  translatePath,
  translate,
  getLicenseTemplate,
  getLicenseTemplateKey,
  getLicenseCategory,
  getLocaleFromPathname,
};
