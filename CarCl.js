class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Getter to get speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter to set speed in km/h based on input in mi/h
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

    // Method to increase speed by 10 km/h
    accelerate() {
        this.speed += 10;
        return this.speed;
    }

    // Method to decrease speed by 5 km/h
    brake() {
        this.speed -= 5;
        return this.speed;
    }
}

// Create a new car instance
const car3 = new CarCL('Ford', 120);
console.log("-------------------------------------------------------------------");
console.log(`Data Car 3: ${car3.make} going at ${car3.speed} km/h`);
console.log(`Speed in mi/h: ${car3.speedUS.toFixed(2)} mi/h`);
// Use setter to update speed in mi/h and check km/h speed
car1.speedUS = 75;
console.log(`New speed after setting in mi/h: ${car3.speed} km/h`);
// Test accelerate and brake methods
console.log(`After accelerating: ${car3.accelerate()} km/h`);
console.log(`After braking: ${car3.brake()} km/h`);
console.log("-------------------------------------------------------------------");