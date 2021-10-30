const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}


Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true // check if this will break things
        }
    },
    {
    sequelize,
    modelName: 'role'
    }
);

module.exports = Role;