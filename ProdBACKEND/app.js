
const express=require('express');
const ProductData=require('./src/model/ProductData');
const signuoModel=require('./src/model/signupModel');
const cors=require('cors');
var bodyparser=require('body-parser');
var router=require('./src/route/productRouter');
var signupRouter=require('./src/route/signupRouter');
var app=new express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',router);
app.use('/',signupRouter);


app.listen(3000,function(){
    console.log('Listening to port : 3000');
});