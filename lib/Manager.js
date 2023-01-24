/* 
TODO LIST: Remove as you complete
*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, addlInfo, role) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.addlInfo = addlInfo;
        this.role = role;
    }

    //addlInfo is Office Number
    getOfficeNumber() { 
        return this.addlInfo;
    }

    // overridden to return 'Manager'
    getRole() { 
        return this.role;
    }

};

module.exports = Manager;