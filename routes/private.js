const express = require("express");
const router = express.Router();

const bpostController = require("../controller/bpostController");

//Create Blog-post (works only when authenticated)
router.post(
  "/bpost",
  (req, res, next) => {
    console.log("I the final route");
    next();
  },
  bpostController.bpost_post
);

//Publish the unpublished posts
router.put("/bpost/:id/publish", bpostController.bpost_put_publish);

//Unpublish the published posts
router.put("/bpost/:id/unpublish", bpostController.bpost_put_unpublish);

module.exports = router;
