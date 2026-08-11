---
title: "Luaの完全な構文"
description: "Lua 5.5の完全な文法"
licenseSource: "lua-5.5.1"
---

# 9 – <a id="9"></a>Luaの完全な構文

以下に、拡張BNFで記述したLuaの完全な構文を示す。拡張BNFの通常の表記どおり、{A}は0個以上のAを、[A]は省略可能なAを意味する。（演算子の優先順位については[§3.4.8](/docs/lua/v5-5-1/ja/02-language/10-expressions/#3.4.8)を、終端記号Name、Numeral、LiteralStringの説明については[§3.1](/docs/lua/v5-5-1/ja/02-language/07-lexical-conventions/#3.1)を参照。）

```text
	chunk ::= block

	block ::= {stat} [retstat]

	stat ::=  ‘;’ | 
		 varlist ‘=’ explist | 
		 functioncall | 
		 label | 
		 break | 
		 goto Name | 
		 do block end | 
		 while exp do block end | 
		 repeat block until exp | 
		 if exp then block {elseif exp then block} [else block] end | 
		 for Name ‘=’ exp ‘,’ exp [‘,’ exp] do block end | 
		 for namelist in explist do block end | 
		 function funcname funcbody | 
		 local function Name funcbody | 
		 global function Name funcbody | 
		 local attnamelist [‘=’ explist] | 
		 global attnamelist [‘=’ explist] | 
		 global [attrib] ‘*’ 

	attnamelist ::=  [attrib] Name [attrib] {‘,’ Name [attrib]}

	attrib ::= ‘<’ Name ‘>’

	retstat ::= return [explist] [‘;’]

	label ::= ‘::’ Name ‘::’

	funcname ::= Name {‘.’ Name} [‘:’ Name]

	varlist ::= var {‘,’ var}

	var ::=  Name | prefixexp ‘[’ exp ‘]’ | prefixexp ‘.’ Name 

	namelist ::= Name {‘,’ Name}

	explist ::= exp {‘,’ exp}

	exp ::=  nil | false | true | Numeral | LiteralString | ‘...’ | functiondef | 
		 prefixexp | tableconstructor | exp binop exp | unop exp 

	prefixexp ::= var | functioncall | ‘(’ exp ‘)’

	functioncall ::=  prefixexp args | prefixexp ‘:’ Name args 

	args ::=  ‘(’ [explist] ‘)’ | tableconstructor | LiteralString 

	functiondef ::= function funcbody

	funcbody ::= ‘(’ [parlist] ‘)’ block end

	parlist ::= namelist [‘,’ varargparam] | varargparam

	varargparam ::= ‘...’ [Name]

	tableconstructor ::= ‘{’ [fieldlist] ‘}’

	fieldlist ::= field {fieldsep field} [fieldsep]

	field ::= ‘[’ exp ‘]’ ‘=’ exp | Name ‘=’ exp | exp

	fieldsep ::= ‘,’ | ‘;’

	binop ::=  ‘+’ | ‘-’ | ‘*’ | ‘/’ | ‘//’ | ‘^’ | ‘%’ | 
		 ‘&’ | ‘~’ | ‘|’ | ‘>>’ | ‘<<’ | ‘..’ | 
		 ‘<’ | ‘<=’ | ‘>’ | ‘>=’ | ‘==’ | ‘~=’ | 
		 and | or

	unop ::= ‘-’ | not | ‘#’ | ‘~’
```
