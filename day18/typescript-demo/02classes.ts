class Employee{
    name: string;
    salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }

    raiseSalary(percentage: number){
        this.salary += (this.salary * percentage) / 100;
    }
}

let emp1 : Employee = new Employee("Ravi", 34344);
// emp1 = "test"
emp1.displayDetails();
// emp1.xyz();