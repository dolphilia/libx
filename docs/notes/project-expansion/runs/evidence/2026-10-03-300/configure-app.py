from pathlib import Path
import json,shutil
ws=Path('/private/tmp/libx-cjson-import-20261003');app=ws/'apps/cjson';trial=Path('/private/tmp/libx-wren-trial-20261003-283/apps/cjson-trial')
for rel in ['src/content/docs/v1','public/search/v1','public/sidebar']:
 p=app/rel
 if p.exists():shutil.rmtree(p)
c=json.loads((trial/'src/config/project.config.jsonc').read_text());c['paths']['projectSlug']='cjson';c['language']['supported']=['en','ja'];c['language']['displayNames']['ja']='日本語';c['translations']={'en':{'displayName':'cJSON Documentation','displayDescription':'Unofficial cJSON 1.7.19 complete usage guide','categories':{'guide':'Usage Guide','license':'License and Attribution'}},'ja':{'displayName':'cJSON ドキュメント','displayDescription':'cJSON 1.7.19 の公式利用ガイド全体の非公式日本語訳','categories':{'guide':'利用ガイド','license':'ライセンス・帰属'}}};sources=[]
for name,id,title in [('README.md','cjson-readme','cJSON 1.7.19 Usage Guide'),('LICENSE','cjson-license','cJSON 1.7.19 MIT License'),('CONTRIBUTORS.md','cjson-contributors','cJSON 1.7.19 Contributors')]:
 sources.append({'id':id,'name':title,'author':'Dave Gamble and cJSON contributors','license':'MIT','licenseUrl':'/docs/cjson/assets/cJSON-LICENSE.txt','sourceUrl':f'https://github.com/DaveGamble/cJSON/blob/c859b25da02955fef659d658b8f324b5cde87be3/{name}','provenanceNotes':[{'en':'Unofficial libx edition of the complete fixed source. Formatting and internal links are adapted. Original notices and contributor names are retained. Editorial source notes are explicitly separated; software examples have not been executed here.','ja':'固定原資料全体を掲載したlibxによる非公式版・日本語訳です。書式と内部リンクを調整し、原通知と貢献者名を保持しています。編集上の原文注記は明示的に分けています。ソフトウェアのコード例はここでは実行検証していません。'}]})
c['licensing']['defaultSource']='cjson-readme';c['licensing']['sources']=sources;(app/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
(app/'src/plugins').mkdir(exist_ok=True)
for name in ['remark-cjson-source.mjs','rehype-cjson-html.mjs']:
 s=(trial/'src/plugins'/name).read_text().replace('cJSON trial requires','cJSON requires').replace('CJSONTRIALPRE','CJSONPRE');(app/'src/plugins'/name).write_text(s)
(app/'astro.config.mjs').write_text((trial/'astro.config.mjs').read_text());pkg=json.loads((app/'package.json').read_text());pkg['dependencies']['hast-util-from-html']='2.0.3';(app/'package.json').write_text(json.dumps(pkg,indent=2)+'\n')
(app/'README.md').write_text('''# cJSON ドキュメント

cJSON 1.7.19公式README利用ガイド全文、原MIT通知と貢献者一覧の非公式掲載です。全公開APIリファレンスを称しません。

定本入力: `docs/notes/document-import/cjson/v1-7-19/SOURCE_LOCK.json`。
変換にはPythonと `scripts/importers/requirements-cjson.txt` の固定Markdown依存を使います。依存導入時は専用venvに分離してください。

```sh
python scripts/importers/import-cjson-1.7.19.py
python scripts/importers/import-cjson-1.7.19.py --check
```

日本語訳・全内容レビュー・機械/表示検証と公開は未完了です。現在は専用チェックアウトのみで作業しています。
''')
