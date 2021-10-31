//inquirer questions
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const { Employee } = require('../models') ///Employee

const mainPrompt = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'main_question',
            message: 'What would you like to do? ',
            choices: ['View All Departments',
            'View All Employees',
            'View All Roles',
            'Add a Department',
            'Add a role',
            'Add an employee',
            "Update an employ's role"]
        }

    ])
    .then((answer) =>{
        console.log("this is from prompts.js", answer)
    })
    // .catch(err)
}

// promptUser();

module.exports = mainPrompt()