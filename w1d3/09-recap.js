// Build a structure containing at least 5 properties of a mug,
// and group more than two mugs together

// Mug object will have 5 properties (color, size, material, capacity, isClean)
const mug = {
  color: "blue",
  size: "huge",
  material: "aerogel",
  capacity: 1500,
  isClean: false,
};
const ayan = {
  color: "green",
  size: "medium",
  material: "glass",
  capacity: 500,
  isClean: true,
};
const temi = {
  color: "purple",
  size: "big",
  material: "metal",
  isClean: true,
  capacity: 750,
};
const omotunde = {
  color: "purple",
  size: "medium",
  material: "ceramic",
  capacity: 1000,
  isClean: true,
};
// List of mugs (independent) [mug, mug, mug]
const listOfMugs = [mug, ayan, temi, omotunde];

// List all of the colors of the stored mugs

// getMugColors because we want to get the color of the mugs
// IN: Array (listOfMugs)
// OUT: Array (colors)

// HOW: Do we get the color of the mug (mug.color)
// HOW: Do we get every mug one by one in the list (for..of, c for)
// HOW: Where to store the temporary data (in a array, buffer)

const getMugColors = function (listOfMugs) {
  const colorBuffer = [];
  for (const mug of listOfMugs) {
    const color = mug.color;
    if (!colorBuffer.includes(color)) {
      colorBuffer.push(color);
    }
  }
  return colorBuffer;
};

const colors = getMugColors(listOfMugs);
console.log(colors);

// 0- Make a baby plan (extract IN - OUT - HOW)
// 1- Declare the structures
// 2- Write the code! (it can be ugly it's okay)

// Objects!

// Should we use dot notation or square bracket when accessing values?
// Depends! [] when we have a variable holding the key, dot notation if we know the name directly

// Why can we change an object even if we assign it to a const?
// What is inside the variable is not the object, but a path (reference) to the object

// How de we assign new keys to objects?
// The same way that we do when we change the value of a key
const someObj = { a: 1 };
someObj.b = 5; // Creates
someObj.a = 10; // Modifies
delete someObj.a; // Deletes

someObj.a; // Reading
