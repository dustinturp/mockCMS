const  Sequelize  = require('sequelize');
require('dotenv').config();
const sequelize = require('sequelize');

const PORT = process.env.PORT || 3001;

// create connection to our database, pass in your MYSQL information

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_NAME,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;