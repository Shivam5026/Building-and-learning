class Student {
    constructor(name, grades) {
      this.name = name;
      this.grades = grades || []; // default to an empty array if grades is not provided
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverage() {
      let sum = 0;
      let avg = 0;
  
      if (this.grades.length === 0) {
        console.error("No grades available.");
        return undefined; // or throw an error
      }
  
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
  
      avg = sum / this.grades.length;
      return avg;
    }
  }
  
  let student1 = new Student("shivam", [45, 50, 65, 41]);
  console.log("Average grades of 4 subjects: " + student1.getAverage());
  
  student1.addGrade(60);
  console.log("Average grades of 5 subjects: " + student1.getAverage());
  