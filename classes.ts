class Person {
  name: string;
  isCool: boolean;
  friends: number;

  constructor(n: string, c: boolean, f: number) {
    this.name = n;
    this.isCool = c;
    this.friends = f;
  }

  sayHello() {
    return `Hi, my name is ${this.name}, ${this.friends} друзей`;
  }
}

const classPerson1 = new Person("Huis", false, 10);
const classPerson2 = new Person("Joze", true, 55);
