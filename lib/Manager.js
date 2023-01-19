/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
 - build out the inquirer for the manager ?s
*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }

};

module.exports = Manager;