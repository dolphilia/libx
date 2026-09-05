import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { verifyGroupWorkerPackage } from './group-worker-package-integrity.js';
import { createGroupReleaseCatalog } from './group-release-catalog.js';
import { packageGroupWorkers } from './package-group-workers.js';
import { canonicalOutputPath } from '../group-output.js';

/** Restore the selected release while keeping asset URLs used by newer open tabs. */
export function packageGroupRollback({ target, previous, destination }) {
  const { release } = verifyGroupWorkerPackage({ ...target, includeRelease: true });
  const current = verifyGroupWorkerPackage({ ...previous, includeRelease: true }).release;
  if (current.groupId !== release.groupId || current.publicBase !== release.publicBase)
    throw new Error('復旧先と現在のグループが一致しません');
  const group = {
    id: release.groupId,
    publicBase: release.publicBase,
    memberIds: release.units
      .map((unit) => unit.owner)
      .filter((owner) => owner !== `group:${release.groupId}`),
  };
  const manifest = {
    schemaVersion: 1,
    groupId: release.groupId,
    publicBase: release.publicBase,
    files: release.units.flatMap((unit) =>
      unit.files.map((file) => ({
        path: file.path,
        canonical: canonicalOutputPath(file.path),
        appId: unit.owner,
        bytes: file.bytes,
        sha256: file.sha256,
        contentType: file.contentType,
      }))
    ),
  };
  // Validate paths and ownership before using them to read the archived package.
  createGroupReleaseCatalog({ manifest, group, delivery: release.delivery });
  const source = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-rollback-source-')));
  try {
    for (const unit of release.units) {
      if (!/^[a-z0-9][a-z0-9-]{0,62}$/.test(unit.service))
        throw new Error('復旧元service名が不正です');
      for (const file of unit.files) {
        const bytes = fs.readFileSync(
          path.join(
            target.directory,
            unit.service,
            'assets',
            release.publicBase.slice(1),
            file.path
          )
        );
        if (
          bytes.length !== file.bytes ||
          crypto.createHash('sha256').update(bytes).digest('hex') !== file.sha256
        )
          throw new Error('復旧元の資産が変更されています');
        const output = path.join(source, file.path);
        fs.mkdirSync(path.dirname(output), { recursive: true });
        fs.writeFileSync(output, bytes);
      }
    }
    return packageGroupWorkers({
      manifest,
      group,
      source,
      destination,
      previous,
      delivery: release.delivery,
    });
  } finally {
    fs.rmSync(source, { recursive: true, force: true });
  }
}
