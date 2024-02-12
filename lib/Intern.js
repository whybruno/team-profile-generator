// Imports the Employee class from a file named Employee.js
const Employee = require('./Employee');
// Declares a new class named Intern that inherits from the Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
// Defines a method called getRole that returns the string "Intern"
  getRole() {
    return 'Intern';
  };
  // Defines a method named "getSchool"
  getSchool() {
    return this.school;
  };
};

// Exports the Intern class so that it can be used in other parts of your code
module.exports = Intern;
