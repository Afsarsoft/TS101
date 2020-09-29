//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 20_ArrowFunction.ts --target ESNEXT --watch

export { };

const sentence = (
  noun: string,
  adj: string,
  verb: string,
  adverb: string) =>
  `The ${adj} ${noun} ${verb} to the store ${adverb}.`;

const message1 = sentence('dog', 'big', 'ran', 'quickly');
console.log(`sentence, ${message1}`); //The big dog ran to the store quickly.

const message2 = sentence('bike', 'slow', 'flew', 'slowly');
console.log(`sentence, ${message2}`); //The slow bike flew to the store slowly.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const nextInLine = (
  myArray: (number | string)[],
  myItem: number | string) => {

  // Add the item to the end of list
  myArray.push(myItem);

  // Remove the first item and return it
  const result = myArray.shift();

  return result;
};

let iArray1 = [1, 2, 3, 4, 5];
// Changing array to string to be able print it out to screen
console.log(`Before: ${JSON.stringify(iArray1)}`); //Before: [1,2,3,4,5]
console.log(`nextInLine, ${nextInLine(iArray1, 6)}`); // 1
console.log(`After: ${JSON.stringify(iArray1)}`); //After: [2,3,4,5,6]

let iArray2 = ['Surush', 2, 'Sam', 'Mary', 5];
console.log(`Before: ${JSON.stringify(iArray2)}`);
// Before: ["Surush",2,"Sam","Mary",5]
console.log(`nextInLine, ${nextInLine(iArray2, 'Peter')}`);
// Surush
console.log(`After: ${JSON.stringify(iArray2)}`);
// After: [2,"Sam","Mary",5,"Peter"]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// condition ? statementIfTrue : statementIfFalse;
const trueOrFalse = (isItTrue: boolean) =>
  (isItTrue) ? 'It is true.' : 'It is false.';

console.log(`trueOrFalse, ${trueOrFalse(false)}`);//It is false.
console.log(`trueOrFalse, ${trueOrFalse(true)}`);//It is true.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const equal = (num1: number, num2: number) =>
  (num1 === num2) ? `${num1} is equal to ${num2}`
    : `${num1} is not equal to ${num2}`

console.log(`equal, ${equal(4, 3)}`);//4 is not equal to 3
console.log(`equal, ${equal(4, 4)}`);//4 is equal to 4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const notEqual = (num1: number, num2: number) =>
  (num1 !== num2) ? `${num1} is not equal to ${num2}`
    : `${num1} is equal to ${num2}`;

console.log(`notEqual, ${notEqual(4, 3)}`);//4 is not equal to 3
console.log(`notEqual, ${notEqual(4, 4)}`);//4 is equal to 4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const lessOrEqual = (num1: number, num2: number): string =>
  (num1 <= num2) ? `${num1} is less than or equal to ${num2}`
    : `${num1} is not less than or equal to ${num2}`;

console.log(`lessOrEqual, ${lessOrEqual(4, 3)}`);//4 is not less than or equal to 3
console.log(`lessOrEqual, ${lessOrEqual(4, 4)}`);//4 is less than or equal to 4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const logicalAnd = (num1: number, min: number, max: number): string =>
  (num1 <= max && num1 >= min)
    ? `${num1} is less than or equal to ${max} AND is
  greater than or equal to ${min}`
    : `${num1} is not less than or equal to ${max} AND is
  not greater than or equal to ${min}`;

