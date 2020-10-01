//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 25_Sort.ts --target ESNEXT --watch

export { };

const names = ['Surush', 'Alice', 'Behroze', 'Jack', 'Ali', 'Mary']

const sortedNamesAsc = names.sort();
console.log(`sortedNamesAsc => ${sortedNamesAsc}`);
// ["Ali", "Alice", "Behroze", "Jack", "Mary", "Surush"]

const sortedNamesDes = names.sort().reverse();
console.log(`sortedNamesDes => ${sortedNamesDes}`);
// ["Surush", "Mary", "Jack", "Behroze", "Alice", "Ali"]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const ages = [33, 12, 20, 5, 54, 21, 13, 15, 45, 25, 64, 32];

// Wrong approach
const sortedAgesAsc1 = ages.sort();
console.log(sortedAgesAsc1);
// [12, 13, 15, 20, 21, 25, 32, 33, 45, 5, 54, 64]

// sort ages by age, ascending
const compareNumberAsc = (a: number, b: number) => a - b;
const sortedAgesAsc = ages.sort(compareNumberAsc);
console.log(`sortedAgesAsc => ${sortedAgesAsc}`);
// [5, 12, 13, 15, 20, 21, 25, 32, 33, 45, 54, 64]

// sort ages by age, descending
const compareNumberDes = (a: number, b: number) => b - a;
const sortedAgesDes = ages.sort(compareNumberDes);
console.log(`sortedAgesDes => ${sortedAgesDes}`);
// [64, 54, 45, 33, 32, 25, 21, 20, 15, 13, 12, 5]

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

// Sort ascending by start
const sortedCompByStartAsc = companies.sort((a, b) => (a.start - b.start));
console.log('sortedCompByStartAsc =>', sortedCompByStartAsc);

// Sort ascending by category
const sortedCompByCategoryAsc = companies.sort((a: any, b: any): number => {

  const nameA: string = a.category.toUpperCase();
  const nameB: string = b.category.toUpperCase();
  let result: number = 0;

  if (nameA < nameB) {
    result = -1;
  } else if (nameA > nameB) {
    result = 1;
  } else if (nameA === nameB) {
    result = 0;
  }

  return result;
});

console.log('sortedCompByCategoryAsc =>', sortedCompByCategoryAsc);
