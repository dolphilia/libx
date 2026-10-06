---
title: "Configuring the VM"
licenseSource: wren-0-4-0
toc:
  maxLevel: 6
---

<p>When you create a Wren VM, you tweak it by passing in a pointer to a
WrenConfiguration structure. Since Wren has no global state, you can configure
each VM differently if your application happens to run multiple.</p>
<p>The struct looks like:</p>
<pre class="snippet" data-lang="c">
typedef struct
{
  WrenReallocateFn reallocateFn;
  WrenLoadModuleFn loadModuleFn;
  WrenBindForeignMethodFn bindForeignMethodFn;
  WrenBindForeignClassFn bindForeignClassFn;
  WrenWriteFn writeFn;
  WrenErrorFn errorFn;
  size_t initialHeapSize;
  size_t minHeapSize;
  int heapGrowthPercent;
} WrenConfiguration;
</pre>

<p>Most fields have useful defaults, which you can (and should) initialize by
calling:</p>
<pre class="snippet" data-lang="c">
wrenInitConfiguration(&configuration);
</pre>

<p>Calling this ensures that your VM doesn&rsquo;t get uninitialized configuration when
new fields are added to WrenConfiguration. Here is what each field does, roughly
categorized:</p>
<h2>Binding <a href="#binding" name="binding" class="header-anchor">#</a></h2>
<p>The VM is isolated from the outside world. These callbacks let the VM request
access to imported code and foreign functionality.</p>
<h3><strong><code>loadModuleFn</code></strong> <a href="#loadmodulefn" name="loadmodulefn" class="header-anchor">#</a></h3>
<p>This is the callback Wren uses to load an imported module. The VM itself does
not know how to talk to the file system, so when an <code>import</code> statement is
executed, it relies on the host application to locate and read the source code
for a module.</p>
<p>The signature of this function is:</p>
<pre class="snippet" data-lang="c">
WrenLoadModuleResult loadModule(WrenVM* vm, const char* name)
</pre>

<p>When a module is imported, Wren calls this and passes in the module&rsquo;s name. The
host should return the source code for that module in a <code>WrenLoadModuleResult</code> struct.</p>
<pre class="snippet" data-lang="c">
WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {
  WrenLoadModuleResult result = {0};
    result.source = getSourceForModule(name);
  return result;
}
</pre>

<p>The module loader is only be called once for any given module name. Wren caches
the result internally so subsequent imports of the same module use the
previously loaded code.</p>
<p>If your host application isn&rsquo;t able to load a module with some name, it should
make sure the <code>source</code> value is <code>NULL</code> when returned. Wren will then report that as a runtime error.</p>
<p>If you don&rsquo;t use any <code>import</code> statements, you can leave the <code>loadModuleFn</code> field in
the configuration set to <code>NULL</code> (the default).</p>
<p>Additionally, the <code>WrenLoadModuleResult</code> allows us to add a callback for when Wren is 
done with the <code>source</code>, so we can free the memory if needed.</p>
<pre class="snippet" data-lang="c">

static void loadModuleComplete(WrenVM* vm, 
                               const char* module,
                               WrenLoadModuleResult result) 
{
  if(result.source) {
    //for example, if we used malloc to allocate
    //our source string, we use free to release it.
    free((void*)result.source);
  }
}

WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {
  WrenLoadModuleResult result = {0};
    result.onComplete = loadModuleComplete;
    result.source = getSourceForModule(name);
  return result;
}
</pre>

<h3><strong><code>bindForeignMethodFn</code></strong> <a href="#bindforeignmethodfn" name="bindforeignmethodfn" class="header-anchor">#</a></h3>
<p>The callback Wren uses to find a foreign method and bind it to a class. See
<a href="/docs/wren-trial/v0-4-0/en/docs/embedding/calling-c-from-wren/">this page</a> for details. If your application defines no foreign
methods, you can leave this <code>NULL</code>.</p>
<h3><strong><code>bindForeignClassFn</code></strong> <a href="#bindforeignclassfn" name="bindforeignclassfn" class="header-anchor">#</a></h3>
<p>The callback Wren uses to find a foreign class and get its foreign methods. See
<a href="/docs/wren-trial/v0-4-0/en/docs/embedding/storing-c-data/">this page</a> for details. If your application defines no foreign
classes, you can leave this <code>NULL</code>.</p>
<h2>Diagnostics <a href="#diagnostics" name="diagnostics" class="header-anchor">#</a></h2>
<p>These let you wire up some minimal output so you can tell if your code is doing
what you expect.</p>
<h3><strong><code>writeFn</code></strong> <a href="#writefn" name="writefn" class="header-anchor">#</a></h3>
<p>This is the callback Wren uses to output text when <code>System.print()</code> or the other
related functions are called. This is the minimal connection the VM has with the
outside world and lets you do rudimentary &ldquo;printf debugging&rdquo;. Its signature is:</p>
<pre class="snippet" data-lang="c">
void write(WrenVM* vm, const char* text)
</pre>

