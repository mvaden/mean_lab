var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/youoweme")

var Friends = mongoose.Schema({
  name: String,
  excuse: String
});

mongoose.model("Friends", Friends);




module.exports= mongoose;
