/* 
TODO LIST: Remove as you complete

*/
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const inquirerQuestions = require("./lib/inquirerQuestions");
const generateTeamMember = require("./src/generateTeamMember");
const fs = require('fs/promises');

function askRole () {
  inquirer.prompt(inquirerQuestions.role)
  .then ((answer) => 
  {const role = answer.role; // taking the object and redefined
    if (role == 'Manager'){askManagerInfo();} // conditionals to determine what questions to ask
    else  if (role == 'Engineer'){askEngineerInfo();} 
    else {askInternInfo();}
  }
  );
};

// asks manager specific info then takes the answers to the class Manager and constructs an instance then appends to the html file
function askManagerInfo () {
  inquirer.prompt(inquirerQuestions.manager)
  .then((answers) => 
  {const manager = new Manager(answers.name, answers.id, answers.email, answers.addlInfo, 'Manager');
  async function appendToHtml() {
    try {
      const content = generateTeamMember(manager);
      await fs.appendFile('./dist/index.html', content);
    } catch (err) {
      console.log(err);
    }
  }
  appendToHtml();
  })
  .then(() => console.log('The profile is created!'))
  .catch((err) => console.log(err))
  .then(() => whatNext())
};

function askEngineerInfo () {
  inquirer.prompt(inquirerQuestions.engineer)
  .then((answers) => 
  {const engineer = new Engineer(answers.name, answers.id, answers.email, answers.addlInfo, 'Engineer');
  async function appendToHtml() {
    try {
      const content = generateTeamMember(engineer);
      await fs.appendFile('./dist/index.html', content);
    } catch (err) {
      console.log(err);
    }
  }
  appendToHtml();
  })
  .then(() => console.log('The profile is created!'))
  .catch((err) => console.log(err))
  .then(() => whatNext())
};

function askInternInfo () {
  inquirer.prompt(inquirerQuestions.intern)
  .then((answers) => 
  {const intern = new Intern(answers.name, answers.id, answers.email, answers.addlInfo, 'Intern');
  async function appendToHtml() {
    try {
      const content = generateTeamMember(intern);
      await fs.appendFile('./dist/index.html', content);
    } catch (err) {
      console.log(err);
    }
  }
  appendToHtml();
  })
  .then(() => console.log('The profile is created!'))
  .catch((err) => console.log(err))
  .then(() => whatNext())
};

// taking the object and redefined and then conditionals to determine what next
function whatNext () {
  inquirer.prompt(inquirerQuestions.whatNext)
  .then ((answer) => 
  {const next = answer.next; 
    if (next == 'No'){
      console.log("All done! Check out the html");
      async function endOfHtml() {
        try {
          await fs.appendFile('./dist/index.html', '</body></html>');
        } catch (err) {
          console.log(err);
        }
      }
      endOfHtml();
    } 
    else {askRole()}
  }
  );
};

function init(){
  console.log("Hello! Lets get started building the team. You will be asked some questions. Please answer all questions.")
  askRole()
};

init();