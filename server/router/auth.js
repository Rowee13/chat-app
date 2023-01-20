const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//* register user
router.post("/signup", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User created successfully",
            result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: "Errpr creating user",
            err,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        error,
      });
    });
});

module.exports = router;
