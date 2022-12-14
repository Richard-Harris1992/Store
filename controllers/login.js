const react = require('react');
const express = require('express');
const bcrypt = require("bcryptjs")
const router = express.Router();
const User = require("../models/user.js")
router.use(express.urlencoded({extended: false}));

//Index New Delete Update Create 
router.get("/login", (req, res) => {
    res.render("Login");
});

//Create
router.post("/login", (req, res) => {
    User.findOne({email: req.body.email}).exec(function(error, user) {
      user.comparePassword(req.body.password, function(matchError, isMatch) {
          if (isMatch) {
            res.redirect("/:id");
          } else {
            res.send(`Error : ${error}`);
          }         
        });
      });
    });

module.exports = router;