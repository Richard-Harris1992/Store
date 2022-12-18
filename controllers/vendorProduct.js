const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const Product = require("../models/product.js");
const override = require('method-override');
const app = express();
app.use(override("_method"));

//Remember to check is loggedIn = true for all routes else redirect to "/"

router.get("/:id", (req, res) => {
    Product.find({}, (err, products) => {
        User.findById(req.params.id, (err, loggedInUser) => {
            res.render("Index", { user: loggedInUser, product: products });
        });
    });
});


router.get("/:id/myProducts", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
    
        if (foundUser.loggedIn) {
            if(foundUser.vendor == false) {
                res.render("Error", {err: "You are not a vendor", user: foundUser});
            } else {
                 Product.find({})
                    .where({ _id: foundUser.product })
                    .exec(function (err, thing) {
                        res.render("VendorProduct", { product: thing, user: foundUser });
                     });
                }
        } else {
            res.redirect("/");
        }
    });
});

router.get("/:id/add", (req, res) => {
    User.findById(req.params.id, (err, userObj) => {
        if (userObj.loggedIn) {
            res.render("Product", { user: userObj });
        } else {
            res.redirect("/");
        }
    });
});

router.get("/:id/shoppingCart", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if (foundUser.loggedIn) {
            if(foundUser.customer == false) {
                res.render("Error", {err: "You are not a customer", user: foundUser});
            } else {
                 Product.find({})
                    .where({ _id: foundUser.shoppingCart })
                    .exec(function (err, thing) {
                    res.render("ShoppingCart", { product: thing, user: foundUser });
                    });
            }
        } else {
            res.redirect("/");
        }
    });
});

router.get("/:id/:productid", (req, res) => {
    User.findById(req.params.id, (err, userObj) => {
        if (userObj.loggedIn) {
            Product.findById(req.params.productid, (err, item) => {
                res.render("Show", { product: item, user: userObj });
            });
        } else {
            res.redirect("/");
        }
    });
})

router.get('/:id/:productId/edit', (req, res) => {
    Product.findById(req.params.productId, (err, foundProduct) => {
        User.findById(req.params.id, (err, foundUser) => {
            if (foundUser.loggedIn) {
                res.render("Edit", { product: foundProduct, user: foundUser });
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
        if (err) {
            console.log(err);
        }
        User.findById(req.params.id, (err, updateUser) => { //Updates user obj to store product reference.
            if (updateUser.loggedIn) {
                updateUser.product.push(newProduct.id);
                updateUser.save();
                res.redirect(`/${updateUser.id}`);
            } else {
                res.redirect("/");
            }
        })
    });
});

router.put('/:id/myProducts', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, changes) => {
        if (changes.loggedIn) {
            res.redirect(`/${req.params.id}/myProducts`);
        } else {
            res.redirect("/");
        }
    });
});

router.put('/:id/:productId', (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, req.body, (err, changes) => {
        if (changes.loggedIn) {
            res.redirect(`/${req.params.id}/myProducts`);
        } else {
            res.redirect("/");
        }
    });
});

router.put('/:id/:productId/addToCart', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if (foundUser.loggedIn) {
            foundUser.shoppingCart.push(req.params.productId);
            foundUser.save();
            Product.findByIdAndUpdate(req.params.productId, {$inc : {"quantity": -1}} , (err, product) => {
                res.redirect(`/${req.params.id}`);
            });
            
        } else {
            res.redirect("/");
        }
    });

})

router.delete('/:id/shoppingCart', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $pull : { "shoppingCart" : req.body.id}}, (err, foundItems) => {
            if(err) {
                console.log(err)
            }
          res.redirect(`/${req.params.id}`);
    });
});
      

router.delete('/:id/:productId', (req, res) => {
    Product.findByIdAndDelete(req.params.productId, (err, deleted) => {
        User.findByIdAndUpdate(req.params.id, {$pull : {"product": req.params.productId}}, (err, stuff) => {
            res.redirect(`/${req.params.id}/myProducts`);  
           });
    })
});








module.exports = router;