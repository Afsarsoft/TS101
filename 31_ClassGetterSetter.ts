//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 31_ClassGetterSetter.ts --target ESNEXT --watch

export { };

class Department {
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

class ITDepartment extends Department {

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
  };
};

class AccountingDepartment extends Department {
  private lastReport: string;

  // get needs to return a value.
  // lastReport is publicly available now.
  get mostRecentReport() {
    // check to see if there is any
    if (this.lastReport) {
      return this.lastReport;
    };
    throw new Error('No Report found!');
  };

  // set needs to take an argument
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    };
    this.addReport(value);
  };

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  };

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    };
    this.employees.push(name);
  };

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text
  };

  printReports() {
    console.log(this.reports);
  };
};
const accounting = new AccountingDepartment('d2', []);

// Accessing the get, error here
// console.log(accounting.mostRecentReport);
accounting.addReport('Budget review');
// Accessing the get, no error here
console.log(accounting.mostRecentReport); //Budget review

// using the set, error here
// accounting.mostRecentReport = '';

// using the set, no error here
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);//Year end report

