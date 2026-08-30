#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  assertSafeImportTarget,
  comparePathDescriptions,
  describePath,
  hashFile,
  prepareImportForCheck,
  prepareImportOutput,
} from './safe-import-output.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
// Astro normalizes dots out of content IDs, so the libx version ID must not
// contain dots. The upstream display version remains GLFW 3.5.1.
const version = 'v3-5-1';
const defaultSourceRoot = path.join(
  rootDir,
  '.tmp/document-import/glfw/01-source/repository/glfw-3.5.1'
);
const allowedOutputRoot = path.join(rootDir, 'apps/glfw/src/content/docs');
const defaultOutputRoot = path.join(allowedOutputRoot, version, 'en');
const defaultAssetOutput = path.join(rootDir, 'apps/glfw/public/assets/glfw-3.5.1/spaces.svg');
const reportPath = path.join(rootDir, '.tmp/document-import/glfw/05-reports/import-manifest.json');

function optionValue(args, name, fallback) {
  const equals = args.find((argument) => argument.startsWith(`${name}=`));
  if (equals) return equals.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] && !args[index + 1].startsWith('--')
    ? args[index + 1]
    : fallback;
}

const cliArguments = process.argv.slice(2);
const sourceRoot = path.resolve(optionValue(cliArguments, '--source', defaultSourceRoot));
const outputRoot = assertSafeImportTarget(
  optionValue(cliArguments, '--output', defaultOutputRoot),
  allowedOutputRoot,
  'en'
);
const checkOnly = cliArguments.includes('--check');
const allowMissingSource = cliArguments.includes('--allow-missing-source');
const dryRun = cliArguments.includes('--dry-run');
const siteBase = `/docs/glfw/${version}/en`;

if (checkOnly && allowMissingSource && !fs.existsSync(sourceRoot)) {
  console.log(`GLFW固定入力がないため再現性検査をスキップします: ${sourceRoot}`);
  process.exit(0);
}

if (dryRun) {
  if (!fs.existsSync(sourceRoot)) throw new Error(`取得元が存在しません: ${sourceRoot}`);
  console.log('GLFWインポート dry-run');
  console.log(`取得元: ${sourceRoot}`);
  console.log(`定本出力先: ${outputRoot}`);
  console.log(`画像出力先: ${defaultAssetOutput}`);
  console.log('ファイルは変更していません');
  process.exit(0);
}

const guides = [
  [
    'main.md',
    '01-overview/01-introduction.md',
    'Introduction',
    'Official documentation entry point',
  ],
  [
    'quick.md',
    '02-getting-started/01-getting-started.md',
    'Getting started',
    'Create a window and render with GLFW',
  ],
  [
    'compile.md',
    '02-getting-started/02-compiling-glfw.md',
    'Compiling GLFW',
    'Compile the GLFW library from source',
  ],
  [
    'build.md',
    '02-getting-started/03-building-applications.md',
    'Building applications',
    'Build and link applications that use GLFW',
  ],
  [
    'intro.md',
    '03-guides/01-introduction-to-the-api.md',
    'Introduction to the API',
    'Initialization, errors, coordinates and version management',
  ],
  [
    'context.md',
    '03-guides/02-context-guide.md',
    'Context guide',
    'OpenGL and OpenGL ES context management',
  ],
  [
    'monitor.md',
    '03-guides/03-monitor-guide.md',
    'Monitor guide',
    'Monitor objects, modes and gamma ramps',
  ],
  [
    'window.md',
    '03-guides/04-window-guide.md',
    'Window guide',
    'Window creation, properties and events',
  ],
  [
    'input.md',
    '03-guides/05-input-guide.md',
    'Input guide',
    'Keyboard, mouse, joystick and gamepad input',
  ],
  ['vulkan.md', '03-guides/06-vulkan-guide.md', 'Vulkan guide', 'Use GLFW with Vulkan'],
  [
    'compat.md',
    '03-guides/07-standards-conformance.md',
    'Standards conformance',
    'Platform standards and extension requirements',
  ],
  [
    'internal.md',
    '03-guides/08-internal-structure.md',
    'Internal structure',
    'Internal interfaces and platform organization',
  ],
  [
    'moving.md',
    '05-migration-and-history/01-moving-from-2-to-3.md',
    'Moving from GLFW 2 to 3',
    'Migration guide for GLFW 2 users',
  ],
  [
    'news.md',
    '05-migration-and-history/02-release-notes.md',
    'Release notes for version 3.5',
    'Changes introduced in GLFW 3.5',
  ],
];

