//Global variables
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const override = require('method-override')
const app = express();
const port = 3000;
const User = require("./models/user.js");
const Product = require("./models/product.js");

//When I move to app it will put on the edit route. it updates also but never updates on server.

//Routers
const main = require("./controllers/main.js");
app.use(main);

const login = require("./controllers/login.js");
app.use(login);

const create = require("./controllers/create.js");
app.use(create);

const vendor = require("./controllers/vendorProduct.js");
app.use(vendor);





//Middleware
app.use(override("_method"));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
mongoose.set('strictQuery', true);


//View engine
app.set("./views");
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());


app.put('/:id/:productId', (req, res) => {
    
    Product.findByIdAndUpdate(req.params.productId, req.body, (err, changes) => {
        console.log(changes)
        res.redirect(`/${req.params.id}/myProducts`);
    });
});

app.listen(port, () => console.log('Listening on port 3000'))
