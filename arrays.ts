let ids: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ден", "Ввв", "Йцйц"];
let options: boolean[] = [true, false, false];

let books: object[] = [
  { name: "Алина в стране чуден", author: "Льюис Кэролл" },
  { name: "Владлена в хижине маратория", author: "Бурн Блэп" },
];

let arr: any[] = ["привет", 1, 2, 3, true];

ids.push(333);
// ids.push("222");
let person: (string | number | boolean)[] = ["денис", 1, true];
person[0] = 100;
// person[1] = { name: "Денис" };

let person2: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

person2 = {
  name: "Денис",
  location: "RU",
  isProgrammer: true,
};

// Псевдонимы типов

type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const myPerson1: PersonObject = {
  name: "Fedor",
  id: 1,
};

const myPerson2: PersonObject = {
  name: "Andrey",
  id: "4312312312312",
};
