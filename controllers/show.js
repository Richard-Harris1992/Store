const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const Product = require("../models/product.js");

router.get("/:id/:productid", (req, res) => {
    User.findById(req.params.id, (err, userObj) => {
        if(userObj.loggedIn) {
            Product.findById(req.params.productid, (err, item) => {
                res.render("Show", {product: item, user: userObj});
            });
        } else {
            res.redirect("/");
        }
    });
})

module.exports = router;