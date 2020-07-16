const express=require('express');
const mongoose=require('mongoose');
const SignupData=require('../model/signupModel');
const signuprouter=express.Router();

signuprouter.post('/signup',function(req,res){

    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var signupdata={
            name:req.body.signupdata.name,
            email:req.body.signupdata.email,
            pwd:req.body.signupdata.pwd,
            confpwd:req.body.signupdata.confpwd
    }
    var signup=SignupData(signupdata);
    signup.save();
});

signuprouter.post('/login',function(req,res){
     console.log('test login')   ;
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    SignupData.findOne({email:req.body.loginUser.email, pwd:req.body.loginUser.pwd})
    .then(function(user){
            res.send(user);
        console.log(user);
    })


});

module.exports=signuprouter;
