const e = require('express');
var express = require('express');
const { remove } = require('../models/order');
var router = express.Router();
var Order = require('../models/order');
var Item = require('../models/item');
var mongoose = require('mongoose');

router.post('/api/orders', function(req, res, next) {
    Item.find( {'_id' : {$in : req.body.items} }, function (err, items) {
        if (!items) {
            return res.status(404).json({
              message: "One or more of the items are not found"
            });
        }
    });
    var order = new Order(req.body);
    order.save( function(err, order) {
        if (err) { return next(err); }
       res.json(order)
    });
});

router.post('/api/orders/:id/items', function(req, res, next) {
    var item = new Item(req.body);
    item.save(function(err, item) {
        if (err) { return next(err); }
       res.json(item);
    });

   /* return Order.findByIdAndUpdate(
      req.params.id,
      { $push: { "items": item._id } },
      { new: true, useFindAndModify: false }
  );*/

  Order.findByIdAndUpdate(
    req.params.id,
    {$push: {"items":{_id: item._id}}},
    {safe: true, upsert: true, new : true},
    function(err, model) {
        console.log(err);
    }
);
    
    
    
});

router.get('/api/orders', function(req, res, next) {
    Order.find().populate('items').exec()
    .then(orders => {
          res.status(200).json(orders)
    }).catch(err => {
        res.status(500).json({ error: err});
      });
});

router.get('/api/orders/:id', function(req, res, next) {
    Order.findById(req.params.id).populate('items').exec()
    .then(order => {
        if (!order) {
            return res.status(404).json({
              message: "Order not found"
            });
          }
          res.status(200).json(order)
    }).catch(err => {
        res.status(500).json({ error: err});
      });
});

router.get('/api/orders/:id/items', function(req, res, next) {
    Order.findById(req.params.id).select('items').populate('items').exec()
    .then(order => {
        if (!order) {
            return res.status(404).json({
              message: "Order not found"
            });
          }
          res.status(200).json(order)
    }).catch(err => {
        res.status(500).json({ error: err});
      });
});

router.get('/api/orders/:id/items/:itemId', function(req, res, next) {
    Item.findById(req.params.itemId).exec()
    .then(item => {
        if (!item) {
            return res.status(404).json({
              message: "Item not found"
            });
          }
          res.status(200).json(item)
    }).catch(err => {
        res.status(500).json({ error: err});
      });
});

router.delete('/api/orders/:id', function(req, res, next) {
    Order.findByIdAndRemove(req.params.id, req.body, function (err, order) {
        if (err) { return next(err); }
        if (!order) {
            return res.status(404).json({'message': 'order not found'});
        }
            res.json({'message': 'order deleted'});
      });
         
});

router.delete('/api/orders', function(req, res, next) {
    Order.deleteMany(function(err, orders) {
        if (err) { return next(err); }
        res.json({'message':'Items are now deleted.'});
    })
  });




module.exports = router;