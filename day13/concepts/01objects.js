var employee1 = {
    name: 'Ravi',
    age: 34,
    department: 'IT',
    getDetails: function(){
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }
}


var employee2 = {
    name: 'Priya',
    age: 22,
    department: 'Finance',
    getDetails: function(){
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }
}



console.log(employee1);
console.log(employee1.getDetails());
console.log(employee2);
console.log(employee2.getDetails());