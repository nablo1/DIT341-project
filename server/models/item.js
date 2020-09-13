var mongoose = require('mongoose');
var schema = mongoose.schema;

var itemSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: { type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('items', itemSchema);