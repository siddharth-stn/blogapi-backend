const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const CommentSchema = new Schema({
  text: { type: String, required: true, minLength: 1 },
  name: { type: String, required: true, minLength: 1 },
  date: { type: Date, required: true, default: Date.now },
  bpost: { type: Schema.Types.ObjectId, ref: "Bpost" },
});

CommentSchema.virtual("url").get(function () {
  return `/comment/${this._id}`;
});

CommentSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date)
    .toFormat("dd LL yyyy")
    .toLocaleString(DateTime.DATE_SHORT);
});

module.exports = mongoose.model("Comment", CommentSchema);
