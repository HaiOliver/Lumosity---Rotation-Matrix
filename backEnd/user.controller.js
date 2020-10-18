const User = require("./users");

// Create and Save a new Customer
exports.create = (req, res) => {
 // Validate request
 if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Customer
    const user = new User({
      name: req.body.name,
      score: req.body.score
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "line 23,controller.js, Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
      User.getAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "controller.js, line 35, Some error occurred while retrieving customers."
              });
            else res.send(data);
          });
};