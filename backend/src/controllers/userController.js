const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
};

const getOneUser = (req, res) => {
  const { id } = req.params;

  User.getOneUser(id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  });
};

const createUser = (req, res) => {
  const { name, date_creation } = req.body;
  if (!name || !date_creation)
    return res.status(400).json({ error: "name and date_creation are required" });

  User.createUser(name, date_creation, (err, newUser) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newUser);
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  User.deleteUser(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "User not found" });
    res.json(result);
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
};
