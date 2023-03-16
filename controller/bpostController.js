const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const Bpost = require("../models/bpost");

exports.bpost_get = (req, res, next) => {
  Bpost.find()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => res.status(400).json(err));
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

//Update blog post to publish
exports.bpost_put_publish = [
  body("isPublish").trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    Bpost.findByIdAndUpdate(req.params.id, { isPublish: req.body.isPublish })
      .then((result) => {
        return res
          .status(200)
          .json({ msg: "data updated successfully", result });
      })
      .catch((err) => res.status(400).json({ err }));
  },
];

//Update blog post to unpublish
exports.bpost_put_unpublish = [
  body("isPublish").trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    Bpost.findByIdAndUpdate(req.params.id, { isPublish: req.body.isPublish })
      .then((result) => {
        return res
          .status(200)
          .json({ msg: "data updated successfully", result });
      })
      .catch((err) => res.status(400).json({ err }));
  },
];
