import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { discoverApps } from '../packages/project-config/src/app-registry.js';
import { composeGroupOutput, readVerifiedAppBuild, recordAppBuild } from './group-output.js';
import {
  collectReservedRootNames,
  integrateSelectiveOutputs,
  commitPreparedDirectory,
} from './selective-output.js';
import { rewriteBasePathInHtml } from './html-url-rewriter.js';
import { pruneUnreferencedJavaScriptAssets } from './prune-unreferenced-javascript-assets.js';

export function discoverBuildTargets(root) {
  const registry = discoverApps(root);
  const targets = registry.apps.map((app) => ({
    name: app.id,
    packageName: app.packageName,
    app,
    groupId: app.groupId,
    type: 'docs',
    srcDir: app.outputDirectory,
    outputPath: app.publicBase.replace(/^\//, ''),
    pathPrefix: app.publicBase,
  }));
  const siteDirectory = path.join(root, 'sites');
  if (fs.existsSync(siteDirectory)) {
    for (const entry of fs.readdirSync(siteDirectory, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const directory = path.join(siteDirectory, entry.name);
      const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'));
      targets.push({
        name: entry.name,
        packageName: pkg.name,
        type: 'site',
        srcDir: path.join(directory, 'dist'),
        outputPath: entry.name === 'landing' ? '.' : entry.name,
        isLanding: entry.name === 'landing',
        pathPrefix: entry.name === 'landing' ? '' : `/${entry.name}`,
      });
    }
  }
  const names = new Set();
  const scopes = new Map();
  for (const target of targets) {
    if (names.has(target.name)) throw new Error(`ビルド対象IDが重複しています: ${target.name}`);
    names.add(target.name);
    if (target.isLanding) continue;
    if (
      !target.outputPath ||
      target.outputPath
        .split('/')
        .some(
          (segment) => !segment || segment === '.' || segment === '..' || /[\\%?#\0]/.test(segment)
        )
    ) {
      throw new Error(`公開配置パスが不正です: ${target.outputPath}`);
    }
    const scope = target.groupId ? `group:${target.groupId}` : target.name;
    for (const [prefix, owner] of scopes) {
      if (
        owner !== scope &&
        (prefix === target.outputPath ||
          prefix.startsWith(`${target.outputPath}/`) ||
          target.outputPath.startsWith(`${prefix}/`))
      )
        throw new Error(`公開配置が競合しています: ${owner}, ${scope}`);
    }
    scopes.set(target.outputPath, scope);
  }
  return { registry, targets };
}

export function selectBuildTargets({ projects, group }, discovered) {
  if (projects && group) throw new Error('--projects と --group は同時に指定できません。');
  if (group) {
    const definition = discovered.registry.groups.find((entry) => entry.id === group);
    if (!definition) throw new Error(`グループが見つかりません: ${group}`);
    return definition.memberIds.map((id) =>
      discovered.targets.find((target) => target.name === id)
    );
  }
  if (!projects) return discovered.targets;
  const names = projects.split(',').map((name) => name.trim());
  return [...new Set(names)].map((name) => {
    const target = discovered.targets.find((entry) => entry.name === name);
    if (!target) throw new Error(`ビルド対象が見つかりません: ${name}`);
    return target;
  });
}

function outputApp(target) {
  return (
    target.app ?? {
      id: target.name,
      directory: path.dirname(target.srcDir),
      outputDirectory: target.srcDir,
      publicBase: target.pathPrefix || '/',
      groupId: null,
      type: 'site',
    }
  );
}

function build(target, root) {
  console.log(`${target.name} をビルドしています...`);
  execFileSync('pnpm', [`--filter=${target.packageName}`, 'build'], {
    cwd: root,
    stdio: 'inherit',
  });
  recordAppBuild(outputApp(target), root);
}

export function buildOrReuseTarget(target, root, { reuse = false, runBuild = build } = {}) {
  if (reuse) {
    try {
      readVerifiedAppBuild(outputApp(target), root);
      console.log(`${target.name}: 入力と出力を照合し、検証済み成果物を再利用します`);
      return 'reused';
    } catch (error) {
      console.log(`${target.name}: 再生成します (${error.message})`);
    }
  }
  runBuild(target, root);
  return 'built';
}

function rewriteDirectory(directory, target) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) rewriteDirectory(file, target);
    else if (entry.name.endsWith('.html')) {
      const source = fs.readFileSync(file, 'utf8');
      const content = rewriteBasePathInHtml(source, {
        oldBasePath: '/libx',
        newBasePath: `/libx${target.pathPrefix}`,
        isIndex: entry.name === 'index.html',
      });
      if (source !== content) fs.writeFileSync(file, content);
    }
  }
}

