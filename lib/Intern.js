/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
 - add additional properties for Intern constructor
 - build out the inquirer for the intern ?s
*/

const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name, id, email) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
    }

}

module.exports = Intern;

/*

school

getSchool()

getRole()—overridden to return 'Intern'

*/