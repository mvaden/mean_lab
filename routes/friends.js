var express = require("express");
var router = express.Router();

Friend = require("../db/connection.js")

// get all friends
router.get("/", function(req, res){
  Friend.getFriends(function(err, friends){
    if(err){
      res.send(err)
    }
    res.json(friends)
  });
});
