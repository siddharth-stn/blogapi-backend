const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const CommentSchema = new Schema({
  text: { type: String, required: true, minLength: 1 },
  name: { type: String, required: true, minLength: 1 },
  date: { type: Date, required: true, default: date.now },
  bpost: { type: Schema.Types.ObjectId, ref: "BPOST" },
});

CommentSchema.virtual("url").get(function () {
  return `/comment/${this._id}`;
});

CommentSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate();
});

module.exports = mongoose.model("COMMENT", CommentSchema);
