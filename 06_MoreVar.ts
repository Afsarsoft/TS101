//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 06_MoreVar.ts --target ESNEXT --watch

export { };

let myNumber = 0;

myNumber = 5;
myNumber = myNumber + 1;
console.log(`myNumber = ${myNumber}`); //myNumber = 6
//Or
myNumber = 5;
myNumber++;
console.log(`myNumber = ${myNumber}`); //myNumber = 6

myNumber = 5;
myNumber = myNumber - 1;
console.log(`myNumber = ${myNumber}`); //myNumber = 4
//Or
myNumber = 5;
myNumber--;
console.log(`myNumber = ${myNumber}`); //myNumber = 4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let remainder = 0;
remainder = 11 % 3;
console.log(`remainder = ${remainder}`); //remainder = 2

let someNumber = 0;
someNumber = 3;
someNumber = someNumber + 3;
console.log(`SomeNumber = ${someNumber}`); //SomeNumber = 6
//Or
someNumber = 3;
someNumber += 3;
console.log(`SomeNumber = ${someNumber}`); //SomeNumber = 6

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// finding out length
let fNameLength = 0;
let firstLetter = '';
let thirdLetter = '';
let lastLetter = '';
let fName = 'Surush';

fNameLength = fName.length;
console.log(`Name length of ${fName} = ${fNameLength}`);
// Name length of Surush = 6

firstLetter = fName[0];
console.log(`first letter of ${fName} = ${firstLetter}`);
// first letter of Surush = S
thirdLetter = fName[2];
console.log(`Third letter of ${fName} = ${thirdLetter}`);
// Third letter of Surush = r

lastLetter = fName[fName.length - 1];
console.log(`Last letter of ${fName} = ${lastLetter}`);
// Last letter of Surush = h