This is a small trick to convert a _Map_ to an _Object_ using the _Meta_ module.

Was created by [Michel Hermier](https://github.com/mhermier) in issue [912](https://github.com/wren-lang/wren/issues/912).

```js

class MapToObject {
    static call(map) {
        __uniqueid = __uniqueid || 0
        __uniqueid = __uniqueid + 1
        
        var classname = "NewObjectFromMap_%(__uniqueid)"
        var keys = map.keys
    
        var   out = "var %(classname)_shadow = {}\n"
        out = out + "return Fn.new {|map|\n"

        // Copy the map in the shadow
        out = out + "\tfor (key in map.keys) %(classname)_shadow[key] = map[key]\n"
    
        out = out + "\tclass %(classname) {\n"
        out = out + keys.reduce("") {|str, key| str + "\t\tstatic %(key) { __%(key) != null ? __%(key) : __%(key) = %(classname)_shadow[\"%(key)\"] }\n" }
        out = out + "\t}\n"
        out = out + "\treturn %(classname)\n"
        out = out + "}"

        return Meta.compile(out).call().call(map)
    }
}
```

## Example Usage

```js

var obj = MapToObject.call({ "hello": "wren" })
var obj2 = MapToObject.call({"one" : 1})
var obj3 = MapToObject.call({"two" : 2})

System.print(obj.hello) // expect: wren
System.print(obj2.one) // expect: 1
System.print(obj3.two) // expect: 2
```






