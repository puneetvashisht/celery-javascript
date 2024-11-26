var employee = {
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000
}


const employeeStr = JSON.stringify(employee)
console.log(employeeStr);



console.log(typeof(employeeStr));

const employeeObj = JSON.parse(employeeStr);
console.log(employeeObj);
console.log(typeof(employeeObj));

