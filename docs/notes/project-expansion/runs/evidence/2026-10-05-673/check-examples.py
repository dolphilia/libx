import pathlib,subprocess,json,hashlib
p=pathlib.Path(__file__).resolve().parent;tmp=pathlib.Path('/private/tmp/libx-rapidjson-example-quality-673');tmp.mkdir(exist_ok=True)
src=pathlib.Path('/private/tmp/libx-rapidjson-screening-664/source');compiler='/usr/bin/clang++';base=[compiler,'-isysroot','/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk','-std=c++11','-Wno-deprecated-declarations','-I'+str(src/'include')]
cases=[('tutorial-object','Value contact(kObject);','Value contact(kObjectType);'),('dom-offset','Document d; (void)d.GetParseOffset();','Document d; (void)d.GetErrorOffset();'),('schema-remote-type','SizeTyp length = 0; (void)length;','SizeType length = 0; (void)length;'),('faq-document-type','Documnet address;','Document address;'),('sax-error-name','Reader r; (void)r.HasParseEror();','Reader r; (void)r.HasParseError();'),('stream-writer-order','Document d; d.SetString("hello"); MemoryBuffer mb; EncodedOutputStream<UTF32LE<>,MemoryBuffer> eos(mb); Writer<decltype(eos),UTF32LE<>,UTF8<>> writer(eos); d.Accept(writer);','Document d; d.SetString("hello"); MemoryBuffer mb; EncodedOutputStream<UTF32LE<>,MemoryBuffer> eos(mb); Writer<decltype(eos),UTF8<>,UTF32LE<>> writer(eos); d.Accept(writer);')]
headers='\n'.join('#include "rapidjson/'+h+'"' for h in ['document.h','reader.h','writer.h','encodedstream.h','memorybuffer.h'])+'\nusing namespace rapidjson;\n'
results=[]
for name,original,corrected in cases:
 row={'name':name,'method':'fixed-header syntax check; surrounding includes/types supplied; no upstream file edited','variants':[]}
 for kind,statement in [('original',original),('corrected-local-probe',corrected)]:
  code=headers+'int main(){'+statement+'}\n';f=tmp/(name+'-'+kind+'.cpp');f.write_text(code);out=subprocess.run(base+['-fsyntax-only',str(f)],capture_output=True,text=True);log=name+'-'+kind+'.log';(p/log).write_text(out.stdout+out.stderr);(p/f.name).write_text(code);row['variants'].append({'kind':kind,'exitCode':out.returncode,'log':log,'source':f.name})
 assert row['variants'][0]['exitCode']!=0 and row['variants'][1]['exitCode']==0,row
 results.append(row)
probe=headers+'''#include "rapidjson/pointer.h"
#include <cstdio>
int main(){
 Document good,bad; good.Parse("{}"); bad.Parse("{");
 Pointer noSlash("1/a"),slash("/1/a");
 Document a,b; a.Parse("{\\"x\\":1,\\"y\\":2}");b.Parse("{\\"y\\":2,\\"x\\":1}");
 Document d; Pointer("/project").Set(d,"RapidJSON");Pointer("/stars").Set(d,10);Pointer("/stars").Get(d)->SetInt(11);Pointer("/a/b/0").Create(d);Pointer("/hello").GetWithDefault(d,"world");Value x("C++");Pointer("/hello").Swap(d,x);Pointer("/a").Erase(d);
 printf("{\\"schemaOriginalRejectsValidJSON\\":%s,\\"schemaOriginalRejectsInvalidJSON\\":%s,\\"missingSlashPointerValid\\":%s,\\"slashPointerValid\\":%s,\\"objectOrderIndependentEqual\\":%s,\\"pointerStarsAfterErase\\":%d,\\"valueSizeLocalBytes\\":%zu,\\"pointerOptimizationLocal\\":%d}\\n",!good.HasParseError()?"true":"false",!bad.HasParseError()?"true":"false",noSlash.IsValid()?"true":"false",slash.IsValid()?"true":"false",a==b?"true":"false",d["stars"].GetInt(),sizeof(Value),RAPIDJSON_48BITPOINTER_OPTIMIZATION);
}
'''
f=tmp/'semantic-probe.cpp';f.write_text(probe);(p/f.name).write_text(probe);out=subprocess.run(base+[str(f),'-o',str(tmp/'semantic-probe')],capture_output=True,text=True);(p/'semantic-probe-build.log').write_text(out.stdout+out.stderr);assert out.returncode==0
out=subprocess.run([str(tmp/'semantic-probe')],capture_output=True,text=True);assert out.returncode==0;(p/'semantic-probe-output.json').write_text(out.stdout);runtime=json.loads(out.stdout)
(p/'EXAMPLE_CHECK.json').write_text(json.dumps({'status':'completed-limited-original-example-quality-check','compiler':compiler,'compilerVersion':subprocess.run([compiler,'--version'],capture_output=True,text=True).stdout,'sourceRoot':str(src),'cases':results,'runtimeProbe':runtime,'limits':'Not all snippets or compiler/platforms verified; corrected variants are evidence-only and not changes to fixed originals or published documents.'},ensure_ascii=False,indent=2)+'\n');print(json.dumps(runtime))
