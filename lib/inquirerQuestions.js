/* 
TODO LIST: Remove as you complete
*/

// All the questions for the inquirer are in this js file for easy access if edits needed

module.exports = {
    role : [
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?", 
            choices: ['Engineer', 'Intern'],
        }
    ],
    whatNext : [
        {
            type: 'list',
            name: 'next',
            message: "Do you want to add another employee?", 
            choices: ['Yes', 'No', 'I need to start over.'],
        }
    ],
    manager : [
        {
            type: 'input',
            name: 'name',
            message: "What is your name?", 
            validate: function(answer){
                if(!isNaN(answer)) return "Only use letters.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your ID number?", 
            validate: function(answer){
                if(isNaN(answer)) return "Only use numbers.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'addlInfo',
            message: "What is your office number?", 
            validate: function(answer){
                if(isNaN(answer)) return "Only use numbers.";
                else return true;
            },
        },
    ],
    engineer : [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?", 
            validate: function(answer){
                if(!isNaN(answer)) return "Only use letters.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?", 
            validate: function(answer){
                if(isNaN(answer)) return "Only use numbers.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'addlInfo',
            message: "What is the engineer's GitHub username?", 
        },
    ],
    intern : [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?", 
            validate: function(answer){
                if(!isNaN(answer)) return "Only use letters.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?", 
            validate: function(answer){
                if(isNaN(answer)) return "Only use numbers.";
                else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'addlInfo',
            message: "Where did the intern go to school?", 
        },
    ],
};