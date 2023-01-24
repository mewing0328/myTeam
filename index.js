/* 
TODO LIST: Remove as you complete
 - build out the askManagerInfo function: need it to 
   -- what is name, id, and email of the manager
   -- do they want to add another member of team or finished
 - build out functions for asking questions for each role
 - build out functions to create a html card to append to body of index.html
 
*/

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/inquirerQuestions");
const generateHTML = require('./src/generateTeamMember');

const inquirer = require("inquirer");
const inquirerQuestions = require("./lib/inquirerQuestions");
const generateTeamMember = require("./src/generateTeamMember");
const { writeFile } = require('fs').promises;

// AS A manager, I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

function askManagerInfo () {
  inquirer.prompt(inquirerQuestions.manager)
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.addlInfo
      );
  console.log (manager); //delete this later
  });


  // .then((theManager) => writeFile('employeeCard.html', generateTeamMember(theManager)))
  // .then(() => console.log('Your profile is created! Now, let us build out your team!'))
  // .catch((err) => console.log(err));
};




function init(){
  // Due to User Story, I need to get manager info first and then go from there
  console.log("Hello Manager! Lets get started building your team. You will be asked some questions. Please answer all questions.")
  askManagerInfo()
};

init();

