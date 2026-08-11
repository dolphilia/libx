export const LUA_VERSION = '5.5.1';
export const LUA_VERSION_ID = 'v5-5-1';

const manual = (output, title, description, start, end, options = {}) => ({
  source: 'manual.html',
  output,
  title,
  description,
  start,
  end,
  ...options,
});

const readme = (output, title, description, start, end) => ({
  source: 'readme.html',
  output,
  title,
  description,
  start,
  end,
});

export const LUA_PAGE_MAP = [
  readme(
    '01-overview/01-about.md',
    'About Lua 5.5',
    'Overview, source layout and supported platforms',
    { heading: 'Welcome to Lua 5.5' },
    { anchor: 'install' }
  ),
  readme(
    '01-overview/02-installing.md',
    'Installing Lua',
    'Build, install and customize Lua 5.5',
    { anchor: 'install' },
    { anchor: 'changes' }
  ),
  readme(
    '07-migration-and-known-issues/01-changes-since-5-4.md',
    'Changes since Lua 5.4',
    'Main changes introduced in Lua 5.5',
    { anchor: 'changes' },
    { anchor: 'license' }
  ),
  readme(
    '01-overview/03-license.md',
    'Lua license',
    'MIT license and attribution requirements for Lua 5.5.1',
    { anchor: 'license' },
    null
  ),

  manual(
    '01-overview/04-introduction.md',
    'Introduction',
    'Purpose, design and scope of the Lua language',
    { anchor: '1' },
    { anchor: '2' }
  ),
  manual(
    '02-language/01-values-and-types.md',
    'Basic concepts: values and types',
    'Basic concepts, values and Lua types',
    { anchor: '2' },
    { anchor: '2.2' }
  ),
  manual(
    '02-language/02-scopes-variables-and-environments.md',
    'Scopes, variables and environments',
    'Lexical scope, variables and environments',
    { anchor: '2.2' },
    { anchor: '2.3' }
  ),
  manual(
    '02-language/03-error-handling.md',
    'Error handling',
    'Lua error handling and protected execution',
    { anchor: '2.3' },
    { anchor: '2.4' }
  ),
  manual(
    '02-language/04-metatables-and-metamethods.md',
    'Metatables and metamethods',
    'Metatables, metamethods and event semantics',
    { anchor: '2.4' },
    { anchor: '2.5' }
  ),
  manual(
    '02-language/05-garbage-collection.md',
    'Garbage collection',
    'Incremental and generational garbage collection',
    { anchor: '2.5' },
    { anchor: '2.6' }
  ),
  manual(
    '02-language/06-coroutines.md',
    'Coroutines',
    'Lua coroutine execution and yielding',
    { anchor: '2.6' },
    { anchor: '3' }
  ),
  manual(
    '02-language/07-lexical-conventions.md',
    'The language: lexical conventions',
    'Tokens, literals, identifiers and lexical rules',
    { anchor: '3' },
    { anchor: '3.2' }
  ),
  manual(
    '02-language/08-variables.md',
    'Variables',
    'Lua variable forms and indexing semantics',
    { anchor: '3.2' },
    { anchor: '3.3' }
  ),
  manual(
    '02-language/09-statements.md',
    'Statements',
    'Lua statements and control structures',
    { anchor: '3.3' },
    { anchor: '3.4' }
  ),
  manual(
    '02-language/10-expressions.md',
    'Expressions',
    'Operators, constructors, calls and function definitions',
    { anchor: '3.4' },
    { anchor: '4' }
  ),

  manual(
    '03-c-api/01-overview.md',
    'C API overview',
    'C API conventions, status codes and stack effects',
    { anchor: '4' },
    { anchor: '4.1' }
  ),
  manual(
    '03-c-api/02-stack.md',
    'The stack',
    'Lua C API stack organization and valid indices',
    { anchor: '4.1' },
    { anchor: '4.2' }
  ),
  manual(
    '03-c-api/03-c-closures.md',
    'C closures',
    'C functions, upvalues and C closures',
    { anchor: '4.2' },
    { anchor: '4.3' }
  ),
  manual(
    '03-c-api/04-registry.md',
    'Registry',
    'The Lua registry and reserved keys',
    { anchor: '4.3' },
    { anchor: '4.4' }
  ),
  manual(
    '03-c-api/05-error-handling-in-c.md',
    'Error handling in C',
    'C API errors, long jumps and recovery',
    { anchor: '4.4' },
    { anchor: '4.5' }
  ),
  manual(
    '03-c-api/06-handling-yields-in-c.md',
    'Handling yields in C',
    'Continuation functions and yielding C calls',
    { anchor: '4.5' },
    { anchor: '4.6' }
  ),
  manual(
    '03-c-api/07-functions-and-types-a-c.md',
    'C API functions and types: absindex–compare',
    'Alphabetical C API reference from lua_absindex through lua_compare',
    { anchor: '4.6' },
    { anchor: 'lua_concat' }
  ),
  manual(
    '03-c-api/08-functions-and-types-concat-gc.md',
    'C API functions and types: concat–gc',
    'Alphabetical C API reference from lua_concat through lua_gc',
    { anchor: 'lua_concat' },
    { anchor: 'lua_getallocf' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/09-functions-and-types-get.md',
    'C API functions and types: getallocf–getiuservalue',
    'Alphabetical C API reference for get operations',
    { anchor: 'lua_getallocf' },
    { anchor: 'lua_insert' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/10-functions-and-types-i-l.md',
    'C API functions and types: insert–load',
    'Alphabetical C API reference from lua_insert through lua_load',
    { anchor: 'lua_insert' },
    { anchor: 'lua_newstate' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/11-functions-and-types-n-pcall.md',
    'C API functions and types: newstate–pcallk',
    'Alphabetical C API reference from lua_newstate through lua_pcallk',
    { anchor: 'lua_newstate' },
    { anchor: 'lua_pop' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/12-functions-and-types-pop-push.md',
    'C API functions and types: pop–pushvfstring',
    'Alphabetical C API reference for stack push operations',
    { anchor: 'lua_pop' },
    { anchor: 'lua_rawequal' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/13-functions-and-types-raw-resume.md',
    'C API functions and types: rawequal–rotate',
    'Alphabetical C API reference for raw access through rotation',
    { anchor: 'lua_rawequal' },
    { anchor: 'lua_setallocf' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/14-functions-and-types-set-status.md',
    'C API functions and types: setallocf–stringtonumber',
    'Alphabetical C API reference for setters and status operations',
    { anchor: 'lua_setallocf' },
    { anchor: 'lua_toboolean' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/15-functions-and-types-to-type.md',
    'C API functions and types: toboolean–typename',
    'Alphabetical C API reference for conversions and type inspection',
    { anchor: 'lua_toboolean' },
    { anchor: 'lua_Unsigned' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/16-functions-and-types-u-y.md',
    'C API functions and types: Unsigned–yieldk',
    'Alphabetical C API reference from lua_Unsigned through lua_yieldk',
    { anchor: 'lua_Unsigned' },
    { anchor: '4.7' },
    { syntheticHeading: true }
  ),
  manual(
    '03-c-api/17-debug-interface.md',
    'The debug interface',
    'Activation records, hooks and debug API functions',
    { anchor: '4.7' },
    { anchor: '5' }
  ),

  manual(
    '04-auxiliary-library/01-overview.md',
    'Auxiliary library overview',
    'Conventions and facilities in the Lua auxiliary library',
    { anchor: '5' },
    { anchor: '5.1' }
  ),
  manual(
    '04-auxiliary-library/02-functions-and-types-add-buffer.md',
    'Auxiliary functions and types: addchar–buffsub',
    'Buffer-oriented auxiliary API reference',
    { anchor: '5.1' },
    { anchor: 'luaL_callmeta' }
  ),
  manual(
    '04-auxiliary-library/03-functions-and-types-call-check.md',
    'Auxiliary functions and types: callmeta–checkversion',
    'Argument checking and metatable auxiliary API reference',
    { anchor: 'luaL_callmeta' },
    { anchor: 'luaL_dofile' },
    { syntheticHeading: true }
  ),
  manual(
    '04-auxiliary-library/04-functions-and-types-do-load.md',
    'Auxiliary functions and types: dofile–loadstring',
    'Execution, result and loading auxiliary API reference',
    { anchor: 'luaL_dofile' },
    { anchor: 'luaL_makeseed' },
    { syntheticHeading: true }
  ),
  manual(
    '04-auxiliary-library/05-functions-and-types-make-push.md',
    'Auxiliary functions and types: makeseed–pushresultsize',
    'State, option and result auxiliary API reference',
    { anchor: 'luaL_makeseed' },
    { anchor: 'luaL_ref' },
    { syntheticHeading: true }
  ),
  manual(
    '04-auxiliary-library/06-functions-and-types-ref-where.md',
    'Auxiliary functions and types: ref–where',
    'Reference, registration, stream and diagnostic auxiliary API reference',
    { anchor: 'luaL_ref' },
    { anchor: '6' },
    { syntheticHeading: true }
  ),

  manual(
    '05-standard-library/01-overview.md',
    'Standard libraries overview',
    'Lua standard libraries and loading conventions',
    { anchor: '6' },
    { anchor: '6.1' }
  ),
  manual(
    '05-standard-library/02-loading-libraries-in-c.md',
    'Loading libraries in C code',
    'Open functions and selective standard-library loading',
    { anchor: '6.1' },
    { anchor: '6.2' }
  ),
  manual(
    '05-standard-library/03-basic-functions.md',
    'Basic functions',
    'Lua basic library reference',
    { anchor: '6.2' },
    { anchor: '6.3' }
  ),
  manual(
    '05-standard-library/04-coroutine-manipulation.md',
    'Coroutine manipulation',
    'Coroutine library reference',
    { anchor: '6.3' },
    { anchor: '6.4' }
  ),
  manual(
    '05-standard-library/05-modules.md',
    'Modules',
    'Package and module loading reference',
    { anchor: '6.4' },
    { anchor: '6.5' }
  ),
  manual(
    '05-standard-library/06-string-manipulation.md',
    'String manipulation',
    'String library and pattern reference',
    { anchor: '6.5' },
    { anchor: '6.6' }
  ),
  manual(
    '05-standard-library/07-utf8-support.md',
    'UTF-8 support',
    'UTF-8 library reference',
    { anchor: '6.6' },
    { anchor: '6.7' }
  ),
  manual(
    '05-standard-library/08-table-manipulation.md',
    'Table manipulation',
    'Table library reference',
    { anchor: '6.7' },
    { anchor: '6.8' }
  ),
  manual(
    '05-standard-library/09-mathematical-functions.md',
    'Mathematical functions',
    'Mathematics library reference',
    { anchor: '6.8' },
    { anchor: '6.9' }
  ),
  manual(
    '05-standard-library/10-input-and-output.md',
    'Input and output facilities',
    'File handles and I/O library reference',
    { anchor: '6.9' },
    { anchor: '6.10' }
  ),
  manual(
    '05-standard-library/11-operating-system.md',
    'Operating system facilities',
    'Operating-system library reference',
    { anchor: '6.10' },
    { anchor: '6.11' }
  ),
  manual(
    '05-standard-library/12-debug-library.md',
    'The debug library',
    'Lua debug library reference',
    { anchor: '6.11' },
    { anchor: '7' }
  ),

  manual(
    '06-tools/01-lua-standalone.md',
    'Lua standalone',
    'Standalone Lua interpreter behavior and command-line options',
    { anchor: '7' },
    { anchor: '8' }
  ),
  manual(
    '07-migration-and-known-issues/02-incompatibilities.md',
    'Incompatibilities with Lua 5.4',
    'Language, library and API incompatibilities with the previous version',
    { anchor: '8' },
    { anchor: '9' }
  ),
  manual(
    '02-language/11-complete-syntax.md',
    'Complete syntax of Lua',
    'Complete Lua 5.5 grammar',
    { anchor: '9' },
    null
  ),

  {
    source: 'lua.1',
    output: '06-tools/02-lua-command.md',
    title: 'lua command',
    description: 'Command-line reference for the standalone Lua interpreter',
    kind: 'man',
  },
  {
    source: 'luac.1',
    output: '06-tools/03-luac-command.md',
    title: 'luac command',
    description: 'Command-line reference for the Lua compiler',
    kind: 'man',
  },
  {
    source: 'official-bugs.html',
    output: '07-migration-and-known-issues/03-known-issues.md',
    title: 'Known issues in Lua 5.5.1',
    description: 'Officially reported bugs for Lua 5.5.1 as of acquisition',
    start: { anchor: '5.5.1' },
    end: { anchor: '5.5.0' },
    kind: 'bugs',
  },
];
