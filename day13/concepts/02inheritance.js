var vehicle = {
    color: 'blue',
    start: function(){
        console.log(`The ${this.color} ${this.type} is starting`);
    }
}

var car = {
    model : 'Tata'
}

//inheritance in js
car.__proto__ = vehicle;

