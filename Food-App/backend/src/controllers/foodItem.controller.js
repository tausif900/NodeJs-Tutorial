const foodItemModel = require("../models/foodItem.model");
const { uploadFile } = require("../services/storage.service");
const { v7: uuid } = require("uuid");

async function addFoodItems(req, res) {
  console.log(req.body);
  console.log(req.file);
  const result = await uploadFile(req.file.buffer, uuid());
  console.log(result.url);

  const foodItem = await foodItemModel.create({
    foodName: req.body.foodName,
    foodVideo: result.url,
    description: req.body.description,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Item added!!!",
    foodItem,
  });
}

const getFoodItems = async (req, res) => {
  const foodItems = await foodItemModel.find({});
  res
    .status(200)
    .json({ message: "Food Items fetched Successfully!!!", foodItems });
};

module.exports = {
  addFoodItems,
  getFoodItems,
};
