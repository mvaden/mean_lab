var mongoose = require("mongoose");

// friends Schema
var friendSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  status: {
    type: String
  }
});

var Friend = module.exports = mongoose.model("Friend", friendSchema);






module.exports = mongoose;
