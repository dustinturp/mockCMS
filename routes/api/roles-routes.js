
const router = require('express').Router();
const Role = require('../../models');


// get all roles
router.get('/roles', (req, res) => {
    Role.findAll({
        attributes: ['id', 'title', 'salary', 'department_id']
    })
});

//add role
router.post('/role', (req, res) => {});

