const e = require('express');
var express = require('express');
var router = express.Router();
var Item = require('../models/item');

router.post('/api/items', function(req, res, next) {
    var item = new Item(req.body);
    item.save(function(err, items) {
        if (err) { return next(err); }
       res.json(items)
    });
});


router.get('/api/items', function(req, res, next) {
    var sort = req.query.sort_by;
    if(sort) {
      if(sort == 'price') {
        Item.find({}).sort('price').exec(function(err, items) { 
          if (err) { return next(err); }
          res.json(items);
        }); 
      } else {
        res.status(500).json({'message' : 'Can only sort items by their price'});
         }
    }
     else {
    Item.find(function(err, items) {
        if (err) { return next(err); }
        var filter = req.query.name; 
        if(filter) {
          res.json(items.filter(function (e) {
            return filter === e.name;
        }))
        } else {
          res.json({'items': items });
      }
    })
  }
});


router.get('/api/items/:id', function(req, res, next) {
    Item.findById(req.params.id, function(err, item) {
        if (err) { return next(err); }
        if (!item) {
            return res.status(404).json({'message': 'Item not found!'});
        }
        res.json(item);
    });
});

router.put('/api/items/:id', function(req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, item) {
    if (err) { return next(err); }
    if (!item) {
        return res.status(404).json({'message': 'Item not found!'});
    }
        res.json(item);
  });
  
});

router.delete('/api/items/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, req.body, function (err, item) {
    if (err) { return next(err); }
    if (!item) {
        return res.status(404).json({'message': 'Item not found!'});
    }
        res.json({'message': 'item deleted'});
  });
     
  
});

router.delete('/api/items', function(req, res, next) {
  Item.deleteMany(function(err, items) {
      if (err) { return next(err); }
      res.json({'message':'Items are now deleted.'});
  })
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

module.exports = router;
