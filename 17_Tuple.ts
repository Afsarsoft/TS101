//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 17_Tuple.ts --target ESNEXT --watch

export { };

const a = [1];
console.log(a[0]); //1

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const b = ['Surush', 'Cyrus', 18];
console.log(b[0]); //Surush
console.log(b[1]); //Cyrus
console.log(b[2]); //18

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// changing it
const c = ['Surush', 'Cyrus', 18];
c[2] = 45;
console.log(c[0]); //Surush
console.log(c[1]); //Cyrus
console.log(c[2]); //45

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// make it read only
const d: readonly [string, string, number] = ['Surush', 'Cyrus', 18];
// Will get error for following:
// d[2] = 45;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// An array of tuples
const trainFares = [[3.75], [8.25, 7.70], [10.50]];

console.log(trainFares[0]); //[3.75]
console.log(trainFares[1]); //[8.25, 7.70]
console.log(trainFares[2]); //[10.50]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Support for rest elements, need to have at least one element
const friends = ['Sara', 'Mary', 'Sam'];
console.log(friends[0]); //Sara
console.log(friends[2]); //Sam

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A heterogeneous list
const list = [1, false, 'a', 'b'];
console.log(list[1]); // false
console.log(list[3]); // b