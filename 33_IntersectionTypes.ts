//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 33_IntersectionTypes.ts --target ESNEXT --watch

export { };

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const eT: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};
console.log(eT);
console.log(eT.name);//Max
console.log(eT.privileges);//[ 'create-server' ]
console.log(eT.startDate);//2020-10-02T17:15:49.108Z

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Can be done with interface as well
interface AdminI {
  name: string;
  privileges: string[];
};

interface EmployeeI {
  name: string;
  startDate: Date;
};

interface ElevatedEmployeeI extends Admin, Employee { };

const eI: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};
console.log(eT);
console.log(eT.name);//Max
console.log(eT.privileges);//[ 'create-server' ]
console.log(eT.startDate);//2020-10-02T17:15:49.108Z
