//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 30_ClassInheritance.ts --target ESNEXT --watch

export { };

class Department {
  // Be able to access from others classes
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) { };

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

// Inheritance
// Can only inherit from one class
// Getting everything from based class
class ITDepartment extends Department {

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
  };

};
const it = new ITDepartment('d1', ['Steve', 'Mary']);
it.addEmployee('Jane');
it.addEmployee('Jim');
it.addEmployee('Josh');

it.describe();
it.printEmployeeInformation();
// We get our admin and everything else from base class
console.log(it);

// Inherit another
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  };

  // overwrite the base class
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    };
    this.employees.push(name);
  };

  addReport(text: string) {
    this.reports.push(text);
  };

  printReports() {
    console.log(this.reports);
  };
};
const accounting = new AccountingDepartment('d2', []);
accounting.addEmployee('Max'); //Should not be added
accounting.addEmployee('Sue'); //Should add
accounting.printEmployeeInformation();
accounting.addReport('Budget review');
accounting.printReports();
console.log(accounting);