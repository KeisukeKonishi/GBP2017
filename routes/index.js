var express = require('express');
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/GBP2017";

var db;
MongoClient.connect(url,function(err,mongodb){
  assert.equal(err,null);
  console.log("Connected correctly to server");
  db = mongodb;
});

/* GET home page. */
router.get("/",function(req,res){
  res.render("index",{ title: 'GBP2017' });
});

// get all beer list
router.get("/beers",function(req,res){
  db.collection("beerList").find().toArray(function(err,result){
    res.send(result);
  });
});

// update beer num
router.put("/beers/:id",function(req,res){
  console.log(req.params.id,req.body);
  db.collection("beerList").update({"id":Number(req.params.id)},{$set:req.body},function(err,result){
    res.send(result);
  });
});

module.exports = router;
