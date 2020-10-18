
// import express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const User = require("./users")

var cors=require('cors');


// // parse requests of content-type: application/json
// app.use(bodyParser.json());

// // parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(cors());

// get all top 5 users
app.get("/users", (req,res)=>{
      User.getAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving customers."
              });
            else res.send(data);
          });

});

// insert new users
app.post("/user", (req,res)=>{
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

      console.log("=========================req: ",req)
      console.log("=========================score: ",req.body.score)
          // Save Customer in the database
          User.create(user, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "line 23,controller.js, Some error occurred while creating the Customer."
              });
            else res.send("inserted successfully: ",data);
          });


});

// set port, listen for requests
app.listen(3000, () => {
  console.log("ATTENTION !!!! Line 21 !! Server is running on port 3000.");
});