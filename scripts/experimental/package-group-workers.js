import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createGroupReleaseCatalog, verifyGroupReleaseSource } from './group-release-catalog.js';
import {
  sealGroupWorkerPackage,
  verifyGroupWorkerPackage,
} from './group-worker-package-integrity.js';
import { collectRetainedGroupAssets } from './group-retained-assets.js';
import { readGroupWorkerContract } from './group-worker-contract.js';

/** Prepare an isolated local preview; never deploy or replace an existing directory. */
export function packageGroupWorkers({ manifest, group, source, destination, previous, delivery }) {
  source = path.resolve(source);
  destination = path.resolve(destination);
  if (destination === source || destination.startsWith(source + path.sep))
    throw new Error('配信元の内部へ梱包できません');
  if (fs.existsSync(destination)) throw new Error('梱包先が既に存在します');
  for (let current = path.dirname(destination); ; current = path.dirname(current)) {
    if (fs.existsSync(current) && fs.lstatSync(current).isSymbolicLink())
      throw new Error('梱包先の親にsymlinkは使用できません');
    if (path.dirname(current) === current) break;
  }
  const currentDelivery = readGroupWorkerContract();
  // Restored code/config still use the currently executed packaging implementation.
  delivery = delivery
    ? { ...delivery, packagerSha256: currentDelivery.packagerSha256 }
    : currentDelivery;
  let catalog = createGroupReleaseCatalog({ manifest, group, delivery });
  if (previous) {
    const verified = verifyGroupWorkerPackage({ ...previous, includeRelease: true });
    catalog = createGroupReleaseCatalog({
      manifest,
      group,
      delivery: catalog.delivery,
      retainedAssets: collectRetainedGroupAssets(verified.release, catalog),
    });
  }
  verifyGroupReleaseSource({ catalog, directory: source });
  ({ delivery } = catalog);
  const writeJson = (name, data) => {
    const target = path.join(destination, name);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
  };
  try {
    fs.mkdirSync(destination, { recursive: true });
    const routes = [];
    for (const unit of catalog.units) {
      for (const file of unit.files) {
        const content = fs.readFileSync(path.join(source, file.path));
        if (crypto.createHash('sha256').update(content).digest('hex') !== file.sha256)
          throw new Error(`梱包中に配信元が変わりました: ${file.path}`);
        const assetPath = `${catalog.publicBase}/${file.path}`;
        const target = path.join(destination, unit.service, 'assets', assetPath.slice(1));
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, content);
        routes.push({ url: file.url, assetPath, binding: unit.binding });
      }
      writeJson(`${unit.service}/wrangler.jsonc`, {
        ...delivery.unit.config,
        name: unit.service,
      });
      fs.writeFileSync(path.join(destination, unit.service, 'index.js'), delivery.unit.source);
    }
    const retainedServices = new Map();
    for (const asset of catalog.retainedAssets) {
      routes.push({ url: asset.url, assetPath: asset.assetPath, binding: asset.binding });
      retainedServices.set(asset.binding, {
        binding: asset.binding,
        service: asset.service,
        entrypoint: asset.entrypoint,
      });
    }
    const routing = {
      publicBase: catalog.publicBase,
      revision: catalog.revision,
      routes,
      notFound: routes.find((route) => route.assetPath === `${catalog.publicBase}/404.html`),
    };
    writeJson('router/routes.json', routing);
    writeJson('router/wrangler.jsonc', {
      ...delivery.router.config,
      name: `libx-preview-${crypto.createHash('sha256').update(group.id).digest('hex').slice(0, 16)}`,
      services: [
        ...catalog.units.map((unit) => ({
          binding: unit.binding,
          service: unit.service,
          entrypoint: delivery.unit.entrypoint,
        })),
        ...retainedServices.values(),
      ],
    });
    fs.writeFileSync(path.join(destination, 'router/group-router.js'), delivery.router.source);
    fs.writeFileSync(path.join(destination, 'router/index.js'), delivery.router.bootstrap);
    writeJson('release.json', catalog);
    const packageSha256 = sealGroupWorkerPackage({
      directory: destination,
      revision: catalog.revision,
    });
    return { ...catalog, packageSha256 };
  } catch (error) {
    fs.rmSync(destination, { recursive: true, force: true });
    throw error;
  }
}
