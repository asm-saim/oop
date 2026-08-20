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
const bird = new Bird("Mekao");
bird.makeSound();

//Example2:
class Area {
  area(): number {
    return 0;
  }
}

//Circle:
class Circle extends Area {
  private _radius: number;

  constructor(radius: number) {
    super();

    this._radius = radius;
  }

  area(): number {
    return 3.1416 * this._radius * this._radius;
  }
}

//instance:
const findCircle = new Circle(5);
console.log(findCircle.area());

//rectangle:
class Rectangle extends Area {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  area(): number {
    return this.height * this.width;
  }
}

//instance:
const findRectangle=new Rectangle(5,5);
console.log(findRectangle.area())