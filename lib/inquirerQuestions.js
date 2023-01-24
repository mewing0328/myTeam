/* 
TODO LIST: Remove as you complete
 - build out the inquirer for the manager ?s
 - build out the inquirer for the engineer ?s
 - build out the inquirer for the intern ?s

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
};