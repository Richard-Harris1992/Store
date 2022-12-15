const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const Product = require("../models/product.js")

router.get("/:id/myProducts", (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id, (err, foundUser) => {
        console.log(foundUser) 
        if(foundUser.loggedIn) {
            let items = [];
            foundUser.product.forEach(item => {
                items.push(Product.findById(item,(err, itemObj) => console.log(itemObj)));
            });
            console.log(items)
            res.render("VendorProduct", {products: foundUser, items: items});
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;