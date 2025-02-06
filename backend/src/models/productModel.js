const db = require("./db");

const Product = {
  getAllProducts: (callback) => {
    db.query("SELECT * FROM product", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
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
      "INSERT INTO product (name, description, purchase_price, status, date_creation,  date_update, provider_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?)",
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
      "UPDATE products SET name = ?,  description = ?, purchase_price = ?, status = ?, date_update = ?, provider_id = ?, category_id = ? WHERE id = ?"[
        (name,
        description,
        purchase_price,
        status,
        date_update,
        provider_id,
        category_id,
        id)
      ],
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
    db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Product deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Product;
