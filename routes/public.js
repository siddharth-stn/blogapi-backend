const express = require("express");
const router = express.Router();

const bpostController = require("../controller/bpostController");
const commentController = require("../controller/commentController");

//Show all blog-posts
router.get("/bpost", bpostController.bpost_get);

//Show comments in a particular blog post
router.get("/bpost/:id/comment", commentController.comment_get);

//Write comments on a particular blog post
router.post("/bpost/:id/comment", commentController.comment_post);

module.exports = router;
