const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { DateTime } = require("luxon");

const BpostSchema = new Schema({
  title: { type: String, required: true, minLength: 1 },
  text: { type: String, required: true, minLength: 1 },
  date: { type: Date, required: true, default: Date.now },
  isPublish: {
    type: String,
    default: false,
    required: true,
    enum: [true, false],
  },
});

BpostSchema.virtual("url").get(function () {
  return `/post/${this._id}`;
});

BpostSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date)
    .toFormat("dd/LL/yyyy")
    .toLocaleString(DateTime.DATE_SHORT);
});

module.exports = mongoose.model("Bpost", BpostSchema);
