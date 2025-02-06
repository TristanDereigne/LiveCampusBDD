const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  Product.getAllProducts((err, products) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(products);
  });
};
const getOneProduct = (req, res) => {
  const { id } = req.params;

  Product.getOneProduct(id, (err, product) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  });
};
const createProduct = (req, res) => {
  const {
    name,
    description,
    purchase_price,
    status,
    date_creation,
    date_update,
    provider_id,
    category_id,
  } = req.body;
  if (
    !name ||
    !description ||
    !purchase_price ||
    !status ||
    !date_creation ||
    !date_update ||
    !provider_id ||
    !category_id
  )
    return res
      .status(400)
      .json({ error: "One of data was empty and are required" });

  Product.createProduct(
    name,
    description,
    purchase_price,
    status,
    date_creation,
    date_update,
    provider_id,
    category_id,
    (err, newProduct) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(newProduct);
    }
  );
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    purchase_price,
    status,
    date_creation,
    date_update,
    provider_id,
    category_id,
  } = req.body;

  if (
    !name ||
    !description ||
    !purchase_price ||
    !status ||
    !date_creation ||
    !date_update ||
    !provider_id ||
    !category_id
  )
    return res.status(400).json({ error: "Data are required" });

  Product.updateProduct(
    id,
    name,
    description,
    purchase_price,
    status,
    date_creation,
    date_update,
    provider_id,
    category_id,
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ error: "Product not found" });
      res.json(result);
    }
  );
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  Product.deleteProduct(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Product not found" });
    res.json(result);
  });
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
