const foodItemModel = require("../models/foodItem.model");
const likesModel = require("../models/likes.model");
const saveFoodItemModel = require("../models/saveFoodItem.model");
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

const likeFoodItem = async (req, res) => {
  const { foodItem } = req.body;
  const user = req.user;

  const isAlreadyLiked = await likesModel.findOne({
    user: user._id,
    foodItem,
  });

  if (isAlreadyLiked) {
    await likesModel.deleteOne({
      user: user._id,
      foodItem,
    });

    await foodItemModel.findByIdAndUpdate(foodItem, {
      $inc: { likesCount: -1 },
    });

    return res.status(200).json({ message: "Food unliked successfully" });
  }

  const like = await likesModel.create({
    user: user._id,
    foodItem,
  });

  await foodItemModel.findByIdAndUpdate(foodItem, {
    $inc: { likesCount: 1 },
  });

  res.status(201).json({ message: "Food Liked Succesfully", like });
};

const saveFoodItem = async (req, res) => {
  const { foodItem } = req.body;
  const user = req.user;

  const isAlreadySaved = await saveFoodItemModel.findOne({
    user: user._id,
    foodItem,
  });

  if (isAlreadySaved) {
    await saveFoodItemModel.deleteOne({
      user: user._id,
      foodItem,
    });
    return res.status(200).json({ message: "Food unsaved successfully" });
  }

  const saveFoodItem = await saveFoodItemModel.create({
    user: user._id,
    foodItem,
  });

  res.status(201).json({ message: "Food saved Succesfully", saveFoodItem });
};

module.exports = {
  addFoodItems,
  getFoodItems,
  likeFoodItem,
  saveFoodItem,
};
