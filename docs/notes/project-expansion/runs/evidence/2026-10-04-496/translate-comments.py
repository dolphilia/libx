from pathlib import Path
import re,json,hashlib
root=Path('/Users/dolphilia/github/libx');note=root/'docs/notes/document-import/xxhash/v0-8-4';p=json.loads((note/'TRANSLATION_DRAFT_PROGRESS.json').read_text());old=root/p['draft']['path'];assert hashlib.sha256(old.read_bytes()).hexdigest()==p['draft']['sha256']
comments={
1:'定数の行末の`0b...`は、各素数定数の2進表現です。',
9:'定数の行末の`0b...`は、各素数定数の2進表現です。',
18:'定数の行末の`0b...`は、各素数定数の2進表現です。',
20:'戻り値はリトルエンディアンで`u8[192]`に変換します。',
22:'戻り値の1つ目は下位半分、2つ目は上位半分です。',
23:'図は最下位ビット側（LSB）から最上位ビット側（MSB）へ、末尾のバイト、長さ、先頭のバイト、中央または末尾のバイトを並べた配置を示します。8、16、24は各境界のビット位置です。',
24:'上の`bswap32(combined) <<< 13`は32ビットの回転です。戻り値の1つ目は下位半分、2つ目は上位半分です。',
26:'`higherHalf(mulResult)`は`mulResult >> 64`、`lowerHalf(mulResult)`は`mulResult & 0xFFFFFFFFFFFFFFFF`です。',
28:'最初のコメントの直前の行は、`higherHalf(mulResult) + val2 + (u64)lowerHalf(val2) * (PRIME32_2 - 1)`と簡略化することもできます。次のコメントに続く3行は、実際には128ビット値と64ビット値の乗算から128ビットの結果を得る処理（`{low,high} = (u128){low,high} * PRIME64_2`）です。戻り値の1つ目は下位半分、2つ目は上位半分です。',
29:'最初の初期化はXXH3-64用、次の初期化はXXH3-128用です。',
31:'ここでもリトルエンディアンへの変換を行います。',
32:'実装でアンダーフローを避けるため、ループ変数`i`は符号付きにする必要があります。',
33:'最後の呼び出しでは、半チャンクの順序とシードが、それまでの呼び出しとは異なることに注意してください。',
34:'戻り値の1つ目は下位半分、2つ目は上位半分です。',
36:'シークレットの長さは既定で192バイト、最小136バイトです。1ブロック当たりのストライプ数は既定で16本、最小9本です。ブロックの大きさは既定で1024バイト、最小576バイトです。',
37:'積は`(value and 0xFFFFFFFF) * (value >> 32)`を表します。',
38:'64バイトは8つの`u64`に相当します。',
41:'`len`は最後のブロックの大きさで、`1 <= len <= blockSize`です。',
42:'64ビット同士を乗算し、完全な128ビットの結果を得ます。上下半分のXORは`(mulResult and 0xFFFFFFFFFFFFFFFF) xor (mulResult >> 64)`を表します。',
43:'戻り値の1つ目は下位半分、2つ目は上位半分です。'
}
s=old.read_text();n=0;seen=[]
def annotate(m):
 global n
 n+=1
 if '//' in m[0]:
  assert n in comments;seen.append(n)
  return m[0]+'\n\nコード内コメントの訳：'+comments[n]
 return m[0]
s=re.sub(r'^```[^\n]*\n[\s\S]*?^```',annotate,s,flags=re.M);assert n==43;assert set(seen)==set(comments)
s=s.replace('Cで書かれた参照ライブラリーはhttps://www.xxhash.comで入手できます。','Cで書かれた参照ライブラリーは[xxhash.com](https://www.xxhash.com)で入手できます。')
out=note/'drafts/ja/08-doc-xxhash_spec.comments-unreviewed.md';assert not out.exists();out.write_text(s)
print({'codeBlocks':n,'commentExplanations':len(seen),'draft':str(out)})
