var express = require('express');
const { remove } = require('../models/item');
var router = express.Router();

var Item = require('../models/item');

router.post('/api/items', function(req, res, next) {
    var item = new Item(req.body);
    item.save(function(err, item) {
        if (err) { return next(err); }
        res.status(201).json(item);
    });
});

router.get('/api/items', function(req, res, next) {
    Item.find(function(err, items) {
        if (err) { return next(err); }
        res.json({'items': items });
    })
});

router.get('/api/items/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findById(id, function(err, item) {
        if (err) { return next(err); }
        if (item === null) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(item);
    });
});


router.put('/api/items/:id', function(req, res, next) {
    var id = req.params.id;
    Item.findByIdAndUpdate({_id: id}, req.body, {new:true})
    .then(function (item) {
        res.json(item); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});

router.patch("/api/items/:id", (req, res, next) => {
    var id = req.params.id;
    var updates = {};
    for (var operations of req.body) {
      updates[operations.propName] = operations.value;
    }
    Item.update({ _id: id }, { $set: updates })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


router.delete('/api/items', function(req, res, next) {
    Item.deleteMany(function(err, items) {
        if (err) { return next(err); }
        res.json({'message':'Items are now deleted.'});
    })
});

router.delete('/api/items/:id', (req, res, next) => {
    var id = req.params.id;
    Item.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;
