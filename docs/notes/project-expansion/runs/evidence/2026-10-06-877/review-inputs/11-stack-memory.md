# Stack Memory Usage
Most functions in the library use fixed-size stack memory. This includes functions for JSON reading and writing, as well as JSON Pointer handling.

However, a few functions use recursion and may cause a stack overflow if the nesting level is too deep. These functions are marked with the following warning in the header file: 
> @warning 
> This function is recursive and may cause a stack overflow 
> if the object level is too deep.



