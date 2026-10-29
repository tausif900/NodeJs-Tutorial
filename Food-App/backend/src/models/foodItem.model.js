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
  likesCount: {
    type: Number,
    default: 0,
  },
  saveCount: {
    type: Number,
    default: 0,
  },
});

const foodItemModel = mongoose.model("foodItem", foodItemSchema);

module.exports = foodItemModel;
