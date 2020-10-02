//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 37_GenericsP1.ts --target ESNEXT --watch

export { };

const getValue1 = (value: number) => value;
// const getValue1 = (value: number): number => value;

const num1 = getValue1(5);
console.log(num1);  // 5

// Cannot do this. Will get error
// const message1 = getValue1('Hello');

// Using generics
function getValue2<T>(value: T): T {
  return value;
}

const num2 = getValue2(5);
console.log(num2);  // 5

// Can do this Now. No issues ...
const message2 = getValue2('Hello');
console.log(message2);  //Hello

// Using generics, arrow function 
const getValue3 = <T>(value: T) => value;
// const getValue3 = <T>(value: T): T => value;

const num3 = getValue3(5);
console.log(num3);  // 5

// Can do this Now. No issues ...
const message3 = getValue2('Hello');
console.log(message3);  //Hello

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Getting the last element of array
const last1 = (iArray: number[]) => iArray[iArray.length - 1];
// const last1 = (iArray: number[]): number => iArray[iArray.length - 1];

const lNum1: number = last1([1, 2, 3]);
console.log(lNum1); // 3

// Will get error
// const lChar1: string = last1(['a', 'b', 'c'])

// Using generic
const last2 = <T>(iArray: T[]): T => iArray[iArray.length - 1];

const lNum2: number = last2([1, 2, 3]);
console.log(lNum2); // 3

// can do this now. No issues ...
const lChar2: string = last2(['a', 'b', 'c']);
console.log(lChar2); // c

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const doFullName = <T1, T2>(firstName: T1, lastName: T2): string =>
  `${firstName} & ${lastName}`;

console.log(doFullName('steve', 'brown')); //steve & brown
console.log(doFullName(5, 'brown')); //5 & brown
console.log(doFullName(5, 6)); //5 & 6
console.log(doFullName(null, 'hello')); //null & hello

