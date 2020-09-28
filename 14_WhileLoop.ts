//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 14_WhileLoop.ts --target ESNEXT --watch

export { };

let i1 = 0;
while (i1 <= 10) {
  console.log(`Loop #1, While loop number: ${i1}`);
  i1++
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Populate array
const max2 = 10;
let iArray2: number[] = [];
let i2 = 0;

while (i2 <= max2) {
  iArray2.push(i2);
  i2++;
};
console.log(`Loop #2, ${iArray2}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Display array elements
const ages3 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let i3 = 0;

while (i3 < ages3.length) {
  console.log(`Loop #3, ${ages3[i3]}`);
  i3++
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ages4 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let canDrink4: number[] = [];
let i4 = 0;

while (i4 < ages4.length) {
  if (ages4[i4] >= 21) {
    canDrink4.push(ages4[i4]);
  }
  i4++
}
console.log(`Loop #4, ${canDrink4}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Add 10 to ages.
const ages5 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let i5 = 0;
let agesNew5: number[] = [];
let value5 = 0;

while (i5 < ages5.length) {
  value5 = ages5[i5] + 10;
  agesNew5.push(value5);
  i5++
}
console.log(`Loop #5, ${agesNew5}`)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//square the ages.
const ages6 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let i6 = 0;
let value6 = 0;
let agesNew6: number[] = [];

while (i6 < ages6.length) {
  value6 = Math.sqrt(ages6[i6]);
  agesNew6.push(value6);
  i6++
}
console.log(`Loop #6, ${agesNew6}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//adding ages
const ages7 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
let ageSum7 = 0;
let i7 = 0;

while (i7 < ages7.length) {
  ageSum7 += ages7[i7];
  i7++
}
console.log(`Loop #7, ${ageSum7}`);
//460