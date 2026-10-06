from pathlib import Path
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4/drafts/ja/31-api-dispatch-file.reviewed-content.md');s=p.read_text();assert s.count('自動ディスパッチャーの対象：')==1;s=s.replace('自動ディスパッチャーの対象：','x86ベースの対象上で、').replace('（x86ベースの対象向け）。','用の自動ディスパッチを行うコードです。');p.write_text(s)
