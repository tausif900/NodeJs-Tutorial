const foodItemModel = require("../models/foodItem.model");
const foodPartnerModel = require("../models/foodPartner.model");

const getFoodPartnerById = async (req, res) => {
  const foodPartnerId = req.params.foodPartnerId;
  const foodPartner = await foodPartnerModel.findById({ _id: foodPartnerId });
  const foodItems = await foodItemModel.find({ foodPartner: foodPartnerId });
  console.log(foodPartner);

  if (!foodPartner) {
    return res.status(404).json({
      message: "Food Partner not Found",
    });
  }

  res.status(200).json({
    message: `Partner Fetched Successfully ${foodPartnerId}`,
    foodPartner: {
      ...foodPartner.toObject(),
      foodItems,
    },
  });
};

module.exports = {
  getFoodPartnerById,
};
