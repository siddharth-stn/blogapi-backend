const mongoose = require("mongoose");
const Comment = require("../models/comment");
const Bpost = require("../models/bpost");
const { body, validationResult } = require("express-validator");

//Show comment to a particular blog post
exports.comment_get = (req, res, next) => {
  const id = req.params.id;
  Comment.find({ bpost: id })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

//Write comment to a particular blog post
exports.comment_post = [
  body("text").trim().escape(),
  body("name").trim().escape(),
  (req, res, next) => {
    const error = validationResult(req);
    const id = req.params.id;
    if (!error.isEmpty()) {
      return res.status(400).json(error.array());
    }

    const comment = new Comment({
      text: req.body.text,
      name: req.body.name,
      bpost: id,
    });

    Bpost.findById(id)
      .then((post) => {
        if (!post) {
          return res.status(400).json("Post not in database");
        }
        comment
          .save()
          .then(() => {
            console.log("data written successfully");
            return res.status(200).json("data written successfully");
          })
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },
];
