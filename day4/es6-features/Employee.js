class Employee{
    constructor(name, age, department){
        this._name = name;
        this.age = age;
        this.department = department;
    }  
    // static defaultCompanyName(){
    //     return "ABC Corp";
    // }

    static companyName = "ABC Corp"

    set name (name){
        if(name != ""){
            console.log('setter for name called');
            this._name = name
        }
       
    }
    get name(){
        console.log('getter for name called');
        return this._name
    }

}

Employee.companyName = "XYZ Corp";

let emp1 = new Employee("Ravi", 34, "IT");
console.log(emp1);
emp1.name = "Rahul"
emp1.age = -34;
// console.log(emp1.name);
console.log(Employee.companyName);



let emp3 = new Employee("Priya", 22, "Finanace")
console.log(emp3);
console.log(Employee.companyName);

// console.log(Employee.name);

// console.log(emp1.defaultCompanyName);

let emp2 = {name: "Ravi", age: 34, department: "IT"}
console.log(emp2);




class Manager extends Employee{
    constructor(name, age, department, salary){
        super(name, age, department);
        this.salary = salary;
    }
}

let mng1 = new Manager( "Ravi",  34,  "IT",  34334.34);
console.log(mng1);