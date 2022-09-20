function add1(a: number, b: number) {
  return a + b;
}

let test = add1(2, 5);

console.log(test);

let t1: string[] = ["a"];

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: "niti",
  age: 2,
};

let persons: Person[] = [
  {
    name: "niti",
    age: 2,
  },
  {
    name: "manish",
    age: 3,
  },
];

let bookData: string | number = "react";
bookData = 2;

function insertAtTheBeginning(arr: any[], value: any) {
  return [value, ...arr];
}

const demoArray = [1, 2, 3];

const result = insertAtTheBeginning(demoArray, -1);

result[0].split("");
