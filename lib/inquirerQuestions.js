/* 
TODO LIST: Remove as you complete
 - add validate
*/

// All the questions for the inquirer are in this js file for easy access if edits needed

module.exports = {
    role : [
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?", 
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ],
    whatNext : [
        {
            type: 'list',
            name: 'next',
            message: "Do you want to add another employee?", 
            choices: ['Yes', 'No'],
        }
    ],
    manager : [
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?", 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'addlInfo',
            message: "What is the manager's office number?", 
        },
    ],
    engineer : [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?", 
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
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?", 
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