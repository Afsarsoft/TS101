//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 21_Object.ts --target ESNEXT --watch

export { };

const user1 = {
  firstName: 'Jim',
  lastName: 'Brown',
  city: 'Seattle',
  email: 'JimBrown@xyz.com'
};

// Accessing the object property
console.log(`${user1.firstName} ${user1.lastName}`); //Jim Brown

// Updating the object property
user1.firstName = 'Sam';
console.log(`${user1.firstName} ${user1.lastName}`); //Sam Brown

// Make the object readonly
const user2 = {
  firstName: 'Jim',
  lastName: 'Brown',
  city: 'Seattle',
  email: 'JimBrown@xyz.com'
} as const;

// not able to do this since it is readonly
// user2.firstName = 'Sam';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const person = {
  firstName: 'Jim',
  lastName: 'Brown',
  hobbies: ['sport', 'movies', 'music'],
  address: {
    street: '123 SE main st',
    city: 'Bellevue',
    state: 'WA'
  }
}

// Accessing the object property
console.log(`person, ${person.firstName} ${person.lastName}`); // Jim Brown

// Get to movies
console.log(`person, The second hobby of ${person.firstName} is ${person.hobbies[1]}.`);
// The second hobby of Jim is movies.

// Get to the city
console.log(`person, The city of ${person.firstName} is ${person.address.city}`);
// The city of Jim is Bellevue

console.log(`person, ${person.firstName}`); // Jim
console.log(`person, ${person.address.city}`); // Bellevue

// In TypeScript we can not addd properties
// Can be done in JavaScript
// person.email = 'surush@gmail.com';

// Option A, changing the property
person.firstName = 'Steve';
console.log(`person, ${person.firstName}`); // Steve

// Option B, changing the property
person['firstName'] = 'Mary';
console.log(`person, ${person.firstName}`); // Mary

// Option A should use most of the time.
// However, in run time we may need to use the Option B
// Since we may not able to know due to user selection
const selection = 'firstName';
person[selection] = 'Rob';
console.log(`person, ${person.firstName}`); // Rob

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrays of objects
const toDo = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist app',
    isCompleted: false
  },
];

// Accessing the 'Meeting with boss'
console.log(`toDo, The second action to so is ${toDo[1].text}.`);
// The second action to so is Meeting with boss.

// JSON is a data format and being used for sending data
// using APIs which mostly send via JSON format.
// Search for JSON formatter.
// The following one is pretty good:
// https://www.freeformatter.com/json-formatter.html

// convert to JSON, this is the way we send data to server
console.log(`toDo, convert to JSON is ${JSON.stringify(toDo)}`);

// Loop through it
for (let stuff of toDo) {
  console.log(`toDo, stuff to do: ${stuff.text}.`);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addressMaker = (
  address: { city: string, state: string }
) => {

  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: 'United States'
  }

  console.log(newAddress)
}

const address = { city: 'Bellevue', state: 'WA' };

addressMaker(address);
  // { city: 'Bellevue', state: 'WA', country: 'United States' }