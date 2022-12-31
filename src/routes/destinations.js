const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const destController = require("../controllers/destinations");

// CREATE
// [post] : /v1/destination/post
router.post(
  "/post", [
    body("title").isLength({ min: 5 }).withMessage('Input title tidak sesuai'),
    body("description").isLength({ min: 5 }).withMessage('Input description tidak sesuai')
  ],
  destController.createDest
);

module.exports = router;
