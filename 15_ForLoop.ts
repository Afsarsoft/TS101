//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 15_ForLoop.ts --target ESNEXT --watch

export { };

for (let i1 = 0; i1 <= 10; i1++) {
  console.log(`Loops #1, For loop number: ${i1}`);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Populate array
const max2 = 10;
let iArray2: number[] = [];

for (let i2 = 0; i2 <= max2; i2++) {
  iArray2.push(i2);
}
console.log(`Loop #2, ${iArray2}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Display array elements
const ages3 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i3 = 0; i3 < ages3.length; i3++) {
  console.log(`Loop #3, ${ages3[i3]}`);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ages4 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let canDrink4: number[] = [];

for (let i4 = 0; i4 < ages4.length; i4++) {
  if (ages4[i4] >= 21) {
    canDrink4.push(ages4[i4]);
  }
}
console.log(`Loop #4, ${canDrink4}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Add 10 to ages.
const ages5 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let agesNew5: number[] = [];
let value5 = 0;

for (let i5 = 0; i5 < ages5.length; i5++) {
  value5 = ages5[i5] + 10;
  agesNew5.push(value5);
}
console.log(`Loop #5, ${agesNew5}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// square the ages.
const ages6 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let agesNew6 = [];
let value6 = 0;

for (let i6 = 0; i6 < ages6.length; i6++) {
  value6 = Math.sqrt(ages6[i6]);
  agesNew6.push(value6);
}
console.log(`Loop #6, ${agesNew6}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// adding ages
const ages7 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let ageSum7 = 0;

for (let i7 = 0; i7 < ages7.length; i7++) {
  ageSum7 += ages7[i7];
}
console.log(`Loop #7, ${ageSum7}`);
