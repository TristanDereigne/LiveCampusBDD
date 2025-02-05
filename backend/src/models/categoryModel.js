const db = require("./db");

const Category = {
  getAllCategories: (callback) => {
    db.query("SELECT * FROM category", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  createCategory: (name, date_creation, callback) => {
    db.query(
      "INSERT INTO category (name, date_creation) VALUES (?, ?)",
      [name, date_creation],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, {
          id: result.insertId,
          name,
          date_creation,
        });
      }
    );
  },
  updateCategory: (id, name, callback) => {
    db.query(
      "UPDATE category SET name = ? WHERE id = ?"[(name, id)],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, {
          message: "Category name changed",
          affectedRows: result.affectedRows,
        });
      }
    );
  },
  deleteCategory: (id, callback) => {
    db.query("DELETE FROM category WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Category deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Category;
