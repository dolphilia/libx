By default, wren does not make any variables, classes, or methods from other modules private. 

For example, say we have a module with some secret data in module `"./private"`:
```js
class SecretClass {
    static runSecret() { System.print("Hello from SecretClass") }
}

var private = 420
// some people often use an underscore to show that a variable or method is not meant to be used from outside this module.
var private_ = 69
```
we can simple just import it...
```js
import "./private" for SecretClass, private, private_

SecretClass.runSecret()
System.print("All your data are belong to us! (%(private), %(private_))")
```
...and all our private classes and variables are printed to the console from any random module!
```
Hello from SecretClass
All your data are belong to us! (420, 69)
```
If we want to prevent the user from importing classes that they shouldn't, we can try to hide them in a private module using `resolveModuleFn` in our `WrenConfiguration`.

`resolveModuleFn` is a pointer to a function that is called when wren attempts to import a module. It takes 2 string arguments, `importer` and `name`. `importer` is the name of the module that is currently importing another module while `name` is the name of that module being imported. We can simply check that `name` is meant to be private and, if it is, we can check whether `importer` is supposed to have access to it. For example:
```C
#include <stdbool.h> // bool, false

// test that [string] begines with [prefix].
bool startsWith(const char *prefix, const char *string) {
    int i = 0;
    while (prefix[i] != '\0' && string[i] != '\0') {
        if (prefix[i] != string[i]) {
            return false;
        }
        i++;
    }
    // if [prefix[i]] does not equal '\0', string is smaller than [prefix]
    return prefix[i] == '\0';
}

const char* resolveModuleFn(WrenVM *vm, const char *importer, const char *name) {
    // If we import a private module...
    if (startsWith("private:", name)) {
        // ...Check that the module importing the private module can access it.
        if (startsWith("system:", importer)) {
            return name;
        }
        // If not, we can simply return NULL to signify an error
        else return NULL;
    }
    // And if we aren't trying to import any private modules, we can simply return [name] so we don't change anythin.
    return name;
}
```
In this example, we check that `name` begins with the prefix `"private:"`. If it does, we want to make sure that the importer has access to those modules so we check if `importer` begins with `"system:"` since built in system modules ususally have private access to more delicate methods and functions.

Now if we have a module called `"private:module"`:
```js
class SecretClass {
     static runSecret() { System.print("Hello from SecretClass") }
}

var private = 420
var private_ = 69
```
...and we try to import it using module `"main"`:
```js
import "private:module" for SecretClass, private, private_

SecretClass.runSecret()
System.print("All your data are belong to us! (%(private), %(private_))")
```
...we get a nice error:
```
Runtime Error: Could not resolve module 'private:module' imported from 'main'.
['main' line 1] Stack Trace: (script)
```
But if we create a new module called `"system:module"`:
```js
class NonSecretClass {
    static runNonSecret() {
        System.print("'system:module' has access to 'private:module' now")
        // Be careful to import your private modules inside code blocks (the curly braces) or else they will be accessible outside the module.
        import "private:module" for SecretClass, private, private_
        SecretClass.runSecret()
        System.print("'system:module' can now print private data like (%(private)) and (%(private_))")
    }
}
```
...and change the `"main"` module to use it instead:
```js
import "system:module" for NonSecretClass

NonSecretClass.runNonSecret()
```
...our `"main"` module can access the public global values provided by `"system:module"` without having direct access to the private values in `"private:module"`:
```
'system:module' has access to 'private:module' now
Hello from SecretClass
'system:module' can now print private data like (420) and (69)
```

