var mongoose = require('mongoose');
var schema = mongoose.schema;

var orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    items: [{type:mongoose.Schema.Types.ObjectId, ref: 'Item', required: true}],
    time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Order', orderSchema);