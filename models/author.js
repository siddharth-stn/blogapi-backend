const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String, required: true, minLength: 1 },
  username: { type: String, required: true, minLength: 1 },
  password: { type: String, required: true, minLength: 1 },
});

module.exports = mongoose.model("Author", AuthorSchema);