/** A completed staging tree is the only thing ever published to root dist. */
export async function buildDeployment({
  root,
  projects,
  group,
  local = false,
  dryRun = false,
  full = false,
  reuse = false,
}) {
  const discovered = discoverBuildTargets(root);
  const selected = selectBuildTargets({ projects, group }, discovered);
  if (!selected.length) throw new Error('ビルド対象がありません。');
  if (local)
    console.log('ローカル確認も公開パスを維持します。生成後は pnpm preview で閲覧できます。');
  if (dryRun) {
    for (const target of selected)
      console.log(
        `[dry-run] ${target.name}: pnpm --filter=${target.packageName} build → ${target.outputPath}`
      );
    return { selected: selected.map((target) => target.name), dryRun: true };
  }
  const built = [],
    reused = [];
  for (const target of selected) {
    const result = buildOrReuseTarget(target, root, { reuse });
    (result === 'reused' ? reused : built).push(target.name);
  }
  const outputs = selected.filter((target) => !target.groupId);
  const groupIds = [...new Set(selected.map((target) => target.groupId).filter(Boolean))];
  for (const groupId of groupIds) {
    const definition = discovered.registry.groups.find((entry) => entry.id === groupId);
    const members = discovered.registry.apps.filter((app) => app.groupId === groupId);
    const manifests = new Map();
    for (const app of members) {
      let manifest;
      try {
        manifest = readVerifiedAppBuild(app, root);
      } catch (error) {
        if (selected.some((target) => target.name === app.id)) throw error;
        console.log(`${app.id}: ${error.message}`);
        build(
          discovered.targets.find((target) => target.name === app.id),
          root
        );
        built.push(app.id);
        manifest = readVerifiedAppBuild(app, root);
      }
      manifests.set(app.id, manifest);
    }
    const result = await composeGroupOutput(
      definition,
      members,
      path.join(root, '.tmp/group-outputs', groupId),
      { manifests }
    );
    outputs.push({
      name: `group:${groupId}`,
      type: 'group',
      srcDir: result.directory,
      outputPath: definition.publicBase.slice(1),
      pathPrefix: definition.publicBase,
    });
  }
  const finalDirectory = path.join(root, 'dist');
  const staging = path.join(root, `.deployment-${randomUUID()}`);
  try {
    if (!full && fs.existsSync(finalDirectory))
      fs.cpSync(finalDirectory, staging, { recursive: true });
    const reservedRootNames = collectReservedRootNames(discovered.targets);
    integrateSelectiveOutputs({
      distDirectory: staging,
      targets: outputs,
      reservedRootNames,
      prepareTarget(target, directory) {
        if (target.pathPrefix && target.type !== 'group') rewriteDirectory(directory, target);
      },
    });
    const prune = await pruneUnreferencedJavaScriptAssets(staging, { apply: true });
    commitPreparedDirectory(finalDirectory, staging);
    return {
      selected: selected.map((target) => target.name),
      built,
      reused,
      groups: groupIds,
      removedJavaScriptFiles: prune.unreferenced.length,
    };
  } catch (error) {
    fs.rmSync(staging, { recursive: true, force: true });
    throw error;
  }
}
