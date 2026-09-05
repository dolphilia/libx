import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
const root = path.resolve(import.meta.dirname, '../..');
for (const script of ['build-integrated.js', 'build-selective.js', 'preview-integrated.js']) {
  test(`${script}のhelpと未知引数はビルド・配信を開始せず終了する`, () => {
    for (const [args, status] of [
      [['--help'], 0],
      [['--unknown-option'], 1],
    ]) {
      const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
        cwd: root,
        encoding: 'utf8',
        timeout: 3000,
      });
      assert.equal(result.status, status, result.error?.message || result.stderr);
      assert.match(result.stdout + result.stderr, status === 0 ? /pnpm/ : /未知の引数/);
      assert.doesNotMatch(
        result.stdout,
        /バックアップを作成|統合プレビュー: http|選択的統合ビルド:/
      );
    }
  });
}
