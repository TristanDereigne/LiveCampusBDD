const db = require("./db");

const User = {
  getAllUsers: (callback) => {
    db.query("CALL GetAllUsers()", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  },

  getOneUser: (id, callback) => {
    db.query("CALL GetOneUser(?)", [id], (err, results) => {
      if (err) return callback(err, null);
      if (results[0].length === 0) return callback(null, null);
      callback(null, results[0][0]);
    });
  },

  createUser: (name, date_creation, callback) => {
    db.query(
      "CALL InsertUser(?, ?)",
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

 

  deleteUser: (id, callback) => {
    db.query("CALL DeleteUser(?)", [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, {
        message: "User deleted",
        affectedRows: result.affectedRows,
      });
    });
  },
};

module.exports = User;
