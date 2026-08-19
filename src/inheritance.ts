//super set
class User {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
}

//child set:

class Student extends User {
  private _roll: number;

  constructor(name: string, age: number, email: string, roll: number) {
    super(name, age, email);
    this._roll = roll;
  }
}

const user1 = new User("Khabib", 23, "khabib@gmail.com"); //instance

const user2 = new Student("Islam", 273, "makachev@gmail.com", 25); //instance
console.log(user2)