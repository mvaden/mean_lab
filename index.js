var express = require("express");

var app     = express();

app.get("/", function(req, res){
  res.send("This is working");
});

app.listen(3001, function(){
  console.log("It's listening...");
})


console.log("Hello worldzzz!")
console.log("BoomChakaLaka");
