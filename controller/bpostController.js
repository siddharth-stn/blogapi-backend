const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const Bpost = require("../models/bpost");

exports.bpost_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: list bposts on GET");
};

//Create new blogpost
exports.bpost_post = [
  body("title").trim().isLength({ min: 1 }).escape(),
  body("text").trim().isLength({ min: 1 }).escape(),
  //body("date").trim().isDate().escape(),

  //After sanitization and validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const bpost = new Bpost({
      title: req.body.title,
      text: req.body.text,
    });

    bpost
      .save()
      .then((user) => {
        if (!user) {
          return res.status(400).json({ err: "User not found" });
        }
        return res.status(200).json({ msg: "post saved successfully" });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
];
// const title = req.body.title;
// const text = req.body.text;
// const date = req.body.date;

//Update blog post to publish
exports.bpost_put_publish = (req, res, next) => {
  res.send("NOT IMPLEMENTED: publish bpost on PUT");
};

//Update blog post to unpublish
exports.bpost_put_unpublish = (req, res, next) => {
  res.send("NOT IMPLEMENTED: unpublish bpost on PUT");
};
