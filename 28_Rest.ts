//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 28_Rest.ts --target ESNEXT --watch

export { };

const hello = (...names: string[]): string => names.join('|');

const names = hello('Surush', 'Steve', 'Jack', 'Mary');
console.log(`Hello ${names}`);
// Hello Surush|Steve|Jack|Mary

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const multiply = (multiplier: number, ...nums: number[]): number[] =>
  nums.map((element: number) => (multiplier * element));

const result = multiply(2, 2, 3, 5);
console.log(`result = ${result}`) // result = 4,6,10