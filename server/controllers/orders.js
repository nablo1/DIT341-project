const e = require('express');
var express = require('express');
const { remove } = require('../models/order');
var router = express.Router();
var Order = require('../models/order');
var Item = require('../models/item');
var mongoose = require('mongoose');

router.post('/api/orders', function(req, res, next) {
    /*var items = req.body.items;
    var item = Item.findById(req.body.item.id);
    if(!item) {
        return res.status(404).json({'message' : 'No items were found'});
    }*/

    var order = new Order({
        _id: new mongoose.Types.ObjectId(),
        items: req.body.items,
        time: req.body.time
    });
    order.save( function(err, order) {
        if (err) { return next(err); }
       res.json(order)
    });
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




module.exports = router;