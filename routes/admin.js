var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", function (req, res, next) {
  res.render("index", { title: req.params.id });
});
router.get;
module.exports = router;
