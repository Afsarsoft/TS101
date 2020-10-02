//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 38_GenericsP2.ts --target ESNEXT --watch

export { };

const makeFullName1 = (
  obj: { fName: string, lName: string }
) => {
  return {
    ...obj, // Keep  everything and add below
    fullName: obj.fName + '' + obj.lName
  };
};

const fullName1 = makeFullName1(
  { fName: 'Surush', lName: 'Cyrus' }
);
console.log(`First Name: ${fullName1.fName}, \
  Last Name: ${fullName1.lName}, \
  Full Name: ${fullName1.fullName}`);
// First Name: Surush, Last Name: Cyrus, Full Name: SurushCyrus

// Using Generics
const makeFullName2 = <T1, T2>(obj: { fName: T1, lName: T2 }) => {
  return {
    ...obj,
    fullName: obj.fName + '' + obj.lName
  };
};

const iFullName3 = makeFullName2(
  { fName: 'Surush', lName: 'Cyrus' }
);
console.log(`First Name: ${iFullName3.fName}, \
  Last Name: ${iFullName3.lName}, \
  Full Name: ${iFullName3.fullName}`);
// First Name: Surush, Last Name: Cyrus, Full Name: SurushCyrus





