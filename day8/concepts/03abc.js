var employee = {
    name: "Ravi",
    salary: 34343.43,

    getDetails: function(){
        var employeeStr = `Name: ${this.name} Salary ${this.salary}`
        return employeeStr
    }
}

console.log(employee.getDetails());

var logDetails = function(x, y){
    console.log('X : ' + x );
    console.log('Y : ' + y );
    console.log('Log: ', this.getDetails());
    
}


// Benefits 
// 1. Change the 'this' in function 

// logDetails();
// bind - set this and call
var employeeLogDetails = logDetails.bind(employee);
employeeLogDetails("hi" ,"Ravi");
// var employeeLogDetails = logDetails.bind(employee2);
// employeeLogDetails("hi" ,"Ravi");

// call
logDetails.call(employee, "hello", "Ravi")

// apply
logDetails.apply(employee, ['hola!', 'Ravi'])



// Benefits 
// 2. Function borrowing 

var employee2 = {
    name: "Priya",
    salary: 55555.43,

    // getDetails is missing
}

console.log(employee.getDetails.apply(employee2))


// Benefits 
// 2. Function currying

function multiply(a, b){
    return a *b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByThree(4));
