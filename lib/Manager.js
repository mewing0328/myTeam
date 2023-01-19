const Employee = require('./Employee');

class Manager extends Employee {

}

const manager = new Manager();
manager.printInfo();

/*

The other three classes will extend `Employee`.

In addition to Employee's properties and methods, Manager will also have the following:

officeNumber

getRole()—overridden to return 'Manager'

*/