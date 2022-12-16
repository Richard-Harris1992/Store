const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const Product = require("../models/product.js");

router.get("/:id/myProducts", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        
        if(foundUser.loggedIn) {
            Product.find({})
            .where({_id : foundUser.product})
            .exec(function(err, thing) { 
                res.render("VendorProduct", {product: thing, user: foundUser});
            });  
            
        } else {
            res.redirect("/");
        }
    });
});

router.get('/:id/:productId/edit', (req, res) => {
    Product.findById(req.params.productId, (err, foundProduct) => {
        User.findById(req.params.id, (err, foundUser) => {
               res.render("Edit",{product: foundProduct, user: foundUser });
        });
     
    });
   
})

router.put('/:id/myProducts', (req, res) => {
    
    User.findByIdAndUpdate(req.params.id, req.body, (err, changes) => {
        console.log(req.body)
        res.redirect(`/${req.params.id}/myProducts`);
    });
});

module.exports = router;