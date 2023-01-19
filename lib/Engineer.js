/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.gitHub = gitHub;
    }
    
    gitHub() {
        return this.gitHub;
    }

    // overridden to return 'Manager'
    getRole() {
        return 'Engineer';
    }

};

module.exports = Engineer;