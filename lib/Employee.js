/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/


// The Employee parent class is what came first that either becomes a manager, engineer, or intern

class Employee {
    // Save a reference for 'this' in 'this' as 'this' will change inside of inquirer
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods for employee
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
  
}

module.exports = Employee;