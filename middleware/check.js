const jwt = require('jsonwebtoken');

module.exports =(req,res,next)=>{
    
    try{
        const token = req.header.authorization.split('')[1];
        jwt.verify(token,'this is secrete to make mote string');
        next();
    }catch(err){
        res.status(401).json({message: 'failed !'});
    }
}