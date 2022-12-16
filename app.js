//Global variables
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const override = require('method-override')
const app = express();
const port = 3000;
const User = require("./models/user.js");
const Product = require("./models/product.js");



//Routers
app.use(override("_method"));

const main = require("./controllers/main.js");
app.use(main);

const login = require("./controllers/login.js");
app.use(login);

const create = require("./controllers/create.js");
app.use(create);

const vendor = require("./controllers/vendorProduct.js");
app.use(vendor);





//Middleware


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
mongoose.set('strictQuery', true);


//View engine
app.set("./views");
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());


app.listen(port, () => console.log('Listening on port 3000'))
