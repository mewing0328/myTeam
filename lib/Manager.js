/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/

const Employee = require('./Employee');
//const { manager } = require('./inquirerQuestions');

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

    //defaults to Manager
    getRole() { 
        return this.role;
    }

};

module.exports = Manager;