const inquirer = require("inquirer");
const generateHTML = require('../src/generateHTML')
const {writeFile} = require('fs').promises;

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { getRandomValues } = require("crypto");

// The Employee parent class is what came first that either becomes a manager, engineer, or intern

class Employee {
    // Save a reference for 'this' in 'this' as 'this' will change inside of inquirer
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods for employee
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    
  }
  
}

module.exports = Employee;



  /*
getName() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                // validate: TODO validation here,
            }
        ])
        .then ((name) => writeFile('genHTML.html', generateHTML(name)))
        .catch((err) = console.log(err));
};





  // These are the functions that use 'this' to create 'this' profile card





 /*   
  getName() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                // validate: TODO validation here
            }
        ])
        .then((answer) => {
            const htmlPageContent = generateHTML(answer);

        })
  }

  getRole() {
  // —returns 'Employee'

  }


  getId() {

  }
  
  getEmail() {

  }
  


The first class is an Employee parent class with the following properties and methods:

name

id

email

getName()

getId()

getEmail()

getRole()—returns 'Employee'

*/