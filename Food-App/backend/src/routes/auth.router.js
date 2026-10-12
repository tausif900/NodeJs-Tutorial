const express = require("express");
const { userRegistration, userLogin } = require("../controllers/auth.controller");

const router = express.Router();

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

module.exports = router;
