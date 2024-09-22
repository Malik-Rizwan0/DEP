const router = require('express').Router();
const Category = require('../models/Category');

// Create a new category
router.post('/', async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        console.error("Error while saving category:", err);  // Log the error for debugging
        res.status(500).json({ error: "Server Error", message: err.message });
    }
});

// Find category
router.get('/', async (req, res) => {
    try {
        const Cats = await Category.find();
        res.status(200).json(Cats);
    } catch (err) {
        console.error("Error while saving category:", err);  // Log the error for debugging
        res.status(500).json({ error: "Server Error", message: err.message });
    }
});


module.exports = router;


