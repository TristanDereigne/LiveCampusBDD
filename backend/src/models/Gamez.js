const mongoose = require("mongoose");

const GamezSchema = new mongoose.Schema({
  product: {
    product_name: { type: String, required: true },
    product_description: String,
    product_price: { type: Number, required: true },
    product_status: {
      type: String,
      enum: ["available", "out of stock"],
      default: "available",
    },
  },
  seller: {
    seller_name: { type: String, required: true },
    seller_creation_date: { type: Date, default: Date.now },
  },
});

module.exports = mongoose.model("Gamez", GamezSchema);
