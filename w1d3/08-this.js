// This !

const poulet = {
  name: "Chickenator",
  type: "Robot chicken",
  sayHi: function () {
    console.log(`Hi my name is ${this.name}`);
  },
};

const paul = {
  name: "Not Paul",
  sayHi: function () {
    console.log(`Hi my name is ${this.name}`);
  },
  pets: [
    {
      name: "Bob the fish",
      sayHi: function () {
        console.log(`Hi my name is ${this.name}`);
      },
    },
  ],
};
paul.pets[0].sayHi();
poulet.name = "A little chicken that did nothing wrong";

poulet.sayHi();

// Arrow function (this)

const fctExpressionClassic = function () {
  // ...
};

const fctExpressionArrow = () => {
  // ...
};
