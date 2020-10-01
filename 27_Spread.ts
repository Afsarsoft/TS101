//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 27_Spread.ts --target ESNEXT --watch

export { };

// Copy array
const example1: number[] = [1, 2, 3, 4];
const example2: number[] = [...example1]

console.log(`example1 = ${example1}`); // example1 = 1,2,3,4
console.log(`example2 = ${example2}`); // example2 = 1,2,3,4

example2.push(20);

// Note: not passing by reference
console.log(`example1 = ${example1}`); // example2 = 1,2,3,4
console.log(`example2 = ${example2}`); // example2 = 1,2,3,4,20

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Adding to Array
const friendsToAdd = ['Matt', 'Ali', 'Alice'];
const friends = ['Surush', 'Steve', 'Jack',
  ...friendsToAdd, 'Mary', 'Maryam', 'Reza'];

console.log(`friends = ${friends}`);
// friends = Surush, Steve, Jack, Matt, Ali, Alice, Mary, Maryam, Reza

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing it to function
const addUp = (x: number, y: number): number => x + y;
const addNumbers = (...values: number[]): number => values.reduce(addUp, 0);

const nums = [5, 6, 3, 3, 1, 0];
const result = addNumbers(...nums);
console.log(result); // 18

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Copy arrays
const iArray1 = [0, 1, 2];
const iArray2 = [3, 4, 5];

// Old approach
const iArrayF1 = iArray1.concat(iArray2);

// Spread is more flexible
const iArrayF2 = [...iArray1, ...iArray2];
const iArrayF3 = [...iArray1, 99, ...iArray2, 6, 7];

console.log(`${iArray1}`); // 0,1,2
console.log(`${iArray2}`); // 3,4,5
console.log(`${iArrayF1}`); // 0,1,2,3,4,5
console.log(`${iArrayF2}`); // 0,1,2,3,4,5
console.log(`${iArrayF3}`); // 0,1,2,99,3,4,5,6,7

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Objet
const user = {
  firstName: 'Steve',
  lastName: 'Smith',
  city: 'Seattle',
  email: 'SteveSmith@xyz.com'
};

// Accessing the object property
console.log(`${user.firstName} ${user.lastName}`); // Steve Smith

// other options
const { firstName, lastName } = user
console.log(`${firstName}`); // Steve
console.log(`${lastName}`); // Smith

// Using spread operator, removing elements
const { email, ...userWithoutEmail } = user;
console.log(userWithoutEmail);
// { firstName: "Steve", lastName: "Smith", city: "Seattle" }

const { city, ...userWithoutCity } = user;
console.log(userWithoutCity);
// { firstName: "Steve", lastName: "Smith", email: "SteveSmith@xyz.com" }

// const { city, email, ...userWithoutCityEmail } = user;
// console.log(userWithoutCityEmail);
// { firstName: "Steve", lastName: "Smith" }