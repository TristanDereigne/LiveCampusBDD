
const db = require('./db');

const User = {

    createUser: (username,id,callback) => {
        db.query("CALL CreateUser(?,?)", [username], [id],(err, result) => {
          if (err) return callback(err, null);
          callback(null, { message: "user created" });
        });
      },

      getOneUser: (id, callback) => {
        db.query("CALL GetOneUser(?)", [id], (err, results) => {
          if (err) return callback(err, null);
          callback( null, {message: "ok"});
        });
      },

      getAllUsers: (callback) => {
        db.query("CALL GetAllUsers()", (err, results) => {
          if (err) return callback(err, null);
          callback(null, results[0]);
        });
      },

};

module.exports = User;
