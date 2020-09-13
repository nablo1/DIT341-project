var mongoose = require('mongoose');
var schema = mongoose.schema;

var itemSchema = new mongoose.Schema({
    name: { type: String},
    price: {type: Number}
});

module.exports = mongoose.model('items', itemSchema);