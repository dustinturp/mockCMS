const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        manager: {
            type: DataTypes.STRING,
            allowNull: false,
    
        }

    },
    {
    sequelize,
    modelName: 'employee'
    }
);

module.exports = Employee;