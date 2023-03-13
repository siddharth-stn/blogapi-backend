const express = require("express");
const router = express.Router();

const bpostController = require("../controller/bpostController");

//Show all blog-posts
router.get("/bpost", bpostController.bpost_get);

//Create Blog-post (works only when authenticated)
router.post(
  "/bpost",
  "passport.authenticate_in_here",
  bpostController.bpost_post
);

module.exports = router;
