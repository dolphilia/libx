from pathlib import Path
import re,json,ast
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');note=root/'docs/notes/document-import/xxhash/v0-8-4';en=w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/16-group___x_x_h64__family.md';s=en.read_text();body,foot=s.split('## Source and notices');m={}
for fn in ['libx-xxh3-oneshot-509.py','libx-xxh3-state-510.py','libx-xxh3-stream-511.py','libx-xxh3-compare-515.py']:
 t=ast.parse(Path('/private/tmp/'+fn).read_text());m.update(ast.literal_eval(next(n.value for n in t.body if isinstance(n,ast.Assign)and any(isinstance(x,ast.Name)and x.id=='m'for x in n.targets))))
add={'&#10;Data Structures':'&#10;データ構造','&#10;Typedefs':'&#10;型定義','&#10;Functions':'&#10;関数','Detailed Description':'詳細説明','Typedef Documentation':'型定義の説明','Function Documentation':'関数の説明',
'Canonical (big endian) representation of':'次の型の正規（ビッグエンディアン）表現：','The opaque state struct for the XXH64 streaming API.':'XXH64ストリーミングAPIの不透明な状態構造体。','Calculates the 64-bit hash of':'次の入力の64ビットハッシュを：','using xxHash64.':'xxHash64を使用して計算します。','Allocates an':'次の状態構造体を割り当てます：','Returns the calculated hash value from an':'次の状態から計算したハッシュ値を返します：',
'Contains functions used in the classic 64-bit xxHash algorithm.':'従来の64ビットxxHashアルゴリズムで使用する関数を含みます。',
'XXH3 provides competitive speed for both 32-bit and 64-bit systems, and offers true 64/128 bit hash results. It provides better speed for systems with vector processing capabilities.':'XXH3は32ビットと64ビットの両システムで競争力のある速度を備え、実際の64/128ビットのハッシュ結果を提供します。ベクトル処理に対応するシステムでは、より高速に動作します。',
'The calculated 64-bit xxHash64 value.':'計算された64ビットのxxHash64値。','must be allocated with':'は、次の関数で割り当てたものでなければなりません：',
'This function resets and seeds a state. Call it before':'この関数は状態をリセットしてシードを設定します。次の関数より前に呼び出してください：','The calculated 64-bit xxHash64 value from that state.':'その状態から計算された64ビットのxxHash64値。'}
m.update(add);parts=re.split(r'(<[^>]*>)',body);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(add)<=set(used),set(add)-set(used)
body=''.join(parts).replace('title: "XXH64 family Public API"','title: "XXH64ファミリーの公開API"')
body=body.replace('が <span class="tt">0</span>, <code class="param">','が <span class="tt">0</span> の場合、<code class="param">')
for x in ['statePtr','dst','src']:body=body.replace(f'<code class="param">{x}</code> は <span class="tt">NULL</span>。',f'<code class="param">{x}</code> は <span class="tt">NULL</span> であってはなりません。')
labels={'More...':'詳細…','Streaming Example':'ストリーミングの例','Single Shot Example':'一括処理の例','Canonical Representation Example':'正規形式の例'}
for a,b in labels.items():body=body.replace('>'+a+'</a>','>'+b+'</a>')
titles={'Allocates an XXH64_state_t.':'XXH64_state_tを割り当てます。','Frees an XXH64_state_t.':'XXH64_state_tを解放します。','Returns the calculated hash value from an XXH64_state_t.':'XXH64_state_tから計算したハッシュ値を返します。'}
for a,b in titles.items():body=body.replace('title="'+a+'"','title="'+b+'"')
# Recast complete operation descriptions without changing inline tag order.
a=r'(<a\b[^>]*>XXH64_state_t</a>)'
for pat,repl in [(r'次の状態構造体を割り当てます： '+a+r'。',r'\1を割り当てます。'),(r'次の状態構造体を解放します： '+a+r'。',r'\1を解放します。'),(r'次の型の状態を： '+a+r' 別の状態にコピーします。',r'\1の状態を別の状態にコピーします。'),(r'次の状態をリセットします： '+a+r' 新しいハッシュの計算を開始します。',r'新しいハッシュの計算を開始するため、\1をリセットします。'),(r'次の入力のブロックを取り込み： (<code class="param">input</code>) 次の状態に反映します： '+a+r'。',r'\1のブロックを取り込み、\2に反映します。'),(r'次の状態から計算したハッシュ値を返します： '+a+r'。',r'\1から計算したハッシュ値を返します。'),(r'次の入力の64ビットハッシュを： (<code class="param">input</code>) xxHash64を使用して計算します。',r'\1の64ビットハッシュをxxHash64で計算します。')]:
 body,n=re.subn(pat,repl,body);assert n,pat
expected=(w/'apps/xxhash/src/content/docs/v0-8-4/en/02-api/01-annotated.md').read_text().split('## Source and notices')[1];assert foot==expected
footer=(w/'apps/xxhash/src/content/docs/v0-8-4/ja/02-api/01-annotated.md').read_text().split('## 出典と通知')[1]
out=note/'drafts/ja/16-api-xxh64-family.complete-unreviewed.md';assert not out.exists();out.write_text((body+'## 出典と通知'+footer).replace('/v0-8-4/en/','/v0-8-4/ja/'));Path('/private/tmp/libx-xxh64-labels-522.json').write_text(json.dumps({'labels':labels,'titles':titles},ensure_ascii=False,indent=2));print(out)
