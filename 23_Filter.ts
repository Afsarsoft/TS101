//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 23_Filter.ts --target ESNEXT --watch

export { };

const ages = [12, 20, 16, 5, 54, 21, 44, 13, 15, 25, 64, 32];

const ageFilter = ages.filter(age => age >= 21);
// const ageFilter = ages.filter(x => x >= 21);
// const ageFilter = ages.filter((age: number) => age >= 21);
console.log(`ageFilter, ${ageFilter}`) //[54, 21, 44, 25, 64, 32]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const words = ['spray', 'limit', 'exuberant', 'present'];

const wordFilter = words.filter(word => word.length > 6);
console.log(`wordFilter, ${wordFilter}`) //["exuberant", "present"]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const isBigEnough = value => value >= 10;
// const isBigEnough = (value: number): boolean => value >= 10;

const bigFilter = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(`bigFilter, ${bigFilter}`) //[ 12, 130, 44 ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array of objects
const companies = [
  { name: 'Company One', category: "Finance", start: 1981, end: 2003 },
  { name: 'Company Two', category: "Retail", start: 1992, end: 2008 },
  { name: 'Company Three', category: "Auto", start: 1999, end: 2007 },
  { name: 'Company Four', category: "Retail", start: 1989, end: 2010 },
  { name: 'Company Five', category: "Technology", start: 2009, end: 2014 },
  { name: 'Company Six', category: "Finance", start: 1987, end: 2010 },
  { name: 'Company Seven', category: "Auto", start: 1986, end: 1996 },
  { name: 'Company Eight', category: "Technology", start: 2011, end: 2016 },
  { name: 'Company Nine', category: "Retail", start: 1981, end: 1989 }
];

// Filter retail companies
const retailCompanies = companies.filter(x => x.category == 'Retail');
// console.log(`retailCompanies, ${retailCompanies}`);
console.log('retailCompanies =>', retailCompanies);

// Filter all the companies start in 80s
const eightyCompanies = companies.filter(x =>
  (x.start >= 1980 && x.start < 1990));
console.log('eightyCompanies =>', eightyCompanies);

// Get companies lasted 10 years or more
const tenYearsOrMoreCompanies = companies.filter(x =>
  (x.end - x.start >= 10));
console.log('tenYearsOrMoreCompanies =>', tenYearsOrMoreCompanies);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array based on search criteria
const filterItems = (fruitArray: string[], query: string) =>
  fruitArray.filter(info =>
    info.toLowerCase().indexOf(query.toLowerCase()) !== -1);

const resultFruits1 = filterItems(fruits, 'ap');
const resultFruits2 = filterItems(fruits, 'an');
console.log('fruits =>', resultFruits1); // [ 'apple', 'grapes' ]
console.log('fruits =>', resultFruits2); // [ 'banana', 'mango', 'orange' ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array of objects
const iArray = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { id: null },
  { id: 9 },
  { id: undefined },
  { id: 'some stuff1' },
  { id: 4 },
  { id: 'some stuff2' },
  { id: undefined },
  { id: 11.4 }
]

const isNumber = info =>
  (info !== undefined && typeof info === 'number');

iArray.forEach(info => console.log('iArray =>', info));

let invalidItems = 0;
let validItems = 0;

const filterByID = iObj => {

  let result = false;
  if (isNumber(iObj.id) && iObj.id !== 0) {
    validItems++
    result = true;
  } else {
    invalidItems++
    result = false;
  }

  return result;
}
const iArrayByID = iArray.filter(filterByID);
console.log('iArrayByID =>', iArrayByID);

console.log(`iArray, Number of invalid items in array = ${invalidItems}.`)
// Number of invalid items in array = 6.

console.log(`iArray, Number of valid items in array = ${validItems}.`)
// Number of valid items in array = 7.

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array of objects, above example using types
type IArrayType = { id: number | string | null | undefined }[];
const iArray: IArrayType = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { id: null },
  { id: 9 },
  { id: undefined },
  { id: 'some stuff1' },
  { id: 4 },
  { id: 'some stuff2' },
  { id: undefined },
  { id: 11.4 }
]

let invalidItems = 0;
let validItems = 0;

type IsNumberType = number | string | null | undefined
const isNumber = (info: IsNumberType): boolean =>
  (info !== undefined && typeof (info) === 'number');

// iArray.forEach((info) => console.log(info));

type IObjectType = { id: number | string | null | undefined }
const filterByID = (iObj: IObjectType): boolean => {

  let result: boolean = false;
  if (isNumber(iObj.id) && iObj.id !== 0) {
    validItems++
    result = true;
  } else {
    invalidItems++
    result = false;
  }

  return result;
}
const iArrayByID: IArrayType = iArray.filter(filterByID);
// console.log(iArrayByID);

console.log(`Number of invalid items in array = ${invalidItems}.`)
// Number of invalid items in array = 6.

console.log(`Number of valid items in array = ${validItems}.`)
// Number of valid items in array = 7.
*/
