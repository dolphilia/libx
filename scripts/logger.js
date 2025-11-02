/**
 * CLI 出力を一元管理するロガーユーティリティ
 * 非ITユーザーでも読みやすい表現にそろえるため、各スクリプトから利用します。
 */

const baseConsole = {
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console)
};

const LABELS = {
  info: '情報',
  success: '完了',
  warn: '注意',
  error: 'エラー',
  step: '作業',
  dryRun: '試行'
};

function stringify(value) {
  if (value === undefined || value === null) {
    return '';
  }

  if (value instanceof Error) {
    return value.message;
  }

  if (typeof value === 'object') {
    try {
      return JSON.stringify(value, null, 2);
    } catch (error) {
      return String(value);
    }
  }

  return String(value);
}

function print(method, label, messages) {
  const body = messages.map(stringify).filter(Boolean).join(' ');
  baseConsole[method](`【${label}】${body}`);
}

export function heading(title) {
  const text = stringify(title);
  if (!text) {
    return;
  }
  const line = '─'.repeat(Math.max(10, text.length));
  baseConsole.log(`\n${text}`);
  baseConsole.log(line);
}

export function blank() {
  baseConsole.log('');
}

export function info(...messages) {
  print('log', LABELS.info, messages);
}

export function success(...messages) {
  print('log', LABELS.success, messages);
}

export function warn(...messages) {
  print('warn', LABELS.warn, messages);
}

export function error(...messages) {
  print('error', LABELS.error, messages);
}

export function step(...messages) {
  print('log', LABELS.step, messages);
}

export function dryRun(...messages) {
  print('log', LABELS.dryRun, messages);
}

export function detail(message, { indent = 2, bullet = '-' } = {}) {
  const prefix = `${' '.repeat(indent)}${bullet ? `${bullet} ` : ''}`;
  baseConsole.log(`${prefix}${stringify(message)}`);
}

export function list(items, { indent = 2, start = 1 } = {}) {
  items.forEach((item, index) => {
    const prefix = `${' '.repeat(indent)}${index + start}. `;
    baseConsole.log(`${prefix}${stringify(item)}`);
  });
}

export function hint(message) {
  baseConsole.log(`  ▶ ${stringify(message)}`);
}

const EMOJI_LEVEL_MAP = {
  '✅': 'success',
  '🎉': 'success',
  '🌟': 'success',
  '⚠️': 'warn',
  '❗': 'warn',
  '❕': 'warn',
  '❌': 'error',
  '🚨': 'error',
  '🛑': 'error',
  '🔄': 'step',
  '🚀': 'step',
  '📋': 'info',
  '📝': 'info',
  '📦': 'step',
  '🧪': 'step',
  '⏩': 'step',
  '📁': 'info',
  '📂': 'info',
  '📄': 'info',
  '📊': 'info',
  '🔧': 'step',
  '🔍': 'info',
  'ℹ️': 'info',
  '🌐': 'info',
  '▶': 'info'
};

const EMOJI_KEYS = Object.keys(EMOJI_LEVEL_MAP).sort((a, b) => b.length - a.length);

function normalizeLine(line, defaultLevel) {
  if (line === undefined || line === null) {
    return { raw: true, text: '' };
  }

  const original = String(line).replace(/\r/g, '');
  if (original.trim() === '') {
    return { raw: true, text: '' };
  }

  const leadingSpacesMatch = original.match(/^\s+/);
  const leadingSpaces = leadingSpacesMatch ? leadingSpacesMatch[0] : '';
  let working = original.trimStart();

  if (working.startsWith('【') && working.includes('】')) {
    return { raw: true, text: original };
  }

  let level = defaultLevel;
  for (const key of EMOJI_KEYS) {
    if (working.startsWith(key)) {
      level = EMOJI_LEVEL_MAP[key] || level;
      working = working.slice(key.length).trimStart();
      break;
    }
  }

  const isDetail = leadingSpaces.length >= 2;

  // 進行状況フォーマット [n/m] を検出
  if (/^\[\d+\/\d+\]/.test(working)) {
    level = 'step';
  }

  return {
    level,
    text: working,
    isDetail,
    leadingSpaces
  };
}

function formatDetail({ text, leadingSpaces }) {
  const trimmed = text.trim();

  if (!trimmed) {
    return '';
  }

  const baseIndent = leadingSpaces.length >= 4 ? 4 : 2;
  const indent = ' '.repeat(baseIndent);

  if (/^(\d+\.|-\s|\*\s)/.test(trimmed) || trimmed.startsWith('http')) {
    return `${indent}${trimmed}`;
  }

  if (trimmed.startsWith('pnpm ') || trimmed.startsWith('node ') || trimmed.startsWith('cd ')) {
    return `${' '.repeat(4)}${trimmed}`;
  }

  return `${indent}- ${trimmed}`;
}

function forward(defaultLevel, args) {
  if (!args || args.length === 0) {
    baseConsole.log('');
    return;
  }

  const combined = args.map(stringify).join(' ');
  const lines = combined.split('\n');

  lines.forEach((line) => {
    const normalized = normalizeLine(line, defaultLevel);

    if (normalized.raw) {
      baseConsole.log(normalized.text);
      return;
    }

    if (!normalized.text) {
      baseConsole.log('');
      return;
    }

    if (normalized.isDetail) {
      const detailLine = formatDetail(normalized);
      baseConsole.log(detailLine);
      return;
    }

    const label = LABELS[normalized.level] || LABELS.info;
    baseConsole.log(`【${label}】${normalized.text}`);
  });
}

let consolePatched = false;

export function useUnifiedConsole() {
  if (consolePatched) {
    return;
  }

  consolePatched = true;

  console.log = (...args) => forward('info', args);
  console.warn = (...args) => forward('warn', args);
  console.error = (...args) => forward('error', args);
}

export default {
  heading,
  blank,
  info,
  success,
  warn,
  error,
  step,
  dryRun,
  detail,
  list,
  hint,
  useUnifiedConsole
};
