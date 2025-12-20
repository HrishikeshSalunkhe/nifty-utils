[**nifty-utils v1.0.1**](../README.md)

***

[nifty-utils](../globals.md) / convertToString

# Function: convertToString()

> **convertToString**(`value`): `string`

Defined in: string/string-manipulate.ts:42

Converts a value to its string representation.

This function handles different types of input safely:
- Numbers and booleans are converted using `String()`.
- Arrays and plain objects are converted to a JSON string.
- `null` and `undefined` are converted to `"null"` and `"undefined"`.

## Parameters

### value

`unknown`

The value to convert to a string.

## Returns

`string`

A string representation of the input value.
