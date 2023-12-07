class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    displayInfo() {
      console.log(`The car is a ${this.year} ${this.make} ${this.model}`);
    }
  }
  
  let cars = [
    ["Honda", "suv", 2018],
    ["Civix", "ziak", 2021],
    ["Maruti", "xlr8", 2013],
    ["Honda", "mini", 2013],
  ];
  
  for (let i = 0; i < cars.length; i++) {
    let car = new Car(cars[i][0], cars[i][1], cars[i][2]);
    car.displayInfo();
  }
  