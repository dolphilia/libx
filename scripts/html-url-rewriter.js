import { LOCALE_PATH_SEGMENT_PATTERN, VERSION_PATH_SEGMENT_PATTERN } from './locale-utils.js';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Astro生成HTML内の既知のベースURLを統合出力用URLへ置換する。
 */
export function rewriteBasePathInHtml(source, { oldBasePath, newBasePath, isIndex = false }) {
  const escapedOldBasePath = escapeRegExp(oldBasePath);
  let content = source.replace(
    new RegExp(`${escapedOldBasePath}/assets/`, 'g'),
    `${newBasePath}/assets/`
  );

  if (!isIndex) return content;

  content = content.replace(
    new RegExp(`content="(${LOCALE_PATH_SEGMENT_PATTERN});url=`, 'g'),
    'content="2;url='
  );
  content = content.replace(
    new RegExp(
      `content="[0-9]+;url=${escapedOldBasePath}/(${VERSION_PATH_SEGMENT_PATTERN})/(${LOCALE_PATH_SEGMENT_PATTERN})/"`,
      'g'
    ),
    `content="2;url=${newBasePath}/$1/$2/"`
  );
  content = content.replace(
    new RegExp(
      `href="${escapedOldBasePath}/(${VERSION_PATH_SEGMENT_PATTERN})/(${LOCALE_PATH_SEGMENT_PATTERN})/"`,
      'g'
    ),
    `href="${newBasePath}/$1/$2/"`
  );
  content = content.replace(
    new RegExp(
      `Redirecting from <code>${escapedOldBasePath}</code> to <code>${escapedOldBasePath}/(${VERSION_PATH_SEGMENT_PATTERN})/(${LOCALE_PATH_SEGMENT_PATTERN})/</code>`,
      'g'
    ),
    `Redirecting from <code>${newBasePath}</code> to <code>${newBasePath}/$1/$2/</code>`
  );

  return content.replace(
    new RegExp(
      `href="https://libx\\.dev${escapedOldBasePath}/(${VERSION_PATH_SEGMENT_PATTERN})/(${LOCALE_PATH_SEGMENT_PATTERN})/"`,
      'g'
    ),
    `href="https://libx.dev${newBasePath}/$1/$2/"`
  );
}
