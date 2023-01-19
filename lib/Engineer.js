const Employee = require('./Employee');

class Engineer extends Employee {

}

const engineer = new Engineer();
engineer.printInfo();

/*

The other three classes will extend `Employee`.

In addition to Employee's properties and methods, Engineer will also have the following:

github—GitHub username

getGithub()

getRole()—overridden to return 'Engineer'

*/