const name = "Daneal";
const age = 23;
const email = "dan@gmail.com";

const name2 = "Salma";
const age2 = 26;
const email2 = "sal@gmail.com";

//This method is not effective, we have to group related data in a single place.
//Thats where, object concept comes in.

//concept1:
const daneal = {
  name: "Daneal",
  age: 23,
  email: "dan@gmail.com",
};

const salma = {
  name: "Salma",
  age: 20,
  email: "sal@gmail.com",
};

//But still the problem is not solved yet, if we forget the email, every person needed to use same procedure, but we can not do it outside the object, cause it will give us the same problem.

//concept2:
const studentInfo = (
  name: string,
  age: number,
  email: string,
  marks: number,
) => {
  const obj = {
    name,
    age,
    email,
    marks,
    forgetPass() {
      //100 line
    },
  };
  return obj;
};

const Alice = studentInfo("Alice", 24, "alice@gmail.com", 98);
const JK = studentInfo("JK", 23, "jk@gmail.com", 58);

// easy access: no security.
Alice.email = "";

console.log(Alice, JK);
