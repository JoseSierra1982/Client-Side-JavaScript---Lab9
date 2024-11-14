// Constructor Function
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
       this.speed+=10;
       return this.speed; 
    }
    brake(){
        this.speed-=5;
        return this.speed; 
     }
}  
  // We can create as many instances of our Rectangle objects as we want using the `new` keyword
  const car1 = new Car('Audi', 100);
  const car2 = new Car('Chevrolet', 85);
  
  console.log("--------------------------------------------------------------------");
  console.log('Data Car 1: '+ car1.make + ' is going at ' + car1.accelerate() + 'km\\h');
  console.log('Data Car 2: '+ car2.make + ' is going at ' + car2.accelerate()+ 'km\\h');
  console.log('Data Car 1: '+ car1.make + ' is going at ' + car1.brake()+ 'km\\h');