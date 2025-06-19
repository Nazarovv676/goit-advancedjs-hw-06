/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union;
let literal;

// Union type - може приймати рядок або число
let stringOrNumber: string | number;

// Literal type - може приймати тільки 'enable' або 'disable'
let enableOrDisable: 'enable' | 'disable';