const emptyObject = { value: 42 };
const otherObject = emptyObject;

console.log(emptyObject, otherObject);
emptyObject.value = 9001;
console.log(emptyObject, otherObject);
