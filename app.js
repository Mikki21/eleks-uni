import Vehicle from "./ht-js4/class/vehicle.js"
import Car from "./ht-js4/class/car.js"
import Truck from "./ht-js4/class/truck.js"

// Class entity creation

const Jigyli = new Car("Jigyli","1998","66")
const Man = new Truck("Man","2012","180")
const justVehicle = new Vehicle("Mini Cooper S","2012","70")

// Class entity creation using static method

const defaultCar = Car.getDefaultCar();
const getDefaultTruck = Truck.getDefaultTruck();


//Call fathers method
Man.displayInfo();

//Call overrided method
Jigyli.displayInfo();
