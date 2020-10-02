//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 34_TypeGuards.ts --target ESNEXT --watch

export { };

type Combine = string | number;

const add = (a: Combine, b: Combine): Combine => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add(4, 5)); //9
console.log(add('4', '5')); //45
console.log(add('4', 5)); //45
console.log(add('Hi ', 'Mary!')); // Hi Mary!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);

  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);
// Will get all the info:
// Name: Max
// Privileges: create - server
// Start Date: ...

// If we create new employee as follow:
printEmployeeInformation({ name: 'Jim', startDate: new Date() });
// we do not get the info for Privileges since did not provide
// Name: Jim
// Start Date: ...