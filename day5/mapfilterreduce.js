const numbers = [1, 2, 3, 4, 5];

// Map - Transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter - Select elements
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Reduce - Aggregate values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15



  
