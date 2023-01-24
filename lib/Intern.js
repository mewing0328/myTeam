/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/

const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, id, email, addlInfo) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.addlInfo = addlInfo;
    }
    
    //addlInfo is school
    getSchool() {
        return this.addlInfo;
    }

    // overridden to return 'Manager'
    getRole() {
        return 'Intern';
    }

};

module.exports = Intern;
