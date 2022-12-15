const react = require('react');
const express = require('express');
const Product = require("../models/product.js")
const User = require("../models/user.js")
const router = express.Router();
router.use(express.urlencoded({extended: false}));
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

router.get("/:id/add", (req, res) => {
    User.findById(req.params.id, (err, userObj) => {
        res.render("Product", {user: userObj});
    })
    
})

router.post("/:id", (req, res) => { 
    req.body.price = parseInt(req.body.price);
    let keywords = req.body.keywords.split(',');
    req.body.keywords = keywords;
    
    Product.create(req.body, (err, newProduct) => { //creates a new product obj and persists to database
        if(err) {
            console.log(err);
        }
       User.findById(req.params.id, (err, updateUser) => { //Updates user obj to store product reference.
            console.log(updateUser)
            updateUser.product.push(newProduct.id);
            updateUser.save();
            res.redirect(`/${updateUser.id}`);
        })
    });
});

module.exports = router;