const e = require('express');
var express = require('express');
const { remove } = require('../models/items');
var router = express.Router();
var Employee = require('../models/employee');
var mongoose = require('mongoose');
var bcrypt = recquire('bcrypt');
var jwt = require('jsonwebtoken');



//Employee Login

router.post('/api/login', function (req, res, next){
    Employee.findOne({'Email': req.body.email}, function (err, employee){
        if (employee){
            var err = new Error('Email already exists! Please try again.');
            err.status = 409;
            return next(err);
        }else{
            bcrypt.hash(req.body.password, 10, function (err, hash){
                if(err) {
                    var err = new Error('Please change your password!');
                    err.status = 500;
                    return next(err);
                }else{
                    var employee = new Employee({
                        'Email': req.body.email,
                        'Password': hash
                    });
                    employee.save(function (err, employee){
                        if(err) {
                            var err = new Error('Please stick to the correct format!');
                            err.status = 500;
                            return next(err);
                        }else{
                            res.status(201).json(employee);
                        }
                    
                    })
                }
            })
        }
    })
})

// Get all employees

router.get('/api/employee', function (req, res, next) {
    Employee.find(function (err, employee) {
        if (err) { return next(err); }
        res.json({ 'Employees': employee});
        res.status(200);
    })
});

// Remove employee by id

router.delete('/api/employee/:id', function (req, res, next) {
    Employee.findOneAndRemove({ '_id': req.params.id }, function (err, employee) {
        if (err) {

            var err = new Error('Cannot remove the employe with id : ' + req.params.id);
            err.status = 500;
            return next(err);
        }
        console.log('Removed Employee!');
        res.status(200);
    });

});

