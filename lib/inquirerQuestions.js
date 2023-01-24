/* 
TODO LIST: Remove as you complete
 - build out the inquirer for the manager ?s
 - build out the inquirer for the engineer ?s
 - build out the inquirer for the intern ?s

*/

// All the questions for the inquirer are in this js file for easy access if edits needed

module.exports = {
    manager : [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name, Manager?', //the end user is the manager
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id, Manager?', //the end user is the manager
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email, Manager?', //the end user is the manager
        },
        {
            type: 'input',
            name: 'addlInfo',
            message: 'What is your office number, Manager?', //the end user is the manager
        },
    ]
};