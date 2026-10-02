#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "utstack.h"

#define BUFLEN 20

typedef struct el {
    char bname[BUFLEN];
    struct el *next;
} el;

el *head = NULL; /* important- initialize to NULL! */

int main(int argc, char *argv[]) {
    el *elt, *tmp;

    char linebuf[sizeof el->bname];
    int count;
    FILE *file = fopen("test11.dat", "r");
    if (file == NULL) {
        perror("can't open: ");
        exit(-1);
    }

    while (fgets(linebuf, sizeof linebuf, file) != NULL) {
        el *name = malloc(sizeof *name);
        if (name == NULL) exit(-1);
        strcpy(name->bname, linebuf);
        STACK_PUSH(head, name);
    }
    fclose(file);

    STACK_COUNT(head, elt, count);
    printf("%d elements were read into the stack\n", count);

    /* now pop, print, and delete each element */
    while (!STACK_EMPTY(head)) {
        printf("%s\n", STACK_TOP(head)->bname);
        STACK_POP(head, elt);
        free(elt);
    }

    return 0;
}
