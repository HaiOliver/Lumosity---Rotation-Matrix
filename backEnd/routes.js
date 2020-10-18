module.exports = app => {
      const users = require("./users");

      // Get top 5 users
      app.get("/users", users.getAll);

      // insert new users
      app.post("/user", users.create);
    };
