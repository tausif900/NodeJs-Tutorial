const express = require("express");

const {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} = require("../middlewares/auth.middleware");

const {
  addFoodItems,
  getFoodItems,
} = require("../controllers/foodItem.controller");

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

/**
 * - GET Add Food Items
 * - /api/food/get-food-items
 */
router.get("/get-food-items", authUserMiddleware, getFoodItems);

module.exports = router;