console.log(`logicalAnd, ${logicalAnd(4, 3, 10)}`);
//4 is less than or equal to 10 AND is greater than or equal to 3
console.log(`logicalAnd, ${logicalAnd(2, 3, 10)}`);
//2 is not less than or equal to 10 AND is not greater than or equal to 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const elseIf = (num1: number, min: number, max: number): string => {
  let result: string = '';

  if (num1 < min) {
    result = `${num1} is less than ${min}.`;
  } else if (num1 > max) {
    result = `${num1} is greater than ${max}.`;
  } else {
    result = `${num1} is between ${min} and ${max}.`;
  }

  return result;
};
console.log(`elseIf, ${elseIf(5, 4, 10)}`);//5 is between 4 and 10.
console.log(`elseIf, ${elseIf(2, 4, 10)}`);// 2 is less than 4.
console.log(`elseIf, ${elseIf(12, 4, 10)}`);// 12 is greater than 10.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const size1 = (num1: number): string => {
  let result = '';
  const tiny = 5;
  const small = 10;
  const medium = 15;
  const large = 20;
  const huge = 25;

  if (num1 < tiny) {
    result = `${num1} is tiny.`;
  } else if (num1 < small) {
    result = `${num1} is small.`;
  } else if (num1 < medium) {
    result = `${num1} is medium.`;
  } else if (num1 < large) {
    result = `${num1} is large.`;
  } else if (num1 >= huge) {
    result = `${num1} is huge.`;
  } else {
    result = `Wrong value in ${num1}. It is not a valid number!`;
  }

  return result;
};
console.log(`size1, ${size1(4)}`);//4 is tiny.
console.log(`size1, ${size1(9)}`);//9 is small.
console.log(`size1, ${size1(25)}`);//25 is huge.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const size2 = (num1: number): string => {
  let result = '';

  //using 2 arrays
  let sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  let targets = [5, 10, 15, 20, 25];

  if (num1 < targets[0]) {
    result = `${num1} is ${sizes[0]}.`;
  } else if (num1 < targets[1]) {
    result = `${num1} is ${sizes[1]}.`;
  } else if (num1 < targets[2]) {
    result = `${num1} is ${sizes[2]}.`;
  } else if (num1 < targets[3]) {
    result = `${num1} is ${sizes[3]}.`;
  } else if (num1 >= targets[4]) {
    result = `${num1} is ${sizes[4]}.`;
  } else {
    result = `Wrong value in ${num1}. It is not a valid number!`;
  }

  return result;
};
console.log(`size2, ${size2(4)}`);//4 is tiny.
console.log(`size2, ${size2(9)}`);//9 is small.
console.log(`size2, ${size2(25)}`);//25 is huge.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const size3 = (num1: number, sizeTargets: (String | number)[][]):
  string => {
  let result: string = '';

  if (num1 < sizeTargets[0][1]) {
    result = `${num1} is ${sizeTargets[0][0]}.`;
  } else if (num1 < sizeTargets[1][1]) {
    result = `${num1} is ${sizeTargets[1][0]}.`;
  } else if (num1 < sizeTargets[2][1]) {
    result = `${num1} is ${sizeTargets[2][0]}.`;
  } else if (num1 < sizeTargets[3][1]) {
    result = `${num1} is ${sizeTargets[3][0]}.`;
  } else if (num1 >= sizeTargets[4][1]) {
    result = `${num1} is ${sizeTargets[4][0]}.`;
  } else {
    result = `Wrong value in ${num1}. It is not a valid number!`;
  }

  return result;
};
//using multi dim array
let sizeTargets =
  [['tiny', 5], ['small', 10], ['medium', 15], ['large', 20], ['huge', 25]];

console.log(`size3, ${size3(4, sizeTargets)}`);//4 is tiny.
console.log(`size3, ${size3(9, sizeTargets)}`);//9 is small.
console.log(`size3, ${size3(25, sizeTargets)}`);//25 is huge.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const isLess = (num1: number, num2: number):
  boolean => (num1 < num2) ? true : false;

console.log(`isLess, ${isLess(4, 3)}`);//false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const divideValue = (num1: number, num2: number): number | boolean =>
  (num1 <= 0 || num2 <= 0) ? false : (num1 / num2);

let num1 = 8;
let num2 = 0;
let resultDiv = divideValue(num1, num2);

if (resultDiv) {
  console.log(resultDiv);
} else {
  console.log(`divideValue, Not valid numbers! num1 = ${num1} and num2 = ${num2}.`);
}
// Not valid numbers! num1 = 8 and num2 = 0.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addTwoNumbers = (firstNum: number, secondNum: number = 0) =>
  firstNum + secondNum;

