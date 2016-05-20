var express = require("express");
var mongoose = require("mongoose");
var app     = express();

var friends = require("./routes/friends")

mongoose.connect("mongodb://localhost/youoweme")
var db = mongoose.connection

app.get("/", function(req, res){
  res.send("This is working");
});

app.listen(3001, function(){
  console.log("It's listening...");
});


console.log("Hello worldzzz!")
console.log("BoomChakaLaka");
