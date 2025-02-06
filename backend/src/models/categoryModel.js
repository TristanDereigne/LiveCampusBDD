const db = require("./db");

const Category = {
  getAllCategories: (callback) => {
    db.query("CALL GetAllCategories()", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  },

  getOneCategory: (id, callback) => {
    db.query("CALL GetOneCategory(?)", [id], (err, results) => {
      if (err) return callback(err, null);
      if (results[0].length === 0) return callback(null, null);
      callback(null, results[0][0]);
    });
  },

  createCategory: (name, callback) => {
    db.query("CALL CreateCategory(?)", [name], (err, result) => {
      if (err) return callback(err, null);
      callback(null, { message: "Category created" });
    });
  },

  updateCategory: (id, name, callback) => {
    db.query("CALL UpdateCategory(?, ?)", [id, name], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Category name updated",
        affectedRows: result.affectedRows,
      });
    });
  },

  deleteCategory: (id, callback) => {
    db.query("CALL DeleteCategory(?)", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Category deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Category;
