const express = require("express");
const router = express.Router();

const bpostController = require("../controller/bpostController");

//Show all blog-posts
router.get("/bpost", bpostController.bpost_get);

module.exports = router;
