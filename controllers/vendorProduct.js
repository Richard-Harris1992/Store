const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const Product = require("../models/product.js");

//Remember to check is loggedIn = true for all routes else redirect to "/";

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

router.get("/:id/add", (req, res) => {
    User.findById(req.params.id, (err, userObj) => {
        if(userObj.loggedIn) {
            res.render("Product", {user: userObj});
        } else {
            res.redirect("/");
        }
    });
});

router.put('/:id/myProducts', (req, res) => {
    
    User.findByIdAndUpdate(req.params.id, req.body, (err, changes) => {
        console.log(req.body)
        res.redirect(`/${req.params.id}/myProducts`);
    });
});

// router.put("/:id", (req, res) => {
//     User.findById(req.params.id, (err, userToLogOut) => {
//         userToLogOut.loggedIn = false;
//         userToLogOut.save();
//         res.redirect('/');
//     })
// });




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


router.get('/:id/:productId/edit', (req, res) => {
    Product.findById(req.params.productId, (err, foundProduct) => {
        User.findById(req.params.id, (err, foundUser) => {
               res.render("Edit",{product: foundProduct, user: foundUser });
        });
     
    });
   
})


module.exports = router;