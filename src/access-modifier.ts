//access modifier: It maintains data security. (public, private , protected)

class BikashInfo {
  public number: string;
  private pin: number;
  private balance: number;
  protected history: any = [];

  //constructor:
  constructor(number: string, pin: number, balance: number) {
    this.number = number;
    this.pin = pin;
    this.balance = balance;
  }

  //method:
  getBalance(pin: number) {
    if (this.pin === pin) {
      return this.balance;
    }
    return `PIN is not matched`;
  }
}

const info1 = new BikashInfo("01719191911", 123, 5000);

// info1.balance = 0;
console.log(info1);

console.log(info1.getBalance(123))