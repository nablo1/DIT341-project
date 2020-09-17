var mongoose = require('mongoose');
var schema = mongoose.schema;

var orderSchema = new mongoose.Schema({
    items: [{type:mongoose.Schema.Types.ObjectId, ref: 'Item', required: true}],
    time: {type: Date, default: Date.now},
    //customer:[{type:mongoose.Schema.Types.ObjectId, ref:'Customer'}],  do we need a reference here
    totalPrice:{type:Number}
});

module.exports = mongoose.model('Order', orderSchema);