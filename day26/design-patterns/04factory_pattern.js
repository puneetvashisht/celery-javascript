class Car {
    constructor(model) {
      this.model = model;
    }
  
    drive() {
      console.log(`${this.model} is driving.`);
    }
  }
  
  class Truck {
    constructor(model) {
      this.model = model;
    }
  
    haul() {
      console.log(`${this.model} is hauling.`);
    }
  }
  
  class VehicleFactory {
    createVehicle(type, model) {
      if (type === "car") {
        return new Car(model);
      } else if (type === "truck") {
        return new Truck(model);
      }
    }
  }
  
  const factory = new VehicleFactory();
  const myCar = factory.createVehicle("car", "Tesla Model 3");
  const myTruck = factory.createVehicle("truck", "Ford F-150");
  
  myCar.drive(); // Tesla Model 3 is driving.
  myTruck.haul(); // Ford F-150 is hauling.
  