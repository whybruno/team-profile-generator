// Declares a new class named "Employee"
class Employee {
  // Defines the constructor method, which is called whenever a new "Employee" object is created
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Defines a method named "getName"
  getName() {
    return this.name;
  }
  // Defines a method named "getId"
  getId() {
    return this.id;
  }
  // Defines a method named "getEmail"
  getEmail() {
    return this.email;
  }
  // Returns the string "Employee", indicating the generic role of the object
  getRole() {
    return 'Employee';
  };
};

// Exports the "Employee" class as the default export of the module
module.exports = Employee;
