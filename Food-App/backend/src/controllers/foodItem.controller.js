const foodItemModel = require("../models/foodItem.model");

async function addFoodItems(req, res) {
  console.log(req.body);
  console.log(req.file);

  res.send("Food item created");
}

module.exports = {
  addFoodItems,
};
