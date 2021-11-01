import Vehicle from './vehicle.js';

export default class Car extends Vehicle {
  constructor(carModel, carYear, maxSpeed) {
    super(carModel, carYear, maxSpeed);
    this.type = 'car';
  }

  transportPeople() {
    console.log("I'm starting transporting passengers.");
  }

  // Overrided method fo father's class
  displayInfo() {
    console.log(`Car Name: ${this.model}
            Car Year: ${this.year};
            Car Max Speed: ${this.maxSpeed};`);
  }

  static getDefaultCar() {
    return new this('Volvo', '2018', '150');
  }
}
