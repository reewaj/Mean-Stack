const express= require('express');
const app= express();
const bodyParser=require('body-parser');
const registerRoutes= require('../routes/register');
const mongoose= require('mongoose');
 


mongoose.connect('mongodb://localhost:27017/digital')
.then(()=>console.log('connected to mongoDB'))
.catch((err)=> console.error('could not connect to mongoDB '));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS, PUT'
    );
    next();
});

app.use('/api',registerRoutes);
module.exports=app;