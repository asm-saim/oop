//Tea Shop:

class TeaShop {
  name: string;
  soldItems: any = [];

  //constructor:
  constructor(name: string) {
    this.name = name;
  }

  //method:
  buy(name: string, price: number) {
    this.soldItems.push({ name, price });
  }

  //method:
  total() {
    const sum = this.soldItems.reduce((acc, item) => acc + item.price, 0);
    return sum;
  }
}

let shopName = new TeaShop("Tonger Dokan");

shopName.buy("Tea", 10);
shopName.buy("Biscuit", 5);


console.log(shopName);
console.log(shopName.total());
