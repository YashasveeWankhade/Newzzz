
const express = require("express");
const router = express.Router();
const { fetchNewsFromDB } = require("../controllers/newsController");

router.get("/", fetchNewsFromDB);

module.exports = router;
