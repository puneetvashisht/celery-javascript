"use strict";
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
    raiseSalary(percentage) {
        this.salary += (this.salary * percentage) / 100;
    }
}
let emp1 = new Employee("Ravi", 34344);
// emp1 = "test"
emp1.displayDetails();
// emp1.xyz();
