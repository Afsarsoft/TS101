//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 13_DestrucArrays.ts --target ESNEXT --watch

export { };

const someNames = ['Surush', 'Steve', 'Mary', 'Jack'];
console.log(`${someNames}`);
//Surush,Steve,Mary,Jack

let [name1, name2, , name4] = ['Surush', 'Steve', 'Mary', 'Jack'];
console.log(`${name1}, ${name2}, ${name4}`);
//Surush, Steve, Jack

//Can overwrite values
name2 = 'Nancy';
console.log(`${name1}, ${name2}, ${name4}`);
//Surush, Nancy, Jack