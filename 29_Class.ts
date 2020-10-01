//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 29_Class.ts --target ESNEXT --watch

export { };

/*
class Department {
  // Field or property of the class
  name: string;

  // Constructor method is a function that gets executed
  // when the object gets created. Basically, it is the initializer.
  constructor(name: string) {
    // Sets the value of name property to the value we are getting
    // from name when the department object gets created.
    this.name = name;
  };
};
// Creating object based on the above blueprint
const accounting = new Department('Accounting');
console.log(accounting); // Department { name: 'Accounting' }
*/

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  };

  // Method, function tied to this class
  describe() {
    console.log(`Department: ${this.name}`)
  };
};
const accounting = new Department('Accounting');
accounting.describe(); //Department: Accounting
*/

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Department {
  // only available inside the class, protecting
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  };

  describe() {
    console.log(`Department: ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

};

const accounting = new Department('Accounting');
accounting.addEmployee('Jane');
accounting.addEmployee('Jim');
accounting.addEmployee('Josh');

accounting.describe(); //Department: Accounting
accounting.printEmployeeInformation();
// 3
// [ 'Jane', 'Jim', 'Josh' ]
*/

/*
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Department {
  private employees: string[] = [];

  // Short cut, no need to define properties
  // and double initializing them
  // readonly for id for protection
  constructor(private readonly id: string, public name: string) { };

  describe() {
    console.log(`Department: (${this.id}): ${this.name}`)
  }
};
const accounting = new Department('d1', 'Accounting');
accounting.describe(); //Department: (d1): Accounting
*/


