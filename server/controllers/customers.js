var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Customer = require('../models/customer');
var jwt = require('jsonwebtoken');
var Order = require('../models/order');
var Verify_auth = require('../Auth_middlelware/verify_auth');



router.post('/api/signup', function (req, res, next) {


    Customer.findOne({ 'email': req.body.email }, function (err, customer) {



        if (customer) {
            var err = new Error('Email already exists');
            err.status = 409;
            
            return next(err);

        } else {

            bcrypt.hash(req.body.password, 10, function (err, hash) {


                if (err) {
                   
                    var err = new Error("password cannot be set");
                    err.status = 500;

                    return next(err);


                } else {

                    
                    var customer = new Customer(
                        {
                            'email': req.body.email,
                            'password': hash
                        });

                    customer.save(function (err, customer) {
                        if (err) {
                           
                            var err = new Error("invalid Email");
                            err.status = 500;
                            return next(err);
                        } else {
                            
                            res.status(201).json(customer);
                            

                        }
                    });
                }

            });


        }



    });
});
router.get('/api/customer', function (req, res, next) {

    Customer.find(function (err, customer) {
        if (err) { return next(err); }
        res.json({ 'customers': customer});
        res.status(200);
    }).sort('email')
});

router.get('/api/login', function (req, res, next) {

    Customer.findOne({ 'email': req.body.email }, function (err, customer) {

        if (!customer) {
            
            var err = new Error('Authentication has failed');
            err.status = 401;
            return next(err);
        }
        bcrypt.compare(req.body.password, customer.password, function (err, result) {
            if (err) {
                var err = new Error('Authentication has failed');
                err.status = 401;
                return next(err);
            }

            if (result) {
                var token = jwt.sign(
                    {

                    'email': customer.email,
                    '_id': customer._id
                }, 
                process.env.JWT_KEY || "secret",//private key
                    { 
                        expiresIn: "1h" 
                    });



                return res.status(200).json({
                    message: 'Authentication successful',
                    token: token
                });
            }
            else {
                console.log('k2');
                var err = new Error('Authentication has failed');
                err.status = 401;
                return next(err);
            }

        });
    });
});

router.delete('/api/customers/:id', function (req, res, next) {
    Customer.findOneAndRemove({ '_id': req.params.id }, function (err, customer) {
        if (err) {

            var err = new Error('could not remove the customer of id ' + req.params.id);
            err.status = 500;
            return next(err);
        }
        console.log('removed');
        res.status(200);
    });

});

router.delete('/api/customers', function (req, res, next) {
    Customer.remove(function (err, customer) {
        if (err) {

            var err = new Error('could not remove customers');
            err.status = 500;
            return next(err);
        }

        console.log('removed');
        res.status(204);
    });

});

router.post('/api/customers/:id/order',function(req, res, next) {
    
// creating an empty order. then the customer starts adding items
        var order = new Order(req.body);
         order.save(function(err, order) {
             if (err) {
                var err = new Error("invalid info");
                err.status = 500;
                next(err);
             }else{
                res.status(201).json(order); 
             }
             
         });
     });

module.exports = router;