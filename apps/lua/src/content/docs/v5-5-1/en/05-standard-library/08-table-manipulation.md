---
title: "Table manipulation"
description: "Table library reference"
licenseSource: "lua-5.5.1"
---

# 6.7 – <a id="6.7"></a>Table Manipulation

This library provides generic functions for table manipulation. It provides all its functions inside the table <a id="pdf-table"></a>`table`.

Remember that, whenever an operation needs the length of a table, all caveats about the length operator apply (see [§3.4.7](/docs/lua/v5-5-1/en/02-language/10-expressions/#3.4.7)). All functions ignore non-numeric keys in the tables given as arguments.

---

## <a id="pdf-table.concat"></a>`table.concat (list [, sep [, i [, j]]])`

Given a list where all elements are strings or numbers, returns the string `list[i]..sep..list[i+1] ··· sep..list[j]`. The default value for `sep` is the empty string, the default for `i` is 1, and the default for `j` is `#list`. If `i` is greater than `j`, returns the empty string.

---

## <a id="pdf-table.create"></a>`table.create (nseq [, nrec])`

Creates a new empty table, preallocating memory. This preallocation may help performance and save memory when you know in advance how many elements the table will have.

Parameter `nseq` is a hint for how many elements the table will have as a sequence. Optional parameter `nrec` is a hint for how many other elements the table will have; its default is zero.

---

## <a id="pdf-table.insert"></a>`table.insert (list, [pos,] value)`

Inserts element `value` at position `pos` in `list`, shifting up the elements `list[pos],list[pos+1],···,list[#list]`. The default value for `pos` is `#list+1`, so that a call `table.insert(t,x)` inserts `x` at the end of the list `t`.

---

## <a id="pdf-table.move"></a>`table.move (a1, f, e, t [,a2])`

Moves elements from the table `a1` to the table `a2`, performing the equivalent to the following multiple assignment: `a2[t],··· = a1[f],···,a1[e]`. The default for `a2` is `a1`. The destination range can overlap with the source range. The number of elements to be moved must fit in a Lua integer. If `f` is larger than `e`, nothing is moved.

Returns the destination table `a2`.

---

## <a id="pdf-table.pack"></a>`table.pack (···)`

Returns a new table with all arguments stored into keys 1, 2, etc. and with a field "`n`" with the total number of arguments. Note that the resulting table may not be a sequence, if some arguments are **nil**.

---

## <a id="pdf-table.remove"></a>`table.remove (list [, pos])`

Removes from `list` the element at position `pos`, returning the value of the removed element. When `pos` is an integer between 1 and `#list`, it shifts down the elements `list[pos+1],list[pos+2],···,list[#list]` and erases element `list[#list]`; The index `pos` can also be 0 when `#list` is 0, or `#list + 1`.

The default value for `pos` is `#list`, so that a call `table.remove(l)` removes the last element of the list `l`.

---

## <a id="pdf-table.sort"></a>`table.sort (list [, comp])`

Sorts the list elements in a given order, *in-place*, from `list[1]` to `list[#list]`. If `comp` is given, then it must be a function that receives two list elements and returns true when the first element must come before the second in the final order, so that, after the sort, `i <= j` implies `not comp(list[j],list[i])`. If `comp` is not given, then the standard Lua operator `<` is used instead.

The `comp` function must define a consistent order; more formally, the function must define a strict weak order. (A weak order is similar to a total order, but it can equate different elements for comparison purposes.)

The sort algorithm is not stable: Different elements considered equal by the given order may have their relative positions changed by the sort.

---

## <a id="pdf-table.unpack"></a>`table.unpack (list [, i [, j]])`

Returns the elements from the given list. This function is equivalent to

```lua
     return list[i], list[i+1], ···, list[j]
```

By default, `i` is 1 and `j` is `#list`.
