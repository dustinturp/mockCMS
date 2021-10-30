const router = require('express').Router();
const Department = require('../../models');
// const Department =  // add in the others
// get all departments
router.get('/departments', (req, res) => {
    Department.findAll({
        attributes: ['id', 'name']
    })
});


// add department
router.post('/departments', (req, res) => {});
