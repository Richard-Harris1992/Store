const react = require('react');
const express = require('express');
const router = express.Router();
//Index New Delete Update Create 
router.get("/", (req, res) => {
    res.render("Main");
});

module.exports = router;