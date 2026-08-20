//polymorphism:
class Animal {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  makeSound(): void {
    console.log("All animal make sound");
  }
}

//instance:
const animalResponse = new Animal("Cow");
console.log(animalResponse);
animalResponse.makeSound();

class Cat extends Animal {
  makeSound(): void {
    console.log("Meoww");
  }
}

const cat = new Cat("Cat");
cat.makeSound();

class Bird extends Animal {
  makeSound(): void {
    console.log("kuhu kuhu");
  }
}
//making instance:
const bird= new Bird("Mekao")
bird.makeSound()