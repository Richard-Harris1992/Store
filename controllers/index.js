const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: false}));
const User = require("../models/user.js");
const Product = require("../models/product.js");
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

router.get("/:id", (req, res) => {
    Product.find({}, (err, products) => {
        User.findById(req.params.id, (err, loggedInUser) => {
            if(loggedInUser.loggedIn) {
                res.render("Index", {user: loggedInUser,product: products});
            } else {
                res.redirect("/");
            }
        });
    });    
}); 



module.exports = router;