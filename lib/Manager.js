// Imports the Employee class from another file named Employee.js
const Employee = require('./Employee');

// Declares a new class called Manager that inherits from the previously imported Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  };
// Defines a method called getRole that returns the string "Manager"
  getRole() {
    return 'Manager';
  };
  // Defines a method named "getOfficeNumber"
  getOfficeNumber() {
    return this.officeNumber;
  };
};

// Exports the Manager class so that it can be used in other parts of the project
module.exports = Manager;
