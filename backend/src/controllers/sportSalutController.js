const SportSalut = require("../models/SportSalut");

const getAllSportSalut = async (req, res) => {
  try {
    const produits = await SportSalut.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createSportSalut = async (req, res) => {
  try {
    const produit = new SportSalut(req.body);
    await produit.save();
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllSportSalut, createSportSalut };
