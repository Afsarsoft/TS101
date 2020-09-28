//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 09_ArrayMore.ts --target ESNEXT --watch

export { };

let count1 = [1, 2, 3, 4];
let secondNumber = count1[1];
console.log(`second value of array element = ${secondNumber}`)
// second value of array element = 2

// Updating the 4th value of the Array
count1[3] = 45;
console.log(`The array = ${count1}`)
// The array = 1,2,3,45

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let names = ['Surush', 'Steve', 'Jeff', 'Bob'];

let thirdStr = names[2];
console.log(`third value of array element = ${thirdStr}`)
// third value of array element = Jeff

// Updating the 3th value of the Array
names[2] = 'Mary';
console.log(`The array = ${names}`);
// The array = Surush,Steve,Mary,Bob

// Add elements to an Array
names.push('Jack', 'Rob');
console.log(`The array = ${names}`);
// The array = Surush,Steve,Mary,Bob,Jack,Rob

// Remove the last element from am Array
names.pop()
console.log(`The array = ${names}`);
// The array = Surush,Steve,Mary,Bob,Jack

// Remove the first element from array
names.shift();
console.log(`The array = ${names}`);
// The array = Steve,Mary,Bob,Jack

// Adding an element to beginning of an Array
names.unshift('Rob');
console.log(`The array = ${names}`);
// The array = Rob,Steve,Mary,Bob,Jack