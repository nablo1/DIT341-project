var mongoose = require('mongoose');
var schema = mongoose.schema;


var itemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: {type: Number, required: true},
    order: {type: mongoose.Schema.Types.ObjectId, ref :'Order'}
});


module.exports = mongoose.model('Item', itemSchema);