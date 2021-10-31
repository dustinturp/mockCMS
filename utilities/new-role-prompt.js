const inquirer = require('inquirer');

const newRolePrompt = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'role_name',
            message: "Enter the role name",
            validate: role_name => {
                if (role_name) {
                  return true;
                } else {
                  console.log('Please enter a name for the role!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'role_salary',
            message: "Enter the role salary. ",
            validate: role_salary => {
                if (role_salary) {
                  return true;
                } else {
                  console.log('Please enter the role salary! ');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'role_dep',
            message: "Enter the employee's role",
            validate: role_dep => {
                if (role_dep) {
                  return true;
                } else {
                  console.log('Please enter a department name. ');
                  return false;
                }
              }
        }
       
    ])
}

module.exports = newRolePrompt()