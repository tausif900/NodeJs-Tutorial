const express = require("express");

const {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} = require("../middlewares/auth.middleware");

const {
  addFoodItems,
  getFoodItems,
  likeFoodItem,
  saveFoodItem,
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

/**
 * - POST User likes the foodItem
 * - api/food/like-food-item
 */
router.post("/like-food-item", authUserMiddleware, likeFoodItem);

/**
 * - POST User save the foodItem
 * - api/food/save-food-item
 */

router.post("/save-food-item", authUserMiddleware, saveFoodItem);

module.exports = router;
