#define XXH_INLINE_ALL
#include "xxhash.h"
#include <stdio.h>
int main(void) {
    static const size_t lengths[] = {0,1,3,4,8,9,16,17,31,32,63,64,127,128,129,239,240,241,255,256,1024,4096};
    unsigned char input[4096];
    size_t p,i,j,cases=0;
    for(p=0;p<3;p++) {
        for(i=0;i<sizeof(input);i++) input[i]=(unsigned char)(p==0 ? 0 : p==1 ? i : i*37+11);
        for(j=0;j<sizeof(lengths)/sizeof(lengths[0]);j++) {
            XXH128_hash_t a=XXH3_128bits(input,lengths[j]);
            XXH128_hash_t b=XXH3_128bits_withSeed(input,lengths[j],0);
            if(a.low64!=b.low64 || a.high64!=b.high64) {
                fprintf(stderr,"mismatch pattern=%zu length=%zu\n",p,lengths[j]);
                return 1;
            }
            cases++;
        }
    }
    printf("seed-zero 128-bit equivalence: %zu cases passed\n",cases);
    return 0;
}
