const mongoose = require("../database");
const Schema = mongoose.Schema;
// create an schema
var userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, require: true },
});

var userModel = mongoose.model("users", userSchema);

module.exports = mongoose.model("Users", userModel);
