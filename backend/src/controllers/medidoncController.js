const Medidonc = require("../models/Medidonc");

const getAllMedidonc = async (req, res) => {
  try {
    const medicalProducts = await Medidonc.find();
    res.json(medicalProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMedidonc = async (req, res) => {
  try {
    const newMedicalProduct = new Medidonc(req.body);
    await newMedicalProduct.save();
    res.status(201).json(newMedicalProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllMedidonc, createMedidonc };
