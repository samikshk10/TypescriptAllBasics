let names: unknown = "samik";
names = 12;
//studentName = 1; // cant assign number to type string shows error

console.log(names);

//another example for number

var studentAge: number = 1;
//studentAge = "samik"; // cant assign string to type number error

console.log(studentAge);

//example

function getDetails(studentNames: string, studentAges: number) {
  console.log(`My name is ${studentNames} and my age is ${studentAges}`);
}

getDetails("samik", 12); // here the parameter type should not be mismatched

// various basic data types

//string
let color: string = "red";

//boolean
let pass: boolean = true;

//undefined
let studentname: undefined = undefined;

//array
let list: number[] = [1, 2, 3]; // array type number only

//=======or ======
//syntax Array<elemType>
let lists: Array<number> = [1, 2, 3];

//Tuples

//Tupes types allow you to express an array with a fixed number of elements whose types are knomwn but need not be the same

let x: [string, number] = ["samik", 12]; /// here according to the type defined the parameter should be in order of type defined

x = ["prakash", 22]; // ok

//x = ["rahul", "22"]; // error initialze it incorrecty

// An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables)

enum Color {
  RED,
  GREEN,
  BLUE,
}

let c: Color = Color.GREEN; //ok

//let d: Color = Color.YELLOW; // error because yellow doesnt exist in enum

// we can also manually set the values of enum

enum Colorss {
  RED = 1,
  GREEN = 2,
  BLUE = 3,
}

let d: Colorss = Colorss.GREEN;

console.log(d); //2

// we can also access enum values in alternative way

let colorname: string = Colorss[2];

console.log(colorname); //GREEN

// Unknown

let notSure: unknown = 4;

notSure = "string";

notSure = false;

//In some situations, not all type information is available or its declaration would take an inappropriate amount of effort.

function getValues(value: any) {
  console.log(typeof value);
}

getValues(12); //ok number

getValues("samik"); //ok string

// void doesnt have the return type of function

function getDetai(): void {
  console.log("this is a message");

  //return "samik"; //Error we cant return anything in return type of vod
}

// Non-Primitive DataTypes

// Object

let employee: object;

//employee = "samik"; // error because

employee = {
  firstname: "samik",
  lastname: "shakya",
  age: 25,
};

interface User {
  id: number;
  name: string;
}
const user: User = {
  id: 55,
  name: "Prakash",
};

interface studentInterface {
  name: string;
  id: number;
}

let student: object[]; // it is the array of obejct

let students: studentInterface[] = [{ name: "samik", id: 55 }];

interface itemInterface {
  id: number;
  name: string;
}

const studentnames = students.map((stud) => {
  return stud.name;
});

console.log(studentnames);

// Union declaration
//With a union, you can declare that a type could be one of many types.
// it is seperated by | symbol

type WindowStates = "open" | "closed" | "minimized";

const windowState: WindowStates = "open";

let id: string | number;

// data types are known

let arr1: [string, number, boolean] = ["nunber", 12, true];

// classes constructor in typescript

function getCooordinates(first: number, second: number) {
  console.log(`First coordinate is ${first}, second coordinate is ${second}`);
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(13, 56);
getCooordinates(point.x, point.y);

interface Speech {
  sayHi(name: string): string; //parameter of string with return type string
  sayBye: (name: string) => string;
  //paramer of string with return type string using arrow function of ES6
}

let say: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

const circle = (diam: number): string => {
  return "the diameter of the circle is " + diam;
};

console.log(say.sayHi("samik"));
console.log(say.sayBye("pranit"));

// Creating an interface
interface A {
  display(): void;
}

class B implements A {
  display() {
    console.log("Hellow word");
  }
}

const obj = new B();
obj.display();

//

interface Students {
  name?: string;
  id: number;
}

const studentdetailed: Students = {
  id: 55,
  name: "samik",
};

console.log(studentdetailed);

function getStudentDetailsAll(name: string, id: number): Students {
  const data = {
    name,
    id,
  };

  return data;
}

console.log(getStudentDetailsAll("samik", 4740));

let username: string;
username = "samik";

console.log(username);

const first_sym = Symbol("sym");
const second_sym = Symbol("sym");

//  getting the description of the symbol
console.log("The description of the first_sym is " + first_sym.description);

let details: {
  id: number;
  name: string;
  role: [number, string];
};

details = {
  id: 1,
  name: "samik",
  role: [1, "admin"],
};

console.log(details);

let tupleExample: [number, string] = [1, "samik"];

interface Student {
  name: string;
  address: string;
}

function getStudent(): Student {
  const data = {
    name: "samik",
    address: "swayambhu",
  };

  return data;
}

const getStudents = (): Student => {
  const data = {
    name: "samik",
    address: "swayambhu",
  };

  return data;
};

console.log(getStudents());





