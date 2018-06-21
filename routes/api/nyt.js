const router = require("express").Router();
const articleController = require("../../controllers/controller");

// Matches with "/api/nyt"
router
  .route("/")
  .get(articleController.find)

module.exports = router;