## complete code
Read the `// comments` for explanations on how things work
```C
#include <stdbool.h> // bool, false
#include <stdio.h> // fprintf, printf, 
#include <string.h> // strcmp
#include <wren.h> // WrenConfiguration, WrenLoadModuleResult, WrenVM, WREN_ERROR_COMPILE, WREN_ERROR_RUNTIME,WREN_ERROR_STACK_TRACE, WREN_RESULT_COMPILE_ERROR, WREN_RESULT_RUNTIME_ERROR, WREN_RESULT_SUCCESS

// test that [string] begines with [prefix].
bool startsWith(const char *prefix, const char *string) {
    int i = 0;
    while (prefix[i] != '\0' && string[i] != '\0') {
        if (prefix[i] != string[i]) {
            return false;
        }
        i++;
    }
    // if [prefix[i]] does not equal '\0', string is smaller than [prefix]
    return prefix[i] == '\0';
}

// [resolveModuleFn] is used by wren to decide how import names look before passing them to [loadModuleFn].
const char* resolveModuleFn(WrenVM *vm, const char *importer, const char *name) {
    // If we import a private module...
    if (startsWith("private:", name)) {
        // ...Check that the module importing the private module can access it.
        if (startsWith("system:", importer)) {
            return name;
        }
        // If not, we can simply return NULL to signify an error
        else return NULL;
    }
    // And if we aren't trying to import any private modules, we can simply return [name] so we don't change anythin.
    return name;
}

// [loadModuleFn] is the function that wren calls whenever it is importing a module. It takes a module name and returns a struct containing source code.
WrenLoadModuleResult loadModuleFn(WrenVM* vm, const char* name) {
    WrenLoadModuleResult results;

    results.onComplete = NULL;
    results.source = NULL;
    results.userData = NULL;

    if (strcmp(name, "system:module") == 0) {
        results.source =
            "class NonSecretClass {\n"
            "    static runNonSecret() {\n"
            "        System.print(\"'system:module' has access to 'private:module' now\")\n"
            "        // Be careful to import your private modules inside code blocks (the curly braces) or else they will be accessible outside the module\n"
            "        import \"private:module\" for SecretClass, private, private_\n"
            "        SecretClass.runSecret()\n"
            "        System.print(\"'system:module' can now print private data like (%(private)) and (%(private_))\")\n"
            "    }\n"
            "}\n";
    }
    if (strcmp(name, "private:module") == 0) {
        results.source =
            "class SecretClass {\n"
            "     static runSecret() { System.print(\"Hello from SecretClass\") }\n"
            "}\n"
            "\n"
            "var private = 420\n"
            "var private_ = 69";
    }
    
    return results;
}

// [writeFn] is a function called by wren whenever [System.print] or similar functions are called. It can be used to print text to the console.
void writeFn(WrenVM* vm, const char* text) {
    printf("%s", text);
}

// [errorFn] is a function called by wren whenever it encounters an error. It can be used to print helpful messages to the console so the user knows why their program didn't work.
void errorFn(WrenVM* vm, WrenErrorType type, const char* module, int line, const char* message) {
    switch (type) {
        case WREN_ERROR_COMPILE:
            fprintf(stderr, "['%s' line %d] Compiler Error: %s\n", module, line, message);
            break;
          case WREN_ERROR_RUNTIME:
            fprintf(stderr, "Runtime Error: %s\n", message);
            break;
          case WREN_ERROR_STACK_TRACE:
            fprintf(stderr, "['%s' line %d] Stack Trace: %s\n", module, line, message);
            break;
    }
}

// [printResults] is a small helper function I used to print whether the VM ran the code without any errors.
void printResults(WrenInterpretResult results) {
    switch (results) {
        case WREN_RESULT_SUCCESS:
            printf("VM ran successfully\n");
            break;
        case WREN_RESULT_COMPILE_ERROR:
            printf("VM encountered an error during compilation\n");
            break;
        case WREN_RESULT_RUNTIME_ERROR:
            printf("VM encountered an error during runtime\n");
            break;
    }
}

// The entry point to this example is [main].
int main(int argc, char const *argv[]) {
    WrenConfiguration cfg;
    wrenInitConfiguration(&cfg);

    // Set the wren configuration before creating the VM.
    cfg.resolveModuleFn = resolveModuleFn;
    cfg.loadModuleFn = loadModuleFn;
    cfg.writeFn = writeFn;
    cfg.errorFn = errorFn;
    WrenVM* vm = wrenNewVM(&cfg);

    WrenInterpretResult results;

    // Trying to access a private module.
    results = wrenInterpret(vm, "main", 
        "import \"private:module\" for SecretClass, private, private_\n"
        "\n"
        "SecretClass.runSecret()\n"
        "System.print(\"All your data are belong to us! (%(private), %(private_))\")"
    );
    printResults(results);

    // Accessing a public module that accessess a private module.
    results = wrenInterpret(vm, "main", 
        "import \"system:module\" for NonSecretClass\n"
        "\n"
        "NonSecretClass.runNonSecret()\n"
    );
    printResults(results);

    // Always free the VM after you are done with it.
    wrenFreeVM(vm);
    return 0;
}
```