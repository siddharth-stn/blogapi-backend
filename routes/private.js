const express = require("express");
const router = express.Router();

const authorController = require("../controller/authorController");

router.get("/login", authorController.author_login_get);

router.post("/login", authorController.author_login_post);

module.exports = router;
