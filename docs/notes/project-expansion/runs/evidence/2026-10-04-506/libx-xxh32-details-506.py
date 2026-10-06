from pathlib import Path
import json,hashlib,re
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256'];s=old.read_text();body,footer=s.split('## 出典と通知')
# Finish the repeated brief descriptions as whole units, preserving all inline tags.
def brief(m):
 text=m[1];parts=re.split(r'(<[^>]*>)',text);idx=[i for i in range(0,len(parts),2)if parts[i].strip()];first=parts[idx[0]].strip()
 rules={
 'Calculates the 32-bit hash of':('xxHash32を使って、','using xxHash32.','の32ビットハッシュを計算します。'),
 'Allocates an':('','.', 'を割り当てます。'),'Frees an':('','.', 'を解放します。'),
 'Copies one':('','to another.','を別の状態へコピーします。'),
 'Resets an':('','to begin a new hash.','をリセットして、新しいハッシュ処理を開始します。'),
 'Returns the calculated hash value from an':('','.', 'から計算済みのハッシュ値を返します。'),
 'Canonical (big endian) representation of':('','.', 'の正規（ビッグエンディアン）表現。')}
 if first in rules:
  start,tail,end=rules[first];parts[idx[0]]=parts[idx[0]].replace(first,start)
  for i in idx[1:]:
   if parts[i].strip().startswith(tail):parts[i]=parts[i].replace(tail,end,1);break
  else:raise AssertionError(first)
 elif first=='Consumes a block of':
  parts[idx[0]]=parts[idx[0]].replace(first,'')
  for i in idx:
   parts[i]=parts[i].replace('to an','のブロックを、')
   if parts[i].strip()=='.':parts[i]=parts[i].replace('.','に取り込みます。')
 elif first=='Converts an':
  parts[idx[0]]=parts[idx[0]].replace(first,'')
  for i in idx:
   parts[i]=parts[i].replace('to a big endian','を、ビッグエンディアンの').replace('to a native','を、ネイティブ形式の')
   if parts[i].strip()=='.':parts[i]=parts[i].replace('.','へ変換します。')
 return '<td class="mdescRight">'+''.join(parts)+'</td>'
body=re.sub(r'<td class="mdescRight">([\s\S]*?)</td>',brief,body)
# Context-dependent complete details; punctuation belongs to each statement.
def detail(m):
 tag=m[1];inner=m[2];parts=re.split(r'(<[^>]*>)',inner);ix=[i for i in range(0,len(parts),2)if parts[i].strip()];first=parts[ix[0]].strip() if ix else ''
 if first=='A pointer to an':
  for i in ix:parts[i]=parts[i].replace('A pointer to an','').replace('allocated with','へのポインター。割り当てには')
  parts[ix[-1]]=parts[ix[-1]].replace('.','を使います。')
 elif first=='Must be freed with':
  parts[ix[0]]=parts[ix[0]].replace(first,'解放には');parts[ix[-1]]=parts[ix[-1]].replace('.','を使う必要があります。')
 elif first=='The' and 'pointer to be stored to.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','');parts[ix[-1]]=parts[ix[-1]].replace('pointer to be stored to.','の保存先ポインター。')
 elif first=='The' and 'to be converted.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','変換する');parts[ix[-1]]=parts[ix[-1]].replace('to be converted.','。')
 elif first=='The' and 'to convert.' in inner:
  parts[ix[0]]=parts[ix[0]].replace('The','変換する');parts[ix[-1]]=parts[ix[-1]].replace('to convert.','。')
 elif 'must be allocated with' in inner:
  for i in ix:parts[i]=parts[i].replace('must be allocated with','は、')
  parts[ix[-1]]=parts[ix[-1]].replace('.','で割り当てたものでなければなりません。')
 elif first=='Calling':
  parts[ix[0]]=parts[ix[0]].replace('Calling','');
  for i in ix:parts[i]=parts[i].replace('will not affect','を呼び出しても、').replace(', so you can update, digest, and update again.','には影響しません。そのため、更新、ダイジェスト取得、再度の更新が可能です。')
 elif 'に取り込みます。' in inner:
  for i in ix:
   if parts[i].strip()=='を、':parts[i]=parts[i].replace('を、','のブロックを、')
 return '<'+tag+'>'+''.join(parts)+'</'+tag+'>'
