const express= require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Suser= require('../model/Users'); 
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check');


router.post('/register',(req,res,next)=>{
bcrypt.hash(req.body.password, 10)
.then(hash=>{
    const user= new Suser({
        email: req.body.email,
        password: hash
});
user.save()
.then(result=>{
    res.status(201).json({
        message: 'user created',
        result: result
    });
})
.catch(err=>{
    res.status(500).json({
        error:err
    });
})
});
});

router.post('/login',(req,res,next)=>{
    let tempUser;
Suser.findOne({email: req.body.email })
.then(user =>{
    if(!user){
        return res.staus(401).json({
            message: 'Auth failed'
        });
    }
    tempUser= user;
    return bcrypt.compare(req.body.password, user.password);

})
.then(result=>{
    if(!result){
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
    const token = jwt.sign({email: tempUser.email, userId: tempUser.id}, 
        'this is secrete to make mote string');
        res.status(200).json({
            token: token
        });
})

.catch(err =>{
    return res.status(401).json({
        message: 'Auth failed'
    })
})
 
});

module.exports= router; 