import Vehicle from './vehicle.js';

export default class Truck extends Vehicle {
  constructor(carModel, carYear, maxSpeed) {
    super(carModel, carYear, maxSpeed);
    this.type = 'truck';
  }

  transportPeople() {
    console.log("I'm starting transporting heavy container.");
  }

  static getDefaultTruck() {
    return new this('Volvo', '2018', '150');
  }
}