body=re.sub(r'<(p|dd|td class="paramdesc")>([\s\S]*?)</(?:p|dd|td)>',detail,body)
mapping={
'Parameters':'引数','Precondition':'前提条件','Returns':'戻り値','Note':'注記','See also':'関連項目','More...':'詳細…',
'Streaming Example':'ストリーミングの例','Single Shot Example':'一括処理の例','Canonical Representation Example':'正規表現の例',
'XXH3 family':'XXH3ファミリー','XXH64 family':'XXH64ファミリー','XXH32 implementation':'XXH32の実装',
'XXH32 is useful for older platforms, with no or poor 64-bit performance. Note that the':'XXH32は、64ビット演算を使えない、またはその性能が低い古いプラットフォームで有用です。一方、',
'provides competitive speed for both 32-bit and 64-bit systems, and offers true 64/128 bit hash results.':'は、32ビットと64ビットの両システムで競争力のある速度を備え、実際の64/128ビットのハッシュ結果を提供します。',
': Other xxHash families':'：その他のxxHashファミリー','for implementation details':'：実装の詳細','for details.':'：詳細','for an example.':'を参照してください。',
'The block of data to be hashed, at least':'ハッシュ化するデータブロック。大きさは少なくとも','bytes in size.':'バイトです。',
'The length of':'',', in bytes.':'の長さ（バイト単位）。',
'The 32-bit seed to alter the hash\'s output predictably.':'ハッシュの出力を予測可能な形で変更する32ビットのシード。',
'The 32-bit seed to alter the hash result predictably.':'ハッシュ結果を予測可能な形で変更する32ビットのシード。',
'The memory between':'メモリ範囲の始点と終点：','&#10;The memory between':'&#10;メモリ範囲の始点と終点：',
'and':'と','must be valid, readable, contiguous memory. However, if':'。この範囲は有効で、読み取り可能かつ連続したメモリでなければなりません。ただし、',
'is':'が','may be':'の場合、次の値でもかまいません：','. In C++, this also must be':'。C++では、これも次の要件を満たさなければなりません：',
'The calculated 32-bit xxHash32 value.':'計算された32ビットのxxHash32値。','The calculated 32-bit xxHash32 value from that state.':'その状態から計算された32ビットのxxHash32値。',
'An allocated pointer of':'成功時は、','on success.':'（成功時）。','on failure.':'（失敗時）。',
'The state to copy to.':'コピー先の状態。','The state to copy from.':'コピー元の状態。','must not be':'は次の値であってはなりません：','and must not overlap.':'であってはならず、領域が重なっていてもいけません。',
'The state struct to reset.':'リセットする状態構造体。','The state struct to update.':'更新する状態構造体。','The state struct to calculate the hash from.':'ハッシュ値の計算に使う状態構造体。',
'This function resets and seeds a state. Call it before':'この関数は状態をリセットし、シードを設定します。次の関数を呼び出す前に実行してください：',
'Call this to incrementally consume blocks of data.':'データブロックを逐次取り込むために、この関数を呼び出します。','The converted hash.':'変換されたハッシュ。'}
# Handle allocation result with its full context rather than the generic success return marker.
def allocation(m):
 inner=m[1]
 if 'An allocated pointer of' in inner:return '<dd>'+inner.replace('An allocated pointer of','成功時は、').replace('on success.','の割り当て済みポインター。')+'</dd>'
 return m[0]
body=re.sub(r'<dd>([\s\S]*?)</dd>',allocation,body)
parts=re.split(r'(<[^>]*>)',body)
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in mapping:parts[i]=parts[i].replace(x,mapping[x])
body=''.join(parts)
# Human-readable tooltip descriptions; identifiers and signature labels stay exact.
tooltips={'Frees an XXH32_state_t.':'XXH32_state_tを解放します。','Allocates an XXH32_state_t.':'XXH32_state_tを割り当てます。','Returns the calculated hash value from an XXH32_state_t.':'XXH32_state_tから計算済みのハッシュ値を返します。','XXH3 family':'XXH3ファミリー','XXH64 family':'XXH64ファミリー','XXH32 implementation':'XXH32の実装'}
for a,b in tooltips.items():body=body.replace('title="'+a+'"','title="'+b+'"')
out=note/'drafts/ja/12-api-xxh32-family.details-unreviewed.md';assert not out.exists();out.write_text(body+'## 出典と通知'+footer);print(out)
