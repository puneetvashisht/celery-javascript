var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Salary: ").concat(this.salary));
    };
    Employee.prototype.raiseSalary = function (percentage) {
        this.salary += (this.salary * percentage) / 100;
    };
    return Employee;
}());
var emp1 = new Employee("Ravi", 34344);
// emp1 = "test"
emp1.displayDetails();
// emp1.xyz();
