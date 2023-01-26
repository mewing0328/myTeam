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

  // overridden to return 'Employee'
  getRole() {
    return "Employee";
}
    
};

module.exports = Employee;