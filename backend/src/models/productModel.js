const db = require("../config/db");

const Product = {
  getAllProducts: (callback) => {
    db.query("CALL GetAllProducts()", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  },

  getOneProduct: (id, callback) => {
    db.query("CALL GetOneProduct(?)", [id], (err, results) => {
      if (err) return callback(err, null);
      if (results[0].length === 0) return callback(null, null);
      callback(null, results[0][0]);
    });
  },

  createProduct: (
    name,
    description,
    purchase_price,
    status,
    date_creation,
    date_update,
    provider_id,
    category_id,
    callback
  ) => {
    db.query(
      "CALL InsertProduit(name, description, purchase_price, status, date_creation,  date_update, provider_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?)",
      [
        name,
        description,
        purchase_price,
        status,
        date_creation,
        date_update,
        provider_id,
        category_id,
      ],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, {
          id: result.insertId,
          name,
          description,
          purchase_price,
          status,
          date_creation,
          date_update,
          provider_id,
          category_id,
        });
      }
    );
  },
  updateProduct: (
    id,
    name,
    description,
    purchase_price,
    status,
    date_update,
    provider_id,
    category_id,
    callback
  ) => {
    db.query(
      "CALL UpdateProduct(?, ?, ?, ?, ?, ?, ?)",
      [id, name, description, purchase_price, status, provider_id, category_id],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, {
          message: "Product updated",
          affectedRows: result.affectedRows,
        });
      }
    );
  },
  deleteProduct: (id, callback) => {
    db.query("CALL DeleteProduct(?)", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Product deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Product;
