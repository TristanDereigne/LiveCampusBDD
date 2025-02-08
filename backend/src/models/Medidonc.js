const mongoose = require("mongoose");

const MedidoncSchema = new mongoose.Schema({
  p_name: { type: String, required: true },
  p_description: String,
  p_last_update: { type: Date, default: Date.now },
  p_status: {
    type: String,
    enum: ["En stock", "Rupture de stock"],
    default: "En stock",
  },
  p_seller: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    creation_date: { type: Date, required: true },
  },
});

module.exports = mongoose.model("Medidonc", MedidoncSchema);
