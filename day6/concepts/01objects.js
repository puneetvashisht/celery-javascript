var employee = new Object();

console.log(employee);

var property = "name"
employee[property] = "Ravi"
employee["age"] = 34

console.log(employee);

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);

employee.address = new Object();
employee.address.street = "123 Main St"
employee.address.city = "New York"

console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);

console.log(employee["address"]["street"]);


// prefer object literal syntax to create objects
var Ravi = {
    name: "Ravi",
    age: 34,
    address: {
        street: "123 Main St",
        city: "New York"
    }
}

function sayHello(employee){
    console.log("Hello, my name is " + employee.name);
}

sayHello(Ravi);

sayHello({name: "Priya", age: 23})

Ravi.officeAddress = {
    street: "456 Park Ave",
    city: "Los Angeles"
}

console.log(Ravi);