console.log(`addTwoNumbers, ${addTwoNumbers(5, 10)}`);//15
console.log(`addTwoNumbers, ${addTwoNumbers(5)}`);//5

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getCurrentTime = (): string => {
  const today: Date = new Date();

  const date: string =
    `${today.getFullYear()}  ${(today.getMonth() + 1)} ${today.getDate()}`;

  const time: string =
    `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;

  const dateTime: string = `${date} ${time}`;

  return dateTime
}

const logIt = (
  message: string,
  userId: string = 'Not signed in.'
): void => {
  const currentTime: string = getCurrentTime();

  console.log(`logIt, time: ${currentTime}, message: ${message}, User: ${userId}`);
}
logIt('User clicked on a button.', 'xyz10934');
logIt('User signed out.');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addToArray1 = (iArray: number[], target: number): number[] => {
  let counter = 0;

  while (counter <= target) {
    iArray.push(counter);
    counter++;
  };

  return iArray;
};
let someArray1: number[] = [];
someArray1 = addToArray1(someArray1, 20);
console.log(`addToArray1, ${someArray1}`);
// 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addToArray2 = (iArray: number[], target: number): number[] => {

  for (let counter = 0; counter <= target; counter++) {
    iArray.push(counter);
  };

  return iArray;
};
let someArray2: number[] = [];
someArray2 = addToArray2(someArray2, 20);
console.log(`addToArray2, ${someArray2}`);
// 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addEvenToArray1 = (iArray: number[], target: number): number[] => {
  let i = 0;

  while (i <= target) {
    iArray.push(i);
    i += 2;
  }

  return iArray;
};
let someArray3: number[] = [];
someArray3 = addEvenToArray1(someArray3, 20);
console.log(`addEvenToArray1, ${someArray3}`); // 0,2,4,6,8,10,12,14,16,18,20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addEvenToArray2 = (iArray: number[], target: number): number[] => {

  for (let counter: number = 0; counter <= target; counter += 2) {
    iArray.push(counter);
  };

  return iArray;
};
let someArray4: number[] = [];
someArray4 = addEvenToArray2(someArray4, 20);
console.log(`addEvenToArray2, ${someArray4}`); // 0,2,4,6,8,10,12,14,16,18,20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addOddToArray1 = (iArray: number[], target: number): number[] => {
  let i = 1;

  while (i <= target) {
    iArray.push(i);
    i += 2;
  }

  return iArray;
};
let someArray5: number[] = [];
someArray5 = addOddToArray1(someArray5, 20);
console.log(`addOddToArray1, ${someArray5}`); // 1,3,5,7,9,11,13,15,17,19

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addOddToArray2 = (iArray: number[], target: number): number[] => {

  for (let counter = 1; counter <= target; counter += 2) {
    iArray.push(counter);
  };

  return iArray;
};
let someArray6: number[] = [];
someArray6 = addOddToArray2(someArray6, 20);
console.log(`addOddToArray2, ${someArray6}`); // 1,3,5,7,9,11,13,15,17,19

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getTotalFromArray = (iArray: number[]): number => {
  let total = 0;

  for (let counter = 0; counter < iArray.length; counter++) {
    total += iArray[counter];
  };

  return total;
};
let someArray7 = [3, 5, 8];
console.log(`getTotalFromArray, ${getTotalFromArray(someArray7)}`);//16

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getTotalMultiDimArray = (iArray: number[][]): number => {
  let total = 0;

  for (let i = 0; i < iArray.length; i++) {
    for (let j = 0; j < iArray[i].length; j++) {
      total += iArray[i][j];
    };
  };

  return total;
};
let someArray8 = [[3, 5, 8], [3, 4], [1, 2]];
console.log(`getTotalMultiDimArray, ${getTotalMultiDimArray(someArray8)}`);//26

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const randomRange = (myMin: number, myMax: number): number =>
  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

console.log(`randomRange, ${randomRange(5, 10)}`);
// 8, 5, 10, .... (will get random numbers between 5 adn 10)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// (||) operator returns the first expression (parseInt(myValue))
// if it can be evaluated to true, //otherwise it returns the second
// expression (0). The return value of parseInt('') is NaN.
// NaN evaluates to false, so num ends up being set to 0.
const convertToInteger = (myValue: string): number => parseInt(myValue) || 0;

console.log(`convertToInteger, ${convertToInteger('5')}`);//5
console.log(`convertToInteger, ${convertToInteger('something')}`);//0

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Conditional (Ternary) operator
// condition ? statementIfTrue : statementIfFalse;
const checkEqual = (a: number, b: number): string =>
  a === b ? `${a} and ${b} are equal.` : `${a} and ${b} are not equal.`;

console.log(`checkEqual, ${checkEqual(2, 2)}`);//2 and 2 are equal.
console.log(`checkEqual, ${checkEqual(4, 5)}`);//4 and 5 are not equal.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const checkSign = (myNum: number): string =>
  myNum > 0 ? 'Positive' : myNum < 0 ? 'Negative' : 'Zero';

console.log(`checkSign, ${checkSign(3)}`);//Positive
console.log(`checkSign, ${checkSign(-2)}`);//Negative
console.log(`checkSign, ${checkSign(0)}`);//Zero

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const concatArrays = (myArray1: number[], myArray2: number[]): number[] =>
  myArray1.concat(myArray2);

console.log(`concatArrays, ${concatArrays([1, 2], [3, 4, 5])}`);//1,2,3,4,5
