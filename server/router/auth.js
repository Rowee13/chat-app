const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//* register user
router.post("/signup", (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const newUser = new User({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      console.log(newUser);

      newUser
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User registered successfully",
            result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error creating user",
            err,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Password was not hashed",
        error,
      });
    });
});

module.exports = router;
