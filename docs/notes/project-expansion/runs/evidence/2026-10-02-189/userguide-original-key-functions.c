#include <stdbool.h>
struct Key {
    short s;
    /* 2 bytes of padding */
    float f;
};
/* do not compare the padding bytes; do not use memcmp on floats */
unsigned key_hash(struct Key *s) { return s + (unsigned)f; }
bool key_equal(struct Key *a, struct Key *b) { return a.s == b.s && a.f == b.f; }

#define HASH_FUNCTION(s,len,hashv) (hashv) = key_hash((struct Key *)s)
#define HASH_KEYCMP(a,b,len) (!key_equal((struct Key *)a, (struct Key *)b))
