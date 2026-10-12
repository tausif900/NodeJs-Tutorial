const express = require("express");
const {
  userRegistration,
  userLogin,
  userLogout,
  foodPartnerRegister,
  foodPartnerLogin,
  foodPartnerLogout,
} = require("../controllers/auth.controller");

const router = express.Router();

// User Auth APIs
/**
 * - POST API - Registering the User in the Database
 * - Create a new User
 * - /api/auth/user-register
 */
router.post("/user-register", userRegistration);

/**
 * - POST API - User Login
 * - /api/auth/user-login
 */
router.post("/user-login", userLogin);

/**
 * - GET API - User Logout
 * - /api/auth/user-logout
 */
router.get("/user-logout", userLogout);

// FoodPartner Auth APIs
/**
 * - POST API - Registering the FoodPartner in the Database
 * - Create a FoodPartner
 * - /api/auth/food-partner-register
 */
router.post("/food-partner-register", foodPartnerRegister);

/**
 * - POST API - Food Partner Login
 * - /api/auth/food-partner-login
 */
router.post("/food-partner-login", foodPartnerLogin);

/**
 * - GET API - Food Partner Logout
 * - /api/auth/food-partner-logout
 */
router.get("/food-partner-logout", foodPartnerLogout);

module.exports = router;
