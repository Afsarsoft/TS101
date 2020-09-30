//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 18_Function.ts --target ESNEXT --watch

export { };

function hello1() {
  console.log(`Hello World!`);
}
hello1(); //Hello World!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function hello2() {
  return 'Hello World!';
}
const result2 = hello2();
console.log(hello2, `${result2}`); //Hello World!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Parameter is what we use at the time of declaration of the function.
function hello3(name: string) {
  console.log(`Hello ${name}!`);
}
//Argument is actual value we supply to the function
//In here 'Surush' is the argument of hello function
hello3('Surush'); // Hello Surush!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function hello4(name: string) {
  return `Hello ${name}`;
}
let result4 = hello4('Surush');
console.log(`hello4, ${result4}!`); // Hello Surush!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function sumAll(...numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let total = sumAll(1, 123, 500, 115, 44, 88);
console.log(`sumAll, ${total}`); //871

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function findMax(...numbers: number[]) {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let max = findMax(1, 123, 500, 115, 44, 88);
console.log(`findMax, ${max}`); //500 


