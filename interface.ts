// export interface Person {
//   firstName: string;
//   lastName: string;
// }

// export interface Person {
//   age: number;
// }

// const person1: Person = { firstName: "samik", lastName: "shakya", age: 12 };

interface Person {
  firstName: string;
  lastName: string;
}

let User: Person = {
  firstName: "samik",
  lastName: "shakya",
};

/// declaration merging in interface
interface Point {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

interface NamedPoint extends Point, Named {
  address: string;
} // declaration merging in interface

let points: NamedPoint = {
  x: 0,
  y: 10,
  name: "samik",
  address: "swayamhu",
};

// same name merging in interface

interface Point {
  x: number;
  y: number;
}

interface Point {
  name: string;
}

/// we can merge type

type Persons = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Persons | Address; // union merging

const personWithAddress: PersonWithAddress = {
  street: "sadf",
  city: "aksdjf",
  name: "sasdf",
};

interface Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

let circles: Circle = {
  width: 1,
  height: 2,
  radius: 4,
};

type Student = {
  name: string;
  age: number;
};

type Locations = {
  street: string;
  city: string;
};

type Slocation = Student & { phone: number };

let studentDetails: Slocation = {
  name: "samik",
  age: 12,
  phone: 123,
};

type Dog = { name: string };
type Cat = { name: string };
type Pet = Dog | Cat; // Union type
type Pointer = { x: number } & { y: number }; // Intersection type

// when you need to represent the primitive or literal types: if you want to define primitive types or literal types, type is a good choice

type Age = number;
type Color = "red" | "green" | "blue";

type Personal = {
  name: string;
  age: number;
};

//You're Defining Object Shapes: If you want to define the structure or shape of an object, especially when working with classes and objects, interface is a more natural choice.

interface Personasdf {
  name: string;
  age: number;
}

// /You're Extending or Implementing: If you want to extend or implement an existing object shape, use interface. Interfaces are great for describing contracts that classes or objects should adhere to.
interface Employee extends Person {
  jobTitle: string;
}

type Studentasdf = {
  name: string;
};

type studentadd = Studentasdf & { age: number };

//You Need Declaration Merging: If you expect that multiple declarations with the same name will automatically merge into a single declaration, use interface. This is a unique feature of interfaces in TypeScript.

interface Car {
  brand: string;
}
interface Car {
  brand: string;
}

type Students = {
  name: string;
  address: string;
};

type Location1 = {
  street: string;
  city: string;
};

type SlocationwithPhone = Students & Location1 & { phone: number };

const slocationwithphones: SlocationwithPhone = {
  name: "samik",
  address: "swayambhu",
  street: "ringroad",
  city: "kathmandu",
  phone: 123123,
};

//Representing a Set of Related Constants: Enums are an excellent choice when you have a predefined set of related constants that you want to use in your code. For example, days of the week, months of the year, or directions (north, south, east, west).
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// improve code readability
const today = DaysOfWeek.Wednesday;

//preventing invalid values
function printDay(day: DaysOfWeek) {
  console.log(day);
}
printDay(DaysOfWeek.Monday); // OK

//printDay(DaysOfWeek.Hello); // error

// Mapping values
enum Colors {
  Red = "#234234",
  Green = "#23423",
  Blue = "#645656",
}
const colorName = Colors.Red; // "#234234"

enum CarBrand {
  Tesla = 45,
  Toyota = 2,
  Hyundai = 3,
  Mahindra = 4,
}

function getCarName(car: string) {
  if (car === CarBrand[45]) {
    console.log("this car is tesla");
  } else if (car === CarBrand[2]) {
    console.log("this car is toyota");
  }
}

getCarName("Tesla");

let emploeee: [number, string] = [1, "prakash"];

const arr: readonly string[] = ["samik"];
// arr.push("prakash"); // error because it is readonly
console.log(arr);

class MathConstants {
  static readonly PI: number = 3.14159265359;
  static readonly E: number = 2.71828182846;
}

// class Person {
//   readonly name: string;

//   // setData(name: string) {
//   //   //this.name = name; // cant do this after creating a new object or instance with readonly property
//   // }
// }

// const person = new Person();

// person.setData("Samik");

function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity(42); // Type of result1 is number
const result2 = identity("Hello"); // Type of result2 is string

class List<T> {
  private items: T[] = [];

  add(name: T) {
    this.items.push(name);
  }

  addArray(name: T[]) {
    this.items.push(...name);
  }

  getItems(): T[] {
    return this.items;
  }
}
const listString = new List<string>();
const listNumber = new List<number>();
const listBoolelan = new List<boolean>();

const listItem: unknown = [];

listString.add("samik");
listString.add("rahul");

listNumber.add(12);
listNumber.add(15);

listString.addArray(["pranit", "depen"]);
listNumber.addArray([100, 200]);
// listString.add(["samik", "rahul", "prakash"]);
// listBoolelan.add([true, false, true]);
// listNumber.add([12, 14, 17]);
console.log(`List of items with string are ${listString.getItems()}`);
console.log(`List of items with numbers are ${listNumber.getItems()}`);

type tuples = string | number;

const items: [tuples, object] = [5, { name: "samik", id: 5 }];

console.log(items);

function addTwoNumbers(x: number, y: number): [string, number] {
  return ["The sum is", x + y];
}

console.log(...addTwoNumbers(5, 6));
