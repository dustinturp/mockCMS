const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Role");

//create associations
Department.belongsTo(Role, {
    foreignKey: 'department_id',
});

Role.belongsTo(Employee, {
    foreignKey:'role_id'
})

module.exports = {Department, Employee, Role}
