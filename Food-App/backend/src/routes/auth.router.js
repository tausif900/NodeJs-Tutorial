const express = require("express");
const { userRegistration } = require("../controllers/auth.controller");

const router = express.Router();

/**
 * - POST API - Registering the User in the Database
 * - Create a new User
 * - /api/auth/user-register
 */
router.post("/user-register", userRegistration);

module.exports = router;
