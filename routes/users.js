var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", function (req, res, next) {
  res.send("You are so cool");
});

router.get("/cool/beach", function (req, res, next) {
  res.send("I love beach");
});

router.get("/ifc", function (req, res, next) {
  res.send("I love ifc");
});

module.exports = router;
