const router = require("express").Router();
const Category = require("../models/Category");

// CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE CATEGORY
router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
            await category.deleteOne();
            res.status(200).json("Category has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CATEGORY BY ID
router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;