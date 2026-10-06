import pathlib,json,re,hashlib,collections
p=pathlib.Path(__file__).resolve().parent;src=pathlib.Path('/private/tmp/libx-rapidjson-screening-664/source');previous=p.parent/'2026-10-05-672/UNDOCUMENTED_SOURCE_INVENTORY.json'
x=json.load(open(previous));rows=[];snapshots={}
def cite(file,a,b):
 key=f'{file}:{a}-{b}'
 if key not in snapshots:
  f=src/file;snapshots[key]={'file':file,'lines':[a,b],'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'original':'\n'.join(f.read_text().splitlines()[a-1:b])}
 return key
handler=cite('doc/sax.md',110,169);stream=cite('doc/stream.md',317,355);encoding=cite('include/rapidjson/encodings.h',33,83);allocator=cite('doc/internals.md',150,190);tutorial=cite('doc/tutorial.md',67,226);modify=cite('doc/tutorial.md',450,604);pointer=cite('doc/pointer.md',74,151);schema=cite('doc/schema.md',58,173);dom=cite('doc/dom.md',84,188)
for i,r in enumerate(x['rows']):
 w=r['warning'];file=r['file'];n=r['line'];m=re.search(r'^Member (.+?) \((?:function|typedef|variable|friend|macro definition)\) of (?:class|struct|namespace|file) (.+?) is not documented',w)
 name=m[1] if m else '';owner=m[2] if m else '';head=name.split('(')[0];cat='needs-specific-assessment';refs=[];reason=''
 if (file.endswith('/writer.h') and 254<=n<=467) or (file.endswith('/prettywriter.h') and 189<=n<=241) or (file.endswith('/reader.h') and n==540):
  cat='implementation-member';refs=[cite(file,254,267) if file.endswith('/writer.h') else cite(file,189,201) if file.endswith('/prettywriter.h') else cite(file,531,544)];reason='固定原文のprotected領域。通常のReader/Writer利用手順とは別の実装詳細。'
 elif file.endswith('/document.h') and 1882<=n<=1888:
  cat='implementation-member';refs=[cite(file,1799,1812),cite(file,1879,1892)];reason='GenericValue private領域内のNumber unionの内部表現。'
 elif file.endswith('/rapidjson.h'):
  cat='implementation-member';refs=[cite(file,293,321)];reason='48bit内部pointer表現に用いるmacro。本体設定macroの説明は同一固定原文にある。'
 elif file.endswith('/schema.h') and 1741<=n<=1773:
  cat='implementation-hook';refs=[cite(file,1738,1780)];reason='原文がISchemaStateFactoryの実装と明示。schema通常利用はguideに収録、独立した利用手順ではない。'
 elif file.endswith('/reader.h') and n in [273,441]:
  cat='implementation-function';refs=[cite('doc/internals.md',235,257),cite(file,max(1,n-8),n+5)];reason='空白skipの内部実装用overload。公開Reader::Parseの使用に追加説明は不要。'
 elif 'StreamTraits' in w:
  cat='implementation-trait';refs=[cite('doc/internals.md',235,260),cite(file,max(1,n-5),n+5)];reason='stream局所copyのtraits。通常stream利用はguideにある。'
 elif 'following parameter' in w and file.endswith('/pointer.h'):
  cat='adjacent-original-description';refs=[cite(file,459,478),cite(file,505,513)];reason='const GetのunresolvedTokenIndex説明が隣接mutable overloadに明記されている。'
 elif 'following parameter' in w and file.endswith('/schema.h'):
  cat='guide-description';refs=[schema,cite(file,1585,1601)];reason='outputHandlerの流れとconstructor利用は同版Schema SAX parsing節に説明あり。'
 elif 'IGenericRemoteSchemaDocumentProvider' in w:
  cat='guide-description';refs=[schema,cite('include/rapidjson/schema.h',1293,1308)];reason='remote provider利用は同版Schema Remote Schema節にある。SizeTyp誤記は673issue別管理。'
 elif ' (typedef)' in w or ' (variable)' in w:
  cat='sparse-type-or-state-reference';refs=[cite(file,max(1,n-4),n+4)];reason='型別名/定数/状態fieldの個別説明不足は原文のまま残る。名前だけで説明済みに変更しない。主要利用手順の欠落と分け、API品質・全文review対象へ含める。'
 elif ('GenericArray' in owner or 'GenericObject' in owner):
  cat='original-delegation-description';refs=[cite('include/rapidjson/document.h',2433,2486) if 'GenericArray' in owner else cite('include/rapidjson/document.h',2488,2569),modify];reason='原文のhelper class briefがGenericValueのarray/object APIとGetArray/GetObjectを明示。個別関数説明の欠落は保持するが、操作/allocator/move説明を別途新規生成しない。'
 elif 'GenericMemberIterator' in owner:
  cat='original-concept-description';refs=[cite(file,80,99),cite('doc/tutorial.md',157,180)];reason='原文class briefがRandom Access Iteratorと明示し、guideにobject iterator利用例あり。全operator独立説明とは主張しない。'
 elif any(owner.startswith('rapidjson::'+v) for v in ['Writer','PrettyWriter','BaseReaderHandler','GenericDocument','GenericSchemaValidator']) and head in ['Null','Bool','Int','Uint','Int64','Uint64','Double','RawNumber','String','Key','StartObject','EndObject','StartArray','EndArray']:
  cat='original-concept-description';refs=[handler,cite('include/rapidjson/reader.h',165,217)];reason='Handler contractの対応イベントが固定guide/原文conceptに定義済み。実装クラスの同名APIコメント欠落と主要イベント説明を分離。'
 elif file.endswith('/allocators.h'):
  cat='original-concept-description';refs=[allocator,cite(file,25,62)];reason='Allocator contractのMalloc/Realloc/FreeとkNeedFreeを同一原文conceptに説明。'
 elif head in ['Peek','Take','Tell','Put','Flush','PutBegin','PutEnd'] and any(file.endswith('/'+f) for f in ['stream.h','encodedstream.h','filereadstream.h','filewritestream.h','istreamwrapper.h','ostreamwrapper.h','memorystream.h','memorybuffer.h','stringbuffer.h']):
  cat='original-concept-description';refs=[stream,cite('include/rapidjson/stream.h',24,78)];reason='同版Stream conceptの入力/出力/in-situ contractがguideとheaderに明記。各具体型のdummy非対応実装は新説明で補わない。'
 elif file.endswith('/encodings.h') and head in ['Encode','Decode','Validate','TakeBOM','Take','PutBOM','Put']:
  cat='original-concept-description';refs=[encoding,cite('doc/encoding.md',32,83)];reason='Encoding conceptの対応functionとUTF入出力区別が固定原文に説明済み。'
 elif file.endswith('/pointer.h') and owner=='rapidjson':
  cat='original-delegation-description';refs=[pointer,cite(file,1050,1099)];reason='guideがfree helper/member方式とallocatorの対応を明示。欠落param説明は元memberの原文説明に対応。'
 elif 'GenericValue' in owner and (head.startswith(('Is','Get','Set')) and head not in ['IsLosslessFloat','IsLosslessDouble','IsFloat','SetFloat','Get','Set']):
  cat='guide-description';refs=[tutorial,modify,cite(file,max(1,n-4),n+4)];reason='型判定/数値・文字列取得、変更、array/object helperの主要利用はTutorial内に収録。個別overloadの全文レビューとは別。'
 elif file.endswith('/schema.h') and 'SchemaValidatingReader' in owner:
  cat='guide-description';refs=[schema,cite(file,1937,1964)];reason='Schema DOM parsing節でPopulate/helperの利用とparse/validation結果照会を収録。'
 elif file.endswith('/encodedstream.h') and head in ['GetType','HasBOM','EncodedInputStream','EncodedOutputStream']:
  cat='guide-description';refs=[cite('doc/stream.md',172,286)];reason='stream guideのencoded/AutoUTF/BOM節に利用説明あり。'
 elif file.endswith('/istreamwrapper.h') or file.endswith('/ostreamwrapper.h') or (file.endswith('/filewritestream.h') and head=='FileWriteStream') or (file.endswith('/stringbuffer.h') and head in ['GenericStringBuffer','GetString']):
  cat='guide-description';refs=[cite('doc/stream.md',36,174)];reason='stream guideのmemory/file/iostream利用例に同じconstructor・outputの説明がある。'
 if cat=='needs-specific-assessment':
  if file.endswith('/writer.h') and head in ['WriteInt','WriteUint','WriteInt64','WriteUint64','WriteDouble']:
   cat='implementation-specialization';refs=[cite(file,254,317),cite(file,475,512)];reason='クラス外にあるprotected Write*の明示specialization。公開イベントの説明とは別の内部出力実装。'
  elif file.endswith('/writer.h') and head=='GetMaxDecimalPlaces':
   cat='adjacent-original-description';refs=[cite(file,138,165)];reason='対応SetMaxDecimalPlacesの固定原文が小数切捨て/例/既定値を説明。getter個別brief不足は残る。'
  elif file.endswith('/document.h') and head in ['operator[]','FindMember','RemoveMember','EraseMember']:
   cat='guide-description';refs=[tutorial,modify];reason='Tutorialのquery/modify array/objectに同じ操作と探索/削除・順序の説明あり。全overload個別説明の認定ではない。'
  elif file.endswith('/stream.h') and head in ['GenericStringStream','GenericInsituStringStream']:
   cat='guide-description';refs=[cite('doc/stream.md',12,36),cite('doc/dom.md',222,253),cite(file,max(1,n-12),n+5)];reason='StringStreamの入力/構築とin-situ buffer変更/寿命は同版guideで説明。'
  elif file.endswith('/memorystream.h') and head in ['MemoryStream','Peek4']:
   cat='adjacent-original-description';refs=[cite(file,29,58)];reason='固定原文class briefがbyte stream/長さ・null終端不要とencoding detection Peek4の用途を説明。'
  elif file.endswith('/encodings.h') and head.startswith('RAPIDJSON_STATIC_ASSERT'):
   cat='generator-macro-artifact';refs=[cite(file,n-4,n+3),cite('doc/encoding.md',89,105)];reason='sizeof(codeunit)制約のstatic assertionを生成器がfunction警告にしたもの。実行時APIではない。CharTypeのbyte制約はguideにあり。'
  elif file.endswith('/reader.h') and head=='Default':
   cat='adjacent-original-description';refs=[cite(file,189,218),cite('doc/sax.md',378,421)];reason='BaseReaderHandlerのdefault implementationとOverrideへの転送が同じ原文groupにある。guideはDefault false handlerの利用を収録。'
  else:
   cat='sparse-auxiliary-api-reference';refs=[cite(file,max(1,n-8),n+8)];reason='個別説明が疎い補助API。本文/署名/原文参照を保持し、使用法をコードから新規生成しない。主要利用手順は別のguide/基本API説明にあるが、このAPIを説明済みとは認定せず原文品質/全文review/工数へ残す。'
 row={**r,'index':i,'category':cat,'reason':reason,'references':refs};rows.append(row)
result={'status':'selection-warning-family-assessment','inputSha256':hashlib.sha256(previous.read_bytes()).hexdigest(),'warningRows':len(rows),'uniqueSourcePositions':len({(r['file'],r['line']) for r in rows}),'counts':dict(collections.Counter(r['category'] for r in rows)),'rows':rows,'referenceExcerpts':snapshots,'limits':'分類は主要利用説明への対応評価。630を個別API説明済み/全文意味review合格へ変換しない。個別説明不足と未評価は保持し、工数・品質へ反映。'}
(p/'WARNING_COVERAGE.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(result['counts']);print('\n'.join(f"{r['file']}:{r['line']} {r['warning']}" for r in rows if r['category']=='needs-specific-assessment'))
