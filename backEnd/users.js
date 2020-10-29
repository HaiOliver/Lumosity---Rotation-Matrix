const sql = require("./db.js");

// constructor
const User = function(user) {
  this.name= user.name;
  this.score = user.score;
};

// insert to DB
User.create = (newUser, result) => {
      console.log("*********************************new user: ", newUser)
      sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error ib user.js, line 13, error: ", err);
          result(err, null);
          return;
        }

        console.log("++++++++++++++++++++++++++++++++++++++++++++Line 12, user.js, created user in Db: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
      });
    };


// Get all user in top 5
User.getAll = result => {
      console.log("========================================= Get users from DB =============================")
      sql.query("SELECT * FROM users ORDER BY score DESC", (err, res) => {
        if (err) {
          console.log("error ib user,js, line 28,error: ", err);
          result(null, err);
          return;
        }

        console.log("All users in DB: ", res);
        result(null, res);
      });
    };

module.exports = User;