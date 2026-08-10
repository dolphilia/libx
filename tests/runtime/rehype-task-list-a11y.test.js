import assert from 'node:assert/strict';
import test from 'node:test';
import { rehypeTaskListA11y } from '../../scripts/plugins/rehype-task-list-a11y.js';

test('task-list checkbox uses the surrounding document text as its accessible name', () => {
  const checkbox = {
    type: 'element',
    tagName: 'input',
    properties: { type: 'checkbox', disabled: true },
    children: [],
  };
  const tree = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'li',
        properties: {},
        children: [checkbox, { type: 'text', value: ' العربية المهمة ' }],
      },
    ],
  };

  rehypeTaskListA11y()(tree);

  assert.equal(checkbox.properties['aria-label'], 'العربية المهمة');
});
