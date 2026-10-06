from pathlib import Path
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/22-api-index.reviewed-content.md');s=p.read_text();assert '正規表現形式'in s;s=s.replace('正規表現形式','正規形式');assert '<em>良好には動作しません：</em> 32ビットシステム）。'in s;s=s.replace('<em>良好には動作しません：</em> 32ビットシステム）。','<em>32ビットシステムでは良好に動作しない</em>点に注意してください）。');p.write_text(s)
