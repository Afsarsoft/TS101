//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 26_Reduce.ts --target ESNEXT --watch

export { };

const iArray = [1, 3, 4, 5];
const totalIt = (accumulator: number, currentValue: number): number =>
  accumulator + currentValue;

console.log(`totalIt = ${iArray.reduce(totalIt, 2)}`); //15

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function call, incoming numbers to array
const sumIt = (...numbers: number[]): number =>
  numbers.reduce((total, n) => total + n, 0);

console.log(`sumIt = ${sumIt(1, 3, 4, 5)}`); //13

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ages = [33, 16, 5, 54, 13, 15, 25, 64, 32];
const addUp = (a: number, b: number): number => a + b;

console.log(`addUp = ${ages.reduce(addUp, 0)}`); //257

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array of objects
const companies1 = [
  { name: 'Company A', revenue: 1000 },
  { name: 'Company B', revenue: 2000 },
  { name: 'Company C', revenue: 3000 },
  { name: 'Company D', revenue: 4000 },
  { name: 'Company E', revenue: 5000 }
];

type CurrentValueType1 = {
  name: string,
  revenue: number
}

const totalRevenue = companies1.reduce(
  (a: number, b: CurrentValueType1): number =>
    a + b.revenue, 0);

console.log(`totalRevenue = ${totalRevenue}`); //15000

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const companies2 = [
  { name: 'Company A', revenue: 1000, start: 1981, end: 2003 },
  { name: 'Company B', revenue: 2000, start: 1992, end: 2008 },
  { name: 'Company C', revenue: 3000, start: 1999, end: 2007 }
];

type CurrentValueType = {
  name: string,
  revenue: number,
  start: number,
  end: number
}

const totalYears = companies2.reduce(
  (a: number, b: CurrentValueType): number =>
    a + (b.end - b.start), 0);

console.log(`totalYears = ${totalYears}`); //totalYears = 46

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// flatten an array of arrays
const myArray = [[0, 1], [2, 3], [4, 5]];
const concat = (accumulator: number[], currentValue: number[]): number[] =>
  accumulator.concat(currentValue);

const resultArray: number[] = myArray.reduce(concat, []);

console.log(`resultArray = ${resultArray}`); // resultArray = 0,1,2,3,4,5
console.log(resultArray); // [ 0, 1, 2, 3, 4, 5 ]
