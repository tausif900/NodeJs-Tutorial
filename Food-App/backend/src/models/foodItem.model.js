const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  foodName: {
    type: String,
    require: true,
  },
  foodVideo: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodPartner",
  },
});

const foodItemModel = mongoose.model("foodItem", foodItemSchema);

module.exports = foodItemModel;