const references = [
  [
    'group__init.html',
    '01-initialization-version-error.md',
    'Initialization, version and error reference',
  ],
  ['group__errors.html', '02-error-codes.md', 'Error codes'],
  ['group__window.html', '03-window-reference.md', 'Window reference'],
  ['group__context.html', '04-context-reference.md', 'Context reference'],
  ['group__monitor.html', '05-monitor-reference.md', 'Monitor reference'],
  ['group__input.html', '06-input-reference.md', 'Input reference'],
  ['group__vulkan.html', '07-vulkan-support-reference.md', 'Vulkan support reference'],
  ['group__native.html', '08-native-access.md', 'Native access'],
  ['group__keys.html', '09-keyboard-key-tokens.md', 'Keyboard key tokens'],
  ['group__mods.html', '10-modifier-key-flags.md', 'Modifier key flags'],
  ['group__buttons.html', '11-mouse-buttons.md', 'Mouse buttons'],
  ['group__joysticks.html', '12-joysticks.md', 'Joysticks'],
  ['group__hat__state.html', '13-joystick-hat-states.md', 'Joystick hat states'],
  ['group__gamepad__buttons.html', '14-gamepad-buttons.md', 'Gamepad buttons'],
  ['group__gamepad__axes.html', '15-gamepad-axes.md', 'Gamepad axes'],
  ['group__shapes.html', '16-standard-cursor-shapes.md', 'Standard cursor shapes'],
  ['struct_g_l_f_wallocator.html', '17-glfwallocator.md', 'GLFWallocator structure'],
  ['struct_g_l_f_wgamepadstate.html', '18-glfwgamepadstate.md', 'GLFWgamepadstate structure'],
  ['struct_g_l_f_wgammaramp.html', '19-glfwgammaramp.md', 'GLFWgammaramp structure'],
  ['struct_g_l_f_wimage.html', '20-glfwimage.md', 'GLFWimage structure'],
  ['struct_g_l_f_wvidmode.html', '21-glfwvidmode.md', 'GLFWvidmode structure'],
  ['deprecated.html', '22-deprecated-list.md', 'Deprecated list'],
];

const sourceToOutput = new Map(guides.map(([source, output]) => [source, output]));
const htmlToOutput = new Map(
  references.map(([source, output]) => [source, `04-reference/${output}`])
);
const groupRefToHtml = new Map([
  ['init', 'group__init.html'],
  ['errors', 'group__errors.html'],
  ['window', 'group__window.html'],
  ['context', 'group__context.html'],
  ['monitor', 'group__monitor.html'],
  ['input', 'group__input.html'],
  ['vulkan', 'group__vulkan.html'],
  ['native', 'group__native.html'],
  ['keys', 'group__keys.html'],
  ['mods', 'group__mods.html'],
  ['buttons', 'group__buttons.html'],
  ['joysticks', 'group__joysticks.html'],
  ['hat_state', 'group__hat__state.html'],
  ['gamepad_buttons', 'group__gamepad__buttons.html'],
  ['gamepad_axes', 'group__gamepad__axes.html'],
  ['shapes', 'group__shapes.html'],
]);
const doxygenPageToSource = new Map();

for (const [source] of guides) {
  const text = fs.readFileSync(path.join(sourceRoot, 'docs', source), 'utf8');
  for (const match of text.matchAll(/^#{1,6}\s+.+?\s+\{#([^}]+)\}\s*$/gm)) {
    doxygenPageToSource.set(match[1], source);
  }
  for (const match of text.matchAll(/^@anchor\s+(\S+)\s*$/gm)) {
    doxygenPageToSource.set(match[1], source);
  }
}

const symbolTargets = new Map();
for (const [htmlFile] of references.filter(([name]) => name.startsWith('group__'))) {
  const html = fs.readFileSync(path.join(sourceRoot, 'docs/html', htmlFile), 'utf8');
  for (const match of html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/g)) {
    const [, href, label] = match;
    if (href.startsWith(`${htmlFile}#`)) {
      symbolTargets.set(decodeEntities(label.trim()), href);
    }
  }
  for (const match of html.matchAll(
    /<a id="([^"]+)"[^>]*><\/a>\s*<h2 class="memtitle">[\s\S]*?<\/span>([A-Za-z_][A-Za-z0-9_]*)(?:\(\))?<\/h2>/g
  )) {
    symbolTargets.set(match[2], `${htmlFile}#${match[1]}`);
  }
}

