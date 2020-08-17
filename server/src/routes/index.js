const router = require("express").Router();
const bookController = require("../controller/bookController");

// Define routes here
router.use("/books", bookController);

module.exports = router;