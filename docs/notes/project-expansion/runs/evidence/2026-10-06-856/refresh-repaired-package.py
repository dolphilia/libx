from pathlib import Path
import shutil
E=Path(__file__).parent;W=Path('/private/tmp/libx-rapidjson-formal-853');B=Path('/private/tmp/libx-rapidjson-source-package-856')
shutil.copytree(W/'docs/notes/document-import/rapidjson',B/'workspace/docs/notes/document-import/rapidjson',dirs_exist_ok=True)
for p in (W/'apps/rapidjson/src/content/docs').rglob('*.md'):shutil.copy2(p,B/'workspace'/p.relative_to(W))
for p in (W/'apps/rapidjson/public/source/v1-1-0/edited').rglob('*.md'):shutil.copy2(p,B/'workspace'/p.relative_to(W))
shutil.copy2(W/'docs/notes/document-import/rapidjson/v1-1-0/SOURCE_MANIFEST.json',B/'SOURCE_MANIFEST.json')
s=(E/'refresh-package.py').read_text().replace('libx-rapidjson-source-rebuild-856','libx-rapidjson-source-rebuild-856-repaired');exec(compile(s,str(E/'refresh-package.py'),'exec'))