function decodeEntities(value) {
  return value
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&')
    .replaceAll('&#160;', ' ');
}

function frontmatter(title, description) {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
}

function targetForRef(ref) {
  if (ref === 'glfw3') {
    return 'https://github.com/glfw/glfw/blob/3.5.1/include/GLFW/glfw3.h';
  }
  const guideSource = doxygenPageToSource.get(ref);
  if (guideSource) {
    const output = sourceToOutput.get(guideSource).replace(/\.md$/, '');
    return `${siteBase}/${output}/#${ref}`;
  }

  const groupHtml = groupRefToHtml.get(ref);
  if (groupHtml) return rewriteHref(groupHtml);

  const symbolHref = symbolTargets.get(ref);
  if (symbolHref) {
    return rewriteHref(symbolHref);
  }

  return `https://www.glfw.org/docs/3.5.1/search.html?q=${encodeURIComponent(ref)}`;
}

function rewriteHref(href) {
  if (/^(?:https?:|mailto:|#)/.test(href)) return href;
  const [file, anchor] = href.split('#');
  const guideSource = [...doxygenPageToSource.entries()].find(([, source]) => {
    const outputHtml = source.replace(/\.md$/, '_guide.html');
    return file === outputHtml || file === source.replace(/\.md$/, '_8md.html');
  });

  if (guideSource) {
    const output = sourceToOutput.get(guideSource[1]).replace(/\.md$/, '');
    return `${siteBase}/${output}/${anchor ? `#${anchor}` : ''}`;
  }

  const referenceOutput = htmlToOutput.get(file);
  if (referenceOutput) {
    return `${siteBase}/${referenceOutput.replace(/\.md$/, '')}/${anchor ? `#${anchor}` : ''}`;
  }

  return `https://www.glfw.org/docs/3.5.1/${href}`;
}

function expandSnippet(sourceFile, snippetName) {
  const candidates = [
    path.join(sourceRoot, 'examples', sourceFile),
    path.join(sourceRoot, sourceFile),
  ];
  const snippetFile = candidates.find((candidate) => fs.existsSync(candidate));
  if (!snippetFile) throw new Error(`Could not find snippet source ${sourceFile}`);

  const marker = `//! [${snippetName}]`;
  const lines = fs.readFileSync(snippetFile, 'utf8').split(/\r?\n/);
  const start = lines.indexOf(marker);
  const end = lines.indexOf(marker, start + 1);
  if (start === -1 || end === -1) {
    throw new Error(`Could not find snippet ${snippetName} in ${sourceFile}`);
  }

  const language = path.extname(sourceFile).slice(1) || 'text';
  return `\`\`\`${language}\n${lines
    .slice(start + 1, end)
    .join('\n')
    .trimEnd()}\n\`\`\``;
}

function normalizeGuide(source) {
  let text = source.replace(/^\[TOC\]\s*$/gm, '');
  text = text.replace(/^(#{1,6})\s+(.+?)\s+\{#([^}]+)\}\s*$/gm, '<a id="$3"></a>\n\n$1 $2');
  text = text.replace(/^@anchor\s+(\S+)\s*$/gm, '<a id="$1"></a>');
  text = text.replace(
    /\[([^\]]+)\]\(@ref\s+([^\s)]+)\)/g,
    (_, label, ref) => `[${label}](${targetForRef(ref)})`
  );
  text = text.replace(/@ref\s+([A-Za-z0-9_]+)/g, (_, ref) => `[${ref}](${targetForRef(ref)})`);
  text = text.replace(/@b\s+([A-Za-z0-9_]+)/g, '`$1`');
  text = text.replace(/\]\(modules\.html\)/g, `](${siteBase}/)`);
  text = text.replace(/src="spaces\.svg"/g, 'src="/docs/glfw/assets/glfw-3.5.1/spaces.svg"');
  text = text.replace(/^@note\s+/gm, '> **Note:** ');
  text = text.replace(/^@warning\s+/gm, '> **Warning:** ');
  text = text.replace(/^@snippet\s+(\S+)\s+(\S+)\s*$/gm, (_, sourceFile, snippetName) =>
    expandSnippet(sourceFile, snippetName)
  );
  return text.trimEnd() + '\n';
}

function normalizeReferenceHtml(source, sourceFile) {
  const match = source.match(/<div class="contents">([\s\S]*?)<\/div><!-- contents -->/);
  if (!match) throw new Error(`Could not find Doxygen contents in ${sourceFile}`);

  let markdown = execFileSync('pandoc', ['-f', 'html', '-t', 'gfm', '--wrap=none'], {
    input: match[1],
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  });

  markdown = markdown.replace(
    /\]\(([^)]+\.html(?:#[^)]+)?)\)/g,
    (_, href) => `](${rewriteHref(href)})`
  );
  markdown = markdown.replace(
    /href="([^"]+\.html(?:#[^"]+)?)"/g,
    (_, href) => `href="${rewriteHref(href)}"`
  );
  return markdown.trimEnd() + '\n';
}

function markdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? markdownFiles(entryPath)
        : entry.isFile() && entry.name.endsWith('.md')
          ? [entryPath]
          : [];
    })
    .sort();
}

