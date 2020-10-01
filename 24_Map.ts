//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 24_Map.ts --target ESNEXT --watch`

export { };

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Add 10 to ages.
const addTenAges = ages.map(x => x + 10);
// const addTenAges = ages.map((x: number) => (x + 10));
console.log(addTenAges);
// [43, 22, 30, 26, 15, 64, 31, 54, 71, 23, 25, 55, 35, 74, 42]

// times 2 to ages.
const timesTwoAges = ages.map(x => x * 2);
console.log(timesTwoAges);
// [66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64]

// square the ages.
const squareAges = ages.map(x => Math.sqrt(x));
console.log(squareAges);

// square and then multiply by two
const squareAgesTimesTwo = ages
  .map(x => Math.sqrt(x))
  .map(x => x * 2);
console.log(squareAgesTimesTwo);

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

//let's get array string back for name and category
const allComSomeInfo: string[] =
  companies.map(x => (`${x.name}, ${x.category}`));
console.log(allComSomeInfo);
