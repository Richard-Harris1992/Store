const mongoose = require("mongoose");
const { ObjectId } = require("bson")

const ProductSchema = new mongoose.Schema({
    productName : {type: String},
    image: {type: String},
		discription:{type: String},
		quantity : {type: Number},
		price: {type: Number},
		keywords: [{type: String}], //Use this for searchbar?
        dateAdded: {type: new Date()}
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;