//Global variables
require("dotenv").config();
const express = require("express");
const db = require("mongoose");
const override = require('method-override')
const app = express();
const port = 3000;
const MONGO_URI = process.env.MONGO_URI

//Middleware
app.use(override("_method"));
app.use(express.urlencoded({extended: false}));

//Db Connection
db.connect(MONGO_URI)

//View engine
app.set("./views");
app.set("view engine", "pug");
app.engine('pug', require('express-react-views').createEngine());