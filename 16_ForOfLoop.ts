//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 16_ForOfLoop.ts --target ESNEXT --watch

export { };

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const fName = 'Surush Cyrus'
let total = 0;

for (const age of ages) {
  console.log(`Loop through ages age = ${age}`);
}

for (const char of fName) {
  console.log(`Loop through fName char = ${char}`);
}

for (const age of ages) {
  total += age;
}
console.log(`Total age = ${total}`);