const db = require("../config/db");

const Provider = {
  getAllProviders: (callback) => {
    db.query("CALL GetAllProviders()", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  },

  getOneProvider: (id, callback) => {
    db.query("CALL GetOneProvider(?)", [id], (err, results) => {
      if (err) return callback(err, null);
      if (results[0].length === 0) return callback(null, null);
      callback(null, results[0][0]);
    });
  },

  createProvider: (name, callback) => {
    db.query("CALL CreateProvider(?)", [name], (err, result) => {
      if (err) return callback(err, null);
      callback(null, { message: "Provider created" });
    });
  },

  updateProvider: (id, name, callback) => {
    db.query("CALL UpdateProvider(?, ?)", [id, name], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Provider name updated",
        affectedRows: result.affectedRows,
      });
    });
  },

  deleteProvider: (id, callback) => {
    db.query("CALL DeleteProvider(?)", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Provider deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Provider;