<p>Wren does <em>not</em> have a default implementation for this. It&rsquo;s up to you to wire
it up to <code>printf()</code> or some other way to show the text. If you leave it <code>NULL</code>,
calls to <code>System.print()</code> and others silently do nothing.</p>
<h3><strong><code>errorFn</code></strong> <a href="#errorfn" name="errorfn" class="header-anchor">#</a></h3>
<p>Wren uses this callback to report compile time and runtime errors. Its signature
is:</p>
<pre class="snippet" data-lang="c">
void error(
      WrenVM* vm, 
      WrenErrorType type,
      const char* module,
      int line,
      const char* message)
</pre>

<p>The <code>type</code> parameter is one of:</p>
<pre class="snippet" data-lang="c">
typedef enum
{
  // A syntax or resolution error detected at compile time.
  WREN_ERROR_COMPILE,

  // The error message for a runtime error.
  WREN_ERROR_RUNTIME,

  // One entry of a runtime error's stack trace.
  WREN_ERROR_STACK_TRACE
} WrenErrorType;
</pre>

<p>When a compile error occurs, <code>errorFn</code> is called once with type
<code>WREN_ERROR_COMPILE</code>, the name of the module and line where the error occurs,
and the error message.</p>
<p>Runtime errors include stack traces. To handle this, Wren first calls <code>errorFn</code>
with <code>WREN_ERROR_RUNTIME</code>, no module or line, and the runtime error&rsquo;s message.
After that, it calls <code>errorFn</code> again using type <code>WREN_ERROR_STACK_TRACE</code>, once
for each line in the stack trace. Each of those calls has the module and line
where the method or function is defined and <code>message</code> is the name of the method
or function.</p>
<p>If you leave this <code>NULL</code>, Wren does not report any errors.</p>
<h2>Memory Management <a href="#memory-management" name="memory-management" class="header-anchor">#</a></h2>
<p>These fields control how the VM allocates and manages memory.</p>
<h3><strong><code>reallocateFn</code></strong> <a href="#reallocatefn" name="reallocatefn" class="header-anchor">#</a></h3>
<p>This lets you provide a custom memory allocation function. Its signature is:</p>
<pre class="snippet" data-lang="c">
void* reallocate(void* memory, size_t newSize, void* userData)
</pre>

<p>Wren uses this one function to allocate, grow, shrink, and deallocate memory.
When called, <code>memory</code> is the existing pointer to the block of memory if an
allocation is being changed or freed. If Wren is requesting new memory, then
<code>memory</code> is <code>NULL</code>.</p>
<p><code>newSize</code> is the number of bytes of memory being requested. If memory is being
freed, this is zero. Your callback should allocate the proper amount of memory
and return it.</p>
<p>If you don&rsquo;t provide a custom allocator, the VM uses a default one that relies
on <code>realloc</code> and <code>free</code>.</p>
<h3><strong><code>initialHeapSize</code></strong> <a href="#initialheapsize" name="initialheapsize" class="header-anchor">#</a></h3>
<p>This defines the total number of bytes of memory the VM will allocate before
triggering the first garbage collection. Setting this to a smaller number
reduces the amount of memory Wren will have allocated at one time, but causes it
to collect garbage more frequently.</p>
<p>If you set this to zero, Wren uses a default size of 10MB.</p>
<h3><strong><code>minHeapSize</code></strong> <a href="#minheapsize" name="minheapsize" class="header-anchor">#</a></h3>
<p>After a garbage collection occurs, the threshold for the <em>next</em> collection is
determined based on the number of bytes remaining in use. This allows Wren to
grow or shrink its memory usage automatically based on how much memory is
actually needed.</p>
<p>This can be used to ensure that the heap does not get <em>too</em> small, which can
in turn lead to a large number of collections afterwards as the heap grows
back to a usable size.</p>
<p>If zero, this defaults to 1MB.</p>
<h3><strong><code>heapGrowthPercent</code></strong> <a href="#heapgrowthpercent" name="heapgrowthpercent" class="header-anchor">#</a></h3>
<p>Wren tunes the rate of garbage collection based on how much memory is still in
use after a collection. This number controls that. It determines the amount of
additional memory Wren will use after a collection, as a percentage of the
current heap size.</p>
<p>For example, say that this is 50. After a garbage collection, there are 400
bytes of memory still in use. That means the next collection will be triggered
after a total of 600 bytes are allocated (including the 400 already in use.)</p>
<p>Setting this to a smaller number wastes less memory, but triggers more
frequent garbage collections.</p>
<p>If set to zero, the VM uses a default of 50.</p>
<p><a href="/docs/wren-trial/v0-4-0/en/docs/embedding/storing-c-data/">&larr; Storing C Data</a></p>
