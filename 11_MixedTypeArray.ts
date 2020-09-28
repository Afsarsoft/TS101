//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 11_MixedTypeArray.ts --target ESNEXT --watch

export { };

let myArray1 = ['Surush', 10, 'Mary', 12, 23, 34, 'Hello'];
let myArray2 = ['Surush', 90, 'Bob', false, 'Jeff', true];

let someValue = myArray2[2];
console.log(`Value of array element someNumber = ${someValue}`);
//Value of array element someNumber = Bob