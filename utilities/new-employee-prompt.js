const inquirer = require('inquirer');

const newEmployeePrompt = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'emp_first_name',
            message: "Enter the employee's first name",
            validate: emp_first_name => {
                if (emp_first_name) {
                  return true;
                } else {
                  console.log('Please enter a name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'emp_last_name',
            message: "Enter the employee's last name",
            validate: emp_last_name => {
                if (emp_last_name) {
                  return true;
                } else {
                  console.log('Please enter a name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'emp_role',
            message: "Enter the employee's role",
            validate: emp_role => {
                if (emp_role) {
                  return true;
                } else {
                  console.log('Please enter a role');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'emp_manager',
            message: "Enter the employee's manager",
        }
    ])
}

module.exports = newEmployeePrompt()