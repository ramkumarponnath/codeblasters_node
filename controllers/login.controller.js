var bodyParser = require('body-parser');
const User = require('../models/user.model');
exports.register = (req,res)=>{
    const UserId = req.body.UserId;
    const Password = req.body.Password;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const ContactNumber = req.body.ContactNumber;
    const Organization = "IT";
    const Role = "USER";
    const Active = "Yes";
    let userData = {
        UserId:req.body.UserId,
        Password:req.body.Password,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email,
        ContactNumber: req.body.ContactNumber,
        Organization: req.body.Organization,
        Role:"USER",
        Active:"Yes"
    };
    User.create(userData,(err,user)=>{
        if(err){
            return next(err);
        }
        else{
            return res.redirect('/profile');
        }
    });
};
exports.login = (req,res)=>{
    UserSchema.statics.authenticate = function (email, password, callback) {
        User.findOne({ Email: email })
          .exec(function (err, user) {
            if (err) {
              return callback(err)
            } else if (!user) {
              var err = new Error('User not found.');
              err.status = 401;
              return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
              if (result === true) {
                return callback(null, user);
              } else {
                return callback();
              }
            })
          });
      }
};
exports.profile = (req,res)=>{
    return res.send('GET profile');
};