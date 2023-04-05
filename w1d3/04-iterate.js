// Iterate!

// While, for..in, for..of, c-style for,
// .map / .forEach (tomorrow w/ callbacks)

const someObject = {
  name: "🥔",
  type: "Yukon Gold",
};

// Cannot use for..of with an object
// for (const value of someObject) {
//   console.log(value);
// }

for (const key in someObject) {
  console.log(key);
  console.log(someObject[key]);
}

// {
//   const key = 0
//   console.log(key);
//   console.log(someObject[key]);
// }
// {
//   const key = 1
//   console.log(key);
//   console.log(someObject[key]);
// }

const someObjectKeys = Object.keys(someObject);
for (const key of someObjectKeys) {
  console.log(key);
  console.log(someObject[key]);
}
