// Method ?

const someObject = {
  name: "🥔",
  type: "Yukon Gold",
};

// What is a method?
// A function inside an object
// Function as a property
// A function in a specific context

const somePotato = {
  name: "🥔",
  type: "Yukon Gold",
  bark: function () {
    console.log("...");
  },
};

const someDog = {
  name: "Rex",
  type: "Chihuaha",
  bark: function () {
    console.log("Waf waf");
  },
};

somePotato.bark();
someDog.bark();

const values = Object.values(someDog);
console.log(values);

const keys = Object.keys(someDog);
console.log(keys);
