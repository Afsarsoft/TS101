//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 22_PassFunc.ts --target ESNEXT --watch

export { };

const add = (n1: number, n2: number) => n1 + n2;
const displayValue = (cb: number) => console.log(cb);
// const displayValue = (callback: number) => console.log(callback);
// const displayValue = (xyz: number) => console.log(xyz);
displayValue(add(8, 2)) //10

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const displayStuff = (result: number) => console.log(result);
const addAndHandle = (n1: number,
  n2: number,
  cb: (num: number) => void) => cb(n1 + n2);
addAndHandle(10, 20, displayStuff); //30

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const doMath = (num1: number, num2: number, cb: Function) =>
  console.log(cb(num1, num2))//2
doMath(5, 2, (number1: number, number2: number) =>
  (number1 * number2) / 5);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getInfo = (info: string[]) => info.join('-');
type TypeGetInfo = (info: string[]) => string;

const showInfo = (getSomething: TypeGetInfo, cb: string[]) =>
  console.log(getSomething(cb));

const friends = ['Surush', 'Steve', 'Mary', 'Bob'];
showInfo(getInfo, friends); // Surush-Steve-Mary-Bob

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getCurrentTime = () => {
  const today: Date = new Date();

  const date: string =
    `${today.getFullYear()}  ${(today.getMonth() + 1)} ${today.getDate()}`;

  const time: string =
    `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;

  const dateTime: string = `${date} ${time}`;

  return dateTime
}

type TypeGetTime = () => string;

const logIt = (
  cb: TypeGetTime,
  message: string,
  userId: string = 'Not signed in.'
) => {
  const currentTime: string = cb();
  console.log(`time: ${currentTime}, message: ${message}, User: ${userId}`);
}

logIt(getCurrentTime, 'User clicked something.', 'abn810934')
logIt(getCurrentTime, 'User quitting!');

