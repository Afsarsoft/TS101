//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 35_DiscUnions.ts --target ESNEXT --watch

export { };

interface Bird {
  type: 'bird';
  flyingSpeed: number;
};

interface Horse {
  type: 'horse'
  runningSpeed: number;
};

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed = 0;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  };
  console.log(`${animal.type} moving at speed: ${speed}`);
};

moveAnimal({ type: 'bird', flyingSpeed: 10 });
// bird moving at speed: 10
