

const person = {name:"Ravi", age: 34, city:"Tokyo"}

console.log(person.name)
console.log(person.city) // Output: Tokyo


// Destructuring assignment
const {name, age} = person;

console.log(name); // Output: Ravi
console.log(age); // Output: 34

const color = ["red", "green", "blue"]

// Array destructuring
const [firstColor, ,secondColor] = color;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green