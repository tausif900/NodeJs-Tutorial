const express = require("express");
const { authFoodPartnerMiddleware } = require("../middlewares/auth.middleware");
const { addFoodItems } = require("../controllers/foodItem.controller");
const multer = require("multer");
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

/**
 * - POST Add Food Items
 * - /api/food/add-food-items
 */
router.post(
  "/add-food-items",
  authFoodPartnerMiddleware,
  upload.single("video"),
  addFoodItems,
);

module.exports = router;
