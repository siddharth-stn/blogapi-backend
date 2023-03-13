require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Connect to the mongo db database using mongoose
const mongoose = require("mongoose");
const MONGO_DB = process.env.MONGO_DB;

const main = async () => {
  await mongoose.connect(MONGO_DB);
};

main().catch((err) => console.log(err));
/////////////////////////////////////////

const privateRouter = require("./routes/private");
const publicRouter = require("./routes/public");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/private", privateRouter);
app.use("/public", publicRouter);

module.exports = app;
