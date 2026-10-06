from pathlib import Path
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/20-api-public.reviewed-content.md');s=p.read_text();assert s.count('：呼び出したライブラリの値。')==1;p.write_text(s.replace('：呼び出したライブラリの値。','（呼び出したライブラリの値）。'))
