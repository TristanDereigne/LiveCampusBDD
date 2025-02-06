const Category = require("../models/categoryModel");

const getAllCategories = (req, res) => {
  Category.getAllCategories((err, category) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(category);
  });
};

const createCategory = (req, res) => {
  const { name, date_creation } = req.body;
  if (!name || !date_creation)
    return res.status(400).json({ error: "name are required" });

  Category.createCategory(name, date_creation, (err, newCategory) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newCategory);
  });
};
const getOneCategory = (req, res) => {
  const { id } = req.params;

  Category.getOneCategory(id, (err, category) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!category) return res.status(404).json({ error: "Category not found" });

    res.status(200).json(category);
  });
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: "Name are required" });

  Category.updateCategory(id, name, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Category not found" });
    res.json(result);
  });
};

const deleteCategory = (req, res) => {
  const { id } = req.params;

  Category.deleteCategory(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Category not found" });
    res.json(result);
  });
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
