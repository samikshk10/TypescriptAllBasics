interface Interface1 {
  title: string;
  postedAt: Date;
  likes: number;
  sourceUrl(a: string): string;
}

type Type1 = {
  title: string;
  postedAt: Date;
  likes: number;
  sourceUrl(a: string): string;
};

type UserId = string;

const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "samik", age: 22 });

console.log(docOne.name);

// let students: object[] = [
//   {
//     name: "samik",
//     id: 5,
//   },
// ];

// students.map(<T>(item: T) => {
//   console.log(item.name);
// });

// Generic function that echoes an input value
function echo<T>(input: T): T {
  return input;
}

// Usage
const resultString: string = echo("Hello, TypeScript!"); // The type parameter T is inferred as string
const resultNumber: number = echo(42); // The type parameter T is inferred as number
