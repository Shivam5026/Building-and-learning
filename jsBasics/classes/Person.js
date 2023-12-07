// Defining a class named 'Person'
class Person {
    // Constructor method - runs when an instance of the class is created
    constructor(name, age) {
      // Properties of the class
      this.name = name;
      this.age = age;
    }
  
    // Method of the class
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the class
  const person1 = new Person('John Doe', 30);
  
  // Accessing properties and calling a method
  console.log(person1.name); // Output: John Doe
  person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.