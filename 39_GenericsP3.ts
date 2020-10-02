//watch mode =>tsc <name> --target ESNEXT --watch
//tsc 39_GenericsP3.ts --target ESNEXT --watch

export { };

// using objects
const merge1 = (objA: object, objB: object) => Object.assign(objA, objB);
console.log(merge1({ name: 'Sam' }, { age: 30 }));
// { name: 'Sam', age: 30 }

// If we store it
const mergedObj1 = merge1({ name: 'Sam' }, { age: 30 });

// we cannot not access it, we get error.
// Because TypeScript have no idea about it
// console.log(mergedObj1.age); 

// if we use Generics, TypeScript is happy
const merge2 = <T1, T2>(objA: T1, objB: T2) => Object.assign(objA, objB);
console.log(merge2({ name: 'Sam' }, { age: 30 }));
// { name: 'Sam', age: 30 }

const mergedObj2 = merge2({ name: 'Sam' }, { age: 30 });
console.log(mergedObj2.age); //30

const mergedObj3 = merge2({ name: 'Sam', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj3.hobbies); //['Sports']

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Using it in class
// Designed for string, number, and boolean
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  };

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    };
    this.data.splice(this.data.indexOf(item), 1);
  };

  getItems() {
    return [...this.data];
  };
};

// Storing 
const storage1 = new DataStorage();
storage1.addItem('Sam');
storage1.addItem('Jane');
storage1.addItem(90);
storage1.addItem('Mary');
storage1.removeItem('Jane');
console.log(storage1.getItems());//[ 'Sam', 90, 'Mary' ]

const storage2 = new DataStorage();
storage2.addItem(90);
storage2.addItem('Sam');
storage2.addItem(100);
storage2.removeItem(90);
console.log(storage2.getItems());//[ 'Sam', 100 ]