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
const inquirer = require("inquirer");
const generateHTML = require('../src/generateTeamMember')
const {writeFile} = require('fs').promises;

// AS A manager, I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
function init(){
  // Due to User Story, I need to get manager info first and then go from there
  askManagerInfo();
};

init();

