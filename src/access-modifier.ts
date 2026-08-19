//access modifier: public, private , protected

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
}

const info1 = new BikashInfo("01719191911", 23334, 5000);

// info1.balance = 0;
console.log(info1);
