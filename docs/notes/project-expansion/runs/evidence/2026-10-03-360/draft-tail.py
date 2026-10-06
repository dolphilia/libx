from pathlib import Path
import re
app=Path('/private/tmp/libx-zlib-import-20261003/apps/zlib');provenance=re.search(r'<aside data-editorial="provenance">.*?</aside>',(app/'src/content/docs/v1-3-2/ja/01-api/05-utility.md').read_text(),re.S)[0]
for page,title,heading in [('08-hacks.md','各種の内部実装、見ないでください :)','各種の内部実装、見ないでください :)'),('09-undocumented.md','未文書化の関数','未文書化の関数')]:
 s=(app/'src/content/docs/v1-3-2/en/01-api'/page).read_text();s=re.sub(r'title: .*',lambda m:'title: "'+title+'"',s,count=1);s=re.sub(r'(<h2[^>]*>).*?(</h2>)',lambda m:m[1]+' '+heading+' '+m[2],s,count=1);s=re.sub(r'<aside data-editorial="provenance">.*?</aside>',lambda m:provenance,s,flags=re.S)
 if page=='08-hacks.md':
  p={186:' <a href="../03-basic/#deflateInit">deflateInit</a>と<a href="../03-basic/#inflateInit">inflateInit</a>は、zlibの版と、コンパイラーが認識する<a href="../01-overview/#z_stream">z_stream</a>を\n 検査できるようにするためのマクロです：\n ',188:' <a href="../06-gzip/#gzgetc">gzgetc</a>()マクロ、それを支える関数、公開されているデータ構造です。\n 実際の内部状態は、この公開構造体よりはるかに大きいことに注意してください。\n この省略した構造体は、<a href="../06-gzip/#gzgetc">gzgetc</a>()マクロに必要な部分だけを公開しています。\n 名前や動作は将来、気まぐれにさえ変更される可能性があるため、利用者はこれらの公開要素を\n いじるべきではありません。使えるのは<a href="../06-gzip/#gzgetc">gzgetc</a>()マクロだけです。警告しました。\n ',190:' _LARGEFILE64_SOURCEが定義されていれば64ビットオフセット関数を提供し、\n _FILE_OFFSET_BITSが64なら通常の関数を64ビットへ変更します。両方を満たす場合、\n アプリケーションは*64関数を利用でき、通常の関数も64ビットへ変更します。\n 大きなファイルに対応しないシステムでこれらを設定した場合に備え、\n _LFS64_LARGEFILEも真でなければなりません。\n '}
  for k,v in p.items():
   pat=rf'(<div data-zlib-block="{k}"><div style="white-space:pre-wrap;overflow-wrap:anywhere">).*?(</div></div>)';s,n=re.subn(pat,lambda m:m[1]+v+m[2],s,flags=re.S);assert n==1,k
  s=s.replace('/* backward compatibility */','/* 後方互換性 */')
 else:
  s=s.replace('This section is explicitly undocumented upstream. Its declarations are retained without newly generated explanations.','この節は上流で明示的に未文書化とされています。宣言を保持し、新たに生成した説明は加えていません。')
 f=app/'src/content/docs/v1-3-2/ja/01-api'/page;assert not f.exists();f.write_text(s);print(f)
