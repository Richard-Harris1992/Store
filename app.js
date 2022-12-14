//Global variables
require("dotenv").config();
const express = require("express");
const db = require("mongoose");
const bcrypt = require("bcryptjs")// maybe not needed here, just in model
const override = require('method-override')
const app = express();
const port = 3000;
const MONGO_URI = process.env.MONGO_URI

//Routers
const main = require("./controllers/main.js");
app.use(main);

//Middleware
app.use(override("_method"));
app.use(express.urlencoded({extended: false}));

//Db Connection
db.connect(MONGO_URI)

//View engine
app.set("./views");
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());

app.listen(port, () => console.log('hi'))