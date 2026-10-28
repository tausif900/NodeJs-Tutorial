const mongoose = require("mongoose");

const saveFoodItemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    foodItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodItem",
      required: true,
    },
  },
  { timestamps: true },
);

const saveFoodItemModel = mongoose.model("saveFoodItem", saveFoodItemSchema);

module.exports = saveFoodItemModel;
