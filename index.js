/* 
TODO LIST: Remove as you complete
 - Add to function when user is done making cards. Append to the end of HTML file 
  </body>
  </html>
 - build out the askManagerInfo function: need it to 
   -- what is name, id, and email of the manager
   -- do they want to add another member of team or finished
 - build out functions for asking questions for each role
 - build out functions to create a html card to append to body of index.html
 - placeholder code for role. Figure out a better approach!!
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
//const fs = require('fs');

const fs = require('fs/promises');

// AS A manager, I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

function askRole () {
  inquirer.prompt(inquirerQuestions.role)
  .then ((answer) => 
  {const role = answer.role; // taking the object and redefined
    console.log(role); 
    if (role == 'Manager'){
      askManagerInfo();
      whatNext();
    } else {
      console.log("They are not a manager");
    }
  }
  );
};

function askManagerInfo () {
  inquirer.prompt(inquirerQuestions.manager)
  .then((answers) => 
  {const manager = new Manager(answers.name, answers.id, answers.email, answers.addlInfo, 'Manager');

  async function example() {
    try {
      const content = generateTeamMember(manager);
      await fs.appendFile('./dist/index.html', content);
    } catch (err) {
      console.log(err);
    }
  }
  example();

  }
  )
  .then(() => console.log('The profile is created!'))
  .catch((err) => console.log(err));
};

function whatNext () {
  
};

function init(){
  // Due to User Story, I need to get manager info first and then go from there
  console.log("Hello! Lets get started building the team. You will be asked some questions. Please answer all questions.")
  askRole()
};

init();

