var mongoose = require('mongoose');
var schema = mongoose.schema;

var orderSchema = new mongoose.Schema({
    items: [{type:mongoose.Schema.Types.ObjectId, ref: 'Item', required: true}],
    user : {type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Order', orderSchema);