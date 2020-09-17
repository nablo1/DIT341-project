var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    
    email: { type: String , unique:true, 
    match: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
    required:true},
    password: { type: String, required:true},
    order:[{type:mongoose.Schema.Types.ObjectId, ref:'Order'}]

   
   // pickupTime: {type: TimeRanges}
});

module.exports = mongoose.model('Customer', customerSchema);
