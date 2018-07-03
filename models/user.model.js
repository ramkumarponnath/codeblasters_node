const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let UserSchema = new Schema({    
    UserId : {type: String, required: true, max: 100},
    FirstName : {type: String, required: true, max: 100},
    LastName : {type: String, required: true, max: 100},
    Email : {type: String, required: true, max: 100},
    ContactNumber : {type: String, required: true, max: 100},
    Organization : {type: String, required: true, max: 100},
    Role : {type: String, required: true, max: 100},
    Active :{type: String, required: true, max: 100},
    Password : {type: String, required: true}
});
UserSchema.pre('save',(next)=>{
    var user = this;
    bcrypt.hash(user.Password,10,(err,hash)=>{
        if(err){
            return next(err);
        }
        user.Password = hash;
        next();
    });
});
var User = mongoose.model('users', UserSchema);
module.exports = User;