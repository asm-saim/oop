//class:
class Student {
  name: string;
  roll: number;
  email: string;

  //constructor: special method (It is a type of function )
  constructor(name: string, roll: number, email: string) {
    this.name = name;
    this.roll = roll;
    this.email = email;
  }

  //method:
  getInfo(): string {
    const info = `Name: ${this.name} \nEmail: ${this.email}`;
    return info;
  }
}

//Now instantiate the class, to get instance(OBJECT)
let alice = new Student("Alice", 23, "alice@gmail.com"); //instantiate
let jk = new Student("jk", 34, "jk@gmail.com"); //instantiate
console.log(alice, jk);
console.log(alice.getInfo());
