const router = require('express').Router();
const Employee = require('../../models/Employee');


//  employee
router.post('/employee', (req, res) => {});

// update existing employee
router.put('/employees', (req, res) => {
    Employee.update(req.body, {

    })
    .then()
    .catch()
});


//  employee
router.post('/employee', (req, res) => {});

// update existing employee
router.put('/employees', (req, res) => {
    Employee.update(req.body, {

    })
    .then()
    .catch()
});
