const react = require('react');
const express = require('express');
const User = require("../models/user.js")
const router = express.Router();
router.use(express.urlencoded({extended: false}));
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Index New Delete Update Create 
router.get("/create", (req, res) => {
    res.render("Create");
});

//Create
router.post("/create", (req, res) => {

    if(req.body.customer === 'on') {
        req.body.customer = true;
    } else {
        req.body.customer = false;
    }

    if(req.body.vendor === 'on') {
        req.body.vendor = true;
    } else {
        req.body.vendor = false;
    }
    User.create(req.body, (err, newUser) => {
     if(err) {
            console.log(err)
        }
        console.log(newUser);
        res.redirect("/");
        
    })
})

module.exports = router;