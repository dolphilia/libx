import { visit } from 'unist-util-visit';

function collectText(node) {
  if (!node || typeof node !== 'object') return '';
  if (node.type === 'text' && typeof node.value === 'string') return node.value;
  if (!Array.isArray(node.children)) return '';
  return node.children.map(collectText).join(' ');
}

/**
 * MDX task-list checkboxes are disabled form controls. Give each one the text
 * of its list item as an accessible name, preserving the document language.
 */
export function rehypeTaskListA11y() {
  return (tree) => {
    visit(tree, 'element', (node, _index, parent) => {
      if (node.tagName !== 'input' || node.properties?.type !== 'checkbox') return;

      const label = collectText(parent).replace(/\s+/g, ' ').trim();
      node.properties = {
        ...node.properties,
        'aria-label': label || 'Task',
      };
    });
  };
}
