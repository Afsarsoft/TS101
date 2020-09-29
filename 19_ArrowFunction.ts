//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 19_ArrowFunction.ts --target ESNEXT --watch

export { };
// variable, parameter, return value, =>, code
const hello1 = () => console.log(`hello1, Hello World!`);
hello1(); //hello1, Hello World!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hello2 = () => 'hello2, Hello World!';
const result2 = hello2();
console.log(`${result2}`); //hello2, Hello World!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hello3 = (name: string) => console.log(`hello3, Hello ${name}!`);
hello3('Surush'); //hello3, Hello Surush!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hello4 = (name: string) => `hello4, Hello ${name}`;
let result4 = hello4('Surush');
console.log(`${result4}!`); //hello4, Hello Surush!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hello5 = (fName: string, lName: string) =>
  console.log(`hello5, Hello ${fName} ${lName}.`);
hello5('Surush', 'Cyrus'); //hello5, Hello Surush Cyrus.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hello6 = (fName: string, lName: string = "Cyrus") =>
  console.log(`hello6, Hello ${fName} ${lName}.`);
hello6('Surush', 'Cyrus'); //hello6, Hello Surush Cyrus.
hello6('Surush'); //hello6, Hello Surush Cyrus.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ES6
const hello7 = (fName: string, lName: string = "") =>
  console.log(`hello7, Hello ${fName} ${lName}.`);
hello7('Surush', 'Cyrus'); //hello7, Hello Surush Cyrus.
hello7('Surush'); //hello7, Hello Surush .

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Old, ES5
const hello8 = (fName: string, lName?: string | undefined) => {
  lName = lName || "";
  console.log(`hello8, Hello ${fName} ${lName}.`)
};
hello8('Surush', 'Cyrus'); //hello8, Hello Surush Cyrus.
hello8('Surush'); //hello8, Hello Surush .

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addTwoNumbers1 = (fNum: number, sNum: number) =>
  console.log(`Result of adding ${fNum} and ${sNum} is ${fNum + sNum}`);

addTwoNumbers1(5, 3); //Result of adding 5 and 3 is 8
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addTwoNumbers2 = (fNum: number, sNum: number) =>
  fNum + sNum;

const num1 = 5;
const num2 = 3;
const result = addTwoNumbers2(num1, num2);
console.log(`Result of adding ${num1} and ${num2} is ${result}`);
//Result of adding 5 and 3 is 8

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const combine = (
  input1: number | string,
  input2: number | string
): number | string => {
  let result: number | string;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = `${input1.toString()} ${input2.toString()}`;
  }

  return result;
}

const combineAges = combine(30, 26);
console.log(`combine 30 & 26 = ${combineAges}`); //56

const combineNames = combine('Surush', 'Cyrus');
console.log(`combine Surush & Cyrus = ${combineNames}`); //Surush Cyrus

const combineStuff = combine('Surush', 64);
console.log(`combine Surush & 64 = ${combineStuff}`); //Surush 64
