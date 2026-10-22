const express = require("express");
const { authUserMiddleware } = require("../middlewares/auth.middleware");
const { getFoodPartnerById } = require("../controllers/foodPartner.controller");
const router = express.Router();

/**
 * - GET FoodPartner by id
 * - /api/food-partner/:foodPartnerId
 */
router.get(
  "/food-partner/:foodPartnerId",
  authUserMiddleware,
  getFoodPartnerById,
);

module.exports = router;
