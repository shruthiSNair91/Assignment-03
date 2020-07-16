const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');

const Schema=mongoose.Schema;
var signUpSchema = new Schema ({
    name : String,
    email : String,
    pwd : String,
    confPwd : String
});

var signupdata=mongoose.model('signup',signUpSchema);
module.exports=signupdata;