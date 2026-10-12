const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodPartner.model");

async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please login first",
    });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);

    const foodPartner = await foodPartnerModel.findById(decoded.id);
    console.log(foodPartner);

    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = { authFoodPartnerMiddleware };
