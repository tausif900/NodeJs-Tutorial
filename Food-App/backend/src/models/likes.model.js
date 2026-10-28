const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema(
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

const likesModel = mongoose.model("likes", likesSchema);

module.exports = likesModel;
