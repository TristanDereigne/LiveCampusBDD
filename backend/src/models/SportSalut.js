const mongoose = require("mongoose");

const SportSalutSchema = new mongoose.Schema({
  nom_produit: { type: String, required: true },
  description_produit: String,
  nom_revendeur: String,
  en_stock: { type: String, enum: ["Oui", "Non"], default: "Oui" },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model("SportSalut", SportSalutSchema);
