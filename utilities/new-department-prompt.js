const inquirer = require('inquirer');

const newDepartmentPrompt = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'new_dep_name',
            message: 'Please enter a department name',
            validate: departmentName => {
                if (departmentName) {
                  return true;
                } else {
                  console.log('Please enter a department name!');
                  return false;
                }
              }
        }
    ])
}

module.exports = newDepartmentPrompt()