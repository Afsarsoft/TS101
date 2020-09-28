//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 10_ReadOnlyArray.ts --target ESNEXT --watch

export { };

const readArray1: readonly number[] = [1, 2, 3];
const readArray2: readonly number[] = readArray1.concat(4)

console.log(`readArray1 = ${readArray1}`);
// readArray1 = 1,2,3
console.log(`readArray2 = ${readArray2}`);
// readArray2 = 1,2,3,4

const iNumber = readArray1[2] // no issues
console.log(`iNumber = ${iNumber}`); // iNumber = 3

readArray1[2] = 5 // Error, readonly error
readArray2.push(6) // Error, readonly error