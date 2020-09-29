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
console.log(`${result2}`); //Hello World!

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
console.log(`${result4}!`); // Hello Surush!