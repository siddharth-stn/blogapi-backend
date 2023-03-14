const express = require("express");
const router = express.Router();

const bpostController = require("../controller/bpostController");

//Create Blog-post (works only when authenticated)
router.post(
  "/bpost",
  "passport.authenticate_in_here",
  bpostController.bpost_post
);

//Publish the unpublished posts
router.put(
  "/bpost/:id/publish",
  "passport.authenticate_in_here",
  bpostController.bpost_put_publish
);

//Unpublish the published posts
router.put(
  "/bpost/:id/unpublish",
  "passport.authenticate_in_here",
  bpostController.bpost_put_unpublish
);

module.exports = router;
