//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 05_SwitchVarValues.ts --target ESNEXT --watch

export { };

let v1 = 'First string';
let v2 = 'Second string';
let temp = '';

console.log(`value for v1 = ${v1}`); //value for v1 = First string
console.log(`value for v2 = ${v2}`); //value for v2 = Second string

temp = v1;
v1 = v2;
v2 = temp;

console.log(`value for v1 = ${v1}`); //value for v1 = Second string
console.log(`value for v2 = ${v2}`); //value for v2 = First string
