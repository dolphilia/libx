#include "rapidjson/document.h"
#include "rapidjson/reader.h"
#include "rapidjson/writer.h"
#include "rapidjson/encodedstream.h"
#include "rapidjson/memorybuffer.h"
using namespace rapidjson;
int main(){Document d; d.SetString("hello"); MemoryBuffer mb; EncodedOutputStream<UTF32LE<>,MemoryBuffer> eos(mb); Writer<decltype(eos),UTF8<>,UTF32LE<>> writer(eos); d.Accept(writer);}