function generateDocumentation(destination) {
  for (const [sourceFile, outputFile, title, description] of guides) {
    const source = fs.readFileSync(path.join(sourceRoot, 'docs', sourceFile), 'utf8');
    const output = frontmatter(title, description) + normalizeGuide(source);
    const target = path.join(destination, outputFile);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, output);
  }

  for (const [sourceFile, outputFile, title] of references) {
    const source = fs.readFileSync(path.join(sourceRoot, 'docs/html', sourceFile), 'utf8');
    const output =
      frontmatter(title, `GLFW 3.5.1 ${title}`) + normalizeReferenceHtml(source, sourceFile);
    const target = path.join(destination, '04-reference', outputFile);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, output);
  }
}

function validateGeneratedDocumentation(destination) {
  const files = markdownFiles(destination);
  const expectedCount = guides.length + references.length;
  if (files.length !== expectedCount) {
    throw new Error(`生成ページ数が一致しません: ${files.length}/${expectedCount}`);
  }
  for (const filePath of files) {
    const source = fs.readFileSync(filePath, 'utf8');
    if (/^@(?:ref|snippet|anchor|note|warning|b)\b/m.test(source)) {
      throw new Error(`未処理のDoxygen命令があります: ${path.relative(destination, filePath)}`);
    }
    if (/\]\((?!https?:|mailto:|#|\/)[^)]+\.html(?:#[^)]+)?\)/.test(source)) {
      throw new Error(`未変換の相対HTMLリンクがあります: ${path.relative(destination, filePath)}`);
    }
  }
}

const sourceImage = path.join(sourceRoot, 'docs/spaces.svg');
if (!fs.existsSync(sourceImage)) throw new Error(`画像が存在しません: ${sourceImage}`);

if (checkOnly) {
  const result = prepareImportForCheck({
    targetPath: outputRoot,
    generate: generateDocumentation,
    validate: validateGeneratedDocumentation,
  });
  const imageMatches =
    fs.existsSync(defaultAssetOutput) && hashFile(sourceImage) === hashFile(defaultAssetOutput);
  console.log(`定本ファイル: ${result.after.length}件`);
  console.log(`定本差分: ${result.matches ? 'なし' : 'あり'}`);
  console.log(`画像差分: ${imageMatches ? 'なし' : 'あり'}`);
  if (!result.matches || !imageMatches) process.exitCode = 1;
} else {
  const result = prepareImportOutput({
    targetPath: outputRoot,
    generate: generateDocumentation,
    validate: validateGeneratedDocumentation,
  });
  fs.mkdirSync(path.dirname(defaultAssetOutput), { recursive: true });
  fs.copyFileSync(sourceImage, defaultAssetOutput);

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: sourceRoot,
    output: outputRoot,
    before: result.before,
    after: result.after,
    asset: {
      path: path.relative(rootDir, defaultAssetOutput),
      sha256: hashFile(defaultAssetOutput),
    },
  };
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(manifest, null, 2)}\n`);

  if (!comparePathDescriptions(result.after, describePath(outputRoot))) {
    throw new Error('確定後の定本ハッシュが準備済み出力と一致しません');
  }
  console.log(`Generated ${guides.length} guides and ${references.length} reference pages`);
  console.log(`Output: ${outputRoot}`);
  console.log(`Manifest: ${reportPath}`);
}
