//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 07_Enum.ts --target ESNEXT --watch

export { };

// Instead of having the following:
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// Doing it as follow:
enum Role { ADMIN = 0, READ_ONLY = 1, AUTHOR = 2 };
const r1 = Role.ADMIN;

if (r1 === ADMIN) {
  console.log('Is Admin!'); //Is Admin!
}

// By default start at 0 and we do not have to assign a value
enum Role1 { ADMIN, READ_ONLY, AUTHOR };

// We can have any value
enum Role2 { ADMIN = 1, READ_ONLY = 2, AUTHOR = 3 };
enum Role3 { ADMIN = 5, READ_ONLY = 8, AUTHOR = 7 };