class Calculator {
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    add() {
      return this.num1 + this.num2;
    }
  
    sub() {
      return this.num1 - this.num2;
    }
  
    mul() {
      return this.num1 * this.num2;
    }
  
    divide() {
      if (this.num2 === 0) {
        console.error("Cannot divide by zero");
        return undefined; // or throw an error
      }
      return this.num1 / this.num2;
    }
  }
  
  const calc = new Calculator(4, 5);
  
  console.log(calc.add());
  console.log(calc.sub());
  console.log(calc.mul());
  console.log(calc.divide());
  