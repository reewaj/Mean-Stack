const mongoose= require('mongoose');
const uniqueValidator= require('mongoose-unique-validator');

var userSchema= mongoose.Schema({
    // name:{type:String},
    // username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
});

//userSchema.plugin(uniqueValidator);
const User=module.exports=mongoose.model('user',userSchema);

// //to get user by id
// module.exports.getUserById = function(id, callback){
//     User.findById(id,callback);
// } 
// //to ger user by username
// module.exports.getUserByUsername= function(username, callback){
//     const query = {username: username}
//     User.findOne(query, callback);
// }

// module.exports.addUser= function(user, callback){
//     bcrypt,genSalt(10,)
// }