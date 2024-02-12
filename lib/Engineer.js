// Imports the Employee class from a separate file named Employee.js
const Employee = require('./Employee');

// Defines a new class called Engineer that inherits from the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };
  // Defines a method called getRole that returns the string "Engineer"
  getRole() {
    return 'Engineer';
  };
  // Defines a method named "getGithub"
  getGithub() {
    return this.github;
  };
};

// Exports the Engineer class, making it available for other modules to import and use
module.exports = Engineer;
