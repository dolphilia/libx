#include "rapidjson/document.h"
#include "rapidjson/reader.h"
#include "rapidjson/writer.h"
#include "rapidjson/encodedstream.h"
#include "rapidjson/memorybuffer.h"
using namespace rapidjson;
#include "rapidjson/pointer.h"
#include <cstdio>
int main(){
 Document good,bad; good.Parse("{}"); bad.Parse("{");
 Pointer noSlash("1/a"),slash("/1/a");
 Document a,b; a.Parse("{\"x\":1,\"y\":2}");b.Parse("{\"y\":2,\"x\":1}");
 Document d; Pointer("/project").Set(d,"RapidJSON");Pointer("/stars").Set(d,10);Pointer("/stars").Get(d)->SetInt(11);Pointer("/a/b/0").Create(d);Pointer("/hello").GetWithDefault(d,"world");Value x("C++");Pointer("/hello").Swap(d,x);Pointer("/a").Erase(d);
 printf("{\"schemaOriginalRejectsValidJSON\":%s,\"schemaOriginalRejectsInvalidJSON\":%s,\"missingSlashPointerValid\":%s,\"slashPointerValid\":%s,\"objectOrderIndependentEqual\":%s,\"pointerStarsAfterErase\":%d,\"valueSizeLocalBytes\":%zu,\"pointerOptimizationLocal\":%d}\n",!good.HasParseError()?"true":"false",!bad.HasParseError()?"true":"false",noSlash.IsValid()?"true":"false",slash.IsValid()?"true":"false",a==b?"true":"false",d["stars"].GetInt(),sizeof(Value),RAPIDJSON_48BITPOINTER_OPTIMIZATION);
}
