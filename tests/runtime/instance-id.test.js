import assert from 'node:assert/strict';
import test from 'node:test';
import { allocateInstanceId } from '../../packages/ui/src/components/instance-id.js';

test('同一要求内で重複せず、別要求の同じコンポーネント列を再現する', () => {
  const render = (scope) =>
    ['language', 'version', 'language'].map((identity) => allocateInstanceId(scope, identity));
  const first = render({});
  assert.equal(new Set(first).size, 3);
  assert.deepEqual(render({}), first);
});

test('別のコントロールや並行要求の描画順がIDを変えない', () => {
  const first = {},
    second = {};
  const language = allocateInstanceId(first, 'language');
  const version = allocateInstanceId(first, 'version');
  assert.equal(allocateInstanceId(second, 'version'), version);
  assert.equal(allocateInstanceId(second, 'language'), language);
  assert.notEqual(allocateInstanceId(first, 'language'), language);
});
