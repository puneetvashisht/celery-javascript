function Foo(){
    console.log('fooo function');
}

console.log(Foo.prototype)

var f1 = new Foo();
var f2 = new Foo();

console.log(f1.__proto__);


function Employee(name, age){
    this.name = name;
    this.age = age;
}
Employee.prototype.getDetails = function(){
    return `Name: ${this.name}, Age: ${this.age}`;
}
console.log(Employee.prototype)

var e1 = new Employee('Ravi', 34);
console.log(e1.getDetails());

var e2 = new Employee('Priya', 34);
console.log(e2.getDetails());


var obj1 = new Object();
obj1.__proto__.commonFunction = function(){
    console.log('common function');
}
