/**

@example 
```ts
isNull(undefined) // true
isNull(null) // true
isNull(1) // false
```

*/

function isNull(v: any) {
  return v === undefined || v === null ? true : false;
}

export default isNull;
