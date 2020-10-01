//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 32_ClassStatic.ts --target ESNEXT --watch

export { };

class Department {
  // Creating static property
  static fiscalYear = 2020;
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) { };

  // Creating static methods
  static createEmployee(name: string) {
    return { name: name }
  };

  describe() {
    console.log(`Department: (${this.id}): ${this.name}`)
  };

  addEmployee(employee: string) {
    this.employees.push(employee);
  };

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  };
};
// using the static method and property without creating object
const emp1 = Department.createEmployee('Max');
console.log(emp1, Department.fiscalYear);//{ name: 'Max' } 2020