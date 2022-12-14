//Global variables
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")// maybe not needed here, just in model
const override = require('method-override')
const app = express();
const port = 3000;
const MONGO_URI = process.env.MONGO_URI

//Routers
const main = require("./controllers/main.js");
app.use(main);

const login = require("./controllers/login.js");
app.use(login);

const create = require("./controllers/create.js");
app.use(create);

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

app.listen(port, () => console.log('hi'))