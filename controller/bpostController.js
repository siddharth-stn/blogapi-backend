const mongoose = require("mongoose");

exports.bpost_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: list bposts on GET");
};

exports.bpost_post = (req, res, next) => {
  console.log("In the controller");
  res.send("NOT IMPLEMENTED: create bpost POST");
};

exports.bpost_put_publish = (req, res, next) => {
  res.send("NOT IMPLEMENTED: publish bpost on PUT");
};

exports.bpost_put_unpublish = (req, res, next) => {
  res.send("NOT IMPLEMENTED: unpublish bpost on PUT");
};
