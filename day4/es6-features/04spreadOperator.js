
// Spread operator
const arr1 = [1,2,3];
const arr2 = [...arr1, 4,5,6];

console.log(arr2);

const obj1 = {name: "Ravi", age: 34}
const obj2 = {city: "Tokyo",...obj1};
obj2.department = "Finance"

console.log(obj2);

let totalSum = 0;
// Rest operator
function sum(x, ...numbers) {
    console.log(numbers);
    for(n in numbers){
        console.log(n);
        totalSum += parseInt(n);
    }
    console.log(n);
    
    return totalSum;
}

console.log(sum(1,2,3,4,5,6));


// Default parameter
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Puneet");
greet();




