class Vehicle{
    constructor(color){
       this.color = color
    }  
}

class Car extends Vehicle{
    constructor(color, model){
        super(color);
        this.model = model;
    }
}

var c1 = new Car('blue', 'Tata')
console.log(c1);