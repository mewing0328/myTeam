const Employee = require('./Employee');

class Intern extends Employee {

}

module.exports = Intern;




/*

The other three classes will extend `Employee`.

In addition to Employee's properties and methods, Intern will also have the following:

school

getSchool()

getRole()—overridden to return 'Intern'

*/