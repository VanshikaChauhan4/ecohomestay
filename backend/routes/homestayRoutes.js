const express = require("express");
const router = express.Router();
const {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestayController");

// IMPORTANT: /search must be declared BEFORE /:id
// otherwise Express treats "search" as an :id value.
router.get("/search", searchHomestays);

router.get("/", getAllHomestays);
router.get("/:id", getHomestayById);
router.post("/", createHomestay);
router.put("/:id", updateHomestay);
router.delete("/:id", deleteHomestay);

module.exports = router;
