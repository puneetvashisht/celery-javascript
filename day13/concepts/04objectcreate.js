var vehicle = {
    color: 'blue',
    start: function(){
        console.log(`The ${this.color} ${this.type} is starting`);
    }
}

// var car = {
//     model : 'Tata'
// }

//inheritance in js
// car.__proto__ = vehicle;
const car = Object.create(vehicle)

console.log(car);
car.model = "Tata";
// console.log(car.color);

