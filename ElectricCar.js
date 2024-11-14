class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed); // Call the parent class constructor
        this.charge = charge; // New property specific to EV
    }

    // Method to set the charge level
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery charged to ${this.charge}%`);
    }

    // Overridden accelerate method (polymorphism)
    accelerate() {
        this.speed += 20; // Increase speed by 20 km/h
        this.charge -= 1; // Decrease charge by 1%
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Create an instance of EV
const car4 = new EV('Tesla', 120, 23);

// Test the methods
car4.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
console.log(car4.make + ' is going at ' + car4.brake()+ 'km\\h');
car4.chargeBattery(90); // Battery charged to 90%
car4.accelerate(); // Tesla going at 155 km/h, with a charge of 89%
console.log("-------------------------------------------------------------");