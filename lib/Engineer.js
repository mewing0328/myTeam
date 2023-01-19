/* 
TODO LIST: Remove as you complete
 - Create a Jest test file
 - add additional properties for Engineer constructor
 - build out the inquirer for the engineer ?s
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        // call the superclass constructor to 
        // initialize the name, id, and email
        super(name, id, email);
    }

}

module.exports = Engineer;

/*

github—GitHub username

getGithub()

getRole()—overridden to return 'Engineer'

*/