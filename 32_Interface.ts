//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 32_Interface.ts --target ESNEXT --watch

export { };

// Consider the following example
let addition1 = (x, y) => console.log(x + y);
addition1(1, 2);

// Using Interface
interface Calculate {
  x: number;
  y: number;
}
let addition2 = (calculate: Calculate) => console.log(calculate.x + calculate.y);
addition2({ x: 1, y: 1 });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
interface User {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// type checking an object
let someUser: User;

someUser = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

someUser.greet('Hi there, I am'); //Hi there, I am Max

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
interface Person {
  firstName: string;
  lastName: string;
  mobilePhone?: string; //Optional property
  homePhone?: string;
  address?: string;
};

const person1 = {
  firstName: 'Surush',
  lastName: 'Cyrus'
};

const person2 = {
  firstName: 'Steve',
  lastName: 'Brown',
  mobilePhone: '425-111-4065'
};

const printInfo = (person: Person) => {
  // avoid getting undefined
  person.mobilePhone = person.mobilePhone || '';
  person.homePhone = person.homePhone || '';
  person.address = person.address || '';

  return `${person.firstName}\
  ${person.lastName}\
  ${person.mobilePhone}\
  ${person.homePhone}\
  ${person.address}`;
};

const result1 = printInfo(person1);
console.log(`${result1}`); // Surush Cyrus

const result2 = printInfo(person2);
console.log(`${result2}`); // Steve Brown 425-111-4065

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Interface & class
interface Greet {
  name: string;

  greet(phrase: string): void;
}

// forcing to implement the interface in the class
class Client implements Greet {
  name: string;
  age: 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greet;
user1 = new Client('Max');
user1.greet('Hi there, I am'); //Hi there, I am Max
console.log(user1); //Client { name: 'Max' }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Readonly Interface & class
interface Greet2 {
  readonly name: string;

  greet2(phrase: string): void;
}

// forcing to implement the interface in the class
class Client2 implements Greet2 {
  name: string;
  age: 30;

  constructor(name: string) {
    this.name = name;
  }

  greet2(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user2: Greet2;
user2 = new Client2('Max');
user2.greet2('Hi there, I am'); //Hi there, I am Max
// will get error
// user2.name = 'Mary';

