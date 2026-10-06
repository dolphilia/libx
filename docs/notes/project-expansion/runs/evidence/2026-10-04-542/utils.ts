// ドロップダウンのユーティリティ関数

/**
 * ドロップダウンメニューの表示/非表示を切り替えるスクリプトを取得する
 * @returns ドロップダウンメニューの動作を制御するJavaScriptコード
 */
export function getDropdownScript(): string {
  return `
  document.addEventListener('DOMContentLoaded', function() {
    // すべてのドロップダウンコンポーネントを初期化
    document.querySelectorAll('docs-dropdown').forEach(dropdown => {
      if (dropdown._initialized) return;
      dropdown._initialized = true;
      
      const button = dropdown.querySelector('[data-dropdown-button]');
      const menu = dropdown.querySelector('[data-dropdown-menu]');
      
      if (button && menu) {
        // ボタンクリックでメニューの表示/非表示を切り替え
        button.addEventListener('click', function() {
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', (!expanded).toString());
          menu.classList.toggle('hidden');
        });
        
        const closeMenu = function(restoreFocus) {
          button.setAttribute('aria-expanded', 'false');
          menu.classList.add('hidden');
          if (restoreFocus) button.focus();
        };
        const items = function() {
          return Array.from(menu.querySelectorAll('[role="menuitem"]'))
            .filter(item => item.getAttribute('aria-disabled') !== 'true');
        };
        const openAndFocus = function(last) {
          button.setAttribute('aria-expanded', 'true');
          menu.classList.remove('hidden');
          const entries = items();
          const entry = last ? entries[entries.length - 1] : entries[0];
          if (entry) entry.focus();
        };
        button.addEventListener('keydown', function(event) {
          if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
            event.preventDefault();
            if (['Enter', ' '].includes(event.key) && button.getAttribute('aria-expanded') === 'true') {
              closeMenu(true);
            } else {
              openAndFocus(event.key === 'ArrowUp');
            }
          }
        });
        menu.addEventListener('keydown', function(event) {
          if (event.key === 'Tab') {
            closeMenu(false);
            return;
          }
          const entries = items();
          if (!entries.length) return;
          const current = entries.indexOf(document.activeElement);
          let next;
          if (event.key === 'ArrowDown') next = (current + 1) % entries.length;
          else if (event.key === 'ArrowUp') next = (current - 1 + entries.length) % entries.length;
          else if (event.key === 'Home') next = 0;
          else if (event.key === 'End') next = entries.length - 1;
          else return;
          event.preventDefault();
          entries[next].focus();
        });

        // 外部クリックでメニューを閉じる
        document.addEventListener('click', function(event) {
          if (!dropdown.contains(event.target)) {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
          }
        });
        
        // ESCキーでメニューを閉じる
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            closeMenu(dropdown.contains(event.target));
          }
        });
      }
    });
  });
  `;
}

/**
 * カスタム要素の定義を取得する
 * @returns カスタム要素の定義を行うJavaScriptコード
 */
export function getCustomElementScript(): string {
  return `
  class DocsDropdown extends HTMLElement {
    constructor() {
      super();
    }
  }
  
  // カスタム要素として登録
  customElements.define('docs-dropdown', DocsDropdown);
  `;
}
