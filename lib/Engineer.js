/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, addlInfo, role) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
        this.addlInfo = addlInfo;        
        this.role = role;
    }
    
    // addlInfo is GitHub
    getGitHub() {
        return this.addlInfo;
    }

    // overridden to return 'Engineer'
    getRole() {
        return this.role;
    }

};

module.exports = Engineer;