import fs from 'node:fs';
import path from 'node:path';
import { commitPreparedPathsAtomically } from '../atomic-paths.js';
import { comparePathDescriptions, describePath } from './safe-import-output.js';

/** Stage every output before replacing any target; roll back caught commit failures. */
export function prepareImportBatch({ outputs, stagingRoot, check = false, commitOptions }) {
  const targets = outputs.map((output) => path.resolve(output.targetPath));
  for (let index = 0; index < targets.length; index++) {
    if (!['file', 'directory'].includes(outputs[index].kind))
      throw new Error(`出力種別が不正です: ${targets[index]}`);
    for (let other = 0; other < index; other++) {
      const left = targets[index];
      const right = targets[other];
      if (
        left === right ||
        left.startsWith(`${right}${path.sep}`) ||
        right.startsWith(`${left}${path.sep}`)
      )
        throw new Error(`一括生成の出力先が重複しています: ${left}, ${right}`);
    }
  }
  const stageRoot = path.resolve(stagingRoot);
  if (
    targets.some((target) => stageRoot === target || stageRoot.startsWith(`${target}${path.sep}`))
  )
    throw new Error('ステージは更新対象の外へ配置してください');
  fs.mkdirSync(stageRoot, { recursive: true });
  const stage = fs.mkdtempSync(path.join(stageRoot, 'batch-'));
  try {
    const changes = outputs.map((output, index) => {
      const targetPath = targets[index];
      // Retain the basename so file descriptions compare paths, not staging names.
      const preparedPath = path.join(stage, String(index), path.basename(targetPath));
      fs.mkdirSync(path.dirname(preparedPath), { recursive: true });
      if (output.kind === 'directory') fs.mkdirSync(preparedPath);
      output.generate(preparedPath);
      output.validate?.(preparedPath);
      const stat = fs.lstatSync(preparedPath);
      if (output.kind === 'file' ? !stat.isFile() : !stat.isDirectory())
        throw new Error(`生成結果の種別が不正です: ${targetPath}`);
      return { targetPath, preparedPath };
    });
    const results = changes.map(({ targetPath, preparedPath }) => ({
      targetPath,
      matches: comparePathDescriptions(describePath(targetPath), describePath(preparedPath)),
    }));
    if (!check) commitPreparedPathsAtomically(changes, commitOptions);
    return results;
  } finally {
    fs.rmSync(stage, { recursive: true, force: true });
  }
}
