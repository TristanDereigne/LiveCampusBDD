const Provider = require("../models/providerModel");

const getAllProviders = (req, res) => {
  Provider.getAllProviders((err, provider) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(provider);
  });
};
const getOneProvider = (req, res) => {
  const { id } = req.params;

  Provider.getOneProvider(id, (err, provider) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    res.status(200).json(provider);
  });
};
const createProvider = (req, res) => {
  const { name, date_creation } = req.body;
  if (!name || !date_creation)
    return res.status(400).json({ error: "name are required" });

  Provider.createProvider(name, date_creation, (err, newProvider) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newProvider);
  });
};

const updateProvider = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: "Name are required" });

  Provider.updateProvider(id, name, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Provider not found" });
    res.json(result);
  });
};

const deleteProvider = (req, res) => {
  const { id } = req.params;

  Provider.deleteProvider(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Provider not found" });
    res.json(result);
  });
};

module.exports = {
  getAllProviders,
  getOneProvider,
  createProvider,
  updateProvider,
  deleteProvider,
};
