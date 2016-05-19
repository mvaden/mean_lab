var mongoose = require("./connection");
// var seed_data = require("./friends_seeds");

var Friend = mongoose.model("Friends");

// Friends.remove().then(function() {
//   Friends.collection.insert(seed_data).then(function() {
//     process.exit();
//   });
// });

friend = new Friend({
  name: "bob",
  excuse: "cat ate it"
})

friend.save();
