const db = require("./db");

const Provider = {
  getAllProviders: (callback) => {
    db.query("SELECT * FROM provider", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  createProvider: (name, date_creation, callback) => {
    db.query(
      "INSERT INTO provider (name, date_creation) VALUES (?, ?)",
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
  updateProvider: (id, name, callback) => {
    db.query(
      "UPDATE provider SET name = ? WHERE id = ?"[(name, id)],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, {
          message: "Provider name changed",
          affectedRows: result.affectedRows,
        });
      }
    );
  },
  deleteProvider: (id, callback) => {
    db.query("DELETE FROM provider WHERE id = ?", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "Provider deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = Provider;
