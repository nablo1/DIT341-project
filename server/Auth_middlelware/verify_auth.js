var jwt = require('jsonwebtoken');

module.exports = function(res,req,next){
    try {
        var token = req.headers.autherization.spit(" ")[1];
        var decoded = jwt.decode(token, process.env.JWT_KEY||'KEY');
        req.customerData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:'Auth has failed'});
    }
    
}