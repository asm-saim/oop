class Information {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

  //getter:
  get getValue() {
    return this._age;
  }

  //setter :
  set updateAge(value: number) {
    if (this._age < 0 || this._age > 100) {
      throw new Error("Age is not valid");
    }
    this._age = value;
  }
}

const user1 = new Information("Asad", 34, "asad@gmail.com");
user1.updateAge = 40;
console.log(user1);
console.log(user1.getValue);
