const Gamez = require("../models/Gamez");

const getAllGamez = async (req, res) => {
  try {
    const games = await Gamez.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createGamez = async (req, res) => {
  try {
    const newGame = new Gamez(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllGamez, createGamez };
