import crypto from 'node:crypto';
import { canonicalOutputPath } from '../group-output.js';

const bindingFor = (service, entrypoint) =>
  `RETAINED_${crypto.createHash('sha256').update(`${service}\0${entrypoint}`).digest('hex').slice(0, 16).toUpperCase()}`;

export function validateRetainedGroupAssets(entries, publicBase, units) {
  const occupied = new Set(units.flatMap((unit) => unit.files.map((file) => file.url)));
  return entries
    .map((entry) => {
      const relative = entry.assetPath?.slice(publicBase.length + 1);
      if (
        !entry.assetPath?.startsWith(`${publicBase}/assets/`) ||
        entry.url !== `${publicBase}/${canonicalOutputPath(relative)}` ||
        !/^[a-f0-9]{64}$/.test(entry.sha256) ||
        !/^[a-f0-9]{64}$/.test(entry.revision) ||
        !/^[a-z0-9][a-z0-9-]{0,62}$/.test(entry.service) ||
        !/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(entry.entrypoint) ||
        !Number.isSafeInteger(entry.bytes) ||
        entry.bytes < 0 ||
        occupied.has(entry.url)
      )
        throw new Error(`保持アセットの経路が不正または重複しています: ${entry.url}`);
      occupied.add(entry.url);
      return { ...entry, binding: bindingFor(entry.service, entry.entrypoint) };
    })
    .sort((a, b) => a.url.localeCompare(b.url, 'en'));
}

/** Keep asset URLs from all retained generations; removed documents stay removed. */
export function collectRetainedGroupAssets(previous, next) {
  if (
    previous.schemaVersion !== 2 ||
    previous.groupId !== next.groupId ||
    previous.publicBase !== next.publicBase
  )
    throw new Error('保持元と新リリースのグループが一致しません');
  const current = new Map(next.units.flatMap((unit) => unit.files.map((file) => [file.url, file])));
  const candidates = [
    ...(previous.retainedAssets ?? []),
    ...previous.units.flatMap((unit) =>
      unit.files
        .filter((file) => file.path.startsWith('assets/'))
        .map((file) => ({
          url: file.url,
          assetPath: `${previous.publicBase}/${file.path}`,
          sha256: file.sha256,
          bytes: file.bytes,
          service: unit.service,
          revision: unit.revision,
          entrypoint: previous.delivery.unit.entrypoint,
        }))
    ),
  ];
  const retained = new Map();
  for (const entry of candidates) {
    const active = current.get(entry.url);
    if (active) {
      if (active.sha256 !== entry.sha256)
        throw new Error(
          `同じアセットURLの内容を変更できません。内容別の名前へ変更してください: ${entry.url}`
        );
      continue;
    }
    if (retained.has(entry.url) && retained.get(entry.url).sha256 !== entry.sha256)
      throw new Error(`保持するアセットの内容が衝突しています: ${entry.url}`);
    if (!retained.has(entry.url)) retained.set(entry.url, entry);
  }
  return validateRetainedGroupAssets([...retained.values()], next.publicBase, next.units);
}
