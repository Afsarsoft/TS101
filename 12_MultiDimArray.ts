//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 12_MultiDimArray.ts --target ESNEXT --watch

export { };

let mArray1 = [['Steve', 10], ['Surush', 20], ['Jack', 30]];
let someMultiValue1 = mArray1[1][0];
let someMultiValue2 = mArray1[0][1];

console.log(`Array mArray1 = ${mArray1}`);
//Array mArray1 = Steve,10,Surush,20,Jack,30

console.log(`Value of someMultiValue1 = ${someMultiValue1}`);
//Value of array element someMultiValue1 = Surush

console.log(`Value of someMultiValue2 = ${someMultiValue2}`);
//Value of array element someMultiValue2 = 10

//Pushing and adding an array to the end
mArray1.push(['Mary', 40]);
console.log(`Array mArray1 = ${mArray1}`);
//Array mArray1 = Steve,10,Surush,20,Jack,30,Mary,40

//Removing the last array from multi dimensional array
let removedArray1 = mArray1.pop();
console.log(`removed array removedArray1 = ${removedArray1}`);
//removed array removedArray1 = Mary,40

console.log(`Array mArray1 = ${mArray1}`);
//Array mArray1 = Steve,10,Surush,20,Jack,30

//Removing the first array
let removedArray2 = mArray1.shift();
console.log(`removed array removedArray2 = ${removedArray2}`);
//removed array removedArray2 = Steve,10

console.log(`Array mArray1 = ${mArray1}`);
//Array mArray1 = Surush,20,Jack,30

//Adding a new arry to the beginning
let addedArray1 = mArray1.unshift(['Adam', 5]);
console.log(`Added array addedArray1 = ${addedArray1}`);
//Added array addedArray1 = 3

console.log(`Array mArray1 = ${mArray1}`);
//Array mArray1 = Adam,5,Surush,20,Jack,30