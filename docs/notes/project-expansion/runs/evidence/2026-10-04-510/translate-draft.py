from pathlib import Path
import re,json,hashlib
note=Path('/Users/dolphilia/github/libx/docs/notes/document-import/xxhash/v0-8-4');p=json.loads((note/'API_TRANSLATION_DRAFT_PROGRESS.json').read_text());src=Path('/Users/dolphilia/github/libx')/p['draft']['path'];assert hashlib.sha256(src.read_bytes()).hexdigest()==p['draft']['sha256'];s=src.read_text();a=s.index('<a id="ga95592969a08becc37428dd547c36b8fd"');title=s.index('XXH3_64bits_reset_withSecret()</h2>',a);b=s.rfind('<a id=',a,title);part=s[a:b]
m={
'Allocate an':'次の状態構造体を割り当てます：','Returns':'戻り値','An allocated pointer of':'割り当てられた次の型のポインター：','on success.':'（成功した場合）。','on failure.':'（失敗した場合）。','Note':'注記','Must be freed with':'解放には必ず次の関数を使用してください：','See also':'関連項目',
'Frees an':'次の状態構造体を解放します：','Parameters':'引数','A pointer to an':'次の型のポインター：','allocated with':'。割り当てには次の関数を使用してください：','Must be allocated with':'割り当てには必ず次の関数を使用してください：',
'Copies one':'次の型の状態を：','to another.':'別の状態にコピーします。','The state to copy to.':'コピー先の状態。','The state to copy from.':'コピー元の状態。','Precondition':'前提条件','and':'と','must not be':'は','and must not overlap.':'であってはならず、互いに重なっていてもいけません。',
'Resets an':'次の状態をリセットし：','to begin a new hash.':'新しいハッシュの計算を開始します。','The state struct to reset.':'リセットする状態構造体。','This function resets':'この関数は、','and generate a secret with default parameters.':'をリセットし、既定のパラメーターでシークレットを生成します。',
'Call this function before':'この関数は、次の関数より前に呼び出してください：','Digest will be equivalent to':'ダイジェストは、次の関数と同等になります：',
'with 64-bit seed to begin a new hash.':'64ビットのシードを使用して新しいハッシュの計算を開始します。','The 64-bit seed to alter the hash result predictably.':'ハッシュ結果を予測可能な形で変化させる64ビットのシード。','and generate a secret from':'をリセットし、次の値からシークレットを生成します：','.':'。'}
parts=re.split(r'(<[^>]*>)',part);used=[]
for i in range(0,len(parts),2):
 x=parts[i].strip()
 if x in m:parts[i]=parts[i].replace(x,m[x]);used.append(x)
assert set(m)==set(used),set(m)-set(used)
part=''.join(parts)
part=part.replace('<code class="param">statePtr</code> は <span class="tt">NULL</span>。','<code class="param">statePtr</code> は <span class="tt">NULL</span> であってはなりません。')
out=note/'drafts/ja/14-api-xxh3-family.state-reset-unreviewed.md';assert not out.exists();out.write_text(s[:a]+part+s[b:]);print({'draft':str(out),'translatedNodes':len(used),'functionsAdded':5,'wholePageCompleted':False})
