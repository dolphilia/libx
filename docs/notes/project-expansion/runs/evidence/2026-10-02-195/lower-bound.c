#include <assert.h>
#include <stdio.h>
#include "utlist.h"
typedef struct E {int v; struct E *next,*prev;} E;
static int cmp(E *a,E *b){return (a->v>b->v)-(a->v<b->v);}
int main(void){
 E ll[3]={{.v=1},{.v=3},{.v=5}},dl[3]={{.v=1},{.v=3},{.v=5}},cl[3]={{.v=1},{.v=3},{.v=5}},*lh=NULL,*dh=NULL,*ch=NULL,*out,like;
 for(int i=0;i<3;i++){LL_APPEND(lh,&ll[i]);DL_APPEND(dh,&dl[i]);CDL_APPEND(ch,&cl[i]);}
 like.v=4;
 LL_LOWER_BOUND(lh,out,&like,cmp);assert(out==&ll[1]);printf("LL like4=%d\n",out->v);
 DL_LOWER_BOUND(dh,out,&like,cmp);assert(out==&dl[1]);printf("DL like4=%d\n",out->v);
 CDL_LOWER_BOUND(ch,out,&like,cmp);assert(out==&cl[1]);printf("CDL like4=%d\n",out->v);
 like.v=3;
 LL_LOWER_BOUND(lh,out,&like,cmp);assert(out==&ll[0]);printf("LL like3=%d\n",out->v);
 DL_LOWER_BOUND(dh,out,&like,cmp);assert(out==&dl[0]);printf("DL like3=%d\n",out->v);
 CDL_LOWER_BOUND(ch,out,&like,cmp);assert(out==&cl[0]);printf("CDL like3=%d\n",out->v);
}
