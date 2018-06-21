const router = require("express").Router();
const articleController = require("../../controllers/controller");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.find)
  .post(articleController.insert);

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
