//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 02_DefineVar.ts --target ESNEXT --watch

export { };
// let age: number = 0 //whole number or decimal
// let isValid: boolean = true //true or false
// let someName: string = 'Jack Smith'
// let notSure: any //could assign anything
// const title: string = 'Some title should never change';
// const pi: number = 3.14; //Also, pi should never change

/*
No need to explicitly have types when:
-Initializing variables and members.
-Setting parameter default values.
-Determining function return types.
Type inference is used to provide type information.
So, can rewrite the above as follow:
*/

let age = 0 //whole number or decimal
let isValid = true //true or false
let someName = 'Jack Smith'
let notSure //could assign anything
const title = 'Some title should never change';
const pi = 3.14; //Also, pi should never change

