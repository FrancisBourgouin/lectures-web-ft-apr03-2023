const chicken = {
  name: "Pequeno pollo de la Pampa",
  height: 0.5,
  sound: "Pock pock",
};

const result = poulet.name;
const anotherResult = poulet["name"];

console.log(result, anotherResult);

const key = "sound";

// Dot notation (Literal like Drax)
poulet.key; // Will look for a key called key in the object

// Square bracket notation (evaluate the content in the square bracket)
// Works all the time, very useful with variables
poulet[key];
poulet["so" + "und"];

const weirdObject = {
  level1: {
    level2: {
      level3: {
        roof: {
          pool: true,
        },
      },
    },
  },
};

weirdObject.level1.level2.level3.roof.pool; // return true
weirdObject["level1"]["level2"]["level3"]["roof"]["pool"];
