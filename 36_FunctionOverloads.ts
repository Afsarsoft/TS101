//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 36_FunctionOverloads.ts --target ESNEXT --watch

export { };

type Combine = string | number;

// I can overload all possible cases.
// Note: will not work with arrow functions
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combine, b: Combine): Combine {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  };
  return a + b;
};

const result = add('Hi ', 'Mary!');
// I'll get error if not overload since the result is not a string
result.split('');
console.log(result);//Hi Mary!