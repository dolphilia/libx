---
title: "Mathematical functions"
description: "Mathematics library reference"
---

# 6.8 – <a id="6.8"></a>Mathematical Functions

This library provides basic mathematical functions. It provides all its functions and constants inside the table <a id="pdf-math"></a>`math`. Functions with the annotation "`integer/float`" give integer results for integer arguments and float results for non-integer arguments. The rounding functions [`math.ceil`](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#pdf-math.ceil), [`math.floor`](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#pdf-math.floor), and [`math.modf`](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#pdf-math.modf) return an integer when the result fits in the range of an integer, or a float otherwise.

---

## <a id="pdf-math.abs"></a>`math.abs (x)`

Returns the maximum value between `x` and `-x`. (integer/float)

---

## <a id="pdf-math.acos"></a>`math.acos (x)`

Returns the arc cosine of `x` (in radians).

---

## <a id="pdf-math.asin"></a>`math.asin (x)`

Returns the arc sine of `x` (in radians).

---

## <a id="pdf-math.atan"></a>`math.atan (y [, x])`

Returns the arc tangent of `y/x` (in radians), using the signs of both arguments to find the quadrant of the result. It also handles correctly the case of `x` being zero.

The default value for `x` is 1, so that the call `math.atan(y)` returns the arc tangent of `y`.

---

## <a id="pdf-math.ceil"></a>`math.ceil (x)`

Returns the smallest integral value greater than or equal to `x`.

---

## <a id="pdf-math.cos"></a>`math.cos (x)`

Returns the cosine of `x` (assumed to be in radians).

---

## <a id="pdf-math.deg"></a>`math.deg (x)`

Converts the angle `x` from radians to degrees.

---

## <a id="pdf-math.exp"></a>`math.exp (x)`

Returns the value *e<sup>x</sup>* (where `e` is the base of natural logarithms).

---

## <a id="pdf-math.floor"></a>`math.floor (x)`

Returns the largest integral value less than or equal to `x`.

---

## <a id="pdf-math.fmod"></a>`math.fmod (x, y)`

Returns the remainder of the division of `x` by `y` that rounds the quotient towards zero. (integer/float)

---

## <a id="pdf-math.frexp"></a>`math.frexp (x)`

Returns two numbers `m` and `e` such that *x = m2<sup>e</sup>*, where `e` is an integer. When `x` is zero, NaN, +inf, or -inf, `m` is equal to `x`; otherwise, the absolute value of `m` is in the range *[0.5, 1)*.

---

## <a id="pdf-math.huge"></a>`math.huge`

The float value `HUGE_VAL`, a value greater than any other numeric value.

---

## <a id="pdf-math.ldexp"></a>`math.ldexp (m, e)`

Returns *m2<sup>e</sup>*, where `e` is an integer.

---

## <a id="pdf-math.log"></a>`math.log (x [, base])`

Returns the logarithm of `x` in the given base. The default for `base` is *e* (so that the function returns the natural logarithm of `x`).

---

## <a id="pdf-math.max"></a>`math.max (x, ···)`

Returns the argument with the maximum value, according to the Lua operator `<`.

---

## <a id="pdf-math.maxinteger"></a>`math.maxinteger`

An integer with the maximum value for an integer.

---

## <a id="pdf-math.min"></a>`math.min (x, ···)`

Returns the argument with the minimum value, according to the Lua operator `<`.

---

## <a id="pdf-math.mininteger"></a>`math.mininteger`

An integer with the minimum value for an integer.

---

## <a id="pdf-math.modf"></a>`math.modf (x)`

Returns the integral part of `x` and the fractional part of `x`. Its second result is always a float.

---

## <a id="pdf-math.pi"></a>`math.pi`

The value of *π*.

---

## <a id="pdf-math.rad"></a>`math.rad (x)`

Converts the angle `x` from degrees to radians.

---

## <a id="pdf-math.random"></a>`math.random ([m [, n]])`

When called without arguments, returns a pseudo-random float with uniform distribution in the range *[0, 1)*. When called with two integers `m` and `n`, `math.random` returns a pseudo-random integer with uniform distribution in the range *[m, n]*. The call `math.random(n)`, for a positive `n`, is equivalent to `math.random(1,n)`. The call `math.random(0)` produces an integer with all bits (pseudo)random.

This function uses the `xoshiro256**` algorithm to produce pseudo-random 64-bit integers, which are the results of calls with argument 0. Other results (ranges and floats) are unbiased extracted from these integers.

Lua initializes its pseudo-random generator with the equivalent of a call to [`math.randomseed`](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#pdf-math.randomseed) with no arguments, so that `math.random` should generate different sequences of results each time the program runs.

---

## <a id="pdf-math.randomseed"></a>`math.randomseed ([x [, y]])`

When called with at least one argument, the integer parameters `x` and `y` are joined into a *seed* that is used to reinitialize the pseudo-random generator; equal seeds produce equal sequences of numbers. The default for `y` is zero.

When called with no arguments, Lua generates a seed with a weak attempt for randomness.

This function returns the two seed components that were effectively used, so that setting them again repeats the sequence.

To ensure a required level of randomness to the initial state (or contrarily, to have a deterministic sequence, for instance when debugging a program), you should call [`math.randomseed`](/docs/lua/v5-5-1/en/05-standard-library/09-mathematical-functions/#pdf-math.randomseed) with explicit arguments.

---

## <a id="pdf-math.sin"></a>`math.sin (x)`

Returns the sine of `x` (assumed to be in radians).

---

## <a id="pdf-math.sqrt"></a>`math.sqrt (x)`

Returns the square root of `x`. (You can also use the expression `x^0.5` to compute this value.)

---

## <a id="pdf-math.tan"></a>`math.tan (x)`

Returns the tangent of `x` (assumed to be in radians).

---

## <a id="pdf-math.tointeger"></a>`math.tointeger (x)`

If the value `x` is convertible to an integer, returns that integer. Otherwise, returns **fail**.

---

## <a id="pdf-math.type"></a>`math.type (x)`

Returns "`integer`" if `x` is an integer, "`float`" if it is a float, or **fail** if `x` is not a number.

---

## <a id="pdf-math.ult"></a>`math.ult (m, n)`

Returns a boolean, **true** if and only if integer `m` is below integer `n` when they are compared as unsigned integers.
