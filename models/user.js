const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  creation: { type: String, required: true },
  admin: { type: Boolean, required: true },
  color: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
