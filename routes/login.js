const express = require("express");
const router = express.Router();

const authorController = require("../controller/authorController");

//Login as an Author of the Blog to write posts
router.post("/", authorController.author_login_post);

module.exports = router;
