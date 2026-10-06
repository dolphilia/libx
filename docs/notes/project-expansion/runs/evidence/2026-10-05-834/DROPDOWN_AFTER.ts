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
        // role=menuitem はTab対象外なので、メニュー内のフォーカスを管理する。
        const items = Array.from(menu.querySelectorAll('[role="menuitem"]')).filter(item =>
          item.getAttribute('aria-disabled') !== 'true');
        const closeMenu = () => {
          button.setAttribute('aria-expanded', 'false');
          menu.classList.add('hidden');
        };
        const openAndFocus = index => {
          button.setAttribute('aria-expanded', 'true');
          menu.classList.remove('hidden');
          items[index]?.focus();
        };
        button.addEventListener('keydown', event => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            openAndFocus(event.key === 'ArrowDown' ? 0 : items.length - 1);
          } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openAndFocus(0);
          }
        });
        menu.addEventListener('keydown', event => {
          const index = items.indexOf(document.activeElement);
          if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
            if (!items.length) return;
            const target = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 :
              (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
            items[target].focus();
          } else if (event.key === ' ') {
            event.preventDefault();
            items[index]?.click();
          } else if (event.key === 'Tab') {
            // ボタンを起点に標準Tab移動を続け、非表示項目にフォーカスを残さない。
            button.focus();
            closeMenu();
          }
        });
        // ボタンクリックでメニューの表示/非表示を切り替え
        button.addEventListener('click', function() {
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', (!expanded).toString());
          menu.classList.toggle('hidden');
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
            if (dropdown.contains(document.activeElement)) button.focus();
            closeMenu();
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
