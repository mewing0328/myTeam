/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/

const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, id, email, school) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.school = school;
    }
    
    gitHub() {
        return this.school;
    }

    // overridden to return 'Manager'
    getRole() {
        return 'Intern';
    }

};

module.exports = Intern;
