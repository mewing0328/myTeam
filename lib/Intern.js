const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, addlInfo, role) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.addlInfo = addlInfo;
        this.role = role;
    }
    
    // addlInfo is school
    getSchool() {
        return this.addlInfo;
    }

    // overridden to return 'Intern'
    getRole() {
        return this.role;
    }

};

module.exports = Intern;
