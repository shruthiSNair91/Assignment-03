const express=require('express');
const mongoose=require('mongoose');
const ProductData=require('../model/ProductData');
const router=express.Router();

router.get('/products',function(req,res)
{    
     res.header("Access-Control-Allow-Origin","*");
     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   
    ProductData.find()
    .then(function(products)
    {
        res.send(products);
    });
});

router.post('/insert',function(req,res)
{

    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

   var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }

    var product = ProductData(product);
    product.save();
});

router.post('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var id=req.body.pid;
    console.log(id);

     ProductData.findOneAndDelete({ _id : id})
    .then(function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted : ", docs); 
        } 
    }); 
});

router.post('/edit',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    // console.log(req.params.id);
    ProductData.findOne({_id:req.body.pid})
    .then(function(product){
        console.log(product)
        res.send(product)
    });
 });

 router.post('/singleItem',function(req,res){

    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }

   ProductData.findByIdAndUpdate(req.body.product._id, {$set:req.body.product}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
    });
    // var product = ProductData(product);
    // product.save();

 });

module.exports=router;